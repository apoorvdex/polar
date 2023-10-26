"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Objects_1 = require("../util/Objects");
class Throttler {
    constructor(delegate, opts = new DefaultThrottlerOpts()) {
        this.nrRequestsOutstanding = 0;
        this.hasTimeout = false;
        this.delegate = delegate;
        this.opts = Objects_1.Objects.defaults(opts, new DefaultThrottlerOpts());
    }
    exec() {
        ++this.nrRequestsOutstanding;
        if (this.nrRequestsOutstanding > this.opts.maxRequests) {
            this.doExec();
        }
        else {
            if (!this.hasTimeout) {
                setTimeout(() => this.doExecViaTimeout(), this.opts.maxTimeout);
                this.hasTimeout = true;
            }
        }
    }
    doExecViaTimeout() {
        this.doExec();
        this.hasTimeout = false;
    }
    doExec() {
        if (this.nrRequestsOutstanding === 0) {
            return;
        }
        this.nrRequestsOutstanding = 0;
        this.delegate();
    }
}
exports.Throttler = Throttler;
class DefaultThrottlerOpts {
    constructor() {
        this.maxRequests = 50;
        this.maxTimeout = 250;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhyb3R0bGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVGhyb3R0bGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQXdDO0FBTXhDLE1BQWEsU0FBUztJQVVsQixZQUFZLFFBQW9CLEVBQ3BCLE9BQStCLElBQUksb0JBQW9CLEVBQUU7UUFMN0QsMEJBQXFCLEdBQVcsQ0FBQyxDQUFDO1FBRWxDLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFLaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxvQkFBb0IsRUFBRSxDQUFDLENBQUM7SUFFbkUsQ0FBQztJQUtNLElBQUk7UUFFUCxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUU3QixJQUFJLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDakI7YUFBTTtZQUlILElBQUksQ0FBRSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNuQixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDaEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7YUFDMUI7U0FFSjtJQUVMLENBQUM7SUFFTyxnQkFBZ0I7UUFFcEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWQsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFFNUIsQ0FBQztJQUVPLE1BQU07UUFFVixJQUFJLElBQUksQ0FBQyxxQkFBcUIsS0FBSyxDQUFDLEVBQUU7WUFFbEMsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLHFCQUFxQixHQUFHLENBQUMsQ0FBQztRQUUvQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFFcEIsQ0FBQztDQUdKO0FBOURELDhCQThEQztBQWdCRCxNQUFNLG9CQUFvQjtJQUExQjtRQUNvQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixlQUFVLEdBQUcsR0FBRyxDQUFDO0lBQ3JDLENBQUM7Q0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JqZWN0c30gZnJvbSBcIi4uL3V0aWwvT2JqZWN0c1wiO1xuXG4vKipcbiAqIFRocm90dGxlcyBhIHNldCBvZiBvcGVyYXRpb25zIHRvIGEgbWF4IG9mIE4gb3BlcmF0aW9ucyBhdCBvbmNlIG9yIFRcbiAqIG1pbGxpc2Vjb25kcywgd2hpY2hldmVyIGhhcHBlbnMgZmlyc3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBUaHJvdHRsZXIge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBkZWxlZ2F0ZTogKCkgPT4gdm9pZDtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgb3B0czogVGhyb3R0bGVyT3B0cztcblxuICAgIHByaXZhdGUgbnJSZXF1ZXN0c091dHN0YW5kaW5nOiBudW1iZXIgPSAwO1xuXG4gICAgcHJpdmF0ZSBoYXNUaW1lb3V0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihkZWxlZ2F0ZTogKCkgPT4gdm9pZCxcbiAgICAgICAgICAgICAgICBvcHRzOiBQYXJ0aWFsPFRocm90dGxlck9wdHM+ID0gbmV3IERlZmF1bHRUaHJvdHRsZXJPcHRzKCkpIHtcblxuICAgICAgICB0aGlzLmRlbGVnYXRlID0gZGVsZWdhdGU7XG4gICAgICAgIHRoaXMub3B0cyA9IE9iamVjdHMuZGVmYXVsdHMob3B0cywgbmV3IERlZmF1bHRUaHJvdHRsZXJPcHRzKCkpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXhlYyB0aGUgZGVsZWdhdGUgZnVuY3Rpb24gYnV0IG9ubHkgYmFzZWQgb24gdGhlXG4gICAgICovXG4gICAgcHVibGljIGV4ZWMoKSB7XG5cbiAgICAgICAgKyt0aGlzLm5yUmVxdWVzdHNPdXRzdGFuZGluZztcblxuICAgICAgICBpZiAodGhpcy5uclJlcXVlc3RzT3V0c3RhbmRpbmcgPiB0aGlzLm9wdHMubWF4UmVxdWVzdHMpIHtcbiAgICAgICAgICAgIHRoaXMuZG9FeGVjKCk7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIC8vIHdlIG1pZ2h0IGhhdmUgdG8gc2V0dXAgdmlhIHRoZSB0aW1lb3V0IG5vdy5cblxuICAgICAgICAgICAgaWYgKCEgdGhpcy5oYXNUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmRvRXhlY1ZpYVRpbWVvdXQoKSwgdGhpcy5vcHRzLm1heFRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzVGltZW91dCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkb0V4ZWNWaWFUaW1lb3V0KCkge1xuXG4gICAgICAgIHRoaXMuZG9FeGVjKCk7XG5cbiAgICAgICAgdGhpcy5oYXNUaW1lb3V0ID0gZmFsc2U7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGRvRXhlYygpIHtcblxuICAgICAgICBpZiAodGhpcy5uclJlcXVlc3RzT3V0c3RhbmRpbmcgPT09IDApIHtcbiAgICAgICAgICAgIC8vIHdlIGhhdmUgYWxyZWFkeSBiZWVuIGV4ZWN1dGVkLlxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5uclJlcXVlc3RzT3V0c3RhbmRpbmcgPSAwO1xuXG4gICAgICAgIHRoaXMuZGVsZWdhdGUoKTtcblxuICAgIH1cblxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGhyb3R0bGVyT3B0cyB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbWF4IG51bWJlciBvZiBvcGVyYXRpb25zIHVudGlsIHdlIGV4ZWN1dGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbWF4UmVxdWVzdHM6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBtYXggdGltZSB1bnRpbCB3ZSBleGVjdXRlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1heFRpbWVvdXQ6IG51bWJlcjtcblxufVxuXG5jbGFzcyBEZWZhdWx0VGhyb3R0bGVyT3B0cyBpbXBsZW1lbnRzIFRocm90dGxlck9wdHMge1xuICAgIHB1YmxpYyByZWFkb25seSBtYXhSZXF1ZXN0cyA9IDUwO1xuICAgIHB1YmxpYyByZWFkb25seSBtYXhUaW1lb3V0ID0gMjUwO1xufVxuIl19