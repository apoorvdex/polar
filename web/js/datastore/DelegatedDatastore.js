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
const Datastore_1 = require("./Datastore");
const Directories_1 = require("./Directories");
const Preconditions_1 = require("../Preconditions");
class DelegatedDatastore extends Datastore_1.AbstractDatastore {
    constructor(delegate) {
        super();
        Preconditions_1.Preconditions.assertPresent(delegate, 'delegate');
        this.id = 'delegated:' + delegate.id;
        this.delegate = delegate;
        this.directories = new Directories_1.Directories();
        this.filesDir = this.directories.filesDir;
    }
    contains(fingerprint) {
        return this.delegate.contains(fingerprint);
    }
    delete(docMetaFileRef) {
        return this.delegate.delete(docMetaFileRef);
    }
    writeFile(backend, ref, data, meta = {}) {
        return this.delegate.writeFile(backend, ref, data, meta);
    }
    containsFile(backend, ref) {
        return this.delegate.containsFile(backend, ref);
    }
    getFile(backend, ref) {
        return this.delegate.getFile(backend, ref);
    }
    deleteFile(backend, ref) {
        return this.delegate.deleteFile(backend, ref);
    }
    getDocMeta(fingerprint) {
        return this.delegate.getDocMeta(fingerprint);
    }
    getDocMetaRefs() {
        return this.delegate.getDocMetaRefs();
    }
    snapshot(listener) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delegate.snapshot(listener);
        });
    }
    createBackup() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delegate.createBackup();
        });
    }
    init() {
        return this.delegate.init();
    }
    stop() {
        return this.delegate.stop();
    }
    write(fingerprint, data, docInfo, datastoreMutation) {
        return this.delegate.write(fingerprint, data, docInfo, datastoreMutation);
    }
    synchronizeDocs(...docMetaRefs) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delegate.synchronizeDocs(...docMetaRefs);
        });
    }
    addDocMetaSnapshotEventListener(docMetaSnapshotEventListener) {
        this.delegate.addDocMetaSnapshotEventListener(docMetaSnapshotEventListener);
    }
    overview() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.delegate.overview();
        });
    }
    getPrefs() {
        return this.delegate.getPrefs();
    }
}
exports.DelegatedDatastore = DelegatedDatastore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVsZWdhdGVkRGF0YXN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRGVsZWdhdGVkRGF0YXN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FJcUI7QUFDckIsK0NBQTBDO0FBRzFDLG9EQUErQztBQVcvQyxNQUFhLGtCQUFtQixTQUFRLDZCQUFpQjtJQVVyRCxZQUFZLFFBQW1CO1FBQzNCLEtBQUssRUFBRSxDQUFDO1FBQ1IsNkJBQWEsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxFQUFFLEdBQUcsWUFBWSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO0lBRTlDLENBQUM7SUFFTSxRQUFRLENBQUMsV0FBbUI7UUFDL0IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRU0sTUFBTSxDQUFDLGNBQThCO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVNLFNBQVMsQ0FBQyxPQUFnQixFQUFFLEdBQVksRUFBRSxJQUFvQixFQUFFLE9BQWlCLEVBQUU7UUFDdEYsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRU0sWUFBWSxDQUFDLE9BQWdCLEVBQUUsR0FBWTtRQUM5QyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRU0sT0FBTyxDQUFDLE9BQWdCLEVBQUUsR0FBWTtRQUN6QyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRU0sVUFBVSxDQUFDLE9BQWdCLEVBQUUsR0FBWTtRQUM1QyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU0sVUFBVSxDQUFDLFdBQW1CO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVNLGNBQWM7UUFDakIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFFWSxRQUFRLENBQUMsUUFBc0M7O1lBQ3hELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUMsQ0FBQztLQUFBO0lBRVksWUFBWTs7WUFDckIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hDLENBQUM7S0FBQTtJQUVNLElBQUk7UUFDUCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVNLElBQUk7UUFDUCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVNLEtBQUssQ0FBQyxXQUFtQixFQUFFLElBQVMsRUFBRSxPQUFpQixFQUFFLGlCQUE4QztRQUMxRyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVZLGVBQWUsQ0FBQyxHQUFHLFdBQXlCOztZQUNyRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUM7UUFDekQsQ0FBQztLQUFBO0lBRU0sK0JBQStCLENBQUMsNEJBQTBEO1FBQzdGLElBQUksQ0FBQyxRQUFRLENBQUMsK0JBQStCLENBQUMsNEJBQTRCLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRVksUUFBUTs7WUFDakIsT0FBTyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDMUMsQ0FBQztLQUFBO0lBRU0sUUFBUTtRQUNYLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0NBRUo7QUF4RkQsZ0RBd0ZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBEYXRhc3RvcmUsIERvY01ldGFTbmFwc2hvdEV2ZW50LCBGaWxlTWV0YSwgRmlsZVJlZiwgSW5pdFJlc3VsdCxcbiAgICBEb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyLCBTbmFwc2hvdFJlc3VsdCwgRGF0YXN0b3JlSUQsXG4gICAgQWJzdHJhY3REYXRhc3RvcmUsIEJpbmFyeUZpbGVEYXRhLCBEYXRhc3RvcmVPdmVydmlldywgUHJlZnNQcm92aWRlclxufSBmcm9tICcuL0RhdGFzdG9yZSc7XG5pbXBvcnQge0RpcmVjdG9yaWVzfSBmcm9tICcuL0RpcmVjdG9yaWVzJztcbmltcG9ydCB7RG9jTWV0YUZpbGVSZWYsIERvY01ldGFSZWZ9IGZyb20gJy4vRG9jTWV0YVJlZic7XG5pbXBvcnQge0RlbGV0ZVJlc3VsdH0gZnJvbSAnLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtQcmVjb25kaXRpb25zfSBmcm9tICcuLi9QcmVjb25kaXRpb25zJztcbmltcG9ydCB7QmFja2VuZH0gZnJvbSAnLi9CYWNrZW5kJztcbmltcG9ydCB7RG9jRmlsZU1ldGF9IGZyb20gJy4vRG9jRmlsZU1ldGEnO1xuaW1wb3J0IHtPcHRpb25hbH0gZnJvbSAnLi4vdXRpbC90cy9PcHRpb25hbCc7XG5pbXBvcnQge0lEb2NJbmZvfSBmcm9tICcuLi9tZXRhZGF0YS9Eb2NJbmZvJztcbmltcG9ydCB7RGF0YXN0b3JlTXV0YXRpb259IGZyb20gJy4vRGF0YXN0b3JlTXV0YXRpb24nO1xuaW1wb3J0IHtEYXRhc3RvcmVzfSBmcm9tICcuL0RhdGFzdG9yZXMnO1xuXG4vKipcbiAqIEEgZGF0YXN0b3JlIHRoYXQganVzdCBmb3J3YXJkcyBldmVudHMgdG8gdGhlIGdpdmVuIGRlbGVnYXRlLlxuICovXG5leHBvcnQgY2xhc3MgRGVsZWdhdGVkRGF0YXN0b3JlIGV4dGVuZHMgQWJzdHJhY3REYXRhc3RvcmUgaW1wbGVtZW50cyBEYXRhc3RvcmUge1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGlkOiBEYXRhc3RvcmVJRDtcblxuICAgIHB1YmxpYyByZWFkb25seSBkaXJlY3RvcmllczogRGlyZWN0b3JpZXM7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgZmlsZXNEaXI6IHN0cmluZztcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGVsZWdhdGU6IERhdGFzdG9yZTtcblxuICAgIGNvbnN0cnVjdG9yKGRlbGVnYXRlOiBEYXRhc3RvcmUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnRQcmVzZW50KGRlbGVnYXRlLCAnZGVsZWdhdGUnKTtcbiAgICAgICAgdGhpcy5pZCA9ICdkZWxlZ2F0ZWQ6JyArIGRlbGVnYXRlLmlkO1xuICAgICAgICB0aGlzLmRlbGVnYXRlID0gZGVsZWdhdGU7XG4gICAgICAgIHRoaXMuZGlyZWN0b3JpZXMgPSBuZXcgRGlyZWN0b3JpZXMoKTtcbiAgICAgICAgdGhpcy5maWxlc0RpciA9IHRoaXMuZGlyZWN0b3JpZXMuZmlsZXNEaXI7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgY29udGFpbnMoZmluZ2VycHJpbnQ6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZS5jb250YWlucyhmaW5nZXJwcmludCk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlbGV0ZShkb2NNZXRhRmlsZVJlZjogRG9jTWV0YUZpbGVSZWYpOiBQcm9taXNlPFJlYWRvbmx5PERlbGV0ZVJlc3VsdD4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUuZGVsZXRlKGRvY01ldGFGaWxlUmVmKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgd3JpdGVGaWxlKGJhY2tlbmQ6IEJhY2tlbmQsIHJlZjogRmlsZVJlZiwgZGF0YTogQmluYXJ5RmlsZURhdGEsIG1ldGE6IEZpbGVNZXRhID0ge30pOiBQcm9taXNlPERvY0ZpbGVNZXRhPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLndyaXRlRmlsZShiYWNrZW5kLCByZWYsIGRhdGEsIG1ldGEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb250YWluc0ZpbGUoYmFja2VuZDogQmFja2VuZCwgcmVmOiBGaWxlUmVmKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLmNvbnRhaW5zRmlsZShiYWNrZW5kLCByZWYpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRGaWxlKGJhY2tlbmQ6IEJhY2tlbmQsIHJlZjogRmlsZVJlZik6IFByb21pc2U8T3B0aW9uYWw8RG9jRmlsZU1ldGE+PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLmdldEZpbGUoYmFja2VuZCwgcmVmKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVsZXRlRmlsZShiYWNrZW5kOiBCYWNrZW5kLCByZWY6IEZpbGVSZWYpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUuZGVsZXRlRmlsZShiYWNrZW5kLCByZWYpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXREb2NNZXRhKGZpbmdlcnByaW50OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUuZ2V0RG9jTWV0YShmaW5nZXJwcmludCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldERvY01ldGFSZWZzKCk6IFByb21pc2U8RG9jTWV0YVJlZltdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLmdldERvY01ldGFSZWZzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHNuYXBzaG90KGxpc3RlbmVyOiBEb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyKTogUHJvbWlzZTxTbmFwc2hvdFJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZS5zbmFwc2hvdChsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGNyZWF0ZUJhY2t1cCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUuY3JlYXRlQmFja3VwKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGluaXQoKTogUHJvbWlzZTxJbml0UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLmluaXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RvcCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUuc3RvcCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyB3cml0ZShmaW5nZXJwcmludDogc3RyaW5nLCBkYXRhOiBhbnksIGRvY0luZm86IElEb2NJbmZvLCBkYXRhc3RvcmVNdXRhdGlvbj86IERhdGFzdG9yZU11dGF0aW9uPGJvb2xlYW4+KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLndyaXRlKGZpbmdlcnByaW50LCBkYXRhLCBkb2NJbmZvLCBkYXRhc3RvcmVNdXRhdGlvbik7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHN5bmNocm9uaXplRG9jcyguLi5kb2NNZXRhUmVmczogRG9jTWV0YVJlZltdKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLnN5bmNocm9uaXplRG9jcyguLi5kb2NNZXRhUmVmcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZERvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIoZG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcjogRG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcik6IHZvaWQge1xuICAgICAgICB0aGlzLmRlbGVnYXRlLmFkZERvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIoZG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIG92ZXJ2aWV3KCk6IFByb21pc2U8RGF0YXN0b3JlT3ZlcnZpZXcgfCB1bmRlZmluZWQ+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZGVsZWdhdGUub3ZlcnZpZXcoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UHJlZnMoKTogUHJlZnNQcm92aWRlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLmdldFByZWZzKCk7XG4gICAgfVxuXG59XG5cbiJdfQ==