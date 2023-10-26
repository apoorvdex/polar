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
const SimpleReactor_1 = require("../../reactor/SimpleReactor");
const DatastoreMutation_1 = require("../DatastoreMutation");
const Functions_1 = require("../../util/Functions");
const Logger_1 = require("../../logger/Logger");
const log = Logger_1.Logger.create();
class AbstractAdvertisingPersistenceLayer {
    constructor(delegate) {
        this.reactor = new SimpleReactor_1.SimpleReactor();
        this.datastore = delegate.datastore;
        this.delegate = delegate;
    }
    init(errorListener) {
        return this.delegate.init(errorListener);
    }
    stop() {
        return this.delegate.stop();
    }
    addEventListener(listener) {
        return this.reactor.addEventListener(listener);
    }
    addEventListenerForDoc(fingerprint, listener) {
        this.addEventListener((event) => {
            if (fingerprint === event.docInfo.fingerprint) {
                listener(event);
            }
        });
    }
    writeDocMeta(docMeta, datastoreMutation) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.handleWrite(docMeta, () => __awaiter(this, void 0, void 0, function* () { return yield this.delegate.writeDocMeta(docMeta, datastoreMutation); }));
        });
    }
    write(fingerprint, docMeta, datastoreMutation = new DatastoreMutation_1.DefaultDatastoreMutation()) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.handleWrite(docMeta, () => __awaiter(this, void 0, void 0, function* () { return yield this.delegate.write(fingerprint, docMeta, datastoreMutation); }));
        });
    }
    handleWrite(docMeta, handler) {
        return __awaiter(this, void 0, void 0, function* () {
            const docInfo = yield handler();
            const eventType = this.contains(docMeta.docInfo.fingerprint) ? 'updated' : 'created';
            this.broadcastEvent({
                docInfo,
                docMetaRef: {
                    fingerprint: docMeta.docInfo.fingerprint
                },
                eventType
            });
            return docInfo;
        });
    }
    synchronizeDocs(...docMetaRefs) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delegate.synchronizeDocs(...docMetaRefs);
        });
    }
    contains(fingerprint) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delegate.contains(fingerprint);
        });
    }
    getDocMetaRefs() {
        return this.delegate.getDocMetaRefs();
    }
    snapshot(listener, errorListener = Functions_1.NULL_FUNCTION) {
        return this.delegate.snapshot(listener, errorListener);
    }
    createBackup() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delegate.createBackup();
        });
    }
    delete(docMetaFileRef) {
        const result = this.delegate.delete(docMetaFileRef);
        this.broadcastEvent({
            docInfo: docMetaFileRef.docInfo,
            docMetaRef: {
                fingerprint: docMetaFileRef.fingerprint
            },
            eventType: 'deleted'
        });
        return result;
    }
    getDocMeta(fingerprint) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.delegate.getDocMeta(fingerprint);
        });
    }
    dispatchEvent(event) {
        this.reactor.dispatchEvent(event);
    }
    writeFile(backend, ref, data, meta) {
        return this.delegate.writeFile(backend, ref, data, meta);
    }
    containsFile(backend, ref) {
        return this.delegate.containsFile(backend, ref);
    }
    getFile(backend, ref) {
        return this.delegate.getFile(backend, ref);
    }
    addDocMetaSnapshotEventListener(docMetaSnapshotEventListener) {
        this.delegate.addDocMetaSnapshotEventListener(docMetaSnapshotEventListener);
    }
    deactivate() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.delegate.deactivate();
        });
    }
}
exports.AbstractAdvertisingPersistenceLayer = AbstractAdvertisingPersistenceLayer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3RBZHZlcnRpc2luZ1BlcnNpc3RlbmNlTGF5ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBYnN0cmFjdEFkdmVydGlzaW5nUGVyc2lzdGVuY2VMYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsK0RBQTBEO0FBa0IxRCw0REFBaUY7QUFDakYsb0RBQW1EO0FBQ25ELGdEQUEyQztBQUczQyxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBc0IsbUNBQW1DO0lBYXJELFlBQXNCLFFBQTBCO1FBUDdCLFlBQU8sR0FBRyxJQUFJLDZCQUFhLEVBQXlCLENBQUM7UUFRcEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFFTSxJQUFJLENBQUMsYUFBNkI7UUFDckMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRU0sSUFBSTtRQUNQLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRU0sZ0JBQWdCLENBQUMsUUFBa0M7UUFDdEQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFTSxzQkFBc0IsQ0FBQyxXQUFtQixFQUFFLFFBQWtDO1FBRWpGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBRTVCLElBQUksV0FBVyxLQUFLLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFO2dCQUMzQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbkI7UUFFTCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFWSxZQUFZLENBQUMsT0FBZ0IsRUFBRSxpQkFBOEM7O1lBRXRGLE9BQU8sTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxHQUFTLEVBQUUsZ0RBQUMsT0FBQSxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxDQUFBLEdBQUEsQ0FBQyxDQUFDO1FBRXJILENBQUM7S0FBQTtJQUVZLEtBQUssQ0FBQyxXQUFtQixFQUNuQixPQUFnQixFQUNoQixvQkFBZ0QsSUFBSSw0Q0FBd0IsRUFBRTs7WUFFN0YsT0FBTyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEdBQVMsRUFBRSxnREFBQyxPQUFBLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxDQUFBLEdBQUEsQ0FBQyxDQUFDO1FBRTNILENBQUM7S0FBQTtJQUVhLFdBQVcsQ0FBQyxPQUFnQixFQUFFLE9BQStCOztZQUV2RSxNQUFNLE9BQU8sR0FBRyxNQUFNLE9BQU8sRUFBRSxDQUFDO1lBRWhDLE1BQU0sU0FBUyxHQUNULElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFFekUsSUFBSSxDQUFDLGNBQWMsQ0FBQztnQkFDaEIsT0FBTztnQkFDUCxVQUFVLEVBQUU7b0JBQ1IsV0FBVyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVztpQkFDM0M7Z0JBQ0QsU0FBUzthQUNaLENBQUMsQ0FBQztZQUVILE9BQU8sT0FBTyxDQUFDO1FBRW5CLENBQUM7S0FBQTtJQUVZLGVBQWUsQ0FBQyxHQUFHLFdBQXlCOztZQUNyRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUM7UUFDekQsQ0FBQztLQUFBO0lBRVksUUFBUSxDQUFDLFdBQW1COztZQUNyQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQy9DLENBQUM7S0FBQTtJQUVNLGNBQWM7UUFDakIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFFTSxRQUFRLENBQUMsUUFBc0MsRUFDdEMsZ0JBQStCLHlCQUFhO1FBRXhELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTNELENBQUM7SUFFWSxZQUFZOztZQUNyQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEMsQ0FBQztLQUFBO0lBRU0sTUFBTSxDQUFDLGNBQThCO1FBRXhDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRXBELElBQUksQ0FBQyxjQUFjLENBQUM7WUFDaEIsT0FBTyxFQUFFLGNBQWMsQ0FBQyxPQUFPO1lBQy9CLFVBQVUsRUFBRTtnQkFDUixXQUFXLEVBQUUsY0FBYyxDQUFDLFdBQVc7YUFDMUM7WUFDRCxTQUFTLEVBQUUsU0FBUztTQUN2QixDQUFDLENBQUM7UUFFSCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRVksVUFBVSxDQUFDLFdBQW1COztZQUN2QyxPQUFPLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkQsQ0FBQztLQUFBO0lBTU0sYUFBYSxDQUFDLEtBQTRCO1FBQzdDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTSxTQUFTLENBQUMsT0FBZ0IsRUFBRSxHQUFZLEVBQUUsSUFBb0IsRUFBRSxJQUFjO1FBQ2pGLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVNLFlBQVksQ0FBQyxPQUFnQixFQUFFLEdBQVk7UUFDOUMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVNLE9BQU8sQ0FBQyxPQUFnQixFQUFFLEdBQVk7UUFDekMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVNLCtCQUErQixDQUFDLDRCQUEwRDtRQUM3RixJQUFJLENBQUMsUUFBUSxDQUFDLCtCQUErQixDQUFDLDRCQUE0QixDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUlZLFVBQVU7O1lBQ25CLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNyQyxDQUFDO0tBQUE7Q0FFSjtBQW5KRCxrRkFtSkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xpc3RlbmFibGVQZXJzaXN0ZW5jZUxheWVyfSBmcm9tICcuLi9MaXN0ZW5hYmxlUGVyc2lzdGVuY2VMYXllcic7XG5pbXBvcnQge1NpbXBsZVJlYWN0b3J9IGZyb20gJy4uLy4uL3JlYWN0b3IvU2ltcGxlUmVhY3Rvcic7XG5pbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJFdmVudH0gZnJvbSAnLi4vUGVyc2lzdGVuY2VMYXllckV2ZW50JztcbmltcG9ydCB7UGVyc2lzdGVuY2VMYXllckxpc3RlbmVyfSBmcm9tICcuLi9QZXJzaXN0ZW5jZUxheWVyTGlzdGVuZXInO1xuaW1wb3J0IHtQZXJzaXN0ZW5jZUxheWVyLCBQZXJzaXN0ZW5jZUxheWVySUR9IGZyb20gJy4uL1BlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtEb2NNZXRhfSBmcm9tICcuLi8uLi9tZXRhZGF0YS9Eb2NNZXRhJztcbmltcG9ydCB7RG9jTWV0YUZpbGVSZWYsIERvY01ldGFSZWZ9IGZyb20gJy4uL0RvY01ldGFSZWYnO1xuaW1wb3J0IHtcbiAgICBEZWxldGVSZXN1bHQsIERvY01ldGFTbmFwc2hvdEV2ZW50LCBGaWxlUmVmLFxuICAgIERvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIsIFNuYXBzaG90UmVzdWx0LFxuICAgIEVycm9yTGlzdGVuZXIsXG4gICAgRGF0YXN0b3JlLCBCaW5hcnlGaWxlRGF0YVxufSBmcm9tICcuLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtQZXJzaXN0ZW5jZUV2ZW50VHlwZX0gZnJvbSAnLi4vUGVyc2lzdGVuY2VFdmVudFR5cGUnO1xuaW1wb3J0IHtCYWNrZW5kfSBmcm9tICcuLi9CYWNrZW5kJztcbmltcG9ydCB7RG9jRmlsZU1ldGF9IGZyb20gJy4uL0RvY0ZpbGVNZXRhJztcbmltcG9ydCB7RmlsZU1ldGF9IGZyb20gJy4uL0RhdGFzdG9yZSc7XG5pbXBvcnQge09wdGlvbmFsfSBmcm9tICcuLi8uLi91dGlsL3RzL09wdGlvbmFsJztcbmltcG9ydCB7RG9jSW5mb30gZnJvbSAnLi4vLi4vbWV0YWRhdGEvRG9jSW5mbyc7XG5pbXBvcnQge0RhdGFzdG9yZU11dGF0aW9uLCBEZWZhdWx0RGF0YXN0b3JlTXV0YXRpb259IGZyb20gJy4uL0RhdGFzdG9yZU11dGF0aW9uJztcbmltcG9ydCB7TlVMTF9GVU5DVElPTn0gZnJvbSAnLi4vLi4vdXRpbC9GdW5jdGlvbnMnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uLy4uL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtSZWxlYXNlYWJsZX0gZnJvbSAnLi4vLi4vcmVhY3Rvci9FdmVudExpc3RlbmVyJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RBZHZlcnRpc2luZ1BlcnNpc3RlbmNlTGF5ZXIgaW1wbGVtZW50cyBMaXN0ZW5hYmxlUGVyc2lzdGVuY2VMYXllciB7XG5cbiAgICBwdWJsaWMgYWJzdHJhY3QgcmVhZG9ubHkgaWQ6IFBlcnNpc3RlbmNlTGF5ZXJJRDtcblxuICAgIHB1YmxpYyByZWFkb25seSBkYXRhc3RvcmU6IERhdGFzdG9yZTtcblxuICAgIHByb3RlY3RlZCByZWFkb25seSByZWFjdG9yID0gbmV3IFNpbXBsZVJlYWN0b3I8UGVyc2lzdGVuY2VMYXllckV2ZW50PigpO1xuXG4gICAgLyoqXG4gICAgICogQSBQZXJzaXN0ZW5jZUxheWVyIGZvciB0aGUgbm9uLWRpc3BhdGNoZWQgbWV0aG9kcyAoZm9yIG5vdykuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGRlbGVnYXRlOiBQZXJzaXN0ZW5jZUxheWVyO1xuXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKGRlbGVnYXRlOiBQZXJzaXN0ZW5jZUxheWVyKSB7XG4gICAgICAgIHRoaXMuZGF0YXN0b3JlID0gZGVsZWdhdGUuZGF0YXN0b3JlO1xuICAgICAgICB0aGlzLmRlbGVnYXRlID0gZGVsZWdhdGU7XG4gICAgfVxuXG4gICAgcHVibGljIGluaXQoZXJyb3JMaXN0ZW5lcj86IEVycm9yTGlzdGVuZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUuaW5pdChlcnJvckxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RvcCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUuc3RvcCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRFdmVudExpc3RlbmVyKGxpc3RlbmVyOiBQZXJzaXN0ZW5jZUxheWVyTGlzdGVuZXIpOiBSZWxlYXNlYWJsZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZEV2ZW50TGlzdGVuZXJGb3JEb2MoZmluZ2VycHJpbnQ6IHN0cmluZywgbGlzdGVuZXI6IFBlcnNpc3RlbmNlTGF5ZXJMaXN0ZW5lcik6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigoZXZlbnQpID0+IHtcblxuICAgICAgICAgICAgaWYgKGZpbmdlcnByaW50ID09PSBldmVudC5kb2NJbmZvLmZpbmdlcnByaW50KSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIoZXZlbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHdyaXRlRG9jTWV0YShkb2NNZXRhOiBEb2NNZXRhLCBkYXRhc3RvcmVNdXRhdGlvbj86IERhdGFzdG9yZU11dGF0aW9uPERvY0luZm8+KTogUHJvbWlzZTxEb2NJbmZvPiB7XG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuaGFuZGxlV3JpdGUoZG9jTWV0YSwgYXN5bmMgKCkgPT4gYXdhaXQgdGhpcy5kZWxlZ2F0ZS53cml0ZURvY01ldGEoZG9jTWV0YSwgZGF0YXN0b3JlTXV0YXRpb24pKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyB3cml0ZShmaW5nZXJwcmludDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICBkb2NNZXRhOiBEb2NNZXRhLFxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhc3RvcmVNdXRhdGlvbjogRGF0YXN0b3JlTXV0YXRpb248RG9jSW5mbz4gPSBuZXcgRGVmYXVsdERhdGFzdG9yZU11dGF0aW9uKCkpOiBQcm9taXNlPERvY0luZm8+IHtcblxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5oYW5kbGVXcml0ZShkb2NNZXRhLCBhc3luYyAoKSA9PiBhd2FpdCB0aGlzLmRlbGVnYXRlLndyaXRlKGZpbmdlcnByaW50LCBkb2NNZXRhLCBkYXRhc3RvcmVNdXRhdGlvbikpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBoYW5kbGVXcml0ZShkb2NNZXRhOiBEb2NNZXRhLCBoYW5kbGVyOiAoKSA9PiBQcm9taXNlPERvY0luZm8+KSB7XG5cbiAgICAgICAgY29uc3QgZG9jSW5mbyA9IGF3YWl0IGhhbmRsZXIoKTtcblxuICAgICAgICBjb25zdCBldmVudFR5cGU6IFBlcnNpc3RlbmNlRXZlbnRUeXBlXG4gICAgICAgICAgICA9IHRoaXMuY29udGFpbnMoZG9jTWV0YS5kb2NJbmZvLmZpbmdlcnByaW50KSA/ICd1cGRhdGVkJyA6ICdjcmVhdGVkJztcblxuICAgICAgICB0aGlzLmJyb2FkY2FzdEV2ZW50KHtcbiAgICAgICAgICAgIGRvY0luZm8sXG4gICAgICAgICAgICBkb2NNZXRhUmVmOiB7XG4gICAgICAgICAgICAgICAgZmluZ2VycHJpbnQ6IGRvY01ldGEuZG9jSW5mby5maW5nZXJwcmludFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV2ZW50VHlwZVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZG9jSW5mbztcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzeW5jaHJvbml6ZURvY3MoLi4uZG9jTWV0YVJlZnM6IERvY01ldGFSZWZbXSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZS5zeW5jaHJvbml6ZURvY3MoLi4uZG9jTWV0YVJlZnMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjb250YWlucyhmaW5nZXJwcmludDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLmNvbnRhaW5zKGZpbmdlcnByaW50KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RG9jTWV0YVJlZnMoKTogUHJvbWlzZTxEb2NNZXRhUmVmW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUuZ2V0RG9jTWV0YVJlZnMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc25hcHNob3QobGlzdGVuZXI6IERvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTGlzdGVuZXI6IEVycm9yTGlzdGVuZXIgPSBOVUxMX0ZVTkNUSU9OKTogUHJvbWlzZTxTbmFwc2hvdFJlc3VsdD4ge1xuXG4gICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLnNuYXBzaG90KGxpc3RlbmVyLCBlcnJvckxpc3RlbmVyKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjcmVhdGVCYWNrdXAoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLmNyZWF0ZUJhY2t1cCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWxldGUoZG9jTWV0YUZpbGVSZWY6IERvY01ldGFGaWxlUmVmKTogUHJvbWlzZTxEZWxldGVSZXN1bHQ+IHtcblxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmRlbGVnYXRlLmRlbGV0ZShkb2NNZXRhRmlsZVJlZik7XG5cbiAgICAgICAgdGhpcy5icm9hZGNhc3RFdmVudCh7XG4gICAgICAgICAgICBkb2NJbmZvOiBkb2NNZXRhRmlsZVJlZi5kb2NJbmZvLFxuICAgICAgICAgICAgZG9jTWV0YVJlZjoge1xuICAgICAgICAgICAgICAgIGZpbmdlcnByaW50OiBkb2NNZXRhRmlsZVJlZi5maW5nZXJwcmludFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV2ZW50VHlwZTogJ2RlbGV0ZWQnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGdldERvY01ldGEoZmluZ2VycHJpbnQ6IHN0cmluZyk6IFByb21pc2U8RG9jTWV0YSB8IHVuZGVmaW5lZD4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5kZWxlZ2F0ZS5nZXREb2NNZXRhKGZpbmdlcnByaW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNwYXRjaCBhbiBldmVudCB0byBhbGwgbGlzdGVuZXJzLiBUaGlzIGlzIGRpZmZlcmVudCBmcm9tIG5vdGlmeSBpbiB0aGF0XG4gICAgICogdGhpcyBqdXN0IGRpc3BhdGNoZXMgdG8gdGhlIGxvY2FsIHJlYWN0b3IuXG4gICAgICovXG4gICAgcHVibGljIGRpc3BhdGNoRXZlbnQoZXZlbnQ6IFBlcnNpc3RlbmNlTGF5ZXJFdmVudCkge1xuICAgICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxuXG4gICAgcHVibGljIHdyaXRlRmlsZShiYWNrZW5kOiBCYWNrZW5kLCByZWY6IEZpbGVSZWYsIGRhdGE6IEJpbmFyeUZpbGVEYXRhLCBtZXRhOiBGaWxlTWV0YSk6IFByb21pc2U8RG9jRmlsZU1ldGE+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUud3JpdGVGaWxlKGJhY2tlbmQsIHJlZiwgZGF0YSwgbWV0YSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbnRhaW5zRmlsZShiYWNrZW5kOiBCYWNrZW5kLCByZWY6IEZpbGVSZWYpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUuY29udGFpbnNGaWxlKGJhY2tlbmQsIHJlZik7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEZpbGUoYmFja2VuZDogQmFja2VuZCwgcmVmOiBGaWxlUmVmKTogUHJvbWlzZTxPcHRpb25hbDxEb2NGaWxlTWV0YT4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUuZ2V0RmlsZShiYWNrZW5kLCByZWYpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGREb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyKGRvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXI6IERvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS5hZGREb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyKGRvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBicm9hZGNhc3RFdmVudChldmVudDogUGVyc2lzdGVuY2VMYXllckV2ZW50KTogdm9pZDtcblxuICAgIHB1YmxpYyBhc3luYyBkZWFjdGl2YXRlKCkge1xuICAgICAgICBhd2FpdCB0aGlzLmRlbGVnYXRlLmRlYWN0aXZhdGUoKTtcbiAgICB9XG5cbn1cblxuIl19