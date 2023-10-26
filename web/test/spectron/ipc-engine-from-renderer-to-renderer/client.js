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
const IPCClients_1 = require("../../../js/ipc/handler/IPCClients");
const BrowserWindowReference_1 = require("../../../js/ui/dialog_window/BrowserWindowReference");
SpectronRenderer_1.SpectronRenderer.run((state) => __awaiter(this, void 0, void 0, function* () {
    yield new PingService_1.PingService(IPCEngines_1.IPCEngines.rendererProcess()).start();
    electron_1.ipcRenderer.on('/client', (event, message) => {
    });
    electron_1.ipcRenderer.on('/ipc-trace', (event, message) => {
        console.log("Got IPC trace in client: ", message);
    });
    electron_1.ipcRenderer.on('/start-ipc', (event, message) => __awaiter(this, void 0, void 0, function* () {
        console.log("Start IPC Sender: ", event.sender.id);
        console.log("Got start IPC message.  Going to call IPC execute.");
        console.log("Sending test...");
        electron_1.ipcRenderer.sendTo(1, '/test', 'hello');
        console.log("Sending test...done");
        let target_window = message.target_window;
        console.log("Using target window: " + target_window);
        let ipcClient = IPCClients_1.IPCClients.fromRendererToRenderer(new BrowserWindowReference_1.BrowserWindowReference(message.target_window));
        console.log("Executing ping...");
        yield ipcClient.execute('/ping', 'hello');
        console.log("Executing ping...done");
        state.testResultWriter.write(true);
    }));
    yield SyncPipes_1.SyncPipes.fromRendererToMain('client').sync();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1Q0FBc0Q7QUFDdEQsd0VBQW1FO0FBQ25FLDBFQUFxRTtBQUNyRSxtRUFBOEQ7QUFDOUQsK0RBQTBEO0FBQzFELG1FQUE4RDtBQUM5RCxnR0FBMkY7QUFFM0YsbUNBQWdCLENBQUMsR0FBRyxDQUFDLENBQU8sS0FBSyxFQUFFLEVBQUU7SUFFakMsTUFBTSxJQUFJLHlCQUFXLENBQUMsdUJBQVUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRTVELHNCQUFXLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQXFCLEVBQUUsT0FBWSxFQUFFLEVBQUU7SUFDbEUsQ0FBQyxDQUFDLENBQUM7SUFFSCxzQkFBVyxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFxQixFQUFFLE9BQVksRUFBRSxFQUFFO1FBQ2pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxzQkFBVyxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBTyxLQUFxQixFQUFFLE9BQVksRUFBRSxFQUFFO1FBRXZFLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVuRCxPQUFPLENBQUMsR0FBRyxDQUFDLG9EQUFvRCxDQUFDLENBQUM7UUFFbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRS9CLHNCQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRW5DLElBQUksYUFBYSxHQUFXLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFFbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsR0FBRyxhQUFhLENBQUMsQ0FBQztRQUVyRCxJQUFJLFNBQVMsR0FBRyx1QkFBVSxDQUFDLHNCQUFzQixDQUFDLElBQUksK0NBQXNCLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFFckcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBRWpDLE1BQU0sU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBRXJDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFdkMsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILE1BQU0scUJBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtBQUV2RCxDQUFDLENBQUEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpcGNNYWluLCBpcGNSZW5kZXJlciwgcmVtb3RlfSBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQge1NwZWN0cm9uUmVuZGVyZXJ9IGZyb20gJy4uLy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb25SZW5kZXJlcic7XG5pbXBvcnQge1BpbmdTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9qcy9pcGMvaGFuZGxlci9waW5nL1BpbmdTZXJ2aWNlJztcbmltcG9ydCB7SVBDRW5naW5lc30gZnJvbSAnLi4vLi4vLi4vanMvaXBjL2hhbmRsZXIvSVBDRW5naW5lcyc7XG5pbXBvcnQge1N5bmNQaXBlc30gZnJvbSAnLi4vLi4vLi4vanMvaXBjL3BpcGVzL1N5bmNQaXBlcyc7XG5pbXBvcnQge0lQQ0NsaWVudHN9IGZyb20gJy4uLy4uLy4uL2pzL2lwYy9oYW5kbGVyL0lQQ0NsaWVudHMnO1xuaW1wb3J0IHtCcm93c2VyV2luZG93UmVmZXJlbmNlfSBmcm9tICcuLi8uLi8uLi9qcy91aS9kaWFsb2dfd2luZG93L0Jyb3dzZXJXaW5kb3dSZWZlcmVuY2UnO1xuXG5TcGVjdHJvblJlbmRlcmVyLnJ1bihhc3luYyAoc3RhdGUpID0+IHtcblxuICAgIGF3YWl0IG5ldyBQaW5nU2VydmljZShJUENFbmdpbmVzLnJlbmRlcmVyUHJvY2VzcygpKS5zdGFydCgpO1xuXG4gICAgaXBjUmVuZGVyZXIub24oJy9jbGllbnQnLCAoZXZlbnQ6IEVsZWN0cm9uLkV2ZW50LCBtZXNzYWdlOiBhbnkpID0+IHtcbiAgICB9KTtcblxuICAgIGlwY1JlbmRlcmVyLm9uKCcvaXBjLXRyYWNlJywgKGV2ZW50OiBFbGVjdHJvbi5FdmVudCwgbWVzc2FnZTogYW55KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiR290IElQQyB0cmFjZSBpbiBjbGllbnQ6IFwiLCBtZXNzYWdlKTtcbiAgICB9KTtcblxuICAgIGlwY1JlbmRlcmVyLm9uKCcvc3RhcnQtaXBjJywgYXN5bmMgKGV2ZW50OiBFbGVjdHJvbi5FdmVudCwgbWVzc2FnZTogYW55KSA9PiB7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJTdGFydCBJUEMgU2VuZGVyOiBcIiwgZXZlbnQuc2VuZGVyLmlkKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIkdvdCBzdGFydCBJUEMgbWVzc2FnZS4gIEdvaW5nIHRvIGNhbGwgSVBDIGV4ZWN1dGUuXCIpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VuZGluZyB0ZXN0Li4uXCIpO1xuXG4gICAgICAgIGlwY1JlbmRlcmVyLnNlbmRUbygxLCAnL3Rlc3QnLCAnaGVsbG8nKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIlNlbmRpbmcgdGVzdC4uLmRvbmVcIik7XG5cbiAgICAgICAgbGV0IHRhcmdldF93aW5kb3c6IG51bWJlciA9IG1lc3NhZ2UudGFyZ2V0X3dpbmRvdztcblxuICAgICAgICBjb25zb2xlLmxvZyhcIlVzaW5nIHRhcmdldCB3aW5kb3c6IFwiICsgdGFyZ2V0X3dpbmRvdyk7XG5cbiAgICAgICAgbGV0IGlwY0NsaWVudCA9IElQQ0NsaWVudHMuZnJvbVJlbmRlcmVyVG9SZW5kZXJlcihuZXcgQnJvd3NlcldpbmRvd1JlZmVyZW5jZShtZXNzYWdlLnRhcmdldF93aW5kb3cpKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIkV4ZWN1dGluZyBwaW5nLi4uXCIpO1xuXG4gICAgICAgIGF3YWl0IGlwY0NsaWVudC5leGVjdXRlKCcvcGluZycsICdoZWxsbycpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXhlY3V0aW5nIHBpbmcuLi5kb25lXCIpO1xuXG4gICAgICAgIHN0YXRlLnRlc3RSZXN1bHRXcml0ZXIud3JpdGUodHJ1ZSk7XG5cbiAgICB9KTtcblxuICAgIGF3YWl0IFN5bmNQaXBlcy5mcm9tUmVuZGVyZXJUb01haW4oJ2NsaWVudCcpLnN5bmMoKVxuXG59KTtcbiJdfQ==