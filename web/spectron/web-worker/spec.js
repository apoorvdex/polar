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
xdescribe('web-worker', function () {
    Spectron_1.Spectron.setup(__dirname);
    this.timeout(30000);
    xit('shows an basic initial window', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield SpectronSpec_1.SpectronSpec.create(this.app).waitFor(true);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFEQUFnRDtBQUNoRCw2REFBd0Q7QUFFeEQsU0FBUyxDQUFDLFlBQVksRUFBRTtJQUVwQixtQkFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXBCLEdBQUcsQ0FBQywrQkFBK0IsRUFBRTs7WUFFakMsTUFBTSwyQkFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXRELENBQUM7S0FBQSxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3BlY3Ryb259IGZyb20gJy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb24nO1xuaW1wb3J0IHtTcGVjdHJvblNwZWN9IGZyb20gJy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb25TcGVjJztcblxueGRlc2NyaWJlKCd3ZWItd29ya2VyJywgZnVuY3Rpb24oKSB7XG5cbiAgICBTcGVjdHJvbi5zZXR1cChfX2Rpcm5hbWUpO1xuICAgIHRoaXMudGltZW91dCgzMDAwMCk7XG5cbiAgICB4aXQoJ3Nob3dzIGFuIGJhc2ljIGluaXRpYWwgd2luZG93JywgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgYXdhaXQgU3BlY3Ryb25TcGVjLmNyZWF0ZSh0aGlzLmFwcCkud2FpdEZvcih0cnVlKTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==