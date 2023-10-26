"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Arrays_1 = require("./Arrays");
const chai_1 = require("chai");
const Assertions_1 = require("../test/Assertions");
describe('Arrays', function () {
    describe('toDict', function () {
        it("pass it an array", function () {
            Assertions_1.assertJSON(Arrays_1.Arrays.toDict(["hello"]), { '0': 'hello' });
        });
        it("already a dictionary", function () {
            let expected = {
                "hello": "world"
            };
            Assertions_1.assertJSON({ hello: "world" }, expected);
        });
        it("failure", function () {
            chai_1.assert.throws(() => Arrays_1.Arrays.toDict(101));
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJyYXlzVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFycmF5c1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBZ0M7QUFFaEMsK0JBQTRCO0FBQzVCLG1EQUE4QztBQUU5QyxRQUFRLENBQUMsUUFBUSxFQUFFO0lBRWYsUUFBUSxDQUFDLFFBQVEsRUFBRTtRQUVmLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRTtZQUNuQix1QkFBVSxDQUFDLGVBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUE7UUFDMUQsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsc0JBQXNCLEVBQUU7WUFDdkIsSUFBSSxRQUFRLEdBQUc7Z0JBQ1gsT0FBTyxFQUFFLE9BQU87YUFDbkIsQ0FBQztZQUNGLHVCQUFVLENBQUMsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFDLEVBQUUsUUFBUSxDQUFDLENBQUE7UUFDMUMsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsU0FBUyxFQUFFO1lBQ1YsYUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxlQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBcnJheXN9IGZyb20gJy4vQXJyYXlzJztcblxuaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHthc3NlcnRKU09OfSBmcm9tICcuLi90ZXN0L0Fzc2VydGlvbnMnO1xuXG5kZXNjcmliZSgnQXJyYXlzJywgZnVuY3Rpb24oKSB7XG5cbiAgICBkZXNjcmliZSgndG9EaWN0JywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgaXQoXCJwYXNzIGl0IGFuIGFycmF5XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGFzc2VydEpTT04oQXJyYXlzLnRvRGljdChbXCJoZWxsb1wiXSksIHsgJzAnOiAnaGVsbG8nIH0pXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiYWxyZWFkeSBhIGRpY3Rpb25hcnlcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IGV4cGVjdGVkID0ge1xuICAgICAgICAgICAgICAgIFwiaGVsbG9cIjogXCJ3b3JsZFwiXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYXNzZXJ0SlNPTih7aGVsbG86IFwid29ybGRcIn0sIGV4cGVjdGVkKVxuICAgICAgICB9KTtcblxuICAgICAgICBpdChcImZhaWx1cmVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYXNzZXJ0LnRocm93cygoKSA9PiBBcnJheXMudG9EaWN0KDEwMSkpO1xuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==