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
const TestingTime_1 = require("../../test/TestingTime");
const CapturedPHZWriter_1 = require("../../capture/CapturedPHZWriter");
const ProxyServerConfig_1 = require("./ProxyServerConfig");
const CacheRegistry_1 = require("./CacheRegistry");
const MockCapturedContent_1 = require("../../capture/MockCapturedContent");
const FilePaths_1 = require("../../util/FilePaths");
TestingTime_1.TestingTime.freeze();
describe('CacheRegistryTest', function () {
    describe('Load PHZ', function () {
        it("registerFile", function () {
            return __awaiter(this, void 0, void 0, function* () {
                TestingTime_1.TestingTime.freeze();
                const captured = MockCapturedContent_1.MockCapturedContent.create();
                const path = FilePaths_1.FilePaths.tmpfile("cached-entries-factory.phz");
                const capturedPHZWriter = new CapturedPHZWriter_1.CapturedPHZWriter(path);
                yield capturedPHZWriter.convert(captured);
                const proxyServerConfig = new ProxyServerConfig_1.ProxyServerConfig(12345);
                const cacheRegistry = new CacheRegistry_1.CacheRegistry(proxyServerConfig);
                yield cacheRegistry.registerFile(path);
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FjaGVSZWdpc3RyeVRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDYWNoZVJlZ2lzdHJ5VGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsd0RBQW1EO0FBQ25ELHVFQUFrRTtBQUNsRSwyREFBc0Q7QUFDdEQsbURBQThDO0FBQzlDLDJFQUFzRTtBQUN0RSxvREFBK0M7QUFFL0MseUJBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVyQixRQUFRLENBQUMsbUJBQW1CLEVBQUU7SUFFMUIsUUFBUSxDQUFDLFVBQVUsRUFBRTtRQUVqQixFQUFFLENBQUMsY0FBYyxFQUFFOztnQkFFZix5QkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUVyQixNQUFNLFFBQVEsR0FBRyx5Q0FBbUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFFOUMsTUFBTSxJQUFJLEdBQUcscUJBQVMsQ0FBQyxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQztnQkFDN0QsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLHFDQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0RCxNQUFNLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFFMUMsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLHFDQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUV2RCxNQUFNLGFBQWEsR0FBRyxJQUFJLDZCQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFFM0QsTUFBTSxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTNDLENBQUM7U0FBQSxDQUFDLENBQUM7SUFFUCxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUZXN0aW5nVGltZX0gZnJvbSAnLi4vLi4vdGVzdC9UZXN0aW5nVGltZSc7XG5pbXBvcnQge0NhcHR1cmVkUEhaV3JpdGVyfSBmcm9tICcuLi8uLi9jYXB0dXJlL0NhcHR1cmVkUEhaV3JpdGVyJztcbmltcG9ydCB7UHJveHlTZXJ2ZXJDb25maWd9IGZyb20gJy4vUHJveHlTZXJ2ZXJDb25maWcnO1xuaW1wb3J0IHtDYWNoZVJlZ2lzdHJ5fSBmcm9tICcuL0NhY2hlUmVnaXN0cnknO1xuaW1wb3J0IHtNb2NrQ2FwdHVyZWRDb250ZW50fSBmcm9tICcuLi8uLi9jYXB0dXJlL01vY2tDYXB0dXJlZENvbnRlbnQnO1xuaW1wb3J0IHtGaWxlUGF0aHN9IGZyb20gJy4uLy4uL3V0aWwvRmlsZVBhdGhzJztcblxuVGVzdGluZ1RpbWUuZnJlZXplKCk7XG5cbmRlc2NyaWJlKCdDYWNoZVJlZ2lzdHJ5VGVzdCcsIGZ1bmN0aW9uKCkge1xuXG4gICAgZGVzY3JpYmUoJ0xvYWQgUEhaJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgaXQoXCJyZWdpc3RlckZpbGVcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIFRlc3RpbmdUaW1lLmZyZWV6ZSgpO1xuXG4gICAgICAgICAgICBjb25zdCBjYXB0dXJlZCA9IE1vY2tDYXB0dXJlZENvbnRlbnQuY3JlYXRlKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSBGaWxlUGF0aHMudG1wZmlsZShcImNhY2hlZC1lbnRyaWVzLWZhY3RvcnkucGh6XCIpO1xuICAgICAgICAgICAgY29uc3QgY2FwdHVyZWRQSFpXcml0ZXIgPSBuZXcgQ2FwdHVyZWRQSFpXcml0ZXIocGF0aCk7XG4gICAgICAgICAgICBhd2FpdCBjYXB0dXJlZFBIWldyaXRlci5jb252ZXJ0KGNhcHR1cmVkKTtcblxuICAgICAgICAgICAgY29uc3QgcHJveHlTZXJ2ZXJDb25maWcgPSBuZXcgUHJveHlTZXJ2ZXJDb25maWcoMTIzNDUpO1xuXG4gICAgICAgICAgICBjb25zdCBjYWNoZVJlZ2lzdHJ5ID0gbmV3IENhY2hlUmVnaXN0cnkocHJveHlTZXJ2ZXJDb25maWcpO1xuXG4gICAgICAgICAgICBhd2FpdCBjYWNoZVJlZ2lzdHJ5LnJlZ2lzdGVyRmlsZShwYXRoKTtcblxuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==