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
const FilePaths_1 = require("../util/FilePaths");
const MockCapturedContent_1 = require("./MockCapturedContent");
const CapturedPHZWriter_1 = require("./CapturedPHZWriter");
const TestingTime_1 = require("../test/TestingTime");
describe('CapturedPHZWriter', function () {
    it("write out captured JSON", function () {
        return __awaiter(this, void 0, void 0, function* () {
            TestingTime_1.TestingTime.freeze();
            const captured = MockCapturedContent_1.MockCapturedContent.create();
            const capturedPHZWriter = new CapturedPHZWriter_1.CapturedPHZWriter(FilePaths_1.FilePaths.tmpfile("captured.phz"));
            yield capturedPHZWriter.convert(captured);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FwdHVyZWRQSFpXcml0ZXJUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ2FwdHVyZWRQSFpXcml0ZXJUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxpREFBNEM7QUFDNUMsK0RBQTBEO0FBQzFELDJEQUFzRDtBQUN0RCxxREFBZ0Q7QUFFaEQsUUFBUSxDQUFDLG1CQUFtQixFQUFFO0lBRTFCLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRTs7WUFDMUIseUJBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUVyQixNQUFNLFFBQVEsR0FBRyx5Q0FBbUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUU5QyxNQUFNLGlCQUFpQixHQUFHLElBQUkscUNBQWlCLENBQUMscUJBQVMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUNuRixNQUFNLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUU5QyxDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZpbGVQYXRoc30gZnJvbSAnLi4vdXRpbC9GaWxlUGF0aHMnO1xuaW1wb3J0IHtNb2NrQ2FwdHVyZWRDb250ZW50fSBmcm9tICcuL01vY2tDYXB0dXJlZENvbnRlbnQnO1xuaW1wb3J0IHtDYXB0dXJlZFBIWldyaXRlcn0gZnJvbSAnLi9DYXB0dXJlZFBIWldyaXRlcic7XG5pbXBvcnQge1Rlc3RpbmdUaW1lfSBmcm9tICcuLi90ZXN0L1Rlc3RpbmdUaW1lJztcblxuZGVzY3JpYmUoJ0NhcHR1cmVkUEhaV3JpdGVyJywgZnVuY3Rpb24oKSB7XG5cbiAgICBpdChcIndyaXRlIG91dCBjYXB0dXJlZCBKU09OXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgVGVzdGluZ1RpbWUuZnJlZXplKCk7XG5cbiAgICAgICAgY29uc3QgY2FwdHVyZWQgPSBNb2NrQ2FwdHVyZWRDb250ZW50LmNyZWF0ZSgpO1xuXG4gICAgICAgIGNvbnN0IGNhcHR1cmVkUEhaV3JpdGVyID0gbmV3IENhcHR1cmVkUEhaV3JpdGVyKEZpbGVQYXRocy50bXBmaWxlKFwiY2FwdHVyZWQucGh6XCIpKTtcbiAgICAgICAgYXdhaXQgY2FwdHVyZWRQSFpXcml0ZXIuY29udmVydChjYXB0dXJlZCk7XG5cbiAgICB9KTtcblxufSk7XG4iXX0=