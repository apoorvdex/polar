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
const SpectronRenderer_1 = require("../../../js/test/SpectronRenderer");
const PingService_1 = require("../../../js/ipc/handler/ping/PingService");
const IPCEngines_1 = require("../../../js/ipc/handler/IPCEngines");
const SyncPipes_1 = require("../../../js/ipc/pipes/SyncPipes");
SpectronRenderer_1.SpectronRenderer.run(() => __awaiter(this, void 0, void 0, function* () {
    electron_1.ipcRenderer.on('/service', (event, message) => {
    });
    electron_1.ipcRenderer.on('/ipc-trace', (event, message) => {
        console.log("IPC Trace Sender: ", event.sender.id);
        console.log("Got IPC trace in service: ", message);
    });
    electron_1.ipcRenderer.on('/test', (event, message) => {
        console.log("Got test!");
    });
    electron_1.ipcRenderer.on('/ping', (event, message) => {
        console.log("Got ping in service window");
    });
    yield new PingService_1.PingService(IPCEngines_1.IPCEngines.rendererProcess()).start();
    yield SyncPipes_1.SyncPipes.fromRendererToMain('service').sync();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVDQUFxQztBQUNyQyx3RUFBbUU7QUFDbkUsMEVBQXFFO0FBQ3JFLG1FQUE4RDtBQUM5RCwrREFBMEQ7QUFFMUQsbUNBQWdCLENBQUMsR0FBRyxDQUFDLEdBQVMsRUFBRTtJQUU1QixzQkFBVyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxLQUFxQixFQUFFLE9BQVksRUFBRSxFQUFFO0lBQ25FLENBQUMsQ0FBQyxDQUFDO0lBRUgsc0JBQVcsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUMsS0FBcUIsRUFBRSxPQUFZLEVBQUUsRUFBRTtRQUNqRSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN2RCxDQUFDLENBQUMsQ0FBQztJQUVILHNCQUFXLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQXFCLEVBQUUsT0FBWSxFQUFFLEVBQUU7UUFDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUM1QixDQUFDLENBQUMsQ0FBQztJQUVILHNCQUFXLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQXFCLEVBQUUsT0FBWSxFQUFFLEVBQUU7UUFDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFBO0lBQzdDLENBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxJQUFJLHlCQUFXLENBQUMsdUJBQVUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRTVELE1BQU0scUJBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtBQUV4RCxDQUFDLENBQUEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpcGNSZW5kZXJlcn0gZnJvbSAnZWxlY3Ryb24nO1xuaW1wb3J0IHtTcGVjdHJvblJlbmRlcmVyfSBmcm9tICcuLi8uLi8uLi9qcy90ZXN0L1NwZWN0cm9uUmVuZGVyZXInO1xuaW1wb3J0IHtQaW5nU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vanMvaXBjL2hhbmRsZXIvcGluZy9QaW5nU2VydmljZSc7XG5pbXBvcnQge0lQQ0VuZ2luZXN9IGZyb20gJy4uLy4uLy4uL2pzL2lwYy9oYW5kbGVyL0lQQ0VuZ2luZXMnO1xuaW1wb3J0IHtTeW5jUGlwZXN9IGZyb20gJy4uLy4uLy4uL2pzL2lwYy9waXBlcy9TeW5jUGlwZXMnO1xuXG5TcGVjdHJvblJlbmRlcmVyLnJ1bihhc3luYyAoKSA9PiB7XG5cbiAgICBpcGNSZW5kZXJlci5vbignL3NlcnZpY2UnLCAoZXZlbnQ6IEVsZWN0cm9uLkV2ZW50LCBtZXNzYWdlOiBhbnkpID0+IHtcbiAgICB9KTtcblxuICAgIGlwY1JlbmRlcmVyLm9uKCcvaXBjLXRyYWNlJywgKGV2ZW50OiBFbGVjdHJvbi5FdmVudCwgbWVzc2FnZTogYW55KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSVBDIFRyYWNlIFNlbmRlcjogXCIsIGV2ZW50LnNlbmRlci5pZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiR290IElQQyB0cmFjZSBpbiBzZXJ2aWNlOiBcIiwgbWVzc2FnZSk7XG4gICAgfSk7XG5cbiAgICBpcGNSZW5kZXJlci5vbignL3Rlc3QnLCAoZXZlbnQ6IEVsZWN0cm9uLkV2ZW50LCBtZXNzYWdlOiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJHb3QgdGVzdCFcIilcbiAgICB9KTtcblxuICAgIGlwY1JlbmRlcmVyLm9uKCcvcGluZycsIChldmVudDogRWxlY3Ryb24uRXZlbnQsIG1lc3NhZ2U6IGFueSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkdvdCBwaW5nIGluIHNlcnZpY2Ugd2luZG93XCIpXG4gICAgfSk7XG5cbiAgICBhd2FpdCBuZXcgUGluZ1NlcnZpY2UoSVBDRW5naW5lcy5yZW5kZXJlclByb2Nlc3MoKSkuc3RhcnQoKTtcblxuICAgIGF3YWl0IFN5bmNQaXBlcy5mcm9tUmVuZGVyZXJUb01haW4oJ3NlcnZpY2UnKS5zeW5jKClcblxufSk7XG4iXX0=