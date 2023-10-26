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
const electron_1 = require("@sentry/electron");
const Preconditions_1 = require("../Preconditions");
const process_1 = __importDefault(require("process"));
let initialized = false;
let ready = false;
class SentryLogger {
    constructor() {
        this.name = 'sentry-logger';
    }
    notice(msg, ...args) {
        SentryLogger.initWhenNecessary();
    }
    warn(msg, ...args) {
        SentryLogger.initWhenNecessary();
    }
    error(msg, ...args) {
        SentryLogger.initWhenNecessary();
        if (ready) {
            args.forEach(arg => {
                if (arg instanceof Error) {
                    electron_1.captureException(arg);
                }
            });
        }
    }
    info(msg, ...args) {
        SentryLogger.initWhenNecessary();
    }
    verbose(msg, ...args) {
        SentryLogger.initWhenNecessary();
    }
    debug(msg, ...args) {
        SentryLogger.initWhenNecessary();
    }
    sync() {
        return __awaiter(this, void 0, void 0, function* () {
            SentryLogger.initWhenNecessary();
        });
    }
    static isEnabled() {
        if (Preconditions_1.isPresent(process_1.default.env.POLAR_SENTRY_ENABLED)) {
            return process_1.default.env.POLAR_SENTRY_ENABLED === 'true';
        }
        return !Preconditions_1.isPresent(process_1.default.env.SNAP);
    }
    static initWhenNecessary() {
        if (initialized) {
            return;
        }
        try {
            if (SentryLogger.isEnabled()) {
                electron_1.init({
                    dsn: 'https://2e8b8ca6e6bf4bf58d735f2a405ecb20@sentry.io/1273707',
                });
            }
            ready = true;
        }
        catch (e) {
            console.error("Unable to initialize sentry: ", e);
        }
        finally {
            initialized = true;
        }
    }
}
exports.SentryLogger = SentryLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VudHJ5TG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU2VudHJ5TG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFQSwrQ0FBMEQ7QUFDMUQsb0RBQTJDO0FBQzNDLHNEQUE4QjtBQU85QixJQUFJLFdBQVcsR0FBWSxLQUFLLENBQUM7QUFHakMsSUFBSSxLQUFLLEdBQVksS0FBSyxDQUFDO0FBRTNCLE1BQWEsWUFBWTtJQUF6QjtRQUVvQixTQUFJLEdBQVcsZUFBZSxDQUFDO0lBZ0ZuRCxDQUFDO0lBOUVVLE1BQU0sQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ3JDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFTSxJQUFJLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUNuQyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRU0sS0FBSyxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFFcEMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFakMsSUFBSSxLQUFLLEVBQUU7WUFFUCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUVmLElBQUssR0FBRyxZQUFZLEtBQUssRUFBRTtvQkFJdkIsMkJBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3pCO1lBRUwsQ0FBQyxDQUFDLENBQUM7U0FFTjtJQUNMLENBQUM7SUFFTSxJQUFJLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUNuQyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRU0sT0FBTyxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDdEMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVNLEtBQUssQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ3BDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFWSxJQUFJOztZQUNiLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3JDLENBQUM7S0FBQTtJQUVNLE1BQU0sQ0FBQyxTQUFTO1FBRW5CLElBQUkseUJBQVMsQ0FBQyxpQkFBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFO1lBQzdDLE9BQU8saUJBQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEtBQUssTUFBTSxDQUFDO1NBQ3REO1FBRUQsT0FBTyxDQUFFLHlCQUFTLENBQUMsaUJBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVPLE1BQU0sQ0FBQyxpQkFBaUI7UUFFNUIsSUFBSSxXQUFXLEVBQUU7WUFDYixPQUFPO1NBQ1Y7UUFFRCxJQUFJO1lBRUEsSUFBSSxZQUFZLENBQUMsU0FBUyxFQUFFLEVBQUU7Z0JBQzFCLGVBQUksQ0FBQztvQkFDRCxHQUFHLEVBQUUsNERBQTREO2lCQUVwRSxDQUFDLENBQUM7YUFDTjtZQUVELEtBQUssR0FBRyxJQUFJLENBQUM7U0FFaEI7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNSLE9BQU8sQ0FBQyxLQUFLLENBQUMsK0JBQStCLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDckQ7Z0JBQVM7WUFDTixXQUFXLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO0lBRUwsQ0FBQztDQUVKO0FBbEZELG9DQWtGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SUxvZ2dlcn0gZnJvbSAnLi9JTG9nZ2VyJztcblxuaW1wb3J0IHsgaW5pdCwgY2FwdHVyZUV4Y2VwdGlvbiB9IGZyb20gJ0BzZW50cnkvZWxlY3Ryb24nO1xuaW1wb3J0IHtpc1ByZXNlbnR9IGZyb20gJy4uL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHByb2Nlc3MgZnJvbSBcInByb2Nlc3NcIjtcblxuLy8gVGhpcyBjb25maWd1cmVzIHRoZSBFbGVjdHJvbiBDcmFzaFJlcG9ydGVyIGZvciBuYXRpdmUgYXBwIGNyYXNoZXMgYW5kXG4vLyBjYXB0dXJlcyBhbnkgdW5jYXVnaHQgSmF2YVNjcmlwdCBleGNlcHRpb25zIHVzaW5nIHRoZSBKYXZhU2NyaXB0IFNES3MgdW5kZXJcbi8vIHRoZSBob29kLiBCZSBzdXJlIHRvIGNhbGwgdGhpcyBmdW5jdGlvbiBhcyBlYXJseSBhcyBwb3NzaWJsZSBpbiB0aGUgbWFpblxuLy8gcHJvY2VzcyBhbmQgYWxsIHJlbmRlcmVyIHByb2Nlc3NlcyB0byBhbHNvIGNhdGNoIGVycm9ycyBkdXJpbmcgc3RhcnR1cC5cblxubGV0IGluaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XG5cbi8vIHRydWUgd2hlbiBzZW50cnkgaXMgcmVhZHkgZm9yIGxvZ2dpbmcuXG5sZXQgcmVhZHk6IGJvb2xlYW4gPSBmYWxzZTtcblxuZXhwb3J0IGNsYXNzIFNlbnRyeUxvZ2dlciBpbXBsZW1lbnRzIElMb2dnZXIge1xuXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWU6IHN0cmluZyA9ICdzZW50cnktbG9nZ2VyJztcblxuICAgIHB1YmxpYyBub3RpY2UobXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIFNlbnRyeUxvZ2dlci5pbml0V2hlbk5lY2Vzc2FyeSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyB3YXJuKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBTZW50cnlMb2dnZXIuaW5pdFdoZW5OZWNlc3NhcnkoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZXJyb3IobXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG5cbiAgICAgICAgU2VudHJ5TG9nZ2VyLmluaXRXaGVuTmVjZXNzYXJ5KCk7XG5cbiAgICAgICAgaWYgKHJlYWR5KSB7XG5cbiAgICAgICAgICAgIGFyZ3MuZm9yRWFjaChhcmcgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKCBhcmcgaW5zdGFuY2VvZiBFcnJvcikge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgY2FwdHVyZXMgJ2hhbmRsZXMnIGV4Y2VwdGlvbnMgYXMgU2VudHJ5IHdvdWxkbid0IGFjdHVhbGx5XG4gICAgICAgICAgICAgICAgICAgIC8vIGNhcHR1cmUgdGhlc2UgYXMgdGhleSBhcmVuJ3Qgc3VyZmFjZWQgdG8gRWxlY3Ryb24uXG4gICAgICAgICAgICAgICAgICAgIGNhcHR1cmVFeGNlcHRpb24oYXJnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgaW5mbyhtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgU2VudHJ5TG9nZ2VyLmluaXRXaGVuTmVjZXNzYXJ5KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHZlcmJvc2UobXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIFNlbnRyeUxvZ2dlci5pbml0V2hlbk5lY2Vzc2FyeSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWJ1Zyhtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgU2VudHJ5TG9nZ2VyLmluaXRXaGVuTmVjZXNzYXJ5KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHN5bmMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIFNlbnRyeUxvZ2dlci5pbml0V2hlbk5lY2Vzc2FyeSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgaXNFbmFibGVkKCkge1xuXG4gICAgICAgIGlmIChpc1ByZXNlbnQocHJvY2Vzcy5lbnYuUE9MQVJfU0VOVFJZX0VOQUJMRUQpKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvY2Vzcy5lbnYuUE9MQVJfU0VOVFJZX0VOQUJMRUQgPT09ICd0cnVlJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhIGlzUHJlc2VudChwcm9jZXNzLmVudi5TTkFQKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBpbml0V2hlbk5lY2Vzc2FyeSgpIHtcblxuICAgICAgICBpZiAoaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIGlmIChTZW50cnlMb2dnZXIuaXNFbmFibGVkKCkpIHtcbiAgICAgICAgICAgICAgICBpbml0KHtcbiAgICAgICAgICAgICAgICAgICAgZHNuOiAnaHR0cHM6Ly8yZThiOGNhNmU2YmY0YmY1OGQ3MzVmMmE0MDVlY2IyMEBzZW50cnkuaW8vMTI3MzcwNycsXG4gICAgICAgICAgICAgICAgICAgIC8vIG1vcmUgb3B0aW9ucy4uLlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZWFkeSA9IHRydWU7XG5cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlVuYWJsZSB0byBpbml0aWFsaXplIHNlbnRyeTogXCIsIGUpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn1cblxuIl19