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
const FileLogger_1 = require("./FileLogger");
const FilePaths_1 = require("../util/FilePaths");
const Files_1 = require("../util/Files");
describe('FileLogger', function () {
    it("Basic", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const path = FilePaths_1.FilePaths.createTempName('file-logger-test.log');
            yield Files_1.Files.removeAsync(path);
            const fileLogger = yield FileLogger_1.FileLogger.create(path);
            chai_1.assert.ok(yield Files_1.Files.existsAsync(path));
            fileLogger.info("Hello world");
            fileLogger.info("This is an object: ", { 'hello': 'world' });
            fileLogger.info("This is a basic string: ", "basic string");
            fileLogger.error("This is an error: ", new Error("Fake error"));
            yield fileLogger.sync();
            yield fileLogger.close();
            const data = yield Files_1.Files.readFileAsync(path);
            console.log("data: ", data.toString("UTF8"));
            chai_1.assert.ok(data.indexOf("[info] Hello world") !== -1);
            chai_1.assert.ok(data.indexOf("[info] This is an object: { hello: 'world' }") !== -1);
            chai_1.assert.ok(data.indexOf("[info] This is a basic string: basic string") !== -1);
            chai_1.assert.ok(data.indexOf("[error] This is an error: \n" +
                "Error: Fake error\n" +
                "    at ") !== -1);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZUxvZ2dlclRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGaWxlTG9nZ2VyVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0JBQTRCO0FBQzVCLDZDQUF3QztBQUN4QyxpREFBNEM7QUFDNUMseUNBQW9DO0FBRXBDLFFBQVEsQ0FBQyxZQUFZLEVBQUU7SUFFbkIsRUFBRSxDQUFDLE9BQU8sRUFBRTs7WUFFUixNQUFNLElBQUksR0FBRyxxQkFBUyxDQUFDLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQzlELE1BQU0sYUFBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUU5QixNQUFNLFVBQVUsR0FBRyxNQUFNLHVCQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRWpELGFBQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxhQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFFekMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUUvQixVQUFVLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7WUFDM0QsVUFBVSxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxjQUFjLENBQUMsQ0FBQztZQUU1RCxVQUFVLENBQUMsS0FBSyxDQUFDLG9CQUFvQixFQUFFLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFFaEUsTUFBTSxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDeEIsTUFBTSxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFekIsTUFBTSxJQUFJLEdBQUcsTUFBTSxhQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUU3QyxhQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JELGFBQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyw4Q0FBOEMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0UsYUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLDZDQUE2QyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5RSxhQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsOEJBQThCO2dCQUMxQixxQkFBcUI7Z0JBQ3JCLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFbEQsQ0FBQztLQUFBLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHtGaWxlTG9nZ2VyfSBmcm9tICcuL0ZpbGVMb2dnZXInO1xuaW1wb3J0IHtGaWxlUGF0aHN9IGZyb20gJy4uL3V0aWwvRmlsZVBhdGhzJztcbmltcG9ydCB7RmlsZXN9IGZyb20gJy4uL3V0aWwvRmlsZXMnO1xuXG5kZXNjcmliZSgnRmlsZUxvZ2dlcicsIGZ1bmN0aW9uKCkge1xuXG4gICAgaXQoXCJCYXNpY1wiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICBjb25zdCBwYXRoID0gRmlsZVBhdGhzLmNyZWF0ZVRlbXBOYW1lKCdmaWxlLWxvZ2dlci10ZXN0LmxvZycpO1xuICAgICAgICBhd2FpdCBGaWxlcy5yZW1vdmVBc3luYyhwYXRoKTtcblxuICAgICAgICBjb25zdCBmaWxlTG9nZ2VyID0gYXdhaXQgRmlsZUxvZ2dlci5jcmVhdGUocGF0aCk7XG5cbiAgICAgICAgYXNzZXJ0Lm9rKGF3YWl0IEZpbGVzLmV4aXN0c0FzeW5jKHBhdGgpKTtcblxuICAgICAgICBmaWxlTG9nZ2VyLmluZm8oXCJIZWxsbyB3b3JsZFwiKTtcblxuICAgICAgICBmaWxlTG9nZ2VyLmluZm8oXCJUaGlzIGlzIGFuIG9iamVjdDogXCIsIHsnaGVsbG8nOiAnd29ybGQnfSk7XG4gICAgICAgIGZpbGVMb2dnZXIuaW5mbyhcIlRoaXMgaXMgYSBiYXNpYyBzdHJpbmc6IFwiLCBcImJhc2ljIHN0cmluZ1wiKTtcblxuICAgICAgICBmaWxlTG9nZ2VyLmVycm9yKFwiVGhpcyBpcyBhbiBlcnJvcjogXCIsIG5ldyBFcnJvcihcIkZha2UgZXJyb3JcIikpO1xuXG4gICAgICAgIGF3YWl0IGZpbGVMb2dnZXIuc3luYygpO1xuICAgICAgICBhd2FpdCBmaWxlTG9nZ2VyLmNsb3NlKCk7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IEZpbGVzLnJlYWRGaWxlQXN5bmMocGF0aCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJkYXRhOiBcIiwgZGF0YS50b1N0cmluZyhcIlVURjhcIikpO1xuXG4gICAgICAgIGFzc2VydC5vayhkYXRhLmluZGV4T2YoXCJbaW5mb10gSGVsbG8gd29ybGRcIikgIT09IC0xKTtcbiAgICAgICAgYXNzZXJ0Lm9rKGRhdGEuaW5kZXhPZihcIltpbmZvXSBUaGlzIGlzIGFuIG9iamVjdDogeyBoZWxsbzogJ3dvcmxkJyB9XCIpICE9PSAtMSk7XG4gICAgICAgIGFzc2VydC5vayhkYXRhLmluZGV4T2YoXCJbaW5mb10gVGhpcyBpcyBhIGJhc2ljIHN0cmluZzogYmFzaWMgc3RyaW5nXCIpICE9PSAtMSk7XG4gICAgICAgIGFzc2VydC5vayhkYXRhLmluZGV4T2YoXCJbZXJyb3JdIFRoaXMgaXMgYW4gZXJyb3I6IFxcblwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJFcnJvcjogRmFrZSBlcnJvclxcblwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgICAgYXQgXCIpICE9PSAtMSk7XG5cbiAgICB9KTtcblxufSk7XG4iXX0=