"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CacheEntry_1 = require("./CacheEntry");
const fs_1 = __importDefault(require("fs"));
class DiskCacheEntry extends CacheEntry_1.CacheEntry {
    constructor(options) {
        super(options);
        this.path = options.path;
        if (this.path === undefined) {
            throw new Error("No path");
        }
    }
    handleData(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                fs_1.default.readFile(this.path, (err, data) => {
                    if (err) {
                        reject(err);
                    }
                    callback(data);
                    resolve(false);
                });
            });
        });
    }
    toBuffer() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                fs_1.default.readFile(this.path, (err, data) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(data);
                });
            });
        });
    }
    toStream() {
        return __awaiter(this, void 0, void 0, function* () {
            return fs_1.default.createReadStream(this.path);
        });
    }
}
exports.DiskCacheEntry = DiskCacheEntry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlza0NhY2hlRW50cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJEaXNrQ2FjaGVFbnRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXNEO0FBRXRELDRDQUFvQjtBQUtwQixNQUFhLGNBQWUsU0FBUSx1QkFBVTtJQU8xQyxZQUFZLE9BQVk7UUFFcEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWYsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBRXpCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDekIsTUFBTSxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM5QjtJQUVMLENBQUM7SUFFWSxVQUFVLENBQUMsUUFBc0I7O1lBRTFDLE9BQU8sSUFBSSxPQUFPLENBQVUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBSTVDLFlBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQTBCLEVBQUUsSUFBWSxFQUFFLEVBQUU7b0JBRWhFLElBQUksR0FBRyxFQUFFO3dCQUNMLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDZjtvQkFFRCxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2YsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUVuQixDQUFDLENBQUMsQ0FBQztZQUVQLENBQUMsQ0FBQyxDQUFDO1FBRVAsQ0FBQztLQUFBO0lBRVksUUFBUTs7WUFJakIsT0FBTyxJQUFJLE9BQU8sQ0FBUyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFFNUMsWUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBMEIsRUFBRSxJQUFZLEVBQUUsRUFBRTtvQkFFL0QsSUFBSSxHQUFHLEVBQUU7d0JBQ0wsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUNmO29CQUVELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFbEIsQ0FBQyxDQUFDLENBQUM7WUFFUCxDQUFDLENBQUMsQ0FBQztRQUVQLENBQUM7S0FBQTtJQUVZLFFBQVE7O1lBQ2pCLE9BQU8sWUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxDQUFDO0tBQUE7Q0FFSjtBQWhFRCx3Q0FnRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NhY2hlRW50cnksIERhdGFDYWxsYmFja30gZnJvbSAnLi9DYWNoZUVudHJ5JztcblxuaW1wb3J0IGZzIGZyb20gJ2ZzJztcblxuLyoqXG4gKiBDYWNoZSBlbnRyeSB3aGljaCBpcyBqdXN0IGJ1ZmZlcmVkIGluIG1lbW9yeS5cbiAqL1xuZXhwb3J0IGNsYXNzIERpc2tDYWNoZUVudHJ5IGV4dGVuZHMgQ2FjaGVFbnRyeSB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGF0YSB3ZSBzaG91bGQgc2VydmUuXG4gICAgICovXG4gICAgcHVibGljIHBhdGg6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IGFueSkge1xuXG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMucGF0aCA9IG9wdGlvbnMucGF0aDtcblxuICAgICAgICBpZiAodGhpcy5wYXRoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHBhdGhcIik7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBoYW5kbGVEYXRhKGNhbGxiYWNrOiBEYXRhQ2FsbGJhY2spIHtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgICAgICAgICAvLyBUT0RPOiBpbiB0aGUgZnV0dXJlIG1pZ3JhdGUgdG8gYSBzdHJlYW1cblxuICAgICAgICAgICAgZnMucmVhZEZpbGUodGhpcy5wYXRoLCAoZXJyOiBOb2RlSlMuRXJybm9FeGNlcHRpb24sIGRhdGE6IEJ1ZmZlcikgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgdG9CdWZmZXIoKTogUHJvbWlzZTxCdWZmZXI+IHtcblxuICAgICAgICAvLyBUT0RPOiBpbiB0aGUgZnV0dXJlIG1pZ3JhdGUgdG8gYSBzdHJlYW1cblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8QnVmZmVyPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgICAgICAgZnMucmVhZEZpbGUodGhpcy5wYXRoLCAoZXJyOiBOb2RlSlMuRXJybm9FeGNlcHRpb24sIGRhdGE6IEJ1ZmZlcikgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyB0b1N0cmVhbSgpOiBQcm9taXNlPE5vZGVKUy5SZWFkYWJsZVN0cmVhbT4ge1xuICAgICAgICByZXR1cm4gZnMuY3JlYXRlUmVhZFN0cmVhbSh0aGlzLnBhdGgpO1xuICAgIH1cblxufVxuIl19