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
const TextType_1 = require("./TextType");
const Texts_1 = require("./Texts");
const Assertions_1 = require("../test/Assertions");
describe('Texts', function () {
    it("basic", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const text = Texts_1.Texts.create("asdf", TextType_1.TextType.HTML);
            const expected = {
                "HTML": "asdf"
            };
            Assertions_1.assertJSON(text, expected);
        });
    });
    xit("toText", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const input = Texts_1.Texts.create("<p>this is <b>the</b>text</p>", TextType_1.TextType.HTML);
            const expected = {
                "HTML": "asdf"
            };
            Assertions_1.assertJSON(Texts_1.Texts.toPlainText(input), "");
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dHNUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVGV4dHNUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx5Q0FBb0M7QUFDcEMsbUNBQThCO0FBQzlCLG1EQUE4QztBQUU5QyxRQUFRLENBQUMsT0FBTyxFQUFFO0lBRWQsRUFBRSxDQUFDLE9BQU8sRUFBRTs7WUFFUixNQUFNLElBQUksR0FBRyxhQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxtQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRWpELE1BQU0sUUFBUSxHQUFHO2dCQUNiLE1BQU0sRUFBRSxNQUFNO2FBQ2pCLENBQUM7WUFFRix1QkFBVSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUUvQixDQUFDO0tBQUEsQ0FBQyxDQUFDO0lBRUgsR0FBRyxDQUFDLFFBQVEsRUFBRTs7WUFFVixNQUFNLEtBQUssR0FBRyxhQUFLLENBQUMsTUFBTSxDQUFDLCtCQUErQixFQUFFLG1CQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFM0UsTUFBTSxRQUFRLEdBQUc7Z0JBQ2IsTUFBTSxFQUFFLE1BQU07YUFDakIsQ0FBQztZQUVGLHVCQUFVLENBQUMsYUFBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUU3QyxDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RleHRUeXBlfSBmcm9tICcuL1RleHRUeXBlJztcbmltcG9ydCB7VGV4dHN9IGZyb20gJy4vVGV4dHMnO1xuaW1wb3J0IHthc3NlcnRKU09OfSBmcm9tICcuLi90ZXN0L0Fzc2VydGlvbnMnO1xuXG5kZXNjcmliZSgnVGV4dHMnLCBmdW5jdGlvbigpIHtcblxuICAgIGl0KFwiYmFzaWNcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgY29uc3QgdGV4dCA9IFRleHRzLmNyZWF0ZShcImFzZGZcIiwgVGV4dFR5cGUuSFRNTCk7XG5cbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XG4gICAgICAgICAgICBcIkhUTUxcIjogXCJhc2RmXCJcbiAgICAgICAgfTtcblxuICAgICAgICBhc3NlcnRKU09OKHRleHQsIGV4cGVjdGVkKTtcblxuICAgIH0pO1xuXG4gICAgeGl0KFwidG9UZXh0XCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGNvbnN0IGlucHV0ID0gVGV4dHMuY3JlYXRlKFwiPHA+dGhpcyBpcyA8Yj50aGU8L2I+dGV4dDwvcD5cIiwgVGV4dFR5cGUuSFRNTCk7XG5cbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XG4gICAgICAgICAgICBcIkhUTUxcIjogXCJhc2RmXCJcbiAgICAgICAgfTtcblxuICAgICAgICBhc3NlcnRKU09OKFRleHRzLnRvUGxhaW5UZXh0KGlucHV0KSwgXCJcIik7XG5cbiAgICB9KTtcblxufSk7XG4iXX0=