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
    const appDir = __dirname;
    const webserverConfig = new WebserverConfig_1.WebserverConfig(appDir, 8005);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUNBQTRDO0FBQzVDLCtEQUFnRjtBQUNoRixnRkFBMkU7QUFDM0Usb0VBQStEO0FBQy9ELDBFQUFxRTtBQUNyRSw2RkFBd0Y7QUFDeEYsNkRBQXdEO0FBRXhELGdFQUEyRDtBQUUzRCxTQUFlLG9CQUFvQjs7UUFDL0IsTUFBTSxVQUFVLEdBQUcsSUFBSSx3QkFBYSxDQUFDLDJEQUE0QixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDNUUsVUFBVSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNsQyxPQUFPLFVBQVUsQ0FBQztJQUN0QixDQUFDO0NBQUE7QUFHRCxNQUFNLE9BQU8sR0FBeUI7SUFDbEMsYUFBYSxFQUFFLG9CQUFvQjtDQUN0QyxDQUFDO0FBTUYsaUJBQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFdkIsNkJBQWEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQU0sS0FBSyxFQUFDLEVBQUU7SUFFNUMsTUFBTSwyQkFBWSxDQUFDLGlCQUFpQixDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFLbEUsTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDO0lBQ3pCLE1BQU0sZUFBZSxHQUFHLElBQUksaUNBQWUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFMUQsTUFBTSxZQUFZLEdBQUcsSUFBSSwyQkFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3ZELE1BQU0sU0FBUyxHQUFHLElBQUkscUJBQVMsQ0FBQyxlQUFlLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFFL0QsSUFBSTtRQUNBLE1BQU0sU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQzNCO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDUixPQUFPLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUM7S0FDOUM7SUFFRCxNQUFNLEdBQUcsR0FBRyxvQ0FBb0MsQ0FBQztJQUNqRCxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUU5QixDQUFDLENBQUEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthcHAsIEJyb3dzZXJXaW5kb3d9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCB7SVNwZWN0cm9uTWFpbk9wdGlvbnMsIFNwZWN0cm9uTWFpbjJ9IGZyb20gJy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb25NYWluMic7XG5pbXBvcnQge1dlYnNlcnZlckNvbmZpZ30gZnJvbSAnLi4vLi4vanMvYmFja2VuZC93ZWJzZXJ2ZXIvV2Vic2VydmVyQ29uZmlnJztcbmltcG9ydCB7V2Vic2VydmVyfSBmcm9tICcuLi8uLi9qcy9iYWNrZW5kL3dlYnNlcnZlci9XZWJzZXJ2ZXInO1xuaW1wb3J0IHtGaWxlUmVnaXN0cnl9IGZyb20gJy4uLy4uL2pzL2JhY2tlbmQvd2Vic2VydmVyL0ZpbGVSZWdpc3RyeSc7XG5pbXBvcnQge1NwZWN0cm9uQnJvd3NlcldpbmRvd09wdGlvbnN9IGZyb20gJy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb25Ccm93c2VyV2luZG93T3B0aW9ucyc7XG5pbXBvcnQge1BvbGFyRGF0YURpcn0gZnJvbSAnLi4vLi4vanMvdGVzdC9Qb2xhckRhdGFEaXInO1xuaW1wb3J0IHtGaWxlUGF0aHN9IGZyb20gJy4uLy4uL2pzL3V0aWwvRmlsZVBhdGhzJztcbmltcG9ydCB7QXBwUGF0aH0gZnJvbSAnLi4vLi4vanMvZWxlY3Ryb24vYXBwX3BhdGgvQXBwUGF0aCc7XG5cbmFzeW5jIGZ1bmN0aW9uIGRlZmF1bHRXaW5kb3dGYWN0b3J5KCk6IFByb21pc2U8QnJvd3NlcldpbmRvdz4ge1xuICAgIGNvbnN0IG1haW5XaW5kb3cgPSBuZXcgQnJvd3NlcldpbmRvdyhTcGVjdHJvbkJyb3dzZXJXaW5kb3dPcHRpb25zLmNyZWF0ZSgpKTtcbiAgICBtYWluV2luZG93LmxvYWRVUkwoJ2Fib3V0OmJsYW5rJyk7XG4gICAgcmV0dXJuIG1haW5XaW5kb3c7XG59XG5cblxuY29uc3Qgb3B0aW9uczogSVNwZWN0cm9uTWFpbk9wdGlvbnMgPSB7XG4gICAgd2luZG93RmFjdG9yeTogZGVmYXVsdFdpbmRvd0ZhY3Rvcnlcbn07XG5cbi8vIFRPRE86IHRoZSBtYWluIHByb2JsZW1zIHdpdGggdGhlIGhvbWUgZGlyIGFyZSBub3c6XG4vLyBGSVhNRTogd2UgaGF2ZSB0byB1c2UgcmVtb3RlIHRvIGdldCB0aGUgZGlyZWN0b3J5IHRvIHJlcXVpcmUoKSBvdXIgZmlsZXMgZnJvbVxuLy9cblxuQXBwUGF0aC5zZXQoX19kaXJuYW1lKTtcblxuU3BlY3Ryb25NYWluMi5jcmVhdGUob3B0aW9ucykucnVuKGFzeW5jIHN0YXRlID0+IHtcblxuICAgIGF3YWl0IFBvbGFyRGF0YURpci51c2VGcmVzaERpcmVjdG9yeSgnLnBvbGFyLWZpcmViYXNlLWRhdGFzdG9yZScpO1xuXG4gICAgLy8gdGhlIHdlYnNlcnZlciBtdXN0IGJlIHJ1bm5pbmcgYXMgZmlyZWJhc2Ugd29uJ3QgbG9hZCB3aXRob3V0IGJlaW5nIG9uIGFuXG4gICAgLy8gSFRUUCBVUkxcblxuICAgIGNvbnN0IGFwcERpciA9IF9fZGlybmFtZTtcbiAgICBjb25zdCB3ZWJzZXJ2ZXJDb25maWcgPSBuZXcgV2Vic2VydmVyQ29uZmlnKGFwcERpciwgODAwNSk7XG5cbiAgICBjb25zdCBmaWxlUmVnaXN0cnkgPSBuZXcgRmlsZVJlZ2lzdHJ5KHdlYnNlcnZlckNvbmZpZyk7XG4gICAgY29uc3Qgd2Vic2VydmVyID0gbmV3IFdlYnNlcnZlcih3ZWJzZXJ2ZXJDb25maWcsIGZpbGVSZWdpc3RyeSk7XG5cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCB3ZWJzZXJ2ZXIuc3RhcnQoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIldlYnNlcnZlciBhbHJlYWR5IHJ1bm5pbmcuXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHVybCA9IGBodHRwOi8vbG9jYWxob3N0OjgwMDUvY29udGVudC5odG1sYDtcbiAgICBzdGF0ZS53aW5kb3cubG9hZFVSTCh1cmwpO1xuXG59KTtcblxuXG5cblxuIl19