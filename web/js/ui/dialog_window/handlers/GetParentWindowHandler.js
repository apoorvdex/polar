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
const IPCMessage_1 = require("../../../ipc/handler/IPCMessage");
const AbstractDialogWindowReferenceHandler_1 = require("./AbstractDialogWindowReferenceHandler");
class GetParentWindowHandler extends AbstractDialogWindowReferenceHandler_1.AbstractDialogWindowReferenceHandler {
    constructor(parentWindowRegistry) {
        super();
        this.parentWindowRegistry = parentWindowRegistry;
    }
    handleIPC(event, dialogWindowReference) {
        return __awaiter(this, void 0, void 0, function* () {
            let parentWindowReference = this.parentWindowRegistry.get(dialogWindowReference);
            let parentWindowReferenceMessage = new IPCMessage_1.IPCMessage('parent-window-reference', parentWindowReference);
            event.responsePipe.write(event.message.computeResponseChannel(), parentWindowReferenceMessage);
        });
    }
}
exports.GetParentWindowHandler = GetParentWindowHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2V0UGFyZW50V2luZG93SGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkdldFBhcmVudFdpbmRvd0hhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBLGdFQUEyRDtBQUMzRCxpR0FBNEY7QUFFNUYsTUFBYSxzQkFBdUIsU0FBUSwyRUFBb0M7SUFJNUUsWUFBWSxvQkFBMEM7UUFDbEQsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsb0JBQW9CLEdBQUcsb0JBQW9CLENBQUM7SUFDckQsQ0FBQztJQUVlLFNBQVMsQ0FBQyxLQUFlLEVBQUUscUJBQTRDOztZQUVuRixJQUFJLHFCQUFxQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUVqRixJQUFJLDRCQUE0QixHQUFHLElBQUksdUJBQVUsQ0FBd0IseUJBQXlCLEVBQUUscUJBQXFCLENBQUMsQ0FBQztZQUUzSCxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLHNCQUFzQixFQUFFLEVBQUUsNEJBQTRCLENBQUMsQ0FBQTtRQUVsRyxDQUFDO0tBQUE7Q0FFSjtBQW5CRCx3REFtQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BhcmVudFdpbmRvd1JlZ2lzdHJ5fSBmcm9tICcuLi9QYXJlbnRXaW5kb3dSZWdpc3RyeSc7XG5pbXBvcnQge0lQQ0V2ZW50fSBmcm9tICcuLi8uLi8uLi9pcGMvaGFuZGxlci9JUENFdmVudCc7XG5pbXBvcnQge0RpYWxvZ1dpbmRvd1JlZmVyZW5jZX0gZnJvbSAnLi4vRGlhbG9nV2luZG93UmVmZXJlbmNlJztcbmltcG9ydCB7SVBDTWVzc2FnZX0gZnJvbSAnLi4vLi4vLi4vaXBjL2hhbmRsZXIvSVBDTWVzc2FnZSc7XG5pbXBvcnQge0Fic3RyYWN0RGlhbG9nV2luZG93UmVmZXJlbmNlSGFuZGxlcn0gZnJvbSAnLi9BYnN0cmFjdERpYWxvZ1dpbmRvd1JlZmVyZW5jZUhhbmRsZXInO1xuXG5leHBvcnQgY2xhc3MgR2V0UGFyZW50V2luZG93SGFuZGxlciBleHRlbmRzIEFic3RyYWN0RGlhbG9nV2luZG93UmVmZXJlbmNlSGFuZGxlciB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHBhcmVudFdpbmRvd1JlZ2lzdHJ5OiBQYXJlbnRXaW5kb3dSZWdpc3RyeTtcblxuICAgIGNvbnN0cnVjdG9yKHBhcmVudFdpbmRvd1JlZ2lzdHJ5OiBQYXJlbnRXaW5kb3dSZWdpc3RyeSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnBhcmVudFdpbmRvd1JlZ2lzdHJ5ID0gcGFyZW50V2luZG93UmVnaXN0cnk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFzeW5jIGhhbmRsZUlQQyhldmVudDogSVBDRXZlbnQsIGRpYWxvZ1dpbmRvd1JlZmVyZW5jZTogRGlhbG9nV2luZG93UmVmZXJlbmNlKTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICAgICAgbGV0IHBhcmVudFdpbmRvd1JlZmVyZW5jZSA9IHRoaXMucGFyZW50V2luZG93UmVnaXN0cnkuZ2V0KGRpYWxvZ1dpbmRvd1JlZmVyZW5jZSk7XG5cbiAgICAgICAgbGV0IHBhcmVudFdpbmRvd1JlZmVyZW5jZU1lc3NhZ2UgPSBuZXcgSVBDTWVzc2FnZTxEaWFsb2dXaW5kb3dSZWZlcmVuY2U+KCdwYXJlbnQtd2luZG93LXJlZmVyZW5jZScsIHBhcmVudFdpbmRvd1JlZmVyZW5jZSk7XG5cbiAgICAgICAgZXZlbnQucmVzcG9uc2VQaXBlLndyaXRlKGV2ZW50Lm1lc3NhZ2UuY29tcHV0ZVJlc3BvbnNlQ2hhbm5lbCgpLCBwYXJlbnRXaW5kb3dSZWZlcmVuY2VNZXNzYWdlKVxuXG4gICAgfVxuXG59XG5cbiJdfQ==