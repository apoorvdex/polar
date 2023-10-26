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
const SpectronMain_1 = require("../../../js/test/SpectronMain");
SpectronMain_1.SpectronMain.run((state) => __awaiter(this, void 0, void 0, function* () {
    state.window.loadFile(__dirname + '/app.html');
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBRTNELDJCQUFZLENBQUMsR0FBRyxDQUFDLENBQU8sS0FBSyxFQUFFLEVBQUU7SUFDN0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxDQUFDO0FBQ25ELENBQUMsQ0FBQSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NwZWN0cm9uTWFpbn0gZnJvbSAnLi4vLi4vLi4vanMvdGVzdC9TcGVjdHJvbk1haW4nO1xuXG5TcGVjdHJvbk1haW4ucnVuKGFzeW5jIChzdGF0ZSkgPT4ge1xuICAgIHN0YXRlLndpbmRvdy5sb2FkRmlsZShfX2Rpcm5hbWUgKyAnL2FwcC5odG1sJyk7XG59KTtcbiJdfQ==