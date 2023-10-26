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
const StringBuffer_1 = require("./StringBuffer");
describe('StringBuffer', function () {
    it("basic", function () {
        return __awaiter(this, void 0, void 0, function* () {
            chai_1.assert.equal(new StringBuffer_1.StringBuffer().toString(), '');
            chai_1.assert.equal(new StringBuffer_1.StringBuffer().append('hello').toString(), 'hello');
            chai_1.assert.equal(new StringBuffer_1.StringBuffer().append('hello', 'world').toString(), 'helloworld');
            chai_1.assert.equal(new StringBuffer_1.StringBuffer().append('hello').append('world').toString(), 'helloworld');
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RyaW5nQnVmZmVyVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlN0cmluZ0J1ZmZlclRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLCtCQUE0QjtBQUM1QixpREFBNEM7QUFHNUMsUUFBUSxDQUFDLGNBQWMsRUFBRTtJQUVyQixFQUFFLENBQUMsT0FBTyxFQUFFOztZQUVSLGFBQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSwyQkFBWSxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDaEQsYUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLDJCQUFZLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDckUsYUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLDJCQUFZLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQ25GLGFBQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSwyQkFBWSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUU5RixDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQge1N0cmluZ0J1ZmZlcn0gZnJvbSBcIi4vU3RyaW5nQnVmZmVyXCI7XG5cblxuZGVzY3JpYmUoJ1N0cmluZ0J1ZmZlcicsIGZ1bmN0aW9uKCkge1xuXG4gICAgaXQoXCJiYXNpY1wiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICBhc3NlcnQuZXF1YWwobmV3IFN0cmluZ0J1ZmZlcigpLnRvU3RyaW5nKCksICcnKTtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKG5ldyBTdHJpbmdCdWZmZXIoKS5hcHBlbmQoJ2hlbGxvJykudG9TdHJpbmcoKSwgJ2hlbGxvJyk7XG4gICAgICAgIGFzc2VydC5lcXVhbChuZXcgU3RyaW5nQnVmZmVyKCkuYXBwZW5kKCdoZWxsbycsICd3b3JsZCcpLnRvU3RyaW5nKCksICdoZWxsb3dvcmxkJyk7XG4gICAgICAgIGFzc2VydC5lcXVhbChuZXcgU3RyaW5nQnVmZmVyKCkuYXBwZW5kKCdoZWxsbycpLmFwcGVuZCgnd29ybGQnKS50b1N0cmluZygpLCAnaGVsbG93b3JsZCcpO1xuXG4gICAgfSk7XG5cbn0pO1xuXG4iXX0=