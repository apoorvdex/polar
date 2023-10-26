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
class HideWindowHandler extends AbstractDialogWindowReferenceHandler_1.AbstractDialogWindowReferenceHandler {
    handleIPC(event, request) {
        return __awaiter(this, void 0, void 0, function* () {
            let browserWindow = electron_1.BrowserWindow.fromId(request.id);
            browserWindow.hide();
            return true;
        });
    }
}
exports.HideWindowHandler = HideWindowHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGlkZVdpbmRvd0hhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJIaWRlV2luZG93SGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUNBQXVDO0FBR3ZDLGlHQUE0RjtBQUU1RixNQUFhLGlCQUFrQixTQUFRLDJFQUFvQztJQUV2RCxTQUFTLENBQUMsS0FBZSxFQUFFLE9BQThCOztZQUVyRSxJQUFJLGFBQWEsR0FBRyx3QkFBYSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDckQsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1lBRXJCLE9BQU8sSUFBSSxDQUFDO1FBRWhCLENBQUM7S0FBQTtDQUVKO0FBWEQsOENBV0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jyb3dzZXJXaW5kb3d9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCB7SVBDRXZlbnR9IGZyb20gJy4uLy4uLy4uL2lwYy9oYW5kbGVyL0lQQ0V2ZW50JztcbmltcG9ydCB7RGlhbG9nV2luZG93UmVmZXJlbmNlfSBmcm9tICcuLi9EaWFsb2dXaW5kb3dSZWZlcmVuY2UnO1xuaW1wb3J0IHtBYnN0cmFjdERpYWxvZ1dpbmRvd1JlZmVyZW5jZUhhbmRsZXJ9IGZyb20gJy4vQWJzdHJhY3REaWFsb2dXaW5kb3dSZWZlcmVuY2VIYW5kbGVyJztcblxuZXhwb3J0IGNsYXNzIEhpZGVXaW5kb3dIYW5kbGVyIGV4dGVuZHMgQWJzdHJhY3REaWFsb2dXaW5kb3dSZWZlcmVuY2VIYW5kbGVyIHtcblxuICAgIHByb3RlY3RlZCBhc3luYyBoYW5kbGVJUEMoZXZlbnQ6IElQQ0V2ZW50LCByZXF1ZXN0OiBEaWFsb2dXaW5kb3dSZWZlcmVuY2UpOiBQcm9taXNlPGJvb2xlYW4+IHtcblxuICAgICAgICBsZXQgYnJvd3NlcldpbmRvdyA9IEJyb3dzZXJXaW5kb3cuZnJvbUlkKHJlcXVlc3QuaWQpO1xuICAgICAgICBicm93c2VyV2luZG93LmhpZGUoKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIH1cblxufVxuXG4iXX0=