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
const AsyncWorkQueue_1 = require("./AsyncWorkQueue");
class AsyncWorkQueues {
    static awaitPromises(promises, concurrency = 25) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = [];
            const work = promises.map(current => () => __awaiter(this, void 0, void 0, function* () {
                const value = yield current;
                results.push(value);
            }));
            const asyncWorkQueue = new AsyncWorkQueue_1.AsyncWorkQueue(work);
            yield asyncWorkQueue.execute();
            return results;
        });
    }
}
exports.AsyncWorkQueues = AsyncWorkQueues;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXN5bmNXb3JrUXVldWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXN5bmNXb3JrUXVldWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxxREFBZ0Q7QUFFaEQsTUFBYSxlQUFlO0lBTWpCLE1BQU0sQ0FBTyxhQUFhLENBQUksUUFBbUMsRUFDbkMsY0FBc0IsRUFBRTs7WUFFekQsTUFBTSxPQUFPLEdBQVEsRUFBRSxDQUFDO1lBRXhCLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFTLEVBQUU7Z0JBQzVDLE1BQU0sS0FBSyxHQUFHLE1BQU0sT0FBTyxDQUFDO2dCQUM1QixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hCLENBQUMsQ0FBQSxDQUFDLENBQUM7WUFFSCxNQUFNLGNBQWMsR0FBRyxJQUFJLCtCQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFaEQsTUFBTSxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFL0IsT0FBTyxPQUFPLENBQUM7UUFFbkIsQ0FBQztLQUFBO0NBRUo7QUF4QkQsMENBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMYXRjaH0gZnJvbSAnLi9MYXRjaCc7XG5pbXBvcnQge0FzeW5jV29ya1F1ZXVlfSBmcm9tICcuL0FzeW5jV29ya1F1ZXVlJztcblxuZXhwb3J0IGNsYXNzIEFzeW5jV29ya1F1ZXVlcyB7XG5cbiAgICAvKipcbiAgICAgKiBBd2FpdCBhIGxpc3Qgb2YgcHJvbWlzZXMgY29uY3VycmVudGx5LlxuICAgICAqXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBhd2FpdFByb21pc2VzPFQ+KHByb21pc2VzOiBSZWFkb25seUFycmF5PFByb21pc2U8VD4+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25jdXJyZW5jeTogbnVtYmVyID0gMjUpOiBQcm9taXNlPFJlYWRvbmx5QXJyYXk8VD4+IHtcblxuICAgICAgICBjb25zdCByZXN1bHRzOiBUW10gPSBbXTtcblxuICAgICAgICBjb25zdCB3b3JrID0gcHJvbWlzZXMubWFwKGN1cnJlbnQgPT4gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCBjdXJyZW50O1xuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgYXN5bmNXb3JrUXVldWUgPSBuZXcgQXN5bmNXb3JrUXVldWUod29yayk7XG5cbiAgICAgICAgYXdhaXQgYXN5bmNXb3JrUXVldWUuZXhlY3V0ZSgpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuXG4gICAgfVxuXG59XG4iXX0=