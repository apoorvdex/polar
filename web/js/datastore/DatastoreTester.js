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
const chai_1 = require("chai");
const Assertions_1 = require("../test/Assertions");
const DocMetas_1 = require("../metadata/DocMetas");
const DefaultPersistenceLayer_1 = require("./DefaultPersistenceLayer");
const Preconditions_1 = require("../Preconditions");
const os_1 = __importDefault(require("os"));
const Files_1 = require("../util/Files");
const FilePaths_1 = require("../util/FilePaths");
const Dictionaries_1 = require("../util/Dictionaries");
const Directories_1 = require("./Directories");
const MockPHZWriter_1 = require("../phz/MockPHZWriter");
const Backend_1 = require("./Backend");
const DatastoreMutation_1 = require("./DatastoreMutation");
const Latch_1 = require("../util/Latch");
const Datastores_1 = require("./Datastores");
const DiskDatastore_1 = require("./DiskDatastore");
const TestingTime_1 = require("../test/TestingTime");
const rimraf = require('rimraf');
const tmpdir = os_1.default.tmpdir();
class DatastoreTester {
    static test(datastoreFactory, hasLocalFiles = true) {
        describe('DatastoreTester tests', function () {
            const fingerprint = "0x001";
            const dataDir = FilePaths_1.FilePaths.join(tmpdir, 'test-data-dir');
            let datastore;
            let persistenceLayer;
            let docMeta;
            let directories;
            beforeEach(function () {
                return __awaiter(this, void 0, void 0, function* () {
                    console.log("===== before test ====");
                    yield Files_1.Files.removeDirectoryRecursivelyAsync(dataDir);
                    Directories_1.GlobalDataDir.set(dataDir);
                    datastore = yield datastoreFactory();
                    directories = new Directories_1.Directories();
                    persistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(datastore);
                    yield persistenceLayer.init();
                    yield Datastores_1.Datastores.purge(datastore);
                    docMeta = DocMetas_1.MockDocMetas.createWithinInitialPagemarks(fingerprint, 14);
                    docMeta.docInfo.filename = `${fingerprint}.phz`;
                    yield persistenceLayer.delete({ fingerprint, docInfo: docMeta.docInfo });
                    const contains = yield persistenceLayer.contains(fingerprint);
                    chai_1.assert.equal(contains, false, "Document already exists in persistence layer: " + fingerprint);
                    yield MockPHZWriter_1.MockPHZWriter.write(FilePaths_1.FilePaths.create(directories.stashDir, `${fingerprint}.phz`));
                    const datastoreMutation = new DatastoreMutation_1.DefaultDatastoreMutation();
                    yield persistenceLayer.write(fingerprint, docMeta, datastoreMutation);
                    yield datastoreMutation.written.get();
                    yield datastoreMutation.committed.get();
                });
            });
            afterEach(function () {
                return __awaiter(this, void 0, void 0, function* () {
                    console.log("===== after test ====");
                    yield Datastores_1.Datastores.purge(persistenceLayer.datastore, purgeEvent => console.log("Purged: ", purgeEvent));
                    yield persistenceLayer.stop();
                });
            });
            it("write and read data to disk", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const docMeta0 = yield persistenceLayer.getDocMeta(fingerprint);
                    chai_1.assert.ok(docMeta0.docInfo.lastUpdated !== undefined);
                    delete docMeta0.docInfo.lastUpdated;
                    delete docMeta0.docInfo.nrComments;
                    delete docMeta0.docInfo.nrFlashcards;
                    delete docMeta0.docInfo.nrAreaHighlights;
                    delete docMeta0.docInfo.nrTextHighlights;
                    delete docMeta0.docInfo.nrNotes;
                    delete docMeta0.docInfo.nrAnnotations;
                    delete docMeta0.docInfo.uuid;
                    docMeta.docInfo.uuid = '__canonicalized__';
                    docMeta0.docInfo.uuid = '__canonicalized__';
                    chai_1.assert.equal(Preconditions_1.isPresent(docMeta0), true, "docMeta0 is not present");
                    Assertions_1.assertJSON(Dictionaries_1.Dictionaries.sorted(docMeta), Dictionaries_1.Dictionaries.sorted(docMeta0));
                });
            });
            it("read non-existant fingerprint", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const nonExistantDocMeta = yield persistenceLayer.getDocMeta('0x666');
                    chai_1.assert.ok(nonExistantDocMeta === undefined);
                });
            });
            it("Delete DocMeta and the associated stash file...", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const docMetaFileRef = {
                        fingerprint,
                        docFile: {
                            name: `${fingerprint}.phz`
                        },
                        docInfo: docMeta.docInfo
                    };
                    const docPath = FilePaths_1.FilePaths.join(directories.stashDir, `${fingerprint}.phz`);
                    const statePath = FilePaths_1.FilePaths.join(directories.dataDir, fingerprint, 'state.json');
                    if (hasLocalFiles) {
                        chai_1.assert.ok(yield Files_1.Files.existsAsync(docPath));
                        chai_1.assert.ok(yield Files_1.Files.existsAsync(statePath));
                    }
                    yield persistenceLayer.delete(docMetaFileRef);
                    if (hasLocalFiles) {
                        chai_1.assert.ok(!(yield Files_1.Files.existsAsync(docPath)));
                        chai_1.assert.ok(!(yield Files_1.Files.existsAsync(statePath)));
                    }
                    yield persistenceLayer.delete(docMetaFileRef);
                    yield persistenceLayer.delete(docMetaFileRef);
                    yield persistenceLayer.delete(docMetaFileRef);
                });
            });
            it("adding binary files", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const data = 'fake image data';
                    const fileRef = { name: 'test.jpg' };
                    yield datastore.deleteFile(Backend_1.Backend.IMAGE, fileRef);
                    yield datastore.deleteFile(Backend_1.Backend.IMAGE, fileRef);
                    chai_1.assert.ok(!(yield datastore.containsFile(Backend_1.Backend.IMAGE, fileRef)), "Datastore already contains file!");
                    const meta = {
                        "foo": "bar"
                    };
                    yield datastore.writeFile(Backend_1.Backend.IMAGE, fileRef, data, meta);
                    yield datastore.writeFile(Backend_1.Backend.IMAGE, fileRef, data, meta);
                    chai_1.assert.ok(yield datastore.containsFile(Backend_1.Backend.IMAGE, fileRef));
                    const datastoreFile = yield datastore.getFile(Backend_1.Backend.IMAGE, fileRef);
                    chai_1.assert.ok(datastoreFile, "no result");
                    chai_1.assert.ok(datastoreFile.isPresent(), "not present");
                    chai_1.assert.ok(datastoreFile.get(), "no value");
                    chai_1.assert.equal(datastoreFile.get().meta['foo'], 'bar');
                    yield datastore.deleteFile(Backend_1.Backend.IMAGE, fileRef);
                    yield datastore.deleteFile(Backend_1.Backend.IMAGE, fileRef);
                });
            });
            it("getDocMetaFiles", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const docMetaFiles = yield datastore.getDocMetaRefs();
                    chai_1.assert.equal(docMetaFiles.length > 0, true);
                    chai_1.assert.equal(docMetaFiles.map((current) => current.fingerprint).includes(fingerprint), true);
                });
            });
            it("snapshot and make sure we receive a terminated batch at committed consistency.", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const writtenSnapshotReceived = new Latch_1.Latch();
                    const committedSnapshotReceived = new Latch_1.Latch();
                    const snapshotResult = yield datastore.snapshot((docMetaSnapshotEvent) => __awaiter(this, void 0, void 0, function* () {
                        if (docMetaSnapshotEvent.batch) {
                            if (docMetaSnapshotEvent.batch.terminated) {
                                if (docMetaSnapshotEvent.consistency === 'committed') {
                                    committedSnapshotReceived.resolve(true);
                                    writtenSnapshotReceived.resolve(true);
                                }
                                if (docMetaSnapshotEvent.consistency === 'written') {
                                    writtenSnapshotReceived.resolve(true);
                                }
                            }
                        }
                    }));
                    yield writtenSnapshotReceived.get();
                    yield committedSnapshotReceived.get();
                    if (snapshotResult.unsubscribe) {
                        snapshotResult.unsubscribe();
                    }
                });
            });
            it("createBackup", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    if (!(datastore instanceof DiskDatastore_1.DiskDatastore)) {
                        console.log("Skipping (not DiskDatastore)");
                        return;
                    }
                    try {
                        TestingTime_1.TestingTime.freeze();
                        const now = new Date();
                        console.log("Creating backup at: " + now.toUTCString());
                        const backupDir = FilePaths_1.FilePaths.join(dataDir, ".backup-2012-03-02");
                        yield datastore.createBackup();
                        console.log("Testing for backup dir: " + backupDir);
                        chai_1.assert.ok(yield Files_1.Files.existsAsync(backupDir));
                        chai_1.assert.ok(!(yield Files_1.Files.existsAsync(FilePaths_1.FilePaths.join(backupDir, ".backup-2012-03-02"))));
                        const statePath = FilePaths_1.FilePaths.join(backupDir, '0x001', 'state.json');
                        chai_1.assert.ok(yield Files_1.Files.existsAsync(statePath));
                    }
                    finally {
                        TestingTime_1.TestingTime.unfreeze();
                    }
                });
            });
        });
    }
}
exports.DatastoreTester = DatastoreTester;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YXN0b3JlVGVzdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRGF0YXN0b3JlVGVzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBNEI7QUFDNUIsbURBQThDO0FBQzlDLG1EQUFrRDtBQUNsRCx1RUFBa0U7QUFFbEUsb0RBQTJDO0FBRTNDLDRDQUFvQjtBQUNwQix5Q0FBb0M7QUFDcEMsaURBQTRDO0FBQzVDLHVEQUFrRDtBQUNsRCwrQ0FBeUQ7QUFDekQsd0RBQW1EO0FBRW5ELHVDQUFrQztBQUdsQywyREFBNkQ7QUFFN0QseUNBQW9DO0FBQ3BDLDZDQUF3QztBQUV4QyxtREFBOEM7QUFDOUMscURBQWdEO0FBRWhELE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUVqQyxNQUFNLE1BQU0sR0FBRyxZQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFM0IsTUFBYSxlQUFlO0lBRWpCLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQTBDLEVBQUUsZ0JBQXlCLElBQUk7UUFFeEYsUUFBUSxDQUFDLHVCQUF1QixFQUFFO1lBRTlCLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQztZQUU1QixNQUFNLE9BQU8sR0FBRyxxQkFBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLENBQUM7WUFFeEQsSUFBSSxTQUFvQixDQUFDO1lBQ3pCLElBQUksZ0JBQXlDLENBQUM7WUFFOUMsSUFBSSxPQUFnQixDQUFDO1lBRXJCLElBQUksV0FBd0IsQ0FBQztZQUU3QixVQUFVLENBQUM7O29CQUVQLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztvQkFHdEMsTUFBTSxhQUFLLENBQUMsK0JBQStCLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBRXJELDJCQUFhLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUMzQixTQUFTLEdBQUcsTUFBTSxnQkFBZ0Is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QUM1QyxPQUFPO3FCQUNWO29CQUVELElBQUk7d0JBRUEseUJBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzt3QkFFckIsTUFBTSxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQzt3QkFHdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsR0FBRyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQzt3QkFFeEQsTUFBTSxTQUFTLEdBQUcscUJBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLG9CQUFvQixDQUFDLENBQUM7d0JBRWhFLE1BQU0sU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO3dCQUUvQixPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixHQUFHLFNBQVMsQ0FBQyxDQUFDO3dCQUVwRCxhQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sYUFBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUU5QyxhQUFNLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBQSxNQUFNLGFBQUssQ0FBQyxXQUFXLENBQUMscUJBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLG9CQUFvQixDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUM7d0JBRXRGLE1BQU0sU0FBUyxHQUFHLHFCQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7d0JBQ25FLGFBQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxhQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7cUJBRWpEOzRCQUFTO3dCQUVOLHlCQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7cUJBRTFCO2dCQUdMLENBQUM7YUFBQSxDQUFDLENBQUM7UUFFUCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7Q0FFSjtBQXpRRCwwQ0F5UUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQge2Fzc2VydEpTT059IGZyb20gJy4uL3Rlc3QvQXNzZXJ0aW9ucyc7XG5pbXBvcnQge01vY2tEb2NNZXRhc30gZnJvbSAnLi4vbWV0YWRhdGEvRG9jTWV0YXMnO1xuaW1wb3J0IHtEZWZhdWx0UGVyc2lzdGVuY2VMYXllcn0gZnJvbSAnLi9EZWZhdWx0UGVyc2lzdGVuY2VMYXllcic7XG5pbXBvcnQge0RvY01ldGF9IGZyb20gJy4uL21ldGFkYXRhL0RvY01ldGEnO1xuaW1wb3J0IHtpc1ByZXNlbnR9IGZyb20gJy4uL1ByZWNvbmRpdGlvbnMnO1xuXG5pbXBvcnQgb3MgZnJvbSAnb3MnO1xuaW1wb3J0IHtGaWxlc30gZnJvbSAnLi4vdXRpbC9GaWxlcyc7XG5pbXBvcnQge0ZpbGVQYXRoc30gZnJvbSAnLi4vdXRpbC9GaWxlUGF0aHMnO1xuaW1wb3J0IHtEaWN0aW9uYXJpZXN9IGZyb20gJy4uL3V0aWwvRGljdGlvbmFyaWVzJztcbmltcG9ydCB7RGlyZWN0b3JpZXMsIEdsb2JhbERhdGFEaXJ9IGZyb20gJy4vRGlyZWN0b3JpZXMnO1xuaW1wb3J0IHtNb2NrUEhaV3JpdGVyfSBmcm9tICcuLi9waHovTW9ja1BIWldyaXRlcic7XG5pbXBvcnQge0RvY01ldGFGaWxlUmVmfSBmcm9tICcuL0RvY01ldGFSZWYnO1xuaW1wb3J0IHtCYWNrZW5kfSBmcm9tICcuL0JhY2tlbmQnO1xuaW1wb3J0IHtEYXRhc3RvcmV9IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7RG9jSW5mb30gZnJvbSAnLi4vbWV0YWRhdGEvRG9jSW5mbyc7XG5pbXBvcnQge0RlZmF1bHREYXRhc3RvcmVNdXRhdGlvbn0gZnJvbSAnLi9EYXRhc3RvcmVNdXRhdGlvbic7XG5pbXBvcnQge2Z1bmN9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtMYXRjaH0gZnJvbSAnLi4vdXRpbC9MYXRjaCc7XG5pbXBvcnQge0RhdGFzdG9yZXN9IGZyb20gJy4vRGF0YXN0b3Jlcyc7XG5pbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJzfSBmcm9tICcuL1BlcnNpc3RlbmNlTGF5ZXJzJztcbmltcG9ydCB7RGlza0RhdGFzdG9yZX0gZnJvbSAnLi9EaXNrRGF0YXN0b3JlJztcbmltcG9ydCB7VGVzdGluZ1RpbWV9IGZyb20gJy4uL3Rlc3QvVGVzdGluZ1RpbWUnO1xuXG5jb25zdCByaW1yYWYgPSByZXF1aXJlKCdyaW1yYWYnKTtcblxuY29uc3QgdG1wZGlyID0gb3MudG1wZGlyKCk7XG5cbmV4cG9ydCBjbGFzcyBEYXRhc3RvcmVUZXN0ZXIge1xuXG4gICAgcHVibGljIHN0YXRpYyB0ZXN0KGRhdGFzdG9yZUZhY3Rvcnk6ICgpID0+IFByb21pc2U8RGF0YXN0b3JlPiwgaGFzTG9jYWxGaWxlczogYm9vbGVhbiA9IHRydWUpIHtcblxuICAgICAgICBkZXNjcmliZSgnRGF0YXN0b3JlVGVzdGVyIHRlc3RzJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGZpbmdlcnByaW50ID0gXCIweDAwMVwiO1xuXG4gICAgICAgICAgICBjb25zdCBkYXRhRGlyID0gRmlsZVBhdGhzLmpvaW4odG1wZGlyLCAndGVzdC1kYXRhLWRpcicpO1xuXG4gICAgICAgICAgICBsZXQgZGF0YXN0b3JlOiBEYXRhc3RvcmU7XG4gICAgICAgICAgICBsZXQgcGVyc2lzdGVuY2VMYXllcjogRGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXI7XG5cbiAgICAgICAgICAgIGxldCBkb2NNZXRhOiBEb2NNZXRhO1xuXG4gICAgICAgICAgICBsZXQgZGlyZWN0b3JpZXM6IERpcmVjdG9yaWVzO1xuXG4gICAgICAgICAgICBiZWZvcmVFYWNoKGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCI9PT09PSBiZWZvcmUgdGVzdCA9PT09XCIpO1xuXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogbWlnaHQgd2FudCB0byBydW5cbiAgICAgICAgICAgICAgICBhd2FpdCBGaWxlcy5yZW1vdmVEaXJlY3RvcnlSZWN1cnNpdmVseUFzeW5jKGRhdGFEaXIpO1xuXG4gICAgICAgICAgICAgICAgR2xvYmFsRGF0YURpci5zZXQoZGF0YURpcik7XG4gICAgICAgICAgICAgICAgZGF0YXN0b3JlID0gYXdhaXQgZGF0YXN0b3JlRmFjdG9yeSgpO1xuICAgICAgICAgICAgICAgIGRpcmVjdG9yaWVzID0gbmV3IERpcmVjdG9yaWVzKCk7XG5cbiAgICAgICAgICAgICAgICBwZXJzaXN0ZW5jZUxheWVyID0gbmV3IERlZmF1bHRQZXJzaXN0ZW5jZUxheWVyKGRhdGFzdG9yZSk7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBwZXJzaXN0ZW5jZUxheWVyLmluaXQoKTtcbiAgICAgICAgICAgICAgICBhd2FpdCBEYXRhc3RvcmVzLnB1cmdlKGRhdGFzdG9yZSk7XG5cbiAgICAgICAgICAgICAgICBkb2NNZXRhID0gTW9ja0RvY01ldGFzLmNyZWF0ZVdpdGhpbkluaXRpYWxQYWdlbWFya3MoZmluZ2VycHJpbnQsIDE0KTtcblxuICAgICAgICAgICAgICAgIGRvY01ldGEuZG9jSW5mby5maWxlbmFtZSA9IGAke2ZpbmdlcnByaW50fS5waHpgO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgcGVyc2lzdGVuY2VMYXllci5kZWxldGUoe2ZpbmdlcnByaW50LCBkb2NJbmZvOiBkb2NNZXRhLmRvY0luZm99KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5zID0gYXdhaXQgcGVyc2lzdGVuY2VMYXllci5jb250YWlucyhmaW5nZXJwcmludCk7XG5cbiAgICAgICAgICAgICAgICBhc3NlcnQuZXF1YWwoY29udGFpbnMsIGZhbHNlLCBcIkRvY3VtZW50IGFscmVhZHkgZXhpc3RzIGluIHBlcnNpc3RlbmNlIGxheWVyOiBcIiArIGZpbmdlcnByaW50KTtcblxuICAgICAgICAgICAgICAgIGF3YWl0IE1vY2tQSFpXcml0ZXIud3JpdGUoRmlsZVBhdGhzLmNyZWF0ZShkaXJlY3Rvcmllcy5zdGFzaERpciwgYCR7ZmluZ2VycHJpbnR9LnBoemApKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFzdG9yZU11dGF0aW9uID0gbmV3IERlZmF1bHREYXRhc3RvcmVNdXRhdGlvbjxEb2NJbmZvPigpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXIud3JpdGUoZmluZ2VycHJpbnQsIGRvY01ldGEsIGRhdGFzdG9yZU11dGF0aW9uKTtcblxuICAgICAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSdyZSBhbHdheXMgdXNpbmcgdGhlIGRhdGFzdG9yZSBtdXRhdGlvbnNcbiAgICAgICAgICAgICAgICBhd2FpdCBkYXRhc3RvcmVNdXRhdGlvbi53cml0dGVuLmdldCgpO1xuICAgICAgICAgICAgICAgIGF3YWl0IGRhdGFzdG9yZU11dGF0aW9uLmNvbW1pdHRlZC5nZXQoKTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGFmdGVyRWFjaChhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIj09PT09IGFmdGVyIHRlc3QgPT09PVwiKTtcblxuICAgICAgICAgICAgICAgIGF3YWl0IERhdGFzdG9yZXMucHVyZ2UocGVyc2lzdGVuY2VMYXllci5kYXRhc3RvcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdXJnZUV2ZW50ID0+IGNvbnNvbGUubG9nKFwiUHVyZ2VkOiBcIiwgcHVyZ2VFdmVudCkpO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgcGVyc2lzdGVuY2VMYXllci5zdG9wKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaXQoXCJ3cml0ZSBhbmQgcmVhZCBkYXRhIHRvIGRpc2tcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBsZXQgY29udGFpbnMgPSBhd2FpdCBwZXJzaXN0ZW5jZUxheWVyLmNvbnRhaW5zKGZpbmdlcnByaW50KTtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIGFzc2VydC5vayghIGNvbnRhaW5zKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRvY01ldGEwID0gYXdhaXQgcGVyc2lzdGVuY2VMYXllci5nZXREb2NNZXRhKGZpbmdlcnByaW50KTtcblxuICAgICAgICAgICAgICAgIGFzc2VydC5vayhkb2NNZXRhMCEuZG9jSW5mby5sYXN0VXBkYXRlZCAhPT0gdW5kZWZpbmVkKTtcblxuICAgICAgICAgICAgICAgIGRlbGV0ZSBkb2NNZXRhMCEuZG9jSW5mby5sYXN0VXBkYXRlZDtcbiAgICAgICAgICAgICAgICBkZWxldGUgZG9jTWV0YTAhLmRvY0luZm8ubnJDb21tZW50cztcbiAgICAgICAgICAgICAgICBkZWxldGUgZG9jTWV0YTAhLmRvY0luZm8ubnJGbGFzaGNhcmRzO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBkb2NNZXRhMCEuZG9jSW5mby5uckFyZWFIaWdobGlnaHRzO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBkb2NNZXRhMCEuZG9jSW5mby5uclRleHRIaWdobGlnaHRzO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBkb2NNZXRhMCEuZG9jSW5mby5uck5vdGVzO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBkb2NNZXRhMCEuZG9jSW5mby5uckFubm90YXRpb25zO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBkb2NNZXRhMCEuZG9jSW5mby51dWlkO1xuXG4gICAgICAgICAgICAgICAgZG9jTWV0YSEuZG9jSW5mby51dWlkID0gJ19fY2Fub25pY2FsaXplZF9fJztcbiAgICAgICAgICAgICAgICBkb2NNZXRhMCEuZG9jSW5mby51dWlkID0gJ19fY2Fub25pY2FsaXplZF9fJztcblxuICAgICAgICAgICAgICAgIGFzc2VydC5lcXVhbChpc1ByZXNlbnQoZG9jTWV0YTApLCB0cnVlLCBcImRvY01ldGEwIGlzIG5vdCBwcmVzZW50XCIpO1xuXG4gICAgICAgICAgICAgICAgYXNzZXJ0SlNPTihEaWN0aW9uYXJpZXMuc29ydGVkKGRvY01ldGEpLCBEaWN0aW9uYXJpZXMuc29ydGVkKGRvY01ldGEwKSk7XG5cbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIGl0KFwicmVhZCBub24tZXhpc3RhbnQgZmluZ2VycHJpbnRcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBub25FeGlzdGFudERvY01ldGEgPSBhd2FpdCBwZXJzaXN0ZW5jZUxheWVyLmdldERvY01ldGEoJzB4NjY2Jyk7XG5cbiAgICAgICAgICAgICAgICBhc3NlcnQub2sobm9uRXhpc3RhbnREb2NNZXRhID09PSB1bmRlZmluZWQpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaXQoXCJEZWxldGUgRG9jTWV0YSBhbmQgdGhlIGFzc29jaWF0ZWQgc3Rhc2ggZmlsZS4uLlwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRvY01ldGFGaWxlUmVmOiBEb2NNZXRhRmlsZVJlZiA9IHtcbiAgICAgICAgICAgICAgICAgICAgZmluZ2VycHJpbnQsXG4gICAgICAgICAgICAgICAgICAgIGRvY0ZpbGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGAke2ZpbmdlcnByaW50fS5waHpgXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRvY0luZm86IGRvY01ldGEuZG9jSW5mb1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhlIGZpbGVzIGV4aXN0IG9uIGRpc2suLi5cblxuICAgICAgICAgICAgICAgIGNvbnN0IGRvY1BhdGggPSBGaWxlUGF0aHMuam9pbihkaXJlY3Rvcmllcy5zdGFzaERpciwgYCR7ZmluZ2VycHJpbnR9LnBoemApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlUGF0aCA9IEZpbGVQYXRocy5qb2luKGRpcmVjdG9yaWVzLmRhdGFEaXIsIGZpbmdlcnByaW50LCAnc3RhdGUuanNvbicpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGhhc0xvY2FsRmlsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXJ0Lm9rKGF3YWl0IEZpbGVzLmV4aXN0c0FzeW5jKGRvY1BhdGgpKTtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXJ0Lm9rKGF3YWl0IEZpbGVzLmV4aXN0c0FzeW5jKHN0YXRlUGF0aCkpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYXdhaXQgcGVyc2lzdGVuY2VMYXllci5kZWxldGUoZG9jTWV0YUZpbGVSZWYpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGhhc0xvY2FsRmlsZXMpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhlIGZpbGVzIHdlcmUgZGVsZXRlZFxuXG4gICAgICAgICAgICAgICAgICAgIGFzc2VydC5vayghIGF3YWl0IEZpbGVzLmV4aXN0c0FzeW5jKGRvY1BhdGgpKTtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXJ0Lm9rKCEgYXdhaXQgRmlsZXMuZXhpc3RzQXN5bmMoc3RhdGVQYXRoKSk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBwZXJmb3JtIHRoZSBkZWxldGUgbXVsdGlwbGUgdGltZXMgbm93IHRvIG1ha2Ugc3VyZSB3ZSdyZVxuICAgICAgICAgICAgICAgIC8vIGlkZW1wb3RlbnQgZm9yIGRlbGV0ZXNcbiAgICAgICAgICAgICAgICBhd2FpdCBwZXJzaXN0ZW5jZUxheWVyLmRlbGV0ZShkb2NNZXRhRmlsZVJlZik7XG4gICAgICAgICAgICAgICAgYXdhaXQgcGVyc2lzdGVuY2VMYXllci5kZWxldGUoZG9jTWV0YUZpbGVSZWYpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXIuZGVsZXRlKGRvY01ldGFGaWxlUmVmKTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGl0KFwiYWRkaW5nIGJpbmFyeSBmaWxlc1wiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSAnZmFrZSBpbWFnZSBkYXRhJztcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlUmVmID0ge25hbWU6ICd0ZXN0LmpwZyd9O1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgZGF0YXN0b3JlLmRlbGV0ZUZpbGUoQmFja2VuZC5JTUFHRSwgZmlsZVJlZik7XG4gICAgICAgICAgICAgICAgYXdhaXQgZGF0YXN0b3JlLmRlbGV0ZUZpbGUoQmFja2VuZC5JTUFHRSwgZmlsZVJlZik7XG5cbiAgICAgICAgICAgICAgICBhc3NlcnQub2soISBhd2FpdCBkYXRhc3RvcmUuY29udGFpbnNGaWxlKEJhY2tlbmQuSU1BR0UsIGZpbGVSZWYpLCBcIkRhdGFzdG9yZSBhbHJlYWR5IGNvbnRhaW5zIGZpbGUhXCIpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbWV0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgXCJmb29cIjogXCJiYXJcIlxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBkYXRhc3RvcmUud3JpdGVGaWxlKEJhY2tlbmQuSU1BR0UsIGZpbGVSZWYsIGRhdGEsIG1ldGEpO1xuICAgICAgICAgICAgICAgIGF3YWl0IGRhdGFzdG9yZS53cml0ZUZpbGUoQmFja2VuZC5JTUFHRSwgZmlsZVJlZiwgZGF0YSwgbWV0YSk7XG5cbiAgICAgICAgICAgICAgICBhc3NlcnQub2soYXdhaXQgZGF0YXN0b3JlLmNvbnRhaW5zRmlsZShCYWNrZW5kLklNQUdFLCBmaWxlUmVmKSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhc3RvcmVGaWxlID0gYXdhaXQgZGF0YXN0b3JlLmdldEZpbGUoQmFja2VuZC5JTUFHRSwgZmlsZVJlZik7XG4gICAgICAgICAgICAgICAgYXNzZXJ0Lm9rKGRhdGFzdG9yZUZpbGUsIFwibm8gcmVzdWx0XCIpO1xuICAgICAgICAgICAgICAgIGFzc2VydC5vayhkYXRhc3RvcmVGaWxlLmlzUHJlc2VudCgpLCBcIm5vdCBwcmVzZW50XCIpO1xuICAgICAgICAgICAgICAgIGFzc2VydC5vayhkYXRhc3RvcmVGaWxlLmdldCgpLCBcIm5vIHZhbHVlXCIpO1xuXG4gICAgICAgICAgICAgICAgLy8gbm9pbnNwZWN0aW9uIFRzTGludFxuICAgICAgICAgICAgICAgIGFzc2VydC5lcXVhbChkYXRhc3RvcmVGaWxlLmdldCgpLm1ldGFbJ2ZvbyddLCAnYmFyJyk7XG5cbiAgICAgICAgICAgICAgICAvLyBhc3NlcnRKU09OKGRhdGFzdG9yZUZpbGUuZ2V0KCkubWV0YSwgbWV0YSwgXCJtZXRhIHZhbHVlc1xuICAgICAgICAgICAgICAgIC8vIGRpZmZlclwiKTtcblxuICAgICAgICAgICAgICAgIGF3YWl0IGRhdGFzdG9yZS5kZWxldGVGaWxlKEJhY2tlbmQuSU1BR0UsIGZpbGVSZWYpO1xuICAgICAgICAgICAgICAgIGF3YWl0IGRhdGFzdG9yZS5kZWxldGVGaWxlKEJhY2tlbmQuSU1BR0UsIGZpbGVSZWYpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaXQoXCJnZXREb2NNZXRhRmlsZXNcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkb2NNZXRhRmlsZXMgPSBhd2FpdCBkYXRhc3RvcmUuZ2V0RG9jTWV0YVJlZnMoKTtcblxuICAgICAgICAgICAgICAgIGFzc2VydC5lcXVhbChkb2NNZXRhRmlsZXMubGVuZ3RoID4gMCwgdHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICBhc3NlcnQuZXF1YWwoZG9jTWV0YUZpbGVzLm1hcCgoY3VycmVudCkgPT4gY3VycmVudC5maW5nZXJwcmludCkuaW5jbHVkZXMoZmluZ2VycHJpbnQpLCB0cnVlKTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGl0KFwic25hcHNob3QgYW5kIG1ha2Ugc3VyZSB3ZSByZWNlaXZlIGEgdGVybWluYXRlZCBiYXRjaCBhdCBjb21taXR0ZWQgY29uc2lzdGVuY3kuXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgd3JpdHRlblNuYXBzaG90UmVjZWl2ZWQgPSBuZXcgTGF0Y2g8Ym9vbGVhbj4oKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21taXR0ZWRTbmFwc2hvdFJlY2VpdmVkID0gbmV3IExhdGNoPGJvb2xlYW4+KCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzbmFwc2hvdFJlc3VsdCA9IGF3YWl0IGRhdGFzdG9yZS5zbmFwc2hvdChhc3luYyBkb2NNZXRhU25hcHNob3RFdmVudCA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY01ldGFTbmFwc2hvdEV2ZW50LmJhdGNoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2NNZXRhU25hcHNob3RFdmVudC5iYXRjaC50ZXJtaW5hdGVkKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGRvY01ldGFTbmFwc2hvdEV2ZW50LmNvbnNpc3RlbmN5ID09PSAnY29tbWl0dGVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21taXR0ZWRTbmFwc2hvdFJlY2VpdmVkLnJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHdlIGhhdmUgcmVjZWl2ZWQgdGhlIGNvbW1pdHRlZCB3ZSBhbHNvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlY2VpdmVkIHRoZSB3cml0dGVuLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cml0dGVuU25hcHNob3RSZWNlaXZlZC5yZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZG9jTWV0YVNuYXBzaG90RXZlbnQuY29uc2lzdGVuY3kgPT09ICd3cml0dGVuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cml0dGVuU25hcHNob3RSZWNlaXZlZC5yZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGF3YWl0IHdyaXR0ZW5TbmFwc2hvdFJlY2VpdmVkLmdldCgpO1xuICAgICAgICAgICAgICAgIGF3YWl0IGNvbW1pdHRlZFNuYXBzaG90UmVjZWl2ZWQuZ2V0KCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc25hcHNob3RSZXN1bHQudW5zdWJzY3JpYmUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdW5zdWJzY3JpYmUgdG8gdGhlIHNuYXBzaG90IGlmIG5lY2Vzc2FyeVxuICAgICAgICAgICAgICAgICAgICBzbmFwc2hvdFJlc3VsdC51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgaXQoXCJjcmVhdGVCYWNrdXBcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoISAoZGF0YXN0b3JlIGluc3RhbmNlb2YgRGlza0RhdGFzdG9yZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTa2lwcGluZyAobm90IERpc2tEYXRhc3RvcmUpXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgICAgICAgICBUZXN0aW5nVGltZS5mcmVlemUoKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEZyaSwgMDIgTWFyIDIwMTIgMTE6Mzg6NDkgR01UXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ3JlYXRpbmcgYmFja3VwIGF0OiBcIiArIG5vdy50b1VUQ1N0cmluZygpKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBiYWNrdXBEaXIgPSBGaWxlUGF0aHMuam9pbihkYXRhRGlyLCBcIi5iYWNrdXAtMjAxMi0wMy0wMlwiKTtcblxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBkYXRhc3RvcmUuY3JlYXRlQmFja3VwKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUZXN0aW5nIGZvciBiYWNrdXAgZGlyOiBcIiArIGJhY2t1cERpcik7XG5cbiAgICAgICAgICAgICAgICAgICAgYXNzZXJ0Lm9rKGF3YWl0IEZpbGVzLmV4aXN0c0FzeW5jKGJhY2t1cERpcikpO1xuXG4gICAgICAgICAgICAgICAgICAgIGFzc2VydC5vayghIGF3YWl0IEZpbGVzLmV4aXN0c0FzeW5jKEZpbGVQYXRocy5qb2luKGJhY2t1cERpciwgXCIuYmFja3VwLTIwMTItMDMtMDJcIikpKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZVBhdGggPSBGaWxlUGF0aHMuam9pbihiYWNrdXBEaXIsICcweDAwMScsICdzdGF0ZS5qc29uJyk7XG4gICAgICAgICAgICAgICAgICAgIGFzc2VydC5vayhhd2FpdCBGaWxlcy5leGlzdHNBc3luYyhzdGF0ZVBhdGgpKTtcblxuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG5cbiAgICAgICAgICAgICAgICAgICAgVGVzdGluZ1RpbWUudW5mcmVlemUoKTtcblxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgIH1cblxufVxuIl19