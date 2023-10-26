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
const WebDriverTestResultReader_1 = require("../../js/test/results/reader/WebDriverTestResultReader");
const Files_1 = require("../../js/util/Files");
const FilePaths_1 = require("../../js/util/FilePaths");
const Spectron_1 = require("../../js/test/Spectron");
const assert = require('assert');
describe('DebugWebRequestsListener', function () {
    this.timeout(30000);
    before(function () {
        return __awaiter(this, void 0, void 0, function* () {
            const logsDir = FilePaths_1.FilePaths.tmpfile("DebugWebRequestsListener");
            yield Files_1.Files.createDirAsync(logsDir);
            yield Files_1.Files.removeAsync(FilePaths_1.FilePaths.join(logsDir, "polar.log"));
        });
    });
    Spectron_1.Spectron.setup(__dirname);
    xit('Make sure they are written to the log.', function () {
        return __awaiter(this, void 0, void 0, function* () {
            assert.equal(yield this.app.client.getWindowCount(), 1);
            const testResultReader = new WebDriverTestResultReader_1.WebDriverTestResultReader(this.app);
            assert.equal(yield testResultReader.read(), true);
            return true;
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNHQUFpRztBQUNqRywrQ0FBMEM7QUFDMUMsdURBQWtEO0FBQ2xELHFEQUFnRDtBQUVoRCxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFakMsUUFBUSxDQUFDLDBCQUEwQixFQUFFO0lBRWpDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFcEIsTUFBTSxDQUFDOztZQUNILE1BQU0sT0FBTyxHQUFHLHFCQUFTLENBQUMsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7WUFDOUQsTUFBTSxhQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sYUFBSyxDQUFDLFdBQVcsQ0FBQyxxQkFBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNsRSxDQUFDO0tBQUEsQ0FBQyxDQUFDO0lBRUgsbUJBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFMUIsR0FBRyxDQUFDLHdDQUF3QyxFQUFFOztZQUUxQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFeEQsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLHFEQUF5QixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVqRSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFbEQsT0FBTyxJQUFJLENBQUM7UUFFaEIsQ0FBQztLQUFBLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtXZWJEcml2ZXJUZXN0UmVzdWx0UmVhZGVyfSBmcm9tICcuLi8uLi9qcy90ZXN0L3Jlc3VsdHMvcmVhZGVyL1dlYkRyaXZlclRlc3RSZXN1bHRSZWFkZXInO1xuaW1wb3J0IHtGaWxlc30gZnJvbSAnLi4vLi4vanMvdXRpbC9GaWxlcyc7XG5pbXBvcnQge0ZpbGVQYXRoc30gZnJvbSAnLi4vLi4vanMvdXRpbC9GaWxlUGF0aHMnO1xuaW1wb3J0IHtTcGVjdHJvbn0gZnJvbSAnLi4vLi4vanMvdGVzdC9TcGVjdHJvbic7XG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoJ2Fzc2VydCcpO1xuXG5kZXNjcmliZSgnRGVidWdXZWJSZXF1ZXN0c0xpc3RlbmVyJywgZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLnRpbWVvdXQoMzAwMDApO1xuXG4gICAgYmVmb3JlKGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBsb2dzRGlyID0gRmlsZVBhdGhzLnRtcGZpbGUoXCJEZWJ1Z1dlYlJlcXVlc3RzTGlzdGVuZXJcIik7XG4gICAgICAgIGF3YWl0IEZpbGVzLmNyZWF0ZURpckFzeW5jKGxvZ3NEaXIpO1xuICAgICAgICBhd2FpdCBGaWxlcy5yZW1vdmVBc3luYyhGaWxlUGF0aHMuam9pbihsb2dzRGlyLCBcInBvbGFyLmxvZ1wiKSk7XG4gICAgfSk7XG5cbiAgICBTcGVjdHJvbi5zZXR1cChfX2Rpcm5hbWUpO1xuXG4gICAgeGl0KCdNYWtlIHN1cmUgdGhleSBhcmUgd3JpdHRlbiB0byB0aGUgbG9nLicsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChhd2FpdCB0aGlzLmFwcC5jbGllbnQuZ2V0V2luZG93Q291bnQoKSwgMSk7XG5cbiAgICAgICAgY29uc3QgdGVzdFJlc3VsdFJlYWRlciA9IG5ldyBXZWJEcml2ZXJUZXN0UmVzdWx0UmVhZGVyKHRoaXMuYXBwKTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwoYXdhaXQgdGVzdFJlc3VsdFJlYWRlci5yZWFkKCksIHRydWUpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgfSk7XG5cbn0pO1xuIl19