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
const Assertions_1 = require("../test/Assertions");
const Files_1 = require("../util/Files");
const ResourceFactory_1 = require("./ResourceFactory");
const CachingPHZReader_1 = require("./CachingPHZReader");
const PHZWriter_1 = require("./PHZWriter");
const TestingTime_1 = require("../test/TestingTime");
const Time_1 = require("../util/Time");
const Dictionaries_1 = require("../util/Dictionaries");
const FilePaths_1 = require("../util/FilePaths");
TestingTime_1.TestingTime.freeze();
describe('CachingPHZReader', function () {
    let path = FilePaths_1.FilePaths.tmpfile("test.phz");
    function assertPHZReader(phzReader) {
        return __awaiter(this, void 0, void 0, function* () {
            let resources = yield phzReader.getResources();
            let expected = {
                "entries": {
                    "1XKZEWhTwbtoPFSkR2TJ": {
                        "id": "1XKZEWhTwbtoPFSkR2TJ",
                        "path": "1XKZEWhTwbtoPFSkR2TJ.html",
                        "resource": {
                            "id": "1XKZEWhTwbtoPFSkR2TJ",
                            "created": "2012-03-02T11:38:49.321Z",
                            "meta": {},
                            "url": "http://example.com",
                            "contentType": "text/html",
                            "mimeType": "text/html",
                            "encoding": "UTF-8",
                            "method": "GET",
                            "statusCode": 200,
                            "headers": {},
                        }
                    }
                }
            };
            Assertions_1.assertJSON(Dictionaries_1.Dictionaries.sorted(resources), Dictionaries_1.Dictionaries.sorted(expected));
            let resourceEntry = resources.entries["1XKZEWhTwbtoPFSkR2TJ"];
            let buffer = yield phzReader.getResource(resourceEntry);
            let content = buffer.toString("UTF-8");
            chai_1.assert.equal(content, "<html></html>");
            let metadata = yield phzReader.getMetadata();
            expected = {
                "title": "this is the title"
            };
            Assertions_1.assertJSON(Dictionaries_1.Dictionaries.sorted(metadata), Dictionaries_1.Dictionaries.sorted(expected));
        });
    }
    beforeEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield Files_1.Files.removeAsync(path);
            let phzWriter = new PHZWriter_1.PHZWriter(path);
            let resource = ResourceFactory_1.ResourceFactory.create("http://example.com", "text/html");
            yield phzWriter.writeMetadata({
                title: "this is the title"
            });
            yield phzWriter.writeResource(resource, "<html></html>");
            yield phzWriter.close();
        });
    });
    it("Reading from a new caching reader (not closed)", function () {
        return __awaiter(this, void 0, void 0, function* () {
            let phzReader = new CachingPHZReader_1.CachingPHZReader(path);
            yield phzReader.init();
            yield assertPHZReader(phzReader);
        });
    });
    it("Reading from a new caching reader (closed)", function () {
        return __awaiter(this, void 0, void 0, function* () {
            let phzReader = new CachingPHZReader_1.CachingPHZReader(path, 1);
            yield phzReader.init();
            yield Time_1.Time.sleep(100);
            yield assertPHZReader(phzReader);
            chai_1.assert.equal(phzReader.reopened > 0, true);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FjaGluZ1BIWlJlYWRlclRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDYWNoaW5nUEhaUmVhZGVyVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0JBQTRCO0FBRTVCLG1EQUE4QztBQUM5Qyx5Q0FBb0M7QUFDcEMsdURBQWtEO0FBQ2xELHlEQUFvRDtBQUNwRCwyQ0FBc0M7QUFDdEMscURBQWdEO0FBQ2hELHVDQUFrQztBQUNsQyx1REFBa0Q7QUFDbEQsaURBQTRDO0FBRTVDLHlCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFckIsUUFBUSxDQUFDLGtCQUFrQixFQUFFO0lBRXpCLElBQUksSUFBSSxHQUFHLHFCQUFTLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRXpDLFNBQWUsZUFBZSxDQUFDLFNBQTJCOztZQUV0RCxJQUFJLFNBQVMsR0FBRyxNQUFNLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUUvQyxJQUFJLFFBQVEsR0FBUTtnQkFDaEIsU0FBUyxFQUFFO29CQUNQLHNCQUFzQixFQUFFO3dCQUNwQixJQUFJLEVBQUUsc0JBQXNCO3dCQUM1QixNQUFNLEVBQUUsMkJBQTJCO3dCQUNuQyxVQUFVLEVBQUU7NEJBQ1IsSUFBSSxFQUFFLHNCQUFzQjs0QkFDNUIsU0FBUyxFQUFFLDBCQUEwQjs0QkFDckMsTUFBTSxFQUFFLEVBQUU7NEJBQ1YsS0FBSyxFQUFFLG9CQUFvQjs0QkFDM0IsYUFBYSxFQUFFLFdBQVc7NEJBQzFCLFVBQVUsRUFBRSxXQUFXOzRCQUN2QixVQUFVLEVBQUUsT0FBTzs0QkFDbkIsUUFBUSxFQUFFLEtBQUs7NEJBQ2YsWUFBWSxFQUFFLEdBQUc7NEJBQ2pCLFNBQVMsRUFBRSxFQUFFO3lCQUNoQjtxQkFDSjtpQkFDSjthQUNKLENBQUM7WUFFRix1QkFBVSxDQUFDLDJCQUFZLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFLDJCQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFFMUUsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBRTlELElBQUksTUFBTSxHQUFHLE1BQU0sU0FBUyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUV4RCxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRXZDLGFBQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1lBSXZDLElBQUksUUFBUSxHQUFHLE1BQU0sU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBRTdDLFFBQVEsR0FBRztnQkFDUCxPQUFPLEVBQUUsbUJBQW1CO2FBQy9CLENBQUM7WUFFRix1QkFBVSxDQUFDLDJCQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLDJCQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFHN0UsQ0FBQztLQUFBO0lBRUQsVUFBVSxDQUFDOztZQUVQLE1BQU0sYUFBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUU5QixJQUFJLFNBQVMsR0FBRyxJQUFJLHFCQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEMsSUFBSSxRQUFRLEdBQUcsaUNBQWUsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFFekUsTUFBTSxTQUFTLENBQUMsYUFBYSxDQUFDO2dCQUMxQixLQUFLLEVBQUUsbUJBQW1CO2FBQzdCLENBQUMsQ0FBQztZQUVILE1BQU0sU0FBUyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQUM7WUFDekQsTUFBTSxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFNUIsQ0FBQztLQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxnREFBZ0QsRUFBRTs7WUFFakQsSUFBSSxTQUFTLEdBQUcsSUFBSSxtQ0FBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzQyxNQUFNLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUV2QixNQUFNLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVyQyxDQUFDO0tBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDRDQUE0QyxFQUFFOztZQUU3QyxJQUFJLFNBQVMsR0FBRyxJQUFJLG1DQUFnQixDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM5QyxNQUFNLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUd2QixNQUFNLFdBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFdEIsTUFBTSxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFakMsYUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUUvQyxDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5cbmltcG9ydCB7YXNzZXJ0SlNPTn0gZnJvbSAnLi4vdGVzdC9Bc3NlcnRpb25zJztcbmltcG9ydCB7RmlsZXN9IGZyb20gJy4uL3V0aWwvRmlsZXMnO1xuaW1wb3J0IHtSZXNvdXJjZUZhY3Rvcnl9IGZyb20gJy4vUmVzb3VyY2VGYWN0b3J5JztcbmltcG9ydCB7Q2FjaGluZ1BIWlJlYWRlcn0gZnJvbSAnLi9DYWNoaW5nUEhaUmVhZGVyJztcbmltcG9ydCB7UEhaV3JpdGVyfSBmcm9tICcuL1BIWldyaXRlcic7XG5pbXBvcnQge1Rlc3RpbmdUaW1lfSBmcm9tICcuLi90ZXN0L1Rlc3RpbmdUaW1lJztcbmltcG9ydCB7VGltZX0gZnJvbSAnLi4vdXRpbC9UaW1lJztcbmltcG9ydCB7RGljdGlvbmFyaWVzfSBmcm9tICcuLi91dGlsL0RpY3Rpb25hcmllcyc7XG5pbXBvcnQge0ZpbGVQYXRoc30gZnJvbSAnLi4vdXRpbC9GaWxlUGF0aHMnO1xuXG5UZXN0aW5nVGltZS5mcmVlemUoKTtcblxuZGVzY3JpYmUoJ0NhY2hpbmdQSFpSZWFkZXInLCBmdW5jdGlvbigpIHtcblxuICAgIGxldCBwYXRoID0gRmlsZVBhdGhzLnRtcGZpbGUoXCJ0ZXN0LnBoelwiKTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGFzc2VydFBIWlJlYWRlcihwaHpSZWFkZXI6IENhY2hpbmdQSFpSZWFkZXIpIHtcblxuICAgICAgICBsZXQgcmVzb3VyY2VzID0gYXdhaXQgcGh6UmVhZGVyLmdldFJlc291cmNlcygpO1xuXG4gICAgICAgIGxldCBleHBlY3RlZDogYW55ID0ge1xuICAgICAgICAgICAgXCJlbnRyaWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcIjFYS1pFV2hUd2J0b1BGU2tSMlRKXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIjFYS1pFV2hUd2J0b1BGU2tSMlRKXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicGF0aFwiOiBcIjFYS1pFV2hUd2J0b1BGU2tSMlRKLmh0bWxcIixcbiAgICAgICAgICAgICAgICAgICAgXCJyZXNvdXJjZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiMVhLWkVXaFR3YnRvUEZTa1IyVEpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZFwiOiBcIjIwMTItMDMtMDJUMTE6Mzg6NDkuMzIxWlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtZXRhXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwOi8vZXhhbXBsZS5jb21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudFR5cGVcIjogXCJ0ZXh0L2h0bWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWltZVR5cGVcIjogXCJ0ZXh0L2h0bWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZW5jb2RpbmdcIjogXCJVVEYtOFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtZXRob2RcIjogXCJHRVRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhdHVzQ29kZVwiOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlYWRlcnNcIjoge30sXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgYXNzZXJ0SlNPTihEaWN0aW9uYXJpZXMuc29ydGVkKHJlc291cmNlcyksIERpY3Rpb25hcmllcy5zb3J0ZWQoZXhwZWN0ZWQpKTtcblxuICAgICAgICBsZXQgcmVzb3VyY2VFbnRyeSA9IHJlc291cmNlcy5lbnRyaWVzW1wiMVhLWkVXaFR3YnRvUEZTa1IyVEpcIl07XG5cbiAgICAgICAgbGV0IGJ1ZmZlciA9IGF3YWl0IHBoelJlYWRlci5nZXRSZXNvdXJjZShyZXNvdXJjZUVudHJ5KTtcblxuICAgICAgICBsZXQgY29udGVudCA9IGJ1ZmZlci50b1N0cmluZyhcIlVURi04XCIpO1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChjb250ZW50LCBcIjxodG1sPjwvaHRtbD5cIik7XG5cbiAgICAgICAgLy8gdGVzdCBnZXR0aW5nIHRoZSBtZXRhZGF0YSAod2hlbiB0aGVyZSBpc24ndCBhbnkpXG5cbiAgICAgICAgbGV0IG1ldGFkYXRhID0gYXdhaXQgcGh6UmVhZGVyLmdldE1ldGFkYXRhKCk7XG5cbiAgICAgICAgZXhwZWN0ZWQgPSB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwidGhpcyBpcyB0aGUgdGl0bGVcIlxuICAgICAgICB9O1xuXG4gICAgICAgIGFzc2VydEpTT04oRGljdGlvbmFyaWVzLnNvcnRlZChtZXRhZGF0YSksIERpY3Rpb25hcmllcy5zb3J0ZWQoZXhwZWN0ZWQpKTtcblxuXG4gICAgfVxuXG4gICAgYmVmb3JlRWFjaChhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICBhd2FpdCBGaWxlcy5yZW1vdmVBc3luYyhwYXRoKTtcblxuICAgICAgICBsZXQgcGh6V3JpdGVyID0gbmV3IFBIWldyaXRlcihwYXRoKTtcbiAgICAgICAgbGV0IHJlc291cmNlID0gUmVzb3VyY2VGYWN0b3J5LmNyZWF0ZShcImh0dHA6Ly9leGFtcGxlLmNvbVwiLCBcInRleHQvaHRtbFwiKTtcblxuICAgICAgICBhd2FpdCBwaHpXcml0ZXIud3JpdGVNZXRhZGF0YSh7XG4gICAgICAgICAgICB0aXRsZTogXCJ0aGlzIGlzIHRoZSB0aXRsZVwiXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IHBoeldyaXRlci53cml0ZVJlc291cmNlKHJlc291cmNlLCBcIjxodG1sPjwvaHRtbD5cIik7XG4gICAgICAgIGF3YWl0IHBoeldyaXRlci5jbG9zZSgpO1xuXG4gICAgfSk7XG5cbiAgICBpdChcIlJlYWRpbmcgZnJvbSBhIG5ldyBjYWNoaW5nIHJlYWRlciAobm90IGNsb3NlZClcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgbGV0IHBoelJlYWRlciA9IG5ldyBDYWNoaW5nUEhaUmVhZGVyKHBhdGgpO1xuICAgICAgICBhd2FpdCBwaHpSZWFkZXIuaW5pdCgpO1xuXG4gICAgICAgIGF3YWl0IGFzc2VydFBIWlJlYWRlcihwaHpSZWFkZXIpO1xuXG4gICAgfSk7XG5cbiAgICBpdChcIlJlYWRpbmcgZnJvbSBhIG5ldyBjYWNoaW5nIHJlYWRlciAoY2xvc2VkKVwiLCBhc3luYyBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgbGV0IHBoelJlYWRlciA9IG5ldyBDYWNoaW5nUEhaUmVhZGVyKHBhdGgsIDEpO1xuICAgICAgICBhd2FpdCBwaHpSZWFkZXIuaW5pdCgpO1xuXG4gICAgICAgIC8vIHdlIHRvbGQgdGhlIHJlYWRlciB0byBvbmx5IHdhaXQgZm9yIDFtcyAuLi5cbiAgICAgICAgYXdhaXQgVGltZS5zbGVlcCgxMDApO1xuXG4gICAgICAgIGF3YWl0IGFzc2VydFBIWlJlYWRlcihwaHpSZWFkZXIpO1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChwaHpSZWFkZXIucmVvcGVuZWQgPiAwLCB0cnVlKTtcblxuICAgIH0pO1xuXG59KTtcblxuIl19