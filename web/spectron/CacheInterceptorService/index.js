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
const ProxyServerConfig_1 = require("../../js/backend/proxyserver/ProxyServerConfig");
const CacheRegistry_1 = require("../../js/backend/proxyserver/CacheRegistry");
const CacheInterceptorService_1 = require("../../js/backend/interceptor/CacheInterceptorService");
const SpectronMain2_1 = require("../../js/test/SpectronMain2");
const WebContentsPromises_1 = require("../../js/electron/framework/WebContentsPromises");
const FilePaths_1 = require("../../js/util/FilePaths");
SpectronMain2_1.SpectronMain2.create().run((state) => __awaiter(this, void 0, void 0, function* () {
    const proxyServerConfig = new ProxyServerConfig_1.ProxyServerConfig(1234);
    const cacheRegistry = new CacheRegistry_1.CacheRegistry(proxyServerConfig);
    const cacheInterceptorService = new CacheInterceptorService_1.CacheInterceptorService(cacheRegistry);
    yield cacheInterceptorService.start();
    const path = FilePaths_1.FilePaths.createTempName("cache-interceptor-service.phz");
    yield cacheRegistry.registerFile(path);
    console.log("Interceptor service started...");
    const url = "https://journal.artfuldev.com/unit-testing-node-applications-with-typescript-using-mocha-and-chai-384ef05f32b2";
    const didFinishLoadPromise = WebContentsPromises_1.WebContentsPromises.once(state.window.webContents).didFinishLoad();
    state.window.loadURL(url);
    yield didFinishLoadPromise;
    yield state.testResultWriter.write(true);
    console.log("Wrote results to test writer!");
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0ZBQWlGO0FBQ2pGLDhFQUF5RTtBQUN6RSxrR0FBNkY7QUFDN0YsK0RBQTBEO0FBQzFELHlGQUFvRjtBQUNwRix1REFBa0Q7QUFFbEQsNkJBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBTSxLQUFLLEVBQUMsRUFBRTtJQUVyQyxNQUFNLGlCQUFpQixHQUFHLElBQUkscUNBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFdEQsTUFBTSxhQUFhLEdBQUcsSUFBSSw2QkFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFFM0QsTUFBTSx1QkFBdUIsR0FBRyxJQUFJLGlEQUF1QixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBRTNFLE1BQU0sdUJBQXVCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFJdEMsTUFBTSxJQUFJLEdBQUcscUJBQVMsQ0FBQyxjQUFjLENBQUMsK0JBQStCLENBQUMsQ0FBQztJQUV2RSxNQUFNLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBRzlDLE1BQU0sR0FBRyxHQUFHLGdIQUFnSCxDQUFDO0lBRTdILE1BQU0sb0JBQW9CLEdBQUcseUNBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7SUFFaEcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFMUIsTUFBTSxvQkFBb0IsQ0FBQztJQUUzQixNQUFNLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFekMsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0FBRWpELENBQUMsQ0FBQSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1Byb3h5U2VydmVyQ29uZmlnfSBmcm9tICcuLi8uLi9qcy9iYWNrZW5kL3Byb3h5c2VydmVyL1Byb3h5U2VydmVyQ29uZmlnJztcbmltcG9ydCB7Q2FjaGVSZWdpc3RyeX0gZnJvbSAnLi4vLi4vanMvYmFja2VuZC9wcm94eXNlcnZlci9DYWNoZVJlZ2lzdHJ5JztcbmltcG9ydCB7Q2FjaGVJbnRlcmNlcHRvclNlcnZpY2V9IGZyb20gJy4uLy4uL2pzL2JhY2tlbmQvaW50ZXJjZXB0b3IvQ2FjaGVJbnRlcmNlcHRvclNlcnZpY2UnO1xuaW1wb3J0IHtTcGVjdHJvbk1haW4yfSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uTWFpbjInO1xuaW1wb3J0IHtXZWJDb250ZW50c1Byb21pc2VzfSBmcm9tICcuLi8uLi9qcy9lbGVjdHJvbi9mcmFtZXdvcmsvV2ViQ29udGVudHNQcm9taXNlcyc7XG5pbXBvcnQge0ZpbGVQYXRoc30gZnJvbSAnLi4vLi4vanMvdXRpbC9GaWxlUGF0aHMnO1xuXG5TcGVjdHJvbk1haW4yLmNyZWF0ZSgpLnJ1bihhc3luYyBzdGF0ZSA9PiB7XG4gICAgLy9cbiAgICBjb25zdCBwcm94eVNlcnZlckNvbmZpZyA9IG5ldyBQcm94eVNlcnZlckNvbmZpZygxMjM0KTtcblxuICAgIGNvbnN0IGNhY2hlUmVnaXN0cnkgPSBuZXcgQ2FjaGVSZWdpc3RyeShwcm94eVNlcnZlckNvbmZpZyk7XG5cbiAgICBjb25zdCBjYWNoZUludGVyY2VwdG9yU2VydmljZSA9IG5ldyBDYWNoZUludGVyY2VwdG9yU2VydmljZShjYWNoZVJlZ2lzdHJ5KTtcblxuICAgIGF3YWl0IGNhY2hlSW50ZXJjZXB0b3JTZXJ2aWNlLnN0YXJ0KCk7XG4gICAgLy9cbiAgICAvLyAvLyBhZGQgb3VyIHBoeiBmaWxlIHRvIHRoZSBjYWNoZSByZWdpc3RyeS4uLlxuXG4gICAgY29uc3QgcGF0aCA9IEZpbGVQYXRocy5jcmVhdGVUZW1wTmFtZShcImNhY2hlLWludGVyY2VwdG9yLXNlcnZpY2UucGh6XCIpO1xuXG4gICAgYXdhaXQgY2FjaGVSZWdpc3RyeS5yZWdpc3RlckZpbGUocGF0aCk7XG5cbiAgICBjb25zb2xlLmxvZyhcIkludGVyY2VwdG9yIHNlcnZpY2Ugc3RhcnRlZC4uLlwiKTtcblxuICAgIC8vIG5vaW5zcGVjdGlvbiBUc0xpbnRcbiAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vam91cm5hbC5hcnRmdWxkZXYuY29tL3VuaXQtdGVzdGluZy1ub2RlLWFwcGxpY2F0aW9ucy13aXRoLXR5cGVzY3JpcHQtdXNpbmctbW9jaGEtYW5kLWNoYWktMzg0ZWYwNWYzMmIyXCI7XG5cbiAgICBjb25zdCBkaWRGaW5pc2hMb2FkUHJvbWlzZSA9IFdlYkNvbnRlbnRzUHJvbWlzZXMub25jZShzdGF0ZS53aW5kb3cud2ViQ29udGVudHMpLmRpZEZpbmlzaExvYWQoKTtcblxuICAgIHN0YXRlLndpbmRvdy5sb2FkVVJMKHVybCk7XG5cbiAgICBhd2FpdCBkaWRGaW5pc2hMb2FkUHJvbWlzZTtcblxuICAgIGF3YWl0IHN0YXRlLnRlc3RSZXN1bHRXcml0ZXIud3JpdGUodHJ1ZSk7XG5cbiAgICBjb25zb2xlLmxvZyhcIldyb3RlIHJlc3VsdHMgdG8gdGVzdCB3cml0ZXIhXCIpO1xuXG59KTtcblxuIl19