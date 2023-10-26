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
const DelegatedDatastore_1 = require("./DelegatedDatastore");
const DatastoreMutation_1 = require("./DatastoreMutation");
const DocMetaComparisonIndex_1 = require("./DocMetaComparisonIndex");
const UUIDs_1 = require("../metadata/UUIDs");
const Logger_1 = require("../logger/Logger");
const log = Logger_1.Logger.create();
class LazyWriteDatastore extends DelegatedDatastore_1.DelegatedDatastore {
    constructor(delegate) {
        super(delegate);
        this.index = new DocMetaComparisonIndex_1.DocMetaComparisonIndex();
        this.nrWrites = 0;
        this.id = 'lazy-write:' + delegate.id;
    }
    writeDocMeta(docMeta, datastoreMutation = new DatastoreMutation_1.DefaultDatastoreMutation()) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            yield this.handleWrite(docMeta.docInfo, () => __awaiter(this, void 0, void 0, function* () { return yield _super("writeDocMeta").call(this, docMeta, datastoreMutation); }));
            return docMeta.docInfo;
        });
    }
    write(fingerprint, data, docInfo, datastoreMutation) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            return this.handleWrite(docInfo, () => __awaiter(this, void 0, void 0, function* () { return yield _super("write").call(this, fingerprint, data, docInfo, datastoreMutation); }));
        });
    }
    handleWrite(docInfo, writeFunction) {
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
            const writeDesc = `fingerprint: ${docInfo.fingerprint}, uuid: ${docInfo.uuid}: ` + docInfo.title;
            if (doUpdated) {
                this.index.updateUsingDocInfo(docInfo);
                ++this.nrWrites;
                log.info("Performing write: " + writeDesc);
                yield writeFunction();
                return;
            }
            log.info("Skipping write: " + writeDesc);
        });
    }
    delete(docMetaFileRef) {
        this.index.remove(docMetaFileRef.fingerprint);
        return super.delete(docMetaFileRef);
    }
}
exports.LazyWriteDatastore = LazyWriteDatastore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGF6eVdyaXRlRGF0YXN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTGF6eVdyaXRlRGF0YXN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSw2REFBd0Q7QUFFeEQsMkRBQWdGO0FBRWhGLHFFQUFnRTtBQUNoRSw2Q0FBd0M7QUFFeEMsNkNBQXdDO0FBRXhDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQU01QixNQUFhLGtCQUFtQixTQUFRLHVDQUFrQjtJQVF0RCxZQUFZLFFBQW1CO1FBQzNCLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQVBILFVBQUssR0FBRyxJQUFJLCtDQUFzQixFQUFFLENBQUM7UUFJL0MsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUl4QixJQUFJLENBQUMsRUFBRSxHQUFHLGFBQWEsR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFFWSxZQUFZLENBQUMsT0FBZ0IsRUFDaEIsb0JBQWdELElBQUksNENBQXdCLEVBQUU7OztZQUVwRyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFTLEVBQUUsZ0RBQUMsT0FBQSxNQUFNLHNCQUFrQixZQUFDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxDQUFBLEdBQUEsQ0FBQyxDQUFDO1lBRTFHLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUUzQixDQUFDO0tBQUE7SUFNWSxLQUFLLENBQUMsV0FBbUIsRUFDbkIsSUFBUyxFQUNULE9BQWlCLEVBQ2pCLGlCQUE4Qzs7O1lBRTdELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsR0FBUyxFQUFFLGdEQUFDLE9BQUEsTUFBTSxlQUFXLFlBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsaUJBQWlCLENBQUMsQ0FBQSxHQUFBLENBQUMsQ0FBQztRQUVuSCxDQUFDO0tBQUE7SUFFYSxXQUFXLENBQUMsT0FBaUIsRUFBRSxhQUFpQzs7WUFFMUUsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBRXRCLElBQUksQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQzVDLFNBQVMsR0FBRyxJQUFJLENBQUM7YUFDcEI7WUFFRCxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFMUQsSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDaEIsU0FBUyxHQUFHLElBQUksQ0FBQzthQUNwQjtZQUVELElBQUksYUFBYSxJQUFJLGFBQUssQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN0RSxTQUFTLEdBQUcsSUFBSSxDQUFDO2FBQ3BCO1lBRUQsTUFBTSxTQUFTLEdBQUcsZ0JBQWdCLE9BQU8sQ0FBQyxXQUFXLFdBQVcsT0FBTyxDQUFDLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFFakcsSUFBSSxTQUFTLEVBQUU7Z0JBRVgsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDdkMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUVoQixHQUFHLENBQUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFNBQVMsQ0FBQyxDQUFDO2dCQUMzQyxNQUFNLGFBQWEsRUFBRSxDQUFDO2dCQUN0QixPQUFPO2FBRVY7WUFFRCxHQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBRTdDLENBQUM7S0FBQTtJQUVNLE1BQU0sQ0FBQyxjQUE4QjtRQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDOUMsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Q0FFSjtBQTNFRCxnREEyRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Fic3RyYWN0RGF0YXN0b3JlLCBEYXRhc3RvcmUsIERhdGFzdG9yZUlELCBEZWxldGVSZXN1bHR9IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7RGVsZWdhdGVkRGF0YXN0b3JlfSBmcm9tICcuL0RlbGVnYXRlZERhdGFzdG9yZSc7XG5pbXBvcnQge0lEb2NJbmZvLCBEb2NJbmZvfSBmcm9tICcuLi9tZXRhZGF0YS9Eb2NJbmZvJztcbmltcG9ydCB7RGF0YXN0b3JlTXV0YXRpb24sIERlZmF1bHREYXRhc3RvcmVNdXRhdGlvbn0gZnJvbSAnLi9EYXRhc3RvcmVNdXRhdGlvbic7XG5pbXBvcnQge0RvY01ldGFGaWxlUmVmfSBmcm9tICcuL0RvY01ldGFSZWYnO1xuaW1wb3J0IHtEb2NNZXRhQ29tcGFyaXNvbkluZGV4fSBmcm9tICcuL0RvY01ldGFDb21wYXJpc29uSW5kZXgnO1xuaW1wb3J0IHtVVUlEc30gZnJvbSAnLi4vbWV0YWRhdGEvVVVJRHMnO1xuaW1wb3J0IHtEb2NNZXRhfSBmcm9tICcuLi9tZXRhZGF0YS9Eb2NNZXRhJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi9sb2dnZXIvTG9nZ2VyJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG4vKipcbiAqIFRoZSBMYXp5V3JpdGVEYXRhc3RvcmUga2VlcHMgYSBsaWdodHdlaWdodCBpbi1tZW1vcnkgaW5kZXggb2Ygd2hhdCdzIHdyaXR0ZW5cbiAqIGFuZCBwcmV2ZW50cyBkb3VibGUgd3JpdGVzIG9mIERvY01ldGEgYnV0IG90aGVyd2lzZSBvcGVyYXRlcyBub3JtYWxseS5cbiAqL1xuZXhwb3J0IGNsYXNzIExhenlXcml0ZURhdGFzdG9yZSBleHRlbmRzIERlbGVnYXRlZERhdGFzdG9yZSB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGluZGV4ID0gbmV3IERvY01ldGFDb21wYXJpc29uSW5kZXgoKTtcblxuICAgIHB1YmxpYyByZWFkb25seSBpZDogRGF0YXN0b3JlSUQ7XG5cbiAgICBwdWJsaWMgbnJXcml0ZXM6IG51bWJlciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcihkZWxlZ2F0ZTogRGF0YXN0b3JlKSB7XG4gICAgICAgIHN1cGVyKGRlbGVnYXRlKTtcbiAgICAgICAgdGhpcy5pZCA9ICdsYXp5LXdyaXRlOicgKyBkZWxlZ2F0ZS5pZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgd3JpdGVEb2NNZXRhKGRvY01ldGE6IERvY01ldGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhc3RvcmVNdXRhdGlvbjogRGF0YXN0b3JlTXV0YXRpb248RG9jSW5mbz4gPSBuZXcgRGVmYXVsdERhdGFzdG9yZU11dGF0aW9uKCkpOiBQcm9taXNlPERvY0luZm8+IHtcblxuICAgICAgICBhd2FpdCB0aGlzLmhhbmRsZVdyaXRlKGRvY01ldGEuZG9jSW5mbywgYXN5bmMgKCkgPT4gYXdhaXQgc3VwZXIud3JpdGVEb2NNZXRhKGRvY01ldGEsIGRhdGFzdG9yZU11dGF0aW9uKSk7XG5cbiAgICAgICAgcmV0dXJuIGRvY01ldGEuZG9jSW5mbztcblxuICAgIH1cblxuICAgIC8vIFRPRE86IHdoZW4gd2UgZG8gYSByZWFkLCBpdCBtaWdodCBiZSBiZXR0ZXIgdG8gdXBkYXRlIHRoZSBpbmRleCB0aGVuXG4gICAgLy8gd2hpY2ggd291bGQgcmVtb3ZlIHRoZSBmaXJzdCB3cml0ZSBpbiBzb21lIHNpdHVhdGlvbnMgYnV0IHdlIG5lZWQgdGhlXG4gICAgLy8gRG9jSW5mbyBhbmQgdGhlIFVVSUQgdG8gaGFuZGxlIHRoaXMuXG5cbiAgICBwdWJsaWMgYXN5bmMgd3JpdGUoZmluZ2VycHJpbnQ6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogYW55LFxuICAgICAgICAgICAgICAgICAgICAgICBkb2NJbmZvOiBJRG9jSW5mbyxcbiAgICAgICAgICAgICAgICAgICAgICAgZGF0YXN0b3JlTXV0YXRpb24/OiBEYXRhc3RvcmVNdXRhdGlvbjxib29sZWFuPik6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVdyaXRlKGRvY0luZm8sIGFzeW5jICgpID0+IGF3YWl0IHN1cGVyLndyaXRlKGZpbmdlcnByaW50LCBkYXRhLCBkb2NJbmZvLCBkYXRhc3RvcmVNdXRhdGlvbikpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBoYW5kbGVXcml0ZShkb2NJbmZvOiBJRG9jSW5mbywgd3JpdGVGdW5jdGlvbjogKCkgPT4gUHJvbWlzZTxhbnk+KTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICAgICAgbGV0IGRvVXBkYXRlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmICghIHRoaXMuaW5kZXguY29udGFpbnMoZG9jSW5mby5maW5nZXJwcmludCkpIHtcbiAgICAgICAgICAgIGRvVXBkYXRlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkb2NDb21wYXJpc29uID0gdGhpcy5pbmRleC5nZXQoZG9jSW5mby5maW5nZXJwcmludCk7XG5cbiAgICAgICAgaWYgKCFkb2NDb21wYXJpc29uKSB7XG4gICAgICAgICAgICBkb1VwZGF0ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRvY0NvbXBhcmlzb24gJiYgVVVJRHMuY29tcGFyZShkb2NDb21wYXJpc29uLnV1aWQsIGRvY0luZm8udXVpZCkgPCAwKSB7XG4gICAgICAgICAgICBkb1VwZGF0ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd3JpdGVEZXNjID0gYGZpbmdlcnByaW50OiAke2RvY0luZm8uZmluZ2VycHJpbnR9LCB1dWlkOiAke2RvY0luZm8udXVpZH06IGAgKyBkb2NJbmZvLnRpdGxlO1xuXG4gICAgICAgIGlmIChkb1VwZGF0ZWQpIHtcbiAgICAgICAgICAgIC8vIHdoZW4gdGhlIGRvYyBpcyBjcmVhdGVkIGFuZCBpdCdzIG5vdCBpbiB0aGUgaW5kZXguXG4gICAgICAgICAgICB0aGlzLmluZGV4LnVwZGF0ZVVzaW5nRG9jSW5mbyhkb2NJbmZvKTtcbiAgICAgICAgICAgICsrdGhpcy5ucldyaXRlcztcblxuICAgICAgICAgICAgbG9nLmluZm8oXCJQZXJmb3JtaW5nIHdyaXRlOiBcIiArIHdyaXRlRGVzYyk7XG4gICAgICAgICAgICBhd2FpdCB3cml0ZUZ1bmN0aW9uKCk7XG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGxvZy5pbmZvKFwiU2tpcHBpbmcgd3JpdGU6IFwiICsgd3JpdGVEZXNjKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBkZWxldGUoZG9jTWV0YUZpbGVSZWY6IERvY01ldGFGaWxlUmVmKTogUHJvbWlzZTxSZWFkb25seTxEZWxldGVSZXN1bHQ+PiB7XG4gICAgICAgIHRoaXMuaW5kZXgucmVtb3ZlKGRvY01ldGFGaWxlUmVmLmZpbmdlcnByaW50KTtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmRlbGV0ZShkb2NNZXRhRmlsZVJlZik7XG4gICAgfVxuXG59XG4iXX0=