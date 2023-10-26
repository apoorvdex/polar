"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = __importDefault(require("process"));
const Logger_1 = require("../../logger/Logger");
const log = Logger_1.Logger.create();
class MainAppExceptionHandlers {
    static register() {
        process_1.default.on('uncaughtException', err => {
            log.error("Uncaught exception: ", err);
        });
        process_1.default.on('unhandledRejection', err => {
            log.error("Unhandled rejection: ", err);
        });
    }
}
exports.MainAppExceptionHandlers = MainAppExceptionHandlers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbkFwcEV4Y2VwdGlvbkhhbmRsZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTWFpbkFwcEV4Y2VwdGlvbkhhbmRsZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0RBQThCO0FBQzlCLGdEQUEyQztBQUUzQyxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSx3QkFBd0I7SUFFMUIsTUFBTSxDQUFDLFFBQVE7UUFJbEIsaUJBQU8sQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxDQUFDLEVBQUU7WUFDbEMsR0FBRyxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztRQUVILGlCQUFPLENBQUMsRUFBRSxDQUFDLG9CQUFvQixFQUFFLEdBQUcsQ0FBQyxFQUFFO1lBQ25DLEdBQUcsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0NBQ0o7QUFmRCw0REFlQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9jZXNzIGZyb20gXCJwcm9jZXNzXCI7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSBcIi4uLy4uL2xvZ2dlci9Mb2dnZXJcIjtcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgY2xhc3MgTWFpbkFwcEV4Y2VwdGlvbkhhbmRsZXJzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXIoKSB7XG5cbiAgICAgICAgLy8gd2UgaGF2ZSB0byBjcmVhdGUgdW5jYXVnaHQgZXhjZXB0aW9uIGhhbmRsZXJzIGhlcmUgd2hlbiBleGl0aW5nXG4gICAgICAgIC8vIHRoZSBhcHAgYXMgSSB0aGluayB0aGV5J3JlIGdldHRpbmcgcmVtb3ZlZC5cbiAgICAgICAgcHJvY2Vzcy5vbigndW5jYXVnaHRFeGNlcHRpb24nLCBlcnIgPT4ge1xuICAgICAgICAgICAgbG9nLmVycm9yKFwiVW5jYXVnaHQgZXhjZXB0aW9uOiBcIiwgZXJyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcHJvY2Vzcy5vbigndW5oYW5kbGVkUmVqZWN0aW9uJywgZXJyID0+IHtcbiAgICAgICAgICAgIGxvZy5lcnJvcihcIlVuaGFuZGxlZCByZWplY3Rpb246IFwiLCBlcnIpO1xuICAgICAgICB9KTtcblxuICAgIH1cbn1cblxuXG4iXX0=