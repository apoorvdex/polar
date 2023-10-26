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
const Logger_1 = require("../logger/Logger");
const log = Logger_1.Logger.create();
class ExecutionTimer {
    static execute(func) {
        let before = Date.now();
        let result = func();
        let after = Date.now();
        let duration = after - before;
        log.info(`Execution time: ${duration}`);
        return result;
    }
    static executeAsync(func) {
        return __awaiter(this, void 0, void 0, function* () {
            let before = Date.now();
            let result = yield func();
            let after = Date.now();
            let duration = after - before;
            log.info(`Execution time: ${duration}`);
            return result;
        });
    }
}
exports.ExecutionTimer = ExecutionTimer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhlY3V0aW9uVGltZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJFeGVjdXRpb25UaW1lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBRXhDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLGNBQWM7SUFFaEIsTUFBTSxDQUFDLE9BQU8sQ0FBSSxJQUFhO1FBRWxDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUV4QixJQUFJLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQztRQUVwQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFdkIsSUFBSSxRQUFRLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUU5QixHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBRXhDLE9BQU8sTUFBTSxDQUFDO0lBRWxCLENBQUM7SUFFTSxNQUFNLENBQU8sWUFBWSxDQUFJLElBQXNCOztZQUV0RCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFFeEIsSUFBSSxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztZQUUxQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFFdkIsSUFBSSxRQUFRLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQztZQUU5QixHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBRXhDLE9BQU8sTUFBTSxDQUFDO1FBRWxCLENBQUM7S0FBQTtDQUdKO0FBbkNELHdDQW1DQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi9sb2dnZXIvTG9nZ2VyJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgY2xhc3MgRXhlY3V0aW9uVGltZXIge1xuXG4gICAgcHVibGljIHN0YXRpYyBleGVjdXRlPFQ+KGZ1bmM6ICgpID0+IFQpIHtcblxuICAgICAgICBsZXQgYmVmb3JlID0gRGF0ZS5ub3coKTtcblxuICAgICAgICBsZXQgcmVzdWx0ID0gZnVuYygpO1xuXG4gICAgICAgIGxldCBhZnRlciA9IERhdGUubm93KCk7XG5cbiAgICAgICAgbGV0IGR1cmF0aW9uID0gYWZ0ZXIgLSBiZWZvcmU7XG5cbiAgICAgICAgbG9nLmluZm8oYEV4ZWN1dGlvbiB0aW1lOiAke2R1cmF0aW9ufWApO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGV4ZWN1dGVBc3luYzxUPihmdW5jOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG5cbiAgICAgICAgbGV0IGJlZm9yZSA9IERhdGUubm93KCk7XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGZ1bmMoKTtcblxuICAgICAgICBsZXQgYWZ0ZXIgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgIGxldCBkdXJhdGlvbiA9IGFmdGVyIC0gYmVmb3JlO1xuXG4gICAgICAgIGxvZy5pbmZvKGBFeGVjdXRpb24gdGltZTogJHtkdXJhdGlvbn1gKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxuXG5cbn1cbiJdfQ==