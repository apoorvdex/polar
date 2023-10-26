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
const log = Logger_1.Logger.create();
class ContentCaptureClient {
    constructor(mainWindow) {
        this.mainWindow = mainWindow;
    }
    waitForController() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                electron_1.ipcMain.once("content-capture", (event, message) => {
                    if (message.type === "started") {
                        resolve();
                    }
                });
            });
        });
    }
    requestNewCapture() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = new Promise((resolve, reject) => {
                electron_1.ipcMain.once("content-capture", (event, message) => {
                    if (message.type === "response") {
                        if (message.result) {
                            resolve(message.result);
                        }
                        else if (message.err) {
                            reject(new Error(message.err));
                        }
                        else {
                            log.error("Invalid message: ", message);
                            reject("Unknown message type");
                        }
                    }
                });
            });
            this.mainWindow.webContents.send("content-capture", { type: "request" });
            return result;
        });
    }
}
exports.ContentCaptureClient = ContentCaptureClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGVudENhcHR1cmVDbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDb250ZW50Q2FwdHVyZUNsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUNBQWlDO0FBQ2pDLGdEQUEyQztBQUczQyxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFLNUIsTUFBYSxvQkFBb0I7SUFJN0IsWUFBWSxVQUF5QjtRQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUNqQyxDQUFDO0lBT0ssaUJBQWlCOztZQUVuQixPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUV6QixrQkFBTyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEtBQVUsRUFBRSxPQUFZLEVBQUUsRUFBRTtvQkFFekQsSUFBRyxPQUFPLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTt3QkFDM0IsT0FBTyxFQUFFLENBQUM7cUJBQ2I7Z0JBRUwsQ0FBQyxDQUFDLENBQUM7WUFFUCxDQUFDLENBQUMsQ0FBQTtRQUVOLENBQUM7S0FBQTtJQUVLLGlCQUFpQjs7WUFFbkIsSUFBSSxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBRXpDLGtCQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsS0FBVSxFQUFFLE9BQVksRUFBRSxFQUFFO29CQUV6RCxJQUFHLE9BQU8sQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFFO3dCQUc1QixJQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUU7NEJBQ2YsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzt5QkFDM0I7NkJBQU0sSUFBRyxPQUFPLENBQUMsR0FBRyxFQUFFOzRCQUNuQixNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7eUJBQ2xDOzZCQUFNOzRCQUNILEdBQUcsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEVBQUUsT0FBTyxDQUFDLENBQUE7NEJBQ3ZDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO3lCQUNsQztxQkFFSjtnQkFFTCxDQUFDLENBQUMsQ0FBQztZQUVQLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBQyxDQUFDLENBQUM7WUFFdkUsT0FBTyxNQUFNLENBQUM7UUFFbEIsQ0FBQztLQUFBO0NBRUo7QUEzREQsb0RBMkRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpcGNNYWlufSBmcm9tIFwiZWxlY3Ryb25cIjtcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7QnJvd3NlcldpbmRvd30gZnJvbSBcImVsZWN0cm9uXCI7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuLyoqXG4gKiBDbGllbnQgZm9yIGNvbnRyb2xsaW5nIHRoZSB7QGxpbmsgQ29udGVudENhcHR1cmVDb250cm9sbGVyfS5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbnRlbnRDYXB0dXJlQ2xpZW50IHtcblxuICAgIG1haW5XaW5kb3c6IEVsZWN0cm9uLkJyb3dzZXJXaW5kb3c7XG5cbiAgICBjb25zdHJ1Y3RvcihtYWluV2luZG93OiBCcm93c2VyV2luZG93KSB7XG4gICAgICAgIHRoaXMubWFpbldpbmRvdyA9IG1haW5XaW5kb3c7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2FpdCB1bnRpbCB0aGUgY29udHJvbGxlciBoYXMgc3RhcnRlZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAgICovXG4gICAgYXN5bmMgd2FpdEZvckNvbnRyb2xsZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuXG4gICAgICAgICAgICBpcGNNYWluLm9uY2UoXCJjb250ZW50LWNhcHR1cmVcIiwgKGV2ZW50OiBhbnksIG1lc3NhZ2U6IGFueSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYobWVzc2FnZS50eXBlID09PSBcInN0YXJ0ZWRcIikge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgYXN5bmMgcmVxdWVzdE5ld0NhcHR1cmUoKTogUHJvbWlzZTxhbnk+IHtcblxuICAgICAgICBsZXQgcmVzdWx0ID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgICAgICAgICBpcGNNYWluLm9uY2UoXCJjb250ZW50LWNhcHR1cmVcIiwgKGV2ZW50OiBhbnksIG1lc3NhZ2U6IGFueSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYobWVzc2FnZS50eXBlID09PSBcInJlc3BvbnNlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgY2FuIG5vdyB0ZWxsIHNwZWN0cm9uIHdoYXQncyB1cC4uLlxuXG4gICAgICAgICAgICAgICAgICAgIGlmKG1lc3NhZ2UucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG1lc3NhZ2UucmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKG1lc3NhZ2UuZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKG1lc3NhZ2UuZXJyKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2cuZXJyb3IoXCJJbnZhbGlkIG1lc3NhZ2U6IFwiLCBtZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiVW5rbm93biBtZXNzYWdlIHR5cGVcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5tYWluV2luZG93LndlYkNvbnRlbnRzLnNlbmQoXCJjb250ZW50LWNhcHR1cmVcIiwge3R5cGU6IFwicmVxdWVzdFwifSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cblxufVxuXG5cblxuIl19