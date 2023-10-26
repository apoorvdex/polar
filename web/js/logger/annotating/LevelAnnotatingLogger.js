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
class LevelAnnotatingLogger {
    constructor(delegate) {
        this.delegate = delegate;
        this.name = `level-annotating-logger -> ${delegate.name}`;
    }
    notice(msg, ...args) {
        this.delegate.info(`[notice] ${msg}`, ...args);
    }
    info(msg, ...args) {
        this.delegate.info(`[info] ${msg}`, ...args);
    }
    warn(msg, ...args) {
        this.delegate.warn(`[warn] ${msg}`, ...args);
    }
    error(msg, ...args) {
        this.delegate.error(`[error] ${msg}`, ...args);
    }
    verbose(msg, ...args) {
        this.delegate.verbose(`[verbose] ${msg}`, ...args);
    }
    debug(msg, ...args) {
        this.delegate.debug(`[debug] ${msg}`, ...args);
    }
    sync() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.delegate.sync();
        });
    }
}
exports.LevelAnnotatingLogger = LevelAnnotatingLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGV2ZWxBbm5vdGF0aW5nTG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTGV2ZWxBbm5vdGF0aW5nTG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFTQSxNQUFhLHFCQUFxQjtJQUs5QixZQUFZLFFBQWlCO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsOEJBQThCLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM5RCxDQUFDO0lBRU0sTUFBTSxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFTSxJQUFJLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVNLElBQUksQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRU0sS0FBSyxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFTSxPQUFPLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVNLEtBQUssQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRVksSUFBSTs7WUFDYixNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDL0IsQ0FBQztLQUFBO0NBR0o7QUF2Q0Qsc0RBdUNDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTaW1wbGUgbG9nZ2VyIHRoYXQganVzdCB3cml0ZXMgdG8gdGhlIGNvbnNvbGUuXG4gKi9cbmltcG9ydCB7SUxvZ2dlcn0gZnJvbSAnLi4vSUxvZ2dlcic7XG5cbi8qKlxuICogQW5ub3RhdGVzIGxvZyBjYWxscyB3aXRoIHRoZSBsZXZlbC4gIEhlbHBmdWwgd2hlbiB0aGUgdGFyZ2V0IGlzIHRoZVxuICogY29uc29sZSBsb2dnZXIuXG4gKi9cbmV4cG9ydCBjbGFzcyBMZXZlbEFubm90YXRpbmdMb2dnZXIgaW1wbGVtZW50cyBJTG9nZ2VyIHtcblxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSByZWFkb25seSBkZWxlZ2F0ZTogSUxvZ2dlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRlbGVnYXRlOiBJTG9nZ2VyKSB7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUgPSBkZWxlZ2F0ZTtcbiAgICAgICAgdGhpcy5uYW1lID0gYGxldmVsLWFubm90YXRpbmctbG9nZ2VyIC0+ICR7ZGVsZWdhdGUubmFtZX1gO1xuICAgIH1cblxuICAgIHB1YmxpYyBub3RpY2UobXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUuaW5mbyhgW25vdGljZV0gJHttc2d9YCwgLi4uYXJncyk7XG4gICAgfVxuXG4gICAgcHVibGljIGluZm8obXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUuaW5mbyhgW2luZm9dICR7bXNnfWAsIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHB1YmxpYyB3YXJuKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICB0aGlzLmRlbGVnYXRlLndhcm4oYFt3YXJuXSAke21zZ31gLCAuLi5hcmdzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZXJyb3IobXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUuZXJyb3IoYFtlcnJvcl0gJHttc2d9YCwgLi4uYXJncyk7XG4gICAgfVxuXG4gICAgcHVibGljIHZlcmJvc2UobXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUudmVyYm9zZShgW3ZlcmJvc2VdICR7bXNnfWAsIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWJ1Zyhtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS5kZWJ1ZyhgW2RlYnVnXSAke21zZ31gLCAuLi5hcmdzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc3luYygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5kZWxlZ2F0ZS5zeW5jKCk7XG4gICAgfVxuXG5cbn1cbiJdfQ==