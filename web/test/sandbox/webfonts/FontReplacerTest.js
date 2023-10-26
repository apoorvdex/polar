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
const FontReplacer_1 = require("./FontReplacer");
describe('FontReplacer', function () {
    it("basic", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const styles = FontReplacer_1.FontReplacer.createFontReplacements();
            console.log(styles);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9udFJlcGxhY2VyVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkZvbnRSZXBsYWNlclRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGlEQUE0QztBQUU1QyxRQUFRLENBQUMsY0FBYyxFQUFFO0lBRXJCLEVBQUUsQ0FBQyxPQUFPLEVBQUU7O1lBQ1IsTUFBTSxNQUFNLEdBQUcsMkJBQVksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEIsQ0FBQztLQUFBLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGb250UmVwbGFjZXJ9IGZyb20gJy4vRm9udFJlcGxhY2VyJztcblxuZGVzY3JpYmUoJ0ZvbnRSZXBsYWNlcicsIGZ1bmN0aW9uKCkge1xuXG4gICAgaXQoXCJiYXNpY1wiLCBhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3Qgc3R5bGVzID0gRm9udFJlcGxhY2VyLmNyZWF0ZUZvbnRSZXBsYWNlbWVudHMoKTtcbiAgICAgICAgY29uc29sZS5sb2coc3R5bGVzKTtcbiAgICB9KTtcblxufSk7XG5cbiJdfQ==