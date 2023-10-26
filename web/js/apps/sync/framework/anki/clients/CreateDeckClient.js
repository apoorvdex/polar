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
class CreateDeckClient {
    execute(deck) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                action: "createDeck",
                version: 6,
                params: {
                    deck
                }
            };
            const init = { method: 'POST', body: JSON.stringify(body) };
            return yield AnkiConnectFetch_1.AnkiConnectFetch.fetch(init);
        });
    }
    static createMock(result) {
        const client = TypeMoq.Mock.ofType();
        client.setup(x => x.execute(TypeMoq.It.isAny())).returns(() => Promise.resolve(result));
        return client.object;
    }
}
exports.CreateDeckClient = CreateDeckClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlRGVja0NsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNyZWF0ZURlY2tDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwREFBcUQ7QUFDckQsaURBQW1DO0FBdUJuQyxNQUFhLGdCQUFnQjtJQUVaLE9BQU8sQ0FBQyxJQUFZOztZQUU3QixNQUFNLElBQUksR0FBRztnQkFDVCxNQUFNLEVBQUUsWUFBWTtnQkFDcEIsT0FBTyxFQUFFLENBQUM7Z0JBQ1YsTUFBTSxFQUFFO29CQUNKLElBQUk7aUJBQ1A7YUFDSixDQUFDO1lBRUYsTUFBTSxJQUFJLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFFNUQsT0FBZ0IsTUFBTSxtQ0FBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdkQsQ0FBQztLQUFBO0lBS00sTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFjO1FBQ25DLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFxQixDQUFDO1FBQ3hELE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDeEYsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ3pCLENBQUM7Q0FFSjtBQTNCRCw0Q0EyQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Fua2lDb25uZWN0RmV0Y2h9IGZyb20gJy4uL0Fua2lDb25uZWN0RmV0Y2gnO1xuaW1wb3J0ICogYXMgVHlwZU1vcSBmcm9tIFwidHlwZW1vcVwiO1xuXG4vKipcbiBDcmVhdGUgYSBuZXcgZW1wdHkgZGVjay4gV2lsbCBub3Qgb3ZlcndyaXRlIGEgZGVjayB0aGF0IGV4aXN0cyB3aXRoIHRoZSBzYW1lXG4gbmFtZS5cblxuIFNhbXBsZSByZXF1ZXN0OlxuXG4ge1xuICAgIFwiYWN0aW9uXCI6IFwiY3JlYXRlRGVja1wiLFxuICAgIFwidmVyc2lvblwiOiA2LFxuICAgIFwicGFyYW1zXCI6IHtcbiAgICBcImRlY2tcIjogXCJKYXBhbmVzZTo6VG9reW9cIlxufVxufVxuIFNhbXBsZSByZXN1bHQ6XG5cbiB7XG4gICAgXCJyZXN1bHRcIjogMTUxOTMyMzc0MjcyMSxcbiAgICBcImVycm9yXCI6IG51bGxcbn1cblxuICovXG5leHBvcnQgY2xhc3MgQ3JlYXRlRGVja0NsaWVudCBpbXBsZW1lbnRzIElDcmVhdGVEZWNrQ2xpZW50IHtcblxuICAgIHB1YmxpYyBhc3luYyBleGVjdXRlKGRlY2s6IHN0cmluZyk6IFByb21pc2U8bnVtYmVyPiB7XG5cbiAgICAgICAgY29uc3QgYm9keSA9IHtcbiAgICAgICAgICAgIGFjdGlvbjogXCJjcmVhdGVEZWNrXCIsXG4gICAgICAgICAgICB2ZXJzaW9uOiA2LFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgZGVja1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGluaXQgPSB7IG1ldGhvZDogJ1BPU1QnLCBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSB9O1xuXG4gICAgICAgIHJldHVybiA8bnVtYmVyPiBhd2FpdCBBbmtpQ29ubmVjdEZldGNoLmZldGNoKGluaXQpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbW9jayB0aGF0IHJldHVybnMgdGhlIGdpdmVuIHJlc3VsdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZU1vY2socmVzdWx0OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gVHlwZU1vcS5Nb2NrLm9mVHlwZTxJQ3JlYXRlRGVja0NsaWVudD4oKTtcbiAgICAgICAgY2xpZW50LnNldHVwKHggPT4geC5leGVjdXRlKFR5cGVNb3EuSXQuaXNBbnkoKSkpLnJldHVybnMoKCkgPT4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCkpO1xuICAgICAgICByZXR1cm4gY2xpZW50Lm9iamVjdDtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ3JlYXRlRGVja0NsaWVudCB7XG5cbiAgICBleGVjdXRlKGRlY2s6IHN0cmluZyk6IFByb21pc2U8bnVtYmVyPjtcblxufVxuXG4iXX0=