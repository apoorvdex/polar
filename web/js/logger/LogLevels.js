"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LogLevel_1 = require("./LogLevel");
class LogLevels {
    static fromName(name) {
        let result = LogLevel_1.LogLevel[name];
        if (!result) {
            throw new Error("Invalid name: " + name);
        }
        return result;
    }
}
exports.LogLevels = LogLevels;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nTGV2ZWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTG9nTGV2ZWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQW9DO0FBRXBDLE1BQWEsU0FBUztJQUVYLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBWTtRQUUvQixJQUFJLE1BQU0sR0FBUyxtQkFBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRW5DLElBQUcsQ0FBRSxNQUFNLEVBQUU7WUFDVCxNQUFNLElBQUksS0FBSyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxDQUFDO1NBQzVDO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFFbEIsQ0FBQztDQUVKO0FBZEQsOEJBY0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xvZ0xldmVsfSBmcm9tICcuL0xvZ0xldmVsJztcblxuZXhwb3J0IGNsYXNzIExvZ0xldmVscyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGZyb21OYW1lKG5hbWU6IHN0cmluZyk6IExvZ0xldmVsIHtcblxuICAgICAgICBsZXQgcmVzdWx0ID0gKDxhbnk+TG9nTGV2ZWwpW25hbWVdO1xuXG4gICAgICAgIGlmKCEgcmVzdWx0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG5hbWU6IFwiICsgbmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxuXG59XG4iXX0=