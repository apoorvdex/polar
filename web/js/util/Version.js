"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pkg = require("../../../package.json");
class Version {
    static get() {
        if (process.env.POLAR_VERSION) {
            return process.env.POLAR_VERSION;
        }
        return pkg.version;
    }
}
exports.Version = Version;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVyc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlZlcnNpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxNQUFNLEdBQUcsR0FBUSxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUVsRCxNQUFhLE9BQU87SUFFVCxNQUFNLENBQUMsR0FBRztRQUViLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUU7WUFHM0IsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztTQUNwQztRQUVELE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQztJQUV2QixDQUFDO0NBRUo7QUFkRCwwQkFjQyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgcGtnOiBhbnkgPSByZXF1aXJlKFwiLi4vLi4vLi4vcGFja2FnZS5qc29uXCIpO1xuXG5leHBvcnQgY2xhc3MgVmVyc2lvbiB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCgpOiBzdHJpbmcge1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5QT0xBUl9WRVJTSU9OKSB7XG4gICAgICAgICAgICAvLyBwcm92aWRlIHRoZSB2ZXJzaW9uIG51bWJlciBmcm9tIHRoZSBlbnZpcm9ubWVudCBzbyB3ZSBjYW5cbiAgICAgICAgICAgIC8vIG92ZXJyaWRlIGZvciB0ZXN0aW5nLlxuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3MuZW52LlBPTEFSX1ZFUlNJT047XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGtnLnZlcnNpb247XG5cbiAgICB9XG5cbn1cbiJdfQ==