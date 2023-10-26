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
const Reactor_1 = require("./Reactor");
const chai_1 = require("chai");
const Assertions_1 = require("../test/Assertions");
describe('Reactor', function () {
    it("With multiple args", function () {
        let reactor = new Reactor_1.Reactor();
        let messageEvent = {
            message: 'hello world'
        };
        let events = [];
        chai_1.assert.notEqual(reactor.registerEvent("hello"), undefined);
        reactor.addEventListener("hello", (messageEvent) => {
            events.push(messageEvent);
        });
        reactor.dispatchEvent("hello", messageEvent);
        Assertions_1.assertJSON(events, [
            {
                "message": "hello world"
            }
        ]);
    });
    it("ordering", function () {
        const reactor = new Reactor_1.Reactor();
        const sources = [];
        chai_1.assert.notEqual(reactor.registerEvent("messages"), undefined);
        reactor.addEventListener("messages", (messageEvent) => {
            console.log('first');
        });
        reactor.addEventListener("messages", (messageEvent) => {
            console.log('second');
        });
        reactor.dispatchEvent("messages", 'hello');
    });
    it("removeEventListener", function () {
        const reactor = new Reactor_1.Reactor();
        const eventName = "messages";
        chai_1.assert.notEqual(reactor.registerEvent(eventName), undefined);
        chai_1.assert.equal(reactor.getEventListeners(eventName).length, 0);
        const listener = (messageEvent) => {
            console.log('first');
        };
        reactor.addEventListener(eventName, listener);
        chai_1.assert.equal(reactor.getEventListeners(eventName).length, 1);
        chai_1.assert.equal(reactor.removeEventListener(eventName, listener), true);
        chai_1.assert.equal(reactor.getEventListeners(eventName).length, 0);
    });
    it("removeEventListener from addEventListener", function () {
        const reactor = new Reactor_1.Reactor();
        const eventName = "messages";
        reactor.registerEvent(eventName);
        const registeredEventListener = reactor.addEventListener(eventName, message => { });
        chai_1.assert.equal(reactor.getEventListeners(eventName).length, 1);
        chai_1.assert.equal(reactor.removeEventListener(eventName, registeredEventListener.eventListener), true);
        chai_1.assert.equal(reactor.getEventListeners(eventName).length, 0);
    });
    it("once", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const reactor = new Reactor_1.Reactor();
            const eventName = "messages";
            chai_1.assert.notEqual(reactor.registerEvent(eventName), undefined);
            chai_1.assert.equal(reactor.getEventListeners(eventName).length, 0);
            const messagePromise = reactor.once(eventName);
            chai_1.assert.equal(reactor.getEventListeners(eventName).length, 1);
            reactor.dispatchEvent(eventName, 'hello');
            reactor.dispatchEvent(eventName, 'world');
            const message = yield messagePromise;
            chai_1.assert.equal(message, 'hello');
            chai_1.assert.equal(reactor.getEventListeners(eventName).length, 0);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhY3RvclRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJSZWFjdG9yVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUNBQWtDO0FBQ2xDLCtCQUE0QjtBQUM1QixtREFBOEM7QUFFOUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtJQUVoQixFQUFFLENBQUMsb0JBQW9CLEVBQUU7UUFFckIsSUFBSSxPQUFPLEdBQUcsSUFBSSxpQkFBTyxFQUFnQixDQUFDO1FBRTFDLElBQUksWUFBWSxHQUFpQjtZQUM3QixPQUFPLEVBQUUsYUFBYTtTQUN6QixDQUFDO1FBRUYsSUFBSSxNQUFNLEdBQW1CLEVBQUUsQ0FBQztRQUVoQyxhQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFFM0QsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxFQUFFO1lBQy9DLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztRQUU3Qyx1QkFBVSxDQUFDLE1BQU0sRUFBRTtZQUNmO2dCQUNJLFNBQVMsRUFBRSxhQUFhO2FBQzNCO1NBQ0osQ0FBQyxDQUFDO0lBRVAsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsVUFBVSxFQUFFO1FBRVgsTUFBTSxPQUFPLEdBQUcsSUFBSSxpQkFBTyxFQUFVLENBQUM7UUFFdEMsTUFBTSxPQUFPLEdBQWEsRUFBRSxDQUFDO1FBRTdCLGFBQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUU5RCxPQUFPLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLENBQUMsWUFBWSxFQUFF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QUFDO1lBQy9DLGFBQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUU3RCxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUMxQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUUxQyxNQUFNLE9BQU8sR0FBRyxNQUFNLGNBQWMsQ0FBQztZQUVyQyxhQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztZQUUvQixhQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFakUsQ0FBQztLQUFBLENBQUMsQ0FBQztBQUdQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSZWFjdG9yfSBmcm9tICcuL1JlYWN0b3InO1xuaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHthc3NlcnRKU09OfSBmcm9tICcuLi90ZXN0L0Fzc2VydGlvbnMnO1xuXG5kZXNjcmliZSgnUmVhY3RvcicsIGZ1bmN0aW9uKCkge1xuXG4gICAgaXQoXCJXaXRoIG11bHRpcGxlIGFyZ3NcIiwgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGxldCByZWFjdG9yID0gbmV3IFJlYWN0b3I8TWVzc2FnZUV2ZW50PigpO1xuXG4gICAgICAgIGxldCBtZXNzYWdlRXZlbnQ6IE1lc3NhZ2VFdmVudCA9IHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdoZWxsbyB3b3JsZCdcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgZXZlbnRzOiBNZXNzYWdlRXZlbnRbXSA9IFtdO1xuXG4gICAgICAgIGFzc2VydC5ub3RFcXVhbChyZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJoZWxsb1wiKSwgdW5kZWZpbmVkKTtcblxuICAgICAgICByZWFjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJoZWxsb1wiLCAobWVzc2FnZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudHMucHVzaChtZXNzYWdlRXZlbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJoZWxsb1wiLCBtZXNzYWdlRXZlbnQpO1xuXG4gICAgICAgIGFzc2VydEpTT04oZXZlbnRzLCBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJtZXNzYWdlXCI6IFwiaGVsbG8gd29ybGRcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdKTtcblxuICAgIH0pO1xuXG4gICAgaXQoXCJvcmRlcmluZ1wiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBjb25zdCByZWFjdG9yID0gbmV3IFJlYWN0b3I8c3RyaW5nPigpO1xuXG4gICAgICAgIGNvbnN0IHNvdXJjZXM6IHN0cmluZ1tdID0gW107XG5cbiAgICAgICAgYXNzZXJ0Lm5vdEVxdWFsKHJlYWN0b3IucmVnaXN0ZXJFdmVudChcIm1lc3NhZ2VzXCIpLCB1bmRlZmluZWQpO1xuXG4gICAgICAgIHJlYWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VzXCIsIChtZXNzYWdlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmaXJzdCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZWFjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlc1wiLCAobWVzc2FnZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2Vjb25kJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJlYWN0b3IuZGlzcGF0Y2hFdmVudChcIm1lc3NhZ2VzXCIsICdoZWxsbycpO1xuXG4gICAgfSk7XG5cblxuICAgIGl0KFwicmVtb3ZlRXZlbnRMaXN0ZW5lclwiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBjb25zdCByZWFjdG9yID0gbmV3IFJlYWN0b3I8c3RyaW5nPigpO1xuXG4gICAgICAgIGNvbnN0IGV2ZW50TmFtZSA9IFwibWVzc2FnZXNcIjtcbiAgICAgICAgYXNzZXJ0Lm5vdEVxdWFsKHJlYWN0b3IucmVnaXN0ZXJFdmVudChldmVudE5hbWUpLCB1bmRlZmluZWQpO1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChyZWFjdG9yLmdldEV2ZW50TGlzdGVuZXJzKGV2ZW50TmFtZSkubGVuZ3RoLCAwKTtcblxuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IChtZXNzYWdlRXZlbnQ6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZpcnN0Jyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVhY3Rvci5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChyZWFjdG9yLmdldEV2ZW50TGlzdGVuZXJzKGV2ZW50TmFtZSkubGVuZ3RoLCAxKTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwocmVhY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpLCB0cnVlKTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwocmVhY3Rvci5nZXRFdmVudExpc3RlbmVycyhldmVudE5hbWUpLmxlbmd0aCwgMCk7XG5cbiAgICB9KTtcblxuXG4gICAgaXQoXCJyZW1vdmVFdmVudExpc3RlbmVyIGZyb20gYWRkRXZlbnRMaXN0ZW5lclwiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBjb25zdCByZWFjdG9yID0gbmV3IFJlYWN0b3I8c3RyaW5nPigpO1xuXG4gICAgICAgIGNvbnN0IGV2ZW50TmFtZSA9IFwibWVzc2FnZXNcIjtcbiAgICAgICAgcmVhY3Rvci5yZWdpc3RlckV2ZW50KGV2ZW50TmFtZSk7XG5cbiAgICAgICAgY29uc3QgcmVnaXN0ZXJlZEV2ZW50TGlzdGVuZXIgPSByZWFjdG9yLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBtZXNzYWdlID0+IHt9KTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwocmVhY3Rvci5nZXRFdmVudExpc3RlbmVycyhldmVudE5hbWUpLmxlbmd0aCwgMSk7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKHJlYWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHJlZ2lzdGVyZWRFdmVudExpc3RlbmVyLmV2ZW50TGlzdGVuZXIpLCB0cnVlKTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwocmVhY3Rvci5nZXRFdmVudExpc3RlbmVycyhldmVudE5hbWUpLmxlbmd0aCwgMCk7XG5cbiAgICB9KTtcblxuXG4gICAgaXQoXCJvbmNlXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGNvbnN0IHJlYWN0b3IgPSBuZXcgUmVhY3RvcjxzdHJpbmc+KCk7XG5cbiAgICAgICAgY29uc3QgZXZlbnROYW1lID0gXCJtZXNzYWdlc1wiO1xuICAgICAgICBhc3NlcnQubm90RXF1YWwocmVhY3Rvci5yZWdpc3RlckV2ZW50KGV2ZW50TmFtZSksIHVuZGVmaW5lZCk7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKHJlYWN0b3IuZ2V0RXZlbnRMaXN0ZW5lcnMoZXZlbnROYW1lKS5sZW5ndGgsIDApO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VQcm9taXNlID0gcmVhY3Rvci5vbmNlKGV2ZW50TmFtZSk7XG4gICAgICAgIGFzc2VydC5lcXVhbChyZWFjdG9yLmdldEV2ZW50TGlzdGVuZXJzKGV2ZW50TmFtZSkubGVuZ3RoLCAxKTtcblxuICAgICAgICByZWFjdG9yLmRpc3BhdGNoRXZlbnQoZXZlbnROYW1lLCAnaGVsbG8nKTtcbiAgICAgICAgcmVhY3Rvci5kaXNwYXRjaEV2ZW50KGV2ZW50TmFtZSwgJ3dvcmxkJyk7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IG1lc3NhZ2VQcm9taXNlO1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChtZXNzYWdlLCAnaGVsbG8nKTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwocmVhY3Rvci5nZXRFdmVudExpc3RlbmVycyhldmVudE5hbWUpLmxlbmd0aCwgMCk7XG5cbiAgICB9KTtcblxuXG59KTtcblxuaW50ZXJmYWNlIE1lc3NhZ2VFdmVudCB7XG4gICAgcmVhZG9ubHkgbWVzc2FnZTogc3RyaW5nO1xufVxuIl19