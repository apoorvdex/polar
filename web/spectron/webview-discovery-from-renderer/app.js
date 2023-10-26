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
const chai_1 = require("chai");
const SpectronRenderer_1 = require("../../js/test/SpectronRenderer");
SpectronRenderer_1.SpectronRenderer.run((state) => __awaiter(this, void 0, void 0, function* () {
    const content = document.querySelector("#content");
    chai_1.assert.ok(content);
    content.addEventListener('dom-ready', () => __awaiter(this, void 0, void 0, function* () {
        const webContents = content.getWebContents();
        chai_1.assert.ok(webContents);
        chai_1.assert.ok(webContents.id);
        chai_1.assert.ok(typeof webContents.id === 'number');
        yield state.testResultWriter.write(true);
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwrQkFBNEI7QUFFNUIscUVBQWdFO0FBRWhFLG1DQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFPLEtBQUssRUFBRSxFQUFFO0lBRWpDLE1BQU0sT0FBTyxHQUF5QixRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBRSxDQUFDO0lBRTFFLGFBQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFbkIsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxHQUFTLEVBQUU7UUFFN0MsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRTdDLGFBQU0sQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFdkIsYUFBTSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFMUIsYUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLFdBQVcsQ0FBQyxFQUFFLEtBQUssUUFBUSxDQUFDLENBQUM7UUFFOUMsTUFBTSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTdDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFHUCxDQUFDLENBQUEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHt3ZWJGcmFtZX0gZnJvbSAnZWxlY3Ryb24nO1xuaW1wb3J0IHtTcGVjdHJvblJlbmRlcmVyfSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uUmVuZGVyZXInO1xuXG5TcGVjdHJvblJlbmRlcmVyLnJ1bihhc3luYyAoc3RhdGUpID0+IHtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSA8RWxlY3Ryb24uV2Vidmlld1RhZz4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpITtcblxuICAgIGFzc2VydC5vayhjb250ZW50KTtcblxuICAgIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignZG9tLXJlYWR5JywgYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IHdlYkNvbnRlbnRzID0gY29udGVudC5nZXRXZWJDb250ZW50cygpO1xuXG4gICAgICAgIGFzc2VydC5vayh3ZWJDb250ZW50cyk7XG5cbiAgICAgICAgYXNzZXJ0Lm9rKHdlYkNvbnRlbnRzLmlkKTtcblxuICAgICAgICBhc3NlcnQub2sodHlwZW9mIHdlYkNvbnRlbnRzLmlkID09PSAnbnVtYmVyJyk7XG5cbiAgICAgICAgYXdhaXQgc3RhdGUudGVzdFJlc3VsdFdyaXRlci53cml0ZSh0cnVlKTtcblxuICAgIH0pO1xuXG5cbn0pO1xuXG5cblxuIl19