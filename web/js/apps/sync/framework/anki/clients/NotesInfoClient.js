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
class NotesInfoClient {
    execute(notes) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                action: "notesInfo",
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
exports.NotesInfoClient = NotesInfoClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90ZXNJbmZvQ2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTm90ZXNJbmZvQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMERBQXFEO0FBRXJELGlEQUFtQztBQWlDbkMsTUFBYSxlQUFlO0lBRVgsT0FBTyxDQUFDLEtBQWU7O1lBRWhDLE1BQU0sSUFBSSxHQUFHO2dCQUNULE1BQU0sRUFBRSxXQUFXO2dCQUNuQixPQUFPLEVBQUUsQ0FBQztnQkFDVixNQUFNLEVBQUU7b0JBQ0osS0FBSztpQkFDUjthQUNKLENBQUM7WUFFRixNQUFNLElBQUksR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUU1RCxPQUFvQixNQUFNLG1DQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUzRCxDQUFDO0tBQUE7SUFLTSxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQWtCO1FBQ3ZDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFvQixDQUFDO1FBQ3ZELE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDeEYsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ3pCLENBQUM7Q0FFSjtBQTNCRCwwQ0EyQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Fua2lDb25uZWN0RmV0Y2h9IGZyb20gJy4uL0Fua2lDb25uZWN0RmV0Y2gnO1xuaW1wb3J0IHtEZWNrTmFtZXNBbmRJZHMsIElEZWNrTmFtZXNBbmRJZHNDbGllbnR9IGZyb20gJy4vRGVja05hbWVzQW5kSWRzQ2xpZW50JztcbmltcG9ydCAqIGFzIFR5cGVNb3EgZnJvbSBcInR5cGVtb3FcIjtcblxuLyoqXG4gKlxuICogUmV0dXJucyBhIGxpc3Qgb2Ygb2JqZWN0cyBjb250YWluaW5nIGZvciBlYWNoIG5vdGUgSUQgdGhlIG5vdGUgZmllbGRzLCB0YWdzLFxuICogbm90ZSB0eXBlIGFuZCB0aGUgY2FyZHMgYmVsb25naW5nIHRvIHRoZSBub3RlLlxuICpcbiAqIFNhbXBsZSByZXF1ZXN0OlxuICpcbiAqIHtcbiAqICAgIFwiYWN0aW9uXCI6IFwibm90ZXNJbmZvXCIsXG4gKiAgICBcInZlcnNpb25cIjogNixcbiAqICAgIFwicGFyYW1zXCI6IHtcbiAqICAgIFwibm90ZXNcIjogWzE1MDIyOTgwMzM3NTNdXG4gKiB9XG4gKlxuICogU2FtcGxlIHJlc3VsdDpcbiAqXG4gKiB7XG4gKiAgICBcInJlc3VsdFwiOiBbXG4gKiAgICB7XG4gKiAgICAgICAgXCJub3RlSWRcIjoxNTAyMjk4MDMzNzUzLFxuICogICAgICAgIFwibW9kZWxOYW1lXCI6IFwiQmFzaWNcIixcbiAqICAgICAgICBcInRhZ3NcIjpbXCJ0YWdcIixcImFub3RoZXJfdGFnXCJdLFxuICogICAgICAgIFwiZmllbGRzXCI6IHtcbiAqICAgICAgICAgICAgXCJGcm9udFwiOiB7XCJ2YWx1ZVwiOiBcImZyb250IGNvbnRlbnRcIiwgXCJvcmRlclwiOiAwfSxcbiAqICAgICAgICAgICAgXCJCYWNrXCI6IHtcInZhbHVlXCI6IFwiYmFjayBjb250ZW50XCIsIFwib3JkZXJcIjogMX1cbiAqICAgICAgICB9XG4gKiAgICB9XG4gKiBdLFxuICogXCJlcnJvclwiOiBudWxsXG4gKlxuICovXG5leHBvcnQgY2xhc3MgTm90ZXNJbmZvQ2xpZW50IGltcGxlbWVudHMgSU5vdGVzSW5mb0NsaWVudCB7XG5cbiAgICBwdWJsaWMgYXN5bmMgZXhlY3V0ZShub3RlczogbnVtYmVyW10pOiBQcm9taXNlPE5vdGVJbmZvW10+IHtcblxuICAgICAgICBjb25zdCBib2R5ID0ge1xuICAgICAgICAgICAgYWN0aW9uOiBcIm5vdGVzSW5mb1wiLFxuICAgICAgICAgICAgdmVyc2lvbjogNixcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIG5vdGVzXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaW5pdCA9IHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpIH07XG5cbiAgICAgICAgcmV0dXJuIDxOb3RlSW5mb1tdPiBhd2FpdCBBbmtpQ29ubmVjdEZldGNoLmZldGNoKGluaXQpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbW9jayB0aGF0IHJldHVybnMgdGhlIGdpdmVuIHJlc3VsdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZU1vY2socmVzdWx0OiBOb3RlSW5mb1tdKSB7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IFR5cGVNb3EuTW9jay5vZlR5cGU8SU5vdGVzSW5mb0NsaWVudD4oKTtcbiAgICAgICAgY2xpZW50LnNldHVwKHggPT4geC5leGVjdXRlKFR5cGVNb3EuSXQuaXNBbnkoKSkpLnJldHVybnMoKCkgPT4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCkpO1xuICAgICAgICByZXR1cm4gY2xpZW50Lm9iamVjdDtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTm90ZXNJbmZvQ2xpZW50IHtcblxuICAgIGV4ZWN1dGUobm90ZXM6IG51bWJlcltdKTogUHJvbWlzZTxOb3RlSW5mb1tdPjtcblxufVxuXG5pbnRlcmZhY2UgTm90ZUluZm8ge1xuICAgIG5vdGVJZDogbnVtYmVyO1xuICAgIG1vZGVsTmFtZTogc3RyaW5nO1xuICAgIHRhZ3M6IHN0cmluZ1tdO1xuICAgIGZpZWxkczoge1tuYW1lOiBzdHJpbmddOiBGaWVsZH07XG59XG5cbmludGVyZmFjZSBGaWVsZCB7XG4gICAgdmFsdWU6IHN0cmluZztcbiAgICBvcmRlcjogbnVtYmVyO1xufVxuXG4iXX0=