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
class DocMetaSuppliers {
    static literal(docMeta) {
        return () => __awaiter(this, void 0, void 0, function* () { return docMeta; });
    }
}
exports.DocMetaSuppliers = DocMetaSuppliers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jTWV0YVN1cHBsaWVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRvY01ldGFTdXBwbGllcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBLE1BQWEsZ0JBQWdCO0lBRWxCLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBZ0I7UUFDbEMsT0FBTyxHQUFTLEVBQUUsZ0RBQUMsT0FBQSxPQUFPLENBQUEsR0FBQSxDQUFDO0lBQy9CLENBQUM7Q0FFSjtBQU5ELDRDQU1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEb2NNZXRhU3VwcGxpZXJ9IGZyb20gJy4vRG9jTWV0YVN1cHBsaWVyJztcbmltcG9ydCB7RG9jTWV0YX0gZnJvbSAnLi9Eb2NNZXRhJztcblxuZXhwb3J0IGNsYXNzIERvY01ldGFTdXBwbGllcnMge1xuXG4gICAgcHVibGljIHN0YXRpYyBsaXRlcmFsKGRvY01ldGE6IERvY01ldGEpOiBEb2NNZXRhU3VwcGxpZXIge1xuICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gZG9jTWV0YTtcbiAgICB9XG5cbn1cbiJdfQ==