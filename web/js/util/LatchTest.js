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
const Latch_1 = require("./Latch");
describe('Latch', function () {
    it("basic", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const latch = new Latch_1.Latch();
            latch.resolve("hello");
            chai_1.assert.equal(yield latch.get(), "hello");
            chai_1.assert.equal(yield latch.get(), "hello");
            chai_1.assert.equal(yield latch.get(), "hello");
            chai_1.assert.equal(yield latch.get(), "hello");
        });
    });
    it("reject", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const latch = new Latch_1.Latch();
            let failures = 0;
            latch.reject(new Error('hello'));
            try {
                yield latch.get();
                chai_1.assert.fail("Should not succeed");
            }
            catch (e) {
                ++failures;
            }
            chai_1.assert.equal(failures, 1);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGF0Y2hUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTGF0Y2hUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwrQkFBNEI7QUFDNUIsbUNBQThCO0FBSTlCLFFBQVEsQ0FBQyxPQUFPLEVBQUU7SUFFZCxFQUFFLENBQUMsT0FBTyxFQUFFOztZQUVSLE1BQU0sS0FBSyxHQUFHLElBQUksYUFBSyxFQUFVLENBQUM7WUFFbEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUV2QixhQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3pDLGFBQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDekMsYUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUN6QyxhQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRTdDLENBQUM7S0FBQSxDQUFDLENBQUM7SUFHSCxFQUFFLENBQUMsUUFBUSxFQUFFOztZQUVULE1BQU0sS0FBSyxHQUFHLElBQUksYUFBSyxFQUFVLENBQUM7WUFFbEMsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBRWpCLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUVqQyxJQUFJO2dCQUVBLE1BQU0sS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNsQixhQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7YUFFckM7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDUixFQUFFLFFBQVEsQ0FBQzthQUNkO1lBRUQsYUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFOUIsQ0FBQztLQUFBLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHtMYXRjaH0gZnJvbSAnLi9MYXRjaCc7XG5pbXBvcnQge2ZhaWx9IGZyb20gJ2Fzc2VydCc7XG5cblxuZGVzY3JpYmUoJ0xhdGNoJywgZnVuY3Rpb24oKSB7XG5cbiAgICBpdChcImJhc2ljXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGNvbnN0IGxhdGNoID0gbmV3IExhdGNoPHN0cmluZz4oKTtcblxuICAgICAgICBsYXRjaC5yZXNvbHZlKFwiaGVsbG9cIik7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKGF3YWl0IGxhdGNoLmdldCgpLCBcImhlbGxvXCIpO1xuICAgICAgICBhc3NlcnQuZXF1YWwoYXdhaXQgbGF0Y2guZ2V0KCksIFwiaGVsbG9cIik7XG4gICAgICAgIGFzc2VydC5lcXVhbChhd2FpdCBsYXRjaC5nZXQoKSwgXCJoZWxsb1wiKTtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKGF3YWl0IGxhdGNoLmdldCgpLCBcImhlbGxvXCIpO1xuXG4gICAgfSk7XG5cblxuICAgIGl0KFwicmVqZWN0XCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGNvbnN0IGxhdGNoID0gbmV3IExhdGNoPHN0cmluZz4oKTtcblxuICAgICAgICBsZXQgZmFpbHVyZXMgPSAwO1xuXG4gICAgICAgIGxhdGNoLnJlamVjdChuZXcgRXJyb3IoJ2hlbGxvJykpO1xuXG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIGF3YWl0IGxhdGNoLmdldCgpO1xuICAgICAgICAgICAgYXNzZXJ0LmZhaWwoXCJTaG91bGQgbm90IHN1Y2NlZWRcIik7XG5cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgKytmYWlsdXJlcztcbiAgICAgICAgfVxuXG4gICAgICAgIGFzc2VydC5lcXVhbChmYWlsdXJlcywgMSk7XG5cbiAgICB9KTtcblxufSk7XG5cbiJdfQ==