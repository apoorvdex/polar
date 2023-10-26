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
const WebserverConfig_1 = require("../../backend/webserver/WebserverConfig");
const FileRegistry_1 = require("../../backend/webserver/FileRegistry");
const ProxyServerConfig_1 = require("../../backend/proxyserver/ProxyServerConfig");
const CacheRegistry_1 = require("../../backend/proxyserver/CacheRegistry");
const Directories_1 = require("../../datastore/Directories");
const CaptureController_1 = require("../../capture/controller/CaptureController");
const DialogWindowService_1 = require("../../ui/dialog_window/DialogWindowService");
const Webserver_1 = require("../../backend/webserver/Webserver");
const MainAppController_1 = require("./MainAppController");
const MainAppMenu_1 = require("./MainAppMenu");
const Cmdline_1 = require("../../electron/Cmdline");
const Logger_1 = require("../../logger/Logger");
const ScreenshotService_1 = require("../../screenshots/ScreenshotService");
const DocLoaderService_1 = require("./doc_loaders/electron/ipc/DocLoaderService");
const AppLauncher_1 = require("./AppLauncher");
const DocInfoBroadcasterService_1 = require("../../datastore/advertiser/DocInfoBroadcasterService");
const CachingStreamInterceptorService_1 = require("../../backend/interceptor/CachingStreamInterceptorService");
const process_1 = __importDefault(require("process"));
const AppPath_1 = require("../../electron/app_path/AppPath");
const MainAPI_1 = require("./MainAPI");
const MainAppExceptionHandlers_1 = require("./MainAppExceptionHandlers");
const FileImportClient_1 = require("../repository/FileImportClient");
const RendererAnalyticsService_1 = require("../../ga/RendererAnalyticsService");
const AnalyticsFileLoader_1 = require("./file_loaders/AnalyticsFileLoader");
const DefaultFileLoader_1 = require("./file_loaders/DefaultFileLoader");
const FileImportRequests_1 = require("../repository/FileImportRequests");
const log = Logger_1.Logger.create();
const WEBSERVER_PORT = 8500;
const PROXYSERVER_PORT = 8600;
class MainApp {
    constructor(datastore) {
        this.datastore = datastore;
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            MainAppExceptionHandlers_1.MainAppExceptionHandlers.register();
            global.datastore = this.datastore;
            const webserverConfig = WebserverConfig_1.WebserverConfig.create({
                dir: AppPath_1.AppPath.get(),
                port: WEBSERVER_PORT,
                host: 'localhost',
                useSSL: false,
            });
            const fileRegistry = new FileRegistry_1.FileRegistry(webserverConfig);
            const proxyServerConfig = new ProxyServerConfig_1.ProxyServerConfig(PROXYSERVER_PORT);
            const cacheRegistry = new CacheRegistry_1.CacheRegistry(proxyServerConfig);
            const directories = new Directories_1.Directories();
            const captureController = new CaptureController_1.CaptureController(cacheRegistry);
            const dialogWindowService = new DialogWindowService_1.DialogWindowService();
            const defaultFileLoader = new DefaultFileLoader_1.DefaultFileLoader(fileRegistry, cacheRegistry);
            const screenshotService = new ScreenshotService_1.ScreenshotService();
            screenshotService.start();
            new RendererAnalyticsService_1.RendererAnalyticsService().start();
            yield directories.init();
            log.info("Electron app path is: " + electron_1.app.getAppPath());
            const webserver = new Webserver_1.Webserver(webserverConfig, fileRegistry);
            yield webserver.start();
            log.info("App loaded from: ", electron_1.app.getAppPath());
            log.info("Stash dir: ", directories.stashDir);
            log.info("Logs dir: ", directories.logsDir);
            const mainWindow = yield AppLauncher_1.AppLauncher.launchRepositoryApp();
            const mainSession = electron_1.session.fromPartition('persist:polar');
            const cacheInterceptorService = new CachingStreamInterceptorService_1.CachingStreamInterceptorService(cacheRegistry, mainSession.protocol);
            yield cacheInterceptorService.start()
                .catch(err => log.error(err));
            yield captureController.start();
            yield dialogWindowService.start();
            const userAgent = mainWindow.webContents.getUserAgent();
            const fileLoader = new AnalyticsFileLoader_1.AnalyticsFileLoader(defaultFileLoader);
            yield new DocInfoBroadcasterService_1.DocInfoBroadcasterService().start();
            log.info("Running with process.args: ", JSON.stringify(process_1.default.argv));
            const mainAppController = new MainAppController_1.MainAppController(fileLoader, webserver);
            global.mainAppController = mainAppController;
            const mainAppAPI = new MainAPI_1.MainAPI(mainAppController, webserver);
            mainAppAPI.start();
            const mainAppService = new DocLoaderService_1.DocLoaderService(mainAppController);
            mainAppService.start();
            const mainAppMenu = new MainAppMenu_1.MainAppMenu(mainAppController);
            mainAppMenu.setup();
            electron_1.app.on('open-file', (event, path) => __awaiter(this, void 0, void 0, function* () {
                log.info("Open file called for: ", path);
                FileImportClient_1.FileImportClient.send(FileImportRequests_1.FileImportRequests.fromPath(path));
            }));
            electron_1.app.on('second-instance', (event, commandLine) => __awaiter(this, void 0, void 0, function* () {
                log.info("Someone opened a second instance.");
                const fileArg = Cmdline_1.Cmdline.getDocArg(commandLine);
                if (fileArg) {
                    FileImportClient_1.FileImportClient.send(FileImportRequests_1.FileImportRequests.fromPath(fileArg));
                }
                else {
                    mainAppController.activateMainWindow();
                }
            }));
            electron_1.app.on('window-all-closed', function () {
                log.info("No windows left. Quitting app.");
                const forcedExit = () => {
                    try {
                        log.info("Forcing app quit...");
                        electron_1.app.quit();
                        log.info("Forcing process exit...");
                        process_1.default.exit();
                    }
                    catch (e) {
                        log.error("Unable to force exit: ", e);
                    }
                };
                const gracefulExit = () => {
                    try {
                        mainAppController.exitApp();
                    }
                    catch (e) {
                        log.error("Failed graceful exit: ", e);
                        forcedExit();
                    }
                };
                gracefulExit();
            });
            electron_1.app.on('activate', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const visibleWindows = electron_1.BrowserWindow.getAllWindows()
                        .filter(current => current.isVisible());
                    if (visibleWindows.length === 0) {
                        AppLauncher_1.AppLauncher.launchRepositoryApp()
                            .catch(err => log.error("Could not launch repository app: ", err));
                    }
                });
            });
            return { mainWindow, mainAppController };
        });
    }
}
exports.MainApp = MainApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbkFwcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1haW5BcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUFxRDtBQUNyRCw2RUFBd0U7QUFDeEUsdUVBQWtFO0FBQ2xFLG1GQUE4RTtBQUM5RSwyRUFBc0U7QUFDdEUsNkRBQXdEO0FBQ3hELGtGQUE2RTtBQUM3RSxvRkFBK0U7QUFDL0UsaUVBQTREO0FBQzVELDJEQUFzRDtBQUN0RCwrQ0FBMEM7QUFDMUMsb0RBQStDO0FBQy9DLGdEQUEyQztBQUUzQywyRUFBc0U7QUFDdEUsa0ZBQTZFO0FBQzdFLCtDQUEwQztBQUMxQyxvR0FBK0Y7QUFDL0YsK0dBQTBHO0FBQzFHLHNEQUE4QjtBQUM5Qiw2REFBd0Q7QUFDeEQsdUNBQWtDO0FBQ2xDLHlFQUFvRTtBQUNwRSxxRUFBZ0U7QUFDaEUsZ0ZBQTJFO0FBQzNFLDRFQUF1RTtBQUN2RSx3RUFBbUU7QUFDbkUseUVBQW9FO0FBSXBFLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUM7QUFJNUIsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7QUFFOUIsTUFBYSxPQUFPO0lBSWhCLFlBQVksU0FBb0I7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUVZLEtBQUs7O1lBRWQsbURBQXdCLENBQUMsUUFBUSxFQUFFLENBQUM7WUFJcEMsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBRWxDLE1BQU0sZUFBZSxHQUFHLGlDQUFlLENBQUMsTUFBTSxDQUFDO2dCQUMzQyxHQUFHLEVBQUUsaUJBQU8sQ0FBQyxHQUFHLEVBQUU7Z0JBQ2xCLElBQUksRUFBRSxjQUFjO2dCQUNwQixJQUFJLEVBQUUsV0FBVztnQkFDakIsTUFBTSxFQUFFLEtBQUs7YUFDaEIsQ0FBQyxDQUFD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QUFFLENBQUM7cUJBRWxCO29CQUFDLE9BQU8sQ0FBQyxFQUFFO3dCQUNSLEdBQUcsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxDQUFDLENBQUM7cUJBQzFDO2dCQUVMLENBQUMsQ0FBQztnQkFFRixNQUFNLFlBQVksR0FBRyxHQUFHLEVBQUU7b0JBRXRCLElBQUk7d0JBQ0EsaUJBQWlCLENBQUMsT0FBTyxFQUFFLENBQUM7cUJBQy9CO29CQUFDLE9BQU8sQ0FBQyxFQUFFO3dCQUNSLEdBQUcsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ3ZDLFVBQVUsRUFBRSxDQUFDO3FCQUVoQjtnQkFFTCxDQUFDLENBQUM7Z0JBRUYsWUFBWSxFQUFFLENBQUM7WUFHbkIsQ0FBQyxDQUFDLENBQUM7WUFFSCxjQUFHLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRTs7b0JBU2YsTUFBTSxjQUFjLEdBQUcsd0JBQWEsQ0FBQyxhQUFhLEVBQUU7eUJBQy9DLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO29CQUU1QyxJQUFJLGNBQWMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO3dCQUU3Qix5QkFBVyxDQUFDLG1CQUFtQixFQUFFOzZCQUM1QixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7cUJBRTFFO2dCQUVMLENBQUM7YUFBQSxDQUFDLENBQUM7WUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFFLGlCQUFpQixFQUFDLENBQUM7UUFFM0MsQ0FBQztLQUFBO0NBRUo7QUFsTUQsMEJBa01DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthcHAsIEJyb3dzZXJXaW5kb3csIHNlc3Npb259IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCB7V2Vic2VydmVyQ29uZmlnfSBmcm9tICcuLi8uLi9iYWNrZW5kL3dlYnNlcnZlci9XZWJzZXJ2ZXJDb25maWcnO1xuaW1wb3J0IHtGaWxlUmVnaXN0cnl9IGZyb20gJy4uLy4uL2JhY2tlbmQvd2Vic2VydmVyL0ZpbGVSZWdpc3RyeSc7XG5pbXBvcnQge1Byb3h5U2VydmVyQ29uZmlnfSBmcm9tICcuLi8uLi9iYWNrZW5kL3Byb3h5c2VydmVyL1Byb3h5U2VydmVyQ29uZmlnJztcbmltcG9ydCB7Q2FjaGVSZWdpc3RyeX0gZnJvbSAnLi4vLi4vYmFja2VuZC9wcm94eXNlcnZlci9DYWNoZVJlZ2lzdHJ5JztcbmltcG9ydCB7RGlyZWN0b3JpZXN9IGZyb20gJy4uLy4uL2RhdGFzdG9yZS9EaXJlY3Rvcmllcyc7XG5pbXBvcnQge0NhcHR1cmVDb250cm9sbGVyfSBmcm9tICcuLi8uLi9jYXB0dXJlL2NvbnRyb2xsZXIvQ2FwdHVyZUNvbnRyb2xsZXInO1xuaW1wb3J0IHtEaWFsb2dXaW5kb3dTZXJ2aWNlfSBmcm9tICcuLi8uLi91aS9kaWFsb2dfd2luZG93L0RpYWxvZ1dpbmRvd1NlcnZpY2UnO1xuaW1wb3J0IHtXZWJzZXJ2ZXJ9IGZyb20gJy4uLy4uL2JhY2tlbmQvd2Vic2VydmVyL1dlYnNlcnZlcic7XG5pbXBvcnQge01haW5BcHBDb250cm9sbGVyfSBmcm9tICcuL01haW5BcHBDb250cm9sbGVyJztcbmltcG9ydCB7TWFpbkFwcE1lbnV9IGZyb20gJy4vTWFpbkFwcE1lbnUnO1xuaW1wb3J0IHtDbWRsaW5lfSBmcm9tICcuLi8uLi9lbGVjdHJvbi9DbWRsaW5lJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7RGF0YXN0b3JlfSBmcm9tICcuLi8uLi9kYXRhc3RvcmUvRGF0YXN0b3JlJztcbmltcG9ydCB7U2NyZWVuc2hvdFNlcnZpY2V9IGZyb20gJy4uLy4uL3NjcmVlbnNob3RzL1NjcmVlbnNob3RTZXJ2aWNlJztcbmltcG9ydCB7RG9jTG9hZGVyU2VydmljZX0gZnJvbSAnLi9kb2NfbG9hZGVycy9lbGVjdHJvbi9pcGMvRG9jTG9hZGVyU2VydmljZSc7XG5pbXBvcnQge0FwcExhdW5jaGVyfSBmcm9tICcuL0FwcExhdW5jaGVyJztcbmltcG9ydCB7RG9jSW5mb0Jyb2FkY2FzdGVyU2VydmljZX0gZnJvbSAnLi4vLi4vZGF0YXN0b3JlL2FkdmVydGlzZXIvRG9jSW5mb0Jyb2FkY2FzdGVyU2VydmljZSc7XG5pbXBvcnQge0NhY2hpbmdTdHJlYW1JbnRlcmNlcHRvclNlcnZpY2V9IGZyb20gJy4uLy4uL2JhY2tlbmQvaW50ZXJjZXB0b3IvQ2FjaGluZ1N0cmVhbUludGVyY2VwdG9yU2VydmljZSc7XG5pbXBvcnQgcHJvY2VzcyBmcm9tIFwicHJvY2Vzc1wiO1xuaW1wb3J0IHtBcHBQYXRofSBmcm9tICcuLi8uLi9lbGVjdHJvbi9hcHBfcGF0aC9BcHBQYXRoJztcbmltcG9ydCB7TWFpbkFQSX0gZnJvbSAnLi9NYWluQVBJJztcbmltcG9ydCB7TWFpbkFwcEV4Y2VwdGlvbkhhbmRsZXJzfSBmcm9tICcuL01haW5BcHBFeGNlcHRpb25IYW5kbGVycyc7XG5pbXBvcnQge0ZpbGVJbXBvcnRDbGllbnR9IGZyb20gJy4uL3JlcG9zaXRvcnkvRmlsZUltcG9ydENsaWVudCc7XG5pbXBvcnQge1JlbmRlcmVyQW5hbHl0aWNzU2VydmljZX0gZnJvbSAnLi4vLi4vZ2EvUmVuZGVyZXJBbmFseXRpY3NTZXJ2aWNlJztcbmltcG9ydCB7QW5hbHl0aWNzRmlsZUxvYWRlcn0gZnJvbSAnLi9maWxlX2xvYWRlcnMvQW5hbHl0aWNzRmlsZUxvYWRlcic7XG5pbXBvcnQge0RlZmF1bHRGaWxlTG9hZGVyfSBmcm9tICcuL2ZpbGVfbG9hZGVycy9EZWZhdWx0RmlsZUxvYWRlcic7XG5pbXBvcnQge0ZpbGVJbXBvcnRSZXF1ZXN0c30gZnJvbSAnLi4vcmVwb3NpdG9yeS9GaWxlSW1wb3J0UmVxdWVzdHMnO1xuXG5kZWNsYXJlIHZhciBnbG9iYWw6IGFueTtcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5jb25zdCBXRUJTRVJWRVJfUE9SVCA9IDg1MDA7XG5cbi8vIFRPRE86IHJlZmFjdG9yIHRoZSBwcm94eSBzZXJ2ZXIgaXNuJ3QgdXNlZCBhbnkgbG9uZ2VyIGJ1dCBpdCBpcyByZWZlcmVuY2VkXG4vLyBpbiBhIG51bWJlciBvZiBwbGFjZXMgaW5jbHVkaW5nIHRoZSBjYWNoZSBjb25maWcgYW5kIHJlZ2lzdHJ5LlxuY29uc3QgUFJPWFlTRVJWRVJfUE9SVCA9IDg2MDA7XG5cbmV4cG9ydCBjbGFzcyBNYWluQXBwIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGF0YXN0b3JlOiBEYXRhc3RvcmU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhc3RvcmU6IERhdGFzdG9yZSkge1xuICAgICAgICB0aGlzLmRhdGFzdG9yZSA9IGRhdGFzdG9yZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc3RhcnQoKTogUHJvbWlzZTxNYWluQXBwU3RhcnRlZD4ge1xuXG4gICAgICAgIE1haW5BcHBFeGNlcHRpb25IYW5kbGVycy5yZWdpc3RlcigpO1xuXG4gICAgICAgIC8vIHNoYXJlIHRoZSBkaXNrIGRhdGFzdG9yZSB3aXRoIHRoZSByZW1vdGUuXG4gICAgICAgIC8vIFRPRE86IG1vdmUgdGhpcyBzbyB0aGF0IHdlIGRvbid0IGV4cG9zZSAnZ2xvYmFsJyBoZXJlLlxuICAgICAgICBnbG9iYWwuZGF0YXN0b3JlID0gdGhpcy5kYXRhc3RvcmU7XG5cbiAgICAgICAgY29uc3Qgd2Vic2VydmVyQ29uZmlnID0gV2Vic2VydmVyQ29uZmlnLmNyZWF0ZSh7XG4gICAgICAgICAgICBkaXI6IEFwcFBhdGguZ2V0KCksXG4gICAgICAgICAgICBwb3J0OiBXRUJTRVJWRVJfUE9SVCxcbiAgICAgICAgICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxuICAgICAgICAgICAgdXNlU1NMOiBmYWxzZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZmlsZVJlZ2lzdHJ5ID0gbmV3IEZpbGVSZWdpc3RyeSh3ZWJzZXJ2ZXJDb25maWcpO1xuXG4gICAgICAgIGNvbnN0IHByb3h5U2VydmVyQ29uZmlnID0gbmV3IFByb3h5U2VydmVyQ29uZmlnKFBST1hZU0VSVkVSX1BPUlQpO1xuICAgICAgICBjb25zdCBjYWNoZVJlZ2lzdHJ5ID0gbmV3IENhY2hlUmVnaXN0cnkocHJveHlTZXJ2ZXJDb25maWcpO1xuXG4gICAgICAgIGNvbnN0IGRpcmVjdG9yaWVzID0gbmV3IERpcmVjdG9yaWVzKCk7XG5cbiAgICAgICAgY29uc3QgY2FwdHVyZUNvbnRyb2xsZXIgPSBuZXcgQ2FwdHVyZUNvbnRyb2xsZXIoY2FjaGVSZWdpc3RyeSk7XG5cbiAgICAgICAgY29uc3QgZGlhbG9nV2luZG93U2VydmljZSA9IG5ldyBEaWFsb2dXaW5kb3dTZXJ2aWNlKCk7XG5cbiAgICAgICAgY29uc3QgZGVmYXVsdEZpbGVMb2FkZXIgPSBuZXcgRGVmYXVsdEZpbGVMb2FkZXIoZmlsZVJlZ2lzdHJ5LCBjYWNoZVJlZ2lzdHJ5KTtcblxuICAgICAgICBjb25zdCBzY3JlZW5zaG90U2VydmljZSA9IG5ldyBTY3JlZW5zaG90U2VydmljZSgpO1xuICAgICAgICBzY3JlZW5zaG90U2VydmljZS5zdGFydCgpO1xuXG4gICAgICAgIG5ldyBSZW5kZXJlckFuYWx5dGljc1NlcnZpY2UoKS5zdGFydCgpO1xuXG4gICAgICAgIGF3YWl0IGRpcmVjdG9yaWVzLmluaXQoKTtcblxuICAgICAgICBsb2cuaW5mbyhcIkVsZWN0cm9uIGFwcCBwYXRoIGlzOiBcIiArIGFwcC5nZXRBcHBQYXRoKCkpO1xuXG4gICAgICAgIC8vICoqKiBzdGFydCB0aGUgd2Vic2VydmVyXG5cbiAgICAgICAgY29uc3Qgd2Vic2VydmVyID0gbmV3IFdlYnNlcnZlcih3ZWJzZXJ2ZXJDb25maWcsIGZpbGVSZWdpc3RyeSk7XG4gICAgICAgIGF3YWl0IHdlYnNlcnZlci5zdGFydCgpO1xuXG4gICAgICAgIGxvZy5pbmZvKFwiQXBwIGxvYWRlZCBmcm9tOiBcIiwgYXBwLmdldEFwcFBhdGgoKSk7XG4gICAgICAgIGxvZy5pbmZvKFwiU3Rhc2ggZGlyOiBcIiwgZGlyZWN0b3JpZXMuc3Rhc2hEaXIpO1xuICAgICAgICBsb2cuaW5mbyhcIkxvZ3MgZGlyOiBcIiwgZGlyZWN0b3JpZXMubG9nc0Rpcik7XG5cbiAgICAgICAgLy8gTk9URTogcmVtb3ZpbmcgdGhlIG5leHQgdGhyZWUgbGluZXMgcmVtb3ZlcyB0aGUgY29sb3JzIGluIHRoZVxuICAgICAgICAvLyB0b29sYmFyLiBjb25zdCBhcHBJY29uID0gbmV3IFRyYXkoYXBwX2ljb24pO1xuICAgICAgICAvLyBhcHBJY29uLnNldFRvb2xUaXAoJ1BvbGFyIEJvb2tzaGVsZicpO1xuICAgICAgICAvLyBhcHBJY29uLnNldENvbnRleHRNZW51KGNvbnRleHRNZW51KTtcblxuICAgICAgICBjb25zdCBtYWluV2luZG93ID0gYXdhaXQgQXBwTGF1bmNoZXIubGF1bmNoUmVwb3NpdG9yeUFwcCgpO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBhIHNlc3Npb24gYW5kIGNvbmZpZ3VyZSBpdCBmb3IgdGhlIHBvbGFyIHdoaWNoIGlzIHBlcnNpc3RlbnRcbiAgICAgICAgLy8gYWNyb3NzIHJlc3RhcnRzIHNvIHRoYXQgd2UgZG8gbm90IGxvc2UgY29va2llcywgZXRjLlxuXG4gICAgICAgIGNvbnN0IG1haW5TZXNzaW9uID0gc2Vzc2lvbi5mcm9tUGFydGl0aW9uKCdwZXJzaXN0OnBvbGFyJyk7XG5cbiAgICAgICAgLy8gbWFpblNlc3Npb24uY29va2llcy5nZXQoe30sIChlcnIsIGNvb2tpZXMpID0+IHtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgIGNvb2tpZXMuZmlsdGVyKGNvb2tpZSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJGb3VuZCBjb29raWU6IFwiICwgY29va2llKTtcbiAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAvL1xuICAgICAgICAvLyB9KTtcblxuICAgICAgICBjb25zdCBjYWNoZUludGVyY2VwdG9yU2VydmljZSA9XG4gICAgICAgICAgICBuZXcgQ2FjaGluZ1N0cmVhbUludGVyY2VwdG9yU2VydmljZShjYWNoZVJlZ2lzdHJ5LCBtYWluU2Vzc2lvbi5wcm90b2NvbCk7XG5cbiAgICAgICAgYXdhaXQgY2FjaGVJbnRlcmNlcHRvclNlcnZpY2Uuc3RhcnQoKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoZXJyKSk7XG5cbiAgICAgICAgYXdhaXQgY2FwdHVyZUNvbnRyb2xsZXIuc3RhcnQoKTtcblxuICAgICAgICBhd2FpdCBkaWFsb2dXaW5kb3dTZXJ2aWNlLnN0YXJ0KCk7XG5cbiAgICAgICAgY29uc3QgdXNlckFnZW50ID0gbWFpbldpbmRvdy53ZWJDb250ZW50cy5nZXRVc2VyQWdlbnQoKTtcblxuICAgICAgICBjb25zdCBmaWxlTG9hZGVyID0gbmV3IEFuYWx5dGljc0ZpbGVMb2FkZXIoZGVmYXVsdEZpbGVMb2FkZXIpO1xuXG4gICAgICAgIGF3YWl0IG5ldyBEb2NJbmZvQnJvYWRjYXN0ZXJTZXJ2aWNlKCkuc3RhcnQoKTtcblxuICAgICAgICBsb2cuaW5mbyhcIlJ1bm5pbmcgd2l0aCBwcm9jZXNzLmFyZ3M6IFwiLCBKU09OLnN0cmluZ2lmeShwcm9jZXNzLmFyZ3YpKTtcblxuICAgICAgICBjb25zdCBtYWluQXBwQ29udHJvbGxlciA9IG5ldyBNYWluQXBwQ29udHJvbGxlcihmaWxlTG9hZGVyLCB3ZWJzZXJ2ZXIpO1xuXG4gICAgICAgIGdsb2JhbC5tYWluQXBwQ29udHJvbGxlciA9IG1haW5BcHBDb250cm9sbGVyO1xuXG4gICAgICAgIGNvbnN0IG1haW5BcHBBUEkgPSBuZXcgTWFpbkFQSShtYWluQXBwQ29udHJvbGxlciwgd2Vic2VydmVyKTtcbiAgICAgICAgbWFpbkFwcEFQSS5zdGFydCgpO1xuXG4gICAgICAgIGNvbnN0IG1haW5BcHBTZXJ2aWNlID0gbmV3IERvY0xvYWRlclNlcnZpY2UobWFpbkFwcENvbnRyb2xsZXIpO1xuICAgICAgICBtYWluQXBwU2VydmljZS5zdGFydCgpO1xuXG4gICAgICAgIC8vIFRPRE86IGhhbmRsZSB0aGUgY29tbWFuZCBsaW5lIGhlcmUuLiBJRSBpZiBzb21lb25lIG9wZW5zIHVwIGEgZmlsZVxuICAgICAgICAvLyB2aWEgYXJndW1lbnQuXG5cbiAgICAgICAgY29uc3QgbWFpbkFwcE1lbnUgPSBuZXcgTWFpbkFwcE1lbnUobWFpbkFwcENvbnRyb2xsZXIpO1xuICAgICAgICBtYWluQXBwTWVudS5zZXR1cCgpO1xuXG4gICAgICAgIGFwcC5vbignb3Blbi1maWxlJywgYXN5bmMgKGV2ZW50LCBwYXRoKSA9PiB7XG5cbiAgICAgICAgICAgIGxvZy5pbmZvKFwiT3BlbiBmaWxlIGNhbGxlZCBmb3I6IFwiLCBwYXRoKTtcbiAgICAgICAgICAgIEZpbGVJbXBvcnRDbGllbnQuc2VuZChGaWxlSW1wb3J0UmVxdWVzdHMuZnJvbVBhdGgocGF0aCkpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFwcC5vbignc2Vjb25kLWluc3RhbmNlJywgYXN5bmMgKGV2ZW50LCBjb21tYW5kTGluZSkgPT4ge1xuXG4gICAgICAgICAgICBsb2cuaW5mbyhcIlNvbWVvbmUgb3BlbmVkIGEgc2Vjb25kIGluc3RhbmNlLlwiKTtcblxuICAgICAgICAgICAgY29uc3QgZmlsZUFyZyA9IENtZGxpbmUuZ2V0RG9jQXJnKGNvbW1hbmRMaW5lKTtcblxuICAgICAgICAgICAgaWYgKGZpbGVBcmcpIHtcblxuICAgICAgICAgICAgICAgIEZpbGVJbXBvcnRDbGllbnQuc2VuZChGaWxlSW1wb3J0UmVxdWVzdHMuZnJvbVBhdGgoZmlsZUFyZykpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1haW5BcHBDb250cm9sbGVyLmFjdGl2YXRlTWFpbldpbmRvdygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHF1aXQgd2hlbiBhbGwgd2luZG93cyBhcmUgY2xvc2VkLlxuICAgICAgICBhcHAub24oJ3dpbmRvdy1hbGwtY2xvc2VkJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIC8vIGRldGVybWluZSBpZiB3ZSBuZWVkIHRvIHF1aXQ6XG4gICAgICAgICAgICBsb2cuaW5mbyhcIk5vIHdpbmRvd3MgbGVmdC4gUXVpdHRpbmcgYXBwLlwiKTtcblxuICAgICAgICAgICAgY29uc3QgZm9yY2VkRXhpdCA9ICgpID0+IHtcblxuICAgICAgICAgICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbG9nLmluZm8oXCJGb3JjaW5nIGFwcCBxdWl0Li4uXCIpO1xuICAgICAgICAgICAgICAgICAgICBhcHAucXVpdCgpO1xuICAgICAgICAgICAgICAgICAgICBsb2cuaW5mbyhcIkZvcmNpbmcgcHJvY2VzcyBleGl0Li4uXCIpO1xuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmV4aXQoKTtcblxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nLmVycm9yKFwiVW5hYmxlIHRvIGZvcmNlIGV4aXQ6IFwiLCBlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGdyYWNlZnVsRXhpdCA9ICgpID0+IHtcblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIG1haW5BcHBDb250cm9sbGVyLmV4aXRBcHAoKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZy5lcnJvcihcIkZhaWxlZCBncmFjZWZ1bCBleGl0OiBcIiwgZSk7XG4gICAgICAgICAgICAgICAgICAgIGZvcmNlZEV4aXQoKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZ3JhY2VmdWxFeGl0KCk7XG5cblxuICAgICAgICB9KTtcblxuICAgICAgICBhcHAub24oJ2FjdGl2YXRlJywgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIC8vIE9uIE9TIFggaXQncyBjb21tb24gdG8gcmUtY3JlYXRlIGEgd2luZG93IGluIHRoZSBhcHAgd2hlbiB0aGVcbiAgICAgICAgICAgIC8vIGRvY2sgaWNvbiBpcyBjbGlja2VkIGFuZCB0aGVyZSBhcmUgbm8gb3RoZXIgd2luZG93cyBvcGVuLiBUaGVcbiAgICAgICAgICAgIC8vIHdheVxuICAgICAgICAgICAgLy8gd2UgaGFuZGxlIHRoaXMgbm93IGlzIHRoYXQgaWYgdGhlcmUgYXJlIG5vIHdpbmRvd3Mgb3BlbiB3ZVxuICAgICAgICAgICAgLy8gcmUtY3JlYXRlIHRoZSBkb2N1bWVudCByZXBvc2l0b3J5IHNvIHRoZXkgY2FuIHNlbGVjdCBvbmUuXG4gICAgICAgICAgICAvLyBPdGhlcndpc2Ugd2UganVzdCByZS1mb2N1cyB0aGUgbW9zdCByZWNlbnRseSB1c2VkIHdpbmRvdy5cblxuICAgICAgICAgICAgY29uc3QgdmlzaWJsZVdpbmRvd3MgPSBCcm93c2VyV2luZG93LmdldEFsbFdpbmRvd3MoKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoY3VycmVudCA9PiBjdXJyZW50LmlzVmlzaWJsZSgpKTtcblxuICAgICAgICAgICAgaWYgKHZpc2libGVXaW5kb3dzLmxlbmd0aCA9PT0gMCkge1xuXG4gICAgICAgICAgICAgICAgQXBwTGF1bmNoZXIubGF1bmNoUmVwb3NpdG9yeUFwcCgpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gbG9nLmVycm9yKFwiQ291bGQgbm90IGxhdW5jaCByZXBvc2l0b3J5IGFwcDogXCIsIGVycikpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHttYWluV2luZG93LCBtYWluQXBwQ29udHJvbGxlcn07XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYWluQXBwU3RhcnRlZCB7XG4gICAgbWFpbldpbmRvdzogQnJvd3NlcldpbmRvdztcbiAgICBtYWluQXBwQ29udHJvbGxlcjogTWFpbkFwcENvbnRyb2xsZXI7XG59XG5cbiJdfQ==