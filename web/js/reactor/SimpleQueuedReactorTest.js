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
const SimpleReactor_1 = require("./SimpleReactor");
describe('SimpleQueuedReactor', function () {
    it("With queued messages", function () {
        const reactor = new SimpleReactor_1.SimpleReactor(new QueuedReactor_1.QueuedReactor());
        chai_1.assert.equal(reactor.getEventListeners().length, 0);
        reactor.dispatchEvent('hello');
        reactor.dispatchEvent('world');
        const messages = [];
        reactor.addEventListener((message) => {
            messages.push(message);
        });
        const expected = ["hello", "world"];
        Assertions_1.assertJSON(messages, expected);
        Assertions_1.assertJSON(reactor.delegate.queue, {});
    });
    it("once", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const queuedReactor = new QueuedReactor_1.QueuedReactor();
            const reactor = new SimpleReactor_1.SimpleReactor(queuedReactor);
            chai_1.assert.equal(reactor.delegate, queuedReactor);
            chai_1.assert.equal(reactor.getEventListeners().length, 0);
            reactor.dispatchEvent('hello');
            reactor.dispatchEvent('world');
            const messagePromise = reactor.once();
            const message = yield messagePromise;
            chai_1.assert.equal(message, 'hello');
            chai_1.assert.equal(reactor.getEventListeners().length, 0);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2ltcGxlUXVldWVkUmVhY3RvclRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTaW1wbGVRdWV1ZWRSZWFjdG9yVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0JBQTRCO0FBQzVCLG1EQUE4QztBQUM5QyxtREFBOEM7QUFDOUMsbURBQThDO0FBRTlDLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRTtJQUU1QixFQUFFLENBQUMsc0JBQXNCLEVBQUU7UUFFdkIsTUFBTSxPQUFPLEdBQUcsSUFBSSw2QkFBYSxDQUFTLElBQUksNkJBQWEsRUFBRSxDQUFDLENBQUM7UUFFL0QsYUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFcEQsT0FBTyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQixPQUFPLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRS9CLE1BQU0sUUFBUSxHQUFhLEVBQUUsQ0FBQztRQUU5QixPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNqQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxRQUFRLEdBQWEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFOUMsdUJBQVUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFJL0IsdUJBQVUsQ0FBUSxPQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVuRCxDQUFDLENBQUMsQ0FBQztJQUdILEVBQUUsQ0FBQyxNQUFNLEVBQUU7O1lBRVAsTUFBTSxhQUFhLEdBQUcsSUFBSSw2QkFBYSxFQUFVLENBQUM7WUFDbEQsTUFBTSxPQUFPLEdBQUcsSUFBSSw2QkFBYSxDQUFTLGFBQWEsQ0FBQyxDQUFDO1lBRXpELGFBQU0sQ0FBQyxLQUFLLENBQVEsT0FBUSxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUMsQ0FBQztZQUV0RCxhQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUVwRCxPQUFPLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQy9CLE9BQU8sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFL0IsTUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBRXRDLE1BQU0sT0FBTyxHQUFHLE1BQU0sY0FBYyxDQUFDO1lBRXJDLGFBQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBRS9CLGFBQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXhELENBQUM7S0FBQSxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXNzZXJ0fSBmcm9tIFwiY2hhaVwiO1xuaW1wb3J0IHtRdWV1ZWRSZWFjdG9yfSBmcm9tICcuL1F1ZXVlZFJlYWN0b3InO1xuaW1wb3J0IHthc3NlcnRKU09OfSBmcm9tICcuLi90ZXN0L0Fzc2VydGlvbnMnO1xuaW1wb3J0IHtTaW1wbGVSZWFjdG9yfSBmcm9tICcuL1NpbXBsZVJlYWN0b3InO1xuXG5kZXNjcmliZSgnU2ltcGxlUXVldWVkUmVhY3RvcicsIGZ1bmN0aW9uKCkge1xuXG4gICAgaXQoXCJXaXRoIHF1ZXVlZCBtZXNzYWdlc1wiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBjb25zdCByZWFjdG9yID0gbmV3IFNpbXBsZVJlYWN0b3I8c3RyaW5nPihuZXcgUXVldWVkUmVhY3RvcigpKTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwocmVhY3Rvci5nZXRFdmVudExpc3RlbmVycygpLmxlbmd0aCwgMCk7XG5cbiAgICAgICAgcmVhY3Rvci5kaXNwYXRjaEV2ZW50KCdoZWxsbycpO1xuICAgICAgICByZWFjdG9yLmRpc3BhdGNoRXZlbnQoJ3dvcmxkJyk7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZXM6IHN0cmluZ1tdID0gW107XG5cbiAgICAgICAgcmVhY3Rvci5hZGRFdmVudExpc3RlbmVyKChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICBtZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBleHBlY3RlZDogc3RyaW5nW10gPSBbXCJoZWxsb1wiLCBcIndvcmxkXCJdO1xuXG4gICAgICAgIGFzc2VydEpTT04obWVzc2FnZXMsIGV4cGVjdGVkKTtcblxuICAgICAgICAvLyBub3cgbWFrZSBzdXJlIG5vdGhpbmcgaXMgc3RvcmVkIGluIHRoZSByZWFjdG9yXG5cbiAgICAgICAgYXNzZXJ0SlNPTigoPGFueT4gcmVhY3RvcikuZGVsZWdhdGUucXVldWUsIHt9KTtcblxuICAgIH0pO1xuXG5cbiAgICBpdChcIm9uY2VcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgY29uc3QgcXVldWVkUmVhY3RvciA9IG5ldyBRdWV1ZWRSZWFjdG9yPHN0cmluZz4oKTtcbiAgICAgICAgY29uc3QgcmVhY3RvciA9IG5ldyBTaW1wbGVSZWFjdG9yPHN0cmluZz4ocXVldWVkUmVhY3Rvcik7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKCg8YW55PiByZWFjdG9yKS5kZWxlZ2F0ZSwgcXVldWVkUmVhY3Rvcik7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKHJlYWN0b3IuZ2V0RXZlbnRMaXN0ZW5lcnMoKS5sZW5ndGgsIDApO1xuXG4gICAgICAgIHJlYWN0b3IuZGlzcGF0Y2hFdmVudCgnaGVsbG8nKTtcbiAgICAgICAgcmVhY3Rvci5kaXNwYXRjaEV2ZW50KCd3b3JsZCcpO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VQcm9taXNlID0gcmVhY3Rvci5vbmNlKCk7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IG1lc3NhZ2VQcm9taXNlO1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChtZXNzYWdlLCAnaGVsbG8nKTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwocmVhY3Rvci5nZXRFdmVudExpc3RlbmVycygpLmxlbmd0aCwgMCk7XG5cbiAgICB9KTtcblxufSk7XG4iXX0=