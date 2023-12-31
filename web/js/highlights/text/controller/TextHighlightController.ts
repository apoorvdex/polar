import {Model} from '../../../model/Model';
import {TriggerEvent} from '../../../contextmenu/TriggerEvent';
import {ipcRenderer} from 'electron';
import {Logger} from '../../../logger/Logger';
import {TextHighlightRow} from './TextHighlightRow';
import {notNull, Preconditions} from '../../../Preconditions';
import {DocFormatFactory} from '../../../docformat/DocFormatFactory';
import {DocFormat} from '../../../docformat/DocFormat';
import {KeyEvents} from '../../../KeyEvents';
import {TextHighlighterFactory} from './TextHighlighterFactory';
import {TextExtracter} from './TextExtracter';
import {TextHighlightRecord, TextHighlightRecords} from '../../../metadata/TextHighlightRecords';
import {Image} from '../../../metadata/Image';
import {SelectedContents} from '../selection/SelectedContents';
import {SelectionScreenshots} from './SelectionScreenshots';
import {Hashcodes} from '../../../Hashcodes';
import {IDimensions} from '../../../util/Dimensions';
import {ImageType} from '../../../metadata/ImageType';

import $ from '../../../ui/JQuery';
import {TextHighlights} from '../../../metadata/TextHighlights';
import {Screenshots} from '../../../metadata/Screenshots';
import {AnnotationPointers} from '../../../annotations/AnnotationPointers';
import {Optional} from '../../../util/ts/Optional';
import {PagemarkMode} from '../../../metadata/PagemarkMode';
import {TypedMessage} from '../../../util/TypedMessage';
import {HighlightCreatedEvent} from '../../../comments/react/HighlightCreatedEvent';
import {HighlightColor} from '../../../metadata/BaseHighlight';
import {InteleasePdfReader} from "../../../apps/intelease-pdf-reader";

const {TextHighlightRows} = require("./TextHighlightRows");

const {TextSelections} = require("./TextSelections");

const log = Logger.create();

export class TextHighlightController {

    constructor(model: Model) {
        this.model = Preconditions.assertNotNull(model, "model");
        this.docFormat = DocFormatFactory.getInstance();
    }

    private readonly model: Model;

    private readonly docFormat: DocFormat;

    public onDocumentLoaded() {
        log.debug("TextHighlightController.onDocumentLoaded: ", this.model.docMeta);
    }

    public start() {

        this.registerKeyDownListener();
        this.registerDocumentLoadedListener();
        this.registerWindowMessageListener();

    }

    private registerKeyDownListener() {
        document.addEventListener("keydown", event => this.onKeyDown(event));
    }

    private registerDocumentLoadedListener() {
        this.model.registerListenerForDocumentLoaded(() => this.onDocumentLoaded());
    }

    private registerWindowMessageListener() {

        window.addEventListener("message", event => this.onMessageReceived(event), false);

    }

    private async onKeyDown(event: KeyboardEvent) {

        if (KeyEvents.isKeyMetaActive(event)) {

            if (event.code) {

                switch (event.code) {

                    // TODO: we should not use 'code' but should use 'key'... The
                    // problem is that on OS X the key code returned 'Dead' but was
                    // working before.  Not sure why it started breaking.
                    case "KeyT":
                        await this.doHighlight();
                        break;

                    default:
                        break;

                }

            }

        }

    }

    private onMessageReceived(event: any) {

        // log.info("Received message: ", event);

        const triggerEvent = event.data;

        switch (event.data.type) {

            case "create-text-highlight":

                const typedMessage: TypedMessage<HighlightCreatedEvent> = event.data;

                this.doHighlight(typedMessage.value.highlightColor, typedMessage.value.itlsData)
                    .catch(err => log.error("Unable to create text highlight", err));

                break;

            case "delete-text-highlight":
                this.onTextHighlightDeleted(triggerEvent);
                break;

            default:
                // log.warn("Unhandled message: " + event.data.type, event.data);
                break;

        }

    }

    private async doHighlight(highlightColor: HighlightColor = 'yellow', itlsData?: any) {

        if (this.docFormat.name === "html") {
            await this.doHighlightModern(highlightColor);
        } else {
            this.doHighlightLegacy(highlightColor, itlsData);
        }

    }

    public doHighlightLegacy(highlightColor: HighlightColor, itlsData?: any) {

        const textHighlighter = this.createLegacyTextHighlighter(highlightColor, itlsData);
        textHighlighter.doHighlight();

    }

