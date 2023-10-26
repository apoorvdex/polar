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
const QueuedReactor_1 = require("./QueuedReactor");
const Assertions_1 = require("../test/Assertions");
describe('QueuedReactor', function () {
    it("With queued messages", function () {
        const reactor = new QueuedReactor_1.QueuedReactor();
        const eventName = "messages";
        chai_1.assert.notEqual(reactor.registerEvent(eventName), undefined);
        chai_1.assert.equal(reactor.getEventListeners(eventName).length, 0);
        reactor.dispatchEvent(eventName, 'hello');
        reactor.dispatchEvent(eventName, 'world');
        const messages = [];
        reactor.addEventListener(eventName, (message) => {
            messages.push(message);
        });
        const expected = ["hello", "world"];
        Assertions_1.assertJSON(messages, expected);
        Assertions_1.assertJSON(reactor.queue, {});
    });
    it("once", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const reactor = new QueuedReactor_1.QueuedReactor();
            const eventName = "messages";
            chai_1.assert.notEqual(reactor.registerEvent(eventName), undefined);
            chai_1.assert.equal(reactor.getEventListeners(eventName).length, 0);
            reactor.dispatchEvent(eventName, 'hello');
            reactor.dispatchEvent(eventName, 'world');
            const messagePromise = reactor.once(eventName);
            const message = yield messagePromise;
            chai_1.assert.equal(message, 'hello');
            chai_1.assert.equal(reactor.getEventListeners(eventName).length, 0);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVldWVkUmVhY3RvclRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJRdWV1ZWRSZWFjdG9yVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0JBQTRCO0FBQzVCLG1EQUE4QztBQUM5QyxtREFBOEM7QUFFOUMsUUFBUSxDQUFDLGVBQWUsRUFBRTtJQUV0QixFQUFFLENBQUMsc0JBQXNCLEVBQUU7UUFFdkIsTUFBTSxPQUFPLEdBQUcsSUFBSSw2QkFBYSxFQUFVLENBQUM7UUFFNUMsTUFBTSxTQUFTLEdBQUcsVUFBVSxDQUFDO1FBQzdCLGFBQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUU3RCxhQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFN0QsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDMUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFMUMsTUFBTSxRQUFRLEdBQWEsRUFBRSxDQUFDO1FBRTlCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUM1QyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxRQUFRLEdBQWEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFOUMsdUJBQVUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFJL0IsdUJBQVUsQ0FBUSxPQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRTFDLENBQUMsQ0FBQyxDQUFDO0lBR0gsRUFBRSxDQUFDLE1BQU0sRUFBRTs7WUFFUCxNQUFNLE9BQU8sR0FBRyxJQUFJLDZCQUFhLEVBQVUsQ0FBQztZQUU1QyxNQUFNLFNBQVMsR0FBRyxVQUFVLENBQUM7WUFDN0IsYUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBRTdELGFBQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUc3RCxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUMxQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUUxQyxNQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRS9DLE1BQU0sT0FBTyxHQUFHLE1BQU0sY0FBYyxDQUFDO1lBRXJDLGFBQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBRS9CLGFBQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVqRSxDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBR1AsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Fzc2VydH0gZnJvbSBcImNoYWlcIjtcbmltcG9ydCB7UXVldWVkUmVhY3Rvcn0gZnJvbSAnLi9RdWV1ZWRSZWFjdG9yJztcbmltcG9ydCB7YXNzZXJ0SlNPTn0gZnJvbSAnLi4vdGVzdC9Bc3NlcnRpb25zJztcblxuZGVzY3JpYmUoJ1F1ZXVlZFJlYWN0b3InLCBmdW5jdGlvbigpIHtcblxuICAgIGl0KFwiV2l0aCBxdWV1ZWQgbWVzc2FnZXNcIiwgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgY29uc3QgcmVhY3RvciA9IG5ldyBRdWV1ZWRSZWFjdG9yPHN0cmluZz4oKTtcblxuICAgICAgICBjb25zdCBldmVudE5hbWUgPSBcIm1lc3NhZ2VzXCI7XG4gICAgICAgIGFzc2VydC5ub3RFcXVhbChyZWFjdG9yLnJlZ2lzdGVyRXZlbnQoZXZlbnROYW1lKSwgdW5kZWZpbmVkKTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwocmVhY3Rvci5nZXRFdmVudExpc3RlbmVycyhldmVudE5hbWUpLmxlbmd0aCwgMCk7XG5cbiAgICAgICAgcmVhY3Rvci5kaXNwYXRjaEV2ZW50KGV2ZW50TmFtZSwgJ2hlbGxvJyk7XG4gICAgICAgIHJlYWN0b3IuZGlzcGF0Y2hFdmVudChldmVudE5hbWUsICd3b3JsZCcpO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgICAgIHJlYWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICBtZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBleHBlY3RlZDogc3RyaW5nW10gPSBbXCJoZWxsb1wiLCBcIndvcmxkXCJdO1xuXG4gICAgICAgIGFzc2VydEpTT04obWVzc2FnZXMsIGV4cGVjdGVkKTtcblxuICAgICAgICAvLyBub3cgbWFrZSBzdXJlIG5vdGhpbmcgaXMgc3RvcmVkIGluIHRoZSByZWFjdG9yXG5cbiAgICAgICAgYXNzZXJ0SlNPTigoPGFueT4gcmVhY3RvcikucXVldWUsIHt9KTtcblxuICAgIH0pO1xuXG5cbiAgICBpdChcIm9uY2VcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgY29uc3QgcmVhY3RvciA9IG5ldyBRdWV1ZWRSZWFjdG9yPHN0cmluZz4oKTtcblxuICAgICAgICBjb25zdCBldmVudE5hbWUgPSBcIm1lc3NhZ2VzXCI7XG4gICAgICAgIGFzc2VydC5ub3RFcXVhbChyZWFjdG9yLnJlZ2lzdGVyRXZlbnQoZXZlbnROYW1lKSwgdW5kZWZpbmVkKTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwocmVhY3Rvci5nZXRFdmVudExpc3RlbmVycyhldmVudE5hbWUpLmxlbmd0aCwgMCk7XG5cbiAgICAgICAgLy8gbm90aGluZyBpcyBsaXN0ZW5pbmcgbm93LlxuICAgICAgICByZWFjdG9yLmRpc3BhdGNoRXZlbnQoZXZlbnROYW1lLCAnaGVsbG8nKTtcbiAgICAgICAgcmVhY3Rvci5kaXNwYXRjaEV2ZW50KGV2ZW50TmFtZSwgJ3dvcmxkJyk7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZVByb21pc2UgPSByZWFjdG9yLm9uY2UoZXZlbnROYW1lKTtcblxuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgbWVzc2FnZVByb21pc2U7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKG1lc3NhZ2UsICdoZWxsbycpO1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChyZWFjdG9yLmdldEV2ZW50TGlzdGVuZXJzKGV2ZW50TmFtZSkubGVuZ3RoLCAwKTtcblxuICAgIH0pO1xuXG5cbn0pO1xuIl19