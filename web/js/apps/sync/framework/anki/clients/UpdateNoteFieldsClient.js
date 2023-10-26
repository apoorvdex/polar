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
class UpdateNoteFieldsClient {
    execute(updateNote) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                action: "updateNoteFields",
                version: 6,
                params: {
                    note: updateNote
                }
            };
            const init = { method: 'POST', body: JSON.stringify(body) };
            yield AnkiConnectFetch_1.AnkiConnectFetch.fetch(init);
        });
    }
    static createMock() {
        const client = TypeMoq.Mock.ofType();
        client.setup(x => x.execute(TypeMoq.It.isAny())).returns(() => Promise.resolve());
        return client.object;
    }
}
exports.UpdateNoteFieldsClient = UpdateNoteFieldsClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXBkYXRlTm90ZUZpZWxkc0NsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlVwZGF0ZU5vdGVGaWVsZHNDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwREFBcUQ7QUFDckQsaURBQW1DO0FBNEJuQyxNQUFhLHNCQUFzQjtJQUVsQixPQUFPLENBQUMsVUFBc0I7O1lBRXZDLE1BQU0sSUFBSSxHQUFHO2dCQUNULE1BQU0sRUFBRSxrQkFBa0I7Z0JBQzFCLE9BQU8sRUFBRSxDQUFDO2dCQUNWLE1BQU0sRUFBRTtvQkFDSixJQUFJLEVBQUUsVUFBVTtpQkFDbkI7YUFDSixDQUFDO1lBRUYsTUFBTSxJQUFJLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFFNUQsTUFBTSxtQ0FBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdkMsQ0FBQztLQUFBO0lBS00sTUFBTSxDQUFDLFVBQVU7UUFDcEIsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQTJCLENBQUM7UUFDOUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ2xGLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUN6QixDQUFDO0NBRUo7QUEzQkQsd0RBMkJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBbmtpQ29ubmVjdEZldGNofSBmcm9tICcuLi9BbmtpQ29ubmVjdEZldGNoJztcbmltcG9ydCAqIGFzIFR5cGVNb3EgZnJvbSBcInR5cGVtb3FcIjtcblxuLyoqXG4gKlxuICogTW9kaWZ5IHRoZSBmaWVsZHMgb2YgYW4gZXhpc3Qgbm90ZS5cbiAqXG4gKiBTYW1wbGUgcmVxdWVzdDpcbiAqXG4gKiB7XG4gKiAgICBcImFjdGlvblwiOiBcInVwZGF0ZU5vdGVGaWVsZHNcIixcbiAqICAgIFwidmVyc2lvblwiOiA2LFxuICogICAgXCJwYXJhbXNcIjoge1xuICogICAgICAgIFwibm90ZVwiOiB7XG4gKiAgICAgICAgICAgIFwiaWRcIjogMTUxNDU0NzU0NzAzMCxcbiAqICAgICAgICAgICAgXCJmaWVsZHNcIjoge1xuICogICAgICAgICAgICAgICAgXCJGcm9udFwiOiBcIm5ldyBmcm9udCBjb250ZW50XCIsXG4gKiAgICAgICAgICAgICAgICBcIkJhY2tcIjogXCJuZXcgYmFjayBjb250ZW50XCJcbiAqICAgICAgICAgICAgfVxuICogICAgICAgIH1cbiAqICAgIH1cbiAqfVxuICogU2FtcGxlIHJlc3VsdDpcbiAqXG4gKiB7XG4gKiAgICBcInJlc3VsdFwiOiBudWxsLFxuICogICAgXCJlcnJvclwiOiBudWxsXG4gKn1cbiAqL1xuZXhwb3J0IGNsYXNzIFVwZGF0ZU5vdGVGaWVsZHNDbGllbnQgaW1wbGVtZW50cyBJVXBkYXRlTm90ZUZpZWxkc0NsaWVudCB7XG5cbiAgICBwdWJsaWMgYXN5bmMgZXhlY3V0ZSh1cGRhdGVOb3RlOiBVcGRhdGVOb3RlKTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICAgICAgY29uc3QgYm9keSA9IHtcbiAgICAgICAgICAgIGFjdGlvbjogXCJ1cGRhdGVOb3RlRmllbGRzXCIsXG4gICAgICAgICAgICB2ZXJzaW9uOiA2LFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgbm90ZTogdXBkYXRlTm90ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGluaXQgPSB7IG1ldGhvZDogJ1BPU1QnLCBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSB9O1xuXG4gICAgICAgIGF3YWl0IEFua2lDb25uZWN0RmV0Y2guZmV0Y2goaW5pdCk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBtb2NrIHRoYXQgcmV0dXJucyB0aGUgZ2l2ZW4gcmVzdWx0LlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlTW9jaygpIHtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gVHlwZU1vcS5Nb2NrLm9mVHlwZTxJVXBkYXRlTm90ZUZpZWxkc0NsaWVudD4oKTtcbiAgICAgICAgY2xpZW50LnNldHVwKHggPT4geC5leGVjdXRlKFR5cGVNb3EuSXQuaXNBbnkoKSkpLnJldHVybnMoKCkgPT4gUHJvbWlzZS5yZXNvbHZlKCkpO1xuICAgICAgICByZXR1cm4gY2xpZW50Lm9iamVjdDtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVXBkYXRlTm90ZUZpZWxkc0NsaWVudCB7XG5cbiAgICBleGVjdXRlKHVwZGF0ZU5vdGU6IFVwZGF0ZU5vdGUpOiBQcm9taXNlPHZvaWQ+O1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlTm90ZSB7XG5cbiAgICByZWFkb25seSBpZDogbnVtYmVyO1xuICAgIHJlYWRvbmx5IGZpZWxkczoge1tuYW1lOiBzdHJpbmddOiBzdHJpbmd9O1xuXG59XG4iXX0=