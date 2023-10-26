"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Files_1 = require("../util/Files");
const util = __importStar(require("util"));
class FileLogger {
    constructor(path, fd) {
        this.path = path;
        this.fd = fd;
        this.name = 'file-logger:' + path;
    }
    notice(msg, ...args) {
        this.append('notice', msg, ...args);
    }
    debug(msg, ...args) {
        this.append('debug', msg, ...args);
    }
    error(msg, ...args) {
        this.append('error', msg, ...args);
    }
    info(msg, ...args) {
        this.append('info', msg, ...args);
    }
    verbose(msg, ...args) {
        this.append('verbose', msg, ...args);
    }
    warn(msg, ...args) {
        this.append('warn', msg, ...args);
    }
    sync() {
        return __awaiter(this, void 0, void 0, function* () {
            return Files_1.Files.fsyncAsync(this.fd);
        });
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            yield Files_1.Files.closeAsync(this.fd);
        });
    }
    append(level, msg, ...args) {
        const line = FileLogger.format(level, msg, ...args);
        Files_1.Files.appendFileAsync(this.fd, line)
            .catch((err) => console.error("Could not write to file logger: ", err));
    }
    static create(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const fd = yield Files_1.Files.openAsync(path, 'a');
            return new FileLogger(path, fd);
        });
    }
    static format(level, msg, ...args) {
        const timestamp = new Date().toISOString();
        let line = `[${timestamp}] [${level}] ${msg}`;
        if (args.length > 0) {
            args.forEach(arg => {
                if (!line.endsWith(' ')) {
                    line += ' ';
                }
                if (arg instanceof Error) {
                    const err = arg;
                    line += '\n' + err.stack;
                }
                else if (typeof arg === 'string' ||
                    typeof arg === 'boolean' ||
                    typeof arg === 'number') {
                    line += arg.toString();
                }
                else {
                    line += util.inspect(arg, false, undefined, false);
                }
            });
        }
        line += '\n';
        return line;
    }
}
exports.FileLogger = FileLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZUxvZ2dlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkZpbGVMb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSx5Q0FBb0M7QUFDcEMsMkNBQTZCO0FBRTdCLE1BQWEsVUFBVTtJQVFuQixZQUFZLElBQVksRUFBRSxFQUFVO1FBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLElBQUksR0FBRyxjQUFjLEdBQUcsSUFBSSxDQUFDO0lBQ3RDLENBQUM7SUFFTSxNQUFNLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU0sS0FBSyxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVNLEtBQUssQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSxJQUFJLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sT0FBTyxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVNLElBQUksQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFWSxJQUFJOztZQUViLE9BQU8sYUFBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckMsQ0FBQztLQUFBO0lBRVksS0FBSzs7WUFDZCxNQUFNLGFBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7S0FBQTtJQUVPLE1BQU0sQ0FBQyxLQUFhLEVBQUUsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUVyRCxNQUFNLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUVwRCxhQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDO2FBSy9CLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxrQ0FBa0MsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRWhGLENBQUM7SUFFTSxNQUFNLENBQU8sTUFBTSxDQUFDLElBQVk7O1lBQ25DLE1BQU0sRUFBRSxHQUFHLE1BQU0sYUFBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDNUMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDcEMsQ0FBQztLQUFBO0lBRVMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFhLEVBQUUsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUU5RCxNQUFNLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRTNDLElBQUksSUFBSSxHQUFHLElBQUksU0FBUyxNQUFNLEtBQUssS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUU5QyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBRWpCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBRWYsSUFBSyxDQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ3ZCLElBQUksSUFBSSxHQUFHLENBQUM7aUJBQ2Y7Z0JBRUQsSUFBSSxHQUFHLFlBQVksS0FBSyxFQUFFO29CQUV0QixNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUM7b0JBRWhCLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztpQkFFNUI7cUJBQU0sSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRO29CQUN2QixPQUFPLEdBQUcsS0FBSyxTQUFTO29CQUN4QixPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7b0JBRWhDLElBQUksSUFBSSxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBRTFCO3FCQUFNO29CQUdILElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUN0RDtZQUVMLENBQUMsQ0FBQyxDQUFDO1NBRU47UUFFRCxJQUFJLElBQUksSUFBSSxDQUFDO1FBRWIsT0FBTyxJQUFJLENBQUM7SUFFaEIsQ0FBQztDQUVKO0FBM0dELGdDQTJHQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBiYXNpYyBhcHBlbmQtb25seSBmaWxlIGxvZ2dlci5cbiAqL1xuaW1wb3J0IHtJTG9nZ2VyfSBmcm9tICcuL0lMb2dnZXInO1xuaW1wb3J0IHtGaWxlc30gZnJvbSAnLi4vdXRpbC9GaWxlcyc7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJ3V0aWwnO1xuXG5leHBvcnQgY2xhc3MgRmlsZUxvZ2dlciBpbXBsZW1lbnRzIElMb2dnZXIge1xuXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblxuICAgIHByaXZhdGUgcGF0aDogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBmZDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IocGF0aDogc3RyaW5nLCBmZDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgICAgIHRoaXMuZmQgPSBmZDtcbiAgICAgICAgdGhpcy5uYW1lID0gJ2ZpbGUtbG9nZ2VyOicgKyBwYXRoO1xuICAgIH1cblxuICAgIHB1YmxpYyBub3RpY2UobXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYXBwZW5kKCdub3RpY2UnLCBtc2csIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWJ1Zyhtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hcHBlbmQoJ2RlYnVnJywgbXNnLCAuLi5hcmdzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZXJyb3IobXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYXBwZW5kKCdlcnJvcicsIG1zZywgLi4uYXJncyk7XG4gICAgfVxuXG4gICAgcHVibGljIGluZm8obXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYXBwZW5kKCdpbmZvJywgbXNnLCAuLi5hcmdzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmVyYm9zZShtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hcHBlbmQoJ3ZlcmJvc2UnLCBtc2csIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHB1YmxpYyB3YXJuKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xuICAgICAgICB0aGlzLmFwcGVuZCgnd2FybicsIG1zZywgLi4uYXJncyk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHN5bmMoKSB7XG5cbiAgICAgICAgcmV0dXJuIEZpbGVzLmZzeW5jQXN5bmModGhpcy5mZCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGNsb3NlKCkge1xuICAgICAgICBhd2FpdCBGaWxlcy5jbG9zZUFzeW5jKHRoaXMuZmQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXBwZW5kKGxldmVsOiBzdHJpbmcsIG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuXG4gICAgICAgIGNvbnN0IGxpbmUgPSBGaWxlTG9nZ2VyLmZvcm1hdChsZXZlbCwgbXNnLCAuLi5hcmdzKTtcblxuICAgICAgICBGaWxlcy5hcHBlbmRGaWxlQXN5bmModGhpcy5mZCwgbGluZSlcbiAgICAgICAgICAgIC8vIFRPRE86IGl0IG1pZ2h0IGJlIGEgZ29vZCBpZGVhIHRvIGFkZCBzdXBwb3J0IGZvciBhdXRvLXN5bmMgaW4gdGhlXG4gICAgICAgICAgICAvLyBmdXR1cmUgYnV0IGZvciBub3cgSSBkaXNhYmxlZCBpdCBkdWUgdG8gYW4gaXNzdWUgd2l0aCBmc3luYyBub3RcbiAgICAgICAgICAgIC8vIHdvcmtpbmcgYXMgZXhwZWN0ZWQuXG4gICAgICAgICAgICAvLyAudGhlbihhc3luYyAoKSA9PiBhd2FpdCB0aGlzLnN5bmMoKSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKFwiQ291bGQgbm90IHdyaXRlIHRvIGZpbGUgbG9nZ2VyOiBcIiwgZXJyKSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGNyZWF0ZShwYXRoOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZmQgPSBhd2FpdCBGaWxlcy5vcGVuQXN5bmMocGF0aCwgJ2EnKTtcbiAgICAgICAgcmV0dXJuIG5ldyBGaWxlTG9nZ2VyKHBhdGgsIGZkKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc3RhdGljIGZvcm1hdChsZXZlbDogc3RyaW5nLCBtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcblxuICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG5cbiAgICAgICAgbGV0IGxpbmUgPSBgWyR7dGltZXN0YW1wfV0gWyR7bGV2ZWx9XSAke21zZ31gO1xuXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDApIHtcblxuICAgICAgICAgICAgYXJncy5mb3JFYWNoKGFyZyA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAoICEgbGluZS5lbmRzV2l0aCgnICcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUgKz0gJyAnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChhcmcgaW5zdGFuY2VvZiBFcnJvcikge1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IGFyZztcblxuICAgICAgICAgICAgICAgICAgICBsaW5lICs9ICdcXG4nICsgZXJyLnN0YWNrO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYXJnID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgYXJnID09PSAnbnVtYmVyJykge1xuXG4gICAgICAgICAgICAgICAgICAgIGxpbmUgKz0gYXJnLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb252ZXJ0IHRoZSBvYmplY3QgdG8gYSBzdHJpbmcuIERvIG5vdCB1c2UgSlNPTi5zdHJpbmdpZnlcbiAgICAgICAgICAgICAgICAgICAgLy8gYXMgaXQgZG9lc24ndCBoYW5kbGUgY2lyY3VsYXIgcmVmZXJlbmNlcy5cbiAgICAgICAgICAgICAgICAgICAgbGluZSArPSB1dGlsLmluc3BlY3QoYXJnLCBmYWxzZSwgdW5kZWZpbmVkLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgbGluZSArPSAnXFxuJztcblxuICAgICAgICByZXR1cm4gbGluZTtcblxuICAgIH1cblxufVxuIl19