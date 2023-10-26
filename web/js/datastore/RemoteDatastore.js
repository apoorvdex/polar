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
const Datastores_1 = require("./Datastores");
const DelegatedDatastore_1 = require("./DelegatedDatastore");
const SimpleReactor_1 = require("../reactor/SimpleReactor");
const Logger_1 = require("../logger/Logger");
const log = Logger_1.Logger.create();
class RemoteDatastore extends DelegatedDatastore_1.DelegatedDatastore {
    constructor(delegate) {
        super(delegate);
        this.docMetaSnapshotEventDispatcher = new SimpleReactor_1.SimpleReactor();
        this.id = 'remote:' + delegate.id;
    }
    snapshot(listener) {
        return __awaiter(this, void 0, void 0, function* () {
            return Datastores_1.Datastores.createCommittedSnapshot(this, listener);
        });
    }
    init(errorListener) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            yield _super("init").call(this);
            if (this.docMetaSnapshotEventDispatcher.size() > 0) {
                this.snapshot((event) => __awaiter(this, void 0, void 0, function* () { return this.docMetaSnapshotEventDispatcher.dispatchEvent(event); }))
                    .catch(err => log.error(err));
            }
            return {};
        });
    }
    addDocMetaSnapshotEventListener(docMetaSnapshotEventListener) {
        this.docMetaSnapshotEventDispatcher.addEventListener(docMetaSnapshotEventListener);
    }
}
exports.RemoteDatastore = RemoteDatastore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVtb3RlRGF0YXN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUmVtb3RlRGF0YXN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFVQSw2Q0FBd0M7QUFDeEMsNkRBQXdEO0FBQ3hELDREQUF5RTtBQUN6RSw2Q0FBd0M7QUFFeEMsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBTTVCLE1BQWEsZUFBZ0IsU0FBUSx1Q0FBa0I7SUFNbkQsWUFBWSxRQUFtQjtRQUMzQixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFMSCxtQ0FBOEIsR0FBMkMsSUFBSSw2QkFBYSxFQUFFLENBQUM7UUFNMUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxTQUFTLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRVksUUFBUSxDQUFDLFFBQXNDOztZQUN4RCxPQUFPLHVCQUFVLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzlELENBQUM7S0FBQTtJQUtZLElBQUksQ0FBQyxhQUE2Qjs7O1lBRTNDLE1BQU0sY0FBVSxXQUFFLENBQUM7WUFFbkIsSUFBSSxJQUFJLENBQUMsOEJBQThCLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFO2dCQUdoRCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQU0sS0FBSyxFQUFDLEVBQUUsZ0RBQUMsT0FBQSxJQUFJLENBQUMsOEJBQThCLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFBLEdBQUEsQ0FBQztxQkFDakYsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBRXJDO1lBRUQsT0FBTyxFQUFFLENBQUM7UUFDZCxDQUFDO0tBQUE7SUFPTSwrQkFBK0IsQ0FBQyw0QkFBMEQ7UUFDN0YsSUFBSSxDQUFDLDhCQUE4QixDQUFDLGdCQUFnQixDQUFDLDRCQUE0QixDQUFDLENBQUM7SUFDdkYsQ0FBQztDQUVKO0FBMUNELDBDQTBDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGF0YXN0b3JlLCBEb2NNZXRhU25hcHNob3RFdmVudCwgRmlsZU1ldGEsIEZpbGVSZWYsIEluaXRSZXN1bHQsIERvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIsIFNuYXBzaG90UmVzdWx0LCBFcnJvckxpc3RlbmVyLCBEYXRhc3RvcmVJRCwgRGF0YXN0b3JlT3ZlcnZpZXd9IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7RGlyZWN0b3JpZXN9IGZyb20gJy4vRGlyZWN0b3JpZXMnO1xuaW1wb3J0IHtEb2NNZXRhRmlsZVJlZiwgRG9jTWV0YVJlZn0gZnJvbSAnLi9Eb2NNZXRhUmVmJztcbmltcG9ydCB7RGVsZXRlUmVzdWx0fSBmcm9tICcuL0RhdGFzdG9yZSc7XG5pbXBvcnQge1ByZWNvbmRpdGlvbnN9IGZyb20gJy4uL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtCYWNrZW5kfSBmcm9tICcuL0JhY2tlbmQnO1xuaW1wb3J0IHtEb2NGaWxlTWV0YX0gZnJvbSAnLi9Eb2NGaWxlTWV0YSc7XG5pbXBvcnQge09wdGlvbmFsfSBmcm9tICcuLi91dGlsL3RzL09wdGlvbmFsJztcbmltcG9ydCB7SURvY0luZm99IGZyb20gJy4uL21ldGFkYXRhL0RvY0luZm8nO1xuaW1wb3J0IHtEYXRhc3RvcmVNdXRhdGlvbn0gZnJvbSAnLi9EYXRhc3RvcmVNdXRhdGlvbic7XG5pbXBvcnQge0RhdGFzdG9yZXN9IGZyb20gJy4vRGF0YXN0b3Jlcyc7XG5pbXBvcnQge0RlbGVnYXRlZERhdGFzdG9yZX0gZnJvbSAnLi9EZWxlZ2F0ZWREYXRhc3RvcmUnO1xuaW1wb3J0IHtJRXZlbnREaXNwYXRjaGVyLCBTaW1wbGVSZWFjdG9yfSBmcm9tICcuLi9yZWFjdG9yL1NpbXBsZVJlYWN0b3InO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uL2xvZ2dlci9Mb2dnZXInO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbi8qKlxuICogQSByZW1vdGUgZGF0YXN0b3JlIGJ1ZyBvbmUgdGhhdCBoYXMgYSBuYXRpdmUgaW1wbGVtZW50YXRpb24gb2Ygc25hcHNob3RcbiAqIHNvIHRoYXQgaXQgb3BlcmF0ZXMgaW4gdGhlIHByb3BlciB0aHJlYWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBSZW1vdGVEYXRhc3RvcmUgZXh0ZW5kcyBEZWxlZ2F0ZWREYXRhc3RvcmUge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBkb2NNZXRhU25hcHNob3RFdmVudERpc3BhdGNoZXI6IElFdmVudERpc3BhdGNoZXI8RG9jTWV0YVNuYXBzaG90RXZlbnQ+ID0gbmV3IFNpbXBsZVJlYWN0b3IoKTtcblxuICAgIHB1YmxpYyByZWFkb25seSBpZDogRGF0YXN0b3JlSUQ7XG5cbiAgICBjb25zdHJ1Y3RvcihkZWxlZ2F0ZTogRGF0YXN0b3JlKSB7XG4gICAgICAgIHN1cGVyKGRlbGVnYXRlKTtcbiAgICAgICAgdGhpcy5pZCA9ICdyZW1vdGU6JyArIGRlbGVnYXRlLmlkO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzbmFwc2hvdChsaXN0ZW5lcjogRG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcik6IFByb21pc2U8U25hcHNob3RSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIERhdGFzdG9yZXMuY3JlYXRlQ29tbWl0dGVkU25hcHNob3QodGhpcywgbGlzdGVuZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXQgdGhlIGRhdGFzdG9yZSwgcG90ZW50aWFsbHkgcmVhZGluZyBmaWxlcyBvZiBkaXNrLCB0aGUgbmV0d29yaywgZXRjLlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBpbml0KGVycm9yTGlzdGVuZXI/OiBFcnJvckxpc3RlbmVyKTogUHJvbWlzZTxJbml0UmVzdWx0PiB7XG5cbiAgICAgICAgYXdhaXQgc3VwZXIuaW5pdCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmRvY01ldGFTbmFwc2hvdEV2ZW50RGlzcGF0Y2hlci5zaXplKCkgPiAwKSB7XG5cbiAgICAgICAgICAgIC8vIHBlcmZvcm0gYSBzbmFwc2hvdCBpZiBhIGxpc3RlbmVyIHdhcyBhdHRhY2hlZC4uLlxuICAgICAgICAgICAgdGhpcy5zbmFwc2hvdChhc3luYyBldmVudCA9PiB0aGlzLmRvY01ldGFTbmFwc2hvdEV2ZW50RGlzcGF0Y2hlci5kaXNwYXRjaEV2ZW50KGV2ZW50KSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihlcnIpKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIGV2ZW50IGxpc3RlbmVyIHRvIGxpc3RlbiB0byB0aGUgZGF0YXN0b3JlIHdoaWxlIG9wZXJhdGluZyBvbiBib3RoXG4gICAgICogdGhlIHVuZGVybHlpbmcgZGF0YXN0b3JlcyB0byBkaXNjb3ZlciB3aGVuIGRvY3VtZW50cyBhcmUgZGlzY292ZXJlZFxuICAgICAqIHdpdGhvdXQgaGF2aW5nIHRvIHJlLXJlYWQgdGhlIGRhdGFzdG9yZSBhZnRlciBpdCdzIGJlZW4gaW5pdGlhbGl6ZWQuXG4gICAgICovXG4gICAgcHVibGljIGFkZERvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIoZG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcjogRG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcik6IHZvaWQge1xuICAgICAgICB0aGlzLmRvY01ldGFTbmFwc2hvdEV2ZW50RGlzcGF0Y2hlci5hZGRFdmVudExpc3RlbmVyKGRvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIpO1xuICAgIH1cblxufVxuIl19