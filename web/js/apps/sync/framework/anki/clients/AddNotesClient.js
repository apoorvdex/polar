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
class AddNotesClient {
    execute(notes) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                action: "addNotes",
                version: 6,
                params: {
                    notes
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
exports.AddNotesClient = AddNotesClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkTm90ZXNDbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBZGROb3Rlc0NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUFxRDtBQUNyRCxpREFBbUM7QUFFbkMsTUFBYSxjQUFjO0lBRVYsT0FBTyxDQUFDLEtBQWE7O1lBRTlCLE1BQU0sSUFBSSxHQUFHO2dCQUNULE1BQU0sRUFBRSxVQUFVO2dCQUNsQixPQUFPLEVBQUUsQ0FBQztnQkFDVixNQUFNLEVBQUU7b0JBQ0osS0FBSztpQkFDUjthQUNKLENBQUM7WUFFRixNQUFNLElBQUksR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUU1RCxPQUFrQixNQUFNLG1DQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV6RCxDQUFDO0tBQUE7SUFLTSxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQWdCO1FBQ3JDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFtQixDQUFDO1FBQ3RELE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDeEYsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ3pCLENBQUM7Q0FFSjtBQTNCRCx3Q0EyQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Fua2lDb25uZWN0RmV0Y2h9IGZyb20gJy4uL0Fua2lDb25uZWN0RmV0Y2gnO1xuaW1wb3J0ICogYXMgVHlwZU1vcSBmcm9tIFwidHlwZW1vcVwiO1xuXG5leHBvcnQgY2xhc3MgQWRkTm90ZXNDbGllbnQgaW1wbGVtZW50cyBJQWRkTm90ZXNDbGllbnQge1xuXG4gICAgcHVibGljIGFzeW5jIGV4ZWN1dGUobm90ZXM6IE5vdGVbXSk6IFByb21pc2U8bnVtYmVyW10+IHtcblxuICAgICAgICBjb25zdCBib2R5ID0ge1xuICAgICAgICAgICAgYWN0aW9uOiBcImFkZE5vdGVzXCIsXG4gICAgICAgICAgICB2ZXJzaW9uOiA2LFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgbm90ZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBpbml0ID0geyBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSkgfTtcblxuICAgICAgICByZXR1cm4gPG51bWJlcltdPiBhd2FpdCBBbmtpQ29ubmVjdEZldGNoLmZldGNoKGluaXQpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbW9jayB0aGF0IHJldHVybnMgdGhlIGdpdmVuIHJlc3VsdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZU1vY2socmVzdWx0OiBudW1iZXJbXSkge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBUeXBlTW9xLk1vY2sub2ZUeXBlPElBZGROb3Rlc0NsaWVudD4oKTtcbiAgICAgICAgY2xpZW50LnNldHVwKHggPT4geC5leGVjdXRlKFR5cGVNb3EuSXQuaXNBbnkoKSkpLnJldHVybnMoKCkgPT4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCkpO1xuICAgICAgICByZXR1cm4gY2xpZW50Lm9iamVjdDtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb3RlIHtcblxuICAgIHJlYWRvbmx5IGRlY2tOYW1lOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgbW9kZWxOYW1lOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgZmllbGRzOiB7W25hbWU6IHN0cmluZ106IHN0cmluZ307XG4gICAgcmVhZG9ubHkgdGFnczogc3RyaW5nW107XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQWRkTm90ZXNDbGllbnQge1xuXG4gICAgZXhlY3V0ZShub3RlczogTm90ZVtdKTogUHJvbWlzZTxudW1iZXJbXT47XG5cbn1cbiJdfQ==