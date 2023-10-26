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
const SyncQueue_1 = require("../SyncQueue");
const NotesSync_1 = require("./NotesSync");
const Logger_1 = require("../../../../logger/Logger");
const log = Logger_1.Logger.create();
class AnkiSyncJob {
    constructor(syncProgressListener, deckDescriptors, noteDescriptors) {
        this.syncProgressListener = syncProgressListener;
        this.deckDescriptors = deckDescriptors;
        this.noteDescriptors = noteDescriptors;
    }
}
class PendingAnkiSyncJob extends AnkiSyncJob {
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            const startedAnkiSyncJob = new StartedAnkiSyncJob(this.syncProgressListener, this.deckDescriptors, this.noteDescriptors);
            return startedAnkiSyncJob.run();
        });
    }
}
exports.PendingAnkiSyncJob = PendingAnkiSyncJob;
class StartedAnkiSyncJob extends AnkiSyncJob {
    constructor() {
        super(...arguments);
        this.aborted = false;
    }
    abort() {
        this.aborted = true;
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const syncQueue = new SyncQueue_1.SyncQueue(this, this.syncProgressListener);
            const decksSync = new DecksSync_1.DecksSync(syncQueue);
            log.info("Starting anki sync job with deckDescriptors: ", this.deckDescriptors);
            decksSync.enqueue(this.deckDescriptors);
            const notesSync = new NotesSync_1.NotesSync(syncQueue);
            notesSync.enqueue(this.noteDescriptors);
            yield syncQueue.execute();
            return this;
        });
    }
}
exports.StartedAnkiSyncJob = StartedAnkiSyncJob;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5raVN5bmNKb2IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBbmtpU3luY0pvYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBSUEsMkNBQXNDO0FBQ3RDLDRDQUF1QztBQUN2QywyQ0FBc0M7QUFDdEMsc0RBQWlEO0FBRWpELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFlLFdBQVc7SUFNdEIsWUFBbUIsb0JBQTBDLEVBQzFDLGVBQWlDLEVBQ2pDLGVBQWlDO1FBRWhELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxvQkFBb0IsQ0FBQztRQUNqRCxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztRQUN2QyxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztJQUUzQyxDQUFDO0NBRUo7QUFFRCxNQUFhLGtCQUFtQixTQUFRLFdBQVc7SUFFbEMsS0FBSzs7WUFFZCxNQUFNLGtCQUFrQixHQUFHLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUN6QixJQUFJLENBQUMsZUFBZSxFQUNwQixJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDeEUsT0FBTyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUVwQyxDQUFDO0tBQUE7Q0FFSjtBQVhELGdEQVdDO0FBRUQsTUFBYSxrQkFBbUIsU0FBUSxXQUFXO0lBQW5EOztRQUVXLFlBQU8sR0FBRyxLQUFLLENBQUM7SUEwQjNCLENBQUM7SUF4QlUsS0FBSztRQUNSLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFFWSxHQUFHOztZQUVaLE1BQU0sU0FBUyxHQUFHLElBQUkscUJBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFFakUsTUFBTSxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRTNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsK0NBQStDLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFBO1lBRS9FLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBRXhDLE1BQU0sU0FBUyxHQUFHLElBQUkscUJBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUUzQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUV4QyxNQUFNLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUUxQixPQUFPLElBQUksQ0FBQztRQUVoQixDQUFDO0tBQUE7Q0FFSjtBQTVCRCxnREE0QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1N5bmNQcm9ncmVzc0xpc3RlbmVyfSBmcm9tICcuLi9TeW5jUHJvZ3Jlc3NMaXN0ZW5lcic7XG5pbXBvcnQge1BlbmRpbmdTeW5jSm9iLCBTdGFydGVkU3luY0pvYn0gZnJvbSAnLi4vU3luY0pvYic7XG5pbXBvcnQge0RlY2tEZXNjcmlwdG9yfSBmcm9tICcuL0RlY2tEZXNjcmlwdG9yJztcbmltcG9ydCB7Tm90ZURlc2NyaXB0b3J9IGZyb20gJy4vTm90ZURlc2NyaXB0b3InO1xuaW1wb3J0IHtEZWNrc1N5bmN9IGZyb20gJy4vRGVja3NTeW5jJztcbmltcG9ydCB7U3luY1F1ZXVlfSBmcm9tICcuLi9TeW5jUXVldWUnO1xuaW1wb3J0IHtOb3Rlc1N5bmN9IGZyb20gJy4vTm90ZXNTeW5jJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi8uLi8uLi9sb2dnZXIvTG9nZ2VyJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5hYnN0cmFjdCBjbGFzcyBBbmtpU3luY0pvYiB7XG5cbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgc3luY1Byb2dyZXNzTGlzdGVuZXI6IFN5bmNQcm9ncmVzc0xpc3RlbmVyO1xuICAgIHByb3RlY3RlZCByZWFkb25seSBkZWNrRGVzY3JpcHRvcnM6IERlY2tEZXNjcmlwdG9yW107XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IG5vdGVEZXNjcmlwdG9yczogTm90ZURlc2NyaXB0b3JbXTtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzeW5jUHJvZ3Jlc3NMaXN0ZW5lcjogU3luY1Byb2dyZXNzTGlzdGVuZXIsXG4gICAgICAgICAgICAgICAgICAgICAgIGRlY2tEZXNjcmlwdG9yczogRGVja0Rlc2NyaXB0b3JbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgbm90ZURlc2NyaXB0b3JzOiBOb3RlRGVzY3JpcHRvcltdKSB7XG5cbiAgICAgICAgdGhpcy5zeW5jUHJvZ3Jlc3NMaXN0ZW5lciA9IHN5bmNQcm9ncmVzc0xpc3RlbmVyO1xuICAgICAgICB0aGlzLmRlY2tEZXNjcmlwdG9ycyA9IGRlY2tEZXNjcmlwdG9ycztcbiAgICAgICAgdGhpcy5ub3RlRGVzY3JpcHRvcnMgPSBub3RlRGVzY3JpcHRvcnM7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIFBlbmRpbmdBbmtpU3luY0pvYiBleHRlbmRzIEFua2lTeW5jSm9iIGltcGxlbWVudHMgUGVuZGluZ1N5bmNKb2Ige1xuXG4gICAgcHVibGljIGFzeW5jIHN0YXJ0KCk6IFByb21pc2U8U3RhcnRlZFN5bmNKb2I+IHtcblxuICAgICAgICBjb25zdCBzdGFydGVkQW5raVN5bmNKb2IgPSBuZXcgU3RhcnRlZEFua2lTeW5jSm9iKHRoaXMuc3luY1Byb2dyZXNzTGlzdGVuZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWNrRGVzY3JpcHRvcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RlRGVzY3JpcHRvcnMpO1xuICAgICAgICByZXR1cm4gc3RhcnRlZEFua2lTeW5jSm9iLnJ1bigpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBTdGFydGVkQW5raVN5bmNKb2IgZXh0ZW5kcyBBbmtpU3luY0pvYiBpbXBsZW1lbnRzIFN0YXJ0ZWRTeW5jSm9iIHtcblxuICAgIHB1YmxpYyBhYm9ydGVkID0gZmFsc2U7XG5cbiAgICBwdWJsaWMgYWJvcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWJvcnRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHJ1bigpOiBQcm9taXNlPHRoaXM+IHtcblxuICAgICAgICBjb25zdCBzeW5jUXVldWUgPSBuZXcgU3luY1F1ZXVlKHRoaXMsIHRoaXMuc3luY1Byb2dyZXNzTGlzdGVuZXIpO1xuXG4gICAgICAgIGNvbnN0IGRlY2tzU3luYyA9IG5ldyBEZWNrc1N5bmMoc3luY1F1ZXVlKTtcblxuICAgICAgICBsb2cuaW5mbyhcIlN0YXJ0aW5nIGFua2kgc3luYyBqb2Igd2l0aCBkZWNrRGVzY3JpcHRvcnM6IFwiLCB0aGlzLmRlY2tEZXNjcmlwdG9ycylcblxuICAgICAgICBkZWNrc1N5bmMuZW5xdWV1ZSh0aGlzLmRlY2tEZXNjcmlwdG9ycyk7XG5cbiAgICAgICAgY29uc3Qgbm90ZXNTeW5jID0gbmV3IE5vdGVzU3luYyhzeW5jUXVldWUpO1xuXG4gICAgICAgIG5vdGVzU3luYy5lbnF1ZXVlKHRoaXMubm90ZURlc2NyaXB0b3JzKTtcblxuICAgICAgICBhd2FpdCBzeW5jUXVldWUuZXhlY3V0ZSgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgfVxuXG59XG4iXX0=