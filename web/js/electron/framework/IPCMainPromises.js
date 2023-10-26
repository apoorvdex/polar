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
class IPCMainPromises {
    static once(channel) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                electron_1.ipcMain.once(channel, (event, message) => {
                    resolve(new MainIPCEvent(event, message));
                });
            });
        });
    }
    static on(channel, listener) {
        electron_1.ipcMain.on(channel, (event, message) => {
            listener(new MainIPCEvent(event, message));
        });
    }
}
exports.IPCMainPromises = IPCMainPromises;
class MainIPCEvent {
    constructor(event, message) {
        this.event = event;
        this.message = message;
    }
}
exports.MainIPCEvent = MainIPCEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSVBDTWFpblByb21pc2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSVBDTWFpblByb21pc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1Q0FBaUM7QUFFakMsTUFBYSxlQUFlO0lBRWpCLE1BQU0sQ0FBTyxJQUFJLENBQUksT0FBZTs7WUFFdkMsT0FBTyxJQUFJLE9BQU8sQ0FBa0IsQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFFNUMsa0JBQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBcUIsRUFBRSxPQUFVLEVBQUUsRUFBRTtvQkFDeEQsT0FBTyxDQUFDLElBQUksWUFBWSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxDQUFDLENBQUMsQ0FBQztZQUVQLENBQUMsQ0FBQyxDQUFDO1FBRVAsQ0FBQztLQUFBO0lBQ00sTUFBTSxDQUFDLEVBQUUsQ0FBSSxPQUFlLEVBQUUsUUFBaUM7UUFFbEUsa0JBQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBcUIsRUFBRSxPQUFVLEVBQUUsRUFBRTtZQUN0RCxRQUFRLENBQUMsSUFBSSxZQUFZLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0NBR0o7QUF0QkQsMENBc0JDO0FBTUQsTUFBYSxZQUFZO0lBS3JCLFlBQVksS0FBVSxFQUFFLE9BQVU7UUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztDQUVKO0FBVkQsb0NBVUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2lwY01haW59IGZyb20gJ2VsZWN0cm9uJztcblxuZXhwb3J0IGNsYXNzIElQQ01haW5Qcm9taXNlcyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIG9uY2U8TT4oY2hhbm5lbDogc3RyaW5nKTogUHJvbWlzZTxNYWluSVBDRXZlbnQ8TT4+IHtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8TWFpbklQQ0V2ZW50PE0+PigocmVzb2x2ZSkgPT4ge1xuXG4gICAgICAgICAgICBpcGNNYWluLm9uY2UoY2hhbm5lbCwgKGV2ZW50OiBFbGVjdHJvbi5FdmVudCwgbWVzc2FnZTogTSkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUobmV3IE1haW5JUENFdmVudChldmVudCwgbWVzc2FnZSkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBvbjxNPihjaGFubmVsOiBzdHJpbmcsIGxpc3RlbmVyOiBNYWluSVBDRXZlbnRMaXN0ZW5lcjxNPikge1xuXG4gICAgICAgIGlwY01haW4ub24oY2hhbm5lbCwgKGV2ZW50OiBFbGVjdHJvbi5FdmVudCwgbWVzc2FnZTogTSkgPT4ge1xuICAgICAgICAgICAgbGlzdGVuZXIobmV3IE1haW5JUENFdmVudChldmVudCwgbWVzc2FnZSkpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFpbklQQ0V2ZW50TGlzdGVuZXI8TT4ge1xuICAgIChldmVudDogTWFpbklQQ0V2ZW50PE0+KTogdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIE1haW5JUENFdmVudDxNPiB7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgZXZlbnQ6IEVsZWN0cm9uLkV2ZW50O1xuICAgIHB1YmxpYyByZWFkb25seSBtZXNzYWdlOiBNO1xuXG4gICAgY29uc3RydWN0b3IoZXZlbnQ6IGFueSwgbWVzc2FnZTogTSkge1xuICAgICAgICB0aGlzLmV2ZW50ID0gZXZlbnQ7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgfVxuXG59XG4iXX0=