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
const Logger_1 = require("../logger/Logger");
const AnkiSyncEngine_1 = require("../apps/sync/framework/anki/AnkiSyncEngine");
const RendererAnalytics_1 = require("../ga/RendererAnalytics");
const log = Logger_1.Logger.create();
class DocRepoAnkiSyncController {
    constructor(persistenceLayerProvider, syncBarProgress) {
        this.persistenceLayerProvider = persistenceLayerProvider;
        this.syncBarProgress = syncBarProgress;
    }
    start() {
        window.addEventListener("message", event => this.onMessageReceived(event), false);
    }
    onMessageReceived(event) {
        log.info("Received message: ", event);
        const triggerEvent = event.data;
        switch (event.data.type) {
            case "start-anki-sync":
                this.onStartSync()
                    .catch(err => log.error("Failed to start sync: ", err));
                break;
        }
        log.info("started");
    }
    onStartSync() {
        return __awaiter(this, void 0, void 0, function* () {
            RendererAnalytics_1.RendererAnalytics.event({ category: 'anki', action: 'sync-started' });
            let nrTasks = 0;
            let nrFailedTasks = 0;
            const syncProgressListener = syncProgress => {
                log.info("Sync progress: ", syncProgress);
                syncProgress.taskResult.map(taskResult => ++nrTasks);
                syncProgress.taskResult
                    .filter(taskResult => taskResult.failed === true)
                    .map(taskResult => ++nrFailedTasks);
                let message;
                syncProgress.taskResult.when(taskResult => {
                    message = taskResult.message;
                });
                this.syncBarProgress.dispatchEvent({
                    task: 'anki-sync',
                    message,
                    percentage: syncProgress.percentage
                });
            };
            const ankiSyncEngine = new AnkiSyncEngine_1.AnkiSyncEngine();
            const persistenceLayer = this.persistenceLayerProvider.get();
            const docMetaFiles = yield persistenceLayer.getDocMetaRefs();
            const docMetaSuppliers = docMetaFiles.map(docMetaFile => {
                return () => __awaiter(this, void 0, void 0, function* () {
                    log.info("Reading docMeta for anki sync: " + docMetaFile.fingerprint);
                    return (yield persistenceLayer.getDocMeta(docMetaFile.fingerprint));
                });
            });
            const pendingSyncJob = yield ankiSyncEngine.sync(docMetaSuppliers, syncProgressListener);
            this.syncBarProgress.dispatchEvent({
                task: 'anki-sync',
                message: "Starting anki sync...",
                percentage: 0
            });
            yield pendingSyncJob.start();
            this.syncBarProgress.dispatchEvent({
                task: 'anki-sync',
                message: `Anki sync complete. Completed ${nrTasks} with ${nrFailedTasks} failures.`,
                percentage: 100
            });
            RendererAnalytics_1.RendererAnalytics.event({ category: 'anki', action: 'sync-completed-' + nrTasks });
            RendererAnalytics_1.RendererAnalytics.event({ category: 'anki', action: 'sync-failed-' + nrFailedTasks });
        });
    }
}
exports.DocRepoAnkiSyncController = DocRepoAnkiSyncController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jUmVwb0Fua2lTeW5jQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRvY1JlcG9BbmtpU3luY0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDZDQUF3QztBQUt4QywrRUFBMEU7QUFHMUUsK0RBQTBEO0FBRTFELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLHlCQUF5QjtJQUtsQyxZQUFZLHdCQUFxRCxFQUFFLGVBQWtEO1FBQ2pILElBQUksQ0FBQyx3QkFBd0IsR0FBRyx3QkFBd0IsQ0FBQztRQUN6RCxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztJQUMzQyxDQUFDO0lBRU0sS0FBSztRQUNSLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdEYsQ0FBQztJQUVPLGlCQUFpQixDQUFDLEtBQVU7UUFFaEMsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV0QyxNQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBRWhDLFFBQVEsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFFckIsS0FBSyxpQkFBaUI7Z0JBQ2xCLElBQUksQ0FBQyxXQUFXLEVBQUU7cUJBQ2IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUU1RCxNQUFNO1NBRWI7UUFFRCxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRXhCLENBQUM7SUFFYSxXQUFXOztZQUVyQixxQ0FBaUIsQ0FBQyxLQUFLLENBQUMsRUFBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUMsQ0FBQyxDQUFDO1lBRXBFLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztZQUNoQixJQUFJLGFBQWEsR0FBRyxDQUFDLENBQUM7WUFFdEIsTUFBTSxvQkFBb0IsR0FBeUIsWUFBWSxDQUFDLEVBQUU7Z0JBRTlELEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsWUFBWSxDQUFDLENBQUM7Z0JBRTFDLFlBQVksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFFckQsWUFBWSxDQUFDLFVBQVU7cUJBQ2xCLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDO3FCQUNoRCxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDO2dCQUV4QyxJQUFJLE9BQTJCLENBQUM7Z0JBRWhDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO29CQUN0QyxPQUFPLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQztnQkFDakMsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUM7b0JBQy9CLElBQUksRUFBRSxXQUFXO29CQUNqQixPQUFPO29CQUNQLFVBQVUsRUFBRSxZQUFZLENBQUMsVUFBVTtpQkFDdEMsQ0FBQyxDQUFDO1lBRVAsQ0FBQyxDQUFDO1lBRUYsTUFBTSxjQUFjLEdBQUcsSUFBSSwrQkFBYyxFQUFFLENBQUM7WUFFNUMsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsR0FBRyxFQUFFLENBQUM7WUFFN0QsTUFBTSxZQUFZLEdBQUcsTUFBTSxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUU3RCxNQUFNLGdCQUFnQixHQUNoQixZQUFZLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dCQUM3QixPQUFPLEdBQVMsRUFBRTtvQkFDZCxHQUFHLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDdEUsT0FBTyxDQUFDLE1BQU0sZ0JBQWdCLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBRSxDQUFDO2dCQUN6RSxDQUFDLENBQUEsQ0FBQztZQUNOLENBQUMsQ0FBQyxDQUFDO1lBRVAsTUFBTSxjQUFjLEdBQUcsTUFBTSxjQUFjLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLG9CQUFvQixDQUFDLENBQUM7WUFFekYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUM7Z0JBQy9CLElBQUksRUFBRSxXQUFXO2dCQUNqQixPQUFPLEVBQUUsdUJBQXVCO2dCQUNoQyxVQUFVLEVBQUUsQ0FBQzthQUNoQixDQUFDLENBQUM7WUFFSCxNQUFNLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUU3QixJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQztnQkFDL0IsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLE9BQU8sRUFBRSxpQ0FBaUMsT0FBTyxTQUFTLGFBQWEsWUFBWTtnQkFDbkYsVUFBVSxFQUFFLEdBQUc7YUFDbEIsQ0FBQyxDQUFDO1lBRUgscUNBQWlCLENBQUMsS0FBSyxDQUFDLEVBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEdBQUcsT0FBTyxFQUFDLENBQUMsQ0FBQztZQUNqRixxQ0FBaUIsQ0FBQyxLQUFLLENBQUMsRUFBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxjQUFjLEdBQUcsYUFBYSxFQUFDLENBQUMsQ0FBQztRQUV4RixDQUFDO0tBQUE7Q0FFSjtBQXBHRCw4REFvR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge1N5bmNQcm9ncmVzc0xpc3RlbmVyfSBmcm9tICcuLi9hcHBzL3N5bmMvZnJhbWV3b3JrL1N5bmNQcm9ncmVzc0xpc3RlbmVyJztcbmltcG9ydCB7UGVyc2lzdGVuY2VMYXllcn0gZnJvbSAnLi4vZGF0YXN0b3JlL1BlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtJRXZlbnREaXNwYXRjaGVyfSBmcm9tICcuLi9yZWFjdG9yL1NpbXBsZVJlYWN0b3InO1xuaW1wb3J0IHtTeW5jQmFyUHJvZ3Jlc3N9IGZyb20gJy4uL3VpL3N5bmNfYmFyL1N5bmNCYXInO1xuaW1wb3J0IHtBbmtpU3luY0VuZ2luZX0gZnJvbSAnLi4vYXBwcy9zeW5jL2ZyYW1ld29yay9hbmtpL0Fua2lTeW5jRW5naW5lJztcbmltcG9ydCB7RG9jTWV0YVN1cHBsaWVyQ29sbGVjdGlvbn0gZnJvbSAnLi4vbWV0YWRhdGEvRG9jTWV0YVN1cHBsaWVyQ29sbGVjdGlvbic7XG5pbXBvcnQge0lQcm92aWRlcn0gZnJvbSAnLi4vdXRpbC9Qcm92aWRlcnMnO1xuaW1wb3J0IHtSZW5kZXJlckFuYWx5dGljc30gZnJvbSAnLi4vZ2EvUmVuZGVyZXJBbmFseXRpY3MnO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBEb2NSZXBvQW5raVN5bmNDb250cm9sbGVyIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgcGVyc2lzdGVuY2VMYXllclByb3ZpZGVyOiBJUHJvdmlkZXI8UGVyc2lzdGVuY2VMYXllcj47XG4gICAgcHJpdmF0ZSByZWFkb25seSBzeW5jQmFyUHJvZ3Jlc3M6IElFdmVudERpc3BhdGNoZXI8U3luY0JhclByb2dyZXNzPjtcblxuICAgIGNvbnN0cnVjdG9yKHBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlcjogSVByb3ZpZGVyPFBlcnNpc3RlbmNlTGF5ZXI+LCBzeW5jQmFyUHJvZ3Jlc3M6IElFdmVudERpc3BhdGNoZXI8U3luY0JhclByb2dyZXNzPikge1xuICAgICAgICB0aGlzLnBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlciA9IHBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlcjtcbiAgICAgICAgdGhpcy5zeW5jQmFyUHJvZ3Jlc3MgPSBzeW5jQmFyUHJvZ3Jlc3M7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXJ0KCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgZXZlbnQgPT4gdGhpcy5vbk1lc3NhZ2VSZWNlaXZlZChldmVudCksIGZhbHNlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uTWVzc2FnZVJlY2VpdmVkKGV2ZW50OiBhbnkpIHtcblxuICAgICAgICBsb2cuaW5mbyhcIlJlY2VpdmVkIG1lc3NhZ2U6IFwiLCBldmVudCk7XG5cbiAgICAgICAgY29uc3QgdHJpZ2dlckV2ZW50ID0gZXZlbnQuZGF0YTtcblxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmRhdGEudHlwZSkge1xuXG4gICAgICAgICAgICBjYXNlIFwic3RhcnQtYW5raS1zeW5jXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5vblN0YXJ0U3luYygpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gbG9nLmVycm9yKFwiRmFpbGVkIHRvIHN0YXJ0IHN5bmM6IFwiLCBlcnIpKTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIH1cblxuICAgICAgICBsb2cuaW5mbyhcInN0YXJ0ZWRcIik7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIG9uU3RhcnRTeW5jKCkge1xuXG4gICAgICAgIFJlbmRlcmVyQW5hbHl0aWNzLmV2ZW50KHtjYXRlZ29yeTogJ2Fua2knLCBhY3Rpb246ICdzeW5jLXN0YXJ0ZWQnfSk7XG5cbiAgICAgICAgbGV0IG5yVGFza3MgPSAwO1xuICAgICAgICBsZXQgbnJGYWlsZWRUYXNrcyA9IDA7XG5cbiAgICAgICAgY29uc3Qgc3luY1Byb2dyZXNzTGlzdGVuZXI6IFN5bmNQcm9ncmVzc0xpc3RlbmVyID0gc3luY1Byb2dyZXNzID0+IHtcblxuICAgICAgICAgICAgbG9nLmluZm8oXCJTeW5jIHByb2dyZXNzOiBcIiwgc3luY1Byb2dyZXNzKTtcblxuICAgICAgICAgICAgc3luY1Byb2dyZXNzLnRhc2tSZXN1bHQubWFwKHRhc2tSZXN1bHQgPT4gKytuclRhc2tzKTtcblxuICAgICAgICAgICAgc3luY1Byb2dyZXNzLnRhc2tSZXN1bHRcbiAgICAgICAgICAgICAgICAuZmlsdGVyKHRhc2tSZXN1bHQgPT4gdGFza1Jlc3VsdC5mYWlsZWQgPT09IHRydWUpXG4gICAgICAgICAgICAgICAgLm1hcCh0YXNrUmVzdWx0ID0+ICsrbnJGYWlsZWRUYXNrcyk7XG5cbiAgICAgICAgICAgIGxldCBtZXNzYWdlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIHN5bmNQcm9ncmVzcy50YXNrUmVzdWx0LndoZW4odGFza1Jlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IHRhc2tSZXN1bHQubWVzc2FnZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLnN5bmNCYXJQcm9ncmVzcy5kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICAgICAgICB0YXNrOiAnYW5raS1zeW5jJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2U6IHN5bmNQcm9ncmVzcy5wZXJjZW50YWdlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGFua2lTeW5jRW5naW5lID0gbmV3IEFua2lTeW5jRW5naW5lKCk7XG5cbiAgICAgICAgY29uc3QgcGVyc2lzdGVuY2VMYXllciA9IHRoaXMucGVyc2lzdGVuY2VMYXllclByb3ZpZGVyLmdldCgpO1xuXG4gICAgICAgIGNvbnN0IGRvY01ldGFGaWxlcyA9IGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXIuZ2V0RG9jTWV0YVJlZnMoKTtcblxuICAgICAgICBjb25zdCBkb2NNZXRhU3VwcGxpZXJzOiBEb2NNZXRhU3VwcGxpZXJDb2xsZWN0aW9uXG4gICAgICAgICAgICA9IGRvY01ldGFGaWxlcy5tYXAoZG9jTWV0YUZpbGUgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxvZy5pbmZvKFwiUmVhZGluZyBkb2NNZXRhIGZvciBhbmtpIHN5bmM6IFwiICsgZG9jTWV0YUZpbGUuZmluZ2VycHJpbnQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXIuZ2V0RG9jTWV0YShkb2NNZXRhRmlsZS5maW5nZXJwcmludCkpITtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcGVuZGluZ1N5bmNKb2IgPSBhd2FpdCBhbmtpU3luY0VuZ2luZS5zeW5jKGRvY01ldGFTdXBwbGllcnMsIHN5bmNQcm9ncmVzc0xpc3RlbmVyKTtcblxuICAgICAgICB0aGlzLnN5bmNCYXJQcm9ncmVzcy5kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICAgIHRhc2s6ICdhbmtpLXN5bmMnLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJTdGFydGluZyBhbmtpIHN5bmMuLi5cIixcbiAgICAgICAgICAgIHBlcmNlbnRhZ2U6IDBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgcGVuZGluZ1N5bmNKb2Iuc3RhcnQoKTtcblxuICAgICAgICB0aGlzLnN5bmNCYXJQcm9ncmVzcy5kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICAgIHRhc2s6ICdhbmtpLXN5bmMnLFxuICAgICAgICAgICAgbWVzc2FnZTogYEFua2kgc3luYyBjb21wbGV0ZS4gQ29tcGxldGVkICR7bnJUYXNrc30gd2l0aCAke25yRmFpbGVkVGFza3N9IGZhaWx1cmVzLmAsXG4gICAgICAgICAgICBwZXJjZW50YWdlOiAxMDBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgUmVuZGVyZXJBbmFseXRpY3MuZXZlbnQoe2NhdGVnb3J5OiAnYW5raScsIGFjdGlvbjogJ3N5bmMtY29tcGxldGVkLScgKyBuclRhc2tzfSk7XG4gICAgICAgIFJlbmRlcmVyQW5hbHl0aWNzLmV2ZW50KHtjYXRlZ29yeTogJ2Fua2knLCBhY3Rpb246ICdzeW5jLWZhaWxlZC0nICsgbnJGYWlsZWRUYXNrc30pO1xuXG4gICAgfVxuXG59XG4iXX0=