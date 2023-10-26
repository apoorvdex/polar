"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Datastore_1 = require("./Datastore");
const DatastoreMutation_1 = require("./DatastoreMutation");
const Logger_1 = require("../logger/Logger");
const DocMetaComparisonIndex_1 = require("./DocMetaComparisonIndex");
const PersistenceLayers_1 = require("./PersistenceLayers");
const DocMetaSnapshotEventListeners_1 = require("./DocMetaSnapshotEventListeners");
const Latch_1 = require("../util/Latch");
const Functions_1 = require("../util/Functions");
const SimpleReactor_1 = require("../reactor/SimpleReactor");
const firebase = __importStar(require("../firebase/lib/firebase"));
const Dictionaries_1 = require("../util/Dictionaries");
const log = Logger_1.Logger.create();
class CloudAwareDatastore extends Datastore_1.AbstractDatastore {
    constructor(local, cloud) {
        super();
        this.id = 'cloud-aware';
        this.fileSynchronizationEventDispatcher = new SimpleReactor_1.SimpleReactor();
        this.synchronizationEventDispatcher = new SimpleReactor_1.SimpleReactor();
        this.docMetaSnapshotEventDispatcher = new SimpleReactor_1.SimpleReactor();
        this.docMetaComparisonIndex = new DocMetaComparisonIndex_1.DocMetaComparisonIndex();
        this.shutdownHook = Functions_1.ASYNC_NULL_FUNCTION;
        this.local = local;
        this.cloud = cloud;
    }
    init(errorListener = Functions_1.NULL_FUNCTION) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Promise.all([
                this.cloud.init(errorListener, { noInitialSnapshot: true }),
                this.local.init(errorListener)
            ]);
            const snapshotListener = (event) => __awaiter(this, void 0, void 0, function* () { return this.docMetaSnapshotEventDispatcher.dispatchEvent(event); });
            this.primarySnapshot = yield this.snapshot(snapshotListener, errorListener);
            return {};
        });
    }
    stop() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.shutdownHook();
            if (this.primarySnapshot && this.primarySnapshot.unsubscribe) {
                this.primarySnapshot.unsubscribe();
            }
            yield Promise.all([this.cloud.stop(), this.local.stop()]);
        });
    }
    contains(fingerprint) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.local.contains(fingerprint);
        });
    }
    getDocMeta(fingerprint) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.local.getDocMeta(fingerprint);
        });
    }
    writeFile(backend, ref, data, meta = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = this.local.writeFile(backend, ref, data, meta);
            this.cloud.writeFile(backend, ref, data, meta)
                .catch(err => log.error("Unable to write file to cloud: ", err));
            return result;
        });
    }
    getFile(backend, ref) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.local.getFile(backend, ref);
        });
    }
    containsFile(backend, ref) {
        return this.local.containsFile(backend, ref);
    }
    deleteFile(backend, ref) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.cloud.deleteFile(backend, ref);
            return this.local.deleteFile(backend, ref);
        });
    }
    delete(docMetaFileRef, datastoreMutation = new DatastoreMutation_1.DefaultDatastoreMutation()) {
        return __awaiter(this, void 0, void 0, function* () {
            datastoreMutation.written.get()
                .then(() => {
                this.docMetaComparisonIndex.remove(docMetaFileRef.fingerprint);
            })
                .catch(err => log.error("Could not handle delete: ", err));
            yield this.datastoreMutations.executeBatchedWrite(datastoreMutation, (remoteCoordinator) => __awaiter(this, void 0, void 0, function* () {
                yield this.cloud.delete(docMetaFileRef, remoteCoordinator);
            }), (localCoordinator) => __awaiter(this, void 0, void 0, function* () {
                yield this.local.delete(docMetaFileRef, localCoordinator);
            }));
            return {};
        });
    }
    write(fingerprint, data, docInfo, datastoreMutation = new DatastoreMutation_1.DefaultDatastoreMutation()) {
        return __awaiter(this, void 0, void 0, function* () {
            datastoreMutation
                .written.get().then(() => {
                this.docMetaComparisonIndex.updateUsingDocInfo(docInfo);
            })
                .catch(err => log.error("Could not handle delete: ", err));
            yield this.datastoreMutations.executeBatchedWrite(datastoreMutation, (remoteCoordinator) => __awaiter(this, void 0, void 0, function* () {
                yield this.cloud.write(fingerprint, data, docInfo, remoteCoordinator);
            }), (localCoordinator) => __awaiter(this, void 0, void 0, function* () {
                yield this.local.write(fingerprint, data, docInfo, localCoordinator);
            }));
        });
    }
    getDocMetaRefs() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.local.getDocMetaRefs();
        });
    }
    synchronizeDocs(...docMetaRefs) {
        return __awaiter(this, void 0, void 0, function* () {
            log.info("CloudAwareDatastore: synchronizeDocs: ", docMetaRefs);
            const toSyncOrigin = (datastore, ...docMetaRefs) => __awaiter(this, void 0, void 0, function* () {
                const syncDocMap = yield PersistenceLayers_1.PersistenceLayers.toSyncDocMapFromDocs(datastore, docMetaRefs);
                return {
                    datastore,
                    syncDocMap
                };
            });
            const clearDocMeta = (...docMetaRefs) => {
                return docMetaRefs.map(current => {
                    return {
                        fingerprint: current.fingerprint
                    };
                });
            };
            const cloudSyncOrigin = yield toSyncOrigin(this.cloud, ...clearDocMeta(...docMetaRefs));
            const localSyncOrigin = yield toSyncOrigin(this.local, ...docMetaRefs);
            yield PersistenceLayers_1.PersistenceLayers.synchronizeOrigins(localSyncOrigin, cloudSyncOrigin, Functions_1.ASYNC_NULL_FUNCTION);
        });
    }
    snapshot(docMetaSnapshotEventListener, errorListener = Functions_1.NULL_FUNCTION) {
        return __awaiter(this, void 0, void 0, function* () {
            const isPrimarySnapshot = this.primarySnapshot === undefined;
            const snapshotID = CloudAwareDatastore.SNAPSHOT_ID++;
            const deduplicatedListener = DocMetaSnapshotEventListeners_1.DocMetaSnapshotEventListeners.createDeduplicatedListener((docMetaSnapshotEvent) => __awaiter(this, void 0, void 0, function* () {
                yield docMetaSnapshotEventListener(docMetaSnapshotEvent);
            }));
            class InitialSnapshotLatch {
                constructor(id) {
                    this.syncDocMap = {};
                    this.latch = new Latch_1.Latch();
                    this.hasInitialTerminatedBatch = false;
                    this.pending = 0;
                    this.id = id;
                }
                handleSnapshot(docMetaSnapshotEvent) {
                    return __awaiter(this, void 0, void 0, function* () {
                        try {
                            if (this.hasInitialTerminatedBatch) {
                                return;
                            }
                            if (!docMetaSnapshotEvent.batch || docMetaSnapshotEvent.batch.id !== 0) {
                                return;
                            }
                            ++this.pending;
                            const syncDocs = yield Datastore_1.DocMetaSnapshotEvents.toSyncDocs(docMetaSnapshotEvent);
                            Datastore_1.SyncDocMaps.putAll(this.syncDocMap, syncDocs);
                            if (docMetaSnapshotEvent.consistency === 'committed' &&
                                docMetaSnapshotEvent.batch.terminated) {
                                const nrDocs = Dictionaries_1.Dictionaries.size(this.syncDocMap);
                                this.hasInitialTerminatedBatch = true;
                            }
                        }
                        finally {
                            --this.pending;
                            if (this.hasInitialTerminatedBatch && this.pending === 0) {
                                this.latch.resolve(true);
                            }
                        }
                    });
                }
                createSnapshot(datastore) {
                    return datastore.snapshot((docMetaSnapshotEvent) => __awaiter(this, void 0, void 0, function* () {
                        if (!initialSyncCompleted) {
                            yield this.handleSnapshot(docMetaSnapshotEvent);
                        }
                        yield synchronizingListener(docMetaSnapshotEvent);
                    }), errorListener);
                }
            }
            let initialSyncCompleted = false;
            const localInitialSnapshotLatch = new InitialSnapshotLatch('local');
            const cloudInitialSnapshotLatch = new InitialSnapshotLatch('cloud');
            const synchronizingEventDeduplicator = DocMetaSnapshotEventListeners_1.DocMetaSnapshotEventListeners.createDeduplicatedListener((docMetaSnapshotEvent) => __awaiter(this, void 0, void 0, function* () {
                const handleEvent = () => __awaiter(this, void 0, void 0, function* () {
                    try {
                        if (initialSyncCompleted && isPrimarySnapshot) {
                            yield this.handleSnapshotSynchronization(docMetaSnapshotEvent, deduplicatedListener.listener);
                        }
                    }
                    finally {
                        yield docMetaSnapshotEventListener(docMetaSnapshotEvent);
                    }
                });
                handleEvent()
                    .catch(err => {
                    log.error(`Unable to handle synchronizing snapshot ${snapshotID}`, err);
                    errorListener(err);
                });
            }), this.docMetaComparisonIndex);
            const synchronizingListener = synchronizingEventDeduplicator.listener;
            log.info("Local snapshot...");
            const localSnapshotResultPromise = localInitialSnapshotLatch.createSnapshot(this.local);
            yield localInitialSnapshotLatch.latch.get();
            log.info("Local snapshot...done");
            log.info("Cloud snapshot...");
            const cloudSnapshotResultPromise = cloudInitialSnapshotLatch.createSnapshot(this.cloud);
            yield cloudInitialSnapshotLatch.latch.get();
            log.info("Cloud snapshot...done");
            const localSyncOrigin = {
                datastore: this.local,
                syncDocMap: localInitialSnapshotLatch.syncDocMap
            };
            const cloudSyncOrigin = {
                datastore: this.cloud,
                syncDocMap: cloudInitialSnapshotLatch.syncDocMap
            };
            if (isPrimarySnapshot) {
                yield PersistenceLayers_1.PersistenceLayers.synchronizeOrigins(localSyncOrigin, cloudSyncOrigin, deduplicatedListener.listener);
            }
            initialSyncCompleted = true;
            yield localSnapshotResultPromise;
            const cloudSnapshotResult = yield cloudSnapshotResultPromise;
            log.notice("INITIAL SNAPSHOT COMPLETE");
            return {
                unsubscribe: cloudSnapshotResult.unsubscribe
            };
        });
    }
    handleSnapshotSynchronization(docMetaSnapshotEvent, listener) {
        return __awaiter(this, void 0, void 0, function* () {
            const toLocalSyncOrigin = () => __awaiter(this, void 0, void 0, function* () {
                const docaMetaFiles = docMetaSnapshotEvent.docMetaMutations.map(current => {
                    return { fingerprint: current.fingerprint };
                });
                const syncDocMap = yield PersistenceLayers_1.PersistenceLayers.toSyncDocMapFromDocs(this.local, docaMetaFiles);
                return {
                    datastore: this.local,
                    syncDocMap
                };
            });
            const toCloudSyncOrigin = () => __awaiter(this, void 0, void 0, function* () {
                const syncDocs = yield Datastore_1.DocMetaSnapshotEvents.toSyncDocs(docMetaSnapshotEvent);
                return {
                    datastore: this.cloud,
                    syncDocMap: Datastore_1.SyncDocMaps.fromArray(syncDocs)
                };
            });
            if (docMetaSnapshotEvent.consistency !== 'committed') {
                return;
            }
            for (const docMetaMutation of docMetaSnapshotEvent.docMetaMutations) {
                if (docMetaMutation.mutationType === 'created' || docMetaMutation.mutationType === 'updated') {
                    const cloudSyncOrigin = yield toCloudSyncOrigin();
                    const localSyncOrigin = yield toLocalSyncOrigin();
                    log.info("Transferring from cloud -> local...");
                    yield PersistenceLayers_1.PersistenceLayers.transfer(cloudSyncOrigin, localSyncOrigin, listener, 'cloud-to-local');
                    log.info("Transferring from cloud -> local...done");
                }
                if (docMetaMutation.mutationType === 'deleted') {
                    const docMetaFileRef = yield docMetaMutation.docMetaFileRefProvider();
                    log.warn("File deleted: ", docMetaFileRef);
                    yield this.local.delete(docMetaFileRef);
                }
            }
            this.synchronizationEventDispatcher.dispatchEvent(Object.assign({}, docMetaSnapshotEvent, { dest: 'local' }));
        });
    }
    addFileSynchronizationEventListener(eventListener) {
        this.fileSynchronizationEventDispatcher.addEventListener(eventListener);
    }
    addSynchronizationEventListener(eventListener) {
        this.synchronizationEventDispatcher.addEventListener(eventListener);
    }
    addDocMetaSnapshotEventListener(docMetaSnapshotEventListener) {
        this.docMetaSnapshotEventDispatcher.addEventListener(docMetaSnapshotEventListener);
    }
    deactivate() {
        return __awaiter(this, void 0, void 0, function* () {
            yield firebase.auth().signOut();
        });
    }
    overview() {
        return this.local.overview();
    }
    getPrefs() {
        return this.local.getPrefs();
    }
}
CloudAwareDatastore.SNAPSHOT_ID = 0;
exports.CloudAwareDatastore = CloudAwareDatastore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xvdWRBd2FyZURhdGFzdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNsb3VkQXdhcmVEYXRhc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBbWE7QUFPbmEsMkRBQWdGO0FBRWhGLDZDQUF3QztBQUN4QyxxRUFBZ0U7QUFDaEUsMkRBQWtFO0FBQ2xFLG1GQUFpRztBQUNqRyx5Q0FBb0M7QUFDcEMsaURBQXFFO0FBQ3JFLDREQUF5RTtBQUV6RSxtRUFBcUQ7QUFDckQsdURBQWtEO0FBR2xELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQWE1QixNQUFhLG1CQUFvQixTQUFRLDZCQUFpQjtJQXdCdEQsWUFBWSxLQUFnQixFQUFFLEtBQWdCO1FBQzFDLEtBQUssRUFBRSxDQUFDO1FBbkJJLE9BQUUsR0FBRyxhQUFhLENBQUM7UUFNbEIsdUNBQWtDLEdBQStDLElBQUksNkJBQWEsRUFBRSxDQUFDO1FBRXJHLG1DQUE4QixHQUEyQyxJQUFJLDZCQUFhLEVBQUUsQ0FBQztRQUU3RixtQ0FBOEIsR0FBMkMsSUFBSSw2QkFBYSxFQUFFLENBQUM7UUFFN0YsMkJBQXNCLEdBQUcsSUFBSSwrQ0FBc0IsRUFBRSxDQUFDO1FBSWhFLGlCQUFZLEdBQWtCLCtCQUFtQixDQUFDO1FBSXJELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFWSxJQUFJLENBQUMsZ0JBQStCLHlCQUFhOztZQUUxRCxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUM7Z0JBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUMsaUJBQWlCLEVBQUUsSUFBSSxFQUFDLENBQUM7Z0JBQ3pELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQzthQUNqQyxDQUFD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QkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRU0sK0JBQStCLENBQUMsNEJBQTBEO1FBQzdGLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxnQkFBZ0IsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7SUFFWSxVQUFVOztZQUNuQixNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwQyxDQUFDO0tBQUE7SUFFTSxRQUFRO1FBQ1gsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFTSxRQUFRO1FBQ1gsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pDLENBQUM7O0FBMWJjLCtCQUFXLEdBQUcsQ0FBQyxDQUFDO0FBSm5DLGtEQWdjQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWJzdHJhY3REYXRhc3RvcmUsIEJpbmFyeUZpbGVEYXRhLCBEYXRhc3RvcmUsIERlbGV0ZVJlc3VsdCwgRG9jTWV0YVNuYXBzaG90RXZlbnQsIERvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIsIERvY01ldGFTbmFwc2hvdEV2ZW50cywgRXJyb3JMaXN0ZW5lciwgRmlsZU1ldGEsIEZpbGVSZWYsIEZpbGVTeW5jaHJvbml6YXRpb25FdmVudCwgRmlsZVN5bmNocm9uaXphdGlvbkV2ZW50TGlzdGVuZXIsIEluaXRSZXN1bHQsIFNuYXBzaG90UmVzdWx0LCBTeW5jRG9jTWFwLCBTeW5jRG9jTWFwcywgU3luY2hyb25pemF0aW9uRXZlbnQsIFN5bmNocm9uaXphdGlvbkV2ZW50TGlzdGVuZXIsIFN5bmNocm9uaXppbmdEYXRhc3RvcmUsIERhdGFzdG9yZU92ZXJ2aWV3LCBQcmVmc1Byb3ZpZGVyfSBmcm9tICcuL0RhdGFzdG9yZSc7XG5pbXBvcnQge0RpcmVjdG9yaWVzfSBmcm9tICcuL0RpcmVjdG9yaWVzJztcbmltcG9ydCB7RG9jTWV0YUZpbGVSZWYsIERvY01ldGFSZWZ9IGZyb20gJy4vRG9jTWV0YVJlZic7XG5pbXBvcnQge0JhY2tlbmR9IGZyb20gJy4vQmFja2VuZCc7XG5pbXBvcnQge0RvY0ZpbGVNZXRhfSBmcm9tICcuL0RvY0ZpbGVNZXRhJztcbmltcG9ydCB7T3B0aW9uYWx9IGZyb20gJy4uL3V0aWwvdHMvT3B0aW9uYWwnO1xuaW1wb3J0IHtEb2NJbmZvfSBmcm9tICcuLi9tZXRhZGF0YS9Eb2NJbmZvJztcbmltcG9ydCB7RGF0YXN0b3JlTXV0YXRpb24sIERlZmF1bHREYXRhc3RvcmVNdXRhdGlvbn0gZnJvbSAnLi9EYXRhc3RvcmVNdXRhdGlvbic7XG5pbXBvcnQge1VVSUR9IGZyb20gJy4uL21ldGFkYXRhL1VVSUQnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gXCIuLi9sb2dnZXIvTG9nZ2VyXCI7XG5pbXBvcnQge0RvY01ldGFDb21wYXJpc29uSW5kZXh9IGZyb20gJy4vRG9jTWV0YUNvbXBhcmlzb25JbmRleCc7XG5pbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJzLCBTeW5jT3JpZ2lufSBmcm9tICcuL1BlcnNpc3RlbmNlTGF5ZXJzJztcbmltcG9ydCB7RG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcnMsIEV2ZW50RGVkdXBsaWNhdG9yfSBmcm9tICcuL0RvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXJzJztcbmltcG9ydCB7TGF0Y2h9IGZyb20gJy4uL3V0aWwvTGF0Y2gnO1xuaW1wb3J0IHtBU1lOQ19OVUxMX0ZVTkNUSU9OLCBOVUxMX0ZVTkNUSU9OfSBmcm9tICcuLi91dGlsL0Z1bmN0aW9ucyc7XG5pbXBvcnQge0lFdmVudERpc3BhdGNoZXIsIFNpbXBsZVJlYWN0b3J9IGZyb20gJy4uL3JlYWN0b3IvU2ltcGxlUmVhY3Rvcic7XG5pbXBvcnQge0FzeW5jRnVuY3Rpb259IGZyb20gJy4uL3V0aWwvQXN5bmNXb3JrUXVldWUnO1xuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnLi4vZmlyZWJhc2UvbGliL2ZpcmViYXNlJztcbmltcG9ydCB7RGljdGlvbmFyaWVzfSBmcm9tICcuLi91dGlsL0RpY3Rpb25hcmllcyc7XG5pbXBvcnQge0xvY2FsU3RvcmFnZVByZWZzfSBmcm9tICcuLi91dGlsL3ByZWZzL1ByZWZzJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgaW50ZXJmYWNlIENsb3VkQXdhcmVEZWxldGVSZXN1bHQgZXh0ZW5kcyBEZWxldGVSZXN1bHQge1xuXG59XG5cbi8qKlxuICogQSBDbG91ZEF3YXJlRGF0YXN0b3JlIGFsbG93cyB1cyB0byBoYXZlIG9uZSBkYXRhc3RvcmUgd2l0aCBhIGxvY2FsIGNvcHkgYW5kXG4gKiByZW1vdGUgZGF0YXN0b3JlIGJhY2tpbmcgdGhlbS4gIFJlYWRzIGFyZSByZXNvbHZlZCB2aWEgdGhlIGxvY2FsIGRhdGEgc3RvcmVcbiAqIGFuZCB3cml0ZXMgYXJlIHJlc29sdmVkIHRvIGJvdGggdGhlIHJlbW90ZSBhbmQgbG9jYWwgY29uY3VycmVudGx5LlxuICogVGhlIHJldmVyc2UgaXMgdHJ1ZSB0b28uIElmIHdlIHN0YXJ0dXAgYW5kIHRoZXJlIGlzIGFuIGV4Y2VzcyBmaWxlIGluIHRoZVxuICogcmVtb3RlLCBpdCdzIGNvcGllZCBsb2NhbC5cbiAqL1xuZXhwb3J0IGNsYXNzIENsb3VkQXdhcmVEYXRhc3RvcmUgZXh0ZW5kcyBBYnN0cmFjdERhdGFzdG9yZSBpbXBsZW1lbnRzIERhdGFzdG9yZSwgU3luY2hyb25pemluZ0RhdGFzdG9yZSB7XG5cbiAgICAvLyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiB0aGUgc25hcHNob3QgaWQgc28gdGhhdCB3aGVuIHdlIHJlcG9ydCBlcnJvcnNcbiAgICAvLyB3ZSBjYW4ga25vdyB3aGljaCBzbmFwc2hvdCBmYWlsZWQuXG4gICAgcHJpdmF0ZSBzdGF0aWMgU05BUFNIT1RfSUQgPSAwO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGlkID0gJ2Nsb3VkLWF3YXJlJztcblxuICAgIHB1YmxpYyByZWFkb25seSBsb2NhbDogRGF0YXN0b3JlO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGNsb3VkOiBEYXRhc3RvcmU7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGZpbGVTeW5jaHJvbml6YXRpb25FdmVudERpc3BhdGNoZXI6IElFdmVudERpc3BhdGNoZXI8RmlsZVN5bmNocm9uaXphdGlvbkV2ZW50PiA9IG5ldyBTaW1wbGVSZWFjdG9yKCk7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHN5bmNocm9uaXphdGlvbkV2ZW50RGlzcGF0Y2hlcjogSUV2ZW50RGlzcGF0Y2hlcjxTeW5jaHJvbml6YXRpb25FdmVudD4gPSBuZXcgU2ltcGxlUmVhY3RvcigpO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBkb2NNZXRhU25hcHNob3RFdmVudERpc3BhdGNoZXI6IElFdmVudERpc3BhdGNoZXI8RG9jTWV0YVNuYXBzaG90RXZlbnQ+ID0gbmV3IFNpbXBsZVJlYWN0b3IoKTtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgZG9jTWV0YUNvbXBhcmlzb25JbmRleCA9IG5ldyBEb2NNZXRhQ29tcGFyaXNvbkluZGV4KCk7XG5cbiAgICBwcml2YXRlIHByaW1hcnlTbmFwc2hvdD86IFNuYXBzaG90UmVzdWx0O1xuXG4gICAgcHVibGljIHNodXRkb3duSG9vazogQXN5bmNGdW5jdGlvbiA9IEFTWU5DX05VTExfRlVOQ1RJT047XG5cbiAgICBjb25zdHJ1Y3Rvcihsb2NhbDogRGF0YXN0b3JlLCBjbG91ZDogRGF0YXN0b3JlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubG9jYWwgPSBsb2NhbDtcbiAgICAgICAgdGhpcy5jbG91ZCA9IGNsb3VkO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBpbml0KGVycm9yTGlzdGVuZXI6IEVycm9yTGlzdGVuZXIgPSBOVUxMX0ZVTkNUSU9OKTogUHJvbWlzZTxJbml0UmVzdWx0PiB7XG5cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgdGhpcy5jbG91ZC5pbml0KGVycm9yTGlzdGVuZXIsIHtub0luaXRpYWxTbmFwc2hvdDogdHJ1ZX0pLFxuICAgICAgICAgICAgdGhpcy5sb2NhbC5pbml0KGVycm9yTGlzdGVuZXIpXG4gICAgICAgIF0pO1xuXG4gICAgICAgIGNvbnN0IHNuYXBzaG90TGlzdGVuZXIgPSBhc3luYyAoZXZlbnQ6IERvY01ldGFTbmFwc2hvdEV2ZW50KSA9PiB0aGlzLmRvY01ldGFTbmFwc2hvdEV2ZW50RGlzcGF0Y2hlci5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblxuICAgICAgICB0aGlzLnByaW1hcnlTbmFwc2hvdCA9IGF3YWl0IHRoaXMuc25hcHNob3Qoc25hcHNob3RMaXN0ZW5lciwgZXJyb3JMaXN0ZW5lcik7XG5cbiAgICAgICAgcmV0dXJuIHt9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHN0b3AoKSB7XG5cbiAgICAgICAgLy8gVE9ETzogYWxsIHNuYXBzaG90cyB0aGF0IGhhdmUgYmVlbiBoYW5kZWQgb3V0IHNob3VsZCBiZSBzdG9wcGVkLi4uXG5cbiAgICAgICAgLy8gd2UgaGF2ZSB0byBoYXZlIHRoZSBzaHV0ZG93biBydW4gQkVGT1JFIHdlIGFjdHVhbGx5IHNodXQgZG93biBvciB3ZVxuICAgICAgICAvLyBtaWdodCBiZSB3ZWlyZCBhbmQgdW51c3VhbCBiZWhhdmlvci5cbiAgICAgICAgYXdhaXQgdGhpcy5zaHV0ZG93bkhvb2soKTtcblxuICAgICAgICBpZiAodGhpcy5wcmltYXJ5U25hcHNob3QgJiYgdGhpcy5wcmltYXJ5U25hcHNob3QudW5zdWJzY3JpYmUpIHtcbiAgICAgICAgICAgIHRoaXMucHJpbWFyeVNuYXBzaG90LnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbdGhpcy5jbG91ZC5zdG9wKCksIHRoaXMubG9jYWwuc3RvcCgpXSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY29udGFpbnMoZmluZ2VycHJpbnQ6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbC5jb250YWlucyhmaW5nZXJwcmludCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGdldERvY01ldGEoZmluZ2VycHJpbnQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbC5nZXREb2NNZXRhKGZpbmdlcnByaW50KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgd3JpdGVGaWxlKGJhY2tlbmQ6IEJhY2tlbmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IEZpbGVSZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBCaW5hcnlGaWxlRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGE6IEZpbGVNZXRhID0ge30pOiBQcm9taXNlPERvY0ZpbGVNZXRhPiB7XG5cblxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmxvY2FsLndyaXRlRmlsZShiYWNrZW5kLCByZWYsIGRhdGEsIG1ldGEpO1xuXG4gICAgICAgIC8vIGRvbid0IGF3YWl0IHRoZSBjbG91ZCB3cml0ZS4gIE9uY2UgaXQncyB3cml0dGVuIGxvY2FsbHkgd2UncmUgZmluZVxuICAgICAgICAvLyBpZiBpdCdzIG5vdCBpbiB0aGUgY2xvdWQgd2UgZ2V0IGFuIGVycm9yIGxvZ2dlZCBhbmQgd2Ugc2hvdWxkIGFsc29cbiAgICAgICAgLy8gaGF2ZSB0YXNrIHByb2dyZXNzIGluIHRoZSBmdXR1cmUuXG4gICAgICAgIHRoaXMuY2xvdWQud3JpdGVGaWxlKGJhY2tlbmQsIHJlZiwgZGF0YSwgbWV0YSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gbG9nLmVycm9yKFwiVW5hYmxlIHRvIHdyaXRlIGZpbGUgdG8gY2xvdWQ6IFwiLCBlcnIpKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGdldEZpbGUoYmFja2VuZDogQmFja2VuZCwgcmVmOiBGaWxlUmVmKTogUHJvbWlzZTxPcHRpb25hbDxEb2NGaWxlTWV0YT4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWwuZ2V0RmlsZShiYWNrZW5kLCByZWYpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb250YWluc0ZpbGUoYmFja2VuZDogQmFja2VuZCwgcmVmOiBGaWxlUmVmKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsLmNvbnRhaW5zRmlsZShiYWNrZW5kLCByZWYpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBkZWxldGVGaWxlKGJhY2tlbmQ6IEJhY2tlbmQsIHJlZjogRmlsZVJlZik6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIGF3YWl0IHRoaXMuY2xvdWQuZGVsZXRlRmlsZShiYWNrZW5kLCByZWYpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsLmRlbGV0ZUZpbGUoYmFja2VuZCwgcmVmKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBkZWxldGUoZG9jTWV0YUZpbGVSZWY6IERvY01ldGFGaWxlUmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXN0b3JlTXV0YXRpb246IERhdGFzdG9yZU11dGF0aW9uPGJvb2xlYW4+ID0gbmV3IERlZmF1bHREYXRhc3RvcmVNdXRhdGlvbigpKTpcbiAgICAgICAgUHJvbWlzZTxSZWFkb25seTxDbG91ZEF3YXJlRGVsZXRlUmVzdWx0Pj4ge1xuXG4gICAgICAgIGRhdGFzdG9yZU11dGF0aW9uLndyaXR0ZW4uZ2V0KClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcblxuICAgICAgICAgICAgICAgIHRoaXMuZG9jTWV0YUNvbXBhcmlzb25JbmRleC5yZW1vdmUoZG9jTWV0YUZpbGVSZWYuZmluZ2VycHJpbnQpO1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gdGhpcyBzaG91bGQgbmV2ZXIgZmFpbCBpbiBwcmFjdGljZS5cbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gbG9nLmVycm9yKFwiQ291bGQgbm90IGhhbmRsZSBkZWxldGU6IFwiLCBlcnIpKTtcblxuICAgICAgICBhd2FpdCB0aGlzLmRhdGFzdG9yZU11dGF0aW9ucy5leGVjdXRlQmF0Y2hlZFdyaXRlKGRhdGFzdG9yZU11dGF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jIChyZW1vdGVDb29yZGluYXRvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmNsb3VkLmRlbGV0ZShkb2NNZXRhRmlsZVJlZiwgcmVtb3RlQ29vcmRpbmF0b3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmMgKGxvY2FsQ29vcmRpbmF0b3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5sb2NhbC5kZWxldGUoZG9jTWV0YUZpbGVSZWYsIGxvY2FsQ29vcmRpbmF0b3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB7fTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyB3cml0ZShmaW5nZXJwcmludDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgIGRvY0luZm86IERvY0luZm8sXG4gICAgICAgICAgICAgICAgICAgICAgIGRhdGFzdG9yZU11dGF0aW9uOiBEYXRhc3RvcmVNdXRhdGlvbjxib29sZWFuPiA9IG5ldyBEZWZhdWx0RGF0YXN0b3JlTXV0YXRpb24oKSk6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIGRhdGFzdG9yZU11dGF0aW9uXG4gICAgICAgICAgICAud3JpdHRlbi5nZXQoKS50aGVuKCgpID0+IHtcblxuICAgICAgICAgICAgdGhpcy5kb2NNZXRhQ29tcGFyaXNvbkluZGV4LnVwZGF0ZVVzaW5nRG9jSW5mbyhkb2NJbmZvKTtcblxuICAgICAgICB9KVxuICAgICAgICAvLyB0aGlzIHNob3VsZCBuZXZlciBmYWlsIGluIHByYWN0aWNlLlxuICAgICAgICAuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihcIkNvdWxkIG5vdCBoYW5kbGUgZGVsZXRlOiBcIiwgZXJyKSk7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5kYXRhc3RvcmVNdXRhdGlvbnMuZXhlY3V0ZUJhdGNoZWRXcml0ZShkYXRhc3RvcmVNdXRhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmMgKHJlbW90ZUNvb3JkaW5hdG9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmNsb3VkLndyaXRlKGZpbmdlcnByaW50LCBkYXRhLCBkb2NJbmZvLCByZW1vdGVDb29yZGluYXRvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jIChsb2NhbENvb3JkaW5hdG9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmxvY2FsLndyaXRlKGZpbmdlcnByaW50LCBkYXRhLCBkb2NJbmZvLCBsb2NhbENvb3JkaW5hdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0RG9jTWV0YVJlZnMoKTogUHJvbWlzZTxEb2NNZXRhUmVmW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWwuZ2V0RG9jTWV0YVJlZnMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc3luY2hyb25pemVEb2NzKC4uLmRvY01ldGFSZWZzOiBEb2NNZXRhUmVmW10pIHtcblxuICAgICAgICBsb2cuaW5mbyhcIkNsb3VkQXdhcmVEYXRhc3RvcmU6IHN5bmNocm9uaXplRG9jczogXCIsIGRvY01ldGFSZWZzKTtcblxuICAgICAgICBjb25zdCB0b1N5bmNPcmlnaW4gPSBhc3luYyAoZGF0YXN0b3JlOiBEYXRhc3RvcmUsIC4uLmRvY01ldGFSZWZzOiBEb2NNZXRhUmVmW10pOiBQcm9taXNlPFN5bmNPcmlnaW4+ID0+IHtcblxuICAgICAgICAgICAgY29uc3Qgc3luY0RvY01hcCA9IGF3YWl0IFBlcnNpc3RlbmNlTGF5ZXJzLnRvU3luY0RvY01hcEZyb21Eb2NzKGRhdGFzdG9yZSwgZG9jTWV0YVJlZnMpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGRhdGFzdG9yZSxcbiAgICAgICAgICAgICAgICBzeW5jRG9jTWFwXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgY2xlYXJEb2NNZXRhID0gKC4uLmRvY01ldGFSZWZzOiBEb2NNZXRhUmVmW10pOiBEb2NNZXRhUmVmW10gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGRvY01ldGFSZWZzLm1hcChjdXJyZW50ID0+IHtcblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbmdlcnByaW50OiBjdXJyZW50LmZpbmdlcnByaW50XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgY2xvdWRTeW5jT3JpZ2luID0gYXdhaXQgdG9TeW5jT3JpZ2luKHRoaXMuY2xvdWQsIC4uLmNsZWFyRG9jTWV0YSguLi5kb2NNZXRhUmVmcykpO1xuICAgICAgICBjb25zdCBsb2NhbFN5bmNPcmlnaW4gPSBhd2FpdCB0b1N5bmNPcmlnaW4odGhpcy5sb2NhbCwgLi4uZG9jTWV0YVJlZnMpO1xuXG4gICAgICAgIC8vIFRPRE86IHRoZXJlIGFyZSBubyBldmVudHMgd2l0aCB0aGlzIGFuZCB0aGUgVUkgd29uJ3QgYmUgdXBkYXRlZC5cbiAgICAgICAgLy8gdGhlIHByb2JsbWUgaXMgdGhhdCBJIGRvbid0IHRoaW5rIHdlIGNhbiByZS1zZW5kIHRoZSBldmVudCBkYXRhXG4gICAgICAgIC8vIGJlY2F1c2Ugd2Ugb25seSB3YW50IHRoZSBwcm9ncmVzcyB1cGRhdGVkLlxuICAgICAgICAvL1xuICAgICAgICAvLyBUT0RPOiB3ZSBjb3VsZCByZXNvbHZlIHRoaXMgYnkgcmVtb3ZpbmcgdGhlIG11dGF0aW9ucyBhbmQganVzdFxuICAgICAgICAvLyBzZW5kaW5nIHRoZSBwcm9ncmVzcyBkYXRhLlxuXG4gICAgICAgIGF3YWl0IFBlcnNpc3RlbmNlTGF5ZXJzLnN5bmNocm9uaXplT3JpZ2lucyhsb2NhbFN5bmNPcmlnaW4sIGNsb3VkU3luY09yaWdpbiwgQVNZTkNfTlVMTF9GVU5DVElPTik7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc25hcHNob3QoZG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcjogRG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMaXN0ZW5lcjogRXJyb3JMaXN0ZW5lciA9IE5VTExfRlVOQ1RJT04pOiBQcm9taXNlPFNuYXBzaG90UmVzdWx0PiB7XG5cbiAgICAgICAgY29uc3QgaXNQcmltYXJ5U25hcHNob3Q6IGJvb2xlYW4gPSB0aGlzLnByaW1hcnlTbmFwc2hvdCA9PT0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGNvbnN0IHNuYXBzaG90SUQgPSBDbG91ZEF3YXJlRGF0YXN0b3JlLlNOQVBTSE9UX0lEKys7XG5cbiAgICAgICAgY29uc3QgZGVkdXBsaWNhdGVkTGlzdGVuZXIgPSBEb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVycy5jcmVhdGVEZWR1cGxpY2F0ZWRMaXN0ZW5lcihhc3luYyBkb2NNZXRhU25hcHNob3RFdmVudCA9PiB7XG4gICAgICAgICAgICBhd2FpdCBkb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyKGRvY01ldGFTbmFwc2hvdEV2ZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2xhc3MgSW5pdGlhbFNuYXBzaG90TGF0Y2gge1xuXG4gICAgICAgICAgICBwdWJsaWMgcmVhZG9ubHkgc3luY0RvY01hcDogU3luY0RvY01hcCA9IHt9O1xuICAgICAgICAgICAgcHVibGljIHJlYWRvbmx5IGxhdGNoID0gbmV3IExhdGNoPGJvb2xlYW4+KCk7XG4gICAgICAgICAgICBwdWJsaWMgcmVhZG9ubHkgaWQ6IENsb3VkRGF0YXN0b3JlSUQ7XG5cbiAgICAgICAgICAgIHByaXZhdGUgaGFzSW5pdGlhbFRlcm1pbmF0ZWRCYXRjaDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBwcml2YXRlIHBlbmRpbmc6IG51bWJlciA9IDA7XG5cbiAgICAgICAgICAgIGNvbnN0cnVjdG9yKGlkOiBDbG91ZERhdGFzdG9yZUlEKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcml2YXRlIGFzeW5jIGhhbmRsZVNuYXBzaG90KGRvY01ldGFTbmFwc2hvdEV2ZW50OiBEb2NNZXRhU25hcHNob3RFdmVudCkge1xuXG4gICAgICAgICAgICAgICAgLy8gY29uc3Qgc25hcERlc2MgPVxuICAgICAgICAgICAgICAgIC8vIERvY01ldGFTbmFwc2hvdEV2ZW50cy5mb3JtYXQoZG9jTWV0YVNuYXBzaG90RXZlbnQpO1xuXG4gICAgICAgICAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNJbml0aWFsVGVybWluYXRlZEJhdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoISBkb2NNZXRhU25hcHNob3RFdmVudC5iYXRjaCB8fCBkb2NNZXRhU25hcHNob3RFdmVudC5iYXRjaC5pZCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgKyt0aGlzLnBlbmRpbmc7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3luY0RvY3MgPSBhd2FpdCBEb2NNZXRhU25hcHNob3RFdmVudHMudG9TeW5jRG9jcyhkb2NNZXRhU25hcHNob3RFdmVudCk7XG4gICAgICAgICAgICAgICAgICAgIFN5bmNEb2NNYXBzLnB1dEFsbCh0aGlzLnN5bmNEb2NNYXAsIHN5bmNEb2NzKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jTWV0YVNuYXBzaG90RXZlbnQuY29uc2lzdGVuY3kgPT09ICdjb21taXR0ZWQnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2NNZXRhU25hcHNob3RFdmVudC5iYXRjaCEudGVybWluYXRlZCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuckRvY3MgPSBEaWN0aW9uYXJpZXMuc2l6ZSh0aGlzLnN5bmNEb2NNYXApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc0luaXRpYWxUZXJtaW5hdGVkQmF0Y2ggPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLS10aGlzLnBlbmRpbmc7XG5cblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNJbml0aWFsVGVybWluYXRlZEJhdGNoICYmIHRoaXMucGVuZGluZyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXRjaC5yZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHVibGljIGNyZWF0ZVNuYXBzaG90KGRhdGFzdG9yZTogRGF0YXN0b3JlKSB7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YXN0b3JlLnNuYXBzaG90KGFzeW5jIGRvY01ldGFTbmFwc2hvdEV2ZW50ID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoISBpbml0aWFsU3luY0NvbXBsZXRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5oYW5kbGVTbmFwc2hvdChkb2NNZXRhU25hcHNob3RFdmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBhbHdheXMgZm9yd2FyZCB0byB0aGUgc3luY2hyb25pemluZyBsaXN0ZW5lclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBzeW5jaHJvbml6aW5nTGlzdGVuZXIoZG9jTWV0YVNuYXBzaG90RXZlbnQpO1xuXG4gICAgICAgICAgICAgICAgfSwgZXJyb3JMaXN0ZW5lcik7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGluaXRpYWxTeW5jQ29tcGxldGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgLy8gVGhlIHdheSB0aGlzIGFsZ29yaXRobSB3b3JrcyBpcyB0aGF0IHdlIGxvYWQgdGhlIGxvY2FsIHN0b3JlIGZpcnN0XG4gICAgICAgIC8vIGFuZCBvbiB0aGUgZmlyc3Qgc25hcHNob3Qgd2Uga2VlcCBhbiBpbmRleCBvZiB0aGUgZmluZ2VycHJpbnQgdG9cbiAgICAgICAgLy8gVVVJRC4uLiB0aGVuIHdlIHdhaXQgdW50aWwgd2UgY2FuIGdldCB0aGUgc2ltaWxhciBpbmRleCBmcm9tIHRoZVxuICAgICAgICAvLyAnY29tbWl0dGVkJyB2ZXJzaW9uIG9mIHRoZSBjbG91ZCBkYXRhc3RvcmUsIHRoZW4gd2UgcGVyZm9ybSBhXG4gICAgICAgIC8vIHN5bmNocm9uaXplIGJhc2VkIG9uIHRoaXMgbWV0YWRhdGEuLi4gYXQgd2hpY2ggcG9pbnQgd2Ugc3luY2hyb25pemVcbiAgICAgICAgLy8gYm90aCBkYXRhc291cmNlcy5cblxuICAgICAgICBjb25zdCBsb2NhbEluaXRpYWxTbmFwc2hvdExhdGNoID0gbmV3IEluaXRpYWxTbmFwc2hvdExhdGNoKCdsb2NhbCcpO1xuICAgICAgICBjb25zdCBjbG91ZEluaXRpYWxTbmFwc2hvdExhdGNoID0gbmV3IEluaXRpYWxTbmFwc2hvdExhdGNoKCdjbG91ZCcpO1xuXG4gICAgICAgIGNvbnN0IHN5bmNocm9uaXppbmdFdmVudERlZHVwbGljYXRvcjogRXZlbnREZWR1cGxpY2F0b3JcbiAgICAgICAgICAgID0gRG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcnMuY3JlYXRlRGVkdXBsaWNhdGVkTGlzdGVuZXIoYXN5bmMgZG9jTWV0YVNuYXBzaG90RXZlbnQgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVFdmVudCA9IGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGluaXRpYWxTeW5jQ29tcGxldGVkICYmIGlzUHJpbWFyeVNuYXBzaG90KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmhhbmRsZVNuYXBzaG90U3luY2hyb25pemF0aW9uKGRvY01ldGFTbmFwc2hvdEV2ZW50LCBkZWR1cGxpY2F0ZWRMaXN0ZW5lci5saXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gcGFzcyBvbiB0aGVzZSBldmVudHMgYWZ0ZXIgdGhlIHJlcGxpY2F0aW9uLlxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBkb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyKGRvY01ldGFTbmFwc2hvdEV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGhhbmRsZUV2ZW50KClcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbG9nLmVycm9yKGBVbmFibGUgdG8gaGFuZGxlIHN5bmNocm9uaXppbmcgc25hcHNob3QgJHtzbmFwc2hvdElEfWAsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yTGlzdGVuZXIoZXJyKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICB9LCB0aGlzLmRvY01ldGFDb21wYXJpc29uSW5kZXgpO1xuXG4gICAgICAgIGNvbnN0IHN5bmNocm9uaXppbmdMaXN0ZW5lciA9IHN5bmNocm9uaXppbmdFdmVudERlZHVwbGljYXRvci5saXN0ZW5lcjtcblxuICAgICAgICBsb2cuaW5mbyhcIkxvY2FsIHNuYXBzaG90Li4uXCIpO1xuICAgICAgICBjb25zdCBsb2NhbFNuYXBzaG90UmVzdWx0UHJvbWlzZSA9IGxvY2FsSW5pdGlhbFNuYXBzaG90TGF0Y2guY3JlYXRlU25hcHNob3QodGhpcy5sb2NhbCk7XG4gICAgICAgIGF3YWl0IGxvY2FsSW5pdGlhbFNuYXBzaG90TGF0Y2gubGF0Y2guZ2V0KCk7XG4gICAgICAgIGxvZy5pbmZvKFwiTG9jYWwgc25hcHNob3QuLi5kb25lXCIpO1xuXG4gICAgICAgIGxvZy5pbmZvKFwiQ2xvdWQgc25hcHNob3QuLi5cIik7XG4gICAgICAgIGNvbnN0IGNsb3VkU25hcHNob3RSZXN1bHRQcm9taXNlID0gY2xvdWRJbml0aWFsU25hcHNob3RMYXRjaC5jcmVhdGVTbmFwc2hvdCh0aGlzLmNsb3VkKTtcbiAgICAgICAgYXdhaXQgY2xvdWRJbml0aWFsU25hcHNob3RMYXRjaC5sYXRjaC5nZXQoKTtcbiAgICAgICAgbG9nLmluZm8oXCJDbG91ZCBzbmFwc2hvdC4uLmRvbmVcIik7XG5cbiAgICAgICAgY29uc3QgbG9jYWxTeW5jT3JpZ2luOiBTeW5jT3JpZ2luID0ge1xuICAgICAgICAgICAgZGF0YXN0b3JlOiB0aGlzLmxvY2FsLFxuICAgICAgICAgICAgc3luY0RvY01hcDogbG9jYWxJbml0aWFsU25hcHNob3RMYXRjaC5zeW5jRG9jTWFwXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgY2xvdWRTeW5jT3JpZ2luOiBTeW5jT3JpZ2luID0ge1xuICAgICAgICAgICAgZGF0YXN0b3JlOiB0aGlzLmNsb3VkLFxuICAgICAgICAgICAgc3luY0RvY01hcDogY2xvdWRJbml0aWFsU25hcHNob3RMYXRjaC5zeW5jRG9jTWFwXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGlzUHJpbWFyeVNuYXBzaG90KSB7XG5cbiAgICAgICAgICAgIGF3YWl0IFBlcnNpc3RlbmNlTGF5ZXJzLnN5bmNocm9uaXplT3JpZ2lucyhsb2NhbFN5bmNPcmlnaW4sIGNsb3VkU3luY09yaWdpbiwgZGVkdXBsaWNhdGVkTGlzdGVuZXIubGlzdGVuZXIpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpbml0aWFsU3luY0NvbXBsZXRlZCA9IHRydWU7XG5cbiAgICAgICAgYXdhaXQgbG9jYWxTbmFwc2hvdFJlc3VsdFByb21pc2U7XG4gICAgICAgIGNvbnN0IGNsb3VkU25hcHNob3RSZXN1bHQgPSBhd2FpdCBjbG91ZFNuYXBzaG90UmVzdWx0UHJvbWlzZTtcblxuICAgICAgICBsb2cubm90aWNlKFwiSU5JVElBTCBTTkFQU0hPVCBDT01QTEVURVwiKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmU6IGNsb3VkU25hcHNob3RSZXN1bHQudW5zdWJzY3JpYmVcbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgaGFuZGxlU25hcHNob3RTeW5jaHJvbml6YXRpb24oZG9jTWV0YVNuYXBzaG90RXZlbnQ6IERvY01ldGFTbmFwc2hvdEV2ZW50LCBsaXN0ZW5lcjogRG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcikge1xuXG4gICAgICAgIGNvbnN0IHRvTG9jYWxTeW5jT3JpZ2luID0gYXN5bmMgKCk6IFByb21pc2U8U3luY09yaWdpbj4gPT4ge1xuXG4gICAgICAgICAgICAvLyBUT0RPOiB3ZSBzaG91bGQgaGF2ZSBwcm9ncmVzcyBvbiB0aGlzLi4uXG5cbiAgICAgICAgICAgIGNvbnN0IGRvY2FNZXRhRmlsZXM6IERvY01ldGFSZWZbXSA9XG4gICAgICAgICAgICAgICAgZG9jTWV0YVNuYXBzaG90RXZlbnQuZG9jTWV0YU11dGF0aW9ucy5tYXAoY3VycmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7ZmluZ2VycHJpbnQ6IGN1cnJlbnQuZmluZ2VycHJpbnR9O1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBzeW5jRG9jTWFwID0gYXdhaXQgUGVyc2lzdGVuY2VMYXllcnMudG9TeW5jRG9jTWFwRnJvbURvY3ModGhpcy5sb2NhbCwgZG9jYU1ldGFGaWxlcyk7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZGF0YXN0b3JlOiB0aGlzLmxvY2FsLFxuICAgICAgICAgICAgICAgIHN5bmNEb2NNYXBcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCB0b0Nsb3VkU3luY09yaWdpbiA9IGFzeW5jICgpOiBQcm9taXNlPFN5bmNPcmlnaW4+ID0+IHtcblxuICAgICAgICAgICAgY29uc3Qgc3luY0RvY3MgPSBhd2FpdCBEb2NNZXRhU25hcHNob3RFdmVudHMudG9TeW5jRG9jcyhkb2NNZXRhU25hcHNob3RFdmVudCk7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZGF0YXN0b3JlOiB0aGlzLmNsb3VkLFxuICAgICAgICAgICAgICAgIHN5bmNEb2NNYXA6IFN5bmNEb2NNYXBzLmZyb21BcnJheShzeW5jRG9jcylcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZG9jTWV0YVNuYXBzaG90RXZlbnQuY29uc2lzdGVuY3kgIT09ICdjb21taXR0ZWQnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IGRvY01ldGFNdXRhdGlvbiBvZiBkb2NNZXRhU25hcHNob3RFdmVudC5kb2NNZXRhTXV0YXRpb25zKSB7XG5cbiAgICAgICAgICAgIGlmIChkb2NNZXRhTXV0YXRpb24ubXV0YXRpb25UeXBlID09PSAnY3JlYXRlZCcgfHwgZG9jTWV0YU11dGF0aW9uLm11dGF0aW9uVHlwZSA9PT0gJ3VwZGF0ZWQnKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjbG91ZFN5bmNPcmlnaW4gPSBhd2FpdCB0b0Nsb3VkU3luY09yaWdpbigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsU3luY09yaWdpbiA9IGF3YWl0IHRvTG9jYWxTeW5jT3JpZ2luKCk7XG5cbiAgICAgICAgICAgICAgICBsb2cuaW5mbyhcIlRyYW5zZmVycmluZyBmcm9tIGNsb3VkIC0+IGxvY2FsLi4uXCIpO1xuICAgICAgICAgICAgICAgIGF3YWl0IFBlcnNpc3RlbmNlTGF5ZXJzLnRyYW5zZmVyKGNsb3VkU3luY09yaWdpbiwgbG9jYWxTeW5jT3JpZ2luLCBsaXN0ZW5lciwgJ2Nsb3VkLXRvLWxvY2FsJyk7XG4gICAgICAgICAgICAgICAgbG9nLmluZm8oXCJUcmFuc2ZlcnJpbmcgZnJvbSBjbG91ZCAtPiBsb2NhbC4uLmRvbmVcIik7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRvY01ldGFNdXRhdGlvbi5tdXRhdGlvblR5cGUgPT09ICdkZWxldGVkJykge1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IGhvdyBkbyB3ZSBoYW5kbGUgdGhpcyB2aWEgdHJhbnNmZXIgdGhlIGZ1bmN0aW9uLi4uXG4gICAgICAgICAgICAgICAgLy8gd2UncmUgYWxzbyBub3QgcmVjZWl2aW5nIGV2ZW50cyBmb3IgdGhpcyBpbiB0aGUgVUkgc28gbm9cbiAgICAgICAgICAgICAgICAvLyBwcm9ncmVzcyB1cGRhdGVzLlxuICAgICAgICAgICAgICAgIGNvbnN0IGRvY01ldGFGaWxlUmVmID0gYXdhaXQgZG9jTWV0YU11dGF0aW9uLmRvY01ldGFGaWxlUmVmUHJvdmlkZXIoKTtcbiAgICAgICAgICAgICAgICBsb2cud2FybihcIkZpbGUgZGVsZXRlZDogXCIgLCBkb2NNZXRhRmlsZVJlZik7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5sb2NhbC5kZWxldGUoZG9jTWV0YUZpbGVSZWYpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN5bmNocm9uaXphdGlvbkV2ZW50RGlzcGF0Y2hlci5kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICAgIC4uLmRvY01ldGFTbmFwc2hvdEV2ZW50LFxuICAgICAgICAgICAgZGVzdDogJ2xvY2FsJ1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhZGRGaWxlU3luY2hyb25pemF0aW9uRXZlbnRMaXN0ZW5lcihldmVudExpc3RlbmVyOiBGaWxlU3luY2hyb25pemF0aW9uRXZlbnRMaXN0ZW5lcik6IHZvaWQge1xuICAgICAgICB0aGlzLmZpbGVTeW5jaHJvbml6YXRpb25FdmVudERpc3BhdGNoZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudExpc3RlbmVyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkU3luY2hyb25pemF0aW9uRXZlbnRMaXN0ZW5lcihldmVudExpc3RlbmVyOiBTeW5jaHJvbml6YXRpb25FdmVudExpc3RlbmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3luY2hyb25pemF0aW9uRXZlbnREaXNwYXRjaGVyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRMaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZERvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIoZG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcjogRG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcik6IHZvaWQge1xuICAgICAgICB0aGlzLmRvY01ldGFTbmFwc2hvdEV2ZW50RGlzcGF0Y2hlci5hZGRFdmVudExpc3RlbmVyKGRvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBkZWFjdGl2YXRlKCkge1xuICAgICAgICBhd2FpdCBmaXJlYmFzZS5hdXRoKCkuc2lnbk91dCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvdmVydmlldygpOiBQcm9taXNlPERhdGFzdG9yZU92ZXJ2aWV3IHwgdW5kZWZpbmVkPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsLm92ZXJ2aWV3KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFByZWZzKCk6IFByZWZzUHJvdmlkZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbC5nZXRQcmVmcygpO1xuICAgIH1cblxufVxuXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIGRvYyBhbmQgaXRzIFVVSUQuICBUaGUgVVVJRCBpcyBvcHRpb25hbCB0aG91Z2ggYXMgb2xkZXIgZG9jc1xuICogbWF5IG5vdCBoYXZlIGEgZG9jIGJ1dCBpbiBwcmFjdGljZSBhbG1vc3QgYWxsIGRvY3Mgd2lsbCBoYXZlIGEgVVVJRC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEb2NVVUlEIHtcbiAgICBmaW5nZXJwcmludDogc3RyaW5nO1xuICAgIHV1aWQ/OiBVVUlEO1xufVxuXG5leHBvcnQgdHlwZSBDbG91ZERhdGFzdG9yZUlEID0gJ2xvY2FsJyB8ICdjbG91ZCc7XG5cbiJdfQ==