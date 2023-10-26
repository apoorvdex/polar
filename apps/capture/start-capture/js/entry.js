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
const StartCaptureApp_1 = require("../../../../web/js/capture/controller/StartCaptureApp");
const Logger_1 = require("../../../../web/js/logger/Logger");
const Logging_1 = require("../../../../web/js/logger/Logging");
const log = Logger_1.Logger.create();
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        yield Logging_1.Logging.init();
        new StartCaptureApp_1.StartCaptureApp().start();
    });
}
start().catch(err => log.error("Could not start app: ", err));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlbnRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkZBQXNGO0FBQ3RGLDZEQUF3RDtBQUN4RCwrREFBMEQ7QUFFMUQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLFNBQWUsS0FBSzs7UUFFaEIsTUFBTSxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXJCLElBQUksaUNBQWUsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRWxDLENBQUM7Q0FBQTtBQUVELEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3RhcnRDYXB0dXJlQXBwfSBmcm9tIFwiLi4vLi4vLi4vLi4vd2ViL2pzL2NhcHR1cmUvY29udHJvbGxlci9TdGFydENhcHR1cmVBcHBcIjtcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0xvZ2dpbmd9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy9sb2dnZXIvTG9nZ2luZyc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuYXN5bmMgZnVuY3Rpb24gc3RhcnQoKSB7XG5cbiAgICBhd2FpdCBMb2dnaW5nLmluaXQoKTtcblxuICAgIG5ldyBTdGFydENhcHR1cmVBcHAoKS5zdGFydCgpO1xuXG59XG5cbnN0YXJ0KCkuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihcIkNvdWxkIG5vdCBzdGFydCBhcHA6IFwiLCBlcnIpKTtcbiJdfQ==