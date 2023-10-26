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
const IPCMessage_1 = require("../../ipc/handler/IPCMessage");
const IPCClient_1 = require("../../ipc/handler/IPCClient");
const ElectronRendererPipe_1 = require("../../ipc/pipes/ElectronRendererPipe");
const ElectronIPCPipe_1 = require("../../ipc/handler/ElectronIPCPipe");
const ElectronRenderToRendererPipe_1 = require("../../ipc/pipes/ElectronRenderToRendererPipe");
const ElectronContext_1 = require("../../ipc/handler/ElectronContext");
let ipcPipe = new ElectronIPCPipe_1.ElectronIPCPipe(new ElectronRendererPipe_1.ElectronRendererPipe());
let ipcClient = new IPCClient_1.IPCClient(ipcPipe);
class DialogWindowClient {
    constructor(dialogWindowReference) {
        this.dialogWindowReference = dialogWindowReference;
    }
    show() {
        return __awaiter(this, void 0, void 0, function* () {
            yield ipcClient.execute("/api/dialog-window-service/show", this.dialogWindowReference);
        });
    }
    hide() {
        return __awaiter(this, void 0, void 0, function* () {
            yield ipcClient.execute("/api/dialog-window-service/hide", this.dialogWindowReference);
        });
    }
    send(channel, message) {
        electron_1.ipcRenderer.sendTo(this.dialogWindowReference.id, channel, message);
    }
    createPipe() {
        return new ElectronRenderToRendererPipe_1.ElectronRenderToRendererPipe(this.dialogWindowReference);
    }
    createClient() {
        let electronIPCPipe = new ElectronIPCPipe_1.ElectronIPCPipe(this.createPipe());
        return new IPCClient_1.IPCClient(electronIPCPipe, new ElectronContext_1.ElectronRendererContext(this.dialogWindowReference));
    }
    static create(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield ipcClient.execute('/api/dialog-window-service/create', options);
            const createdWindowMessage = IPCMessage_1.IPCMessage.create(result);
            return new DialogWindowClient(createdWindowMessage.value);
        });
    }
}
exports.DialogWindowClient = DialogWindowClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlhbG9nV2luZG93Q2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRGlhbG9nV2luZG93Q2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1Q0FBcUM7QUFFckMsNkRBQXdEO0FBRXhELDJEQUFzRDtBQUN0RCwrRUFBMEU7QUFDMUUsdUVBQWtFO0FBRWxFLCtGQUEwRjtBQUMxRix1RUFBMEU7QUFFMUUsSUFBSSxPQUFPLEdBQUcsSUFBSSxpQ0FBZSxDQUFDLElBQUksMkNBQW9CLEVBQUUsQ0FBQyxDQUFDO0FBQzlELElBQUksU0FBUyxHQUFHLElBQUkscUJBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUV2QyxNQUFhLGtCQUFrQjtJQUkzQixZQUFZLHFCQUE0QztRQUNwRCxJQUFJLENBQUMscUJBQXFCLEdBQUcscUJBQXFCLENBQUM7SUFDdkQsQ0FBQztJQUVLLElBQUk7O1lBQ04sTUFBTSxTQUFTLENBQUMsT0FBTyxDQUFDLGlDQUFpQyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzNGLENBQUM7S0FBQTtJQUVLLElBQUk7O1lBQ04sTUFBTSxTQUFTLENBQUMsT0FBTyxDQUFDLGlDQUFpQyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzNGLENBQUM7S0FBQTtJQUtELElBQUksQ0FBQyxPQUFlLEVBQUUsT0FBWTtRQUM5QixzQkFBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBS0QsVUFBVTtRQUNOLE9BQU8sSUFBSSwyREFBNEIsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQsWUFBWTtRQUNSLElBQUksZUFBZSxHQUFHLElBQUksaUNBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUM3RCxPQUFPLElBQUkscUJBQVMsQ0FBQyxlQUFlLEVBQUUsSUFBSSx5Q0FBdUIsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQ25HLENBQUM7SUFPRCxNQUFNLENBQU8sTUFBTSxDQUFDLE9BQTRCOztZQUU1QyxNQUFNLE1BQU0sR0FBRyxNQUFNLFNBQVMsQ0FBQyxPQUFPLENBQUMsbUNBQW1DLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFJckYsTUFBTSxvQkFBb0IsR0FBRyx1QkFBVSxDQUFDLE1BQU0sQ0FBd0IsTUFBTSxDQUFDLENBQUM7WUFFOUUsT0FBTyxJQUFJLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTlELENBQUM7S0FBQTtDQUVKO0FBcERELGdEQW9EQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXBjUmVuZGVyZXJ9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCB7RGlhbG9nV2luZG93T3B0aW9uc30gZnJvbSAnLi9EaWFsb2dXaW5kb3cnO1xuaW1wb3J0IHtJUENNZXNzYWdlfSBmcm9tICcuLi8uLi9pcGMvaGFuZGxlci9JUENNZXNzYWdlJztcbmltcG9ydCB7RGlhbG9nV2luZG93UmVmZXJlbmNlfSBmcm9tICcuL0RpYWxvZ1dpbmRvd1JlZmVyZW5jZSc7XG5pbXBvcnQge0lQQ0NsaWVudH0gZnJvbSAnLi4vLi4vaXBjL2hhbmRsZXIvSVBDQ2xpZW50JztcbmltcG9ydCB7RWxlY3Ryb25SZW5kZXJlclBpcGV9IGZyb20gJy4uLy4uL2lwYy9waXBlcy9FbGVjdHJvblJlbmRlcmVyUGlwZSc7XG5pbXBvcnQge0VsZWN0cm9uSVBDUGlwZX0gZnJvbSAnLi4vLi4vaXBjL2hhbmRsZXIvRWxlY3Ryb25JUENQaXBlJztcbmltcG9ydCB7UGlwZX0gZnJvbSAnLi4vLi4vaXBjL3BpcGVzL1BpcGUnO1xuaW1wb3J0IHtFbGVjdHJvblJlbmRlclRvUmVuZGVyZXJQaXBlfSBmcm9tICcuLi8uLi9pcGMvcGlwZXMvRWxlY3Ryb25SZW5kZXJUb1JlbmRlcmVyUGlwZSc7XG5pbXBvcnQge0VsZWN0cm9uUmVuZGVyZXJDb250ZXh0fSBmcm9tICcuLi8uLi9pcGMvaGFuZGxlci9FbGVjdHJvbkNvbnRleHQnO1xuXG5sZXQgaXBjUGlwZSA9IG5ldyBFbGVjdHJvbklQQ1BpcGUobmV3IEVsZWN0cm9uUmVuZGVyZXJQaXBlKCkpO1xubGV0IGlwY0NsaWVudCA9IG5ldyBJUENDbGllbnQoaXBjUGlwZSk7XG5cbmV4cG9ydCBjbGFzcyBEaWFsb2dXaW5kb3dDbGllbnQge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBkaWFsb2dXaW5kb3dSZWZlcmVuY2U6IERpYWxvZ1dpbmRvd1JlZmVyZW5jZTtcblxuICAgIGNvbnN0cnVjdG9yKGRpYWxvZ1dpbmRvd1JlZmVyZW5jZTogRGlhbG9nV2luZG93UmVmZXJlbmNlKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nV2luZG93UmVmZXJlbmNlID0gZGlhbG9nV2luZG93UmVmZXJlbmNlO1xuICAgIH1cblxuICAgIGFzeW5jIHNob3coKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGF3YWl0IGlwY0NsaWVudC5leGVjdXRlKFwiL2FwaS9kaWFsb2ctd2luZG93LXNlcnZpY2Uvc2hvd1wiLCB0aGlzLmRpYWxvZ1dpbmRvd1JlZmVyZW5jZSk7XG4gICAgfVxuXG4gICAgYXN5bmMgaGlkZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgaXBjQ2xpZW50LmV4ZWN1dGUoXCIvYXBpL2RpYWxvZy13aW5kb3ctc2VydmljZS9oaWRlXCIsIHRoaXMuZGlhbG9nV2luZG93UmVmZXJlbmNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kIGEgbWVzc2FnZSB0byB0aGUgaXBjUmVuZGVyZXIgaW4gdGhlIHJlbW90ZSB3aW5kb3cuXG4gICAgICovXG4gICAgc2VuZChjaGFubmVsOiBzdHJpbmcsIG1lc3NhZ2U6IGFueSkge1xuICAgICAgICBpcGNSZW5kZXJlci5zZW5kVG8odGhpcy5kaWFsb2dXaW5kb3dSZWZlcmVuY2UuaWQsIGNoYW5uZWwsIG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIHBpcGUgdG8gdGhpcyBCcm93c2VyV2luZG93IHdoaWNoIGNhbiBiZSB1c2VkIGZvciBJUEMuXG4gICAgICovXG4gICAgY3JlYXRlUGlwZSgpOiBQaXBlPEVsZWN0cm9uLkV2ZW50LCBhbnk+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBFbGVjdHJvblJlbmRlclRvUmVuZGVyZXJQaXBlKHRoaXMuZGlhbG9nV2luZG93UmVmZXJlbmNlKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDbGllbnQoKSB7XG4gICAgICAgIGxldCBlbGVjdHJvbklQQ1BpcGUgPSBuZXcgRWxlY3Ryb25JUENQaXBlKHRoaXMuY3JlYXRlUGlwZSgpKTtcbiAgICAgICAgcmV0dXJuIG5ldyBJUENDbGllbnQoZWxlY3Ryb25JUENQaXBlLCBuZXcgRWxlY3Ryb25SZW5kZXJlckNvbnRleHQodGhpcy5kaWFsb2dXaW5kb3dSZWZlcmVuY2UpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgRGlhbG9nV2luZG93IGFzIGEgY2xpZW50LiBXZSBoYXZlIGEgbGlnaHR3ZWlnaHQgbWVzc2FnZSB0b1xuICAgICAqIHRoZSByZW1vdGUgd2luZG93IHRvIHNob3cvaGlkZSBhbmQgd29yayB3aXRoIGl0IGluZGlyZWN0bHkuXG4gICAgICpcbiAgICAgKi9cbiAgICBzdGF0aWMgYXN5bmMgY3JlYXRlKG9wdGlvbnM6IERpYWxvZ1dpbmRvd09wdGlvbnMpOiBQcm9taXNlPERpYWxvZ1dpbmRvd0NsaWVudD4ge1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGlwY0NsaWVudC5leGVjdXRlKCcvYXBpL2RpYWxvZy13aW5kb3ctc2VydmljZS9jcmVhdGUnLCBvcHRpb25zKTtcblxuICAgICAgICAvLyBUT0RPOiB3ZSBuZWVkIHRvIGF1dG8tbWFyc2hhbCB0aGVzZSB0byB0aGUgY29ycmVjdCBvYmplY3RzIGJ1dCB0aGVcbiAgICAgICAgLy8gSVBDIGZyYW1ld29yayBkb2Vzbid0IHN1cHBvcnQgdGhpcyB5ZXQuXG4gICAgICAgIGNvbnN0IGNyZWF0ZWRXaW5kb3dNZXNzYWdlID0gSVBDTWVzc2FnZS5jcmVhdGU8RGlhbG9nV2luZG93UmVmZXJlbmNlPihyZXN1bHQpO1xuXG4gICAgICAgIHJldHVybiBuZXcgRGlhbG9nV2luZG93Q2xpZW50KGNyZWF0ZWRXaW5kb3dNZXNzYWdlLnZhbHVlKTtcblxuICAgIH1cblxufVxuXG5cbiJdfQ==