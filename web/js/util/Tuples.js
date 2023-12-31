"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Preconditions_1 = require("../Preconditions");
const Optional_1 = require("./ts/Optional");
class Tuples {
    static createSiblings(arr) {
        Preconditions_1.Preconditions.assertNotNull(arr, "arr");
        const result = [];
        for (let idx = 0; idx < arr.length; ++idx) {
            result.push({
                curr: arr[idx],
                prev: Optional_1.Optional.of(arr[idx - 1]).getOrUndefined(),
                next: Optional_1.Optional.of(arr[idx + 1]).getOrUndefined()
            });
        }
        return result;
    }
}
exports.Tuples = Tuples;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHVwbGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVHVwbGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0RBQStDO0FBQy9DLDRDQUF1QztBQUd2QyxNQUFhLE1BQU07SUFXUixNQUFNLENBQUMsY0FBYyxDQUFJLEdBQXFCO1FBRWpELDZCQUFhLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QyxNQUFNLE1BQU0sR0FBNEIsRUFBRSxDQUFDO1FBRTNDLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFO1lBRXZDLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ1IsSUFBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUM7Z0JBQ2QsSUFBSSxFQUFFLG1CQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUU7Z0JBQ2hELElBQUksRUFBRSxtQkFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFO2FBQ25ELENBQUMsQ0FBQztTQUVOO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFFbEIsQ0FBQztDQUVKO0FBL0JELHdCQStCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UHJlY29uZGl0aW9uc30gZnJvbSAnLi4vUHJlY29uZGl0aW9ucyc7XG5pbXBvcnQge09wdGlvbmFsfSBmcm9tICcuL3RzL09wdGlvbmFsJztcbmltcG9ydCB7SUFycmF5UG9zaXRpb259IGZyb20gJy4vRnVuY3Rpb25zJztcblxuZXhwb3J0IGNsYXNzIFR1cGxlcyB7XG5cbiAgICAvKipcbiAgICAgKiBHbyBvdmVyIHRoZSBhcnJheS1saWtlIG9iamVjdCBhbmQgcmV0dXJuIHR1cGxlcyB3aXRoIHByZXYsIGN1cnIsIGFuZCBuZXh0XG4gICAgICogcHJvcGVydGllcyBzbyB0aGF0IHdlIGNhbiBwZWVrIGF0IHNpYmxpbmdzIGVhc2lseS4gIElmIHRoZSBwcmV2IGFuZCAvIG9yXG4gICAgICogbmV4dCBhcmUgbm90IHByZXNlbnQgdGhlc2UgdmFsdWVzIGFyZSBudWxsLlxuICAgICAqXG4gICAgICogVGhpcyBjYW4gYmUgdXNlZCBmb3IgYWxnb3JpdGhtcyB0aGF0IG5lZWQgdG8gcGVlayBhaGVhZCBvciBiZWhpbmRcbiAgICAgKiBpbnNpZGUgYW4gaXRlcmF0aXZlIGFsZ29yaXRobVxuICAgICAqXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVTaWJsaW5nczxUPihhcnI6IFJlYWRvbmx5QXJyYXk8VD4pIHtcblxuICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydE5vdE51bGwoYXJyLCBcImFyclwiKTtcblxuICAgICAgICBjb25zdCByZXN1bHQ6IEFycmF5PElBcnJheUVsZW1lbnQ8VD4+ID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgYXJyLmxlbmd0aDsgKytpZHgpIHtcblxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIGN1cnI6IGFycltpZHhdLFxuICAgICAgICAgICAgICAgIHByZXY6IE9wdGlvbmFsLm9mKGFycltpZHggLSAxXSkuZ2V0T3JVbmRlZmluZWQoKSxcbiAgICAgICAgICAgICAgICBuZXh0OiBPcHRpb25hbC5vZihhcnJbaWR4ICsgMV0pLmdldE9yVW5kZWZpbmVkKClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxuXG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhICdwb3NpdGlvbicgb2JqZWN0IGZvciBjcmVhdGVTaWJsaW5ncygpIHRoYXQgaGFzIGEgY3VyclxuICogKGN1cnJlbnQpLCBwcmV2IChwcmV2aW91cyksIGFuZCBuZXh0IHJlZmVyZW5jZXMgZm9yIHdvcmtpbmcgd2l0aCBsaXN0cyBvZlxuICogb2JqZWN0cy4gIFRoZSBwb3NpdGlvbiBhbGxvdyBzdXMgdG8ga25vdyB3aGVyZSB3ZSBjdXJyZW50bHkgYXJlIGJ1dCBhbHNvIHRoZVxuICogcHJldmlvdXMgYW5kIGZ1dHVyZSBzdGF0ZXMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUFycmF5RWxlbWVudDxUPiB7XG5cbiAgICByZWFkb25seSBwcmV2PzogVDtcblxuICAgIHJlYWRvbmx5IGN1cnI6IFQ7XG5cbiAgICByZWFkb25seSBuZXh0PzogVDtcblxufVxuIl19