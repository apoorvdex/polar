"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const CreateFlashcardApp_1 = require("../../js/apps/card_creator/CreateFlashcardApp");
const SpectronRenderer_1 = require("../../js/test/SpectronRenderer");
SpectronRenderer_1.SpectronRenderer.run((state) => __awaiter(this, void 0, void 0, function* () {
    yield new CreateFlashcardApp_1.CreateFlashcardApp().start();
    assert_1.default.equal(document.querySelector('#root__title').textContent, 'Flashcard');
    assert_1.default.ok(document.querySelector('#root_front'));
    assert_1.default.ok(document.querySelector('#root_back'));
    yield state.testResultWriter.write(true);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBNEI7QUFDNUIsc0ZBQWlGO0FBQ2pGLHFFQUFnRTtBQUVoRSxtQ0FBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBTyxLQUFLLEVBQUUsRUFBRTtJQUVqQyxNQUFNLElBQUksdUNBQWtCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUl2QyxnQkFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBRSxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUUvRSxnQkFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDakQsZ0JBQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBRWhELE1BQU0sS0FBSyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUU3QyxDQUFDLENBQUEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFzc2VydCBmcm9tICdhc3NlcnQnO1xuaW1wb3J0IHtDcmVhdGVGbGFzaGNhcmRBcHB9IGZyb20gJy4uLy4uL2pzL2FwcHMvY2FyZF9jcmVhdG9yL0NyZWF0ZUZsYXNoY2FyZEFwcCc7XG5pbXBvcnQge1NwZWN0cm9uUmVuZGVyZXJ9IGZyb20gJy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb25SZW5kZXJlcic7XG5cblNwZWN0cm9uUmVuZGVyZXIucnVuKGFzeW5jIChzdGF0ZSkgPT4ge1xuXG4gICAgYXdhaXQgbmV3IENyZWF0ZUZsYXNoY2FyZEFwcCgpLnN0YXJ0KCk7XG5cbiAgICAvLyBub3cgc2VlIGlmIHRoZSBVSSBpcyBwcm9wZXJseSBsb2FkZWQuLi5cblxuICAgIGFzc2VydC5lcXVhbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdF9fdGl0bGUnKSEudGV4dENvbnRlbnQsICdGbGFzaGNhcmQnKTtcblxuICAgIGFzc2VydC5vayhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdF9mcm9udCcpKTtcbiAgICBhc3NlcnQub2soZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb3RfYmFjaycpKTtcblxuICAgIGF3YWl0IHN0YXRlLnRlc3RSZXN1bHRXcml0ZXIud3JpdGUodHJ1ZSk7XG5cbn0pO1xuIl19