"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = require("../../../logger/Logger");
const Preconditions_1 = require("../../../Preconditions");
const DocFormatFactory_1 = require("../../../docformat/DocFormatFactory");
const KeyEvents_1 = require("../../../KeyEvents");
const TextHighlighterFactory_1 = require("./TextHighlighterFactory");
const TextExtracter_1 = require("./TextExtracter");
const TextHighlightRecords_1 = require("../../../metadata/TextHighlightRecords");
const Image_1 = require("../../../metadata/Image");
const SelectedContents_1 = require("../selection/SelectedContents");
const SelectionScreenshots_1 = require("./SelectionScreenshots");
const Hashcodes_1 = require("../../../Hashcodes");
const ImageType_1 = require("../../../metadata/ImageType");
const JQuery_1 = __importDefault(require("../../../ui/JQuery"));
const TextHighlights_1 = require("../../../metadata/TextHighlights");
const Screenshots_1 = require("../../../metadata/Screenshots");
const AnnotationPointers_1 = require("../../../annotations/AnnotationPointers");
const Optional_1 = require("../../../util/ts/Optional");
const { TextHighlightRows } = require("./TextHighlightRows");
const { TextSelections } = require("./TextSelections");
const log = Logger_1.Logger.create();
class TextHighlightController {
    constructor(model) {
        this.model = Preconditions_1.Preconditions.assertNotNull(model, "model");
        this.docFormat = DocFormatFactory_1.DocFormatFactory.getInstance();
    }
    onDocumentLoaded() {
        log.debug("TextHighlightController.onDocumentLoaded: ", this.model.docMeta);
    }
    start() {
        this.registerKeyDownListener();
        this.registerDocumentLoadedListener();
        this.registerWindowMessageListener();
    }
    registerKeyDownListener() {
        document.addEventListener("keydown", event => this.onKeyDown(event));
    }
    registerDocumentLoadedListener() {
        this.model.registerListenerForDocumentLoaded(() => this.onDocumentLoaded());
    }
    registerWindowMessageListener() {
        window.addEventListener("message", event => this.onMessageReceived(event), false);
    }
    onKeyDown(event) {
        return __awaiter(this, void 0, void 0, function* () {
            if (KeyEvents_1.KeyEvents.isKeyMetaActive(event)) {
                if (event.code) {
                    switch (event.code) {
                        case "KeyT":
                            yield this.doHighlight();
                            break;
                        default:
                            break;
                    }
                }
            }
        });
    }
    onMessageReceived(event) {
        const triggerEvent = event.data;
        switch (event.data.type) {
            case "create-text-highlight":
                const typedMessage = event.data;
                this.doHighlight(typedMessage.value.highlightColor)
                    .catch(err => log.error("Unable to create text highlight", err));
                break;
            case "delete-text-highlight":
                this.onTextHighlightDeleted(triggerEvent);
                break;
            default:
                break;
        }
    }
    doHighlight(highlightColor = 'yellow') {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.docFormat.name === "html") {
                yield this.doHighlightModern(highlightColor);
            }
            else {
                this.doHighlightLegacy(highlightColor);
            }
        });
    }
    doHighlightLegacy(highlightColor) {
        const textHighlighter = this.createLegacyTextHighlighter(highlightColor);
        textHighlighter.doHighlight();
    }
    doHighlightModern(highlightColor) {
        return __awaiter(this, void 0, void 0, function* () {
            log.info("Doing modern text highlight");
            yield this.onTextHighlightCreatedModern(highlightColor);
        });
    }
    createLegacyTextHighlighter(highlightColor) {
        let sequence = 0;
        const controller = this;
        let textHighlighter;
        const textHighlighterOptions = {
            highlightedClass: "text-highlight-span",
            color: '',
            manual: true,
            onBeforeHighlight: (range) => {
                return true;
            },
            onAfterHighlight: (range, highlightElements) => {
                const id = sequence++;
                const highlightClazz = "text-highlight-" + id;
                highlightElements.forEach(function (highlightElement) {
                    highlightElement.className = highlightElement.className + " " + highlightClazz;
                });
                (() => __awaiter(this, void 0, void 0, function* () {
                    yield controller.onTextHighlightCreatedLegacy("." + highlightClazz, highlightColor);
                    textHighlighter.removeHighlights();
                    log.info("Highlight completed.");
                }))().catch(err => log.error("Unable to highlight: ", err));
            },
            onRemoveHighlight(hlt) {
                log.info("onRemoveHighlight hlt: ", hlt);
                return true;
            }
        };
        const targetDocument = this.docFormat.targetDocument();
        textHighlighter = TextHighlighterFactory_1.TextHighlighterFactory.newInstance(targetDocument.body, textHighlighterOptions);
        return textHighlighter;
    }
    onTextHighlightCreatedLegacy(selector, highlightColor) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.createTextHighlight(() => __awaiter(this, void 0, void 0, function* () {
                log.info("TextHighlightController.onTextHighlightCreatedLegacy");
                const textHighlightRows = TextHighlightRows.createFromSelector(selector);
                const rects = textHighlightRows.map(current => current.rect);
                const text = this.extractText(selector);
                const textSelections = TextExtracter_1.TextExtracter.toTextSelections(textHighlightRows);
                return TextHighlightRecords_1.TextHighlightRecords.create(rects, textSelections, { TEXT: text }, highlightColor);
            }));
        });
    }
    onTextHighlightCreatedModern(highlightColor) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.createTextHighlight(() => __awaiter(this, void 0, void 0, function* () {
                const win = Preconditions_1.notNull(this.docFormat.targetDocument()).defaultView;
                log.info("TextHighlightController.onTextHighlightCreatedModern");
                const selectedContent = SelectedContents_1.SelectedContents.compute(win);
                const rectTexts = selectedContent.rectTexts;
                const rects = rectTexts.map(current => current.boundingPageRect);
                const text = selectedContent.text;
                const textSelections = TextSelections.compute(selectedContent);
                return TextHighlightRecords_1.TextHighlightRecords.create(rects, textSelections, { TEXT: text }, highlightColor);
            }));
        });
    }
    createTextHighlight(factory) {
        return __awaiter(this, void 0, void 0, function* () {
            const doc = Preconditions_1.notNull(this.docFormat.targetDocument());
            const win = doc.defaultView;
            const screenshotID = Hashcodes_1.Hashcodes.createRandomID();
            const selectionScreenshot = SelectionScreenshots_1.SelectionScreenshots.capture(doc, win);
            const textHighlightRecord = yield factory();
            const screenshotDimensions = {
                width: Math.floor(selectionScreenshot.clientRect.width),
                height: Math.floor(selectionScreenshot.clientRect.height)
            };
            const screenshotImageRef = this.toImage(screenshotID, 'screenshot', screenshotDimensions);
            TextHighlights_1.TextHighlights.attachImage(textHighlightRecord.value, screenshotImageRef);
            const currentPageMeta = this.docFormat.getCurrentPageDetail();
            const pageMeta = this.model.docMeta.getPageMeta(currentPageMeta.pageNum);
            log.info("Added text highlight to model");
            win.getSelection().empty();
            pageMeta.textHighlights[textHighlightRecord.id] = textHighlightRecord.value;
            const capturedScreenshot = yield selectionScreenshot.capturedScreenshotPromise;
            const dataURL = capturedScreenshot
                .map(current => current.dataURL)
                .getOrUndefined();
            if (dataURL) {
                const screenshot = this.toScreenshot(screenshotID, dataURL, 'screenshot', screenshotDimensions);
            }
            return textHighlightRecord;
        });
    }
    extractText(selector) {
        let result = "";
        JQuery_1.default(selector).each(function () {
            result += "\n" + JQuery_1.default(this).text();
        });
        return result;
    }
    onTextHighlightDeleted(triggerEvent) {
        log.info("Deleting text highlight from model: ", triggerEvent);
        const annotationPointers = AnnotationPointers_1.AnnotationPointers.toAnnotationPointers(".text-highlight", triggerEvent);
        Optional_1.Optional.first(...annotationPointers).map(annotationDescriptor => {
            log.info("Deleting annotationDescriptor: ", JSON.stringify(annotationDescriptor, null, "  "));
            const pageMeta = this.model.docMeta.getPageMeta(annotationDescriptor.pageNum);
            const textHighlight = pageMeta.textHighlights[annotationDescriptor.id];
            TextHighlights_1.TextHighlights.deleteTextHighlight(pageMeta, textHighlight);
        });
        log.info("Deleting text highlight");
    }
    toImage(screenshotID, rel, dimensions) {
        return new Image_1.Image({
            src: `screenshot:${screenshotID}`,
            width: dimensions.width,
            height: dimensions.height,
            rel,
            type: ImageType_1.ImageType.PNG
        });
    }
    toScreenshot(id, src, rel, dimensions) {
        const imageOpts = {
            width: dimensions.width,
            height: dimensions.height,
            type: ImageType_1.ImageType.PNG,
            rel
        };
        return Screenshots_1.Screenshots.create(src, imageOpts, id);
    }
}
exports.TextHighlightController = TextHighlightController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dEhpZ2hsaWdodENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUZXh0SGlnaGxpZ2h0Q29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBR0EsbURBQThDO0FBRTlDLDBEQUE4RDtBQUM5RCwwRUFBcUU7QUFFckUsa0RBQTZDO0FBQzdDLHFFQUFnRTtBQUNoRSxtREFBOEM7QUFDOUMsaUZBQWlHO0FBQ2pHLG1EQUE4QztBQUM5QyxvRUFBK0Q7QUFDL0QsaUVBQTREO0FBQzVELGtEQUE2QztBQUU3QywyREFBc0Q7QUFFdEQsZ0VBQW1DO0FBQ25DLHFFQUFnRTtBQUNoRSwrREFBMEQ7QUFDMUQsZ0ZBQTJFO0FBQzNFLHdEQUFtRDtBQU1uRCxNQUFNLEVBQUMsaUJBQWlCLEVBQUMsR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUUzRCxNQUFNLEVBQUMsY0FBYyxFQUFDLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFFckQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsdUJBQXVCO0lBRWhDLFlBQVksS0FBWTtRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLDZCQUFhLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsU0FBUyxHQUFHLG1DQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BELENBQUM7SUFNTSxnQkFBZ0I7UUFDbkIsR0FBRyxDQUFDLEtBQUssQ0FBQyw0Q0FBNEMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFFTSxLQUFLO1FBRVIsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLDhCQUE4QixFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLDZCQUE2QixFQUFFLENBQUM7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QztJQUVsRCxDQUFDO0NBRUo7QUF4WkQsMERBd1pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNb2RlbH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvTW9kZWwnO1xuaW1wb3J0IHtUcmlnZ2VyRXZlbnR9IGZyb20gJy4uLy4uLy4uL2NvbnRleHRtZW51L1RyaWdnZXJFdmVudCc7XG5pbXBvcnQge2lwY1JlbmRlcmVyfSBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vLi4vLi4vbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge1RleHRIaWdobGlnaHRSb3d9IGZyb20gJy4vVGV4dEhpZ2hsaWdodFJvdyc7XG5pbXBvcnQge25vdE51bGwsIFByZWNvbmRpdGlvbnN9IGZyb20gJy4uLy4uLy4uL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtEb2NGb3JtYXRGYWN0b3J5fSBmcm9tICcuLi8uLi8uLi9kb2Nmb3JtYXQvRG9jRm9ybWF0RmFjdG9yeSc7XG5pbXBvcnQge0RvY0Zvcm1hdH0gZnJvbSAnLi4vLi4vLi4vZG9jZm9ybWF0L0RvY0Zvcm1hdCc7XG5pbXBvcnQge0tleUV2ZW50c30gZnJvbSAnLi4vLi4vLi4vS2V5RXZlbnRzJztcbmltcG9ydCB7VGV4dEhpZ2hsaWdodGVyRmFjdG9yeX0gZnJvbSAnLi9UZXh0SGlnaGxpZ2h0ZXJGYWN0b3J5JztcbmltcG9ydCB7VGV4dEV4dHJhY3Rlcn0gZnJvbSAnLi9UZXh0RXh0cmFjdGVyJztcbmltcG9ydCB7VGV4dEhpZ2hsaWdodFJlY29yZCwgVGV4dEhpZ2hsaWdodFJlY29yZHN9IGZyb20gJy4uLy4uLy4uL21ldGFkYXRhL1RleHRIaWdobGlnaHRSZWNvcmRzJztcbmltcG9ydCB7SW1hZ2V9IGZyb20gJy4uLy4uLy4uL21ldGFkYXRhL0ltYWdlJztcbmltcG9ydCB7U2VsZWN0ZWRDb250ZW50c30gZnJvbSAnLi4vc2VsZWN0aW9uL1NlbGVjdGVkQ29udGVudHMnO1xuaW1wb3J0IHtTZWxlY3Rpb25TY3JlZW5zaG90c30gZnJvbSAnLi9TZWxlY3Rpb25TY3JlZW5zaG90cyc7XG5pbXBvcnQge0hhc2hjb2Rlc30gZnJvbSAnLi4vLi4vLi4vSGFzaGNvZGVzJztcbmltcG9ydCB7SURpbWVuc2lvbnN9IGZyb20gJy4uLy4uLy4uL3V0aWwvRGltZW5zaW9ucyc7XG5pbXBvcnQge0ltYWdlVHlwZX0gZnJvbSAnLi4vLi4vLi4vbWV0YWRhdGEvSW1hZ2VUeXBlJztcblxuaW1wb3J0ICQgZnJvbSAnLi4vLi4vLi4vdWkvSlF1ZXJ5JztcbmltcG9ydCB7VGV4dEhpZ2hsaWdodHN9IGZyb20gJy4uLy4uLy4uL21ldGFkYXRhL1RleHRIaWdobGlnaHRzJztcbmltcG9ydCB7U2NyZWVuc2hvdHN9IGZyb20gJy4uLy4uLy4uL21ldGFkYXRhL1NjcmVlbnNob3RzJztcbmltcG9ydCB7QW5ub3RhdGlvblBvaW50ZXJzfSBmcm9tICcuLi8uLi8uLi9hbm5vdGF0aW9ucy9Bbm5vdGF0aW9uUG9pbnRlcnMnO1xuaW1wb3J0IHtPcHRpb25hbH0gZnJvbSAnLi4vLi4vLi4vdXRpbC90cy9PcHRpb25hbCc7XG5pbXBvcnQge1BhZ2VtYXJrTW9kZX0gZnJvbSAnLi4vLi4vLi4vbWV0YWRhdGEvUGFnZW1hcmtNb2RlJztcbmltcG9ydCB7VHlwZWRNZXNzYWdlfSBmcm9tICcuLi8uLi8uLi91dGlsL1R5cGVkTWVzc2FnZSc7XG5pbXBvcnQge0hpZ2hsaWdodENyZWF0ZWRFdmVudH0gZnJvbSAnLi4vLi4vLi4vY29tbWVudHMvcmVhY3QvSGlnaGxpZ2h0Q3JlYXRlZEV2ZW50JztcbmltcG9ydCB7SGlnaGxpZ2h0Q29sb3J9IGZyb20gJy4uLy4uLy4uL21ldGFkYXRhL0Jhc2VIaWdobGlnaHQnO1xuXG5jb25zdCB7VGV4dEhpZ2hsaWdodFJvd3N9ID0gcmVxdWlyZShcIi4vVGV4dEhpZ2hsaWdodFJvd3NcIik7XG5cbmNvbnN0IHtUZXh0U2VsZWN0aW9uc30gPSByZXF1aXJlKFwiLi9UZXh0U2VsZWN0aW9uc1wiKTtcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgY2xhc3MgVGV4dEhpZ2hsaWdodENvbnRyb2xsZXIge1xuXG4gICAgY29uc3RydWN0b3IobW9kZWw6IE1vZGVsKSB7XG4gICAgICAgIHRoaXMubW9kZWwgPSBQcmVjb25kaXRpb25zLmFzc2VydE5vdE51bGwobW9kZWwsIFwibW9kZWxcIik7XG4gICAgICAgIHRoaXMuZG9jRm9ybWF0ID0gRG9jRm9ybWF0RmFjdG9yeS5nZXRJbnN0YW5jZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVhZG9ubHkgbW9kZWw6IE1vZGVsO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBkb2NGb3JtYXQ6IERvY0Zvcm1hdDtcblxuICAgIHB1YmxpYyBvbkRvY3VtZW50TG9hZGVkKCkge1xuICAgICAgICBsb2cuZGVidWcoXCJUZXh0SGlnaGxpZ2h0Q29udHJvbGxlci5vbkRvY3VtZW50TG9hZGVkOiBcIiwgdGhpcy5tb2RlbC5kb2NNZXRhKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnQoKSB7XG5cbiAgICAgICAgdGhpcy5yZWdpc3RlcktleURvd25MaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRG9jdW1lbnRMb2FkZWRMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyV2luZG93TWVzc2FnZUxpc3RlbmVyKCk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlZ2lzdGVyS2V5RG93bkxpc3RlbmVyKCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB0aGlzLm9uS2V5RG93bihldmVudCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVnaXN0ZXJEb2N1bWVudExvYWRlZExpc3RlbmVyKCkge1xuICAgICAgICB0aGlzLm1vZGVsLnJlZ2lzdGVyTGlzdGVuZXJGb3JEb2N1bWVudExvYWRlZCgoKSA9PiB0aGlzLm9uRG9jdW1lbnRMb2FkZWQoKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZWdpc3RlcldpbmRvd01lc3NhZ2VMaXN0ZW5lcigpIHtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgZXZlbnQgPT4gdGhpcy5vbk1lc3NhZ2VSZWNlaXZlZChldmVudCksIGZhbHNlKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG5cbiAgICAgICAgaWYgKEtleUV2ZW50cy5pc0tleU1ldGFBY3RpdmUoZXZlbnQpKSB7XG5cbiAgICAgICAgICAgIGlmIChldmVudC5jb2RlKSB7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGV2ZW50LmNvZGUpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiB3ZSBzaG91bGQgbm90IHVzZSAnY29kZScgYnV0IHNob3VsZCB1c2UgJ2tleScuLi4gVGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIHByb2JsZW0gaXMgdGhhdCBvbiBPUyBYIHRoZSBrZXkgY29kZSByZXR1cm5lZCAnRGVhZCcgYnV0IHdhc1xuICAgICAgICAgICAgICAgICAgICAvLyB3b3JraW5nIGJlZm9yZS4gIE5vdCBzdXJlIHdoeSBpdCBzdGFydGVkIGJyZWFraW5nLlxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiS2V5VFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5kb0hpZ2hsaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbk1lc3NhZ2VSZWNlaXZlZChldmVudDogYW55KSB7XG5cbiAgICAgICAgLy8gbG9nLmluZm8oXCJSZWNlaXZlZCBtZXNzYWdlOiBcIiwgZXZlbnQpO1xuXG4gICAgICAgIGNvbnN0IHRyaWdnZXJFdmVudCA9IGV2ZW50LmRhdGE7XG5cbiAgICAgICAgc3dpdGNoIChldmVudC5kYXRhLnR5cGUpIHtcblxuICAgICAgICAgICAgY2FzZSBcImNyZWF0ZS10ZXh0LWhpZ2hsaWdodFwiOlxuXG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZWRNZXNzYWdlOiBUeXBlZE1lc3NhZ2U8SGlnaGxpZ2h0Q3JlYXRlZEV2ZW50PiA9IGV2ZW50LmRhdGE7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmRvSGlnaGxpZ2h0KHR5cGVkTWVzc2FnZS52YWx1ZS5oaWdobGlnaHRDb2xvcilcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJVbmFibGUgdG8gY3JlYXRlIHRleHQgaGlnaGxpZ2h0XCIsIGVycikpO1xuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJkZWxldGUtdGV4dC1oaWdobGlnaHRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLm9uVGV4dEhpZ2hsaWdodERlbGV0ZWQodHJpZ2dlckV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAvLyBsb2cud2FybihcIlVuaGFuZGxlZCBtZXNzYWdlOiBcIiArIGV2ZW50LmRhdGEudHlwZSwgZXZlbnQuZGF0YSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBkb0hpZ2hsaWdodChoaWdobGlnaHRDb2xvcjogSGlnaGxpZ2h0Q29sb3IgPSAneWVsbG93Jykge1xuXG4gICAgICAgIGlmICh0aGlzLmRvY0Zvcm1hdC5uYW1lID09PSBcImh0bWxcIikge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5kb0hpZ2hsaWdodE1vZGVybihoaWdobGlnaHRDb2xvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRvSGlnaGxpZ2h0TGVnYWN5KGhpZ2hsaWdodENvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIGRvSGlnaGxpZ2h0TGVnYWN5KGhpZ2hsaWdodENvbG9yOiBIaWdobGlnaHRDb2xvcikge1xuXG4gICAgICAgIGNvbnN0IHRleHRIaWdobGlnaHRlciA9IHRoaXMuY3JlYXRlTGVnYWN5VGV4dEhpZ2hsaWdodGVyKGhpZ2hsaWdodENvbG9yKTtcbiAgICAgICAgdGV4dEhpZ2hsaWdodGVyLmRvSGlnaGxpZ2h0KCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZG9IaWdobGlnaHRNb2Rlcm4oaGlnaGxpZ2h0Q29sb3I6IEhpZ2hsaWdodENvbG9yKSB7XG5cbiAgICAgICAgbG9nLmluZm8oXCJEb2luZyBtb2Rlcm4gdGV4dCBoaWdobGlnaHRcIik7XG4gICAgICAgIGF3YWl0IHRoaXMub25UZXh0SGlnaGxpZ2h0Q3JlYXRlZE1vZGVybihoaWdobGlnaHRDb2xvcik7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGV4dCBoaWdobGlnaHRpbmcgaW4gdGhlIGN1cnJlbnQgZG9jdW1lbnQgd2l0aCB0aGUgaGlnaGxpZ2h0ZXIuXG4gICAgICovXG4gICAgcHVibGljIGNyZWF0ZUxlZ2FjeVRleHRIaWdobGlnaHRlcihoaWdobGlnaHRDb2xvcjogSGlnaGxpZ2h0Q29sb3IpIHtcblxuICAgICAgICBsZXQgc2VxdWVuY2UgPSAwO1xuXG4gICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSB0aGlzO1xuXG4gICAgICAgIGxldCB0ZXh0SGlnaGxpZ2h0ZXI6IGFueSB8IHVuZGVmaW5lZDtcblxuICAgICAgICBjb25zdCB0ZXh0SGlnaGxpZ2h0ZXJPcHRpb25zID0ge1xuXG4gICAgICAgICAgICBoaWdobGlnaHRlZENsYXNzOiBcInRleHQtaGlnaGxpZ2h0LXNwYW5cIixcbiAgICAgICAgICAgIGNvbG9yOiAnJywgLy8gdGhpcyB3b3JrcyBhbmQgdGhlIGNvbG9yIGlzbid0IGNoYW5nZWQuXG4gICAgICAgICAgICBtYW51YWw6IHRydWUsXG5cbiAgICAgICAgICAgIG9uQmVmb3JlSGlnaGxpZ2h0OiAocmFuZ2U6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGxvZy5pbmZvKFwib25CZWZvcmVIaWdobGlnaHQgcmFuZ2U6IFwiLCByYW5nZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBvbkFmdGVySGlnaGxpZ2h0OiAocmFuZ2U6IGFueSwgaGlnaGxpZ2h0RWxlbWVudHM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGxvZy5pbmZvKFwib25BZnRlckhpZ2hsaWdodCByYW5nZTogXCIsIHJhbmdlKTtcbiAgICAgICAgICAgICAgICAvLyBsb2cuaW5mbyhcIm9uQWZ0ZXJIaWdobGlnaHQgaGx0czogXCIsIGhpZ2hsaWdodEVsZW1lbnRzKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gc2VxdWVuY2UrKztcbiAgICAgICAgICAgICAgICBjb25zdCBoaWdobGlnaHRDbGF6eiA9IFwidGV4dC1oaWdobGlnaHQtXCIgKyBpZDtcblxuICAgICAgICAgICAgICAgIGhpZ2hsaWdodEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oaGlnaGxpZ2h0RWxlbWVudDogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGhpZ2hsaWdodEVsZW1lbnQuc3R5bGUuY29sb3IgPSAnYmx1ZSc7XG4gICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodEVsZW1lbnQuY2xhc3NOYW1lID0gaGlnaGxpZ2h0RWxlbWVudC5jbGFzc05hbWUgKyBcIiBcIiArIGhpZ2hsaWdodENsYXp6O1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgKGFzeW5jICgpID0+ICB7XG5cbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgY29udHJvbGxlci5vblRleHRIaWdobGlnaHRDcmVhdGVkTGVnYWN5KFwiLlwiICsgaGlnaGxpZ2h0Q2xhenosIGhpZ2hsaWdodENvbG9yKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgdW5kZXJseWluZyA8c3Bhbj4gaGlnaGxpZ2h0cyBuZWVkIHRvIGJlIHJlbW92ZWQgbm93LlxuXG4gICAgICAgICAgICAgICAgICAgIHRleHRIaWdobGlnaHRlci5yZW1vdmVIaWdobGlnaHRzKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgbG9nLmluZm8oXCJIaWdobGlnaHQgY29tcGxldGVkLlwiKTtcblxuICAgICAgICAgICAgICAgIH0pKCkuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihcIlVuYWJsZSB0byBoaWdobGlnaHQ6IFwiLCBlcnIpKTtcblxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgb25SZW1vdmVIaWdobGlnaHQoaGx0OiBhbnkpIHtcbiAgICAgICAgICAgICAgICBsb2cuaW5mbyhcIm9uUmVtb3ZlSGlnaGxpZ2h0IGhsdDogXCIsIGhsdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCB0YXJnZXREb2N1bWVudCA9IHRoaXMuZG9jRm9ybWF0LnRhcmdldERvY3VtZW50KCk7XG5cbiAgICAgICAgdGV4dEhpZ2hsaWdodGVyID0gVGV4dEhpZ2hsaWdodGVyRmFjdG9yeS5uZXdJbnN0YW5jZSh0YXJnZXREb2N1bWVudCEuYm9keSwgdGV4dEhpZ2hsaWdodGVyT3B0aW9ucyk7XG5cbiAgICAgICAgcmV0dXJuIHRleHRIaWdobGlnaHRlcjtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCBieSB0aGUgY29udHJvbGxlciB3aGVuIHdlIGhhdmUgYSBuZXcgaGlnaGxpZ2h0IGNyZWF0ZWQgc28gdGhhdFxuICAgICAqIHdlIGNhbiB1cGRhdGUgdGhlIG1vZGVsLlxuICAgICAqL1xuICAgIHByaXZhdGUgYXN5bmMgb25UZXh0SGlnaGxpZ2h0Q3JlYXRlZExlZ2FjeShzZWxlY3Rvcjogc3RyaW5nLCBoaWdobGlnaHRDb2xvcjogSGlnaGxpZ2h0Q29sb3IpIHtcblxuICAgICAgICBhd2FpdCB0aGlzLmNyZWF0ZVRleHRIaWdobGlnaHQoYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICAvLyBGSVhNRTogZ2V0IHRoZSBuZXcgaGlnaGxpZ2h0ZXIgd29ya2luZyBGSVJTVCB3aXRob3V0IHRleHQgYW5kIHdpdGhvdXRcbiAgICAgICAgICAgIC8vIHJvd3MgLCBvciBvdGhlciBhZHZhbmNlZCBmZWF0dXJlcy5cblxuICAgICAgICAgICAgbG9nLmluZm8oXCJUZXh0SGlnaGxpZ2h0Q29udHJvbGxlci5vblRleHRIaWdobGlnaHRDcmVhdGVkTGVnYWN5XCIpO1xuXG4gICAgICAgICAgICBjb25zdCB0ZXh0SGlnaGxpZ2h0Um93czogVGV4dEhpZ2hsaWdodFJvd1tdID0gVGV4dEhpZ2hsaWdodFJvd3MuY3JlYXRlRnJvbVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICAgICAgICAgICAgY29uc3QgcmVjdHMgPSB0ZXh0SGlnaGxpZ2h0Um93cy5tYXAoY3VycmVudCA9PiBjdXJyZW50LnJlY3QpO1xuXG4gICAgICAgICAgICAvLyBUT0RPOiBkb24ndCBkbyB0aGlzIGZyb20gdGhlIHNlbGVjdG9yIGJlY2F1c2UgdGhlIHRleHRIaWdobGlnaHRSb3dzXG4gICAgICAgICAgICAvLyB3b3VsZCBiZSBhIGxvdCBiZXR0ZXIgc2luY2Ugd2UgaGF2ZSB0aGUgcmF3IGVsZW1lbnRzIHRvIHdvcmsgd2l0aC5cblxuICAgICAgICAgICAgLy8gRklYTUU6IEkgY2FuIGNhbGwgc2VsZWN0aW9uLnRvU3RyaW5nKCkgdG8gZ2V0IHRoZSB2YWx1ZSBhcyBhIHN0cmluZy5cbiAgICAgICAgICAgIC8vIEkgZG9uJ3QgbmVlZCB0byB1c2UgZXh0cmFjdFRleHQgb24gdGhlIHNlbGVjdG9yIGFueSBtb3JlLlxuXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gdGhpcy5leHRyYWN0VGV4dChzZWxlY3Rvcik7XG5cbiAgICAgICAgICAgIGNvbnN0IHRleHRTZWxlY3Rpb25zID0gVGV4dEV4dHJhY3Rlci50b1RleHRTZWxlY3Rpb25zKHRleHRIaWdobGlnaHRSb3dzKTtcblxuICAgICAgICAgICAgcmV0dXJuIFRleHRIaWdobGlnaHRSZWNvcmRzLmNyZWF0ZShyZWN0cywgdGV4dFNlbGVjdGlvbnMsIHtURVhUOiB0ZXh0fSwgaGlnaGxpZ2h0Q29sb3IpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIGJ5IHRoZSBjb250cm9sbGVyIHdoZW4gd2UgaGF2ZSBhIG5ldyBoaWdobGlnaHQgY3JlYXRlZCBzbyB0aGF0XG4gICAgICogd2UgY2FuIHVwZGF0ZSB0aGUgbW9kZWwuXG4gICAgICovXG4gICAgcHJpdmF0ZSBhc3luYyBvblRleHRIaWdobGlnaHRDcmVhdGVkTW9kZXJuKGhpZ2hsaWdodENvbG9yOiBIaWdobGlnaHRDb2xvcikge1xuXG4gICAgICAgIC8vIEZJWE1FOiBnZXQgdGhlIG5ldyBoaWdobGlnaHRlciB3b3JraW5nIEZJUlNUIHdpdGhvdXQgdGV4dCBhbmQgd2l0aG91dFxuICAgICAgICAvLyByb3dzICwgb3Igb3RoZXIgYWR2YW5jZWQgZmVhdHVyZXMuXG5cbiAgICAgICAgYXdhaXQgdGhpcy5jcmVhdGVUZXh0SGlnaGxpZ2h0KGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgY29uc3Qgd2luID0gbm90TnVsbCh0aGlzLmRvY0Zvcm1hdC50YXJnZXREb2N1bWVudCgpKS5kZWZhdWx0VmlldyE7XG5cbiAgICAgICAgICAgIGxvZy5pbmZvKFwiVGV4dEhpZ2hsaWdodENvbnRyb2xsZXIub25UZXh0SGlnaGxpZ2h0Q3JlYXRlZE1vZGVyblwiKTtcblxuICAgICAgICAgICAgLy8gcmlnaHQgbm93IHdlJ3JlIG5vdCBpbXBsZW1lbnRpbmcgcm93cy4uLlxuICAgICAgICAgICAgLy8gbGV0IHRleHRIaWdobGlnaHRSb3dzID0gVGV4dEhpZ2hsaWdodFJvd3MuY3JlYXRlRnJvbVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRDb250ZW50ID0gU2VsZWN0ZWRDb250ZW50cy5jb21wdXRlKHdpbik7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlY3RUZXh0czogYW55W10gPSBzZWxlY3RlZENvbnRlbnQucmVjdFRleHRzO1xuICAgICAgICAgICAgY29uc3QgcmVjdHMgPSByZWN0VGV4dHMubWFwKGN1cnJlbnQgPT4gY3VycmVudC5ib3VuZGluZ1BhZ2VSZWN0KTtcblxuICAgICAgICAgICAgY29uc3QgdGV4dCA9IHNlbGVjdGVkQ29udGVudC50ZXh0O1xuXG4gICAgICAgICAgICBjb25zdCB0ZXh0U2VsZWN0aW9ucyA9IFRleHRTZWxlY3Rpb25zLmNvbXB1dGUoc2VsZWN0ZWRDb250ZW50KTtcblxuICAgICAgICAgICAgcmV0dXJuIFRleHRIaWdobGlnaHRSZWNvcmRzLmNyZWF0ZShyZWN0cywgdGV4dFNlbGVjdGlvbnMsIHtURVhUOiB0ZXh0fSwgaGlnaGxpZ2h0Q29sb3IpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGxldCByZWN0cyA9IHRleHRIaWdobGlnaHRSb3dzLm1hcChjdXJyZW50ID0+IGN1cnJlbnQucmVjdCk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIC8vIFRPRE86IGRvbid0IGRvIHRoaXMgZnJvbSB0aGUgc2VsZWN0b3IgYmVjYXVzZSB0aGUgdGV4dEhpZ2hsaWdodFJvd3NcbiAgICAgICAgLy8gLy8gd291bGQgYmUgYSBsb3QgYmV0dGVyIHNpbmNlIHdlIGhhdmUgdGhlIHJhdyBlbGVtZW50cyB0byB3b3JrIHdpdGguXG4gICAgICAgIC8vXG4gICAgICAgIC8vIC8vIEZJWE1FOiBJIGNhbiBjYWxsIHNlbGVjdGlvbi50b1N0cmluZygpIHRvIGdldCB0aGUgdmFsdWUgYXMgYSBzdHJpbmcuXG4gICAgICAgIC8vIC8vIEkgZG9uJ3QgbmVlZCB0byB1c2UgZXh0cmFjdFRleHQgb24gdGhlIHNlbGVjdG9yIGFueSBtb3JlLlxuICAgICAgICAvL1xuICAgICAgICAvLyBsZXQgdGV4dCA9IHRoaXMuZXh0cmFjdFRleHQoc2VsZWN0b3IpO1xuICAgICAgICAvL1xuICAgICAgICAvLyBsZXQgdGV4dFNlbGVjdGlvbnMgPSBUZXh0RXh0cmFjdGVyLnRvVGV4dFNlbGVjdGlvbnModGV4dEhpZ2hsaWdodFJvd3MpO1xuICAgICAgICAvL1xuICAgICAgICAvLyBsZXQgdGV4dEhpZ2hsaWdodFJlY29yZCA9IFRleHRIaWdobGlnaHRSZWNvcmRzLmNyZWF0ZShyZWN0cywgdGV4dFNlbGVjdGlvbnMsIHRleHQpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAvLyBub3cgdXBkYXRlIHRoZSBtb2RlIGJhc2VkIG9uIHRoZSBjdXJyZW50IHBhZ2UgbWV0YWRhdGFcbiAgICAgICAgLy9cbiAgICAgICAgLy8gbGV0IGN1cnJlbnRQYWdlTWV0YSA9IHRoaXMuZG9jRm9ybWF0LmdldEN1cnJlbnRQYWdlTWV0YSgpO1xuICAgICAgICAvL1xuICAgICAgICAvLyBsZXQgcGFnZU1ldGEgPSB0aGlzLm1vZGVsLmRvY01ldGEuZ2V0UGFnZU1ldGEoY3VycmVudFBhZ2VNZXRhLnBhZ2VOdW0pO1xuICAgICAgICAvL1xuICAgICAgICAvLyBwYWdlTWV0YS50ZXh0SGlnaGxpZ2h0c1t0ZXh0SGlnaGxpZ2h0UmVjb3JkLmlkXSA9IHRleHRIaWdobGlnaHRSZWNvcmQudmFsdWU7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIGxvZy5pbmZvKFwiQWRkZWQgdGV4dCBoaWdobGlnaHQgdG8gbW9kZWxcIik7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY3JlYXRlVGV4dEhpZ2hsaWdodChmYWN0b3J5OiAoKSA9PiBQcm9taXNlPFRleHRIaWdobGlnaHRSZWNvcmQ+KTogUHJvbWlzZTxUZXh0SGlnaGxpZ2h0UmVjb3JkPiB7XG5cbiAgICAgICAgLy8gVE9ETzogdGhpcyByZWFsbHkgbmVlZHMgdG8gYmUgcmV3b3JrZWQgc28gSSBjYW4gdGVzdCBpdCBwcm9wZXJseSB3aXRoXG4gICAgICAgIC8vIHNvbWUgc29ydCBvZiBzY3JlZW5zaG90IHByb3ZpZGVyXG5cbiAgICAgICAgY29uc3QgZG9jID0gbm90TnVsbCh0aGlzLmRvY0Zvcm1hdC50YXJnZXREb2N1bWVudCgpKTtcbiAgICAgICAgY29uc3Qgd2luID0gZG9jLmRlZmF1bHRWaWV3ITtcblxuICAgICAgICBjb25zdCBzY3JlZW5zaG90SUQgPSBIYXNoY29kZXMuY3JlYXRlUmFuZG9tSUQoKTtcblxuICAgICAgICAvLyBzdGFydCB0aGUgc2NyZWVuc2hvdCBub3cgYnV0IGRvbid0IGF3YWl0IGl0IHlldC4gIHRoaXMgd2F5IHdlJ3JlIG5vdFxuICAgICAgICAvLyBibG9ja2luZyB0aGUgY3JlYXRpb24gb2YgdGhlIHNjcmVlbnNob3QgaW4gdGhlIFVJLlxuICAgICAgICBjb25zdCBzZWxlY3Rpb25TY3JlZW5zaG90ID0gU2VsZWN0aW9uU2NyZWVuc2hvdHMuY2FwdHVyZShkb2MsIHdpbik7XG5cbiAgICAgICAgY29uc3QgdGV4dEhpZ2hsaWdodFJlY29yZCA9IGF3YWl0IGZhY3RvcnkoKTtcblxuICAgICAgICAvLyBUT0RPIHRoaXMgaXMgYWN0dWFsbHkgZGlmZmljdWx0IGJlY2F1c2UgdGhpcyBzY3JlZW5zaG90IGlzIFNMT1cgYW5kXG4gICAgICAgIC8vIGlmIEkgY291bGQgbW92ZSBpdCBBRlRFUiB3ZSB1cGRhdGVkIHRoZSBVSSB3b3VsZCBiZSBtdWNoIGJldHRlciBidXRcbiAgICAgICAgLy8gaXQgdGFrZXMgbGlrZSA1MG1zLTE1MG1zIGFuZCBUV08gb2YgdGhlbSBhcmUgYSBiaWcgcHJvYmxlbS4gIEl0IHdvdWxkXG4gICAgICAgIC8vIGJlIGJldHRlciB0byBkbyB0aGlzIEFGVEVSIEkndmUgdGFrZW4gdGhlIHNjcmVlbnNob3RzLlxuXG4gICAgICAgIC8vIGxldCBoaWdobGlnaHRTY3JlZW5zaG90ID0gYXdhaXQgU2NyZWVuc2hvdHMuY2FwdHVyZShzZWxlY3Rpb25TY3JlZW5zaG90LmNsaWVudFJlY3QpXG5cbiAgICAgICAgY29uc3Qgc2NyZWVuc2hvdERpbWVuc2lvbnMgPSB7XG4gICAgICAgICAgICB3aWR0aDogTWF0aC5mbG9vcihzZWxlY3Rpb25TY3JlZW5zaG90LmNsaWVudFJlY3Qud2lkdGgpLFxuICAgICAgICAgICAgaGVpZ2h0OiBNYXRoLmZsb29yKHNlbGVjdGlvblNjcmVlbnNob3QuY2xpZW50UmVjdC5oZWlnaHQpXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgc2NyZWVuc2hvdEltYWdlUmVmID0gdGhpcy50b0ltYWdlKHNjcmVlbnNob3RJRCwgJ3NjcmVlbnNob3QnLCBzY3JlZW5zaG90RGltZW5zaW9ucyk7XG5cbiAgICAgICAgVGV4dEhpZ2hsaWdodHMuYXR0YWNoSW1hZ2UodGV4dEhpZ2hsaWdodFJlY29yZC52YWx1ZSwgc2NyZWVuc2hvdEltYWdlUmVmKTtcblxuICAgICAgICAvLyB0aGlzLmF0dGFjaFNjcmVlbnNob3QodGV4dEhpZ2hsaWdodFJlY29yZC52YWx1ZSwgJ3NjcmVlbnNob3Qtd2l0aC1oaWdobGlnaHQnLCBoaWdobGlnaHRTY3JlZW5zaG90KTtcblxuICAgICAgICBjb25zdCBjdXJyZW50UGFnZU1ldGEgPSB0aGlzLmRvY0Zvcm1hdC5nZXRDdXJyZW50UGFnZURldGFpbCgpO1xuXG4gICAgICAgIGNvbnN0IHBhZ2VNZXRhID0gdGhpcy5tb2RlbC5kb2NNZXRhLmdldFBhZ2VNZXRhKGN1cnJlbnRQYWdlTWV0YS5wYWdlTnVtKTtcblxuICAgICAgICBsb2cuaW5mbyhcIkFkZGVkIHRleHQgaGlnaGxpZ2h0IHRvIG1vZGVsXCIpO1xuXG4gICAgICAgIC8vIG5vdyBjbGVhciB0aGUgc2VsZWN0aW9uIHNpbmNlIHdlIGp1c3QgaGlnaGxpZ2h0ZWQgaXQuXG4gICAgICAgIHdpbi5nZXRTZWxlY3Rpb24oKS5lbXB0eSgpO1xuXG4gICAgICAgIHBhZ2VNZXRhLnRleHRIaWdobGlnaHRzW3RleHRIaWdobGlnaHRSZWNvcmQuaWRdID0gdGV4dEhpZ2hsaWdodFJlY29yZC52YWx1ZTtcblxuICAgICAgICBjb25zdCBjYXB0dXJlZFNjcmVlbnNob3QgPSBhd2FpdCBzZWxlY3Rpb25TY3JlZW5zaG90LmNhcHR1cmVkU2NyZWVuc2hvdFByb21pc2U7XG5cbiAgICAgICAgY29uc3QgZGF0YVVSTCA9IGNhcHR1cmVkU2NyZWVuc2hvdFxuICAgICAgICAgICAgLm1hcChjdXJyZW50ID0+IGN1cnJlbnQuZGF0YVVSTClcbiAgICAgICAgICAgIC5nZXRPclVuZGVmaW5lZCgpO1xuXG4gICAgICAgIGlmIChkYXRhVVJMKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHNjcmVlbnNob3QgPSB0aGlzLnRvU2NyZWVuc2hvdChzY3JlZW5zaG90SUQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVVSTCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc2NyZWVuc2hvdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NyZWVuc2hvdERpbWVuc2lvbnMpO1xuXG4gICAgICAgICAgICAvLyBUT0RPOiB0aGlzIGhhcyB0byBiZSB3cml0dGVuIGFzIGEgYmluYXJ5IGZpbGUgYW5kIHRoZW4gYSByZWZlcmVuY2UgdG9cbiAgICAgICAgICAgIC8vIHRoZSBzY3JlZW5zaG90IGFkZGVkXG5cbiAgICAgICAgICAgIC8vIHBhZ2VNZXRhLnNjcmVlbnNob3RzW3NjcmVlbnNob3QuaWRdID0gc2NyZWVuc2hvdDtcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRleHRIaWdobGlnaHRSZWNvcmQ7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgZXh0cmFjdFRleHQoc2VsZWN0b3I6IHN0cmluZykge1xuXG4gICAgICAgIGxldCByZXN1bHQgPSBcIlwiO1xuXG4gICAgICAgICQoc2VsZWN0b3IpLmVhY2goZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIC8vIFRPRE86IHdlIHNob3VsZCBpbmNsdWRlIHRoZSB4L3kgYW5kIHdpZHRoICsgaGVpZ2h0IG9mIGV2ZXJ5IHRleHRcbiAgICAgICAgICAgIC8vIHNlbGVjdGlvbiBzbyB0aGF0IHdlIGhhdmUgd2hlcmUgaXQgd2FzIHBsYWNlZCBpbiB0aGUgZG9jdW1lbnQuXG5cbiAgICAgICAgICAgIHJlc3VsdCArPSBcIlxcblwiICsgJCh0aGlzKS50ZXh0KCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgdGV4dCBoaWdobGlnaHQgd2FzIGRlbGV0ZWQgc28gdXBkYXRlIHRoZSBtb2RlbCBub3cuXG4gICAgICovXG4gICAgcHJpdmF0ZSBvblRleHRIaWdobGlnaHREZWxldGVkKHRyaWdnZXJFdmVudDogVHJpZ2dlckV2ZW50KSB7XG5cbiAgICAgICAgbG9nLmluZm8oXCJEZWxldGluZyB0ZXh0IGhpZ2hsaWdodCBmcm9tIG1vZGVsOiBcIiwgdHJpZ2dlckV2ZW50KTtcblxuICAgICAgICBjb25zdCBhbm5vdGF0aW9uUG9pbnRlcnNcbiAgICAgICAgICAgID0gQW5ub3RhdGlvblBvaW50ZXJzLnRvQW5ub3RhdGlvblBvaW50ZXJzKFwiLnRleHQtaGlnaGxpZ2h0XCIsIHRyaWdnZXJFdmVudCk7XG5cbiAgICAgICAgLy8gc2hvdWxkIHdlIGp1c3Qgc2VuZCB0aGlzIGV2ZW50IHRvIGFsbCB0aGUgdGhlIHdpbmRvd3M/XG4gICAgICAgIE9wdGlvbmFsLmZpcnN0KC4uLmFubm90YXRpb25Qb2ludGVycykubWFwKGFubm90YXRpb25EZXNjcmlwdG9yID0+IHtcblxuICAgICAgICAgICAgbG9nLmluZm8oXCJEZWxldGluZyBhbm5vdGF0aW9uRGVzY3JpcHRvcjogXCIsIEpTT04uc3RyaW5naWZ5KGFubm90YXRpb25EZXNjcmlwdG9yLCBudWxsLCBcIiAgXCIpKTtcblxuICAgICAgICAgICAgY29uc3QgcGFnZU1ldGEgPSB0aGlzLm1vZGVsLmRvY01ldGEuZ2V0UGFnZU1ldGEoYW5ub3RhdGlvbkRlc2NyaXB0b3IucGFnZU51bSk7XG5cbiAgICAgICAgICAgIC8vIGtlZXAgdGhlIGN1cnJlbnQgaGlnaGxpZ2h0LlxuICAgICAgICAgICAgY29uc3QgdGV4dEhpZ2hsaWdodCA9IHBhZ2VNZXRhLnRleHRIaWdobGlnaHRzW2Fubm90YXRpb25EZXNjcmlwdG9yLmlkXTtcblxuICAgICAgICAgICAgVGV4dEhpZ2hsaWdodHMuZGVsZXRlVGV4dEhpZ2hsaWdodChwYWdlTWV0YSwgdGV4dEhpZ2hsaWdodCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbG9nLmluZm8oXCJEZWxldGluZyB0ZXh0IGhpZ2hsaWdodFwiKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgdG9JbWFnZShzY3JlZW5zaG90SUQ6IHN0cmluZywgcmVsOiBzdHJpbmcsIGRpbWVuc2lvbnM6IElEaW1lbnNpb25zKSB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBJbWFnZSh7XG4gICAgICAgICAgICBzcmM6IGBzY3JlZW5zaG90OiR7c2NyZWVuc2hvdElEfWAsXG4gICAgICAgICAgICB3aWR0aDogZGltZW5zaW9ucy53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogZGltZW5zaW9ucy5oZWlnaHQsXG4gICAgICAgICAgICByZWwsXG4gICAgICAgICAgICB0eXBlOiBJbWFnZVR5cGUuUE5HXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0b1NjcmVlbnNob3QoaWQ6IHN0cmluZywgc3JjOiBzdHJpbmcsIHJlbDogc3RyaW5nLCBkaW1lbnNpb25zOiBJRGltZW5zaW9ucykge1xuXG4gICAgICAgIGNvbnN0IGltYWdlT3B0cyA9IHtcbiAgICAgICAgICAgIHdpZHRoOiBkaW1lbnNpb25zLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBkaW1lbnNpb25zLmhlaWdodCxcbiAgICAgICAgICAgIHR5cGU6IEltYWdlVHlwZS5QTkcsXG4gICAgICAgICAgICByZWxcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gU2NyZWVuc2hvdHMuY3JlYXRlKHNyYywgaW1hZ2VPcHRzLCBpZCk7XG5cbiAgICB9XG5cbn1cblxuXG4iXX0=