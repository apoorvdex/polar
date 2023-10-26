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
const SpectronRenderer_1 = require("../../js/test/SpectronRenderer");
const chai_1 = require("chai");
mocha.setup('bdd');
describe('Basic Test', function () {
    it("basic", function () {
        return __awaiter(this, void 0, void 0, function* () {
            chai_1.assert.ok(1 == 1);
        });
    });
});
SpectronRenderer_1.SpectronRenderer.run((state) => __awaiter(this, void 0, void 0, function* () {
    console.log("Running within SpectronRenderer now.");
    mocha.run((nrFailures) => {
        state.testResultWriter.write(nrFailures === 0)
            .catch(err => console.error("Unable to write results: ", err));
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFFQUFnRTtBQUNoRSwrQkFBNEI7QUFFNUIsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUVuQixRQUFRLENBQUMsWUFBWSxFQUFFO0lBRW5CLEVBQUUsQ0FBQyxPQUFPLEVBQUU7O1lBQ1IsYUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdEIsQ0FBQztLQUFBLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDO0FBRUgsbUNBQWdCLENBQUMsR0FBRyxDQUFDLENBQU8sS0FBSyxFQUFFLEVBQUU7SUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0lBRXBELEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFrQixFQUFFLEVBQUU7UUFDN0IsS0FBSyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxVQUFVLEtBQUssQ0FBQyxDQUFDO2FBQ3pDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsMkJBQTJCLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NwZWN0cm9uUmVuZGVyZXJ9IGZyb20gJy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb25SZW5kZXJlcic7XG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5cbm1vY2hhLnNldHVwKCdiZGQnKTtcblxuZGVzY3JpYmUoJ0Jhc2ljIFRlc3QnLCBmdW5jdGlvbigpIHtcblxuICAgIGl0KFwiYmFzaWNcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICBhc3NlcnQub2soMSA9PSAxKTtcbiAgICB9KTtcblxufSk7XG5cblNwZWN0cm9uUmVuZGVyZXIucnVuKGFzeW5jIChzdGF0ZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiUnVubmluZyB3aXRoaW4gU3BlY3Ryb25SZW5kZXJlciBub3cuXCIpO1xuXG4gICAgbW9jaGEucnVuKChuckZhaWx1cmVzOiBudW1iZXIpID0+IHtcbiAgICAgICAgc3RhdGUudGVzdFJlc3VsdFdyaXRlci53cml0ZShuckZhaWx1cmVzID09PSAwKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKFwiVW5hYmxlIHRvIHdyaXRlIHJlc3VsdHM6IFwiLCBlcnIpKTtcbiAgICB9KTtcblxufSk7XG5cblxuIl19