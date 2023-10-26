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
const Messenger_1 = require("../../js/electron/messenger/Messenger");
const FilePaths_1 = require("../../js/util/FilePaths");
SpectronMain2_1.SpectronMain2.create().run((state) => __awaiter(this, void 0, void 0, function* () {
    state.window.loadURL(`file://${__dirname}/content.html`);
    const src = FilePaths_1.FilePaths.join(__dirname, "content.js");
    const message = {
        type: 'require',
        src
    };
    Messenger_1.Messenger.postMessage({ window: state.window, message });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBQzFELHFFQUFnRTtBQUNoRSx1REFBa0Q7QUFFbEQsNkJBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBTSxLQUFLLEVBQUMsRUFBRTtJQUVyQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLFNBQVMsZUFBZSxDQUFDLENBQUM7SUFFekQsTUFBTSxHQUFHLEdBQUcscUJBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBRXBELE1BQU0sT0FBTyxHQUFHO1FBQ1osSUFBSSxFQUFFLFNBQVM7UUFDZixHQUFHO0tBQ04sQ0FBQztJQUVGLHFCQUFTLENBQUMsV0FBVyxDQUFDLEVBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQztBQUUzRCxDQUFDLENBQUEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTcGVjdHJvbk1haW4yfSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uTWFpbjInO1xuaW1wb3J0IHtNZXNzZW5nZXJ9IGZyb20gJy4uLy4uL2pzL2VsZWN0cm9uL21lc3Nlbmdlci9NZXNzZW5nZXInO1xuaW1wb3J0IHtGaWxlUGF0aHN9IGZyb20gJy4uLy4uL2pzL3V0aWwvRmlsZVBhdGhzJztcblxuU3BlY3Ryb25NYWluMi5jcmVhdGUoKS5ydW4oYXN5bmMgc3RhdGUgPT4ge1xuXG4gICAgc3RhdGUud2luZG93LmxvYWRVUkwoYGZpbGU6Ly8ke19fZGlybmFtZX0vY29udGVudC5odG1sYCk7XG5cbiAgICBjb25zdCBzcmMgPSBGaWxlUGF0aHMuam9pbihfX2Rpcm5hbWUsIFwiY29udGVudC5qc1wiKTtcblxuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAgIHR5cGU6ICdyZXF1aXJlJyxcbiAgICAgICAgc3JjXG4gICAgfTtcblxuICAgIE1lc3Nlbmdlci5wb3N0TWVzc2FnZSh7d2luZG93OiBzdGF0ZS53aW5kb3csIG1lc3NhZ2V9KTtcblxufSk7XG5cbiJdfQ==