"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppPath_1 = require("../../../electron/app_path/AppPath");
const FilePaths_1 = require("../../../util/FilePaths");
const PDFImporter_1 = require("../importers/PDFImporter");
const Providers_1 = require("../../../util/Providers");
const Pagemarks_1 = require("../../../metadata/Pagemarks");
const Logger_1 = require("../../../logger/Logger");
const ISODateTimeStrings_1 = require("../../../metadata/ISODateTimeStrings");
const Optional_1 = require("../../../util/ts/Optional");
const DocMetas_1 = require("../../../metadata/DocMetas");
const Backend_1 = require("../../../datastore/Backend");
const AppRuntime_1 = require("../../../AppRuntime");
const LoadExampleDocsMeta_1 = require("./LoadExampleDocsMeta");
const Hashcode_1 = require("../../../metadata/Hashcode");
const Hashcode_2 = require("../../../metadata/Hashcode");
const log = Logger_1.Logger.create();
class LoadExampleDocs {
    constructor(persistenceLayer) {
        this.persistenceLayer = persistenceLayer;
        this.pdfImporter
            = new PDFImporter_1.PDFImporter(Providers_1.Providers.toInterface(Providers_1.Providers.of(this.persistenceLayer)));
    }
    load(onLoaded) {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield this.hasDocs()) {
                log.debug("Docs already exist");
                return;
            }
            const promises = [
                this.doDoc0(),
                this.doDoc1(),
                this.doDoc2(),
                this.doDoc3(),
                this.doDoc4(),
                this.doDoc5(),
                this.doDoc6(),
                this.doDoc7()
            ];
            for (const promise of promises) {
                promise
                    .then(docMeta => {
                    if (docMeta) {
                        onLoaded(docMeta.docInfo);
                    }
                    else {
                        log.warn("Unable to load docMeta");
                    }
                }).catch(err => log.error("Unable to load docInfo: ", err));
            }
            yield Promise.all(promises);
        });
    }
    doDoc7() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.doDoc(FilePaths_1.FilePaths.join('docs', 'examples', 'pdf', 'dremel.pdf'), {
                fingerprint: "69cf32b9ffbb82056a3ac0eadea447de",
                title: "Dremel: Interactive Analysis of Web-Scale Datasets",
                tags: this.createTags('google', 'dremel'),
                added: ISODateTimeStrings_1.ISODateTimeStrings.adjust(ISODateTimeStrings_1.ISODateTimeStrings.create(), '-2d'),
                lastUpdated: ISODateTimeStrings_1.ISODateTimeStrings.adjust(ISODateTimeStrings_1.ISODateTimeStrings.create(), '-8h'),
                pagemarkEnd: 1,
                url: "https://storage.googleapis.com/polar-32b0f.appspot.com/public/dremel.pdf",
                nrPages: 10,
                hashcode: {
                    enc: Hashcode_2.HashEncoding.BASE58CHECK,
                    alg: Hashcode_1.HashAlgorithm.KECCAK256,
                    data: "13e69EGrqZdoaAcKdzECCYwVkEAZ3HVsjh9UNccSjEcmTNCSRz"
                }
            });
        });
    }
    doDoc6() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.doDoc(FilePaths_1.FilePaths.join('docs', 'examples', 'pdf', 'datacenter-as-a-computer.pdf'), {
                fingerprint: "a81fe1c43148c3448e1a4133a5c8005e",
                title: "The Datacenter as a Computer",
                tags: this.createTags('google', 'datacenters'),
                added: ISODateTimeStrings_1.ISODateTimeStrings.adjust(ISODateTimeStrings_1.ISODateTimeStrings.create(), '-2d'),
                lastUpdated: ISODateTimeStrings_1.ISODateTimeStrings.adjust(ISODateTimeStrings_1.ISODateTimeStrings.create(), '-8h'),
                pagemarkEnd: 2,
                url: "https://storage.googleapis.com/polar-32b0f.appspot.com/public/datacenter-as-a-computer.pdf",
                nrPages: 120,
                hashcode: {
                    enc: Hashcode_2.HashEncoding.BASE58CHECK,
                    alg: Hashcode_1.HashAlgorithm.KECCAK256,
                    data: "12gk1XzeM8rCLbSmPnHSNYqWPkJ4V4LQW7WLo1MFJfGJMQVVQzU"
                }
            });
        });
    }
    doDoc5() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.doDoc(FilePaths_1.FilePaths.join('docs', 'examples', 'pdf', 'chubby.pdf'), {
                fingerprint: "c29bc1717788b1602a3cf4ed28ddfbcd",
                title: "The Chubby lock service for loosely-coupled distributed systems",
                tags: this.createTags('google', 'chubby'),
                added: ISODateTimeStrings_1.ISODateTimeStrings.adjust(ISODateTimeStrings_1.ISODateTimeStrings.create(), '-1d'),
                lastUpdated: ISODateTimeStrings_1.ISODateTimeStrings.adjust(ISODateTimeStrings_1.ISODateTimeStrings.create(), '-3h'),
                pagemarkEnd: 2,
                url: "https://storage.googleapis.com/polar-32b0f.appspot.com/public/chubby.pdf",
                nrPages: 16,
                hashcode: {
                    enc: Hashcode_2.HashEncoding.BASE58CHECK,
                    alg: Hashcode_1.HashAlgorithm.KECCAK256,
                    data: "12dVEYTS8znhWJNCYUcGHSfWKQqfifBmbShRLxbLvNVYX5BK3sS"
                }
            });
        });
    }
    doDoc4() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.doDoc(FilePaths_1.FilePaths.join('docs', 'examples', 'pdf', 'borg.pdf'), {
                fingerprint: "3417be32534083dea66d733604d36d75",
                title: "Large-scale cluster management at Google with Borg",
                tags: this.createTags('google', 'borg', 'docker'),
                added: ISODateTimeStrings_1.ISODateTimeStrings.adjust(ISODateTimeStrings_1.ISODateTimeStrings.create(), '-3d'),
                lastUpdated: ISODateTimeStrings_1.ISODateTimeStrings.adjust(ISODateTimeStrings_1.ISODateTimeStrings.create(), '-8h'),
                pagemarkEnd: 2,
                url: "https://storage.googleapis.com/polar-32b0f.appspot.com/public/borg.pdf",
                nrPages: 17,
                hashcode: {
                    enc: Hashcode_2.HashEncoding.BASE58CHECK,
                    alg: Hashcode_1.HashAlgorithm.KECCAK256,
                    data: "19YRZoEqfbhmY2GqQVKcbjfgbm1hZc5TwKdfUo3QW3TVz126bH"
                }
            });
        });
    }
    doDoc3() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.doDoc(FilePaths_1.FilePaths.join('docs', 'examples', 'pdf', 'availability.pdf'), {
                fingerprint: "39b730b6e9d281b0eae91b2c2c29b842",
                title: "Availability in Globally Distributed Storage Systems",
                tags: this.createTags('google', 'availability'),
                added: ISODateTimeStrings_1.ISODateTimeStrings.adjust(ISODateTimeStrings_1.ISODateTimeStrings.create(), '-2d'),
                lastUpdated: ISODateTimeStrings_1.ISODateTimeStrings.adjust(ISODateTimeStrings_1.ISODateTimeStrings.create(), '-12h'),
                pagemarkEnd: 7,
                url: "https://storage.googleapis.com/polar-32b0f.appspot.com/public/availability.pdf",
                nrPages: 14,
                hashcode: {
                    enc: Hashcode_2.HashEncoding.BASE58CHECK,
                    alg: Hashcode_1.HashAlgorithm.KECCAK256,
                    data: "12Ji9JDcRnZT27jeckr4HusYY29QVwj4Wv2J6iYc5YXjtzn3ZJT"
                }
            });
        });
    }
    createTag(id, label) {
        return { id, label: label || id };
    }
    createTags(...labels) {
        const result = {};
        for (const label of labels) {
            const id = label;
            result[id] = { id, label };
        }
        return result;
    }
    doDoc0() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.doDoc(FilePaths_1.FilePaths.join('docs', 'examples', 'pdf', 'pub47492.pdf'), {
                fingerprint: "6ea16525b2e4eab7b946f68419a345a6",
                title: "Efficient Live Expansion for Clos Data Center Networks",
                tags: this.createTags('google', 'datacenters'),
                added: ISODateTimeStrings_1.ISODateTimeStrings.adjust(ISODateTimeStrings_1.ISODateTimeStrings.create(), '-2h'),
                lastUpdated: ISODateTimeStrings_1.ISODateTimeStrings.adjust(ISODateTimeStrings_1.ISODateTimeStrings.create(), '-1h'),
                pagemarkEnd: 17,
                url: "https://storage.googleapis.com/polar-32b0f.appspot.com/public/pub47492.pdf",
                nrPages: 20,
                hashcode: {
                    enc: Hashcode_2.HashEncoding.BASE58CHECK,
                    alg: Hashcode_1.HashAlgorithm.KECCAK256,
                    data: "1h62ktMPhAXXYgnFaDckCht164co4HcDR24WXu8xsvXV2RB1HA"
                }
            });
        });
    }
    doDoc1() {
        return __awaiter(this, void 0, void 0, function* () {
            const writtenDocMeta = yield this.doDoc(FilePaths_1.FilePaths.join('docs', 'examples', 'pdf', 'bigtable.pdf'), {
                fingerprint: "a2887850877ae33e1e66ea24f433e30f",
                title: "Bigtable: A Distributed Storage System for Structured Data",
                tags: {
                    google: this.createTag('google'),
                    bigtable: this.createTag('bigtable'),
                    compsci: this.createTag('compsci')
                },
                added: ISODateTimeStrings_1.ISODateTimeStrings.adjust(ISODateTimeStrings_1.ISODateTimeStrings.create(), '-2d'),
                lastUpdated: ISODateTimeStrings_1.ISODateTimeStrings.adjust(ISODateTimeStrings_1.ISODateTimeStrings.create(), '-1d'),
                flagged: true,
                url: "https://storage.googleapis.com/polar-32b0f.appspot.com/public/bigtable.pdf",
                nrPages: 14,
                hashcode: {
                    enc: Hashcode_2.HashEncoding.BASE58CHECK,
                    alg: Hashcode_1.HashAlgorithm.KECCAK256,
                    data: "1ag3DiKsWirunzx8s81iUL988AefnKouGa2DN2TMZxdZj9yZ4F"
                }
            });
            if (writtenDocMeta) {
                const docMeta = DocMetas_1.DocMetas.deserialize(JSON.stringify(LoadExampleDocsMeta_1.LoadExampleDocsMeta.BIGTABLE_DOC_META), writtenDocMeta.docInfo.fingerprint);
                docMeta.docInfo = writtenDocMeta.docInfo;
                yield this.persistenceLayer.writeDocMeta(docMeta);
                return docMeta;
            }
            else {
                return undefined;
            }
        });
    }
    doDoc2() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.doDoc(FilePaths_1.FilePaths.join('docs', 'examples', 'pdf', 'mapreduce.pdf'), {
                fingerprint: "9012f59fe537f2bb5fb802e31bb40e83",
                title: "MapReduce: Simplified Data Processing on Large Clusters",
                tags: {
                    google: this.createTag('google'),
                    mapreduce: this.createTag('mapreduce'),
                    compsci: this.createTag('compsci')
                },
                added: ISODateTimeStrings_1.ISODateTimeStrings.adjust(ISODateTimeStrings_1.ISODateTimeStrings.create(), '-3d'),
                lastUpdated: ISODateTimeStrings_1.ISODateTimeStrings.adjust(ISODateTimeStrings_1.ISODateTimeStrings.create(), '-2d'),
                pagemarkEnd: 6,
                url: "https://storage.googleapis.com/polar-32b0f.appspot.com/public/mapreduce.pdf",
                nrPages: 13,
                hashcode: {
                    enc: Hashcode_2.HashEncoding.BASE58CHECK,
                    alg: Hashcode_1.HashAlgorithm.KECCAK256,
                    data: "12PBhYxGA587Ap4D59ac1hNRXtKcj1uyWi9t3hTuRTQofbQTr3q"
                }
            });
        });
    }
    doDoc(relativePath, opts) {
        return __awaiter(this, void 0, void 0, function* () {
            const doImport = () => __awaiter(this, void 0, void 0, function* () {
                if (AppRuntime_1.AppRuntime.isElectron()) {
                    const importedFile = yield this.doImport(relativePath);
                    if (importedFile.isPresent()) {
                        const docInfo = importedFile.get().docInfo;
                        const docMeta = yield this.persistenceLayer.getDocMeta(docInfo.fingerprint);
                        const ref = importedFile.get().fileRef;
                        return {
                            docMeta: docMeta,
                            ref
                        };
                    }
                    else {
                        throw new Error("Unable to do local import");
                    }
                }
                else {
                    const docMeta = DocMetas_1.DocMetas.create(opts.fingerprint, opts.nrPages);
                    const ref = {
                        name: FilePaths_1.FilePaths.basename(opts.url),
                        hashcode: opts.hashcode
                    };
                    docMeta.docInfo.filename = ref.name;
                    docMeta.docInfo.hashcode = ref.hashcode;
                    return {
                        docMeta,
                        ref
                    };
                }
            });
            const importedDoc = yield doImport();
            const docInfo = importedDoc.docMeta.docInfo;
            const docMeta = importedDoc.docMeta;
            if (docMeta) {
                docMeta.docInfo.title = opts.title;
                const tags = Object.assign({}, (opts.tags || {}), this.createTags('example'));
                docMeta.docInfo.tags = tags;
                if (opts.pagemarkEnd) {
                    Pagemarks_1.Pagemarks.updatePagemarksForRange(docMeta, opts.pagemarkEnd);
                }
                if (opts.added) {
                    docMeta.docInfo.added = opts.added;
                }
                if (opts.lastUpdated) {
                    docMeta.docInfo.lastUpdated = opts.lastUpdated;
                }
                docMeta.docInfo.flagged
                    = Optional_1.Optional.of(opts.flagged).getOrElse(false);
                log.info("Wrote to persistenceLayer: ", opts.title);
                yield this.persistenceLayer.writeDocMeta(docMeta);
                const datastore = this.persistenceLayer.datastore;
                if (datastore.id === 'firebase') {
                    const backend = Backend_1.Backend.STASH;
                    const ref = importedDoc.ref;
                    const docFileMeta = {
                        backend,
                        ref,
                        url: opts.url,
                        meta: {}
                    };
                    const binaryDatastore = datastore;
                    yield binaryDatastore.writeFileMeta(backend, ref, docFileMeta);
                }
            }
            return docMeta;
        });
    }
    doImport(relativePath) {
        return __awaiter(this, void 0, void 0, function* () {
            const appPath = AppPath_1.AppPath.get();
            if (!appPath) {
                return Optional_1.Optional.empty();
            }
            const path = FilePaths_1.FilePaths.join(appPath, relativePath);
            const basename = FilePaths_1.FilePaths.basename(relativePath);
            return yield this.pdfImporter.importFile(path, basename);
        });
    }
    hasDocs() {
        return __awaiter(this, void 0, void 0, function* () {
            const docMetaRefs = yield this.persistenceLayer.getDocMetaRefs();
            return docMetaRefs.length !== 0;
        });
    }
}
LoadExampleDocs.MAIN_ANNOTATIONS_EXAMPLE_FINGERPRINT = "a2887850877ae33e1e66ea24f433e30f";
exports.LoadExampleDocs = LoadExampleDocs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9hZEV4YW1wbGVEb2NzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTG9hZEV4YW1wbGVEb2NzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsdURBQWtEO0FBQ2xELDBEQUFtRTtBQUVuRSx1REFBa0Q7QUFDbEQsMkRBQXNEO0FBQ3RELG1EQUE4QztBQUU5Qyw2RUFBMkY7QUFDM0Ysd0RBQW1EO0FBRW5ELHlEQUFvRDtBQUNwRCx3REFBbUQ7QUFFbkQsb0RBQStDO0FBRy9DLCtEQUEwRDtBQUUxRCx5REFBeUQ7QUFDekQseURBQXdEO0FBR3hELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLGVBQWU7SUFReEIsWUFBWSxnQkFBa0M7UUFDMUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBRXpDLElBQUksQ0FBQyxXQUFXO2NBQ1YsSUFBSSx5QkFBVyxDQUNiLHFCQUFTLENBQUMsV0FBVyxDQUNqQixxQkFBUyxDQUFDLEVBQUUsQ0FDUixJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFN0MsQ0FBQztJQUVZLElBQUksQ0FBQyxRQUFvQzs7WUFFbEQsSUFBSSxNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFFdEIsR0FBRyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUNoQyxPQUFPO2FBQ1Y7WUFJRCxNQUFNLFFBQVEsR0FBRztnQkFDYixJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNiLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDYixJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNiLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDYixJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNiLElBQUksQ0FBQyxN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QkFFbEU7YUFFSjtZQUVELE9BQU8sT0FBTyxDQUFDO1FBR25CLENBQUM7S0FBQTtJQUVhLFFBQVEsQ0FBQyxZQUFvQjs7WUFFdkMsTUFBTSxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUU5QixJQUFJLENBQUUsT0FBTyxFQUFFO2dCQUNYLE9BQU8sbUJBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUMzQjtZQUVELE1BQU0sSUFBSSxHQUFHLHFCQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztZQUNuRCxNQUFNLFFBQVEsR0FBRyxxQkFBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUVsRCxPQUFPLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRTdELENBQUM7S0FBQTtJQUVhLE9BQU87O1lBQ2pCLE1BQU0sV0FBVyxHQUFHLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxDQUFDO1lBRWpFLE9BQU8sV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7UUFDcEMsQ0FBQztLQUFBOztBQS9YYSxvREFBb0MsR0FBRyxrQ0FBa0MsQ0FBQztBQUY1RiwwQ0FtWUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FwcFBhdGh9IGZyb20gJy4uLy4uLy4uL2VsZWN0cm9uL2FwcF9wYXRoL0FwcFBhdGgnO1xuaW1wb3J0IHtGaWxlUGF0aHN9IGZyb20gJy4uLy4uLy4uL3V0aWwvRmlsZVBhdGhzJztcbmltcG9ydCB7SW1wb3J0ZWRGaWxlLCBQREZJbXBvcnRlcn0gZnJvbSAnLi4vaW1wb3J0ZXJzL1BERkltcG9ydGVyJztcbmltcG9ydCB7UGVyc2lzdGVuY2VMYXllcn0gZnJvbSAnLi4vLi4vLi4vZGF0YXN0b3JlL1BlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtQcm92aWRlcnN9IGZyb20gJy4uLy4uLy4uL3V0aWwvUHJvdmlkZXJzJztcbmltcG9ydCB7UGFnZW1hcmtzfSBmcm9tICcuLi8uLi8uLi9tZXRhZGF0YS9QYWdlbWFya3MnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uLy4uLy4uL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtUYWd9IGZyb20gJy4uLy4uLy4uL3RhZ3MvVGFnJztcbmltcG9ydCB7SVNPRGF0ZVRpbWVTdHJpbmcsIElTT0RhdGVUaW1lU3RyaW5nc30gZnJvbSAnLi4vLi4vLi4vbWV0YWRhdGEvSVNPRGF0ZVRpbWVTdHJpbmdzJztcbmltcG9ydCB7T3B0aW9uYWx9IGZyb20gJy4uLy4uLy4uL3V0aWwvdHMvT3B0aW9uYWwnO1xuaW1wb3J0IHtEb2NNZXRhfSBmcm9tICcuLi8uLi8uLi9tZXRhZGF0YS9Eb2NNZXRhJztcbmltcG9ydCB7RG9jTWV0YXN9IGZyb20gJy4uLy4uLy4uL21ldGFkYXRhL0RvY01ldGFzJztcbmltcG9ydCB7QmFja2VuZH0gZnJvbSAnLi4vLi4vLi4vZGF0YXN0b3JlL0JhY2tlbmQnO1xuaW1wb3J0IHtEb2NGaWxlTWV0YX0gZnJvbSAnLi4vLi4vLi4vZGF0YXN0b3JlL0RvY0ZpbGVNZXRhJztcbmltcG9ydCB7QXBwUnVudGltZX0gZnJvbSAnLi4vLi4vLi4vQXBwUnVudGltZSc7XG5pbXBvcnQge0ZpbGVSZWZ9IGZyb20gJy4uLy4uLy4uL2RhdGFzdG9yZS9EYXRhc3RvcmUnO1xuaW1wb3J0IHtXcml0YWJsZUJpbmFyeU1ldGFEYXRhc3RvcmV9IGZyb20gJy4uLy4uLy4uL2RhdGFzdG9yZS9EYXRhc3RvcmUnO1xuaW1wb3J0IHtMb2FkRXhhbXBsZURvY3NNZXRhfSBmcm9tICcuL0xvYWRFeGFtcGxlRG9jc01ldGEnO1xuaW1wb3J0IHtIYXNoY29kZX0gZnJvbSAnLi4vLi4vLi4vbWV0YWRhdGEvSGFzaGNvZGUnO1xuaW1wb3J0IHtIYXNoQWxnb3JpdGhtfSBmcm9tICcuLi8uLi8uLi9tZXRhZGF0YS9IYXNoY29kZSc7XG5pbXBvcnQge0hhc2hFbmNvZGluZ30gZnJvbSAnLi4vLi4vLi4vbWV0YWRhdGEvSGFzaGNvZGUnO1xuaW1wb3J0IHtEb2NJbmZvfSBmcm9tICcuLi8uLi8uLi9tZXRhZGF0YS9Eb2NJbmZvJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgY2xhc3MgTG9hZEV4YW1wbGVEb2NzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgTUFJTl9BTk5PVEFUSU9OU19FWEFNUExFX0ZJTkdFUlBSSU5UID0gXCJhMjg4Nzg1MDg3N2FlMzNlMWU2NmVhMjRmNDMzZTMwZlwiO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBwZXJzaXN0ZW5jZUxheWVyOiBQZXJzaXN0ZW5jZUxheWVyO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBwZGZJbXBvcnRlcjogUERGSW1wb3J0ZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihwZXJzaXN0ZW5jZUxheWVyOiBQZXJzaXN0ZW5jZUxheWVyKSB7XG4gICAgICAgIHRoaXMucGVyc2lzdGVuY2VMYXllciA9IHBlcnNpc3RlbmNlTGF5ZXI7XG5cbiAgICAgICAgdGhpcy5wZGZJbXBvcnRlclxuICAgICAgICAgICAgPSBuZXcgUERGSW1wb3J0ZXIoXG4gICAgICAgICAgICAgICAgUHJvdmlkZXJzLnRvSW50ZXJmYWNlKFxuICAgICAgICAgICAgICAgICAgICBQcm92aWRlcnMub2YoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcnNpc3RlbmNlTGF5ZXIpKSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgbG9hZChvbkxvYWRlZDogKGRvY0luZm86IERvY0luZm8pID0+IHZvaWQpIHtcblxuICAgICAgICBpZiAoYXdhaXQgdGhpcy5oYXNEb2NzKCkpIHtcbiAgICAgICAgICAgIC8vIHdlJ3JlIGRvbmUgYXMgdGhlcmUgYWxyZWFkeSBkb2NzIGluIHRoZSByZXBvXG4gICAgICAgICAgICBsb2cuZGVidWcoXCJEb2NzIGFscmVhZHkgZXhpc3RcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBNdXN0IHVzZSBwcm9taXNlLmFsbCBvbiBmaXJlYmFzZSBhcyB0aGlzIGlzIG11Y2ggZmFzdGVyLiAgTG9jYWxseVxuICAgICAgICAvLyBpdCByZWFsbHkgZG9lc24ndCBtYXR0ZXIuXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gW1xuICAgICAgICAgICAgdGhpcy5kb0RvYzAoKSxcbiAgICAgICAgICAgIHRoaXMuZG9Eb2MxKCksXG4gICAgICAgICAgICB0aGlzLmRvRG9jMigpLFxuICAgICAgICAgICAgdGhpcy5kb0RvYzMoKSxcbiAgICAgICAgICAgIHRoaXMuZG9Eb2M0KCksXG4gICAgICAgICAgICB0aGlzLmRvRG9jNSgpLFxuICAgICAgICAgICAgdGhpcy5kb0RvYzYoKSxcbiAgICAgICAgICAgIHRoaXMuZG9Eb2M3KClcbiAgICAgICAgXTtcblxuICAgICAgICBmb3IgKGNvbnN0IHByb21pc2Ugb2YgcHJvbWlzZXMpIHtcblxuICAgICAgICAgICAgcHJvbWlzZVxuICAgICAgICAgICAgICAgIC50aGVuKGRvY01ldGEgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2NNZXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkxvYWRlZChkb2NNZXRhLmRvY0luZm8pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nLndhcm4oXCJVbmFibGUgdG8gbG9hZCBkb2NNZXRhXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJVbmFibGUgdG8gbG9hZCBkb2NJbmZvOiBcIiwgZXJyKSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgZG9Eb2M3KCkge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5kb0RvYyhGaWxlUGF0aHMuam9pbignZG9jcycsICdleGFtcGxlcycsICdwZGYnLCAnZHJlbWVsLnBkZicpLCB7XG4gICAgICAgICAgICBmaW5nZXJwcmludDogXCI2OWNmMzJiOWZmYmI4MjA1NmEzYWMwZWFkZWE0NDdkZVwiLFxuICAgICAgICAgICAgdGl0bGU6IFwiRHJlbWVsOiBJbnRlcmFjdGl2ZSBBbmFseXNpcyBvZiBXZWItU2NhbGUgRGF0YXNldHNcIixcbiAgICAgICAgICAgIHRhZ3M6IHRoaXMuY3JlYXRlVGFncygnZ29vZ2xlJywgJ2RyZW1lbCcpLFxuICAgICAgICAgICAgYWRkZWQ6IElTT0RhdGVUaW1lU3RyaW5ncy5hZGp1c3QoSVNPRGF0ZVRpbWVTdHJpbmdzLmNyZWF0ZSgpLCAnLTJkJyksXG4gICAgICAgICAgICBsYXN0VXBkYXRlZDogSVNPRGF0ZVRpbWVTdHJpbmdzLmFkanVzdChJU09EYXRlVGltZVN0cmluZ3MuY3JlYXRlKCksICctOGgnKSxcbiAgICAgICAgICAgIHBhZ2VtYXJrRW5kOiAxLFxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9wb2xhci0zMmIwZi5hcHBzcG90LmNvbS9wdWJsaWMvZHJlbWVsLnBkZlwiLFxuICAgICAgICAgICAgbnJQYWdlczogMTAsXG4gICAgICAgICAgICBoYXNoY29kZToge1xuICAgICAgICAgICAgICAgIGVuYzogSGFzaEVuY29kaW5nLkJBU0U1OENIRUNLLFxuICAgICAgICAgICAgICAgIGFsZzogSGFzaEFsZ29yaXRobS5LRUNDQUsyNTYsXG4gICAgICAgICAgICAgICAgZGF0YTogXCIxM2U2OUVHcnFaZG9hQWNLZHpFQ0NZd1ZrRUFaM0hWc2poOVVOY2NTakVjbVROQ1NSelwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgZG9Eb2M2KCkge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5kb0RvYyhGaWxlUGF0aHMuam9pbignZG9jcycsICdleGFtcGxlcycsICdwZGYnLCAnZGF0YWNlbnRlci1hcy1hLWNvbXB1dGVyLnBkZicpLCB7XG4gICAgICAgICAgICBmaW5nZXJwcmludDogXCJhODFmZTFjNDMxNDhjMzQ0OGUxYTQxMzNhNWM4MDA1ZVwiLFxuICAgICAgICAgICAgdGl0bGU6IFwiVGhlIERhdGFjZW50ZXIgYXMgYSBDb21wdXRlclwiLFxuICAgICAgICAgICAgdGFnczogdGhpcy5jcmVhdGVUYWdzKCdnb29nbGUnLCAnZGF0YWNlbnRlcnMnKSxcbiAgICAgICAgICAgIGFkZGVkOiBJU09EYXRlVGltZVN0cmluZ3MuYWRqdXN0KElTT0RhdGVUaW1lU3RyaW5ncy5jcmVhdGUoKSwgJy0yZCcpLFxuICAgICAgICAgICAgbGFzdFVwZGF0ZWQ6IElTT0RhdGVUaW1lU3RyaW5ncy5hZGp1c3QoSVNPRGF0ZVRpbWVTdHJpbmdzLmNyZWF0ZSgpLCAnLThoJyksXG4gICAgICAgICAgICBwYWdlbWFya0VuZDogMixcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vcG9sYXItMzJiMGYuYXBwc3BvdC5jb20vcHVibGljL2RhdGFjZW50ZXItYXMtYS1jb21wdXRlci5wZGZcIixcbiAgICAgICAgICAgIG5yUGFnZXM6IDEyMCxcbiAgICAgICAgICAgIGhhc2hjb2RlOiB7XG4gICAgICAgICAgICAgICAgZW5jOiBIYXNoRW5jb2RpbmcuQkFTRTU4Q0hFQ0ssXG4gICAgICAgICAgICAgICAgYWxnOiBIYXNoQWxnb3JpdGhtLktFQ0NBSzI1NixcbiAgICAgICAgICAgICAgICBkYXRhOiBcIjEyZ2sxWHplTThyQ0xiU21QbkhTTllxV1BrSjRWNExRVzdXTG8xTUZKZkdKTVFWVlF6VVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgZG9Eb2M1KCkge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5kb0RvYyhGaWxlUGF0aHMuam9pbignZG9jcycsICdleGFtcGxlcycsICdwZGYnLCAnY2h1YmJ5LnBkZicpLCB7XG4gICAgICAgICAgICBmaW5nZXJwcmludDogXCJjMjliYzE3MTc3ODhiMTYwMmEzY2Y0ZWQyOGRkZmJjZFwiLFxuICAgICAgICAgICAgdGl0bGU6IFwiVGhlIENodWJieSBsb2NrIHNlcnZpY2UgZm9yIGxvb3NlbHktY291cGxlZCBkaXN0cmlidXRlZCBzeXN0ZW1zXCIsXG4gICAgICAgICAgICB0YWdzOiB0aGlzLmNyZWF0ZVRhZ3MoJ2dvb2dsZScsICdjaHViYnknKSxcbiAgICAgICAgICAgIGFkZGVkOiBJU09EYXRlVGltZVN0cmluZ3MuYWRqdXN0KElTT0RhdGVUaW1lU3RyaW5ncy5jcmVhdGUoKSwgJy0xZCcpLFxuICAgICAgICAgICAgbGFzdFVwZGF0ZWQ6IElTT0RhdGVUaW1lU3RyaW5ncy5hZGp1c3QoSVNPRGF0ZVRpbWVTdHJpbmdzLmNyZWF0ZSgpLCAnLTNoJyksXG4gICAgICAgICAgICBwYWdlbWFya0VuZDogMixcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vcG9sYXItMzJiMGYuYXBwc3BvdC5jb20vcHVibGljL2NodWJieS5wZGZcIixcbiAgICAgICAgICAgIG5yUGFnZXM6IDE2LFxuICAgICAgICAgICAgaGFzaGNvZGU6IHtcbiAgICAgICAgICAgICAgICBlbmM6IEhhc2hFbmNvZGluZy5CQVNFNThDSEVDSyxcbiAgICAgICAgICAgICAgICBhbGc6IEhhc2hBbGdvcml0aG0uS0VDQ0FLMjU2LFxuICAgICAgICAgICAgICAgIGRhdGE6IFwiMTJkVkVZVFM4em5oV0pOQ1lVY0dIU2ZXS1FxZmlmQm1iU2hSTHhiTHZOVllYNUJLM3NTXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBkb0RvYzQoKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmRvRG9jKEZpbGVQYXRocy5qb2luKCdkb2NzJywgJ2V4YW1wbGVzJywgJ3BkZicsICdib3JnLnBkZicpLCB7XG4gICAgICAgICAgICBmaW5nZXJwcmludDogXCIzNDE3YmUzMjUzNDA4M2RlYTY2ZDczMzYwNGQzNmQ3NVwiLFxuICAgICAgICAgICAgdGl0bGU6IFwiTGFyZ2Utc2NhbGUgY2x1c3RlciBtYW5hZ2VtZW50IGF0IEdvb2dsZSB3aXRoIEJvcmdcIixcbiAgICAgICAgICAgIHRhZ3M6IHRoaXMuY3JlYXRlVGFncygnZ29vZ2xlJywgJ2JvcmcnLCAnZG9ja2VyJyksXG4gICAgICAgICAgICBhZGRlZDogSVNPRGF0ZVRpbWVTdHJpbmdzLmFkanVzdChJU09EYXRlVGltZVN0cmluZ3MuY3JlYXRlKCksICctM2QnKSxcbiAgICAgICAgICAgIGxhc3RVcGRhdGVkOiBJU09EYXRlVGltZVN0cmluZ3MuYWRqdXN0KElTT0RhdGVUaW1lU3RyaW5ncy5jcmVhdGUoKSwgJy04aCcpLFxuICAgICAgICAgICAgcGFnZW1hcmtFbmQ6IDIsXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3BvbGFyLTMyYjBmLmFwcHNwb3QuY29tL3B1YmxpYy9ib3JnLnBkZlwiLFxuICAgICAgICAgICAgbnJQYWdlczogMTcsXG4gICAgICAgICAgICBoYXNoY29kZToge1xuICAgICAgICAgICAgICAgIGVuYzogSGFzaEVuY29kaW5nLkJBU0U1OENIRUNLLFxuICAgICAgICAgICAgICAgIGFsZzogSGFzaEFsZ29yaXRobS5LRUNDQUsyNTYsXG4gICAgICAgICAgICAgICAgZGF0YTogXCIxOVlSWm9FcWZiaG1ZMkdxUVZLY2JqZmdibTFoWmM1VHdLZGZVbzNRVzNUVnoxMjZiSFwiXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBkb0RvYzMoKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmRvRG9jKEZpbGVQYXRocy5qb2luKCdkb2NzJywgJ2V4YW1wbGVzJywgJ3BkZicsICdhdmFpbGFiaWxpdHkucGRmJyksIHtcbiAgICAgICAgICAgIGZpbmdlcnByaW50OiBcIjM5YjczMGI2ZTlkMjgxYjBlYWU5MWIyYzJjMjliODQyXCIsXG4gICAgICAgICAgICB0aXRsZTogXCJBdmFpbGFiaWxpdHkgaW4gR2xvYmFsbHkgRGlzdHJpYnV0ZWQgU3RvcmFnZSBTeXN0ZW1zXCIsXG4gICAgICAgICAgICB0YWdzOiB0aGlzLmNyZWF0ZVRhZ3MoJ2dvb2dsZScsICdhdmFpbGFiaWxpdHknKSxcbiAgICAgICAgICAgIGFkZGVkOiBJU09EYXRlVGltZVN0cmluZ3MuYWRqdXN0KElTT0RhdGVUaW1lU3RyaW5ncy5jcmVhdGUoKSwgJy0yZCcpLFxuICAgICAgICAgICAgbGFzdFVwZGF0ZWQ6IElTT0RhdGVUaW1lU3RyaW5ncy5hZGp1c3QoSVNPRGF0ZVRpbWVTdHJpbmdzLmNyZWF0ZSgpLCAnLTEyaCcpLFxuICAgICAgICAgICAgcGFnZW1hcmtFbmQ6IDcsXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3BvbGFyLTMyYjBmLmFwcHNwb3QuY29tL3B1YmxpYy9hdmFpbGFiaWxpdHkucGRmXCIsXG4gICAgICAgICAgICBuclBhZ2VzOiAxNCxcbiAgICAgICAgICAgIGhhc2hjb2RlOiB7XG4gICAgICAgICAgICAgICAgZW5jOiBIYXNoRW5jb2RpbmcuQkFTRTU4Q0hFQ0ssXG4gICAgICAgICAgICAgICAgYWxnOiBIYXNoQWxnb3JpdGhtLktFQ0NBSzI1NixcbiAgICAgICAgICAgICAgICBkYXRhOiBcIjEySmk5SkRjUm5aVDI3amVja3I0SHVzWVkyOVFWd2o0V3YySjZpWWM1WVhqdHpuM1pKVFwiXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVUYWcoaWQ6IHN0cmluZywgbGFiZWw/OiBzdHJpbmcpOiBUYWcge1xuICAgICAgICByZXR1cm4ge2lkLCBsYWJlbDogbGFiZWwgfHwgaWR9O1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlVGFncyguLi5sYWJlbHM6IHN0cmluZ1tdKToge1tpZDogc3RyaW5nXTogVGFnfSB7XG5cbiAgICAgICAgY29uc3QgcmVzdWx0OiB7W2lkOiBzdHJpbmddOiBUYWd9ID0ge307XG5cbiAgICAgICAgZm9yIChjb25zdCBsYWJlbCBvZiBsYWJlbHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gbGFiZWw7XG4gICAgICAgICAgICByZXN1bHRbaWRdID0ge2lkLCBsYWJlbH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBkb0RvYzAoKSB7XG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZG9Eb2MoRmlsZVBhdGhzLmpvaW4oJ2RvY3MnLCAnZXhhbXBsZXMnLCAncGRmJywgJ3B1YjQ3NDkyLnBkZicpLCB7XG4gICAgICAgICAgICBmaW5nZXJwcmludDogXCI2ZWExNjUyNWIyZTRlYWI3Yjk0NmY2ODQxOWEzNDVhNlwiLFxuICAgICAgICAgICAgdGl0bGU6IFwiRWZmaWNpZW50IExpdmUgRXhwYW5zaW9uIGZvciBDbG9zIERhdGEgQ2VudGVyIE5ldHdvcmtzXCIsXG4gICAgICAgICAgICB0YWdzOiB0aGlzLmNyZWF0ZVRhZ3MoJ2dvb2dsZScsICdkYXRhY2VudGVycycpLFxuICAgICAgICAgICAgYWRkZWQ6IElTT0RhdGVUaW1lU3RyaW5ncy5hZGp1c3QoSVNPRGF0ZVRpbWVTdHJpbmdzLmNyZWF0ZSgpLCAnLTJoJyksXG4gICAgICAgICAgICBsYXN0VXBkYXRlZDogSVNPRGF0ZVRpbWVTdHJpbmdzLmFkanVzdChJU09EYXRlVGltZVN0cmluZ3MuY3JlYXRlKCksICctMWgnKSxcbiAgICAgICAgICAgIHBhZ2VtYXJrRW5kOiAxNyxcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vcG9sYXItMzJiMGYuYXBwc3BvdC5jb20vcHVibGljL3B1YjQ3NDkyLnBkZlwiLFxuICAgICAgICAgICAgbnJQYWdlczogMjAsXG4gICAgICAgICAgICBoYXNoY29kZToge1xuICAgICAgICAgICAgICAgIGVuYzogSGFzaEVuY29kaW5nLkJBU0U1OENIRUNLLFxuICAgICAgICAgICAgICAgIGFsZzogSGFzaEFsZ29yaXRobS5LRUNDQUsyNTYsXG4gICAgICAgICAgICAgICAgZGF0YTogXCIxaDYya3RNUGhBWFhZZ25GYURja0NodDE2NGNvNEhjRFIyNFdYdTh4c3ZYVjJSQjFIQVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBkb0RvYzEoKSB7XG5cbiAgICAgICAgY29uc3Qgd3JpdHRlbkRvY01ldGEgPSBhd2FpdCB0aGlzLmRvRG9jKEZpbGVQYXRocy5qb2luKCdkb2NzJywgJ2V4YW1wbGVzJywgJ3BkZicsICdiaWd0YWJsZS5wZGYnKSwge1xuICAgICAgICAgICAgZmluZ2VycHJpbnQ6IFwiYTI4ODc4NTA4NzdhZTMzZTFlNjZlYTI0ZjQzM2UzMGZcIixcbiAgICAgICAgICAgIHRpdGxlOiBcIkJpZ3RhYmxlOiBBIERpc3RyaWJ1dGVkIFN0b3JhZ2UgU3lzdGVtIGZvciBTdHJ1Y3R1cmVkIERhdGFcIixcbiAgICAgICAgICAgIHRhZ3M6IHtcbiAgICAgICAgICAgICAgICBnb29nbGU6IHRoaXMuY3JlYXRlVGFnKCdnb29nbGUnKSxcbiAgICAgICAgICAgICAgICBiaWd0YWJsZTogdGhpcy5jcmVhdGVUYWcoJ2JpZ3RhYmxlJyksXG4gICAgICAgICAgICAgICAgY29tcHNjaTogdGhpcy5jcmVhdGVUYWcoJ2NvbXBzY2knKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFkZGVkOiBJU09EYXRlVGltZVN0cmluZ3MuYWRqdXN0KElTT0RhdGVUaW1lU3RyaW5ncy5jcmVhdGUoKSwgJy0yZCcpLFxuICAgICAgICAgICAgbGFzdFVwZGF0ZWQ6IElTT0RhdGVUaW1lU3RyaW5ncy5hZGp1c3QoSVNPRGF0ZVRpbWVTdHJpbmdzLmNyZWF0ZSgpLCAnLTFkJyksXG4gICAgICAgICAgICAvLyBwYWdlbWFya0VuZDogMyxcbiAgICAgICAgICAgIGZsYWdnZWQ6IHRydWUsXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3BvbGFyLTMyYjBmLmFwcHNwb3QuY29tL3B1YmxpYy9iaWd0YWJsZS5wZGZcIixcbiAgICAgICAgICAgIG5yUGFnZXM6IDE0LFxuICAgICAgICAgICAgaGFzaGNvZGU6IHtcbiAgICAgICAgICAgICAgICBlbmM6IEhhc2hFbmNvZGluZy5CQVNFNThDSEVDSyxcbiAgICAgICAgICAgICAgICBhbGc6IEhhc2hBbGdvcml0aG0uS0VDQ0FLMjU2LFxuICAgICAgICAgICAgICAgIGRhdGE6IFwiMWFnM0RpS3NXaXJ1bnp4OHM4MWlVTDk4OEFlZm5Lb3VHYTJETjJUTVp4ZFpqOXlaNEZcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAod3JpdHRlbkRvY01ldGEpIHtcblxuICAgICAgICAgICAgLy8gVE9ETzogdXNlIHRoZSBjb3JyZWN0IGxhc3RVcGRhdGUgYW5kIGNyZWF0ZWQgdGltZXMuLi5cbiAgICAgICAgICAgIGNvbnN0IGRvY01ldGEgPSBEb2NNZXRhcy5kZXNlcmlhbGl6ZShKU09OLnN0cmluZ2lmeShMb2FkRXhhbXBsZURvY3NNZXRhLkJJR1RBQkxFX0RPQ19NRVRBKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cml0dGVuRG9jTWV0YSEuZG9jSW5mby5maW5nZXJwcmludCApO1xuXG4gICAgICAgICAgICBkb2NNZXRhLmRvY0luZm8gPSB3cml0dGVuRG9jTWV0YSEuZG9jSW5mbztcblxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wZXJzaXN0ZW5jZUxheWVyLndyaXRlRG9jTWV0YShkb2NNZXRhKTtcblxuICAgICAgICAgICAgcmV0dXJuIGRvY01ldGE7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgcHJvYmFibHkgaW4gYSB0ZXN0aW5nIGVudi4uLlxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBkb0RvYzIoKSB7XG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZG9Eb2MoRmlsZVBhdGhzLmpvaW4oJ2RvY3MnLCAnZXhhbXBsZXMnLCAncGRmJywgJ21hcHJlZHVjZS5wZGYnKSwge1xuICAgICAgICAgICAgZmluZ2VycHJpbnQ6IFwiOTAxMmY1OWZlNTM3ZjJiYjVmYjgwMmUzMWJiNDBlODNcIixcbiAgICAgICAgICAgIHRpdGxlOiBcIk1hcFJlZHVjZTogU2ltcGxpZmllZCBEYXRhIFByb2Nlc3Npbmcgb24gTGFyZ2UgQ2x1c3RlcnNcIixcbiAgICAgICAgICAgIHRhZ3M6IHtcbiAgICAgICAgICAgICAgICBnb29nbGU6IHRoaXMuY3JlYXRlVGFnKCdnb29nbGUnKSxcbiAgICAgICAgICAgICAgICBtYXByZWR1Y2U6IHRoaXMuY3JlYXRlVGFnKCdtYXByZWR1Y2UnKSxcbiAgICAgICAgICAgICAgICBjb21wc2NpOiB0aGlzLmNyZWF0ZVRhZygnY29tcHNjaScpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWRkZWQ6IElTT0RhdGVUaW1lU3RyaW5ncy5hZGp1c3QoSVNPRGF0ZVRpbWVTdHJpbmdzLmNyZWF0ZSgpLCAnLTNkJyksXG4gICAgICAgICAgICBsYXN0VXBkYXRlZDogSVNPRGF0ZVRpbWVTdHJpbmdzLmFkanVzdChJU09EYXRlVGltZVN0cmluZ3MuY3JlYXRlKCksICctMmQnKSxcbiAgICAgICAgICAgIHBhZ2VtYXJrRW5kOiA2LFxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9wb2xhci0zMmIwZi5hcHBzcG90LmNvbS9wdWJsaWMvbWFwcmVkdWNlLnBkZlwiLFxuICAgICAgICAgICAgbnJQYWdlczogMTMsXG4gICAgICAgICAgICBoYXNoY29kZToge1xuICAgICAgICAgICAgICAgIGVuYzogSGFzaEVuY29kaW5nLkJBU0U1OENIRUNLLFxuICAgICAgICAgICAgICAgIGFsZzogSGFzaEFsZ29yaXRobS5LRUNDQUsyNTYsXG4gICAgICAgICAgICAgICAgZGF0YTogXCIxMlBCaFl4R0E1ODdBcDRENTlhYzFoTlJYdEtjajF1eVdpOXQzaFR1UlRRb2ZiUVRyM3FcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgZG9Eb2MocmVsYXRpdmVQYXRoOiBzdHJpbmcsIG9wdHM6IERvY09wdHMpOiBQcm9taXNlPERvY01ldGEgfCB1bmRlZmluZWQ+IHtcblxuICAgICAgICBjb25zdCBkb0ltcG9ydCA9IGFzeW5jICgpOiBQcm9taXNlPEltcG9ydGVkRG9jPiA9PiB7XG5cbiAgICAgICAgICAgIGlmIChBcHBSdW50aW1lLmlzRWxlY3Ryb24oKSkge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgaW1wb3J0ZWRGaWxlID1cbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5kb0ltcG9ydChyZWxhdGl2ZVBhdGgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGltcG9ydGVkRmlsZS5pc1ByZXNlbnQoKSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRvY0luZm8gPSBpbXBvcnRlZEZpbGUuZ2V0KCkuZG9jSW5mbztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZG9jTWV0YSA9IGF3YWl0IHRoaXMucGVyc2lzdGVuY2VMYXllci5nZXREb2NNZXRhKGRvY0luZm8uZmluZ2VycHJpbnQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWYgPSBpbXBvcnRlZEZpbGUuZ2V0KCkuZmlsZVJlZjtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jTWV0YTogZG9jTWV0YSEsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBkbyBsb2NhbCBpbXBvcnRcIik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZG9jTWV0YSA9IERvY01ldGFzLmNyZWF0ZShvcHRzLmZpbmdlcnByaW50LCBvcHRzLm5yUGFnZXMpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVmOiBGaWxlUmVmID0ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBGaWxlUGF0aHMuYmFzZW5hbWUob3B0cy51cmwpLFxuICAgICAgICAgICAgICAgICAgICBoYXNoY29kZTogb3B0cy5oYXNoY29kZVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBkb2NNZXRhLmRvY0luZm8uZmlsZW5hbWUgPSByZWYubmFtZTtcbiAgICAgICAgICAgICAgICBkb2NNZXRhLmRvY0luZm8uaGFzaGNvZGUgPSByZWYuaGFzaGNvZGU7XG5cbiAgICAgICAgICAgICAgICAvLyBub3RlIHRoYXQgd2UgZG8gTk90IG5lZWQgdG8gd3JpdGUgdG8gdGhlIGRhdGFzdG9yZSBoZXJlXG4gICAgICAgICAgICAgICAgLy8gYXMgd2Ugd2lsbCB3cml0ZSBiZWxvdyBhbmQgRmlyZWJhc2UgaXMgYSBiaXQgc2xvd2VyIGZvclxuICAgICAgICAgICAgICAgIC8vIHdyaXRlcyBzbyB3ZSB3YW50IHRvIGtlZXAgdGhpbmdzIGFzIGZhc3QgYXMgcG9zc2libGUuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBkb2NNZXRhLFxuICAgICAgICAgICAgICAgICAgICByZWZcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBpbXBvcnRlZERvYyA9IGF3YWl0IGRvSW1wb3J0KCk7XG5cbiAgICAgICAgY29uc3QgZG9jSW5mbyA9IGltcG9ydGVkRG9jLmRvY01ldGEuZG9jSW5mbztcblxuICAgICAgICBjb25zdCBkb2NNZXRhID0gaW1wb3J0ZWREb2MuZG9jTWV0YTtcblxuICAgICAgICBpZiAoZG9jTWV0YSkge1xuICAgICAgICAgICAgZG9jTWV0YS5kb2NJbmZvLnRpdGxlID0gb3B0cy50aXRsZTtcblxuICAgICAgICAgICAgY29uc3QgdGFncyA9IHsuLi4ob3B0cy50YWdzIHx8IHt9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5jcmVhdGVUYWdzKCdleGFtcGxlJyl9O1xuXG4gICAgICAgICAgICBkb2NNZXRhLmRvY0luZm8udGFncyA9IHRhZ3M7XG5cbiAgICAgICAgICAgIGlmIChvcHRzLnBhZ2VtYXJrRW5kKSB7XG4gICAgICAgICAgICAgICAgUGFnZW1hcmtzLnVwZGF0ZVBhZ2VtYXJrc0ZvclJhbmdlKGRvY01ldGEsIG9wdHMucGFnZW1hcmtFbmQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3B0cy5hZGRlZCkge1xuICAgICAgICAgICAgICAgIGRvY01ldGEuZG9jSW5mby5hZGRlZCA9IG9wdHMuYWRkZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvcHRzLmxhc3RVcGRhdGVkKSB7XG4gICAgICAgICAgICAgICAgZG9jTWV0YS5kb2NJbmZvLmxhc3RVcGRhdGVkID0gb3B0cy5sYXN0VXBkYXRlZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZG9jTWV0YS5kb2NJbmZvLmZsYWdnZWRcbiAgICAgICAgICAgICAgICA9IE9wdGlvbmFsLm9mKG9wdHMuZmxhZ2dlZCkuZ2V0T3JFbHNlKGZhbHNlKTtcblxuICAgICAgICAgICAgbG9nLmluZm8oXCJXcm90ZSB0byBwZXJzaXN0ZW5jZUxheWVyOiBcIiwgb3B0cy50aXRsZSk7XG5cbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGVyc2lzdGVuY2VMYXllci53cml0ZURvY01ldGEoZG9jTWV0YSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGFzdG9yZSA9IHRoaXMucGVyc2lzdGVuY2VMYXllci5kYXRhc3RvcmU7XG5cbiAgICAgICAgICAgIGlmIChkYXRhc3RvcmUuaWQgPT09ICdmaXJlYmFzZScpIHtcblxuICAgICAgICAgICAgICAgIC8vIHdpdGggRmlyZWJhc2Ugd2UgbmVlZCB0byB0ZWxsIGl0IGhvdyB0byBnZXQgYWNjZXNzIHRvXG4gICAgICAgICAgICAgICAgLy8gdGhlIGRhdGEgZmlsZXNcblxuICAgICAgICAgICAgICAgIGNvbnN0IGJhY2tlbmQgPSBCYWNrZW5kLlNUQVNIO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZiA9IGltcG9ydGVkRG9jLnJlZjtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRvY0ZpbGVNZXRhOiBEb2NGaWxlTWV0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2VuZCxcbiAgICAgICAgICAgICAgICAgICAgcmVmLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IG9wdHMudXJsLFxuICAgICAgICAgICAgICAgICAgICBtZXRhOiB7fVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBjb25zdCBiaW5hcnlEYXRhc3RvcmUgPSA8V3JpdGFibGVCaW5hcnlNZXRhRGF0YXN0b3JlPiA8YW55PiBkYXRhc3RvcmU7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBiaW5hcnlEYXRhc3RvcmUud3JpdGVGaWxlTWV0YShiYWNrZW5kLCByZWYsIGRvY0ZpbGVNZXRhKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZG9jTWV0YTtcblxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBkb0ltcG9ydChyZWxhdGl2ZVBhdGg6IHN0cmluZyk6IFByb21pc2U8T3B0aW9uYWw8SW1wb3J0ZWRGaWxlPj4ge1xuXG4gICAgICAgIGNvbnN0IGFwcFBhdGggPSBBcHBQYXRoLmdldCgpO1xuXG4gICAgICAgIGlmICghIGFwcFBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybiBPcHRpb25hbC5lbXB0eSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGF0aCA9IEZpbGVQYXRocy5qb2luKGFwcFBhdGgsIHJlbGF0aXZlUGF0aCk7XG4gICAgICAgIGNvbnN0IGJhc2VuYW1lID0gRmlsZVBhdGhzLmJhc2VuYW1lKHJlbGF0aXZlUGF0aCk7XG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMucGRmSW1wb3J0ZXIuaW1wb3J0RmlsZShwYXRoLCBiYXNlbmFtZSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGhhc0RvY3MoKSB7XG4gICAgICAgIGNvbnN0IGRvY01ldGFSZWZzID0gYXdhaXQgdGhpcy5wZXJzaXN0ZW5jZUxheWVyLmdldERvY01ldGFSZWZzKCk7XG5cbiAgICAgICAgcmV0dXJuIGRvY01ldGFSZWZzLmxlbmd0aCAhPT0gMDtcbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIERvY09wdHMge1xuXG4gICAgcmVhZG9ubHkgZmluZ2VycHJpbnQ6IHN0cmluZztcblxuICAgIHJlYWRvbmx5IHRpdGxlOiBzdHJpbmc7XG5cbiAgICByZWFkb25seSBwYWdlbWFya0VuZD86IG51bWJlcjtcblxuICAgIHJlYWRvbmx5IHRhZ3M/OiB7W2lkOiBzdHJpbmddOiBUYWd9O1xuXG4gICAgcmVhZG9ubHkgYWRkZWQ/OiBJU09EYXRlVGltZVN0cmluZztcblxuICAgIHJlYWRvbmx5IGZsYWdnZWQ/OiBib29sZWFuO1xuXG4gICAgcmVhZG9ubHkgbGFzdFVwZGF0ZWQ/OiBJU09EYXRlVGltZVN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFJlcXVpcmVzIHNvIHRoYXQgd2UgY2FuIGNyZWF0ZSB0aGUgRG9jTWV0YSBpbiBjYXNlcyB3aGVyd2Ugd2UncmUgYWRkaW5nXG4gICAgICogd2l0aCBhbiBleHBsaXQvZXh0ZXJuYWwgVVJMLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5yUGFnZXM6IG51bWJlcjtcblxuICAgIHJlYWRvbmx5IHVybDogc3RyaW5nO1xuXG4gICAgcmVhZG9ubHkgaGFzaGNvZGU6IEhhc2hjb2RlO1xuXG59XG5cbmludGVyZmFjZSBJbXBvcnRlZERvYyB7XG5cbiAgICByZWFkb25seSBkb2NNZXRhOiBEb2NNZXRhO1xuICAgIHJlYWRvbmx5IHJlZjogRmlsZVJlZjtcblxufVxuIl19