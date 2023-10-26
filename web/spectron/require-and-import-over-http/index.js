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
const WebserverConfig_1 = require("../../js/backend/webserver/WebserverConfig");
const Webserver_1 = require("../../js/backend/webserver/Webserver");
const FileRegistry_1 = require("../../js/backend/webserver/FileRegistry");
const ResourceRegistry_1 = require("../../js/backend/webserver/ResourceRegistry");
const FilePaths_1 = require("../../js/util/FilePaths");
SpectronMain2_1.SpectronMain2.create().run((state) => __awaiter(this, void 0, void 0, function* () {
    const webserverConfig = new WebserverConfig_1.WebserverConfig(__dirname, 12345);
    const fileRegistry = new FileRegistry_1.FileRegistry(webserverConfig);
    const resourceRegistry = new ResourceRegistry_1.ResourceRegistry();
    const webserver = new Webserver_1.Webserver(webserverConfig, fileRegistry, resourceRegistry);
    yield webserver.start();
    state.window.loadFile(FilePaths_1.FilePaths.join(__dirname, "content.html"));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBQzFELGdGQUEyRTtBQUczRSxvRUFBK0Q7QUFDL0QsMEVBQXFFO0FBQ3JFLGtGQUE2RTtBQUc3RSx1REFBa0Q7QUFFbEQsNkJBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBTSxLQUFLLEVBQUMsRUFBRTtJQUVyQyxNQUFNLGVBQWUsR0FBRyxJQUFJLGlDQUFlLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRTlELE1BQU0sWUFBWSxHQUFHLElBQUksMkJBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN2RCxNQUFNLGdCQUFnQixHQUFHLElBQUksbUNBQWdCLEVBQUUsQ0FBQztJQUVoRCxNQUFNLFNBQVMsR0FBRyxJQUFJLHFCQUFTLENBQUMsZUFBZSxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2pGLE1BQU0sU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRXhCLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLHFCQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO0FBRXJFLENBQUMsQ0FBQSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NwZWN0cm9uTWFpbjJ9IGZyb20gJy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb25NYWluMic7XG5pbXBvcnQge1dlYnNlcnZlckNvbmZpZ30gZnJvbSAnLi4vLi4vanMvYmFja2VuZC93ZWJzZXJ2ZXIvV2Vic2VydmVyQ29uZmlnJztcblxuaW1wb3J0IG9zIGZyb20gJ29zJztcbmltcG9ydCB7V2Vic2VydmVyfSBmcm9tICcuLi8uLi9qcy9iYWNrZW5kL3dlYnNlcnZlci9XZWJzZXJ2ZXInO1xuaW1wb3J0IHtGaWxlUmVnaXN0cnl9IGZyb20gJy4uLy4uL2pzL2JhY2tlbmQvd2Vic2VydmVyL0ZpbGVSZWdpc3RyeSc7XG5pbXBvcnQge1Jlc291cmNlUmVnaXN0cnl9IGZyb20gJy4uLy4uL2pzL2JhY2tlbmQvd2Vic2VydmVyL1Jlc291cmNlUmVnaXN0cnknO1xuXG5pbXBvcnQge2FwcH0gZnJvbSAnZWxlY3Ryb24nO1xuaW1wb3J0IHtGaWxlUGF0aHN9IGZyb20gJy4uLy4uL2pzL3V0aWwvRmlsZVBhdGhzJztcblxuU3BlY3Ryb25NYWluMi5jcmVhdGUoKS5ydW4oYXN5bmMgc3RhdGUgPT4ge1xuXG4gICAgY29uc3Qgd2Vic2VydmVyQ29uZmlnID0gbmV3IFdlYnNlcnZlckNvbmZpZyhfX2Rpcm5hbWUsIDEyMzQ1KTtcblxuICAgIGNvbnN0IGZpbGVSZWdpc3RyeSA9IG5ldyBGaWxlUmVnaXN0cnkod2Vic2VydmVyQ29uZmlnKTtcbiAgICBjb25zdCByZXNvdXJjZVJlZ2lzdHJ5ID0gbmV3IFJlc291cmNlUmVnaXN0cnkoKTtcblxuICAgIGNvbnN0IHdlYnNlcnZlciA9IG5ldyBXZWJzZXJ2ZXIod2Vic2VydmVyQ29uZmlnLCBmaWxlUmVnaXN0cnksIHJlc291cmNlUmVnaXN0cnkpO1xuICAgIGF3YWl0IHdlYnNlcnZlci5zdGFydCgpO1xuXG4gICAgc3RhdGUud2luZG93LmxvYWRGaWxlKEZpbGVQYXRocy5qb2luKF9fZGlybmFtZSwgXCJjb250ZW50Lmh0bWxcIikpO1xuXG59KTtcblxuXG5cbiJdfQ==