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
const SpectronRenderer_1 = require("../../js/test/SpectronRenderer");
const Logger_1 = require("../../js/logger/Logger");
const MemoryDatastore_1 = require("../../js/datastore/MemoryDatastore");
const DefaultPersistenceLayer_1 = require("../../js/datastore/DefaultPersistenceLayer");
const AdvertisingPersistenceLayer_1 = require("../../js/datastore/advertiser/AdvertisingPersistenceLayer");
const Assertions_1 = require("../../js/test/Assertions");
const testing_1 = require("./testing");
const log = Logger_1.Logger.create();
SpectronRenderer_1.SpectronRenderer.run((state) => __awaiter(this, void 0, void 0, function* () {
    const memoryDatastore = new MemoryDatastore_1.MemoryDatastore();
    const persistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(memoryDatastore);
    const advertisingPersistenceLayer = new AdvertisingPersistenceLayer_1.AdvertisingPersistenceLayer(persistenceLayer);
    yield advertisingPersistenceLayer.init();
    advertisingPersistenceLayer.addEventListener(adv => {
        console.log("Got the advertisement: ", adv);
        const expected = {
            "added": "2012-03-02T11:38:49.321Z",
            "archived": false,
            "fingerprint": "0x0001",
            "flagged": false,
            "lastUpdated": "2012-03-02T11:38:49.321Z",
            "nrAnnotations": 0,
            "nrAreaHighlights": 0,
            "nrComments": 0,
            "nrFlashcards": 0,
            "nrNotes": 0,
            "nrPages": 1,
            "nrTextHighlights": 0,
            "pagemarkType": "SINGLE_COLUMN",
            "progress": 100,
            "properties": {},
            "tags": {},
            "uuid": "4743a590-645c-11e1-809e-478d48422a2c",
            "readingPerDay": {
                "2012-03-02": 1
            }
        };
        Assertions_1.assertJSON(testing_1.canonicalize(adv.docInfo), testing_1.canonicalize(expected));
        console.log("Receiver SUCCESSFUL");
        state.testResultWriter.write(true)
            .catch((err) => {
            log.error("Could not receive event.", err);
        });
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjZWl2aW5nLWFwcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlY2VpdmluZy1hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFFQUFnRTtBQUNoRSxtREFBOEM7QUFDOUMsd0VBQW1FO0FBQ25FLHdGQUFtRjtBQUNuRiwyR0FBc0c7QUFDdEcseURBQW9EO0FBRXBELHVDQUF1QztBQUV2QyxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsbUNBQWdCLENBQUMsR0FBRyxDQUFDLENBQU8sS0FBSyxFQUFFLEVBQUU7SUFFakMsTUFBTSxlQUFlLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7SUFFOUMsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLGlEQUF1QixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBRXRFLE1BQU0sMkJBQTJCLEdBQUcsSUFBSSx5REFBMkIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBRXRGLE1BQU0sMkJBQTJCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFekMsMkJBQTJCLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFFL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUU1QyxNQUFNLFFBQVEsR0FBRztZQUNiLE9BQU8sRUFBRSwwQkFBMEI7WUFDbkMsVUFBVSxFQUFFLEtBQUs7WUFDakIsYUFBYSxFQUFFLFFBQVE7WUFDdkIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsYUFBYSxFQUFFLDBCQUEwQjtZQUN6QyxlQUFlLEVBQUUsQ0FBQztZQUNsQixrQkFBa0IsRUFBRSxDQUFDO1lBQ3JCLFlBQVksRUFBRSxDQUFDO1lBQ2YsY0FBYyxFQUFFLENBQUM7WUFDakIsU0FBUyxFQUFFLENBQUM7WUFDWixTQUFTLEVBQUUsQ0FBQztZQUNaLGtCQUFrQixFQUFFLENBQUM7WUFDckIsY0FBYyxFQUFFLGVBQWU7WUFDL0IsVUFBVSxFQUFFLEdBQUc7WUFDZixZQUFZLEVBQUUsRUFBRTtZQUNoQixNQUFNLEVBQUUsRUFBRTtZQUNWLE1BQU0sRUFBRSxzQ0FBc0M7WUFDOUMsZUFBZSxFQUFFO2dCQUNiLFlBQVksRUFBRSxDQUFDO2FBQ2xCO1NBRUosQ0FBQztRQUVGLHVCQUFVLENBQUMsc0JBQVksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsc0JBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBRTlELE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUVuQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzthQUM3QixLQUFLLENBQUMsQ0FBQyxHQUFVLEVBQUUsRUFBRTtZQUNsQixHQUFHLENBQUMsS0FBSyxDQUFDLDBCQUEwQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFDO0lBRVgsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTcGVjdHJvblJlbmRlcmVyfSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uUmVuZGVyZXInO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uLy4uL2pzL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtNZW1vcnlEYXRhc3RvcmV9IGZyb20gJy4uLy4uL2pzL2RhdGFzdG9yZS9NZW1vcnlEYXRhc3RvcmUnO1xuaW1wb3J0IHtEZWZhdWx0UGVyc2lzdGVuY2VMYXllcn0gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL0RlZmF1bHRQZXJzaXN0ZW5jZUxheWVyJztcbmltcG9ydCB7QWR2ZXJ0aXNpbmdQZXJzaXN0ZW5jZUxheWVyfSBmcm9tICcuLi8uLi9qcy9kYXRhc3RvcmUvYWR2ZXJ0aXNlci9BZHZlcnRpc2luZ1BlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHthc3NlcnRKU09OfSBmcm9tICcuLi8uLi9qcy90ZXN0L0Fzc2VydGlvbnMnO1xuaW1wb3J0IHtEaWN0aW9uYXJpZXN9IGZyb20gJy4uLy4uL2pzL3V0aWwvRGljdGlvbmFyaWVzJztcbmltcG9ydCB7Y2Fub25pY2FsaXplfSBmcm9tICcuL3Rlc3RpbmcnO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cblNwZWN0cm9uUmVuZGVyZXIucnVuKGFzeW5jIChzdGF0ZSkgPT4ge1xuXG4gICAgY29uc3QgbWVtb3J5RGF0YXN0b3JlID0gbmV3IE1lbW9yeURhdGFzdG9yZSgpO1xuXG4gICAgY29uc3QgcGVyc2lzdGVuY2VMYXllciA9IG5ldyBEZWZhdWx0UGVyc2lzdGVuY2VMYXllcihtZW1vcnlEYXRhc3RvcmUpO1xuXG4gICAgY29uc3QgYWR2ZXJ0aXNpbmdQZXJzaXN0ZW5jZUxheWVyID0gbmV3IEFkdmVydGlzaW5nUGVyc2lzdGVuY2VMYXllcihwZXJzaXN0ZW5jZUxheWVyKTtcblxuICAgIGF3YWl0IGFkdmVydGlzaW5nUGVyc2lzdGVuY2VMYXllci5pbml0KCk7XG5cbiAgICBhZHZlcnRpc2luZ1BlcnNpc3RlbmNlTGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcihhZHYgPT4ge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR290IHRoZSBhZHZlcnRpc2VtZW50OiBcIiwgYWR2KTtcblxuICAgICAgICBjb25zdCBleHBlY3RlZCA9IHtcbiAgICAgICAgICAgIFwiYWRkZWRcIjogXCIyMDEyLTAzLTAyVDExOjM4OjQ5LjMyMVpcIixcbiAgICAgICAgICAgIFwiYXJjaGl2ZWRcIjogZmFsc2UsXG4gICAgICAgICAgICBcImZpbmdlcnByaW50XCI6IFwiMHgwMDAxXCIsXG4gICAgICAgICAgICBcImZsYWdnZWRcIjogZmFsc2UsXG4gICAgICAgICAgICBcImxhc3RVcGRhdGVkXCI6IFwiMjAxMi0wMy0wMlQxMTozODo0OS4zMjFaXCIsXG4gICAgICAgICAgICBcIm5yQW5ub3RhdGlvbnNcIjogMCxcbiAgICAgICAgICAgIFwibnJBcmVhSGlnaGxpZ2h0c1wiOiAwLFxuICAgICAgICAgICAgXCJuckNvbW1lbnRzXCI6IDAsXG4gICAgICAgICAgICBcIm5yRmxhc2hjYXJkc1wiOiAwLFxuICAgICAgICAgICAgXCJuck5vdGVzXCI6IDAsXG4gICAgICAgICAgICBcIm5yUGFnZXNcIjogMSxcbiAgICAgICAgICAgIFwibnJUZXh0SGlnaGxpZ2h0c1wiOiAwLFxuICAgICAgICAgICAgXCJwYWdlbWFya1R5cGVcIjogXCJTSU5HTEVfQ09MVU1OXCIsXG4gICAgICAgICAgICBcInByb2dyZXNzXCI6IDEwMCxcbiAgICAgICAgICAgIFwicHJvcGVydGllc1wiOiB7fSxcbiAgICAgICAgICAgIFwidGFnc1wiOiB7fSxcbiAgICAgICAgICAgIFwidXVpZFwiOiBcIjQ3NDNhNTkwLTY0NWMtMTFlMS04MDllLTQ3OGQ0ODQyMmEyY1wiLFxuICAgICAgICAgICAgXCJyZWFkaW5nUGVyRGF5XCI6IHtcbiAgICAgICAgICAgICAgICBcIjIwMTItMDMtMDJcIjogMVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgYXNzZXJ0SlNPTihjYW5vbmljYWxpemUoYWR2LmRvY0luZm8pLCBjYW5vbmljYWxpemUoZXhwZWN0ZWQpKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIlJlY2VpdmVyIFNVQ0NFU1NGVUxcIik7XG5cbiAgICAgICAgc3RhdGUudGVzdFJlc3VsdFdyaXRlci53cml0ZSh0cnVlKVxuICAgICAgICAgICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgbG9nLmVycm9yKFwiQ291bGQgbm90IHJlY2VpdmUgZXZlbnQuXCIsIGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==