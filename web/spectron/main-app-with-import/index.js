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
const Logging_1 = require("../../js/logger/Logging");
const MainApp_1 = require("../../js/apps/main/MainApp");
const BrowserWindowRegistry_1 = require("../../js/electron/framework/BrowserWindowRegistry");
const chai_1 = require("chai");
const wait_for_expect_1 = __importDefault(require("wait-for-expect"));
const Logger_1 = require("../../js/logger/Logger");
const FileImportClient_1 = require("../../js/apps/repository/FileImportClient");
const Files_1 = require("../../js/util/Files");
const FilePaths_1 = require("../../js/util/FilePaths");
const PolarDataDir_1 = require("../../js/test/PolarDataDir");
const DiskDatastore_1 = require("../../js/datastore/DiskDatastore");
const AppInstances_1 = require("../../js/electron/framework/AppInstances");
const AppPath_1 = require("../../js/electron/app_path/AppPath");
const FileImportRequests_1 = require("../../js/apps/repository/FileImportRequests");
const log = Logger_1.Logger.create();
AppPath_1.AppPath.set(FilePaths_1.FilePaths.resolve(__dirname, "..", "..", ".."));
function createWindow() {
    return __awaiter(this, void 0, void 0, function* () {
        yield PolarDataDir_1.PolarDataDir.useFreshDirectory('.polar-main-app-with-import');
        const datastore = new DiskDatastore_1.DiskDatastore();
        yield datastore.init();
        yield Logging_1.Logging.init();
        const mainApp = new MainApp_1.MainApp(datastore);
        const mainAppState = yield mainApp.start();
        return mainAppState.mainWindow;
    });
}
SpectronMain2_1.SpectronMain2.create({ windowFactory: createWindow }).run((state) => __awaiter(this, void 0, void 0, function* () {
    log.info("Waiting for repository to show...");
    log.info("Waiting for repository app...");
    yield wait_for_expect_1.default(() => {
        const windows = BrowserWindowRegistry_1.BrowserWindowRegistry.tagged({ name: 'app', value: 'repository' });
        chai_1.assert.ok(windows.length === 1);
    });
    log.info("Waiting for repository app...done");
    const rawPath = FilePaths_1.FilePaths.join(__dirname, "..", "..", "..", "docs", "example.pdf");
    const importFilePath = yield Files_1.Files.realpathAsync(rawPath);
    chai_1.assert.ok(yield Files_1.Files.existsAsync(importFilePath));
    const files = [
        importFilePath
    ];
    yield AppInstances_1.AppInstances.waitForStarted('RepositoryApp');
    log.info("Sending file import client request...");
    FileImportClient_1.FileImportClient.send(FileImportRequests_1.FileImportRequests.fromPaths(files));
    log.info("Trying to find viewer...");
    yield wait_for_expect_1.default(() => {
        const windows = BrowserWindowRegistry_1.BrowserWindowRegistry.tagged({ name: 'type', value: 'viewer' });
        chai_1.assert.ok(windows.length > 0);
    });
    log.info("Trying to find viewer...done");
    const pdfStashPath = FilePaths_1.FilePaths.join(PolarDataDir_1.PolarDataDir.get(), "stash", "12i77BKrNy-example.pdf");
    log.info("Testing for file: " + pdfStashPath);
    chai_1.assert.ok(yield Files_1.Files.existsAsync(pdfStashPath), "File does not exist: " + pdfStashPath);
    yield state.testResultWriter.write(true);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBRzFELHFEQUFnRDtBQUNoRCx3REFBbUQ7QUFDbkQsNkZBQXdGO0FBQ3hGLCtCQUE0QjtBQUM1QixzRUFBNEM7QUFDNUMsbURBQThDO0FBRzlDLGdGQUEyRTtBQUMzRSwrQ0FBMEM7QUFDMUMsdURBQWtEO0FBQ2xELDZEQUF3RDtBQUN4RCxvRUFBK0Q7QUFJL0QsMkVBQXNFO0FBQ3RFLGdFQUEyRDtBQUMzRCxvRkFBK0U7QUFFL0UsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLGlCQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7QUFFNUQsU0FBZSxZQUFZOztRQUV2QixNQUFNLDJCQUFZLENBQUMsaUJBQWlCLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUVwRSxNQUFNLFNBQVMsR0FBYyxJQUFJLDZCQUFhLEVBQUUsQ0FBQztRQUVqRCxNQUFNLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUV2QixNQUFNLGlCQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFckIsTUFBTSxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXZDLE1BQU0sWUFBWSxHQUFHLE1BQU0sT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRTNDLE9BQU8sWUFBWSxDQUFDLFVBQVUsQ0FBQztJQUVuQyxDQUFDO0NBQUE7QUFFRCw2QkFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFNLEtBQUssRUFBQyxFQUFFO0lBRWxFLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUNBQW1DLENBQUMsQ0FBQztJQUU5QyxHQUFHLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUM7SUFFMUMsTUFBTSx5QkFBYSxDQUFDLEdBQUcsRUFBRTtRQUNyQixNQUFNLE9BQU8sR0FBRyw2Q0FBcUIsQ0FBQyxNQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUMsQ0FBQyxDQUFDO1FBQ2pGLGFBQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDLENBQUMsQ0FBQztJQUVILEdBQUcsQ0FBQyxJQUFJLENBQUMsbUNBQW1DLENBQUMsQ0FBQztJQUU5QyxNQUFNLE9BQU8sR0FBRyxxQkFBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ25GLE1BQU0sY0FBYyxHQUFHLE1BQU0sYUFBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxRCxhQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sYUFBSyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBRW5ELE1BQU0sS0FBSyxHQUFHO1FBQ1YsY0FBYztLQUNqQixDQUFDO0lBRUYsTUFBTSwyQkFBWSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUVuRCxHQUFHLENBQUMsSUFBSSxDQUFDLHVDQUF1QyxDQUFDLENBQUM7SUFDbEQsbUNBQWdCLENBQUMsSUFBSSxDQUFDLHVDQUFrQixDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRTNELEdBQUcsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUVyQyxNQUFNLHlCQUFhLENBQUMsR0FBRyxFQUFFO1FBQ3JCLE1BQU0sT0FBTyxHQUFHLDZDQUFxQixDQUFDLE1BQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7UUFDOUUsYUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUMsQ0FBQyxDQUFDO0lBRUgsR0FBRyxDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBRXpDLE1BQU0sWUFBWSxHQUFHLHFCQUFTLENBQUMsSUFBSSxDQUFDLDJCQUFZLENBQUMsR0FBRyxFQUFHLEVBQUUsT0FBTyxFQUFFLHdCQUF3QixDQUFDLENBQUM7SUFFNUYsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxZQUFZLENBQUMsQ0FBQztJQUM5QyxhQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sYUFBSyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsRUFBRSx1QkFBdUIsR0FBRyxZQUFZLENBQUMsQ0FBQztJQUV6RixNQUFNLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFN0MsQ0FBQyxDQUFBLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3BlY3Ryb25NYWluMn0gZnJvbSAnLi4vLi4vanMvdGVzdC9TcGVjdHJvbk1haW4yJztcbmltcG9ydCB7RGF0YXN0b3JlfSBmcm9tICcuLi8uLi9qcy9kYXRhc3RvcmUvRGF0YXN0b3JlJztcbmltcG9ydCB7TWVtb3J5RGF0YXN0b3JlfSBmcm9tICcuLi8uLi9qcy9kYXRhc3RvcmUvTWVtb3J5RGF0YXN0b3JlJztcbmltcG9ydCB7TG9nZ2luZ30gZnJvbSAnLi4vLi4vanMvbG9nZ2VyL0xvZ2dpbmcnO1xuaW1wb3J0IHtNYWluQXBwfSBmcm9tICcuLi8uLi9qcy9hcHBzL21haW4vTWFpbkFwcCc7XG5pbXBvcnQge0Jyb3dzZXJXaW5kb3dSZWdpc3RyeX0gZnJvbSAnLi4vLi4vanMvZWxlY3Ryb24vZnJhbWV3b3JrL0Jyb3dzZXJXaW5kb3dSZWdpc3RyeSc7XG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQgd2FpdEZvckV4cGVjdCBmcm9tICd3YWl0LWZvci1leHBlY3QnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uLy4uL2pzL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtNYWluQXBwQ29udHJvbGxlcn0gZnJvbSAnLi4vLi4vanMvYXBwcy9tYWluL01haW5BcHBDb250cm9sbGVyJztcbmltcG9ydCBCcm93c2VyV2luZG93ID0gRWxlY3Ryb24uQnJvd3NlcldpbmRvdztcbmltcG9ydCB7RmlsZUltcG9ydENsaWVudH0gZnJvbSAnLi4vLi4vanMvYXBwcy9yZXBvc2l0b3J5L0ZpbGVJbXBvcnRDbGllbnQnO1xuaW1wb3J0IHtGaWxlc30gZnJvbSAnLi4vLi4vanMvdXRpbC9GaWxlcyc7XG5pbXBvcnQge0ZpbGVQYXRoc30gZnJvbSAnLi4vLi4vanMvdXRpbC9GaWxlUGF0aHMnO1xuaW1wb3J0IHtQb2xhckRhdGFEaXJ9IGZyb20gJy4uLy4uL2pzL3Rlc3QvUG9sYXJEYXRhRGlyJztcbmltcG9ydCB7RGlza0RhdGFzdG9yZX0gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL0Rpc2tEYXRhc3RvcmUnO1xuaW1wb3J0IHtQcm9taXNlc30gZnJvbSAnLi4vLi4vanMvdXRpbC9Qcm9taXNlcyc7XG5pbXBvcnQge3dhaXR9IGZyb20gJ2RvbS10ZXN0aW5nLWxpYnJhcnknO1xuaW1wb3J0IHtBcHBJbnN0YW5jZX0gZnJvbSAnLi4vLi4vanMvZWxlY3Ryb24vZnJhbWV3b3JrL0FwcEluc3RhbmNlJztcbmltcG9ydCB7QXBwSW5zdGFuY2VzfSBmcm9tICcuLi8uLi9qcy9lbGVjdHJvbi9mcmFtZXdvcmsvQXBwSW5zdGFuY2VzJztcbmltcG9ydCB7QXBwUGF0aH0gZnJvbSAnLi4vLi4vanMvZWxlY3Ryb24vYXBwX3BhdGgvQXBwUGF0aCc7XG5pbXBvcnQge0ZpbGVJbXBvcnRSZXF1ZXN0c30gZnJvbSAnLi4vLi4vanMvYXBwcy9yZXBvc2l0b3J5L0ZpbGVJbXBvcnRSZXF1ZXN0cyc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuQXBwUGF0aC5zZXQoRmlsZVBhdGhzLnJlc29sdmUoX19kaXJuYW1lLCBcIi4uXCIsIFwiLi5cIiwgXCIuLlwiKSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVdpbmRvdygpOiBQcm9taXNlPEJyb3dzZXJXaW5kb3c+IHtcblxuICAgIGF3YWl0IFBvbGFyRGF0YURpci51c2VGcmVzaERpcmVjdG9yeSgnLnBvbGFyLW1haW4tYXBwLXdpdGgtaW1wb3J0Jyk7XG5cbiAgICBjb25zdCBkYXRhc3RvcmU6IERhdGFzdG9yZSA9IG5ldyBEaXNrRGF0YXN0b3JlKCk7XG5cbiAgICBhd2FpdCBkYXRhc3RvcmUuaW5pdCgpO1xuXG4gICAgYXdhaXQgTG9nZ2luZy5pbml0KCk7XG5cbiAgICBjb25zdCBtYWluQXBwID0gbmV3IE1haW5BcHAoZGF0YXN0b3JlKTtcblxuICAgIGNvbnN0IG1haW5BcHBTdGF0ZSA9IGF3YWl0IG1haW5BcHAuc3RhcnQoKTtcblxuICAgIHJldHVybiBtYWluQXBwU3RhdGUubWFpbldpbmRvdztcblxufVxuXG5TcGVjdHJvbk1haW4yLmNyZWF0ZSh7d2luZG93RmFjdG9yeTogY3JlYXRlV2luZG93fSkucnVuKGFzeW5jIHN0YXRlID0+IHtcblxuICAgIGxvZy5pbmZvKFwiV2FpdGluZyBmb3IgcmVwb3NpdG9yeSB0byBzaG93Li4uXCIpO1xuXG4gICAgbG9nLmluZm8oXCJXYWl0aW5nIGZvciByZXBvc2l0b3J5IGFwcC4uLlwiKTtcblxuICAgIGF3YWl0IHdhaXRGb3JFeHBlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCB3aW5kb3dzID0gQnJvd3NlcldpbmRvd1JlZ2lzdHJ5LnRhZ2dlZCh7bmFtZTogJ2FwcCcsIHZhbHVlOiAncmVwb3NpdG9yeSd9KTtcbiAgICAgICAgYXNzZXJ0Lm9rKHdpbmRvd3MubGVuZ3RoID09PSAxKTtcbiAgICB9KTtcblxuICAgIGxvZy5pbmZvKFwiV2FpdGluZyBmb3IgcmVwb3NpdG9yeSBhcHAuLi5kb25lXCIpO1xuXG4gICAgY29uc3QgcmF3UGF0aCA9IEZpbGVQYXRocy5qb2luKF9fZGlybmFtZSwgXCIuLlwiLCBcIi4uXCIsIFwiLi5cIiwgXCJkb2NzXCIsIFwiZXhhbXBsZS5wZGZcIik7XG4gICAgY29uc3QgaW1wb3J0RmlsZVBhdGggPSBhd2FpdCBGaWxlcy5yZWFscGF0aEFzeW5jKHJhd1BhdGgpO1xuICAgIGFzc2VydC5vayhhd2FpdCBGaWxlcy5leGlzdHNBc3luYyhpbXBvcnRGaWxlUGF0aCkpO1xuXG4gICAgY29uc3QgZmlsZXMgPSBbXG4gICAgICAgIGltcG9ydEZpbGVQYXRoXG4gICAgXTtcblxuICAgIGF3YWl0IEFwcEluc3RhbmNlcy53YWl0Rm9yU3RhcnRlZCgnUmVwb3NpdG9yeUFwcCcpO1xuXG4gICAgbG9nLmluZm8oXCJTZW5kaW5nIGZpbGUgaW1wb3J0IGNsaWVudCByZXF1ZXN0Li4uXCIpO1xuICAgIEZpbGVJbXBvcnRDbGllbnQuc2VuZChGaWxlSW1wb3J0UmVxdWVzdHMuZnJvbVBhdGhzKGZpbGVzKSk7XG5cbiAgICBsb2cuaW5mbyhcIlRyeWluZyB0byBmaW5kIHZpZXdlci4uLlwiKTtcblxuICAgIGF3YWl0IHdhaXRGb3JFeHBlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCB3aW5kb3dzID0gQnJvd3NlcldpbmRvd1JlZ2lzdHJ5LnRhZ2dlZCh7bmFtZTogJ3R5cGUnLCB2YWx1ZTogJ3ZpZXdlcid9KTtcbiAgICAgICAgYXNzZXJ0Lm9rKHdpbmRvd3MubGVuZ3RoID4gMCk7XG4gICAgfSk7XG5cbiAgICBsb2cuaW5mbyhcIlRyeWluZyB0byBmaW5kIHZpZXdlci4uLmRvbmVcIik7XG5cbiAgICBjb25zdCBwZGZTdGFzaFBhdGggPSBGaWxlUGF0aHMuam9pbihQb2xhckRhdGFEaXIuZ2V0KCkhLCBcInN0YXNoXCIsIFwiMTJpNzdCS3JOeS1leGFtcGxlLnBkZlwiKTtcblxuICAgIGxvZy5pbmZvKFwiVGVzdGluZyBmb3IgZmlsZTogXCIgKyBwZGZTdGFzaFBhdGgpO1xuICAgIGFzc2VydC5vayhhd2FpdCBGaWxlcy5leGlzdHNBc3luYyhwZGZTdGFzaFBhdGgpLCBcIkZpbGUgZG9lcyBub3QgZXhpc3Q6IFwiICsgcGRmU3Rhc2hQYXRoKTtcblxuICAgIGF3YWl0IHN0YXRlLnRlc3RSZXN1bHRXcml0ZXIud3JpdGUodHJ1ZSk7XG5cbn0pO1xuXG4iXX0=