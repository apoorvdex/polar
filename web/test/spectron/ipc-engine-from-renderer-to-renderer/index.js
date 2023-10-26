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
const SpectronMain2_1 = require("../../../js/test/SpectronMain2");
const SyncPipes_1 = require("../../../js/ipc/pipes/SyncPipes");
SpectronMain2_1.SpectronMain2.create().run((state) => __awaiter(this, void 0, void 0, function* () {
    electron_1.ipcMain.on('/main', (event, message) => {
    });
    electron_1.ipcMain.on('/ipc-trace', (event, message) => {
        console.log("IPC Trace Sender: ", event.sender.id);
        console.log("Got IPC trace in main process: ", message);
    });
    let serviceWindow = state.window;
    let clientWindow = yield state.createWindow();
    console.log("Service window ID: " + serviceWindow.id);
    console.log("Client window ID: " + clientWindow.id);
    serviceWindow.loadFile(__dirname + '/service.html');
    clientWindow.loadFile(__dirname + '/client.html');
    console.log("serviceWindow sync... ");
    yield SyncPipes_1.SyncPipes.fromMainToBrowserWindow(serviceWindow, 'service').sync();
    console.log("serviceWindow sync... done");
    console.log("clientWindow sync... ");
    yield SyncPipes_1.SyncPipes.fromMainToBrowserWindow(clientWindow, 'client').sync();
    console.log("clientWindow sync... done");
    clientWindow.webContents.send('/start-ipc', { target_window: serviceWindow.id });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUNBQXNEO0FBQ3RELGtFQUE2RDtBQUM3RCwrREFBMEQ7QUFFMUQsNkJBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBTSxLQUFLLEVBQUMsRUFBRTtJQUVyQyxrQkFBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFxQixFQUFFLE9BQVksRUFBRSxFQUFFO0lBQzVELENBQUMsQ0FBQyxDQUFDO0lBSUgsa0JBQU8sQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUMsS0FBcUIsRUFBRSxPQUFZLEVBQUUsRUFBRTtRQUM3RCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM1RCxDQUFDLENBQUMsQ0FBQztJQUdILElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDakMsSUFBSSxZQUFZLEdBQUcsTUFBTSxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFcEQsYUFBYSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDLENBQUM7SUFDcEQsWUFBWSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDLENBQUM7SUFFbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ3RDLE1BQU0scUJBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekUsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBRTFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUNyQyxNQUFNLHFCQUFTLENBQUMsdUJBQXVCLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUV6QyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUM7QUFrQm5GLENBQUMsQ0FBQSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2lwY01haW4sIGlwY1JlbmRlcmVyLCByZW1vdGV9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCB7U3BlY3Ryb25NYWluMn0gZnJvbSAnLi4vLi4vLi4vanMvdGVzdC9TcGVjdHJvbk1haW4yJztcbmltcG9ydCB7U3luY1BpcGVzfSBmcm9tICcuLi8uLi8uLi9qcy9pcGMvcGlwZXMvU3luY1BpcGVzJztcblxuU3BlY3Ryb25NYWluMi5jcmVhdGUoKS5ydW4oYXN5bmMgc3RhdGUgPT4ge1xuXG4gICAgaXBjTWFpbi5vbignL21haW4nLCAoZXZlbnQ6IEVsZWN0cm9uLkV2ZW50LCBtZXNzYWdlOiBhbnkpID0+IHtcbiAgICB9KTtcblxuICAgIC8vIGludm9rZSBhIG1ldGhvZCBvbiB0aGUgcmVuZGVyZXIgYW5kIGdldCB0aGUgcmVzcG9uc2UuLlxuXG4gICAgaXBjTWFpbi5vbignL2lwYy10cmFjZScsIChldmVudDogRWxlY3Ryb24uRXZlbnQsIG1lc3NhZ2U6IGFueSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIklQQyBUcmFjZSBTZW5kZXI6IFwiLCBldmVudC5zZW5kZXIuaWQpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR290IElQQyB0cmFjZSBpbiBtYWluIHByb2Nlc3M6IFwiLCBtZXNzYWdlKTtcbiAgICB9KTtcblxuXG4gICAgbGV0IHNlcnZpY2VXaW5kb3cgPSBzdGF0ZS53aW5kb3c7XG4gICAgbGV0IGNsaWVudFdpbmRvdyA9IGF3YWl0IHN0YXRlLmNyZWF0ZVdpbmRvdygpO1xuXG4gICAgY29uc29sZS5sb2coXCJTZXJ2aWNlIHdpbmRvdyBJRDogXCIgKyBzZXJ2aWNlV2luZG93LmlkKTtcbiAgICBjb25zb2xlLmxvZyhcIkNsaWVudCB3aW5kb3cgSUQ6IFwiICsgY2xpZW50V2luZG93LmlkKTtcblxuICAgIHNlcnZpY2VXaW5kb3cubG9hZEZpbGUoX19kaXJuYW1lICsgJy9zZXJ2aWNlLmh0bWwnKTtcbiAgICBjbGllbnRXaW5kb3cubG9hZEZpbGUoX19kaXJuYW1lICsgJy9jbGllbnQuaHRtbCcpO1xuXG4gICAgY29uc29sZS5sb2coXCJzZXJ2aWNlV2luZG93IHN5bmMuLi4gXCIpO1xuICAgIGF3YWl0IFN5bmNQaXBlcy5mcm9tTWFpblRvQnJvd3NlcldpbmRvdyhzZXJ2aWNlV2luZG93LCAnc2VydmljZScpLnN5bmMoKTtcbiAgICBjb25zb2xlLmxvZyhcInNlcnZpY2VXaW5kb3cgc3luYy4uLiBkb25lXCIpO1xuXG4gICAgY29uc29sZS5sb2coXCJjbGllbnRXaW5kb3cgc3luYy4uLiBcIik7XG4gICAgYXdhaXQgU3luY1BpcGVzLmZyb21NYWluVG9Ccm93c2VyV2luZG93KGNsaWVudFdpbmRvdywgJ2NsaWVudCcpLnN5bmMoKTtcbiAgICBjb25zb2xlLmxvZyhcImNsaWVudFdpbmRvdyBzeW5jLi4uIGRvbmVcIik7XG5cbiAgICBjbGllbnRXaW5kb3cud2ViQ29udGVudHMuc2VuZCgnL3N0YXJ0LWlwYycsIHt0YXJnZXRfd2luZG93OiBzZXJ2aWNlV2luZG93LmlkfSk7XG5cbiAgICAvLyBsZXQgaXBjQ2xpZW50ID0gSVBDQ2xpZW50cy5mcm9tTWFpblRvUmVuZGVyZXIoc3RhdGUud2luZG93KTtcbiAgICAvL1xuICAgIC8vIC8vIFRPRE8gOiB0aGlzIGlzbid0IHJlYWxseSBhIGdvb2QgdGVzdCBhbmQgd2Ugc2hvdWxkIHVzZSBhIFN5bmNQaXBlIHRvIG1ha2VcbiAgICAvLyAvLyBzdXJlIGJvdGggc2lkZXMgYXJlIHVwIGFuZCBvbmxpbmUgYW5kIGNvbW11bmljYXRpbmcuXG4gICAgLy8gYXdhaXQgUHJvbWlzZXMud2FpdEZvcigxMDAwKTtcbiAgICAvL1xuICAgIC8vIC8vbGV0IGlwY0NsaWVudCA9IElQQ0NsaWVudHMubWFpblByb2Nlc3MoKTtcbiAgICAvL1xuICAgIC8vIGNvbnNvbGUubG9nKFwiRXhlY3V0aW5nIHJlcXVlc3QgLi4uXCIpO1xuICAgIC8vXG4gICAgLy8gYXdhaXQgaXBjQ2xpZW50LmV4ZWN1dGUoJy9oZWxsbycsICdoZXknKTtcbiAgICAvL1xuICAgIC8vIGNvbnNvbGUubG9nKFwiRXhlY3V0aW5nIHJlcXVlc3QgLi4uZG9uZVwiKTtcbiAgICAvL1xuICAgIC8vIGF3YWl0IHN0YXRlLnRlc3RSZXN1bHRXcml0ZXIud3JpdGUodHJ1ZSk7XG5cbn0pO1xuIl19