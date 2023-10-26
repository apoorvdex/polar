"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Assertions_1 = require("../test/Assertions");
const Numbers_1 = require("./Numbers");
describe('Numbers', function () {
    describe('range', function () {
        it("same value", function () {
            Assertions_1.assertJSON([1], Numbers_1.Numbers.range(1, 1));
        });
        it("short range", function () {
            Assertions_1.assertJSON([0, 1], Numbers_1.Numbers.range(0, 1));
        });
        it("large range", function () {
            Assertions_1.assertJSON([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], Numbers_1.Numbers.range(0, 9));
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTnVtYmVyc1Rlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJOdW1iZXJzVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUE4QztBQUM5Qyx1Q0FBa0M7QUFFbEMsUUFBUSxDQUFDLFNBQVMsRUFBRTtJQUVoQixRQUFRLENBQUMsT0FBTyxFQUFFO1FBRWQsRUFBRSxDQUFDLFlBQVksRUFBRTtZQUViLHVCQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxpQkFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV6QyxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxhQUFhLEVBQUU7WUFFZCx1QkFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLGlCQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTVDLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLGFBQWEsRUFBRTtZQUVkLHVCQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxpQkFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVwRSxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Fzc2VydEpTT059IGZyb20gJy4uL3Rlc3QvQXNzZXJ0aW9ucyc7XG5pbXBvcnQge051bWJlcnN9IGZyb20gXCIuL051bWJlcnNcIjtcblxuZGVzY3JpYmUoJ051bWJlcnMnLCBmdW5jdGlvbigpIHtcblxuICAgIGRlc2NyaWJlKCdyYW5nZScsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGl0KFwic2FtZSB2YWx1ZVwiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgYXNzZXJ0SlNPTihbMV0sIE51bWJlcnMucmFuZ2UoMSwgMSkpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwic2hvcnQgcmFuZ2VcIiwgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIGFzc2VydEpTT04oWzAsIDFdLCBOdW1iZXJzLnJhbmdlKDAsIDEpKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBpdChcImxhcmdlIHJhbmdlXCIsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBhc3NlcnRKU09OKFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5XSwgTnVtYmVycy5yYW5nZSgwLCA5KSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxufSk7XG4iXX0=