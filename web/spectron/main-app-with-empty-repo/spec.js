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
describe('main-app-with-empty-repo', function () {
    return __awaiter(this, void 0, void 0, function* () {
        Spectron_1.Spectron.setup(__dirname);
        this.timeout(30000);
        before(function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield PolarDataDir_1.PolarDataDir.useFreshDirectory('.polar-main-app-with-empty-repo');
            });
        });
        it('create the repository view', function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield SpectronSpec_1.SpectronSpec.create(this.app).waitFor(true);
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFEQUFnRDtBQUNoRCw2REFBd0Q7QUFDeEQsNkRBQXdEO0FBR3hELFFBQVEsQ0FBQywwQkFBMEIsRUFBRTs7UUFFakMsbUJBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVwQixNQUFNLENBQUM7O2dCQUNILE1BQU0sMkJBQVksQ0FBQyxpQkFBaUIsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1lBQzVFLENBQUM7U0FBQSxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsNEJBQTRCLEVBQUU7O2dCQUU3QixNQUFNLDJCQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFdEQsQ0FBQztTQUFBLENBQUMsQ0FBQztJQUVQLENBQUM7Q0FBQSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NwZWN0cm9ufSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uJztcbmltcG9ydCB7U3BlY3Ryb25TcGVjfSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uU3BlYyc7XG5pbXBvcnQge1BvbGFyRGF0YURpcn0gZnJvbSAnLi4vLi4vanMvdGVzdC9Qb2xhckRhdGFEaXInO1xuXG5cbmRlc2NyaWJlKCdtYWluLWFwcC13aXRoLWVtcHR5LXJlcG8nLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgIFNwZWN0cm9uLnNldHVwKF9fZGlybmFtZSk7XG4gICAgdGhpcy50aW1lb3V0KDMwMDAwKTtcblxuICAgIGJlZm9yZShhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICAgYXdhaXQgUG9sYXJEYXRhRGlyLnVzZUZyZXNoRGlyZWN0b3J5KCcucG9sYXItbWFpbi1hcHAtd2l0aC1lbXB0eS1yZXBvJyk7XG4gICAgfSk7XG5cbiAgICBpdCgnY3JlYXRlIHRoZSByZXBvc2l0b3J5IHZpZXcnLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICBhd2FpdCBTcGVjdHJvblNwZWMuY3JlYXRlKHRoaXMuYXBwKS53YWl0Rm9yKHRydWUpO1xuXG4gICAgfSk7XG5cbn0pO1xuIl19