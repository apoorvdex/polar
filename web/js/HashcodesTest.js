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
const Hashcodes_1 = require("./Hashcodes");
const FilePaths_1 = require("./util/FilePaths");
const Files_1 = require("./util/Files");
describe('Hashcodes', function () {
    describe('create', function () {
        it("basic", function () {
            let hashcode = Hashcodes_1.Hashcodes.create("asdf");
            chai_1.assert.equal(hashcode, "1aibZzMnnHwqHd9cmMb2QrRdgyBj5ppNHgCTqxqggN8KRN4jtu");
        });
    });
    describe('createFromStream', function () {
        it("basic", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const data = "this is a test";
                let path = FilePaths_1.FilePaths.createTempName('hash-test-data.txt');
                yield Files_1.Files.writeFileAsync(path, data);
                const hashcode = yield Hashcodes_1.Hashcodes.createFromStream(Files_1.Files.createReadStream(path));
                chai_1.assert.equal(hashcode, "12DPFtaSkqZ1BDBXxY47ThYmzinkWJ6jCMmuJvVZfCdaNViiRwu");
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGFzaGNvZGVzVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkhhc2hjb2Rlc1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLCtCQUE0QjtBQUU1QiwyQ0FBc0M7QUFDdEMsZ0RBQTJDO0FBQzNDLHdDQUFtQztBQUVuQyxRQUFRLENBQUMsV0FBVyxFQUFFO0lBRWxCLFFBQVEsQ0FBQyxRQUFRLEVBQUU7UUFFZixFQUFFLENBQUMsT0FBTyxFQUFFO1lBRVIsSUFBSSxRQUFRLEdBQUcscUJBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFeEMsYUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsb0RBQW9ELENBQUMsQ0FBQztRQUVqRixDQUFDLENBQUMsQ0FBQztJQUVQLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLGtCQUFrQixFQUFFO1FBRXpCLEVBQUUsQ0FBQyxPQUFPLEVBQUU7O2dCQUVSLE1BQU0sSUFBSSxHQUFHLGdCQUFnQixDQUFDO2dCQUU5QixJQUFJLElBQUksR0FBRyxxQkFBUyxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUUxRCxNQUFNLGFBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUV2QyxNQUFNLFFBQVEsR0FBRyxNQUFNLHFCQUFTLENBQUMsZ0JBQWdCLENBQUMsYUFBSyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBRWhGLGFBQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLHFEQUFxRCxDQUFDLENBQUM7WUFFbEYsQ0FBQztTQUFBLENBQUMsQ0FBQztJQUVQLENBQUMsQ0FBQyxDQUFDO0FBR1AsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5cbmltcG9ydCB7SGFzaGNvZGVzfSBmcm9tICcuL0hhc2hjb2Rlcyc7XG5pbXBvcnQge0ZpbGVQYXRoc30gZnJvbSAnLi91dGlsL0ZpbGVQYXRocyc7XG5pbXBvcnQge0ZpbGVzfSBmcm9tICcuL3V0aWwvRmlsZXMnO1xuXG5kZXNjcmliZSgnSGFzaGNvZGVzJywgZnVuY3Rpb24oKSB7XG5cbiAgICBkZXNjcmliZSgnY3JlYXRlJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgaXQoXCJiYXNpY1wiLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIGxldCBoYXNoY29kZSA9IEhhc2hjb2Rlcy5jcmVhdGUoXCJhc2RmXCIpO1xuXG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoaGFzaGNvZGUsIFwiMWFpYlp6TW5uSHdxSGQ5Y21NYjJRclJkZ3lCajVwcE5IZ0NUcXhxZ2dOOEtSTjRqdHVcIik7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdjcmVhdGVGcm9tU3RyZWFtJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgaXQoXCJiYXNpY1wiLCBhc3luYyBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBcInRoaXMgaXMgYSB0ZXN0XCI7XG5cbiAgICAgICAgICAgIGxldCBwYXRoID0gRmlsZVBhdGhzLmNyZWF0ZVRlbXBOYW1lKCdoYXNoLXRlc3QtZGF0YS50eHQnKTtcblxuICAgICAgICAgICAgYXdhaXQgRmlsZXMud3JpdGVGaWxlQXN5bmMocGF0aCwgZGF0YSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGhhc2hjb2RlID0gYXdhaXQgSGFzaGNvZGVzLmNyZWF0ZUZyb21TdHJlYW0oRmlsZXMuY3JlYXRlUmVhZFN0cmVhbShwYXRoKSk7XG5cbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChoYXNoY29kZSwgXCIxMkRQRnRhU2txWjFCREJYeFk0N1RoWW16aW5rV0o2akNNbXVKdlZaZkNkYU5WaWlSd3VcIik7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxuXG59KTtcbiJdfQ==