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
const Logger_1 = require("../../logger/Logger");
const StreamInterceptors_1 = require("./StreamInterceptors");
const Preconditions_1 = require("../../Preconditions");
const log = Logger_1.Logger.create();
const HEADER_CONTENT_TYPE = "Content-Type";
class CachingStreamInterceptor {
    constructor(cacheRegistry, cacheStats) {
        this.cacheRegistry = cacheRegistry;
        this.cacheStats = cacheStats;
    }
    intercept(request, callback) {
        log.debug(`intercepted ${request.method} ${request.url}`);
        if (this.cacheRegistry.hasEntry(request.url)) {
            ++this.cacheStats.hits;
            this.interceptWithCache(request, callback)
                .catch(err => log.error("Unable to handle request: ", err));
        }
        else {
            ++this.cacheStats.misses;
            StreamInterceptors_1.StreamInterceptors.handleWithNetRequest(request, callback);
        }
    }
    interceptWithCache(request, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            log.debug("HIT Going to handle with cache: ", request.url);
            const cacheEntry = this.cacheRegistry.get(request.url);
            const stream = yield cacheEntry.toStream();
            log.debug("Returning intercepted cache stream: ", { headers: cacheEntry.headers, statusCode: cacheEntry.statusCode });
            const headers = Object.assign({}, cacheEntry.headers);
            if (!Preconditions_1.isPresent(headers[HEADER_CONTENT_TYPE])) {
                let newContentType;
                if (Preconditions_1.isPresent(cacheEntry.contentType)) {
                    newContentType = cacheEntry.contentType;
                }
                else if (Preconditions_1.isPresent(cacheEntry.docTypeFormat)) {
                    newContentType = 'text/' + cacheEntry.docTypeFormat;
                }
                if (Preconditions_1.isPresent(newContentType)) {
                    log.info("Using new content type (missing in headers): " + newContentType);
                    headers[HEADER_CONTENT_TYPE] = newContentType;
                }
            }
            const hdr = (header) => {
                if (headers[header] !== null) {
                    const val = headers[header];
                    if (typeof val === 'string') {
                        return val;
                    }
                    else {
                        return val[0];
                    }
                }
                return undefined;
            };
            const charset = 'utf-8';
            const contentType = hdr(HEADER_CONTENT_TYPE);
            if (contentType && ['text/html', 'text/xml'].includes(contentType)) {
                headers[HEADER_CONTENT_TYPE] = `${contentType}; charset=${charset}`;
            }
            const streamProtocolResponse = {
                headers,
                data: stream,
                statusCode: cacheEntry.statusCode
            };
            callback(streamProtocolResponse);
        });
    }
}
exports.CachingStreamInterceptor = CachingStreamInterceptor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FjaGluZ1N0cmVhbUludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ2FjaGluZ1N0cmVhbUludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFFM0MsNkRBQStHO0FBRy9HLHVEQUE4QztBQUU5QyxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBTSxtQkFBbUIsR0FBRyxjQUFjLENBQUM7QUFFM0MsTUFBYSx3QkFBd0I7SUFLakMsWUFBWSxhQUE0QixFQUFFLFVBQXNCO1FBQzVELElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQ2pDLENBQUM7SUFFTSxTQUFTLENBQUMsT0FBdUMsRUFBRSxRQUFnQztRQUV0RixHQUFHLENBQUMsS0FBSyxDQUFDLGVBQWUsT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUUxRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUUxQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1lBRXZCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDO2lCQUNyQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLDRCQUE0QixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FFbkU7YUFBTTtZQUNILEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7WUFFekIsdUNBQWtCLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzlEO0lBRUwsQ0FBQztJQUVhLGtCQUFrQixDQUFDLE9BQXVDLEVBQUUsUUFBZ0M7O1lBRXRHLEdBQUcsQ0FBQyxLQUFLLENBQUMsa0NBQWtDLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRTNELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUV2RCxNQUFNLE1BQU0sR0FBRyxNQUFNLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUUzQyxHQUFHLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxFQUFFLEVBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxVQUFVLEVBQUMsQ0FBQyxDQUFDO1lBSXBILE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUV0RCxJQUFJLENBQUMseUJBQVMsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFO2dCQUUxQyxJQUFJLGNBQWtDLENBQUM7Z0JBRXZDLElBQUkseUJBQVMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEVBQUU7b0JBQ25DLGNBQWMsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDO2lCQUMzQztxQkFBTSxJQUFJLHlCQUFTLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxFQUFFO29CQUM1QyxjQUFjLEdBQUcsT0FBTyxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7aUJBQ3ZEO2dCQUVELElBQUkseUJBQVMsQ0FBQyxjQUFjLENBQUMsRUFBRTtvQkFDM0IsR0FBRyxDQUFDLElBQUksQ0FBQywrQ0FBK0MsR0FBRyxjQUFjLENBQUMsQ0FBQztvQkFDM0UsT0FBTyxDQUFDLG1CQUFtQixDQUFDLEdBQUcsY0FBZSxDQUFDO2lCQUNsRDthQUVKO1lBSUQsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFjLEVBQXNCLEVBQUU7Z0JBRS9DLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksRUFBRTtvQkFFMUIsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUM1QixJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTt3QkFDekIsT0FBTyxHQUFHLENBQUM7cUJBQ2Q7eUJBQU07d0JBQ0gsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ2pCO2lCQUVKO2dCQUVELE9BQU8sU0FBUyxDQUFDO1lBRXJCLENBQUMsQ0FBQztZQUVGLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN4QixNQUFNLFdBQVcsR0FBRyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUU3QyxJQUFJLFdBQVcsSUFBSSxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQ2hFLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLEdBQUcsV0FBVyxhQUFhLE9BQU8sRUFBRSxDQUFDO2FBQ3ZFO1lBRUQsTUFBTSxzQkFBc0IsR0FBa0M7Z0JBQzFELE9BQU87Z0JBQ1AsSUFBSSxFQUFFLE1BQU07Z0JBQ1osVUFBVSxFQUFFLFVBQVUsQ0FBQyxVQUFVO2FBQ3BDLENBQUM7WUFFRixRQUFRLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUVyQyxDQUFDO0tBQUE7Q0FFSjtBQWhHRCw0REFnR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vLi4vbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0NhY2hlUmVnaXN0cnl9IGZyb20gJy4uL3Byb3h5c2VydmVyL0NhY2hlUmVnaXN0cnknO1xuaW1wb3J0IHtDb3JyZWN0U3RyZWFtUHJvdG9jb2xSZXNwb25zZSwgU3RyZWFtSW50ZXJjZXB0b3JzLCBTdHJlYW1Qcm90b2NvbENhbGxiYWNrfSBmcm9tICcuL1N0cmVhbUludGVyY2VwdG9ycyc7XG5pbXBvcnQgSW50ZXJjZXB0U3RyZWFtUHJvdG9jb2xSZXF1ZXN0ID0gRWxlY3Ryb24uSW50ZXJjZXB0U3RyZWFtUHJvdG9jb2xSZXF1ZXN0O1xuaW1wb3J0IHtDYWNoZVN0YXRzfSBmcm9tICcuL0NhY2hlU3RhdHMnO1xuaW1wb3J0IHtpc1ByZXNlbnR9IGZyb20gJy4uLy4uL1ByZWNvbmRpdGlvbnMnO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmNvbnN0IEhFQURFUl9DT05URU5UX1RZUEUgPSBcIkNvbnRlbnQtVHlwZVwiO1xuXG5leHBvcnQgY2xhc3MgQ2FjaGluZ1N0cmVhbUludGVyY2VwdG9yIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgY2FjaGVSZWdpc3RyeTogQ2FjaGVSZWdpc3RyeTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNhY2hlU3RhdHM6IENhY2hlU3RhdHM7XG5cbiAgICBjb25zdHJ1Y3RvcihjYWNoZVJlZ2lzdHJ5OiBDYWNoZVJlZ2lzdHJ5LCBjYWNoZVN0YXRzOiBDYWNoZVN0YXRzKSB7XG4gICAgICAgIHRoaXMuY2FjaGVSZWdpc3RyeSA9IGNhY2hlUmVnaXN0cnk7XG4gICAgICAgIHRoaXMuY2FjaGVTdGF0cyA9IGNhY2hlU3RhdHM7XG4gICAgfVxuXG4gICAgcHVibGljIGludGVyY2VwdChyZXF1ZXN0OiBJbnRlcmNlcHRTdHJlYW1Qcm90b2NvbFJlcXVlc3QsIGNhbGxiYWNrOiBTdHJlYW1Qcm90b2NvbENhbGxiYWNrKSB7XG5cbiAgICAgICAgbG9nLmRlYnVnKGBpbnRlcmNlcHRlZCAke3JlcXVlc3QubWV0aG9kfSAke3JlcXVlc3QudXJsfWApO1xuXG4gICAgICAgIGlmICh0aGlzLmNhY2hlUmVnaXN0cnkuaGFzRW50cnkocmVxdWVzdC51cmwpKSB7XG5cbiAgICAgICAgICAgICsrdGhpcy5jYWNoZVN0YXRzLmhpdHM7XG5cbiAgICAgICAgICAgIHRoaXMuaW50ZXJjZXB0V2l0aENhY2hlKHJlcXVlc3QsIGNhbGxiYWNrKVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gbG9nLmVycm9yKFwiVW5hYmxlIHRvIGhhbmRsZSByZXF1ZXN0OiBcIiwgZXJyKSk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICsrdGhpcy5jYWNoZVN0YXRzLm1pc3NlcztcblxuICAgICAgICAgICAgU3RyZWFtSW50ZXJjZXB0b3JzLmhhbmRsZVdpdGhOZXRSZXF1ZXN0KHJlcXVlc3QsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBpbnRlcmNlcHRXaXRoQ2FjaGUocmVxdWVzdDogSW50ZXJjZXB0U3RyZWFtUHJvdG9jb2xSZXF1ZXN0LCBjYWxsYmFjazogU3RyZWFtUHJvdG9jb2xDYWxsYmFjaykge1xuXG4gICAgICAgIGxvZy5kZWJ1ZyhcIkhJVCBHb2luZyB0byBoYW5kbGUgd2l0aCBjYWNoZTogXCIsIHJlcXVlc3QudXJsKTtcblxuICAgICAgICBjb25zdCBjYWNoZUVudHJ5ID0gdGhpcy5jYWNoZVJlZ2lzdHJ5LmdldChyZXF1ZXN0LnVybCk7XG5cbiAgICAgICAgY29uc3Qgc3RyZWFtID0gYXdhaXQgY2FjaGVFbnRyeS50b1N0cmVhbSgpO1xuXG4gICAgICAgIGxvZy5kZWJ1ZyhcIlJldHVybmluZyBpbnRlcmNlcHRlZCBjYWNoZSBzdHJlYW06IFwiLCB7aGVhZGVyczogY2FjaGVFbnRyeS5oZWFkZXJzLCBzdGF0dXNDb2RlOiBjYWNoZUVudHJ5LnN0YXR1c0NvZGV9KTtcblxuICAgICAgICAvLyBpZiB0aGVyZSBpcyBubyBIVFRQIGNvbnRlbnQgdHlwZSBpbiB0aGUgcmF3IGhlYWRlcnMgYWRkIGl0IGFuZCByZWJ1aWxkIGl0IGlmIG5lY2Vzc2FyeS4uLlxuXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBPYmplY3QuYXNzaWduKHt9LCBjYWNoZUVudHJ5LmhlYWRlcnMpO1xuXG4gICAgICAgIGlmICghaXNQcmVzZW50KGhlYWRlcnNbSEVBREVSX0NPTlRFTlRfVFlQRV0pKSB7XG5cbiAgICAgICAgICAgIGxldCBuZXdDb250ZW50VHlwZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICBpZiAoaXNQcmVzZW50KGNhY2hlRW50cnkuY29udGVudFR5cGUpKSB7XG4gICAgICAgICAgICAgICAgbmV3Q29udGVudFR5cGUgPSBjYWNoZUVudHJ5LmNvbnRlbnRUeXBlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc1ByZXNlbnQoY2FjaGVFbnRyeS5kb2NUeXBlRm9ybWF0KSkge1xuICAgICAgICAgICAgICAgIG5ld0NvbnRlbnRUeXBlID0gJ3RleHQvJyArIGNhY2hlRW50cnkuZG9jVHlwZUZvcm1hdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlzUHJlc2VudChuZXdDb250ZW50VHlwZSkpIHtcbiAgICAgICAgICAgICAgICBsb2cuaW5mbyhcIlVzaW5nIG5ldyBjb250ZW50IHR5cGUgKG1pc3NpbmcgaW4gaGVhZGVycyk6IFwiICsgbmV3Q29udGVudFR5cGUpO1xuICAgICAgICAgICAgICAgIGhlYWRlcnNbSEVBREVSX0NPTlRFTlRfVFlQRV0gPSBuZXdDb250ZW50VHlwZSE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCB0aGUgY2hhcnNldCBpZiBub25lIGlzIGluIHRoZSBjb250ZW50IHR5cGUgYW5kIHdlJ3JlIHNlbmRpbmcgdGV4dC9odG1sXG5cbiAgICAgICAgY29uc3QgaGRyID0gKGhlYWRlcjogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkID0+IHtcblxuICAgICAgICAgICAgaWYgKGhlYWRlcnNbaGVhZGVyXSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsID0gaGVhZGVyc1toZWFkZXJdO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxbMF07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBjaGFyc2V0ID0gJ3V0Zi04JztcbiAgICAgICAgY29uc3QgY29udGVudFR5cGUgPSBoZHIoSEVBREVSX0NPTlRFTlRfVFlQRSk7XG5cbiAgICAgICAgaWYgKGNvbnRlbnRUeXBlICYmIFsndGV4dC9odG1sJywgJ3RleHQveG1sJ10uaW5jbHVkZXMoY29udGVudFR5cGUpKSB7XG4gICAgICAgICAgICBoZWFkZXJzW0hFQURFUl9DT05URU5UX1RZUEVdID0gYCR7Y29udGVudFR5cGV9OyBjaGFyc2V0PSR7Y2hhcnNldH1gO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3RyZWFtUHJvdG9jb2xSZXNwb25zZTogQ29ycmVjdFN0cmVhbVByb3RvY29sUmVzcG9uc2UgPSB7XG4gICAgICAgICAgICBoZWFkZXJzLFxuICAgICAgICAgICAgZGF0YTogc3RyZWFtLFxuICAgICAgICAgICAgc3RhdHVzQ29kZTogY2FjaGVFbnRyeS5zdGF0dXNDb2RlXG4gICAgICAgIH07XG5cbiAgICAgICAgY2FsbGJhY2soc3RyZWFtUHJvdG9jb2xSZXNwb25zZSk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBIZWFkZXJNYXAge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xufVxuIl19