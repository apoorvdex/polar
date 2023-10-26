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
const ElectronIPCPipe_1 = require("../../ipc/handler/ElectronIPCPipe");
const IPCRegistry_1 = require("../../ipc/handler/IPCRegistry");
const IPCEngine_1 = require("../../ipc/handler/IPCEngine");
const CreateFlashcardHandler_1 = require("./handlers/CreateFlashcardHandler");
const ElectronRendererPipe_1 = require("../../ipc/pipes/ElectronRendererPipe");
const Logger_1 = require("../../logger/Logger");
const log = Logger_1.Logger.create();
class CreateFlashcardService {
    constructor(createFlashcardForm) {
        this.createFlashcardForm = createFlashcardForm;
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            log.info("Starting...");
            let pipe = new ElectronRendererPipe_1.ElectronRendererPipe();
            let ipcPipe = new ElectronIPCPipe_1.ElectronIPCPipe(pipe);
            let ipcRegistry = new IPCRegistry_1.IPCRegistry();
            ipcRegistry.registerPath('/create-flashcard/api/create', new CreateFlashcardHandler_1.CreateFlashcardHandler(this.createFlashcardForm));
            let ipcEngine = new IPCEngine_1.IPCEngine(ipcPipe, ipcRegistry);
            ipcEngine.start();
            log.info("Starting...done");
        });
    }
}
exports.CreateFlashcardService = CreateFlashcardService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlRmxhc2hjYXJkU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNyZWF0ZUZsYXNoY2FyZFNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVFQUFrRTtBQUNsRSwrREFBMEQ7QUFDMUQsMkRBQXNEO0FBRXRELDhFQUF5RTtBQUN6RSwrRUFBMEU7QUFDMUUsZ0RBQTJDO0FBRTNDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLHNCQUFzQjtJQUkvQixZQUFZLG1CQUF3QztRQUNoRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsbUJBQW1CLENBQUM7SUFDbkQsQ0FBQztJQUVLLEtBQUs7O1lBRVAsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUV4QixJQUFJLElBQUksR0FBRyxJQUFJLDJDQUFvQixFQUFFLENBQUM7WUFDdEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxpQ0FBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXhDLElBQUksV0FBVyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO1lBRXBDLFdBQVcsQ0FBQyxZQUFZLENBQUMsOEJBQThCLEVBQUUsSUFBSSwrQ0FBc0IsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1lBRS9HLElBQUksU0FBUyxHQUFHLElBQUkscUJBQVMsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFFcEQsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBRWxCLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUVoQyxDQUFDO0tBQUE7Q0FFSjtBQTNCRCx3REEyQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0VsZWN0cm9uSVBDUGlwZX0gZnJvbSAnLi4vLi4vaXBjL2hhbmRsZXIvRWxlY3Ryb25JUENQaXBlJztcbmltcG9ydCB7SVBDUmVnaXN0cnl9IGZyb20gJy4uLy4uL2lwYy9oYW5kbGVyL0lQQ1JlZ2lzdHJ5JztcbmltcG9ydCB7SVBDRW5naW5lfSBmcm9tICcuLi8uLi9pcGMvaGFuZGxlci9JUENFbmdpbmUnO1xuaW1wb3J0IHtDcmVhdGVGbGFzaGNhcmRGb3JtfSBmcm9tICcuL2VsZW1lbnRzL3NjaGVtYWZvcm0vQ3JlYXRlRmxhc2hjYXJkRm9ybSc7XG5pbXBvcnQge0NyZWF0ZUZsYXNoY2FyZEhhbmRsZXJ9IGZyb20gJy4vaGFuZGxlcnMvQ3JlYXRlRmxhc2hjYXJkSGFuZGxlcic7XG5pbXBvcnQge0VsZWN0cm9uUmVuZGVyZXJQaXBlfSBmcm9tICcuLi8uLi9pcGMvcGlwZXMvRWxlY3Ryb25SZW5kZXJlclBpcGUnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uLy4uL2xvZ2dlci9Mb2dnZXInO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVGbGFzaGNhcmRTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgY3JlYXRlRmxhc2hjYXJkRm9ybTogQ3JlYXRlRmxhc2hjYXJkRm9ybTtcblxuICAgIGNvbnN0cnVjdG9yKGNyZWF0ZUZsYXNoY2FyZEZvcm06IENyZWF0ZUZsYXNoY2FyZEZvcm0pIHtcbiAgICAgICAgdGhpcy5jcmVhdGVGbGFzaGNhcmRGb3JtID0gY3JlYXRlRmxhc2hjYXJkRm9ybTtcbiAgICB9XG5cbiAgICBhc3luYyBzdGFydCgpOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgICAgICBsb2cuaW5mbyhcIlN0YXJ0aW5nLi4uXCIpO1xuXG4gICAgICAgIGxldCBwaXBlID0gbmV3IEVsZWN0cm9uUmVuZGVyZXJQaXBlKCk7XG4gICAgICAgIGxldCBpcGNQaXBlID0gbmV3IEVsZWN0cm9uSVBDUGlwZShwaXBlKTtcblxuICAgICAgICBsZXQgaXBjUmVnaXN0cnkgPSBuZXcgSVBDUmVnaXN0cnkoKTtcblxuICAgICAgICBpcGNSZWdpc3RyeS5yZWdpc3RlclBhdGgoJy9jcmVhdGUtZmxhc2hjYXJkL2FwaS9jcmVhdGUnLCBuZXcgQ3JlYXRlRmxhc2hjYXJkSGFuZGxlcih0aGlzLmNyZWF0ZUZsYXNoY2FyZEZvcm0pKTtcblxuICAgICAgICBsZXQgaXBjRW5naW5lID0gbmV3IElQQ0VuZ2luZShpcGNQaXBlLCBpcGNSZWdpc3RyeSk7XG5cbiAgICAgICAgaXBjRW5naW5lLnN0YXJ0KCk7XG5cbiAgICAgICAgbG9nLmluZm8oXCJTdGFydGluZy4uLmRvbmVcIik7XG5cbiAgICB9XG5cbn1cbiJdfQ==