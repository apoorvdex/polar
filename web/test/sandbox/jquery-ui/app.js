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
const SpectronRenderer_1 = require("../../../js/test/SpectronRenderer");
const chai_1 = require("chai");
const RendererTestResultWriter_1 = require("../../../js/test/results/writer/RendererTestResultWriter");
const Dialog_1 = require("../../../js/ui/dialog/Dialog");
SpectronRenderer_1.SpectronRenderer.run(() => __awaiter(this, void 0, void 0, function* () {
    console.log("Running within SpectronRenderer now.");
    chai_1.assert.notEqual($("h1"), null);
    let testResultWriter = new RendererTestResultWriter_1.RendererTestResultWriter();
    new Dialog_1.Dialog("#myDialog").show();
    chai_1.assert.notEqual($(".ui-dialog"), null);
    testResultWriter.write(true);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx3RUFBbUU7QUFDbkUsK0JBQTRCO0FBQzVCLHVHQUFrRztBQUNsRyx5REFBb0Q7QUFFcEQsbUNBQWdCLENBQUMsR0FBRyxDQUFDLEdBQVMsRUFBRTtJQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7SUFFcEQsYUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFL0IsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLG1EQUF3QixFQUFFLENBQUM7SUFFdEQsSUFBSSxlQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFHL0IsYUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFdkMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRWpDLENBQUMsQ0FBQSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NwZWN0cm9uUmVuZGVyZXJ9IGZyb20gJy4uLy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb25SZW5kZXJlcic7XG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQge1JlbmRlcmVyVGVzdFJlc3VsdFdyaXRlcn0gZnJvbSAnLi4vLi4vLi4vanMvdGVzdC9yZXN1bHRzL3dyaXRlci9SZW5kZXJlclRlc3RSZXN1bHRXcml0ZXInO1xuaW1wb3J0IHtEaWFsb2d9IGZyb20gJy4uLy4uLy4uL2pzL3VpL2RpYWxvZy9EaWFsb2cnO1xuXG5TcGVjdHJvblJlbmRlcmVyLnJ1bihhc3luYyAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJSdW5uaW5nIHdpdGhpbiBTcGVjdHJvblJlbmRlcmVyIG5vdy5cIik7XG5cbiAgICBhc3NlcnQubm90RXF1YWwoJChcImgxXCIpLCBudWxsKTtcblxuICAgIGxldCB0ZXN0UmVzdWx0V3JpdGVyID0gbmV3IFJlbmRlcmVyVGVzdFJlc3VsdFdyaXRlcigpO1xuXG4gICAgbmV3IERpYWxvZyhcIiNteURpYWxvZ1wiKS5zaG93KCk7XG5cbiAgICAvLyBub3cgbWFrZSBzdXJlIHRoZSBET00gaXMgdXBkYXRlZFxuICAgIGFzc2VydC5ub3RFcXVhbCgkKFwiLnVpLWRpYWxvZ1wiKSwgbnVsbCk7XG5cbiAgICB0ZXN0UmVzdWx0V3JpdGVyLndyaXRlKHRydWUpO1xuXG59KTtcbiJdfQ==