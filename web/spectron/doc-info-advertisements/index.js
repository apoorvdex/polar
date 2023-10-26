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
const SpectronMain2_1 = require("../../js/test/SpectronMain2");
const electron_1 = require("electron");
const DocInfoBroadcasterService_1 = require("../../js/datastore/advertiser/DocInfoBroadcasterService");
const BROWSER_OPTIONS = {
    backgroundColor: '#FFF',
    webPreferences: {
        webSecurity: false,
    }
};
SpectronMain2_1.SpectronMain2.create().run((state) => __awaiter(this, void 0, void 0, function* () {
    const mainWindow = new electron_1.BrowserWindow(BROWSER_OPTIONS);
    mainWindow.loadURL(`file://${__dirname}/receiving-app.html`);
    yield new DocInfoBroadcasterService_1.DocInfoBroadcasterService().start();
    state.window.loadURL(`file://${__dirname}/sending-app.html`);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBQzFELHVDQUF1QztBQUN2Qyx1R0FBa0c7QUFFbEcsTUFBTSxlQUFlLEdBQUc7SUFDcEIsZUFBZSxFQUFFLE1BQU07SUFLdkIsY0FBYyxFQUFFO1FBQ1osV0FBVyxFQUFFLEtBQUs7S0FDckI7Q0FFSixDQUFDO0FBRUYsNkJBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBTSxLQUFLLEVBQUMsRUFBRTtJQUVyQyxNQUFNLFVBQVUsR0FBRyxJQUFJLHdCQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7SUFFdEQsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLFNBQVMscUJBQXFCLENBQUMsQ0FBQztJQUU3RCxNQUFNLElBQUkscURBQXlCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUU5QyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLFNBQVMsbUJBQW1CLENBQUMsQ0FBQztBQUdqRSxDQUFDLENBQUEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTcGVjdHJvbk1haW4yfSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uTWFpbjInO1xuaW1wb3J0IHtCcm93c2VyV2luZG93fSBmcm9tIFwiZWxlY3Ryb25cIjtcbmltcG9ydCB7RG9jSW5mb0Jyb2FkY2FzdGVyU2VydmljZX0gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL2FkdmVydGlzZXIvRG9jSW5mb0Jyb2FkY2FzdGVyU2VydmljZSc7XG5cbmNvbnN0IEJST1dTRVJfT1BUSU9OUyA9IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZGJyxcblxuICAgIC8vIE5PVEU6IHRoZSBkZWZhdWx0IHdpZHRoIGFuZCBoZWlnaHQgc2hvdWxkbid0IGJlIGNoYW5nZWQgaGVyZSBhcyBpdCBjYW5cbiAgICAvLyBicmVhayB1bml0IHRlc3RzLlxuXG4gICAgd2ViUHJlZmVyZW5jZXM6IHtcbiAgICAgICAgd2ViU2VjdXJpdHk6IGZhbHNlLFxuICAgIH1cblxufTtcblxuU3BlY3Ryb25NYWluMi5jcmVhdGUoKS5ydW4oYXN5bmMgc3RhdGUgPT4ge1xuXG4gICAgY29uc3QgbWFpbldpbmRvdyA9IG5ldyBCcm93c2VyV2luZG93KEJST1dTRVJfT1BUSU9OUyk7XG5cbiAgICBtYWluV2luZG93LmxvYWRVUkwoYGZpbGU6Ly8ke19fZGlybmFtZX0vcmVjZWl2aW5nLWFwcC5odG1sYCk7XG5cbiAgICBhd2FpdCBuZXcgRG9jSW5mb0Jyb2FkY2FzdGVyU2VydmljZSgpLnN0YXJ0KCk7XG5cbiAgICBzdGF0ZS53aW5kb3cubG9hZFVSTChgZmlsZTovLyR7X19kaXJuYW1lfS9zZW5kaW5nLWFwcC5odG1sYCk7XG5cblxufSk7XG4iXX0=