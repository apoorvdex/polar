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
const MainAppBrowserWindowFactory_1 = require("./MainAppBrowserWindowFactory");
const ResourcePaths_1 = require("../../electron/webresource/ResourcePaths");
const SingletonBrowserWindow_1 = require("../../electron/framework/SingletonBrowserWindow");
const Logger_1 = require("../../logger/Logger");
const Dictionaries_1 = require("../../util/Dictionaries");
const PDFDownloadHandlers_1 = require("../../capture/PDFDownloadHandlers");
const log = Logger_1.Logger.create();
class AppLauncher {
    static launchRepositoryApp() {
        return __awaiter(this, void 0, void 0, function* () {
            const browserWindowTag = { name: 'app', value: 'repository' };
            const browserWindow = yield SingletonBrowserWindow_1.SingletonBrowserWindow.getInstance(browserWindowTag, () => __awaiter(this, void 0, void 0, function* () {
                const url = ResourcePaths_1.ResourcePaths.resourceURLFromRelativeURL('/apps/repository/index.html', false);
                log.info("Loading app from URL: " + url);
                const browserWindowOptions = Dictionaries_1.Dictionaries.copyOf(MainAppBrowserWindowFactory_1.BROWSER_WINDOW_OPTIONS);
                browserWindowOptions.webPreferences.partition = 'persist:polar-app';
                return yield MainAppBrowserWindowFactory_1.MainAppBrowserWindowFactory.createWindow(browserWindowOptions, url);
            }));
            PDFDownloadHandlers_1.PDFDownloadHandlers.create(browserWindow.webContents);
            browserWindow.focus();
            return browserWindow;
        });
    }
}
exports.AppLauncher = AppLauncher;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwTGF1bmNoZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBcHBMYXVuY2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsK0VBQWtHO0FBQ2xHLDRFQUF1RTtBQUN2RSw0RkFBdUY7QUFDdkYsZ0RBQTJDO0FBQzNDLDBEQUFxRDtBQUNyRCwyRUFBc0U7QUFFdEUsTUFBTSxHQUFHLEdBQUksZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTdCLE1BQWEsV0FBVztJQUtiLE1BQU0sQ0FBTyxtQkFBbUI7O1lBRW5DLE1BQU0sZ0JBQWdCLEdBQUcsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUMsQ0FBQztZQUU1RCxNQUFNLGFBQWEsR0FBRyxNQUFNLCtDQUFzQixDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFTLEVBQUU7Z0JBRXhGLE1BQU0sR0FBRyxHQUFHLDZCQUFhLENBQUMsMEJBQTBCLENBQUMsNkJBQTZCLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQzNGLEdBQUcsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBRXpDLE1BQU0sb0JBQW9CLEdBQUcsMkJBQVksQ0FBQyxNQUFNLENBQUMsb0RBQXNCLENBQUMsQ0FBQztnQkFJekUsb0JBQW9CLENBQUMsY0FBZSxDQUFDLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQztnQkFFckUsT0FBTyxNQUFNLHlEQUEyQixDQUFDLFlBQVksQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUVyRixDQUFDLENBQUEsQ0FBQyxDQUFDO1lBRUgseUNBQW1CLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUV0RCxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFdEIsT0FBTyxhQUFhLENBQUM7UUFFekIsQ0FBQztLQUFBO0NBRUo7QUFoQ0Qsa0NBZ0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCcm93c2VyV2luZG93fSBmcm9tIFwiZWxlY3Ryb25cIjtcbmltcG9ydCB7QlJPV1NFUl9XSU5ET1dfT1BUSU9OUywgTWFpbkFwcEJyb3dzZXJXaW5kb3dGYWN0b3J5fSBmcm9tICcuL01haW5BcHBCcm93c2VyV2luZG93RmFjdG9yeSc7XG5pbXBvcnQge1Jlc291cmNlUGF0aHN9IGZyb20gJy4uLy4uL2VsZWN0cm9uL3dlYnJlc291cmNlL1Jlc291cmNlUGF0aHMnO1xuaW1wb3J0IHtTaW5nbGV0b25Ccm93c2VyV2luZG93fSBmcm9tICcuLi8uLi9lbGVjdHJvbi9mcmFtZXdvcmsvU2luZ2xldG9uQnJvd3NlcldpbmRvdyc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSBcIi4uLy4uL2xvZ2dlci9Mb2dnZXJcIjtcbmltcG9ydCB7RGljdGlvbmFyaWVzfSBmcm9tIFwiLi4vLi4vdXRpbC9EaWN0aW9uYXJpZXNcIjtcbmltcG9ydCB7UERGRG93bmxvYWRIYW5kbGVyc30gZnJvbSAnLi4vLi4vY2FwdHVyZS9QREZEb3dubG9hZEhhbmRsZXJzJztcblxuY29uc3QgbG9nID0gIExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIEFwcExhdW5jaGVyIHtcblxuICAgIC8qKlxuICAgICAqIExhdW5jaCB0aGUgcmVwb3NpdG9yeSBhcHAgb3IgZm9jdXMgaXQgaWYgaXQncyBhbHJlYWR5IGNyZWF0ZWQuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBsYXVuY2hSZXBvc2l0b3J5QXBwKCk6IFByb21pc2U8QnJvd3NlcldpbmRvdz4ge1xuXG4gICAgICAgIGNvbnN0IGJyb3dzZXJXaW5kb3dUYWcgPSB7bmFtZTogJ2FwcCcsIHZhbHVlOiAncmVwb3NpdG9yeSd9O1xuXG4gICAgICAgIGNvbnN0IGJyb3dzZXJXaW5kb3cgPSBhd2FpdCBTaW5nbGV0b25Ccm93c2VyV2luZG93LmdldEluc3RhbmNlKGJyb3dzZXJXaW5kb3dUYWcsIGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdXJsID0gUmVzb3VyY2VQYXRocy5yZXNvdXJjZVVSTEZyb21SZWxhdGl2ZVVSTCgnL2FwcHMvcmVwb3NpdG9yeS9pbmRleC5odG1sJywgZmFsc2UpO1xuICAgICAgICAgICAgbG9nLmluZm8oXCJMb2FkaW5nIGFwcCBmcm9tIFVSTDogXCIgKyB1cmwpO1xuXG4gICAgICAgICAgICBjb25zdCBicm93c2VyV2luZG93T3B0aW9ucyA9IERpY3Rpb25hcmllcy5jb3B5T2YoQlJPV1NFUl9XSU5ET1dfT1BUSU9OUyk7XG5cbiAgICAgICAgICAgIC8vIHVzZSBhICdwb2xhci1hcHAnIHNlc3Npb24gc28gd2UgZG9uJ3QgdXNlIHRoZSBkZWZhdWx0IHNlc3Npb25cbiAgICAgICAgICAgIC8vIHdoaWNoIGlzIGludGVyY2VwdGVkLlxuICAgICAgICAgICAgYnJvd3NlcldpbmRvd09wdGlvbnMud2ViUHJlZmVyZW5jZXMhLnBhcnRpdGlvbiA9ICdwZXJzaXN0OnBvbGFyLWFwcCc7XG5cbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBNYWluQXBwQnJvd3NlcldpbmRvd0ZhY3RvcnkuY3JlYXRlV2luZG93KGJyb3dzZXJXaW5kb3dPcHRpb25zLCB1cmwpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIFBERkRvd25sb2FkSGFuZGxlcnMuY3JlYXRlKGJyb3dzZXJXaW5kb3cud2ViQ29udGVudHMpO1xuXG4gICAgICAgIGJyb3dzZXJXaW5kb3cuZm9jdXMoKTtcblxuICAgICAgICByZXR1cm4gYnJvd3NlcldpbmRvdztcblxuICAgIH1cblxufVxuIl19