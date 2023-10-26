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
const electron_1 = require("electron");
const Logger_1 = require("../../logger/Logger");
const PDFImporter_1 = require("./importers/PDFImporter");
const Preconditions_1 = require("../../Preconditions");
const Toaster_1 = require("../../ui/toaster/Toaster");
const DeterminateProgressBar_1 = require("../../ui/progress_bar/DeterminateProgressBar");
const DocLoader_1 = require("../main/doc_loaders/DocLoader");
const Blackout_1 = require("../../ui/blackout/Blackout");
const AppRuntime_1 = require("../../AppRuntime");
const AddFileRequests_1 = require("./AddFileRequests");
const ProgressTracker_1 = require("../../util/ProgressTracker");
const log = Logger_1.Logger.create();
class FileImportController {
    constructor(persistenceLayerProvider, updatedDocInfoEventDispatcher) {
        this.persistenceLayerProvider = persistenceLayerProvider;
        this.updatedDocInfoEventDispatcher = updatedDocInfoEventDispatcher;
        this.pdfImporter = new PDFImporter_1.PDFImporter(persistenceLayerProvider);
        this.docLoader = new DocLoader_1.DocLoader(persistenceLayerProvider);
    }
    start() {
        if (electron_1.ipcRenderer) {
            electron_1.ipcRenderer.on('file-import', (event, fileImportRequest) => {
                this.onFileImportRequest(fileImportRequest)
                    .catch(err => log.error("Unable to import: ", err));
            });
        }
        this.handleBlackout();
        this.handleDragAndDropFiles();
        this.handleFileUpload();
        log.info("File import controller started");
    }
    handleDragAndDropFiles() {
        document.body.addEventListener('dragenter', (event) => this.onDragEnterOrOver(event), false);
        document.body.addEventListener('dragover', (event) => this.onDragEnterOrOver(event), false);
        document.body.addEventListener('drop', event => this.onDrop(event));
    }
    handleFileUpload() {
        const handleFileUploaded = () => {
            const target = document.querySelector('#file-upload');
            if (target) {
                const fileUpload = target;
                if (fileUpload.files !== null) {
                    const addFileRequests = AddFileRequests_1.AddFileRequests.computeFromFileList(fileUpload.files);
                    this.handleAddFileRequests(addFileRequests)
                        .catch(err => log.error("Could not add files: ", err));
                }
                else {
                }
            }
            else {
                log.warn("No file upload input");
            }
        };
        const handleMessage = (event) => {
            if (event.data.type === 'file-uploaded') {
                handleFileUploaded();
            }
        };
        window.addEventListener("message", event => {
            try {
                handleMessage(event);
            }
            catch (e) {
                log.error("Unable to handle message: ", e);
            }
        });
    }
    handleBlackout() {
        let depth = 0;
        document.body.addEventListener('dragenter', () => {
            if (depth === 0) {
                Blackout_1.Blackout.enable();
            }
            ++depth;
        });
        const leaveOrDropHandler = () => {
            --depth;
            if (depth === 0) {
                Blackout_1.Blackout.disable();
            }
        };
        document.body.addEventListener('dragleave', leaveOrDropHandler);
        document.body.addEventListener('drop', leaveOrDropHandler);
    }
    onDragEnterOrOver(event) {
        event.preventDefault();
    }
    onDrop(event) {
        event.preventDefault();
        Blackout_1.Blackout.disable();
        this.handleDrop(event)
            .catch(err => log.error("Unable to import: ", err));
    }
    handleDrop(event) {
        return __awaiter(this, void 0, void 0, function* () {
            if (event.dataTransfer) {
                const directly = AddFileRequests_1.AddFileRequests.computeDirectly(event);
                const recursively = yield AddFileRequests_1.AddFileRequests.computeRecursively(event);
                const addFileRequests = [...directly, ...recursively.getOrElse([])];
                yield this.handleAddFileRequests(addFileRequests);
            }
        });
    }
    handleAddFileRequests(addFileRequests) {
        return __awaiter(this, void 0, void 0, function* () {
            if (addFileRequests.length > 0) {
                try {
                    yield this.onImportFiles(addFileRequests);
                }
                catch (e) {
                    log.error("Unable to import files: ", addFileRequests, e);
                }
            }
            else {
                Toaster_1.Toaster.error("Unable to upload files.  Only PDF uploads are supported.");
            }
        });
    }
    onFileImportRequest(fileImportRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!Preconditions_1.isPresent(fileImportRequest.files) || fileImportRequest.files.length === 0) {
                return;
            }
            yield this.onImportFiles(fileImportRequest.files);
        });
    }
    onImportFiles(files) {
        return __awaiter(this, void 0, void 0, function* () {
            const importedFiles = yield this.doImportFiles(files);
            if (importedFiles.length === 0) {
                log.warn("No files given to upload");
                return;
            }
            if (AppRuntime_1.AppRuntime.isElectron() && importedFiles.length === 1) {
                const importedFile = importedFiles[0];
                if (importedFile.isPresent()) {
                    const file = importedFile.get();
                    const fingerprint = file.docInfo.fingerprint;
                    if (AppRuntime_1.AppRuntime.isElectron()) {
                        this.docLoader.create({
                            fingerprint,
                            fileRef: file.fileRef,
                            newWindow: true
                        }).load()
                            .catch(err => log.error("Unable to load doc: ", err));
                    }
                }
            }
            else {
                Toaster_1.Toaster.success(`Imported ${files.length} files successfully.`);
            }
        });
    }
    doImportFiles(files) {
        return __awaiter(this, void 0, void 0, function* () {
            const progressTracker = new ProgressTracker_1.ProgressTracker(files.length, 'import-files');
            const result = [];
            try {
                for (const file of files) {
                    try {
                        const importedFile = yield this.doImportFile(file);
                        result.push(importedFile);
                    }
                    catch (e) {
                        log.error("Failed to import file: " + file, e);
                    }
                    finally {
                        DeterminateProgressBar_1.DeterminateProgressBar.update(progressTracker.incr());
                    }
                }
                return result;
            }
            finally {
            }
        });
    }
    doImportFile(file) {
        return __awaiter(this, void 0, void 0, function* () {
            log.info("Importing file: " + file);
            const importedFileResult = yield this.pdfImporter.importFile(file.docPath, file.basename);
            importedFileResult.map(importedFile => {
                this.updatedDocInfoEventDispatcher.dispatchEvent(importedFile.docInfo);
            });
            return importedFileResult;
        });
    }
}
exports.FileImportController = FileImportController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZUltcG9ydENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGaWxlSW1wb3J0Q29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsdUNBQXFDO0FBQ3JDLGdEQUEyQztBQUMzQyx5REFBa0U7QUFNbEUsdURBQThDO0FBQzlDLHNEQUFpRDtBQUVqRCx5RkFBb0Y7QUFDcEYsNkRBQXdEO0FBRXhELHlEQUFvRDtBQUdwRCxpREFBNEM7QUFJNUMsdURBQWtEO0FBQ2xELGdFQUEyRDtBQUUzRCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFRNUIsTUFBYSxvQkFBb0I7SUFVN0IsWUFBWSx3QkFBcUQsRUFDckQsNkJBQXlEO1FBRWpFLElBQUksQ0FBQyx3QkFBd0IsR0FBRyx3QkFBd0IsQ0FBQztRQUN6RCxJQUFJLENBQUMsNkJBQTZCLEdBQUcsNkJBQTZCLENBQUM7UUFDbkUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLHlCQUFXLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUkscUJBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBRTdELENBQUM7SUFFTSxLQUFLO1FBRVIsSUFBSSxzQkFBVyxFQUFFO1lBRWIsc0JBQVcsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBVSxFQUFFLGlCQUFvQyxFQUFFLEVBQUU7Z0JBRS9FLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQztxQkFDdEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRTVELENBQUMsQ0FBQyxDQUFDO1NBRU47UUFFRCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFD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QyxDQUFDO1lBQzNFLENBQUMsQ0FBQyxDQUFDO1lBRUgsT0FBTyxrQkFBa0IsQ0FBQztRQUU5QixDQUFDO0tBQUE7Q0FFSjtBQXRSRCxvREFzUkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJ9IGZyb20gXCIuLi8uLi9kYXRhc3RvcmUvUGVyc2lzdGVuY2VMYXllclwiO1xuaW1wb3J0IHtpcGNSZW5kZXJlcn0gZnJvbSBcImVsZWN0cm9uXCI7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vLi4vbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0ltcG9ydGVkRmlsZSwgUERGSW1wb3J0ZXJ9IGZyb20gJy4vaW1wb3J0ZXJzL1BERkltcG9ydGVyJztcbmltcG9ydCB7UHJvZ3Jlc3NDYWxjdWxhdG9yfSBmcm9tIFwiLi4vLi4vdXRpbC9Qcm9ncmVzc0NhbGN1bGF0b3JcIjtcbmltcG9ydCB7SUV2ZW50RGlzcGF0Y2hlcn0gZnJvbSAnLi4vLi4vcmVhY3Rvci9TaW1wbGVSZWFjdG9yJztcbmltcG9ydCB7SURvY0luZm99IGZyb20gJy4uLy4uL21ldGFkYXRhL0RvY0luZm8nO1xuaW1wb3J0IHtPcHRpb25hbH0gZnJvbSBcIi4uLy4uL3V0aWwvdHMvT3B0aW9uYWxcIjtcbmltcG9ydCB7RmlsZVBhdGhzfSBmcm9tIFwiLi4vLi4vdXRpbC9GaWxlUGF0aHNcIjtcbmltcG9ydCB7aXNQcmVzZW50fSBmcm9tIFwiLi4vLi4vUHJlY29uZGl0aW9uc1wiO1xuaW1wb3J0IHtUb2FzdGVyfSBmcm9tIFwiLi4vLi4vdWkvdG9hc3Rlci9Ub2FzdGVyXCI7XG5pbXBvcnQge0lQcm92aWRlcn0gZnJvbSBcIi4uLy4uL3V0aWwvUHJvdmlkZXJzXCI7XG5pbXBvcnQge0RldGVybWluYXRlUHJvZ3Jlc3NCYXJ9IGZyb20gJy4uLy4uL3VpL3Byb2dyZXNzX2Jhci9EZXRlcm1pbmF0ZVByb2dyZXNzQmFyJztcbmltcG9ydCB7RG9jTG9hZGVyfSBmcm9tIFwiLi4vbWFpbi9kb2NfbG9hZGVycy9Eb2NMb2FkZXJcIjtcbmltcG9ydCB7RmlsZVJlZn0gZnJvbSBcIi4uLy4uL2RhdGFzdG9yZS9EYXRhc3RvcmVcIjtcbmltcG9ydCB7QmxhY2tvdXR9IGZyb20gXCIuLi8uLi91aS9ibGFja291dC9CbGFja291dFwiO1xuaW1wb3J0IHtGaWxlSW1wb3J0UmVxdWVzdH0gZnJvbSBcIi4vRmlsZUltcG9ydFJlcXVlc3RcIjtcbmltcG9ydCB7QWRkRmlsZVJlcXVlc3R9IGZyb20gXCIuL0FkZEZpbGVSZXF1ZXN0XCI7XG5pbXBvcnQge0FwcFJ1bnRpbWV9IGZyb20gXCIuLi8uLi9BcHBSdW50aW1lXCI7XG5pbXBvcnQge1BhdGhTdHJ9IGZyb20gJy4uLy4uL3V0aWwvU3RyaW5ncyc7XG5pbXBvcnQge0ZpbGVzLCBBYm9ydGVyc30gZnJvbSBcIi4uLy4uL3V0aWwvRmlsZXNcIjtcbmltcG9ydCB7UHJvZ3Jlc3NUb2FzdGVyc30gZnJvbSAnLi4vLi4vdWkvcHJvZ3Jlc3NfdG9hc3Rlci9Qcm9ncmVzc1RvYXN0ZXJzJztcbmltcG9ydCB7QWRkRmlsZVJlcXVlc3RzfSBmcm9tIFwiLi9BZGRGaWxlUmVxdWVzdHNcIjtcbmltcG9ydCB7UHJvZ3Jlc3NUcmFja2VyfSBmcm9tICcuLi8uLi91dGlsL1Byb2dyZXNzVHJhY2tlcic7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuLyoqXG4gKiBIYW5kbGVzIHBlcmZvcm1pbmcgaW1wb3J0cyBpbnRvIHRoZSBkYXRhc3RvcmUgd2hlbiB1c2VycyBzZWxlY3QgZmlsZXMgZnJvbVxuICogdGhlIGltcG9ydCBkaWFsb2cuXG4gKlxuICogQEVsZWN0cm9uUmVuZGVyZXJDb250ZXh0XG4gKi9cbmV4cG9ydCBjbGFzcyBGaWxlSW1wb3J0Q29udHJvbGxlciB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlcjogSVByb3ZpZGVyPFBlcnNpc3RlbmNlTGF5ZXI+O1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSB1cGRhdGVkRG9jSW5mb0V2ZW50RGlzcGF0Y2hlcjogSUV2ZW50RGlzcGF0Y2hlcjxJRG9jSW5mbz47XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHBkZkltcG9ydGVyOiBQREZJbXBvcnRlcjtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgZG9jTG9hZGVyOiBEb2NMb2FkZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihwZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXI6IElQcm92aWRlcjxQZXJzaXN0ZW5jZUxheWVyPixcbiAgICAgICAgICAgICAgICB1cGRhdGVkRG9jSW5mb0V2ZW50RGlzcGF0Y2hlcjogSUV2ZW50RGlzcGF0Y2hlcjxJRG9jSW5mbz4pIHtcblxuICAgICAgICB0aGlzLnBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlciA9IHBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlcjtcbiAgICAgICAgdGhpcy51cGRhdGVkRG9jSW5mb0V2ZW50RGlzcGF0Y2hlciA9IHVwZGF0ZWREb2NJbmZvRXZlbnREaXNwYXRjaGVyO1xuICAgICAgICB0aGlzLnBkZkltcG9ydGVyID0gbmV3IFBERkltcG9ydGVyKHBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlcik7XG4gICAgICAgIHRoaXMuZG9jTG9hZGVyID0gbmV3IERvY0xvYWRlcihwZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXIpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXJ0KCk6IHZvaWQge1xuXG4gICAgICAgIGlmIChpcGNSZW5kZXJlcikge1xuXG4gICAgICAgICAgICBpcGNSZW5kZXJlci5vbignZmlsZS1pbXBvcnQnLCAoZXZlbnQ6IGFueSwgZmlsZUltcG9ydFJlcXVlc3Q6IEZpbGVJbXBvcnRSZXF1ZXN0KSA9PiB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLm9uRmlsZUltcG9ydFJlcXVlc3QoZmlsZUltcG9ydFJlcXVlc3QpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gbG9nLmVycm9yKFwiVW5hYmxlIHRvIGltcG9ydDogXCIsIGVycikpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oYW5kbGVCbGFja291dCgpO1xuICAgICAgICB0aGlzLmhhbmRsZURyYWdBbmREcm9wRmlsZXMoKTtcbiAgICAgICAgdGhpcy5oYW5kbGVGaWxlVXBsb2FkKCk7XG5cbiAgICAgICAgbG9nLmluZm8oXCJGaWxlIGltcG9ydCBjb250cm9sbGVyIHN0YXJ0ZWRcIik7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZURyYWdBbmREcm9wRmlsZXMoKSB7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCAoZXZlbnQpID0+IHRoaXMub25EcmFnRW50ZXJPck92ZXIoZXZlbnQpLCBmYWxzZSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZXZlbnQpID0+IHRoaXMub25EcmFnRW50ZXJPck92ZXIoZXZlbnQpLCBmYWxzZSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZXZlbnQgPT4gdGhpcy5vbkRyb3AoZXZlbnQpKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlRmlsZVVwbG9hZCgpIHtcblxuICAgICAgICBjb25zdCBoYW5kbGVGaWxlVXBsb2FkZWQgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWxlLXVwbG9hZCcpO1xuXG4gICAgICAgICAgICBpZiAodGFyZ2V0KSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlVXBsb2FkID0gPEhUTUxJbnB1dEVsZW1lbnQ+IHRhcmdldDtcblxuICAgICAgICAgICAgICAgIGlmIChmaWxlVXBsb2FkLmZpbGVzICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWRkRmlsZVJlcXVlc3RzID0gQWRkRmlsZVJlcXVlc3RzLmNvbXB1dGVGcm9tRmlsZUxpc3QoZmlsZVVwbG9hZC5maWxlcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVBZGRGaWxlUmVxdWVzdHMoYWRkRmlsZVJlcXVlc3RzKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJDb3VsZCBub3QgYWRkIGZpbGVzOiBcIiwgZXJyKSk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBub29wXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvZy53YXJuKFwiTm8gZmlsZSB1cGxvYWQgaW5wdXRcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBoYW5kbGVNZXNzYWdlID0gKGV2ZW50OiBNZXNzYWdlRXZlbnQpID0+IHtcblxuICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEudHlwZSA9PT0gJ2ZpbGUtdXBsb2FkZWQnKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlRmlsZVVwbG9hZGVkKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgZXZlbnQgPT4ge1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGhhbmRsZU1lc3NhZ2UoZXZlbnQpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGxvZy5lcnJvcihcIlVuYWJsZSB0byBoYW5kbGUgbWVzc2FnZTogXCIsIGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVCbGFja291dCgpIHtcblxuICAgICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83MTEwMzUzL2h0bWw1LWRyYWdsZWF2ZS1maXJlZC13aGVuLWhvdmVyaW5nLWEtY2hpbGQtZWxlbWVudFxuXG4gICAgICAgIGxldCBkZXB0aCA9IDA7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIGlmIChkZXB0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIEJsYWNrb3V0LmVuYWJsZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICArK2RlcHRoO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGxlYXZlT3JEcm9wSGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgICAgIC0tZGVwdGg7XG5cbiAgICAgICAgICAgIGlmIChkZXB0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIEJsYWNrb3V0LmRpc2FibGUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9O1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgbGVhdmVPckRyb3BIYW5kbGVyKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgbGVhdmVPckRyb3BIYW5kbGVyKTtcblxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBvbkRyYWdFbnRlck9yT3ZlcihldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkRyb3AoZXZlbnQ6IERyYWdFdmVudCkge1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgQmxhY2tvdXQuZGlzYWJsZSgpO1xuXG4gICAgICAgIHRoaXMuaGFuZGxlRHJvcChldmVudClcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gbG9nLmVycm9yKFwiVW5hYmxlIHRvIGltcG9ydDogXCIsIGVycikpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBoYW5kbGVEcm9wKGV2ZW50OiBEcmFnRXZlbnQpIHtcblxuICAgICAgICAvLyB3ZSBoYXZlIHRvIGRvIHRocmVlIG1haW4gdGhpbmdzIGhlcmU6XG5cbiAgICAgICAgaWYgKGV2ZW50LmRhdGFUcmFuc2Zlcikge1xuXG4gICAgICAgICAgICBjb25zdCBkaXJlY3RseSA9IEFkZEZpbGVSZXF1ZXN0cy5jb21wdXRlRGlyZWN0bHkoZXZlbnQpO1xuICAgICAgICAgICAgY29uc3QgcmVjdXJzaXZlbHkgPSBhd2FpdCBBZGRGaWxlUmVxdWVzdHMuY29tcHV0ZVJlY3Vyc2l2ZWx5KGV2ZW50KTtcblxuICAgICAgICAgICAgY29uc3QgYWRkRmlsZVJlcXVlc3RzID0gWy4uLmRpcmVjdGx5LCAuLi5yZWN1cnNpdmVseS5nZXRPckVsc2UoW10pXTtcblxuICAgICAgICAgICAgYXdhaXQgdGhpcy5oYW5kbGVBZGRGaWxlUmVxdWVzdHMoYWRkRmlsZVJlcXVlc3RzKTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGhhbmRsZUFkZEZpbGVSZXF1ZXN0cyhhZGRGaWxlUmVxdWVzdHM6IEFkZEZpbGVSZXF1ZXN0W10pIHtcblxuICAgICAgICBpZiAoYWRkRmlsZVJlcXVlc3RzLmxlbmd0aCA+IDApIHtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLm9uSW1wb3J0RmlsZXMoYWRkRmlsZVJlcXVlc3RzKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBsb2cuZXJyb3IoXCJVbmFibGUgdG8gaW1wb3J0IGZpbGVzOiBcIiwgYWRkRmlsZVJlcXVlc3RzLCBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgVG9hc3Rlci5lcnJvcihcIlVuYWJsZSB0byB1cGxvYWQgZmlsZXMuICBPbmx5IFBERiB1cGxvYWRzIGFyZSBzdXBwb3J0ZWQuXCIpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIG9uRmlsZUltcG9ydFJlcXVlc3QoZmlsZUltcG9ydFJlcXVlc3Q6IEZpbGVJbXBvcnRSZXF1ZXN0KSB7XG5cbiAgICAgICAgaWYgKCEgaXNQcmVzZW50KGZpbGVJbXBvcnRSZXF1ZXN0LmZpbGVzKSB8fCBmaWxlSW1wb3J0UmVxdWVzdC5maWxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdCBhdHRlbXB0IGFuIGltcG9ydCBpZiBubyBmaWxlcyBhcmUgZ2l2ZW4uICBUaGlzIHdheSB0aGVcbiAgICAgICAgICAgIC8vIHByb2dyZXNzIGJhciBkb2Vzbid0IGZsYXNoIGFuZCB0aGVuIHZhbmlzaCBhZ2Fpbi5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IHRoaXMub25JbXBvcnRGaWxlcyhmaWxlSW1wb3J0UmVxdWVzdC5maWxlcyk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIG9uSW1wb3J0RmlsZXMoZmlsZXM6IEFkZEZpbGVSZXF1ZXN0W10pIHtcblxuICAgICAgICBjb25zdCBpbXBvcnRlZEZpbGVzID0gYXdhaXQgdGhpcy5kb0ltcG9ydEZpbGVzKGZpbGVzKTtcblxuICAgICAgICBpZiAoaW1wb3J0ZWRGaWxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGxvZy53YXJuKFwiTm8gZmlsZXMgZ2l2ZW4gdG8gdXBsb2FkXCIpO1xuICAgICAgICAgICAgLy8gbm90aGluZyB0byBkbyBoZXJlLi4uXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQXBwUnVudGltZS5pc0VsZWN0cm9uKCkgJiYgaW1wb3J0ZWRGaWxlcy5sZW5ndGggPT09IDEpIHtcblxuICAgICAgICAgICAgLy8gb25seSBhdXRvbWF0aWNhbGx5IG9wZW4gdGhlIGZpbGUgd2l0aGluIEVsZWN0cm9uIGFzIHRoYXQncyB0aGVcbiAgICAgICAgICAgIC8vIG9ubHkgcGxhdGZvcm0gdGhhdCdzIHJlYWxseSBmYXN0IGVub3VnaC5cblxuICAgICAgICAgICAgY29uc3QgaW1wb3J0ZWRGaWxlID0gaW1wb3J0ZWRGaWxlc1swXTtcblxuICAgICAgICAgICAgaWYgKGltcG9ydGVkRmlsZS5pc1ByZXNlbnQoKSkge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IGltcG9ydGVkRmlsZS5nZXQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmaW5nZXJwcmludCA9IGZpbGUuZG9jSW5mby5maW5nZXJwcmludDtcblxuICAgICAgICAgICAgICAgIGlmIChBcHBSdW50aW1lLmlzRWxlY3Ryb24oKSkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIERPIE5PVCBlbmFibGUgdGhpcyBpbiB0aGUgd2ViIFVJLi4uIHRoZSB1cGxvYWQgY291bGQgdGFrZVxuICAgICAgICAgICAgICAgICAgICAvLyBmb3JldmVyLiAgSXQgbWlnaHQgYmUgbmljZSB0byBvcGVuIGEgdGFiIHNob3dpbmcgdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIHVwbG9hZCBwcm9ncmVzcyBhbmQgdGhlbiBsb2FkIHRoZSBmaWxlIG9uY2UgaXQnc1xuICAgICAgICAgICAgICAgICAgICAvLyB1cGxvYWRlZC5cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvY0xvYWRlci5jcmVhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmluZ2VycHJpbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlUmVmOiBmaWxlLmZpbGVSZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdXaW5kb3c6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSkubG9hZCgpXG4gICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJVbmFibGUgdG8gbG9hZCBkb2M6IFwiLCBlcnIpKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBUb2FzdGVyLnN1Y2Nlc3MoYEltcG9ydGVkICR7ZmlsZXMubGVuZ3RofSBmaWxlcyBzdWNjZXNzZnVsbHkuYCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgZG9JbXBvcnRGaWxlcyhmaWxlczogQWRkRmlsZVJlcXVlc3RbXSk6IFByb21pc2U8QXJyYXk8T3B0aW9uYWw8SW1wb3J0ZWRGaWxlPj4+IHtcblxuICAgICAgICBjb25zdCBwcm9ncmVzc1RyYWNrZXIgPSBuZXcgUHJvZ3Jlc3NUcmFja2VyKGZpbGVzLmxlbmd0aCwgJ2ltcG9ydC1maWxlcycpO1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdDogQXJyYXk8T3B0aW9uYWw8SW1wb3J0ZWRGaWxlPj4gPSBbXTtcblxuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltcG9ydGVkRmlsZSA9IGF3YWl0IHRoaXMuZG9JbXBvcnRGaWxlKGZpbGUpO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChpbXBvcnRlZEZpbGUpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nLmVycm9yKFwiRmFpbGVkIHRvIGltcG9ydCBmaWxlOiBcIiArIGZpbGUsIGUpO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIERldGVybWluYXRlUHJvZ3Jlc3NCYXIudXBkYXRlKHByb2dyZXNzVHJhY2tlci5pbmNyKCkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAvLyBub29wXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgZG9JbXBvcnRGaWxlKGZpbGU6IEFkZEZpbGVSZXF1ZXN0KTogUHJvbWlzZTxPcHRpb25hbDxJbXBvcnRlZEZpbGU+PiB7XG5cbiAgICAgICAgbG9nLmluZm8oXCJJbXBvcnRpbmcgZmlsZTogXCIgKyBmaWxlKTtcblxuICAgICAgICBjb25zdCBpbXBvcnRlZEZpbGVSZXN1bHQgPVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wZGZJbXBvcnRlci5pbXBvcnRGaWxlKGZpbGUuZG9jUGF0aCwgZmlsZS5iYXNlbmFtZSk7XG5cbiAgICAgICAgaW1wb3J0ZWRGaWxlUmVzdWx0Lm1hcChpbXBvcnRlZEZpbGUgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVkRG9jSW5mb0V2ZW50RGlzcGF0Y2hlci5kaXNwYXRjaEV2ZW50KGltcG9ydGVkRmlsZS5kb2NJbmZvKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGltcG9ydGVkRmlsZVJlc3VsdDtcblxuICAgIH1cblxufVxuXG4iXX0=