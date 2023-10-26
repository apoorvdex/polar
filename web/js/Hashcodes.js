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
const Preconditions_1 = require("./Preconditions");
const js_sha3_1 = require("js-sha3");
const uuid_1 = __importDefault(require("uuid"));
const InputSources_1 = require("./util/input/InputSources");
const base58check = require("base58check");
class Hashcodes {
    static create(data) {
        Preconditions_1.Preconditions.assertNotNull(data, "data");
        return base58check.encode(js_sha3_1.keccak256(data));
    }
    static createFromStream(readableStream) {
        return __awaiter(this, void 0, void 0, function* () {
            const hasher = js_sha3_1.keccak256.create();
            return new Promise((resolve, reject) => {
                readableStream.on('end', chunk => {
                    resolve(base58check.encode(hasher.hex()));
                });
                readableStream.on('error', err => {
                    reject(err);
                });
                readableStream.on('data', chunk => {
                    hasher.update(chunk);
                });
            });
        });
    }
    static createFromInputSource(inputSource) {
        return __awaiter(this, void 0, void 0, function* () {
            const hasher = js_sha3_1.keccak256.create();
            return new Promise((resolve, reject) => {
                InputSources_1.InputSources.open(inputSource, (data, err) => {
                    if (err) {
                        reject(err);
                    }
                    if (data) {
                        hasher.update(data);
                    }
                    else {
                        resolve(base58check.encode(hasher.hex()));
                    }
                });
            });
        });
    }
    static createID(obj, len = 10) {
        const id = Hashcodes.create(JSON.stringify(obj));
        return id.substring(0, len);
    }
    static createRandomID(len = 10) {
        return this.createID({ uuid: uuid_1.default.v4() }, len);
    }
}
exports.Hashcodes = Hashcodes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGFzaGNvZGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSGFzaGNvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBOEM7QUFDOUMscUNBQWtDO0FBQ2xDLGdEQUF3QjtBQUd4Qiw0REFBaUY7QUFHakYsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBSzNDLE1BQWEsU0FBUztJQUVYLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBWTtRQUM3Qiw2QkFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFMUMsT0FBTyxXQUFXLENBQUMsTUFBTSxDQUFDLG1CQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBUU0sTUFBTSxDQUFPLGdCQUFnQixDQUFDLGNBQXFDOztZQUV0RSxNQUFNLE1BQU0sR0FBRyxtQkFBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRWxDLE9BQU8sSUFBSSxPQUFPLENBQVMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBRTNDLGNBQWMsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFO29CQUM3QixPQUFPLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxDQUFDLENBQUMsQ0FBQztnQkFFSCxjQUFjLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsRUFBRTtvQkFDN0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQixDQUFDLENBQUMsQ0FBQztnQkFJSCxjQUFjLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRTtvQkFDOUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDekIsQ0FBQyxDQUFDLENBQUM7WUFFUCxDQUFDLENBQUMsQ0FBQztRQUVQLENBQUM7S0FBQTtJQUVNLE1BQU0sQ0FBTyxxQkFBcUIsQ0FBQyxXQUF3Qjs7WUFFOUQsTUFBTSxNQUFNLEdBQUcsbUJBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUVsQyxPQUFPLElBQUksT0FBTyxDQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUUzQywyQkFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUEyQixFQUFFLEdBQXNCLEVBQUUsRUFBRTtvQkFFbkYsSUFBSSxHQUFHLEVBQUU7d0JBQ0wsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUNmO29CQUVELElBQUksSUFBSSxFQUFFO3dCQUNOLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ3ZCO3lCQUFNO3dCQUNILE9BQU8sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7cUJBQzdDO2dCQUVMLENBQUMsQ0FBQyxDQUFDO1lBRVAsQ0FBQyxDQUFDLENBQUM7UUFFUCxDQUFDO0tBQUE7SUFPTSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQVEsRUFBRSxHQUFHLEdBQUcsRUFBRTtRQUVyQyxNQUFNLEVBQUUsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUdqRCxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBRWhDLENBQUM7SUFLTSxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsR0FBRyxFQUFFO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxjQUFJLENBQUMsRUFBRSxFQUFFLEVBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNqRCxDQUFDO0NBRUo7QUFuRkQsOEJBbUZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQcmVjb25kaXRpb25zfSBmcm9tICcuL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtrZWNjYWsyNTZ9IGZyb20gJ2pzLXNoYTMnO1xuaW1wb3J0IHV1aWQgZnJvbSAndXVpZCc7XG5pbXBvcnQgc3RyZWFtIGZyb20gJ3N0cmVhbSc7XG5pbXBvcnQge0lucHV0U291cmNlfSBmcm9tICcuL3V0aWwvaW5wdXQvSW5wdXRTb3VyY2UnO1xuaW1wb3J0IHtJbnB1dERhdGEsIElucHV0TGlzdGVuZXIsIElucHV0U291cmNlc30gZnJvbSAnLi91dGlsL2lucHV0L0lucHV0U291cmNlcyc7XG5cbi8vIFRPRE86IG1pZ3JhdGUgdGhpcyB0byB1c2UgdHlwZXMuXG5jb25zdCBiYXNlNThjaGVjayA9IHJlcXVpcmUoXCJiYXNlNThjaGVja1wiKTtcblxuLyoqXG4gKiBDcmVhdGUgaGFzaGNvZGVzIGZyb20gc3RyaW5nIGRhdGEgdG8gYmUgdXNlZCBhcyBpZGVudGlmaWVycyBpbiBrZXlzLlxuICovXG5leHBvcnQgY2xhc3MgSGFzaGNvZGVzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKGRhdGE6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0Tm90TnVsbChkYXRhLCBcImRhdGFcIik7XG4gICAgICAgIC8vIHJldHVybiBiYXNlNThjaGVjay5lbmNvZGUoY3JlYXRlS2VjY2FrSGFzaCgna2VjY2FrMjU2JykudXBkYXRlKGRhdGEpLmRpZ2VzdCgpKTtcbiAgICAgICAgcmV0dXJuIGJhc2U1OGNoZWNrLmVuY29kZShrZWNjYWsyNTYoZGF0YSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIEJhc2U1OENoZWNrIGVuY29kZWQgS0VDQ0FLMjU2IGhhc2hjb2RlIGJ5IHVzaW5nIHRoZSBzdHJlYW0gQVBJXG4gICAgICogb24gYSBnaXZlbiBzdHJlYW0uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVhZGFibGVTdHJlYW0gVGhlIHN0cmVhbSBmb3Igd2hpY2ggd2Ugc2hvdWxkIGNyZWF0ZSBhIGhhc2hjb2RlLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgY3JlYXRlRnJvbVN0cmVhbShyZWFkYWJsZVN0cmVhbTogTm9kZUpTLlJlYWRhYmxlU3RyZWFtKTogUHJvbWlzZTxzdHJpbmc+IHtcblxuICAgICAgICBjb25zdCBoYXNoZXIgPSBrZWNjYWsyNTYuY3JlYXRlKCk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgICAgICAgICByZWFkYWJsZVN0cmVhbS5vbignZW5kJywgY2h1bmsgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoYmFzZTU4Y2hlY2suZW5jb2RlKGhhc2hlci5oZXgoKSkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJlYWRhYmxlU3RyZWFtLm9uKCdlcnJvcicsIGVyciA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gZGF0YSByZXN1bWVzIHRoZSBwYXVzZWQgc3RyZWFtIHNvIGVuZC9lcnJvciBoYXZlIHRvIGJlIGFkZGVkXG4gICAgICAgICAgICAvLyBmaXJzdC5cbiAgICAgICAgICAgIHJlYWRhYmxlU3RyZWFtLm9uKCdkYXRhJywgY2h1bmsgPT4ge1xuICAgICAgICAgICAgICAgIGhhc2hlci51cGRhdGUoY2h1bmspO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGNyZWF0ZUZyb21JbnB1dFNvdXJjZShpbnB1dFNvdXJjZTogSW5wdXRTb3VyY2UpOiBQcm9taXNlPHN0cmluZz4ge1xuXG4gICAgICAgIGNvbnN0IGhhc2hlciA9IGtlY2NhazI1Ni5jcmVhdGUoKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgICAgICAgIElucHV0U291cmNlcy5vcGVuKGlucHV0U291cmNlLCAoZGF0YTogSW5wdXREYXRhIHwgdW5kZWZpbmVkLCBlcnI6IEVycm9yIHwgdW5kZWZpbmVkKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc2hlci51cGRhdGUoZGF0YSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShiYXNlNThjaGVjay5lbmNvZGUoaGFzaGVyLmhleCgpKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIGhhc2hjb2RlIGFzIGEgdHJ1bmNhdGVkIFNIQSBoYXNoY29kZS5cbiAgICAgKiBAcGFyYW0gb2JqIHtPYmplY3R9IFRoZSBvYmplY3QgdG8gaGFzIHRvIGZvcm0gdGhlIElELlxuICAgICAqIEBwYXJhbSBbbGVuXSBUaGUgbGVuZ3RoIG9mIHRoZSBoYXNoIHlvdSB3YW50IHRvIGNyZWF0ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZUlEKG9iajogYW55LCBsZW4gPSAxMCkge1xuXG4gICAgICAgIGNvbnN0IGlkID0gSGFzaGNvZGVzLmNyZWF0ZShKU09OLnN0cmluZ2lmeShvYmopKTtcblxuICAgICAgICAvLyB0cnVuY2F0ZS4gIFdlIGRvbid0IG5lZWQgdGhhdCBtdWNoIHByZWNpc2lvbiBhZ2FpbnN0IGNvbGxpc2lvbi5cbiAgICAgICAgcmV0dXJuIGlkLnN1YnN0cmluZygwLCBsZW4pO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgcmFuZG9tIElEIHdoaWNoIGlzIHRoZSB0aGUgc2FtZSBmb3JtYXQgYXMgY3JlYXRlSUQoKSAob3BhcXVlKS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZVJhbmRvbUlEKGxlbiA9IDEwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUlEKHt1dWlkOiB1dWlkLnY0KCl9LCBsZW4pO1xuICAgIH1cblxufVxuIl19