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
const ElectronContextTypes_1 = require("../electron/context/ElectronContextTypes");
const ElectronContextType_1 = require("../electron/context/ElectronContextType");
const Directories_1 = require("../datastore/Directories");
const delegate = require('electron-log');
class ElectronLogger {
    constructor() {
        this.name = 'electron-logger';
    }
    notice(msg, ...args) {
        delegate.log(msg, ...args);
    }
    info(msg, ...args) {
        delegate.log(msg, ...args);
    }
    warn(msg, ...args) {
        delegate.warn(msg, ...args);
    }
    error(msg, ...args) {
        delegate.error(msg, ...args);
    }
    verbose(msg, ...args) {
        delegate.verbose(msg, ...args);
    }
    debug(msg, ...args) {
        delegate.debug(msg, ...args);
    }
    sync() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
class ElectronLoggers {
    static create() {
        const directories = new Directories_1.Directories();
        if (ElectronContextTypes_1.ElectronContextTypes.create() === ElectronContextType_1.ElectronContextType.MAIN) {
            delegate.transports.console.level = "info";
            delegate.transports.console.format = "[{y}-{m}-{d} {h}:{i}:{s}.{ms} {z}] [{level}] {text}";
            delegate.transports.file.file = `${directories.logsDir}/polar.log`;
            delegate.transports.file.format = "[{y}-{m}-{d} {h}:{i}:{s}.{ms} {z}] [{level}] {text}";
            delegate.transports.file.level = "info";
            delegate.transports.file.appName = "polar";
            console.log("Configured main electron logger writing to: " + directories.logsDir);
        }
        else {
            console.log("Skipping ElectronLogger initialization (running in renderer)");
        }
        return new ElectronLogger();
    }
}
exports.ElectronLoggers = ElectronLoggers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWxlY3Ryb25Mb2dnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJFbGVjdHJvbkxvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsbUZBQThFO0FBQzlFLGlGQUE0RTtBQUM1RSwwREFBcUQ7QUFFckQsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBRXpDLE1BQU0sY0FBYztJQUFwQjtRQUVvQixTQUFJLEdBQVcsaUJBQWlCLENBQUM7SUE4QnJELENBQUM7SUE1QlUsTUFBTSxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDckMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRU0sSUFBSSxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDbkMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRU0sSUFBSSxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDbkMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU0sS0FBSyxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDcEMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU0sT0FBTyxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDdEMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU0sS0FBSyxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDcEMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRVksSUFBSTs7UUFFakIsQ0FBQztLQUFBO0NBRUo7QUFFRCxNQUFhLGVBQWU7SUFFakIsTUFBTSxDQUFDLE1BQU07UUFFaEIsTUFBTSxXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7UUFFdEMsSUFBSSwyQ0FBb0IsQ0FBQyxNQUFNLEVBQUUsS0FBSyx5Q0FBbUIsQ0FBQyxJQUFJLEVBQUU7WUFHNUQsUUFBUSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztZQUMzQyxRQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcscURBQXFELENBQUM7WUFLM0YsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsV0FBVyxDQUFDLE9BQU8sWUFBWSxDQUFDO1lBQ25FLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxxREFBcUQsQ0FBQztZQUV4RixRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1lBQ3hDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFFM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4Q0FBOEMsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7U0FFckY7YUFBTTtZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsOERBQThELENBQUMsQ0FBQztTQUMvRTtRQUVELE9BQU8sSUFBSSxjQUFjLEVBQUUsQ0FBQztJQUVoQyxDQUFDO0NBRUo7QUEvQkQsMENBK0JDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTaW1wbGUgbG9nZ2VyIHRoYXQganVzdCB3cml0ZXMgdG8gdGhlIGNvbnNvbGUuXG4gKi9cbmltcG9ydCB7SUxvZ2dlcn0gZnJvbSAnLi9JTG9nZ2VyJztcbmltcG9ydCB7RmlsZXN9IGZyb20gJy4uL3V0aWwvRmlsZXMnO1xuaW1wb3J0IHtFbGVjdHJvbkNvbnRleHRUeXBlc30gZnJvbSAnLi4vZWxlY3Ryb24vY29udGV4dC9FbGVjdHJvbkNvbnRleHRUeXBlcyc7XG5pbXBvcnQge0VsZWN0cm9uQ29udGV4dFR5cGV9IGZyb20gJy4uL2VsZWN0cm9uL2NvbnRleHQvRWxlY3Ryb25Db250ZXh0VHlwZSc7XG5pbXBvcnQge0RpcmVjdG9yaWVzfSBmcm9tICcuLi9kYXRhc3RvcmUvRGlyZWN0b3JpZXMnO1xuXG5jb25zdCBkZWxlZ2F0ZSA9IHJlcXVpcmUoJ2VsZWN0cm9uLWxvZycpO1xuXG5jbGFzcyBFbGVjdHJvbkxvZ2dlciBpbXBsZW1lbnRzIElMb2dnZXIge1xuXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWU6IHN0cmluZyA9ICdlbGVjdHJvbi1sb2dnZXInO1xuXG4gICAgcHVibGljIG5vdGljZShtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgZGVsZWdhdGUubG9nKG1zZywgLi4uYXJncyk7XG4gICAgfVxuXG4gICAgcHVibGljIGluZm8obXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIGRlbGVnYXRlLmxvZyhtc2csIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHB1YmxpYyB3YXJuKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBkZWxlZ2F0ZS53YXJuKG1zZywgLi4uYXJncyk7XG4gICAgfVxuXG4gICAgcHVibGljIGVycm9yKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBkZWxlZ2F0ZS5lcnJvcihtc2csIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHB1YmxpYyB2ZXJib3NlKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBkZWxlZ2F0ZS52ZXJib3NlKG1zZywgLi4uYXJncyk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlYnVnKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBkZWxlZ2F0ZS5kZWJ1Zyhtc2csIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzeW5jKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICAvLyBub29wXG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBFbGVjdHJvbkxvZ2dlcnMge1xuXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGUoKSB7XG5cbiAgICAgICAgY29uc3QgZGlyZWN0b3JpZXMgPSBuZXcgRGlyZWN0b3JpZXMoKTtcblxuICAgICAgICBpZiAoRWxlY3Ryb25Db250ZXh0VHlwZXMuY3JlYXRlKCkgPT09IEVsZWN0cm9uQ29udGV4dFR5cGUuTUFJTikge1xuXG4gICAgICAgICAgICAvLyAqKiogY29uZmlndXJlIGNvbnNvbGVcbiAgICAgICAgICAgIGRlbGVnYXRlLnRyYW5zcG9ydHMuY29uc29sZS5sZXZlbCA9IFwiaW5mb1wiO1xuICAgICAgICAgICAgZGVsZWdhdGUudHJhbnNwb3J0cy5jb25zb2xlLmZvcm1hdCA9IFwiW3t5fS17bX0te2R9IHtofTp7aX06e3N9Lnttc30ge3p9XSBbe2xldmVsfV0ge3RleHR9XCI7XG5cbiAgICAgICAgICAgIC8vICoqKiBjb25maWd1cmUgZmlsZVxuXG4gICAgICAgICAgICAvLyBzZXQgdGhlIGRpcmVjdG9yeSBuYW1lIHByb3Blcmx5XG4gICAgICAgICAgICBkZWxlZ2F0ZS50cmFuc3BvcnRzLmZpbGUuZmlsZSA9IGAke2RpcmVjdG9yaWVzLmxvZ3NEaXJ9L3BvbGFyLmxvZ2A7XG4gICAgICAgICAgICBkZWxlZ2F0ZS50cmFuc3BvcnRzLmZpbGUuZm9ybWF0ID0gXCJbe3l9LXttfS17ZH0ge2h9OntpfTp7c30ue21zfSB7en1dIFt7bGV2ZWx9XSB7dGV4dH1cIjtcblxuICAgICAgICAgICAgZGVsZWdhdGUudHJhbnNwb3J0cy5maWxlLmxldmVsID0gXCJpbmZvXCI7XG4gICAgICAgICAgICBkZWxlZ2F0ZS50cmFuc3BvcnRzLmZpbGUuYXBwTmFtZSA9IFwicG9sYXJcIjtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb25maWd1cmVkIG1haW4gZWxlY3Ryb24gbG9nZ2VyIHdyaXRpbmcgdG86IFwiICsgZGlyZWN0b3JpZXMubG9nc0Rpcik7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2tpcHBpbmcgRWxlY3Ryb25Mb2dnZXIgaW5pdGlhbGl6YXRpb24gKHJ1bm5pbmcgaW4gcmVuZGVyZXIpXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBFbGVjdHJvbkxvZ2dlcigpO1xuXG4gICAgfVxuXG59XG4iXX0=