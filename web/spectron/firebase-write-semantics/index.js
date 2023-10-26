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
global.appPath = __dirname;
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
SpectronMain2_1.SpectronMain2.create(options).run((state) => __awaiter(this, void 0, void 0, function* () {
    yield PolarDataDir_1.PolarDataDir.useFreshDirectory('.polar-firebase-datastore');
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
    const url = `http://localhost:8005/web/spectron/firebase-datastore/content.html`;
    state.window.loadURL(url);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUNBQTRDO0FBQzVDLCtEQUFnRjtBQUNoRixnRkFBMkU7QUFDM0Usb0VBQStEO0FBQy9ELDBFQUFxRTtBQUNyRSw2RkFBd0Y7QUFDeEYsNkRBQXdEO0FBS3hELE1BQU0sQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO0FBRTNCLFNBQWUsb0JBQW9COztRQUMvQixNQUFNLFVBQVUsR0FBRyxJQUFJLHdCQUFhLENBQUMsMkRBQTRCLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUM1RSxVQUFVLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sVUFBVSxDQUFDO0lBQ3RCLENBQUM7Q0FBQTtBQUdELE1BQU0sT0FBTyxHQUF5QjtJQUNsQyxhQUFhLEVBQUUsb0JBQW9CO0NBQ3RDLENBQUM7QUFPRiw2QkFBYSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBTSxLQUFLLEVBQUMsRUFBRTtJQUU1QyxNQUFNLDJCQUFZLENBQUMsaUJBQWlCLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUtsRSxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDN0IsTUFBTSxlQUFlLEdBQUcsSUFBSSxpQ0FBZSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUUxRCxNQUFNLFlBQVksR0FBRyxJQUFJLDJCQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDdkQsTUFBTSxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLGVBQWUsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUUvRCxJQUFJO1FBQ0EsTUFBTSxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDM0I7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNSLE9BQU8sQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQztLQUM5QztJQUVELE1BQU0sR0FBRyxHQUFHLG9FQUFvRSxDQUFDO0lBQ2pGLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBRTlCLENBQUMsQ0FBQSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FwcCwgQnJvd3NlcldpbmRvd30gZnJvbSAnZWxlY3Ryb24nO1xuaW1wb3J0IHtJU3BlY3Ryb25NYWluT3B0aW9ucywgU3BlY3Ryb25NYWluMn0gZnJvbSAnLi4vLi4vanMvdGVzdC9TcGVjdHJvbk1haW4yJztcbmltcG9ydCB7V2Vic2VydmVyQ29uZmlnfSBmcm9tICcuLi8uLi9qcy9iYWNrZW5kL3dlYnNlcnZlci9XZWJzZXJ2ZXJDb25maWcnO1xuaW1wb3J0IHtXZWJzZXJ2ZXJ9IGZyb20gJy4uLy4uL2pzL2JhY2tlbmQvd2Vic2VydmVyL1dlYnNlcnZlcic7XG5pbXBvcnQge0ZpbGVSZWdpc3RyeX0gZnJvbSAnLi4vLi4vanMvYmFja2VuZC93ZWJzZXJ2ZXIvRmlsZVJlZ2lzdHJ5JztcbmltcG9ydCB7U3BlY3Ryb25Ccm93c2VyV2luZG93T3B0aW9uc30gZnJvbSAnLi4vLi4vanMvdGVzdC9TcGVjdHJvbkJyb3dzZXJXaW5kb3dPcHRpb25zJztcbmltcG9ydCB7UG9sYXJEYXRhRGlyfSBmcm9tICcuLi8uLi9qcy90ZXN0L1BvbGFyRGF0YURpcic7XG5pbXBvcnQge0ZpbGVQYXRoc30gZnJvbSAnLi4vLi4vanMvdXRpbC9GaWxlUGF0aHMnO1xuXG5kZWNsYXJlIHZhciBnbG9iYWw6IGFueTtcblxuZ2xvYmFsLmFwcFBhdGggPSBfX2Rpcm5hbWU7XG5cbmFzeW5jIGZ1bmN0aW9uIGRlZmF1bHRXaW5kb3dGYWN0b3J5KCk6IFByb21pc2U8QnJvd3NlcldpbmRvdz4ge1xuICAgIGNvbnN0IG1haW5XaW5kb3cgPSBuZXcgQnJvd3NlcldpbmRvdyhTcGVjdHJvbkJyb3dzZXJXaW5kb3dPcHRpb25zLmNyZWF0ZSgpKTtcbiAgICBtYWluV2luZG93LmxvYWRVUkwoJ2Fib3V0OmJsYW5rJyk7XG4gICAgcmV0dXJuIG1haW5XaW5kb3c7XG59XG5cblxuY29uc3Qgb3B0aW9uczogSVNwZWN0cm9uTWFpbk9wdGlvbnMgPSB7XG4gICAgd2luZG93RmFjdG9yeTogZGVmYXVsdFdpbmRvd0ZhY3Rvcnlcbn07XG5cbi8vIFRPRE86IHRoZSBtYWluIHByb2JsZW1zIHdpdGggdGhlIGhvbWUgZGlyIGFyZSBub3c6XG4vLyBGSVhNRTogd2UgaGF2ZSB0byB1c2UgcmVtb3RlIHRvIGdldCB0aGUgZGlyZWN0b3J5IHRvIHJlcXVpcmUoKSBvdXIgZmlsZXMgZnJvbVxuLy9cblxuXG5TcGVjdHJvbk1haW4yLmNyZWF0ZShvcHRpb25zKS5ydW4oYXN5bmMgc3RhdGUgPT4ge1xuXG4gICAgYXdhaXQgUG9sYXJEYXRhRGlyLnVzZUZyZXNoRGlyZWN0b3J5KCcucG9sYXItZmlyZWJhc2UtZGF0YXN0b3JlJyk7XG5cbiAgICAvLyB0aGUgd2Vic2VydmVyIG11c3QgYmUgcnVubmluZyBhcyBmaXJlYmFzZSB3b24ndCBsb2FkIHdpdGhvdXQgYmVpbmcgb24gYW5cbiAgICAvLyBIVFRQIFVSTFxuXG4gICAgY29uc3QgYXBwRGlyID0gcHJvY2Vzcy5jd2QoKTtcbiAgICBjb25zdCB3ZWJzZXJ2ZXJDb25maWcgPSBuZXcgV2Vic2VydmVyQ29uZmlnKGFwcERpciwgODAwNSk7XG5cbiAgICBjb25zdCBmaWxlUmVnaXN0cnkgPSBuZXcgRmlsZVJlZ2lzdHJ5KHdlYnNlcnZlckNvbmZpZyk7XG4gICAgY29uc3Qgd2Vic2VydmVyID0gbmV3IFdlYnNlcnZlcih3ZWJzZXJ2ZXJDb25maWcsIGZpbGVSZWdpc3RyeSk7XG5cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCB3ZWJzZXJ2ZXIuc3RhcnQoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIldlYnNlcnZlciBhbHJlYWR5IHJ1bm5pbmcuXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHVybCA9IGBodHRwOi8vbG9jYWxob3N0OjgwMDUvd2ViL3NwZWN0cm9uL2ZpcmViYXNlLWRhdGFzdG9yZS9jb250ZW50Lmh0bWxgO1xuICAgIHN0YXRlLndpbmRvdy5sb2FkVVJMKHVybCk7XG5cbn0pO1xuXG5cblxuIl19