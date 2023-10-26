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
const Launcher_1 = require("./Launcher");
const Logger_1 = require("../logger/Logger");
const RemotePersistenceLayerFactory_1 = require("../datastore/factories/RemotePersistenceLayerFactory");
const log = Logger_1.Logger.create();
function persistenceLayerFactory() {
    return __awaiter(this, void 0, void 0, function* () {
        const persistenceLayer = RemotePersistenceLayerFactory_1.RemotePersistenceLayerFactory.create();
        yield persistenceLayer.init();
        return persistenceLayer;
    });
}
new Launcher_1.Launcher(persistenceLayerFactory).launch()
    .then(() => log.info("App now loaded."))
    .catch(err => log.error(err));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlY3Ryb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlbGVjdHJvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEseUNBQW9DO0FBQ3BDLDZDQUF3QztBQUl4Qyx3R0FBbUc7QUFFbkcsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLFNBQWUsdUJBQXVCOztRQUtsQyxNQUFNLGdCQUFnQixHQUFHLDZEQUE2QixDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hFLE1BQU0sZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDOUIsT0FBTyxnQkFBZ0IsQ0FBQztJQUU1QixDQUFDO0NBQUE7QUFFRCxJQUFJLG1CQUFRLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxNQUFNLEVBQUU7S0FDekMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztLQUN2QyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xhdW5jaGVyfSBmcm9tICcuL0xhdW5jaGVyJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi9sb2dnZXIvTG9nZ2VyJztcblxuaW1wb3J0IHtMaXN0ZW5hYmxlUGVyc2lzdGVuY2VMYXllcn0gZnJvbSAnLi4vZGF0YXN0b3JlL0xpc3RlbmFibGVQZXJzaXN0ZW5jZUxheWVyJztcbmltcG9ydCB7RGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXJGYWN0b3J5fSBmcm9tICcuLi9kYXRhc3RvcmUvZmFjdG9yaWVzL0RlZmF1bHRQZXJzaXN0ZW5jZUxheWVyRmFjdG9yeSc7XG5pbXBvcnQge1JlbW90ZVBlcnNpc3RlbmNlTGF5ZXJGYWN0b3J5fSBmcm9tICcuLi9kYXRhc3RvcmUvZmFjdG9yaWVzL1JlbW90ZVBlcnNpc3RlbmNlTGF5ZXJGYWN0b3J5JztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5hc3luYyBmdW5jdGlvbiBwZXJzaXN0ZW5jZUxheWVyRmFjdG9yeSgpOiBQcm9taXNlPExpc3RlbmFibGVQZXJzaXN0ZW5jZUxheWVyPiB7XG5cbiAgICAvLyBsZXQgZWxlY3Ryb25QZXJzaXN0ZW5jZUxheWVyID0gRWxlY3Ryb25QZXJzaXN0ZW5jZUxheWVyRmFjdG9yeS5jcmVhdGUoKTtcbiAgICAvLyByZXR1cm4gbmV3IFBlcnNpc3RlbmNlTGF5ZXJEaXNwYXRjaGVyKFBlcnNpc3RlbmNlTGF5ZXJXb3JrZXJzLmNyZWF0ZSgpLCBlbGVjdHJvblBlcnNpc3RlbmNlTGF5ZXIpO1xuXG4gICAgY29uc3QgcGVyc2lzdGVuY2VMYXllciA9IFJlbW90ZVBlcnNpc3RlbmNlTGF5ZXJGYWN0b3J5LmNyZWF0ZSgpO1xuICAgIGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXIuaW5pdCgpO1xuICAgIHJldHVybiBwZXJzaXN0ZW5jZUxheWVyO1xuXG59XG5cbm5ldyBMYXVuY2hlcihwZXJzaXN0ZW5jZUxheWVyRmFjdG9yeSkubGF1bmNoKClcbiAgICAudGhlbigoKSA9PiBsb2cuaW5mbyhcIkFwcCBub3cgbG9hZGVkLlwiKSlcbiAgICAuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihlcnIpKTtcbiJdfQ==