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
const PDFMetadata_1 = require("../web/js/apps/repository/importers/PDFMetadata");
const FilePaths_1 = require("../web/js/util/FilePaths");
const PDFImporter_1 = require("../web/js/apps/repository/importers/PDFImporter");
class Main {
    static main() {
        return __awaiter(this, void 0, void 0, function* () {
            for (const path of process.argv.slice(2)) {
                console.log("====");
                console.log("Fetching PDF metadata for: " + FilePaths_1.FilePaths.resolve(path));
                const metadata = yield PDFMetadata_1.PDFMetadata.getMetadata(path);
                const hashcode = yield PDFImporter_1.PDFImporter.computeHashcode(path);
                console.log("fingerprint: " + metadata.fingerprint);
                console.log("nr pages: " + metadata.nrPages);
                console.log("hashcode: " + JSON.stringify(hashcode, null, "  "));
            }
        });
    }
}
Main.main()
    .catch(err => console.error("Failure to process PDF meta: ", err));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLW1ldGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwZGYtbWV0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsaUZBQTRFO0FBQzVFLHdEQUFtRDtBQUNuRCxpRkFBNEU7QUFJNUUsTUFBTSxJQUFJO0lBRUMsTUFBTSxDQUFPLElBQUk7O1lBRXBCLEtBQUssTUFBTSxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEdBQUcscUJBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDckUsTUFBTSxRQUFRLEdBQUcsTUFBTSx5QkFBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDckQsTUFBTSxRQUFRLEdBQUcsTUFBTSx5QkFBVyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ3BFO1FBRUwsQ0FBQztLQUFBO0NBRUo7QUFFRCxJQUFJLENBQUMsSUFBSSxFQUFFO0tBQ04sS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQywrQkFBK0IsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQREZNZXRhZGF0YX0gZnJvbSBcIi4uL3dlYi9qcy9hcHBzL3JlcG9zaXRvcnkvaW1wb3J0ZXJzL1BERk1ldGFkYXRhXCI7XG5pbXBvcnQge0ZpbGVQYXRoc30gZnJvbSAnLi4vd2ViL2pzL3V0aWwvRmlsZVBhdGhzJztcbmltcG9ydCB7UERGSW1wb3J0ZXJ9IGZyb20gJy4uL3dlYi9qcy9hcHBzL3JlcG9zaXRvcnkvaW1wb3J0ZXJzL1BERkltcG9ydGVyJztcblxuLy8gY29kZSB0aGF0IHByaW50cyBQREYgbWV0YWRhdGEgZnJtbyBmaWxlcyBnaXZlbiBvbiB0aGUgY29tbWFuZCBsaW5lLlxuXG5jbGFzcyBNYWluIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgbWFpbigpIHtcblxuICAgICAgICBmb3IgKGNvbnN0IHBhdGggb2YgcHJvY2Vzcy5hcmd2LnNsaWNlKDIpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIj09PT1cIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZldGNoaW5nIFBERiBtZXRhZGF0YSBmb3I6IFwiICsgRmlsZVBhdGhzLnJlc29sdmUocGF0aCkpO1xuICAgICAgICAgICAgY29uc3QgbWV0YWRhdGEgPSBhd2FpdCBQREZNZXRhZGF0YS5nZXRNZXRhZGF0YShwYXRoKTtcbiAgICAgICAgICAgIGNvbnN0IGhhc2hjb2RlID0gYXdhaXQgUERGSW1wb3J0ZXIuY29tcHV0ZUhhc2hjb2RlKHBhdGgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaW5nZXJwcmludDogXCIgKyBtZXRhZGF0YS5maW5nZXJwcmludCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5yIHBhZ2VzOiBcIiArIG1ldGFkYXRhLm5yUGFnZXMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoYXNoY29kZTogXCIgKyBKU09OLnN0cmluZ2lmeShoYXNoY29kZSwgbnVsbCwgXCIgIFwiKSk7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG5NYWluLm1haW4oKVxuICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihcIkZhaWx1cmUgdG8gcHJvY2VzcyBQREYgbWV0YTogXCIsIGVycikpO1xuIl19