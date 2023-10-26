"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Attributes_1 = require("./Attributes");
const { JSDOM } = require("jsdom");
describe('Attributes', function () {
    describe('parse', function () {
        it("get", function () {
            let dom = new JSDOM("<body><div data-foo='bar' data-cat-dog='dog' data-one-two-three-four='dog'></div></body>");
            console.log(dom.window.document.body.firstChild);
            let dataAttributeMap = Attributes_1.Attributes.dataToMap(dom.window.document.body.firstChild);
            chai_1.assert.deepEqual(dataAttributeMap, {
                foo: 'bar',
                catDog: 'dog',
                oneTwoThreeFour: 'dog'
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXR0cmlidXRlc1Rlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBdHRyaWJ1dGVzVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE0QjtBQUM1Qiw2Q0FBd0M7QUFDeEMsTUFBTSxFQUFDLEtBQUssRUFBQyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUVqQyxRQUFRLENBQUMsWUFBWSxFQUFFO0lBRW5CLFFBQVEsQ0FBQyxPQUFPLEVBQUU7UUFHZCxFQUFFLENBQUMsS0FBSyxFQUFFO1lBRU4sSUFBSSxHQUFHLEdBQUcsSUFBSSxLQUFLLENBQUMsMEZBQTBGLENBQUMsQ0FBQztZQUVoSCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUVqRCxJQUFJLGdCQUFnQixHQUFHLHVCQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUVqRixhQUFNLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFO2dCQUMvQixHQUFHLEVBQUUsS0FBSztnQkFDVixNQUFNLEVBQUUsS0FBSztnQkFDYixlQUFlLEVBQUUsS0FBSzthQUN6QixDQUFDLENBQUM7UUFFUCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQge0F0dHJpYnV0ZXN9IGZyb20gJy4vQXR0cmlidXRlcyc7XG5jb25zdCB7SlNET019ID0gcmVxdWlyZShcImpzZG9tXCIpO1xuXG5kZXNjcmliZSgnQXR0cmlidXRlcycsIGZ1bmN0aW9uKCkge1xuXG4gICAgZGVzY3JpYmUoJ3BhcnNlJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgLy8gbXVzdCBiZSBkaXNhYmxlZCBmb3Igbm93IGFzIEpTRE9NIHVzZXMgMTAwJSBjcHUgZHVyaW5nIHRlc3RzLlxuICAgICAgICBpdChcImdldFwiLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIGxldCBkb20gPSBuZXcgSlNET00oXCI8Ym9keT48ZGl2IGRhdGEtZm9vPSdiYXInIGRhdGEtY2F0LWRvZz0nZG9nJyBkYXRhLW9uZS10d28tdGhyZWUtZm91cj0nZG9nJz48L2Rpdj48L2JvZHk+XCIpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkb20ud2luZG93LmRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG5cbiAgICAgICAgICAgIGxldCBkYXRhQXR0cmlidXRlTWFwID0gQXR0cmlidXRlcy5kYXRhVG9NYXAoZG9tLndpbmRvdy5kb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuXG4gICAgICAgICAgICBhc3NlcnQuZGVlcEVxdWFsKGRhdGFBdHRyaWJ1dGVNYXAsIHtcbiAgICAgICAgICAgICAgICBmb286ICdiYXInLFxuICAgICAgICAgICAgICAgIGNhdERvZzogJ2RvZycsXG4gICAgICAgICAgICAgICAgb25lVHdvVGhyZWVGb3VyOiAnZG9nJ1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxufSk7XG4iXX0=