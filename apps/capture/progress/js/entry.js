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
const ProgressApp_1 = require("../../../../web/js/capture/controller/ProgressApp");
const Logger_1 = require("../../../../web/js/logger/Logger");
const Logging_1 = require("../../../../web/js/logger/Logging");
const log = Logger_1.Logger.create();
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        yield Logging_1.Logging.init();
        new ProgressApp_1.ProgressApp().start();
    });
}
start().catch(err => log.error("Could not start app: ", err));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlbnRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsbUZBQThFO0FBQzlFLDZEQUF3RDtBQUN4RCwrREFBMEQ7QUFFMUQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLFNBQWUsS0FBSzs7UUFFaEIsTUFBTSxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXJCLElBQUkseUJBQVcsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRTlCLENBQUM7Q0FBQTtBQUVELEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UHJvZ3Jlc3NBcHB9IGZyb20gXCIuLi8uLi8uLi8uLi93ZWIvanMvY2FwdHVyZS9jb250cm9sbGVyL1Byb2dyZXNzQXBwXCI7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtMb2dnaW5nfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvbG9nZ2VyL0xvZ2dpbmcnO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmFzeW5jIGZ1bmN0aW9uIHN0YXJ0KCkge1xuXG4gICAgYXdhaXQgTG9nZ2luZy5pbml0KCk7XG5cbiAgICBuZXcgUHJvZ3Jlc3NBcHAoKS5zdGFydCgpO1xuXG59XG5cbnN0YXJ0KCkuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihcIkNvdWxkIG5vdCBzdGFydCBhcHA6IFwiLCBlcnIpKTtcbiJdfQ==