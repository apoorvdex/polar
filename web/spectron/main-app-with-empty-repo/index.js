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
const AppPath_1 = require("../../js/electron/app_path/AppPath");
const FilePaths_1 = require("../../js/util/FilePaths");
const log = Logger_1.Logger.create();
let mainAppController;
AppPath_1.AppPath.set(FilePaths_1.FilePaths.resolve(__dirname, "..", "..", ".."));
function createWindow() {
    return __awaiter(this, void 0, void 0, function* () {
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
    yield state.testResultWriter.write(true);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBRTFELHdFQUFtRTtBQUNuRSxxREFBZ0Q7QUFDaEQsd0RBQW1EO0FBQ25ELDZGQUF3RjtBQUN4RiwrQkFBNEI7QUFDNUIsc0VBQTRDO0FBQzVDLG1EQUE4QztBQUc5QyxnRUFBMkQ7QUFDM0QsdURBQWtEO0FBRWxELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixJQUFJLGlCQUFnRCxDQUFDO0FBRXJELGlCQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7QUFFNUQsU0FBZSxZQUFZOztRQUV2QixNQUFNLFNBQVMsR0FBYyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztRQUVuRCxNQUFNLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUV2QixNQUFNLGlCQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFckIsTUFBTSxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXZDLE1BQU0sWUFBWSxHQUFHLE1BQU0sT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzNDLGlCQUFpQixHQUFHLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQztRQUVuRCxPQUFPLFlBQVksQ0FBQyxVQUFVLENBQUM7SUFFbkMsQ0FBQztDQUFBO0FBRUQsNkJBQWEsQ0FBQyxNQUFNLENBQUMsRUFBQyxhQUFhLEVBQUUsWUFBWSxFQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBTSxLQUFLLEVBQUMsRUFBRTtJQUVsRSxHQUFHLENBQUMsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLENBQUM7SUFFOUMsTUFBTSx5QkFBYSxDQUFDLEdBQUcsRUFBRTtRQUNyQixNQUFNLE9BQU8sR0FBRyw2Q0FBcUIsQ0FBQyxNQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUMsQ0FBQyxDQUFDO1FBQ2pGLGFBQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQztJQUVwQyxDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sS0FBSyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUU3QyxDQUFDLENBQUEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTcGVjdHJvbk1haW4yfSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uTWFpbjInO1xuaW1wb3J0IHtEYXRhc3RvcmV9IGZyb20gJy4uLy4uL2pzL2RhdGFzdG9yZS9EYXRhc3RvcmUnO1xuaW1wb3J0IHtNZW1vcnlEYXRhc3RvcmV9IGZyb20gJy4uLy4uL2pzL2RhdGFzdG9yZS9NZW1vcnlEYXRhc3RvcmUnO1xuaW1wb3J0IHtMb2dnaW5nfSBmcm9tICcuLi8uLi9qcy9sb2dnZXIvTG9nZ2luZyc7XG5pbXBvcnQge01haW5BcHB9IGZyb20gJy4uLy4uL2pzL2FwcHMvbWFpbi9NYWluQXBwJztcbmltcG9ydCB7QnJvd3NlcldpbmRvd1JlZ2lzdHJ5fSBmcm9tICcuLi8uLi9qcy9lbGVjdHJvbi9mcmFtZXdvcmsvQnJvd3NlcldpbmRvd1JlZ2lzdHJ5JztcbmltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcbmltcG9ydCB3YWl0Rm9yRXhwZWN0IGZyb20gJ3dhaXQtZm9yLWV4cGVjdCc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vLi4vanMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge01haW5BcHBDb250cm9sbGVyfSBmcm9tICcuLi8uLi9qcy9hcHBzL21haW4vTWFpbkFwcENvbnRyb2xsZXInO1xuaW1wb3J0IEJyb3dzZXJXaW5kb3cgPSBFbGVjdHJvbi5Ccm93c2VyV2luZG93O1xuaW1wb3J0IHtBcHBQYXRofSBmcm9tICcuLi8uLi9qcy9lbGVjdHJvbi9hcHBfcGF0aC9BcHBQYXRoJztcbmltcG9ydCB7RmlsZVBhdGhzfSBmcm9tICcuLi8uLi9qcy91dGlsL0ZpbGVQYXRocyc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxubGV0IG1haW5BcHBDb250cm9sbGVyOiBNYWluQXBwQ29udHJvbGxlciB8IHVuZGVmaW5lZDtcblxuQXBwUGF0aC5zZXQoRmlsZVBhdGhzLnJlc29sdmUoX19kaXJuYW1lLCBcIi4uXCIsIFwiLi5cIiwgXCIuLlwiKSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVdpbmRvdygpOiBQcm9taXNlPEJyb3dzZXJXaW5kb3c+IHtcblxuICAgIGNvbnN0IGRhdGFzdG9yZTogRGF0YXN0b3JlID0gbmV3IE1lbW9yeURhdGFzdG9yZSgpO1xuXG4gICAgYXdhaXQgZGF0YXN0b3JlLmluaXQoKTtcblxuICAgIGF3YWl0IExvZ2dpbmcuaW5pdCgpO1xuXG4gICAgY29uc3QgbWFpbkFwcCA9IG5ldyBNYWluQXBwKGRhdGFzdG9yZSk7XG5cbiAgICBjb25zdCBtYWluQXBwU3RhdGUgPSBhd2FpdCBtYWluQXBwLnN0YXJ0KCk7XG4gICAgbWFpbkFwcENvbnRyb2xsZXIgPSBtYWluQXBwU3RhdGUubWFpbkFwcENvbnRyb2xsZXI7XG5cbiAgICByZXR1cm4gbWFpbkFwcFN0YXRlLm1haW5XaW5kb3c7XG5cbn1cblxuU3BlY3Ryb25NYWluMi5jcmVhdGUoe3dpbmRvd0ZhY3Rvcnk6IGNyZWF0ZVdpbmRvd30pLnJ1bihhc3luYyBzdGF0ZSA9PiB7XG5cbiAgICBsb2cuaW5mbyhcIldhaXRpbmcgZm9yIHJlcG9zaXRvcnkgdG8gc2hvdy4uLlwiKTtcblxuICAgIGF3YWl0IHdhaXRGb3JFeHBlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCB3aW5kb3dzID0gQnJvd3NlcldpbmRvd1JlZ2lzdHJ5LnRhZ2dlZCh7bmFtZTogJ2FwcCcsIHZhbHVlOiAncmVwb3NpdG9yeSd9KTtcbiAgICAgICAgYXNzZXJ0Lm9rKHdpbmRvd3MubGVuZ3RoID09PSAxKTtcblxuICAgIH0pO1xuXG4gICAgYXdhaXQgc3RhdGUudGVzdFJlc3VsdFdyaXRlci53cml0ZSh0cnVlKTtcblxufSk7XG4iXX0=