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
const AbstractAdvertisingPersistenceLayer_1 = require("./AbstractAdvertisingPersistenceLayer");
class MockAdvertisingPersistenceLayer extends AbstractAdvertisingPersistenceLayer_1.AbstractAdvertisingPersistenceLayer {
    constructor(persistenceLayer, noDispatchEvent = false) {
        super(persistenceLayer);
        this.id = 'mock';
        this.noDispatchEvent = noDispatchEvent;
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    stop() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    broadcastEvent(event) {
        if (this.noDispatchEvent) {
            return;
        }
        this.dispatchEvent(event);
    }
}
exports.MockAdvertisingPersistenceLayer = MockAdvertisingPersistenceLayer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9ja0FkdmVydGlzaW5nUGVyc2lzdGVuY2VMYXllci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1vY2tBZHZlcnRpc2luZ1BlcnNpc3RlbmNlTGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBLCtGQUEwRjtBQU8xRixNQUFhLCtCQUNULFNBQVEseUVBQW1DO0lBTzNDLFlBQVksZ0JBQWtDLEVBQUUsa0JBQTJCLEtBQUs7UUFDNUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFMWixPQUFFLEdBQXVCLE1BQU0sQ0FBQztRQU01QyxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztJQUMzQyxDQUFDO0lBRVksSUFBSTs7UUFFakIsQ0FBQztLQUFBO0lBRVksSUFBSTs7UUFFakIsQ0FBQztLQUFBO0lBRU0sY0FBYyxDQUFDLEtBQTRCO1FBRTlDLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN0QixPQUFPO1NBQ1Y7UUFPRCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FFSjtBQW5DRCwwRUFtQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXIsIFBlcnNpc3RlbmNlTGF5ZXJJRH0gZnJvbSAnLi4vUGVyc2lzdGVuY2VMYXllcic7XG5pbXBvcnQge0xpc3RlbmFibGVQZXJzaXN0ZW5jZUxheWVyfSBmcm9tICcuLi9MaXN0ZW5hYmxlUGVyc2lzdGVuY2VMYXllcic7XG5pbXBvcnQge0Fic3RyYWN0QWR2ZXJ0aXNpbmdQZXJzaXN0ZW5jZUxheWVyfSBmcm9tICcuL0Fic3RyYWN0QWR2ZXJ0aXNpbmdQZXJzaXN0ZW5jZUxheWVyJztcbmltcG9ydCB7UGVyc2lzdGVuY2VMYXllckV2ZW50fSBmcm9tICcuLi9QZXJzaXN0ZW5jZUxheWVyRXZlbnQnO1xuXG4vKipcbiAqIEEgUGVyc2lzdGVuY2VMYXllciB0aGF0IGFsbG93cyB0aGUgdXNlciB0byByZWNlaXZlIGFkdmVydGlzZW1lbnRzIHJlZ2FyZGluZ1xuICogdXBkYXRlcyB0byB0aGUgaW50ZXJuYWwgZGF0YS5cbiAqL1xuZXhwb3J0IGNsYXNzIE1vY2tBZHZlcnRpc2luZ1BlcnNpc3RlbmNlTGF5ZXJcbiAgICBleHRlbmRzIEFic3RyYWN0QWR2ZXJ0aXNpbmdQZXJzaXN0ZW5jZUxheWVyXG4gICAgaW1wbGVtZW50cyBMaXN0ZW5hYmxlUGVyc2lzdGVuY2VMYXllciB7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgaWQ6IFBlcnNpc3RlbmNlTGF5ZXJJRCA9ICdtb2NrJztcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgbm9EaXNwYXRjaEV2ZW50OiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IocGVyc2lzdGVuY2VMYXllcjogUGVyc2lzdGVuY2VMYXllciwgbm9EaXNwYXRjaEV2ZW50OiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgc3VwZXIocGVyc2lzdGVuY2VMYXllcik7XG4gICAgICAgIHRoaXMubm9EaXNwYXRjaEV2ZW50ID0gbm9EaXNwYXRjaEV2ZW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICAvLyBub29wXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHN0b3AoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIC8vIG5vb3BcbiAgICB9XG5cbiAgICBwdWJsaWMgYnJvYWRjYXN0RXZlbnQoZXZlbnQ6IFBlcnNpc3RlbmNlTGF5ZXJFdmVudCk6IHZvaWQge1xuXG4gICAgICAgIGlmICh0aGlzLm5vRGlzcGF0Y2hFdmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTk9URSB0aGF0IHRlY2huaWNhbGx5IHRoaXMgdmlvbGF0ZXMgb3VyIG1haW4gY29udHJhY3QgdGhhdCBwZXJzaXN0ZW5jZVxuICAgICAgICAvLyBsYXllcnMgZG9uJ3QgcmUtbm90aWZ5IHRoZW1zZWx2ZXMuICBJIG5lZWQgdG8gcmV2aXNpdCB0aGlzIGJlY2F1c2VcbiAgICAgICAgLy8gaXQgbWlnaHQgbWFrZSBzZW5zZSB0byBhbGxvdyB0aGVtIHRvIG5vdGlmeSB0aGVtc2VsdmVzIGJ1dCBqdXN0IGJlXG4gICAgICAgIC8vIGNhcmVmdWwgb3IgYWRkIGFub3RoZXIgbW9kZSAncHJvbWlzY3VvdXMnIHRvIHNlZSBhbGwgZXZlbnRzLiAgTWF5YmVcbiAgICAgICAgLy8gdG8gYmUgc2FmZSBieSBkZWZhdWx0IGJ1dCBhZGQgYW5vdGhlciBtb2RlIGlmIG5lY2Vzc2FyeS5cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB9XG5cbn1cbiJdfQ==