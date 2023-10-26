"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Fetch_1 = __importDefault(require("../../../../util/Fetch"));
const Logger_1 = require("../../../../logger/Logger");
const log = Logger_1.Logger.create();
class AnkiConnectFetch {
    static initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            for (const port of this.PORTS) {
                try {
                    const body = {
                        action: "version",
                        version: 6,
                        params: {}
                    };
                    const init = { method: 'POST', body: JSON.stringify(body) };
                    yield AnkiConnectFetch.fetch(init, port);
                    log.notice("Using Anki sync port: " + port);
                    this.port = port;
                    return port;
                }
                catch (e) {
                    log.debug("Unable to connect on port: " + port);
                }
            }
            log.error(`Unable to connect to anki with ports ${this.PORTS} (make sure Polar Connect is installed)`);
        });
    }
    static fetch(init, port = this.port) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                init = Object.assign({}, init);
                init.cache = 'no-cache';
                init.headers = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                };
                const response = yield Fetch_1.default('http://127.0.0.1:' + port, init);
                const result = yield response.json();
                if (result.error) {
                    throw new Error(result.error);
                }
                return result.result;
            }
            catch (e) {
                log.warn("Anki connect fetch failed (install Polar Connect or Anki Connect): ", e);
                throw e;
            }
        });
    }
}
AnkiConnectFetch.PORTS = [8766, 8765];
AnkiConnectFetch.port = 8766;
exports.AnkiConnectFetch = AnkiConnectFetch;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5raUNvbm5lY3RGZXRjaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFua2lDb25uZWN0RmV0Y2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLG1FQUEwRDtBQUUxRCxzREFBaUQ7QUFFakQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBSzVCLE1BQWEsZ0JBQWdCO0lBTWxCLE1BQU0sQ0FBTyxVQUFVOztZQUkxQixLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBRTNCLElBQUk7b0JBRUEsTUFBTSxJQUFJLEdBQUc7d0JBQ1QsTUFBTSxFQUFFLFNBQVM7d0JBQ2pCLE9BQU8sRUFBRSxDQUFDO3dCQUNWLE1BQU0sRUFBRSxFQUFFO3FCQUNiLENBQUM7b0JBRUYsTUFBTSxJQUFJLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7b0JBRTVELE1BQU0sZ0JBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFFekMsR0FBRyxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsR0FBSSxJQUFJLENBQUMsQ0FBQztvQkFFN0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBRWpCLE9BQU8sSUFBSSxDQUFDO2lCQUVmO2dCQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNSLEdBQUcsQ0FBQyxLQUFLLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxDQUFDLENBQUM7aUJBQ25EO2FBRUo7WUFFRCxHQUFHLENBQUMsS0FBSyxDQUFDLHdDQUF3QyxJQUFJLENBQUMsS0FBSyx5Q0FBeUMsQ0FBQyxDQUFDO1FBRTNHLENBQUM7S0FBQTtJQUtNLE1BQU0sQ0FBTyxLQUFLLENBQUksSUFBaUIsRUFBRSxPQUFlLElBQUksQ0FBQyxJQUFJOztZQUVwRSxJQUFJO2dCQUVBLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUc7b0JBQ1gsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsY0FBYyxFQUFFLGtCQUFrQjtpQkFDckMsQ0FBQztnQkFFRixNQUFNLFFBQVEsR0FBRyxNQUFNLGVBQUssQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQy9ELE1BQU0sTUFBTSxHQUF3QixNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFFMUQsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO29CQUNkLE1BQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNqQztnQkFFRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDeEI7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDUixHQUFHLENBQUMsSUFBSSxDQUFDLHFFQUFxRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNuRixNQUFNLENBQUMsQ0FBQzthQUNYO1FBRUwsQ0FBQztLQUFBOztBQWpFYSxzQkFBSyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBRXBCLHFCQUFJLEdBQVcsSUFBSSxDQUFDO0FBSnZDLDRDQXFFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCwge1JlcXVlc3RJbml0fSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL0ZldGNoJztcbmltcG9ydCB7QW5raUNvbm5lY3RSZXNwb25zZX0gZnJvbSAnLi9BbmtpQ29ubmVjdFJlc3BvbnNlJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi8uLi8uLi9sb2dnZXIvTG9nZ2VyJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG4vKipcbiAqIEZldGNoIGltcGxlbWVudGF0aW9uIHRoYXQgYWx3YXlzIHVzZXMgdGhlIHByb3BlciBBbmtpIGxvY2FsIFVSTC5cbiAqL1xuZXhwb3J0IGNsYXNzIEFua2lDb25uZWN0RmV0Y2gge1xuXG4gICAgcHVibGljIHN0YXRpYyBQT1JUUyA9IFs4NzY2LCA4NzY1XTtcblxuICAgIHByaXZhdGUgc3RhdGljIHBvcnQ6IG51bWJlciA9IDg3NjY7XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGluaXRpYWxpemU8VD4oKTogUHJvbWlzZTxhbnk+IHtcblxuICAgICAgICAvLyB0cnkgdG8gZGV0ZXJtaW5lIHdoaWNoIHBvcnQgdG8gdXNlIGJhc2VkIG9uIHBvbGFyIGNvbm5lY3QgdnMgYW5raSBjb25uZWN0XG5cbiAgICAgICAgZm9yIChjb25zdCBwb3J0IG9mIHRoaXMuUE9SVFMpIHtcblxuICAgICAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGJvZHkgPSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJ2ZXJzaW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHZlcnNpb246IDYsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczoge31cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgY29uc3QgaW5pdCA9IHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpIH07XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBBbmtpQ29ubmVjdEZldGNoLmZldGNoKGluaXQsIHBvcnQpO1xuXG4gICAgICAgICAgICAgICAgbG9nLm5vdGljZShcIlVzaW5nIEFua2kgc3luYyBwb3J0OiBcIiAgKyBwb3J0KTtcblxuICAgICAgICAgICAgICAgIHRoaXMucG9ydCA9IHBvcnQ7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcG9ydDtcblxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIlVuYWJsZSB0byBjb25uZWN0IG9uIHBvcnQ6IFwiICsgcG9ydCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGxvZy5lcnJvcihgVW5hYmxlIHRvIGNvbm5lY3QgdG8gYW5raSB3aXRoIHBvcnRzICR7dGhpcy5QT1JUU30gKG1ha2Ugc3VyZSBQb2xhciBDb25uZWN0IGlzIGluc3RhbGxlZClgKTtcblxuICAgIH1cblxuXG4gICAgLy8gVE9ETzogc2luY2UgdGhlIHJlc3BvbnNlIGlzIHdyYXBwZWQgaW4gYSBjbG9zdXJlLCB3ZSBjYW4gaGFuZGxlIGVycm9yc1xuICAgIC8vIHByb3Blcmx5IGhlcmUuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBmZXRjaDxUPihpbml0OiBSZXF1ZXN0SW5pdCwgcG9ydDogbnVtYmVyID0gdGhpcy5wb3J0KTogUHJvbWlzZTxhbnk+IHtcblxuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICBpbml0ID0gT2JqZWN0LmFzc2lnbih7fSwgaW5pdCk7XG4gICAgICAgICAgICBpbml0LmNhY2hlID0gJ25vLWNhY2hlJztcbiAgICAgICAgICAgIGluaXQuaGVhZGVycyA9IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6JyArIHBvcnQsIGluaXQpO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0OiBBbmtpQ29ubmVjdFJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3VsdC5lcnJvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQucmVzdWx0O1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBsb2cud2FybihcIkFua2kgY29ubmVjdCBmZXRjaCBmYWlsZWQgKGluc3RhbGwgUG9sYXIgQ29ubmVjdCBvciBBbmtpIENvbm5lY3QpOiBcIiwgZSk7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn1cbiJdfQ==