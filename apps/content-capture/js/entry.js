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
const ContentCaptureApp_1 = require("../../../web/js/capture/renderer/ContentCaptureApp");
const Logger_1 = require("../../../web/js/logger/Logger");
const Logging_1 = require("../../../web/js/logger/Logging");
const log = Logger_1.Logger.create();
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        yield Logging_1.Logging.init();
        let contentCaptureApp = new ContentCaptureApp_1.ContentCaptureApp();
        yield contentCaptureApp.start();
    });
}
start().catch(err => log.error("Could not start app: ", err));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlbnRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMEZBQXFGO0FBQ3JGLDBEQUFxRDtBQUNyRCw0REFBdUQ7QUFFdkQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLFNBQWUsS0FBSzs7UUFFaEIsTUFBTSxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXJCLElBQUksaUJBQWlCLEdBQUcsSUFBSSxxQ0FBaUIsRUFBRSxDQUFDO1FBQ2hELE1BQU0saUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFcEMsQ0FBQztDQUFBO0FBRUQsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb250ZW50Q2FwdHVyZUFwcH0gZnJvbSAnLi4vLi4vLi4vd2ViL2pzL2NhcHR1cmUvcmVuZGVyZXIvQ29udGVudENhcHR1cmVBcHAnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uLy4uLy4uL3dlYi9qcy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7TG9nZ2luZ30gZnJvbSAnLi4vLi4vLi4vd2ViL2pzL2xvZ2dlci9Mb2dnaW5nJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5hc3luYyBmdW5jdGlvbiBzdGFydCgpIHtcblxuICAgIGF3YWl0IExvZ2dpbmcuaW5pdCgpO1xuXG4gICAgbGV0IGNvbnRlbnRDYXB0dXJlQXBwID0gbmV3IENvbnRlbnRDYXB0dXJlQXBwKCk7XG4gICAgYXdhaXQgY29udGVudENhcHR1cmVBcHAuc3RhcnQoKTtcblxufVxuXG5zdGFydCgpLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJDb3VsZCBub3Qgc3RhcnQgYXBwOiBcIiwgZXJyKSk7XG4iXX0=