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
const AnkiConnectFetch_1 = require("../AnkiConnectFetch");
const TypeMoq = __importStar(require("typemoq"));
class StoreMediaFileClient {
    execute(filename, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                action: "storeMediaFile",
                version: 6,
                params: {
                    filename, data
                }
            };
            const init = { method: 'POST', body: JSON.stringify(body) };
            yield AnkiConnectFetch_1.AnkiConnectFetch.fetch(init);
        });
    }
    static createMock() {
        const client = TypeMoq.Mock.ofType();
        client.setup(x => x.execute(TypeMoq.It.isAny(), TypeMoq.It.isAny())).returns(() => Promise.resolve());
        return client.object;
    }
}
exports.StoreMediaFileClient = StoreMediaFileClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RvcmVNZWRpYUZpbGVDbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTdG9yZU1lZGlhRmlsZUNsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUFxRDtBQUNyRCxpREFBbUM7QUErQm5DLE1BQWEsb0JBQW9CO0lBRWhCLE9BQU8sQ0FBQyxRQUFnQixFQUFFLElBQVk7O1lBRS9DLE1BQU0sSUFBSSxHQUFHO2dCQUNULE1BQU0sRUFBRSxnQkFBZ0I7Z0JBQ3hCLE9BQU8sRUFBRSxDQUFDO2dCQUNWLE1BQU0sRUFBRTtvQkFDSixRQUFRLEVBQUUsSUFBSTtpQkFDakI7YUFDSixDQUFDO1lBRUYsTUFBTSxJQUFJLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFFNUQsTUFBTSxtQ0FBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdkMsQ0FBQztLQUFBO0lBS00sTUFBTSxDQUFDLFVBQVU7UUFDcEIsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQXlCLENBQUM7UUFDNUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDdEcsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ3pCLENBQUM7Q0FFSjtBQTNCRCxvREEyQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Fua2lDb25uZWN0RmV0Y2h9IGZyb20gJy4uL0Fua2lDb25uZWN0RmV0Y2gnO1xuaW1wb3J0ICogYXMgVHlwZU1vcSBmcm9tIFwidHlwZW1vcVwiO1xuaW1wb3J0IHtOb3RlRGVzY3JpcHRvcn0gZnJvbSAnLi4vTm90ZURlc2NyaXB0b3InO1xuXG4vKipcbiAqXG4gKiBzdG9yZU1lZGlhRmlsZVxuICpcbiAqIFN0b3JlcyBhIGZpbGUgd2l0aCB0aGUgc3BlY2lmaWVkIGJhc2U2NC1lbmNvZGVkIGNvbnRlbnRzIGluc2lkZSB0aGUgbWVkaWEgZm9sZGVyLiBUbyBwcmV2ZW50IEFua2kgZnJvbSByZW1vdmluZyBmaWxlcyBub3QgdXNlZCBieSBhbnkgY2FyZHMgKGUuZy4gZm9yIGNvbmZpZ3VyYXRpb24gZmlsZXMpLCBwcmVmaXggdGhlIGZpbGVuYW1lIHdpdGggYW4gdW5kZXJzY29yZS4gVGhlc2UgZmlsZXMgYXJlIHN0aWxsIHN5bmNocm9uaXplZCB0byBBbmtpV2ViLlxuICpcbiAqIFNhbXBsZSByZXF1ZXN0OlxuICpcbiAqIHtcbiAqICAgIFwiYWN0aW9uXCI6IFwic3RvcmVNZWRpYUZpbGVcIixcbiAqICAgIFwidmVyc2lvblwiOiA2LFxuICogICAgXCJwYXJhbXNcIjoge1xuICogICAgICAgIFwiZmlsZW5hbWVcIjogXCJfaGVsbG8udHh0XCIsXG4gKiAgICAgICAgXCJkYXRhXCI6IFwiU0dWc2JHOHNJSGR2Y214a0lRPT1cIlxuICogICAgfVxuICogfVxuICogU2FtcGxlIHJlc3VsdDpcbiAqXG4gKiB7XG4gKiAgICBcInJlc3VsdFwiOiBudWxsLFxuICogICAgXCJlcnJvclwiOiBudWxsXG4gKn1cbiAqIENvbnRlbnQgb2YgX2hlbGxvLnR4dDpcbiAqXG4gKiBIZWxsbyB3b3JsZCFcbiAqXG4gKiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBTdG9yZU1lZGlhRmlsZUNsaWVudCBpbXBsZW1lbnRzIElTdG9yZU1lZGlhRmlsZUNsaWVudCB7XG5cbiAgICBwdWJsaWMgYXN5bmMgZXhlY3V0ZShmaWxlbmFtZTogc3RyaW5nLCBkYXRhOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgICAgICBjb25zdCBib2R5ID0ge1xuICAgICAgICAgICAgYWN0aW9uOiBcInN0b3JlTWVkaWFGaWxlXCIsXG4gICAgICAgICAgICB2ZXJzaW9uOiA2LFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgZmlsZW5hbWUsIGRhdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBpbml0ID0geyBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSkgfTtcblxuICAgICAgICBhd2FpdCBBbmtpQ29ubmVjdEZldGNoLmZldGNoKGluaXQpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbW9jayB0aGF0IHJldHVybnMgdGhlIGdpdmVuIHJlc3VsdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZU1vY2soKSB7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IFR5cGVNb3EuTW9jay5vZlR5cGU8SVN0b3JlTWVkaWFGaWxlQ2xpZW50PigpO1xuICAgICAgICBjbGllbnQuc2V0dXAoeCA9PiB4LmV4ZWN1dGUoVHlwZU1vcS5JdC5pc0FueSgpLCBUeXBlTW9xLkl0LmlzQW55KCkpKS5yZXR1cm5zKCgpID0+IFByb21pc2UucmVzb2x2ZSgpKTtcbiAgICAgICAgcmV0dXJuIGNsaWVudC5vYmplY3Q7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0b3JlTWVkaWFGaWxlQ2xpZW50IHtcblxuICAgIGV4ZWN1dGUoZmlsZW5hbWU6IHN0cmluZywgZGF0YTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1lZGlhRmlsZSB7XG5cbiAgICByZWFkb25seSBmaWxlbmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQmFzZTY0IGJpbmFyeSBkYXRhIGZvciB0aGUgbWVkaWEuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGF0YTogc3RyaW5nO1xuXG59XG4iXX0=