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
const PolarDataDir_1 = require("../../js/test/PolarDataDir");
describe('main-app', function () {
    Spectron_1.Spectron.setup(__dirname);
    this.timeout(20000);
    before(function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield PolarDataDir_1.PolarDataDir.useFreshDirectory('.polar-main-app');
        });
    });
    it('create the repository view', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield SpectronSpec_1.SpectronSpec.create(this.app).waitFor(true);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFEQUFnRDtBQUNoRCw2REFBd0Q7QUFDeEQsNkRBQXdEO0FBRXhELFFBQVEsQ0FBQyxVQUFVLEVBQUU7SUFFakIsbUJBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVwQixNQUFNLENBQUM7O1lBQ0gsTUFBTSwyQkFBWSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDNUQsQ0FBQztLQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw0QkFBNEIsRUFBRTs7WUFHN0IsTUFBTSwyQkFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXRELENBQUM7S0FBQSxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3BlY3Ryb259IGZyb20gJy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb24nO1xuaW1wb3J0IHtTcGVjdHJvblNwZWN9IGZyb20gJy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb25TcGVjJztcbmltcG9ydCB7UG9sYXJEYXRhRGlyfSBmcm9tICcuLi8uLi9qcy90ZXN0L1BvbGFyRGF0YURpcic7XG5cbmRlc2NyaWJlKCdtYWluLWFwcCcsIGZ1bmN0aW9uKCkge1xuXG4gICAgU3BlY3Ryb24uc2V0dXAoX19kaXJuYW1lKTtcbiAgICB0aGlzLnRpbWVvdXQoMjAwMDApO1xuXG4gICAgYmVmb3JlKGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICAgICBhd2FpdCBQb2xhckRhdGFEaXIudXNlRnJlc2hEaXJlY3RvcnkoJy5wb2xhci1tYWluLWFwcCcpO1xuICAgIH0pO1xuXG4gICAgaXQoJ2NyZWF0ZSB0aGUgcmVwb3NpdG9yeSB2aWV3JywgYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIGF3YWl0IFBvbGFyRGF0YURpci51c2VGcmVzaERpcmVjdG9yeSgnLnBvbGFyLW1haW4tYXBwJyk7XG5cbiAgICAgICAgYXdhaXQgU3BlY3Ryb25TcGVjLmNyZWF0ZSh0aGlzLmFwcCkud2FpdEZvcih0cnVlKTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==