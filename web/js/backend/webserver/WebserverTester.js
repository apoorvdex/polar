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
const AppPath_1 = require("../../electron/app_path/AppPath");
const WebserverConfig_1 = require("./WebserverConfig");
const FileRegistry_1 = require("./FileRegistry");
const Webserver_1 = require("./Webserver");
class WebserverTester {
    static run(dir) {
        return __awaiter(this, void 0, void 0, function* () {
            AppPath_1.AppPath.set(dir);
            const webserverConfig = new WebserverConfig_1.WebserverConfig(AppPath_1.AppPath.get(), 8005);
            const fileRegistry = new FileRegistry_1.FileRegistry(webserverConfig);
            const webserver = new Webserver_1.Webserver(webserverConfig, fileRegistry);
            try {
                yield webserver.start();
            }
            catch (e) {
                console.warn("Webserver already running.");
                throw e;
            }
        });
    }
}
exports.WebserverTester = WebserverTester;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2Vic2VydmVyVGVzdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiV2Vic2VydmVyVGVzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSw2REFBd0Q7QUFDeEQsdURBQWtEO0FBQ2xELGlEQUE0QztBQUM1QywyQ0FBc0M7QUFHdEMsTUFBYSxlQUFlO0lBRWpCLE1BQU0sQ0FBTyxHQUFHLENBQUMsR0FBVzs7WUFFL0IsaUJBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsTUFBTSxlQUFlLEdBQUcsSUFBSSxpQ0FBZSxDQUFDLGlCQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDakUsTUFBTSxZQUFZLEdBQUcsSUFBSSwyQkFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ3ZELE1BQU0sU0FBUyxHQUFHLElBQUkscUJBQVMsQ0FBQyxlQUFlLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFFL0QsSUFBSTtnQkFDQSxNQUFNLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUMzQjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNSLE9BQU8sQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQztnQkFDM0MsTUFBTSxDQUFDLENBQUM7YUFDWDtRQUVMLENBQUM7S0FBQTtDQUVKO0FBbEJELDBDQWtCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXBwUGF0aH0gZnJvbSBcIi4uLy4uL2VsZWN0cm9uL2FwcF9wYXRoL0FwcFBhdGhcIjtcbmltcG9ydCB7V2Vic2VydmVyQ29uZmlnfSBmcm9tIFwiLi9XZWJzZXJ2ZXJDb25maWdcIjtcbmltcG9ydCB7RmlsZVJlZ2lzdHJ5fSBmcm9tIFwiLi9GaWxlUmVnaXN0cnlcIjtcbmltcG9ydCB7V2Vic2VydmVyfSBmcm9tIFwiLi9XZWJzZXJ2ZXJcIjtcbmltcG9ydCB7QXN5bmNGdW5jdGlvbn0gZnJvbSAnLi4vLi4vdXRpbC9Bc3luY1dvcmtRdWV1ZSc7XG5cbmV4cG9ydCBjbGFzcyBXZWJzZXJ2ZXJUZXN0ZXIge1xuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBydW4oZGlyOiBzdHJpbmcpIHtcblxuICAgICAgICBBcHBQYXRoLnNldChkaXIpO1xuICAgICAgICBjb25zdCB3ZWJzZXJ2ZXJDb25maWcgPSBuZXcgV2Vic2VydmVyQ29uZmlnKEFwcFBhdGguZ2V0KCksIDgwMDUpO1xuICAgICAgICBjb25zdCBmaWxlUmVnaXN0cnkgPSBuZXcgRmlsZVJlZ2lzdHJ5KHdlYnNlcnZlckNvbmZpZyk7XG4gICAgICAgIGNvbnN0IHdlYnNlcnZlciA9IG5ldyBXZWJzZXJ2ZXIod2Vic2VydmVyQ29uZmlnLCBmaWxlUmVnaXN0cnkpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB3ZWJzZXJ2ZXIuc3RhcnQoKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiV2Vic2VydmVyIGFscmVhZHkgcnVubmluZy5cIik7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn1cblxuIl19