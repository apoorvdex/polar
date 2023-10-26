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
const Preconditions_1 = require("../Preconditions");
const DocFormatFactory_1 = require("../docformat/DocFormatFactory");
const ContextMenuController_1 = require("../contextmenu/ContextMenuController");
const KeyEvents_1 = require("../KeyEvents");
const Logger_1 = require("../logger/Logger");
const DocTitleController_1 = require("./DocTitleController");
const PagemarkController_1 = require("../pagemarks/controller/PagemarkController");
const Controller_1 = require("./Controller");
const TextHighlightController_1 = require("../highlights/text/controller/TextHighlightController");
const AreaHighlightController_1 = require("../highlights/area/controller/AreaHighlightController");
const PagemarkCoverageEventListener_1 = require("../pagemarks/controller/PagemarkCoverageEventListener");
const DocDetails_1 = require("../metadata/DocDetails");
const Optional_1 = require("../util/ts/Optional");
const log = Logger_1.Logger.create();
class WebController extends Controller_1.Controller {
    constructor(model, viewer) {
        super(Preconditions_1.Preconditions.assertNotNull(model, "model"));
        this.viewer = Preconditions_1.Preconditions.assertNotNull(viewer, "viewer");
        this.docFormat = Preconditions_1.notNull(DocFormatFactory_1.DocFormatFactory.getInstance());
        new PagemarkController_1.PagemarkController(model).start();
        new DocTitleController_1.DocTitleController(this.model).start();
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            this.listenForDocumentLoad();
            yield this.listenForKeyBindings();
            if (this.docFormat.name === 'pdf') {
                this.detectDocumentLoaded('start');
            }
        });
    }
    dispatchDocumentLoaded(fingerprint, nrPages, currentlySelectedPageNum) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            const docDetail = this.viewer.docDetail();
            yield _super("onDocumentLoaded").call(this, fingerprint, nrPages, currentlySelectedPageNum, docDetail);
            log.info("Merging docDetail: ", docDetail);
            DocDetails_1.DocDetails.merge(this.model.docMeta.docInfo, docDetail);
            this.setupWindowWidth();
            this.setupDocumentTitle();
            this.setupContextMenu();
        });
    }
    setupWindowWidth() {
        const viewerClientWidth = Optional_1.Optional.of(document.querySelector("#viewerContainer"))
            .map(current => current.clientWidth)
            .getOrElse(0);
        const viewerScrollWidth = Optional_1.Optional.of(document.querySelector("#viewerContainer"))
            .map(current => current.scrollWidth)
            .getOrElse(0);
        const needsResize = viewerScrollWidth > viewerClientWidth;
        if (needsResize) {
            const sidebarScrollWidth = Optional_1.Optional.of(document.querySelector("#sidebarContainer"))
                .map(current => current.scrollWidth)
                .getOrElse(0);
            const bufferWidth = 50;
            const newWidth = sidebarScrollWidth + viewerScrollWidth + bufferWidth;
            if (newWidth > window.outerWidth) {
                window.resizeTo(newWidth, window.outerHeight);
            }
        }
    }
    setupDocumentTitle() {
        const title = Optional_1.Optional.of(this.model.docMeta.docInfo.title).getOrElse("Untitled");
        document.title = `${title}`;
    }
    setupContextMenu() {
        const contextMenuController = new ContextMenuController_1.ContextMenuController(this.model);
        contextMenuController.start();
    }
    listenForDocumentLoad() {
        const container = Preconditions_1.notNull(document.getElementById('viewerContainer'));
        for (const eventName of ['pagesinit', 'updateviewarea']) {
            container.addEventListener(eventName, (event) => this.detectDocumentLoaded(eventName));
        }
    }
    detectDocumentLoaded(eventName) {
        const currentDocFingerprint = this.docFormat.currentDocFingerprint();
        if (currentDocFingerprint !== undefined && currentDocFingerprint !== this.docFingerprint) {
            log.info("controller: New document loaded: " + eventName);
            const newDocumentFingerprint = currentDocFingerprint;
            const currentDocState = this.docFormat.currentState();
            this.onNewDocumentFingerprint(newDocumentFingerprint, currentDocState.nrPages, currentDocState.currentPageNumber);
        }
    }
    onNewDocumentFingerprint(newDocumentFingerprint, nrPages, currentPageNumber) {
        log.info(`Detected new document fingerprint (fingerprint=${newDocumentFingerprint}, nrPages=${nrPages}, currentPageNumber=${currentPageNumber})`);
        this.docFingerprint = newDocumentFingerprint;
        this.dispatchDocumentLoaded(newDocumentFingerprint, nrPages, currentPageNumber)
            .catch(err => log.error("Could not handle onDocumentLoaded: ", err));
    }
    keyBindingPagemarkEntirePage(event) {
        return __awaiter(this, void 0, void 0, function* () {
            log.info("Marking entire page as read.");
            const pageElement = this.docFormat.getCurrentPageElement();
            if (pageElement) {
                const pageNum = this.docFormat.getPageNumFromPageElement(pageElement);
                this.erasePagemarks(pageNum);
                yield this.createPagemark(pageNum);
            }
            else {
                log.warn("No current pageElement to create pagemark.");
            }
        });
    }
    keyBindingErasePagemark() {
        log.info("Erasing pagemark.");
        const pageElement = this.docFormat.getCurrentPageElement();
        if (Preconditions_1.isPresent(pageElement)) {
            const pageNum = this.docFormat.getPageNumFromPageElement(pageElement);
            this.erasePagemark(pageNum);
        }
    }
    keyBindingListener(event) {
        return __awaiter(this, void 0, void 0, function* () {
            if (KeyEvents_1.KeyEvents.isKeyMetaActive(event)) {
                if (event.key) {
                    switch (event.code) {
                        case "KeyE":
                            this.keyBindingErasePagemark();
                            break;
                        case "KeyN":
                            yield this.keyBindingPagemarkEntirePage(event);
                            break;
                        default:
                            break;
                    }
                }
            }
            else {
            }
        });
    }
    listenForKeyBindings() {
        return __awaiter(this, void 0, void 0, function* () {
            document.addEventListener("keydown", this.keyBindingListener.bind(this));
            log.info("Key bindings registered");
            new TextHighlightController_1.TextHighlightController(this.model).start();
            new PagemarkCoverageEventListener_1.PagemarkCoverageEventListener(this, this.model).start();
            new AreaHighlightController_1.AreaHighlightController(this.model).start();
        });
    }
}
exports.WebController = WebController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIldlYkNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLG9EQUFtRTtBQUNuRSxvRUFBK0Q7QUFDL0QsZ0ZBQTJFO0FBQzNFLDRDQUF1QztBQUN2Qyw2Q0FBd0M7QUFFeEMsNkRBQXdEO0FBQ3hELG1GQUE4RTtBQUU5RSw2Q0FBd0M7QUFDeEMsbUdBQThGO0FBSTlGLG1HQUE4RjtBQUM5Rix5R0FBb0c7QUFDcEcsdURBQWtEO0FBQ2xELGtEQUE2QztBQUk3QyxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSxhQUFjLFNBQVEsdUJBQVU7SUFhekMsWUFBWSxLQUFZLEVBQUUsTUFBYztRQUVwQyxLQUFLLENBQUMsNkJBQWEsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFFbkQsSUFBSSxDQUFDLE1BQU0sR0FBRyw2QkFBYSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFNUQsSUFBSSxDQUFDLFNBQVMsR0FBRyx1QkFBTyxDQUFDLG1DQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFFekQsSUFBSSx1Q0FBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0QyxJQUFJLHVDQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUUvQyxDQUFDO0lBRVksS0FBSzs7WUFFZCxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUM3QixNQUFNLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1lBSWxDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssS0FBSyxFQUFFO2dCQUMvQixJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7YUFD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QyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBRXpFLEdBQUcsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUVwQyxJQUFJLGlEQUF1QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUVoRCxJQUFJLDZEQUE2QixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFNNUQsSUFBSSxpREFBdUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFcEQsQ0FBQztLQUFBO0NBRUo7QUE1T0Qsc0NBNE9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNb2RlbH0gZnJvbSAnLi4vbW9kZWwvTW9kZWwnO1xuaW1wb3J0IHtpc1ByZXNlbnQsIG5vdE51bGwsIFByZWNvbmRpdGlvbnN9IGZyb20gJy4uL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtEb2NGb3JtYXRGYWN0b3J5fSBmcm9tICcuLi9kb2Nmb3JtYXQvRG9jRm9ybWF0RmFjdG9yeSc7XG5pbXBvcnQge0NvbnRleHRNZW51Q29udHJvbGxlcn0gZnJvbSAnLi4vY29udGV4dG1lbnUvQ29udGV4dE1lbnVDb250cm9sbGVyJztcbmltcG9ydCB7S2V5RXZlbnRzfSBmcm9tICcuLi9LZXlFdmVudHMnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtWaWV3ZXJ9IGZyb20gJy4uL3ZpZXdlci9WaWV3ZXInO1xuaW1wb3J0IHtEb2NUaXRsZUNvbnRyb2xsZXJ9IGZyb20gJy4vRG9jVGl0bGVDb250cm9sbGVyJztcbmltcG9ydCB7UGFnZW1hcmtDb250cm9sbGVyfSBmcm9tICcuLi9wYWdlbWFya3MvY29udHJvbGxlci9QYWdlbWFya0NvbnRyb2xsZXInO1xuaW1wb3J0IHtBbmtpU3luY0NvbnRyb2xsZXJ9IGZyb20gJy4vQW5raVN5bmNDb250cm9sbGVyJztcbmltcG9ydCB7Q29udHJvbGxlcn0gZnJvbSAnLi9Db250cm9sbGVyJztcbmltcG9ydCB7VGV4dEhpZ2hsaWdodENvbnRyb2xsZXJ9IGZyb20gJy4uL2hpZ2hsaWdodHMvdGV4dC9jb250cm9sbGVyL1RleHRIaWdobGlnaHRDb250cm9sbGVyJztcbmltcG9ydCB7Rmxhc2hjYXJkc0NvbnRyb2xsZXJ9IGZyb20gJy4uL2ZsYXNoY2FyZHMvY29udHJvbGxlci9GbGFzaGNhcmRzQ29udHJvbGxlcic7XG5pbXBvcnQge0Fubm90YXRpb25zQ29udHJvbGxlcn0gZnJvbSAnLi4vYW5ub3RhdGlvbnMvY29udHJvbGxlci9Bbm5vdGF0aW9uc0NvbnRyb2xsZXInO1xuaW1wb3J0IHtEb2NGb3JtYXR9IGZyb20gJy4uL2RvY2Zvcm1hdC9Eb2NGb3JtYXQnO1xuaW1wb3J0IHtBcmVhSGlnaGxpZ2h0Q29udHJvbGxlcn0gZnJvbSAnLi4vaGlnaGxpZ2h0cy9hcmVhL2NvbnRyb2xsZXIvQXJlYUhpZ2hsaWdodENvbnRyb2xsZXInO1xuaW1wb3J0IHtQYWdlbWFya0NvdmVyYWdlRXZlbnRMaXN0ZW5lcn0gZnJvbSAnLi4vcGFnZW1hcmtzL2NvbnRyb2xsZXIvUGFnZW1hcmtDb3ZlcmFnZUV2ZW50TGlzdGVuZXInO1xuaW1wb3J0IHtEb2NEZXRhaWxzfSBmcm9tICcuLi9tZXRhZGF0YS9Eb2NEZXRhaWxzJztcbmltcG9ydCB7T3B0aW9uYWx9IGZyb20gJy4uL3V0aWwvdHMvT3B0aW9uYWwnO1xuaW1wb3J0IHtBcHBSdW50aW1lfSBmcm9tICcuLi9BcHBSdW50aW1lJztcblxuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBXZWJDb250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlciB7XG5cbiAgICBwcm90ZWN0ZWQgdmlld2VyOiBWaWV3ZXI7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZG9jdW1lbnQgZmluZ2VycHJpbnQgdGhhdCB3ZSBoYXZlIGxvYWRlZCB0byBkZXRlY3Qgd2hlbiB0aGVcbiAgICAgKiBkb2N1bWVudHMgaGF2ZSBjaGFuZ2VkLiAgTm90ZSB0aGF0IHRoaXMgaXNuJ3QgYSBzZWN1cmUgZmluZ2VycHJpbnRcbiAgICAgKiBzbyB3ZSBtaWdodCB3YW50IHRvIGNoYW5nZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAqL1xuICAgIHByaXZhdGUgZG9jRmluZ2VycHJpbnQ/OiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGRvY0Zvcm1hdDogRG9jRm9ybWF0O1xuXG4gICAgY29uc3RydWN0b3IobW9kZWw6IE1vZGVsLCB2aWV3ZXI6IFZpZXdlcikge1xuXG4gICAgICAgIHN1cGVyKFByZWNvbmRpdGlvbnMuYXNzZXJ0Tm90TnVsbChtb2RlbCwgXCJtb2RlbFwiKSk7XG5cbiAgICAgICAgdGhpcy52aWV3ZXIgPSBQcmVjb25kaXRpb25zLmFzc2VydE5vdE51bGwodmlld2VyLCBcInZpZXdlclwiKTtcblxuICAgICAgICB0aGlzLmRvY0Zvcm1hdCA9IG5vdE51bGwoRG9jRm9ybWF0RmFjdG9yeS5nZXRJbnN0YW5jZSgpKTtcblxuICAgICAgICBuZXcgUGFnZW1hcmtDb250cm9sbGVyKG1vZGVsKS5zdGFydCgpO1xuICAgICAgICBuZXcgRG9jVGl0bGVDb250cm9sbGVyKHRoaXMubW9kZWwpLnN0YXJ0KCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc3RhcnQoKSB7XG5cbiAgICAgICAgdGhpcy5saXN0ZW5Gb3JEb2N1bWVudExvYWQoKTtcbiAgICAgICAgYXdhaXQgdGhpcy5saXN0ZW5Gb3JLZXlCaW5kaW5ncygpO1xuXG4gICAgICAgIC8vIG5ldyBNb3VzZVRyYWNlcihkb2N1bWVudCkuc3RhcnQoKTtcblxuICAgICAgICBpZiAodGhpcy5kb2NGb3JtYXQubmFtZSA9PT0gJ3BkZicpIHtcbiAgICAgICAgICAgIHRoaXMuZGV0ZWN0RG9jdW1lbnRMb2FkZWQoJ3N0YXJ0Jyk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBkaXNwYXRjaERvY3VtZW50TG9hZGVkKGZpbmdlcnByaW50OiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnJQYWdlczogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVNlbGVjdGVkUGFnZU51bTogbnVtYmVyKSB7XG5cbiAgICAgICAgY29uc3QgZG9jRGV0YWlsID0gdGhpcy52aWV3ZXIuZG9jRGV0YWlsKCk7XG5cbiAgICAgICAgYXdhaXQgc3VwZXIub25Eb2N1bWVudExvYWRlZChmaW5nZXJwcmludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuclBhZ2VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVNlbGVjdGVkUGFnZU51bSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2NEZXRhaWwpO1xuXG4gICAgICAgIGxvZy5pbmZvKFwiTWVyZ2luZyBkb2NEZXRhaWw6IFwiLCBkb2NEZXRhaWwpO1xuXG4gICAgICAgIC8vIFRPRE86IG1vdmUgdGhpcyBpbnRvIHRoZSBpbXBvcnRlciB0byBjcmVhdGUgdGhlIERvY01ldGEgb25jZSB0aGVcbiAgICAgICAgLy8gUEhaIGlzIGNyZWF0ZWQgd2hpY2ggYWxzbyBtZWFucyB0aGlzIGNhbiBiZSB0ZXN0ZWQgZWFzaWx5LlxuICAgICAgICBEb2NEZXRhaWxzLm1lcmdlKHRoaXMubW9kZWwuZG9jTWV0YS5kb2NJbmZvLCBkb2NEZXRhaWwpO1xuXG4gICAgICAgIHRoaXMuc2V0dXBXaW5kb3dXaWR0aCgpO1xuXG4gICAgICAgIHRoaXMuc2V0dXBEb2N1bWVudFRpdGxlKCk7XG5cbiAgICAgICAgdGhpcy5zZXR1cENvbnRleHRNZW51KCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0dXBXaW5kb3dXaWR0aCgpIHtcblxuICAgICAgICBjb25zdCB2aWV3ZXJDbGllbnRXaWR0aCA9IE9wdGlvbmFsLm9mKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdmlld2VyQ29udGFpbmVyXCIpKVxuICAgICAgICAgICAgLm1hcChjdXJyZW50ID0+IGN1cnJlbnQuY2xpZW50V2lkdGgpXG4gICAgICAgICAgICAuZ2V0T3JFbHNlKDApO1xuXG5cbiAgICAgICAgY29uc3Qgdmlld2VyU2Nyb2xsV2lkdGggPSBPcHRpb25hbC5vZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ZpZXdlckNvbnRhaW5lclwiKSlcbiAgICAgICAgICAgIC5tYXAoY3VycmVudCA9PiBjdXJyZW50LnNjcm9sbFdpZHRoKVxuICAgICAgICAgICAgLmdldE9yRWxzZSgwKTtcblxuICAgICAgICBjb25zdCBuZWVkc1Jlc2l6ZSA9IHZpZXdlclNjcm9sbFdpZHRoID4gdmlld2VyQ2xpZW50V2lkdGg7XG5cbiAgICAgICAgaWYgKG5lZWRzUmVzaXplKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHNpZGViYXJTY3JvbGxXaWR0aCA9IE9wdGlvbmFsLm9mKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2lkZWJhckNvbnRhaW5lclwiKSlcbiAgICAgICAgICAgICAgICAubWFwKGN1cnJlbnQgPT4gY3VycmVudC5zY3JvbGxXaWR0aClcbiAgICAgICAgICAgICAgICAuZ2V0T3JFbHNlKDApO1xuXG4gICAgICAgICAgICBjb25zdCBidWZmZXJXaWR0aCA9IDUwO1xuXG4gICAgICAgICAgICBjb25zdCBuZXdXaWR0aCA9IHNpZGViYXJTY3JvbGxXaWR0aCArIHZpZXdlclNjcm9sbFdpZHRoICsgYnVmZmVyV2lkdGg7XG5cbiAgICAgICAgICAgIGlmIChuZXdXaWR0aCA+IHdpbmRvdy5vdXRlcldpZHRoKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlc2l6ZVRvKG5ld1dpZHRoLCB3aW5kb3cub3V0ZXJIZWlnaHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHB1YmxpYyBzZXR1cERvY3VtZW50VGl0bGUoKSB7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBPcHRpb25hbC5vZih0aGlzLm1vZGVsLmRvY01ldGEuZG9jSW5mby50aXRsZSkuZ2V0T3JFbHNlKFwiVW50aXRsZWRcIik7XG5cbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBgJHt0aXRsZX1gO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHNldHVwQ29udGV4dE1lbnUoKSB7XG5cbiAgICAgICAgY29uc3QgY29udGV4dE1lbnVDb250cm9sbGVyID0gbmV3IENvbnRleHRNZW51Q29udHJvbGxlcih0aGlzLm1vZGVsKTtcbiAgICAgICAgY29udGV4dE1lbnVDb250cm9sbGVyLnN0YXJ0KCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgbGlzdGVuRm9yRG9jdW1lbnRMb2FkKCkge1xuXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IG5vdE51bGwoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdlckNvbnRhaW5lcicpKTtcblxuICAgICAgICBmb3IgKGNvbnN0IGV2ZW50TmFtZSBvZiBbJ3BhZ2VzaW5pdCcsICd1cGRhdGV2aWV3YXJlYSddKSB7XG4gICAgICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIChldmVudCkgPT4gdGhpcy5kZXRlY3REb2N1bWVudExvYWRlZChldmVudE5hbWUpKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gcnVuIG1hbnVhbGx5IHRoZSBmaXJzdCB0aW1lIGluIGNhc2Ugd2UgZ2V0IGx1Y2t5IG9mIHdlJ3JlIHJ1bm5pbmcgSFRNTFxuICAgICAgICAvLyB0aGlzLmRldGVjdERvY3VtZW50TG9hZGVkRXZlbnRMaXN0ZW5lcigpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZXRlY3REb2N1bWVudExvYWRlZChldmVudE5hbWU6IHN0cmluZykge1xuXG4gICAgICAgIC8vIFRPRE86IHRlY2huaWNhbGx5IHdlJ3JlIGRldGVjdGluZyBhIG5ldyBkb2N1bWVudCBMT0FESU5HIG5vdCBMT0FERUQuLi5cbiAgICAgICAgLy8gZml4IHRoaXMgc28gdGhhdCBJIGdldCBhIGRpc3RpbmN0IG9uRG9jdW1lbnRMb2FkZWQgZXZlbnQgdG9vLi4uXG5cbiAgICAgICAgY29uc3QgY3VycmVudERvY0ZpbmdlcnByaW50ID0gdGhpcy5kb2NGb3JtYXQuY3VycmVudERvY0ZpbmdlcnByaW50KCk7XG5cbiAgICAgICAgaWYgKGN1cnJlbnREb2NGaW5nZXJwcmludCAhPT0gdW5kZWZpbmVkICYmIGN1cnJlbnREb2NGaW5nZXJwcmludCAhPT0gdGhpcy5kb2NGaW5nZXJwcmludCkge1xuXG4gICAgICAgICAgICBsb2cuaW5mbyhcImNvbnRyb2xsZXI6IE5ldyBkb2N1bWVudCBsb2FkZWQ6IFwiICsgZXZlbnROYW1lKTtcblxuICAgICAgICAgICAgY29uc3QgbmV3RG9jdW1lbnRGaW5nZXJwcmludCA9IGN1cnJlbnREb2NGaW5nZXJwcmludDtcblxuICAgICAgICAgICAgY29uc3QgY3VycmVudERvY1N0YXRlID0gdGhpcy5kb2NGb3JtYXQuY3VycmVudFN0YXRlKCk7XG5cbiAgICAgICAgICAgIHRoaXMub25OZXdEb2N1bWVudEZpbmdlcnByaW50KG5ld0RvY3VtZW50RmluZ2VycHJpbnQsIGN1cnJlbnREb2NTdGF0ZS5uclBhZ2VzLCBjdXJyZW50RG9jU3RhdGUuY3VycmVudFBhZ2VOdW1iZXIpO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHB1YmxpYyBvbk5ld0RvY3VtZW50RmluZ2VycHJpbnQobmV3RG9jdW1lbnRGaW5nZXJwcmludDogc3RyaW5nLCBuclBhZ2VzOiBudW1iZXIsIGN1cnJlbnRQYWdlTnVtYmVyOiBudW1iZXIpIHtcblxuICAgICAgICBsb2cuaW5mbyhgRGV0ZWN0ZWQgbmV3IGRvY3VtZW50IGZpbmdlcnByaW50IChmaW5nZXJwcmludD0ke25ld0RvY3VtZW50RmluZ2VycHJpbnR9LCBuclBhZ2VzPSR7bnJQYWdlc30sIGN1cnJlbnRQYWdlTnVtYmVyPSR7Y3VycmVudFBhZ2VOdW1iZXJ9KWApO1xuXG4gICAgICAgIHRoaXMuZG9jRmluZ2VycHJpbnQgPSBuZXdEb2N1bWVudEZpbmdlcnByaW50O1xuXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hEb2N1bWVudExvYWRlZChuZXdEb2N1bWVudEZpbmdlcnByaW50LCBuclBhZ2VzLCBjdXJyZW50UGFnZU51bWJlcilcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gbG9nLmVycm9yKFwiQ291bGQgbm90IGhhbmRsZSBvbkRvY3VtZW50TG9hZGVkOiBcIiwgZXJyKSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMga2V5QmluZGluZ1BhZ2VtYXJrRW50aXJlUGFnZShldmVudDogS2V5Ym9hcmRFdmVudCkge1xuXG4gICAgICAgIGxvZy5pbmZvKFwiTWFya2luZyBlbnRpcmUgcGFnZSBhcyByZWFkLlwiKTtcblxuICAgICAgICBjb25zdCBwYWdlRWxlbWVudCA9IHRoaXMuZG9jRm9ybWF0LmdldEN1cnJlbnRQYWdlRWxlbWVudCgpO1xuXG4gICAgICAgIGlmIChwYWdlRWxlbWVudCkge1xuXG4gICAgICAgICAgICBjb25zdCBwYWdlTnVtID0gdGhpcy5kb2NGb3JtYXQuZ2V0UGFnZU51bUZyb21QYWdlRWxlbWVudChwYWdlRWxlbWVudCk7XG5cbiAgICAgICAgICAgIHRoaXMuZXJhc2VQYWdlbWFya3MocGFnZU51bSk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmNyZWF0ZVBhZ2VtYXJrKHBhZ2VOdW0pO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb2cud2FybihcIk5vIGN1cnJlbnQgcGFnZUVsZW1lbnQgdG8gY3JlYXRlIHBhZ2VtYXJrLlwiKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIGtleUJpbmRpbmdFcmFzZVBhZ2VtYXJrKCkge1xuICAgICAgICBsb2cuaW5mbyhcIkVyYXNpbmcgcGFnZW1hcmsuXCIpO1xuICAgICAgICBjb25zdCBwYWdlRWxlbWVudCA9IDxIVE1MRWxlbWVudD4gdGhpcy5kb2NGb3JtYXQuZ2V0Q3VycmVudFBhZ2VFbGVtZW50KCk7XG5cbiAgICAgICAgaWYgKGlzUHJlc2VudChwYWdlRWxlbWVudCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VOdW0gPSB0aGlzLmRvY0Zvcm1hdC5nZXRQYWdlTnVtRnJvbVBhZ2VFbGVtZW50KHBhZ2VFbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMuZXJhc2VQYWdlbWFyayhwYWdlTnVtKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGtleUJpbmRpbmdMaXN0ZW5lcihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuXG4gICAgICAgIGlmIChLZXlFdmVudHMuaXNLZXlNZXRhQWN0aXZlKGV2ZW50KSkge1xuXG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5KSB7XG5cbiAgICAgICAgICAgICAgICAvLyBUT0RPOiB3ZSBzaG91bGQgbm90IHVzZSAnY29kZScgYnV0IHNob3VsZCB1c2UgJ2tleScuLi4gVGhlXG4gICAgICAgICAgICAgICAgLy8gcHJvYmxlbSBpcyB0aGF0IG9uIE9TIFggdGhlIGtleSBjb2RlIHJldHVybmVkICdEZWFkJyBidXQgd2FzXG4gICAgICAgICAgICAgICAgLy8gd29ya2luZyBiZWZvcmUuICBOb3Qgc3VyZSB3aHkgaXQgc3RhcnRlZCBicmVha2luZy5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGV2ZW50LmNvZGUpIHtcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiS2V5RVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlCaW5kaW5nRXJhc2VQYWdlbWFyaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIktleU5cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMua2V5QmluZGluZ1BhZ2VtYXJrRW50aXJlUGFnZShldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbm9vcFxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgbGlzdGVuRm9yS2V5QmluZGluZ3MoKSB7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5rZXlCaW5kaW5nTGlzdGVuZXIuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgbG9nLmluZm8oXCJLZXkgYmluZGluZ3MgcmVnaXN0ZXJlZFwiKTtcblxuICAgICAgICBuZXcgVGV4dEhpZ2hsaWdodENvbnRyb2xsZXIodGhpcy5tb2RlbCkuc3RhcnQoKTtcblxuICAgICAgICBuZXcgUGFnZW1hcmtDb3ZlcmFnZUV2ZW50TGlzdGVuZXIodGhpcywgdGhpcy5tb2RlbCkuc3RhcnQoKTtcblxuICAgICAgICAvLyBuZXcgRmxhc2hjYXJkc0NvbnRyb2xsZXIodGhpcy5tb2RlbCkuc3RhcnQoKTtcblxuICAgICAgICAvLyBhd2FpdCBuZXcgQW5ub3RhdGlvbnNDb250cm9sbGVyKCkuc3RhcnQoKTtcblxuICAgICAgICBuZXcgQXJlYUhpZ2hsaWdodENvbnRyb2xsZXIodGhpcy5tb2RlbCkuc3RhcnQoKTtcblxuICAgIH1cblxufVxuIl19