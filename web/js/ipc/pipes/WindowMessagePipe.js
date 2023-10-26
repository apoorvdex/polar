"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pipe_1 = require("./Pipe");
const IPCEvent_1 = require("../handler/IPCEvent");
const Pipes_1 = require("./Pipes");
const WritablePipes_1 = require("../handler/WritablePipes");
class WindowMessagePipe {
    on(channel, listener) {
        window.addEventListener('message', WindowMessagePipe.createListener(channel, listener));
    }
    once(channel, listener) {
        let messageListener = WindowMessagePipe.createListener(channel, listener);
        window.addEventListener('message', (event) => {
            if (messageListener(event)) {
                window.removeEventListener('message', messageListener);
            }
        });
    }
    when(channel) {
        return Pipes_1.Pipes.when(this, channel);
    }
    write(channel, message) {
        throw new Error("Not implemented");
    }
    static createListener(channel, listener) {
        return (event) => {
            if (event && event.data && event.data.channel && event.data.channel == channel) {
                let data = event.data;
                let writablePipe = WindowMessagePipe.createWritablePipe(channel, event);
                let ipcEvent = new IPCEvent_1.IPCEvent(writablePipe, data.message);
                listener(new Pipe_1.PipeNotification(channel, ipcEvent, data.message));
                return true;
            }
            return false;
        };
    }
    static createWritablePipe(channel, event) {
        return WritablePipes_1.WritablePipes.createFromFunction((channel, message) => {
            event.sender.postMessage({ channel, message }, '*');
        });
    }
}
exports.WindowMessagePipe = WindowMessagePipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2luZG93TWVzc2FnZVBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJXaW5kb3dNZXNzYWdlUGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUE0RDtBQUM1RCxrREFBNkM7QUFDN0MsbUNBQThCO0FBQzlCLDREQUF1RDtBQUV2RCxNQUFhLGlCQUFpQjtJQUUxQixFQUFFLENBQUMsT0FBZSxFQUFFLFFBQXFDO1FBQ3JELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzVGLENBQUM7SUFFRCxJQUFJLENBQUMsT0FBZSxFQUFFLFFBQXFDO1FBQ3ZELElBQUksZUFBZSxHQUFHLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFMUUsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQzlDLElBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN2QixNQUFNLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQyxDQUFDO2FBQzFEO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRUQsSUFBSSxDQUFDLE9BQWU7UUFDaEIsT0FBTyxhQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsS0FBSyxDQUFDLE9BQWUsRUFBRSxPQUFZO1FBQy9CLE1BQU0sSUFBSSxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFlLEVBQUUsUUFBcUM7UUFFeEUsT0FBTyxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBRWxCLElBQUcsS0FBSyxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksT0FBTyxFQUFFO2dCQUUzRSxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUN0QixJQUFJLFlBQVksR0FBRyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ3hFLElBQUksUUFBUSxHQUFHLElBQUksbUJBQVEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN4RCxRQUFRLENBQUMsSUFBSSx1QkFBZ0IsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNoRSxPQUFPLElBQUksQ0FBQzthQUNmO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQyxDQUFDO0lBRU4sQ0FBQztJQUVELE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxPQUFlLEVBQUUsS0FBVTtRQUVqRCxPQUFPLDZCQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxPQUFPLEVBQUUsT0FBWSxFQUFFLEVBQUU7WUFDOUQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdkQsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0NBRUo7QUFsREQsOENBa0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlTGlzdGVuZXIsIFBpcGVOb3RpZmljYXRpb259IGZyb20gJy4vUGlwZSc7XG5pbXBvcnQge0lQQ0V2ZW50fSBmcm9tICcuLi9oYW5kbGVyL0lQQ0V2ZW50JztcbmltcG9ydCB7UGlwZXN9IGZyb20gJy4vUGlwZXMnO1xuaW1wb3J0IHtXcml0YWJsZVBpcGVzfSBmcm9tICcuLi9oYW5kbGVyL1dyaXRhYmxlUGlwZXMnO1xuXG5leHBvcnQgY2xhc3MgV2luZG93TWVzc2FnZVBpcGUgaW1wbGVtZW50cyBQaXBlPElQQ0V2ZW50LCBhbnk+IHtcblxuICAgIG9uKGNoYW5uZWw6IHN0cmluZywgbGlzdGVuZXI6IFBpcGVMaXN0ZW5lcjxJUENFdmVudCwgYW55Pik6IHZvaWQge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIFdpbmRvd01lc3NhZ2VQaXBlLmNyZWF0ZUxpc3RlbmVyKGNoYW5uZWwsIGxpc3RlbmVyKSk7XG4gICAgfVxuXG4gICAgb25jZShjaGFubmVsOiBzdHJpbmcsIGxpc3RlbmVyOiBQaXBlTGlzdGVuZXI8SVBDRXZlbnQsIGFueT4pOiB2b2lkIHtcbiAgICAgICAgbGV0IG1lc3NhZ2VMaXN0ZW5lciA9IFdpbmRvd01lc3NhZ2VQaXBlLmNyZWF0ZUxpc3RlbmVyKGNoYW5uZWwsIGxpc3RlbmVyKTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICBpZihtZXNzYWdlTGlzdGVuZXIoZXZlbnQpKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBtZXNzYWdlTGlzdGVuZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHdoZW4oY2hhbm5lbDogc3RyaW5nKTogUHJvbWlzZTxQaXBlTm90aWZpY2F0aW9uPElQQ0V2ZW50LCBhbnk+PiB7XG4gICAgICAgIHJldHVybiBQaXBlcy53aGVuKHRoaXMsIGNoYW5uZWwpO1xuICAgIH1cblxuICAgIHdyaXRlKGNoYW5uZWw6IHN0cmluZywgbWVzc2FnZTogYW55KTogdm9pZCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZFwiKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlTGlzdGVuZXIoY2hhbm5lbDogc3RyaW5nLCBsaXN0ZW5lcjogUGlwZUxpc3RlbmVyPElQQ0V2ZW50LCBhbnk+KTogV2luZG93TWVzc2FnZUxpc3RlbmVyIHtcblxuICAgICAgICByZXR1cm4gKGV2ZW50OiBhbnkpID0+IHtcblxuICAgICAgICAgICAgaWYoZXZlbnQgJiYgZXZlbnQuZGF0YSAmJiBldmVudC5kYXRhLmNoYW5uZWwgJiYgZXZlbnQuZGF0YS5jaGFubmVsID09IGNoYW5uZWwpIHtcblxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgICAgICBsZXQgd3JpdGFibGVQaXBlID0gV2luZG93TWVzc2FnZVBpcGUuY3JlYXRlV3JpdGFibGVQaXBlKGNoYW5uZWwsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICBsZXQgaXBjRXZlbnQgPSBuZXcgSVBDRXZlbnQod3JpdGFibGVQaXBlLCBkYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGxpc3RlbmVyKG5ldyBQaXBlTm90aWZpY2F0aW9uKGNoYW5uZWwsIGlwY0V2ZW50LCBkYXRhLm1lc3NhZ2UpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVXcml0YWJsZVBpcGUoY2hhbm5lbDogc3RyaW5nLCBldmVudDogYW55KSB7XG5cbiAgICAgICAgcmV0dXJuIFdyaXRhYmxlUGlwZXMuY3JlYXRlRnJvbUZ1bmN0aW9uKChjaGFubmVsLCBtZXNzYWdlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnNlbmRlci5wb3N0TWVzc2FnZSgge2NoYW5uZWwsIG1lc3NhZ2V9LCAnKicpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgV2luZG93TWVzc2FnZUxpc3RlbmVyIHtcblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBhbiBldmVudCBhbmQgcmV0dXJuIHRydWUgaWYgd2UgaGFuZGxlZCBpdC4gV2Ugb25seSByZXR1cm4gdHJ1ZSBpZlxuICAgICAqIHdlIGFyZSBvbiB0aGUgc2FtZSBjaGFubmVsLlxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqL1xuICAgIChldmVudDogYW55KTogYm9vbGVhbjtcblxufVxuIl19