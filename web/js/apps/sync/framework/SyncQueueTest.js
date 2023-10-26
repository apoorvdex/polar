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
const SyncQueue_1 = require("./SyncQueue");
const Optional_1 = require("../../../util/ts/Optional");
describe('SyncQueueTest', function () {
    const abortable = {
        aborted: false
    };
    const syncProgressListener = syncProgress => {
        console.log(syncProgress);
    };
    const syncQueue = new SyncQueue_1.SyncQueue(abortable, syncProgressListener);
    it("basic test", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const results = [];
            syncQueue.add(() => __awaiter(this, void 0, void 0, function* () {
                results.push(0);
                return Optional_1.Optional.empty();
            }));
            yield syncQueue.execute();
            chai_1.assert.deepEqual(results, [0]);
        });
    });
    it("with one level of generators", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const results = [];
            syncQueue.add(() => __awaiter(this, void 0, void 0, function* () {
                results.push(0);
                syncQueue.add(() => __awaiter(this, void 0, void 0, function* () {
                    results.push(1);
                    return Optional_1.Optional.empty();
                }));
                return Optional_1.Optional.empty();
            }));
            yield syncQueue.execute();
            chai_1.assert.deepEqual(results, [0, 1]);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3luY1F1ZXVlVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlN5bmNRdWV1ZVRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLCtCQUE0QjtBQUM1QiwyQ0FBc0M7QUFHdEMsd0RBQW1EO0FBR25ELFFBQVEsQ0FBQyxlQUFlLEVBQUU7SUFFdEIsTUFBTSxTQUFTLEdBQWM7UUFDekIsT0FBTyxFQUFFLEtBQUs7S0FDakIsQ0FBQztJQUVGLE1BQU0sb0JBQW9CLEdBQXlCLFlBQVksQ0FBQyxFQUFFO1FBQzlELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDO0lBRUYsTUFBTSxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLFNBQVMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBRWpFLEVBQUUsQ0FBQyxZQUFZLEVBQUU7O1lBRWIsTUFBTSxPQUFPLEdBQWEsRUFBRSxDQUFDO1lBRTdCLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBUSxFQUFFO2dCQUNwQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixPQUFPLG1CQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDNUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztZQUVILE1BQU0sU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBRTFCLGFBQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVuQyxDQUFDO0tBQUEsQ0FBQyxDQUFDO0lBR0gsRUFBRSxDQUFDLDhCQUE4QixFQUFFOztZQUUvQixNQUFNLE9BQU8sR0FBYSxFQUFFLENBQUM7WUFFN0IsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFTLEVBQUU7Z0JBQ3JCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRWhCLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBUyxFQUFFO29CQUNyQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNoQixPQUFPLG1CQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzVCLENBQUMsQ0FBQSxDQUFDLENBQUM7Z0JBRUgsT0FBTyxtQkFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBRTVCLENBQUMsQ0FBQSxDQUFDLENBQUM7WUFFSCxNQUFNLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUUxQixhQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXRDLENBQUM7S0FBQSxDQUFDLENBQUM7QUFHUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcbmltcG9ydCB7U3luY1F1ZXVlfSBmcm9tICcuL1N5bmNRdWV1ZSc7XG5pbXBvcnQge0Fib3J0YWJsZX0gZnJvbSAnLi9BYm9ydGFibGUnO1xuaW1wb3J0IHtTeW5jUHJvZ3Jlc3NMaXN0ZW5lcn0gZnJvbSAnLi9TeW5jUHJvZ3Jlc3NMaXN0ZW5lcic7XG5pbXBvcnQge09wdGlvbmFsfSBmcm9tICcuLi8uLi8uLi91dGlsL3RzL09wdGlvbmFsJztcblxuXG5kZXNjcmliZSgnU3luY1F1ZXVlVGVzdCcsIGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgYWJvcnRhYmxlOiBBYm9ydGFibGUgPSB7XG4gICAgICAgIGFib3J0ZWQ6IGZhbHNlXG4gICAgfTtcblxuICAgIGNvbnN0IHN5bmNQcm9ncmVzc0xpc3RlbmVyOiBTeW5jUHJvZ3Jlc3NMaXN0ZW5lciA9IHN5bmNQcm9ncmVzcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHN5bmNQcm9ncmVzcyk7XG4gICAgfTtcblxuICAgIGNvbnN0IHN5bmNRdWV1ZSA9IG5ldyBTeW5jUXVldWUoYWJvcnRhYmxlLCBzeW5jUHJvZ3Jlc3NMaXN0ZW5lcik7XG5cbiAgICBpdChcImJhc2ljIHRlc3RcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdHM6IG51bWJlcltdID0gW107XG5cbiAgICAgICAgc3luY1F1ZXVlLmFkZChhc3luYygpID0+IHtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaCgwKTtcbiAgICAgICAgICAgIHJldHVybiBPcHRpb25hbC5lbXB0eSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCBzeW5jUXVldWUuZXhlY3V0ZSgpO1xuXG4gICAgICAgIGFzc2VydC5kZWVwRXF1YWwocmVzdWx0cywgWzBdKTtcblxuICAgIH0pO1xuXG5cbiAgICBpdChcIndpdGggb25lIGxldmVsIG9mIGdlbmVyYXRvcnNcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdHM6IG51bWJlcltdID0gW107XG5cbiAgICAgICAgc3luY1F1ZXVlLmFkZChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICByZXN1bHRzLnB1c2goMCk7XG5cbiAgICAgICAgICAgIHN5bmNRdWV1ZS5hZGQoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCgxKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gT3B0aW9uYWwuZW1wdHkoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gT3B0aW9uYWwuZW1wdHkoKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCBzeW5jUXVldWUuZXhlY3V0ZSgpO1xuXG4gICAgICAgIGFzc2VydC5kZWVwRXF1YWwocmVzdWx0cywgWzAsIDFdKTtcblxuICAgIH0pO1xuXG5cbn0pO1xuIl19