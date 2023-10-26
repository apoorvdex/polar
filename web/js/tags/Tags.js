"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const twitter_text_1 = __importDefault(require("twitter-text"));
const Preconditions_1 = require("../Preconditions");
const Optional_1 = require("../util/ts/Optional");
const Dictionaries_1 = require("../util/Dictionaries");
class Tags {
    static assertValid(label) {
        if (!this.validate(label).isPresent()) {
            throw new Error("Invalid tag: " + label);
        }
    }
    static validate(label) {
        if (!Preconditions_1.isPresent(label)) {
            return Optional_1.Optional.empty();
        }
        if (!label.startsWith('#')) {
            label = '#' + label;
        }
        const strippedLabel = this.stripTypedLabel(label);
        if (!strippedLabel.isPresent()) {
            return Optional_1.Optional.empty();
        }
        if (twitter_text_1.default.isValidHashtag(strippedLabel.get())) {
            return Optional_1.Optional.of(label);
        }
        return Optional_1.Optional.empty();
    }
    static validateTag(tag) {
        if (this.validate(tag.label).isPresent()) {
            return Optional_1.Optional.of(tag);
        }
        return Optional_1.Optional.empty();
    }
    static tagsAreValid(...tags) {
        return tags.map(tag => this.validateTag(tag).isPresent())
            .reduce((acc, curr) => !acc ? false : curr, true);
    }
    static findInvalidTags(...tags) {
        return tags.filter(tag => !this.validateTag(tag).isPresent());
    }
    static findValidTags(...tags) {
        return tags.filter(tag => this.validateTag(tag).isPresent());
    }
    static toMap(tags) {
        const result = {};
        for (const tag of tags) {
            result[tag.id] = tag;
        }
        return result;
    }
    static union(a, b) {
        const result = {};
        Dictionaries_1.Dictionaries.putAll(Tags.toMap(a), result);
        Dictionaries_1.Dictionaries.putAll(Tags.toMap(b), result);
        return Object.values(result);
    }
    static toIDs(tags) {
        return tags.map(current => current.id);
    }
    static stripTypedLabel(label) {
        const match = label.match(/:/g);
        if (match && match.length > 1) {
            return Optional_1.Optional.empty();
        }
        return Optional_1.Optional.of(label.replace(/^#([^:/]+):([^:]+)$/g, '#$1$2'));
    }
    static parseTypedTag(value) {
        value = value.replace("#", "");
        const split = value.split(":");
        return Optional_1.Optional.of({
            name: split[0],
            value: split[1]
        });
    }
}
exports.Tags = Tags;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRhZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnRUFBdUM7QUFDdkMsb0RBQTJDO0FBQzNDLGtEQUE2QztBQUc3Qyx1REFBa0Q7QUFFbEQsTUFBYSxJQUFJO0lBRU4sTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFhO1FBRW5DLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxDQUFDO1NBQzVDO0lBRUwsQ0FBQztJQUVNLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBYTtRQUVoQyxJQUFJLENBQUMseUJBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuQixPQUFPLG1CQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDM0I7UUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN4QixLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQztTQUN2QjtRQUVELE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbEQsSUFBSyxDQUFFLGFBQWEsQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUM5QixPQUFPLG1CQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDM0I7UUFFRCxJQUFJLHNCQUFXLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFO1lBQ2pELE9BQU8sbUJBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0I7UUFFRCxPQUFPLG1CQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFNUIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBUTtRQUU5QixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxD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S0FBSyxDQUFDLENBQUMsQ0FBQztTQUNsQixDQUFDLENBQUM7SUFFUCxDQUFDO0NBRUo7QUE5SEQsb0JBOEhDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR3aXR0ZXJfdHh0IGZyb20gJ3R3aXR0ZXItdGV4dCc7XG5pbXBvcnQge2lzUHJlc2VudH0gZnJvbSAnLi4vUHJlY29uZGl0aW9ucyc7XG5pbXBvcnQge09wdGlvbmFsfSBmcm9tICcuLi91dGlsL3RzL09wdGlvbmFsJztcbmltcG9ydCB7VGFnfSBmcm9tICcuL1RhZyc7XG5pbXBvcnQge1R5cGVkVGFnfSBmcm9tICcuL1R5cGVkVGFnJztcbmltcG9ydCB7RGljdGlvbmFyaWVzfSBmcm9tICcuLi91dGlsL0RpY3Rpb25hcmllcyc7XG5cbmV4cG9ydCBjbGFzcyBUYWdzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgYXNzZXJ0VmFsaWQobGFiZWw6IHN0cmluZykge1xuXG4gICAgICAgIGlmICghdGhpcy52YWxpZGF0ZShsYWJlbCkuaXNQcmVzZW50KCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdGFnOiBcIiArIGxhYmVsKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyB2YWxpZGF0ZShsYWJlbDogc3RyaW5nKTogT3B0aW9uYWw8c3RyaW5nPiB7XG5cbiAgICAgICAgaWYgKCFpc1ByZXNlbnQobGFiZWwpKSB7XG4gICAgICAgICAgICByZXR1cm4gT3B0aW9uYWwuZW1wdHkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbGFiZWwuc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgICAgICAgICBsYWJlbCA9ICcjJyArIGxhYmVsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3RyaXBwZWRMYWJlbCA9IHRoaXMuc3RyaXBUeXBlZExhYmVsKGxhYmVsKTtcblxuICAgICAgICBpZiAoICEgc3RyaXBwZWRMYWJlbC5pc1ByZXNlbnQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIE9wdGlvbmFsLmVtcHR5KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHdpdHRlcl90eHQuaXNWYWxpZEhhc2h0YWcoc3RyaXBwZWRMYWJlbC5nZXQoKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBPcHRpb25hbC5vZihsYWJlbCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gT3B0aW9uYWwuZW1wdHkoKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgdmFsaWRhdGVUYWcodGFnOiBUYWcpOiBPcHRpb25hbDxUYWc+IHtcblxuICAgICAgICBpZiAodGhpcy52YWxpZGF0ZSh0YWcubGFiZWwpLmlzUHJlc2VudCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gT3B0aW9uYWwub2YodGFnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBPcHRpb25hbC5lbXB0eSgpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRydWUgaWYgYWxsIHRoZSB0YWdzIGFyZSB2YWxpZC4gIElmIG5vIHRhZ3MgYXJlIGdpdmVuIHdlIHJldHVyblxuICAgICAqIHRydWUgYXMgdGhlIGlucHV0IHNldCBoYWQgbm8gdmFsaWQgdGFncy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHRhZ3NBcmVWYWxpZCguLi50YWdzOiBUYWdbXSk6IGJvb2xlYW4ge1xuXG4gICAgICAgIHJldHVybiB0YWdzLm1hcCh0YWcgPT4gdGhpcy52YWxpZGF0ZVRhZyh0YWcpLmlzUHJlc2VudCgpKVxuICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKGFjYywgY3VycikgPT4gISBhY2MgPyBmYWxzZSA6IGN1cnIsIHRydWUpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRhZ3MgdGhhdCBhcmUgaW52YWxpZC5cbiAgICAgKiBAcGFyYW0gdGFnc1xuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZmluZEludmFsaWRUYWdzKC4uLnRhZ3M6IFRhZ1tdKTogVGFnW10ge1xuICAgICAgICByZXR1cm4gdGFncy5maWx0ZXIodGFnID0+ICEgdGhpcy52YWxpZGF0ZVRhZyh0YWcpLmlzUHJlc2VudCgpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGZpbmRWYWxpZFRhZ3MoLi4udGFnczogVGFnW10pOiBUYWdbXSB7XG4gICAgICAgIHJldHVybiB0YWdzLmZpbHRlcih0YWcgPT4gdGhpcy52YWxpZGF0ZVRhZyh0YWcpLmlzUHJlc2VudCgpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHRvTWFwKHRhZ3M6IFRhZ1tdKSB7XG5cbiAgICAgICAgY29uc3QgcmVzdWx0OiB7IFtpZDogc3RyaW5nXTogVGFnIH0gPSB7fTtcblxuICAgICAgICBmb3IgKGNvbnN0IHRhZyBvZiB0YWdzKSB7XG4gICAgICAgICAgICByZXN1bHRbdGFnLmlkXSA9IHRhZztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGcm9tIGEgdW5pb24gb2YgdGhlIHR3byB0YWcgYXJyYXlzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgdW5pb24oYTogVGFnW10sIGI6IFRhZ1tdKTogVGFnW10ge1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdDogeyBbaWQ6IHN0cmluZ106IFRhZyB9ID0ge307XG5cbiAgICAgICAgRGljdGlvbmFyaWVzLnB1dEFsbChUYWdzLnRvTWFwKGEpLCByZXN1bHQpO1xuICAgICAgICBEaWN0aW9uYXJpZXMucHV0QWxsKFRhZ3MudG9NYXAoYiksIHJlc3VsdCk7XG5cbiAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXMocmVzdWx0KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgdG9JRHModGFnczogVGFnW10pIHtcbiAgICAgICAgcmV0dXJuIHRhZ3MubWFwKGN1cnJlbnQgPT4gY3VycmVudC5pZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2Ugc3VwcG9ydCBmb286YmFyIHZhbHVlcyBpbiB0YWdzIHNvIHRoYXQgd2UgY2FuIGhhdmUgdHlwZWQgdGFncy5cbiAgICAgKiBGb3IgZXhhbXBsZTogdHlwZTpib29rIG9yIGRlY2s6ZnVuIG9yIHNvbWV0aGluZyBhbG9uZyB0aG9zZSBsaW5lcy5cbiAgICAgKlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgc3RyaXBUeXBlZExhYmVsKGxhYmVsOiBzdHJpbmcpOiBPcHRpb25hbDxzdHJpbmc+IHtcblxuICAgICAgICBjb25zdCBtYXRjaCA9IGxhYmVsLm1hdGNoKC86L2cpO1xuXG4gICAgICAgIGlmIChtYXRjaCAmJiBtYXRjaC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICByZXR1cm4gT3B0aW9uYWwuZW1wdHkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBPcHRpb25hbC5vZihsYWJlbC5yZXBsYWNlKC9eIyhbXjovXSspOihbXjpdKykkL2csICcjJDEkMicpKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgcGFyc2VUeXBlZFRhZyh2YWx1ZTogc3RyaW5nKTogT3B0aW9uYWw8VHlwZWRUYWc+IHtcblxuICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xuICAgICAgICBjb25zdCBzcGxpdCA9IHZhbHVlLnNwbGl0KFwiOlwiKTtcblxuICAgICAgICByZXR1cm4gT3B0aW9uYWwub2Yoe1xuICAgICAgICAgICAgbmFtZTogc3BsaXRbMF0sXG4gICAgICAgICAgICB2YWx1ZTogc3BsaXRbMV1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbn1cblxuIl19