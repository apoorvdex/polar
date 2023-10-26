"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ElectronRendererPipe_1 = require("../pipes/ElectronRendererPipe");
const ElectronIPCPipe_1 = require("./ElectronIPCPipe");
const IPCRegistry_1 = require("./IPCRegistry");
const IPCEngine_1 = require("./IPCEngine");
const ElectronMainReadablePipe_1 = require("../pipes/ElectronMainReadablePipe");
class IPCEngines {
    static rendererProcess() {
        let electronPipe = new ElectronRendererPipe_1.ElectronRendererPipe();
        let ipcPipe = new ElectronIPCPipe_1.ElectronIPCPipe(electronPipe);
        let ipcRegistry = new IPCRegistry_1.IPCRegistry();
        return new IPCEngine_1.IPCEngine(ipcPipe, ipcRegistry);
    }
    static mainProcess() {
        let electronPipe = new ElectronMainReadablePipe_1.ElectronMainReadablePipe();
        let ipcPipe = new ElectronIPCPipe_1.ElectronIPCPipe(electronPipe);
        let ipcRegistry = new IPCRegistry_1.IPCRegistry();
        return new IPCEngine_1.IPCEngine(ipcPipe, ipcRegistry);
    }
}
exports.IPCEngines = IPCEngines;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSVBDRW5naW5lcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIklQQ0VuZ2luZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3RUFBbUU7QUFDbkUsdURBQWtEO0FBQ2xELCtDQUEwQztBQUMxQywyQ0FBc0M7QUFDdEMsZ0ZBQTJFO0FBRTNFLE1BQWEsVUFBVTtJQUVaLE1BQU0sQ0FBQyxlQUFlO1FBRXpCLElBQUksWUFBWSxHQUFHLElBQUksMkNBQW9CLEVBQUUsQ0FBQztRQUM5QyxJQUFJLE9BQU8sR0FBRyxJQUFJLGlDQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFaEQsSUFBSSxXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7UUFFcEMsT0FBTyxJQUFJLHFCQUFTLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBRS9DLENBQUM7SUFFTSxNQUFNLENBQUMsV0FBVztRQUVyQixJQUFJLFlBQVksR0FBRyxJQUFJLG1EQUF3QixFQUFFLENBQUM7UUFDbEQsSUFBSSxPQUFPLEdBQUcsSUFBSSxpQ0FBZSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRWhELElBQUksV0FBVyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO1FBRXBDLE9BQU8sSUFBSSxxQkFBUyxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztJQUUvQyxDQUFDO0NBRUo7QUF4QkQsZ0NBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFbGVjdHJvblJlbmRlcmVyUGlwZX0gZnJvbSAnLi4vcGlwZXMvRWxlY3Ryb25SZW5kZXJlclBpcGUnO1xuaW1wb3J0IHtFbGVjdHJvbklQQ1BpcGV9IGZyb20gJy4vRWxlY3Ryb25JUENQaXBlJztcbmltcG9ydCB7SVBDUmVnaXN0cnl9IGZyb20gJy4vSVBDUmVnaXN0cnknO1xuaW1wb3J0IHtJUENFbmdpbmV9IGZyb20gJy4vSVBDRW5naW5lJztcbmltcG9ydCB7RWxlY3Ryb25NYWluUmVhZGFibGVQaXBlfSBmcm9tICcuLi9waXBlcy9FbGVjdHJvbk1haW5SZWFkYWJsZVBpcGUnO1xuXG5leHBvcnQgY2xhc3MgSVBDRW5naW5lcyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlbmRlcmVyUHJvY2VzcygpIHtcblxuICAgICAgICBsZXQgZWxlY3Ryb25QaXBlID0gbmV3IEVsZWN0cm9uUmVuZGVyZXJQaXBlKCk7XG4gICAgICAgIGxldCBpcGNQaXBlID0gbmV3IEVsZWN0cm9uSVBDUGlwZShlbGVjdHJvblBpcGUpO1xuXG4gICAgICAgIGxldCBpcGNSZWdpc3RyeSA9IG5ldyBJUENSZWdpc3RyeSgpO1xuXG4gICAgICAgIHJldHVybiBuZXcgSVBDRW5naW5lKGlwY1BpcGUsIGlwY1JlZ2lzdHJ5KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgbWFpblByb2Nlc3MoKSB7XG5cbiAgICAgICAgbGV0IGVsZWN0cm9uUGlwZSA9IG5ldyBFbGVjdHJvbk1haW5SZWFkYWJsZVBpcGUoKTtcbiAgICAgICAgbGV0IGlwY1BpcGUgPSBuZXcgRWxlY3Ryb25JUENQaXBlKGVsZWN0cm9uUGlwZSk7XG5cbiAgICAgICAgbGV0IGlwY1JlZ2lzdHJ5ID0gbmV3IElQQ1JlZ2lzdHJ5KCk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBJUENFbmdpbmUoaXBjUGlwZSwgaXBjUmVnaXN0cnkpO1xuXG4gICAgfVxuXG59XG4iXX0=