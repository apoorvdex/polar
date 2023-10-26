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
const DiskDatastore_1 = require("./DiskDatastore");
const Files_1 = require("../util/Files");
const FilePaths_1 = require("../util/FilePaths");
const Preconditions_1 = require("../Preconditions");
class Directories {
    constructor() {
        this.dataDirConfig = Directories.getDataDir();
        this.dataDir = this.dataDirConfig.path;
        this.stashDir = FilePaths_1.FilePaths.create(this.dataDir, "stash");
        this.filesDir = FilePaths_1.FilePaths.create(this.dataDir, "files");
        this.logsDir = FilePaths_1.FilePaths.create(this.dataDir, "logs");
        this.configDir = FilePaths_1.FilePaths.create(this.dataDir, "config");
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.initialization = {
                dataDir: yield Files_1.Files.createDirAsync(this.dataDir),
                stashDir: yield Files_1.Files.createDirAsync(this.stashDir),
                filesDir: yield Files_1.Files.createDirAsync(this.filesDir),
                logsDir: yield Files_1.Files.createDirAsync(this.logsDir),
                configDir: yield Files_1.Files.createDirAsync(this.configDir)
            };
            return this;
        });
    }
    static getDataDir() {
        let dataDirs = [
            {
                path: GlobalDataDir.get(),
                strategy: 'manual'
            },
            {
                path: process.env.POLAR_DATA_DIR,
                strategy: 'env'
            },
            {
                path: FilePaths_1.FilePaths.join(DiskDatastore_1.DiskDatastore.getUserHome(), ".polar"),
                strategy: 'home',
            }
        ];
        dataDirs = dataDirs.filter(current => Preconditions_1.isPresent(current.path));
        const dataDir = dataDirs[0];
        return {
            path: dataDir.path,
            strategy: dataDir.strategy
        };
    }
}
exports.Directories = Directories;
class GlobalDataDir {
    static set(value) {
        this.value = value;
    }
    static get() {
        return this.value;
    }
}
GlobalDataDir.value = undefined;
exports.GlobalDataDir = GlobalDataDir;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlyZWN0b3JpZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJEaXJlY3Rvcmllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR0EsbURBQXNFO0FBQ3RFLHlDQUFxRDtBQUNyRCxpREFBNEM7QUFDNUMsb0RBQTJDO0FBRTNDLE1BQWEsV0FBVztJQWtCcEI7UUFFSSxJQUFJLENBQUMsYUFBYSxHQUFHLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUU5QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1FBR3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcscUJBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsUUFBUSxHQUFHLHFCQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxTQUFTLEdBQUcscUJBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUU5RCxDQUFDO0lBRVksSUFBSTs7WUFFYixJQUFJLENBQUMsY0FBYyxHQUFHO2dCQUNsQixPQUFPLEVBQUUsTUFBTSxhQUFLLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ2pELFFBQVEsRUFBRSxNQUFNLGFBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDbkQsUUFBUSxFQUFFLE1BQU0sYUFBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNuRCxPQUFPLEVBQUUsTUFBTSxhQUFLLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ2pELFNBQVMsRUFBRSxNQUFNLGFBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUN4RCxDQUFDO1lBRUYsT0FBTyxJQUFJLENBQUM7UUFFaEIsQ0FBQztLQUFBO0lBRU0sTUFBTSxDQUFDLFVBQVU7UUFFcEIsSUFBSSxRQUFRLEdBQWM7WUFDdEI7Z0JBSUksSUFBSSxFQUFFLGFBQWEsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3pCLFFBQVEsRUFBRSxRQUFRO2FBQ3JCO1lBQ0Q7Z0JBRUksSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYztnQkFDaEMsUUFBUSxFQUFFLEtBQUs7YUFDbEI7WUFDRDtnQkFDSSxJQUFJLEVBQUUscUJBQVMsQ0FBQyxJQUFJLENBQUMsNkJBQWEsQ0FBQyxXQUFXLEVBQUUsRUFBRSxRQUFRLENBQUM7Z0JBQzNELFFBQVEsRUFBRSxNQUFNO2FBQ25CO1NBQ0osQ0FBQztRQUdGLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMseUJBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUUvRCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFNUIsT0FBTztZQUNILElBQUksRUFBRSxPQUFPLENBQUMsSUFBSztZQUNuQixRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVE7U0FDN0IsQ0FBQztJQUVOLENBQUM7Q0FFSjtBQS9FRCxrQ0ErRUM7QUFPRCxNQUFhLGFBQWE7SUFJZixNQUFNLENBQUMsR0FBRyxDQUFDLEtBQXlCO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxNQUFNLENBQUMsR0FBRztRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDOztBQVJjLG1CQUFLLEdBQXVCLFNBQVMsQ0FBQztBQUZ6RCxzQ0FZQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmVwcmVzZW50cyBrZXkgbG9jYWwgZGlyZWN0b3JpZXMgZm9yIFBvbGFyIHdoZW4gcnVubmluZyBsb2NhbGx5LlxuICovXG5pbXBvcnQge0RhdGFEaXIsIERhdGFEaXJDb25maWcsIERpc2tEYXRhc3RvcmV9IGZyb20gJy4vRGlza0RhdGFzdG9yZSc7XG5pbXBvcnQge0NyZWF0ZURpclJlc3VsdCwgRmlsZXN9IGZyb20gJy4uL3V0aWwvRmlsZXMnO1xuaW1wb3J0IHtGaWxlUGF0aHN9IGZyb20gJy4uL3V0aWwvRmlsZVBhdGhzJztcbmltcG9ydCB7aXNQcmVzZW50fSBmcm9tICcuLi9QcmVjb25kaXRpb25zJztcblxuZXhwb3J0IGNsYXNzIERpcmVjdG9yaWVzIHtcblxuICAgIHB1YmxpYyByZWFkb25seSBkYXRhRGlyOiBzdHJpbmc7XG4gICAgcHVibGljIHJlYWRvbmx5IHN0YXNoRGlyOiBzdHJpbmc7XG4gICAgcHVibGljIHJlYWRvbmx5IGZpbGVzRGlyOiBzdHJpbmc7XG4gICAgcHVibGljIHJlYWRvbmx5IGxvZ3NEaXI6IHN0cmluZztcbiAgICBwdWJsaWMgcmVhZG9ubHkgY29uZmlnRGlyOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqXG4gICAgICogRXhwb3NlIHRoZSBEYXRhRGlyQ29uZmlnIHNvIHRlc3RzIGFuZCBvdGhlciBzeXN0ZW1zIGNhbiBzZWUgaG93IHRoZVxuICAgICAqIGRhdGFEaXIgd2FzIHNldHVwIGZvciB0aGUgRGlza0RhdGFzdG9yZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgZGF0YURpckNvbmZpZzogRGF0YURpckNvbmZpZztcblxuICAgIHB1YmxpYyBpbml0aWFsaXphdGlvbj86IEluaXRpYWxpemF0aW9uO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgdGhpcy5kYXRhRGlyQ29uZmlnID0gRGlyZWN0b3JpZXMuZ2V0RGF0YURpcigpO1xuXG4gICAgICAgIHRoaXMuZGF0YURpciA9IHRoaXMuZGF0YURpckNvbmZpZy5wYXRoO1xuXG4gICAgICAgIC8vIHRoZSBwYXRoIHRvIHRoZSBzdGFzaCBkaXJlY3RvcnlcbiAgICAgICAgdGhpcy5zdGFzaERpciA9IEZpbGVQYXRocy5jcmVhdGUodGhpcy5kYXRhRGlyLCBcInN0YXNoXCIpO1xuICAgICAgICB0aGlzLmZpbGVzRGlyID0gRmlsZVBhdGhzLmNyZWF0ZSh0aGlzLmRhdGFEaXIsIFwiZmlsZXNcIik7XG4gICAgICAgIHRoaXMubG9nc0RpciA9IEZpbGVQYXRocy5jcmVhdGUodGhpcy5kYXRhRGlyLCBcImxvZ3NcIik7XG4gICAgICAgIHRoaXMuY29uZmlnRGlyID0gRmlsZVBhdGhzLmNyZWF0ZSh0aGlzLmRhdGFEaXIsIFwiY29uZmlnXCIpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGluaXQoKSB7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsaXphdGlvbiA9IHtcbiAgICAgICAgICAgIGRhdGFEaXI6IGF3YWl0IEZpbGVzLmNyZWF0ZURpckFzeW5jKHRoaXMuZGF0YURpciksXG4gICAgICAgICAgICBzdGFzaERpcjogYXdhaXQgRmlsZXMuY3JlYXRlRGlyQXN5bmModGhpcy5zdGFzaERpciksXG4gICAgICAgICAgICBmaWxlc0RpcjogYXdhaXQgRmlsZXMuY3JlYXRlRGlyQXN5bmModGhpcy5maWxlc0RpciksXG4gICAgICAgICAgICBsb2dzRGlyOiBhd2FpdCBGaWxlcy5jcmVhdGVEaXJBc3luYyh0aGlzLmxvZ3NEaXIpLFxuICAgICAgICAgICAgY29uZmlnRGlyOiBhd2FpdCBGaWxlcy5jcmVhdGVEaXJBc3luYyh0aGlzLmNvbmZpZ0RpcilcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0RGF0YURpcigpOiBEYXRhRGlyQ29uZmlnIHtcblxuICAgICAgICBsZXQgZGF0YURpcnM6IERhdGFEaXJbXSA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyBjb25maWd1cmVkIHZpYSBzdGF0aWMuICBJIHRoaW5rIHdlIHNob3VsZCBkZXByZWNhdGUgdGhpcyBpbiB0aGVcbiAgICAgICAgICAgICAgICAvLyBmdXR1cmUgYXMgdGhlIGVudiB2YXIgc2VlbXMgbW9yZSBmbGV4aWJsZSBhbmQgd29ya3MgYWNyb3NzXG4gICAgICAgICAgICAgICAgLy8gcHJvY2Vzc2VzIHdoZW4gdXNpbmcgc3BlY3Ryb24sIHJlbmRlcmVycywgYW5kIG1haW4uXG4gICAgICAgICAgICAgICAgcGF0aDogR2xvYmFsRGF0YURpci5nZXQoKSxcbiAgICAgICAgICAgICAgICBzdHJhdGVneTogJ21hbnVhbCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gbWFudWFsbHkgY29uZmlndXJlZCBmcm9tIHRoZSBlbnZpcm9ubWVudFxuICAgICAgICAgICAgICAgIHBhdGg6IHByb2Nlc3MuZW52LlBPTEFSX0RBVEFfRElSLFxuICAgICAgICAgICAgICAgIHN0cmF0ZWd5OiAnZW52J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRoOiBGaWxlUGF0aHMuam9pbihEaXNrRGF0YXN0b3JlLmdldFVzZXJIb21lKCksIFwiLnBvbGFyXCIpLFxuICAgICAgICAgICAgICAgIHN0cmF0ZWd5OiAnaG9tZScsXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG5cbiAgICAgICAgLy8gcmVtb3ZlIGFueSBwYXRocyB0aGF0IGFyZSBtaXNzaW5nLi4uXG4gICAgICAgIGRhdGFEaXJzID0gZGF0YURpcnMuZmlsdGVyKGN1cnJlbnQgPT4gaXNQcmVzZW50KGN1cnJlbnQucGF0aCkpO1xuXG4gICAgICAgIGNvbnN0IGRhdGFEaXIgPSBkYXRhRGlyc1swXTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGF0aDogZGF0YURpci5wYXRoISxcbiAgICAgICAgICAgIHN0cmF0ZWd5OiBkYXRhRGlyLnN0cmF0ZWd5XG4gICAgICAgIH07XG5cbiAgICB9XG5cbn1cblxuXG4vKipcbiAqIEFsbG93cyB1cyB0byBvdmVycmlkZSB0aGUgZGF0YSBkaXIgaW50ZXJuYWxseSBmb3IgdGVzdGluZyByYXRoZXIgdGhhbiBzZXR0aW5nXG4gKiBhbiBlbnZpcm9ubWVudCB2YXJpYWJsZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEdsb2JhbERhdGFEaXIge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgdmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICAgIHB1YmxpYyBzdGF0aWMgc2V0KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9XG5cbn1cblxuLyoqXG4gKiBSZXN1bHRzIG9mIGluaXRpYWxpemF0aW9uOlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEluaXRpYWxpemF0aW9uIHtcbiAgICByZWFkb25seSBkYXRhRGlyOiBDcmVhdGVEaXJSZXN1bHQ7XG4gICAgcmVhZG9ubHkgc3Rhc2hEaXI6IENyZWF0ZURpclJlc3VsdDtcbiAgICByZWFkb25seSBmaWxlc0RpcjogQ3JlYXRlRGlyUmVzdWx0O1xuICAgIHJlYWRvbmx5IGxvZ3NEaXI6IENyZWF0ZURpclJlc3VsdDtcbiAgICByZWFkb25seSBjb25maWdEaXI6IENyZWF0ZURpclJlc3VsdDtcbn1cbiJdfQ==