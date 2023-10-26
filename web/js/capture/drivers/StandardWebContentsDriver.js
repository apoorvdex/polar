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
const electron_1 = require("electron");
const BrowserWindows_1 = require("../BrowserWindows");
const Logger_1 = require("../../logger/Logger");
const Optional_1 = require("../../util/ts/Optional");
const ContentCaptureFunctions_1 = require("../renderer/ContentCaptureFunctions");
const Functions_1 = require("../../util/Functions");
const Reactor_1 = require("../../reactor/Reactor");
const WebContentsPromises_1 = require("../../electron/framework/WebContentsPromises");
const AppLauncher_1 = require("../../apps/main/AppLauncher");
const PDFDownloadHandlers_1 = require("../PDFDownloadHandlers");
const log = Logger_1.Logger.create();
class StandardWebContentsDriver {
    constructor(browserProfile) {
        this.reactor = new Reactor_1.Reactor();
        this.browserProfile = browserProfile;
    }
    init(webContents) {
        return __awaiter(this, void 0, void 0, function* () {
            const browserWindowOptions = this.computeBrowserWindowOptions();
            yield this.doInit(browserWindowOptions);
        });
    }
    getWebContents() {
        return __awaiter(this, void 0, void 0, function* () {
            return Optional_1.Optional.of(this.webContents).get();
        });
    }
    destroy() {
        return __awaiter(this, void 0, void 0, function* () {
            log.info("Destroying window...");
            Optional_1.Optional.of(this.browserWindow)
                .map(browserWindow => {
                if (!browserWindow.isDestroyed()) {
                    browserWindow.close();
                }
            });
            log.info("Destroying window...done");
        });
    }
    loadURL(url, waitForFinishLoad = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const opts = {
                extraHeaders: `pragma: no-cache\nreferer: ${url}\n`,
                userAgent: this.browserProfile.userAgent
            };
            const result = WebContentsPromises_1.WebContentsPromises.once(this.webContents).didFinishLoad();
            this.webContents.loadURL(url, opts);
            if (waitForFinishLoad) {
                return result;
            }
            else {
                return Promise.resolve();
            }
        });
    }
    progressUpdated(event) {
    }
    addEventListener(eventName, eventListener) {
        this.reactor.addEventListener(eventName, eventListener);
    }
    computeBrowserWindowOptions() {
        return BrowserWindows_1.BrowserWindows.toBrowserWindowOptions(this.browserProfile);
    }
    doInit(browserWindowOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            log.info("Using browserWindowOptions: ", browserWindowOptions);
            const window = new electron_1.BrowserWindow(browserWindowOptions);
            yield this.initWebContents(window, window.webContents, browserWindowOptions);
            this.initReactor();
        });
    }
    initWebContents(browserWindow, webContents, browserWindowOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            this.browserWindow = browserWindow;
            this.webContents = webContents;
            yield this.initWebContentsEvents(webContents);
            if (!browserWindowOptions.show) {
                yield BrowserWindows_1.BrowserWindows.onceReadyToShow(browserWindow);
            }
            yield StandardWebContentsDriver.configureWebContents(webContents, this.browserProfile);
        });
    }
    initWebContentsEvents(webContents) {
        return __awaiter(this, void 0, void 0, function* () {
            const onDownloadedHandler = () => {
                this.destroy()
                    .catch(err => log.error(err));
            };
            const onDownloadHandler = () => {
                let rootWebContents = webContents;
                while (rootWebContents.hostWebContents) {
                    rootWebContents = rootWebContents.hostWebContents;
                }
                const browserWindowID = rootWebContents.id;
                log.info("Getting BrowserWindow from ID: " + browserWindowID);
                const browserWindow = electron_1.BrowserWindow.fromId(browserWindowID);
                if (browserWindow) {
                    browserWindow.close();
                }
                else {
                    log.warn("No browser window to clsoe");
                }
                AppLauncher_1.AppLauncher.launchRepositoryApp()
                    .catch(err => log.error(err));
            };
            PDFDownloadHandlers_1.PDFDownloadHandlers.create(webContents, () => onDownloadedHandler(), () => onDownloadHandler());
            webContents.on('dom-ready', (e) => {
                log.info("dom-ready: ", e);
                StandardWebContentsDriver.configureWebContents(webContents, this.browserProfile)
                    .catch((err) => log.error("Could not configure web contents: ", err));
            });
            webContents.on('will-navigate', (e, url) => {
            });
            webContents.on('did-fail-load', (event, errorCode, errorDescription, validateURL, isMainFrame) => {
                log.info("did-fail-load: ", { event, errorCode, errorDescription, validateURL, isMainFrame }, event);
            });
        });
    }
    static configureWebContents(webContents, browserProfile) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = webContents.getURL();
            log.info("Configuring webContents with URL: " + url);
            log.info("Muting audio...");
            webContents.setAudioMuted(!browserProfile.webaudio);
            let deviceEmulation = browserProfile.deviceEmulation;
            deviceEmulation = Object.assign({}, deviceEmulation);
            log.info("Emulating device...");
            webContents.enableDeviceEmulation(deviceEmulation);
            webContents.setUserAgent(browserProfile.userAgent);
            const windowDimensions = {
                width: deviceEmulation.screenSize.width,
                height: deviceEmulation.screenSize.height,
            };
            log.info("Using window dimensions: ", windowDimensions);
            const configureBrowserScript = Functions_1.Functions.functionToScript(ContentCaptureFunctions_1.configureBrowser, windowDimensions);
            yield webContents.executeJavaScript(configureBrowserScript);
        });
    }
    initReactor() {
        log.info("Initializing reactor for 'close'");
        this.reactor.registerEvent('close');
        this.browserWindow.on('close', () => {
            log.info("Firing event listener 'close'");
            this.reactor.dispatchEvent('close', {});
        });
    }
}
exports.StandardWebContentsDriver = StandardWebContentsDriver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhbmRhcmRXZWJDb250ZW50c0RyaXZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlN0YW5kYXJkV2ViQ29udGVudHNEcml2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVDQUFrRTtBQUVsRSxzREFBaUQ7QUFDakQsZ0RBQTJDO0FBQzNDLHFEQUFnRDtBQUVoRCxpRkFBcUU7QUFDckUsb0RBQStDO0FBRS9DLG1EQUE4QztBQUU5QyxzRkFBaUY7QUFVakYsNkRBQXdEO0FBQ3hELGdFQUEyRDtBQUUzRCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFLNUIsTUFBYSx5QkFBeUI7SUFVbEMsWUFBWSxjQUE4QjtRQUZoQyxZQUFPLEdBQUcsSUFBSSxpQkFBTyxFQUFvQixDQUFDO1FBR2hELElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0lBQ3pDLENBQUM7SUFFWSxJQUFJLENBQUMsV0FBeUI7O1lBRXZDLE1BQU0sb0JBQW9CLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixFQUFFLENBQUM7WUFFaEUsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFFNUMsQ0FBQztLQUFBO0lBR1ksY0FBYzs7WUFDdkIsT0FBTyxtQkFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDL0MsQ0FBQztLQUFBO0lBRVksT0FBTzs7WUFDaEIsR0FBRyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBRWpDLG1CQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7aUJBQzFCLEdBQUcsQ0FBQyxhQUFhLENBQUMsRUFBRTtnQkFFakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsRUFBRTtvQkFDOUIsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUN6QjtZQUVMLENBQUMsQ0FBQyxDQUFDO1lBRVAsR0FBRyxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7S0FBQTtJQVdZLE9BQU8sQ0FBQyxHQUFXLEVBQUUsb0JBQTZCLElBQUk7O1lBRS9ELE1BQU0sSUFBSSxHQUFHO2dCQUtULFlBQVksRUFBRSw4QkFBOEIsR0FBRyxJQUFJO2dCQUNuRCxTQUFTLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTO2FBRTNDLENBQUM7WUFFRixNQUFNLE1BQU0sR0FBRyx5Q0FBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVksQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBRTNFLElBQUksQ0FBQyxXQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUVyQyxJQUFJLGlCQUFpQixFQUFFO2dCQUNuQixPQUFPLE1BQU0sQ0FBQzthQUNqQjtpQkFBTTtnQkFDSCxPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUM1QjtRQUVMLENBQUM7S0FBQTtJQUVNLGVBQWUsQ0FBQyxLQUE4QjtJQUNyRCxDQUFDO0lBRU0sZ0JBQWdCLENBQUMsU0FBK0IsRUFBRSxhQUF5QjtRQUM5RSxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRVMsMkJBQTJCO1FBQ2pDLE9BQU8sK0JBQWMsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVlLE1BQU0sQ0FBQyxvQkFBcUQ7O1lBRXhFLEdBQUcsQ0FBQyxJQUFJLENBQUMsOEJBQThCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztZQUUvRCxNQUFNLE1BQU0sR0FBRyxJQUFJLHdCQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUV2RCxNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxXQUFXLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztZQUU3RSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFdkIsQ0FBQztLQUFBO0lBRWUsZUFBZSxDQUFDLGFBQTRCLEVBQzVCLFdBQXdCLEVBQ3hCLG9CQUFxRDs7WUFFakYsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7WUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7WUFFL0IsTUFBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFOUMsSUFBSyxDQUFFLG9CQUFvQixDQUFDLElBQUksRUFBRTtnQkFDOUIsTUFBTSwrQkFBYyxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUN2RDtZQUVELE1BQU0seUJBQXlCLENBQUMsb0JBQW9CLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUUzRixDQUFDO0tBQUE7SUFFYSxxQkFBcUIsQ0FBQyxXQUF3Qjs7WUFHeEQsTUFBTSxtQkFBbUIsR0FBRyxHQUFHLEVBQUU7Z0JBRTdCLElBQUksQ0FBQyxPQUFPLEVBQUU7cUJBQ1QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRXRDLENBQUMsQ0FBQztZQUVGLE1BQU0saUJBQWlCLEdBQUcsR0FBRyxFQUFFO2dCQUUzQixJQUFJLGVBQWUsR0FBRyxXQUFXLENBQUM7Z0JBRWxDLE9BQU8sZUFBZSxDQUFDLGVBQWUsRUFBRTtvQkFDcEMsZUFBZSxHQUFHLGVBQWUsQ0FBQyxlQUFlLENBQUM7aUJBQ3JEO2dCQUVELE1BQU0sZUFBZSxHQUFHLGVBQWUsQ0FBQyxFQUFFLENBQUM7Z0JBRTNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUNBQWlDLEdBQUcsZUFBZSxDQUFDLENBQUM7Z0JBRTlELE1BQU0sYUFBYSxHQUFHLHdCQUFhLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUU1RCxJQUFJLGFBQWEsRUFBRTtvQkFDZixhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ3pCO3FCQUFNO29CQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQztpQkFDMUM7Z0JBRUQseUJBQVcsQ0FBQyxtQkFBbUIsRUFBRTtxQkFDNUIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRXRDLENBQUMsQ0FBQztZQUVGLHlDQUFtQixDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7WUFFaEcsV0FBVyxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFFOUIsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBRTNCLHlCQUF5QixDQUFDLG9CQUFvQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDO3FCQUMzRSxLQUFLLENBQUMsQ0FBQyxHQUFVLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsb0NBQW9DLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUVyRixDQUFDLENBQUMsQ0FBQztZQUVILFdBQVcsQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBRzNDLENBQUMsQ0FBQyxDQUFDO1lBRUgsV0FBVyxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsRUFBRTtnQkFDN0YsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRyxFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3hHLENBQUMsQ0FBQyxDQUFDO1FBRVAsQ0FBQztLQUFBO0lBRU0sTUFBTSxDQUFPLG9CQUFvQixDQUFDLFdBQXdCLEVBQUUsY0FBOEI7O1lBRTdGLE1BQU0sR0FBRyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUVqQyxHQUFHLENBQUMsSUFBSSxDQUFDLG9DQUFvQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBR3JELEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUM1QixXQUFXLENBQUMsYUFBYSxDQUFDLENBQUUsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXJELElBQUksZUFBZSxHQUFHLGNBQWMsQ0FBQyxlQUFlLENBQUM7WUFFckQsZUFBZSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1lBRXJELEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUNoQyxXQUFXLENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFbkQsV0FBVyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFbkQsTUFBTSxnQkFBZ0IsR0FBZ0I7Z0JBQ2xDLEtBQUssRUFBRSxlQUFlLENBQUMsVUFBVSxDQUFDLEtBQUs7Z0JBQ3ZDLE1BQU0sRUFBRSxlQUFlLENBQUMsVUFBVSxDQUFDLE1BQU07YUFDNUMsQ0FBQztZQUVGLEdBQUcsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztZQUV4RCxNQUFNLHNCQUFzQixHQUFHLHFCQUFTLENBQUMsZ0JBQWdCLENBQUMsMENBQWdCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztZQUU5RixNQUFNLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRWhFLENBQUM7S0FBQTtJQUVTLFdBQVc7UUFFakIsR0FBRyxDQUFDLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1FBRTdDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXBDLElBQUksQ0FBQyxhQUFjLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDakMsR0FBRyxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7Q0FFSjtBQXpORCw4REF5TkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jyb3dzZXJXaW5kb3csIERvd25sb2FkSXRlbSwgV2ViQ29udGVudHN9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCB7V2ViQ29udGVudHNEcml2ZXIsIFdlYkNvbnRlbnRzRXZlbnQsIFdlYkNvbnRlbnRzRXZlbnROYW1lfSBmcm9tICcuL1dlYkNvbnRlbnRzRHJpdmVyJztcbmltcG9ydCB7QnJvd3NlcldpbmRvd3N9IGZyb20gJy4uL0Jyb3dzZXJXaW5kb3dzJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7T3B0aW9uYWx9IGZyb20gJy4uLy4uL3V0aWwvdHMvT3B0aW9uYWwnO1xuaW1wb3J0IHtJRGltZW5zaW9uc30gZnJvbSAnLi4vLi4vdXRpbC9EaW1lbnNpb25zJztcbmltcG9ydCB7Y29uZmlndXJlQnJvd3Nlcn0gZnJvbSAnLi4vcmVuZGVyZXIvQ29udGVudENhcHR1cmVGdW5jdGlvbnMnO1xuaW1wb3J0IHtGdW5jdGlvbnN9IGZyb20gJy4uLy4uL3V0aWwvRnVuY3Rpb25zJztcbmltcG9ydCB7QnJvd3NlclByb2ZpbGV9IGZyb20gJy4uL0Jyb3dzZXJQcm9maWxlJztcbmltcG9ydCB7UmVhY3Rvcn0gZnJvbSAnLi4vLi4vcmVhY3Rvci9SZWFjdG9yJztcbmltcG9ydCB7UGVuZGluZ1dlYlJlcXVlc3RzRXZlbnR9IGZyb20gJy4uLy4uL3dlYnJlcXVlc3RzL1BlbmRpbmdXZWJSZXF1ZXN0c0xpc3RlbmVyJztcbmltcG9ydCB7V2ViQ29udGVudHNQcm9taXNlc30gZnJvbSAnLi4vLi4vZWxlY3Ryb24vZnJhbWV3b3JrL1dlYkNvbnRlbnRzUHJvbWlzZXMnO1xuaW1wb3J0IHtGaWxlUGF0aHN9IGZyb20gJy4uLy4uL3V0aWwvRmlsZVBhdGhzJztcbmltcG9ydCB7VG9hc3Rlck1lc3NhZ2VzfSBmcm9tICcuLi8uLi91aS90b2FzdGVyL1RvYXN0ZXJNZXNzYWdlcyc7XG5pbXBvcnQge1RvYXN0ZXJNZXNzYWdlVHlwZX0gZnJvbSAnLi4vLi4vdWkvdG9hc3Rlci9Ub2FzdGVyJztcbmltcG9ydCBCcm93c2VyV2luZG93Q29uc3RydWN0b3JPcHRpb25zID0gRWxlY3Ryb24uQnJvd3NlcldpbmRvd0NvbnN0cnVjdG9yT3B0aW9ucztcbmltcG9ydCBiYXNlID0gTW9jaGEucmVwb3J0ZXJzLmJhc2U7XG5pbXBvcnQge1BERkltcG9ydGVyfSBmcm9tICcuLi8uLi9hcHBzL3JlcG9zaXRvcnkvaW1wb3J0ZXJzL1BERkltcG9ydGVyJztcbmltcG9ydCB7RmlsZUltcG9ydENsaWVudH0gZnJvbSAnLi4vLi4vYXBwcy9yZXBvc2l0b3J5L0ZpbGVJbXBvcnRDbGllbnQnO1xuaW1wb3J0IHtQcm9ncmVzc1RyYWNrZXJ9IGZyb20gJy4uLy4uL3V0aWwvUHJvZ3Jlc3NUcmFja2VyJztcbmltcG9ydCB7UHJvZ3Jlc3NNZXNzYWdlc30gZnJvbSAnLi4vLi4vdWkvcHJvZ3Jlc3NfYmFyL1Byb2dyZXNzTWVzc2FnZXMnO1xuaW1wb3J0IHtBcHBMYXVuY2hlcn0gZnJvbSAnLi4vLi4vYXBwcy9tYWluL0FwcExhdW5jaGVyJztcbmltcG9ydCB7UERGRG93bmxvYWRIYW5kbGVyc30gZnJvbSAnLi4vUERGRG93bmxvYWRIYW5kbGVycyc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuLyoqXG4gKiBVc2VkIGJ5IHRoZSBoaWRkZW4gYW5kIGhlYWRsZXNzIGRyaXZlci5cbiAqL1xuZXhwb3J0IGNsYXNzIFN0YW5kYXJkV2ViQ29udGVudHNEcml2ZXIgaW1wbGVtZW50cyBXZWJDb250ZW50c0RyaXZlciB7XG5cbiAgICBwdWJsaWMgd2ViQ29udGVudHM/OiBXZWJDb250ZW50cztcblxuICAgIHB1YmxpYyBicm93c2VyUHJvZmlsZTogQnJvd3NlclByb2ZpbGU7XG5cbiAgICBwcm90ZWN0ZWQgYnJvd3NlcldpbmRvdz86IEJyb3dzZXJXaW5kb3c7XG5cbiAgICBwcm90ZWN0ZWQgcmVhY3RvciA9IG5ldyBSZWFjdG9yPFdlYkNvbnRlbnRzRXZlbnQ+KCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihicm93c2VyUHJvZmlsZTogQnJvd3NlclByb2ZpbGUpIHtcbiAgICAgICAgdGhpcy5icm93c2VyUHJvZmlsZSA9IGJyb3dzZXJQcm9maWxlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBpbml0KHdlYkNvbnRlbnRzPzogV2ViQ29udGVudHMpIHtcblxuICAgICAgICBjb25zdCBicm93c2VyV2luZG93T3B0aW9ucyA9IHRoaXMuY29tcHV0ZUJyb3dzZXJXaW5kb3dPcHRpb25zKCk7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5kb0luaXQoYnJvd3NlcldpbmRvd09wdGlvbnMpO1xuXG4gICAgfVxuXG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0V2ViQ29udGVudHMoKTogUHJvbWlzZTxFbGVjdHJvbi5XZWJDb250ZW50cz4ge1xuICAgICAgICByZXR1cm4gT3B0aW9uYWwub2YodGhpcy53ZWJDb250ZW50cykuZ2V0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGRlc3Ryb3koKSB7XG4gICAgICAgIGxvZy5pbmZvKFwiRGVzdHJveWluZyB3aW5kb3cuLi5cIik7XG5cbiAgICAgICAgT3B0aW9uYWwub2YodGhpcy5icm93c2VyV2luZG93KVxuICAgICAgICAgICAgLm1hcChicm93c2VyV2luZG93ID0+IHtcblxuICAgICAgICAgICAgICAgIGlmICghYnJvd3NlcldpbmRvdy5pc0Rlc3Ryb3llZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyb3dzZXJXaW5kb3cuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGxvZy5pbmZvKFwiRGVzdHJveWluZyB3aW5kb3cuLi5kb25lXCIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHVybCBUaGUgVVJMIHRvIGxvYWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gd2FpdEZvckZpbmlzaExvYWQgV2hlbiB0cnVlLCB3YWl0IGZvciB0aGUgJ2RpZC1maW5pc2gtbG9hZCcgZXZlbnRcbiAgICAgKiB3aGljaCBpcyB0aGUgZGVmYXVsdCBzaW5jZSB0aGUgb2xkIGNhcHR1cmUgc3lzdGVtIHdhcyBiYXNlZCBvbiB0aGVcbiAgICAgKiAgICAgYnJvd3NlciBsb2FkaW5nIGV2ZW50IHN0cmVhbSBhbmQgd2UgYXNzdW1lZCB0aGUgbG9hZCBldmVudCB3b3VsZFxuICAgICAqICAgICBtZWFuIHRoZSBwYWdlIHdhcyBmaW5pc2hlZCByZW5kZXJpbmcgLSB3aGljaCBpcyBub3QgcmVhbGx5IHRydWUuXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIGxvYWRVUkwodXJsOiBzdHJpbmcsIHdhaXRGb3JGaW5pc2hMb2FkOiBib29sZWFuID0gdHJ1ZSk6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIGNvbnN0IG9wdHMgPSB7XG5cbiAgICAgICAgICAgIC8vIHRoZSBuby1jYWNoZSBoZWFkZXIgaXMgbmVlZGVkIGhlcmUgc28gdGhhdCB3ZSBkb24ndCBsb2FkIHRoZSBkYXRhXG4gICAgICAgICAgICAvLyBpbnRvIHRoZSBjYWNoZSBhbmQgdGhlbiBhY2NpZGVudGFsbHkgbG9hZCBpdC5cbiAgICAgICAgICAgIC8vIGV4dHJhSGVhZGVyczogYHByYWdtYTogbm8tY2FjaGUsIG5vLXN0b3JlXFxucmVmZXJlcjogJHt1cmx9XFxuYCxcbiAgICAgICAgICAgIGV4dHJhSGVhZGVyczogYHByYWdtYTogbm8tY2FjaGVcXG5yZWZlcmVyOiAke3VybH1cXG5gLFxuICAgICAgICAgICAgdXNlckFnZW50OiB0aGlzLmJyb3dzZXJQcm9maWxlLnVzZXJBZ2VudFxuXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gV2ViQ29udGVudHNQcm9taXNlcy5vbmNlKHRoaXMud2ViQ29udGVudHMhKS5kaWRGaW5pc2hMb2FkKCk7XG5cbiAgICAgICAgdGhpcy53ZWJDb250ZW50cyEubG9hZFVSTCh1cmwsIG9wdHMpO1xuXG4gICAgICAgIGlmICh3YWl0Rm9yRmluaXNoTG9hZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIHByb2dyZXNzVXBkYXRlZChldmVudDogUGVuZGluZ1dlYlJlcXVlc3RzRXZlbnQpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWU6IFdlYkNvbnRlbnRzRXZlbnROYW1lLCBldmVudExpc3RlbmVyOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVhY3Rvci5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNvbXB1dGVCcm93c2VyV2luZG93T3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIEJyb3dzZXJXaW5kb3dzLnRvQnJvd3NlcldpbmRvd09wdGlvbnModGhpcy5icm93c2VyUHJvZmlsZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFzeW5jIGRvSW5pdChicm93c2VyV2luZG93T3B0aW9uczogQnJvd3NlcldpbmRvd0NvbnN0cnVjdG9yT3B0aW9ucykge1xuXG4gICAgICAgIGxvZy5pbmZvKFwiVXNpbmcgYnJvd3NlcldpbmRvd09wdGlvbnM6IFwiLCBicm93c2VyV2luZG93T3B0aW9ucyk7XG5cbiAgICAgICAgY29uc3Qgd2luZG93ID0gbmV3IEJyb3dzZXJXaW5kb3coYnJvd3NlcldpbmRvd09wdGlvbnMpO1xuXG4gICAgICAgIGF3YWl0IHRoaXMuaW5pdFdlYkNvbnRlbnRzKHdpbmRvdywgd2luZG93LndlYkNvbnRlbnRzLCBicm93c2VyV2luZG93T3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5pbml0UmVhY3RvcigpO1xuXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFzeW5jIGluaXRXZWJDb250ZW50cyhicm93c2VyV2luZG93OiBCcm93c2VyV2luZG93LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2ViQ29udGVudHM6IFdlYkNvbnRlbnRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJvd3NlcldpbmRvd09wdGlvbnM6IEJyb3dzZXJXaW5kb3dDb25zdHJ1Y3Rvck9wdGlvbnMpIHtcblxuICAgICAgICB0aGlzLmJyb3dzZXJXaW5kb3cgPSBicm93c2VyV2luZG93O1xuICAgICAgICB0aGlzLndlYkNvbnRlbnRzID0gd2ViQ29udGVudHM7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5pbml0V2ViQ29udGVudHNFdmVudHMod2ViQ29udGVudHMpO1xuXG4gICAgICAgIGlmICggISBicm93c2VyV2luZG93T3B0aW9ucy5zaG93KSB7XG4gICAgICAgICAgICBhd2FpdCBCcm93c2VyV2luZG93cy5vbmNlUmVhZHlUb1Nob3coYnJvd3NlcldpbmRvdyk7XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCBTdGFuZGFyZFdlYkNvbnRlbnRzRHJpdmVyLmNvbmZpZ3VyZVdlYkNvbnRlbnRzKHdlYkNvbnRlbnRzLCB0aGlzLmJyb3dzZXJQcm9maWxlKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgaW5pdFdlYkNvbnRlbnRzRXZlbnRzKHdlYkNvbnRlbnRzOiBXZWJDb250ZW50cykge1xuXG5cbiAgICAgICAgY29uc3Qgb25Eb3dubG9hZGVkSGFuZGxlciA9ICgpID0+IHtcblxuICAgICAgICAgICAgdGhpcy5kZXN0cm95KClcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihlcnIpKTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9uRG93bmxvYWRIYW5kbGVyID0gKCkgPT4ge1xuXG4gICAgICAgICAgICBsZXQgcm9vdFdlYkNvbnRlbnRzID0gd2ViQ29udGVudHM7XG5cbiAgICAgICAgICAgIHdoaWxlIChyb290V2ViQ29udGVudHMuaG9zdFdlYkNvbnRlbnRzKSB7XG4gICAgICAgICAgICAgICAgcm9vdFdlYkNvbnRlbnRzID0gcm9vdFdlYkNvbnRlbnRzLmhvc3RXZWJDb250ZW50cztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgYnJvd3NlcldpbmRvd0lEID0gcm9vdFdlYkNvbnRlbnRzLmlkO1xuXG4gICAgICAgICAgICBsb2cuaW5mbyhcIkdldHRpbmcgQnJvd3NlcldpbmRvdyBmcm9tIElEOiBcIiArIGJyb3dzZXJXaW5kb3dJRCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGJyb3dzZXJXaW5kb3cgPSBCcm93c2VyV2luZG93LmZyb21JZChicm93c2VyV2luZG93SUQpO1xuXG4gICAgICAgICAgICBpZiAoYnJvd3NlcldpbmRvdykge1xuICAgICAgICAgICAgICAgIGJyb3dzZXJXaW5kb3cuY2xvc2UoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbG9nLndhcm4oXCJObyBicm93c2VyIHdpbmRvdyB0byBjbHNvZVwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQXBwTGF1bmNoZXIubGF1bmNoUmVwb3NpdG9yeUFwcCgpXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoZXJyKSk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBQREZEb3dubG9hZEhhbmRsZXJzLmNyZWF0ZSh3ZWJDb250ZW50cywgKCkgPT4gb25Eb3dubG9hZGVkSGFuZGxlcigpLCAoKSA9PiBvbkRvd25sb2FkSGFuZGxlcigpKTtcblxuICAgICAgICB3ZWJDb250ZW50cy5vbignZG9tLXJlYWR5JywgKGUpID0+IHtcblxuICAgICAgICAgICAgbG9nLmluZm8oXCJkb20tcmVhZHk6IFwiLCBlKTtcblxuICAgICAgICAgICAgU3RhbmRhcmRXZWJDb250ZW50c0RyaXZlci5jb25maWd1cmVXZWJDb250ZW50cyh3ZWJDb250ZW50cywgdGhpcy5icm93c2VyUHJvZmlsZSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IGxvZy5lcnJvcihcIkNvdWxkIG5vdCBjb25maWd1cmUgd2ViIGNvbnRlbnRzOiBcIiwgZXJyKSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2ViQ29udGVudHMub24oJ3dpbGwtbmF2aWdhdGUnLCAoZSwgdXJsKSA9PiB7XG4gICAgICAgICAgICAvLyBsb2cuaW5mbyhcIkNhbmNlbGluZyBuYXZpZ2F0aW9uLi4uXCIpO1xuICAgICAgICAgICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB3ZWJDb250ZW50cy5vbignZGlkLWZhaWwtbG9hZCcsIChldmVudCwgZXJyb3JDb2RlLCBlcnJvckRlc2NyaXB0aW9uLCB2YWxpZGF0ZVVSTCwgaXNNYWluRnJhbWUpID0+IHtcbiAgICAgICAgICAgIGxvZy5pbmZvKFwiZGlkLWZhaWwtbG9hZDogXCIgLCB7ZXZlbnQsIGVycm9yQ29kZSwgZXJyb3JEZXNjcmlwdGlvbiwgdmFsaWRhdGVVUkwsIGlzTWFpbkZyYW1lfSwgZXZlbnQpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgY29uZmlndXJlV2ViQ29udGVudHMod2ViQ29udGVudHM6IFdlYkNvbnRlbnRzLCBicm93c2VyUHJvZmlsZTogQnJvd3NlclByb2ZpbGUpIHtcblxuICAgICAgICBjb25zdCB1cmwgPSB3ZWJDb250ZW50cy5nZXRVUkwoKTtcblxuICAgICAgICBsb2cuaW5mbyhcIkNvbmZpZ3VyaW5nIHdlYkNvbnRlbnRzIHdpdGggVVJMOiBcIiArIHVybCk7XG5cbiAgICAgICAgLy8gd2UgbmVlZCB0byBtdXRlIGJ5IGRlZmF1bHQgZXNwZWNpYWxseSBpZiB0aGUgd2luZG93IGlzIGhpZGRlbi5cbiAgICAgICAgbG9nLmluZm8oXCJNdXRpbmcgYXVkaW8uLi5cIik7XG4gICAgICAgIHdlYkNvbnRlbnRzLnNldEF1ZGlvTXV0ZWQoISBicm93c2VyUHJvZmlsZS53ZWJhdWRpbyk7XG5cbiAgICAgICAgbGV0IGRldmljZUVtdWxhdGlvbiA9IGJyb3dzZXJQcm9maWxlLmRldmljZUVtdWxhdGlvbjtcblxuICAgICAgICBkZXZpY2VFbXVsYXRpb24gPSBPYmplY3QuYXNzaWduKHt9LCBkZXZpY2VFbXVsYXRpb24pO1xuXG4gICAgICAgIGxvZy5pbmZvKFwiRW11bGF0aW5nIGRldmljZS4uLlwiKTtcbiAgICAgICAgd2ViQ29udGVudHMuZW5hYmxlRGV2aWNlRW11bGF0aW9uKGRldmljZUVtdWxhdGlvbik7XG5cbiAgICAgICAgd2ViQ29udGVudHMuc2V0VXNlckFnZW50KGJyb3dzZXJQcm9maWxlLnVzZXJBZ2VudCk7XG5cbiAgICAgICAgY29uc3Qgd2luZG93RGltZW5zaW9uczogSURpbWVuc2lvbnMgPSB7XG4gICAgICAgICAgICB3aWR0aDogZGV2aWNlRW11bGF0aW9uLnNjcmVlblNpemUud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IGRldmljZUVtdWxhdGlvbi5zY3JlZW5TaXplLmhlaWdodCxcbiAgICAgICAgfTtcblxuICAgICAgICBsb2cuaW5mbyhcIlVzaW5nIHdpbmRvdyBkaW1lbnNpb25zOiBcIiwgd2luZG93RGltZW5zaW9ucyk7XG5cbiAgICAgICAgY29uc3QgY29uZmlndXJlQnJvd3NlclNjcmlwdCA9IEZ1bmN0aW9ucy5mdW5jdGlvblRvU2NyaXB0KGNvbmZpZ3VyZUJyb3dzZXIsIHdpbmRvd0RpbWVuc2lvbnMpO1xuXG4gICAgICAgIGF3YWl0IHdlYkNvbnRlbnRzLmV4ZWN1dGVKYXZhU2NyaXB0KGNvbmZpZ3VyZUJyb3dzZXJTY3JpcHQpO1xuXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRSZWFjdG9yKCkge1xuXG4gICAgICAgIGxvZy5pbmZvKFwiSW5pdGlhbGl6aW5nIHJlYWN0b3IgZm9yICdjbG9zZSdcIik7XG5cbiAgICAgICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoJ2Nsb3NlJyk7XG5cbiAgICAgICAgdGhpcy5icm93c2VyV2luZG93IS5vbignY2xvc2UnLCAoKSA9PiB7XG4gICAgICAgICAgICBsb2cuaW5mbyhcIkZpcmluZyBldmVudCBsaXN0ZW5lciAnY2xvc2UnXCIpO1xuICAgICAgICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoJ2Nsb3NlJywge30pO1xuICAgICAgICB9KTtcblxuICAgIH1cblxufVxuIl19