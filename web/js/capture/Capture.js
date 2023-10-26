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
const CaptureOpts_1 = require("./CaptureOpts");
const Logger_1 = require("../logger/Logger");
const Preconditions_1 = require("../Preconditions");
const PendingWebRequestsListener_1 = require("../webrequests/PendingWebRequestsListener");
const DebugWebRequestsListener_1 = require("../webrequests/DebugWebRequestsListener");
const WebRequestReactor_1 = require("../webrequests/WebRequestReactor");
const WebContentsDriver_1 = require("./drivers/WebContentsDriver");
const Strings_1 = require("../util/Strings");
const Optional_1 = require("../util/ts/Optional");
const Functions_1 = require("../util/Functions");
const ContentCaptureExecutor_1 = require("./ContentCaptureExecutor");
const BrowserRegistry_1 = __importDefault(require("./BrowserRegistry"));
const BrowserProfiles_1 = require("./BrowserProfiles");
const Objects_1 = require("../util/Objects");
const Latch_1 = require("../util/Latch");
const log = Logger_1.Logger.create();
const EXECUTE_CAPTURE_DELAY = 1500;
class Capture {
    constructor(browserProfile, captureOpts = {}) {
        this.webRequestReactors = [];
        this.result = new Latch_1.Latch();
        this.browserProfile = Preconditions_1.Preconditions.assertNotNull(browserProfile, "browser");
        this.captureOpts = Objects_1.Objects.defaults(captureOpts, new CaptureOpts_1.DefaultCaptureOpts());
        this.pendingWebRequestsListener = new PendingWebRequestsListener_1.PendingWebRequestsListener();
        this.debugWebRequestsListener = new DebugWebRequestsListener_1.DebugWebRequestsListener();
        if (captureOpts.pendingWebRequestsCallback) {
            this.pendingWebRequestsListener.addEventListener(captureOpts.pendingWebRequestsCallback);
        }
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            const driver = yield WebContentsDriver_1.WebContentsDriverFactory.create(this.browserProfile);
            this.driver = driver;
            this.webContents = yield driver.getWebContents();
            this.driver.addEventListener('close', () => {
                this.stop();
            });
            this.onWebRequest(this.webContents.session.webRequest);
            this.browserProfile.navigation.navigated.addEventListener(event => {
                const url = event.link;
                Preconditions_1.Preconditions.assertNotNull(url, "url");
                if (Strings_1.Strings.empty(url)) {
                    throw new Error("URL may not be empty");
                }
                this.loadURL(event.link)
                    .catch(err => log.error("Could not load URL: " + event.link, err));
            });
            if (this.captureOpts.link) {
                this.browserProfile.navigation.navigated.dispatchEvent({
                    link: this.captureOpts.link
                });
            }
            return this.result.get();
        });
    }
    loadURL(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const loadURLPromise = this.driver.loadURL(url);
            yield Promise.all([loadURLPromise]);
            yield this.handleLoad(url);
        });
    }
    handleLoad(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const ampURL = yield this.getAmpURL();
            if (this.captureOpts.amp && ampURL && ampURL !== url) {
                log.info("Found AMP URL.  Redirecting then loading: " + ampURL);
                yield this.loadURL(ampURL);
                return;
            }
            return yield this.capture();
        });
    }
    stop() {
        this.webRequestReactors.forEach(webRequestReactor => {
            log.info("Stopping webRequestReactor...");
            webRequestReactor.stop();
            log.info("Stopping webRequestReactor...done");
        });
    }
    capture() {
        return __awaiter(this, void 0, void 0, function* () {
            log.debug("Awaiting captured");
            yield this.browserProfile.navigation.captured.once();
            return this.executeContentCapture();
        });
    }
    getAmpURL() {
        return __awaiter(this, void 0, void 0, function* () {
            function fetchAmpURL() {
                const link = document.querySelector("link[rel='amphtml']");
                if (link) {
                    return link.href;
                }
                return null;
            }
            return yield this.webContents.executeJavaScript(Functions_1.Functions.functionToScript(fetchAmpURL));
        });
    }
    executeContentCapture() {
        return __awaiter(this, void 0, void 0, function* () {
            const captureResult = yield ContentCaptureExecutor_1.ContentCaptureExecutor.execute(this.webContents, this.driver.browserProfile);
            if (this.browserProfile.destroy) {
                Optional_1.Optional.of(this.driver).when(driver => driver.destroy());
            }
            this.result.resolve(captureResult);
        });
    }
    onWebRequest(webRequest) {
        if (this.browserProfile.useReactor) {
            const webRequestReactor = new WebRequestReactor_1.WebRequestReactor(webRequest);
            webRequestReactor.start();
            this.webRequestReactors.push(webRequestReactor);
            this.pendingWebRequestsListener.register(webRequestReactor);
        }
    }
    static trigger(captureOpts = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const browser = BrowserRegistry_1.default.DEFAULT;
            const browserProfile = BrowserProfiles_1.BrowserProfiles.toBrowserProfile(browser, 'DEFAULT');
            const capture = new Capture(browserProfile, captureOpts);
            return capture.start();
        });
    }
}
exports.Capture = Capture;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FwdHVyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNhcHR1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUE4RDtBQUc5RCw2Q0FBd0M7QUFDeEMsb0RBQStDO0FBQy9DLDBGQUFxRjtBQUNyRixzRkFBaUY7QUFDakYsd0VBQW1FO0FBQ25FLG1FQUF3RjtBQUV4Riw2Q0FBd0M7QUFDeEMsa0RBQTZDO0FBQzdDLGlEQUE0QztBQUU1QyxxRUFBZ0U7QUFFaEUsd0VBQWdEO0FBQ2hELHVEQUFrRDtBQUNsRCw2Q0FBd0M7QUFDeEMseUNBQW9DO0FBRXBDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQVU1QixNQUFNLHFCQUFxQixHQUFHLElBQUksQ0FBQztBQUVuQyxNQUFhLE9BQU87SUFrQmhCLFlBQVksY0FBOEIsRUFBRSxjQUFvQyxFQUFFO1FBUmxFLHVCQUFrQixHQUF3QixFQUFFLENBQUM7UUFFckQsV0FBTSxHQUFHLElBQUksYUFBSyxFQUFpQixDQUFDO1FBUXhDLElBQUksQ0FBQyxjQUFjLEdBQUcsNkJBQWEsQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxXQUFXLEdBQUcsaUJBQU8sQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLElBQUksZ0NBQWtCLEVBQUUsQ0FBQyxDQUFDO1FBRTNFLElBQUksQ0FBQywwQkFBMEIsR0FBRyxJQUFJLHVEQUEwQixFQUFFLENBQUM7UUFDbkUsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksbURBQXdCLEVBQUUsQ0FBQztRQUUvRCxJQUFJLFdBQVcsQ0FBQywwQkFBMEIsRUFBRTtZQUN4QyxJQUFJLENBQUMsMEJBQTBCLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLDBCQUEwQixDQUFDLENBQUM7U0FDNUY7SUFFTCxDQUFDO0lBRVksS0FBSzs7WUFFZCxNQUFNLE1BQU0sR0FB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QixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBRWhELElBQUksQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUUvRDtJQUVMLENBQUM7SUFFTSxNQUFNLENBQU8sT0FBTyxDQUFDLGNBQW9DLEVBQUU7O1lBRTlELE1BQU0sT0FBTyxHQUFHLHlCQUFlLENBQUMsT0FBTyxDQUFDO1lBQ3hDLE1BQU0sY0FBYyxHQUFHLGlDQUFlLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQzVFLE1BQU0sT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUN6RCxPQUFPLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUUzQixDQUFDO0tBQUE7Q0FFSjtBQS9NRCwwQkErTUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NhcHR1cmVPcHRzLCBEZWZhdWx0Q2FwdHVyZU9wdHN9IGZyb20gJy4vQ2FwdHVyZU9wdHMnO1xuaW1wb3J0IHtXZWJDb250ZW50cywgV2ViUmVxdWVzdH0gZnJvbSAnZWxlY3Ryb24nO1xuaW1wb3J0IHtDYXB0dXJlUmVzdWx0fSBmcm9tICcuL0NhcHR1cmVSZXN1bHQnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtQcmVjb25kaXRpb25zfSBmcm9tICcuLi9QcmVjb25kaXRpb25zJztcbmltcG9ydCB7UGVuZGluZ1dlYlJlcXVlc3RzTGlzdGVuZXJ9IGZyb20gJy4uL3dlYnJlcXVlc3RzL1BlbmRpbmdXZWJSZXF1ZXN0c0xpc3RlbmVyJztcbmltcG9ydCB7RGVidWdXZWJSZXF1ZXN0c0xpc3RlbmVyfSBmcm9tICcuLi93ZWJyZXF1ZXN0cy9EZWJ1Z1dlYlJlcXVlc3RzTGlzdGVuZXInO1xuaW1wb3J0IHtXZWJSZXF1ZXN0UmVhY3Rvcn0gZnJvbSAnLi4vd2VicmVxdWVzdHMvV2ViUmVxdWVzdFJlYWN0b3InO1xuaW1wb3J0IHtXZWJDb250ZW50c0RyaXZlciwgV2ViQ29udGVudHNEcml2ZXJGYWN0b3J5fSBmcm9tICcuL2RyaXZlcnMvV2ViQ29udGVudHNEcml2ZXInO1xuaW1wb3J0IHtCcm93c2VyUHJvZmlsZX0gZnJvbSAnLi9Ccm93c2VyUHJvZmlsZSc7XG5pbXBvcnQge1N0cmluZ3N9IGZyb20gJy4uL3V0aWwvU3RyaW5ncyc7XG5pbXBvcnQge09wdGlvbmFsfSBmcm9tICcuLi91dGlsL3RzL09wdGlvbmFsJztcbmltcG9ydCB7RnVuY3Rpb25zfSBmcm9tICcuLi91dGlsL0Z1bmN0aW9ucyc7XG5pbXBvcnQge1Byb21pc2VzfSBmcm9tICcuLi91dGlsL1Byb21pc2VzJztcbmltcG9ydCB7Q29udGVudENhcHR1cmVFeGVjdXRvcn0gZnJvbSAnLi9Db250ZW50Q2FwdHVyZUV4ZWN1dG9yJztcbmltcG9ydCB7UmVzb2x2YWJsZVByb21pc2V9IGZyb20gJy4uL3V0aWwvUmVzb2x2YWJsZVByb21pc2UnO1xuaW1wb3J0IEJyb3dzZXJSZWdpc3RyeSBmcm9tICcuL0Jyb3dzZXJSZWdpc3RyeSc7XG5pbXBvcnQge0Jyb3dzZXJQcm9maWxlc30gZnJvbSAnLi9Ccm93c2VyUHJvZmlsZXMnO1xuaW1wb3J0IHtPYmplY3RzfSBmcm9tICcuLi91dGlsL09iamVjdHMnO1xuaW1wb3J0IHtMYXRjaH0gZnJvbSAnLi4vdXRpbC9MYXRjaCc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuLyoqXG4gKiBUaGlzIGlzIGEgaGFyZCBjb2RlZCBkZWxheSB0byBob2xkIG9mZiBjYXB0dXJpbmcgdGhlIGNvbnRlbnQgdW50aWwgdGhlIHBhZ2VcbiAqIGhhcyBmaW5pc2hlZCBleGVjdXRpbmcgYWxsIG9uTG9hZCBoYW5kbGVycy4gSSBuZWVkIG91ciBvd24gd2F5IHRvIGhhbmRsZSB0aGlzXG4gKiB3aXRoaW4gdGhlIGNhcHR1cmUgbWFpbiBwcm9jZXNzLiBNYXliZSBJIGNvdWxkIGFkZCBvdXIgb3duIGxvYWRlciB0byB0aGUgRU5EXG4gKiBvZiB0aGUgbGlzdCBhbmQgb25seSBydW4gb25jZSBvdXIgbG9hZGVyIGZ1bmN0aW9uIGZpbmlzaGVzIGxhc3QuXG4gKlxuICogQHR5cGUge251bWJlcn1cbiAqL1xuY29uc3QgRVhFQ1VURV9DQVBUVVJFX0RFTEFZID0gMTUwMDtcblxuZXhwb3J0IGNsYXNzIENhcHR1cmUge1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGJyb3dzZXJQcm9maWxlOiBCcm93c2VyUHJvZmlsZTtcblxuICAgIHB1YmxpYyByZWFkb25seSBjYXB0dXJlT3B0czogQ2FwdHVyZU9wdHM7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgcGVuZGluZ1dlYlJlcXVlc3RzTGlzdGVuZXI6IFBlbmRpbmdXZWJSZXF1ZXN0c0xpc3RlbmVyO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGRlYnVnV2ViUmVxdWVzdHNMaXN0ZW5lcjogRGVidWdXZWJSZXF1ZXN0c0xpc3RlbmVyO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IHdlYlJlcXVlc3RSZWFjdG9yczogV2ViUmVxdWVzdFJlYWN0b3JbXSA9IFtdO1xuXG4gICAgcHJpdmF0ZSByZXN1bHQgPSBuZXcgTGF0Y2g8Q2FwdHVyZVJlc3VsdD4oKTtcblxuICAgIHByaXZhdGUgd2ViQ29udGVudHM/OiBXZWJDb250ZW50cztcblxuICAgIHByaXZhdGUgZHJpdmVyPzogV2ViQ29udGVudHNEcml2ZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihicm93c2VyUHJvZmlsZTogQnJvd3NlclByb2ZpbGUsIGNhcHR1cmVPcHRzOiBQYXJ0aWFsPENhcHR1cmVPcHRzPiA9IHt9KSB7XG5cbiAgICAgICAgdGhpcy5icm93c2VyUHJvZmlsZSA9IFByZWNvbmRpdGlvbnMuYXNzZXJ0Tm90TnVsbChicm93c2VyUHJvZmlsZSwgXCJicm93c2VyXCIpO1xuICAgICAgICB0aGlzLmNhcHR1cmVPcHRzID0gT2JqZWN0cy5kZWZhdWx0cyhjYXB0dXJlT3B0cywgbmV3IERlZmF1bHRDYXB0dXJlT3B0cygpKTtcblxuICAgICAgICB0aGlzLnBlbmRpbmdXZWJSZXF1ZXN0c0xpc3RlbmVyID0gbmV3IFBlbmRpbmdXZWJSZXF1ZXN0c0xpc3RlbmVyKCk7XG4gICAgICAgIHRoaXMuZGVidWdXZWJSZXF1ZXN0c0xpc3RlbmVyID0gbmV3IERlYnVnV2ViUmVxdWVzdHNMaXN0ZW5lcigpO1xuXG4gICAgICAgIGlmIChjYXB0dXJlT3B0cy5wZW5kaW5nV2ViUmVxdWVzdHNDYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5wZW5kaW5nV2ViUmVxdWVzdHNMaXN0ZW5lci5hZGRFdmVudExpc3RlbmVyKGNhcHR1cmVPcHRzLnBlbmRpbmdXZWJSZXF1ZXN0c0NhbGxiYWNrKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHN0YXJ0KCk6IFByb21pc2U8Q2FwdHVyZVJlc3VsdD4ge1xuXG4gICAgICAgIGNvbnN0IGRyaXZlciA9IGF3YWl0IFdlYkNvbnRlbnRzRHJpdmVyRmFjdG9yeS5jcmVhdGUodGhpcy5icm93c2VyUHJvZmlsZSk7XG5cbiAgICAgICAgdGhpcy5kcml2ZXIgPSBkcml2ZXI7XG5cbiAgICAgICAgdGhpcy53ZWJDb250ZW50cyA9IGF3YWl0IGRyaXZlci5nZXRXZWJDb250ZW50cygpO1xuXG4gICAgICAgIHRoaXMuZHJpdmVyIS5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm9uV2ViUmVxdWVzdCh0aGlzLndlYkNvbnRlbnRzLnNlc3Npb24ud2ViUmVxdWVzdCk7XG5cbiAgICAgICAgdGhpcy5icm93c2VyUHJvZmlsZS5uYXZpZ2F0aW9uLm5hdmlnYXRlZC5hZGRFdmVudExpc3RlbmVyKGV2ZW50ID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdXJsID0gZXZlbnQubGluaztcblxuICAgICAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnROb3ROdWxsKHVybCwgXCJ1cmxcIik7XG5cbiAgICAgICAgICAgIGlmICggU3RyaW5ncy5lbXB0eSh1cmwpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVVJMIG1heSBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubG9hZFVSTChldmVudC5saW5rKVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gbG9nLmVycm9yKFwiQ291bGQgbm90IGxvYWQgVVJMOiBcIiArIGV2ZW50LmxpbmssIGVycikpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLmNhcHR1cmVPcHRzLmxpbmspIHtcblxuICAgICAgICAgICAgdGhpcy5icm93c2VyUHJvZmlsZS5uYXZpZ2F0aW9uLm5hdmlnYXRlZC5kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICAgICAgICBsaW5rOiB0aGlzLmNhcHR1cmVPcHRzLmxpbmtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0LmdldCgpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBsb2FkVVJMKHVybDogc3RyaW5nKSB7XG5cbiAgICAgICAgLy8gd2FpdCB1bnRpbCB0aGUgbWFpbiBVUkwgbG9hZHMuXG4gICAgICAgIGNvbnN0IGxvYWRVUkxQcm9taXNlID0gdGhpcy5kcml2ZXIhLmxvYWRVUkwodXJsKTtcblxuICAgICAgICAvLyB3YWl0IGEgbWluaW11bSBhbW91bnQgb2YgdGltZSBmb3IgdGhlIHBhZ2UgdG8gbG9hZCBzbyB0aGF0IHdlIGNhblxuICAgICAgICAvLyBtYWtlIHN1cmUgdGhhdCBhbGwgc3RhdGljIGNvbnRlbnQgaGFzIGV4ZWN1dGVkLlxuICAgICAgICAvLyBjb25zdCBtaW5EZWxheVByb21pc2UgPSBQcm9taXNlcy53YWl0Rm9yKEVYRUNVVEVfQ0FQVFVSRV9ERUxBWSk7XG5cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoWyBsb2FkVVJMUHJvbWlzZSBdKTtcblxuICAgICAgICAvLyB0aGUgcGFnZSBsb2FkZWQgbm93Li4uIGNhcHR1cmUgdGhlIGNvbnRlbnQuXG4gICAgICAgIGF3YWl0IHRoaXMuaGFuZGxlTG9hZCh1cmwpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBoYW5kbGVMb2FkKHVybDogc3RyaW5nKSB7XG5cbiAgICAgICAgLy8gc2VlIGlmIHdlIGZpcnN0IG5lZWQgdG8gaGFuZGxlIHRoZSBwYWdlIGluIGFueSBzcGVjaWFsIG1hbm5lci5cblxuICAgICAgICAvLyBGSVhNRTogbWFrZSB0aGlzIGludG8gc29tZSB0eXBlIG9mIGNvbnRlbnQgaGFuZGxlcnMgc3lzdGVtXG4gICAgICAgIC8vIHNvIHRoYXQgd2UgY2FuIGFkZCBvbmUgb2ZmIGV4dGVuc2lvbnMgbGlrZSByZWxvYWRpbmcgdGhlIGEgcGFnZVxuICAgICAgICAvLyB3aGVuIEFNUCBvciBvdGhlciBmZWF0dXJlcyBhcmUgZGV0ZWN0ZWQuICBXZSBjb3VsZCBhbHNvIGRvIEFNUFxuICAgICAgICAvLyBlYXJsaWVyIEkgdGhpbiBsaWtlIG9uLWRvbS1yZWFkeS5cbiAgICAgICAgLy9cblxuICAgICAgICBjb25zdCBhbXBVUkwgPSBhd2FpdCB0aGlzLmdldEFtcFVSTCgpO1xuXG4gICAgICAgIC8vIFRPRE86IGlmIHdlIGVuZCB1cCBoYW5kbGluZyBtdWx0aXBsZSB0eXBlcyBvZiBVUkxzIGluIHRoZSBmdXR1cmVcbiAgICAgICAgLy8gd2UgbWlnaHQgd2FudCB0byBidWlsZCB1cCBhIGhpc3RvcnkgdG8gcHJldmVudCBlbmRsZXNzIGxvb3BzIG9yXG4gICAgICAgIC8vIGp1c3Qga2VlcCB0cmFjayBvZiB0aGUgcmVkaXJlY3QgY291bnQuXG4gICAgICAgIGlmICh0aGlzLmNhcHR1cmVPcHRzLmFtcCAmJiBhbXBVUkwgJiYgYW1wVVJMICE9PSB1cmwpIHtcblxuICAgICAgICAgICAgbG9nLmluZm8oXCJGb3VuZCBBTVAgVVJMLiAgUmVkaXJlY3RpbmcgdGhlbiBsb2FkaW5nOiBcIiArIGFtcFVSTCk7XG5cbiAgICAgICAgICAgIGF3YWl0IHRoaXMubG9hZFVSTChhbXBVUkwpO1xuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5jYXB0dXJlKCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RvcCgpIHtcblxuICAgICAgICB0aGlzLndlYlJlcXVlc3RSZWFjdG9ycy5mb3JFYWNoKHdlYlJlcXVlc3RSZWFjdG9yID0+IHtcbiAgICAgICAgICAgIGxvZy5pbmZvKFwiU3RvcHBpbmcgd2ViUmVxdWVzdFJlYWN0b3IuLi5cIik7XG4gICAgICAgICAgICB3ZWJSZXF1ZXN0UmVhY3Rvci5zdG9wKCk7XG4gICAgICAgICAgICBsb2cuaW5mbyhcIlN0b3BwaW5nIHdlYlJlcXVlc3RSZWFjdG9yLi4uZG9uZVwiKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgb25Mb2FkIGhhbmRsZXIgaXMgZXhlY3V0ZWQgYW5kIHdlJ3JlIHJlYWR5IHRvIHN0YXJ0IHRoZVxuICAgICAqIGNhcHR1cmUuXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIGNhcHR1cmUoKSB7XG5cbiAgICAgICAgbG9nLmRlYnVnKFwiQXdhaXRpbmcgY2FwdHVyZWRcIik7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5icm93c2VyUHJvZmlsZS5uYXZpZ2F0aW9uLmNhcHR1cmVkLm9uY2UoKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlQ29udGVudENhcHR1cmUoKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlZSBpZiB0aGUgcGFnZSBoYXMgYSByZWw9YW1waHRtbCBVUkwuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59XG4gICAgICovXG4gICAgcHJpdmF0ZSBhc3luYyBnZXRBbXBVUkwoKSB7XG5cbiAgICAgICAgLyoqIEBSZW5kZXJlckNvbnRleHQgKi9cbiAgICAgICAgZnVuY3Rpb24gZmV0Y2hBbXBVUkwoKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSA8SFRNTExpbmtFbGVtZW50PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibGlua1tyZWw9J2FtcGh0bWwnXVwiKTtcblxuICAgICAgICAgICAgaWYgKGxpbmspIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGluay5ocmVmO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMud2ViQ29udGVudHMhLmV4ZWN1dGVKYXZhU2NyaXB0KEZ1bmN0aW9ucy5mdW5jdGlvblRvU2NyaXB0KGZldGNoQW1wVVJMKSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZXhlY3V0ZUNvbnRlbnRDYXB0dXJlKCkge1xuXG4gICAgICAgIGNvbnN0IGNhcHR1cmVSZXN1bHRcbiAgICAgICAgICAgID0gYXdhaXQgQ29udGVudENhcHR1cmVFeGVjdXRvci5leGVjdXRlKHRoaXMud2ViQ29udGVudHMhLCB0aGlzLmRyaXZlciEuYnJvd3NlclByb2ZpbGUpO1xuXG4gICAgICAgIGlmICh0aGlzLmJyb3dzZXJQcm9maWxlLmRlc3Ryb3kpIHtcbiAgICAgICAgICAgIE9wdGlvbmFsLm9mKHRoaXMuZHJpdmVyKS53aGVuKGRyaXZlciA9PiBkcml2ZXIuZGVzdHJveSgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVzdWx0LnJlc29sdmUoY2FwdHVyZVJlc3VsdCk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiB3ZSBoYXZlIGEgd2ViIHJlcXVlc3QgdG8gbGlzdGVuIHRvLiBFaXRoZXIgdGhlIGZpcnN0IG9uZVxuICAgICAqIG9yIHN1YnNlcXVlbnQgb25lcyBmcm9tIGlmcmFtZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gd2ViUmVxdWVzdFxuICAgICAqL1xuICAgIHB1YmxpYyBvbldlYlJlcXVlc3Qod2ViUmVxdWVzdDogV2ViUmVxdWVzdCkge1xuXG4gICAgICAgIGlmICh0aGlzLmJyb3dzZXJQcm9maWxlLnVzZVJlYWN0b3IpIHtcblxuICAgICAgICAgICAgY29uc3Qgd2ViUmVxdWVzdFJlYWN0b3IgPSBuZXcgV2ViUmVxdWVzdFJlYWN0b3Iod2ViUmVxdWVzdCk7XG4gICAgICAgICAgICB3ZWJSZXF1ZXN0UmVhY3Rvci5zdGFydCgpO1xuXG4gICAgICAgICAgICB0aGlzLndlYlJlcXVlc3RSZWFjdG9ycy5wdXNoKHdlYlJlcXVlc3RSZWFjdG9yKTtcblxuICAgICAgICAgICAgdGhpcy5wZW5kaW5nV2ViUmVxdWVzdHNMaXN0ZW5lci5yZWdpc3Rlcih3ZWJSZXF1ZXN0UmVhY3Rvcik7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyB0cmlnZ2VyKGNhcHR1cmVPcHRzOiBQYXJ0aWFsPENhcHR1cmVPcHRzPiA9IHt9KTogUHJvbWlzZTxDYXB0dXJlUmVzdWx0PiB7XG5cbiAgICAgICAgY29uc3QgYnJvd3NlciA9IEJyb3dzZXJSZWdpc3RyeS5ERUZBVUxUO1xuICAgICAgICBjb25zdCBicm93c2VyUHJvZmlsZSA9IEJyb3dzZXJQcm9maWxlcy50b0Jyb3dzZXJQcm9maWxlKGJyb3dzZXIsICdERUZBVUxUJyk7XG4gICAgICAgIGNvbnN0IGNhcHR1cmUgPSBuZXcgQ2FwdHVyZShicm93c2VyUHJvZmlsZSwgY2FwdHVyZU9wdHMpO1xuICAgICAgICByZXR1cm4gY2FwdHVyZS5zdGFydCgpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FwdHVyZVJlc3VsdENhbGxiYWNrIHtcbiAgICAoY2FwdHVyZVJlc3VsdDogQ2FwdHVyZVJlc3VsdCk6IHZvaWQ7XG59XG4iXX0=