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
const Throttler_1 = require("./Throttler");
const Promises_1 = require("../util/Promises");
describe('Throttler', function () {
    describe('by maxRequests', function () {
        it("basic with one request throttled", function () {
            return __awaiter(this, void 0, void 0, function* () {
                let resolved = false;
                const throttler = new Throttler_1.Throttler(() => resolved = true, { maxRequests: 1, maxTimeout: 99999999 });
                chai_1.assert.equal(resolved, false);
                throttler.exec();
                chai_1.assert.equal(resolved, false);
                throttler.exec();
                chai_1.assert.equal(resolved, true);
            });
        });
        it("no requests throttled", function () {
            return __awaiter(this, void 0, void 0, function* () {
                let resolved = false;
                const throttler = new Throttler_1.Throttler(() => resolved = true, { maxRequests: 0, maxTimeout: 99999999 });
                chai_1.assert.equal(resolved, false);
                throttler.exec();
                chai_1.assert.equal(resolved, true);
            });
        });
        it("two requests throttled", function () {
            return __awaiter(this, void 0, void 0, function* () {
                let resolved = false;
                const throttler = new Throttler_1.Throttler(() => resolved = true, { maxRequests: 2, maxTimeout: 99999999 });
                chai_1.assert.equal(resolved, false);
                throttler.exec();
                chai_1.assert.equal(resolved, false);
                throttler.exec();
                chai_1.assert.equal(resolved, false);
                throttler.exec();
                chai_1.assert.equal(resolved, true);
            });
        });
    });
    describe('by time', function () {
        it("basic with one request throttled", function () {
            return __awaiter(this, void 0, void 0, function* () {
                let resolved = 0;
                const throttler = new Throttler_1.Throttler(() => ++resolved, { maxRequests: 9999, maxTimeout: 1000 });
                chai_1.assert.equal(resolved, 0);
                throttler.exec();
                chai_1.assert.equal(resolved, 0);
                throttler.exec();
                throttler.exec();
                throttler.exec();
                throttler.exec();
                throttler.exec();
                throttler.exec();
                throttler.exec();
                yield Promises_1.Promises.waitFor(1010);
                chai_1.assert.equal(resolved, 1);
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhyb3R0bGVyVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRocm90dGxlclRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLCtCQUE0QjtBQUU1QiwyQ0FBc0M7QUFDdEMsK0NBQTBDO0FBRTFDLFFBQVEsQ0FBQyxXQUFXLEVBQUU7SUFFbEIsUUFBUSxDQUFDLGdCQUFnQixFQUFFO1FBRXZCLEVBQUUsQ0FBQyxrQ0FBa0MsRUFBRTs7Z0JBRW5DLElBQUksUUFBUSxHQUFZLEtBQUssQ0FBQztnQkFFOUIsTUFBTSxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsR0FBRyxJQUFJLEVBQ3JCLEVBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFDLENBQUUsQ0FBQztnQkFFekUsYUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBRTlCLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDakIsYUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQzlCLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDakIsYUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFakMsQ0FBQztTQUFBLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyx1QkFBdUIsRUFBRTs7Z0JBRXhCLElBQUksUUFBUSxHQUFZLEtBQUssQ0FBQztnQkFFOUIsTUFBTSxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsR0FBRyxJQUFJLEVBQ3JCLEVBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFDLENBQUUsQ0FBQztnQkFFekUsYUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBRTlCLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDakIsYUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFakMsQ0FBQztTQUFBLENBQUMsQ0FBQztRQUdILEVBQUUsQ0FBQyx3QkFBd0IsRUFBRTs7Z0JBRXpCLElBQUksUUFBUSxHQUFZLEtBQUssQ0FBQztnQkFFOUIsTUFBTSxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsR0FBRyxJQUFJLEVBQ3JCLEVBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFDLENBQUUsQ0FBQztnQkFFekUsYUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBRTlCLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDakIsYUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQzlCLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDakIsYUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQzlCLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDakIsYUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFakMsQ0FBQztTQUFBLENBQUMsQ0FBQztJQUVQLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLFNBQVMsRUFBRTtRQUVoQixFQUFFLENBQUMsa0NBQWtDLEVBQUU7O2dCQUVuQyxJQUFJLFFBQVEsR0FBVyxDQUFDLENBQUM7Z0JBRXpCLE1BQU0sU0FBUyxHQUFHLElBQUkscUJBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFDaEIsRUFBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUMsQ0FBRSxDQUFDO2dCQUV4RSxhQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFFMUIsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNqQixhQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFJMUIsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNqQixTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ2pCLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDakIsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNqQixTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ2pCLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDakIsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUVqQixNQUFNLG1CQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUU3QixhQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUU5QixDQUFDO1NBQUEsQ0FBQyxDQUFDO0lBRVAsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcbmltcG9ydCB7TGF0Y2h9IGZyb20gXCIuLi91dGlsL0xhdGNoXCI7XG5pbXBvcnQge1Rocm90dGxlcn0gZnJvbSAnLi9UaHJvdHRsZXInO1xuaW1wb3J0IHtQcm9taXNlc30gZnJvbSAnLi4vdXRpbC9Qcm9taXNlcyc7XG5cbmRlc2NyaWJlKCdUaHJvdHRsZXInLCBmdW5jdGlvbigpIHtcblxuICAgIGRlc2NyaWJlKCdieSBtYXhSZXF1ZXN0cycsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGl0KFwiYmFzaWMgd2l0aCBvbmUgcmVxdWVzdCB0aHJvdHRsZWRcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIGxldCByZXNvbHZlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBjb25zdCB0aHJvdHRsZXIgPSBuZXcgVGhyb3R0bGVyKCgpID0+IHJlc29sdmVkID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21heFJlcXVlc3RzOiAxLCBtYXhUaW1lb3V0OiA5OTk5OTk5OX0gKTtcblxuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKHJlc29sdmVkLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIHRocm90dGxlci5leGVjKCk7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwocmVzb2x2ZWQsIGZhbHNlKTtcbiAgICAgICAgICAgIHRocm90dGxlci5leGVjKCk7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwocmVzb2x2ZWQsIHRydWUpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwibm8gcmVxdWVzdHMgdGhyb3R0bGVkXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBsZXQgcmVzb2x2ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgY29uc3QgdGhyb3R0bGVyID0gbmV3IFRocm90dGxlcigoKSA9PiByZXNvbHZlZCA9IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttYXhSZXF1ZXN0czogMCwgbWF4VGltZW91dDogOTk5OTk5OTl9ICk7XG5cbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChyZXNvbHZlZCwgZmFsc2UpO1xuXG4gICAgICAgICAgICB0aHJvdHRsZXIuZXhlYygpO1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKHJlc29sdmVkLCB0cnVlKTtcblxuICAgICAgICB9KTtcblxuXG4gICAgICAgIGl0KFwidHdvIHJlcXVlc3RzIHRocm90dGxlZFwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgbGV0IHJlc29sdmVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGNvbnN0IHRocm90dGxlciA9IG5ldyBUaHJvdHRsZXIoKCkgPT4gcmVzb2x2ZWQgPSB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWF4UmVxdWVzdHM6IDIsIG1heFRpbWVvdXQ6IDk5OTk5OTk5fSApO1xuXG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwocmVzb2x2ZWQsIGZhbHNlKTtcblxuICAgICAgICAgICAgdGhyb3R0bGVyLmV4ZWMoKTtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChyZXNvbHZlZCwgZmFsc2UpO1xuICAgICAgICAgICAgdGhyb3R0bGVyLmV4ZWMoKTtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChyZXNvbHZlZCwgZmFsc2UpO1xuICAgICAgICAgICAgdGhyb3R0bGVyLmV4ZWMoKTtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChyZXNvbHZlZCwgdHJ1ZSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdieSB0aW1lJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgaXQoXCJiYXNpYyB3aXRoIG9uZSByZXF1ZXN0IHRocm90dGxlZFwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgbGV0IHJlc29sdmVkOiBudW1iZXIgPSAwO1xuXG4gICAgICAgICAgICBjb25zdCB0aHJvdHRsZXIgPSBuZXcgVGhyb3R0bGVyKCgpID0+ICsrcmVzb2x2ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttYXhSZXF1ZXN0czogOTk5OSwgbWF4VGltZW91dDogMTAwMH0gKTtcblxuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKHJlc29sdmVkLCAwKTtcblxuICAgICAgICAgICAgdGhyb3R0bGVyLmV4ZWMoKTtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChyZXNvbHZlZCwgMCk7XG5cbiAgICAgICAgICAgIC8vIG5vdyB0cnkgdG8gZXhlYyBhIGJ1bmNoIG9mIHRpbWVzIHRvIG1ha2Ugc3VyZSB3ZSBvbmx5IGFyZVxuICAgICAgICAgICAgLy8gKiphY3R1YWxseSoqIGV4ZWN1dGVkIG9uY2UuXG4gICAgICAgICAgICB0aHJvdHRsZXIuZXhlYygpO1xuICAgICAgICAgICAgdGhyb3R0bGVyLmV4ZWMoKTtcbiAgICAgICAgICAgIHRocm90dGxlci5leGVjKCk7XG4gICAgICAgICAgICB0aHJvdHRsZXIuZXhlYygpO1xuICAgICAgICAgICAgdGhyb3R0bGVyLmV4ZWMoKTtcbiAgICAgICAgICAgIHRocm90dGxlci5leGVjKCk7XG4gICAgICAgICAgICB0aHJvdHRsZXIuZXhlYygpO1xuXG4gICAgICAgICAgICBhd2FpdCBQcm9taXNlcy53YWl0Rm9yKDEwMTApO1xuXG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwocmVzb2x2ZWQsIDEpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbn0pO1xuXG5cbiJdfQ==