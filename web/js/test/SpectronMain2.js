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
const MainTestResultWriter_1 = require("./results/writer/MainTestResultWriter");
const Logger_1 = require("../logger/Logger");
const SpectronBrowserWindowOptions_1 = require("./SpectronBrowserWindowOptions");
const log = Logger_1.Logger.create();
class SpectronMain2 {
    constructor(options) {
        this.options = options;
    }
    createWindow() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.options.windowFactory();
        });
    }
    setup() {
        return new Promise(resolve => {
            electron_1.app.on('ready', () => __awaiter(this, void 0, void 0, function* () {
                log.info("Ready!  Creating main window!!");
                const mainWindow = yield this.options.windowFactory();
                log.info("Done.. resolving");
                resolve(mainWindow);
            }));
        });
    }
    start(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const window = yield this.setup();
            const testResultWriter = new MainTestResultWriter_1.MainTestResultWriter(window);
            return callback(new SpectronMainState(this, window, testResultWriter));
        });
    }
    run(callback) {
        this.start(callback)
            .catch(err => log.error("Could not run spectron:", err));
    }
    static create(options = new SpectronMainOptions().build()) {
        return new SpectronMain2(options);
    }
}
exports.SpectronMain2 = SpectronMain2;
function defaultWindowFactory() {
    return __awaiter(this, void 0, void 0, function* () {
        const mainWindow = new electron_1.BrowserWindow(SpectronBrowserWindowOptions_1.SpectronBrowserWindowOptions.create());
        mainWindow.loadURL('about:blank');
        return mainWindow;
    });
}
class SpectronMainState {
    constructor(spectronMain, window, testResultWriter) {
        this.spectronMain = spectronMain;
        this.window = window;
        this.testResultWriter = testResultWriter;
    }
    createWindow() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.spectronMain.createWindow();
        });
    }
}
exports.SpectronMainState = SpectronMainState;
class SpectronMainOptions {
    constructor() {
        this.windowFactory = defaultWindowFactory;
        this.enableDevTools = false;
    }
    build() {
        return Object.freeze(this);
    }
}
exports.SpectronMainOptions = SpectronMainOptions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BlY3Ryb25NYWluMi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNwZWN0cm9uTWFpbjIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVDQUE0QztBQUM1QyxnRkFBMkU7QUFDM0UsNkNBQXdDO0FBQ3hDLGlGQUE0RTtBQUU1RSxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFNNUIsTUFBYSxhQUFhO0lBSXRCLFlBQW9CLE9BQXVDO1FBQ3ZELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFLWSxZQUFZOztZQUNyQixPQUFPLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUM5QyxDQUFDO0tBQUE7SUFFTSxLQUFLO1FBRVIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUV6QixjQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFTLEVBQUU7Z0JBRXZCLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztnQkFFM0MsTUFBTSxVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUV0RCxHQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7Z0JBQzdCLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUV4QixDQUFDLENBQUEsQ0FBQyxDQUFDO1FBRVAsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRVksS0FBSyxDQUFDLFFBQXVCOztZQUN0QyxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNsQyxNQUFNLGdCQUFnQixHQUFHLElBQUksMkNBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFMUQsT0FBTyxRQUFRLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQztRQUUzRSxDQUFDO0tBQUE7SUFNTSxHQUFHLENBQUMsUUFBdUI7UUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7YUFDZixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLHlCQUF5QixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVNLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBZ0MsSUFBSSxtQkFBbUIsRUFBRSxDQUFDLEtBQUssRUFBRTtRQUNsRixPQUFPLElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Q0FFSjtBQXZERCxzQ0F1REM7QUFFRCxTQUFlLG9CQUFvQjs7UUFDL0IsTUFBTSxVQUFVLEdBQUcsSUFBSSx3QkFBYSxDQUFDLDJEQUE0QixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFFNUUsVUFBVSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNsQyxPQUFPLFVBQVUsQ0FBQztJQUN0QixDQUFDO0NBQUE7QUFFRCxNQUFhLGlCQUFpQjtJQVExQixZQUFZLFlBQTJCLEVBQUUsTUFBcUIsRUFBRSxnQkFBc0M7UUFDbEcsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO0lBQzdDLENBQUM7SUFLWSxZQUFZOztZQUNyQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDNUMsQ0FBQztLQUFBO0NBRUo7QUFyQkQsOENBcUJDO0FBRUQsTUFBYSxtQkFBbUI7SUFBaEM7UUFFVyxrQkFBYSxHQUFrQixvQkFBb0IsQ0FBQztRQU1wRCxtQkFBYyxHQUFHLEtBQUssQ0FBQztJQU1sQyxDQUFDO0lBSlUsS0FBSztRQUNSLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0NBRUo7QUFkRCxrREFjQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXBwLCBCcm93c2VyV2luZG93fSBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQge01haW5UZXN0UmVzdWx0V3JpdGVyfSBmcm9tICcuL3Jlc3VsdHMvd3JpdGVyL01haW5UZXN0UmVzdWx0V3JpdGVyJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7U3BlY3Ryb25Ccm93c2VyV2luZG93T3B0aW9uc30gZnJvbSAnLi9TcGVjdHJvbkJyb3dzZXJXaW5kb3dPcHRpb25zJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG4vKipcbiAqIENvZGUgZm9yIHJlbGlhYmx5IHdvcmtpbmcgd2l0aCB0aGUgbWFpbiBwcm9jZXNzIGluIFNwZWN0cm9uLiAgV2FpdHMgZm9yIGFwcFxuICogJ3JlYWR5Jywgc2V0cyB1cCB3aW5kb3dzLCBldGMuXG4gKi9cbmV4cG9ydCBjbGFzcyBTcGVjdHJvbk1haW4yIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgb3B0aW9uczogUmVhZG9ubHk8SVNwZWN0cm9uTWFpbk9wdGlvbnM+O1xuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihvcHRpb25zOiBSZWFkb25seTxJU3BlY3Ryb25NYWluT3B0aW9ucz4pIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSB3aW5kb3cgdXNpbmcgdGhlIGN1cnJlbnQgd2luZG93IGNvbnN0cnVjdG9yIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBjcmVhdGVXaW5kb3coKTogUHJvbWlzZTxCcm93c2VyV2luZG93PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLm9wdGlvbnMud2luZG93RmFjdG9yeSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXR1cCgpOiBQcm9taXNlPEJyb3dzZXJXaW5kb3c+IHtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG5cbiAgICAgICAgICAgIGFwcC5vbigncmVhZHknLCBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBsb2cuaW5mbyhcIlJlYWR5ISAgQ3JlYXRpbmcgbWFpbiB3aW5kb3chIVwiKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG1haW5XaW5kb3cgPSBhd2FpdCB0aGlzLm9wdGlvbnMud2luZG93RmFjdG9yeSgpO1xuXG4gICAgICAgICAgICAgICAgbG9nLmluZm8oXCJEb25lLi4gcmVzb2x2aW5nXCIpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUobWFpbldpbmRvdyk7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHN0YXJ0KGNhbGxiYWNrOiBTdGF0ZUNhbGxiYWNrKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IHdpbmRvdyA9IGF3YWl0IHRoaXMuc2V0dXAoKTtcbiAgICAgICAgY29uc3QgdGVzdFJlc3VsdFdyaXRlciA9IG5ldyBNYWluVGVzdFJlc3VsdFdyaXRlcih3aW5kb3cpO1xuXG4gICAgICAgIHJldHVybiBjYWxsYmFjayhuZXcgU3BlY3Ryb25NYWluU3RhdGUodGhpcywgd2luZG93LCB0ZXN0UmVzdWx0V3JpdGVyKSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMaWtlIHN0YXJ0IGJ1dCBub3QgYXN5bmMgYW5kIGFzc3VtZSB0aGlzIGlzIHRoZSBlbnRyeSBwb2ludCBvZiB5b3VyIHRlc3RcbiAgICAgKiBhbmQganVzdCBwcmludCBlcnJvciBtZXNzYWdlcyB0byB0aGUgY29uc29sZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcnVuKGNhbGxiYWNrOiBTdGF0ZUNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuc3RhcnQoY2FsbGJhY2spXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihcIkNvdWxkIG5vdCBydW4gc3BlY3Ryb246XCIsIGVycikpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKG9wdGlvbnM6IElTcGVjdHJvbk1haW5PcHRpb25zID0gbmV3IFNwZWN0cm9uTWFpbk9wdGlvbnMoKS5idWlsZCgpKSB7XG4gICAgICAgIHJldHVybiBuZXcgU3BlY3Ryb25NYWluMihvcHRpb25zKTtcbiAgICB9XG5cbn1cblxuYXN5bmMgZnVuY3Rpb24gZGVmYXVsdFdpbmRvd0ZhY3RvcnkoKTogUHJvbWlzZTxCcm93c2VyV2luZG93PiB7XG4gICAgY29uc3QgbWFpbldpbmRvdyA9IG5ldyBCcm93c2VyV2luZG93KFNwZWN0cm9uQnJvd3NlcldpbmRvd09wdGlvbnMuY3JlYXRlKCkpO1xuICAgIC8vIG1haW5XaW5kb3cud2ViQ29udGVudHMudG9nZ2xlRGV2VG9vbHMoKTtcbiAgICBtYWluV2luZG93LmxvYWRVUkwoJ2Fib3V0OmJsYW5rJyk7XG4gICAgcmV0dXJuIG1haW5XaW5kb3c7XG59XG5cbmV4cG9ydCBjbGFzcyBTcGVjdHJvbk1haW5TdGF0ZSB7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgc3BlY3Ryb25NYWluOiBTcGVjdHJvbk1haW4yO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IHdpbmRvdzogQnJvd3NlcldpbmRvdztcblxuICAgIHB1YmxpYyByZWFkb25seSB0ZXN0UmVzdWx0V3JpdGVyOiBNYWluVGVzdFJlc3VsdFdyaXRlcjtcblxuICAgIGNvbnN0cnVjdG9yKHNwZWN0cm9uTWFpbjogU3BlY3Ryb25NYWluMiwgd2luZG93OiBCcm93c2VyV2luZG93LCB0ZXN0UmVzdWx0V3JpdGVyOiBNYWluVGVzdFJlc3VsdFdyaXRlcikge1xuICAgICAgICB0aGlzLnNwZWN0cm9uTWFpbiA9IHNwZWN0cm9uTWFpbjtcbiAgICAgICAgdGhpcy53aW5kb3cgPSB3aW5kb3c7XG4gICAgICAgIHRoaXMudGVzdFJlc3VsdFdyaXRlciA9IHRlc3RSZXN1bHRXcml0ZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgd2luZG93IHdpdGggdGhlIHNhbWUgV2luZG93RmFjdG9yeSB0aGF0IFNwZWN0cm9uTWFpbiBpcyB1c2luZy5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgY3JlYXRlV2luZG93KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zcGVjdHJvbk1haW4uY3JlYXRlV2luZG93KCk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBTcGVjdHJvbk1haW5PcHRpb25zIGltcGxlbWVudHMgSVNwZWN0cm9uTWFpbk9wdGlvbnMge1xuXG4gICAgcHVibGljIHdpbmRvd0ZhY3Rvcnk6IFdpbmRvd0ZhY3RvcnkgPSBkZWZhdWx0V2luZG93RmFjdG9yeTtcblxuICAgIC8qKlxuICAgICAqIFRydWUgdG8gYXV0b21hdGljYWxseSBzdGFydCBkZXYgdG9vbHMgb24gZWFjaCB3aW5kb3cgd2hlbiB1c2luZyB0aGVcbiAgICAgKiBkZWZhdWx0IHdpbmRvdyBmYWN0b3J5LlxuICAgICAqL1xuICAgIHB1YmxpYyBlbmFibGVEZXZUb29scyA9IGZhbHNlO1xuXG4gICAgcHVibGljIGJ1aWxkKCk6IFJlYWRvbmx5PFNwZWN0cm9uTWFpbk9wdGlvbnM+IHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5mcmVlemUodGhpcyk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNwZWN0cm9uTWFpbk9wdGlvbnMge1xuXG4gICAgd2luZG93RmFjdG9yeTogV2luZG93RmFjdG9yeTtcblxuICAgIC8qKlxuICAgICAqIFRydWUgdG8gYXV0b21hdGljYWxseSBzdGFydCBkZXYgdG9vbHMgb24gZWFjaCB3aW5kb3cgd2hlbiB1c2luZyB0aGVcbiAgICAgKiBkZWZhdWx0IHdpbmRvdyBmYWN0b3J5LlxuICAgICAqL1xuICAgIGVuYWJsZURldlRvb2xzPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IHR5cGUgU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogU3BlY3Ryb25NYWluU3RhdGUpID0+IFByb21pc2U8dm9pZD47XG5cbmV4cG9ydCB0eXBlIFdpbmRvd0ZhY3RvcnkgPSAoKSA9PiBQcm9taXNlPEJyb3dzZXJXaW5kb3c+O1xuIl19