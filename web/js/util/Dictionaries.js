"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Preconditions_1 = require("../Preconditions");
const Optional_1 = require("./ts/Optional");
class Dictionaries {
    static values(dict) {
        const result = [];
        if (!dict) {
            return result;
        }
        return Object.values(dict);
    }
    static entries(dict) {
        if (!dict) {
            return [];
        }
        return Object.entries(dict).map(current => {
            return {
                key: current[0],
                value: current[1]
            };
        });
    }
    static forDict(dict, callback) {
        Preconditions_1.Preconditions.assertNotNull(dict, "dict");
        Preconditions_1.Preconditions.assertNotNull(callback, "callback");
        for (const key in dict) {
            if (dict.hasOwnProperty(key)) {
                const value = dict[key];
                callback(key, value);
            }
        }
    }
    static sorted(dict) {
        if (dict === undefined || dict === null) {
            return dict;
        }
        if (!(typeof dict === 'object')) {
            return dict;
        }
        if (Array.isArray(dict)) {
            const result = [];
            for (let idx = 0; idx < dict.length; ++idx) {
                result[idx] = this.sorted(dict[idx]);
            }
            return result;
        }
        else {
            const result = {};
            Object.keys(dict).sort().forEach(key => {
                result[key] = this.sorted(dict[key]);
            });
            return result;
        }
    }
    static onlyDefinedProperties(dict) {
        if (dict === undefined || dict === null) {
            return dict;
        }
        if (!(typeof dict === 'object')) {
            return dict;
        }
        const result = {};
        for (const key of Object.keys(dict).sort()) {
            const value = dict[key];
            if (value === undefined) {
                continue;
            }
            result[key] = this.sorted(value);
        }
        return result;
    }
    static copyOf(dict) {
        if (dict === undefined || dict === null) {
            return dict;
        }
        if (typeof dict !== 'object') {
            return dict;
        }
        const result = {};
        Object.keys(dict).forEach(key => {
            result[key] = this.copyOf(dict[key]);
        });
        return result;
    }
    static toDict(values, converter) {
        const result = {};
        values.forEach(value => {
            result[converter(value)] = value;
        });
        return result;
    }
    static countOf(dict) {
        return Optional_1.Optional.of(dict)
            .map(current => Object.keys(current).length)
            .getOrElse(0);
    }
    static size(dict) {
        return Object.keys(dict).length;
    }
    static computeIfAbsent(dict, key, mappingFunction) {
        const currentValue = dict[key];
        if (currentValue) {
            return currentValue;
        }
        else {
            const newValue = mappingFunction(key);
            if (newValue) {
                dict[key] = newValue;
            }
            return newValue;
        }
    }
    static putAll(source, target = {}) {
        for (const key of Object.keys(source)) {
            target[key] = source[key];
        }
    }
    static empty(dict) {
        if (!dict) {
            return true;
        }
        return Object.values(dict).length === 0;
    }
}
exports.Dictionaries = Dictionaries;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGljdGlvbmFyaWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRGljdGlvbmFyaWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0RBQStDO0FBQy9DLDRDQUF1QztBQUd2QyxNQUFhLFlBQVk7SUFFZCxNQUFNLENBQUMsTUFBTSxDQUFJLElBQTJDO1FBRS9ELE1BQU0sTUFBTSxHQUFRLEVBQUUsQ0FBQztRQUV2QixJQUFJLENBQUMsSUFBSSxFQUFFO1lBRVAsT0FBTyxNQUFNLENBQUM7U0FDakI7UUFFRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFL0IsQ0FBQztJQUVNLE1BQU0sQ0FBQyxPQUFPLENBQUksSUFBMkM7UUFFaEUsSUFBSSxDQUFFLElBQUksRUFBRTtZQUNSLE9BQU8sRUFBRSxDQUFDO1NBQ2I7UUFFRCxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBRXRDLE9BQU87Z0JBQ0gsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDcEIsQ0FBQztRQUVOLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQVFNLE1BQU0sQ0FBQyxPQUFPLENBQUksSUFBd0IsRUFBRSxRQUFvQztRQUVuRiw2QkFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDMUMsNkJBQWEsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRWxELEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFO1lBRXBCLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDMUIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN4QixRQUFRLENBQUMsR0FBRyxFQUFFLEtB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O1NBQ2Y7UUFFRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztJQUU1QyxDQUFDO0NBRUo7QUFyUEQsb0NBcVBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQcmVjb25kaXRpb25zfSBmcm9tICcuLi9QcmVjb25kaXRpb25zJztcbmltcG9ydCB7T3B0aW9uYWx9IGZyb20gJy4vdHMvT3B0aW9uYWwnO1xuaW1wb3J0IHtEb2NJRH0gZnJvbSAnLi4vdGFncy9yZWxhdGVkL1JlbGF0ZWRUYWdzJztcblxuZXhwb3J0IGNsYXNzIERpY3Rpb25hcmllcyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIHZhbHVlczxUPihkaWN0OiB7W2tleTogc3RyaW5nXTogVH0gfCB1bmRlZmluZWQgfCBudWxsKTogVFtdIHtcblxuICAgICAgICBjb25zdCByZXN1bHQ6IFRbXSA9IFtdO1xuXG4gICAgICAgIGlmICghZGljdCkge1xuICAgICAgICAgICAgLy8gVE9ETzogdGhpcyBjYW4gZ28gYXdheSBvbmNlIHdlIG1pZ3JhdGUgdG8gdHlwZXNjcmlwdCBldmVyeXdoZXJlXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoZGljdCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGVudHJpZXM8Vj4oZGljdDoge1trZXk6IHN0cmluZ106IFZ9IHwgdW5kZWZpbmVkIHwgbnVsbCk6IFJlYWRvbmx5QXJyYXk8RGljdGlvbmFyeUVudHJ5PFY+PiB7XG5cbiAgICAgICAgaWYgKCEgZGljdCkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKGRpY3QpLm1hcChjdXJyZW50ID0+IHtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBrZXk6IGN1cnJlbnRbMF0sXG4gICAgICAgICAgICAgICAgdmFsdWU6IGN1cnJlbnRbMV1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXZSBpdGVyYXRlIG92ZXIgYWxsIGtleXMgaW4gdGhlIGRpY3Rpb25hcnlcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkaWN0XG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBmb3JEaWN0PFQ+KGRpY3Q6IHtba2V5OiBzdHJpbmddOiBUfSwgY2FsbGJhY2s6IEZvckRpY3RDYWxsYmFja0Z1bmN0aW9uPFQ+ICkge1xuXG4gICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0Tm90TnVsbChkaWN0LCBcImRpY3RcIik7XG4gICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0Tm90TnVsbChjYWxsYmFjaywgXCJjYWxsYmFja1wiKTtcblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBkaWN0KSB7XG5cbiAgICAgICAgICAgIGlmIChkaWN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGRpY3Rba2V5XTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgZGljdGlvbmFyeSB3aXRoIHNvcnRlZCBrZXlzLiBEaWN0aW9uYXJpZXMgYnkgZGVmaW5pdGlvbiBhcmVuJ3RcbiAgICAgKiBzb3J0ZWQgYnkgdGhleSdyZSBpbXBsZW1lbnRlZCBpbnRlcm5hbGx5IGFzIGxpbmtlZCBoYXNoIHRhYmxlcy4gIFdlXG4gICAgICogcmV0dXJuIHRoZSBzYW1lIGNhbm9uaWNhbCBkaWN0aW9uYXJpZXMgKGFjY29yZGluZyB0byBzZXQgdGhlb3J5KSB3aGVyZVxuICAgICAqIHRoZSBrZXkgc2V0IGFyZSBpZGVudGljYWwsIGp1c3QgaW4gYSBkaWZmZXJlbnQga2V5IG9yZGVyLlxuICAgICAqXG4gICAgICogVGhpcyBpcyBwcmltYXJpbHkgdXNlZCBmb3IgdGVzdGluZyBwdXJwb3NlcyBzbyB0aGF0IHR3byBkaWN0cyBhcmUgYWx3YXlzXG4gICAgICogY2Fub25pY2FsbHkgdGhlIHNhbWUuXG4gICAgICpcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHNvcnRlZChkaWN0OiBhbnkpOiBhbnkge1xuXG4gICAgICAgIGlmIChkaWN0ID09PSB1bmRlZmluZWQgfHwgZGljdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gbm90aGluZyB0byBkbyBoZXJlLlxuICAgICAgICAgICAgcmV0dXJuIGRpY3Q7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoISAodHlwZW9mIGRpY3QgPT09ICdvYmplY3QnKSkge1xuICAgICAgICAgICAgLy8gaWYgd2UncmUgbm90IGEgZGljdGlvbmFyeSB3ZSdyZSBkb25lXG4gICAgICAgICAgICByZXR1cm4gZGljdDtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGljdCkpIHtcblxuICAgICAgICAgICAgY29uc3QgcmVzdWx0OiBhbnlbXSA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpZHggPSAwOyBpZHggPCBkaWN0Lmxlbmd0aDsgKytpZHgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRbaWR4XSA9IHRoaXMuc29ydGVkKGRpY3RbaWR4XSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgY29uc3QgcmVzdWx0OiBhbnkgPSB7fTtcblxuICAgICAgICAgICAgT2JqZWN0LmtleXMoZGljdCkuc29ydCgpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICByZXN1bHRba2V5XSA9IHRoaXMuc29ydGVkKGRpY3Rba2V5XSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIFJlY3Vyc2l2ZWx5IHdvcmsgdGhyb3VnaCB0aGlzIG9iamVjdCBhbmQgcmVtb3ZlIGFueSBmaWVsZHMgdGhhdCBhcmVcbiAgICAgKiBzdG9yZWQgd2l0aCB1bmFzc2lnbmVkIHZhbHVlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBkaWN0XG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBvbmx5RGVmaW5lZFByb3BlcnRpZXMoZGljdDogYW55KTogYW55IHtcblxuICAgICAgICBpZiAoZGljdCA9PT0gdW5kZWZpbmVkIHx8IGRpY3QgPT09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIG5vdGhpbmcgdG8gZG8gaGVyZS5cbiAgICAgICAgICAgIHJldHVybiBkaWN0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCEgKHR5cGVvZiBkaWN0ID09PSAnb2JqZWN0JykpIHtcbiAgICAgICAgICAgIC8vIGlmIHdlJ3JlIG5vdCBhIGRpY3Rpb25hcnkgd2UncmUgZG9uZVxuICAgICAgICAgICAgcmV0dXJuIGRpY3Q7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXN1bHQ6IGFueSA9IHt9O1xuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGRpY3QpLnNvcnQoKSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBkaWN0W2tleV07XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gdGhpcy5zb3J0ZWQodmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgZGVlcCBjb3B5IG9mIHRoZSBnaXZlbiBkaWN0aW9uYXJ5LlxuICAgICAqXG4gICAgICogQHBhcmFtIGRpY3RcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGNvcHlPZihkaWN0OiBhbnkpOiBhbnkge1xuXG4gICAgICAgIGlmIChkaWN0ID09PSB1bmRlZmluZWQgfHwgZGljdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gbm90aGluZyB0byBkbyBoZXJlLlxuICAgICAgICAgICAgcmV0dXJuIGRpY3Q7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGRpY3QgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAvLyBpZiB3ZSdyZSBub3QgYSBkaWN0aW9uYXJ5IHdlJ3JlIGp1c3QgcmV0dXJuIHRoZSBkZWZhdWx0IGRpY3Rpb25hcnkuXG4gICAgICAgICAgICByZXR1cm4gZGljdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdDogYW55ID0ge307XG5cbiAgICAgICAgT2JqZWN0LmtleXMoZGljdCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSB0aGlzLmNvcHlPZihkaWN0W2tleV0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRWFzaWx5IGNvbnZlcnQgYW4gYXJyYXkgdG8gYSBkaWN0LlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgdG9EaWN0PFY+KHZhbHVlczogVltdLCBjb252ZXJ0ZXI6ICh2YWx1ZTogVikgPT4gc3RyaW5nKToge1trZXk6IHN0cmluZ106IFZ9IHtcblxuICAgICAgICBjb25zdCByZXN1bHQ6IHsgW2tleTogc3RyaW5nXTogViB9ID0ge307XG5cbiAgICAgICAgdmFsdWVzLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgcmVzdWx0W2NvbnZlcnRlcih2YWx1ZSldID0gdmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNvdW50T2Y8Vj4oZGljdDoge1trZXk6IHN0cmluZ106IFZ9IHwgbnVsbCB8IHVuZGVmaW5lZCkge1xuXG4gICAgICAgIHJldHVybiBPcHRpb25hbC5vZihkaWN0KVxuICAgICAgICAgICAgLm1hcChjdXJyZW50ID0+IE9iamVjdC5rZXlzKGN1cnJlbnQpLmxlbmd0aClcbiAgICAgICAgICAgIC5nZXRPckVsc2UoMCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHNpemU8Vj4oZGljdDoge1trZXk6IHN0cmluZ106IFZ9KSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhkaWN0KS5sZW5ndGg7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBJZiB0aGUgc3BlY2lmaWVkIGtleSBpcyBub3QgYWxyZWFkeSBhc3NvY2lhdGVkIHdpdGggYSB2YWx1ZSAob3IgaXMgbWFwcGVkXG4gICAgICogdG8gdW5kZWZpbmVkIG9yIG51bGwpLCBhdHRlbXB0cyB0byBjb21wdXRlIGl0cyB2YWx1ZSB1c2luZyB0aGUgZ2l2ZW5cbiAgICAgKiBtYXBwaW5nIGZ1bmN0aW9uIGFuZCBlbnRlcnMgaXQgaW50byB0aGlzIG1hcCB1bmxlc3MgdW5kZWZpbmVkIG9yIG51bGwuXG4gICAgICpcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGNvbXB1dGVJZkFic2VudDxWPihkaWN0OiB7W2tleTogc3RyaW5nXTogVn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwcGluZ0Z1bmN0aW9uOiAobmV3S2V5OiBzdHJpbmcpID0+IFYpOiBWIHtcblxuICAgICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBkaWN0W2tleV07XG5cbiAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRWYWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBtYXBwaW5nRnVuY3Rpb24oa2V5KTtcblxuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZGljdFtrZXldID0gbmV3VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIG5vdGUgdGhhdCB3ZSByZXR1cm4gdGhlIG5ld1ZhbHVlIEVJVEhFUiB3YXkgd2hpY2ggY291bGQgYmUgbnVsbFxuICAgICAgICAgICAgLy8gb3IgdW5kZWZpbmVkIGhlcmUganVzdCBsaWtlIGluIGEgbm9ybWFsIG1hcC5cbiAgICAgICAgICAgIHJldHVybiBuZXdWYWx1ZTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHB1dEFsbDxWPihzb3VyY2U6IHtba2V5OiBzdHJpbmddOiBWfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHtba2V5OiBzdHJpbmddOiBWfSA9IHt9KSB7XG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoc291cmNlKSkge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRydWUgaWYgdGhlIGRpY3Rpb25hcnkgaXMgZW1wdHkgYW5kIGhhcyBubyBlbnRyaWVzIChudWxsIG9yXG4gICAgICogdW5kZWZpbmVkIHRvbykuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBlbXB0eShkaWN0OiB7W2tleTogc3RyaW5nXTogYW55fSB8IG51bGwgfCB1bmRlZmluZWQpOiBib29sZWFuIHtcblxuICAgICAgICBpZiAoISBkaWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKGRpY3QpLmxlbmd0aCA9PT0gMDtcblxuICAgIH1cblxufVxuXG5cbnR5cGUgRm9yRGljdENhbGxiYWNrRnVuY3Rpb248VD4gPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiBUKSA9PiB2b2lkO1xuXG5leHBvcnQgaW50ZXJmYWNlIERpY3Rpb25hcnlFbnRyeTxWPiB7XG4gICAgcmVhZG9ubHkga2V5OiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgdmFsdWU6IFY7XG59XG4iXX0=