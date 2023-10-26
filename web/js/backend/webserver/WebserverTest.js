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
const FilePaths_1 = require("../../util/FilePaths");
const Files_1 = require("../../util/Files");
const WebserverConfig_1 = require("./WebserverConfig");
const FileRegistry_1 = require("./FileRegistry");
const Webserver_1 = require("./Webserver");
const Hashcodes_1 = require("../../Hashcodes");
const Assertions_1 = require("../../test/Assertions");
const Http_1 = require("../../util/Http");
const chai_1 = require("chai");
const ResourceRegistry_1 = require("./ResourceRegistry");
describe('Webserver', function () {
    describe('create', function () {
        it("basic", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const webserverConfig = new WebserverConfig_1.WebserverConfig("..", 8085);
                const fileRegistry = new FileRegistry_1.FileRegistry(webserverConfig);
                const webserver = new Webserver_1.Webserver(webserverConfig, fileRegistry);
                yield webserver.start();
                webserver.stop();
            });
        });
        it("serving files", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const webserverConfig = new WebserverConfig_1.WebserverConfig("..", 8095);
                const fileRegistry = new FileRegistry_1.FileRegistry(webserverConfig);
                const webserver = new Webserver_1.Webserver(webserverConfig, fileRegistry);
                yield webserver.start();
                const path = FilePaths_1.FilePaths.tmpfile('file-registry.html');
                yield Files_1.Files.writeFileAsync(path, 'hello world');
                const fileMeta = fileRegistry.register("0x000", path);
                chai_1.assert.ok(fileMeta.url !== undefined);
                const buffer = yield Files_1.Files.readFileAsync(path);
                const hashcode = Hashcodes_1.Hashcodes.create(buffer.toString('utf-8'));
                const expected = {
                    "key": "0x000",
                    "filename": path,
                    "url": "http://127.0.0.1:8095/files/0x000"
                };
                Assertions_1.assertJSON(fileMeta, expected);
                const response = yield Http_1.Http.execute(fileMeta.url);
                console.log("FIXME:" + response.data.toString('utf8'));
                chai_1.assert.equal(hashcode, Hashcodes_1.Hashcodes.create(response.data.toString('utf8')));
                webserver.stop();
            });
        });
        it("serving resources", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const webserverConfig = new WebserverConfig_1.WebserverConfig("..", 8095);
                const fileRegistry = new FileRegistry_1.FileRegistry(webserverConfig);
                const resourceRegistry = new ResourceRegistry_1.ResourceRegistry();
                const webserver = new Webserver_1.Webserver(webserverConfig, fileRegistry, resourceRegistry);
                yield webserver.start();
                const path = FilePaths_1.FilePaths.tmpfile('helloworld.html');
                yield Files_1.Files.writeFileAsync(path, 'hello world');
                resourceRegistry.register("/helloworld.html", path);
                const buffer = yield Files_1.Files.readFileAsync(path);
                const response = yield Http_1.Http.execute('http://localhost:8095/helloworld.html');
                chai_1.assert.equal(response.response.headers['content-type'], 'text/html; charset=UTF-8');
                chai_1.assert.equal('hello world', response.data.toString('utf8'));
                webserver.stop();
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2Vic2VydmVyVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIldlYnNlcnZlclRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLG9EQUErQztBQUMvQyw0Q0FBdUM7QUFDdkMsdURBQWtEO0FBQ2xELGlEQUE0QztBQUM1QywyQ0FBc0M7QUFDdEMsK0NBQTBDO0FBQzFDLHNEQUFpRDtBQUNqRCwwQ0FBcUM7QUFDckMsK0JBQTRCO0FBQzVCLHlEQUFvRDtBQUdwRCxRQUFRLENBQUMsV0FBVyxFQUFFO0lBRWxCLFFBQVEsQ0FBQyxRQUFRLEVBQUU7UUF1QmYsRUFBRSxDQUFDLE9BQU8sRUFBRTs7Z0JBRVIsTUFBTSxlQUFlLEdBQUcsSUFBSSxpQ0FBZSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDeEQsTUFBTSxZQUFZLEdBQUcsSUFBSSwyQkFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUV2RCxNQUFNLFNBQVMsR0FBRyxJQUFJLHFCQUFTLENBQUMsZUFBZSxFQUFFLFlBQVksQ0FBQyxDQUFDO2dCQUMvRCxNQUFNLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDeEIsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1lBRXJCLENBQUM7U0FBQSxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsZUFBZSxFQUFFOztnQkFFaEIsTUFBTSxlQUFlLEdBQUcsSUFBSSxpQ0FBZSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDeEQsTUFBTSxZQUFZLEdBQUcsSUFBSSwyQkFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUN2RCxNQUFNLFNBQVMsR0FBRyxJQUFJLHFCQUFTLENBQUMsZUFBZSxFQUFFLFlBQVksQ0FBQyxDQUFDO2dCQUUvRCxNQUFNLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFFeEIsTUFBTSxJQUFJLEdBQUcscUJBQVMsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztnQkFDckQsTUFBTSxhQUFLLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztnQkFFaEQsTUFBTSxRQUFRLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBRXRELGFBQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxTQUFTLENBQUMsQ0FBQztnQkFFdEMsTUFBTSxNQUFNLEdBQUcsTUFBTSxhQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUUvQyxNQUFNLFFBQVEsR0FBRyxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBRTVELE1BQU0sUUFBUSxHQUFHO29CQUNiLEtBQUssRUFBRSxPQUFPO29CQUNkLFVBQVUsRUFBRSxJQUFJO29CQUNoQixLQUFLLEVBQUUsbUNBQW1DO2lCQUM3QyxDQUFDO2dCQUVGLHVCQUFVLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUUvQixNQUFNLFFBQVEsR0FBRyxNQUFNLFdBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUVsRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUV2RCxhQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRXpFLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUVyQixDQUFDO1NBQUEsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLG1CQUFtQixFQUFFOztnQkFFcEIsTUFBTSxlQUFlLEdBQUcsSUFBSSxpQ0FBZSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDeEQsTUFBTSxZQUFZLEdBQUcsSUFBSSwyQkFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUN2RCxNQUFNLGdCQUFnQixHQUFHLElBQUksbUNBQWdCLEVBQUUsQ0FBQztnQkFDaEQsTUFBTSxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLGVBQWUsRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztnQkFFakYsTUFBTSxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBRXhCLE1BQU0sSUFBSSxHQUFHLHFCQUFTLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQ2xELE1BQU0sYUFBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7Z0JBRWhELGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFFcEQsTUFBTSxNQUFNLEdBQUcsTUFBTSxhQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUUvQyxNQUFNLFFBQVEsR0FBRyxNQUFNLFdBQUksQ0FBQyxPQUFPLENBQUMsdUNBQXVDLENBQUMsQ0FBQztnQkFFN0UsYUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO2dCQUNwRixhQUFNLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUU1RCxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFckIsQ0FBQztTQUFBLENBQUMsQ0FBQztJQUVQLENBQUMsQ0FBQyxDQUFDO0FBS1AsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZpbGVQYXRoc30gZnJvbSBcIi4uLy4uL3V0aWwvRmlsZVBhdGhzXCI7XG5pbXBvcnQge0ZpbGVzfSBmcm9tIFwiLi4vLi4vdXRpbC9GaWxlc1wiO1xuaW1wb3J0IHtXZWJzZXJ2ZXJDb25maWd9IGZyb20gJy4vV2Vic2VydmVyQ29uZmlnJztcbmltcG9ydCB7RmlsZVJlZ2lzdHJ5fSBmcm9tICcuL0ZpbGVSZWdpc3RyeSc7XG5pbXBvcnQge1dlYnNlcnZlcn0gZnJvbSAnLi9XZWJzZXJ2ZXInO1xuaW1wb3J0IHtIYXNoY29kZXN9IGZyb20gJy4uLy4uL0hhc2hjb2Rlcyc7XG5pbXBvcnQge2Fzc2VydEpTT059IGZyb20gJy4uLy4uL3Rlc3QvQXNzZXJ0aW9ucyc7XG5pbXBvcnQge0h0dHB9IGZyb20gJy4uLy4uL3V0aWwvSHR0cCc7XG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQge1Jlc291cmNlUmVnaXN0cnl9IGZyb20gJy4vUmVzb3VyY2VSZWdpc3RyeSc7XG5pbXBvcnQge1dlYnNlcnZlckNlcnRzfSBmcm9tICcuL1dlYnNlcnZlckNlcnRzJztcblxuZGVzY3JpYmUoJ1dlYnNlcnZlcicsIGZ1bmN0aW9uKCkge1xuXG4gICAgZGVzY3JpYmUoJ2NyZWF0ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAvL1xuICAgICAgICAvLyBpdChcImJhc2ljIFNTTFwiLCBhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgIGNvbnN0IHdlYnNlcnZlckNvbmZpZyA9IFdlYnNlcnZlckNvbmZpZy5jcmVhdGUoXG4gICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAvLyAgICAgICAgICAgICBkaXI6IFwiLi5cIixcbiAgICAgICAgLy8gICAgICAgICAgICAgcG9ydDogODA4NSxcbiAgICAgICAgLy8gICAgICAgICAgICAgaG9zdDogXCIxMjcuMC4wLjFcIixcbiAgICAgICAgLy8gICAgICAgICAgICAgdXNlU1NMOiB0cnVlLFxuICAgICAgICAvLyAgICAgICAgICAgICBzc2w6IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNlcnQ6IFdlYnNlcnZlckNlcnRzLkNFUlQsXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBrZXk6IFdlYnNlcnZlckNlcnRzLktFWSxcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgIH0pO1xuICAgICAgICAvLyAgICAgY29uc3QgZmlsZVJlZ2lzdHJ5ID0gbmV3IEZpbGVSZWdpc3RyeSh3ZWJzZXJ2ZXJDb25maWcpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgY29uc3Qgd2Vic2VydmVyID0gbmV3IFdlYnNlcnZlcih3ZWJzZXJ2ZXJDb25maWcsIGZpbGVSZWdpc3RyeSk7XG4gICAgICAgIC8vICAgICB3ZWJzZXJ2ZXIuc3RhcnQoKTtcbiAgICAgICAgLy8gICAgIHdlYnNlcnZlci5zdG9wKCk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIH0pO1xuXG4gICAgICAgIGl0KFwiYmFzaWNcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHdlYnNlcnZlckNvbmZpZyA9IG5ldyBXZWJzZXJ2ZXJDb25maWcoXCIuLlwiLCA4MDg1KTtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVSZWdpc3RyeSA9IG5ldyBGaWxlUmVnaXN0cnkod2Vic2VydmVyQ29uZmlnKTtcblxuICAgICAgICAgICAgY29uc3Qgd2Vic2VydmVyID0gbmV3IFdlYnNlcnZlcih3ZWJzZXJ2ZXJDb25maWcsIGZpbGVSZWdpc3RyeSk7XG4gICAgICAgICAgICBhd2FpdCB3ZWJzZXJ2ZXIuc3RhcnQoKTtcbiAgICAgICAgICAgIHdlYnNlcnZlci5zdG9wKCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJzZXJ2aW5nIGZpbGVzXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBjb25zdCB3ZWJzZXJ2ZXJDb25maWcgPSBuZXcgV2Vic2VydmVyQ29uZmlnKFwiLi5cIiwgODA5NSk7XG4gICAgICAgICAgICBjb25zdCBmaWxlUmVnaXN0cnkgPSBuZXcgRmlsZVJlZ2lzdHJ5KHdlYnNlcnZlckNvbmZpZyk7XG4gICAgICAgICAgICBjb25zdCB3ZWJzZXJ2ZXIgPSBuZXcgV2Vic2VydmVyKHdlYnNlcnZlckNvbmZpZywgZmlsZVJlZ2lzdHJ5KTtcblxuICAgICAgICAgICAgYXdhaXQgd2Vic2VydmVyLnN0YXJ0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSBGaWxlUGF0aHMudG1wZmlsZSgnZmlsZS1yZWdpc3RyeS5odG1sJyk7XG4gICAgICAgICAgICBhd2FpdCBGaWxlcy53cml0ZUZpbGVBc3luYyhwYXRoLCAnaGVsbG8gd29ybGQnKTtcblxuICAgICAgICAgICAgY29uc3QgZmlsZU1ldGEgPSBmaWxlUmVnaXN0cnkucmVnaXN0ZXIoXCIweDAwMFwiLCBwYXRoKTtcblxuICAgICAgICAgICAgYXNzZXJ0Lm9rKGZpbGVNZXRhLnVybCAhPT0gdW5kZWZpbmVkKTtcblxuICAgICAgICAgICAgY29uc3QgYnVmZmVyID0gYXdhaXQgRmlsZXMucmVhZEZpbGVBc3luYyhwYXRoKTtcblxuICAgICAgICAgICAgY29uc3QgaGFzaGNvZGUgPSBIYXNoY29kZXMuY3JlYXRlKGJ1ZmZlci50b1N0cmluZygndXRmLTgnKSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xuICAgICAgICAgICAgICAgIFwia2V5XCI6IFwiMHgwMDBcIixcbiAgICAgICAgICAgICAgICBcImZpbGVuYW1lXCI6IHBhdGgsXG4gICAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwOi8vMTI3LjAuMC4xOjgwOTUvZmlsZXMvMHgwMDBcIlxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgYXNzZXJ0SlNPTihmaWxlTWV0YSwgZXhwZWN0ZWQpO1xuXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEh0dHAuZXhlY3V0ZShmaWxlTWV0YS51cmwpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZJWE1FOlwiICsgcmVzcG9uc2UuZGF0YS50b1N0cmluZygndXRmOCcpKTtcblxuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKGhhc2hjb2RlLCBIYXNoY29kZXMuY3JlYXRlKHJlc3BvbnNlLmRhdGEudG9TdHJpbmcoJ3V0ZjgnKSkpO1xuXG4gICAgICAgICAgICB3ZWJzZXJ2ZXIuc3RvcCgpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwic2VydmluZyByZXNvdXJjZXNcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHdlYnNlcnZlckNvbmZpZyA9IG5ldyBXZWJzZXJ2ZXJDb25maWcoXCIuLlwiLCA4MDk1KTtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVSZWdpc3RyeSA9IG5ldyBGaWxlUmVnaXN0cnkod2Vic2VydmVyQ29uZmlnKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc291cmNlUmVnaXN0cnkgPSBuZXcgUmVzb3VyY2VSZWdpc3RyeSgpO1xuICAgICAgICAgICAgY29uc3Qgd2Vic2VydmVyID0gbmV3IFdlYnNlcnZlcih3ZWJzZXJ2ZXJDb25maWcsIGZpbGVSZWdpc3RyeSwgcmVzb3VyY2VSZWdpc3RyeSk7XG5cbiAgICAgICAgICAgIGF3YWl0IHdlYnNlcnZlci5zdGFydCgpO1xuXG4gICAgICAgICAgICBjb25zdCBwYXRoID0gRmlsZVBhdGhzLnRtcGZpbGUoJ2hlbGxvd29ybGQuaHRtbCcpO1xuICAgICAgICAgICAgYXdhaXQgRmlsZXMud3JpdGVGaWxlQXN5bmMocGF0aCwgJ2hlbGxvIHdvcmxkJyk7XG5cbiAgICAgICAgICAgIHJlc291cmNlUmVnaXN0cnkucmVnaXN0ZXIoXCIvaGVsbG93b3JsZC5odG1sXCIsIHBhdGgpO1xuXG4gICAgICAgICAgICBjb25zdCBidWZmZXIgPSBhd2FpdCBGaWxlcy5yZWFkRmlsZUFzeW5jKHBhdGgpO1xuXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEh0dHAuZXhlY3V0ZSgnaHR0cDovL2xvY2FsaG9zdDo4MDk1L2hlbGxvd29ybGQuaHRtbCcpO1xuXG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwocmVzcG9uc2UucmVzcG9uc2UuaGVhZGVyc1snY29udGVudC10eXBlJ10sICd0ZXh0L2h0bWw7IGNoYXJzZXQ9VVRGLTgnKTtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbCgnaGVsbG8gd29ybGQnLCByZXNwb25zZS5kYXRhLnRvU3RyaW5nKCd1dGY4JykpO1xuXG4gICAgICAgICAgICB3ZWJzZXJ2ZXIuc3RvcCgpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cblxuXG5cbn0pO1xuXG4iXX0=