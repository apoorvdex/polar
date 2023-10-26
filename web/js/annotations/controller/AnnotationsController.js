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
const DialogWindow_1 = require("../../ui/dialog_window/DialogWindow");
const DialogWindowClient_1 = require("../../ui/dialog_window/DialogWindowClient");
const Logger_1 = require("../../logger/Logger");
const TriggerEvent_1 = require("../../contextmenu/TriggerEvent");
const Nullable_1 = require("../../util/ts/Nullable");
const AnnotationTriggerEvents_1 = require("./AnnotationTriggerEvents");
const Toaster_1 = require("../../ui/toaster/Toaster");
const log = Logger_1.Logger.create();
class AnnotationsController {
    constructor() {
        this.flashcardDialogWindow = new Nullable_1.Nullable();
        this.ipcClient = new Nullable_1.Nullable();
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            window.addEventListener("message", event => this.onMessageReceived(event), false);
            const dialogWindowClient = yield this.createDialogWindow();
            this.flashcardDialogWindow.set(dialogWindowClient);
            this.ipcClient.set(dialogWindowClient.createClient());
        });
    }
    onMessageReceived(event) {
        const data = event.data;
        if (data) {
            if (data.type === 'add-flashcard') {
                const triggerEvent = TriggerEvent_1.TriggerEvent.create(event.data);
                log.info("Creating flashcard from trigger event: ", triggerEvent);
                this.createFlashcard(triggerEvent)
                    .catch(err => log.error("Could not create flashcard: ", err));
            }
        }
    }
    createFlashcard(triggerEvent) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.showDialog();
            yield this.sendAnnotationDescriptor(triggerEvent);
        });
    }
    sendAnnotationDescriptor(triggerEvent) {
        return __awaiter(this, void 0, void 0, function* () {
            log.info("Sending annotation descriptor...");
            const annotationDescriptors = AnnotationTriggerEvents_1.AnnotationTriggerEvents.getAnnotationDescriptors(triggerEvent);
            if (annotationDescriptors.length === 0) {
                log.warn("No annotation descriptors.");
                return;
            }
            const annotationDescriptor = annotationDescriptors[0];
            yield this.ipcClient.get().execute('/create-flashcard/api/create', annotationDescriptor);
            log.info("Flashcard created!");
            yield this.hideDialog();
            Toaster_1.Toaster.success("New flashcard created.");
        });
    }
    showDialog() {
        return __awaiter(this, void 0, void 0, function* () {
            log.info("Showing dialog...");
            yield this.flashcardDialogWindow.get().show();
            log.info("Showing dialog...done");
        });
    }
    hideDialog() {
        return __awaiter(this, void 0, void 0, function* () {
            log.info("Hiding dialog...");
            yield this.flashcardDialogWindow.get().hide();
            log.info("Hiding dialog...done");
        });
    }
    createDialogWindow() {
        return __awaiter(this, void 0, void 0, function* () {
            let appPath = "./apps/card-creator/index.html";
            let resource = new DialogWindow_1.Resource(DialogWindow_1.ResourceType.FILE, appPath);
            let options = new DialogWindow_1.DialogWindowOptions(resource, 700, 900);
            options.show = false;
            return yield DialogWindowClient_1.DialogWindowClient.create(options);
        });
    }
}
exports.AnnotationsController = AnnotationsController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ub3RhdGlvbnNDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQW5ub3RhdGlvbnNDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzRUFBZ0c7QUFDaEcsa0ZBQTZFO0FBQzdFLGdEQUEyQztBQUMzQyxpRUFBNEQ7QUFDNUQscURBQWdEO0FBQ2hELHVFQUFrRTtBQUdsRSxzREFBaUQ7QUFFakQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBUTVCLE1BQWEscUJBQXFCO0lBQWxDO1FBRUksMEJBQXFCLEdBQUcsSUFBSSxtQkFBUSxFQUFzQixDQUFDO1FBRTNELGNBQVMsR0FBRyxJQUFJLG1CQUFRLEVBQXVCLENBQUM7SUFnR3BELENBQUM7SUE5RmdCLEtBQUs7O1lBRWQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUVsRixNQUFNLGtCQUFrQixHQUFHLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDM0QsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBRW5ELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7UUFFMUQsQ0FBQztLQUFBO0lBRU8saUJBQWlCLENBQUMsS0FBVTtRQUVoQyxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBTXhCLElBQUksSUFBSSxFQUFFO1lBRU4sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLGVBQWUsRUFBRTtnQkFFL0IsTUFBTSxZQUFZLEdBQUcsMkJBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUVyRCxHQUFHLENBQUMsSUFBSSxDQUFDLHlDQUF5QyxFQUFFLFlBQVksQ0FBQyxDQUFDO2dCQUVsRSxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQztxQkFDN0IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBRXJFO1NBRUo7SUFFTCxDQUFDO0lBS2EsZUFBZSxDQUFDLFlBQTBCOztZQUVwRCxNQUFNLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUN4QixNQUFNLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUV0RCxDQUFDO0tBQUE7SUFFYSx3QkFBd0IsQ0FBQyxZQUEwQjs7WUFFN0QsR0FBRyxDQUFDLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1lBRTdDLE1BQU0scUJBQXFCLEdBQ3JCLGlEQUF1QixDQUFDLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxDQUFDO1lBRXJFLElBQUkscUJBQXFCLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDcEMsR0FBRyxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO2dCQUN2QyxPQUFPO2FBQ1Y7WUFFRCxNQUFNLG9CQUFvQixHQUFHLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXRELE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztZQUV6RixHQUFHLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFFL0IsTUFBTSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFFeEIsaUJBQU8sQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUU5QyxDQUFDO0tBQUE7SUFFYSxVQUFVOztZQUNwQixHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDOUIsTUFBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDOUMsR0FBRyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7S0FBQTtJQUVhLFVBQVU7O1lBQ3BCLEdBQUcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUM3QixNQUFNLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM5QyxHQUFHLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDckMsQ0FBQztLQUFBO0lBRWEsa0JBQWtCOztZQUU1QixJQUFJLE9BQU8sR0FBRyxnQ0FBZ0MsQ0FBQztZQUUvQyxJQUFJLFFBQVEsR0FBRyxJQUFJLHVCQUFRLENBQUMsMkJBQVksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDeEQsSUFBSSxPQUFPLEdBQUcsSUFBSSxrQ0FBbUIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzFELE9BQU8sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1lBRXJCLE9BQU8sTUFBTSx1Q0FBa0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFcEQsQ0FBQztLQUFBO0NBRUo7QUFwR0Qsc0RBb0dDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaWFsb2dXaW5kb3dPcHRpb25zLCBSZXNvdXJjZSwgUmVzb3VyY2VUeXBlfSBmcm9tICcuLi8uLi91aS9kaWFsb2dfd2luZG93L0RpYWxvZ1dpbmRvdyc7XG5pbXBvcnQge0RpYWxvZ1dpbmRvd0NsaWVudH0gZnJvbSAnLi4vLi4vdWkvZGlhbG9nX3dpbmRvdy9EaWFsb2dXaW5kb3dDbGllbnQnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uLy4uL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtUcmlnZ2VyRXZlbnR9IGZyb20gJy4uLy4uL2NvbnRleHRtZW51L1RyaWdnZXJFdmVudCc7XG5pbXBvcnQge051bGxhYmxlfSBmcm9tICcuLi8uLi91dGlsL3RzL051bGxhYmxlJztcbmltcG9ydCB7QW5ub3RhdGlvblRyaWdnZXJFdmVudHN9IGZyb20gJy4vQW5ub3RhdGlvblRyaWdnZXJFdmVudHMnO1xuaW1wb3J0IHtJUENDbGllbnR9IGZyb20gJy4uLy4uL2lwYy9oYW5kbGVyL0lQQ0NsaWVudCc7XG5pbXBvcnQge0lQQ0V2ZW50fSBmcm9tICcuLi8uLi9pcGMvaGFuZGxlci9JUENFdmVudCc7XG5pbXBvcnQge1RvYXN0ZXJ9IGZyb20gJy4uLy4uL3VpL3RvYXN0ZXIvVG9hc3Rlcic7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuLyoqXG4gKiBDb250cm9sbGVyIHVzZWQgdG8gbGlzdGVuIGZvciB0aGUgY29udGV4dCBtZW51IChhbmQga2V5IGJpbmRpbmdzKSBmb3JcbiAqIGNyZWF0aW5nIHNwZWNpZmljIGFubm90YXRpb24gdHlwZXMuXG4gKlxuICogQEVsZWN0cm9uTWFpbkNvbnRleHRcbiAqL1xuZXhwb3J0IGNsYXNzIEFubm90YXRpb25zQ29udHJvbGxlciB7XG5cbiAgICBmbGFzaGNhcmREaWFsb2dXaW5kb3cgPSBuZXcgTnVsbGFibGU8RGlhbG9nV2luZG93Q2xpZW50PigpO1xuXG4gICAgaXBjQ2xpZW50ID0gbmV3IE51bGxhYmxlPElQQ0NsaWVudDxJUENFdmVudD4+KCk7XG5cbiAgICBwdWJsaWMgYXN5bmMgc3RhcnQoKTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGV2ZW50ID0+IHRoaXMub25NZXNzYWdlUmVjZWl2ZWQoZXZlbnQpLCBmYWxzZSk7XG5cbiAgICAgICAgY29uc3QgZGlhbG9nV2luZG93Q2xpZW50ID0gYXdhaXQgdGhpcy5jcmVhdGVEaWFsb2dXaW5kb3coKTtcbiAgICAgICAgdGhpcy5mbGFzaGNhcmREaWFsb2dXaW5kb3cuc2V0KGRpYWxvZ1dpbmRvd0NsaWVudCk7XG5cbiAgICAgICAgdGhpcy5pcGNDbGllbnQuc2V0KGRpYWxvZ1dpbmRvd0NsaWVudC5jcmVhdGVDbGllbnQoKSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uTWVzc2FnZVJlY2VpdmVkKGV2ZW50OiBhbnkpIHtcblxuICAgICAgICBjb25zdCBkYXRhID0gZXZlbnQuZGF0YTtcblxuICAgICAgICAvLyBUT0RPOiByZWZhY3RvciB0aGlzIHRvIHVzZSBJUEMgYW5kIG1ha2UgdGhlIGFwaSBoYXZlXG4gICAgICAgIC8vIC9hcGkvY29udGV4dC1tZW51IGluIGl0IHNvIHRoYXQgaXQncyBvYnZpb3VzIHRoYXQgd2UncmUgcmVzcG9uZGluZ1xuICAgICAgICAvLyB0byBjb250ZXh0IG1lbnUgZXZlbnRzXG5cbiAgICAgICAgaWYgKGRhdGEpIHtcblxuICAgICAgICAgICAgaWYgKGRhdGEudHlwZSA9PT0gJ2FkZC1mbGFzaGNhcmQnKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0cmlnZ2VyRXZlbnQgPSBUcmlnZ2VyRXZlbnQuY3JlYXRlKGV2ZW50LmRhdGEpO1xuXG4gICAgICAgICAgICAgICAgbG9nLmluZm8oXCJDcmVhdGluZyBmbGFzaGNhcmQgZnJvbSB0cmlnZ2VyIGV2ZW50OiBcIiwgdHJpZ2dlckV2ZW50KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlRmxhc2hjYXJkKHRyaWdnZXJFdmVudClcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJDb3VsZCBub3QgY3JlYXRlIGZsYXNoY2FyZDogXCIsIGVycikpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGZsYXNoY2FyZC5cbiAgICAgKi9cbiAgICBwcml2YXRlIGFzeW5jIGNyZWF0ZUZsYXNoY2FyZCh0cmlnZ2VyRXZlbnQ6IFRyaWdnZXJFdmVudCkge1xuXG4gICAgICAgIGF3YWl0IHRoaXMuc2hvd0RpYWxvZygpO1xuICAgICAgICBhd2FpdCB0aGlzLnNlbmRBbm5vdGF0aW9uRGVzY3JpcHRvcih0cmlnZ2VyRXZlbnQpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBzZW5kQW5ub3RhdGlvbkRlc2NyaXB0b3IodHJpZ2dlckV2ZW50OiBUcmlnZ2VyRXZlbnQpIHtcblxuICAgICAgICBsb2cuaW5mbyhcIlNlbmRpbmcgYW5ub3RhdGlvbiBkZXNjcmlwdG9yLi4uXCIpO1xuXG4gICAgICAgIGNvbnN0IGFubm90YXRpb25EZXNjcmlwdG9yc1xuICAgICAgICAgICAgPSBBbm5vdGF0aW9uVHJpZ2dlckV2ZW50cy5nZXRBbm5vdGF0aW9uRGVzY3JpcHRvcnModHJpZ2dlckV2ZW50KTtcblxuICAgICAgICBpZiAoYW5ub3RhdGlvbkRlc2NyaXB0b3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgbG9nLndhcm4oXCJObyBhbm5vdGF0aW9uIGRlc2NyaXB0b3JzLlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFubm90YXRpb25EZXNjcmlwdG9yID0gYW5ub3RhdGlvbkRlc2NyaXB0b3JzWzBdO1xuXG4gICAgICAgIGF3YWl0IHRoaXMuaXBjQ2xpZW50LmdldCgpLmV4ZWN1dGUoJy9jcmVhdGUtZmxhc2hjYXJkL2FwaS9jcmVhdGUnLCBhbm5vdGF0aW9uRGVzY3JpcHRvcik7XG5cbiAgICAgICAgbG9nLmluZm8oXCJGbGFzaGNhcmQgY3JlYXRlZCFcIik7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5oaWRlRGlhbG9nKCk7XG5cbiAgICAgICAgVG9hc3Rlci5zdWNjZXNzKFwiTmV3IGZsYXNoY2FyZCBjcmVhdGVkLlwiKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgc2hvd0RpYWxvZygpIHtcbiAgICAgICAgbG9nLmluZm8oXCJTaG93aW5nIGRpYWxvZy4uLlwiKTtcbiAgICAgICAgYXdhaXQgdGhpcy5mbGFzaGNhcmREaWFsb2dXaW5kb3cuZ2V0KCkuc2hvdygpO1xuICAgICAgICBsb2cuaW5mbyhcIlNob3dpbmcgZGlhbG9nLi4uZG9uZVwiKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGhpZGVEaWFsb2coKSB7XG4gICAgICAgIGxvZy5pbmZvKFwiSGlkaW5nIGRpYWxvZy4uLlwiKTtcbiAgICAgICAgYXdhaXQgdGhpcy5mbGFzaGNhcmREaWFsb2dXaW5kb3cuZ2V0KCkuaGlkZSgpO1xuICAgICAgICBsb2cuaW5mbyhcIkhpZGluZyBkaWFsb2cuLi5kb25lXCIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgY3JlYXRlRGlhbG9nV2luZG93KCk6IFByb21pc2U8RGlhbG9nV2luZG93Q2xpZW50PiB7XG5cbiAgICAgICAgbGV0IGFwcFBhdGggPSBcIi4vYXBwcy9jYXJkLWNyZWF0b3IvaW5kZXguaHRtbFwiO1xuXG4gICAgICAgIGxldCByZXNvdXJjZSA9IG5ldyBSZXNvdXJjZShSZXNvdXJjZVR5cGUuRklMRSwgYXBwUGF0aCk7XG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IERpYWxvZ1dpbmRvd09wdGlvbnMocmVzb3VyY2UsIDcwMCwgOTAwKTtcbiAgICAgICAgb3B0aW9ucy5zaG93ID0gZmFsc2U7XG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IERpYWxvZ1dpbmRvd0NsaWVudC5jcmVhdGUob3B0aW9ucyk7XG5cbiAgICB9XG5cbn1cbiJdfQ==