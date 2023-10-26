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
class IPCHandler {
    handle(event, ipcMessage) {
        return __awaiter(this, void 0, void 0, function* () {
            let message = this.createValue(ipcMessage);
            return this.handleIPC(event, message);
        });
    }
}
exports.IPCHandler = IPCHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSVBDSGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIklQQ0hhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBLE1BQXNCLFVBQVU7SUFFZixNQUFNLENBQUMsS0FBZSxFQUFFLFVBQTJCOztZQUM1RCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzNDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDMUMsQ0FBQztLQUFBO0NBTUo7QUFYRCxnQ0FXQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVBDTWVzc2FnZX0gZnJvbSAnLi9JUENNZXNzYWdlJztcbmltcG9ydCB7SVBDRXZlbnR9IGZyb20gJy4vSVBDRXZlbnQnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSVBDSGFuZGxlcjxNPiB7XG5cbiAgICBwdWJsaWMgYXN5bmMgaGFuZGxlKGV2ZW50OiBJUENFdmVudCwgaXBjTWVzc2FnZTogSVBDTWVzc2FnZTxhbnk+KTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSB0aGlzLmNyZWF0ZVZhbHVlKGlwY01lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVJUEMoZXZlbnQsIG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhc3luYyBhYnN0cmFjdCBoYW5kbGVJUEMoZXZlbnQ6IElQQ0V2ZW50LCBtZXNzYWdlOiBNKTogUHJvbWlzZTxhbnk+O1xuXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGNyZWF0ZVZhbHVlKGlwY01lc3NhZ2U6IElQQ01lc3NhZ2U8YW55Pik6IE07XG5cbn1cblxuXG4iXX0=