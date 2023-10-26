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
const BrowserApp_1 = require("../../../web/js/apps/browser/BrowserApp");
const log = Logger_1.Logger.create();
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        yield Logging_1.Logging.init();
        const app = new BrowserApp_1.BrowserApp();
        yield app.start();
    });
}
start().catch(err => log.error("Could not start app: ", err));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlbnRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMERBQXFEO0FBQ3JELDREQUF1RDtBQUN2RCx3RUFBbUU7QUFFbkUsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLFNBQWUsS0FBSzs7UUFFaEIsTUFBTSxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXJCLE1BQU0sR0FBRyxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO1FBQzdCLE1BQU0sR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRXRCLENBQUM7Q0FBQTtBQUVELEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0xvZ2dpbmd9IGZyb20gJy4uLy4uLy4uL3dlYi9qcy9sb2dnZXIvTG9nZ2luZyc7XG5pbXBvcnQge0Jyb3dzZXJBcHB9IGZyb20gJy4uLy4uLy4uL3dlYi9qcy9hcHBzL2Jyb3dzZXIvQnJvd3NlckFwcCc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuYXN5bmMgZnVuY3Rpb24gc3RhcnQoKSB7XG5cbiAgICBhd2FpdCBMb2dnaW5nLmluaXQoKTtcblxuICAgIGNvbnN0IGFwcCA9IG5ldyBCcm93c2VyQXBwKCk7XG4gICAgYXdhaXQgYXBwLnN0YXJ0KCk7XG5cbn1cblxuc3RhcnQoKS5jYXRjaChlcnIgPT4gbG9nLmVycm9yKFwiQ291bGQgbm90IHN0YXJ0IGFwcDogXCIsIGVycikpO1xuXG4iXX0=