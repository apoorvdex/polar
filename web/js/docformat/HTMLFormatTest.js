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
const HTMLFormat_1 = require("./HTMLFormat");
describe('HTMLFormat', function () {
    describe('currentDocFingerprint', function () {
        it("get", function () {
            const dom = new jsdom_1.JSDOM(HTML);
            global.document = dom.window.document;
            const htmlFormat = new HTMLFormat_1.HTMLFormat();
            chai_1.assert.equal(htmlFormat.currentDocFingerprint(), "0x0001");
        });
        it("set", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const dom = new jsdom_1.JSDOM(HTML);
                global.document = dom.window.document;
                const htmlFormat = new HTMLFormat_1.HTMLFormat();
                htmlFormat.setCurrentDocFingerprint("0x9999");
                chai_1.assert.equal(htmlFormat.currentDocFingerprint(), "0x9999");
            });
        });
    });
});
const HTML = `
<html>
    <head>
        <meta name="polar-fingerprint" content="0x0001">                
    </head>
</html>
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSFRNTEZvcm1hdFRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJIVE1MRm9ybWF0VGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0JBQTJCO0FBQzNCLGlDQUE0QjtBQUM1Qiw2Q0FBd0M7QUFJeEMsUUFBUSxDQUFDLFlBQVksRUFBRTtJQUVuQixRQUFRLENBQUMsdUJBQXVCLEVBQUU7UUFFOUIsRUFBRSxDQUFDLEtBQUssRUFBRTtZQUVOLE1BQU0sR0FBRyxHQUFHLElBQUksYUFBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTVCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFFdEMsTUFBTSxVQUFVLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7WUFFcEMsYUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMscUJBQXFCLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUUvRCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxLQUFLLEVBQUU7O2dCQUNOLE1BQU0sR0FBRyxHQUFHLElBQUksYUFBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUU1QixNQUFNLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO2dCQUV0QyxNQUFNLFVBQVUsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztnQkFFcEMsVUFBVSxDQUFDLHdCQUF3QixDQUFDLFFBQVEsQ0FBQyxDQUFBO2dCQUU3QyxhQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBRS9ELENBQUM7U0FBQSxDQUFDLENBQUM7SUFFUCxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxJQUFJLEdBQUc7Ozs7OztDQU1aLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSdcbmltcG9ydCB7SlNET019IGZyb20gJ2pzZG9tJztcbmltcG9ydCB7SFRNTEZvcm1hdH0gZnJvbSBcIi4vSFRNTEZvcm1hdFwiO1xuXG5kZWNsYXJlIHZhciBnbG9iYWw6IGFueTtcblxuZGVzY3JpYmUoJ0hUTUxGb3JtYXQnLCBmdW5jdGlvbigpIHtcblxuICAgIGRlc2NyaWJlKCdjdXJyZW50RG9jRmluZ2VycHJpbnQnLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBpdChcImdldFwiLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGRvbSA9IG5ldyBKU0RPTShIVE1MKTtcblxuICAgICAgICAgICAgZ2xvYmFsLmRvY3VtZW50ID0gZG9tLndpbmRvdy5kb2N1bWVudDtcblxuICAgICAgICAgICAgY29uc3QgaHRtbEZvcm1hdCA9IG5ldyBIVE1MRm9ybWF0KCk7XG5cbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChodG1sRm9ybWF0LmN1cnJlbnREb2NGaW5nZXJwcmludCgpLCBcIjB4MDAwMVwiKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBpdChcInNldFwiLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBkb20gPSBuZXcgSlNET00oSFRNTCk7XG5cbiAgICAgICAgICAgIGdsb2JhbC5kb2N1bWVudCA9IGRvbS53aW5kb3cuZG9jdW1lbnQ7XG5cbiAgICAgICAgICAgIGNvbnN0IGh0bWxGb3JtYXQgPSBuZXcgSFRNTEZvcm1hdCgpO1xuXG4gICAgICAgICAgICBodG1sRm9ybWF0LnNldEN1cnJlbnREb2NGaW5nZXJwcmludChcIjB4OTk5OVwiKVxuXG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoaHRtbEZvcm1hdC5jdXJyZW50RG9jRmluZ2VycHJpbnQoKSwgXCIweDk5OTlcIik7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxufSk7XG5cbmNvbnN0IEhUTUwgPSBgXG48aHRtbD5cbiAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgbmFtZT1cInBvbGFyLWZpbmdlcnByaW50XCIgY29udGVudD1cIjB4MDAwMVwiPiAgICAgICAgICAgICAgICBcbiAgICA8L2hlYWQ+XG48L2h0bWw+XG5gXG4iXX0=