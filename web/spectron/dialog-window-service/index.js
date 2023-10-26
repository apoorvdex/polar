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
const SpectronMain_1 = require("../../js/test/SpectronMain");
const DialogWindowService_1 = require("../../js/ui/dialog_window/DialogWindowService");
SpectronMain_1.SpectronMain.run((state) => __awaiter(this, void 0, void 0, function* () {
    const dialogWindowService = new DialogWindowService_1.DialogWindowService();
    yield dialogWindowService.start();
    state.window.loadURL(`file://${__dirname}/app.html`);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNkRBQXdEO0FBQ3hELHVGQUFrRjtBQUVsRiwyQkFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFNLEtBQUssRUFBQyxFQUFFO0lBRTNCLE1BQU0sbUJBQW1CLEdBQUcsSUFBSSx5Q0FBbUIsRUFBRSxDQUFDO0lBQ3RELE1BQU0sbUJBQW1CLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFbEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxTQUFTLFdBQVcsQ0FBQyxDQUFDO0FBRXpELENBQUMsQ0FBQSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NwZWN0cm9uTWFpbn0gZnJvbSAnLi4vLi4vanMvdGVzdC9TcGVjdHJvbk1haW4nO1xuaW1wb3J0IHtEaWFsb2dXaW5kb3dTZXJ2aWNlfSBmcm9tICcuLi8uLi9qcy91aS9kaWFsb2dfd2luZG93L0RpYWxvZ1dpbmRvd1NlcnZpY2UnO1xuXG5TcGVjdHJvbk1haW4ucnVuKGFzeW5jIHN0YXRlID0+IHtcblxuICAgIGNvbnN0IGRpYWxvZ1dpbmRvd1NlcnZpY2UgPSBuZXcgRGlhbG9nV2luZG93U2VydmljZSgpO1xuICAgIGF3YWl0IGRpYWxvZ1dpbmRvd1NlcnZpY2Uuc3RhcnQoKTtcblxuICAgIHN0YXRlLndpbmRvdy5sb2FkVVJMKGBmaWxlOi8vJHtfX2Rpcm5hbWV9L2FwcC5odG1sYCk7XG5cbn0pO1xuIl19