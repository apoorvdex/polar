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
const Providers_1 = require("./Providers");
const TestingTime_1 = require("../test/TestingTime");
const TimeDurations_1 = require("./TimeDurations");
describe('Providers', function () {
    afterEach(function () {
        TestingTime_1.TestingTime.unfreeze();
    });
    describe('cached', function () {
        it("basic", function () {
            return __awaiter(this, void 0, void 0, function* () {
                TestingTime_1.TestingTime.freeze();
                let called = 0;
                const backingProvider = () => {
                    ++called;
                    return 'hello';
                };
                const cachedProvider = Providers_1.Providers.cached('5m', backingProvider);
                chai_1.assert.equal(called, 0);
                cachedProvider();
                chai_1.assert.equal(called, 1);
                cachedProvider();
                chai_1.assert.equal(called, 1);
                cachedProvider();
                chai_1.assert.equal(called, 1);
                TestingTime_1.TestingTime.forward(TimeDurations_1.TimeDurations.toMillis('4m'));
                cachedProvider();
                chai_1.assert.equal(called, 1);
                TestingTime_1.TestingTime.forward(TimeDurations_1.TimeDurations.toMillis('5m'));
                cachedProvider();
                chai_1.assert.equal(called, 2);
                cachedProvider();
                chai_1.assert.equal(called, 2);
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvdmlkZXJzVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlByb3ZpZGVyc1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLCtCQUE0QjtBQUM1QiwyQ0FBZ0Q7QUFDaEQscURBQWdEO0FBQ2hELG1EQUE4QztBQUU5QyxRQUFRLENBQUMsV0FBVyxFQUFFO0lBRWxCLFNBQVMsQ0FBQztRQUNOLHlCQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsUUFBUSxFQUFFO1FBRWYsRUFBRSxDQUFDLE9BQU8sRUFBRTs7Z0JBRVIseUJBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFFckIsSUFBSSxNQUFNLEdBQVcsQ0FBQyxDQUFDO2dCQUV2QixNQUFNLGVBQWUsR0FBcUIsR0FBRyxFQUFFO29CQUMzQyxFQUFFLE1BQU0sQ0FBQztvQkFDVCxPQUFPLE9BQU8sQ0FBQztnQkFDbkIsQ0FBQyxDQUFDO2dCQUVGLE1BQU0sY0FBYyxHQUFHLHFCQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsQ0FBQztnQkFFL0QsYUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBRXhCLGNBQWMsRUFBRSxDQUFDO2dCQUNqQixhQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFFeEIsY0FBYyxFQUFFLENBQUM7Z0JBQ2pCLGFBQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUV4QixjQUFjLEVBQUUsQ0FBQztnQkFDakIsYUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBRXhCLHlCQUFXLENBQUMsT0FBTyxDQUFDLDZCQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBRWxELGNBQWMsRUFBRSxDQUFDO2dCQUNqQixhQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFFeEIseUJBQVcsQ0FBQyxPQUFPLENBQUMsNkJBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFFbEQsY0FBYyxFQUFFLENBQUM7Z0JBQ2pCLGFBQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUV4QixjQUFjLEVBQUUsQ0FBQztnQkFDakIsYUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFNUIsQ0FBQztTQUFBLENBQUMsQ0FBQztJQUVQLENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQge1Byb3ZpZGVyLCBQcm92aWRlcnN9IGZyb20gXCIuL1Byb3ZpZGVyc1wiO1xuaW1wb3J0IHtUZXN0aW5nVGltZX0gZnJvbSBcIi4uL3Rlc3QvVGVzdGluZ1RpbWVcIjtcbmltcG9ydCB7VGltZUR1cmF0aW9uc30gZnJvbSAnLi9UaW1lRHVyYXRpb25zJztcblxuZGVzY3JpYmUoJ1Byb3ZpZGVycycsIGZ1bmN0aW9uKCkge1xuXG4gICAgYWZ0ZXJFYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBUZXN0aW5nVGltZS51bmZyZWV6ZSgpO1xuICAgIH0pO1xuXG4gICAgZGVzY3JpYmUoJ2NhY2hlZCcsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGl0KFwiYmFzaWNcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIFRlc3RpbmdUaW1lLmZyZWV6ZSgpO1xuXG4gICAgICAgICAgICBsZXQgY2FsbGVkOiBudW1iZXIgPSAwO1xuXG4gICAgICAgICAgICBjb25zdCBiYWNraW5nUHJvdmlkZXI6IFByb3ZpZGVyPHN0cmluZz4gPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgKytjYWxsZWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdoZWxsbyc7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBjYWNoZWRQcm92aWRlciA9IFByb3ZpZGVycy5jYWNoZWQoJzVtJywgYmFja2luZ1Byb3ZpZGVyKTtcblxuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKGNhbGxlZCwgMCk7XG5cbiAgICAgICAgICAgIGNhY2hlZFByb3ZpZGVyKCk7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoY2FsbGVkLCAxKTtcblxuICAgICAgICAgICAgY2FjaGVkUHJvdmlkZXIoKTtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChjYWxsZWQsIDEpO1xuXG4gICAgICAgICAgICBjYWNoZWRQcm92aWRlcigpO1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKGNhbGxlZCwgMSk7XG5cbiAgICAgICAgICAgIFRlc3RpbmdUaW1lLmZvcndhcmQoVGltZUR1cmF0aW9ucy50b01pbGxpcygnNG0nKSk7XG5cbiAgICAgICAgICAgIGNhY2hlZFByb3ZpZGVyKCk7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoY2FsbGVkLCAxKTtcblxuICAgICAgICAgICAgVGVzdGluZ1RpbWUuZm9yd2FyZChUaW1lRHVyYXRpb25zLnRvTWlsbGlzKCc1bScpKTtcblxuICAgICAgICAgICAgY2FjaGVkUHJvdmlkZXIoKTtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChjYWxsZWQsIDIpO1xuXG4gICAgICAgICAgICBjYWNoZWRQcm92aWRlcigpO1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKGNhbGxlZCwgMik7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxufSk7XG5cblxuIl19