"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Messenger_1 = require("../electron/messenger/Messenger");
const Logger_1 = require("../logger/Logger");
const log = Logger_1.Logger.create();
class AnnotationSidebarClient {
    static toggleAnnotationSidebar() {
        Messenger_1.Messenger.postMessage({
            message: {
                type: 'toggle-annotation-sidebar',
            }
        }).catch(err => log.error("Could not post message", err));
    }
}
exports.AnnotationSidebarClient = AnnotationSidebarClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ub3RhdGlvblNpZGViYXJDbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBbm5vdGF0aW9uU2lkZWJhckNsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtEQUEwRDtBQUMxRCw2Q0FBd0M7QUFFeEMsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsdUJBQXVCO0lBRXpCLE1BQU0sQ0FBQyx1QkFBdUI7UUFFakMscUJBQVMsQ0FBQyxXQUFXLENBQUM7WUFDbEIsT0FBTyxFQUFFO2dCQUNMLElBQUksRUFBRSwyQkFBMkI7YUFDcEM7U0FDSixDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRTlELENBQUM7Q0FFSjtBQVpELDBEQVlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNZXNzZW5nZXJ9IGZyb20gJy4uL2VsZWN0cm9uL21lc3Nlbmdlci9NZXNzZW5nZXInO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uL2xvZ2dlci9Mb2dnZXInO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBBbm5vdGF0aW9uU2lkZWJhckNsaWVudCB7XG5cbiAgICBwdWJsaWMgc3RhdGljIHRvZ2dsZUFubm90YXRpb25TaWRlYmFyKCkge1xuXG4gICAgICAgIE1lc3Nlbmdlci5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3RvZ2dsZS1hbm5vdGF0aW9uLXNpZGViYXInLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnIgPT4gbG9nLmVycm9yKFwiQ291bGQgbm90IHBvc3QgbWVzc2FnZVwiLCBlcnIpKTtcblxuICAgIH1cblxufVxuIl19