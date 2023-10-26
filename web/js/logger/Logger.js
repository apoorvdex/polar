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
const Callers_1 = require("./Callers");
const LoggerDelegate_1 = require("./LoggerDelegate");
class Logger {
    static create() {
        const caller = Callers_1.Callers.getCaller();
        if (caller.filename === 'Logger.js') {
            throw new Error("Wrong caller: " + caller.filename);
        }
        return new DelegatedLogger(caller.filename);
    }
}
exports.Logger = Logger;
class DelegatedLogger {
    constructor(caller) {
        this.name = 'delegated';
        this.caller = caller;
    }
    notice(msg, ...args) {
        this.apply(LoggerDelegate_1.LoggerDelegate.get().notice.bind(LoggerDelegate_1.LoggerDelegate.get()), msg, ...args);
    }
    info(msg, ...args) {
        this.apply(LoggerDelegate_1.LoggerDelegate.get().info.bind(LoggerDelegate_1.LoggerDelegate.get()), msg, ...args);
    }
    warn(msg, ...args) {
        this.apply(LoggerDelegate_1.LoggerDelegate.get().warn.bind(LoggerDelegate_1.LoggerDelegate.get()), msg, ...args);
    }
    error(msg, ...args) {
        this.apply(LoggerDelegate_1.LoggerDelegate.get().error.bind(LoggerDelegate_1.LoggerDelegate.get()), msg, ...args);
    }
    verbose(msg, ...args) {
        this.apply(LoggerDelegate_1.LoggerDelegate.get().verbose.bind(LoggerDelegate_1.LoggerDelegate.get()), msg, ...args);
    }
    debug(msg, ...args) {
        this.apply(LoggerDelegate_1.LoggerDelegate.get().debug.bind(LoggerDelegate_1.LoggerDelegate.get()), msg, ...args);
    }
    sync() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield LoggerDelegate_1.LoggerDelegate.get().sync();
        });
    }
    apply(logFunction, msg, ...args) {
        msg = `[${this.caller}] ${msg}`;
        if (args.length > 0) {
            logFunction(msg, ...args);
        }
        else {
            logFunction(msg);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQSx1Q0FBa0M7QUFDbEMscURBQWdEO0FBR2hELE1BQWEsTUFBTTtJQU1SLE1BQU0sQ0FBQyxNQUFNO1FBQ2hCLE1BQU0sTUFBTSxHQUFHLGlCQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkMsSUFBSSxNQUFNLENBQUMsUUFBUSxLQUFLLFdBQVcsRUFBRTtZQUNqQyxNQUFNLElBQUksS0FBSyxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN2RDtRQUVELE9BQU8sSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Q0FFSjtBQWZELHdCQWVDO0FBTUQsTUFBTSxlQUFlO0lBU2pCLFlBQW1CLE1BQWM7UUFGakIsU0FBSSxHQUFXLFdBQVcsQ0FBQztRQUd2QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBTU0sTUFBTSxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQywrQkFBYyxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsK0JBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFFTSxJQUFJLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLCtCQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQywrQkFBYyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUVNLElBQUksQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsK0JBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLCtCQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRU0sS0FBSyxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQywrQkFBYyxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsK0JBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFFTSxPQUFPLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLCtCQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQywrQkFBYyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDdEYsQ0FBQztJQUVNLEtBQUssQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsK0JBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLCtCQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRVksSUFBSTs7WUFDYixPQUFPLE1BQU0sK0JBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM3QyxDQUFDO0tBQUE7SUFNTyxLQUFLLENBQUMsV0FBd0IsRUFBRSxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBSS9ELEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7UUFFaEMsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNqQixXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDN0I7YUFBTTtZQUdILFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNwQjtJQUVMLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNpbXBsZSBsb2dnZXIgdGhhdCBtZWV0cyB0aGUgcmVxdWlyZW1lbnRzIHdlIGhhdmUgZm9yIFBvbGFyLlxuXG5pbXBvcnQge0NhbGxlcnN9IGZyb20gJy4vQ2FsbGVycyc7XG5pbXBvcnQge0xvZ2dlckRlbGVnYXRlfSBmcm9tICcuL0xvZ2dlckRlbGVnYXRlJztcbmltcG9ydCB7SUxvZ2dlcn0gZnJvbSAnLi9JTG9nZ2VyJztcblxuZXhwb3J0IGNsYXNzIExvZ2dlciB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgbG9nZ2VyLCBkZWxlZ2F0aW5nIHRvIHRoZSBhY3R1YWwgaW1wbGVtZW50YXRpb24gd2UgYXJlXG4gICAgICogdXNpbmcuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGUoKSB7XG4gICAgICAgIGNvbnN0IGNhbGxlciA9IENhbGxlcnMuZ2V0Q2FsbGVyKCk7XG4gICAgICAgIGlmIChjYWxsZXIuZmlsZW5hbWUgPT09ICdMb2dnZXIuanMnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJXcm9uZyBjYWxsZXI6IFwiICsgY2FsbGVyLmZpbGVuYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgRGVsZWdhdGVkTG9nZ2VyKGNhbGxlci5maWxlbmFtZSk7XG4gICAgfVxuXG59XG5cbi8qKlxuICogQWxsb3dzIHVzIHRvIHN3YXAgaW4gZGVsZWdhdGVzIGF0IHJ1bnRpbWUgb24gYW55b25lIHdobyBjYWxscyBjcmVhdGUoKVxuICogcmVnYXJkbGVzcyBvZiByZXF1aXJlKCkgb3JkZXIuXG4gKi9cbmNsYXNzIERlbGVnYXRlZExvZ2dlciBpbXBsZW1lbnRzIElMb2dnZXIge1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNhbGxlciBmb3IgdGhpcyBsb2dnZXIuXG4gICAgICovXG4gICAgcHVibGljIGNhbGxlcjogc3RyaW5nO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWU6IHN0cmluZyA9ICdkZWxlZ2F0ZWQnO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGNhbGxlcjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuY2FsbGVyID0gY2FsbGVyO1xuICAgIH1cblxuICAgIC8vIFRPRE86IHNwZWN0cm9uIGRvZXNuJ3QgcHJvcGVybHkgaGFuZGxlIG9iamVjdHMgcGFzc2VkIGhlcmUgYnV0IEkgZG9uJ3RcbiAgICAvLyB0aGluayB3ZSBzaG91bGQgY29tcHJvbWlzZSBvbiBvdXIgZGVzaWduLiAgV2Ugc2hvdWxkIGZpeCB0aGUgcHJvYmxlbVxuICAgIC8vIHdpdGggc3BlY3Ryb24gaW5zdGVhZCBvZiBoYWNraW5nIGl0IGhlcmUuXG5cbiAgICBwdWJsaWMgbm90aWNlKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICB0aGlzLmFwcGx5KExvZ2dlckRlbGVnYXRlLmdldCgpLm5vdGljZS5iaW5kKExvZ2dlckRlbGVnYXRlLmdldCgpKSwgbXNnLCAuLi5hcmdzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5mbyhtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgdGhpcy5hcHBseShMb2dnZXJEZWxlZ2F0ZS5nZXQoKS5pbmZvLmJpbmQoTG9nZ2VyRGVsZWdhdGUuZ2V0KCkpLCBtc2csIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHB1YmxpYyB3YXJuKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICB0aGlzLmFwcGx5KExvZ2dlckRlbGVnYXRlLmdldCgpLndhcm4uYmluZChMb2dnZXJEZWxlZ2F0ZS5nZXQoKSksIG1zZywgLi4uYXJncyk7XG4gICAgfVxuXG4gICAgcHVibGljIGVycm9yKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICB0aGlzLmFwcGx5KExvZ2dlckRlbGVnYXRlLmdldCgpLmVycm9yLmJpbmQoTG9nZ2VyRGVsZWdhdGUuZ2V0KCkpLCBtc2csIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHB1YmxpYyB2ZXJib3NlKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICB0aGlzLmFwcGx5KExvZ2dlckRlbGVnYXRlLmdldCgpLnZlcmJvc2UuYmluZChMb2dnZXJEZWxlZ2F0ZS5nZXQoKSksIG1zZywgLi4uYXJncyk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlYnVnKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICB0aGlzLmFwcGx5KExvZ2dlckRlbGVnYXRlLmdldCgpLmRlYnVnLmJpbmQoTG9nZ2VyRGVsZWdhdGUuZ2V0KCkpLCBtc2csIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzeW5jKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgTG9nZ2VyRGVsZWdhdGUuZ2V0KCkuc3luYygpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBwcml2YXRlIGFwcGx5KGxvZ0Z1bmN0aW9uOiBMb2dGdW5jdGlvbiwgbXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG5cbiAgICAgICAgLy8gbXNnID0gXCJbXCIgKyB0aGlzLmNhbGxlciArIFwiXSBcIiArIG1zZztcblxuICAgICAgICBtc2cgPSBgWyR7dGhpcy5jYWxsZXJ9XSAke21zZ31gO1xuXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxvZ0Z1bmN0aW9uKG1zZywgLi4uYXJncyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBkb24ndCBwYXNzICdhcmdzJyBhcyBlbGVjdHJvbi1sb2dnZXIgd2lsbCBwcmludCBbXSBpZiB0aGUgYXJnc1xuICAgICAgICAgICAgLy8gaXMgemVybyB3aGljaCBpc24ndCBoZWxwZnVsIGFuZCBpcyBpbiBmYWN0IGNvbmZ1c2luZ1xuICAgICAgICAgICAgbG9nRnVuY3Rpb24obXNnKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cbnR5cGUgTG9nRnVuY3Rpb24gPSAobXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkO1xuIl19