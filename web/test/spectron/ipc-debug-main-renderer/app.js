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
const SpectronRenderer_1 = require("../../../js/test/SpectronRenderer");
SpectronRenderer_1.SpectronRenderer.run(() => __awaiter(this, void 0, void 0, function* () {
    console.log("Running within SpectronRenderer now.");
    electron_1.ipcRenderer.on('hello', (event, message) => {
        console.log("Received event and message: ", { event, message });
        event.sender.send('what-is-your-name', 'this is a response message from ipcMain');
    });
    electron_1.ipcRenderer.on('and-what-is-your-name', (event, message) => {
        console.log("Received event and message: ", { event, message });
        event.sender.send('oh-my-name-is', 'oh, yeah. my name is ipcMain');
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1Q0FBOEM7QUFDOUMsd0VBQW1FO0FBRW5FLG1DQUFnQixDQUFDLEdBQUcsQ0FBQyxHQUFTLEVBQUU7SUFFNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0lBRXBELHNCQUFXLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQXFCLEVBQUUsT0FBWSxFQUFFLEVBQUU7UUFDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsRUFBRSxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDO1FBQzlELEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLHlDQUF5QyxDQUFDLENBQUM7SUFDdEYsQ0FBQyxDQUFDLENBQUM7SUFFSCxzQkFBVyxDQUFDLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLEtBQXFCLEVBQUUsT0FBWSxFQUFFLEVBQUU7UUFDNUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsRUFBRSxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDO1FBQzlELEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO0lBQ3ZFLENBQUMsQ0FBQyxDQUFDO0FBR1AsQ0FBQyxDQUFBLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXBjTWFpbiwgaXBjUmVuZGVyZXJ9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCB7U3BlY3Ryb25SZW5kZXJlcn0gZnJvbSAnLi4vLi4vLi4vanMvdGVzdC9TcGVjdHJvblJlbmRlcmVyJztcblxuU3BlY3Ryb25SZW5kZXJlci5ydW4oYXN5bmMgKCkgPT4ge1xuXG4gICAgY29uc29sZS5sb2coXCJSdW5uaW5nIHdpdGhpbiBTcGVjdHJvblJlbmRlcmVyIG5vdy5cIik7XG5cbiAgICBpcGNSZW5kZXJlci5vbignaGVsbG8nLCAoZXZlbnQ6IEVsZWN0cm9uLkV2ZW50LCBtZXNzYWdlOiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZWNlaXZlZCBldmVudCBhbmQgbWVzc2FnZTogXCIsIHtldmVudCwgbWVzc2FnZX0pO1xuICAgICAgICBldmVudC5zZW5kZXIuc2VuZCgnd2hhdC1pcy15b3VyLW5hbWUnLCAndGhpcyBpcyBhIHJlc3BvbnNlIG1lc3NhZ2UgZnJvbSBpcGNNYWluJyk7XG4gICAgfSk7XG5cbiAgICBpcGNSZW5kZXJlci5vbignYW5kLXdoYXQtaXMteW91ci1uYW1lJywgKGV2ZW50OiBFbGVjdHJvbi5FdmVudCwgbWVzc2FnZTogYW55KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVjZWl2ZWQgZXZlbnQgYW5kIG1lc3NhZ2U6IFwiLCB7ZXZlbnQsIG1lc3NhZ2V9KTtcbiAgICAgICAgZXZlbnQuc2VuZGVyLnNlbmQoJ29oLW15LW5hbWUtaXMnLCAnb2gsIHllYWguIG15IG5hbWUgaXMgaXBjTWFpbicpO1xuICAgIH0pO1xuXG5cbn0pO1xuIl19