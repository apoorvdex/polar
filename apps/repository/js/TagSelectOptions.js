"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TagSelectOptions {
    static toTags(tagSelectOptions) {
        return tagSelectOptions.map((current) => {
            return {
                id: current.value,
                label: current.label
            };
        });
    }
    static fromTags(tags) {
        return tags.map(current => {
            return {
                value: current.id,
                label: current.label
            };
        });
    }
}
exports.TagSelectOptions = TagSelectOptions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFnU2VsZWN0T3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRhZ1NlbGVjdE9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxNQUFhLGdCQUFnQjtJQUVsQixNQUFNLENBQUMsTUFBTSxDQUFDLGdCQUFtQztRQUVwRCxPQUFPLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBTyxFQUFFO1lBRXpDLE9BQU87Z0JBQ0gsRUFBRSxFQUFFLE9BQU8sQ0FBQyxLQUFLO2dCQUNqQixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7YUFDdkIsQ0FBQztRQUVOLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVNLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBVztRQUU5QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUUsT0FBTyxDQUFDLEVBQUU7WUFDdkIsT0FBTztnQkFDSCxLQUFLLEVBQUUsT0FBTyxDQUFDLEVBQUU7Z0JBQ2pCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSzthQUN2QixDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0NBRUo7QUExQkQsNENBMEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUYWdTZWxlY3RPcHRpb259IGZyb20gJy4vVGFnU2VsZWN0T3B0aW9uJztcbmltcG9ydCB7VGFnfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvdGFncy9UYWcnO1xuXG5leHBvcnQgY2xhc3MgVGFnU2VsZWN0T3B0aW9ucyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIHRvVGFncyh0YWdTZWxlY3RPcHRpb25zOiBUYWdTZWxlY3RPcHRpb25bXSk6IFRhZ1tdIHtcblxuICAgICAgICByZXR1cm4gdGFnU2VsZWN0T3B0aW9ucy5tYXAoKGN1cnJlbnQpOiBUYWcgPT4ge1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBjdXJyZW50LnZhbHVlLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBjdXJyZW50LmxhYmVsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBmcm9tVGFncyh0YWdzOiBUYWdbXSk6IFRhZ1NlbGVjdE9wdGlvbltdIHtcblxuICAgICAgICByZXR1cm4gdGFncy5tYXAoIGN1cnJlbnQgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogY3VycmVudC5pZCxcbiAgICAgICAgICAgICAgICBsYWJlbDogY3VycmVudC5sYWJlbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbn1cbiJdfQ==