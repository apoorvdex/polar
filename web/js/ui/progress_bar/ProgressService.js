"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const ProgressMessages_1 = require("./ProgressMessages");
const DeterminateProgressBar_1 = require("./DeterminateProgressBar");
const Logger_1 = require("../../logger/Logger");
const log = Logger_1.Logger.create();
class ProgressService {
    start() {
        if (electron_1.ipcRenderer) {
            electron_1.ipcRenderer.on(ProgressMessages_1.ProgressMessages.CHANNEL, (event, progressMessage) => {
                this.onProgressMessage(progressMessage);
            });
        }
        else {
            window.addEventListener("message", event => this.onMessageReceived(event), false);
        }
        log.info("started");
    }
    onMessageReceived(event) {
        log.info("Received message: ", event);
        switch (event.data.type) {
            case ProgressMessages_1.ProgressMessages.CHANNEL:
                const typedMessage = event.data;
                this.onProgressMessage(typedMessage.value);
                break;
        }
    }
    onProgressMessage(progressMessage) {
        DeterminateProgressBar_1.DeterminateProgressBar.update(progressMessage);
    }
}
exports.ProgressService = ProgressService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUHJvZ3Jlc3NTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQXFDO0FBRXJDLHlEQUFvRDtBQUNwRCxxRUFBZ0U7QUFDaEUsZ0RBQTJDO0FBRzNDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUs1QixNQUFhLGVBQWU7SUFFakIsS0FBSztRQUVSLElBQUksc0JBQVcsRUFBRTtZQUViLHNCQUFXLENBQUMsRUFBRSxDQUFDLG1DQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQTRCLEVBQzVCLGVBQWdDLEVBQUUsRUFBRTtnQkFFMUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBRTVDLENBQUMsQ0FBQyxDQUFDO1NBRU47YUFBTTtZQUlILE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FFckY7UUFFRCxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRXhCLENBQUM7SUFHTyxpQkFBaUIsQ0FBQyxLQUFVO1FBRWhDLEdBQUcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFdEMsUUFBUSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUVyQixLQUFLLG1DQUFnQixDQUFDLE9BQU87Z0JBRXpCLE1BQU0sWUFBWSxHQUFtQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUVoRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMzQyxNQUFNO1NBRWI7SUFFTCxDQUFDO0lBRU8saUJBQWlCLENBQUMsZUFBZ0M7UUFDdEQsK0NBQXNCLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Q0FFSjtBQS9DRCwwQ0ErQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2lwY1JlbmRlcmVyfSBmcm9tIFwiZWxlY3Ryb25cIjtcbmltcG9ydCB7UHJvZ3Jlc3NNZXNzYWdlfSBmcm9tIFwiLi9Qcm9ncmVzc01lc3NhZ2VcIjtcbmltcG9ydCB7UHJvZ3Jlc3NNZXNzYWdlc30gZnJvbSBcIi4vUHJvZ3Jlc3NNZXNzYWdlc1wiO1xuaW1wb3J0IHtEZXRlcm1pbmF0ZVByb2dyZXNzQmFyfSBmcm9tICcuL0RldGVybWluYXRlUHJvZ3Jlc3NCYXInO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uLy4uL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtUeXBlZE1lc3NhZ2V9IGZyb20gJy4uLy4uL3V0aWwvVHlwZWRNZXNzYWdlJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBQcm9ncmVzc1NlcnZpY2Uge1xuXG4gICAgcHVibGljIHN0YXJ0KCk6IHZvaWQge1xuXG4gICAgICAgIGlmIChpcGNSZW5kZXJlcikge1xuXG4gICAgICAgICAgICBpcGNSZW5kZXJlci5vbihQcm9ncmVzc01lc3NhZ2VzLkNIQU5ORUwsIChldmVudDogRWxlY3Ryb24uRXZlbnRFbWl0dGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NNZXNzYWdlOiBQcm9ncmVzc01lc3NhZ2UpID0+IHtcblxuICAgICAgICAgICAgICAgIHRoaXMub25Qcm9ncmVzc01lc3NhZ2UocHJvZ3Jlc3NNZXNzYWdlKTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgLy8gdGhpcyBpcyBkb25lIGluIHRoZSBicm93c2VyIHNvIHRoYXQgaXQgY2FuIHNlbmQgbWVzc2FnZXMgdG9cbiAgICAgICAgICAgIC8vIGl0c2VsZiBhYm91dCBwcm9ncmVzcy5cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBldmVudCA9PiB0aGlzLm9uTWVzc2FnZVJlY2VpdmVkKGV2ZW50KSwgZmFsc2UpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBsb2cuaW5mbyhcInN0YXJ0ZWRcIik7XG5cbiAgICB9XG5cblxuICAgIHByaXZhdGUgb25NZXNzYWdlUmVjZWl2ZWQoZXZlbnQ6IGFueSkge1xuXG4gICAgICAgIGxvZy5pbmZvKFwiUmVjZWl2ZWQgbWVzc2FnZTogXCIsIGV2ZW50KTtcblxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmRhdGEudHlwZSkge1xuXG4gICAgICAgICAgICBjYXNlIFByb2dyZXNzTWVzc2FnZXMuQ0hBTk5FTDpcblxuICAgICAgICAgICAgICAgIGNvbnN0IHR5cGVkTWVzc2FnZSA9IDxUeXBlZE1lc3NhZ2U8UHJvZ3Jlc3NNZXNzYWdlPj4gZXZlbnQuZGF0YTtcblxuICAgICAgICAgICAgICAgIHRoaXMub25Qcm9ncmVzc01lc3NhZ2UodHlwZWRNZXNzYWdlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uUHJvZ3Jlc3NNZXNzYWdlKHByb2dyZXNzTWVzc2FnZTogUHJvZ3Jlc3NNZXNzYWdlKSB7XG4gICAgICAgIERldGVybWluYXRlUHJvZ3Jlc3NCYXIudXBkYXRlKHByb2dyZXNzTWVzc2FnZSk7XG4gICAgfVxuXG59XG4iXX0=