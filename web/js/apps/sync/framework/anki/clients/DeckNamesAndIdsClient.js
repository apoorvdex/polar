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
class DeckNamesAndIdsClient {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                action: "deckNamesAndIds",
                version: 6
            };
            const init = { method: 'POST', body: JSON.stringify(body) };
            return yield AnkiConnectFetch_1.AnkiConnectFetch.fetch(init);
        });
    }
    static createMock(result) {
        const client = TypeMoq.Mock.ofType();
        client.setup(x => x.execute()).returns(() => Promise.resolve(result));
        return client.object;
    }
}
exports.DeckNamesAndIdsClient = DeckNamesAndIdsClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVja05hbWVzQW5kSWRzQ2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRGVja05hbWVzQW5kSWRzQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMERBQXFEO0FBQ3JELGlEQUFtQztBQUVuQyxNQUFhLHFCQUFxQjtJQUVqQixPQUFPOztZQUVoQixNQUFNLElBQUksR0FBRztnQkFDVCxNQUFNLEVBQUUsaUJBQWlCO2dCQUN6QixPQUFPLEVBQUUsQ0FBQzthQUNiLENBQUM7WUFFRixNQUFNLElBQUksR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUU1RCxPQUF5QixNQUFNLG1DQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVoRSxDQUFDO0tBQUE7SUFLTSxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQXVCO1FBQzVDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUEwQixDQUFDO1FBQzdELE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUN6QixDQUFDO0NBRUo7QUF4QkQsc0RBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBbmtpQ29ubmVjdEZldGNofSBmcm9tICcuLi9BbmtpQ29ubmVjdEZldGNoJztcbmltcG9ydCAqIGFzIFR5cGVNb3EgZnJvbSBcInR5cGVtb3FcIjtcblxuZXhwb3J0IGNsYXNzIERlY2tOYW1lc0FuZElkc0NsaWVudCBpbXBsZW1lbnRzIElEZWNrTmFtZXNBbmRJZHNDbGllbnQge1xuXG4gICAgcHVibGljIGFzeW5jIGV4ZWN1dGUoKTogUHJvbWlzZTxEZWNrTmFtZXNBbmRJZHM+IHtcblxuICAgICAgICBjb25zdCBib2R5ID0ge1xuICAgICAgICAgICAgYWN0aW9uOiBcImRlY2tOYW1lc0FuZElkc1wiLFxuICAgICAgICAgICAgdmVyc2lvbjogNlxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGluaXQgPSB7IG1ldGhvZDogJ1BPU1QnLCBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSB9O1xuXG4gICAgICAgIHJldHVybiA8RGVja05hbWVzQW5kSWRzPiBhd2FpdCBBbmtpQ29ubmVjdEZldGNoLmZldGNoKGluaXQpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbW9jayB0aGF0IHJldHVybnMgdGhlIGdpdmVuIHJlc3VsdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZU1vY2socmVzdWx0OiBEZWNrTmFtZXNBbmRJZHMpIHtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gVHlwZU1vcS5Nb2NrLm9mVHlwZTxJRGVja05hbWVzQW5kSWRzQ2xpZW50PigpO1xuICAgICAgICBjbGllbnQuc2V0dXAoeCA9PiB4LmV4ZWN1dGUoKSkucmV0dXJucygoKSA9PiBQcm9taXNlLnJlc29sdmUocmVzdWx0KSk7XG4gICAgICAgIHJldHVybiBjbGllbnQub2JqZWN0O1xuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlY2tOYW1lc0FuZElkcyB7W2RlY2s6IHN0cmluZ106IG51bWJlcn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGVja05hbWVzQW5kSWRzQ2xpZW50IHtcblxuICAgIGV4ZWN1dGUoKTogUHJvbWlzZTxEZWNrTmFtZXNBbmRJZHM+O1xuXG59XG4iXX0=