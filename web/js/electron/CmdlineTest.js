"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const TestingTime_1 = require("../test/TestingTime");
const Cmdline_1 = require("./Cmdline");
TestingTime_1.TestingTime.freeze();
describe('Cmdline', function () {
    describe('getDocArg', function () {
        it("With no data", function () {
            chai_1.assert.equal(Cmdline_1.Cmdline.getDocArg([]), null);
        });
        it("With all wrong data", function () {
            chai_1.assert.equal(Cmdline_1.Cmdline.getDocArg(["asdf", "bar"]), null);
        });
        it("With one PDF arg", function () {
            chai_1.assert.equal(Cmdline_1.Cmdline.getDocArg(["foo.pdf"]), "foo.pdf");
        });
        it("With two PDF args", function () {
            chai_1.assert.equal(Cmdline_1.Cmdline.getDocArg(["foo.pdf", "bar.pdf"]), "bar.pdf");
        });
        it("With one chtml arg", function () {
            chai_1.assert.equal(Cmdline_1.Cmdline.getDocArg(["foo.chtml"]), "foo.chtml");
        });
        it("With real args", function () {
            let args = ["/home/burton/projects/polar-bookshelf/node_modules/electron/dist/electron", ".", "example.pdf"];
            chai_1.assert.equal(Cmdline_1.Cmdline.getDocArg(args), "example.pdf");
        });
    });
    describe('getURLArg', function () {
        it("With one arg", function () {
            chai_1.assert.equal(Cmdline_1.Cmdline.getURLArg(["http://www.cnn.com"]), "http://www.cnn.com");
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ21kbGluZVRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDbWRsaW5lVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE0QjtBQUM1QixxREFBZ0Q7QUFDaEQsdUNBQWtDO0FBRWxDLHlCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFckIsUUFBUSxDQUFDLFNBQVMsRUFBRTtJQUVoQixRQUFRLENBQUMsV0FBVyxFQUFFO1FBRWxCLEVBQUUsQ0FBQyxjQUFjLEVBQUU7WUFDZixhQUFNLENBQUMsS0FBSyxDQUFDLGlCQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLHFCQUFxQixFQUFFO1lBQ3RCLGFBQU0sQ0FBQyxLQUFLLENBQUMsaUJBQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzRCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxrQkFBa0IsRUFBRTtZQUNuQixhQUFNLENBQUMsS0FBSyxDQUFDLGlCQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUM1RCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxtQkFBbUIsRUFBRTtZQUNwQixhQUFNLENBQUMsS0FBSyxDQUFDLGlCQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDdkUsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsb0JBQW9CLEVBQUU7WUFDckIsYUFBTSxDQUFDLEtBQUssQ0FBQyxpQkFBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDaEUsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsZ0JBQWdCLEVBQUU7WUFDakIsSUFBSSxJQUFJLEdBQUcsQ0FBQywyRUFBMkUsRUFBQyxHQUFHLEVBQUMsYUFBYSxDQUFDLENBQUM7WUFDM0csYUFBTSxDQUFDLEtBQUssQ0FBQyxpQkFBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLFdBQVcsRUFBRTtRQUVsQixFQUFFLENBQUMsY0FBYyxFQUFFO1lBQ2YsYUFBTSxDQUFDLEtBQUssQ0FBQyxpQkFBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xGLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcbmltcG9ydCB7VGVzdGluZ1RpbWV9IGZyb20gJy4uL3Rlc3QvVGVzdGluZ1RpbWUnO1xuaW1wb3J0IHtDbWRsaW5lfSBmcm9tICcuL0NtZGxpbmUnO1xuXG5UZXN0aW5nVGltZS5mcmVlemUoKTtcblxuZGVzY3JpYmUoJ0NtZGxpbmUnLCBmdW5jdGlvbigpIHtcblxuICAgIGRlc2NyaWJlKCdnZXREb2NBcmcnLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBpdChcIldpdGggbm8gZGF0YVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoQ21kbGluZS5nZXREb2NBcmcoW10pLCBudWxsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJXaXRoIGFsbCB3cm9uZyBkYXRhXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChDbWRsaW5lLmdldERvY0FyZyhbXCJhc2RmXCIsIFwiYmFyXCJdKSwgbnVsbCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiV2l0aCBvbmUgUERGIGFyZ1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoQ21kbGluZS5nZXREb2NBcmcoW1wiZm9vLnBkZlwiXSksIFwiZm9vLnBkZlwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJXaXRoIHR3byBQREYgYXJnc1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoQ21kbGluZS5nZXREb2NBcmcoW1wiZm9vLnBkZlwiLCBcImJhci5wZGZcIl0pLCBcImJhci5wZGZcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiV2l0aCBvbmUgY2h0bWwgYXJnXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChDbWRsaW5lLmdldERvY0FyZyhbXCJmb28uY2h0bWxcIl0pLCBcImZvby5jaHRtbFwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJXaXRoIHJlYWwgYXJnc1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgYXJncyA9IFtcIi9ob21lL2J1cnRvbi9wcm9qZWN0cy9wb2xhci1ib29rc2hlbGYvbm9kZV9tb2R1bGVzL2VsZWN0cm9uL2Rpc3QvZWxlY3Ryb25cIixcIi5cIixcImV4YW1wbGUucGRmXCJdO1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKENtZGxpbmUuZ2V0RG9jQXJnKGFyZ3MpLCBcImV4YW1wbGUucGRmXCIpO1xuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG4gICAgZGVzY3JpYmUoJ2dldFVSTEFyZycsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGl0KFwiV2l0aCBvbmUgYXJnXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChDbWRsaW5lLmdldFVSTEFyZyhbXCJodHRwOi8vd3d3LmNubi5jb21cIl0pLCBcImh0dHA6Ly93d3cuY25uLmNvbVwiKTtcbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxufSk7XG4iXX0=