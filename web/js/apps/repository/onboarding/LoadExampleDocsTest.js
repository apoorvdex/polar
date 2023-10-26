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
const PolarDataDir_1 = require("../../../test/PolarDataDir");
const DiskDatastore_1 = require("../../../datastore/DiskDatastore");
const LoadExampleDocs_1 = require("./LoadExampleDocs");
const AppPath_1 = require("../../../electron/app_path/AppPath");
const FilePaths_1 = require("../../../util/FilePaths");
const DefaultPersistenceLayer_1 = require("../../../datastore/DefaultPersistenceLayer");
describe('LoadExampleDocs', function () {
    beforeEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            AppPath_1.AppPath.set(FilePaths_1.FilePaths.resolve(FilePaths_1.FilePaths.join(__dirname, "..", "..", "..", "..", "..")));
            yield PolarDataDir_1.PolarDataDir.useFreshDirectory('.load-example-docs');
            console.log("Using app path: " + AppPath_1.AppPath.get());
        });
    });
    it("load basic data", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const persistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(new DiskDatastore_1.DiskDatastore());
            const loader = new LoadExampleDocs_1.LoadExampleDocs(persistenceLayer);
            yield loader.load(docInfo => {
                console.log("Loaded: ", docInfo);
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9hZEV4YW1wbGVEb2NzVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkxvYWRFeGFtcGxlRG9jc1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDZEQUF3RDtBQUN4RCxvRUFBK0Q7QUFDL0QsdURBQWtEO0FBQ2xELGdFQUEyRDtBQUMzRCx1REFBa0Q7QUFDbEQsd0ZBQW1GO0FBRW5GLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRTtJQUV4QixVQUFVLENBQUM7O1lBRVAsaUJBQU8sQ0FBQyxHQUFHLENBQUMscUJBQVMsQ0FBQyxPQUFPLENBQUMscUJBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEYsTUFBTSwyQkFBWSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFFM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxpQkFBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFFcEQsQ0FBQztLQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxpQkFBaUIsRUFBRTs7WUFFbEIsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLGlEQUF1QixDQUFDLElBQUksNkJBQWEsRUFBRSxDQUFDLENBQUM7WUFDMUUsTUFBTSxNQUFNLEdBQUcsSUFBSSxpQ0FBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFFckQsTUFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNyQyxDQUFDLENBQUMsQ0FBQztRQUVQLENBQUM7S0FBQSxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UG9sYXJEYXRhRGlyfSBmcm9tICcuLi8uLi8uLi90ZXN0L1BvbGFyRGF0YURpcic7XG5pbXBvcnQge0Rpc2tEYXRhc3RvcmV9IGZyb20gJy4uLy4uLy4uL2RhdGFzdG9yZS9EaXNrRGF0YXN0b3JlJztcbmltcG9ydCB7TG9hZEV4YW1wbGVEb2NzfSBmcm9tICcuL0xvYWRFeGFtcGxlRG9jcyc7XG5pbXBvcnQge0FwcFBhdGh9IGZyb20gJy4uLy4uLy4uL2VsZWN0cm9uL2FwcF9wYXRoL0FwcFBhdGgnO1xuaW1wb3J0IHtGaWxlUGF0aHN9IGZyb20gJy4uLy4uLy4uL3V0aWwvRmlsZVBhdGhzJztcbmltcG9ydCB7RGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXJ9IGZyb20gJy4uLy4uLy4uL2RhdGFzdG9yZS9EZWZhdWx0UGVyc2lzdGVuY2VMYXllcic7XG5cbmRlc2NyaWJlKCdMb2FkRXhhbXBsZURvY3MnLCBmdW5jdGlvbigpIHtcblxuICAgIGJlZm9yZUVhY2goYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgQXBwUGF0aC5zZXQoRmlsZVBhdGhzLnJlc29sdmUoRmlsZVBhdGhzLmpvaW4oX19kaXJuYW1lLCBcIi4uXCIsIFwiLi5cIiwgXCIuLlwiLCBcIi4uXCIsIFwiLi5cIikpKTtcbiAgICAgICAgYXdhaXQgUG9sYXJEYXRhRGlyLnVzZUZyZXNoRGlyZWN0b3J5KCcubG9hZC1leGFtcGxlLWRvY3MnKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIlVzaW5nIGFwcCBwYXRoOiBcIiArIEFwcFBhdGguZ2V0KCkpO1xuXG4gICAgfSk7XG5cbiAgICBpdChcImxvYWQgYmFzaWMgZGF0YVwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICBjb25zdCBwZXJzaXN0ZW5jZUxheWVyID0gbmV3IERlZmF1bHRQZXJzaXN0ZW5jZUxheWVyKG5ldyBEaXNrRGF0YXN0b3JlKCkpO1xuICAgICAgICBjb25zdCBsb2FkZXIgPSBuZXcgTG9hZEV4YW1wbGVEb2NzKHBlcnNpc3RlbmNlTGF5ZXIpO1xuXG4gICAgICAgIGF3YWl0IGxvYWRlci5sb2FkKGRvY0luZm8gPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2FkZWQ6IFwiLCBkb2NJbmZvKTtcbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxufSk7XG5cbiJdfQ==