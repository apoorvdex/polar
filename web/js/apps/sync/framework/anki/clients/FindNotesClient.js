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
class FindNotesClient {
    execute(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                action: "findNotes",
                version: 6,
                params: {
                    query
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
exports.FindNotesClient = FindNotesClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmluZE5vdGVzQ2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRmluZE5vdGVzQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMERBQXFEO0FBQ3JELGlEQUFtQztBQXdCbkMsTUFBYSxlQUFlO0lBRVgsT0FBTyxDQUFDLEtBQWE7O1lBRTlCLE1BQU0sSUFBSSxHQUFHO2dCQUNULE1BQU0sRUFBRSxXQUFXO2dCQUNuQixPQUFPLEVBQUUsQ0FBQztnQkFDVixNQUFNLEVBQUU7b0JBQ0osS0FBSztpQkFDUjthQUNKLENBQUM7WUFFRixNQUFNLElBQUksR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUU1RCxPQUFrQixNQUFNLG1DQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV6RCxDQUFDO0tBQUE7SUFLTSxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQWdCO1FBQ3JDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFvQixDQUFDO1FBQ3ZELE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDeEYsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ3pCLENBQUM7Q0FFSjtBQTNCRCwwQ0EyQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Fua2lDb25uZWN0RmV0Y2h9IGZyb20gJy4uL0Fua2lDb25uZWN0RmV0Y2gnO1xuaW1wb3J0ICogYXMgVHlwZU1vcSBmcm9tIFwidHlwZW1vcVwiO1xuXG4vKipcbmZpbmROb3Rlc1xuXG5SZXR1cm5zIGFuIGFycmF5IG9mIG5vdGUgSURzIGZvciBhIGdpdmVuIHF1ZXJ5LiBTYW1lIHF1ZXJ5IHN5bnRheCBhcyBndWlCcm93c2UuXG5cblNhbXBsZSByZXF1ZXN0OlxuXG57XG4gICAgXCJhY3Rpb25cIjogXCJmaW5kTm90ZXNcIixcbiAgICBcInZlcnNpb25cIjogNixcbiAgICBcInBhcmFtc1wiOiB7XG4gICAgXCJxdWVyeVwiOiBcImRlY2s6Y3VycmVudFwiXG59XG59XG4gU2FtcGxlIHJlc3VsdDpcblxuIHtcbiAgICBcInJlc3VsdFwiOiBbMTQ4Mzk1OTI4OTgxNywgMTQ4Mzk1OTI5MTY5NV0sXG4gICAgXCJlcnJvclwiOiBudWxsXG59XG5cbiAqL1xuZXhwb3J0IGNsYXNzIEZpbmROb3Rlc0NsaWVudCBpbXBsZW1lbnRzIElGaW5kTm90ZXNDbGllbnQge1xuXG4gICAgcHVibGljIGFzeW5jIGV4ZWN1dGUocXVlcnk6IHN0cmluZyk6IFByb21pc2U8bnVtYmVyW10+IHtcblxuICAgICAgICBjb25zdCBib2R5ID0ge1xuICAgICAgICAgICAgYWN0aW9uOiBcImZpbmROb3Rlc1wiLFxuICAgICAgICAgICAgdmVyc2lvbjogNixcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaW5pdCA9IHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpIH07XG5cbiAgICAgICAgcmV0dXJuIDxudW1iZXJbXT4gYXdhaXQgQW5raUNvbm5lY3RGZXRjaC5mZXRjaChpbml0KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG1vY2sgdGhhdCByZXR1cm5zIHRoZSBnaXZlbiByZXN1bHQuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVNb2NrKHJlc3VsdDogbnVtYmVyW10pIHtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gVHlwZU1vcS5Nb2NrLm9mVHlwZTxJRmluZE5vdGVzQ2xpZW50PigpO1xuICAgICAgICBjbGllbnQuc2V0dXAoeCA9PiB4LmV4ZWN1dGUoVHlwZU1vcS5JdC5pc0FueSgpKSkucmV0dXJucygoKSA9PiBQcm9taXNlLnJlc29sdmUocmVzdWx0KSk7XG4gICAgICAgIHJldHVybiBjbGllbnQub2JqZWN0O1xuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElGaW5kTm90ZXNDbGllbnQge1xuXG4gICAgZXhlY3V0ZShxdWVyeTogc3RyaW5nKTogUHJvbWlzZTxudW1iZXJbXT47XG5cbn1cbiJdfQ==