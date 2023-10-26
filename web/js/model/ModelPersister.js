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
const Batcher_1 = require("../datastore/batcher/Batcher");
const Logger_1 = require("../logger/Logger");
const DocInfo_1 = require("../metadata/DocInfo");
const Proxies_1 = require("../proxies/Proxies");
const log = Logger_1.Logger.create();
class ModelPersister {
    constructor(persistenceLayer, docMeta) {
        this.nrWrites = 0;
        this.nrDeferredWrites = 0;
        this.persistenceLayer = persistenceLayer;
        this.docMeta = docMeta;
        const batcher = new Batcher_1.Batcher(() => __awaiter(this, void 0, void 0, function* () {
            yield this.persistenceLayer.write(this.docMeta.docInfo.fingerprint, this.docMeta);
            ++this.nrWrites;
            this.nrDeferredWrites = 0;
        }));
        this.docMeta = Proxies_1.Proxies.create(this.docMeta, (traceEvent) => {
            if (this.docMeta.docInfo.mutating) {
                ++this.nrDeferredWrites;
                return;
            }
            if (this.isFinalMutatingEvent(traceEvent)) {
                if (this.nrDeferredWrites <= 1) {
                    return;
                }
            }
            log.info(`sync of persistence layer at ${traceEvent.path} : ${traceEvent.property}"`);
            setTimeout(() => {
                batcher.enqueue().run()
                    .catch(err => log.error("Unable to commit to disk: ", err));
            }, 0);
            return true;
        });
        this.persistenceLayer.addEventListenerForDoc(this.docMeta.docInfo.fingerprint, event => {
            log.debug("Received updated DocInfo.");
            if (this.docMeta.docInfo.fingerprint !== event.docInfo.fingerprint) {
                const detail = `${this.docMeta.docInfo.fingerprint} vs ${event.docInfo.fingerprint}`;
                throw new Error(`Attempt to update incorrect fingerprint: ` + detail);
            }
            this.docMeta.docInfo = new DocInfo_1.DocInfo(event.docInfo);
        });
    }
    isFinalMutatingEvent(traceEvent) {
        return traceEvent.path === '/docInfo' &&
            traceEvent.property === 'mutating' &&
            traceEvent.value === undefined;
    }
}
exports.ModelPersister = ModelPersister;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kZWxQZXJzaXN0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNb2RlbFBlcnNpc3Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUEsMERBQXFEO0FBRXJELDZDQUF3QztBQUN4QyxpREFBNEM7QUFDNUMsZ0RBQTJDO0FBRTNDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLGNBQWM7SUFVdkIsWUFBWSxnQkFBNEMsRUFBRSxPQUFnQjtRQU5uRSxhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBRXJCLHFCQUFnQixHQUFXLENBQUMsQ0FBQztRQUtoQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7UUFDekMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFFdkIsTUFBTSxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLEdBQVMsRUFBRTtZQUVuQyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNsRixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDaEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztRQUU5QixDQUFDLENBQUEsQ0FBQyxDQUFDO1FBR0gsSUFBSSxDQUFDLE9BQU8sR0FBRyxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsVUFBc0IsRUFBRSxFQUFFO1lBRW5FLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO2dCQU0vQixFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztnQkFFeEIsT0FBTzthQUNWO1lBRUQsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBRXZDLElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLENBQUMsRUFBRTtvQkFJNUIsT0FBTztpQkFDVjthQUVKO1lBRUQsR0FBRyxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsVUFBVSxDQUFDLElBQUksTUFBTSxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztZQUV0RixVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUVaLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUU7cUJBQ2xCLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsNEJBQTRCLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUVwRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFTixPQUFPLElBQUksQ0FBQztRQUVoQixDQUFDLENBQUMsQ0FBQztRQUdILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLEVBQUU7WUFFbkYsR0FBRyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1lBRXZDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxLQUFLLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFO2dCQUNoRSxNQUFNLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNyRixNQUFNLElBQUksS0FBSyxDQUFDLDJDQUEyQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO2FBQ3pFO1lBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV0RCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFTyxvQkFBb0IsQ0FBQyxVQUFzQjtRQUUvQyxPQUFPLFVBQVUsQ0FBQyxJQUFJLEtBQUssVUFBVTtZQUM5QixVQUFVLENBQUMsUUFBUSxLQUFLLFVBQVU7WUFDbEMsVUFBVSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUM7SUFFMUMsQ0FBQztDQUVKO0FBcEZELHdDQW9GQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RG9jTWV0YX0gZnJvbSAnLi4vbWV0YWRhdGEvRG9jTWV0YSc7XG5pbXBvcnQge0xpc3RlbmFibGVQZXJzaXN0ZW5jZUxheWVyfSBmcm9tICcuLi9kYXRhc3RvcmUvTGlzdGVuYWJsZVBlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtCYXRjaGVyfSBmcm9tICcuLi9kYXRhc3RvcmUvYmF0Y2hlci9CYXRjaGVyJztcbmltcG9ydCB7VHJhY2VFdmVudH0gZnJvbSAnLi4vcHJveGllcy9UcmFjZUV2ZW50JztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7RG9jSW5mb30gZnJvbSAnLi4vbWV0YWRhdGEvRG9jSW5mbyc7XG5pbXBvcnQge1Byb3hpZXN9IGZyb20gJy4uL3Byb3hpZXMvUHJveGllcyc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIE1vZGVsUGVyc2lzdGVyIHtcblxuICAgIHB1YmxpYyByZWFkb25seSBkb2NNZXRhOiBEb2NNZXRhO1xuXG4gICAgcHVibGljIG5yV3JpdGVzOiBudW1iZXIgPSAwO1xuXG4gICAgcHVibGljIG5yRGVmZXJyZWRXcml0ZXM6IG51bWJlciA9IDA7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHBlcnNpc3RlbmNlTGF5ZXI6IExpc3RlbmFibGVQZXJzaXN0ZW5jZUxheWVyO1xuXG4gICAgY29uc3RydWN0b3IocGVyc2lzdGVuY2VMYXllcjogTGlzdGVuYWJsZVBlcnNpc3RlbmNlTGF5ZXIsIGRvY01ldGE6IERvY01ldGEpIHtcbiAgICAgICAgdGhpcy5wZXJzaXN0ZW5jZUxheWVyID0gcGVyc2lzdGVuY2VMYXllcjtcbiAgICAgICAgdGhpcy5kb2NNZXRhID0gZG9jTWV0YTtcblxuICAgICAgICBjb25zdCBiYXRjaGVyID0gbmV3IEJhdGNoZXIoYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBlcnNpc3RlbmNlTGF5ZXIud3JpdGUodGhpcy5kb2NNZXRhLmRvY0luZm8uZmluZ2VycHJpbnQsIHRoaXMuZG9jTWV0YSk7XG4gICAgICAgICAgICArK3RoaXMubnJXcml0ZXM7XG4gICAgICAgICAgICB0aGlzLm5yRGVmZXJyZWRXcml0ZXMgPSAwO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBhIG5ldyBEb2NNZXRhIHByb3h5IHRoYXQgdXBkYXRlcyBvbiBBTlkgdXBkYXRlLlxuICAgICAgICB0aGlzLmRvY01ldGEgPSBQcm94aWVzLmNyZWF0ZSh0aGlzLmRvY01ldGEsICh0cmFjZUV2ZW50OiBUcmFjZUV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmRvY01ldGEuZG9jSW5mby5tdXRhdGluZykge1xuXG4gICAgICAgICAgICAgICAgLy8gc2tpcCBidWxrIHVwZGF0ZXMuIFRoaXMgaXMgZG9uZSB3aGVuIHdlIG5lZWQgdG8gbXV0YXRlIG11bHRpcGxlXG4gICAgICAgICAgICAgICAgLy8gZmllbGRzIGxpa2Ugc2V0dGluZyA1LTEwIHBhZ2VtYXJrcyBhdCBvbmNlIG9yIHNldHRpbmcgcGFnZW1hcmtzXG4gICAgICAgICAgICAgICAgLy8gYW5kIG90aGVyIG1ldHJpY3MgbWV0YWRhdGEuXG5cbiAgICAgICAgICAgICAgICArK3RoaXMubnJEZWZlcnJlZFdyaXRlcztcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNGaW5hbE11dGF0aW5nRXZlbnQodHJhY2VFdmVudCkpIHtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5yRGVmZXJyZWRXcml0ZXMgPD0gMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBvbmx5IGhhdmUgb25lIGRlZmVycmVkIHdyaXRlIGFuZCB0aGlzIGlzIHRoZSB0b2dnbGluZ1xuICAgICAgICAgICAgICAgICAgICAvLyBvZiB0aGUgbXV0YXRpbmcgZmllbGQuXG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsb2cuaW5mbyhgc3luYyBvZiBwZXJzaXN0ZW5jZSBsYXllciBhdCAke3RyYWNlRXZlbnQucGF0aH0gOiAke3RyYWNlRXZlbnQucHJvcGVydHl9XCJgKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBiYXRjaGVyLmVucXVldWUoKS5ydW4oKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihcIlVuYWJsZSB0byBjb21taXQgdG8gZGlzazogXCIsIGVycikpO1xuXG4gICAgICAgICAgICB9LCAwKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gb25seSBhY2NlcHQgRG9jSW5mbyB1cGRhdGVzIGZyb20gdGhlIGRvY3VtZW50IHdlJ3ZlIG9wZW5lZC5cbiAgICAgICAgdGhpcy5wZXJzaXN0ZW5jZUxheWVyLmFkZEV2ZW50TGlzdGVuZXJGb3JEb2ModGhpcy5kb2NNZXRhLmRvY0luZm8uZmluZ2VycHJpbnQsIGV2ZW50ID0+IHtcblxuICAgICAgICAgICAgbG9nLmRlYnVnKFwiUmVjZWl2ZWQgdXBkYXRlZCBEb2NJbmZvLlwiKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZG9jTWV0YS5kb2NJbmZvLmZpbmdlcnByaW50ICE9PSBldmVudC5kb2NJbmZvLmZpbmdlcnByaW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGV0YWlsID0gYCR7dGhpcy5kb2NNZXRhLmRvY0luZm8uZmluZ2VycHJpbnR9IHZzICR7ZXZlbnQuZG9jSW5mby5maW5nZXJwcmludH1gO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQXR0ZW1wdCB0byB1cGRhdGUgaW5jb3JyZWN0IGZpbmdlcnByaW50OiBgICsgZGV0YWlsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5kb2NNZXRhLmRvY0luZm8gPSBuZXcgRG9jSW5mbyhldmVudC5kb2NJbmZvKTtcblxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgaXNGaW5hbE11dGF0aW5nRXZlbnQodHJhY2VFdmVudDogVHJhY2VFdmVudCkge1xuXG4gICAgICAgIHJldHVybiB0cmFjZUV2ZW50LnBhdGggPT09ICcvZG9jSW5mbycgJiZcbiAgICAgICAgICAgICAgIHRyYWNlRXZlbnQucHJvcGVydHkgPT09ICdtdXRhdGluZycgJiZcbiAgICAgICAgICAgICAgIHRyYWNlRXZlbnQudmFsdWUgPT09IHVuZGVmaW5lZDtcblxuICAgIH1cblxufVxuIl19