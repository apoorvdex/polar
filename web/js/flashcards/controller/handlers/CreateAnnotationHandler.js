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
const AnnotationContainer_1 = require("../../../metadata/AnnotationContainer");
const Logger_1 = require("../../../logger/Logger");
const AnnotationType_1 = require("../../../metadata/AnnotationType");
const Flashcard_1 = require("../../../metadata/Flashcard");
const log = Logger_1.Logger.create();
class CreateAnnotationHandler extends IPCHandler_1.IPCHandler {
    constructor(model) {
        super();
        this.model = model;
    }
    createValue(ipcMessage) {
        return new AnnotationContainer_1.AnnotationContainer(ipcMessage.value);
    }
    handleIPC(event, annotationContainer) {
        return __awaiter(this, void 0, void 0, function* () {
            log.info("Got create annotation message: ", annotationContainer);
            const descriptor = annotationContainer.descriptor;
            if (descriptor.type === AnnotationType_1.AnnotationType.FLASHCARD) {
                const flashcard = new Flashcard_1.Flashcard(annotationContainer.value);
                if (descriptor.docFingerprint === this.model.docMeta.docInfo.fingerprint) {
                    log.info("Going to add this flashcard to the model");
                    let pageMeta = this.model.docMeta.getPageMeta(descriptor.pageNum);
                    pageMeta.flashcards[flashcard.id] = flashcard;
                }
                else {
                    log.info(`Ignoring flashcard.  ${descriptor.docFingerprint} != ${this.model.docMeta.docInfo.fingerprint}`);
                }
            }
            else {
                log.info("Wrong annotation type: ", descriptor.type);
            }
            return undefined;
        });
    }
}
exports.CreateAnnotationHandler = CreateAnnotationHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlQW5ub3RhdGlvbkhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDcmVhdGVBbm5vdGF0aW9uSGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELCtFQUEwRTtBQUkxRSxtREFBOEM7QUFDOUMscUVBQWdFO0FBRWhFLDJEQUFzRDtBQUd0RCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFNNUIsTUFBYSx1QkFBd0IsU0FBUSx1QkFBMkM7SUFJcEYsWUFBWSxLQUFZO1FBQ3BCLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVTLFdBQVcsQ0FBQyxVQUEyQjtRQUM3QyxPQUFPLElBQUkseUNBQW1CLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFZSxTQUFTLENBQUMsS0FBZSxFQUFFLG1CQUFvRDs7WUFFM0YsR0FBRyxDQUFDLElBQUksQ0FBQyxpQ0FBaUMsRUFBRSxtQkFBbUIsQ0FBRSxDQUFDO1lBRWxFLE1BQU0sVUFBVSxHQUFHLG1CQUFtQixDQUFDLFVBQVUsQ0FBQztZQUVsRCxJQUFJLFVBQVUsQ0FBQyxJQUFJLEtBQUssK0JBQWMsQ0FBQyxTQUFTLEVBQUU7Z0JBRTlDLE1BQU0sU0FBUyxHQUFHLElBQUkscUJBQVMsQ0FBYSxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFdkUsSUFBSSxVQUFVLENBQUMsY0FBYyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUU7b0JBRXRFLEdBQUcsQ0FBQyxJQUFJLENBQUMsMENBQTBDLENBQUMsQ0FBQztvQkFFckQsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFLbEUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDO2lCQUtqRDtxQkFBTTtvQkFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLHdCQUF3QixVQUFVLENBQUMsY0FBYyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFBO2lCQUM3RzthQUVKO2lCQUFNO2dCQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMseUJBQXlCLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3hEO1lBRUQsT0FBTyxTQUFTLENBQUM7UUFFckIsQ0FBQztLQUFBO0NBRUo7QUFqREQsMERBaURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJUENIYW5kbGVyfSBmcm9tICcuLi8uLi8uLi9pcGMvaGFuZGxlci9JUENIYW5kbGVyJztcbmltcG9ydCB7QW5ub3RhdGlvbkNvbnRhaW5lcn0gZnJvbSAnLi4vLi4vLi4vbWV0YWRhdGEvQW5ub3RhdGlvbkNvbnRhaW5lcic7XG5pbXBvcnQge0Fubm90YXRpb259IGZyb20gJy4uLy4uLy4uL21ldGFkYXRhL0Fubm90YXRpb24nO1xuaW1wb3J0IHtJUENNZXNzYWdlfSBmcm9tICcuLi8uLi8uLi9pcGMvaGFuZGxlci9JUENNZXNzYWdlJztcbmltcG9ydCB7SVBDRXZlbnR9IGZyb20gJy4uLy4uLy4uL2lwYy9oYW5kbGVyL0lQQ0V2ZW50JztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi8uLi9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7QW5ub3RhdGlvblR5cGV9IGZyb20gJy4uLy4uLy4uL21ldGFkYXRhL0Fubm90YXRpb25UeXBlJztcbmltcG9ydCB7TW9kZWx9IGZyb20gJy4uLy4uLy4uL21vZGVsL01vZGVsJztcbmltcG9ydCB7Rmxhc2hjYXJkfSBmcm9tICcuLi8uLi8uLi9tZXRhZGF0YS9GbGFzaGNhcmQnO1xuaW1wb3J0IHtUb2FzdGVyfSBmcm9tICcuLi8uLi8uLi91aS90b2FzdGVyL1RvYXN0ZXInO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbi8qKlxuICogQ2FsbGVkIHdoZW4gdGhlIGNvbnRleHQgbWVudSB0b2xkIHVzIHRvIGNyZWF0ZSBhIG5ldyBmbGFzaGNhcmQuICBPdXIgam9iXG4gKiBpcyB0byByZXNldCB0aGUgZm9ybSBmaXJzdC5cbiAqL1xuZXhwb3J0IGNsYXNzIENyZWF0ZUFubm90YXRpb25IYW5kbGVyIGV4dGVuZHMgSVBDSGFuZGxlcjxBbm5vdGF0aW9uQ29udGFpbmVyPEFubm90YXRpb24+PiB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IG1vZGVsOiBNb2RlbDtcblxuICAgIGNvbnN0cnVjdG9yKG1vZGVsOiBNb2RlbCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVZhbHVlKGlwY01lc3NhZ2U6IElQQ01lc3NhZ2U8YW55Pik6IEFubm90YXRpb25Db250YWluZXI8QW5ub3RhdGlvbj4ge1xuICAgICAgICByZXR1cm4gbmV3IEFubm90YXRpb25Db250YWluZXIoaXBjTWVzc2FnZS52YWx1ZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFzeW5jIGhhbmRsZUlQQyhldmVudDogSVBDRXZlbnQsIGFubm90YXRpb25Db250YWluZXI6IEFubm90YXRpb25Db250YWluZXI8QW5ub3RhdGlvbj4pOiBQcm9taXNlPGFueT4ge1xuXG4gICAgICAgIGxvZy5pbmZvKFwiR290IGNyZWF0ZSBhbm5vdGF0aW9uIG1lc3NhZ2U6IFwiLCBhbm5vdGF0aW9uQ29udGFpbmVyICk7XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IGFubm90YXRpb25Db250YWluZXIuZGVzY3JpcHRvcjtcblxuICAgICAgICBpZiAoZGVzY3JpcHRvci50eXBlID09PSBBbm5vdGF0aW9uVHlwZS5GTEFTSENBUkQpIHtcblxuICAgICAgICAgICAgY29uc3QgZmxhc2hjYXJkID0gbmV3IEZsYXNoY2FyZCg8Rmxhc2hjYXJkPiBhbm5vdGF0aW9uQ29udGFpbmVyLnZhbHVlKTtcblxuICAgICAgICAgICAgaWYgKGRlc2NyaXB0b3IuZG9jRmluZ2VycHJpbnQgPT09IHRoaXMubW9kZWwuZG9jTWV0YS5kb2NJbmZvLmZpbmdlcnByaW50KSB7XG5cbiAgICAgICAgICAgICAgICBsb2cuaW5mbyhcIkdvaW5nIHRvIGFkZCB0aGlzIGZsYXNoY2FyZCB0byB0aGUgbW9kZWxcIik7XG5cbiAgICAgICAgICAgICAgICBsZXQgcGFnZU1ldGEgPSB0aGlzLm1vZGVsLmRvY01ldGEuZ2V0UGFnZU1ldGEoZGVzY3JpcHRvci5wYWdlTnVtKTtcblxuICAgICAgICAgICAgICAgIC8vIEZJWE1FOiB0aGVzZSBuZWVkIHRvIGJlIGF0dGFjaGVkIHRvIHRoZSBwYXJlbnQgYW5ub3RhdGlvbiBub3RcbiAgICAgICAgICAgICAgICAvLyBzdG9yZWQgZGlyZWN0bHkgb24gdGhlIHBhZ2UuLi5cblxuICAgICAgICAgICAgICAgIHBhZ2VNZXRhLmZsYXNoY2FyZHNbZmxhc2hjYXJkLmlkXSA9IGZsYXNoY2FyZDtcblxuICAgICAgICAgICAgICAgIC8vIEZJWE1FOiBzdGljayB0aGlzIG9uIHRoZSBwcm9wZXIgcGFyZW50IC4uIHRoaXMgY291bGQgZWl0aGVyXG4gICAgICAgICAgICAgICAgLy8gYmUgYSBwYWdlIGRpcmVjdGx5IG9yIGFcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsb2cuaW5mbyhgSWdub3JpbmcgZmxhc2hjYXJkLiAgJHtkZXNjcmlwdG9yLmRvY0ZpbmdlcnByaW50fSAhPSAke3RoaXMubW9kZWwuZG9jTWV0YS5kb2NJbmZvLmZpbmdlcnByaW50fWApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvZy5pbmZvKFwiV3JvbmcgYW5ub3RhdGlvbiB0eXBlOiBcIiwgZGVzY3JpcHRvci50eXBlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICB9XG5cbn1cbiJdfQ==