/**
 * Datastore just in memory with no on disk persistence.
 */
import {
    AbstractDatastore,
    Datastore,
    DeleteResult,
    DocMetaSnapshotEventListener,
    ErrorListener,
    FileMeta,
    FileRef,
    SnapshotResult,
    DatastoreOverview,
    PrefsProvider
} from './Datastore';
import {isPresent, Preconditions} from '../Preconditions';
import {DocMetaFileRef, DocMetaRef} from './DocMetaRef';
import {Logger} from '../logger/Logger';
import {FileHandle, Files} from '../util/Files';
import {Backend} from './Backend';
import {DocFileMeta} from './DocFileMeta';
import {Optional} from '../util/ts/Optional';
import {DocInfo} from '../metadata/DocInfo';
import {DatastoreMutation, DefaultDatastoreMutation} from './DatastoreMutation';
import {Datastores} from './Datastores';
import {NULL_FUNCTION} from '../util/Functions';
import {DiskInitResult} from './DiskDatastore';
import {ISODateTimeString, ISODateTimeStrings} from '../metadata/ISODateTimeStrings';
import {DictionaryPrefs} from '../util/prefs/Prefs';
import {Providers} from '../util/Providers';
import {InteleasePdfReader} from "../apps/intelease-pdf-reader";

const log = Logger.create();

export class MemoryDatastore extends AbstractDatastore implements Datastore {

    public readonly id = 'memory';

    private readonly created: ISODateTimeString;

    protected readonly docMetas: { [fingerprint: string]: string } = {};

    protected readonly files: { [key: string]: FileData } = {};

    private readonly prefs = new DictionaryPrefs();

    public docMeta: any = "";

    constructor() {
        super();

        this.docMetas = {};
        this.created = ISODateTimeStrings.create();

    }


    // noinspection TsLint
    public async init(errorListener: ErrorListener = NULL_FUNCTION): Promise<DiskInitResult> {
        return {};
    }

    public async stop() {
        // noop
    }

    public async contains(fingerprint: string): Promise<boolean> {
        return fingerprint in this.docMetas;
    }

    public async delete(docMetaFileRef: DocMetaFileRef): Promise<Readonly<DeleteResult>> {

        const result: any = {
            docMetaFile: {
                path: `/${docMetaFileRef.fingerprint}.json`,
                deleted: false
            },
            dataFile: {
                path: '/' + Optional.of(docMetaFileRef.docFile)
                    .map(current => current.name)
                    .getOrUndefined(),
                deleted: false
            }
        };

        if (await this.contains(docMetaFileRef.fingerprint)) {
            result.docMetaFile.deleted = true;
            result.dataFile.deleted = true;
        }

        return result;

    }

    public async writeFile(backend: Backend,
                           ref: FileRef,
                           data: FileHandle | Buffer | string,
                           meta: FileMeta = {}): Promise<DocFileMeta> {

        const key = this.toFileRefKey(backend, ref);

        let buff: Buffer | undefined;

        if (typeof data === 'string') {
            buff = Buffer.from(data);
        } else if (data instanceof Buffer) {
            buff = data;
        } else {
            buff = await Files.readFileAsync(data.path);
        }

        this.files[key] = {buffer: buff!, meta};

        return {backend, ref, url: 'FIXME:none', meta};

    }

    public async getFile(backend: Backend, ref: FileRef): Promise<Optional<DocFileMeta>> {

        const key = this.toFileRefKey(backend, ref);

        if (!key) {
            return Optional.empty();
        }

        const fileData = this.files[key];

        return Optional.of({backend, ref, url: 'FIXME:none', meta: fileData.meta});

    }

    public async containsFile(backend: Backend, ref: FileRef): Promise<boolean> {
        const key = this.toFileRefKey(backend, ref);
        return isPresent(this.files[key]);
    }

    public async deleteFile(backend: Backend, ref: FileRef): Promise<void> {
        const key = this.toFileRefKey(backend, ref);
        delete this.files[key];
    }

    /**
     */
    public async getDocMeta(fingerprint: string): Promise<string | null> {

        const nrDocs = Object.keys(this.docMetas).length;

        log.info(`Fetching document from datastore with fingerprint ${fingerprint} of ${nrDocs} docs.`);

        // return this.docMetas[fingerprint];
        return InteleasePdfReader.getInstance().annotations;
    }

    /**
     * Write the datastore to disk.
     */
    public async write(fingerprint: string,
                       data: string,
                       docInfo: DocInfo,
                       datastoreMutation: DatastoreMutation<boolean> = new DefaultDatastoreMutation()): Promise<void> {

        Preconditions.assertTypeOf(data, "string", "data");

        this.docMetas[fingerprint] = data;
        InteleasePdfReader.getInstance().updateDocMeta(data);
        datastoreMutation.written.resolve(true);
        datastoreMutation.committed.resolve(true);

    }

    public async getDocMetaRefs(): Promise<DocMetaRef[]> {

        return Object.keys(this.docMetas)
            .map(fingerprint => <DocMetaRef> {fingerprint});

    }

    public async snapshot(listener: DocMetaSnapshotEventListener): Promise<SnapshotResult> {

        return Datastores.createCommittedSnapshot(this, listener);

    }

    public addDocMetaSnapshotEventListener(docMetaSnapshotEventListener: DocMetaSnapshotEventListener): void {
        // noop now
    }

    public async overview(): Promise<DatastoreOverview> {

        const docMetaRefs = await this.getDocMetaRefs();

        return {nrDocs: docMetaRefs.length, created: this.created};

    }

    private toFileRefKey(backend: Backend, fileRef: FileRef) {
        return `${backend}:${fileRef.name}`;
    }

    public getPrefs(): PrefsProvider {
        return Providers.toInterface(() => this.prefs);
    }

}

interface FileData {
    buffer: Buffer;
    meta: FileMeta;
}
