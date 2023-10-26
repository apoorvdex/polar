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
const SafeLogger_1 = require("./SafeLogger");
class MultiLogger {
    constructor(...delegates) {
        delegates = MultiLogger.toSafeLoggers(delegates);
        this.delegates = delegates;
        this.name = 'multi-logger|'
            + this.delegates.map(delegate => delegate.name).join("+");
    }
    notice(msg, ...args) {
        this.delegates.forEach(delegate => delegate.notice(msg, ...args));
    }
    warn(msg, ...args) {
        this.delegates.forEach(delegate => delegate.warn(msg, ...args));
    }
    error(msg, ...args) {
        this.delegates.forEach(delegate => delegate.error(msg, ...args));
    }
    info(msg, ...args) {
        this.delegates.forEach(delegate => delegate.info(msg, ...args));
    }
    verbose(msg, ...args) {
        this.delegates.forEach(delegate => delegate.verbose(msg, ...args));
    }
    debug(msg, ...args) {
        this.delegates.forEach(delegate => delegate.debug(msg, ...args));
    }
    sync() {
        return __awaiter(this, void 0, void 0, function* () {
            for (const delegate of this.delegates) {
                yield delegate.sync();
            }
        });
    }
    static toSafeLoggers(delegates) {
        return delegates.map(current => {
            if (current instanceof SafeLogger_1.SafeLogger) {
                return current;
            }
            else {
                return new SafeLogger_1.SafeLogger(current);
            }
        });
    }
}
exports.MultiLogger = MultiLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVsdGlMb2dnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNdWx0aUxvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBSUEsNkNBQXdDO0FBS3hDLE1BQWEsV0FBVztJQU1wQixZQUFZLEdBQUcsU0FBb0I7UUFJL0IsU0FBUyxHQUFHLFdBQVcsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFakQsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFFM0IsSUFBSSxDQUFDLElBQUksR0FBRyxlQUFlO2NBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRU0sTUFBTSxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVNLElBQUksQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ25DLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFTSxLQUFLLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRU0sSUFBSSxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVNLE9BQU8sQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFTSxLQUFLLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRVksSUFBSTs7WUFFYixLQUFLLE1BQU0sUUFBUSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ25DLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3pCO1FBRUwsQ0FBQztLQUFBO0lBRU8sTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFvQjtRQUU3QyxPQUFPLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDM0IsSUFBSSxPQUFPLFlBQVksdUJBQVUsRUFBRTtnQkFDL0IsT0FBTyxPQUFPLENBQUM7YUFDbEI7aUJBQU07Z0JBQ0gsT0FBTyxJQUFJLHVCQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDbEM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7Q0FJSjtBQWhFRCxrQ0FnRUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFNpbXBsZSBsb2dnZXIgdGhhdCBqdXN0IHdyaXRlcyB0byB0aGUgY29uc29sZS5cbiAqL1xuaW1wb3J0IHtJTG9nZ2VyfSBmcm9tICcuL0lMb2dnZXInO1xuaW1wb3J0IHtTYWZlTG9nZ2VyfSBmcm9tICcuL1NhZmVMb2dnZXInO1xuXG4vKipcbiAqIEFsbG93cyB1cyB0byBsb2cgdG8gbXVsdGlwbGUgZGVsZWdhdGVzIGF0IG9uY2UuXG4gKi9cbmV4cG9ydCBjbGFzcyBNdWx0aUxvZ2dlciBpbXBsZW1lbnRzIElMb2dnZXIge1xuXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWU6IHN0cmluZyA7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGRlbGVnYXRlczogSUxvZ2dlcltdO1xuXG4gICAgY29uc3RydWN0b3IoLi4uZGVsZWdhdGVzOiBJTG9nZ2VyW10pIHtcblxuICAgICAgICAvLyBNYWtlIHRoZSBkZWxlZ2F0ZXMgdXNlIHNhZmUgbG9nZ2VycyBzbyB0aGF0IGlmIGFueSBvbmUgZmFpbHMgdGhlXG4gICAgICAgIC8vIGV4Y2VwdGlvbnMgYXJlIGhhbmRsZWQgZ3JhY2VmdWxseSBhbmQgZG9uJ3QgY2hva2Ugb3RoZXIgbG9nZ2Vycy5cbiAgICAgICAgZGVsZWdhdGVzID0gTXVsdGlMb2dnZXIudG9TYWZlTG9nZ2VycyhkZWxlZ2F0ZXMpO1xuXG4gICAgICAgIHRoaXMuZGVsZWdhdGVzID0gZGVsZWdhdGVzO1xuXG4gICAgICAgIHRoaXMubmFtZSA9ICdtdWx0aS1sb2dnZXJ8J1xuICAgICAgICAgICAgKyB0aGlzLmRlbGVnYXRlcy5tYXAoZGVsZWdhdGUgPT4gZGVsZWdhdGUubmFtZSkuam9pbihcIitcIik7XG4gICAgfVxuXG4gICAgcHVibGljIG5vdGljZShtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZXMuZm9yRWFjaChkZWxlZ2F0ZSA9PiBkZWxlZ2F0ZS5ub3RpY2UobXNnLCAuLi5hcmdzKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHdhcm4obXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIHRoaXMuZGVsZWdhdGVzLmZvckVhY2goZGVsZWdhdGUgPT4gZGVsZWdhdGUud2Fybihtc2csIC4uLmFyZ3MpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZXJyb3IobXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIHRoaXMuZGVsZWdhdGVzLmZvckVhY2goZGVsZWdhdGUgPT4gZGVsZWdhdGUuZXJyb3IobXNnLCAuLi5hcmdzKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGluZm8obXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIHRoaXMuZGVsZWdhdGVzLmZvckVhY2goZGVsZWdhdGUgPT4gZGVsZWdhdGUuaW5mbyhtc2csIC4uLmFyZ3MpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmVyYm9zZShtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZXMuZm9yRWFjaChkZWxlZ2F0ZSA9PiBkZWxlZ2F0ZS52ZXJib3NlKG1zZywgLi4uYXJncykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWJ1Zyhtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZXMuZm9yRWFjaChkZWxlZ2F0ZSA9PiBkZWxlZ2F0ZS5kZWJ1Zyhtc2csIC4uLmFyZ3MpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc3luYygpOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgICAgICBmb3IgKGNvbnN0IGRlbGVnYXRlIG9mIHRoaXMuZGVsZWdhdGVzKSB7XG4gICAgICAgICAgICBhd2FpdCBkZWxlZ2F0ZS5zeW5jKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIHRvU2FmZUxvZ2dlcnMoZGVsZWdhdGVzOiBJTG9nZ2VyW10pIHtcblxuICAgICAgICByZXR1cm4gZGVsZWdhdGVzLm1hcChjdXJyZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50IGluc3RhbmNlb2YgU2FmZUxvZ2dlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNhZmVMb2dnZXIoY3VycmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG5cblxufVxuIl19