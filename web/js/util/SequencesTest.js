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
const TestingTime_1 = require("../test/TestingTime");
const Sequences_1 = require("./Sequences");
describe('Sequences', function () {
    it("Large machine and nonces", function () {
        return __awaiter(this, void 0, void 0, function* () {
            TestingTime_1.TestingTime.freeze();
            Sequences_1.Sequences.MACHINE = 999999999999;
            Sequences_1.Sequences.NONCE = 999999999999;
            const seq = Sequences_1.Sequences.create();
            chai_1.assert.equal(seq, "z2012-03-02T11:38:49.321Z+000000-999999999999");
        });
    });
    it("Two issued", function () {
        return __awaiter(this, void 0, void 0, function* () {
            TestingTime_1.TestingTime.freeze();
            Sequences_1.Sequences.MACHINE = 123;
            Sequences_1.Sequences.NONCE = 0;
            chai_1.assert.equal(Sequences_1.Sequences.create(), "z2012-03-02T11:38:49.321Z+000000-000000000123");
            chai_1.assert.equal(Sequences_1.Sequences.create(), "z2012-03-02T11:38:49.321Z+000001-000000000123");
        });
    });
    it("Small machine and nonces", function () {
        return __awaiter(this, void 0, void 0, function* () {
            TestingTime_1.TestingTime.freeze();
            Sequences_1.Sequences.MACHINE = 0;
            Sequences_1.Sequences.NONCE = 0;
            const seq = Sequences_1.Sequences.create();
            chai_1.assert.equal(seq, "z2012-03-02T11:38:49.321Z+000000-000000000000");
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VxdWVuY2VzVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNlcXVlbmNlc1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLCtCQUE0QjtBQUc1QixxREFBZ0Q7QUFDaEQsMkNBQXNDO0FBSXRDLFFBQVEsQ0FBQyxXQUFXLEVBQUU7SUFFbEIsRUFBRSxDQUFDLDBCQUEwQixFQUFFOztZQUUzQix5QkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRXJCLHFCQUFTLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQztZQUNqQyxxQkFBUyxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUM7WUFFL0IsTUFBTSxHQUFHLEdBQUcscUJBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUUvQixhQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSwrQ0FBK0MsQ0FBQyxDQUFDO1FBRXZFLENBQUM7S0FBQSxDQUFDLENBQUM7SUFHSCxFQUFFLENBQUMsWUFBWSxFQUFFOztZQUViLHlCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7WUFFckIscUJBQVMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQ3hCLHFCQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUVwQixhQUFNLENBQUMsS0FBSyxDQUFDLHFCQUFTLENBQUMsTUFBTSxFQUFFLEVBQUUsK0NBQStDLENBQUMsQ0FBQztZQUNsRixhQUFNLENBQUMsS0FBSyxDQUFDLHFCQUFTLENBQUMsTUFBTSxFQUFFLEVBQUUsK0NBQStDLENBQUMsQ0FBQztRQUV0RixDQUFDO0tBQUEsQ0FBQyxDQUFDO0lBR0gsRUFBRSxDQUFDLDBCQUEwQixFQUFFOztZQUUzQix5QkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRXJCLHFCQUFTLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUN0QixxQkFBUyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFFcEIsTUFBTSxHQUFHLEdBQUcscUJBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUUvQixhQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSwrQ0FBK0MsQ0FBQyxDQUFDO1FBRXZFLENBQUM7S0FBQSxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcbmltcG9ydCB7UHJvZ3Jlc3NDYWxjdWxhdG9yfSBmcm9tICcuL1Byb2dyZXNzQ2FsY3VsYXRvcic7XG5pbXBvcnQge1Jlc29sdmFibGVQcm9taXNlfSBmcm9tICcuL1Jlc29sdmFibGVQcm9taXNlJztcbmltcG9ydCB7VGVzdGluZ1RpbWV9IGZyb20gJy4uL3Rlc3QvVGVzdGluZ1RpbWUnO1xuaW1wb3J0IHtTZXF1ZW5jZXN9IGZyb20gJy4vU2VxdWVuY2VzJztcbmltcG9ydCB7SVNPRGF0ZVRpbWVTdHJpbmdzfSBmcm9tICcuLi9tZXRhZGF0YS9JU09EYXRlVGltZVN0cmluZ3MnO1xuXG5cbmRlc2NyaWJlKCdTZXF1ZW5jZXMnLCBmdW5jdGlvbigpIHtcblxuICAgIGl0KFwiTGFyZ2UgbWFjaGluZSBhbmQgbm9uY2VzXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIFRlc3RpbmdUaW1lLmZyZWV6ZSgpO1xuXG4gICAgICAgIFNlcXVlbmNlcy5NQUNISU5FID0gOTk5OTk5OTk5OTk5O1xuICAgICAgICBTZXF1ZW5jZXMuTk9OQ0UgPSA5OTk5OTk5OTk5OTk7XG5cbiAgICAgICAgY29uc3Qgc2VxID0gU2VxdWVuY2VzLmNyZWF0ZSgpO1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChzZXEsIFwiejIwMTItMDMtMDJUMTE6Mzg6NDkuMzIxWiswMDAwMDAtOTk5OTk5OTk5OTk5XCIpO1xuXG4gICAgfSk7XG5cblxuICAgIGl0KFwiVHdvIGlzc3VlZFwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICBUZXN0aW5nVGltZS5mcmVlemUoKTtcblxuICAgICAgICBTZXF1ZW5jZXMuTUFDSElORSA9IDEyMztcbiAgICAgICAgU2VxdWVuY2VzLk5PTkNFID0gMDtcblxuICAgICAgICBhc3NlcnQuZXF1YWwoU2VxdWVuY2VzLmNyZWF0ZSgpLCBcInoyMDEyLTAzLTAyVDExOjM4OjQ5LjMyMVorMDAwMDAwLTAwMDAwMDAwMDEyM1wiKTtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKFNlcXVlbmNlcy5jcmVhdGUoKSwgXCJ6MjAxMi0wMy0wMlQxMTozODo0OS4zMjFaKzAwMDAwMS0wMDAwMDAwMDAxMjNcIik7XG5cbiAgICB9KTtcblxuXG4gICAgaXQoXCJTbWFsbCBtYWNoaW5lIGFuZCBub25jZXNcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgVGVzdGluZ1RpbWUuZnJlZXplKCk7XG5cbiAgICAgICAgU2VxdWVuY2VzLk1BQ0hJTkUgPSAwO1xuICAgICAgICBTZXF1ZW5jZXMuTk9OQ0UgPSAwO1xuXG4gICAgICAgIGNvbnN0IHNlcSA9IFNlcXVlbmNlcy5jcmVhdGUoKTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwoc2VxLCBcInoyMDEyLTAzLTAyVDExOjM4OjQ5LjMyMVorMDAwMDAwLTAwMDAwMDAwMDAwMFwiKTtcblxuICAgIH0pO1xuXG59KTtcblxuXG4iXX0=