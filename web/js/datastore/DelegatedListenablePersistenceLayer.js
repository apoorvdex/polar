"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DelegatedPersistenceLayer_1 = require("./DelegatedPersistenceLayer");
class DelegatedListenablePersistenceLayer extends DelegatedPersistenceLayer_1.DelegatedPersistenceLayer {
    constructor(listenablePersistenceLayer) {
        super(listenablePersistenceLayer);
        this.id = 'delegated-listenable';
        this.listenablePersistenceLayer = listenablePersistenceLayer;
    }
    addEventListener(listener) {
        return this.listenablePersistenceLayer.addEventListener(listener);
    }
    addEventListenerForDoc(fingerprint, listener) {
        this.listenablePersistenceLayer.addEventListenerForDoc(fingerprint, listener);
    }
}
exports.DelegatedListenablePersistenceLayer = DelegatedListenablePersistenceLayer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVsZWdhdGVkTGlzdGVuYWJsZVBlcnNpc3RlbmNlTGF5ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJEZWxlZ2F0ZWRMaXN0ZW5hYmxlUGVyc2lzdGVuY2VMYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQW1CQSwyRUFBc0U7QUFPdEUsTUFBYSxtQ0FBb0MsU0FBUSxxREFBeUI7SUFNOUUsWUFBWSwwQkFBc0Q7UUFDOUQsS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFMdEIsT0FBRSxHQUFHLHNCQUFzQixDQUFDO1FBTXhDLElBQUksQ0FBQywwQkFBMEIsR0FBRywwQkFBMEIsQ0FBQztJQUNqRSxDQUFDO0lBRU0sZ0JBQWdCLENBQUMsUUFBa0M7UUFDdEQsT0FBTyxJQUFJLENBQUMsMEJBQTBCLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVNLHNCQUFzQixDQUFDLFdBQW1CLEVBQUUsUUFBa0M7UUFDakYsSUFBSSxDQUFDLDBCQUEwQixDQUFDLHNCQUFzQixDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNsRixDQUFDO0NBRUo7QUFuQkQsa0ZBbUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEYXRhc3RvcmUsIERvY01ldGFTbmFwc2hvdEV2ZW50LCBGaWxlTWV0YSwgRmlsZVJlZiwgSW5pdFJlc3VsdCxcbiAgICAgICAgRG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lciwgU25hcHNob3RSZXN1bHQsIERhdGFzdG9yZUlELFxuICAgICAgICBBYnN0cmFjdERhdGFzdG9yZSxcbiAgICBFcnJvckxpc3RlbmVyfSBmcm9tICcuL0RhdGFzdG9yZSc7XG5pbXBvcnQge0RpcmVjdG9yaWVzfSBmcm9tICcuL0RpcmVjdG9yaWVzJztcbmltcG9ydCB7RG9jTWV0YUZpbGVSZWYsIERvY01ldGFSZWZ9IGZyb20gJy4vRG9jTWV0YVJlZic7XG5pbXBvcnQge0RlbGV0ZVJlc3VsdH0gZnJvbSAnLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtQcmVjb25kaXRpb25zfSBmcm9tICcuLi9QcmVjb25kaXRpb25zJztcbmltcG9ydCB7QmFja2VuZH0gZnJvbSAnLi9CYWNrZW5kJztcbmltcG9ydCB7RG9jRmlsZU1ldGF9IGZyb20gJy4vRG9jRmlsZU1ldGEnO1xuaW1wb3J0IHtPcHRpb25hbH0gZnJvbSAnLi4vdXRpbC90cy9PcHRpb25hbCc7XG5pbXBvcnQge0lEb2NJbmZvLCBEb2NJbmZvfSBmcm9tICcuLi9tZXRhZGF0YS9Eb2NJbmZvJztcbmltcG9ydCB7RGF0YXN0b3JlTXV0YXRpb259IGZyb20gJy4vRGF0YXN0b3JlTXV0YXRpb24nO1xuaW1wb3J0IHtEYXRhc3RvcmVzfSBmcm9tICcuL0RhdGFzdG9yZXMnO1xuaW1wb3J0IHtQZXJzaXN0ZW5jZUxheWVyc30gZnJvbSAnLi9QZXJzaXN0ZW5jZUxheWVycyc7XG5pbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJ9IGZyb20gJy4vUGVyc2lzdGVuY2VMYXllcic7XG5pbXBvcnQge0RvY01ldGF9IGZyb20gJy4uL21ldGFkYXRhL0RvY01ldGEnO1xuaW1wb3J0IHtGaWxlSGFuZGxlfSBmcm9tICcuLi91dGlsL0ZpbGVzJztcbmltcG9ydCB7QWR2ZXJ0aXNpbmdQZXJzaXN0ZW5jZUxheWVyfSBmcm9tICcuL2FkdmVydGlzZXIvQWR2ZXJ0aXNpbmdQZXJzaXN0ZW5jZUxheWVyJztcbmltcG9ydCB7RGVsZWdhdGVkUGVyc2lzdGVuY2VMYXllcn0gZnJvbSAnLi9EZWxlZ2F0ZWRQZXJzaXN0ZW5jZUxheWVyJztcbmltcG9ydCB7TGlzdGVuYWJsZVBlcnNpc3RlbmNlTGF5ZXJ9IGZyb20gJy4vTGlzdGVuYWJsZVBlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtQZXJzaXN0ZW5jZUxheWVyTGlzdGVuZXJ9IGZyb20gJy4vUGVyc2lzdGVuY2VMYXllckxpc3RlbmVyJztcblxuLyoqXG4gKiBBIFBlcnNpc3RlbmNlTGF5ZXIgdGhhdCBqdXN0IGZvcndhcmRzIGV2ZW50cyB0byB0aGUgZ2l2ZW4gZGVsZWdhdGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBEZWxlZ2F0ZWRMaXN0ZW5hYmxlUGVyc2lzdGVuY2VMYXllciBleHRlbmRzIERlbGVnYXRlZFBlcnNpc3RlbmNlTGF5ZXIgaW1wbGVtZW50cyBMaXN0ZW5hYmxlUGVyc2lzdGVuY2VMYXllciB7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgaWQgPSAnZGVsZWdhdGVkLWxpc3RlbmFibGUnO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBsaXN0ZW5hYmxlUGVyc2lzdGVuY2VMYXllcjogTGlzdGVuYWJsZVBlcnNpc3RlbmNlTGF5ZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihsaXN0ZW5hYmxlUGVyc2lzdGVuY2VMYXllcjogTGlzdGVuYWJsZVBlcnNpc3RlbmNlTGF5ZXIpIHtcbiAgICAgICAgc3VwZXIobGlzdGVuYWJsZVBlcnNpc3RlbmNlTGF5ZXIpO1xuICAgICAgICB0aGlzLmxpc3RlbmFibGVQZXJzaXN0ZW5jZUxheWVyID0gbGlzdGVuYWJsZVBlcnNpc3RlbmNlTGF5ZXI7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZEV2ZW50TGlzdGVuZXIobGlzdGVuZXI6IFBlcnNpc3RlbmNlTGF5ZXJMaXN0ZW5lcikge1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0ZW5hYmxlUGVyc2lzdGVuY2VMYXllci5hZGRFdmVudExpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkRXZlbnRMaXN0ZW5lckZvckRvYyhmaW5nZXJwcmludDogc3RyaW5nLCBsaXN0ZW5lcjogUGVyc2lzdGVuY2VMYXllckxpc3RlbmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMubGlzdGVuYWJsZVBlcnNpc3RlbmNlTGF5ZXIuYWRkRXZlbnRMaXN0ZW5lckZvckRvYyhmaW5nZXJwcmludCwgbGlzdGVuZXIpO1xuICAgIH1cblxufVxuIl19