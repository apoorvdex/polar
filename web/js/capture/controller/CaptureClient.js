"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const Logger_1 = require("../../logger/Logger");
const log = Logger_1.Logger.create();
class CaptureClient {
    static startCapture(url, webContentsId) {
        const startCaptureMessage = {
            url,
            webContentsId
        };
        log.info("Sending message to start capture: ", startCaptureMessage);
        electron_1.ipcRenderer.send('capture-controller-start-capture', startCaptureMessage);
    }
}
exports.CaptureClient = CaptureClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FwdHVyZUNsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNhcHR1cmVDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBcUM7QUFDckMsZ0RBQTJDO0FBRTNDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLGFBQWE7SUFPZixNQUFNLENBQUMsWUFBWSxDQUFDLEdBQVcsRUFBRSxhQUFzQjtRQUUxRCxNQUFNLG1CQUFtQixHQUF3QjtZQUM3QyxHQUFHO1lBQ0gsYUFBYTtTQUNoQixDQUFDO1FBRUYsR0FBRyxDQUFDLElBQUksQ0FBQyxvQ0FBb0MsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3BFLHNCQUFXLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFFOUUsQ0FBQztDQUVKO0FBbkJELHNDQW1CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXBjUmVuZGVyZXJ9IGZyb20gXCJlbGVjdHJvblwiO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gXCIuLi8uLi9sb2dnZXIvTG9nZ2VyXCI7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIENhcHR1cmVDbGllbnQge1xuXG5cbiAgICAvKipcbiAgICAgKiBTZW5kIGEgbWVzc2FnZSB0byB0aGUgbWFpbiBwcm9jZXNzIHRvIHN0YXJ0IHRoZSBjYXB0dXJlIGZvciB1cy5cbiAgICAgKlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgc3RhcnRDYXB0dXJlKHVybDogc3RyaW5nLCB3ZWJDb250ZW50c0lkPzogbnVtYmVyKSB7XG5cbiAgICAgICAgY29uc3Qgc3RhcnRDYXB0dXJlTWVzc2FnZTogU3RhcnRDYXB0dXJlTWVzc2FnZSA9IHtcbiAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgIHdlYkNvbnRlbnRzSWRcbiAgICAgICAgfTtcblxuICAgICAgICBsb2cuaW5mbyhcIlNlbmRpbmcgbWVzc2FnZSB0byBzdGFydCBjYXB0dXJlOiBcIiwgc3RhcnRDYXB0dXJlTWVzc2FnZSk7XG4gICAgICAgIGlwY1JlbmRlcmVyLnNlbmQoJ2NhcHR1cmUtY29udHJvbGxlci1zdGFydC1jYXB0dXJlJywgc3RhcnRDYXB0dXJlTWVzc2FnZSk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdGFydENhcHR1cmVNZXNzYWdlIHtcbiAgICByZWFkb25seSB1cmw6IHN0cmluZztcbiAgICByZWFkb25seSB3ZWJDb250ZW50c0lkPzogbnVtYmVyO1xufVxuXG4iXX0=