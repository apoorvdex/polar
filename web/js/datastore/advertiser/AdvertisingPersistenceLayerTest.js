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
const MemoryDatastore_1 = require("../MemoryDatastore");
const DocMetas_1 = require("../../metadata/DocMetas");
const Assertions_1 = require("../../test/Assertions");
const MockAdvertisingPersistenceLayer_1 = require("./MockAdvertisingPersistenceLayer");
const TestingTime_1 = require("../../test/TestingTime");
const Dictionaries_1 = require("../../util/Dictionaries");
describe('AdvertisingPersistenceLayer', function () {
    it("addEventListenerForDoc", function () {
        return __awaiter(this, void 0, void 0, function* () {
            TestingTime_1.TestingTime.freeze();
            const defaultPersistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(new MemoryDatastore_1.MemoryDatastore());
            const advertisingPersistenceLayer = new MockAdvertisingPersistenceLayer_1.MockAdvertisingPersistenceLayer(defaultPersistenceLayer);
            const docMeta0 = DocMetas_1.MockDocMetas.createWithinInitialPagemarks('0x001', 1);
            const docMeta1 = DocMetas_1.MockDocMetas.createWithinInitialPagemarks('0x002', 1);
            const advertised = [];
            yield advertisingPersistenceLayer.init();
            advertisingPersistenceLayer.addEventListenerForDoc('0x001', event => {
                advertised.push(event.docInfo);
            });
            yield advertisingPersistenceLayer.writeDocMeta(docMeta0);
            yield advertisingPersistenceLayer.writeDocMeta(docMeta1);
            advertised[0].uuid = '...';
            const expected = [
                {
                    "progress": 100,
                    "pagemarkType": "SINGLE_COLUMN",
                    "properties": {},
                    "readingPerDay": {
                        "2012-03-02": 1
                    },
                    "archived": false,
                    "flagged": false,
                    "tags": {},
                    "nrPages": 1,
                    "fingerprint": "0x001",
                    "added": "2012-03-02T11:38:49.321Z",
                    "lastUpdated": "2012-03-02T11:38:49.321Z",
                    "nrComments": 0,
                    "nrNotes": 0,
                    "nrFlashcards": 0,
                    "nrTextHighlights": 0,
                    "nrAreaHighlights": 0,
                    "uuid": "...",
                    "nrAnnotations": 0
                }
            ];
            Assertions_1.assertJSON(Dictionaries_1.Dictionaries.sorted(advertised), Dictionaries_1.Dictionaries.sorted(expected));
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWR2ZXJ0aXNpbmdQZXJzaXN0ZW5jZUxheWVyVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFkdmVydGlzaW5nUGVyc2lzdGVuY2VMYXllclRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHdFQUFtRTtBQUNuRSx3REFBbUQ7QUFDbkQsc0RBQXFEO0FBRXJELHNEQUFpRDtBQUNqRCx1RkFBa0Y7QUFDbEYsd0RBQW1EO0FBQ25ELDBEQUFxRDtBQUVyRCxRQUFRLENBQUMsNkJBQTZCLEVBQUU7SUFFcEMsRUFBRSxDQUFDLHdCQUF3QixFQUFFOztZQUV6Qix5QkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRXJCLE1BQU0sdUJBQXVCLEdBQ3ZCLElBQUksaURBQXVCLENBQUMsSUFBSSxpQ0FBZSxFQUFFLENBQUMsQ0FBQztZQUV6RCxNQUFNLDJCQUEyQixHQUMzQixJQUFJLGlFQUErQixDQUFDLHVCQUF1QixDQUFDLENBQUM7WUFFbkUsTUFBTSxRQUFRLEdBQUcsdUJBQVksQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkUsTUFBTSxRQUFRLEdBQUcsdUJBQVksQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFdkUsTUFBTSxVQUFVLEdBQWUsRUFBRSxDQUFDO1lBRWxDLE1BQU0sMkJBQTJCLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFekMsMkJBQTJCLENBQUMsc0JBQXNCLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFO2dCQUNoRSxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNuQyxDQUFDLENBQUMsQ0FBQztZQUVILE1BQU0sMkJBQTJCLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3pELE1BQU0sMkJBQTJCLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXpELFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1lBRTNCLE1BQU0sUUFBUSxHQUFlO2dCQUNkO29CQUNQLFVBQVUsRUFBRSxHQUFHO29CQUNmLGNBQWMsRUFBRSxlQUFlO29CQUMvQixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsZUFBZSxFQUFFO3dCQUNiLFlBQVksRUFBRSxDQUFDO3FCQUNsQjtvQkFDRCxVQUFVLEVBQUUsS0FBSztvQkFDakIsU0FBUyxFQUFFLEtBQUs7b0JBQ2hCLE1BQU0sRUFBRSxFQUFFO29CQUNWLFNBQVMsRUFBRSxDQUFDO29CQUNaLGFBQWEsRUFBRSxPQUFPO29CQUN0QixPQUFPLEVBQUUsMEJBQTBCO29CQUNuQyxhQUFhLEVBQUUsMEJBQTBCO29CQUN6QyxZQUFZLEVBQUUsQ0FBQztvQkFDZixTQUFTLEVBQUUsQ0FBQztvQkFDWixjQUFjLEVBQUUsQ0FBQztvQkFDakIsa0JBQWtCLEVBQUUsQ0FBQztvQkFDckIsa0JBQWtCLEVBQUUsQ0FBQztvQkFDckIsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsZUFBZSxFQUFFLENBQUM7aUJBQ3JCO2FBQ0osQ0FBQztZQUVGLHVCQUFVLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsMkJBQVksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUUvRSxDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FkdmVydGlzaW5nUGVyc2lzdGVuY2VMYXllcn0gZnJvbSAnLi9BZHZlcnRpc2luZ1BlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtEZWZhdWx0UGVyc2lzdGVuY2VMYXllcn0gZnJvbSAnLi4vRGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtNZW1vcnlEYXRhc3RvcmV9IGZyb20gJy4uL01lbW9yeURhdGFzdG9yZSc7XG5pbXBvcnQge01vY2tEb2NNZXRhc30gZnJvbSAnLi4vLi4vbWV0YWRhdGEvRG9jTWV0YXMnO1xuaW1wb3J0IHtJRG9jSW5mb30gZnJvbSAnLi4vLi4vbWV0YWRhdGEvRG9jSW5mbyc7XG5pbXBvcnQge2Fzc2VydEpTT059IGZyb20gJy4uLy4uL3Rlc3QvQXNzZXJ0aW9ucyc7XG5pbXBvcnQge01vY2tBZHZlcnRpc2luZ1BlcnNpc3RlbmNlTGF5ZXJ9IGZyb20gJy4vTW9ja0FkdmVydGlzaW5nUGVyc2lzdGVuY2VMYXllcic7XG5pbXBvcnQge1Rlc3RpbmdUaW1lfSBmcm9tICcuLi8uLi90ZXN0L1Rlc3RpbmdUaW1lJztcbmltcG9ydCB7RGljdGlvbmFyaWVzfSBmcm9tICcuLi8uLi91dGlsL0RpY3Rpb25hcmllcyc7XG5cbmRlc2NyaWJlKCdBZHZlcnRpc2luZ1BlcnNpc3RlbmNlTGF5ZXInLCBmdW5jdGlvbigpIHtcblxuICAgIGl0KFwiYWRkRXZlbnRMaXN0ZW5lckZvckRvY1wiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICBUZXN0aW5nVGltZS5mcmVlemUoKTtcblxuICAgICAgICBjb25zdCBkZWZhdWx0UGVyc2lzdGVuY2VMYXllclxuICAgICAgICAgICAgPSBuZXcgRGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXIobmV3IE1lbW9yeURhdGFzdG9yZSgpKTtcblxuICAgICAgICBjb25zdCBhZHZlcnRpc2luZ1BlcnNpc3RlbmNlTGF5ZXJcbiAgICAgICAgICAgID0gbmV3IE1vY2tBZHZlcnRpc2luZ1BlcnNpc3RlbmNlTGF5ZXIoZGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXIpO1xuXG4gICAgICAgIGNvbnN0IGRvY01ldGEwID0gTW9ja0RvY01ldGFzLmNyZWF0ZVdpdGhpbkluaXRpYWxQYWdlbWFya3MoJzB4MDAxJywgMSk7XG4gICAgICAgIGNvbnN0IGRvY01ldGExID0gTW9ja0RvY01ldGFzLmNyZWF0ZVdpdGhpbkluaXRpYWxQYWdlbWFya3MoJzB4MDAyJywgMSk7XG5cbiAgICAgICAgY29uc3QgYWR2ZXJ0aXNlZDogSURvY0luZm9bXSA9IFtdO1xuXG4gICAgICAgIGF3YWl0IGFkdmVydGlzaW5nUGVyc2lzdGVuY2VMYXllci5pbml0KCk7XG5cbiAgICAgICAgYWR2ZXJ0aXNpbmdQZXJzaXN0ZW5jZUxheWVyLmFkZEV2ZW50TGlzdGVuZXJGb3JEb2MoJzB4MDAxJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgYWR2ZXJ0aXNlZC5wdXNoKGV2ZW50LmRvY0luZm8pO1xuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCBhZHZlcnRpc2luZ1BlcnNpc3RlbmNlTGF5ZXIud3JpdGVEb2NNZXRhKGRvY01ldGEwKTtcbiAgICAgICAgYXdhaXQgYWR2ZXJ0aXNpbmdQZXJzaXN0ZW5jZUxheWVyLndyaXRlRG9jTWV0YShkb2NNZXRhMSk7XG5cbiAgICAgICAgYWR2ZXJ0aXNlZFswXS51dWlkID0gJy4uLic7XG5cbiAgICAgICAgY29uc3QgZXhwZWN0ZWQ6IElEb2NJbmZvW10gPSBbXG4gICAgICAgICAgICA8SURvY0luZm8+IHtcbiAgICAgICAgICAgICAgICBcInByb2dyZXNzXCI6IDEwMCxcbiAgICAgICAgICAgICAgICBcInBhZ2VtYXJrVHlwZVwiOiBcIlNJTkdMRV9DT0xVTU5cIixcbiAgICAgICAgICAgICAgICBcInByb3BlcnRpZXNcIjoge30sXG4gICAgICAgICAgICAgICAgXCJyZWFkaW5nUGVyRGF5XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCIyMDEyLTAzLTAyXCI6IDFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiYXJjaGl2ZWRcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJmbGFnZ2VkXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwidGFnc1wiOiB7fSxcbiAgICAgICAgICAgICAgICBcIm5yUGFnZXNcIjogMSxcbiAgICAgICAgICAgICAgICBcImZpbmdlcnByaW50XCI6IFwiMHgwMDFcIixcbiAgICAgICAgICAgICAgICBcImFkZGVkXCI6IFwiMjAxMi0wMy0wMlQxMTozODo0OS4zMjFaXCIsXG4gICAgICAgICAgICAgICAgXCJsYXN0VXBkYXRlZFwiOiBcIjIwMTItMDMtMDJUMTE6Mzg6NDkuMzIxWlwiLFxuICAgICAgICAgICAgICAgIFwibnJDb21tZW50c1wiOiAwLFxuICAgICAgICAgICAgICAgIFwibnJOb3Rlc1wiOiAwLFxuICAgICAgICAgICAgICAgIFwibnJGbGFzaGNhcmRzXCI6IDAsXG4gICAgICAgICAgICAgICAgXCJuclRleHRIaWdobGlnaHRzXCI6IDAsXG4gICAgICAgICAgICAgICAgXCJuckFyZWFIaWdobGlnaHRzXCI6IDAsXG4gICAgICAgICAgICAgICAgXCJ1dWlkXCI6IFwiLi4uXCIsXG4gICAgICAgICAgICAgICAgXCJuckFubm90YXRpb25zXCI6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcblxuICAgICAgICBhc3NlcnRKU09OKERpY3Rpb25hcmllcy5zb3J0ZWQoYWR2ZXJ0aXNlZCksIERpY3Rpb25hcmllcy5zb3J0ZWQoZXhwZWN0ZWQpKTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==