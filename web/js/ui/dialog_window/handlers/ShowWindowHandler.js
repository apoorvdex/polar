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
const AbstractDialogWindowReferenceHandler_1 = require("./AbstractDialogWindowReferenceHandler");
class ShowWindowHandler extends AbstractDialogWindowReferenceHandler_1.AbstractDialogWindowReferenceHandler {
    handleIPC(event, request) {
        return __awaiter(this, void 0, void 0, function* () {
            let browserWindow = electron_1.BrowserWindow.fromId(request.id);
            browserWindow.show();
            browserWindow.focus();
            return true;
        });
    }
}
exports.ShowWindowHandler = ShowWindowHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hvd1dpbmRvd0hhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTaG93V2luZG93SGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUNBQXVDO0FBR3ZDLGlHQUE0RjtBQUU1RixNQUFhLGlCQUFrQixTQUFRLDJFQUFvQztJQUV2RCxTQUFTLENBQUMsS0FBZSxFQUFFLE9BQThCOztZQUVyRSxJQUFJLGFBQWEsR0FBRyx3QkFBYSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7WUFJckQsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3JCLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUV0QixPQUFPLElBQUksQ0FBQztRQUVoQixDQUFDO0tBQUE7Q0FFSjtBQWZELDhDQWVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCcm93c2VyV2luZG93fSBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQge0lQQ0V2ZW50fSBmcm9tICcuLi8uLi8uLi9pcGMvaGFuZGxlci9JUENFdmVudCc7XG5pbXBvcnQge0RpYWxvZ1dpbmRvd1JlZmVyZW5jZX0gZnJvbSAnLi4vRGlhbG9nV2luZG93UmVmZXJlbmNlJztcbmltcG9ydCB7QWJzdHJhY3REaWFsb2dXaW5kb3dSZWZlcmVuY2VIYW5kbGVyfSBmcm9tICcuL0Fic3RyYWN0RGlhbG9nV2luZG93UmVmZXJlbmNlSGFuZGxlcic7XG5cbmV4cG9ydCBjbGFzcyBTaG93V2luZG93SGFuZGxlciBleHRlbmRzIEFic3RyYWN0RGlhbG9nV2luZG93UmVmZXJlbmNlSGFuZGxlciB7XG5cbiAgICBwcm90ZWN0ZWQgYXN5bmMgaGFuZGxlSVBDKGV2ZW50OiBJUENFdmVudCwgcmVxdWVzdDogRGlhbG9nV2luZG93UmVmZXJlbmNlKTogUHJvbWlzZTxib29sZWFuPiB7XG5cbiAgICAgICAgbGV0IGJyb3dzZXJXaW5kb3cgPSBCcm93c2VyV2luZG93LmZyb21JZChyZXF1ZXN0LmlkKTtcblxuICAgICAgICAvLyBUT0RPIHdlIHNob3VsZCBwcm9iYWJseSBkbyB0aGlzIHZpYSBhbiBhY3RpdmF0ZSBtZXRob2Qgd2hpY2ggY29tYmluZXNcbiAgICAgICAgLy8gc2hvdyArIGZvY3VzXG4gICAgICAgIGJyb3dzZXJXaW5kb3cuc2hvdygpO1xuICAgICAgICBicm93c2VyV2luZG93LmZvY3VzKCk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICB9XG5cbn1cblxuIl19