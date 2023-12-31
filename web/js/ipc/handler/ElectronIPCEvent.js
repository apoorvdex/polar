"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IPCEvent_1 = require("./IPCEvent");
const BrowserWindowReference_1 = require("../../ui/dialog_window/BrowserWindowReference");
const Preconditions_1 = require("../../Preconditions");
class ElectronIPCEvent extends IPCEvent_1.IPCEvent {
    constructor(responsePipe, message, sender) {
        super(responsePipe, message, sender);
        Preconditions_1.Preconditions.assertNotNull(sender, "sender");
        this.senderWindowReference = new BrowserWindowReference_1.BrowserWindowReference(sender.id);
    }
}
exports.ElectronIPCEvent = ElectronIPCEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWxlY3Ryb25JUENFdmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkVsZWN0cm9uSVBDRXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx5Q0FBb0M7QUFHcEMsMEZBQXFGO0FBQ3JGLHVEQUFrRDtBQUVsRCxNQUFhLGdCQUFpQixTQUFRLG1CQUFRO0lBTTFDLFlBQVksWUFBMkMsRUFBRSxPQUF3QixFQUFFLE1BQW1CO1FBQ2xHLEtBQUssQ0FBQyxZQUFZLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRXJDLDZCQUFhLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUc5QyxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSwrQ0FBc0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFdkUsQ0FBQztDQUVKO0FBaEJELDRDQWdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7V2ViQ29udGVudHN9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCB7SVBDRXZlbnR9IGZyb20gJy4vSVBDRXZlbnQnO1xuaW1wb3J0IHtXcml0YWJsZVBpcGV9IGZyb20gJy4uL3BpcGVzL1BpcGUnO1xuaW1wb3J0IHtJUENNZXNzYWdlfSBmcm9tICcuL0lQQ01lc3NhZ2UnO1xuaW1wb3J0IHtCcm93c2VyV2luZG93UmVmZXJlbmNlfSBmcm9tICcuLi8uLi91aS9kaWFsb2dfd2luZG93L0Jyb3dzZXJXaW5kb3dSZWZlcmVuY2UnO1xuaW1wb3J0IHtQcmVjb25kaXRpb25zfSBmcm9tICcuLi8uLi9QcmVjb25kaXRpb25zJztcblxuZXhwb3J0IGNsYXNzIEVsZWN0cm9uSVBDRXZlbnQgZXh0ZW5kcyBJUENFdmVudCB7XG5cbiAgICAvLyBUT0RPOiBqdXN0IHJlZmFjdG9yIHRoaXMgaW50byB0aGUgbWFpbiBJUEMgRXZlbnQgYW5kIGhhdmUgaXQgYmUgYSBjb250ZXh0XG4gICAgLy8gc28gd2UgZG9uJ3QgbmVlZCB0aGUgRWxlY3Ryb24gSVBDIEV2ZW50IHN5c3RlbS4uXG4gICAgcHVibGljIHJlYWRvbmx5IHNlbmRlcldpbmRvd1JlZmVyZW5jZTogQnJvd3NlcldpbmRvd1JlZmVyZW5jZTtcblxuICAgIGNvbnN0cnVjdG9yKHJlc3BvbnNlUGlwZTogV3JpdGFibGVQaXBlPElQQ01lc3NhZ2U8YW55Pj4sIG1lc3NhZ2U6IElQQ01lc3NhZ2U8YW55Piwgc2VuZGVyOiBXZWJDb250ZW50cykge1xuICAgICAgICBzdXBlcihyZXNwb25zZVBpcGUsIG1lc3NhZ2UsIHNlbmRlcik7XG5cbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnROb3ROdWxsKHNlbmRlciwgXCJzZW5kZXJcIik7XG5cbiAgICAgICAgLy8gbGV0IGJyb3dzZXJXaW5kb3cgPSBCcm93c2VyV2luZG93LmZyb21XZWJDb250ZW50cyhzZW5kZXIpO1xuICAgICAgICB0aGlzLnNlbmRlcldpbmRvd1JlZmVyZW5jZSA9IG5ldyBCcm93c2VyV2luZG93UmVmZXJlbmNlKHNlbmRlci5pZCk7XG5cbiAgICB9XG5cbn1cbiJdfQ==