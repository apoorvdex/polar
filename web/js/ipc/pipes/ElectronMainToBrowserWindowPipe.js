"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const Pipe_1 = require("./Pipe");
class ElectronMainToBrowserWindowPipe extends Pipe_1.Pipe {
    constructor(browserWindow) {
        super();
        this.browserWindow = browserWindow;
    }
    on(channel, listener) {
        electron_1.ipcMain.on(channel, (event, message) => {
            listener(new Pipe_1.PipeNotification(channel, event, message));
        });
    }
    once(channel, listener) {
        electron_1.ipcMain.once(channel, (event, message) => {
            listener(new Pipe_1.PipeNotification(channel, event, message));
        });
    }
    write(channel, message) {
        this.browserWindow.webContents.send(channel, message);
    }
}
exports.ElectronMainToBrowserWindowPipe = ElectronMainToBrowserWindowPipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWxlY3Ryb25NYWluVG9Ccm93c2VyV2luZG93UGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkVsZWN0cm9uTWFpblRvQnJvd3NlcldpbmRvd1BpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBZ0Q7QUFDaEQsaUNBQTREO0FBSzVELE1BQWEsK0JBQWdDLFNBQVEsV0FBeUI7SUFJMUUsWUFBWSxhQUFxQztRQUM3QyxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxFQUFFLENBQUMsT0FBZSxFQUFFLFFBQTJDO1FBQzNELGtCQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQXFCLEVBQUUsT0FBWSxFQUFFLEVBQUU7WUFDeEQsUUFBUSxDQUFDLElBQUksdUJBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzVELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELElBQUksQ0FBQyxPQUFlLEVBQUUsUUFBMkM7UUFDN0Qsa0JBQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBcUIsRUFBRSxPQUFZLEVBQUUsRUFBRTtZQUMxRCxRQUFRLENBQUMsSUFBSSx1QkFBZ0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDNUQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsS0FBSyxDQUFDLE9BQWUsRUFBRSxPQUFZO1FBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUQsQ0FBQztDQUVKO0FBekJELDBFQXlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QnJvd3NlcldpbmRvdywgaXBjTWFpbn0gZnJvbSAnZWxlY3Ryb24nO1xuaW1wb3J0IHtQaXBlLCBQaXBlTGlzdGVuZXIsIFBpcGVOb3RpZmljYXRpb259IGZyb20gJy4vUGlwZSc7XG5cbi8qKlxuICogUGlwZSB0aGF0IGNvbW11bmljYXRlcyB0byBCcm93c2VyV2luZG93IGRpcmVjdGx5IGluc3RlYWQgb2YgdGhlIG1haW4gcHJvY2Vzcy5cbiAqL1xuZXhwb3J0IGNsYXNzIEVsZWN0cm9uTWFpblRvQnJvd3NlcldpbmRvd1BpcGUgZXh0ZW5kcyBQaXBlPEVsZWN0cm9uLkV2ZW50LCBhbnk+IHtcblxuICAgIHB1YmxpYyByZWFkb25seSBicm93c2VyV2luZG93OiBCcm93c2VyV2luZG93O1xuXG4gICAgY29uc3RydWN0b3IoYnJvd3NlcldpbmRvdzogRWxlY3Ryb24uQnJvd3NlcldpbmRvdykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmJyb3dzZXJXaW5kb3cgPSBicm93c2VyV2luZG93O1xuICAgIH1cblxuICAgIG9uKGNoYW5uZWw6IHN0cmluZywgbGlzdGVuZXI6IFBpcGVMaXN0ZW5lcjxFbGVjdHJvbi5FdmVudCwgYW55Pik6IHZvaWQge1xuICAgICAgICBpcGNNYWluLm9uKGNoYW5uZWwsIChldmVudDogRWxlY3Ryb24uRXZlbnQsIG1lc3NhZ2U6IGFueSkgPT4ge1xuICAgICAgICAgICAgbGlzdGVuZXIobmV3IFBpcGVOb3RpZmljYXRpb24oY2hhbm5lbCwgZXZlbnQsIG1lc3NhZ2UpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25jZShjaGFubmVsOiBzdHJpbmcsIGxpc3RlbmVyOiBQaXBlTGlzdGVuZXI8RWxlY3Ryb24uRXZlbnQsIGFueT4pOiB2b2lkIHtcbiAgICAgICAgaXBjTWFpbi5vbmNlKGNoYW5uZWwsIChldmVudDogRWxlY3Ryb24uRXZlbnQsIG1lc3NhZ2U6IGFueSkgPT4ge1xuICAgICAgICAgICAgbGlzdGVuZXIobmV3IFBpcGVOb3RpZmljYXRpb24oY2hhbm5lbCwgZXZlbnQsIG1lc3NhZ2UpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgd3JpdGUoY2hhbm5lbDogc3RyaW5nLCBtZXNzYWdlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5icm93c2VyV2luZG93LndlYkNvbnRlbnRzLnNlbmQoY2hhbm5lbCwgbWVzc2FnZSk7XG4gICAgfVxuXG59XG4iXX0=