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
const FilePaths_1 = require("../util/FilePaths");
const Files_1 = require("../util/Files");
const Logger_1 = require("../logger/Logger");
const Directories_1 = require("../datastore/Directories");
const log = Logger_1.Logger.create();
class PolarDataDir {
    static useFreshDirectory(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const dataDir = FilePaths_1.FilePaths.createTempName(name);
            process.env.POLAR_DATA_DIR = dataDir;
            console.log("Using new dataDir: " + dataDir);
            yield Files_1.Files.removeDirectoryRecursivelyAsync(dataDir);
            const directories = new Directories_1.Directories();
            yield Files_1.Files.createDirAsync(directories.dataDir),
                yield Files_1.Files.createDirAsync(directories.stashDir),
                yield Files_1.Files.createDirAsync(directories.logsDir),
                yield Files_1.Files.createDirAsync(directories.configDir),
                log.info("Using polar data dir: " + dataDir);
            return dataDir;
        });
    }
    static reuseDirectory(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const dataDir = FilePaths_1.FilePaths.createTempName(name);
            process.env.POLAR_DATA_DIR = dataDir;
            const directories = new Directories_1.Directories();
            yield directories.init();
            log.info("Using polar data dir: " + dataDir);
            return dataDir;
        });
    }
    static get() {
        return process.env.POLAR_DATA_DIR;
    }
}
exports.PolarDataDir = PolarDataDir;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9sYXJEYXRhRGlyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUG9sYXJEYXRhRGlyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxpREFBNEM7QUFDNUMseUNBQW9DO0FBQ3BDLDZDQUF3QztBQUN4QywwREFBcUQ7QUFFckQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsWUFBWTtJQUVkLE1BQU0sQ0FBTyxpQkFBaUIsQ0FBQyxJQUFZOztZQUU5QyxNQUFNLE9BQU8sR0FBRyxxQkFBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUM7WUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxPQUFPLENBQUMsQ0FBQztZQUM3QyxNQUFNLGFBQUssQ0FBQywrQkFBK0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUVyRCxNQUFNLFdBQVcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztZQUV0QyxNQUFNLGFBQUssQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQztnQkFDL0MsTUFBTSxhQUFLLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7Z0JBQ2hELE1BQU0sYUFBSyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO2dCQUMvQyxNQUFNLGFBQUssQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQztnQkFFakQsR0FBRyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxPQUFPLENBQUMsQ0FBQztZQUU3QyxPQUFPLE9BQU8sQ0FBQztRQUVuQixDQUFDO0tBQUE7SUFFTSxNQUFNLENBQU8sY0FBYyxDQUFDLElBQVk7O1lBRTNDLE1BQU0sT0FBTyxHQUFHLHFCQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQztZQUVyQyxNQUFNLFdBQVcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztZQUN0QyxNQUFNLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUV6QixHQUFHLENBQUMsSUFBSSxDQUFDLHdCQUF3QixHQUFHLE9BQU8sQ0FBQyxDQUFDO1lBRTdDLE9BQU8sT0FBTyxDQUFDO1FBRW5CLENBQUM7S0FBQTtJQUVNLE1BQU0sQ0FBQyxHQUFHO1FBQ2IsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUN0QyxDQUFDO0NBRUo7QUF4Q0Qsb0NBd0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGaWxlUGF0aHN9IGZyb20gJy4uL3V0aWwvRmlsZVBhdGhzJztcbmltcG9ydCB7RmlsZXN9IGZyb20gJy4uL3V0aWwvRmlsZXMnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtEaXJlY3Rvcmllc30gZnJvbSAnLi4vZGF0YXN0b3JlL0RpcmVjdG9yaWVzJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgY2xhc3MgUG9sYXJEYXRhRGlyIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgdXNlRnJlc2hEaXJlY3RvcnkobmFtZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcblxuICAgICAgICBjb25zdCBkYXRhRGlyID0gRmlsZVBhdGhzLmNyZWF0ZVRlbXBOYW1lKG5hbWUpO1xuICAgICAgICBwcm9jZXNzLmVudi5QT0xBUl9EQVRBX0RJUiA9IGRhdGFEaXI7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVXNpbmcgbmV3IGRhdGFEaXI6IFwiICsgZGF0YURpcik7XG4gICAgICAgIGF3YWl0IEZpbGVzLnJlbW92ZURpcmVjdG9yeVJlY3Vyc2l2ZWx5QXN5bmMoZGF0YURpcik7XG5cbiAgICAgICAgY29uc3QgZGlyZWN0b3JpZXMgPSBuZXcgRGlyZWN0b3JpZXMoKTtcblxuICAgICAgICBhd2FpdCBGaWxlcy5jcmVhdGVEaXJBc3luYyhkaXJlY3Rvcmllcy5kYXRhRGlyKSxcbiAgICAgICAgYXdhaXQgRmlsZXMuY3JlYXRlRGlyQXN5bmMoZGlyZWN0b3JpZXMuc3Rhc2hEaXIpLFxuICAgICAgICBhd2FpdCBGaWxlcy5jcmVhdGVEaXJBc3luYyhkaXJlY3Rvcmllcy5sb2dzRGlyKSxcbiAgICAgICAgYXdhaXQgRmlsZXMuY3JlYXRlRGlyQXN5bmMoZGlyZWN0b3JpZXMuY29uZmlnRGlyKSxcblxuICAgICAgICBsb2cuaW5mbyhcIlVzaW5nIHBvbGFyIGRhdGEgZGlyOiBcIiArIGRhdGFEaXIpO1xuXG4gICAgICAgIHJldHVybiBkYXRhRGlyO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyByZXVzZURpcmVjdG9yeShuYW1lOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuXG4gICAgICAgIGNvbnN0IGRhdGFEaXIgPSBGaWxlUGF0aHMuY3JlYXRlVGVtcE5hbWUobmFtZSk7XG4gICAgICAgIHByb2Nlc3MuZW52LlBPTEFSX0RBVEFfRElSID0gZGF0YURpcjtcblxuICAgICAgICBjb25zdCBkaXJlY3RvcmllcyA9IG5ldyBEaXJlY3RvcmllcygpO1xuICAgICAgICBhd2FpdCBkaXJlY3Rvcmllcy5pbml0KCk7XG5cbiAgICAgICAgbG9nLmluZm8oXCJVc2luZyBwb2xhciBkYXRhIGRpcjogXCIgKyBkYXRhRGlyKTtcblxuICAgICAgICByZXR1cm4gZGF0YURpcjtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0KCkge1xuICAgICAgICByZXR1cm4gcHJvY2Vzcy5lbnYuUE9MQVJfREFUQV9ESVI7XG4gICAgfVxuXG59XG4iXX0=