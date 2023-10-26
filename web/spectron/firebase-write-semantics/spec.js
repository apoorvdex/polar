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
xdescribe('Firebase Datastore', function () {
    Spectron_1.Spectron.setup(__dirname);
    this.timeout(30000);
    xit('basic tests', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield SpectronSpec_1.SpectronSpec.create(this.app).waitFor(true);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHFEQUFnRDtBQUNoRCw2REFBd0Q7QUFNeEQsU0FBUyxDQUFDLG9CQUFvQixFQUFFO0lBRTVCLG1CQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFcEIsR0FBRyxDQUFDLGFBQWEsRUFBRTs7WUFFZixNQUFNLDJCQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdEQsQ0FBQztLQUFBLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHtTcGVjdHJvbn0gZnJvbSAnLi4vLi4vanMvdGVzdC9TcGVjdHJvbic7XG5pbXBvcnQge1NwZWN0cm9uU3BlY30gZnJvbSAnLi4vLi4vanMvdGVzdC9TcGVjdHJvblNwZWMnO1xuaW1wb3J0IHtQb2xhckRhdGFEaXJ9IGZyb20gJy4uLy4uL2pzL3Rlc3QvUG9sYXJEYXRhRGlyJztcblxuLy8gd2UgY2FuIGNoYW5nZSB0aGUgcG9sYXIgZGF0YSBkaXIgd2l0aCB0aGUgZm9sbG93aW5nXG4vLyBQb2xhckRhdGFEaXIudXNlRnJlc2hEaXJlY3RvcnkoJy5wb2xhci1wZXJzaXN0ZW50LWVycm9yLWxvZ2dlcicpO1xuXG54ZGVzY3JpYmUoJ0ZpcmViYXNlIERhdGFzdG9yZScsIGZ1bmN0aW9uKCkge1xuXG4gICAgU3BlY3Ryb24uc2V0dXAoX19kaXJuYW1lKTtcbiAgICB0aGlzLnRpbWVvdXQoMzAwMDApO1xuXG4gICAgeGl0KCdiYXNpYyB0ZXN0cycsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGF3YWl0IFNwZWN0cm9uU3BlYy5jcmVhdGUodGhpcy5hcHApLndhaXRGb3IodHJ1ZSk7XG5cbiAgICB9KTtcblxufSk7XG5cblxuIl19