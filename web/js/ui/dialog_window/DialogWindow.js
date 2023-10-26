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
const Logger_1 = require("../../logger/Logger");
const BrowserWindowPromises_1 = require("../../electron/framework/BrowserWindowPromises");
const WebContentsPromises_1 = require("../../electron/framework/WebContentsPromises");
const DialogWindowReference_1 = require("./DialogWindowReference");
const DialogWindowMenu_1 = require("./DialogWindowMenu");
const ResourcePaths_1 = require("../../electron/webresource/ResourcePaths");
const Preconditions_1 = require("../../Preconditions");
const log = Logger_1.Logger.create();
const BROWSER_WINDOW_OPTIONS = {
    backgroundColor: '#FFF',
    width: 800,
    height: 600,
    show: false,
    webPreferences: {
        webSecurity: false,
        nodeIntegration: true,
        defaultEncoding: 'UTF-8'
    }
};
class DialogWindow {
    constructor(window, dialogWindowReference) {
        this.window = window;
        this.dialogWindowReference = dialogWindowReference;
    }
    show() {
        this.window.show();
    }
    hide() {
        this.window.hide();
    }
    destroy() {
        this.hide();
        this.window.destroy();
    }
    static create(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let browserWindowOptions = Object.assign({}, BROWSER_WINDOW_OPTIONS);
            log.info("Starting with browser options: ", browserWindowOptions);
            browserWindowOptions.width = options.width;
            browserWindowOptions.height = options.height;
            browserWindowOptions.show = options.show;
            let window = new electron_1.BrowserWindow(browserWindowOptions);
            window.setMenu(DialogWindowMenu_1.DialogWindowMenu.create());
            window.webContents.on('new-window', (e) => {
                e.preventDefault();
            });
            window.webContents.on('will-navigate', (e) => {
                e.preventDefault();
            });
            window.on('close', (e) => {
                e.preventDefault();
                window.hide();
            });
            let readyToShowPromise = BrowserWindowPromises_1.BrowserWindowPromises.once(window).readyToShow();
            let loadPromise = WebContentsPromises_1.WebContentsPromises.once(window.webContents).load();
            switch (options.resource.type) {
                case ResourceType.FILE:
                    window.loadFile(options.resource.value);
                    break;
                case ResourceType.URL:
                    window.loadURL(options.resource.value, {});
                    break;
                case ResourceType.APP:
                    let appURL = ResourcePaths_1.ResourcePaths.resourceURLFromRelativeURL(options.resource.value);
                    log.info("Loading app URL:", appURL);
                    window.loadURL(appURL, {});
                    break;
            }
            yield Promise.all([readyToShowPromise, loadPromise]);
            log.info("Window is now ready to show.");
            let dialogWindow = new DialogWindow(window, new DialogWindowReference_1.DialogWindowReference(window.id));
            if (options.show) {
                dialogWindow.show();
            }
            return dialogWindow;
        });
    }
}
exports.DialogWindow = DialogWindow;
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["FILE"] = 0] = "FILE";
    ResourceType[ResourceType["URL"] = 1] = "URL";
    ResourceType[ResourceType["APP"] = 2] = "APP";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
