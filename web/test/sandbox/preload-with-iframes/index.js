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
const SpectronMain_1 = require("../../../js/test/SpectronMain");
exports.BROWSER_OPTIONS = {
    backgroundColor: '#FFF',
    webPreferences: {
        webSecurity: false,
        preload: "/home/burton/projects/polar-bookshelf/test/sandbox/preload-with-iframes/preload.js"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUNBQXVDO0FBQ3ZDLGdFQUEwRTtBQUU3RCxRQUFBLGVBQWUsR0FBRztJQUUzQixlQUFlLEVBQUUsTUFBTTtJQVF2QixjQUFjLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztRQUlsQixPQUFPLEVBQUUsb0ZBQW9GO0tBQ2hHO0NBRUosQ0FBQztBQUVGLElBQUksYUFBYSxHQUFrQixHQUFTLEVBQUU7SUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO0lBQ3RDLElBQUksVUFBVSxHQUFHLElBQUksd0JBQWEsQ0FBQyx1QkFBZSxDQUFDLENBQUM7SUFFcEQsVUFBVSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNsQyxPQUFPLFVBQVUsQ0FBQztBQUN0QixDQUFDLENBQUEsQ0FBQztBQUVGLDJCQUFZLENBQUMsR0FBRyxDQUFDLENBQU0sS0FBSyxFQUFDLEVBQUU7SUFFM0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxDQUFDO0lBRS9DLE1BQU0sS0FBSyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUU3QyxDQUFDLENBQUEsRUFBRSxFQUFDLGFBQWEsRUFBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jyb3dzZXJXaW5kb3d9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCB7U3BlY3Ryb25NYWluLCBXaW5kb3dGYWN0b3J5fSBmcm9tICcuLi8uLi8uLi9qcy90ZXN0L1NwZWN0cm9uTWFpbic7XG5cbmV4cG9ydCBjb25zdCBCUk9XU0VSX09QVElPTlMgPSB7XG5cbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZGJyxcblxuICAgIC8vIE5PVEU6IHRoZSBkZWZhdWx0IHdpZHRoIGFuZCBoZWlnaHQgc2hvdWxkbid0IGJlIGNoYW5nZWQgaGVyZSBhcyBpdCBjYW5cbiAgICAvLyBicmVhayB1bml0IHRlc3RzLlxuXG4gICAgLy93aWR0aDogMTAwMCxcbiAgICAvL2hlaWdodDogMTAwMCxcblxuICAgIHdlYlByZWZlcmVuY2VzOiB7XG4gICAgICAgIHdlYlNlY3VyaXR5OiBmYWxzZSxcbiAgICAgICAgLy8gY2FuIE5PVCBiZSBsb2FkZWQgZnJvbSBmaWxlIFVSTHNcbiAgICAgICAgLy9wcmVsb2FkVVJMOiBcImZpbGU6Ly8vaG9tZS9idXJ0b24vcHJvamVjdHMvcG9sYXItYm9va3NoZWxmL3dlYi9zcGVjdHJvbi9wcmVsb2FkLXRlc3QvcHJlbG9hZC5qc1wiXG4gICAgICAgIC8vcHJlbG9hZFVSTDogXCIuL3ByZWxvYWQuanNcIlxuICAgICAgICBwcmVsb2FkOiBcIi9ob21lL2J1cnRvbi9wcm9qZWN0cy9wb2xhci1ib29rc2hlbGYvdGVzdC9zYW5kYm94L3ByZWxvYWQtd2l0aC1pZnJhbWVzL3ByZWxvYWQuanNcIlxuICAgIH1cblxufTtcblxubGV0IHdpbmRvd0ZhY3Rvcnk6IFdpbmRvd0ZhY3RvcnkgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJDcmVhdGluZyBjdXN0b20gd2luZG93LlwiKVxuICAgIGxldCBtYWluV2luZG93ID0gbmV3IEJyb3dzZXJXaW5kb3coQlJPV1NFUl9PUFRJT05TKTtcbiAgICAvL21haW5XaW5kb3cud2ViQ29udGVudHMudG9nZ2xlRGV2VG9vbHMoKTtcbiAgICBtYWluV2luZG93LmxvYWRVUkwoJ2Fib3V0OmJsYW5rJyk7XG4gICAgcmV0dXJuIG1haW5XaW5kb3c7XG59O1xuXG5TcGVjdHJvbk1haW4ucnVuKGFzeW5jIHN0YXRlID0+IHtcblxuICAgIHN0YXRlLndpbmRvdy5sb2FkRmlsZShfX2Rpcm5hbWUgKyAnL2FwcC5odG1sJyk7XG5cbiAgICBhd2FpdCBzdGF0ZS50ZXN0UmVzdWx0V3JpdGVyLndyaXRlKHRydWUpO1xuXG59LCB7d2luZG93RmFjdG9yeX0pO1xuXG5cblxuXG5cbiJdfQ==