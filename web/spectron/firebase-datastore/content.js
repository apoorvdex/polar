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
const DefaultPersistenceLayer_1 = require("../../js/datastore/DefaultPersistenceLayer");
const DocMetas_1 = require("../../js/metadata/DocMetas");
const chai_1 = require("chai");
const DatastoreTester_1 = require("../../js/datastore/DatastoreTester");
const FirebaseDatastore_1 = require("../../js/datastore/FirebaseDatastore");
const FirebaseRunner_1 = require("../../js/firebase/FirebaseRunner");
const DatastoreMutation_1 = require("../../js/datastore/DatastoreMutation");
const Latch_1 = require("../../js/util/Latch");
const Datastores_1 = require("../../js/datastore/Datastores");
const wait_for_expect_1 = __importDefault(require("wait-for-expect"));
const Logger_1 = require("../../js/logger/Logger");
const log = Logger_1.Logger.create();
mocha.setup('bdd');
mocha.timeout(10000);
const fingerprint = "0x001";
SpectronRenderer_1.SpectronRenderer.run((state) => __awaiter(this, void 0, void 0, function* () {
    new FirebaseRunner_1.FirebaseRunner(state).run(() => __awaiter(this, void 0, void 0, function* () {
        const firebaseDatastore = new FirebaseDatastore_1.FirebaseDatastore();
        yield firebaseDatastore.init();
        describe('FirebaseDatastore tests', function () {
            xit("Make sure we get events from the datastore", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    let datastore = new FirebaseDatastore_1.FirebaseDatastore();
                    const persistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(datastore);
                    yield persistenceLayer.init();
                    yield Datastores_1.Datastores.purge(datastore, purgeEvent => {
                        log.info("purgeEvent: ", purgeEvent);
                    });
                    yield wait_for_expect_1.default(() => __awaiter(this, void 0, void 0, function* () {
                        const docMetaFiles = yield persistenceLayer.getDocMetaRefs();
                        chai_1.assert.equal(docMetaFiles.length, 0);
                    }));
                    const docMeta = DocMetas_1.MockDocMetas.createWithinInitialPagemarks(fingerprint, 14);
                    const datastoreMutation = new DatastoreMutation_1.DefaultDatastoreMutation();
                    const docReplicationEventListenerCalled = false;
                    yield persistenceLayer.write(fingerprint, docMeta, datastoreMutation);
                    chai_1.assert.isFalse(docReplicationEventListenerCalled);
                    yield wait_for_expect_1.default(() => __awaiter(this, void 0, void 0, function* () {
                        const docMetaFiles = yield persistenceLayer.getDocMetaRefs();
                        chai_1.assert.equal(docMetaFiles.length, 1);
                    }));
                    yield persistenceLayer.stop();
                    datastore = new FirebaseDatastore_1.FirebaseDatastore();
                    const docMutationLatch = new Latch_1.Latch();
                    const docReplicationLatch = new Latch_1.Latch();
                    yield datastore.init();
                    yield docMutationLatch.get();
                    yield docReplicationLatch.get();
                    yield datastore.stop();
                });
            });
            xit("Make sure we get replication events from a second datastore to the first", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    class ReplicationTester {
                        constructor() {
                            this.hasDocReplicationEvent = false;
                        }
                        init() {
                            return __awaiter(this, void 0, void 0, function* () {
                                this.datastore = new FirebaseDatastore_1.FirebaseDatastore();
                                this.persistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(this.datastore);
                                yield this.persistenceLayer.init();
                                return this;
                            });
                        }
                        setup() {
                            return __awaiter(this, void 0, void 0, function* () {
                                return this;
                            });
                        }
                        write() {
                            return __awaiter(this, void 0, void 0, function* () {
                                const docMeta = DocMetas_1.MockDocMetas.createWithinInitialPagemarks(fingerprint, 14);
                                yield this.persistenceLayer.write(fingerprint, docMeta);
                                yield this.persistenceLayer.delete({ fingerprint, docInfo: docMeta.docInfo });
                                return this;
                            });
                        }
                        stop() {
                            return __awaiter(this, void 0, void 0, function* () {
                                this.persistenceLayer.stop();
                            });
                        }
                    }
                    const replicationTester0 = yield new ReplicationTester().init();
                    const replicationTester1 = yield new ReplicationTester().init();
                    yield replicationTester0.setup();
                    yield replicationTester1.setup();
                    yield replicationTester1.write();
                    chai_1.assert.ok(replicationTester0.hasDocReplicationEvent, "replicationTester0 failed");
                    chai_1.assert.ok(!replicationTester1.hasDocReplicationEvent, "replicationTester1 failed");
                    yield replicationTester0.stop();
                    yield replicationTester1.stop();
                });
            });
        });
        DatastoreTester_1.DatastoreTester.test(() => __awaiter(this, void 0, void 0, function* () { return firebaseDatastore; }), false);
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHFFQUF1RjtBQU12Rix3RkFBbUY7QUFDbkYseURBQXdEO0FBQ3hELCtCQUE0QjtBQUM1Qix3RUFBbUU7QUFJbkUsNEVBQXVFO0FBRXZFLHFFQUFnRTtBQUNoRSw0RUFBOEU7QUFFOUUsK0NBQTBDO0FBRzFDLDhEQUF5RDtBQUN6RCxzRUFBNEM7QUFFNUMsbURBQThDO0FBRTlDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ25CLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFckIsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDO0FBRTVCLG1DQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFPLEtBQUssRUFBRSxFQUFFO0lBRWpDLElBQUksK0JBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBUyxFQUFFO1FBRXJDLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxxQ0FBaUIsRUFBRSxDQUFDO1FBRWxELE1BQU0saUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFL0IsUUFBUSxDQUFDLHlCQUF5QixFQUFFO1lBRWhDLEdBQUcsQ0FBQyw0Q0FBNEMsRUFBRTs7b0JBRTlDLElBQUksU0FBUyxHQUFHLElBQUkscUNBQWlCLEVBQUUsQ0FBQztvQkFFeEMsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLGlEQUF1QixDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUVoRSxNQUFNLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO29CQUU5QixNQUFNLHVCQUFVLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsRUFBRTt3QkFDM0MsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEVB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O29CQUNoRSxNQUFNLGtCQUFrQixHQUFHLE1BQU0sSUFBSSxpQkFBaUIsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUVoRSxNQUFNLGtCQUFrQixDQUFDLEtBQUssRUFBRSxDQUFDO29CQUNqQyxNQUFNLGtCQUFrQixDQUFDLEtBQUssRUFBRSxDQUFDO29CQUVqQyxNQUFNLGtCQUFrQixDQUFDLEtBQUssRUFBRSxDQUFDO29CQUVqQyxhQUFNLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLHNCQUFzQixFQUFFLDJCQUEyQixDQUFDLENBQUM7b0JBQ2xGLGFBQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxzQkFBc0IsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO29CQUVuRixNQUFNLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO29CQUNoQyxNQUFNLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO2dCQUVwQyxDQUFDO2FBQUEsQ0FBQyxDQUFDO1FBR1AsQ0FBQyxDQUFDLENBQUM7UUFFSCxpQ0FBZSxDQUFDLElBQUksQ0FBQyxHQUFTLEVBQUUsZ0RBQUMsT0FBQSxpQkFBaUIsQ0FBQSxHQUFBLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFL0QsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NwZWN0cm9uUmVuZGVyZXIsIFNwZWN0cm9uUmVuZGVyZXJTdGF0ZX0gZnJvbSAnLi4vLi4vanMvdGVzdC9TcGVjdHJvblJlbmRlcmVyJztcbmltcG9ydCB7RmlyZWJhc2V9IGZyb20gJy4uLy4uL2pzL2ZpcmViYXNlL0ZpcmViYXNlJztcbmltcG9ydCB7RmlyZWJhc2VVSUF1dGh9IGZyb20gJy4uLy4uL2pzL2ZpcmViYXNlL0ZpcmViYXNlVUlBdXRoJztcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJy4uLy4uL2pzL2ZpcmViYXNlL2xpYi9maXJlYmFzZSc7XG5pbXBvcnQge0VsZW1lbnRzfSBmcm9tICcuLi8uLi9qcy91dGlsL0VsZW1lbnRzJztcbmltcG9ydCB7RGlza0RhdGFzdG9yZX0gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL0Rpc2tEYXRhc3RvcmUnO1xuaW1wb3J0IHtEZWZhdWx0UGVyc2lzdGVuY2VMYXllcn0gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL0RlZmF1bHRQZXJzaXN0ZW5jZUxheWVyJztcbmltcG9ydCB7TW9ja0RvY01ldGFzfSBmcm9tICcuLi8uLi9qcy9tZXRhZGF0YS9Eb2NNZXRhcyc7XG5pbXBvcnQge2Fzc2VydH0gZnJvbSBcImNoYWlcIjtcbmltcG9ydCB7RGF0YXN0b3JlVGVzdGVyfSBmcm9tICcuLi8uLi9qcy9kYXRhc3RvcmUvRGF0YXN0b3JlVGVzdGVyJztcbmltcG9ydCB7RmlyZXN0b3JlfSBmcm9tICcuLi8uLi9qcy9maXJlYmFzZS9GaXJlc3RvcmUnO1xuaW1wb3J0IHtIYXNoY29kZXN9IGZyb20gJy4uLy4uL2pzL0hhc2hjb2Rlcyc7XG5pbXBvcnQge1Byb21pc2VzfSBmcm9tICcuLi8uLi9qcy91dGlsL1Byb21pc2VzJztcbmltcG9ydCB7RmlyZWJhc2VEYXRhc3RvcmV9IGZyb20gJy4uLy4uL2pzL2RhdGFzdG9yZS9GaXJlYmFzZURhdGFzdG9yZSc7XG5pbXBvcnQge0VsZWN0cm9uRG9jTG9hZGVyfSBmcm9tICcuLi8uLi9qcy9hcHBzL21haW4vZG9jX2xvYWRlcnMvZWxlY3Ryb24vRWxlY3Ryb25Eb2NMb2FkZXInO1xuaW1wb3J0IHtGaXJlYmFzZVJ1bm5lcn0gZnJvbSAnLi4vLi4vanMvZmlyZWJhc2UvRmlyZWJhc2VSdW5uZXInO1xuaW1wb3J0IHtEZWZhdWx0RGF0YXN0b3JlTXV0YXRpb259IGZyb20gJy4uLy4uL2pzL2RhdGFzdG9yZS9EYXRhc3RvcmVNdXRhdGlvbic7XG5pbXBvcnQge0RvY0luZm99IGZyb20gJy4uLy4uL2pzL21ldGFkYXRhL0RvY0luZm8nO1xuaW1wb3J0IHtMYXRjaH0gZnJvbSAnLi4vLi4vanMvdXRpbC9MYXRjaCc7XG5pbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJXb3JrZXJzfSBmcm9tICcuLi8uLi9qcy9kYXRhc3RvcmUvZGlzcGF0Y2hlci9QZXJzaXN0ZW5jZUxheWVyV29ya2Vycyc7XG5pbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJ9IGZyb20gJy4uLy4uL2pzL2RhdGFzdG9yZS9QZXJzaXN0ZW5jZUxheWVyJztcbmltcG9ydCB7RGF0YXN0b3Jlc30gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL0RhdGFzdG9yZXMnO1xuaW1wb3J0IHdhaXRGb3JFeHBlY3QgZnJvbSAnd2FpdC1mb3ItZXhwZWN0JztcbmltcG9ydCB7QnJvd3NlcldpbmRvd1JlZ2lzdHJ5fSBmcm9tICcuLi8uLi9qcy9lbGVjdHJvbi9mcmFtZXdvcmsvQnJvd3NlcldpbmRvd1JlZ2lzdHJ5JztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi9qcy9sb2dnZXIvTG9nZ2VyJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5tb2NoYS5zZXR1cCgnYmRkJyk7XG5tb2NoYS50aW1lb3V0KDEwMDAwKTtcblxuY29uc3QgZmluZ2VycHJpbnQgPSBcIjB4MDAxXCI7XG5cblNwZWN0cm9uUmVuZGVyZXIucnVuKGFzeW5jIChzdGF0ZSkgPT4ge1xuXG4gICAgbmV3IEZpcmViYXNlUnVubmVyKHN0YXRlKS5ydW4oYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGZpcmViYXNlRGF0YXN0b3JlID0gbmV3IEZpcmViYXNlRGF0YXN0b3JlKCk7XG5cbiAgICAgICAgYXdhaXQgZmlyZWJhc2VEYXRhc3RvcmUuaW5pdCgpO1xuXG4gICAgICAgIGRlc2NyaWJlKCdGaXJlYmFzZURhdGFzdG9yZSB0ZXN0cycsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICB4aXQoXCJNYWtlIHN1cmUgd2UgZ2V0IGV2ZW50cyBmcm9tIHRoZSBkYXRhc3RvcmVcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgZGF0YXN0b3JlID0gbmV3IEZpcmViYXNlRGF0YXN0b3JlKCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwZXJzaXN0ZW5jZUxheWVyID0gbmV3IERlZmF1bHRQZXJzaXN0ZW5jZUxheWVyKGRhdGFzdG9yZSk7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBwZXJzaXN0ZW5jZUxheWVyLmluaXQoKTtcblxuICAgICAgICAgICAgICAgIGF3YWl0IERhdGFzdG9yZXMucHVyZ2UoZGF0YXN0b3JlLCBwdXJnZUV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbG9nLmluZm8oXCJwdXJnZUV2ZW50OiBcIiwgcHVyZ2VFdmVudCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCB3YWl0Rm9yRXhwZWN0KGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZG9jTWV0YUZpbGVzID0gYXdhaXQgcGVyc2lzdGVuY2VMYXllci5nZXREb2NNZXRhUmVmcygpO1xuICAgICAgICAgICAgICAgICAgICBhc3NlcnQuZXF1YWwoZG9jTWV0YUZpbGVzLmxlbmd0aCwgMCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkb2NNZXRhID0gTW9ja0RvY01ldGFzLmNyZWF0ZVdpdGhpbkluaXRpYWxQYWdlbWFya3MoZmluZ2VycHJpbnQsIDE0KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFzdG9yZU11dGF0aW9uID0gbmV3IERlZmF1bHREYXRhc3RvcmVNdXRhdGlvbjxEb2NJbmZvPigpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZG9jUmVwbGljYXRpb25FdmVudExpc3RlbmVyQ2FsbGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAvLyBkYXRhc3RvcmUuYWRkRG9jTWV0YVN5bmNocm9uaXphdGlvbkV2ZW50TGlzdGVuZXIoKGRvY011dGF0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGRvY1JlcGxpY2F0aW9uRXZlbnRMaXN0ZW5lckNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBwZXJzaXN0ZW5jZUxheWVyLndyaXRlKGZpbmdlcnByaW50LCBkb2NNZXRhLCBkYXRhc3RvcmVNdXRhdGlvbik7XG5cbiAgICAgICAgICAgICAgICBhc3NlcnQuaXNGYWxzZShkb2NSZXBsaWNhdGlvbkV2ZW50TGlzdGVuZXJDYWxsZWQpO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgd2FpdEZvckV4cGVjdChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRvY01ldGFGaWxlcyA9IGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXIuZ2V0RG9jTWV0YVJlZnMoKTtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKGRvY01ldGFGaWxlcy5sZW5ndGgsIDEpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgcGVyc2lzdGVuY2VMYXllci5zdG9wKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBub3cgY3JlYXRlIGEgbmV3IGRhdGFzdG9yZSB0byBtYWtlIHN1cmUgd2UgZ2V0IHRoZSBldmVudHMgd2VcbiAgICAgICAgICAgICAgICAvLyBuZWVkLlxuXG4gICAgICAgICAgICAgICAgZGF0YXN0b3JlID0gbmV3IEZpcmViYXNlRGF0YXN0b3JlKCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkb2NNdXRhdGlvbkxhdGNoID0gbmV3IExhdGNoPGJvb2xlYW4+KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZG9jUmVwbGljYXRpb25MYXRjaCA9IG5ldyBMYXRjaDxib29sZWFuPigpO1xuXG4gICAgICAgICAgICAgICAgLy8gZGF0YXN0b3JlLmFkZERvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIoKGRvY01ldGFTbmFwc2hvdEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJGSVhNRTogaGVyZSBhdCBsZWFzdDogXCIsIGRvY01ldGFTbmFwc2hvdEV2ZW50KTtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICAgICBmb3IgKGNvbnN0IGRvY01ldGFNdXRhdGlvbiBvZiBkb2NNZXRhU25hcHNob3RFdmVudC5kb2NNZXRhTXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IHttdXRhdGlvblR5cGV9ID0gZG9jTWV0YU11dGF0aW9uO1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCBkb2NJbmZvID0gYXdhaXQgZG9jTWV0YU11dGF0aW9uLmRvY0luZm9Qcm92aWRlcigpO1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBpZiAoZG9jSW5mby5maW5nZXJwcmludCA9PT0gZmluZ2VycHJpbnQgJiYgbXV0YXRpb25UeXBlID09PSAnY3JlYXRlZCcpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZJWE1FOiBnb3QgZmlyc3RcIik7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgZG9jTXV0YXRpb25MYXRjaC5yZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gZGF0YXN0b3JlLmFkZERvY01ldGFTeW5jaHJvbml6YXRpb25FdmVudExpc3RlbmVyKChkb2NNZXRhU25hcHNob3RFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiRklYTUU6IGhlcmUgYXQgbGVhc3Q6IFwiLCBkb2NNZXRhU25hcHNob3RFdmVudCk7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAgICAgZm9yIChjb25zdCBkb2NNZXRhTXV0YXRpb24gb2YgZG9jTWV0YVNuYXBzaG90RXZlbnQuZG9jTWV0YU11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCB7bXV0YXRpb25UeXBlIH0gPSBkb2NNZXRhTXV0YXRpb247XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IGRvY0luZm8gPSBkb2NNZXRhTXV0YXRpb24uZG9jSW5mb1Byb3ZpZGVyKCk7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGlmIChkb2NJbmZvLmZpbmdlcnByaW50ID09PSBmaW5nZXJwcmludCAmJiAgbXV0YXRpb25UeXBlID09PSAnY3JlYXRlZCcpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZJWE1FOiBnb3Qgc2Vjb25kZVwiKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBkb2NSZXBsaWNhdGlvbkxhdGNoLnJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgICAgICAgIGF3YWl0IGRhdGFzdG9yZS5pbml0KCk7XG5cbiAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGxhdGNoIGlzIHJlc29sdmVkIHdlJ3ZlIGZvdW5kIG91ciB2YWx1ZS5cbiAgICAgICAgICAgICAgICBhd2FpdCBkb2NNdXRhdGlvbkxhdGNoLmdldCgpO1xuICAgICAgICAgICAgICAgIGF3YWl0IGRvY1JlcGxpY2F0aW9uTGF0Y2guZ2V0KCk7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBkYXRhc3RvcmUuc3RvcCgpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgeGl0KFwiTWFrZSBzdXJlIHdlIGdldCByZXBsaWNhdGlvbiBldmVudHMgZnJvbSBhIHNlY29uZCBkYXRhc3RvcmUgdG8gdGhlIGZpcnN0XCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgY2xhc3MgUmVwbGljYXRpb25UZXN0ZXIge1xuXG4gICAgICAgICAgICAgICAgICAgIHB1YmxpYyBkYXRhc3RvcmU/OiBGaXJlYmFzZURhdGFzdG9yZTtcblxuICAgICAgICAgICAgICAgICAgICBwdWJsaWMgcGVyc2lzdGVuY2VMYXllcj86IFBlcnNpc3RlbmNlTGF5ZXI7XG5cbiAgICAgICAgICAgICAgICAgICAgcHVibGljIGhhc0RvY1JlcGxpY2F0aW9uRXZlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICBwdWJsaWMgYXN5bmMgaW5pdCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXN0b3JlID0gbmV3IEZpcmViYXNlRGF0YXN0b3JlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcnNpc3RlbmNlTGF5ZXIgPSBuZXcgRGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXIodGhpcy5kYXRhc3RvcmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wZXJzaXN0ZW5jZUxheWVyLmluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcHVibGljIGFzeW5jIHNldHVwKCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmRhdGFzdG9yZSEuYWRkRG9jTWV0YVN5bmNocm9uaXphdGlvbkV2ZW50TGlzdGVuZXIoKGRvY1JlcGxpY2F0aW9uRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmhhc0RvY1JlcGxpY2F0aW9uRXZlbnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBwdWJsaWMgYXN5bmMgd3JpdGUoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRvY01ldGEgPSBNb2NrRG9jTWV0YXMuY3JlYXRlV2l0aGluSW5pdGlhbFBhZ2VtYXJrcyhmaW5nZXJwcmludCwgMTQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBlcnNpc3RlbmNlTGF5ZXIhLndyaXRlKGZpbmdlcnByaW50LCBkb2NNZXRhKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wZXJzaXN0ZW5jZUxheWVyIS5kZWxldGUoe2ZpbmdlcnByaW50LCBkb2NJbmZvOiBkb2NNZXRhLmRvY0luZm99KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHB1YmxpYyBhc3luYyBzdG9wKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJzaXN0ZW5jZUxheWVyIS5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcGxpY2F0aW9uVGVzdGVyMCA9IGF3YWl0IG5ldyBSZXBsaWNhdGlvblRlc3RlcigpLmluaXQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXBsaWNhdGlvblRlc3RlcjEgPSBhd2FpdCBuZXcgUmVwbGljYXRpb25UZXN0ZXIoKS5pbml0KCk7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCByZXBsaWNhdGlvblRlc3RlcjAuc2V0dXAoKTtcbiAgICAgICAgICAgICAgICBhd2FpdCByZXBsaWNhdGlvblRlc3RlcjEuc2V0dXAoKTtcblxuICAgICAgICAgICAgICAgIGF3YWl0IHJlcGxpY2F0aW9uVGVzdGVyMS53cml0ZSgpO1xuXG4gICAgICAgICAgICAgICAgYXNzZXJ0Lm9rKHJlcGxpY2F0aW9uVGVzdGVyMC5oYXNEb2NSZXBsaWNhdGlvbkV2ZW50LCBcInJlcGxpY2F0aW9uVGVzdGVyMCBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgYXNzZXJ0Lm9rKCFyZXBsaWNhdGlvblRlc3RlcjEuaGFzRG9jUmVwbGljYXRpb25FdmVudCwgXCJyZXBsaWNhdGlvblRlc3RlcjEgZmFpbGVkXCIpO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgcmVwbGljYXRpb25UZXN0ZXIwLnN0b3AoKTtcbiAgICAgICAgICAgICAgICBhd2FpdCByZXBsaWNhdGlvblRlc3RlcjEuc3RvcCgpO1xuXG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIERhdGFzdG9yZVRlc3Rlci50ZXN0KGFzeW5jICgpID0+IGZpcmViYXNlRGF0YXN0b3JlLCBmYWxzZSk7XG5cbiAgICB9KTtcblxufSk7XG4iXX0=