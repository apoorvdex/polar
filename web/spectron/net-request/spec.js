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
const SpectronSpec_1 = require("../../js/test/SpectronSpec");
const Spectron_1 = require("../../js/test/Spectron");
describe("net-request", function () {
    this.timeout(30000);
    Spectron_1.Spectron.setup(__dirname);
    it('Test basic request', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield SpectronSpec_1.SpectronSpec.create(this.app).waitFor(true);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDZEQUF3RDtBQUN4RCxxREFBZ0Q7QUFLaEQsUUFBUSxDQUFDLGFBQWEsRUFBRTtJQUVwQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXBCLG1CQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRTFCLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRTs7WUFFckIsTUFBTSwyQkFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXRELENBQUM7S0FBQSxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3BlY3Ryb25TcGVjfSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uU3BlYyc7XG5pbXBvcnQge1NwZWN0cm9ufSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uJztcbmltcG9ydCB7TW9ja1BIWldyaXRlcn0gZnJvbSAnLi4vLi4vanMvcGh6L01vY2tQSFpXcml0ZXInO1xuaW1wb3J0IHtGaWxlUGF0aHN9IGZyb20gJy4uLy4uL2pzL3V0aWwvRmlsZVBhdGhzJztcblxuXG5kZXNjcmliZShcIm5ldC1yZXF1ZXN0XCIsIGZ1bmN0aW9uICgpIHtcblxuICAgIHRoaXMudGltZW91dCgzMDAwMCk7XG5cbiAgICBTcGVjdHJvbi5zZXR1cChfX2Rpcm5hbWUpO1xuXG4gICAgaXQoJ1Rlc3QgYmFzaWMgcmVxdWVzdCcsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGF3YWl0IFNwZWN0cm9uU3BlYy5jcmVhdGUodGhpcy5hcHApLndhaXRGb3IodHJ1ZSk7XG5cbiAgICB9KTtcblxufSk7XG4iXX0=