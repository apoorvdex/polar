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
const Blobs_1 = require("./Blobs");
const ArrayBuffers_1 = require("./ArrayBuffers");
const Strings_1 = require("./Strings");
class URLs {
    static toStream(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(url);
            const blob = yield response.blob();
            const arrayBuffer = yield Blobs_1.Blobs.toArrayBuffer(blob);
            const buffer = ArrayBuffers_1.ArrayBuffers.toBuffer(arrayBuffer);
            return buffer;
        });
    }
    static isWebScheme(url) {
        return url.startsWith('http:') || url.startsWith('https:');
    }
    static toBase(url) {
        const parsedURL = new URL(url);
        const protocol = parsedURL.protocol;
        const hostname = parsedURL.hostname;
        const port = !Strings_1.Strings.empty(parsedURL.port) ? `:${parsedURL.port}` : '';
        return `${protocol}//${hostname}${port}`;
    }
    static isURL(path) {
        if (!path) {
            return false;
        }
        return path.startsWith("file:") ||
            path.startsWith("blob:") ||
            path.startsWith("https:") ||
            path.startsWith("https:");
    }
}
exports.URLs = URLs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVVJMcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlVSTHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLG1DQUE4QjtBQUM5QixpREFBNEM7QUFDNUMsdUNBQWtDO0FBSWxDLE1BQWEsSUFBSTtJQUVOLE1BQU0sQ0FBTyxRQUFRLENBQUMsR0FBVzs7WUFFcEMsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbkMsTUFBTSxXQUFXLEdBQUcsTUFBTSxhQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BELE1BQU0sTUFBTSxHQUFHLDJCQUFZLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2xELE9BQU8sTUFBTSxDQUFDO1FBRWxCLENBQUM7S0FBQTtJQU1NLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBVztRQUVqQyxPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUUvRCxDQUFDO0lBTU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFXO1FBRTVCLE1BQU0sU0FBUyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRS9CLE1BQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7UUFDcEMsTUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQztRQUNwQyxNQUFNLElBQUksR0FBRyxDQUFFLGlCQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUV6RSxPQUFPLEdBQUcsUUFBUSxLQUFLLFFBQVEsR0FBRyxJQUFJLEVBQUUsQ0FBQztJQUU3QyxDQUFDO0lBS00sTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFZO1FBRTVCLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDUCxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUVELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7WUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUVsQyxDQUFDO0NBRUo7QUF0REQsb0JBc0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCbG9ic30gZnJvbSAnLi9CbG9icyc7XG5pbXBvcnQge0FycmF5QnVmZmVyc30gZnJvbSAnLi9BcnJheUJ1ZmZlcnMnO1xuaW1wb3J0IHtTdHJpbmdzfSBmcm9tICcuL1N0cmluZ3MnO1xuXG4vLyBpbXBvcnQgZmV0Y2ggZnJvbSAnLi9GZXRjaCc7XG5cbmV4cG9ydCBjbGFzcyBVUkxzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgdG9TdHJlYW0odXJsOiBzdHJpbmcpOiBQcm9taXNlPEJ1ZmZlcj4ge1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IHJlc3BvbnNlLmJsb2IoKTtcbiAgICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSBhd2FpdCBCbG9icy50b0FycmF5QnVmZmVyKGJsb2IpO1xuICAgICAgICBjb25zdCBidWZmZXIgPSBBcnJheUJ1ZmZlcnMudG9CdWZmZXIoYXJyYXlCdWZmZXIpO1xuICAgICAgICByZXR1cm4gYnVmZmVyO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRydWUgaWYgdGhlIFVSTCBpcyBhIHdlYiBzY2hlbWUgKGh0dHAgb3IgaHR0cHMpXG4gICAgICogQHBhcmFtIHVybFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgaXNXZWJTY2hlbWUodXJsOiBzdHJpbmcpIHtcblxuICAgICAgICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgoJ2h0dHA6JykgfHwgdXJsLnN0YXJ0c1dpdGgoJ2h0dHBzOicpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBzaXRlIGJhc2UgVVJMIGluY2x1ZGluZyB0aGUgc2NoZW1lLCBkb21haW4sIGFuZCBvcHRpb25hbGx5IHRoZVxuICAgICAqIHBvcnQuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyB0b0Jhc2UodXJsOiBzdHJpbmcpIHtcblxuICAgICAgICBjb25zdCBwYXJzZWRVUkwgPSBuZXcgVVJMKHVybCk7XG5cbiAgICAgICAgY29uc3QgcHJvdG9jb2wgPSBwYXJzZWRVUkwucHJvdG9jb2w7XG4gICAgICAgIGNvbnN0IGhvc3RuYW1lID0gcGFyc2VkVVJMLmhvc3RuYW1lO1xuICAgICAgICBjb25zdCBwb3J0ID0gISBTdHJpbmdzLmVtcHR5KHBhcnNlZFVSTC5wb3J0KSA/IGA6JHtwYXJzZWRVUkwucG9ydH1gIDogJyc7XG5cbiAgICAgICAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnR9YDtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB0cnVlIGlmIHRoaXMgaXMgYSBVUkxcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGlzVVJMKHBhdGg6IHN0cmluZykge1xuXG4gICAgICAgIGlmICghcGF0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhdGguc3RhcnRzV2l0aChcImZpbGU6XCIpIHx8XG4gICAgICAgICAgICBwYXRoLnN0YXJ0c1dpdGgoXCJibG9iOlwiKSB8fFxuICAgICAgICAgICAgcGF0aC5zdGFydHNXaXRoKFwiaHR0cHM6XCIpIHx8XG4gICAgICAgICAgICBwYXRoLnN0YXJ0c1dpdGgoXCJodHRwczpcIik7XG5cbiAgICB9XG5cbn1cbiJdfQ==