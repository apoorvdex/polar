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
const fs_1 = __importDefault(require("fs"));
const os_1 = __importDefault(require("os"));
const chai_1 = require("chai");
const TestingTime_1 = require("../../test/TestingTime");
const CacheEntriesFactory_1 = require("./CacheEntriesFactory");
const Assertions_1 = require("../../test/Assertions");
const MockCapturedContent_1 = require("../../capture/MockCapturedContent");
const CapturedPHZWriter_1 = require("../../capture/CapturedPHZWriter");
const Dictionaries_1 = require("../../util/Dictionaries");
const FilePaths_1 = require("../../util/FilePaths");
const Files_1 = require("../../util/Files");
const tmpdir = os_1.default.tmpdir();
TestingTime_1.TestingTime.freeze();
describe('CacheEntriesFactory', function () {
    describe('Load CHTML', function () {
        const path = FilePaths_1.FilePaths.tmpfile("test-load.chtml");
        beforeEach(function (done) {
            TestingTime_1.TestingTime.freeze();
            const data = {
                "href": "https://jakearchibald.com/2016/streams-ftw/",
                "mutations": {
                    "baseAdded": true,
                    "eventAttributesRemoved": 0,
                    "existingBaseRemoved": false,
                    "javascriptAnchorsRemoved": 0,
                    "scriptsRemoved": 11,
                    "showAriaHidden": 5
                },
                "scrollHeight": 16830,
                "title": "2016 - the year of web streams - JakeArchibald.com",
                "url": "https://jakearchibald.com/2016/streams-ftw/"
            };
            fs_1.default.writeFileSync(FilePaths_1.FilePaths.join(tmpdir, "test-load.json"), JSON.stringify(data, null, "  "));
            fs_1.default.writeFileSync(FilePaths_1.FilePaths.join(tmpdir, "test-load.chtml"), "<html></html>");
            done();
        });
        it("createFromCHTML", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const cacheEntriesHolder = yield CacheEntriesFactory_1.CacheEntriesFactory.createFromCHTML(path);
                const expected = {
                    "cacheEntries": {
                        "url": {
                            "method": "GET",
                            "url": "http://jakearchibald.com/2016/streams-ftw/",
                            "headers": {
                                "Content-Type": "text/html"
                            },
                            "statusCode": 200,
                            "statusMessage": "OK",
                            "contentType": "text/html",
                            "mimeType": "text/html",
                            "encoding": "UTF-8",
                            "path": FilePaths_1.FilePaths.join(tmpdir, "test-load.chtml")
                        }
                    },
                    "metadata": {
                        "url": "http://jakearchibald.com/2016/streams-ftw/"
                    }
                };
                Assertions_1.assertJSON(Dictionaries_1.Dictionaries.sorted(cacheEntriesHolder), Dictionaries_1.Dictionaries.sorted(expected));
                chai_1.assert.equal(cacheEntriesHolder.metadata.url, "http://jakearchibald.com/2016/streams-ftw/");
            });
        });
        it("createEntriesFromFile", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const cacheEntriesHolder = yield CacheEntriesFactory_1.CacheEntriesFactory.createEntriesFromFile(path);
                const expected = {
                    "cacheEntries": {
                        "url": {
                            "method": "GET",
                            "url": "http://jakearchibald.com/2016/streams-ftw/",
                            "headers": {
                                "Content-Type": "text/html"
                            },
                            "statusCode": 200,
                            "statusMessage": "OK",
                            "contentType": "text/html",
                            "mimeType": "text/html",
                            "encoding": "UTF-8",
                            "path": FilePaths_1.FilePaths.join(tmpdir, "test-load.chtml")
                        }
                    },
                    "metadata": {
                        "url": "http://jakearchibald.com/2016/streams-ftw/"
                    }
                };
                Assertions_1.assertJSON(Dictionaries_1.Dictionaries.sorted(cacheEntriesHolder), Dictionaries_1.Dictionaries.sorted(expected));
            });
        });
    });
    describe('Load PHZ', function () {
        it("createFromPHZ", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const captured = MockCapturedContent_1.MockCapturedContent.create();
                const path = FilePaths_1.FilePaths.tmpfile("cached-entries-factory.phz");
                const capturedPHZWriter = new CapturedPHZWriter_1.CapturedPHZWriter(path);
                yield capturedPHZWriter.convert(captured);
                chai_1.assert.ok(yield Files_1.Files.existsAsync(path));
                const cacheEntriesHolder = yield CacheEntriesFactory_1.CacheEntriesFactory.createFromPHZ(path);
                Assertions_1.assertJSON(cacheEntriesHolder.metadata, {
                    "title": "Unit testing node applications with TypeScript — using mocha and chai",
                    "type": "phz",
                    "url": "https://journal.artfuldev.com/unit-testing-node-applications-with-typescript-using-mocha-and-chai-384ef05f32b2",
                    "version": "3.0.0",
                    "browser": {
                        "inactive": false,
                        "type": "phone",
                        "title": "MOBILE_GALAXY_S8_WITH_CHROME_61_WIDTH_750",
                        "name": "MOBILE_GALAXY_S8_WITH_CHROME_61_WIDTH_750",
                        "description": "Galaxy S8 mobile device running Chrome 61 but with width at 750",
                        "userAgent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Mobile Safari/537.36",
                        "deviceEmulation": {
                            "screenPosition": "mobile",
                            "screenSize": {
                                "width": 750,
                                "height": 970
                            },
                            "viewSize": {
                                "width": 750,
                                "height": 970
                            }
                        }
                    }
                });
                let expected = [
                    "https://journal.artfuldev.com/media/076fa5fbed4eb57c0501fa4cbf5855b3?postId=384ef05f32b2",
                    "https://journal.artfuldev.com/media/1332267fe1665fafdc8c0d9f8c8d5d98?postId=384ef05f32b2",
                    "https://journal.artfuldev.com/media/264d5a80d834f9976dbec6e2fd721062?postId=384ef05f32b2",
                    "https://journal.artfuldev.com/media/3250d51ccec4df3da4f3447892218065?postId=384ef05f32b2",
                    "https://journal.artfuldev.com/media/3bae3235c7b64d8e09ceda4168c033e3?postId=384ef05f32b2",
                    "https://journal.artfuldev.com/media/46f0f788c01c4b194cefde2d9ec41eaf?postId=384ef05f32b2",
                    "https://journal.artfuldev.com/media/48a721a0e2b65d851322f94f6bd4d020?postId=384ef05f32b2",
                    "https://journal.artfuldev.com/media/492bacc690c54aa549a96b849fa572ed?postId=384ef05f32b2",
                    "https://journal.artfuldev.com/media/5704b996be3ebc61c4f6788571c2e2ca?postId=384ef05f32b2",
                    "https://journal.artfuldev.com/media/70620a582825b3f69261a46fda6f1a8f?postId=384ef05f32b2",
                    "https://journal.artfuldev.com/media/8d779a252338df599e9ee821cd24e492?postId=384ef05f32b2",
                    "https://journal.artfuldev.com/media/af8d9ace95e6e79747acd19e5e659169?postId=384ef05f32b2",
                    "https://journal.artfuldev.com/media/cfc3fc50133fc06fb8cee86ac2292ea1?postId=384ef05f32b2",
                    "https://journal.artfuldev.com/media/dac0a6422059288f196c2a0dd83d4f1e?postId=384ef05f32b2",
                    "https://journal.artfuldev.com/unit-testing-node-applications-with-typescript-using-mocha-and-chai-384ef05f32b2"
                ];
                Assertions_1.assertJSON(Object.keys(cacheEntriesHolder.cacheEntries), expected);
                expected = {
                    "method": "GET",
                    "url": "https://journal.artfuldev.com/unit-testing-node-applications-with-typescript-using-mocha-and-chai-384ef05f32b2",
                    "headers": {},
                    "statusCode": 200,
                    "statusMessage": "OK",
                    "contentType": "text/html",
                    "mimeType": "UTF-8",
                    "encoding": "UTF-8",
                    "resourceEntry": {
                        "id": "1nQrNQ9ToKkRc3VtpCrD",
                        "path": "1nQrNQ9ToKkRc3VtpCrD.html",
                        "resource": {
                            "id": "1nQrNQ9ToKkRc3VtpCrD",
                            "created": "2012-03-02T11:38:49.321Z",
                            "meta": {},
                            "url": "https://journal.artfuldev.com/unit-testing-node-applications-with-typescript-using-mocha-and-chai-384ef05f32b2",
                            "contentType": "text/html",
                            "mimeType": "text/html",
                            "encoding": "UTF-8",
                            "method": "GET",
                            "statusCode": 200,
                            "headers": {},
                            "title": "Unit testing node applications with TypeScript — using mocha and chai",
                        }
                    }
                };
                Assertions_1.assertJSON(Dictionaries_1.Dictionaries.sorted(cacheEntriesHolder.cacheEntries["https://journal.artfuldev.com/unit-testing-node-applications-with-typescript-using-mocha-and-chai-384ef05f32b2"]), Dictionaries_1.Dictionaries.sorted(expected));
                expected = {
                    "method": "GET",
                    "url": "https://journal.artfuldev.com/media/46f0f788c01c4b194cefde2d9ec41eaf?postId=384ef05f32b2",
                    "headers": {},
                    "statusCode": 200,
                    "statusMessage": "OK",
                    "contentType": "text/html",
                    "mimeType": "UTF-8",
                    "encoding": "UTF-8",
                    "resourceEntry": {
                        "id": "12jxKhQbE2wiaw8CK46d",
                        "path": "12jxKhQbE2wiaw8CK46d.html",
                        "resource": {
                            "id": "12jxKhQbE2wiaw8CK46d",
                            "created": "2012-03-02T11:38:49.321Z",
                            "meta": {},
                            "url": "https://journal.artfuldev.com/media/46f0f788c01c4b194cefde2d9ec41eaf?postId=384ef05f32b2",
                            "contentType": "text/html",
                            "mimeType": "text/html",
                            "encoding": "UTF-8",
                            "method": "GET",
                            "statusCode": 200,
                            "headers": {},
                            "title": "install-mocha-chai-ts.sh – Medium",
                        }
                    }
                };
                Assertions_1.assertJSON(Dictionaries_1.Dictionaries.sorted(cacheEntriesHolder.cacheEntries["https://journal.artfuldev.com/media/46f0f788c01c4b194cefde2d9ec41eaf?postId=384ef05f32b2"]), Dictionaries_1.Dictionaries.sorted(expected));
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FjaGVFbnRyaWVzRmFjdG9yeVRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDYWNoZUVudHJpZXNGYWN0b3J5VGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsNENBQW9CO0FBQ3BCLDRDQUFvQjtBQUNwQiwrQkFBNEI7QUFDNUIsd0RBQW1EO0FBQ25ELCtEQUEwRDtBQUMxRCxzREFBaUQ7QUFDakQsMkVBQXNFO0FBQ3RFLHVFQUFrRTtBQUNsRSwwREFBcUQ7QUFDckQsb0RBQStDO0FBQy9DLDRDQUF1QztBQUV2QyxNQUFNLE1BQU0sR0FBRyxZQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDM0IseUJBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVyQixRQUFRLENBQUMscUJBQXFCLEVBQUU7SUFFNUIsUUFBUSxDQUFDLFlBQVksRUFBRTtRQUVuQixNQUFNLElBQUksR0FBRyxxQkFBUyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRWxELFVBQVUsQ0FBQyxVQUFTLElBQUk7WUFFcEIseUJBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUVyQixNQUFNLElBQUksR0FBRztnQkFDVCxNQUFNLEVBQUUsNkNBQTZDO2dCQUNyRCxXQUFXLEVBQUU7b0JBQ1QsV0FBVyxFQUFFLElBQUk7b0JBQ2pCLHdCQUF3QixFQUFFLENBQUM7b0JBQzNCLHFCQUFxQixFQUFFLEtBQUs7b0JBQzVCLDBCQUEwQixFQUFFLENBQUM7b0JBQzdCLGdCQUFnQixFQUFFLEVBQUU7b0JBQ3BCLGdCQUFnQixFQUFFLENBQUM7aUJBQ3RCO2dCQUNELGNBQWMsRUFBRSxLQUFLO2dCQUNyQixPQUFPLEVBQUUsb0RBQW9EO2dCQUM3RCxLQUFLLEVBQUUsNkNBQTZDO2FBQ3ZELENBQUM7WUFFRixZQUFFLENBQUMsYUFBYSxDQUFDLHFCQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxFQUFFLElBQUks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QU0sRUFBRSwyQkFBMkI7d0JBQ25DLFVBQVUsRUFBRTs0QkFDUixJQUFJLEVBQUUsc0JBQXNCOzRCQUM1QixTQUFTLEVBQUUsMEJBQTBCOzRCQUNyQyxNQUFNLEVBQUUsRUFBRTs0QkFDVixLQUFLLEVBQUUsMEZBQTBGOzRCQUNqRyxhQUFhLEVBQUUsV0FBVzs0QkFDMUIsVUFBVSxFQUFFLFdBQVc7NEJBQ3ZCLFVBQVUsRUFBRSxPQUFPOzRCQUNuQixRQUFRLEVBQUUsS0FBSzs0QkFDZixZQUFZLEVBQUUsR0FBRzs0QkFDakIsU0FBUyxFQUFFLEVBQUU7NEJBQ2IsT0FBTyxFQUFFLG1DQUFtQzt5QkFDL0M7cUJBQ0o7aUJBQ0osQ0FBQztnQkFFRix1QkFBVSxDQUFDLDJCQUFZLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQywwRkFBMEYsQ0FBQyxDQUFDLEVBQ2hKLDJCQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFFOUMsQ0FBQztTQUFBLENBQUMsQ0FBQztJQUVQLENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IG9zIGZyb20gJ29zJztcbmltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcbmltcG9ydCB7VGVzdGluZ1RpbWV9IGZyb20gJy4uLy4uL3Rlc3QvVGVzdGluZ1RpbWUnO1xuaW1wb3J0IHtDYWNoZUVudHJpZXNGYWN0b3J5fSBmcm9tICcuL0NhY2hlRW50cmllc0ZhY3RvcnknO1xuaW1wb3J0IHthc3NlcnRKU09OfSBmcm9tICcuLi8uLi90ZXN0L0Fzc2VydGlvbnMnO1xuaW1wb3J0IHtNb2NrQ2FwdHVyZWRDb250ZW50fSBmcm9tICcuLi8uLi9jYXB0dXJlL01vY2tDYXB0dXJlZENvbnRlbnQnO1xuaW1wb3J0IHtDYXB0dXJlZFBIWldyaXRlcn0gZnJvbSAnLi4vLi4vY2FwdHVyZS9DYXB0dXJlZFBIWldyaXRlcic7XG5pbXBvcnQge0RpY3Rpb25hcmllc30gZnJvbSAnLi4vLi4vdXRpbC9EaWN0aW9uYXJpZXMnO1xuaW1wb3J0IHtGaWxlUGF0aHN9IGZyb20gJy4uLy4uL3V0aWwvRmlsZVBhdGhzJztcbmltcG9ydCB7RmlsZXN9IGZyb20gJy4uLy4uL3V0aWwvRmlsZXMnO1xuXG5jb25zdCB0bXBkaXIgPSBvcy50bXBkaXIoKTtcblRlc3RpbmdUaW1lLmZyZWV6ZSgpO1xuXG5kZXNjcmliZSgnQ2FjaGVFbnRyaWVzRmFjdG9yeScsIGZ1bmN0aW9uKCkge1xuXG4gICAgZGVzY3JpYmUoJ0xvYWQgQ0hUTUwnLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBjb25zdCBwYXRoID0gRmlsZVBhdGhzLnRtcGZpbGUoXCJ0ZXN0LWxvYWQuY2h0bWxcIik7XG5cbiAgICAgICAgYmVmb3JlRWFjaChmdW5jdGlvbihkb25lKSB7XG5cbiAgICAgICAgICAgIFRlc3RpbmdUaW1lLmZyZWV6ZSgpO1xuXG4gICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vamFrZWFyY2hpYmFsZC5jb20vMjAxNi9zdHJlYW1zLWZ0dy9cIixcbiAgICAgICAgICAgICAgICBcIm11dGF0aW9uc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiYmFzZUFkZGVkXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIFwiZXZlbnRBdHRyaWJ1dGVzUmVtb3ZlZFwiOiAwLFxuICAgICAgICAgICAgICAgICAgICBcImV4aXN0aW5nQmFzZVJlbW92ZWRcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIFwiamF2YXNjcmlwdEFuY2hvcnNSZW1vdmVkXCI6IDAsXG4gICAgICAgICAgICAgICAgICAgIFwic2NyaXB0c1JlbW92ZWRcIjogMTEsXG4gICAgICAgICAgICAgICAgICAgIFwic2hvd0FyaWFIaWRkZW5cIjogNVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJzY3JvbGxIZWlnaHRcIjogMTY4MzAsXG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIjIwMTYgLSB0aGUgeWVhciBvZiB3ZWIgc3RyZWFtcyAtIEpha2VBcmNoaWJhbGQuY29tXCIsXG4gICAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2pha2VhcmNoaWJhbGQuY29tLzIwMTYvc3RyZWFtcy1mdHcvXCJcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGZzLndyaXRlRmlsZVN5bmMoRmlsZVBhdGhzLmpvaW4odG1wZGlyLCBcInRlc3QtbG9hZC5qc29uXCIpLCBKU09OLnN0cmluZ2lmeShkYXRhLCBudWxsLCBcIiAgXCIpKTtcblxuICAgICAgICAgICAgZnMud3JpdGVGaWxlU3luYyhGaWxlUGF0aHMuam9pbih0bXBkaXIsIFwidGVzdC1sb2FkLmNodG1sXCIpLCBcIjxodG1sPjwvaHRtbD5cIik7XG5cbiAgICAgICAgICAgIGRvbmUoKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBpdChcImNyZWF0ZUZyb21DSFRNTFwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgY29uc3QgY2FjaGVFbnRyaWVzSG9sZGVyID0gYXdhaXQgQ2FjaGVFbnRyaWVzRmFjdG9yeS5jcmVhdGVGcm9tQ0hUTUwocGF0aCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xuICAgICAgICAgICAgICAgIFwiY2FjaGVFbnRyaWVzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ1cmxcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJtZXRob2RcIjogXCJHRVRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cDovL2pha2VhcmNoaWJhbGQuY29tLzIwMTYvc3RyZWFtcy1mdHcvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlYWRlcnNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwidGV4dC9odG1sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0YXR1c0NvZGVcIjogMjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGF0dXNNZXNzYWdlXCI6IFwiT0tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudFR5cGVcIjogXCJ0ZXh0L2h0bWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWltZVR5cGVcIjogXCJ0ZXh0L2h0bWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZW5jb2RpbmdcIjogXCJVVEYtOFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXRoXCI6IEZpbGVQYXRocy5qb2luKHRtcGRpciwgXCJ0ZXN0LWxvYWQuY2h0bWxcIilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJtZXRhZGF0YVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cDovL2pha2VhcmNoaWJhbGQuY29tLzIwMTYvc3RyZWFtcy1mdHcvXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBhc3NlcnRKU09OKERpY3Rpb25hcmllcy5zb3J0ZWQoY2FjaGVFbnRyaWVzSG9sZGVyKSwgRGljdGlvbmFyaWVzLnNvcnRlZChleHBlY3RlZCkpO1xuXG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoY2FjaGVFbnRyaWVzSG9sZGVyLm1ldGFkYXRhLnVybCwgXCJodHRwOi8vamFrZWFyY2hpYmFsZC5jb20vMjAxNi9zdHJlYW1zLWZ0dy9cIik7XG5cbiAgICAgICAgfSk7XG5cblxuICAgICAgICBpdChcImNyZWF0ZUVudHJpZXNGcm9tRmlsZVwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgY29uc3QgY2FjaGVFbnRyaWVzSG9sZGVyID0gYXdhaXQgQ2FjaGVFbnRyaWVzRmFjdG9yeS5jcmVhdGVFbnRyaWVzRnJvbUZpbGUocGF0aCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xuICAgICAgICAgICAgICAgIFwiY2FjaGVFbnRyaWVzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ1cmxcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJtZXRob2RcIjogXCJHRVRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cDovL2pha2VhcmNoaWJhbGQuY29tLzIwMTYvc3RyZWFtcy1mdHcvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlYWRlcnNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwidGV4dC9odG1sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0YXR1c0NvZGVcIjogMjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGF0dXNNZXNzYWdlXCI6IFwiT0tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudFR5cGVcIjogXCJ0ZXh0L2h0bWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWltZVR5cGVcIjogXCJ0ZXh0L2h0bWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZW5jb2RpbmdcIjogXCJVVEYtOFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXRoXCI6IEZpbGVQYXRocy5qb2luKHRtcGRpciwgXCJ0ZXN0LWxvYWQuY2h0bWxcIilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJtZXRhZGF0YVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cDovL2pha2VhcmNoaWJhbGQuY29tLzIwMTYvc3RyZWFtcy1mdHcvXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBhc3NlcnRKU09OKERpY3Rpb25hcmllcy5zb3J0ZWQoY2FjaGVFbnRyaWVzSG9sZGVyKSwgRGljdGlvbmFyaWVzLnNvcnRlZChleHBlY3RlZCkpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgnTG9hZCBQSFonLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBpdChcImNyZWF0ZUZyb21QSFpcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNhcHR1cmVkID0gTW9ja0NhcHR1cmVkQ29udGVudC5jcmVhdGUoKTtcblxuICAgICAgICAgICAgY29uc3QgcGF0aCA9IEZpbGVQYXRocy50bXBmaWxlKFwiY2FjaGVkLWVudHJpZXMtZmFjdG9yeS5waHpcIik7XG4gICAgICAgICAgICBjb25zdCBjYXB0dXJlZFBIWldyaXRlciA9IG5ldyBDYXB0dXJlZFBIWldyaXRlcihwYXRoKTtcbiAgICAgICAgICAgIGF3YWl0IGNhcHR1cmVkUEhaV3JpdGVyLmNvbnZlcnQoY2FwdHVyZWQpO1xuXG4gICAgICAgICAgICBhc3NlcnQub2soYXdhaXQgRmlsZXMuZXhpc3RzQXN5bmMocGF0aCkpO1xuXG4gICAgICAgICAgICBjb25zdCBjYWNoZUVudHJpZXNIb2xkZXIgPSBhd2FpdCBDYWNoZUVudHJpZXNGYWN0b3J5LmNyZWF0ZUZyb21QSFoocGF0aCk7XG5cbiAgICAgICAgICAgIGFzc2VydEpTT04oY2FjaGVFbnRyaWVzSG9sZGVyLm1ldGFkYXRhLCB7XG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlVuaXQgdGVzdGluZyBub2RlIGFwcGxpY2F0aW9ucyB3aXRoIFR5cGVTY3JpcHTigIrigJTigIp1c2luZyBtb2NoYSBhbmQgY2hhaVwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBoelwiLFxuICAgICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9qb3VybmFsLmFydGZ1bGRldi5jb20vdW5pdC10ZXN0aW5nLW5vZGUtYXBwbGljYXRpb25zLXdpdGgtdHlwZXNjcmlwdC11c2luZy1tb2NoYS1hbmQtY2hhaS0zODRlZjA1ZjMyYjJcIixcbiAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIzLjAuMFwiLFxuICAgICAgICAgICAgICAgIFwiYnJvd3NlclwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiaW5hY3RpdmVcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBob25lXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJNT0JJTEVfR0FMQVhZX1M4X1dJVEhfQ0hST01FXzYxX1dJRFRIXzc1MFwiLFxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNT0JJTEVfR0FMQVhZX1M4X1dJVEhfQ0hST01FXzYxX1dJRFRIXzc1MFwiLFxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiR2FsYXh5IFM4IG1vYmlsZSBkZXZpY2UgcnVubmluZyBDaHJvbWUgNjEgYnV0IHdpdGggd2lkdGggYXQgNzUwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidXNlckFnZW50XCI6IFwiTW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDguMC4wOyBTTS1HOTU1VSBCdWlsZC9SMTZOVykgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzYxLjAuMzE2My4xMDAgTW9iaWxlIFNhZmFyaS81MzcuMzZcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkZXZpY2VFbXVsYXRpb25cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzY3JlZW5Qb3NpdGlvblwiOiBcIm1vYmlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzY3JlZW5TaXplXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDc1MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiA5NzBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZpZXdTaXplXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDc1MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiA5NzBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsZXQgZXhwZWN0ZWQ6IGFueSA9IFtcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vam91cm5hbC5hcnRmdWxkZXYuY29tL21lZGlhLzA3NmZhNWZiZWQ0ZWI1N2MwNTAxZmE0Y2JmNTg1NWIzP3Bvc3RJZD0zODRlZjA1ZjMyYjJcIixcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vam91cm5hbC5hcnRmdWxkZXYuY29tL21lZGlhLzEzMzIyNjdmZTE2NjVmYWZkYzhjMGQ5ZjhjOGQ1ZDk4P3Bvc3RJZD0zODRlZjA1ZjMyYjJcIixcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vam91cm5hbC5hcnRmdWxkZXYuY29tL21lZGlhLzI2NGQ1YTgwZDgzNGY5OTc2ZGJlYzZlMmZkNzIxMDYyP3Bvc3RJZD0zODRlZjA1ZjMyYjJcIixcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vam91cm5hbC5hcnRmdWxkZXYuY29tL21lZGlhLzMyNTBkNTFjY2VjNGRmM2RhNGYzNDQ3ODkyMjE4MDY1P3Bvc3RJZD0zODRlZjA1ZjMyYjJcIixcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vam91cm5hbC5hcnRmdWxkZXYuY29tL21lZGlhLzNiYWUzMjM1YzdiNjRkOGUwOWNlZGE0MTY4YzAzM2UzP3Bvc3RJZD0zODRlZjA1ZjMyYjJcIixcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vam91cm5hbC5hcnRmdWxkZXYuY29tL21lZGlhLzQ2ZjBmNzg4YzAxYzRiMTk0Y2VmZGUyZDllYzQxZWFmP3Bvc3RJZD0zODRlZjA1ZjMyYjJcIixcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vam91cm5hbC5hcnRmdWxkZXYuY29tL21lZGlhLzQ4YTcyMWEwZTJiNjVkODUxMzIyZjk0ZjZiZDRkMDIwP3Bvc3RJZD0zODRlZjA1ZjMyYjJcIixcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vam91cm5hbC5hcnRmdWxkZXYuY29tL21lZGlhLzQ5MmJhY2M2OTBjNTRhYTU0OWE5NmI4NDlmYTU3MmVkP3Bvc3RJZD0zODRlZjA1ZjMyYjJcIixcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vam91cm5hbC5hcnRmdWxkZXYuY29tL21lZGlhLzU3MDRiOTk2YmUzZWJjNjFjNGY2Nzg4NTcxYzJlMmNhP3Bvc3RJZD0zODRlZjA1ZjMyYjJcIixcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vam91cm5hbC5hcnRmdWxkZXYuY29tL21lZGlhLzcwNjIwYTU4MjgyNWIzZjY5MjYxYTQ2ZmRhNmYxYThmP3Bvc3RJZD0zODRlZjA1ZjMyYjJcIixcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vam91cm5hbC5hcnRmdWxkZXYuY29tL21lZGlhLzhkNzc5YTI1MjMzOGRmNTk5ZTllZTgyMWNkMjRlNDkyP3Bvc3RJZD0zODRlZjA1ZjMyYjJcIixcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vam91cm5hbC5hcnRmdWxkZXYuY29tL21lZGlhL2FmOGQ5YWNlOTVlNmU3OTc0N2FjZDE5ZTVlNjU5MTY5P3Bvc3RJZD0zODRlZjA1ZjMyYjJcIixcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vam91cm5hbC5hcnRmdWxkZXYuY29tL21lZGlhL2NmYzNmYzUwMTMzZmMwNmZiOGNlZTg2YWMyMjkyZWExP3Bvc3RJZD0zODRlZjA1ZjMyYjJcIixcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vam91cm5hbC5hcnRmdWxkZXYuY29tL21lZGlhL2RhYzBhNjQyMjA1OTI4OGYxOTZjMmEwZGQ4M2Q0ZjFlP3Bvc3RJZD0zODRlZjA1ZjMyYjJcIixcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vam91cm5hbC5hcnRmdWxkZXYuY29tL3VuaXQtdGVzdGluZy1ub2RlLWFwcGxpY2F0aW9ucy13aXRoLXR5cGVzY3JpcHQtdXNpbmctbW9jaGEtYW5kLWNoYWktMzg0ZWYwNWYzMmIyXCJcbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIGFzc2VydEpTT04oT2JqZWN0LmtleXMoY2FjaGVFbnRyaWVzSG9sZGVyLmNhY2hlRW50cmllcyksIGV4cGVjdGVkKVxuXG4gICAgICAgICAgICBleHBlY3RlZCA9IHtcbiAgICAgICAgICAgICAgICBcIm1ldGhvZFwiOiBcIkdFVFwiLFxuICAgICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9qb3VybmFsLmFydGZ1bGRldi5jb20vdW5pdC10ZXN0aW5nLW5vZGUtYXBwbGljYXRpb25zLXdpdGgtdHlwZXNjcmlwdC11c2luZy1tb2NoYS1hbmQtY2hhaS0zODRlZjA1ZjMyYjJcIixcbiAgICAgICAgICAgICAgICBcImhlYWRlcnNcIjoge30sXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNDb2RlXCI6IDIwMCxcbiAgICAgICAgICAgICAgICBcInN0YXR1c01lc3NhZ2VcIjogXCJPS1wiLFxuICAgICAgICAgICAgICAgIFwiY29udGVudFR5cGVcIjogXCJ0ZXh0L2h0bWxcIixcbiAgICAgICAgICAgICAgICBcIm1pbWVUeXBlXCI6IFwiVVRGLThcIixcbiAgICAgICAgICAgICAgICBcImVuY29kaW5nXCI6IFwiVVRGLThcIixcbiAgICAgICAgICAgICAgICBcInJlc291cmNlRW50cnlcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiMW5Rck5ROVRvS2tSYzNWdHBDckRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJwYXRoXCI6IFwiMW5Rck5ROVRvS2tSYzNWdHBDckQuaHRtbFwiLFxuICAgICAgICAgICAgICAgICAgICBcInJlc291cmNlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCIxblFyTlE5VG9La1JjM1Z0cENyRFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjcmVhdGVkXCI6IFwiMjAxMi0wMy0wMlQxMTozODo0OS4zMjFaXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1ldGFcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vam91cm5hbC5hcnRmdWxkZXYuY29tL3VuaXQtdGVzdGluZy1ub2RlLWFwcGxpY2F0aW9ucy13aXRoLXR5cGVzY3JpcHQtdXNpbmctbW9jaGEtYW5kLWNoYWktMzg0ZWYwNWYzMmIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRUeXBlXCI6IFwidGV4dC9odG1sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1pbWVUeXBlXCI6IFwidGV4dC9odG1sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImVuY29kaW5nXCI6IFwiVVRGLThcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWV0aG9kXCI6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0YXR1c0NvZGVcIjogMjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWFkZXJzXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlVuaXQgdGVzdGluZyBub2RlIGFwcGxpY2F0aW9ucyB3aXRoIFR5cGVTY3JpcHTigIrigJTigIp1c2luZyBtb2NoYSBhbmQgY2hhaVwiLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhc3NlcnRKU09OKERpY3Rpb25hcmllcy5zb3J0ZWQoY2FjaGVFbnRyaWVzSG9sZGVyLmNhY2hlRW50cmllc1tcImh0dHBzOi8vam91cm5hbC5hcnRmdWxkZXYuY29tL3VuaXQtdGVzdGluZy1ub2RlLWFwcGxpY2F0aW9ucy13aXRoLXR5cGVzY3JpcHQtdXNpbmctbW9jaGEtYW5kLWNoYWktMzg0ZWYwNWYzMmIyXCJdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgRGljdGlvbmFyaWVzLnNvcnRlZChleHBlY3RlZCkpXG5cbiAgICAgICAgICAgIGV4cGVjdGVkID0ge1xuICAgICAgICAgICAgICAgIFwibWV0aG9kXCI6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2pvdXJuYWwuYXJ0ZnVsZGV2LmNvbS9tZWRpYS80NmYwZjc4OGMwMWM0YjE5NGNlZmRlMmQ5ZWM0MWVhZj9wb3N0SWQ9Mzg0ZWYwNWYzMmIyXCIsXG4gICAgICAgICAgICAgICAgXCJoZWFkZXJzXCI6IHt9LFxuICAgICAgICAgICAgICAgIFwic3RhdHVzQ29kZVwiOiAyMDAsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNNZXNzYWdlXCI6IFwiT0tcIixcbiAgICAgICAgICAgICAgICBcImNvbnRlbnRUeXBlXCI6IFwidGV4dC9odG1sXCIsXG4gICAgICAgICAgICAgICAgXCJtaW1lVHlwZVwiOiBcIlVURi04XCIsXG4gICAgICAgICAgICAgICAgXCJlbmNvZGluZ1wiOiBcIlVURi04XCIsXG4gICAgICAgICAgICAgICAgXCJyZXNvdXJjZUVudHJ5XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIjEyanhLaFFiRTJ3aWF3OENLNDZkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicGF0aFwiOiBcIjEyanhLaFFiRTJ3aWF3OENLNDZkLmh0bWxcIixcbiAgICAgICAgICAgICAgICAgICAgXCJyZXNvdXJjZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiMTJqeEtoUWJFMndpYXc4Q0s0NmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZFwiOiBcIjIwMTItMDMtMDJUMTE6Mzg6NDkuMzIxWlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtZXRhXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2pvdXJuYWwuYXJ0ZnVsZGV2LmNvbS9tZWRpYS80NmYwZjc4OGMwMWM0YjE5NGNlZmRlMmQ5ZWM0MWVhZj9wb3N0SWQ9Mzg0ZWYwNWYzMmIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRUeXBlXCI6IFwidGV4dC9odG1sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1pbWVUeXBlXCI6IFwidGV4dC9odG1sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImVuY29kaW5nXCI6IFwiVVRGLThcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWV0aG9kXCI6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0YXR1c0NvZGVcIjogMjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWFkZXJzXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcImluc3RhbGwtbW9jaGEtY2hhaS10cy5zaCDigJMgTWVkaXVtXCIsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBhc3NlcnRKU09OKERpY3Rpb25hcmllcy5zb3J0ZWQoY2FjaGVFbnRyaWVzSG9sZGVyLmNhY2hlRW50cmllc1tcImh0dHBzOi8vam91cm5hbC5hcnRmdWxkZXYuY29tL21lZGlhLzQ2ZjBmNzg4YzAxYzRiMTk0Y2VmZGUyZDllYzQxZWFmP3Bvc3RJZD0zODRlZjA1ZjMyYjJcIl0pLFxuICAgICAgICAgICAgICAgICAgICAgICBEaWN0aW9uYXJpZXMuc29ydGVkKGV4cGVjdGVkKSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxufSk7XG4iXX0=