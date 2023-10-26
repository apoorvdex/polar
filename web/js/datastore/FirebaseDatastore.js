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
const Logger_1 = require("../logger/Logger");
const DocMetaRef_1 = require("./DocMetaRef");
const Backend_1 = require("./Backend");
const Optional_1 = require("../util/ts/Optional");
const Firestore_1 = require("../firebase/Firestore");
const Preconditions_1 = require("../Preconditions");
const Hashcodes_1 = require("../Hashcodes");
const firebase = __importStar(require("../firebase/lib/firebase"));
const Dictionaries_1 = require("../util/Dictionaries");
const DatastoreMutation_1 = require("./DatastoreMutation");
const Functions_1 = require("../util/Functions");
const DocMetas_1 = require("../metadata/DocMetas");
const Percentages_1 = require("../util/Percentages");
const ProgressTracker_1 = require("../util/ProgressTracker");
const Providers_1 = require("../util/Providers");
const FilePaths_1 = require("../util/FilePaths");
const Files_1 = require("../util/Files");
const SimpleReactor_1 = require("../reactor/SimpleReactor");
const Prefs_1 = require("../util/prefs/Prefs");
const ProgressMessages_1 = require("../ui/progress_bar/ProgressMessages");
const Stopwatches_1 = require("../util/Stopwatches");
const AppRuntime_1 = require("../AppRuntime");
const log = Logger_1.Logger.create();
class FirebaseDatastore extends Datastore_1.AbstractDatastore {
    constructor() {
        super();
        this.id = 'firebase';
        this.enablePersistence = true;
        this.initialized = false;
        this.docMetaSnapshotEventDispatcher = new SimpleReactor_1.SimpleReactor();
    }
    init(errorListener = Functions_1.NULL_FUNCTION, opts = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.initialized) {
                return {};
            }
            this.app = firebase.app();
            this.firestore = yield Firestore_1.Firestore.getInstance({ enablePersistence: this.enablePersistence });
            this.storage = firebase.storage();
            if (!opts.noInitialSnapshot) {
                const snapshotListener = (event) => __awaiter(this, void 0, void 0, function* () { return this.docMetaSnapshotEventDispatcher.dispatchEvent(event); });
                this.primarySnapshot = yield this.snapshot(snapshotListener, errorListener);
            }
            this.initialized = true;
            return {};
        });
    }
    snapshot(docMetaSnapshotEventListener, errorListener = Functions_1.NULL_FUNCTION) {
        return __awaiter(this, void 0, void 0, function* () {
            const uid = this.getUserID();
            const query = this.firestore
                .collection(DatastoreCollection.DOC_INFO)
                .where('uid', '==', uid);
            const batchIDs = {
                written: 0,
                committed: 0
            };
            const onNextForSnapshot = (snapshot) => {
                try {
                    const consistency = this.toConsistency(snapshot);
                    const batchID = batchIDs[consistency];
                    this.handleDocInfoSnapshot(snapshot, docMetaSnapshotEventListener, batchID);
                    batchIDs[consistency]++;
                }
                catch (e) {
                    log.error("Could not handle snapshot: ", e);
                    errorListener(e);
                }
            };
            const onSnapshotError = (err) => {
                log.error("Could not handle snapshot: ", err);
                errorListener(err);
            };
            if (this.preferredSource() === 'cache') {
                try {
                    const cachedSnapshot = yield query.get({ source: 'cache' });
                    onNextForSnapshot(cachedSnapshot);
                }
                catch (e) {
                }
            }
            const unsubscribe = query.onSnapshot({ includeMetadataChanges: true }, onNextForSnapshot, onSnapshotError);
            return {
                unsubscribe
            };
        });
    }
    stop() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.primarySnapshot && this.primarySnapshot.unsubscribe) {
                this.primarySnapshot.unsubscribe();
            }
        });
    }
    contains(fingerprint) {
        return __awaiter(this, void 0, void 0, function* () {
            const docMeta = yield this.getDocMeta(fingerprint);
            return docMeta !== null;
        });
    }
    delete(docMetaFileRef, datastoreMutation = new DatastoreMutation_1.DefaultDatastoreMutation()) {
        return __awaiter(this, void 0, void 0, function* () {
            log.info("delete: ", docMetaFileRef);
            if (docMetaFileRef.docFile && docMetaFileRef.docFile.name) {
                yield this.deleteFile(Backend_1.Backend.STASH, docMetaFileRef.docFile);
            }
            const uid = this.getUserID();
            const id = this.computeDocMetaID(uid, docMetaFileRef.fingerprint);
            const docMetaRef = this.firestore
                .collection(DatastoreCollection.DOC_META)
                .doc(id);
            const docInfoRef = this.firestore
                .collection(DatastoreCollection.DOC_INFO)
                .doc(id);
            try {
                this.handleDatastoreMutations(docMetaRef, datastoreMutation);
                const commitPromise = this.waitForCommit(docMetaRef);
                yield docMetaRef.delete();
                const batch = this.firestore.batch();
                batch.delete(docMetaRef);
                batch.delete(docInfoRef);
                yield batch.commit();
                yield commitPromise;
                return {};
            }
            finally {
            }
        });
    }
    getDocMeta(fingerprint) {
        return __awaiter(this, void 0, void 0, function* () {
            const uid = this.getUserID();
            const id = this.computeDocMetaID(uid, fingerprint);
            const ref = this.firestore.collection(DatastoreCollection.DOC_META).doc(id);
            const createSnapshot = () => __awaiter(this, void 0, void 0, function* () {
                const preferredSource = this.preferredSource();
                if (preferredSource === 'cache') {
                    try {
                        return yield ref.get({ source: this.preferredSource() });
                    }
                    catch (e) {
                        return yield ref.get({ source: 'server' });
                    }
                }
                else {
                    return yield ref.get();
                }
            });
            const snapshot = yield createSnapshot();
            const recordHolder = snapshot.data();
            if (!recordHolder) {
                log.warn("Could not get docMeta with id: " + id);
                return null;
            }
            return recordHolder.value.value;
        });
    }
    writeFile(backend, ref, data, meta = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield this.containsFile(backend, ref)) {
                return (yield this.getFile(backend, ref)).get();
            }
            const storage = this.storage;
            const storagePath = this.computeStoragePath(backend, ref);
            const fileRef = storage.ref().child(storagePath.path);
            let uploadTask;
            const uid = this.getUserID();
            meta = Object.assign({}, meta, { uid, visibility: Visibility.PRIVATE });
            const metadata = { customMetadata: meta };
            if (storagePath.settings) {
                metadata.contentType = storagePath.settings.contentType;
                metadata.cacheControl = storagePath.settings.cacheControl;
            }
            if (typeof data === 'string') {
                uploadTask = fileRef.putString(data, 'raw', metadata);
            }
            else if (data instanceof Blob) {
                uploadTask = fileRef.put(data, metadata);
            }
            else {
                if (Files_1.FileHandles.isFileHandle(data)) {
                    const fileHandle = data;
                    data = yield Files_1.Files.readFileAsync(fileHandle.path);
                }
                uploadTask = fileRef.put(Uint8Array.from(data), metadata);
            }
            const started = Date.now();
            const task = ProgressTracker_1.ProgressTracker.createNonce();
            uploadTask.on('state_changed', (snapshotData) => {
                const snapshot = snapshotData;
                const now = Date.now();
                const duration = now - started;
                const percentage = Percentages_1.Percentages.calculate(snapshot.bytesTransferred, snapshot.totalBytes);
                log.notice('Upload is ' + percentage + '%// done');
                const progress = {
                    id: 'firebase-upload',
                    task,
                    completed: snapshot.bytesTransferred,
                    total: snapshot.totalBytes,
                    duration,
                    progress: percentage
                };
                ProgressMessages_1.ProgressMessages.broadcast(progress);
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED:
                        break;
                    case firebase.storage.TaskState.RUNNING:
                        break;
                }
            });
            const uploadTaskSnapshot = yield uploadTask;
            const downloadURL = uploadTaskSnapshot.downloadURL;
            return {
                backend,
                ref,
                url: downloadURL,
                meta
            };
        });
    }
    getFileMeta(backend, ref, source = 'server') {
        return __awaiter(this, void 0, void 0, function* () {
            const stopwatch = Stopwatches_1.Stopwatches.create();
            const id = this.createFileMetaID(backend, ref);
            try {
                const snapshot = yield this.firestore
                    .collection(DatastoreCollection.DOC_FILE_META)
                    .doc(id)
                    .get({ source });
                const recordHolder = snapshot.data();
                if (!recordHolder) {
                    return Optional_1.Optional.empty();
                }
                return Optional_1.Optional.of(recordHolder.value);
            }
            catch (e) {
                if (source !== 'cache') {
                    throw e;
                }
                return Optional_1.Optional.empty();
            }
        });
    }
    writeFileMeta(backend, ref, docFileMeta) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = this.createFileMetaID(backend, ref);
            const recordHolder = {
                uid: this.getUserID(),
                id,
                visibility: Visibility.PRIVATE,
                value: docFileMeta
            };
            yield this.firestore
                .collection(DatastoreCollection.DOC_FILE_META)
                .doc(id)
                .set(recordHolder);
        });
    }
    deleteFileMeta(backend, ref) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = this.createFileMetaID(backend, ref);
            yield this.firestore
                .collection(DatastoreCollection.DOC_FILE_META)
                .doc(id)
                .delete();
        });
    }
    prefetchFileMeta(backend, ref) {
        return __awaiter(this, void 0, void 0, function* () {
            const fileMeta = yield this.getFileMeta(backend, ref, 'cache');
            if (!fileMeta.isPresent()) {
                yield yield this.getFileMeta(backend, ref, 'server');
            }
            else {
            }
        });
    }
    createFileMetaID(backend, ref) {
        const storagePath = this.computeStoragePath(backend, ref);
        return Hashcodes_1.Hashcodes.create(storagePath.path);
    }
    getFile(backend, ref) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.getFileFromFileMeta(backend, ref);
            if (!result.isPresent()) {
                result = yield this.getFileFromStorage(backend, ref);
                if (result.isPresent()) {
                    const docFileMeta = result.get();
                    if (!docFileMeta.ref.hashcode) {
                        delete docFileMeta.ref.hashcode;
                    }
                    yield this.writeFileMeta(backend, ref, docFileMeta);
                }
                return result;
            }
            else {
                return result;
            }
        });
    }
    getFileFromFileMeta(backend, ref) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getFileMeta(backend, ref, 'cache');
        });
    }
    getFileFromStorage(backend, ref) {
        return __awaiter(this, void 0, void 0, function* () {
            const storage = this.storage;
            const storagePath = this.computeStoragePath(backend, ref);
            const fileRef = storage.ref().child(storagePath.path);
            try {
                const metadata = yield fileRef.getMetadata();
                const url = yield fileRef.getDownloadURL();
                const meta = metadata.customMetadata;
                return Optional_1.Optional.of({ backend, ref, url, meta });
            }
            catch (e) {
                if (e.code === "storage/object-not-found") {
                    return Optional_1.Optional.empty();
                }
                throw e;
            }
        });
    }
    containsFile(backend, ref) {
        return __awaiter(this, void 0, void 0, function* () {
            const storagePath = this.computeStoragePath(backend, ref);
            const storage = this.storage;
            const fileRef = storage.ref().child(storagePath.path);
            try {
                yield fileRef.getMetadata();
                return true;
            }
            catch (e) {
                if (e.code === "storage/object-not-found") {
                    return false;
                }
                throw e;
            }
        });
    }
    deleteFile(backend, ref) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteFileFromStorage = () => __awaiter(this, void 0, void 0, function* () {
                try {
                    const storage = this.storage;
                    const storagePath = this.computeStoragePath(backend, ref);
                    const fileRef = storage.ref().child(storagePath.path);
                    yield fileRef.delete();
                }
                catch (e) {
                    if (e.code === "storage/object-not-found") {
                        return;
                    }
                    throw e;
                }
            });
            yield deleteFileFromStorage();
            yield this.deleteFileMeta(backend, ref);
        });
    }
    write(fingerprint, data, docInfo, datastoreMutation = new DatastoreMutation_1.DefaultDatastoreMutation()) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                docInfo = Object.assign({}, Dictionaries_1.Dictionaries.onlyDefinedProperties(docInfo));
                const uid = this.getUserID();
                const id = this.computeDocMetaID(uid, fingerprint);
                const docMetaRef = this.firestore
                    .collection(DatastoreCollection.DOC_META)
                    .doc(id);
                const docInfoRef = this.firestore
                    .collection(DatastoreCollection.DOC_INFO)
                    .doc(id);
                this.handleDatastoreMutations(docMetaRef, datastoreMutation);
                const docMetaCommitPromise = this.waitForCommit(docMetaRef);
                log.debug("Setting...");
                const batch = this.firestore.batch();
                batch.set(docMetaRef, this.createDocForDocMeta(docInfo, data));
                batch.set(docInfoRef, this.createDocForDocInfo(docInfo));
                yield batch.commit();
                log.debug("Setting...done");
                log.debug("Waiting for promise...");
                yield docMetaCommitPromise;
                log.debug("Waiting for promise...done");
            }
            finally {
            }
        });
    }
    overview() {
        return __awaiter(this, void 0, void 0, function* () {
            return undefined;
        });
    }
    getPrefs() {
        return Providers_1.Providers.toInterface(() => new Prefs_1.LocalStoragePrefs());
    }
    createDocForDocMeta(docInfo, docMeta) {
        const uid = this.getUserID();
        const id = this.computeDocMetaID(uid, docInfo.fingerprint);
        const docMetaHolder = {
            docInfo,
            value: docMeta
        };
        const recordHolder = {
            uid,
            id,
            visibility: Visibility.PRIVATE,
            value: docMetaHolder
        };
        return recordHolder;
    }
    createDocForDocInfo(docInfo) {
        const uid = this.getUserID();
        const id = this.computeDocMetaID(uid, docInfo.fingerprint);
        const recordHolder = {
            uid,
            id,
            visibility: Visibility.PRIVATE,
            value: docInfo
        };
        return recordHolder;
    }
    getDocMetaRefs() {
        return __awaiter(this, void 0, void 0, function* () {
            const uid = this.getUserID();
            const snapshot = yield this.firestore
                .collection(DatastoreCollection.DOC_META)
                .where('uid', '==', uid)
                .get();
            const result = [];
            for (const doc of snapshot.docs) {
                const recordHolder = doc.data();
                result.push({ fingerprint: recordHolder.value.docInfo.fingerprint });
            }
            return result;
        });
    }
    computeStoragePath(backend, fileRef) {
        const ext = FilePaths_1.FilePaths.toExtension(fileRef.name);
        const suffix = ext.map(value => {
            if (!value.startsWith('.')) {
                value = '.' + value;
            }
            return value;
        })
            .getOrElse('');
        const settings = this.computeStorageSettings(ext).getOrUndefined();
        let key;
        const uid = this.getUserID();
        if (fileRef.hashcode) {
            key = {
                uid,
                backend,
                alg: fileRef.hashcode.alg,
                enc: fileRef.hashcode.enc,
                data: fileRef.hashcode.data,
                suffix
            };
        }
        else {
            key = {
                uid,
                filename: fileRef.name
            };
        }
        const id = Hashcodes_1.Hashcodes.createID(key, 40);
        const path = `${backend}/${id}${suffix}`;
        return { path, settings };
    }
    computeStorageSettings(optionalExt) {
        const PUBLIC_MAX_AGE_1WEEK = 'public,max-age=604800';
        const ext = optionalExt.getOrElse('');
        if (ext === 'jpg' || ext === 'jpeg') {
            return Optional_1.Optional.of({
                cacheControl: PUBLIC_MAX_AGE_1WEEK,
                contentType: 'image/jpeg'
            });
        }
        if (ext === 'pdf') {
            return Optional_1.Optional.of({
                cacheControl: PUBLIC_MAX_AGE_1WEEK,
                contentType: 'application/pdf'
            });
        }
        if (ext === 'png') {
            return Optional_1.Optional.of({
                cacheControl: PUBLIC_MAX_AGE_1WEEK,
                contentType: 'image/png'
            });
        }
        if (ext === 'svg') {
            return Optional_1.Optional.of({
                cacheControl: PUBLIC_MAX_AGE_1WEEK,
                contentType: 'image/svg'
            });
        }
        return Optional_1.Optional.of({
            cacheControl: PUBLIC_MAX_AGE_1WEEK,
            contentType: 'application/octet-stream'
        });
    }
    waitForCommit(ref) {
        return new Promise(resolve => {
            const unsubscribeToSnapshot = ref.onSnapshot({ includeMetadataChanges: true }, snapshot => {
                if (!snapshot.metadata.fromCache && !snapshot.metadata.hasPendingWrites) {
                    unsubscribeToSnapshot();
                    resolve();
                }
            });
        });
    }
    handleDatastoreMutations(ref, datastoreMutation) {
        const unsubscribeToSnapshot = ref.onSnapshot({ includeMetadataChanges: true }, snapshot => {
            if (snapshot.metadata.fromCache && snapshot.metadata.hasPendingWrites) {
                datastoreMutation.written.resolve(true);
                log.debug("Got written for: ", ref);
            }
            if (!snapshot.metadata.fromCache && !snapshot.metadata.hasPendingWrites) {
                datastoreMutation.written.resolve(true);
                datastoreMutation.committed.resolve(true);
                log.debug("Got committed for: ", ref);
                unsubscribeToSnapshot();
            }
        });
    }
    handleDocInfoSnapshot(snapshot, docMetaSnapshotEventListener, batchID) {
        log.debug("onSnapshot... ");
        const docMetaMutationFromRecord = (record, mutationType = 'created') => {
            const id = record.id;
            const docInfo = record.value;
            const dataProvider = () => __awaiter(this, void 0, void 0, function* () {
                return yield this.getDocMeta(docInfo.fingerprint);
            });
            const docMetaProvider = Providers_1.AsyncProviders.memoize(() => __awaiter(this, void 0, void 0, function* () {
                const data = yield dataProvider();
                const docMetaID = this.computeDocMetaID(this.getUserID(), docInfo.fingerprint);
                Preconditions_1.Preconditions.assertPresent(data, `No data for docMeta with fingerprint: ${docInfo.fingerprint}, docMetaID: ${docMetaID}`);
                return DocMetas_1.DocMetas.deserialize(data, docInfo.fingerprint);
            }));
            const docMetaMutation = {
                id,
                fingerprint: docInfo.fingerprint,
                dataProvider,
                docMetaProvider,
                docInfoProvider: Providers_1.AsyncProviders.of(docInfo),
                docMetaFileRefProvider: Providers_1.AsyncProviders.of(DocMetaRef_1.DocMetaFileRefs.createFromDocInfo(docInfo)),
                mutationType
            };
            return docMetaMutation;
        };
        const docMetaMutationFromDocChange = (docChange) => {
            const record = docChange.doc.data();
            return docMetaMutationFromRecord(record, toMutationType(docChange.type));
        };
        const docMetaMutationFromDoc = (doc) => {
            const record = doc;
            return docMetaMutationFromRecord(record, 'created');
        };
        const handleDocMetaMutation = (docMetaMutation) => __awaiter(this, void 0, void 0, function* () {
            yield docMetaSnapshotEventListener({
                datastore: this.id,
                consistency,
                progress: progressTracker.incr(),
                docMetaMutations: [docMetaMutation],
                batch: {
                    id: batchID,
                    terminated: false,
                }
            });
        });
        const handleDocChange = (docChange) => {
            const docMetaMutation = docMetaMutationFromDocChange(docChange);
            handleDocMetaMutation(docMetaMutation)
                .catch(err => log.error(err));
        };
        const handleDoc = (doc) => {
            const docMetaMutation = docMetaMutationFromDoc(doc.data());
            handleDocMetaMutation(docMetaMutation)
                .catch(err => log.error(err));
        };
        const consistency = snapshot.metadata.fromCache ? 'written' : 'committed';
        const docChanges = snapshot.docChanges();
        const nrDocChanges = docChanges.length;
        const nrDocs = snapshot.docs.length;
        const progressTracker = new ProgressTracker_1.ProgressTracker(docChanges.length, 'firebase-snapshot');
        for (const docChange of docChanges) {
            handleDocChange(docChange);
        }
        docMetaSnapshotEventListener({
            datastore: this.id,
            consistency,
            progress: progressTracker.terminate(),
            docMetaMutations: [],
            batch: {
                id: batchID,
                terminated: true,
            }
        }).catch(err => log.error("Unable to dispatch event listener"));
        log.debug("onSnapshot... done");
    }
    toConsistency(snapshot) {
        return snapshot.metadata.fromCache ? 'written' : 'committed';
    }
    computeDocMetaID(uid, fingerprint) {
        return Hashcodes_1.Hashcodes.createID(uid + ':' + fingerprint, 32);
    }
    getUserID() {
        const auth = this.app.auth();
        Preconditions_1.Preconditions.assertPresent(auth, "Not authenticated");
        const user = auth.currentUser;
        Preconditions_1.Preconditions.assertPresent(user, "Not authenticated");
        return user.uid;
    }
    addDocMetaSnapshotEventListener(docMetaSnapshotEventListener) {
        this.docMetaSnapshotEventDispatcher.addEventListener(docMetaSnapshotEventListener);
    }
    preferredSource() {
        if (AppRuntime_1.AppRuntime.isBrowser()) {
            return 'cache';
        }
        else {
            return 'default';
        }
    }
}
exports.FirebaseDatastore = FirebaseDatastore;
var Visibility;
(function (Visibility) {
    Visibility["PRIVATE"] = "private";
    Visibility["FOLLOWING"] = "following";
    Visibility["PUBLIC"] = "public";
})(Visibility = exports.Visibility || (exports.Visibility = {}));
var DatastoreCollection;
(function (DatastoreCollection) {
    DatastoreCollection["DOC_INFO"] = "doc_info";
    DatastoreCollection["DOC_META"] = "doc_meta";
    DatastoreCollection["DOC_FILE_META"] = "doc_file_meta";
})(DatastoreCollection = exports.DatastoreCollection || (exports.DatastoreCollection = {}));
function toMutationType(docChangeType) {
    switch (docChangeType) {
        case 'added':
            return 'created';
        case 'modified':
            return 'updated';
        case 'removed':
            return 'deleted';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlyZWJhc2VEYXRhc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGaXJlYmFzZURhdGFzdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFtVDtBQUNuVCw2Q0FBd0M7QUFDeEMsNkNBQXlFO0FBQ3pFLHVDQUFrQztBQUVsQyxrREFBNkM7QUFDN0MscURBQWdEO0FBRWhELG9EQUErQztBQUMvQyw0Q0FBdUM7QUFDdkMsbUVBQXFEO0FBQ3JELHVEQUFrRDtBQUNsRCwyREFBZ0Y7QUFDaEYsaURBQWdEO0FBQ2hELG1EQUE4QztBQUM5QyxxREFBZ0Q7QUFDaEQsNkRBQW9FO0FBQ3BFLGlEQUE0RDtBQUM1RCxpREFBNEM7QUFDNUMseUNBQTZEO0FBRTdELDREQUF5RTtBQUN6RSwrQ0FBc0Q7QUFFdEQsMEVBQXFFO0FBQ3JFLHFEQUFnRDtBQUVoRCw4Q0FBeUM7QUFFekMsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBVzVCLE1BQWEsaUJBQWtCLFNBQVEsNkJBQWlCO0lBa0JwRDtRQUNJLEtBQUssRUFBRSxDQUFDO1FBakJJLE9BQUUsR0FBRyxVQUFVLENBQUM7UUFFekIsc0JBQWlCLEdBQVksSUFBSSxDQUFDO1FBUWpDLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBSXBCLG1DQUE4QixHQUEyQyxJQUFJLDZCQUFhLEVBQUUsQ0FBQztJQUs5RyxDQUFDO0lBRVksSUFBSSxDQUFDLGdCQUErQix5QkFBYSxFQUM1QyxPQUEwQixFQUFFOztZQUUxQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ2xCLE9BQU8sRUFBRSxDQUFDO2FBQ2I7WUFHRCxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0scUJBQVMsQ0FBQyxXQUFXLENBQUMsRUFBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMs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Q0FBQyxDQUFDO1FBRXZELE9BQU8sSUFBSyxDQUFDLEdBQUcsQ0FBQztJQUVyQixDQUFDO0lBRU0sK0JBQStCLENBQUMsNEJBQTBEO1FBQzdGLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxnQkFBZ0IsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7SUFFTyxlQUFlO1FBRW5CLElBQUksdUJBQVUsQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUN4QixPQUFPLE9BQU8sQ0FBQztTQUNsQjthQUFNO1lBQ0gsT0FBTyxTQUFTLENBQUM7U0FDcEI7SUFFTCxDQUFDO0NBRUo7QUFwaENELDhDQW9oQ0M7QUFrQ0QsSUFBWSxVQWlCWDtBQWpCRCxXQUFZLFVBQVU7SUFLbEIsaUNBQW1CLENBQUE7SUFLbkIscUNBQXVCLENBQUE7SUFLdkIsK0JBQWlCLENBQUE7QUFFckIsQ0FBQyxFQWpCVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQWlCckI7QUFFRCxJQUFZLG1CQVFYO0FBUkQsV0FBWSxtQkFBbUI7SUFFM0IsNENBQXFCLENBQUE7SUFFckIsNENBQXFCLENBQUE7SUFFckIsc0RBQStCLENBQUE7QUFFbkMsQ0FBQyxFQVJXLG1CQUFtQixHQUFuQiwyQkFBbUIsS0FBbkIsMkJBQW1CLFFBUTlCO0FBOEJELFNBQVMsY0FBYyxDQUFDLGFBQW9EO0lBRXhFLFFBQVEsYUFBYSxFQUFFO1FBRW5CLEtBQUssT0FBTztZQUNSLE9BQU8sU0FBUyxDQUFDO1FBRXJCLEtBQUssVUFBVTtZQUNYLE9BQU8sU0FBUyxDQUFDO1FBRXJCLEtBQUssU0FBUztZQUNWLE9BQU8sU0FBUyxDQUFDO0tBRXhCO0FBRUwsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWJzdHJhY3REYXRhc3RvcmUsIEJpbmFyeUZpbGVEYXRhLCBEYXRhc3RvcmUsIERhdGFzdG9yZUNvbnNpc3RlbmN5LCBEYXRhc3RvcmVJbml0T3B0cywgRGF0YXN0b3JlT3ZlcnZpZXcsIERlbGV0ZVJlc3VsdCwgRG9jTWV0YU11dGF0aW9uLCBEb2NNZXRhU25hcHNob3RFdmVudCwgRG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lciwgRXJyb3JMaXN0ZW5lciwgRmlsZU1ldGEsIEZpbGVSZWYsIEluaXRSZXN1bHQsIE11dGF0aW9uVHlwZSwgUHJlZnNQcm92aWRlciwgU25hcHNob3RSZXN1bHR9IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7RG9jTWV0YUZpbGVSZWYsIERvY01ldGFGaWxlUmVmcywgRG9jTWV0YVJlZn0gZnJvbSAnLi9Eb2NNZXRhUmVmJztcbmltcG9ydCB7QmFja2VuZH0gZnJvbSAnLi9CYWNrZW5kJztcbmltcG9ydCB7RG9jRmlsZU1ldGF9IGZyb20gJy4vRG9jRmlsZU1ldGEnO1xuaW1wb3J0IHtPcHRpb25hbH0gZnJvbSAnLi4vdXRpbC90cy9PcHRpb25hbCc7XG5pbXBvcnQge0ZpcmVzdG9yZX0gZnJvbSAnLi4vZmlyZWJhc2UvRmlyZXN0b3JlJztcbmltcG9ydCB7RG9jSW5mbywgSURvY0luZm99IGZyb20gJy4uL21ldGFkYXRhL0RvY0luZm8nO1xuaW1wb3J0IHtQcmVjb25kaXRpb25zfSBmcm9tICcuLi9QcmVjb25kaXRpb25zJztcbmltcG9ydCB7SGFzaGNvZGVzfSBmcm9tICcuLi9IYXNoY29kZXMnO1xuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnLi4vZmlyZWJhc2UvbGliL2ZpcmViYXNlJztcbmltcG9ydCB7RGljdGlvbmFyaWVzfSBmcm9tICcuLi91dGlsL0RpY3Rpb25hcmllcyc7XG5pbXBvcnQge0RhdGFzdG9yZU11dGF0aW9uLCBEZWZhdWx0RGF0YXN0b3JlTXV0YXRpb259IGZyb20gJy4vRGF0YXN0b3JlTXV0YXRpb24nO1xuaW1wb3J0IHtOVUxMX0ZVTkNUSU9OfSBmcm9tICcuLi91dGlsL0Z1bmN0aW9ucyc7XG5pbXBvcnQge0RvY01ldGFzfSBmcm9tIFwiLi4vbWV0YWRhdGEvRG9jTWV0YXNcIjtcbmltcG9ydCB7UGVyY2VudGFnZXN9IGZyb20gJy4uL3V0aWwvUGVyY2VudGFnZXMnO1xuaW1wb3J0IHtQZXJjZW50YWdlLCBQcm9ncmVzc1RyYWNrZXJ9IGZyb20gJy4uL3V0aWwvUHJvZ3Jlc3NUcmFja2VyJztcbmltcG9ydCB7QXN5bmNQcm92aWRlcnMsIFByb3ZpZGVyc30gZnJvbSAnLi4vdXRpbC9Qcm92aWRlcnMnO1xuaW1wb3J0IHtGaWxlUGF0aHN9IGZyb20gJy4uL3V0aWwvRmlsZVBhdGhzJztcbmltcG9ydCB7RmlsZUhhbmRsZSwgRmlsZUhhbmRsZXMsIEZpbGVzfSBmcm9tICcuLi91dGlsL0ZpbGVzJztcbmltcG9ydCB7VXNlcklEfSBmcm9tICcuLi9maXJlYmFzZS9GaXJlYmFzZSc7XG5pbXBvcnQge0lFdmVudERpc3BhdGNoZXIsIFNpbXBsZVJlYWN0b3J9IGZyb20gJy4uL3JlYWN0b3IvU2ltcGxlUmVhY3Rvcic7XG5pbXBvcnQge0xvY2FsU3RvcmFnZVByZWZzfSBmcm9tICcuLi91dGlsL3ByZWZzL1ByZWZzJztcbmltcG9ydCB7UHJvZ3Jlc3NNZXNzYWdlfSBmcm9tICcuLi91aS9wcm9ncmVzc19iYXIvUHJvZ3Jlc3NNZXNzYWdlJztcbmltcG9ydCB7UHJvZ3Jlc3NNZXNzYWdlc30gZnJvbSAnLi4vdWkvcHJvZ3Jlc3NfYmFyL1Byb2dyZXNzTWVzc2FnZXMnO1xuaW1wb3J0IHtTdG9wd2F0Y2hlc30gZnJvbSAnLi4vdXRpbC9TdG9wd2F0Y2hlcyc7XG5pbXBvcnQge1dyaXRhYmxlQmluYXJ5TWV0YURhdGFzdG9yZX0gZnJvbSAnLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtBcHBSdW50aW1lfSBmcm9tICcuLi9BcHBSdW50aW1lJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG4vLyBZb3UgY2FuIGFsbG93IHVzZXJzIHRvIHNpZ24gaW4gdG8geW91ciBhcHAgdXNpbmcgbXVsdGlwbGUgYXV0aGVudGljYXRpb25cbi8vIHByb3ZpZGVycyBieSBsaW5raW5nIGF1dGggcHJvdmlkZXIgY3JlZGVudGlhbHMgdG8gYW4gZXhpc3RpbmcgdXNlciBhY2NvdW50LlxuLy8gVXNlcnMgYXJlIGlkZW50aWZpYWJsZSBieSB0aGUgc2FtZSBGaXJlYmFzZSB1c2VyIElEIHJlZ2FyZGxlc3Mgb2YgdGhlXG4vLyBhdXRoZW50aWNhdGlvbiBwcm92aWRlciB0aGV5IHVzZWQgdG8gc2lnbiBpbi4gRm9yIGV4YW1wbGUsIGEgdXNlciB3aG8gc2lnbmVkXG4vLyBpbiB3aXRoIGEgcGFzc3dvcmQgY2FuIGxpbmsgYSBHb29nbGUgYWNjb3VudCBhbmQgc2lnbiBpbiB3aXRoIGVpdGhlciBtZXRob2Rcbi8vIGluIHRoZSBmdXR1cmUuIE9yLCBhbiBhbm9ueW1vdXMgdXNlciBjYW4gbGluayBhIEZhY2Vib29rIGFjY291bnQgYW5kIHRoZW4sXG4vLyBsYXRlciwgc2lnbiBpbiB3aXRoIEZhY2Vib29rIHRvIGNvbnRpbnVlIHVzaW5nIHlvdXIgYXBwLlxuXG4vLyBAdHMtaWdub3JlXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VEYXRhc3RvcmUgZXh0ZW5kcyBBYnN0cmFjdERhdGFzdG9yZSBpbXBsZW1lbnRzIERhdGFzdG9yZSwgV3JpdGFibGVCaW5hcnlNZXRhRGF0YXN0b3JlIHtcblxuICAgIHB1YmxpYyByZWFkb25seSBpZCA9ICdmaXJlYmFzZSc7XG5cbiAgICBwdWJsaWMgZW5hYmxlUGVyc2lzdGVuY2U6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgcHJpdmF0ZSBhcHA/OiBmaXJlYmFzZS5hcHAuQXBwO1xuXG4gICAgcHJpdmF0ZSBmaXJlc3RvcmU/OiBmaXJlYmFzZS5maXJlc3RvcmUuRmlyZXN0b3JlO1xuXG4gICAgcHJpdmF0ZSBzdG9yYWdlPzogZmlyZWJhc2Uuc3RvcmFnZS5TdG9yYWdlO1xuXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSBwcmltYXJ5U25hcHNob3Q/OiBTbmFwc2hvdFJlc3VsdDtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgZG9jTWV0YVNuYXBzaG90RXZlbnREaXNwYXRjaGVyOiBJRXZlbnREaXNwYXRjaGVyPERvY01ldGFTbmFwc2hvdEV2ZW50PiA9IG5ldyBTaW1wbGVSZWFjdG9yKCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBpbml0KGVycm9yTGlzdGVuZXI6IEVycm9yTGlzdGVuZXIgPSBOVUxMX0ZVTkNUSU9OLFxuICAgICAgICAgICAgICAgICAgICAgIG9wdHM6IERhdGFzdG9yZUluaXRPcHRzID0ge30pOiBQcm9taXNlPEluaXRSZXN1bHQ+IHtcblxuICAgICAgICBpZiAodGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZ2V0IHRoZSBmaXJlYmFzZSBhcHAuIE1ha2Ugc3VyZSB3ZSBhcmUgaW5pdGlhbGl6ZWQgZXh0ZXJuYWxseS5cbiAgICAgICAgdGhpcy5hcHAgPSBmaXJlYmFzZS5hcHAoKTtcbiAgICAgICAgdGhpcy5maXJlc3RvcmUgPSBhd2FpdCBGaXJlc3RvcmUuZ2V0SW5zdGFuY2Uoe2VuYWJsZVBlcnNpc3RlbmNlOiB0aGlzLmVuYWJsZVBlcnNpc3RlbmNlfSk7XG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IGZpcmViYXNlLnN0b3JhZ2UoKTtcblxuICAgICAgICBpZiAoISBvcHRzLm5vSW5pdGlhbFNuYXBzaG90KSB7XG5cbiAgICAgICAgICAgIC8vIGRvIG5vdCBydW4gdGhpcyBpZiB3ZSBzcGVjaWZ5IG9wdGlvbnMgb2Ygbm9Jbml0aWFsU25hcHNob3RcblxuICAgICAgICAgICAgY29uc3Qgc25hcHNob3RMaXN0ZW5lciA9IGFzeW5jIChldmVudDogRG9jTWV0YVNuYXBzaG90RXZlbnQpID0+IHRoaXMuZG9jTWV0YVNuYXBzaG90RXZlbnREaXNwYXRjaGVyLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXG4gICAgICAgICAgICB0aGlzLnByaW1hcnlTbmFwc2hvdCA9IGF3YWl0IHRoaXMuc25hcHNob3Qoc25hcHNob3RMaXN0ZW5lciwgZXJyb3JMaXN0ZW5lcik7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiB7fTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzbmFwc2hvdChkb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyOiBEb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxpc3RlbmVyOiBFcnJvckxpc3RlbmVyID0gTlVMTF9GVU5DVElPTik6IFByb21pc2U8U25hcHNob3RSZXN1bHQ+IHtcblxuICAgICAgICAvLyBzZXR1cCB0aGUgaW5pdGlhbCBzbmFwc2hvdCBzbyB0aGF0IHdlIHF1ZXJ5IGZvciB0aGUgdXNlcnMgZXhpc3RpbmdcbiAgICAgICAgLy8gZGF0YS4uLlxuXG4gICAgICAgIGNvbnN0IHVpZCA9IHRoaXMuZ2V0VXNlcklEKCk7XG5cbiAgICAgICAgLy8gc3RhcnQgc3luY2hyb25pemluZyB0aGUgZGF0YXN0b3JlLiAgWW91IE1VU1QgcmVnaXN0ZXIgeW91ciBsaXN0ZW5lcnNcbiAgICAgICAgLy8gQkVGT1JFIGNhbGxpbmcgaW5pdCBpZiB5b3Ugd2lzaCB0byBsaXN0ZW4gdG8gdGhlIGZ1bGwgc3RyZWFtIG9mXG4gICAgICAgIC8vIGV2ZW50cy5cblxuICAgICAgICAvLyBUaGVyZSdzIG5vIHdheSB0byBjb250cm9sIHdoZXJlIHRoZSBzbmFwc2hvdCBjb21lcyBmcm9tIGFuZCBvblxuICAgICAgICAvLyBzdGFydHVwIHNvIHdlIGRvIGEgZ2V0KCkgZnJvbSB0aGUgY2FjaGUgd2hpY2ggd2UgY2FuIGNvbnRyb2wgd2l0aFxuICAgICAgICAvLyBHZXRPcHRpb25zLiAgVGhpcyBnZXRzIHVzIGRhdGEgcXVpY2tseSBhbmQgdGhlbiB3ZSBzdGFydCBsaXN0ZW5pbmcgdG9cbiAgICAgICAgLy8gc25hcHNob3RzIGFmdGVyIHRoaXMgd2hpY2ggY2FuIGNvbWUgZnJvbSB0aGUgbmV0d29yayBhc3luY1xuXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5maXJlc3RvcmUhXG4gICAgICAgICAgICAuY29sbGVjdGlvbihEYXRhc3RvcmVDb2xsZWN0aW9uLkRPQ19JTkZPKVxuICAgICAgICAgICAgLndoZXJlKCd1aWQnLCAnPT0nLCB1aWQpO1xuXG5cbiAgICAgICAgdHlwZSBCYXRjaElETWFwID0ge1xuICAgICAgICAgICAgW1AgaW4gRGF0YXN0b3JlQ29uc2lzdGVuY3ldOiBudW1iZXI7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgYmF0Y2hJRHM6IEJhdGNoSURNYXAgPSB7XG4gICAgICAgICAgICB3cml0dGVuOiAwLFxuICAgICAgICAgICAgY29tbWl0dGVkOiAwXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgb25OZXh0Rm9yU25hcHNob3QgPSAoc25hcHNob3Q6IGZpcmViYXNlLmZpcmVzdG9yZS5RdWVyeVNuYXBzaG90KSA9PiB7XG5cbiAgICAgICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjb25zaXN0ZW5jeSA9IHRoaXMudG9Db25zaXN0ZW5jeShzbmFwc2hvdCk7XG4gICAgICAgICAgICAgICAgY29uc3QgYmF0Y2hJRCA9IGJhdGNoSURzW2NvbnNpc3RlbmN5XTtcblxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRG9jSW5mb1NuYXBzaG90KHNuYXBzaG90LCBkb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyLCBiYXRjaElEKTtcblxuICAgICAgICAgICAgICAgIGJhdGNoSURzW2NvbnNpc3RlbmN5XSsrO1xuXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgbG9nLmVycm9yKFwiQ291bGQgbm90IGhhbmRsZSBzbmFwc2hvdDogXCIsIGUpO1xuICAgICAgICAgICAgICAgIGVycm9yTGlzdGVuZXIoZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvblNuYXBzaG90RXJyb3IgPSAoZXJyOiBFcnJvcikgPT4ge1xuICAgICAgICAgICAgbG9nLmVycm9yKFwiQ291bGQgbm90IGhhbmRsZSBzbmFwc2hvdDogXCIsIGVycik7XG4gICAgICAgICAgICBlcnJvckxpc3RlbmVyKGVycik7XG4gICAgICAgIH07XG5cblxuICAgICAgICBpZiAodGhpcy5wcmVmZXJyZWRTb3VyY2UoKSA9PT0gJ2NhY2hlJykge1xuXG4gICAgICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY2FjaGVkU25hcHNob3QgPSBhd2FpdCBxdWVyeS5nZXQoeyBzb3VyY2U6ICdjYWNoZScgfSk7XG5cbiAgICAgICAgICAgICAgICBvbk5leHRGb3JTbmFwc2hvdChjYWNoZWRTbmFwc2hvdCk7XG5cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAvLyBubyBjYWNoZWQgc25hcHNob3RcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdW5zdWJzY3JpYmUgPVxuICAgICAgICAgICAgcXVlcnkub25TbmFwc2hvdCh7aW5jbHVkZU1ldGFkYXRhQ2hhbmdlczogdHJ1ZX0sIG9uTmV4dEZvclNuYXBzaG90LCBvblNuYXBzaG90RXJyb3IpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1bnN1YnNjcmliZVxuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHN0b3AoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMucHJpbWFyeVNuYXBzaG90ICYmIHRoaXMucHJpbWFyeVNuYXBzaG90LnVuc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICB0aGlzLnByaW1hcnlTbmFwc2hvdC51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdHJ1ZSBpZiB0aGUgRGlza0RhdGFzdG9yZSBjb250YWlucyBhIGRvY3VtZW50IGZvciB0aGUgZ2l2ZW5cbiAgICAgKiBmaW5nZXJwcmludFxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBjb250YWlucyhmaW5nZXJwcmludDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG5cbiAgICAgICAgLy8gVE9ETzogdGhpcyBpc24ndCBwYXJ0aWN1bGFybHkgZWZmaWNpZW50IG5vdyBidXQgSSBkb24ndCB0aGluayB3ZSdyZVxuICAgICAgICAvLyBhY3R1YWxseSB1c2luZyBjb250YWlucygpIGZvciBhbnl0aGluZyBhbmQgd2UgbWlnaHQgd2FudCB0byByZW1vdmVcbiAgICAgICAgLy8gaXQgc2luY2UgaXQncyBub3QgdmVyeSBlZmZpY2llbnQgaWYgd2UganVzdCBjYWxsIGdldERvY01ldGEgYW55d2F5LlxuICAgICAgICBjb25zdCBkb2NNZXRhID0gYXdhaXQgdGhpcy5nZXREb2NNZXRhKGZpbmdlcnByaW50KTtcblxuICAgICAgICByZXR1cm4gZG9jTWV0YSAhPT0gbnVsbDtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBkZWxldGUoZG9jTWV0YUZpbGVSZWY6IERvY01ldGFGaWxlUmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXN0b3JlTXV0YXRpb246IERhdGFzdG9yZU11dGF0aW9uPGJvb2xlYW4+ID0gbmV3IERlZmF1bHREYXRhc3RvcmVNdXRhdGlvbigpKTogUHJvbWlzZTxSZWFkb25seTxEZWxldGVSZXN1bHQ+PiB7XG5cbiAgICAgICAgbG9nLmluZm8oXCJkZWxldGU6IFwiLCBkb2NNZXRhRmlsZVJlZik7XG5cbiAgICAgICAgaWYgKGRvY01ldGFGaWxlUmVmLmRvY0ZpbGUgJiYgZG9jTWV0YUZpbGVSZWYuZG9jRmlsZS5uYW1lKSB7XG5cbiAgICAgICAgICAgIC8vIHRoZSBQREYvUEhaIGRhdGEgZmlsZSBzaG91bGQgYmUgYWRkZWQgYXMgYSBzdGFzaCBmaWxlIHZpYVxuICAgICAgICAgICAgLy8gd3JpdGVGaWxlIHNvIGl0IGFsc28gbmVlZHMgdG8gYmUgcmVtb3ZlZC5cbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZGVsZXRlRmlsZShCYWNrZW5kLlNUQVNILCBkb2NNZXRhRmlsZVJlZi5kb2NGaWxlKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdWlkID0gdGhpcy5nZXRVc2VySUQoKTtcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLmNvbXB1dGVEb2NNZXRhSUQodWlkLCBkb2NNZXRhRmlsZVJlZi5maW5nZXJwcmludCk7XG5cbiAgICAgICAgY29uc3QgZG9jTWV0YVJlZiA9IHRoaXMuZmlyZXN0b3JlIVxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oRGF0YXN0b3JlQ29sbGVjdGlvbi5ET0NfTUVUQSlcbiAgICAgICAgICAgIC5kb2MoaWQpO1xuXG4gICAgICAgIGNvbnN0IGRvY0luZm9SZWYgPSB0aGlzLmZpcmVzdG9yZSFcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKERhdGFzdG9yZUNvbGxlY3Rpb24uRE9DX0lORk8pXG4gICAgICAgICAgICAuZG9jKGlkKTtcblxuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICB0aGlzLmhhbmRsZURhdGFzdG9yZU11dGF0aW9ucyhkb2NNZXRhUmVmLCBkYXRhc3RvcmVNdXRhdGlvbik7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbW1pdFByb21pc2UgPSB0aGlzLndhaXRGb3JDb21taXQoZG9jTWV0YVJlZik7XG4gICAgICAgICAgICBhd2FpdCBkb2NNZXRhUmVmLmRlbGV0ZSgpO1xuXG4gICAgICAgICAgICBjb25zdCBiYXRjaCA9IHRoaXMuZmlyZXN0b3JlIS5iYXRjaCgpO1xuXG4gICAgICAgICAgICBiYXRjaC5kZWxldGUoZG9jTWV0YVJlZik7XG4gICAgICAgICAgICBiYXRjaC5kZWxldGUoZG9jSW5mb1JlZik7XG5cbiAgICAgICAgICAgIGF3YWl0IGJhdGNoLmNvbW1pdCgpO1xuXG4gICAgICAgICAgICBhd2FpdCBjb21taXRQcm9taXNlO1xuXG4gICAgICAgICAgICByZXR1cm4geyB9O1xuXG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAvLyBub29wIGZvciBub3dcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBEb2NNZXRhIHdlIGN1cnJlbnRseSBpbiB0aGUgZGF0YXN0b3JlIGZvciB0aGlzIGdpdmVuXG4gICAgICogZmluZ2VycHJpbnQgb3IgbnVsbCBpZiBpdCBkb2VzIG5vdCBleGlzdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgZ2V0RG9jTWV0YShmaW5nZXJwcmludDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG5cbiAgICAgICAgY29uc3QgdWlkID0gdGhpcy5nZXRVc2VySUQoKTtcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLmNvbXB1dGVEb2NNZXRhSUQodWlkLCBmaW5nZXJwcmludCk7XG5cbiAgICAgICAgY29uc3QgcmVmID0gdGhpcy5maXJlc3RvcmUhLmNvbGxlY3Rpb24oRGF0YXN0b3JlQ29sbGVjdGlvbi5ET0NfTUVUQSkuZG9jKGlkKTtcblxuICAgICAgICBjb25zdCBjcmVhdGVTbmFwc2hvdCA9IGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgLy8gVE9ETzogbGlmdCB0aGlzIG91dCBpbnRvIGl0cyBvd24gbWV0aG9kLlxuXG4gICAgICAgICAgICBjb25zdCBwcmVmZXJyZWRTb3VyY2UgPSB0aGlzLnByZWZlcnJlZFNvdXJjZSgpO1xuXG4gICAgICAgICAgICBpZiAocHJlZmVycmVkU291cmNlID09PSAnY2FjaGUnKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBnbyBjYWNoZSBmaXJzdCwgdGhlbiBzZXJ2ZXIgaWYgd2UgZG9uJ3QgaGF2ZSBpdCBpbiB0aGVcbiAgICAgICAgICAgICAgICAvLyBjYWNoZSBvbmx5IHRoZW4gZG8gd2UgZmFpbCB3aGljaCB3b3VsZCBiZSB3aGVuIHdlJ3JlIG5vdFxuICAgICAgICAgICAgICAgIC8vIG9ubGluZS5cblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCByZWYuZ2V0KHsgc291cmNlOiB0aGlzLnByZWZlcnJlZFNvdXJjZSgpIH0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHJlZi5nZXQoeyBzb3VyY2U6ICdzZXJ2ZXInIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBub3cgcmV2ZXJ0IHRvIGNoZWNraW5nIHRoZSBzZXJ2ZXIsIHRoZW4gY2FjaGUgaWYgd2UncmVcbiAgICAgICAgICAgICAgICAvLyBvZmZsaW5lLlxuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCByZWYuZ2V0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGNyZWF0ZVNuYXBzaG90KCk7XG5cbiAgICAgICAgY29uc3QgcmVjb3JkSG9sZGVyID0gPFJlY29yZEhvbGRlcjxEb2NNZXRhSG9sZGVyPiB8IHVuZGVmaW5lZD4gc25hcHNob3QuZGF0YSgpO1xuXG4gICAgICAgIGlmICghIHJlY29yZEhvbGRlcikge1xuICAgICAgICAgICAgbG9nLndhcm4oXCJDb3VsZCBub3QgZ2V0IGRvY01ldGEgd2l0aCBpZDogXCIgKyBpZCk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZWNvcmRIb2xkZXIudmFsdWUudmFsdWU7XG5cbiAgICB9XG5cbiAgICAvLyBUT0RPOiB0aGUgY2xvdWQgc3RvcmFnZSBvcGVyYXRpb25zIGFyZSBwb3NzaWJseSB1bnNhZmUgYW5kIGNvdWxkXG4gICAgLy8gbGVhdmUgbG9jYWwgZmlsZXMgaW4gcGxhY2Ugb3IgdG9vIG1hbnkgcmVtb3RlIGZpbGVzIGJ1dCB0aGlzIGlzIGdvb2RcbiAgICAvLyBmb3IgYSBmaXJzdCBNVlAgcGFzcy5cblxuICAgIHB1YmxpYyBhc3luYyB3cml0ZUZpbGUoYmFja2VuZDogQmFja2VuZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogRmlsZVJlZixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IEJpbmFyeUZpbGVEYXRhICxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGE6IEZpbGVNZXRhID0ge30pOiBQcm9taXNlPERvY0ZpbGVNZXRhPiB7XG5cbiAgICAgICAgaWYgKGF3YWl0IHRoaXMuY29udGFpbnNGaWxlKGJhY2tlbmQsIHJlZikpIHtcbiAgICAgICAgICAgIC8vIHRoZSBmaWxlIGlzIGFscmVhZHkgaW4gdGhlIGRhdGFzdG9yZSBzbyBkb24ndCBhdHRlbXB0IHRvXG4gICAgICAgICAgICAvLyBvdmVyd3JpdGUgaXQgZm9yIG5vdy4gIFRoZSBmaWxlcyBhcmUgaW1tdXRhYmxlIGFuZCB3ZSBkb24ndFxuICAgICAgICAgICAgLy8gYWNjZXB0IG92ZXJ3cml0ZXMuXG4gICAgICAgICAgICByZXR1cm4gKGF3YWl0IHRoaXMuZ2V0RmlsZShiYWNrZW5kLCByZWYpKS5nZXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2UhO1xuXG4gICAgICAgIGNvbnN0IHN0b3JhZ2VQYXRoID0gdGhpcy5jb21wdXRlU3RvcmFnZVBhdGgoYmFja2VuZCwgcmVmKTtcblxuICAgICAgICBjb25zdCBmaWxlUmVmID0gc3RvcmFnZS5yZWYoKS5jaGlsZChzdG9yYWdlUGF0aC5wYXRoKTtcblxuICAgICAgICBsZXQgdXBsb2FkVGFzazogZmlyZWJhc2Uuc3RvcmFnZS5VcGxvYWRUYXNrO1xuXG4gICAgICAgIC8vIFRPRE86IHdlIG5lZWQgdG8gY29tcHV0ZSB2aXNpYmlsaXR5IGZvciB0aGlzIGZvciB0aGUgZnV0dXJlLlxuXG4gICAgICAgIGNvbnN0IHVpZCA9IHRoaXMuZ2V0VXNlcklEKCk7XG5cbiAgICAgICAgLy8gc3RpY2sgdGhlIHVpZCBpbnRvIHRoZSBtZXRhZGF0YSB3aGljaCB3ZSB1c2UgZm9yIGF1dGhvcml6YXRpb24gb2YgdGhlXG4gICAgICAgIC8vIGJsb2Igd2hlbiBub3QgcHVibGljLlxuICAgICAgICBtZXRhID0gey4uLm1ldGEsIHVpZCwgdmlzaWJpbGl0eTogVmlzaWJpbGl0eS5QUklWQVRFfTtcblxuICAgICAgICBjb25zdCBtZXRhZGF0YTogZmlyZWJhc2Uuc3RvcmFnZS5VcGxvYWRNZXRhZGF0YSA9IHsgY3VzdG9tTWV0YWRhdGE6IG1ldGEgfTtcblxuICAgICAgICBpZiAoc3RvcmFnZVBhdGguc2V0dGluZ3MpIHtcbiAgICAgICAgICAgIG1ldGFkYXRhLmNvbnRlbnRUeXBlID0gc3RvcmFnZVBhdGguc2V0dGluZ3MuY29udGVudFR5cGU7XG4gICAgICAgICAgICBtZXRhZGF0YS5jYWNoZUNvbnRyb2wgPSBzdG9yYWdlUGF0aC5zZXR0aW5ncy5jYWNoZUNvbnRyb2w7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB1cGxvYWRUYXNrID0gZmlsZVJlZi5wdXRTdHJpbmcoZGF0YSwgJ3JhdycsIG1ldGFkYXRhKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhIGluc3RhbmNlb2YgQmxvYikge1xuICAgICAgICAgICAgdXBsb2FkVGFzayA9IGZpbGVSZWYucHV0KGRhdGEsIG1ldGFkYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKEZpbGVIYW5kbGVzLmlzRmlsZUhhbmRsZShkYXRhKSkge1xuXG4gICAgICAgICAgICAgICAgLy8gTUVNT1JZX0FMTE9DQVRJT05fSVNTVUUgbWlncmF0ZSB0aGlzIHRvIGEgc3RyZWFtaW5nIEFQSSB0b1xuICAgICAgICAgICAgICAgIC8vIGhlbHAgd2l0aCBodWdlIFBERnMuXG5cbiAgICAgICAgICAgICAgICAvLyBpdCdzIG5vdCBhIGJ1ZmZlciBidXQgY29udmVydCBpdCB0byBvbmUuLi5cbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlSGFuZGxlID0gPEZpbGVIYW5kbGU+IGRhdGE7XG4gICAgICAgICAgICAgICAgZGF0YSA9IGF3YWl0IEZpbGVzLnJlYWRGaWxlQXN5bmMoZmlsZUhhbmRsZS5wYXRoKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1cGxvYWRUYXNrID0gZmlsZVJlZi5wdXQoVWludDhBcnJheS5mcm9tKDxCdWZmZXI+IGRhdGEpLCBtZXRhZGF0YSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRPRE86IHdlIGNhbiBnZXQgcHJvZ3Jlc3MgZnJvbSB0aGUgdXBsb2FkVGFzayBoZXJlLlxuXG4gICAgICAgIGNvbnN0IHN0YXJ0ZWQgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgIGNvbnN0IHRhc2sgPSBQcm9ncmVzc1RyYWNrZXIuY3JlYXRlTm9uY2UoKTtcblxuICAgICAgICB1cGxvYWRUYXNrLm9uKCdzdGF0ZV9jaGFuZ2VkJywgKHNuYXBzaG90RGF0YTogYW55KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHNuYXBzaG90OiBmaXJlYmFzZS5zdG9yYWdlLlVwbG9hZFRhc2tTbmFwc2hvdCA9IHNuYXBzaG90RGF0YTtcblxuICAgICAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIGNvbnN0IGR1cmF0aW9uID0gbm93IC0gc3RhcnRlZDtcblxuICAgICAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9IFBlcmNlbnRhZ2VzLmNhbGN1bGF0ZShzbmFwc2hvdC5ieXRlc1RyYW5zZmVycmVkLCBzbmFwc2hvdC50b3RhbEJ5dGVzKTtcbiAgICAgICAgICAgIGxvZy5ub3RpY2UoJ1VwbG9hZCBpcyAnICsgcGVyY2VudGFnZSArICclLy8gZG9uZScpO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9ncmVzczogUHJvZ3Jlc3NNZXNzYWdlID0ge1xuICAgICAgICAgICAgICAgIGlkOiAnZmlyZWJhc2UtdXBsb2FkJyxcbiAgICAgICAgICAgICAgICB0YXNrLFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlZDogc25hcHNob3QuYnl0ZXNUcmFuc2ZlcnJlZCxcbiAgICAgICAgICAgICAgICB0b3RhbDogc25hcHNob3QudG90YWxCeXRlcyxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgICAgICAgICBwcm9ncmVzczogPFBlcmNlbnRhZ2U+IHBlcmNlbnRhZ2VcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIFByb2dyZXNzTWVzc2FnZXMuYnJvYWRjYXN0KHByb2dyZXNzKTtcblxuICAgICAgICAgICAgc3dpdGNoIChzbmFwc2hvdC5zdGF0ZSkge1xuXG4gICAgICAgICAgICAgICAgY2FzZSBmaXJlYmFzZS5zdG9yYWdlLlRhc2tTdGF0ZS5QQVVTRUQ6XG4gICAgICAgICAgICAgICAgICAgIC8vIG9yICdwYXVzZWQnXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdVcGxvYWQgaXMgcGF1c2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBmaXJlYmFzZS5zdG9yYWdlLlRhc2tTdGF0ZS5SVU5OSU5HOlxuICAgICAgICAgICAgICAgICAgICAvLyBvciAncnVubmluZydcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1VwbG9hZCBpcyBydW5uaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHVwbG9hZFRhc2tTbmFwc2hvdCA9IGF3YWl0IHVwbG9hZFRhc2s7XG5cbiAgICAgICAgY29uc3QgZG93bmxvYWRVUkwgPSB1cGxvYWRUYXNrU25hcHNob3QuZG93bmxvYWRVUkw7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJhY2tlbmQsXG4gICAgICAgICAgICByZWYsXG4gICAgICAgICAgICB1cmw6IGRvd25sb2FkVVJMISxcbiAgICAgICAgICAgIG1ldGFcbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBnZXRGaWxlTWV0YShiYWNrZW5kOiBCYWNrZW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IEZpbGVSZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZTogJ2NhY2hlJyB8ICdzZXJ2ZXInID0gJ3NlcnZlcicpOiBQcm9taXNlPE9wdGlvbmFsPERvY0ZpbGVNZXRhPj4ge1xuXG4gICAgICAgIGNvbnN0IHN0b3B3YXRjaCA9IFN0b3B3YXRjaGVzLmNyZWF0ZSgpO1xuXG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5jcmVhdGVGaWxlTWV0YUlEKGJhY2tlbmQsIHJlZik7XG5cbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCB0aGlzLmZpcmVzdG9yZSFcbiAgICAgICAgICAgICAgICAuY29sbGVjdGlvbihEYXRhc3RvcmVDb2xsZWN0aW9uLkRPQ19GSUxFX01FVEEpXG4gICAgICAgICAgICAgICAgLmRvYyhpZClcbiAgICAgICAgICAgICAgICAuZ2V0KHsgc291cmNlIH0pO1xuXG4gICAgICAgICAgICBjb25zdCByZWNvcmRIb2xkZXIgPSA8UmVjb3JkSG9sZGVyPERvY0ZpbGVNZXRhPiB8IHVuZGVmaW5lZD4gc25hcHNob3QuZGF0YSgpO1xuXG4gICAgICAgICAgICBpZiAoIXJlY29yZEhvbGRlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBPcHRpb25hbC5lbXB0eSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gT3B0aW9uYWwub2YocmVjb3JkSG9sZGVyLnZhbHVlKTtcblxuICAgICAgICB9IGNhdGNoIChlKSB7XG5cbiAgICAgICAgICAgIGlmIChzb3VyY2UgIT09ICdjYWNoZScpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gT3B0aW9uYWwuZW1wdHkoKTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgd3JpdGVGaWxlTWV0YShiYWNrZW5kOiBCYWNrZW5kLCByZWY6IEZpbGVSZWYsIGRvY0ZpbGVNZXRhOiBEb2NGaWxlTWV0YSkge1xuXG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5jcmVhdGVGaWxlTWV0YUlEKGJhY2tlbmQsIHJlZik7XG5cbiAgICAgICAgY29uc3QgcmVjb3JkSG9sZGVyOiBSZWNvcmRIb2xkZXI8RG9jRmlsZU1ldGE+ID0ge1xuICAgICAgICAgICAgdWlkOiB0aGlzLmdldFVzZXJJRCgpLFxuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBWaXNpYmlsaXR5LlBSSVZBVEUsXG4gICAgICAgICAgICB2YWx1ZTogZG9jRmlsZU1ldGFcbiAgICAgICAgfTtcblxuICAgICAgICBhd2FpdCB0aGlzLmZpcmVzdG9yZSFcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKERhdGFzdG9yZUNvbGxlY3Rpb24uRE9DX0ZJTEVfTUVUQSlcbiAgICAgICAgICAgIC5kb2MoaWQpXG4gICAgICAgICAgICAuc2V0KHJlY29yZEhvbGRlcik7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGRlbGV0ZUZpbGVNZXRhKGJhY2tlbmQ6IEJhY2tlbmQsIHJlZjogRmlsZVJlZikge1xuXG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5jcmVhdGVGaWxlTWV0YUlEKGJhY2tlbmQsIHJlZik7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5maXJlc3RvcmUhXG4gICAgICAgICAgICAuY29sbGVjdGlvbihEYXRhc3RvcmVDb2xsZWN0aW9uLkRPQ19GSUxFX01FVEEpXG4gICAgICAgICAgICAuZG9jKGlkKVxuICAgICAgICAgICAgLmRlbGV0ZSgpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRm9yY2UgcHJlZmV0Y2hpbmcgdGhlIGZpbGUgbWV0YSBmcm9tIHRoZSBzZXJ2ZXIgaWYgaXQncyBub3QgaW4gdGhlIGNhY2hlLlxuICAgICAqL1xuICAgIHByaXZhdGUgYXN5bmMgcHJlZmV0Y2hGaWxlTWV0YShiYWNrZW5kOiBCYWNrZW5kLCByZWY6IEZpbGVSZWYpIHtcblxuICAgICAgICBjb25zdCBmaWxlTWV0YSA9IGF3YWl0IHRoaXMuZ2V0RmlsZU1ldGEoYmFja2VuZCwgcmVmLCAnY2FjaGUnKTtcblxuICAgICAgICBpZiAoISBmaWxlTWV0YS5pc1ByZXNlbnQoKSkge1xuICAgICAgICAgICAgYXdhaXQgYXdhaXQgdGhpcy5nZXRGaWxlTWV0YShiYWNrZW5kLCByZWYsICdzZXJ2ZXInKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG5vb3BcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbiAgICBwcml2YXRlIGNyZWF0ZUZpbGVNZXRhSUQoYmFja2VuZDogQmFja2VuZCwgcmVmOiBGaWxlUmVmKSB7XG4gICAgICAgIGNvbnN0IHN0b3JhZ2VQYXRoID0gdGhpcy5jb21wdXRlU3RvcmFnZVBhdGgoYmFja2VuZCwgcmVmKTtcbiAgICAgICAgcmV0dXJuIEhhc2hjb2Rlcy5jcmVhdGUoc3RvcmFnZVBhdGgucGF0aCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGdldEZpbGUoYmFja2VuZDogQmFja2VuZCwgcmVmOiBGaWxlUmVmKTogUHJvbWlzZTxPcHRpb25hbDxEb2NGaWxlTWV0YT4+IHtcblxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGhpcy5nZXRGaWxlRnJvbUZpbGVNZXRhKGJhY2tlbmQsIHJlZik7XG5cbiAgICAgICAgaWYgKCEgcmVzdWx0LmlzUHJlc2VudCgpKSB7XG5cbiAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IHRoaXMuZ2V0RmlsZUZyb21TdG9yYWdlKGJhY2tlbmQsIHJlZik7XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQuaXNQcmVzZW50KCkpIHtcbiAgICAgICAgICAgICAgICAvLyB3cml0ZSBpdCB0byBkb2NfZmlsZV9tZXRhIHNvIHRoYXQgbmV4dCB0aW1lIHdlIGhhdmUgaXRcbiAgICAgICAgICAgICAgICAvLyBhdmFpbGFibGVcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRvY0ZpbGVNZXRhOiBEb2NGaWxlTWV0YSA9IHJlc3VsdC5nZXQoKTtcblxuICAgICAgICAgICAgICAgIGlmICghIGRvY0ZpbGVNZXRhLnJlZi5oYXNoY29kZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBGaXJlYmFzZSBkb2Vzbid0IHN1cHBvcnQgZmlsZSBuYW1lcyB3aXRoICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICAgIC8vIHZhbHVlcy5cbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlICg8YW55PiBkb2NGaWxlTWV0YS5yZWYpLmhhc2hjb2RlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMud3JpdGVGaWxlTWV0YShiYWNrZW5kLCByZWYsIGRvY0ZpbGVNZXRhKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGdldEZpbGVGcm9tRmlsZU1ldGEoYmFja2VuZDogQmFja2VuZCwgcmVmOiBGaWxlUmVmKTogUHJvbWlzZTxPcHRpb25hbDxEb2NGaWxlTWV0YT4+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZ2V0RmlsZU1ldGEoYmFja2VuZCwgcmVmLCAnY2FjaGUnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGdldEZpbGVGcm9tU3RvcmFnZShiYWNrZW5kOiBCYWNrZW5kLCByZWY6IEZpbGVSZWYpOiBQcm9taXNlPE9wdGlvbmFsPERvY0ZpbGVNZXRhPj4ge1xuXG4gICAgICAgIC8vIFRPRE86IHRoaXMgY29kZSBhbmQgY29udGFpbnNGaWxlIGNvdWxkIGJlIHVuaWZpZWQgSSB0aGluay5cbiAgICAgICAgLy8gY29udGFpbnNGaWxlIHNob3VsZCBqdXN0IGJlIGdldEZpbGUoKS5pc1ByZXNlbnQoKVxuXG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2UhO1xuXG4gICAgICAgIGNvbnN0IHN0b3JhZ2VQYXRoID0gdGhpcy5jb21wdXRlU3RvcmFnZVBhdGgoYmFja2VuZCwgcmVmKTtcblxuICAgICAgICBjb25zdCBmaWxlUmVmID0gc3RvcmFnZS5yZWYoKS5jaGlsZChzdG9yYWdlUGF0aC5wYXRoKTtcblxuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICBjb25zdCBtZXRhZGF0YSA9IGF3YWl0IGZpbGVSZWYuZ2V0TWV0YWRhdGEoKTtcblxuICAgICAgICAgICAgY29uc3QgdXJsOiBzdHJpbmcgPSBhd2FpdCBmaWxlUmVmLmdldERvd25sb2FkVVJMKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IG1ldGEgPSBtZXRhZGF0YS5jdXN0b21NZXRhZGF0YTtcblxuICAgICAgICAgICAgcmV0dXJuIE9wdGlvbmFsLm9mKHsgYmFja2VuZCwgcmVmLCB1cmwsIG1ldGEgfSk7XG5cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuXG4gICAgICAgICAgICBpZiAoZS5jb2RlID09PSBcInN0b3JhZ2Uvb2JqZWN0LW5vdC1mb3VuZFwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9wdGlvbmFsLmVtcHR5KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHNvbWUgb3RoZXIgdHlwZSBvZiBleGNlcHRpb24gaWFzIG9jY3VycmVkXG4gICAgICAgICAgICB0aHJvdyBlO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjb250YWluc0ZpbGUoYmFja2VuZDogQmFja2VuZCwgcmVmOiBGaWxlUmVmKTogUHJvbWlzZTxib29sZWFuPiB7XG5cbiAgICAgICAgLy8gVE9ETzogd2Ugc2hvdWxkIGhhdmUgc29tZSBjYWNoZSBoZXJlIHRvIGF2b2lkIGNoZWNraW5nIHRoZSBzZXJ2ZXIgdG9vXG4gICAgICAgIC8vIG9mdGVuIGJ1dCBJIGRvbid0IHRoaW5rIHRoaXMgaXMgZ29pZ24gdG8gYmUgdXNlZCBvZnRlbi5cblxuICAgICAgICAvLyBUT0RPOiB0aGlzIGlzIHNsb3cgd2hlbiByZWZlcmVuY2luZyB0aGUgc3RvcmFnZSBwYXRoIGRpcmVjdGx5IHdlIHNob3VsZFxuICAgICAgICAvLyBpbnN0ZWFkIHVzZSB0aGUgZG9jX2ZpbGVfbWV0YSBidXQgbm90IGFsbCBmaWxlcyBoYXZlIHRoaXMgeWV0LlxuXG4gICAgICAgIGNvbnN0IHN0b3JhZ2VQYXRoID0gdGhpcy5jb21wdXRlU3RvcmFnZVBhdGgoYmFja2VuZCwgcmVmKTtcblxuICAgICAgICBjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlITtcbiAgICAgICAgY29uc3QgZmlsZVJlZiA9IHN0b3JhZ2UucmVmKCkuY2hpbGQoc3RvcmFnZVBhdGgucGF0aCk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IGZpbGVSZWYuZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG5cbiAgICAgICAgICAgIGlmIChlLmNvZGUgPT09IFwic3RvcmFnZS9vYmplY3Qtbm90LWZvdW5kXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHNvbWUgb3RoZXIgdHlwZSBvZiBleGNlcHRpb24gaWFzIG9jY3VycmVkXG4gICAgICAgICAgICB0aHJvdyBlO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBkZWxldGVGaWxlKGJhY2tlbmQ6IEJhY2tlbmQsIHJlZjogRmlsZVJlZik6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIGNvbnN0IGRlbGV0ZUZpbGVGcm9tU3RvcmFnZSA9IGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2UhO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RvcmFnZVBhdGggPSB0aGlzLmNvbXB1dGVTdG9yYWdlUGF0aChiYWNrZW5kLCByZWYpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZVJlZiA9IHN0b3JhZ2UucmVmKCkuY2hpbGQoc3RvcmFnZVBhdGgucGF0aCk7XG4gICAgICAgICAgICAgICAgYXdhaXQgZmlsZVJlZi5kZWxldGUoKTtcblxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuXG4gICAgICAgICAgICAgICAgaWYgKGUuY29kZSA9PT0gXCJzdG9yYWdlL29iamVjdC1ub3QtZm91bmRcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIGFjY2VwdGFibGUgZm9yIG5vdyBhcyB3ZSB3YW50IGRlbGV0ZXMgdG8gYmVcbiAgICAgICAgICAgICAgICAgICAgLy8gaWRlbXBvdGVudFxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gc29tZSBvdGhlciB0eXBlIG9mIGV4Y2VwdGlvbiBpYXMgb2NjdXJyZWRcbiAgICAgICAgICAgICAgICB0aHJvdyBlO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICBhd2FpdCBkZWxldGVGaWxlRnJvbVN0b3JhZ2UoKTtcbiAgICAgICAgYXdhaXQgdGhpcy5kZWxldGVGaWxlTWV0YShiYWNrZW5kLCByZWYpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JpdGUgdGhlIGRhdGFzdG9yZSB0byBkaXNrLlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyB3cml0ZShmaW5nZXJwcmludDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgIGRvY0luZm86IERvY0luZm8sXG4gICAgICAgICAgICAgICAgICAgICAgIGRhdGFzdG9yZU11dGF0aW9uOiBEYXRhc3RvcmVNdXRhdGlvbjxib29sZWFuPiA9IG5ldyBEZWZhdWx0RGF0YXN0b3JlTXV0YXRpb24oKSkge1xuXG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIGRvY0luZm8gPSBPYmplY3QuYXNzaWduKHt9LCBEaWN0aW9uYXJpZXMub25seURlZmluZWRQcm9wZXJ0aWVzKGRvY0luZm8pKTtcblxuICAgICAgICAgICAgY29uc3QgdWlkID0gdGhpcy5nZXRVc2VySUQoKTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gdGhpcy5jb21wdXRlRG9jTWV0YUlEKHVpZCwgZmluZ2VycHJpbnQpO1xuXG4gICAgICAgICAgICBjb25zdCBkb2NNZXRhUmVmID0gdGhpcy5maXJlc3RvcmUhXG4gICAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oRGF0YXN0b3JlQ29sbGVjdGlvbi5ET0NfTUVUQSlcbiAgICAgICAgICAgICAgICAuZG9jKGlkKTtcblxuICAgICAgICAgICAgY29uc3QgZG9jSW5mb1JlZiA9IHRoaXMuZmlyZXN0b3JlIVxuICAgICAgICAgICAgICAgIC5jb2xsZWN0aW9uKERhdGFzdG9yZUNvbGxlY3Rpb24uRE9DX0lORk8pXG4gICAgICAgICAgICAgICAgLmRvYyhpZCk7XG5cbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRGF0YXN0b3JlTXV0YXRpb25zKGRvY01ldGFSZWYsIGRhdGFzdG9yZU11dGF0aW9uKTtcblxuICAgICAgICAgICAgY29uc3QgZG9jTWV0YUNvbW1pdFByb21pc2UgPSB0aGlzLndhaXRGb3JDb21taXQoZG9jTWV0YVJlZik7XG5cbiAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIlNldHRpbmcuLi5cIik7XG5cbiAgICAgICAgICAgIGNvbnN0IGJhdGNoID0gdGhpcy5maXJlc3RvcmUhLmJhdGNoKCk7XG5cbiAgICAgICAgICAgIGJhdGNoLnNldChkb2NNZXRhUmVmLCB0aGlzLmNyZWF0ZURvY0ZvckRvY01ldGEoZG9jSW5mbywgZGF0YSkpO1xuICAgICAgICAgICAgYmF0Y2guc2V0KGRvY0luZm9SZWYsIHRoaXMuY3JlYXRlRG9jRm9yRG9jSW5mbyhkb2NJbmZvKSk7XG5cbiAgICAgICAgICAgIGF3YWl0IGJhdGNoLmNvbW1pdCgpO1xuXG4gICAgICAgICAgICBsb2cuZGVidWcoXCJTZXR0aW5nLi4uZG9uZVwiKTtcblxuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBtYWtlIHN1cmUgdGhhdCB3ZSBvbmx5IHJldHVybiB3aGVuIGl0J3MgY29tbWl0dGVkXG4gICAgICAgICAgICAvLyByZW1vdGVseS4uLlxuICAgICAgICAgICAgbG9nLmRlYnVnKFwiV2FpdGluZyBmb3IgcHJvbWlzZS4uLlwiKTtcbiAgICAgICAgICAgIGF3YWl0IGRvY01ldGFDb21taXRQcm9taXNlO1xuICAgICAgICAgICAgbG9nLmRlYnVnKFwiV2FpdGluZyBmb3IgcHJvbWlzZS4uLmRvbmVcIik7XG5cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIC8vIG5vb3AgZm9yIG5vd1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgb3ZlcnZpZXcoKTogUHJvbWlzZTxEYXRhc3RvcmVPdmVydmlldyB8IHVuZGVmaW5lZD4ge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRQcmVmcygpOiBQcmVmc1Byb3ZpZGVyIHtcbiAgICAgICAgcmV0dXJuIFByb3ZpZGVycy50b0ludGVyZmFjZSgoKSA9PiBuZXcgTG9jYWxTdG9yYWdlUHJlZnMoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIHRoZSBkb2N1bWVudCB0aGF0IHdlIHdpbGwgc3RvcmUgaW4gZm9yIHRoZSBEb2NNZXRhXG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVEb2NGb3JEb2NNZXRhKGRvY0luZm86IERvY0luZm8sIGRvY01ldGE6IHN0cmluZykge1xuXG4gICAgICAgIGNvbnN0IHVpZCA9IHRoaXMuZ2V0VXNlcklEKCk7XG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5jb21wdXRlRG9jTWV0YUlEKHVpZCwgZG9jSW5mby5maW5nZXJwcmludCk7XG5cbiAgICAgICAgY29uc3QgZG9jTWV0YUhvbGRlcjogRG9jTWV0YUhvbGRlciA9IHtcbiAgICAgICAgICAgIGRvY0luZm8sXG4gICAgICAgICAgICB2YWx1ZTogZG9jTWV0YVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJlY29yZEhvbGRlcjogUmVjb3JkSG9sZGVyPERvY01ldGFIb2xkZXI+ID0ge1xuICAgICAgICAgICAgdWlkLFxuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBWaXNpYmlsaXR5LlBSSVZBVEUsXG4gICAgICAgICAgICB2YWx1ZTogZG9jTWV0YUhvbGRlclxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiByZWNvcmRIb2xkZXI7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZURvY0ZvckRvY0luZm8oZG9jSW5mbzogRG9jSW5mbykge1xuXG4gICAgICAgIGNvbnN0IHVpZCA9IHRoaXMuZ2V0VXNlcklEKCk7XG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5jb21wdXRlRG9jTWV0YUlEKHVpZCwgZG9jSW5mby5maW5nZXJwcmludCk7XG5cbiAgICAgICAgY29uc3QgcmVjb3JkSG9sZGVyOiBSZWNvcmRIb2xkZXI8RG9jSW5mbz4gPSB7XG4gICAgICAgICAgICB1aWQsXG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IFZpc2liaWxpdHkuUFJJVkFURSxcbiAgICAgICAgICAgIHZhbHVlOiBkb2NJbmZvXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHJlY29yZEhvbGRlcjtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBnZXREb2NNZXRhUmVmcygpOiBQcm9taXNlPERvY01ldGFSZWZbXT4ge1xuXG4gICAgICAgIGNvbnN0IHVpZCA9IHRoaXMuZ2V0VXNlcklEKCk7XG5cbiAgICAgICAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCB0aGlzLmZpcmVzdG9yZSFcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKERhdGFzdG9yZUNvbGxlY3Rpb24uRE9DX01FVEEpXG4gICAgICAgICAgICAud2hlcmUoJ3VpZCcsICc9PScsIHVpZClcbiAgICAgICAgICAgIC5nZXQoKTtcblxuICAgICAgICBjb25zdCByZXN1bHQ6IERvY01ldGFSZWZbXSA9IFtdO1xuXG4gICAgICAgIGZvciAoY29uc3QgZG9jIG9mIHNuYXBzaG90LmRvY3MpIHtcblxuICAgICAgICAgICAgY29uc3QgcmVjb3JkSG9sZGVyID0gPFJlY29yZEhvbGRlcjxEb2NNZXRhSG9sZGVyPj4gZG9jLmRhdGEoKTtcblxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe2ZpbmdlcnByaW50OiByZWNvcmRIb2xkZXIudmFsdWUuZG9jSW5mby5maW5nZXJwcmludH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjb21wdXRlU3RvcmFnZVBhdGgoYmFja2VuZDogQmFja2VuZCwgZmlsZVJlZjogRmlsZVJlZik6IFN0b3JhZ2VQYXRoIHtcblxuICAgICAgICBjb25zdCBleHQgPSBGaWxlUGF0aHMudG9FeHRlbnNpb24oZmlsZVJlZi5uYW1lKTtcblxuICAgICAgICBjb25zdCBzdWZmaXggPSBleHQubWFwKHZhbHVlID0+IHtcblxuICAgICAgICAgICAgICAgIGlmICggISB2YWx1ZS5zdGFydHNXaXRoKCcuJykgKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBzdWZmaXggZG9lc24ndCBiZWdpbiB3aXRoIGEgJy4nIHRoZW4gYWRkIGl0LlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9ICcuJyArIHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5nZXRPckVsc2UoJycpO1xuXG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5jb21wdXRlU3RvcmFnZVNldHRpbmdzKGV4dCkuZ2V0T3JVbmRlZmluZWQoKTtcblxuICAgICAgICBsZXQga2V5OiBhbnk7XG5cbiAgICAgICAgY29uc3QgdWlkID0gdGhpcy5nZXRVc2VySUQoKTtcblxuICAgICAgICBpZiAoZmlsZVJlZi5oYXNoY29kZSkge1xuXG4gICAgICAgICAgICBrZXkgPSB7XG5cbiAgICAgICAgICAgICAgICAvLyBXZSBpbmNsdWRlIHRoZSB1aWQgb2YgdGhlIHVzZXIgdG8gYXZvaWQgdGhlIGlzc3VlIG9mIHVzZXJcbiAgICAgICAgICAgICAgICAvLyBjb25mbGljdGluZyBvbiBmaWxlcyBhbmQgdGhlIGFiaWxpdHkgdG8gc2hhcmUgdGhlbSBwZXIgZmlsZS5cbiAgICAgICAgICAgICAgICAvLyBUaGUgY2xvdWQgc3RvcmFnZSBjb3N0cyBmb3IgcmF3IGJpbmFyeSBmaWxlcyBhcmVcbiAgICAgICAgICAgICAgICAvLyBpbmNvbnNlcXVlbnRpYWwgc28gaGF2ZSBvbmUgZmlsZSBwZXIgdXNlci5cblxuICAgICAgICAgICAgICAgIHVpZCxcbiAgICAgICAgICAgICAgICBiYWNrZW5kLFxuICAgICAgICAgICAgICAgIGFsZzogZmlsZVJlZi5oYXNoY29kZS5hbGcsXG4gICAgICAgICAgICAgICAgZW5jOiBmaWxlUmVmLmhhc2hjb2RlLmVuYyxcbiAgICAgICAgICAgICAgICBkYXRhOiBmaWxlUmVmLmhhc2hjb2RlLmRhdGEsXG4gICAgICAgICAgICAgICAgc3VmZml4XG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgLy8gYnVpbGQgYSB1bmlxdWUgbmFtZSBmcm9tIHRoZSBmaWxlbmFtZSBhbmQgdGhlIFVVSUQgb2YgdGhlIHVzZXIuXG4gICAgICAgICAgICAvLyB0aGlzIHNob3VsZG4ndCBhY3R1YWxseSBiZSB1c2VkIGV4Y2VwdCBpbiB0aGUgY2FzZXMgb2YgVkVSWSBvbGRcbiAgICAgICAgICAgIC8vIGRhdGFzdG9yZXMuXG4gICAgICAgICAgICBrZXkgPSB7XG4gICAgICAgICAgICAgICAgdWlkLFxuICAgICAgICAgICAgICAgIGZpbGVuYW1lOiBmaWxlUmVmLm5hbWVcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlkID0gSGFzaGNvZGVzLmNyZWF0ZUlEKGtleSwgNDApO1xuXG4gICAgICAgIGNvbnN0IHBhdGggPSBgJHtiYWNrZW5kfS8ke2lkfSR7c3VmZml4fWA7XG5cbiAgICAgICAgcmV0dXJuIHtwYXRoLCBzZXR0aW5nc307XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbXB1dGVTdG9yYWdlU2V0dGluZ3Mob3B0aW9uYWxFeHQ6IE9wdGlvbmFsPHN0cmluZz4pOiBPcHRpb25hbDxTdG9yYWdlU2V0dGluZ3M+IHtcblxuICAgICAgICBjb25zdCBQVUJMSUNfTUFYX0FHRV8xV0VFSyA9ICdwdWJsaWMsbWF4LWFnZT02MDQ4MDAnO1xuXG4gICAgICAgIGNvbnN0IGV4dCA9IG9wdGlvbmFsRXh0LmdldE9yRWxzZSgnJyk7XG5cbiAgICAgICAgaWYgKGV4dCA9PT0gJ2pwZycgfHwgZXh0ID09PSAnanBlZycpIHtcblxuICAgICAgICAgICAgcmV0dXJuIE9wdGlvbmFsLm9mKHtcbiAgICAgICAgICAgICAgICBjYWNoZUNvbnRyb2w6IFBVQkxJQ19NQVhfQUdFXzFXRUVLLFxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnaW1hZ2UvanBlZydcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXh0ID09PSAncGRmJykge1xuXG4gICAgICAgICAgICByZXR1cm4gT3B0aW9uYWwub2Yoe1xuICAgICAgICAgICAgICAgIGNhY2hlQ29udHJvbDogUFVCTElDX01BWF9BR0VfMVdFRUssXG4gICAgICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9wZGYnXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV4dCA9PT0gJ3BuZycpIHtcblxuICAgICAgICAgICAgcmV0dXJuIE9wdGlvbmFsLm9mKHtcbiAgICAgICAgICAgICAgICBjYWNoZUNvbnRyb2w6IFBVQkxJQ19NQVhfQUdFXzFXRUVLLFxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnaW1hZ2UvcG5nJ1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChleHQgPT09ICdzdmcnKSB7XG5cbiAgICAgICAgICAgIHJldHVybiBPcHRpb25hbC5vZih7XG4gICAgICAgICAgICAgICAgY2FjaGVDb250cm9sOiBQVUJMSUNfTUFYX0FHRV8xV0VFSyxcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogJ2ltYWdlL3N2ZydcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aGUgZmFsbCB0aHJvdWdoIG9mIGNhY2hlZCBkYXRhIHNob3VsZCB3b3JrIGZvciBQSFogZmlsZXMgYW5kIG90aGVyXG4gICAgICAgIC8vIHR5cGVzIG9mIGJpbmFyeSBkYXRhLlxuXG4gICAgICAgIHJldHVybiBPcHRpb25hbC5vZih7XG4gICAgICAgICAgICBjYWNoZUNvbnRyb2w6IFBVQkxJQ19NQVhfQUdFXzFXRUVLLFxuICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2FpdCBmb3IgdGhlIHJlY29yZCB0byBiZSBmdWxseSBjb21taXR0ZWQgdG8gdGhlIHJlbW90ZSBkYXRhc3RvcmUgLSBub3RcbiAgICAgKiBqdXN0IHdyaXR0ZW4gdG8gdGhlIGxvY2FsIGNhY2hlLlxuICAgICAqL1xuICAgIHByaXZhdGUgd2FpdEZvckNvbW1pdChyZWY6IGZpcmViYXNlLmZpcmVzdG9yZS5Eb2N1bWVudFJlZmVyZW5jZSk6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdW5zdWJzY3JpYmVUb1NuYXBzaG90ID0gcmVmLm9uU25hcHNob3Qoe2luY2x1ZGVNZXRhZGF0YUNoYW5nZXM6IHRydWV9LCBzbmFwc2hvdCA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXNuYXBzaG90Lm1ldGFkYXRhLmZyb21DYWNoZSAmJiAhc25hcHNob3QubWV0YWRhdGEuaGFzUGVuZGluZ1dyaXRlcykge1xuICAgICAgICAgICAgICAgICAgICB1bnN1YnNjcmliZVRvU25hcHNob3QoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZURhdGFzdG9yZU11dGF0aW9ucyhyZWY6IGZpcmViYXNlLmZpcmVzdG9yZS5Eb2N1bWVudFJlZmVyZW5jZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhc3RvcmVNdXRhdGlvbjogRGF0YXN0b3JlTXV0YXRpb248Ym9vbGVhbj4pIHtcblxuICAgICAgICBjb25zdCB1bnN1YnNjcmliZVRvU25hcHNob3QgPSByZWYub25TbmFwc2hvdCh7aW5jbHVkZU1ldGFkYXRhQ2hhbmdlczogdHJ1ZX0sIHNuYXBzaG90ID0+IHtcblxuICAgICAgICAgICAgaWYgKHNuYXBzaG90Lm1ldGFkYXRhLmZyb21DYWNoZSAmJiBzbmFwc2hvdC5tZXRhZGF0YS5oYXNQZW5kaW5nV3JpdGVzKSB7XG4gICAgICAgICAgICAgICAgZGF0YXN0b3JlTXV0YXRpb24ud3JpdHRlbi5yZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIkdvdCB3cml0dGVuIGZvcjogXCIsIHJlZik7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFzbmFwc2hvdC5tZXRhZGF0YS5mcm9tQ2FjaGUgJiYgIXNuYXBzaG90Lm1ldGFkYXRhLmhhc1BlbmRpbmdXcml0ZXMpIHtcblxuICAgICAgICAgICAgICAgIC8vIGl0J3MgYmVlbiBjb21taXR0ZWQgcmVtb3RlbHkgd2hpY2ggYWxzbyBpbXBsaWVzIGl0IHdhc1xuICAgICAgICAgICAgICAgIC8vIHdyaXR0ZW4gbG9jYWxseSBzbyByZXNvbHZlIHRoYXQgYXMgd2VsbC4gV2UgbWlnaHQgbm90IGFsd2F5c1xuICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgbG9jYWxseSB3cml0dGVuIGNhbGxiYWNrIGFuZCBJIHRoaW5rIHRoaXMgaGFwcGVuc1xuICAgICAgICAgICAgICAgIC8vIHdoZW4gdGhlIGNhY2hlIGVudHJ5IGNhbid0IGJlIHVwZGF0ZWQgZHVlIHRvIGl0IGFscmVhZHkgYmVpbmdcbiAgICAgICAgICAgICAgICAvLyBwZW5kaW5nLlxuXG4gICAgICAgICAgICAgICAgZGF0YXN0b3JlTXV0YXRpb24ud3JpdHRlbi5yZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgIGRhdGFzdG9yZU11dGF0aW9uLmNvbW1pdHRlZC5yZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIkdvdCBjb21taXR0ZWQgZm9yOiBcIiwgcmVmKTtcblxuICAgICAgICAgICAgICAgIC8vIG5vdCBpbnRlcmVzdGVkIGluIHNuYXBzaG90cyBmcm9tIHRoaXMgZG9jdW1lbnQgYW55IG1vcmUuXG4gICAgICAgICAgICAgICAgdW5zdWJzY3JpYmVUb1NuYXBzaG90KCk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIG5ldyBkYXRhIGlzIGF2YWlsYWJsZSBmcm9tIEZpcmViYXNlIHNvIHdlIGNhbiBzb2x2ZSBwcm9taXNlcyxcbiAgICAgKiBhZGQgdGhpbmdzIHRvIGxvY2FsIHN0b3JlcywgZXRjLlxuICAgICAqXG4gICAgICogQUxMIG9wZXJhdGlvbnMgYXJlIGRvbmUgdmlhIHNuYXBzaG90cyB3aGljaCB3ZSBjcmVhdGUgYW5kIHN1YnNjcmliZSB0b1xuICAgICAqIG9uIGluaXQoKS5cbiAgICAgKlxuICAgICAqIFRoaXMgc29sdmVzIHRvIHByb2JsZW1zOlxuICAgICAqXG4gICAgICogMS4gVGhlIG1vc3QgaW1wb3J0YW50LCBpcyB0aGF0IHdoZW4gZGF0YSBpcyBhZGRlZCByZW1vdGVseSAodGhlIHVzZXIgaXNcbiAgICAgKiAgICBvbiBhbm90aGVyIG1hY2hpbmUgYW5kIHRoaXMgbWFjaGluZS1yZWpvaW5zIHRoZSBuZXR3b3JrIG9yIGRldGVjdHNcbiAgICAgKiAgICBjaGFuZ2VzKSB0aGVuIGNvbnRlbnQgaWYgcHVsbGVkIGxvY2FsbHkgYW5kIGFkZGVkIHRvIHRoZSBsb2NhbFxuICAgICAqICAgIGRhdGFzdG9yZS5cbiAgICAgKlxuICAgICAqIDIuIExvY2FsIGRhdGEgaXMgYWRkZWQgdmlhIHRoZSBzYW1lIGNvZGUgcGF0aC4gIFRoZSBjb2RlIHBhdGggaXMgcmVtb3RlLVxuICAgICAqICAgIGZpcnN0IGJ1dCB0aGVuIHRoZW4gaW1tZWRpYXRlbHkgcmVzb2x2ZWQgZnJvbSB0aGUgY2FjaGUgYW5kIGFkZGVkXG4gICAgICogICAgbG9jYWxseS5cbiAgICAgKi9cbiAgICBwcml2YXRlIGhhbmRsZURvY0luZm9TbmFwc2hvdChzbmFwc2hvdDogZmlyZWJhc2UuZmlyZXN0b3JlLlF1ZXJ5U25hcHNob3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcjogRG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXRjaElEOiBudW1iZXIpIHtcblxuICAgICAgICBsb2cuZGVidWcoXCJvblNuYXBzaG90Li4uIFwiKTtcblxuICAgICAgICBjb25zdCBkb2NNZXRhTXV0YXRpb25Gcm9tUmVjb3JkID0gKHJlY29yZDogUmVjb3JkSG9sZGVyPERvY0luZm8+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uVHlwZTogTXV0YXRpb25UeXBlID0gJ2NyZWF0ZWQnKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGlkID0gcmVjb3JkLmlkO1xuXG4gICAgICAgICAgICBjb25zdCBkb2NJbmZvID0gcmVjb3JkLnZhbHVlO1xuXG4gICAgICAgICAgICBjb25zdCBkYXRhUHJvdmlkZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZ2V0RG9jTWV0YShkb2NJbmZvLmZpbmdlcnByaW50KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGRvY01ldGFQcm92aWRlciA9IEFzeW5jUHJvdmlkZXJzLm1lbW9pemUoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkYXRhUHJvdmlkZXIoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkb2NNZXRhSUQgPSB0aGlzLmNvbXB1dGVEb2NNZXRhSUQodGhpcy5nZXRVc2VySUQoKSwgZG9jSW5mby5maW5nZXJwcmludCk7XG4gICAgICAgICAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnRQcmVzZW50KGRhdGEsIGBObyBkYXRhIGZvciBkb2NNZXRhIHdpdGggZmluZ2VycHJpbnQ6ICR7ZG9jSW5mby5maW5nZXJwcmludH0sIGRvY01ldGFJRDogJHtkb2NNZXRhSUR9YCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIERvY01ldGFzLmRlc2VyaWFsaXplKGRhdGEhLCBkb2NJbmZvLmZpbmdlcnByaW50KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBkb2NNZXRhTXV0YXRpb246IEZpcmViYXNlRG9jTWV0YU11dGF0aW9uID0ge1xuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIGZpbmdlcnByaW50OiBkb2NJbmZvLmZpbmdlcnByaW50LFxuICAgICAgICAgICAgICAgIGRhdGFQcm92aWRlcixcbiAgICAgICAgICAgICAgICBkb2NNZXRhUHJvdmlkZXIsXG4gICAgICAgICAgICAgICAgZG9jSW5mb1Byb3ZpZGVyOiBBc3luY1Byb3ZpZGVycy5vZihkb2NJbmZvKSxcbiAgICAgICAgICAgICAgICBkb2NNZXRhRmlsZVJlZlByb3ZpZGVyOiBBc3luY1Byb3ZpZGVycy5vZihEb2NNZXRhRmlsZVJlZnMuY3JlYXRlRnJvbURvY0luZm8oZG9jSW5mbykpLFxuICAgICAgICAgICAgICAgIG11dGF0aW9uVHlwZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmV0dXJuIGRvY01ldGFNdXRhdGlvbjtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGRvY01ldGFNdXRhdGlvbkZyb21Eb2NDaGFuZ2UgPSAoZG9jQ2hhbmdlOiBmaXJlYmFzZS5maXJlc3RvcmUuRG9jdW1lbnRDaGFuZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlY29yZCA9IDxSZWNvcmRIb2xkZXI8RG9jSW5mbz4+IGRvY0NoYW5nZS5kb2MuZGF0YSgpO1xuICAgICAgICAgICAgcmV0dXJuIGRvY01ldGFNdXRhdGlvbkZyb21SZWNvcmQocmVjb3JkLCB0b011dGF0aW9uVHlwZShkb2NDaGFuZ2UudHlwZSkpO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZG9jTWV0YU11dGF0aW9uRnJvbURvYyA9IChkb2M6IGZpcmViYXNlLmZpcmVzdG9yZS5Eb2N1bWVudERhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlY29yZCA9IDxSZWNvcmRIb2xkZXI8RG9jSW5mbz4+IGRvYztcbiAgICAgICAgICAgIHJldHVybiBkb2NNZXRhTXV0YXRpb25Gcm9tUmVjb3JkKHJlY29yZCwgJ2NyZWF0ZWQnKTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGhhbmRsZURvY01ldGFNdXRhdGlvbiA9IGFzeW5jIChkb2NNZXRhTXV0YXRpb246IERvY01ldGFNdXRhdGlvbikgPT4ge1xuXG4gICAgICAgICAgICAvLyBkaXNwYXRjaCBhIHByb2dyZXNzIGV2ZW50IHNvIHdlIGNhbiBkZXRlY3QgaG93IGZhciB3ZSd2ZSBiZWVuXG4gICAgICAgICAgICAvLyBsb2FkaW5nXG4gICAgICAgICAgICBhd2FpdCBkb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyKHtcbiAgICAgICAgICAgICAgICBkYXRhc3RvcmU6IHRoaXMuaWQsXG4gICAgICAgICAgICAgICAgY29uc2lzdGVuY3ksXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IHByb2dyZXNzVHJhY2tlci5pbmNyKCksXG4gICAgICAgICAgICAgICAgZG9jTWV0YU11dGF0aW9uczogW2RvY01ldGFNdXRhdGlvbl0sXG4gICAgICAgICAgICAgICAgYmF0Y2g6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGJhdGNoSUQsXG4gICAgICAgICAgICAgICAgICAgIHRlcm1pbmF0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaGFuZGxlRG9jQ2hhbmdlID0gKGRvY0NoYW5nZTogZmlyZWJhc2UuZmlyZXN0b3JlLkRvY3VtZW50Q2hhbmdlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkb2NNZXRhTXV0YXRpb24gPSBkb2NNZXRhTXV0YXRpb25Gcm9tRG9jQ2hhbmdlKGRvY0NoYW5nZSk7XG4gICAgICAgICAgICBoYW5kbGVEb2NNZXRhTXV0YXRpb24oZG9jTWV0YU11dGF0aW9uKVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gbG9nLmVycm9yKGVycikpO1xuXG4gICAgICAgIH07XG5cblxuICAgICAgICBjb25zdCBoYW5kbGVEb2MgPSAoZG9jOiBmaXJlYmFzZS5maXJlc3RvcmUuUXVlcnlEb2N1bWVudFNuYXBzaG90KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkb2NNZXRhTXV0YXRpb24gPSBkb2NNZXRhTXV0YXRpb25Gcm9tRG9jKGRvYy5kYXRhKCkpO1xuICAgICAgICAgICAgaGFuZGxlRG9jTWV0YU11dGF0aW9uKGRvY01ldGFNdXRhdGlvbilcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihlcnIpKTtcblxuICAgICAgICB9O1xuXG5cbiAgICAgICAgY29uc3QgY29uc2lzdGVuY3kgPSBzbmFwc2hvdC5tZXRhZGF0YS5mcm9tQ2FjaGUgPyAnd3JpdHRlbicgOiAnY29tbWl0dGVkJztcblxuICAgICAgICBjb25zdCBkb2NDaGFuZ2VzID0gc25hcHNob3QuZG9jQ2hhbmdlcygpO1xuXG4gICAgICAgIGNvbnN0IG5yRG9jQ2hhbmdlcyA9IGRvY0NoYW5nZXMubGVuZ3RoO1xuICAgICAgICBjb25zdCBuckRvY3MgPSBzbmFwc2hvdC5kb2NzLmxlbmd0aDtcblxuICAgICAgICAvLyBsb2cubm90aWNlKGBHT1QgU05BUFNIT1Qgd2l0aCBjb25zaXN0ZW5jeSAke2NvbnNpc3RlbmN5fSwgbnJEb2NzOlxuICAgICAgICAvLyAke25yRG9jc30sIG5yRG9jQ2hhbmdlczogJHtuckRvY0NoYW5nZXN9YCk7XG5cbiAgICAgICAgLy8gaWYgKGRvY0NoYW5nZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vICAgICBsb2cubm90aWNlKFwiU0tJUFBJTkcgU05BUFNIT1QgKG5vIGRvY0NoYW5nZXMpXCIpO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgY29uc3QgcHJvZ3Jlc3NUcmFja2VyID0gbmV3IFByb2dyZXNzVHJhY2tlcihkb2NDaGFuZ2VzLmxlbmd0aCwgJ2ZpcmViYXNlLXNuYXBzaG90Jyk7XG5cbiAgICAgICAgZm9yIChjb25zdCBkb2NDaGFuZ2Ugb2YgZG9jQ2hhbmdlcykge1xuICAgICAgICAgICAgaGFuZGxlRG9jQ2hhbmdlKGRvY0NoYW5nZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwcm9ncmVzc1RyYWNrZXIgPSBuZXcgUHJvZ3Jlc3NUcmFja2VyKHNuYXBzaG90LmRvY3MubGVuZ3RoKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gZm9yIChjb25zdCBkb2Mgb2Ygc25hcHNob3QuZG9jcykge1xuICAgICAgICAvLyAgICAgaGFuZGxlRG9jKGRvYyk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICBkb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyKHtcbiAgICAgICAgICAgIGRhdGFzdG9yZTogdGhpcy5pZCxcbiAgICAgICAgICAgIGNvbnNpc3RlbmN5LFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IHByb2dyZXNzVHJhY2tlci50ZXJtaW5hdGUoKSxcbiAgICAgICAgICAgIGRvY01ldGFNdXRhdGlvbnM6IFtdLFxuICAgICAgICAgICAgYmF0Y2g6IHtcbiAgICAgICAgICAgICAgICBpZDogYmF0Y2hJRCxcbiAgICAgICAgICAgICAgICB0ZXJtaW5hdGVkOiB0cnVlLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnIgPT4gbG9nLmVycm9yKFwiVW5hYmxlIHRvIGRpc3BhdGNoIGV2ZW50IGxpc3RlbmVyXCIpKTtcblxuICAgICAgICBsb2cuZGVidWcoXCJvblNuYXBzaG90Li4uIGRvbmVcIik7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHRvQ29uc2lzdGVuY3koc25hcHNob3Q6IGZpcmViYXNlLmZpcmVzdG9yZS5RdWVyeVNuYXBzaG90KTogRGF0YXN0b3JlQ29uc2lzdGVuY3kge1xuICAgICAgICByZXR1cm4gc25hcHNob3QubWV0YWRhdGEuZnJvbUNhY2hlID8gJ3dyaXR0ZW4nIDogJ2NvbW1pdHRlZCc7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjb21wdXRlRG9jTWV0YUlEKHVpZDogVXNlcklELCBmaW5nZXJwcmludDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBIYXNoY29kZXMuY3JlYXRlSUQodWlkICsgJzonICsgZmluZ2VycHJpbnQsIDMyKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFVzZXJJRCgpOiBVc2VySUQge1xuXG4gICAgICAgIGNvbnN0IGF1dGggPSB0aGlzLmFwcCEuYXV0aCgpO1xuICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydFByZXNlbnQoYXV0aCwgXCJOb3QgYXV0aGVudGljYXRlZFwiKTtcblxuICAgICAgICBjb25zdCB1c2VyID0gYXV0aC5jdXJyZW50VXNlcjtcbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnRQcmVzZW50KHVzZXIsIFwiTm90IGF1dGhlbnRpY2F0ZWRcIik7XG5cbiAgICAgICAgcmV0dXJuIHVzZXIhLnVpZDtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhZGREb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyKGRvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXI6IERvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kb2NNZXRhU25hcHNob3RFdmVudERpc3BhdGNoZXIuYWRkRXZlbnRMaXN0ZW5lcihkb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHByZWZlcnJlZFNvdXJjZSgpOiBGaXJlc3RvcmVTb3VyY2Uge1xuXG4gICAgICAgIGlmIChBcHBSdW50aW1lLmlzQnJvd3NlcigpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2NhY2hlJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnZGVmYXVsdCc7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG50eXBlIEZpcmVzdG9yZVNvdXJjZSA9ICdkZWZhdWx0JyB8ICdzZXJ2ZXInIHwgJ2NhY2hlJztcblxuLyoqXG4gKiBIb2xkcyBhIGRhdGEgb2JqZWN0IGxpdGVyYWwgYnkgdmFsdWUuIFRoaXMgY29udGFpbnMgdGhlIGhpZ2ggbGV2ZWxcbiAqIGluZm9ybWF0aW9uIGFib3V0IGEgZG9jdW1lbnQgaW5jbHVkaW5nIHRoZSBJRCBhbmQgdGhlIHZpc2liaWxpdHkuICBUaGUgdmFsdWVcbiAqIG9iamVjdCBwb2ludHMgdG8gYSBtb3JlIHNwZWNpZmljIG9iamVjdCB3aGljaCBob2xkIHRoZSBhY3R1YWwgZGF0YSB3ZSBuZWVkLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJlY29yZEhvbGRlcjxUPiB7XG5cbiAgICAvLyB0aGUgb3duZXIgb2YgdGhpcyByZWNvcmQuXG4gICAgcmVhZG9ubHkgdWlkOiBVc2VySUQ7XG5cbiAgICAvLyB0aGUgdmlzaWJpbHR5IG9mIHRoaXMgcmVjb3JkLlxuICAgIHJlYWRvbmx5IHZpc2liaWxpdHk6IFZpc2liaWxpdHk7XG5cbiAgICByZWFkb25seSBpZDogc3RyaW5nO1xuXG4gICAgcmVhZG9ubHkgdmFsdWU6IFQ7XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBEb2NNZXRhSG9sZGVyIHtcblxuICAgIC8vIGV4cG9zZSB0aGUgaGlnaCBsZXZlbCBEb2NJbmZvIG9uIHRoaXMgb2JqZWN0IHdoaWNoIGFsbG93cyB1cyB0byBzZWFyY2ggYnlcbiAgICAvLyBVUkwsIHRhZ3MsIGV0Yy5cbiAgICByZWFkb25seSBkb2NJbmZvOiBJRG9jSW5mbztcblxuICAgIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XG5cbn1cblxuXG5leHBvcnQgZW51bSBWaXNpYmlsaXR5IHtcblxuICAgIC8qKlxuICAgICAqIE9ubHkgdmlzaWJsZSBmb3IgdGhlIHVzZXIuXG4gICAgICovXG4gICAgUFJJVkFURSA9ICdwcml2YXRlJywgLyogb3IgMCAqL1xuXG4gICAgLyoqXG4gICAgICogT25seSB0byB1c2VycyB0aGF0IHRoaXMgdXNlciBpcyBmb2xsb3dpbmcuXG4gICAgICovXG4gICAgRk9MTE9XSU5HID0gJ2ZvbGxvd2luZycsIC8qIG9yIDEgKi9cblxuICAgIC8qKlxuICAgICAqIFRvIGFueW9uZSBvbiB0aGUgc2VydmljZS5cbiAgICAgKi9cbiAgICBQVUJMSUMgPSAncHVibGljJyAvKiBvciAyICovXG5cbn1cblxuZXhwb3J0IGVudW0gRGF0YXN0b3JlQ29sbGVjdGlvbiB7XG5cbiAgICBET0NfSU5GTyA9IFwiZG9jX2luZm9cIixcblxuICAgIERPQ19NRVRBID0gXCJkb2NfbWV0YVwiLFxuXG4gICAgRE9DX0ZJTEVfTUVUQSA9IFwiZG9jX2ZpbGVfbWV0YVwiXG5cbn1cblxuXG4vKipcbiAqIFRoZSByZXN1bHQgb2YgYSBGQiBkYXRhYmFzZSBtdXRhdGlvbi5cbiAqL1xuaW50ZXJmYWNlIE11dGF0aW9uIHtcblxufVxuXG5pbnRlcmZhY2UgUGVuZGluZ011dGF0aW9uSW5kZXgge1xuICAgIFtpZDogc3RyaW5nXTogUGVuZGluZ011dGF0aW9uO1xufVxuXG5pbnRlcmZhY2UgUGVuZGluZ011dGF0aW9uIHtcblxuICAgIGlkOiBzdHJpbmc7XG4gICAgdHlwZTogJ2RlbGV0ZScgfCAnd3JpdGUnO1xuXG59XG5cbmludGVyZmFjZSBGaXJlYmFzZURvY01ldGFNdXRhdGlvbiBleHRlbmRzIERvY01ldGFNdXRhdGlvbiB7XG4gICAgcmVhZG9ubHkgaWQ6IHN0cmluZztcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgRmlyZXN0b3JlIERvY3VtZW50Q2hhbmdlVHlwZSB0byBhIERvY011dGF0aW9uVHlwZS4gIFdlIHByZWZlciB0aGVcbiAqIENSVUQgKGNyZWF0ZSB1cGRhdGUgZGVsZXRlKSBuYW1pbmcuXG4gKiBAcGFyYW0gZG9jQ2hhbmdlVHlwZVxuICovXG5mdW5jdGlvbiB0b011dGF0aW9uVHlwZShkb2NDaGFuZ2VUeXBlOiBmaXJlYmFzZS5maXJlc3RvcmUuRG9jdW1lbnRDaGFuZ2VUeXBlKTogTXV0YXRpb25UeXBlIHtcblxuICAgIHN3aXRjaCAoZG9jQ2hhbmdlVHlwZSkge1xuXG4gICAgICAgIGNhc2UgJ2FkZGVkJzpcbiAgICAgICAgICAgIHJldHVybiAnY3JlYXRlZCc7XG5cbiAgICAgICAgY2FzZSAnbW9kaWZpZWQnOlxuICAgICAgICAgICAgcmV0dXJuICd1cGRhdGVkJztcblxuICAgICAgICBjYXNlICdyZW1vdmVkJzpcbiAgICAgICAgICAgIHJldHVybiAnZGVsZXRlZCc7XG5cbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIFN0b3JhZ2VQYXRoIHtcbiAgICByZWFkb25seSBwYXRoOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgc2V0dGluZ3M/OiBTdG9yYWdlU2V0dGluZ3M7XG59XG5cbmludGVyZmFjZSBTdG9yYWdlU2V0dGluZ3Mge1xuICAgIHJlYWRvbmx5IGNhY2hlQ29udHJvbDogc3RyaW5nO1xuICAgIHJlYWRvbmx5IGNvbnRlbnRUeXBlOiBzdHJpbmc7XG59XG5cbiJdfQ==