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
class TimeAnnotatingLogger {
    constructor(delegate) {
        this.delegate = delegate;
        this.name = `time-annotating-logger -> ${delegate.name}`;
    }
    notice(msg, ...args) {
        this.delegate.notice(this.createTimestamp() + `: ${msg}`, ...args);
    }
    info(msg, ...args) {
        this.delegate.info(this.createTimestamp() + `: ${msg}`, ...args);
    }
    warn(msg, ...args) {
        this.delegate.warn(this.createTimestamp() + `: ${msg}`, ...args);
    }
    error(msg, ...args) {
        this.delegate.error(this.createTimestamp() + `: ${msg}`, ...args);
    }
    verbose(msg, ...args) {
        this.delegate.verbose(this.createTimestamp() + `: ${msg}`, ...args);
    }
    debug(msg, ...args) {
        this.delegate.debug(this.createTimestamp() + `: ${msg}`, ...args);
    }
    sync() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    createTimestamp() {
        return new Date().toUTCString();
    }
}
exports.TimeAnnotatingLogger = TimeAnnotatingLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZUFubm90YXRpbmdMb2dnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUaW1lQW5ub3RhdGluZ0xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBUUEsTUFBYSxvQkFBb0I7SUFLN0IsWUFBWSxRQUFpQjtRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLDZCQUE2QixRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDN0QsQ0FBQztJQUVNLE1BQU0sQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsR0FBRyxLQUFLLEdBQUcsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVNLElBQUksQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsR0FBRyxLQUFLLEdBQUcsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVNLElBQUksQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsR0FBRyxLQUFLLEdBQUcsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVNLEtBQUssQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsR0FBRyxLQUFLLEdBQUcsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVNLE9BQU8sQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsR0FBRyxLQUFLLEdBQUcsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVNLEtBQUssQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsR0FBRyxLQUFLLEdBQUcsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVZLElBQUk7O1FBRWpCLENBQUM7S0FBQTtJQUVPLGVBQWU7UUFDbkIsT0FBTyxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BDLENBQUM7Q0FFSjtBQTFDRCxvREEwQ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFNpbXBsZSBsb2dnZXIgdGhhdCBqdXN0IHdyaXRlcyB0byB0aGUgY29uc29sZS5cbiAqL1xuaW1wb3J0IHtJTG9nZ2VyfSBmcm9tICcuLi9JTG9nZ2VyJztcblxuLyoqXG4gKiBBbm5vdGF0ZXMgbG9ncyBieSBpbmNsdWRpbmcgdGhlIHRpbWUuXG4gKi9cbmV4cG9ydCBjbGFzcyBUaW1lQW5ub3RhdGluZ0xvZ2dlciBpbXBsZW1lbnRzIElMb2dnZXIge1xuXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRlbGVnYXRlOiBJTG9nZ2VyO1xuXG4gICAgY29uc3RydWN0b3IoZGVsZWdhdGU6IElMb2dnZXIpIHtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZSA9IGRlbGVnYXRlO1xuICAgICAgICB0aGlzLm5hbWUgPSBgdGltZS1hbm5vdGF0aW5nLWxvZ2dlciAtPiAke2RlbGVnYXRlLm5hbWV9YDtcbiAgICB9XG5cbiAgICBwdWJsaWMgbm90aWNlKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICB0aGlzLmRlbGVnYXRlLm5vdGljZSh0aGlzLmNyZWF0ZVRpbWVzdGFtcCgpICsgYDogJHttc2d9YCwgLi4uYXJncyk7XG4gICAgfVxuXG4gICAgcHVibGljIGluZm8obXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUuaW5mbyh0aGlzLmNyZWF0ZVRpbWVzdGFtcCgpICsgYDogJHttc2d9YCwgLi4uYXJncyk7XG4gICAgfVxuXG4gICAgcHVibGljIHdhcm4obXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUud2Fybih0aGlzLmNyZWF0ZVRpbWVzdGFtcCgpICsgYDogJHttc2d9YCwgLi4uYXJncyk7XG4gICAgfVxuXG4gICAgcHVibGljIGVycm9yKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICB0aGlzLmRlbGVnYXRlLmVycm9yKHRoaXMuY3JlYXRlVGltZXN0YW1wKCkgKyBgOiAke21zZ31gLCAuLi5hcmdzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmVyYm9zZShtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS52ZXJib3NlKHRoaXMuY3JlYXRlVGltZXN0YW1wKCkgKyBgOiAke21zZ31gLCAuLi5hcmdzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVidWcobXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUuZGVidWcodGhpcy5jcmVhdGVUaW1lc3RhbXAoKSArIGA6ICR7bXNnfWAsIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzeW5jKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICAvLyBub29wXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVUaW1lc3RhbXAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLnRvVVRDU3RyaW5nKCk7XG4gICAgfVxuXG59XG4iXX0=