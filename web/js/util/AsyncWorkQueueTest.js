"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Assertions_1 = require("../test/Assertions");
const Latch_1 = require("./Latch");
const wait_for_expect_1 = __importDefault(require("wait-for-expect"));
const AsyncWorkQueue_1 = require("./AsyncWorkQueue");
let mockValue = 0;
function mockAsyncFunction() {
    return __awaiter(this, void 0, void 0, function* () {
        return mockValue++;
    });
}
exports.mockAsyncFunction = mockAsyncFunction;
describe('AsyncWorkQueue', function () {
    let inputs = [];
    beforeEach(function () {
        mockValue = 0;
        inputs = [];
    });
    it("Chained work", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const work = [];
            function firstJob() {
                return __awaiter(this, void 0, void 0, function* () {
                    return 1;
                });
            }
            function secondJob() {
                return __awaiter(this, void 0, void 0, function* () {
                    return 2;
                });
            }
            work.push(mockAsyncFunction);
            const asyncWorkQueue = new AsyncWorkQueue_1.AsyncWorkQueue(work);
            yield asyncWorkQueue.execute();
            Assertions_1.assertJSON(inputs.sort(), []);
        });
    });
    it("With no work", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const work = [];
            const asyncWorkQueue = new AsyncWorkQueue_1.AsyncWorkQueue(work);
            yield asyncWorkQueue.execute();
            Assertions_1.assertJSON(inputs.sort(), []);
        });
    });
    it("With work smaller than concurrency.", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const work = [mockAsyncFunction, mockAsyncFunction];
            const asyncWorkQueue = new AsyncWorkQueue_1.AsyncWorkQueue(work, 10);
            yield asyncWorkQueue.execute();
            Assertions_1.assertJSON(work.sort(), []);
        });
    });
    it("With work larger than concurrency.", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const work = [mockAsyncFunction, mockAsyncFunction, mockAsyncFunction];
            const asyncWorkQueue = new AsyncWorkQueue_1.AsyncWorkQueue(work, 2);
            yield asyncWorkQueue.execute();
            Assertions_1.assertJSON(work.sort(), []);
        });
    });
    it("Expand with additional work", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const work = [];
            function addMoreWork() {
                return __awaiter(this, void 0, void 0, function* () {
                    work.push(mockAsyncFunction);
                });
            }
            work.push(mockAsyncFunction);
            work.push(addMoreWork);
            const asyncWorkQueue = new AsyncWorkQueue_1.AsyncWorkQueue(work);
            yield asyncWorkQueue.execute();
            Assertions_1.assertJSON(work.sort(), []);
            chai_1.assert.equal(asyncWorkQueue.getCompleted(), 3);
        });
    });
    it("Verify that 'executing' lowers", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const latches = [];
            latches.push(new Latch_1.Latch());
            latches.push(new Latch_1.Latch());
            let concurrency = 0;
            function verifyConcurrency() {
                return __awaiter(this, void 0, void 0, function* () {
                    const latch = latches[concurrency++];
                    yield latch.get();
                    return true;
                });
            }
            const work = [verifyConcurrency, verifyConcurrency];
            const asyncWorkQueue = new AsyncWorkQueue_1.AsyncWorkQueue(work, 2);
            const executionPromise = asyncWorkQueue.execute();
            yield wait_for_expect_1.default(() => __awaiter(this, void 0, void 0, function* () {
                chai_1.assert.equal(asyncWorkQueue.getExecuting(), 2);
            }));
            latches[0].resolve(true);
            yield wait_for_expect_1.default(() => __awaiter(this, void 0, void 0, function* () {
                chai_1.assert.equal(asyncWorkQueue.getExecuting(), 1);
            }));
            latches[1].resolve(true);
            yield wait_for_expect_1.default(() => __awaiter(this, void 0, void 0, function* () {
                chai_1.assert.equal(asyncWorkQueue.getExecuting(), 0);
            }));
            yield executionPromise;
        });
    });
    it("Verify that 'executing' increases when the work expands", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const latches = [];
            latches.push(new Latch_1.Latch());
            latches.push(new Latch_1.Latch());
            latches.push(new Latch_1.Latch());
            latches.push(new Latch_1.Latch());
            latches.push(new Latch_1.Latch());
            let completedTasks = 0;
            function verifyConcurrency() {
                return __awaiter(this, void 0, void 0, function* () {
                    const latch = latches[completedTasks++];
                    yield latch.get();
                    return true;
                });
            }
            function addMoreWork() {
                return __awaiter(this, void 0, void 0, function* () {
                    const latch = latches[completedTasks++];
                    yield latch.get();
                    work.push(verifyConcurrency);
                    work.push(verifyConcurrency);
                });
            }
            const work = [verifyConcurrency, verifyConcurrency, addMoreWork];
            const asyncWorkQueue = new AsyncWorkQueue_1.AsyncWorkQueue(work, 2);
            const executionPromise = asyncWorkQueue.execute();
            yield wait_for_expect_1.default(() => __awaiter(this, void 0, void 0, function* () {
                chai_1.assert.equal(asyncWorkQueue.getExecuting(), 2);
            }));
            latches[0].resolve(true);
            latches[1].resolve(true);
            yield wait_for_expect_1.default(() => __awaiter(this, void 0, void 0, function* () {
                chai_1.assert.equal(asyncWorkQueue.getCompleted(), 2);
                chai_1.assert.equal(asyncWorkQueue.getExecuting(), 1);
            }));
            latches[2].resolve(true);
            yield wait_for_expect_1.default(() => __awaiter(this, void 0, void 0, function* () {
                chai_1.assert.equal(asyncWorkQueue.getCompleted(), 3);
                chai_1.assert.equal(asyncWorkQueue.getExecuting(), 2);
            }));
            latches[3].resolve(true);
            latches[4].resolve(true);
            yield wait_for_expect_1.default(() => __awaiter(this, void 0, void 0, function* () {
                chai_1.assert.equal(asyncWorkQueue.getCompleted(), 5);
                chai_1.assert.equal(asyncWorkQueue.getExecuting(), 0);
            }));
            yield executionPromise;
        });
    });
    it("With verified concurrency", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const latches = [];
            latches.push(new Latch_1.Latch());
            latches.push(new Latch_1.Latch());
            latches.push(new Latch_1.Latch());
            latches.push(new Latch_1.Latch());
            latches.push(new Latch_1.Latch());
            latches.push(new Latch_1.Latch());
            latches.push(new Latch_1.Latch());
            latches.push(new Latch_1.Latch());
            latches.push(new Latch_1.Latch());
            latches.push(new Latch_1.Latch());
            let concurrency = 0;
            function verifyConcurrency() {
                return __awaiter(this, void 0, void 0, function* () {
                    const latch = latches[concurrency++];
                    yield latch.get();
                    return true;
                });
            }
            const work = [verifyConcurrency, verifyConcurrency, verifyConcurrency, verifyConcurrency, verifyConcurrency,
                verifyConcurrency, verifyConcurrency, verifyConcurrency, verifyConcurrency, verifyConcurrency];
            const asyncWorkQueue = new AsyncWorkQueue_1.AsyncWorkQueue(work, 10);
            const executionPromise = asyncWorkQueue.execute();
            yield wait_for_expect_1.default(() => __awaiter(this, void 0, void 0, function* () {
                chai_1.assert.equal(concurrency, 10);
                chai_1.assert.equal(asyncWorkQueue.getExecuting(), 10);
            }));
            for (const latch of latches) {
                latch.resolve(true);
            }
            yield executionPromise;
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXN5bmNXb3JrUXVldWVUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXN5bmNXb3JrUXVldWVUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBNEI7QUFHNUIsbURBQThDO0FBQzlDLG1DQUE4QjtBQUM5QixzRUFBNEM7QUFJNUMscURBQStEO0FBTS9ELElBQUksU0FBUyxHQUFXLENBQUMsQ0FBQztBQUUxQixTQUFzQixpQkFBaUI7O1FBQ25DLE9BQU8sU0FBUyxFQUFFLENBQUM7SUFDdkIsQ0FBQztDQUFBO0FBRkQsOENBRUM7QUFFRCxRQUFRLENBQUMsZ0JBQWdCLEVBQUU7SUFFdkIsSUFBSSxNQUFNLEdBQW9CLEVBQUUsQ0FBQztJQUVqQyxVQUFVLENBQUM7UUFDUCxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNoQixDQUFDLENBQUMsQ0FBQztJQUdILEVBQUUsQ0FBQyxjQUFjLEVBQUU7O1lBRWYsTUFBTSxJQUFJLEdBQW9CLEVBQUUsQ0FBQztZQUVqQyxTQUFlLFFBQVE7O29CQUNuQixPQUFPLENBQUMsQ0FBQztnQkFDYixDQUFDO2FBQUE7WUFFRCxTQUFlLFNBQVM7O29CQUNwQixPQUFPLENBQUMsQ0FBQztnQkFDYixDQUFDO2FBQUE7WUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFFN0IsTUFBTSxjQUFjLEdBQUcsSUFBSSwrQkFBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hELE1BQU0sY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBRS9CLHVCQUFVLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWxDLENBQUM7S0FBQSxDQUFDLENBQUM7SUFHSCxFQUFFLENBQUMsY0FBYyxFQUFFOztZQUVmLE1BQU0sSUFBSSxHQUFvQixFQUFFLENBQUM7WUFFakMsTUFBTSxjQUFjLEdB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LENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHtQcm9ncmVzc0NhbGN1bGF0b3J9IGZyb20gJy4vUHJvZ3Jlc3NDYWxjdWxhdG9yJztcbmltcG9ydCB7UmVzb2x2YWJsZVByb21pc2V9IGZyb20gJy4vUmVzb2x2YWJsZVByb21pc2UnO1xuaW1wb3J0IHthc3NlcnRKU09OfSBmcm9tICcuLi90ZXN0L0Fzc2VydGlvbnMnO1xuaW1wb3J0IHtMYXRjaH0gZnJvbSAnLi9MYXRjaCc7XG5pbXBvcnQgd2FpdEZvckV4cGVjdCBmcm9tICd3YWl0LWZvci1leHBlY3QnO1xuaW1wb3J0IHtQb2xhckRhdGFEaXJ9IGZyb20gJy4uL3Rlc3QvUG9sYXJEYXRhRGlyJztcbmltcG9ydCB7RmlsZVBhdGhzfSBmcm9tICcuL0ZpbGVQYXRocyc7XG5pbXBvcnQge0ZpbGVzfSBmcm9tICcuL0ZpbGVzJztcbmltcG9ydCB7QXN5bmNGdW5jdGlvbiwgQXN5bmNXb3JrUXVldWV9IGZyb20gJy4vQXN5bmNXb3JrUXVldWUnO1xuXG5pbnRlcmZhY2UgV2lkZ2V0IHtcblxufVxuXG5sZXQgbW9ja1ZhbHVlOiBudW1iZXIgPSAwO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbW9ja0FzeW5jRnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG1vY2tWYWx1ZSsrO1xufVxuXG5kZXNjcmliZSgnQXN5bmNXb3JrUXVldWUnLCBmdW5jdGlvbigpIHtcblxuICAgIGxldCBpbnB1dHM6IEFzeW5jRnVuY3Rpb25bXSA9IFtdO1xuXG4gICAgYmVmb3JlRWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgbW9ja1ZhbHVlID0gMDtcbiAgICAgICAgaW5wdXRzID0gW107XG4gICAgfSk7XG5cblxuICAgIGl0KFwiQ2hhaW5lZCB3b3JrXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGNvbnN0IHdvcms6IEFzeW5jRnVuY3Rpb25bXSA9IFtdO1xuXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZpcnN0Sm9iKCkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cblxuICAgICAgICBhc3luYyBmdW5jdGlvbiBzZWNvbmRKb2IoKSB7XG4gICAgICAgICAgICByZXR1cm4gMjtcbiAgICAgICAgfVxuXG4gICAgICAgIHdvcmsucHVzaChtb2NrQXN5bmNGdW5jdGlvbik7XG5cbiAgICAgICAgY29uc3QgYXN5bmNXb3JrUXVldWUgPSBuZXcgQXN5bmNXb3JrUXVldWUod29yayk7XG4gICAgICAgIGF3YWl0IGFzeW5jV29ya1F1ZXVlLmV4ZWN1dGUoKTtcblxuICAgICAgICBhc3NlcnRKU09OKGlucHV0cy5zb3J0KCksIFtdKTtcblxuICAgIH0pO1xuXG5cbiAgICBpdChcIldpdGggbm8gd29ya1wiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICBjb25zdCB3b3JrOiBBc3luY0Z1bmN0aW9uW10gPSBbXTtcblxuICAgICAgICBjb25zdCBhc3luY1dvcmtRdWV1ZSA9IG5ldyBBc3luY1dvcmtRdWV1ZSh3b3JrKTtcbiAgICAgICAgYXdhaXQgYXN5bmNXb3JrUXVldWUuZXhlY3V0ZSgpO1xuXG4gICAgICAgIGFzc2VydEpTT04oaW5wdXRzLnNvcnQoKSwgW10pO1xuXG4gICAgfSk7XG5cbiAgICBpdChcIldpdGggd29yayBzbWFsbGVyIHRoYW4gY29uY3VycmVuY3kuXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCB3b3JrOiBBc3luY0Z1bmN0aW9uW10gPSBbbW9ja0FzeW5jRnVuY3Rpb24sIG1vY2tBc3luY0Z1bmN0aW9uXTtcbiAgICAgICAgY29uc3QgYXN5bmNXb3JrUXVldWUgPSBuZXcgQXN5bmNXb3JrUXVldWUod29yaywgMTApO1xuICAgICAgICBhd2FpdCBhc3luY1dvcmtRdWV1ZS5leGVjdXRlKCk7XG4gICAgICAgIGFzc2VydEpTT04od29yay5zb3J0KCksIFtdKTtcbiAgICB9KTtcblxuICAgIGl0KFwiV2l0aCB3b3JrIGxhcmdlciB0aGFuIGNvbmN1cnJlbmN5LlwiLCBhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3Qgd29yazogQXN5bmNGdW5jdGlvbltdID0gW21vY2tBc3luY0Z1bmN0aW9uLCBtb2NrQXN5bmNGdW5jdGlvbiwgbW9ja0FzeW5jRnVuY3Rpb25dO1xuICAgICAgICBjb25zdCBhc3luY1dvcmtRdWV1ZSA9IG5ldyBBc3luY1dvcmtRdWV1ZSh3b3JrLCAyKTtcbiAgICAgICAgYXdhaXQgYXN5bmNXb3JrUXVldWUuZXhlY3V0ZSgpO1xuICAgICAgICBhc3NlcnRKU09OKHdvcmsuc29ydCgpLCBbXSk7XG4gICAgfSk7XG5cblxuICAgIGl0KFwiRXhwYW5kIHdpdGggYWRkaXRpb25hbCB3b3JrXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIC8vIHRlc3QgdGhhdCB3ZSBjYW4gYWRkIG1vcmUgd29yayBvbmNlIHdlJ3ZlIHN0YXJ0ZWQuLi5cblxuICAgICAgICBjb25zdCB3b3JrOiBBc3luY0Z1bmN0aW9uW10gPSBbXTtcblxuICAgICAgICBhc3luYyBmdW5jdGlvbiBhZGRNb3JlV29yaygpIHtcbiAgICAgICAgICAgIHdvcmsucHVzaChtb2NrQXN5bmNGdW5jdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICB3b3JrLnB1c2gobW9ja0FzeW5jRnVuY3Rpb24pO1xuICAgICAgICB3b3JrLnB1c2goYWRkTW9yZVdvcmspO1xuXG4gICAgICAgIGNvbnN0IGFzeW5jV29ya1F1ZXVlID0gbmV3IEFzeW5jV29ya1F1ZXVlKHdvcmspO1xuICAgICAgICBhd2FpdCBhc3luY1dvcmtRdWV1ZS5leGVjdXRlKCk7XG4gICAgICAgIGFzc2VydEpTT04od29yay5zb3J0KCksIFtdKTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwoYXN5bmNXb3JrUXVldWUuZ2V0Q29tcGxldGVkKCksIDMpO1xuXG4gICAgfSk7XG5cbiAgICBpdChcIlZlcmlmeSB0aGF0ICdleGVjdXRpbmcnIGxvd2Vyc1wiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICBjb25zdCBsYXRjaGVzOiBBcnJheTxMYXRjaDxib29sZWFuPj4gPSBbXTtcblxuICAgICAgICBsYXRjaGVzLnB1c2gobmV3IExhdGNoKCkpO1xuICAgICAgICBsYXRjaGVzLnB1c2gobmV3IExhdGNoKCkpO1xuXG4gICAgICAgIGxldCBjb25jdXJyZW5jeSA9IDA7XG5cbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5Q29uY3VycmVuY3koKSB7XG4gICAgICAgICAgICBjb25zdCBsYXRjaCA9IGxhdGNoZXNbY29uY3VycmVuY3krK107XG4gICAgICAgICAgICBhd2FpdCBsYXRjaC5nZXQoKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd29yayA9IFt2ZXJpZnlDb25jdXJyZW5jeSwgdmVyaWZ5Q29uY3VycmVuY3ldO1xuXG4gICAgICAgIGNvbnN0IGFzeW5jV29ya1F1ZXVlID0gbmV3IEFzeW5jV29ya1F1ZXVlKHdvcmssIDIpO1xuICAgICAgICBjb25zdCBleGVjdXRpb25Qcm9taXNlID0gYXN5bmNXb3JrUXVldWUuZXhlY3V0ZSgpO1xuXG4gICAgICAgIGF3YWl0IHdhaXRGb3JFeHBlY3QoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKGFzeW5jV29ya1F1ZXVlLmdldEV4ZWN1dGluZygpLCAyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gcmVzb2x2ZSB0aGUgZmlyc3QgbGF0Y2guLi5cblxuICAgICAgICBsYXRjaGVzWzBdLnJlc29sdmUodHJ1ZSk7XG5cbiAgICAgICAgYXdhaXQgd2FpdEZvckV4cGVjdChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoYXN5bmNXb3JrUXVldWUuZ2V0RXhlY3V0aW5nKCksIDEpO1xuICAgICAgICB9KTtcblxuICAgICAgICBsYXRjaGVzWzFdLnJlc29sdmUodHJ1ZSk7XG5cbiAgICAgICAgYXdhaXQgd2FpdEZvckV4cGVjdChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoYXN5bmNXb3JrUXVldWUuZ2V0RXhlY3V0aW5nKCksIDApO1xuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCBleGVjdXRpb25Qcm9taXNlO1xuXG4gICAgfSk7XG5cblxuICAgIGl0KFwiVmVyaWZ5IHRoYXQgJ2V4ZWN1dGluZycgaW5jcmVhc2VzIHdoZW4gdGhlIHdvcmsgZXhwYW5kc1wiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICBjb25zdCBsYXRjaGVzOiBBcnJheTxMYXRjaDxib29sZWFuPj4gPSBbXTtcblxuICAgICAgICBsYXRjaGVzLnB1c2gobmV3IExhdGNoKCkpO1xuICAgICAgICBsYXRjaGVzLnB1c2gobmV3IExhdGNoKCkpO1xuICAgICAgICBsYXRjaGVzLnB1c2gobmV3IExhdGNoKCkpO1xuICAgICAgICBsYXRjaGVzLnB1c2gobmV3IExhdGNoKCkpO1xuICAgICAgICBsYXRjaGVzLnB1c2gobmV3IExhdGNoKCkpO1xuXG4gICAgICAgIGxldCBjb21wbGV0ZWRUYXNrcyA9IDA7XG5cbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5Q29uY3VycmVuY3koKSB7XG4gICAgICAgICAgICBjb25zdCBsYXRjaCA9IGxhdGNoZXNbY29tcGxldGVkVGFza3MrK107XG4gICAgICAgICAgICBhd2FpdCBsYXRjaC5nZXQoKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gYWRkTW9yZVdvcmsoKSB7XG4gICAgICAgICAgICBjb25zdCBsYXRjaCA9IGxhdGNoZXNbY29tcGxldGVkVGFza3MrK107XG4gICAgICAgICAgICBhd2FpdCBsYXRjaC5nZXQoKTtcbiAgICAgICAgICAgIHdvcmsucHVzaCh2ZXJpZnlDb25jdXJyZW5jeSk7XG4gICAgICAgICAgICB3b3JrLnB1c2godmVyaWZ5Q29uY3VycmVuY3kpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd29yayA9IFt2ZXJpZnlDb25jdXJyZW5jeSwgdmVyaWZ5Q29uY3VycmVuY3ksIGFkZE1vcmVXb3JrXTtcblxuICAgICAgICBjb25zdCBhc3luY1dvcmtRdWV1ZSA9IG5ldyBBc3luY1dvcmtRdWV1ZSh3b3JrLCAyKTtcbiAgICAgICAgY29uc3QgZXhlY3V0aW9uUHJvbWlzZSA9IGFzeW5jV29ya1F1ZXVlLmV4ZWN1dGUoKTtcblxuICAgICAgICBhd2FpdCB3YWl0Rm9yRXhwZWN0KGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChhc3luY1dvcmtRdWV1ZS5nZXRFeGVjdXRpbmcoKSwgMik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHJlc29sdmUgdGhlIGZpcnN0IHR3byBsYXRjaGVzIC4uLlxuXG4gICAgICAgIGxhdGNoZXNbMF0ucmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgbGF0Y2hlc1sxXS5yZXNvbHZlKHRydWUpO1xuXG4gICAgICAgIGF3YWl0IHdhaXRGb3JFeHBlY3QoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKGFzeW5jV29ya1F1ZXVlLmdldENvbXBsZXRlZCgpLCAyKTtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChhc3luY1dvcmtRdWV1ZS5nZXRFeGVjdXRpbmcoKSwgMSk7XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgbGF0Y2hlc1syXS5yZXNvbHZlKHRydWUpO1xuXG4gICAgICAgIGF3YWl0IHdhaXRGb3JFeHBlY3QoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKGFzeW5jV29ya1F1ZXVlLmdldENvbXBsZXRlZCgpLCAzKTtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChhc3luY1dvcmtRdWV1ZS5nZXRFeGVjdXRpbmcoKSwgMik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxhdGNoZXNbM10ucmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgbGF0Y2hlc1s0XS5yZXNvbHZlKHRydWUpO1xuXG4gICAgICAgIGF3YWl0IHdhaXRGb3JFeHBlY3QoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKGFzeW5jV29ya1F1ZXVlLmdldENvbXBsZXRlZCgpLCA1KTtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChhc3luY1dvcmtRdWV1ZS5nZXRFeGVjdXRpbmcoKSwgMCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IGV4ZWN1dGlvblByb21pc2U7XG5cbiAgICB9KTtcblxuXG4gICAgaXQoXCJXaXRoIHZlcmlmaWVkIGNvbmN1cnJlbmN5XCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGNvbnN0IGxhdGNoZXM6IEFycmF5PExhdGNoPGJvb2xlYW4+PiA9IFtdO1xuXG4gICAgICAgIGxhdGNoZXMucHVzaChuZXcgTGF0Y2goKSk7XG4gICAgICAgIGxhdGNoZXMucHVzaChuZXcgTGF0Y2goKSk7XG4gICAgICAgIGxhdGNoZXMucHVzaChuZXcgTGF0Y2goKSk7XG4gICAgICAgIGxhdGNoZXMucHVzaChuZXcgTGF0Y2goKSk7XG4gICAgICAgIGxhdGNoZXMucHVzaChuZXcgTGF0Y2goKSk7XG4gICAgICAgIGxhdGNoZXMucHVzaChuZXcgTGF0Y2goKSk7XG4gICAgICAgIGxhdGNoZXMucHVzaChuZXcgTGF0Y2goKSk7XG4gICAgICAgIGxhdGNoZXMucHVzaChuZXcgTGF0Y2goKSk7XG4gICAgICAgIGxhdGNoZXMucHVzaChuZXcgTGF0Y2goKSk7XG4gICAgICAgIGxhdGNoZXMucHVzaChuZXcgTGF0Y2goKSk7XG5cbiAgICAgICAgbGV0IGNvbmN1cnJlbmN5ID0gMDtcblxuICAgICAgICBhc3luYyBmdW5jdGlvbiB2ZXJpZnlDb25jdXJyZW5jeSgpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhdGNoID0gbGF0Y2hlc1tjb25jdXJyZW5jeSsrXTtcbiAgICAgICAgICAgIGF3YWl0IGxhdGNoLmdldCgpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3b3JrID0gW3ZlcmlmeUNvbmN1cnJlbmN5LCB2ZXJpZnlDb25jdXJyZW5jeSwgdmVyaWZ5Q29uY3VycmVuY3ksIHZlcmlmeUNvbmN1cnJlbmN5LCB2ZXJpZnlDb25jdXJyZW5jeSxcbiAgICAgICAgICAgICAgICAgICAgICB2ZXJpZnlDb25jdXJyZW5jeSwgdmVyaWZ5Q29uY3VycmVuY3ksIHZlcmlmeUNvbmN1cnJlbmN5LCB2ZXJpZnlDb25jdXJyZW5jeSwgdmVyaWZ5Q29uY3VycmVuY3ldO1xuXG4gICAgICAgIGNvbnN0IGFzeW5jV29ya1F1ZXVlID0gbmV3IEFzeW5jV29ya1F1ZXVlKHdvcmssIDEwKTtcbiAgICAgICAgY29uc3QgZXhlY3V0aW9uUHJvbWlzZSA9IGFzeW5jV29ya1F1ZXVlLmV4ZWN1dGUoKTtcblxuICAgICAgICBhd2FpdCB3YWl0Rm9yRXhwZWN0KGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChjb25jdXJyZW5jeSwgMTApO1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKGFzeW5jV29ya1F1ZXVlLmdldEV4ZWN1dGluZygpLCAxMCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAoY29uc3QgbGF0Y2ggb2YgbGF0Y2hlcykge1xuICAgICAgICAgICAgbGF0Y2gucmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IGV4ZWN1dGlvblByb21pc2U7XG5cbiAgICB9KTtcblxufSk7XG5cbiJdfQ==