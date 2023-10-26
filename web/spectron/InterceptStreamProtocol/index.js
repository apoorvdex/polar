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
const SpectronMain2_1 = require("../../js/test/SpectronMain2");
const WebContentsPromises_1 = require("../../js/electron/framework/WebContentsPromises");
const Protocols_1 = require("../../js/backend/interceptor/Protocols");
const StreamInterceptors_1 = require("../../js/backend/interceptor/StreamInterceptors");
const electron_1 = require("electron");
SpectronMain2_1.SpectronMain2.create().run((state) => __awaiter(this, void 0, void 0, function* () {
    for (const scheme of ['http', 'https']) {
        yield Protocols_1.Protocols.interceptStreamProtocol(electron_1.protocol, scheme, (request, callback) => {
            StreamInterceptors_1.StreamInterceptors.withSetTimeout(() => {
                StreamInterceptors_1.StreamInterceptors.handleWithNetRequest(request, callback);
            });
        });
    }
    const url = "http://www.example.com";
    const didFinishLoadPromise = WebContentsPromises_1.WebContentsPromises.once(state.window.webContents).didFinishLoad();
    state.window.loadURL(url);
    yield didFinishLoadPromise;
    yield state.testResultWriter.write(true);
    console.log("Wrote results to test writer!");
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBQzFELHlGQUFvRjtBQUNwRixzRUFBaUU7QUFDakUsd0ZBQW1GO0FBQ25GLHVDQUFrQztBQUVsQyw2QkFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFNLEtBQUssRUFBQyxFQUFFO0lBRXJDLEtBQUssTUFBTSxNQUFNLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEVBQUU7UUFFcEMsTUFBTSxxQkFBUyxDQUFDLHVCQUF1QixDQUFDLG1CQUFRLEVBQUUsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFO1lBRTVFLHVDQUFrQixDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUU7Z0JBQ25DLHVDQUFrQixDQUFDLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztZQUMvRCxDQUFDLENBQUMsQ0FBQztRQUVQLENBQUMsQ0FBQyxDQUFDO0tBRU47SUFFRCxNQUFNLEdBQUcsR0FBRyx3QkFBd0IsQ0FBQztJQUVyQyxNQUFNLG9CQUFvQixHQUFHLHlDQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBRWhHLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRTFCLE1BQU0sb0JBQW9CLENBQUM7SUFFM0IsTUFBTSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXpDLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztBQUVqRCxDQUFDLENBQUEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTcGVjdHJvbk1haW4yfSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uTWFpbjInO1xuaW1wb3J0IHtXZWJDb250ZW50c1Byb21pc2VzfSBmcm9tICcuLi8uLi9qcy9lbGVjdHJvbi9mcmFtZXdvcmsvV2ViQ29udGVudHNQcm9taXNlcyc7XG5pbXBvcnQge1Byb3RvY29sc30gZnJvbSAnLi4vLi4vanMvYmFja2VuZC9pbnRlcmNlcHRvci9Qcm90b2NvbHMnO1xuaW1wb3J0IHtTdHJlYW1JbnRlcmNlcHRvcnN9IGZyb20gJy4uLy4uL2pzL2JhY2tlbmQvaW50ZXJjZXB0b3IvU3RyZWFtSW50ZXJjZXB0b3JzJztcbmltcG9ydCB7cHJvdG9jb2x9IGZyb20gJ2VsZWN0cm9uJztcblxuU3BlY3Ryb25NYWluMi5jcmVhdGUoKS5ydW4oYXN5bmMgc3RhdGUgPT4ge1xuXG4gICAgZm9yIChjb25zdCBzY2hlbWUgb2YgWydodHRwJywgJ2h0dHBzJ10pIHtcblxuICAgICAgICBhd2FpdCBQcm90b2NvbHMuaW50ZXJjZXB0U3RyZWFtUHJvdG9jb2wocHJvdG9jb2wsIHNjaGVtZSwgKHJlcXVlc3QsIGNhbGxiYWNrKSA9PiB7XG5cbiAgICAgICAgICAgIFN0cmVhbUludGVyY2VwdG9ycy53aXRoU2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgU3RyZWFtSW50ZXJjZXB0b3JzLmhhbmRsZVdpdGhOZXRSZXF1ZXN0KHJlcXVlc3QsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgY29uc3QgdXJsID0gXCJodHRwOi8vd3d3LmV4YW1wbGUuY29tXCI7XG5cbiAgICBjb25zdCBkaWRGaW5pc2hMb2FkUHJvbWlzZSA9IFdlYkNvbnRlbnRzUHJvbWlzZXMub25jZShzdGF0ZS53aW5kb3cud2ViQ29udGVudHMpLmRpZEZpbmlzaExvYWQoKTtcblxuICAgIHN0YXRlLndpbmRvdy5sb2FkVVJMKHVybCk7XG5cbiAgICBhd2FpdCBkaWRGaW5pc2hMb2FkUHJvbWlzZTtcblxuICAgIGF3YWl0IHN0YXRlLnRlc3RSZXN1bHRXcml0ZXIud3JpdGUodHJ1ZSk7XG5cbiAgICBjb25zb2xlLmxvZyhcIldyb3RlIHJlc3VsdHMgdG8gdGVzdCB3cml0ZXIhXCIpO1xuXG59KTtcbiJdfQ==