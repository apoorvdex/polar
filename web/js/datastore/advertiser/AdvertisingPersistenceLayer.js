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
const DocInfoAdvertiser_1 = require("./DocInfoAdvertiser");
const DocInfoAdvertisementListenerService_1 = require("./DocInfoAdvertisementListenerService");
const AbstractAdvertisingPersistenceLayer_1 = require("./AbstractAdvertisingPersistenceLayer");
class AdvertisingPersistenceLayer extends AbstractAdvertisingPersistenceLayer_1.AbstractAdvertisingPersistenceLayer {
    constructor(delegate) {
        super(delegate);
        this.docInfoAdvertisementListenerService = new DocInfoAdvertisementListenerService_1.DocInfoAdvertisementListenerService();
        this.id = 'advertising';
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.docInfoAdvertisementListenerService
                .addEventListener((adv) => this.onDocInfoAdvertisement(adv));
            this.docInfoAdvertisementListenerService.start();
            yield this.delegate.init();
        });
    }
    stop() {
        return __awaiter(this, void 0, void 0, function* () {
            this.docInfoAdvertisementListenerService.stop();
            return this.delegate.stop();
        });
    }
    broadcastEvent(event) {
        DocInfoAdvertiser_1.DocInfoAdvertiser.send({
            docInfo: event.docInfo,
            advertisementType: event.eventType
        });
    }
    onDocInfoAdvertisement(docInfoAdvertisement) {
        this.dispatchEvent({
            docMetaRef: {
                fingerprint: docInfoAdvertisement.docInfo.fingerprint,
                filename: docInfoAdvertisement.docInfo.filename,
                docInfo: docInfoAdvertisement.docInfo
            },
            docInfo: docInfoAdvertisement.docInfo,
            eventType: docInfoAdvertisement.advertisementType
        });
    }
}
exports.AdvertisingPersistenceLayer = AdvertisingPersistenceLayer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWR2ZXJ0aXNpbmdQZXJzaXN0ZW5jZUxheWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQWR2ZXJ0aXNpbmdQZXJzaXN0ZW5jZUxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQSwyREFBc0Q7QUFDdEQsK0ZBQTBGO0FBSTFGLCtGQUEwRjtBQVExRixNQUFhLDJCQUNULFNBQVEseUVBQW1DO0lBTzNDLFlBQVksUUFBMEI7UUFDbEMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBTEgsd0NBQW1DLEdBQUcsSUFBSSx5RUFBbUMsRUFBRSxDQUFDO1FBRWpGLE9BQUUsR0FBRyxhQUFhLENBQUM7SUFJbkMsQ0FBQztJQUVZLElBQUk7O1lBRWIsSUFBSSxDQUFDLG1DQUFtQztpQkFDbkMsZ0JBQWdCLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRWpFLElBQUksQ0FBQyxtQ0FBbUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUVqRCxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFL0IsQ0FBQztLQUFBO0lBRVksSUFBSTs7WUFDYixJQUFJLENBQUMsbUNBQW1DLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDaEQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hDLENBQUM7S0FBQTtJQUVTLGNBQWMsQ0FBQyxLQUE0QjtRQUVqRCxxQ0FBaUIsQ0FBQyxJQUFJLENBQUM7WUFDbkIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxTQUFTO1NBQ3JDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFTyxzQkFBc0IsQ0FBQyxvQkFBMEM7UUFFckUsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUVoQixVQUFVLEVBQWU7Z0JBQ3JCLFdBQVcsRUFBRSxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsV0FBVztnQkFDckQsUUFBUSxFQUFFLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxRQUFRO2dCQUMvQyxPQUFPLEVBQUUsb0JBQW9CLENBQUMsT0FBTzthQUN4QztZQUNELE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxPQUFPO1lBQ3JDLFNBQVMsRUFBRSxvQkFBb0IsQ0FBQyxpQkFBaUI7U0FFcEQsQ0FBQyxDQUFDO0lBRU4sQ0FBQztDQUVKO0FBckRELGtFQXFEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RG9jTWV0YVJlZn0gZnJvbSAnLi4vRG9jTWV0YVJlZic7XG5pbXBvcnQge0RvY0luZm9BZHZlcnRpc2VtZW50fSBmcm9tICcuL0RvY0luZm9BZHZlcnRpc2VtZW50JztcbmltcG9ydCB7RG9jSW5mb0FkdmVydGlzZXJ9IGZyb20gJy4vRG9jSW5mb0FkdmVydGlzZXInO1xuaW1wb3J0IHtEb2NJbmZvQWR2ZXJ0aXNlbWVudExpc3RlbmVyU2VydmljZX0gZnJvbSAnLi9Eb2NJbmZvQWR2ZXJ0aXNlbWVudExpc3RlbmVyU2VydmljZSc7XG5pbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJFdmVudH0gZnJvbSAnLi4vUGVyc2lzdGVuY2VMYXllckV2ZW50JztcbmltcG9ydCB7UGVyc2lzdGVuY2VMYXllcn0gZnJvbSAnLi4vUGVyc2lzdGVuY2VMYXllcic7XG5pbXBvcnQge0xpc3RlbmFibGVQZXJzaXN0ZW5jZUxheWVyfSBmcm9tICcuLi9MaXN0ZW5hYmxlUGVyc2lzdGVuY2VMYXllcic7XG5pbXBvcnQge0Fic3RyYWN0QWR2ZXJ0aXNpbmdQZXJzaXN0ZW5jZUxheWVyfSBmcm9tICcuL0Fic3RyYWN0QWR2ZXJ0aXNpbmdQZXJzaXN0ZW5jZUxheWVyJztcblxuLyoqXG4gKiBBIFBlcnNpc3RlbmNlTGF5ZXIgdGhhdCBhbGxvd3MgdGhlIHVzZXIgdG8gcmVjZWl2ZSBhZHZlcnRpc2VtZW50cyByZWdhcmRpbmdcbiAqIHVwZGF0ZXMgdG8gdGhlIFBlcnNpc3RlbmNlTGF5ZXIgZnJvbSBhbnkgd2luZG93IGluIHRoZSBzeXN0ZW0uXG4gKlxuICogQEVsZWN0cm9uUmVuZGVyZXJDb250ZXh0XG4gKi9cbmV4cG9ydCBjbGFzcyBBZHZlcnRpc2luZ1BlcnNpc3RlbmNlTGF5ZXJcbiAgICBleHRlbmRzIEFic3RyYWN0QWR2ZXJ0aXNpbmdQZXJzaXN0ZW5jZUxheWVyXG4gICAgaW1wbGVtZW50cyBMaXN0ZW5hYmxlUGVyc2lzdGVuY2VMYXllciB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGRvY0luZm9BZHZlcnRpc2VtZW50TGlzdGVuZXJTZXJ2aWNlID0gbmV3IERvY0luZm9BZHZlcnRpc2VtZW50TGlzdGVuZXJTZXJ2aWNlKCk7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgaWQgPSAnYWR2ZXJ0aXNpbmcnO1xuXG4gICAgY29uc3RydWN0b3IoZGVsZWdhdGU6IFBlcnNpc3RlbmNlTGF5ZXIpIHtcbiAgICAgICAgc3VwZXIoZGVsZWdhdGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIHRoaXMuZG9jSW5mb0FkdmVydGlzZW1lbnRMaXN0ZW5lclNlcnZpY2VcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKChhZHYpID0+IHRoaXMub25Eb2NJbmZvQWR2ZXJ0aXNlbWVudChhZHYpKTtcblxuICAgICAgICB0aGlzLmRvY0luZm9BZHZlcnRpc2VtZW50TGlzdGVuZXJTZXJ2aWNlLnN0YXJ0KCk7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5kZWxlZ2F0ZS5pbml0KCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc3RvcCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdGhpcy5kb2NJbmZvQWR2ZXJ0aXNlbWVudExpc3RlbmVyU2VydmljZS5zdG9wKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLnN0b3AoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYnJvYWRjYXN0RXZlbnQoZXZlbnQ6IFBlcnNpc3RlbmNlTGF5ZXJFdmVudCk6IHZvaWQge1xuXG4gICAgICAgIERvY0luZm9BZHZlcnRpc2VyLnNlbmQoe1xuICAgICAgICAgICAgZG9jSW5mbzogZXZlbnQuZG9jSW5mbyxcbiAgICAgICAgICAgIGFkdmVydGlzZW1lbnRUeXBlOiBldmVudC5ldmVudFR5cGVcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRG9jSW5mb0FkdmVydGlzZW1lbnQoZG9jSW5mb0FkdmVydGlzZW1lbnQ6IERvY0luZm9BZHZlcnRpc2VtZW50KSB7XG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KHtcblxuICAgICAgICAgICBkb2NNZXRhUmVmOiA8RG9jTWV0YVJlZj4ge1xuICAgICAgICAgICAgICAgZmluZ2VycHJpbnQ6IGRvY0luZm9BZHZlcnRpc2VtZW50LmRvY0luZm8uZmluZ2VycHJpbnQsXG4gICAgICAgICAgICAgICBmaWxlbmFtZTogZG9jSW5mb0FkdmVydGlzZW1lbnQuZG9jSW5mby5maWxlbmFtZSxcbiAgICAgICAgICAgICAgIGRvY0luZm86IGRvY0luZm9BZHZlcnRpc2VtZW50LmRvY0luZm9cbiAgICAgICAgICAgfSxcbiAgICAgICAgICAgZG9jSW5mbzogZG9jSW5mb0FkdmVydGlzZW1lbnQuZG9jSW5mbyxcbiAgICAgICAgICAgZXZlbnRUeXBlOiBkb2NJbmZvQWR2ZXJ0aXNlbWVudC5hZHZlcnRpc2VtZW50VHlwZVxuXG4gICAgICAgfSk7XG5cbiAgICB9XG5cbn1cbiJdfQ==