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
const SpectronRenderer_1 = require("../../js/test/SpectronRenderer");
const WebContentsNotifiers_1 = require("../../js/electron/web_contents_notifier/WebContentsNotifiers");
SpectronRenderer_1.SpectronRenderer.run(() => __awaiter(this, void 0, void 0, function* () {
    WebContentsNotifiers_1.WebContentsNotifiers.dispatchEvent('hello', 'world');
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxRUFBZ0U7QUFDaEUsdUdBQWtHO0FBRWxHLG1DQUFnQixDQUFDLEdBQUcsQ0FBQyxHQUFTLEVBQUU7SUFDNUIsMkNBQW9CLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN6RCxDQUFDLENBQUEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTcGVjdHJvblJlbmRlcmVyfSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uUmVuZGVyZXInO1xuaW1wb3J0IHtXZWJDb250ZW50c05vdGlmaWVyc30gZnJvbSAnLi4vLi4vanMvZWxlY3Ryb24vd2ViX2NvbnRlbnRzX25vdGlmaWVyL1dlYkNvbnRlbnRzTm90aWZpZXJzJztcblxuU3BlY3Ryb25SZW5kZXJlci5ydW4oYXN5bmMgKCkgPT4ge1xuICAgIFdlYkNvbnRlbnRzTm90aWZpZXJzLmRpc3BhdGNoRXZlbnQoJ2hlbGxvJywgJ3dvcmxkJyk7XG59KTtcbiJdfQ==