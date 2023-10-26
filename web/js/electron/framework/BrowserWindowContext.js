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
const BrowserWindowRegistry_1 = require("./BrowserWindowRegistry");
const electron_1 = require("electron");
const Messenger_1 = require("../messenger/Messenger");
class BrowserWindowContext {
    static postMessage(tag, message) {
        return __awaiter(this, void 0, void 0, function* () {
            const browserWindowIDs = BrowserWindowRegistry_1.BrowserWindowRegistry.tagged(tag);
            for (const id of browserWindowIDs) {
                const browserWindow = electron_1.BrowserWindow.fromId(id);
                yield Messenger_1.Messenger.postMessageWithElectronBrowserWindow(message, browserWindow);
            }
        });
    }
}
exports.BrowserWindowContext = BrowserWindowContext;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJvd3NlcldpbmRvd0NvbnRleHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJCcm93c2VyV2luZG93Q29udGV4dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsbUVBQWdGO0FBQ2hGLHVDQUF1QztBQUN2QyxzREFBaUQ7QUFNakQsTUFBYSxvQkFBb0I7SUFFdEIsTUFBTSxDQUFPLFdBQVcsQ0FBSSxHQUFxQixFQUFFLE9BQVU7O1lBQ2hFLE1BQU0sZ0JBQWdCLEdBQUcsNkNBQXFCLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRTNELEtBQUssTUFBTSxFQUFFLElBQUksZ0JBQWdCLEVBQUU7Z0JBQy9CLE1BQU0sYUFBYSxHQUFHLHdCQUFhLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUMvQyxNQUFNLHFCQUFTLENBQUMsb0NBQW9DLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFDO2FBQ2hGO1FBRUwsQ0FBQztLQUFBO0NBRUo7QUFaRCxvREFZQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QnJvd3NlcldpbmRvd1JlZ2lzdHJ5LCBCcm93c2VyV2luZG93VGFnfSBmcm9tICcuL0Jyb3dzZXJXaW5kb3dSZWdpc3RyeSc7XG5pbXBvcnQge0Jyb3dzZXJXaW5kb3d9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCB7TWVzc2VuZ2VyfSBmcm9tICcuLi9tZXNzZW5nZXIvTWVzc2VuZ2VyJztcblxuLyoqXG4gKiBQYXNzIG1lc3NhZ2VzIChjb25zaXN0ZW5seSkgdG8gYSBnaXZlbiBCcm93c2VyV2luZG93IChvciBCcm93c2VyV2luZG93cyksIGJ5XG4gKiB1c2luZyB0YWdzIGFuZCB0aGUgQnJvd3NlcldpbmRvd1JlZ2lzdGVyIGFuZCBwb3N0TWVzc2FnZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEJyb3dzZXJXaW5kb3dDb250ZXh0IHtcblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgcG9zdE1lc3NhZ2U8VD4odGFnOiBCcm93c2VyV2luZG93VGFnLCBtZXNzYWdlOiBUKSB7XG4gICAgICAgIGNvbnN0IGJyb3dzZXJXaW5kb3dJRHMgPSBCcm93c2VyV2luZG93UmVnaXN0cnkudGFnZ2VkKHRhZyk7XG5cbiAgICAgICAgZm9yIChjb25zdCBpZCBvZiBicm93c2VyV2luZG93SURzKSB7XG4gICAgICAgICAgICBjb25zdCBicm93c2VyV2luZG93ID0gQnJvd3NlcldpbmRvdy5mcm9tSWQoaWQpO1xuICAgICAgICAgICAgYXdhaXQgTWVzc2VuZ2VyLnBvc3RNZXNzYWdlV2l0aEVsZWN0cm9uQnJvd3NlcldpbmRvdyhtZXNzYWdlLCBicm93c2VyV2luZG93KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG4iXX0=