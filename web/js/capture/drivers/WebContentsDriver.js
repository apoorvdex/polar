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
const StandardWebContentsDriver_1 = require("./StandardWebContentsDriver");
const CaptureWebviewWebContentsDriver_1 = require("./CaptureWebviewWebContentsDriver");
const BrowserWebContentsDriver_1 = require("./BrowserWebContentsDriver");
class WebContentsDriverFactory {
    static create(browserProfile) {
        return __awaiter(this, void 0, void 0, function* () {
            let webContentsDriver;
            if (browserProfile.profile === DriverType.WEBVIEW) {
                webContentsDriver = new CaptureWebviewWebContentsDriver_1.CaptureWebviewWebContentsDriver(browserProfile);
            }
            else if (browserProfile.profile === DriverType.BROWSER) {
                webContentsDriver = new BrowserWebContentsDriver_1.BrowserWebContentsDriver(browserProfile);
            }
            else {
                webContentsDriver = new StandardWebContentsDriver_1.StandardWebContentsDriver(browserProfile);
            }
            yield webContentsDriver.init();
            return webContentsDriver;
        });
    }
}
exports.WebContentsDriverFactory = WebContentsDriverFactory;
var DriverType;
(function (DriverType) {
    DriverType["HEADLESS"] = "HEADLESS";
    DriverType["HIDDEN"] = "HIDDEN";
    DriverType["WEBVIEW"] = "WEBVIEW";
    DriverType["BROWSER"] = "BROWSER";
})(DriverType = exports.DriverType || (exports.DriverType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViQ29udGVudHNEcml2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJXZWJDb250ZW50c0RyaXZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsMkVBQXNFO0FBR3RFLHVGQUFrRjtBQUNsRix5RUFBb0U7QUFnQ3BFLE1BQWEsd0JBQXdCO0lBRTFCLE1BQU0sQ0FBTyxNQUFNLENBQUMsY0FBOEI7O1lBRXJELElBQUksaUJBQW9DLENBQUM7WUFFekMsSUFBSSxjQUFjLENBQUMsT0FBTyxLQUFLLFVBQVUsQ0FBQyxPQUFPLEVBQUU7Z0JBQy9DLGlCQUFpQixHQUFHLElBQUksaUVBQStCLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDM0U7aUJBQU0sSUFBSSxjQUFjLENBQUMsT0FBTyxLQUFLLFVBQVUsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3RELGlCQUFpQixHQUFHLElBQUksbURBQXdCLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDcEU7aUJBQU07Z0JBQ0gsaUJBQWlCLEdBQUcsSUFBSSxxREFBeUIsQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUNyRTtZQUVELE1BQU0saUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDL0IsT0FBTyxpQkFBaUIsQ0FBQztRQUM3QixDQUFDO0tBQUE7Q0FFSjtBQWxCRCw0REFrQkM7QUFFRCxJQUFZLFVBY1g7QUFkRCxXQUFZLFVBQVU7SUFFbEIsbUNBQXFCLENBQUE7SUFFckIsK0JBQWlCLENBQUE7SUFHakIsaUNBQW1CLENBQUE7SUFLbkIsaUNBQW1CLENBQUE7QUFFdkIsQ0FBQyxFQWRXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBY3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdlYkNvbnRlbnRzID0gRWxlY3Ryb24uV2ViQ29udGVudHM7XG5pbXBvcnQge1N0YW5kYXJkV2ViQ29udGVudHNEcml2ZXJ9IGZyb20gJy4vU3RhbmRhcmRXZWJDb250ZW50c0RyaXZlcic7XG5pbXBvcnQge0Jyb3dzZXJQcm9maWxlfSBmcm9tICcuLi9Ccm93c2VyUHJvZmlsZSc7XG5pbXBvcnQge1BlbmRpbmdXZWJSZXF1ZXN0c0V2ZW50fSBmcm9tICcuLi8uLi93ZWJyZXF1ZXN0cy9QZW5kaW5nV2ViUmVxdWVzdHNMaXN0ZW5lcic7XG5pbXBvcnQge0NhcHR1cmVXZWJ2aWV3V2ViQ29udGVudHNEcml2ZXJ9IGZyb20gJy4vQ2FwdHVyZVdlYnZpZXdXZWJDb250ZW50c0RyaXZlcic7XG5pbXBvcnQge0Jyb3dzZXJXZWJDb250ZW50c0RyaXZlcn0gZnJvbSAnLi9Ccm93c2VyV2ViQ29udGVudHNEcml2ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIFdlYkNvbnRlbnRzRHJpdmVyIHtcblxuICAgIGJyb3dzZXJQcm9maWxlOiBCcm93c2VyUHJvZmlsZTtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgaW5pdCgpOiBQcm9taXNlPHZvaWQ+O1xuXG4gICAgZ2V0V2ViQ29udGVudHMoKTogUHJvbWlzZTxXZWJDb250ZW50cz47XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGRlc3Ryb3koKTogdm9pZDtcblxuICAgIGxvYWRVUkwodXJsOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gcHJvZ3Jlc3MgZm9yIHRoZSBsb2FkaW5nIHBhZ2UgaGFzIGJlZW4gdXBkYXRlZC5cbiAgICAgKi9cbiAgICBwcm9ncmVzc1VwZGF0ZWQoZXZlbnQ6IFBlbmRpbmdXZWJSZXF1ZXN0c0V2ZW50KTogdm9pZDtcblxuICAgIC8qKlxuICAgICAqIEFsbG93cyB1cyB0byBsaXN0ZW4gdG8gY2xvc2UsIGV0Yy5cbiAgICAgKi9cbiAgICBhZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZTogV2ViQ29udGVudHNFdmVudE5hbWUsIGV2ZW50TGlzdGVuZXI6ICgpID0+IHZvaWQpOiB2b2lkO1xuXG59XG5cbmV4cG9ydCBjbGFzcyBXZWJDb250ZW50c0RyaXZlckZhY3Rvcnkge1xuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBjcmVhdGUoYnJvd3NlclByb2ZpbGU6IEJyb3dzZXJQcm9maWxlKTogUHJvbWlzZTxXZWJDb250ZW50c0RyaXZlcj4ge1xuXG4gICAgICAgIGxldCB3ZWJDb250ZW50c0RyaXZlcjogV2ViQ29udGVudHNEcml2ZXI7XG5cbiAgICAgICAgaWYgKGJyb3dzZXJQcm9maWxlLnByb2ZpbGUgPT09IERyaXZlclR5cGUuV0VCVklFVykge1xuICAgICAgICAgICAgd2ViQ29udGVudHNEcml2ZXIgPSBuZXcgQ2FwdHVyZVdlYnZpZXdXZWJDb250ZW50c0RyaXZlcihicm93c2VyUHJvZmlsZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoYnJvd3NlclByb2ZpbGUucHJvZmlsZSA9PT0gRHJpdmVyVHlwZS5CUk9XU0VSKSB7XG4gICAgICAgICAgICB3ZWJDb250ZW50c0RyaXZlciA9IG5ldyBCcm93c2VyV2ViQ29udGVudHNEcml2ZXIoYnJvd3NlclByb2ZpbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2ViQ29udGVudHNEcml2ZXIgPSBuZXcgU3RhbmRhcmRXZWJDb250ZW50c0RyaXZlcihicm93c2VyUHJvZmlsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCB3ZWJDb250ZW50c0RyaXZlci5pbml0KCk7XG4gICAgICAgIHJldHVybiB3ZWJDb250ZW50c0RyaXZlcjtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGVudW0gRHJpdmVyVHlwZSB7XG5cbiAgICBIRUFETEVTUyA9ICdIRUFETEVTUycsXG5cbiAgICBISURERU4gPSAnSElEREVOJyxcblxuICAgIC8vIGEgaGlkZGVuIHBhZ2Ugd2l0aCBhIGhvc3RlZCB3ZWJ2aWV3IGNvbnRyb2wuXG4gICAgV0VCVklFVyA9ICdXRUJWSUVXJyxcblxuICAgIC8vIGEgZnVsbCBicm93c2VyIHZpZXcgdGhhdCBlbmFibGVzIHRoZSB1c2VyIHRvIGNsaWNrIGEgY2FwdHVyZSBidXR0b24gYW5kXG4gICAgLy8gaW50ZXJhY3Qgd2l0aCB0aGUgcGFnZS5cblxuICAgIEJST1dTRVIgPSAnQlJPV1NFUicsXG5cbn1cblxuZXhwb3J0IHR5cGUgV2ViQ29udGVudHNFdmVudE5hbWUgPSAnY2xvc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFdlYkNvbnRlbnRzRXZlbnQge1xuXG59XG4iXX0=