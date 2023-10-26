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
const Spectron_1 = require("../../js/test/Spectron");
const SpectronSpec_1 = require("../../js/test/SpectronSpec");
describe('Test loading from a HTTP URL for the entire app', function () {
    Spectron_1.Spectron.setup(__dirname);
    this.timeout(30000);
    it('Test HTTP webapps', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield SpectronSpec_1.SpectronSpec.create(this.app).waitFor(true);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHFEQUFnRDtBQUNoRCw2REFBd0Q7QUFNeEQsUUFBUSxDQUFDLGlEQUFpRCxFQUFFO0lBRXhELG1CQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFcEIsRUFBRSxDQUFDLG1CQUFtQixFQUFFOztZQUNwQixNQUFNLDJCQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEQsQ0FBQztLQUFBLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHtTcGVjdHJvbn0gZnJvbSAnLi4vLi4vanMvdGVzdC9TcGVjdHJvbic7XG5pbXBvcnQge1NwZWN0cm9uU3BlY30gZnJvbSAnLi4vLi4vanMvdGVzdC9TcGVjdHJvblNwZWMnO1xuaW1wb3J0IHtQb2xhckRhdGFEaXJ9IGZyb20gJy4uLy4uL2pzL3Rlc3QvUG9sYXJEYXRhRGlyJztcblxuLy8gd2UgY2FuIGNoYW5nZSB0aGUgcG9sYXIgZGF0YSBkaXIgd2l0aCB0aGUgZm9sbG93aW5nXG4vLyBQb2xhckRhdGFEaXIudXNlRnJlc2hEaXJlY3RvcnkoJy5wb2xhci1wZXJzaXN0ZW50LWVycm9yLWxvZ2dlcicpO1xuXG5kZXNjcmliZSgnVGVzdCBsb2FkaW5nIGZyb20gYSBIVFRQIFVSTCBmb3IgdGhlIGVudGlyZSBhcHAnLCBmdW5jdGlvbigpIHtcblxuICAgIFNwZWN0cm9uLnNldHVwKF9fZGlybmFtZSk7XG4gICAgdGhpcy50aW1lb3V0KDMwMDAwKTtcblxuICAgIGl0KCdUZXN0IEhUVFAgd2ViYXBwcycsIGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICAgICBhd2FpdCBTcGVjdHJvblNwZWMuY3JlYXRlKHRoaXMuYXBwKS53YWl0Rm9yKHRydWUpO1xuICAgIH0pO1xuXG59KTtcblxuIl19