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
const Logger_1 = require("../../logger/Logger");
const IPCError_1 = require("./IPCError");
const log = Logger_1.Logger.create();
class IPCEngine {
    constructor(pipe, registry) {
        this.pipe = pipe;
        this.registry = registry;
    }
    start() {
        this.registry.entries().forEach(ipcRegistration => {
            this.pipe.on(ipcRegistration.path, (pipeNotification) => {
                (() => __awaiter(this, void 0, void 0, function* () {
                    const event = pipeNotification.event;
                    const ipcRequest = IPCMessage_1.IPCMessage.create(pipeNotification.message);
                    let ipcResponse;
                    try {
                        let result = yield ipcRegistration.handler.handle(event, ipcRequest);
                        if (!result) {
                            result = true;
                        }
                        ipcResponse = new IPCMessage_1.IPCMessage('result', result);
                    }
                    catch (err) {
                        log.error("Encountered error with handler: ", err);
                        ipcResponse = IPCMessage_1.IPCMessage.createError('error', IPCError_1.IPCError.create(err));
                    }
                    event.responsePipe.write(ipcRequest.computeResponseChannel(), ipcResponse);
                }))().catch(err => log.error(`Unable to handle IPC at ${ipcRegistration.path}: `, err));
            });
        });
    }
}
exports.IPCEngine = IPCEngine;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSVBDRW5naW5lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSVBDRW5naW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSw2Q0FBd0M7QUFFeEMsZ0RBQTJDO0FBRTNDLHlDQUFvQztBQUdwQyxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSxTQUFTO0lBTWxCLFlBQVksSUFBZ0IsRUFBRSxRQUFxQjtRQUMvQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBRU0sS0FBSztRQUVSLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBRTlDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFO2dCQUVwRCxDQUFDLEdBQVMsRUFBRTtvQkFFUixNQUFNLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7b0JBRXJDLE1BQU0sVUFBVSxHQUFHLHVCQUFVLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUUvRCxJQUFJLFdBQTRCLENBQUM7b0JBRWpDLElBQUk7d0JBRUEsSUFBSSxNQUFNLEdBQUksTUFBTSxlQUFlLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7d0JBRXRFLElBQUksQ0FBRSxNQUFNLEVBQUU7NEJBR1YsTUFBTSxHQUFHLElBQUksQ0FBQzt5QkFDakI7d0JBRUQsV0FBVyxHQUFHLElBQUksdUJBQVUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7cUJBSWxEO29CQUFDLE9BQU8sR0FBRyxFQUFFO3dCQUVWLEdBQUcsQ0FBQyxLQUFLLENBQUMsa0NBQWtDLEVBQUUsR0FBRyxDQUFDLENBQUM7d0JBS25ELFdBQVcsR0FBRyx1QkFBVSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsbUJBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFFdkU7b0JBT0QsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLHNCQUFzQixFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUM7Z0JBRS9FLENBQUMsQ0FBQSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLDJCQUEyQixlQUFlLENBQUMsSUFBSSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUUzRixDQUFDLENBQUMsQ0FBQztRQUVQLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztDQUVKO0FBakVELDhCQWlFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVBDTWVzc2FnZX0gZnJvbSAnLi9JUENNZXNzYWdlJztcbmltcG9ydCB7SVBDUmVnaXN0cnl9IGZyb20gJy4vSVBDUmVnaXN0cnknO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uLy4uL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtJUENQaXBlfSBmcm9tICcuL0lQQ1BpcGUnO1xuaW1wb3J0IHtJUENFcnJvcn0gZnJvbSAnLi9JUENFcnJvcic7XG5pbXBvcnQge0lQQ0V2ZW50fSBmcm9tICcuL0lQQ0V2ZW50JztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgY2xhc3MgSVBDRW5naW5lPEUgZXh0ZW5kcyBJUENFdmVudD4ge1xuXG4gICAgcHVibGljIHJlYWRvbmx5IHJlZ2lzdHJ5OiBJUENSZWdpc3RyeTtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgcGlwZTogSVBDUGlwZTxFPjtcblxuICAgIGNvbnN0cnVjdG9yKHBpcGU6IElQQ1BpcGU8RT4sIHJlZ2lzdHJ5OiBJUENSZWdpc3RyeSkge1xuICAgICAgICB0aGlzLnBpcGUgPSBwaXBlO1xuICAgICAgICB0aGlzLnJlZ2lzdHJ5ID0gcmVnaXN0cnk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXJ0KCkge1xuXG4gICAgICAgIHRoaXMucmVnaXN0cnkuZW50cmllcygpLmZvckVhY2goaXBjUmVnaXN0cmF0aW9uID0+IHtcblxuICAgICAgICAgICAgdGhpcy5waXBlLm9uKGlwY1JlZ2lzdHJhdGlvbi5wYXRoLCAocGlwZU5vdGlmaWNhdGlvbikgPT4ge1xuXG4gICAgICAgICAgICAgICAgKGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBldmVudCA9IHBpcGVOb3RpZmljYXRpb24uZXZlbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXBjUmVxdWVzdCA9IElQQ01lc3NhZ2UuY3JlYXRlKHBpcGVOb3RpZmljYXRpb24ubWVzc2FnZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGlwY1Jlc3BvbnNlOiBJUENNZXNzYWdlPGFueT47XG5cbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICBhd2FpdCBpcGNSZWdpc3RyYXRpb24uaGFuZGxlci5oYW5kbGUoZXZlbnQsIGlwY1JlcXVlc3QpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggISByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBkb24ndCBoYXZlIGEgcmVzdWx0IGdpdmVuIHRvIHVzIGZyb20gdGhlIGhhbmRsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBqdXN0IHJldHVybiB0cnVlIGluIHRoaXMgc2l0dWF0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlwY1Jlc3BvbnNlID0gbmV3IElQQ01lc3NhZ2UoJ3Jlc3VsdCcsIHJlc3VsdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IGlmIHRoZSByZXN1bHQgaXMgYSBwcm9taXNlLCBhd2FpdCB0aGUgcHJvbWlzZS4uLlxuXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2cuZXJyb3IoXCJFbmNvdW50ZXJlZCBlcnJvciB3aXRoIGhhbmRsZXI6IFwiLCBlcnIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXRjaCBhbnkgZXhjZXB0aW9ucyBzbyB0aGF0IGhhbmRsZXJzIGRvbid0IGhhdmUgdG8gYmVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlc3BvbnNpYmxlIGZvciBlcnJvciBoYW5kbGluZyBieSBkZWZhdWx0LlxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpcGNSZXNwb25zZSA9IElQQ01lc3NhZ2UuY3JlYXRlRXJyb3IoJ2Vycm9yJywgSVBDRXJyb3IuY3JlYXRlKGVycikpO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBldmVudC5yZXNwb25zZVBpcGUud3JpdGUoJy9pcGMtdHJhY2UnLCBuZXcgSVBDTWVzc2FnZSgndHJhY2UnLCB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXF1ZXN0OiBpcGNSZXF1ZXN0LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmVzcG9uc2U6IGlwY1Jlc3BvbnNlXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pKTtcblxuICAgICAgICAgICAgICAgICAgICBldmVudC5yZXNwb25zZVBpcGUud3JpdGUoaXBjUmVxdWVzdC5jb21wdXRlUmVzcG9uc2VDaGFubmVsKCksIGlwY1Jlc3BvbnNlKTtcblxuICAgICAgICAgICAgICAgIH0pKCkuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihgVW5hYmxlIHRvIGhhbmRsZSBJUEMgYXQgJHtpcGNSZWdpc3RyYXRpb24ucGF0aH06IGAsIGVycikpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgIH1cblxufVxuIl19