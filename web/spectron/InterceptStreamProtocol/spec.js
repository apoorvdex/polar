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
describe("InterceptStreamProtocol", function () {
    this.timeout(30000);
    Spectron_1.Spectron.setup(__dirname);
    it('Test basic load', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield SpectronSpec_1.SpectronSpec.create(this.app).waitFor(true);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDZEQUF3RDtBQUN4RCxxREFBZ0Q7QUFLaEQsUUFBUSxDQUFDLHlCQUF5QixFQUFFO0lBRWhDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFcEIsbUJBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFMUIsRUFBRSxDQUFDLGlCQUFpQixFQUFFOztZQUVsQixNQUFNLDJCQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdEQsQ0FBQztLQUFBLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTcGVjdHJvblNwZWN9IGZyb20gJy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb25TcGVjJztcbmltcG9ydCB7U3BlY3Ryb259IGZyb20gJy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb24nO1xuaW1wb3J0IHtNb2NrUEhaV3JpdGVyfSBmcm9tICcuLi8uLi9qcy9waHovTW9ja1BIWldyaXRlcic7XG5pbXBvcnQge0ZpbGVQYXRoc30gZnJvbSAnLi4vLi4vanMvdXRpbC9GaWxlUGF0aHMnO1xuXG5cbmRlc2NyaWJlKFwiSW50ZXJjZXB0U3RyZWFtUHJvdG9jb2xcIiwgZnVuY3Rpb24gKCkge1xuXG4gICAgdGhpcy50aW1lb3V0KDMwMDAwKTtcblxuICAgIFNwZWN0cm9uLnNldHVwKF9fZGlybmFtZSk7XG5cbiAgICBpdCgnVGVzdCBiYXNpYyBsb2FkJywgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgYXdhaXQgU3BlY3Ryb25TcGVjLmNyZWF0ZSh0aGlzLmFwcCkud2FpdEZvcih0cnVlKTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==