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
const WebserverConfig_1 = require("./WebserverConfig");
const chai_1 = require("chai");
const FileRegistry_1 = require("./FileRegistry");
const Assertions_1 = require("../../test/Assertions");
const Files_1 = require("../../util/Files");
const FilePaths_1 = require("../../util/FilePaths");
const webserverConfig = new WebserverConfig_1.WebserverConfig(".", 8080);
describe('FileRegistry', function () {
    describe('create', function () {
        it("basic", function () {
            return __awaiter(this, void 0, void 0, function* () {
                let fileRegistry = new FileRegistry_1.FileRegistry(webserverConfig);
                chai_1.assert.equal(fileRegistry.hasKey("0x0001"), false);
                let path = FilePaths_1.FilePaths.tmpfile('file-registry.html');
                yield Files_1.Files.writeFileAsync(path, 'hello world');
                let registerData = fileRegistry.register("0x0001", path);
                let expected = {
                    "key": "0x0001",
                    "filename": path,
                    "url": "http://127.0.0.1:8080/files/0x0001"
                };
                Assertions_1.assertJSON(registerData, expected);
                chai_1.assert.equal(fileRegistry.hasKey("0x0001"), true);
            });
        });
        it("registerFile", function () {
            return __awaiter(this, void 0, void 0, function* () {
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZVJlZ2lzdHJ5VGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkZpbGVSZWdpc3RyeVRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVEQUFrRDtBQUVsRCwrQkFBNEI7QUFDNUIsaURBQTRDO0FBQzVDLHNEQUFpRDtBQUNqRCw0Q0FBdUM7QUFDdkMsb0RBQStDO0FBRS9DLE1BQU0sZUFBZSxHQUFHLElBQUksaUNBQWUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFdkQsUUFBUSxDQUFDLGNBQWMsRUFBRTtJQUVyQixRQUFRLENBQUMsUUFBUSxFQUFFO1FBRWYsRUFBRSxDQUFDLE9BQU8sRUFBRTs7Z0JBRVIsSUFBSSxZQUFZLEdBQUcsSUFBSSwyQkFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUVyRCxhQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBRW5ELElBQUksSUFBSSxHQUFHLHFCQUFTLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7Z0JBQ25ELE1BQU0sYUFBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7Z0JBRWhELElBQUksWUFBWSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUV6RCxJQUFJLFFBQVEsR0FBRztvQkFDWCxLQUFLLEVBQUUsUUFBUTtvQkFDZixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsS0FBSyxFQUFFLG9DQUFvQztpQkFDOUMsQ0FBQztnQkFFRix1QkFBVSxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFFbkMsYUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRXRELENBQUM7U0FBQSxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsY0FBYyxFQUFFOztZQUduQixDQUFDO1NBQUEsQ0FBQyxDQUFDO0lBRVAsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7V2Vic2VydmVyQ29uZmlnfSBmcm9tICcuL1dlYnNlcnZlckNvbmZpZyc7XG5cbmltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcbmltcG9ydCB7RmlsZVJlZ2lzdHJ5fSBmcm9tICcuL0ZpbGVSZWdpc3RyeSc7XG5pbXBvcnQge2Fzc2VydEpTT059IGZyb20gJy4uLy4uL3Rlc3QvQXNzZXJ0aW9ucyc7XG5pbXBvcnQge0ZpbGVzfSBmcm9tICcuLi8uLi91dGlsL0ZpbGVzJztcbmltcG9ydCB7RmlsZVBhdGhzfSBmcm9tICcuLi8uLi91dGlsL0ZpbGVQYXRocyc7XG5cbmNvbnN0IHdlYnNlcnZlckNvbmZpZyA9IG5ldyBXZWJzZXJ2ZXJDb25maWcoXCIuXCIsIDgwODApO1xuXG5kZXNjcmliZSgnRmlsZVJlZ2lzdHJ5JywgZnVuY3Rpb24oKSB7XG5cbiAgICBkZXNjcmliZSgnY3JlYXRlJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgaXQoXCJiYXNpY1wiLCBhc3luYyBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIGxldCBmaWxlUmVnaXN0cnkgPSBuZXcgRmlsZVJlZ2lzdHJ5KHdlYnNlcnZlckNvbmZpZyk7XG5cbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChmaWxlUmVnaXN0cnkuaGFzS2V5KFwiMHgwMDAxXCIpLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIGxldCBwYXRoID0gRmlsZVBhdGhzLnRtcGZpbGUoJ2ZpbGUtcmVnaXN0cnkuaHRtbCcpO1xuICAgICAgICAgICAgYXdhaXQgRmlsZXMud3JpdGVGaWxlQXN5bmMocGF0aCwgJ2hlbGxvIHdvcmxkJyk7XG5cbiAgICAgICAgICAgIGxldCByZWdpc3RlckRhdGEgPSBmaWxlUmVnaXN0cnkucmVnaXN0ZXIoXCIweDAwMDFcIiwgcGF0aCk7XG5cbiAgICAgICAgICAgIGxldCBleHBlY3RlZCA9IHtcbiAgICAgICAgICAgICAgICBcImtleVwiOiBcIjB4MDAwMVwiLFxuICAgICAgICAgICAgICAgIFwiZmlsZW5hbWVcIjogcGF0aCxcbiAgICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHA6Ly8xMjcuMC4wLjE6ODA4MC9maWxlcy8weDAwMDFcIlxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgYXNzZXJ0SlNPTihyZWdpc3RlckRhdGEsIGV4cGVjdGVkKTtcblxuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKGZpbGVSZWdpc3RyeS5oYXNLZXkoXCIweDAwMDFcIiksIHRydWUpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwicmVnaXN0ZXJGaWxlXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcblxuXG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbn0pO1xuIl19