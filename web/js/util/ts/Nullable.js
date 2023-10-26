"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Nullable {
    constructor() {
        this.value = undefined;
    }
    get() {
        if (this.value === undefined || this.value == null) {
            throw new Error("Value is undefined");
        }
        return this.value;
    }
    getOrElse(value) {
        if (this.value !== undefined && this.value !== null) {
            return this.value;
        }
        return value;
    }
    isPresent() {
        return this.value !== undefined && this.value !== null;
    }
    set(value) {
        this.value = value;
    }
}
exports.Nullable = Nullable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTnVsbGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJOdWxsYWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLE1BQWEsUUFBUTtJQUFyQjtRQUVZLFVBQUssR0FBTyxTQUFTLENBQUM7SUE4QmxDLENBQUM7SUE1QlUsR0FBRztRQUVOLElBQUcsSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFDL0MsTUFBTSxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1NBQ3pDO1FBRUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBRXRCLENBQUM7SUFFTSxTQUFTLENBQUMsS0FBUTtRQUVyQixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ2pELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNyQjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBRWpCLENBQUM7SUFFTSxTQUFTO1FBQ1osT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQztJQUMzRCxDQUFDO0lBRU0sR0FBRyxDQUFDLEtBQVE7UUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0NBRUo7QUFoQ0QsNEJBZ0NDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBIE51bGxhYmxlIHR5cGUgdGhhdCBjYW4gYmUgbXV0YXRlcyAvIHNldC4gIFRoZXJlIGFyZSBzdGlsbCBwYXR0ZXJucyB3aGVyZVxuICogbnVsbCB0eXBlcyBtYXkgYmUgdmFsdWFibGUgd2l0aG91dCBjb25zdGFudGx5IGNoZWNraW5nIHRoZW0uXG4gKi9cbmV4cG9ydCBjbGFzcyBOdWxsYWJsZTxUPiB7XG5cbiAgICBwcml2YXRlIHZhbHVlPzogVCA9IHVuZGVmaW5lZDtcblxuICAgIHB1YmxpYyBnZXQoKTogVCB7XG5cbiAgICAgICAgaWYodGhpcy52YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMudmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVmFsdWUgaXMgdW5kZWZpbmVkXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0T3JFbHNlKHZhbHVlOiBUKTogVCB7XG5cbiAgICAgICAgaWYgKHRoaXMudmFsdWUgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBpc1ByZXNlbnQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlICE9PSB1bmRlZmluZWQgJiYgdGhpcy52YWx1ZSAhPT0gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0KHZhbHVlOiBUKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbn1cbiJdfQ==