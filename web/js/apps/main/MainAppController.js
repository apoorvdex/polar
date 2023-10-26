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
const electron_1 = require("electron");
const ResourcePaths_1 = require("../../electron/webresource/ResourcePaths");
const Logger_1 = require("../../logger/Logger");
const Services_1 = require("../../util/services/Services");
const MainAppBrowserWindowFactory_1 = require("./MainAppBrowserWindowFactory");
const AppLauncher_1 = require("./AppLauncher");
const Hashcodes_1 = require("../../Hashcodes");
const SingletonBrowserWindow_1 = require("../../electron/framework/SingletonBrowserWindow");
const process_1 = __importDefault(require("process"));
const Capture_1 = require("../../capture/Capture");
const Directories_1 = require("../../datastore/Directories");
const FileImportClient_1 = require("../repository/FileImportClient");
const MainAppExceptionHandlers_1 = require("./MainAppExceptionHandlers");
const FileImportRequests_1 = require("../repository/FileImportRequests");
const log = Logger_1.Logger.create();
class MainAppController {
    constructor(fileLoader, webserver) {
        this.fileLoader = fileLoader;
        this.webserver = webserver;
        this.directories = new Directories_1.Directories();
    }
    cmdCaptureWebPage() {
        return __awaiter(this, void 0, void 0, function* () {
            const browserWindowOptions = Object.assign({}, MainAppBrowserWindowFactory_1.BROWSER_WINDOW_OPTIONS);
            browserWindowOptions.width = browserWindowOptions.width * .9;
            browserWindowOptions.height = browserWindowOptions.height * .9;
            browserWindowOptions.center = true;
            const url = ResourcePaths_1.ResourcePaths.resourceURLFromRelativeURL('./apps/capture/start-capture/index.html');
            yield MainAppBrowserWindowFactory_1.MainAppBrowserWindowFactory.createWindow(browserWindowOptions, url);
        });
    }
    cmdCaptureWebPageWithBrowser(captureOpts = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const captureResult = yield Capture_1.Capture.trigger(captureOpts);
            yield this.handleLoadDoc(captureResult.path);
        });
    }
    cmdNewWindow() {
        return __awaiter(this, void 0, void 0, function* () {
            yield MainAppBrowserWindowFactory_1.MainAppBrowserWindowFactory.createWindow();
        });
    }
    cmdImport() {
        return __awaiter(this, void 0, void 0, function* () {
            const files = yield this.promptImportDocs();
            if (files) {
                FileImportClient_1.FileImportClient.send(FileImportRequests_1.FileImportRequests.fromPaths(files));
            }
        });
    }
    cmdExit() {
        this.exitApp();
    }
    cmdToggleDevTools(item, focusedWindow) {
        log.info("Toggling dev tools in: " + focusedWindow);
        focusedWindow.webContents.toggleDevTools();
    }
    exitApp() {
        const doProcessExit = true;
        const doAppQuit = true;
        const doServicesStop = true;
        const doWindowGC = false;
        const doCloseWindows = false;
        const doDestroyWindows = false;
        MainAppExceptionHandlers_1.MainAppExceptionHandlers.register();
        log.info("Exiting app...");
        if (doWindowGC) {
            log.info("Getting all browser windows...");
            const browserWindows = electron_1.BrowserWindow.getAllWindows();
            log.info("Getting all browser windows...done");
            log.info("Closing/destroying all windows...");
            for (const browserWindow of browserWindows) {
                const id = browserWindow.id;
                if (!browserWindow.isDestroyed()) {
                    if (doCloseWindows && browserWindow.isClosable()) {
                        log.info(`Closing window id=${id}`);
                        browserWindow.close();
                    }
                    if (doDestroyWindows) {
                        log.info(`Destroying window id=${id}`);
                        browserWindow.destroy();
                    }
                }
                else {
                    log.info(`Skipping destroy window (is destroyed) id=${id}`);
                }
            }
            log.info("Closing/destroying all windows...done");
        }
        if (doServicesStop) {
            log.info("Stopping services...");
            Services_1.Services.stop({
                webserver: this.webserver,
            });
            log.info("Stopping services...done");
        }
        if (doAppQuit) {
            log.info("Quitting app...");
            electron_1.app.quit();
            log.info("Quitting app...done");
        }
        if (doProcessExit) {
            log.info("Process exit...");
            process_1.default.exit();
            log.info("Process exit...done");
        }
    }
    handleLoadDoc(path, newWindow = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const extraTags = { 'type': 'viewer' };
            const browserWindowTag = { name: 'viewer', value: Hashcodes_1.Hashcodes.createID(path) };
            return yield SingletonBrowserWindow_1.SingletonBrowserWindow.getInstance(browserWindowTag, () => __awaiter(this, void 0, void 0, function* () {
                let window;
                if (newWindow) {
                    window = yield MainAppBrowserWindowFactory_1.MainAppBrowserWindowFactory.createWindow(MainAppBrowserWindowFactory_1.BROWSER_WINDOW_OPTIONS, 'about:blank');
                }
                else {
                    window = electron_1.BrowserWindow.getFocusedWindow();
                }
                return yield this.loadDoc(path, window);
            }), extraTags);
        });
    }
    loadDoc(path, targetWindow) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!targetWindow) {
                throw new Error("No target window given");
            }
            const loadedFile = yield this.fileLoader.registerForLoad(path);
            log.info("Loading webapp at: " + loadedFile.webResource);
            loadedFile.webResource.load(targetWindow);
            targetWindow.webContents.once('did-finish-load', () => {
                if (loadedFile.title) {
                    targetWindow.setTitle(loadedFile.title);
                }
                if (loadedFile.docDimensions) {
                    const [width, height] = targetWindow.getSize();
                    const idealWidth = loadedFile.docDimensions.width + 100;
                    if (width < idealWidth) {
                        log.info("Adjusting window width");
                        targetWindow.setSize(idealWidth, height);
                    }
                }
            });
            return targetWindow;
        });
    }
    activateMainWindow() {
        let browserWindows = electron_1.BrowserWindow.getAllWindows();
        browserWindows = browserWindows.filter(browserWindow => browserWindow.isVisible());
        if (browserWindows.length === 0) {
            AppLauncher_1.AppLauncher.launchRepositoryApp()
                .catch(err => log.error("Unable to open repository app: ", err));
            return;
        }
        const mainWindow = browserWindows[0];
        if (mainWindow.isMinimized()) {
            mainWindow.restore();
        }
        mainWindow.focus();
    }
    promptImportDocs() {
        return __awaiter(this, void 0, void 0, function* () {
            const downloadsDir = electron_1.app.getPath('downloads');
            return new Promise((resolve) => {
                electron_1.dialog.showOpenDialog({
                    title: "Import Document",
                    defaultPath: downloadsDir,
                    filters: [
                        { name: 'Docs', extensions: ['pdf', "phz"] }
                    ],
                    properties: ['openFile', 'multiSelections']
                }, (paths) => {
                    resolve(paths);
                });
            });
        });
    }
}
exports.MainAppController = MainAppController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbkFwcENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNYWluQXBwQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQW9EO0FBQ3BELDRFQUF1RTtBQUN2RSxnREFBMkM7QUFDM0MsMkRBQXNEO0FBRXRELCtFQUFrRztBQUNsRywrQ0FBMEM7QUFDMUMsK0NBQTBDO0FBQzFDLDRGQUF1RjtBQUN2RixzREFBOEI7QUFDOUIsbURBQThDO0FBQzlDLDZEQUF3RDtBQUN4RCxxRUFBZ0U7QUFJaEUseUVBQW9FO0FBRXBFLHlFQUFvRTtBQUVwRSxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSxpQkFBaUI7SUFRMUIsWUFBWSxVQUFzQixFQUN0QixTQUFvQjtRQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFFWSxpQkFBaUI7O1lBRTFCLE1BQU0sb0JBQW9CLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsb0RBQXNCLENBQUMsQ0FBQztZQUV2RSxvQkFBb0IsQ0FBQyxLQUFLLEdBQUcsb0JBQW9CLENBQUMsS0FBTSxHQUFHLEVBQUUsQ0FBQztZQUM5RCxvQkFBb0IsQ0FBQyxNQUFNLEdBQUcsb0JBQW9CLENBQUMsTUFBTyxHQUFHLEVBQUUsQ0FBQztZQUNoRSxvQkFBb0IsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBRW5DLE1BQU0sR0FBRyxHQUFHLDZCQUFhLENBQUMsMEJBQTBCLENBQUMseUNBQXlDLENBQUMsQ0FBQztZQUVoRyxNQUFNLHlEQUEyQixDQUFDLFlBQVksQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUU5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RTtpQkFDNUIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRXJFLE9BQU87U0FDVjtRQUVELE1BQU0sVUFBVSxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVyQyxJQUFJLFVBQVUsQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUMxQixVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDeEI7UUFFRCxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFdkIsQ0FBQztJQU1hLGdCQUFnQjs7WUFFMUIsTUFBTSxZQUFZLEdBQUcsY0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUU5QyxPQUFPLElBQUksT0FBTyxDQUF1QixDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUVqRCxpQkFBTSxDQUFDLGNBQWMsQ0FBQztvQkFDaEIsS0FBSyxFQUFFLGlCQUFpQjtvQkFDeEIsV0FBVyxFQUFFLFlBQVk7b0JBQ3pCLE9BQU8sRUFBRTt3QkFDTCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFO3FCQUMvQztvQkFDRCxVQUFVLEVBQUUsQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLENBQUM7aUJBRTlDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtvQkFFWCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBRW5CLENBQUMsQ0FBQyxDQUFDO1lBRVAsQ0FBQyxDQUFDLENBQUM7UUFFUCxDQUFDO0tBQUE7Q0FFSjtBQXhRRCw4Q0F3UUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FwcCwgQnJvd3NlcldpbmRvdywgZGlhbG9nfSBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQge1Jlc291cmNlUGF0aHN9IGZyb20gJy4uLy4uL2VsZWN0cm9uL3dlYnJlc291cmNlL1Jlc291cmNlUGF0aHMnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uLy4uL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtTZXJ2aWNlc30gZnJvbSAnLi4vLi4vdXRpbC9zZXJ2aWNlcy9TZXJ2aWNlcyc7XG5pbXBvcnQge1dlYnNlcnZlcn0gZnJvbSAnLi4vLi4vYmFja2VuZC93ZWJzZXJ2ZXIvV2Vic2VydmVyJztcbmltcG9ydCB7QlJPV1NFUl9XSU5ET1dfT1BUSU9OUywgTWFpbkFwcEJyb3dzZXJXaW5kb3dGYWN0b3J5fSBmcm9tICcuL01haW5BcHBCcm93c2VyV2luZG93RmFjdG9yeSc7XG5pbXBvcnQge0FwcExhdW5jaGVyfSBmcm9tICcuL0FwcExhdW5jaGVyJztcbmltcG9ydCB7SGFzaGNvZGVzfSBmcm9tICcuLi8uLi9IYXNoY29kZXMnO1xuaW1wb3J0IHtTaW5nbGV0b25Ccm93c2VyV2luZG93fSBmcm9tICcuLi8uLi9lbGVjdHJvbi9mcmFtZXdvcmsvU2luZ2xldG9uQnJvd3NlcldpbmRvdyc7XG5pbXBvcnQgcHJvY2VzcyBmcm9tICdwcm9jZXNzJztcbmltcG9ydCB7Q2FwdHVyZX0gZnJvbSAnLi4vLi4vY2FwdHVyZS9DYXB0dXJlJztcbmltcG9ydCB7RGlyZWN0b3JpZXN9IGZyb20gJy4uLy4uL2RhdGFzdG9yZS9EaXJlY3Rvcmllcyc7XG5pbXBvcnQge0ZpbGVJbXBvcnRDbGllbnR9IGZyb20gJy4uL3JlcG9zaXRvcnkvRmlsZUltcG9ydENsaWVudCc7XG5pbXBvcnQge0NhcHR1cmVPcHRzfSBmcm9tICcuLi8uLi9jYXB0dXJlL0NhcHR1cmVPcHRzJztcbmltcG9ydCB7UGxhdGZvcm0sIFBsYXRmb3Jtc30gZnJvbSAnLi4vLi4vdXRpbC9QbGF0Zm9ybXMnO1xuaW1wb3J0IE1lbnVJdGVtID0gRWxlY3Ryb24uTWVudUl0ZW07XG5pbXBvcnQge01haW5BcHBFeGNlcHRpb25IYW5kbGVyc30gZnJvbSAnLi9NYWluQXBwRXhjZXB0aW9uSGFuZGxlcnMnO1xuaW1wb3J0IHtGaWxlTG9hZGVyfSBmcm9tICcuL2ZpbGVfbG9hZGVycy9GaWxlTG9hZGVyJztcbmltcG9ydCB7RmlsZUltcG9ydFJlcXVlc3RzfSBmcm9tICcuLi9yZXBvc2l0b3J5L0ZpbGVJbXBvcnRSZXF1ZXN0cyc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIE1haW5BcHBDb250cm9sbGVyIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgZmlsZUxvYWRlcjogRmlsZUxvYWRlcjtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgd2Vic2VydmVyOiBXZWJzZXJ2ZXI7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGRpcmVjdG9yaWVzOiBEaXJlY3RvcmllcztcblxuICAgIGNvbnN0cnVjdG9yKGZpbGVMb2FkZXI6IEZpbGVMb2FkZXIsXG4gICAgICAgICAgICAgICAgd2Vic2VydmVyOiBXZWJzZXJ2ZXIpIHtcbiAgICAgICAgdGhpcy5maWxlTG9hZGVyID0gZmlsZUxvYWRlcjtcbiAgICAgICAgdGhpcy53ZWJzZXJ2ZXIgPSB3ZWJzZXJ2ZXI7XG4gICAgICAgIHRoaXMuZGlyZWN0b3JpZXMgPSBuZXcgRGlyZWN0b3JpZXMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY21kQ2FwdHVyZVdlYlBhZ2UoKSB7XG5cbiAgICAgICAgY29uc3QgYnJvd3NlcldpbmRvd09wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBCUk9XU0VSX1dJTkRPV19PUFRJT05TKTtcblxuICAgICAgICBicm93c2VyV2luZG93T3B0aW9ucy53aWR0aCA9IGJyb3dzZXJXaW5kb3dPcHRpb25zLndpZHRoISAqIC45O1xuICAgICAgICBicm93c2VyV2luZG93T3B0aW9ucy5oZWlnaHQgPSBicm93c2VyV2luZG93T3B0aW9ucy5oZWlnaHQhICogLjk7XG4gICAgICAgIGJyb3dzZXJXaW5kb3dPcHRpb25zLmNlbnRlciA9IHRydWU7XG5cbiAgICAgICAgY29uc3QgdXJsID0gUmVzb3VyY2VQYXRocy5yZXNvdXJjZVVSTEZyb21SZWxhdGl2ZVVSTCgnLi9hcHBzL2NhcHR1cmUvc3RhcnQtY2FwdHVyZS9pbmRleC5odG1sJyk7XG5cbiAgICAgICAgYXdhaXQgTWFpbkFwcEJyb3dzZXJXaW5kb3dGYWN0b3J5LmNyZWF0ZVdpbmRvdyhicm93c2VyV2luZG93T3B0aW9ucywgdXJsKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjbWRDYXB0dXJlV2ViUGFnZVdpdGhCcm93c2VyKGNhcHR1cmVPcHRzOiBQYXJ0aWFsPENhcHR1cmVPcHRzPiA9IHt9KSB7XG5cbiAgICAgICAgY29uc3QgY2FwdHVyZVJlc3VsdCA9IGF3YWl0IENhcHR1cmUudHJpZ2dlcihjYXB0dXJlT3B0cyk7XG4gICAgICAgIGF3YWl0IHRoaXMuaGFuZGxlTG9hZERvYyhjYXB0dXJlUmVzdWx0LnBhdGgpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGNtZE5ld1dpbmRvdygpIHtcbiAgICAgICAgYXdhaXQgTWFpbkFwcEJyb3dzZXJXaW5kb3dGYWN0b3J5LmNyZWF0ZVdpbmRvdygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjbWRJbXBvcnQoKSB7XG5cbiAgICAgICAgY29uc3QgZmlsZXMgPSBhd2FpdCB0aGlzLnByb21wdEltcG9ydERvY3MoKTtcblxuICAgICAgICAvLyBzZW5kIHRoZSBtZXNzYWdlcyB0byB0aGUgcmVuZGVyZXIgY29udGV4dCBub3cgc28gdGhhdCB3ZSBjYW4gYnVsa1xuICAgICAgICAvLyBpbXBvcnQgdGhlbSBpbnRvIHRoZSByZXBvLlxuICAgICAgICBpZiAoZmlsZXMpIHtcbiAgICAgICAgICAgIEZpbGVJbXBvcnRDbGllbnQuc2VuZChGaWxlSW1wb3J0UmVxdWVzdHMuZnJvbVBhdGhzKGZpbGVzKSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHB1YmxpYyBjbWRFeGl0KCkge1xuICAgICAgICB0aGlzLmV4aXRBcHAoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY21kVG9nZ2xlRGV2VG9vbHMoaXRlbTogTWVudUl0ZW0sIGZvY3VzZWRXaW5kb3c6IEJyb3dzZXJXaW5kb3cpIHtcbiAgICAgICAgbG9nLmluZm8oXCJUb2dnbGluZyBkZXYgdG9vbHMgaW46IFwiICsgZm9jdXNlZFdpbmRvdyk7XG4gICAgICAgIGZvY3VzZWRXaW5kb3cud2ViQ29udGVudHMudG9nZ2xlRGV2VG9vbHMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZXhpdEFwcCgpIHtcblxuICAgICAgICAvLyB3ZSBoYXZlIGEgY29sbGVjdGlvbiBvZiBmbGFncyBoZXJlIGNvbnRyb2xsaW5nIHNodXRkb3duIGFzIEVsZWN0cm9uXG4gICAgICAgIC8vIGlzIHBpY2t5IGluIHNvbWUgc2l0dWF0aW9ucyByZWdhcmRpbmcgcmFpc2luZyBleGNlcHRpb25zIGFuZCB3ZSdyZVxuICAgICAgICAvLyBzdGlsbCB0cnlpbmcgdG8gdHJhY2sgZG93biB0aGUgcHJvcGVyIHdheSB0byBoYW5kbGUgYXBwIHF1aXQuXG5cbiAgICAgICAgY29uc3QgZG9Qcm9jZXNzRXhpdCA9IHRydWU7XG4gICAgICAgIGNvbnN0IGRvQXBwUXVpdCA9IHRydWU7XG4gICAgICAgIGNvbnN0IGRvU2VydmljZXNTdG9wID0gdHJ1ZTtcblxuICAgICAgICBjb25zdCBkb1dpbmRvd0dDID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgZG9DbG9zZVdpbmRvd3MgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgZG9EZXN0cm95V2luZG93cyA9IGZhbHNlO1xuXG4gICAgICAgIC8vIHRoZSBleGNlcHRpb24gaGFuZGxlcnMgbmVlZCB0byBiZSByZS1yZWdpc3RlcmVkIGFzIEkgdGhpbmsgdGhleSdyZVxuICAgICAgICAvLyBiZWluZyByZW1vdmVkIG9uIGV4aXQgKHBvc3NpYmx5IGJ5IHNlbnRyeT8pXG4gICAgICAgIE1haW5BcHBFeGNlcHRpb25IYW5kbGVycy5yZWdpc3RlcigpO1xuXG4gICAgICAgIGxvZy5pbmZvKFwiRXhpdGluZyBhcHAuLi5cIik7XG5cbiAgICAgICAgaWYgKGRvV2luZG93R0MpIHtcblxuICAgICAgICAgICAgbG9nLmluZm8oXCJHZXR0aW5nIGFsbCBicm93c2VyIHdpbmRvd3MuLi5cIik7XG4gICAgICAgICAgICBjb25zdCBicm93c2VyV2luZG93cyA9IEJyb3dzZXJXaW5kb3cuZ2V0QWxsV2luZG93cygpO1xuICAgICAgICAgICAgbG9nLmluZm8oXCJHZXR0aW5nIGFsbCBicm93c2VyIHdpbmRvd3MuLi5kb25lXCIpO1xuXG4gICAgICAgICAgICBsb2cuaW5mbyhcIkNsb3NpbmcvZGVzdHJveWluZyBhbGwgd2luZG93cy4uLlwiKTtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBicm93c2VyV2luZG93IG9mIGJyb3dzZXJXaW5kb3dzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBicm93c2VyV2luZG93LmlkO1xuXG4gICAgICAgICAgICAgICAgaWYgKCEgYnJvd3NlcldpbmRvdy5pc0Rlc3Ryb3llZCgpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvQ2xvc2VXaW5kb3dzICYmIGJyb3dzZXJXaW5kb3cuaXNDbG9zYWJsZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2cuaW5mbyhgQ2xvc2luZyB3aW5kb3cgaWQ9JHtpZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyb3dzZXJXaW5kb3cuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChkb0Rlc3Ryb3lXaW5kb3dzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2cuaW5mbyhgRGVzdHJveWluZyB3aW5kb3cgaWQ9JHtpZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyb3dzZXJXaW5kb3cuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsb2cuaW5mbyhgU2tpcHBpbmcgZGVzdHJveSB3aW5kb3cgKGlzIGRlc3Ryb3llZCkgaWQ9JHtpZH1gKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbG9nLmluZm8oXCJDbG9zaW5nL2Rlc3Ryb3lpbmcgYWxsIHdpbmRvd3MuLi5kb25lXCIpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG9TZXJ2aWNlc1N0b3ApIHtcblxuICAgICAgICAgICAgbG9nLmluZm8oXCJTdG9wcGluZyBzZXJ2aWNlcy4uLlwiKTtcblxuICAgICAgICAgICAgU2VydmljZXMuc3RvcCh7XG4gICAgICAgICAgICAgICAgd2Vic2VydmVyOiB0aGlzLndlYnNlcnZlcixcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsb2cuaW5mbyhcIlN0b3BwaW5nIHNlcnZpY2VzLi4uZG9uZVwiKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRvQXBwUXVpdCkge1xuICAgICAgICAgICAgbG9nLmluZm8oXCJRdWl0dGluZyBhcHAuLi5cIik7XG5cbiAgICAgICAgICAgIGFwcC5xdWl0KCk7XG5cbiAgICAgICAgICAgIGxvZy5pbmZvKFwiUXVpdHRpbmcgYXBwLi4uZG9uZVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkb1Byb2Nlc3NFeGl0KSB7XG4gICAgICAgICAgICBsb2cuaW5mbyhcIlByb2Nlc3MgZXhpdC4uLlwiKTtcbiAgICAgICAgICAgIHByb2Nlc3MuZXhpdCgpO1xuICAgICAgICAgICAgbG9nLmluZm8oXCJQcm9jZXNzIGV4aXQuLi5kb25lXCIpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdXNlciBhc2tlZCB0byBvcGVuIGEgZmlsZSBmcm9tIHRoZSBjb21tYW5kIGxpbmUgb3IgdmlhIE9TIGV2ZW50LlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBoYW5kbGVMb2FkRG9jKHBhdGg6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdXaW5kb3c6IGJvb2xlYW4gPSB0cnVlKTogUHJvbWlzZTxCcm93c2VyV2luZG93PiB7XG5cbiAgICAgICAgY29uc3QgZXh0cmFUYWdzID0geyd0eXBlJzogJ3ZpZXdlcid9O1xuXG4gICAgICAgIGNvbnN0IGJyb3dzZXJXaW5kb3dUYWcgPSB7bmFtZTogJ3ZpZXdlcicsIHZhbHVlOiBIYXNoY29kZXMuY3JlYXRlSUQocGF0aCl9O1xuXG4gICAgICAgIHJldHVybiBhd2FpdCBTaW5nbGV0b25Ccm93c2VyV2luZG93LmdldEluc3RhbmNlKGJyb3dzZXJXaW5kb3dUYWcsIGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgbGV0IHdpbmRvdztcblxuICAgICAgICAgICAgaWYgKG5ld1dpbmRvdykge1xuICAgICAgICAgICAgICAgIHdpbmRvdyA9IGF3YWl0IE1haW5BcHBCcm93c2VyV2luZG93RmFjdG9yeS5jcmVhdGVXaW5kb3coQlJPV1NFUl9XSU5ET1dfT1BUSU9OUywgJ2Fib3V0OmJsYW5rJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdpbmRvdyA9IEJyb3dzZXJXaW5kb3cuZ2V0Rm9jdXNlZFdpbmRvdygpITtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMubG9hZERvYyhwYXRoLCB3aW5kb3cpO1xuXG4gICAgICAgIH0sIGV4dHJhVGFncyk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIHRoZSBnaXZlbiBQREYgZmlsZSBpbiB0aGUgZ2l2ZW4gdGFyZ2V0IHdpbmRvdy5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgbG9hZERvYyhwYXRoOiBzdHJpbmcsIHRhcmdldFdpbmRvdzogQnJvd3NlcldpbmRvdyk6IFByb21pc2U8QnJvd3NlcldpbmRvdz4ge1xuXG4gICAgICAgIGlmICghdGFyZ2V0V2luZG93KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyB0YXJnZXQgd2luZG93IGdpdmVuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbG9hZGVkRmlsZSA9IGF3YWl0IHRoaXMuZmlsZUxvYWRlci5yZWdpc3RlckZvckxvYWQocGF0aCk7XG5cbiAgICAgICAgbG9nLmluZm8oXCJMb2FkaW5nIHdlYmFwcCBhdDogXCIgKyBsb2FkZWRGaWxlLndlYlJlc291cmNlKTtcblxuICAgICAgICBsb2FkZWRGaWxlLndlYlJlc291cmNlLmxvYWQodGFyZ2V0V2luZG93KTtcblxuICAgICAgICB0YXJnZXRXaW5kb3cud2ViQ29udGVudHMub25jZSgnZGlkLWZpbmlzaC1sb2FkJywgKCkgPT4ge1xuXG4gICAgICAgICAgICBpZiAobG9hZGVkRmlsZS50aXRsZSkge1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IHRoaXMgc2hvdWxkIGJlIGRyaXZlbiBmcm9tIHRoZSBEb2NNZXRhIGFuZCB0aGUgRG9jTWV0YVxuICAgICAgICAgICAgICAgIC8vIHNob3VsZCBiZSBpbml0aWFsaXplZCBmcm9tIHRoZSBkZXNjcmlwdG9yLlxuICAgICAgICAgICAgICAgIHRhcmdldFdpbmRvdy5zZXRUaXRsZShsb2FkZWRGaWxlLnRpdGxlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGxvYWRlZEZpbGUuZG9jRGltZW5zaW9ucykge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgW3dpZHRoLCBoZWlnaHRdID0gdGFyZ2V0V2luZG93LmdldFNpemUoKTtcblxuICAgICAgICAgICAgICAgIC8vIGNvbXB1dGUgdGhlIGlkZWFsIHdpZHRoIHBsdXMgYSBzbWFsbCBidWZmZXIgZm9yIHRoZSBzaWRlcy5cbiAgICAgICAgICAgICAgICBjb25zdCBpZGVhbFdpZHRoID0gbG9hZGVkRmlsZS5kb2NEaW1lbnNpb25zLndpZHRoICsgMTAwO1xuXG4gICAgICAgICAgICAgICAgaWYgKHdpZHRoIDwgaWRlYWxXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICBsb2cuaW5mbyhcIkFkanVzdGluZyB3aW5kb3cgd2lkdGhcIik7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFdpbmRvdy5zZXRTaXplKGlkZWFsV2lkdGgsIGhlaWdodCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldFdpbmRvdztcblxuICAgIH1cblxuICAgIHB1YmxpYyBhY3RpdmF0ZU1haW5XaW5kb3coKSB7XG5cbiAgICAgICAgbGV0IGJyb3dzZXJXaW5kb3dzID0gQnJvd3NlcldpbmRvdy5nZXRBbGxXaW5kb3dzKCk7XG5cbiAgICAgICAgYnJvd3NlcldpbmRvd3MgPSBicm93c2VyV2luZG93cy5maWx0ZXIoIGJyb3dzZXJXaW5kb3cgPT4gYnJvd3NlcldpbmRvdy5pc1Zpc2libGUoKSk7XG5cbiAgICAgICAgaWYgKGJyb3dzZXJXaW5kb3dzLmxlbmd0aCA9PT0gMCkge1xuXG4gICAgICAgICAgICBBcHBMYXVuY2hlci5sYXVuY2hSZXBvc2l0b3J5QXBwKClcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihcIlVuYWJsZSB0byBvcGVuIHJlcG9zaXRvcnkgYXBwOiBcIiwgZXJyKSk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1haW5XaW5kb3cgPSBicm93c2VyV2luZG93c1swXTtcblxuICAgICAgICBpZiAobWFpbldpbmRvdy5pc01pbmltaXplZCgpKSB7XG4gICAgICAgICAgICBtYWluV2luZG93LnJlc3RvcmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1haW5XaW5kb3cuZm9jdXMoKTtcblxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogT3BlbiBhIGRpYWxvZyBib3ggZm9yIGEgUERGIGZpbGUuXG4gICAgICovXG4gICAgcHJpdmF0ZSBhc3luYyBwcm9tcHRJbXBvcnREb2NzKCk6IFByb21pc2U8c3RyaW5nW10gfCB1bmRlZmluZWQ+IHtcblxuICAgICAgICBjb25zdCBkb3dubG9hZHNEaXIgPSBhcHAuZ2V0UGF0aCgnZG93bmxvYWRzJyk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZ1tdIHwgdW5kZWZpbmVkPigocmVzb2x2ZSkgPT4ge1xuXG4gICAgICAgICAgICBkaWFsb2cuc2hvd09wZW5EaWFsb2coe1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiSW1wb3J0IERvY3VtZW50XCIsXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0UGF0aDogZG93bmxvYWRzRGlyLFxuICAgICAgICAgICAgICAgICAgZmlsdGVyczogW1xuICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ0RvY3MnLCBleHRlbnNpb25zOiBbJ3BkZicsIFwicGh6XCJdIH1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiBbJ29wZW5GaWxlJywgJ211bHRpU2VsZWN0aW9ucyddXG4gICAgICAgICAgICAgICAgICAvLyBwcm9wZXJ0aWVzOiBbJ29wZW5GaWxlJ11cbiAgICAgICAgICAgICAgfSwgKHBhdGhzKSA9PiB7XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKHBhdGhzKTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbn1cblxuIl19