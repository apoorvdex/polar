"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Files_1 = require("../../../util/Files");
const Preconditions_1 = require("../../../Preconditions");
class FileWriter {
    constructor(path) {
        this.path = path;
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.stream = yield Files_1.Files.createWriteStream(this.path);
        });
    }
    write(data) {
        return __awaiter(this, void 0, void 0, function* () {
            Preconditions_1.Preconditions.assertPresent(this.stream, "no stream");
            this.stream.write(data);
        });
    }
    close(err) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.stream) {
                this.stream.close();
            }
        });
    }
}
exports.FileWriter = FileWriter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZVdyaXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkZpbGVXcml0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLCtDQUEwQztBQUMxQywwREFBcUQ7QUFHckQsTUFBYSxVQUFVO0lBTW5CLFlBQVksSUFBWTtRQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRVksSUFBSTs7WUFDYixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sYUFBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzRCxDQUFDO0tBQUE7SUFFWSxLQUFLLENBQUMsSUFBWTs7WUFFM0IsNkJBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU3QixDQUFDO0tBQUE7SUFFWSxLQUFLLENBQUMsR0FBVzs7WUFFMUIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDdkI7UUFFTCxDQUFDO0tBQUE7Q0FFSjtBQTdCRCxnQ0E2QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1dyaXRlU3RyZWFtfSBmcm9tIFwiZnNcIjtcbmltcG9ydCB7RmlsZXN9IGZyb20gJy4uLy4uLy4uL3V0aWwvRmlsZXMnO1xuaW1wb3J0IHtQcmVjb25kaXRpb25zfSBmcm9tICcuLi8uLi8uLi9QcmVjb25kaXRpb25zJztcbmltcG9ydCB7V3JpdGVyfSBmcm9tICcuLi9FeHBvcnRlcnMnO1xuXG5leHBvcnQgY2xhc3MgRmlsZVdyaXRlciBpbXBsZW1lbnRzIFdyaXRlciB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHBhdGg6IHN0cmluZztcblxuICAgIHByaXZhdGUgc3RyZWFtPzogV3JpdGVTdHJlYW07XG5cbiAgICBjb25zdHJ1Y3RvcihwYXRoOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdGhpcy5zdHJlYW0gPSBhd2FpdCBGaWxlcy5jcmVhdGVXcml0ZVN0cmVhbSh0aGlzLnBhdGgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyB3cml0ZShkYXRhOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydFByZXNlbnQodGhpcy5zdHJlYW0sIFwibm8gc3RyZWFtXCIpO1xuICAgICAgICB0aGlzLnN0cmVhbSEud3JpdGUoZGF0YSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY2xvc2UoZXJyPzogRXJyb3IpOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgICAgICBpZiAodGhpcy5zdHJlYW0pIHtcbiAgICAgICAgICAgIHRoaXMuc3RyZWFtLmNsb3NlKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG5cbiJdfQ==