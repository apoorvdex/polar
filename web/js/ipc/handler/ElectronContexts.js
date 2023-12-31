"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const BrowserWindowReference_1 = require("../../ui/dialog_window/BrowserWindowReference");
const ElectronContext_1 = require("./ElectronContext");
class ElectronContexts {
    static create() {
        if (electron_1.remote) {
            const browserWindowReference = new BrowserWindowReference_1.BrowserWindowReference(electron_1.remote.getCurrentWindow().id);
            return new ElectronContext_1.ElectronRendererContext(browserWindowReference);
        }
        else {
            return new ElectronContext_1.ElectronMainContext();
        }
    }
}
exports.ElectronContexts = ElectronContexts;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWxlY3Ryb25Db250ZXh0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkVsZWN0cm9uQ29udGV4dHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx1Q0FBZ0M7QUFJaEMsMEZBQXFGO0FBQ3JGLHVEQUErRTtBQUUvRSxNQUFhLGdCQUFnQjtJQUVsQixNQUFNLENBQUMsTUFBTTtRQUVoQixJQUFJLGlCQUFNLEVBQUU7WUFFUixNQUFNLHNCQUFzQixHQUN0QixJQUFJLCtDQUFzQixDQUFDLGlCQUFNLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUUvRCxPQUFPLElBQUkseUNBQXVCLENBQUMsc0JBQXNCLENBQUMsQ0FBQztTQUU5RDthQUFNO1lBQ0gsT0FBTyxJQUFJLHFDQUFtQixFQUFFLENBQUM7U0FDcEM7SUFFTCxDQUFDO0NBRUo7QUFqQkQsNENBaUJDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge3JlbW90ZX0gZnJvbSAnZWxlY3Ryb24nO1xuLyoqXG4gKiBEZXRlcm1pbmUgdGhlIGVsZWN0cm9uIGNvbnRleHQgd2UncmUgcnVubmluZyB3aXRoaW4uXG4gKi9cbmltcG9ydCB7QnJvd3NlcldpbmRvd1JlZmVyZW5jZX0gZnJvbSAnLi4vLi4vdWkvZGlhbG9nX3dpbmRvdy9Ccm93c2VyV2luZG93UmVmZXJlbmNlJztcbmltcG9ydCB7RWxlY3Ryb25NYWluQ29udGV4dCwgRWxlY3Ryb25SZW5kZXJlckNvbnRleHR9IGZyb20gJy4vRWxlY3Ryb25Db250ZXh0JztcblxuZXhwb3J0IGNsYXNzIEVsZWN0cm9uQ29udGV4dHMge1xuXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGUoKSB7XG5cbiAgICAgICAgaWYgKHJlbW90ZSkge1xuXG4gICAgICAgICAgICBjb25zdCBicm93c2VyV2luZG93UmVmZXJlbmNlXG4gICAgICAgICAgICAgICAgPSBuZXcgQnJvd3NlcldpbmRvd1JlZmVyZW5jZShyZW1vdGUuZ2V0Q3VycmVudFdpbmRvdygpLmlkKTtcblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFbGVjdHJvblJlbmRlcmVyQ29udGV4dChicm93c2VyV2luZG93UmVmZXJlbmNlKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFbGVjdHJvbk1haW5Db250ZXh0KCk7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuIl19