"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Annotation_1 = require("./Annotation");
class ExtendedAnnotation extends Annotation_1.Annotation {
    constructor(val) {
        super(val);
        this.notes = {};
        this.questions = {};
        this.flashcards = {};
        this.init(val);
    }
    setup() {
        super.setup();
        if (!this.notes) {
            this.notes = {};
        }
    }
    validate() {
        super.validate();
    }
}
exports.ExtendedAnnotation = ExtendedAnnotation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0ZW5kZWRBbm5vdGF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRXh0ZW5kZWRBbm5vdGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQXdDO0FBS3hDLE1BQWEsa0JBQW1CLFNBQVEsdUJBQVU7SUF1QjlDLFlBQVksR0FBUTtRQUVoQixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFqQlIsVUFBSyxHQUEwQixFQUFFLENBQUM7UUFPbEMsY0FBUyxHQUE4QixFQUFFLENBQUM7UUFNMUMsZUFBVSxHQUErQixFQUFFLENBQUM7UUFNL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUVuQixDQUFDO0lBRU0sS0FBSztRQUVSLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVkLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDbkI7SUFFTCxDQUFDO0lBRU0sUUFBUTtRQUNYLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNyQixDQUFDO0NBRUo7QUE3Q0QsZ0RBNkNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBbm5vdGF0aW9ufSBmcm9tICcuL0Fubm90YXRpb24nO1xuaW1wb3J0IHtGbGFzaGNhcmR9IGZyb20gJy4vRmxhc2hjYXJkJztcbmltcG9ydCB7Tm90ZX0gZnJvbSAnLi9Ob3RlJztcbmltcG9ydCB7UXVlc3Rpb259IGZyb20gJy4vUXVlc3Rpb24nO1xuXG5leHBvcnQgY2xhc3MgRXh0ZW5kZWRBbm5vdGF0aW9uIGV4dGVuZHMgQW5ub3RhdGlvbiB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbm90ZSBmb3IgdGhpcyBhbm5vdGF0aW9uLlxuICAgICAqXG4gICAgICogQERlcHJlY2F0ZWQuICBXZSdyZSBtb3ZpbmcgdG8gYXR0YWNobWVudHMgc3RvcmVkIGFzIHBvaW50ZXJzIHRvIGtlZXBcbiAgICAgKiB0aGVzZSBvYmplY3QgaW1tdXRhYmxlLlxuICAgICAqL1xuICAgIHB1YmxpYyBub3Rlczoge1trZXk6IHN0cmluZ106IE5vdGV9ID0ge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbm90ZSBmb3IgdGhpcyBhbm5vdGF0aW9uLlxuICAgICAqIEBEZXByZWNhdGVkLiAgV2UncmUgbW92aW5nIHRvIGF0dGFjaG1lbnRzIHN0b3JlZCBhcyBwb2ludGVycyB0byBrZWVwXG4gICAgICogdGhlc2Ugb2JqZWN0IGltbXV0YWJsZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcXVlc3Rpb25zOiB7W2tleTogc3RyaW5nXTogUXVlc3Rpb259ID0ge307XG5cbiAgICAvKipcbiAgICAgKiBARGVwcmVjYXRlZC4gIFdlJ3JlIG1vdmluZyB0byBhdHRhY2htZW50cyBzdG9yZWQgYXMgcG9pbnRlcnMgdG8ga2VlcFxuICAgICAqIHRoZXNlIG9iamVjdCBpbW11dGFibGUuXG4gICAgICovXG4gICAgcHVibGljIGZsYXNoY2FyZHM6IHtba2V5OiBzdHJpbmddOiBGbGFzaGNhcmR9ID0ge307XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWw6IGFueSkge1xuXG4gICAgICAgIHN1cGVyKHZhbCk7XG5cbiAgICAgICAgdGhpcy5pbml0KHZhbCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0dXAoKSB7XG5cbiAgICAgICAgc3VwZXIuc2V0dXAoKTtcblxuICAgICAgICBpZiAoIXRoaXMubm90ZXMpIHtcbiAgICAgICAgICAgIHRoaXMubm90ZXMgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIHZhbGlkYXRlKCkge1xuICAgICAgICBzdXBlci52YWxpZGF0ZSgpO1xuICAgIH1cblxufVxuIl19