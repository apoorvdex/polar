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
    const url = `http://localhost:8005/web/spectron/firebase-auth/content.html?primary=true`;
    state.window.loadURL(url);
    yield state.testResultWriter.write(true);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUNBQTRDO0FBQzVDLCtEQUFnRjtBQUNoRixnRkFBMkU7QUFDM0Usb0VBQStEO0FBQy9ELDBFQUFxRTtBQUNyRSw2RkFBd0Y7QUFHeEYsU0FBZSxvQkFBb0I7O1FBQy9CLE1BQU0sVUFBVSxHQUFHLElBQUksd0JBQWEsQ0FBQywyREFBNEIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBRTVFLFVBQVUsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbEMsT0FBTyxVQUFVLENBQUM7SUFDdEIsQ0FBQztDQUFBO0FBR0QsTUFBTSxPQUFPLEdBQXlCO0lBQ2xDLGFBQWEsRUFBRSxvQkFBb0I7Q0FDdEMsQ0FBQztBQUVGLDZCQUFhLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFNLEtBQUssRUFBQyxFQUFFO0lBRTVDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM3QixNQUFNLGVBQWUsR0FBRyxJQUFJLGlDQUFlLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRTFELE1BQU0sWUFBWSxHQUFHLElBQUksMkJBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN2RCxNQUFNLFNBQVMsR0FBRyxJQUFJLHFCQUFTLENBQUMsZUFBZSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBRS9ELElBQUk7UUFDQSxNQUFNLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUMzQjtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1IsT0FBTyxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0tBQzlDO0lBRUQsTUFBTSxHQUFHLEdBQUcsNEVBQTRFLENBQUM7SUFDekYsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFLMUIsTUFBTSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRTdDLENBQUMsQ0FBQSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FwcCwgQnJvd3NlcldpbmRvd30gZnJvbSAnZWxlY3Ryb24nO1xuaW1wb3J0IHtJU3BlY3Ryb25NYWluT3B0aW9ucywgU3BlY3Ryb25NYWluMn0gZnJvbSAnLi4vLi4vanMvdGVzdC9TcGVjdHJvbk1haW4yJztcbmltcG9ydCB7V2Vic2VydmVyQ29uZmlnfSBmcm9tICcuLi8uLi9qcy9iYWNrZW5kL3dlYnNlcnZlci9XZWJzZXJ2ZXJDb25maWcnO1xuaW1wb3J0IHtXZWJzZXJ2ZXJ9IGZyb20gJy4uLy4uL2pzL2JhY2tlbmQvd2Vic2VydmVyL1dlYnNlcnZlcic7XG5pbXBvcnQge0ZpbGVSZWdpc3RyeX0gZnJvbSAnLi4vLi4vanMvYmFja2VuZC93ZWJzZXJ2ZXIvRmlsZVJlZ2lzdHJ5JztcbmltcG9ydCB7U3BlY3Ryb25Ccm93c2VyV2luZG93T3B0aW9uc30gZnJvbSAnLi4vLi4vanMvdGVzdC9TcGVjdHJvbkJyb3dzZXJXaW5kb3dPcHRpb25zJztcblxuXG5hc3luYyBmdW5jdGlvbiBkZWZhdWx0V2luZG93RmFjdG9yeSgpOiBQcm9taXNlPEJyb3dzZXJXaW5kb3c+IHtcbiAgICBjb25zdCBtYWluV2luZG93ID0gbmV3IEJyb3dzZXJXaW5kb3coU3BlY3Ryb25Ccm93c2VyV2luZG93T3B0aW9ucy5jcmVhdGUoKSk7XG4gICAgLy8gbWFpbldpbmRvdy53ZWJDb250ZW50cy50b2dnbGVEZXZUb29scygpO1xuICAgIG1haW5XaW5kb3cubG9hZFVSTCgnYWJvdXQ6YmxhbmsnKTtcbiAgICByZXR1cm4gbWFpbldpbmRvdztcbn1cblxuXG5jb25zdCBvcHRpb25zOiBJU3BlY3Ryb25NYWluT3B0aW9ucyA9IHtcbiAgICB3aW5kb3dGYWN0b3J5OiBkZWZhdWx0V2luZG93RmFjdG9yeVxufTtcblxuU3BlY3Ryb25NYWluMi5jcmVhdGUob3B0aW9ucykucnVuKGFzeW5jIHN0YXRlID0+IHtcblxuICAgIGNvbnN0IGFwcERpciA9IHByb2Nlc3MuY3dkKCk7XG4gICAgY29uc3Qgd2Vic2VydmVyQ29uZmlnID0gbmV3IFdlYnNlcnZlckNvbmZpZyhhcHBEaXIsIDgwMDUpO1xuXG4gICAgY29uc3QgZmlsZVJlZ2lzdHJ5ID0gbmV3IEZpbGVSZWdpc3RyeSh3ZWJzZXJ2ZXJDb25maWcpO1xuICAgIGNvbnN0IHdlYnNlcnZlciA9IG5ldyBXZWJzZXJ2ZXIod2Vic2VydmVyQ29uZmlnLCBmaWxlUmVnaXN0cnkpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgd2Vic2VydmVyLnN0YXJ0KCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJXZWJzZXJ2ZXIgYWxyZWFkeSBydW5uaW5nLlwiKTtcbiAgICB9XG5cbiAgICBjb25zdCB1cmwgPSBgaHR0cDovL2xvY2FsaG9zdDo4MDA1L3dlYi9zcGVjdHJvbi9maXJlYmFzZS1hdXRoL2NvbnRlbnQuaHRtbD9wcmltYXJ5PXRydWVgO1xuICAgIHN0YXRlLndpbmRvdy5sb2FkVVJMKHVybCk7XG4gICAgLy9cbiAgICAvLyBjb25zdCBzZWNvbmRXaW5kb3cgPSBhd2FpdCBkZWZhdWx0V2luZG93RmFjdG9yeSgpO1xuICAgIC8vIHNlY29uZFdpbmRvdy5sb2FkVVJMKHVybCk7XG5cbiAgICBhd2FpdCBzdGF0ZS50ZXN0UmVzdWx0V3JpdGVyLndyaXRlKHRydWUpO1xuXG59KTtcblxuIl19