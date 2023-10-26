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
const SpectronMain2_1 = require("../../js/test/SpectronMain2");
const SpectronBrowserWindowOptions_1 = require("../../js/test/SpectronBrowserWindowOptions");
const PolarDataDir_1 = require("../../js/test/PolarDataDir");
const WebserverTester_1 = require("../../js/backend/webserver/WebserverTester");
function defaultWindowFactory() {
    return __awaiter(this, void 0, void 0, function* () {
        const mainWindow = new electron_1.BrowserWindow(SpectronBrowserWindowOptions_1.SpectronBrowserWindowOptions.create());
        mainWindow.loadURL('about:blank');
        return mainWindow;
    });
}
const options = {
    windowFactory: defaultWindowFactory
};
SpectronMain2_1.SpectronMain2.create(options).run((state) => __awaiter(this, void 0, void 0, function* () {
    yield PolarDataDir_1.PolarDataDir.useFreshDirectory('.polar-firebase-datastore');
    WebserverTester_1.WebserverTester.run(__dirname);
    const url = `http://localhost:8005/content.html`;
    state.window.loadURL(url);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUNBQTRDO0FBQzVDLCtEQUFnRjtBQUloRiw2RkFBd0Y7QUFDeEYsNkRBQXdEO0FBSXhELGdGQUEyRTtBQUUzRSxTQUFlLG9CQUFvQjs7UUFDL0IsTUFBTSxVQUFVLEdBQUcsSUFBSSx3QkFBYSxDQUFDLDJEQUE0QixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDNUUsVUFBVSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNsQyxPQUFPLFVBQVUsQ0FBQztJQUN0QixDQUFDO0NBQUE7QUFHRCxNQUFNLE9BQU8sR0FBeUI7SUFDbEMsYUFBYSxFQUFFLG9CQUFvQjtDQUN0QyxDQUFDO0FBRUYsNkJBQWEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQU0sS0FBSyxFQUFDLEVBQUU7SUFFNUMsTUFBTSwyQkFBWSxDQUFDLGlCQUFpQixDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFFbEUsaUNBQWUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFL0IsTUFBTSxHQUFHLEdBQUcsb0NBQW9DLENBQUM7SUFDakQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7QUFFOUIsQ0FBQyxDQUFBLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXBwLCBCcm93c2VyV2luZG93fSBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQge0lTcGVjdHJvbk1haW5PcHRpb25zLCBTcGVjdHJvbk1haW4yfSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uTWFpbjInO1xuaW1wb3J0IHtXZWJzZXJ2ZXJDb25maWd9IGZyb20gJy4uLy4uL2pzL2JhY2tlbmQvd2Vic2VydmVyL1dlYnNlcnZlckNvbmZpZyc7XG5pbXBvcnQge1dlYnNlcnZlcn0gZnJvbSAnLi4vLi4vanMvYmFja2VuZC93ZWJzZXJ2ZXIvV2Vic2VydmVyJztcbmltcG9ydCB7RmlsZVJlZ2lzdHJ5fSBmcm9tICcuLi8uLi9qcy9iYWNrZW5kL3dlYnNlcnZlci9GaWxlUmVnaXN0cnknO1xuaW1wb3J0IHtTcGVjdHJvbkJyb3dzZXJXaW5kb3dPcHRpb25zfSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uQnJvd3NlcldpbmRvd09wdGlvbnMnO1xuaW1wb3J0IHtQb2xhckRhdGFEaXJ9IGZyb20gJy4uLy4uL2pzL3Rlc3QvUG9sYXJEYXRhRGlyJztcbmltcG9ydCB7RmlsZVBhdGhzfSBmcm9tICcuLi8uLi9qcy91dGlsL0ZpbGVQYXRocyc7XG5pbXBvcnQgcHJvY2VzcyBmcm9tIFwicHJvY2Vzc1wiO1xuaW1wb3J0IHtBcHBQYXRofSBmcm9tICcuLi8uLi9qcy9lbGVjdHJvbi9hcHBfcGF0aC9BcHBQYXRoJztcbmltcG9ydCB7V2Vic2VydmVyVGVzdGVyfSBmcm9tICcuLi8uLi9qcy9iYWNrZW5kL3dlYnNlcnZlci9XZWJzZXJ2ZXJUZXN0ZXInO1xuXG5hc3luYyBmdW5jdGlvbiBkZWZhdWx0V2luZG93RmFjdG9yeSgpOiBQcm9taXNlPEJyb3dzZXJXaW5kb3c+IHtcbiAgICBjb25zdCBtYWluV2luZG93ID0gbmV3IEJyb3dzZXJXaW5kb3coU3BlY3Ryb25Ccm93c2VyV2luZG93T3B0aW9ucy5jcmVhdGUoKSk7XG4gICAgbWFpbldpbmRvdy5sb2FkVVJMKCdhYm91dDpibGFuaycpO1xuICAgIHJldHVybiBtYWluV2luZG93O1xufVxuXG5cbmNvbnN0IG9wdGlvbnM6IElTcGVjdHJvbk1haW5PcHRpb25zID0ge1xuICAgIHdpbmRvd0ZhY3Rvcnk6IGRlZmF1bHRXaW5kb3dGYWN0b3J5XG59O1xuXG5TcGVjdHJvbk1haW4yLmNyZWF0ZShvcHRpb25zKS5ydW4oYXN5bmMgc3RhdGUgPT4ge1xuXG4gICAgYXdhaXQgUG9sYXJEYXRhRGlyLnVzZUZyZXNoRGlyZWN0b3J5KCcucG9sYXItZmlyZWJhc2UtZGF0YXN0b3JlJyk7XG5cbiAgICBXZWJzZXJ2ZXJUZXN0ZXIucnVuKF9fZGlybmFtZSk7XG5cbiAgICBjb25zdCB1cmwgPSBgaHR0cDovL2xvY2FsaG9zdDo4MDA1L2NvbnRlbnQuaHRtbGA7XG4gICAgc3RhdGUud2luZG93LmxvYWRVUkwodXJsKTtcblxufSk7XG4iXX0=