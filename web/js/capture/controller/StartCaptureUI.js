"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CaptureClient_1 = require("./CaptureClient");
class StartCaptureUI {
    constructor() {
        console.log("Ready to start capture...xxx");
    }
    init() {
        const form = document.getElementById("url-form");
        form.onsubmit = () => this.onSubmit();
    }
    onSubmit() {
        try {
            const urlElement = document.getElementById("url");
            const url = urlElement.value;
            CaptureClient_1.CaptureClient.startCapture(url);
        }
        catch (e) {
            console.error(e);
        }
        return false;
    }
}
exports.StartCaptureUI = StartCaptureUI;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhcnRDYXB0dXJlVUkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTdGFydENhcHR1cmVVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLG1EQUE4QztBQUs5QyxNQUFhLGNBQWM7SUFFdkI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUM7SUFFaEQsQ0FBQztJQUVNLElBQUk7UUFJUCxNQUFNLElBQUksR0FBcUIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUUxQyxDQUFDO0lBRU0sUUFBUTtRQUVYLElBQUk7WUFFQSxNQUFNLFVBQVUsR0FBc0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUUsQ0FBQztZQUN0RSxNQUFNLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO1lBRTdCLDZCQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBRW5DO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDUixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BCO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFFakIsQ0FBQztDQUVKO0FBakNELHdDQWlDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7Q2FwdHVyZUNsaWVudH0gZnJvbSAnLi9DYXB0dXJlQ2xpZW50JztcblxuLyoqXG4gKiBAcmVuZGVyZXJcbiAqL1xuZXhwb3J0IGNsYXNzIFN0YXJ0Q2FwdHVyZVVJIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlJlYWR5IHRvIHN0YXJ0IGNhcHR1cmUuLi54eHhcIik7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdCgpIHtcblxuICAgICAgICAvLyB3aXJlIHVwIHRoZSBldmVudCBsaXN0ZW5lcnMuLi5cblxuICAgICAgICBjb25zdCBmb3JtID0gPEhUTUxGb3JtRWxlbWVudD4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cmwtZm9ybVwiKTtcbiAgICAgICAgZm9ybS5vbnN1Ym1pdCA9ICgpID0+IHRoaXMub25TdWJtaXQoKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBvblN1Ym1pdCgpIHtcblxuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICBjb25zdCB1cmxFbGVtZW50ID0gPEhUTUxJbnB1dEVsZW1lbnQ+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXJsXCIpITtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IHVybEVsZW1lbnQudmFsdWU7XG5cbiAgICAgICAgICAgIENhcHR1cmVDbGllbnQuc3RhcnRDYXB0dXJlKHVybCk7XG5cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIH1cblxufVxuIl19