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
        nodeIntegration: false
    }
};
let windowFactory = () => __awaiter(this, void 0, void 0, function* () {
    let mainWindow = new electron_1.BrowserWindow(exports.BROWSER_OPTIONS);
    mainWindow.loadURL('about:blank');
    return mainWindow;
});
SpectronMain_1.SpectronMain.run((state) => __awaiter(this, void 0, void 0, function* () {
    state.window.loadFile(__dirname + '/app.html');
    yield state.testResultWriter.write(true);
}), { windowFactory });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsZ0VBQTBFO0FBQzFFLHVDQUF1QztBQUcxQixRQUFBLGVBQWUsR0FBRztJQUMzQixlQUFlLEVBQUUsTUFBTTtJQVF2QixjQUFjLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztRQUNsQixlQUFlLEVBQUUsS0FBSztLQUN6QjtDQUVKLENBQUM7QUFFRixJQUFJLGFBQWEsR0FBa0IsR0FBUyxFQUFFO0lBQzFDLElBQUksVUFBVSxHQUFHLElBQUksd0JBQWEsQ0FBQyx1QkFBZSxDQUFDLENBQUM7SUFFcEQsVUFBVSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNsQyxPQUFPLFVBQVUsQ0FBQztBQUN0QixDQUFDLENBQUEsQ0FBQztBQUVGLDJCQUFZLENBQUMsR0FBRyxDQUFDLENBQU0sS0FBSyxFQUFDLEVBQUU7SUFFM0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxDQUFDO0lBRS9DLE1BQU0sS0FBSyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUU3QyxDQUFDLENBQUEsRUFBRSxFQUFDLGFBQWEsRUFBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NwZWN0cm9uTWFpbiwgV2luZG93RmFjdG9yeX0gZnJvbSAnLi4vLi4vLi4vanMvdGVzdC9TcGVjdHJvbk1haW4nO1xuaW1wb3J0IHtCcm93c2VyV2luZG93fSBmcm9tIFwiZWxlY3Ryb25cIjtcblxuXG5leHBvcnQgY29uc3QgQlJPV1NFUl9PUFRJT05TID0ge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyNGRkYnLFxuXG4gICAgLy8gTk9URTogdGhlIGRlZmF1bHQgd2lkdGggYW5kIGhlaWdodCBzaG91bGRuJ3QgYmUgY2hhbmdlZCBoZXJlIGFzIGl0IGNhblxuICAgIC8vIGJyZWFrIHVuaXQgdGVzdHMuXG5cbiAgICAvL3dpZHRoOiAxMDAwLFxuICAgIC8vaGVpZ2h0OiAxMDAwLFxuXG4gICAgd2ViUHJlZmVyZW5jZXM6IHtcbiAgICAgICAgd2ViU2VjdXJpdHk6IGZhbHNlLFxuICAgICAgICBub2RlSW50ZWdyYXRpb246IGZhbHNlXG4gICAgfVxuXG59O1xuXG5sZXQgd2luZG93RmFjdG9yeTogV2luZG93RmFjdG9yeSA9IGFzeW5jICgpID0+IHtcbiAgICBsZXQgbWFpbldpbmRvdyA9IG5ldyBCcm93c2VyV2luZG93KEJST1dTRVJfT1BUSU9OUyk7XG4gICAgLy9tYWluV2luZG93LndlYkNvbnRlbnRzLnRvZ2dsZURldlRvb2xzKCk7XG4gICAgbWFpbldpbmRvdy5sb2FkVVJMKCdhYm91dDpibGFuaycpO1xuICAgIHJldHVybiBtYWluV2luZG93O1xufTtcblxuU3BlY3Ryb25NYWluLnJ1bihhc3luYyBzdGF0ZSA9PiB7XG5cbiAgICBzdGF0ZS53aW5kb3cubG9hZEZpbGUoX19kaXJuYW1lICsgJy9hcHAuaHRtbCcpO1xuXG4gICAgYXdhaXQgc3RhdGUudGVzdFJlc3VsdFdyaXRlci53cml0ZSh0cnVlKTtcblxufSwge3dpbmRvd0ZhY3Rvcnl9KTtcbiJdfQ==