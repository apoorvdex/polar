"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SerializedObject {
    constructor(val) {
    }
    init(val) {
        if (typeof val === "object") {
            Object.assign(this, val);
            this.setup();
            this.validate();
        }
    }
    setup() {
    }
    validate() {
    }
}
exports.SerializedObject = SerializedObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VyaWFsaXplZE9iamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNlcmlhbGl6ZWRPYmplY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFNQSxNQUFhLGdCQUFnQjtJQUV6QixZQUFZLEdBQStCO0lBRTNDLENBQUM7SUFFTSxJQUFJLENBQUMsR0FBUTtRQUVoQixJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUN6QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDYixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkI7SUFFTCxDQUFDO0lBRU0sS0FBSztJQUVaLENBQUM7SUFFTSxRQUFRO0lBRWYsQ0FBQztDQUVKO0FBeEJELDRDQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBCYXNpYyBzZXJpYWxpemVkIG9iamVjdCBwYXR0ZXJuLiBUYWtlIGEgY2xvc3VyZSBhcyBhbiBhcmd1bWVudCB0byBpbml0LFxuICogYW5kIHRoZW4gYXNzaWduIHRoZSBmaWVsZHMuICBUaGVuIHNldHVwIGFuZCB2YWxpZGF0ZSB0aGF0IHdlIGhhdmUgb3VyXG4gKiByZXF1aXJlZCBkYXRhIHN0cnVjdHVyZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBTZXJpYWxpemVkT2JqZWN0IHtcblxuICAgIGNvbnN0cnVjdG9yKHZhbD86IFBhcnRpYWw8U2VyaWFsaXplZE9iamVjdD4pIHtcbiAgICAgICAgLy8gbm9vcFxuICAgIH1cblxuICAgIHB1YmxpYyBpbml0KHZhbDogYW55KTogdm9pZCB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgdmFsKTtcbiAgICAgICAgICAgIHRoaXMuc2V0dXAoKTtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIHNldHVwKCkge1xuXG4gICAgfVxuXG4gICAgcHVibGljIHZhbGlkYXRlKCkge1xuXG4gICAgfVxuXG59XG4iXX0=