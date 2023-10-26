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
class CanAddNotesClient {
    execute(notes) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                action: "canAddNotes",
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
exports.CanAddNotesClient = CanAddNotesClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FuQWRkTm90ZXNDbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDYW5BZGROb3Rlc0NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUFxRDtBQUNyRCxpREFBbUM7QUFxQ25DLE1BQWEsaUJBQWlCO0lBRWIsT0FBTyxDQUFDLEtBQWE7O1lBRTlCLE1BQU0sSUFBSSxHQUFHO2dCQUNULE1BQU0sRUFBRSxhQUFhO2dCQUNyQixPQUFPLEVBQUUsQ0FBQztnQkFDVixNQUFNLEVBQUU7b0JBQ0osS0FBSztpQkFDUjthQUNKLENBQUM7WUFFRixNQUFNLElBQUksR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUU1RCxPQUFtQixNQUFNLG1DQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUxRCxDQUFDO0tBQUE7SUFLTSxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQWlCO1FBQ3RDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFzQixDQUFDO1FBQ3pELE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDeEYsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ3pCLENBQUM7Q0FFSjtBQTNCRCw4Q0EyQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Fua2lDb25uZWN0RmV0Y2h9IGZyb20gJy4uL0Fua2lDb25uZWN0RmV0Y2gnO1xuaW1wb3J0ICogYXMgVHlwZU1vcSBmcm9tIFwidHlwZW1vcVwiO1xuXG4vKipcbiAqXG4gKiBjYW5BZGROb3Rlc1xuICpcbiAqIEFjY2VwdHMgYW4gYXJyYXkgb2Ygb2JqZWN0cyB3aGljaCBkZWZpbmUgcGFyYW1ldGVycyBmb3IgY2FuZGlkYXRlIG5vdGVzIChzZWUgYWRkTm90ZSkgYW5kIHJldHVybnMgYW4gYXJyYXkgb2YgYm9vbGVhbnMgaW5kaWNhdGluZyB3aGV0aGVyIG9yIG5vdCB0aGUgcGFyYW1ldGVycyBhdCB0aGUgY29ycmVzcG9uZGluZyBpbmRleCBjb3VsZCBiZSB1c2VkIHRvIGNyZWF0ZSBhIG5ldyBub3RlLlxuICpcbiAqIFNhbXBsZSByZXF1ZXN0OlxuICpcbiAqIHtcbiAqICAgIFwiYWN0aW9uXCI6IFwiY2FuQWRkTm90ZXNcIixcbiAqICAgIFwidmVyc2lvblwiOiA2LFxuICogICAgXCJwYXJhbXNcIjoge1xuICogICAgICAgIFwibm90ZXNcIjogW1xuICogICAgICAgICAgICB7XG4gKiAgICAgICAgICAgICAgICBcImRlY2tOYW1lXCI6IFwiRGVmYXVsdFwiLFxuICogICAgICAgICAgICAgICAgXCJtb2RlbE5hbWVcIjogXCJCYXNpY1wiLFxuICogICAgICAgICAgICAgICAgXCJmaWVsZHNcIjoge1xuICogICAgICAgICAgICAgICAgICAgIFwiRnJvbnRcIjogXCJmcm9udCBjb250ZW50XCIsXG4gKiAgICAgICAgICAgICAgICAgICAgXCJCYWNrXCI6IFwiYmFjayBjb250ZW50XCJcbiAqICAgICAgICAgICAgICAgIH0sXG4gKiAgICAgICAgICAgICAgICBcInRhZ3NcIjogW1xuICogICAgICAgICAgICAgICAgICAgIFwieW9taWNoYW5cIlxuICogICAgICAgICAgICAgICAgXVxuICogICAgICAgICAgICB9XG4gKiAgICAgICAgXVxuICogICAgfVxuICp9XG4gKiBTYW1wbGUgcmVzdWx0OlxuICpcbiAqIHtcbiAqICAgIFwicmVzdWx0XCI6IFt0cnVlXSxcbiAqICAgIFwiZXJyb3JcIjogbnVsbFxuICp9XG4gKlxuICogKi9cbmV4cG9ydCBjbGFzcyBDYW5BZGROb3Rlc0NsaWVudCBpbXBsZW1lbnRzIElDYW5BZGROb3Rlc0NsaWVudCB7XG5cbiAgICBwdWJsaWMgYXN5bmMgZXhlY3V0ZShub3RlczogTm90ZVtdKTogUHJvbWlzZTxib29sZWFuW10+IHtcblxuICAgICAgICBjb25zdCBib2R5ID0ge1xuICAgICAgICAgICAgYWN0aW9uOiBcImNhbkFkZE5vdGVzXCIsXG4gICAgICAgICAgICB2ZXJzaW9uOiA2LFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgbm90ZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBpbml0ID0geyBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSkgfTtcblxuICAgICAgICByZXR1cm4gPGJvb2xlYW5bXT4gYXdhaXQgQW5raUNvbm5lY3RGZXRjaC5mZXRjaChpbml0KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG1vY2sgdGhhdCByZXR1cm5zIHRoZSBnaXZlbiByZXN1bHQuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVNb2NrKHJlc3VsdDogYm9vbGVhbltdKSB7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IFR5cGVNb3EuTW9jay5vZlR5cGU8SUNhbkFkZE5vdGVzQ2xpZW50PigpO1xuICAgICAgICBjbGllbnQuc2V0dXAoeCA9PiB4LmV4ZWN1dGUoVHlwZU1vcS5JdC5pc0FueSgpKSkucmV0dXJucygoKSA9PiBQcm9taXNlLnJlc29sdmUocmVzdWx0KSk7XG4gICAgICAgIHJldHVybiBjbGllbnQub2JqZWN0O1xuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vdGUge1xuXG4gICAgcmVhZG9ubHkgZGVja05hbWU6IHN0cmluZztcbiAgICByZWFkb25seSBtb2RlbE5hbWU6IHN0cmluZztcbiAgICByZWFkb25seSBmaWVsZHM6IHtbbmFtZTogc3RyaW5nXTogc3RyaW5nfTtcbiAgICByZWFkb25seSB0YWdzOiBzdHJpbmdbXTtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDYW5BZGROb3Rlc0NsaWVudCB7XG5cbiAgICBleGVjdXRlKG5vdGVzOiBOb3RlW10pOiBQcm9taXNlPGJvb2xlYW5bXT47XG5cbn1cbiJdfQ==