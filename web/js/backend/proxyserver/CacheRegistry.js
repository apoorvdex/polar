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
const Preconditions_1 = require("../../Preconditions");
const CachedRequestsHolder_1 = require("./CachedRequestsHolder");
const CachedRequest_1 = require("./CachedRequest");
const CacheEntriesFactory_1 = require("./CacheEntriesFactory");
const Functions_1 = require("../../util/Functions");
const Logger_1 = require("../../logger/Logger");
const log = Logger_1.Logger.create();
class CacheRegistry {
    constructor(proxyServerConfig) {
        this.registry = {};
        this.proxyServerConfig = Preconditions_1.Preconditions.assertNotNull(proxyServerConfig);
        this.registry = {};
    }
    registerFile(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const cacheEntriesHolder = yield CacheEntriesFactory_1.CacheEntriesFactory.createEntriesFromFile(path);
            const cachedRequestsHolder = new CachedRequestsHolder_1.CachedRequestsHolder({
                metadata: cacheEntriesHolder.metadata
            });
            if (!cacheEntriesHolder.cacheEntries) {
                throw new Error("No cache entries!");
            }
            Functions_1.forDict(cacheEntriesHolder.cacheEntries, (key, cacheEntry) => {
                const cacheMeta = this.register(cacheEntry);
                cachedRequestsHolder.cachedRequests[cacheMeta.url] = cacheMeta;
            });
            return cachedRequestsHolder;
        });
    }
    register(cacheEntry) {
        Preconditions_1.Preconditions.assertNotNull(cacheEntry, "cacheEntry");
        Preconditions_1.Preconditions.assertNotNull(cacheEntry.statusCode, "cacheEntry.statusCode");
        Preconditions_1.Preconditions.assertNotNull(cacheEntry.headers, "cacheEntry.headers");
        const url = cacheEntry.url;
        Preconditions_1.Preconditions.assertNotNull(url, "url");
        log.info(`Registered new cache entry at: ${url}`);
        this.registry[url] = cacheEntry;
        return new CachedRequest_1.CachedRequest({
            url
        });
    }
    hasEntry(url) {
        return url in this.registry;
    }
    get(url) {
        if (!this.hasEntry(url)) {
            throw new Error("URL not registered: " + url);
        }
        return this.registry[url];
    }
}
exports.CacheRegistry = CacheRegistry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FjaGVSZWdpc3RyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNhY2hlUmVnaXN0cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHVEQUFrRDtBQUNsRCxpRUFBNEQ7QUFFNUQsbURBQThDO0FBQzlDLCtEQUEwRDtBQUMxRCxvREFBNkM7QUFDN0MsZ0RBQTJDO0FBRTNDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLGFBQWE7SUFTdEIsWUFBWSxpQkFBb0M7UUFML0IsYUFBUSxHQUFnQyxFQUFFLENBQUM7UUFPeEQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLDZCQUFhLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFeEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFFdkIsQ0FBQztJQU9ZLFlBQVksQ0FBQyxJQUFZOztZQUVsQyxNQUFNLGtCQUFrQixHQUFHLE1BQU0seUNBQW1CLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFakYsTUFBTSxvQkFBb0IsR0FBRyxJQUFJLDJDQUFvQixDQUFDO2dCQUNsRCxRQUFRLEVBQUUsa0JBQWtCLENBQUMsUUFBUTthQUN4QyxDQUFDLENBQUM7WUFFSCxJQUFHLENBQUUsa0JBQWtCLENBQUMsWUFBWSxFQUFFO2dCQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7YUFDeEM7WUFFRCxtQkFBTyxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDLEdBQUcsRUFBRSxVQUFVLEVBQUUsRUFBRTtnQkFDekQsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDNUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUM7WUFDbkUsQ0FBQyxDQUFDLENBQUM7WUFFSCxPQUFPLG9CQUFvQixDQUFDO1FBRWhDLENBQUM7S0FBQTtJQVNNLFFBQVEsQ0FBQyxVQUFzQjtRQUVsQyw2QkFBYSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDdEQsNkJBQWEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO1FBQzVFLDZCQUFhLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUV0RSxNQUFNLEdBQUcsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDO1FBRTNCLDZCQUFhLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QyxHQUFHLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDO1FBRWhDLE9BQU8sSUFBSSw2QkFBYSxDQUFDO1lBQ3JCLEdBQUc7U0FDTixDQUFDLENBQUM7SUFFUCxDQUFDO0lBT00sUUFBUSxDQUFDLEdBQVc7UUFDdkIsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNoQyxDQUFDO0lBT00sR0FBRyxDQUFDLEdBQVc7UUFFbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDckIsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsR0FBRyxHQUFHLENBQUMsQ0FBQztTQUNqRDtRQUVELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUU5QixDQUFDO0NBRUo7QUE5RkQsc0NBOEZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQcm94eVNlcnZlckNvbmZpZ30gZnJvbSAnLi9Qcm94eVNlcnZlckNvbmZpZyc7XG5pbXBvcnQge1ByZWNvbmRpdGlvbnN9IGZyb20gJy4uLy4uL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtDYWNoZWRSZXF1ZXN0c0hvbGRlcn0gZnJvbSAnLi9DYWNoZWRSZXF1ZXN0c0hvbGRlcic7XG5pbXBvcnQge0NhY2hlRW50cnl9IGZyb20gJy4vQ2FjaGVFbnRyeSc7XG5pbXBvcnQge0NhY2hlZFJlcXVlc3R9IGZyb20gJy4vQ2FjaGVkUmVxdWVzdCc7XG5pbXBvcnQge0NhY2hlRW50cmllc0ZhY3Rvcnl9IGZyb20gJy4vQ2FjaGVFbnRyaWVzRmFjdG9yeSc7XG5pbXBvcnQge2ZvckRpY3R9IGZyb20gJy4uLy4uL3V0aWwvRnVuY3Rpb25zJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi9sb2dnZXIvTG9nZ2VyJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgY2xhc3MgQ2FjaGVSZWdpc3RyeSB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHByb3h5U2VydmVyQ29uZmlnOiBQcm94eVNlcnZlckNvbmZpZztcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgcmVnaXN0cnk6IHtbdXJsOiBzdHJpbmddOiBDYWNoZUVudHJ5fSA9IHt9O1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcm94eVNlcnZlckNvbmZpZzogUHJveHlTZXJ2ZXJDb25maWcpIHtcblxuICAgICAgICB0aGlzLnByb3h5U2VydmVyQ29uZmlnID0gUHJlY29uZGl0aW9ucy5hc3NlcnROb3ROdWxsKHByb3h5U2VydmVyQ29uZmlnKTtcblxuICAgICAgICB0aGlzLnJlZ2lzdHJ5ID0ge307XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYXRoXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxDYWNoZWRSZXF1ZXN0c0hvbGRlcj59XG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIHJlZ2lzdGVyRmlsZShwYXRoOiBzdHJpbmcpIHtcblxuICAgICAgICBjb25zdCBjYWNoZUVudHJpZXNIb2xkZXIgPSBhd2FpdCBDYWNoZUVudHJpZXNGYWN0b3J5LmNyZWF0ZUVudHJpZXNGcm9tRmlsZShwYXRoKTtcblxuICAgICAgICBjb25zdCBjYWNoZWRSZXF1ZXN0c0hvbGRlciA9IG5ldyBDYWNoZWRSZXF1ZXN0c0hvbGRlcih7XG4gICAgICAgICAgICBtZXRhZGF0YTogY2FjaGVFbnRyaWVzSG9sZGVyLm1ldGFkYXRhXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKCEgY2FjaGVFbnRyaWVzSG9sZGVyLmNhY2hlRW50cmllcykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gY2FjaGUgZW50cmllcyFcIik7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JEaWN0KGNhY2hlRW50cmllc0hvbGRlci5jYWNoZUVudHJpZXMsIChrZXksIGNhY2hlRW50cnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNhY2hlTWV0YSA9IHRoaXMucmVnaXN0ZXIoY2FjaGVFbnRyeSk7XG4gICAgICAgICAgICBjYWNoZWRSZXF1ZXN0c0hvbGRlci5jYWNoZWRSZXF1ZXN0c1tjYWNoZU1ldGEudXJsXSA9IGNhY2hlTWV0YTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNhY2hlZFJlcXVlc3RzSG9sZGVyO1xuXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBhIGZpbGUgdG8gYmUgc2VydmVkIHdpdGggdGhlIGdpdmVuIGNoZWNrc3VtLiAgVGhlbiByZXR1cm5cbiAgICAgKiBtZXRhZGF0YSBhYm91dCB3aGF0IHdlIHJlZ2lzdGVyZWQgaW5jbHVkaW5nIGhvdyB0byBmZXRjaCB0aGUgZmlsZSB3ZVxuICAgICAqIHJlZ2lzdGVyZWQuXG4gICAgICpcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVnaXN0ZXIoY2FjaGVFbnRyeTogQ2FjaGVFbnRyeSkge1xuXG4gICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0Tm90TnVsbChjYWNoZUVudHJ5LCBcImNhY2hlRW50cnlcIik7XG4gICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0Tm90TnVsbChjYWNoZUVudHJ5LnN0YXR1c0NvZGUsIFwiY2FjaGVFbnRyeS5zdGF0dXNDb2RlXCIpO1xuICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydE5vdE51bGwoY2FjaGVFbnRyeS5oZWFkZXJzLCBcImNhY2hlRW50cnkuaGVhZGVyc1wiKTtcblxuICAgICAgICBjb25zdCB1cmwgPSBjYWNoZUVudHJ5LnVybDtcblxuICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydE5vdE51bGwodXJsLCBcInVybFwiKTtcblxuICAgICAgICBsb2cuaW5mbyhgUmVnaXN0ZXJlZCBuZXcgY2FjaGUgZW50cnkgYXQ6ICR7dXJsfWApO1xuXG4gICAgICAgIHRoaXMucmVnaXN0cnlbdXJsXSA9IGNhY2hlRW50cnk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBDYWNoZWRSZXF1ZXN0KHtcbiAgICAgICAgICAgIHVybFxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB0cnVlIGlmIHRoZSBnaXZlbiBoYXNoY29kZSBpcyByZWdpc3RlcmVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHVybCBUaGUga2V5IHdlIHNob3VsZCBmZXRjaC5cbiAgICAgKi9cbiAgICBwdWJsaWMgaGFzRW50cnkodXJsOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHVybCBpbiB0aGlzLnJlZ2lzdHJ5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBtZXRhZGF0YSBhYm91dCB0aGUgZ2l2ZW4ga2V5LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Q2FjaGVFbnRyeX1cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0KHVybDogc3RyaW5nKTogQ2FjaGVFbnRyeSB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmhhc0VudHJ5KHVybCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVSTCBub3QgcmVnaXN0ZXJlZDogXCIgKyB1cmwpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVnaXN0cnlbdXJsXTtcblxuICAgIH1cblxufVxuIl19