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
const Datastore_1 = require("./Datastore");
const Preconditions_1 = require("../Preconditions");
const Logger_1 = require("../logger/Logger");
const Files_1 = require("../util/Files");
const FilePaths_1 = require("../util/FilePaths");
const Directories_1 = require("./Directories");
const fs_1 = __importDefault(require("fs"));
const os_1 = __importDefault(require("os"));
const Backend_1 = require("./Backend");
const Optional_1 = require("../util/ts/Optional");
const Platforms_1 = require("../util/Platforms");
const DatastoreFiles_1 = require("./DatastoreFiles");
const DatastoreMutation_1 = require("./DatastoreMutation");
const Datastores_1 = require("./Datastores");
const Functions_1 = require("../util/Functions");
const Strings_1 = require("../util/Strings");
const ISODateTimeStrings_1 = require("../metadata/ISODateTimeStrings");
const Stopwatches_1 = require("../util/Stopwatches");
const Prefs_1 = require("../util/prefs/Prefs");
const log = Logger_1.Logger.create();
class DiskDatastore extends Datastore_1.AbstractDatastore {
    constructor() {
        super();
        this.id = 'disk';
        this.directories = new Directories_1.Directories();
        this.dataDir = this.directories.dataDir;
        this.dataDirConfig = this.directories.dataDirConfig;
        this.stashDir = this.directories.stashDir;
        this.filesDir = this.directories.filesDir;
        this.logsDir = this.directories.logsDir;
        this.diskPrefsStore = new DiskPrefsStore(this.directories);
    }
    init(errorListener = Functions_1.NULL_FUNCTION) {
        return __awaiter(this, void 0, void 0, function* () {
            const diskInitResult = yield this.directories.init();
            const doInitInfo = () => __awaiter(this, void 0, void 0, function* () {
                const hasDatastoreInfo = () => __awaiter(this, void 0, void 0, function* () {
                    const datastoreInfo = yield this.info();
                    return datastoreInfo.isPresent();
                });
                if (yield hasDatastoreInfo()) {
                    return;
                }
                const stopwatch = Stopwatches_1.Stopwatches.create();
                const docMetaRefs = yield this.getDocMetaRefs();
                const addedValues = [];
                for (const docMetaRef of docMetaRefs) {
                    const data = yield this.getDocMeta(docMetaRef.fingerprint);
                    if (data) {
                        try {
                            const docMeta = JSON.parse(data);
                            if (docMeta && docMeta.docInfo && docMeta.docInfo.added) {
                                addedValues.push(docMeta.docInfo.added);
                            }
                        }
                        catch (e) {
                            log.warn("Unable to parse doc meta with fingerprint: " + docMetaRef.fingerprint);
                        }
                    }
                }
                const created = addedValues.length > 0 ? addedValues.sort()[0] : ISODateTimeStrings_1.ISODateTimeStrings.create();
                const datastoreInfo = { created };
                const msg = "Writing new datastore info: " + JSON.stringify(datastoreInfo);
                log.info(msg);
                yield this.writeInfo(datastoreInfo);
                log.info(msg + " ... " + stopwatch.stop());
            });
            yield doInitInfo();
            yield this.diskPrefsStore.init();
            return diskInitResult;
        });
    }
    stop() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    contains(fingerprint) {
        return __awaiter(this, void 0, void 0, function* () {
            const docDir = FilePaths_1.FilePaths.join(this.dataDir, fingerprint);
            if (!(yield Files_1.Files.existsAsync(docDir))) {
                return false;
            }
            const statePath = FilePaths_1.FilePaths.join(docDir, 'state.json');
            return yield Files_1.Files.existsAsync(statePath);
        });
    }
    delete(docMetaFileRef, datastoreMutation = new DatastoreMutation_1.DefaultDatastoreMutation()) {
        return __awaiter(this, void 0, void 0, function* () {
            const docDir = FilePaths_1.FilePaths.join(this.dataDir, docMetaFileRef.fingerprint);
            const statePath = FilePaths_1.FilePaths.join(docDir, 'state.json');
            let docPath;
            if (docMetaFileRef.docFile && docMetaFileRef.docFile.name) {
                docPath = FilePaths_1.FilePaths.join(this.directories.stashDir, docMetaFileRef.docFile.name);
            }
            log.info(`Deleting statePath ${statePath} and docPath ${docPath}`);
            const deleteStatePathPromise = Files_1.Files.deleteAsync(statePath);
            const deleteDocPathPromise = docPath !== undefined ? Files_1.Files.deleteAsync(docPath) : Promise.resolve(undefined);
            this.datastoreMutations.handle(Promise.all([deleteStatePathPromise, deleteDocPathPromise]), datastoreMutation, () => true);
            return {
                docMetaFile: yield deleteStatePathPromise,
                dataFile: yield deleteDocPathPromise
            };
        });
    }
    getDocMeta(fingerprint) {
        return __awaiter(this, void 0, void 0, function* () {
            const docDir = FilePaths_1.FilePaths.join(this.dataDir, fingerprint);
            const statePath = FilePaths_1.FilePaths.join(docDir, 'state.json');
            if (!(yield this.contains(fingerprint))) {
                log.error("Datastore does not contain document: ", fingerprint);
                return null;
            }
            const statePathStat = yield Files_1.Files.statAsync(statePath);
            if (!statePathStat.isFile()) {
                log.error("Path is not a file: ", statePath);
                return null;
            }
            const canAccess = yield Files_1.Files.accessAsync(statePath, fs_1.default.constants.R_OK | fs_1.default.constants.W_OK)
                .then(() => true)
                .catch(() => false);
            if (!canAccess) {
                log.error("No access: ", statePath);
                return null;
            }
            const buffer = yield Files_1.Files.readFileAsync(statePath);
            return buffer.toString('utf8');
        });
    }
    writeFile(backend, ref, data, meta = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            DatastoreFiles_1.DatastoreFiles.assertSanitizedFileName(ref);
            const fileReference = this.createFileReference(backend, ref);
            yield Files_1.Files.createDirAsync(fileReference.dir);
            yield Files_1.Files.writeFileAsync(fileReference.path, data, { existing: 'link' });
            yield Files_1.Files.writeFileAsync(fileReference.metaPath, JSON.stringify(meta, null, '  '));
            return this.createDatastoreFile(backend, ref, fileReference);
        });
    }
    getFile(backend, ref) {
        return __awaiter(this, void 0, void 0, function* () {
            DatastoreFiles_1.DatastoreFiles.assertSanitizedFileName(ref);
            const fileReference = this.createFileReference(backend, ref);
            if (yield Files_1.Files.existsAsync(fileReference.path)) {
                const datastoreFile = yield this.createDatastoreFile(backend, ref, fileReference);
                return Optional_1.Optional.of(datastoreFile);
            }
            else {
                return Optional_1.Optional.empty();
            }
        });
    }
    containsFile(backend, ref) {
        DatastoreFiles_1.DatastoreFiles.assertSanitizedFileName(ref);
        const fileReference = this.createFileReference(backend, ref);
        return Files_1.Files.existsAsync(fileReference.path);
    }
    deleteFile(backend, ref) {
        return __awaiter(this, void 0, void 0, function* () {
            DatastoreFiles_1.DatastoreFiles.assertSanitizedFileName(ref);
            const fileReference = this.createFileReference(backend, ref);
            yield Files_1.Files.removeAsync(fileReference.path);
            yield Files_1.Files.removeAsync(fileReference.metaPath);
        });
    }
    write(fingerprint, data, docInfo, datastoreMutation = new DatastoreMutation_1.DefaultDatastoreMutation()) {
        return __awaiter(this, void 0, void 0, function* () {
            Preconditions_1.Preconditions.assertTypeOf(data, "string", "data");
            if (data.length === 0) {
                throw new Error("Invalid data");
            }
            if (data[0] !== '{') {
                throw new Error("Not JSON");
            }
            log.info("Performing sync of content into disk datastore");
            const docDir = FilePaths_1.FilePaths.join(this.dataDir, fingerprint);
            yield Files_1.Files.createDirAsync(docDir);
            log.debug("Calling stat on docDir: " + docDir);
            const stat = yield Files_1.Files.statAsync(docDir);
            if (!stat.isDirectory()) {
                throw new Error("Path is not a directory: " + docDir);
            }
            const statePath = FilePaths_1.FilePaths.join(docDir, "state.json");
            log.info(`Writing data to state file: ${statePath}`);
            const result = Files_1.Files.writeFileAsync(statePath, data, { encoding: 'utf8' });
            this.datastoreMutations.handle(result, datastoreMutation, () => true);
            return result;
        });
    }
    getDocMetaRefs() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(yield Files_1.Files.existsAsync(this.dataDir))) {
                return [];
            }
            const entries = yield Files_1.Files.readdirAsync(this.dataDir);
            const result = [];
            for (const entry of entries) {
                const docMetaDir = FilePaths_1.FilePaths.join(this.dataDir, entry);
                const docMetaDirStat = yield Files_1.Files.statAsync(docMetaDir);
                if (docMetaDirStat.isDirectory()) {
                    const stateFile = FilePaths_1.FilePaths.join(this.dataDir, entry, 'state.json');
                    const exists = yield Files_1.Files.existsAsync(stateFile);
                    if (exists) {
                        result.push({ fingerprint: entry });
                    }
                }
            }
            return result;
        });
    }
    snapshot(docMetaSnapshotEventListener, errorListener = Functions_1.NULL_FUNCTION) {
        return __awaiter(this, void 0, void 0, function* () {
            return Datastores_1.Datastores.createCommittedSnapshot(this, docMetaSnapshotEventListener);
        });
    }
    createBackup() {
        return __awaiter(this, void 0, void 0, function* () {
            const dataDir = this.directories.dataDir;
            const now = new Date();
            const ordYear = now.getUTCFullYear();
            const ordMonth = now.getUTCMonth() + 1;
            const ordDay = now.getUTCDate();
            const year = Strings_1.Strings.lpad(ordYear, '0', 4);
            const month = Strings_1.Strings.lpad(ordMonth, '0', 2);
            const day = Strings_1.Strings.lpad(ordDay, '0', 2);
            const backupDir = FilePaths_1.FilePaths.join(dataDir, `.backup-${year}-${month}-${day}`);
            const acceptPredicate = (path, targetPath) => {
                const result = path.indexOf(".backup-") === -1;
                return result;
            };
            log.notice("Creating backup to: " + backupDir);
            yield Files_1.Files.createDirectorySnapshot(dataDir, backupDir, acceptPredicate);
        });
    }
    addDocMetaSnapshotEventListener(docMetaSnapshotEventListener) {
    }
    info() {
        return __awaiter(this, void 0, void 0, function* () {
            const infoPath = FilePaths_1.FilePaths.join(this.dataDir, 'info.json');
            if (yield Files_1.Files.existsAsync(infoPath)) {
                const data = yield Files_1.Files.readFileAsync(infoPath);
                try {
                    const result = JSON.parse(data.toString('utf-8'));
                    return Optional_1.Optional.of(result);
                }
                catch (e) {
                    yield Files_1.Files.deleteAsync(infoPath);
                    log.warn("Unable to read info.json file.");
                    return Optional_1.Optional.empty();
                }
            }
            return Optional_1.Optional.empty();
        });
    }
    overview() {
        return __awaiter(this, void 0, void 0, function* () {
            const docMetaRefs = yield this.getDocMetaRefs();
            const datastoreInfo = yield this.info();
            const created = datastoreInfo.map(info => info.created).getOrUndefined();
            return { nrDocs: docMetaRefs.length, created };
        });
    }
    writeInfo(datastoreInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            const infoPath = FilePaths_1.FilePaths.join(this.dataDir, 'info.json');
            const json = JSON.stringify(datastoreInfo, null, "  ");
            yield Files_1.Files.writeFileAsync(infoPath, json);
        });
    }
    getPrefs() {
        const diskPrefsStore = this.diskPrefsStore;
        return {
            get() {
                return diskPrefsStore.getPrefs();
            }
        };
    }
    createDatastoreFile(backend, ref, fileReference) {
        return __awaiter(this, void 0, void 0, function* () {
            const fileURL = FilePaths_1.FilePaths.toFileURL(fileReference.path);
            const url = new URL(fileURL);
            let meta = {};
            if (yield Files_1.Files.existsAsync(fileReference.metaPath)) {
                const buff = yield Files_1.Files.readFileAsync(fileReference.metaPath);
                meta = JSON.parse(buff.toString("utf-8"));
            }
            return {
                backend,
                ref,
                url: url.href,
                meta
            };
        });
    }
    createFileReference(backend, ref) {
        let dir;
        if (backend === Backend_1.Backend.STASH) {
            dir = FilePaths_1.FilePaths.join(this.dataDir, backend.toString().toLowerCase());
        }
        else {
            dir = FilePaths_1.FilePaths.join(this.filesDir, backend.toString().toLowerCase());
        }
        const path = FilePaths_1.FilePaths.join(dir, ref.name);
        const metaPath = FilePaths_1.FilePaths.join(dir, ref.name + '.meta');
        return { dir, path, metaPath };
    }
    static getDataDirs() {
        const userHome = this.getUserHome();
        const platform = Platforms_1.Platforms.get();
        return this.getDataDirsForPlatform({ userHome, platform });
    }
    static determineProperDirectory(directorySet) {
        return __awaiter(this, void 0, void 0, function* () {
            for (const path of directorySet.paths) {
                if (yield Files_1.Files.existsAsync(path)) {
                    return path;
                }
            }
            return directorySet.preferredPath;
        });
    }
    static getDataDirsForPlatform(dirRuntime) {
        const { userHome, platform } = dirRuntime;
        switch (platform) {
            case Platforms_1.Platform.WINDOWS: {
                const preferredPath = FilePaths_1.FilePaths.join(userHome, "Polar");
                return {
                    paths: [
                        FilePaths_1.FilePaths.join(userHome, ".polar"),
                        preferredPath
                    ],
                    preferredPath
                };
            }
            case Platforms_1.Platform.LINUX: {
                const preferredPath = FilePaths_1.FilePaths.join(userHome, ".config", "Polar");
                return {
                    paths: [
                        FilePaths_1.FilePaths.join(userHome, ".polar"),
                    ],
                    preferredPath
                };
            }
            case Platforms_1.Platform.MACOS: {
                const preferredPath = FilePaths_1.FilePaths.join(userHome, "Library", "Application Support", "Polar");
                return {
                    paths: [
                        FilePaths_1.FilePaths.join(userHome, ".polar"),
                        preferredPath,
                    ],
                    preferredPath
                };
            }
            default:
                throw new Error("Platform not supported: " + platform);
        }
    }
    static getUserHome() {
        const ENV_NAME = process.platform === 'win32' ? 'USERPROFILE' : 'HOME';
        let result = process.env[ENV_NAME];
        if (!result) {
            result = os_1.default.homedir();
        }
        return result;
    }
}
exports.DiskDatastore = DiskDatastore;
class DiskPrefsStore {
    constructor(directories) {
        this.directories = directories;
        this.prefs = new DiskPrefs(this);
        this.path = FilePaths_1.FilePaths.create(this.directories.configDir, "prefs.json");
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield Files_1.Files.existsAsync(this.path)) {
                log.info("Loaded prefs from: " + this.path);
                const data = yield Files_1.Files.readFileAsync(this.path);
                const prefs = JSON.parse(data.toString("UTF-8"));
                this.prefs.update(prefs);
            }
        });
    }
    getPrefs() {
        return this.prefs;
    }
    commit() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(this.prefs.toDict(), null, "  ");
            yield Files_1.Files.writeFileAsync(this.path, data);
        });
    }
}
exports.DiskPrefsStore = DiskPrefsStore;
class DiskPrefs extends Prefs_1.Prefs {
    constructor(diskPrefsStore) {
        super();
        this.delegate = {};
        this.diskPrefsStore = diskPrefsStore;
    }
    get(key) {
        return Optional_1.Optional.of(this.delegate[key]);
    }
    set(key, value) {
        this.delegate[key] = value;
        this.diskPrefsStore.commit()
            .catch(err => log.error("Unable to write prefs: ", err));
    }
    update(dict) {
        for (const key of Object.keys(dict)) {
            const value = dict[key];
            this.delegate[key] = value;
        }
    }
    toDict() {
        return Object.assign({}, this.delegate);
    }
}
exports.DiskPrefs = DiskPrefs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlza0RhdGFzdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRpc2tEYXRhc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLDJDQVlxQjtBQUNyQixvREFBK0M7QUFDL0MsNkNBQXdDO0FBRXhDLHlDQUEwRTtBQUMxRSxpREFBNEM7QUFDNUMsK0NBQTBDO0FBRTFDLDRDQUFvQjtBQUNwQiw0Q0FBb0I7QUFFcEIsdUNBQWtDO0FBRWxDLGtEQUE2QztBQUU3QyxpREFBc0Q7QUFDdEQscURBQWdEO0FBQ2hELDJEQUFnRjtBQUNoRiw2Q0FBd0M7QUFDeEMsaURBQWdEO0FBQ2hELDZDQUF3QztBQUN4Qyx1RUFBa0U7QUFFbEUscURBQWdEO0FBR2hELCtDQUErRTtBQUUvRSxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSxhQUFjLFNBQVEsNkJBQWlCO0lBa0JoRDtRQUVJLEtBQUssRUFBRSxDQUFDO1FBbEJJLE9BQUUsR0FBRyxNQUFNLENBQUM7UUFzQnhCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7UUFHckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQztRQUN4QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO1FBQ3BELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7UUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBRS9ELENBQUM7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UUFNL0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7SUFDekMsQ0FBQztJQUVNLEdBQUcsQ0FBQyxHQUFXO1FBQ2xCLE9BQU8sbUJBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTSxHQUFHLENBQUMsR0FBVyxFQUFFLEtBQWE7UUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7UUFFM0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUU7YUFDdkIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRWpFLENBQUM7SUFFTSxNQUFNLENBQUMsSUFBd0I7UUFFbEMsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2pDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUM5QjtJQUVMLENBQUM7SUFFTSxNQUFNO1FBQ1QseUJBQVcsSUFBSSxDQUFDLFFBQVEsRUFBRTtJQUM5QixDQUFDO0NBRUo7QUFwQ0QsOEJBb0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBBYnN0cmFjdERhdGFzdG9yZSwgQmluYXJ5RmlsZURhdGEsXG4gICAgRGF0YXN0b3JlLFxuICAgIERlbGV0ZVJlc3VsdCxcbiAgICBEb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyLFxuICAgIEVycm9yTGlzdGVuZXIsXG4gICAgRmlsZU1ldGEsXG4gICAgRmlsZVJlZixcbiAgICBJbml0UmVzdWx0LFxuICAgIFNuYXBzaG90UmVzdWx0LFxuICAgIERhdGFzdG9yZU92ZXJ2aWV3LFxuICAgIERhdGFzdG9yZUluZm8sIERvY01ldGFTbmFwc2hvdEV2ZW50LCBQcmVmc1Byb3ZpZGVyXG59IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7UHJlY29uZGl0aW9uc30gZnJvbSAnLi4vUHJlY29uZGl0aW9ucyc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0RvY01ldGFGaWxlUmVmLCBEb2NNZXRhUmVmfSBmcm9tICcuL0RvY01ldGFSZWYnO1xuaW1wb3J0IHtGaWxlRGVsZXRlZCwgRmlsZUhhbmRsZSwgRmlsZUhhbmRsZXMsIEZpbGVzfSBmcm9tICcuLi91dGlsL0ZpbGVzJztcbmltcG9ydCB7RmlsZVBhdGhzfSBmcm9tICcuLi91dGlsL0ZpbGVQYXRocyc7XG5pbXBvcnQge0RpcmVjdG9yaWVzfSBmcm9tICcuL0RpcmVjdG9yaWVzJztcblxuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBvcyBmcm9tICdvcyc7XG5cbmltcG9ydCB7QmFja2VuZH0gZnJvbSAnLi9CYWNrZW5kJztcbmltcG9ydCB7RG9jRmlsZU1ldGF9IGZyb20gJy4vRG9jRmlsZU1ldGEnO1xuaW1wb3J0IHtPcHRpb25hbH0gZnJvbSAnLi4vdXRpbC90cy9PcHRpb25hbCc7XG5pbXBvcnQge0RvY0luZm99IGZyb20gJy4uL21ldGFkYXRhL0RvY0luZm8nO1xuaW1wb3J0IHtQbGF0Zm9ybSwgUGxhdGZvcm1zfSBmcm9tIFwiLi4vdXRpbC9QbGF0Zm9ybXNcIjtcbmltcG9ydCB7RGF0YXN0b3JlRmlsZXN9IGZyb20gJy4vRGF0YXN0b3JlRmlsZXMnO1xuaW1wb3J0IHtEYXRhc3RvcmVNdXRhdGlvbiwgRGVmYXVsdERhdGFzdG9yZU11dGF0aW9ufSBmcm9tICcuL0RhdGFzdG9yZU11dGF0aW9uJztcbmltcG9ydCB7RGF0YXN0b3Jlc30gZnJvbSAnLi9EYXRhc3RvcmVzJztcbmltcG9ydCB7TlVMTF9GVU5DVElPTn0gZnJvbSAnLi4vdXRpbC9GdW5jdGlvbnMnO1xuaW1wb3J0IHtTdHJpbmdzfSBmcm9tICcuLi91dGlsL1N0cmluZ3MnO1xuaW1wb3J0IHtJU09EYXRlVGltZVN0cmluZ3N9IGZyb20gJy4uL21ldGFkYXRhL0lTT0RhdGVUaW1lU3RyaW5ncyc7XG5pbXBvcnQge0RvY01ldGF9IGZyb20gJy4uL21ldGFkYXRhL0RvY01ldGEnO1xuaW1wb3J0IHtTdG9wd2F0Y2hlc30gZnJvbSAnLi4vdXRpbC9TdG9wd2F0Y2hlcyc7XG5pbXBvcnQge1NldHRpbmdzfSBmcm9tICcuL1NldHRpbmdzJztcbmltcG9ydCB7UHJvdmlkZXJzfSBmcm9tICcuLi91dGlsL1Byb3ZpZGVycyc7XG5pbXBvcnQge0RpY3Rpb25hcnlQcmVmcywgUHJlZnMsIFN0cmluZ1RvU3RyaW5nRGljdH0gZnJvbSAnLi4vdXRpbC9wcmVmcy9QcmVmcyc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIERpc2tEYXRhc3RvcmUgZXh0ZW5kcyBBYnN0cmFjdERhdGFzdG9yZSBpbXBsZW1lbnRzIERhdGFzdG9yZSB7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgaWQgPSAnZGlzayc7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgZGF0YURpcjogc3RyaW5nO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IHN0YXNoRGlyOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgZmlsZXNEaXI6IHN0cmluZztcblxuICAgIHB1YmxpYyByZWFkb25seSBsb2dzRGlyOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgZGF0YURpckNvbmZpZzogRGF0YURpckNvbmZpZztcblxuICAgIHB1YmxpYyByZWFkb25seSBkaXJlY3RvcmllczogRGlyZWN0b3JpZXM7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGRpc2tQcmVmc1N0b3JlOiBEaXNrUHJlZnNTdG9yZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgLy8gVE9ETzogbWlncmF0ZSB0aGlzIHRvIHVzZSBEaXJlY3Rvcmllc1xuXG4gICAgICAgIHRoaXMuZGlyZWN0b3JpZXMgPSBuZXcgRGlyZWN0b3JpZXMoKTtcblxuICAgICAgICAvLyB0aGUgcGF0aCB0byB0aGUgc3Rhc2ggZGlyZWN0b3J5XG4gICAgICAgIHRoaXMuZGF0YURpciA9IHRoaXMuZGlyZWN0b3JpZXMuZGF0YURpcjtcbiAgICAgICAgdGhpcy5kYXRhRGlyQ29uZmlnID0gdGhpcy5kaXJlY3Rvcmllcy5kYXRhRGlyQ29uZmlnO1xuICAgICAgICB0aGlzLnN0YXNoRGlyID0gdGhpcy5kaXJlY3Rvcmllcy5zdGFzaERpcjtcbiAgICAgICAgdGhpcy5maWxlc0RpciA9IHRoaXMuZGlyZWN0b3JpZXMuZmlsZXNEaXI7XG4gICAgICAgIHRoaXMubG9nc0RpciA9IHRoaXMuZGlyZWN0b3JpZXMubG9nc0RpcjtcbiAgICAgICAgdGhpcy5kaXNrUHJlZnNTdG9yZSA9IG5ldyBEaXNrUHJlZnNTdG9yZSh0aGlzLmRpcmVjdG9yaWVzKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBpbml0KGVycm9yTGlzdGVuZXI6IEVycm9yTGlzdGVuZXIgPSBOVUxMX0ZVTkNUSU9OKTogUHJvbWlzZTxEaXNrSW5pdFJlc3VsdD4ge1xuXG4gICAgICAgIGNvbnN0IGRpc2tJbml0UmVzdWx0ID0gYXdhaXQgdGhpcy5kaXJlY3Rvcmllcy5pbml0KCk7XG5cbiAgICAgICAgY29uc3QgZG9Jbml0SW5mbyA9IGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgaGFzRGF0YXN0b3JlSW5mbyA9IGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFzdG9yZUluZm8gPSBhd2FpdCB0aGlzLmluZm8oKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhc3RvcmVJbmZvLmlzUHJlc2VudCgpO1xuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoYXdhaXQgaGFzRGF0YXN0b3JlSW5mbygpKSB7XG4gICAgICAgICAgICAgICAgLy8gd2UncmUgYWxyZWFkeSBkb25lLlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgc3RvcHdhdGNoID0gU3RvcHdhdGNoZXMuY3JlYXRlKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRvY01ldGFSZWZzID0gYXdhaXQgdGhpcy5nZXREb2NNZXRhUmVmcygpO1xuXG4gICAgICAgICAgICBjb25zdCBhZGRlZFZhbHVlczogc3RyaW5nW10gPSBbXTtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBkb2NNZXRhUmVmIG9mIGRvY01ldGFSZWZzKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5nZXREb2NNZXRhKGRvY01ldGFSZWYuZmluZ2VycHJpbnQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcblxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZG9jTWV0YTogRG9jTWV0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2NNZXRhICYmIGRvY01ldGEuZG9jSW5mbyAmJiBkb2NNZXRhLmRvY0luZm8uYWRkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRlZFZhbHVlcy5wdXNoKGRvY01ldGEuZG9jSW5mby5hZGRlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nLndhcm4oXCJVbmFibGUgdG8gcGFyc2UgZG9jIG1ldGEgd2l0aCBmaW5nZXJwcmludDogXCIgKyBkb2NNZXRhUmVmLmZpbmdlcnByaW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZWQgPSBhZGRlZFZhbHVlcy5sZW5ndGggPiAwID8gYWRkZWRWYWx1ZXMuc29ydCgpWzBdIDogSVNPRGF0ZVRpbWVTdHJpbmdzLmNyZWF0ZSgpO1xuXG4gICAgICAgICAgICBjb25zdCBkYXRhc3RvcmVJbmZvOiBEYXRhc3RvcmVJbmZvID0ge2NyZWF0ZWR9O1xuXG4gICAgICAgICAgICBjb25zdCBtc2cgPSBcIldyaXRpbmcgbmV3IGRhdGFzdG9yZSBpbmZvOiBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGFzdG9yZUluZm8pO1xuXG4gICAgICAgICAgICBsb2cuaW5mbyhtc2cpO1xuXG4gICAgICAgICAgICBhd2FpdCB0aGlzLndyaXRlSW5mbyhkYXRhc3RvcmVJbmZvKTtcblxuICAgICAgICAgICAgbG9nLmluZm8obXNnICsgXCIgLi4uIFwiICsgc3RvcHdhdGNoLnN0b3AoKSk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBhd2FpdCBkb0luaXRJbmZvKCk7XG4gICAgICAgIGF3YWl0IHRoaXMuZGlza1ByZWZzU3RvcmUuaW5pdCgpO1xuXG4gICAgICAgIHJldHVybiBkaXNrSW5pdFJlc3VsdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc3RvcCgpIHtcbiAgICAgICAgLy8gbm9vcFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB0cnVlIGlmIHRoZSBEaXNrRGF0YXN0b3JlIGNvbnRhaW5zIGEgZG9jdW1lbnQgZm9yIHRoZSBnaXZlblxuICAgICAqIGZpbmdlcnByaW50LlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBjb250YWlucyhmaW5nZXJwcmludDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG5cbiAgICAgICAgY29uc3QgZG9jRGlyID0gRmlsZVBhdGhzLmpvaW4odGhpcy5kYXRhRGlyLCBmaW5nZXJwcmludCk7XG5cbiAgICAgICAgaWYgKCAhIGF3YWl0IEZpbGVzLmV4aXN0c0FzeW5jKGRvY0RpcikpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN0YXRlUGF0aCA9IEZpbGVQYXRocy5qb2luKGRvY0RpciwgJ3N0YXRlLmpzb24nKTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgRmlsZXMuZXhpc3RzQXN5bmMoc3RhdGVQYXRoKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSB0aGUgRG9jTWV0YSBmaWxlIGFuZCB0aGUgdW5kZXJseWluZyBkb2MgZnJvbSB0aGUgc3Rhc2guXG4gICAgICpcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgZGVsZXRlKGRvY01ldGFGaWxlUmVmOiBEb2NNZXRhRmlsZVJlZixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzdG9yZU11dGF0aW9uOiBEYXRhc3RvcmVNdXRhdGlvbjxib29sZWFuPiA9IG5ldyBEZWZhdWx0RGF0YXN0b3JlTXV0YXRpb24oKSk6XG4gICAgICAgIFByb21pc2U8UmVhZG9ubHk8RGlza0RlbGV0ZVJlc3VsdD4+IHtcblxuICAgICAgICBjb25zdCBkb2NEaXIgPSBGaWxlUGF0aHMuam9pbih0aGlzLmRhdGFEaXIsIGRvY01ldGFGaWxlUmVmLmZpbmdlcnByaW50KTtcbiAgICAgICAgY29uc3Qgc3RhdGVQYXRoID0gRmlsZVBhdGhzLmpvaW4oZG9jRGlyLCAnc3RhdGUuanNvbicpO1xuXG4gICAgICAgIGxldCBkb2NQYXRoOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYgKGRvY01ldGFGaWxlUmVmLmRvY0ZpbGUgJiYgZG9jTWV0YUZpbGVSZWYuZG9jRmlsZS5uYW1lKSB7XG5cbiAgICAgICAgICAgIC8vIEZJWE1FOiByZW1vdmUgdGhpcyB2aWEgZGVsZXRlRmlsZSBOT1QgZGVsZXRlIHNpbmNlIEknbSBzdG9yaW5nXG4gICAgICAgICAgICAvLyBpdCBhcyBhIGJpbmFyeSBmaWxlIG5vdy5cbiAgICAgICAgICAgIGRvY1BhdGggPSBGaWxlUGF0aHMuam9pbih0aGlzLmRpcmVjdG9yaWVzLnN0YXNoRGlyLCBkb2NNZXRhRmlsZVJlZi5kb2NGaWxlLm5hbWUpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBsb2cuaW5mbyhgRGVsZXRpbmcgc3RhdGVQYXRoICR7c3RhdGVQYXRofSBhbmQgZG9jUGF0aCAke2RvY1BhdGh9YCk7XG5cbiAgICAgICAgLy8gVE9ETzogZG9uJ3QgZGVsZXRlIEpVU1QgdGhlIHN0YXRlIGZpbGUgYnV0IGFsc28gdGhlIHBhcmVudCBkaXIgaWYgaXRcbiAgICAgICAgLy8gaXMgZW1wdHkuXG5cbiAgICAgICAgY29uc3QgZGVsZXRlU3RhdGVQYXRoUHJvbWlzZSA9IEZpbGVzLmRlbGV0ZUFzeW5jKHN0YXRlUGF0aCk7XG4gICAgICAgIGNvbnN0IGRlbGV0ZURvY1BhdGhQcm9taXNlID0gZG9jUGF0aCAhPT0gdW5kZWZpbmVkID8gRmlsZXMuZGVsZXRlQXN5bmMoZG9jUGF0aCkgOiBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKTtcblxuICAgICAgICAvLyBub3cgaGFuZGxlIGFsbCB0aGUgcHJvbWlzZXMgd2l0aCB0aGUgZGF0YXN0b3JlIG11dGF0aW9uIHNvIHRoYXQgd2VcbiAgICAgICAgLy8gY2FuIHZlcmlmeSB0aGF0IHdlIHdlcmUgd3JpdHRlbiBhbmQgY29tbWl0dGVkLlxuICAgICAgICB0aGlzLmRhdGFzdG9yZU11dGF0aW9ucy5oYW5kbGUoUHJvbWlzZS5hbGwoWyBkZWxldGVTdGF0ZVBhdGhQcm9taXNlLCBkZWxldGVEb2NQYXRoUHJvbWlzZV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXN0b3JlTXV0YXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB0cnVlKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZG9jTWV0YUZpbGU6IGF3YWl0IGRlbGV0ZVN0YXRlUGF0aFByb21pc2UsXG4gICAgICAgICAgICBkYXRhRmlsZTogYXdhaXQgZGVsZXRlRG9jUGF0aFByb21pc2VcbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgRG9jTWV0YSBvYmplY3Qgd2UgY3VycmVudGx5IGluIHRoZSBkYXRhc3RvcmUgZm9yIHRoaXMgZ2l2ZW5cbiAgICAgKiBmaW5nZXJwcmludCBvciBudWxsIGlmIGl0IGRvZXMgbm90IGV4aXN0LlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBnZXREb2NNZXRhKGZpbmdlcnByaW50OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcblxuICAgICAgICBjb25zdCBkb2NEaXIgPSBGaWxlUGF0aHMuam9pbih0aGlzLmRhdGFEaXIsIGZpbmdlcnByaW50KTtcbiAgICAgICAgY29uc3Qgc3RhdGVQYXRoID0gRmlsZVBhdGhzLmpvaW4oZG9jRGlyLCAnc3RhdGUuanNvbicpO1xuXG4gICAgICAgIGlmICghIGF3YWl0IHRoaXMuY29udGFpbnMoZmluZ2VycHJpbnQpKSB7XG4gICAgICAgICAgICBsb2cuZXJyb3IoXCJEYXRhc3RvcmUgZG9lcyBub3QgY29udGFpbiBkb2N1bWVudDogXCIsIGZpbmdlcnByaW50KTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3RhdGVQYXRoU3RhdCA9IGF3YWl0IEZpbGVzLnN0YXRBc3luYyhzdGF0ZVBhdGgpO1xuXG4gICAgICAgIGlmICggISBzdGF0ZVBhdGhTdGF0LmlzRmlsZSgpICkge1xuICAgICAgICAgICAgbG9nLmVycm9yKFwiUGF0aCBpcyBub3QgYSBmaWxlOiBcIiwgc3RhdGVQYXRoKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbm9pbnNwZWN0aW9uIFRzTGludDpuby1iaXR3aXNlXG4gICAgICAgIGNvbnN0IGNhbkFjY2VzcyA9XG4gICAgICAgICAgICBhd2FpdCBGaWxlcy5hY2Nlc3NBc3luYyhzdGF0ZVBhdGgsIGZzLmNvbnN0YW50cy5SX09LIHwgZnMuY29uc3RhbnRzLldfT0spXG4gICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4gZmFsc2UpO1xuXG4gICAgICAgIGlmICghIGNhbkFjY2Vzcykge1xuICAgICAgICAgICAgbG9nLmVycm9yKFwiTm8gYWNjZXNzOiBcIiwgc3RhdGVQYXRoKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYnVmZmVyID0gYXdhaXQgRmlsZXMucmVhZEZpbGVBc3luYyhzdGF0ZVBhdGgpO1xuXG4gICAgICAgIHJldHVybiBidWZmZXIudG9TdHJpbmcoJ3V0ZjgnKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyB3cml0ZUZpbGUoYmFja2VuZDogQmFja2VuZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogRmlsZVJlZixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IEZpbGVIYW5kbGUgfCBCdWZmZXIgfCBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhOiBGaWxlTWV0YSA9IHt9KTogUHJvbWlzZTxEb2NGaWxlTWV0YT4ge1xuXG4gICAgICAgIERhdGFzdG9yZUZpbGVzLmFzc2VydFNhbml0aXplZEZpbGVOYW1lKHJlZik7XG5cbiAgICAgICAgY29uc3QgZmlsZVJlZmVyZW5jZSA9IHRoaXMuY3JlYXRlRmlsZVJlZmVyZW5jZShiYWNrZW5kLCByZWYpO1xuXG4gICAgICAgIC8vIHRoaXMgd291bGQgY3JlYXRlIHRoZSBwYXJlbnQgZGlyIGZvciB0aGUgZmlsZSB3aGVuIGl0IGRvZXMgbm90IGV4aXN0LlxuICAgICAgICBhd2FpdCBGaWxlcy5jcmVhdGVEaXJBc3luYyhmaWxlUmVmZXJlbmNlLmRpcik7XG5cbiAgICAgICAgYXdhaXQgRmlsZXMud3JpdGVGaWxlQXN5bmMoZmlsZVJlZmVyZW5jZS5wYXRoLCBkYXRhLCB7ZXhpc3Rpbmc6ICdsaW5rJ30pO1xuXG4gICAgICAgIGF3YWl0IEZpbGVzLndyaXRlRmlsZUFzeW5jKGZpbGVSZWZlcmVuY2UubWV0YVBhdGgsIEpTT04uc3RyaW5naWZ5KG1ldGEsIG51bGwsICcgICcpKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVEYXRhc3RvcmVGaWxlKGJhY2tlbmQsIHJlZiwgZmlsZVJlZmVyZW5jZSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0RmlsZShiYWNrZW5kOiBCYWNrZW5kLCByZWY6IEZpbGVSZWYpOiBQcm9taXNlPE9wdGlvbmFsPERvY0ZpbGVNZXRhPj4ge1xuXG4gICAgICAgIERhdGFzdG9yZUZpbGVzLmFzc2VydFNhbml0aXplZEZpbGVOYW1lKHJlZik7XG5cbiAgICAgICAgY29uc3QgZmlsZVJlZmVyZW5jZSA9IHRoaXMuY3JlYXRlRmlsZVJlZmVyZW5jZShiYWNrZW5kLCByZWYpO1xuXG4gICAgICAgIGlmIChhd2FpdCBGaWxlcy5leGlzdHNBc3luYyhmaWxlUmVmZXJlbmNlLnBhdGgpKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhc3RvcmVGaWxlID0gYXdhaXQgdGhpcy5jcmVhdGVEYXRhc3RvcmVGaWxlKGJhY2tlbmQsIHJlZiwgZmlsZVJlZmVyZW5jZSk7XG4gICAgICAgICAgICByZXR1cm4gT3B0aW9uYWwub2YoZGF0YXN0b3JlRmlsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gT3B0aW9uYWwuZW1wdHkoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIGNvbnRhaW5zRmlsZShiYWNrZW5kOiBCYWNrZW5kLCByZWY6IEZpbGVSZWYpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgRGF0YXN0b3JlRmlsZXMuYXNzZXJ0U2FuaXRpemVkRmlsZU5hbWUocmVmKTtcbiAgICAgICAgY29uc3QgZmlsZVJlZmVyZW5jZSA9IHRoaXMuY3JlYXRlRmlsZVJlZmVyZW5jZShiYWNrZW5kLCByZWYpO1xuICAgICAgICByZXR1cm4gRmlsZXMuZXhpc3RzQXN5bmMoZmlsZVJlZmVyZW5jZS5wYXRoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZGVsZXRlRmlsZShiYWNrZW5kOiBCYWNrZW5kLCByZWY6IEZpbGVSZWYpOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgICAgICBEYXRhc3RvcmVGaWxlcy5hc3NlcnRTYW5pdGl6ZWRGaWxlTmFtZShyZWYpO1xuXG4gICAgICAgIGNvbnN0IGZpbGVSZWZlcmVuY2UgPSB0aGlzLmNyZWF0ZUZpbGVSZWZlcmVuY2UoYmFja2VuZCwgcmVmKTtcblxuICAgICAgICBhd2FpdCBGaWxlcy5yZW1vdmVBc3luYyhmaWxlUmVmZXJlbmNlLnBhdGgpO1xuICAgICAgICBhd2FpdCBGaWxlcy5yZW1vdmVBc3luYyhmaWxlUmVmZXJlbmNlLm1ldGFQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXcml0ZSB0aGUgZGF0YXN0b3JlIHRvIGRpc2suXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIHdyaXRlKGZpbmdlcnByaW50OiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgZG9jSW5mbzogRG9jSW5mbyxcbiAgICAgICAgICAgICAgICAgICAgICAgZGF0YXN0b3JlTXV0YXRpb246IERhdGFzdG9yZU11dGF0aW9uPGJvb2xlYW4+ID0gbmV3IERlZmF1bHREYXRhc3RvcmVNdXRhdGlvbigpKSB7XG5cbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnRUeXBlT2YoZGF0YSwgXCJzdHJpbmdcIiwgXCJkYXRhXCIpO1xuXG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBkYXRhXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGFbMF0gIT09ICd7Jykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IEpTT05cIik7XG4gICAgICAgIH1cblxuICAgICAgICBsb2cuaW5mbyhcIlBlcmZvcm1pbmcgc3luYyBvZiBjb250ZW50IGludG8gZGlzayBkYXRhc3RvcmVcIik7XG5cbiAgICAgICAgY29uc3QgZG9jRGlyID0gRmlsZVBhdGhzLmpvaW4odGhpcy5kYXRhRGlyLCBmaW5nZXJwcmludCk7XG5cbiAgICAgICAgYXdhaXQgRmlsZXMuY3JlYXRlRGlyQXN5bmMoZG9jRGlyKTtcblxuICAgICAgICBsb2cuZGVidWcoXCJDYWxsaW5nIHN0YXQgb24gZG9jRGlyOiBcIiArIGRvY0Rpcik7XG4gICAgICAgIGNvbnN0IHN0YXQgPSBhd2FpdCBGaWxlcy5zdGF0QXN5bmMoZG9jRGlyKTtcblxuICAgICAgICBpZiAoISBzdGF0LmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhdGggaXMgbm90IGEgZGlyZWN0b3J5OiBcIiArIGRvY0Rpcik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdGF0ZVBhdGggPSBGaWxlUGF0aHMuam9pbihkb2NEaXIsIFwic3RhdGUuanNvblwiKTtcblxuICAgICAgICBsb2cuaW5mbyhgV3JpdGluZyBkYXRhIHRvIHN0YXRlIGZpbGU6ICR7c3RhdGVQYXRofWApO1xuXG4gICAgICAgIC8vIFRPRE86IGRvbid0IHdyaXRlIGRpcmVjdGx5IHRvIHN0YXRlLmpzb24uLi4gaW5zdGVhZCB3cml0ZSB0b1xuICAgICAgICAvLyBzdGF0ZS5qc29uLm5ldywgdGhlbiBkZWxldGUgc3RhdGUuanNvbiwgdGhlbiBtb3ZlIHN0YXRlLmpzb24ubmV3IHRvXG4gICAgICAgIC8vIHN0YXRlLmpzb24uLiAgVGhpcyB3YXkgd2UgY2FuIGNyZWF0ZSBiYWNrdXBzIHVzaW5nIGhhcmQgbGlua3MgZWFzaWx5LlxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IEZpbGVzLndyaXRlRmlsZUFzeW5jKHN0YXRlUGF0aCwgZGF0YSwge2VuY29kaW5nOiAndXRmOCd9KTtcblxuICAgICAgICB0aGlzLmRhdGFzdG9yZU11dGF0aW9ucy5oYW5kbGUocmVzdWx0LCBkYXRhc3RvcmVNdXRhdGlvbiwgKCkgPT4gdHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBnZXREb2NNZXRhUmVmcygpOiBQcm9taXNlPERvY01ldGFSZWZbXT4ge1xuXG4gICAgICAgIGlmICggISBhd2FpdCBGaWxlcy5leGlzdHNBc3luYyh0aGlzLmRhdGFEaXIpKSB7XG4gICAgICAgICAgICAvLyBubyBkYXRhIGRpciBidXQgdGhpcyBzaG91bGQgcmFyZWx5IGhhcHBlbi5cbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVudHJpZXMgPSBhd2FpdCBGaWxlcy5yZWFkZGlyQXN5bmModGhpcy5kYXRhRGlyKTtcblxuICAgICAgICBjb25zdCByZXN1bHQ6IERvY01ldGFSZWZbXSA9IFtdO1xuXG4gICAgICAgIGZvciAoIGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcblxuICAgICAgICAgICAgY29uc3QgZG9jTWV0YURpciA9IEZpbGVQYXRocy5qb2luKHRoaXMuZGF0YURpciwgZW50cnkpO1xuICAgICAgICAgICAgY29uc3QgZG9jTWV0YURpclN0YXQgPSBhd2FpdCBGaWxlcy5zdGF0QXN5bmMoZG9jTWV0YURpcik7XG5cbiAgICAgICAgICAgIGlmIChkb2NNZXRhRGlyU3RhdC5pc0RpcmVjdG9yeSgpKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZUZpbGUgPSBGaWxlUGF0aHMuam9pbih0aGlzLmRhdGFEaXIsIGVudHJ5LCAnc3RhdGUuanNvbicpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZXhpc3RzID0gYXdhaXQgRmlsZXMuZXhpc3RzQXN5bmMoc3RhdGVGaWxlKTtcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtmaW5nZXJwcmludDogZW50cnl9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc25hcHNob3QoZG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcjogRG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMaXN0ZW5lcjogRXJyb3JMaXN0ZW5lciA9IE5VTExfRlVOQ1RJT04pOiBQcm9taXNlPFNuYXBzaG90UmVzdWx0PiB7XG5cbiAgICAgICAgcmV0dXJuIERhdGFzdG9yZXMuY3JlYXRlQ29tbWl0dGVkU25hcHNob3QodGhpcywgZG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcik7XG5cbiAgICB9XG5cblxuICAgIHB1YmxpYyBhc3luYyBjcmVhdGVCYWNrdXAoKTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICAgICAgY29uc3QgZGF0YURpciA9IHRoaXMuZGlyZWN0b3JpZXMuZGF0YURpcjtcblxuICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgIGNvbnN0IG9yZFllYXIgPSBub3cuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICAgICAgY29uc3Qgb3JkTW9udGggPSBub3cuZ2V0VVRDTW9udGgoKSArIDE7XG4gICAgICAgIGNvbnN0IG9yZERheSA9IG5vdy5nZXRVVENEYXRlKCk7XG5cbiAgICAgICAgY29uc3QgeWVhciA9IFN0cmluZ3MubHBhZChvcmRZZWFyLCAnMCcsIDQpO1xuICAgICAgICBjb25zdCBtb250aCA9IFN0cmluZ3MubHBhZChvcmRNb250aCwgJzAnLCAyKTtcbiAgICAgICAgY29uc3QgZGF5ID0gU3RyaW5ncy5scGFkKG9yZERheSwgJzAnLCAyKTtcblxuICAgICAgICBjb25zdCBiYWNrdXBEaXIgPSBGaWxlUGF0aHMuam9pbihkYXRhRGlyLCBgLmJhY2t1cC0ke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWApO1xuXG4gICAgICAgIGNvbnN0IGFjY2VwdFByZWRpY2F0ZSA9IChwYXRoOiBzdHJpbmcsIHRhcmdldFBhdGg6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcGF0aC5pbmRleE9mKFwiLmJhY2t1cC1cIikgPT09IC0xO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfTtcblxuICAgICAgICBsb2cubm90aWNlKFwiQ3JlYXRpbmcgYmFja3VwIHRvOiBcIiArIGJhY2t1cERpcik7XG5cbiAgICAgICAgYXdhaXQgRmlsZXMuY3JlYXRlRGlyZWN0b3J5U25hcHNob3QoZGF0YURpciwgYmFja3VwRGlyLCBhY2NlcHRQcmVkaWNhdGUpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFkZERvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIoZG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcjogRG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcik6IHZvaWQge1xuICAgICAgICAvLyBub29wIG5vd1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgaW5mbyBmcm9tIHRoZSBkYXRhc3RvcmUuXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIGluZm8oKTogUHJvbWlzZTxPcHRpb25hbDxEYXRhc3RvcmVJbmZvPj4ge1xuXG4gICAgICAgIGNvbnN0IGluZm9QYXRoID0gRmlsZVBhdGhzLmpvaW4odGhpcy5kYXRhRGlyLCAnaW5mby5qc29uJyk7XG5cbiAgICAgICAgaWYgKGF3YWl0IEZpbGVzLmV4aXN0c0FzeW5jKGluZm9QYXRoKSkge1xuXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgRmlsZXMucmVhZEZpbGVBc3luYyhpbmZvUGF0aCk7XG5cbiAgICAgICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSA8RGF0YXN0b3JlSW5mbz4gSlNPTi5wYXJzZShkYXRhLnRvU3RyaW5nKCd1dGYtOCcpKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBPcHRpb25hbC5vZihyZXN1bHQpO1xuXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBkYXRhIGlzIGludmFsaWQgc28gZGVsZXRlIGl0IHNvIGl0J3MgcmUtY3JlYXRlZCBsYXRlclxuICAgICAgICAgICAgICAgIGF3YWl0IEZpbGVzLmRlbGV0ZUFzeW5jKGluZm9QYXRoKTtcblxuICAgICAgICAgICAgICAgIGxvZy53YXJuKFwiVW5hYmxlIHRvIHJlYWQgaW5mby5qc29uIGZpbGUuXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBPcHRpb25hbC5lbXB0eSgpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBPcHRpb25hbC5lbXB0eSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBvdmVydmlldygpOiBQcm9taXNlPERhdGFzdG9yZU92ZXJ2aWV3PiB7XG5cbiAgICAgICAgY29uc3QgZG9jTWV0YVJlZnMgPSBhd2FpdCB0aGlzLmdldERvY01ldGFSZWZzKCk7XG5cbiAgICAgICAgY29uc3QgZGF0YXN0b3JlSW5mbyA9IGF3YWl0IHRoaXMuaW5mbygpO1xuXG4gICAgICAgIGNvbnN0IGNyZWF0ZWQgPSBkYXRhc3RvcmVJbmZvLm1hcChpbmZvID0+IGluZm8uY3JlYXRlZCkuZ2V0T3JVbmRlZmluZWQoKTtcblxuICAgICAgICByZXR1cm4ge25yRG9jczogZG9jTWV0YVJlZnMubGVuZ3RoLCBjcmVhdGVkfTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgd3JpdGVJbmZvKGRhdGFzdG9yZUluZm86IERhdGFzdG9yZUluZm8pIHtcblxuICAgICAgICBjb25zdCBpbmZvUGF0aCA9IEZpbGVQYXRocy5qb2luKHRoaXMuZGF0YURpciwgJ2luZm8uanNvbicpO1xuXG4gICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeShkYXRhc3RvcmVJbmZvLCBudWxsLCBcIiAgXCIpO1xuXG4gICAgICAgIGF3YWl0IEZpbGVzLndyaXRlRmlsZUFzeW5jKGluZm9QYXRoLCBqc29uKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRQcmVmcygpOiBQcmVmc1Byb3ZpZGVyIHtcblxuICAgICAgICBjb25zdCBkaXNrUHJlZnNTdG9yZSA9IHRoaXMuZGlza1ByZWZzU3RvcmU7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGlza1ByZWZzU3RvcmUuZ2V0UHJlZnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgY3JlYXRlRGF0YXN0b3JlRmlsZShiYWNrZW5kOiBCYWNrZW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IEZpbGVSZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVSZWZlcmVuY2U6IERpc2tGaWxlUmVmZXJlbmNlKTogUHJvbWlzZTxEb2NGaWxlTWV0YT4ge1xuXG4gICAgICAgIGNvbnN0IGZpbGVVUkwgPSBGaWxlUGF0aHMudG9GaWxlVVJMKGZpbGVSZWZlcmVuY2UucGF0aCk7XG4gICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoZmlsZVVSTCk7XG5cbiAgICAgICAgbGV0IG1ldGEgPSB7fTtcblxuICAgICAgICBpZiAoYXdhaXQgRmlsZXMuZXhpc3RzQXN5bmMoZmlsZVJlZmVyZW5jZS5tZXRhUGF0aCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmYgPSBhd2FpdCBGaWxlcy5yZWFkRmlsZUFzeW5jKGZpbGVSZWZlcmVuY2UubWV0YVBhdGgpO1xuICAgICAgICAgICAgbWV0YSA9IEpTT04ucGFyc2UoYnVmZi50b1N0cmluZyhcInV0Zi04XCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBiYWNrZW5kLFxuICAgICAgICAgICAgcmVmLFxuICAgICAgICAgICAgdXJsOiB1cmwuaHJlZixcbiAgICAgICAgICAgIG1ldGFcbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlRmlsZVJlZmVyZW5jZShiYWNrZW5kOiBCYWNrZW5kLCByZWY6IEZpbGVSZWYpOiBEaXNrRmlsZVJlZmVyZW5jZSB7XG5cbiAgICAgICAgbGV0IGRpcjtcblxuICAgICAgICBpZiAoYmFja2VuZCA9PT0gQmFja2VuZC5TVEFTSCkge1xuICAgICAgICAgICAgZGlyID0gRmlsZVBhdGhzLmpvaW4odGhpcy5kYXRhRGlyLCBiYWNrZW5kLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaXIgPSBGaWxlUGF0aHMuam9pbih0aGlzLmZpbGVzRGlyLCBiYWNrZW5kLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXRoID0gRmlsZVBhdGhzLmpvaW4oZGlyLCByZWYubmFtZSk7XG4gICAgICAgIGNvbnN0IG1ldGFQYXRoID0gRmlsZVBhdGhzLmpvaW4oZGlyLCByZWYubmFtZSArICcubWV0YScpO1xuXG4gICAgICAgIHJldHVybiB7ZGlyLCBwYXRoLCBtZXRhUGF0aH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldERhdGFEaXJzKCkge1xuXG4gICAgICAgIGNvbnN0IHVzZXJIb21lID0gdGhpcy5nZXRVc2VySG9tZSgpO1xuXG4gICAgICAgIGNvbnN0IHBsYXRmb3JtID0gUGxhdGZvcm1zLmdldCgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmdldERhdGFEaXJzRm9yUGxhdGZvcm0oe3VzZXJIb21lLCBwbGF0Zm9ybX0pO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBkZXRlcm1pbmVQcm9wZXJEaXJlY3RvcnkoZGlyZWN0b3J5U2V0OiBEaXJlY3RvcnlTZXQpOiBQcm9taXNlPHN0cmluZz4ge1xuXG4gICAgICAgIC8vIHNlZSBpZiBhbnkgb2YgdGhlIHBhdGhzIGV4aXN0LCBieSBvcmRlciBhbmQgcHJlZmVyIHRoZSBkaXJlY3Rvcmllc1xuICAgICAgICAvLyB0aGF0IGFscmVhZHkgZXhpc3QuXG4gICAgICAgIGZvciAoY29uc3QgcGF0aCBvZiBkaXJlY3RvcnlTZXQucGF0aHMpIHtcblxuICAgICAgICAgICAgaWYgKGF3YWl0IEZpbGVzLmV4aXN0c0FzeW5jKHBhdGgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIG5vbmUgb2YgdGhlIHBhdGhzIGV4aXN0LCB1c2UgdGhlIHByZWZlcnJlZCBwYXRoLlxuICAgICAgICByZXR1cm4gZGlyZWN0b3J5U2V0LnByZWZlcnJlZFBhdGg7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIGRhdGEgZGlycyBmb3IgYSBnaXZlbiBwbGF0Zm9ybS4gIFRoZXJlIG1pZ2h0IGJlIG11bHRpcGxlXG4gICAgICogbG9jYXRpb25zIHBlciBwbGF0Zm9ybSBkZXBlbmRpbmcgb24gZWFybGllciB2ZXJzaW9ucyBvZiBQb2xhciBzb1xuICAgICAqIHdlIHJldHVybiBhbGwgcG9zc2libGUgZGlyZWN0b3JpZXMgYW5kIHdlIGNhbiB0ZXN0IHdoaWNoIG9uZXMgZXhpc3RcbiAgICAgKiBhbmQgdXNlIHRoZSBwcmVmZXJyZWQgZGlyZWN0b3J5IGlmIG5vbmUgZXhpc3QuXG4gICAgICpcbiAgICAgKiBUaGUgcHJlZmVycmVkIGRhdGEgZGlyZWN0b3JpZXMgYXJlIGFsd2F5cyBpbiBQb2xhci9EYXRhLiAgVGhlIHJlYXNvbiB3ZVxuICAgICAqIGFsd2F5cyBpbmNsdWRlIC9EYXRhIGlzIHRoYXQgRWxlY3Ryb24gbGlrZXMgdG8gY3JlYXRlIGEgZGlyZWN0b3J5IG5hbWVcbiAgICAgKiBmb3IgdGhlIGFwcCBhbmQgc3RvcmUgY2hyb21lIGRhdGEgaW4gdGhhdCBkaXJlY3RvcnkuICBUaGlzIHdheSB0aGVcbiAgICAgKiBQb2xhciBkYXRhIGlzIHNhbmRib3hlZCBpbnRvIGl0cyBvd24gRGF0YSBkaXJlY3Rvcnkgc2VwZXJhdGUgZnJvbSB0aGVcbiAgICAgKiBjaHJvbWl1bSB1c2VyIHByb2ZpbGUgZGF0YS5cbiAgICAgKlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0RGF0YURpcnNGb3JQbGF0Zm9ybShkaXJSdW50aW1lOiBEaXJSdW50aW1lKTogRGlyZWN0b3J5U2V0IHtcblxuICAgICAgICBjb25zdCB7dXNlckhvbWUsIHBsYXRmb3JtfSA9IGRpclJ1bnRpbWU7XG5cbiAgICAgICAgc3dpdGNoIChwbGF0Zm9ybSkge1xuXG4gICAgICAgICAgICBjYXNlIFBsYXRmb3JtLldJTkRPV1M6IHtcblxuICAgICAgICAgICAgICAgIC8vIFRPRE86IGNvbnNpZGVyIHVzaW5nIEFwcERhdGEvTG9jYWwgQlVUIHRoZSBBcHBEYXRhIGlzIGhpZGRlblxuICAgICAgICAgICAgICAgIC8vIG9uIFdpbmRvd3Mgc28gdGhhdCBtaWdodCBpbmNyZWFzZSBzdXBwb3J0IGNvc3RzLlxuXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogY2FuJ3QgdXNlIFBvbGFyL0RhdGEgYXMgaXQgbWlnaHQgaW1wbGVtZW50IGEgYnVnIHdpdGhcbiAgICAgICAgICAgICAgICAvLyB0d28gbGV2ZWwgbmVzdGVkIGRpcnMuXG5cbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBJIGRvbid0IGxpa2UgUG9sYXItRGF0YSBmb3IgdGhlIG5hbWVcblxuICAgICAgICAgICAgICAgIC8vIFRPRE86IEkgY291bGQganVzdCB3cml0ZSB0byB0aGUgYXBwIGRpcmVjdG9yeSB0aGF0IEVsZWN0cm9uXG4gICAgICAgICAgICAgICAgLy8gd2FudHMgbWUgdG8gd3JpdGUgdG8gYW5kIGludG8gYSBEYXRhIGRpcmVjdG9yeSB0aGVyZSBidXRcbiAgICAgICAgICAgICAgICAvLyBJIGRvbid0IGxpa2UgY29tYmluaW5nIHRoZW0uXG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcmVmZXJyZWRQYXRoID0gRmlsZVBhdGhzLmpvaW4odXNlckhvbWUsIFwiUG9sYXJcIik7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBwYXRoczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgRmlsZVBhdGhzLmpvaW4odXNlckhvbWUsIFwiLnBvbGFyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZmVycmVkUGF0aFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBwcmVmZXJyZWRQYXRoXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlIFBsYXRmb3JtLkxJTlVYOiB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcmVmZXJyZWRQYXRoID0gRmlsZVBhdGhzLmpvaW4odXNlckhvbWUsIFwiLmNvbmZpZ1wiLCBcIlBvbGFyXCIpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIEZpbGVQYXRocy5qb2luKHVzZXJIb21lLCBcIi5wb2xhclwiKSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgcHJlZmVycmVkUGF0aFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSBQbGF0Zm9ybS5NQUNPUzoge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJlZmVycmVkUGF0aCA9IEZpbGVQYXRocy5qb2luKHVzZXJIb21lLCBcIkxpYnJhcnlcIiwgXCJBcHBsaWNhdGlvbiBTdXBwb3J0XCIsIFwiUG9sYXJcIik7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBwYXRoczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgRmlsZVBhdGhzLmpvaW4odXNlckhvbWUsIFwiLnBvbGFyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZmVycmVkUGF0aCxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgcHJlZmVycmVkUGF0aFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGF0Zm9ybSBub3Qgc3VwcG9ydGVkOiBcIiArIHBsYXRmb3JtKTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldFVzZXJIb21lKCkge1xuXG4gICAgICAgIGNvbnN0IEVOVl9OQU1FID1cbiAgICAgICAgICAgIHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicgPyAnVVNFUlBST0ZJTEUnIDogJ0hPTUUnO1xuXG4gICAgICAgIGxldCByZXN1bHQgPSBwcm9jZXNzLmVudltFTlZfTkFNRV07XG5cbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IG9zLmhvbWVkaXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG59XG5cbi8qKlxuICogSW5mb3JtYXRpb24gYWJvdXQgdGhlIGRpcmVjdG9yaWVzIHVzZWQgaW4gdGhlIGN1cnJlbnQgcnVudGltZSAvIE9TLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIERpclJ1bnRpbWUge1xuICAgIHJlYWRvbmx5IHVzZXJIb21lOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgcGxhdGZvcm06IFBsYXRmb3JtO1xuXG59XG5cbi8qKlxuICogQSBzZXQgb2YgZGlyZWN0b3JpZXMgZm9yIGEgZ2l2ZW4gcGxhdGZvcm0uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGlyZWN0b3J5U2V0IHtcblxuICAgIC8qKlxuICAgICAqIEFsbCBwYXRocyB0aGF0IG1pZ2h0IGV4aXN0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBhdGhzOiBzdHJpbmdbXTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBwcmVmZXJyZWQgcGF0aCB0byB1c2UgaXMgbm9uZSBjdXJyZW50bHkgZXhpc3QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJlZmVycmVkUGF0aDogc3RyaW5nO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YURpciB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcGF0aCB0byB0aGUgZGF0YSBkaXIuXG4gICAgICovXG4gICAgcGF0aDogc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEhvdyB0aGUgZGF0YSBkaXIgd2FzIGNvbmZpZ3VyZWQuXG4gICAgICovXG4gICAgc3RyYXRlZ3k6IERpclN0cmF0ZWd5O1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YURpckNvbmZpZyB7XG5cbiAgICBwYXRoOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBIb3cgdGhlIGRhdGEgZGlyIHdhcyBjb25maWd1cmVkLlxuICAgICAqL1xuICAgIHN0cmF0ZWd5OiBEaXJTdHJhdGVneTtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERpc2tEZWxldGVSZXN1bHQgZXh0ZW5kcyBEZWxldGVSZXN1bHQge1xuXG4gICAgZG9jTWV0YUZpbGU6IFJlYWRvbmx5PEZpbGVEZWxldGVkPjtcblxuICAgIGRhdGFGaWxlPzogUmVhZG9ubHk8RmlsZURlbGV0ZWQ+O1xuXG59XG5cbnR5cGUgRGlyU3RyYXRlZ3kgPSAnZW52JyB8ICdob21lJyB8ICdtYW51YWwnO1xuXG5pbnRlcmZhY2UgRGlza0ZpbGVSZWZlcmVuY2Uge1xuXG4gICAgLy8gdGhlIGRpciBob2xkaW5nIG91ciBmaWxlcy5cbiAgICBkaXI6IHN0cmluZztcblxuICAgIC8vIHRoZSBmdWxsIHBhdGggdG8gdGhlIGFjdHVhbCBkYXRhIGZpbGUuXG4gICAgcGF0aDogc3RyaW5nO1xuXG4gICAgLy8gdGhlIGZ1bGwgcGF0aCB0byB0aGUgbWV0YWRhdGEgZmlsZSAoZmlsZS5tZXRhKVxuICAgIG1ldGFQYXRoOiBzdHJpbmc7XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBEaXNrSW5pdFJlc3VsdCBleHRlbmRzIEluaXRSZXN1bHQge1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5pdE9wdGlvbnMge1xuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybSBhIHNuYXBzaG90IG9uIGluaXQgaWZcbiAgICAgKi9cbiAgICByZWFkb25seSBpbml0aWFsU25hcHNob3RSZXF1aXJlZDogYm9vbGVhbjtcblxufVxuXG5leHBvcnQgY2xhc3MgRGlza1ByZWZzU3RvcmUge1xuXG4gICAgcHJpdmF0ZSBwcmVmczogRGlza1ByZWZzO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBkaXJlY3RvcmllczogRGlyZWN0b3JpZXM7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHBhdGg6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRpcmVjdG9yaWVzOiBEaXJlY3Rvcmllcykge1xuICAgICAgICB0aGlzLmRpcmVjdG9yaWVzID0gZGlyZWN0b3JpZXM7XG4gICAgICAgIHRoaXMucHJlZnMgPSBuZXcgRGlza1ByZWZzKHRoaXMpO1xuICAgICAgICB0aGlzLnBhdGggPSBGaWxlUGF0aHMuY3JlYXRlKHRoaXMuZGlyZWN0b3JpZXMuY29uZmlnRGlyLCBcInByZWZzLmpzb25cIik7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGluaXQoKSB7XG5cbiAgICAgICAgaWYgKGF3YWl0IEZpbGVzLmV4aXN0c0FzeW5jKHRoaXMucGF0aCkpIHtcbiAgICAgICAgICAgIGxvZy5pbmZvKFwiTG9hZGVkIHByZWZzIGZyb206IFwiICsgdGhpcy5wYXRoKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBGaWxlcy5yZWFkRmlsZUFzeW5jKHRoaXMucGF0aCk7XG4gICAgICAgICAgICBjb25zdCBwcmVmcyA9IEpTT04ucGFyc2UoZGF0YS50b1N0cmluZyhcIlVURi04XCIpKTtcbiAgICAgICAgICAgIHRoaXMucHJlZnMudXBkYXRlKHByZWZzKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIGdldFByZWZzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmVmcztcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY29tbWl0KCk6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh0aGlzLnByZWZzLnRvRGljdCgpLCBudWxsLCBcIiAgXCIpO1xuICAgICAgICBhd2FpdCBGaWxlcy53cml0ZUZpbGVBc3luYyh0aGlzLnBhdGgsIGRhdGEpO1xuXG4gICAgfVxuXG59XG5cbi8qKlxuICogUHJlZnMgb2JqZWN0IGp1c3QgYmFja2VkIGJ5IGEgbG9jYWwgZGljdGlvbmFyeS5cbiAqL1xuZXhwb3J0IGNsYXNzIERpc2tQcmVmcyBleHRlbmRzIFByZWZzIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGVsZWdhdGU6IFN0cmluZ1RvU3RyaW5nRGljdCA9IHt9O1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBkaXNrUHJlZnNTdG9yZTogRGlza1ByZWZzU3RvcmU7XG5cbiAgICBjb25zdHJ1Y3RvcihkaXNrUHJlZnNTdG9yZTogRGlza1ByZWZzU3RvcmUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5kaXNrUHJlZnNTdG9yZSA9IGRpc2tQcmVmc1N0b3JlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQoa2V5OiBzdHJpbmcpOiBPcHRpb25hbDxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIE9wdGlvbmFsLm9mKHRoaXMuZGVsZWdhdGVba2V5XSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmRlbGVnYXRlW2tleV0gPSB2YWx1ZTtcblxuICAgICAgICB0aGlzLmRpc2tQcmVmc1N0b3JlLmNvbW1pdCgpXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihcIlVuYWJsZSB0byB3cml0ZSBwcmVmczogXCIsIGVycikpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZShkaWN0OiBTdHJpbmdUb1N0cmluZ0RpY3QpIHtcblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhkaWN0KSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBkaWN0W2tleV07XG4gICAgICAgICAgICB0aGlzLmRlbGVnYXRlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIHRvRGljdCgpOiBTdHJpbmdUb1N0cmluZ0RpY3Qge1xuICAgICAgICByZXR1cm4gey4uLnRoaXMuZGVsZWdhdGV9O1xuICAgIH1cblxufVxuIl19