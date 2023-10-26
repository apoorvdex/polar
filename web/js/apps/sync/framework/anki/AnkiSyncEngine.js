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
const Dictionaries_1 = require("../../../../util/Dictionaries");
const Optional_1 = require("../../../../util/ts/Optional");
const AnkiSyncJob_1 = require("./AnkiSyncJob");
const DocInfos_1 = require("../../../../metadata/DocInfos");
const Tags_1 = require("../../../../tags/Tags");
const Sets_1 = require("../../../../util/Sets");
const FlashcardDescriptors_1 = require("./FlashcardDescriptors");
const AnkiConnectFetch_1 = require("./AnkiConnectFetch");
class AnkiSyncEngine {
    constructor() {
        this.descriptor = new AnkiSyncEngineDescriptor();
    }
    sync(docMetaSupplierCollection, progress, deckNameStrategy = 'default') {
        return __awaiter(this, void 0, void 0, function* () {
            yield AnkiConnectFetch_1.AnkiConnectFetch.initialize();
            const noteDescriptors = yield this.toNoteDescriptors(deckNameStrategy, docMetaSupplierCollection);
            const deckNames = Sets_1.Sets.toSet(noteDescriptors.map(noteDescriptor => noteDescriptor.deckName));
            const deckDescriptors = Array.from(deckNames)
                .map(deckName => {
                return { name: deckName };
            });
            return new AnkiSyncJob_1.PendingAnkiSyncJob(progress, deckDescriptors, noteDescriptors);
        });
    }
    toNoteDescriptors(deckNameStrategy, docMetaSupplierCollection) {
        return __awaiter(this, void 0, void 0, function* () {
            const flashcardDescriptors = yield FlashcardDescriptors_1.FlashcardDescriptors.toFlashcardDescriptors(docMetaSupplierCollection);
            return flashcardDescriptors.map(flashcardDescriptor => {
                const deckName = this.computeDeckName(deckNameStrategy, flashcardDescriptor.docMeta.docInfo);
                const fields = {};
                Dictionaries_1.Dictionaries.forDict(flashcardDescriptor.flashcard.fields, (key, value) => {
                    fields[key] = Optional_1.Optional.of(value.HTML || value.TEXT || value.MARKDOWN).getOrElse('');
                });
                const docInfoTags = Optional_1.Optional.of(flashcardDescriptor.docMeta.docInfo.tags);
                const tags = docInfoTags.map(current => Object.values(current))
                    .getOrElse([])
                    .map(tag => tag.label);
                const modelName = FlashcardDescriptors_1.FlashcardDescriptors.toModelName(flashcardDescriptor);
                return {
                    guid: flashcardDescriptor.flashcard.guid,
                    deckName,
                    modelName,
                    fields,
                    tags
                };
            });
        });
    }
    computeDeckName(deckNameStrategy, docInfo) {
        let deckName;
        const tags = docInfo.tags;
        if (tags) {
            deckName = Object.values(tags)
                .filter(tag => tag.label.startsWith("deck:"))
                .map(tag => Tags_1.Tags.parseTypedTag(tag.label))
                .filter(typedTag => typedTag.isPresent())
                .map(typedTag => typedTag.get())
                .map(typedTag => typedTag.value)
                .pop();
        }
        if (!deckName) {
            if (deckNameStrategy === 'default') {
                return "Default";
            }
            deckName = DocInfos_1.DocInfos.bestTitle(docInfo);
        }
        return deckName;
    }
}
exports.AnkiSyncEngine = AnkiSyncEngine;
class AnkiSyncEngineDescriptor {
    constructor() {
        this.id = "a0138889-ff14-41e8-9466-42d960fe80d9";
        this.name = "anki";
        this.description = "Sync Engine for Anki";
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5raVN5bmNFbmdpbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBbmtpU3luY0VuZ2luZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBUUEsZ0VBQTJEO0FBSTNELDJEQUFzRDtBQUN0RCwrQ0FBaUQ7QUFDakQsNERBQXVEO0FBQ3ZELGdEQUEyQztBQUczQyxnREFBMkM7QUFFM0MsaUVBQTREO0FBQzVELHlEQUFvRDtBQU1wRCxNQUFhLGNBQWM7SUFBM0I7UUFFb0IsZUFBVSxHQUF5QixJQUFJLHdCQUF3QixFQUFFLENBQUM7SUE4RnRGLENBQUM7SUE1RmdCLElBQUksQ0FBQyx5QkFBb0QsRUFDcEQsUUFBOEIsRUFDOUIsbUJBQXFDLFNBQVM7O1lBRzVELE1BQU0sbUNBQWdCLENBQUMsVUFBVSxFQUFFLENBQUM7WUFFcEMsTUFBTSxlQUFlLEdBQUcsTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUseUJBQXlCLENBQUMsQ0FBQztZQUVsRyxNQUFNLFNBQVMsR0FBRyxXQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUU3RixNQUFNLGVBQWUsR0FBcUIsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7aUJBQzFELEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDWixPQUFPLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQyxDQUFDO1lBQzVCLENBQUMsQ0FBQyxDQUFDO1lBRVAsT0FBTyxJQUFJLGdDQUFrQixDQUFDLFFBQVEsRUFBRSxlQUFlLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFFOUUsQ0FBQztLQUFBO0lBRWUsaUJBQWlCLENBQUMsZ0JBQWtDLEVBQ2xDLHlCQUFvRDs7WUFFbEYsTUFBTyxvQkFBb0IsR0FBRyxNQUFNLDJDQUFvQixDQUFDLHNCQUFzQixDQUFDLHlCQUF5QixD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Z2luZX0gZnJvbSAnLi4vU3luY0VuZ2luZSc7XG5pbXBvcnQge1N5bmNFbmdpbmVEZXNjcmlwdG9yfSBmcm9tICcuLi9TeW5jRW5naW5lRGVzY3JpcHRvcic7XG5pbXBvcnQge0RvY01ldGFTZXR9IGZyb20gJy4uLy4uLy4uLy4uL21ldGFkYXRhL0RvY01ldGFTZXQnO1xuaW1wb3J0IHtTeW5jUHJvZ3Jlc3NMaXN0ZW5lcn0gZnJvbSAnLi4vU3luY1Byb2dyZXNzTGlzdGVuZXInO1xuaW1wb3J0IHtQZW5kaW5nU3luY0pvYn0gZnJvbSAnLi4vU3luY0pvYic7XG5pbXBvcnQge0RvY01ldGF9IGZyb20gJy4uLy4uLy4uLy4uL21ldGFkYXRhL0RvY01ldGEnO1xuaW1wb3J0IHtGbGFzaGNhcmR9IGZyb20gJy4uLy4uLy4uLy4uL21ldGFkYXRhL0ZsYXNoY2FyZCc7XG5pbXBvcnQge1BhZ2VJbmZvfSBmcm9tICcuLi8uLi8uLi8uLi9tZXRhZGF0YS9QYWdlSW5mbyc7XG5pbXBvcnQge0RpY3Rpb25hcmllc30gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9EaWN0aW9uYXJpZXMnO1xuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQge0RlY2tEZXNjcmlwdG9yfSBmcm9tICcuL0RlY2tEZXNjcmlwdG9yJztcbmltcG9ydCB7Tm90ZURlc2NyaXB0b3J9IGZyb20gJy4vTm90ZURlc2NyaXB0b3InO1xuaW1wb3J0IHtPcHRpb25hbH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC90cy9PcHRpb25hbCc7XG5pbXBvcnQge1BlbmRpbmdBbmtpU3luY0pvYn0gZnJvbSAnLi9BbmtpU3luY0pvYic7XG5pbXBvcnQge0RvY0luZm9zfSBmcm9tICcuLi8uLi8uLi8uLi9tZXRhZGF0YS9Eb2NJbmZvcyc7XG5pbXBvcnQge1RhZ3N9IGZyb20gJy4uLy4uLy4uLy4uL3RhZ3MvVGFncyc7XG5pbXBvcnQge0RvY0luZm99IGZyb20gJy4uLy4uLy4uLy4uL21ldGFkYXRhL0RvY0luZm8nO1xuaW1wb3J0IHtEb2NNZXRhU3VwcGxpZXJDb2xsZWN0aW9ufSBmcm9tICcuLi8uLi8uLi8uLi9tZXRhZGF0YS9Eb2NNZXRhU3VwcGxpZXJDb2xsZWN0aW9uJztcbmltcG9ydCB7U2V0c30gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9TZXRzJztcbmltcG9ydCB7Rmxhc2hjYXJkRGVzY3JpcHRvcn0gZnJvbSAnLi9GbGFzaGNhcmREZXNjcmlwdG9yJztcbmltcG9ydCB7Rmxhc2hjYXJkRGVzY3JpcHRvcnN9IGZyb20gJy4vRmxhc2hjYXJkRGVzY3JpcHRvcnMnO1xuaW1wb3J0IHtBbmtpQ29ubmVjdEZldGNofSBmcm9tICcuL0Fua2lDb25uZWN0RmV0Y2gnO1xuXG4vKipcbiAqIFN5bmMgZW5naW5lIGZvciBBbmtpLiAgVGFrZXMgY2FyZHMgcmVnaXN0ZXJlZCBpbiBhIERvY01ldGEgYW5kIHRoZW4gdHJhbnNmZXJzXG4gKiB0aGVtIG92ZXIgdG8gQW5raS5cbiAqL1xuZXhwb3J0IGNsYXNzIEFua2lTeW5jRW5naW5lIGltcGxlbWVudHMgU3luY0VuZ2luZSB7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgZGVzY3JpcHRvcjogU3luY0VuZ2luZURlc2NyaXB0b3IgPSBuZXcgQW5raVN5bmNFbmdpbmVEZXNjcmlwdG9yKCk7XG5cbiAgICBwdWJsaWMgYXN5bmMgc3luYyhkb2NNZXRhU3VwcGxpZXJDb2xsZWN0aW9uOiBEb2NNZXRhU3VwcGxpZXJDb2xsZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzOiBTeW5jUHJvZ3Jlc3NMaXN0ZW5lcixcbiAgICAgICAgICAgICAgICAgICAgICBkZWNrTmFtZVN0cmF0ZWd5OiBEZWNrTmFtZVN0cmF0ZWd5ID0gJ2RlZmF1bHQnKTogUHJvbWlzZTxQZW5kaW5nU3luY0pvYj4ge1xuXG4gICAgICAgIC8vIGRldGVybWluZSBob3cgdG8gY29ubmVjdCB0byBBbmtpXG4gICAgICAgIGF3YWl0IEFua2lDb25uZWN0RmV0Y2guaW5pdGlhbGl6ZSgpO1xuXG4gICAgICAgIGNvbnN0IG5vdGVEZXNjcmlwdG9ycyA9IGF3YWl0IHRoaXMudG9Ob3RlRGVzY3JpcHRvcnMoZGVja05hbWVTdHJhdGVneSwgZG9jTWV0YVN1cHBsaWVyQ29sbGVjdGlvbik7XG5cbiAgICAgICAgY29uc3QgZGVja05hbWVzID0gU2V0cy50b1NldChub3RlRGVzY3JpcHRvcnMubWFwKG5vdGVEZXNjcmlwdG9yID0+IG5vdGVEZXNjcmlwdG9yLmRlY2tOYW1lKSk7XG5cbiAgICAgICAgY29uc3QgZGVja0Rlc2NyaXB0b3JzOiBEZWNrRGVzY3JpcHRvcltdID0gQXJyYXkuZnJvbShkZWNrTmFtZXMpXG4gICAgICAgICAgICAubWFwKGRlY2tOYW1lID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge25hbWU6IGRlY2tOYW1lfTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBuZXcgUGVuZGluZ0Fua2lTeW5jSm9iKHByb2dyZXNzLCBkZWNrRGVzY3JpcHRvcnMsIG5vdGVEZXNjcmlwdG9ycyk7XG5cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYXN5bmMgdG9Ob3RlRGVzY3JpcHRvcnMoZGVja05hbWVTdHJhdGVneTogRGVja05hbWVTdHJhdGVneSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jTWV0YVN1cHBsaWVyQ29sbGVjdGlvbjogRG9jTWV0YVN1cHBsaWVyQ29sbGVjdGlvbik6IFByb21pc2U8Tm90ZURlc2NyaXB0b3JbXT4ge1xuXG4gICAgICAgIGNvbnN0ICBmbGFzaGNhcmREZXNjcmlwdG9ycyA9IGF3YWl0IEZsYXNoY2FyZERlc2NyaXB0b3JzLnRvRmxhc2hjYXJkRGVzY3JpcHRvcnMoZG9jTWV0YVN1cHBsaWVyQ29sbGVjdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIGZsYXNoY2FyZERlc2NyaXB0b3JzLm1hcChmbGFzaGNhcmREZXNjcmlwdG9yID0+IHtcblxuICAgICAgICAgICAgY29uc3QgZGVja05hbWUgPSB0aGlzLmNvbXB1dGVEZWNrTmFtZShkZWNrTmFtZVN0cmF0ZWd5LCBmbGFzaGNhcmREZXNjcmlwdG9yLmRvY01ldGEuZG9jSW5mbyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGZpZWxkczoge1tuYW1lOiBzdHJpbmddOiBzdHJpbmd9ID0ge307XG5cbiAgICAgICAgICAgIC8vIG5lZWQgdG8gY3JlYXRlIHRoZSBmaWVsZHMgJ2Zyb250JyBhbmQgJ2JhY2snXG4gICAgICAgICAgICBEaWN0aW9uYXJpZXMuZm9yRGljdChmbGFzaGNhcmREZXNjcmlwdG9yLmZsYXNoY2FyZC5maWVsZHMsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgZmllbGRzW2tleV0gPSBPcHRpb25hbC5vZih2YWx1ZS5IVE1MIHx8IHZhbHVlLlRFWFQgfHwgdmFsdWUuTUFSS0RPV04pLmdldE9yRWxzZSgnJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgZG9jSW5mb1RhZ3MgPSBPcHRpb25hbC5vZihmbGFzaGNhcmREZXNjcmlwdG9yLmRvY01ldGEuZG9jSW5mby50YWdzKTtcblxuICAgICAgICAgICAgY29uc3QgdGFncyA9IGRvY0luZm9UYWdzLm1hcChjdXJyZW50ID0+IE9iamVjdC52YWx1ZXMoY3VycmVudCkpXG4gICAgICAgICAgICAgICAgICAgICAgIC5nZXRPckVsc2UoW10pXG4gICAgICAgICAgICAgICAgICAgICAgIC5tYXAodGFnID0+IHRhZy5sYWJlbCk7XG5cbiAgICAgICAgICAgIC8vIFRPRE86IGltcGxlbWVudCBtb3JlIG1vZGVsIHR5cGVzLi4uIG5vdCBqdXN0IGJhc2ljLlxuXG4gICAgICAgICAgICBjb25zdCBtb2RlbE5hbWUgPSBGbGFzaGNhcmREZXNjcmlwdG9ycy50b01vZGVsTmFtZShmbGFzaGNhcmREZXNjcmlwdG9yKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBndWlkOiBmbGFzaGNhcmREZXNjcmlwdG9yLmZsYXNoY2FyZC5ndWlkLFxuICAgICAgICAgICAgICAgIGRlY2tOYW1lLFxuICAgICAgICAgICAgICAgIG1vZGVsTmFtZSxcbiAgICAgICAgICAgICAgICBmaWVsZHMsXG4gICAgICAgICAgICAgICAgdGFnc1xuICAgICAgICAgICAgfTtcblxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHByb3RlY3RlZCBjb21wdXRlRGVja05hbWUoZGVja05hbWVTdHJhdGVneTogRGVja05hbWVTdHJhdGVneSwgZG9jSW5mbzogRG9jSW5mbyk6IHN0cmluZyB7XG5cbiAgICAgICAgbGV0IGRlY2tOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAgICAgY29uc3QgdGFncyA9IGRvY0luZm8udGFncztcblxuICAgICAgICBpZiAodGFncykge1xuXG4gICAgICAgICAgICAvLyBUT0RPOiB0ZXN0IHRoaXMuLlxuXG4gICAgICAgICAgICBkZWNrTmFtZSA9IE9iamVjdC52YWx1ZXModGFncylcbiAgICAgICAgICAgICAgICAuZmlsdGVyKHRhZyA9PiB0YWcubGFiZWwuc3RhcnRzV2l0aChcImRlY2s6XCIpKVxuICAgICAgICAgICAgICAgIC5tYXAodGFnID0+IFRhZ3MucGFyc2VUeXBlZFRhZyh0YWcubGFiZWwpKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIodHlwZWRUYWcgPT4gdHlwZWRUYWcuaXNQcmVzZW50KCkpXG4gICAgICAgICAgICAgICAgLm1hcCh0eXBlZFRhZyA9PiB0eXBlZFRhZy5nZXQoKSlcbiAgICAgICAgICAgICAgICAubWFwKHR5cGVkVGFnID0+IHR5cGVkVGFnLnZhbHVlKVxuICAgICAgICAgICAgICAgIC5wb3AoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCEgZGVja05hbWUpIHtcblxuICAgICAgICAgICAgaWYgKGRlY2tOYW1lU3RyYXRlZ3kgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIkRlZmF1bHRcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVja05hbWUgPSBEb2NJbmZvcy5iZXN0VGl0bGUoZG9jSW5mbyk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkZWNrTmFtZTtcblxuICAgIH1cblxufVxuXG5cbmNsYXNzIEFua2lTeW5jRW5naW5lRGVzY3JpcHRvciBpbXBsZW1lbnRzIFN5bmNFbmdpbmVEZXNjcmlwdG9yIHtcblxuICAgIHB1YmxpYyByZWFkb25seSBpZDogc3RyaW5nID0gXCJhMDEzODg4OS1mZjE0LTQxZTgtOTQ2Ni00MmQ5NjBmZTgwZDlcIjtcblxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lOiBzdHJpbmcgPSBcImFua2lcIjtcblxuICAgIHB1YmxpYyByZWFkb25seSBkZXNjcmlwdGlvbjogc3RyaW5nID0gXCJTeW5jIEVuZ2luZSBmb3IgQW5raVwiO1xuXG59XG5cbi8qKlxuICogVGhlIHN0cmF0ZWd5IGZvciBjb21wdXRpbmcgdGhlIGRlY2sgbmFtZSBmb3IgdGhlIGZsYXNoY2FyZHMuXG4gKlxuICogZGVmYXVsdDogVXNlIHRoZSBEZWZhdWx0IGRlY2suXG4gKlxuICogcGVyLWRvY3VtZW50OiBDcmVhdGUgYSBkZWNrIHBlciBkb2N1bWVudC5cbiAqL1xuZXhwb3J0IHR5cGUgRGVja05hbWVTdHJhdGVneSA9ICdkZWZhdWx0JyB8ICdwZXItZG9jdW1lbnQnO1xuIl19