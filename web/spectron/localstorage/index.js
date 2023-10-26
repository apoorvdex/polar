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
    const appDir = process.cwd();
    const webserverConfig = new WebserverConfig_1.WebserverConfig(appDir, 8005);
    const fileRegistry = new FileRegistry_1.FileRegistry(webserverConfig);
    const webserver = new Webserver_1.Webserver(webserverConfig, fileRegistry);
    try {
        yield webserver.start();
    }
    catch (e) {
        console.warn("Webserver already running.");
    }
    state.window.loadURL(`http://localhost:8005/web/spectron/localstorage/content.html`);
    const window = yield defaultWindowFactory();
    window.loadURL(`http://localhost:8005/web/spectron/localstorage/content2.html`);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUNBQTRDO0FBQzVDLCtEQUFnRjtBQUNoRixnRkFBMkU7QUFDM0Usb0VBQStEO0FBQy9ELDBFQUFxRTtBQUNyRSw2RkFBd0Y7QUFHeEYsZ0VBQTJEO0FBRTNELFNBQWUsb0JBQW9COztRQUMvQixNQUFNLFVBQVUsR0FBRyxJQUFJLHdCQUFhLENBQUMsMkRBQTRCLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUM1RSxVQUFVLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sVUFBVSxDQUFDO0lBQ3RCLENBQUM7Q0FBQTtBQUVELE1BQU0sT0FBTyxHQUF5QjtJQUNsQyxhQUFhLEVBQUUsb0JBQW9CO0NBQ3RDLENBQUM7QUFFRixpQkFBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUV2Qiw2QkFBYSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBTSxLQUFLLEVBQUMsRUFBRTtJQUU1QyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDN0IsTUFBTSxlQUFlLEdBQUcsSUFBSSxpQ0FBZSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUUxRCxNQUFNLFlBQVksR0FBRyxJQUFJLDJCQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDdkQsTUFBTSxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLGVBQWUsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUUvRCxJQUFJO1FBQ0EsTUFBTSxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDM0I7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNSLE9BQU8sQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQztLQUM5QztJQUVELEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLDhEQUE4RCxDQUFDLENBQUM7SUFFckYsTUFBTSxNQUFNLEdBQUcsTUFBTSxvQkFBb0IsRUFBRSxDQUFDO0lBQzVDLE1BQU0sQ0FBQyxPQUFPLENBQUMsK0RBQStELENBQUMsQ0FBQztBQUVwRixDQUFDLENBQUEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthcHAsIEJyb3dzZXJXaW5kb3d9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCB7SVNwZWN0cm9uTWFpbk9wdGlvbnMsIFNwZWN0cm9uTWFpbjJ9IGZyb20gJy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb25NYWluMic7XG5pbXBvcnQge1dlYnNlcnZlckNvbmZpZ30gZnJvbSAnLi4vLi4vanMvYmFja2VuZC93ZWJzZXJ2ZXIvV2Vic2VydmVyQ29uZmlnJztcbmltcG9ydCB7V2Vic2VydmVyfSBmcm9tICcuLi8uLi9qcy9iYWNrZW5kL3dlYnNlcnZlci9XZWJzZXJ2ZXInO1xuaW1wb3J0IHtGaWxlUmVnaXN0cnl9IGZyb20gJy4uLy4uL2pzL2JhY2tlbmQvd2Vic2VydmVyL0ZpbGVSZWdpc3RyeSc7XG5pbXBvcnQge1NwZWN0cm9uQnJvd3NlcldpbmRvd09wdGlvbnN9IGZyb20gJy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb25Ccm93c2VyV2luZG93T3B0aW9ucyc7XG5pbXBvcnQge1BvbGFyRGF0YURpcn0gZnJvbSAnLi4vLi4vanMvdGVzdC9Qb2xhckRhdGFEaXInO1xuaW1wb3J0IHtGaWxlUGF0aHN9IGZyb20gJy4uLy4uL2pzL3V0aWwvRmlsZVBhdGhzJztcbmltcG9ydCB7QXBwUGF0aH0gZnJvbSAnLi4vLi4vanMvZWxlY3Ryb24vYXBwX3BhdGgvQXBwUGF0aCc7XG5cbmFzeW5jIGZ1bmN0aW9uIGRlZmF1bHRXaW5kb3dGYWN0b3J5KCk6IFByb21pc2U8QnJvd3NlcldpbmRvdz4ge1xuICAgIGNvbnN0IG1haW5XaW5kb3cgPSBuZXcgQnJvd3NlcldpbmRvdyhTcGVjdHJvbkJyb3dzZXJXaW5kb3dPcHRpb25zLmNyZWF0ZSgpKTtcbiAgICBtYWluV2luZG93LmxvYWRVUkwoJ2Fib3V0OmJsYW5rJyk7XG4gICAgcmV0dXJuIG1haW5XaW5kb3c7XG59XG5cbmNvbnN0IG9wdGlvbnM6IElTcGVjdHJvbk1haW5PcHRpb25zID0ge1xuICAgIHdpbmRvd0ZhY3Rvcnk6IGRlZmF1bHRXaW5kb3dGYWN0b3J5XG59O1xuXG5BcHBQYXRoLnNldChfX2Rpcm5hbWUpO1xuXG5TcGVjdHJvbk1haW4yLmNyZWF0ZShvcHRpb25zKS5ydW4oYXN5bmMgc3RhdGUgPT4ge1xuXG4gICAgY29uc3QgYXBwRGlyID0gcHJvY2Vzcy5jd2QoKTtcbiAgICBjb25zdCB3ZWJzZXJ2ZXJDb25maWcgPSBuZXcgV2Vic2VydmVyQ29uZmlnKGFwcERpciwgODAwNSk7XG5cbiAgICBjb25zdCBmaWxlUmVnaXN0cnkgPSBuZXcgRmlsZVJlZ2lzdHJ5KHdlYnNlcnZlckNvbmZpZyk7XG4gICAgY29uc3Qgd2Vic2VydmVyID0gbmV3IFdlYnNlcnZlcih3ZWJzZXJ2ZXJDb25maWcsIGZpbGVSZWdpc3RyeSk7XG5cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCB3ZWJzZXJ2ZXIuc3RhcnQoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIldlYnNlcnZlciBhbHJlYWR5IHJ1bm5pbmcuXCIpO1xuICAgIH1cblxuICAgIHN0YXRlLndpbmRvdy5sb2FkVVJMKGBodHRwOi8vbG9jYWxob3N0OjgwMDUvd2ViL3NwZWN0cm9uL2xvY2Fsc3RvcmFnZS9jb250ZW50Lmh0bWxgKTtcblxuICAgIGNvbnN0IHdpbmRvdyA9IGF3YWl0IGRlZmF1bHRXaW5kb3dGYWN0b3J5KCk7XG4gICAgd2luZG93LmxvYWRVUkwoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwNS93ZWIvc3BlY3Ryb24vbG9jYWxzdG9yYWdlL2NvbnRlbnQyLmh0bWxgKTtcblxufSk7XG5cblxuXG5cbiJdfQ==