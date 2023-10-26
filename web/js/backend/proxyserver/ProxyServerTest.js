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
const chai_1 = require("chai");
const ProxyServerConfig_1 = require("./ProxyServerConfig");
const CacheRegistry_1 = require("./CacheRegistry");
const ProxyServer_1 = require("./ProxyServer");
const BufferedCacheEntry_1 = require("./BufferedCacheEntry");
const Http_1 = require("../../util/Http");
const url = require('url');
const HttpProxyAgent = require('http-proxy-agent');
const HttpsProxyAgent = require('https-proxy-agent');
xdescribe('ProxyServer', function () {
    let proxyServer = undefined;
    let cacheRegistry;
    beforeEach(function (done) {
        console.log("Starting...");
        let proxyServerConfig = new ProxyServerConfig_1.ProxyServerConfig(8090);
        cacheRegistry = new CacheRegistry_1.CacheRegistry(proxyServerConfig);
        proxyServer = new ProxyServer_1.ProxyServer(proxyServerConfig, cacheRegistry);
        proxyServer.start();
        console.log("Starting...done");
        cacheRegistry.register(new BufferedCacheEntry_1.BufferedCacheEntry({
            url: "http://foo.com/index.html",
            method: "GET",
            headers: {
                "Content-Type": "text/html"
            },
            statusCode: 200,
            statusMessage: "OK",
            data: "this is our first cache entry"
        }));
        cacheRegistry.register(new BufferedCacheEntry_1.BufferedCacheEntry({
            url: "http://foo.com/second.html",
            method: "GET",
            headers: {
                "Content-Type": "text/html"
            },
            statusCode: 200,
            statusMessage: "OK",
            contentLength: 30,
            data: "this is our second cache entry"
        }));
        done();
    });
    afterEach(function (done) {
        console.log("Stopping...");
        proxyServer.stop();
        console.log("Stopping...done");
        done();
    });
    describe('proxying', function () {
        it("basic", function () {
        });
        it("Proxy HTTP requests", function () {
            return __awaiter(this, void 0, void 0, function* () {
                let agent = new HttpProxyAgent("http://localhost:8090");
                let link = "http://httpbin.org/get?message=hello+world";
                let content = yield testWithAgent(link, agent);
                chai_1.assert.equal(content.toString().indexOf("hello world") > -1, true);
            });
        });
        it("Proxy HTTPS requests", function () {
            return __awaiter(this, void 0, void 0, function* () {
                let agent = new HttpsProxyAgent("http://localhost:8090");
                let link = "https://httpbin.org/get?message=hello+world";
                let content = yield testWithAgent(link, agent);
                chai_1.assert.equal(content.toString().indexOf("hello world") > -1, true);
            });
        });
    });
    describe('caching', function () {
        it("hasEntry", function () {
            return __awaiter(this, void 0, void 0, function* () {
                let link = "http://foo.com/index.html";
                chai_1.assert.equal(cacheRegistry.hasEntry(link), true);
            });
        });
        it("basic", function () {
            return __awaiter(this, void 0, void 0, function* () {
                let agent = new HttpProxyAgent("http://localhost:8090");
                let link = "http://foo.com/index.html";
                let executed = yield executeWithAgent(link, agent);
                chai_1.assert.equal(executed.data.toString(), "this is our first cache entry");
                chai_1.assert.equal(executed.response.headers["x-polar-cache"], "hit");
            });
        });
        it("second request with content-length", function () {
            return __awaiter(this, void 0, void 0, function* () {
                let agent = new HttpProxyAgent("http://localhost:8090");
                let link = "http://foo.com/second.html";
                let executed = yield executeWithAgent(link, agent);
                chai_1.assert.equal(executed.data.toString(), "this is our second cache entry");
                chai_1.assert.equal(executed.response.headers["x-polar-cache"], "hit");
                chai_1.assert.equal(executed.response.headers["content-length"], "30");
            });
        });
    });
});
function testWithAgent(link, agent) {
    return __awaiter(this, void 0, void 0, function* () {
        let options = url.parse(link);
        options.method = "GET";
        options.agent = agent;
        let content = yield Http_1.Http.fetchContent(options);
        return content.toString();
    });
}
function executeWithAgent(link, agent) {
    return __awaiter(this, void 0, void 0, function* () {
        let options = url.parse(link);
        options.method = "GET";
        options.agent = agent;
        return yield Http_1.Http.execute(options);
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJveHlTZXJ2ZXJUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUHJveHlTZXJ2ZXJUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwrQkFBNEI7QUFDNUIsMkRBQXNEO0FBQ3RELG1EQUE4QztBQUM5QywrQ0FBMEM7QUFDMUMsNkRBQXdEO0FBQ3hELDBDQUFxQztBQUNyQyxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7QUFHM0IsTUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDbkQsTUFBTSxlQUFlLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFFckQsU0FBUyxDQUFDLGFBQWEsRUFBRTtJQUVyQixJQUFJLFdBQVcsR0FBNEIsU0FBUyxDQUFDO0lBQ3JELElBQUksYUFBd0MsQ0FBQztJQUU3QyxVQUFVLENBQUMsVUFBUyxJQUFJO1FBRXBCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFM0IsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLHFDQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BELGFBQWEsR0FBRyxJQUFJLDZCQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUVyRCxXQUFXLEdBQUcsSUFBSSx5QkFBVyxDQUFDLGlCQUFpQixFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ2hFLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVwQixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFJL0IsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLHVDQUFrQixDQUFDO1lBQzFDLEdBQUcsRUFBRSwyQkFBMkI7WUFDaEMsTUFBTSxFQUFFLEtBQUs7WUFDYixPQUFPLEVBQUU7Z0JBQ0wsY0FBYyxFQUFFLFdBQVc7YUFDOUI7WUFDRCxVQUFVLEVBQUUsR0FBRztZQUNmLGFBQWEsRUFBRSxJQUFJO1lBQ25C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SyxDQUFDO1FBSXRCLE9BQU8sTUFBTSxXQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRXZDLENBQUM7Q0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcbmltcG9ydCB7UHJveHlTZXJ2ZXJDb25maWd9IGZyb20gJy4vUHJveHlTZXJ2ZXJDb25maWcnO1xuaW1wb3J0IHtDYWNoZVJlZ2lzdHJ5fSBmcm9tICcuL0NhY2hlUmVnaXN0cnknO1xuaW1wb3J0IHtQcm94eVNlcnZlcn0gZnJvbSAnLi9Qcm94eVNlcnZlcic7XG5pbXBvcnQge0J1ZmZlcmVkQ2FjaGVFbnRyeX0gZnJvbSAnLi9CdWZmZXJlZENhY2hlRW50cnknO1xuaW1wb3J0IHtIdHRwfSBmcm9tICcuLi8uLi91dGlsL0h0dHAnO1xuY29uc3QgdXJsID0gcmVxdWlyZSgndXJsJyk7XG5cblxuY29uc3QgSHR0cFByb3h5QWdlbnQgPSByZXF1aXJlKCdodHRwLXByb3h5LWFnZW50Jyk7XG5jb25zdCBIdHRwc1Byb3h5QWdlbnQgPSByZXF1aXJlKCdodHRwcy1wcm94eS1hZ2VudCcpO1xuXG54ZGVzY3JpYmUoJ1Byb3h5U2VydmVyJywgZnVuY3Rpb24oKSB7XG5cbiAgICBsZXQgcHJveHlTZXJ2ZXI6IFByb3h5U2VydmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIGxldCBjYWNoZVJlZ2lzdHJ5OiBDYWNoZVJlZ2lzdHJ5IHwgdW5kZWZpbmVkO1xuXG4gICAgYmVmb3JlRWFjaChmdW5jdGlvbihkb25lKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJTdGFydGluZy4uLlwiKTtcblxuICAgICAgICBsZXQgcHJveHlTZXJ2ZXJDb25maWcgPSBuZXcgUHJveHlTZXJ2ZXJDb25maWcoODA5MCk7XG4gICAgICAgIGNhY2hlUmVnaXN0cnkgPSBuZXcgQ2FjaGVSZWdpc3RyeShwcm94eVNlcnZlckNvbmZpZyk7XG5cbiAgICAgICAgcHJveHlTZXJ2ZXIgPSBuZXcgUHJveHlTZXJ2ZXIocHJveHlTZXJ2ZXJDb25maWcsIGNhY2hlUmVnaXN0cnkpO1xuICAgICAgICBwcm94eVNlcnZlci5zdGFydCgpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU3RhcnRpbmcuLi5kb25lXCIpO1xuXG4gICAgICAgIC8vIGFkZCByZXF1ZXN0cyB0byB0aGUgY2FjaGUgcmVnaXN0cnlcblxuICAgICAgICBjYWNoZVJlZ2lzdHJ5LnJlZ2lzdGVyKG5ldyBCdWZmZXJlZENhY2hlRW50cnkoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly9mb28uY29tL2luZGV4Lmh0bWxcIixcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcInRleHQvaHRtbFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RhdHVzQ29kZTogMjAwLFxuICAgICAgICAgICAgc3RhdHVzTWVzc2FnZTogXCJPS1wiLFxuICAgICAgICAgICAgZGF0YTogXCJ0aGlzIGlzIG91ciBmaXJzdCBjYWNoZSBlbnRyeVwiXG4gICAgICAgIH0pKTtcblxuICAgICAgICBjYWNoZVJlZ2lzdHJ5LnJlZ2lzdGVyKG5ldyBCdWZmZXJlZENhY2hlRW50cnkoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly9mb28uY29tL3NlY29uZC5odG1sXCIsXG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJ0ZXh0L2h0bWxcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICAgICAgICAgIHN0YXR1c01lc3NhZ2U6IFwiT0tcIixcbiAgICAgICAgICAgIGNvbnRlbnRMZW5ndGg6IDMwLFxuICAgICAgICAgICAgZGF0YTogXCJ0aGlzIGlzIG91ciBzZWNvbmQgY2FjaGUgZW50cnlcIlxuICAgICAgICB9KSk7XG5cbiAgICAgICAgZG9uZSgpO1xuXG4gICAgfSk7XG5cbiAgICBhZnRlckVhY2goZnVuY3Rpb24oZG9uZSkge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU3RvcHBpbmcuLi5cIik7XG5cbiAgICAgICAgcHJveHlTZXJ2ZXIhLnN0b3AoKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIlN0b3BwaW5nLi4uZG9uZVwiKTtcblxuICAgICAgICBkb25lKCk7XG5cbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdwcm94eWluZycsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGl0KFwiYmFzaWNcIiwgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAvLyB0aGlzIGlzIGp1c3QgYmFzaWMgc3RhcnR1cCBhbmQgdGVhcmRvd24uXG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJQcm94eSBIVFRQIHJlcXVlc3RzXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgbGV0IGFnZW50ID0gbmV3IEh0dHBQcm94eUFnZW50KFwiaHR0cDovL2xvY2FsaG9zdDo4MDkwXCIpO1xuXG4gICAgICAgICAgICBsZXQgbGluayA9IFwiaHR0cDovL2h0dHBiaW4ub3JnL2dldD9tZXNzYWdlPWhlbGxvK3dvcmxkXCI7XG4gICAgICAgICAgICAvL2xldCBsaW5rID0gXCJodHRwOi8vZXhhbXBsZS5jb21cIjtcblxuICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBhd2FpdCB0ZXN0V2l0aEFnZW50KGxpbmssIGFnZW50KTtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChjb250ZW50LnRvU3RyaW5nKCkuaW5kZXhPZihcImhlbGxvIHdvcmxkXCIpID4gLTEsIHRydWUpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiUHJveHkgSFRUUFMgcmVxdWVzdHNcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBsZXQgYWdlbnQgPSBuZXcgSHR0cHNQcm94eUFnZW50KFwiaHR0cDovL2xvY2FsaG9zdDo4MDkwXCIpO1xuXG4gICAgICAgICAgICBsZXQgbGluayA9IFwiaHR0cHM6Ly9odHRwYmluLm9yZy9nZXQ/bWVzc2FnZT1oZWxsbyt3b3JsZFwiO1xuXG4gICAgICAgICAgICBsZXQgY29udGVudCA9IGF3YWl0IHRlc3RXaXRoQWdlbnQobGluaywgYWdlbnQpO1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKGNvbnRlbnQudG9TdHJpbmcoKS5pbmRleE9mKFwiaGVsbG8gd29ybGRcIikgPiAtMSwgdHJ1ZSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxuXG4gICAgZGVzY3JpYmUoJ2NhY2hpbmcnLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBpdChcImhhc0VudHJ5XCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgbGV0IGxpbmsgPSBcImh0dHA6Ly9mb28uY29tL2luZGV4Lmh0bWxcIjtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChjYWNoZVJlZ2lzdHJ5IS5oYXNFbnRyeShsaW5rKSwgdHJ1ZSk7XG5cbiAgICAgICAgfSk7XG5cblxuICAgICAgICBpdChcImJhc2ljXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgbGV0IGFnZW50ID0gbmV3IEh0dHBQcm94eUFnZW50KFwiaHR0cDovL2xvY2FsaG9zdDo4MDkwXCIpO1xuXG4gICAgICAgICAgICBsZXQgbGluayA9IFwiaHR0cDovL2Zvby5jb20vaW5kZXguaHRtbFwiO1xuXG4gICAgICAgICAgICBsZXQgZXhlY3V0ZWQgPSBhd2FpdCBleGVjdXRlV2l0aEFnZW50KGxpbmssIGFnZW50KTtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChleGVjdXRlZC5kYXRhLnRvU3RyaW5nKCksIFwidGhpcyBpcyBvdXIgZmlyc3QgY2FjaGUgZW50cnlcIik7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoZXhlY3V0ZWQucmVzcG9uc2UuaGVhZGVyc1tcIngtcG9sYXItY2FjaGVcIl0sIFwiaGl0XCIpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwic2Vjb25kIHJlcXVlc3Qgd2l0aCBjb250ZW50LWxlbmd0aFwiLCBhc3luYyBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIGxldCBhZ2VudCA9IG5ldyBIdHRwUHJveHlBZ2VudChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA5MFwiKTtcblxuICAgICAgICAgICAgbGV0IGxpbmsgPSBcImh0dHA6Ly9mb28uY29tL3NlY29uZC5odG1sXCI7XG5cbiAgICAgICAgICAgIGxldCBleGVjdXRlZCA9IGF3YWl0IGV4ZWN1dGVXaXRoQWdlbnQobGluaywgYWdlbnQpO1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKGV4ZWN1dGVkLmRhdGEudG9TdHJpbmcoKSwgXCJ0aGlzIGlzIG91ciBzZWNvbmQgY2FjaGUgZW50cnlcIik7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoZXhlY3V0ZWQucmVzcG9uc2UuaGVhZGVyc1tcIngtcG9sYXItY2FjaGVcIl0sIFwiaGl0XCIpO1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKGV4ZWN1dGVkLnJlc3BvbnNlLmhlYWRlcnNbXCJjb250ZW50LWxlbmd0aFwiXSwgXCIzMFwiKTtcblxuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG59KTtcblxuYXN5bmMgZnVuY3Rpb24gdGVzdFdpdGhBZ2VudChsaW5rOiBzdHJpbmcsIGFnZW50OiBzdHJpbmcpIHtcblxuICAgIGxldCBvcHRpb25zID0gdXJsLnBhcnNlKGxpbmspO1xuICAgIG9wdGlvbnMubWV0aG9kID0gXCJHRVRcIjtcbiAgICBvcHRpb25zLmFnZW50ID0gYWdlbnQ7XG5cbiAgICAvL2NvbnNvbGUubG9nKFwib3B0aW9uczogXCIsIG9wdGlvbnMpO1xuXG4gICAgbGV0IGNvbnRlbnQgPSBhd2FpdCBIdHRwLmZldGNoQ29udGVudChvcHRpb25zKTtcbiAgICByZXR1cm4gY29udGVudC50b1N0cmluZygpO1xuXG5cbn1cblxuYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZVdpdGhBZ2VudChsaW5rOiBzdHJpbmcsIGFnZW50OiBzdHJpbmcpIHtcblxuICAgIGxldCBvcHRpb25zID0gdXJsLnBhcnNlKGxpbmspO1xuICAgIG9wdGlvbnMubWV0aG9kID0gXCJHRVRcIjtcbiAgICBvcHRpb25zLmFnZW50ID0gYWdlbnQ7XG5cbiAgICAvL2NvbnNvbGUubG9nKFwib3B0aW9uczogXCIsIG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIGF3YWl0IEh0dHAuZXhlY3V0ZShvcHRpb25zKTtcblxufVxuIl19