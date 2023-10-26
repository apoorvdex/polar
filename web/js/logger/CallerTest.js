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
const chai_1 = require("chai");
const Callers_1 = require("./Callers");
const FilePaths_1 = require("../util/FilePaths");
describe('Callers', function () {
    describe('Test basic caller', () => {
        it("call method and to make sure we get the right caller", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const actual = myCaller();
                actual.filename = actual.filename.replace(/\.(js|ts)/, '.js');
                chai_1.assert.deepEqual(actual, { filename: "CallerTest.js" });
            });
        });
    });
    describe('__parse', () => {
        it("Parse a basic frame", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const frame = "     at Function.getCaller (/home/burton/projects/polar-bookshelf/web/js/test/MyTest.js:5:17)";
                chai_1.assert.deepEqual(Callers_1.Callers._parse(frame), { filename: "MyTest.js" });
                chai_1.assert.deepEqual(Callers_1.Callers._parse(FilePaths_1.FilePaths.textToWindowsPath(frame)), { filename: "MyTest.js" });
            });
        });
        it("Parse a webpack frame", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const frame = "    at Object../web/js/metadata/Pagemarks.js (http://127.0.0.1:8500/web/dist/electron-bundle.js:59471:86)\n";
                chai_1.assert.deepEqual(Callers_1.Callers._parse(frame), { filename: "Pagemarks.js" });
                chai_1.assert.deepEqual(Callers_1.Callers._parse(FilePaths_1.FilePaths.textToWindowsPath(frame)), { filename: "Pagemarks.js" });
            });
        });
        it("Parse a webpack frame with a question mark at the end", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const frame = "    at eval (webpack:///./web/js/metadata/Pagemarks.js?:11:86)\n";
                chai_1.assert.deepEqual(Callers_1.Callers._parse(frame), { filename: "Pagemarks.js" });
                chai_1.assert.deepEqual(Callers_1.Callers._parse(FilePaths_1.FilePaths.textToWindowsPath(frame)), { filename: "Pagemarks.js" });
            });
        });
        it("Parse from web worker", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const frame = '    at file:///home/burton/projects/polar-bookshelf/web/js/datastore/dispatcher/PersistenceLayerWorker.js:12:29';
                chai_1.assert.deepEqual(Callers_1.Callers._parse(frame), { filename: "PersistenceLayerWorker.js" });
                chai_1.assert.deepEqual(Callers_1.Callers._parse(FilePaths_1.FilePaths.textToWindowsPath(frame)), { filename: "PersistenceLayerWorker.js" });
            });
        });
    });
});
function myCaller() {
    return Callers_1.Callers.getCaller();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsbGVyVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNhbGxlclRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLCtCQUE0QjtBQUM1Qix1Q0FBa0M7QUFDbEMsaURBQTRDO0FBRTVDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7SUFFaEIsUUFBUSxDQUFDLG1CQUFtQixFQUFFLEdBQUcsRUFBRTtRQUUvQixFQUFFLENBQUMsc0RBQXNELEVBQUU7O2dCQUd2RCxNQUFNLE1BQU0sR0FBRyxRQUFRLEVBQUUsQ0FBQztnQkFDMUIsTUFBTSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBRTlELGFBQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUM7WUFFNUQsQ0FBQztTQUFBLENBQUMsQ0FBQztJQUlQLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUU7UUFFckIsRUFBRSxDQUFDLHFCQUFxQixFQUFFOztnQkFFdEIsTUFBTSxLQUFLLEdBQUcsK0ZBQStGLENBQUM7Z0JBRTlHLGFBQU0sQ0FBQyxTQUFTLENBQUMsaUJBQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztnQkFDbkUsYUFBTSxDQUFDLFNBQVMsQ0FBQyxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxxQkFBUyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztZQUVwRyxDQUFDO1NBQUEsQ0FBQyxDQUFDO1FBR0gsRUFBRSxDQUFDLHVCQUF1QixFQUFFOztnQkFDeEIsTUFBTSxLQUFLLEdBQUcsNkdBQTZHLENBQUM7Z0JBQzVILGFBQU0sQ0FBQyxTQUFTLENBQUMsaUJBQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLENBQUMsQ0FBQztnQkFDdEUsYUFBTSxDQUFDLFNBQVMsQ0FBQyxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxxQkFBUyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLENBQUMsQ0FBQztZQUN2RyxDQUFDO1NBQUEsQ0FBQyxDQUFDO1FBR0gsRUFBRSxDQUFDLHVEQUF1RCxFQUFFOztnQkFDeEQsTUFBTSxLQUFLLEdBQUcsa0VBQWtFLENBQUM7Z0JBQ2pGLGFBQU0sQ0FBQyxTQUFTLENBQUMsaUJBQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLENBQUMsQ0FBQztnQkFDdEUsYUFBTSxDQUFDLFNBQVMsQ0FBQyxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxxQkFBUyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLENBQUMsQ0FBQztZQUN2RyxDQUFDO1NBQUEsQ0FBQyxDQUFDO1FBSUgsRUFBRSxDQUFDLHVCQUF1QixFQUFFOztnQkFDeEIsTUFBTSxLQUFLLEdBQUcsaUhBQWlILENBQUM7Z0JBQ2hJLGFBQU0sQ0FBQyxTQUFTLENBQUMsaUJBQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsMkJBQTJCLEVBQUUsQ0FBQyxDQUFDO2dCQUNuRixhQUFNLENBQUMsU0FBUyxDQUFDLGlCQUFPLENBQUMsTUFBTSxDQUFDLHFCQUFTLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSwyQkFBMkIsRUFBRSxDQUFDLENBQUM7WUFDcEgsQ0FBQztTQUFBLENBQUMsQ0FBQztJQUVQLENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUM7QUFFSCxTQUFTLFFBQVE7SUFFYixPQUFPLGlCQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDL0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcbmltcG9ydCB7Q2FsbGVyc30gZnJvbSAnLi9DYWxsZXJzJztcbmltcG9ydCB7RmlsZVBhdGhzfSBmcm9tICcuLi91dGlsL0ZpbGVQYXRocyc7XG5cbmRlc2NyaWJlKCdDYWxsZXJzJywgZnVuY3Rpb24oKSB7XG5cbiAgICBkZXNjcmliZSgnVGVzdCBiYXNpYyBjYWxsZXInLCAoKSA9PiB7XG5cbiAgICAgICAgaXQoXCJjYWxsIG1ldGhvZCBhbmQgdG8gbWFrZSBzdXJlIHdlIGdldCB0aGUgcmlnaHQgY2FsbGVyXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG5cbiAgICAgICAgICAgIGNvbnN0IGFjdHVhbCA9IG15Q2FsbGVyKCk7XG4gICAgICAgICAgICBhY3R1YWwuZmlsZW5hbWUgPSBhY3R1YWwuZmlsZW5hbWUucmVwbGFjZSgvXFwuKGpzfHRzKS8sICcuanMnKTtcblxuICAgICAgICAgICAgYXNzZXJ0LmRlZXBFcXVhbChhY3R1YWwsIHsgZmlsZW5hbWU6IFwiQ2FsbGVyVGVzdC5qc1wiIH0pO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIChDOlxcXFxVc2Vyc1xcXFxhZG1pblxcXFxwb2xhci1ib29rc2hlbGZcXFxcd2ViXFxcXGpzXFxcXGxvZ2dlclxcXFxDYWxsZXJUZXN0LmpzXG5cbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdfX3BhcnNlJywgKCkgPT4ge1xuXG4gICAgICAgIGl0KFwiUGFyc2UgYSBiYXNpYyBmcmFtZVwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgY29uc3QgZnJhbWUgPSBcIiAgICAgYXQgRnVuY3Rpb24uZ2V0Q2FsbGVyICgvaG9tZS9idXJ0b24vcHJvamVjdHMvcG9sYXItYm9va3NoZWxmL3dlYi9qcy90ZXN0L015VGVzdC5qczo1OjE3KVwiO1xuXG4gICAgICAgICAgICBhc3NlcnQuZGVlcEVxdWFsKENhbGxlcnMuX3BhcnNlKGZyYW1lKSwgeyBmaWxlbmFtZTogXCJNeVRlc3QuanNcIiB9KTtcbiAgICAgICAgICAgIGFzc2VydC5kZWVwRXF1YWwoQ2FsbGVycy5fcGFyc2UoRmlsZVBhdGhzLnRleHRUb1dpbmRvd3NQYXRoKGZyYW1lKSksIHsgZmlsZW5hbWU6IFwiTXlUZXN0LmpzXCIgfSk7XG5cbiAgICAgICAgfSk7XG5cblxuICAgICAgICBpdChcIlBhcnNlIGEgd2VicGFjayBmcmFtZVwiLCBhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lID0gXCIgICAgYXQgT2JqZWN0Li4vd2ViL2pzL21ldGFkYXRhL1BhZ2VtYXJrcy5qcyAoaHR0cDovLzEyNy4wLjAuMTo4NTAwL3dlYi9kaXN0L2VsZWN0cm9uLWJ1bmRsZS5qczo1OTQ3MTo4NilcXG5cIjtcbiAgICAgICAgICAgIGFzc2VydC5kZWVwRXF1YWwoQ2FsbGVycy5fcGFyc2UoZnJhbWUpLCB7IGZpbGVuYW1lOiBcIlBhZ2VtYXJrcy5qc1wiIH0pO1xuICAgICAgICAgICAgYXNzZXJ0LmRlZXBFcXVhbChDYWxsZXJzLl9wYXJzZShGaWxlUGF0aHMudGV4dFRvV2luZG93c1BhdGgoZnJhbWUpKSwgeyBmaWxlbmFtZTogXCJQYWdlbWFya3MuanNcIiB9KTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICBpdChcIlBhcnNlIGEgd2VicGFjayBmcmFtZSB3aXRoIGEgcXVlc3Rpb24gbWFyayBhdCB0aGUgZW5kXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgZnJhbWUgPSBcIiAgICBhdCBldmFsICh3ZWJwYWNrOi8vLy4vd2ViL2pzL21ldGFkYXRhL1BhZ2VtYXJrcy5qcz86MTE6ODYpXFxuXCI7XG4gICAgICAgICAgICBhc3NlcnQuZGVlcEVxdWFsKENhbGxlcnMuX3BhcnNlKGZyYW1lKSwgeyBmaWxlbmFtZTogXCJQYWdlbWFya3MuanNcIiB9KTtcbiAgICAgICAgICAgIGFzc2VydC5kZWVwRXF1YWwoQ2FsbGVycy5fcGFyc2UoRmlsZVBhdGhzLnRleHRUb1dpbmRvd3NQYXRoKGZyYW1lKSksIHsgZmlsZW5hbWU6IFwiUGFnZW1hcmtzLmpzXCIgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vXG5cbiAgICAgICAgaXQoXCJQYXJzZSBmcm9tIHdlYiB3b3JrZXJcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgZnJhbWUgPSAnICAgIGF0IGZpbGU6Ly8vaG9tZS9idXJ0b24vcHJvamVjdHMvcG9sYXItYm9va3NoZWxmL3dlYi9qcy9kYXRhc3RvcmUvZGlzcGF0Y2hlci9QZXJzaXN0ZW5jZUxheWVyV29ya2VyLmpzOjEyOjI5JztcbiAgICAgICAgICAgIGFzc2VydC5kZWVwRXF1YWwoQ2FsbGVycy5fcGFyc2UoZnJhbWUpLCB7IGZpbGVuYW1lOiBcIlBlcnNpc3RlbmNlTGF5ZXJXb3JrZXIuanNcIiB9KTtcbiAgICAgICAgICAgIGFzc2VydC5kZWVwRXF1YWwoQ2FsbGVycy5fcGFyc2UoRmlsZVBhdGhzLnRleHRUb1dpbmRvd3NQYXRoKGZyYW1lKSksIHsgZmlsZW5hbWU6IFwiUGVyc2lzdGVuY2VMYXllcldvcmtlci5qc1wiIH0pO1xuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG59KTtcblxuZnVuY3Rpb24gbXlDYWxsZXIoKSB7XG4gICAgLy8gc2hvdWxkIHJldHVybiBcIm15Q2FsbGVyXCJcbiAgICByZXR1cm4gQ2FsbGVycy5nZXRDYWxsZXIoKTtcbn1cbiJdfQ==