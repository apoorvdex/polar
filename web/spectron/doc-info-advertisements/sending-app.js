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
const DocMetas_1 = require("../../js/metadata/DocMetas");
const AdvertisingPersistenceLayer_1 = require("../../js/datastore/advertiser/AdvertisingPersistenceLayer");
const MemoryDatastore_1 = require("../../js/datastore/MemoryDatastore");
const DefaultPersistenceLayer_1 = require("../../js/datastore/DefaultPersistenceLayer");
const Assertions_1 = require("../../js/test/Assertions");
const TestingTime_1 = require("../../js/test/TestingTime");
const testing_1 = require("./testing");
const log = Logger_1.Logger.create();
TestingTime_1.TestingTime.freeze();
SpectronRenderer_1.SpectronRenderer.run(() => __awaiter(this, void 0, void 0, function* () {
    log.info("Sending advertisement now.");
    const docMeta = DocMetas_1.MockDocMetas.createWithinInitialPagemarks('0x0001', 1);
    const memoryDatastore = new MemoryDatastore_1.MemoryDatastore();
    const persistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(memoryDatastore);
    const advertisingPersistenceLayer = new AdvertisingPersistenceLayer_1.AdvertisingPersistenceLayer(persistenceLayer);
    yield advertisingPersistenceLayer.init();
    const expected = {
        "progress": 100,
        "pagemarkType": "SINGLE_COLUMN",
        "properties": {},
        "tags": {},
        "archived": false,
        "flagged": false,
        "nrPages": 1,
        "fingerprint": "0x0001",
        "added": "2012-03-02T11:38:49.321Z",
        "readingPerDay": {
            "2012-03-02": 1
        }
    };
    Assertions_1.assertJSON(testing_1.canonicalize(docMeta.docInfo), testing_1.canonicalize(expected));
    yield advertisingPersistenceLayer.writeDocMeta(docMeta);
    console.log("Sender SUCCESSFUL");
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZGluZy1hcHAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZW5kaW5nLWFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUVBQWdFO0FBQ2hFLG1EQUE4QztBQUM5Qyx5REFBd0Q7QUFDeEQsMkdBQXNHO0FBQ3RHLHdFQUFtRTtBQUNuRSx3RkFBbUY7QUFDbkYseURBQW9EO0FBQ3BELDJEQUFzRDtBQUV0RCx1Q0FBdUM7QUFFdkMsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLHlCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFckIsbUNBQWdCLENBQUMsR0FBRyxDQUFDLEdBQVMsRUFBRTtJQUU1QixHQUFHLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUM7SUFFdkMsTUFBTSxPQUFPLEdBQUcsdUJBQVksQ0FBQyw0QkFBNEIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFdkUsTUFBTSxlQUFlLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7SUFFOUMsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLGlEQUF1QixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBRXRFLE1BQU0sMkJBQTJCLEdBQUcsSUFBSSx5REFBMkIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBRXRGLE1BQU0sMkJBQTJCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFekMsTUFBTSxRQUFRLEdBQUc7UUFDYixVQUFVLEVBQUUsR0FBRztRQUNmLGNBQWMsRUFBRSxlQUFlO1FBQy9CLFlBQVksRUFBRSxFQUFFO1FBQ2hCLE1BQU0sRUFBRSxFQUFFO1FBQ1YsVUFBVSxFQUFFLEtBQUs7UUFDakIsU0FBUyxFQUFFLEtBQUs7UUFDaEIsU0FBUyxFQUFFLENBQUM7UUFDWixhQUFhLEVBQUUsUUFBUTtRQUN2QixPQUFPLEVBQUUsMEJBQTBCO1FBQ25DLGVBQWUsRUFBRTtZQUNiLFlBQVksRUFBRSxDQUFDO1NBQ2xCO0tBQ0osQ0FBQztJQUVGLHVCQUFVLENBQUMsc0JBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsc0JBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRWxFLE1BQU0sMkJBQTJCLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRXhELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUVyQyxDQUFDLENBQUEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTcGVjdHJvblJlbmRlcmVyfSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uUmVuZGVyZXInO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uLy4uL2pzL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtNb2NrRG9jTWV0YXN9IGZyb20gJy4uLy4uL2pzL21ldGFkYXRhL0RvY01ldGFzJztcbmltcG9ydCB7QWR2ZXJ0aXNpbmdQZXJzaXN0ZW5jZUxheWVyfSBmcm9tICcuLi8uLi9qcy9kYXRhc3RvcmUvYWR2ZXJ0aXNlci9BZHZlcnRpc2luZ1BlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtNZW1vcnlEYXRhc3RvcmV9IGZyb20gJy4uLy4uL2pzL2RhdGFzdG9yZS9NZW1vcnlEYXRhc3RvcmUnO1xuaW1wb3J0IHtEZWZhdWx0UGVyc2lzdGVuY2VMYXllcn0gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL0RlZmF1bHRQZXJzaXN0ZW5jZUxheWVyJztcbmltcG9ydCB7YXNzZXJ0SlNPTn0gZnJvbSAnLi4vLi4vanMvdGVzdC9Bc3NlcnRpb25zJztcbmltcG9ydCB7VGVzdGluZ1RpbWV9IGZyb20gJy4uLy4uL2pzL3Rlc3QvVGVzdGluZ1RpbWUnO1xuaW1wb3J0IHtEaWN0aW9uYXJpZXN9IGZyb20gJy4uLy4uL2pzL3V0aWwvRGljdGlvbmFyaWVzJztcbmltcG9ydCB7Y2Fub25pY2FsaXplfSBmcm9tICcuL3Rlc3RpbmcnO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cblRlc3RpbmdUaW1lLmZyZWV6ZSgpO1xuXG5TcGVjdHJvblJlbmRlcmVyLnJ1bihhc3luYyAoKSA9PiB7XG5cbiAgICBsb2cuaW5mbyhcIlNlbmRpbmcgYWR2ZXJ0aXNlbWVudCBub3cuXCIpO1xuXG4gICAgY29uc3QgZG9jTWV0YSA9IE1vY2tEb2NNZXRhcy5jcmVhdGVXaXRoaW5Jbml0aWFsUGFnZW1hcmtzKCcweDAwMDEnLCAxKTtcblxuICAgIGNvbnN0IG1lbW9yeURhdGFzdG9yZSA9IG5ldyBNZW1vcnlEYXRhc3RvcmUoKTtcblxuICAgIGNvbnN0IHBlcnNpc3RlbmNlTGF5ZXIgPSBuZXcgRGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXIobWVtb3J5RGF0YXN0b3JlKTtcblxuICAgIGNvbnN0IGFkdmVydGlzaW5nUGVyc2lzdGVuY2VMYXllciA9IG5ldyBBZHZlcnRpc2luZ1BlcnNpc3RlbmNlTGF5ZXIocGVyc2lzdGVuY2VMYXllcik7XG5cbiAgICBhd2FpdCBhZHZlcnRpc2luZ1BlcnNpc3RlbmNlTGF5ZXIuaW5pdCgpO1xuXG4gICAgY29uc3QgZXhwZWN0ZWQgPSB7XG4gICAgICAgIFwicHJvZ3Jlc3NcIjogMTAwLFxuICAgICAgICBcInBhZ2VtYXJrVHlwZVwiOiBcIlNJTkdMRV9DT0xVTU5cIixcbiAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHt9LFxuICAgICAgICBcInRhZ3NcIjoge30sXG4gICAgICAgIFwiYXJjaGl2ZWRcIjogZmFsc2UsXG4gICAgICAgIFwiZmxhZ2dlZFwiOiBmYWxzZSxcbiAgICAgICAgXCJuclBhZ2VzXCI6IDEsXG4gICAgICAgIFwiZmluZ2VycHJpbnRcIjogXCIweDAwMDFcIixcbiAgICAgICAgXCJhZGRlZFwiOiBcIjIwMTItMDMtMDJUMTE6Mzg6NDkuMzIxWlwiLFxuICAgICAgICBcInJlYWRpbmdQZXJEYXlcIjoge1xuICAgICAgICAgICAgXCIyMDEyLTAzLTAyXCI6IDFcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBhc3NlcnRKU09OKGNhbm9uaWNhbGl6ZShkb2NNZXRhLmRvY0luZm8pLCBjYW5vbmljYWxpemUoZXhwZWN0ZWQpKTtcblxuICAgIGF3YWl0IGFkdmVydGlzaW5nUGVyc2lzdGVuY2VMYXllci53cml0ZURvY01ldGEoZG9jTWV0YSk7XG5cbiAgICBjb25zb2xlLmxvZyhcIlNlbmRlciBTVUNDRVNTRlVMXCIpO1xuXG59KTtcbiJdfQ==