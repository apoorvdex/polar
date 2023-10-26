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
const SpectronRenderer_1 = require("../../js/test/SpectronRenderer");
const DiskDatastore_1 = require("../../js/datastore/DiskDatastore");
const DefaultPersistenceLayer_1 = require("../../js/datastore/DefaultPersistenceLayer");
const DocMetas_1 = require("../../js/metadata/DocMetas");
const chai_1 = require("chai");
const DatastoreTester_1 = require("../../js/datastore/DatastoreTester");
const Promises_1 = require("../../js/util/Promises");
const FirebaseDatastore_1 = require("../../js/datastore/FirebaseDatastore");
const FirebaseRunner_1 = require("../../js/firebase/FirebaseRunner");
const CloudAwareDatastore_1 = require("../../js/datastore/CloudAwareDatastore");
const FilePaths_1 = require("../../js/util/FilePaths");
const Files_1 = require("../../js/util/Files");
const DatastoreMutation_1 = require("../../js/datastore/DatastoreMutation");
const PolarDataDir_1 = require("../../js/test/PolarDataDir");
const wait_for_expect_1 = __importDefault(require("wait-for-expect"));
const Datastores_1 = require("../../js/datastore/Datastores");
const Latch_1 = require("../../js/util/Latch");
const Functions_1 = require("../../js/util/Functions");
const Logging_1 = require("../../js/logger/Logging");
Logging_1.Logging.initForTesting();
mocha.setup('bdd');
mocha.timeout(30000);
function createDatastore() {
    return __awaiter(this, void 0, void 0, function* () {
        const diskDatastore = new DiskDatastore_1.DiskDatastore();
        const firebaseDatastore = new FirebaseDatastore_1.FirebaseDatastore();
        yield Promise.all([diskDatastore.init(), firebaseDatastore.init()]);
        const cloudAwareDatastore = new CloudAwareDatastore_1.CloudAwareDatastore(diskDatastore, firebaseDatastore);
        cloudAwareDatastore.shutdownHook = () => __awaiter(this, void 0, void 0, function* () {
            const consistency = yield Datastores_1.Datastores.checkConsistency(diskDatastore, firebaseDatastore);
            if (!consistency.consistent) {
                console.log("Filesystems are NOT consistent: ", consistency.manifest0, consistency.manifest1);
            }
            chai_1.assert.ok(consistency.consistent, "Datastores are not consistent");
        });
        return cloudAwareDatastore;
    });
}
SpectronRenderer_1.SpectronRenderer.run((state) => __awaiter(this, void 0, void 0, function* () {
    new FirebaseRunner_1.FirebaseRunner(state).run(() => __awaiter(this, void 0, void 0, function* () {
        yield PolarDataDir_1.PolarDataDir.useFreshDirectory('.test-firebase-cloud-aware-datastore');
        const fingerprint = "0x001";
        describe('Cloud datastore tests', function () {
            beforeEach(function () {
                return __awaiter(this, void 0, void 0, function* () {
                    try {
                        console.log("==== BEGIN beforeEach");
                        yield Files_1.Files.removeDirectoryRecursivelyAsync(PolarDataDir_1.PolarDataDir.get());
                        const firebaseDatastore = new FirebaseDatastore_1.FirebaseDatastore();
                        yield firebaseDatastore.init();
                        yield Datastores_1.Datastores.purge(firebaseDatastore, purgeEvent => console.log("Purged: ", purgeEvent));
                        yield firebaseDatastore.stop();
                    }
                    catch (e) {
                        console.error("Caught exception in beforeEach: ", e);
                        throw e;
                    }
                    finally {
                        console.log("==== END beforeEach");
                    }
                });
            });
            function testForConsistency(testFunction = Functions_1.ASYNC_NULL_FUNCTION) {
                return __awaiter(this, void 0, void 0, function* () {
                    const cloudAwareDatastore = yield createDatastore();
                    const persistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(cloudAwareDatastore);
                    try {
                        yield persistenceLayer.init();
                        yield wait_for_expect_1.default(() => __awaiter(this, void 0, void 0, function* () {
                            const consistency = yield Datastores_1.Datastores.checkConsistency(cloudAwareDatastore.local, cloudAwareDatastore.cloud);
                            chai_1.assert.ok(consistency.consistent);
                        }));
                        yield testFunction(persistenceLayer, cloudAwareDatastore);
                    }
                    finally {
                        yield persistenceLayer.stop();
                    }
                });
            }
            it("Test8: Sync with extra files in the local store", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const datastore = new DiskDatastore_1.DiskDatastore();
                    yield datastore.init();
                    yield datastore.writeDocMeta(DocMetas_1.MockDocMetas.createMockDocMeta('0x0004'));
                    yield datastore.writeDocMeta(DocMetas_1.MockDocMetas.createMockDocMeta('0x0005'));
                    yield datastore.stop();
                    yield testForConsistency((persistenceLayer, cloudAwareDatastore) => __awaiter(this, void 0, void 0, function* () {
                        for (const currentFingerprint of ['0x0004', '0x0005']) {
                            chai_1.assert.ok(yield cloudAwareDatastore.local.contains(currentFingerprint));
                            chai_1.assert.ok(yield cloudAwareDatastore.cloud.contains(currentFingerprint));
                        }
                    }));
                });
            });
            it("Test9: Sync with extra files in the firebase store", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const datastore = new FirebaseDatastore_1.FirebaseDatastore();
                    datastore.enablePersistence = false;
                    yield datastore.init();
                    yield datastore.writeDocMeta(DocMetas_1.MockDocMetas.createMockDocMeta('0x0004'));
                    yield datastore.writeDocMeta(DocMetas_1.MockDocMetas.createMockDocMeta('0x0005'));
                    yield datastore.stop();
                    yield testForConsistency((persistenceLayer, cloudAwareDatastore) => __awaiter(this, void 0, void 0, function* () {
                        for (const currentFingerprint of ['0x0004', '0x0005']) {
                            chai_1.assert.ok(yield cloudAwareDatastore.local.contains(currentFingerprint));
                            chai_1.assert.ok(yield cloudAwareDatastore.cloud.contains(currentFingerprint));
                        }
                    }));
                });
            });
            it("Test1: null test to make sure we have no documents on startup", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const persistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(yield createDatastore());
                    yield persistenceLayer.init();
                    const docMetaFiles = yield persistenceLayer.getDocMetaRefs();
                    chai_1.assert.equal(docMetaFiles.length, 0);
                    persistenceLayer.stop();
                });
            });
            it("Test2: Basic synchronization tests", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const firebaseDatastore = new FirebaseDatastore_1.FirebaseDatastore();
                    yield firebaseDatastore.init();
                    yield Datastores_1.Datastores.purge(firebaseDatastore);
                    const firestorePersistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(firebaseDatastore);
                    yield firestorePersistenceLayer.writeDocMeta(DocMetas_1.MockDocMetas.createMockDocMeta('0x001'));
                    const cloudAwareDatastore = yield createDatastore();
                    const persistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(cloudAwareDatastore);
                    const initialDocLatch = new Latch_1.Latch();
                    const externallyWrittenDocLatch = new Latch_1.Latch();
                    cloudAwareDatastore.addDocMetaSnapshotEventListener((docMetaSnapshotEvent) => __awaiter(this, void 0, void 0, function* () {
                        for (const docMutation of docMetaSnapshotEvent.docMetaMutations) {
                            if (docMutation.fingerprint === '0x001') {
                                initialDocLatch.resolve(true);
                                continue;
                            }
                            if (docMutation.fingerprint === '0x002') {
                                externallyWrittenDocLatch.resolve(true);
                                continue;
                            }
                        }
                    }));
                    yield persistenceLayer.init();
                    yield initialDocLatch.get();
                    yield firestorePersistenceLayer.writeDocMeta(DocMetas_1.MockDocMetas.createMockDocMeta('0x002'));
                    yield externallyWrittenDocLatch.get();
                    yield wait_for_expect_1.default(() => __awaiter(this, void 0, void 0, function* () {
                        chai_1.assert.ok(yield persistenceLayer.contains('0x002'), "Does not contain second doc");
                    }));
                    console.log("WORKED");
                    yield persistenceLayer.stop();
                    yield firestorePersistenceLayer.stop();
                });
            });
            it("Test3: Write a basic doc with synchronization listener", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const cloudAwareDatastore = yield createDatastore();
                    const persistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(cloudAwareDatastore);
                    const latch0 = new Latch_1.Latch();
                    const latch1 = new Latch_1.Latch();
                    cloudAwareDatastore.addSynchronizationEventListener(docMetaSnapshotEvent => {
                        if (docMetaSnapshotEvent.consistency !== 'committed') {
                            return;
                        }
                        for (const docMetaMutation of docMetaSnapshotEvent.docMetaMutations) {
                            if (docMetaMutation.fingerprint === '0x002') {
                                latch0.resolve(true);
                            }
                            if (docMetaMutation.fingerprint === '0x003') {
                                latch1.resolve(true);
                            }
                        }
                    });
                    yield persistenceLayer.init();
                    const docMeta = DocMetas_1.MockDocMetas.createMockDocMeta('0x002');
                    yield persistenceLayer.writeDocMeta(docMeta);
                    const firebasePersistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(new FirebaseDatastore_1.FirebaseDatastore());
                    yield firebasePersistenceLayer.init();
                    yield firebasePersistenceLayer.writeDocMeta(DocMetas_1.MockDocMetas.createMockDocMeta('0x003'));
                    yield latch0.get();
                    yield latch1.get();
                    yield persistenceLayer.stop();
                    yield firebasePersistenceLayer.stop();
                });
            });
            it("Test4: Write a basic doc", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const persistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(yield createDatastore());
                    yield persistenceLayer.init();
                    const docMeta = DocMetas_1.MockDocMetas.createMockDocMeta();
                    const datastoreMutation = new DatastoreMutation_1.DefaultDatastoreMutation();
                    let writtenDuration = 0;
                    let committedDuration = 0;
                    const before = Date.now();
                    datastoreMutation.written.get().then(() => writtenDuration = Date.now() - before);
                    datastoreMutation.committed.get().then(() => committedDuration = Date.now() - before);
                    yield persistenceLayer.write(fingerprint, docMeta, datastoreMutation);
                    console.log(`writtenDuration: ${writtenDuration}, committedDuration: ${committedDuration}`);
                    yield persistenceLayer.stop();
                });
            });
            it("Test5: Test an existing firebase store with existing data replicating to a new CloudDatastore.", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    let err;
                    const errorListener = (error) => {
                        console.error("Got error:  ", err);
                        err = error;
                    };
                    const sourcePersistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(new FirebaseDatastore_1.FirebaseDatastore());
                    yield sourcePersistenceLayer.init(errorListener);
                    yield sourcePersistenceLayer.writeDocMeta(DocMetas_1.MockDocMetas.createMockDocMeta(fingerprint));
                    yield sourcePersistenceLayer.stop();
                    const targetPersistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(yield createDatastore());
                    yield targetPersistenceLayer.init(errorListener);
                    yield wait_for_expect_1.default(() => __awaiter(this, void 0, void 0, function* () {
                        const dataDir = PolarDataDir_1.PolarDataDir.get();
                        const path = FilePaths_1.FilePaths.join(dataDir, fingerprint, 'state.json');
                        chai_1.assert.ok(yield Files_1.Files.existsAsync(path), "Path does not exist: " + path);
                    }));
                    yield targetPersistenceLayer.stop();
                    chai_1.assert.ok(err === undefined, "Received an error: " + err);
                });
            });
            it("Test6: Verify unsubscribe works.", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    yield Files_1.Files.removeDirectoryRecursivelyAsync(PolarDataDir_1.PolarDataDir.get());
                    const targetPersistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(yield createDatastore());
                    yield targetPersistenceLayer.init();
                    yield Datastores_1.Datastores.purge(targetPersistenceLayer.datastore);
                    const docMetaFiles = yield targetPersistenceLayer.getDocMetaRefs();
                    chai_1.assert.equal(docMetaFiles.length, 0);
                    let gotEventAfterUnsubscribe = false;
                    let unsubscribed = false;
                    const snapshotResult = yield targetPersistenceLayer.snapshot((event) => __awaiter(this, void 0, void 0, function* () {
                        console.log("GOT AN EVENT with consistency: " + event.consistency, event);
                        if (event.consistency !== 'committed') {
                            return;
                        }
                        if (!unsubscribed) {
                            return;
                        }
                        gotEventAfterUnsubscribe = true;
                    }));
                    snapshotResult.unsubscribe();
                    unsubscribed = true;
                    const sidePersistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(new FirebaseDatastore_1.FirebaseDatastore());
                    yield sidePersistenceLayer.init();
                    yield sidePersistenceLayer.writeDocMeta(DocMetas_1.MockDocMetas.createMockDocMeta());
                    yield sidePersistenceLayer.stop();
                    yield Promises_1.Promises.waitFor(5000);
                    chai_1.assert.ok(gotEventAfterUnsubscribe === false, "Nope.. we still got the event");
                });
            });
            xit("Test7: Test a remote write and a local replication to disk", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const sourcePersistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(new FirebaseDatastore_1.FirebaseDatastore());
                    yield sourcePersistenceLayer.init();
                    const targetPersistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(yield createDatastore());
                    yield targetPersistenceLayer.init();
                    const docMeta = DocMetas_1.MockDocMetas.createWithinInitialPagemarks(fingerprint, 14);
                    yield sourcePersistenceLayer.write(fingerprint, docMeta);
                    yield wait_for_expect_1.default(() => __awaiter(this, void 0, void 0, function* () {
                        const dataDir = PolarDataDir_1.PolarDataDir.get();
                        const path = FilePaths_1.FilePaths.join(dataDir, '0x001', 'state.json');
                        chai_1.assert.ok(yield Files_1.Files.existsAsync(path), 'Path for fingerprint never appeared');
                    }));
                    yield sourcePersistenceLayer.stop();
                    yield targetPersistenceLayer.stop();
                });
            });
        });
        DatastoreTester_1.DatastoreTester.test(createDatastore, false);
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHFFQUF1RjtBQUt2RixvRUFBK0Q7QUFDL0Qsd0ZBQW1GO0FBQ25GLHlEQUF3RDtBQUN4RCwrQkFBNEI7QUFDNUIsd0VBQW1FO0FBR25FLHFEQUFnRDtBQUNoRCw0RUFBdUU7QUFFdkUscUVBQWdFO0FBQ2hFLGdGQUEyRTtBQUMzRSx1REFBa0Q7QUFJbEQsK0NBQTBDO0FBRTFDLDRFQUE4RTtBQUU5RSw2REFBd0Q7QUFDeEQsc0VBQTRDO0FBQzVDLDhEQUF5RDtBQUN6RCwrQ0FBMEM7QUFDMUMsdURBQTJFO0FBRzNFLHFEQUFnRDtBQUdoRCxpQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBRXpCLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbkIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUVyQixTQUFlLGVBQWU7O1FBRTFCLE1BQU0sYUFBYSxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO1FBQzFDLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxxQ0FBaUIsRUFBRSxDQUFDO1FBRWxELE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFcEUsTUFBTSxtQkFBbUIsR0FBRyxJQUFJLHlDQUFtQixDQUFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBRXRGLG1CQUFtQixDQUFDLFlBQVksR0FBRyxHQUFTLEVBQUU7WUFDMUMsTUFBTSxXQUFXLEdBQUcsTUFBTSx1QkFBVSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1lBRXhGLElBQUksQ0FBRSxXQUFXLENBQUMsVUFBVSxFQUFFO2dCQUMxQixPQUFP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YUFBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxxQ0FBcUMsQ0FBQyxDQUFDO29CQUNwRixDQUFDLENBQUEsQ0FBQyxDQUFDO29CQUVILE1BQU0sc0JBQXNCLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3BDLE1BQU0sc0JBQXNCLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBRXhDLENBQUM7YUFBQSxDQUFDLENBQUM7UUFFUCxDQUFDLENBQUMsQ0FBQztRQUVILGlDQUFlLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUVqRCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFBLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3BlY3Ryb25SZW5kZXJlciwgU3BlY3Ryb25SZW5kZXJlclN0YXRlfSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uUmVuZGVyZXInO1xuaW1wb3J0IHtGaXJlYmFzZX0gZnJvbSAnLi4vLi4vanMvZmlyZWJhc2UvRmlyZWJhc2UnO1xuaW1wb3J0IHtGaXJlYmFzZVVJQXV0aH0gZnJvbSAnLi4vLi4vanMvZmlyZWJhc2UvRmlyZWJhc2VVSUF1dGgnO1xuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnLi4vLi4vanMvZmlyZWJhc2UvbGliL2ZpcmViYXNlJztcbmltcG9ydCB7RWxlbWVudHN9IGZyb20gJy4uLy4uL2pzL3V0aWwvRWxlbWVudHMnO1xuaW1wb3J0IHtEaXNrRGF0YXN0b3JlfSBmcm9tICcuLi8uLi9qcy9kYXRhc3RvcmUvRGlza0RhdGFzdG9yZSc7XG5pbXBvcnQge0RlZmF1bHRQZXJzaXN0ZW5jZUxheWVyfSBmcm9tICcuLi8uLi9qcy9kYXRhc3RvcmUvRGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtNb2NrRG9jTWV0YXN9IGZyb20gJy4uLy4uL2pzL21ldGFkYXRhL0RvY01ldGFzJztcbmltcG9ydCB7YXNzZXJ0fSBmcm9tIFwiY2hhaVwiO1xuaW1wb3J0IHtEYXRhc3RvcmVUZXN0ZXJ9IGZyb20gJy4uLy4uL2pzL2RhdGFzdG9yZS9EYXRhc3RvcmVUZXN0ZXInO1xuaW1wb3J0IHtGaXJlc3RvcmV9IGZyb20gJy4uLy4uL2pzL2ZpcmViYXNlL0ZpcmVzdG9yZSc7XG5pbXBvcnQge0hhc2hjb2Rlc30gZnJvbSAnLi4vLi4vanMvSGFzaGNvZGVzJztcbmltcG9ydCB7UHJvbWlzZXN9IGZyb20gJy4uLy4uL2pzL3V0aWwvUHJvbWlzZXMnO1xuaW1wb3J0IHtGaXJlYmFzZURhdGFzdG9yZX0gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL0ZpcmViYXNlRGF0YXN0b3JlJztcbmltcG9ydCB7RWxlY3Ryb25Eb2NMb2FkZXJ9IGZyb20gJy4uLy4uL2pzL2FwcHMvbWFpbi9kb2NfbG9hZGVycy9lbGVjdHJvbi9FbGVjdHJvbkRvY0xvYWRlcic7XG5pbXBvcnQge0ZpcmViYXNlUnVubmVyfSBmcm9tICcuLi8uLi9qcy9maXJlYmFzZS9GaXJlYmFzZVJ1bm5lcic7XG5pbXBvcnQge0Nsb3VkQXdhcmVEYXRhc3RvcmV9IGZyb20gJy4uLy4uL2pzL2RhdGFzdG9yZS9DbG91ZEF3YXJlRGF0YXN0b3JlJztcbmltcG9ydCB7RmlsZVBhdGhzfSBmcm9tICcuLi8uLi9qcy91dGlsL0ZpbGVQYXRocyc7XG5pbXBvcnQge0RhdGFzdG9yZX0gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL0RhdGFzdG9yZSc7XG5pbXBvcnQge0RvY01ldGF9IGZyb20gJy4uLy4uL2pzL21ldGFkYXRhL0RvY01ldGEnO1xuaW1wb3J0IHtEaXJlY3RvcmllcywgR2xvYmFsRGF0YURpcn0gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL0RpcmVjdG9yaWVzJztcbmltcG9ydCB7RmlsZXN9IGZyb20gJy4uLy4uL2pzL3V0aWwvRmlsZXMnO1xuaW1wb3J0IHtNb2NrUEhaV3JpdGVyfSBmcm9tICcuLi8uLi9qcy9waHovTW9ja1BIWldyaXRlcic7XG5pbXBvcnQge0RlZmF1bHREYXRhc3RvcmVNdXRhdGlvbn0gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL0RhdGFzdG9yZU11dGF0aW9uJztcbmltcG9ydCB7RG9jSW5mb30gZnJvbSAnLi4vLi4vanMvbWV0YWRhdGEvRG9jSW5mbyc7XG5pbXBvcnQge1BvbGFyRGF0YURpcn0gZnJvbSAnLi4vLi4vanMvdGVzdC9Qb2xhckRhdGFEaXInO1xuaW1wb3J0IHdhaXRGb3JFeHBlY3QgZnJvbSAnd2FpdC1mb3ItZXhwZWN0JztcbmltcG9ydCB7RGF0YXN0b3Jlc30gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL0RhdGFzdG9yZXMnO1xuaW1wb3J0IHtMYXRjaH0gZnJvbSAnLi4vLi4vanMvdXRpbC9MYXRjaCc7XG5pbXBvcnQge0FTWU5DX05VTExfRlVOQ1RJT04sIE5VTExfRlVOQ1RJT059IGZyb20gJy4uLy4uL2pzL3V0aWwvRnVuY3Rpb25zJztcbmltcG9ydCB7UGVyc2lzdGVuY2VMYXllcnN9IGZyb20gJy4uLy4uL2pzL2RhdGFzdG9yZS9QZXJzaXN0ZW5jZUxheWVycyc7XG5pbXBvcnQge1ByZWNvbmRpdGlvbnN9IGZyb20gJy4uLy4uL2pzL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtMb2dnaW5nfSBmcm9tICcuLi8uLi9qcy9sb2dnZXIvTG9nZ2luZyc7XG5pbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJ9IGZyb20gJy4uLy4uL2pzL2RhdGFzdG9yZS9QZXJzaXN0ZW5jZUxheWVyJztcblxuTG9nZ2luZy5pbml0Rm9yVGVzdGluZygpO1xuXG5tb2NoYS5zZXR1cCgnYmRkJyk7XG5tb2NoYS50aW1lb3V0KDMwMDAwKTtcblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlRGF0YXN0b3JlKCkge1xuXG4gICAgY29uc3QgZGlza0RhdGFzdG9yZSA9IG5ldyBEaXNrRGF0YXN0b3JlKCk7XG4gICAgY29uc3QgZmlyZWJhc2VEYXRhc3RvcmUgPSBuZXcgRmlyZWJhc2VEYXRhc3RvcmUoKTtcblxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtkaXNrRGF0YXN0b3JlLmluaXQoKSwgZmlyZWJhc2VEYXRhc3RvcmUuaW5pdCgpXSk7XG5cbiAgICBjb25zdCBjbG91ZEF3YXJlRGF0YXN0b3JlID0gbmV3IENsb3VkQXdhcmVEYXRhc3RvcmUoZGlza0RhdGFzdG9yZSwgZmlyZWJhc2VEYXRhc3RvcmUpO1xuXG4gICAgY2xvdWRBd2FyZURhdGFzdG9yZS5zaHV0ZG93bkhvb2sgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnNpc3RlbmN5ID0gYXdhaXQgRGF0YXN0b3Jlcy5jaGVja0NvbnNpc3RlbmN5KGRpc2tEYXRhc3RvcmUsIGZpcmViYXNlRGF0YXN0b3JlKTtcblxuICAgICAgICBpZiAoISBjb25zaXN0ZW5jeS5jb25zaXN0ZW50KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZpbGVzeXN0ZW1zIGFyZSBOT1QgY29uc2lzdGVudDogXCIsIGNvbnNpc3RlbmN5Lm1hbmlmZXN0MCwgY29uc2lzdGVuY3kubWFuaWZlc3QxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFzc2VydC5vayhjb25zaXN0ZW5jeS5jb25zaXN0ZW50LCBcIkRhdGFzdG9yZXMgYXJlIG5vdCBjb25zaXN0ZW50XCIpO1xuICAgIH07XG5cbiAgICByZXR1cm4gY2xvdWRBd2FyZURhdGFzdG9yZTtcbn1cblxuU3BlY3Ryb25SZW5kZXJlci5ydW4oYXN5bmMgKHN0YXRlKSA9PiB7XG5cbiAgICBuZXcgRmlyZWJhc2VSdW5uZXIoc3RhdGUpLnJ1bihhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgYXdhaXQgUG9sYXJEYXRhRGlyLnVzZUZyZXNoRGlyZWN0b3J5KCcudGVzdC1maXJlYmFzZS1jbG91ZC1hd2FyZS1kYXRhc3RvcmUnKTtcblxuICAgICAgICBjb25zdCBmaW5nZXJwcmludCA9IFwiMHgwMDFcIjtcblxuICAgICAgICAvLyBGSVhNRTogdGhlcmUncyBhbm90YmhlciBpc3N1ZSBoZXJlIGFuZCB0aGF0IGludm9sdmVzIHRoZSBGSVJTVCBzeW5jLlxuICAgICAgICAvL1xuICAgICAgICAvLyB3ZSBoYXZlIHRvIGRldGVjdCB0aGF0IHRoZXJlIGFyZSBmaWxlcyBPTiBESVNLIGFuZCBub3QgaW4gdGhlIGNsb3VkLFxuICAgICAgICAvLyB0aGVuIHRyYW5zZmVyIHRoZW0gdG8gdGhlIGNsb3VkLiAgQXQgdGhhdCBvaW50IHRoZSB1c2VyIGlzIHN5bmMnZFxuICAgICAgICAvLyB3aXRoIHRoZSBjbG91ZC5cblxuICAgICAgICAvLyBGSVhNRTogc3RhdGVzIHRoYXQgbmVlZCB0byBiZSBoYW5kbGVkIGluIFVJLi4uLlxuICAgICAgICAvL1xuICAgICAgICAvLyAtIE1FUkdFIHNob3VkbCBiZSB0aGUgaWRlYWwgc2l0dWF0aW9uIE5PVCB0cmFuc2Zlci4uLiB0aGlzIGlzIGVhc2llclxuICAgICAgICAvLyAgIHRvIGltcGxlbWVudC5cblxuXG4gICAgICAgIC8vXG5cbiAgICAgICAgZGVzY3JpYmUoJ0Nsb3VkIGRhdGFzdG9yZSB0ZXN0cycsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBiZWZvcmVFYWNoKGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIj09PT0gQkVHSU4gYmVmb3JlRWFjaFwiKTtcblxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBGaWxlcy5yZW1vdmVEaXJlY3RvcnlSZWN1cnNpdmVseUFzeW5jKFBvbGFyRGF0YURpci5nZXQoKSEpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpcmViYXNlRGF0YXN0b3JlID0gbmV3IEZpcmViYXNlRGF0YXN0b3JlKCk7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGZpcmViYXNlRGF0YXN0b3JlLmluaXQoKTtcblxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBEYXRhc3RvcmVzLnB1cmdlKGZpcmViYXNlRGF0YXN0b3JlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1cmdlRXZlbnQgPT4gY29uc29sZS5sb2coXCJQdXJnZWQ6IFwiLCBwdXJnZUV2ZW50KSk7XG5cbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgZmlyZWJhc2VEYXRhc3RvcmUuc3RvcCgpO1xuXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2F1Z2h0IGV4Y2VwdGlvbiBpbiBiZWZvcmVFYWNoOiBcIiwgZSk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCI9PT09IEVORCBiZWZvcmVFYWNoXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHR5cGUgQ29uc2lzdGVuY3lUZXN0RnVuY3Rpb24gPSAocGVyc2lzdGVuY2VMYXllcjogUGVyc2lzdGVuY2VMYXllcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvdWRBd2FyZURhdGFzdG9yZTogQ2xvdWRBd2FyZURhdGFzdG9yZSkgPT4gUHJvbWlzZTx2b2lkPjtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUaGlzIHdpbGwgaW5pdCB0aGUgY2xvdWQgZGF0YXN0b3JlLCB0aGVuIHdhaXQgZm9yIHRoZW0gdG8gYmVjb21lXG4gICAgICAgICAgICAgKiBjb25zaXN0ZW50LCB0aGVuIHdlIHJ1biB0aGUgdGVzdCBmdW5jdGlvbiB0byB2ZXJpZnkgdGhhdCB0aGVcbiAgICAgICAgICAgICAqIGRhdGFzdG9yZSBpcyB2YWxpZC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgYXN5bmMgZnVuY3Rpb24gdGVzdEZvckNvbnNpc3RlbmN5KHRlc3RGdW5jdGlvbjogQ29uc2lzdGVuY3lUZXN0RnVuY3Rpb24gPSBBU1lOQ19OVUxMX0ZVTkNUSU9OKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjbG91ZEF3YXJlRGF0YXN0b3JlID0gYXdhaXQgY3JlYXRlRGF0YXN0b3JlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGVyc2lzdGVuY2VMYXllciA9IG5ldyBEZWZhdWx0UGVyc2lzdGVuY2VMYXllcihjbG91ZEF3YXJlRGF0YXN0b3JlKTtcblxuICAgICAgICAgICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgcGVyc2lzdGVuY2VMYXllci5pbml0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgd2FpdEZvckV4cGVjdChhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnNpc3RlbmN5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBhd2FpdCBEYXRhc3RvcmVzLmNoZWNrQ29uc2lzdGVuY3koY2xvdWRBd2FyZURhdGFzdG9yZS5sb2NhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG91ZEF3YXJlRGF0YXN0b3JlLmNsb3VkKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXJ0Lm9rKGNvbnNpc3RlbmN5LmNvbnNpc3RlbnQpO1xuXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRlc3RGdW5jdGlvbihwZXJzaXN0ZW5jZUxheWVyLCBjbG91ZEF3YXJlRGF0YXN0b3JlKTtcblxuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXIuc3RvcCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpdChcIlRlc3Q4OiBTeW5jIHdpdGggZXh0cmEgZmlsZXMgaW4gdGhlIGxvY2FsIHN0b3JlXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YXN0b3JlID0gbmV3IERpc2tEYXRhc3RvcmUoKTtcbiAgICAgICAgICAgICAgICBhd2FpdCBkYXRhc3RvcmUuaW5pdCgpO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgZGF0YXN0b3JlLndyaXRlRG9jTWV0YShNb2NrRG9jTWV0YXMuY3JlYXRlTW9ja0RvY01ldGEoJzB4MDAwNCcpKTtcbiAgICAgICAgICAgICAgICBhd2FpdCBkYXRhc3RvcmUud3JpdGVEb2NNZXRhKE1vY2tEb2NNZXRhcy5jcmVhdGVNb2NrRG9jTWV0YSgnMHgwMDA1JykpO1xuICAgICAgICAgICAgICAgIGF3YWl0IGRhdGFzdG9yZS5zdG9wKCk7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCB0ZXN0Rm9yQ29uc2lzdGVuY3koYXN5bmMgKHBlcnNpc3RlbmNlTGF5ZXIsIGNsb3VkQXdhcmVEYXRhc3RvcmUpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGN1cnJlbnRGaW5nZXJwcmludCBvZiBbJzB4MDAwNCcsICcweDAwMDUnXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXJ0Lm9rKGF3YWl0IGNsb3VkQXdhcmVEYXRhc3RvcmUubG9jYWwuY29udGFpbnMoY3VycmVudEZpbmdlcnByaW50KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NlcnQub2soYXdhaXQgY2xvdWRBd2FyZURhdGFzdG9yZS5jbG91ZC5jb250YWlucyhjdXJyZW50RmluZ2VycHJpbnQpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpdChcIlRlc3Q5OiBTeW5jIHdpdGggZXh0cmEgZmlsZXMgaW4gdGhlIGZpcmViYXNlIHN0b3JlXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YXN0b3JlID0gbmV3IEZpcmViYXNlRGF0YXN0b3JlKCk7XG4gICAgICAgICAgICAgICAgZGF0YXN0b3JlLmVuYWJsZVBlcnNpc3RlbmNlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYXdhaXQgZGF0YXN0b3JlLmluaXQoKTtcblxuICAgICAgICAgICAgICAgIGF3YWl0IGRhdGFzdG9yZS53cml0ZURvY01ldGEoTW9ja0RvY01ldGFzLmNyZWF0ZU1vY2tEb2NNZXRhKCcweDAwMDQnKSk7XG4gICAgICAgICAgICAgICAgYXdhaXQgZGF0YXN0b3JlLndyaXRlRG9jTWV0YShNb2NrRG9jTWV0YXMuY3JlYXRlTW9ja0RvY01ldGEoJzB4MDAwNScpKTtcbiAgICAgICAgICAgICAgICBhd2FpdCBkYXRhc3RvcmUuc3RvcCgpO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgdGVzdEZvckNvbnNpc3RlbmN5KGFzeW5jIChwZXJzaXN0ZW5jZUxheWVyLCBjbG91ZEF3YXJlRGF0YXN0b3JlKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBjdXJyZW50RmluZ2VycHJpbnQgb2YgWycweDAwMDQnLCAnMHgwMDA1J10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2VydC5vayhhd2FpdCBjbG91ZEF3YXJlRGF0YXN0b3JlLmxvY2FsLmNvbnRhaW5zKGN1cnJlbnRGaW5nZXJwcmludCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXJ0Lm9rKGF3YWl0IGNsb3VkQXdhcmVEYXRhc3RvcmUuY2xvdWQuY29udGFpbnMoY3VycmVudEZpbmdlcnByaW50KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaXQoXCJUZXN0MTogbnVsbCB0ZXN0IHRvIG1ha2Ugc3VyZSB3ZSBoYXZlIG5vIGRvY3VtZW50cyBvbiBzdGFydHVwXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcGVyc2lzdGVuY2VMYXllciA9IG5ldyBEZWZhdWx0UGVyc2lzdGVuY2VMYXllcihhd2FpdCBjcmVhdGVEYXRhc3RvcmUoKSk7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBwZXJzaXN0ZW5jZUxheWVyLmluaXQoKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRvY01ldGFGaWxlcyA9IGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXIuZ2V0RG9jTWV0YVJlZnMoKTtcbiAgICAgICAgICAgICAgICBhc3NlcnQuZXF1YWwoZG9jTWV0YUZpbGVzLmxlbmd0aCwgMCk7XG5cbiAgICAgICAgICAgICAgICBwZXJzaXN0ZW5jZUxheWVyLnN0b3AoKTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGl0KFwiVGVzdDI6IEJhc2ljIHN5bmNocm9uaXphdGlvbiB0ZXN0c1wiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIC8vIGZpcnN0IHB1cmdlIHRoZSBmaXJlYmFzZSBkYXRhc3RvcmVcblxuICAgICAgICAgICAgICAgIGNvbnN0IGZpcmViYXNlRGF0YXN0b3JlID0gbmV3IEZpcmViYXNlRGF0YXN0b3JlKCk7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBmaXJlYmFzZURhdGFzdG9yZS5pbml0KCk7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBEYXRhc3RvcmVzLnB1cmdlKGZpcmViYXNlRGF0YXN0b3JlKTtcblxuICAgICAgICAgICAgICAgIC8vIHRoZW4gd3JpdGUgYW4gaW5pdGlhbCBkb2MgdG8gaXQuLi5cblxuICAgICAgICAgICAgICAgIGNvbnN0IGZpcmVzdG9yZVBlcnNpc3RlbmNlTGF5ZXIgPSBuZXcgRGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXIoZmlyZWJhc2VEYXRhc3RvcmUpO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgZmlyZXN0b3JlUGVyc2lzdGVuY2VMYXllci53cml0ZURvY01ldGEoTW9ja0RvY01ldGFzLmNyZWF0ZU1vY2tEb2NNZXRhKCcweDAwMScpKTtcblxuICAgICAgICAgICAgICAgIC8vIG5vdyBzdGFydHVwIGEgbmV3IGNsb3VkIHBlcnNpc3RlbmNlIGxheWVyIGFuZCBtYWtlIHN1cmUgd2VcbiAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGRvYyBpbiBmaXJlYmFzZSB3cml0dGVuIGxvY2FsbHkuXG5cbiAgICAgICAgICAgICAgICBjb25zdCBjbG91ZEF3YXJlRGF0YXN0b3JlID0gYXdhaXQgY3JlYXRlRGF0YXN0b3JlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGVyc2lzdGVuY2VMYXllciA9IG5ldyBEZWZhdWx0UGVyc2lzdGVuY2VMYXllcihjbG91ZEF3YXJlRGF0YXN0b3JlKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGluaXRpYWxEb2NMYXRjaCA9IG5ldyBMYXRjaDxib29sZWFuPigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4dGVybmFsbHlXcml0dGVuRG9jTGF0Y2ggPSBuZXcgTGF0Y2g8Ym9vbGVhbj4oKTtcblxuICAgICAgICAgICAgICAgIGNsb3VkQXdhcmVEYXRhc3RvcmUuYWRkRG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcihhc3luYyBkb2NNZXRhU25hcHNob3RFdmVudCA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBkb2NNdXRhdGlvbiBvZiBkb2NNZXRhU25hcHNob3RFdmVudC5kb2NNZXRhTXV0YXRpb25zKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2NNdXRhdGlvbi5maW5nZXJwcmludCA9PT0gJzB4MDAxJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxEb2NMYXRjaC5yZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jTXV0YXRpb24uZmluZ2VycHJpbnQgPT09ICcweDAwMicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRlcm5hbGx5V3JpdHRlbkRvY0xhdGNoLnJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBwZXJzaXN0ZW5jZUxheWVyLmluaXQoKTtcblxuICAgICAgICAgICAgICAgIGF3YWl0IGluaXRpYWxEb2NMYXRjaC5nZXQoKTtcblxuICAgICAgICAgICAgICAgIGF3YWl0IGZpcmVzdG9yZVBlcnNpc3RlbmNlTGF5ZXIud3JpdGVEb2NNZXRhKE1vY2tEb2NNZXRhcy5jcmVhdGVNb2NrRG9jTWV0YSgnMHgwMDInKSk7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBleHRlcm5hbGx5V3JpdHRlbkRvY0xhdGNoLmdldCgpO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgd2FpdEZvckV4cGVjdChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFzc2VydC5vayhhd2FpdCBwZXJzaXN0ZW5jZUxheWVyLmNvbnRhaW5zKCcweDAwMicpLCBcIkRvZXMgbm90IGNvbnRhaW4gc2Vjb25kIGRvY1wiKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV09SS0VEXCIpO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgcGVyc2lzdGVuY2VMYXllci5zdG9wKCk7XG4gICAgICAgICAgICAgICAgYXdhaXQgZmlyZXN0b3JlUGVyc2lzdGVuY2VMYXllci5zdG9wKCk7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpdChcIlRlc3QzOiBXcml0ZSBhIGJhc2ljIGRvYyB3aXRoIHN5bmNocm9uaXphdGlvbiBsaXN0ZW5lclwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNsb3VkQXdhcmVEYXRhc3RvcmUgPSBhd2FpdCBjcmVhdGVEYXRhc3RvcmUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwZXJzaXN0ZW5jZUxheWVyID0gbmV3IERlZmF1bHRQZXJzaXN0ZW5jZUxheWVyKGNsb3VkQXdhcmVEYXRhc3RvcmUpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbGF0Y2gwID0gbmV3IExhdGNoPGJvb2xlYW4+KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbGF0Y2gxID0gbmV3IExhdGNoPGJvb2xlYW4+KCk7XG5cbiAgICAgICAgICAgICAgICBjbG91ZEF3YXJlRGF0YXN0b3JlLmFkZFN5bmNocm9uaXphdGlvbkV2ZW50TGlzdGVuZXIoZG9jTWV0YVNuYXBzaG90RXZlbnQgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2NNZXRhU25hcHNob3RFdmVudC5jb25zaXN0ZW5jeSAhPT0gJ2NvbW1pdHRlZCcgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGRvY01ldGFNdXRhdGlvbiBvZiBkb2NNZXRhU25hcHNob3RFdmVudC5kb2NNZXRhTXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jTWV0YU11dGF0aW9uLmZpbmdlcnByaW50ID09PSAnMHgwMDInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF0Y2gwLnJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jTWV0YU11dGF0aW9uLmZpbmdlcnByaW50ID09PSAnMHgwMDMnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF0Y2gxLnJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgcGVyc2lzdGVuY2VMYXllci5pbml0KCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkb2NNZXRhID0gTW9ja0RvY01ldGFzLmNyZWF0ZU1vY2tEb2NNZXRhKCcweDAwMicpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXIud3JpdGVEb2NNZXRhKGRvY01ldGEpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZmlyZWJhc2VQZXJzaXN0ZW5jZUxheWVyID0gbmV3IERlZmF1bHRQZXJzaXN0ZW5jZUxheWVyKG5ldyBGaXJlYmFzZURhdGFzdG9yZSgpKTtcbiAgICAgICAgICAgICAgICBhd2FpdCBmaXJlYmFzZVBlcnNpc3RlbmNlTGF5ZXIuaW5pdCgpO1xuICAgICAgICAgICAgICAgIGF3YWl0IGZpcmViYXNlUGVyc2lzdGVuY2VMYXllci53cml0ZURvY01ldGEoTW9ja0RvY01ldGFzLmNyZWF0ZU1vY2tEb2NNZXRhKCcweDAwMycpKTtcblxuICAgICAgICAgICAgICAgIGF3YWl0IGxhdGNoMC5nZXQoKTtcbiAgICAgICAgICAgICAgICBhd2FpdCBsYXRjaDEuZ2V0KCk7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBwZXJzaXN0ZW5jZUxheWVyLnN0b3AoKTtcbiAgICAgICAgICAgICAgICBhd2FpdCBmaXJlYmFzZVBlcnNpc3RlbmNlTGF5ZXIuc3RvcCgpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaXQoXCJUZXN0NDogV3JpdGUgYSBiYXNpYyBkb2NcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwZXJzaXN0ZW5jZUxheWVyID0gbmV3IERlZmF1bHRQZXJzaXN0ZW5jZUxheWVyKGF3YWl0IGNyZWF0ZURhdGFzdG9yZSgpKTtcblxuICAgICAgICAgICAgICAgIGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXIuaW5pdCgpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZG9jTWV0YSA9IE1vY2tEb2NNZXRhcy5jcmVhdGVNb2NrRG9jTWV0YSgpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YXN0b3JlTXV0YXRpb24gPSBuZXcgRGVmYXVsdERhdGFzdG9yZU11dGF0aW9uPERvY0luZm8+KCk7XG5cbiAgICAgICAgICAgICAgICBsZXQgd3JpdHRlbkR1cmF0aW9uOiBudW1iZXIgPSAwO1xuICAgICAgICAgICAgICAgIGxldCBjb21taXR0ZWREdXJhdGlvbjogbnVtYmVyID0gMDtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGJlZm9yZSA9IERhdGUubm93KCk7XG5cbiAgICAgICAgICAgICAgICBkYXRhc3RvcmVNdXRhdGlvbi53cml0dGVuLmdldCgpLnRoZW4oKCkgPT4gd3JpdHRlbkR1cmF0aW9uID0gRGF0ZS5ub3coKSAtIGJlZm9yZSk7XG4gICAgICAgICAgICAgICAgZGF0YXN0b3JlTXV0YXRpb24uY29tbWl0dGVkLmdldCgpLnRoZW4oKCkgPT4gY29tbWl0dGVkRHVyYXRpb24gPSBEYXRlLm5vdygpIC0gYmVmb3JlKTtcblxuICAgICAgICAgICAgICAgIGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXIud3JpdGUoZmluZ2VycHJpbnQsIGRvY01ldGEsIGRhdGFzdG9yZU11dGF0aW9uKTtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGB3cml0dGVuRHVyYXRpb246ICR7d3JpdHRlbkR1cmF0aW9ufSwgY29tbWl0dGVkRHVyYXRpb246ICR7Y29tbWl0dGVkRHVyYXRpb259YCk7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBwZXJzaXN0ZW5jZUxheWVyLnN0b3AoKTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGl0KFwiVGVzdDU6IFRlc3QgYW4gZXhpc3RpbmcgZmlyZWJhc2Ugc3RvcmUgd2l0aCBleGlzdGluZyBkYXRhIHJlcGxpY2F0aW5nIHRvIGEgbmV3IENsb3VkRGF0YXN0b3JlLlwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIGxldCBlcnI6IEVycm9yIHwgdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JMaXN0ZW5lciA9IChlcnJvcjogRXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkdvdCBlcnJvcjogIFwiLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICBlcnIgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc291cmNlUGVyc2lzdGVuY2VMYXllciA9IG5ldyBEZWZhdWx0UGVyc2lzdGVuY2VMYXllcihuZXcgRmlyZWJhc2VEYXRhc3RvcmUoKSk7XG4gICAgICAgICAgICAgICAgYXdhaXQgc291cmNlUGVyc2lzdGVuY2VMYXllci5pbml0KGVycm9yTGlzdGVuZXIpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHNvdXJjZVBlcnNpc3RlbmNlTGF5ZXIud3JpdGVEb2NNZXRhKE1vY2tEb2NNZXRhcy5jcmVhdGVNb2NrRG9jTWV0YShmaW5nZXJwcmludCkpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHNvdXJjZVBlcnNpc3RlbmNlTGF5ZXIuc3RvcCgpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0UGVyc2lzdGVuY2VMYXllciA9IG5ldyBEZWZhdWx0UGVyc2lzdGVuY2VMYXllcihhd2FpdCBjcmVhdGVEYXRhc3RvcmUoKSk7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCB0YXJnZXRQZXJzaXN0ZW5jZUxheWVyLmluaXQoZXJyb3JMaXN0ZW5lcik7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCB3YWl0Rm9yRXhwZWN0KGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YURpciA9IFBvbGFyRGF0YURpci5nZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGF0aCA9IEZpbGVQYXRocy5qb2luKGRhdGFEaXIhLCBmaW5nZXJwcmludCwgJ3N0YXRlLmpzb24nKTtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXJ0Lm9rKGF3YWl0IEZpbGVzLmV4aXN0c0FzeW5jKHBhdGgpLCBcIlBhdGggZG9lcyBub3QgZXhpc3Q6IFwiICsgcGF0aCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCB0YXJnZXRQZXJzaXN0ZW5jZUxheWVyLnN0b3AoKTtcblxuICAgICAgICAgICAgICAgIC8vIHZlcmlmeSB0aGF0IHdlIGhhdmUgcmVjZWl2ZWQgbm8gZXJyb3JzLlxuICAgICAgICAgICAgICAgIGFzc2VydC5vayhlcnIgPT09IHVuZGVmaW5lZCwgXCJSZWNlaXZlZCBhbiBlcnJvcjogXCIgKyBlcnIpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaXQoXCJUZXN0NjogVmVyaWZ5IHVuc3Vic2NyaWJlIHdvcmtzLlwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIGF3YWl0IEZpbGVzLnJlbW92ZURpcmVjdG9yeVJlY3Vyc2l2ZWx5QXN5bmMoUG9sYXJEYXRhRGlyLmdldCgpISk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRQZXJzaXN0ZW5jZUxheWVyID0gbmV3IERlZmF1bHRQZXJzaXN0ZW5jZUxheWVyKGF3YWl0IGNyZWF0ZURhdGFzdG9yZSgpKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0YXJnZXRQZXJzaXN0ZW5jZUxheWVyLmluaXQoKTtcblxuICAgICAgICAgICAgICAgIGF3YWl0IERhdGFzdG9yZXMucHVyZ2UodGFyZ2V0UGVyc2lzdGVuY2VMYXllci5kYXRhc3RvcmUpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZG9jTWV0YUZpbGVzID0gYXdhaXQgdGFyZ2V0UGVyc2lzdGVuY2VMYXllci5nZXREb2NNZXRhUmVmcygpO1xuICAgICAgICAgICAgICAgIGFzc2VydC5lcXVhbChkb2NNZXRhRmlsZXMubGVuZ3RoLCAwKTtcblxuICAgICAgICAgICAgICAgIGxldCBnb3RFdmVudEFmdGVyVW5zdWJzY3JpYmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBsZXQgdW5zdWJzY3JpYmVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzbmFwc2hvdFJlc3VsdCA9IGF3YWl0IHRhcmdldFBlcnNpc3RlbmNlTGF5ZXIuc25hcHNob3QoYXN5bmMgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdPVCBBTiBFVkVOVCB3aXRoIGNvbnNpc3RlbmN5OiBcIiArIGV2ZW50LmNvbnNpc3RlbmN5LCBldmVudCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmNvbnNpc3RlbmN5ICE9PSAnY29tbWl0dGVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCEgdW5zdWJzY3JpYmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBnb3RFdmVudEFmdGVyVW5zdWJzY3JpYmUgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBzbmFwc2hvdFJlc3VsdC51bnN1YnNjcmliZSEoKTtcbiAgICAgICAgICAgICAgICB1bnN1YnNjcmliZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc2lkZVBlcnNpc3RlbmNlTGF5ZXIgPSBuZXcgRGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXIobmV3IEZpcmViYXNlRGF0YXN0b3JlKCkpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHNpZGVQZXJzaXN0ZW5jZUxheWVyLmluaXQoKTtcbiAgICAgICAgICAgICAgICBhd2FpdCBzaWRlUGVyc2lzdGVuY2VMYXllci53cml0ZURvY01ldGEoTW9ja0RvY01ldGFzLmNyZWF0ZU1vY2tEb2NNZXRhKCkpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHNpZGVQZXJzaXN0ZW5jZUxheWVyLnN0b3AoKTtcblxuICAgICAgICAgICAgICAgIC8vIFRPRE86IHVuZm9ydHVuYXRlbHksIHdlIEhBVkUgdG8gc2xlZXAgaGVyZSBiZWNhdXNlIHdlJ3JlXG4gICAgICAgICAgICAgICAgLy8gd2FpdGluZyBmb3IgYW55IGxhZ2dpbmcgZXZlbnRzXG4gICAgICAgICAgICAgICAgYXdhaXQgUHJvbWlzZXMud2FpdEZvcig1MDAwKTtcblxuICAgICAgICAgICAgICAgIGFzc2VydC5vayhnb3RFdmVudEFmdGVyVW5zdWJzY3JpYmUgPT09IGZhbHNlLCBcIk5vcGUuLiB3ZSBzdGlsbCBnb3QgdGhlIGV2ZW50XCIpO1xuXG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAvLyBGSVhNRTogdGhpcyB3b250JyB3b3JrIHlldCBkdWUgdG8gdGhlIHNuYXBzaG90IGlzc3VlLlxuICAgICAgICAgICAgeGl0KFwiVGVzdDc6IFRlc3QgYSByZW1vdGUgd3JpdGUgYW5kIGEgbG9jYWwgcmVwbGljYXRpb24gdG8gZGlza1wiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZVBlcnNpc3RlbmNlTGF5ZXIgPSBuZXcgRGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXIobmV3IEZpcmViYXNlRGF0YXN0b3JlKCkpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHNvdXJjZVBlcnNpc3RlbmNlTGF5ZXIuaW5pdCgpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0UGVyc2lzdGVuY2VMYXllciA9IG5ldyBEZWZhdWx0UGVyc2lzdGVuY2VMYXllcihhd2FpdCBjcmVhdGVEYXRhc3RvcmUoKSk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGFyZ2V0UGVyc2lzdGVuY2VMYXllci5pbml0KCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkb2NNZXRhID0gTW9ja0RvY01ldGFzLmNyZWF0ZVdpdGhpbkluaXRpYWxQYWdlbWFya3MoZmluZ2VycHJpbnQsIDE0KTtcbiAgICAgICAgICAgICAgICBhd2FpdCBzb3VyY2VQZXJzaXN0ZW5jZUxheWVyLndyaXRlKGZpbmdlcnByaW50LCBkb2NNZXRhKTtcblxuICAgICAgICAgICAgICAgIGF3YWl0IHdhaXRGb3JFeHBlY3QoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhRGlyID0gUG9sYXJEYXRhRGlyLmdldCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXRoID0gRmlsZVBhdGhzLmpvaW4oZGF0YURpciEsICcweDAwMScsICdzdGF0ZS5qc29uJyk7XG4gICAgICAgICAgICAgICAgICAgIGFzc2VydC5vayhhd2FpdCBGaWxlcy5leGlzdHNBc3luYyhwYXRoKSwgJ1BhdGggZm9yIGZpbmdlcnByaW50IG5ldmVyIGFwcGVhcmVkJyk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBzb3VyY2VQZXJzaXN0ZW5jZUxheWVyLnN0b3AoKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0YXJnZXRQZXJzaXN0ZW5jZUxheWVyLnN0b3AoKTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgRGF0YXN0b3JlVGVzdGVyLnRlc3QoY3JlYXRlRGF0YXN0b3JlLCBmYWxzZSk7XG5cbiAgICB9KTtcblxufSk7XG5cblxuIl19