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
const jszip_1 = __importDefault(require("jszip"));
const Resources_1 = require("./Resources");
const Files_1 = require("../util/Files");
class PHZReader {
    constructor(path) {
        this.metadata = {};
        this.resources = new Resources_1.Resources();
        this.cache = {};
        this.path = path;
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield Files_1.Files.readFileAsync(this.path);
            this.zip = new jszip_1.default();
            yield this.zip.loadAsync(data);
        });
    }
    getMetadata() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.getCached("metadata.json", "metadata");
            }
            catch (e) {
                return Promise.resolve(null);
            }
        });
    }
    getResources() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.getCached("resources.json", "resources");
            }
            catch (e) {
                return Promise.resolve(new Resources_1.Resources());
            }
        });
    }
    getCached(path, key) {
        return __awaiter(this, void 0, void 0, function* () {
            let cached = this.cache[key];
            if (cached !== undefined && cached !== null) {
                return cached;
            }
            const buffer = yield this._readAsBuffer(path);
            if (!buffer) {
                throw new Error("No buffer for path: " + path);
            }
            cached = JSON.parse(buffer.toString("UTF-8"));
            this.cache[key] = cached;
            return cached;
        });
    }
    getResource(resourceEntry) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._readAsBuffer(resourceEntry.path);
        });
    }
    getResourceAsStream(resourceEntry) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._readAsStream(resourceEntry.path);
        });
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            this.zip = undefined;
        });
    }
    _readAsBuffer(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const zipFile = yield this.getZipFile(path);
            const arrayBuffer = yield zipFile.async('arraybuffer');
            return Buffer.from(arrayBuffer);
        });
    }
    _readAsStream(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const zipFile = yield this.getZipFile(path);
            return yield zipFile.nodeStream();
        });
    }
    getZipFile(path) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.zip === undefined) {
                throw new Error("No zip.");
            }
            const zipFile = yield this.zip.file(path);
            if (!zipFile) {
                throw new CachingException("No zip entry for path: " + path);
            }
            return zipFile;
        });
    }
}
exports.PHZReader = PHZReader;
class CachingException extends Error {
    constructor(message) {
        super(message);
    }
}
exports.CachingException = CachingException;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUEhaUmVhZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUEhaUmVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxrREFBMEI7QUFDMUIsMkNBQXNDO0FBRXRDLHlDQUFvQztBQUdwQyxNQUFhLFNBQVM7SUFZbEIsWUFBWSxJQUFZO1FBTmpCLGFBQVEsR0FBUSxFQUFFLENBQUM7UUFFbkIsY0FBUyxHQUFjLElBQUkscUJBQVMsRUFBRSxDQUFDO1FBRXRDLFVBQUssR0FBeUIsRUFBRSxDQUFDO1FBR3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFNWSxJQUFJOztZQUliLE1BQU0sSUFBSSxHQUFHLE1BQU0sYUFBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFbEQsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLGVBQUssRUFBRSxDQUFDO1lBUXZCLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbkMsQ0FBQztLQUFBO0lBRVksV0FBVzs7WUFFcEIsSUFBSTtnQkFDQSxPQUFPLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsVUFBVSxDQUFDLENBQUM7YUFDNUQ7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDUixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDaEM7UUFFTCxDQUFDO0tBQUE7SUFLWSxZQUFZOztZQUVyQixJQUFJO2dCQUNBLE9BQU8sTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLFdBQVcsQ0FBQyxDQUFDO2FBQzlEO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1IsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUkscUJBQVMsRUFBRSxDQUFDLENBQUM7YUFDM0M7UUFFTCxDQUFDO0tBQUE7SUFFWSxTQUFTLENBQUMsSUFBWSxFQUFFLEdBQVc7O1lBRTVDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDN0IsSUFBSSxNQUFNLEtBQUssU0FBUyxJQUFJLE1BQU0sS0FBSyxJQUFJLEVBQUU7Z0JBRXpDLE9BQU8sTUFBTSxDQUFDO2FBQ2pCO1lBRUQsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTlDLElBQUksQ0FBRSxNQUFNLEVBQUU7Z0JBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsQ0FBQzthQUNsRDtZQUVELE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUU5QyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQztZQUV6QixPQUFPLE1BQU0sQ0FBQztRQUVsQixDQUFDO0tBQUE7SUFPWSxXQUFXLENBQUMsYUFBNEI7O1lBQ2pELE9BQU8sTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RCxDQUFDO0tBQUE7SUFFWSxtQkFBbUIsQ0FBQyxhQUE0Qjs7WUFDekQsT0FBTyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hELENBQUM7S0FBQTtJQUdZLEtBQUs7O1lBRWQsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7UUFDekIsQ0FBQztLQUFBO0lBU2EsYUFBYSxDQUFDLElBQVk7O1lBRXBDLE1BQU0sT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUU1QyxNQUFNLFdBQVcsR0FBRyxNQUFNLE9BQU8sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdkQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXBDLENBQUM7S0FBQTtJQUVhLGFBQWEsQ0FBQyxJQUFZOztZQUVwQyxNQUFNLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFNUMsT0FBTyxNQUFNLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUV0QyxDQUFDO0tBQUE7SUFFYSxVQUFVLENBQUMsSUFBWTs7WUFFakMsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLFNBQVMsRUFBRTtnQkFDeEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUM5QjtZQUVELE1BQU0sT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFHMUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDVixNQUFNLElBQUksZ0JBQWdCLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDaEU7WUFFRCxPQUFPLE9BQU8sQ0FBQztRQUVuQixDQUFDO0tBQUE7Q0FFSjtBQS9JRCw4QkErSUM7QUFFRCxNQUFhLGdCQUFpQixTQUFRLEtBQUs7SUFFdkMsWUFBbUIsT0FBZTtRQUM5QixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkIsQ0FBQztDQUVKO0FBTkQsNENBTUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBKU1ppcCBmcm9tICdqc3ppcCc7XG5pbXBvcnQge1Jlc291cmNlc30gZnJvbSAnLi9SZXNvdXJjZXMnO1xuaW1wb3J0IHtSZXNvdXJjZUVudHJ5fSBmcm9tICcuL1Jlc291cmNlRW50cnknO1xuaW1wb3J0IHtGaWxlc30gZnJvbSAnLi4vdXRpbC9GaWxlcyc7XG5pbXBvcnQge0NvbXByZXNzZWRSZWFkZXJ9IGZyb20gJy4vQ29tcHJlc3NlZFJlYWRlcic7XG5cbmV4cG9ydCBjbGFzcyBQSFpSZWFkZXIgaW1wbGVtZW50cyBDb21wcmVzc2VkUmVhZGVyIHtcblxuICAgIHB1YmxpYyBwYXRoOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgemlwPzogSlNaaXA7XG5cbiAgICBwdWJsaWMgbWV0YWRhdGE6IGFueSA9IHt9O1xuXG4gICAgcHVibGljIHJlc291cmNlczogUmVzb3VyY2VzID0gbmV3IFJlc291cmNlcygpO1xuXG4gICAgcHJpdmF0ZSBjYWNoZToge1trZXk6IHN0cmluZ106IGFueX0gPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKHBhdGg6IHN0cmluZykge1xuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXQgbXVzdCBiZSBjYWxsZWQgdG8gbG9hZCB0aGUgZW50cmllcyB3aGljaCB3ZSBjYW4gd29yayB3aXRoLlxuICAgICAqXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIGluaXQoKSB7XG5cbiAgICAgICAgLy8gRklYTUU6IG1pZ3JhdGUgdGhpcyB0byBmcy5jcmVhdGVSZWFkU3RyZWFtIGV2ZW4gdGhvdWdoIHRoaXMgaXMgYXN5bmMgaXQgcmVhZHMgYWxsXG4gICAgICAgIC8vIHRoZSBkYXRhIGludG8gbWVtb3J5LiBNYWtlIHN1cmUgdGhpcyBtZXRob2QgaXMgY29tcGxldGVseSBhc3luYyB0aG91Z2guXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBGaWxlcy5yZWFkRmlsZUFzeW5jKHRoaXMucGF0aCk7XG5cbiAgICAgICAgdGhpcy56aXAgPSBuZXcgSlNaaXAoKTtcbiAgICAgICAgLy8gdGhpcy56aXAuc3VwcG9ydCA9IHtcbiAgICAgICAgLy8gICAgIGFycmF5YnVmZmVyOiB0cnVlLFxuICAgICAgICAvLyAgICAgdWludDhhcnJheTogdHJ1ZSxcbiAgICAgICAgLy8gICAgIGJsb2I6IHRydWUsXG4gICAgICAgIC8vICAgICBub2RlYnVmZmVyOiB0cnVlXG4gICAgICAgIC8vIH07XG5cbiAgICAgICAgYXdhaXQgdGhpcy56aXAubG9hZEFzeW5jKGRhdGEpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGdldE1ldGFkYXRhKCk6IFByb21pc2U8YW55IHwgbnVsbD4ge1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5nZXRDYWNoZWQoXCJtZXRhZGF0YS5qc29uXCIsIFwibWV0YWRhdGFcIik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBqdXN0IHRoZSByZXNvdXJjZXMgZnJvbSB0aGUgbWV0YWRhdGEuXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIGdldFJlc291cmNlcygpOiBQcm9taXNlPFJlc291cmNlcz4ge1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5nZXRDYWNoZWQoXCJyZXNvdXJjZXMuanNvblwiLCBcInJlc291cmNlc1wiKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgUmVzb3VyY2VzKCkpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0Q2FjaGVkKHBhdGg6IHN0cmluZywga2V5OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuXG4gICAgICAgIGxldCBjYWNoZWQgPSB0aGlzLmNhY2hlW2tleV07XG4gICAgICAgIGlmIChjYWNoZWQgIT09IHVuZGVmaW5lZCAmJiBjYWNoZWQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIHJldHVybiB0aGUgY2FjaGUgdmVyc2lvbiBpZiBpdCdzIGFscmVhZHkgcmVhZCBwcm9wZXJseS5cbiAgICAgICAgICAgIHJldHVybiBjYWNoZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBidWZmZXIgPSBhd2FpdCB0aGlzLl9yZWFkQXNCdWZmZXIocGF0aCk7XG5cbiAgICAgICAgaWYgKCEgYnVmZmVyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBidWZmZXIgZm9yIHBhdGg6IFwiICsgcGF0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBjYWNoZWQgPSBKU09OLnBhcnNlKGJ1ZmZlci50b1N0cmluZyhcIlVURi04XCIpKTtcblxuICAgICAgICB0aGlzLmNhY2hlW2tleV0gPSBjYWNoZWQ7XG5cbiAgICAgICAgcmV0dXJuIGNhY2hlZDtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlYWQgYSByZXNvdXJjZSBmcm9tIGRpc2sgYW5kIGNhbGwgdGhlIGNhbGxiYWNrIHdpdGggdGhlIG5ldyBjb250ZW50IG9uY2VcbiAgICAgKiBpdCdzIHJlYWR5IGZvciB1c2FnZS5cbiAgICAgKlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBnZXRSZXNvdXJjZShyZXNvdXJjZUVudHJ5OiBSZXNvdXJjZUVudHJ5KTogUHJvbWlzZTxCdWZmZXI+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX3JlYWRBc0J1ZmZlcihyZXNvdXJjZUVudHJ5LnBhdGgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBnZXRSZXNvdXJjZUFzU3RyZWFtKHJlc291cmNlRW50cnk6IFJlc291cmNlRW50cnkpOiBQcm9taXNlPE5vZGVKUy5SZWFkYWJsZVN0cmVhbT4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5fcmVhZEFzU3RyZWFtKHJlc291cmNlRW50cnkucGF0aCk7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgYXN5bmMgY2xvc2UoKSB7XG4gICAgICAgIC8vIHdlIGp1c3QgaGF2ZSB0byBsZXQgaXQgR0NcbiAgICAgICAgdGhpcy56aXAgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIGEgcmF3IGJ1ZmZlciB3aXRoIG5vIGVuY29kaW5nLlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhdGhcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPEJ1ZmZlcj59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBwcml2YXRlIGFzeW5jIF9yZWFkQXNCdWZmZXIocGF0aDogc3RyaW5nKTogUHJvbWlzZTxCdWZmZXI+IHtcblxuICAgICAgICBjb25zdCB6aXBGaWxlID0gYXdhaXQgdGhpcy5nZXRaaXBGaWxlKHBhdGgpO1xuXG4gICAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0gYXdhaXQgemlwRmlsZS5hc3luYygnYXJyYXlidWZmZXInKTtcbiAgICAgICAgcmV0dXJuIEJ1ZmZlci5mcm9tKGFycmF5QnVmZmVyKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgX3JlYWRBc1N0cmVhbShwYXRoOiBzdHJpbmcpOiBQcm9taXNlPE5vZGVKUy5SZWFkYWJsZVN0cmVhbT4ge1xuXG4gICAgICAgIGNvbnN0IHppcEZpbGUgPSBhd2FpdCB0aGlzLmdldFppcEZpbGUocGF0aCk7XG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IHppcEZpbGUubm9kZVN0cmVhbSgpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBnZXRaaXBGaWxlKHBhdGg6IHN0cmluZyk6IFByb21pc2U8SlNaaXAuSlNaaXBPYmplY3Q+ICB7XG5cbiAgICAgICAgaWYgKHRoaXMuemlwID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHppcC5cIik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB6aXBGaWxlID0gYXdhaXQgdGhpcy56aXAuZmlsZShwYXRoKTtcblxuXG4gICAgICAgIGlmICghemlwRmlsZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IENhY2hpbmdFeGNlcHRpb24oXCJObyB6aXAgZW50cnkgZm9yIHBhdGg6IFwiICsgcGF0aCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gemlwRmlsZTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgQ2FjaGluZ0V4Y2VwdGlvbiBleHRlbmRzIEVycm9yIHtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgfVxuXG59XG4iXX0=