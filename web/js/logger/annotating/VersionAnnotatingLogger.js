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
const PackageManifest_1 = require("../../util/PackageManifest");
class VersionAnnotatingLogger {
    constructor(delegate) {
        this.delegate = delegate;
        this.name = `version-annotating-logger -> ${delegate.name}`;
        const packageManifest = new PackageManifest_1.PackageManifest();
        this.versionAnnotation = `[${packageManifest.version()}]`;
    }
    notice(msg, ...args) {
        this.delegate.notice(this.versionAnnotation + ` ${msg}`, ...args);
    }
    info(msg, ...args) {
        this.delegate.info(this.versionAnnotation + ` ${msg}`, ...args);
    }
    warn(msg, ...args) {
        this.delegate.warn(this.versionAnnotation + ` ${msg}`, ...args);
    }
    error(msg, ...args) {
        this.delegate.error(this.versionAnnotation + ` ${msg}`, ...args);
    }
    verbose(msg, ...args) {
        this.delegate.verbose(this.versionAnnotation + ` ${msg}`, ...args);
    }
    debug(msg, ...args) {
        this.delegate.debug(this.versionAnnotation + ` ${msg}`, ...args);
    }
    sync() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.delegate.sync();
        });
    }
}
exports.VersionAnnotatingLogger = VersionAnnotatingLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVyc2lvbkFubm90YXRpbmdMb2dnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJWZXJzaW9uQW5ub3RhdGluZ0xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBSUEsZ0VBQTJEO0FBSzNELE1BQWEsdUJBQXVCO0lBT2hDLFlBQVksUUFBaUI7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxnQ0FBZ0MsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVELE1BQU0sZUFBZSxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO1FBRTlDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLGVBQWUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDO0lBRTlELENBQUM7SUFFTSxNQUFNLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxHQUFHLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFTSxJQUFJLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxHQUFHLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFTSxJQUFJLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxHQUFHLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFTSxLQUFLLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxHQUFHLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFTSxPQUFPLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxHQUFHLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFTSxLQUFLLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxHQUFHLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFWSxJQUFJOztZQUNiLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMvQixDQUFDO0tBQUE7Q0FFSjtBQTVDRCwwREE0Q0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFNpbXBsZSBsb2dnZXIgdGhhdCBqdXN0IHdyaXRlcyB0byB0aGUgY29uc29sZS5cbiAqL1xuaW1wb3J0IHtJTG9nZ2VyfSBmcm9tICcuLi9JTG9nZ2VyJztcbmltcG9ydCB7UGFja2FnZU1hbmlmZXN0fSBmcm9tICcuLi8uLi91dGlsL1BhY2thZ2VNYW5pZmVzdCc7XG5cbi8qKlxuICogQW5ub3RhdGVzIGxvZ3MgYnkgaW5jbHVkaW5nIHRoZSB2ZXJzaW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBWZXJzaW9uQW5ub3RhdGluZ0xvZ2dlciBpbXBsZW1lbnRzIElMb2dnZXIge1xuXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRlbGVnYXRlOiBJTG9nZ2VyO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSB2ZXJzaW9uQW5ub3RhdGlvbjogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGVsZWdhdGU6IElMb2dnZXIpIHtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZSA9IGRlbGVnYXRlO1xuICAgICAgICB0aGlzLm5hbWUgPSBgdmVyc2lvbi1hbm5vdGF0aW5nLWxvZ2dlciAtPiAke2RlbGVnYXRlLm5hbWV9YDtcbiAgICAgICAgY29uc3QgcGFja2FnZU1hbmlmZXN0ID0gbmV3IFBhY2thZ2VNYW5pZmVzdCgpO1xuICAgICAgICAvLyB0aGlzLnZlcnNpb25Bbm5vdGF0aW9uID0gYFske3BhY2thZ2VNYW5pZmVzdC5uYW1lKCl9LSR7cGFja2FnZU1hbmlmZXN0LnZlcnNpb24oKX1dYDtcbiAgICAgICAgdGhpcy52ZXJzaW9uQW5ub3RhdGlvbiA9IGBbJHtwYWNrYWdlTWFuaWZlc3QudmVyc2lvbigpfV1gO1xuXG4gICAgfVxuXG4gICAgcHVibGljIG5vdGljZShtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS5ub3RpY2UodGhpcy52ZXJzaW9uQW5ub3RhdGlvbiArIGAgJHttc2d9YCwgLi4uYXJncyk7XG4gICAgfVxuXG4gICAgcHVibGljIGluZm8obXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUuaW5mbyh0aGlzLnZlcnNpb25Bbm5vdGF0aW9uICsgYCAke21zZ31gLCAuLi5hcmdzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgd2Fybihtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS53YXJuKHRoaXMudmVyc2lvbkFubm90YXRpb24gKyBgICR7bXNnfWAsIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHB1YmxpYyBlcnJvcihtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS5lcnJvcih0aGlzLnZlcnNpb25Bbm5vdGF0aW9uICsgYCAke21zZ31gLCAuLi5hcmdzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmVyYm9zZShtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS52ZXJib3NlKHRoaXMudmVyc2lvbkFubm90YXRpb24gKyBgICR7bXNnfWAsIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWJ1Zyhtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS5kZWJ1Zyh0aGlzLnZlcnNpb25Bbm5vdGF0aW9uICsgYCAke21zZ31gLCAuLi5hcmdzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc3luYygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5kZWxlZ2F0ZS5zeW5jKCk7XG4gICAgfVxuXG59XG4iXX0=