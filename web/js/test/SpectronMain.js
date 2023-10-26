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
const SpectronBrowserWindowOptions_1 = require("./SpectronBrowserWindowOptions");
class SpectronMain {
    static setup(options) {
        return new Promise(resolve => {
            console.log("Electron app started. Waiting for it to be ready.");
            electron_1.app.on('ready', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    console.log("Ready!  Creating main window!!");
                    let windowFactory = () => __awaiter(this, void 0, void 0, function* () {
                        const result = new electron_1.BrowserWindow(SpectronBrowserWindowOptions_1.SpectronBrowserWindowOptions.create());
                        result.loadURL('about:blank');
                        return result;
                    });
                    if (options && options.windowFactory) {
                        windowFactory = options.windowFactory;
                    }
                    const mainWindow = yield windowFactory();
                    console.log("Done.. resolving");
                    resolve(mainWindow);
                });
            });
        });
    }
    static start(callback, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const window = yield SpectronMain.setup(options);
            const testResultWriter = new MainTestResultWriter_1.MainTestResultWriter(window);
            return callback(new SpectronMainState(window, testResultWriter));
        });
    }
    static run(callback, options) {
        SpectronMain.start(callback, options).catch(err => console.log(err));
    }
}
exports.SpectronMain = SpectronMain;
class SpectronMainState {
    constructor(window, testResultWriter) {
        this.window = window;
        this.testResultWriter = testResultWriter;
    }
}
exports.SpectronMainState = SpectronMainState;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BlY3Ryb25NYWluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU3BlY3Ryb25NYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNEM7QUFDNUMsZ0ZBQTJFO0FBQzNFLGlGQUE0RTtBQUs1RSxNQUFhLFlBQVk7SUFFZCxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQTZCO1FBRTdDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFFekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO1lBRWpFLGNBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFOztvQkFFWixPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7b0JBRTlDLElBQUksYUFBYSxHQUFrQixHQUFTLEVBQUU7d0JBQzFDLE1BQU0sTUFBTSxHQUFHLElBQUksd0JBQWEsQ0FBQywyREFBNEIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO3dCQUN4RSxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO3dCQUM5QixPQUFPLE1BQU0sQ0FBQztvQkFDbEIsQ0FBQyxDQUFBLENBQUM7b0JBRUYsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLGFBQWEsRUFBRTt3QkFDbEMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7cUJBQ3pDO29CQUVELE1BQU0sVUFBVSxHQUFHLE1BQU0sYUFBYSxFQUFFLENBQUM7b0JBRXpDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztvQkFDaEMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUV4QixDQUFDO2FBQUEsQ0FBQyxDQUFDO1FBRVAsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRU0sTUFBTSxDQUFPLEtBQUssQ0FBQyxRQUF1QixFQUFFLE9BQTZCOztZQUU1RSxNQUFNLE1BQU0sR0FBRyxNQUFNLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDakQsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLDJDQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRTFELE9BQU8sUUFBUSxDQUFDLElBQUksaUJBQWlCLENBQUMsTUFBTSxFQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQztRQUVyRSxDQUFDO0tBQUE7SUFNTSxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQXVCLEVBQUUsT0FBNkI7UUFDcEUsWUFBWSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Q0FHSjtBQW5ERCxvQ0FtREM7QUFFRCxNQUFhLGlCQUFpQjtJQU0xQixZQUFZLE1BQThCLEVBQUUsZ0JBQXNDO1FBQzlFLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztJQUM3QyxDQUFDO0NBRUo7QUFYRCw4Q0FXQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXBwLCBCcm93c2VyV2luZG93fSBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQge01haW5UZXN0UmVzdWx0V3JpdGVyfSBmcm9tICcuL3Jlc3VsdHMvd3JpdGVyL01haW5UZXN0UmVzdWx0V3JpdGVyJztcbmltcG9ydCB7U3BlY3Ryb25Ccm93c2VyV2luZG93T3B0aW9uc30gZnJvbSAnLi9TcGVjdHJvbkJyb3dzZXJXaW5kb3dPcHRpb25zJztcblxuLyoqXG4gKiBDb2RlIGZvciByZWxpYWJseSB3b3JraW5nIHdpdGggdGhlIG1haW4gcHJvY2VzcyBpbiBTcGVjdHJvbi5cbiAqL1xuZXhwb3J0IGNsYXNzIFNwZWN0cm9uTWFpbiB7XG5cbiAgICBwdWJsaWMgc3RhdGljIHNldHVwKG9wdGlvbnM/OiBTcGVjdHJvbk1haW5PcHRpb25zKTogUHJvbWlzZTxFbGVjdHJvbi5Ccm93c2VyV2luZG93PiB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVsZWN0cm9uIGFwcCBzdGFydGVkLiBXYWl0aW5nIGZvciBpdCB0byBiZSByZWFkeS5cIik7XG5cbiAgICAgICAgICAgIGFwcC5vbigncmVhZHknLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVhZHkhICBDcmVhdGluZyBtYWluIHdpbmRvdyEhXCIpO1xuXG4gICAgICAgICAgICAgICAgbGV0IHdpbmRvd0ZhY3Rvcnk6IFdpbmRvd0ZhY3RvcnkgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBCcm93c2VyV2luZG93KFNwZWN0cm9uQnJvd3NlcldpbmRvd09wdGlvbnMuY3JlYXRlKCkpO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQubG9hZFVSTCgnYWJvdXQ6YmxhbmsnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy53aW5kb3dGYWN0b3J5KSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd0ZhY3RvcnkgPSBvcHRpb25zLndpbmRvd0ZhY3Rvcnk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgbWFpbldpbmRvdyA9IGF3YWl0IHdpbmRvd0ZhY3RvcnkoKTtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRG9uZS4uIHJlc29sdmluZ1wiKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKG1haW5XaW5kb3cpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgc3RhcnQoY2FsbGJhY2s6IFN0YXRlQ2FsbGJhY2ssIG9wdGlvbnM/OiBTcGVjdHJvbk1haW5PcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICAgICAgY29uc3Qgd2luZG93ID0gYXdhaXQgU3BlY3Ryb25NYWluLnNldHVwKG9wdGlvbnMpO1xuICAgICAgICBjb25zdCB0ZXN0UmVzdWx0V3JpdGVyID0gbmV3IE1haW5UZXN0UmVzdWx0V3JpdGVyKHdpbmRvdyk7XG5cbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG5ldyBTcGVjdHJvbk1haW5TdGF0ZSh3aW5kb3csIHRlc3RSZXN1bHRXcml0ZXIpKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExpa2Ugc3RhcnQgYnV0IG5vdCBhc3luYyBhbmQgYXNzdW1lIHRoaXMgaXMgdGhlIGVudHJ5IHBvaW50IG9mIHlvdXIgdGVzdFxuICAgICAqIGFuZCBqdXN0IHByaW50IGVycm9yIG1lc3NhZ2VzIHRvIHRoZSBjb25zb2xlLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcnVuKGNhbGxiYWNrOiBTdGF0ZUNhbGxiYWNrLCBvcHRpb25zPzogU3BlY3Ryb25NYWluT3B0aW9ucykge1xuICAgICAgICBTcGVjdHJvbk1haW4uc3RhcnQoY2FsbGJhY2ssIG9wdGlvbnMpLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG5cblxufVxuXG5leHBvcnQgY2xhc3MgU3BlY3Ryb25NYWluU3RhdGUge1xuXG4gICAgcHVibGljIHJlYWRvbmx5IHdpbmRvdzogQnJvd3NlcldpbmRvdztcblxuICAgIHB1YmxpYyByZWFkb25seSB0ZXN0UmVzdWx0V3JpdGVyOiBNYWluVGVzdFJlc3VsdFdyaXRlcjtcblxuICAgIGNvbnN0cnVjdG9yKHdpbmRvdzogRWxlY3Ryb24uQnJvd3NlcldpbmRvdywgdGVzdFJlc3VsdFdyaXRlcjogTWFpblRlc3RSZXN1bHRXcml0ZXIpIHtcbiAgICAgICAgdGhpcy53aW5kb3cgPSB3aW5kb3c7XG4gICAgICAgIHRoaXMudGVzdFJlc3VsdFdyaXRlciA9IHRlc3RSZXN1bHRXcml0ZXI7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3BlY3Ryb25NYWluT3B0aW9ucyB7XG5cbiAgICByZWFkb25seSB3aW5kb3dGYWN0b3J5PzogV2luZG93RmFjdG9yeTtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlQ2FsbGJhY2sge1xuICAgIChzdGF0ZTogU3BlY3Ryb25NYWluU3RhdGUpOiBQcm9taXNlPHZvaWQ+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdpbmRvd0ZhY3Rvcnkge1xuICAgICgpOiBQcm9taXNlPEJyb3dzZXJXaW5kb3c+O1xufVxuXG4iXX0=