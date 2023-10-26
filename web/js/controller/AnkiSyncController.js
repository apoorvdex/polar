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
const Logger_1 = require("../logger/Logger");
const Strings_1 = require("../util/Strings");
const Toaster_1 = require("../ui/toaster/Toaster");
const DialogWindowClient_1 = require("../ui/dialog_window/DialogWindowClient");
const DialogWindow_1 = require("../ui/dialog_window/DialogWindow");
const DocInfos_1 = require("../metadata/DocInfos");
const log = Logger_1.Logger.create();
class AnkiSyncController {
    constructor(model) {
        this.model = model;
    }
    start() {
        window.addEventListener("message", event => this.onMessageReceived(event), false);
    }
    onMessageReceived(event) {
        log.info("Received message: ", event);
        const triggerEvent = event.data;
        switch (event.data.type) {
            case "start-sync":
                this.onStartSync(triggerEvent)
                    .catch(err => log.error("Failed to start sync: ", err));
                break;
        }
    }
    onStartSync(triggerEvent) {
        return __awaiter(this, void 0, void 0, function* () {
            log.info("Starting sync...");
            const title = DocInfos_1.DocInfos.bestTitle(this.model.docMeta.docInfo);
            if (Strings_1.Strings.empty(title)) {
                Toaster_1.Toaster.error("Documents must have titles before we can synchronize.");
                return;
            }
            const resource = new DialogWindow_1.Resource(DialogWindow_1.ResourceType.APP, "./apps/sync/index.html?fingerprint=" + this.model.docMeta.docInfo.fingerprint);
            const dialogWindowClient = yield DialogWindowClient_1.DialogWindowClient.create(new DialogWindow_1.DialogWindowOptions(resource));
            yield dialogWindowClient.show();
        });
    }
}
exports.AnkiSyncController = AnkiSyncController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5raVN5bmNDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQW5raVN5bmNDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSw2Q0FBd0M7QUFFeEMsNkNBQXdDO0FBQ3hDLG1EQUE4QztBQUM5QywrRUFBMEU7QUFDMUUsbUVBQTZGO0FBQzdGLG1EQUE4QztBQUU5QyxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFLNUIsTUFBYSxrQkFBa0I7SUFJM0IsWUFBWSxLQUFZO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxLQUFLO1FBRVIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUV0RixDQUFDO0lBRU8saUJBQWlCLENBQUMsS0FBVTtRQUVoQyxHQUFHLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXRDLE1BQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFFaEMsUUFBUSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUVyQixLQUFLLFlBQVk7Z0JBQ2IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUM7cUJBQ3pCLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFFNUQsTUFBTTtTQUViO0lBRUwsQ0FBQztJQUVhLFdBQVcsQ0FBQyxZQUEwQjs7WUFFaEQsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBSTdCLE1BQU0sS0FBSyxHQUFHLG1CQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRTdELElBQUksaUJBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3RCLGlCQUFPLENBQUMsS0FBSyxDQUFDLHVEQUF1RCxDQUFDLENBQUM7Z0JBQ3ZFLE9BQU87YUFDVjtZQUVELE1BQU0sUUFBUSxHQUFHLElBQUksdUJBQVEsQ0FBQywyQkFBWSxDQUFDLEdBQUcsRUFBRSxxQ0FBcUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFaEksTUFBTSxrQkFBa0IsR0FBRyxNQUFNLHVDQUFrQixDQUFDLE1BQU0sQ0FBQyxJQUFJLGtDQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDOUYsTUFBTSxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVwQyxDQUFDO0tBQUE7Q0FFSjtBQXBERCxnREFvREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RyaWdnZXJFdmVudH0gZnJvbSAnLi4vY29udGV4dG1lbnUvVHJpZ2dlckV2ZW50JztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7TW9kZWx9IGZyb20gJy4uL21vZGVsL01vZGVsJztcbmltcG9ydCB7U3RyaW5nc30gZnJvbSAnLi4vdXRpbC9TdHJpbmdzJztcbmltcG9ydCB7VG9hc3Rlcn0gZnJvbSAnLi4vdWkvdG9hc3Rlci9Ub2FzdGVyJztcbmltcG9ydCB7RGlhbG9nV2luZG93Q2xpZW50fSBmcm9tICcuLi91aS9kaWFsb2dfd2luZG93L0RpYWxvZ1dpbmRvd0NsaWVudCc7XG5pbXBvcnQge0RpYWxvZ1dpbmRvd09wdGlvbnMsIFJlc291cmNlLCBSZXNvdXJjZVR5cGV9IGZyb20gJy4uL3VpL2RpYWxvZ193aW5kb3cvRGlhbG9nV2luZG93JztcbmltcG9ydCB7RG9jSW5mb3N9IGZyb20gJy4uL21ldGFkYXRhL0RvY0luZm9zJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG4vKipcbiAqIEBEZXByZWNhdGVkIG1pZ3JhdGluZyB0byBEb2NSZXBvQW5raVN5bmNDb250cm9sbGVyXG4gKi9cbmV4cG9ydCBjbGFzcyBBbmtpU3luY0NvbnRyb2xsZXIge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBtb2RlbDogTW9kZWw7XG5cbiAgICBjb25zdHJ1Y3Rvcihtb2RlbDogTW9kZWwpIHtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGFydCgpIHtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgZXZlbnQgPT4gdGhpcy5vbk1lc3NhZ2VSZWNlaXZlZChldmVudCksIGZhbHNlKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25NZXNzYWdlUmVjZWl2ZWQoZXZlbnQ6IGFueSkge1xuXG4gICAgICAgIGxvZy5pbmZvKFwiUmVjZWl2ZWQgbWVzc2FnZTogXCIsIGV2ZW50KTtcblxuICAgICAgICBjb25zdCB0cmlnZ2VyRXZlbnQgPSBldmVudC5kYXRhO1xuXG4gICAgICAgIHN3aXRjaCAoZXZlbnQuZGF0YS50eXBlKSB7XG5cbiAgICAgICAgICAgIGNhc2UgXCJzdGFydC1zeW5jXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5vblN0YXJ0U3luYyh0cmlnZ2VyRXZlbnQpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gbG9nLmVycm9yKFwiRmFpbGVkIHRvIHN0YXJ0IHN5bmM6IFwiLCBlcnIpKTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgb25TdGFydFN5bmModHJpZ2dlckV2ZW50OiBUcmlnZ2VyRXZlbnQpIHtcblxuICAgICAgICBsb2cuaW5mbyhcIlN0YXJ0aW5nIHN5bmMuLi5cIik7XG5cbiAgICAgICAgLy8gVE9ETzogdmVyaWZ5IHRoYXQgdGhlIGRvY3VtZW50IGhhcyBhIHRpdGxlLlxuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gRG9jSW5mb3MuYmVzdFRpdGxlKHRoaXMubW9kZWwuZG9jTWV0YS5kb2NJbmZvKTtcblxuICAgICAgICBpZiAoU3RyaW5ncy5lbXB0eSh0aXRsZSkpIHtcbiAgICAgICAgICAgIFRvYXN0ZXIuZXJyb3IoXCJEb2N1bWVudHMgbXVzdCBoYXZlIHRpdGxlcyBiZWZvcmUgd2UgY2FuIHN5bmNocm9uaXplLlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc291cmNlID0gbmV3IFJlc291cmNlKFJlc291cmNlVHlwZS5BUFAsIFwiLi9hcHBzL3N5bmMvaW5kZXguaHRtbD9maW5nZXJwcmludD1cIiArIHRoaXMubW9kZWwuZG9jTWV0YS5kb2NJbmZvLmZpbmdlcnByaW50KTtcblxuICAgICAgICBjb25zdCBkaWFsb2dXaW5kb3dDbGllbnQgPSBhd2FpdCBEaWFsb2dXaW5kb3dDbGllbnQuY3JlYXRlKG5ldyBEaWFsb2dXaW5kb3dPcHRpb25zKHJlc291cmNlKSk7XG4gICAgICAgIGF3YWl0IGRpYWxvZ1dpbmRvd0NsaWVudC5zaG93KCk7XG5cbiAgICB9XG5cbn1cbiJdfQ==