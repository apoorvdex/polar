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
const IPCHandler_1 = require("../../../../../../ipc/handler/IPCHandler");
const Directories_1 = require("../../../../../../datastore/Directories");
const FilePaths_1 = require("../../../../../../util/FilePaths");
class LoadDocHandler extends IPCHandler_1.IPCHandler {
    constructor(mainAppController) {
        super();
        this.directories = new Directories_1.Directories();
        this.mainAppController = mainAppController;
    }
    createValue(ipcMessage) {
        return ipcMessage.value;
    }
    handleIPC(event, loadDocRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = FilePaths_1.FilePaths.join(this.directories.stashDir, loadDocRequest.fileRef.name);
            yield this.mainAppController.handleLoadDoc(path, loadDocRequest.newWindow);
        });
    }
}
exports.LoadDocHandler = LoadDocHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9hZERvY0hhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJMb2FkRG9jSGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEseUVBQW9FO0FBSXBFLHlFQUFvRTtBQUVwRSxnRUFBMkQ7QUFFM0QsTUFBYSxjQUFnQixTQUFRLHVCQUEwQjtJQU0zRCxZQUFZLGlCQUFvQztRQUM1QyxLQUFLLEVBQUUsQ0FBQztRQUhLLGdCQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7UUFJN0MsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO0lBQy9DLENBQUM7SUFFUyxXQUFXLENBQUMsVUFBMkI7UUFDN0MsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFFZSxTQUFTLENBQUMsS0FBZSxFQUFFLGNBQThCOztZQUlyRSxNQUFNLElBQUksR0FBRyxxQkFBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXBGLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRS9FLENBQUM7S0FBQTtDQUVKO0FBekJELHdDQXlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVBDSGFuZGxlcn0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vaXBjL2hhbmRsZXIvSVBDSGFuZGxlcic7XG5pbXBvcnQge0lQQ01lc3NhZ2V9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2lwYy9oYW5kbGVyL0lQQ01lc3NhZ2UnO1xuaW1wb3J0IHtJUENFdmVudH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vaXBjL2hhbmRsZXIvSVBDRXZlbnQnO1xuaW1wb3J0IHtMb2FkRG9jUmVxdWVzdH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9jX2xvYWRlcnMvTG9hZERvY1JlcXVlc3QnO1xuaW1wb3J0IHtEaXJlY3Rvcmllc30gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZGF0YXN0b3JlL0RpcmVjdG9yaWVzJztcbmltcG9ydCB7TWFpbkFwcENvbnRyb2xsZXJ9IGZyb20gJy4uLy4uLy4uLy4uL01haW5BcHBDb250cm9sbGVyJztcbmltcG9ydCB7RmlsZVBhdGhzfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi91dGlsL0ZpbGVQYXRocyc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkRG9jSGFuZGxlciAgZXh0ZW5kcyBJUENIYW5kbGVyPExvYWREb2NSZXF1ZXN0PiB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IG1haW5BcHBDb250cm9sbGVyOiBNYWluQXBwQ29udHJvbGxlcjtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGlyZWN0b3JpZXMgPSBuZXcgRGlyZWN0b3JpZXMoKTtcblxuICAgIGNvbnN0cnVjdG9yKG1haW5BcHBDb250cm9sbGVyOiBNYWluQXBwQ29udHJvbGxlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm1haW5BcHBDb250cm9sbGVyID0gbWFpbkFwcENvbnRyb2xsZXI7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVZhbHVlKGlwY01lc3NhZ2U6IElQQ01lc3NhZ2U8YW55Pik6IExvYWREb2NSZXF1ZXN0IHtcbiAgICAgICAgcmV0dXJuIGlwY01lc3NhZ2UudmFsdWU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFzeW5jIGhhbmRsZUlQQyhldmVudDogSVBDRXZlbnQsIGxvYWREb2NSZXF1ZXN0OiBMb2FkRG9jUmVxdWVzdCk6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIC8vIFRPRE8od2ViYXBwKTogdGhlIExvYWREb2NSZXF1ZXN0IHNob3VsZCB1c2UgYSBmaW5nZXJwcmludCBhbmQgd2VcbiAgICAgICAgLy8gc2hvdWxkIGdldCBzb21lIGZvcm0gb2YgZG9jdW1lbnRVUkwgZnJvbSB0aGUgZGF0YXN0b3JlLlxuICAgICAgICBjb25zdCBwYXRoID0gRmlsZVBhdGhzLmpvaW4odGhpcy5kaXJlY3Rvcmllcy5zdGFzaERpciwgbG9hZERvY1JlcXVlc3QuZmlsZVJlZi5uYW1lKTtcblxuICAgICAgICBhd2FpdCB0aGlzLm1haW5BcHBDb250cm9sbGVyLmhhbmRsZUxvYWREb2MocGF0aCwgbG9hZERvY1JlcXVlc3QubmV3V2luZG93KTtcblxuICAgIH1cblxufVxuIl19