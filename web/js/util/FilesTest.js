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
const Files_1 = require("./Files");
const FilePaths_1 = require("./FilePaths");
const os_1 = __importDefault(require("os"));
const rimraf = require('rimraf');
describe('Files', function () {
    describe('createDirectorySnapshot', function () {
        let tmpdir = FilePaths_1.FilePaths.join(os_1.default.tmpdir(), 'none');
        beforeEach(() => __awaiter(this, void 0, void 0, function* () {
            tmpdir = FilePaths_1.FilePaths.join(os_1.default.tmpdir(), 'createDirectorySnapshot');
            yield Files_1.Files.createDirAsync(tmpdir);
        }));
        afterEach(() => __awaiter(this, void 0, void 0, function* () {
            yield Files_1.Files.removeDirectoryRecursivelyAsync(tmpdir);
        }));
        xit("Test with non-existant directory", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const path = FilePaths_1.FilePaths.join(tmpdir, 'non-existent-directory-path');
                const targetPath = FilePaths_1.FilePaths.join(tmpdir, 'non-existent-directory-path.new');
                chai_1.assert.throws(() => __awaiter(this, void 0, void 0, function* () {
                    yield Files_1.Files.createDirectorySnapshot(path, targetPath);
                }));
            });
        });
        it("Test with empty dir", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const path = FilePaths_1.FilePaths.join(tmpdir, 'empty-dir-with-no-files');
                const targetPath = FilePaths_1.FilePaths.join(tmpdir, 'non-existent-directory-path.new');
                yield Files_1.Files.createDirAsync(path);
                const result = yield Files_1.Files.createDirectorySnapshot(path, targetPath);
                chai_1.assert.equal(result.files.length, 0);
                chai_1.assert.equal(result.dirs.length, 0);
                chai_1.assert.equal(result.path, path);
                chai_1.assert.ok(yield Files_1.Files.existsAsync(path), "no path: " + path);
                chai_1.assert.ok(yield Files_1.Files.existsAsync(targetPath), "no target path: " + targetPath);
            });
        });
        it("Test with one file", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const path = FilePaths_1.FilePaths.join(tmpdir, 'dir-with-one-file');
                const targetPath = FilePaths_1.FilePaths.join(tmpdir, 'dir-with-one-file.new');
                yield Files_1.Files.mkdirAsync(path);
                yield Files_1.Files.writeFileAsync(FilePaths_1.FilePaths.join(path, 'hello.txt'), 'hello');
                const result = yield Files_1.Files.createDirectorySnapshot(path, targetPath);
                chai_1.assert.equal(result.files.length, 1);
                chai_1.assert.equal(result.dirs.length, 0);
                chai_1.assert.equal(result.path, path);
                chai_1.assert.ok(yield Files_1.Files.existsAsync(path));
                chai_1.assert.ok(yield Files_1.Files.existsAsync(targetPath));
                chai_1.assert.ok(yield Files_1.Files.existsAsync(FilePaths_1.FilePaths.join(targetPath, 'hello.txt')));
            });
        });
        it("Test with nested dirs", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const path = FilePaths_1.FilePaths.join(tmpdir, 'dir-with-one-file');
                const targetPath = FilePaths_1.FilePaths.join(tmpdir, 'dir-with-one-file.new');
                yield Files_1.Files.mkdirAsync(path);
                yield Files_1.Files.writeFileAsync(FilePaths_1.FilePaths.join(path, 'hello.txt'), 'hello');
                yield Files_1.Files.mkdirAsync(FilePaths_1.FilePaths.join(path, 'dir0'));
                yield Files_1.Files.writeFileAsync(FilePaths_1.FilePaths.join(path, 'dir0', 'hello.txt'), 'hello');
                const result = yield Files_1.Files.createDirectorySnapshot(path, targetPath);
                chai_1.assert.equal(result.files.length, 1);
                chai_1.assert.equal(result.dirs.length, 1);
                chai_1.assert.equal(result.path, path);
                chai_1.assert.ok(yield Files_1.Files.existsAsync(path));
                chai_1.assert.ok(yield Files_1.Files.existsAsync(targetPath));
                chai_1.assert.ok(yield Files_1.Files.existsAsync(FilePaths_1.FilePaths.join(targetPath, 'hello.txt')));
                chai_1.assert.ok(yield Files_1.Files.existsAsync(FilePaths_1.FilePaths.join(targetPath, 'dir0', 'hello.txt')));
            });
        });
    });
    describe('removeDirectoryRecursivelyAsync', function () {
        const tmpdir = os_1.default.tmpdir();
        it("Test with non-existant directory", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const path = FilePaths_1.FilePaths.join(tmpdir, 'non-existent-directory-path');
                const result = yield Files_1.Files.removeDirectoryRecursivelyAsync(path);
                chai_1.assert.equal(result.files.length, 0);
                chai_1.assert.equal(result.dirs.length, 0);
                chai_1.assert.equal(result.path, path);
                chai_1.assert.ok(!(yield Files_1.Files.existsAsync(path)));
            });
        });
        it("Test with empty dir", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const path = FilePaths_1.FilePaths.join(tmpdir, 'empty-dir-with-no-files');
                yield Files_1.Files.mkdirAsync(path);
                const result = yield Files_1.Files.removeDirectoryRecursivelyAsync(path);
                chai_1.assert.equal(result.files.length, 0);
                chai_1.assert.equal(result.dirs.length, 0);
                chai_1.assert.equal(result.path, path);
                chai_1.assert.ok(!(yield Files_1.Files.existsAsync(path)));
            });
        });
        it("Test with one file", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const path = FilePaths_1.FilePaths.join(tmpdir, 'dir-with-one-file');
                yield Files_1.Files.mkdirAsync(path);
                yield Files_1.Files.writeFileAsync(FilePaths_1.FilePaths.join(path, 'hello.txt'), 'hello');
                const result = yield Files_1.Files.removeDirectoryRecursivelyAsync(path);
                chai_1.assert.equal(result.files.length, 1);
                chai_1.assert.equal(result.dirs.length, 0);
                chai_1.assert.equal(result.path, path);
                chai_1.assert.ok(!(yield Files_1.Files.existsAsync(path)));
            });
        });
        it("Test with nested dirs", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const path = FilePaths_1.FilePaths.join(tmpdir, 'dir-with-one-file');
                yield Files_1.Files.mkdirAsync(path);
                yield Files_1.Files.writeFileAsync(FilePaths_1.FilePaths.join(path, 'hello.txt'), 'hello');
                yield Files_1.Files.mkdirAsync(FilePaths_1.FilePaths.join(path, 'dir0'));
                yield Files_1.Files.writeFileAsync(FilePaths_1.FilePaths.join(path, 'dir0', 'hello.txt'), 'hello');
                const result = yield Files_1.Files.removeDirectoryRecursivelyAsync(path);
                chai_1.assert.equal(result.files.length, 1);
                chai_1.assert.equal(result.dirs.length, 1);
                chai_1.assert.equal(result.path, path);
                chai_1.assert.ok(!(yield Files_1.Files.existsAsync(path)));
            });
        });
    });
    describe('integrated', function () {
        const tmpdir = os_1.default.tmpdir();
        it("Test delete with missing parent dirs", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const path = FilePaths_1.FilePaths.join(tmpdir, 'missing', 'parent', 'example.txt');
                yield Files_1.Files.existsAsync(path);
                yield Files_1.Files.deleteAsync(path);
            });
        });
    });
    describe('writeFileAsync', function () {
        const tmpdir = os_1.default.tmpdir();
        it("basic", function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield Files_1.Files.writeFileAsync(FilePaths_1.FilePaths.join(tmpdir, "write-file-async.txt"), "hello world");
            });
        });
        it("from stream", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const dataInputPath = FilePaths_1.FilePaths.join(tmpdir, "data-input.txt");
                yield Files_1.Files.writeFileAsync(dataInputPath, "hello world");
                const dataOutputPath = FilePaths_1.FilePaths.join(tmpdir, "data-output.txt");
                yield Files_1.Files.writeFileAsync(dataOutputPath, Files_1.Files.createReadStream(dataInputPath));
                const output = yield Files_1.Files.readFileAsync(dataOutputPath);
                chai_1.assert.ok(output, "hello world");
            });
        });
        it("from FileRef", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const dataInputPath = FilePaths_1.FilePaths.join(tmpdir, "data-input.txt");
                yield Files_1.Files.writeFileAsync(dataInputPath, "hello world");
                const dataOutputPath = FilePaths_1.FilePaths.join(tmpdir, "data-output.txt");
                const fileRef = { path: dataInputPath };
                yield Files_1.Files.writeFileAsync(dataOutputPath, fileRef);
                const output = yield Files_1.Files.readFileAsync(dataOutputPath);
                chai_1.assert.ok(output, "hello world");
            });
        });
    });
    describe('readFileAsync', function () {
        const tmpdir = os_1.default.tmpdir();
        it("basic", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const path = FilePaths_1.FilePaths.join(tmpdir, "write-file-async.txt");
                yield Files_1.Files.writeFileAsync(path, "hello world");
                const data = yield Files_1.Files.readFileAsync(path);
                chai_1.assert.equal(data.toString('utf8'), "hello world");
            });
        });
        xit("missing file", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const missingPath = "this-is-a-missing-path.txt";
                yield Files_1.Files.readFileAsync(missingPath);
            });
        });
        function failsProperly() {
            return __awaiter(this, void 0, void 0, function* () {
                throw new Error("failing properly.");
            });
        }
        xit("proper exception example.", function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield failsProperly();
            });
        });
    });
    describe('readdirAsync', function () {
        const tmpdir = os_1.default.tmpdir();
        it("basic", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const filename = "write-file-async.txt";
                const path = FilePaths_1.FilePaths.join(tmpdir, filename);
                yield Files_1.Files.writeFileAsync(path, "hello world");
                const files = yield Files_1.Files.readdirAsync(tmpdir);
                chai_1.assert.equal(files.includes(filename), true);
            });
        });
    });
    describe('statAsync', function () {
        const tmpdir = os_1.default.tmpdir();
        it("basic", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const filename = "write-file-async.txt";
                const path = FilePaths_1.FilePaths.join(tmpdir, filename);
                const stat = yield Files_1.Files.statAsync(path);
                chai_1.assert.equal(stat !== null, true);
                chai_1.assert.equal(stat.isFile(), true);
                chai_1.assert.equal(stat.isDirectory(), false);
            });
        });
        it("isDirectory", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const stat = yield Files_1.Files.statAsync(tmpdir);
                chai_1.assert.equal(stat.isDirectory(), true);
            });
        });
        xit("missing file", function () {
            return __awaiter(this, void 0, void 0, function* () {
                chai_1.assert.throw(function () {
                    return __awaiter(this, void 0, void 0, function* () {
                        yield Files_1.Files.statAsync(FilePaths_1.FilePaths.createTempName('invalid-file-name'));
                    });
                });
            });
        });
    });
    describe('createDirAsync', function () {
        const tmpdir = os_1.default.tmpdir();
        it("basic", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const path = FilePaths_1.FilePaths.join(tmpdir, 'test-createDirAsync.dir');
                removeDirectory(path);
                yield Files_1.Files.createDirAsync(path);
                chai_1.assert.ok(yield Files_1.Files.existsAsync(path));
                const stat = yield Files_1.Files.statAsync(path);
                chai_1.assert.equal(stat !== null, true);
                chai_1.assert.equal(stat.isFile(), false);
                chai_1.assert.equal(stat.isDirectory(), true);
                yield Files_1.Files.createDirAsync(path);
            });
        });
        it("test EEXIST", function () {
            return __awaiter(this, void 0, void 0, function* () {
            });
        });
    });
    describe('mkdirAsync', function () {
        const tmpdir = os_1.default.tmpdir();
        xit("nested", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const baseDir = FilePaths_1.FilePaths.join(tmpdir, 'base-of-nested-dirs');
                const nestedDirPath = FilePaths_1.FilePaths.join(tmpdir, 'base-of-nested-dirs', 'first', 'second', 'third');
                yield Files_1.Files.removeDirectoryRecursivelyAsync(baseDir);
                yield Files_1.Files.rmdirAsync(baseDir);
            });
        });
        it("basic", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const path = FilePaths_1.FilePaths.join(tmpdir, 'test-mkdir.dir');
                removeDirectory(path);
                yield Files_1.Files.mkdirAsync(path);
                chai_1.assert.ok(yield Files_1.Files.existsAsync(path));
                const stat = yield Files_1.Files.statAsync(path);
                chai_1.assert.equal(stat !== null, true);
                chai_1.assert.equal(stat.isFile(), false);
                chai_1.assert.equal(stat.isDirectory(), true);
            });
        });
        it("test errno on second call", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const path = FilePaths_1.FilePaths.join(tmpdir, 'test-mkdir-second-call.dir');
                removeDirectory(path);
                chai_1.assert.ok(!(yield Files_1.Files.existsAsync(path)));
                yield Files_1.Files.mkdirAsync(path);
                chai_1.assert.ok(yield Files_1.Files.existsAsync(path));
                const stat = yield Files_1.Files.statAsync(path);
                chai_1.assert.equal(stat !== null, true);
                chai_1.assert.equal(stat.isFile(), false);
                chai_1.assert.equal(stat.isDirectory(), true);
                try {
                    yield Files_1.Files.mkdirAsync(path);
                    chai_1.assert.ok(false, "This should not have worked");
                }
                catch (e) {
                    chai_1.assert.equal(e.code, "EEXIST");
                    chai_1.assert.ok(e.message.indexOf("EEXIST:") === 0);
                }
            });
        });
    });
});
function removeDirectory(path) {
    rimraf.sync(path);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZXNUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRmlsZXNUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBNEI7QUFDNUIsbUNBQTBDO0FBQzFDLDJDQUFzQztBQUN0Qyw0Q0FBb0I7QUFHcEIsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRWpDLFFBQVEsQ0FBQyxPQUFPLEVBQUU7SUFFZCxRQUFRLENBQUMseUJBQXlCLEVBQUU7UUFFaEMsSUFBSSxNQUFNLEdBQVcscUJBQVMsQ0FBQyxJQUFJLENBQUMsWUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRXpELFVBQVUsQ0FBQyxHQUFTLEVBQUU7WUFDbEIsTUFBTSxHQUFHLHFCQUFTLENBQUMsSUFBSSxDQUFDLFlBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1lBQ2hFLE1BQU0sYUFBSyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUEsQ0FBQyxDQUFDO1FBRUgsU0FBUyxDQUFDLEdBQVMsRUFBRTtZQUNqQixNQUFNLGFBQUssQ0FBQywrQkFBK0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4RCxDQUFDLENBQUEsQ0FBQyxDQUFDO1FBRUgsR0FBRyxDQUFDLGtDQUFrQyxFQUFFOztnQkFFcEMsTUFBTSxJQUFJLEdBQUcscUJBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLDZCQUE2QixDQUFDLENBQUM7Z0JBQ25FLE1BQU0sVUFBVSxHQUFHLHFCQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxpQ0FBaUMsQ0FBQyxDQUFDO2dCQUU3RSxhQUFNLENBQUMsTUFBTSxDQUFDLEdBQVMsRUFBRTtvQkFDckIsTUFBTSxhQUFLLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2dCQUMxRCxDQUFDLENB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QkFFekMsTUFBTSxJQUFJLEdBQUcsTUFBTSxhQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUV6QyxhQUFNLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ2xDLGFBQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNuQyxhQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFFdkMsSUFBSTtvQkFFQSxNQUFNLGFBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBRTdCLGFBQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLDZCQUE2QixDQUFDLENBQUM7aUJBRW5EO2dCQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNSLGFBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztvQkFDL0IsYUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDakQ7WUFFTCxDQUFDO1NBQUEsQ0FBQyxDQUFDO0lBR1AsQ0FBQyxDQUFDLENBQUM7QUFHUCxDQUFDLENBQUMsQ0FBQztBQUdILFNBQVMsZUFBZSxDQUFDLElBQVk7SUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN0QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHtGaWxlcywgRmlsZUhhbmRsZX0gZnJvbSAnLi9GaWxlcyc7XG5pbXBvcnQge0ZpbGVQYXRoc30gZnJvbSAnLi9GaWxlUGF0aHMnO1xuaW1wb3J0IG9zIGZyb20gXCJvc1wiO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcblxuY29uc3QgcmltcmFmID0gcmVxdWlyZSgncmltcmFmJyk7XG5cbmRlc2NyaWJlKCdGaWxlcycsIGZ1bmN0aW9uKCkge1xuXG4gICAgZGVzY3JpYmUoJ2NyZWF0ZURpcmVjdG9yeVNuYXBzaG90JywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgbGV0IHRtcGRpcjogc3RyaW5nID0gRmlsZVBhdGhzLmpvaW4ob3MudG1wZGlyKCksICdub25lJyk7XG5cbiAgICAgICAgYmVmb3JlRWFjaChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0bXBkaXIgPSBGaWxlUGF0aHMuam9pbihvcy50bXBkaXIoKSwgJ2NyZWF0ZURpcmVjdG9yeVNuYXBzaG90Jyk7XG4gICAgICAgICAgICBhd2FpdCBGaWxlcy5jcmVhdGVEaXJBc3luYyh0bXBkaXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBhZnRlckVhY2goYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgYXdhaXQgRmlsZXMucmVtb3ZlRGlyZWN0b3J5UmVjdXJzaXZlbHlBc3luYyh0bXBkaXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICB4aXQoXCJUZXN0IHdpdGggbm9uLWV4aXN0YW50IGRpcmVjdG9yeVwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgY29uc3QgcGF0aCA9IEZpbGVQYXRocy5qb2luKHRtcGRpciwgJ25vbi1leGlzdGVudC1kaXJlY3RvcnktcGF0aCcpO1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0UGF0aCA9IEZpbGVQYXRocy5qb2luKHRtcGRpciwgJ25vbi1leGlzdGVudC1kaXJlY3RvcnktcGF0aC5uZXcnKTtcblxuICAgICAgICAgICAgYXNzZXJ0LnRocm93cyhhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYXdhaXQgRmlsZXMuY3JlYXRlRGlyZWN0b3J5U25hcHNob3QocGF0aCwgdGFyZ2V0UGF0aCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuXG4gICAgICAgIGl0KFwiVGVzdCB3aXRoIGVtcHR5IGRpclwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgY29uc3QgcGF0aCA9IEZpbGVQYXRocy5qb2luKHRtcGRpciwgJ2VtcHR5LWRpci13aXRoLW5vLWZpbGVzJyk7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRQYXRoID0gRmlsZVBhdGhzLmpvaW4odG1wZGlyLCAnbm9uLWV4aXN0ZW50LWRpcmVjdG9yeS1wYXRoLm5ldycpO1xuXG4gICAgICAgICAgICBhd2FpdCBGaWxlcy5jcmVhdGVEaXJBc3luYyhwYXRoKTtcblxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgRmlsZXMuY3JlYXRlRGlyZWN0b3J5U25hcHNob3QocGF0aCwgdGFyZ2V0UGF0aCk7XG5cbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChyZXN1bHQuZmlsZXMubGVuZ3RoLCAwKTtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChyZXN1bHQuZGlycy5sZW5ndGgsIDApO1xuXG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwocmVzdWx0LnBhdGgsIHBhdGgpO1xuXG4gICAgICAgICAgICBhc3NlcnQub2soYXdhaXQgRmlsZXMuZXhpc3RzQXN5bmMocGF0aCksIFwibm8gcGF0aDogXCIgKyBwYXRoKTtcbiAgICAgICAgICAgIGFzc2VydC5vayhhd2FpdCBGaWxlcy5leGlzdHNBc3luYyh0YXJnZXRQYXRoKSwgXCJubyB0YXJnZXQgcGF0aDogXCIgKyB0YXJnZXRQYXRoKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBpdChcIlRlc3Qgd2l0aCBvbmUgZmlsZVwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgY29uc3QgcGF0aCA9IEZpbGVQYXRocy5qb2luKHRtcGRpciwgJ2Rpci13aXRoLW9uZS1maWxlJyk7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRQYXRoID0gRmlsZVBhdGhzLmpvaW4odG1wZGlyLCAnZGlyLXdpdGgtb25lLWZpbGUubmV3Jyk7XG5cbiAgICAgICAgICAgIGF3YWl0IEZpbGVzLm1rZGlyQXN5bmMocGF0aCk7XG4gICAgICAgICAgICBhd2FpdCBGaWxlcy53cml0ZUZpbGVBc3luYyhGaWxlUGF0aHMuam9pbihwYXRoLCAnaGVsbG8udHh0JyksICdoZWxsbycpO1xuXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBGaWxlcy5jcmVhdGVEaXJlY3RvcnlTbmFwc2hvdChwYXRoLCB0YXJnZXRQYXRoKTtcblxuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKHJlc3VsdC5maWxlcy5sZW5ndGgsIDEpO1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKHJlc3VsdC5kaXJzLmxlbmd0aCwgMCk7XG5cbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChyZXN1bHQucGF0aCwgcGF0aCk7XG5cbiAgICAgICAgICAgIGFzc2VydC5vayhhd2FpdCBGaWxlcy5leGlzdHNBc3luYyhwYXRoKSk7XG4gICAgICAgICAgICBhc3NlcnQub2soYXdhaXQgRmlsZXMuZXhpc3RzQXN5bmModGFyZ2V0UGF0aCkpO1xuICAgICAgICAgICAgYXNzZXJ0Lm9rKGF3YWl0IEZpbGVzLmV4aXN0c0FzeW5jKEZpbGVQYXRocy5qb2luKHRhcmdldFBhdGgsICdoZWxsby50eHQnKSkpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiVGVzdCB3aXRoIG5lc3RlZCBkaXJzXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBjb25zdCBwYXRoID0gRmlsZVBhdGhzLmpvaW4odG1wZGlyLCAnZGlyLXdpdGgtb25lLWZpbGUnKTtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFBhdGggPSBGaWxlUGF0aHMuam9pbih0bXBkaXIsICdkaXItd2l0aC1vbmUtZmlsZS5uZXcnKTtcblxuICAgICAgICAgICAgYXdhaXQgRmlsZXMubWtkaXJBc3luYyhwYXRoKTtcbiAgICAgICAgICAgIGF3YWl0IEZpbGVzLndyaXRlRmlsZUFzeW5jKEZpbGVQYXRocy5qb2luKHBhdGgsICdoZWxsby50eHQnKSwgJ2hlbGxvJyk7XG4gICAgICAgICAgICBhd2FpdCBGaWxlcy5ta2RpckFzeW5jKEZpbGVQYXRocy5qb2luKHBhdGgsICdkaXIwJykpO1xuICAgICAgICAgICAgYXdhaXQgRmlsZXMud3JpdGVGaWxlQXN5bmMoRmlsZVBhdGhzLmpvaW4ocGF0aCwgJ2RpcjAnLCAnaGVsbG8udHh0JyksICdoZWxsbycpO1xuXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBGaWxlcy5jcmVhdGVEaXJlY3RvcnlTbmFwc2hvdChwYXRoLCB0YXJnZXRQYXRoKTtcblxuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKHJlc3VsdC5maWxlcy5sZW5ndGgsIDEpO1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKHJlc3VsdC5kaXJzLmxlbmd0aCwgMSk7XG5cbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChyZXN1bHQucGF0aCwgcGF0aCk7XG5cbiAgICAgICAgICAgIGFzc2VydC5vayhhd2FpdCBGaWxlcy5leGlzdHNBc3luYyhwYXRoKSk7XG4gICAgICAgICAgICBhc3NlcnQub2soYXdhaXQgRmlsZXMuZXhpc3RzQXN5bmModGFyZ2V0UGF0aCkpO1xuICAgICAgICAgICAgYXNzZXJ0Lm9rKGF3YWl0IEZpbGVzLmV4aXN0c0FzeW5jKEZpbGVQYXRocy5qb2luKHRhcmdldFBhdGgsICdoZWxsby50eHQnKSkpO1xuICAgICAgICAgICAgYXNzZXJ0Lm9rKGF3YWl0IEZpbGVzLmV4aXN0c0FzeW5jKEZpbGVQYXRocy5qb2luKHRhcmdldFBhdGgsICdkaXIwJywgJ2hlbGxvLnR4dCcpKSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxuXG4gICAgZGVzY3JpYmUoJ3JlbW92ZURpcmVjdG9yeVJlY3Vyc2l2ZWx5QXN5bmMnLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBjb25zdCB0bXBkaXI6IHN0cmluZyA9IG9zLnRtcGRpcigpO1xuXG4gICAgICAgIGl0KFwiVGVzdCB3aXRoIG5vbi1leGlzdGFudCBkaXJlY3RvcnlcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSBGaWxlUGF0aHMuam9pbih0bXBkaXIsICdub24tZXhpc3RlbnQtZGlyZWN0b3J5LXBhdGgnKTtcblxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgRmlsZXMucmVtb3ZlRGlyZWN0b3J5UmVjdXJzaXZlbHlBc3luYyhwYXRoKTtcblxuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKHJlc3VsdC5maWxlcy5sZW5ndGgsIDApO1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKHJlc3VsdC5kaXJzLmxlbmd0aCwgMCk7XG5cbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChyZXN1bHQucGF0aCwgcGF0aCk7XG5cbiAgICAgICAgICAgIGFzc2VydC5vayghIGF3YWl0IEZpbGVzLmV4aXN0c0FzeW5jKHBhdGgpKTtcblxuICAgICAgICB9KTtcblxuXG4gICAgICAgIGl0KFwiVGVzdCB3aXRoIGVtcHR5IGRpclwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgY29uc3QgcGF0aCA9IEZpbGVQYXRocy5qb2luKHRtcGRpciwgJ2VtcHR5LWRpci13aXRoLW5vLWZpbGVzJyk7XG5cbiAgICAgICAgICAgIGF3YWl0IEZpbGVzLm1rZGlyQXN5bmMocGF0aCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEZpbGVzLnJlbW92ZURpcmVjdG9yeVJlY3Vyc2l2ZWx5QXN5bmMocGF0aCk7XG5cbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChyZXN1bHQuZmlsZXMubGVuZ3RoLCAwKTtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChyZXN1bHQuZGlycy5sZW5ndGgsIDApO1xuXG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwocmVzdWx0LnBhdGgsIHBhdGgpO1xuXG4gICAgICAgICAgICBhc3NlcnQub2soISBhd2FpdCBGaWxlcy5leGlzdHNBc3luYyhwYXRoKSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJUZXN0IHdpdGggb25lIGZpbGVcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSBGaWxlUGF0aHMuam9pbih0bXBkaXIsICdkaXItd2l0aC1vbmUtZmlsZScpO1xuXG4gICAgICAgICAgICBhd2FpdCBGaWxlcy5ta2RpckFzeW5jKHBhdGgpO1xuICAgICAgICAgICAgYXdhaXQgRmlsZXMud3JpdGVGaWxlQXN5bmMoRmlsZVBhdGhzLmpvaW4ocGF0aCwgJ2hlbGxvLnR4dCcpLCAnaGVsbG8nKTtcblxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgRmlsZXMucmVtb3ZlRGlyZWN0b3J5UmVjdXJzaXZlbHlBc3luYyhwYXRoKTtcblxuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKHJlc3VsdC5maWxlcy5sZW5ndGgsIDEpO1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKHJlc3VsdC5kaXJzLmxlbmd0aCwgMCk7XG5cbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChyZXN1bHQucGF0aCwgcGF0aCk7XG5cbiAgICAgICAgICAgIGFzc2VydC5vayghIGF3YWl0IEZpbGVzLmV4aXN0c0FzeW5jKHBhdGgpKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBpdChcIlRlc3Qgd2l0aCBuZXN0ZWQgZGlyc1wiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgY29uc3QgcGF0aCA9IEZpbGVQYXRocy5qb2luKHRtcGRpciwgJ2Rpci13aXRoLW9uZS1maWxlJyk7XG5cbiAgICAgICAgICAgIGF3YWl0IEZpbGVzLm1rZGlyQXN5bmMocGF0aCk7XG4gICAgICAgICAgICBhd2FpdCBGaWxlcy53cml0ZUZpbGVBc3luYyhGaWxlUGF0aHMuam9pbihwYXRoLCAnaGVsbG8udHh0JyksICdoZWxsbycpO1xuICAgICAgICAgICAgYXdhaXQgRmlsZXMubWtkaXJBc3luYyhGaWxlUGF0aHMuam9pbihwYXRoLCAnZGlyMCcpKTtcbiAgICAgICAgICAgIGF3YWl0IEZpbGVzLndyaXRlRmlsZUFzeW5jKEZpbGVQYXRocy5qb2luKHBhdGgsICdkaXIwJywgJ2hlbGxvLnR4dCcpLCAnaGVsbG8nKTtcblxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgRmlsZXMucmVtb3ZlRGlyZWN0b3J5UmVjdXJzaXZlbHlBc3luYyhwYXRoKTtcblxuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKHJlc3VsdC5maWxlcy5sZW5ndGgsIDEpO1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKHJlc3VsdC5kaXJzLmxlbmd0aCwgMSk7XG5cbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChyZXN1bHQucGF0aCwgcGF0aCk7XG5cbiAgICAgICAgICAgIGFzc2VydC5vayghIGF3YWl0IEZpbGVzLmV4aXN0c0FzeW5jKHBhdGgpKTtcblxuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG5cbiAgICBkZXNjcmliZSgnaW50ZWdyYXRlZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCB0bXBkaXI6IHN0cmluZyA9IG9zLnRtcGRpcigpO1xuXG4gICAgICAgIGl0KFwiVGVzdCBkZWxldGUgd2l0aCBtaXNzaW5nIHBhcmVudCBkaXJzXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBjb25zdCBwYXRoID0gRmlsZVBhdGhzLmpvaW4odG1wZGlyLCAnbWlzc2luZycsICdwYXJlbnQnLCAnZXhhbXBsZS50eHQnKTtcblxuICAgICAgICAgICAgYXdhaXQgRmlsZXMuZXhpc3RzQXN5bmMocGF0aCk7XG4gICAgICAgICAgICBhd2FpdCBGaWxlcy5kZWxldGVBc3luYyhwYXRoKTtcblxuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG4gICAgZGVzY3JpYmUoJ3dyaXRlRmlsZUFzeW5jJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHRtcGRpcjogc3RyaW5nID0gb3MudG1wZGlyKCk7XG5cbiAgICAgICAgaXQoXCJiYXNpY1wiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgYXdhaXQgRmlsZXMud3JpdGVGaWxlQXN5bmMoRmlsZVBhdGhzLmpvaW4odG1wZGlyLCBcIndyaXRlLWZpbGUtYXN5bmMudHh0XCIpLCBcImhlbGxvIHdvcmxkXCIpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiZnJvbSBzdHJlYW1cIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGFJbnB1dFBhdGggPSBGaWxlUGF0aHMuam9pbih0bXBkaXIsIFwiZGF0YS1pbnB1dC50eHRcIik7XG4gICAgICAgICAgICBhd2FpdCBGaWxlcy53cml0ZUZpbGVBc3luYyhkYXRhSW5wdXRQYXRoLCBcImhlbGxvIHdvcmxkXCIpO1xuXG4gICAgICAgICAgICBjb25zdCBkYXRhT3V0cHV0UGF0aCA9IEZpbGVQYXRocy5qb2luKHRtcGRpciwgXCJkYXRhLW91dHB1dC50eHRcIik7XG5cbiAgICAgICAgICAgIGF3YWl0IEZpbGVzLndyaXRlRmlsZUFzeW5jKGRhdGFPdXRwdXRQYXRoLCBGaWxlcy5jcmVhdGVSZWFkU3RyZWFtKGRhdGFJbnB1dFBhdGgpKTtcblxuICAgICAgICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgRmlsZXMucmVhZEZpbGVBc3luYyhkYXRhT3V0cHV0UGF0aCk7XG5cbiAgICAgICAgICAgIGFzc2VydC5vayhvdXRwdXQsIFwiaGVsbG8gd29ybGRcIik7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJmcm9tIEZpbGVSZWZcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGFJbnB1dFBhdGggPSBGaWxlUGF0aHMuam9pbih0bXBkaXIsIFwiZGF0YS1pbnB1dC50eHRcIik7XG4gICAgICAgICAgICBhd2FpdCBGaWxlcy53cml0ZUZpbGVBc3luYyhkYXRhSW5wdXRQYXRoLCBcImhlbGxvIHdvcmxkXCIpO1xuXG4gICAgICAgICAgICBjb25zdCBkYXRhT3V0cHV0UGF0aCA9IEZpbGVQYXRocy5qb2luKHRtcGRpciwgXCJkYXRhLW91dHB1dC50eHRcIik7XG5cbiAgICAgICAgICAgIGNvbnN0IGZpbGVSZWY6IEZpbGVIYW5kbGUgPSB7cGF0aDogZGF0YUlucHV0UGF0aH07XG5cbiAgICAgICAgICAgIGF3YWl0IEZpbGVzLndyaXRlRmlsZUFzeW5jKGRhdGFPdXRwdXRQYXRoLCBmaWxlUmVmKTtcblxuICAgICAgICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgRmlsZXMucmVhZEZpbGVBc3luYyhkYXRhT3V0cHV0UGF0aCk7XG5cbiAgICAgICAgICAgIGFzc2VydC5vayhvdXRwdXQsIFwiaGVsbG8gd29ybGRcIik7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdyZWFkRmlsZUFzeW5jJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHRtcGRpcjogc3RyaW5nID0gb3MudG1wZGlyKCk7XG5cbiAgICAgICAgaXQoXCJiYXNpY1wiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgY29uc3QgcGF0aCA9IEZpbGVQYXRocy5qb2luKHRtcGRpciwgXCJ3cml0ZS1maWxlLWFzeW5jLnR4dFwiKTtcblxuICAgICAgICAgICAgYXdhaXQgRmlsZXMud3JpdGVGaWxlQXN5bmMocGF0aCwgXCJoZWxsbyB3b3JsZFwiKTtcblxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IEZpbGVzLnJlYWRGaWxlQXN5bmMocGF0aCk7XG5cbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChkYXRhLnRvU3RyaW5nKCd1dGY4JyksIFwiaGVsbG8gd29ybGRcIik7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgeGl0KFwibWlzc2luZyBmaWxlXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBjb25zdCBtaXNzaW5nUGF0aCA9IFwidGhpcy1pcy1hLW1pc3NpbmctcGF0aC50eHRcIjtcblxuICAgICAgICAgICAgYXdhaXQgRmlsZXMucmVhZEZpbGVBc3luYyhtaXNzaW5nUGF0aCk7XG5cbiAgICAgICAgICAgIC8vIGZzLnJlYWRGaWxlKG1pc3NpbmdQYXRoLCAoKSA9PiB7fSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZmFpbHNQcm9wZXJseSgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImZhaWxpbmcgcHJvcGVybHkuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgeGl0KFwicHJvcGVyIGV4Y2VwdGlvbiBleGFtcGxlLlwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgYXdhaXQgZmFpbHNQcm9wZXJseSgpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cblxuICAgIGRlc2NyaWJlKCdyZWFkZGlyQXN5bmMnLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBjb25zdCB0bXBkaXI6IHN0cmluZyA9IG9zLnRtcGRpcigpO1xuXG4gICAgICAgIGl0KFwiYmFzaWNcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGZpbGVuYW1lID0gXCJ3cml0ZS1maWxlLWFzeW5jLnR4dFwiO1xuICAgICAgICAgICAgY29uc3QgcGF0aCA9IEZpbGVQYXRocy5qb2luKHRtcGRpciwgZmlsZW5hbWUpO1xuXG4gICAgICAgICAgICBhd2FpdCBGaWxlcy53cml0ZUZpbGVBc3luYyhwYXRoLCBcImhlbGxvIHdvcmxkXCIpO1xuXG4gICAgICAgICAgICBjb25zdCBmaWxlcyA9IGF3YWl0IEZpbGVzLnJlYWRkaXJBc3luYyh0bXBkaXIpO1xuXG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoZmlsZXMuaW5jbHVkZXMoZmlsZW5hbWUpLCB0cnVlKTtcblxuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG4gICAgZGVzY3JpYmUoJ3N0YXRBc3luYycsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGNvbnN0IHRtcGRpcjogc3RyaW5nID0gb3MudG1wZGlyKCk7XG5cbiAgICAgICAgaXQoXCJiYXNpY1wiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgY29uc3QgZmlsZW5hbWUgPSBcIndyaXRlLWZpbGUtYXN5bmMudHh0XCI7XG4gICAgICAgICAgICBjb25zdCBwYXRoID0gRmlsZVBhdGhzLmpvaW4odG1wZGlyLCBmaWxlbmFtZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHN0YXQgPSBhd2FpdCBGaWxlcy5zdGF0QXN5bmMocGF0aCk7XG5cbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChzdGF0ICE9PSBudWxsLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChzdGF0LmlzRmlsZSgpLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChzdGF0LmlzRGlyZWN0b3J5KCksIGZhbHNlKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBpdChcImlzRGlyZWN0b3J5XCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBjb25zdCBzdGF0ID0gYXdhaXQgRmlsZXMuc3RhdEFzeW5jKHRtcGRpcik7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoc3RhdC5pc0RpcmVjdG9yeSgpLCB0cnVlKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICB4aXQoXCJtaXNzaW5nIGZpbGVcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIGFzc2VydC50aHJvdyhhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBGaWxlcy5zdGF0QXN5bmMoRmlsZVBhdGhzLmNyZWF0ZVRlbXBOYW1lKCdpbnZhbGlkLWZpbGUtbmFtZScpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuXG5cbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdjcmVhdGVEaXJBc3luYycsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGNvbnN0IHRtcGRpcjogc3RyaW5nID0gb3MudG1wZGlyKCk7XG5cbiAgICAgICAgaXQoXCJiYXNpY1wiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgY29uc3QgcGF0aCA9IEZpbGVQYXRocy5qb2luKHRtcGRpciwgJ3Rlc3QtY3JlYXRlRGlyQXN5bmMuZGlyJyk7XG5cbiAgICAgICAgICAgIHJlbW92ZURpcmVjdG9yeShwYXRoKTtcblxuICAgICAgICAgICAgYXdhaXQgRmlsZXMuY3JlYXRlRGlyQXN5bmMocGF0aCk7XG5cbiAgICAgICAgICAgIGFzc2VydC5vayhhd2FpdCBGaWxlcy5leGlzdHNBc3luYyhwYXRoKSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHN0YXQgPSBhd2FpdCBGaWxlcy5zdGF0QXN5bmMocGF0aCk7XG5cbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChzdGF0ICE9PSBudWxsLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChzdGF0LmlzRmlsZSgpLCBmYWxzZSk7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoc3RhdC5pc0RpcmVjdG9yeSgpLCB0cnVlKTtcblxuICAgICAgICAgICAgYXdhaXQgRmlsZXMuY3JlYXRlRGlyQXN5bmMocGF0aCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJ0ZXN0IEVFWElTVFwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgLy8gVE9ETyB0ZXN0IHdoYXQgaGFwcGVucyBpZiB3ZSBnZXQgYW4gRUVYSVNUIGluIG1rZGlyIHVzaW5nIG1vY2tzLlxuXG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgnbWtkaXJBc3luYycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCB0bXBkaXI6IHN0cmluZyA9IG9zLnRtcGRpcigpO1xuXG4gICAgICAgIHhpdChcIm5lc3RlZFwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgLy8gdGhpcyBmYWlscyBidXQgYXQgbGVhc3Qgd2Uga3dvdyBpdCBmYWlscy5cblxuICAgICAgICAgICAgY29uc3QgYmFzZURpciA9IEZpbGVQYXRocy5qb2luKHRtcGRpciwgJ2Jhc2Utb2YtbmVzdGVkLWRpcnMnKTtcblxuICAgICAgICAgICAgY29uc3QgbmVzdGVkRGlyUGF0aCA9IEZpbGVQYXRocy5qb2luKHRtcGRpciwgJ2Jhc2Utb2YtbmVzdGVkLWRpcnMnLCAnZmlyc3QnLCAnc2Vjb25kJywgJ3RoaXJkJyk7XG5cbiAgICAgICAgICAgIGF3YWl0IEZpbGVzLnJlbW92ZURpcmVjdG9yeVJlY3Vyc2l2ZWx5QXN5bmMoYmFzZURpcik7XG4gICAgICAgICAgICBhd2FpdCBGaWxlcy5ybWRpckFzeW5jKGJhc2VEaXIpO1xuXG4gICAgICAgICAgICAvLyBhd2FpdCBGaWxlcy5jcmVhdGVEaXJBc3luYyhuZXN0ZWREaXJQYXRoKVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiYmFzaWNcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSBGaWxlUGF0aHMuam9pbih0bXBkaXIsICd0ZXN0LW1rZGlyLmRpcicpO1xuXG4gICAgICAgICAgICByZW1vdmVEaXJlY3RvcnkocGF0aCk7XG5cbiAgICAgICAgICAgIGF3YWl0IEZpbGVzLm1rZGlyQXN5bmMocGF0aCk7XG5cbiAgICAgICAgICAgIGFzc2VydC5vayhhd2FpdCBGaWxlcy5leGlzdHNBc3luYyhwYXRoKSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHN0YXQgPSBhd2FpdCBGaWxlcy5zdGF0QXN5bmMocGF0aCk7XG5cbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChzdGF0ICE9PSBudWxsLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChzdGF0LmlzRmlsZSgpLCBmYWxzZSk7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoc3RhdC5pc0RpcmVjdG9yeSgpLCB0cnVlKTtcblxuICAgICAgICB9KTtcblxuXG4gICAgICAgIGl0KFwidGVzdCBlcnJubyBvbiBzZWNvbmQgY2FsbFwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgY29uc3QgcGF0aCA9IEZpbGVQYXRocy5qb2luKHRtcGRpciwgJ3Rlc3QtbWtkaXItc2Vjb25kLWNhbGwuZGlyJyk7XG5cbiAgICAgICAgICAgIHJlbW92ZURpcmVjdG9yeShwYXRoKTtcblxuICAgICAgICAgICAgYXNzZXJ0Lm9rKCFhd2FpdCBGaWxlcy5leGlzdHNBc3luYyhwYXRoKSk7XG5cbiAgICAgICAgICAgIGF3YWl0IEZpbGVzLm1rZGlyQXN5bmMocGF0aCk7XG5cbiAgICAgICAgICAgIGFzc2VydC5vayhhd2FpdCBGaWxlcy5leGlzdHNBc3luYyhwYXRoKSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHN0YXQgPSBhd2FpdCBGaWxlcy5zdGF0QXN5bmMocGF0aCk7XG5cbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChzdGF0ICE9PSBudWxsLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChzdGF0LmlzRmlsZSgpLCBmYWxzZSk7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoc3RhdC5pc0RpcmVjdG9yeSgpLCB0cnVlKTtcblxuICAgICAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgICAgIGF3YWl0IEZpbGVzLm1rZGlyQXN5bmMocGF0aCk7XG5cbiAgICAgICAgICAgICAgICBhc3NlcnQub2soZmFsc2UsIFwiVGhpcyBzaG91bGQgbm90IGhhdmUgd29ya2VkXCIpO1xuXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKGUuY29kZSwgXCJFRVhJU1RcIik7XG4gICAgICAgICAgICAgICAgYXNzZXJ0Lm9rKGUubWVzc2FnZS5pbmRleE9mKFwiRUVYSVNUOlwiKSA9PT0gMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cblxuICAgIH0pO1xuXG5cbn0pO1xuXG5cbmZ1bmN0aW9uIHJlbW92ZURpcmVjdG9yeShwYXRoOiBzdHJpbmcpIHtcbiAgICByaW1yYWYuc3luYyhwYXRoKTtcbn1cbiJdfQ==