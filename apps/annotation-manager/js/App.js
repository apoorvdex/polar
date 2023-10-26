"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const Logger_1 = require("../../../web/js/logger/Logger");
const DefaultPersistenceLayer_1 = require("../../../web/js/datastore/DefaultPersistenceLayer");
const Datastores_1 = require("../../../web/js/datastore/Datastores");
const Text_1 = require("../../../web/js/metadata/Text");
const AnnotationType_1 = require("../../../web/js/metadata/AnnotationType");
const Screenshots_1 = require("../../../web/js/metadata/Screenshots");
const Optional_1 = require("../../../web/js/util/ts/Optional");
const log = Logger_1.Logger.create();
class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            annotations: []
        };
        (() => __awaiter(this, void 0, void 0, function* () {
            yield this.init();
            let fingerprint = '110dd61fd57444010b1ab5ff38782f0f';
            let docMeta = yield this.persistenceLayer.getDocMeta(fingerprint);
            if (docMeta) {
                let annotations = yield this.loadDocMeta(docMeta);
                console.log("FIXME: ", annotations);
                this.setState({
                    annotations
                });
            }
            else {
                log.error("No docMeta");
            }
        }))().catch(err => log.error("Could not load disk store: ", err));
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            let datastore;
            let persistenceLayer;
            this.datastore = datastore = Datastores_1.Datastores.create();
            this.persistenceLayer = persistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(datastore);
            yield datastore.init();
            yield persistenceLayer.init();
        });
    }
    loadDocMeta(docMeta) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = [];
            log.info("Loading docMeta...");
            Object.values(docMeta.pageMetas).forEach(pageMeta => {
                result.push(...this.getTextHighlights(pageMeta));
                result.push(...this.getAreaHighlights(pageMeta));
            });
            return result;
        });
    }
    getTextHighlights(pageMeta) {
        let result = [];
        log.info("Loading docMeta...");
        Object.values(pageMeta.textHighlights).forEach(textHighlight => {
            let html = "";
            if (typeof textHighlight.text === 'string') {
                html = `<p>${textHighlight.text}</p>`;
            }
            if (textHighlight.text instanceof Text_1.Text) {
                if (textHighlight.text.TEXT) {
                    html = `<p>${textHighlight.text.TEXT}</p>`;
                }
                if (textHighlight.text.HTML) {
                    html = textHighlight.text.HTML;
                }
            }
            let screenshot = this.getScreenshot(pageMeta, textHighlight);
            result.push({
                annotationType: AnnotationType_1.AnnotationType.TEXT_HIGHLIGHT,
                screenshot,
                html
            });
        });
        return result;
    }
    getAreaHighlights(pageMeta) {
        let result = [];
        log.info("Loading docMeta...");
        Object.values(pageMeta.areaHighlights).forEach(areaHighlight => {
            console.log('FIXME: areaHighlight', areaHighlight);
            let screenshot = this.getScreenshot(pageMeta, areaHighlight);
            result.push({
                annotationType: AnnotationType_1.AnnotationType.AREA_HIGHLIGHT,
                screenshot,
                html: undefined
            });
        });
        return result;
    }
    getScreenshot(pageMeta, highlight) {
        let screenshot = undefined;
        Object.values(highlight.images).forEach(image => {
            if (image.rel && image.rel === 'screenshot') {
                let screenshotURI = Screenshots_1.Screenshots.parseURI(image.src);
                if (screenshotURI) {
                    screenshot = pageMeta.screenshots[screenshotURI.id];
                }
            }
        });
        return screenshot;
    }
    createHTML(annotations) {
        let result = [];
        annotations.map(annotation => {
            let html = Optional_1.Optional.of(annotation.html).getOrElse('');
            if (annotation.annotationType == AnnotationType_1.AnnotationType.AREA_HIGHLIGHT) {
                if (annotation.screenshot) {
                    result.push(React.createElement("div", { className: 'area-highlight' },
                        React.createElement("img", { src: annotation.screenshot.src })));
                }
            }
            else {
                if (annotation.screenshot) {
                    result.push(React.createElement("div", { className: 'area-highlight' },
                        React.createElement("img", { src: annotation.screenshot.src })));
                }
                result.push(React.createElement("div", { className: 'text-highlight', dangerouslySetInnerHTML: { __html: html } }));
            }
        });
        return result;
        { }
        { }
        { }
        { }
        { }
    }
    render() {
        const { annotations } = this.state;
        return (React.createElement("div", { id: "annotation-manager" }, this.createHTML(annotations)));
    }
}
exports.default = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXBwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwwREFBcUQ7QUFFckQsK0ZBQTBGO0FBQzFGLHFFQUFnRTtBQUVoRSx3REFBbUQ7QUFFbkQsNEVBQXVFO0FBQ3ZFLHNFQUFpRTtBQUdqRSwrREFBMEQ7QUFFMUQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQU0sR0FBTyxTQUFRLEtBQUssQ0FBQyxTQUF3QjtJQUsvQyxZQUFZLEtBQVEsRUFBRSxPQUFZO1FBQzlCLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULFdBQVcsRUFBRSxFQUlaO1NBQ0osQ0FBQztRQUVGLENBQUMsR0FBUyxFQUFFO1lBRVIsTUFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFJbEIsSUFBSSxXQUFXLEdBQUcsa0NBQWtDLENBQUM7WUFFckQsSUFBSSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsZ0JBQWlCLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRW5FLElBQUcsT0FBTyxFQUFFO2dCQUNSLElBQUksV0FBVyxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFFbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7Z0JBRXBDLElBQUksQ0FBQyxRQUFRLENBQUM7b0JBQ1YsV0FBVztpQkFDZCxDQUFDLENBQUM7YUFFTjtpQkFBTTtnQkFDSCxHQUFHLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQzNCO1FBR0wsQ0FBQyxDQUFBLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENB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QUcsQ0FDcEMsQ0FBQyxDQUFDO2lCQUNmO2FBRUo7aUJBQU07Z0JBRUgsSUFBRyxVQUFVLENBQUMsVUFBVSxFQUFFO29CQUN0QixNQUFNLENBQUMsSUFBSSxDQUNQLDZCQUFLLFNBQVMsRUFBQyxnQkFBZ0I7d0JBQzNCLDZCQUFLLEdBQUcsRUFBRSxVQUFVLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxDQUNwQyxDQUFDLENBQUM7aUJBQ2Y7Z0JBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyw2QkFBSyxTQUFTLEVBQUMsZ0JBQWdCLEVBQUMsdUJBQXVCLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLEdBQVEsQ0FBQyxDQUFDO2FBQ2hHO1FBRUwsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLE1BQU0sQ0FBQztRQUVkLEdBQTJDO1FBQzNDLEdBQWtDO1FBQ2xDLEdBQW1EO1FBQ25ELEdBQVk7UUFDWixHQUFRO0lBZVosQ0FBQztJQUVELE1BQU07UUFDRixNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNuQyxPQUFPLENBRUgsNkJBQUssRUFBRSxFQUFDLG9CQUFvQixJQUV2QixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQVMzQixDQUVULENBQUM7SUFDTixDQUFDO0NBQ0o7QUFFRCxrQkFBZSxHQUFHLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vLi4vLi4vd2ViL2pzL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtEYXRhc3RvcmV9IGZyb20gJy4uLy4uLy4uL3dlYi9qcy9kYXRhc3RvcmUvRGF0YXN0b3JlJztcbmltcG9ydCB7RGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXJ9IGZyb20gJy4uLy4uLy4uL3dlYi9qcy9kYXRhc3RvcmUvRGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtEYXRhc3RvcmVzfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL0RhdGFzdG9yZXMnO1xuaW1wb3J0IHtEb2NNZXRhfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvbWV0YWRhdGEvRG9jTWV0YSc7XG5pbXBvcnQge1RleHR9IGZyb20gJy4uLy4uLy4uL3dlYi9qcy9tZXRhZGF0YS9UZXh0JztcbmltcG9ydCB7U2NyZWVuc2hvdH0gZnJvbSAnLi4vLi4vLi4vd2ViL2pzL21ldGFkYXRhL1NjcmVlbnNob3QnO1xuaW1wb3J0IHtBbm5vdGF0aW9uVHlwZX0gZnJvbSAnLi4vLi4vLi4vd2ViL2pzL21ldGFkYXRhL0Fubm90YXRpb25UeXBlJztcbmltcG9ydCB7U2NyZWVuc2hvdHN9IGZyb20gJy4uLy4uLy4uL3dlYi9qcy9tZXRhZGF0YS9TY3JlZW5zaG90cyc7XG5pbXBvcnQge0Jhc2VIaWdobGlnaHR9IGZyb20gJy4uLy4uLy4uL3dlYi9qcy9tZXRhZGF0YS9CYXNlSGlnaGxpZ2h0JztcbmltcG9ydCB7UGFnZU1ldGF9IGZyb20gJy4uLy4uLy4uL3dlYi9qcy9tZXRhZGF0YS9QYWdlTWV0YSc7XG5pbXBvcnQge09wdGlvbmFsfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvdXRpbC90cy9PcHRpb25hbCc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuY2xhc3MgQXBwPFA+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCBJQXBwU3RhdGU+IHtcblxuICAgIHByaXZhdGUgZGF0YXN0b3JlPzogRGF0YXN0b3JlO1xuICAgIHByaXZhdGUgcGVyc2lzdGVuY2VMYXllcj86IERlZmF1bHRQZXJzaXN0ZW5jZUxheWVyO1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFAsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFubm90YXRpb25zOiBbXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgICB0ZXh0OiAndGhpcyBpcyBqdXN0IHNvbWUgdGV4dDInXG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuXG4gICAgICAgIChhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgIGF3YWl0IHRoaXMuaW5pdCgpO1xuXG4gICAgICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUpO1xuXG4gICAgICAgICAgICBsZXQgZmluZ2VycHJpbnQgPSAnMTEwZGQ2MWZkNTc0NDQwMTBiMWFiNWZmMzg3ODJmMGYnO1xuXG4gICAgICAgICAgICBsZXQgZG9jTWV0YSA9IGF3YWl0IHRoaXMucGVyc2lzdGVuY2VMYXllciEuZ2V0RG9jTWV0YShmaW5nZXJwcmludCk7XG5cbiAgICAgICAgICAgIGlmKGRvY01ldGEpIHtcbiAgICAgICAgICAgICAgICBsZXQgYW5ub3RhdGlvbnMgPSBhd2FpdCB0aGlzLmxvYWREb2NNZXRhKGRvY01ldGEpO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGSVhNRTogXCIsIGFubm90YXRpb25zKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBhbm5vdGF0aW9uc1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvZy5lcnJvcihcIk5vIGRvY01ldGFcIik7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9KSgpLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJDb3VsZCBub3QgbG9hZCBkaXNrIHN0b3JlOiBcIiwgZXJyKSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGluaXQoKTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICAgICAgbGV0IGRhdGFzdG9yZTogRGF0YXN0b3JlO1xuICAgICAgICBsZXQgcGVyc2lzdGVuY2VMYXllcjogRGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXI7XG5cbiAgICAgICAgdGhpcy5kYXRhc3RvcmUgPSBkYXRhc3RvcmUgPSBEYXRhc3RvcmVzLmNyZWF0ZSgpO1xuICAgICAgICB0aGlzLnBlcnNpc3RlbmNlTGF5ZXIgPSBwZXJzaXN0ZW5jZUxheWVyID0gbmV3IERlZmF1bHRQZXJzaXN0ZW5jZUxheWVyKGRhdGFzdG9yZSk7XG5cbiAgICAgICAgYXdhaXQgZGF0YXN0b3JlLmluaXQoKTtcbiAgICAgICAgYXdhaXQgcGVyc2lzdGVuY2VMYXllci5pbml0KCk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGxvYWREb2NNZXRhKGRvY01ldGE6IERvY01ldGEpOiBQcm9taXNlPElBbm5vdGF0aW9uW10+IHtcblxuICAgICAgICBsZXQgcmVzdWx0OiBJQW5ub3RhdGlvbltdID0gW107XG5cbiAgICAgICAgbG9nLmluZm8oXCJMb2FkaW5nIGRvY01ldGEuLi5cIik7XG5cbiAgICAgICAgT2JqZWN0LnZhbHVlcyhkb2NNZXRhLnBhZ2VNZXRhcykuZm9yRWFjaChwYWdlTWV0YSA9PiB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCguLi50aGlzLmdldFRleHRIaWdobGlnaHRzKHBhZ2VNZXRhKSk7XG4gICAgICAgICAgICByZXN1bHQucHVzaCguLi50aGlzLmdldEFyZWFIaWdobGlnaHRzKHBhZ2VNZXRhKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICB9XG5cbiAgICBnZXRUZXh0SGlnaGxpZ2h0cyhwYWdlTWV0YTogUGFnZU1ldGEpOiBJQW5ub3RhdGlvbltdIHtcblxuICAgICAgICBsZXQgcmVzdWx0OiBJQW5ub3RhdGlvbltdID0gW107XG5cbiAgICAgICAgbG9nLmluZm8oXCJMb2FkaW5nIGRvY01ldGEuLi5cIik7XG5cbiAgICAgICAgT2JqZWN0LnZhbHVlcyhwYWdlTWV0YS50ZXh0SGlnaGxpZ2h0cykuZm9yRWFjaCh0ZXh0SGlnaGxpZ2h0ID0+IHtcblxuICAgICAgICAgICAgbGV0IGh0bWw6IHN0cmluZyA9IFwiXCI7XG5cbiAgICAgICAgICAgIGlmKHR5cGVvZiB0ZXh0SGlnaGxpZ2h0LnRleHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgaHRtbCA9IGA8cD4ke3RleHRIaWdobGlnaHQudGV4dH08L3A+YFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0ZXh0SGlnaGxpZ2h0LnRleHQgaW5zdGFuY2VvZiBUZXh0KSB7XG5cbiAgICAgICAgICAgICAgICBpZih0ZXh0SGlnaGxpZ2h0LnRleHQuVEVYVCkge1xuICAgICAgICAgICAgICAgICAgICBodG1sID0gYDxwPiR7dGV4dEhpZ2hsaWdodC50ZXh0LlRFWFR9PC9wPmBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZih0ZXh0SGlnaGxpZ2h0LnRleHQuSFRNTCkge1xuICAgICAgICAgICAgICAgICAgICBodG1sID0gdGV4dEhpZ2hsaWdodC50ZXh0LkhUTUw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBzY3JlZW5zaG90ID0gdGhpcy5nZXRTY3JlZW5zaG90KHBhZ2VNZXRhLCB0ZXh0SGlnaGxpZ2h0KTtcblxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIGFubm90YXRpb25UeXBlOiBBbm5vdGF0aW9uVHlwZS5URVhUX0hJR0hMSUdIVCxcbiAgICAgICAgICAgICAgICBzY3JlZW5zaG90LFxuICAgICAgICAgICAgICAgIGh0bWxcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cblxuICAgIGdldEFyZWFIaWdobGlnaHRzKHBhZ2VNZXRhOiBQYWdlTWV0YSk6IElBbm5vdGF0aW9uW10ge1xuXG4gICAgICAgIGxldCByZXN1bHQ6IElBbm5vdGF0aW9uW10gPSBbXTtcblxuICAgICAgICBsb2cuaW5mbyhcIkxvYWRpbmcgZG9jTWV0YS4uLlwiKTtcblxuICAgICAgICBPYmplY3QudmFsdWVzKHBhZ2VNZXRhLmFyZWFIaWdobGlnaHRzKS5mb3JFYWNoKGFyZWFIaWdobGlnaHQgPT4ge1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRklYTUU6IGFyZWFIaWdobGlnaHQnLCBhcmVhSGlnaGxpZ2h0KVxuXG4gICAgICAgICAgICBsZXQgc2NyZWVuc2hvdCA9IHRoaXMuZ2V0U2NyZWVuc2hvdChwYWdlTWV0YSwgYXJlYUhpZ2hsaWdodCk7XG5cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBhbm5vdGF0aW9uVHlwZTogQW5ub3RhdGlvblR5cGUuQVJFQV9ISUdITElHSFQsXG4gICAgICAgICAgICAgICAgc2NyZWVuc2hvdCxcbiAgICAgICAgICAgICAgICBodG1sOiB1bmRlZmluZWRcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cblxuXG4gICAgZ2V0U2NyZWVuc2hvdChwYWdlTWV0YTogUGFnZU1ldGEsIGhpZ2hsaWdodDogQmFzZUhpZ2hsaWdodCk6IFNjcmVlbnNob3QgfCB1bmRlZmluZWQge1xuXG4gICAgICAgIGxldCBzY3JlZW5zaG90OiBTY3JlZW5zaG90IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIE9iamVjdC52YWx1ZXMoaGlnaGxpZ2h0LmltYWdlcykuZm9yRWFjaCggaW1hZ2UgPT4ge1xuXG4gICAgICAgICAgICBpZihpbWFnZS5yZWwgJiYgaW1hZ2UucmVsID09PSAnc2NyZWVuc2hvdCcpIHtcblxuICAgICAgICAgICAgICAgIGxldCBzY3JlZW5zaG90VVJJID0gU2NyZWVuc2hvdHMucGFyc2VVUkkoaW1hZ2Uuc3JjKTtcblxuICAgICAgICAgICAgICAgIGlmKHNjcmVlbnNob3RVUkkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NyZWVuc2hvdCA9IHBhZ2VNZXRhLnNjcmVlbnNob3RzW3NjcmVlbnNob3RVUkkuaWRdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzY3JlZW5zaG90O1xuXG4gICAgfVxuXG4gICAgY3JlYXRlSFRNTChhbm5vdGF0aW9uczogSUFubm90YXRpb25bXSkge1xuXG4gICAgICAgIC8vIGh0dHBzOi8vYmxvZy5jbG91ZGJvb3N0LmlvL2Zvci1sb29wcy1pbi1yZWFjdC1yZW5kZXItbm8teW91LWRpZG50LTZjOWY0YWE3Mzc3OFxuICAgICAgICAvL1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSBbXTtcblxuICAgICAgICBhbm5vdGF0aW9ucy5tYXAoYW5ub3RhdGlvbiA9PiB7XG4gICAgICAgICAgICAvL3Jlc3VsdC5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoICdkaXYnLCBbXSwgRWxlbWVudHMuY3JlYXRlRWxlbWVudEhUTUwoYW5ub3RhdGlvbi5odG1sKSkpO1xuXG4gICAgICAgICAgICBsZXQgaHRtbCA9IE9wdGlvbmFsLm9mKGFubm90YXRpb24uaHRtbCkuZ2V0T3JFbHNlKCcnKTtcblxuICAgICAgICAgICAgaWYoYW5ub3RhdGlvbi5hbm5vdGF0aW9uVHlwZSA9PSBBbm5vdGF0aW9uVHlwZS5BUkVBX0hJR0hMSUdIVCkge1xuXG4gICAgICAgICAgICAgICAgaWYoYW5ub3RhdGlvbi5zY3JlZW5zaG90KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWEtaGlnaGxpZ2h0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YW5ub3RhdGlvbi5zY3JlZW5zaG90LnNyY30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBpZihhbm5vdGF0aW9uLnNjcmVlbnNob3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYS1oaWdobGlnaHQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthbm5vdGF0aW9uLnNjcmVlbnNob3Quc3JjfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWhpZ2hsaWdodCcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGh0bWx9fT48L2Rpdj4pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICAgICAgey8qe2Fubm90YXRpb25zLm1hcCgoYW5ub3RhdGlvbiwgaWR4KSA9PiovfVxuICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cImFubm90YXRpb25cIj4qL31cbiAgICAgICAgey8qe0VsZW1lbnRzLmNyZWF0ZUVsZW1lbnRIVE1MKGFubm90YXRpb24uaHRtbCl9Ki99XG4gICAgICAgIHsvKjwvZGl2PiovfVxuICAgICAgICB7LyopfSovfVxuXG5cbiAgICAgICAgLy8gLy8gT3V0ZXIgbG9vcCB0byBjcmVhdGUgcGFyZW50XG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgIC8vICAgICBsZXQgY2hpbGRyZW4gPSBbXVxuICAgICAgICAvLyAgICAgLy9Jbm5lciBsb29wIHRvIGNyZWF0ZSBjaGlsZHJlblxuICAgICAgICAvLyAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA1OyBqKyspIHtcbiAgICAgICAgLy8gICAgICAgICBjaGlsZHJlbi5wdXNoKDx0ZD57YENvbHVtbiAke2ogKyAxfWB9PC90ZD4pXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICAvL0NyZWF0ZSB0aGUgcGFyZW50IGFuZCBhZGQgdGhlIGNoaWxkcmVuXG4gICAgICAgIC8vICAgICByZXN1bHQucHVzaCg8dHI+e2NoaWxkcmVufTwvdHI+KVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIHJldHVybiByZXN1bHRcblxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBhbm5vdGF0aW9ucyB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdiBpZD1cImFubm90YXRpb24tbWFuYWdlclwiPlxuXG4gICAgICAgICAgICAgICAge3RoaXMuY3JlYXRlSFRNTChhbm5vdGF0aW9ucyl9XG4gICAgICAgICAgICAgICAgey8qe2Fubm90YXRpb25zLm1hcCgoYW5ub3RhdGlvbiwgaWR4KSA9PiovfVxuICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cImFubm90YXRpb25cIj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKntFbGVtZW50cy5jcmVhdGVFbGVtZW50SFRNTChhbm5vdGF0aW9uLmh0bWwpfSovfVxuICAgICAgICAgICAgICAgICAgICB7Lyo8L2Rpdj4qL31cbiAgICAgICAgICAgICAgICB7LyopfSovfVxuXG4gICAgICAgICAgICAgICAgey8qe2Fubm90YXRpb25zLm1hcCgoYW5ub3RhdGlvbiwgaWR4KSA9PiBFbGVtZW50cy5jcmVhdGVFbGVtZW50SFRNTChhbm5vdGF0aW9uLmh0bWwpKX0qL31cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuaW50ZXJmYWNlIElBcHBTdGF0ZSB7XG5cbiAgICBhbm5vdGF0aW9uczogSUFubm90YXRpb25bXTtcbn1cblxuaW50ZXJmYWNlIElBbm5vdGF0aW9uIHtcbiAgICBhbm5vdGF0aW9uVHlwZTogQW5ub3RhdGlvblR5cGUsXG4gICAgaHRtbD86IHN0cmluZ1xuICAgIHNjcmVlbnNob3Q/OiBTY3JlZW5zaG90O1xufVxuIl19