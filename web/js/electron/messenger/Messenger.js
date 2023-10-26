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
const PostMessageRequest_1 = require("./PostMessageRequest");
const Functions_1 = require("../../util/Functions");
const Preconditions_1 = require("../../Preconditions");
class Messenger {
    static postMessage(postMessageRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            postMessageRequest = new PostMessageRequest_1.PostMessageRequest(postMessageRequest);
            if (typeof window !== 'undefined') {
                yield this.postMessageDirectly(postMessageRequest.message);
                return;
            }
            let targetBrowserWindow = postMessageRequest.window;
            if (!Preconditions_1.isPresent(targetBrowserWindow)) {
                targetBrowserWindow = electron_1.BrowserWindow.getFocusedWindow();
            }
            if (!Preconditions_1.isPresent(targetBrowserWindow)) {
                throw new Error("No target browser window found");
            }
            yield this.postMessageWithElectronBrowserWindow(postMessageRequest.message, targetBrowserWindow);
        });
    }
    static postMessageDirectly(message) {
        return __awaiter(this, void 0, void 0, function* () {
            message = JSON.parse(JSON.stringify(message));
            window.postMessage(message, "*");
        });
    }
    static postMessageWithElectronBrowserWindow(message, browserWindow) {
        return __awaiter(this, void 0, void 0, function* () {
            function postMessageFunction(msg) {
                window.postMessage(msg, "*");
            }
            const script = Functions_1.Functions.functionToScript(postMessageFunction, message);
            yield browserWindow.webContents.executeJavaScript(script);
        });
    }
}
exports.Messenger = Messenger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVzc2VuZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTWVzc2VuZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1Q0FBdUM7QUFDdkMsNkRBQXdEO0FBQ3hELG9EQUErQztBQUMvQyx1REFBOEM7QUFjOUMsTUFBYSxTQUFTO0lBRVgsTUFBTSxDQUFPLFdBQVcsQ0FBQyxrQkFBc0M7O1lBRWxFLGtCQUFrQixHQUFHLElBQUksdUNBQWtCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUVoRSxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtnQkFDL0IsTUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzNELE9BQU87YUFDVjtZQUVELElBQUksbUJBQW1CLEdBQUcsa0JBQWtCLENBQUMsTUFBTSxDQUFDO1lBRXBELElBQUksQ0FBRSx5QkFBUyxDQUFDLG1CQUFtQixDQUFDLEVBQUU7Z0JBQ2xDLG1CQUFtQixHQUFHLHdCQUFhLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzthQUMxRDtZQUVELElBQUksQ0FBRSx5QkFBUyxDQUFDLG1CQUFtQixDQUFDLEVBQUU7Z0JBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQzthQUNyRDtZQUVELE1BQU0sSUFBSSxDQUFDLG9DQUFvQyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxtQkFBb0IsQ0FBQyxDQUFDO1FBRXRHLENBQUM7S0FBQTtJQUtNLE1BQU0sQ0FBTyxtQkFBbUIsQ0FBQyxPQUFZOztZQUVoRCxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFFOUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDckMsQ0FBQztLQUFBO0lBRU0sTUFBTSxDQUFPLG9DQUFvQyxDQUFDLE9BQVksRUFBRSxhQUE0Qjs7WUFFL0YsU0FBUyxtQkFBbUIsQ0FBQyxHQUFRO2dCQUNqQyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNqQyxDQUFDO1lBRUQsTUFBTSxNQUFNLEdBQUcscUJBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUV4RSxNQUFNLGFBQWEsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFOUQsQ0FBQztLQUFBO0NBRUo7QUEvQ0QsOEJBK0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCcm93c2VyV2luZG93fSBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQge1Bvc3RNZXNzYWdlUmVxdWVzdH0gZnJvbSAnLi9Qb3N0TWVzc2FnZVJlcXVlc3QnO1xuaW1wb3J0IHtGdW5jdGlvbnN9IGZyb20gJy4uLy4uL3V0aWwvRnVuY3Rpb25zJztcbmltcG9ydCB7aXNQcmVzZW50fSBmcm9tICcuLi8uLi9QcmVjb25kaXRpb25zJztcbmltcG9ydCB7QnJvd3Nlcn0gZnJvbSAnLi4vLi4vY2FwdHVyZS9Ccm93c2VyJztcblxuZGVjbGFyZSB2YXIgd2luZG93OiBXaW5kb3c7XG5cbi8qKlxuICogTWVzc2VuZ2VyIGlzIGEgY2xhc3MgZm9yIHVzaW5nIHBvc3RNZXNzYWdlIHdpdGhpbiB0aGUgcmVuZGVyZXIgdG8gY29tbXVuaWNhdGVcbiAqIHdpdGggYXBwcyB1c2luZyB3ZWIgc3RhbmRhcmRzLCBhbmQgbm90IEVsZWN0cm9uIElQQy4gVGhpcyBtYWtlcyBvdXIgY29kZVxuICogbW9yZSB0ZXN0YWJsZSB2aWEgc2ltcGxlIG1vY2hhIC8gbm9kZSBhbmQgZG9lc24ndCByZXF1aXJlIFNwZWN0cm9uIHdoaWNoXG4gKiBpcyBtb3JlIGhlYXZ5IGFuZCBzbG93ZXIgZm9yIHRlc3RpbmcuXG4gKlxuICogSXQgYWxzbyBtYWtlcyBpdCBtb3JlIHBvcnRhYmxlIHRvIHRoZSB3ZWIgc2luY2UgdGhpcyBjb2RlIGp1c3QgdXNlc1xuICogcG9zdE1lc3NhZ2Ugd2hpY2ggaXMgc3VwcG9ydGVkIGV2ZXJ5d2hlcmUuXG4gKi9cbmV4cG9ydCBjbGFzcyBNZXNzZW5nZXIge1xuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBwb3N0TWVzc2FnZShwb3N0TWVzc2FnZVJlcXVlc3Q6IFBvc3RNZXNzYWdlUmVxdWVzdCkge1xuXG4gICAgICAgIHBvc3RNZXNzYWdlUmVxdWVzdCA9IG5ldyBQb3N0TWVzc2FnZVJlcXVlc3QocG9zdE1lc3NhZ2VSZXF1ZXN0KTtcblxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucG9zdE1lc3NhZ2VEaXJlY3RseShwb3N0TWVzc2FnZVJlcXVlc3QubWVzc2FnZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdGFyZ2V0QnJvd3NlcldpbmRvdyA9IHBvc3RNZXNzYWdlUmVxdWVzdC53aW5kb3c7XG5cbiAgICAgICAgaWYgKCEgaXNQcmVzZW50KHRhcmdldEJyb3dzZXJXaW5kb3cpKSB7XG4gICAgICAgICAgICB0YXJnZXRCcm93c2VyV2luZG93ID0gQnJvd3NlcldpbmRvdy5nZXRGb2N1c2VkV2luZG93KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoISBpc1ByZXNlbnQodGFyZ2V0QnJvd3NlcldpbmRvdykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHRhcmdldCBicm93c2VyIHdpbmRvdyBmb3VuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IHRoaXMucG9zdE1lc3NhZ2VXaXRoRWxlY3Ryb25Ccm93c2VyV2luZG93KHBvc3RNZXNzYWdlUmVxdWVzdC5tZXNzYWdlLCB0YXJnZXRCcm93c2VyV2luZG93ISk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXZSdyZSBpbiB0aGUgYnJvd2VycyBzbyB3ZSBjYW4ganVzdCBjYWxsIHRoZSBwb3N0TWVzc2FnZSBmdW5jdGlvbiBkaXJlY3RseS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHBvc3RNZXNzYWdlRGlyZWN0bHkobWVzc2FnZTogYW55KSB7XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gZG8gdGhpcyBKU09OIGVuY29kZS9kZWNvZGUgdHJpY2sgdG8gZm9yY2VcbiAgICAgICAgbWVzc2FnZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpO1xuXG4gICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZShtZXNzYWdlLCBcIipcIik7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBwb3N0TWVzc2FnZVdpdGhFbGVjdHJvbkJyb3dzZXJXaW5kb3cobWVzc2FnZTogYW55LCBicm93c2VyV2luZG93OiBCcm93c2VyV2luZG93KSB7XG5cbiAgICAgICAgZnVuY3Rpb24gcG9zdE1lc3NhZ2VGdW5jdGlvbihtc2c6IGFueSkge1xuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKG1zZywgXCIqXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gRnVuY3Rpb25zLmZ1bmN0aW9uVG9TY3JpcHQocG9zdE1lc3NhZ2VGdW5jdGlvbiwgbWVzc2FnZSk7XG5cbiAgICAgICAgYXdhaXQgYnJvd3NlcldpbmRvdy53ZWJDb250ZW50cy5leGVjdXRlSmF2YVNjcmlwdChzY3JpcHQpO1xuXG4gICAgfVxuXG59XG5cbiJdfQ==