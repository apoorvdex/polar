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
class WebContentsPromises {
    static once(webContents) {
        return new Once(webContents);
    }
    static executeJavaScript(webContents, code, userGesture) {
        return webContents.executeJavaScript(code, userGesture);
    }
}
exports.WebContentsPromises = WebContentsPromises;
class Once {
    constructor(webContents) {
        this.webContents = webContents;
    }
    load() {
        return new Promise((resolve, reject) => {
            this.didFinishLoad()
                .then(() => resolve())
                .catch(err => reject(err));
            this.didFailLoad()
                .then((failLoad) => reject(failLoad))
                .catch(err => reject(err));
        });
    }
    didFinishLoad() {
        return new Promise(resolve => {
            this.webContents.once('did-finish-load', () => {
                resolve();
            });
        });
    }
    didFailLoad() {
        return new Promise(resolve => {
            this.webContents.once('did-fail-load', (event, errorCode, errorDescription, validatedURL, isMainFrame) => {
                const failLoad = new FailLoad(event, errorCode, errorDescription, validatedURL, isMainFrame);
                resolve(failLoad);
            });
        });
    }
    didAttachWebview() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                this.webContents.once('did-attach-webview', (event, webContents) => {
                    resolve(webContents);
                });
            });
        });
    }
}
class FailLoad {
    constructor(event, errorCode, errorDescription, validatedURL, isMainFrame) {
        this.event = event;
        this.errorCode = errorCode;
        this.errorDescription = errorDescription;
        this.validatedURL = validatedURL;
        this.isMainFrame = isMainFrame;
    }
}
exports.FailLoad = FailLoad;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViQ29udGVudHNQcm9taXNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIldlYkNvbnRlbnRzUHJvbWlzZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBLE1BQWEsbUJBQW1CO0lBRXJCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBd0I7UUFFdkMsT0FBTyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU0sTUFBTSxDQUFDLGlCQUFpQixDQUFJLFdBQXdCLEVBQUUsSUFBWSxFQUFFLFdBQXFCO1FBQzVGLE9BQU8sV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztJQUM1RCxDQUFDO0NBRUo7QUFYRCxrREFXQztBQUVELE1BQU0sSUFBSTtJQUlOLFlBQVksV0FBd0I7UUFDaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDbkMsQ0FBQztJQUVNLElBQUk7UUFFUCxPQUFPLElBQUksT0FBTyxDQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBRXpDLElBQUksQ0FBQyxhQUFhLEVBQUU7aUJBQ2YsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUNyQixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUUvQixJQUFJLENBQUMsV0FBVyxFQUFFO2lCQUNiLElBQUksQ0FBQyxDQUFDLFFBQWtCLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDOUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFbkMsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRU0sYUFBYTtRQUVoQixPQUFPLElBQUksT0FBTyxDQUFPLE9BQU8sQ0FBQyxFQUFFO1lBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsRUFBRTtnQkFDMUMsT0FBTyxFQUFFLENBQUM7WUFDZCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVNLFdBQVc7UUFFZCxPQUFPLElBQUksT0FBTyxDQUFXLE9BQU8sQ0FBQyxFQUFFO1lBQ25DLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQVksRUFDWixTQUFpQixFQUNqQixnQkFBd0IsRUFDeEIsWUFBb0IsRUFDcEIsV0FBb0IsRUFBRSxFQUFFO2dCQUs1RCxNQUFNLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxXQUFXLENBQUMsQ0FBQztnQkFDN0YsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXRCLENBQUMsQ0FBQyxDQUFDO1FBRVAsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRVksZ0JBQWdCOztZQUV6QixPQUFPLElBQUksT0FBTyxDQUFjLE9BQU8sQ0FBQyxFQUFFO2dCQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLEtBQVksRUFBRSxXQUF3QixFQUFFLEVBQUU7b0JBQ25GLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDekIsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztRQUVQLENBQUM7S0FBQTtDQUVKO0FBRUQsTUFBYSxRQUFRO0lBUWpCLFlBQVksS0FBcUIsRUFBRSxTQUFpQixFQUFFLGdCQUF3QixFQUFFLFlBQW9CLEVBQUUsV0FBb0I7UUFDdEgsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBQ3pDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ25DLENBQUM7Q0FFSjtBQWhCRCw0QkFnQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1dlYkNvbnRlbnRzLCBFdmVudH0gZnJvbSAnZWxlY3Ryb24nO1xuXG5leHBvcnQgY2xhc3MgV2ViQ29udGVudHNQcm9taXNlcyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIG9uY2Uod2ViQ29udGVudHM6IFdlYkNvbnRlbnRzKTogT25jZSB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBPbmNlKHdlYkNvbnRlbnRzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGV4ZWN1dGVKYXZhU2NyaXB0PFQ+KHdlYkNvbnRlbnRzOiBXZWJDb250ZW50cywgY29kZTogc3RyaW5nLCB1c2VyR2VzdHVyZT86IGJvb2xlYW4pIHtcbiAgICAgICAgcmV0dXJuIHdlYkNvbnRlbnRzLmV4ZWN1dGVKYXZhU2NyaXB0KGNvZGUsIHVzZXJHZXN0dXJlKTtcbiAgICB9XG5cbn1cblxuY2xhc3MgT25jZSB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHdlYkNvbnRlbnRzOiBXZWJDb250ZW50cztcblxuICAgIGNvbnN0cnVjdG9yKHdlYkNvbnRlbnRzOiBXZWJDb250ZW50cykge1xuICAgICAgICB0aGlzLndlYkNvbnRlbnRzID0gd2ViQ29udGVudHM7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWQoKTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgICAgICAgdGhpcy5kaWRGaW5pc2hMb2FkKClcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiByZXNvbHZlKCkpXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiByZWplY3QoZXJyKSk7XG5cbiAgICAgICAgICAgIHRoaXMuZGlkRmFpbExvYWQoKVxuICAgICAgICAgICAgICAgIC50aGVuKChmYWlsTG9hZDogRmFpbExvYWQpID0+IHJlamVjdChmYWlsTG9hZCkpXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiByZWplY3QoZXJyKSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgZGlkRmluaXNoTG9hZCgpOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4ocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLndlYkNvbnRlbnRzLm9uY2UoJ2RpZC1maW5pc2gtbG9hZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgZGlkRmFpbExvYWQoKTogUHJvbWlzZTxGYWlsTG9hZD4ge1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxGYWlsTG9hZD4ocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLndlYkNvbnRlbnRzLm9uY2UoJ2RpZC1mYWlsLWxvYWQnLCAoZXZlbnQ6IEV2ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yQ29kZTogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yRGVzY3JpcHRpb246IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZWRVUkw6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc01haW5GcmFtZTogYm9vbGVhbikgPT4ge1xuXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogd291bGQgYmUgbmljZSBpZiB0aGVyZSB3ZXJlIGEgd2F5IHRvIHRha2UgbWV0aG9kIGFyZ3VtZW50c1xuICAgICAgICAgICAgICAgIC8vIGFuZCBtYWtlIHRoZW0gYW4gb2JqZWN0LlxuXG4gICAgICAgICAgICAgICAgY29uc3QgZmFpbExvYWQgPSBuZXcgRmFpbExvYWQoZXZlbnQsIGVycm9yQ29kZSwgZXJyb3JEZXNjcmlwdGlvbiwgdmFsaWRhdGVkVVJMLCBpc01haW5GcmFtZSk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShmYWlsTG9hZCk7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGRpZEF0dGFjaFdlYnZpZXcoKTogUHJvbWlzZTxXZWJDb250ZW50cz4ge1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxXZWJDb250ZW50cz4ocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLndlYkNvbnRlbnRzLm9uY2UoJ2RpZC1hdHRhY2gtd2VidmlldycsIChldmVudDogRXZlbnQsIHdlYkNvbnRlbnRzOiBXZWJDb250ZW50cykgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUod2ViQ29udGVudHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBGYWlsTG9hZCB7XG5cbiAgICBwdWJsaWMgZXZlbnQ6IEV2ZW50O1xuICAgIHB1YmxpYyBlcnJvckNvZGU6IG51bWJlcjtcbiAgICBwdWJsaWMgZXJyb3JEZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIHB1YmxpYyB2YWxpZGF0ZWRVUkw6IHN0cmluZztcbiAgICBwdWJsaWMgaXNNYWluRnJhbWU6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihldmVudDogRWxlY3Ryb24uRXZlbnQsIGVycm9yQ29kZTogbnVtYmVyLCBlcnJvckRlc2NyaXB0aW9uOiBzdHJpbmcsIHZhbGlkYXRlZFVSTDogc3RyaW5nLCBpc01haW5GcmFtZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmV2ZW50ID0gZXZlbnQ7XG4gICAgICAgIHRoaXMuZXJyb3JDb2RlID0gZXJyb3JDb2RlO1xuICAgICAgICB0aGlzLmVycm9yRGVzY3JpcHRpb24gPSBlcnJvckRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnZhbGlkYXRlZFVSTCA9IHZhbGlkYXRlZFVSTDtcbiAgICAgICAgdGhpcy5pc01haW5GcmFtZSA9IGlzTWFpbkZyYW1lO1xuICAgIH1cblxufVxuIl19