    public async doHighlightModern(highlightColor: HighlightColor) {

        log.info("Doing modern text highlight");
        await this.onTextHighlightCreatedModern(highlightColor);

    }

    /**
     * Set text highlighting in the current document with the highlighter.
     */
    public createLegacyTextHighlighter(highlightColor: HighlightColor, itlsData?: any) {

        let sequence = 0;

        const controller = this;

        let textHighlighter: any | undefined;

        const textHighlighterOptions = {

            highlightedClass: "text-highlight-span",
            color: '', // this works and the color isn't changed.
            manual: true,

            onBeforeHighlight: (range: any) => {
                // log.info("onBeforeHighlight range: ", range);
                return true;
            },

            onAfterHighlight: (range: any, highlightElements: any) => {
                // log.info("onAfterHighlight range: ", range);
                // log.info("onAfterHighlight hlts: ", highlightElements);

                const id = sequence++;
                const highlightClazz = "text-highlight-" + id;

                highlightElements.forEach(function (highlightElement: any) {
                    // highlightElement.style.color = 'blue';
                    highlightElement.className = highlightElement.className + " " + highlightClazz;
                });

                (async () => {

                    await controller.onTextHighlightCreatedLegacy("." + highlightClazz, highlightColor, itlsData);

                    // the underlying <span> highlights need to be removed now.

                    textHighlighter.removeHighlights();

                    log.info("Highlight completed.");

                })().catch(err => log.error("Unable to highlight: ", err));

            },

            onRemoveHighlight(hlt: any) {
                log.info("onRemoveHighlight hlt: ", hlt);
                return true;
            }

        };

        const targetDocument = this.docFormat.targetDocument();

        textHighlighter = TextHighlighterFactory.newInstance(targetDocument!.body, textHighlighterOptions);

        return textHighlighter;

    }

    /**
     * Called by the controller when we have a new highlight created so that
     * we can update the model.
     */
    private async onTextHighlightCreatedLegacy(selector: string, highlightColor: HighlightColor, itlsData?: any) {

        await this.createTextHighlight(async () => {

            // FIXME: get the new highlighter working FIRST without text and without
            // rows , or other advanced features.

            log.info("TextHighlightController.onTextHighlightCreatedLegacy");

            const textHighlightRows: TextHighlightRow[] = TextHighlightRows.createFromSelector(selector);

            const rects = textHighlightRows.map(current => current.rect);

            // TODO: don't do this from the selector because the textHighlightRows
            // would be a lot better since we have the raw elements to work with.

            // FIXME: I can call selection.toString() to get the value as a string.
            // I don't need to use extractText on the selector any more.

            const text = this.extractText(selector);

            const textSelections = TextExtracter.toTextSelections(textHighlightRows);

            return TextHighlightRecords.create(rects, textSelections, {TEXT: text}, itlsData, highlightColor);

        });

    }

    /**
     * Called by the controller when we have a new highlight created so that
     * we can update the model.
     */
    private async onTextHighlightCreatedModern(highlightColor: HighlightColor) {

        // FIXME: get the new highlighter working FIRST without text and without
        // rows , or other advanced features.

        await this.createTextHighlight(async () => {

            const win = notNull(this.docFormat.targetDocument()).defaultView!;

            log.info("TextHighlightController.onTextHighlightCreatedModern");

            // right now we're not implementing rows...
            // let textHighlightRows = TextHighlightRows.createFromSelector(selector);

            const selectedContent = SelectedContents.compute(win);

            const rectTexts: any[] = selectedContent.rectTexts;
            const rects = rectTexts.map(current => current.boundingPageRect);

            const text = selectedContent.text;

            const textSelections = TextSelections.compute(selectedContent);

            return TextHighlightRecords.create(rects, textSelections, {TEXT: text}, highlightColor);

        });

        // let rects = textHighlightRows.map(current => current.rect);
        //
        // // TODO: don't do this from the selector because the textHighlightRows
        // // would be a lot better since we have the raw elements to work with.
        //
        // // FIXME: I can call selection.toString() to get the value as a string.
        // // I don't need to use extractText on the selector any more.
        //
        // let text = this.extractText(selector);
        //
        // let textSelections = TextExtracter.toTextSelections(textHighlightRows);
        //
        // let textHighlightRecord = TextHighlightRecords.create(rects, textSelections, text);
        //
        // // now update the mode based on the current page metadata
        //
        // let currentPageMeta = this.docFormat.getCurrentPageMeta();
        //
        // let pageMeta = this.model.docMeta.getPageMeta(currentPageMeta.pageNum);
        //
        // pageMeta.textHighlights[textHighlightRecord.id] = textHighlightRecord.value;
        //
        // log.info("Added text highlight to model");

    }

