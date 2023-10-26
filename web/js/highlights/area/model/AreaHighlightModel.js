"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DocMetaModel_1 = require("../../../metadata/DocMetaModel");
const PageMetas_1 = require("../../../metadata/PageMetas");
class AreaHighlightModel extends DocMetaModel_1.DocMetaModel {
    registerListener(docMeta, annotationEventListener) {
        PageMetas_1.PageMetas.createModel(docMeta, "areaHighlights", annotationEventListener);
        return annotationEventListener;
    }
}
exports.AreaHighlightModel = AreaHighlightModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJlYUhpZ2hsaWdodE1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXJlYUhpZ2hsaWdodE1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsaUVBQTREO0FBQzVELDJEQUFzRDtBQUl0RCxNQUFhLGtCQUFtQixTQUFRLDJCQUFZO0lBRXpDLGdCQUFnQixDQUFDLE9BQWdCLEVBQUUsdUJBQWdEO1FBQ3RGLHFCQUFTLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO1FBQzFFLE9BQU8sdUJBQXVCLENBQUM7SUFDbkMsQ0FBQztDQUVKO0FBUEQsZ0RBT0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RvY01ldGF9IGZyb20gJy4uLy4uLy4uL21ldGFkYXRhL0RvY01ldGEnO1xuaW1wb3J0IHtEb2NNZXRhTW9kZWx9IGZyb20gJy4uLy4uLy4uL21ldGFkYXRhL0RvY01ldGFNb2RlbCc7XG5pbXBvcnQge1BhZ2VNZXRhc30gZnJvbSAnLi4vLi4vLi4vbWV0YWRhdGEvUGFnZU1ldGFzJztcbmltcG9ydCB7QW5ub3RhdGlvbkV2ZW50TGlzdGVuZXJ9IGZyb20gJy4uLy4uLy4uL2Fubm90YXRpb25zL2NvbXBvbmVudHMvQW5ub3RhdGlvbkV2ZW50TGlzdGVuZXInO1xuXG5cbmV4cG9ydCBjbGFzcyBBcmVhSGlnaGxpZ2h0TW9kZWwgZXh0ZW5kcyBEb2NNZXRhTW9kZWwge1xuXG4gICAgcHVibGljIHJlZ2lzdGVyTGlzdGVuZXIoZG9jTWV0YTogRG9jTWV0YSwgYW5ub3RhdGlvbkV2ZW50TGlzdGVuZXI6IEFubm90YXRpb25FdmVudExpc3RlbmVyKSB7XG4gICAgICAgIFBhZ2VNZXRhcy5jcmVhdGVNb2RlbChkb2NNZXRhLCBcImFyZWFIaWdobGlnaHRzXCIsIGFubm90YXRpb25FdmVudExpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIGFubm90YXRpb25FdmVudExpc3RlbmVyO1xuICAgIH1cblxufVxuXG4iXX0=