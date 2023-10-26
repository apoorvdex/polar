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
const Strings_1 = require("../util/Strings");
const FixedBuffer_1 = require("../util/FixedBuffer");
const ISODateTimeStrings_1 = require("../metadata/ISODateTimeStrings");
const capacity = Strings_1.Strings.toNumber(process.env.POLAR_LOG_CAPACITY, 250);
let IDX_GENERATOR = 0;
const buffer = new FixedBuffer_1.FixedBuffer(capacity);
class MemoryLogger {
    constructor() {
        this.name = 'memory-logger';
    }
    notice(msg, ...args) {
        buffer.write(createLogMessage('notice', msg, args));
    }
    info(msg, ...args) {
        buffer.write(createLogMessage('info', msg, args));
    }
    warn(msg, ...args) {
        buffer.write(createLogMessage('warn', msg, args));
    }
    error(msg, ...args) {
        buffer.write(createLogMessage('error', msg, args));
    }
    verbose(msg, ...args) {
        buffer.write(createLogMessage('verbose', msg, args));
    }
    debug(msg, ...args) {
        buffer.write(createLogMessage('debug', msg, args));
    }
    getOutput() {
        return buffer.toView().join("\n");
    }
    toJSON() {
        return JSON.stringify(buffer.toView(), null, "  ");
    }
    sync() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    static addEventListener(eventListener) {
        return buffer.addEventListener(eventListener);
    }
    static toView() {
        return buffer.toView();
    }
    static clear() {
        buffer.clear();
        buffer.write(createLogMessage('info', "Log messages cleared", []));
    }
}
exports.MemoryLogger = MemoryLogger;
function createLogMessage(level, msg, args) {
    return {
        timestamp: ISODateTimeStrings_1.ISODateTimeStrings.create(),
        idx: IDX_GENERATOR++,
        level,
        msg,
        args
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVtb3J5TG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTWVtb3J5TG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSw2Q0FBd0M7QUFDeEMscURBQWdEO0FBR2hELHVFQUFrRTtBQUVsRSxNQUFNLFFBQVEsR0FBRyxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBRXZFLElBQUksYUFBYSxHQUFHLENBQUMsQ0FBQztBQUV0QixNQUFNLE1BQU0sR0FBRyxJQUFJLHlCQUFXLENBQWEsUUFBUSxDQUFDLENBQUM7QUFNckQsTUFBYSxZQUFZO0lBQXpCO1FBRW9CLFNBQUksR0FBVyxlQUFlLENBQUM7SUFtRG5ELENBQUM7SUFqRFUsTUFBTSxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDckMsTUFBTSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVNLElBQUksQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ25DLE1BQU0sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFTSxJQUFJLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUNuQyxNQUFNLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRU0sS0FBSyxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDcEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVNLE9BQU8sQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ3RDLE1BQU0sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFTSxLQUFLLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUNwQyxNQUFNLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRU0sU0FBUztRQUNaLE9BQU8sTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sTUFBTTtRQUNULE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFWSxJQUFJOztRQUVqQixDQUFDO0tBQUE7SUFFTSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsYUFBd0M7UUFDbkUsT0FBTyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVNLE1BQU0sQ0FBQyxNQUFNO1FBQ2hCLE9BQU8sTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTSxNQUFNLENBQUMsS0FBSztRQUNmLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNmLE1BQU0sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUUsTUFBTSxFQUFFLHNCQUFzQixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQztDQUVKO0FBckRELG9DQXFEQztBQUVELFNBQVMsZ0JBQWdCLENBQUMsS0FBbUIsRUFDbkIsR0FBVyxFQUNYLElBQXdCO0lBRTlDLE9BQU87UUFDSCxTQUFTLEVBQUUsdUNBQWtCLENBQUMsTUFBTSxFQUFFO1FBQ3RDLEdBQUcsRUFBRSxhQUFhLEVBQUU7UUFDcEIsS0FBSztRQUNMLEdBQUc7UUFDSCxJQUFJO0tBQ1AsQ0FBQztBQUVOLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lMb2dnZXJ9IGZyb20gJy4vSUxvZ2dlcic7XG5pbXBvcnQge1N0cmluZ3N9IGZyb20gJy4uL3V0aWwvU3RyaW5ncyc7XG5pbXBvcnQge0ZpeGVkQnVmZmVyfSBmcm9tICcuLi91dGlsL0ZpeGVkQnVmZmVyJztcbmltcG9ydCB7TG9nTGV2ZWxOYW1lLCBMb2dNZXNzYWdlfSBmcm9tICcuL0xvZ2dpbmcnO1xuaW1wb3J0IHtFdmVudExpc3RlbmVyLCBSZWxlYXNlYWJsZX0gZnJvbSAnLi4vcmVhY3Rvci9FdmVudExpc3RlbmVyJztcbmltcG9ydCB7SVNPRGF0ZVRpbWVTdHJpbmdzfSBmcm9tICcuLi9tZXRhZGF0YS9JU09EYXRlVGltZVN0cmluZ3MnO1xuXG5jb25zdCBjYXBhY2l0eSA9IFN0cmluZ3MudG9OdW1iZXIocHJvY2Vzcy5lbnYuUE9MQVJfTE9HX0NBUEFDSVRZLCAyNTApO1xuXG5sZXQgSURYX0dFTkVSQVRPUiA9IDA7XG5cbmNvbnN0IGJ1ZmZlciA9IG5ldyBGaXhlZEJ1ZmZlcjxMb2dNZXNzYWdlPihjYXBhY2l0eSk7XG5cbi8qKlxuICogV3JpdGUgbG9nIG1lc3NhZ2VzIHRvIGFuIGludGVybmFsIGJ1ZmZlciBmb3IgdGVzdGluZyBsb2cgb3V0cHV0IG9mXG4gKiBjb21wb25lbnRzLlxuICovXG5leHBvcnQgY2xhc3MgTWVtb3J5TG9nZ2VyIGltcGxlbWVudHMgSUxvZ2dlciB7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZTogc3RyaW5nID0gJ21lbW9yeS1sb2dnZXInO1xuXG4gICAgcHVibGljIG5vdGljZShtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgYnVmZmVyLndyaXRlKGNyZWF0ZUxvZ01lc3NhZ2UoJ25vdGljZScsIG1zZywgYXJncykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbmZvKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBidWZmZXIud3JpdGUoY3JlYXRlTG9nTWVzc2FnZSggJ2luZm8nLCBtc2csIGFyZ3MpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgd2Fybihtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgYnVmZmVyLndyaXRlKGNyZWF0ZUxvZ01lc3NhZ2UoICd3YXJuJywgbXNnLCBhcmdzKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGVycm9yKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBidWZmZXIud3JpdGUoY3JlYXRlTG9nTWVzc2FnZSggJ2Vycm9yJywgbXNnLCBhcmdzKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHZlcmJvc2UobXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIGJ1ZmZlci53cml0ZShjcmVhdGVMb2dNZXNzYWdlKCAndmVyYm9zZScsIG1zZywgYXJncykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWJ1Zyhtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgYnVmZmVyLndyaXRlKGNyZWF0ZUxvZ01lc3NhZ2UoICdkZWJ1ZycsIG1zZywgYXJncykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRPdXRwdXQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGJ1ZmZlci50b1ZpZXcoKS5qb2luKFwiXFxuXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShidWZmZXIudG9WaWV3KCksIG51bGwsIFwiICBcIik7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHN5bmMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIC8vIG5vb3BcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnRMaXN0ZW5lcjogRXZlbnRMaXN0ZW5lcjxMb2dNZXNzYWdlPik6IFJlbGVhc2VhYmxlIHtcbiAgICAgICAgcmV0dXJuIGJ1ZmZlci5hZGRFdmVudExpc3RlbmVyKGV2ZW50TGlzdGVuZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgdG9WaWV3KCk6IFJlYWRvbmx5QXJyYXk8TG9nTWVzc2FnZT4ge1xuICAgICAgICByZXR1cm4gYnVmZmVyLnRvVmlldygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIGJ1ZmZlci5jbGVhcigpO1xuICAgICAgICBidWZmZXIud3JpdGUoY3JlYXRlTG9nTWVzc2FnZSggJ2luZm8nLCBcIkxvZyBtZXNzYWdlcyBjbGVhcmVkXCIsIFtdKSk7XG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxvZ01lc3NhZ2UobGV2ZWw6IExvZ0xldmVsTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3M6IFJlYWRvbmx5QXJyYXk8YW55Pik6IExvZ01lc3NhZ2Uge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGltZXN0YW1wOiBJU09EYXRlVGltZVN0cmluZ3MuY3JlYXRlKCksXG4gICAgICAgIGlkeDogSURYX0dFTkVSQVRPUisrLFxuICAgICAgICBsZXZlbCxcbiAgICAgICAgbXNnLFxuICAgICAgICBhcmdzXG4gICAgfTtcblxufVxuXG5cbiJdfQ==