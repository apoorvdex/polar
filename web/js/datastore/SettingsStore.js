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
const Directories_1 = require("./Directories");
const FilePaths_1 = require("../util/FilePaths");
const Files_1 = require("../util/Files");
const Settings_1 = require("./Settings");
const Logger_1 = require("../logger/Logger");
const AppRuntime_1 = require("../AppRuntime");
const Providers_1 = require("../util/Providers");
const log = Logger_1.Logger.create();
class SettingsStore {
    static load() {
        return __awaiter(this, void 0, void 0, function* () {
            if (AppRuntime_1.AppRuntime.isElectron()) {
                const settingsPath = FilePaths_1.FilePaths.create(this.directories.configDir, "settings.json");
                if (yield Files_1.Files.existsAsync(settingsPath)) {
                    log.info("Loaded settings from: " + settingsPath);
                    const data = yield Files_1.Files.readFileAsync(settingsPath);
                    const settings = JSON.parse(data.toString("UTF-8"));
                    return Providers_1.Providers.of(settings);
                }
            }
            return Providers_1.Providers.of(new Settings_1.DefaultSettings());
        });
    }
    static write(settings) {
        return __awaiter(this, void 0, void 0, function* () {
            if (AppRuntime_1.AppRuntime.isElectron()) {
                const settingsPath = FilePaths_1.FilePaths.create(this.directories.configDir, "settings.json");
                const data = JSON.stringify(settings, null, "  ");
                yield Files_1.Files.writeFileAsync(settingsPath, data);
                log.info("Wrote settings to: " + settingsPath);
            }
        });
    }
}
SettingsStore.directories = new Directories_1.Directories();
exports.SettingsStore = SettingsStore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2V0dGluZ3NTdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNldHRpbmdzU3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLCtDQUEwQztBQUMxQyxpREFBNEM7QUFDNUMseUNBQW9DO0FBRXBDLHlDQUFxRDtBQUNyRCw2Q0FBd0M7QUFDeEMsOENBQXlDO0FBQ3pDLGlEQUFzRDtBQUV0RCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSxhQUFhO0lBSWYsTUFBTSxDQUFPLElBQUk7O1lBRXBCLElBQUksdUJBQVUsQ0FBQyxVQUFVLEVBQUUsRUFBRTtnQkFFekIsTUFBTSxZQUFZLEdBQUcscUJBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsZUFBZSxDQUFDLENBQUM7Z0JBRW5GLElBQUksTUFBTSxhQUFLLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxFQUFFO29CQUN2QyxHQUFHLENBQUMsSUFBSSxDQUFDLHdCQUF3QixHQUFHLFlBQVksQ0FBQyxDQUFDO29CQUNsRCxNQUFNLElBQUksR0FBRyxNQUFNLGFBQUssQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ3JELE1BQU0sUUFBUSxHQUFjLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUMvRCxPQUFPLHFCQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUNqQzthQUVKO1lBRUQsT0FBTyxxQkFBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLDBCQUFlLEVBQUUsQ0FBQyxDQUFDO1FBRy9DLENBQUM7S0FBQTtJQUVNLE1BQU0sQ0FBTyxLQUFLLENBQUMsUUFBa0I7O1lBRXhDLElBQUksdUJBQVUsQ0FBQyxVQUFVLEVBQUUsRUFBRTtnQkFDekIsTUFBTSxZQUFZLEdBQUcscUJBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsZUFBZSxDQUFDLENBQUM7Z0JBQ25GLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDbEQsTUFBTSxhQUFLLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFFL0MsR0FBRyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxZQUFZLENBQUMsQ0FBQzthQUNsRDtRQUVMLENBQUM7S0FBQTs7QUFoQ3VCLHlCQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7QUFGNUQsc0NBb0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3Rvcmllc30gZnJvbSAnLi9EaXJlY3Rvcmllcyc7XG5pbXBvcnQge0ZpbGVQYXRoc30gZnJvbSAnLi4vdXRpbC9GaWxlUGF0aHMnO1xuaW1wb3J0IHtGaWxlc30gZnJvbSAnLi4vdXRpbC9GaWxlcyc7XG5pbXBvcnQge09wdGlvbmFsfSBmcm9tICcuLi91dGlsL3RzL09wdGlvbmFsJztcbmltcG9ydCB7U2V0dGluZ3MsIERlZmF1bHRTZXR0aW5nc30gZnJvbSAnLi9TZXR0aW5ncyc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0FwcFJ1bnRpbWV9IGZyb20gJy4uL0FwcFJ1bnRpbWUnO1xuaW1wb3J0IHtQcm92aWRlciwgUHJvdmlkZXJzfSBmcm9tICcuLi91dGlsL1Byb3ZpZGVycyc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIFNldHRpbmdzU3RvcmUge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgZGlyZWN0b3JpZXMgPSBuZXcgRGlyZWN0b3JpZXMoKTtcblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgbG9hZCgpOiBQcm9taXNlPFByb3ZpZGVyPFNldHRpbmdzPj4ge1xuXG4gICAgICAgIGlmIChBcHBSdW50aW1lLmlzRWxlY3Ryb24oKSkge1xuXG4gICAgICAgICAgICBjb25zdCBzZXR0aW5nc1BhdGggPSBGaWxlUGF0aHMuY3JlYXRlKHRoaXMuZGlyZWN0b3JpZXMuY29uZmlnRGlyLCBcInNldHRpbmdzLmpzb25cIik7XG5cbiAgICAgICAgICAgIGlmIChhd2FpdCBGaWxlcy5leGlzdHNBc3luYyhzZXR0aW5nc1BhdGgpKSB7XG4gICAgICAgICAgICAgICAgbG9nLmluZm8oXCJMb2FkZWQgc2V0dGluZ3MgZnJvbTogXCIgKyBzZXR0aW5nc1BhdGgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBGaWxlcy5yZWFkRmlsZUFzeW5jKHNldHRpbmdzUGF0aCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSA8U2V0dGluZ3M+IEpTT04ucGFyc2UoZGF0YS50b1N0cmluZyhcIlVURi04XCIpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvdmlkZXJzLm9mKHNldHRpbmdzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb3ZpZGVycy5vZihuZXcgRGVmYXVsdFNldHRpbmdzKCkpO1xuXG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHdyaXRlKHNldHRpbmdzOiBTZXR0aW5ncykge1xuXG4gICAgICAgIGlmIChBcHBSdW50aW1lLmlzRWxlY3Ryb24oKSkge1xuICAgICAgICAgICAgY29uc3Qgc2V0dGluZ3NQYXRoID0gRmlsZVBhdGhzLmNyZWF0ZSh0aGlzLmRpcmVjdG9yaWVzLmNvbmZpZ0RpciwgXCJzZXR0aW5ncy5qc29uXCIpO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHNldHRpbmdzLCBudWxsLCBcIiAgXCIpO1xuICAgICAgICAgICAgYXdhaXQgRmlsZXMud3JpdGVGaWxlQXN5bmMoc2V0dGluZ3NQYXRoLCBkYXRhKTtcblxuICAgICAgICAgICAgbG9nLmluZm8oXCJXcm90ZSBzZXR0aW5ncyB0bzogXCIgKyBzZXR0aW5nc1BhdGgpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn1cbiJdfQ==