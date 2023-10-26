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
class AddNoteClient {
    execute(note) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                action: "addNote",
                version: 6,
                params: {
                    note
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
exports.AddNoteClient = AddNoteClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkTm90ZUNsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFkZE5vdGVDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwREFBcUQ7QUFDckQsaURBQW1DO0FBcURuQyxNQUFhLGFBQWE7SUFFVCxPQUFPLENBQUMsSUFBb0I7O1lBRXJDLE1BQU0sSUFBSSxHQUFHO2dCQUNULE1BQU0sRUFBRSxTQUFTO2dCQUNqQixPQUFPLEVBQUUsQ0FBQztnQkFDVixNQUFNLEVBQUU7b0JBQ0osSUFBSTtpQkFDUDthQUNKLENBQUM7WUFFRixNQUFNLElBQUksR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUU1RCxPQUFnQixNQUFNLG1DQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV2RCxDQUFDO0tBQUE7SUFLTSxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQWM7UUFDbkMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQWtCLENBQUM7UUFDckQsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN4RixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDekIsQ0FBQztDQUVKO0FBM0JELHNDQTJCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QW5raUNvbm5lY3RGZXRjaH0gZnJvbSAnLi4vQW5raUNvbm5lY3RGZXRjaCc7XG5pbXBvcnQgKiBhcyBUeXBlTW9xIGZyb20gXCJ0eXBlbW9xXCI7XG5pbXBvcnQge05vdGVEZXNjcmlwdG9yfSBmcm9tICcuLi9Ob3RlRGVzY3JpcHRvcic7XG5cbi8qKlxuICogYWRkTm90ZVxuICpcbiAqIENyZWF0ZXMgYSBub3RlIHVzaW5nIHRoZSBnaXZlbiBkZWNrIGFuZCBtb2RlbCwgd2l0aCB0aGUgcHJvdmlkZWQgZmllbGQgdmFsdWVzXG4gKiBhbmQgdGFncy4gUmV0dXJucyB0aGUgaWRlbnRpZmllciBvZiB0aGUgY3JlYXRlZCBub3RlIGNyZWF0ZWQgb24gc3VjY2VzcywgYW5kXG4gKiBudWxsIG9uIGZhaWx1cmUuXG4gKlxuICogQW5raUNvbm5lY3QgY2FuIGRvd25sb2FkIGF1ZGlvIGZpbGVzIGFuZCBlbWJlZCB0aGVtIGluIG5ld2x5IGNyZWF0ZWQgbm90ZXMuXG4gKiBUaGUgY29ycmVzcG9uZGluZyBhdWRpbyBub3RlIG1lbWJlciBpcyBvcHRpb25hbCBhbmQgY2FuIGJlIG9taXR0ZWQuIElmIHlvdVxuICogY2hvb3NlIHRvIGluY2x1ZGUgaXQsIHRoZSB1cmwgYW5kIGZpbGVuYW1lIGZpZWxkcyBtdXN0IGJlIGFsc28gZGVmaW5lZC4gVGhlXG4gKiBza2lwSGFzaCBmaWVsZCBjYW4gYmUgb3B0aW9uYWxseSBwcm92aWRlZCB0byBza2lwIHRoZSBpbmNsdXNpb24gb2YgZG93bmxvYWRlZFxuICogZmlsZXMgd2l0aCBhbiBNRDUgaGFzaCB0aGF0IG1hdGNoZXMgdGhlIHByb3ZpZGVkIHZhbHVlLiBUaGlzIGlzIHVzZWZ1bCBmb3JcbiAqIGF2b2lkaW5nIHRoZSBzYXZpbmcgb2YgZXJyb3IgcGFnZXMgYW5kIHN0dWIgZmlsZXMuIFRoZSBmaWVsZHMgbWVtYmVyIGlzIGFcbiAqIGxpc3Qgb2YgZmllbGRzIHRoYXQgc2hvdWxkIHBsYXkgYXVkaW8gd2hlbiB0aGUgY2FyZCBpcyBkaXNwbGF5ZWQgaW4gQW5raS5cbiAqXG4gKiBTYW1wbGUgcmVxdWVzdDpcbiAqXG4gKiB7XG4gKiAgICBcImFjdGlvblwiOiBcImFkZE5vdGVcIixcbiAqICAgIFwidmVyc2lvblwiOiA2LFxuICogICAgXCJwYXJhbXNcIjoge1xuICogICAgICAgIFwibm90ZVwiOiB7XG4gKiAgICAgICAgICAgIFwiZGVja05hbWVcIjogXCJEZWZhdWx0XCIsXG4gKiAgICAgICAgICAgIFwibW9kZWxOYW1lXCI6IFwiQmFzaWNcIixcbiAqICAgICAgICAgICAgXCJmaWVsZHNcIjoge1xuICogICAgICAgICAgICAgICAgXCJGcm9udFwiOiBcImZyb250IGNvbnRlbnRcIixcbiAqICAgICAgICAgICAgICAgIFwiQmFja1wiOiBcImJhY2sgY29udGVudFwiXG4gKiAgICAgICAgICAgIH0sXG4gKiAgICAgICAgICAgIFwidGFnc1wiOiBbXG4gKiAgICAgICAgICAgICAgICBcInlvbWljaGFuXCJcbiAqICAgICAgICAgICAgXSxcbiAqICAgICAgICAgICAgXCJhdWRpb1wiOiB7XG4gKiAgICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vYXNzZXRzLmxhbmd1YWdlcG9kMTAxLmNvbS9kaWN0aW9uYXJ5L2phcGFuZXNlL2F1ZGlvbXAzLnBocD9rYW5qaT3njKsma2FuYT3jga3jgZNcIixcbiAqICAgICAgICAgICAgICAgIFwiZmlsZW5hbWVcIjogXCJ5b21pY2hhbl/jga3jgZNf54yrLm1wM1wiLFxuICogICAgICAgICAgICAgICAgXCJza2lwSGFzaFwiOiBcIjdlMmMyZjk1NGVmNjA1MTM3M2JhOTE2ZjAwMDE2OGRjXCIsXG4gKiAgICAgICAgICAgICAgICBcImZpZWxkc1wiOiBbXG4gKiAgICAgICAgICAgICAgICAgICAgXCJGcm9udFwiXG4gKiAgICAgICAgICAgICAgICBdXG4gKiAgICAgICAgICAgIH1cbiAqICAgICAgICB9XG4gKiAgICB9XG4gKn1cbiAqXG4gKlxuICoge1xuICogICAgXCJyZXN1bHRcIjogMTQ5NjE5ODM5NTcwNyxcbiAqICAgIFwiZXJyb3JcIjogbnVsbFxuICogfVxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIEFkZE5vdGVDbGllbnQgaW1wbGVtZW50cyBJQWRkTm90ZUNsaWVudCB7XG5cbiAgICBwdWJsaWMgYXN5bmMgZXhlY3V0ZShub3RlOiBOb3RlRGVzY3JpcHRvcik6IFByb21pc2U8bnVtYmVyPiB7XG5cbiAgICAgICAgY29uc3QgYm9keSA9IHtcbiAgICAgICAgICAgIGFjdGlvbjogXCJhZGROb3RlXCIsXG4gICAgICAgICAgICB2ZXJzaW9uOiA2LFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgbm90ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGluaXQgPSB7IG1ldGhvZDogJ1BPU1QnLCBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSB9O1xuXG4gICAgICAgIHJldHVybiA8bnVtYmVyPiBhd2FpdCBBbmtpQ29ubmVjdEZldGNoLmZldGNoKGluaXQpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbW9jayB0aGF0IHJldHVybnMgdGhlIGdpdmVuIHJlc3VsdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZU1vY2socmVzdWx0OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gVHlwZU1vcS5Nb2NrLm9mVHlwZTxJQWRkTm90ZUNsaWVudD4oKTtcbiAgICAgICAgY2xpZW50LnNldHVwKHggPT4geC5leGVjdXRlKFR5cGVNb3EuSXQuaXNBbnkoKSkpLnJldHVybnMoKCkgPT4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCkpO1xuICAgICAgICByZXR1cm4gY2xpZW50Lm9iamVjdDtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQWRkTm90ZUNsaWVudCB7XG5cbiAgICBleGVjdXRlKG5vdGVzOiBOb3RlRGVzY3JpcHRvcik6IFByb21pc2U8bnVtYmVyPjtcblxufVxuIl19