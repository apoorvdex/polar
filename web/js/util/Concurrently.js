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
class Concurrently {
    static waitForPredicate(callable, predicate, intervalMS = 250) {
        return new Promise((resolve, reject) => {
            let executor = () => __awaiter(this, void 0, void 0, function* () {
                try {
                    let val = yield callable();
                    if (predicate(val)) {
                        resolve(val);
                        return;
                    }
                    else {
                        setTimeout(executor, intervalMS);
                    }
                }
                catch (e) {
                    reject(e);
                }
            });
            setTimeout(executor, 0);
        });
    }
}
exports.Concurrently = Concurrently;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uY3VycmVudGx5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ29uY3VycmVudGx5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxNQUFhLFlBQVk7SUFRZCxNQUFNLENBQUMsZ0JBQWdCLENBQUksUUFBcUIsRUFBRSxTQUF1QixFQUFFLGFBQXFCLEdBQUc7UUFFdEcsT0FBTyxJQUFJLE9BQU8sQ0FBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUV0QyxJQUFJLFFBQVEsR0FBRyxHQUFTLEVBQUU7Z0JBRXRCLElBQUk7b0JBRUEsSUFBSSxHQUFHLEdBQUcsTUFBTSxRQUFRLEVBQUUsQ0FBQztvQkFFM0IsSUFBRyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7d0JBRWYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNiLE9BQU87cUJBRVY7eUJBQU07d0JBQ0gsVUFBVSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztxQkFDcEM7aUJBR0o7Z0JBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ1IsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNiO1lBRUwsQ0FBQyxDQUFBLENBQUM7WUFFRixVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTVCLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztDQUVKO0FBeENELG9DQXdDQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb25jdXJyZW50bHkge1xuXG4gICAgLyoqXG4gICAgICogS2VlcCBleGVjdXRpbmcgdGhlIGFzeW5jIGZ1bmN0aW9uIGluIHRoZSBiYWNrZ3JvdW5kIHVudGlsIHRoZSBwcmVkaWNhdGVcbiAgICAgKiByZXR1cm5zIHRydWUuICBUaGlzIGNhbiBiZSB1c2VkIGZvciB0ZXN0aW5nIG9yIHdoZXJlIHdlIGV4cGVjdCBhIHZhbHVlXG4gICAgICogdG8gYmUgdXBkYXRlZCB5ZXQgaGF2ZSBubyBldmVudCBub3RpZmljYXRpb24gb2Ygd2hlbiBpdCB3aWxsIGFjdHVhbGx5XG4gICAgICogaGFwcGVuLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgd2FpdEZvclByZWRpY2F0ZTxUPihjYWxsYWJsZTogQ2FsbGFibGU8VD4sIHByZWRpY2F0ZTogUHJlZGljYXRlPFQ+LCBpbnRlcnZhbE1TOiBudW1iZXIgPSAyNTApOiBQcm9taXNlPFQ+IHtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8VD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgICAgICAgICBsZXQgZXhlY3V0b3IgPSBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWwgPSBhd2FpdCBjYWxsYWJsZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKHByZWRpY2F0ZSh2YWwpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChleGVjdXRvciwgaW50ZXJ2YWxNUyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGV4ZWN1dG9yLCAwKTtcblxuICAgICAgICB9KTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhbGxhYmxlPFQ+IHtcbiAgICAoKTogUHJvbWlzZTxUPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcmVkaWNhdGU8VD4ge1xuICAgICh2YWw6IFQpOiBib29sZWFuO1xufVxuIl19