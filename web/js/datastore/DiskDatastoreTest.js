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
const DiskDatastore_1 = require("./DiskDatastore");
const os_1 = __importDefault(require("os"));
const fs_1 = __importDefault(require("fs"));
const Files_1 = require("../util/Files");
const FilePaths_1 = require("../util/FilePaths");
const Directories_1 = require("./Directories");
const Platforms_1 = require("../util/Platforms");
const DatastoreTester_1 = require("./DatastoreTester");
const Backend_1 = require("./Backend");
const DefaultPersistenceLayer_1 = require("./DefaultPersistenceLayer");
const DocMetas_1 = require("../metadata/DocMetas");
const MockPHZWriter_1 = require("../phz/MockPHZWriter");
const tmpdir = os_1.default.tmpdir();
describe("DiskDatastore", function () {
    return __awaiter(this, void 0, void 0, function* () {
        DatastoreTester_1.DatastoreTester.test(() => __awaiter(this, void 0, void 0, function* () { return new DiskDatastore_1.DiskDatastore(); }));
        it("getDataDir", function () {
            chai_1.assert.notEqual(Directories_1.Directories.getDataDir(), null);
        });
        it("getDataDirsForPlatform MAC_OS", function () {
            if (Platforms_1.Platforms.get() !== Platforms_1.Platform.MACOS) {
                return;
            }
            const userHome = '/Users/alice';
            const platform = Platforms_1.Platform.MACOS;
            Assertions_1.assertJSON(DiskDatastore_1.DiskDatastore.getDataDirsForPlatform({ userHome, platform }), {
                "paths": [
                    "/Users/alice/.polar",
                    "/Users/alice/Library/Application Support/Polar"
                ],
                "preferredPath": "/Users/alice/Library/Application Support/Polar"
            });
        });
        it("init dataDir directory on init()", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const dataDir = FilePaths_1.FilePaths.join(tmpdir, 'disk-datastore.test');
                yield Files_1.Files.removeDirectoryRecursivelyAsync(dataDir);
                Directories_1.GlobalDataDir.set(dataDir);
                const diskDatastore = new DiskDatastore_1.DiskDatastore();
                chai_1.assert.equal(yield Files_1.Files.existsAsync(dataDir), false);
                let expected = {
                    "dataDirConfig": {
                        "path": FilePaths_1.FilePaths.join(tmpdir, "disk-datastore.test"),
                        "strategy": "manual"
                    },
                    "dataDir": FilePaths_1.FilePaths.join(tmpdir, "disk-datastore.test"),
                    "stashDir": FilePaths_1.FilePaths.join(tmpdir, "disk-datastore.test", "stash"),
                    "filesDir": FilePaths_1.FilePaths.join(tmpdir, "disk-datastore.test", "files"),
                    "logsDir": FilePaths_1.FilePaths.join(tmpdir, "disk-datastore.test", "logs"),
                    "configDir": FilePaths_1.FilePaths.join(tmpdir, "disk-datastore.test", "config"),
                    "initialization": {
                        "dataDir": {
                            "dir": FilePaths_1.FilePaths.join(tmpdir, 'disk-datastore.test'),
                            "created": true,
                        },
                        "stashDir": {
                            "dir": FilePaths_1.FilePaths.join(tmpdir, 'disk-datastore.test', 'stash'),
                            "created": true,
                        },
                        "filesDir": {
                            "dir": FilePaths_1.FilePaths.join(tmpdir, 'disk-datastore.test', 'files'),
                            "created": true,
                        },
                        "logsDir": {
                            "dir": FilePaths_1.FilePaths.join(tmpdir, 'disk-datastore.test', 'logs'),
                            "created": true,
                        },
                        "configDir": {
                            "dir": FilePaths_1.FilePaths.join(tmpdir, 'disk-datastore.test', 'config'),
                            "created": true,
                        }
                    },
                };
                Assertions_1.assertJSON(yield diskDatastore.init(), expected);
                expected = {
                    "dataDirConfig": {
                        "path": FilePaths_1.FilePaths.join(tmpdir, "disk-datastore.test"),
                        "strategy": "manual"
                    },
                    "dataDir": FilePaths_1.FilePaths.join(tmpdir, "disk-datastore.test"),
                    "stashDir": FilePaths_1.FilePaths.join(tmpdir, "disk-datastore.test", "stash"),
                    "filesDir": FilePaths_1.FilePaths.join(tmpdir, "disk-datastore.test", "files"),
                    "logsDir": FilePaths_1.FilePaths.join(tmpdir, "disk-datastore.test", "logs"),
                    "configDir": FilePaths_1.FilePaths.join(tmpdir, "disk-datastore.test", "config"),
                    "initialization": {
                        "dataDir": {
                            "dir": FilePaths_1.FilePaths.join(tmpdir, 'disk-datastore.test'),
                            "exists": true,
                        },
                        "stashDir": {
                            "dir": FilePaths_1.FilePaths.join(tmpdir, 'disk-datastore.test', 'stash'),
                            "exists": true,
                        },
                        "filesDir": {
                            "dir": FilePaths_1.FilePaths.join(tmpdir, 'disk-datastore.test', 'files'),
                            "exists": true,
                        },
                        "logsDir": {
                            "dir": FilePaths_1.FilePaths.join(tmpdir, 'disk-datastore.test', 'logs'),
                            "exists": true,
                        },
                        "configDir": {
                            "dir": FilePaths_1.FilePaths.join(tmpdir, 'disk-datastore.test', 'config'),
                            "exists": true,
                        }
                    }
                };
                Assertions_1.assertJSON(yield diskDatastore.init(), expected);
            });
        });
        it("init and test paths", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const dataDir = FilePaths_1.FilePaths.join(tmpdir, 'test-paths');
                yield Files_1.Files.removeDirectoryRecursivelyAsync(dataDir);
                Directories_1.GlobalDataDir.set(dataDir);
                const diskDatastore = new DiskDatastore_1.DiskDatastore();
                yield diskDatastore.init();
                chai_1.assert.equal(diskDatastore.dataDir, FilePaths_1.FilePaths.join(tmpdir, 'test-paths'));
                chai_1.assert.equal(diskDatastore.stashDir, FilePaths_1.FilePaths.join(tmpdir, 'test-paths', 'stash'));
            });
        });
        it("test async exists function", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const dataDir = FilePaths_1.FilePaths.join(tmpdir, 'this-file-does-not-exist');
                yield Files_1.Files.removeDirectoryRecursivelyAsync(dataDir);
                chai_1.assert.equal(fs_1.default.existsSync(dataDir), false);
                chai_1.assert.equal(yield Files_1.Files.existsAsync(dataDir), false);
            });
        });
        it("Add file and remove file from the stash and see if it exists.", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const path = yield Files_1.Files.realpathAsync(FilePaths_1.FilePaths.join(__dirname, "..", "..", "..", "docs", "example.pdf"));
                chai_1.assert.ok(yield Files_1.Files.existsAsync(path), "No file found from: " + process.cwd());
                const dataDir = FilePaths_1.FilePaths.join(tmpdir, 'datastore-stash-backend');
                yield Files_1.Files.removeDirectoryRecursivelyAsync(dataDir);
                Directories_1.GlobalDataDir.set(dataDir);
                const diskDatastore = new DiskDatastore_1.DiskDatastore();
                yield diskDatastore.init();
                yield diskDatastore.writeFile(Backend_1.Backend.STASH, { name: 'example.pdf' }, yield Files_1.Files.readFileAsync(path));
                const pdfPath = FilePaths_1.FilePaths.join(dataDir, "stash", "example.pdf");
                chai_1.assert.ok(yield Files_1.Files.existsAsync(pdfPath), "Could not find file: " + pdfPath);
                chai_1.assert.ok(yield diskDatastore.containsFile(Backend_1.Backend.STASH, { name: 'example.pdf' }));
                yield diskDatastore.deleteFile(Backend_1.Backend.STASH, { name: 'example.pdf' });
                chai_1.assert.isFalse(yield Files_1.Files.existsAsync(pdfPath));
            });
        });
        it("Delete file and make sure state.json and dir are no longer present", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const dataDir = FilePaths_1.FilePaths.join(tmpdir, 'datastore-delete-test');
                Directories_1.GlobalDataDir.set(dataDir);
                const diskDatastore = new DiskDatastore_1.DiskDatastore();
                yield diskDatastore.init();
                const persistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(diskDatastore);
                yield persistenceLayer.init();
                const fingerprint = '0x00datadelete';
                const docMeta = DocMetas_1.MockDocMetas.createWithinInitialPagemarks(fingerprint, 14);
                yield persistenceLayer.write(fingerprint, docMeta);
                const stateFile = FilePaths_1.FilePaths.join(dataDir, fingerprint, 'state.json');
                chai_1.assert.ok(yield Files_1.Files.existsAsync(stateFile));
                const docMetaFileRef = {
                    fingerprint,
                    docFile: {
                        name: `${fingerprint}.phz`
                    },
                    docInfo: docMeta.docInfo
                };
                yield MockPHZWriter_1.MockPHZWriter.write(FilePaths_1.FilePaths.create(diskDatastore.stashDir, `${fingerprint}.phz`));
                yield persistenceLayer.delete(docMetaFileRef);
                chai_1.assert.isFalse(yield persistenceLayer.contains(stateFile));
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlza0RhdGFzdG9yZVRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJEaXNrRGF0YXN0b3JlVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQTRCO0FBQzVCLG1EQUE4QztBQUM5QyxtREFBOEM7QUFFOUMsNENBQW9CO0FBQ3BCLDRDQUFvQjtBQUNwQix5Q0FBb0M7QUFDcEMsaURBQTRDO0FBQzVDLCtDQUF5RDtBQUN6RCxpREFBc0Q7QUFDdEQsdURBQWtEO0FBQ2xELHVDQUFrQztBQUNsQyx1RUFBa0U7QUFDbEUsbURBQWtEO0FBRWxELHdEQUFtRDtBQUVuRCxNQUFNLE1BQU0sR0FBRyxZQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFM0IsUUFBUSxDQUFDLGVBQWUsRUFBRTs7UUFFdEIsaUNBQWUsQ0FBQyxJQUFJLENBQUMsR0FBUyxFQUFFLGdEQUFDLE9BQUEsSUFBSSw2QkFBYSxFQUFFLENBQUEsR0FBQSxDQUFDLENBQUM7UUFHdEQsRUFBRSxDQUFDLFlBQVksRUFBRTtZQUNiLGFBQU0sQ0FBQyxRQUFRLENBQUMseUJBQVcsQ0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwRCxDQUFDLENBQUMsQ0FBQztRQUdILEVBQUUsQ0FBQywrQkFBK0IsRUFBRTtZQUVoQyxJQUFJLHFCQUFTLENBQUMsR0FBRyxFQUFFLEtBQUssb0JBQVEsQ0FBQyxLQUFLLEVBQUU7Z0JBQ3BDLE9BQU87YUFDVjtZQUVELE1BQU0sUUFBUSxHQUFHLGNBQWMsQ0FBQztZQUNoQyxNQUFNLFFBQVEsR0FBRyxvQkFBUSxDQUFDLEtBQUssQ0FBQztZQUVoQyx1QkFBVSxDQUFDLDZCQUFhLENBQUMsc0JBQXNCLENBQUMsRUFBQyxRQUFRLEVBQUUsUUFBUSxFQUFDLENBQUMsRUFBRTtnQkFDbkUsT0FBTyxFQUFFO29CQUNMLHFCQUFxQjtvQkFDckIsZ0RBQWdEO2lCQUNuRDtnQkFDRCxlQUFlLEVBQUUsZ0RB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RUFBRSxHQUFHLFdBQVcsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFFMUYsTUFBTSxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBRTlDLGFBQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUUvRCxDQUFDO1NBQUEsQ0FBQyxDQUFDO0lBR1AsQ0FBQztDQUFBLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcbmltcG9ydCB7YXNzZXJ0SlNPTn0gZnJvbSAnLi4vdGVzdC9Bc3NlcnRpb25zJztcbmltcG9ydCB7RGlza0RhdGFzdG9yZX0gZnJvbSAnLi9EaXNrRGF0YXN0b3JlJztcblxuaW1wb3J0IG9zIGZyb20gJ29zJztcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQge0ZpbGVzfSBmcm9tICcuLi91dGlsL0ZpbGVzJztcbmltcG9ydCB7RmlsZVBhdGhzfSBmcm9tICcuLi91dGlsL0ZpbGVQYXRocyc7XG5pbXBvcnQge0RpcmVjdG9yaWVzLCBHbG9iYWxEYXRhRGlyfSBmcm9tICcuL0RpcmVjdG9yaWVzJztcbmltcG9ydCB7UGxhdGZvcm0sIFBsYXRmb3Jtc30gZnJvbSAnLi4vdXRpbC9QbGF0Zm9ybXMnO1xuaW1wb3J0IHtEYXRhc3RvcmVUZXN0ZXJ9IGZyb20gJy4vRGF0YXN0b3JlVGVzdGVyJztcbmltcG9ydCB7QmFja2VuZH0gZnJvbSAnLi9CYWNrZW5kJztcbmltcG9ydCB7RGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXJ9IGZyb20gJy4vRGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtNb2NrRG9jTWV0YXN9IGZyb20gJy4uL21ldGFkYXRhL0RvY01ldGFzJztcbmltcG9ydCB7RG9jTWV0YUZpbGVSZWZ9IGZyb20gJy4vRG9jTWV0YVJlZic7XG5pbXBvcnQge01vY2tQSFpXcml0ZXJ9IGZyb20gJy4uL3Boei9Nb2NrUEhaV3JpdGVyJztcblxuY29uc3QgdG1wZGlyID0gb3MudG1wZGlyKCk7XG5cbmRlc2NyaWJlKFwiRGlza0RhdGFzdG9yZVwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgIERhdGFzdG9yZVRlc3Rlci50ZXN0KGFzeW5jICgpID0+IG5ldyBEaXNrRGF0YXN0b3JlKCkpO1xuXG5cbiAgICBpdChcImdldERhdGFEaXJcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGFzc2VydC5ub3RFcXVhbChEaXJlY3Rvcmllcy5nZXREYXRhRGlyKCksIG51bGwpO1xuICAgIH0pO1xuXG5cbiAgICBpdChcImdldERhdGFEaXJzRm9yUGxhdGZvcm0gTUFDX09TXCIsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGlmIChQbGF0Zm9ybXMuZ2V0KCkgIT09IFBsYXRmb3JtLk1BQ09TKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1c2VySG9tZSA9ICcvVXNlcnMvYWxpY2UnO1xuICAgICAgICBjb25zdCBwbGF0Zm9ybSA9IFBsYXRmb3JtLk1BQ09TO1xuXG4gICAgICAgIGFzc2VydEpTT04oRGlza0RhdGFzdG9yZS5nZXREYXRhRGlyc0ZvclBsYXRmb3JtKHt1c2VySG9tZSwgcGxhdGZvcm19KSwge1xuICAgICAgICAgICAgXCJwYXRoc1wiOiBbXG4gICAgICAgICAgICAgICAgXCIvVXNlcnMvYWxpY2UvLnBvbGFyXCIsXG4gICAgICAgICAgICAgICAgXCIvVXNlcnMvYWxpY2UvTGlicmFyeS9BcHBsaWNhdGlvbiBTdXBwb3J0L1BvbGFyXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInByZWZlcnJlZFBhdGhcIjogXCIvVXNlcnMvYWxpY2UvTGlicmFyeS9BcHBsaWNhdGlvbiBTdXBwb3J0L1BvbGFyXCJcbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxuXG4gICAgaXQoXCJpbml0IGRhdGFEaXIgZGlyZWN0b3J5IG9uIGluaXQoKVwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICBjb25zdCBkYXRhRGlyID0gRmlsZVBhdGhzLmpvaW4odG1wZGlyLCAnZGlzay1kYXRhc3RvcmUudGVzdCcpO1xuICAgICAgICBhd2FpdCBGaWxlcy5yZW1vdmVEaXJlY3RvcnlSZWN1cnNpdmVseUFzeW5jKGRhdGFEaXIpO1xuXG4gICAgICAgIEdsb2JhbERhdGFEaXIuc2V0KGRhdGFEaXIpO1xuICAgICAgICBjb25zdCBkaXNrRGF0YXN0b3JlID0gbmV3IERpc2tEYXRhc3RvcmUoKTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwoYXdhaXQgRmlsZXMuZXhpc3RzQXN5bmMoZGF0YURpciksIGZhbHNlKTtcblxuICAgICAgICBsZXQgZXhwZWN0ZWQ6IGFueSA9IHtcblxuICAgICAgICAgICAgXCJkYXRhRGlyQ29uZmlnXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhdGhcIjogRmlsZVBhdGhzLmpvaW4odG1wZGlyLCBcImRpc2stZGF0YXN0b3JlLnRlc3RcIiksXG4gICAgICAgICAgICAgICAgXCJzdHJhdGVneVwiOiBcIm1hbnVhbFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJkYXRhRGlyXCI6IEZpbGVQYXRocy5qb2luKHRtcGRpciwgXCJkaXNrLWRhdGFzdG9yZS50ZXN0XCIpLFxuICAgICAgICAgICAgXCJzdGFzaERpclwiOiBGaWxlUGF0aHMuam9pbih0bXBkaXIsIFwiZGlzay1kYXRhc3RvcmUudGVzdFwiLCBcInN0YXNoXCIpLFxuICAgICAgICAgICAgXCJmaWxlc0RpclwiOiBGaWxlUGF0aHMuam9pbih0bXBkaXIsIFwiZGlzay1kYXRhc3RvcmUudGVzdFwiLCBcImZpbGVzXCIpLFxuICAgICAgICAgICAgXCJsb2dzRGlyXCI6IEZpbGVQYXRocy5qb2luKHRtcGRpciwgXCJkaXNrLWRhdGFzdG9yZS50ZXN0XCIsIFwibG9nc1wiKSxcbiAgICAgICAgICAgIFwiY29uZmlnRGlyXCI6IEZpbGVQYXRocy5qb2luKHRtcGRpciwgXCJkaXNrLWRhdGFzdG9yZS50ZXN0XCIsIFwiY29uZmlnXCIpLFxuXG4gICAgICAgICAgICBcImluaXRpYWxpemF0aW9uXCI6IHtcblxuICAgICAgICAgICAgICAgIFwiZGF0YURpclwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiZGlyXCI6IEZpbGVQYXRocy5qb2luKHRtcGRpciwgJ2Rpc2stZGF0YXN0b3JlLnRlc3QnKSxcbiAgICAgICAgICAgICAgICAgICAgXCJjcmVhdGVkXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcInN0YXNoRGlyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJkaXJcIjogRmlsZVBhdGhzLmpvaW4odG1wZGlyLCAnZGlzay1kYXRhc3RvcmUudGVzdCcsICdzdGFzaCcpLFxuICAgICAgICAgICAgICAgICAgICBcImNyZWF0ZWRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZmlsZXNEaXJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImRpclwiOiBGaWxlUGF0aHMuam9pbih0bXBkaXIsICdkaXNrLWRhdGFzdG9yZS50ZXN0JywgJ2ZpbGVzJyksXG4gICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJsb2dzRGlyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJkaXJcIjogRmlsZVBhdGhzLmpvaW4odG1wZGlyLCAnZGlzay1kYXRhc3RvcmUudGVzdCcsICdsb2dzJyksXG4gICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJjb25maWdEaXJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImRpclwiOiBGaWxlUGF0aHMuam9pbih0bXBkaXIsICdkaXNrLWRhdGFzdG9yZS50ZXN0JywgJ2NvbmZpZycpLFxuICAgICAgICAgICAgICAgICAgICBcImNyZWF0ZWRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gdGVzdCBkb3VibGUgaW5pdC4uLlxuICAgICAgICBhc3NlcnRKU09OKGF3YWl0IGRpc2tEYXRhc3RvcmUuaW5pdCgpLCBleHBlY3RlZCk7XG5cbiAgICAgICAgZXhwZWN0ZWQgPSB7XG4gICAgICAgICAgICBcImRhdGFEaXJDb25maWdcIjoge1xuICAgICAgICAgICAgICAgIFwicGF0aFwiOiBGaWxlUGF0aHMuam9pbih0bXBkaXIsIFwiZGlzay1kYXRhc3RvcmUudGVzdFwiKSxcbiAgICAgICAgICAgICAgICBcInN0cmF0ZWd5XCI6IFwibWFudWFsXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImRhdGFEaXJcIjogRmlsZVBhdGhzLmpvaW4odG1wZGlyLCBcImRpc2stZGF0YXN0b3JlLnRlc3RcIiksXG4gICAgICAgICAgICBcInN0YXNoRGlyXCI6IEZpbGVQYXRocy5qb2luKHRtcGRpciwgXCJkaXNrLWRhdGFzdG9yZS50ZXN0XCIsIFwic3Rhc2hcIiksXG4gICAgICAgICAgICBcImZpbGVzRGlyXCI6IEZpbGVQYXRocy5qb2luKHRtcGRpciwgXCJkaXNrLWRhdGFzdG9yZS50ZXN0XCIsIFwiZmlsZXNcIiksXG4gICAgICAgICAgICBcImxvZ3NEaXJcIjogRmlsZVBhdGhzLmpvaW4odG1wZGlyLCBcImRpc2stZGF0YXN0b3JlLnRlc3RcIiwgXCJsb2dzXCIpLFxuICAgICAgICAgICAgXCJjb25maWdEaXJcIjogRmlsZVBhdGhzLmpvaW4odG1wZGlyLCBcImRpc2stZGF0YXN0b3JlLnRlc3RcIiwgXCJjb25maWdcIiksXG5cbiAgICAgICAgICAgIFwiaW5pdGlhbGl6YXRpb25cIjoge1xuXG4gICAgICAgICAgICAgICAgXCJkYXRhRGlyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJkaXJcIjogRmlsZVBhdGhzLmpvaW4odG1wZGlyLCAnZGlzay1kYXRhc3RvcmUudGVzdCcpLFxuICAgICAgICAgICAgICAgICAgICBcImV4aXN0c1wiOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJzdGFzaERpclwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiZGlyXCI6IEZpbGVQYXRocy5qb2luKHRtcGRpciwgJ2Rpc2stZGF0YXN0b3JlLnRlc3QnLCAnc3Rhc2gnKSxcbiAgICAgICAgICAgICAgICAgICAgXCJleGlzdHNcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZmlsZXNEaXJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImRpclwiOiBGaWxlUGF0aHMuam9pbih0bXBkaXIsICdkaXNrLWRhdGFzdG9yZS50ZXN0JywgJ2ZpbGVzJyksXG4gICAgICAgICAgICAgICAgICAgIFwiZXhpc3RzXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImxvZ3NEaXJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImRpclwiOiBGaWxlUGF0aHMuam9pbih0bXBkaXIsICdkaXNrLWRhdGFzdG9yZS50ZXN0JywgJ2xvZ3MnKSxcbiAgICAgICAgICAgICAgICAgICAgXCJleGlzdHNcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiY29uZmlnRGlyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJkaXJcIjogRmlsZVBhdGhzLmpvaW4odG1wZGlyLCAnZGlzay1kYXRhc3RvcmUudGVzdCcsICdjb25maWcnKSxcbiAgICAgICAgICAgICAgICAgICAgXCJleGlzdHNcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgYXNzZXJ0SlNPTihhd2FpdCBkaXNrRGF0YXN0b3JlLmluaXQoKSwgZXhwZWN0ZWQgKTtcblxuICAgIH0pO1xuXG5cbiAgICBpdChcImluaXQgYW5kIHRlc3QgcGF0aHNcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgY29uc3QgZGF0YURpciA9IEZpbGVQYXRocy5qb2luKHRtcGRpciwgJ3Rlc3QtcGF0aHMnKTtcbiAgICAgICAgYXdhaXQgRmlsZXMucmVtb3ZlRGlyZWN0b3J5UmVjdXJzaXZlbHlBc3luYyhkYXRhRGlyKTtcblxuICAgICAgICBHbG9iYWxEYXRhRGlyLnNldChkYXRhRGlyKTtcbiAgICAgICAgY29uc3QgZGlza0RhdGFzdG9yZSA9IG5ldyBEaXNrRGF0YXN0b3JlKCk7XG5cbiAgICAgICAgYXdhaXQgZGlza0RhdGFzdG9yZS5pbml0KCk7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKGRpc2tEYXRhc3RvcmUuZGF0YURpciwgRmlsZVBhdGhzLmpvaW4odG1wZGlyLCAndGVzdC1wYXRocycpKTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwoZGlza0RhdGFzdG9yZS5zdGFzaERpciwgRmlsZVBhdGhzLmpvaW4odG1wZGlyLCAndGVzdC1wYXRocycsICdzdGFzaCcpKTtcblxuICAgICAgICAvLyBub3cgY3JlYXRlIGl0IGFuZFxuXG4gICAgfSk7XG5cbiAgICBpdChcInRlc3QgYXN5bmMgZXhpc3RzIGZ1bmN0aW9uXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGNvbnN0IGRhdGFEaXIgPSBGaWxlUGF0aHMuam9pbih0bXBkaXIsICd0aGlzLWZpbGUtZG9lcy1ub3QtZXhpc3QnKTtcbiAgICAgICAgYXdhaXQgRmlsZXMucmVtb3ZlRGlyZWN0b3J5UmVjdXJzaXZlbHlBc3luYyhkYXRhRGlyKTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwoZnMuZXhpc3RzU3luYyhkYXRhRGlyKSwgZmFsc2UpO1xuICAgICAgICBhc3NlcnQuZXF1YWwoYXdhaXQgRmlsZXMuZXhpc3RzQXN5bmMoZGF0YURpciksIGZhbHNlKTtcblxuICAgIH0pO1xuXG4gICAgaXQoXCJBZGQgZmlsZSBhbmQgcmVtb3ZlIGZpbGUgZnJvbSB0aGUgc3Rhc2ggYW5kIHNlZSBpZiBpdCBleGlzdHMuXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGNvbnN0IHBhdGggPSBhd2FpdCBGaWxlcy5yZWFscGF0aEFzeW5jKEZpbGVQYXRocy5qb2luKF9fZGlybmFtZSwgXCIuLlwiLCBcIi4uXCIsIFwiLi5cIiwgXCJkb2NzXCIsIFwiZXhhbXBsZS5wZGZcIikpO1xuXG4gICAgICAgIGFzc2VydC5vayhhd2FpdCBGaWxlcy5leGlzdHNBc3luYyhwYXRoKSwgXCJObyBmaWxlIGZvdW5kIGZyb206IFwiICsgcHJvY2Vzcy5jd2QoKSk7XG5cbiAgICAgICAgY29uc3QgZGF0YURpciA9IEZpbGVQYXRocy5qb2luKHRtcGRpciwgJ2RhdGFzdG9yZS1zdGFzaC1iYWNrZW5kJyk7XG4gICAgICAgIGF3YWl0IEZpbGVzLnJlbW92ZURpcmVjdG9yeVJlY3Vyc2l2ZWx5QXN5bmMoZGF0YURpcik7XG5cbiAgICAgICAgR2xvYmFsRGF0YURpci5zZXQoZGF0YURpcik7XG4gICAgICAgIGNvbnN0IGRpc2tEYXRhc3RvcmUgPSBuZXcgRGlza0RhdGFzdG9yZSgpO1xuICAgICAgICBhd2FpdCBkaXNrRGF0YXN0b3JlLmluaXQoKTtcblxuICAgICAgICBhd2FpdCBkaXNrRGF0YXN0b3JlLndyaXRlRmlsZShCYWNrZW5kLlNUQVNILCB7bmFtZTogJ2V4YW1wbGUucGRmJ30sIGF3YWl0IEZpbGVzLnJlYWRGaWxlQXN5bmMocGF0aCkpO1xuXG4gICAgICAgIGNvbnN0IHBkZlBhdGggPSBGaWxlUGF0aHMuam9pbihkYXRhRGlyLCBcInN0YXNoXCIsIFwiZXhhbXBsZS5wZGZcIik7XG5cbiAgICAgICAgYXNzZXJ0Lm9rKGF3YWl0IEZpbGVzLmV4aXN0c0FzeW5jKHBkZlBhdGgpLCBcIkNvdWxkIG5vdCBmaW5kIGZpbGU6IFwiICsgcGRmUGF0aCk7XG5cbiAgICAgICAgYXNzZXJ0Lm9rKGF3YWl0IGRpc2tEYXRhc3RvcmUuY29udGFpbnNGaWxlKEJhY2tlbmQuU1RBU0gsIHtuYW1lOiAnZXhhbXBsZS5wZGYnfSkpO1xuXG4gICAgICAgIGF3YWl0IGRpc2tEYXRhc3RvcmUuZGVsZXRlRmlsZShCYWNrZW5kLlNUQVNILCB7bmFtZTogJ2V4YW1wbGUucGRmJ30pO1xuXG4gICAgICAgIGFzc2VydC5pc0ZhbHNlKGF3YWl0IEZpbGVzLmV4aXN0c0FzeW5jKHBkZlBhdGgpKTtcblxuICAgIH0pO1xuXG4gICAgaXQoXCJEZWxldGUgZmlsZSBhbmQgbWFrZSBzdXJlIHN0YXRlLmpzb24gYW5kIGRpciBhcmUgbm8gbG9uZ2VyIHByZXNlbnRcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgY29uc3QgZGF0YURpciA9IEZpbGVQYXRocy5qb2luKHRtcGRpciwgJ2RhdGFzdG9yZS1kZWxldGUtdGVzdCcpO1xuXG4gICAgICAgIEdsb2JhbERhdGFEaXIuc2V0KGRhdGFEaXIpO1xuICAgICAgICBjb25zdCBkaXNrRGF0YXN0b3JlID0gbmV3IERpc2tEYXRhc3RvcmUoKTtcbiAgICAgICAgYXdhaXQgZGlza0RhdGFzdG9yZS5pbml0KCk7XG5cbiAgICAgICAgY29uc3QgcGVyc2lzdGVuY2VMYXllciA9IG5ldyBEZWZhdWx0UGVyc2lzdGVuY2VMYXllcihkaXNrRGF0YXN0b3JlKTtcblxuICAgICAgICBhd2FpdCBwZXJzaXN0ZW5jZUxheWVyLmluaXQoKTtcblxuICAgICAgICBjb25zdCBmaW5nZXJwcmludCA9ICcweDAwZGF0YWRlbGV0ZSc7XG4gICAgICAgIGNvbnN0IGRvY01ldGEgPSBNb2NrRG9jTWV0YXMuY3JlYXRlV2l0aGluSW5pdGlhbFBhZ2VtYXJrcyhmaW5nZXJwcmludCwgMTQpO1xuXG4gICAgICAgIGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXIud3JpdGUoZmluZ2VycHJpbnQsIGRvY01ldGEpO1xuXG4gICAgICAgIGNvbnN0IHN0YXRlRmlsZSA9IEZpbGVQYXRocy5qb2luKGRhdGFEaXIsIGZpbmdlcnByaW50LCAnc3RhdGUuanNvbicpO1xuXG4gICAgICAgIGFzc2VydC5vayhhd2FpdCBGaWxlcy5leGlzdHNBc3luYyhzdGF0ZUZpbGUpKTtcblxuICAgICAgICBjb25zdCBkb2NNZXRhRmlsZVJlZjogRG9jTWV0YUZpbGVSZWYgPSB7XG4gICAgICAgICAgICBmaW5nZXJwcmludCxcbiAgICAgICAgICAgIGRvY0ZpbGU6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBgJHtmaW5nZXJwcmludH0ucGh6YFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvY0luZm86IGRvY01ldGEuZG9jSW5mb1xuICAgICAgICB9O1xuXG4gICAgICAgIGF3YWl0IE1vY2tQSFpXcml0ZXIud3JpdGUoRmlsZVBhdGhzLmNyZWF0ZShkaXNrRGF0YXN0b3JlLnN0YXNoRGlyLCBgJHtmaW5nZXJwcmludH0ucGh6YCkpO1xuXG4gICAgICAgIGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXIuZGVsZXRlKGRvY01ldGFGaWxlUmVmKTtcblxuICAgICAgICBhc3NlcnQuaXNGYWxzZShhd2FpdCBwZXJzaXN0ZW5jZUxheWVyLmNvbnRhaW5zKHN0YXRlRmlsZSkpO1xuXG4gICAgfSk7XG5cblxufSk7XG4iXX0=