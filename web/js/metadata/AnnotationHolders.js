"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AnnotationType_1 = require("./AnnotationType");
class AnnotationHolders {
    static fromDocMeta(docMeta) {
        const result = [];
        for (const pageMeta of Object.values(docMeta.pageMetas || {})) {
            const pageInfo = pageMeta.pageInfo;
            const docInfo = docMeta.docInfo;
            result.push(...Object.values(pageMeta.areaHighlights || {})
                .map(current => this.fromAreaHighlight(current, pageInfo, docInfo)));
            result.push(...Object.values(pageMeta.textHighlights || {})
                .map(current => this.fromTextHighlight(current, pageInfo, docInfo)));
            result.push(...Object.values(pageMeta.comments || {})
                .map(current => this.fromComment(current, pageInfo, docInfo)));
            result.push(...Object.values(pageMeta.flashcards || {})
                .map(current => this.fromFlashcard(current, pageInfo, docInfo)));
        }
        return result;
    }
    static fromAreaHighlight(value, pageInfo, docInfo) {
        return { type: AnnotationType_1.AnnotationType.AREA_HIGHLIGHT, annotation: value, docInfo, pageInfo };
    }
    static fromTextHighlight(value, pageInfo, docInfo) {
        return { type: AnnotationType_1.AnnotationType.TEXT_HIGHLIGHT, annotation: value, docInfo, pageInfo };
    }
    static fromComment(value, pageInfo, docInfo) {
        return { type: AnnotationType_1.AnnotationType.COMMENT, annotation: value, docInfo, pageInfo };
    }
    static fromFlashcard(value, pageInfo, docInfo) {
        return { type: AnnotationType_1.AnnotationType.FLASHCARD, annotation: value, docInfo, pageInfo };
    }
}
exports.AnnotationHolders = AnnotationHolders;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ub3RhdGlvbkhvbGRlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBbm5vdGF0aW9uSG9sZGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUtBLHFEQUFnRDtBQUtoRCxNQUFhLGlCQUFpQjtJQUVuQixNQUFNLENBQUMsV0FBVyxDQUFDLE9BQWdCO1FBRXRDLE1BQU0sTUFBTSxHQUF1QixFQUFFLENBQUM7UUFFdEMsS0FBSyxNQUFNLFFBQVEsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLEVBQUU7WUFFM0QsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUNuQyxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBRWhDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFDO2lCQUN0RCxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFekUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUM7aUJBQ3RELEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV6RSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztpQkFDaEQsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVuRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQztpQkFDbEQsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUV4RTtRQUVELE9BQU8sTUFBTSxDQUFDO0lBRWxCLENBQUM7SUFFTSxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBb0IsRUFBRSxRQUFtQixFQUFFLE9BQWlCO1FBQ3hGLE9BQU8sRUFBQyxJQUFJLEVBQUUsK0JBQWMsQ0FBQyxjQUFjLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFDLENBQUM7SUFDdkYsQ0FBQztJQUdNLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFvQixFQUFFLFFBQW1CLEVBQUUsT0FBaUI7UUFDeEYsT0FBTyxFQUFDLElBQUksRUFBRSwrQkFBYyxDQUFDLGNBQWMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUMsQ0FBQztJQUN2RixDQUFDO0lBRU0sTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFjLEVBQUUsUUFBbUIsRUFBRSxPQUFpQjtRQUM1RSxPQUFPLEVBQUMsSUFBSSxFQUFFLCtCQUFjLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBQyxDQUFDO0lBQ2hGLENBQUM7SUFFTSxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQWdCLEVBQUUsUUFBbUIsRUFBRSxPQUFpQjtRQUNoRixPQUFPLEVBQUMsSUFBSSxFQUFFLCtCQUFjLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBQyxDQUFDO0lBQ2xGLENBQUM7Q0FFSjtBQTlDRCw4Q0E4Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RvY01ldGF9IGZyb20gXCIuL0RvY01ldGFcIjtcbmltcG9ydCB7QW5ub3RhdGlvbkhvbGRlcn0gZnJvbSBcIi4vQW5ub3RhdGlvbkhvbGRlclwiO1xuaW1wb3J0IHtBcmVhSGlnaGxpZ2h0fSBmcm9tICcuL0FyZWFIaWdobGlnaHQnO1xuaW1wb3J0IHtQYWdlSW5mb30gZnJvbSAnLi9QYWdlSW5mbyc7XG5pbXBvcnQge0RvY0luZm99IGZyb20gJy4vRG9jSW5mbyc7XG5pbXBvcnQge0Fubm90YXRpb25UeXBlfSBmcm9tICcuL0Fubm90YXRpb25UeXBlJztcbmltcG9ydCB7VGV4dEhpZ2hsaWdodH0gZnJvbSAnLi9UZXh0SGlnaGxpZ2h0JztcbmltcG9ydCB7Q29tbWVudH0gZnJvbSAnLi9Db21tZW50JztcbmltcG9ydCB7Rmxhc2hjYXJkfSBmcm9tICcuL0ZsYXNoY2FyZCc7XG5cbmV4cG9ydCBjbGFzcyBBbm5vdGF0aW9uSG9sZGVycyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGZyb21Eb2NNZXRhKGRvY01ldGE6IERvY01ldGEpOiBSZWFkb25seUFycmF5PEFubm90YXRpb25Ib2xkZXI+IHtcblxuICAgICAgICBjb25zdCByZXN1bHQ6IEFubm90YXRpb25Ib2xkZXJbXSA9IFtdO1xuXG4gICAgICAgIGZvciAoY29uc3QgcGFnZU1ldGEgb2YgT2JqZWN0LnZhbHVlcyhkb2NNZXRhLnBhZ2VNZXRhcyB8fCB7fSkpIHtcblxuICAgICAgICAgICAgY29uc3QgcGFnZUluZm8gPSBwYWdlTWV0YS5wYWdlSW5mbztcbiAgICAgICAgICAgIGNvbnN0IGRvY0luZm8gPSBkb2NNZXRhLmRvY0luZm87XG5cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKC4uLk9iamVjdC52YWx1ZXMocGFnZU1ldGEuYXJlYUhpZ2hsaWdodHMgfHwge30pXG4gICAgICAgICAgICAgICAgLm1hcChjdXJyZW50ID0+IHRoaXMuZnJvbUFyZWFIaWdobGlnaHQoY3VycmVudCwgcGFnZUluZm8sIGRvY0luZm8pKSk7XG5cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKC4uLk9iamVjdC52YWx1ZXMocGFnZU1ldGEudGV4dEhpZ2hsaWdodHMgfHwge30pXG4gICAgICAgICAgICAgICAgLm1hcChjdXJyZW50ID0+IHRoaXMuZnJvbVRleHRIaWdobGlnaHQoY3VycmVudCwgcGFnZUluZm8sIGRvY0luZm8pKSk7XG5cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKC4uLk9iamVjdC52YWx1ZXMocGFnZU1ldGEuY29tbWVudHMgfHwge30pXG4gICAgICAgICAgICAgICAgLm1hcChjdXJyZW50ID0+IHRoaXMuZnJvbUNvbW1lbnQoY3VycmVudCwgcGFnZUluZm8sIGRvY0luZm8pKSk7XG5cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKC4uLk9iamVjdC52YWx1ZXMocGFnZU1ldGEuZmxhc2hjYXJkcyB8fCB7fSlcbiAgICAgICAgICAgICAgICAubWFwKGN1cnJlbnQgPT4gdGhpcy5mcm9tRmxhc2hjYXJkKGN1cnJlbnQsIHBhZ2VJbmZvLCBkb2NJbmZvKSkpO1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBmcm9tQXJlYUhpZ2hsaWdodCh2YWx1ZTogQXJlYUhpZ2hsaWdodCwgcGFnZUluZm8/OiBQYWdlSW5mbywgZG9jSW5mbz86IERvY0luZm8pOiBBbm5vdGF0aW9uSG9sZGVyIHtcbiAgICAgICAgcmV0dXJuIHt0eXBlOiBBbm5vdGF0aW9uVHlwZS5BUkVBX0hJR0hMSUdIVCwgYW5ub3RhdGlvbjogdmFsdWUsIGRvY0luZm8sIHBhZ2VJbmZvfTtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbVRleHRIaWdobGlnaHQodmFsdWU6IFRleHRIaWdobGlnaHQsIHBhZ2VJbmZvPzogUGFnZUluZm8sIGRvY0luZm8/OiBEb2NJbmZvKTogQW5ub3RhdGlvbkhvbGRlciB7XG4gICAgICAgIHJldHVybiB7dHlwZTogQW5ub3RhdGlvblR5cGUuVEVYVF9ISUdITElHSFQsIGFubm90YXRpb246IHZhbHVlLCBkb2NJbmZvLCBwYWdlSW5mb307XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBmcm9tQ29tbWVudCh2YWx1ZTogQ29tbWVudCwgcGFnZUluZm8/OiBQYWdlSW5mbywgZG9jSW5mbz86IERvY0luZm8pOiBBbm5vdGF0aW9uSG9sZGVyIHtcbiAgICAgICAgcmV0dXJuIHt0eXBlOiBBbm5vdGF0aW9uVHlwZS5DT01NRU5ULCBhbm5vdGF0aW9uOiB2YWx1ZSwgZG9jSW5mbywgcGFnZUluZm99O1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbUZsYXNoY2FyZCh2YWx1ZTogRmxhc2hjYXJkLCBwYWdlSW5mbz86IFBhZ2VJbmZvLCBkb2NJbmZvPzogRG9jSW5mbyk6IEFubm90YXRpb25Ib2xkZXIge1xuICAgICAgICByZXR1cm4ge3R5cGU6IEFubm90YXRpb25UeXBlLkZMQVNIQ0FSRCwgYW5ub3RhdGlvbjogdmFsdWUsIGRvY0luZm8sIHBhZ2VJbmZvfTtcbiAgICB9XG5cbn1cbiJdfQ==