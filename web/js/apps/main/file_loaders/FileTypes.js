"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FileType_1 = require("./FileType");
class FileTypes {
    static create(path) {
        if (path.endsWith(".pdf")) {
            return FileType_1.FileType.PDF;
        }
        else if (path.endsWith(".phz")) {
            return FileType_1.FileType.PHZ;
        }
        else {
            throw new Error("Unable to handle file: " + path);
        }
    }
}
exports.FileTypes = FileTypes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZVR5cGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRmlsZVR5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQW9DO0FBRXBDLE1BQWEsU0FBUztJQUVYLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBWTtRQUU3QixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDdkIsT0FBTyxtQkFBUSxDQUFDLEdBQUcsQ0FBQztTQUN2QjthQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUM5QixPQUFPLG1CQUFRLENBQUMsR0FBRyxDQUFDO1NBQ3ZCO2FBQU07WUFDSCxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQyxDQUFDO1NBQ3JEO0lBRUwsQ0FBQztDQUVKO0FBZEQsOEJBY0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZpbGVUeXBlfSBmcm9tICcuL0ZpbGVUeXBlJztcblxuZXhwb3J0IGNsYXNzIEZpbGVUeXBlcyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZShwYXRoOiBzdHJpbmcpOiBGaWxlVHlwZSB7XG5cbiAgICAgICAgaWYgKHBhdGguZW5kc1dpdGgoXCIucGRmXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gRmlsZVR5cGUuUERGO1xuICAgICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoXCIucGh6XCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gRmlsZVR5cGUuUEhaO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGhhbmRsZSBmaWxlOiBcIiArIHBhdGgpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn1cbiJdfQ==