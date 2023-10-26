"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AddFileRequests_1 = require("./AddFileRequests");
class FileImportRequests {
    static fromPath(path) {
        return {
            files: [
                AddFileRequests_1.AddFileRequests.fromPath(path)
            ]
        };
    }
    static fromPaths(paths) {
        const files = paths.map(path => AddFileRequests_1.AddFileRequests.fromPath(path));
        return {
            files
        };
    }
}
exports.FileImportRequests = FileImportRequests;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZUltcG9ydFJlcXVlc3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRmlsZUltcG9ydFJlcXVlc3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsdURBQWtEO0FBRWxELE1BQWEsa0JBQWtCO0lBRXBCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBWTtRQUUvQixPQUFPO1lBQ0gsS0FBSyxFQUFFO2dCQUNILGlDQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzthQUNqQztTQUNKLENBQUM7SUFFTixDQUFDO0lBRU0sTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFlO1FBRW5DLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQ0FBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRWhFLE9BQU87WUFDSCxLQUFLO1NBQ1IsQ0FBQztJQUVOLENBQUM7Q0FHSjtBQXZCRCxnREF1QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZpbGVQYXRoc30gZnJvbSAnLi4vLi4vdXRpbC9GaWxlUGF0aHMnO1xuaW1wb3J0IHtGaWxlSW1wb3J0UmVxdWVzdH0gZnJvbSAnLi9GaWxlSW1wb3J0UmVxdWVzdCc7XG5pbXBvcnQge0FkZEZpbGVSZXF1ZXN0c30gZnJvbSAnLi9BZGRGaWxlUmVxdWVzdHMnO1xuXG5leHBvcnQgY2xhc3MgRmlsZUltcG9ydFJlcXVlc3RzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbVBhdGgocGF0aDogc3RyaW5nKTogRmlsZUltcG9ydFJlcXVlc3Qge1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmaWxlczogW1xuICAgICAgICAgICAgICAgIEFkZEZpbGVSZXF1ZXN0cy5mcm9tUGF0aChwYXRoKVxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBmcm9tUGF0aHMocGF0aHM6IHN0cmluZ1tdKTogRmlsZUltcG9ydFJlcXVlc3Qge1xuXG4gICAgICAgIGNvbnN0IGZpbGVzID0gcGF0aHMubWFwKHBhdGggPT4gQWRkRmlsZVJlcXVlc3RzLmZyb21QYXRoKHBhdGgpKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmlsZXNcbiAgICAgICAgfTtcblxuICAgIH1cblxuXG59XG4iXX0=