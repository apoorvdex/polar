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
const PHZWriter_1 = require("../phz/PHZWriter");
const Functions_1 = require("../util/Functions");
const ResourceFactory_1 = require("../phz/ResourceFactory");
const Objects_1 = require("../util/Objects");
const Optional_1 = require("../util/ts/Optional");
class CapturedPHZWriter {
    constructor(path) {
        this.path = path;
    }
    convert(captured) {
        return __awaiter(this, void 0, void 0, function* () {
            const phzWriter = new PHZWriter_1.PHZWriter(this.path);
            const metadata = CapturedPHZWriter.toMetadata(captured);
            yield Functions_1.forOwnKeys(captured.capturedDocuments, (url, capturedDocument) => __awaiter(this, void 0, void 0, function* () {
                const contentType = Optional_1.Optional.of(capturedDocument.contentType)
                    .getOrElse("text/html");
                const resource = ResourceFactory_1.ResourceFactory.create(capturedDocument.url, contentType);
                resource.title = capturedDocument.title;
                resource.docTypeFormat = capturedDocument.docTypeFormat;
                yield phzWriter.writeResource(resource, capturedDocument.content, capturedDocument.url);
            }));
            yield phzWriter.writeMetadata(metadata);
            yield phzWriter.close();
        });
    }
    static toMetadata(captured) {
        const metadata = Objects_1.Objects.duplicate(captured);
        delete metadata.content;
        delete metadata.capturedDocuments;
        return metadata;
    }
}
exports.CapturedPHZWriter = CapturedPHZWriter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FwdHVyZWRQSFpXcml0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDYXB0dXJlZFBIWldyaXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR0EsZ0RBQTJDO0FBQzNDLGlEQUE2QztBQUM3Qyw0REFBdUQ7QUFDdkQsNkNBQXdDO0FBRXhDLGtEQUE2QztBQUU3QyxNQUFhLGlCQUFpQjtJQUkxQixZQUFZLElBQVk7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQVFZLE9BQU8sQ0FBQyxRQUFrQjs7WUFFbkMsTUFBTSxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUczQyxNQUFNLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFJeEQsTUFBTSxzQkFBVSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFPLEdBQVcsRUFBRSxnQkFBNkIsRUFBRSxFQUFFO2dCQUU5RixNQUFNLFdBQVcsR0FDYixtQkFBUSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7cUJBQ3BDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFFaEMsTUFBTSxRQUFRLEdBQUcsaUNBQWUsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDO2dCQUMzRSxRQUFRLENBQUMsS0FBSyxHQUFHLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDeEMsUUFBUSxDQUFDLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7Z0JBRXhELE1BQU0sU0FBUyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRTVGLENBQUMsQ0FBQSxDQUFDLENBQUM7WUFFSCxNQUFNLFNBQVMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFeEMsTUFBTSxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFNUIsQ0FBQztLQUFBO0lBRU0sTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFhO1FBQ2xDLE1BQU0sUUFBUSxHQUFHLGlCQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdDLE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUN4QixPQUFPLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQztRQUNsQyxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0NBRUo7QUFsREQsOENBa0RDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBXcml0ZXMgb3V0IGEgUEhaIGFyY2hpdmUgZnJvbSB0aGUgZ2l2ZW4gY2FwdHVyZWQgSlNPTiBkYXRhLlxuICovXG5pbXBvcnQge1BIWldyaXRlcn0gZnJvbSAnLi4vcGh6L1BIWldyaXRlcic7XG5pbXBvcnQge2Zvck93bktleXN9IGZyb20gJy4uL3V0aWwvRnVuY3Rpb25zJztcbmltcG9ydCB7UmVzb3VyY2VGYWN0b3J5fSBmcm9tICcuLi9waHovUmVzb3VyY2VGYWN0b3J5JztcbmltcG9ydCB7T2JqZWN0c30gZnJvbSAnLi4vdXRpbC9PYmplY3RzJztcbmltcG9ydCB7Q2FwdHVyZWQsIENhcHR1cmVkRG9jfSBmcm9tICcuL3JlbmRlcmVyL0NhcHR1cmVkJztcbmltcG9ydCB7T3B0aW9uYWx9IGZyb20gJy4uL3V0aWwvdHMvT3B0aW9uYWwnO1xuXG5leHBvcnQgY2xhc3MgQ2FwdHVyZWRQSFpXcml0ZXIge1xuXG4gICAgcHVibGljIHBhdGg6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHBhdGg6IHN0cmluZykge1xuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnQgaXQgdG8gdGhlIFBIWiBmaWxlIGF0IHRoZSBnaXZlbiBwYXRoLlxuICAgICAqXG4gICAgICogQHBhcmFtIGNhcHR1cmVkXG4gICAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgY29udmVydChjYXB0dXJlZDogQ2FwdHVyZWQpIHtcblxuICAgICAgICBjb25zdCBwaHpXcml0ZXIgPSBuZXcgUEhaV3JpdGVyKHRoaXMucGF0aCk7XG5cbiAgICAgICAgLy8gY29udmVydCB0aGUgY2FwdHVyZWQgdG8gbWV0YWRhdGEuLi5cbiAgICAgICAgY29uc3QgbWV0YWRhdGEgPSBDYXB0dXJlZFBIWldyaXRlci50b01ldGFkYXRhKGNhcHR1cmVkKTtcblxuICAgICAgICAvLyBub3cgd29yayB3aXRoIGVhY2ggcmVzb3VyY2VcblxuICAgICAgICBhd2FpdCBmb3JPd25LZXlzKGNhcHR1cmVkLmNhcHR1cmVkRG9jdW1lbnRzLCBhc3luYyAodXJsOiBzdHJpbmcsIGNhcHR1cmVkRG9jdW1lbnQ6IENhcHR1cmVkRG9jKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRUeXBlID1cbiAgICAgICAgICAgICAgICBPcHRpb25hbC5vZihjYXB0dXJlZERvY3VtZW50LmNvbnRlbnRUeXBlKVxuICAgICAgICAgICAgICAgICAgICAuZ2V0T3JFbHNlKFwidGV4dC9odG1sXCIpO1xuXG4gICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IFJlc291cmNlRmFjdG9yeS5jcmVhdGUoY2FwdHVyZWREb2N1bWVudC51cmwsIGNvbnRlbnRUeXBlKTtcbiAgICAgICAgICAgIHJlc291cmNlLnRpdGxlID0gY2FwdHVyZWREb2N1bWVudC50aXRsZTtcbiAgICAgICAgICAgIHJlc291cmNlLmRvY1R5cGVGb3JtYXQgPSBjYXB0dXJlZERvY3VtZW50LmRvY1R5cGVGb3JtYXQ7XG5cbiAgICAgICAgICAgIGF3YWl0IHBoeldyaXRlci53cml0ZVJlc291cmNlKHJlc291cmNlLCBjYXB0dXJlZERvY3VtZW50LmNvbnRlbnQsIGNhcHR1cmVkRG9jdW1lbnQudXJsKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCBwaHpXcml0ZXIud3JpdGVNZXRhZGF0YShtZXRhZGF0YSk7XG5cbiAgICAgICAgYXdhaXQgcGh6V3JpdGVyLmNsb3NlKCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHRvTWV0YWRhdGEoY2FwdHVyZWQ6IGFueSkge1xuICAgICAgICBjb25zdCBtZXRhZGF0YSA9IE9iamVjdHMuZHVwbGljYXRlKGNhcHR1cmVkKTtcbiAgICAgICAgZGVsZXRlIG1ldGFkYXRhLmNvbnRlbnQ7XG4gICAgICAgIGRlbGV0ZSBtZXRhZGF0YS5jYXB0dXJlZERvY3VtZW50cztcbiAgICAgICAgcmV0dXJuIG1ldGFkYXRhO1xuICAgIH1cblxufVxuIl19