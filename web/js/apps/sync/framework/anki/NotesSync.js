"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const AddNoteClient_1 = require("./clients/AddNoteClient");
const FindNotesClient_1 = require("./clients/FindNotesClient");
const Logger_1 = require("../../../../logger/Logger");
const StoreMediaFileClient_1 = require("./clients/StoreMediaFileClient");
const Dictionaries_1 = require("../../../../util/Dictionaries");
const MediaContents_1 = require("./MediaContents");
const AnkiFields_1 = require("./AnkiFields");
const CanAddNotesClient_1 = require("./clients/CanAddNotesClient");
const Optional_1 = require("../../../../util/ts/Optional");
const util = __importStar(require("util"));
const log = Logger_1.Logger.create();
class NotesSync {
    constructor(syncQueue) {
        this.addNoteClient = new AddNoteClient_1.AddNoteClient();
        this.canAddNotesClient = new CanAddNotesClient_1.CanAddNotesClient();
        this.findNotesClient = new FindNotesClient_1.FindNotesClient();
        this.storeMediaFileClient = new StoreMediaFileClient_1.StoreMediaFileClient();
        this.results = {
            created: []
        };
        this.syncQueue = syncQueue;
    }
    enqueue(noteDescriptors) {
        this.syncQueue.add(() => __awaiter(this, void 0, void 0, function* () {
            return yield this.findNotes(noteDescriptors);
        }));
        return this.results;
    }
    findNotes(noteDescriptors) {
        return __awaiter(this, void 0, void 0, function* () {
            const normalizedNotes = noteDescriptors.map(current => this.normalize(current));
            normalizedNotes.forEach(normalizedNote => {
                this.syncQueue.add(() => __awaiter(this, void 0, void 0, function* () {
                    return yield this.findNote(normalizedNote);
                }));
            });
            const message = `Performing sync on ${noteDescriptors.length} notes.`;
            return Optional_1.Optional.of({ message });
        });
    }
    findNote(normalizedNote) {
        return __awaiter(this, void 0, void 0, function* () {
            const polarGUID = NotesSync.createPolarID(normalizedNote.noteDescriptor.guid);
            const existingIDs = yield this.findNotesClient.execute(`tag:${polarGUID.format()}`);
            if (existingIDs.length === 0) {
                normalizedNote.noteDescriptor.tags.push("_polar-flashcard");
                if (!normalizedNote.noteDescriptor.tags.includes(polarGUID.format())) {
                    normalizedNote.noteDescriptor.tags.push(polarGUID.format());
                }
                this.syncQueue.add(() => __awaiter(this, void 0, void 0, function* () { return yield this.canAddNote(normalizedNote); }));
                const message = `Note not found.  Checking if we can add.`;
                log.debug(message, normalizedNote);
                return Optional_1.Optional.of({ message });
            }
            else {
                const message = 'Note already found. Skipping.';
                log.debug(message, normalizedNote);
                return Optional_1.Optional.of({ message });
            }
        });
    }
    canAddNote(normalizedNote) {
        return __awaiter(this, void 0, void 0, function* () {
            const canAddNotes = yield this.canAddNotesClient.execute([normalizedNote.noteDescriptor]);
            let message;
            this.syncQueue.add(() => __awaiter(this, void 0, void 0, function* () { return yield this.addNote(normalizedNote); }));
            if (canAddNotes.length > 0 && canAddNotes[0]) {
                message = 'Note can be added';
            }
            else {
                message = 'Note already exists';
            }
            log.debug(message, normalizedNote);
            return Optional_1.Optional.of({ message });
        });
    }
    storeMediaFile(mediaFile) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.storeMediaFileClient.execute(mediaFile.filename, mediaFile.data);
            return Optional_1.Optional.of({ message: `Sync'd media file: ${mediaFile.filename}` });
        });
    }
    addNote(normalizedNote) {
        return __awaiter(this, void 0, void 0, function* () {
            let message = `Added note and ${normalizedNote.mediaFiles.length} media files.`;
            try {
                normalizedNote.mediaFiles.forEach(current => {
                    this.syncQueue.add(() => __awaiter(this, void 0, void 0, function* () { return this.storeMediaFile(current); }));
                });
                yield this.addNoteClient.execute(normalizedNote.noteDescriptor);
                this.results.created.push(normalizedNote.noteDescriptor);
            }
            catch (err) {
                message = "Failed to create note: " + this.pp(normalizedNote.noteDescriptor);
                log.warn(message, err);
                return Optional_1.Optional.of({ message, failed: true });
            }
            return Optional_1.Optional.of({ message });
        });
    }
    pp(noteDescriptor) {
        return util.inspect(noteDescriptor, false, undefined, false);
    }
    normalize(noteDescriptor) {
        const mediaFiles = [];
        let fields = {};
        Dictionaries_1.Dictionaries.forDict(noteDescriptor.fields, (key, value) => {
            const mediaContent = MediaContents_1.MediaContents.parse(value);
            fields[key] = mediaContent.content;
            mediaFiles.push(...mediaContent.mediaFiles);
        });
        fields = AnkiFields_1.AnkiFields.normalize(fields);
        const normalizedNoteDescriptor = {
            guid: noteDescriptor.guid,
            deckName: noteDescriptor.deckName,
            modelName: noteDescriptor.modelName,
            fields,
            tags: noteDescriptor.tags
        };
        return {
            noteDescriptor: normalizedNoteDescriptor,
            mediaFiles
        };
    }
    static createPolarID(guid) {
        return new Tag('polar_guid', guid);
    }
}
exports.NotesSync = NotesSync;
class Tag {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
    format() {
        return `${this.name}:${this.value}`;
    }
}
exports.Tag = Tag;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90ZXNTeW5jLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTm90ZXNTeW5jLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsMkRBQXNFO0FBQ3RFLCtEQUE0RTtBQUU1RSxzREFBaUQ7QUFDakQseUVBQXNHO0FBQ3RHLGdFQUEyRDtBQUMzRCxtREFBOEM7QUFDOUMsNkNBQXdDO0FBQ3hDLG1FQUFrRjtBQUVsRiwyREFBc0Q7QUFDdEQsMkNBQTZCO0FBRTdCLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUs1QixNQUFhLFNBQVM7SUFvQmxCLFlBQVksU0FBb0I7UUFsQnpCLGtCQUFhLEdBQW1CLElBQUksNkJBQWEsRUFBRSxDQUFDO1FBRXBELHNCQUFpQixHQUF1QixJQUFJLHFDQUFpQixFQUFFLENBQUM7UUFFaEUsb0JBQWUsR0FBcUIsSUFBSSxpQ0FBZSxFQUFFLENBQUM7UUFFMUQseUJBQW9CLEdBQTBCLElBQUksMkNBQW9CLEVBQUUsQ0FBQztRQUl4RSxZQUFPLEdBQXNCO1lBQ2pDLE9BQU8sRUFBRSxFQUFFO1NBQ2QsQ0FBQztRQU9FLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7SUFPTSxPQUFPLENBQUMsZUFBaUM7UUFFNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBUyxFQUFFO1lBQzFCLE9BQU8sTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQSxDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFFeEIsQ0FBQztJQUVhLFNBQVMsQ0FBQyxlQUFpQzs7WUFFckQsTUFBTSxlQUFlLEdBQUcsZUFBZSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUVoRixlQUFl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QUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRU0sTUFBTTtRQUNULE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0NBRUo7QUFkRCxrQkFjQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Tm90ZURlc2NyaXB0b3J9IGZyb20gJy4vTm90ZURlc2NyaXB0b3InO1xuaW1wb3J0IHtBZGROb3RlQ2xpZW50LCBJQWRkTm90ZUNsaWVudH0gZnJvbSAnLi9jbGllbnRzL0FkZE5vdGVDbGllbnQnO1xuaW1wb3J0IHtGaW5kTm90ZXNDbGllbnQsIElGaW5kTm90ZXNDbGllbnR9IGZyb20gJy4vY2xpZW50cy9GaW5kTm90ZXNDbGllbnQnO1xuaW1wb3J0IHtTeW5jUXVldWV9IGZyb20gJy4uL1N5bmNRdWV1ZSc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vLi4vLi4vLi4vbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0lTdG9yZU1lZGlhRmlsZUNsaWVudCwgTWVkaWFGaWxlLCBTdG9yZU1lZGlhRmlsZUNsaWVudH0gZnJvbSAnLi9jbGllbnRzL1N0b3JlTWVkaWFGaWxlQ2xpZW50JztcbmltcG9ydCB7RGljdGlvbmFyaWVzfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL0RpY3Rpb25hcmllcyc7XG5pbXBvcnQge01lZGlhQ29udGVudHN9IGZyb20gJy4vTWVkaWFDb250ZW50cyc7XG5pbXBvcnQge0Fua2lGaWVsZHN9IGZyb20gJy4vQW5raUZpZWxkcyc7XG5pbXBvcnQge0NhbkFkZE5vdGVzQ2xpZW50LCBJQ2FuQWRkTm90ZXNDbGllbnR9IGZyb20gJy4vY2xpZW50cy9DYW5BZGROb3Rlc0NsaWVudCc7XG5pbXBvcnQge1N5bmNUYXNrUmVzdWx0fSBmcm9tICcuLi9TeW5jVGFzayc7XG5pbXBvcnQge09wdGlvbmFsfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL3RzL09wdGlvbmFsJztcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSBcInV0aWxcIjtcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG4vKipcbiAqIFBlcmZvcm1zIHN5bmMgb2Ygbm90ZXMgb25jZSB3ZSBhcmUgY2VydGFpbiB0aGUgZGVja3MgYXJlIGNyZWF0ZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBOb3Rlc1N5bmMge1xuXG4gICAgcHVibGljIGFkZE5vdGVDbGllbnQ6IElBZGROb3RlQ2xpZW50ID0gbmV3IEFkZE5vdGVDbGllbnQoKTtcblxuICAgIHB1YmxpYyBjYW5BZGROb3Rlc0NsaWVudDogSUNhbkFkZE5vdGVzQ2xpZW50ID0gbmV3IENhbkFkZE5vdGVzQ2xpZW50KCk7XG5cbiAgICBwdWJsaWMgZmluZE5vdGVzQ2xpZW50OiBJRmluZE5vdGVzQ2xpZW50ID0gbmV3IEZpbmROb3Rlc0NsaWVudCgpO1xuXG4gICAgcHVibGljIHN0b3JlTWVkaWFGaWxlQ2xpZW50OiBJU3RvcmVNZWRpYUZpbGVDbGllbnQgPSBuZXcgU3RvcmVNZWRpYUZpbGVDbGllbnQoKTtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgc3luY1F1ZXVlOiBTeW5jUXVldWU7XG5cbiAgICBwcml2YXRlIHJlc3VsdHM6IE5vdGVzU3luY2hyb25pemVkID0ge1xuICAgICAgICBjcmVhdGVkOiBbXVxuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzeW5jUXVldWUgVGhlIHF1ZXVlIHRvIHVzZSBmb3IgYXN5bmMgb3BlcmF0aW9ucy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzeW5jUXVldWU6IFN5bmNRdWV1ZSkge1xuICAgICAgICB0aGlzLnN5bmNRdWV1ZSA9IHN5bmNRdWV1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtIHRoZSBhY3R1YWwgc3luYyBvZiB0aGUgbm90ZXMgdG8gQW5raS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBub3RlRGVzY3JpcHRvcnMgVGhlIG5vdGVzIHdlIG5lZWQgdG8gc3luYy5cbiAgICAgKi9cbiAgICBwdWJsaWMgZW5xdWV1ZShub3RlRGVzY3JpcHRvcnM6IE5vdGVEZXNjcmlwdG9yW10pOiBOb3Rlc1N5bmNocm9uaXplZCB7XG5cbiAgICAgICAgdGhpcy5zeW5jUXVldWUuYWRkKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmZpbmROb3Rlcyhub3RlRGVzY3JpcHRvcnMpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHRzO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBmaW5kTm90ZXMobm90ZURlc2NyaXB0b3JzOiBOb3RlRGVzY3JpcHRvcltdKTogUHJvbWlzZTxPcHRpb25hbDxTeW5jVGFza1Jlc3VsdD4+IHtcblxuICAgICAgICBjb25zdCBub3JtYWxpemVkTm90ZXMgPSBub3RlRGVzY3JpcHRvcnMubWFwKGN1cnJlbnQgPT4gdGhpcy5ub3JtYWxpemUoY3VycmVudCkpO1xuXG4gICAgICAgIG5vcm1hbGl6ZWROb3Rlcy5mb3JFYWNoKG5vcm1hbGl6ZWROb3RlID0+IHtcblxuICAgICAgICAgICAgdGhpcy5zeW5jUXVldWUuYWRkKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5maW5kTm90ZShub3JtYWxpemVkTm90ZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBtZXNzYWdlID0gYFBlcmZvcm1pbmcgc3luYyBvbiAke25vdGVEZXNjcmlwdG9ycy5sZW5ndGh9IG5vdGVzLmA7XG5cbiAgICAgICAgcmV0dXJuIE9wdGlvbmFsLm9mKHttZXNzYWdlfSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGZpbmROb3RlKG5vcm1hbGl6ZWROb3RlOiBOb3JtYWxpemVkTm90ZSk6IFByb21pc2U8T3B0aW9uYWw8U3luY1Rhc2tSZXN1bHQ+PiB7XG5cbiAgICAgICAgY29uc3QgcG9sYXJHVUlEID0gTm90ZXNTeW5jLmNyZWF0ZVBvbGFySUQobm9ybWFsaXplZE5vdGUubm90ZURlc2NyaXB0b3IuZ3VpZCk7XG5cbiAgICAgICAgY29uc3QgZXhpc3RpbmdJRHMgPSBhd2FpdCB0aGlzLmZpbmROb3Rlc0NsaWVudC5leGVjdXRlKGB0YWc6JHtwb2xhckdVSUQuZm9ybWF0KCl9YCk7XG5cbiAgICAgICAgaWYgKGV4aXN0aW5nSURzLmxlbmd0aCA9PT0gMCkge1xuXG4gICAgICAgICAgICAvLyBhZGQgYSBzcGVjaWFsIHRhZyBzbyB0aGF0IHVzZXJzIGNhbiBiYWNrIG91dCBwb2xhciBmbGFzaGNhcmRzXG4gICAgICAgICAgICAvLyBhbmQgZGVsZXRlIHRoZW0gaWYgbmVjZXNzYXJ5LlxuICAgICAgICAgICAgbm9ybWFsaXplZE5vdGUubm90ZURlc2NyaXB0b3IudGFncy5wdXNoKFwiX3BvbGFyLWZsYXNoY2FyZFwiKTtcblxuICAgICAgICAgICAgaWYgKCEgbm9ybWFsaXplZE5vdGUubm90ZURlc2NyaXB0b3IudGFncy5pbmNsdWRlcyhwb2xhckdVSUQuZm9ybWF0KCkpKSB7XG4gICAgICAgICAgICAgICAgLy8gIG1ha2Ugc3VyZSB0aGUgbm90ZURlc2NyaXB0b3IgaGFzIHRoZSBwcm9wZXIgdGFnLlxuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWROb3RlLm5vdGVEZXNjcmlwdG9yLnRhZ3MucHVzaChwb2xhckdVSUQuZm9ybWF0KCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnN5bmNRdWV1ZS5hZGQoYXN5bmMgKCkgPT4gYXdhaXQgdGhpcy5jYW5BZGROb3RlKG5vcm1hbGl6ZWROb3RlKSk7XG5cbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgTm90ZSBub3QgZm91bmQuICBDaGVja2luZyBpZiB3ZSBjYW4gYWRkLmA7XG5cbiAgICAgICAgICAgIGxvZy5kZWJ1ZyhtZXNzYWdlLCBub3JtYWxpemVkTm90ZSk7XG5cbiAgICAgICAgICAgIHJldHVybiBPcHRpb25hbC5vZih7bWVzc2FnZX0pO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnTm90ZSBhbHJlYWR5IGZvdW5kLiBTa2lwcGluZy4nO1xuXG4gICAgICAgICAgICBsb2cuZGVidWcobWVzc2FnZSwgbm9ybWFsaXplZE5vdGUpO1xuXG4gICAgICAgICAgICByZXR1cm4gT3B0aW9uYWwub2Yoe21lc3NhZ2V9KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBjYW5BZGROb3RlKG5vcm1hbGl6ZWROb3RlOiBOb3JtYWxpemVkTm90ZSk6IFByb21pc2U8T3B0aW9uYWw8U3luY1Rhc2tSZXN1bHQ+PiB7XG5cbiAgICAgICAgY29uc3QgY2FuQWRkTm90ZXMgPSBhd2FpdCB0aGlzLmNhbkFkZE5vdGVzQ2xpZW50LmV4ZWN1dGUoW25vcm1hbGl6ZWROb3RlLm5vdGVEZXNjcmlwdG9yXSk7XG5cbiAgICAgICAgbGV0IG1lc3NhZ2U6IHN0cmluZztcblxuICAgICAgICB0aGlzLnN5bmNRdWV1ZS5hZGQoYXN5bmMgKCkgPT4gYXdhaXQgdGhpcy5hZGROb3RlKG5vcm1hbGl6ZWROb3RlKSk7XG5cbiAgICAgICAgaWYgKGNhbkFkZE5vdGVzLmxlbmd0aCA+IDAgJiYgY2FuQWRkTm90ZXNbMF0pIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSAnTm90ZSBjYW4gYmUgYWRkZWQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVzc2FnZSA9ICdOb3RlIGFscmVhZHkgZXhpc3RzJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxvZy5kZWJ1ZyhtZXNzYWdlLCBub3JtYWxpemVkTm90ZSk7XG4gICAgICAgIHJldHVybiBPcHRpb25hbC5vZih7bWVzc2FnZX0pO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBzdG9yZU1lZGlhRmlsZShtZWRpYUZpbGU6IE1lZGlhRmlsZSk6IFByb21pc2U8T3B0aW9uYWw8U3luY1Rhc2tSZXN1bHQ+PiAge1xuICAgICAgICBhd2FpdCB0aGlzLnN0b3JlTWVkaWFGaWxlQ2xpZW50LmV4ZWN1dGUobWVkaWFGaWxlLmZpbGVuYW1lLCBtZWRpYUZpbGUuZGF0YSk7XG4gICAgICAgIHJldHVybiBPcHRpb25hbC5vZih7bWVzc2FnZTogYFN5bmMnZCBtZWRpYSBmaWxlOiAke21lZGlhRmlsZS5maWxlbmFtZX1gfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBhZGROb3RlKG5vcm1hbGl6ZWROb3RlOiBOb3JtYWxpemVkTm90ZSk6IFByb21pc2U8T3B0aW9uYWw8U3luY1Rhc2tSZXN1bHQ+PiB7XG5cbiAgICAgICAgbGV0IG1lc3NhZ2UgPSBgQWRkZWQgbm90ZSBhbmQgJHtub3JtYWxpemVkTm90ZS5tZWRpYUZpbGVzLmxlbmd0aH0gbWVkaWEgZmlsZXMuYDtcblxuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICBub3JtYWxpemVkTm90ZS5tZWRpYUZpbGVzLmZvckVhY2goY3VycmVudCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zeW5jUXVldWUuYWRkKGFzeW5jICgpID0+IHRoaXMuc3RvcmVNZWRpYUZpbGUoY3VycmVudCkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGF3YWl0IHRoaXMuYWRkTm90ZUNsaWVudC5leGVjdXRlKG5vcm1hbGl6ZWROb3RlLm5vdGVEZXNjcmlwdG9yKTtcblxuICAgICAgICAgICAgdGhpcy5yZXN1bHRzLmNyZWF0ZWQucHVzaChub3JtYWxpemVkTm90ZS5ub3RlRGVzY3JpcHRvcik7XG5cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gXCJGYWlsZWQgdG8gY3JlYXRlIG5vdGU6IFwiICsgdGhpcy5wcChub3JtYWxpemVkTm90ZS5ub3RlRGVzY3JpcHRvcik7XG4gICAgICAgICAgICBsb2cud2FybihtZXNzYWdlLCBlcnIpO1xuICAgICAgICAgICAgcmV0dXJuIE9wdGlvbmFsLm9mKHttZXNzYWdlLCBmYWlsZWQ6IHRydWV9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBPcHRpb25hbC5vZih7bWVzc2FnZX0pO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwcChub3RlRGVzY3JpcHRvcjogTm90ZURlc2NyaXB0b3IpIHtcbiAgICAgICAgcmV0dXJuIHV0aWwuaW5zcGVjdChub3RlRGVzY3JpcHRvciwgZmFsc2UsIHVuZGVmaW5lZCwgZmFsc2UpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbm9ybWFsaXplKG5vdGVEZXNjcmlwdG9yOiBOb3RlRGVzY3JpcHRvcik6IE5vcm1hbGl6ZWROb3RlIHtcblxuICAgICAgICBjb25zdCBtZWRpYUZpbGVzOiBNZWRpYUZpbGVbXSA9IFtdO1xuICAgICAgICBsZXQgZmllbGRzOiB7W25hbWU6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcblxuICAgICAgICBEaWN0aW9uYXJpZXMuZm9yRGljdChub3RlRGVzY3JpcHRvci5maWVsZHMsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZWRpYUNvbnRlbnQgPSBNZWRpYUNvbnRlbnRzLnBhcnNlKHZhbHVlKTtcbiAgICAgICAgICAgIGZpZWxkc1trZXldID0gbWVkaWFDb250ZW50LmNvbnRlbnQ7XG4gICAgICAgICAgICBtZWRpYUZpbGVzLnB1c2goLi4ubWVkaWFDb250ZW50Lm1lZGlhRmlsZXMpO1xuICAgICAgICB9KTtcblxuICAgICAgICBmaWVsZHMgPSBBbmtpRmllbGRzLm5vcm1hbGl6ZShmaWVsZHMpO1xuXG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWROb3RlRGVzY3JpcHRvcjogTm90ZURlc2NyaXB0b3IgPSB7XG4gICAgICAgICAgICBndWlkOiBub3RlRGVzY3JpcHRvci5ndWlkLFxuICAgICAgICAgICAgZGVja05hbWU6IG5vdGVEZXNjcmlwdG9yLmRlY2tOYW1lLFxuICAgICAgICAgICAgbW9kZWxOYW1lOiBub3RlRGVzY3JpcHRvci5tb2RlbE5hbWUsXG4gICAgICAgICAgICBmaWVsZHMsXG4gICAgICAgICAgICB0YWdzOiBub3RlRGVzY3JpcHRvci50YWdzXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5vdGVEZXNjcmlwdG9yOiBub3JtYWxpemVkTm90ZURlc2NyaXB0b3IsXG4gICAgICAgICAgICBtZWRpYUZpbGVzXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZVBvbGFySUQoZ3VpZDogc3RyaW5nKTogVGFnIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUYWcoJ3BvbGFyX2d1aWQnLCBndWlkKTtcbiAgICB9XG5cbn1cblxuLyoqXG4gKiBBIE5vdGVEZXNjcmlwdG9yIGNvbnRhaW5lciB3aGljaCBpbmNsdWRlcyB0aGUgbm9ybWFsaXplIGRlc2NyaXB0b3IgYW5kIGFsc29cbiAqIHRoZSBtZWRpYS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOb3JtYWxpemVkTm90ZSB7XG5cbiAgICByZWFkb25seSBub3RlRGVzY3JpcHRvcjogTm90ZURlc2NyaXB0b3I7XG5cbiAgICByZWFkb25seSBtZWRpYUZpbGVzOiBNZWRpYUZpbGVbXTtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUYWcge1xuXG4gICAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuXG4gICAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcblxufVxuXG5leHBvcnQgY2xhc3MgVGFnIGltcGxlbWVudHMgSVRhZyB7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAgIHB1YmxpYyByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZm9ybWF0KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLm5hbWV9OiR7dGhpcy52YWx1ZX1gO1xuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vdGVzU3luY2hyb25pemVkIHtcblxuICAgIHJlYWRvbmx5IGNyZWF0ZWQ6IE5vdGVEZXNjcmlwdG9yW107XG5cbn1cbiJdfQ==