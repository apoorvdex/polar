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
const Preconditions_1 = require("../../../../Preconditions");
const Backend_1 = require("../../../../datastore/Backend");
const Logger_1 = require("../../../../logger/Logger");
const PDFLoader_1 = require("../../file_loaders/PDFLoader");
const Nav_1 = require("../../../../ui/util/Nav");
const log = Logger_1.Logger.create();
class BrowserDocLoader {
    constructor(persistenceLayerProvider) {
        this.persistenceLayerProvider = persistenceLayerProvider;
    }
    create(loadDocRequest) {
        const linkLoader = Nav_1.Nav.createLinkLoader();
        Preconditions_1.Preconditions.assertPresent(loadDocRequest.fingerprint, "fingerprint");
        Preconditions_1.Preconditions.assertPresent(loadDocRequest.fileRef, "fileRef");
        Preconditions_1.Preconditions.assertPresent(loadDocRequest.fileRef.name, "fileRef.name");
        const persistenceLayer = this.persistenceLayerProvider.get();
        return {
            load() {
                return __awaiter(this, void 0, void 0, function* () {
                    const optionalDatastoreFile = yield persistenceLayer.getFile(Backend_1.Backend.STASH, loadDocRequest.fileRef);
                    if (optionalDatastoreFile.isPresent()) {
                        const datastoreFile = optionalDatastoreFile.get();
                        const viewerURL = PDFLoader_1.PDFLoader.createViewerURL(datastoreFile.url, loadDocRequest.fileRef.name);
                        linkLoader.load(viewerURL);
                    }
                    else {
                        log.warn("No datastore file for: ", loadDocRequest);
                    }
                });
            }
        };
    }
}
exports.BrowserDocLoader = BrowserDocLoader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJvd3NlckRvY0xvYWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkJyb3dzZXJEb2NMb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLDZEQUF3RDtBQUd4RCwyREFBc0Q7QUFDdEQsc0RBQWlEO0FBQ2pELDREQUF1RDtBQUV2RCxpREFBNEM7QUFFNUMsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsZ0JBQWdCO0lBSXpCLFlBQVksd0JBQXFEO1FBQzdELElBQUksQ0FBQyx3QkFBd0IsR0FBRyx3QkFBd0IsQ0FBQztJQUM3RCxDQUFDO0lBRU0sTUFBTSxDQUFDLGNBQThCO1FBRXhDLE1BQU0sVUFBVSxHQUFHLFNBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBRTFDLDZCQUFhLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDdkUsNkJBQWEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztRQUMvRCw2QkFBYSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQztRQUV6RSxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUU3RCxPQUFPO1lBRUcsSUFBSTs7b0JBRU4sTUFBTSxxQkFBcUIsR0FDckIsTUFBTSxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsaUJBQU8sQ0FBQyxLQUFLLEVBQUUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUU1RSxJQUFJLHFCQUFxQixDQUFDLFNBQVMsRUFBRSxFQUFFO3dCQUVuQyxNQUFNLGFBQWEsR0FBRyxxQkFBcUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQzt3QkFFbEQsTUFBTSxTQUFTLEdBQUcscUJBQVMsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUU1RixVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO3FCQUU5Qjt5QkFBTTt3QkFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFLGNBQWMsQ0FBQyxDQUFDO3FCQUN2RDtnQkFFTCxDQUFDO2FBQUE7U0FFSixDQUFDO0lBRU4sQ0FBQztDQUVKO0FBM0NELDRDQTJDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TG9hZERvY1JlcXVlc3R9IGZyb20gJy4uL0xvYWREb2NSZXF1ZXN0JztcbmltcG9ydCB7UHJlY29uZGl0aW9uc30gZnJvbSAnLi4vLi4vLi4vLi4vUHJlY29uZGl0aW9ucyc7XG5pbXBvcnQge0lQcm92aWRlcn0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9Qcm92aWRlcnMnO1xuaW1wb3J0IHtQZXJzaXN0ZW5jZUxheWVyfSBmcm9tICcuLi8uLi8uLi8uLi9kYXRhc3RvcmUvUGVyc2lzdGVuY2VMYXllcic7XG5pbXBvcnQge0JhY2tlbmR9IGZyb20gJy4uLy4uLy4uLy4uL2RhdGFzdG9yZS9CYWNrZW5kJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi8uLi8uLi9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7UERGTG9hZGVyfSBmcm9tICcuLi8uLi9maWxlX2xvYWRlcnMvUERGTG9hZGVyJztcbmltcG9ydCB7SURvY0xvYWRlciwgSURvY0xvYWRSZXF1ZXN0fSBmcm9tICcuLi9JRG9jTG9hZGVyJztcbmltcG9ydCB7TmF2fSBmcm9tICcuLi8uLi8uLi8uLi91aS91dGlsL05hdic7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIEJyb3dzZXJEb2NMb2FkZXIgaW1wbGVtZW50cyBJRG9jTG9hZGVyIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgcGVyc2lzdGVuY2VMYXllclByb3ZpZGVyOiBJUHJvdmlkZXI8UGVyc2lzdGVuY2VMYXllcj47XG5cbiAgICBjb25zdHJ1Y3RvcihwZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXI6IElQcm92aWRlcjxQZXJzaXN0ZW5jZUxheWVyPikge1xuICAgICAgICB0aGlzLnBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlciA9IHBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlKGxvYWREb2NSZXF1ZXN0OiBMb2FkRG9jUmVxdWVzdCk6IElEb2NMb2FkUmVxdWVzdCB7XG5cbiAgICAgICAgY29uc3QgbGlua0xvYWRlciA9IE5hdi5jcmVhdGVMaW5rTG9hZGVyKCk7XG5cbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnRQcmVzZW50KGxvYWREb2NSZXF1ZXN0LmZpbmdlcnByaW50LCBcImZpbmdlcnByaW50XCIpO1xuICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydFByZXNlbnQobG9hZERvY1JlcXVlc3QuZmlsZVJlZiwgXCJmaWxlUmVmXCIpO1xuICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydFByZXNlbnQobG9hZERvY1JlcXVlc3QuZmlsZVJlZi5uYW1lLCBcImZpbGVSZWYubmFtZVwiKTtcblxuICAgICAgICBjb25zdCBwZXJzaXN0ZW5jZUxheWVyID0gdGhpcy5wZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXIuZ2V0KCk7XG5cbiAgICAgICAgcmV0dXJuIHtcblxuICAgICAgICAgICAgYXN5bmMgbG9hZCgpOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbmFsRGF0YXN0b3JlRmlsZVxuICAgICAgICAgICAgICAgICAgICA9IGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXIuZ2V0RmlsZShCYWNrZW5kLlNUQVNILCBsb2FkRG9jUmVxdWVzdC5maWxlUmVmKTtcblxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbERhdGFzdG9yZUZpbGUuaXNQcmVzZW50KCkpIHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhc3RvcmVGaWxlID0gb3B0aW9uYWxEYXRhc3RvcmVGaWxlLmdldCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZpZXdlclVSTCA9IFBERkxvYWRlci5jcmVhdGVWaWV3ZXJVUkwoZGF0YXN0b3JlRmlsZS51cmwsIGxvYWREb2NSZXF1ZXN0LmZpbGVSZWYubmFtZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGlua0xvYWRlci5sb2FkKHZpZXdlclVSTCk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsb2cud2FybihcIk5vIGRhdGFzdG9yZSBmaWxlIGZvcjogXCIsIGxvYWREb2NSZXF1ZXN0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9O1xuXG4gICAgfVxuXG59XG4iXX0=