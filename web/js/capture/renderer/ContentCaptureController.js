"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ContentCapture_1 = require("./ContentCapture");
const Logger_1 = require("../../logger/Logger");
const electron_1 = require("electron");
const log = Logger_1.Logger.create();
class ContentCaptureController {
    start() {
        log.info("IPC listener added for content-capture at: " + new Date().toISOString());
        electron_1.ipcRenderer.on('content-capture', (event, data) => {
            if (data.type === "request") {
                this.onContentCaptureRequest();
            }
        });
        electron_1.ipcRenderer.send('content-capture', { type: "started" });
    }
    onContentCaptureRequest() {
        log.info("Received content capture request.");
        try {
            let captured = ContentCapture_1.ContentCapture.captureHTML();
            log.info("Content captured successfully.  Sending response...");
            electron_1.ipcRenderer.send("content-capture", {
                type: "response",
                result: captured
            });
            log.info("Content captured successfully.  Sending response... done");
        }
        catch (e) {
            log.error("Could not capture HTML: ", e);
            electron_1.ipcRenderer.send("content-capture", {
                type: "response",
                err: e.message
            });
        }
    }
}
exports.ContentCaptureController = ContentCaptureController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGVudENhcHR1cmVDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ29udGVudENhcHR1cmVDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscURBQWdEO0FBQ2hELGdEQUEyQztBQUMzQyx1Q0FBK0M7QUFFL0MsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBTTVCLE1BQWEsd0JBQXdCO0lBTWpDLEtBQUs7UUFFRCxHQUFHLENBQUMsSUFBSSxDQUFDLDZDQUE2QyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUVuRixzQkFBVyxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEtBQVUsRUFBRSxJQUFTLEVBQUUsRUFBRTtZQUV4RCxJQUFHLElBQUksQ0FBQyxJQUFJLEtBQU0sU0FBUyxFQUFFO2dCQUN6QixJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQzthQUNsQztRQUVMLENBQUMsQ0FBQyxDQUFDO1FBR0gsc0JBQVcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFDLENBQUMsQ0FBQztJQUUzRCxDQUFDO0lBRUQsdUJBQXVCO1FBRW5CLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUNBQW1DLENBQUMsQ0FBQztRQUU5QyxJQUFHO1lBRUMsSUFBSSxRQUFRLEdBQUcsK0JBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUU1QyxHQUFHLENBQUMsSUFBSSxDQUFDLHFEQUFxRCxDQUFDLENBQUM7WUFFaEUsc0JBQVcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7Z0JBQ2hDLElBQUksRUFBRSxVQUFVO2dCQUNoQixNQUFNLEVBQUUsUUFBUTthQUNuQixDQUFDLENBQUM7WUFFSCxHQUFHLENBQUMsSUFBSSxDQUFDLDBEQUEwRCxDQUFDLENBQUM7U0FFeEU7UUFBQyxPQUFNLENBQUMsRUFBRTtZQUVQLEdBQUcsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFekMsc0JBQVcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7Z0JBQ2hDLElBQUksRUFBRSxVQUFVO2dCQUNoQixHQUFHLEVBQUUsQ0FBQyxDQUFDLE9BQU87YUFDakIsQ0FBQyxDQUFDO1NBRU47SUFFTCxDQUFDO0NBRUo7QUFyREQsNERBcURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb250ZW50Q2FwdHVyZX0gZnJvbSAnLi9Db250ZW50Q2FwdHVyZSc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vLi4vbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQgZWxlY3Ryb24sIHtpcGNSZW5kZXJlcn0gZnJvbSAnZWxlY3Ryb24nO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbi8qKlxuICogQ29udHJvbGxlciB0aGF0IGludGVyY2VwdHMgZXZlbnRzIGZyb20gdGhlIG1haW4gRWxlY3Ryb24gcHJvY2VzcywgdHJpZ2dlcnNcbiAqIGEgY2FwdHVyZSwgdGhlbiByZXR1cm5zIHRoZSByZXN1bHRzIHRvIHRoZSBjYWxsZXIgdmlhIGEgbWVzc2FnZSByZXNwb25zZS5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbnRlbnRDYXB0dXJlQ29udHJvbGxlciB7XG5cbiAgICAvKipcbiAgICAgKiBTdGFydCB0aGUgY29udGVudCBjYXB0dXJlIHN5c3RlbSB3aGljaCBpbnZvbHZlcyBsaXN0ZW5pbmcgdG8gSVBDIG1lc3NhZ2VzXG4gICAgICogZm9yIHRyaWdnZXJpbmcgcmVuZGVyaW5nLlxuICAgICAqL1xuICAgIHN0YXJ0KCk6IHZvaWQge1xuXG4gICAgICAgIGxvZy5pbmZvKFwiSVBDIGxpc3RlbmVyIGFkZGVkIGZvciBjb250ZW50LWNhcHR1cmUgYXQ6IFwiICsgbmV3IERhdGUoKS50b0lTT1N0cmluZygpKTtcblxuICAgICAgICBpcGNSZW5kZXJlci5vbignY29udGVudC1jYXB0dXJlJywgKGV2ZW50OiBhbnksIGRhdGE6IGFueSkgPT4ge1xuXG4gICAgICAgICAgICBpZihkYXRhLnR5cGUgPT09ICBcInJlcXVlc3RcIikge1xuICAgICAgICAgICAgICAgIHRoaXMub25Db250ZW50Q2FwdHVyZVJlcXVlc3QoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICAvLyB0ZWxsIGV2ZXJ5b25lIHRoYXQgd2UndmUgc3RhcnRlZCBwcm9wZXJseS5cbiAgICAgICAgaXBjUmVuZGVyZXIuc2VuZCgnY29udGVudC1jYXB0dXJlJywge3R5cGU6IFwic3RhcnRlZFwifSk7XG5cbiAgICB9XG5cbiAgICBvbkNvbnRlbnRDYXB0dXJlUmVxdWVzdCgpIHtcblxuICAgICAgICBsb2cuaW5mbyhcIlJlY2VpdmVkIGNvbnRlbnQgY2FwdHVyZSByZXF1ZXN0LlwiKTtcblxuICAgICAgICB0cnl7XG5cbiAgICAgICAgICAgIGxldCBjYXB0dXJlZCA9IENvbnRlbnRDYXB0dXJlLmNhcHR1cmVIVE1MKCk7XG5cbiAgICAgICAgICAgIGxvZy5pbmZvKFwiQ29udGVudCBjYXB0dXJlZCBzdWNjZXNzZnVsbHkuICBTZW5kaW5nIHJlc3BvbnNlLi4uXCIpO1xuXG4gICAgICAgICAgICBpcGNSZW5kZXJlci5zZW5kKFwiY29udGVudC1jYXB0dXJlXCIsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcInJlc3BvbnNlXCIsXG4gICAgICAgICAgICAgICAgcmVzdWx0OiBjYXB0dXJlZFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxvZy5pbmZvKFwiQ29udGVudCBjYXB0dXJlZCBzdWNjZXNzZnVsbHkuICBTZW5kaW5nIHJlc3BvbnNlLi4uIGRvbmVcIik7XG5cbiAgICAgICAgfSBjYXRjaChlKSB7XG5cbiAgICAgICAgICAgIGxvZy5lcnJvcihcIkNvdWxkIG5vdCBjYXB0dXJlIEhUTUw6IFwiLCBlKTtcblxuICAgICAgICAgICAgaXBjUmVuZGVyZXIuc2VuZChcImNvbnRlbnQtY2FwdHVyZVwiLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJyZXNwb25zZVwiLFxuICAgICAgICAgICAgICAgIGVycjogZS5tZXNzYWdlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbn1cbiJdfQ==