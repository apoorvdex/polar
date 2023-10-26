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
describe('Browser Capture', function () {
    Spectron_1.Spectron.setup(__dirname);
    this.timeout(30000);
    before(function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield PolarDataDir_1.PolarDataDir.useFreshDirectory('.polar-browser-capture');
        });
    });
    it('Test browser capturing and writing to a file.', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield SpectronSpec_1.SpectronSpec.create(this.app).waitFor(true);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFEQUFnRDtBQUNoRCw2REFBd0Q7QUFDeEQsNkRBQXdEO0FBS3hELFFBQVEsQ0FBQyxpQkFBaUIsRUFBRTtJQUV4QixtQkFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXBCLE1BQU0sQ0FBQzs7WUFDSCxNQUFNLDJCQUFZLENBQUMsaUJBQWlCLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUNuRSxDQUFDO0tBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLCtDQUErQyxFQUFFOztZQUVoRCxNQUFNLDJCQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdEQsQ0FBQztLQUFBLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTcGVjdHJvbn0gZnJvbSAnLi4vLi4vanMvdGVzdC9TcGVjdHJvbic7XG5pbXBvcnQge1NwZWN0cm9uU3BlY30gZnJvbSAnLi4vLi4vanMvdGVzdC9TcGVjdHJvblNwZWMnO1xuaW1wb3J0IHtQb2xhckRhdGFEaXJ9IGZyb20gJy4uLy4uL2pzL3Rlc3QvUG9sYXJEYXRhRGlyJztcblxuLy8gd2UgY2FuIGNoYW5nZSB0aGUgcG9sYXIgZGF0YSBkaXIgd2l0aCB0aGUgZm9sbG93aW5nXG4vLyBQb2xhckRhdGFEaXIudXNlRnJlc2hEaXJlY3RvcnkoJy5wb2xhci1wZXJzaXN0ZW50LWVycm9yLWxvZ2dlcicpO1xuXG5kZXNjcmliZSgnQnJvd3NlciBDYXB0dXJlJywgZnVuY3Rpb24oKSB7XG5cbiAgICBTcGVjdHJvbi5zZXR1cChfX2Rpcm5hbWUpO1xuICAgIHRoaXMudGltZW91dCgzMDAwMCk7XG5cbiAgICBiZWZvcmUoYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgICAgIGF3YWl0IFBvbGFyRGF0YURpci51c2VGcmVzaERpcmVjdG9yeSgnLnBvbGFyLWJyb3dzZXItY2FwdHVyZScpO1xuICAgIH0pO1xuXG4gICAgaXQoJ1Rlc3QgYnJvd3NlciBjYXB0dXJpbmcgYW5kIHdyaXRpbmcgdG8gYSBmaWxlLicsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGF3YWl0IFNwZWN0cm9uU3BlYy5jcmVhdGUodGhpcy5hcHApLndhaXRGb3IodHJ1ZSk7XG5cbiAgICB9KTtcblxufSk7XG4iXX0=