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
const SyncState_1 = require("./SyncState");
const Logger_1 = require("../../../logger/Logger");
const Percentages_1 = require("../../../util/Percentages");
const Optional_1 = require("../../../util/ts/Optional");
const log = Logger_1.Logger.create();
class SyncQueue {
    constructor(abortable, syncProgressListener) {
        this.pending = [];
        this.total = 0;
        this.syncProgress = {
            percentage: 0,
            state: SyncState_1.SyncState.STARTED,
            error: undefined,
            taskResult: Optional_1.Optional.empty()
        };
        this.abortable = abortable;
        this.syncProgressListener = syncProgressListener;
    }
    add(...task) {
        this.pending.push(...task);
        ++this.total;
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            let syncTask;
            let idx = 0;
            while ((syncTask = this.pending.shift()) !== undefined) {
                if (this.abortable.aborted) {
                    log.info("Aborting sync.");
                    return;
                }
                try {
                    this.syncProgress.taskResult = yield syncTask();
                }
                catch (e) {
                    this.syncProgress.error = e;
                    this.syncProgress.state = SyncState_1.SyncState.FAILED;
                    this.fireSyncProgress();
                    break;
                }
                ++idx;
                this.syncProgress.percentage = Percentages_1.Percentages.calculate(idx, this.total);
                this.fireSyncProgress();
            }
        });
    }
    size() {
        return this.pending.length;
    }
    fireSyncProgress() {
        if (this.syncProgress.percentage === 100) {
            this.syncProgress.state = SyncState_1.SyncState.COMPLETED;
        }
        this.syncProgressListener(Object.freeze(Object.assign({}, this.syncProgress)));
    }
}
exports.SyncQueue = SyncQueue;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3luY1F1ZXVlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU3luY1F1ZXVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFHQSwyQ0FBc0M7QUFFdEMsbURBQThDO0FBQzlDLDJEQUFzRDtBQUN0RCx3REFBbUQ7QUFFbkQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBUzVCLE1BQWEsU0FBUztJQTRCbEIsWUFBWSxTQUFvQixFQUFFLG9CQUEwQztRQTFCM0QsWUFBTyxHQUFlLEVBQUUsQ0FBQztRQUtsQyxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBTUQsaUJBQVksR0FBaUI7WUFDMUMsVUFBVSxFQUFFLENBQUM7WUFDYixLQUFLLEVBQUUscUJBQVMsQ0FBQyxPQUFPO1lBQ3hCLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFVBQVUsRUFBRSxtQkFBUSxDQUFDLEtBQUssRUFBRTtTQUMvQixDQUFDO1FBV0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG9CQUFvQixDQUFDO0lBQ3JELENBQUM7SUFLTSxHQUFHLENBQUMsR0FBRyxJQUFnQjtRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQzNCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBS1ksT0FBTzs7WUFFaEIsSUFBSSxRQUE4QixDQUFDO1lBRW5DLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztZQUdaLE9BQU8sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLFNBQVMsRUFBRTtnQkFFcEQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRTtvQkFDeEIsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUMzQixPQUFPO2lCQUNWO2dCQUVELElBQUk7b0JBRUEsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEdBQUcsTUFBTSxRQUFRLEVBQUUsQ0FBQztpQkFFbkQ7Z0JBQUMsT0FBTyxDQUFDLEVBQUU7b0JBRVIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO29CQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRyxxQkFBUyxDQUFDLE1BQU0sQ0FBQztvQkFFM0MsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7b0JBRXhCLE1BQU07aUJBQ1Q7Z0JBRUQsRUFBRSxHQUFHLENBQUM7Z0JBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEdBQUcseUJBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFdEUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7YUFFM0I7UUFFTCxDQUFDO0tBQUE7SUFFTSxJQUFJO1FBQ1AsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUMvQixDQUFDO0lBRU8sZ0JBQWdCO1FBRXBCLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEtBQUssR0FBRyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLHFCQUFTLENBQUMsU0FBUyxDQUFDO1NBQ2pEO1FBRUQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVuRixDQUFDO0NBRUo7QUEvRkQsOEJBK0ZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTeW5jUHJvZ3Jlc3NMaXN0ZW5lcn0gZnJvbSAnLi9TeW5jUHJvZ3Jlc3NMaXN0ZW5lcic7XG5pbXBvcnQge0Fib3J0YWJsZX0gZnJvbSAnLi9BYm9ydGFibGUnO1xuaW1wb3J0IHtTeW5jUHJvZ3Jlc3N9IGZyb20gJy4vU3luY1Byb2dyZXNzJztcbmltcG9ydCB7U3luY1N0YXRlfSBmcm9tICcuL1N5bmNTdGF0ZSc7XG5pbXBvcnQge1N5bmNUYXNrfSBmcm9tICcuL1N5bmNUYXNrJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi8uLi9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7UGVyY2VudGFnZXN9IGZyb20gJy4uLy4uLy4uL3V0aWwvUGVyY2VudGFnZXMnO1xuaW1wb3J0IHtPcHRpb25hbH0gZnJvbSAnLi4vLi4vLi4vdXRpbC90cy9PcHRpb25hbCc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuLyoqXG4gKiBBIHF1ZXVlIHRoYXQgc3VwcG9ydHMgYWRkaW5nIHRhc2tzIGFuZCBleGVjdXRpbmcvZHJhaW5pbmcgZHJhaW5pbmcgYWxsIHRhc2tzLlxuICpcbiAqIFRoZSBxdWV1ZSBjYW4gYmUgZXhwYW5kZWQgYnkgYWRkaW5nIG1vcmUgdGFza3MuICBHZW5lcmFsbHkgdGhlIGlkZWEgaXMgdGhhdFxuICogdGhlIHVzZXIgcGVyZm9ybXMgdmFyaW91cyBzdGVwcyBhbmQgYmV0d2VlbiBlYWNoIHN0ZXAgaXQgZHJhaW5zIHRoZSBxdWV1ZSBieVxuICogZXhlY3V0aW5nIGFsbCB0YXNrcy5cbiAqL1xuZXhwb3J0IGNsYXNzIFN5bmNRdWV1ZSB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHBlbmRpbmc6IFN5bmNUYXNrW10gPSBbXTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0b3RhbCBudW1iZXIgb2YgdGFza3MgdGhhdCBoYXZlIGJlZW4gc3VibWl0dGVkLlxuICAgICAqL1xuICAgIHByaXZhdGUgdG90YWwgPSAwO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBhYm9ydGFibGU6IEFib3J0YWJsZTtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgc3luY1Byb2dyZXNzTGlzdGVuZXI6IFN5bmNQcm9ncmVzc0xpc3RlbmVyO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBzeW5jUHJvZ3Jlc3M6IFN5bmNQcm9ncmVzcyA9IHtcbiAgICAgICAgcGVyY2VudGFnZTogMCxcbiAgICAgICAgc3RhdGU6IFN5bmNTdGF0ZS5TVEFSVEVELFxuICAgICAgICBlcnJvcjogdW5kZWZpbmVkLFxuICAgICAgICB0YXNrUmVzdWx0OiBPcHRpb25hbC5lbXB0eSgpXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGFib3J0YWJsZSBUaGUgYWJvcnRhYmxlIHNlcnZpY2UgcnVubmluZyB0aGUgc3luYy4gV2hlbiBhYm9ydGVkIGlzXG4gICAgICogdHJ1ZSB3ZSBuZWVkIHRvIHN0b3AgdGhlIHN5bmMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3luY1Byb2dyZXNzTGlzdGVuZXIgQSBjYWxsYmFjayBmb3IgdGhlIHN0YXRlIHdoaWxlIHdlJ3JlXG4gICAgICogICAgIGV4ZWN1dGluZy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihhYm9ydGFibGU6IEFib3J0YWJsZSwgc3luY1Byb2dyZXNzTGlzdGVuZXI6IFN5bmNQcm9ncmVzc0xpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuYWJvcnRhYmxlID0gYWJvcnRhYmxlO1xuICAgICAgICB0aGlzLnN5bmNQcm9ncmVzc0xpc3RlbmVyID0gc3luY1Byb2dyZXNzTGlzdGVuZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIHRhc2tzIHRoYXQgbmVlZCBleGVjdXRpbmcuXG4gICAgICovXG4gICAgcHVibGljIGFkZCguLi50YXNrOiBTeW5jVGFza1tdKSB7XG4gICAgICAgIHRoaXMucGVuZGluZy5wdXNoKC4uLnRhc2spO1xuICAgICAgICArK3RoaXMudG90YWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXhlY3V0ZSBhbGwgdGFza3MgaW4gdGhlIHF1ZXVlLlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBleGVjdXRlKCkge1xuXG4gICAgICAgIGxldCBzeW5jVGFzazogU3luY1Rhc2sgfCB1bmRlZmluZWQ7XG5cbiAgICAgICAgbGV0IGlkeCA9IDA7XG5cbiAgICAgICAgLy8gbm9pbnNwZWN0aW9uIFRzTGludFxuICAgICAgICB3aGlsZSAoKHN5bmNUYXNrID0gdGhpcy5wZW5kaW5nLnNoaWZ0KCkpICE9PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgaWYgKHRoaXMuYWJvcnRhYmxlLmFib3J0ZWQpIHtcbiAgICAgICAgICAgICAgICBsb2cuaW5mbyhcIkFib3J0aW5nIHN5bmMuXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgICAgIHRoaXMuc3luY1Byb2dyZXNzLnRhc2tSZXN1bHQgPSBhd2FpdCBzeW5jVGFzaygpO1xuXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnN5bmNQcm9ncmVzcy5lcnJvciA9IGU7XG4gICAgICAgICAgICAgICAgdGhpcy5zeW5jUHJvZ3Jlc3Muc3RhdGUgPSBTeW5jU3RhdGUuRkFJTEVEO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5maXJlU3luY1Byb2dyZXNzKCk7XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgKytpZHg7XG4gICAgICAgICAgICB0aGlzLnN5bmNQcm9ncmVzcy5wZXJjZW50YWdlID0gUGVyY2VudGFnZXMuY2FsY3VsYXRlKGlkeCwgdGhpcy50b3RhbCk7XG5cbiAgICAgICAgICAgIHRoaXMuZmlyZVN5bmNQcm9ncmVzcygpO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHB1YmxpYyBzaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wZW5kaW5nLmxlbmd0aDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZpcmVTeW5jUHJvZ3Jlc3MoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuc3luY1Byb2dyZXNzLnBlcmNlbnRhZ2UgPT09IDEwMCkge1xuICAgICAgICAgICAgdGhpcy5zeW5jUHJvZ3Jlc3Muc3RhdGUgPSBTeW5jU3RhdGUuQ09NUExFVEVEO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zeW5jUHJvZ3Jlc3NMaXN0ZW5lcihPYmplY3QuZnJlZXplKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3luY1Byb2dyZXNzKSkpO1xuXG4gICAgfVxuXG59XG4iXX0=