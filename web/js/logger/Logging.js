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
const LoggerDelegate_1 = require("./LoggerDelegate");
const FilteredLogger_1 = require("./FilteredLogger");
const ConsoleLogger_1 = require("./ConsoleLogger");
const LevelAnnotatingLogger_1 = require("./annotating/LevelAnnotatingLogger");
const VersionAnnotatingLogger_1 = require("./annotating/VersionAnnotatingLogger");
const Directories_1 = require("../datastore/Directories");
const LogLevel_1 = require("./LogLevel");
const Files_1 = require("../util/Files");
const LogLevels_1 = require("./LogLevels");
const Optional_1 = require("../util/ts/Optional");
const MultiLogger_1 = require("./MultiLogger");
const SentryLogger_1 = require("./SentryLogger");
const FilePaths_1 = require("../util/FilePaths");
const ElectronContextType_1 = require("../electron/context/ElectronContextType");
const ElectronContextTypes_1 = require("../electron/context/ElectronContextTypes");
const ToasterLogger_1 = require("./ToasterLogger");
const PersistentErrorLogger_1 = require("./PersistentErrorLogger");
const process_1 = __importDefault(require("process"));
const MemoryLogger_1 = require("./MemoryLogger");
const AppRuntime_1 = require("../AppRuntime");
class Logging {
    static init() {
        return __awaiter(this, void 0, void 0, function* () {
            const level = this.configuredLevel();
            const target = yield this.createTarget(level);
            yield this.initWithTarget(target);
        });
    }
    static initForTesting() {
        const level = this.configuredLevel();
        const target = new ConsoleLogger_1.ConsoleLogger();
        const delegate = new FilteredLogger_1.FilteredLogger(new VersionAnnotatingLogger_1.VersionAnnotatingLogger(new LevelAnnotatingLogger_1.LevelAnnotatingLogger(target)), level);
        LoggerDelegate_1.LoggerDelegate.set(delegate);
    }
    static initWithTarget(target) {
        return __awaiter(this, void 0, void 0, function* () {
            const lc = yield this.loggingConfig();
            const delegate = new FilteredLogger_1.FilteredLogger(new VersionAnnotatingLogger_1.VersionAnnotatingLogger(new LevelAnnotatingLogger_1.LevelAnnotatingLogger(target)), lc.level);
            LoggerDelegate_1.LoggerDelegate.set(delegate);
            const logger = LoggerDelegate_1.LoggerDelegate.get();
            logger.info(`Using logger: ${logger.name}: target=${lc.target}, level=${LogLevel_1.LogLevel[lc.level]}`);
        });
    }
    static createTarget(level) {
        return __awaiter(this, void 0, void 0, function* () {
            const loggers = [];
            const electronContext = ElectronContextTypes_1.ElectronContextTypes.create();
            if (level === LogLevel_1.LogLevel.WARN && SentryLogger_1.SentryLogger.isEnabled() && AppRuntime_1.AppRuntime.isElectron()) {
                loggers.push(new SentryLogger_1.SentryLogger());
            }
            if (['electron-renderer', 'browser'].includes(AppRuntime_1.AppRuntime.get())) {
                loggers.push(new ToasterLogger_1.ToasterLogger());
            }
            if (electronContext === ElectronContextType_1.ElectronContextType.RENDERER) {
                loggers.push(new MemoryLogger_1.MemoryLogger());
            }
            if (level === LogLevel_1.LogLevel.WARN && AppRuntime_1.AppRuntime.isElectron()) {
                loggers.push(yield PersistentErrorLogger_1.PersistentErrorLogger.create());
            }
            loggers.push(yield this.createPrimaryTarget());
            return new MultiLogger_1.MultiLogger(...loggers);
        });
    }
    static createPrimaryTarget() {
        return __awaiter(this, void 0, void 0, function* () {
            const loggingConfig = yield this.loggingConfig();
            if (loggingConfig.target === LoggerTarget.CONSOLE) {
                return new ConsoleLogger_1.ConsoleLogger();
            }
            else {
                throw new Error("Invalid target: " + loggingConfig.target);
            }
        });
    }
    static loggingConfig() {
        return __awaiter(this, void 0, void 0, function* () {
            if (AppRuntime_1.AppRuntime.isElectron()) {
                const directories = yield new Directories_1.Directories().init();
                const path = FilePaths_1.FilePaths.join(directories.configDir, 'logging.json');
                if (yield Files_1.Files.existsAsync(path)) {
                    const buffer = yield Files_1.Files.readFileAsync(path);
                    const json = buffer.toString('utf8');
                    let config = JSON.parse(json);
                    if (typeof config.level === 'string') {
                        config = {
                            level: LogLevels_1.LogLevels.fromName(config.level),
                            target: config.target
                        };
                    }
                    return config;
                }
            }
            return {
                target: LoggerTarget.CONSOLE,
                level: this.configuredLevel()
            };
        });
    }
    static configuredLevel() {
        return Optional_1.Optional.of(process_1.default.env.POLAR_LOG_LEVEL)
            .map(level => LogLevels_1.LogLevels.fromName(level))
            .getOrElse(LogLevel_1.LogLevel.WARN);
    }
}
exports.Logging = Logging;
var LoggerTarget;
(function (LoggerTarget) {
    LoggerTarget["CONSOLE"] = "CONSOLE";
})(LoggerTarget || (LoggerTarget = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nZ2luZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkxvZ2dpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFnRDtBQUNoRCxxREFBZ0Q7QUFDaEQsbURBQThDO0FBQzlDLDhFQUF5RTtBQUN6RSxrRkFBNkU7QUFFN0UsMERBQXFEO0FBQ3JELHlDQUFvQztBQUNwQyx5Q0FBb0M7QUFDcEMsMkNBQXNDO0FBQ3RDLGtEQUE2QztBQUM3QywrQ0FBMEM7QUFDMUMsaURBQTRDO0FBQzVDLGlEQUE0QztBQUM1QyxpRkFBNEU7QUFDNUUsbUZBQThFO0FBQzlFLG1EQUE4QztBQUM5QyxtRUFBOEQ7QUFHOUQsc0RBQThCO0FBQzlCLGlEQUE0QztBQUU1Qyw4Q0FBeUM7QUFNekMsTUFBYSxPQUFPO0lBS1QsTUFBTSxDQUFPLElBQUk7O1lBRXBCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUVyQyxNQUFNLE1BQU0sR0FBWSxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFdkQsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXRDLENBQUM7S0FBQTtJQUtNLE1BQU0sQ0FBQyxjQUFjO1FBRXhCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUVyQyxNQUFNLE1BQU0sR0FBRyxJQUFJLDZCQUFhLEVBQUUsQ0FBQztRQUVuQyxNQUFNLFFBQVEsR0FDVixJQUFJLCtCQUFjLENBQ2QsSUFBSSxpREFBdUIsQ0FDdkIsSUFBSSw2Q0FBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXZELCtCQUFjLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRWpDLENBQUM7SUFFTSxNQUFNLENBQU8sY0FBYyxDQUFDLE1BQWU7O1lBRTlDLE1BQU0sRUFBRSxHQUFHLE1BQU0s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SUFBSSxDQUFrQixDQUFDO29CQUUvQyxJQUFJLE9BQU8sTUFBTSxDQUFDLEtBQUssS0FBSyxRQUFRLEVBQUU7d0JBTWxDLE1BQU0sR0FBRzs0QkFDTCxLQUFLLEVBQUUscUJBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQzs0QkFDdkMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNO3lCQUN4QixDQUFDO3FCQUVMO29CQUVELE9BQU8sTUFBTSxDQUFDO2lCQUVqQjthQUVKO1lBRUQsT0FBTztnQkFDSCxNQUFNLEVBQUUsWUFBWSxDQUFDLE9BQU87Z0JBQzVCLEtBQUssRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFO2FBQ2hDLENBQUM7UUFFTixDQUFDO0tBQUE7SUFFTyxNQUFNLENBQUMsZUFBZTtRQUMxQixPQUFPLG1CQUFRLENBQUMsRUFBRSxDQUFDLGlCQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQzthQUMxQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxxQkFBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN2QyxTQUFTLENBQUMsbUJBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0NBRUo7QUF4SkQsMEJBd0pDO0FBRUQsSUFBSyxZQUdKO0FBSEQsV0FBSyxZQUFZO0lBQ2IsbUNBQW1CLENBQUE7QUFFdkIsQ0FBQyxFQUhJLFlBQVksS0FBWixZQUFZLFFBR2hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMb2dnZXJEZWxlZ2F0ZX0gZnJvbSAnLi9Mb2dnZXJEZWxlZ2F0ZSc7XG5pbXBvcnQge0ZpbHRlcmVkTG9nZ2VyfSBmcm9tICcuL0ZpbHRlcmVkTG9nZ2VyJztcbmltcG9ydCB7Q29uc29sZUxvZ2dlcn0gZnJvbSAnLi9Db25zb2xlTG9nZ2VyJztcbmltcG9ydCB7TGV2ZWxBbm5vdGF0aW5nTG9nZ2VyfSBmcm9tICcuL2Fubm90YXRpbmcvTGV2ZWxBbm5vdGF0aW5nTG9nZ2VyJztcbmltcG9ydCB7VmVyc2lvbkFubm90YXRpbmdMb2dnZXJ9IGZyb20gJy4vYW5ub3RhdGluZy9WZXJzaW9uQW5ub3RhdGluZ0xvZ2dlcic7XG5pbXBvcnQge0lMb2dnZXJ9IGZyb20gJy4vSUxvZ2dlcic7XG5pbXBvcnQge0RpcmVjdG9yaWVzfSBmcm9tICcuLi9kYXRhc3RvcmUvRGlyZWN0b3JpZXMnO1xuaW1wb3J0IHtMb2dMZXZlbH0gZnJvbSAnLi9Mb2dMZXZlbCc7XG5pbXBvcnQge0ZpbGVzfSBmcm9tICcuLi91dGlsL0ZpbGVzJztcbmltcG9ydCB7TG9nTGV2ZWxzfSBmcm9tICcuL0xvZ0xldmVscyc7XG5pbXBvcnQge09wdGlvbmFsfSBmcm9tICcuLi91dGlsL3RzL09wdGlvbmFsJztcbmltcG9ydCB7TXVsdGlMb2dnZXJ9IGZyb20gJy4vTXVsdGlMb2dnZXInO1xuaW1wb3J0IHtTZW50cnlMb2dnZXJ9IGZyb20gJy4vU2VudHJ5TG9nZ2VyJztcbmltcG9ydCB7RmlsZVBhdGhzfSBmcm9tICcuLi91dGlsL0ZpbGVQYXRocyc7XG5pbXBvcnQge0VsZWN0cm9uQ29udGV4dFR5cGV9IGZyb20gJy4uL2VsZWN0cm9uL2NvbnRleHQvRWxlY3Ryb25Db250ZXh0VHlwZSc7XG5pbXBvcnQge0VsZWN0cm9uQ29udGV4dFR5cGVzfSBmcm9tICcuLi9lbGVjdHJvbi9jb250ZXh0L0VsZWN0cm9uQ29udGV4dFR5cGVzJztcbmltcG9ydCB7VG9hc3RlckxvZ2dlcn0gZnJvbSAnLi9Ub2FzdGVyTG9nZ2VyJztcbmltcG9ydCB7UGVyc2lzdGVudEVycm9yTG9nZ2VyfSBmcm9tICcuL1BlcnNpc3RlbnRFcnJvckxvZ2dlcic7XG5pbXBvcnQge2lzUHJlc2VudH0gZnJvbSAnLi4vUHJlY29uZGl0aW9ucyc7XG5cbmltcG9ydCBwcm9jZXNzIGZyb20gJ3Byb2Nlc3MnO1xuaW1wb3J0IHtNZW1vcnlMb2dnZXJ9IGZyb20gJy4vTWVtb3J5TG9nZ2VyJztcbmltcG9ydCB7SVNPRGF0ZVRpbWVTdHJpbmd9IGZyb20gJy4uL21ldGFkYXRhL0lTT0RhdGVUaW1lU3RyaW5ncyc7XG5pbXBvcnQge0FwcFJ1bnRpbWV9IGZyb20gJy4uL0FwcFJ1bnRpbWUnO1xuXG4vKipcbiAqIE1haW50YWlucyBvdXIgZ2VuZXJhbCBsb2dnaW5nIGluZnJhc3RydWN0dXJlLiAgRGlmZmVyZW50aWF0ZWQgZnJvbSBMb2dnZXJcbiAqIHdoaWNoIHBlcmZvcm1zIHRoZSBhY3R1YWwgbG9nZ2luZyBvZiBtZXNzYWdlLiBUaGlzIG1haW50YWlucyBMb2dnZXJzLlxuICovXG5leHBvcnQgY2xhc3MgTG9nZ2luZyB7XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIHRoZSBsb2dnZXIgdG8gd3JpdGUgdG8gYSBzcGVjaWZpYyBkaXJlY3RvcnkuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBpbml0KCkge1xuXG4gICAgICAgIGNvbnN0IGxldmVsID0gdGhpcy5jb25maWd1cmVkTGV2ZWwoKTtcblxuICAgICAgICBjb25zdCB0YXJnZXQ6IElMb2dnZXIgPSBhd2FpdCB0aGlzLmNyZWF0ZVRhcmdldChsZXZlbCk7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5pbml0V2l0aFRhcmdldCh0YXJnZXQpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSBhIGxvZ2dlciBzdWl0YWJsZSBmb3IgdGVzdGluZy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGluaXRGb3JUZXN0aW5nKCkge1xuXG4gICAgICAgIGNvbnN0IGxldmVsID0gdGhpcy5jb25maWd1cmVkTGV2ZWwoKTtcblxuICAgICAgICBjb25zdCB0YXJnZXQgPSBuZXcgQ29uc29sZUxvZ2dlcigpO1xuXG4gICAgICAgIGNvbnN0IGRlbGVnYXRlID1cbiAgICAgICAgICAgIG5ldyBGaWx0ZXJlZExvZ2dlcihcbiAgICAgICAgICAgICAgICBuZXcgVmVyc2lvbkFubm90YXRpbmdMb2dnZXIoXG4gICAgICAgICAgICAgICAgICAgIG5ldyBMZXZlbEFubm90YXRpbmdMb2dnZXIodGFyZ2V0KSksIGxldmVsKTtcblxuICAgICAgICBMb2dnZXJEZWxlZ2F0ZS5zZXQoZGVsZWdhdGUpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBpbml0V2l0aFRhcmdldCh0YXJnZXQ6IElMb2dnZXIpIHtcblxuICAgICAgICBjb25zdCBsYyA9IGF3YWl0IHRoaXMubG9nZ2luZ0NvbmZpZygpO1xuXG4gICAgICAgIGNvbnN0IGRlbGVnYXRlID1cbiAgICAgICAgICAgIG5ldyBGaWx0ZXJlZExvZ2dlcihcbiAgICAgICAgICAgICAgICBuZXcgVmVyc2lvbkFubm90YXRpbmdMb2dnZXIoXG4gICAgICAgICAgICAgICAgICAgIG5ldyBMZXZlbEFubm90YXRpbmdMb2dnZXIodGFyZ2V0KSksIGxjLmxldmVsKTtcblxuICAgICAgICBMb2dnZXJEZWxlZ2F0ZS5zZXQoZGVsZWdhdGUpO1xuXG4gICAgICAgIGNvbnN0IGxvZ2dlciA9IExvZ2dlckRlbGVnYXRlLmdldCgpO1xuXG4gICAgICAgIGxvZ2dlci5pbmZvKGBVc2luZyBsb2dnZXI6ICR7bG9nZ2VyLm5hbWV9OiB0YXJnZXQ9JHtsYy50YXJnZXR9LCBsZXZlbD0ke0xvZ0xldmVsW2xjLmxldmVsXX1gKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgY3JlYXRlVGFyZ2V0KGxldmVsOiBMb2dMZXZlbCk6IFByb21pc2U8SUxvZ2dlcj4ge1xuXG4gICAgICAgIGNvbnN0IGxvZ2dlcnM6IElMb2dnZXJbXSA9IFtdO1xuXG4gICAgICAgIGNvbnN0IGVsZWN0cm9uQ29udGV4dCA9IEVsZWN0cm9uQ29udGV4dFR5cGVzLmNyZWF0ZSgpO1xuXG4gICAgICAgIGlmIChsZXZlbCA9PT0gTG9nTGV2ZWwuV0FSTiAmJiBTZW50cnlMb2dnZXIuaXNFbmFibGVkKCkgJiYgQXBwUnVudGltZS5pc0VsZWN0cm9uKCkpIHtcbiAgICAgICAgICAgIC8vIFNlbnRyeUxvZ2dlciBlbmFibGVkIGZvciBJTkZPIHdpbGwgbG9jayB1cyB1cC5cbiAgICAgICAgICAgIC8vICoqKiBmaXJzdCBsb2dnZXIgaXMgc2VudHJ5IGJ1dCBvbmx5IGlmIHdlIGFyZSBub3QgcnVubmluZyB3aXRoaW5cbiAgICAgICAgICAgIC8vIGEgU05BUCBjb250YWluZXIuXG4gICAgICAgICAgICBsb2dnZXJzLnB1c2gobmV3IFNlbnRyeUxvZ2dlcigpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vICoqKiBuZXh0IHVwIGlzIHRoZSBUb2FzdGVyIExvZ2dlciB0byB2aXN1YWxseSBzaG93IGVycm9ycy5cblxuICAgICAgICBpZiAoWydlbGVjdHJvbi1yZW5kZXJlcicsICdicm93c2VyJ10uaW5jbHVkZXMoQXBwUnVudGltZS5nZXQoKSkpIHtcbiAgICAgICAgICAgIC8vIHVzZSBhIFRvYXN0ZXJMb2dnZXIgd2hlbiBydW5uaW5nIGluIHRoZSByZW5kZXJlciBjb250ZXh0IHNvIHRoYXRcbiAgICAgICAgICAgIC8vIHdlIGNhbiBicmluZyB1cCBlcnJvciBtZXNzYWdlcyBmb3IgdGhlIHVzZXIuXG4gICAgICAgICAgICBsb2dnZXJzLnB1c2gobmV3IFRvYXN0ZXJMb2dnZXIoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxlY3Ryb25Db250ZXh0ID09PSBFbGVjdHJvbkNvbnRleHRUeXBlLlJFTkRFUkVSKSB7XG4gICAgICAgICAgICAvLyB3aGVuIGluIHRoZSByZW5kZXJlciB1c2UgdGhlIG1lbW9yeSBsb2dnZXIgc28gdGhhdCB3ZSBjYW4gc2hvd1xuICAgICAgICAgICAgLy8gbG9ncyBpbiB0aGUgbG9nIHZpZXdcbiAgICAgICAgICAgIGxvZ2dlcnMucHVzaChuZXcgTWVtb3J5TG9nZ2VyKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gKioqIG5vdyBpbmNsdWRlIHRoZSBwZXJzaXN0ZW50IGVycm9yIGxvZyBzbyB0aGF0IHdlIGNhbiBnZXQgZXJyb3JcbiAgICAgICAgLy8gcmVwb3J0cyBmcm9tIHVzZXJzLlxuXG4gICAgICAgIGlmIChsZXZlbCA9PT0gTG9nTGV2ZWwuV0FSTiAmJiBBcHBSdW50aW1lLmlzRWxlY3Ryb24oKSkge1xuICAgICAgICAgICAgLy8gUGVyc2lzdGVudEVycm9yTG9nZ2VyIGVuYWJsZWQgZm9yIElORk8gd2lsbCBsb2NrIHVzIHVwLlxuICAgICAgICAgICAgbG9nZ2Vycy5wdXNoKGF3YWl0IFBlcnNpc3RlbnRFcnJvckxvZ2dlci5jcmVhdGUoKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAqKiogbGFzdCBpcyB0aGUgcHJpbWFyeSBsb2cuIEVpdGhlciBkaXNrIG9yIHRoZSBjb25zb2xlLlxuXG4gICAgICAgIGxvZ2dlcnMucHVzaChhd2FpdCB0aGlzLmNyZWF0ZVByaW1hcnlUYXJnZXQoKSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBNdWx0aUxvZ2dlciguLi5sb2dnZXJzKTtcblxuICAgIH1cblxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBjcmVhdGVQcmltYXJ5VGFyZ2V0KCk6IFByb21pc2U8SUxvZ2dlcj4ge1xuXG4gICAgICAgIGNvbnN0IGxvZ2dpbmdDb25maWcgPSBhd2FpdCB0aGlzLmxvZ2dpbmdDb25maWcoKTtcblxuICAgICAgICBpZiAobG9nZ2luZ0NvbmZpZy50YXJnZXQgPT09IExvZ2dlclRhcmdldC5DT05TT0xFKSB7XG4gICAgICAgIHJldHVybiBuZXcgQ29uc29sZUxvZ2dlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB0YXJnZXQ6IFwiICsgbG9nZ2luZ0NvbmZpZy50YXJnZXQpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyBsb2dnaW5nQ29uZmlnKCk6IFByb21pc2U8TG9nZ2luZ0NvbmZpZz4ge1xuXG4gICAgICAgIGlmIChBcHBSdW50aW1lLmlzRWxlY3Ryb24oKSkge1xuXG4gICAgICAgICAgICBjb25zdCBkaXJlY3RvcmllcyA9IGF3YWl0IG5ldyBEaXJlY3RvcmllcygpLmluaXQoKTtcblxuICAgICAgICAgICAgY29uc3QgcGF0aCA9IEZpbGVQYXRocy5qb2luKGRpcmVjdG9yaWVzLmNvbmZpZ0RpciwgJ2xvZ2dpbmcuanNvbicpO1xuXG4gICAgICAgICAgICBpZiAoYXdhaXQgRmlsZXMuZXhpc3RzQXN5bmMocGF0aCkpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGJ1ZmZlciA9IGF3YWl0IEZpbGVzLnJlYWRGaWxlQXN5bmMocGF0aCk7XG4gICAgICAgICAgICAgICAgY29uc3QganNvbiA9IGJ1ZmZlci50b1N0cmluZygndXRmOCcpO1xuICAgICAgICAgICAgICAgIGxldCBjb25maWcgPSBKU09OLnBhcnNlKGpzb24pIGFzIExvZ2dpbmdDb25maWc7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbmZpZy5sZXZlbCA9PT0gJ3N0cmluZycpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBuZWVkZWQgdG8gY29udmVydCB0aGUgc3ltYm9sIGJhY2sgdG8gdGhlIGVudW0uICBOb3Qgc3VyZVxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIHZlcnkgY2xlYW4gdGhvdWdoIGFuZCB3aXNoIHRoZXJlIHdhcyBhIGJldHRlciB3YXlcbiAgICAgICAgICAgICAgICAgICAgLy8gdG8gZG8gdGhpcy5cblxuICAgICAgICAgICAgICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXZlbDogTG9nTGV2ZWxzLmZyb21OYW1lKGNvbmZpZy5sZXZlbCksXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IGNvbmZpZy50YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBjb25maWc7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRhcmdldDogTG9nZ2VyVGFyZ2V0LkNPTlNPTEUsXG4gICAgICAgICAgICBsZXZlbDogdGhpcy5jb25maWd1cmVkTGV2ZWwoKVxuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgY29uZmlndXJlZExldmVsKCk6IExvZ0xldmVsIHtcbiAgICAgICAgcmV0dXJuIE9wdGlvbmFsLm9mKHByb2Nlc3MuZW52LlBPTEFSX0xPR19MRVZFTClcbiAgICAgICAgICAgIC5tYXAobGV2ZWwgPT4gTG9nTGV2ZWxzLmZyb21OYW1lKGxldmVsKSlcbiAgICAgICAgICAgIC5nZXRPckVsc2UoTG9nTGV2ZWwuV0FSTik7XG4gICAgfVxuXG59XG5cbmVudW0gTG9nZ2VyVGFyZ2V0IHtcbiAgICBDT05TT0xFID0gJ0NPTlNPTEUnLFxuICAgIC8vIERJU0sgPSAnRElTSydcbn1cblxuLyoqXG4gKiBCYXNpYyBkaXNrIGNvbmZpZyBmb3Igb3VyIGxvZyBpbmZvcm1hdGlvbi5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBMb2dnaW5nQ29uZmlnIHtcbiAgICByZWFkb25seSB0YXJnZXQ6IExvZ2dlclRhcmdldDtcbiAgICByZWFkb25seSBsZXZlbDogTG9nTGV2ZWw7XG59XG5cblxuZXhwb3J0IGludGVyZmFjZSBMb2dNZXNzYWdlIHtcblxuICAgIC8qKlxuICAgICAqIEEgdW5pcXVlIG51bWJlciBmb3IgdGhpcyBMb2dNZXNzYWdlLCBqdXN0IG5lZWRzIHRvIGJlIHVuaXF1ZSB0byB0aGVcbiAgICAgKiBwcm9jZXNzIGFuZCB3ZSBzaG91bGQgYmUgYWJsZSB0byB1c2UgYSBzaW1wbGUgbm9uY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaWR4OiBudW1iZXI7XG5cbiAgICByZWFkb25seSB0aW1lc3RhbXA6IElTT0RhdGVUaW1lU3RyaW5nO1xuXG4gICAgcmVhZG9ubHkgbGV2ZWw6IExvZ0xldmVsTmFtZTtcbiAgICByZWFkb25seSBtc2c6IHN0cmluZztcbiAgICByZWFkb25seSBhcmdzOiBSZWFkb25seUFycmF5PGFueT47XG59XG5cbmV4cG9ydCB0eXBlIExvZ0xldmVsTmFtZSA9ICdub3RpY2UnIHwgJ2luZm8nIHwgJ3dhcm4nIHwgJ2Vycm9yJyB8ICd2ZXJib3NlJyB8ICdkZWJ1Zyc7XG4iXX0=