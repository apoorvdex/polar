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
const Optional_1 = require("./ts/Optional");
class LocalPrefs {
    static mark(key, value = true) {
        if (value) {
            this.set(key, 'true');
        }
        else {
            this.set(key, 'false');
        }
    }
    static toggle(key, value = false) {
        this.mark(key, !this.isMarked(key, value));
    }
    static markOnceRequested(key) {
        const result = this.isMarked(key);
        this.mark(key);
        return result;
    }
    static markOnceExecuted(key, handler, otherwise) {
        return __awaiter(this, void 0, void 0, function* () {
            const marked = this.isMarked(key);
            if (marked) {
                if (otherwise) {
                    yield otherwise();
                }
                return;
            }
            yield handler();
            this.mark(key);
        });
    }
    static isMarked(key, defaultValue = false) {
        const currentValue = this.get(key).getOrElse(`${defaultValue}`);
        return currentValue === 'true';
    }
    static isDelayed(key, duration) {
        const durationMS = TimeDurations_1.TimeDurations.toMillis(duration);
        const pref = this.get(key).getOrUndefined();
        if (pref && pref.match(/[0-9]+/)) {
            const until = parseInt(pref, 10);
            const now = Date.now();
            if (now < until) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    static markDelayed(key, duration) {
        const durationMS = TimeDurations_1.TimeDurations.toMillis(duration);
        const until = Date.now() + durationMS;
        this.set(key, `${until}`);
    }
    static defined(key) {
        return this.get(key).isPresent();
    }
    static get(key) {
        return Optional_1.Optional.of(window.localStorage.getItem(key));
    }
    static set(key, value) {
        window.localStorage.setItem(key, value);
    }
}
exports.LocalPrefs = LocalPrefs;
const TimeDurations_1 = require("./TimeDurations");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9jYWxQcmVmcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkxvY2FsUHJlZnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDRDQUF1QztBQUt2QyxNQUFhLFVBQVU7SUFFWixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQVcsRUFBRSxRQUFpQixJQUFJO1FBRWpELElBQUksS0FBSyxFQUFFO1lBQ1AsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDekI7YUFBTTtZQUNILElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzFCO0lBQ0wsQ0FBQztJQUVNLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBVyxFQUFFLFFBQWlCLEtBQUs7UUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFLTSxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBVztRQUV2QyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWxDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFZixPQUFPLE1BQU0sQ0FBQztJQUVsQixDQUFDO0lBRU0sTUFBTSxDQUFPLGdCQUFnQixDQUFDLEdBQVcsRUFDWCxPQUE0QixFQUM1QixTQUErQjs7WUFFaEUsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVsQyxJQUFJLE1BQU0sRUFBRTtnQkFFUixJQUFJLFNBQVMsRUFBRTtvQkFDWCxNQUFNLFNBQVMsRUFBRSxDQUFDO2lCQUNyQjtnQkFFRCxPQUFPO2FBQ1Y7WUFFRCxNQUFNLE9BQU8sRUFBRSxDQUFDO1lBRWhCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFbkIsQ0FBQztLQUFBO0lBRU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFXLEVBQUUsZUFBd0IsS0FBSztRQUU3RCxNQUFNLFlBQVksR0FDZCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLFlBQVksRUFBRSxDQUFDLENBQUM7UUFFL0MsT0FBTyxZQUFZLEtBQUssTUFBTSxDQUFDO0lBRW5DLENBQUM7SUFFTSxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQVcsRUFBRSxRQUFxQjtRQUV0RCxNQUFNLFVBQVUsR0FBRyw2QkFBYSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVwRCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRTVDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFFOUIsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNqQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFFdkIsSUFBSSxHQUFHLEdBQUcsS0FBSyxFQUFFO2dCQUNiLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7aUJBQU07Z0JBQ0gsT0FBTyxLQUFLLENBQUM7YUFDaEI7U0FFSjthQUFNO1lBQ0gsT0FBTyxLQUFLLENBQUM7U0FDaEI7SUFFTCxDQUFDO0lBRU0sTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFXLEVBQUUsUUFBcUI7UUFFeEQsTUFBTSxVQUFVLEdBQUcsNkJBQWEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLFVBQVUsQ0FBQztRQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUM7SUFFOUIsQ0FBQztJQUtNLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBVztRQUM3QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBVztRQUN6QixPQUFPLG1CQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVNLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBVyxFQUFFLEtBQWE7UUFDeEMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7Q0FFSjtBQXhHRCxnQ0F3R0M7QUFFRCxtREFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09wdGlvbmFsfSBmcm9tICcuL3RzL09wdGlvbmFsJztcblxuLyoqXG4gKiBARGVwcmVjYXRlZCB1c2UgdGhlIG5ldyBJUHJlZnMgc3lzdGVtc1xuICovXG5leHBvcnQgY2xhc3MgTG9jYWxQcmVmcyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIG1hcmsoa2V5OiBzdHJpbmcsIHZhbHVlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoa2V5LCAndHJ1ZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXQoa2V5LCAnZmFsc2UnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgdG9nZ2xlKGtleTogc3RyaW5nLCB2YWx1ZTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMubWFyayhrZXksICEgdGhpcy5pc01hcmtlZChrZXksIHZhbHVlKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGluaXRpYWwgdmFsdWUgaXMgZmFsc2UsIEFmdGVyIHRoYXQgdGhlIHZhbHVlIGlzIHRydWUuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBtYXJrT25jZVJlcXVlc3RlZChrZXk6IHN0cmluZykge1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuaXNNYXJrZWQoa2V5KTtcblxuICAgICAgICB0aGlzLm1hcmsoa2V5KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBtYXJrT25jZUV4ZWN1dGVkKGtleTogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiBQcm9taXNlPHZvaWQ+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlcndpc2U/OiAoKSA9PiBQcm9taXNlPHZvaWQ+KTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICAgICAgY29uc3QgbWFya2VkID0gdGhpcy5pc01hcmtlZChrZXkpO1xuXG4gICAgICAgIGlmIChtYXJrZWQpIHtcblxuICAgICAgICAgICAgaWYgKG90aGVyd2lzZSkge1xuICAgICAgICAgICAgICAgIGF3YWl0IG90aGVyd2lzZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCBoYW5kbGVyKCk7XG5cbiAgICAgICAgdGhpcy5tYXJrKGtleSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGlzTWFya2VkKGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IGJvb2xlYW4gPSBmYWxzZSkge1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9XG4gICAgICAgICAgICB0aGlzLmdldChrZXkpLmdldE9yRWxzZShgJHtkZWZhdWx0VmFsdWV9YCk7XG5cbiAgICAgICAgcmV0dXJuIGN1cnJlbnRWYWx1ZSA9PT0gJ3RydWUnO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBpc0RlbGF5ZWQoa2V5OiBzdHJpbmcsIGR1cmF0aW9uOiBEdXJhdGlvblN0cikge1xuXG4gICAgICAgIGNvbnN0IGR1cmF0aW9uTVMgPSBUaW1lRHVyYXRpb25zLnRvTWlsbGlzKGR1cmF0aW9uKTtcblxuICAgICAgICBjb25zdCBwcmVmID0gdGhpcy5nZXQoa2V5KS5nZXRPclVuZGVmaW5lZCgpO1xuXG4gICAgICAgIGlmIChwcmVmICYmIHByZWYubWF0Y2goL1swLTldKy8pKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHVudGlsID0gcGFyc2VJbnQocHJlZiwgMTApO1xuICAgICAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcblxuICAgICAgICAgICAgaWYgKG5vdyA8IHVudGlsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIG1hcmtEZWxheWVkKGtleTogc3RyaW5nLCBkdXJhdGlvbjogRHVyYXRpb25TdHIpIHtcblxuICAgICAgICBjb25zdCBkdXJhdGlvbk1TID0gVGltZUR1cmF0aW9ucy50b01pbGxpcyhkdXJhdGlvbik7XG4gICAgICAgIGNvbnN0IHVudGlsID0gRGF0ZS5ub3coKSArIGR1cmF0aW9uTVM7XG4gICAgICAgIHRoaXMuc2V0KGtleSwgYCR7dW50aWx9YCk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdHJ1ZSBpZiB0aGUgZ2l2ZW4gcHJlZiBpcyBkZWZpbmVkLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZGVmaW5lZChrZXk6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoa2V5KS5pc1ByZXNlbnQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldChrZXk6IHN0cmluZyk6IE9wdGlvbmFsPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gT3B0aW9uYWwub2Yod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgICB9XG5cbn1cblxuaW1wb3J0IHtEdXJhdGlvblN0ciwgVGltZUR1cmF0aW9uc30gZnJvbSAnLi9UaW1lRHVyYXRpb25zJztcbiJdfQ==