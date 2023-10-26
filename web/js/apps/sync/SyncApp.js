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
const AnkiSyncEngine_1 = require("./framework/anki/AnkiSyncEngine");
const DocMetaSet_1 = require("../../metadata/DocMetaSet");
const Logger_1 = require("../../logger/Logger");
const DefaultPersistenceLayer_1 = require("../../datastore/DefaultPersistenceLayer");
const DiskDatastore_1 = require("../../datastore/DiskDatastore");
const ProgressLog_1 = require("../../ui/progress_log/ProgressLog");
const log = Logger_1.Logger.create();
class SyncApp {
    constructor() {
        this.progressLog = new ProgressLog_1.ProgressLog();
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = new URL(window.location.href);
            let fingerprint = url.searchParams.get("fingerprint");
            if (!fingerprint) {
                fingerprint = '110dd61fd57444010b1ab5ff38782f0f';
            }
            const ankiSyncEngine = new AnkiSyncEngine_1.AnkiSyncEngine();
            const datastore = new DiskDatastore_1.DiskDatastore();
            yield datastore.init();
            const persistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(datastore);
            yield persistenceLayer.init();
            const docMeta = yield persistenceLayer.getDocMeta(fingerprint);
            if (!docMeta) {
                throw new Error("No DocMeta for fingerprint: " + fingerprint);
            }
            log.info("Syncing document with title: ", docMeta.docInfo.title);
            const docMetaSet = new DocMetaSet_1.DocMetaSet(docMeta);
            const syncProgressListener = syncProgress => {
                log.info("Sync progress: ", syncProgress);
                let message;
                syncProgress.taskResult.when(taskResult => {
                    message = taskResult.message;
                });
                this.progressLog.update({
                    percentage: syncProgress.percentage,
                    message
                });
            };
        });
    }
}
exports.SyncApp = SyncApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3luY0FwcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlN5bmNBcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLG9FQUErRDtBQUMvRCwwREFBcUQ7QUFFckQsZ0RBQTJDO0FBQzNDLHFGQUFnRjtBQUNoRixpRUFBNEQ7QUFDNUQsbUVBQThEO0FBRTlELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLE9BQU87SUFBcEI7UUFFWSxnQkFBVyxHQUFnQixJQUFJLHlCQUFXLEVBQUUsQ0FBQztJQXlEekQsQ0FBQztJQXZEZ0IsS0FBSzs7WUFFZCxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTFDLElBQUksV0FBVyxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBRXRELElBQUksQ0FBRSxXQUFXLEVBQUU7Z0JBRWYsV0FBVyxHQUFHLGtDQUFrQyxDQUFDO2FBQ3BEO1lBRUQsTUFBTSxjQUFjLEdBQUcsSUFBSSwrQkFBYyxFQUFFLENBQUM7WUFFNUMsTUFBTSxTQUFTLEdBQUcsSUFBSSw2QkFBYSxFQUFFLENBQUM7WUFFdEMsTUFBTSxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFdkIsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLGlEQUF1QixDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRWhFLE1BQU0sZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFOUIsTUFBTSxPQUFPLEdBQUcsTUFBTSxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFL0QsSUFBSSxDQUFFLE9BQU8sRUFBRTtnQkFDWCxNQUFNLElBQUksS0FBSyxDQUFDLDhCQUE4QixHQUFHLFdBQVcsQ0FBQyxDQUFDO2FBQ2pFO1lBRUQsR0FBRyxDQUFDLElBQUksQ0FBQywrQkFBK0IsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRWpFLE1BQU0sVUFBVSxHQUFHLElBQUksdUJBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUUzQyxNQUFNLG9CQUFvQixHQUF5QixZQUFZLENBQUMsRUFBRTtnQkFDOUQsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxZQUFZLENBQUMsQ0FBQztnQkFFMUMsSUFBSSxPQUEyQixDQUFDO2dCQUVoQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtvQkFDdEMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUM7Z0JBQ2pDLENBQUMsQ0FBQyxDQUFDO2dCQUVILElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO29CQUNwQixVQUFVLEVBQUUsWUFBWSxDQUFDLFVBQVU7b0JBQ25DLE9BQU87aUJBQ1YsQ0FBQyxDQUFDO1lBRVAsQ0FBQyxDQUFDO1FBUU4sQ0FBQztLQUFBO0NBRUo7QUEzREQsMEJBMkRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBbmtpU3luY0VuZ2luZX0gZnJvbSAnLi9mcmFtZXdvcmsvYW5raS9BbmtpU3luY0VuZ2luZSc7XG5pbXBvcnQge0RvY01ldGFTZXR9IGZyb20gJy4uLy4uL21ldGFkYXRhL0RvY01ldGFTZXQnO1xuaW1wb3J0IHtTeW5jUHJvZ3Jlc3NMaXN0ZW5lcn0gZnJvbSAnLi9mcmFtZXdvcmsvU3luY1Byb2dyZXNzTGlzdGVuZXInO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uLy4uL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtEZWZhdWx0UGVyc2lzdGVuY2VMYXllcn0gZnJvbSAnLi4vLi4vZGF0YXN0b3JlL0RlZmF1bHRQZXJzaXN0ZW5jZUxheWVyJztcbmltcG9ydCB7RGlza0RhdGFzdG9yZX0gZnJvbSAnLi4vLi4vZGF0YXN0b3JlL0Rpc2tEYXRhc3RvcmUnO1xuaW1wb3J0IHtQcm9ncmVzc0xvZ30gZnJvbSAnLi4vLi4vdWkvcHJvZ3Jlc3NfbG9nL1Byb2dyZXNzTG9nJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgY2xhc3MgU3luY0FwcCB7XG5cbiAgICBwcml2YXRlIHByb2dyZXNzTG9nOiBQcm9ncmVzc0xvZyA9IG5ldyBQcm9ncmVzc0xvZygpO1xuXG4gICAgcHVibGljIGFzeW5jIHN0YXJ0KCkge1xuXG4gICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgICAgIGxldCBmaW5nZXJwcmludCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwiZmluZ2VycHJpbnRcIik7XG5cbiAgICAgICAgaWYgKCEgZmluZ2VycHJpbnQpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IGZvciBub3cganVzdCBzeW5jIHRoZSBkZWZhdWx0IC8gZXhhbXBsZSBkb2N1bWVudCBmb3IgdGVzdGluZ1xuICAgICAgICAgICAgZmluZ2VycHJpbnQgPSAnMTEwZGQ2MWZkNTc0NDQwMTBiMWFiNWZmMzg3ODJmMGYnO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYW5raVN5bmNFbmdpbmUgPSBuZXcgQW5raVN5bmNFbmdpbmUoKTtcblxuICAgICAgICBjb25zdCBkYXRhc3RvcmUgPSBuZXcgRGlza0RhdGFzdG9yZSgpO1xuXG4gICAgICAgIGF3YWl0IGRhdGFzdG9yZS5pbml0KCk7XG5cbiAgICAgICAgY29uc3QgcGVyc2lzdGVuY2VMYXllciA9IG5ldyBEZWZhdWx0UGVyc2lzdGVuY2VMYXllcihkYXRhc3RvcmUpO1xuXG4gICAgICAgIGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXIuaW5pdCgpO1xuXG4gICAgICAgIGNvbnN0IGRvY01ldGEgPSBhd2FpdCBwZXJzaXN0ZW5jZUxheWVyLmdldERvY01ldGEoZmluZ2VycHJpbnQpO1xuXG4gICAgICAgIGlmICghIGRvY01ldGEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIERvY01ldGEgZm9yIGZpbmdlcnByaW50OiBcIiArIGZpbmdlcnByaW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvZy5pbmZvKFwiU3luY2luZyBkb2N1bWVudCB3aXRoIHRpdGxlOiBcIiwgZG9jTWV0YS5kb2NJbmZvLnRpdGxlKTtcblxuICAgICAgICBjb25zdCBkb2NNZXRhU2V0ID0gbmV3IERvY01ldGFTZXQoZG9jTWV0YSk7XG5cbiAgICAgICAgY29uc3Qgc3luY1Byb2dyZXNzTGlzdGVuZXI6IFN5bmNQcm9ncmVzc0xpc3RlbmVyID0gc3luY1Byb2dyZXNzID0+IHtcbiAgICAgICAgICAgIGxvZy5pbmZvKFwiU3luYyBwcm9ncmVzczogXCIsIHN5bmNQcm9ncmVzcyk7XG5cbiAgICAgICAgICAgIGxldCBtZXNzYWdlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIHN5bmNQcm9ncmVzcy50YXNrUmVzdWx0LndoZW4odGFza1Jlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IHRhc2tSZXN1bHQubWVzc2FnZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzTG9nLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgcGVyY2VudGFnZTogc3luY1Byb2dyZXNzLnBlcmNlbnRhZ2UsXG4gICAgICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBjb25zdCBwZW5kaW5nU3luY0pvYiA9IGFua2lTeW5jRW5naW5lLnN5bmMoZG9jTWV0YVNldCwgc3luY1Byb2dyZXNzTGlzdGVuZXIpO1xuICAgICAgICAvL1xuICAgICAgICAvLyBhd2FpdCBwZW5kaW5nU3luY0pvYi5zdGFydCgpO1xuICAgICAgICAvL1xuICAgICAgICAvLyB0aGlzLnByb2dyZXNzTG9nLnVwZGF0ZSh7IHBlcmNlbnRhZ2U6IDEwMCwgbWVzc2FnZTogJ1N5bmMgY29tcGxldGUnIH0pO1xuXG4gICAgfVxuXG59XG4iXX0=