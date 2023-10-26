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
const DocMetaComparisonIndex_1 = require("./DocMetaComparisonIndex");
const UUIDs_1 = require("../metadata/UUIDs");
const DelegatedListenablePersistenceLayer_1 = require("./DelegatedListenablePersistenceLayer");
class LazyWriteListenablePersistenceLayer extends DelegatedListenablePersistenceLayer_1.DelegatedListenablePersistenceLayer {
    constructor(delegate) {
        super(delegate);
        this.index = new DocMetaComparisonIndex_1.DocMetaComparisonIndex();
        this.nrWrites = 0;
    }
    getDocMeta(fingerprint) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            const docMeta = yield _super("getDocMeta").call(this, fingerprint);
            if (docMeta) {
                this.index.updateUsingDocInfo(docMeta.docInfo);
            }
            return docMeta;
        });
    }
    writeDocMeta(docMeta, datastoreMutation) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            return this.handleWrite(docMeta.docInfo, () => __awaiter(this, void 0, void 0, function* () { return _super("writeDocMeta").call(this, docMeta, datastoreMutation); }));
        });
    }
    write(fingerprint, docMeta, datastoreMutation) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            return this.handleWrite(docMeta.docInfo, () => __awaiter(this, void 0, void 0, function* () { return _super("write").call(this, fingerprint, docMeta, datastoreMutation); }));
        });
    }
    handleWrite(docInfo, completion) {
        return __awaiter(this, void 0, void 0, function* () {
            let doUpdated = false;
            if (!this.index.contains(docInfo.fingerprint)) {
                doUpdated = true;
            }
            const docComparison = this.index.get(docInfo.fingerprint);
            if (!docComparison) {
                doUpdated = true;
            }
            if (docComparison && UUIDs_1.UUIDs.compare(docComparison.uuid, docInfo.uuid) < 0) {
                doUpdated = true;
            }
            if (doUpdated) {
                this.index.updateUsingDocInfo(docInfo);
                ++this.nrWrites;
                return yield completion();
            }
            else {
                return docInfo;
            }
        });
    }
    delete(docMetaFileRef, datastoreMutation) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            this.index.remove(docMetaFileRef.fingerprint);
            return _super("delete").call(this, docMetaFileRef, datastoreMutation);
        });
    }
}
exports.LazyWriteListenablePersistenceLayer = LazyWriteListenablePersistenceLayer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGF6eVdyaXRlTGlzdGVuYWJsZVBlcnNpc3RlbmNlTGF5ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJMYXp5V3JpdGVMaXN0ZW5hYmxlUGVyc2lzdGVuY2VMYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBSUEscUVBQWdFO0FBQ2hFLDZDQUF3QztBQUt4QywrRkFBMEY7QUFLMUYsTUFBYSxtQ0FBb0MsU0FBUSx5RUFBbUM7SUFNeEYsWUFBWSxRQUFvQztRQUM1QyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFMSCxVQUFLLEdBQUcsSUFBSSwrQ0FBc0IsRUFBRSxDQUFDO1FBRS9DLGFBQVEsR0FBVyxDQUFDLENBQUM7SUFJNUIsQ0FBQztJQUVZLFVBQVUsQ0FBQyxXQUFtQjs7O1lBRXZDLE1BQU0sT0FBTyxHQUFHLE1BQU0sb0JBQWdCLFlBQUMsV0FBVyxDQUFDLENBQUM7WUFFcEQsSUFBSSxPQUFPLEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDbEQ7WUFFRCxPQUFPLE9BQU8sQ0FBQztRQUNuQixDQUFDO0tBQUE7SUFFWSxZQUFZLENBQUMsT0FBZ0IsRUFBRSxpQkFBOEM7OztZQUN0RixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFTLEVBQUUsZ0RBQUMsT0FBQSxzQkFBa0IsWUFBQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUMsR0FBQSxDQUFDLENBQUM7UUFDekcsQ0FBQztLQUFBO0lBRVksS0FBSyxDQUFDLFdBQW1CLEVBQUUsT0FBZ0IsRUFBRSxpQkFBOEM7OztZQUNwRyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFTLEVBQUUsZ0RBQUMsT0FBQSxlQUFXLFlBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBQyxHQUFBLENBQUMsQ0FBQztRQUMvRyxDQUFDO0tBQUE7SUFFYSxXQUFXLENBQUksT0FBZ0IsRUFBRSxVQUFrQzs7WUFFN0UsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBRXRCLElBQUksQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQzVDLFNBQVMsR0FBRyxJQUFJLENBQUM7YUFDcEI7WUFFRCxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFMUQsSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDaEIsU0FBUyxHQUFHLElBQUksQ0FBQzthQUNwQjtZQUVELElBQUksYUFBYSxJQUFJLGFBQUssQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN0RSxTQUFTLEdBQUcsSUFBSSxDQUFDO2FBQ3BCO1lBRUQsSUFBSSxTQUFTLEVBQUU7Z0JBR1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDdkMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNoQixPQUFPLE1BQU0sVUFBVSxFQUFFLENBQUM7YUFHN0I7aUJBQU07Z0JBQ0gsT0FBTyxPQUFPLENBQUM7YUFDbEI7UUFFTCxDQUFDO0tBQUE7SUFFWSxNQUFNLENBQUMsY0FBOEIsRUFBRSxpQkFBOEM7OztZQUM5RixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDOUMsT0FBTyxnQkFBWSxZQUFDLGNBQWMsRUFBRSxpQkFBaUIsRUFBRTtRQUMzRCxDQUFDO0tBQUE7Q0FFSjtBQWxFRCxrRkFrRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RhdGFzdG9yZSwgRGF0YXN0b3JlSUQsIERlbGV0ZVJlc3VsdH0gZnJvbSAnLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtJRG9jSW5mbywgRG9jSW5mb30gZnJvbSAnLi4vbWV0YWRhdGEvRG9jSW5mbyc7XG5pbXBvcnQge0RhdGFzdG9yZU11dGF0aW9ufSBmcm9tICcuL0RhdGFzdG9yZU11dGF0aW9uJztcbmltcG9ydCB7RG9jTWV0YUZpbGVSZWYsIERvY01ldGFSZWZ9IGZyb20gJy4vRG9jTWV0YVJlZic7XG5pbXBvcnQge0RvY01ldGFDb21wYXJpc29uSW5kZXh9IGZyb20gJy4vRG9jTWV0YUNvbXBhcmlzb25JbmRleCc7XG5pbXBvcnQge1VVSURzfSBmcm9tICcuLi9tZXRhZGF0YS9VVUlEcyc7XG5pbXBvcnQge0RlbGVnYXRlZFBlcnNpc3RlbmNlTGF5ZXJ9IGZyb20gJy4vRGVsZWdhdGVkUGVyc2lzdGVuY2VMYXllcic7XG5pbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJ9IGZyb20gJy4vUGVyc2lzdGVuY2VMYXllcic7XG5pbXBvcnQge0RvY01ldGF9IGZyb20gJy4uL21ldGFkYXRhL0RvY01ldGEnO1xuaW1wb3J0IHtBc3luY0Z1bmN0aW9ufSBmcm9tICcuLi91dGlsL0FzeW5jV29ya1F1ZXVlJztcbmltcG9ydCB7RGVsZWdhdGVkTGlzdGVuYWJsZVBlcnNpc3RlbmNlTGF5ZXJ9IGZyb20gJy4vRGVsZWdhdGVkTGlzdGVuYWJsZVBlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtMaXN0ZW5hYmxlUGVyc2lzdGVuY2VMYXllcn0gZnJvbSAnLi9MaXN0ZW5hYmxlUGVyc2lzdGVuY2VMYXllcic7XG5cbi8qKlxuICovXG5leHBvcnQgY2xhc3MgTGF6eVdyaXRlTGlzdGVuYWJsZVBlcnNpc3RlbmNlTGF5ZXIgZXh0ZW5kcyBEZWxlZ2F0ZWRMaXN0ZW5hYmxlUGVyc2lzdGVuY2VMYXllciB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGluZGV4ID0gbmV3IERvY01ldGFDb21wYXJpc29uSW5kZXgoKTtcblxuICAgIHB1YmxpYyBucldyaXRlczogbnVtYmVyID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKGRlbGVnYXRlOiBMaXN0ZW5hYmxlUGVyc2lzdGVuY2VMYXllcikge1xuICAgICAgICBzdXBlcihkZWxlZ2F0ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGdldERvY01ldGEoZmluZ2VycHJpbnQ6IHN0cmluZyk6IFByb21pc2U8RG9jTWV0YSB8IHVuZGVmaW5lZD4ge1xuXG4gICAgICAgIGNvbnN0IGRvY01ldGEgPSBhd2FpdCBzdXBlci5nZXREb2NNZXRhKGZpbmdlcnByaW50KTtcblxuICAgICAgICBpZiAoZG9jTWV0YSkge1xuICAgICAgICAgICAgdGhpcy5pbmRleC51cGRhdGVVc2luZ0RvY0luZm8oZG9jTWV0YS5kb2NJbmZvKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkb2NNZXRhO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyB3cml0ZURvY01ldGEoZG9jTWV0YTogRG9jTWV0YSwgZGF0YXN0b3JlTXV0YXRpb24/OiBEYXRhc3RvcmVNdXRhdGlvbjxEb2NJbmZvPik6IFByb21pc2U8RG9jSW5mbz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVXcml0ZShkb2NNZXRhLmRvY0luZm8sIGFzeW5jICgpID0+IHN1cGVyLndyaXRlRG9jTWV0YShkb2NNZXRhLCBkYXRhc3RvcmVNdXRhdGlvbikpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyB3cml0ZShmaW5nZXJwcmludDogc3RyaW5nLCBkb2NNZXRhOiBEb2NNZXRhLCBkYXRhc3RvcmVNdXRhdGlvbj86IERhdGFzdG9yZU11dGF0aW9uPERvY0luZm8+KTogUHJvbWlzZTxEb2NJbmZvPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVdyaXRlKGRvY01ldGEuZG9jSW5mbywgYXN5bmMgKCkgPT4gc3VwZXIud3JpdGUoZmluZ2VycHJpbnQsIGRvY01ldGEsIGRhdGFzdG9yZU11dGF0aW9uKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBoYW5kbGVXcml0ZTxUPihkb2NJbmZvOiBEb2NJbmZvLCBjb21wbGV0aW9uOiAoKSA9PiBQcm9taXNlPERvY0luZm8+KTogUHJvbWlzZTxEb2NJbmZvPiB7XG5cbiAgICAgICAgbGV0IGRvVXBkYXRlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmICghIHRoaXMuaW5kZXguY29udGFpbnMoZG9jSW5mby5maW5nZXJwcmludCkpIHtcbiAgICAgICAgICAgIGRvVXBkYXRlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkb2NDb21wYXJpc29uID0gdGhpcy5pbmRleC5nZXQoZG9jSW5mby5maW5nZXJwcmludCk7XG5cbiAgICAgICAgaWYgKCFkb2NDb21wYXJpc29uKSB7XG4gICAgICAgICAgICBkb1VwZGF0ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRvY0NvbXBhcmlzb24gJiYgVVVJRHMuY29tcGFyZShkb2NDb21wYXJpc29uLnV1aWQsIGRvY0luZm8udXVpZCkgPCAwKSB7XG4gICAgICAgICAgICBkb1VwZGF0ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRvVXBkYXRlZCkge1xuXG4gICAgICAgICAgICAvLyB3aGVuIHRoZSBkb2MgaXMgY3JlYXRlZCBhbmQgaXQncyBub3QgaW4gdGhlIGluZGV4LlxuICAgICAgICAgICAgdGhpcy5pbmRleC51cGRhdGVVc2luZ0RvY0luZm8oZG9jSW5mbyk7XG4gICAgICAgICAgICArK3RoaXMubnJXcml0ZXM7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgY29tcGxldGlvbigpO1xuXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkb2NJbmZvO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZGVsZXRlKGRvY01ldGFGaWxlUmVmOiBEb2NNZXRhRmlsZVJlZiwgZGF0YXN0b3JlTXV0YXRpb24/OiBEYXRhc3RvcmVNdXRhdGlvbjxib29sZWFuPik6IFByb21pc2U8RGVsZXRlUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuaW5kZXgucmVtb3ZlKGRvY01ldGFGaWxlUmVmLmZpbmdlcnByaW50KTtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmRlbGV0ZShkb2NNZXRhRmlsZVJlZiwgZGF0YXN0b3JlTXV0YXRpb24pO1xuICAgIH1cblxufVxuIl19