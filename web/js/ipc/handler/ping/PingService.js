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
const PingHandler_1 = require("./PingHandler");
class PingService {
    constructor(ipcEngine) {
        this.ipcEngine = ipcEngine;
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            this.ipcEngine.registry.registerPath('/ping', new PingHandler_1.PingHandler());
            this.ipcEngine.start();
        });
    }
}
exports.PingService = PingService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGluZ1NlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQaW5nU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUEsK0NBQTBDO0FBRTFDLE1BQWEsV0FBVztJQUlwQixZQUFZLFNBQThCO1FBQ3RDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7SUFFSyxLQUFLOztZQUVQLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSx5QkFBVyxFQUFFLENBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRTNCLENBQUM7S0FBQTtDQUVKO0FBZkQsa0NBZUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lQQ0VuZ2luZX0gZnJvbSAnLi4vSVBDRW5naW5lJztcbmltcG9ydCB7SVBDRXZlbnR9IGZyb20gJy4uL0lQQ0V2ZW50JztcbmltcG9ydCB7UGluZ0hhbmRsZXJ9IGZyb20gJy4vUGluZ0hhbmRsZXInO1xuXG5leHBvcnQgY2xhc3MgUGluZ1NlcnZpY2Uge1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGlwY0VuZ2luZTogSVBDRW5naW5lPElQQ0V2ZW50PjtcblxuICAgIGNvbnN0cnVjdG9yKGlwY0VuZ2luZTogSVBDRW5naW5lPElQQ0V2ZW50Pikge1xuICAgICAgICB0aGlzLmlwY0VuZ2luZSA9IGlwY0VuZ2luZTtcbiAgICB9XG5cbiAgICBhc3luYyBzdGFydCgpOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgICAgICB0aGlzLmlwY0VuZ2luZS5yZWdpc3RyeS5yZWdpc3RlclBhdGgoJy9waW5nJywgbmV3IFBpbmdIYW5kbGVyKCkpO1xuICAgICAgICB0aGlzLmlwY0VuZ2luZS5zdGFydCgpO1xuXG4gICAgfVxuXG59XG4iXX0=