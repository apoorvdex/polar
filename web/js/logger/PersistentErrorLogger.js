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
const FileLogger_1 = require("./FileLogger");
const Directories_1 = require("../datastore/Directories");
const FilePaths_1 = require("../util/FilePaths");
class PersistentErrorLogger {
    constructor(delegate) {
        this.name = 'persistent-error-logger';
        this.delegate = delegate;
    }
    notice(msg, ...args) {
        this.delegate.notice(msg, ...args);
    }
    error(msg, ...args) {
        this.delegate.error(msg, ...args);
    }
    info(msg, ...args) {
    }
    warn(msg, ...args) {
    }
    verbose(msg, ...args) {
    }
    debug(msg, ...args) {
    }
    sync() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.delegate.sync();
        });
    }
    static create() {
        return __awaiter(this, void 0, void 0, function* () {
            const directories = new Directories_1.Directories();
            const path = FilePaths_1.FilePaths.create(directories.logsDir, "error.log");
            const fileLogger = yield FileLogger_1.FileLogger.create(path);
            return new PersistentErrorLogger(fileLogger);
        });
    }
}
exports.PersistentErrorLogger = PersistentErrorLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVyc2lzdGVudEVycm9yTG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUGVyc2lzdGVudEVycm9yTG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFJQSw2Q0FBd0M7QUFDeEMsMERBQXFEO0FBQ3JELGlEQUE0QztBQU01QyxNQUFhLHFCQUFxQjtJQU05QixZQUFvQixRQUFpQjtRQUpyQixTQUFJLEdBQVcseUJBQXlCLENBQUM7UUFLckQsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUVNLE1BQU0sQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSxLQUFLLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sSUFBSSxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7SUFFdkMsQ0FBQztJQUVNLElBQUksQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO0lBRXZDLENBQUM7SUFFTSxPQUFPLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztJQUUxQyxDQUFDO0lBRU0sS0FBSyxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7SUFFeEMsQ0FBQztJQUVZLElBQUk7O1lBQ2IsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQy9CLENBQUM7S0FBQTtJQUVNLE1BQU0sQ0FBTyxNQUFNOztZQUN0QixNQUFNLFdBQVcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztZQUN0QyxNQUFNLElBQUksR0FBRyxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ2hFLE1BQU0sVUFBVSxHQUFHLE1BQU0sdUJBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakQsT0FBTyxJQUFJLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pELENBQUM7S0FBQTtDQUVKO0FBN0NELHNEQTZDQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU2ltcGxlIGxvZ2dlciB0aGF0IGp1c3Qgd3JpdGVzIHRvIHRoZSBjb25zb2xlLlxuICovXG5pbXBvcnQge0lMb2dnZXJ9IGZyb20gJy4vSUxvZ2dlcic7XG5pbXBvcnQge0ZpbGVMb2dnZXJ9IGZyb20gJy4vRmlsZUxvZ2dlcic7XG5pbXBvcnQge0RpcmVjdG9yaWVzfSBmcm9tICcuLi9kYXRhc3RvcmUvRGlyZWN0b3JpZXMnO1xuaW1wb3J0IHtGaWxlUGF0aHN9IGZyb20gJy4uL3V0aWwvRmlsZVBhdGhzJztcblxuLyoqXG4gKiBBIGxvZ2dlciB3aGljaCB3cml0ZXMgdG8gZGlzayBidXQgT05MWSBpZiB0aGV5IGFyZSBlcnJvcnMuICBUaGlzIGlzIG5lZWRlZFxuICogZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMgYXMgZWxlY3Ryb24tbG9nIGlzbid0IGFtYXppbmdseSBmYXN0LlxuICovXG5leHBvcnQgY2xhc3MgUGVyc2lzdGVudEVycm9yTG9nZ2VyIGltcGxlbWVudHMgSUxvZ2dlciB7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZTogc3RyaW5nID0gJ3BlcnNpc3RlbnQtZXJyb3ItbG9nZ2VyJztcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGVsZWdhdGU6IElMb2dnZXI7XG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKGRlbGVnYXRlOiBJTG9nZ2VyKSB7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUgPSBkZWxlZ2F0ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbm90aWNlKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICB0aGlzLmRlbGVnYXRlLm5vdGljZShtc2csIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHB1YmxpYyBlcnJvcihtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS5lcnJvcihtc2csIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbmZvKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICAvLyBub29wXG4gICAgfVxuXG4gICAgcHVibGljIHdhcm4obXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIC8vIG5vb3BcbiAgICB9XG5cbiAgICBwdWJsaWMgdmVyYm9zZShtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgLy8gbm9vcFxuICAgIH1cblxuICAgIHB1YmxpYyBkZWJ1Zyhtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgLy8gbm9vcFxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzeW5jKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCB0aGlzLmRlbGVnYXRlLnN5bmMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGNyZWF0ZSgpOiBQcm9taXNlPFBlcnNpc3RlbnRFcnJvckxvZ2dlcj4ge1xuICAgICAgICBjb25zdCBkaXJlY3RvcmllcyA9IG5ldyBEaXJlY3RvcmllcygpO1xuICAgICAgICBjb25zdCBwYXRoID0gRmlsZVBhdGhzLmNyZWF0ZShkaXJlY3Rvcmllcy5sb2dzRGlyLCBcImVycm9yLmxvZ1wiKTtcbiAgICAgICAgY29uc3QgZmlsZUxvZ2dlciA9IGF3YWl0IEZpbGVMb2dnZXIuY3JlYXRlKHBhdGgpO1xuICAgICAgICByZXR1cm4gbmV3IFBlcnNpc3RlbnRFcnJvckxvZ2dlcihmaWxlTG9nZ2VyKTtcbiAgICB9XG5cbn1cbiJdfQ==