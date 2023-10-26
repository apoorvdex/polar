"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MemoryDatastore_1 = require("./MemoryDatastore");
const DiskDatastore_1 = require("./DiskDatastore");
const Logger_1 = require("../logger/Logger");
const DocMetaRef_1 = require("./DocMetaRef");
const DocMetas_1 = require("../metadata/DocMetas");
const Functions_1 = require("../util/Functions");
const Percentages_1 = require("../util/Percentages");
const ProgressTracker_1 = require("../util/ProgressTracker");
const Providers_1 = require("../util/Providers");
const DefaultPersistenceLayer_1 = require("./DefaultPersistenceLayer");
const deep_equal_1 = __importDefault(require("deep-equal"));
const Preconditions_1 = require("../Preconditions");
const AsyncWorkQueue_1 = require("../util/AsyncWorkQueue");
const log = Logger_1.Logger.create();
const ENV_POLAR_DATASTORE = 'POLAR_DATASTORE';
class Datastores {
    static create() {
        const name = process.env[ENV_POLAR_DATASTORE];
        if (name === 'MEMORY') {
            log.info("Using memory datastore");
            return new MemoryDatastore_1.MemoryDatastore();
        }
        return new DiskDatastore_1.DiskDatastore();
    }
    static getDocMetas(datastore, listener, docMetaRefs) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!docMetaRefs) {
                docMetaRefs = yield datastore.getDocMetaRefs();
            }
            for (const docMetaRef of docMetaRefs) {
                const docMetaData = yield datastore.getDocMeta(docMetaRef.fingerprint);
                if (!docMetaData) {
                    throw new Error("Could not find docMeta for fingerprint: " + docMetaRef.fingerprint);
                }
                const docMeta = DocMetas_1.DocMetas.deserialize(docMetaData, docMetaRef.fingerprint);
                listener(docMeta);
            }
        });
    }
    static createCommittedSnapshot(datastore, listener, batch) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!batch) {
                batch = {
                    id: 0,
                    terminated: false
                };
            }
            const docMetaFiles = yield datastore.getDocMetaRefs();
            const progressTracker = new ProgressTracker_1.ProgressTracker(docMetaFiles.length, `datastore:${datastore.id}#snapshot`);
            for (const docMetaFile of docMetaFiles) {
                const dataProvider = Providers_1.AsyncProviders.memoize(() => __awaiter(this, void 0, void 0, function* () { return yield datastore.getDocMeta(docMetaFile.fingerprint); }));
                const docMetaProvider = Providers_1.AsyncProviders.memoize(() => __awaiter(this, void 0, void 0, function* () { return DocMetas_1.DocMetas.deserialize((yield dataProvider()), docMetaFile.fingerprint); }));
                const docInfoProvider = Providers_1.AsyncProviders.memoize(() => __awaiter(this, void 0, void 0, function* () { return (yield docMetaProvider()).docInfo; }));
                const docMetaFileRefProvider = Providers_1.AsyncProviders.memoize(() => __awaiter(this, void 0, void 0, function* () { return DocMetaRef_1.DocMetaFileRefs.createFromDocInfo(yield docInfoProvider()); }));
                const docMetaMutation = {
                    fingerprint: docMetaFile.fingerprint,
                    docMetaFileRefProvider,
                    dataProvider,
                    docMetaProvider,
                    docInfoProvider,
                    mutationType: 'created'
                };
                yield listener({
                    datastore: datastore.id,
                    progress: progressTracker.incr(),
                    consistency: 'committed',
                    docMetaMutations: [docMetaMutation],
                    batch
                });
            }
            yield listener({
                datastore: datastore.id,
                progress: progressTracker.terminate(),
                consistency: 'committed',
                docMetaMutations: [],
                batch: {
                    id: batch.id,
                    terminated: true,
                }
            });
            return {};
        });
    }
    static purge(datastore, purgeListener = Functions_1.NULL_FUNCTION) {
        return __awaiter(this, void 0, void 0, function* () {
            const docMetaFiles = yield datastore.getDocMetaRefs();
            let completed = 0;
            const total = docMetaFiles.length;
            const work = [];
            const asyncWorkQueue = new AsyncWorkQueue_1.AsyncWorkQueue(work);
            for (const docMetaFile of docMetaFiles) {
                work.push(() => __awaiter(this, void 0, void 0, function* () {
                    const data = yield datastore.getDocMeta(docMetaFile.fingerprint);
                    const docMeta = DocMetas_1.DocMetas.deserialize(data, docMetaFile.fingerprint);
                    const docMetaFileRef = DocMetaRef_1.DocMetaFileRefs.createFromDocInfo(docMeta.docInfo);
                    yield datastore.delete(docMetaFileRef);
                    ++completed;
                    const progress = Percentages_1.Percentages.calculate(completed, total);
                    purgeListener({ completed, total, progress });
                }));
            }
            yield asyncWorkQueue.execute();
            if (total === 0) {
                purgeListener({ completed, total, progress: 100 });
            }
        });
    }
    static checkConsistency(datastore0, datastore1) {
        return __awaiter(this, void 0, void 0, function* () {
            const manifest0 = yield this.toDocInfoManifest(datastore0);
            const manifest1 = yield this.toDocInfoManifest(datastore1);
            const consistent = deep_equal_1.default(manifest0, manifest1);
            return { consistent, manifest0, manifest1 };
        });
    }
    static toDocInfoManifest(datastore) {
        return __awaiter(this, void 0, void 0, function* () {
            const persistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(datastore);
            const docMetaFiles = (yield datastore.getDocMetaRefs())
                .sort((d0, d1) => d0.fingerprint.localeCompare(d1.fingerprint));
            const result = [];
            for (const docMetaFile of docMetaFiles) {
                const docMeta = yield persistenceLayer.getDocMeta(docMetaFile.fingerprint);
                Preconditions_1.Preconditions.assertPresent(docMeta, "toDocInfoManifest could not find docMeta for " + docMetaFile.fingerprint);
                result.push(docMeta.docInfo);
            }
            return result;
        });
    }
}
exports.Datastores = Datastores;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YXN0b3Jlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRhdGFzdG9yZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLHVEQUFrRDtBQUNsRCxtREFBOEM7QUFDOUMsNkNBQXdDO0FBQ3hDLDZDQUF5RDtBQUV6RCxtREFBOEM7QUFDOUMsaURBQWdEO0FBQ2hELHFEQUFnRDtBQUNoRCw2REFBd0Q7QUFDeEQsaURBQWlEO0FBQ2pELHVFQUFrRTtBQUVsRSw0REFBbUM7QUFDbkMsb0RBQStDO0FBQy9DLDJEQUFxRTtBQUVyRSxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBTSxtQkFBbUIsR0FBRyxpQkFBaUIsQ0FBQztBQUU5QyxNQUFhLFVBQVU7SUFDWixNQUFNLENBQUMsTUFBTTtRQUVoQixNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFFOUMsSUFBSSxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ25CLEdBQUcsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUNuQyxPQUFPLElBQUksaUNBQWUsRUFBRSxDQUFDO1NBQ2hDO1FBRUQsT0FBTyxJQUFJLDZCQUFhLEVBQUUsQ0FBQztJQUUvQixDQUFDO0lBRU0sTUFBTSxDQUFPLFdBQVcsQ0FBQyxTQUFvQixFQUNwQixRQUF5QixFQUN6QixXQUEwQjs7WUFFdEQsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDZCxXQUFXLEdBQUcsTUFBTSxTQUFTLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDbEQ7WUFFRCxLQUFLLE1BQU0sVUFBVSxJQUFJLFdBQVcsRUFBRTtnQkFDbEMsTUFBTSxXQUFXLEdBQUcsTUFBTSxTQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFFdkUsSUFBSyxDQUFFLFdBQVcsRUFBRTtvQkFDaEIsTUFBTSxJQUFJLEtB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SUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBRTNELE1BQU0sVUFBVSxHQUFHLG9CQUFTLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBRW5ELE9BQU8sRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBQyxDQUFDO1FBRTlDLENBQUM7S0FBQTtJQUVNLE1BQU0sQ0FBTyxpQkFBaUIsQ0FBQyxTQUFvQjs7WUFFdEQsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLGlEQUF1QixDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRWhFLE1BQU0sWUFBWSxHQUNkLENBQUMsTUFBTSxTQUFTLENBQUMsY0FBYyxFQUFFLENBQUM7aUJBQzdCLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBRXhFLE1BQU0sTUFBTSxHQUFjLEVBQUUsQ0FBQztZQUU3QixLQUFLLE1BQU0sV0FBVyxJQUFJLFlBQVksRUFBRTtnQkFDcEMsTUFBTSxPQUFPLEdBQUcsTUFBTSxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMzRSw2QkFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsK0NBQStDLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNoSCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNqQztZQUVELE9BQU8sTUFBTSxDQUFDO1FBRWxCLENBQUM7S0FBQTtDQUVKO0FBaE5ELGdDQWdOQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGF0YXN0b3JlLCBEb2NNZXRhTXV0YXRpb24sIERvY01ldGFTbmFwc2hvdEJhdGNoLCBEb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyLCBTbmFwc2hvdFJlc3VsdH0gZnJvbSAnLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtNZW1vcnlEYXRhc3RvcmV9IGZyb20gJy4vTWVtb3J5RGF0YXN0b3JlJztcbmltcG9ydCB7RGlza0RhdGFzdG9yZX0gZnJvbSAnLi9EaXNrRGF0YXN0b3JlJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7RG9jTWV0YUZpbGVSZWZzLCBEb2NNZXRhUmVmfSBmcm9tICcuL0RvY01ldGFSZWYnO1xuaW1wb3J0IHtEb2NNZXRhfSBmcm9tICcuLi9tZXRhZGF0YS9Eb2NNZXRhJztcbmltcG9ydCB7RG9jTWV0YXN9IGZyb20gJy4uL21ldGFkYXRhL0RvY01ldGFzJztcbmltcG9ydCB7TlVMTF9GVU5DVElPTn0gZnJvbSAnLi4vdXRpbC9GdW5jdGlvbnMnO1xuaW1wb3J0IHtQZXJjZW50YWdlc30gZnJvbSAnLi4vdXRpbC9QZXJjZW50YWdlcyc7XG5pbXBvcnQge1Byb2dyZXNzVHJhY2tlcn0gZnJvbSAnLi4vdXRpbC9Qcm9ncmVzc1RyYWNrZXInO1xuaW1wb3J0IHtBc3luY1Byb3ZpZGVyc30gZnJvbSAnLi4vdXRpbC9Qcm92aWRlcnMnO1xuaW1wb3J0IHtEZWZhdWx0UGVyc2lzdGVuY2VMYXllcn0gZnJvbSAnLi9EZWZhdWx0UGVyc2lzdGVuY2VMYXllcic7XG5pbXBvcnQge0RvY0luZm99IGZyb20gJy4uL21ldGFkYXRhL0RvY0luZm8nO1xuaW1wb3J0IGRlZXBFcXVhbCBmcm9tICdkZWVwLWVxdWFsJztcbmltcG9ydCB7UHJlY29uZGl0aW9uc30gZnJvbSAnLi4vUHJlY29uZGl0aW9ucyc7XG5pbXBvcnQge0FzeW5jRnVuY3Rpb24sIEFzeW5jV29ya1F1ZXVlfSBmcm9tICcuLi91dGlsL0FzeW5jV29ya1F1ZXVlJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5jb25zdCBFTlZfUE9MQVJfREFUQVNUT1JFID0gJ1BPTEFSX0RBVEFTVE9SRSc7XG5cbmV4cG9ydCBjbGFzcyBEYXRhc3RvcmVzIHtcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZSgpOiBEYXRhc3RvcmUge1xuXG4gICAgICAgIGNvbnN0IG5hbWUgPSBwcm9jZXNzLmVudltFTlZfUE9MQVJfREFUQVNUT1JFXTtcblxuICAgICAgICBpZiAobmFtZSA9PT0gJ01FTU9SWScpIHtcbiAgICAgICAgICAgIGxvZy5pbmZvKFwiVXNpbmcgbWVtb3J5IGRhdGFzdG9yZVwiKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWVtb3J5RGF0YXN0b3JlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IERpc2tEYXRhc3RvcmUoKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0RG9jTWV0YXMoZGF0YXN0b3JlOiBEYXRhc3RvcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcjogRG9jTWV0YUxpc3RlbmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jTWV0YVJlZnM/OiBEb2NNZXRhUmVmW10pIHtcblxuICAgICAgICBpZiAoIWRvY01ldGFSZWZzKSB7XG4gICAgICAgICAgICBkb2NNZXRhUmVmcyA9IGF3YWl0IGRhdGFzdG9yZS5nZXREb2NNZXRhUmVmcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBkb2NNZXRhUmVmIG9mIGRvY01ldGFSZWZzKSB7XG4gICAgICAgICAgICBjb25zdCBkb2NNZXRhRGF0YSA9IGF3YWl0IGRhdGFzdG9yZS5nZXREb2NNZXRhKGRvY01ldGFSZWYuZmluZ2VycHJpbnQpO1xuXG4gICAgICAgICAgICBpZiAoICEgZG9jTWV0YURhdGEpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBkb2NNZXRhIGZvciBmaW5nZXJwcmludDogXCIgKyBkb2NNZXRhUmVmLmZpbmdlcnByaW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZG9jTWV0YSA9IERvY01ldGFzLmRlc2VyaWFsaXplKGRvY01ldGFEYXRhLCBkb2NNZXRhUmVmLmZpbmdlcnByaW50KTtcbiAgICAgICAgICAgIGxpc3RlbmVyKGRvY01ldGEpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBjb21taXR0ZWQgc25hcHNob3QgZnJvbSBhbiBleGlzdGluZyBkYXRhc3RvcmUgc28gdGhhdCBsZWdhY3lcbiAgICAgKiBvbmVzIHNlZW0gdG8gc3VwcG9ydCBzbmFwc2hvdHMgdGhvdWdoIHRoZXkgbWlnaHQgbm90IHN1cHBvcnQgdXBkYXRlcyBvZlxuICAgICAqIHRoZSBsaXN0ZW5lcnMuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBjcmVhdGVDb21taXR0ZWRTbmFwc2hvdChkYXRhc3RvcmU6IERhdGFzdG9yZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyOiBEb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmF0Y2g/OiBEb2NNZXRhU25hcHNob3RCYXRjaCk6IFByb21pc2U8U25hcHNob3RSZXN1bHQ+IHtcblxuICAgICAgICBpZiAoISBiYXRjaCkge1xuXG4gICAgICAgICAgICAvLyBmb3IgbW9zdCBvZiBvdXIgdXNhZ2VzIHdlIGp1c3QgcmVjZWl2ZSB0aGUgZmlyc3QgYmF0Y2ggYW5kIHdlJ3JlXG4gICAgICAgICAgICAvLyBkb25lIGF0IHRoYXQgcG9pbnQuXG5cbiAgICAgICAgICAgIGJhdGNoID0ge1xuICAgICAgICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgICAgICAgIHRlcm1pbmF0ZWQ6IGZhbHNlXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkb2NNZXRhRmlsZXMgPSBhd2FpdCBkYXRhc3RvcmUuZ2V0RG9jTWV0YVJlZnMoKTtcblxuICAgICAgICBjb25zdCBwcm9ncmVzc1RyYWNrZXIgPSBuZXcgUHJvZ3Jlc3NUcmFja2VyKGRvY01ldGFGaWxlcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGRhdGFzdG9yZToke2RhdGFzdG9yZS5pZH0jc25hcHNob3RgKTtcblxuICAgICAgICAvLyBUT0RPOiB3ZSBjYWxsIHRoZSBsaXN0ZW5lciB0b28gbWFueSB0aW1lcyBoZXJlIGJ1dCB3ZSBtaWdodCB3YW50IHRvXG4gICAgICAgIC8vIGJhdGNoIGl0IGluIHRoZSBmdXR1cmUgc28gdGhhdCB0aGUgbGlzdGVuZXIgZG9lc24ndCBnZXQgY2FsbGVkIHRvb1xuICAgICAgICAvLyBvZnRlbiBhcyBpdCB3b3VsZCB1cGRhdGUgdGhlIFVJIHRvbyBmcmVxdWVudGx5LiAgV2UgbmVlZCB0byBjb21wdXRlXG4gICAgICAgIC8vIHRoZSBpZGVhbCBiYXRjaCBzaXplIHNvIHdlIHNob3VsZCBwcm9iYWJseSBjb21wdXRlIGl0IGFzOlxuXG4gICAgICAgIC8vIGNvbnN0IHBlcmNNYXggPSAxMDA7XG4gICAgICAgIC8vIGNvbnN0IG1pbkJhdGNoU2l6ZSA9IDE7XG4gICAgICAgIC8vIGNvbnN0IG1heEJhdGNoU2l6ZSA9IDIwO1xuICAgICAgICAvL1xuICAgICAgICAvLyBNYXRoLm1heChtaW5CYXRjaFNpemUsIE1hdGgubWluKG1heEJhdGNoU2l6ZSwgZG9jTWV0YUZpbGVzLmxlbmd0aCAvXG4gICAgICAgIC8vIHBlcmNNYXgpKSAgIFRoaXMgd2lsbCBnaXZlIHVzIGFuIGlkZWFsIGJhdGNoIHNpemUgc28gdGhhdCB3ZSB1cGRhdGVcbiAgICAgICAgLy8gdGhlIFVJIGV2ZXJ5IDElIE9SIHRoZSBtYXhCYXRjaFNpemUuLi5cblxuICAgICAgICBmb3IgKGNvbnN0IGRvY01ldGFGaWxlIG9mIGRvY01ldGFGaWxlcykge1xuXG4gICAgICAgICAgICAvLyAvLyBUT0RPOiBpbiB0aGUgY2xvdWQgc3RvcmUgaW1wbGVtZW50YXRpb24gaXQgd2lsbCBwcm9iYWJseSBiZSBtdWNoXG4gICAgICAgICAgICAvLyAvLyBmYXN0ZXIgdG8gdXNlIGEgZmlsZSBKVVNUIGZvciB0aGUgRG9jSW5mbyB0byBzcGVlZCB1cCBsb2FkaW5nLlxuICAgICAgICAgICAgY29uc3QgZGF0YVByb3ZpZGVyID0gQXN5bmNQcm92aWRlcnMubWVtb2l6ZShhc3luYyAoKSA9PiBhd2FpdCBkYXRhc3RvcmUuZ2V0RG9jTWV0YShkb2NNZXRhRmlsZS5maW5nZXJwcmludCkpO1xuICAgICAgICAgICAgY29uc3QgZG9jTWV0YVByb3ZpZGVyID0gQXN5bmNQcm92aWRlcnMubWVtb2l6ZShhc3luYyAoKSA9PiBEb2NNZXRhcy5kZXNlcmlhbGl6ZSgoYXdhaXQgZGF0YVByb3ZpZGVyKCkpISwgZG9jTWV0YUZpbGUuZmluZ2VycHJpbnQpKTtcbiAgICAgICAgICAgIGNvbnN0IGRvY0luZm9Qcm92aWRlciA9IEFzeW5jUHJvdmlkZXJzLm1lbW9pemUoYXN5bmMgKCkgPT4gKGF3YWl0IGRvY01ldGFQcm92aWRlcigpKS5kb2NJbmZvKTtcbiAgICAgICAgICAgIGNvbnN0IGRvY01ldGFGaWxlUmVmUHJvdmlkZXIgPSBBc3luY1Byb3ZpZGVycy5tZW1vaXplKGFzeW5jICgpID0+IERvY01ldGFGaWxlUmVmcy5jcmVhdGVGcm9tRG9jSW5mbyhhd2FpdCBkb2NJbmZvUHJvdmlkZXIoKSkpO1xuXG4gICAgICAgICAgICBjb25zdCBkb2NNZXRhTXV0YXRpb246IERvY01ldGFNdXRhdGlvbiA9IHtcbiAgICAgICAgICAgICAgICBmaW5nZXJwcmludDogZG9jTWV0YUZpbGUuZmluZ2VycHJpbnQsXG4gICAgICAgICAgICAgICAgZG9jTWV0YUZpbGVSZWZQcm92aWRlcixcbiAgICAgICAgICAgICAgICBkYXRhUHJvdmlkZXIsXG4gICAgICAgICAgICAgICAgZG9jTWV0YVByb3ZpZGVyLFxuICAgICAgICAgICAgICAgIGRvY0luZm9Qcm92aWRlcixcbiAgICAgICAgICAgICAgICBtdXRhdGlvblR5cGU6ICdjcmVhdGVkJ1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgYXdhaXQgbGlzdGVuZXIoe1xuICAgICAgICAgICAgICAgIGRhdGFzdG9yZTogZGF0YXN0b3JlLmlkLFxuICAgICAgICAgICAgICAgIHByb2dyZXNzOiBwcm9ncmVzc1RyYWNrZXIuaW5jcigpLFxuICAgICAgICAgICAgICAgIGNvbnNpc3RlbmN5OiAnY29tbWl0dGVkJyxcbiAgICAgICAgICAgICAgICBkb2NNZXRhTXV0YXRpb25zOiBbZG9jTWV0YU11dGF0aW9uXSxcbiAgICAgICAgICAgICAgICBiYXRjaFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IGxpc3RlbmVyKHtcbiAgICAgICAgICAgIGRhdGFzdG9yZTogZGF0YXN0b3JlLmlkLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IHByb2dyZXNzVHJhY2tlci50ZXJtaW5hdGUoKSxcbiAgICAgICAgICAgIGNvbnNpc3RlbmN5OiAnY29tbWl0dGVkJyxcbiAgICAgICAgICAgIGRvY01ldGFNdXRhdGlvbnM6IFtdLFxuICAgICAgICAgICAgYmF0Y2g6IHtcbiAgICAgICAgICAgICAgICBpZDogYmF0Y2guaWQsXG4gICAgICAgICAgICAgICAgdGVybWluYXRlZDogdHJ1ZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHsgfTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhbGwgdGhlIGRvY3MgaW4gYSBkYXRhc3RvcmUuICBPbmx5IGRvIHRoaXMgZm9yIHRlc3RpbmcgYW5kIGZvclxuICAgICAqIHZlcnkgaW1wb3J0YW50IHVzZSBjYXNlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHB1cmdlKGRhdGFzdG9yZTogRGF0YXN0b3JlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVyZ2VMaXN0ZW5lcjogUHVyZ2VMaXN0ZW5lciA9IE5VTExfRlVOQ1RJT04pIHtcblxuICAgICAgICBjb25zdCBkb2NNZXRhRmlsZXMgPSBhd2FpdCBkYXRhc3RvcmUuZ2V0RG9jTWV0YVJlZnMoKTtcblxuICAgICAgICBsZXQgY29tcGxldGVkOiBudW1iZXIgPSAwO1xuICAgICAgICBjb25zdCB0b3RhbDogbnVtYmVyID0gZG9jTWV0YUZpbGVzLmxlbmd0aDtcblxuICAgICAgICBjb25zdCB3b3JrOiBBc3luY0Z1bmN0aW9uW10gPSBbXTtcblxuICAgICAgICBjb25zdCBhc3luY1dvcmtRdWV1ZSA9IG5ldyBBc3luY1dvcmtRdWV1ZSh3b3JrKTtcblxuICAgICAgICBmb3IgKGNvbnN0IGRvY01ldGFGaWxlIG9mIGRvY01ldGFGaWxlcykge1xuXG4gICAgICAgICAgICAvLyBUT0RPOiB3ZSdyZSBub3QgcHVyZ2luZyB0aGUgZmlsZXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBkb2NzLi4uIHRoZVxuICAgICAgICAgICAgLy8gc3Rhc2ggZmlsZSBpcyBwdXJnZWQgYXMgcGFydCBvZiB0aGUgZGVsZXRlIHJpZ2h0IG5vdyBhbmQgSSBjb3VsZFxuICAgICAgICAgICAgLy8gcHV0IHRoZSBvdGhlciBmaWxlcyB0aGVyZSBhcyB3ZWxsIHNvIHRoYXQgd2F5IHdlIGFsd2F5cyBtYWtlIHN1cmVcbiAgICAgICAgICAgIC8vIHRoZXJlIGFyZSBubyBkZXBlbmRlbmNpZXMgdGFuZ2xpbmdcblxuICAgICAgICAgICAgLy8gVE9ETzogdXNlIGEgUHJvZ3Jlc3NUcmFja2VyIGhlcmUgaW5zdGVhZCBvZiBjb21wdXRpbmcgdGhlIHByb2dyZXNzXG4gICAgICAgICAgICAvLyBkaXJlY3RseSB3aGljaCBpcyBlcnJvciBwcm9uZS5cblxuICAgICAgICAgICAgd29yay5wdXNoKGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkYXRhc3RvcmUuZ2V0RG9jTWV0YShkb2NNZXRhRmlsZS5maW5nZXJwcmludCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZG9jTWV0YSA9IERvY01ldGFzLmRlc2VyaWFsaXplKGRhdGEhLCBkb2NNZXRhRmlsZS5maW5nZXJwcmludCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkb2NNZXRhRmlsZVJlZiA9IERvY01ldGFGaWxlUmVmcy5jcmVhdGVGcm9tRG9jSW5mbyhkb2NNZXRhLmRvY0luZm8pO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgZGF0YXN0b3JlLmRlbGV0ZShkb2NNZXRhRmlsZVJlZik7XG5cbiAgICAgICAgICAgICAgICArK2NvbXBsZXRlZDtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gUGVyY2VudGFnZXMuY2FsY3VsYXRlKGNvbXBsZXRlZCwgdG90YWwpO1xuXG4gICAgICAgICAgICAgICAgcHVyZ2VMaXN0ZW5lcih7Y29tcGxldGVkLCB0b3RhbCwgcHJvZ3Jlc3N9KTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IGFzeW5jV29ya1F1ZXVlLmV4ZWN1dGUoKTtcblxuICAgICAgICBpZiAodG90YWwgPT09IDApIHtcbiAgICAgICAgICAgIHB1cmdlTGlzdGVuZXIoe2NvbXBsZXRlZCwgdG90YWwsIHByb2dyZXNzOiAxMDB9KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29tcGFyZSB0d28gZmlsZXN5c3RlbXMgYW5kIG1ha2Ugc3VyZSB0aGV5J3JlIGNvbnNpc3RlbnQuXG4gICAgICpcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGNoZWNrQ29uc2lzdGVuY3koZGF0YXN0b3JlMDogRGF0YXN0b3JlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhc3RvcmUxOiBEYXRhc3RvcmUpOiBQcm9taXNlPERhdGFzdG9yZUNvbnNpc3RlbmN5PiB7XG5cbiAgICAgICAgLy8gZ2V0IHRoZSBkb2NNZXRhcyBpbiBib3RoLCB0aGVuIGNvbXBhcmUgdGhlbS4uLlxuXG4gICAgICAgIGNvbnN0IG1hbmlmZXN0MCA9IGF3YWl0IHRoaXMudG9Eb2NJbmZvTWFuaWZlc3QoZGF0YXN0b3JlMCk7XG4gICAgICAgIGNvbnN0IG1hbmlmZXN0MSA9IGF3YWl0IHRoaXMudG9Eb2NJbmZvTWFuaWZlc3QoZGF0YXN0b3JlMSk7XG5cbiAgICAgICAgY29uc3QgY29uc2lzdGVudCA9IGRlZXBFcXVhbChtYW5pZmVzdDAsIG1hbmlmZXN0MSk7XG5cbiAgICAgICAgcmV0dXJuIHtjb25zaXN0ZW50LCBtYW5pZmVzdDAsIG1hbmlmZXN0MX07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHRvRG9jSW5mb01hbmlmZXN0KGRhdGFzdG9yZTogRGF0YXN0b3JlKTogUHJvbWlzZTxSZWFkb25seUFycmF5PERvY0luZm8+PiB7XG5cbiAgICAgICAgY29uc3QgcGVyc2lzdGVuY2VMYXllciA9IG5ldyBEZWZhdWx0UGVyc2lzdGVuY2VMYXllcihkYXRhc3RvcmUpO1xuXG4gICAgICAgIGNvbnN0IGRvY01ldGFGaWxlcyA9XG4gICAgICAgICAgICAoYXdhaXQgZGF0YXN0b3JlLmdldERvY01ldGFSZWZzKCkpXG4gICAgICAgICAgICAgICAgLnNvcnQoKGQwLCBkMSkgPT4gZDAuZmluZ2VycHJpbnQubG9jYWxlQ29tcGFyZShkMS5maW5nZXJwcmludCkpO1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdDogRG9jSW5mb1tdID0gW107XG5cbiAgICAgICAgZm9yIChjb25zdCBkb2NNZXRhRmlsZSBvZiBkb2NNZXRhRmlsZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGRvY01ldGEgPSBhd2FpdCBwZXJzaXN0ZW5jZUxheWVyLmdldERvY01ldGEoZG9jTWV0YUZpbGUuZmluZ2VycHJpbnQpO1xuICAgICAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnRQcmVzZW50KGRvY01ldGEsIFwidG9Eb2NJbmZvTWFuaWZlc3QgY291bGQgbm90IGZpbmQgZG9jTWV0YSBmb3IgXCIgKyBkb2NNZXRhRmlsZS5maW5nZXJwcmludCk7XG4gICAgICAgICAgICByZXN1bHQucHVzaChkb2NNZXRhIS5kb2NJbmZvKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IHR5cGUgRG9jTWV0YUxpc3RlbmVyID0gKGRvY01ldGE6IERvY01ldGEpID0+IHZvaWQ7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHVyZ2VFdmVudCB7XG4gICAgcmVhZG9ubHkgY29tcGxldGVkOiBudW1iZXI7XG4gICAgcmVhZG9ubHkgdG90YWw6IG51bWJlcjtcbiAgICByZWFkb25seSBwcm9ncmVzczogbnVtYmVyO1xufVxuXG5leHBvcnQgdHlwZSBQdXJnZUxpc3RlbmVyID0gKHB1cmdlRXZlbnQ6IFB1cmdlRXZlbnQpID0+IHZvaWQ7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YXN0b3JlQ29uc2lzdGVuY3kge1xuICAgIHJlYWRvbmx5IGNvbnNpc3RlbnQ6IGJvb2xlYW47XG4gICAgcmVhZG9ubHkgbWFuaWZlc3QwOiBSZWFkb25seUFycmF5PERvY0luZm8+O1xuICAgIHJlYWRvbmx5IG1hbmlmZXN0MTogUmVhZG9ubHlBcnJheTxEb2NJbmZvPjtcbn1cbiJdfQ==