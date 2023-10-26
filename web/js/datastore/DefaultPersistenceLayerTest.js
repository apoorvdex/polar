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
const DocMetas_1 = require("../metadata/DocMetas");
const MemoryDatastore_1 = require("./MemoryDatastore");
const DefaultPersistenceLayer_1 = require("./DefaultPersistenceLayer");
const TestingTime_1 = require("../test/TestingTime");
describe('DefaultPersistenceLayer', function () {
    const fingerprint = '0x0001';
    it("verify that lastUpdated was written", function () {
        return __awaiter(this, void 0, void 0, function* () {
            TestingTime_1.TestingTime.freeze();
            const memoryDatastore = new MemoryDatastore_1.MemoryDatastore();
            const persistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(memoryDatastore);
            const docMeta = DocMetas_1.MockDocMetas.createWithinInitialPagemarks(fingerprint, 1);
            chai_1.assert.ok(docMeta.docInfo.lastUpdated === undefined);
            yield persistenceLayer.writeDocMeta(docMeta);
            chai_1.assert.ok(docMeta.docInfo.lastUpdated === undefined);
            const writtenDocMeta1 = yield persistenceLayer.getDocMeta(fingerprint);
            chai_1.assert.ok(writtenDocMeta1 !== undefined);
            const current = writtenDocMeta1.docInfo.lastUpdated;
            TestingTime_1.TestingTime.forward(1000);
            yield persistenceLayer.writeDocMeta(docMeta);
            const writtenDocMeta2 = yield persistenceLayer.getDocMeta(fingerprint);
            chai_1.assert.ok(writtenDocMeta2 !== undefined);
            const now = writtenDocMeta2.docInfo.lastUpdated;
            chai_1.assert.ok(current.toString() !== now.toString());
        });
    });
    it("verify that added was written", function () {
        return __awaiter(this, void 0, void 0, function* () {
            TestingTime_1.TestingTime.freeze();
            const memoryDatastore = new MemoryDatastore_1.MemoryDatastore();
            const persistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(memoryDatastore);
            const docMeta = DocMetas_1.MockDocMetas.createWithinInitialPagemarks(fingerprint, 1);
            yield persistenceLayer.writeDocMeta(docMeta);
            const writtenDocMeta1 = yield persistenceLayer.getDocMeta(fingerprint);
            chai_1.assert.ok(writtenDocMeta1.docInfo.added !== undefined);
            const current = writtenDocMeta1.docInfo.added;
            TestingTime_1.TestingTime.forward(1000);
            yield persistenceLayer.writeDocMeta(docMeta);
            const writtenDocMeta2 = yield persistenceLayer.getDocMeta(fingerprint);
            const now = writtenDocMeta2.docInfo.added;
            chai_1.assert.ok(current.toString() === now.toString());
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXJUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXJUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwrQkFBNEI7QUFDNUIsbURBQWtEO0FBQ2xELHVEQUFrRDtBQUNsRCx1RUFBa0U7QUFDbEUscURBQWdEO0FBSWhELFFBQVEsQ0FBQyx5QkFBeUIsRUFBRTtJQUVoQyxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUM7SUFFN0IsRUFBRSxDQUFDLHFDQUFxQyxFQUFFOztZQUV0Qyx5QkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRXJCLE1BQU0sZUFBZSxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO1lBQzlDLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxpREFBdUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUV0RSxNQUFNLE9BQU8sR0FBRyx1QkFBWSxDQUFDLDRCQUE0QixDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUUxRSxhQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxLQUFLLFNBQVMsQ0FBQyxDQUFDO1lBRXJELE1BQU0sZ0JBQWdCLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRzdDLGFBQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEtBQUssU0FBUyxDQUFDLENBQUM7WUFFckQsTUFBTSxlQUFlLEdBQUcsTUFBTSxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFdkUsYUFBTSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEtBQUssU0FBUyxDQUFDLENBQUM7WUFFekMsTUFBTSxPQUFPLEdBQUcsZUFBZ0IsQ0FBQyxPQUFPLENBQUMsV0FBWSxDQUFDO1lBRXRELHlCQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTFCLE1BQU0sZ0JBQWdCLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRTdDLE1BQU0sZUFBZSxHQUFHLE1BQU0sZ0JBQWdCLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRXZFLGFBQU0sQ0FBQyxFQUFFLENBQUMsZUFBZSxLQUFLLFNBQVMsQ0FBQyxDQUFDO1lBRXpDLE1BQU0sR0FBRyxHQUFHLGVBQWdCLENBQUMsT0FBTyxDQUFDLFdBQVksQ0FBQztZQUVsRCxhQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsS0FBSyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUVyRCxDQUFDO0tBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLCtCQUErQixFQUFFOztZQUVoQyx5QkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRXJCLE1BQU0sZUFBZSxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO1lBQzlDLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxpREFBdUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUV0RSxNQUFNLE9BQU8sR0FBRyx1QkFBWSxDQUFDLDRCQUE0QixDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUUxRSxNQUFNLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUU3QyxNQUFNLGVBQWUsR0FBRyxNQUFNLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUV2RSxhQUFNLENBQUMsRUFBRSxDQUFDLGVBQWdCLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQztZQUV4RCxNQUFNLE9BQU8sR0FBRyxlQUFnQixDQUFDLE9BQU8sQ0FBQyxLQUFNLENBQUM7WUFFaEQseUJBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFMUIsTUFBTSxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFN0MsTUFBTSxlQUFlLEdBQUcsTUFBTSxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFdkUsTUFBTSxHQUFHLEdBQUcsZUFBZ0IsQ0FBQyxPQUFPLENBQUMsS0FBTSxDQUFDO1lBRTVDLGFBQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxLQUFLLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBS3JELENBQUM7S0FBQSxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcbmltcG9ydCB7TW9ja0RvY01ldGFzfSBmcm9tICcuLi9tZXRhZGF0YS9Eb2NNZXRhcyc7XG5pbXBvcnQge01lbW9yeURhdGFzdG9yZX0gZnJvbSAnLi9NZW1vcnlEYXRhc3RvcmUnO1xuaW1wb3J0IHtEZWZhdWx0UGVyc2lzdGVuY2VMYXllcn0gZnJvbSAnLi9EZWZhdWx0UGVyc2lzdGVuY2VMYXllcic7XG5pbXBvcnQge1Rlc3RpbmdUaW1lfSBmcm9tICcuLi90ZXN0L1Rlc3RpbmdUaW1lJztcbmltcG9ydCB1dWlkIGZyb20gJ3V1aWQnO1xuXG5cbmRlc2NyaWJlKCdEZWZhdWx0UGVyc2lzdGVuY2VMYXllcicsIGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgZmluZ2VycHJpbnQgPSAnMHgwMDAxJztcblxuICAgIGl0KFwidmVyaWZ5IHRoYXQgbGFzdFVwZGF0ZWQgd2FzIHdyaXR0ZW5cIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgVGVzdGluZ1RpbWUuZnJlZXplKCk7XG5cbiAgICAgICAgY29uc3QgbWVtb3J5RGF0YXN0b3JlID0gbmV3IE1lbW9yeURhdGFzdG9yZSgpO1xuICAgICAgICBjb25zdCBwZXJzaXN0ZW5jZUxheWVyID0gbmV3IERlZmF1bHRQZXJzaXN0ZW5jZUxheWVyKG1lbW9yeURhdGFzdG9yZSk7XG5cbiAgICAgICAgY29uc3QgZG9jTWV0YSA9IE1vY2tEb2NNZXRhcy5jcmVhdGVXaXRoaW5Jbml0aWFsUGFnZW1hcmtzKGZpbmdlcnByaW50LCAxKTtcblxuICAgICAgICBhc3NlcnQub2soZG9jTWV0YS5kb2NJbmZvLmxhc3RVcGRhdGVkID09PSB1bmRlZmluZWQpO1xuXG4gICAgICAgIGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXIud3JpdGVEb2NNZXRhKGRvY01ldGEpO1xuXG4gICAgICAgIC8vIHZlcmlmeSB0aGF0IHRoZSBvcmlnaW5hbCBvYmplY3Qgd2FzIG5vdCBtdXRhdGVkXG4gICAgICAgIGFzc2VydC5vayhkb2NNZXRhLmRvY0luZm8ubGFzdFVwZGF0ZWQgPT09IHVuZGVmaW5lZCk7XG5cbiAgICAgICAgY29uc3Qgd3JpdHRlbkRvY01ldGExID0gYXdhaXQgcGVyc2lzdGVuY2VMYXllci5nZXREb2NNZXRhKGZpbmdlcnByaW50KTtcblxuICAgICAgICBhc3NlcnQub2sod3JpdHRlbkRvY01ldGExICE9PSB1bmRlZmluZWQpO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSB3cml0dGVuRG9jTWV0YTEhLmRvY0luZm8ubGFzdFVwZGF0ZWQhO1xuXG4gICAgICAgIFRlc3RpbmdUaW1lLmZvcndhcmQoMTAwMCk7XG5cbiAgICAgICAgYXdhaXQgcGVyc2lzdGVuY2VMYXllci53cml0ZURvY01ldGEoZG9jTWV0YSk7XG5cbiAgICAgICAgY29uc3Qgd3JpdHRlbkRvY01ldGEyID0gYXdhaXQgcGVyc2lzdGVuY2VMYXllci5nZXREb2NNZXRhKGZpbmdlcnByaW50KTtcblxuICAgICAgICBhc3NlcnQub2sod3JpdHRlbkRvY01ldGEyICE9PSB1bmRlZmluZWQpO1xuXG4gICAgICAgIGNvbnN0IG5vdyA9IHdyaXR0ZW5Eb2NNZXRhMiEuZG9jSW5mby5sYXN0VXBkYXRlZCE7XG5cbiAgICAgICAgYXNzZXJ0Lm9rKGN1cnJlbnQudG9TdHJpbmcoKSAhPT0gbm93LnRvU3RyaW5nKCkpO1xuXG4gICAgfSk7XG5cbiAgICBpdChcInZlcmlmeSB0aGF0IGFkZGVkIHdhcyB3cml0dGVuXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIFRlc3RpbmdUaW1lLmZyZWV6ZSgpO1xuXG4gICAgICAgIGNvbnN0IG1lbW9yeURhdGFzdG9yZSA9IG5ldyBNZW1vcnlEYXRhc3RvcmUoKTtcbiAgICAgICAgY29uc3QgcGVyc2lzdGVuY2VMYXllciA9IG5ldyBEZWZhdWx0UGVyc2lzdGVuY2VMYXllcihtZW1vcnlEYXRhc3RvcmUpO1xuXG4gICAgICAgIGNvbnN0IGRvY01ldGEgPSBNb2NrRG9jTWV0YXMuY3JlYXRlV2l0aGluSW5pdGlhbFBhZ2VtYXJrcyhmaW5nZXJwcmludCwgMSk7XG5cbiAgICAgICAgYXdhaXQgcGVyc2lzdGVuY2VMYXllci53cml0ZURvY01ldGEoZG9jTWV0YSk7XG5cbiAgICAgICAgY29uc3Qgd3JpdHRlbkRvY01ldGExID0gYXdhaXQgcGVyc2lzdGVuY2VMYXllci5nZXREb2NNZXRhKGZpbmdlcnByaW50KTtcblxuICAgICAgICBhc3NlcnQub2sod3JpdHRlbkRvY01ldGExIS5kb2NJbmZvLmFkZGVkICE9PSB1bmRlZmluZWQpO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSB3cml0dGVuRG9jTWV0YTEhLmRvY0luZm8uYWRkZWQhO1xuXG4gICAgICAgIFRlc3RpbmdUaW1lLmZvcndhcmQoMTAwMCk7XG5cbiAgICAgICAgYXdhaXQgcGVyc2lzdGVuY2VMYXllci53cml0ZURvY01ldGEoZG9jTWV0YSk7XG5cbiAgICAgICAgY29uc3Qgd3JpdHRlbkRvY01ldGEyID0gYXdhaXQgcGVyc2lzdGVuY2VMYXllci5nZXREb2NNZXRhKGZpbmdlcnByaW50KTtcblxuICAgICAgICBjb25zdCBub3cgPSB3cml0dGVuRG9jTWV0YTIhLmRvY0luZm8uYWRkZWQhO1xuXG4gICAgICAgIGFzc2VydC5vayhjdXJyZW50LnRvU3RyaW5nKCkgPT09IG5vdy50b1N0cmluZygpKTtcblxuICAgICAgICAvLyBub3cgdmVyaWZ5IHRoYXQgaWYgd2Ugd3JpdGUgYSBzZWNvbmQgdGltZSwgdGhhdCB0aGUgYWRkZWQgdmFsdWVcbiAgICAgICAgLy8gaXMgTk9UIGNoYW5nZWQuXG5cbiAgICB9KTtcblxufSk7XG4iXX0=