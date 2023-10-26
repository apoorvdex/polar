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
const electron_1 = require("electron");
const Logger_1 = require("../../logger/Logger");
const CacheStats_1 = require("./CacheStats");
const convertStream = require("convert-stream");
const log = Logger_1.Logger.create();
class CacheInterceptorService {
    constructor(cacheRegistry) {
        this.cacheStats = new CacheStats_1.CacheStats();
        this.cacheRegistry = cacheRegistry;
    }
    handleWithCache(request, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            ++this.cacheStats.hits;
            log.debug("HIT Going to handle with cache: ", request.url);
            const cacheEntry = this.cacheRegistry.get(request.url);
            const buffer = yield cacheEntry.toBuffer();
            log.debug(`Calling callback now for: ${request.url} (${buffer.byteLength} bytes)`);
            callback({
                mimeType: cacheEntry.mimeType,
                data: buffer,
            });
        });
    }
    handleWithNetRequest(request, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            log.debug("Handling request: ", request.url);
            ++this.cacheStats.misses;
            const options = {
                method: request.method,
                url: request.url,
            };
            log.debug("MISS Going to handle with net.request: " + request.url);
            const netRequest = electron_1.net.request(options)
                .on('response', (response) => __awaiter(this, void 0, void 0, function* () {
                const buffer = yield convertStream.toBuffer(response);
                const contentType = CacheInterceptorService.parseContentType(response.headers["content-type"]);
                log.debug(`Using mimeType=${contentType.mimeType} for ${request.url}`);
                callback({
                    mimeType: contentType.mimeType,
                    data: buffer,
                });
            }))
                .on('abort', () => {
                log.error(`Request aborted: ${request.url}`);
                callback(-1);
            })
                .on('error', (error) => {
                log.error(`Request error: ${request.url}`, error);
                callback(-1);
            });
            Object.keys(request.headers).forEach(header => {
                log.debug("Setting request header: ", header);
                netRequest.setHeader(header, request.headers[header]);
            });
            if (request.uploadData) {
                log.debug("Writing data to request");
                request.uploadData.forEach(current => {
                    netRequest.write(current.bytes);
                });
            }
            netRequest.end();
        });
    }
    interceptRequest(request, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            log.debug(`intercepted ${request.method} ${request.url}`);
            if (this.cacheRegistry.hasEntry(request.url)) {
                yield this.handleWithCache(request, callback);
            }
            else {
                yield this.handleWithNetRequest(request, callback);
            }
        });
    }
    interceptBufferProtocol(scheme, handler) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                electron_1.protocol.interceptBufferProtocol(scheme, handler, (error) => {
                    if (error) {
                        reject(error);
                    }
                    resolve();
                });
            });
        });
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            log.debug("Starting service and registering protocol interceptors.");
            yield this.interceptBufferProtocol('http', this.interceptRequest.bind(this));
            yield this.interceptBufferProtocol('https', this.interceptRequest.bind(this));
        });
    }
    stop() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("not implemented");
        });
    }
    static parseContentType(contentType) {
        let mimeType = "text/html";
        let value;
        if (contentType instanceof Array) {
            value = contentType[0];
        }
        else {
            value = contentType;
        }
        if (!value) {
            value = mimeType;
        }
        let charset;
        let match;
        if (match = value.match("^([a-zA-Z]+/[a-zA-Z+]+)")) {
            mimeType = match[1];
        }
        if (match = value.match("; charset=([^ ;]+)")) {
            charset = match[1];
        }
        return {
            mimeType,
            charset
        };
    }
}
exports.CacheInterceptorService = CacheInterceptorService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FjaGVJbnRlcmNlcHRvclNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDYWNoZUludGVyY2VwdG9yU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUNBQXVDO0FBR3ZDLGdEQUEyQztBQUMzQyw2Q0FBd0M7QUFFeEMsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFJaEQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBSzVCLE1BQWEsdUJBQXVCO0lBVWhDLFlBQVksYUFBNEI7UUFSeEIsZUFBVSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO1FBVTFDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBRXZDLENBQUM7SUFFWSxlQUFlLENBQUMsT0FBdUMsRUFBRSxRQUF3Qjs7WUFFMUYsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztZQUV2QixHQUFHLENBQUMsS0FBSyxDQUFDLGtDQUFrQyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUUzRCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFdkQsTUFBTSxNQUFNLEdBQUcsTUFBTSxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7WUFFM0MsR0FBRyxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsT0FBTyxDQUFDLEdBQUcsS0FBSyxNQUFNLENBQUMsVUFBVSxTQUFTLENBQUMsQ0FBQztZQUVuRixRQUFRLENBQUM7Z0JBQ0wsUUFBUSxFQUFFLFVBQVUsQ0FBQyxRQUFRO2dCQUM3QixJQUFJLEVBQUUsTUFBTTthQUNmLENBQUMsQ0FBQztRQUVQLENBQUM7S0FBQTtJQUVZLG9CQUFvQixDQUFDLE9BQWdCLEVBQUUsUUFBd0I7O1lBRXhFLEdBQUcsQ0FBQyxLQUFLLENBQUMsb0JB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Q0FBQztRQUNaLElBQUksS0FBSyxDQUFDO1FBR1YsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFO1lBQ2hELFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkI7UUFHRCxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLEVBQUU7WUFDM0MsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0QjtRQUVELE9BQU87WUFDSCxRQUFRO1lBQ1IsT0FBTztTQUNWLENBQUM7SUFFTixDQUFDO0NBRUo7QUE5TUQsMERBOE1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtuZXQsIHByb3RvY29sfSBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQge0NhY2hlUmVnaXN0cnl9IGZyb20gJy4uL3Byb3h5c2VydmVyL0NhY2hlUmVnaXN0cnknO1xuaW1wb3J0IEludGVyY2VwdEJ1ZmZlclByb3RvY29sUmVxdWVzdCA9IEVsZWN0cm9uLkludGVyY2VwdEJ1ZmZlclByb3RvY29sUmVxdWVzdDtcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7Q2FjaGVTdGF0c30gZnJvbSAnLi9DYWNoZVN0YXRzJztcblxuY29uc3QgY29udmVydFN0cmVhbSA9IHJlcXVpcmUoXCJjb252ZXJ0LXN0cmVhbVwiKTtcblxuLy8gaW1wb3J0IGNvbnZlcnRTdHJlYW0gZnJvbSAnY29udmVydC1zdHJlYW0nXG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuLyoqXG4gKiBARGVwcmVjYXRlZCBpbiBmYXZvciBvZiBDYWNoaW5nU3RyZWFtSW50ZXJjZXB0b3JTZXJ2aWNlXG4gKi9cbmV4cG9ydCBjbGFzcyBDYWNoZUludGVyY2VwdG9yU2VydmljZSB7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgY2FjaGVTdGF0cyA9IG5ldyBDYWNoZVN0YXRzKCk7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGNhY2hlUmVnaXN0cnk6IENhY2hlUmVnaXN0cnk7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWNoZVJlZ2lzdHJ5IHtDYWNoZVJlZ2lzdHJ5fVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNhY2hlUmVnaXN0cnk6IENhY2hlUmVnaXN0cnkpIHtcblxuICAgICAgICB0aGlzLmNhY2hlUmVnaXN0cnkgPSBjYWNoZVJlZ2lzdHJ5O1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGhhbmRsZVdpdGhDYWNoZShyZXF1ZXN0OiBJbnRlcmNlcHRCdWZmZXJQcm90b2NvbFJlcXVlc3QsIGNhbGxiYWNrOiBCdWZmZXJDYWxsYmFjaykge1xuXG4gICAgICAgICsrdGhpcy5jYWNoZVN0YXRzLmhpdHM7XG5cbiAgICAgICAgbG9nLmRlYnVnKFwiSElUIEdvaW5nIHRvIGhhbmRsZSB3aXRoIGNhY2hlOiBcIiwgcmVxdWVzdC51cmwpO1xuXG4gICAgICAgIGNvbnN0IGNhY2hlRW50cnkgPSB0aGlzLmNhY2hlUmVnaXN0cnkuZ2V0KHJlcXVlc3QudXJsKTtcblxuICAgICAgICBjb25zdCBidWZmZXIgPSBhd2FpdCBjYWNoZUVudHJ5LnRvQnVmZmVyKCk7XG5cbiAgICAgICAgbG9nLmRlYnVnKGBDYWxsaW5nIGNhbGxiYWNrIG5vdyBmb3I6ICR7cmVxdWVzdC51cmx9ICgke2J1ZmZlci5ieXRlTGVuZ3RofSBieXRlcylgKTtcblxuICAgICAgICBjYWxsYmFjayh7XG4gICAgICAgICAgICBtaW1lVHlwZTogY2FjaGVFbnRyeS5taW1lVHlwZSxcbiAgICAgICAgICAgIGRhdGE6IGJ1ZmZlcixcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgaGFuZGxlV2l0aE5ldFJlcXVlc3QocmVxdWVzdDogUmVxdWVzdCwgY2FsbGJhY2s6IEJ1ZmZlckNhbGxiYWNrKSB7XG5cbiAgICAgICAgbG9nLmRlYnVnKFwiSGFuZGxpbmcgcmVxdWVzdDogXCIsIHJlcXVlc3QudXJsKTtcblxuICAgICAgICArK3RoaXMuY2FjaGVTdGF0cy5taXNzZXM7XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogcmVxdWVzdC5tZXRob2QsXG4gICAgICAgICAgICB1cmw6IHJlcXVlc3QudXJsLFxuICAgICAgICB9O1xuXG4gICAgICAgIGxvZy5kZWJ1ZyhcIk1JU1MgR29pbmcgdG8gaGFuZGxlIHdpdGggbmV0LnJlcXVlc3Q6IFwiICsgcmVxdWVzdC51cmwpO1xuXG4gICAgICAgIGNvbnN0IG5ldFJlcXVlc3QgPSBuZXQucmVxdWVzdChvcHRpb25zKVxuICAgICAgICAgICAgLm9uKCdyZXNwb25zZScsIGFzeW5jIChyZXNwb25zZSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogdGhpcyBtaWdodCBhY3R1YWxseSBiZSBicm9rZW4gYXMgSSBpbWFnaW5lIHdlIGFyZW4ndFxuICAgICAgICAgICAgICAgIC8vIGhhbmRsaW5nIEhUVFAgY2h1bmtzIHByb3Blcmx5LlxuXG4gICAgICAgICAgICAgICAgY29uc3QgYnVmZmVyID0gYXdhaXQgY29udmVydFN0cmVhbS50b0J1ZmZlcihyZXNwb25zZSk7XG5cbiAgICAgICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIGhhbmRsZSB0aGlzIHByb3Blcmx5IGJ5IGRvaW5nIHRoZSBmb2xsb3dpbmc6XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyByZXNwb25zZS5vbignZGF0YScsIChjaHVuaykgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKGBCT0RZOiAke2NodW5rfWApXG4gICAgICAgICAgICAgICAgLy8gfSlcblxuICAgICAgICAgICAgICAgIC8vIEZJWE1FOiB3ZSdyZSBjdXJyZW50bHkgaGFuZGxpbmcgY2hhcnNldCBlbmNvZGluZyBpbXByb3Blcmx5IGFuZFxuICAgICAgICAgICAgICAgIC8vIHN0cmlwcGluZyB0aGUgZW5jb2RpbmcgaWYgaXQncyBzcGVjaWZpZWQgaW4gdGhlIGNoYXJzZXQuICBUaGlzIHdpbGwgYmVcbiAgICAgICAgICAgICAgICAvLyByZXNvbHZlZCB3aGVuIHdlIG1pZ3JhdGUgdG8gaW50ZXJjZXB0U3RyZWFtUHJvdG9jb2xcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gQ2FjaGVJbnRlcmNlcHRvclNlcnZpY2UucGFyc2VDb250ZW50VHlwZShyZXNwb25zZS5oZWFkZXJzW1wiY29udGVudC10eXBlXCJdKTtcblxuICAgICAgICAgICAgICAgIGxvZy5kZWJ1ZyhgVXNpbmcgbWltZVR5cGU9JHtjb250ZW50VHlwZS5taW1lVHlwZX0gZm9yICR7cmVxdWVzdC51cmx9YCk7XG5cbiAgICAgICAgICAgICAgICBjYWxsYmFjayh7XG4gICAgICAgICAgICAgICAgICAgIG1pbWVUeXBlOiBjb250ZW50VHlwZS5taW1lVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogYnVmZmVyLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAub24oJ2Fib3J0JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxvZy5lcnJvcihgUmVxdWVzdCBhYm9ydGVkOiAke3JlcXVlc3QudXJsfWApO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKC0xKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ2Vycm9yJywgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogd2UgYXJlIGdldHRpbmc6IG5ldDo6RVJSX0NPTk5FQ1RJT05fUkVGVVNFRC4uLiBJIHRoaW5rXG4gICAgICAgICAgICAgICAgLy8gd2UgY291bGQgaW5jbHVkZSB0aGlzIGluIHRoZSBjYWxsYmFjay5cbiAgICAgICAgICAgICAgICBsb2cuZXJyb3IoYFJlcXVlc3QgZXJyb3I6ICR7cmVxdWVzdC51cmx9YCwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKC0xKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHJlcXVlc3QuaGVhZGVycykuZm9yRWFjaChoZWFkZXIgPT4ge1xuICAgICAgICAgICAgLy8gY2FsbCBzZXRIZWFkZXIgZm9yIGVhY2ggaGVhZGVyIG5lZWRlZC5cbiAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIlNldHRpbmcgcmVxdWVzdCBoZWFkZXI6IFwiLCBoZWFkZXIpO1xuICAgICAgICAgICAgbmV0UmVxdWVzdC5zZXRIZWFkZXIoaGVhZGVyLCByZXF1ZXN0LmhlYWRlcnNbaGVhZGVyXSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyZXF1ZXN0LnVwbG9hZERhdGEpIHtcblxuICAgICAgICAgICAgbG9nLmRlYnVnKFwiV3JpdGluZyBkYXRhIHRvIHJlcXVlc3RcIik7XG4gICAgICAgICAgICByZXF1ZXN0LnVwbG9hZERhdGEuZm9yRWFjaChjdXJyZW50ID0+IHtcbiAgICAgICAgICAgICAgICBuZXRSZXF1ZXN0LndyaXRlKGN1cnJlbnQuYnl0ZXMpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRPRE86IHdlIGhhdmUgdG8gY2FsbCBuZXRSZXF1ZXN0LndyaXRlIG9uIGFsbCB0aGUgcmVxdWVzdC51cGxvYWREYXRhLlxuICAgICAgICAvLyBub3QgdXJnZW50IGJlY2F1c2UgdGhpcyBpc24ndCByZWFsbHkgYSB1c2UgY2FzZSB3ZSBtdXN0IHN1cHBvcnQuXG5cbiAgICAgICAgbmV0UmVxdWVzdC5lbmQoKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBpbnRlcmNlcHRSZXF1ZXN0KHJlcXVlc3Q6IFJlcXVlc3QsIGNhbGxiYWNrOiBCdWZmZXJDYWxsYmFjaykge1xuXG4gICAgICAgIGxvZy5kZWJ1ZyhgaW50ZXJjZXB0ZWQgJHtyZXF1ZXN0Lm1ldGhvZH0gJHtyZXF1ZXN0LnVybH1gKTtcblxuICAgICAgICBpZiAodGhpcy5jYWNoZVJlZ2lzdHJ5Lmhhc0VudHJ5KHJlcXVlc3QudXJsKSkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5oYW5kbGVXaXRoQ2FjaGUocmVxdWVzdCwgY2FsbGJhY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5oYW5kbGVXaXRoTmV0UmVxdWVzdChyZXF1ZXN0LCBjYWxsYmFjayk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBpbnRlcmNlcHRCdWZmZXJQcm90b2NvbChzY2hlbWU6IHN0cmluZywgaGFuZGxlcjogYW55KSB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgICAgICAgcHJvdG9jb2wuaW50ZXJjZXB0QnVmZmVyUHJvdG9jb2woc2NoZW1lLCBoYW5kbGVyLCAoZXJyb3IpID0+IHtcblxuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc3RhcnQoKSB7XG5cbiAgICAgICAgbG9nLmRlYnVnKFwiU3RhcnRpbmcgc2VydmljZSBhbmQgcmVnaXN0ZXJpbmcgcHJvdG9jb2wgaW50ZXJjZXB0b3JzLlwiKTtcblxuICAgICAgICBhd2FpdCB0aGlzLmludGVyY2VwdEJ1ZmZlclByb3RvY29sKCdodHRwJywgdGhpcy5pbnRlcmNlcHRSZXF1ZXN0LmJpbmQodGhpcykpO1xuICAgICAgICBhd2FpdCB0aGlzLmludGVyY2VwdEJ1ZmZlclByb3RvY29sKCdodHRwcycsIHRoaXMuaW50ZXJjZXB0UmVxdWVzdC5iaW5kKHRoaXMpKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzdG9wKCkge1xuXG4gICAgICAgIC8vIHdlIGhhdmUgdG8gY2FsbCBwcm90b2NvbC51bmludGVyY2VwdFByb3RvY29sKClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm90IGltcGxlbWVudGVkXCIpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2UgdGhlIGNvbnRlbnQtdHlwZSBoZWFkZXIgYW5kIGluY2x1ZGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGNoYXJzZXQgdG9vLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcGFyc2VDb250ZW50VHlwZShjb250ZW50VHlwZTogc3RyaW5nIHwgc3RyaW5nW10pIHtcblxuICAgICAgICAvLyBodHRwczovL3d3dy53M3NjaG9vbHMuY29tL2h0bWwvaHRtbF9jaGFyc2V0LmFzcFxuXG4gICAgICAgIC8vIGh0bWw0IGlzIElTTy04ODU5LTEgYW5kIEhUTUw1IGlzIFVURi04XG5cbiAgICAgICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvODQ5OTkzMC9ob3ctdG8taWRlbnRpZnktaHRtbDVcblxuICAgICAgICAvLyB0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLThcblxuICAgICAgICBsZXQgbWltZVR5cGUgPSBcInRleHQvaHRtbFwiO1xuXG4gICAgICAgIGxldCB2YWx1ZTogc3RyaW5nO1xuXG4gICAgICAgIGlmIChjb250ZW50VHlwZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAvLyB3aGVuIGdpdmVuIGFzIHJlc3BvbnNlIGhlYWRlcnMgd2UncmUgZ2l2ZW4gYW4gYXJyYXkgb2Ygc3RyaW5nc1xuICAgICAgICAgICAgLy8gc2luY2UgaGVhZGVycyBjYW4gaGF2ZSBtdWx0aXBsZSB2YWx1ZXMgYnV0IHRoZXJlJ3Mgbm8gcmVhc29uXG4gICAgICAgICAgICAvLyBjb250ZW50VHlwZSBzaG91bGQgaGF2ZSBtb3JlIHRoYW4gb25lLlxuICAgICAgICAgICAgdmFsdWUgPSBjb250ZW50VHlwZVswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlID0gY29udGVudFR5cGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoISB2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSBtaW1lVHlwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjaGFyc2V0O1xuICAgICAgICBsZXQgbWF0Y2g7XG5cbiAgICAgICAgLy8gbm9pbnNwZWN0aW9uIFRzTGludFxuICAgICAgICBpZiAobWF0Y2ggPSB2YWx1ZS5tYXRjaChcIl4oW2EtekEtWl0rL1thLXpBLVorXSspXCIpKSB7XG4gICAgICAgICAgICBtaW1lVHlwZSA9IG1hdGNoWzFdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbm9pbnNwZWN0aW9uIFRzTGludFxuICAgICAgICBpZiAobWF0Y2ggPSB2YWx1ZS5tYXRjaChcIjsgY2hhcnNldD0oW14gO10rKVwiKSkge1xuICAgICAgICAgICAgY2hhcnNldCA9IG1hdGNoWzFdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1pbWVUeXBlLFxuICAgICAgICAgICAgY2hhcnNldFxuICAgICAgICB9O1xuXG4gICAgfVxuXG59XG5cbnR5cGUgQnVmZmVyUHJvdG9jb2xIYW5kbGVyID0gKHJlcXVlc3Q6IEludGVyY2VwdEJ1ZmZlclByb3RvY29sUmVxdWVzdCwgY2FsbGJhY2s6IEJ1ZmZlckNhbGxiYWNrKSA9PiB2b2lkO1xuXG5leHBvcnQgdHlwZSBCdWZmZXJDYWxsYmFjayA9IChidWZmZXI/OiBCdWZmZXIgfCBDYWxsYmFja0RhdGEgfCBudW1iZXIpID0+IHZvaWQ7XG5cbmludGVyZmFjZSBDYWxsYmFja0RhdGEge1xuICAgIG1pbWVUeXBlOiBzdHJpbmc7XG4gICAgZGF0YTogQnVmZmVyO1xufVxuXG4vLyBOT1RFIHRoYXQgRWxlY3Ryb24gc2F5cyB0aGF0IGJ1ZmZlciBwcm90b2NvbHMgZG9uJ3Qgc2VuZCBoZWFkZXJzIGJ1dCBJIHRoaW5rXG4vLyB0aGF0J3Mgbm90IGNvcnJlY3QuXG5pbnRlcmZhY2UgUmVxdWVzdCB7XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgaGVhZGVyczoge1tuYW1lOiBzdHJpbmddOiBzdHJpbmd9O1xuICAgIHJlZmVycmVyOiBzdHJpbmc7XG4gICAgbWV0aG9kOiBzdHJpbmc7XG4gICAgdXBsb2FkRGF0YTogRWxlY3Ryb24uVXBsb2FkRGF0YVtdO1xufVxuXG5cbiJdfQ==