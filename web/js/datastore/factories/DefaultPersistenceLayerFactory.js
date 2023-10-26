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
const DefaultPersistenceLayer_1 = require("../DefaultPersistenceLayer");
const Logger_1 = require("../../logger/Logger");
const Datastores_1 = require("../Datastores");
const AdvertisingPersistenceLayer_1 = require("../advertiser/AdvertisingPersistenceLayer");
const log = Logger_1.Logger.create();
class DefaultPersistenceLayerFactory {
    static create() {
        return __awaiter(this, void 0, void 0, function* () {
            log.info("Using persistence layer from renderer process.");
            const datastore = Datastores_1.Datastores.create();
            yield datastore.init();
            const defaultPersistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(datastore);
            const advertisingPersistenceLayer = new AdvertisingPersistenceLayer_1.AdvertisingPersistenceLayer(defaultPersistenceLayer);
            yield advertisingPersistenceLayer.init();
            return advertisingPersistenceLayer;
        });
    }
}
exports.DefaultPersistenceLayerFactory = DefaultPersistenceLayerFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXJGYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXJGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx3RUFBbUU7QUFDbkUsZ0RBQTJDO0FBQzNDLDhDQUF5QztBQUN6QywyRkFBc0Y7QUFHdEYsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBTTVCLE1BQWEsOEJBQThCO0lBRWhDLE1BQU0sQ0FBTyxNQUFNOztZQUV0QixHQUFHLENBQUMsSUFBSSxDQUFDLGdEQUFnRCxDQUFDLENBQUM7WUFFM0QsTUFBTSxTQUFTLEdBQUcsdUJBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN0QyxNQUFNLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUV2QixNQUFNLHVCQUF1QixHQUFHLElBQUksaURBQXVCLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkUsTUFBTSwyQkFBMkIsR0FBRyxJQUFJLHlEQUEyQixDQUFDLHVCQUF1QixDQUFDLENBQUM7WUFHN0YsTUFBTSwyQkFBMkIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUV6QyxPQUFPLDJCQUEyQixDQUFDO1FBRXZDLENBQUM7S0FBQTtDQUVKO0FBbkJELHdFQW1CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXJ9IGZyb20gJy4uL0RlZmF1bHRQZXJzaXN0ZW5jZUxheWVyJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7RGF0YXN0b3Jlc30gZnJvbSAnLi4vRGF0YXN0b3Jlcyc7XG5pbXBvcnQge0FkdmVydGlzaW5nUGVyc2lzdGVuY2VMYXllcn0gZnJvbSAnLi4vYWR2ZXJ0aXNlci9BZHZlcnRpc2luZ1BlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtMaXN0ZW5hYmxlUGVyc2lzdGVuY2VMYXllcn0gZnJvbSAnLi4vTGlzdGVuYWJsZVBlcnNpc3RlbmNlTGF5ZXInO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbi8qKlxuICogUGVyc2lzdGVuY2UgbGF5ZXIgd2l0aG91dCBnb2luZyB0aHJvdWdoIHRoZSBtYWluIHByb2Nlc3MgZm9yIGFkZGVkIHRocm91Z2hwdXRcbiAqIGFuZCBsb3dlciBJUEMgYnV0IHJlcXVpcmVzIG5vZGUgaW50ZWdyYXRpb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBEZWZhdWx0UGVyc2lzdGVuY2VMYXllckZhY3Rvcnkge1xuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBjcmVhdGUoKTogUHJvbWlzZTxMaXN0ZW5hYmxlUGVyc2lzdGVuY2VMYXllcj4ge1xuXG4gICAgICAgIGxvZy5pbmZvKFwiVXNpbmcgcGVyc2lzdGVuY2UgbGF5ZXIgZnJvbSByZW5kZXJlciBwcm9jZXNzLlwiKTtcblxuICAgICAgICBjb25zdCBkYXRhc3RvcmUgPSBEYXRhc3RvcmVzLmNyZWF0ZSgpO1xuICAgICAgICBhd2FpdCBkYXRhc3RvcmUuaW5pdCgpO1xuXG4gICAgICAgIGNvbnN0IGRlZmF1bHRQZXJzaXN0ZW5jZUxheWVyID0gbmV3IERlZmF1bHRQZXJzaXN0ZW5jZUxheWVyKGRhdGFzdG9yZSk7XG4gICAgICAgIGNvbnN0IGFkdmVydGlzaW5nUGVyc2lzdGVuY2VMYXllciA9IG5ldyBBZHZlcnRpc2luZ1BlcnNpc3RlbmNlTGF5ZXIoZGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXIpO1xuXG4gICAgICAgIC8vIG5vdGUgdGhhdCB3ZSBuZWVkIHRvIGFsd2F5cyBwcmUtaW5pdCBiZWZvcmUgd2UgcmV0dXJuLlxuICAgICAgICBhd2FpdCBhZHZlcnRpc2luZ1BlcnNpc3RlbmNlTGF5ZXIuaW5pdCgpO1xuXG4gICAgICAgIHJldHVybiBhZHZlcnRpc2luZ1BlcnNpc3RlbmNlTGF5ZXI7XG5cbiAgICB9XG5cbn1cbiJdfQ==