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
const Logger_1 = require("../../logger/Logger");
const log = Logger_1.Logger.create();
class Services {
    static start(...services) {
        return __awaiter(this, void 0, void 0, function* () {
            let promises = [];
            services.forEach(service => {
                log.info("Starting service: " + service.constructor.name);
                promises.push(service.start());
            });
            yield Promise.all(promises);
        });
    }
    static stop(serviceReferences) {
        Object.entries(serviceReferences).forEach(serviceReference => {
            let name = serviceReference[0];
            let service = serviceReference[1];
            let message = `Stopping service ${name}...`;
            log.info(message);
            service.stop();
            log.info(message + "done");
        });
    }
}
exports.Services = Services;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsZ0RBQTJDO0FBRTNDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLFFBQVE7SUFFVixNQUFNLENBQU8sS0FBSyxDQUFDLEdBQUcsUUFBNEI7O1lBRXJELElBQUksUUFBUSxHQUFtQixFQUFFLENBQUM7WUFFbEMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDdkIsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMxRCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBQyxDQUFDO1lBRUgsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBRS9CLENBQUM7S0FBQTtJQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQXFEO1FBRTdELE1BQU0sQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtZQUV6RCxJQUFJLElBQUksR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVsQyxJQUFJLE9BQU8sR0FBRyxvQkFBb0IsSUFBSSxLQUFLLENBQUM7WUFFNUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUVsQixPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFZixHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQztRQUUvQixDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7Q0FFSjtBQWxDRCw0QkFrQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1N0YXJ0YWJsZVNlcnZpY2UsIFN0b3BwYWJsZVNlcnZpY2V9IGZyb20gJy4vU2VydmljZSc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vLi4vbG9nZ2VyL0xvZ2dlcic7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIFNlcnZpY2VzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgc3RhcnQoLi4uc2VydmljZXM6IFN0YXJ0YWJsZVNlcnZpY2VbXSkge1xuXG4gICAgICAgIGxldCBwcm9taXNlczogUHJvbWlzZTxhbnk+W10gPSBbXTtcblxuICAgICAgICBzZXJ2aWNlcy5mb3JFYWNoKHNlcnZpY2UgPT4ge1xuICAgICAgICAgICAgbG9nLmluZm8oXCJTdGFydGluZyBzZXJ2aWNlOiBcIiArIHNlcnZpY2UuY29uc3RydWN0b3IubmFtZSk7XG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHNlcnZpY2Uuc3RhcnQoKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKVxuXG4gICAgfVxuXG4gICAgc3RhdGljIHN0b3Aoc2VydmljZVJlZmVyZW5jZXM6IHtbbmFtZTogc3RyaW5nXTogU3RvcHBhYmxlU2VydmljZX0pOiB2b2lkIHtcblxuICAgICAgICBPYmplY3QuZW50cmllcyhzZXJ2aWNlUmVmZXJlbmNlcykuZm9yRWFjaChzZXJ2aWNlUmVmZXJlbmNlID0+IHtcblxuICAgICAgICAgICAgbGV0IG5hbWUgPSBzZXJ2aWNlUmVmZXJlbmNlWzBdO1xuICAgICAgICAgICAgbGV0IHNlcnZpY2UgPSBzZXJ2aWNlUmVmZXJlbmNlWzFdO1xuXG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9IGBTdG9wcGluZyBzZXJ2aWNlICR7bmFtZX0uLi5gO1xuXG4gICAgICAgICAgICBsb2cuaW5mbyhtZXNzYWdlKTtcblxuICAgICAgICAgICAgc2VydmljZS5zdG9wKCk7XG5cbiAgICAgICAgICAgIGxvZy5pbmZvKG1lc3NhZ2UgKyBcImRvbmVcIik7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbn1cbiJdfQ==