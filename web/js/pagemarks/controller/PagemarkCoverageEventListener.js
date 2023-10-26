"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = require("../../logger/Logger");
const DocFormatFactory_1 = require("../../docformat/DocFormatFactory");
const KeyEvents_1 = require("../../KeyEvents");
const Elements_1 = require("../../util/Elements");
const RendererAnalytics_1 = require("../../ga/RendererAnalytics");
const Percentages_1 = require("../../util/Percentages");
const log = Logger_1.Logger.create();
class PagemarkCoverageEventListener {
    constructor(controller, model) {
        this.keyActivated = false;
        this.controller = controller;
        this.model = model;
        this.docFormat = DocFormatFactory_1.DocFormatFactory.getInstance();
    }
    start() {
        log.info("Starting...");
        this.model.registerListenerForDocumentLoaded(() => this.onDocumentLoaded());
        window.addEventListener("message", event => this.onMessageReceived(event), false);
        log.info("Starting...done");
    }
    onMessageReceived(event) {
        log.info("Received message: ", event);
        const triggerEvent = event.data;
        switch (event.data.type) {
            case "create-pagemark-to-point":
                this.onContextMenuCreatePagemarkToPoint(triggerEvent)
                    .catch(err => log.error(err));
                break;
        }
    }
    onDocumentLoaded() {
        log.info("Document loaded... installing listeners...");
        document.addEventListener("keyup", event => this.keyListener(event));
        document.addEventListener("keydown", event => this.keyListener(event));
        const pageElements = Array.from(document.querySelectorAll(".page"));
        for (const pageElement of pageElements) {
            pageElement.addEventListener("click", event => this.mouseListener(event));
        }
        if (pageElements.length === 0) {
            log.warn("No pages found for click listener.");
        }
        else {
            log.debug("Added click listener to N pages: " + pageElements.length);
        }
        log.info("Document loaded... installing listeners...done");
    }
    keyListener(event) {
        if (!event) {
            throw new Error("no event");
        }
        this.keyActivated = KeyEvents_1.KeyEvents.isKeyMetaActive(event);
    }
    mouseListener(event) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!event) {
                throw new Error("no event");
            }
            if (!this.keyActivated) {
                return;
            }
            yield this.onMouseEventCreatePagemarkToPoint(event);
        });
    }
    onContextMenuCreatePagemarkToPoint(triggerEvent) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pageElement = this.docFormat.getPageElementFromPageNum(triggerEvent.pageNum);
                const pageNum = triggerEvent.pageNum;
                const verticalOffsetWithinPageElement = triggerEvent.points.pageOffset.y;
                this.createPagemarkAtPoint(pageNum, pageElement, verticalOffsetWithinPageElement)
                    .catch(err => log.error("Failed to create pagemark: ", err));
            }
            finally {
                RendererAnalytics_1.RendererAnalytics.event({ category: 'user', action: 'created-pagemark-via-context-menu' });
            }
        });
    }
    onMouseEventCreatePagemarkToPoint(event) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pageElement = Elements_1.Elements.untilRoot(event.currentTarget, ".page");
                const pageNum = this.docFormat.getPageNumFromPageElement(pageElement);
                const eventTargetOffset = Elements_1.Elements.getRelativeOffsetRect(event.target, pageElement);
                const verticalOffsetWithinPageElement = eventTargetOffset.top + event.offsetY;
                this.createPagemarkAtPoint(pageNum, pageElement, verticalOffsetWithinPageElement)
                    .catch(err => log.error("Failed to create pagemark: ", err));
            }
            finally {
                RendererAnalytics_1.RendererAnalytics.event({ category: 'user', action: 'created-pagemark-via-keyboard' });
            }
        });
    }
    createPagemarkAtPoint(pageNum, pageElement, verticalOffsetWithinPageElement) {
        return __awaiter(this, void 0, void 0, function* () {
            const pageHeight = pageElement.clientHeight;
            const percentage = Percentages_1.Percentages.calculate(verticalOffsetWithinPageElement, pageHeight);
            log.info("percentage for pagemark: ", percentage);
            this.model.erasePagemark(pageNum);
            yield this.model.createPagemarksForRange(pageNum, percentage);
        });
    }
}
exports.PagemarkCoverageEventListener = PagemarkCoverageEventListener;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZW1hcmtDb3ZlcmFnZUV2ZW50TGlzdGVuZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQYWdlbWFya0NvdmVyYWdlRXZlbnRMaXN0ZW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR0EsZ0RBQTJDO0FBQzNDLHVFQUFrRTtBQUNsRSwrQ0FBMEM7QUFDMUMsa0RBQTZDO0FBQzdDLGtFQUE2RDtBQUM3RCx3REFBbUQ7QUFJbkQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsNkJBQTZCO0lBV3RDLFlBQVksVUFBeUIsRUFBRSxLQUFZO1FBTjNDLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBT2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsbUNBQWdCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEQsQ0FBQztJQUVNLEtBQUs7UUFFUixHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRXhCLElBQUksQ0FBQyxLQUFLLENBQUMsaUNBQWlDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztRQUM1RSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRWxGLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUVoQyxDQUFDO0lBR08saUJBQWlCLENBQUMsS0FBVTtRQUVoQyxHQUFHLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXRDLE1BQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFF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SkQsc0VBc0pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtXZWJDb250cm9sbGVyfSBmcm9tICcuLi8uLi9jb250cm9sbGVyL1dlYkNvbnRyb2xsZXInO1xuaW1wb3J0IHtNb2RlbH0gZnJvbSAnLi4vLi4vbW9kZWwvTW9kZWwnO1xuaW1wb3J0IHtEb2NGb3JtYXR9IGZyb20gJy4uLy4uL2RvY2Zvcm1hdC9Eb2NGb3JtYXQnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uLy4uL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtEb2NGb3JtYXRGYWN0b3J5fSBmcm9tICcuLi8uLi9kb2Nmb3JtYXQvRG9jRm9ybWF0RmFjdG9yeSc7XG5pbXBvcnQge0tleUV2ZW50c30gZnJvbSAnLi4vLi4vS2V5RXZlbnRzJztcbmltcG9ydCB7RWxlbWVudHN9IGZyb20gJy4uLy4uL3V0aWwvRWxlbWVudHMnO1xuaW1wb3J0IHtSZW5kZXJlckFuYWx5dGljc30gZnJvbSAnLi4vLi4vZ2EvUmVuZGVyZXJBbmFseXRpY3MnO1xuaW1wb3J0IHtQZXJjZW50YWdlc30gZnJvbSAnLi4vLi4vdXRpbC9QZXJjZW50YWdlcyc7XG5pbXBvcnQge1BhZ2VtYXJrTW9kZX0gZnJvbSAnLi4vLi4vbWV0YWRhdGEvUGFnZW1hcmtNb2RlJztcbmltcG9ydCB7VHJpZ2dlckV2ZW50fSBmcm9tICcuLi8uLi9jb250ZXh0bWVudS9UcmlnZ2VyRXZlbnQnO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBQYWdlbWFya0NvdmVyYWdlRXZlbnRMaXN0ZW5lciB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbnRyb2xsZXI6IFdlYkNvbnRyb2xsZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSBtb2RlbDogTW9kZWw7XG5cbiAgICBwcml2YXRlIGtleUFjdGl2YXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBkb2NGb3JtYXQ6IERvY0Zvcm1hdDtcblxuICAgIC8qKlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbnRyb2xsZXI6IFdlYkNvbnRyb2xsZXIsIG1vZGVsOiBNb2RlbCkge1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuICAgICAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgICAgIHRoaXMuZG9jRm9ybWF0ID0gRG9jRm9ybWF0RmFjdG9yeS5nZXRJbnN0YW5jZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGFydCgpIHtcblxuICAgICAgICBsb2cuaW5mbyhcIlN0YXJ0aW5nLi4uXCIpO1xuXG4gICAgICAgIHRoaXMubW9kZWwucmVnaXN0ZXJMaXN0ZW5lckZvckRvY3VtZW50TG9hZGVkKCgpID0+IHRoaXMub25Eb2N1bWVudExvYWRlZCgpKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGV2ZW50ID0+IHRoaXMub25NZXNzYWdlUmVjZWl2ZWQoZXZlbnQpLCBmYWxzZSk7XG5cbiAgICAgICAgbG9nLmluZm8oXCJTdGFydGluZy4uLmRvbmVcIik7XG5cbiAgICB9XG5cbiAgICAvLyBmb3IgbWVzc2FnZSBzZW5kIGZyb20gdGhlIGNvbnRleHQgbWVudVxuICAgIHByaXZhdGUgb25NZXNzYWdlUmVjZWl2ZWQoZXZlbnQ6IGFueSkge1xuXG4gICAgICAgIGxvZy5pbmZvKFwiUmVjZWl2ZWQgbWVzc2FnZTogXCIsIGV2ZW50KTtcblxuICAgICAgICBjb25zdCB0cmlnZ2VyRXZlbnQgPSBldmVudC5kYXRhO1xuXG4gICAgICAgIHN3aXRjaCAoZXZlbnQuZGF0YS50eXBlKSB7XG5cbiAgICAgICAgICAgIGNhc2UgXCJjcmVhdGUtcGFnZW1hcmstdG8tcG9pbnRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ29udGV4dE1lbnVDcmVhdGVQYWdlbWFya1RvUG9pbnQodHJpZ2dlckV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihlcnIpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRG9jdW1lbnRMb2FkZWQoKSB7XG5cbiAgICAgICAgbG9nLmluZm8oXCJEb2N1bWVudCBsb2FkZWQuLi4gaW5zdGFsbGluZyBsaXN0ZW5lcnMuLi5cIik7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGV2ZW50ID0+IHRoaXMua2V5TGlzdGVuZXIoZXZlbnQpKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZXZlbnQgPT4gdGhpcy5rZXlMaXN0ZW5lcihldmVudCkpO1xuXG4gICAgICAgIGNvbnN0IHBhZ2VFbGVtZW50czogSFRNTEVsZW1lbnRbXVxuICAgICAgICAgICAgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGFnZVwiKSk7XG5cbiAgICAgICAgZm9yIChjb25zdCBwYWdlRWxlbWVudCBvZiBwYWdlRWxlbWVudHMpIHtcbiAgICAgICAgICAgIHBhZ2VFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB0aGlzLm1vdXNlTGlzdGVuZXIoZXZlbnQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYWdlRWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBsb2cud2FybihcIk5vIHBhZ2VzIGZvdW5kIGZvciBjbGljayBsaXN0ZW5lci5cIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb2cuZGVidWcoXCJBZGRlZCBjbGljayBsaXN0ZW5lciB0byBOIHBhZ2VzOiBcIiArIHBhZ2VFbGVtZW50cy5sZW5ndGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgbG9nLmluZm8oXCJEb2N1bWVudCBsb2FkZWQuLi4gaW5zdGFsbGluZyBsaXN0ZW5lcnMuLi5kb25lXCIpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJhY2sgdGhhdCB3ZSd2ZSBzZWxlY3RlZCAnZScgb24gdGhlIGtleWJvYXJkLFxuICAgICAqL1xuICAgIHByaXZhdGUga2V5TGlzdGVuZXIoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcblxuICAgICAgICBpZiAoIWV2ZW50KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJubyBldmVudFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMua2V5QWN0aXZhdGVkID0gS2V5RXZlbnRzLmlzS2V5TWV0YUFjdGl2ZShldmVudCk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIG1vdXNlTGlzdGVuZXIoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcblxuICAgICAgICBpZiAoIWV2ZW50KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJubyBldmVudFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5rZXlBY3RpdmF0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IHRoaXMub25Nb3VzZUV2ZW50Q3JlYXRlUGFnZW1hcmtUb1BvaW50KGV2ZW50KTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgb25Db250ZXh0TWVudUNyZWF0ZVBhZ2VtYXJrVG9Qb2ludCh0cmlnZ2VyRXZlbnQ6IFRyaWdnZXJFdmVudCkge1xuXG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHBhZ2VFbGVtZW50ID0gdGhpcy5kb2NGb3JtYXQuZ2V0UGFnZUVsZW1lbnRGcm9tUGFnZU51bSh0cmlnZ2VyRXZlbnQucGFnZU51bSk7XG4gICAgICAgICAgICBjb25zdCBwYWdlTnVtID0gdHJpZ2dlckV2ZW50LnBhZ2VOdW07XG4gICAgICAgICAgICBjb25zdCB2ZXJ0aWNhbE9mZnNldFdpdGhpblBhZ2VFbGVtZW50ID0gdHJpZ2dlckV2ZW50LnBvaW50cy5wYWdlT2Zmc2V0Lnk7XG5cbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUGFnZW1hcmtBdFBvaW50KHBhZ2VOdW0sIHBhZ2VFbGVtZW50LCB2ZXJ0aWNhbE9mZnNldFdpdGhpblBhZ2VFbGVtZW50KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gbG9nLmVycm9yKFwiRmFpbGVkIHRvIGNyZWF0ZSBwYWdlbWFyazogXCIsIGVycikpO1xuXG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBSZW5kZXJlckFuYWx5dGljcy5ldmVudCh7Y2F0ZWdvcnk6ICd1c2VyJywgYWN0aW9uOiAnY3JlYXRlZC1wYWdlbWFyay12aWEtY29udGV4dC1tZW51J30pO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zMjM0MjU2L2ZpbmQtbW91c2UtcG9zaXRpb24tcmVsYXRpdmUtdG8tZWxlbWVudFxuICAgIHByaXZhdGUgYXN5bmMgb25Nb3VzZUV2ZW50Q3JlYXRlUGFnZW1hcmtUb1BvaW50KGV2ZW50OiBNb3VzZUV2ZW50KSB7XG5cbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgLy8gdGhpcyBzaG91bGQgYWx3YXlzIGJlIC5wYWdlIHNpbmNlIHdlJ3JlIHVzaW5nIGN1cnJlbnRUYXJnZXRcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VFbGVtZW50ID0gRWxlbWVudHMudW50aWxSb290KDxIVE1MRWxlbWVudD4gZXZlbnQuY3VycmVudFRhcmdldCwgXCIucGFnZVwiKTtcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VOdW0gPSB0aGlzLmRvY0Zvcm1hdC5nZXRQYWdlTnVtRnJvbVBhZ2VFbGVtZW50KHBhZ2VFbGVtZW50KTtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50VGFyZ2V0T2Zmc2V0ID0gRWxlbWVudHMuZ2V0UmVsYXRpdmVPZmZzZXRSZWN0KDxIVE1MRWxlbWVudD4gZXZlbnQudGFyZ2V0LCBwYWdlRWxlbWVudCk7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0aWNhbE9mZnNldFdpdGhpblBhZ2VFbGVtZW50ID0gZXZlbnRUYXJnZXRPZmZzZXQudG9wICsgZXZlbnQub2Zmc2V0WTtcblxuICAgICAgICAgICAgdGhpcy5jcmVhdGVQYWdlbWFya0F0UG9pbnQocGFnZU51bSwgcGFnZUVsZW1lbnQsIHZlcnRpY2FsT2Zmc2V0V2l0aGluUGFnZUVsZW1lbnQpXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJGYWlsZWQgdG8gY3JlYXRlIHBhZ2VtYXJrOiBcIiwgZXJyKSk7XG5cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIFJlbmRlcmVyQW5hbHl0aWNzLmV2ZW50KHtjYXRlZ29yeTogJ3VzZXInLCBhY3Rpb246ICdjcmVhdGVkLXBhZ2VtYXJrLXZpYS1rZXlib2FyZCd9KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBjcmVhdGVQYWdlbWFya0F0UG9pbnQocGFnZU51bTogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldFdpdGhpblBhZ2VFbGVtZW50OiBudW1iZXIpIHtcblxuICAgICAgICBjb25zdCBwYWdlSGVpZ2h0ID0gcGFnZUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSBQZXJjZW50YWdlcy5jYWxjdWxhdGUodmVydGljYWxPZmZzZXRXaXRoaW5QYWdlRWxlbWVudCwgcGFnZUhlaWdodCk7XG5cbiAgICAgICAgbG9nLmluZm8oXCJwZXJjZW50YWdlIGZvciBwYWdlbWFyazogXCIsIHBlcmNlbnRhZ2UpO1xuXG4gICAgICAgIHRoaXMubW9kZWwuZXJhc2VQYWdlbWFyayhwYWdlTnVtKTtcblxuICAgICAgICBhd2FpdCB0aGlzLm1vZGVsLmNyZWF0ZVBhZ2VtYXJrc0ZvclJhbmdlKHBhZ2VOdW0sIHBlcmNlbnRhZ2UpO1xuXG4gICAgfVxuXG59XG4iXX0=