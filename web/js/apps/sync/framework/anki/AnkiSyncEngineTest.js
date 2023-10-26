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
const AnkiSyncEngine_1 = require("./AnkiSyncEngine");
const Texts_1 = require("../../../../metadata/Texts");
const TextType_1 = require("../../../../metadata/TextType");
const Flashcards_1 = require("../../../../metadata/Flashcards");
const FlashcardType_1 = require("../../../../metadata/FlashcardType");
const DocMetas_1 = require("../../../../metadata/DocMetas");
xdescribe('AnkiSyncEngine', function () {
    function createMockFlashcard() {
        const text = Texts_1.Texts.create("This is the {{c1::cloze deletion}} text", TextType_1.TextType.MARKDOWN);
        const fields = { text };
        const archetype = "76152976-d7ae-4348-9571-d65e48050c3f";
        return Flashcards_1.Flashcards.create(FlashcardType_1.FlashcardType.CLOZE, fields, archetype, 'page:1');
    }
    function createMockDocMeta() {
        const docMeta = DocMetas_1.MockDocMetas.createMockDocMeta();
        const flashcard = createMockFlashcard();
        const pageMeta = docMeta.getPageMeta(1);
        pageMeta.flashcards[flashcard.id] = flashcard;
        return docMeta;
    }
    it("basic", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const ankiSyncEngine = new AnkiSyncEngine_1.AnkiSyncEngine();
            const docMeta = createMockDocMeta();
            const job = yield ankiSyncEngine.sync([() => __awaiter(this, void 0, void 0, function* () { return docMeta; })], () => console.log("got sync event"));
            yield job.start();
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5raVN5bmNFbmdpbmVUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQW5raVN5bmNFbmdpbmVUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFRQSxxREFBZ0Q7QUFDaEQsc0RBQWlEO0FBQ2pELDREQUF1RDtBQUN2RCxnRUFBMkQ7QUFDM0Qsc0VBQWlFO0FBQ2pFLDREQUEyRDtBQUUzRCxTQUFTLENBQUMsZ0JBQWdCLEVBQUU7SUFFeEIsU0FBUyxtQkFBbUI7UUFFeEIsTUFBTSxJQUFJLEdBQUcsYUFBSyxDQUFDLE1BQU0sQ0FBQyx5Q0FBeUMsRUFBRSxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXhGLE1BQU0sTUFBTSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFFeEIsTUFBTSxTQUFTLEdBQUcsc0NBQXNDLENBQUM7UUFFekQsT0FBTyx1QkFBVSxDQUFDLE1BQU0sQ0FBQyw2QkFBYSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBRS9FLENBQUM7SUFFRCxTQUFTLGlCQUFpQjtRQUV0QixNQUFNLE9BQU8sR0FBRyx1QkFBWSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFakQsTUFBTSxTQUFTLEdBQUcsbUJBQW1CLEVBQUUsQ0FBQztRQUV4QyxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXhDLFFBQVEsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQztRQUU5QyxPQUFPLE9BQU8sQ0FBQztJQUVuQixDQUFDO0lBRUQsRUFBRSxDQUFDLE9BQU8sRUFBRTs7WUFFUixNQUFNLGNBQWMsR0FBRyxJQUFJLCtCQUFjLEVBQUUsQ0FBQztZQUU1QyxNQUFNLE9BQU8sR0FBRyxpQkFBaUIsRUFBRSxDQUFDO1lBRXBDLE1BQU0sR0FBRyxHQUFHLE1BQU0sY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQVMsRUFBRSxnREFBQyxPQUFBLE9BQU8sQ0FBQSxHQUFBLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUVsRyxNQUFNLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUV0QixDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBSVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01lZGlhQ29udGVudHN9IGZyb20gJy4vTWVkaWFDb250ZW50cyc7XG5pbXBvcnQge2Fzc2VydEpTT059IGZyb20gJy4uLy4uLy4uLy4uL3Rlc3QvQXNzZXJ0aW9ucyc7XG5pbXBvcnQge0Rpc2tEYXRhc3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL2RhdGFzdG9yZS9EaXNrRGF0YXN0b3JlJztcbmltcG9ydCB7Rmxhc2hjYXJkRGVzY3JpcHRvcnN9IGZyb20gJy4vRmxhc2hjYXJkRGVzY3JpcHRvcnMnO1xuaW1wb3J0IHtEb2NNZXRhU3VwcGxpZXJDb2xsZWN0aW9ufSBmcm9tICcuLi8uLi8uLi8uLi9tZXRhZGF0YS9Eb2NNZXRhU3VwcGxpZXJDb2xsZWN0aW9uJztcbmltcG9ydCB7RG9jTWV0YX0gZnJvbSAnLi4vLi4vLi4vLi4vbWV0YWRhdGEvRG9jTWV0YSc7XG5pbXBvcnQge0RlZmF1bHRQZXJzaXN0ZW5jZUxheWVyfSBmcm9tICcuLi8uLi8uLi8uLi9kYXRhc3RvcmUvRGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHtBbmtpU3luY0VuZ2luZX0gZnJvbSAnLi9BbmtpU3luY0VuZ2luZSc7XG5pbXBvcnQge1RleHRzfSBmcm9tICcuLi8uLi8uLi8uLi9tZXRhZGF0YS9UZXh0cyc7XG5pbXBvcnQge1RleHRUeXBlfSBmcm9tICcuLi8uLi8uLi8uLi9tZXRhZGF0YS9UZXh0VHlwZSc7XG5pbXBvcnQge0ZsYXNoY2FyZHN9IGZyb20gJy4uLy4uLy4uLy4uL21ldGFkYXRhL0ZsYXNoY2FyZHMnO1xuaW1wb3J0IHtGbGFzaGNhcmRUeXBlfSBmcm9tICcuLi8uLi8uLi8uLi9tZXRhZGF0YS9GbGFzaGNhcmRUeXBlJztcbmltcG9ydCB7TW9ja0RvY01ldGFzfSBmcm9tICcuLi8uLi8uLi8uLi9tZXRhZGF0YS9Eb2NNZXRhcyc7XG5cbnhkZXNjcmliZSgnQW5raVN5bmNFbmdpbmUnLCBmdW5jdGlvbigpIHtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1vY2tGbGFzaGNhcmQoKSB7XG5cbiAgICAgICAgY29uc3QgdGV4dCA9IFRleHRzLmNyZWF0ZShcIlRoaXMgaXMgdGhlIHt7YzE6OmNsb3plIGRlbGV0aW9ufX0gdGV4dFwiLCBUZXh0VHlwZS5NQVJLRE9XTik7XG5cbiAgICAgICAgY29uc3QgZmllbGRzID0geyB0ZXh0IH07XG5cbiAgICAgICAgY29uc3QgYXJjaGV0eXBlID0gXCI3NjE1Mjk3Ni1kN2FlLTQzNDgtOTU3MS1kNjVlNDgwNTBjM2ZcIjtcblxuICAgICAgICByZXR1cm4gRmxhc2hjYXJkcy5jcmVhdGUoRmxhc2hjYXJkVHlwZS5DTE9aRSwgZmllbGRzLCBhcmNoZXR5cGUsICdwYWdlOjEnKTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1vY2tEb2NNZXRhKCkge1xuXG4gICAgICAgIGNvbnN0IGRvY01ldGEgPSBNb2NrRG9jTWV0YXMuY3JlYXRlTW9ja0RvY01ldGEoKTtcblxuICAgICAgICBjb25zdCBmbGFzaGNhcmQgPSBjcmVhdGVNb2NrRmxhc2hjYXJkKCk7XG5cbiAgICAgICAgY29uc3QgcGFnZU1ldGEgPSBkb2NNZXRhLmdldFBhZ2VNZXRhKDEpO1xuXG4gICAgICAgIHBhZ2VNZXRhLmZsYXNoY2FyZHNbZmxhc2hjYXJkLmlkXSA9IGZsYXNoY2FyZDtcblxuICAgICAgICByZXR1cm4gZG9jTWV0YTtcblxuICAgIH1cblxuICAgIGl0KFwiYmFzaWNcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgY29uc3QgYW5raVN5bmNFbmdpbmUgPSBuZXcgQW5raVN5bmNFbmdpbmUoKTtcblxuICAgICAgICBjb25zdCBkb2NNZXRhID0gY3JlYXRlTW9ja0RvY01ldGEoKTtcblxuICAgICAgICBjb25zdCBqb2IgPSBhd2FpdCBhbmtpU3luY0VuZ2luZS5zeW5jKFthc3luYyAoKSA9PiBkb2NNZXRhXSwgKCkgPT4gY29uc29sZS5sb2coXCJnb3Qgc3luYyBldmVudFwiKSk7XG5cbiAgICAgICAgYXdhaXQgam9iLnN0YXJ0KCk7XG5cbiAgICB9KTtcblxuXG5cbn0pO1xuIl19