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
class ConsoleLogger {
    constructor() {
        this.name = 'console-logger';
    }
    notice(msg, ...args) {
        console.log(msg, ...args);
    }
    info(msg, ...args) {
        console.log(msg, ...args);
    }
    warn(msg, ...args) {
        console.warn(msg, ...args);
    }
    error(msg, ...args) {
        console.error(msg, ...args);
    }
    verbose(msg, ...args) {
        console.log(msg, ...args);
    }
    debug(msg, ...args) {
        console.log(msg, ...args);
    }
    sync() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.ConsoleLogger = ConsoleLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uc29sZUxvZ2dlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvbnNvbGVMb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUtBLE1BQWEsYUFBYTtJQUExQjtRQUVvQixTQUFJLEdBQVcsZ0JBQWdCLENBQUM7SUE4QnBELENBQUM7SUE1QlUsTUFBTSxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRU0sSUFBSSxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRU0sSUFBSSxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDbkMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRU0sS0FBSyxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDcEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU0sT0FBTyxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRU0sS0FBSyxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRVksSUFBSTs7UUFFakIsQ0FBQztLQUFBO0NBRUo7QUFoQ0Qsc0NBZ0NDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTaW1wbGUgbG9nZ2VyIHRoYXQganVzdCB3cml0ZXMgdG8gdGhlIGNvbnNvbGUuXG4gKi9cbmltcG9ydCB7SUxvZ2dlcn0gZnJvbSAnLi9JTG9nZ2VyJztcblxuZXhwb3J0IGNsYXNzIENvbnNvbGVMb2dnZXIgaW1wbGVtZW50cyBJTG9nZ2VyIHtcblxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lOiBzdHJpbmcgPSAnY29uc29sZS1sb2dnZXInO1xuXG4gICAgcHVibGljIG5vdGljZShtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgY29uc29sZS5sb2cobXNnLCAuLi5hcmdzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5mbyhtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgY29uc29sZS5sb2cobXNnLCAuLi5hcmdzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgd2Fybihtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgY29uc29sZS53YXJuKG1zZywgLi4uYXJncyk7XG4gICAgfVxuXG4gICAgcHVibGljIGVycm9yKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1zZywgLi4uYXJncyk7XG4gICAgfVxuXG4gICAgcHVibGljIHZlcmJvc2UobXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG1zZywgLi4uYXJncyk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlYnVnKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBjb25zb2xlLmxvZyhtc2csIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzeW5jKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICAvLyBub29wXG4gICAgfVxuXG59XG4iXX0=