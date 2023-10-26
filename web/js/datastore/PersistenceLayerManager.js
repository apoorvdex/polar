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
const SimpleReactor_1 = require("../reactor/SimpleReactor");
const RemotePersistenceLayerFactory_1 = require("./factories/RemotePersistenceLayerFactory");
const CloudPersistenceLayerFactory_1 = require("./factories/CloudPersistenceLayerFactory");
const Logger_1 = require("../logger/Logger");
const RendererAnalytics_1 = require("../ga/RendererAnalytics");
const FirebasePersistenceLayerFactory_1 = require("./factories/FirebasePersistenceLayerFactory");
const AppRuntime_1 = require("../AppRuntime");
const log = Logger_1.Logger.create();
const RESET_KEY = 'polar-persistence-layer-reset';
class PersistenceLayerManager {
    constructor() {
        this.persistenceLayerManagerEventDispatcher = new SimpleReactor_1.SimpleReactor();
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            let type = PersistenceLayerTypes.get();
            if (this.requiresReset()) {
                log.info("Going go reset and deactivate current datastore: " + type);
                const deactivatePersistenceLayer = this.createPersistenceLayer(type);
                yield deactivatePersistenceLayer.deactivate();
                this.clearReset();
                type = 'local';
                PersistenceLayerTypes.set(type);
            }
            yield this.change(type);
        });
    }
    get() {
        return this.persistenceLayer;
    }
    currentType() {
        return this.current;
    }
    change(type) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.current === type) {
                return false;
            }
            PersistenceLayerTypes.set(type);
            if (this.persistenceLayer) {
                log.info("Stopping persistence layer...");
                this.dispatchEvent({ type, persistenceLayer: this.persistenceLayer, state: 'stopping' });
                yield this.persistenceLayer.createBackup();
                yield this.persistenceLayer.stop();
                log.info("Stopped persistence layer...");
                this.dispatchEvent({ type, persistenceLayer: this.persistenceLayer, state: 'stopped' });
            }
            this.current = type;
            this.persistenceLayer = this.createPersistenceLayer(type);
            this.dispatchEvent({ type, persistenceLayer: this.persistenceLayer, state: 'changed' });
            log.info("Changed to persistence layer: " + type);
            yield this.persistenceLayer.init();
            this.dispatchEvent({ type, persistenceLayer: this.persistenceLayer, state: 'initialized' });
            log.info("Initialized persistence layer: " + type);
            RendererAnalytics_1.RendererAnalytics.event({ category: 'persistence-layer', action: 'changed-to-' + type });
            return true;
        });
    }
    reset() {
        log.info("Datastore reset");
        window.localStorage.setItem(RESET_KEY, 'true');
    }
    requiresReset() {
        return window.localStorage.getItem(RESET_KEY) === 'true';
    }
    clearReset() {
        return window.localStorage.removeItem(RESET_KEY);
    }
    createPersistenceLayer(type) {
        if (type === 'firebase') {
            return FirebasePersistenceLayerFactory_1.FirebasePersistenceLayerFactory.create();
        }
        if (type === 'local') {
            return RemotePersistenceLayerFactory_1.RemotePersistenceLayerFactory.create();
        }
        if (type === 'cloud') {
            return CloudPersistenceLayerFactory_1.CloudPersistenceLayerFactory.create();
        }
        throw new Error("Unknown type: " + type);
    }
    addEventListener(listener, fireWithExisting) {
        if (fireWithExisting && this.get()) {
            listener({ type: this.current, persistenceLayer: this.get(), state: fireWithExisting });
        }
        return this.persistenceLayerManagerEventDispatcher.addEventListener(listener);
    }
    dispatchEvent(event) {
        this.persistenceLayerManagerEventDispatcher.dispatchEvent(event);
    }
}
exports.PersistenceLayerManager = PersistenceLayerManager;
class PersistenceLayerTypes {
    static get() {
        if (AppRuntime_1.AppRuntime.isBrowser()) {
            return 'firebase';
        }
        const currentType = window.localStorage.getItem(this.KEY);
        if (!currentType) {
            return 'local';
        }
        if (currentType === 'local' || currentType === 'cloud') {
            return currentType;
        }
        throw new Error("Unknown type: " + currentType);
    }
    static set(type) {
        window.localStorage.setItem(this.KEY, type);
    }
}
PersistenceLayerTypes.KEY = 'polar-persistence-layer';
exports.PersistenceLayerTypes = PersistenceLayerTypes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVyc2lzdGVuY2VMYXllck1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQZXJzaXN0ZW5jZUxheWVyTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNERBQXlFO0FBQ3pFLDZGQUF3RjtBQUN4RiwyRkFBc0Y7QUFHdEYsNkNBQXdDO0FBQ3hDLCtEQUEwRDtBQUMxRCxpR0FBNEY7QUFDNUYsOENBQXlDO0FBRXpDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFNLFNBQVMsR0FBRywrQkFBK0IsQ0FBQztBQUVsRCxNQUFhLHVCQUF1QjtJQUFwQztRQUVxQiwyQ0FBc0MsR0FBbUQsSUFBSSw2QkFBYSxFQUFFLENBQUM7SUEwSWxJLENBQUM7SUFqSWdCLEtBQUs7O1lBRWQsSUFBSSxJQUFJLEdBQUcscUJBQXFCLENBQUMsR0FBRyxFQUFFLENBQUM7WUFFdkMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7Z0JBRXRCLEdBQUcsQ0FBQyxJQUFJLENBQUMsbURBQW1ELEdBQUcsSUFBSSxDQUFDLENBQUM7Z0JBRXJFLE1BQU0sMEJBQTBCLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUVyRSxNQUFNLDBCQUEwQixDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUU5QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBR2xCLElBQUksR0FBRyxPQUFPLENBQUM7Z0JBQ2YscUJBQXFCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBRW5DO1lBRUQsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTVCLENBQUM7S0FBQTtJQUVNLEdBQUc7UUFDTixPQUFPLElBQUksQ0FBQyxnQkFBaUIsQ0FBQztJQUNsQyxDQUFDO0lBRU0sV0FBVztRQUNkLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4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cG9ydCB7SUV2ZW50RGlzcGF0Y2hlciwgU2ltcGxlUmVhY3Rvcn0gZnJvbSAnLi4vcmVhY3Rvci9TaW1wbGVSZWFjdG9yJztcbmltcG9ydCB7UmVtb3RlUGVyc2lzdGVuY2VMYXllckZhY3Rvcnl9IGZyb20gJy4vZmFjdG9yaWVzL1JlbW90ZVBlcnNpc3RlbmNlTGF5ZXJGYWN0b3J5JztcbmltcG9ydCB7Q2xvdWRQZXJzaXN0ZW5jZUxheWVyRmFjdG9yeX0gZnJvbSBcIi4vZmFjdG9yaWVzL0Nsb3VkUGVyc2lzdGVuY2VMYXllckZhY3RvcnlcIjtcbmltcG9ydCB7SVByb3ZpZGVyfSBmcm9tIFwiLi4vdXRpbC9Qcm92aWRlcnNcIjtcbmltcG9ydCB7TGlzdGVuYWJsZVBlcnNpc3RlbmNlTGF5ZXJ9IGZyb20gJy4vTGlzdGVuYWJsZVBlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gXCIuLi9sb2dnZXIvTG9nZ2VyXCI7XG5pbXBvcnQge1JlbmRlcmVyQW5hbHl0aWNzfSBmcm9tICcuLi9nYS9SZW5kZXJlckFuYWx5dGljcyc7XG5pbXBvcnQge0ZpcmViYXNlUGVyc2lzdGVuY2VMYXllckZhY3Rvcnl9IGZyb20gJy4vZmFjdG9yaWVzL0ZpcmViYXNlUGVyc2lzdGVuY2VMYXllckZhY3RvcnknO1xuaW1wb3J0IHtBcHBSdW50aW1lfSBmcm9tICcuLi9BcHBSdW50aW1lJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5jb25zdCBSRVNFVF9LRVkgPSAncG9sYXItcGVyc2lzdGVuY2UtbGF5ZXItcmVzZXQnO1xuXG5leHBvcnQgY2xhc3MgUGVyc2lzdGVuY2VMYXllck1hbmFnZXIgaW1wbGVtZW50cyBJUHJvdmlkZXI8TGlzdGVuYWJsZVBlcnNpc3RlbmNlTGF5ZXI+IHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgcGVyc2lzdGVuY2VMYXllck1hbmFnZXJFdmVudERpc3BhdGNoZXI6IElFdmVudERpc3BhdGNoZXI8UGVyc2lzdGVuY2VMYXllck1hbmFnZXJFdmVudD4gPSBuZXcgU2ltcGxlUmVhY3RvcigpO1xuXG4gICAgcHJpdmF0ZSBwZXJzaXN0ZW5jZUxheWVyPzogTGlzdGVuYWJsZVBlcnNpc3RlbmNlTGF5ZXI7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBwZXJzaXN0ZW5jZSB0eXBlIGluIHBsYWNlLlxuICAgICAqL1xuICAgIHByaXZhdGUgY3VycmVudD86IFBlcnNpc3RlbmNlTGF5ZXJUeXBlO1xuXG4gICAgcHVibGljIGFzeW5jIHN0YXJ0KCk6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIGxldCB0eXBlID0gUGVyc2lzdGVuY2VMYXllclR5cGVzLmdldCgpO1xuXG4gICAgICAgIGlmICh0aGlzLnJlcXVpcmVzUmVzZXQoKSkge1xuXG4gICAgICAgICAgICBsb2cuaW5mbyhcIkdvaW5nIGdvIHJlc2V0IGFuZCBkZWFjdGl2YXRlIGN1cnJlbnQgZGF0YXN0b3JlOiBcIiArIHR5cGUpO1xuXG4gICAgICAgICAgICBjb25zdCBkZWFjdGl2YXRlUGVyc2lzdGVuY2VMYXllciA9IHRoaXMuY3JlYXRlUGVyc2lzdGVuY2VMYXllcih0eXBlKTtcblxuICAgICAgICAgICAgYXdhaXQgZGVhY3RpdmF0ZVBlcnNpc3RlbmNlTGF5ZXIuZGVhY3RpdmF0ZSgpO1xuXG4gICAgICAgICAgICB0aGlzLmNsZWFyUmVzZXQoKTtcblxuICAgICAgICAgICAgLy8gbm93IGdvIHdpdGggbG9jYWxcbiAgICAgICAgICAgIHR5cGUgPSAnbG9jYWwnO1xuICAgICAgICAgICAgUGVyc2lzdGVuY2VMYXllclR5cGVzLnNldCh0eXBlKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgdGhpcy5jaGFuZ2UodHlwZSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0KCk6IExpc3RlbmFibGVQZXJzaXN0ZW5jZUxheWVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGVyc2lzdGVuY2VMYXllciE7XG4gICAgfVxuXG4gICAgcHVibGljIGN1cnJlbnRUeXBlKCk6IFBlcnNpc3RlbmNlTGF5ZXJUeXBlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdGhlIHBlcnNpc3RlbmNlIGxheWVyIHdoZW4gbmVlZGVkLiBSZXR1cm4gdHJ1ZSB3aGVuIGNoYW5nZWQgb3JcbiAgICAgKiBmYWxzZSBpZiB3ZSdyZSBhbHJlYWR5IHVzaW5nIHRoaXMgdHlwZS5cbiAgICAgKiBAcGFyYW0gdHlwZVxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBjaGFuZ2UodHlwZTogUGVyc2lzdGVuY2VMYXllclR5cGUpIHtcblxuICAgICAgICBpZiAodGhpcy5jdXJyZW50ID09PSB0eXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBQZXJzaXN0ZW5jZUxheWVyVHlwZXMuc2V0KHR5cGUpO1xuXG4gICAgICAgIGlmICh0aGlzLnBlcnNpc3RlbmNlTGF5ZXIpIHtcblxuICAgICAgICAgICAgbG9nLmluZm8oXCJTdG9wcGluZyBwZXJzaXN0ZW5jZSBsYXllci4uLlwiKTtcblxuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KHt0eXBlLCBwZXJzaXN0ZW5jZUxheWVyOiB0aGlzLnBlcnNpc3RlbmNlTGF5ZXIsIHN0YXRlOiAnc3RvcHBpbmcnfSk7XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIGJhY2t1cCBmaXJzdC4gIFRoaXMgb25seSBhcHBsaWVzIHRvIHRoZSBEaXNrRGF0YXN0b3JlXG4gICAgICAgICAgICAvLyBidXQgdGhpcyB3YXkgd2UgaGF2ZSBhIGJhY2t1cCBiZWZvcmUgd2UgZ28gb25saW5lIHRvIHRoZSBjbG91ZFxuICAgICAgICAgICAgLy8gZGF0YXN0b3JlIHNvIGlmIGl0IHNjcmV3cyB1cCBmaWxlcyB3ZSdyZSBvay5cbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGVyc2lzdGVuY2VMYXllci5jcmVhdGVCYWNrdXAoKTtcblxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wZXJzaXN0ZW5jZUxheWVyLnN0b3AoKTtcblxuICAgICAgICAgICAgbG9nLmluZm8oXCJTdG9wcGVkIHBlcnNpc3RlbmNlIGxheWVyLi4uXCIpO1xuXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoe3R5cGUsIHBlcnNpc3RlbmNlTGF5ZXI6IHRoaXMucGVyc2lzdGVuY2VMYXllciwgc3RhdGU6ICdzdG9wcGVkJ30pO1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmN1cnJlbnQgPSB0eXBlO1xuXG4gICAgICAgIHRoaXMucGVyc2lzdGVuY2VMYXllciA9IHRoaXMuY3JlYXRlUGVyc2lzdGVuY2VMYXllcih0eXBlKTtcblxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoe3R5cGUsIHBlcnNpc3RlbmNlTGF5ZXI6IHRoaXMucGVyc2lzdGVuY2VMYXllciwgc3RhdGU6ICdjaGFuZ2VkJ30pO1xuXG4gICAgICAgIGxvZy5pbmZvKFwiQ2hhbmdlZCB0byBwZXJzaXN0ZW5jZSBsYXllcjogXCIgKyB0eXBlKTtcblxuICAgICAgICBhd2FpdCB0aGlzLnBlcnNpc3RlbmNlTGF5ZXIuaW5pdCgpO1xuXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCh7dHlwZSwgcGVyc2lzdGVuY2VMYXllcjogdGhpcy5wZXJzaXN0ZW5jZUxheWVyLCBzdGF0ZTogJ2luaXRpYWxpemVkJ30pO1xuXG4gICAgICAgIGxvZy5pbmZvKFwiSW5pdGlhbGl6ZWQgcGVyc2lzdGVuY2UgbGF5ZXI6IFwiICsgdHlwZSk7XG5cbiAgICAgICAgUmVuZGVyZXJBbmFseXRpY3MuZXZlbnQoe2NhdGVnb3J5OiAncGVyc2lzdGVuY2UtbGF5ZXInLCBhY3Rpb246ICdjaGFuZ2VkLXRvLScgKyB0eXBlfSk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgICAgIGxvZy5pbmZvKFwiRGF0YXN0b3JlIHJlc2V0XCIpO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oUkVTRVRfS0VZLCAndHJ1ZScpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZXF1aXJlc1Jlc2V0KCkge1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFJFU0VUX0tFWSkgPT09ICd0cnVlJztcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXJSZXNldCgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShSRVNFVF9LRVkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlUGVyc2lzdGVuY2VMYXllcih0eXBlOiBQZXJzaXN0ZW5jZUxheWVyVHlwZSk6IExpc3RlbmFibGVQZXJzaXN0ZW5jZUxheWVyIHtcblxuICAgICAgICBpZiAodHlwZSA9PT0gJ2ZpcmViYXNlJykge1xuICAgICAgICAgICAgcmV0dXJuIEZpcmViYXNlUGVyc2lzdGVuY2VMYXllckZhY3RvcnkuY3JlYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PT0gJ2xvY2FsJykge1xuICAgICAgICAgICAgcmV0dXJuIFJlbW90ZVBlcnNpc3RlbmNlTGF5ZXJGYWN0b3J5LmNyZWF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdjbG91ZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBDbG91ZFBlcnNpc3RlbmNlTGF5ZXJGYWN0b3J5LmNyZWF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biB0eXBlOiBcIiArIHR5cGUpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFkZEV2ZW50TGlzdGVuZXIobGlzdGVuZXI6IFBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyRXZlbnRMaXN0ZW5lcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJlV2l0aEV4aXN0aW5nPzogJ2NoYW5nZWQnIHwgJ2luaXRpYWxpemVkJykge1xuXG4gICAgICAgIGlmIChmaXJlV2l0aEV4aXN0aW5nICYmIHRoaXMuZ2V0KCkpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyKHt0eXBlOiB0aGlzLmN1cnJlbnQhLCBwZXJzaXN0ZW5jZUxheWVyOiB0aGlzLmdldCgpLCBzdGF0ZTogZmlyZVdpdGhFeGlzdGluZ30pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucGVyc2lzdGVuY2VMYXllck1hbmFnZXJFdmVudERpc3BhdGNoZXIuYWRkRXZlbnRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkaXNwYXRjaEV2ZW50KGV2ZW50OiBQZXJzaXN0ZW5jZUxheWVyTWFuYWdlckV2ZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMucGVyc2lzdGVuY2VMYXllck1hbmFnZXJFdmVudERpc3BhdGNoZXIuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCB0eXBlIFBlcnNpc3RlbmNlTGF5ZXJUeXBlID0gJ2xvY2FsJyB8ICdjbG91ZCcgfCAnZmlyZWJhc2UnO1xuXG4vKipcbiAqIFRoZSBzdGF0ZSBvZiB0aGUgcGVyc2lzdGVuY2UgbGF5ZXIuXG4gKlxuICogVGhlIHByb2NlZWRpbmcgZ28gaW4gdGhlIGZvbGxvd2luZyBvcmRlciBhbmQgY2FuIG5vdCBnbyBiYWNrOlxuICpcbiAqIC0gY2hhbmdlZCAgICAgICAgIC0gY2hhbmdlIHRvIGEgbmV3IHBlcnNpc3RlbmNlIGxheWVyIHdoaWNoIGhhcyBiZWVuIGNyZWF0ZWRcbiAqICAgICAgICAgICAgICAgICAgICAgYnV0IG5vdCB5ZXQgaW5pdGlhbGl6ZWQuXG4gKiAtIGluaXRpYWxpemVkICAgICAtIGluaXQgaGFzIGJlZW4gY2FsbGVkLlxuICogLSBzdG9wcGluZyAgICAgICAgLSBhYm91dCB0byBjYWxsIHN0b3AoKVxuICogLSBzdG9wcGVkICAgICAgICAgLSBzdG9wcGVkXG4gKlxuICovXG5leHBvcnQgdHlwZSBQZXJzaXN0ZW5jZUxheWVyU3RhdGUgPSAnY2hhbmdlZCcgfCAnaW5pdGlhbGl6ZWQnIHwgJ3N0b3BwaW5nJyB8ICdzdG9wcGVkJztcblxuZXhwb3J0IGludGVyZmFjZSBQZXJzaXN0ZW5jZUxheWVyTWFuYWdlckV2ZW50IHtcblxuICAgIHJlYWRvbmx5IHR5cGU6IFBlcnNpc3RlbmNlTGF5ZXJUeXBlO1xuICAgIHJlYWRvbmx5IHN0YXRlOiBQZXJzaXN0ZW5jZUxheWVyU3RhdGU7XG4gICAgcmVhZG9ubHkgcGVyc2lzdGVuY2VMYXllcjogTGlzdGVuYWJsZVBlcnNpc3RlbmNlTGF5ZXI7XG5cbn1cblxuZXhwb3J0IHR5cGUgUGVyc2lzdGVuY2VMYXllck1hbmFnZXJFdmVudExpc3RlbmVyID0gKGV2ZW50OiBQZXJzaXN0ZW5jZUxheWVyTWFuYWdlckV2ZW50KSA9PiB2b2lkO1xuXG5leHBvcnQgY2xhc3MgUGVyc2lzdGVuY2VMYXllclR5cGVzIHtcblxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEtFWSA9ICdwb2xhci1wZXJzaXN0ZW5jZS1sYXllcic7XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCgpOiBQZXJzaXN0ZW5jZUxheWVyVHlwZSB7XG5cbiAgICAgICAgaWYgKEFwcFJ1bnRpbWUuaXNCcm93c2VyKCkpIHtcbiAgICAgICAgICAgIC8vIHdlIGFyZSBBTFdBWVMgdXNpbmcgZmlyZWJhc2Ugd2hlbiBpbiB0aGUgYnJvd3NlciBhbmQgdGhlcmUgaXMgbm9cbiAgICAgICAgICAgIC8vIG90aGVyIG9wdGlvbi5cbiAgICAgICAgICAgIHJldHVybiAnZmlyZWJhc2UnO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3VycmVudFR5cGUgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5LRVkpO1xuXG4gICAgICAgIGlmICghIGN1cnJlbnRUeXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2xvY2FsJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyZW50VHlwZSA9PT0gJ2xvY2FsJyB8fCBjdXJyZW50VHlwZSA9PT0gJ2Nsb3VkJykge1xuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRUeXBlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biB0eXBlOiBcIiArIGN1cnJlbnRUeXBlKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgc2V0KHR5cGU6IFBlcnNpc3RlbmNlTGF5ZXJUeXBlKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLktFWSwgdHlwZSk7XG4gICAgfVxuXG59XG5cbiJdfQ==