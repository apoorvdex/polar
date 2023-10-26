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
const IPCMessage_1 = require("./IPCMessage");
const ElectronContext_1 = require("./ElectronContext");
const WritablePipes_1 = require("./WritablePipes");
class IPCClient {
    constructor(pipe, targetContext = new ElectronContext_1.ElectronMainContext()) {
        this.pipe = pipe;
        this.targetContext = targetContext;
    }
    execute(path, request, targetContext = this.targetContext) {
        return __awaiter(this, void 0, void 0, function* () {
            let ipcMessage = new IPCMessage_1.IPCMessage('request', request);
            let responsePromise = this.pipe.when(ipcMessage.computeResponseChannel());
            let writablePipe = WritablePipes_1.WritablePipes.createFromContext(targetContext);
            writablePipe.write(path, ipcMessage);
            let response = yield responsePromise;
            return response.message;
        });
    }
    call(path, request, targetContext = this.targetContext) {
        return __awaiter(this, void 0, void 0, function* () {
            let ipcMessage = yield this.execute(path, request, targetContext);
            return ipcMessage.value;
        });
    }
}
exports.IPCClient = IPCClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSVBDQ2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSVBDQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSw2Q0FBd0M7QUFHeEMsdURBQXVFO0FBQ3ZFLG1EQUE4QztBQUs5QyxNQUFhLFNBQVM7SUFNbEIsWUFBWSxJQUFnQixFQUFFLGdCQUFpQyxJQUFJLHFDQUFtQixFQUFFO1FBQ3BGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7SUFhSyxPQUFPLENBQUksSUFBWSxFQUFFLE9BQVUsRUFBRSxnQkFBaUMsSUFBSSxDQUFDLGFBQWE7O1lBRTFGLElBQUksVUFBVSxHQUFHLElBQUksdUJBQVUsQ0FBTSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFFekQsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHNCQUFzQixFQUFFLENBQUMsQ0FBQztZQUUxRSxJQUFJLFlBQVksR0FBRyw2QkFBYSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBRWxFLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBR3JDLElBQUksUUFBUSxHQUFHLE1BQU0sZUFBZSxDQUFDO1lBRXJDLE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUU1QixDQUFDO0tBQUE7SUFFSyxJQUFJLENBQU8sSUFBWSxFQUFFLE9BQVUsRUFBRSxnQkFBaUMsSUFBSSxDQUFDLGFBQWE7O1lBQzFGLElBQUksVUFBVSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBQ2xFLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQztRQUM1QixDQUFDO0tBQUE7Q0FFSjtBQTVDRCw4QkE0Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lQQ01lc3NhZ2V9IGZyb20gJy4vSVBDTWVzc2FnZSc7XG5pbXBvcnQge0lQQ0V2ZW50fSBmcm9tICcuL0lQQ0V2ZW50JztcbmltcG9ydCB7SVBDUGlwZX0gZnJvbSAnLi9JUENQaXBlJztcbmltcG9ydCB7RWxlY3Ryb25Db250ZXh0LCBFbGVjdHJvbk1haW5Db250ZXh0fSBmcm9tICcuL0VsZWN0cm9uQ29udGV4dCc7XG5pbXBvcnQge1dyaXRhYmxlUGlwZXN9IGZyb20gJy4vV3JpdGFibGVQaXBlcyc7XG5cbi8qKlxuICogQSBjbGllbnQgd2hpY2ggZXhlY3V0ZXMgcmVxdWVzdHMgYW5kIHdhaXRzIGZvciByZXNwb25zZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBJUENDbGllbnQ8RSBleHRlbmRzIElQQ0V2ZW50PiB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHBpcGU6IElQQ1BpcGU8RT47XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHRhcmdldENvbnRleHQ6IEVsZWN0cm9uQ29udGV4dDtcblxuICAgIGNvbnN0cnVjdG9yKHBpcGU6IElQQ1BpcGU8RT4sIHRhcmdldENvbnRleHQ6IEVsZWN0cm9uQ29udGV4dCA9IG5ldyBFbGVjdHJvbk1haW5Db250ZXh0KCkpIHtcbiAgICAgICAgdGhpcy5waXBlID0gcGlwZTtcbiAgICAgICAgdGhpcy50YXJnZXRDb250ZXh0ID0gdGFyZ2V0Q29udGV4dDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYXRoIFRoZSBwYXRoIFVSSSB0byBleGVjdXRlIHRoZSByZXF1ZXN0IGFnYWluc3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdCBUaGUgcmVxdWVzdCBvYmplY3QgdGhhdCBpcyBzZXJpYWxpemVkIGFuZCBleGVjdXRlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0YXJnZXRDb250ZXh0IFRoZSB0YXJnZXQgd2hlcmUgd2Ugc2hvdWxkIGV4ZWN1dGUgdGhlIHJlcXVlc3QuICBCeVxuICAgICAqIGRlZmF1bHQsIHRoZSBvbmx5IHRhcmdldCB3ZSBzdXBwb3J0IGlzIG1haW4gLT4gcmVuZGVyZXIgd2hpY2ggYXNzdW1lcyB5b3VcbiAgICAgKiBhcmUgY2FsbGluZyBmcm9tIHRoZSByZW5kZXJlci4gIE5vIG90aGVyIGNvbnRleHQgY2FuIGJlIGluZmVycmVkIGJ5XG4gICAgICogZGVmYXVsdC5cbiAgICAgKi9cbiAgICBhc3luYyBleGVjdXRlPFI+KHBhdGg6IHN0cmluZywgcmVxdWVzdDogUiwgdGFyZ2V0Q29udGV4dDogRWxlY3Ryb25Db250ZXh0ID0gdGhpcy50YXJnZXRDb250ZXh0KTogUHJvbWlzZTxJUENNZXNzYWdlPGFueT4+IHtcblxuICAgICAgICBsZXQgaXBjTWVzc2FnZSA9IG5ldyBJUENNZXNzYWdlPGFueT4oJ3JlcXVlc3QnLCByZXF1ZXN0KTtcblxuICAgICAgICBsZXQgcmVzcG9uc2VQcm9taXNlID0gdGhpcy5waXBlLndoZW4oaXBjTWVzc2FnZS5jb21wdXRlUmVzcG9uc2VDaGFubmVsKCkpO1xuXG4gICAgICAgIGxldCB3cml0YWJsZVBpcGUgPSBXcml0YWJsZVBpcGVzLmNyZWF0ZUZyb21Db250ZXh0KHRhcmdldENvbnRleHQpO1xuXG4gICAgICAgIHdyaXRhYmxlUGlwZS53cml0ZShwYXRoLCBpcGNNZXNzYWdlKTtcbiAgICAgICAgLy90aGlzLnBpcGUud3JpdGUocGF0aCwgaXBjTWVzc2FnZSk7XG5cbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2VQcm9taXNlO1xuXG4gICAgICAgIHJldHVybiByZXNwb25zZS5tZXNzYWdlO1xuXG4gICAgfVxuXG4gICAgYXN5bmMgY2FsbDxSLCBUPihwYXRoOiBzdHJpbmcsIHJlcXVlc3Q6IFIsIHRhcmdldENvbnRleHQ6IEVsZWN0cm9uQ29udGV4dCA9IHRoaXMudGFyZ2V0Q29udGV4dCk6IFByb21pc2U8VD4ge1xuICAgICAgICBsZXQgaXBjTWVzc2FnZSA9IGF3YWl0IHRoaXMuZXhlY3V0ZShwYXRoLCByZXF1ZXN0LCB0YXJnZXRDb250ZXh0KTtcbiAgICAgICAgcmV0dXJuIGlwY01lc3NhZ2UudmFsdWU7XG4gICAgfVxuXG59XG4iXX0=