    public async createTextHighlight(factory: () => Promise<TextHighlightRecord>): Promise<TextHighlightRecord> {

        // TODO: this really needs to be reworked so I can test it properly with
        // some sort of screenshot provider

        const doc = notNull(this.docFormat.targetDocument());
        const win = doc.defaultView!;

        const screenshotID = Hashcodes.createRandomID();

        // start the screenshot now but don't await it yet.  this way we're not
        // blocking the creation of the screenshot in the UI.
        const selectionScreenshot = SelectionScreenshots.capture(doc, win);

        const textHighlightRecord = await factory();

        // TODO this is actually difficult because this screenshot is SLOW and
        // if I could move it AFTER we updated the UI would be much better but
        // it takes like 50ms-150ms and TWO of them are a big problem.  It would
        // be better to do this AFTER I've taken the screenshots.

        // let highlightScreenshot = await Screenshots.capture(selectionScreenshot.clientRect)

        const screenshotDimensions = {
            width: Math.floor(selectionScreenshot.clientRect.width),
            height: Math.floor(selectionScreenshot.clientRect.height)
        };

        const screenshotImageRef = this.toImage(screenshotID, 'screenshot', screenshotDimensions);

        TextHighlights.attachImage(textHighlightRecord.value, screenshotImageRef);

        // this.attachScreenshot(textHighlightRecord.value, 'screenshot-with-highlight', highlightScreenshot);

        const currentPageMeta = this.docFormat.getCurrentPageDetail();

        const pageMeta = this.model.docMeta.getPageMeta(currentPageMeta.pageNum);

        log.info("Added text highlight to model");

        // now clear the selection since we just highlighted it.
        win.getSelection().empty();
        pageMeta.textHighlights[textHighlightRecord.id] = textHighlightRecord.value;
        InteleasePdfReader.getInstance().onNewAnnotation(JSON.parse(JSON.stringify(pageMeta)));
        const capturedScreenshot = await selectionScreenshot.capturedScreenshotPromise;

        const dataURL = capturedScreenshot
            .map(current => current.dataURL)
            .getOrUndefined();

        if (dataURL) {

            const screenshot = this.toScreenshot(screenshotID,
                dataURL,
                'screenshot',
                screenshotDimensions);

            // TODO: this has to be written as a binary file and then a reference to
            // the screenshot added

            // pageMeta.screenshots[screenshot.id] = screenshot;

        }

        return textHighlightRecord;

    }

    public extractText(selector: string) {

        let result = "";

        $(selector).each(function () {

            // TODO: we should include the x/y and width + height of every text
            // selection so that we have where it was placed in the document.

            result += "\n" + $(this).text();

        });

        return result;

    }

    /**
     * A text highlight was deleted so update the model now.
     */
    private onTextHighlightDeleted(triggerEvent: TriggerEvent) {

        log.info("Deleting text highlight from model: ", triggerEvent);

        const annotationPointers
            = AnnotationPointers.toAnnotationPointers(".text-highlight", triggerEvent);

        // should we just send this event to all the the windows?
        Optional.first(...annotationPointers).map(annotationDescriptor => {

            log.info("Deleting annotationDescriptor: ", JSON.stringify(annotationDescriptor, null, "  "));

            const pageMeta = this.model.docMeta.getPageMeta(annotationDescriptor.pageNum);

            // keep the current highlight.
            const textHighlight = pageMeta.textHighlights[annotationDescriptor.id];

            TextHighlights.deleteTextHighlight(pageMeta, textHighlight);

        });

        log.info("Deleting text highlight");

    }

    private toImage(screenshotID: string, rel: string, dimensions: IDimensions) {

        return new Image({
            src: `screenshot:${screenshotID}`,
            width: dimensions.width,
            height: dimensions.height,
            rel,
            type: ImageType.PNG
        });

    }

    private toScreenshot(id: string, src: string, rel: string, dimensions: IDimensions) {

        const imageOpts = {
            width: dimensions.width,
            height: dimensions.height,
            type: ImageType.PNG,
            rel
        };

        return Screenshots.create(src, imageOpts, id);

    }

}


