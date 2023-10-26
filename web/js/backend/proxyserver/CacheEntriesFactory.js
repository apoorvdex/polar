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
const CacheEntriesHolder_1 = require("./CacheEntriesHolder");
const DiskCacheEntry_1 = require("./DiskCacheEntry");
const PHZCacheEntry_1 = require("./PHZCacheEntry");
const CachingPHZReader_1 = require("../../phz/CachingPHZReader");
const fs_1 = __importDefault(require("fs"));
const Dictionaries_1 = require("../../util/Dictionaries");
class CacheEntriesFactory {
    static createEntriesFromFile(path) {
        return __awaiter(this, void 0, void 0, function* () {
            if (path.endsWith(".chtml")) {
                return CacheEntriesFactory.createFromCHTML(path);
            }
            else if (path.endsWith(".phz")) {
                return CacheEntriesFactory.createFromPHZ(path);
            }
            else {
                throw new Error("Unable to handle file type for path: " + path);
            }
        });
    }
    static createFromHTML(url, path) {
        return new DiskCacheEntry_1.DiskCacheEntry({
            url,
            method: "GET",
            headers: {
                "Content-Type": "text/html"
            },
            statusCode: 200,
            statusMessage: "OK",
            path
        });
    }
    static createFromPHZ(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const cachingPHZReader = new CachingPHZReader_1.CachingPHZReader(path);
            const resources = yield cachingPHZReader.getResources();
            const cacheEntriesHolder = new CacheEntriesHolder_1.CacheEntriesHolder({});
            cacheEntriesHolder.metadata = yield cachingPHZReader.getMetadata();
            Dictionaries_1.Dictionaries.forDict(resources.entries, (key, resourceEntry) => {
                const resource = resourceEntry.resource;
                const url = resourceEntry.resource.url;
                if (!url) {
                    throw new Error("No url");
                }
                const cacheEntry = new PHZCacheEntry_1.PHZCacheEntry({
                    url,
                    method: resource.method,
                    headers: resource.headers,
                    statusCode: resource.statusCode,
                    statusMessage: resource.statusMessage || "OK",
                    contentType: resource.contentType,
                    docTypeFormat: resource.docTypeFormat,
                    mimeType: resource.encoding,
                    encoding: resource.encoding,
                    phzReader: cachingPHZReader,
                    resourceEntry
                });
                cacheEntriesHolder.cacheEntries[url] = cacheEntry;
            });
            return cacheEntriesHolder;
        });
    }
    static createFromCHTML(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonPath = path.replace(".chtml", "") + ".json";
            const json = fs_1.default.readFileSync(jsonPath);
            const data = JSON.parse(json.toString("UTF-8"));
            let url = data.url;
            url = url.replace(/^https:/, "http:");
            return new CacheEntriesHolder_1.CacheEntriesHolder({
                metadata: {
                    url
                },
                cacheEntries: {
                    url: new DiskCacheEntry_1.DiskCacheEntry({
                        url,
                        method: "GET",
                        headers: {
                            "Content-Type": "text/html"
                        },
                        statusCode: 200,
                        statusMessage: "OK",
                        path
                    })
                }
            });
        });
    }
}
exports.CacheEntriesFactory = CacheEntriesFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FjaGVFbnRyaWVzRmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNhY2hlRW50cmllc0ZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLDZEQUF3RDtBQUN4RCxxREFBZ0Q7QUFDaEQsbURBQThDO0FBQzlDLGlFQUE0RDtBQUU1RCw0Q0FBb0I7QUFDcEIsMERBQXFEO0FBS3JELE1BQWEsbUJBQW1CO0lBTXJCLE1BQU0sQ0FBTyxxQkFBcUIsQ0FBQyxJQUFZOztZQUVsRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ3pCLE9BQU8sbUJBQW1CLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3BEO2lCQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDOUIsT0FBTyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbEQ7aUJBQU07Z0JBQ0gsTUFBTSxJQUFJLEtBQUssQ0FBQyx1Q0FBdUMsR0FBRyxJQUFJLENBQUMsQ0FBQzthQUNuRTtRQUVMLENBQUM7S0FBQTtJQUVNLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBVyxFQUFFLElBQVk7UUFJbEQsT0FBTyxJQUFJLCtCQUFjLENBQUM7WUFDdEIsR0FBRztZQUNILE1BQU0sRUFBRSxLQUFLO1lBQ2IsT0FBTyxFQUFFO2dCQUNMLGNBQWMsRUFBRSxXQUFXO2FBQzlCO1lBQ0QsVUFBVSxFQUFFLEdBQUc7WUFDZixhQUFhLEVBQUUsSUFBSTtZQUNuQixJQUFJO1NBQ1AsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQVFNLE1BQU0sQ0FBTyxhQUFhLENBQUMsSUFBWTs7WUFJMUMsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLG1DQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXBELE1BQU0sU0FBUyxHQUFHLE1BQU0sZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7WUFFeEQsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLHVDQUFrQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRXRELGtCQUFrQixDQUFDLFFBQVEsR0FBRyxNQUFNLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDO1lBRW5FLDJCQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUU7Z0JBRTNELE1BQU0sUUFBUSxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUM7Z0JBRXhDLE1BQU0sR0FBRyxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO2dCQUV2QyxJQUFJLENBQUMsR0FBRyxFQUFFO29CQUNOLE1BQU0sSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQzdCO2dCQU1ELE1BQU0sVUFBVSxHQUFHLElBQUksNkJBQWEsQ0FBQztvQkFDakMsR0FBRztvQkFDSCxNQUFNLEVBQUUsUUFBUSxDQUFDLE1BQU07b0JBQ3ZCLE9BQU8sRUFBRSxRQUFRLENBQUMsT0FBTztvQkFDekIsVUFBVSxFQUFFLFFBQVEsQ0FBQyxVQUFVO29CQUMvQixhQUFhLEVBQUUsUUFBUSxDQUFDLGFBQWEsSUFBSSxJQUFJO29CQUM3QyxXQUFXLEVBQUUsUUFBUSxDQUFDLFdBQVc7b0JBQ2pDLGFBQWEsRUFBRSxRQUFRLENBQUMsYUFBYTtvQkFDckMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRO29CQUMzQixRQUFRLEVBQUUsUUFBUSxDQUFDLFFBQVE7b0JBQzNCLFNBQVMsRUFBRSxnQkFBZ0I7b0JBQzNCLGFBQWE7aUJBQ2hCLENBQUMsQ0FBQztnQkFFSCxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDO1lBRXRELENBQUMsQ0FBQyxDQUFDO1lBRUgsT0FBTyxrQkFBa0IsQ0FBQztRQUU5QixDQUFDO0tBQUE7SUFTTSxNQUFNLENBQU8sZUFBZSxDQUFDLElBQVk7O1lBSTVDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQztZQUV0RCxNQUFNLElBQUksR0FBRyxZQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXZDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBRWhELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7WUFHbkIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBSXRDLE9BQU8sSUFBSSx1Q0FBa0IsQ0FBQztnQkFDMUIsUUFBUSxFQUFFO29CQUNOLEdBQUc7aUJBQ047Z0JBQ0QsWUFBWSxFQUFFO29CQUNWLEdBQUcsRUFBRSxJQUFJLCtCQUFjLENBQUM7d0JBQ3BCLEdBQUc7d0JBQ0gsTUFBTSxFQUFFLEtBQUs7d0JBQ2IsT0FBTyxFQUFFOzRCQUNMLGNBQWMsRUFBRSxXQUFXO3lCQUM5Qjt3QkFDRCxVQUFVLEVBQUUsR0FBRzt3QkFDZixhQUFhLEVBQUUsSUFBSTt3QkFDbkIsSUFBSTtxQkFDUCxDQUFDO2lCQUNMO2FBQ0osQ0FBQyxDQUFDO1FBRVAsQ0FBQztLQUFBO0NBRUo7QUFySUQsa0RBcUlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtmb3JEaWN0fSBmcm9tICcuLi8uLi91dGlsL0Z1bmN0aW9ucyc7XG5pbXBvcnQge0NhY2hlRW50cmllc0hvbGRlcn0gZnJvbSAnLi9DYWNoZUVudHJpZXNIb2xkZXInO1xuaW1wb3J0IHtEaXNrQ2FjaGVFbnRyeX0gZnJvbSAnLi9EaXNrQ2FjaGVFbnRyeSc7XG5pbXBvcnQge1BIWkNhY2hlRW50cnl9IGZyb20gJy4vUEhaQ2FjaGVFbnRyeSc7XG5pbXBvcnQge0NhY2hpbmdQSFpSZWFkZXJ9IGZyb20gJy4uLy4uL3Boei9DYWNoaW5nUEhaUmVhZGVyJztcblxuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCB7RGljdGlvbmFyaWVzfSBmcm9tICcuLi8uLi91dGlsL0RpY3Rpb25hcmllcyc7XG5cbi8qKlxuICogQ2FjaGUgZW50cnkgd2hpY2ggaXMganVzdCBidWZmZXJlZCBpbiBtZW1vcnkuXG4gKi9cbmV4cG9ydCBjbGFzcyBDYWNoZUVudHJpZXNGYWN0b3J5IHtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhdGhcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGNyZWF0ZUVudHJpZXNGcm9tRmlsZShwYXRoOiBzdHJpbmcpOiBQcm9taXNlPENhY2hlRW50cmllc0hvbGRlcj4ge1xuXG4gICAgICAgIGlmIChwYXRoLmVuZHNXaXRoKFwiLmNodG1sXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gQ2FjaGVFbnRyaWVzRmFjdG9yeS5jcmVhdGVGcm9tQ0hUTUwocGF0aCk7XG4gICAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aChcIi5waHpcIikpIHtcbiAgICAgICAgICAgIHJldHVybiBDYWNoZUVudHJpZXNGYWN0b3J5LmNyZWF0ZUZyb21QSFoocGF0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gaGFuZGxlIGZpbGUgdHlwZSBmb3IgcGF0aDogXCIgKyBwYXRoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVGcm9tSFRNTCh1cmw6IHN0cmluZywgcGF0aDogc3RyaW5nKSB7XG5cbiAgICAgICAgLy8gVE9ETzogc3RhdCB0aGUgZmlsZSBzbyB0aGF0IHdlIGNhbiBnZXQgdGhlIENvbnRlbnQtTGVuZ3RoXG5cbiAgICAgICAgcmV0dXJuIG5ldyBEaXNrQ2FjaGVFbnRyeSh7XG4gICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJ0ZXh0L2h0bWxcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICAgICAgICAgIHN0YXR1c01lc3NhZ2U6IFwiT0tcIixcbiAgICAgICAgICAgIHBhdGhcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWFkIGZyb20gYSBzdGF0aWMgQ0hUTUwgZmlsZSB3aGljaCBoYXMgdGhlIFVSTCB3aXRoaW4gdGhlIG1ldGFkYXRhLlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhdGhcbiAgICAgKiBAcmV0dXJuIFByb21pc2U8Q2FjaGVFbnRyaWVzSG9sZGVyPlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgY3JlYXRlRnJvbVBIWihwYXRoOiBzdHJpbmcpIHtcblxuICAgICAgICAvLyBsb2FkIHRoZSAuanNvbiBkYXRhIHNvIHdlIGhhdmUgdGhlIFVSTC5cblxuICAgICAgICBjb25zdCBjYWNoaW5nUEhaUmVhZGVyID0gbmV3IENhY2hpbmdQSFpSZWFkZXIocGF0aCk7XG5cbiAgICAgICAgY29uc3QgcmVzb3VyY2VzID0gYXdhaXQgY2FjaGluZ1BIWlJlYWRlci5nZXRSZXNvdXJjZXMoKTtcblxuICAgICAgICBjb25zdCBjYWNoZUVudHJpZXNIb2xkZXIgPSBuZXcgQ2FjaGVFbnRyaWVzSG9sZGVyKHt9KTtcblxuICAgICAgICBjYWNoZUVudHJpZXNIb2xkZXIubWV0YWRhdGEgPSBhd2FpdCBjYWNoaW5nUEhaUmVhZGVyLmdldE1ldGFkYXRhKCk7XG5cbiAgICAgICAgRGljdGlvbmFyaWVzLmZvckRpY3QocmVzb3VyY2VzLmVudHJpZXMsIChrZXksIHJlc291cmNlRW50cnkpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgcmVzb3VyY2UgPSByZXNvdXJjZUVudHJ5LnJlc291cmNlO1xuXG4gICAgICAgICAgICBjb25zdCB1cmwgPSByZXNvdXJjZUVudHJ5LnJlc291cmNlLnVybDtcblxuICAgICAgICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyB1cmxcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFRPRE86IHdlIG5lZWQgYSB3YXkgdG8ga2VlcCB0aGUgQ2FjaGVFbnRyeSBhbmQgUmVzb3VyY2UgZmllbGRzXG4gICAgICAgICAgICAvLyBhbGwgaW4gc3luYy4uLiBNYXliZSBoYXZlIHRoZW0gYWxsIGV4dGVuZCBmcm9tIHRoZSBzYW1lIGJhc2VcbiAgICAgICAgICAgIC8vIG9iamVjdFxuXG4gICAgICAgICAgICBjb25zdCBjYWNoZUVudHJ5ID0gbmV3IFBIWkNhY2hlRW50cnkoe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBtZXRob2Q6IHJlc291cmNlLm1ldGhvZCxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiByZXNvdXJjZS5oZWFkZXJzLFxuICAgICAgICAgICAgICAgIHN0YXR1c0NvZGU6IHJlc291cmNlLnN0YXR1c0NvZGUsXG4gICAgICAgICAgICAgICAgc3RhdHVzTWVzc2FnZTogcmVzb3VyY2Uuc3RhdHVzTWVzc2FnZSB8fCBcIk9LXCIsXG4gICAgICAgICAgICAgICAgY29udGVudFR5cGU6IHJlc291cmNlLmNvbnRlbnRUeXBlLFxuICAgICAgICAgICAgICAgIGRvY1R5cGVGb3JtYXQ6IHJlc291cmNlLmRvY1R5cGVGb3JtYXQsXG4gICAgICAgICAgICAgICAgbWltZVR5cGU6IHJlc291cmNlLmVuY29kaW5nLFxuICAgICAgICAgICAgICAgIGVuY29kaW5nOiByZXNvdXJjZS5lbmNvZGluZyxcbiAgICAgICAgICAgICAgICBwaHpSZWFkZXI6IGNhY2hpbmdQSFpSZWFkZXIsXG4gICAgICAgICAgICAgICAgcmVzb3VyY2VFbnRyeVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNhY2hlRW50cmllc0hvbGRlci5jYWNoZUVudHJpZXNbdXJsXSA9IGNhY2hlRW50cnk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNhY2hlRW50cmllc0hvbGRlcjtcblxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUmVhZCBmcm9tIGEgc3RhdGljIENIVE1MIGZpbGUgd2hpY2ggaGFzIHRoZSBVUkwgd2l0aGluIHRoZSBtZXRhZGF0YS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYXRoXG4gICAgICogQHJldHVybiBQcm9taXNlPENhY2hlRW50cmllc0hvbGRlcj5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGNyZWF0ZUZyb21DSFRNTChwYXRoOiBzdHJpbmcpIHtcblxuICAgICAgICAvLyBsb2FkIHRoZSAuanNvbiBkYXRhIHNvIHdlIGhhdmUgdGhlIFVSTC5cblxuICAgICAgICBjb25zdCBqc29uUGF0aCA9IHBhdGgucmVwbGFjZShcIi5jaHRtbFwiLCBcIlwiKSArIFwiLmpzb25cIjtcblxuICAgICAgICBjb25zdCBqc29uID0gZnMucmVhZEZpbGVTeW5jKGpzb25QYXRoKTtcblxuICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShqc29uLnRvU3RyaW5nKFwiVVRGLThcIikpO1xuXG4gICAgICAgIGxldCB1cmwgPSBkYXRhLnVybDtcblxuICAgICAgICAvLyB3ZSBjYW4ndCBzZXJ2ZSB0aGlzIHZpYSBIVFRQUy4uIG9ubHkgSFRUUCB3aGljaCBpcyBjYWNoZWQgbG9jYWxseS5cbiAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoL15odHRwczovLCBcImh0dHA6XCIpO1xuXG4gICAgICAgIC8vIFRPRE86IHN0YXQgdGhlIGZpbGUgc28gdGhhdCB3ZSBjYW4gZ2V0IHRoZSBDb250ZW50LUxlbmd0aFxuXG4gICAgICAgIHJldHVybiBuZXcgQ2FjaGVFbnRyaWVzSG9sZGVyKHtcbiAgICAgICAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgICAgICAgICAgdXJsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FjaGVFbnRyaWVzOiB7XG4gICAgICAgICAgICAgICAgdXJsOiBuZXcgRGlza0NhY2hlRW50cnkoe1xuICAgICAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJ0ZXh0L2h0bWxcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c01lc3NhZ2U6IFwiT0tcIixcbiAgICAgICAgICAgICAgICAgICAgcGF0aFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG59XG4iXX0=