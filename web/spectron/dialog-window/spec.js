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
const WebDriverTestResultReader_1 = require("../../js/test/results/reader/WebDriverTestResultReader");
const Spectron_1 = require("../../js/test/Spectron");
describe('dialog-window', function () {
    Spectron_1.Spectron.setup(__dirname);
    this.timeout(30000);
    it('create dialog window', function () {
        return __awaiter(this, void 0, void 0, function* () {
            chai_1.assert.equal(yield this.app.client.getWindowCount(), 1);
            const testResultReader = new WebDriverTestResultReader_1.WebDriverTestResultReader(this.app);
            chai_1.assert.equal(yield testResultReader.read(), true);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLCtCQUE0QjtBQUM1QixzR0FBaUc7QUFDakcscURBQWdEO0FBRWhELFFBQVEsQ0FBQyxlQUFlLEVBQUU7SUFFdEIsbUJBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVwQixFQUFFLENBQUMsc0JBQXNCLEVBQUU7O1lBRXZCLGFBQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUV4RCxNQUFNLGdCQUFnQixHQUFHLElBQUkscURBQXlCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRWpFLGFBQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUV0RCxDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQge1dlYkRyaXZlclRlc3RSZXN1bHRSZWFkZXJ9IGZyb20gJy4uLy4uL2pzL3Rlc3QvcmVzdWx0cy9yZWFkZXIvV2ViRHJpdmVyVGVzdFJlc3VsdFJlYWRlcic7XG5pbXBvcnQge1NwZWN0cm9ufSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uJztcblxuZGVzY3JpYmUoJ2RpYWxvZy13aW5kb3cnLCBmdW5jdGlvbigpIHtcblxuICAgIFNwZWN0cm9uLnNldHVwKF9fZGlybmFtZSk7XG4gICAgdGhpcy50aW1lb3V0KDMwMDAwKTtcblxuICAgIGl0KCdjcmVhdGUgZGlhbG9nIHdpbmRvdycsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChhd2FpdCB0aGlzLmFwcC5jbGllbnQuZ2V0V2luZG93Q291bnQoKSwgMSk7XG5cbiAgICAgICAgY29uc3QgdGVzdFJlc3VsdFJlYWRlciA9IG5ldyBXZWJEcml2ZXJUZXN0UmVzdWx0UmVhZGVyKHRoaXMuYXBwKTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwoYXdhaXQgdGVzdFJlc3VsdFJlYWRlci5yZWFkKCksIHRydWUpO1xuXG4gICAgfSk7XG5cbn0pO1xuIl19