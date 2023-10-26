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
const jsdom_1 = require("jsdom");
const WindowMessagePipe_1 = require("./WindowMessagePipe");
describe('WindowMessagePipe', function () {
    it("Basic post message", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const dom = new jsdom_1.JSDOM("<html></html>");
            global.window = dom.window;
            chai_1.assert.notEqual(global.window, null);
            const windowMessagePipe = new WindowMessagePipe_1.WindowMessagePipe();
            const messagePromise = windowMessagePipe.when('/hello');
            const message = {
                channel: '/hello',
                message: 'hello world'
            };
            window.postMessage(message, '*');
            const pipeNotification = yield messagePromise;
            chai_1.assert.equal(pipeNotification.channel, '/hello');
            chai_1.assert.equal(pipeNotification.message, 'hello world');
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2luZG93TWVzc2FnZVBpcGVUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiV2luZG93TWVzc2FnZVBpcGVUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwrQkFBNEI7QUFDNUIsaUNBQTRCO0FBQzVCLDJEQUFzRDtBQUt0RCxRQUFRLENBQUMsbUJBQW1CLEVBQUU7SUFHMUIsRUFBRSxDQUFDLG9CQUFvQixFQUFFOztZQUVyQixNQUFNLEdBQUcsR0FBRyxJQUFJLGFBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUV2QyxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7WUFFM0IsYUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRXJDLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxxQ0FBaUIsRUFBRSxDQUFDO1lBRWxELE1BQU0sY0FBYyxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUV4RCxNQUFNLE9BQU8sR0FBRztnQkFDWixPQUFPLEVBQUUsUUFBUTtnQkFDakIsT0FBTyxFQUFFLGFBQWE7YUFDekIsQ0FBQztZQUVGLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBRWpDLE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxjQUFjLENBQUM7WUFDOUMsYUFBTSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDakQsYUFBTSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFFMUQsQ0FBQztLQUFBLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHtKU0RPTX0gZnJvbSAnanNkb20nO1xuaW1wb3J0IHtXaW5kb3dNZXNzYWdlUGlwZX0gZnJvbSAnLi9XaW5kb3dNZXNzYWdlUGlwZSc7XG5pbXBvcnQge2Fzc2VydEpTT059IGZyb20gJy4uLy4uL3Rlc3QvQXNzZXJ0aW9ucyc7XG5cbmRlY2xhcmUgdmFyIGdsb2JhbDogYW55O1xuXG5kZXNjcmliZSgnV2luZG93TWVzc2FnZVBpcGUnLCBmdW5jdGlvbigpIHtcblxuICAgIC8vIG11c3QgYmUgZGlzYWJsZWQgZm9yIG5vdyBhcyBKU0RPTSB1c2VzIDEwMCUgY3B1IGR1cmluZyB0ZXN0cy5cbiAgICBpdChcIkJhc2ljIHBvc3QgbWVzc2FnZVwiLCBhc3luYyBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgY29uc3QgZG9tID0gbmV3IEpTRE9NKFwiPGh0bWw+PC9odG1sPlwiKTtcblxuICAgICAgICBnbG9iYWwud2luZG93ID0gZG9tLndpbmRvdztcblxuICAgICAgICBhc3NlcnQubm90RXF1YWwoZ2xvYmFsLndpbmRvdywgbnVsbCk7XG5cbiAgICAgICAgY29uc3Qgd2luZG93TWVzc2FnZVBpcGUgPSBuZXcgV2luZG93TWVzc2FnZVBpcGUoKTtcblxuICAgICAgICBjb25zdCBtZXNzYWdlUHJvbWlzZSA9IHdpbmRvd01lc3NhZ2VQaXBlLndoZW4oJy9oZWxsbycpO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAgICAgICBjaGFubmVsOiAnL2hlbGxvJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdoZWxsbyB3b3JsZCdcbiAgICAgICAgfTtcblxuICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UobWVzc2FnZSwgJyonKTtcblxuICAgICAgICBjb25zdCBwaXBlTm90aWZpY2F0aW9uID0gYXdhaXQgbWVzc2FnZVByb21pc2U7XG4gICAgICAgIGFzc2VydC5lcXVhbChwaXBlTm90aWZpY2F0aW9uLmNoYW5uZWwsICcvaGVsbG8nKTtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKHBpcGVOb3RpZmljYXRpb24ubWVzc2FnZSwgJ2hlbGxvIHdvcmxkJyk7XG5cbiAgICB9KTtcblxufSk7XG4iXX0=