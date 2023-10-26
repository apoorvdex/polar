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
const SpectronMain2_1 = require("../../../js/test/SpectronMain2");
const PingService_1 = require("../../../js/ipc/handler/ping/PingService");
const IPCEngines_1 = require("../../../js/ipc/handler/IPCEngines");
SpectronMain2_1.SpectronMain2.create().run((state) => __awaiter(this, void 0, void 0, function* () {
    yield new PingService_1.PingService(IPCEngines_1.IPCEngines.mainProcess()).start();
    console.log("Ping service started.  Going to load the app now.");
    state.window.loadFile(__dirname + '/app.html');
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsa0VBQTZEO0FBQzdELDBFQUFxRTtBQUNyRSxtRUFBOEQ7QUFFOUQsNkJBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBTSxLQUFLLEVBQUMsRUFBRTtJQUVyQyxNQUFNLElBQUkseUJBQVcsQ0FBQyx1QkFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtREFBbUQsQ0FBQyxDQUFBO0lBRWhFLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsQ0FBQztBQUVuRCxDQUFDLENBQUEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTcGVjdHJvbk1haW4yfSBmcm9tICcuLi8uLi8uLi9qcy90ZXN0L1NwZWN0cm9uTWFpbjInO1xuaW1wb3J0IHtQaW5nU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vanMvaXBjL2hhbmRsZXIvcGluZy9QaW5nU2VydmljZSc7XG5pbXBvcnQge0lQQ0VuZ2luZXN9IGZyb20gJy4uLy4uLy4uL2pzL2lwYy9oYW5kbGVyL0lQQ0VuZ2luZXMnO1xuXG5TcGVjdHJvbk1haW4yLmNyZWF0ZSgpLnJ1bihhc3luYyBzdGF0ZSA9PiB7XG5cbiAgICBhd2FpdCBuZXcgUGluZ1NlcnZpY2UoSVBDRW5naW5lcy5tYWluUHJvY2VzcygpKS5zdGFydCgpO1xuXG4gICAgY29uc29sZS5sb2coXCJQaW5nIHNlcnZpY2Ugc3RhcnRlZC4gIEdvaW5nIHRvIGxvYWQgdGhlIGFwcCBub3cuXCIpXG5cbiAgICBzdGF0ZS53aW5kb3cubG9hZEZpbGUoX19kaXJuYW1lICsgJy9hcHAuaHRtbCcpO1xuXG59KTtcbiJdfQ==