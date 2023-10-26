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
class Promises {
    static waitFor(timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve();
                }, timeout);
            });
        });
    }
    static of(val) {
        return new Promise(resolve => {
            resolve(val);
        });
    }
    static withTimeout(timeout, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    callback().then(result => resolve(result))
                        .catch(err => reject(err));
                }, timeout);
            });
        });
    }
    static executeLogged(func) {
        func().catch(err => log.error("Caught error: ", err));
    }
}
exports.Promises = Promises;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvbWlzZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQcm9taXNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBRXhDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLFFBQVE7SUFTVixNQUFNLENBQU8sT0FBTyxDQUFDLE9BQWU7O1lBRXZDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBRXpCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7b0JBQ1osT0FBTyxFQUFFLENBQUM7Z0JBQ2QsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBRWhCLENBQUMsQ0FBQyxDQUFDO1FBRVAsQ0FBQztLQUFBO0lBUU0sTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFRO1FBQ3JCLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQVFNLE1BQU0sQ0FBTyxXQUFXLENBQUksT0FBZSxFQUFFLFFBQTBCOztZQUUxRSxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUVuQyxVQUFVLENBQUMsR0FBRyxFQUFFO29CQUNaLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzt5QkFDL0IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUVoQixDQUFDLENBQUMsQ0FBQztRQUVQLENBQUM7S0FBQTtJQVVNLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBd0I7UUFDaEQsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFBO0lBQ3pELENBQUM7Q0FFSjtBQWhFRCw0QkFnRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vbG9nZ2VyL0xvZ2dlcic7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIFByb21pc2VzIHtcblxuICAgIC8qKlxuICAgICAqIEEgcHJvbWlzZSBiYXNlZCB0aW1lb3V0LiAgVGhpcyBqdXN0IHJldHVybnMgYSBwcm9taXNlIHdoaWNoIHJldHVybnNcbiAgICAgKiBvbmNlIHRoZSB0aW1lb3V0IGhhcyBleHBpcmVkLiBZb3UgY2FuIHRoZW4gY2FsbCAudGhlbigpIG9yIGp1c3QgYXdhaXRcbiAgICAgKiB0aGUgdGltZW91dC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0aW1lb3V0XG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyB3YWl0Rm9yKHRpbWVvdXQ6IG51bWJlcikge1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSwgdGltZW91dCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYSBwcm9taXNlIHRoYXQgcmV0dXJucyBhIGxpdGVyYWwgdmFsdWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgb2YodmFsOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSh2YWwpO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENhbGxzIHRoZSBnaXZlbiBjYWxsYmFjayBhcyBhIHByb21pc2Ugd2hpY2ggd2UgY2FuIGF3YWl0IGJ1dCBydW5zIGl0IHdpdGhcbiAgICAgKiB0aGUgYmFja2dyb3VuZCBldmVudCBsb29wIHZpYSB0aW1lb3V0IHRvIGF2b2lkIGxvY2tpbmcgdXAgdGhlIFVJIHdpdGggbG9uZ2VyXG4gICAgICogcnVubmluZyB0YXNrcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHdpdGhUaW1lb3V0PFQ+KHRpbWVvdXQ6IG51bWJlciwgY2FsbGJhY2s6ICgpID0+IFByb21pc2U8VD4gKSB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKS50aGVuKHJlc3VsdCA9PiByZXNvbHZlKHJlc3VsdCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gcmVqZWN0KGVycikpO1xuICAgICAgICAgICAgfSwgdGltZW91dCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeGVjdXRlIGEgZnVuY3Rpb24gd2hpY2ggaXMgYXN5bmMgYW5kIGxvZyBhbnkgZXJyb3JzIGl0IGdlbmVyYXRlcy5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgaGVscGZ1bCBpZiB3ZSBkb24ndCBjYXJlIGFib3V0IHRoZSByZXN1bHQgYnV0IGRvIHdhbnQgdG8ga25vd1xuICAgICAqIGlmIGl0IGhhcyBmYWlsZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZnVuY1xuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZXhlY3V0ZUxvZ2dlZChmdW5jOiAoKSA9PiBQcm9taXNlPGFueT4pIHtcbiAgICAgICAgZnVuYygpLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJDYXVnaHQgZXJyb3I6IFwiLCBlcnIpKVxuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBsZXRpb248VD4ge1xuXG4gICAgcmVhZG9ubHkgcmVzb2x2ZTogUmVzb2x2ZUZ1bmN0aW9uPFQ+O1xuICAgIHJlYWRvbmx5IHJlamVjdDogUmVqZWN0RnVuY3Rpb247XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNvbHZlRnVuY3Rpb248VD4ge1xuICAgICh2YWx1ZTogVCk6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVqZWN0RnVuY3Rpb24ge1xuICAgIChlcnJvcjogRXJyb3IpOiB2b2lkO1xufVxuIl19