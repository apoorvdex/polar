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
const IPCHandler_1 = require("../../../ipc/handler/IPCHandler");
const DialogWindow_1 = require("../DialogWindow");
const Logger_1 = require("../../../logger/Logger");
const log = Logger_1.Logger.create();
class CreateWindowHandler extends IPCHandler_1.IPCHandler {
    constructor(parentWindowRegistry) {
        super();
        this.parentWindowRegistry = parentWindowRegistry;
    }
    createValue(ipcMessage) {
        return DialogWindow_1.DialogWindowOptions.create(ipcMessage.value);
    }
    handleIPC(event, dialogWindowOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            let dialogWindow = yield DialogWindow_1.DialogWindow.create(dialogWindowOptions);
            let parentWindowReference = event.senderWindowReference;
            this.parentWindowRegistry.register(dialogWindow.dialogWindowReference, parentWindowReference);
            return dialogWindow.dialogWindowReference;
        });
    }
}
exports.CreateWindowHandler = CreateWindowHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlV2luZG93SGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNyZWF0ZVdpbmRvd0hhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBLGdFQUEyRDtBQUczRCxrREFBa0U7QUFDbEUsbURBQThDO0FBRTlDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLG1CQUFvQixTQUFRLHVCQUErQjtJQUlwRSxZQUFZLG9CQUEwQztRQUNsRCxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxvQkFBb0IsQ0FBQztJQUNyRCxDQUFDO0lBRVMsV0FBVyxDQUFDLFVBQTJDO1FBQzdELE9BQU8sa0NBQW1CLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRWUsU0FBUyxDQUFDLEtBQXVCLEVBQUUsbUJBQXdDOztZQUV2RixJQUFJLFlBQVksR0FBRyxNQUFNLDJCQUFZLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFFbEUsSUFBSSxxQkFBcUIsR0FBRyxLQUFLLENBQUMscUJBQXFCLENBQUM7WUFFeEQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMscUJBQXFCLEVBQUUscUJBQXFCLENBQUMsQ0FBQztZQUU5RixPQUFPLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQztRQUU5QyxDQUFDO0tBQUE7Q0FFSjtBQXpCRCxrREF5QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0VsZWN0cm9uSVBDRXZlbnR9IGZyb20gJy4uLy4uLy4uL2lwYy9oYW5kbGVyL0VsZWN0cm9uSVBDRXZlbnQnO1xuaW1wb3J0IHtQYXJlbnRXaW5kb3dSZWdpc3RyeX0gZnJvbSAnLi4vUGFyZW50V2luZG93UmVnaXN0cnknO1xuaW1wb3J0IHtJUENIYW5kbGVyfSBmcm9tICcuLi8uLi8uLi9pcGMvaGFuZGxlci9JUENIYW5kbGVyJztcbmltcG9ydCB7RGlhbG9nV2luZG93UmVmZXJlbmNlfSBmcm9tICcuLi9EaWFsb2dXaW5kb3dSZWZlcmVuY2UnO1xuaW1wb3J0IHtJUENNZXNzYWdlfSBmcm9tICcuLi8uLi8uLi9pcGMvaGFuZGxlci9JUENNZXNzYWdlJztcbmltcG9ydCB7RGlhbG9nV2luZG93LCBEaWFsb2dXaW5kb3dPcHRpb25zfSBmcm9tICcuLi9EaWFsb2dXaW5kb3cnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uLy4uLy4uL2xvZ2dlci9Mb2dnZXInO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVXaW5kb3dIYW5kbGVyIGV4dGVuZHMgSVBDSGFuZGxlcjxEaWFsb2dXaW5kb3dPcHRpb25zPiB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHBhcmVudFdpbmRvd1JlZ2lzdHJ5OiBQYXJlbnRXaW5kb3dSZWdpc3RyeTtcblxuICAgIGNvbnN0cnVjdG9yKHBhcmVudFdpbmRvd1JlZ2lzdHJ5OiBQYXJlbnRXaW5kb3dSZWdpc3RyeSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnBhcmVudFdpbmRvd1JlZ2lzdHJ5ID0gcGFyZW50V2luZG93UmVnaXN0cnk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVZhbHVlKGlwY01lc3NhZ2U6IElQQ01lc3NhZ2U8RGlhbG9nV2luZG93T3B0aW9ucz4pOiBEaWFsb2dXaW5kb3dPcHRpb25zIHtcbiAgICAgICAgcmV0dXJuIERpYWxvZ1dpbmRvd09wdGlvbnMuY3JlYXRlKGlwY01lc3NhZ2UudmFsdWUpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhc3luYyBoYW5kbGVJUEMoZXZlbnQ6IEVsZWN0cm9uSVBDRXZlbnQsIGRpYWxvZ1dpbmRvd09wdGlvbnM6IERpYWxvZ1dpbmRvd09wdGlvbnMpOiBQcm9taXNlPERpYWxvZ1dpbmRvd1JlZmVyZW5jZT4ge1xuXG4gICAgICAgIGxldCBkaWFsb2dXaW5kb3cgPSBhd2FpdCBEaWFsb2dXaW5kb3cuY3JlYXRlKGRpYWxvZ1dpbmRvd09wdGlvbnMpO1xuXG4gICAgICAgIGxldCBwYXJlbnRXaW5kb3dSZWZlcmVuY2UgPSBldmVudC5zZW5kZXJXaW5kb3dSZWZlcmVuY2U7XG5cbiAgICAgICAgdGhpcy5wYXJlbnRXaW5kb3dSZWdpc3RyeS5yZWdpc3RlcihkaWFsb2dXaW5kb3cuZGlhbG9nV2luZG93UmVmZXJlbmNlLCBwYXJlbnRXaW5kb3dSZWZlcmVuY2UpO1xuXG4gICAgICAgIHJldHVybiBkaWFsb2dXaW5kb3cuZGlhbG9nV2luZG93UmVmZXJlbmNlO1xuXG4gICAgfVxuXG59XG5cbiJdfQ==