class Resource {
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }
}
exports.Resource = Resource;
class DialogWindowOptions {
    constructor(resource, width = 800, height = 600, show) {
        this.width = 800;
        this.height = 600;
        this.show = false;
        Preconditions_1.Preconditions.assertNotNull(resource);
        this.resource = resource;
        if (width !== undefined)
            this.width = width;
        if (height !== undefined)
            this.height = height;
        if (show !== undefined)
            this.show = show;
    }
    static create(obj) {
        let result = Object.create(DialogWindowOptions.prototype);
        Object.assign(result, obj);
        return result;
    }
}
exports.DialogWindowOptions = DialogWindowOptions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlhbG9nV2luZG93LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRGlhbG9nV2luZG93LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1Q0FBdUM7QUFDdkMsZ0RBQTJDO0FBQzNDLDBGQUFxRjtBQUNyRixzRkFBaUY7QUFDakYsbUVBQThEO0FBQzlELHlEQUFvRDtBQUNwRCw0RUFBdUU7QUFDdkUsdURBQWtEO0FBRWxELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFNLHNCQUFzQixHQUFHO0lBQzNCLGVBQWUsRUFBRSxNQUFNO0lBQ3ZCLEtBQUssRUFBRSxHQUFHO0lBQ1YsTUFBTSxFQUFFLEdBQUc7SUFDWCxJQUFJLEVBQUUsS0FBSztJQUNYLGNBQWMsRUFBRTtRQUNaLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLGVBQWUsRUFBRSxJQUFJO1FBQ3JCLGVBQWUsRUFBRSxPQUFPO0tBQzNCO0NBQ0osQ0FBQztBQUtGLE1BQWEsWUFBWTtJQU1yQixZQUFZLE1BQXFCLEVBQUUscUJBQTRDO1FBQzNFLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxxQkFBcUIsQ0FBQztJQUN2RCxDQUFDO0lBRUQsSUFBSTtRQUNBLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELElBQUk7UUFDQSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxPQUFPO1FBQ0gsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsTUFBTSxDQUFPLE1BQU0sQ0FBQyxPQUE0Qjs7WUFFNUMsSUFBSSxvQkFBb0IsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxzQkFBc0Is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QVE7SUFLakIsWUFBWSxJQUFrQixFQUFFLEtBQWE7UUFDekMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztDQUVKO0FBVkQsNEJBVUM7QUFFRCxNQUFhLG1CQUFtQjtJQVU1QixZQUFZLFFBQWtCLEVBQUUsUUFBZ0IsR0FBRyxFQUFFLFNBQWlCLEdBQUcsRUFBRSxJQUFjO1FBTmxGLFVBQUssR0FBVyxHQUFHLENBQUM7UUFFcEIsV0FBTSxHQUFXLEdBQUcsQ0FBQztRQUVyQixTQUFJLEdBQVksS0FBSyxDQUFDO1FBSXpCLDZCQUFhLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXRDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBRXpCLElBQUcsS0FBSyxLQUFLLFNBQVM7WUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFFdkIsSUFBRyxNQUFNLEtBQUssU0FBUztZQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUV6QixJQUFHLElBQUksS0FBSyxTQUFTO1lBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBRXpCLENBQUM7SUFFTSxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQVE7UUFDekIsSUFBSSxNQUFNLEdBQXdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0UsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDM0IsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztDQUVKO0FBakNELGtEQWlDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QnJvd3NlcldpbmRvd30gZnJvbSAnZWxlY3Ryb24nO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uLy4uL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtCcm93c2VyV2luZG93UHJvbWlzZXN9IGZyb20gJy4uLy4uL2VsZWN0cm9uL2ZyYW1ld29yay9Ccm93c2VyV2luZG93UHJvbWlzZXMnO1xuaW1wb3J0IHtXZWJDb250ZW50c1Byb21pc2VzfSBmcm9tICcuLi8uLi9lbGVjdHJvbi9mcmFtZXdvcmsvV2ViQ29udGVudHNQcm9taXNlcyc7XG5pbXBvcnQge0RpYWxvZ1dpbmRvd1JlZmVyZW5jZX0gZnJvbSAnLi9EaWFsb2dXaW5kb3dSZWZlcmVuY2UnO1xuaW1wb3J0IHtEaWFsb2dXaW5kb3dNZW51fSBmcm9tICcuL0RpYWxvZ1dpbmRvd01lbnUnO1xuaW1wb3J0IHtSZXNvdXJjZVBhdGhzfSBmcm9tICcuLi8uLi9lbGVjdHJvbi93ZWJyZXNvdXJjZS9SZXNvdXJjZVBhdGhzJztcbmltcG9ydCB7UHJlY29uZGl0aW9uc30gZnJvbSAnLi4vLi4vUHJlY29uZGl0aW9ucyc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuY29uc3QgQlJPV1NFUl9XSU5ET1dfT1BUSU9OUyA9IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZGJyxcbiAgICB3aWR0aDogODAwLFxuICAgIGhlaWdodDogNjAwLFxuICAgIHNob3c6IGZhbHNlLFxuICAgIHdlYlByZWZlcmVuY2VzOiB7XG4gICAgICAgIHdlYlNlY3VyaXR5OiBmYWxzZSxcbiAgICAgICAgbm9kZUludGVncmF0aW9uOiB0cnVlLFxuICAgICAgICBkZWZhdWx0RW5jb2Rpbmc6ICdVVEYtOCdcbiAgICB9XG59O1xuXG4vKipcbiAqIEBNYWluQ29udGV4dFxuICovXG5leHBvcnQgY2xhc3MgRGlhbG9nV2luZG93IHtcblxuICAgIHB1YmxpYyByZWFkb25seSB3aW5kb3c6IEJyb3dzZXJXaW5kb3c7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgZGlhbG9nV2luZG93UmVmZXJlbmNlOiBEaWFsb2dXaW5kb3dSZWZlcmVuY2U7XG5cbiAgICBjb25zdHJ1Y3Rvcih3aW5kb3c6IEJyb3dzZXJXaW5kb3csIGRpYWxvZ1dpbmRvd1JlZmVyZW5jZTogRGlhbG9nV2luZG93UmVmZXJlbmNlKSB7XG4gICAgICAgIHRoaXMud2luZG93ID0gd2luZG93O1xuICAgICAgICB0aGlzLmRpYWxvZ1dpbmRvd1JlZmVyZW5jZSA9IGRpYWxvZ1dpbmRvd1JlZmVyZW5jZTtcbiAgICB9XG5cbiAgICBzaG93KCk6IHZvaWQge1xuICAgICAgICB0aGlzLndpbmRvdy5zaG93KCk7XG4gICAgfVxuXG4gICAgaGlkZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy53aW5kb3cuaGlkZSgpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB0aGlzLndpbmRvdy5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFzeW5jIGNyZWF0ZShvcHRpb25zOiBEaWFsb2dXaW5kb3dPcHRpb25zKTogUHJvbWlzZTxEaWFsb2dXaW5kb3c+IHtcblxuICAgICAgICBsZXQgYnJvd3NlcldpbmRvd09wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBCUk9XU0VSX1dJTkRPV19PUFRJT05TKTtcblxuICAgICAgICBsb2cuaW5mbyhcIlN0YXJ0aW5nIHdpdGggYnJvd3NlciBvcHRpb25zOiBcIiwgYnJvd3NlcldpbmRvd09wdGlvbnMpO1xuXG4gICAgICAgIGJyb3dzZXJXaW5kb3dPcHRpb25zLndpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICAgICAgYnJvd3NlcldpbmRvd09wdGlvbnMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG4gICAgICAgIGJyb3dzZXJXaW5kb3dPcHRpb25zLnNob3cgPSBvcHRpb25zLnNob3c7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBicm93c2VyIHdpbmRvdy5cbiAgICAgICAgbGV0IHdpbmRvdyA9IG5ldyBCcm93c2VyV2luZG93KGJyb3dzZXJXaW5kb3dPcHRpb25zKTtcbiAgICAgICAgd2luZG93LnNldE1lbnUoRGlhbG9nV2luZG93TWVudS5jcmVhdGUoKSk7XG5cbiAgICAgICAgd2luZG93LndlYkNvbnRlbnRzLm9uKCduZXctd2luZG93JywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2luZG93LndlYkNvbnRlbnRzLm9uKCd3aWxsLW5hdmlnYXRlJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2luZG93Lm9uKCdjbG9zZScsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB3aW5kb3cuaGlkZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgcmVhZHlUb1Nob3dQcm9taXNlID0gQnJvd3NlcldpbmRvd1Byb21pc2VzLm9uY2Uod2luZG93KS5yZWFkeVRvU2hvdygpO1xuXG4gICAgICAgIGxldCBsb2FkUHJvbWlzZSA9IFdlYkNvbnRlbnRzUHJvbWlzZXMub25jZSh3aW5kb3cud2ViQ29udGVudHMpLmxvYWQoKTtcblxuICAgICAgICBzd2l0Y2ggKG9wdGlvbnMucmVzb3VyY2UudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBSZXNvdXJjZVR5cGUuRklMRTpcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9hZEZpbGUob3B0aW9ucy5yZXNvdXJjZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFJlc291cmNlVHlwZS5VUkw6XG4gICAgICAgICAgICAgICAgd2luZG93LmxvYWRVUkwob3B0aW9ucy5yZXNvdXJjZS52YWx1ZSwge30pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFJlc291cmNlVHlwZS5BUFA6XG5cbiAgICAgICAgICAgICAgICBsZXQgYXBwVVJMID0gUmVzb3VyY2VQYXRocy5yZXNvdXJjZVVSTEZyb21SZWxhdGl2ZVVSTChvcHRpb25zLnJlc291cmNlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICBsb2cuaW5mbyhcIkxvYWRpbmcgYXBwIFVSTDpcIiAsIGFwcFVSTCk7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvYWRVUkwoYXBwVVJMLCB7fSk7XG4gICAgICAgICAgICAgICAgYnJlYWtcblxuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW3JlYWR5VG9TaG93UHJvbWlzZSwgbG9hZFByb21pc2VdKTtcblxuICAgICAgICBsb2cuaW5mbyhcIldpbmRvdyBpcyBub3cgcmVhZHkgdG8gc2hvdy5cIik7XG4gICAgICAgIGxldCBkaWFsb2dXaW5kb3cgPSBuZXcgRGlhbG9nV2luZG93KHdpbmRvdywgbmV3IERpYWxvZ1dpbmRvd1JlZmVyZW5jZSh3aW5kb3cuaWQpKTtcblxuICAgICAgICBpZihvcHRpb25zLnNob3cpIHtcbiAgICAgICAgICAgIGRpYWxvZ1dpbmRvdy5zaG93KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGlhbG9nV2luZG93O1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBlbnVtIFJlc291cmNlVHlwZSB7XG4gICAgRklMRSxcbiAgICBVUkwsXG4gICAgQVBQXG59XG5cbmV4cG9ydCBjbGFzcyBSZXNvdXJjZSB7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgdHlwZTogUmVzb3VyY2VUeXBlO1xuICAgIHB1YmxpYyByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IodHlwZTogUmVzb3VyY2VUeXBlLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIERpYWxvZ1dpbmRvd09wdGlvbnMge1xuXG4gICAgcHVibGljIHJlYWRvbmx5IHJlc291cmNlOiBSZXNvdXJjZTtcblxuICAgIHB1YmxpYyB3aWR0aDogbnVtYmVyID0gODAwO1xuXG4gICAgcHVibGljIGhlaWdodDogbnVtYmVyID0gNjAwO1xuXG4gICAgcHVibGljIHNob3c6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHJlc291cmNlOiBSZXNvdXJjZSwgd2lkdGg6IG51bWJlciA9IDgwMCwgaGVpZ2h0OiBudW1iZXIgPSA2MDAsIHNob3c/OiBib29sZWFuKSB7XG5cbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnROb3ROdWxsKHJlc291cmNlKTtcblxuICAgICAgICB0aGlzLnJlc291cmNlID0gcmVzb3VyY2U7XG5cbiAgICAgICAgaWYod2lkdGggIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcblxuICAgICAgICBpZihoZWlnaHQgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgICAgIGlmKHNob3cgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHRoaXMuc2hvdyA9IHNob3c7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZShvYmo6IGFueSkge1xuICAgICAgICBsZXQgcmVzdWx0OiBEaWFsb2dXaW5kb3dPcHRpb25zID0gT2JqZWN0LmNyZWF0ZShEaWFsb2dXaW5kb3dPcHRpb25zLnByb3RvdHlwZSk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24ocmVzdWx0LCBvYmopO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxufVxuXG4iXX0=