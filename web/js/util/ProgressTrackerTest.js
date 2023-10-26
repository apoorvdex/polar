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
const ProgressTracker_1 = require("./ProgressTracker");
describe('ProgressTracker', function () {
    it("Basic", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const progressTracker = new ProgressTracker_1.ProgressTracker(1, 'test');
            progressTracker.incr();
            const progress = progressTracker.peek();
            chai_1.assert.equal(progress.progress, 100);
        });
    });
    it("Basic with irrational numbers", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const progressTracker = new ProgressTracker_1.ProgressTracker(3, 'test');
            chai_1.assert.equal(progressTracker.incr().progress, 33.33);
            chai_1.assert.equal(progressTracker.incr().progress, 66.67);
            chai_1.assert.equal(progressTracker.incr().progress, 100);
        });
    });
    it("Make sure the last is 100%", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const progressTracker = new ProgressTracker_1.ProgressTracker(3, 'test');
            progressTracker.incr();
            progressTracker.incr();
            chai_1.assert.equal(progressTracker.incr().progress, 100);
            chai_1.assert.equal(progressTracker.peek().progress, 100);
        });
    });
    it("Terminate with no entries", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const progressTracker = new ProgressTracker_1.ProgressTracker(0, 'test');
            const progress = progressTracker.terminate();
            chai_1.assert.equal(progress.completed, 0);
            chai_1.assert.equal(progress.total, 0);
            chai_1.assert.equal(progress.progress, 100);
        });
    });
    it("Terminate with 1 entry", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const progressTracker = new ProgressTracker_1.ProgressTracker(1, 'test');
            const progress = progressTracker.terminate();
            chai_1.assert.equal(progress.completed, 1);
            chai_1.assert.equal(progress.total, 1);
            chai_1.assert.equal(progress.progress, 100);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NUcmFja2VyVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlByb2dyZXNzVHJhY2tlclRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLCtCQUE0QjtBQUc1Qix1REFBa0Q7QUFHbEQsUUFBUSxDQUFDLGlCQUFpQixFQUFFO0lBRXhCLEVBQUUsQ0FBQyxPQUFPLEVBQUU7O1lBRVIsTUFBTSxlQUFlLEdBQUcsSUFBSSxpQ0FBZSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN2RCxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDdkIsTUFBTSxRQUFRLEdBQUcsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1lBRXhDLGFBQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUV6QyxDQUFDO0tBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLCtCQUErQixFQUFFOztZQUtoQyxNQUFNLGVBQWUsR0FBRyxJQUFJLGlDQUFlLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZELGFBQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNyRCxhQUFNLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDckQsYUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRXZELENBQUM7S0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsNEJBQTRCLEVBQUU7O1lBRTdCLE1BQU0sZUFBZSxHQUFHLElBQUksaUNBQWUsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDdkQsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3ZCLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUV2QixhQUFNLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDbkQsYUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRXZELENBQUM7S0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMkJBQTJCLEVBQUU7O1lBRTVCLE1BQU0sZUFBZSxHQUFHLElBQUksaUNBQWUsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDdkQsTUFBTSxRQUFRLEdBQUcsZUFBZSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQzdDLGFBQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNwQyxhQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEMsYUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRXpDLENBQUM7S0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsd0JBQXdCLEVBQUU7O1lBRXpCLE1BQU0sZUFBZSxHQUFHLElBQUksaUNBQWUsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDdkQsTUFBTSxRQUFRLEdBQUcsZUFBZSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQzdDLGFBQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNwQyxhQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEMsYUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRXpDLENBQUM7S0FBQSxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcbmltcG9ydCB7UHJvZ3Jlc3NDYWxjdWxhdG9yfSBmcm9tICcuL1Byb2dyZXNzQ2FsY3VsYXRvcic7XG5pbXBvcnQge1Byb2dyZXNzVHJhY2tlcnN9IGZyb20gJy4vUHJvZ3Jlc3NUcmFja2Vycyc7XG5pbXBvcnQge1Byb2dyZXNzVHJhY2tlcn0gZnJvbSAnLi9Qcm9ncmVzc1RyYWNrZXInO1xuXG5cbmRlc2NyaWJlKCdQcm9ncmVzc1RyYWNrZXInLCBmdW5jdGlvbigpIHtcblxuICAgIGl0KFwiQmFzaWNcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgY29uc3QgcHJvZ3Jlc3NUcmFja2VyID0gbmV3IFByb2dyZXNzVHJhY2tlcigxLCAndGVzdCcpO1xuICAgICAgICBwcm9ncmVzc1RyYWNrZXIuaW5jcigpO1xuICAgICAgICBjb25zdCBwcm9ncmVzcyA9IHByb2dyZXNzVHJhY2tlci5wZWVrKCk7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKHByb2dyZXNzLnByb2dyZXNzLCAxMDApO1xuXG4gICAgfSk7XG5cbiAgICBpdChcIkJhc2ljIHdpdGggaXJyYXRpb25hbCBudW1iZXJzXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIC8vIGlycmF0aW9uYWwgbnVtYmVyIGNhbiBjYXVzZSBwcm9ibGVtcyB3aXRoIHByb2dyZXNzIGJhcnMgc28gd2UgbmVlZFxuICAgICAgICAvLyB0byBtYWtlIHN1cmUgdGhlIGZsb2F0aW5nIHBvaW50IGNvbXBvbmVudCBpcyBmaW5pdGUuXG5cbiAgICAgICAgY29uc3QgcHJvZ3Jlc3NUcmFja2VyID0gbmV3IFByb2dyZXNzVHJhY2tlcigzLCAndGVzdCcpO1xuICAgICAgICBhc3NlcnQuZXF1YWwocHJvZ3Jlc3NUcmFja2VyLmluY3IoKS5wcm9ncmVzcywgMzMuMzMpO1xuICAgICAgICBhc3NlcnQuZXF1YWwocHJvZ3Jlc3NUcmFja2VyLmluY3IoKS5wcm9ncmVzcywgNjYuNjcpO1xuICAgICAgICBhc3NlcnQuZXF1YWwocHJvZ3Jlc3NUcmFja2VyLmluY3IoKS5wcm9ncmVzcywgMTAwKTtcblxuICAgIH0pO1xuXG4gICAgaXQoXCJNYWtlIHN1cmUgdGhlIGxhc3QgaXMgMTAwJVwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICBjb25zdCBwcm9ncmVzc1RyYWNrZXIgPSBuZXcgUHJvZ3Jlc3NUcmFja2VyKDMsICd0ZXN0Jyk7XG4gICAgICAgIHByb2dyZXNzVHJhY2tlci5pbmNyKCk7XG4gICAgICAgIHByb2dyZXNzVHJhY2tlci5pbmNyKCk7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKHByb2dyZXNzVHJhY2tlci5pbmNyKCkucHJvZ3Jlc3MsIDEwMCk7XG4gICAgICAgIGFzc2VydC5lcXVhbChwcm9ncmVzc1RyYWNrZXIucGVlaygpLnByb2dyZXNzLCAxMDApO1xuXG4gICAgfSk7XG5cbiAgICBpdChcIlRlcm1pbmF0ZSB3aXRoIG5vIGVudHJpZXNcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgY29uc3QgcHJvZ3Jlc3NUcmFja2VyID0gbmV3IFByb2dyZXNzVHJhY2tlcigwLCAndGVzdCcpO1xuICAgICAgICBjb25zdCBwcm9ncmVzcyA9IHByb2dyZXNzVHJhY2tlci50ZXJtaW5hdGUoKTtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKHByb2dyZXNzLmNvbXBsZXRlZCwgMCk7XG4gICAgICAgIGFzc2VydC5lcXVhbChwcm9ncmVzcy50b3RhbCwgMCk7XG4gICAgICAgIGFzc2VydC5lcXVhbChwcm9ncmVzcy5wcm9ncmVzcywgMTAwKTtcblxuICAgIH0pO1xuXG4gICAgaXQoXCJUZXJtaW5hdGUgd2l0aCAxIGVudHJ5XCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGNvbnN0IHByb2dyZXNzVHJhY2tlciA9IG5ldyBQcm9ncmVzc1RyYWNrZXIoMSwgJ3Rlc3QnKTtcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBwcm9ncmVzc1RyYWNrZXIudGVybWluYXRlKCk7XG4gICAgICAgIGFzc2VydC5lcXVhbChwcm9ncmVzcy5jb21wbGV0ZWQsIDEpO1xuICAgICAgICBhc3NlcnQuZXF1YWwocHJvZ3Jlc3MudG90YWwsIDEpO1xuICAgICAgICBhc3NlcnQuZXF1YWwocHJvZ3Jlc3MucHJvZ3Jlc3MsIDEwMCk7XG5cbiAgICB9KTtcblxufSk7XG4iXX0=