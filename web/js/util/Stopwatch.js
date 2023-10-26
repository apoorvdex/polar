"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Stopwatch {
    constructor(started) {
        this.started = started;
    }
    stop() {
        if (this.stopped === undefined) {
            this.stopped = Date.now();
        }
        return new TrackedDuration(this.started, this.stopped);
    }
}
exports.Stopwatch = Stopwatch;
class TrackedDuration {
    constructor(started, stopped) {
        this.started = started;
        this.stopped = stopped;
        this.durationMS = stopped - started;
    }
    toString() {
        return `durationMS: ${this.durationMS}`;
    }
}
exports.TrackedDuration = TrackedDuration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RvcHdhdGNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU3RvcHdhdGNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBYSxTQUFTO0lBTWxCLFlBQVksT0FBZTtRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUMzQixDQUFDO0lBRU0sSUFBSTtRQUVQLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDN0I7UUFFRCxPQUFPLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQVEsQ0FBQyxDQUFDO0lBRTVELENBQUM7Q0FFSjtBQXBCRCw4QkFvQkM7QUFFRCxNQUFhLGVBQWU7SUFReEIsWUFBWSxPQUFlLEVBQUUsT0FBZTtRQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEMsQ0FBQztJQUVNLFFBQVE7UUFDWCxPQUFPLGVBQWUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVDLENBQUM7Q0FFSjtBQWxCRCwwQ0FrQkMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgU3RvcHdhdGNoIHtcblxuICAgIHB1YmxpYyByZWFkb25seSBzdGFydGVkOiBudW1iZXI7XG5cbiAgICBwdWJsaWMgc3RvcHBlZD86IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHN0YXJ0ZWQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBzdGFydGVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdG9wKCkge1xuXG4gICAgICAgIGlmICh0aGlzLnN0b3BwZWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5zdG9wcGVkID0gRGF0ZS5ub3coKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgVHJhY2tlZER1cmF0aW9uKHRoaXMuc3RhcnRlZCwgdGhpcy5zdG9wcGVkISk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIFRyYWNrZWREdXJhdGlvbiB7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgc3RhcnRlZDogbnVtYmVyO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IHN0b3BwZWQ6IG51bWJlcjtcblxuICAgIHB1YmxpYyByZWFkb25seSBkdXJhdGlvbk1TOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihzdGFydGVkOiBudW1iZXIsIHN0b3BwZWQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBzdGFydGVkO1xuICAgICAgICB0aGlzLnN0b3BwZWQgPSBzdG9wcGVkO1xuICAgICAgICB0aGlzLmR1cmF0aW9uTVMgPSBzdG9wcGVkIC0gc3RhcnRlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBgZHVyYXRpb25NUzogJHt0aGlzLmR1cmF0aW9uTVN9YDtcbiAgICB9XG5cbn1cbiJdfQ==