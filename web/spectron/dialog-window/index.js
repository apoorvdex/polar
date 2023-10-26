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
const SpectronMain_1 = require("../../js/test/SpectronMain");
const DialogWindow_1 = require("../../js/ui/dialog_window/DialogWindow");
let windowFactory = () => __awaiter(this, void 0, void 0, function* () {
    let resource = new DialogWindow_1.Resource(DialogWindow_1.ResourceType.FILE, __dirname + "/app.html");
    let dialogWindow = yield DialogWindow_1.DialogWindow.create(new DialogWindow_1.DialogWindowOptions(resource));
    return dialogWindow.window;
});
SpectronMain_1.SpectronMain.run(() => __awaiter(this, void 0, void 0, function* () {
}), { windowFactory });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNkRBQTRGO0FBQzVGLHlFQUlnRDtBQUVoRCxJQUFJLGFBQWEsR0FBa0IsR0FBUyxFQUFFO0lBRTFDLElBQUksUUFBUSxHQUFHLElBQUksdUJBQVEsQ0FBQywyQkFBWSxDQUFDLElBQUksRUFBRSxTQUFTLEdBQUcsV0FBVyxDQUFDLENBQUM7SUFDeEUsSUFBSSxZQUFZLEdBQUcsTUFBTSwyQkFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLGtDQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFFaEYsT0FBTyxZQUFZLENBQUMsTUFBTSxDQUFDO0FBQy9CLENBQUMsQ0FBQSxDQUFDO0FBRUYsMkJBQVksQ0FBQyxHQUFHLENBQUMsR0FBUyxFQUFFO0FBRTVCLENBQUMsQ0FBQSxFQUFFLEVBQUMsYUFBYSxFQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3BlY3Ryb25NYWluLCBTcGVjdHJvbk1haW5PcHRpb25zLCBXaW5kb3dGYWN0b3J5fSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uTWFpbic7XG5pbXBvcnQge1xuICAgIERpYWxvZ1dpbmRvdyxcbiAgICBEaWFsb2dXaW5kb3dPcHRpb25zLFxuICAgIFJlc291cmNlLCBSZXNvdXJjZVR5cGVcbn0gZnJvbSAnLi4vLi4vanMvdWkvZGlhbG9nX3dpbmRvdy9EaWFsb2dXaW5kb3cnO1xuXG5sZXQgd2luZG93RmFjdG9yeTogV2luZG93RmFjdG9yeSA9IGFzeW5jICgpID0+IHtcblxuICAgIGxldCByZXNvdXJjZSA9IG5ldyBSZXNvdXJjZShSZXNvdXJjZVR5cGUuRklMRSwgX19kaXJuYW1lICsgXCIvYXBwLmh0bWxcIik7XG4gICAgbGV0IGRpYWxvZ1dpbmRvdyA9IGF3YWl0IERpYWxvZ1dpbmRvdy5jcmVhdGUobmV3IERpYWxvZ1dpbmRvd09wdGlvbnMocmVzb3VyY2UpKTtcbiAgICAvL2RpYWxvZ1dpbmRvdy53aW5kb3cud2ViQ29udGVudHMudG9nZ2xlRGV2VG9vbHMoKTtcbiAgICByZXR1cm4gZGlhbG9nV2luZG93LndpbmRvdztcbn07XG5cblNwZWN0cm9uTWFpbi5ydW4oYXN5bmMgKCkgPT4ge1xuXG59LCB7d2luZG93RmFjdG9yeX0pO1xuIl19