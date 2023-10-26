"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const TestingTime_1 = require("../test/TestingTime");
const ResourceFactory_1 = require("./ResourceFactory");
const Assertions_1 = require("../test/Assertions");
const Files_1 = require("../util/Files");
const PHZWriter_1 = require("./PHZWriter");
const PHZReader_1 = require("./PHZReader");
const Dictionaries_1 = require("../util/Dictionaries");
const FilePaths_1 = require("../util/FilePaths");
const jszip_1 = __importDefault(require("jszip"));
const Streams_1 = require("../util/Streams");
TestingTime_1.TestingTime.freeze();
describe('PHZ functionality', function () {
    it("JSZIP support", function () {
        console.log("FIXME: ", jszip_1.default.support);
    });
    it("ResourceFactory", function () {
        const resource = ResourceFactory_1.ResourceFactory.create("http://example.com", "text/html");
        const expected = {
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
        };
        Assertions_1.assertJSON(Dictionaries_1.Dictionaries.sorted(resource), Dictionaries_1.Dictionaries.sorted(expected));
    });
    it("Writing with no data", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const path = FilePaths_1.FilePaths.createTempName("test.phz");
            yield Files_1.Files.removeAsync(path);
            const phzWriter = new PHZWriter_1.PHZWriter(path);
            yield phzWriter.close();
            chai_1.assert.equal(yield Files_1.Files.existsAsync(path), true);
        });
    });
    it("Writing one resource", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const path = FilePaths_1.FilePaths.createTempName("test.phz");
            yield Files_1.Files.removeAsync(path);
            const phzWriter = new PHZWriter_1.PHZWriter(path);
            const resource = ResourceFactory_1.ResourceFactory.create("http://example.com", "text/html");
            yield phzWriter.writeResource(resource, "<html></html>");
            yield phzWriter.close();
            chai_1.assert.equal(yield Files_1.Files.existsAsync(path), true);
        });
    });
    it("Reading", function () {
        return __awaiter(this, void 0, void 0, function* () {
            let path = FilePaths_1.FilePaths.createTempName("test.phz");
            yield Files_1.Files.removeAsync(path);
            let phzWriter = new PHZWriter_1.PHZWriter(path);
            let resource = ResourceFactory_1.ResourceFactory.create("http://example.com", "text/html");
            yield phzWriter.writeMetadata({
                title: "this is the title"
            });
            yield phzWriter.writeResource(resource, "<html></html>");
            yield phzWriter.close();
            let phzReader = new PHZReader_1.PHZReader(path);
            yield phzReader.init();
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
            const resourceEntry = resources.entries["1XKZEWhTwbtoPFSkR2TJ"];
            const buffer = yield phzReader.getResource(resourceEntry);
            const content = buffer.toString("UTF-8");
            chai_1.assert.equal(content, "<html></html>");
            const stream = yield phzReader.getResourceAsStream(resourceEntry);
            chai_1.assert.ok(stream);
            chai_1.assert.equal((yield Streams_1.Streams.toBuffer(stream)).toString("UTF-8"), "<html></html>");
            const metadata = yield phzReader.getMetadata();
            expected = {
                "title": "this is the title"
            };
            Assertions_1.assertJSON(metadata, expected);
        });
    });
    it("Reading with no metadata or resources", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const path = FilePaths_1.FilePaths.createTempName("test.phz");
            yield Files_1.Files.removeAsync(path);
            const phzWriter = new PHZWriter_1.PHZWriter(path);
            yield phzWriter.close();
            let phzReader = new PHZReader_1.PHZReader(path);
            yield phzReader.init();
            let resources = yield phzReader.getResources();
            let expected = {
                "entries": {}
            };
            Assertions_1.assertJSON(resources, expected);
            let metadata = yield phzReader.getMetadata();
            chai_1.assert.equal(metadata, null);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUEhaVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlBIWlRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUE0QjtBQUM1QixxREFBZ0Q7QUFDaEQsdURBQWtEO0FBQ2xELG1EQUE4QztBQUM5Qyx5Q0FBb0M7QUFDcEMsMkNBQXNDO0FBQ3RDLDJDQUFzQztBQUN0Qyx1REFBa0Q7QUFDbEQsaURBQTRDO0FBQzVDLGtEQUEwQjtBQUMxQiw2Q0FBd0M7QUFFeEMseUJBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVyQixRQUFRLENBQUMsbUJBQW1CLEVBQUU7SUFFMUIsRUFBRSxDQUFDLGVBQWUsRUFBRTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRyxlQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsaUJBQWlCLEVBQUU7UUFFbEIsTUFBTSxRQUFRLEdBQUcsaUNBQWUsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFFM0UsTUFBTSxRQUFRLEdBQUc7WUFDYixJQUFJLEVBQUUsc0JBQXNCO1lBQzVCLFNBQVMsRUFBRSwwQkFBMEI7WUFDckMsTUFBTSxFQUFFLEVBQUU7WUFDVixLQUFLLEVBQUUsb0JBQW9CO1lBQzNCLGFBQWEsRUFBRSxXQUFXO1lBQzFCLFVBQVUsRUFBRSxXQUFXO1lBQ3ZCLFVBQVUsRUFBRSxPQUFPO1lBQ25CLFFBQVEsRUFBRSxLQUFLO1lBQ2YsWUFBWSxFQUFFLEdBQUc7WUFDakIsU0FBUyxFQUFFLEVBQUU7U0FDaEIsQ0FBQztRQUVGLHVCQUFVLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsMkJBQVksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUU3RSxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxzQkFBc0IsRUFB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LFNBQVMsR0FBRyxNQUFNLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUUvQyxJQUFJLFFBQVEsR0FBRztnQkFDWCxTQUFTLEVBQUUsRUFDVjthQUNKLENBQUM7WUFFRix1QkFBVSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUVoQyxJQUFJLFFBQVEsR0FBRyxNQUFNLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM3QyxhQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVqQyxDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQge1Rlc3RpbmdUaW1lfSBmcm9tICcuLi90ZXN0L1Rlc3RpbmdUaW1lJztcbmltcG9ydCB7UmVzb3VyY2VGYWN0b3J5fSBmcm9tICcuL1Jlc291cmNlRmFjdG9yeSc7XG5pbXBvcnQge2Fzc2VydEpTT059IGZyb20gJy4uL3Rlc3QvQXNzZXJ0aW9ucyc7XG5pbXBvcnQge0ZpbGVzfSBmcm9tICcuLi91dGlsL0ZpbGVzJztcbmltcG9ydCB7UEhaV3JpdGVyfSBmcm9tICcuL1BIWldyaXRlcic7XG5pbXBvcnQge1BIWlJlYWRlcn0gZnJvbSAnLi9QSFpSZWFkZXInO1xuaW1wb3J0IHtEaWN0aW9uYXJpZXN9IGZyb20gJy4uL3V0aWwvRGljdGlvbmFyaWVzJztcbmltcG9ydCB7RmlsZVBhdGhzfSBmcm9tICcuLi91dGlsL0ZpbGVQYXRocyc7XG5pbXBvcnQgSlNaaXAgZnJvbSAnanN6aXAnO1xuaW1wb3J0IHtTdHJlYW1zfSBmcm9tICcuLi91dGlsL1N0cmVhbXMnO1xuXG5UZXN0aW5nVGltZS5mcmVlemUoKTtcblxuZGVzY3JpYmUoJ1BIWiBmdW5jdGlvbmFsaXR5JywgZnVuY3Rpb24oKSB7XG5cbiAgICBpdChcIkpTWklQIHN1cHBvcnRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkZJWE1FOiBcIiAsIEpTWmlwLnN1cHBvcnQpO1xuICAgIH0pO1xuXG4gICAgaXQoXCJSZXNvdXJjZUZhY3RvcnlcIiwgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IHJlc291cmNlID0gUmVzb3VyY2VGYWN0b3J5LmNyZWF0ZShcImh0dHA6Ly9leGFtcGxlLmNvbVwiLCBcInRleHQvaHRtbFwiKTtcblxuICAgICAgICBjb25zdCBleHBlY3RlZCA9IHtcbiAgICAgICAgICAgIFwiaWRcIjogXCIxWEtaRVdoVHdidG9QRlNrUjJUSlwiLFxuICAgICAgICAgICAgXCJjcmVhdGVkXCI6IFwiMjAxMi0wMy0wMlQxMTozODo0OS4zMjFaXCIsXG4gICAgICAgICAgICBcIm1ldGFcIjoge30sXG4gICAgICAgICAgICBcInVybFwiOiBcImh0dHA6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgICAgICAgXCJjb250ZW50VHlwZVwiOiBcInRleHQvaHRtbFwiLFxuICAgICAgICAgICAgXCJtaW1lVHlwZVwiOiBcInRleHQvaHRtbFwiLFxuICAgICAgICAgICAgXCJlbmNvZGluZ1wiOiBcIlVURi04XCIsXG4gICAgICAgICAgICBcIm1ldGhvZFwiOiBcIkdFVFwiLFxuICAgICAgICAgICAgXCJzdGF0dXNDb2RlXCI6IDIwMCxcbiAgICAgICAgICAgIFwiaGVhZGVyc1wiOiB7fSxcbiAgICAgICAgfTtcblxuICAgICAgICBhc3NlcnRKU09OKERpY3Rpb25hcmllcy5zb3J0ZWQocmVzb3VyY2UpLCBEaWN0aW9uYXJpZXMuc29ydGVkKGV4cGVjdGVkKSk7XG5cbiAgICB9KTtcblxuICAgIGl0KFwiV3JpdGluZyB3aXRoIG5vIGRhdGFcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IHBhdGggPSBGaWxlUGF0aHMuY3JlYXRlVGVtcE5hbWUoXCJ0ZXN0LnBoelwiKTtcblxuICAgICAgICBhd2FpdCBGaWxlcy5yZW1vdmVBc3luYyhwYXRoKTtcblxuICAgICAgICBjb25zdCBwaHpXcml0ZXIgPSBuZXcgUEhaV3JpdGVyKHBhdGgpO1xuXG4gICAgICAgIGF3YWl0IHBoeldyaXRlci5jbG9zZSgpO1xuXG4gICAgICAgIGFzc2VydC5lcXVhbCggYXdhaXQgRmlsZXMuZXhpc3RzQXN5bmMocGF0aCksIHRydWUgKTtcblxuICAgIH0pO1xuXG4gICAgaXQoXCJXcml0aW5nIG9uZSByZXNvdXJjZVwiLCBhc3luYyBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgY29uc3QgcGF0aCA9IEZpbGVQYXRocy5jcmVhdGVUZW1wTmFtZShcInRlc3QucGh6XCIpO1xuXG4gICAgICAgIGF3YWl0IEZpbGVzLnJlbW92ZUFzeW5jKHBhdGgpO1xuXG4gICAgICAgIGNvbnN0IHBoeldyaXRlciA9IG5ldyBQSFpXcml0ZXIocGF0aCk7XG5cbiAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBSZXNvdXJjZUZhY3RvcnkuY3JlYXRlKFwiaHR0cDovL2V4YW1wbGUuY29tXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gICAgICAgIGF3YWl0IHBoeldyaXRlci53cml0ZVJlc291cmNlKHJlc291cmNlLCBcIjxodG1sPjwvaHRtbD5cIik7XG5cbiAgICAgICAgYXdhaXQgcGh6V3JpdGVyLmNsb3NlKCk7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKCBhd2FpdCBGaWxlcy5leGlzdHNBc3luYyhwYXRoKSwgdHJ1ZSApO1xuXG4gICAgfSk7XG5cbiAgICBpdChcIlJlYWRpbmdcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuXG5cblxuICAgICAgICBsZXQgcGF0aCA9IEZpbGVQYXRocy5jcmVhdGVUZW1wTmFtZShcInRlc3QucGh6XCIpO1xuXG4gICAgICAgIGF3YWl0IEZpbGVzLnJlbW92ZUFzeW5jKHBhdGgpO1xuXG4gICAgICAgIGxldCBwaHpXcml0ZXIgPSBuZXcgUEhaV3JpdGVyKHBhdGgpO1xuICAgICAgICBsZXQgcmVzb3VyY2UgPSBSZXNvdXJjZUZhY3RvcnkuY3JlYXRlKFwiaHR0cDovL2V4YW1wbGUuY29tXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gICAgICAgIGF3YWl0IHBoeldyaXRlci53cml0ZU1ldGFkYXRhKHtcbiAgICAgICAgICAgIHRpdGxlOiBcInRoaXMgaXMgdGhlIHRpdGxlXCJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgcGh6V3JpdGVyLndyaXRlUmVzb3VyY2UocmVzb3VyY2UsIFwiPGh0bWw+PC9odG1sPlwiKTtcbiAgICAgICAgYXdhaXQgcGh6V3JpdGVyLmNsb3NlKCk7XG5cbiAgICAgICAgbGV0IHBoelJlYWRlciA9IG5ldyBQSFpSZWFkZXIocGF0aCk7XG4gICAgICAgIGF3YWl0IHBoelJlYWRlci5pbml0KCk7XG5cbiAgICAgICAgbGV0IHJlc291cmNlcyA9IGF3YWl0IHBoelJlYWRlci5nZXRSZXNvdXJjZXMoKTtcblxuICAgICAgICBsZXQgZXhwZWN0ZWQ6IGFueSA9IHtcbiAgICAgICAgICAgIFwiZW50cmllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCIxWEtaRVdoVHdidG9QRlNrUjJUSlwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCIxWEtaRVdoVHdidG9QRlNrUjJUSlwiLFxuICAgICAgICAgICAgICAgICAgICBcInBhdGhcIjogXCIxWEtaRVdoVHdidG9QRlNrUjJUSi5odG1sXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicmVzb3VyY2VcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIjFYS1pFV2hUd2J0b1BGU2tSMlRKXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNyZWF0ZWRcIjogXCIyMDEyLTAzLTAyVDExOjM4OjQ5LjMyMVpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWV0YVwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cDovL2V4YW1wbGUuY29tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRUeXBlXCI6IFwidGV4dC9odG1sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1pbWVUeXBlXCI6IFwidGV4dC9odG1sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImVuY29kaW5nXCI6IFwiVVRGLThcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWV0aG9kXCI6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0YXR1c0NvZGVcIjogMjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWFkZXJzXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGFzc2VydEpTT04oRGljdGlvbmFyaWVzLnNvcnRlZChyZXNvdXJjZXMpLCBEaWN0aW9uYXJpZXMuc29ydGVkKGV4cGVjdGVkKSk7XG5cbiAgICAgICAgY29uc3QgcmVzb3VyY2VFbnRyeSA9IHJlc291cmNlcy5lbnRyaWVzW1wiMVhLWkVXaFR3YnRvUEZTa1IyVEpcIl07XG5cbiAgICAgICAgY29uc3QgYnVmZmVyID0gYXdhaXQgcGh6UmVhZGVyLmdldFJlc291cmNlKHJlc291cmNlRW50cnkpO1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBidWZmZXIudG9TdHJpbmcoXCJVVEYtOFwiKTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwoY29udGVudCwgXCI8aHRtbD48L2h0bWw+XCIpO1xuXG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IGF3YWl0IHBoelJlYWRlci5nZXRSZXNvdXJjZUFzU3RyZWFtKHJlc291cmNlRW50cnkpO1xuICAgICAgICBhc3NlcnQub2soc3RyZWFtKTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwoKGF3YWl0IFN0cmVhbXMudG9CdWZmZXIoc3RyZWFtKSkudG9TdHJpbmcoXCJVVEYtOFwiKSwgXCI8aHRtbD48L2h0bWw+XCIpXG5cbiAgICAgICAgLy8gdGVzdCBnZXR0aW5nIHRoZSBtZXRhZGF0YSAod2hlbiB0aGVyZSBpc24ndCBhbnkpXG5cbiAgICAgICAgY29uc3QgbWV0YWRhdGEgPSBhd2FpdCBwaHpSZWFkZXIuZ2V0TWV0YWRhdGEoKTtcblxuICAgICAgICBleHBlY3RlZCA9IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJ0aGlzIGlzIHRoZSB0aXRsZVwiXG4gICAgICAgIH07XG5cbiAgICAgICAgYXNzZXJ0SlNPTihtZXRhZGF0YSwgZXhwZWN0ZWQpO1xuXG4gICAgfSk7XG5cbiAgICBpdChcIlJlYWRpbmcgd2l0aCBubyBtZXRhZGF0YSBvciByZXNvdXJjZXNcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IHBhdGggPSBGaWxlUGF0aHMuY3JlYXRlVGVtcE5hbWUoXCJ0ZXN0LnBoelwiKTtcblxuICAgICAgICBhd2FpdCBGaWxlcy5yZW1vdmVBc3luYyhwYXRoKTtcblxuICAgICAgICBjb25zdCBwaHpXcml0ZXIgPSBuZXcgUEhaV3JpdGVyKHBhdGgpO1xuICAgICAgICBhd2FpdCBwaHpXcml0ZXIuY2xvc2UoKTtcblxuICAgICAgICBsZXQgcGh6UmVhZGVyID0gbmV3IFBIWlJlYWRlcihwYXRoKTtcbiAgICAgICAgYXdhaXQgcGh6UmVhZGVyLmluaXQoKTtcblxuICAgICAgICBsZXQgcmVzb3VyY2VzID0gYXdhaXQgcGh6UmVhZGVyLmdldFJlc291cmNlcygpO1xuXG4gICAgICAgIGxldCBleHBlY3RlZCA9IHtcbiAgICAgICAgICAgIFwiZW50cmllc1wiOiB7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgYXNzZXJ0SlNPTihyZXNvdXJjZXMsIGV4cGVjdGVkKTtcblxuICAgICAgICBsZXQgbWV0YWRhdGEgPSBhd2FpdCBwaHpSZWFkZXIuZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKG1ldGFkYXRhLCBudWxsKTtcblxuICAgIH0pO1xuXG59KTtcblxuIl19