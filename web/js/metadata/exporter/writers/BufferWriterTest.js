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
const BufferWriter_1 = require("./BufferWriter");
const chai_1 = require("chai");
describe('BufferWriter', function () {
    it("basic", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const writer = new BufferWriter_1.BufferWriter();
            yield writer.write("hello");
            yield writer.write("world");
            yield writer.close();
            chai_1.assert.equal(writer.toString(), "helloworld");
        });
    });
    it("no data", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const writer = new BufferWriter_1.BufferWriter();
            yield writer.close();
            chai_1.assert.equal(writer.toString(), "");
        });
    });
    it("one write", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const writer = new BufferWriter_1.BufferWriter();
            yield writer.write("hello");
            yield writer.close();
            chai_1.assert.equal(writer.toString(), "hello");
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnVmZmVyV3JpdGVyVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkJ1ZmZlcldyaXRlclRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGlEQUE0QztBQUM1QywrQkFBNEI7QUFFNUIsUUFBUSxDQUFDLGNBQWMsRUFBRTtJQUVyQixFQUFFLENBQUMsT0FBTyxFQUFFOztZQUVSLE1BQU0sTUFBTSxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO1lBRWxDLE1BQU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM1QixNQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFNUIsTUFBTSxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFckIsYUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFFbEQsQ0FBQztLQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxTQUFTLEVBQUU7O1lBRVYsTUFBTSxNQUFNLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUM7WUFFbEMsTUFBTSxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFckIsYUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFeEMsQ0FBQztLQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxXQUFXLEVBQUU7O1lBRVosTUFBTSxNQUFNLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUM7WUFDbEMsTUFBTSxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRTVCLE1BQU0sTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBRXJCLGFBQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRTdDLENBQUM7S0FBQSxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QnVmZmVyV3JpdGVyfSBmcm9tICcuL0J1ZmZlcldyaXRlcic7XG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5cbmRlc2NyaWJlKCdCdWZmZXJXcml0ZXInLCBmdW5jdGlvbigpIHtcblxuICAgIGl0KFwiYmFzaWNcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgY29uc3Qgd3JpdGVyID0gbmV3IEJ1ZmZlcldyaXRlcigpO1xuXG4gICAgICAgIGF3YWl0IHdyaXRlci53cml0ZShcImhlbGxvXCIpO1xuICAgICAgICBhd2FpdCB3cml0ZXIud3JpdGUoXCJ3b3JsZFwiKTtcblxuICAgICAgICBhd2FpdCB3cml0ZXIuY2xvc2UoKTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwod3JpdGVyLnRvU3RyaW5nKCksIFwiaGVsbG93b3JsZFwiKTtcblxuICAgIH0pO1xuXG4gICAgaXQoXCJubyBkYXRhXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCdWZmZXJXcml0ZXIoKTtcblxuICAgICAgICBhd2FpdCB3cml0ZXIuY2xvc2UoKTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwod3JpdGVyLnRvU3RyaW5nKCksIFwiXCIpO1xuXG4gICAgfSk7XG5cbiAgICBpdChcIm9uZSB3cml0ZVwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICBjb25zdCB3cml0ZXIgPSBuZXcgQnVmZmVyV3JpdGVyKCk7XG4gICAgICAgIGF3YWl0IHdyaXRlci53cml0ZShcImhlbGxvXCIpO1xuXG4gICAgICAgIGF3YWl0IHdyaXRlci5jbG9zZSgpO1xuXG4gICAgICAgIGFzc2VydC5lcXVhbCh3cml0ZXIudG9TdHJpbmcoKSwgXCJoZWxsb1wiKTtcblxuICAgIH0pO1xuXG59KTtcblxuIl19