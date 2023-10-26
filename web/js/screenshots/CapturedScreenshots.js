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
const IXYRects_1 = require("../util/rects/IXYRects");
const ClientRects_1 = require("../util/rects/ClientRects");
const Logger_1 = require("../logger/Logger");
const Screenshots_1 = require("../metadata/Screenshots");
const ImageType_1 = require("../metadata/ImageType");
const ScreenshotDelegate_1 = require("./ScreenshotDelegate");
const electron_1 = require("electron");
const AppRuntime_1 = require("../AppRuntime");
const Optional_1 = require("../util/ts/Optional");
const log = Logger_1.Logger.create();
class CapturedScreenshots {
    static capture(target, opts = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!AppRuntime_1.AppRuntime.isElectron()) {
                return Optional_1.Optional.empty();
            }
            const screenshotRequest = yield this.doCapture(target, opts);
            log.info("Sending screenshot request: ", screenshotRequest);
            const id = this.getWebContentsID();
            return Optional_1.Optional.of(yield this.getRemoteDelegate().capture(id, screenshotRequest));
        });
    }
    static captureToFile(target, dest, opts) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    static getRemoteDelegate() {
        return electron_1.remote.getGlobal(ScreenshotDelegate_1.ScreenshotDelegate.DELEGATE_NAME);
    }
    static getWebContentsID() {
        return electron_1.remote.getCurrentWebContents().id;
    }
    static doCapture(target, opts = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let rect;
            if (target instanceof HTMLElement) {
                log.info("Using HTML element to build rect from bounding client rect.");
                rect = IXYRects_1.IXYRects.createFromClientRect(target.getBoundingClientRect());
            }
            else if (ClientRects_1.ClientRects.instanceOf(target)) {
                rect = {
                    x: target.left,
                    y: target.top,
                    width: target.width,
                    height: target.height
                };
                log.info("Using client rect: ", rect);
            }
            else if (IXYRects_1.IXYRects.instanceOf(target)) {
                log.info("Using IXYRect");
                rect = target;
            }
            else {
                throw new Error("Unknown target type.");
            }
            const screenshotRequest = {
                rect, resize: opts.resize, crop: opts.crop
            };
            return screenshotRequest;
        });
    }
    static toScreenshot(capturedScreenshot) {
        return Screenshots_1.Screenshots.create(capturedScreenshot.dataURL, {
            width: capturedScreenshot.dimensions.width,
            height: capturedScreenshot.dimensions.height,
            type: ImageType_1.ImageType.PNG
        });
    }
}
exports.CapturedScreenshots = CapturedScreenshots;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FwdHVyZWRTY3JlZW5zaG90cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNhcHR1cmVkU2NyZWVuc2hvdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHFEQUFnRDtBQUdoRCwyREFBc0Q7QUFDdEQsNkNBQXdDO0FBRXhDLHlEQUFvRDtBQUNwRCxxREFBZ0Q7QUFDaEQsNkRBQTRGO0FBQzVGLHVDQUFnQztBQUNoQyw4Q0FBeUM7QUFDekMsa0RBQTZDO0FBRTdDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQU81QixNQUFhLG1CQUFtQjtJQWFyQixNQUFNLENBQU8sT0FBTyxDQUFDLE1BQXFCLEVBQUUsT0FBb0IsRUFBRTs7WUFFckUsSUFBSyxDQUFFLHVCQUFVLENBQUMsVUFBVSxFQUFFLEVBQUU7Z0JBQzVCLE9BQU8sbUJBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUMzQjtZQUVELE1BQU0saUJBQWlCLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUU3RCxHQUFHLENBQUMsSUFBSSxDQUFDLDhCQUE4QixFQUFFLGlCQUFpQixDQUFDLENBQUM7WUFJNUQsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFFbkMsT0FBTyxtQkFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1FBRXRGLENBQUM7S0FBQTtJQUVNLE1BQU0sQ0FBTyxhQUFhLENBQUMsTUFBcUIsRUFDckIsSUFBWSxFQUNaLElBQWlCOztRQUluRCxDQUFDO0tBQUE7SUFFTyxNQUFNLENBQUMsaUJBQWlCO1FBQzVCLE9BQU8saUJBQU0sQ0FBQyxTQUFTLENBQUMsdUNBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVPLE1BQU0sQ0FBQyxnQkFBZ0I7UUFDM0IsT0FBTyxpQkFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUMsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFTyxNQUFNLENBQU8sU0FBUyxDQUFDLE1BQXFCLEVBQUUsT0FBb0IsRUFBRTs7WUFFeEUsSUFBSSxJQUFhLENBQUM7WUFFbEIsSUFBSSxNQUFNLFlBQVksV0FBVyxFQUFFO2dCQUUvQixHQUFHLENBQUMsSUFBSSxDQUFDLDZEQUE2RCxDQUFDLENBQUM7Z0JBRXhFLElBQUksR0FBRyxtQkFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUM7YUFFeEU7aUJBQU0sSUFBSSx5QkFBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFFdkMsSUFBSSxHQUFHO29CQUNILENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSTtvQkFDZCxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUc7b0JBQ2IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO29CQUNuQixNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU07aUJBQ3hCLENBQUM7Z0JBRUYsR0FBRyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUV6QztpQkFBTSxJQUFJLG1CQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNwQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLEdBQUcsTUFBTSxDQUFDO2FBQ2pCO2lCQUFNO2dCQUNILE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQzthQUMzQztZQUVELE1BQU0saUJBQWlCLEdBQXVCO2dCQUMxQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2FBQzdDLENBQUM7WUFFRixPQUFPLGlCQUFpQixDQUFDO1FBRTdCLENBQUM7S0FBQTtJQUVNLE1BQU0sQ0FBQyxZQUFZLENBQUMsa0JBQXNDO1FBRTdELE9BQU8seUJBQVcsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFO1lBQ2xELEtBQUssRUFBRSxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsS0FBSztZQUMxQyxNQUFNLEVBQUUsa0JBQWtCLENBQUMsVUFBVSxDQUFDLE1BQU07WUFDNUMsSUFBSSxFQUFFLHFCQUFTLENBQUMsR0FBRztTQUN0QixDQUFDLENBQUM7SUFFUCxDQUFDO0NBRUo7QUE3RkQsa0RBNkZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJWFlSZWN0fSBmcm9tICcuLi91dGlsL3JlY3RzL0lYWVJlY3QnO1xuaW1wb3J0IHtJWFlSZWN0c30gZnJvbSAnLi4vdXRpbC9yZWN0cy9JWFlSZWN0cyc7XG5pbXBvcnQge0NhcHR1cmVkU2NyZWVuc2hvdCwgQ3JvcERpbWVuc2lvbnMsIFJlc2l6ZURpbWVuc2lvbnN9IGZyb20gJy4vQ2FwdHVyZWRTY3JlZW5zaG90JztcbmltcG9ydCB7U2NyZWVuc2hvdFJlcXVlc3R9IGZyb20gJy4vU2NyZWVuc2hvdFJlcXVlc3QnO1xuaW1wb3J0IHtDbGllbnRSZWN0c30gZnJvbSAnLi4vdXRpbC9yZWN0cy9DbGllbnRSZWN0cyc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge1NjcmVlbnNob3R9IGZyb20gJy4uL21ldGFkYXRhL1NjcmVlbnNob3QnO1xuaW1wb3J0IHtTY3JlZW5zaG90c30gZnJvbSAnLi4vbWV0YWRhdGEvU2NyZWVuc2hvdHMnO1xuaW1wb3J0IHtJbWFnZVR5cGV9IGZyb20gJy4uL21ldGFkYXRhL0ltYWdlVHlwZSc7XG5pbXBvcnQge0lTY3JlZW5zaG90RGVsZWdhdGUsIFNjcmVlbnNob3REZWxlZ2F0ZSwgV2ViQ29udGVudHNJRH0gZnJvbSAnLi9TY3JlZW5zaG90RGVsZWdhdGUnO1xuaW1wb3J0IHtyZW1vdGV9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCB7QXBwUnVudGltZX0gZnJvbSAnLi4vQXBwUnVudGltZSc7XG5pbXBvcnQge09wdGlvbmFsfSBmcm9tICcuLi91dGlsL3RzL09wdGlvbmFsJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG4vKipcbiAqIENyZWF0ZSBhIHNjcmVlbnNob3Qgb2YgdGhlIGRpc3BsYXkuXG4gKlxuICogQEVsZWN0cm9uUmVuZGVyZXJDb250ZXh0XG4gKi9cbmV4cG9ydCBjbGFzcyBDYXB0dXJlZFNjcmVlbnNob3RzIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIHNjcmVlbnNob3QgYW5kIHJldHVybiBhIE5hdGl2ZUltYWdlIG9mIHRoZSByZXN1bHQuXG4gICAgICpcbiAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vZWxlY3Ryb24vZWxlY3Ryb24vYmxvYi9tYXN0ZXIvZG9jcy9hcGkvbmF0aXZlLWltYWdlLm1kXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IFNwZWNpZnkgZWl0aGVyIHJlY3Qgb3IgZWxlbWVudCB0byBjYXB0dXJlIGFzIHByb3BlcnRpZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfSBmb3Ige05hdGl2ZUltYWdlfS4gWW91IGNhbiBjYWxsIHRvRGF0YVVSTCBvbiB0aGUgaW1hZ2VcbiAgICAgKiAgICAgICAgIHdpdGggc2NhbGVGYWN0b3IgYXMgYW4gb3B0aW9uLlxuICAgICAqXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBjYXB0dXJlKHRhcmdldDogQ2FwdHVyZVRhcmdldCwgb3B0czogQ2FwdHVyZU9wdHMgPSB7fSk6IFByb21pc2U8T3B0aW9uYWw8Q2FwdHVyZWRTY3JlZW5zaG90Pj4ge1xuXG4gICAgICAgIGlmICggISBBcHBSdW50aW1lLmlzRWxlY3Ryb24oKSkge1xuICAgICAgICAgICAgcmV0dXJuIE9wdGlvbmFsLmVtcHR5KCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzY3JlZW5zaG90UmVxdWVzdCA9IGF3YWl0IHRoaXMuZG9DYXB0dXJlKHRhcmdldCwgb3B0cyk7XG5cbiAgICAgICAgbG9nLmluZm8oXCJTZW5kaW5nIHNjcmVlbnNob3QgcmVxdWVzdDogXCIsIHNjcmVlbnNob3RSZXF1ZXN0KTtcblxuICAgICAgICAvLyBjb25zdCBpZDogV2ViQ29udGVudHNJRCA9IHdlYkNvbnRlbnRzLmlkO1xuXG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5nZXRXZWJDb250ZW50c0lEKCk7XG5cbiAgICAgICAgcmV0dXJuIE9wdGlvbmFsLm9mKGF3YWl0IHRoaXMuZ2V0UmVtb3RlRGVsZWdhdGUoKS5jYXB0dXJlKGlkLCBzY3JlZW5zaG90UmVxdWVzdCkpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBjYXB0dXJlVG9GaWxlKHRhcmdldDogQ2FwdHVyZVRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzdDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRzOiBDYXB0dXJlT3B0cyk6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIC8vIG5vb3AgZm9yIG5vd1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0UmVtb3RlRGVsZWdhdGUoKTogSVNjcmVlbnNob3REZWxlZ2F0ZSB7XG4gICAgICAgIHJldHVybiByZW1vdGUuZ2V0R2xvYmFsKFNjcmVlbnNob3REZWxlZ2F0ZS5ERUxFR0FURV9OQU1FKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBnZXRXZWJDb250ZW50c0lEKCk6IFdlYkNvbnRlbnRzSUQge1xuICAgICAgICByZXR1cm4gcmVtb3RlLmdldEN1cnJlbnRXZWJDb250ZW50cygpLmlkO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIGRvQ2FwdHVyZSh0YXJnZXQ6IENhcHR1cmVUYXJnZXQsIG9wdHM6IENhcHR1cmVPcHRzID0ge30pOiBQcm9taXNlPFNjcmVlbnNob3RSZXF1ZXN0PiB7XG5cbiAgICAgICAgbGV0IHJlY3Q6IElYWVJlY3Q7XG5cbiAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG5cbiAgICAgICAgICAgIGxvZy5pbmZvKFwiVXNpbmcgSFRNTCBlbGVtZW50IHRvIGJ1aWxkIHJlY3QgZnJvbSBib3VuZGluZyBjbGllbnQgcmVjdC5cIik7XG5cbiAgICAgICAgICAgIHJlY3QgPSBJWFlSZWN0cy5jcmVhdGVGcm9tQ2xpZW50UmVjdCh0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoQ2xpZW50UmVjdHMuaW5zdGFuY2VPZih0YXJnZXQpKSB7XG5cbiAgICAgICAgICAgIHJlY3QgPSB7XG4gICAgICAgICAgICAgICAgeDogdGFyZ2V0LmxlZnQsXG4gICAgICAgICAgICAgICAgeTogdGFyZ2V0LnRvcCxcbiAgICAgICAgICAgICAgICB3aWR0aDogdGFyZ2V0LndpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogdGFyZ2V0LmhlaWdodFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgbG9nLmluZm8oXCJVc2luZyBjbGllbnQgcmVjdDogXCIsIHJlY3QpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoSVhZUmVjdHMuaW5zdGFuY2VPZih0YXJnZXQpKSB7XG4gICAgICAgICAgICBsb2cuaW5mbyhcIlVzaW5nIElYWVJlY3RcIik7XG4gICAgICAgICAgICByZWN0ID0gdGFyZ2V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biB0YXJnZXQgdHlwZS5cIik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzY3JlZW5zaG90UmVxdWVzdCA9IDxTY3JlZW5zaG90UmVxdWVzdD4ge1xuICAgICAgICAgICAgcmVjdCwgcmVzaXplOiBvcHRzLnJlc2l6ZSwgY3JvcDogb3B0cy5jcm9wXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHNjcmVlbnNob3RSZXF1ZXN0O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyB0b1NjcmVlbnNob3QoY2FwdHVyZWRTY3JlZW5zaG90OiBDYXB0dXJlZFNjcmVlbnNob3QpOiBTY3JlZW5zaG90IHtcblxuICAgICAgICByZXR1cm4gU2NyZWVuc2hvdHMuY3JlYXRlKGNhcHR1cmVkU2NyZWVuc2hvdC5kYXRhVVJMLCB7XG4gICAgICAgICAgICB3aWR0aDogY2FwdHVyZWRTY3JlZW5zaG90LmRpbWVuc2lvbnMud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IGNhcHR1cmVkU2NyZWVuc2hvdC5kaW1lbnNpb25zLmhlaWdodCxcbiAgICAgICAgICAgIHR5cGU6IEltYWdlVHlwZS5QTkdcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IHR5cGUgQ2FwdHVyZVRhcmdldCA9IElYWVJlY3QgfCBIVE1MRWxlbWVudCB8IENsaWVudFJlY3Q7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FwdHVyZU9wdHMge1xuICAgIHJlYWRvbmx5IHJlc2l6ZT86IFJlc2l6ZURpbWVuc2lvbnM7XG4gICAgcmVhZG9ubHkgY3JvcD86IENyb3BEaW1lbnNpb25zO1xufVxuIl19