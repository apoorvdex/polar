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
const Preconditions_1 = require("../Preconditions");
const Optional_1 = require("./ts/Optional");
class Functions {
    static functionToScript(func, ...args) {
        return this.toScript(func, ...args);
    }
    static toScript(func, ...args) {
        if (!Preconditions_1.isPresent(func.name)) {
            throw new Error("Don't currently work with unnamed functions");
        }
        let result = "(";
        let functionBody = this._anonymizeFunction(func.toString());
        functionBody = functionBody.replace(/\) {/, ') => {');
        result += functionBody;
        result += "\n";
        if (args) {
            let funcArgs = JSON.stringify(args);
            funcArgs = funcArgs.substring(1, funcArgs.length);
            funcArgs = funcArgs.substring(0, funcArgs.length - 1);
            result += `)(${funcArgs});`;
        }
        else {
            result += `)();`;
        }
        return result;
    }
    static _anonymizeFunction(func) {
        return func.substring(func.indexOf('('), func.length);
    }
    static forDict(dict, callback) {
        Preconditions_1.Preconditions.assertNotNull(dict, "dict");
        Preconditions_1.Preconditions.assertNotNull(callback, "callback");
        const keys = Object.keys(dict);
        keys.forEach((key) => {
            const value = dict[key];
            callback(key, value);
        });
    }
    static forOwnKeys(dict, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            Preconditions_1.Preconditions.assertNotNull(dict, "dict");
            Preconditions_1.Preconditions.assertNotNull(callback, "callback");
            for (const key in dict) {
                if (dict.hasOwnProperty(key)) {
                    const value = dict[key];
                    yield callback(key, value);
                }
            }
        });
    }
    static withTimeout(callback, timeout = 1) {
        return __awaiter(this, void 0, void 0, function* () {
            setTimeout(callback, timeout);
        });
    }
    static waitFor(timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve();
                }, timeout);
            });
        });
    }
    static createSiblingTuples(arrayLikeObject) {
        return Functions.createSiblings(arrayLikeObject);
    }
    static createSiblings(arrayLikeObject) {
        Preconditions_1.Preconditions.assertNotNull(arrayLikeObject, "arrayLikeObject");
        const result = [];
        for (let idx = 0; idx < arrayLikeObject.length; ++idx) {
            result.push({
                curr: arrayLikeObject[idx],
                prev: Optional_1.Optional.of(arrayLikeObject[idx - 1]).getOrElse(null),
                next: Optional_1.Optional.of(arrayLikeObject[idx + 1]).getOrElse(null)
            });
        }
        return result;
    }
}
exports.Functions = Functions;
function forDict(dict, callback) {
    return Functions.forDict(dict, callback);
}
exports.forDict = forDict;
function forOwnKeys(dict, callback) {
    return Functions.forOwnKeys(dict, callback);
}
exports.forOwnKeys = forOwnKeys;
function createSiblingTuples(arrayLikeObject) {
    return Functions.createSiblingTuples(arrayLikeObject);
}
exports.createSiblingTuples = createSiblingTuples;
function createSiblings(arrayLikeObject) {
    return Functions.createSiblings(arrayLikeObject);
}
exports.createSiblings = createSiblings;
exports.NULL_FUNCTION = () => { };
exports.ASYNC_NULL_FUNCTION = () => __awaiter(this, void 0, void 0, function* () { });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnVuY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRnVuY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxvREFBMEQ7QUFDMUQsNENBQXVDO0FBRXZDLE1BQWEsU0FBUztJQVFYLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUE4QixFQUFFLEdBQUcsSUFBVztRQUN6RSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFFeEMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBOEIsRUFBRSxHQUFHLElBQVc7UUFPakUsSUFBSSxDQUFDLHlCQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3ZCLE1BQU0sSUFBSSxLQUFLLENBQUMsNkNBQTZDLENBQUMsQ0FBQztTQUNsRTtRQUVELElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUVqQixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFFNUQsWUFBWSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRXRELE1BQU0sSUFBSSxZQUFZLENBQUM7UUFDdkIsTUFBTSxJQUFJLElBQUksQ0FBQztRQUVmLElBQUksSUFBSSxFQUFFO1lBRU4sSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVwQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xELFFBQVEsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRXRELE1BQU0sSUFBSSxLQUFLLFFBQVEsSUFBSSxDQUFDO1NB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O0lBRWxCLENBQUM7Q0FHSjtBQTNLRCw4QkEyS0M7QUFvQkQsU0FBZ0IsT0FBTyxDQUFDLElBQTBCLEVBQUUsUUFBMEI7SUFDMUUsT0FBTyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztBQUM3QyxDQUFDO0FBRkQsMEJBRUM7QUFFRCxTQUFnQixVQUFVLENBQUMsSUFBMEIsRUFBRSxRQUEwQjtJQUM3RSxPQUFPLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ2hELENBQUM7QUFGRCxnQ0FFQztBQUVELFNBQWdCLG1CQUFtQixDQUFDLGVBQW9CO0lBQ3BELE9BQU8sU0FBUyxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQzFELENBQUM7QUFGRCxrREFFQztBQUVELFNBQWdCLGNBQWMsQ0FBQyxlQUFvQjtJQUMvQyxPQUFPLFNBQVMsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDckQsQ0FBQztBQUZELHdDQUVDO0FBRVksUUFBQSxhQUFhLEdBQUcsR0FBRyxFQUFFLEdBQWUsQ0FBQyxDQUFDO0FBRXRDLFFBQUEsbUJBQW1CLEdBQUcsR0FBUyxFQUFFLGdEQUFlLENBQUMsQ0FBQSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpc1ByZXNlbnQsIFByZWNvbmRpdGlvbnN9IGZyb20gJy4uL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtPcHRpb25hbH0gZnJvbSAnLi90cy9PcHRpb25hbCc7XG5cbmV4cG9ydCBjbGFzcyBGdW5jdGlvbnMge1xuXG4gICAgLyoqXG4gICAgICogVGFrZSBhIGZ1bmN0aW9uIGFuZCBtYWtlIGl0IGFuIGV4dGVybmFsIHNjcmlwdCB3ZSBjYW4gcGFzcyB0byBhbiBleHRlcm5hbFxuICAgICAqIGphdmFzY3JpcHQgaW50ZXJwcmV0ZXIuIFRoaXMgY2FuIGJlIHVzZWQgd2l0aCB0aGUgZWxlY3Ryb24gcmVuZGVyZXIsIGNocm9tZVxuICAgICAqIGhlYWRsZXNzLCBldGMuXG4gICAgICpcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGZ1bmN0aW9uVG9TY3JpcHQoZnVuYzogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkLCAuLi5hcmdzOiBhbnlbXSk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvU2NyaXB0KGZ1bmMsIC4uLmFyZ3MpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyB0b1NjcmlwdChmdW5jOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQsIC4uLmFyZ3M6IGFueVtdKTogc3RyaW5nIHtcblxuICAgICAgICAvLyBUT0RPOiB0aGlzIGRvZXNuJ3QgeWV0IHN1cHBvcnQgbGFtYmRhIGZ1bmN0aW9ucy5cblxuICAgICAgICAvLyBUT0RPOiB0aGUgZnVuY3Rpb25zIHNob3VsZCBub3QgYmUgYm91bmQgd2l0aCBuYW1lcy4gIFRoZXkgc2hvdWxkIGJlXG4gICAgICAgIC8vIGFub24gdG8gYXZvaWQgY29uZmxpY3RzIHdpdGggZXhpc3RpbmcgZnVuY3Rpb25zLlxuXG4gICAgICAgIGlmICghaXNQcmVzZW50KGZ1bmMubmFtZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRvbid0IGN1cnJlbnRseSB3b3JrIHdpdGggdW5uYW1lZCBmdW5jdGlvbnNcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzdWx0ID0gXCIoXCI7XG5cbiAgICAgICAgbGV0IGZ1bmN0aW9uQm9keSA9IHRoaXMuX2Fub255bWl6ZUZ1bmN0aW9uKGZ1bmMudG9TdHJpbmcoKSk7XG5cbiAgICAgICAgZnVuY3Rpb25Cb2R5ID0gZnVuY3Rpb25Cb2R5LnJlcGxhY2UoL1xcKSB7LywgJykgPT4geycpO1xuXG4gICAgICAgIHJlc3VsdCArPSBmdW5jdGlvbkJvZHk7XG4gICAgICAgIHJlc3VsdCArPSBcIlxcblwiO1xuXG4gICAgICAgIGlmIChhcmdzKSB7XG5cbiAgICAgICAgICAgIGxldCBmdW5jQXJncyA9IEpTT04uc3RyaW5naWZ5KGFyZ3MpO1xuXG4gICAgICAgICAgICBmdW5jQXJncyA9IGZ1bmNBcmdzLnN1YnN0cmluZygxLCBmdW5jQXJncy5sZW5ndGgpO1xuICAgICAgICAgICAgZnVuY0FyZ3MgPSBmdW5jQXJncy5zdWJzdHJpbmcoMCwgZnVuY0FyZ3MubGVuZ3RoIC0gMSk7XG5cbiAgICAgICAgICAgIHJlc3VsdCArPSBgKSgke2Z1bmNBcmdzfSk7YDtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ICs9IGApKCk7YDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICB9XG5cblxuICAgIHB1YmxpYyBzdGF0aWMgX2Fub255bWl6ZUZ1bmN0aW9uKGZ1bmM6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gZnVuYy5zdWJzdHJpbmcoZnVuYy5pbmRleE9mKCcoJyksIGZ1bmMubGVuZ3RoKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFdlIGl0ZXJhdGUgb3ZlciBhbGwga2V5cyBpbiB0aGUgZGljdGlvbmFyeS4gIEV2ZW4gaW5oZXJpdGVkIGtleXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGljdFxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZm9yRGljdChkaWN0OiB7W2tleTogc3RyaW5nXTogYW55fSwgY2FsbGJhY2s6IEtleVZhbHVlQ2FsbGJhY2spIHtcblxuICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydE5vdE51bGwoZGljdCwgXCJkaWN0XCIpO1xuICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydE5vdE51bGwoY2FsbGJhY2ssIFwiY2FsbGJhY2tcIik7XG5cbiAgICAgICAgLy8gZ2V0IHRoZSBrZXlzIGZpcnN0LCB0aGF0IHdheSB3ZSBjYW4gbXV0YXRlIHRoZSBkaWN0aW9uYXJ5IHdoaWxlXG4gICAgICAgIC8vIGl0ZXJhdGluZyB0aHJvdWdoIGl0IGlmIG5lY2Vzc2FyeS5cbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGRpY3QpO1xuXG4gICAgICAgIGtleXMuZm9yRWFjaCggKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGRpY3Rba2V5XTtcbiAgICAgICAgICAgIGNhbGxiYWNrKGtleSwgdmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdlIGl0ZXJhdGUgb3ZlciBhbGwga2V5cyBpbiB0aGUgZGljdGlvbmFyeS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBkaWN0XG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBmb3JPd25LZXlzKGRpY3Q6IHtba2V5OiBzdHJpbmddOiBhbnl9LCBjYWxsYmFjazogS2V5VmFsdWVDYWxsYmFjaykge1xuXG4gICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0Tm90TnVsbChkaWN0LCBcImRpY3RcIik7XG4gICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0Tm90TnVsbChjYWxsYmFjaywgXCJjYWxsYmFja1wiKTtcblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBkaWN0KSB7XG5cbiAgICAgICAgICAgIGlmIChkaWN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGRpY3Rba2V5XTtcbiAgICAgICAgICAgICAgICBhd2FpdCBjYWxsYmFjayhrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxscyB0aGUgZ2l2ZW4gY2FsbGJhY2sgYXMgYSBwcm9taXNlIHdoaWNoIHdlIGNhbiBhd2FpdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHdpdGhUaW1lb3V0KGNhbGxiYWNrOiAoKSA9PiBhbnksIHRpbWVvdXQ6IG51bWJlciA9IDEpIHtcblxuICAgICAgICBzZXRUaW1lb3V0KGNhbGxiYWNrLCB0aW1lb3V0KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgcHJvbWlzZSBiYXNlZCB0aW1lb3V0LiAgVGhpcyBqdXN0IHJldHVybnMgYSBwcm9taXNlIHdoaWNoIHJldHVybnNcbiAgICAgKiBvbmNlIHRoZSB0aW1lb3V0IGhhcyBleHBpcmVkLiBZb3UgY2FuIHRoZW4gY2FsbCAudGhlbigpIG9yIGp1c3QgYXdhaXRcbiAgICAgKiB0aGUgdGltZW91dC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0aW1lb3V0IHtudW1iZXJ9XG4gICAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHdhaXRGb3IodGltZW91dDogbnVtYmVyKSB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9LCB0aW1lb3V0KTtcblxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQERlcHJlY2F0ZWQgdXNlIGNyZWF0ZVNpYmxpbmdzIGFzIGNyZWF0ZVNpYmxpbmdUdXBsZXMgaW1wbGllcyB0aGF0IHRoaXNcbiAgICAgKiBpcyBhIHR1cGxlIGFuZCBpdCdzIGFjdHVhbGx5IGEgdHJpcGxlLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlU2libGluZ1R1cGxlcyhhcnJheUxpa2VPYmplY3Q6IGFueSkge1xuICAgICAgICByZXR1cm4gRnVuY3Rpb25zLmNyZWF0ZVNpYmxpbmdzKGFycmF5TGlrZU9iamVjdCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR28gb3ZlciB0aGUgYXJyYXktbGlrZSBvYmplY3QgYW5kIHJldHVybiB0dXBsZXMgd2l0aCBwcmV2LCBjdXJyLCBhbmQgbmV4dFxuICAgICAqIHByb3BlcnRpZXMgc28gdGhhdCB3ZSBjYW4gcGVlayBhdCBzaWJsaW5ncyBlYXNpbHkuICBJZiB0aGUgcHJldiBhbmQgLyBvclxuICAgICAqIG5leHQgYXJlIG5vdCBwcmVzZW50IHRoZXNlIHZhbHVlcyBhcmUgbnVsbC5cbiAgICAgKlxuICAgICAqIFRoaXMgY2FuIGJlIHVzZWQgZm9yIGFsZ29yaXRobXMgdGhhdCBuZWVkIHRvIHBlZWsgYWhlYWQgb3IgYmVoaW5kXG4gICAgICogaW5zaWRlIGFuIGl0ZXJhdGl2ZSBhbGdvcml0aG1cbiAgICAgKlxuICAgICAqIEBwYXJhbSBhcnJheUxpa2VPYmplY3Qge0FycmF5PGFueT59XG4gICAgICogQHJldHVybiB7QXJyYXk8QXJyYXlQb3NpdGlvbj59XG4gICAgICogQERlcHJlY2F0ZWQgdXNlIFR1cGxlcy5jcmVhdGVTaWJsaW5nc1xuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlU2libGluZ3MoYXJyYXlMaWtlT2JqZWN0OiBhbnkpIHtcblxuICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydE5vdE51bGwoYXJyYXlMaWtlT2JqZWN0LCBcImFycmF5TGlrZU9iamVjdFwiKTtcblxuICAgICAgICBjb25zdCByZXN1bHQ6IElBcnJheVBvc2l0aW9uPGFueT5bXSA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IGFycmF5TGlrZU9iamVjdC5sZW5ndGg7ICsraWR4KSB7XG5cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBjdXJyOiBhcnJheUxpa2VPYmplY3RbaWR4XSxcbiAgICAgICAgICAgICAgICBwcmV2OiBPcHRpb25hbC5vZihhcnJheUxpa2VPYmplY3RbaWR4IC0gMV0pLmdldE9yRWxzZShudWxsKSxcbiAgICAgICAgICAgICAgICBuZXh0OiBPcHRpb25hbC5vZihhcnJheUxpa2VPYmplY3RbaWR4ICsgMV0pLmdldE9yRWxzZShudWxsKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICB9XG5cblxufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYSAncG9zaXRpb24nIG9iamVjdCBmb3IgY3JlYXRlU2libGluZ3MoKSB0aGF0IGhhcyBhIGN1cnJcbiAqIChjdXJyZW50KSwgcHJldiAocHJldmlvdXMpLCBhbmQgbmV4dCByZWZlcmVuY2VzIGZvciB3b3JraW5nIHdpdGggbGlzdHMgb2ZcbiAqIG9iamVjdHMuICBUaGUgcG9zaXRpb24gYWxsb3cgc3VzIHRvIGtub3cgd2hlcmUgd2UgY3VycmVudGx5IGFyZSBidXQgYWxzbyB0aGVcbiAqIHByZXZpb3VzIGFuZCBmdXR1cmUgc3RhdGVzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElBcnJheVBvc2l0aW9uPFQ+IHtcblxuICAgIHJlYWRvbmx5IHByZXY/OiBUO1xuXG4gICAgcmVhZG9ubHkgY3VycjogVDtcblxuICAgIHJlYWRvbmx5IG5leHQ/OiBUO1xuXG59XG5cbmV4cG9ydCB0eXBlIEtleVZhbHVlQ2FsbGJhY2sgPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpID0+IHZvaWQ7XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JEaWN0KGRpY3Q6IHtba2V5OiBzdHJpbmddOiBhbnl9LCBjYWxsYmFjazogS2V5VmFsdWVDYWxsYmFjaykge1xuICAgIHJldHVybiBGdW5jdGlvbnMuZm9yRGljdChkaWN0LCBjYWxsYmFjayk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JPd25LZXlzKGRpY3Q6IHtba2V5OiBzdHJpbmddOiBhbnl9LCBjYWxsYmFjazogS2V5VmFsdWVDYWxsYmFjaykge1xuICAgIHJldHVybiBGdW5jdGlvbnMuZm9yT3duS2V5cyhkaWN0LCBjYWxsYmFjayk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTaWJsaW5nVHVwbGVzKGFycmF5TGlrZU9iamVjdDogYW55KSB7XG4gICAgcmV0dXJuIEZ1bmN0aW9ucy5jcmVhdGVTaWJsaW5nVHVwbGVzKGFycmF5TGlrZU9iamVjdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTaWJsaW5ncyhhcnJheUxpa2VPYmplY3Q6IGFueSkge1xuICAgIHJldHVybiBGdW5jdGlvbnMuY3JlYXRlU2libGluZ3MoYXJyYXlMaWtlT2JqZWN0KTtcbn1cblxuZXhwb3J0IGNvbnN0IE5VTExfRlVOQ1RJT04gPSAoKSA9PiB7IC8qIG5vIG9wICovIH07XG5cbmV4cG9ydCBjb25zdCBBU1lOQ19OVUxMX0ZVTkNUSU9OID0gYXN5bmMgKCkgPT4geyAvKiBubyBvcCAqLyB9O1xuXG4iXX0=