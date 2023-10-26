"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Preconditions_1 = require("./Preconditions");
describe('Preconditions', function () {
    describe('defaultValue', function () {
        it("With null currentValue", function () {
            chai_1.assert.equal(Preconditions_1.Preconditions.defaultValue(null, "hello"), "hello");
        });
        it("With undefined currentValue", function () {
            chai_1.assert.equal(Preconditions_1.Preconditions.defaultValue(undefined, "hello"), "hello");
        });
        it("With existing value", function () {
            chai_1.assert.equal(Preconditions_1.Preconditions.defaultValue("bye", "hello"), "bye");
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJlY29uZGl0aW9uc1Rlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQcmVjb25kaXRpb25zVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE0QjtBQUM1QixtREFBOEM7QUFFOUMsUUFBUSxDQUFDLGVBQWUsRUFBRTtJQUV0QixRQUFRLENBQUMsY0FBYyxFQUFFO1FBRXJCLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRTtZQUN6QixhQUFNLENBQUMsS0FBSyxDQUFDLDZCQUFhLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNyRSxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyw2QkFBNkIsRUFBRTtZQUM5QixhQUFNLENBQUMsS0FBSyxDQUFDLDZCQUFhLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMxRSxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxxQkFBcUIsRUFBRTtZQUN0QixhQUFNLENBQUMsS0FBSyxDQUFDLDZCQUFhLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNwRSxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQge1ByZWNvbmRpdGlvbnN9IGZyb20gJy4vUHJlY29uZGl0aW9ucyc7XG5cbmRlc2NyaWJlKCdQcmVjb25kaXRpb25zJywgZnVuY3Rpb24oKSB7XG5cbiAgICBkZXNjcmliZSgnZGVmYXVsdFZhbHVlJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgaXQoXCJXaXRoIG51bGwgY3VycmVudFZhbHVlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChQcmVjb25kaXRpb25zLmRlZmF1bHRWYWx1ZShudWxsLCBcImhlbGxvXCIpLCBcImhlbGxvXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdChcIldpdGggdW5kZWZpbmVkIGN1cnJlbnRWYWx1ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoUHJlY29uZGl0aW9ucy5kZWZhdWx0VmFsdWUodW5kZWZpbmVkLCBcImhlbGxvXCIpLCBcImhlbGxvXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdChcIldpdGggZXhpc3RpbmcgdmFsdWVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKFByZWNvbmRpdGlvbnMuZGVmYXVsdFZhbHVlKFwiYnllXCIsIFwiaGVsbG9cIiksIFwiYnllXCIpO1xuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==