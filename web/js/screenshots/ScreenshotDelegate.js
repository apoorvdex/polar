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
const Logger_1 = require("../logger/Logger");
const log = Logger_1.Logger.create();
class ScreenshotDelegate {
    capture(id, screenshotRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            const nativeImage = yield this.captureNativeImage(id, screenshotRequest);
            return this.toCapturedScreenshot(nativeImage);
        });
    }
    captureNativeImage(id, screenshotRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            const webContentsInstance = electron_1.webContents.fromId(id);
            if (!screenshotRequest) {
                throw new Error("screenshotRequest required");
            }
            let rect = screenshotRequest.rect;
            if (!rect) {
                throw new Error("No rect");
            }
            rect = {
                x: Math.round(screenshotRequest.rect.x),
                y: Math.round(screenshotRequest.rect.y),
                width: Math.round(screenshotRequest.rect.width),
                height: Math.round(screenshotRequest.rect.height)
            };
            return new Promise((resolve) => {
                webContentsInstance.capturePage(rect, (image) => {
                    if (screenshotRequest.resize) {
                        if (screenshotRequest.resize.width !== undefined ||
                            screenshotRequest.resize.height !== undefined) {
                            log.info("Resizing image to: ", screenshotRequest.resize);
                            image = image.resize(screenshotRequest.resize);
                        }
                    }
                    if (screenshotRequest.crop) {
                        log.info("Cropping image to: ", screenshotRequest.resize);
                        image = image.resize(screenshotRequest.crop);
                    }
                    resolve(image);
                });
            });
        });
    }
    toCapturedScreenshot(image) {
        const dataURL = image.toDataURL();
        const size = image.getSize();
        const capturedScreenshot = {
            dataURL,
            dimensions: {
                width: size.width,
                height: size.height
            }
        };
        return capturedScreenshot;
    }
}
ScreenshotDelegate.DELEGATE_NAME = "screenshotDelegate";
exports.ScreenshotDelegate = ScreenshotDelegate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NyZWVuc2hvdERlbGVnYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU2NyZWVuc2hvdERlbGVnYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQSx1Q0FBcUM7QUFDckMsNkNBQXdDO0FBRXhDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUs1QixNQUFhLGtCQUFrQjtJQUlkLE9BQU8sQ0FBQyxFQUFpQixFQUFFLGlCQUFvQzs7WUFFeEUsTUFBTSxXQUFXLEdBQUcsTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRSxFQUFFLGlCQUFpQixDQUFDLENBQUM7WUFDekUsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFbEQsQ0FBQztLQUFBO0lBYWEsa0JBQWtCLENBQUMsRUFBaUIsRUFBRSxpQkFBb0M7O1lBRXBGLE1BQU0sbUJBQW1CLEdBQUcsc0JBQVcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFbkQsSUFBSSxDQUFFLGlCQUFpQixFQUFFO2dCQUNyQixNQUFNLElBQUksS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7YUFDakQ7WUFFRCxJQUFJLElBQUksR0FBdUIsaUJBQWlCLENBQUMsSUFBSSxDQUFDO1lBRXRELElBQUksQ0FBRSxJQUFJLEVBQUU7Z0JBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUM5QjtZQUtELElBQUksR0FBRztnQkFDSCxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUMvQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ3BELENBQUM7WUFFRixPQUFPLElBQUksT0FBTyxDQUF1QixDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUVqRCxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7b0JBRTVDLElBQUksaUJBQWlCLENBQUMsTUFBTSxFQUFFO3dCQUUxQixJQUFJLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssU0FBUzs0QkFDNUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7NEJBRS9DLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7NEJBRTFELEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO3lCQUVsRDtxQkFFSjtvQkFFRCxJQUFJLGlCQUFpQixDQUFDLElBQUksRUFBRTt3QkFDeEIsR0FBRyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFFMUQsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ2hEO29CQUVELE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFbkIsQ0FBQyxDQUFDLENBQUM7WUFFUCxDQUFDLENBQUMsQ0FBQztRQUVQLENBQUM7S0FBQTtJQUVPLG9CQUFvQixDQUFDLEtBQTJCO1FBRXBELE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNsQyxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFN0IsTUFBTSxrQkFBa0IsR0FBdUI7WUFDM0MsT0FBTztZQUNQLFVBQVUsRUFBRTtnQkFDUixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7Z0JBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTthQUN0QjtTQUNKLENBQUM7UUFFRixPQUFPLGtCQUFrQixDQUFDO0lBRTlCLENBQUM7O0FBMUZhLGdDQUFhLEdBQUcsb0JBQW9CLENBQUM7QUFGdkQsZ0RBOEZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTY3JlZW5zaG90UmVxdWVzdH0gZnJvbSAnLi9TY3JlZW5zaG90UmVxdWVzdCc7XG5pbXBvcnQge0NhcHR1cmVkU2NyZWVuc2hvdH0gZnJvbSAnLi9DYXB0dXJlZFNjcmVlbnNob3QnO1xuaW1wb3J0IHt3ZWJDb250ZW50c30gZnJvbSBcImVsZWN0cm9uXCI7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vbG9nZ2VyL0xvZ2dlcic7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuLyoqXG4gKiBIYW5kbGVzIHRoZSBhY3R1YWwgc2NyZWVuc2hvdHRpbmcuXG4gKi9cbmV4cG9ydCBjbGFzcyBTY3JlZW5zaG90RGVsZWdhdGUgaW1wbGVtZW50cyBJU2NyZWVuc2hvdERlbGVnYXRlIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgREVMRUdBVEVfTkFNRSA9IFwic2NyZWVuc2hvdERlbGVnYXRlXCI7XG5cbiAgICBwdWJsaWMgYXN5bmMgY2FwdHVyZShpZDogV2ViQ29udGVudHNJRCwgc2NyZWVuc2hvdFJlcXVlc3Q6IFNjcmVlbnNob3RSZXF1ZXN0KTogUHJvbWlzZTxDYXB0dXJlZFNjcmVlbnNob3Q+IHtcblxuICAgICAgICBjb25zdCBuYXRpdmVJbWFnZSA9IGF3YWl0IHRoaXMuY2FwdHVyZU5hdGl2ZUltYWdlKGlkLCBzY3JlZW5zaG90UmVxdWVzdCk7XG4gICAgICAgIHJldHVybiB0aGlzLnRvQ2FwdHVyZWRTY3JlZW5zaG90KG5hdGl2ZUltYWdlKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIHNjcmVlbnNob3QgYW5kIHJldHVybiBhIE5hdGl2ZUltYWdlIG9mIHRoZSByZXN1bHQuXG4gICAgICpcbiAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vZWxlY3Ryb24vZWxlY3Ryb24vYmxvYi9tYXN0ZXIvZG9jcy9hcGkvbmF0aXZlLWltYWdlLm1kXG4gICAgICpcbiAgICAgKiBAcGFyYW0gd2ViQ29udGVudHMgdGhlIHJlY3Qgb2YgdGhlIHNjcmVlbiB3aGVyZSB0byB0YWtlIHRoZSBzY3JlZW5zaG90LlxuICAgICAqIEBwYXJhbSBzY3JlZW5zaG90UmVxdWVzdCBUaGUgcmVjdCBkYXRhIGZvciB3aGVyZSB0byBjYXB0dXJlIG9uIHRoZSBwYWdlLlxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9IGZvciB7TmF0aXZlSW1hZ2V9LiBZb3UgY2FuIGNhbGwgdG9EYXRlVVJMIG9uIHRoZSBpbWFnZVxuICAgICAqICAgICAgICAgd2l0aCBzY2FsZUZhY3RvciBhcyBhbiBvcHRpb24uXG4gICAgICpcbiAgICAgKi9cbiAgICBwcml2YXRlIGFzeW5jIGNhcHR1cmVOYXRpdmVJbWFnZShpZDogV2ViQ29udGVudHNJRCwgc2NyZWVuc2hvdFJlcXVlc3Q6IFNjcmVlbnNob3RSZXF1ZXN0KTogUHJvbWlzZTxFbGVjdHJvbi5OYXRpdmVJbWFnZT4ge1xuXG4gICAgICAgIGNvbnN0IHdlYkNvbnRlbnRzSW5zdGFuY2UgPSB3ZWJDb250ZW50cy5mcm9tSWQoaWQpO1xuXG4gICAgICAgIGlmICghIHNjcmVlbnNob3RSZXF1ZXN0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzY3JlZW5zaG90UmVxdWVzdCByZXF1aXJlZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZWN0OiBFbGVjdHJvbi5SZWN0YW5nbGUgPSBzY3JlZW5zaG90UmVxdWVzdC5yZWN0O1xuXG4gICAgICAgIGlmICghIHJlY3QpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHJlY3RcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aGlzIGlzIGEgd29ya2Fyb3VuZCBmb3IgY2FwdHVyaW5nIHRoZSBpbWFnZS4gIFRoZSBudW1iZXJzIGFyZVxuICAgICAgICAvLyBzb21ldGltZXMgZmxvYXRpbmcgcG9pbnQgYW5kIEkgYXNzdW1lIEVsZWN0cm9uIG5hdGl2ZSBmdW5jdGlvbnMgZG9uJ3RcbiAgICAgICAgLy8gbGlrZSB0aGlzLlxuICAgICAgICByZWN0ID0ge1xuICAgICAgICAgICAgeDogTWF0aC5yb3VuZChzY3JlZW5zaG90UmVxdWVzdC5yZWN0LngpLFxuICAgICAgICAgICAgeTogTWF0aC5yb3VuZChzY3JlZW5zaG90UmVxdWVzdC5yZWN0LnkpLFxuICAgICAgICAgICAgd2lkdGg6IE1hdGgucm91bmQoc2NyZWVuc2hvdFJlcXVlc3QucmVjdC53aWR0aCksXG4gICAgICAgICAgICBoZWlnaHQ6IE1hdGgucm91bmQoc2NyZWVuc2hvdFJlcXVlc3QucmVjdC5oZWlnaHQpXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPEVsZWN0cm9uLk5hdGl2ZUltYWdlPigocmVzb2x2ZSkgPT4ge1xuXG4gICAgICAgICAgICB3ZWJDb250ZW50c0luc3RhbmNlLmNhcHR1cmVQYWdlKHJlY3QsIChpbWFnZSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKHNjcmVlbnNob3RSZXF1ZXN0LnJlc2l6ZSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzY3JlZW5zaG90UmVxdWVzdC5yZXNpemUud2lkdGggIT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NyZWVuc2hvdFJlcXVlc3QucmVzaXplLmhlaWdodCAhPT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZy5pbmZvKFwiUmVzaXppbmcgaW1hZ2UgdG86IFwiLCBzY3JlZW5zaG90UmVxdWVzdC5yZXNpemUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZSA9IGltYWdlLnJlc2l6ZShzY3JlZW5zaG90UmVxdWVzdC5yZXNpemUpO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChzY3JlZW5zaG90UmVxdWVzdC5jcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZy5pbmZvKFwiQ3JvcHBpbmcgaW1hZ2UgdG86IFwiLCBzY3JlZW5zaG90UmVxdWVzdC5yZXNpemUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGltYWdlID0gaW1hZ2UucmVzaXplKHNjcmVlbnNob3RSZXF1ZXN0LmNyb3ApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJlc29sdmUoaW1hZ2UpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgdG9DYXB0dXJlZFNjcmVlbnNob3QoaW1hZ2U6IEVsZWN0cm9uLk5hdGl2ZUltYWdlKSB7XG5cbiAgICAgICAgY29uc3QgZGF0YVVSTCA9IGltYWdlLnRvRGF0YVVSTCgpO1xuICAgICAgICBjb25zdCBzaXplID0gaW1hZ2UuZ2V0U2l6ZSgpO1xuXG4gICAgICAgIGNvbnN0IGNhcHR1cmVkU2NyZWVuc2hvdDogQ2FwdHVyZWRTY3JlZW5zaG90ID0ge1xuICAgICAgICAgICAgZGF0YVVSTCxcbiAgICAgICAgICAgIGRpbWVuc2lvbnM6IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogc2l6ZS53aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHNpemUuaGVpZ2h0XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGNhcHR1cmVkU2NyZWVuc2hvdDtcblxuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTY3JlZW5zaG90RGVsZWdhdGUge1xuICAgIGNhcHR1cmUoaWQ6IFdlYkNvbnRlbnRzSUQsIHNjcmVlbnNob3RSZXF1ZXN0OiBTY3JlZW5zaG90UmVxdWVzdCk6IFByb21pc2U8Q2FwdHVyZWRTY3JlZW5zaG90Pjtcbn1cblxuZXhwb3J0IHR5cGUgV2ViQ29udGVudHNJRCA9IG51bWJlcjtcbiJdfQ==