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
const ResourcePaths_1 = require("../../electron/webresource/ResourcePaths");
const electron_1 = require("electron");
const Preconditions_1 = require("../../Preconditions");
const Logger_1 = require("../../logger/Logger");
const BrowserRegistry_1 = __importDefault(require("../BrowserRegistry"));
const BrowserProfiles_1 = require("../BrowserProfiles");
const Capture_1 = require("../Capture");
const Directories_1 = require("../../datastore/Directories");
const PHZLoader_1 = require("../../apps/main/file_loaders/PHZLoader");
const log = Logger_1.Logger.create();
class CaptureController {
    constructor(cacheRegistry) {
        this.directories = new Directories_1.Directories();
        this.cacheRegistry = cacheRegistry;
        this.phzLoader = new PHZLoader_1.PHZLoader({ cacheRegistry: this.cacheRegistry });
    }
    start() {
        electron_1.ipcMain.on('capture-controller-start-capture', (event, message) => {
            this.startCapture(event.sender, message.url)
                .catch(err => log.error("Could not start capture: ", err));
        });
    }
    startCapture(webContents, url) {
        return __awaiter(this, void 0, void 0, function* () {
            webContents = yield this.loadApp(webContents, url);
            const captureResult = yield this.runCapture(webContents, url);
            yield this.loadPHZ(webContents, captureResult.path);
        });
    }
    loadApp(webContents, url) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                log.debug("Starting capture for URL: " + url);
                const appPath = ResourcePaths_1.ResourcePaths.absoluteFromRelativePath('./apps/capture/progress/index.html');
                const appURL = 'file://' + appPath;
                webContents.once("did-finish-load", () => {
                    resolve(webContents);
                });
                log.debug("Loading app: ", appURL);
                webContents.loadURL(appURL);
            });
        });
    }
    runCapture(webContents, url) {
        return __awaiter(this, void 0, void 0, function* () {
            Preconditions_1.Preconditions.assertNotNull(webContents, "webContents");
            const progressForwarder = new ProgressForwarder({ webContents });
            const captureOpts = {
                pendingWebRequestsCallback: (event) => progressForwarder.pendingWebRequestsCallback(event),
                amp: true
            };
            const browser = BrowserRegistry_1.default.DEFAULT;
            const browserProfile = BrowserProfiles_1.BrowserProfiles.toBrowserProfile(browser, "WEBVIEW");
            browserProfile.navigation.navigated.dispatchEvent({ link: url });
            browserProfile.navigation.captured.dispatchEvent({});
            const capture = new Capture_1.Capture(browserProfile, captureOpts);
            const captureResult = yield capture.start();
            log.info("captureResult: ", captureResult);
            return captureResult;
        });
    }
    loadPHZ(webContents, path) {
        return __awaiter(this, void 0, void 0, function* () {
            const loadedFile = yield this.phzLoader.registerForLoad(path);
            log.debug(`Loading PHZ URL via: `, loadedFile.webResource);
            loadedFile.webResource.loadWebContents(webContents);
        });
    }
}
exports.CaptureController = CaptureController;
class ProgressForwarder {
    constructor(opts) {
        this.webContents = opts.webContents;
        Preconditions_1.Preconditions.assertNotNull(this.webContents, "webContents");
    }
    pendingWebRequestsCallback(event) {
        this.webContents.send("capture-progress-update", event);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FwdHVyZUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDYXB0dXJlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsNEVBQXVFO0FBQ3ZFLHVDQUFpQztBQUNqQyx1REFBa0Q7QUFDbEQsZ0RBQTJDO0FBQzNDLHlFQUFpRDtBQUNqRCx3REFBbUQ7QUFDbkQsd0NBQW1DO0FBSW5DLDZEQUF3RDtBQUV4RCxzRUFBaUU7QUFFakUsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsaUJBQWlCO0lBUTFCLFlBQVksYUFBNEI7UUFOdkIsZ0JBQVcsR0FBZ0IsSUFBSSx5QkFBVyxFQUFFLENBQUM7UUFRMUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFFbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHFCQUFTLENBQUMsRUFBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBQyxDQUFDLENBQUM7SUFFeEUsQ0FBQztJQUtNLEtBQUs7UUFFUixrQkFBTyxDQUFDLEVBQUUsQ0FBQyxrQ0FBa0MsRUFBRSxDQUFDLEtBQXFCLEVBQUUsT0FBNEIsRUFBRSxFQUFFO1lBRW5HLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDO2lCQUN2QyxLQUFLLENBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLDJCQUEyQixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFcEUsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBU2UsWUFBWSxDQUFDLFdBQWlDLEVBQUUsR0FBVzs7WUFFdkUsV0FBVyxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFFbkQsTUFBTSxhQUFhLEdBQUcsTUFBTSxJQUFJLENBQUMs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LENBQUM7SUFFNUQsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSZXNvdXJjZVBhdGhzfSBmcm9tIFwiLi4vLi4vZWxlY3Ryb24vd2VicmVzb3VyY2UvUmVzb3VyY2VQYXRoc1wiO1xuaW1wb3J0IHtpcGNNYWlufSBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQge1ByZWNvbmRpdGlvbnN9IGZyb20gJy4uLy4uL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uLy4uL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IEJyb3dzZXJSZWdpc3RyeSBmcm9tICcuLi9Ccm93c2VyUmVnaXN0cnknO1xuaW1wb3J0IHtCcm93c2VyUHJvZmlsZXN9IGZyb20gJy4uL0Jyb3dzZXJQcm9maWxlcyc7XG5pbXBvcnQge0NhcHR1cmV9IGZyb20gJy4uL0NhcHR1cmUnO1xuaW1wb3J0IHtQZW5kaW5nV2ViUmVxdWVzdHNFdmVudH0gZnJvbSAnLi4vLi4vd2VicmVxdWVzdHMvUGVuZGluZ1dlYlJlcXVlc3RzTGlzdGVuZXInO1xuaW1wb3J0IHtDYXB0dXJlT3B0c30gZnJvbSAnLi4vQ2FwdHVyZU9wdHMnO1xuaW1wb3J0IHtTdGFydENhcHR1cmVNZXNzYWdlfSBmcm9tICcuL0NhcHR1cmVDbGllbnQnO1xuaW1wb3J0IHtEaXJlY3Rvcmllc30gZnJvbSAnLi4vLi4vZGF0YXN0b3JlL0RpcmVjdG9yaWVzJztcbmltcG9ydCB7Q2FjaGVSZWdpc3RyeX0gZnJvbSAnLi4vLi4vYmFja2VuZC9wcm94eXNlcnZlci9DYWNoZVJlZ2lzdHJ5JztcbmltcG9ydCB7UEhaTG9hZGVyfSBmcm9tIFwiLi4vLi4vYXBwcy9tYWluL2ZpbGVfbG9hZGVycy9QSFpMb2FkZXJcIjtcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgY2xhc3MgQ2FwdHVyZUNvbnRyb2xsZXIge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBkaXJlY3RvcmllczogRGlyZWN0b3JpZXMgPSBuZXcgRGlyZWN0b3JpZXMoKTtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgY2FjaGVSZWdpc3RyeTogQ2FjaGVSZWdpc3RyeTtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgcGh6TG9hZGVyOiBQSFpMb2FkZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihjYWNoZVJlZ2lzdHJ5OiBDYWNoZVJlZ2lzdHJ5KSB7XG5cbiAgICAgICAgdGhpcy5jYWNoZVJlZ2lzdHJ5ID0gY2FjaGVSZWdpc3RyeTtcblxuICAgICAgICB0aGlzLnBoekxvYWRlciA9IG5ldyBQSFpMb2FkZXIoe2NhY2hlUmVnaXN0cnk6IHRoaXMuY2FjaGVSZWdpc3RyeX0pO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RhcnQgdGhlIHNlcnZpY2UgdG8gcmVjZWl2ZSBhbmQgaGFuZGxlIElQQyBtZXNzYWdlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhcnQoKSB7XG5cbiAgICAgICAgaXBjTWFpbi5vbignY2FwdHVyZS1jb250cm9sbGVyLXN0YXJ0LWNhcHR1cmUnLCAoZXZlbnQ6IEVsZWN0cm9uLkV2ZW50LCBtZXNzYWdlOiBTdGFydENhcHR1cmVNZXNzYWdlKSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMuc3RhcnRDYXB0dXJlKGV2ZW50LnNlbmRlciwgbWVzc2FnZS51cmwpXG4gICAgICAgICAgICAgICAgLmNhdGNoKCBlcnIgPT4gbG9nLmVycm9yKFwiQ291bGQgbm90IHN0YXJ0IGNhcHR1cmU6IFwiLCBlcnIpKTtcblxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHdlYkNvbnRlbnRzIHtFbGVjdHJvbi5XZWJDb250ZW50c30gVGhlIHdlYkNvbnRlbnRzIG9mIHRoZSBkaWFsb2dcbiAgICAgKiBib3ggdGhhdCBzdGFydGVkIHRoZSB3aG9sZSBjYXB0dXJlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHVybCB7c3RyaW5nfVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBhc3luYyBzdGFydENhcHR1cmUod2ViQ29udGVudHM6IEVsZWN0cm9uLldlYkNvbnRlbnRzLCB1cmw6IHN0cmluZykge1xuXG4gICAgICAgIHdlYkNvbnRlbnRzID0gYXdhaXQgdGhpcy5sb2FkQXBwKHdlYkNvbnRlbnRzLCB1cmwpO1xuXG4gICAgICAgIGNvbnN0IGNhcHR1cmVSZXN1bHQgPSBhd2FpdCB0aGlzLnJ1bkNhcHR1cmUod2ViQ29udGVudHMsIHVybCk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIGxldCBjYXB0dXJlUmVzdWx0ID0ge1xuICAgICAgICAvLyAgICAgcGF0aDpcbiAgICAgICAgLy8gXCIvaG9tZS9idXJ0b24vLnBvbGFyL3N0YXNoL1VLX3VudmVpbHNfbmV3X1RlbXBlc3RfZmlnaHRlcl9qZXRfbW9kZWxfX19CQkNfTmV3cy5waHpcIlxuICAgICAgICAvLyB9O1xuXG4gICAgICAgIC8vIG5vdyBsb2FkIHRoZSBwaHogaW4gdGhlIHRhcmdldCB3aW5kb3dcblxuICAgICAgICBhd2FpdCB0aGlzLmxvYWRQSFood2ViQ29udGVudHMsIGNhcHR1cmVSZXN1bHQucGF0aCk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXR1cCB0aGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB3ZWJDb250ZW50cyB7RWxlY3Ryb24uV2ViQ29udGVudHN9XG4gICAgICogQHBhcmFtIHVybCB7c3RyaW5nfVxuICAgICAqXG4gICAgICovXG4gICAgcHJpdmF0ZSBhc3luYyBsb2FkQXBwKHdlYkNvbnRlbnRzOiBFbGVjdHJvbi5XZWJDb250ZW50cywgdXJsOiBzdHJpbmcpOiBQcm9taXNlPEVsZWN0cm9uLldlYkNvbnRlbnRzPiB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPEVsZWN0cm9uLldlYkNvbnRlbnRzPihyZXNvbHZlID0+IHtcblxuICAgICAgICAgICAgbG9nLmRlYnVnKFwiU3RhcnRpbmcgY2FwdHVyZSBmb3IgVVJMOiBcIiArIHVybCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGFwcFBhdGggPSBSZXNvdXJjZVBhdGhzLmFic29sdXRlRnJvbVJlbGF0aXZlUGF0aCgnLi9hcHBzL2NhcHR1cmUvcHJvZ3Jlc3MvaW5kZXguaHRtbCcpO1xuICAgICAgICAgICAgY29uc3QgYXBwVVJMID0gJ2ZpbGU6Ly8nICsgYXBwUGF0aDtcblxuICAgICAgICAgICAgd2ViQ29udGVudHMub25jZShcImRpZC1maW5pc2gtbG9hZFwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh3ZWJDb250ZW50cyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbG9nLmRlYnVnKFwiTG9hZGluZyBhcHA6IFwiLCBhcHBVUkwpO1xuXG4gICAgICAgICAgICB3ZWJDb250ZW50cy5sb2FkVVJMKGFwcFVSTCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB3ZWJDb250ZW50cyBUaGUgd2ViQ29udGVudHMgcGFnZSB0aGF0IHNob3VsZCBiZSB1cGRhdGVkIHdpdGggb3VyXG4gICAgICogcHJvZ3Jlc3MuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSBVUkwgdG8gY2FwdHVyZS5cbiAgICAgKlxuICAgICAqL1xuICAgIHByaXZhdGUgYXN5bmMgcnVuQ2FwdHVyZSh3ZWJDb250ZW50czogRWxlY3Ryb24uV2ViQ29udGVudHMsIHVybDogc3RyaW5nKSB7XG5cbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnROb3ROdWxsKHdlYkNvbnRlbnRzLCBcIndlYkNvbnRlbnRzXCIpO1xuXG4gICAgICAgIGNvbnN0IHByb2dyZXNzRm9yd2FyZGVyID0gbmV3IFByb2dyZXNzRm9yd2FyZGVyKHt3ZWJDb250ZW50c30pO1xuXG4gICAgICAgIGNvbnN0IGNhcHR1cmVPcHRzOiBDYXB0dXJlT3B0cyA9IHtcbiAgICAgICAgICAgIHBlbmRpbmdXZWJSZXF1ZXN0c0NhbGxiYWNrOiAoZXZlbnQpID0+IHByb2dyZXNzRm9yd2FyZGVyLnBlbmRpbmdXZWJSZXF1ZXN0c0NhbGxiYWNrKGV2ZW50KSxcbiAgICAgICAgICAgIGFtcDogdHJ1ZVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGJyb3dzZXIgPSBCcm93c2VyUmVnaXN0cnkuREVGQVVMVDtcblxuICAgICAgICAvLyBicm93c2VyID0gQnJvd3NlcnMudG9Qcm9maWxlKGJyb3dzZXIsIFwiaGVhZGxlc3NcIik7XG4gICAgICAgIC8vIFRPRE86IHRoaXMgc2hvdWxkIGJlICdkZWZhdWx0JyBub3QgJ2hpZGRlbidcblxuICAgICAgICAvLyBicm93c2VyID0gQnJvd3NlcnMudG9Qcm9maWxlKGJyb3dzZXIsIFwiZGVmYXVsdFwiKTtcbiAgICAgICAgY29uc3QgYnJvd3NlclByb2ZpbGUgPSBCcm93c2VyUHJvZmlsZXMudG9Ccm93c2VyUHJvZmlsZShicm93c2VyLCBcIldFQlZJRVdcIik7XG5cbiAgICAgICAgYnJvd3NlclByb2ZpbGUubmF2aWdhdGlvbi5uYXZpZ2F0ZWQuZGlzcGF0Y2hFdmVudCh7bGluazogdXJsfSk7XG4gICAgICAgIGJyb3dzZXJQcm9maWxlLm5hdmlnYXRpb24uY2FwdHVyZWQuZGlzcGF0Y2hFdmVudCh7fSk7XG5cbiAgICAgICAgY29uc3QgY2FwdHVyZSA9IG5ldyBDYXB0dXJlKGJyb3dzZXJQcm9maWxlLCBjYXB0dXJlT3B0cyk7XG5cbiAgICAgICAgY29uc3QgY2FwdHVyZVJlc3VsdCA9IGF3YWl0IGNhcHR1cmUuc3RhcnQoKTtcblxuICAgICAgICBsb2cuaW5mbyhcImNhcHR1cmVSZXN1bHQ6IFwiLCBjYXB0dXJlUmVzdWx0KTtcblxuICAgICAgICByZXR1cm4gY2FwdHVyZVJlc3VsdDtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHdlYkNvbnRlbnRzIHtFbGVjdHJvbi5XZWJDb250ZW50c31cbiAgICAgKiBAcGFyYW0gcGF0aCB7c3RyaW5nfSBUaGUgcGF0aCB0byBvdXIgcGh6IGZpbGUuXG4gICAgICovXG4gICAgcHJpdmF0ZSBhc3luYyBsb2FkUEhaKHdlYkNvbnRlbnRzOiBFbGVjdHJvbi5XZWJDb250ZW50cywgcGF0aDogc3RyaW5nKSB7XG5cbiAgICAgICAgY29uc3QgbG9hZGVkRmlsZSA9IGF3YWl0IHRoaXMucGh6TG9hZGVyLnJlZ2lzdGVyRm9yTG9hZChwYXRoKTtcblxuICAgICAgICBsb2cuZGVidWcoYExvYWRpbmcgUEhaIFVSTCB2aWE6IGAsIGxvYWRlZEZpbGUud2ViUmVzb3VyY2UpO1xuXG4gICAgICAgIGxvYWRlZEZpbGUud2ViUmVzb3VyY2UubG9hZFdlYkNvbnRlbnRzKHdlYkNvbnRlbnRzKTtcblxuICAgIH1cblxufVxuXG5cbmNsYXNzIFByb2dyZXNzRm9yd2FyZGVyIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgd2ViQ29udGVudHM6IEVsZWN0cm9uLldlYkNvbnRlbnRzO1xuXG4gICAgY29uc3RydWN0b3Iob3B0czogYW55KSB7XG5cbiAgICAgICAgdGhpcy53ZWJDb250ZW50cyA9IG9wdHMud2ViQ29udGVudHM7XG5cbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnROb3ROdWxsKHRoaXMud2ViQ29udGVudHMsIFwid2ViQ29udGVudHNcIik7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcGVuZGluZ1dlYlJlcXVlc3RzQ2FsbGJhY2soZXZlbnQ6IFBlbmRpbmdXZWJSZXF1ZXN0c0V2ZW50KSB7XG5cbiAgICAgICAgdGhpcy53ZWJDb250ZW50cy5zZW5kKFwiY2FwdHVyZS1wcm9ncmVzcy11cGRhdGVcIiwgZXZlbnQpO1xuXG4gICAgfVxuXG59XG4iXX0=