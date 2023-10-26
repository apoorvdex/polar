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
const SpectronMain_1 = require("../../js/test/SpectronMain");
const WebRequestReactor_1 = require("../../js/webrequests/WebRequestReactor");
const DebugWebRequestsListener_1 = require("../../js/webrequests/DebugWebRequestsListener");
const LoggerDelegate_1 = require("../../js/logger/LoggerDelegate");
const MemoryLogger_1 = require("../../js/logger/MemoryLogger");
const assert_1 = __importDefault(require("assert"));
let log = new MemoryLogger_1.MemoryLogger();
LoggerDelegate_1.LoggerDelegate.set(log);
function createMainWindow() {
    return __awaiter(this, void 0, void 0, function* () {
        let mainWindow = new electron_1.BrowserWindow();
        let webRequestReactor = new WebRequestReactor_1.WebRequestReactor(mainWindow.webContents.session.webRequest);
        webRequestReactor.start();
        let debugWebRequestsListener = new DebugWebRequestsListener_1.DebugWebRequestsListener();
        debugWebRequestsListener.register(webRequestReactor);
        mainWindow.loadURL('http://httpbin.org/get');
        return mainWindow;
    });
}
SpectronMain_1.SpectronMain.run((state) => __awaiter(this, void 0, void 0, function* () {
    state.window.loadFile(__dirname + '/app.html');
    let output = log.toJSON();
    console.log("log output =========");
    console.log(output);
    console.log("DONE log output =========");
    assert_1.default.ok(output.indexOf("onBeforeRequest") !== -1);
    yield state.testResultWriter.write(true);
}), { windowFactory: createMainWindow });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQXVDO0FBQ3ZDLDZEQUF3RDtBQUN4RCw4RUFBeUU7QUFDekUsNEZBQXVGO0FBQ3ZGLG1FQUE4RDtBQUM5RCwrREFBMEQ7QUFFMUQsb0RBQTRCO0FBRTVCLElBQUksR0FBRyxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO0FBRTdCLCtCQUFjLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBRXhCLFNBQWUsZ0JBQWdCOztRQUUzQixJQUFJLFVBQVUsR0FBRyxJQUFJLHdCQUFhLEVBQUUsQ0FBQztRQUVyQyxJQUFJLGlCQUFpQixHQUFHLElBQUkscUNBQWlCLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekYsaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFMUIsSUFBSSx3QkFBd0IsR0FBRyxJQUFJLG1EQUF3QixFQUFFLENBQUM7UUFDOUQsd0JBQXdCLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFckQsVUFBVSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQzdDLE9BQU8sVUFBVSxDQUFDO0lBRXRCLENBQUM7Q0FBQTtBQUVELDJCQUFZLENBQUMsR0FBRyxDQUFDLENBQU0sS0FBSyxFQUFDLEVBQUU7SUFFM0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxDQUFDO0lBSS9DLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUUxQixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFFekMsZ0JBQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFXcEQsTUFBTSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRTdDLENBQUMsQ0FBQSxFQUFFLEVBQUMsYUFBYSxFQUFFLGdCQUFnQixFQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QnJvd3NlcldpbmRvd30gZnJvbSAnZWxlY3Ryb24nO1xuaW1wb3J0IHtTcGVjdHJvbk1haW59IGZyb20gJy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb25NYWluJztcbmltcG9ydCB7V2ViUmVxdWVzdFJlYWN0b3J9IGZyb20gJy4uLy4uL2pzL3dlYnJlcXVlc3RzL1dlYlJlcXVlc3RSZWFjdG9yJztcbmltcG9ydCB7RGVidWdXZWJSZXF1ZXN0c0xpc3RlbmVyfSBmcm9tICcuLi8uLi9qcy93ZWJyZXF1ZXN0cy9EZWJ1Z1dlYlJlcXVlc3RzTGlzdGVuZXInO1xuaW1wb3J0IHtMb2dnZXJEZWxlZ2F0ZX0gZnJvbSAnLi4vLi4vanMvbG9nZ2VyL0xvZ2dlckRlbGVnYXRlJztcbmltcG9ydCB7TWVtb3J5TG9nZ2VyfSBmcm9tICcuLi8uLi9qcy9sb2dnZXIvTWVtb3J5TG9nZ2VyJztcblxuaW1wb3J0IGFzc2VydCBmcm9tICdhc3NlcnQnO1xuXG5sZXQgbG9nID0gbmV3IE1lbW9yeUxvZ2dlcigpO1xuLy9sZXQgbG9nID0gbmV3IENvbnNvbGVMb2dnZXIoKTtcbkxvZ2dlckRlbGVnYXRlLnNldChsb2cpO1xuXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVNYWluV2luZG93KCkge1xuXG4gICAgbGV0IG1haW5XaW5kb3cgPSBuZXcgQnJvd3NlcldpbmRvdygpO1xuXG4gICAgbGV0IHdlYlJlcXVlc3RSZWFjdG9yID0gbmV3IFdlYlJlcXVlc3RSZWFjdG9yKG1haW5XaW5kb3cud2ViQ29udGVudHMuc2Vzc2lvbi53ZWJSZXF1ZXN0KTtcbiAgICB3ZWJSZXF1ZXN0UmVhY3Rvci5zdGFydCgpO1xuXG4gICAgbGV0IGRlYnVnV2ViUmVxdWVzdHNMaXN0ZW5lciA9IG5ldyBEZWJ1Z1dlYlJlcXVlc3RzTGlzdGVuZXIoKTtcbiAgICBkZWJ1Z1dlYlJlcXVlc3RzTGlzdGVuZXIucmVnaXN0ZXIod2ViUmVxdWVzdFJlYWN0b3IpO1xuXG4gICAgbWFpbldpbmRvdy5sb2FkVVJMKCdodHRwOi8vaHR0cGJpbi5vcmcvZ2V0Jyk7XG4gICAgcmV0dXJuIG1haW5XaW5kb3c7XG5cbn1cblxuU3BlY3Ryb25NYWluLnJ1bihhc3luYyBzdGF0ZSA9PiB7XG5cbiAgICBzdGF0ZS53aW5kb3cubG9hZEZpbGUoX19kaXJuYW1lICsgJy9hcHAuaHRtbCcpO1xuXG4gICAgLy8gbm93IG1ha2Ugc3VyZSB0aGUgbG9nIGRhdGEgaXMgcHJvcGVybHkgc3RvcmVkLlxuXG4gICAgbGV0IG91dHB1dCA9IGxvZy50b0pTT04oKTtcblxuICAgIGNvbnNvbGUubG9nKFwibG9nIG91dHB1dCA9PT09PT09PT1cIik7XG4gICAgY29uc29sZS5sb2cob3V0cHV0KTtcbiAgICBjb25zb2xlLmxvZyhcIkRPTkUgbG9nIG91dHB1dCA9PT09PT09PT1cIik7XG5cbiAgICBhc3NlcnQub2sob3V0cHV0LmluZGV4T2YoXCJvbkJlZm9yZVJlcXVlc3RcIikgIT09IC0xKTtcbiAgICAvL1xuICAgIC8vIC8vIG1ha2Ugc3VyZSB3ZSBoYXZlIGFsbCB0aGUgZXZlbnRzIHdlIG5lZWQuICBXZSBjb3VsZCBwcm9iYWJseSB0ZXN0XG4gICAgLy8gLy8gdGhpcyBtb3JlIGJ5IGFzc2VydGluZyB0aGUgZW50aXJlIEpTT04gb3V0cHV0IGJ1dCB0aGF0IG1pZ2h0XG4gICAgLy8gLy8gYmUgYSBiaXQgaGVhdnkuXG4gICAgLy8gYXNzZXJ0LmVxdWFsKGxvZ0RhdGEuaW5kZXhPZihcIm9uQmVmb3JlUmVxdWVzdFwiKSAhPT0gLTEsIHRydWUpO1xuICAgIC8vIGFzc2VydC5lcXVhbChsb2dEYXRhLmluZGV4T2YoXCJvbkJlZm9yZVNlbmRIZWFkZXJzXCIpICE9PSAtMSwgdHJ1ZSk7XG4gICAgLy8gYXNzZXJ0LmVxdWFsKGxvZ0RhdGEuaW5kZXhPZihcIm9uU2VuZEhlYWRlcnNcIikgIT09IC0xLCB0cnVlKTtcbiAgICAvLyBhc3NlcnQuZXF1YWwobG9nRGF0YS5pbmRleE9mKFwib25SZXNwb25zZVN0YXJ0ZWRcIikgIT09IC0xLCB0cnVlKTtcbiAgICAvLyBhc3NlcnQuZXF1YWwobG9nRGF0YS5pbmRleE9mKFwib25Db21wbGV0ZWRcIikgIT09IC0xLCB0cnVlKTtcblxuICAgIGF3YWl0IHN0YXRlLnRlc3RSZXN1bHRXcml0ZXIud3JpdGUodHJ1ZSk7XG5cbn0sIHt3aW5kb3dGYWN0b3J5OiBjcmVhdGVNYWluV2luZG93fSk7XG5cbiJdfQ==