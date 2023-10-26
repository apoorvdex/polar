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
SpectronMain_1.SpectronMain.run((state) => __awaiter(this, void 0, void 0, function* () {
    state.window.loadFile(__dirname + '/app.html');
    electron_1.ipcMain.on('hello', (event, message) => {
        console.log("Received event and message: ", { event, message });
        event.sender.send('what-is-your-name', 'this is a response message from ipcMain');
    });
    electron_1.ipcMain.on('and-what-is-your-name', (event, message) => {
        console.log("Received event and message: ", { event, message });
        event.sender.send('oh-my-name-is', 'oh, yeah. my name is ipcMain');
    });
    yield state.testResultWriter.write(true);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELHVDQUFpQztBQUVqQywyQkFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFNLEtBQUssRUFBQyxFQUFFO0lBRTNCLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsQ0FBQztJQUUvQyxrQkFBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFxQixFQUFFLE9BQVksRUFBRSxFQUFFO1FBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLEVBQUUsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQztRQUM5RCxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSx5Q0FBeUMsQ0FBQyxDQUFDO0lBQ3RGLENBQUMsQ0FBQyxDQUFDO0lBRUgsa0JBQU8sQ0FBQyxFQUFFLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxLQUFxQixFQUFFLE9BQVksRUFBRSxFQUFFO1FBQ3hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLEVBQUUsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQztRQUM5RCxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsOEJBQThCLENBQUMsQ0FBQztJQUN2RSxDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sS0FBSyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUU3QyxDQUFDLENBQUEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTcGVjdHJvbk1haW59IGZyb20gJy4uLy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb25NYWluJztcbmltcG9ydCB7aXBjTWFpbn0gZnJvbSBcImVsZWN0cm9uXCI7XG5cblNwZWN0cm9uTWFpbi5ydW4oYXN5bmMgc3RhdGUgPT4ge1xuXG4gICAgc3RhdGUud2luZG93LmxvYWRGaWxlKF9fZGlybmFtZSArICcvYXBwLmh0bWwnKTtcblxuICAgIGlwY01haW4ub24oJ2hlbGxvJywgKGV2ZW50OiBFbGVjdHJvbi5FdmVudCwgbWVzc2FnZTogYW55KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVjZWl2ZWQgZXZlbnQgYW5kIG1lc3NhZ2U6IFwiLCB7ZXZlbnQsIG1lc3NhZ2V9KTtcbiAgICAgICAgZXZlbnQuc2VuZGVyLnNlbmQoJ3doYXQtaXMteW91ci1uYW1lJywgJ3RoaXMgaXMgYSByZXNwb25zZSBtZXNzYWdlIGZyb20gaXBjTWFpbicpO1xuICAgIH0pO1xuXG4gICAgaXBjTWFpbi5vbignYW5kLXdoYXQtaXMteW91ci1uYW1lJywgKGV2ZW50OiBFbGVjdHJvbi5FdmVudCwgbWVzc2FnZTogYW55KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVjZWl2ZWQgZXZlbnQgYW5kIG1lc3NhZ2U6IFwiLCB7ZXZlbnQsIG1lc3NhZ2V9KTtcbiAgICAgICAgZXZlbnQuc2VuZGVyLnNlbmQoJ29oLW15LW5hbWUtaXMnLCAnb2gsIHllYWguIG15IG5hbWUgaXMgaXBjTWFpbicpO1xuICAgIH0pO1xuXG4gICAgYXdhaXQgc3RhdGUudGVzdFJlc3VsdFdyaXRlci53cml0ZSh0cnVlKTtcblxufSk7XG4iXX0=