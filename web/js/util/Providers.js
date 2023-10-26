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
const TimeDurations_1 = require("./TimeDurations");
class Providers {
    static toFunction(provider) {
        return () => provider.get();
    }
    static toInterface(provider) {
        return {
            get() {
                return provider();
            }
        };
    }
    static of(value) {
        return () => value;
    }
    static memoize(provider) {
        let memoized = false;
        let err;
        let memo;
        return () => {
            if (memoized) {
                if (err) {
                    throw err;
                }
                return memo;
            }
            try {
                memo = provider();
                return memo;
            }
            catch (e) {
                err = e;
                throw e;
            }
            finally {
                memoized = true;
            }
        };
    }
    static cached(duration, provider) {
        const durationMS = TimeDurations_1.TimeDurations.toMillis(duration);
        let lastUpdated = 0;
        let err;
        let value;
        return () => {
            if (Date.now() - lastUpdated < durationMS) {
                if (err) {
                    throw err;
                }
                return value;
            }
            try {
                value = provider();
                return value;
            }
            catch (e) {
                err = e;
                throw e;
            }
            finally {
                lastUpdated = Date.now();
            }
        };
    }
}
exports.Providers = Providers;
class AsyncProviders {
    static of(value) {
        return () => Promise.resolve(value);
    }
    static memoize(provider) {
        let memoized = false;
        let err;
        let memo;
        return () => __awaiter(this, void 0, void 0, function* () {
            if (memoized) {
                if (err) {
                    throw err;
                }
                return memo;
            }
            try {
                memo = yield provider();
                return memo;
            }
            catch (e) {
                err = e;
                throw e;
            }
            finally {
                memoized = true;
            }
        });
    }
}
exports.AsyncProviders = AsyncProviders;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvdmlkZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUHJvdmlkZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxtREFBMkQ7QUFjM0QsTUFBYSxTQUFTO0lBS1gsTUFBTSxDQUFDLFVBQVUsQ0FBSSxRQUFzQjtRQUM5QyxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRU0sTUFBTSxDQUFDLFdBQVcsQ0FBSSxRQUFxQjtRQUM5QyxPQUFPO1lBQ0gsR0FBRztnQkFDQyxPQUFPLFFBQVEsRUFBRSxDQUFDO1lBQ3RCLENBQUM7U0FDSixDQUFDO0lBQ04sQ0FBQztJQUtNLE1BQU0sQ0FBQyxFQUFFLENBQUksS0FBUTtRQUN4QixPQUFPLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBTU0sTUFBTSxDQUFDLE9BQU8sQ0FBSSxRQUFxQjtRQUUxQyxJQUFJLFFBQVEsR0FBWSxLQUFLLENBQUM7UUFHOUIsSUFBSSxHQUFzQixDQUFDO1FBRzNCLElBQUksSUFBbUIsQ0FBQztRQUV4QixPQUFPLEdBQUcsRUFBRTtZQUVSLElBQUksUUFBUSxFQUFFO2dCQUVWLElBQUksR0FBRyxFQUFFO29CQUNMLE1BQU0sR0FBRyxDQUFDO2lCQUNiO2dCQUVELE9BQU8sSUFBSyxDQUFDO2FBRWhCO1lBRUQsSUFBSTtnQkFFQSxJQUFJLEdBQUcsUUFBUSxFQUFFLENBQUM7Z0JBQ2xCLE9BQU8sSUFBSyxDQUFDO2FBRWhCO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1IsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFDUixNQUFNLENBQUMsQ0FBQzthQUNYO29CQUFTO2dCQUNOLFFBQVEsR0FBRyxJQUFJLENBQUM7YUFDbkI7UUFFTCxDQUFDLENBQUM7SUFFTixDQUFDO0lBTU0sTUFBTSxDQUFDLE1BQU0sQ0FBSSxRQUFxQixFQUNyQixRQUFxQjtRQUV6QyxNQUFNLFVBQVUsR0FBRyw2QkFBYSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVwRCxJQUFJLFdBQVcsR0FBVyxDQUFDLENBQUM7UUFHNUIsSUFBSSxHQUFzQixDQUFDO1FBRzNCLElBQUksS0FBb0IsQ0FBQztRQUV6QixPQUFPLEdBQUcsRUFBRTtZQUVSLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLFdBQVcsR0FBRyxVQUFVLEVBQUU7Z0JBRXZDLElBQUksR0FBRyxFQUFFO29CQUNMLE1BQU0sR0FBRyxDQUFDO2lCQUNiO2dCQUVELE9BQU8sS0FBTSxDQUFDO2FBRWpCO1lBRUQsSUFBSTtnQkFFQSxLQUFLLEdBQUcsUUFBUSxFQUFFLENBQUM7Z0JBQ25CLE9BQU8sS0FBTSxDQUFDO2FBRWpCO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1IsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFDUixNQUFNLENBQUMsQ0FBQzthQUNYO29CQUFTO2dCQUNOLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDNUI7UUFFTCxDQUFDLENBQUM7SUFFTixDQUFDO0NBR0o7QUFoSEQsOEJBZ0hDO0FBSUQsTUFBYSxjQUFjO0lBRWhCLE1BQU0sQ0FBQyxFQUFFLENBQUksS0FBUTtRQUN4QixPQUFPLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUlNLE1BQU0sQ0FBQyxPQUFPLENBQUksUUFBMEI7UUFFL0MsSUFBSSxRQUFRLEdBQVksS0FBSyxDQUFDO1FBRzlCLElBQUksR0FBc0IsQ0FBQztRQUczQixJQUFJLElBQW1CLENBQUM7UUFFeEIsT0FBTyxHQUFTLEVBQUU7WUFFZCxJQUFJLFFBQVEsRUFBRTtnQkFFVixJQUFJLEdBQUcsRUFBRTtvQkFDTCxNQUFNLEdBQUcsQ0FBQztpQkFDYjtnQkFFRCxPQUFPLElBQUssQ0FBQzthQUVoQjtZQUVELElBQUk7Z0JBRUEsSUFBSSxHQUFHLE1BQU0sUUFBUSxFQUFFLENBQUM7Z0JBQ3hCLE9BQU8sSUFBSyxDQUFDO2FBRWhCO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1IsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFDUixNQUFNLENBQUMsQ0FBQzthQUNYO29CQUFTO2dCQUNOLFFBQVEsR0FBRyxJQUFJLENBQUM7YUFDbkI7UUFFTCxDQUFDLENBQUEsQ0FBQztJQUVOLENBQUM7Q0FFSjtBQTlDRCx3Q0E4Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0R1cmF0aW9uU3RyLCBUaW1lRHVyYXRpb25zfSBmcm9tIFwiLi9UaW1lRHVyYXRpb25zXCI7XG5cbi8qKlxuICogQSBQcm92aWRlciBpcyBqdXN0IGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgZ2l2ZW4gdHlwZS5cbiAqL1xuZXhwb3J0IHR5cGUgUHJvdmlkZXI8VD4gPSAoKSA9PiBUO1xuXG4vKipcbiAqIEEgcHJvdmlkZXIgdGhhdCBjYW4gYmUgdXNlZCBhcyBhbiBpbnRlcmZhY2UuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVByb3ZpZGVyPFQ+IHtcbiAgICBnZXQoKTogVDtcbn1cblxuZXhwb3J0IGNsYXNzIFByb3ZpZGVycyB7XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IGEgcHJvdmlkZXIgaW50ZXJmYWNlIHRvIGEgZnVuY3Rpb24uXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyB0b0Z1bmN0aW9uPFQ+KHByb3ZpZGVyOiBJUHJvdmlkZXI8VD4pIHtcbiAgICAgICAgcmV0dXJuICgpID0+IHByb3ZpZGVyLmdldCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgdG9JbnRlcmZhY2U8VD4ocHJvdmlkZXI6IFByb3ZpZGVyPFQ+KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3ZpZGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIGEgcHJvdmlkZXIgdXNpbmcgdGhlIGdpdmVuIHZhbHVlLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgb2Y8VD4odmFsdWU6IFQpOiBQcm92aWRlcjxUPiB7XG4gICAgICAgIHJldHVybiAoKSA9PiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZW1vaXplIHRoZSBnaXZlbiBmdW5jdGlvbiB0byBpbXByb3ZlIGl0cyBwZXJmb3JtYW5jZSBvciBtYWtlIGl0XG4gICAgICogb3B0aW9uYWwuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBtZW1vaXplPFQ+KHByb3ZpZGVyOiBQcm92aWRlcjxUPik6IFByb3ZpZGVyPFQ+IHtcblxuICAgICAgICBsZXQgbWVtb2l6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICAvLyBhbiBlcnJvciB0aGF0IHRoZSBwcm92aWRlciB0aHJld1xuICAgICAgICBsZXQgZXJyOiBFcnJvciB8IHVuZGVmaW5lZDtcblxuICAgICAgICAvLyB0aGUgdmFsdWUgdGhhdCB0aGUgcHJvdmlkZXIgcmV0dXJuZWQuXG4gICAgICAgIGxldCBtZW1vOiBUIHwgdW5kZWZpbmVkO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG5cbiAgICAgICAgICAgIGlmIChtZW1vaXplZCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lbW8hO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgICAgICBtZW1vID0gcHJvdmlkZXIoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVtbyE7XG5cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBlcnIgPSBlO1xuICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIG1lbW9pemVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FjaGUgdGhlIGdpdmVuIGZ1bmN0aW9uIHRvIGF2b2lkIGNvbnRpbnVhbGx5IGZldGNoaW5nIHRoZSB1bmRlcmx5aW5nXG4gICAgICogdmFsdWUuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBjYWNoZWQ8VD4oZHVyYXRpb246IER1cmF0aW9uU3RyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyOiBQcm92aWRlcjxUPik6IFByb3ZpZGVyPFQ+IHtcblxuICAgICAgICBjb25zdCBkdXJhdGlvbk1TID0gVGltZUR1cmF0aW9ucy50b01pbGxpcyhkdXJhdGlvbik7XG5cbiAgICAgICAgbGV0IGxhc3RVcGRhdGVkOiBudW1iZXIgPSAwO1xuXG4gICAgICAgIC8vIGFuIGVycm9yIHRoYXQgdGhlIHByb3ZpZGVyIHRocmV3XG4gICAgICAgIGxldCBlcnI6IEVycm9yIHwgdW5kZWZpbmVkO1xuXG4gICAgICAgIC8vIHRoZSB2YWx1ZSB0aGF0IHRoZSBwcm92aWRlciByZXR1cm5lZC5cbiAgICAgICAgbGV0IHZhbHVlOiBUIHwgdW5kZWZpbmVkO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG5cbiAgICAgICAgICAgIGlmIChEYXRlLm5vdygpIC0gbGFzdFVwZGF0ZWQgPCBkdXJhdGlvbk1TKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUhO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHByb3ZpZGVyKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlITtcblxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGVyciA9IGU7XG4gICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgbGFzdFVwZGF0ZWQgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICB9XG5cblxufVxuXG5leHBvcnQgdHlwZSBBc3luY1Byb3ZpZGVyPFQ+ID0gKCkgPT4gUHJvbWlzZTxUPjtcblxuZXhwb3J0IGNsYXNzIEFzeW5jUHJvdmlkZXJzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgb2Y8VD4odmFsdWU6IFQpOiBBc3luY1Byb3ZpZGVyPFQ+IHtcbiAgICAgICAgcmV0dXJuICgpID0+IFByb21pc2UucmVzb2x2ZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBtZW1vaXplPFQ+KHByb3ZpZGVyOiBBc3luY1Byb3ZpZGVyPFQ+KTogQXN5bmNQcm92aWRlcjxUPiB7XG5cbiAgICAgICAgbGV0IG1lbW9pemVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgLy8gYW4gZXJyb3IgdGhhdCB0aGUgcHJvdmlkZXIgdGhyZXdcbiAgICAgICAgbGV0IGVycjogRXJyb3IgfCB1bmRlZmluZWQ7XG5cbiAgICAgICAgLy8gdGhlIHZhbHVlIHRoYXQgdGhlIHByb3ZpZGVyIHJldHVybmVkLlxuICAgICAgICBsZXQgbWVtbzogVCB8IHVuZGVmaW5lZDtcblxuICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICBpZiAobWVtb2l6ZWQpIHtcblxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBtZW1vITtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICAgICAgbWVtbyA9IGF3YWl0IHByb3ZpZGVyKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lbW8hO1xuXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgZXJyID0gZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBtZW1vaXplZCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgIH1cblxufVxuIl19