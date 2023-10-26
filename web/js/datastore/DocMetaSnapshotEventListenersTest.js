"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DocMetaSnapshotEventListeners_1 = require("./DocMetaSnapshotEventListeners");
const DocMetas_1 = require("../metadata/DocMetas");
const TestingTime_1 = require("../test/TestingTime");
const ProgressTracker_1 = require("../util/ProgressTracker");
const chai_1 = require("chai");
const UUIDs_1 = require("../metadata/UUIDs");
const Functions_1 = require("../util/Functions");
const Providers_1 = require("../util/Providers");
const wait_for_expect_1 = __importDefault(require("wait-for-expect"));
const DocMetaRef_1 = require("./DocMetaRef");
const MetadataSerializer_1 = require("../metadata/MetadataSerializer");
const Reducers_1 = require("../util/Reducers");
describe('DocMetaSnapshotEventListener', function () {
    let docMeta;
    let docMetaSnapshotEvents = [];
    let deduplicatedListener = Functions_1.ASYNC_NULL_FUNCTION;
    const progressTracker = new ProgressTracker_1.ProgressTracker(1, 'test');
    progressTracker.incr();
    const progress = progressTracker.peek();
    const consistency = 'committed';
    beforeEach(function () {
        TestingTime_1.TestingTime.freeze();
        docMeta = DocMetas_1.MockDocMetas.createMockDocMeta();
        docMetaSnapshotEvents = [];
        const eventDeduplicator = DocMetaSnapshotEventListeners_1.DocMetaSnapshotEventListeners.createDeduplicatedListener((emittedEvent) => __awaiter(this, void 0, void 0, function* () {
            docMetaSnapshotEvents.push(emittedEvent);
        }));
        deduplicatedListener = eventDeduplicator.listener;
    });
    afterEach(function () {
        TestingTime_1.TestingTime.unfreeze();
    });
    function createDocMetaSnapshotEvent(mutationType = 'created') {
        const docMetaMutation = {
            fingerprint: docMeta.docInfo.fingerprint,
            dataProvider: Providers_1.AsyncProviders.of(MetadataSerializer_1.MetadataSerializer.serialize(docMeta)),
            docMetaProvider: Providers_1.AsyncProviders.of(docMeta),
            docInfoProvider: Providers_1.AsyncProviders.of(docMeta.docInfo),
            docMetaFileRefProvider: Providers_1.AsyncProviders.of(DocMetaRef_1.DocMetaFileRefs.createFromDocInfo(docMeta.docInfo)),
            mutationType
        };
        const docMetaSnapshotEvent = {
            datastore: 'memory',
            progress,
            consistency,
            docMetaMutations: [
                docMetaMutation
            ]
        };
        return docMetaSnapshotEvent;
    }
    function createFutureUUID() {
        TestingTime_1.TestingTime.forward(5000);
        return UUIDs_1.UUIDs.create();
    }
    function computeEmittedDocMetaMutations(event) {
        return docMetaSnapshotEvents.map(current => current.docMetaMutations.length)
            .reduce(Reducers_1.Reducers.SUM, 0);
    }
    it("basic duplicate suppression", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const docMetaSnapshotEvent = createDocMetaSnapshotEvent();
            chai_1.assert.equal(computeEmittedDocMetaMutations(docMetaSnapshotEvents), 0);
            yield deduplicatedListener(docMetaSnapshotEvent);
            chai_1.assert.equal(computeEmittedDocMetaMutations(docMetaSnapshotEvents), 1);
            yield deduplicatedListener(docMetaSnapshotEvent);
            yield wait_for_expect_1.default(() => {
                chai_1.assert.equal(computeEmittedDocMetaMutations(docMetaSnapshotEvents), 1);
            });
        });
    });
    it("Two 'created' (with differing times)", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const docMetaSnapshotEvent = createDocMetaSnapshotEvent();
            chai_1.assert.equal(computeEmittedDocMetaMutations(docMetaSnapshotEvents), 0);
            yield deduplicatedListener(docMetaSnapshotEvent);
            chai_1.assert.equal(computeEmittedDocMetaMutations(docMetaSnapshotEvents), 1);
            TestingTime_1.TestingTime.forward(60000);
            const futureUUID = createFutureUUID();
            chai_1.assert.notEqual(docMeta.docInfo.uuid, futureUUID);
            docMeta.docInfo.uuid = futureUUID;
            yield deduplicatedListener(docMetaSnapshotEvent);
            chai_1.assert.equal(computeEmittedDocMetaMutations(docMetaSnapshotEvents), 2);
            yield wait_for_expect_1.default(() => {
                chai_1.assert.equal(computeEmittedDocMetaMutations(docMetaSnapshotEvents), 2);
            });
        });
    });
    it("One created, then one updated.", function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield deduplicatedListener(createDocMetaSnapshotEvent('created'));
            docMeta.docInfo.uuid = createFutureUUID();
            yield deduplicatedListener(createDocMetaSnapshotEvent('updated'));
            yield wait_for_expect_1.default(() => {
                chai_1.assert.equal(docMetaSnapshotEvents.length, 2);
            });
        });
    });
    it("Two updated.", function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield deduplicatedListener(createDocMetaSnapshotEvent('updated'));
            docMeta.docInfo.uuid = createFutureUUID();
            yield deduplicatedListener(createDocMetaSnapshotEvent('updated'));
            yield wait_for_expect_1.default(() => {
                chai_1.assert.equal(docMetaSnapshotEvents.length, 2);
            });
        });
    });
    it("Created, then deleted, then created", function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield deduplicatedListener(createDocMetaSnapshotEvent('created'));
            docMeta.docInfo.uuid = createFutureUUID();
            yield deduplicatedListener(createDocMetaSnapshotEvent('deleted'));
            docMeta.docInfo.uuid = createFutureUUID();
            yield deduplicatedListener(createDocMetaSnapshotEvent('created'));
            yield wait_for_expect_1.default(() => {
                chai_1.assert.equal(docMetaSnapshotEvents.length, 3);
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcnNUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcnNUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFQSxtRkFBOEU7QUFDOUUsbURBQWtEO0FBQ2xELHFEQUFnRDtBQUNoRCw2REFBd0Q7QUFFeEQsK0JBQTRCO0FBQzVCLDZDQUF3QztBQUN4QyxpREFBcUU7QUFDckUsaURBQWlEO0FBQ2pELHNFQUE0QztBQUM1Qyw2Q0FBNkM7QUFDN0MsdUVBQWtFO0FBQ2xFLCtDQUEwQztBQUcxQyxRQUFRLENBQUMsOEJBQThCLEVBQUU7SUFFckMsSUFBSSxPQUFnQixDQUFDO0lBRXJCLElBQUkscUJBQXFCLEdBQTJCLEVBQUUsQ0FBQztJQUV2RCxJQUFJLG9CQUFvQixHQUFpQywrQkFBbUIsQ0FBQztJQUU3RSxNQUFNLGVBQWUsR0FBRyxJQUFJLGlDQUFlLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZELGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUV2QixNQUFNLFFBQVEsR0FBRyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEMsTUFBTSxXQUFXLEdBQXlCLFdBQVcsQ0FBQztJQUV0RCxVQUFVLENBQUM7UUFDUCx5QkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRXJCLE9BQU8sR0FBRyx1QkFBWSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFM0MscUJBQXFCLEdBQUcsRUFBRSxDQUFDO1FBRTNCLE1BQU0saUJBQWlCLEdBQUcsNkRBQTZCLENBQUMsMEJBQTBCLENBQUMsQ0FBTSxZQUFZLEVBQUMsRUFBRTtZQUNwRyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFBLENBQUMsQ0FBQztRQUVILG9CQUFvQixHQUFHLGlCQUFpQixDQUFDLFFBQVEsQ0FB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QUVILEVBQUUsQ0FBQyxxQ0FBcUMsRUFBRTs7WUFFdEMsTUFBTSxvQkFBb0IsQ0FBQywwQkFBMEIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBRWxFLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLGdCQUFnQixFQUFFLENBQUM7WUFFMUMsTUFBTSxvQkFBb0IsQ0FBQywwQkFBMEIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBRWxFLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLGdCQUFnQixFQUFFLENBQUM7WUFFMUMsTUFBTSxvQkFBb0IsQ0FBQywwQkFBMEIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBRWxFLE1BQU0seUJBQWEsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3JCLGFBQU0sQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xELENBQUMsQ0FBQyxDQUFDO1FBRVAsQ0FBQztLQUFBLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge0RvY01ldGFTbmFwc2hvdEV2ZW50LCBEb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyLCBEYXRhc3RvcmVDb25zaXN0ZW5jeSwgRG9jTWV0YU11dGF0aW9uLCBNdXRhdGlvblR5cGV9IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7RG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcnN9IGZyb20gJy4vRG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcnMnO1xuaW1wb3J0IHtNb2NrRG9jTWV0YXN9IGZyb20gJy4uL21ldGFkYXRhL0RvY01ldGFzJztcbmltcG9ydCB7VGVzdGluZ1RpbWV9IGZyb20gJy4uL3Rlc3QvVGVzdGluZ1RpbWUnO1xuaW1wb3J0IHtQcm9ncmVzc1RyYWNrZXJ9IGZyb20gJy4uL3V0aWwvUHJvZ3Jlc3NUcmFja2VyJztcbmltcG9ydCB7YXNzZXJ0SlNPTn0gZnJvbSAnLi4vdGVzdC9Bc3NlcnRpb25zJztcbmltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcbmltcG9ydCB7VVVJRHN9IGZyb20gJy4uL21ldGFkYXRhL1VVSURzJztcbmltcG9ydCB7QVNZTkNfTlVMTF9GVU5DVElPTiwgTlVMTF9GVU5DVElPTn0gZnJvbSAnLi4vdXRpbC9GdW5jdGlvbnMnO1xuaW1wb3J0IHtBc3luY1Byb3ZpZGVyc30gZnJvbSAnLi4vdXRpbC9Qcm92aWRlcnMnO1xuaW1wb3J0IHdhaXRGb3JFeHBlY3QgZnJvbSAnd2FpdC1mb3ItZXhwZWN0JztcbmltcG9ydCB7RG9jTWV0YUZpbGVSZWZzfSBmcm9tICcuL0RvY01ldGFSZWYnO1xuaW1wb3J0IHtNZXRhZGF0YVNlcmlhbGl6ZXJ9IGZyb20gJy4uL21ldGFkYXRhL01ldGFkYXRhU2VyaWFsaXplcic7XG5pbXBvcnQge1JlZHVjZXJzfSBmcm9tICcuLi91dGlsL1JlZHVjZXJzJztcbmltcG9ydCB7RG9jTWV0YX0gZnJvbSAnLi4vbWV0YWRhdGEvRG9jTWV0YSc7XG5cbmRlc2NyaWJlKCdEb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyJywgZnVuY3Rpb24oKSB7XG5cbiAgICBsZXQgZG9jTWV0YTogRG9jTWV0YTtcblxuICAgIGxldCBkb2NNZXRhU25hcHNob3RFdmVudHM6IERvY01ldGFTbmFwc2hvdEV2ZW50W10gPSBbXTtcblxuICAgIGxldCBkZWR1cGxpY2F0ZWRMaXN0ZW5lcjogRG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lciA9IEFTWU5DX05VTExfRlVOQ1RJT047XG5cbiAgICBjb25zdCBwcm9ncmVzc1RyYWNrZXIgPSBuZXcgUHJvZ3Jlc3NUcmFja2VyKDEsICd0ZXN0Jyk7XG4gICAgcHJvZ3Jlc3NUcmFja2VyLmluY3IoKTtcblxuICAgIGNvbnN0IHByb2dyZXNzID0gcHJvZ3Jlc3NUcmFja2VyLnBlZWsoKTtcbiAgICBjb25zdCBjb25zaXN0ZW5jeTogRGF0YXN0b3JlQ29uc2lzdGVuY3kgPSAnY29tbWl0dGVkJztcblxuICAgIGJlZm9yZUVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIFRlc3RpbmdUaW1lLmZyZWV6ZSgpO1xuXG4gICAgICAgIGRvY01ldGEgPSBNb2NrRG9jTWV0YXMuY3JlYXRlTW9ja0RvY01ldGEoKTtcblxuICAgICAgICBkb2NNZXRhU25hcHNob3RFdmVudHMgPSBbXTtcblxuICAgICAgICBjb25zdCBldmVudERlZHVwbGljYXRvciA9IERvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXJzLmNyZWF0ZURlZHVwbGljYXRlZExpc3RlbmVyKGFzeW5jIGVtaXR0ZWRFdmVudCA9PiB7XG4gICAgICAgICAgICBkb2NNZXRhU25hcHNob3RFdmVudHMucHVzaChlbWl0dGVkRXZlbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkZWR1cGxpY2F0ZWRMaXN0ZW5lciA9IGV2ZW50RGVkdXBsaWNhdG9yLmxpc3RlbmVyO1xuXG4gICAgfSk7XG5cbiAgICBhZnRlckVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIFRlc3RpbmdUaW1lLnVuZnJlZXplKCk7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVEb2NNZXRhU25hcHNob3RFdmVudChtdXRhdGlvblR5cGU6IE11dGF0aW9uVHlwZSA9ICdjcmVhdGVkJyk6IERvY01ldGFTbmFwc2hvdEV2ZW50IHtcblxuICAgICAgICBjb25zdCBkb2NNZXRhTXV0YXRpb246IERvY01ldGFNdXRhdGlvbiA9IHtcbiAgICAgICAgICAgIGZpbmdlcnByaW50OiBkb2NNZXRhLmRvY0luZm8uZmluZ2VycHJpbnQsXG4gICAgICAgICAgICBkYXRhUHJvdmlkZXI6IEFzeW5jUHJvdmlkZXJzLm9mKE1ldGFkYXRhU2VyaWFsaXplci5zZXJpYWxpemUoZG9jTWV0YSkpLFxuICAgICAgICAgICAgZG9jTWV0YVByb3ZpZGVyOiBBc3luY1Byb3ZpZGVycy5vZihkb2NNZXRhKSxcbiAgICAgICAgICAgIGRvY0luZm9Qcm92aWRlcjogQXN5bmNQcm92aWRlcnMub2YoZG9jTWV0YS5kb2NJbmZvKSxcbiAgICAgICAgICAgIGRvY01ldGFGaWxlUmVmUHJvdmlkZXI6IEFzeW5jUHJvdmlkZXJzLm9mKERvY01ldGFGaWxlUmVmcy5jcmVhdGVGcm9tRG9jSW5mbyhkb2NNZXRhLmRvY0luZm8pKSxcbiAgICAgICAgICAgIG11dGF0aW9uVHlwZVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGRvY01ldGFTbmFwc2hvdEV2ZW50ID0ge1xuICAgICAgICAgICAgZGF0YXN0b3JlOiAnbWVtb3J5JyxcbiAgICAgICAgICAgIHByb2dyZXNzLFxuICAgICAgICAgICAgY29uc2lzdGVuY3ksXG4gICAgICAgICAgICBkb2NNZXRhTXV0YXRpb25zOiBbXG4gICAgICAgICAgICAgICAgZG9jTWV0YU11dGF0aW9uXG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGRvY01ldGFTbmFwc2hvdEV2ZW50O1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRnV0dXJlVVVJRCgpIHtcbiAgICAgICAgVGVzdGluZ1RpbWUuZm9yd2FyZCg1MDAwKTtcbiAgICAgICAgcmV0dXJuIFVVSURzLmNyZWF0ZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbXB1dGVFbWl0dGVkRG9jTWV0YU11dGF0aW9ucyhldmVudDogRG9jTWV0YVNuYXBzaG90RXZlbnRbXSkge1xuXG4gICAgICAgIHJldHVybiBkb2NNZXRhU25hcHNob3RFdmVudHMubWFwKGN1cnJlbnQgPT4gY3VycmVudC5kb2NNZXRhTXV0YXRpb25zLmxlbmd0aClcbiAgICAgICAgICAgIC5yZWR1Y2UoUmVkdWNlcnMuU1VNLCAwKTtcblxuICAgIH1cblxuICAgIGl0KFwiYmFzaWMgZHVwbGljYXRlIHN1cHByZXNzaW9uXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGNvbnN0IGRvY01ldGFTbmFwc2hvdEV2ZW50ID0gY3JlYXRlRG9jTWV0YVNuYXBzaG90RXZlbnQoKTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwoY29tcHV0ZUVtaXR0ZWREb2NNZXRhTXV0YXRpb25zKGRvY01ldGFTbmFwc2hvdEV2ZW50cyksIDApO1xuXG4gICAgICAgIGF3YWl0IGRlZHVwbGljYXRlZExpc3RlbmVyKGRvY01ldGFTbmFwc2hvdEV2ZW50KTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwoY29tcHV0ZUVtaXR0ZWREb2NNZXRhTXV0YXRpb25zKGRvY01ldGFTbmFwc2hvdEV2ZW50cyksIDEpO1xuXG4gICAgICAgIGF3YWl0IGRlZHVwbGljYXRlZExpc3RlbmVyKGRvY01ldGFTbmFwc2hvdEV2ZW50KTtcblxuICAgICAgICBhd2FpdCB3YWl0Rm9yRXhwZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChjb21wdXRlRW1pdHRlZERvY01ldGFNdXRhdGlvbnMoZG9jTWV0YVNuYXBzaG90RXZlbnRzKSwgMSk7XG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cblxuICAgIGl0KFwiVHdvICdjcmVhdGVkJyAod2l0aCBkaWZmZXJpbmcgdGltZXMpXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGNvbnN0IGRvY01ldGFTbmFwc2hvdEV2ZW50ID0gY3JlYXRlRG9jTWV0YVNuYXBzaG90RXZlbnQoKTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwoY29tcHV0ZUVtaXR0ZWREb2NNZXRhTXV0YXRpb25zKGRvY01ldGFTbmFwc2hvdEV2ZW50cyksIDApO1xuXG4gICAgICAgIGF3YWl0IGRlZHVwbGljYXRlZExpc3RlbmVyKGRvY01ldGFTbmFwc2hvdEV2ZW50KTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwoY29tcHV0ZUVtaXR0ZWREb2NNZXRhTXV0YXRpb25zKGRvY01ldGFTbmFwc2hvdEV2ZW50cyksIDEpO1xuXG4gICAgICAgIFRlc3RpbmdUaW1lLmZvcndhcmQoNjAwMDApO1xuICAgICAgICBjb25zdCBmdXR1cmVVVUlEID0gY3JlYXRlRnV0dXJlVVVJRCgpO1xuXG4gICAgICAgIGFzc2VydC5ub3RFcXVhbChkb2NNZXRhLmRvY0luZm8udXVpZCwgZnV0dXJlVVVJRCk7XG5cbiAgICAgICAgZG9jTWV0YS5kb2NJbmZvLnV1aWQgPSBmdXR1cmVVVUlEO1xuXG4gICAgICAgIGF3YWl0IGRlZHVwbGljYXRlZExpc3RlbmVyKGRvY01ldGFTbmFwc2hvdEV2ZW50KTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwoY29tcHV0ZUVtaXR0ZWREb2NNZXRhTXV0YXRpb25zKGRvY01ldGFTbmFwc2hvdEV2ZW50cyksIDIpO1xuXG4gICAgICAgIGF3YWl0IHdhaXRGb3JFeHBlY3QoKCkgPT4ge1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKGNvbXB1dGVFbWl0dGVkRG9jTWV0YU11dGF0aW9ucyhkb2NNZXRhU25hcHNob3RFdmVudHMpLCAyKTtcbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxuICAgIGl0KFwiT25lIGNyZWF0ZWQsIHRoZW4gb25lIHVwZGF0ZWQuXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGF3YWl0IGRlZHVwbGljYXRlZExpc3RlbmVyKGNyZWF0ZURvY01ldGFTbmFwc2hvdEV2ZW50KCdjcmVhdGVkJykpO1xuXG4gICAgICAgIGRvY01ldGEuZG9jSW5mby51dWlkID0gY3JlYXRlRnV0dXJlVVVJRCgpO1xuXG4gICAgICAgIGF3YWl0IGRlZHVwbGljYXRlZExpc3RlbmVyKGNyZWF0ZURvY01ldGFTbmFwc2hvdEV2ZW50KCd1cGRhdGVkJykpO1xuXG4gICAgICAgIGF3YWl0IHdhaXRGb3JFeHBlY3QoKCkgPT4ge1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKGRvY01ldGFTbmFwc2hvdEV2ZW50cy5sZW5ndGgsIDIpO1xuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG4gICAgaXQoXCJUd28gdXBkYXRlZC5cIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgYXdhaXQgZGVkdXBsaWNhdGVkTGlzdGVuZXIoY3JlYXRlRG9jTWV0YVNuYXBzaG90RXZlbnQoJ3VwZGF0ZWQnKSk7XG5cbiAgICAgICAgZG9jTWV0YS5kb2NJbmZvLnV1aWQgPSBjcmVhdGVGdXR1cmVVVUlEKCk7XG5cbiAgICAgICAgYXdhaXQgZGVkdXBsaWNhdGVkTGlzdGVuZXIoY3JlYXRlRG9jTWV0YVNuYXBzaG90RXZlbnQoJ3VwZGF0ZWQnKSk7XG5cbiAgICAgICAgYXdhaXQgd2FpdEZvckV4cGVjdCgoKSA9PiB7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoZG9jTWV0YVNuYXBzaG90RXZlbnRzLmxlbmd0aCwgMik7XG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbiAgICBpdChcIkNyZWF0ZWQsIHRoZW4gZGVsZXRlZCwgdGhlbiBjcmVhdGVkXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGF3YWl0IGRlZHVwbGljYXRlZExpc3RlbmVyKGNyZWF0ZURvY01ldGFTbmFwc2hvdEV2ZW50KCdjcmVhdGVkJykpO1xuXG4gICAgICAgIGRvY01ldGEuZG9jSW5mby51dWlkID0gY3JlYXRlRnV0dXJlVVVJRCgpO1xuXG4gICAgICAgIGF3YWl0IGRlZHVwbGljYXRlZExpc3RlbmVyKGNyZWF0ZURvY01ldGFTbmFwc2hvdEV2ZW50KCdkZWxldGVkJykpO1xuXG4gICAgICAgIGRvY01ldGEuZG9jSW5mby51dWlkID0gY3JlYXRlRnV0dXJlVVVJRCgpO1xuXG4gICAgICAgIGF3YWl0IGRlZHVwbGljYXRlZExpc3RlbmVyKGNyZWF0ZURvY01ldGFTbmFwc2hvdEV2ZW50KCdjcmVhdGVkJykpO1xuXG4gICAgICAgIGF3YWl0IHdhaXRGb3JFeHBlY3QoKCkgPT4ge1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKGRvY01ldGFTbmFwc2hvdEV2ZW50cy5sZW5ndGgsIDMpO1xuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==