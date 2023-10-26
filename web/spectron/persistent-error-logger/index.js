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
const SpectronMain2_1 = require("../../js/test/SpectronMain2");
const Logger_1 = require("../../js/logger/Logger");
const chai_1 = require("chai");
const FilePaths_1 = require("../../js/util/FilePaths");
const Files_1 = require("../../js/util/Files");
const Logging_1 = require("../../js/logger/Logging");
const PolarDataDir_1 = require("../../js/test/PolarDataDir");
const log = Logger_1.Logger.create();
SpectronMain2_1.SpectronMain2.create().run((state) => __awaiter(this, void 0, void 0, function* () {
    yield PolarDataDir_1.PolarDataDir.reuseDirectory('.polar-persistent-error-logger');
    chai_1.assert.ok(PolarDataDir_1.PolarDataDir.get(), "There is no POLAR_DATA_DIR defined");
    const path = FilePaths_1.FilePaths.join(PolarDataDir_1.PolarDataDir.get(), "logs", "error.log");
    chai_1.assert.ok(!(yield Files_1.Files.existsAsync(path)), "File still exists for some reason: " + path);
    yield Logging_1.Logging.init();
    chai_1.assert.ok(yield Files_1.Files.existsAsync(path), "The error.log file does not exist at: " + path);
    state.window.loadURL(`file://${__dirname}/app.html`);
    log.error("This is from the main process: ", new Error("Fake error in main process"));
    yield log.sync();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBQzFELG1EQUE4QztBQUM5QywrQkFBNEI7QUFDNUIsdURBQWtEO0FBQ2xELCtDQUEwQztBQUMxQyxxREFBZ0Q7QUFDaEQsNkRBQXdEO0FBRXhELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1Qiw2QkFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFNLEtBQUssRUFBQyxFQUFFO0lBRXJDLE1BQU0sMkJBQVksQ0FBQyxjQUFjLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUVwRSxhQUFNLENBQUMsRUFBRSxDQUFDLDJCQUFZLENBQUMsR0FBRyxFQUFFLEVBQUUsb0NBQW9DLENBQUMsQ0FBQztJQUVwRSxNQUFNLElBQUksR0FBRyxxQkFBUyxDQUFDLElBQUksQ0FBQywyQkFBWSxDQUFDLEdBQUcsRUFBRyxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztJQUV0RSxhQUFNLENBQUMsRUFBRSxDQUFFLENBQUUsQ0FBQSxNQUFNLGFBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUEsRUFBRSxxQ0FBcUMsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUUxRixNQUFNLGlCQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFckIsYUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLGFBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsd0NBQXdDLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFFMUYsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxTQUFTLFdBQVcsQ0FBQyxDQUFDO0lBRXJELEdBQUcsQ0FBQyxLQUFLLENBQUMsaUNBQWlDLEVBQUUsSUFBSSxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDO0lBSXRGLE1BQU0sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0FBRXJCLENBQUMsQ0FBQSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NwZWN0cm9uTWFpbjJ9IGZyb20gJy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb25NYWluMic7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vLi4vanMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge2Fzc2VydH0gZnJvbSBcImNoYWlcIjtcbmltcG9ydCB7RmlsZVBhdGhzfSBmcm9tICcuLi8uLi9qcy91dGlsL0ZpbGVQYXRocyc7XG5pbXBvcnQge0ZpbGVzfSBmcm9tICcuLi8uLi9qcy91dGlsL0ZpbGVzJztcbmltcG9ydCB7TG9nZ2luZ30gZnJvbSAnLi4vLi4vanMvbG9nZ2VyL0xvZ2dpbmcnO1xuaW1wb3J0IHtQb2xhckRhdGFEaXJ9IGZyb20gJy4uLy4uL2pzL3Rlc3QvUG9sYXJEYXRhRGlyJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5TcGVjdHJvbk1haW4yLmNyZWF0ZSgpLnJ1bihhc3luYyBzdGF0ZSA9PiB7XG5cbiAgICBhd2FpdCBQb2xhckRhdGFEaXIucmV1c2VEaXJlY3RvcnkoJy5wb2xhci1wZXJzaXN0ZW50LWVycm9yLWxvZ2dlcicpO1xuXG4gICAgYXNzZXJ0Lm9rKFBvbGFyRGF0YURpci5nZXQoKSwgXCJUaGVyZSBpcyBubyBQT0xBUl9EQVRBX0RJUiBkZWZpbmVkXCIpO1xuXG4gICAgY29uc3QgcGF0aCA9IEZpbGVQYXRocy5qb2luKFBvbGFyRGF0YURpci5nZXQoKSEsIFwibG9nc1wiLCBcImVycm9yLmxvZ1wiKTtcblxuICAgIGFzc2VydC5vayggISBhd2FpdCBGaWxlcy5leGlzdHNBc3luYyhwYXRoKSwgXCJGaWxlIHN0aWxsIGV4aXN0cyBmb3Igc29tZSByZWFzb246IFwiICsgcGF0aCk7XG5cbiAgICBhd2FpdCBMb2dnaW5nLmluaXQoKTtcblxuICAgIGFzc2VydC5vayhhd2FpdCBGaWxlcy5leGlzdHNBc3luYyhwYXRoKSwgXCJUaGUgZXJyb3IubG9nIGZpbGUgZG9lcyBub3QgZXhpc3QgYXQ6IFwiICsgcGF0aCk7XG5cbiAgICBzdGF0ZS53aW5kb3cubG9hZFVSTChgZmlsZTovLyR7X19kaXJuYW1lfS9hcHAuaHRtbGApO1xuXG4gICAgbG9nLmVycm9yKFwiVGhpcyBpcyBmcm9tIHRoZSBtYWluIHByb2Nlc3M6IFwiLCBuZXcgRXJyb3IoXCJGYWtlIGVycm9yIGluIG1haW4gcHJvY2Vzc1wiKSk7XG5cbiAgICAvLyBGSVhNRTogbWFrZSBzdXJlIHdlIGhhdmUgdGhlIGRhdGEgbm93LlxuXG4gICAgYXdhaXQgbG9nLnN5bmMoKTtcblxufSk7XG4iXX0=