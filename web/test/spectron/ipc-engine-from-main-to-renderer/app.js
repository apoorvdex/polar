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
const PingService_1 = require("../../../js/ipc/handler/ping/PingService");
const IPCEngines_1 = require("../../../js/ipc/handler/IPCEngines");
SpectronRenderer_1.SpectronRenderer.run(() => __awaiter(this, void 0, void 0, function* () {
    yield new PingService_1.PingService(IPCEngines_1.IPCEngines.rendererProcess()).start();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx3RUFBbUU7QUFDbkUsMEVBQXFFO0FBQ3JFLG1FQUE4RDtBQUU5RCxtQ0FBZ0IsQ0FBQyxHQUFHLENBQUMsR0FBUyxFQUFFO0lBRTVCLE1BQU0sSUFBSSx5QkFBVyxDQUFDLHVCQUFVLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUVoRSxDQUFDLENBQUEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTcGVjdHJvblJlbmRlcmVyfSBmcm9tICcuLi8uLi8uLi9qcy90ZXN0L1NwZWN0cm9uUmVuZGVyZXInO1xuaW1wb3J0IHtQaW5nU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vanMvaXBjL2hhbmRsZXIvcGluZy9QaW5nU2VydmljZSc7XG5pbXBvcnQge0lQQ0VuZ2luZXN9IGZyb20gJy4uLy4uLy4uL2pzL2lwYy9oYW5kbGVyL0lQQ0VuZ2luZXMnO1xuXG5TcGVjdHJvblJlbmRlcmVyLnJ1bihhc3luYyAoKSA9PiB7XG5cbiAgICBhd2FpdCBuZXcgUGluZ1NlcnZpY2UoSVBDRW5naW5lcy5yZW5kZXJlclByb2Nlc3MoKSkuc3RhcnQoKTtcblxufSk7XG4iXX0=