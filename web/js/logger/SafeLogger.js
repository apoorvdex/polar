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
class SafeLogger {
    constructor(delegate) {
        this.delegate = delegate;
        this.name = 'safe-logger+' + delegate.name;
    }
    notice(msg, ...args) {
        this.withTryCatch(() => this.delegate.notice(msg, ...args));
    }
    warn(msg, ...args) {
        this.withTryCatch(() => this.delegate.warn(msg, ...args));
    }
    error(msg, ...args) {
        this.withTryCatch(() => this.delegate.error(msg, ...args));
    }
    info(msg, ...args) {
        this.withTryCatch(() => this.delegate.info(msg, ...args));
    }
    verbose(msg, ...args) {
        this.withTryCatch(() => this.delegate.verbose(msg, ...args));
    }
    debug(msg, ...args) {
        this.withTryCatch(() => this.delegate.debug(msg, ...args));
    }
    sync() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.delegate.sync();
        });
    }
    withTryCatch(logFunction) {
        try {
            logFunction();
        }
        catch (e) {
            console.error("Unable to log: ", e);
        }
    }
}
exports.SafeLogger = SafeLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2FmZUxvZ2dlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNhZmVMb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQVVBLE1BQWEsVUFBVTtJQU1uQixZQUFZLFFBQWlCO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsY0FBYyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDL0MsQ0FBQztJQUVNLE1BQU0sQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ3JDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRU0sSUFBSSxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFTSxLQUFLLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVNLElBQUksQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRU0sT0FBTyxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFTSxLQUFLLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUdZLElBQUk7O1lBQ2IsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQy9CLENBQUM7S0FBQTtJQUVPLFlBQVksQ0FBQyxXQUF1QjtRQUV4QyxJQUFJO1lBQ0EsV0FBVyxFQUFFLENBQUM7U0FDakI7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUdSLE9BQU8sQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDdkM7SUFFTCxDQUFDO0NBRUo7QUFwREQsZ0NBb0RDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTaW1wbGUgbG9nZ2VyIHRoYXQganVzdCB3cml0ZXMgdG8gdGhlIGNvbnNvbGUuXG4gKi9cbmltcG9ydCB7SUxvZ2dlcn0gZnJvbSAnLi9JTG9nZ2VyJztcblxuLyoqXG4gKiBBIGxvZ2dlciB0aGF0IGNhbGxzIGEgZGVsZWdhdGUgd2l0aCB0cnkvY2F0Y2ggYW5kIHRoZW4gZG9lcyBhIGNvbnNvbGUuZXJyb3JcbiAqIGlmIHRoZSB1bmRlcmx5aW5nIGxvZ2dlciBmYWlscy5cbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBTYWZlTG9nZ2VyIGltcGxlbWVudHMgSUxvZ2dlciB7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZTogc3RyaW5nIDtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGVsZWdhdGU6IElMb2dnZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkZWxlZ2F0ZTogSUxvZ2dlcikge1xuICAgICAgICB0aGlzLmRlbGVnYXRlID0gZGVsZWdhdGU7XG4gICAgICAgIHRoaXMubmFtZSA9ICdzYWZlLWxvZ2dlcisnICsgZGVsZWdhdGUubmFtZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbm90aWNlKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICB0aGlzLndpdGhUcnlDYXRjaCgoKSA9PiB0aGlzLmRlbGVnYXRlLm5vdGljZShtc2csIC4uLmFyZ3MpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgd2Fybihtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgdGhpcy53aXRoVHJ5Q2F0Y2goKCkgPT4gdGhpcy5kZWxlZ2F0ZS53YXJuKG1zZywgLi4uYXJncykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBlcnJvcihtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgdGhpcy53aXRoVHJ5Q2F0Y2goKCkgPT4gdGhpcy5kZWxlZ2F0ZS5lcnJvcihtc2csIC4uLmFyZ3MpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5mbyhtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgdGhpcy53aXRoVHJ5Q2F0Y2goKCkgPT4gdGhpcy5kZWxlZ2F0ZS5pbmZvKG1zZywgLi4uYXJncykpO1xuICAgIH1cblxuICAgIHB1YmxpYyB2ZXJib3NlKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICB0aGlzLndpdGhUcnlDYXRjaCgoKSA9PiB0aGlzLmRlbGVnYXRlLnZlcmJvc2UobXNnLCAuLi5hcmdzKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlYnVnKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICB0aGlzLndpdGhUcnlDYXRjaCgoKSA9PiB0aGlzLmRlbGVnYXRlLmRlYnVnKG1zZywgLi4uYXJncykpO1xuICAgIH1cblxuXG4gICAgcHVibGljIGFzeW5jIHN5bmMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGF3YWl0IHRoaXMuZGVsZWdhdGUuc3luYygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgd2l0aFRyeUNhdGNoKGxvZ0Z1bmN0aW9uOiAoKSA9PiB2b2lkKSB7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxvZ0Z1bmN0aW9uKCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIE5PVEUgdGhhdCB3ZSBjYW4ndCBsb2cgYW55dGhpbmcgc2FmZWx5IGFib3V0IHRoZSBvcmlnaW5hbFxuICAgICAgICAgICAgLy8gZmFpbHVyZSBiZWNhdXNlIGlmIHdlIGRvIHRoZW4gd2UgbWlnaHQgY2F1c2UgdGhlIHNhbWUgcHJvYmxlbS5cbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJVbmFibGUgdG8gbG9nOiBcIiwgZSk7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuIl19