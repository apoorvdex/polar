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
describe('webview-discovery', function () {
    Spectron_1.Spectron.setup(__dirname);
    this.timeout(30000);
    it('Verify that we can discovery webviews', function () {
        return __awaiter(this, void 0, void 0, function* () {
            chai_1.assert.equal(yield this.app.client.getWindowCount(), 1);
            const testResultReader = new WebDriverTestResultReader_1.WebDriverTestResultReader(this.app);
            chai_1.assert.equal(yield testResultReader.read(), true);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLCtCQUE0QjtBQUM1QixzR0FBaUc7QUFDakcscURBQWdEO0FBRWhELFFBQVEsQ0FBQyxtQkFBbUIsRUFBRTtJQUUxQixtQkFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXBCLEVBQUUsQ0FBQyx1Q0FBdUMsRUFBRTs7WUFFeEMsYUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRXhELE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxxREFBeUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFakUsYUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLGdCQUFnQixDQUFDLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXRELENBQUM7S0FBQSxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcbmltcG9ydCB7V2ViRHJpdmVyVGVzdFJlc3VsdFJlYWRlcn0gZnJvbSAnLi4vLi4vanMvdGVzdC9yZXN1bHRzL3JlYWRlci9XZWJEcml2ZXJUZXN0UmVzdWx0UmVhZGVyJztcbmltcG9ydCB7U3BlY3Ryb259IGZyb20gJy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb24nO1xuXG5kZXNjcmliZSgnd2Vidmlldy1kaXNjb3ZlcnknLCBmdW5jdGlvbigpIHtcblxuICAgIFNwZWN0cm9uLnNldHVwKF9fZGlybmFtZSk7XG4gICAgdGhpcy50aW1lb3V0KDMwMDAwKTtcblxuICAgIGl0KCdWZXJpZnkgdGhhdCB3ZSBjYW4gZGlzY292ZXJ5IHdlYnZpZXdzJywgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKGF3YWl0IHRoaXMuYXBwLmNsaWVudC5nZXRXaW5kb3dDb3VudCgpLCAxKTtcblxuICAgICAgICBjb25zdCB0ZXN0UmVzdWx0UmVhZGVyID0gbmV3IFdlYkRyaXZlclRlc3RSZXN1bHRSZWFkZXIodGhpcy5hcHApO1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChhd2FpdCB0ZXN0UmVzdWx0UmVhZGVyLnJlYWQoKSwgdHJ1ZSk7XG5cbiAgICB9KTtcblxufSk7XG5cbiJdfQ==