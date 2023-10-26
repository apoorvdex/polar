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
const Assertions_1 = require("../test/Assertions");
const AsyncWorkQueues_1 = require("./AsyncWorkQueues");
describe('AsyncWorkQueues', function () {
    describe('awaitPromises', function () {
        it("with no work", function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield AsyncWorkQueues_1.AsyncWorkQueues.awaitPromises([]);
            });
        });
        it("with one job", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const work = [
                    Promise.resolve(true)
                ];
                const results = yield AsyncWorkQueues_1.AsyncWorkQueues.awaitPromises(work);
                Assertions_1.assertJSON(results, [true]);
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXN5bmNXb3JrUXVldWVzVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFzeW5jV29ya1F1ZXVlc1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUM5Qyx1REFBa0Q7QUFFbEQsUUFBUSxDQUFDLGlCQUFpQixFQUFFO0lBRXhCLFFBQVEsQ0FBQyxlQUFlLEVBQUU7UUFFdEIsRUFBRSxDQUFDLGNBQWMsRUFBRTs7Z0JBRWYsTUFBTSxpQ0FBZSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUU1QyxDQUFDO1NBQUEsQ0FBQyxDQUFDO1FBR0gsRUFBRSxDQUFDLGNBQWMsRUFBRTs7Z0JBRWYsTUFBTSxJQUFJLEdBQUc7b0JBQ1QsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7aUJBQ3hCLENBQUM7Z0JBRUYsTUFBTSxPQUFPLEdBQUcsTUFBTSxpQ0FBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFMUQsdUJBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBRWhDLENBQUM7U0FBQSxDQUFDLENBQUM7SUFFUCxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3NlcnRKU09OfSBmcm9tICcuLi90ZXN0L0Fzc2VydGlvbnMnO1xuaW1wb3J0IHtBc3luY1dvcmtRdWV1ZXN9IGZyb20gJy4vQXN5bmNXb3JrUXVldWVzJztcblxuZGVzY3JpYmUoJ0FzeW5jV29ya1F1ZXVlcycsIGZ1bmN0aW9uKCkge1xuXG4gICAgZGVzY3JpYmUoJ2F3YWl0UHJvbWlzZXMnLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBpdChcIndpdGggbm8gd29ya1wiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgYXdhaXQgQXN5bmNXb3JrUXVldWVzLmF3YWl0UHJvbWlzZXMoW10pO1xuXG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgaXQoXCJ3aXRoIG9uZSBqb2JcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHdvcmsgPSBbXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHRydWUpXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgQXN5bmNXb3JrUXVldWVzLmF3YWl0UHJvbWlzZXMod29yayk7XG5cbiAgICAgICAgICAgIGFzc2VydEpTT04ocmVzdWx0cywgW3RydWVdKTtcblxuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG59KTtcblxuIl19