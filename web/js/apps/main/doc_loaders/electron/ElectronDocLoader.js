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
const ElectronIPCPipe_1 = require("../../../../ipc/handler/ElectronIPCPipe");
const ElectronRendererPipe_1 = require("../../../../ipc/pipes/ElectronRendererPipe");
const IPCClient_1 = require("../../../../ipc/handler/IPCClient");
const Preconditions_1 = require("../../../../Preconditions");
const ipcPipe = new ElectronIPCPipe_1.ElectronIPCPipe(new ElectronRendererPipe_1.ElectronRendererPipe());
const ipcClient = new IPCClient_1.IPCClient(ipcPipe);
class ElectronDocLoader {
    constructor(persistenceLayerProvider) {
        this.persistenceLayerProvider = persistenceLayerProvider;
    }
    create(loadDocRequest) {
        return {
            load() {
                return __awaiter(this, void 0, void 0, function* () {
                    Preconditions_1.Preconditions.assertPresent(loadDocRequest.fingerprint, "fingerprint");
                    Preconditions_1.Preconditions.assertPresent(loadDocRequest.fileRef, "fileRef");
                    Preconditions_1.Preconditions.assertPresent(loadDocRequest.fileRef.name, "fileRef.name");
                    yield ipcClient.execute('/main/load-doc', loadDocRequest);
                });
            }
        };
    }
}
exports.ElectronDocLoader = ElectronDocLoader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWxlY3Ryb25Eb2NMb2FkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJFbGVjdHJvbkRvY0xvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNkVBQXdFO0FBQ3hFLHFGQUFnRjtBQUNoRixpRUFBNEQ7QUFFNUQsNkRBQXdEO0FBS3hELE1BQU0sT0FBTyxHQUFHLElBQUksaUNBQWUsQ0FBQyxJQUFJLDJDQUFvQixFQUFFLENBQUMsQ0FBQztBQUNoRSxNQUFNLFNBQVMsR0FBRyxJQUFJLHFCQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFekMsTUFBYSxpQkFBaUI7SUFJMUIsWUFBWSx3QkFBcUQ7UUFDN0QsSUFBSSxDQUFDLHdCQUF3QixHQUFHLHdCQUF3QixDQUFDO0lBQzdELENBQUM7SUFFTSxNQUFNLENBQUMsY0FBOEI7UUFFeEMsT0FBTztZQUVHLElBQUk7O29CQUVOLDZCQUFhLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQUM7b0JBQ3ZFLDZCQUFhLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBQy9ELDZCQUFhLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFDO29CQUV6RSxNQUFNLFNBQVMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLENBQUM7Z0JBRTlELENBQUM7YUFBQTtTQUVKLENBQUM7SUFFTixDQUFDO0NBRUo7QUExQkQsOENBMEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFbGVjdHJvbklQQ1BpcGV9IGZyb20gJy4uLy4uLy4uLy4uL2lwYy9oYW5kbGVyL0VsZWN0cm9uSVBDUGlwZSc7XG5pbXBvcnQge0VsZWN0cm9uUmVuZGVyZXJQaXBlfSBmcm9tICcuLi8uLi8uLi8uLi9pcGMvcGlwZXMvRWxlY3Ryb25SZW5kZXJlclBpcGUnO1xuaW1wb3J0IHtJUENDbGllbnR9IGZyb20gJy4uLy4uLy4uLy4uL2lwYy9oYW5kbGVyL0lQQ0NsaWVudCc7XG5pbXBvcnQge0xvYWREb2NSZXF1ZXN0fSBmcm9tICcuLi9Mb2FkRG9jUmVxdWVzdCc7XG5pbXBvcnQge1ByZWNvbmRpdGlvbnN9IGZyb20gJy4uLy4uLy4uLy4uL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtJUHJvdmlkZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvUHJvdmlkZXJzJztcbmltcG9ydCB7UGVyc2lzdGVuY2VMYXllcn0gZnJvbSAnLi4vLi4vLi4vLi4vZGF0YXN0b3JlL1BlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtJRG9jTG9hZGVyLCBJRG9jTG9hZFJlcXVlc3R9IGZyb20gJy4uL0lEb2NMb2FkZXInO1xuXG5jb25zdCBpcGNQaXBlID0gbmV3IEVsZWN0cm9uSVBDUGlwZShuZXcgRWxlY3Ryb25SZW5kZXJlclBpcGUoKSk7XG5jb25zdCBpcGNDbGllbnQgPSBuZXcgSVBDQ2xpZW50KGlwY1BpcGUpO1xuXG5leHBvcnQgY2xhc3MgRWxlY3Ryb25Eb2NMb2FkZXIgaW1wbGVtZW50cyBJRG9jTG9hZGVyIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgcGVyc2lzdGVuY2VMYXllclByb3ZpZGVyOiBJUHJvdmlkZXI8UGVyc2lzdGVuY2VMYXllcj47XG5cbiAgICBjb25zdHJ1Y3RvcihwZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXI6IElQcm92aWRlcjxQZXJzaXN0ZW5jZUxheWVyPikge1xuICAgICAgICB0aGlzLnBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlciA9IHBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlKGxvYWREb2NSZXF1ZXN0OiBMb2FkRG9jUmVxdWVzdCk6IElEb2NMb2FkUmVxdWVzdCB7XG5cbiAgICAgICAgcmV0dXJuIHtcblxuICAgICAgICAgICAgYXN5bmMgbG9hZCgpOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgICAgICAgICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0UHJlc2VudChsb2FkRG9jUmVxdWVzdC5maW5nZXJwcmludCwgXCJmaW5nZXJwcmludFwiKTtcbiAgICAgICAgICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydFByZXNlbnQobG9hZERvY1JlcXVlc3QuZmlsZVJlZiwgXCJmaWxlUmVmXCIpO1xuICAgICAgICAgICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0UHJlc2VudChsb2FkRG9jUmVxdWVzdC5maWxlUmVmLm5hbWUsIFwiZmlsZVJlZi5uYW1lXCIpO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgaXBjQ2xpZW50LmV4ZWN1dGUoJy9tYWluL2xvYWQtZG9jJywgbG9hZERvY1JlcXVlc3QpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgIH1cblxufVxuXG4iXX0=