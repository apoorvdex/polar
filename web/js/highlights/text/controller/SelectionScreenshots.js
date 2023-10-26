"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CapturedScreenshots_1 = require("../../../screenshots/CapturedScreenshots");
const IFrames_1 = require("../../../util/dom/IFrames");
class SelectionScreenshots {
    static capture(doc, win) {
        return this.withoutRange(doc, win, range => {
            return this.captureRange(win, range);
        });
    }
    static captureRange(win, range) {
        let clientRect = this.getClientRect(range);
        clientRect = IFrames_1.IFrames.computeTopLevelClientRect(clientRect, win);
        const capturedScreenshotPromise = CapturedScreenshots_1.CapturedScreenshots.capture(clientRect);
        return { clientRect, capturedScreenshotPromise };
    }
    static getClientRect(range) {
        return range.getBoundingClientRect();
    }
    static withoutRange(doc, win, handler) {
        const sel = win.getSelection();
        const range = sel.getRangeAt(0);
        doc.body.classList.toggle('selection-disabled', true);
        const result = handler(range);
        doc.body.classList.toggle('selection-disabled', false);
        return result;
    }
}
exports.SelectionScreenshots = SelectionScreenshots;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VsZWN0aW9uU2NyZWVuc2hvdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTZWxlY3Rpb25TY3JlZW5zaG90cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtGQUE2RTtBQUM3RSx1REFBa0Q7QUFPbEQsTUFBYSxvQkFBb0I7SUFFdEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFhLEVBQUUsR0FBVztRQUU1QyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRTtZQUV2QyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXpDLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVNLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBVyxFQUFFLEtBQVk7UUFDaEQsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxVQUFVLEdBQUcsaUJBQU8sQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFaEUsTUFBTSx5QkFBeUIsR0FBRyx5Q0FBbUIsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFMUUsT0FBTyxFQUFDLFVBQVUsRUFBRSx5QkFBeUIsRUFBQyxDQUFDO0lBQ25ELENBQUM7SUFFTSxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQVk7UUFDcEMsT0FBTyxLQUFLLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRU0sTUFBTSxDQUFDLFlBQVksQ0FBSSxHQUFhLEVBQUUsR0FBVyxFQUFFLE9BQTRCO1FBRWxGLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMvQixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWhDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUV0RCxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFOUIsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXZELE9BQU8sTUFBTSxDQUFDO0lBRWxCLENBQUM7Q0FFSjtBQXhDRCxvREF3Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NhcHR1cmVkU2NyZWVuc2hvdHN9IGZyb20gJy4uLy4uLy4uL3NjcmVlbnNob3RzL0NhcHR1cmVkU2NyZWVuc2hvdHMnO1xuaW1wb3J0IHtJRnJhbWVzfSBmcm9tICcuLi8uLi8uLi91dGlsL2RvbS9JRnJhbWVzJztcbmltcG9ydCB7Q2FwdHVyZWRTY3JlZW5zaG90fSBmcm9tICcuLi8uLi8uLi9zY3JlZW5zaG90cy9DYXB0dXJlZFNjcmVlbnNob3QnO1xuaW1wb3J0IHtPcHRpb25hbH0gZnJvbSAnLi4vLi4vLi4vdXRpbC90cy9PcHRpb25hbCc7XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBzZWxlY3Rpb24sIHRha2UgYSBzY3JlZW5zaG90LCB0aGVuIHJlc3RvcmUgaXQuXG4gKi9cbmV4cG9ydCBjbGFzcyBTZWxlY3Rpb25TY3JlZW5zaG90cyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGNhcHR1cmUoZG9jOiBEb2N1bWVudCwgd2luOiBXaW5kb3cpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy53aXRob3V0UmFuZ2UoZG9jLCB3aW4sIHJhbmdlID0+IHtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FwdHVyZVJhbmdlKHdpbiwgcmFuZ2UpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjYXB0dXJlUmFuZ2Uod2luOiBXaW5kb3csIHJhbmdlOiBSYW5nZSk6IFNlbGVjdGlvblNjcmVlbnNob3Qge1xuICAgICAgICBsZXQgY2xpZW50UmVjdCA9IHRoaXMuZ2V0Q2xpZW50UmVjdChyYW5nZSk7XG4gICAgICAgIGNsaWVudFJlY3QgPSBJRnJhbWVzLmNvbXB1dGVUb3BMZXZlbENsaWVudFJlY3QoY2xpZW50UmVjdCwgd2luKTtcblxuICAgICAgICBjb25zdCBjYXB0dXJlZFNjcmVlbnNob3RQcm9taXNlID0gQ2FwdHVyZWRTY3JlZW5zaG90cy5jYXB0dXJlKGNsaWVudFJlY3QpO1xuXG4gICAgICAgIHJldHVybiB7Y2xpZW50UmVjdCwgY2FwdHVyZWRTY3JlZW5zaG90UHJvbWlzZX07XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXRDbGllbnRSZWN0KHJhbmdlOiBSYW5nZSkge1xuICAgICAgICByZXR1cm4gcmFuZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyB3aXRob3V0UmFuZ2U8VD4oZG9jOiBEb2N1bWVudCwgd2luOiBXaW5kb3csIGhhbmRsZXI6IChyYW5nZTogUmFuZ2UpID0+IFQpOiBUIHtcblxuICAgICAgICBjb25zdCBzZWwgPSB3aW4uZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgIGNvbnN0IHJhbmdlID0gc2VsLmdldFJhbmdlQXQoMCk7XG5cbiAgICAgICAgZG9jLmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0aW9uLWRpc2FibGVkJywgdHJ1ZSk7XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gaGFuZGxlcihyYW5nZSk7XG5cbiAgICAgICAgZG9jLmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0aW9uLWRpc2FibGVkJywgZmFsc2UpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWxlY3Rpb25TY3JlZW5zaG90IHtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjbGllbnRSZWN0IHdpdGggaWZyYW1lcyBmYWN0b3JlZCBpbiwgdXNlZCB0byB0YWtlIHRoaXMgc2NyZWVuc2hvdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBjbGllbnRSZWN0OiBDbGllbnRSZWN0O1xuXG4gICAgcmVhZG9ubHkgY2FwdHVyZWRTY3JlZW5zaG90UHJvbWlzZTogUHJvbWlzZTxPcHRpb25hbDxDYXB0dXJlZFNjcmVlbnNob3Q+PjtcblxufVxuIl19