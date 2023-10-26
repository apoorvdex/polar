"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Files_1 = require("../../../util/Files");
const url_1 = __importDefault(require("url"));
const FilePaths_1 = require("../../../util/FilePaths");
const Optional_1 = require("../../../util/ts/Optional");
const PDFJSDIST = __importStar(require("pdfjs-dist"));
const DOIs_1 = require("./DOIs");
const URLs_1 = require("../../../util/URLs");
const pdfjs = PDFJSDIST;
pdfjs.GlobalWorkerOptions.workerSrc =
    '../../node_modules/pdfjs-dist/build/pdf.worker.js';
class PDFMetadata {
    static getMetadata(docPathOrURL) {
        return __awaiter(this, void 0, void 0, function* () {
            const isPath = !URLs_1.URLs.isURL(docPathOrURL);
            if (isPath && !(yield Files_1.Files.existsAsync(docPathOrURL))) {
                throw new Error("File does not exist at path: " + docPathOrURL);
            }
            const toURL = (input) => {
                if (URLs_1.URLs.isURL(input)) {
                    return input;
                }
                else {
                    return url_1.default.format({
                        protocol: 'file',
                        slashes: true,
                        pathname: FilePaths_1.FilePaths.resolve(docPathOrURL),
                    });
                }
            };
            const docURL = toURL(docPathOrURL);
            const doc = yield pdfjs.getDocument(docURL);
            const metaHolder = yield doc.getMetadata();
            const filename = FilePaths_1.FilePaths.basename(docPathOrURL);
            let title;
            let description;
            let creator;
            let doi;
            let props = {};
            if (metaHolder.metadata) {
                const metadata = metaHolder.metadata;
                const toProps = () => {
                    const result = {};
                    const keys = Object.keys(metadata._metadata);
                    for (const key of keys) {
                        result[key] = metadata.get(key);
                    }
                    return result;
                };
                props = toProps();
                title = Optional_1.Optional.of(metadata.get('dc:title')).getOrUndefined();
                description = Optional_1.Optional.of(metadata.get('dc:description')).getOrUndefined();
                creator = Optional_1.Optional.of(metadata.get('dc:creator')).getOrUndefined();
                doi = DOIs_1.DOIs.toDOI(props);
            }
            return {
                fingerprint: doc.fingerprint,
                nrPages: doc.numPages,
                title,
                description,
                props,
                doi
            };
        });
    }
}
exports.PDFMetadata = PDFMetadata;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUERGTWV0YWRhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQREZNZXRhZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUEwQztBQUMxQyw4Q0FBc0I7QUFDdEIsdURBQWtEO0FBQ2xELHdEQUFtRDtBQUVuRCxzREFBd0M7QUFDeEMsaUNBQTRCO0FBRTVCLDZDQUF3QztBQUV4QyxNQUFNLEtBQUssR0FBc0IsU0FBUyxDQUFDO0FBRXBDLEtBQU0sQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTO0lBQ3ZDLG1EQUFtRCxDQUFDO0FBRXhELE1BQWEsV0FBVztJQUViLE1BQU0sQ0FBTyxXQUFXLENBQUMsWUFBMEI7O1lBRXRELE1BQU0sTUFBTSxHQUFHLENBQUUsV0FBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUUxQyxJQUFJLE1BQU0sSUFBSSxDQUFFLENBQUEsTUFBTSxhQUFLLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFBLEVBQUU7Z0JBQ25ELE1BQU0sSUFBSSxLQUFLLENBQUMsK0JBQStCLEdBQUcsWUFBWSxDQUFDLENBQUM7YUFDbkU7WUFFRCxNQUFNLEtBQUssR0FBRyxDQUFDLEtBQWEsRUFBRSxFQUFFO2dCQUU1QixJQUFJLFdBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ25CLE9BQU8sS0FBSyxDQUFDO2lCQUNoQjtxQkFBTTtvQkFFSCxPQUFPLGFBQUcsQ0FBQyxNQUFNLENBQUM7d0JBQ2QsUUFBUSxFQUFFLE1BQU07d0JBQ2hCLE9BQU8sRUFBRSxJQUFJO3dCQUNiLFFBQVEsRUFBRSxxQkFBUyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7cUJBQzVDLENBQUMsQ0FBQztpQkFFTjtZQUVMLENBQUMsQ0FBQztZQUVGLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUVuQyxNQUFNLEdBQUcsR0FBRyxNQUFNLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFNUMsTUFBTSxVQUFVLEdBQUcsTUFBTSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7WUFFM0MsTUFBTSxRQUFRLEdBQUcscUJBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDbEQsSUFBSSxLQUF5QixDQUFDO1lBQzlCLElBQUksV0FBK0IsQ0FBQztZQUNwQyxJQUFJLE9BQTJCLENBQUM7WUFDaEMsSUFBSSxHQUF1QixDQUFDO1lBQzVCLElBQUksS0FBSyxHQUFVLEVBQUUsQ0FBQztZQUV0QixJQUFJLFVBQVUsQ0FBQyxRQUFRLEVBQUU7Z0JBRXJCLE1BQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUM7Z0JBRXJDLE1BQU0sT0FBTyxHQUFHLEdBQUcsRUFBRTtvQkFDakIsTUFBTSxNQUFNLEdBQVUsRUFBRSxDQUFDO29CQUV6QixNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFRLFFBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFFckQsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUU7d0JBQ3BCLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUNuQztvQkFFRCxPQUFPLE1BQU0sQ0FBQztnQkFFbEIsQ0FBQyxDQUFDO2dCQUVGLEtBQUssR0FBRyxPQUFPLEVBQUUsQ0FBQztnQkFFbEIsS0FBSyxHQUFHLG1CQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDL0QsV0FBVyxHQUFHLG1CQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUMzRSxPQUFPLEdBQUcsbUJBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUNuRSxHQUFHLEdBQUcsV0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUUzQjtZQUVELE9BQU87Z0JBQ0gsV0FBVyxFQUFFLEdBQUcsQ0FBQyxXQUFXO2dCQUM1QixPQUFPLEVBQUUsR0FBRyxDQUFDLFFBQVE7Z0JBQ3JCLEtBQUs7Z0JBQ0wsV0FBVztnQkFDWCxLQUFLO2dCQUNMLEdBQUc7YUFDTixDQUFDO1FBRU4sQ0FBQztLQUFBO0NBRUo7QUE1RUQsa0NBNEVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGaWxlc30gZnJvbSAnLi4vLi4vLi4vdXRpbC9GaWxlcyc7XG5pbXBvcnQgdXJsIGZyb20gXCJ1cmxcIjtcbmltcG9ydCB7RmlsZVBhdGhzfSBmcm9tICcuLi8uLi8uLi91dGlsL0ZpbGVQYXRocyc7XG5pbXBvcnQge09wdGlvbmFsfSBmcm9tICcuLi8uLi8uLi91dGlsL3RzL09wdGlvbmFsJztcbmltcG9ydCB7UERGSlNTdGF0aWN9IGZyb20gJ3BkZmpzLWRpc3QnO1xuaW1wb3J0ICogYXMgUERGSlNESVNUIGZyb20gJ3BkZmpzLWRpc3QnO1xuaW1wb3J0IHtET0lzfSBmcm9tICcuL0RPSXMnO1xuaW1wb3J0IHtQYXRoT3JVUkxTdHJ9IGZyb20gJy4uLy4uLy4uL3V0aWwvU3RyaW5ncyc7XG5pbXBvcnQge1VSTHN9IGZyb20gJy4uLy4uLy4uL3V0aWwvVVJMcyc7XG5cbmNvbnN0IHBkZmpzOiBQREZKU1N0YXRpYyA9IDxhbnk+IFBERkpTRElTVDtcblxuKDxhbnk+IHBkZmpzKS5HbG9iYWxXb3JrZXJPcHRpb25zLndvcmtlclNyYyA9XG4gICAgJy4uLy4uL25vZGVfbW9kdWxlcy9wZGZqcy1kaXN0L2J1aWxkL3BkZi53b3JrZXIuanMnO1xuXG5leHBvcnQgY2xhc3MgUERGTWV0YWRhdGEge1xuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRNZXRhZGF0YShkb2NQYXRoT3JVUkw6IFBhdGhPclVSTFN0cik6IFByb21pc2U8UERGTWV0YT4ge1xuXG4gICAgICAgIGNvbnN0IGlzUGF0aCA9ICEgVVJMcy5pc1VSTChkb2NQYXRoT3JVUkwpO1xuXG4gICAgICAgIGlmIChpc1BhdGggJiYgISBhd2FpdCBGaWxlcy5leGlzdHNBc3luYyhkb2NQYXRoT3JVUkwpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGaWxlIGRvZXMgbm90IGV4aXN0IGF0IHBhdGg6IFwiICsgZG9jUGF0aE9yVVJMKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRvVVJMID0gKGlucHV0OiBzdHJpbmcpID0+IHtcblxuICAgICAgICAgICAgaWYgKFVSTHMuaXNVUkwoaW5wdXQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIHJldHVybiB1cmwuZm9ybWF0KHtcbiAgICAgICAgICAgICAgICAgICAgcHJvdG9jb2w6ICdmaWxlJyxcbiAgICAgICAgICAgICAgICAgICAgc2xhc2hlczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IEZpbGVQYXRocy5yZXNvbHZlKGRvY1BhdGhPclVSTCksXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGRvY1VSTCA9IHRvVVJMKGRvY1BhdGhPclVSTCk7XG5cbiAgICAgICAgY29uc3QgZG9jID0gYXdhaXQgcGRmanMuZ2V0RG9jdW1lbnQoZG9jVVJMKTtcblxuICAgICAgICBjb25zdCBtZXRhSG9sZGVyID0gYXdhaXQgZG9jLmdldE1ldGFkYXRhKCk7XG5cbiAgICAgICAgY29uc3QgZmlsZW5hbWUgPSBGaWxlUGF0aHMuYmFzZW5hbWUoZG9jUGF0aE9yVVJMKTtcbiAgICAgICAgbGV0IHRpdGxlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbjogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgICAgICBsZXQgY3JlYXRvcjogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgICAgICBsZXQgZG9pOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgICAgIGxldCBwcm9wczogUHJvcHMgPSB7fTtcblxuICAgICAgICBpZiAobWV0YUhvbGRlci5tZXRhZGF0YSkge1xuXG4gICAgICAgICAgICBjb25zdCBtZXRhZGF0YSA9IG1ldGFIb2xkZXIubWV0YWRhdGE7XG5cbiAgICAgICAgICAgIGNvbnN0IHRvUHJvcHMgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0OiBQcm9wcyA9IHt9O1xuXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKCg8YW55PiBtZXRhZGF0YSkuX21ldGFkYXRhKTtcblxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBtZXRhZGF0YS5nZXQoa2V5KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBwcm9wcyA9IHRvUHJvcHMoKTtcblxuICAgICAgICAgICAgdGl0bGUgPSBPcHRpb25hbC5vZihtZXRhZGF0YS5nZXQoJ2RjOnRpdGxlJykpLmdldE9yVW5kZWZpbmVkKCk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA9IE9wdGlvbmFsLm9mKG1ldGFkYXRhLmdldCgnZGM6ZGVzY3JpcHRpb24nKSkuZ2V0T3JVbmRlZmluZWQoKTtcbiAgICAgICAgICAgIGNyZWF0b3IgPSBPcHRpb25hbC5vZihtZXRhZGF0YS5nZXQoJ2RjOmNyZWF0b3InKSkuZ2V0T3JVbmRlZmluZWQoKTtcbiAgICAgICAgICAgIGRvaSA9IERPSXMudG9ET0kocHJvcHMpO1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmluZ2VycHJpbnQ6IGRvYy5maW5nZXJwcmludCxcbiAgICAgICAgICAgIG5yUGFnZXM6IGRvYy5udW1QYWdlcyxcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICAgIGRvaVxuICAgICAgICB9O1xuXG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGludGVyZmFjZSBQREZNZXRhIHtcblxuICAgIHJlYWRvbmx5IGZpbmdlcnByaW50OiBzdHJpbmc7XG5cbiAgICByZWFkb25seSBuclBhZ2VzOiBudW1iZXI7XG5cbiAgICByZWFkb25seSB0aXRsZT86IHN0cmluZztcblxuICAgIHJlYWRvbmx5IGNyZWF0b3I/OiBzdHJpbmc7XG5cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZztcblxuICAgIHJlYWRvbmx5IGRvaT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEEgbGluayBiYWNrIHRvIHRoZSBwYWdlIGhvc3RpbmcgdGhlIGNvbnRlbnQuICBUaGlzIG1heSBub3QgYmUgdGhlXG4gICAgICogb3JpZ2luYWwgcmVzb3VyY2UgdGhvdWdoIGFuZCBtaWdodCBiZSBhIHBhZ2Ugb3ZlcnZpZXcgb2YgdGhlIHJlc291cmNlLlxuICAgICAqXG4gICAgICogVGhpcyBpcyBvZnRlbiB1c2VkIHdpdGggUERGcyB0byBoYXZlIGEgJ21ldGEnIHBhZ2UgZm9yIGl0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxpbms/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBGdWxsIC8gcmF3IGxpc3Qgb2YgbWV0dGFkYXRhIHByb3BlcnRpZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJvcHM6IFJlYWRvbmx5PFByb3BzPjtcblxufVxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcbn1cblxuIl19