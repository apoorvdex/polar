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
class DelegatedPersistenceLayer {
    constructor(delegate) {
        this.id = 'delegated';
        this.delegate = delegate;
        this.datastore = delegate.datastore;
    }
    addDocMetaSnapshotEventListener(docMetaSnapshotEventListener) {
        this.delegate.addDocMetaSnapshotEventListener(docMetaSnapshotEventListener);
    }
    contains(fingerprint) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delegate.contains(fingerprint);
        });
    }
    containsFile(backend, ref) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delegate.containsFile(backend, ref);
        });
    }
    deactivate() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delegate.deactivate();
        });
    }
    delete(docMetaFileRef, datastoreMutation) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delegate.delete(docMetaFileRef, datastoreMutation);
        });
    }
    getDocMeta(fingerprint) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delegate.getDocMeta(fingerprint);
        });
    }
    getDocMetaRefs() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delegate.getDocMetaRefs();
        });
    }
    getFile(backend, ref) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delegate.getFile(backend, ref);
        });
    }
    init(errorListener) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delegate.init();
        });
    }
    snapshot(listener, errorListener) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delegate.snapshot(listener, errorListener);
        });
    }
    createBackup() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delegate.createBackup();
        });
    }
    stop() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delegate.stop();
        });
    }
    write(fingerprint, docMeta, datastoreMutation) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delegate.write(fingerprint, docMeta, datastoreMutation);
        });
    }
    writeDocMeta(docMeta, datastoreMutation) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delegate.writeDocMeta(docMeta, datastoreMutation);
        });
    }
    synchronizeDocs(...docMetaRefs) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delegate.synchronizeDocs(...docMetaRefs);
        });
    }
    writeFile(backend, ref, data, meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delegate.writeFile(backend, ref, data, meta);
        });
    }
}
exports.DelegatedPersistenceLayer = DelegatedPersistenceLayer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVsZWdhdGVkUGVyc2lzdGVuY2VMYXllci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRlbGVnYXRlZFBlcnNpc3RlbmNlTGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQXdCQSxNQUFhLHlCQUF5QjtJQVFsQyxZQUFZLFFBQTBCO1FBTnRCLE9BQUUsR0FBdUIsV0FBVyxDQUFDO1FBT2pELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztJQUN4QyxDQUFDO0lBRU0sK0JBQStCLENBQUMsNEJBQTBEO1FBQzdGLElBQUksQ0FBQyxRQUFRLENBQUMsK0JBQStCLENBQUMsNEJBQTRCLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRVksUUFBUSxDQUFDLFdBQW1COztZQUNyQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQy9DLENBQUM7S0FBQTtJQUVZLFlBQVksQ0FBQyxPQUFnQixFQUFFLEdBQVk7O1lBQ3BELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3BELENBQUM7S0FBQTtJQUVZLFVBQVU7O1lBQ25CLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN0QyxDQUFDO0tBQUE7SUFFWSxNQUFNLENBQUMsY0FBOEIsRUFBRSxpQkFBOEM7O1lBQzlGLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDbkUsQ0FBQztLQUFBO0lBRVksVUFBVSxDQUFDLFdBQW1COztZQUN2QyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pELENBQUM7S0FBQTtJQUVZLGNBQWM7O1lBQ3ZCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMxQyxDQUFDO0tBQUE7SUFFWSxPQUFPLENBQUMsT0FBZ0IsRUFBRSxHQUFZOztZQUMvQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMvQyxDQUFDO0tBQUE7SUFFWSxJQUFJLENBQUMsYUFBNkI7O1lBQzNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoQyxDQUFDO0tBQUE7SUFFWSxRQUFRLENBQUMsUUFBc0MsRUFBRSxhQUE2Qjs7WUFDdkYsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDM0QsQ0FBQztLQUFBO0lBRVksWUFBWTs7WUFDckIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hDLENBQUM7S0FBQTtJQUVZLElBQUk7O1lBQ2IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hDLENBQUM7S0FBQTtJQUVZLEtBQUssQ0FBQyxXQUFtQixFQUFFLE9BQWdCLEVBQUUsaUJBQThDOztZQUNwRyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUN4RSxDQUFDO0tBQUE7SUFFWSxZQUFZLENBQUMsT0FBZ0IsRUFBRSxpQkFBOEM7O1lBQ3RGLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDbEUsQ0FBQztLQUFBO0lBRVksZUFBZSxDQUFDLEdBQUcsV0FBeUI7O1lBQ3JELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQztRQUN6RCxDQUFDO0tBQUE7SUFFWSxTQUFTLENBQUMsT0FBZ0IsRUFBRSxHQUFZLEVBQUUsSUFBb0IsRUFBRSxJQUFlOztZQUN4RixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdELENBQUM7S0FBQTtDQUVKO0FBN0VELDhEQTZFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgRGF0YXN0b3JlLCBEb2NNZXRhU25hcHNob3RFdmVudCwgRmlsZU1ldGEsIEZpbGVSZWYsIEluaXRSZXN1bHQsXG4gICAgRG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lciwgU25hcHNob3RSZXN1bHQsIERhdGFzdG9yZUlELFxuICAgIEFic3RyYWN0RGF0YXN0b3JlLFxuICAgIEVycm9yTGlzdGVuZXIsIEJpbmFyeUZpbGVEYXRhXG59IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7RGlyZWN0b3JpZXN9IGZyb20gJy4vRGlyZWN0b3JpZXMnO1xuaW1wb3J0IHtEb2NNZXRhRmlsZVJlZiwgRG9jTWV0YVJlZn0gZnJvbSAnLi9Eb2NNZXRhUmVmJztcbmltcG9ydCB7RGVsZXRlUmVzdWx0fSBmcm9tICcuL0RhdGFzdG9yZSc7XG5pbXBvcnQge1ByZWNvbmRpdGlvbnN9IGZyb20gJy4uL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtCYWNrZW5kfSBmcm9tICcuL0JhY2tlbmQnO1xuaW1wb3J0IHtEb2NGaWxlTWV0YX0gZnJvbSAnLi9Eb2NGaWxlTWV0YSc7XG5pbXBvcnQge09wdGlvbmFsfSBmcm9tICcuLi91dGlsL3RzL09wdGlvbmFsJztcbmltcG9ydCB7SURvY0luZm8sIERvY0luZm99IGZyb20gJy4uL21ldGFkYXRhL0RvY0luZm8nO1xuaW1wb3J0IHtEYXRhc3RvcmVNdXRhdGlvbn0gZnJvbSAnLi9EYXRhc3RvcmVNdXRhdGlvbic7XG5pbXBvcnQge0RhdGFzdG9yZXN9IGZyb20gJy4vRGF0YXN0b3Jlcyc7XG5pbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJzfSBmcm9tICcuL1BlcnNpc3RlbmNlTGF5ZXJzJztcbmltcG9ydCB7UGVyc2lzdGVuY2VMYXllciwgUGVyc2lzdGVuY2VMYXllcklEfSBmcm9tICcuL1BlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtEb2NNZXRhfSBmcm9tICcuLi9tZXRhZGF0YS9Eb2NNZXRhJztcbmltcG9ydCB7RmlsZUhhbmRsZX0gZnJvbSAnLi4vdXRpbC9GaWxlcyc7XG5cbi8qKlxuICogQSBQZXJzaXN0ZW5jZUxheWVyIHRoYXQganVzdCBmb3J3YXJkcyBldmVudHMgdG8gdGhlIGdpdmVuIGRlbGVnYXRlLlxuICovXG5leHBvcnQgY2xhc3MgRGVsZWdhdGVkUGVyc2lzdGVuY2VMYXllciBpbXBsZW1lbnRzIFBlcnNpc3RlbmNlTGF5ZXIge1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGlkOiBQZXJzaXN0ZW5jZUxheWVySUQgPSAnZGVsZWdhdGVkJztcblxuICAgIHB1YmxpYyByZWFkb25seSBkYXRhc3RvcmU6IERhdGFzdG9yZTtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGVsZWdhdGU6IFBlcnNpc3RlbmNlTGF5ZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkZWxlZ2F0ZTogUGVyc2lzdGVuY2VMYXllcikge1xuICAgICAgICB0aGlzLmRlbGVnYXRlID0gZGVsZWdhdGU7XG4gICAgICAgIHRoaXMuZGF0YXN0b3JlID0gZGVsZWdhdGUuZGF0YXN0b3JlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGREb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyKGRvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXI6IERvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS5hZGREb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyKGRvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjb250YWlucyhmaW5nZXJwcmludDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLmNvbnRhaW5zKGZpbmdlcnByaW50KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY29udGFpbnNGaWxlKGJhY2tlbmQ6IEJhY2tlbmQsIHJlZjogRmlsZVJlZik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZS5jb250YWluc0ZpbGUoYmFja2VuZCwgcmVmKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZGVhY3RpdmF0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUuZGVhY3RpdmF0ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBkZWxldGUoZG9jTWV0YUZpbGVSZWY6IERvY01ldGFGaWxlUmVmLCBkYXRhc3RvcmVNdXRhdGlvbj86IERhdGFzdG9yZU11dGF0aW9uPGJvb2xlYW4+KTogUHJvbWlzZTxEZWxldGVSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUuZGVsZXRlKGRvY01ldGFGaWxlUmVmLCBkYXRhc3RvcmVNdXRhdGlvbik7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGdldERvY01ldGEoZmluZ2VycHJpbnQ6IHN0cmluZyk6IFByb21pc2U8RG9jTWV0YSB8IHVuZGVmaW5lZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZS5nZXREb2NNZXRhKGZpbmdlcnByaW50KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0RG9jTWV0YVJlZnMoKTogUHJvbWlzZTxEb2NNZXRhUmVmW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUuZ2V0RG9jTWV0YVJlZnMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0RmlsZShiYWNrZW5kOiBCYWNrZW5kLCByZWY6IEZpbGVSZWYpOiBQcm9taXNlPE9wdGlvbmFsPERvY0ZpbGVNZXRhPj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZS5nZXRGaWxlKGJhY2tlbmQsIHJlZik7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGluaXQoZXJyb3JMaXN0ZW5lcj86IEVycm9yTGlzdGVuZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUuaW5pdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzbmFwc2hvdChsaXN0ZW5lcjogRG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lciwgZXJyb3JMaXN0ZW5lcj86IEVycm9yTGlzdGVuZXIpOiBQcm9taXNlPFNuYXBzaG90UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLnNuYXBzaG90KGxpc3RlbmVyLCBlcnJvckxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY3JlYXRlQmFja3VwKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZS5jcmVhdGVCYWNrdXAoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc3RvcCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUuc3RvcCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyB3cml0ZShmaW5nZXJwcmludDogc3RyaW5nLCBkb2NNZXRhOiBEb2NNZXRhLCBkYXRhc3RvcmVNdXRhdGlvbj86IERhdGFzdG9yZU11dGF0aW9uPERvY0luZm8+KTogUHJvbWlzZTxEb2NJbmZvPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLndyaXRlKGZpbmdlcnByaW50LCBkb2NNZXRhLCBkYXRhc3RvcmVNdXRhdGlvbik7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHdyaXRlRG9jTWV0YShkb2NNZXRhOiBEb2NNZXRhLCBkYXRhc3RvcmVNdXRhdGlvbj86IERhdGFzdG9yZU11dGF0aW9uPERvY0luZm8+KTogUHJvbWlzZTxEb2NJbmZvPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLndyaXRlRG9jTWV0YShkb2NNZXRhLCBkYXRhc3RvcmVNdXRhdGlvbik7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHN5bmNocm9uaXplRG9jcyguLi5kb2NNZXRhUmVmczogRG9jTWV0YVJlZltdKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLnN5bmNocm9uaXplRG9jcyguLi5kb2NNZXRhUmVmcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHdyaXRlRmlsZShiYWNrZW5kOiBCYWNrZW5kLCByZWY6IEZpbGVSZWYsIGRhdGE6IEJpbmFyeUZpbGVEYXRhLCBtZXRhPzogRmlsZU1ldGEpOiBQcm9taXNlPERvY0ZpbGVNZXRhPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLndyaXRlRmlsZShiYWNrZW5kLCByZWYsIGRhdGEsIG1ldGEpO1xuICAgIH1cblxufVxuIl19