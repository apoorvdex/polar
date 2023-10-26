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
const LogLevel_1 = require("./LogLevel");
class FilteredLogger {
    constructor(delegate, level = LogLevel_1.LogLevel.INFO) {
        this.delegate = delegate;
        this.level = level;
        this.name = `filtered-logger -> ${delegate.name}`;
    }
    notice(msg, ...args) {
        this.delegate.notice(msg, ...args);
    }
    debug(msg, ...args) {
        if (this.level < LogLevel_1.LogLevel.DEBUG) {
            return;
        }
        this.delegate.debug(msg, ...args);
    }
    verbose(msg, ...args) {
        if (this.level < LogLevel_1.LogLevel.VERBOSE) {
            return;
        }
        this.delegate.verbose(msg, ...args);
    }
    info(msg, ...args) {
        if (this.level < LogLevel_1.LogLevel.INFO) {
            return;
        }
        this.delegate.info(msg, ...args);
    }
    warn(msg, ...args) {
        if (this.level < LogLevel_1.LogLevel.WARN) {
            return;
        }
        this.delegate.warn(msg, ...args);
    }
    error(msg, ...args) {
        if (this.level < LogLevel_1.LogLevel.ERROR) {
            return;
        }
        this.delegate.error(msg, ...args);
    }
    sync() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.delegate.sync();
        });
    }
}
exports.FilteredLogger = FilteredLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsdGVyZWRMb2dnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGaWx0ZXJlZExvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EseUNBQW9DO0FBRXBDLE1BQWEsY0FBYztJQUV2QixZQUFZLFFBQWlCLEVBQUUsUUFBa0IsbUJBQVEsQ0FBQyxJQUFJO1FBQzFELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsc0JBQXNCLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0RCxDQUFDO0lBUU0sTUFBTSxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVNLEtBQUssQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ3BDLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBUSxDQUFDLEtBQUssRUFBRTtZQUFFLE9BQU87U0FBRTtRQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sT0FBTyxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDdEMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFRLENBQUMsT0FBTyxFQUFFO1lBQUUsT0FBTztTQUFFO1FBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTSxJQUFJLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUNuQyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsbUJBQVEsQ0FBQyxJQUFJLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVNLElBQUksQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ25DLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBUSxDQUFDLElBQUksRUFBRTtZQUFFLE9BQU87U0FBRTtRQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU0sS0FBSyxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDcEMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFRLENBQUMsS0FBSyxFQUFFO1lBQUUsT0FBTztTQUFFO1FBQzVDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFWSxJQUFJOztZQUNiLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMvQixDQUFDO0tBQUE7Q0FFSjtBQS9DRCx3Q0ErQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lMb2dnZXJ9IGZyb20gJy4vSUxvZ2dlcic7XG5pbXBvcnQge0xvZ0xldmVsfSBmcm9tICcuL0xvZ0xldmVsJztcblxuZXhwb3J0IGNsYXNzIEZpbHRlcmVkTG9nZ2VyIGltcGxlbWVudHMgSUxvZ2dlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihkZWxlZ2F0ZTogSUxvZ2dlciwgbGV2ZWw6IExvZ0xldmVsID0gTG9nTGV2ZWwuSU5GTykge1xuICAgICAgICB0aGlzLmRlbGVnYXRlID0gZGVsZWdhdGU7XG4gICAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgdGhpcy5uYW1lID0gYGZpbHRlcmVkLWxvZ2dlciAtPiAke2RlbGVnYXRlLm5hbWV9YDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgbGV2ZWw6IExvZ0xldmVsO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGVsZWdhdGU6IElMb2dnZXI7XG5cbiAgICBwdWJsaWMgbm90aWNlKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICB0aGlzLmRlbGVnYXRlLm5vdGljZShtc2csIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWJ1Zyhtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgaWYgKHRoaXMubGV2ZWwgPCBMb2dMZXZlbC5ERUJVRykgeyByZXR1cm47IH1cbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS5kZWJ1Zyhtc2csIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHB1YmxpYyB2ZXJib3NlKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBpZiAodGhpcy5sZXZlbCA8IExvZ0xldmVsLlZFUkJPU0UpIHsgcmV0dXJuOyB9XG4gICAgICAgIHRoaXMuZGVsZWdhdGUudmVyYm9zZShtc2csIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbmZvKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBpZiAodGhpcy5sZXZlbCA8IExvZ0xldmVsLklORk8pIHsgcmV0dXJuOyB9XG4gICAgICAgIHRoaXMuZGVsZWdhdGUuaW5mbyhtc2csIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHB1YmxpYyB3YXJuKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBpZiAodGhpcy5sZXZlbCA8IExvZ0xldmVsLldBUk4pIHsgcmV0dXJuOyB9XG4gICAgICAgIHRoaXMuZGVsZWdhdGUud2Fybihtc2csIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHB1YmxpYyBlcnJvcihtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgaWYgKHRoaXMubGV2ZWwgPCBMb2dMZXZlbC5FUlJPUikgeyByZXR1cm47IH1cbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS5lcnJvcihtc2csIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzeW5jKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCB0aGlzLmRlbGVnYXRlLnN5bmMoKTtcbiAgICB9XG5cbn1cbiJdfQ==