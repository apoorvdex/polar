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
const SpectronMain2_1 = require("../../../js/test/SpectronMain2");
const electron_1 = require("electron");
SpectronMain2_1.SpectronMain2.create().run((state) => __awaiter(this, void 0, void 0, function* () {
    let primaryWindow = state.window;
    let secondaryWindow = state.window;
    primaryWindow.loadFile(__dirname + '/app.html');
    secondaryWindow.loadFile(__dirname + '/app.html');
    electron_1.ipcMain.on('what-is-your-name', (event, message) => {
        console.log("Received event and message: ", { event, message });
        event.sender.send('and-what-is-your-name', 'my name is ipcRenderer');
    });
    electron_1.ipcMain.on('oh-my-name-is', (event, message) => {
        console.log("Received event and message: ", { event, message });
    });
    yield state.testResultWriter.write(true);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsa0VBQTZEO0FBQzdELHVDQUFpQztBQUVqQyw2QkFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFNLEtBQUssRUFBQyxFQUFFO0lBRXJDLElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDakMsSUFBSSxlQUFlLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUVuQyxhQUFhLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsQ0FBQztJQUNoRCxlQUFlLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsQ0FBQztJQUVsRCxrQkFBTyxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLEtBQXFCLEVBQUUsT0FBWSxFQUFFLEVBQUU7UUFDcEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsRUFBRSxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDO1FBRTlELEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLHdCQUF3QixDQUFDLENBQUM7SUFFekUsQ0FBQyxDQUFDLENBQUM7SUFFSCxrQkFBTyxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxLQUFxQixFQUFFLE9BQVksRUFBRSxFQUFFO1FBQ2hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLEVBQUUsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDLENBQUMsQ0FBQztJQUlILE1BQU0sS0FBSyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUU3QyxDQUFDLENBQUEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTcGVjdHJvbk1haW4yfSBmcm9tICcuLi8uLi8uLi9qcy90ZXN0L1NwZWN0cm9uTWFpbjInO1xuaW1wb3J0IHtpcGNNYWlufSBmcm9tIFwiZWxlY3Ryb25cIjtcblxuU3BlY3Ryb25NYWluMi5jcmVhdGUoKS5ydW4oYXN5bmMgc3RhdGUgPT4ge1xuXG4gICAgbGV0IHByaW1hcnlXaW5kb3cgPSBzdGF0ZS53aW5kb3c7XG4gICAgbGV0IHNlY29uZGFyeVdpbmRvdyA9IHN0YXRlLndpbmRvdztcblxuICAgIHByaW1hcnlXaW5kb3cubG9hZEZpbGUoX19kaXJuYW1lICsgJy9hcHAuaHRtbCcpO1xuICAgIHNlY29uZGFyeVdpbmRvdy5sb2FkRmlsZShfX2Rpcm5hbWUgKyAnL2FwcC5odG1sJyk7XG5cbiAgICBpcGNNYWluLm9uKCd3aGF0LWlzLXlvdXItbmFtZScsIChldmVudDogRWxlY3Ryb24uRXZlbnQsIG1lc3NhZ2U6IGFueSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlJlY2VpdmVkIGV2ZW50IGFuZCBtZXNzYWdlOiBcIiwge2V2ZW50LCBtZXNzYWdlfSk7XG5cbiAgICAgICAgZXZlbnQuc2VuZGVyLnNlbmQoJ2FuZC13aGF0LWlzLXlvdXItbmFtZScsICdteSBuYW1lIGlzIGlwY1JlbmRlcmVyJyk7XG5cbiAgICB9KTtcblxuICAgIGlwY01haW4ub24oJ29oLW15LW5hbWUtaXMnLCAoZXZlbnQ6IEVsZWN0cm9uLkV2ZW50LCBtZXNzYWdlOiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZWNlaXZlZCBldmVudCBhbmQgbWVzc2FnZTogXCIsIHtldmVudCwgbWVzc2FnZX0pO1xuICAgIH0pO1xuXG4gICAgLy8gZ2V0IHRoZSBmb2N1c2VkIHdpbmRvdyBhbmQgdGhlbiBzZW5kIGl0IGEgbWVzc2FnZVxuXG4gICAgYXdhaXQgc3RhdGUudGVzdFJlc3VsdFdyaXRlci53cml0ZSh0cnVlKTtcblxufSk7XG4iXX0=