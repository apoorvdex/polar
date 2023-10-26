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
const Logger_1 = require("../logger/Logger");
const log = Logger_1.Logger.create();
class BrowserWindows {
    static toBrowserWindowOptions(browserProfile) {
        const partition = "part-" + Date.now();
        return {
            minWidth: browserProfile.deviceEmulation.screenSize.width,
            minHeight: browserProfile.deviceEmulation.screenSize.height,
            width: browserProfile.deviceEmulation.screenSize.width,
            height: browserProfile.deviceEmulation.screenSize.height,
            show: browserProfile.show,
            enableLargerThanScreen: true,
            webPreferences: {
                nodeIntegration: browserProfile.nodeIntegration,
                defaultEncoding: 'UTF-8',
                webaudio: browserProfile.webaudio,
                offscreen: browserProfile.offscreen,
                webSecurity: false,
                partition
            }
        };
    }
    static onceReadyToShow(window) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                window.once('ready-to-show', () => {
                    return resolve(window);
                });
            });
        });
    }
}
exports.BrowserWindows = BrowserWindows;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJvd3NlcldpbmRvd3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJCcm93c2VyV2luZG93cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBUUEsNkNBQXdDO0FBS3hDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLGNBQWM7SUFFaEIsTUFBTSxDQUFDLHNCQUFzQixDQUFDLGNBQThCO1FBRS9ELE1BQU0sU0FBUyxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFdkMsT0FBTztZQUNILFFBQVEsRUFBRSxjQUFjLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxLQUFLO1lBQ3pELFNBQVMsRUFBRSxjQUFjLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxNQUFNO1lBQzNELEtBQUssRUFBRSxjQUFjLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxLQUFLO1lBQ3RELE1BQU0sRUFBRSxjQUFjLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxNQUFNO1lBR3hELElBQUksRUFBRSxjQUFjLENBQUMsSUFBSTtZQUd6QixzQkFBc0IsRUFBRSxJQUFJO1lBRTVCLGNBQWMsRUFBRTtnQkFNWixlQUFlLEVBQUUsY0FBYyxDQUFDLGVBQWU7Z0JBRS9DLGVBQWUsRUFBRSxPQUFPO2dCQUV4QixRQUFRLEVBQUUsY0FBYyxDQUFDLFFBQVE7Z0JBRWpDLFNBQVMsRUFBRSxjQUFjLENBQUMsU0FBUztnQkFXbkMsV0FBVyxFQUFFLEtBQUs7Z0JBTWxCLFNBQVM7YUFFWjtTQUVKLENBQUM7SUFFTixDQUFDO0lBRU0sTUFBTSxDQUFPLGVBQWUsQ0FBQyxNQUFxQjs7WUFFckQsT0FBTyxJQUFJLE9BQU8sQ0FBZ0IsT0FBTyxDQUFDLEVBQUU7Z0JBRXhDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEdBQUcsRUFBRTtvQkFDOUIsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzNCLENBQUMsQ0FBQyxDQUFDO1lBRVAsQ0FBQyxDQUFDLENBQUM7UUFFUCxDQUFDO0tBQUE7Q0FFSjtBQW5FRCx3Q0FtRUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIEludmVzdGlnYXRlIHRoaXMgYXMgYSB3YXkgdG8gYWRqdXN0IHRoZSBzY3JlZW4gc2l6ZSBhdXRvbWF0aWNhbGx5OlxuXG4vLyB1c2VDb250ZW50U2l6ZSBCb29sZWFuIChvcHRpb25hbCkgLSBUaGUgd2lkdGggYW5kIGhlaWdodCB3b3VsZCBiZSB1c2VkIGFzIHdlYlxuLy8gcGFnZSdzIHNpemUsIHdoaWNoIG1lYW5zIHRoZSBhY3R1YWwgd2luZG93J3Mgc2l6ZSB3aWxsIGluY2x1ZGUgd2luZG93IGZyYW1lJ3Ncbi8vIHNpemUgYW5kIGJlIHNsaWdodGx5IGxhcmdlci4gRGVmYXVsdCBpcyBmYWxzZS5cblxuaW1wb3J0IHtSZXNvdXJjZVBhdGhzfSBmcm9tICcuLi9lbGVjdHJvbi93ZWJyZXNvdXJjZS9SZXNvdXJjZVBhdGhzJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7QnJvd3NlclByb2ZpbGV9IGZyb20gJy4vQnJvd3NlclByb2ZpbGUnO1xuaW1wb3J0IEJyb3dzZXJXaW5kb3dDb25zdHJ1Y3Rvck9wdGlvbnMgPSBFbGVjdHJvbi5Ccm93c2VyV2luZG93Q29uc3RydWN0b3JPcHRpb25zO1xuaW1wb3J0IEJyb3dzZXJXaW5kb3cgPSBFbGVjdHJvbi5Ccm93c2VyV2luZG93O1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBCcm93c2VyV2luZG93cyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIHRvQnJvd3NlcldpbmRvd09wdGlvbnMoYnJvd3NlclByb2ZpbGU6IEJyb3dzZXJQcm9maWxlKTogQnJvd3NlcldpbmRvd0NvbnN0cnVjdG9yT3B0aW9ucyB7XG5cbiAgICAgICAgY29uc3QgcGFydGl0aW9uID0gXCJwYXJ0LVwiICsgRGF0ZS5ub3coKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWluV2lkdGg6IGJyb3dzZXJQcm9maWxlLmRldmljZUVtdWxhdGlvbi5zY3JlZW5TaXplLndpZHRoLFxuICAgICAgICAgICAgbWluSGVpZ2h0OiBicm93c2VyUHJvZmlsZS5kZXZpY2VFbXVsYXRpb24uc2NyZWVuU2l6ZS5oZWlnaHQsXG4gICAgICAgICAgICB3aWR0aDogYnJvd3NlclByb2ZpbGUuZGV2aWNlRW11bGF0aW9uLnNjcmVlblNpemUud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IGJyb3dzZXJQcm9maWxlLmRldmljZUVtdWxhdGlvbi5zY3JlZW5TaXplLmhlaWdodCxcbiAgICAgICAgICAgIC8vIG1heFdpZHRoOiBXSURUSCxcbiAgICAgICAgICAgIC8vIG1heEhlaWdodDogSEVJR0hULFxuICAgICAgICAgICAgc2hvdzogYnJvd3NlclByb2ZpbGUuc2hvdyxcblxuICAgICAgICAgICAgLy8gRW5hYmxlIHRoZSB3aW5kb3cgdG8gYmUgcmVzaXplZCBsYXJnZXIgdGhhbiBzY3JlZW4uIERlZmF1bHQgaXMgZmFsc2UuXG4gICAgICAgICAgICBlbmFibGVMYXJnZXJUaGFuU2NyZWVuOiB0cnVlLFxuXG4gICAgICAgICAgICB3ZWJQcmVmZXJlbmNlczoge1xuXG4gICAgICAgICAgICAgICAgLy8gdGhlIHBhdGggdG8gb3VyIGNvbnRlbnQgY2FwdHVyZSBidW5kbGUgbmVlZHMgdG8gYmUgYWJzb2x1dGVcbiAgICAgICAgICAgICAgICAvLyBmb3Igc29tZSBzdHJhbmdlIHJlYXNvbiBhbmQgdGhpcyBpcyByZXF1aXJlZCBieSBFbGVjdHJvbi5cbiAgICAgICAgICAgICAgICAvLyBwcmVsb2FkLFxuXG4gICAgICAgICAgICAgICAgbm9kZUludGVncmF0aW9uOiBicm93c2VyUHJvZmlsZS5ub2RlSW50ZWdyYXRpb24sXG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0RW5jb2Rpbmc6ICdVVEYtOCcsXG5cbiAgICAgICAgICAgICAgICB3ZWJhdWRpbzogYnJvd3NlclByb2ZpbGUud2ViYXVkaW8sXG5cbiAgICAgICAgICAgICAgICBvZmZzY3JlZW46IGJyb3dzZXJQcm9maWxlLm9mZnNjcmVlbixcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIFRoaXMgaXMgbmVlZGVkIGZvciBub3cgYmVjYXVzZSB3ZSBoYXZlIHRvIGFjY2VzcyB0aGUgaWZyYW1lXG4gICAgICAgICAgICAgICAgICogY29udGVudCBmcm9tIHRoZSBmcmFtZSBhbmQgdGhhdCBtaWdodCBub3QgYmUgcG9zc2libGVcbiAgICAgICAgICAgICAgICAgKiBvdGhlcndpc2UuIFRoZXJlIGlzIG5vdCBuZWNlc3NhcmlseSBhbnl0aGluZyB0byBzdGVhbCBoZXJlXG4gICAgICAgICAgICAgICAgICogeWV0IGFzIHdlJ3JlIG5vdCB1c2luZyBhbnkgdHlwZSBvZiBjb29raWUgc2hhcmluZyBidXQgd2VcbiAgICAgICAgICAgICAgICAgKiBtaWdodCBpbiB0aGUgZnV0dXJlIHNvIG5lZWQgdG8gYmUgY2FyZWZ1bCBoZXJlLiAgQXMgc29vbiBhc1xuICAgICAgICAgICAgICAgICAqIHdlIGNhbiBnZXQgYWNjZXNzIHRvIHRoZSBpZnJhbWUgZG9jdW1lbnRzIGZyb20gZWxlY3Ryb24gd2VcbiAgICAgICAgICAgICAgICAgKiBzaG91bGQgbW92ZSB0byBhIG1vcmUgc2VjdXJlIHNvbHV0aW9uLlxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHdlYlNlY3VyaXR5OiBmYWxzZSxcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIFVzZSBhIHNlc3Npb24gcGVyIGNhcHR1cmUgc28gdGhhdCB3ZWJSZXF1ZXN0cyBiZXR3ZWVuIGNhcHR1cmVcbiAgICAgICAgICAgICAgICAgKiBpbnN0YW5jZXMgYXJlbid0IHNoYXJlZC5cbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBwYXJ0aXRpb25cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIG9uY2VSZWFkeVRvU2hvdyh3aW5kb3c6IEJyb3dzZXJXaW5kb3cpOiBQcm9taXNlPEJyb3dzZXJXaW5kb3c+IHtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8QnJvd3NlcldpbmRvdz4ocmVzb2x2ZSA9PiB7XG5cbiAgICAgICAgICAgIHdpbmRvdy5vbmNlKCdyZWFkeS10by1zaG93JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHdpbmRvdyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgIH1cblxufVxuIl19