"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Selections {
    static toRanges(selection) {
        const result = [];
        for (let idx = 0; idx < selection.rangeCount; idx++) {
            const range = selection.getRangeAt(idx);
            result.push(range);
        }
        return result;
    }
}
exports.Selections = Selections;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VsZWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNlbGVjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxNQUFhLFVBQVU7SUFRWixNQUFNLENBQUMsUUFBUSxDQUFDLFNBQW9CO1FBRXZDLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUVsQixLQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsU0FBUyxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUdqRCxNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FFdEI7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0NBRUo7QUF2QkQsZ0NBdUJDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKlxuICovXG5cbmV4cG9ydCBjbGFzcyBTZWxlY3Rpb25zIHtcblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgcmFuZ2VzIG9mIGEgc2VsZWN0aW9uIGFzIGFuIGFycmF5IChlYXNpZXIgQVBJKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzZWxlY3Rpb24ge1NlbGVjdGlvbn1cbiAgICAgKiBAcmV0dXJuIHtBcnJheTxSYW5nZT59XG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyB0b1JhbmdlcyhzZWxlY3Rpb246IFNlbGVjdGlvbik6IFJhbmdlW10ge1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IHNlbGVjdGlvbi5yYW5nZUNvdW50OyBpZHgrKykge1xuXG4gICAgICAgICAgICAvLyBub3RlIHRoYXQgd2UgYWxtb3N0IGFsd2F5cyBoYXZlIDEgc2VsZWN0aW9uXG4gICAgICAgICAgICBjb25zdCByYW5nZSA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KGlkeCk7XG4gICAgICAgICAgICByZXN1bHQucHVzaChyYW5nZSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG59XG4iXX0=