"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const HTMLSanitizer_1 = require("./HTMLSanitizer");
describe('HTMLSanitizer', function () {
    it('basic', function () {
        chai_1.assert.equal(HTMLSanitizer_1.HTMLSanitizer.sanitize('<p class="foo">'), '<p></p>');
    });
    it('with minimal CSS', function () {
        chai_1.assert.equal(HTMLSanitizer_1.HTMLSanitizer.sanitize('<p style="font-weight: bold">'), '<p style="font-weight:bold;"></p>');
    });
    it('div', function () {
        chai_1.assert.equal(HTMLSanitizer_1.HTMLSanitizer.sanitize('<div style="font-weight: bold">'), '<div style="font-weight:bold;"></div>');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSFRNTFNhbml0aXplclRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJIVE1MU2FuaXRpemVyVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE0QjtBQUM1QixtREFBOEM7QUFFOUMsUUFBUSxDQUFDLGVBQWUsRUFBRTtJQUV0QixFQUFFLENBQUMsT0FBTyxFQUFFO1FBRVIsYUFBTSxDQUFDLEtBQUssQ0FBQyw2QkFBYSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBRXZFLENBQUMsQ0FBQyxDQUFDO0lBR0gsRUFBRSxDQUFDLGtCQUFrQixFQUFFO1FBR25CLGFBQU0sQ0FBQyxLQUFLLENBQUMsNkJBQWEsQ0FBQyxRQUFRLENBQUMsK0JBQStCLENBQUMsRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO0lBRS9HLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLEtBQUssRUFBRTtRQUdOLGFBQU0sQ0FBQyxLQUFLLENBQUMsNkJBQWEsQ0FBQyxRQUFRLENBQUMsaUNBQWlDLENBQUMsRUFBRSx1Q0FBdUMsQ0FBQyxDQUFDO0lBRXJILENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQge0hUTUxTYW5pdGl6ZXJ9IGZyb20gJy4vSFRNTFNhbml0aXplcic7XG5cbmRlc2NyaWJlKCdIVE1MU2FuaXRpemVyJywgZnVuY3Rpb24gKCkge1xuXG4gICAgaXQoJ2Jhc2ljJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChIVE1MU2FuaXRpemVyLnNhbml0aXplKCc8cCBjbGFzcz1cImZvb1wiPicpLCAnPHA+PC9wPicpO1xuXG4gICAgfSk7XG5cblxuICAgIGl0KCd3aXRoIG1pbmltYWwgQ1NTJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIC8vIFRPRE86IHdlIHByb2JhYmx5IHdhbnQgdGhpcyB0byB3b3JrXG4gICAgICAgIGFzc2VydC5lcXVhbChIVE1MU2FuaXRpemVyLnNhbml0aXplKCc8cCBzdHlsZT1cImZvbnQtd2VpZ2h0OiBib2xkXCI+JyksICc8cCBzdHlsZT1cImZvbnQtd2VpZ2h0OmJvbGQ7XCI+PC9wPicpO1xuXG4gICAgfSk7XG5cbiAgICBpdCgnZGl2JywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIC8vIFRPRE86IHdlIHByb2JhYmx5IHdhbnQgdGhpcyB0byB3b3JrXG4gICAgICAgIGFzc2VydC5lcXVhbChIVE1MU2FuaXRpemVyLnNhbml0aXplKCc8ZGl2IHN0eWxlPVwiZm9udC13ZWlnaHQ6IGJvbGRcIj4nKSwgJzxkaXYgc3R5bGU9XCJmb250LXdlaWdodDpib2xkO1wiPjwvZGl2PicpO1xuXG4gICAgfSk7XG5cbn0pO1xuIl19