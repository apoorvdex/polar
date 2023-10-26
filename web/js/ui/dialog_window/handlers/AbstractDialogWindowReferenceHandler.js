"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IPCHandler_1 = require("../../../ipc/handler/IPCHandler");
const DialogWindowReference_1 = require("../DialogWindowReference");
class AbstractDialogWindowReferenceHandler extends IPCHandler_1.IPCHandler {
    createValue(ipcMessage) {
        return DialogWindowReference_1.DialogWindowReference.create(ipcMessage.value);
    }
}
exports.AbstractDialogWindowReferenceHandler = AbstractDialogWindowReferenceHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3REaWFsb2dXaW5kb3dSZWZlcmVuY2VIYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQWJzdHJhY3REaWFsb2dXaW5kb3dSZWZlcmVuY2VIYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0VBQTJEO0FBQzNELG9FQUErRDtBQUcvRCxNQUFzQixvQ0FBcUMsU0FBUSx1QkFBaUM7SUFFdEYsV0FBVyxDQUFDLFVBQTJCO1FBQzdDLE9BQU8sNkNBQXFCLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxRCxDQUFDO0NBRUo7QUFORCxvRkFNQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVBDSGFuZGxlcn0gZnJvbSAnLi4vLi4vLi4vaXBjL2hhbmRsZXIvSVBDSGFuZGxlcic7XG5pbXBvcnQge0RpYWxvZ1dpbmRvd1JlZmVyZW5jZX0gZnJvbSAnLi4vRGlhbG9nV2luZG93UmVmZXJlbmNlJztcbmltcG9ydCB7SVBDTWVzc2FnZX0gZnJvbSAnLi4vLi4vLi4vaXBjL2hhbmRsZXIvSVBDTWVzc2FnZSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdERpYWxvZ1dpbmRvd1JlZmVyZW5jZUhhbmRsZXIgZXh0ZW5kcyBJUENIYW5kbGVyPERpYWxvZ1dpbmRvd1JlZmVyZW5jZT57XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlVmFsdWUoaXBjTWVzc2FnZTogSVBDTWVzc2FnZTxhbnk+KTogRGlhbG9nV2luZG93UmVmZXJlbmNlIHtcbiAgICAgICAgcmV0dXJuIERpYWxvZ1dpbmRvd1JlZmVyZW5jZS5jcmVhdGUoaXBjTWVzc2FnZS52YWx1ZSk7XG4gICAgfVxuXG59XG4iXX0=