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
const SpectronMain2_1 = require("../../js/test/SpectronMain2");
SpectronMain2_1.SpectronMain2.create().run((state) => __awaiter(this, void 0, void 0, function* () {
    state.window.loadURL(`file://${__dirname}/content.html`);
    yield state.testResultWriter.write(true);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBRTFELDZCQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQU0sS0FBSyxFQUFDLEVBQUU7SUFFckMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxTQUFTLGVBQWUsQ0FBQyxDQUFDO0lBRXpELE1BQU0sS0FBSyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUU3QyxDQUFDLENBQUEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTcGVjdHJvbk1haW4yfSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uTWFpbjInO1xuXG5TcGVjdHJvbk1haW4yLmNyZWF0ZSgpLnJ1bihhc3luYyBzdGF0ZSA9PiB7XG5cbiAgICBzdGF0ZS53aW5kb3cubG9hZFVSTChgZmlsZTovLyR7X19kaXJuYW1lfS9jb250ZW50Lmh0bWxgKTtcblxuICAgIGF3YWl0IHN0YXRlLnRlc3RSZXN1bHRXcml0ZXIud3JpdGUodHJ1ZSk7XG5cbn0pO1xuXG5cbiJdfQ==