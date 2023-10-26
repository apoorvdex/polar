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
const Logging_1 = require("../../../web/js/logger/Logging");
const CaptureWebviewApp_1 = require("../../../web/js/apps/capture_webview/CaptureWebviewApp");
const log = Logger_1.Logger.create();
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        yield Logging_1.Logging.init();
        const app = new CaptureWebviewApp_1.CaptureWebviewApp();
        yield app.start();
    });
}
start().catch(err => log.error("Could not start app: ", err));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlbnRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMERBQXFEO0FBQ3JELDREQUF1RDtBQUN2RCw4RkFBeUY7QUFFekYsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLFNBQWUsS0FBSzs7UUFFaEIsTUFBTSxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXJCLE1BQU0sR0FBRyxHQUFHLElBQUkscUNBQWlCLEVBQUUsQ0FBQztRQUNwQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUV0QixDQUFDO0NBQUE7QUFFRCxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vLi4vLi4vd2ViL2pzL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtMb2dnaW5nfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvbG9nZ2VyL0xvZ2dpbmcnO1xuaW1wb3J0IHtDYXB0dXJlV2Vidmlld0FwcH0gZnJvbSAnLi4vLi4vLi4vd2ViL2pzL2FwcHMvY2FwdHVyZV93ZWJ2aWV3L0NhcHR1cmVXZWJ2aWV3QXBwJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5hc3luYyBmdW5jdGlvbiBzdGFydCgpIHtcblxuICAgIGF3YWl0IExvZ2dpbmcuaW5pdCgpO1xuXG4gICAgY29uc3QgYXBwID0gbmV3IENhcHR1cmVXZWJ2aWV3QXBwKCk7XG4gICAgYXdhaXQgYXBwLnN0YXJ0KCk7XG5cbn1cblxuc3RhcnQoKS5jYXRjaChlcnIgPT4gbG9nLmVycm9yKFwiQ291bGQgbm90IHN0YXJ0IGFwcDogXCIsIGVycikpO1xuIl19