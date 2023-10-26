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
const StandardWebContentsDriver_1 = require("./StandardWebContentsDriver");
const ResourcePaths_1 = require("../../electron/webresource/ResourcePaths");
const Preconditions_1 = require("../../Preconditions");
const BrowserWindows_1 = require("../BrowserWindows");
const electron_1 = require("electron");
const Functions_1 = require("../../util/Functions");
const WebContentsNotifier_1 = require("../../electron/web_contents_notifier/WebContentsNotifier");
const BrowserAppEvent_1 = require("../../apps/browser/BrowserAppEvent");
const BrowserProfiles_1 = require("../BrowserProfiles");
const log = Logger_1.Logger.create();
class AbstractWebviewWebContentsDriver extends StandardWebContentsDriver_1.StandardWebContentsDriver {
    constructor(browserProfile, appPath) {
        super(browserProfile);
        this.appPath = appPath;
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.doInit();
            yield this.doInitWebview();
        });
    }
    waitForWebview() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                this.browserWindow.webContents.once('did-attach-webview', (event, newWebContents) => {
                    resolve(newWebContents);
                });
            });
        });
    }
    progressUpdated(event) {
    }
    doInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.browserWindowOptions = BrowserWindows_1.BrowserWindows.toBrowserWindowOptions(this.browserProfile);
            const hostBrowserWindowOptions = this.computeHostBrowserWindowOptions();
            log.info("Using hostBrowserWindowOptions: ", hostBrowserWindowOptions);
            this.browserWindow = new electron_1.BrowserWindow(hostBrowserWindowOptions);
            this.webContents = this.browserWindow.webContents;
            const hostBrowserView = new HostBrowserView(this, this.browserWindow);
            const guestBrowserView = new GuestBrowserView(this, this.browserWindow);
            this.browserView =
                new DelegatedBrowserView([hostBrowserView, guestBrowserView]);
            WebContentsNotifier_1.WebContentsNotifier.on(this.browserWindow.webContents, BrowserAppEvent_1.BrowserAppEvent.PROVIDE_URL, (event) => {
                const link = event.message;
                log.info("Got link for navigation: " + link);
                this.browserProfile.navigation.navigated.dispatchEvent({ link });
            });
            WebContentsNotifier_1.WebContentsNotifier.on(this.browserWindow.webContents, BrowserAppEvent_1.BrowserAppEvent.TRIGGER_CAPTURE, (event) => {
                log.info("Got content capture click");
                this.browserProfile.navigation.captured.dispatchEvent({});
            });
            WebContentsNotifier_1.WebContentsNotifier.on(this.browserWindow.webContents, BrowserAppEvent_1.BrowserAppEvent.CONFIGURE_WINDOW, (event) => {
                const browser = event.message;
                log.info("Changing browser to: ", browser);
                const navigation = this.browserProfile.navigation;
                this.browserProfile = BrowserProfiles_1.BrowserProfiles.toBrowserProfile(browser, this.browserProfile.profile);
                this.browserProfile =
                    Object.freeze(Object.assign({}, this.browserProfile, { navigation }));
                this.browserWindowOptions = this.computeHostBrowserWindowOptions();
                log.info("Changing browser profile to: ", this.browserProfile);
                this.browserView.configure(this.browserProfile)
                    .catch((err) => log.error("Unable to configure: ", err));
            });
            this.initReactor();
        });
    }
    handleConfigureWindow() {
        return __awaiter(this, void 0, void 0, function* () {
            log.info("Changing browser profile to: ", this.browserProfile);
            yield StandardWebContentsDriver_1.StandardWebContentsDriver.configureWebContents(this.webContents, this.browserProfile);
            yield this.doInitGuestWebviewDimensions();
        });
    }
    doInitWebview() {
        return __awaiter(this, void 0, void 0, function* () {
            const window = Preconditions_1.notNull(this.browserWindow);
            const resourceURL = ResourcePaths_1.ResourcePaths.resourceURLFromRelativeURL(this.appPath);
            window.loadURL(resourceURL);
            this.webContents = yield this.waitForWebview();
            yield this.initWebContents(this.browserWindow, this.webContents, this.browserWindowOptions);
            yield this.doInitGuestWebviewDimensions();
        });
    }
    computeHostBrowserWindowOptions() {
        const browserWindowOptions = BrowserWindows_1.BrowserWindows.toBrowserWindowOptions(this.browserProfile);
        if (this.browserProfile.hosted) {
            browserWindowOptions.width = Preconditions_1.notNull(browserWindowOptions.width) * 1.35;
        }
        browserWindowOptions.height = Math.round(Preconditions_1.notNull(browserWindowOptions.width) * (11 / 8.5));
        browserWindowOptions.minHeight = (browserWindowOptions.height / 2);
        browserWindowOptions.enableLargerThanScreen = false;
        return browserWindowOptions;
    }
    getBrowserWindow() {
        return this.browserWindow;
    }
    doInitGuestWebviewDimensions() {
        return __awaiter(this, void 0, void 0, function* () {
            const window = Preconditions_1.notNull(this.browserWindow);
            function setWebviewDimensions(browserWindowOptions) {
                const querySelector = document.querySelector('webview');
                querySelector.style.height = `${browserWindowOptions.height}px`;
                querySelector.style.width = `${browserWindowOptions.width}px`;
            }
            yield window.webContents.executeJavaScript(Functions_1.Functions.functionToScript(setWebviewDimensions, this.browserWindowOptions));
        });
    }
}
exports.AbstractWebviewWebContentsDriver = AbstractWebviewWebContentsDriver;
class DelegatedBrowserView {
    constructor(delegates) {
        this.delegates = delegates;
    }
    configure(browserProfile) {
        return __awaiter(this, void 0, void 0, function* () {
            for (const delegate of this.delegates) {
                delegate.configure(browserProfile)
                    .catch(err => log.error("Unable to configure for browser profile: ", browserProfile));
            }
        });
    }
}
class HostBrowserView {
    constructor(driver, window) {
        this.driver = driver;
        this.window = window;
    }
    configure(browserProfile) {
        return __awaiter(this, void 0, void 0, function* () {
            this.browserProfile = browserProfile;
            this.browserWindowOptions = BrowserWindows_1.BrowserWindows.toBrowserWindowOptions(this.browserProfile);
            yield this.doInitGuestWebviewDimensions();
            this.changeWindowSize();
        });
    }
    doInitGuestWebviewDimensions() {
        return __awaiter(this, void 0, void 0, function* () {
            const window = Preconditions_1.notNull(this.window);
            function setWebviewDimensions(browserWindowOptions) {
                const querySelector = document.querySelector('webview');
                querySelector.style.height = `${browserWindowOptions.height}px`;
                querySelector.style.width = `${browserWindowOptions.width}px`;
            }
            const script = Functions_1.Functions.functionToScript(setWebviewDimensions, this.browserWindowOptions);
            yield this.window.webContents.executeJavaScript(script);
        });
    }
    changeWindowSize() {
        const width = this.browserWindowOptions.width + 50;
        const height = this.window.getSize()[1];
        this.window.setSize(width, height);
    }
}
class GuestBrowserView {
    constructor(driver, window) {
        this.nrConfigured = 0;
        this.driver = driver;
        this.window = window;
        this.waitForWebContents()
            .then((webContents) => {
            this.webContents = webContents;
        })
            .catch(err => log.error("Unable to get guest webview: ", err));
    }
    configure(browserProfile) {
        return __awaiter(this, void 0, void 0, function* () {
            this.browserProfile = browserProfile;
            this.browserWindowOptions = BrowserWindows_1.BrowserWindows.toBrowserWindowOptions(this.browserProfile);
            yield StandardWebContentsDriver_1.StandardWebContentsDriver.configureWebContents(this.webContents, browserProfile);
            if (this.nrConfigured > 0) {
                log.info("Reloading page after configure");
                this.webContents.reload();
            }
            ++this.nrConfigured;
        });
    }
    waitForWebContents() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                this.window.webContents.once('did-attach-webview', (event, newWebContents) => {
                    resolve(newWebContents);
                });
            });
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3RXZWJ2aWV3V2ViQ29udGVudHNEcml2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBYnN0cmFjdFdlYnZpZXdXZWJDb250ZW50c0RyaXZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsZ0RBQTJDO0FBQzNDLDJFQUFzRTtBQUN0RSw0RUFBdUU7QUFDdkUsdURBQTRDO0FBQzVDLHNEQUFpRDtBQUNqRCx1Q0FBdUM7QUFDdkMsb0RBQStDO0FBRy9DLGtHQUE2RjtBQUU3Rix3RUFBbUU7QUFHbkUsd0RBQW1EO0FBR25ELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQU01QixNQUFzQixnQ0FBaUMsU0FBUSxxREFBeUI7SUFRcEYsWUFBc0IsY0FBOEIsRUFBRSxPQUFlO1FBQ2pFLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUMzQixDQUFDO0lBRVksSUFBSTs7WUFFYixNQUFNLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUlwQixNQUFNLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUUvQixDQUFDO0tBQUE7SUFFZSxjQUFjOztZQUUxQixPQUFPLElBQUksT0FBTyxDQUFjLE9BQU8sQ0FBQyxFQUFFO2dCQUN0QyxJQUFJLENBQUMsYUFBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxLQUFLLEVBQUUsY0FBMkIsRUFBRSxFQUFFO29CQUM5RixPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQzVCLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7UUFFUCxDQUFDO0tBQUE7SUFHTSxlQUFlLENBQUMsS0FBOEI7SUFFckQsQ0FBQztJQU9lLE1BQU07O1lBRWxCLElBQUksQ0FBQyxvQkFBb0IsR0FBRywrQkFBYyxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FB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Q0FBQyxNQUFNLEVBQUUsQ0FBQzthQUM5QjtZQUVELEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN4QixDQUFDO0tBQUE7SUFFYSxrQkFBa0I7O1lBRTVCLE9BQU8sSUFBSSxPQUFPLENBQWMsT0FBTyxDQUFDLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLEtBQUssRUFBRSxjQUEyQixFQUFFLEVBQUU7b0JBQ3ZGLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDNUIsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztRQUVQLENBQUM7S0FBQTtDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uLy4uL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtTdGFuZGFyZFdlYkNvbnRlbnRzRHJpdmVyfSBmcm9tICcuL1N0YW5kYXJkV2ViQ29udGVudHNEcml2ZXInO1xuaW1wb3J0IHtSZXNvdXJjZVBhdGhzfSBmcm9tICcuLi8uLi9lbGVjdHJvbi93ZWJyZXNvdXJjZS9SZXNvdXJjZVBhdGhzJztcbmltcG9ydCB7bm90TnVsbH0gZnJvbSAnLi4vLi4vUHJlY29uZGl0aW9ucyc7XG5pbXBvcnQge0Jyb3dzZXJXaW5kb3dzfSBmcm9tICcuLi9Ccm93c2VyV2luZG93cyc7XG5pbXBvcnQge0Jyb3dzZXJXaW5kb3d9IGZyb20gXCJlbGVjdHJvblwiO1xuaW1wb3J0IHtGdW5jdGlvbnN9IGZyb20gJy4uLy4uL3V0aWwvRnVuY3Rpb25zJztcbmltcG9ydCB7UGVuZGluZ1dlYlJlcXVlc3RzRXZlbnR9IGZyb20gJy4uLy4uL3dlYnJlcXVlc3RzL1BlbmRpbmdXZWJSZXF1ZXN0c0xpc3RlbmVyJztcbmltcG9ydCB7QnJvd3NlclByb2ZpbGV9IGZyb20gJy4uL0Jyb3dzZXJQcm9maWxlJztcbmltcG9ydCB7V2ViQ29udGVudHNOb3RpZmllcn0gZnJvbSAnLi4vLi4vZWxlY3Ryb24vd2ViX2NvbnRlbnRzX25vdGlmaWVyL1dlYkNvbnRlbnRzTm90aWZpZXInO1xuaW1wb3J0IHtNYWluSVBDRXZlbnR9IGZyb20gJy4uLy4uL2VsZWN0cm9uL2ZyYW1ld29yay9JUENNYWluUHJvbWlzZXMnO1xuaW1wb3J0IHtCcm93c2VyQXBwRXZlbnR9IGZyb20gJy4uLy4uL2FwcHMvYnJvd3Nlci9Ccm93c2VyQXBwRXZlbnQnO1xuaW1wb3J0IHtCcm93c2VyfSBmcm9tICcuLi9Ccm93c2VyJztcbmltcG9ydCBXZWJDb250ZW50cyA9IEVsZWN0cm9uLldlYkNvbnRlbnRzO1xuaW1wb3J0IHtCcm93c2VyUHJvZmlsZXN9IGZyb20gJy4uL0Jyb3dzZXJQcm9maWxlcyc7XG5pbXBvcnQge1Byb21pc2VzfSBmcm9tICcuLi8uLi91dGlsL1Byb21pc2VzJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG4vKipcbiAqIEEgZHJpdmVyIHdoaWNoIGNyZWF0ZXMgYW4gYXBwIHRoYXQgdXNlcyBhIDx3ZWJ2aWV3PiBob3N0IGNvbnRyb2wgZm9yIG91clxuICogY29udGVudC5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0V2Vidmlld1dlYkNvbnRlbnRzRHJpdmVyIGV4dGVuZHMgU3RhbmRhcmRXZWJDb250ZW50c0RyaXZlciB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGFwcFBhdGg6IHN0cmluZztcblxuICAgIHByaXZhdGUgYnJvd3NlcldpbmRvd09wdGlvbnM/OiBFbGVjdHJvbi5Ccm93c2VyV2luZG93Q29uc3RydWN0b3JPcHRpb25zO1xuXG4gICAgcHJpdmF0ZSBicm93c2VyVmlldz86IEJyb3dzZXJWaWV3O1xuXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKGJyb3dzZXJQcm9maWxlOiBCcm93c2VyUHJvZmlsZSwgYXBwUGF0aDogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKGJyb3dzZXJQcm9maWxlKTtcbiAgICAgICAgdGhpcy5hcHBQYXRoID0gYXBwUGF0aDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgaW5pdCgpIHtcblxuICAgICAgICBhd2FpdCB0aGlzLmRvSW5pdCgpO1xuXG4gICAgICAgIC8vIFRPRE86IHRoaXMgbWlnaHQgYWN0dWFsbHkgTk9UIGJlIG5lZWRlZCBub3cgb3Igd2UgY291bGQgcmVmYWN0b3JcbiAgICAgICAgLy8gdGhpcyB0byBsb2FkIGFzIHBhcnQgb2YgdGhlIEd1ZXN0QnJvd3NlclZpZXcgc2V0dXAuLlxuICAgICAgICBhd2FpdCB0aGlzLmRvSW5pdFdlYnZpZXcoKTtcblxuICAgIH1cblxuICAgIHByb3RlY3RlZCBhc3luYyB3YWl0Rm9yV2VidmlldygpOiBQcm9taXNlPFdlYkNvbnRlbnRzPiB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFdlYkNvbnRlbnRzPihyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIHRoaXMuYnJvd3NlcldpbmRvdyEud2ViQ29udGVudHMub25jZSgnZGlkLWF0dGFjaC13ZWJ2aWV3JywgKGV2ZW50LCBuZXdXZWJDb250ZW50czogV2ViQ29udGVudHMpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKG5ld1dlYkNvbnRlbnRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuXG4gICAgcHVibGljIHByb2dyZXNzVXBkYXRlZChldmVudDogUGVuZGluZ1dlYlJlcXVlc3RzRXZlbnQpOiB2b2lkIHtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGRvSW5pdCBtZXRob2QgZm9yIGNyZWF0aW5nIHRoZSB3aW5kb3cgd2hpY2ggZGlmZmVycyBmcm9tIHRoZVxuICAgICAqIFN0YW5kYXJkV2ViQ29udGVudHNEcml2ZXIgaW4gdGhhdCB3ZSBoYXZlIHRvIGhhdmUgdGhlIHBhcmVudCB3aW5kb3dcbiAgICAgKiBhIHJlYXNvbmFibHkgYnJvd3NlciBoZWlnaHQgYW5kIHRoZSB3ZWJ2aWV3IGNvbnRlbnQgdGhlIEFDVFVBTCBoZWlnaHQuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFzeW5jIGRvSW5pdCgpIHtcblxuICAgICAgICB0aGlzLmJyb3dzZXJXaW5kb3dPcHRpb25zID0gQnJvd3NlcldpbmRvd3MudG9Ccm93c2VyV2luZG93T3B0aW9ucyh0aGlzLmJyb3dzZXJQcm9maWxlKTtcblxuICAgICAgICBjb25zdCBob3N0QnJvd3NlcldpbmRvd09wdGlvbnMgPSB0aGlzLmNvbXB1dGVIb3N0QnJvd3NlcldpbmRvd09wdGlvbnMoKTtcblxuICAgICAgICBsb2cuaW5mbyhcIlVzaW5nIGhvc3RCcm93c2VyV2luZG93T3B0aW9uczogXCIsIGhvc3RCcm93c2VyV2luZG93T3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5icm93c2VyV2luZG93ID0gbmV3IEJyb3dzZXJXaW5kb3coaG9zdEJyb3dzZXJXaW5kb3dPcHRpb25zKTtcbiAgICAgICAgdGhpcy53ZWJDb250ZW50cyA9IHRoaXMuYnJvd3NlcldpbmRvdy53ZWJDb250ZW50cztcblxuICAgICAgICBjb25zdCBob3N0QnJvd3NlclZpZXcgPSBuZXcgSG9zdEJyb3dzZXJWaWV3KHRoaXMsIHRoaXMuYnJvd3NlcldpbmRvdyk7XG4gICAgICAgIGNvbnN0IGd1ZXN0QnJvd3NlclZpZXcgPSBuZXcgR3Vlc3RCcm93c2VyVmlldyh0aGlzLCB0aGlzLmJyb3dzZXJXaW5kb3cpO1xuXG4gICAgICAgIHRoaXMuYnJvd3NlclZpZXcgPVxuICAgICAgICAgICAgbmV3IERlbGVnYXRlZEJyb3dzZXJWaWV3KFtob3N0QnJvd3NlclZpZXcsIGd1ZXN0QnJvd3NlclZpZXddKTtcblxuICAgICAgICBXZWJDb250ZW50c05vdGlmaWVyLm9uKHRoaXMuYnJvd3NlcldpbmRvdy53ZWJDb250ZW50cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCcm93c2VyQXBwRXZlbnQuUFJPVklERV9VUkwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGV2ZW50OiBNYWluSVBDRXZlbnQ8c3RyaW5nPikgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBsaW5rID0gZXZlbnQubWVzc2FnZTtcblxuICAgICAgICAgICAgbG9nLmluZm8oXCJHb3QgbGluayBmb3IgbmF2aWdhdGlvbjogXCIgKyBsaW5rKTtcbiAgICAgICAgICAgIHRoaXMuYnJvd3NlclByb2ZpbGUubmF2aWdhdGlvbi5uYXZpZ2F0ZWQuZGlzcGF0Y2hFdmVudCh7bGlua30pO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIFdlYkNvbnRlbnRzTm90aWZpZXIub24odGhpcy5icm93c2VyV2luZG93LndlYkNvbnRlbnRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJyb3dzZXJBcHBFdmVudC5UUklHR0VSX0NBUFRVUkUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGV2ZW50OiBNYWluSVBDRXZlbnQ8dm9pZD4pID0+IHtcblxuICAgICAgICAgICBsb2cuaW5mbyhcIkdvdCBjb250ZW50IGNhcHR1cmUgY2xpY2tcIik7XG4gICAgICAgICAgIHRoaXMuYnJvd3NlclByb2ZpbGUubmF2aWdhdGlvbi5jYXB0dXJlZC5kaXNwYXRjaEV2ZW50KHt9KTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBXZWJDb250ZW50c05vdGlmaWVyLm9uKHRoaXMuYnJvd3NlcldpbmRvdy53ZWJDb250ZW50cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCcm93c2VyQXBwRXZlbnQuQ09ORklHVVJFX1dJTkRPVyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXZlbnQ6IE1haW5JUENFdmVudDxCcm93c2VyPikgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBicm93c2VyID0gZXZlbnQubWVzc2FnZTtcblxuICAgICAgICAgICAgbG9nLmluZm8oXCJDaGFuZ2luZyBicm93c2VyIHRvOiBcIiwgYnJvd3Nlcik7XG5cbiAgICAgICAgICAgIGNvbnN0IG5hdmlnYXRpb24gPSB0aGlzLmJyb3dzZXJQcm9maWxlLm5hdmlnYXRpb247XG4gICAgICAgICAgICB0aGlzLmJyb3dzZXJQcm9maWxlID0gQnJvd3NlclByb2ZpbGVzLnRvQnJvd3NlclByb2ZpbGUoYnJvd3NlciwgdGhpcy5icm93c2VyUHJvZmlsZS5wcm9maWxlKTtcbiAgICAgICAgICAgIC8vIG5lZWQgdG8gcHJlc2VydmUgdGhlIG5hdmlnYXRpb24gb2JqZWN0IHNvIHRoYXQgbm90aWZpY2F0aW9uc1xuICAgICAgICAgICAgLy8gd29yayBwcm9wZXJseS5cbiAgICAgICAgICAgIHRoaXMuYnJvd3NlclByb2ZpbGUgPVxuICAgICAgICAgICAgICAgIE9iamVjdC5mcmVlemUoXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHRoaXMuYnJvd3NlclByb2ZpbGUsIHtuYXZpZ2F0aW9ufSkpO1xuXG4gICAgICAgICAgICB0aGlzLmJyb3dzZXJXaW5kb3dPcHRpb25zID0gdGhpcy5jb21wdXRlSG9zdEJyb3dzZXJXaW5kb3dPcHRpb25zKCk7XG5cbiAgICAgICAgICAgIGxvZy5pbmZvKFwiQ2hhbmdpbmcgYnJvd3NlciBwcm9maWxlIHRvOiBcIiwgdGhpcy5icm93c2VyUHJvZmlsZSk7XG5cbiAgICAgICAgICAgIHRoaXMuYnJvd3NlclZpZXchLmNvbmZpZ3VyZSh0aGlzLmJyb3dzZXJQcm9maWxlKVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4gbG9nLmVycm9yKFwiVW5hYmxlIHRvIGNvbmZpZ3VyZTogXCIsIGVycikpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaW5pdFJlYWN0b3IoKTtcblxuICAgIH1cblxuICAgIHByb3RlY3RlZCBhc3luYyBoYW5kbGVDb25maWd1cmVXaW5kb3coKSB7XG5cbiAgICAgICAgbG9nLmluZm8oXCJDaGFuZ2luZyBicm93c2VyIHByb2ZpbGUgdG86IFwiLCB0aGlzLmJyb3dzZXJQcm9maWxlKTtcblxuICAgICAgICBhd2FpdCBTdGFuZGFyZFdlYkNvbnRlbnRzRHJpdmVyLmNvbmZpZ3VyZVdlYkNvbnRlbnRzKHRoaXMud2ViQ29udGVudHMhLCB0aGlzLmJyb3dzZXJQcm9maWxlKTtcbiAgICAgICAgYXdhaXQgdGhpcy5kb0luaXRHdWVzdFdlYnZpZXdEaW1lbnNpb25zKCk7XG5cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYXN5bmMgZG9Jbml0V2VidmlldygpIHtcblxuICAgICAgICBjb25zdCB3aW5kb3cgPSBub3ROdWxsKHRoaXMuYnJvd3NlcldpbmRvdyk7XG5cbiAgICAgICAgLy8gb2suLi4gbm93IHRoZSBwYWdlIGlzbid0IHNldHVwIHByb3Blcmx5IGFuZCB3ZSBuZWVkIHRvIGxvYWQgdGhlIGFwcFxuICAgICAgICAvLyBhbmQgdGhlbiBhZGp1c3QgdGhlIHdlYnZpZXcgcHJvcGVybHkuXG5cbiAgICAgICAgY29uc3QgcmVzb3VyY2VVUkwgPSBSZXNvdXJjZVBhdGhzLnJlc291cmNlVVJMRnJvbVJlbGF0aXZlVVJMKHRoaXMuYXBwUGF0aCk7XG5cbiAgICAgICAgd2luZG93LmxvYWRVUkwocmVzb3VyY2VVUkwpO1xuXG4gICAgICAgIC8vIFRISVMgaXMgb3VyIGd1ZXN0IHdlYnZpZXcgdGhhdCB3ZSBzaG91bGQgYmUgdXNpbmcuXG4gICAgICAgIHRoaXMud2ViQ29udGVudHMgPSBhd2FpdCB0aGlzLndhaXRGb3JXZWJ2aWV3KCk7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5pbml0V2ViQ29udGVudHModGhpcy5icm93c2VyV2luZG93ISwgdGhpcy53ZWJDb250ZW50cywgdGhpcy5icm93c2VyV2luZG93T3B0aW9ucyEpO1xuXG4gICAgICAgIC8vIGF3YWl0IHRoaXMuY29uZmlndXJlV2ViQ29udGVudHModGhpcy53ZWJDb250ZW50cyk7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5kb0luaXRHdWVzdFdlYnZpZXdEaW1lbnNpb25zKCk7XG5cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY29tcHV0ZUhvc3RCcm93c2VyV2luZG93T3B0aW9ucygpIHtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIGJyb3dzZXIgd2luZG93LlxuICAgICAgICBjb25zdCBicm93c2VyV2luZG93T3B0aW9ucyA9IEJyb3dzZXJXaW5kb3dzLnRvQnJvd3NlcldpbmRvd09wdGlvbnModGhpcy5icm93c2VyUHJvZmlsZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuYnJvd3NlclByb2ZpbGUuaG9zdGVkKSB7XG4gICAgICAgICAgICAvLyBpbmNyZWFzZSBvdXIgaG9zdGVkIGJyb3dzZXIgc2xpZ2h0bHlcbiAgICAgICAgICAgIGJyb3dzZXJXaW5kb3dPcHRpb25zLndpZHRoID0gbm90TnVsbChicm93c2VyV2luZG93T3B0aW9ucy53aWR0aCkgKiAxLjM1O1xuICAgICAgICB9XG5cbiAgICAgICAgYnJvd3NlcldpbmRvd09wdGlvbnMuaGVpZ2h0ID0gTWF0aC5yb3VuZChub3ROdWxsKGJyb3dzZXJXaW5kb3dPcHRpb25zLndpZHRoKSAqICgxMSAvIDguNSkpO1xuICAgICAgICBicm93c2VyV2luZG93T3B0aW9ucy5taW5IZWlnaHQgPSAoYnJvd3NlcldpbmRvd09wdGlvbnMuaGVpZ2h0IC8gMik7XG5cbiAgICAgICAgLy8gVE9ETzogbWFrZSB0aGlzIHBhcnQgb2YgdGhlIHByb2ZpbGUuXG4gICAgICAgIGJyb3dzZXJXaW5kb3dPcHRpb25zLmVuYWJsZUxhcmdlclRoYW5TY3JlZW4gPSBmYWxzZTtcbiAgICAgICAgLy8gYnJvd3NlcldpbmRvd09wdGlvbnMud2ViUHJlZmVyZW5jZXMhLnpvb21GYWN0b3IgPSAxLjBcblxuICAgICAgICByZXR1cm4gYnJvd3NlcldpbmRvd09wdGlvbnM7XG5cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0QnJvd3NlcldpbmRvdygpOiBCcm93c2VyV2luZG93IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnJvd3NlcldpbmRvdztcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGRvSW5pdEd1ZXN0V2Vidmlld0RpbWVuc2lvbnMoKSB7XG5cbiAgICAgICAgY29uc3Qgd2luZG93ID0gbm90TnVsbCh0aGlzLmJyb3dzZXJXaW5kb3cpO1xuXG4gICAgICAgIC8vIEBFbGVjdHJvblJlbmRlcmVyQ29udGV4dFxuICAgICAgICAvLyBub2luc3BlY3Rpb24gVHNMaW50OiBuby1zaGFkb3dlZC12YXJpYWJsZVxuICAgICAgICBmdW5jdGlvbiBzZXRXZWJ2aWV3RGltZW5zaW9ucyhicm93c2VyV2luZG93T3B0aW9uczogRWxlY3Ryb24uQnJvd3NlcldpbmRvd0NvbnN0cnVjdG9yT3B0aW9ucykge1xuXG4gICAgICAgICAgICBjb25zdCBxdWVyeVNlbGVjdG9yID0gPEhUTUxFbGVtZW50PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd3ZWJ2aWV3JykhO1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImJyb3dzZXJXaW5kb3dPcHRpb25zOiBcIiwgYnJvd3NlcldpbmRvd09wdGlvbnMpO1xuXG4gICAgICAgICAgICBxdWVyeVNlbGVjdG9yLnN0eWxlLmhlaWdodCA9IGAke2Jyb3dzZXJXaW5kb3dPcHRpb25zLmhlaWdodH1weGA7XG4gICAgICAgICAgICBxdWVyeVNlbGVjdG9yLnN0eWxlLndpZHRoID0gYCR7YnJvd3NlcldpbmRvd09wdGlvbnMud2lkdGh9cHhgO1xuXG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCB3aW5kb3cud2ViQ29udGVudHMuZXhlY3V0ZUphdmFTY3JpcHQoRnVuY3Rpb25zLmZ1bmN0aW9uVG9TY3JpcHQoc2V0V2Vidmlld0RpbWVuc2lvbnMsIHRoaXMuYnJvd3NlcldpbmRvd09wdGlvbnMpKTtcblxuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgQnJvd3NlclZpZXcge1xuICAgIGNvbmZpZ3VyZShicm93c2VyUHJvZmlsZTogQnJvd3NlclByb2ZpbGUpOiBQcm9taXNlPHZvaWQ+O1xufVxuXG5jbGFzcyBEZWxlZ2F0ZWRCcm93c2VyVmlldyBpbXBsZW1lbnRzIEJyb3dzZXJWaWV3IHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGVsZWdhdGVzOiBCcm93c2VyVmlld1tdO1xuXG4gICAgY29uc3RydWN0b3IoZGVsZWdhdGVzOiBCcm93c2VyVmlld1tdKSB7XG4gICAgICAgIHRoaXMuZGVsZWdhdGVzID0gZGVsZWdhdGVzO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjb25maWd1cmUoYnJvd3NlclByb2ZpbGU6IEJyb3dzZXJQcm9maWxlKTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICAgICAgZm9yIChjb25zdCBkZWxlZ2F0ZSBvZiB0aGlzLmRlbGVnYXRlcykge1xuXG4gICAgICAgICAgICBkZWxlZ2F0ZS5jb25maWd1cmUoYnJvd3NlclByb2ZpbGUpXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJVbmFibGUgdG8gY29uZmlndXJlIGZvciBicm93c2VyIHByb2ZpbGU6IFwiLCBicm93c2VyUHJvZmlsZSkpO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG5jbGFzcyBIb3N0QnJvd3NlclZpZXcgaW1wbGVtZW50cyBCcm93c2VyVmlldyB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGRyaXZlcjogQWJzdHJhY3RXZWJ2aWV3V2ViQ29udGVudHNEcml2ZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSB3aW5kb3c6IEJyb3dzZXJXaW5kb3c7XG5cbiAgICBwcml2YXRlIGJyb3dzZXJQcm9maWxlPzogQnJvd3NlclByb2ZpbGU7XG4gICAgcHJpdmF0ZSBicm93c2VyV2luZG93T3B0aW9ucz86IEVsZWN0cm9uLkJyb3dzZXJXaW5kb3dDb25zdHJ1Y3Rvck9wdGlvbnM7XG5cbiAgICBjb25zdHJ1Y3Rvcihkcml2ZXI6IEFic3RyYWN0V2Vidmlld1dlYkNvbnRlbnRzRHJpdmVyLFxuICAgICAgICAgICAgICAgIHdpbmRvdzogRWxlY3Ryb24uQnJvd3NlcldpbmRvdykge1xuICAgICAgICB0aGlzLmRyaXZlciA9IGRyaXZlcjtcbiAgICAgICAgdGhpcy53aW5kb3cgPSB3aW5kb3c7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY29uZmlndXJlKGJyb3dzZXJQcm9maWxlOiBCcm93c2VyUHJvZmlsZSkge1xuXG4gICAgICAgIHRoaXMuYnJvd3NlclByb2ZpbGUgPSBicm93c2VyUHJvZmlsZTtcbiAgICAgICAgdGhpcy5icm93c2VyV2luZG93T3B0aW9ucyA9IEJyb3dzZXJXaW5kb3dzLnRvQnJvd3NlcldpbmRvd09wdGlvbnModGhpcy5icm93c2VyUHJvZmlsZSEpO1xuXG4gICAgICAgIGF3YWl0IHRoaXMuZG9Jbml0R3Vlc3RXZWJ2aWV3RGltZW5zaW9ucygpO1xuICAgICAgICB0aGlzLmNoYW5nZVdpbmRvd1NpemUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGNvbmZpZ3VyZXMgdGhlIDx3ZWJ2aWV3PiBlbGVtZW50IHdpZHRoIGFuZCBoZWlnaHQgcHJvcGVybHkuXG4gICAgICovXG4gICAgcHJpdmF0ZSBhc3luYyBkb0luaXRHdWVzdFdlYnZpZXdEaW1lbnNpb25zKCkge1xuXG4gICAgICAgIGNvbnN0IHdpbmRvdyA9IG5vdE51bGwodGhpcy53aW5kb3cpO1xuXG4gICAgICAgIC8vIGNoYW5nZSB0aGUgc2l6ZSBvZiB0aGUgPHdlYnZpZXc+IGVsZW1lbnRcblxuICAgICAgICAvLyBARWxlY3Ryb25SZW5kZXJlckNvbnRleHRcbiAgICAgICAgLy8gbm9pbnNwZWN0aW9uIFRzTGludDogbm8tc2hhZG93ZWQtdmFyaWFibGVcbiAgICAgICAgZnVuY3Rpb24gc2V0V2Vidmlld0RpbWVuc2lvbnMoYnJvd3NlcldpbmRvd09wdGlvbnM6IEVsZWN0cm9uLkJyb3dzZXJXaW5kb3dDb25zdHJ1Y3Rvck9wdGlvbnMpIHtcblxuICAgICAgICAgICAgY29uc3QgcXVlcnlTZWxlY3RvciA9IDxIVE1MRWxlbWVudD4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignd2VidmlldycpITtcblxuICAgICAgICAgICAgcXVlcnlTZWxlY3Rvci5zdHlsZS5oZWlnaHQgPSBgJHticm93c2VyV2luZG93T3B0aW9ucy5oZWlnaHR9cHhgO1xuICAgICAgICAgICAgcXVlcnlTZWxlY3Rvci5zdHlsZS53aWR0aCA9IGAke2Jyb3dzZXJXaW5kb3dPcHRpb25zLndpZHRofXB4YDtcblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gRnVuY3Rpb25zLmZ1bmN0aW9uVG9TY3JpcHQoc2V0V2Vidmlld0RpbWVuc2lvbnMsIHRoaXMuYnJvd3NlcldpbmRvd09wdGlvbnMpO1xuXG4gICAgICAgIGF3YWl0IHRoaXMud2luZG93LndlYkNvbnRlbnRzLmV4ZWN1dGVKYXZhU2NyaXB0KHNjcmlwdCk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGNoYW5nZVdpbmRvd1NpemUoKSB7XG5cbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLmJyb3dzZXJXaW5kb3dPcHRpb25zIS53aWR0aCEgKyA1MDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy53aW5kb3cuZ2V0U2l6ZSgpWzFdO1xuXG4gICAgICAgIHRoaXMud2luZG93LnNldFNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgfVxuXG5cbn1cblxuY2xhc3MgR3Vlc3RCcm93c2VyVmlldyBpbXBsZW1lbnRzIEJyb3dzZXJWaWV3IHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgZHJpdmVyOiBBYnN0cmFjdFdlYnZpZXdXZWJDb250ZW50c0RyaXZlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHdpbmRvdzogQnJvd3NlcldpbmRvdztcblxuICAgIHByaXZhdGUgYnJvd3NlclByb2ZpbGU/OiBCcm93c2VyUHJvZmlsZTtcbiAgICBwcml2YXRlIGJyb3dzZXJXaW5kb3dPcHRpb25zPzogRWxlY3Ryb24uQnJvd3NlcldpbmRvd0NvbnN0cnVjdG9yT3B0aW9ucztcblxuICAgIHByaXZhdGUgd2ViQ29udGVudHM/OiBXZWJDb250ZW50cztcblxuICAgIC8vIHRoZSBudWltYmVyIG9mIHRpbWVzIHRoaXMgcGFnZSBoYXMgYmVlbiBjb25maWd1cmVkLlxuICAgIHByaXZhdGUgbnJDb25maWd1cmVkID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKGRyaXZlcjogQWJzdHJhY3RXZWJ2aWV3V2ViQ29udGVudHNEcml2ZXIsXG4gICAgICAgICAgICAgICAgd2luZG93OiBFbGVjdHJvbi5Ccm93c2VyV2luZG93KSB7XG5cbiAgICAgICAgdGhpcy5kcml2ZXIgPSBkcml2ZXI7XG4gICAgICAgIHRoaXMud2luZG93ID0gd2luZG93O1xuXG4gICAgICAgIHRoaXMud2FpdEZvcldlYkNvbnRlbnRzKClcbiAgICAgICAgICAgIC50aGVuKCh3ZWJDb250ZW50cykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMud2ViQ29udGVudHMgPSB3ZWJDb250ZW50cztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihcIlVuYWJsZSB0byBnZXQgZ3Vlc3Qgd2VidmlldzogXCIsIGVycikpO1xuXG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY29uZmlndXJlKGJyb3dzZXJQcm9maWxlOiBCcm93c2VyUHJvZmlsZSkge1xuXG4gICAgICAgIHRoaXMuYnJvd3NlclByb2ZpbGUgPSBicm93c2VyUHJvZmlsZTtcbiAgICAgICAgdGhpcy5icm93c2VyV2luZG93T3B0aW9ucyA9IEJyb3dzZXJXaW5kb3dzLnRvQnJvd3NlcldpbmRvd09wdGlvbnModGhpcy5icm93c2VyUHJvZmlsZSEpO1xuXG4gICAgICAgIC8vIHRoaXMgY29uZmlndXJlcyB0aGUgZ3Vlc3Qgd2ViIGNvbnRlbnRzIHdoaWNoIGxvYWRzIHRoZSB3ZWJzaXRlIHdlJ3JlXG4gICAgICAgIC8vIGNhcHR1cmluZyBhbmQgdGVsbHMgaXQgYWJvdXQgYnJvd3NlciBlbXVsYXRpb24sIHdpZHRoLCBldGMuXG4gICAgICAgIGF3YWl0IFN0YW5kYXJkV2ViQ29udGVudHNEcml2ZXIuY29uZmlndXJlV2ViQ29udGVudHModGhpcy53ZWJDb250ZW50cyEsIGJyb3dzZXJQcm9maWxlKTtcblxuICAgICAgICBpZiAodGhpcy5uckNvbmZpZ3VyZWQgPiAwKSB7XG4gICAgICAgICAgICBsb2cuaW5mbyhcIlJlbG9hZGluZyBwYWdlIGFmdGVyIGNvbmZpZ3VyZVwiKTtcbiAgICAgICAgICAgIHRoaXMud2ViQ29udGVudHMhLnJlbG9hZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgKyt0aGlzLm5yQ29uZmlndXJlZDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHdhaXRGb3JXZWJDb250ZW50cygpIHtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8V2ViQ29udGVudHM+KHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgdGhpcy53aW5kb3chLndlYkNvbnRlbnRzLm9uY2UoJ2RpZC1hdHRhY2gtd2VidmlldycsIChldmVudCwgbmV3V2ViQ29udGVudHM6IFdlYkNvbnRlbnRzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShuZXdXZWJDb250ZW50cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbn1cbiJdfQ==