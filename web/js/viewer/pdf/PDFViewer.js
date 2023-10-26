"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = require("../../logger/Logger");
const Viewer_1 = require("../Viewer");
const RendererAnalytics_1 = require("../../ga/RendererAnalytics");
const ViewerTours_1 = require("../../apps/viewer/ViewerTours");
const Stopwatches_1 = require("../../util/Stopwatches");
const AppRuntime_1 = require("../../AppRuntime");
const WindowEvents_1 = require("../../util/dom/WindowEvents");
const log = Logger_1.Logger.create();
class PDFViewer extends Viewer_1.Viewer {
    constructor(model) {
        super();
        this.model = model;
    }
    start() {
        log.info("Starting PDFViewer");
        RendererAnalytics_1.RendererAnalytics.pageview("/pdfviewer");
        const stopwatch = Stopwatches_1.Stopwatches.create();
        this.model.registerListenerForDocumentLoaded(event => {
            ViewerTours_1.ViewerTours.createWhenNecessary(event.fingerprint);
            log.notice("Document load time: " + stopwatch.stop());
            this.sendResizeEvent();
        });
        this.disableSidebarKeyboardHandling();
    }
    docDetail() {
        return {
            fingerprint: this.currentDocFingerprint(),
            title: window.PDFViewerApplication.pdfDocument.pdfInfo.title,
            nrPages: window.PDFViewerApplication.pagesCount,
            filename: this.getFilename()
        };
    }
    disableSidebarKeyboardHandling() {
        const sidebarElement = document.querySelector(".polar-sidebar");
        sidebarElement.addEventListener("keypress", event => {
            event.stopPropagation();
        });
        sidebarElement.addEventListener("keydown", event => {
            event.stopPropagation();
        });
    }
    currentDocFingerprint() {
        if (window.PDFViewerApplication &&
            window.PDFViewerApplication.pdfDocument &&
            window.PDFViewerApplication.pdfDocument.pdfInfo &&
            window.PDFViewerApplication.pdfDocument.pdfInfo.fingerprint != null) {
            return window.PDFViewerApplication.pdfDocument.pdfInfo.fingerprint;
        }
    }
    sendResizeEvent() {
        if (AppRuntime_1.AppRuntime.isBrowser()) {
            WindowEvents_1.WindowEvents.sendResizeEvent();
        }
    }
}
exports.PDFViewer = PDFViewer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUERGVmlld2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUERGVmlld2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0RBQTJDO0FBQzNDLHNDQUFpQztBQUVqQyxrRUFBNkQ7QUFDN0QsK0RBQTBEO0FBRTFELHdEQUFtRDtBQUNuRCxpREFBNEM7QUFDNUMsOERBQXlEO0FBSXpELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLFNBQVUsU0FBUSxlQUFNO0lBSWpDLFlBQVksS0FBWTtRQUNwQixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxLQUFLO1FBRVIsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRS9CLHFDQUFpQixDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUV6QyxNQUFNLFNBQVMsR0FBRyx5QkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRXZDLElBQUksQ0FBQyxLQUFLLENBQUMsaUNBQWlDLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFFakQseUJBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFbkQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsR0FBRyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFM0IsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsOEJBQThCLEVBQUUsQ0FBQztJQUUxQyxDQUFDO0lBRU0sU0FBUztRQUVaLE9BQU87WUFDSCxXQUFXLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQ3pDLEtBQUssRUFBRSxNQUFNLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLO1lBQzVELE9BQU8sRUFBRSxNQUFNLENBQUMsb0JBQW9CLENBQUMsVUFBVTtZQUMvQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRTtTQUMvQixDQUFDO0lBRU4sQ0FBQztJQUVPLDhCQUE4QjtRQUVsQyxNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFFLENBQUM7UUFFakUsY0FBYyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsRUFBRTtZQUNoRCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7UUFFSCxjQUFjLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQy9DLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFLTyxxQkFBcUI7UUFFekIsSUFBSSxNQUFNLENBQUMsb0JBQW9CO1lBQzNCLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXO1lBQ3ZDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsT0FBTztZQUMvQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxXQUFXLElBQUksSUFBSSxFQUFFO1lBRXJFLE9BQU8sTUFBTSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1NBRXRFO0lBRUwsQ0FBQztJQUVPLGVBQWU7UUFFbkIsSUFBSSx1QkFBVSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3hCLDJCQUFZLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDbEM7SUFFTCxDQUFDO0NBRUo7QUEvRUQsOEJBK0VDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uLy4uL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtWaWV3ZXJ9IGZyb20gJy4uL1ZpZXdlcic7XG5pbXBvcnQge0RvY0RldGFpbH0gZnJvbSAnLi4vLi4vbWV0YWRhdGEvRG9jRGV0YWlsJztcbmltcG9ydCB7UmVuZGVyZXJBbmFseXRpY3N9IGZyb20gJy4uLy4uL2dhL1JlbmRlcmVyQW5hbHl0aWNzJztcbmltcG9ydCB7Vmlld2VyVG91cnN9IGZyb20gJy4uLy4uL2FwcHMvdmlld2VyL1ZpZXdlclRvdXJzJztcbmltcG9ydCB7TW9kZWx9IGZyb20gJy4uLy4uL21vZGVsL01vZGVsJztcbmltcG9ydCB7U3RvcHdhdGNoZXN9IGZyb20gJy4uLy4uL3V0aWwvU3RvcHdhdGNoZXMnO1xuaW1wb3J0IHtBcHBSdW50aW1lfSBmcm9tICcuLi8uLi9BcHBSdW50aW1lJztcbmltcG9ydCB7V2luZG93RXZlbnRzfSBmcm9tICcuLi8uLi91dGlsL2RvbS9XaW5kb3dFdmVudHMnO1xuXG5kZWNsYXJlIHZhciB3aW5kb3c6IGFueTtcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgY2xhc3MgUERGVmlld2VyIGV4dGVuZHMgVmlld2VyIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgbW9kZWw6IE1vZGVsO1xuXG4gICAgY29uc3RydWN0b3IobW9kZWw6IE1vZGVsKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnQoKSB7XG5cbiAgICAgICAgbG9nLmluZm8oXCJTdGFydGluZyBQREZWaWV3ZXJcIik7XG5cbiAgICAgICAgUmVuZGVyZXJBbmFseXRpY3MucGFnZXZpZXcoXCIvcGRmdmlld2VyXCIpO1xuXG4gICAgICAgIGNvbnN0IHN0b3B3YXRjaCA9IFN0b3B3YXRjaGVzLmNyZWF0ZSgpO1xuXG4gICAgICAgIHRoaXMubW9kZWwucmVnaXN0ZXJMaXN0ZW5lckZvckRvY3VtZW50TG9hZGVkKGV2ZW50ID0+IHtcblxuICAgICAgICAgICAgVmlld2VyVG91cnMuY3JlYXRlV2hlbk5lY2Vzc2FyeShldmVudC5maW5nZXJwcmludCk7XG5cbiAgICAgICAgICAgIGxvZy5ub3RpY2UoXCJEb2N1bWVudCBsb2FkIHRpbWU6IFwiICsgc3RvcHdhdGNoLnN0b3AoKSk7XG4gICAgICAgICAgICB0aGlzLnNlbmRSZXNpemVFdmVudCgpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZGlzYWJsZVNpZGViYXJLZXlib2FyZEhhbmRsaW5nKCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgZG9jRGV0YWlsKCk6IERvY0RldGFpbCB8IHVuZGVmaW5lZCB7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZpbmdlcnByaW50OiB0aGlzLmN1cnJlbnREb2NGaW5nZXJwcmludCgpLFxuICAgICAgICAgICAgdGl0bGU6IHdpbmRvdy5QREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZEb2N1bWVudC5wZGZJbmZvLnRpdGxlLFxuICAgICAgICAgICAgbnJQYWdlczogd2luZG93LlBERlZpZXdlckFwcGxpY2F0aW9uLnBhZ2VzQ291bnQsXG4gICAgICAgICAgICBmaWxlbmFtZTogdGhpcy5nZXRGaWxlbmFtZSgpXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGRpc2FibGVTaWRlYmFyS2V5Ym9hcmRIYW5kbGluZygpIHtcblxuICAgICAgICBjb25zdCBzaWRlYmFyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9sYXItc2lkZWJhclwiKSE7XG5cbiAgICAgICAgc2lkZWJhckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzaWRlYmFyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGN1cnJlbnQgZG9jIGZpbmdlcnByaW50IG9yIG51bGwgaWYgaXQgaGFzbid0IGJlZW4gbG9hZGVkIHlldC5cbiAgICAgKi9cbiAgICBwcml2YXRlIGN1cnJlbnREb2NGaW5nZXJwcmludCgpIHtcblxuICAgICAgICBpZiAod2luZG93LlBERlZpZXdlckFwcGxpY2F0aW9uICYmXG4gICAgICAgICAgICB3aW5kb3cuUERGVmlld2VyQXBwbGljYXRpb24ucGRmRG9jdW1lbnQgJiZcbiAgICAgICAgICAgIHdpbmRvdy5QREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZEb2N1bWVudC5wZGZJbmZvICYmXG4gICAgICAgICAgICB3aW5kb3cuUERGVmlld2VyQXBwbGljYXRpb24ucGRmRG9jdW1lbnQucGRmSW5mby5maW5nZXJwcmludCAhPSBudWxsKSB7XG5cbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuUERGVmlld2VyQXBwbGljYXRpb24ucGRmRG9jdW1lbnQucGRmSW5mby5maW5nZXJwcmludDtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHNlbmRSZXNpemVFdmVudCgpIHtcblxuICAgICAgICBpZiAoQXBwUnVudGltZS5pc0Jyb3dzZXIoKSkge1xuICAgICAgICAgICAgV2luZG93RXZlbnRzLnNlbmRSZXNpemVFdmVudCgpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn1cbiJdfQ==