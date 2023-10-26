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
const ProgressCalculator_1 = require("./ProgressCalculator");
describe('ProgressTest', function () {
    it("Basic Progress", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const progress = new ProgressCalculator_1.ProgressCalculator(4);
            chai_1.assert.equal(progress.percentage(), 0);
            progress.incr();
            chai_1.assert.equal(progress.percentage(), 25);
            progress.incr();
            progress.incr();
            progress.incr();
            chai_1.assert.equal(progress.percentage(), 100);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUHJvZ3Jlc3NUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwrQkFBNEI7QUFDNUIsNkRBQXdEO0FBR3hELFFBQVEsQ0FBQyxjQUFjLEVBQUU7SUFFckIsRUFBRSxDQUFDLGdCQUFnQixFQUFFOztZQUVqQixNQUFNLFFBQVEsR0FBRyxJQUFJLHVDQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRTNDLGFBQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRXZDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNoQixhQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN4QyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDaEIsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2hCLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNoQixhQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUU3QyxDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQge1Byb2dyZXNzQ2FsY3VsYXRvcn0gZnJvbSAnLi9Qcm9ncmVzc0NhbGN1bGF0b3InO1xuXG5cbmRlc2NyaWJlKCdQcm9ncmVzc1Rlc3QnLCBmdW5jdGlvbigpIHtcblxuICAgIGl0KFwiQmFzaWMgUHJvZ3Jlc3NcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IHByb2dyZXNzID0gbmV3IFByb2dyZXNzQ2FsY3VsYXRvcig0KTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwocHJvZ3Jlc3MucGVyY2VudGFnZSgpLCAwKTtcblxuICAgICAgICBwcm9ncmVzcy5pbmNyKCk7XG4gICAgICAgIGFzc2VydC5lcXVhbChwcm9ncmVzcy5wZXJjZW50YWdlKCksIDI1KTtcbiAgICAgICAgcHJvZ3Jlc3MuaW5jcigpO1xuICAgICAgICBwcm9ncmVzcy5pbmNyKCk7XG4gICAgICAgIHByb2dyZXNzLmluY3IoKTtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKHByb2dyZXNzLnBlcmNlbnRhZ2UoKSwgMTAwKTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==