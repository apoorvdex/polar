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
const CreateFlashcardApp_1 = require("../../../web/js/apps/card_creator/CreateFlashcardApp");
const Logger_1 = require("../../../web/js/logger/Logger");
const Logging_1 = require("../../../web/js/logger/Logging");
const log = Logger_1.Logger.create();
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        yield Logging_1.Logging.init();
        let cardCreatorApp = new CreateFlashcardApp_1.CreateFlashcardApp();
        yield cardCreatorApp.start();
    });
}
start().catch(err => log.error("Could not start app: ", err));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlbnRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNkZBQXdGO0FBQ3hGLDBEQUFxRDtBQUNyRCw0REFBdUQ7QUFFdkQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLFNBQWUsS0FBSzs7UUFFaEIsTUFBTSxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXJCLElBQUksY0FBYyxHQUFHLElBQUksdUNBQWtCLEVBQUUsQ0FBQztRQUM5QyxNQUFNLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUVqQyxDQUFDO0NBQUE7QUFFRCxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NyZWF0ZUZsYXNoY2FyZEFwcH0gZnJvbSAnLi4vLi4vLi4vd2ViL2pzL2FwcHMvY2FyZF9jcmVhdG9yL0NyZWF0ZUZsYXNoY2FyZEFwcCc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vLi4vLi4vd2ViL2pzL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtMb2dnaW5nfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvbG9nZ2VyL0xvZ2dpbmcnO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmFzeW5jIGZ1bmN0aW9uIHN0YXJ0KCkge1xuXG4gICAgYXdhaXQgTG9nZ2luZy5pbml0KCk7XG5cbiAgICBsZXQgY2FyZENyZWF0b3JBcHAgPSBuZXcgQ3JlYXRlRmxhc2hjYXJkQXBwKCk7XG4gICAgYXdhaXQgY2FyZENyZWF0b3JBcHAuc3RhcnQoKTtcblxufVxuXG5zdGFydCgpLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJDb3VsZCBub3Qgc3RhcnQgYXBwOiBcIiwgZXJyKSk7XG4iXX0=