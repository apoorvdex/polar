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
const Preconditions_1 = require("../../Preconditions");
const IFrames_1 = require("../../util/dom/IFrames");
const Logger_1 = require("../../logger/Logger");
const DocumentReadyStates_1 = require("../../util/dom/DocumentReadyStates");
const log = Logger_1.Logger.create();
class IFrameWatcher {
    constructor(iframe, callback) {
        this.iframe = Preconditions_1.Preconditions.assertNotNull(iframe, "iframe");
        this.callback = Preconditions_1.Preconditions.assertNotNull(callback, "callback");
    }
    start() {
        this.execute()
            .catch(err => log.error("Failed watching for iframe: ", err));
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            log.debug("Waiting for iframe to load...");
            log.debug("Waiting for content document...");
            yield IFrames_1.IFrames.waitForContentDocument(this.iframe);
            log.debug("Waiting for 'complete'");
            yield DocumentReadyStates_1.DocumentReadyStates.waitFor(this.iframe.contentDocument, 'complete');
            log.debug("Waiting for iframe to load...done");
            this.callback();
        });
    }
}
exports.IFrameWatcher = IFrameWatcher;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSUZyYW1lV2F0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIklGcmFtZVdhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUlBLHVEQUFrRDtBQUNsRCxvREFBK0M7QUFDL0MsZ0RBQTJDO0FBQzNDLDRFQUF1RTtBQUV2RSxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSxhQUFhO0lBS3RCLFlBQVksTUFBeUIsRUFBRSxRQUFvQjtRQUV2RCxJQUFJLENBQUMsTUFBTSxHQUFHLDZCQUFhLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsUUFBUSxHQUFHLDZCQUFhLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUV0RSxDQUFDO0lBRU0sS0FBSztRQUVSLElBQUksQ0FBQyxPQUFPLEVBQUU7YUFDVCxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLDhCQUE4QixFQUFFLEdBQUcsQ0FBRSxDQUFDLENBQUE7SUFFdEUsQ0FBQztJQUVhLE9BQU87O1lBRWpCLEdBQUcsQ0FBQyxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQztZQUUzQyxHQUFHLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7WUFDN0MsTUFBTSxpQkFBTyxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVsRCxHQUFHLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFFcEMsTUFBTSx5Q0FBbUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFnQixFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBRTVFLEdBQUcsQ0FBQyxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQztZQUUvQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFcEIsQ0FBQztLQUFBO0NBRUo7QUFwQ0Qsc0NBb0NDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBc3N1bWVzIHRoYXQgeW91IGhhdmUgdHJpZWQgdG8gY2hhbmdlIHRoZSBVUkwgZm9yIGFuIGlmcmFtZSBhbmQgd2F0Y2hlcyBmb3JcbiAqIGl0IHRvIHN0YXJ0IGxvYWRpbmcgcHJvcGVybHkuXG4gKi9cbmltcG9ydCB7UHJlY29uZGl0aW9uc30gZnJvbSAnLi4vLi4vUHJlY29uZGl0aW9ucyc7XG5pbXBvcnQge0lGcmFtZXN9IGZyb20gJy4uLy4uL3V0aWwvZG9tL0lGcmFtZXMnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uLy4uL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtEb2N1bWVudFJlYWR5U3RhdGVzfSBmcm9tICcuLi8uLi91dGlsL2RvbS9Eb2N1bWVudFJlYWR5U3RhdGVzJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgY2xhc3MgSUZyYW1lV2F0Y2hlciB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGlmcmFtZTogSFRNTElGcmFtZUVsZW1lbnQ7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjYWxsYmFjazogKCkgPT4gdm9pZDtcblxuICAgIGNvbnN0cnVjdG9yKGlmcmFtZTogSFRNTElGcmFtZUVsZW1lbnQsIGNhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XG5cbiAgICAgICAgdGhpcy5pZnJhbWUgPSBQcmVjb25kaXRpb25zLmFzc2VydE5vdE51bGwoaWZyYW1lLCBcImlmcmFtZVwiKTtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IFByZWNvbmRpdGlvbnMuYXNzZXJ0Tm90TnVsbChjYWxsYmFjaywgXCJjYWxsYmFja1wiKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGFydCgpIHtcblxuICAgICAgICB0aGlzLmV4ZWN1dGUoKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJGYWlsZWQgd2F0Y2hpbmcgZm9yIGlmcmFtZTogXCIsIGVyciApKVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBleGVjdXRlKCk6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIGxvZy5kZWJ1ZyhcIldhaXRpbmcgZm9yIGlmcmFtZSB0byBsb2FkLi4uXCIpO1xuXG4gICAgICAgIGxvZy5kZWJ1ZyhcIldhaXRpbmcgZm9yIGNvbnRlbnQgZG9jdW1lbnQuLi5cIik7XG4gICAgICAgIGF3YWl0IElGcmFtZXMud2FpdEZvckNvbnRlbnREb2N1bWVudCh0aGlzLmlmcmFtZSk7XG5cbiAgICAgICAgbG9nLmRlYnVnKFwiV2FpdGluZyBmb3IgJ2NvbXBsZXRlJ1wiKTtcblxuICAgICAgICBhd2FpdCBEb2N1bWVudFJlYWR5U3RhdGVzLndhaXRGb3IodGhpcy5pZnJhbWUuY29udGVudERvY3VtZW50ISwgJ2NvbXBsZXRlJyk7XG5cbiAgICAgICAgbG9nLmRlYnVnKFwiV2FpdGluZyBmb3IgaWZyYW1lIHRvIGxvYWQuLi5kb25lXCIpO1xuXG4gICAgICAgIHRoaXMuY2FsbGJhY2soKTtcblxuICAgIH1cblxufVxuIl19