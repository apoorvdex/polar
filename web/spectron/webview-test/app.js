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
const Logger_1 = require("../../js/logger/Logger");
const log = Logger_1.Logger.create();
function getContentHost() {
    return document.querySelector("#content");
}
SpectronRenderer_1.SpectronRenderer.run(() => __awaiter(this, void 0, void 0, function* () {
    const content = getContentHost();
    content.addEventListener('console-message', (consoleMessageEvent) => {
        const prefix = 'From webview: ';
        switch (consoleMessageEvent.level) {
            case -1:
                log.debug(prefix + consoleMessageEvent.message);
                break;
            case 0:
                log.info(prefix + consoleMessageEvent.message);
                break;
            case 1:
                log.warn(prefix + consoleMessageEvent.message);
                break;
            case 2:
                log.error(prefix + consoleMessageEvent.message);
                break;
        }
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxxRUFBZ0U7QUFFaEUsbURBQThDO0FBRTlDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixTQUFTLGNBQWM7SUFDbkIsT0FBTyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBeUIsQ0FBQztBQUN0RSxDQUFDO0FBRUQsbUNBQWdCLENBQUMsR0FBRyxDQUFDLEdBQVMsRUFBRTtJQUU1QixNQUFNLE9BQU8sR0FBRyxjQUFjLEVBQUUsQ0FBQztJQUVqQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxtQkFBaUQsRUFBRSxFQUFFO1FBRTlGLE1BQU0sTUFBTSxHQUFHLGdCQUFnQixDQUFDO1FBRWhDLFFBQVEsbUJBQW1CLENBQUMsS0FBSyxFQUFFO1lBRS9CLEtBQUssQ0FBQyxDQUFDO2dCQUNILEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNoRCxNQUFNO1lBRVYsS0FBSyxDQUFDO2dCQUNGLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMvQyxNQUFNO1lBRVYsS0FBSyxDQUFDO2dCQUNGLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMvQyxNQUFNO1lBRVYsS0FBSyxDQUFDO2dCQUNGLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNoRCxNQUFNO1NBRWI7SUFFTCxDQUFDLENBQUMsQ0FBQztBQUdQLENBQUMsQ0FBQSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3dlYkNvbnRlbnRzLCB3ZWJGcmFtZX0gZnJvbSAnZWxlY3Ryb24nO1xuaW1wb3J0IHtTcGVjdHJvblJlbmRlcmVyfSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uUmVuZGVyZXInO1xuaW1wb3J0IHtQcm9taXNlc30gZnJvbSAnLi4vLi4vanMvdXRpbC9Qcm9taXNlcyc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vLi4vanMvbG9nZ2VyL0xvZ2dlcic7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZnVuY3Rpb24gZ2V0Q29udGVudEhvc3QoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKSEgYXMgRWxlY3Ryb24uV2Vidmlld1RhZztcbn1cblxuU3BlY3Ryb25SZW5kZXJlci5ydW4oYXN5bmMgKCkgPT4ge1xuXG4gICAgY29uc3QgY29udGVudCA9IGdldENvbnRlbnRIb3N0KCk7XG5cbiAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnNvbGUtbWVzc2FnZScsIChjb25zb2xlTWVzc2FnZUV2ZW50OiBFbGVjdHJvbi5Db25zb2xlTWVzc2FnZUV2ZW50KSA9PiB7XG5cbiAgICAgICAgY29uc3QgcHJlZml4ID0gJ0Zyb20gd2VidmlldzogJztcblxuICAgICAgICBzd2l0Y2ggKGNvbnNvbGVNZXNzYWdlRXZlbnQubGV2ZWwpIHtcblxuICAgICAgICAgICAgY2FzZSAtMTpcbiAgICAgICAgICAgICAgICBsb2cuZGVidWcocHJlZml4ICsgY29uc29sZU1lc3NhZ2VFdmVudC5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGxvZy5pbmZvKHByZWZpeCArIGNvbnNvbGVNZXNzYWdlRXZlbnQubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBsb2cud2FybihwcmVmaXggKyBjb25zb2xlTWVzc2FnZUV2ZW50Lm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgbG9nLmVycm9yKHByZWZpeCArIGNvbnNvbGVNZXNzYWdlRXZlbnQubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuXG4gICAgfSk7XG5cblxufSk7XG5cblxuIl19