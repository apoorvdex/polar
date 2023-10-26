"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Strings_1 = require("./Strings");
describe('Strings', function () {
    describe('integers', function () {
        it("basic", function () {
            chai_1.assert.equal(Strings_1.Strings.toPrimitive("0"), 0);
            chai_1.assert.equal(typeof Strings_1.Strings.toPrimitive("0"), "number");
        });
    });
    describe('booleans', function () {
        it("basic", function () {
            chai_1.assert.equal(Strings_1.Strings.toPrimitive("true"), true);
            chai_1.assert.equal(typeof Strings_1.Strings.toPrimitive("true"), "boolean");
            chai_1.assert.equal(Strings_1.Strings.toPrimitive("false"), false);
            chai_1.assert.equal(typeof Strings_1.Strings.toPrimitive("false"), "boolean");
        });
    });
    describe('toUnixLineNewLines', function () {
        it("basic", function () {
            chai_1.assert.equal(Strings_1.Strings.toUnixLineNewLines('this\r\nis\r\nlong\r\n'), 'this\nis\nlong\n');
        });
    });
    describe('indent', function () {
        it("basic", function () {
            chai_1.assert.equal(Strings_1.Strings.indent("hello", "  "), "  hello");
        });
        it("two lines", function () {
            chai_1.assert.equal(Strings_1.Strings.indent("hello\nworld", "  "), "  hello\n  world");
        });
        it("three lines", function () {
            chai_1.assert.equal(Strings_1.Strings.indent("hello\nworld\ncat", "  "), "  hello\n  world\n  cat");
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RyaW5nc1Rlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTdHJpbmdzVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE0QjtBQUM1Qix1Q0FBa0M7QUFFbEMsUUFBUSxDQUFDLFNBQVMsRUFBRTtJQUVoQixRQUFRLENBQUMsVUFBVSxFQUFFO1FBRWpCLEVBQUUsQ0FBQyxPQUFPLEVBQUU7WUFDUixhQUFNLENBQUMsS0FBSyxDQUFDLGlCQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzFDLGFBQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxpQkFBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM1RCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLFVBQVUsRUFBRTtRQUVqQixFQUFFLENBQUMsT0FBTyxFQUFFO1lBQ1IsYUFBTSxDQUFDLEtBQUssQ0FBQyxpQkFBTyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNoRCxhQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8saUJBQU8sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFFNUQsYUFBTSxDQUFDLEtBQUssQ0FBQyxpQkFBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNsRCxhQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8saUJBQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFFakUsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDLENBQUMsQ0FBQztJQUdILFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtRQUUzQixFQUFFLENBQUMsT0FBTyxFQUFFO1lBRVIsYUFBTSxDQUFDLEtBQUssQ0FBQyxpQkFBTyxDQUFDLGtCQUFrQixDQUFDLHdCQUF3QixDQUFDLEVBQUUsa0JBQWtCLENBQUMsQ0FBQTtRQUMxRixDQUFDLENBQUMsQ0FBQztJQUVQLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLFFBQVEsRUFBRTtRQUVmLEVBQUUsQ0FBQyxPQUFPLEVBQUU7WUFFUixhQUFNLENBQUMsS0FBSyxDQUFDLGlCQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUUzRCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxXQUFXLEVBQUU7WUFFWixhQUFNLENBQUMsS0FBSyxDQUFDLGlCQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRTNFLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLGFBQWEsRUFBRTtZQUVkLGFBQU0sQ0FBQyxLQUFLLENBQUMsaUJBQU8sQ0FBQyxNQUFNLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLEVBQUUseUJBQXlCLENBQUMsQ0FBQztRQUV2RixDQUFDLENBQUMsQ0FBQztJQUVQLENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQge1N0cmluZ3N9IGZyb20gJy4vU3RyaW5ncyc7XG5cbmRlc2NyaWJlKCdTdHJpbmdzJywgZnVuY3Rpb24oKSB7XG5cbiAgICBkZXNjcmliZSgnaW50ZWdlcnMnLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBpdChcImJhc2ljXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChTdHJpbmdzLnRvUHJpbWl0aXZlKFwiMFwiKSwgMCk7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwodHlwZW9mIFN0cmluZ3MudG9QcmltaXRpdmUoXCIwXCIpLCBcIm51bWJlclwiKTtcbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdib29sZWFucycsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGl0KFwiYmFzaWNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKFN0cmluZ3MudG9QcmltaXRpdmUoXCJ0cnVlXCIpLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbCh0eXBlb2YgU3RyaW5ncy50b1ByaW1pdGl2ZShcInRydWVcIiksIFwiYm9vbGVhblwiKTtcblxuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKFN0cmluZ3MudG9QcmltaXRpdmUoXCJmYWxzZVwiKSwgZmFsc2UpO1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKHR5cGVvZiBTdHJpbmdzLnRvUHJpbWl0aXZlKFwiZmFsc2VcIiksIFwiYm9vbGVhblwiKTtcblxuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG5cbiAgICBkZXNjcmliZSgndG9Vbml4TGluZU5ld0xpbmVzJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgaXQoXCJiYXNpY1wiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKFN0cmluZ3MudG9Vbml4TGluZU5ld0xpbmVzKCd0aGlzXFxyXFxuaXNcXHJcXG5sb25nXFxyXFxuJyksICd0aGlzXFxuaXNcXG5sb25nXFxuJylcbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdpbmRlbnQnLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBpdChcImJhc2ljXCIsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoU3RyaW5ncy5pbmRlbnQoXCJoZWxsb1wiLCBcIiAgXCIpLCBcIiAgaGVsbG9cIik7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJ0d28gbGluZXNcIiwgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChTdHJpbmdzLmluZGVudChcImhlbGxvXFxud29ybGRcIiwgXCIgIFwiKSwgXCIgIGhlbGxvXFxuICB3b3JsZFwiKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBpdChcInRocmVlIGxpbmVzXCIsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoU3RyaW5ncy5pbmRlbnQoXCJoZWxsb1xcbndvcmxkXFxuY2F0XCIsIFwiICBcIiksIFwiICBoZWxsb1xcbiAgd29ybGRcXG4gIGNhdFwiKTtcblxuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==