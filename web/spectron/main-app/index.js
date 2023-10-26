"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SpectronMain2_1 = require("../../js/test/SpectronMain2");
const MemoryDatastore_1 = require("../../js/datastore/MemoryDatastore");
const Logging_1 = require("../../js/logger/Logging");
const MainApp_1 = require("../../js/apps/main/MainApp");
const BrowserWindowRegistry_1 = require("../../js/electron/framework/BrowserWindowRegistry");
const chai_1 = require("chai");
const wait_for_expect_1 = __importDefault(require("wait-for-expect"));
const Logger_1 = require("../../js/logger/Logger");
const FilePaths_1 = require("../../js/util/FilePaths");
const Files_1 = require("../../js/util/Files");
const PolarDataDir_1 = require("../../js/test/PolarDataDir");
const AppPath_1 = require("../../js/electron/app_path/AppPath");
const log = Logger_1.Logger.create();
let polarDir;
let mainAppController;
AppPath_1.AppPath.set(FilePaths_1.FilePaths.resolve(__dirname, "..", "..", ".."));
function createWindow() {
    return __awaiter(this, void 0, void 0, function* () {
        polarDir = yield setupNewDataDir();
        const datastore = new MemoryDatastore_1.MemoryDatastore();
        yield datastore.init();
        yield Logging_1.Logging.init();
        const mainApp = new MainApp_1.MainApp(datastore);
        const mainAppState = yield mainApp.start();
        mainAppController = mainAppState.mainAppController;
        return mainAppState.mainWindow;
    });
}
SpectronMain2_1.SpectronMain2.create({ windowFactory: createWindow }).run((state) => __awaiter(this, void 0, void 0, function* () {
    log.info("Waiting for repository to show...");
    yield wait_for_expect_1.default(() => {
        const windows = BrowserWindowRegistry_1.BrowserWindowRegistry.tagged({ name: 'app', value: 'repository' });
        chai_1.assert.ok(windows.length === 1);
    });
    yield mainAppController.handleLoadDoc(polarDir.files[0]);
    yield mainAppController.handleLoadDoc(polarDir.files[1]);
    yield state.testResultWriter.write(true);
}));
function setupNewDataDir() {
    return __awaiter(this, void 0, void 0, function* () {
        const dataDir = yield PolarDataDir_1.PolarDataDir.useFreshDirectory('.polar-main-app');
        log.info("Using new dataDir: " + dataDir);
        const stashDir = FilePaths_1.FilePaths.create(dataDir, 'stash');
        const filenames = ['example.pdf', 'example.phz'];
        const files = [];
        for (const filename of filenames) {
            const srcPath = FilePaths_1.FilePaths.join(__dirname, 'files', filename);
            const targetPath = FilePaths_1.FilePaths.join(stashDir, filename);
            yield Files_1.Files.copyFileAsync(srcPath, targetPath);
            files.push(targetPath);
        }
        return {
            files
        };
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBRTFELHdFQUFtRTtBQUNuRSxxREFBZ0Q7QUFDaEQsd0RBQW1EO0FBRW5ELDZGQUF3RjtBQUV4RiwrQkFBNEI7QUFDNUIsc0VBQTRDO0FBQzVDLG1EQUE4QztBQUM5Qyx1REFBa0Q7QUFDbEQsK0NBQTBDO0FBRTFDLDZEQUF3RDtBQUN4RCxnRUFBMkQ7QUFJM0QsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLElBQUksUUFBOEIsQ0FBQztBQUNuQyxJQUFJLGlCQUFnRCxDQUFDO0FBRXJELGlCQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7QUFFNUQsU0FBZSxZQUFZOztRQUV2QixRQUFRLEdBQUcsTUFBTSxlQUFlLEVBQUUsQ0FBQztRQUVuQyxNQUFNLFNBQVMsR0FBYyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztRQUVuRCxNQUFNLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUV2QixNQUFNLGlCQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFckIsTUFBTSxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXZDLE1BQU0sWUFBWSxHQUFHLE1BQU0sT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzNDLGlCQUFpQixHQUFHLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQztRQUVuRCxPQUFPLFlBQVksQ0FBQyxVQUFVLENBQUM7SUFFbkMsQ0FBQztDQUFBO0FBRUQsNkJBQWEsQ0FBQyxNQUFNLENBQUMsRUFBQyxhQUFhLEVBQUUsWUFBWSxFQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBTSxLQUFLLEVBQUMsRUFBRTtJQUVsRSxHQUFHLENBQUMsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLENBQUM7SUFFOUMsTUFBTSx5QkFBYSxDQUFDLEdBQUcsRUFBRTtRQUNyQixNQUFNLE9BQU8sR0FBRyw2Q0FBcUIsQ0FBQyxNQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUMsQ0FBQyxDQUFDO1FBQ2pGLGFBQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQztJQUVwQyxDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0saUJBQWtCLENBQUMsYUFBYSxDQUFDLFFBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUUzRCxNQUFNLGlCQUFrQixDQUFDLGFBQWEsQ0FBQyxRQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFVM0QsTUFBTSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRTdDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxTQUFlLGVBQWU7O1FBRTFCLE1BQU0sT0FBTyxHQUFHLE1BQU0sMkJBQVksQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRXhFLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsT0FBTyxDQUFDLENBQUM7UUFFMUMsTUFBTSxRQUFRLEdBQUcscUJBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXBELE1BQU0sU0FBUyxHQUFHLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRWpELE1BQU0sS0FBSyxHQUFhLEVBQUUsQ0FBQztRQUUzQixLQUFLLE1BQU0sUUFBUSxJQUFJLFNBQVMsRUFBRTtZQUU5QixNQUFNLE9BQU8sR0FBRyxxQkFBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQzdELE1BQU0sVUFBVSxHQUFHLHFCQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUV0RCxNQUFNLGFBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBRS9DLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDMUI7UUFFRCxPQUFPO1lBQ0gsS0FBSztTQUNSLENBQUM7SUFFTixDQUFDO0NBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NwZWN0cm9uTWFpbjJ9IGZyb20gJy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb25NYWluMic7XG5pbXBvcnQge0RhdGFzdG9yZX0gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL0RhdGFzdG9yZSc7XG5pbXBvcnQge01lbW9yeURhdGFzdG9yZX0gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL01lbW9yeURhdGFzdG9yZSc7XG5pbXBvcnQge0xvZ2dpbmd9IGZyb20gJy4uLy4uL2pzL2xvZ2dlci9Mb2dnaW5nJztcbmltcG9ydCB7TWFpbkFwcH0gZnJvbSAnLi4vLi4vanMvYXBwcy9tYWluL01haW5BcHAnO1xuaW1wb3J0IEJyb3dzZXJXaW5kb3cgPSBFbGVjdHJvbi5Ccm93c2VyV2luZG93O1xuaW1wb3J0IHtCcm93c2VyV2luZG93UmVnaXN0cnl9IGZyb20gJy4uLy4uL2pzL2VsZWN0cm9uL2ZyYW1ld29yay9Ccm93c2VyV2luZG93UmVnaXN0cnknO1xuaW1wb3J0IHt3YWl0fSBmcm9tICdkb20tdGVzdGluZy1saWJyYXJ5JztcbmltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcbmltcG9ydCB3YWl0Rm9yRXhwZWN0IGZyb20gJ3dhaXQtZm9yLWV4cGVjdCc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vLi4vanMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0ZpbGVQYXRoc30gZnJvbSAnLi4vLi4vanMvdXRpbC9GaWxlUGF0aHMnO1xuaW1wb3J0IHtGaWxlc30gZnJvbSAnLi4vLi4vanMvdXRpbC9GaWxlcyc7XG5pbXBvcnQge01haW5BcHBDb250cm9sbGVyfSBmcm9tICcuLi8uLi9qcy9hcHBzL21haW4vTWFpbkFwcENvbnRyb2xsZXInO1xuaW1wb3J0IHtQb2xhckRhdGFEaXJ9IGZyb20gJy4uLy4uL2pzL3Rlc3QvUG9sYXJEYXRhRGlyJztcbmltcG9ydCB7QXBwUGF0aH0gZnJvbSAnLi4vLi4vanMvZWxlY3Ryb24vYXBwX3BhdGgvQXBwUGF0aCc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHtQcmVjb25kaXRpb25zfSBmcm9tICcuLi8uLi9qcy9QcmVjb25kaXRpb25zJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5sZXQgcG9sYXJEaXI6IFBvbGFyRGlyIHwgdW5kZWZpbmVkO1xubGV0IG1haW5BcHBDb250cm9sbGVyOiBNYWluQXBwQ29udHJvbGxlciB8IHVuZGVmaW5lZDtcblxuQXBwUGF0aC5zZXQoRmlsZVBhdGhzLnJlc29sdmUoX19kaXJuYW1lLCBcIi4uXCIsIFwiLi5cIiwgXCIuLlwiKSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVdpbmRvdygpOiBQcm9taXNlPEJyb3dzZXJXaW5kb3c+IHtcblxuICAgIHBvbGFyRGlyID0gYXdhaXQgc2V0dXBOZXdEYXRhRGlyKCk7XG5cbiAgICBjb25zdCBkYXRhc3RvcmU6IERhdGFzdG9yZSA9IG5ldyBNZW1vcnlEYXRhc3RvcmUoKTtcblxuICAgIGF3YWl0IGRhdGFzdG9yZS5pbml0KCk7XG5cbiAgICBhd2FpdCBMb2dnaW5nLmluaXQoKTtcblxuICAgIGNvbnN0IG1haW5BcHAgPSBuZXcgTWFpbkFwcChkYXRhc3RvcmUpO1xuXG4gICAgY29uc3QgbWFpbkFwcFN0YXRlID0gYXdhaXQgbWFpbkFwcC5zdGFydCgpO1xuICAgIG1haW5BcHBDb250cm9sbGVyID0gbWFpbkFwcFN0YXRlLm1haW5BcHBDb250cm9sbGVyO1xuXG4gICAgcmV0dXJuIG1haW5BcHBTdGF0ZS5tYWluV2luZG93O1xuXG59XG5cblNwZWN0cm9uTWFpbjIuY3JlYXRlKHt3aW5kb3dGYWN0b3J5OiBjcmVhdGVXaW5kb3d9KS5ydW4oYXN5bmMgc3RhdGUgPT4ge1xuXG4gICAgbG9nLmluZm8oXCJXYWl0aW5nIGZvciByZXBvc2l0b3J5IHRvIHNob3cuLi5cIik7XG5cbiAgICBhd2FpdCB3YWl0Rm9yRXhwZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgd2luZG93cyA9IEJyb3dzZXJXaW5kb3dSZWdpc3RyeS50YWdnZWQoe25hbWU6ICdhcHAnLCB2YWx1ZTogJ3JlcG9zaXRvcnknfSk7XG4gICAgICAgIGFzc2VydC5vayh3aW5kb3dzLmxlbmd0aCA9PT0gMSk7XG5cbiAgICB9KTtcblxuICAgIGF3YWl0IG1haW5BcHBDb250cm9sbGVyIS5oYW5kbGVMb2FkRG9jKHBvbGFyRGlyIS5maWxlc1swXSk7XG5cbiAgICBhd2FpdCBtYWluQXBwQ29udHJvbGxlciEuaGFuZGxlTG9hZERvYyhwb2xhckRpciEuZmlsZXNbMV0pO1xuXG4gICAgLy8gVE9ETzogbm93IG1ha2Ugc3VyZSB0aGVpciBtZXRhZGF0YSBhcHBlYXJzIGluIHRoZSByZXBvXG5cbiAgICAvLyBUT0RPOiBtYWtlIHN1cmUgdGhlIGZsYXNoY2FyZCBhcHAgaXMgcmVhZHkgYW5kIHJ1bm5pbmcgaW4gdGhlIGJhY2tncm91bmRcblxuICAgIC8vIFRPRE86IHN3aXRjaCB0byB0aGUgbWFpbiByZXBvc2l0b3J5IGFwcCBhbmQgZG91YmxlIGNsaWNrIG9uIGEgZG9jdW1lbnQuXG4gICAgLy8gTWlnaHQgbmVlZCB0byBkbyB0aGlzIGluIHRoZSByZW5kZXJlciBjb250ZXh0IHRob3VnaCBhcyBwYXJ0IG9mIGFub3RoZXJcbiAgICAvLyB0ZXN0LlxuXG4gICAgYXdhaXQgc3RhdGUudGVzdFJlc3VsdFdyaXRlci53cml0ZSh0cnVlKTtcblxufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIHNldHVwTmV3RGF0YURpcigpOiBQcm9taXNlPFBvbGFyRGlyPiB7XG5cbiAgICBjb25zdCBkYXRhRGlyID0gYXdhaXQgUG9sYXJEYXRhRGlyLnVzZUZyZXNoRGlyZWN0b3J5KCcucG9sYXItbWFpbi1hcHAnKTtcblxuICAgIGxvZy5pbmZvKFwiVXNpbmcgbmV3IGRhdGFEaXI6IFwiICsgZGF0YURpcik7XG5cbiAgICBjb25zdCBzdGFzaERpciA9IEZpbGVQYXRocy5jcmVhdGUoZGF0YURpciwgJ3N0YXNoJyk7XG5cbiAgICBjb25zdCBmaWxlbmFtZXMgPSBbJ2V4YW1wbGUucGRmJywgJ2V4YW1wbGUucGh6J107XG5cbiAgICBjb25zdCBmaWxlczogc3RyaW5nW10gPSBbXTtcblxuICAgIGZvciAoY29uc3QgZmlsZW5hbWUgb2YgZmlsZW5hbWVzKSB7XG5cbiAgICAgICAgY29uc3Qgc3JjUGF0aCA9IEZpbGVQYXRocy5qb2luKF9fZGlybmFtZSwgJ2ZpbGVzJywgZmlsZW5hbWUpO1xuICAgICAgICBjb25zdCB0YXJnZXRQYXRoID0gRmlsZVBhdGhzLmpvaW4oc3Rhc2hEaXIsIGZpbGVuYW1lKTtcblxuICAgICAgICBhd2FpdCBGaWxlcy5jb3B5RmlsZUFzeW5jKHNyY1BhdGgsIHRhcmdldFBhdGgpO1xuXG4gICAgICAgIGZpbGVzLnB1c2godGFyZ2V0UGF0aCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZmlsZXNcbiAgICB9O1xuXG59XG5cbmludGVyZmFjZSBQb2xhckRpciB7XG4gICAgLy8gdGhlIGZpbGVzIHdlIGNhbiBvcGVuLi4uXG4gICAgZmlsZXM6IHN0cmluZ1tdO1xufVxuIl19