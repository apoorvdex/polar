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
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        let mainWindow = yield SpectronMain_1.SpectronMain.setup();
        mainWindow.loadURL('file://' + __dirname + '/iframe-fuzzy-text.html');
    });
}
start().catch(err => console.log(err));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBRTNELFNBQWUsS0FBSzs7UUFDaEIsSUFBSSxVQUFVLEdBQUcsTUFBTSwyQkFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRTVDLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLFNBQVMsR0FBRyx5QkFBeUIsQ0FBQyxDQUFBO0lBQ3pFLENBQUM7Q0FBQTtBQUVELEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3BlY3Ryb25NYWlufSBmcm9tIFwiLi4vLi4vLi4vanMvdGVzdC9TcGVjdHJvbk1haW5cIjtcblxuYXN5bmMgZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgbGV0IG1haW5XaW5kb3cgPSBhd2FpdCBTcGVjdHJvbk1haW4uc2V0dXAoKTtcbiAgICAvL21haW5XaW5kb3cubG9hZFVSTChcImh0dHBzOi8vd3d3LmV4YW1wbGUuY29tXCIpO1xuICAgIG1haW5XaW5kb3cubG9hZFVSTCgnZmlsZTovLycgKyBfX2Rpcm5hbWUgKyAnL2lmcmFtZS1mdXp6eS10ZXh0Lmh0bWwnKVxufVxuXG5zdGFydCgpLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiJdfQ==