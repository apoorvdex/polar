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
const fs_1 = __importDefault(require("fs"));
const util_1 = require("util");
const Logger_1 = require("../logger/Logger");
const Preconditions_1 = require("../Preconditions");
const FilePaths_1 = require("./FilePaths");
const Providers_1 = require("./Providers");
const TimeDurations_1 = require("./TimeDurations");
const log = Logger_1.Logger.create();
class Promised {
    constructor() {
        this.readFileAsync = util_1.promisify(fs_1.default.readFile);
        this.writeFileAsync = util_1.promisify(fs_1.default.writeFile);
        this.mkdirAsync = util_1.promisify(fs_1.default.mkdir);
        this.accessAsync = util_1.promisify(fs_1.default.access);
        this.statAsync = util_1.promisify(fs_1.default.stat);
        this.unlinkAsync = util_1.promisify(fs_1.default.unlink);
        this.rmdirAsync = util_1.promisify(fs_1.default.rmdir);
        this.readdirAsync = util_1.promisify(fs_1.default.readdir);
        this.realpathAsync = util_1.promisify(fs_1.default.realpath);
        this.copyFileAsync = util_1.promisify(fs_1.default.copyFile);
        this.appendFileAsync = util_1.promisify(fs_1.default.appendFile);
        this.openAsync = util_1.promisify(fs_1.default.open);
        this.closeAsync = util_1.promisify(fs_1.default.close);
        this.fdatasyncAsync = util_1.promisify(fs_1.default.fdatasync);
        this.fsyncAsync = util_1.promisify(fs_1.default.fsync);
        this.linkAsync = util_1.promisify(fs_1.default.link);
    }
}
class Files {
    static recursively(path, listener, aborter = new Aborter(Providers_1.Providers.of(false))) {
        return __awaiter(this, void 0, void 0, function* () {
            aborter.verify();
            if (!(yield this.existsAsync(path))) {
                throw new Error("Path does not exist: " + path);
            }
            Preconditions_1.Preconditions.assertEqual('directory', yield Files.fileType(path), 'Path had invalid type: ' + path);
            aborter.verify();
            const dirEntries = yield this.readdirAsync(path);
            for (const dirEntry of dirEntries) {
                aborter.verify();
                const dirEntryPath = FilePaths_1.FilePaths.join(path, dirEntry);
                const dirEntryType = yield this.fileType(dirEntryPath);
                aborter.verify();
                if (dirEntryType === 'directory') {
                    yield this.recursively(dirEntryPath, listener, aborter);
                }
                else if (dirEntryType === 'file') {
                    yield listener(dirEntryPath);
                }
                else {
                    throw new Error(`Unable to handle dir entry: ${dirEntryPath} of type ${dirEntryType}`);
                }
            }
        });
    }
    static createDirectorySnapshot(path, targetPath, filter = exports.ACCEPT_ALL) {
        return __awaiter(this, void 0, void 0, function* () {
            const files = [];
            const dirs = [];
            const result = Object.freeze({ path, files, dirs });
            if (!(yield this.existsAsync(path))) {
                throw new Error("Path does not exist: " + path);
            }
            if (!filter(path, targetPath)) {
                return result;
            }
            if (!(yield this.existsAsync(targetPath))) {
                yield Files.createDirAsync(targetPath);
            }
            Preconditions_1.Preconditions.assertEqual('directory', yield Files.fileType(path), 'Path had invalid type: ' + path);
            const dirEntries = yield this.readdirAsync(path);
            for (const dirEntry of dirEntries) {
                const dirEntryPath = FilePaths_1.FilePaths.join(path, dirEntry);
                const dirEntryType = yield this.fileType(dirEntryPath);
                const targetFilePath = FilePaths_1.FilePaths.join(targetPath, dirEntry);
                if (dirEntryType === 'directory') {
                    const dirResult = yield this.createDirectorySnapshot(dirEntryPath, targetFilePath, filter);
                    dirs.push(dirResult);
                }
                else if (dirEntryType === 'file') {
                    if (!(yield this.existsAsync(targetFilePath))) {
                        yield this.linkAsync(dirEntryPath, targetFilePath);
                    }
                    files.push(dirEntry);
                }
                else {
                    throw new Error(`Unable to handle dir entry: ${dirEntryPath} of type ${dirEntryType}`);
                }
            }
            return result;
        });
    }
    static removeDirectoryRecursivelyAsync(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const files = [];
            const dirs = [];
            if (!(yield this.existsAsync(path))) {
                return Object.freeze({ path, files, dirs });
            }
            Preconditions_1.Preconditions.assertEqual('directory', yield Files.fileType(path), 'Path had invalid type: ' + path);
            const dirEntries = yield this.readdirAsync(path);
            for (const dirEntry of dirEntries) {
                const dirEntryPath = FilePaths_1.FilePaths.join(path, dirEntry);
                const dirEntryType = yield this.fileType(dirEntryPath);
                if (dirEntryType === 'directory') {
                    const dirResult = yield this.removeDirectoryRecursivelyAsync(dirEntryPath);
                    dirs.push(dirResult);
                }
                else if (dirEntryType === 'file') {
                    yield this.removeAsync(dirEntryPath);
                    files.push(dirEntry);
                }
                else {
                    throw new Error(`Unable to handle dir entry: ${dirEntryPath} of type ${dirEntryType}`);
                }
            }
            yield this.rmdirAsync(path);
            return Object.freeze({ path, files, dirs });
        });
    }
    static fileType(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const stat = yield this.statAsync(path);
            if (stat.isBlockDevice()) {
                return 'block-device';
            }
            else if (stat.isCharacterDevice()) {
                return 'character-device';
            }
            else if (stat.isFIFO()) {
                return 'fifo';
            }
            else if (stat.isSocket()) {
                return 'socket';
            }
            else if (stat.isSymbolicLink()) {
                return 'symbolic-link';
            }
            else if (stat.isFile()) {
                return 'file';
            }
            else if (stat.isDirectory()) {
                return 'directory';
            }
            throw new Error("Unable to determine file type for: " + path);
        });
    }
    static removeAsync(path) {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield this.existsAsync(path)) {
                yield this.unlinkAsync(path);
            }
        });
    }
    static deleteAsync(path) {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield this.existsAsync(path)) {
                yield this.unlinkAsync(path);
                return { path, deleted: true };
            }
            return { path, deleted: false };
        });
    }
    static existsAsync(path) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.statAsync(path)
                    .then(() => {
                    resolve(true);
                })
                    .catch((err) => {
                    if (err.code === 'ENOENT') {
                        resolve(false);
                    }
                    else {
                        reject(err);
                    }
                });
            });
        });
    }
    static createDirSync(dir, mode) {
        const result = {
            dir
        };
        if (fs_1.default.existsSync(dir)) {
            result.exists = true;
        }
        else {
            result.created = true;
            fs_1.default.mkdirSync(dir, mode);
        }
        return result;
    }
    static createDirAsync(dir, mode) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = {
                dir
            };
            if (yield this.existsAsync(dir)) {
                result.exists = true;
            }
            else {
                result.created = true;
                try {
                    yield this.mkdirAsync(dir, mode);
                }
                catch (e) {
                    if (e.code && e.code === 'EEXIST') {
                        result.exists = true;
                    }
                    else {
                        throw e;
                    }
                }
            }
            return result;
        });
    }
    static readFileAsync(path) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.withProperException(() => this.promised.readFileAsync(path));
        });
    }
    static createReadStream(path, options) {
        return fs_1.default.createReadStream(path, options);
    }
    static createWriteStream(path, options) {
        return fs_1.default.createWriteStream(path, options);
    }
    static writeFileAsync(path, data, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            if (data instanceof Buffer || typeof data === 'string') {
                return this.withProperException(() => this.promised.writeFileAsync(path, data, options));
            }
            else if (FileHandles.isFileHandle(data)) {
                const existing = options.existing ? options.existing : 'copy';
                const fileRef = data;
                if (existing === 'link') {
                    if (yield Files.existsAsync(path)) {
                        yield Files.unlinkAsync(path);
                    }
                    const src = fileRef.path;
                    const dest = path;
                    try {
                        yield Files.linkAsync(src, dest);
                        return;
                    }
                    catch (e) {
                        log.warn(`Unable to create hard link from ${src} to ${dest} (reverting to copy)`);
                    }
                }
                Files.createReadStream(fileRef.path).pipe(fs_1.default.createWriteStream(path));
            }
            else {
                const readableStream = data;
                readableStream.pipe(fs_1.default.createWriteStream(path));
            }
        });
    }
    static statAsync(path) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.withProperException(() => this.promised.statAsync(path));
        });
    }
    static mkdirAsync(path, mode) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.withProperException(() => this.promised.mkdirAsync(path, mode));
        });
    }
    static accessAsync(path, mode) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.withProperException(() => this.promised.accessAsync(path, mode));
        });
    }
    static unlinkAsync(path) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.withProperException(() => this.promised.unlinkAsync(path));
        });
    }
    static rmdirAsync(path) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.withProperException(() => this.promised.rmdirAsync(path));
        });
    }
    static linkAsync(existingPath, newPath) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.withProperException(() => this.promised.linkAsync(existingPath, newPath));
        });
    }
    static readdirAsync(path) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.withProperException(() => this.promised.readdirAsync(path));
        });
    }
    static realpathAsync(path) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.withProperException(() => this.promised.realpathAsync(path));
        });
    }
    static copyFileAsync(src, dest, flags) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.withProperException(() => this.promised.copyFileAsync(src, dest, flags));
        });
    }
    static appendFileAsync(path, data, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.withProperException(() => this.promised.appendFileAsync(path, data, options));
        });
    }
    static openAsync(path, flags, mode) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.withProperException(() => this.promised.openAsync(path, flags, mode));
        });
    }
    static closeAsync(fd) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.withProperException(() => this.promised.closeAsync(fd));
        });
    }
    static fdatasyncAsync(fd) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.withProperException(() => this.promised.fdatasyncAsync(fd));
        });
    }
    static fsyncAsync(fd) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.withProperException(() => this.promised.fsyncAsync(fd));
        });
    }
    static withProperException(func) {
        return __awaiter(this, void 0, void 0, function* () {
            const anchor = new Error("anchor");
            try {
                return yield func();
            }
            catch (err) {
                throw this.createProperException(anchor, err);
            }
        });
    }
    static createProperException(err, source) {
        if (err.stack) {
            const stackArr = err.stack.split('\n');
            stackArr.shift();
            stackArr.unshift(source.message);
            source.stack = stackArr.join('\n');
        }
        return source;
    }
}
Files.promised = fs_1.default.readFile ? new Promised() : null;
exports.Files = Files;
class FileHandles {
    static isFileHandle(obj) {
        return typeof obj === 'object' && Preconditions_1.isPresent(obj.path);
    }
}
exports.FileHandles = FileHandles;
exports.ACCEPT_ALL = () => true;
class Aborter {
    constructor(provider) {
        this.provider = provider;
        this.aborted = false;
    }
    hasAborted() {
        return this.provider();
    }
    verify() {
        if (this.hasAborted()) {
            this.aborted = true;
            throw new AbortionError("Operation terminated: ");
        }
    }
    wasMarkedAborted() {
        return this.aborted;
    }
}
exports.Aborter = Aborter;
class Aborters {
    static maxTime(duration = "1m") {
        const durationMS = TimeDurations_1.TimeDurations.toMillis(duration);
        const started = Date.now();
        return new Aborter(() => (Date.now() - started) > durationMS);
    }
}
exports.Aborters = Aborters;
class AbortionError extends Error {
}
exports.AbortionError = AbortionError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGaWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsNENBQXVDO0FBQ3ZDLCtCQUErQjtBQUMvQiw2Q0FBd0M7QUFFeEMsb0RBQTBEO0FBQzFELDJDQUFzQztBQUN0QywyQ0FBc0M7QUFDdEMsbURBQTJEO0FBRTNELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUc1QixNQUFNLFFBQVE7SUFBZDtRQUVXLGtCQUFhLEdBQUcsZ0JBQVMsQ0FBQyxZQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkMsbUJBQWMsR0FBRyxnQkFBUyxDQUFDLFlBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6QyxlQUFVLEdBQUcsZ0JBQVMsQ0FBQyxZQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsZ0JBQVcsR0FBRyxnQkFBUyxDQUFDLFlBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQyxjQUFTLEdBQUcsZ0JBQVMsQ0FBQyxZQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsZ0JBQVcsR0FBRyxnQkFBUyxDQUFDLFlBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQyxlQUFVLEdBQUcsZ0JBQVMsQ0FBQyxZQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsaUJBQVksR0FBRyxnQkFBUyxDQUFDLFlBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQyxrQkFBYSxHQUFHLGdCQUFTLENBQUMsWUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZDLGtCQUFhLEdBQUcsZ0JBQVMsQ0FBQyxZQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkMsb0JBQWUsR0FBRyxnQkFBUyxDQUFDLFlBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzQyxjQUFTLEdBQUcsZ0JBQVMsQ0FBQyxZQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0Is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LE9BQU8sQ0FBQyxXQUF3QixJQUFJO1FBRTlDLE1BQU0sVUFBVSxHQUFHLDZCQUFhLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUUzQixPQUFPLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDO0lBRWxFLENBQUM7Q0FFSjtBQWRELDRCQWNDO0FBRUQsTUFBYSxhQUFjLFNBQVEsS0FBSztDQUV2QztBQUZELHNDQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzLCB7UGF0aExpa2UsIFN0YXRzfSBmcm9tIFwiZnNcIjtcbmltcG9ydCB7cHJvbWlzaWZ5fSBmcm9tICd1dGlsJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCBFcnJub0V4Y2VwdGlvbiA9IE5vZGVKUy5FcnJub0V4Y2VwdGlvbjtcbmltcG9ydCB7aXNQcmVzZW50LCBQcmVjb25kaXRpb25zfSBmcm9tIFwiLi4vUHJlY29uZGl0aW9uc1wiO1xuaW1wb3J0IHtGaWxlUGF0aHN9IGZyb20gXCIuL0ZpbGVQYXRoc1wiO1xuaW1wb3J0IHtQcm92aWRlcnN9IGZyb20gXCIuL1Byb3ZpZGVyc1wiO1xuaW1wb3J0IHtEdXJhdGlvblN0ciwgVGltZUR1cmF0aW9uc30gZnJvbSAnLi9UaW1lRHVyYXRpb25zJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG4vLyBub2luc3BlY3Rpb24gVHNMaW50XG5jbGFzcyBQcm9taXNlZCB7XG5cbiAgICBwdWJsaWMgcmVhZEZpbGVBc3luYyA9IHByb21pc2lmeShmcy5yZWFkRmlsZSk7XG4gICAgcHVibGljIHdyaXRlRmlsZUFzeW5jID0gcHJvbWlzaWZ5KGZzLndyaXRlRmlsZSk7XG4gICAgcHVibGljIG1rZGlyQXN5bmMgPSBwcm9taXNpZnkoZnMubWtkaXIpO1xuICAgIHB1YmxpYyBhY2Nlc3NBc3luYyA9IHByb21pc2lmeShmcy5hY2Nlc3MpO1xuICAgIHB1YmxpYyBzdGF0QXN5bmMgPSBwcm9taXNpZnkoZnMuc3RhdCk7XG4gICAgcHVibGljIHVubGlua0FzeW5jID0gcHJvbWlzaWZ5KGZzLnVubGluayk7XG4gICAgcHVibGljIHJtZGlyQXN5bmMgPSBwcm9taXNpZnkoZnMucm1kaXIpO1xuICAgIHB1YmxpYyByZWFkZGlyQXN5bmMgPSBwcm9taXNpZnkoZnMucmVhZGRpcik7XG4gICAgcHVibGljIHJlYWxwYXRoQXN5bmMgPSBwcm9taXNpZnkoZnMucmVhbHBhdGgpO1xuICAgIHB1YmxpYyBjb3B5RmlsZUFzeW5jID0gcHJvbWlzaWZ5KGZzLmNvcHlGaWxlKTtcbiAgICBwdWJsaWMgYXBwZW5kRmlsZUFzeW5jID0gcHJvbWlzaWZ5KGZzLmFwcGVuZEZpbGUpO1xuICAgIHB1YmxpYyBvcGVuQXN5bmMgPSBwcm9taXNpZnkoZnMub3Blbik7XG4gICAgcHVibGljIGNsb3NlQXN5bmMgPSBwcm9taXNpZnkoZnMuY2xvc2UpO1xuICAgIHB1YmxpYyBmZGF0YXN5bmNBc3luYyA9IHByb21pc2lmeShmcy5mZGF0YXN5bmMpO1xuICAgIHB1YmxpYyBmc3luY0FzeW5jID0gcHJvbWlzaWZ5KGZzLmZzeW5jKTtcbiAgICBwdWJsaWMgbGlua0FzeW5jID0gcHJvbWlzaWZ5KGZzLmxpbmspO1xuXG59XG5cbmV4cG9ydCBjbGFzcyBGaWxlcyB7XG5cbiAgICAvKipcbiAgICAgKiBHbyB0aHJvdWdoIHRoZSBnaXZlbiBkaXJlY3RvcnkgcGF0aCByZWN1cnNpdmVseSBjYWxsIHRoZSBjYWxsYmFja1xuICAgICAqIGZ1bmN0aW9uIGZvciBlYWNoIGZpbGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYWJvcnRlciBJZiB0aGUgYWJvcmRlciByZXR1cm5zIHRydWUgd2UgYWJvcnQgcmVjdXJzaXZlbHkgZm9sbG93aW5nXG4gICAgICogICAgICAgICAgICAgICAgZGlyZWN0b3JpZXMuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyByZWN1cnNpdmVseShwYXRoOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcjogKHBhdGg6IHN0cmluZykgPT4gUHJvbWlzZTx2b2lkPixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFib3J0ZXI6IEFib3J0ZXIgPSBuZXcgQWJvcnRlcihQcm92aWRlcnMub2YoZmFsc2UpKSkge1xuXG5cbiAgICAgICAgYWJvcnRlci52ZXJpZnkoKTtcblxuICAgICAgICBpZiAoISBhd2FpdCB0aGlzLmV4aXN0c0FzeW5jKHBhdGgpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQYXRoIGRvZXMgbm90IGV4aXN0OiBcIiArIHBhdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbWFrZSBzdXJlIHdlJ3JlIGdpdmVuIGEgZGlyZWN0b3J5IGFuZCBub3QgYSBzeW1saW5rLCBjaGFyYWN0ZXJcbiAgICAgICAgLy8gZGV2aWNlLCBldGMuXG4gICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0RXF1YWwoJ2RpcmVjdG9yeScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgRmlsZXMuZmlsZVR5cGUocGF0aCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1BhdGggaGFkIGludmFsaWQgdHlwZTogJyArIHBhdGgpO1xuXG4gICAgICAgIGFib3J0ZXIudmVyaWZ5KCk7XG5cbiAgICAgICAgY29uc3QgZGlyRW50cmllcyA9IGF3YWl0IHRoaXMucmVhZGRpckFzeW5jKHBhdGgpO1xuXG4gICAgICAgIGZvciAoY29uc3QgZGlyRW50cnkgb2YgZGlyRW50cmllcykge1xuXG4gICAgICAgICAgICBhYm9ydGVyLnZlcmlmeSgpO1xuXG4gICAgICAgICAgICBjb25zdCBkaXJFbnRyeVBhdGggPSBGaWxlUGF0aHMuam9pbihwYXRoLCBkaXJFbnRyeSk7XG4gICAgICAgICAgICBjb25zdCBkaXJFbnRyeVR5cGUgPSBhd2FpdCB0aGlzLmZpbGVUeXBlKGRpckVudHJ5UGF0aCk7XG5cbiAgICAgICAgICAgIGFib3J0ZXIudmVyaWZ5KCk7XG5cbiAgICAgICAgICAgIGlmIChkaXJFbnRyeVR5cGUgPT09ICdkaXJlY3RvcnknKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBzaW5jZSB0aGUgYWJvcnRlciBpcyBwYXNzZWQgdGhpcyB3aWxsIHRocm93IGFuZCBleGNlcHRpb24gaWZcbiAgICAgICAgICAgICAgICAvLyBpdCBhYm9ydHNcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnJlY3Vyc2l2ZWx5KGRpckVudHJ5UGF0aCwgbGlzdGVuZXIsIGFib3J0ZXIpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpckVudHJ5VHlwZSA9PT0gJ2ZpbGUnKSB7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBsaXN0ZW5lcihkaXJFbnRyeVBhdGgpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGhhbmRsZSBkaXIgZW50cnk6ICR7ZGlyRW50cnlQYXRofSBvZiB0eXBlICR7ZGlyRW50cnlUeXBlfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIHJlY3Vyc2l2ZSBkaXJlY3Rvcnkgc25hcHNob3Qgb2YgZmlsZXMgdXNpbmcgaGFyZCBsaW5rcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBmaWx0ZXIgQWNjZXB0IGFueSBmaWxlcyB0aGF0IHBhc3MgdGhlIGZpbHRlciBwcmVkaWNhdGUgKHJldHVyblxuICAgICAqICAgICB0cnVlKS5cbiAgICAgKlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgY3JlYXRlRGlyZWN0b3J5U25hcHNob3QocGF0aDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0UGF0aDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBEaXJlY3RvcnlTbmFwc2hvdFByZWRpY2F0ZSA9IEFDQ0VQVF9BTEwpOiBQcm9taXNlPFNuYXBzaG90RmlsZXM+IHtcblxuICAgICAgICAvLyBUT0RPOiBwcm92aWRlIGEgbGlzdGVuZXIgdG9vIHNvIHRoYXQgd2UgY2FuIG1vbml0b3IgcHJvZ3Jlc3MgaW4gdGhlXG4gICAgICAgIC8vIFVJIGFzIHdlbGwuLlxuXG4gICAgICAgIGNvbnN0IGZpbGVzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBjb25zdCBkaXJzOiBTbmFwc2hvdEZpbGVzW10gPSBbXTtcblxuICAgICAgICBjb25zdCByZXN1bHQgPSBPYmplY3QuZnJlZXplKHtwYXRoLCBmaWxlcywgZGlyc30pO1xuXG4gICAgICAgIGlmICghIGF3YWl0IHRoaXMuZXhpc3RzQXN5bmMocGF0aCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhdGggZG9lcyBub3QgZXhpc3Q6IFwiICsgcGF0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoISBmaWx0ZXIocGF0aCwgdGFyZ2V0UGF0aCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoISBhd2FpdCB0aGlzLmV4aXN0c0FzeW5jKHRhcmdldFBhdGgpKSB7XG4gICAgICAgICAgICBhd2FpdCBGaWxlcy5jcmVhdGVEaXJBc3luYyh0YXJnZXRQYXRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSdyZSBnaXZlbiBhIGRpcmVjdG9yeSBhbmQgbm90IGEgc3ltbGluaywgY2hhcmFjdGVyXG4gICAgICAgIC8vIGRldmljZSwgZXRjLlxuICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydEVxdWFsKCdkaXJlY3RvcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IEZpbGVzLmZpbGVUeXBlKHBhdGgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdQYXRoIGhhZCBpbnZhbGlkIHR5cGU6ICcgKyBwYXRoKTtcblxuICAgICAgICBjb25zdCBkaXJFbnRyaWVzID0gYXdhaXQgdGhpcy5yZWFkZGlyQXN5bmMocGF0aCk7XG5cbiAgICAgICAgZm9yIChjb25zdCBkaXJFbnRyeSBvZiBkaXJFbnRyaWVzKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGRpckVudHJ5UGF0aCA9IEZpbGVQYXRocy5qb2luKHBhdGgsIGRpckVudHJ5KTtcbiAgICAgICAgICAgIGNvbnN0IGRpckVudHJ5VHlwZSA9IGF3YWl0IHRoaXMuZmlsZVR5cGUoZGlyRW50cnlQYXRoKTtcblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0RmlsZVBhdGggPSBGaWxlUGF0aHMuam9pbih0YXJnZXRQYXRoLCBkaXJFbnRyeSk7XG5cbiAgICAgICAgICAgIGlmIChkaXJFbnRyeVR5cGUgPT09ICdkaXJlY3RvcnknKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkaXJSZXN1bHQgPSBhd2FpdCB0aGlzLmNyZWF0ZURpcmVjdG9yeVNuYXBzaG90KGRpckVudHJ5UGF0aCwgdGFyZ2V0RmlsZVBhdGgsIGZpbHRlcik7XG4gICAgICAgICAgICAgICAgZGlycy5wdXNoKGRpclJlc3VsdCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlyRW50cnlUeXBlID09PSAnZmlsZScpIHtcblxuICAgICAgICAgICAgICAgIGlmICghIGF3YWl0IHRoaXMuZXhpc3RzQXN5bmModGFyZ2V0RmlsZVBhdGgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMubGlua0FzeW5jKGRpckVudHJ5UGF0aCwgdGFyZ2V0RmlsZVBhdGgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZpbGVzLnB1c2goZGlyRW50cnkpO1xuXG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gaGFuZGxlIGRpciBlbnRyeTogJHtkaXJFbnRyeVBhdGh9IG9mIHR5cGUgJHtkaXJFbnRyeVR5cGV9YCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICB9XG5cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgcmVtb3ZlRGlyZWN0b3J5UmVjdXJzaXZlbHlBc3luYyhwYXRoOiBzdHJpbmcpOiBQcm9taXNlPFJlbW92ZWRGaWxlcz4ge1xuXG4gICAgICAgIGNvbnN0IGZpbGVzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBjb25zdCBkaXJzOiBSZW1vdmVkRmlsZXNbXSA9IFtdO1xuXG4gICAgICAgIGlmICghIGF3YWl0IHRoaXMuZXhpc3RzQXN5bmMocGF0aCkpIHtcbiAgICAgICAgICAgIC8vIHRoaXMgaXNuJ3QgYSBmYWlsdXJlIGFzIHRoZSBmaWxlIGlzIGFscmVhZHkgYWJzZW50XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7cGF0aCwgZmlsZXMsIGRpcnN9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSdyZSBnaXZlbiBhIGRpcmVjdG9yeSBhbmQgbm90IGEgc3ltbGluaywgY2hhcmFjdGVyXG4gICAgICAgIC8vIGRldmljZSwgZXRjLiAgV2UgaGF2ZSB0byBjaGVjayBpbW1lZGlhdGVseSBiZWNhdXNlIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gc3RhcnQgcmVtb3ZpbmcgZmlsZXMgb25seSB0byBmaW5kIG91dCB0aGF0IGl0J3MgcGFydCBvZiBhIHN5bWxpbmsnZFxuICAgICAgICAvLyBkaXJlY3RvcnkuXG4gICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0RXF1YWwoJ2RpcmVjdG9yeScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgRmlsZXMuZmlsZVR5cGUocGF0aCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1BhdGggaGFkIGludmFsaWQgdHlwZTogJyArIHBhdGgpO1xuXG4gICAgICAgIGNvbnN0IGRpckVudHJpZXMgPSBhd2FpdCB0aGlzLnJlYWRkaXJBc3luYyhwYXRoKTtcblxuICAgICAgICBmb3IgKGNvbnN0IGRpckVudHJ5IG9mIGRpckVudHJpZXMpIHtcblxuICAgICAgICAgICAgY29uc3QgZGlyRW50cnlQYXRoID0gRmlsZVBhdGhzLmpvaW4ocGF0aCwgZGlyRW50cnkpO1xuICAgICAgICAgICAgY29uc3QgZGlyRW50cnlUeXBlID0gYXdhaXQgdGhpcy5maWxlVHlwZShkaXJFbnRyeVBhdGgpO1xuXG4gICAgICAgICAgICBpZiAoZGlyRW50cnlUeXBlID09PSAnZGlyZWN0b3J5Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpclJlc3VsdCA9IGF3YWl0IHRoaXMucmVtb3ZlRGlyZWN0b3J5UmVjdXJzaXZlbHlBc3luYyhkaXJFbnRyeVBhdGgpO1xuICAgICAgICAgICAgICAgIGRpcnMucHVzaChkaXJSZXN1bHQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXJFbnRyeVR5cGUgPT09ICdmaWxlJykge1xuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBhIG5vcm1hbCBmaWxlIHJlbW92YWwuXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5yZW1vdmVBc3luYyhkaXJFbnRyeVBhdGgpO1xuICAgICAgICAgICAgICAgIGZpbGVzLnB1c2goZGlyRW50cnkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBoYW5kbGUgZGlyIGVudHJ5OiAke2RpckVudHJ5UGF0aH0gb2YgdHlwZSAke2RpckVudHJ5VHlwZX1gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gbm93IHJlbW92ZSB0aGUgZGlyZWN0b3J5IHdlJ3ZlIGJlZW4gZ2l2ZW4uXG4gICAgICAgIGF3YWl0IHRoaXMucm1kaXJBc3luYyhwYXRoKTtcblxuICAgICAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7cGF0aCwgZmlsZXMsIGRpcnN9KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZmlsZVR5cGUocGF0aDogc3RyaW5nKTogUHJvbWlzZTxGaWxlVHlwZT4ge1xuXG4gICAgICAgIGNvbnN0IHN0YXQgPSBhd2FpdCB0aGlzLnN0YXRBc3luYyhwYXRoKTtcblxuICAgICAgICBpZiAoc3RhdC5pc0Jsb2NrRGV2aWNlKCkpIHtcbiAgICAgICAgICAgIHJldHVybiAnYmxvY2stZGV2aWNlJztcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0LmlzQ2hhcmFjdGVyRGV2aWNlKCkpIHtcbiAgICAgICAgICAgIHJldHVybiAnY2hhcmFjdGVyLWRldmljZSc7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdC5pc0ZJRk8oKSkge1xuICAgICAgICAgICAgcmV0dXJuICdmaWZvJztcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0LmlzU29ja2V0KCkpIHtcbiAgICAgICAgICAgIHJldHVybiAnc29ja2V0JztcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0LmlzU3ltYm9saWNMaW5rKCkpIHtcbiAgICAgICAgICAgIHJldHVybiAnc3ltYm9saWMtbGluayc7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdC5pc0ZpbGUoKSkge1xuICAgICAgICAgICAgcmV0dXJuICdmaWxlJztcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0LmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgICAgIHJldHVybiAnZGlyZWN0b3J5JztcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBkZXRlcm1pbmUgZmlsZSB0eXBlIGZvcjogXCIgKyBwYXRoKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqICBSZW1vdmUgYSBmaWxlLCB3aGV0aGVyIGl0IGlzIHByZXNlbnQgb3Igbm90LiAgTWFrZSBzdXJlIGl0J3Mgbm90IHRoZXJlLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgcmVtb3ZlQXN5bmMocGF0aDogc3RyaW5nKSB7XG5cbiAgICAgICAgaWYgKGF3YWl0IHRoaXMuZXhpc3RzQXN5bmMocGF0aCkpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMudW5saW5rQXN5bmMocGF0aCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExpa2UgdW5saW5rQXN5bmMgYnV0IG9ubHkgY2FsbHMgdW5saW5rQXN5bmMgaWYgdGhlIGZpbGUgZXhpc3RzIGFuZCB3ZVxuICAgICAqIHJldHVybiBhIHJlc3VsdCBvYmplY3QgYWJvdXQgdGhlIGFjdGlvbiBwZXJmb3JtZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGF0aCBUaGUgcGF0aCB0byBkZWxldGUuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBkZWxldGVBc3luYyhwYXRoOiBzdHJpbmcpOiBQcm9taXNlPFJlYWRvbmx5PEZpbGVEZWxldGVkPj4ge1xuXG4gICAgICAgIGlmICggYXdhaXQgdGhpcy5leGlzdHNBc3luYyhwYXRoKSkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy51bmxpbmtBc3luYyhwYXRoKTtcbiAgICAgICAgICAgIHJldHVybiB7IHBhdGgsIGRlbGV0ZWQ6IHRydWV9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgcGF0aCwgZGVsZXRlZDogZmFsc2V9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBleGlzdHNBc3luYyhwYXRoOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUsIHJlamVjdCkgPT4gIHtcblxuICAgICAgICAgICAgdGhpcy5zdGF0QXN5bmMocGF0aClcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGxvZy5kZWJ1ZyhcIlBhdGggZXhpc3RzOiBcIiArIHBhdGgpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnI6IEVycm5vRXhjZXB0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ0VOT0VOVCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvZy5kZWJ1ZyhcIlBhdGggZG9lcyBub3QgZXhpc3QgZHVlIHRvIEVOT0VOVDogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGF0aCwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbG9nLmRlYnVnKFwiUmVjZWl2ZWQgZXJyIHdpdGhpbiBleGlzdHNBc3luYzogXCIrIHBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlcnIpOyBzb21lIG90aGVyIGVycm9yXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVEaXJTeW5jKGRpcjogc3RyaW5nLCAgbW9kZT86IG51bWJlciB8IHN0cmluZyB8IHVuZGVmaW5lZCB8IG51bGwpIHtcblxuICAgICAgICBjb25zdCByZXN1bHQ6IENyZWF0ZURpclJlc3VsdCA9IHtcbiAgICAgICAgICAgIGRpclxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKGRpcikpIHtcbiAgICAgICAgICAgIHJlc3VsdC5leGlzdHMgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0LmNyZWF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgZnMubWtkaXJTeW5jKGRpciwgbW9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBDcmVhdGUgYSBkaXIgJ3NhZmVseScgYnkgc2tpcHBpbmcgdGhlIG1rZGlyQXN5bmMgaWYgaXQgYWxyZWFkeSBleGlzdHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGlyXG4gICAgICogQHBhcmFtIG1vZGVcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGNyZWF0ZURpckFzeW5jKGRpcjogc3RyaW5nLCBtb2RlPzogbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbCkge1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdDogQ3JlYXRlRGlyUmVzdWx0ID0ge1xuICAgICAgICAgICAgZGlyXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGF3YWl0IHRoaXMuZXhpc3RzQXN5bmMoZGlyKSkge1xuICAgICAgICAgICAgcmVzdWx0LmV4aXN0cyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQuY3JlYXRlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5ta2RpckFzeW5jKGRpciwgbW9kZSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoZS5jb2RlICYmIGUuY29kZSA9PT0gJ0VFWElTVCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBhY2NlcHRhYmxlIGFzIHRoZSBmaWxlIGFscmVhZHkgZXhpc3RzIGFuZCB0aGVyZVxuICAgICAgICAgICAgICAgICAgICAvLyBtYXkgaGF2ZSBiZWVuIGEgcmFjZSBjcmVhdGluZyBpdC5cbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9mcy5odG1sI2ZzX2ZzX3JlYWRmaWxlX3BhdGhfb3B0aW9uc19jYWxsYmFja1xuICAgICAqXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyByZWFkRmlsZUFzeW5jKHBhdGg6IFBhdGhMaWtlIHwgbnVtYmVyKTogUHJvbWlzZTxCdWZmZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2l0aFByb3BlckV4Y2VwdGlvbigoKSA9PiB0aGlzLnByb21pc2VkLnJlYWRGaWxlQXN5bmMocGF0aCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlUmVhZFN0cmVhbShwYXRoOiBQYXRoTGlrZSwgb3B0aW9ucz86IENyZWF0ZVJlYWRTdHJlYW1PcHRpb25zKTogZnMuUmVhZFN0cmVhbSB7XG4gICAgICAgIHJldHVybiBmcy5jcmVhdGVSZWFkU3RyZWFtKHBhdGgsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlV3JpdGVTdHJlYW0ocGF0aDogUGF0aExpa2UsIG9wdGlvbnM/OiBDcmVhdGVXcml0ZVN0cmVhbU9wdGlvbnMpOiBmcy5Xcml0ZVN0cmVhbSB7XG4gICAgICAgIHJldHVybiBmcy5jcmVhdGVXcml0ZVN0cmVhbShwYXRoLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvLyBodHRwczovL25vZGVqcy5vcmcvYXBpL2ZzLmh0bWwjZnNfZnNfd3JpdGVmaWxlX2ZpbGVfZGF0YV9vcHRpb25zX2NhbGxiYWNrXG5cbiAgICAvKipcbiAgICAgKiBBc3luY2hyb25vdXNseSB3cml0ZXMgZGF0YSB0byBhIGZpbGUsIHJlcGxhY2luZyB0aGUgZmlsZSBpZiBpdCBhbHJlYWR5XG4gICAgICogZXhpc3RzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhdGggQSBwYXRoIHRvIGEgZmlsZS4gSWYgYSBVUkwgaXMgcHJvdmlkZWQsIGl0IG11c3QgdXNlIHRoZVxuICAgICAqIGBmaWxlOmAgcHJvdG9jb2wuIFVSTCBzdXBwb3J0IGlzIF9leHBlcmltZW50YWxfLiBJZiBhIGZpbGUgZGVzY3JpcHRvciBpc1xuICAgICAqIHByb3ZpZGVkLCB0aGUgdW5kZXJseWluZyBmaWxlIHdpbGwgX25vdF8gYmUgY2xvc2VkIGF1dG9tYXRpY2FsbHkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSB0byB3cml0ZS4gSWYgc29tZXRoaW5nIG90aGVyIHRoYW4gYSBCdWZmZXIgb3JcbiAgICAgKiBVaW50OEFycmF5IGlzIHByb3ZpZGVkLCB0aGUgdmFsdWUgaXMgY29lcmNlZCB0byBhIHN0cmluZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBvcHRpb25zIEVpdGhlciB0aGUgZW5jb2RpbmcgZm9yIHRoZSBmaWxlLCBvciBhbiBvYmplY3Qgb3B0aW9uYWxseVxuICAgICAqIHNwZWNpZnlpbmcgdGhlIGVuY29kaW5nLCBmaWxlIG1vZGUsIGFuZCBmbGFnLlxuICAgICAqIElmIGBlbmNvZGluZ2AgaXMgbm90IHN1cHBsaWVkLCB0aGUgZGVmYXVsdCBvZiBgJ3V0ZjgnYCBpcyB1c2VkLlxuICAgICAqIElmIGBtb2RlYCBpcyBub3Qgc3VwcGxpZWQsIHRoZSBkZWZhdWx0IG9mIGAwbzY2NmAgaXMgdXNlZC5cbiAgICAgKiBJZiBgbW9kZWAgaXMgYSBzdHJpbmcsIGl0IGlzIHBhcnNlZCBhcyBhbiBvY3RhbCBpbnRlZ2VyLlxuICAgICAqIElmIGBmbGFnYCBpcyBub3Qgc3VwcGxpZWQsIHRoZSBkZWZhdWx0IG9mIGAndydgIGlzIHVzZWQuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyB3cml0ZUZpbGVBc3luYyhwYXRoOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBGaWxlSGFuZGxlIHwgTm9kZUpTLlJlYWRhYmxlU3RyZWFtIHwgQnVmZmVyIHwgc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogV3JpdGVGaWxlQXN5bmNPcHRpb25zID0ge30pIHtcblxuXG4gICAgICAgIGlmIChkYXRhIGluc3RhbmNlb2YgQnVmZmVyIHx8IHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy53aXRoUHJvcGVyRXhjZXB0aW9uKCgpID0+IHRoaXMucHJvbWlzZWQud3JpdGVGaWxlQXN5bmMocGF0aCwgZGF0YSwgb3B0aW9ucykpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIEZpbGVIYW5kbGVzLmlzRmlsZUhhbmRsZShkYXRhKSApIHtcblxuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBvcHRpb25zLmV4aXN0aW5nID8gb3B0aW9ucy5leGlzdGluZyA6ICdjb3B5JztcblxuICAgICAgICAgICAgY29uc3QgZmlsZVJlZiA9IDxGaWxlSGFuZGxlPiBkYXRhO1xuXG4gICAgICAgICAgICBpZiAoZXhpc3RpbmcgPT09ICdsaW5rJykge1xuXG4gICAgICAgICAgICAgICAgLy8gdHJ5IHRvIGNyZWF0ZSBhIGhhcmQgbGluayBmaXJzdCwgdGhlbiByZXZlcnQgdG8gYSByZWd1bGFyXG4gICAgICAgICAgICAgICAgLy8gZmlsZSBjb3B5IGlmIG5lY2Vzc2FyeS5cblxuICAgICAgICAgICAgICAgIGlmIChhd2FpdCBGaWxlcy5leGlzdHNBc3luYyhwYXRoKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpbiB0aGUgbGluayBtb2RlIGFuIGV4aXN0aW5nIGZpbGVzIGhhcyB0byBiZSByZW1vdmVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGJlZm9yZSBpdCBjYW4gYmUgbGlua2VkLiAgTm9ybWFsbHkgd3JpdGVGaWxlQXN5bmMgd291bGRcbiAgICAgICAgICAgICAgICAgICAgLy8gb3ZlcndyaXRlIGV4aXN0aW5nIGZpbGVzLlxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBGaWxlcy51bmxpbmtBc3luYyhwYXRoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzcmMgPSBmaWxlUmVmLnBhdGg7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVzdCA9IHBhdGg7XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBGaWxlcy5saW5rQXN5bmMoc3JjLCBkZXN0KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nLndhcm4oYFVuYWJsZSB0byBjcmVhdGUgaGFyZCBsaW5rIGZyb20gJHtzcmN9IHRvICR7ZGVzdH0gKHJldmVydGluZyB0byBjb3B5KWApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBGaWxlcy5jcmVhdGVSZWFkU3RyZWFtKGZpbGVSZWYucGF0aCkucGlwZShmcy5jcmVhdGVXcml0ZVN0cmVhbShwYXRoKSk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgY29uc3QgcmVhZGFibGVTdHJlYW0gPSA8Tm9kZUpTLlJlYWRhYmxlU3RyZWFtPiBkYXRhO1xuICAgICAgICAgICAgcmVhZGFibGVTdHJlYW0ucGlwZShmcy5jcmVhdGVXcml0ZVN0cmVhbShwYXRoKSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgc3RhdEFzeW5jKHBhdGg6IHN0cmluZyk6IFByb21pc2U8U3RhdHM+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2l0aFByb3BlckV4Y2VwdGlvbigoKSA9PiB0aGlzLnByb21pc2VkLnN0YXRBc3luYyhwYXRoKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBta2RpckFzeW5jKHBhdGg6IHN0cmluZywgbW9kZT86IG51bWJlciB8IHN0cmluZyB8IHVuZGVmaW5lZCB8IG51bGwpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2l0aFByb3BlckV4Y2VwdGlvbigoKSA9PiB0aGlzLnByb21pc2VkLm1rZGlyQXN5bmMocGF0aCwgbW9kZSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgYWNjZXNzQXN5bmMocGF0aDogUGF0aExpa2UsIG1vZGU6IG51bWJlciB8IHVuZGVmaW5lZCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy53aXRoUHJvcGVyRXhjZXB0aW9uKCgpID0+IHRoaXMucHJvbWlzZWQuYWNjZXNzQXN5bmMocGF0aCwgbW9kZSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgdW5saW5rQXN5bmMocGF0aDogUGF0aExpa2UpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2l0aFByb3BlckV4Y2VwdGlvbigoKSA9PiB0aGlzLnByb21pc2VkLnVubGlua0FzeW5jKHBhdGgpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHJtZGlyQXN5bmMocGF0aDogUGF0aExpa2UpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2l0aFByb3BlckV4Y2VwdGlvbigoKSA9PiB0aGlzLnByb21pc2VkLnJtZGlyQXN5bmMocGF0aCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgbGlua0FzeW5jKGV4aXN0aW5nUGF0aDogUGF0aExpa2UsIG5ld1BhdGg6IFBhdGhMaWtlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiB0aGlzLndpdGhQcm9wZXJFeGNlcHRpb24oKCkgPT4gdGhpcy5wcm9taXNlZC5saW5rQXN5bmMoZXhpc3RpbmdQYXRoLCBuZXdQYXRoKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyByZWFkZGlyQXN5bmMocGF0aDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy53aXRoUHJvcGVyRXhjZXB0aW9uKCgpID0+IHRoaXMucHJvbWlzZWQucmVhZGRpckFzeW5jKHBhdGgpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHJlYWxwYXRoQXN5bmMocGF0aDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2l0aFByb3BlckV4Y2VwdGlvbigoKSA9PiB0aGlzLnByb21pc2VkLnJlYWxwYXRoQXN5bmMocGF0aCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgY29weUZpbGVBc3luYyhzcmM6IHN0cmluZywgZGVzdDogc3RyaW5nLCBmbGFncz86IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy53aXRoUHJvcGVyRXhjZXB0aW9uKCgpID0+IHRoaXMucHJvbWlzZWQuY29weUZpbGVBc3luYyhzcmMsIGRlc3QsIGZsYWdzKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBhcHBlbmRGaWxlQXN5bmMocGF0aDogc3RyaW5nIHwgQnVmZmVyIHwgbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHN0cmluZyB8IEJ1ZmZlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPzogQXBwZW5kRmlsZU9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgICAgICByZXR1cm4gdGhpcy53aXRoUHJvcGVyRXhjZXB0aW9uKCgpID0+IHRoaXMucHJvbWlzZWQuYXBwZW5kRmlsZUFzeW5jKHBhdGgsIGRhdGEsIG9wdGlvbnMpKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGZsYWdzIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvZnMuaHRtbCNmc19maWxlX3N5c3RlbV9mbGFnc1xuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgb3BlbkFzeW5jKHBhdGg6IHN0cmluZyB8IEJ1ZmZlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGFnczogc3RyaW5nIHwgbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU/OiBudW1iZXIpOiBQcm9taXNlPG51bWJlcj4ge1xuXG4gICAgICAgIHJldHVybiB0aGlzLndpdGhQcm9wZXJFeGNlcHRpb24oKCkgPT4gdGhpcy5wcm9taXNlZC5vcGVuQXN5bmMocGF0aCwgZmxhZ3MsIG1vZGUpKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBjbG9zZUFzeW5jKGZkOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2l0aFByb3BlckV4Y2VwdGlvbigoKSA9PiB0aGlzLnByb21pc2VkLmNsb3NlQXN5bmMoZmQpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGZkYXRhc3luY0FzeW5jKGZkOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2l0aFByb3BlckV4Y2VwdGlvbigoKSA9PiB0aGlzLnByb21pc2VkLmZkYXRhc3luY0FzeW5jKGZkKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBmc3luY0FzeW5jKGZkOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2l0aFByb3BlckV4Y2VwdGlvbigoKSA9PiB0aGlzLnByb21pc2VkLmZzeW5jQXN5bmMoZmQpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyB3aXRoUHJvcGVyRXhjZXB0aW9uPFQ+KGZ1bmM6ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcblxuICAgICAgICAvLyB0aGUgb25seSB3YXkgdG8gZ2V0IHRoaXMgdG8gd29yayB3aXRoIG5vZGUgaXMgdG8gY3JlYXRlIGFuICdhbmNob3InXG4gICAgICAgIC8vIGV4Y2VwdGlvbiBvbiB0aGUgZW50cnkgYmVmb3JlIHdlIGNhbGwgdGhlIG1ldGhvZC4gVGhlIGRvd25zaWRlIG9mXG4gICAgICAgIC8vIHRoaXMgaXMgdGhhdCBlYWNoIEZTIGNhbGwgY3JlYXRlcyBhbiBleGNlcHRpb24gd2hpY2ggaXMgZXhjZXNzIENQVVxuICAgICAgICAvLyBidXQgaXMgc3RpbGwgYSBmcmFjdGlvbiBvZiB0aGUgYWN0dWFsIElPIHdvcmtsb2FkLlxuICAgICAgICBjb25zdCBhbmNob3IgPSBuZXcgRXJyb3IoXCJhbmNob3JcIik7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBmdW5jKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhyb3cgdGhpcy5jcmVhdGVQcm9wZXJFeGNlcHRpb24oYW5jaG9yLCBlcnIpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBjcmVhdGVQcm9wZXJFeGNlcHRpb24oZXJyOiBFcnJvciwgc291cmNlOiBFcnJub0V4Y2VwdGlvbiApIHtcblxuICAgICAgICAvLyBzdHJpcCB0aGUgZmlyc3QgbGluZSBvZiB0aGUgc3RhY2sgZXJyLCBhbmQgYWRkIHRoZSBtZXNzYWdlIGZyb21cbiAgICAgICAgLy8gc291cmNlLlxuXG4gICAgICAgIGlmIChlcnIuc3RhY2spIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YWNrQXJyID0gZXJyLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgICAgICAgIHN0YWNrQXJyLnNoaWZ0KCk7XG4gICAgICAgICAgICBzdGFja0Fyci51bnNoaWZ0KHNvdXJjZS5tZXNzYWdlKTtcbiAgICAgICAgICAgIHNvdXJjZS5zdGFjayA9IHN0YWNrQXJyLmpvaW4oJ1xcbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICB9XG5cbiAgICAvLyBub2luc3BlY3Rpb24gVHNMaW50XG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgcHJvbWlzZWQgPSBmcy5yZWFkRmlsZSA/IG5ldyBQcm9taXNlZCgpIDogbnVsbCE7XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVEaXJSZXN1bHQge1xuICAgIGRpcjogc3RyaW5nO1xuICAgIGV4aXN0cz86IGJvb2xlYW47XG4gICAgY3JlYXRlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV3JpdGVGaWxlQXN5bmNPcHRpb25zIHtcblxuICAgIHJlYWRvbmx5IGVuY29kaW5nPzogc3RyaW5nIHwgbnVsbDtcblxuICAgIHJlYWRvbmx5IG1vZGU/OiBudW1iZXIgfCBzdHJpbmc7XG5cbiAgICByZWFkb25seSBmbGFnPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogU3RhcnRlZ3kgZm9yIGhvdyB0byBoYW5kbGUgZXhpc3RpbmcgZmlsZXMuICBDb3B5IGlzIGp1c3QgYSBjb3B5IG9mIHRoZVxuICAgICAqIG9yaWdpbmFsIGZpbGUgYnV0IGxpbmsgY3JlYXRlcyBhIGhhcmQgbGluay5cbiAgICAgKi9cbiAgICByZWFkb25seSBleGlzdGluZz86ICdsaW5rJyB8ICdjb3B5JztcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcGVuZEZpbGVPcHRpb25zIHtcbiAgICBlbmNvZGluZz86IHN0cmluZyB8IG51bGw7XG4gICAgbW9kZTogbnVtYmVyO1xuICAgIGZsYWc6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaWxlRGVsZXRlZCB7XG5cbiAgICBwYXRoOiBzdHJpbmc7XG5cbiAgICBkZWxldGVkOiBib29sZWFuO1xuXG59XG5cbmV4cG9ydCB0eXBlIENyZWF0ZVJlYWRTdHJlYW1PcHRpb25zID0gc3RyaW5nIHwge1xuICAgIGZsYWdzPzogc3RyaW5nO1xuICAgIGVuY29kaW5nPzogc3RyaW5nO1xuICAgIGZkPzogbnVtYmVyO1xuICAgIG1vZGU/OiBudW1iZXI7XG4gICAgYXV0b0Nsb3NlPzogYm9vbGVhbjtcbiAgICBzdGFydD86IG51bWJlcjtcbiAgICBlbmQ/OiBudW1iZXI7XG4gICAgaGlnaFdhdGVyTWFyaz86IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIENyZWF0ZVdyaXRlU3RyZWFtT3B0aW9ucyA9IHN0cmluZyB8IHtcbiAgICBmbGFncz86IHN0cmluZztcbiAgICBlbmNvZGluZz86IHN0cmluZztcbiAgICBmZD86IG51bWJlcjtcbiAgICBtb2RlPzogbnVtYmVyO1xuICAgIGF1dG9DbG9zZT86IGJvb2xlYW47XG4gICAgc3RhcnQ/OiBudW1iZXI7XG59O1xuXG4vKipcbiAqIFJlZmVyZW5jZSB0byBhIGxvY2FsIGZpbGUuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRmlsZUhhbmRsZSB7XG4gICAgcGF0aDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgRmlsZUhhbmRsZXMge1xuXG4gICAgcHVibGljIHN0YXRpYyBpc0ZpbGVIYW5kbGUob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIGlzUHJlc2VudChvYmoucGF0aCk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVtb3ZlZEZpbGVzIHtcbiAgICByZWFkb25seSBwYXRoOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgZmlsZXM6IFJlYWRvbmx5QXJyYXk8c3RyaW5nPjtcbiAgICByZWFkb25seSBkaXJzOiBSZWFkb25seUFycmF5PFJlbW92ZWRGaWxlcz47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU25hcHNob3RGaWxlcyB7XG4gICAgcmVhZG9ubHkgcGF0aDogc3RyaW5nO1xuICAgIHJlYWRvbmx5IGZpbGVzOiBSZWFkb25seUFycmF5PHN0cmluZz47XG4gICAgcmVhZG9ubHkgZGlyczogUmVhZG9ubHlBcnJheTxTbmFwc2hvdEZpbGVzPjtcbn1cblxuXG5leHBvcnQgdHlwZSBGaWxlVHlwZSA9ICdmaWxlJyB8ICdkaXJlY3RvcnknIHwgJ2Jsb2NrLWRldmljZScgfFxuICAgICAgICAgICAgICAgICAgICAgICAnY2hhcmFjdGVyLWRldmljZScgfCAnZmlmbycgfCAnc29ja2V0JyB8XG4gICAgICAgICAgICAgICAgICAgICAgICdzeW1ib2xpYy1saW5rJztcblxuZXhwb3J0IHR5cGUgRGlyZWN0b3J5U25hcHNob3RQcmVkaWNhdGUgPSAocGF0aDogc3RyaW5nLCB0YXJnZXRQYXRoOiBzdHJpbmcpID0+IGJvb2xlYW47XG5cbmV4cG9ydCBjb25zdCBBQ0NFUFRfQUxMOiBEaXJlY3RvcnlTbmFwc2hvdFByZWRpY2F0ZSA9ICgpID0+IHRydWU7XG5cbi8qKlxuICogUmV0dXJuIHRydWUgaWYgd2UgYWJvcnRlZCBkdWUgdG8gdXNpbmcgYW4gYWJvcnRlci5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSZWN1cnNpb25SZXN1bHQge1xuICAgIHJlYWRvbmx5IGFib3J0ZWQ6IGJvb2xlYW47XG59XG5cbi8vIEkgZG9uJ3QgY2FyZSBvZiB0aGlzIGNsYXNzIG5hbWUgaXMgcG9saXRpY2FsbHkgaW5jb3JyZWN0LiAgTGV0J3MgYmUgYWR1bHRzXG4vLyBoZXJlXG5leHBvcnQgdHlwZSBBYm9ydGlvblByb3ZpZGVyID0gKCkgPT4gYm9vbGVhbjtcblxuZXhwb3J0IGNsYXNzIEFib3J0ZXIge1xuXG4gICAgcHJpdmF0ZSBhYm9ydGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb3ZpZGVyOiBBYm9ydGlvblByb3ZpZGVyKSB7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGhhc0Fib3J0ZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3ZpZGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVmVyaWZ5IHRoYXQgd2UgaGF2ZW4ndCB5ZXQgYWJvcnRlZFxuICAgICAqL1xuICAgIHB1YmxpYyB2ZXJpZnkoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuaGFzQWJvcnRlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLmFib3J0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEFib3J0aW9uRXJyb3IoXCJPcGVyYXRpb24gdGVybWluYXRlZDogXCIpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdHJ1ZSBpZiBhIGNhbGxlciBhY3R1YWxseSBhYm9ydGVkIGR1cmluZyBvcGVyYXRpb24gaW4gdGhlIHBhc3QuXG4gICAgICogRG9lcyBub3QgcmVmbGVjdCB0aGUgY3VycmVudCBzdGF0ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgd2FzTWFya2VkQWJvcnRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWJvcnRlZDtcbiAgICB9XG5cbn1cblxuXG5leHBvcnQgY2xhc3MgQWJvcnRlcnMge1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIGEgZnVuY3Rpb24gdGhhdCBhYm9ydHMgYWZ0ZXIgYSBnaXZlbiB0aW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgbWF4VGltZShkdXJhdGlvbjogRHVyYXRpb25TdHIgPSBcIjFtXCIpOiBBYm9ydGVyIHtcblxuICAgICAgICBjb25zdCBkdXJhdGlvbk1TID0gVGltZUR1cmF0aW9ucy50b01pbGxpcyhkdXJhdGlvbik7XG4gICAgICAgIGNvbnN0IHN0YXJ0ZWQgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgIHJldHVybiBuZXcgQWJvcnRlcigoKSA9PiAoRGF0ZS5ub3coKSAtIHN0YXJ0ZWQpID4gZHVyYXRpb25NUyk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIEFib3J0aW9uRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG5cbn1cbiJdfQ==