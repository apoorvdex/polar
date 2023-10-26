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
const Assertions_1 = require("../../../../test/Assertions");
const NotesSync_1 = require("./NotesSync");
const AddNoteClient_1 = require("./clients/AddNoteClient");
const FindNotesClient_1 = require("./clients/FindNotesClient");
const SyncQueue_1 = require("../SyncQueue");
const StoreMediaFileClient_1 = require("./clients/StoreMediaFileClient");
const CanAddNotesClient_1 = require("./clients/CanAddNotesClient");
describe('NotesSync', function () {
    let notesSync;
    let abortable;
    let syncProgress;
    const syncProgressListener = _syncProgress => {
        console.log(syncProgress);
        syncProgress = _syncProgress;
    };
    let syncQueue;
    beforeEach(function () {
        abortable = {
            aborted: false
        };
        syncQueue = new SyncQueue_1.SyncQueue(abortable, syncProgressListener);
        notesSync = new NotesSync_1.NotesSync(syncQueue);
    });
    it("full initial sync", function () {
        return __awaiter(this, void 0, void 0, function* () {
            notesSync.addNoteClient = AddNoteClient_1.AddNoteClient.createMock(1);
            notesSync.canAddNotesClient = CanAddNotesClient_1.CanAddNotesClient.createMock([true]);
            notesSync.storeMediaFileClient = StoreMediaFileClient_1.StoreMediaFileClient.createMock();
            notesSync.findNotesClient = FindNotesClient_1.FindNotesClient.createMock([]);
            const noteDescriptors = [
                {
                    guid: "101",
                    deckName: "test",
                    modelName: "test",
                    fields: {},
                    tags: []
                }
            ];
            const notesSynchronized = notesSync.enqueue(noteDescriptors);
            yield syncQueue.execute();
            Assertions_1.assertJSON(notesSynchronized.created, noteDescriptors);
        });
    });
    it("sync with pre-existing notes that are skipped", function () {
        return __awaiter(this, void 0, void 0, function* () {
            notesSync.addNoteClient = AddNoteClient_1.AddNoteClient.createMock(1);
            notesSync.findNotesClient = FindNotesClient_1.FindNotesClient.createMock([1]);
            const noteDescriptors = [
                {
                    guid: "101",
                    deckName: "test",
                    modelName: "test",
                    fields: {},
                    tags: []
                }
            ];
            const notesSynchronized = notesSync.enqueue(noteDescriptors);
            yield syncQueue.execute();
            Assertions_1.assertJSON(notesSynchronized.created, []);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90ZXNTeW5jVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk5vdGVzU3luY1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDREQUF1RDtBQUN2RCwyQ0FBc0M7QUFFdEMsMkRBQXNEO0FBQ3RELCtEQUEwRDtBQUkxRCw0Q0FBdUM7QUFDdkMseUVBQW9FO0FBQ3BFLG1FQUE4RDtBQUU5RCxRQUFRLENBQUMsV0FBVyxFQUFFO0lBRWxCLElBQUksU0FBb0IsQ0FBQztJQUV6QixJQUFJLFNBQW9CLENBQUM7SUFFekIsSUFBSSxZQUFzQyxDQUFDO0lBRTNDLE1BQU0sb0JBQW9CLEdBQXlCLGFBQWEsQ0FBQyxFQUFFO1FBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUIsWUFBWSxHQUFHLGFBQWEsQ0FBQztJQUNqQyxDQUFDLENBQUM7SUFFRixJQUFJLFNBQW9CLENBQUM7SUFFekIsVUFBVSxDQUFDO1FBRVAsU0FBUyxHQUFHO1lBQ1IsT0FBTyxFQUFFLEtBQUs7U0FDakIsQ0FBQztRQUVGLFNBQVMsR0FBRyxJQUFJLHFCQUFTLENBQUMsU0FBUyxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFFM0QsU0FBUyxHQUFHLElBQUkscUJBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUV6QyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxtQkFBbUIsRUFBRTs7WUFLcEIsU0FBUyxDQUFDLGFBQWEsR0FBRyw2QkFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0RCxTQUFTLENBQUMsaUJBQWlCLEdBQUcscUNBQWlCLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNuRSxTQUFTLENBQUMsb0JBQW9CLEdBQUcsMkNBQW9CLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbkUsU0FBUyxDQUFDLGVBQWUsR0FBRyxpQ0FBZSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUUzRCxNQUFNLGVBQWUsR0FBcUI7Z0JBQ3RDO29CQUNJLElBQUksRUFBRSxLQUFLO29CQUNYLFFBQVEsRUFBRSxNQUFNO29CQUNoQixTQUFTLEVBQUUsTUFBTTtvQkFDakIsTUFBTSxFQUFFLEVBQUU7b0JBQ1YsSUFBSSxFQUFFLEVBQUU7aUJBQ1g7YUFDSixDQUFDO1lBRUYsTUFBTSxpQkFBaUIsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBRTdELE1BQU0sU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBRTFCLHVCQUFVLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBRTNELENBQUM7S0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsK0NBQStDLEVBQUU7O1lBS2hELFNBQVMsQ0FBQyxhQUFhLEdBQUcsNkJBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEQsU0FBUyxDQUFDLGVBQWUsR0FBRyxpQ0FBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFNUQsTUFBTSxlQUFlLEdBQXFCO2dCQUN0QztvQkFDSSxJQUFJLEVBQUUsS0FBSztvQkFDWCxRQUFRLEVBQUUsTUFBTTtvQkFDaEIsU0FBUyxFQUFFLE1BQU07b0JBQ2pCLE1BQU0sRUFBRSxFQUFFO29CQUNWLElBQUksRUFBRSxFQUFFO2lCQUNYO2FBQ0osQ0FBQztZQUVGLE1BQU0saUJBQWlCLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUU3RCxNQUFNLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUUxQix1QkFBVSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUU5QyxDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Fzc2VydEpTT059IGZyb20gJy4uLy4uLy4uLy4uL3Rlc3QvQXNzZXJ0aW9ucyc7XG5pbXBvcnQge05vdGVzU3luY30gZnJvbSAnLi9Ob3Rlc1N5bmMnO1xuaW1wb3J0IHtOb3RlRGVzY3JpcHRvcn0gZnJvbSAnLi9Ob3RlRGVzY3JpcHRvcic7XG5pbXBvcnQge0FkZE5vdGVDbGllbnR9IGZyb20gJy4vY2xpZW50cy9BZGROb3RlQ2xpZW50JztcbmltcG9ydCB7RmluZE5vdGVzQ2xpZW50fSBmcm9tICcuL2NsaWVudHMvRmluZE5vdGVzQ2xpZW50JztcbmltcG9ydCB7QWJvcnRhYmxlfSBmcm9tICcuLi9BYm9ydGFibGUnO1xuaW1wb3J0IHtTeW5jUHJvZ3Jlc3N9IGZyb20gJy4uL1N5bmNQcm9ncmVzcyc7XG5pbXBvcnQge1N5bmNQcm9ncmVzc0xpc3RlbmVyfSBmcm9tICcuLi9TeW5jUHJvZ3Jlc3NMaXN0ZW5lcic7XG5pbXBvcnQge1N5bmNRdWV1ZX0gZnJvbSAnLi4vU3luY1F1ZXVlJztcbmltcG9ydCB7U3RvcmVNZWRpYUZpbGVDbGllbnR9IGZyb20gJy4vY2xpZW50cy9TdG9yZU1lZGlhRmlsZUNsaWVudCc7XG5pbXBvcnQge0NhbkFkZE5vdGVzQ2xpZW50fSBmcm9tICcuL2NsaWVudHMvQ2FuQWRkTm90ZXNDbGllbnQnO1xuXG5kZXNjcmliZSgnTm90ZXNTeW5jJywgZnVuY3Rpb24oKSB7XG5cbiAgICBsZXQgbm90ZXNTeW5jOiBOb3Rlc1N5bmM7XG5cbiAgICBsZXQgYWJvcnRhYmxlOiBBYm9ydGFibGU7XG5cbiAgICBsZXQgc3luY1Byb2dyZXNzOiBTeW5jUHJvZ3Jlc3MgfCB1bmRlZmluZWQ7XG5cbiAgICBjb25zdCBzeW5jUHJvZ3Jlc3NMaXN0ZW5lcjogU3luY1Byb2dyZXNzTGlzdGVuZXIgPSBfc3luY1Byb2dyZXNzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coc3luY1Byb2dyZXNzKTtcbiAgICAgICAgc3luY1Byb2dyZXNzID0gX3N5bmNQcm9ncmVzcztcbiAgICB9O1xuXG4gICAgbGV0IHN5bmNRdWV1ZTogU3luY1F1ZXVlO1xuXG4gICAgYmVmb3JlRWFjaChmdW5jdGlvbigpIHtcblxuICAgICAgICBhYm9ydGFibGUgPSB7XG4gICAgICAgICAgICBhYm9ydGVkOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIHN5bmNRdWV1ZSA9IG5ldyBTeW5jUXVldWUoYWJvcnRhYmxlLCBzeW5jUHJvZ3Jlc3NMaXN0ZW5lcik7XG5cbiAgICAgICAgbm90ZXNTeW5jID0gbmV3IE5vdGVzU3luYyhzeW5jUXVldWUpO1xuXG4gICAgfSk7XG5cbiAgICBpdChcImZ1bGwgaW5pdGlhbCBzeW5jXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIC8vICoqKipcbiAgICAgICAgLy8gY3JlYXRlIG1vY2tzIHdoZXJlIHdlIGhhdmUgbm8gaW5pdGlhbCBub3RlcywgYW5kIHdlIGFsbG93XG4gICAgICAgIC8vIGEgbmV3IG5vdGUgdG8gYmUgY3JlYXRlZC5cbiAgICAgICAgbm90ZXNTeW5jLmFkZE5vdGVDbGllbnQgPSBBZGROb3RlQ2xpZW50LmNyZWF0ZU1vY2soMSk7XG4gICAgICAgIG5vdGVzU3luYy5jYW5BZGROb3Rlc0NsaWVudCA9IENhbkFkZE5vdGVzQ2xpZW50LmNyZWF0ZU1vY2soW3RydWVdKTtcbiAgICAgICAgbm90ZXNTeW5jLnN0b3JlTWVkaWFGaWxlQ2xpZW50ID0gU3RvcmVNZWRpYUZpbGVDbGllbnQuY3JlYXRlTW9jaygpO1xuICAgICAgICBub3Rlc1N5bmMuZmluZE5vdGVzQ2xpZW50ID0gRmluZE5vdGVzQ2xpZW50LmNyZWF0ZU1vY2soW10pO1xuXG4gICAgICAgIGNvbnN0IG5vdGVEZXNjcmlwdG9yczogTm90ZURlc2NyaXB0b3JbXSA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBndWlkOiBcIjEwMVwiLFxuICAgICAgICAgICAgICAgIGRlY2tOYW1lOiBcInRlc3RcIixcbiAgICAgICAgICAgICAgICBtb2RlbE5hbWU6IFwidGVzdFwiLFxuICAgICAgICAgICAgICAgIGZpZWxkczoge30sXG4gICAgICAgICAgICAgICAgdGFnczogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcblxuICAgICAgICBjb25zdCBub3Rlc1N5bmNocm9uaXplZCA9IG5vdGVzU3luYy5lbnF1ZXVlKG5vdGVEZXNjcmlwdG9ycyk7XG5cbiAgICAgICAgYXdhaXQgc3luY1F1ZXVlLmV4ZWN1dGUoKTtcblxuICAgICAgICBhc3NlcnRKU09OKG5vdGVzU3luY2hyb25pemVkLmNyZWF0ZWQsIG5vdGVEZXNjcmlwdG9ycyk7XG5cbiAgICB9KTtcblxuICAgIGl0KFwic3luYyB3aXRoIHByZS1leGlzdGluZyBub3RlcyB0aGF0IGFyZSBza2lwcGVkXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIC8vICoqKipcbiAgICAgICAgLy8gY3JlYXRlIG1vY2tzIHdoZXJlIHdlIGhhdmUgbm8gaW5pdGlhbCBub3RlcywgYW5kIHdlIGFsbG93XG4gICAgICAgIC8vIGEgbmV3IG5vdGUgdG8gYmUgY3JlYXRlZC5cbiAgICAgICAgbm90ZXNTeW5jLmFkZE5vdGVDbGllbnQgPSBBZGROb3RlQ2xpZW50LmNyZWF0ZU1vY2soMSk7XG4gICAgICAgIG5vdGVzU3luYy5maW5kTm90ZXNDbGllbnQgPSBGaW5kTm90ZXNDbGllbnQuY3JlYXRlTW9jayhbMV0pO1xuXG4gICAgICAgIGNvbnN0IG5vdGVEZXNjcmlwdG9yczogTm90ZURlc2NyaXB0b3JbXSA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBndWlkOiBcIjEwMVwiLFxuICAgICAgICAgICAgICAgIGRlY2tOYW1lOiBcInRlc3RcIixcbiAgICAgICAgICAgICAgICBtb2RlbE5hbWU6IFwidGVzdFwiLFxuICAgICAgICAgICAgICAgIGZpZWxkczoge30sXG4gICAgICAgICAgICAgICAgdGFnczogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcblxuICAgICAgICBjb25zdCBub3Rlc1N5bmNocm9uaXplZCA9IG5vdGVzU3luYy5lbnF1ZXVlKG5vdGVEZXNjcmlwdG9ycyk7XG5cbiAgICAgICAgYXdhaXQgc3luY1F1ZXVlLmV4ZWN1dGUoKTtcblxuICAgICAgICBhc3NlcnRKU09OKG5vdGVzU3luY2hyb25pemVkLmNyZWF0ZWQsIFtdKTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==