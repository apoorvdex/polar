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
const Preconditions_1 = require("../Preconditions");
const Logger_1 = require("../logger/Logger");
const Files_1 = require("../util/Files");
const Optional_1 = require("../util/ts/Optional");
const DatastoreMutation_1 = require("./DatastoreMutation");
const Datastores_1 = require("./Datastores");
const Functions_1 = require("../util/Functions");
const ISODateTimeStrings_1 = require("../metadata/ISODateTimeStrings");
const Prefs_1 = require("../util/prefs/Prefs");
const Providers_1 = require("../util/Providers");
const log = Logger_1.Logger.create();
class MemoryDatastore extends Datastore_1.AbstractDatastore {
    constructor() {
        super();
        this.id = 'memory';
        this.docMetas = {};
        this.files = {};
        this.prefs = new Prefs_1.DictionaryPrefs();
        this.docMetas = {};
        this.created = ISODateTimeStrings_1.ISODateTimeStrings.create();
    }
    init(errorListener = Functions_1.NULL_FUNCTION) {
        return __awaiter(this, void 0, void 0, function* () {
            return {};
        });
    }
    stop() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    contains(fingerprint) {
        return __awaiter(this, void 0, void 0, function* () {
            return fingerprint in this.docMetas;
        });
    }
    delete(docMetaFileRef) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = {
                docMetaFile: {
                    path: `/${docMetaFileRef.fingerprint}.json`,
                    deleted: false
                },
                dataFile: {
                    path: '/' + Optional_1.Optional.of(docMetaFileRef.docFile)
                        .map(current => current.name)
                        .getOrUndefined(),
                    deleted: false
                }
            };
            if (yield this.contains(docMetaFileRef.fingerprint)) {
                result.docMetaFile.deleted = true;
                result.dataFile.deleted = true;
            }
            return result;
        });
    }
    writeFile(backend, ref, data, meta = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const key = this.toFileRefKey(backend, ref);
            let buff;
            if (typeof data === 'string') {
                buff = Buffer.from(data);
            }
            else if (data instanceof Buffer) {
                buff = data;
            }
            else {
                buff = yield Files_1.Files.readFileAsync(data.path);
            }
            this.files[key] = { buffer: buff, meta };
            return { backend, ref, url: 'FIXME:none', meta };
        });
    }
    getFile(backend, ref) {
        return __awaiter(this, void 0, void 0, function* () {
            const key = this.toFileRefKey(backend, ref);
            if (!key) {
                return Optional_1.Optional.empty();
            }
            const fileData = this.files[key];
            return Optional_1.Optional.of({ backend, ref, url: 'FIXME:none', meta: fileData.meta });
        });
    }
    containsFile(backend, ref) {
        return __awaiter(this, void 0, void 0, function* () {
            const key = this.toFileRefKey(backend, ref);
            return Preconditions_1.isPresent(this.files[key]);
        });
    }
    deleteFile(backend, ref) {
        return __awaiter(this, void 0, void 0, function* () {
            const key = this.toFileRefKey(backend, ref);
            delete this.files[key];
        });
    }
    getDocMeta(fingerprint) {
        return __awaiter(this, void 0, void 0, function* () {
            const nrDocs = Object.keys(this.docMetas).length;
            log.info(`Fetching document from datastore with fingerprint ${fingerprint} of ${nrDocs} docs.`);
            return this.docMetas[fingerprint];
        });
    }
    write(fingerprint, data, docInfo, datastoreMutation = new DatastoreMutation_1.DefaultDatastoreMutation()) {
        return __awaiter(this, void 0, void 0, function* () {
            Preconditions_1.Preconditions.assertTypeOf(data, "string", "data");
            this.docMetas[fingerprint] = data;
            datastoreMutation.written.resolve(true);
            datastoreMutation.committed.resolve(true);
        });
    }
    getDocMetaRefs() {
        return __awaiter(this, void 0, void 0, function* () {
            return Object.keys(this.docMetas)
                .map(fingerprint => ({ fingerprint }));
        });
    }
    snapshot(listener) {
        return __awaiter(this, void 0, void 0, function* () {
            return Datastores_1.Datastores.createCommittedSnapshot(this, listener);
        });
    }
    addDocMetaSnapshotEventListener(docMetaSnapshotEventListener) {
    }
    overview() {
        return __awaiter(this, void 0, void 0, function* () {
            const docMetaRefs = yield this.getDocMetaRefs();
            return { nrDocs: docMetaRefs.length, created: this.created };
        });
    }
    toFileRefKey(backend, fileRef) {
        return `${backend}:${fileRef.name}`;
    }
    getPrefs() {
        return Providers_1.Providers.toInterface(() => this.prefs);
    }
}
exports.MemoryDatastore = MemoryDatastore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVtb3J5RGF0YXN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTWVtb3J5RGF0YXN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFHQSwyQ0FBeUw7QUFDekwsb0RBQTBEO0FBRTFELDZDQUF3QztBQUN4Qyx5Q0FBZ0Q7QUFHaEQsa0RBQTZDO0FBRTdDLDJEQUFnRjtBQUNoRiw2Q0FBd0M7QUFDeEMsaURBQWdEO0FBRWhELHVFQUFxRjtBQUNyRiwrQ0FBb0Q7QUFDcEQsaURBQTRDO0FBRTVDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLGVBQWdCLFNBQVEsNkJBQWlCO0lBWWxEO1FBQ0ksS0FBSyxFQUFFLENBQUM7UUFYSSxPQUFFLEdBQUcsUUFBUSxDQUFDO1FBSVgsYUFBUSxHQUFvQyxFQUFFLENBQUM7UUFFL0MsVUFBSyxHQUE4QixFQUFFLENBQUM7UUFFeEMsVUFBSyxHQUFHLElBQUksdUJBQWUsRUFBRSxDQUFDO1FBSzNDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsdUNBQWtCLENBQUMsTUFBTSxFQUFFLENBQUM7SUFFL0MsQ0FBQztJQUdZLElBQUksQ0FBQyxnQkFBK0IseUJBQWE7O1lBQzFELE9BQU8sRUFBRSxDQUFDO1FBQ2QsQ0FBQztLQUFBO0lBRVksSUFBSTs7UUFFakIsQ0FBQztLQUFBO0lBRVksUUFBUSxDQUFDLFdBQW1COztZQUNyQyxPQUFPLFdBQVcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3hDLENBQUM7S0FBQTtJQUVZLE1BQU0sQ0FBQyxjQUE4Qjs7WUFFOUMsTUFBTSxNQUFNLEdBQVE7Z0JBQ2hCLFdBQVcsRUFBRTtvQkFDVCxJQUFJLEVBQUUsSUFBSSxjQUFjLENBQUMsV0FBVyxPQUFPO29CQUMzQyxPQUFPLEVBQUUsS0FBSztpQkFDakI7Z0JBQ0QsUUFBUSxFQUFFO29C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QU8scUJBQVMsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25ELENBQUM7Q0FFSjtBQXJLRCwwQ0FxS0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIERhdGFzdG9yZSBqdXN0IGluIG1lbW9yeSB3aXRoIG5vIG9uIGRpc2sgcGVyc2lzdGVuY2UuXG4gKi9cbmltcG9ydCB7QWJzdHJhY3REYXRhc3RvcmUsIERhdGFzdG9yZSwgRGVsZXRlUmVzdWx0LCBEb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyLCBFcnJvckxpc3RlbmVyLCBGaWxlTWV0YSwgRmlsZVJlZiwgU25hcHNob3RSZXN1bHQsIERhdGFzdG9yZU92ZXJ2aWV3LCBQcmVmc1Byb3ZpZGVyfSBmcm9tICcuL0RhdGFzdG9yZSc7XG5pbXBvcnQge2lzUHJlc2VudCwgUHJlY29uZGl0aW9uc30gZnJvbSAnLi4vUHJlY29uZGl0aW9ucyc7XG5pbXBvcnQge0RvY01ldGFGaWxlUmVmLCBEb2NNZXRhUmVmfSBmcm9tICcuL0RvY01ldGFSZWYnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtGaWxlSGFuZGxlLCBGaWxlc30gZnJvbSAnLi4vdXRpbC9GaWxlcyc7XG5pbXBvcnQge0JhY2tlbmR9IGZyb20gJy4vQmFja2VuZCc7XG5pbXBvcnQge0RvY0ZpbGVNZXRhfSBmcm9tICcuL0RvY0ZpbGVNZXRhJztcbmltcG9ydCB7T3B0aW9uYWx9IGZyb20gJy4uL3V0aWwvdHMvT3B0aW9uYWwnO1xuaW1wb3J0IHtEb2NJbmZvfSBmcm9tICcuLi9tZXRhZGF0YS9Eb2NJbmZvJztcbmltcG9ydCB7RGF0YXN0b3JlTXV0YXRpb24sIERlZmF1bHREYXRhc3RvcmVNdXRhdGlvbn0gZnJvbSAnLi9EYXRhc3RvcmVNdXRhdGlvbic7XG5pbXBvcnQge0RhdGFzdG9yZXN9IGZyb20gJy4vRGF0YXN0b3Jlcyc7XG5pbXBvcnQge05VTExfRlVOQ1RJT059IGZyb20gJy4uL3V0aWwvRnVuY3Rpb25zJztcbmltcG9ydCB7RGlza0luaXRSZXN1bHR9IGZyb20gJy4vRGlza0RhdGFzdG9yZSc7XG5pbXBvcnQge0lTT0RhdGVUaW1lU3RyaW5nLCBJU09EYXRlVGltZVN0cmluZ3N9IGZyb20gJy4uL21ldGFkYXRhL0lTT0RhdGVUaW1lU3RyaW5ncyc7XG5pbXBvcnQge0RpY3Rpb25hcnlQcmVmc30gZnJvbSAnLi4vdXRpbC9wcmVmcy9QcmVmcyc7XG5pbXBvcnQge1Byb3ZpZGVyc30gZnJvbSAnLi4vdXRpbC9Qcm92aWRlcnMnO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBNZW1vcnlEYXRhc3RvcmUgZXh0ZW5kcyBBYnN0cmFjdERhdGFzdG9yZSBpbXBsZW1lbnRzIERhdGFzdG9yZSB7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgaWQgPSAnbWVtb3J5JztcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgY3JlYXRlZDogSVNPRGF0ZVRpbWVTdHJpbmc7XG5cbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgZG9jTWV0YXM6IHtbZmluZ2VycHJpbnQ6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcblxuICAgIHByb3RlY3RlZCByZWFkb25seSBmaWxlczoge1trZXk6IHN0cmluZ106IEZpbGVEYXRhfSA9IHt9O1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBwcmVmcyA9IG5ldyBEaWN0aW9uYXJ5UHJlZnMoKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuZG9jTWV0YXMgPSB7fTtcbiAgICAgICAgdGhpcy5jcmVhdGVkID0gSVNPRGF0ZVRpbWVTdHJpbmdzLmNyZWF0ZSgpO1xuXG4gICAgfVxuXG4gICAgLy8gbm9pbnNwZWN0aW9uIFRzTGludFxuICAgIHB1YmxpYyBhc3luYyBpbml0KGVycm9yTGlzdGVuZXI6IEVycm9yTGlzdGVuZXIgPSBOVUxMX0ZVTkNUSU9OKTogUHJvbWlzZTxEaXNrSW5pdFJlc3VsdD4ge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHN0b3AoKSB7XG4gICAgICAgIC8vIG5vb3BcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY29udGFpbnMoZmluZ2VycHJpbnQ6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gZmluZ2VycHJpbnQgaW4gdGhpcy5kb2NNZXRhcztcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZGVsZXRlKGRvY01ldGFGaWxlUmVmOiBEb2NNZXRhRmlsZVJlZik6IFByb21pc2U8UmVhZG9ubHk8RGVsZXRlUmVzdWx0Pj4ge1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdDogYW55ID0ge1xuICAgICAgICAgICAgZG9jTWV0YUZpbGU6IHtcbiAgICAgICAgICAgICAgICBwYXRoOiBgLyR7ZG9jTWV0YUZpbGVSZWYuZmluZ2VycHJpbnR9Lmpzb25gLFxuICAgICAgICAgICAgICAgIGRlbGV0ZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0YUZpbGU6IHtcbiAgICAgICAgICAgICAgICBwYXRoOiAnLycgKyBPcHRpb25hbC5vZihkb2NNZXRhRmlsZVJlZi5kb2NGaWxlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGN1cnJlbnQgPT4gY3VycmVudC5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0T3JVbmRlZmluZWQoKSxcbiAgICAgICAgICAgICAgICBkZWxldGVkOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChhd2FpdCB0aGlzLmNvbnRhaW5zKGRvY01ldGFGaWxlUmVmLmZpbmdlcnByaW50KSkge1xuICAgICAgICAgICAgcmVzdWx0LmRvY01ldGFGaWxlLmRlbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzdWx0LmRhdGFGaWxlLmRlbGV0ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyB3cml0ZUZpbGUoYmFja2VuZDogQmFja2VuZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogRmlsZVJlZixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IEZpbGVIYW5kbGUgfCBCdWZmZXIgfCBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhOiBGaWxlTWV0YSA9IHt9KTogUHJvbWlzZTxEb2NGaWxlTWV0YT4ge1xuXG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMudG9GaWxlUmVmS2V5KGJhY2tlbmQsIHJlZik7XG5cbiAgICAgICAgbGV0IGJ1ZmY6IEJ1ZmZlciB8IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBidWZmID0gQnVmZmVyLmZyb20oZGF0YSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YSBpbnN0YW5jZW9mIEJ1ZmZlcikge1xuICAgICAgICAgICAgYnVmZiA9IGRhdGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidWZmID0gYXdhaXQgRmlsZXMucmVhZEZpbGVBc3luYyhkYXRhLnBhdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5maWxlc1trZXldID0ge2J1ZmZlcjogYnVmZiEsIG1ldGF9O1xuXG4gICAgICAgIHJldHVybiB7YmFja2VuZCwgcmVmLCB1cmw6ICdGSVhNRTpub25lJywgbWV0YX07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0RmlsZShiYWNrZW5kOiBCYWNrZW5kLCByZWY6IEZpbGVSZWYpOiBQcm9taXNlPE9wdGlvbmFsPERvY0ZpbGVNZXRhPj4ge1xuXG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMudG9GaWxlUmVmS2V5KGJhY2tlbmQsIHJlZik7XG5cbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBPcHRpb25hbC5lbXB0eSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmlsZURhdGEgPSB0aGlzLmZpbGVzW2tleV07XG5cbiAgICAgICAgcmV0dXJuIE9wdGlvbmFsLm9mKHtiYWNrZW5kLCByZWYsIHVybDogJ0ZJWE1FOm5vbmUnLCBtZXRhOiBmaWxlRGF0YS5tZXRhfSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY29udGFpbnNGaWxlKGJhY2tlbmQ6IEJhY2tlbmQsIHJlZjogRmlsZVJlZik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLnRvRmlsZVJlZktleShiYWNrZW5kLCByZWYpO1xuICAgICAgICByZXR1cm4gaXNQcmVzZW50KHRoaXMuZmlsZXNba2V5XSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGRlbGV0ZUZpbGUoYmFja2VuZDogQmFja2VuZCwgcmVmOiBGaWxlUmVmKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMudG9GaWxlUmVmS2V5KGJhY2tlbmQsIHJlZik7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmZpbGVzW2tleV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIGdldERvY01ldGEoZmluZ2VycHJpbnQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4ge1xuXG4gICAgICAgIGNvbnN0IG5yRG9jcyA9IE9iamVjdC5rZXlzKHRoaXMuZG9jTWV0YXMpLmxlbmd0aDtcblxuICAgICAgICBsb2cuaW5mbyhgRmV0Y2hpbmcgZG9jdW1lbnQgZnJvbSBkYXRhc3RvcmUgd2l0aCBmaW5nZXJwcmludCAke2ZpbmdlcnByaW50fSBvZiAke25yRG9jc30gZG9jcy5gKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5kb2NNZXRhc1tmaW5nZXJwcmludF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JpdGUgdGhlIGRhdGFzdG9yZSB0byBkaXNrLlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyB3cml0ZShmaW5nZXJwcmludDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgIGRvY0luZm86IERvY0luZm8sXG4gICAgICAgICAgICAgICAgICAgICAgIGRhdGFzdG9yZU11dGF0aW9uOiBEYXRhc3RvcmVNdXRhdGlvbjxib29sZWFuPiA9IG5ldyBEZWZhdWx0RGF0YXN0b3JlTXV0YXRpb24oKSk6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0VHlwZU9mKGRhdGEsIFwic3RyaW5nXCIsIFwiZGF0YVwiKTtcblxuICAgICAgICB0aGlzLmRvY01ldGFzW2ZpbmdlcnByaW50XSA9IGRhdGE7XG5cbiAgICAgICAgZGF0YXN0b3JlTXV0YXRpb24ud3JpdHRlbi5yZXNvbHZlKHRydWUpO1xuICAgICAgICBkYXRhc3RvcmVNdXRhdGlvbi5jb21taXR0ZWQucmVzb2x2ZSh0cnVlKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBnZXREb2NNZXRhUmVmcygpOiBQcm9taXNlPERvY01ldGFSZWZbXT4ge1xuXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmRvY01ldGFzKVxuICAgICAgICAgICAgLm1hcChmaW5nZXJwcmludCA9PiA8RG9jTWV0YVJlZj4ge2ZpbmdlcnByaW50fSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc25hcHNob3QobGlzdGVuZXI6IERvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIpOiBQcm9taXNlPFNuYXBzaG90UmVzdWx0PiB7XG5cbiAgICAgICAgcmV0dXJuIERhdGFzdG9yZXMuY3JlYXRlQ29tbWl0dGVkU25hcHNob3QodGhpcywgbGlzdGVuZXIpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFkZERvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIoZG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcjogRG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcik6IHZvaWQge1xuICAgICAgICAvLyBub29wIG5vd1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBvdmVydmlldygpOiBQcm9taXNlPERhdGFzdG9yZU92ZXJ2aWV3PiB7XG5cbiAgICAgICAgY29uc3QgZG9jTWV0YVJlZnMgPSBhd2FpdCB0aGlzLmdldERvY01ldGFSZWZzKCk7XG5cbiAgICAgICAgcmV0dXJuIHtuckRvY3M6IGRvY01ldGFSZWZzLmxlbmd0aCwgY3JlYXRlZDogdGhpcy5jcmVhdGVkfTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgdG9GaWxlUmVmS2V5KGJhY2tlbmQ6IEJhY2tlbmQsIGZpbGVSZWY6IEZpbGVSZWYpIHtcbiAgICAgICAgcmV0dXJuIGAke2JhY2tlbmR9OiR7ZmlsZVJlZi5uYW1lfWA7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFByZWZzKCk6IFByZWZzUHJvdmlkZXIge1xuICAgICAgICByZXR1cm4gUHJvdmlkZXJzLnRvSW50ZXJmYWNlKCgpID0+IHRoaXMucHJlZnMpO1xuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgRmlsZURhdGEge1xuICAgIGJ1ZmZlcjogQnVmZmVyO1xuICAgIG1ldGE6IEZpbGVNZXRhO1xufVxuIl19