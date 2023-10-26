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
const DocumentReadyStates_1 = require("./DocumentReadyStates");
const jsdom_1 = require("jsdom");
const chai_1 = require("chai");
describe('DocumentReadyStates', function () {
    describe('waitForChanger', function () {
        let jsdom = new jsdom_1.JSDOM();
        let doc = jsdom.window.document;
        it("basic via event", function () {
            return __awaiter(this, void 0, void 0, function* () {
                let mockReadyStateChanger = new DocumentReadyStates_1.MockReadyStateChanger('loading');
                let result = DocumentReadyStates_1.DocumentReadyStates.waitForChanger(doc, 'interactive', mockReadyStateChanger);
                mockReadyStateChanger.resolve();
                chai_1.assert.equal(yield result, DocumentReadyStates_1.ReadyStateResolution.EVENT);
            });
        });
        it("basic via direct", function () {
            return __awaiter(this, void 0, void 0, function* () {
                let mockReadyStateChanger = new DocumentReadyStates_1.MockReadyStateChanger('loading');
                let result = DocumentReadyStates_1.DocumentReadyStates.waitForChanger(doc, 'loading', mockReadyStateChanger);
                chai_1.assert.equal(yield result, DocumentReadyStates_1.ReadyStateResolution.DIRECT);
            });
        });
        it("to via direct", function () {
            return __awaiter(this, void 0, void 0, function* () {
                let mockReadyStateChanger = new DocumentReadyStates_1.MockReadyStateChanger('loading');
                let result = DocumentReadyStates_1.DocumentReadyStates.waitForChanger(doc, 'complete', mockReadyStateChanger);
                mockReadyStateChanger.resolve();
                mockReadyStateChanger.resolve();
                chai_1.assert.equal(yield result, DocumentReadyStates_1.ReadyStateResolution.EVENT);
            });
        });
    });
    describe('meetsRequiredState', function () {
        it("basic", function () {
            chai_1.assert.equal(DocumentReadyStates_1.DocumentReadyStates.meetsRequiredState('interactive', 'interactive'), true);
        });
        it("full", function () {
            chai_1.assert.equal(DocumentReadyStates_1.DocumentReadyStates.meetsRequiredState('loading', 'complete'), true);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdW1lbnRSZWFkeVN0YXRlc1Rlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJEb2N1bWVudFJlYWR5U3RhdGVzVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0RBQXVHO0FBQ3ZHLGlDQUE0QjtBQUM1QiwrQkFBNEI7QUFFNUIsUUFBUSxDQUFDLHFCQUFxQixFQUFFO0lBRTVCLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRTtRQUV2QixJQUFJLEtBQUssR0FBRyxJQUFJLGFBQUssRUFBRSxDQUFDO1FBRXhCLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBRWhDLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRTs7Z0JBRWxCLElBQUkscUJBQXFCLEdBQUcsSUFBSSwyQ0FBcUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFFakUsSUFBSSxNQUFNLEdBQUcseUNBQW1CLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxhQUFhLEVBQUUscUJBQXFCLENBQUMsQ0FBQztnQkFFM0YscUJBQXFCLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBRWhDLGFBQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxNQUFNLEVBQUUsMENBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFM0QsQ0FBQztTQUFBLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxrQkFBa0IsRUFBRTs7Z0JBRW5CLElBQUkscUJBQXFCLEdBQUcsSUFBSSwyQ0FBcUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFFakUsSUFBSSxNQUFNLEdBQUcseUNBQW1CLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUscUJBQXFCLENBQUMsQ0FBQztnQkFFdkYsYUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLE1BQU0sRUFBRSwwQ0FBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUU1RCxDQUFDO1NBQUEsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLGVBQWUsRUFBRTs7Z0JBRWhCLElBQUkscUJBQXFCLEdBQUcsSUFBSSwyQ0FBcUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFFakUsSUFBSSxNQUFNLEdBQUcseUNBQW1CLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxVQUFVLEVBQUUscUJBQXFCLENBQUMsQ0FBQztnQkFDeEYscUJBQXFCLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2hDLHFCQUFxQixDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUVoQyxhQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sTUFBTSxFQUFFLDBDQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRTNELENBQUM7U0FBQSxDQUFDLENBQUM7SUFFUCxDQUFDLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtRQUUzQixFQUFFLENBQUMsT0FBTyxFQUFFO1lBQ1IsYUFBTSxDQUFDLEtBQUssQ0FBQyx5Q0FBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0YsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsTUFBTSxFQUFFO1lBQ1AsYUFBTSxDQUFDLEtBQUssQ0FBQyx5Q0FBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEYsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEb2N1bWVudFJlYWR5U3RhdGVzLCBNb2NrUmVhZHlTdGF0ZUNoYW5nZXIsIFJlYWR5U3RhdGVSZXNvbHV0aW9ufSBmcm9tICcuL0RvY3VtZW50UmVhZHlTdGF0ZXMnO1xuaW1wb3J0IHtKU0RPTX0gZnJvbSAnanNkb20nO1xuaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuXG5kZXNjcmliZSgnRG9jdW1lbnRSZWFkeVN0YXRlcycsIGZ1bmN0aW9uKCkge1xuXG4gICAgZGVzY3JpYmUoJ3dhaXRGb3JDaGFuZ2VyJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgbGV0IGpzZG9tID0gbmV3IEpTRE9NKCk7XG5cbiAgICAgICAgbGV0IGRvYyA9IGpzZG9tLndpbmRvdy5kb2N1bWVudDtcblxuICAgICAgICBpdChcImJhc2ljIHZpYSBldmVudFwiLCBhc3luYyBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIGxldCBtb2NrUmVhZHlTdGF0ZUNoYW5nZXIgPSBuZXcgTW9ja1JlYWR5U3RhdGVDaGFuZ2VyKCdsb2FkaW5nJyk7XG5cbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBEb2N1bWVudFJlYWR5U3RhdGVzLndhaXRGb3JDaGFuZ2VyKGRvYywgJ2ludGVyYWN0aXZlJywgbW9ja1JlYWR5U3RhdGVDaGFuZ2VyKTtcblxuICAgICAgICAgICAgbW9ja1JlYWR5U3RhdGVDaGFuZ2VyLnJlc29sdmUoKTtcblxuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKGF3YWl0IHJlc3VsdCwgUmVhZHlTdGF0ZVJlc29sdXRpb24uRVZFTlQpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiYmFzaWMgdmlhIGRpcmVjdFwiLCBhc3luYyBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIGxldCBtb2NrUmVhZHlTdGF0ZUNoYW5nZXIgPSBuZXcgTW9ja1JlYWR5U3RhdGVDaGFuZ2VyKCdsb2FkaW5nJyk7XG5cbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBEb2N1bWVudFJlYWR5U3RhdGVzLndhaXRGb3JDaGFuZ2VyKGRvYywgJ2xvYWRpbmcnLCBtb2NrUmVhZHlTdGF0ZUNoYW5nZXIpO1xuXG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoYXdhaXQgcmVzdWx0LCBSZWFkeVN0YXRlUmVzb2x1dGlvbi5ESVJFQ1QpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwidG8gdmlhIGRpcmVjdFwiLCBhc3luYyBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIGxldCBtb2NrUmVhZHlTdGF0ZUNoYW5nZXIgPSBuZXcgTW9ja1JlYWR5U3RhdGVDaGFuZ2VyKCdsb2FkaW5nJyk7XG5cbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBEb2N1bWVudFJlYWR5U3RhdGVzLndhaXRGb3JDaGFuZ2VyKGRvYywgJ2NvbXBsZXRlJywgbW9ja1JlYWR5U3RhdGVDaGFuZ2VyKTtcbiAgICAgICAgICAgIG1vY2tSZWFkeVN0YXRlQ2hhbmdlci5yZXNvbHZlKCk7XG4gICAgICAgICAgICBtb2NrUmVhZHlTdGF0ZUNoYW5nZXIucmVzb2x2ZSgpO1xuXG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoYXdhaXQgcmVzdWx0LCBSZWFkeVN0YXRlUmVzb2x1dGlvbi5FVkVOVCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdtZWV0c1JlcXVpcmVkU3RhdGUnLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBpdChcImJhc2ljXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChEb2N1bWVudFJlYWR5U3RhdGVzLm1lZXRzUmVxdWlyZWRTdGF0ZSgnaW50ZXJhY3RpdmUnLCAnaW50ZXJhY3RpdmUnKSwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiZnVsbFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoRG9jdW1lbnRSZWFkeVN0YXRlcy5tZWV0c1JlcXVpcmVkU3RhdGUoJ2xvYWRpbmcnLCAnY29tcGxldGUnKSwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbn0pO1xuIl19