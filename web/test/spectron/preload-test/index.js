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
const SpectronMain_1 = require("../../../js/test/SpectronMain");
const electron_1 = require("electron");
exports.BROWSER_OPTIONS = {
    backgroundColor: '#FFF',
    webPreferences: {
        webSecurity: false,
    }
};
let windowFactory = () => __awaiter(this, void 0, void 0, function* () {
    console.log("Creating custom window.");
    let mainWindow = new electron_1.BrowserWindow(exports.BROWSER_OPTIONS);
    mainWindow.loadURL('about:blank');
    return mainWindow;
});
SpectronMain_1.SpectronMain.run((state) => __awaiter(this, void 0, void 0, function* () {
    state.window.loadFile(__dirname + '/app.html');
    yield state.testResultWriter.write(true);
}), { windowFactory });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsZ0VBQTBFO0FBQzFFLHVDQUF1QztBQUcxQixRQUFBLGVBQWUsR0FBRztJQUMzQixlQUFlLEVBQUUsTUFBTTtJQVF2QixjQUFjLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztLQUtyQjtDQUVKLENBQUM7QUFFRixJQUFJLGFBQWEsR0FBa0IsR0FBUyxFQUFFO0lBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQTtJQUN0QyxJQUFJLFVBQVUsR0FBRyxJQUFJLHdCQUFhLENBQUMsdUJBQWUsQ0FBQyxDQUFDO0lBRXBELFVBQVUsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbEMsT0FBTyxVQUFVLENBQUM7QUFDdEIsQ0FBQyxDQUFBLENBQUM7QUFFRiwyQkFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFNLEtBQUssRUFBQyxFQUFFO0lBRTNCLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsQ0FBQztJQUUvQyxNQUFNLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFN0MsQ0FBQyxDQUFBLEVBQUUsRUFBQyxhQUFhLEVBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTcGVjdHJvbk1haW4sIFdpbmRvd0ZhY3Rvcnl9IGZyb20gJy4uLy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb25NYWluJztcbmltcG9ydCB7QnJvd3NlcldpbmRvd30gZnJvbSBcImVsZWN0cm9uXCI7XG5cblxuZXhwb3J0IGNvbnN0IEJST1dTRVJfT1BUSU9OUyA9IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZGJyxcblxuICAgIC8vIE5PVEU6IHRoZSBkZWZhdWx0IHdpZHRoIGFuZCBoZWlnaHQgc2hvdWxkbid0IGJlIGNoYW5nZWQgaGVyZSBhcyBpdCBjYW5cbiAgICAvLyBicmVhayB1bml0IHRlc3RzLlxuXG4gICAgLy93aWR0aDogMTAwMCxcbiAgICAvL2hlaWdodDogMTAwMCxcblxuICAgIHdlYlByZWZlcmVuY2VzOiB7XG4gICAgICAgIHdlYlNlY3VyaXR5OiBmYWxzZSxcbiAgICAgICAgLy8gY2FuIE5PVCBiZSBsb2FkZWQgZnJvbSBmaWxlIFVSTHNcbiAgICAgICAgLy9wcmVsb2FkVVJMOiBcImZpbGU6Ly8vaG9tZS9idXJ0b24vcHJvamVjdHMvcG9sYXItYm9va3NoZWxmL3dlYi9zcGVjdHJvbi9wcmVsb2FkLXRlc3QvcHJlbG9hZC5qc1wiXG4gICAgICAgIC8vcHJlbG9hZFVSTDogXCIuL3ByZWxvYWQuanNcIlxuICAgICAgICAvL3ByZWxvYWRVUkw6IFwiLi9wcmVsb2FkLmpzXCJcbiAgICB9XG5cbn07XG5cbmxldCB3aW5kb3dGYWN0b3J5OiBXaW5kb3dGYWN0b3J5ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiQ3JlYXRpbmcgY3VzdG9tIHdpbmRvdy5cIilcbiAgICBsZXQgbWFpbldpbmRvdyA9IG5ldyBCcm93c2VyV2luZG93KEJST1dTRVJfT1BUSU9OUyk7XG4gICAgLy9tYWluV2luZG93LndlYkNvbnRlbnRzLnRvZ2dsZURldlRvb2xzKCk7XG4gICAgbWFpbldpbmRvdy5sb2FkVVJMKCdhYm91dDpibGFuaycpO1xuICAgIHJldHVybiBtYWluV2luZG93O1xufTtcblxuU3BlY3Ryb25NYWluLnJ1bihhc3luYyBzdGF0ZSA9PiB7XG5cbiAgICBzdGF0ZS53aW5kb3cubG9hZEZpbGUoX19kaXJuYW1lICsgJy9hcHAuaHRtbCcpO1xuXG4gICAgYXdhaXQgc3RhdGUudGVzdFJlc3VsdFdyaXRlci53cml0ZSh0cnVlKTtcblxufSwge3dpbmRvd0ZhY3Rvcnl9KTtcbiJdfQ==