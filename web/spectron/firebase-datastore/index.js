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
const SpectronMain2_1 = require("../../js/test/SpectronMain2");
const WebserverConfig_1 = require("../../js/backend/webserver/WebserverConfig");
const Webserver_1 = require("../../js/backend/webserver/Webserver");
const FileRegistry_1 = require("../../js/backend/webserver/FileRegistry");
const SpectronBrowserWindowOptions_1 = require("../../js/test/SpectronBrowserWindowOptions");
const PolarDataDir_1 = require("../../js/test/PolarDataDir");
const AppPath_1 = require("../../js/electron/app_path/AppPath");
function defaultWindowFactory() {
    return __awaiter(this, void 0, void 0, function* () {
        const mainWindow = new electron_1.BrowserWindow(SpectronBrowserWindowOptions_1.SpectronBrowserWindowOptions.create());
        mainWindow.loadURL('about:blank');
        return mainWindow;
    });
}
const options = {
    windowFactory: defaultWindowFactory
};
AppPath_1.AppPath.set(__dirname);
SpectronMain2_1.SpectronMain2.create(options).run((state) => __awaiter(this, void 0, void 0, function* () {
    yield PolarDataDir_1.PolarDataDir.useFreshDirectory('.polar-firebase-datastore');
    console.log("Running with app path: " + electron_1.app.getAppPath());
    const webserverConfig = new WebserverConfig_1.WebserverConfig(AppPath_1.AppPath.get(), 8005);
    const fileRegistry = new FileRegistry_1.FileRegistry(webserverConfig);
    const webserver = new Webserver_1.Webserver(webserverConfig, fileRegistry);
    try {
        yield webserver.start();
    }
    catch (e) {
        console.warn("Webserver already running.");
    }
    const url = `http://localhost:8005/content.html`;
    state.window.loadURL(url);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUNBQTRDO0FBQzVDLCtEQUFnRjtBQUNoRixnRkFBMkU7QUFDM0Usb0VBQStEO0FBQy9ELDBFQUFxRTtBQUNyRSw2RkFBd0Y7QUFDeEYsNkRBQXdEO0FBR3hELGdFQUEyRDtBQUczRCxTQUFlLG9CQUFvQjs7UUFDL0IsTUFBTSxVQUFVLEdBQUcsSUFBSSx3QkFBYSxDQUFDLDJEQUE0QixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFFNUUsVUFBVSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNsQyxPQUFPLFVBQVUsQ0FBQztJQUN0QixDQUFDO0NBQUE7QUFHRCxNQUFNLE9BQU8sR0FBeUI7SUFDbEMsYUFBYSxFQUFFLG9CQUFvQjtDQUN0QyxDQUFDO0FBRUYsaUJBQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFdkIsNkJBQWEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQU0sS0FBSyxFQUFDLEVBQUU7SUFFNUMsTUFBTSwyQkFBWSxDQUFDLGlCQUFpQixDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFLbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsR0FBRyxjQUFHLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUUxRCxNQUFNLGVBQWUsR0FBRyxJQUFJLGlDQUFlLENBQUMsaUJBQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVqRSxNQUFNLFlBQVksR0FBRyxJQUFJLDJCQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDdkQsTUFBTSxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLGVBQWUsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUUvRCxJQUFJO1FBQ0EsTUFBTSxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDM0I7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNSLE9BQU8sQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQztLQUM5QztJQUtELE1BQU0sR0FBRyxHQUFHLG9DQUFvQyxDQUFDO0lBQ2pELEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBRTlCLENBQUMsQ0FBQSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FwcCwgQnJvd3NlcldpbmRvd30gZnJvbSAnZWxlY3Ryb24nO1xuaW1wb3J0IHtJU3BlY3Ryb25NYWluT3B0aW9ucywgU3BlY3Ryb25NYWluMn0gZnJvbSAnLi4vLi4vanMvdGVzdC9TcGVjdHJvbk1haW4yJztcbmltcG9ydCB7V2Vic2VydmVyQ29uZmlnfSBmcm9tICcuLi8uLi9qcy9iYWNrZW5kL3dlYnNlcnZlci9XZWJzZXJ2ZXJDb25maWcnO1xuaW1wb3J0IHtXZWJzZXJ2ZXJ9IGZyb20gJy4uLy4uL2pzL2JhY2tlbmQvd2Vic2VydmVyL1dlYnNlcnZlcic7XG5pbXBvcnQge0ZpbGVSZWdpc3RyeX0gZnJvbSAnLi4vLi4vanMvYmFja2VuZC93ZWJzZXJ2ZXIvRmlsZVJlZ2lzdHJ5JztcbmltcG9ydCB7U3BlY3Ryb25Ccm93c2VyV2luZG93T3B0aW9uc30gZnJvbSAnLi4vLi4vanMvdGVzdC9TcGVjdHJvbkJyb3dzZXJXaW5kb3dPcHRpb25zJztcbmltcG9ydCB7UG9sYXJEYXRhRGlyfSBmcm9tICcuLi8uLi9qcy90ZXN0L1BvbGFyRGF0YURpcic7XG5pbXBvcnQge0ZpbGVQYXRoc30gZnJvbSAnLi4vLi4vanMvdXRpbC9GaWxlUGF0aHMnO1xuaW1wb3J0IHByb2Nlc3MgZnJvbSBcInByb2Nlc3NcIjtcbmltcG9ydCB7QXBwUGF0aH0gZnJvbSAnLi4vLi4vanMvZWxlY3Ryb24vYXBwX3BhdGgvQXBwUGF0aCc7XG5cblxuYXN5bmMgZnVuY3Rpb24gZGVmYXVsdFdpbmRvd0ZhY3RvcnkoKTogUHJvbWlzZTxCcm93c2VyV2luZG93PiB7XG4gICAgY29uc3QgbWFpbldpbmRvdyA9IG5ldyBCcm93c2VyV2luZG93KFNwZWN0cm9uQnJvd3NlcldpbmRvd09wdGlvbnMuY3JlYXRlKCkpO1xuICAgIC8vIG1haW5XaW5kb3cud2ViQ29udGVudHMudG9nZ2xlRGV2VG9vbHMoKTtcbiAgICBtYWluV2luZG93LmxvYWRVUkwoJ2Fib3V0OmJsYW5rJyk7XG4gICAgcmV0dXJuIG1haW5XaW5kb3c7XG59XG5cblxuY29uc3Qgb3B0aW9uczogSVNwZWN0cm9uTWFpbk9wdGlvbnMgPSB7XG4gICAgd2luZG93RmFjdG9yeTogZGVmYXVsdFdpbmRvd0ZhY3Rvcnlcbn07XG5cbkFwcFBhdGguc2V0KF9fZGlybmFtZSk7XG5cblNwZWN0cm9uTWFpbjIuY3JlYXRlKG9wdGlvbnMpLnJ1bihhc3luYyBzdGF0ZSA9PiB7XG5cbiAgICBhd2FpdCBQb2xhckRhdGFEaXIudXNlRnJlc2hEaXJlY3RvcnkoJy5wb2xhci1maXJlYmFzZS1kYXRhc3RvcmUnKTtcblxuICAgIC8vIHRoZSB3ZWJzZXJ2ZXIgbXVzdCBiZSBydW5uaW5nIGFzIGZpcmViYXNlIHdvbid0IGxvYWQgd2l0aG91dCBiZWluZyBvbiBhblxuICAgIC8vIEhUVFAgVVJMXG5cbiAgICBjb25zb2xlLmxvZyhcIlJ1bm5pbmcgd2l0aCBhcHAgcGF0aDogXCIgKyBhcHAuZ2V0QXBwUGF0aCgpKTtcblxuICAgIGNvbnN0IHdlYnNlcnZlckNvbmZpZyA9IG5ldyBXZWJzZXJ2ZXJDb25maWcoQXBwUGF0aC5nZXQoKSwgODAwNSk7XG5cbiAgICBjb25zdCBmaWxlUmVnaXN0cnkgPSBuZXcgRmlsZVJlZ2lzdHJ5KHdlYnNlcnZlckNvbmZpZyk7XG4gICAgY29uc3Qgd2Vic2VydmVyID0gbmV3IFdlYnNlcnZlcih3ZWJzZXJ2ZXJDb25maWcsIGZpbGVSZWdpc3RyeSk7XG5cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCB3ZWJzZXJ2ZXIuc3RhcnQoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIldlYnNlcnZlciBhbHJlYWR5IHJ1bm5pbmcuXCIpO1xuICAgIH1cblxuICAgIC8vIGNvbnN0IHBhdGggPSBGaWxlUGF0aHMuY3JlYXRlKF9fZGlybmFtZSwgXCJjb250ZW50Lmh0bWxcIik7XG4gICAgLy8gc3RhdGUud2luZG93LmxvYWRGaWxlKHBhdGgpO1xuXG4gICAgY29uc3QgdXJsID0gYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwNS9jb250ZW50Lmh0bWxgO1xuICAgIHN0YXRlLndpbmRvdy5sb2FkVVJMKHVybCk7XG5cbn0pO1xuXG5cbiJdfQ==