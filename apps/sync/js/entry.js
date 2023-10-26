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
const Logger_1 = require("../../../web/js/logger/Logger");
const SyncApp_1 = require("../../../web/js/apps/sync/SyncApp");
const Logging_1 = require("../../../web/js/logger/Logging");
const log = Logger_1.Logger.create();
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        yield Logging_1.Logging.init();
        const app = new SyncApp_1.SyncApp();
        yield app.start();
    });
}
start().catch(err => log.error("Could not start app: ", err));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlbnRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMERBQXFEO0FBQ3JELCtEQUEwRDtBQUMxRCw0REFBdUQ7QUFFdkQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLFNBQWUsS0FBSzs7UUFFaEIsTUFBTSxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXJCLE1BQU0sR0FBRyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBQzFCLE1BQU0sR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRXRCLENBQUM7Q0FBQTtBQUVELEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge1N5bmNBcHB9IGZyb20gXCIuLi8uLi8uLi93ZWIvanMvYXBwcy9zeW5jL1N5bmNBcHBcIjtcbmltcG9ydCB7TG9nZ2luZ30gZnJvbSAnLi4vLi4vLi4vd2ViL2pzL2xvZ2dlci9Mb2dnaW5nJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5hc3luYyBmdW5jdGlvbiBzdGFydCgpIHtcblxuICAgIGF3YWl0IExvZ2dpbmcuaW5pdCgpO1xuXG4gICAgY29uc3QgYXBwID0gbmV3IFN5bmNBcHAoKTtcbiAgICBhd2FpdCBhcHAuc3RhcnQoKTtcblxufVxuXG5zdGFydCgpLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJDb3VsZCBub3Qgc3RhcnQgYXBwOiBcIiwgZXJyKSk7XG4iXX0=