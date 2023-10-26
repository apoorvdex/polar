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
    electron_1.ipcRenderer.on('what-is-your-name', (event, message) => {
        console.log("Received event and message: ", { event, message });
        event.sender.send('and-what-is-your-name', 'my name is ipcRenderer');
    });
    electron_1.ipcRenderer.on('oh-my-name-is', (event, message) => {
        console.log("Received event and message: ", { event, message });
    });
    electron_1.ipcRenderer.send('hello', 'this is the message');
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1Q0FBcUM7QUFDckMsd0VBQW1FO0FBRW5FLG1DQUFnQixDQUFDLEdBQUcsQ0FBQyxHQUFTLEVBQUU7SUFFNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0lBRXBELHNCQUFXLENBQUMsRUFBRSxDQUFDLG1CQUFtQixFQUFFLENBQUMsS0FBcUIsRUFBRSxPQUFZLEVBQUUsRUFBRTtRQUN4RSxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixFQUFFLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7UUFFOUQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztJQUV6RSxDQUFDLENBQUMsQ0FBQztJQUVILHNCQUFXLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQXFCLEVBQUUsT0FBWSxFQUFFLEVBQUU7UUFDcEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsRUFBRSxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUMsQ0FBQyxDQUFDO0lBRUgsc0JBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLHFCQUFxQixDQUFDLENBQUM7QUFFckQsQ0FBQyxDQUFBLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXBjUmVuZGVyZXJ9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCB7U3BlY3Ryb25SZW5kZXJlcn0gZnJvbSAnLi4vLi4vLi4vanMvdGVzdC9TcGVjdHJvblJlbmRlcmVyJztcblxuU3BlY3Ryb25SZW5kZXJlci5ydW4oYXN5bmMgKCkgPT4ge1xuXG4gICAgY29uc29sZS5sb2coXCJSdW5uaW5nIHdpdGhpbiBTcGVjdHJvblJlbmRlcmVyIG5vdy5cIik7XG5cbiAgICBpcGNSZW5kZXJlci5vbignd2hhdC1pcy15b3VyLW5hbWUnLCAoZXZlbnQ6IEVsZWN0cm9uLkV2ZW50LCBtZXNzYWdlOiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZWNlaXZlZCBldmVudCBhbmQgbWVzc2FnZTogXCIsIHtldmVudCwgbWVzc2FnZX0pO1xuXG4gICAgICAgIGV2ZW50LnNlbmRlci5zZW5kKCdhbmQtd2hhdC1pcy15b3VyLW5hbWUnLCAnbXkgbmFtZSBpcyBpcGNSZW5kZXJlcicpO1xuXG4gICAgfSk7XG5cbiAgICBpcGNSZW5kZXJlci5vbignb2gtbXktbmFtZS1pcycsIChldmVudDogRWxlY3Ryb24uRXZlbnQsIG1lc3NhZ2U6IGFueSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlJlY2VpdmVkIGV2ZW50IGFuZCBtZXNzYWdlOiBcIiwge2V2ZW50LCBtZXNzYWdlfSk7XG4gICAgfSk7XG5cbiAgICBpcGNSZW5kZXJlci5zZW5kKCdoZWxsbycsICd0aGlzIGlzIHRoZSBtZXNzYWdlJyk7XG5cbn0pO1xuIl19