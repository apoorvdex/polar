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
const chai_1 = require("chai");
const DiskDatastore_1 = require("../datastore/DiskDatastore");
const CreatePagemarksForPageRanges_1 = require("./CreatePagemarksForPageRanges");
const DefaultPersistenceLayer_1 = require("../datastore/DefaultPersistenceLayer");
xdescribe('Create ranges', function () {
    xdescribe('with real data', function () {
        xit("my bitcoin book.", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const datastore = new DiskDatastore_1.DiskDatastore();
                const persistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(datastore);
                yield persistenceLayer.init();
                const fingerprint = "65393761393531623135393737626562666234373866653365396535313036623631346666376461623662383239616439666637353064393132643133353030";
                const docMeta = yield persistenceLayer.getDocMeta(fingerprint);
                chai_1.assert.ok(docMeta !== undefined);
                const createPagemarksForPageRanges = new CreatePagemarksForPageRanges_1.CreatePagemarksForPageRanges(docMeta);
                createPagemarksForPageRanges.execute({ range: { start: 1, end: 204 } });
                yield persistenceLayer.write(fingerprint, docMeta);
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlUGFnZW1hcmtzRm9yUGFnZVJhbmdlc1Rlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDcmVhdGVQYWdlbWFya3NGb3JQYWdlUmFuZ2VzVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0JBQTRCO0FBQzVCLDhEQUF5RDtBQUN6RCxpRkFBNEU7QUFDNUUsa0ZBQTZFO0FBRTdFLFNBQVMsQ0FBQyxlQUFlLEVBQUU7SUFFdkIsU0FBUyxDQUFDLGdCQUFnQixFQUFFO1FBRXhCLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRTs7Z0JBRXBCLE1BQU0sU0FBUyxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO2dCQUN0QyxNQUFNLGdCQUFnQixHQUFHLElBQUksaURBQXVCLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBRWhFLE1BQU0sZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBRTlCLE1BQU0sV0FBVyxHQUFHLGtJQUFrSSxDQUFDO2dCQUV2SixNQUFNLE9BQU8sR0FBRyxNQUFNLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFFL0QsYUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDLENBQUE7Z0JBRWhDLE1BQU0sNEJBQTRCLEdBQUcsSUFBSSwyREFBNEIsQ0FBQyxPQUFRLENBQUMsQ0FBQztnQkFFaEYsNEJBQTRCLENBQUMsT0FBTyxDQUFDLEVBQUMsS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFDLEVBQUMsQ0FBQyxDQUFDO2dCQUVwRSxNQUFNLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsT0FBUSxDQUFDLENBQUM7WUFVeEQsQ0FBQztTQUFBLENBQUMsQ0FBQztJQUVQLENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQge0Rpc2tEYXRhc3RvcmV9IGZyb20gJy4uL2RhdGFzdG9yZS9EaXNrRGF0YXN0b3JlJztcbmltcG9ydCB7Q3JlYXRlUGFnZW1hcmtzRm9yUGFnZVJhbmdlc30gZnJvbSAnLi9DcmVhdGVQYWdlbWFya3NGb3JQYWdlUmFuZ2VzJztcbmltcG9ydCB7RGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXJ9IGZyb20gJy4uL2RhdGFzdG9yZS9EZWZhdWx0UGVyc2lzdGVuY2VMYXllcic7XG5cbnhkZXNjcmliZSgnQ3JlYXRlIHJhbmdlcycsIGZ1bmN0aW9uKCkge1xuXG4gICAgeGRlc2NyaWJlKCd3aXRoIHJlYWwgZGF0YScsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHhpdChcIm15IGJpdGNvaW4gYm9vay5cIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGFzdG9yZSA9IG5ldyBEaXNrRGF0YXN0b3JlKCk7XG4gICAgICAgICAgICBjb25zdCBwZXJzaXN0ZW5jZUxheWVyID0gbmV3IERlZmF1bHRQZXJzaXN0ZW5jZUxheWVyKGRhdGFzdG9yZSk7XG5cbiAgICAgICAgICAgIGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXIuaW5pdCgpO1xuXG4gICAgICAgICAgICBjb25zdCBmaW5nZXJwcmludCA9IFwiNjUzOTM3NjEzOTM1MzE2MjMxMzUzOTM3Mzc2MjY1NjI2NjYyMzQzNzM4NjY2NTMzNjUzOTY1MzUzMTMwMzY2MjM2MzEzNDY2NjYzNzY0NjE2MjM2NjIzODMyMzk2MTY0Mzk2NjY2MzczNTMwNjQzOTMxMzI2NDMxMzMzNTMwMzBcIjtcblxuICAgICAgICAgICAgY29uc3QgZG9jTWV0YSA9IGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXIuZ2V0RG9jTWV0YShmaW5nZXJwcmludCk7XG5cbiAgICAgICAgICAgIGFzc2VydC5vayhkb2NNZXRhICE9PSB1bmRlZmluZWQpXG5cbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZVBhZ2VtYXJrc0ZvclBhZ2VSYW5nZXMgPSBuZXcgQ3JlYXRlUGFnZW1hcmtzRm9yUGFnZVJhbmdlcyhkb2NNZXRhISk7XG5cbiAgICAgICAgICAgIGNyZWF0ZVBhZ2VtYXJrc0ZvclBhZ2VSYW5nZXMuZXhlY3V0ZSh7cmFuZ2U6IHtzdGFydDogMSwgZW5kOiAyMDR9fSk7XG5cbiAgICAgICAgICAgIGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXIud3JpdGUoZmluZ2VycHJpbnQsIGRvY01ldGEhKTtcblxuICAgICAgICAgICAgLy8gdG8gMjA0Li4uXG5cbiAgICAgICAgICAgIC8vIEZJWE1FOiBub3cgZ2V0IHRoZSBEb2NNZXRhXG5cbiAgICAgICAgICAgIC8vIG5vdyBjcmVhdGUgdGhlIHJhbmdlcy5cblxuICAgICAgICAgICAgLy8gbm93IGNvbW1pdCBpdCBiYWNrIG91dC4uLlxuXG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbn0pO1xuIl19