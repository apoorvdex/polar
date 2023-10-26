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
const electron_1 = require("electron");
class IPCRendererPromises {
    static once(channel) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                electron_1.ipcRenderer.once(channel, (event, message) => {
                    resolve(new RendererEvent(event, message));
                });
            });
        });
    }
}
exports.IPCRendererPromises = IPCRendererPromises;
class RendererEvent {
    constructor(event, message) {
        this.event = event;
        this.message = message;
    }
}
exports.RendererEvent = RendererEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSVBDUmVuZGVyUHJvbWlzZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJJUENSZW5kZXJQcm9taXNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUNBQXFDO0FBRXJDLE1BQWEsbUJBQW1CO0lBRXJCLE1BQU0sQ0FBTyxJQUFJLENBQUMsT0FBZTs7WUFFcEMsT0FBTyxJQUFJLE9BQU8sQ0FBZ0IsQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFFMUMsc0JBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBVSxFQUFFLE9BQVksRUFBRSxFQUFFO29CQUNuRCxPQUFPLENBQUMsSUFBSSxhQUFhLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQy9DLENBQUMsQ0FBQyxDQUFDO1lBRVAsQ0FBQyxDQUFDLENBQUM7UUFFUCxDQUFDO0tBQUE7Q0FFSjtBQWRELGtEQWNDO0FBRUQsTUFBYSxhQUFhO0lBS3RCLFlBQVksS0FBVSxFQUFFLE9BQVk7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztDQUVKO0FBVkQsc0NBVUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2lwY1JlbmRlcmVyfSBmcm9tICdlbGVjdHJvbic7XG5cbmV4cG9ydCBjbGFzcyBJUENSZW5kZXJlclByb21pc2VzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgb25jZShjaGFubmVsOiBzdHJpbmcpOiBQcm9taXNlPFJlbmRlcmVyRXZlbnQ+IHtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8UmVuZGVyZXJFdmVudD4oKHJlc29sdmUpID0+IHtcblxuICAgICAgICAgICAgaXBjUmVuZGVyZXIub25jZShjaGFubmVsLCAoZXZlbnQ6IGFueSwgbWVzc2FnZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShuZXcgUmVuZGVyZXJFdmVudChldmVudCwgbWVzc2FnZSkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIFJlbmRlcmVyRXZlbnQge1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGV2ZW50OiBhbnk7XG4gICAgcHVibGljIHJlYWRvbmx5IG1lc3NhZ2U6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKGV2ZW50OiBhbnksIG1lc3NhZ2U6IGFueSkge1xuICAgICAgICB0aGlzLmV2ZW50ID0gZXZlbnQ7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgfVxuXG59XG4iXX0=