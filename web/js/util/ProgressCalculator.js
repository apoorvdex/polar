"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProgressCalculator {
    constructor(total, initial = 0) {
        this._value = 0;
        this._value = initial;
        this._total = total;
    }
    incr() {
        ++this._value;
    }
    value() {
        return this._value;
    }
    total() {
        return this._total;
    }
    percentage() {
        if (this._total === 0) {
            return 100;
        }
        return 100 * (this._value / this._total);
    }
    static calculate(count, total, defaultValue = 0) {
        if (total === 0) {
            return defaultValue;
        }
        return 100 * (count / total);
    }
}
exports.ProgressCalculator = ProgressCalculator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NDYWxjdWxhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUHJvZ3Jlc3NDYWxjdWxhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBTUEsTUFBYSxrQkFBa0I7SUFhM0IsWUFBWSxLQUFhLEVBQUUsVUFBa0IsQ0FBQztRQVZ0QyxXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBV3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFFTSxJQUFJO1FBQ1AsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFTSxLQUFLO1FBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxLQUFLO1FBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxVQUFVO1FBRWIsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNuQixPQUFPLEdBQUcsQ0FBQztTQUNkO1FBRUQsT0FBTyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRU0sTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFhLEVBQUUsS0FBYSxFQUFFLGVBQXVCLENBQUM7UUFFMUUsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ2IsT0FBTyxZQUFZLENBQUM7U0FDdkI7UUFFRCxPQUFPLEdBQUcsR0FBRyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0NBRUo7QUFoREQsZ0RBZ0RDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBwcm9ncmVzcyBvZiBhIHN0YXRlIG9mIHRhc2tzIGFuZCBhbGxvd3MgdXMgdG8ganVzdCBpbmNyKClcbiAqIHRoZSBwcm9ncmVzcyBpbiBhIGxvb3AgcmF0aGVyIHRoYW4gaGF2aW5nIHRoZSBtYXRoIGV4cG9zZWQgaW4gdGhlIGxvb3AuXG4gKlxuICogQERlcHJlY2F0ZWQgdXNlIFByb2dyZXNzVHJhY2tlclxuICovXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NDYWxjdWxhdG9yIHtcblxuICAgIC8vIG5vaW5zcGVjdGlvbiBUc0xpbnRcbiAgICBwcml2YXRlIF92YWx1ZTogbnVtYmVyID0gMDtcblxuICAgIC8vIG5vaW5zcGVjdGlvbiBUc0xpbnRcbiAgICBwcml2YXRlIHJlYWRvbmx5IF90b3RhbDogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdG90YWxcbiAgICAgKiBAcGFyYW0gaW5pdGlhbCBUaGUgaW5pdGlhbCB2YWx1ZSBvZiB0aGUgcHJvZ3Jlc3MgY291bnRlci5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih0b3RhbDogbnVtYmVyLCBpbml0aWFsOiBudW1iZXIgPSAwKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gaW5pdGlhbDtcbiAgICAgICAgdGhpcy5fdG90YWwgPSB0b3RhbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5jcigpIHtcbiAgICAgICAgKyt0aGlzLl92YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG90YWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90b3RhbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGVyY2VudGFnZSgpOiBudW1iZXIge1xuXG4gICAgICAgIGlmICh0aGlzLl90b3RhbCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDEwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAxMDAgKiAodGhpcy5fdmFsdWUgLyB0aGlzLl90b3RhbCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjYWxjdWxhdGUoY291bnQ6IG51bWJlciwgdG90YWw6IG51bWJlciwgZGVmYXVsdFZhbHVlOiBudW1iZXIgPSAwKSB7XG5cbiAgICAgICAgaWYgKHRvdGFsID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDEwMCAqIChjb3VudCAvIHRvdGFsKTtcbiAgICB9XG5cbn1cbiJdfQ==