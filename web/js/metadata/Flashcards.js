"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Dicts_1 = require("../util/Dicts");
const FlashcardType_1 = require("./FlashcardType");
const Hashcodes_1 = require("../Hashcodes");
const Preconditions_1 = require("../Preconditions");
const Flashcard_1 = require("./Flashcard");
const Texts_1 = require("./Texts");
const TextType_1 = require("./TextType");
const ISODateTimeStrings_1 = require("./ISODateTimeStrings");
class Flashcards {
    static createMutable(flashcard) {
        return Object.assign({}, flashcard);
    }
    static create(type, fields, archetype, ref) {
        Preconditions_1.Preconditions.assertNotNull(fields, "fields");
        const created = ISODateTimeStrings_1.ISODateTimeStrings.create();
        const lastUpdated = created;
        const id = Hashcodes_1.Hashcodes.createID({ fields, created });
        return Flashcard_1.Flashcard.newInstance(id, id, created, lastUpdated, type, fields, archetype, ref);
    }
    static createCloze(text, ref) {
        const archetype = "76152976-d7ae-4348-9571-d65e48050c3f";
        const fields = {};
        fields.text = Texts_1.Texts.create(text, TextType_1.TextType.HTML);
        return Flashcards.create(FlashcardType_1.FlashcardType.CLOZE, fields, archetype, ref);
    }
    static createFrontBack(front, back, ref) {
        const archetype = "9d146db1-7c31-4bcf-866b-7b485c4e50ea";
        const fields = {};
        fields.front = Texts_1.Texts.create(front, TextType_1.TextType.HTML);
        fields.back = Texts_1.Texts.create(back, TextType_1.TextType.HTML);
        return Flashcards.create(FlashcardType_1.FlashcardType.BASIC_FRONT_BACK, fields, archetype, ref);
    }
    static createFromSchemaFormData(formData, archetype, ref) {
        const fields = {};
        Dicts_1.Dicts.ownKeys(formData, (key, value) => {
            fields[key] = Texts_1.Texts.create(value, TextType_1.TextType.HTML);
        });
        return Flashcards.create(FlashcardType_1.FlashcardType.BASIC_FRONT_BACK, fields, archetype, ref);
    }
    static convertFieldsToMap(fields = {}) {
        const result = {};
        for (const key of Object.keys(fields)) {
            result[key] = fields[key].HTML;
        }
        return result;
    }
}
exports.Flashcards = Flashcards;
class MockFlashcards {
    static attachFlashcards(docMeta) {
        let idx = 0;
        Object.values(docMeta.pageMetas).forEach(pageMeta => {
            const archetype = "9d146db1-7c31-4bcf-866b-7b485c4e50ea";
            const front = Texts_1.Texts.create("What is the capital of California? <img src=\"data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7\" />\n" + idx, TextType_1.TextType.HTML);
            const back = Texts_1.Texts.create("Sacramento", TextType_1.TextType.TEXT);
            const fields = {
                'Front': front,
                'Back': back,
            };
            const ref = 'page:1';
            const flashcard = Flashcards.create(FlashcardType_1.FlashcardType.CLOZE, fields, archetype, ref);
            pageMeta.flashcards[flashcard.id] = flashcard;
            ++idx;
        });
        return docMeta;
    }
}
exports.MockFlashcards = MockFlashcards;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxhc2hjYXJkcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkZsYXNoY2FyZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBb0M7QUFDcEMsbURBQThDO0FBQzlDLDRDQUF1QztBQUN2QyxvREFBK0M7QUFDL0MsMkNBQXNDO0FBQ3RDLG1DQUE4QjtBQUU5Qix5Q0FBb0M7QUFFcEMsNkRBQXdEO0FBSXhELE1BQWEsVUFBVTtJQUVaLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBb0I7UUFJNUMsT0FBTyxrQkFBZ0IsU0FBUyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBbUIsRUFBRSxNQUE2QixFQUFFLFNBQWlCLEVBQUUsR0FBUTtRQUVoRyw2QkFBYSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFOUMsTUFBTSxPQUFPLEdBQUcsdUNBQWtCLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDNUMsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDO1FBSzVCLE1BQU0sRUFBRSxHQUFHLHFCQUFTLENBQUMsUUFBUSxDQUFDLEVBQUMsTUFBTSxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7UUFFakQsT0FBTyxxQkFBUyxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFFN0YsQ0FBQztJQUVNLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBZ0IsRUFBRSxHQUFRO1FBRWhELE1BQU0sU0FBUyxHQUFHLHNDQUFzQyxDQUFDO1FBRXpELE1BQU0sTUFBTSxHQUEyQixFQUFFLENBQUM7UUFFMUMsTUFBTSxDQUFDLElBQUksR0FBRyxhQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxtQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWhELE9BQU8sVUFB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ImltcG9ydCB7RGljdHN9IGZyb20gJy4uL3V0aWwvRGljdHMnO1xuaW1wb3J0IHtGbGFzaGNhcmRUeXBlfSBmcm9tICcuL0ZsYXNoY2FyZFR5cGUnO1xuaW1wb3J0IHtIYXNoY29kZXN9IGZyb20gJy4uL0hhc2hjb2Rlcyc7XG5pbXBvcnQge1ByZWNvbmRpdGlvbnN9IGZyb20gJy4uL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtGbGFzaGNhcmR9IGZyb20gJy4vRmxhc2hjYXJkJztcbmltcG9ydCB7VGV4dHN9IGZyb20gJy4vVGV4dHMnO1xuaW1wb3J0IHtUZXh0fSBmcm9tICcuL1RleHQnO1xuaW1wb3J0IHtUZXh0VHlwZX0gZnJvbSAnLi9UZXh0VHlwZSc7XG5pbXBvcnQge0RvY01ldGF9IGZyb20gJy4vRG9jTWV0YSc7XG5pbXBvcnQge0lTT0RhdGVUaW1lU3RyaW5nc30gZnJvbSAnLi9JU09EYXRlVGltZVN0cmluZ3MnO1xuaW1wb3J0IHtIVE1MU3RyaW5nfSBmcm9tICcuLi91dGlsL0hUTUxTdHJpbmcnO1xuaW1wb3J0IHtSZWZ9IGZyb20gJy4vUmVmcyc7XG5cbmV4cG9ydCBjbGFzcyBGbGFzaGNhcmRzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlTXV0YWJsZShmbGFzaGNhcmQ6IEZsYXNoY2FyZCk6IEZsYXNoY2FyZCB7XG4gICAgICAgIC8vIFRPRE86IGFuIGlkaW9zeW5jcmFjeSBvZiB0aGUgcHJveGllcyBzeXN0ZW0gaXMgdGhhdCBpdCBtdXRhdGVzIHRoZVxuICAgICAgICAvLyBvYmplY3Qgc28gaWYgaXQncyByZWFkIG9ubHkgaXQgd29uJ3Qgd29yay4gIFRoaXMgaXMgYSBidWcgd2l0aFxuICAgICAgICAvLyBQcm94aWVzIHNvIEkgbmVlZCB0byBhbHNvIGZpeCB0aGF0IGJ1ZyB0aGVyZSBpbiB0aGUgZnV0dXJlLlxuICAgICAgICByZXR1cm4gPEZsYXNoY2FyZD4gey4uLmZsYXNoY2FyZH07XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGUodHlwZTogRmxhc2hjYXJkVHlwZSwgZmllbGRzOiB7W2tleTogc3RyaW5nXTogVGV4dH0sIGFyY2hldHlwZTogc3RyaW5nLCByZWY6IFJlZikge1xuXG4gICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0Tm90TnVsbChmaWVsZHMsIFwiZmllbGRzXCIpO1xuXG4gICAgICAgIGNvbnN0IGNyZWF0ZWQgPSBJU09EYXRlVGltZVN0cmluZ3MuY3JlYXRlKCk7XG4gICAgICAgIGNvbnN0IGxhc3RVcGRhdGVkID0gY3JlYXRlZDtcblxuICAgICAgICAvLyBUT0RPOiBpbXBsZW1lbnQgJ21hY2hpbmUgY29kZXMnIGhlcmUgd2hlcmUgd2UgaGF2ZSBhIHVuaXF1ZSBjb2RlIHBlclxuICAgICAgICAvLyBwaHlzaWNhbCBkZXZpY2UuICBUaGlzIHdheSB0d28gcGVvcGxlIGNhbiBjcmVhdGUgdGhlIHNhbWUgZmxhc2hjYXJkXG4gICAgICAgIC8vIGFuZCBuZXZlciBjb25mbGljdC4gIFRoaXMgd2F5IHdlIHN1cHBvcnQgZGlzdHJpYnV0ZWQgYmVoYXZpb3IuXG4gICAgICAgIGNvbnN0IGlkID0gSGFzaGNvZGVzLmNyZWF0ZUlEKHtmaWVsZHMsIGNyZWF0ZWR9KTtcblxuICAgICAgICByZXR1cm4gRmxhc2hjYXJkLm5ld0luc3RhbmNlKGlkLCBpZCwgY3JlYXRlZCwgbGFzdFVwZGF0ZWQsIHR5cGUsIGZpZWxkcywgYXJjaGV0eXBlLCByZWYpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVDbG96ZSh0ZXh0OiBIVE1MU3RyaW5nLCByZWY6IFJlZikge1xuXG4gICAgICAgIGNvbnN0IGFyY2hldHlwZSA9IFwiNzYxNTI5NzYtZDdhZS00MzQ4LTk1NzEtZDY1ZTQ4MDUwYzNmXCI7XG5cbiAgICAgICAgY29uc3QgZmllbGRzOiB7W2tleTogc3RyaW5nXTogVGV4dCB9ID0ge307XG5cbiAgICAgICAgZmllbGRzLnRleHQgPSBUZXh0cy5jcmVhdGUodGV4dCwgVGV4dFR5cGUuSFRNTCk7XG5cbiAgICAgICAgcmV0dXJuIEZsYXNoY2FyZHMuY3JlYXRlKEZsYXNoY2FyZFR5cGUuQ0xPWkUsIGZpZWxkcywgYXJjaGV0eXBlLCByZWYpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgZmxhc2hjYXJkIGZyb20gdGhlIHJhdywgY29tcGxldGVkLCBzY2hlbWEgZm9ybSBkYXRhLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlRnJvbnRCYWNrKGZyb250OiBIVE1MU3RyaW5nLCBiYWNrOiBIVE1MU3RyaW5nLCByZWY6IFJlZikge1xuXG4gICAgICAgIGNvbnN0IGFyY2hldHlwZSA9IFwiOWQxNDZkYjEtN2MzMS00YmNmLTg2NmItN2I0ODVjNGU1MGVhXCI7XG5cbiAgICAgICAgY29uc3QgZmllbGRzOiB7W2tleTogc3RyaW5nXTogVGV4dCB9ID0ge307XG5cbiAgICAgICAgZmllbGRzLmZyb250ID0gVGV4dHMuY3JlYXRlKGZyb250LCBUZXh0VHlwZS5IVE1MKTtcbiAgICAgICAgZmllbGRzLmJhY2sgPSBUZXh0cy5jcmVhdGUoYmFjaywgVGV4dFR5cGUuSFRNTCk7XG5cbiAgICAgICAgcmV0dXJuIEZsYXNoY2FyZHMuY3JlYXRlKEZsYXNoY2FyZFR5cGUuQkFTSUNfRlJPTlRfQkFDSywgZmllbGRzLCBhcmNoZXR5cGUsIHJlZik7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBmbGFzaGNhcmQgZnJvbSB0aGUgcmF3LCBjb21wbGV0ZWQsIHNjaGVtYSBmb3JtIGRhdGEuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVGcm9tU2NoZW1hRm9ybURhdGEoZm9ybURhdGE6IHtba2V5OiBzdHJpbmddOiBzdHJpbmcgfSwgYXJjaGV0eXBlOiBzdHJpbmcsIHJlZjogUmVmKSB7XG5cbiAgICAgICAgLy8gVE9ETzogdGhlIG1hcmtkb3duIG5lZWRzIHRvIGJlIGNvbnZlcnRlZCB0byBIVE1MIGFzIHdlbGwuICBUaGUgdGV4dFxuICAgICAgICAvLyB3ZSBnZXQgZnJvbSB0aGUgbWFya2Rvd24gd2lkZ2V0IGlzIG1hcmtkb3duLiBOb3QgSFRNTCBhbmQgSSBjb25maXJtZWRcbiAgICAgICAgLy8gdGhpcyBpcyB0aGUgY2FzZS5cblxuICAgICAgICBjb25zdCBmaWVsZHM6IHtba2V5OiBzdHJpbmddOiBUZXh0IH0gPSB7fTtcblxuICAgICAgICAvLyBub3cgd29yayB3aXRoIHRoZSBmb3JtRGF0YSB0byBjcmVhdGUgdGhlIGZpZWxkcy5cbiAgICAgICAgRGljdHMub3duS2V5cyhmb3JtRGF0YSwgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIGZpZWxkc1trZXldID0gVGV4dHMuY3JlYXRlKHZhbHVlLCBUZXh0VHlwZS5IVE1MKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIEZsYXNoY2FyZHMuY3JlYXRlKEZsYXNoY2FyZFR5cGUuQkFTSUNfRlJPTlRfQkFDSywgZmllbGRzLCBhcmNoZXR5cGUsIHJlZik7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRGaWVsZHNUb01hcChmaWVsZHM6IHtba2V5OiBzdHJpbmddOiBUZXh0IH0gPSB7fSkge1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdDoge1tuYW1lOiBzdHJpbmddOiBIVE1MU3RyaW5nfSA9IHt9O1xuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGZpZWxkcykpIHtcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gZmllbGRzW2tleV0uSFRNTCE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBNb2NrRmxhc2hjYXJkcyB7XG5cbiAgICAvKipcbiAgICAgKiBBdHRhY2ggbW9jayBmbGFzaGNhcmRzIG9uIHRoZSBnaXZlbiBEb2NNZXRhIGZvciB0ZXN0aW5nXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBhdHRhY2hGbGFzaGNhcmRzKGRvY01ldGE6IERvY01ldGEpIHtcblxuICAgICAgICBsZXQgaWR4ID0gMDtcblxuICAgICAgICBPYmplY3QudmFsdWVzKGRvY01ldGEucGFnZU1ldGFzKS5mb3JFYWNoKHBhZ2VNZXRhID0+IHtcblxuICAgICAgICAgICAgY29uc3QgYXJjaGV0eXBlID0gXCI5ZDE0NmRiMS03YzMxLTRiY2YtODY2Yi03YjQ4NWM0ZTUwZWFcIjtcblxuICAgICAgICAgICAgLy8gbm9pbnNwZWN0aW9uIFRzTGludFxuICAgICAgICAgICAgY29uc3QgZnJvbnQgPSBUZXh0cy5jcmVhdGUoXCJXaGF0IGlzIHRoZSBjYXBpdGFsIG9mIENhbGlmb3JuaWE/IDxpbWcgc3JjPVxcXCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhFQUFRQU1RQUFPUkhIT1ZTS3VkZk91bHJTT3AzV095RFp1NlFkdkNjaFBHb2xmTzBvL1hCcy9mTndmalowZnJsMy96eTcvLy8vd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUNINUJBa0FBQkFBTEFBQUFBQVFBQkFBQUFWVklDU09aR2xDUUFvc0o2bXU3Zml5WmVLcU5LVG9RR0RzTThoQkFEZ1VYb0dBaXFoU3ZwNVFBblFLR0lnVWh3RlVZTENWREZDcktVRTFsQmF2QVZpRklEbFRJbWJLQzVHbTJoQjBTbEJDQk1RaUIwVWpJUUE3XFxcIiAvPlxcblwiICsgaWR4LCBUZXh0VHlwZS5IVE1MKTtcbiAgICAgICAgICAgIGNvbnN0IGJhY2sgPSBUZXh0cy5jcmVhdGUoXCJTYWNyYW1lbnRvXCIsIFRleHRUeXBlLlRFWFQpO1xuXG4gICAgICAgICAgICBjb25zdCBmaWVsZHMgPSB7XG4gICAgICAgICAgICAgICAgJ0Zyb250JzogZnJvbnQsXG4gICAgICAgICAgICAgICAgJ0JhY2snOiBiYWNrLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgcmVmID0gJ3BhZ2U6MSc7XG5cbiAgICAgICAgICAgIGNvbnN0IGZsYXNoY2FyZCA9IEZsYXNoY2FyZHMuY3JlYXRlKEZsYXNoY2FyZFR5cGUuQ0xPWkUsIGZpZWxkcywgYXJjaGV0eXBlLCByZWYpO1xuXG4gICAgICAgICAgICBwYWdlTWV0YS5mbGFzaGNhcmRzW2ZsYXNoY2FyZC5pZF0gPSBmbGFzaGNhcmQ7XG5cbiAgICAgICAgICAgICsraWR4O1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBkb2NNZXRhO1xuXG4gICAgfVxuXG59XG4iXX0=