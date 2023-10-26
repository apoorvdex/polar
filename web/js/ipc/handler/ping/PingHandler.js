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
const IPCHandler_1 = require("../IPCHandler");
const Logger_1 = require("../../../logger/Logger");
const log = Logger_1.Logger.create();
class PingHandler extends IPCHandler_1.IPCHandler {
    createValue(ipcMessage) {
        return ipcMessage.value;
    }
    handleIPC(event, message) {
        return __awaiter(this, void 0, void 0, function* () {
            log.info("Got ping.  Sending response. ");
            return event.response.send('pong');
        });
    }
}
exports.PingHandler = PingHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGluZ0hhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQaW5nSGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsOENBQXlDO0FBR3pDLG1EQUE4QztBQUU5QyxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSxXQUFZLFNBQVEsdUJBQWtCO0lBRXJDLFdBQVcsQ0FBQyxVQUEyQjtRQUM3QyxPQUFlLFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDcEMsQ0FBQztJQUVlLFNBQVMsQ0FBQyxLQUFlLEVBQUUsT0FBZTs7WUFDdEQsR0FBRyxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFBO1lBQ3pDLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMsQ0FBQztLQUFBO0NBRUo7QUFYRCxrQ0FXQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVBDSGFuZGxlcn0gZnJvbSAnLi4vSVBDSGFuZGxlcic7XG5pbXBvcnQge0lQQ01lc3NhZ2V9IGZyb20gJy4uL0lQQ01lc3NhZ2UnO1xuaW1wb3J0IHtJUENFdmVudH0gZnJvbSAnLi4vSVBDRXZlbnQnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uLy4uLy4uL2xvZ2dlci9Mb2dnZXInO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBQaW5nSGFuZGxlciBleHRlbmRzIElQQ0hhbmRsZXI8c3RyaW5nPiB7XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlVmFsdWUoaXBjTWVzc2FnZTogSVBDTWVzc2FnZTxhbnk+KTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIDxzdHJpbmc+aXBjTWVzc2FnZS52YWx1ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYXN5bmMgaGFuZGxlSVBDKGV2ZW50OiBJUENFdmVudCwgbWVzc2FnZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgbG9nLmluZm8oXCJHb3QgcGluZy4gIFNlbmRpbmcgcmVzcG9uc2UuIFwiKVxuICAgICAgICByZXR1cm4gZXZlbnQucmVzcG9uc2Uuc2VuZCgncG9uZycpO1xuICAgIH1cblxufVxuIl19