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
const IPCHandler_1 = require("../../../ipc/handler/IPCHandler");
const PostMessageFormHandler_1 = require("../flashcards/PostMessageFormHandler");
const Logger_1 = require("../../../logger/Logger");
const log = Logger_1.Logger.create();
class CreateFlashcardHandler extends IPCHandler_1.IPCHandler {
    constructor(createFlashcardForm) {
        super();
        this.createFlashcardForm = createFlashcardForm;
    }
    createValue(ipcMessage) {
        return ipcMessage;
    }
    handleIPC(event, request) {
        return __awaiter(this, void 0, void 0, function* () {
            let context = request.context;
            let annotationDescriptor = request.value;
            return new Promise((resolve, reject) => {
                log.info("Creating new post message for connected to annotation annotationDescriptor: ", annotationDescriptor);
                let completion = {
                    resolve,
                    reject
                };
                this.createFlashcardForm.formHandler = new PostMessageFormHandler_1.PostMessageFormHandler(annotationDescriptor, context, completion);
                this.createFlashcardForm.render();
            });
        });
    }
}
exports.CreateFlashcardHandler = CreateFlashcardHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlRmxhc2hjYXJkSGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNyZWF0ZUZsYXNoY2FyZEhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLGdFQUEyRDtBQUkzRCxpRkFBNEU7QUFDNUUsbURBQThDO0FBRzlDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLHNCQUF1QixTQUFRLHVCQUE0QztJQUlwRixZQUFZLG1CQUF3QztRQUNoRCxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxtQkFBbUIsQ0FBQztJQUNuRCxDQUFDO0lBRVMsV0FBVyxDQUFDLFVBQTJCO1FBQzdDLE9BQU8sVUFBVSxDQUFDO0lBQ3RCLENBQUM7SUFFZSxTQUFTLENBQUMsS0FBZSxFQUFFLE9BQXlDOztZQUVoRixJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQzlCLElBQUksb0JBQW9CLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUV6QyxPQUFPLElBQUksT0FBTyxDQUFVLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUU1QyxHQUFHLENBQUMsSUFBSSxDQUFDLDhFQUE4RSxFQUFFLG9CQUFvQixDQUFDLENBQUM7Z0JBRS9HLElBQUksVUFBVSxHQUF3QjtvQkFDbEMsT0FBTztvQkFDUCxNQUFNO2lCQUNULENBQUM7Z0JBRUYsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsR0FBRyxJQUFJLCtDQUFzQixDQUFDLG9CQUFvQixFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztnQkFFN0csSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRXRDLENBQUMsQ0FBQyxDQUFDO1FBRVAsQ0FBQztLQUFBO0NBRUo7QUFuQ0Qsd0RBbUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDcmVhdGVGbGFzaGNhcmRGb3JtfSBmcm9tICcuLi9lbGVtZW50cy9zY2hlbWFmb3JtL0NyZWF0ZUZsYXNoY2FyZEZvcm0nO1xuaW1wb3J0IHtJUENIYW5kbGVyfSBmcm9tICcuLi8uLi8uLi9pcGMvaGFuZGxlci9JUENIYW5kbGVyJztcbmltcG9ydCB7QW5ub3RhdGlvbkRlc2NyaXB0b3J9IGZyb20gJy4uLy4uLy4uL21ldGFkYXRhL0Fubm90YXRpb25EZXNjcmlwdG9yJztcbmltcG9ydCB7SVBDRXZlbnR9IGZyb20gJy4uLy4uLy4uL2lwYy9oYW5kbGVyL0lQQ0V2ZW50JztcbmltcG9ydCB7SVBDTWVzc2FnZX0gZnJvbSAnLi4vLi4vLi4vaXBjL2hhbmRsZXIvSVBDTWVzc2FnZSc7XG5pbXBvcnQge1Bvc3RNZXNzYWdlRm9ybUhhbmRsZXJ9IGZyb20gJy4uL2ZsYXNoY2FyZHMvUG9zdE1lc3NhZ2VGb3JtSGFuZGxlcic7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vLi4vLi4vbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0NvbXBsZXRpb259IGZyb20gJy4uLy4uLy4uL3V0aWwvUHJvbWlzZXMnO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVGbGFzaGNhcmRIYW5kbGVyIGV4dGVuZHMgSVBDSGFuZGxlcjxJUENNZXNzYWdlPEFubm90YXRpb25EZXNjcmlwdG9yPj4ge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBjcmVhdGVGbGFzaGNhcmRGb3JtOiBDcmVhdGVGbGFzaGNhcmRGb3JtO1xuXG4gICAgY29uc3RydWN0b3IoY3JlYXRlRmxhc2hjYXJkRm9ybTogQ3JlYXRlRmxhc2hjYXJkRm9ybSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNyZWF0ZUZsYXNoY2FyZEZvcm0gPSBjcmVhdGVGbGFzaGNhcmRGb3JtO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVWYWx1ZShpcGNNZXNzYWdlOiBJUENNZXNzYWdlPGFueT4pOiBJUENNZXNzYWdlPEFubm90YXRpb25EZXNjcmlwdG9yPiB7XG4gICAgICAgIHJldHVybiBpcGNNZXNzYWdlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhc3luYyBoYW5kbGVJUEMoZXZlbnQ6IElQQ0V2ZW50LCByZXF1ZXN0OiBJUENNZXNzYWdlPEFubm90YXRpb25EZXNjcmlwdG9yPik6IFByb21pc2U8YW55PiB7XG5cbiAgICAgICAgbGV0IGNvbnRleHQgPSByZXF1ZXN0LmNvbnRleHQ7XG4gICAgICAgIGxldCBhbm5vdGF0aW9uRGVzY3JpcHRvciA9IHJlcXVlc3QudmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgICAgICAgbG9nLmluZm8oXCJDcmVhdGluZyBuZXcgcG9zdCBtZXNzYWdlIGZvciBjb25uZWN0ZWQgdG8gYW5ub3RhdGlvbiBhbm5vdGF0aW9uRGVzY3JpcHRvcjogXCIsIGFubm90YXRpb25EZXNjcmlwdG9yKTtcblxuICAgICAgICAgICAgbGV0IGNvbXBsZXRpb246IENvbXBsZXRpb248Ym9vbGVhbj4gPSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICByZWplY3RcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRmxhc2hjYXJkRm9ybS5mb3JtSGFuZGxlciA9IG5ldyBQb3N0TWVzc2FnZUZvcm1IYW5kbGVyKGFubm90YXRpb25EZXNjcmlwdG9yLCBjb250ZXh0LCBjb21wbGV0aW9uKTtcblxuICAgICAgICAgICAgdGhpcy5jcmVhdGVGbGFzaGNhcmRGb3JtLnJlbmRlcigpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG59XG4iXX0=