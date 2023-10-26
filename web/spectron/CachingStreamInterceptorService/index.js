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
const chai_1 = require("chai");
const ProxyServerConfig_1 = require("../../js/backend/proxyserver/ProxyServerConfig");
const CacheRegistry_1 = require("../../js/backend/proxyserver/CacheRegistry");
const SpectronMain2_1 = require("../../js/test/SpectronMain2");
const WebContentsPromises_1 = require("../../js/electron/framework/WebContentsPromises");
const FilePaths_1 = require("../../js/util/FilePaths");
const CachingStreamInterceptorService_1 = require("../../js/backend/interceptor/CachingStreamInterceptorService");
const electron_1 = require("electron");
const wait_for_expect_1 = __importDefault(require("wait-for-expect"));
const SpectronBrowserWindowOptions_1 = require("../../js/test/SpectronBrowserWindowOptions");
function defaultWindowFactory() {
    return __awaiter(this, void 0, void 0, function* () {
        const options = SpectronBrowserWindowOptions_1.SpectronBrowserWindowOptions.create();
        options.webPreferences.partition = "persist:test";
        const mainWindow = new electron_1.BrowserWindow(options);
        mainWindow.loadURL('about:blank');
        return mainWindow;
    });
}
SpectronMain2_1.SpectronMain2.create({ windowFactory: defaultWindowFactory }).run((state) => __awaiter(this, void 0, void 0, function* () {
    const proxyServerConfig = new ProxyServerConfig_1.ProxyServerConfig(1234);
    const cacheRegistry = new CacheRegistry_1.CacheRegistry(proxyServerConfig);
    const sess = electron_1.session.fromPartition('persist:test');
    const service = new CachingStreamInterceptorService_1.CachingStreamInterceptorService(cacheRegistry, sess.protocol);
    yield service.start();
    const path = FilePaths_1.FilePaths.createTempName("cache-interceptor-service.phz");
    yield cacheRegistry.registerFile(path);
    console.log("Interceptor service started...");
    const url = "https://journal.artfuldev.com/unit-testing-node-applications-with-typescript-using-mocha-and-chai-384ef05f32b2";
    const didFinishLoadPromise = WebContentsPromises_1.WebContentsPromises.once(state.window.webContents).didFinishLoad();
    state.window.loadURL(url);
    yield didFinishLoadPromise;
    yield wait_for_expect_1.default(() => {
        chai_1.assert.equal(service.cacheStats.hits, 15, "Invalid number of hits");
    });
    yield state.testResultWriter.write(true);
    console.log("Wrote results to test writer!");
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQTRCO0FBQzVCLHNGQUFpRjtBQUNqRiw4RUFBeUU7QUFDekUsK0RBQTBEO0FBQzFELHlGQUFvRjtBQUNwRix1REFBa0Q7QUFDbEQsa0hBQTZHO0FBQzdHLHVDQUEwRDtBQUMxRCxzRUFBNEM7QUFDNUMsNkZBQXdGO0FBRXhGLFNBQWUsb0JBQW9COztRQUMvQixNQUFNLE9BQU8sR0FBRywyREFBNEIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUV0RCxPQUFPLENBQUMsY0FBZSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUM7UUFFbkQsTUFBTSxVQUFVLEdBQUcsSUFBSSx3QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLFVBQVUsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbEMsT0FBTyxVQUFVLENBQUM7SUFFdEIsQ0FBQztDQUFBO0FBRUQsNkJBQWEsQ0FBQyxNQUFNLENBQUMsRUFBQyxhQUFhLEVBQUUsb0JBQW9CLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFNLEtBQUssRUFBQyxFQUFFO0lBRTFFLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxxQ0FBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUV0RCxNQUFNLGFBQWEsR0FBRyxJQUFJLDZCQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUUzRCxNQUFNLElBQUksR0FBRyxrQkFBTyxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQU1uRCxNQUFNLE9BQU8sR0FBRyxJQUFJLGlFQUErQixDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFbEYsTUFBTSxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFJdEIsTUFBTSxJQUFJLEdBQUcscUJBQVMsQ0FBQyxjQUFjLENBQUMsK0JBQStCLENBQUMsQ0FBQztJQUV2RSxNQUFNLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBRzlDLE1BQU0sR0FBRyxHQUFHLGdIQUFnSCxDQUFDO0lBRTdILE1BQU0sb0JBQW9CLEdBQUcseUNBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7SUFFaEcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFMUIsTUFBTSxvQkFBb0IsQ0FBQztJQUUzQixNQUFNLHlCQUFhLENBQUMsR0FBRyxFQUFFO1FBQ3JCLGFBQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLHdCQUF3QixDQUFDLENBQUM7SUFDeEUsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFekMsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0FBRWpELENBQUMsQ0FBQSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQge1Byb3h5U2VydmVyQ29uZmlnfSBmcm9tICcuLi8uLi9qcy9iYWNrZW5kL3Byb3h5c2VydmVyL1Byb3h5U2VydmVyQ29uZmlnJztcbmltcG9ydCB7Q2FjaGVSZWdpc3RyeX0gZnJvbSAnLi4vLi4vanMvYmFja2VuZC9wcm94eXNlcnZlci9DYWNoZVJlZ2lzdHJ5JztcbmltcG9ydCB7U3BlY3Ryb25NYWluMn0gZnJvbSAnLi4vLi4vanMvdGVzdC9TcGVjdHJvbk1haW4yJztcbmltcG9ydCB7V2ViQ29udGVudHNQcm9taXNlc30gZnJvbSAnLi4vLi4vanMvZWxlY3Ryb24vZnJhbWV3b3JrL1dlYkNvbnRlbnRzUHJvbWlzZXMnO1xuaW1wb3J0IHtGaWxlUGF0aHN9IGZyb20gJy4uLy4uL2pzL3V0aWwvRmlsZVBhdGhzJztcbmltcG9ydCB7Q2FjaGluZ1N0cmVhbUludGVyY2VwdG9yU2VydmljZX0gZnJvbSAnLi4vLi4vanMvYmFja2VuZC9pbnRlcmNlcHRvci9DYWNoaW5nU3RyZWFtSW50ZXJjZXB0b3JTZXJ2aWNlJztcbmltcG9ydCB7QnJvd3NlcldpbmRvdywgc2Vzc2lvbiwgcHJvdG9jb2x9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCB3YWl0Rm9yRXhwZWN0IGZyb20gJ3dhaXQtZm9yLWV4cGVjdCc7XG5pbXBvcnQge1NwZWN0cm9uQnJvd3NlcldpbmRvd09wdGlvbnN9IGZyb20gJy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb25Ccm93c2VyV2luZG93T3B0aW9ucyc7XG5cbmFzeW5jIGZ1bmN0aW9uIGRlZmF1bHRXaW5kb3dGYWN0b3J5KCk6IFByb21pc2U8QnJvd3NlcldpbmRvdz4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBTcGVjdHJvbkJyb3dzZXJXaW5kb3dPcHRpb25zLmNyZWF0ZSgpO1xuXG4gICAgb3B0aW9ucy53ZWJQcmVmZXJlbmNlcyEucGFydGl0aW9uID0gXCJwZXJzaXN0OnRlc3RcIjtcblxuICAgIGNvbnN0IG1haW5XaW5kb3cgPSBuZXcgQnJvd3NlcldpbmRvdyhvcHRpb25zKTtcbiAgICBtYWluV2luZG93LmxvYWRVUkwoJ2Fib3V0OmJsYW5rJyk7XG4gICAgcmV0dXJuIG1haW5XaW5kb3c7XG5cbn1cblxuU3BlY3Ryb25NYWluMi5jcmVhdGUoe3dpbmRvd0ZhY3Rvcnk6IGRlZmF1bHRXaW5kb3dGYWN0b3J5fSkucnVuKGFzeW5jIHN0YXRlID0+IHtcbiAgICAvL1xuICAgIGNvbnN0IHByb3h5U2VydmVyQ29uZmlnID0gbmV3IFByb3h5U2VydmVyQ29uZmlnKDEyMzQpO1xuXG4gICAgY29uc3QgY2FjaGVSZWdpc3RyeSA9IG5ldyBDYWNoZVJlZ2lzdHJ5KHByb3h5U2VydmVyQ29uZmlnKTtcblxuICAgIGNvbnN0IHNlc3MgPSBzZXNzaW9uLmZyb21QYXJ0aXRpb24oJ3BlcnNpc3Q6dGVzdCcpO1xuXG4gICAgLy8gY29uc3Qgc2VydmljZSA9IG5ldyBDYWNoaW5nU3RyZWFtSW50ZXJjZXB0b3JTZXJ2aWNlKGNhY2hlUmVnaXN0cnksIHN0YXRlLndpbmRvdy53ZWJDb250ZW50cy5zZXNzaW9uLnByb3RvY29sKTtcblxuICAgIC8vIG9rLi4gaXQgbG9va3MgbGlrZSB0aGUgcHJvdG9jb2wgZm9yIHRoZSBzZXNzaW9ucyBpcyBzaGFyZWQgYmV0d2VlbiB0aGVtLlxuXG4gICAgY29uc3Qgc2VydmljZSA9IG5ldyBDYWNoaW5nU3RyZWFtSW50ZXJjZXB0b3JTZXJ2aWNlKGNhY2hlUmVnaXN0cnksIHNlc3MucHJvdG9jb2wpO1xuXG4gICAgYXdhaXQgc2VydmljZS5zdGFydCgpO1xuICAgIC8vXG4gICAgLy8gLy8gYWRkIG91ciBwaHogZmlsZSB0byB0aGUgY2FjaGUgcmVnaXN0cnkuLi5cblxuICAgIGNvbnN0IHBhdGggPSBGaWxlUGF0aHMuY3JlYXRlVGVtcE5hbWUoXCJjYWNoZS1pbnRlcmNlcHRvci1zZXJ2aWNlLnBoelwiKTtcblxuICAgIGF3YWl0IGNhY2hlUmVnaXN0cnkucmVnaXN0ZXJGaWxlKHBhdGgpO1xuXG4gICAgY29uc29sZS5sb2coXCJJbnRlcmNlcHRvciBzZXJ2aWNlIHN0YXJ0ZWQuLi5cIik7XG5cbiAgICAvLyBub2luc3BlY3Rpb24gVHNMaW50XG4gICAgY29uc3QgdXJsID0gXCJodHRwczovL2pvdXJuYWwuYXJ0ZnVsZGV2LmNvbS91bml0LXRlc3Rpbmctbm9kZS1hcHBsaWNhdGlvbnMtd2l0aC10eXBlc2NyaXB0LXVzaW5nLW1vY2hhLWFuZC1jaGFpLTM4NGVmMDVmMzJiMlwiO1xuXG4gICAgY29uc3QgZGlkRmluaXNoTG9hZFByb21pc2UgPSBXZWJDb250ZW50c1Byb21pc2VzLm9uY2Uoc3RhdGUud2luZG93LndlYkNvbnRlbnRzKS5kaWRGaW5pc2hMb2FkKCk7XG5cbiAgICBzdGF0ZS53aW5kb3cubG9hZFVSTCh1cmwpO1xuXG4gICAgYXdhaXQgZGlkRmluaXNoTG9hZFByb21pc2U7XG5cbiAgICBhd2FpdCB3YWl0Rm9yRXhwZWN0KCgpID0+IHtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKHNlcnZpY2UuY2FjaGVTdGF0cy5oaXRzLCAxNSwgXCJJbnZhbGlkIG51bWJlciBvZiBoaXRzXCIpO1xuICAgIH0pO1xuXG4gICAgYXdhaXQgc3RhdGUudGVzdFJlc3VsdFdyaXRlci53cml0ZSh0cnVlKTtcblxuICAgIGNvbnNvbGUubG9nKFwiV3JvdGUgcmVzdWx0cyB0byB0ZXN0IHdyaXRlciFcIik7XG5cbn0pO1xuXG4iXX0=