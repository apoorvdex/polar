"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Dictionaries_1 = require("../../../../util/Dictionaries");
class AnkiFields {
    static normalize(fields) {
        const result = {};
        Dictionaries_1.Dictionaries.forDict(fields, (key, value) => {
            key = key.charAt(0).toUpperCase() + key.substr(1);
            result[key] = value;
        });
        return result;
    }
}
exports.AnkiFields = AnkiFields;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5raUZpZWxkcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFua2lGaWVsZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnRUFBMkQ7QUFFM0QsTUFBYSxVQUFVO0lBRVosTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFpQjtRQUVyQyxNQUFNLE1BQU0sR0FBYyxFQUFFLENBQUM7UUFFN0IsMkJBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3hDLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sTUFBTSxDQUFDO0lBRWxCLENBQUM7Q0FFSjtBQWZELGdDQWVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaWN0aW9uYXJpZXN9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvRGljdGlvbmFyaWVzJztcblxuZXhwb3J0IGNsYXNzIEFua2lGaWVsZHMge1xuXG4gICAgcHVibGljIHN0YXRpYyBub3JtYWxpemUoZmllbGRzOiBGaWVsZHNNYXApIHtcblxuICAgICAgICBjb25zdCByZXN1bHQ6IEZpZWxkc01hcCA9IHt9O1xuXG4gICAgICAgIERpY3Rpb25hcmllcy5mb3JEaWN0KGZpZWxkcywgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIGtleSA9IGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zdWJzdHIoMSk7XG4gICAgICAgICAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBGaWVsZHNNYXAge1trZXk6IHN0cmluZ106IHN0cmluZ31cbiJdfQ==