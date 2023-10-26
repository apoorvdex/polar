"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const timekeeper_1 = __importDefault(require("timekeeper"));
const TimeDurations_1 = require("../util/TimeDurations");
const time = new Date(1330688329321);
class TestingTime {
    static freeze() {
        timekeeper_1.default.freeze(time);
    }
    static unfreeze() {
        timekeeper_1.default.reset();
    }
    static forward(duration) {
        timekeeper_1.default.freeze(new Date(Date.now() + this.toDurationMS(duration)));
    }
    static toDurationMS(duration) {
        if (typeof duration === 'string') {
            return TimeDurations_1.TimeDurations.toMillis(duration);
        }
        else {
            return duration;
        }
    }
}
exports.TestingTime = TestingTime;
function freeze() {
    TestingTime.freeze();
}
exports.freeze = freeze;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdGluZ1RpbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUZXN0aW5nVGltZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLDREQUFvQztBQUNwQyx5REFBNkU7QUFFN0UsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7QUFFckMsTUFBYSxXQUFXO0lBS2IsTUFBTSxDQUFDLE1BQU07UUFDaEIsb0JBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxRQUFRO1FBQ2xCLG9CQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBa0M7UUFDcEQsb0JBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFTyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQWtDO1FBRTFELElBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxFQUFFO1lBQzlCLE9BQU8sNkJBQWEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDM0M7YUFBTTtZQUNILE9BQU8sUUFBUSxDQUFDO1NBQ25CO0lBRUwsQ0FBQztDQUVKO0FBM0JELGtDQTJCQztBQUVELFNBQWdCLE1BQU07SUFDbEIsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3pCLENBQUM7QUFGRCx3QkFFQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHRpbWVrZWVwZXIgZnJvbSAndGltZWtlZXBlcic7XG5pbXBvcnQge0R1cmF0aW9uTVMsIER1cmF0aW9uU3RyLCBUaW1lRHVyYXRpb25zfSBmcm9tICcuLi91dGlsL1RpbWVEdXJhdGlvbnMnO1xuXG5jb25zdCB0aW1lID0gbmV3IERhdGUoMTMzMDY4ODMyOTMyMSk7XG5cbmV4cG9ydCBjbGFzcyBUZXN0aW5nVGltZSB7XG5cbiAgICAvKipcbiAgICAgKiBGcmVlemUgdGltZSBmb3IgdGVzdGluZyBhdCAnMjAxMi0wMy0wMlQxMTozODo0OS4zMjFaJ1xuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZnJlZXplKCkge1xuICAgICAgICB0aW1la2VlcGVyLmZyZWV6ZSh0aW1lKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHVuZnJlZXplKCkge1xuICAgICAgICB0aW1la2VlcGVyLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBmb3J3YXJkKGR1cmF0aW9uOiBEdXJhdGlvbk1TIHwgRHVyYXRpb25TdHIpIHtcbiAgICAgICAgdGltZWtlZXBlci5mcmVlemUobmV3IERhdGUoRGF0ZS5ub3coKSArIHRoaXMudG9EdXJhdGlvbk1TKGR1cmF0aW9uKSkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIHRvRHVyYXRpb25NUyhkdXJhdGlvbjogRHVyYXRpb25NUyB8IER1cmF0aW9uU3RyKSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBkdXJhdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBUaW1lRHVyYXRpb25zLnRvTWlsbGlzKGR1cmF0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkdXJhdGlvbjtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmVlemUoKSB7XG4gICAgVGVzdGluZ1RpbWUuZnJlZXplKCk7XG59XG5cbiJdfQ==