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
const FilePaths_1 = require("./FilePaths");
const Files_1 = require("./Files");
const Fetch_1 = __importDefault(require("./Fetch"));
const Preconditions_1 = require("../Preconditions");
describe('FilePaths', function () {
    describe('BrowserFilePaths', function () {
        it("basename", function () {
            const assertEqual = (path, ext) => {
                const actual = FilePaths_1.FilePaths.basename(path, ext);
                const expected = FilePaths_1.BrowserFilePaths.basename(path, ext);
                chai_1.assert.equal(actual, expected);
            };
            assertEqual('/foo/cat.txt', '.txt');
            assertEqual('cat.txt', '.txt');
            assertEqual('none');
            assertEqual('/foo/bar.txt');
            assertEqual('/foo/cat.txt');
            assertEqual('/bar.txt');
            FilePaths_1.BrowserFilePaths.SEP = '\\';
            chai_1.assert.equal(FilePaths_1.BrowserFilePaths.basename('c:\\foo\\cat.txt', '.txt'), 'cat');
            chai_1.assert.equal(FilePaths_1.BrowserFilePaths.basename('none'), 'none');
            chai_1.assert.equal(FilePaths_1.BrowserFilePaths.basename('c:\\foo\\bar.txt'), 'bar.txt');
        });
    });
    xdescribe('toWindowsPath', () => {
        it("basic", function () {
            return __awaiter(this, void 0, void 0, function* () {
                chai_1.assert.equal(FilePaths_1.FilePaths.toWindowsPath('/tmp/test/hello.txt'), 'C:\\tmp\\test\\hello.txt');
            });
        });
    });
    xdescribe('textToWindowsPath', () => {
        it("basic", function () {
            return __awaiter(this, void 0, void 0, function* () {
                chai_1.assert.equal(FilePaths_1.FilePaths.textToWindowsPath('some text /tmp/test/hello.txt then this'), 'some text C:\\tmp\\test\\hello.txt then this');
            });
        });
        it("real world", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const text = '     at Function.getCaller (/home/burton/projects/polar-bookshelf/web/js/test/MyTest.jsx:5:17)';
                const expected = '     at Function.getCaller (C:\\home\\burton\\projects\\polar-bookshelf\\web\\js\\test\\MyTest.jsx:5:17)';
                chai_1.assert.equal(FilePaths_1.FilePaths.textToWindowsPath(text), expected);
            });
        });
    });
    describe('toExtension', function () {
        it('null and undefined', function () {
            chai_1.assert.equal(FilePaths_1.FilePaths.toExtension(null).isPresent(), false);
            chai_1.assert.equal(FilePaths_1.FilePaths.toExtension(undefined).isPresent(), false);
        });
        it('empty string', function () {
            chai_1.assert.equal(FilePaths_1.FilePaths.toExtension("").isPresent(), false);
        });
        it('None', function () {
            chai_1.assert.equal(FilePaths_1.FilePaths.toExtension("hello").isPresent(), false);
        });
        it('Basic', function () {
            chai_1.assert.equal(FilePaths_1.FilePaths.toExtension("hello.txt").get(), "txt");
        });
        it('Four chars', function () {
            chai_1.assert.equal(FilePaths_1.FilePaths.toExtension("hello.html").get(), "html");
        });
    });
    xdescribe('File URLs', function () {
        return __awaiter(this, void 0, void 0, function* () {
            xit('Test file URL', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const path = FilePaths_1.FilePaths.createTempName('file-url-data.txt');
                    const data = 'hello world';
                    yield Files_1.Files.writeFileAsync(path, data);
                    const url = FilePaths_1.FilePaths.toFileURL(path);
                    console.log("URL: " + url);
                    const response = yield Fetch_1.default(url);
                    const buffer = yield response.buffer();
                    chai_1.assert.ok(Preconditions_1.isPresent(buffer), "no buffer");
                    chai_1.assert.equal(data, buffer.toString('utf8'));
                });
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZVBhdGhzVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkZpbGVQYXRoc1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUE0QjtBQUM1QiwyQ0FBd0Q7QUFDeEQsbUNBQThCO0FBRTlCLG9EQUE0QjtBQUM1QixvREFBMkM7QUFHM0MsUUFBUSxDQUFDLFdBQVcsRUFBRTtJQUVsQixRQUFRLENBQUMsa0JBQWtCLEVBQUU7UUFFekIsRUFBRSxDQUFDLFVBQVUsRUFBRTtZQUVYLE1BQU0sV0FBVyxHQUFHLENBQUMsSUFBWSxFQUFFLEdBQVksRUFBRSxFQUFFO2dCQUMvQyxNQUFNLE1BQU0sR0FBRyxxQkFBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQzdDLE1BQU0sUUFBUSxHQUFHLDRCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3RELGFBQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBQztZQUVGLFdBQVcsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFFcEMsV0FBVyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUUvQixXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzVCLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUM1QixXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFeEIsNEJBQWdCLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztZQUU1QixhQUFNLENBQUMsS0FBSyxDQUFDLDRCQUFnQixDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMzRSxhQUFNLENBQUMsS0FBSyxDQUFDLDRCQUFnQixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUV4RCxhQUFNLENBQUMsS0FBSyxDQUFDLDRCQUFnQixDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRTNFLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQyxDQUFDLENBQUM7SUFFSCxTQUFTLENBQUMsZUFBZSxFQUFFLEdBQUcsRUFBRTtRQUU1QixFQUFFLENBQUMsT0FBTyxFQUFFOztnQkFFUixhQUFNLENBQUMsS0FBSyxDQUFDLHFCQUFTLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztZQUU3RixDQUFDO1NBQUEsQ0FBQyxDQUFDO0lBRVAsQ0FBQyxDQUFDLENBQUM7SUFFSCxTQUFTLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxFQUFFO1FBSWhDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7O2dCQUVSLGFBQU0sQ0FBQyxLQUFLLENBQUMscUJBQVMsQ0FBQyxpQkFBaUIsQ0FBQyx5Q0FBeUMsQ0FBQyxFQUFFLDhDQUE4QyxDQUFDLENBQUM7WUFFekksQ0FBQztTQUFBLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxZQUFZLEVBQUU7O2dCQUViLE1BQU0sSUFBSSxHQUFHLGdHQUFnRyxDQUFDO2dCQUM5RyxNQUFNLFFBQVEsR0FBRywwR0FBMEcsQ0FBQztnQkFFNUgsYUFBTSxDQUFDLEtBQUssQ0FBQyxxQkFBUyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBRTlELENBQUM7U0FBQSxDQUFDLENBQUM7SUFFUCxDQUFDLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxhQUFhLEVBQUU7UUFFcEIsRUFBRSxDQUFDLG9CQUFvQixFQUFFO1lBQ3JCLGFBQU0sQ0FBQyxLQUFLLENBQUMscUJBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDOUQsYUFBTSxDQUFDLEtBQUssQ0FBQyxxQkFBUyxDQUFDLFdBQVcsQ0FBQyxTQUFVLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN2RSxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxjQUFjLEVBQUU7WUFDZixhQUFNLENBQUMsS0FBSyxDQUFDLHFCQUFTLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQy9ELENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLE1BQU0sRUFBRTtZQUNQLGFBQU0sQ0FBQyxLQUFLLENBQUMscUJBQVMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDcEUsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsT0FBTyxFQUFFO1lBQ1IsYUFBTSxDQUFDLEtBQUssQ0FBQyxxQkFBUyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNsRSxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxZQUFZLEVBQUU7WUFDYixhQUFNLENBQUMsS0FBSyxDQUFDLHFCQUFTLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3BFLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQyxDQUFDLENBQUM7SUFFSCxTQUFTLENBQUMsV0FBVyxFQUFFOztZQUVuQixHQUFHLENBQUMsZUFBZSxFQUFFOztvQkFFakIsTUFBTSxJQUFJLEdBQUcscUJBQVMsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQztvQkFFM0QsTUFBTSxJQUFJLEdBQUcsYUFBYSxDQUFDO29CQUMzQixNQUFNLGFBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUV2QyxNQUFNLEdBQUcsR0FBRyxxQkFBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFFdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUM7b0JBRTNCLE1BQU0sUUFBUSxHQUFHLE1BQU0sZUFBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUVsQyxNQUFNLE1BQU0sR0FBRyxNQUFNLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFFdkMsYUFBTSxDQUFDLEVBQUUsQ0FBQyx5QkFBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO29CQUMxQyxhQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBRWhELENBQUM7YUFBQSxDQUFDLENBQUM7UUFFUCxDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBR1AsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQge0Jyb3dzZXJGaWxlUGF0aHMsIEZpbGVQYXRoc30gZnJvbSAnLi9GaWxlUGF0aHMnO1xuaW1wb3J0IHtGaWxlc30gZnJvbSAnLi9GaWxlcyc7XG5pbXBvcnQge1VSTHN9IGZyb20gJy4vVVJMcyc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnLi9GZXRjaCc7XG5pbXBvcnQge2lzUHJlc2VudH0gZnJvbSAnLi4vUHJlY29uZGl0aW9ucyc7XG5pbXBvcnQge0Jyb3dzZXJ9IGZyb20gJy4uL2NhcHR1cmUvQnJvd3Nlcic7XG5cbmRlc2NyaWJlKCdGaWxlUGF0aHMnLCBmdW5jdGlvbigpIHtcblxuICAgIGRlc2NyaWJlKCdCcm93c2VyRmlsZVBhdGhzJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgaXQoXCJiYXNlbmFtZVwiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgY29uc3QgYXNzZXJ0RXF1YWwgPSAocGF0aDogc3RyaW5nLCBleHQ/OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhY3R1YWwgPSBGaWxlUGF0aHMuYmFzZW5hbWUocGF0aCwgZXh0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBleHBlY3RlZCA9IEJyb3dzZXJGaWxlUGF0aHMuYmFzZW5hbWUocGF0aCwgZXh0KTtcbiAgICAgICAgICAgICAgICBhc3NlcnQuZXF1YWwoYWN0dWFsLCBleHBlY3RlZCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBhc3NlcnRFcXVhbCgnL2Zvby9jYXQudHh0JywgJy50eHQnKTtcblxuICAgICAgICAgICAgYXNzZXJ0RXF1YWwoJ2NhdC50eHQnLCAnLnR4dCcpO1xuXG4gICAgICAgICAgICBhc3NlcnRFcXVhbCgnbm9uZScpO1xuICAgICAgICAgICAgYXNzZXJ0RXF1YWwoJy9mb28vYmFyLnR4dCcpO1xuICAgICAgICAgICAgYXNzZXJ0RXF1YWwoJy9mb28vY2F0LnR4dCcpO1xuICAgICAgICAgICAgYXNzZXJ0RXF1YWwoJy9iYXIudHh0Jyk7XG5cbiAgICAgICAgICAgIEJyb3dzZXJGaWxlUGF0aHMuU0VQID0gJ1xcXFwnO1xuXG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoQnJvd3NlckZpbGVQYXRocy5iYXNlbmFtZSgnYzpcXFxcZm9vXFxcXGNhdC50eHQnLCAnLnR4dCcpLCAnY2F0Jyk7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoQnJvd3NlckZpbGVQYXRocy5iYXNlbmFtZSgnbm9uZScpLCAnbm9uZScpO1xuXG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoQnJvd3NlckZpbGVQYXRocy5iYXNlbmFtZSgnYzpcXFxcZm9vXFxcXGJhci50eHQnKSwgJ2Jhci50eHQnKTtcblxuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG4gICAgeGRlc2NyaWJlKCd0b1dpbmRvd3NQYXRoJywgKCkgPT4ge1xuXG4gICAgICAgIGl0KFwiYmFzaWNcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChGaWxlUGF0aHMudG9XaW5kb3dzUGF0aCgnL3RtcC90ZXN0L2hlbGxvLnR4dCcpLCAnQzpcXFxcdG1wXFxcXHRlc3RcXFxcaGVsbG8udHh0Jyk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxuICAgIHhkZXNjcmliZSgndGV4dFRvV2luZG93c1BhdGgnLCAoKSA9PiB7XG5cbiAgICAgICAgLy8gVE9ETzogdGhlc2UgY2F1c2VkIGJ1Z3Mgb24gTWFjT1MuLi5cblxuICAgICAgICBpdChcImJhc2ljXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoRmlsZVBhdGhzLnRleHRUb1dpbmRvd3NQYXRoKCdzb21lIHRleHQgL3RtcC90ZXN0L2hlbGxvLnR4dCB0aGVuIHRoaXMnKSwgJ3NvbWUgdGV4dCBDOlxcXFx0bXBcXFxcdGVzdFxcXFxoZWxsby50eHQgdGhlbiB0aGlzJyk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJyZWFsIHdvcmxkXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gJyAgICAgYXQgRnVuY3Rpb24uZ2V0Q2FsbGVyICgvaG9tZS9idXJ0b24vcHJvamVjdHMvcG9sYXItYm9va3NoZWxmL3dlYi9qcy90ZXN0L015VGVzdC5qc3g6NToxNyknO1xuICAgICAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSAnICAgICBhdCBGdW5jdGlvbi5nZXRDYWxsZXIgKEM6XFxcXGhvbWVcXFxcYnVydG9uXFxcXHByb2plY3RzXFxcXHBvbGFyLWJvb2tzaGVsZlxcXFx3ZWJcXFxcanNcXFxcdGVzdFxcXFxNeVRlc3QuanN4OjU6MTcpJztcblxuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKEZpbGVQYXRocy50ZXh0VG9XaW5kb3dzUGF0aCh0ZXh0KSwgZXhwZWN0ZWQpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgndG9FeHRlbnNpb24nLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBpdCgnbnVsbCBhbmQgdW5kZWZpbmVkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoRmlsZVBhdGhzLnRvRXh0ZW5zaW9uKG51bGwhKS5pc1ByZXNlbnQoKSwgZmFsc2UpO1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKEZpbGVQYXRocy50b0V4dGVuc2lvbih1bmRlZmluZWQhKS5pc1ByZXNlbnQoKSwgZmFsc2UpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdCgnZW1wdHkgc3RyaW5nJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoRmlsZVBhdGhzLnRvRXh0ZW5zaW9uKFwiXCIpLmlzUHJlc2VudCgpLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KCdOb25lJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoRmlsZVBhdGhzLnRvRXh0ZW5zaW9uKFwiaGVsbG9cIikuaXNQcmVzZW50KCksIGZhbHNlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoJ0Jhc2ljJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoRmlsZVBhdGhzLnRvRXh0ZW5zaW9uKFwiaGVsbG8udHh0XCIpLmdldCgpLCBcInR4dFwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoJ0ZvdXIgY2hhcnMnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChGaWxlUGF0aHMudG9FeHRlbnNpb24oXCJoZWxsby5odG1sXCIpLmdldCgpLCBcImh0bWxcIik7XG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbiAgICB4ZGVzY3JpYmUoJ0ZpbGUgVVJMcycsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHhpdCgnVGVzdCBmaWxlIFVSTCcsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBjb25zdCBwYXRoID0gRmlsZVBhdGhzLmNyZWF0ZVRlbXBOYW1lKCdmaWxlLXVybC1kYXRhLnR4dCcpO1xuXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gJ2hlbGxvIHdvcmxkJztcbiAgICAgICAgICAgIGF3YWl0IEZpbGVzLndyaXRlRmlsZUFzeW5jKHBhdGgsIGRhdGEpO1xuXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBGaWxlUGF0aHMudG9GaWxlVVJMKHBhdGgpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVSTDogXCIgKyB1cmwpO1xuXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlciA9IGF3YWl0IHJlc3BvbnNlLmJ1ZmZlcigpO1xuXG4gICAgICAgICAgICBhc3NlcnQub2soaXNQcmVzZW50KGJ1ZmZlciksIFwibm8gYnVmZmVyXCIpO1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKGRhdGEsIGJ1ZmZlci50b1N0cmluZygndXRmOCcpKTtcblxuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG5cbn0pO1xuIl19