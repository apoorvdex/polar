"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ArgsParser_1 = require("../../util/ArgsParser");
const Objects_1 = require("../../util/Objects");
class Args {
    static parse(argv) {
        let result = ArgsParser_1.ArgsParser.parse(argv);
        result = Objects_1.Objects.defaults(result, {
            quit: true,
            browser: "DEFAULT",
            profile: "WEBVIEW",
            amp: true
        });
        return result;
    }
}
exports.Args = Args;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFyZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzREFBaUQ7QUFDakQsZ0RBQTJDO0FBRzNDLE1BQWEsSUFBSTtJQUtOLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBVztRQUUzQixJQUFJLE1BQU0sR0FBRyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVwQyxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQzlCLElBQUksRUFBRSxJQUFJO1lBQ1YsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsR0FBRyxFQUFFLElBQUk7U0FDWixDQUFDLENBQUM7UUFFSCxPQUFPLE1BQU0sQ0FBQztJQUVsQixDQUFDO0NBRUo7QUFwQkQsb0JBb0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBcmdzUGFyc2VyfSBmcm9tICcuLi8uLi91dGlsL0FyZ3NQYXJzZXInO1xuaW1wb3J0IHtPYmplY3RzfSBmcm9tICcuLi8uLi91dGlsL09iamVjdHMnO1xuXG5cbmV4cG9ydCBjbGFzcyBBcmdzIHtcblxuICAgIC8qKlxuICAgICAqIFBhcnNlIHRoZSBjb21tYW5kIGxpbmUsIHByb3ZpZGluZyByZWFzb25hYmxlIGFyZ3VtZW50cy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHBhcnNlKGFyZ3Y6IGFueVtdKSB7XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IEFyZ3NQYXJzZXIucGFyc2UoYXJndik7XG5cbiAgICAgICAgcmVzdWx0ID0gT2JqZWN0cy5kZWZhdWx0cyhyZXN1bHQsIHtcbiAgICAgICAgICAgIHF1aXQ6IHRydWUsXG4gICAgICAgICAgICBicm93c2VyOiBcIkRFRkFVTFRcIixcbiAgICAgICAgICAgIHByb2ZpbGU6IFwiV0VCVklFV1wiLFxuICAgICAgICAgICAgYW1wOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICB9XG5cbn1cbiJdfQ==