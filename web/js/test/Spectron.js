"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = __importDefault(require("electron"));
const SpectronOutputMonitorService_1 = require("./SpectronOutputMonitorService");
const Logger_1 = require("../logger/Logger");
const { Application } = require('spectron');
const log = Logger_1.Logger.create();
const TIMEOUT = 30000;
const ELECTRON_PATH = electron_1.default;
class Spectron {
    static setup(dir, ...args) {
        log.info("Configuring spectron...");
        let spectronOutputMonitorService;
        beforeEach(function () {
            return __awaiter(this, void 0, void 0, function* () {
                log.info("Starting spectron with dir: " + dir);
                this.app = new Application({
                    path: ELECTRON_PATH,
                    args: [dir, ...args],
                    startTimeout: TIMEOUT,
                    waitTimeout: TIMEOUT
                });
                log.info("Starting app...");
                const app = yield this.app.start();
                log.info("Starting app...done");
                spectronOutputMonitorService = new SpectronOutputMonitorService_1.SpectronOutputMonitorService(app);
                spectronOutputMonitorService.start();
                return app;
            });
        });
        afterEach(function () {
            return __awaiter(this, void 0, void 0, function* () {
                log.info("Going to shutdown now... ");
                if (spectronOutputMonitorService) {
                    spectronOutputMonitorService.stop();
                    spectronOutputMonitorService._doLogForwarding();
                }
                if (this.app && this.app.isRunning()) {
                    log.info("Telling app to stop");
                    return this.app.stop();
                }
                else {
                    log.info("App already stopped.");
                }
            });
        });
    }
    static run(callback) {
    }
}
exports.Spectron = Spectron;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BlY3Ryb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTcGVjdHJvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0Esd0RBQW9DO0FBQ3BDLGlGQUE0RTtBQUU1RSw2Q0FBd0M7QUFHeEMsTUFBTSxFQUFDLFdBQVcsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUUxQyxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDO0FBZ0J0QixNQUFNLGFBQWEsR0FBUSxrQkFBWSxDQUFDO0FBUXhDLE1BQWEsUUFBUTtJQUtWLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUUzQyxHQUFHLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFPcEMsSUFBSSw0QkFBMEQsQ0FBQztRQUUvRCxVQUFVLENBQUM7O2dCQUVQLEdBQUcsQ0FBQyxJQUFJLENBQUMsOEJBQThCLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBRS9DLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxXQUFXLENBQUM7b0JBS3ZCLElBQUksRUFBRSxhQUFhO29CQU1uQixJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7b0JBRXBCLFlBQVksRUFBRSxPQUFPO29CQUNyQixXQUFXLEVBQUUsT0FBTztpQkFFdkIsQ0FBQyxDQUFDO2dCQUVILEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDNUIsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNuQyxHQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7Z0JBRWhDLDRCQUE0QixHQUFHLElBQUksMkRBQTRCLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3JFLDRCQUE0QixDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUVyQyxPQUFPLEdBQUcsQ0FBQztZQUVmLENBQUM7U0FBQSxDQUFDLENBQUM7UUFFSCxTQUFTLENBQUM7O2dCQUVOLEdBQUcsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQztnQkFFdEMsSUFBSSw0QkFBNEIsRUFBRTtvQkFDOUIsNEJBQTRCLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3BDLDRCQUE0QixDQUFDLGdCQUFnQixFQUFFLENBQUM7aUJBQ25EO2dCQUVELElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxFQUFFO29CQUNsQyxHQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7b0JBQ2hDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDMUI7cUJBQU07b0JBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2lCQUNwQztZQUVMLENBQUM7U0FBQSxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRU0sTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFxQjtJQUd2QyxDQUFDO0NBRUo7QUExRUQsNEJBMEVDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgZWxlY3Ryb25QYXRoIGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCB7U3BlY3Ryb25PdXRwdXRNb25pdG9yU2VydmljZX0gZnJvbSAnLi9TcGVjdHJvbk91dHB1dE1vbml0b3JTZXJ2aWNlJztcbmltcG9ydCB7VGVzdFJlc3VsdFJlYWRlcn0gZnJvbSAnLi9yZXN1bHRzL1Rlc3RSZXN1bHRSZWFkZXInO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHByb2Nlc3MgZnJvbSAncHJvY2Vzcyc7XG5cbmNvbnN0IHtBcHBsaWNhdGlvbn0gPSByZXF1aXJlKCdzcGVjdHJvbicpO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmNvbnN0IFRJTUVPVVQgPSAzMDAwMDtcblxuLy8gU3RyaW5nIHBhdGggdG8gdGhlIEVsZWN0cm9uIGFwcGxpY2F0aW9uIGV4ZWN1dGFibGUgdG8gbGF1bmNoLiBOb3RlOiBJZiB5b3Vcbi8vIHdhbnQgdG8gaW52b2tlIGVsZWN0cm9uIGRpcmVjdGx5IHdpdGggeW91ciBhcHAncyBtYWluIHNjcmlwdCB0aGVuIHlvdSBzaG91bGRcbi8vIHNwZWNpZnkgcGF0aCBhcyBlbGVjdHJvbiB2aWEgZWxlY3Ryb24tcHJlYnVpbHQgYW5kIHNwZWNpZnkgeW91ciBhcHAncyBtYWluXG4vLyBzY3JpcHQgcGF0aCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgaW4gdGhlIGFyZ3MgYXJyYXkuXG5cbi8vIFRPRE86IHJpZ2h0IG5vdyB0aGlzIGlzIGEgcmVhbGx5IGJhZCBpZGVhIHRvIGVuYWJsZS4gIEZvciBzdGFydGVycyBpdCBkb2Vzbid0XG4vLyBhY3R1YWxseSB3b3JrIHRoZSB3YXkgSSB3b3VsZCBleHBlY3QgYW5kIHdlJ3JlIGdvaW5nIHRvIG5lZWQgYSBiZXR0ZXIgd2F5XG4vLyB0byBkbyB0ZXN0aW5nIG9mIHByZS1pbnN0YWxsZWQgYXBwcy4gIEFkZGl0aW9uYWxseSwgdGhlIGxvZyBtZXNzYWdlIGlzIGhpZGRlblxuLy8gc28gdGhlcmUncyBubyB3YXkgdG8ga25vdyB3aGF0IGlzIGFjdHVhbGx5IGdvaW5nIG9uIHVuZGVyIHRoZSBzdXJmYWNlLlxuLy9cbi8vIGNvbnN0IEVMRUNUUk9OX1BBVEg6IGFueSA9XG4vLyAgICAgT3B0aW9uYWwub2YoPGFueT4gcHJvY2Vzcy5lbnYuUE9MQVJfRUxFQ1RST05fUEFUSClcbi8vICAgICAuZ2V0T3JFbHNlKGVsZWN0cm9uUGF0aCk7XG5cbmNvbnN0IEVMRUNUUk9OX1BBVEg6IGFueSA9IGVsZWN0cm9uUGF0aDtcblxuLyoqXG4gKiBCYXNpYyBzcGVjdHJvbiBzdGFydHVwIGFuZCB0ZWFyZG93biBmb3Igb3VyIHVzYWdlLiAgV2UgYWxzbyBzdGFydCBhblxuICogYXBwIHRoYXQgbW9uaXRvcnMgdGhlIG1haW4gcHJvY2VzcyBsb2dzIGFuZCBmb3J3YXJkcyB0aGVtIHRvIHRoZSBjb25zb2xlLlxuICpcbiAqIFRoaXMgYWxzbyBjdXRzIGRvd24gb24gYWxsIHRoZSBib2lsZXJwbGF0ZSB0aGF0IHdlIG5lZWQgZnJvbSBTcGVjdHJvbi5cbiAqL1xuZXhwb3J0IGNsYXNzIFNwZWN0cm9uIHtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkaXJlY3RvcnkgdG8gcnVuIHRoZSBzcGVjcyBmcm9tLiBVc3VhbGx5IF9fZGlybmFtZSBpbiB5b3VyIHNwZWMuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBzZXR1cChkaXI6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcblxuICAgICAgICBsb2cuaW5mbyhcIkNvbmZpZ3VyaW5nIHNwZWN0cm9uLi4uXCIpO1xuXG4gICAgICAgIC8vIFRPRE86IHNpbmNlIHNwZWN0cm9uIHJlcXVpcmVzIGEgd2luZG93IHRvIG9wZXJhdGUsIHdlIHNob3VsZCBBTFdBWVNcbiAgICAgICAgLy8gY3JlYXRlIGEgd2luZG93IGFuZCB0aGVuIHJldHVybiBpdCB0byB0aGUgdXNlciBzbyB0aGF0IHRoZXkgY2FuXG4gICAgICAgIC8vIHdvcmsgd2l0aCBpdCBkaXJlY3RseS4gIFdlIHNob3VsZCBkbyB0aGlzIHdpdGhpbiBzZXR1cCgpIGFuZCByZXF1aXJlXG4gICAgICAgIC8vIGEgVVJMIHRvIGxvYWQgc28gdGhhdCB0ZXN0aW5nIGFsd2F5cyBmdW5jdGlvbnMgcHJvcGVybHkuXG5cbiAgICAgICAgbGV0IHNwZWN0cm9uT3V0cHV0TW9uaXRvclNlcnZpY2U6IFNwZWN0cm9uT3V0cHV0TW9uaXRvclNlcnZpY2U7XG5cbiAgICAgICAgYmVmb3JlRWFjaChhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgbG9nLmluZm8oXCJTdGFydGluZyBzcGVjdHJvbiB3aXRoIGRpcjogXCIgKyBkaXIpO1xuXG4gICAgICAgICAgICB0aGlzLmFwcCA9IG5ldyBBcHBsaWNhdGlvbih7XG5cbiAgICAgICAgICAgICAgICAvLyBZb3VyIGVsZWN0cm9uIHBhdGggY2FuIGJlIGFueSBiaW5hcnlcbiAgICAgICAgICAgICAgICAvLyBpLmUgZm9yIE9TWCBhbiBleGFtcGxlIHBhdGggY291bGQgYmUgJy9BcHBsaWNhdGlvbnMvTXlBcHAuYXBwL0NvbnRlbnRzL01hY09TL015QXBwJ1xuICAgICAgICAgICAgICAgIC8vIEJ1dCBmb3IgdGhlIHNha2Ugb2YgdGhlIGV4YW1wbGUgd2UgZmV0Y2ggaXQgZnJvbSBvdXIgbm9kZV9tb2R1bGVzLlxuICAgICAgICAgICAgICAgIHBhdGg6IEVMRUNUUk9OX1BBVEgsXG5cbiAgICAgICAgICAgICAgICAvLyBBc3N1bWluZyB5b3UgaGF2ZSB0aGUgZm9sbG93aW5nIGRpcmVjdG9yeSBzdHJ1Y3R1cmVcblxuICAgICAgICAgICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgbGluZSB0ZWxscyBzcGVjdHJvbiB0byBsb29rIGFuZCB1c2UgdGhlIG1haW4uanMgZmlsZVxuICAgICAgICAgICAgICAgIC8vIGFyZ3M6IFtwYXRoLmpvaW4oZGlyLCAnLi4vLi4vLi4nKV1cbiAgICAgICAgICAgICAgICBhcmdzOiBbZGlyLCAuLi5hcmdzXSxcblxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZW91dDogVElNRU9VVCxcbiAgICAgICAgICAgICAgICB3YWl0VGltZW91dDogVElNRU9VVFxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbG9nLmluZm8oXCJTdGFydGluZyBhcHAuLi5cIik7XG4gICAgICAgICAgICBjb25zdCBhcHAgPSBhd2FpdCB0aGlzLmFwcC5zdGFydCgpO1xuICAgICAgICAgICAgbG9nLmluZm8oXCJTdGFydGluZyBhcHAuLi5kb25lXCIpO1xuXG4gICAgICAgICAgICBzcGVjdHJvbk91dHB1dE1vbml0b3JTZXJ2aWNlID0gbmV3IFNwZWN0cm9uT3V0cHV0TW9uaXRvclNlcnZpY2UoYXBwKTtcbiAgICAgICAgICAgIHNwZWN0cm9uT3V0cHV0TW9uaXRvclNlcnZpY2Uuc3RhcnQoKTtcblxuICAgICAgICAgICAgcmV0dXJuIGFwcDtcblxuICAgICAgICB9KTtcblxuICAgICAgICBhZnRlckVhY2goYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIGxvZy5pbmZvKFwiR29pbmcgdG8gc2h1dGRvd24gbm93Li4uIFwiKTtcblxuICAgICAgICAgICAgaWYgKHNwZWN0cm9uT3V0cHV0TW9uaXRvclNlcnZpY2UpIHtcbiAgICAgICAgICAgICAgICBzcGVjdHJvbk91dHB1dE1vbml0b3JTZXJ2aWNlLnN0b3AoKTtcbiAgICAgICAgICAgICAgICBzcGVjdHJvbk91dHB1dE1vbml0b3JTZXJ2aWNlLl9kb0xvZ0ZvcndhcmRpbmcoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuYXBwICYmIHRoaXMuYXBwLmlzUnVubmluZygpKSB7XG4gICAgICAgICAgICAgICAgbG9nLmluZm8oXCJUZWxsaW5nIGFwcCB0byBzdG9wXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcC5zdG9wKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvZy5pbmZvKFwiQXBwIGFscmVhZHkgc3RvcHBlZC5cIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHJ1bihjYWxsYmFjazogUnVuQ2FsbGJhY2spIHtcblxuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUnVuQ2FsbGJhY2sge1xuXG4gICAgKHRlc3RSZXN1bHRSZWFkZXI6IFRlc3RSZXN1bHRSZWFkZXIpOiB2b2lkO1xuXG59XG5cblxuLyoqXG4gKiBUaGUgU3BlY3Ryb24gQXBwbGljYXRpb24gb2JqZWN0IHdpdGggb3VyIGN1c3RvbSB0eXBlIGFubm90YXRpb25zLiAgV2UgaGFkXG4gKiB0byBhZGQgdGhpcyBhcyBhcm91bmQgZm9yIFR5cGVzY3JpcHQgY2F1c2luZyBTcGVjdHJvbiBhbmQganF1ZXJ5IHRvIGNvbGxpZGUuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVEFwcGxpY2F0aW9uIHtcblxuICAgIGNsaWVudDogVEJyb3dzZXI7XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBUQnJvd3NlciB7XG5cbiAgICBnZXRXaW5kb3dDb3VudCgpOiBQcm9taXNlPG51bWJlcj47XG5cbiAgICB3aW5kb3dIYW5kbGUoKTogc3RyaW5nO1xuXG4gICAgd2luZG93SGFuZGxlcygpOiBXaW5kb3dIYW5kbGVbXTtcblxuICAgIHdpbmRvdyh3aW5kb3dIYW5kbGU6IFdpbmRvd0hhbmRsZSk6IHZvaWQ7XG5cbiAgICBnZXRUaXRsZSgpOiBzdHJpbmc7XG5cbiAgICBleGVjdXRlQXN5bmM8VD4oY2FsbGJhY2s6IEV4ZWN1dGVBc3luY0Z1bmN0aW9uPFQ+KTogUHJvbWlzZTxUPjtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV4ZWN1dGVBc3luY0Z1bmN0aW9uPFQ+IHtcbiAgICAoZG9uZTogKHZhbDogVCkgPT4gdm9pZCk6IHZvaWQ7XG59XG5cbnR5cGUgV2luZG93SGFuZGxlID0gc3RyaW5nO1xuXG4iXX0=