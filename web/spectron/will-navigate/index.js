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
const SpectronMain_1 = require("../../js/test/SpectronMain");
const electron_2 = require("electron");
const Logger_1 = require("../../js/logger/Logger");
const log = Logger_1.Logger.create();
const BROWSER_OPTIONS = {
    backgroundColor: '#FFF',
    webPreferences: {
        webSecurity: false,
    }
};
let options = {
    windowFactory: () => __awaiter(this, void 0, void 0, function* () {
        let mainWindow = new electron_2.BrowserWindow(BROWSER_OPTIONS);
        mainWindow.webContents.on('will-navigate', function (e, url) {
            log.info("Attempt to navigate to new URL: ", url);
            e.preventDefault();
            electron_1.shell.openExternal(url);
        });
        mainWindow.loadURL('about:blank');
        return mainWindow;
    })
};
SpectronMain_1.SpectronMain.run((state) => __awaiter(this, void 0, void 0, function* () {
    state.window.loadFile(__dirname + '/app.html');
    yield state.testResultWriter.write(true);
}), options);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUNBQStCO0FBQy9CLDZEQUF3RDtBQUN4RCx1Q0FBdUM7QUFDdkMsbURBQThDO0FBRTlDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFNLGVBQWUsR0FBRztJQUNwQixlQUFlLEVBQUUsTUFBTTtJQUt2QixjQUFjLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztLQUNyQjtDQUVKLENBQUM7QUFFRixJQUFJLE9BQU8sR0FBRztJQUVWLGFBQWEsRUFBRSxHQUFTLEVBQUU7UUFFdEIsSUFBSSxVQUFVLEdBQUcsSUFBSSx3QkFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRXBELFVBQVUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxVQUFTLENBQUMsRUFBRSxHQUFHO1lBQ3RELEdBQUcsQ0FBQyxJQUFJLENBQUMsa0NBQWtDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFHbEQsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ25CLGdCQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO1FBRUgsVUFBVSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNsQyxPQUFPLFVBQVUsQ0FBQztJQUV0QixDQUFDLENBQUE7Q0FFSixDQUFDO0FBRUYsMkJBQVksQ0FBQyxHQUFHLENBQUMsQ0FBTSxLQUFLLEVBQUMsRUFBRTtJQUUzQixLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLENBQUM7SUFFL0MsTUFBTSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRTdDLENBQUMsQ0FBQSxFQUFFLE9BQU8sQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzaGVsbH0gZnJvbSAnZWxlY3Ryb24nO1xuaW1wb3J0IHtTcGVjdHJvbk1haW59IGZyb20gJy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb25NYWluJztcbmltcG9ydCB7QnJvd3NlcldpbmRvd30gZnJvbSBcImVsZWN0cm9uXCI7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vLi4vanMvbG9nZ2VyL0xvZ2dlcic7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuY29uc3QgQlJPV1NFUl9PUFRJT05TID0ge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyNGRkYnLFxuXG4gICAgLy8gTk9URTogdGhlIGRlZmF1bHQgd2lkdGggYW5kIGhlaWdodCBzaG91bGRuJ3QgYmUgY2hhbmdlZCBoZXJlIGFzIGl0IGNhblxuICAgIC8vIGJyZWFrIHVuaXQgdGVzdHMuXG5cbiAgICB3ZWJQcmVmZXJlbmNlczoge1xuICAgICAgICB3ZWJTZWN1cml0eTogZmFsc2UsXG4gICAgfVxuXG59O1xuXG5sZXQgb3B0aW9ucyA9IHtcblxuICAgIHdpbmRvd0ZhY3Rvcnk6IGFzeW5jICgpID0+IHtcblxuICAgICAgICBsZXQgbWFpbldpbmRvdyA9IG5ldyBCcm93c2VyV2luZG93KEJST1dTRVJfT1BUSU9OUyk7XG5cbiAgICAgICAgbWFpbldpbmRvdy53ZWJDb250ZW50cy5vbignd2lsbC1uYXZpZ2F0ZScsIGZ1bmN0aW9uKGUsIHVybCkge1xuICAgICAgICAgICAgbG9nLmluZm8oXCJBdHRlbXB0IHRvIG5hdmlnYXRlIHRvIG5ldyBVUkw6IFwiLCB1cmwpO1xuICAgICAgICAgICAgLy8gcmVxdWlyZWQgdG8gZm9yY2UgdGhlIFVSTHMgY2xpY2tlZCB0byBvcGVuIGluIGEgbmV3IGJyb3dzZXIuICBUaGVcbiAgICAgICAgICAgIC8vIHVzZXIgcHJvYmFibHkgLyBjZXJ0YWlubHkgd2FudHMgdG8gdXNlIHRoZWlyIG1haW4gYnJvd3Nlci5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNoZWxsLm9wZW5FeHRlcm5hbCh1cmwpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtYWluV2luZG93LmxvYWRVUkwoJ2Fib3V0OmJsYW5rJyk7XG4gICAgICAgIHJldHVybiBtYWluV2luZG93O1xuXG4gICAgfVxuXG59O1xuXG5TcGVjdHJvbk1haW4ucnVuKGFzeW5jIHN0YXRlID0+IHtcblxuICAgIHN0YXRlLndpbmRvdy5sb2FkRmlsZShfX2Rpcm5hbWUgKyAnL2FwcC5odG1sJyk7XG5cbiAgICBhd2FpdCBzdGF0ZS50ZXN0UmVzdWx0V3JpdGVyLndyaXRlKHRydWUpO1xuXG59LCBvcHRpb25zKTtcbiJdfQ==