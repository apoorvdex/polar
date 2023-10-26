"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const TestingTime_1 = require("../test/TestingTime");
const chai_1 = require("chai");
const FilePaths_1 = require("../util/FilePaths");
const MockPHZWriter_1 = require("./MockPHZWriter");
const fs = __importStar(require("fs"));
TestingTime_1.TestingTime.freeze();
describe('MockPHZWriter', function () {
    it("Write basic file", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const path = FilePaths_1.FilePaths.createTempName("test-mock-phz-writer.phz");
            yield MockPHZWriter_1.MockPHZWriter.write(path);
            chai_1.assert.equal(fs.existsSync(path), true);
            console.log("Wrote file: " + path);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9ja1BIWldyaXRlclRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNb2NrUEhaV3JpdGVyVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFnRDtBQUNoRCwrQkFBNEI7QUFDNUIsaURBQTRDO0FBQzVDLG1EQUE4QztBQUM5Qyx1Q0FBeUI7QUFFekIseUJBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVyQixRQUFRLENBQUMsZUFBZSxFQUFFO0lBRXRCLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRTs7WUFFbkIsTUFBTSxJQUFJLEdBQUcscUJBQVMsQ0FBQyxjQUFjLENBQUMsMEJBQTBCLENBQUMsQ0FBQztZQUNsRSxNQUFNLDZCQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hDLGFBQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUV2QyxDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1Rlc3RpbmdUaW1lfSBmcm9tICcuLi90ZXN0L1Rlc3RpbmdUaW1lJztcbmltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcbmltcG9ydCB7RmlsZVBhdGhzfSBmcm9tICcuLi91dGlsL0ZpbGVQYXRocyc7XG5pbXBvcnQge01vY2tQSFpXcml0ZXJ9IGZyb20gJy4vTW9ja1BIWldyaXRlcic7XG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XG5cblRlc3RpbmdUaW1lLmZyZWV6ZSgpO1xuXG5kZXNjcmliZSgnTW9ja1BIWldyaXRlcicsIGZ1bmN0aW9uKCkge1xuXG4gICAgaXQoXCJXcml0ZSBiYXNpYyBmaWxlXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBjb25zdCBwYXRoID0gRmlsZVBhdGhzLmNyZWF0ZVRlbXBOYW1lKFwidGVzdC1tb2NrLXBoei13cml0ZXIucGh6XCIpO1xuICAgICAgICBhd2FpdCBNb2NrUEhaV3JpdGVyLndyaXRlKHBhdGgpO1xuICAgICAgICBhc3NlcnQuZXF1YWwoZnMuZXhpc3RzU3luYyhwYXRoKSwgdHJ1ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiV3JvdGUgZmlsZTogXCIgKyBwYXRoKTtcblxuICAgIH0pO1xuXG59KTtcblxuIl19