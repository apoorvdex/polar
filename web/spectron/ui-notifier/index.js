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
const SpectronMain2_1 = require("../../js/test/SpectronMain2");
const WebContentsNotifier_1 = require("../../js/electron/web_contents_notifier/WebContentsNotifier");
SpectronMain2_1.SpectronMain2.create().run((state) => __awaiter(this, void 0, void 0, function* () {
    const helloPromise = WebContentsNotifier_1.WebContentsNotifier.once(state.window.webContents, 'hello');
    state.window.loadURL(`file://${__dirname}/app.html`);
    const mainIPCEvent = yield helloPromise;
    chai_1.assert.equal(mainIPCEvent.message, 'world');
    yield state.testResultWriter.write(true);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0JBQTRCO0FBQzVCLCtEQUEwRDtBQUUxRCxxR0FBZ0c7QUFFaEcsNkJBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBTSxLQUFLLEVBQUMsRUFBRTtJQUVyQyxNQUFNLFlBQVksR0FDWix5Q0FBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFbEUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxTQUFTLFdBQVcsQ0FBQyxDQUFDO0lBRXJELE1BQU0sWUFBWSxHQUFHLE1BQU0sWUFBWSxDQUFDO0lBRXhDLGFBQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUU1QyxNQUFNLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFN0MsQ0FBQyxDQUFBLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcbmltcG9ydCB7U3BlY3Ryb25NYWluMn0gZnJvbSAnLi4vLi4vanMvdGVzdC9TcGVjdHJvbk1haW4yJztcbmltcG9ydCB7TWFpbklQQ0V2ZW50fSBmcm9tICcuLi8uLi9qcy9lbGVjdHJvbi9mcmFtZXdvcmsvSVBDTWFpblByb21pc2VzJztcbmltcG9ydCB7V2ViQ29udGVudHNOb3RpZmllcn0gZnJvbSAnLi4vLi4vanMvZWxlY3Ryb24vd2ViX2NvbnRlbnRzX25vdGlmaWVyL1dlYkNvbnRlbnRzTm90aWZpZXInO1xuXG5TcGVjdHJvbk1haW4yLmNyZWF0ZSgpLnJ1bihhc3luYyBzdGF0ZSA9PiB7XG5cbiAgICBjb25zdCBoZWxsb1Byb21pc2U6IFByb21pc2U8TWFpbklQQ0V2ZW50PHN0cmluZz4+XG4gICAgICAgID0gV2ViQ29udGVudHNOb3RpZmllci5vbmNlKHN0YXRlLndpbmRvdy53ZWJDb250ZW50cywgJ2hlbGxvJyk7XG5cbiAgICBzdGF0ZS53aW5kb3cubG9hZFVSTChgZmlsZTovLyR7X19kaXJuYW1lfS9hcHAuaHRtbGApO1xuXG4gICAgY29uc3QgbWFpbklQQ0V2ZW50ID0gYXdhaXQgaGVsbG9Qcm9taXNlO1xuXG4gICAgYXNzZXJ0LmVxdWFsKG1haW5JUENFdmVudC5tZXNzYWdlLCAnd29ybGQnKTtcblxuICAgIGF3YWl0IHN0YXRlLnRlc3RSZXN1bHRXcml0ZXIud3JpdGUodHJ1ZSk7XG5cbn0pO1xuIl19