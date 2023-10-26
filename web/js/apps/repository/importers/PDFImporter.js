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
const FilePaths_1 = require("../../../util/FilePaths");
const DocMetas_1 = require("../../../metadata/DocMetas");
const Logger_1 = require("../../../logger/Logger");
const PDFMetadata_1 = require("./PDFMetadata");
const Optional_1 = require("../../../util/ts/Optional");
const Files_1 = require("../../../util/Files");
const Hashcodes_1 = require("../../../Hashcodes");
const Backend_1 = require("../../../datastore/Backend");
const Directories_1 = require("../../../datastore/Directories");
const DatastoreFiles_1 = require("../../../datastore/DatastoreFiles");
const Hashcode_1 = require("../../../metadata/Hashcode");
const URLs_1 = require("../../../util/URLs");
const InputSources_1 = require("../../../util/input/InputSources");
const log = Logger_1.Logger.create();
class PDFImporter {
    constructor(persistenceLayerProvider) {
        this.persistenceLayerProvider = persistenceLayerProvider;
    }
    importFile(docPath, basename) {
        return __awaiter(this, void 0, void 0, function* () {
            const isPath = !URLs_1.URLs.isURL(docPath);
            log.info(`Working with document: ${docPath}: ${isPath}`);
            if (isPath) {
                const directories = new Directories_1.Directories();
                if (yield PDFImporter.isWithinStashdir(directories.stashDir, docPath)) {
                    log.warn("Skipping import of file that's already in the stashdir.");
                    return Optional_1.Optional.empty();
                }
            }
            const pdfMeta = yield PDFMetadata_1.PDFMetadata.getMetadata(docPath);
            const persistenceLayer = this.persistenceLayerProvider.get();
            if (yield persistenceLayer.contains(pdfMeta.fingerprint)) {
                log.warn(`File already present in datastore: fingerprint=${pdfMeta.fingerprint}: ${docPath}`);
                const docMeta = yield persistenceLayer.getDocMeta(pdfMeta.fingerprint);
                if (docMeta) {
                    if (docMeta.docInfo.filename) {
                        const fileRef = {
                            name: docMeta.docInfo.filename,
                            hashcode: docMeta.docInfo.hashcode
                        };
                        const basename = FilePaths_1.FilePaths.basename(docMeta.docInfo.filename);
                        return Optional_1.Optional.of({
                            basename,
                            docInfo: docMeta.docInfo,
                            fileRef
                        });
                    }
                }
                return Optional_1.Optional.empty();
            }
            if (!basename && !docPath.startsWith("blob:")) {
                basename = FilePaths_1.FilePaths.basename(docPath);
            }
            const defaultTitle = basename || "";
            const fileHashMeta = yield PDFImporter.computeHashPrefix(docPath);
            const filename = `${fileHashMeta.hashPrefix}-` + DatastoreFiles_1.DatastoreFiles.sanitizeFileName(basename);
            const toData = () => __awaiter(this, void 0, void 0, function* () {
                if (docPath.startsWith("blob:")) {
                    return yield fetch(docPath).then(r => r.blob());
                }
                return { path: docPath };
            });
            const data = yield toData();
            const docMeta = DocMetas_1.DocMetas.create(pdfMeta.fingerprint, pdfMeta.nrPages, filename);
            docMeta.docInfo.title = Optional_1.Optional.of(pdfMeta.title)
                .getOrElse(defaultTitle);
            docMeta.docInfo.description = pdfMeta.description;
            docMeta.docInfo.doi = pdfMeta.doi;
            docMeta.docInfo.hashcode = {
                enc: Hashcode_1.HashEncoding.BASE58CHECK,
                alg: Hashcode_1.HashAlgorithm.KECCAK256,
                data: fileHashMeta.hashcode
            };
            const fileRef = {
                name: filename,
                hashcode: docMeta.docInfo.hashcode
            };
            yield persistenceLayer.writeFile(Backend_1.Backend.STASH, fileRef, data);
            yield persistenceLayer.write(pdfMeta.fingerprint, docMeta);
            return Optional_1.Optional.of({
                basename,
                docInfo: docMeta.docInfo,
                fileRef
            });
        });
    }
    static computeHashcode(docPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const fileHashMeta = yield PDFImporter.computeHashPrefix(docPath);
            const hashcode = {
                enc: Hashcode_1.HashEncoding.BASE58CHECK,
                alg: Hashcode_1.HashAlgorithm.KECCAK256,
                data: fileHashMeta.hashcode
            };
            return hashcode;
        });
    }
    static computeHashPrefix(docPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const inputSource = yield InputSources_1.InputSources.ofValue(docPath);
            const hashcode = yield Hashcodes_1.Hashcodes.createFromInputSource(inputSource);
            const hashPrefix = hashcode.substring(0, 10);
            return { hashcode, hashPrefix };
        });
    }
    static isWithinStashdir(stashDir, path) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentDirname = yield Files_1.Files.realpathAsync(FilePaths_1.FilePaths.dirname(path));
            stashDir = yield Files_1.Files.realpathAsync(stashDir);
            return currentDirname === stashDir;
        });
    }
}
exports.PDFImporter = PDFImporter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUERGSW1wb3J0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQREZJbXBvcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsdURBQWtEO0FBQ2xELHlEQUFvRDtBQUNwRCxtREFBOEM7QUFDOUMsK0NBQTBDO0FBQzFDLHdEQUFtRDtBQUNuRCwrQ0FBc0Q7QUFDdEQsa0RBQTZDO0FBQzdDLHdEQUFtRDtBQUNuRCxnRUFBMkQ7QUFDM0Qsc0VBQWlFO0FBRWpFLHlEQUFpRjtBQUdqRiw2Q0FBd0M7QUFDeEMsbUVBQThEO0FBRTlELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQU01QixNQUFhLFdBQVc7SUFJcEIsWUFBWSx3QkFBcUQ7UUFDN0QsSUFBSSxDQUFDLHdCQUF3QixHQUFHLHdCQUF3QixDQUFDO0lBQzdELENBQUM7SUFVWSxVQUFVLENBQUMsT0FBZSxFQUFFLFFBQWdCOztZQUVyRCxNQUFNLE1BQU0sR0FBRyxDQUFFLFdBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFckMsR0FBRyxDQUFDLElBQUksQ0FBQywwQkFBMEIsT0FBTyxLQUFLLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFFekQsSUFBSSxNQUFNLEVBQUU7Z0JBRVIsTUFBTSxXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7Z0JBRXRDLElBQUksTUFBTSxXQUFXLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRTtvQkFLbkUsR0FBRyxDQUFDLElBQUksQ0FBQyx5REFBeUQsQ0FBQyxDQUFDO29CQUNwRSxPQUFPLG1CQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQzNCO2FBRUo7WUFFRCxNQUFNLE9BQU8sR0FBRyxNQUFNLHlCQUFXLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRXZELE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3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LENBQUMscUJBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUUxRSxRQUFRLEdBQUcsTUFBTSxhQUFLLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRS9DLE9BQU8sY0FBYyxLQUFLLFFBQVEsQ0FBQztRQUV2QyxDQUFDO0tBQUE7Q0FFSjtBQXBMRCxrQ0FvTEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJ9IGZyb20gJy4uLy4uLy4uL2RhdGFzdG9yZS9QZXJzaXN0ZW5jZUxheWVyJztcbmltcG9ydCB7RmlsZVBhdGhzfSBmcm9tICcuLi8uLi8uLi91dGlsL0ZpbGVQYXRocyc7XG5pbXBvcnQge0RvY01ldGFzfSBmcm9tICcuLi8uLi8uLi9tZXRhZGF0YS9Eb2NNZXRhcyc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vLi4vLi4vbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge1BERk1ldGFkYXRhfSBmcm9tICcuL1BERk1ldGFkYXRhJztcbmltcG9ydCB7T3B0aW9uYWx9IGZyb20gJy4uLy4uLy4uL3V0aWwvdHMvT3B0aW9uYWwnO1xuaW1wb3J0IHtGaWxlSGFuZGxlLCBGaWxlc30gZnJvbSAnLi4vLi4vLi4vdXRpbC9GaWxlcyc7XG5pbXBvcnQge0hhc2hjb2Rlc30gZnJvbSAnLi4vLi4vLi4vSGFzaGNvZGVzJztcbmltcG9ydCB7QmFja2VuZH0gZnJvbSAnLi4vLi4vLi4vZGF0YXN0b3JlL0JhY2tlbmQnO1xuaW1wb3J0IHtEaXJlY3Rvcmllc30gZnJvbSAnLi4vLi4vLi4vZGF0YXN0b3JlL0RpcmVjdG9yaWVzJztcbmltcG9ydCB7RGF0YXN0b3JlRmlsZXN9IGZyb20gJy4uLy4uLy4uL2RhdGFzdG9yZS9EYXRhc3RvcmVGaWxlcyc7XG5pbXBvcnQge0RvY0luZm99IGZyb20gJy4uLy4uLy4uL21ldGFkYXRhL0RvY0luZm8nO1xuaW1wb3J0IHtIYXNoQWxnb3JpdGhtLCBIYXNoY29kZSwgSGFzaEVuY29kaW5nfSBmcm9tICcuLi8uLi8uLi9tZXRhZGF0YS9IYXNoY29kZSc7XG5pbXBvcnQge0lQcm92aWRlcn0gZnJvbSAnLi4vLi4vLi4vdXRpbC9Qcm92aWRlcnMnO1xuaW1wb3J0IHtCaW5hcnlGaWxlRGF0YSwgRmlsZVJlZn0gZnJvbSAnLi4vLi4vLi4vZGF0YXN0b3JlL0RhdGFzdG9yZSc7XG5pbXBvcnQge1VSTHN9IGZyb20gJy4uLy4uLy4uL3V0aWwvVVJMcyc7XG5pbXBvcnQge0lucHV0U291cmNlc30gZnJvbSAnLi4vLi4vLi4vdXRpbC9pbnB1dC9JbnB1dFNvdXJjZXMnO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbi8qKlxuICogSGFuZGxlcyB0YWtpbmcgYSBnaXZlbiBmaWxlLCBwYXJzaW5nIHRoZSBtZXRhZGF0YSwgYW5kIHRoZW4gd3JpdGluZyBhIG5ld1xuICogRG9jTWV0YSBmaWxlIGFuZCBpbXBvcnRpbmcgdGhlIFBERiBmaWxlIHRvIHRoZSBzdGFzaC5cbiAqL1xuZXhwb3J0IGNsYXNzIFBERkltcG9ydGVyIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgcGVyc2lzdGVuY2VMYXllclByb3ZpZGVyOiBJUHJvdmlkZXI8UGVyc2lzdGVuY2VMYXllcj47XG5cbiAgICBjb25zdHJ1Y3RvcihwZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXI6IElQcm92aWRlcjxQZXJzaXN0ZW5jZUxheWVyPikge1xuICAgICAgICB0aGlzLnBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlciA9IHBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkb2NQYXRoXG4gICAgICogQHBhcmFtIGJhc2VuYW1lIFRoZSBiYXNlbmFtZSBvZiB0aGUgZmlsZSAtICdteWRvYy5wZGYnIHdpdGhvdXQgdGhlIGZ1bGxcbiAgICAgKiAgICAgICAgICAgICAgICAgcGF0aCBpbmZvcm1hdGlvbi4gIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2UgYmxvYiBVUkxzIG1pZ2h0XG4gICAgICogICAgICAgICAgICAgICAgIG5vdCBhY3R1YWxseSBoYXZlIHRoZSBmdWxsIG1ldGFkYXRhIHdlIG5lZWQgdGhhdCB0aGVcbiAgICAgKiAgICAgICAgICAgICAgICAgb3JpZ2luYWwgaW5wdXQgVVJMIGhhcyBnaXZlbiB1cy5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgaW1wb3J0RmlsZShkb2NQYXRoOiBzdHJpbmcsIGJhc2VuYW1lOiBzdHJpbmcpOiBQcm9taXNlPE9wdGlvbmFsPEltcG9ydGVkRmlsZT4+IHtcblxuICAgICAgICBjb25zdCBpc1BhdGggPSAhIFVSTHMuaXNVUkwoZG9jUGF0aCk7XG5cbiAgICAgICAgbG9nLmluZm8oYFdvcmtpbmcgd2l0aCBkb2N1bWVudDogJHtkb2NQYXRofTogJHtpc1BhdGh9YCk7XG5cbiAgICAgICAgaWYgKGlzUGF0aCkge1xuXG4gICAgICAgICAgICBjb25zdCBkaXJlY3RvcmllcyA9IG5ldyBEaXJlY3RvcmllcygpO1xuXG4gICAgICAgICAgICBpZiAoYXdhaXQgUERGSW1wb3J0ZXIuaXNXaXRoaW5TdGFzaGRpcihkaXJlY3Rvcmllcy5zdGFzaERpciwgZG9jUGF0aCkpIHtcblxuICAgICAgICAgICAgICAgIC8vIHByZXZlbnQgdGhlIHVzZXIgZnJvbSByZS1pbXBvcnRpbmcvb3BlbmluZyBhIGZpbGUgdGhhdCBpc1xuICAgICAgICAgICAgICAgIC8vIEFMUkVBRFkgaW4gdGhlIHN0YXNoIGRpci5cblxuICAgICAgICAgICAgICAgIGxvZy53YXJuKFwiU2tpcHBpbmcgaW1wb3J0IG9mIGZpbGUgdGhhdCdzIGFscmVhZHkgaW4gdGhlIHN0YXNoZGlyLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gT3B0aW9uYWwuZW1wdHkoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGRmTWV0YSA9IGF3YWl0IFBERk1ldGFkYXRhLmdldE1ldGFkYXRhKGRvY1BhdGgpO1xuXG4gICAgICAgIGNvbnN0IHBlcnNpc3RlbmNlTGF5ZXIgPSB0aGlzLnBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlci5nZXQoKTtcblxuICAgICAgICBpZiAoYXdhaXQgcGVyc2lzdGVuY2VMYXllci5jb250YWlucyhwZGZNZXRhLmZpbmdlcnByaW50KSkge1xuXG4gICAgICAgICAgICBsb2cud2FybihgRmlsZSBhbHJlYWR5IHByZXNlbnQgaW4gZGF0YXN0b3JlOiBmaW5nZXJwcmludD0ke3BkZk1ldGEuZmluZ2VycHJpbnR9OiAke2RvY1BhdGh9YCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRvY01ldGEgPSBhd2FpdCBwZXJzaXN0ZW5jZUxheWVyLmdldERvY01ldGEocGRmTWV0YS5maW5nZXJwcmludCk7XG5cbiAgICAgICAgICAgIGlmIChkb2NNZXRhKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoZG9jTWV0YS5kb2NJbmZvLmZpbGVuYW1lKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIHRoZSBleGlzdGluZyBkb2MgbWV0YSBpbmZvcm1hdGlvbi5cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxlUmVmID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZG9jTWV0YS5kb2NJbmZvLmZpbGVuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFzaGNvZGU6IGRvY01ldGEuZG9jSW5mby5oYXNoY29kZVxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhc2VuYW1lID0gRmlsZVBhdGhzLmJhc2VuYW1lKGRvY01ldGEuZG9jSW5mby5maWxlbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBPcHRpb25hbC5vZih7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY0luZm86IGRvY01ldGEuZG9jSW5mbyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVSZWZcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIE9wdGlvbmFsLmVtcHR5KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjcmVhdGUgYSBkZWZhdWx0IHRpdGxlIGZyb20gdGhlIHBhdGggd2hpY2ggaXMgdXNlZCBhcyBzb21ldGltZXMgdGhlXG4gICAgICAgIC8vIGZpbGVuYW1lIGlzIGFjdHVhbGx5IGEgZGVjZW50IGZpcnN0IGF0dGVtcHQgYXQgYSBkb2N1bWVudCB0aXRsZS5cblxuICAgICAgICBpZiAoIWJhc2VuYW1lICYmICEgZG9jUGF0aC5zdGFydHNXaXRoKFwiYmxvYjpcIikpIHtcbiAgICAgICAgICAgIGJhc2VuYW1lID0gRmlsZVBhdGhzLmJhc2VuYW1lKGRvY1BhdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGVmYXVsdFRpdGxlID0gYmFzZW5hbWUgfHwgXCJcIjtcblxuICAgICAgICAvLyBUT0RPOiB0aGlzIGlzIG5vdCBwYXJ0aWN1bGFybHkgZWZmaWNpZW50IHRvIGNyZWF0ZSB0aGUgaGFzaGNvZGVcbiAgICAgICAgLy8gZmlyc3QsIHRoZW4gY29weSB0aGUgYnl0ZXMgdG8gdGhlIHRhcmdldCBsb2NhdGlvbi4gIEl0IHdvdWxkIGJlXG4gICAgICAgIC8vIGJldHRlciwgbG9jYWxseSwgY29weSBhbmQgY29tcHV0ZSB0aGUgaGFzaCBvbiBjb3B5IGJ1dCB3ZSB3b3VsZCBoYXZlXG4gICAgICAgIC8vIHRvIHJlbmFtZSBpdCBhbmQgdGhhdCdzIG5vdCBhbiBvcGVyYXRpb24gSSB3YW50IHRvIHN1cHBvcnQgaW4gdGhlXG4gICAgICAgIC8vIGRhdGFzdG9yZS4gVGhpcyBjb3VsZCBiZSBvcHRpbWl6ZWQgYnV0IHdhaXQgdW50aWwgcGVvcGxlIGNvbXBsYWluXG4gICAgICAgIC8vIGFib3V0IGl0IGFzIGl0J3MgcHJvYmFibHkgcHJlbWF0dXJlIGF0IHRoaXMgcG9pbnQuXG5cbiAgICAgICAgLy8gVE9ETyh3ZWJhcHApOiB0aGlzIGRvZXNuJ3Qgd29yayBlaXRoZXIgYmVjYXN1ZSBpdCBhc3N1bWVzIHRoYXQgd2UgY2FuXG4gICAgICAgIC8vIGVhc2lseSBhbmQgY2hlYXBseSByZWFkIGZyb20gdGhlIFVSTCAvIGJsb2IgVVJMIGJ1dCBJIGd1ZXNzIHRoYXQnc1xuICAgICAgICAvLyB0cnVlIGluIHRoaXMgc2l0dWF0aW9uIHRob3VnaCBpdCdzIGFzc3VtaW5nIGEgRklMRSBhbmQgbm90IGEgYmxvYiBVUkxcbiAgICAgICAgY29uc3QgZmlsZUhhc2hNZXRhID0gYXdhaXQgUERGSW1wb3J0ZXIuY29tcHV0ZUhhc2hQcmVmaXgoZG9jUGF0aCk7XG5cbiAgICAgICAgY29uc3QgZmlsZW5hbWUgPSBgJHtmaWxlSGFzaE1ldGEuaGFzaFByZWZpeH0tYCArIERhdGFzdG9yZUZpbGVzLnNhbml0aXplRmlsZU5hbWUoYmFzZW5hbWUhKTtcblxuICAgICAgICAvLyBhbHdheXMgcmVhZCBmcm9tIGEgc3RyZWFtIGhlcmUgYXMgc29tZSBvZiB0aGUgUERGcyB3ZSBtaWdodCB3YW50IHRvXG4gICAgICAgIC8vIGltcG9ydCBjb3VsZCBiZSByYXRoZXIgbGFyZ2UuICBBbHNvIHRoaXMgbmVlZHMgdG8gYmUgYSBDT1BZIG9mIHRoZVxuICAgICAgICAvLyBkYXRhLCBub3QgYSBzeW1saW5rIHNpbmNlIHRoYXQncyBub3QgcmVhbGx5IHBvcnRhYmxlIGFuZCBpdCB3b3VsZFxuICAgICAgICAvLyBhbHNvIGJlIGRhbmdpbmcgaWYgdGhlIHVzZXIgZGVsZXRlZCB0aGUgZmlsZS4gIFdhc3Rpbmcgc3BhY2UgaGVyZSBpc1xuICAgICAgICAvLyBhIGdvb2QgdGhpbmcuICBTcGFjZSBpcyBjaGVhcC5cblxuICAgICAgICBjb25zdCB0b0RhdGEgPSBhc3luYyAoKTogUHJvbWlzZTxCaW5hcnlGaWxlRGF0YT4gPT4ge1xuXG4gICAgICAgICAgICAvLyBUT0RPKHdlYmFwcCk6IG1ha2UgdGhpcyBpbnRvIGEgdG9CbG9iIGZ1bmN0aW9uIGNhbGxcbiAgICAgICAgICAgIGlmIChkb2NQYXRoLnN0YXJ0c1dpdGgoXCJibG9iOlwiKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBmZXRjaChkb2NQYXRoKS50aGVuKHIgPT4gci5ibG9iKCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gPEZpbGVIYW5kbGU+IHtwYXRoOiBkb2NQYXRofTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGRhdGE6IEJpbmFyeUZpbGVEYXRhID0gYXdhaXQgdG9EYXRhKCk7XG5cbiAgICAgICAgY29uc3QgZG9jTWV0YSA9IERvY01ldGFzLmNyZWF0ZShwZGZNZXRhLmZpbmdlcnByaW50LCBwZGZNZXRhLm5yUGFnZXMsIGZpbGVuYW1lKTtcblxuICAgICAgICBkb2NNZXRhLmRvY0luZm8udGl0bGUgPSBPcHRpb25hbC5vZihwZGZNZXRhLnRpdGxlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRPckVsc2UoZGVmYXVsdFRpdGxlKTtcblxuICAgICAgICBkb2NNZXRhLmRvY0luZm8uZGVzY3JpcHRpb24gPSBwZGZNZXRhLmRlc2NyaXB0aW9uO1xuICAgICAgICBkb2NNZXRhLmRvY0luZm8uZG9pID0gcGRmTWV0YS5kb2k7XG5cbiAgICAgICAgZG9jTWV0YS5kb2NJbmZvLmhhc2hjb2RlID0ge1xuICAgICAgICAgICAgZW5jOiBIYXNoRW5jb2RpbmcuQkFTRTU4Q0hFQ0ssXG4gICAgICAgICAgICBhbGc6IEhhc2hBbGdvcml0aG0uS0VDQ0FLMjU2LFxuICAgICAgICAgICAgZGF0YTogZmlsZUhhc2hNZXRhLmhhc2hjb2RlXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZmlsZVJlZiA9IHtcbiAgICAgICAgICAgIG5hbWU6IGZpbGVuYW1lLFxuICAgICAgICAgICAgaGFzaGNvZGU6IGRvY01ldGEuZG9jSW5mby5oYXNoY29kZVxuICAgICAgICB9O1xuXG4gICAgICAgIGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXIud3JpdGVGaWxlKEJhY2tlbmQuU1RBU0gsIGZpbGVSZWYsIGRhdGEpO1xuXG4gICAgICAgIGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXIud3JpdGUocGRmTWV0YS5maW5nZXJwcmludCwgZG9jTWV0YSk7XG5cbiAgICAgICAgcmV0dXJuIE9wdGlvbmFsLm9mKHtcbiAgICAgICAgICAgIGJhc2VuYW1lLFxuICAgICAgICAgICAgZG9jSW5mbzogZG9jTWV0YS5kb2NJbmZvLFxuICAgICAgICAgICAgZmlsZVJlZlxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgY29tcHV0ZUhhc2hjb2RlKGRvY1BhdGg6IHN0cmluZyk6IFByb21pc2U8SGFzaGNvZGU+IHtcblxuICAgICAgICBjb25zdCBmaWxlSGFzaE1ldGEgPSBhd2FpdCBQREZJbXBvcnRlci5jb21wdXRlSGFzaFByZWZpeChkb2NQYXRoKTtcblxuICAgICAgICBjb25zdCBoYXNoY29kZTogSGFzaGNvZGUgPSB7XG4gICAgICAgICAgICBlbmM6IEhhc2hFbmNvZGluZy5CQVNFNThDSEVDSyxcbiAgICAgICAgICAgIGFsZzogSGFzaEFsZ29yaXRobS5LRUNDQUsyNTYsXG4gICAgICAgICAgICBkYXRhOiBmaWxlSGFzaE1ldGEuaGFzaGNvZGVcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gaGFzaGNvZGU7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyBjb21wdXRlSGFzaFByZWZpeChkb2NQYXRoOiBzdHJpbmcpOiBQcm9taXNlPEZpbGVIYXNoTWV0YT4ge1xuXG4gICAgICAgIGNvbnN0IGlucHV0U291cmNlID0gYXdhaXQgSW5wdXRTb3VyY2VzLm9mVmFsdWUoZG9jUGF0aCk7XG5cbiAgICAgICAgY29uc3QgaGFzaGNvZGUgPSBhd2FpdCBIYXNoY29kZXMuY3JlYXRlRnJvbUlucHV0U291cmNlKGlucHV0U291cmNlKTtcbiAgICAgICAgY29uc3QgaGFzaFByZWZpeCA9IGhhc2hjb2RlLnN1YnN0cmluZygwLCAxMCk7XG5cbiAgICAgICAgcmV0dXJuIHsgaGFzaGNvZGUsIGhhc2hQcmVmaXggfTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIGlzV2l0aGluU3Rhc2hkaXIoc3Rhc2hEaXI6IHN0cmluZywgcGF0aDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG5cbiAgICAgICAgY29uc3QgY3VycmVudERpcm5hbWUgPSBhd2FpdCBGaWxlcy5yZWFscGF0aEFzeW5jKEZpbGVQYXRocy5kaXJuYW1lKHBhdGgpKTtcblxuICAgICAgICBzdGFzaERpciA9IGF3YWl0IEZpbGVzLnJlYWxwYXRoQXN5bmMoc3Rhc2hEaXIpO1xuXG4gICAgICAgIHJldHVybiBjdXJyZW50RGlybmFtZSA9PT0gc3Rhc2hEaXI7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbXBvcnRlZEZpbGUge1xuXG4gICAgLyoqXG4gICAgICogVGhlIERvY0luZm8gZm9yIHRoZSBmaWxlIHdlIGp1c3QgaW1wb3J0ZWQuXG4gICAgICovXG4gICAgZG9jSW5mbzogRG9jSW5mbztcblxuICAgIC8qKlxuICAgICAqIFRoZSBiYXNlbmFtZSBvZiB0aGUgZmlsZSBpbXBvcnRlZC5cbiAgICAgKi9cbiAgICBiYXNlbmFtZTogc3RyaW5nO1xuXG4gICAgZmlsZVJlZjogRmlsZVJlZjtcblxufVxuXG5pbnRlcmZhY2UgRmlsZUhhc2hNZXRhIHtcbiAgICBoYXNoUHJlZml4OiBzdHJpbmc7XG4gICAgaGFzaGNvZGU6IHN0cmluZztcbn1cbiJdfQ==