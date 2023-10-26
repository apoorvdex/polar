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
const Fingerprints_1 = require("./Fingerprints");
const chai_1 = require("chai");
describe('Fingerprints', function () {
    it("toFilename", function () {
        return __awaiter(this, void 0, void 0, function* () {
            chai_1.assert.equal(Fingerprints_1.Fingerprints.toFilename("hello.chtml", "0x0001"), "hello-0x0001.chtml");
        });
    });
    it("fromFilename", function () {
        return __awaiter(this, void 0, void 0, function* () {
            chai_1.assert.equal(Fingerprints_1.Fingerprints.fromFilename("hello-0x0001.chtml"), "0x0001");
        });
    });
    it("create", function () {
        return __awaiter(this, void 0, void 0, function* () {
            chai_1.assert.equal(Fingerprints_1.Fingerprints.create("xxxxx"), "1Ufomfbkk3Js2YGDZr4c");
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmluZ2VycHJpbnRzVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkZpbmdlcnByaW50c1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGlEQUE0QztBQUU1QywrQkFBNEI7QUFFNUIsUUFBUSxDQUFDLGNBQWMsRUFBRTtJQUVyQixFQUFFLENBQUMsWUFBWSxFQUFFOztZQUViLGFBQU0sQ0FBQyxLQUFLLENBQUMsMkJBQVksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFFekYsQ0FBQztLQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxjQUFjLEVBQUU7O1lBRWYsYUFBTSxDQUFDLEtBQUssQ0FBQywyQkFBWSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRTVFLENBQUM7S0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsUUFBUSxFQUFFOztZQUVULGFBQU0sQ0FBQyxLQUFLLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztRQUV2RSxDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZpbmdlcnByaW50c30gZnJvbSAnLi9GaW5nZXJwcmludHMnO1xuXG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5cbmRlc2NyaWJlKCdGaW5nZXJwcmludHMnLCBmdW5jdGlvbigpIHtcblxuICAgIGl0KFwidG9GaWxlbmFtZVwiLCBhc3luYyBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKEZpbmdlcnByaW50cy50b0ZpbGVuYW1lKFwiaGVsbG8uY2h0bWxcIiwgXCIweDAwMDFcIiksIFwiaGVsbG8tMHgwMDAxLmNodG1sXCIpO1xuXG4gICAgfSk7XG5cbiAgICBpdChcImZyb21GaWxlbmFtZVwiLCBhc3luYyBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKEZpbmdlcnByaW50cy5mcm9tRmlsZW5hbWUoXCJoZWxsby0weDAwMDEuY2h0bWxcIiksIFwiMHgwMDAxXCIpO1xuXG4gICAgfSk7XG5cbiAgICBpdChcImNyZWF0ZVwiLCBhc3luYyBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKEZpbmdlcnByaW50cy5jcmVhdGUoXCJ4eHh4eFwiKSwgXCIxVWZvbWZia2szSnMyWUdEWnI0Y1wiKTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==