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
const Toaster_1 = require("../ui/toaster/Toaster");
class ToasterLogger {
    constructor() {
        this.name = 'toaster-logger';
    }
    notice(msg, ...args) {
    }
    warn(msg, ...args) {
    }
    error(msg, ...args) {
        if (args.length > 0 && args[0] instanceof Error) {
            Toaster_1.Toaster.persistentError("An internal error has occurred.");
        }
        else {
            Toaster_1.Toaster.error(msg);
        }
    }
    info(msg, ...args) {
    }
    verbose(msg, ...args) {
    }
    debug(msg, ...args) {
    }
    sync() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.ToasterLogger = ToasterLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9hc3RlckxvZ2dlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRvYXN0ZXJMb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUlBLG1EQUE4QztBQU85QyxNQUFhLGFBQWE7SUFBMUI7UUFFb0IsU0FBSSxHQUFXLGdCQUFnQixDQUFDO0lBZ0NwRCxDQUFDO0lBOUJVLE1BQU0sQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO0lBQ3pDLENBQUM7SUFFTSxJQUFJLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztJQUV2QyxDQUFDO0lBRU0sS0FBSyxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFFcEMsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksS0FBSyxFQUFFO1lBQzdDLGlCQUFPLENBQUMsZUFBZSxDQUFDLGlDQUFpQyxDQUFDLENBQUM7U0FDOUQ7YUFBTTtZQUNILGlCQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3RCO0lBRUwsQ0FBQztJQUVNLElBQUksQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO0lBQ3ZDLENBQUM7SUFFTSxPQUFPLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztJQUMxQyxDQUFDO0lBRU0sS0FBSyxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7SUFDeEMsQ0FBQztJQUVZLElBQUk7O1FBRWpCLENBQUM7S0FBQTtDQUVKO0FBbENELHNDQWtDQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU2ltcGxlIGxvZ2dlciB0aGF0IGp1c3Qgd3JpdGVzIHRvIHRoZSBjb25zb2xlLlxuICovXG5pbXBvcnQge0lMb2dnZXJ9IGZyb20gJy4vSUxvZ2dlcic7XG5pbXBvcnQge1RvYXN0ZXJ9IGZyb20gJy4uL3VpL3RvYXN0ZXIvVG9hc3Rlcic7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRvYXN0IHdoZW4gd2hlbiBhbiBlcnJvciBvciBhIHdhcm5pbmcgaXMgZGlzcGxheWVkLiBObyBvdGhlclxuICogbWVzc2FnZXMgYXJlIGRpc3BsYXllZCB0aG91Z2ggYmVjYXVzZSBpdCB3b3VsZCBiZSBzaWxseSB0byByZW5kZXIgdGhlbVxuICogb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgY2xhc3MgVG9hc3RlckxvZ2dlciBpbXBsZW1lbnRzIElMb2dnZXIge1xuXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWU6IHN0cmluZyA9ICd0b2FzdGVyLWxvZ2dlcic7XG5cbiAgICBwdWJsaWMgbm90aWNlKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgIH1cblxuICAgIHB1YmxpYyB3YXJuKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICAvLyBUb2FzdGVyLndhcm5pbmcobXNnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZXJyb3IobXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG5cbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMCAmJiBhcmdzWzBdIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIFRvYXN0ZXIucGVyc2lzdGVudEVycm9yKFwiQW4gaW50ZXJuYWwgZXJyb3IgaGFzIG9jY3VycmVkLlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFRvYXN0ZXIuZXJyb3IobXNnKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIGluZm8obXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgfVxuXG4gICAgcHVibGljIHZlcmJvc2UobXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgfVxuXG4gICAgcHVibGljIGRlYnVnKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzeW5jKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICAvLyBub29wXG4gICAgfVxuXG59XG4iXX0=