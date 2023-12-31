"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const Preconditions_1 = require("../../../../Preconditions");
class ElectronClipboard {
    writeText(text) {
        electron_1.clipboard.writeText(text);
    }
    static supported() {
        return Preconditions_1.isPresent(electron_1.clipboard);
    }
}
exports.ElectronClipboard = ElectronClipboard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWxlY3Ryb25DbGlwYm9hcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJFbGVjdHJvbkNsaXBib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHVDQUFtQztBQUNuQyw2REFBb0Q7QUFFcEQsTUFBYSxpQkFBaUI7SUFFbkIsU0FBUyxDQUFDLElBQVk7UUFDekIsb0JBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxTQUFTO1FBQ25CLE9BQU8seUJBQVMsQ0FBQyxvQkFBUyxDQUFDLENBQUM7SUFDaEMsQ0FBQztDQUVKO0FBVkQsOENBVUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NsaXBib2FyZH0gZnJvbSAnLi4vQ2xpcGJvYXJkJztcbmltcG9ydCB7Y2xpcGJvYXJkfSBmcm9tIFwiZWxlY3Ryb25cIjtcbmltcG9ydCB7aXNQcmVzZW50fSBmcm9tICcuLi8uLi8uLi8uLi9QcmVjb25kaXRpb25zJztcblxuZXhwb3J0IGNsYXNzIEVsZWN0cm9uQ2xpcGJvYXJkIGltcGxlbWVudHMgQ2xpcGJvYXJke1xuXG4gICAgcHVibGljIHdyaXRlVGV4dCh0ZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgY2xpcGJvYXJkLndyaXRlVGV4dCh0ZXh0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHN1cHBvcnRlZCgpIHtcbiAgICAgICAgcmV0dXJuIGlzUHJlc2VudChjbGlwYm9hcmQpO1xuICAgIH1cblxufVxuIl19