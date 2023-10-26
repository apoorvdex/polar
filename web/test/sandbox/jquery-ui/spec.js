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
const WebDriverTestResultReader_1 = require("../../../js/test/results/reader/WebDriverTestResultReader");
const Spectron_1 = require("../../../js/test/Spectron");
const assert = require('assert');
const { Functions } = require("../../../js/util/Functions");
describe('jquery-ui', function () {
    Spectron_1.Spectron.setup(__dirname);
    this.timeout(50000);
    it('shows an basic initial window', function () {
        return __awaiter(this, void 0, void 0, function* () {
            assert.equal(yield this.app.client.getWindowCount(), 1);
            let testResultReader = new WebDriverTestResultReader_1.WebDriverTestResultReader(this.app);
            assert.equal(yield testResultReader.read(), true);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHlHQUFvRztBQUNwRyx3REFBbUQ7QUFHbkQsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLE1BQU0sRUFBQyxTQUFTLEVBQUMsR0FBRyxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQztBQUUxRCxRQUFRLENBQUMsV0FBVyxFQUFFO0lBRWxCLG1CQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFcEIsRUFBRSxDQUFDLCtCQUErQixFQUFFOztZQUVoQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFeEQsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLHFEQUF5QixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMvRCxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFdEQsQ0FBQztLQUFBLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtXZWJEcml2ZXJUZXN0UmVzdWx0UmVhZGVyfSBmcm9tICcuLi8uLi8uLi9qcy90ZXN0L3Jlc3VsdHMvcmVhZGVyL1dlYkRyaXZlclRlc3RSZXN1bHRSZWFkZXInO1xuaW1wb3J0IHtTcGVjdHJvbn0gZnJvbSAnLi4vLi4vLi4vanMvdGVzdC9TcGVjdHJvbic7XG5pbXBvcnQge2Fzc2VydEpTT059IGZyb20gJy4uLy4uLy4uL2pzL3Rlc3QvQXNzZXJ0aW9ucyc7XG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoJ2Fzc2VydCcpO1xuY29uc3Qge0Z1bmN0aW9uc30gPSByZXF1aXJlKFwiLi4vLi4vLi4vanMvdXRpbC9GdW5jdGlvbnNcIik7XG5cbmRlc2NyaWJlKCdqcXVlcnktdWknLCBmdW5jdGlvbigpIHtcblxuICAgIFNwZWN0cm9uLnNldHVwKF9fZGlybmFtZSk7XG4gICAgdGhpcy50aW1lb3V0KDUwMDAwKTtcblxuICAgIGl0KCdzaG93cyBhbiBiYXNpYyBpbml0aWFsIHdpbmRvdycsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChhd2FpdCB0aGlzLmFwcC5jbGllbnQuZ2V0V2luZG93Q291bnQoKSwgMSk7XG5cbiAgICAgICAgbGV0IHRlc3RSZXN1bHRSZWFkZXIgPSBuZXcgV2ViRHJpdmVyVGVzdFJlc3VsdFJlYWRlcih0aGlzLmFwcCk7XG4gICAgICAgIGFzc2VydC5lcXVhbChhd2FpdCB0ZXN0UmVzdWx0UmVhZGVyLnJlYWQoKSwgdHJ1ZSk7XG5cbiAgICB9KTtcblxufSk7XG4iXX0=