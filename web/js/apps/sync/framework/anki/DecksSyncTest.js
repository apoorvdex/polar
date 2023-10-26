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
const DecksSync_1 = require("./DecksSync");
const Assertions_1 = require("../../../../test/Assertions");
const DeckNamesAndIdsClient_1 = require("./clients/DeckNamesAndIdsClient");
const CreateDeckClient_1 = require("./clients/CreateDeckClient");
const SyncQueue_1 = require("../SyncQueue");
describe('DecksSync', function () {
    let decksSync;
    let abortable;
    let syncProgress;
    const syncProgressListener = _syncProgress => {
        console.log(_syncProgress);
        syncProgress = _syncProgress;
    };
    let syncQueue;
    beforeEach(function () {
        abortable = {
            aborted: false
        };
        syncQueue = new SyncQueue_1.SyncQueue(abortable, syncProgressListener);
        decksSync = new DecksSync_1.DecksSync(syncQueue);
        decksSync.createDeckClient = CreateDeckClient_1.CreateDeckClient.createMock(1);
        decksSync.deckNamesAndIdsClient = DeckNamesAndIdsClient_1.DeckNamesAndIdsClient.createMock({});
    });
    it("basic sync", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const deckDescriptors = [
                {
                    name: "Test Deck"
                }
            ];
            const createdDescriptors = decksSync.enqueue(deckDescriptors);
            yield syncQueue.execute();
            Assertions_1.assertJSON(createdDescriptors, [
                {
                    "name": "Test Deck"
                }
            ]);
            Assertions_1.assertJSON(syncProgress, {
                "percentage": 100,
                "state": "COMPLETED",
                "taskResult": {
                    "value": {
                        "message": "Creating missing deck: Test Deck"
                    }
                }
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVja3NTeW5jVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRlY2tzU3luY1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFzQztBQUV0Qyw0REFBdUQ7QUFDdkQsMkVBQXNFO0FBQ3RFLGlFQUE0RDtBQUk1RCw0Q0FBdUM7QUFHdkMsUUFBUSxDQUFDLFdBQVcsRUFBRTtJQUVsQixJQUFJLFNBQW9CLENBQUM7SUFFekIsSUFBSSxTQUFvQixDQUFDO0lBRXpCLElBQUksWUFBc0MsQ0FBQztJQUUzQyxNQUFNLG9CQUFvQixHQUF5QixhQUFhLENBQUMsRUFBRTtRQUMvRCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNCLFlBQVksR0FBRyxhQUFhLENBQUM7SUFDakMsQ0FBQyxDQUFDO0lBRUYsSUFBSSxTQUFvQixDQUFDO0lBRXpCLFVBQVUsQ0FBQztRQUVQLFNBQVMsR0FBRztZQUNSLE9BQU8sRUFBRSxLQUFLO1NBQ2pCLENBQUM7UUFFRixTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLFNBQVMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBRTNELFNBQVMsR0FBRyxJQUFJLHFCQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFckMsU0FBUyxDQUFDLGdCQUFnQixHQUFHLG1DQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RCxTQUFTLENBQUMscUJBQXFCLEdBQUcsNkNBQXFCLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRTNFLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLFlBQVksRUFBRTs7WUFFYixNQUFNLGVBQWUsR0FBcUI7Z0JBQ3RDO29CQUNJLElBQUksRUFBRSxXQUFXO2lCQUNwQjthQUNKLENBQUM7WUFFRixNQUFNLGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFOUQsTUFBTSxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFMUIsdUJBQVUsQ0FBQyxrQkFBa0IsRUFBRTtnQkFDM0I7b0JBQ0ksTUFBTSxFQUFFLFdBQVc7aUJBQ3RCO2FBQ0osQ0FBQyxDQUFDO1lBRUgsdUJBQVUsQ0FBQyxZQUFZLEVBQUU7Z0JBQ3JCLFlBQVksRUFBRSxHQUFHO2dCQUNqQixPQUFPLEVBQUUsV0FBVztnQkFDcEIsWUFBWSxFQUFFO29CQUNWLE9BQU8sRUFBRTt3QkFDTCxTQUFTLEVBQUUsa0NBQWtDO3FCQUNoRDtpQkFDSjthQUNKLENBQUMsQ0FBQztRQUVQLENBQUM7S0FBQSxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGVja3NTeW5jfSBmcm9tICcuL0RlY2tzU3luYyc7XG5pbXBvcnQge0RlY2tEZXNjcmlwdG9yfSBmcm9tICcuL0RlY2tEZXNjcmlwdG9yJztcbmltcG9ydCB7YXNzZXJ0SlNPTn0gZnJvbSAnLi4vLi4vLi4vLi4vdGVzdC9Bc3NlcnRpb25zJztcbmltcG9ydCB7RGVja05hbWVzQW5kSWRzQ2xpZW50fSBmcm9tICcuL2NsaWVudHMvRGVja05hbWVzQW5kSWRzQ2xpZW50JztcbmltcG9ydCB7Q3JlYXRlRGVja0NsaWVudH0gZnJvbSAnLi9jbGllbnRzL0NyZWF0ZURlY2tDbGllbnQnO1xuaW1wb3J0IHtBYm9ydGFibGV9IGZyb20gJy4uL0Fib3J0YWJsZSc7XG5pbXBvcnQge1N5bmNQcm9ncmVzc0xpc3RlbmVyfSBmcm9tICcuLi9TeW5jUHJvZ3Jlc3NMaXN0ZW5lcic7XG5pbXBvcnQge1N5bmNQcm9ncmVzc30gZnJvbSAnLi4vU3luY1Byb2dyZXNzJztcbmltcG9ydCB7U3luY1F1ZXVlfSBmcm9tICcuLi9TeW5jUXVldWUnO1xuXG5cbmRlc2NyaWJlKCdEZWNrc1N5bmMnLCBmdW5jdGlvbigpIHtcblxuICAgIGxldCBkZWNrc1N5bmM6IERlY2tzU3luYztcblxuICAgIGxldCBhYm9ydGFibGU6IEFib3J0YWJsZTtcblxuICAgIGxldCBzeW5jUHJvZ3Jlc3M6IFN5bmNQcm9ncmVzcyB8IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0IHN5bmNQcm9ncmVzc0xpc3RlbmVyOiBTeW5jUHJvZ3Jlc3NMaXN0ZW5lciA9IF9zeW5jUHJvZ3Jlc3MgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhfc3luY1Byb2dyZXNzKTtcbiAgICAgICAgc3luY1Byb2dyZXNzID0gX3N5bmNQcm9ncmVzcztcbiAgICB9O1xuXG4gICAgbGV0IHN5bmNRdWV1ZTogU3luY1F1ZXVlO1xuXG4gICAgYmVmb3JlRWFjaChmdW5jdGlvbigpIHtcblxuICAgICAgICBhYm9ydGFibGUgPSB7XG4gICAgICAgICAgICBhYm9ydGVkOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIHN5bmNRdWV1ZSA9IG5ldyBTeW5jUXVldWUoYWJvcnRhYmxlLCBzeW5jUHJvZ3Jlc3NMaXN0ZW5lcik7XG5cbiAgICAgICAgZGVja3NTeW5jID0gbmV3IERlY2tzU3luYyhzeW5jUXVldWUpO1xuXG4gICAgICAgIGRlY2tzU3luYy5jcmVhdGVEZWNrQ2xpZW50ID0gQ3JlYXRlRGVja0NsaWVudC5jcmVhdGVNb2NrKDEpO1xuICAgICAgICBkZWNrc1N5bmMuZGVja05hbWVzQW5kSWRzQ2xpZW50ID0gRGVja05hbWVzQW5kSWRzQ2xpZW50LmNyZWF0ZU1vY2soe30pO1xuXG4gICAgfSk7XG5cbiAgICBpdChcImJhc2ljIHN5bmNcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgY29uc3QgZGVja0Rlc2NyaXB0b3JzOiBEZWNrRGVzY3JpcHRvcltdID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiVGVzdCBEZWNrXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcblxuICAgICAgICBjb25zdCBjcmVhdGVkRGVzY3JpcHRvcnMgPSBkZWNrc1N5bmMuZW5xdWV1ZShkZWNrRGVzY3JpcHRvcnMpO1xuXG4gICAgICAgIGF3YWl0IHN5bmNRdWV1ZS5leGVjdXRlKCk7XG5cbiAgICAgICAgYXNzZXJ0SlNPTihjcmVhdGVkRGVzY3JpcHRvcnMsIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJUZXN0IERlY2tcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdKTtcblxuICAgICAgICBhc3NlcnRKU09OKHN5bmNQcm9ncmVzcywge1xuICAgICAgICAgICAgXCJwZXJjZW50YWdlXCI6IDEwMCxcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJDT01QTEVURURcIixcbiAgICAgICAgICAgIFwidGFza1Jlc3VsdFwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwibWVzc2FnZVwiOiBcIkNyZWF0aW5nIG1pc3NpbmcgZGVjazogVGVzdCBEZWNrXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbn0pO1xuIl19