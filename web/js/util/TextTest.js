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
const Text_1 = require("./Text");
describe('Text', function () {
    it("With no input text", function () {
        return __awaiter(this, void 0, void 0, function* () {
            chai_1.assert.equal(Text_1.Text.indent("", "    "), "    ");
        });
    });
    it("With one line", function () {
        return __awaiter(this, void 0, void 0, function* () {
            chai_1.assert.equal(Text_1.Text.indent("hello\nworld", "  "), "  hello\n  world");
        });
    });
    it("With two lines", function () {
        return __awaiter(this, void 0, void 0, function* () {
            chai_1.assert.equal(Text_1.Text.indent("hello\nworld\n", "  "), "  hello\n  world\n  ");
        });
    });
    it("With one line withOUT newline", function () {
        return __awaiter(this, void 0, void 0, function* () {
            chai_1.assert.equal(Text_1.Text.indent("hello", "  "), "  hello");
        });
    });
    it("With one line WITH newline", function () {
        return __awaiter(this, void 0, void 0, function* () {
            chai_1.assert.equal(Text_1.Text.indent("hello\n", "  "), "  hello\n  ");
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dFRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUZXh0VGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0JBQTRCO0FBQzVCLGlDQUE0QjtBQUU1QixRQUFRLENBQUMsTUFBTSxFQUFFO0lBRWIsRUFBRSxDQUFDLG9CQUFvQixFQUFFOztZQUVyQixhQUFNLENBQUMsS0FBSyxDQUFDLFdBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRWxELENBQUM7S0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZUFBZSxFQUFFOztZQUVoQixhQUFNLENBQUMsS0FBSyxDQUFDLFdBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFFeEUsQ0FBQztLQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRTs7WUFFakIsYUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxFQUFFLHNCQUFzQixDQUFDLENBQUM7UUFFOUUsQ0FBQztLQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywrQkFBK0IsRUFBRTs7WUFFaEMsYUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUV4RCxDQUFDO0tBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDRCQUE0QixFQUFFOztZQUU3QixhQUFNLENBQUMsS0FBSyxDQUFDLFdBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRTlELENBQUM7S0FBQSxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcbmltcG9ydCB7VGV4dH0gZnJvbSBcIi4vVGV4dFwiO1xuXG5kZXNjcmliZSgnVGV4dCcsIGZ1bmN0aW9uKCkge1xuXG4gICAgaXQoXCJXaXRoIG5vIGlucHV0IHRleHRcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChUZXh0LmluZGVudChcIlwiLCBcIiAgICBcIiksIFwiICAgIFwiKTtcblxuICAgIH0pO1xuXG4gICAgaXQoXCJXaXRoIG9uZSBsaW5lXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBhc3NlcnQuZXF1YWwoVGV4dC5pbmRlbnQoXCJoZWxsb1xcbndvcmxkXCIsIFwiICBcIiksIFwiICBoZWxsb1xcbiAgd29ybGRcIik7XG5cbiAgICB9KTtcblxuICAgIGl0KFwiV2l0aCB0d28gbGluZXNcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChUZXh0LmluZGVudChcImhlbGxvXFxud29ybGRcXG5cIiwgXCIgIFwiKSwgXCIgIGhlbGxvXFxuICB3b3JsZFxcbiAgXCIpO1xuXG4gICAgfSk7XG5cbiAgICBpdChcIldpdGggb25lIGxpbmUgd2l0aE9VVCBuZXdsaW5lXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBhc3NlcnQuZXF1YWwoVGV4dC5pbmRlbnQoXCJoZWxsb1wiLCBcIiAgXCIpLCBcIiAgaGVsbG9cIik7XG5cbiAgICB9KTtcblxuICAgIGl0KFwiV2l0aCBvbmUgbGluZSBXSVRIIG5ld2xpbmVcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChUZXh0LmluZGVudChcImhlbGxvXFxuXCIsIFwiICBcIiksIFwiICBoZWxsb1xcbiAgXCIpO1xuXG4gICAgfSk7XG5cbn0pO1xuIl19