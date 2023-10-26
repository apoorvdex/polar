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
const MockCapturedContent_1 = require("../capture/MockCapturedContent");
const CapturedPHZWriter_1 = require("../capture/CapturedPHZWriter");
class MockPHZWriter {
    static write(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const captured = MockCapturedContent_1.MockCapturedContent.create();
            const capturedPHZWriter = new CapturedPHZWriter_1.CapturedPHZWriter(path);
            yield capturedPHZWriter.convert(captured);
        });
    }
}
exports.MockPHZWriter = MockPHZWriter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9ja1BIWldyaXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1vY2tQSFpXcml0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBLHdFQUFtRTtBQUNuRSxvRUFBK0Q7QUFFL0QsTUFBYSxhQUFhO0lBRWYsTUFBTSxDQUFPLEtBQUssQ0FBQyxJQUFZOztZQUVsQyxNQUFNLFFBQVEsR0FBRyx5Q0FBbUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUU5QyxNQUFNLGlCQUFpQixHQUFHLElBQUkscUNBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEQsTUFBTSxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFOUMsQ0FBQztLQUFBO0NBRUo7QUFYRCxzQ0FXQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV3JpdGUgbW9jayBQSFogZGF0YSB0byBhIGZpbGUgd2UgY2FuIHdvcmsgd2l0aC5cbiAqL1xuaW1wb3J0IHtNb2NrQ2FwdHVyZWRDb250ZW50fSBmcm9tICcuLi9jYXB0dXJlL01vY2tDYXB0dXJlZENvbnRlbnQnO1xuaW1wb3J0IHtDYXB0dXJlZFBIWldyaXRlcn0gZnJvbSAnLi4vY2FwdHVyZS9DYXB0dXJlZFBIWldyaXRlcic7XG5cbmV4cG9ydCBjbGFzcyBNb2NrUEhaV3JpdGVyIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgd3JpdGUocGF0aDogc3RyaW5nKSB7XG5cbiAgICAgICAgY29uc3QgY2FwdHVyZWQgPSBNb2NrQ2FwdHVyZWRDb250ZW50LmNyZWF0ZSgpO1xuXG4gICAgICAgIGNvbnN0IGNhcHR1cmVkUEhaV3JpdGVyID0gbmV3IENhcHR1cmVkUEhaV3JpdGVyKHBhdGgpO1xuICAgICAgICBhd2FpdCBjYXB0dXJlZFBIWldyaXRlci5jb252ZXJ0KGNhcHR1cmVkKTtcblxuICAgIH1cblxufVxuIl19