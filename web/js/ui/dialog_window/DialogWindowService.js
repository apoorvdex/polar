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
const Logger_1 = require("../../logger/Logger");
const ParentWindowRegistry_1 = require("./ParentWindowRegistry");
const IPCEngine_1 = require("../../ipc/handler/IPCEngine");
const IPCRegistry_1 = require("../../ipc/handler/IPCRegistry");
const ElectronIPCPipe_1 = require("../../ipc/handler/ElectronIPCPipe");
const ElectronMainReadablePipe_1 = require("../../ipc/pipes/ElectronMainReadablePipe");
const GetParentWindowHandler_1 = require("./handlers/GetParentWindowHandler");
const CreateWindowHandler_1 = require("./handlers/CreateWindowHandler");
const HideWindowHandler_1 = require("./handlers/HideWindowHandler");
const ShowWindowHandler_1 = require("./handlers/ShowWindowHandler");
const log = Logger_1.Logger.create();
class DialogWindowService {
    constructor() {
        this.parentWindowRegistry = new ParentWindowRegistry_1.ParentWindowRegistry();
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            let mainReadablePipe = new ElectronMainReadablePipe_1.ElectronMainReadablePipe();
            let ipcPipe = new ElectronIPCPipe_1.ElectronIPCPipe(mainReadablePipe);
            let ipcRegistry = new IPCRegistry_1.IPCRegistry();
            ipcRegistry.registerPath('/api/dialog-window-service/get-parent', new GetParentWindowHandler_1.GetParentWindowHandler(this.parentWindowRegistry));
            ipcRegistry.registerPath('/api/dialog-window-service/create', new CreateWindowHandler_1.CreateWindowHandler(this.parentWindowRegistry));
            ipcRegistry.registerPath('/api/dialog-window-service/hide', new HideWindowHandler_1.HideWindowHandler());
            ipcRegistry.registerPath('/api/dialog-window-service/show', new ShowWindowHandler_1.ShowWindowHandler());
            let ipcEngine = new IPCEngine_1.IPCEngine(ipcPipe, ipcRegistry);
            ipcEngine.start();
        });
    }
}
exports.DialogWindowService = DialogWindowService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlhbG9nV2luZG93U2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRpYWxvZ1dpbmRvd1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUMzQyxpRUFBNEQ7QUFDNUQsMkRBQXNEO0FBQ3RELCtEQUEwRDtBQUMxRCx1RUFBa0U7QUFDbEUsdUZBQWtGO0FBQ2xGLDhFQUF5RTtBQUN6RSx3RUFBbUU7QUFDbkUsb0VBQStEO0FBQy9ELG9FQUErRDtBQUUvRCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFTNUIsTUFBYSxtQkFBbUI7SUFBaEM7UUFFcUIseUJBQW9CLEdBQXlCLElBQUksMkNBQW9CLEVBQUUsQ0FBQztJQXdCN0YsQ0FBQztJQXRCUyxLQUFLOztZQUVQLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxtREFBd0IsRUFBRSxDQUFDO1lBQ3RELElBQUksT0FBTyxHQUFHLElBQUksaUNBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBRXBELElBQUksV0FBVyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO1lBRXBDLFdBQVcsQ0FBQyxZQUFZLENBQUMsdUNBQXVDLEVBQ3ZDLElBQUksK0NBQXNCLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztZQUVoRixXQUFXLENBQUMsWUFBWSxDQUFDLG1DQUFtQyxFQUNuQyxJQUFJLHlDQUFtQixDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7WUFFN0UsV0FBVyxDQUFDLFlBQVksQ0FBQyxpQ0FBaUMsRUFBRSxJQUFJLHFDQUFpQixFQUFFLENBQUMsQ0FBQztZQUNyRixXQUFXLENBQUMsWUFBWSxDQUFDLGlDQUFpQyxFQUFFLElBQUkscUNBQWlCLEVBQUUsQ0FBQyxDQUFDO1lBRXJGLElBQUksU0FBUyxHQUFHLElBQUkscUJBQVMsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFFcEQsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXRCLENBQUM7S0FBQTtDQUVKO0FBMUJELGtEQTBCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7UGFyZW50V2luZG93UmVnaXN0cnl9IGZyb20gJy4vUGFyZW50V2luZG93UmVnaXN0cnknO1xuaW1wb3J0IHtJUENFbmdpbmV9IGZyb20gJy4uLy4uL2lwYy9oYW5kbGVyL0lQQ0VuZ2luZSc7XG5pbXBvcnQge0lQQ1JlZ2lzdHJ5fSBmcm9tICcuLi8uLi9pcGMvaGFuZGxlci9JUENSZWdpc3RyeSc7XG5pbXBvcnQge0VsZWN0cm9uSVBDUGlwZX0gZnJvbSAnLi4vLi4vaXBjL2hhbmRsZXIvRWxlY3Ryb25JUENQaXBlJztcbmltcG9ydCB7RWxlY3Ryb25NYWluUmVhZGFibGVQaXBlfSBmcm9tICcuLi8uLi9pcGMvcGlwZXMvRWxlY3Ryb25NYWluUmVhZGFibGVQaXBlJztcbmltcG9ydCB7R2V0UGFyZW50V2luZG93SGFuZGxlcn0gZnJvbSAnLi9oYW5kbGVycy9HZXRQYXJlbnRXaW5kb3dIYW5kbGVyJztcbmltcG9ydCB7Q3JlYXRlV2luZG93SGFuZGxlcn0gZnJvbSAnLi9oYW5kbGVycy9DcmVhdGVXaW5kb3dIYW5kbGVyJztcbmltcG9ydCB7SGlkZVdpbmRvd0hhbmRsZXJ9IGZyb20gJy4vaGFuZGxlcnMvSGlkZVdpbmRvd0hhbmRsZXInO1xuaW1wb3J0IHtTaG93V2luZG93SGFuZGxlcn0gZnJvbSAnLi9oYW5kbGVycy9TaG93V2luZG93SGFuZGxlcic7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuLyoqXG4gKlxuICogU2VydmljZSB0aGF0IHJ1bnMgaW4gdGhlIG1haW4gcHJvY2VzcyB0aGF0IHJlc3BvbmRzIHRvIHJlcXVlc3RzIHRvIGNyZWF0ZVxuICogZGlhbG9nIGJveGVzIGhvc3RpbmcgbmV3IGFwcHMuXG4gKlxuICogQE1haW5Db250ZXh0XG4gKi9cbmV4cG9ydCBjbGFzcyBEaWFsb2dXaW5kb3dTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgcGFyZW50V2luZG93UmVnaXN0cnk6IFBhcmVudFdpbmRvd1JlZ2lzdHJ5ID0gbmV3IFBhcmVudFdpbmRvd1JlZ2lzdHJ5KCk7XG5cbiAgICBhc3luYyBzdGFydCgpOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgICAgICBsZXQgbWFpblJlYWRhYmxlUGlwZSA9IG5ldyBFbGVjdHJvbk1haW5SZWFkYWJsZVBpcGUoKTtcbiAgICAgICAgbGV0IGlwY1BpcGUgPSBuZXcgRWxlY3Ryb25JUENQaXBlKG1haW5SZWFkYWJsZVBpcGUpO1xuXG4gICAgICAgIGxldCBpcGNSZWdpc3RyeSA9IG5ldyBJUENSZWdpc3RyeSgpO1xuXG4gICAgICAgIGlwY1JlZ2lzdHJ5LnJlZ2lzdGVyUGF0aCgnL2FwaS9kaWFsb2ctd2luZG93LXNlcnZpY2UvZ2V0LXBhcmVudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgR2V0UGFyZW50V2luZG93SGFuZGxlcih0aGlzLnBhcmVudFdpbmRvd1JlZ2lzdHJ5KSk7XG5cbiAgICAgICAgaXBjUmVnaXN0cnkucmVnaXN0ZXJQYXRoKCcvYXBpL2RpYWxvZy13aW5kb3ctc2VydmljZS9jcmVhdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENyZWF0ZVdpbmRvd0hhbmRsZXIodGhpcy5wYXJlbnRXaW5kb3dSZWdpc3RyeSkpO1xuXG4gICAgICAgIGlwY1JlZ2lzdHJ5LnJlZ2lzdGVyUGF0aCgnL2FwaS9kaWFsb2ctd2luZG93LXNlcnZpY2UvaGlkZScsIG5ldyBIaWRlV2luZG93SGFuZGxlcigpKTtcbiAgICAgICAgaXBjUmVnaXN0cnkucmVnaXN0ZXJQYXRoKCcvYXBpL2RpYWxvZy13aW5kb3ctc2VydmljZS9zaG93JywgbmV3IFNob3dXaW5kb3dIYW5kbGVyKCkpO1xuXG4gICAgICAgIGxldCBpcGNFbmdpbmUgPSBuZXcgSVBDRW5naW5lKGlwY1BpcGUsIGlwY1JlZ2lzdHJ5KTtcblxuICAgICAgICBpcGNFbmdpbmUuc3RhcnQoKTtcblxuICAgIH1cblxufVxuIl19