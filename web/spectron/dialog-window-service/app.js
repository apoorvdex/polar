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
const SpectronRenderer_1 = require("../../js/test/SpectronRenderer");
const DialogWindowClient_1 = require("../../js/ui/dialog_window/DialogWindowClient");
const DialogWindow_1 = require("../../js/ui/dialog_window/DialogWindow");
SpectronRenderer_1.SpectronRenderer.run((state) => __awaiter(this, void 0, void 0, function* () {
    console.log("Going to create dialog");
    const appPath = __dirname + "/dialog.html";
    const resource = new DialogWindow_1.Resource(DialogWindow_1.ResourceType.FILE, appPath);
    const dialogWindowOptions = new DialogWindow_1.DialogWindowOptions(resource);
    const dialogWindowClient = yield DialogWindowClient_1.DialogWindowClient.create(dialogWindowOptions);
    yield dialogWindowClient.hide();
    yield dialogWindowClient.show();
    yield dialogWindowClient.hide();
    yield dialogWindowClient.show();
    state.testResultWriter.write(true);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxRUFBZ0U7QUFDaEUscUZBQWdGO0FBQ2hGLHlFQUlnRDtBQUVoRCxtQ0FBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBTyxLQUFLLEVBQUUsRUFBRTtJQUVqQyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFFdEMsTUFBTSxPQUFPLEdBQUcsU0FBUyxHQUFHLGNBQWMsQ0FBQztJQUMzQyxNQUFNLFFBQVEsR0FBRyxJQUFJLHVCQUFRLENBQUMsMkJBQVksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUQsTUFBTSxtQkFBbUIsR0FBRyxJQUFJLGtDQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRTlELE1BQU0sa0JBQWtCLEdBQUcsTUFBTSx1Q0FBa0IsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUVoRixNQUFNLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO0lBRWhDLE1BQU0sa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFaEMsTUFBTSxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUVoQyxNQUFNLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO0lBRWhDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFdkMsQ0FBQyxDQUFBLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3BlY3Ryb25SZW5kZXJlcn0gZnJvbSAnLi4vLi4vanMvdGVzdC9TcGVjdHJvblJlbmRlcmVyJztcbmltcG9ydCB7RGlhbG9nV2luZG93Q2xpZW50fSBmcm9tICcuLi8uLi9qcy91aS9kaWFsb2dfd2luZG93L0RpYWxvZ1dpbmRvd0NsaWVudCc7XG5pbXBvcnQge1xuICAgIERpYWxvZ1dpbmRvd09wdGlvbnMsXG4gICAgUmVzb3VyY2UsXG4gICAgUmVzb3VyY2VUeXBlXG59IGZyb20gJy4uLy4uL2pzL3VpL2RpYWxvZ193aW5kb3cvRGlhbG9nV2luZG93JztcblxuU3BlY3Ryb25SZW5kZXJlci5ydW4oYXN5bmMgKHN0YXRlKSA9PiB7XG5cbiAgICBjb25zb2xlLmxvZyhcIkdvaW5nIHRvIGNyZWF0ZSBkaWFsb2dcIik7XG5cbiAgICBjb25zdCBhcHBQYXRoID0gX19kaXJuYW1lICsgXCIvZGlhbG9nLmh0bWxcIjtcbiAgICBjb25zdCByZXNvdXJjZSA9IG5ldyBSZXNvdXJjZShSZXNvdXJjZVR5cGUuRklMRSwgYXBwUGF0aCk7XG4gICAgY29uc3QgZGlhbG9nV2luZG93T3B0aW9ucyA9IG5ldyBEaWFsb2dXaW5kb3dPcHRpb25zKHJlc291cmNlKTtcblxuICAgIGNvbnN0IGRpYWxvZ1dpbmRvd0NsaWVudCA9IGF3YWl0IERpYWxvZ1dpbmRvd0NsaWVudC5jcmVhdGUoZGlhbG9nV2luZG93T3B0aW9ucyk7XG5cbiAgICBhd2FpdCBkaWFsb2dXaW5kb3dDbGllbnQuaGlkZSgpO1xuXG4gICAgYXdhaXQgZGlhbG9nV2luZG93Q2xpZW50LnNob3coKTtcblxuICAgIGF3YWl0IGRpYWxvZ1dpbmRvd0NsaWVudC5oaWRlKCk7XG5cbiAgICBhd2FpdCBkaWFsb2dXaW5kb3dDbGllbnQuc2hvdygpO1xuXG4gICAgc3RhdGUudGVzdFJlc3VsdFdyaXRlci53cml0ZSh0cnVlKTtcblxufSk7XG4iXX0=