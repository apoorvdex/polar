"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractWebviewWebContentsDriver_1 = require("./AbstractWebviewWebContentsDriver");
const Logger_1 = require("../../logger/Logger");
const log = Logger_1.Logger.create();
class BrowserWebContentsDriver extends AbstractWebviewWebContentsDriver_1.AbstractWebviewWebContentsDriver {
    constructor(browserProfile) {
        super(browserProfile, "./apps/browser/index.html");
    }
}
exports.BrowserWebContentsDriver = BrowserWebContentsDriver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJvd3NlcldlYkNvbnRlbnRzRHJpdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQnJvd3NlcldlYkNvbnRlbnRzRHJpdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUZBQW9GO0FBRXBGLGdEQUEyQztBQUUzQyxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSx3QkFBeUIsU0FBUSxtRUFBZ0M7SUFFMUUsWUFBWSxjQUE4QjtRQUN0QyxLQUFLLENBQUMsY0FBYyxFQUFFLDJCQUEyQixDQUFDLENBQUM7SUFDdkQsQ0FBQztDQUVKO0FBTkQsNERBTUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Fic3RyYWN0V2Vidmlld1dlYkNvbnRlbnRzRHJpdmVyfSBmcm9tICcuL0Fic3RyYWN0V2Vidmlld1dlYkNvbnRlbnRzRHJpdmVyJztcbmltcG9ydCB7QnJvd3NlclByb2ZpbGV9IGZyb20gJy4uL0Jyb3dzZXJQcm9maWxlJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi9sb2dnZXIvTG9nZ2VyJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgY2xhc3MgQnJvd3NlcldlYkNvbnRlbnRzRHJpdmVyIGV4dGVuZHMgQWJzdHJhY3RXZWJ2aWV3V2ViQ29udGVudHNEcml2ZXIge1xuXG4gICAgY29uc3RydWN0b3IoYnJvd3NlclByb2ZpbGU6IEJyb3dzZXJQcm9maWxlKSB7XG4gICAgICAgIHN1cGVyKGJyb3dzZXJQcm9maWxlLCBcIi4vYXBwcy9icm93c2VyL2luZGV4Lmh0bWxcIik7XG4gICAgfVxuXG59XG4iXX0=