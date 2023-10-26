"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DocMetaModel_1 = require("../../metadata/DocMetaModel");
const PageMetas_1 = require("../../metadata/PageMetas");
class PagemarkModel extends DocMetaModel_1.DocMetaModel {
    registerListener(docMeta, callback) {
        PageMetas_1.PageMetas.createModel(docMeta, "pagemarks", callback);
    }
}
exports.PagemarkModel = PagemarkModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZW1hcmtNb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlBhZ2VtYXJrTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSw4REFBeUQ7QUFDekQsd0RBQW1EO0FBTW5ELE1BQWEsYUFBYyxTQUFRLDJCQUFZO0lBRXBDLGdCQUFnQixDQUFDLE9BQWdCLEVBQUUsUUFBbUQ7UUFDekYscUJBQVMsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMxRCxDQUFDO0NBRUo7QUFORCxzQ0FNQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RG9jTWV0YX0gZnJvbSAnLi4vLi4vbWV0YWRhdGEvRG9jTWV0YSc7XG5pbXBvcnQge0RvY01ldGFNb2RlbH0gZnJvbSAnLi4vLi4vbWV0YWRhdGEvRG9jTWV0YU1vZGVsJztcbmltcG9ydCB7UGFnZU1ldGFzfSBmcm9tICcuLi8uLi9tZXRhZGF0YS9QYWdlTWV0YXMnO1xuaW1wb3J0IHtBbm5vdGF0aW9uRXZlbnR9IGZyb20gJy4uLy4uL2Fubm90YXRpb25zL2NvbXBvbmVudHMvQW5ub3RhdGlvbkV2ZW50JztcblxuLyoqXG4gKlxuICovXG5leHBvcnQgY2xhc3MgUGFnZW1hcmtNb2RlbCBleHRlbmRzIERvY01ldGFNb2RlbCB7XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXJMaXN0ZW5lcihkb2NNZXRhOiBEb2NNZXRhLCBjYWxsYmFjazogKGNvbXBvbmVudEV2ZW50OiBBbm5vdGF0aW9uRXZlbnQpID0+IHZvaWQpIHtcbiAgICAgICAgUGFnZU1ldGFzLmNyZWF0ZU1vZGVsKGRvY01ldGEsIFwicGFnZW1hcmtzXCIsIGNhbGxiYWNrKTtcbiAgICB9XG5cbn1cbiJdfQ==