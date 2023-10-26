"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PageMeta_1 = require("./PageMeta");
const Logger_1 = require("../logger/Logger");
const DocMeta_1 = require("./DocMeta");
const PagemarkType_1 = require("./PagemarkType");
const PageInfo_1 = require("./PageInfo");
const DocInfos_1 = require("./DocInfos");
const AnnotationInfos_1 = require("./AnnotationInfos");
const Pagemarks_1 = require("./Pagemarks");
const MetadataSerializer_1 = require("./MetadataSerializer");
const PageMetas_1 = require("./PageMetas");
const Functions_1 = require("../util/Functions");
const TextHighlights_1 = require("./TextHighlights");
const Preconditions_1 = require("../Preconditions");
const Errors_1 = require("../util/Errors");
const log = Logger_1.Logger.create();
class DocMetas {
    static create(fingerprint, nrPages, filename) {
        const docInfo = DocInfos_1.DocInfos.create(fingerprint, nrPages, filename);
        const pageMetas = {};
        for (let idx = 1; idx <= nrPages; ++idx) {
            const pageInfo = new PageInfo_1.PageInfo({ num: idx });
            const pageMeta = new PageMeta_1.PageMeta({ pageInfo });
            pageMetas[idx] = pageMeta;
        }
        return new DocMeta_1.DocMeta(docInfo, pageMetas);
    }
    static createWithinInitialPagemarks(fingerprint, nrPages) {
        return MockDocMetas.createWithinInitialPagemarks(fingerprint, nrPages);
    }
    static createMockDocMeta() {
        return MockDocMetas.createMockDocMeta();
    }
    static getPageMeta(docMeta, num) {
        num = Preconditions_1.Preconditions.assertPresent(num, "num");
        const pageMeta = docMeta.pageMetas[num];
        if (!pageMeta) {
            throw new Error("No pageMeta for page: " + num);
        }
        return pageMeta;
    }
    static addPagemarks(docMeta, options) {
        if (!options) {
            options = {};
        }
        if (!options.nrPages) {
            options.nrPages = 3;
        }
        if (!options.offsetPage) {
            options.offsetPage = 1;
        }
        if (!options.percentage) {
            options.percentage = 100;
        }
        const maxPageNum = Math.min(options.offsetPage + options.nrPages - 1, docMeta.docInfo.nrPages);
        for (let pageNum = options.offsetPage; pageNum <= maxPageNum; ++pageNum) {
            const pagemark = Pagemarks_1.Pagemarks.create({
                type: PagemarkType_1.PagemarkType.SINGLE_COLUMN,
                percentage: 100,
                column: 0
            });
            Pagemarks_1.Pagemarks.updatePagemark(docMeta, pageNum, pagemark);
        }
    }
    static serialize(docMeta, spacing = "  ") {
        return MetadataSerializer_1.MetadataSerializer.serialize(docMeta, spacing);
    }
    static deserialize(data, fingerprint) {
        Preconditions_1.Preconditions.assertPresent(data, 'data');
        if (!(typeof data === "string")) {
            throw new Error("We can only deserialize strings: " + typeof data);
        }
        let docMeta = Object.create(DocMeta_1.DocMeta.prototype);
        try {
            docMeta = MetadataSerializer_1.MetadataSerializer.deserialize(docMeta, data);
            if (docMeta.docInfo && !docMeta.docInfo.filename) {
            }
            return DocMetas.upgrade(docMeta);
        }
        catch (e) {
            throw Errors_1.Errors.rethrow(e, "Unable to deserialize doc: " + fingerprint);
        }
    }
    static upgrade(docMeta) {
        docMeta.pageMetas = PageMetas_1.PageMetas.upgrade(docMeta.pageMetas);
        if (!docMeta.annotationInfo) {
            docMeta.annotationInfo = AnnotationInfos_1.AnnotationInfos.create();
        }
        if (!docMeta.attachments) {
            docMeta.attachments = {};
        }
        if (docMeta.docInfo) {
            if (!docMeta.docInfo.pagemarkType) {
                docMeta.docInfo.pagemarkType = PagemarkType_1.PagemarkType.SINGLE_COLUMN;
            }
        }
        return docMeta;
    }
    static computeProgress(docMeta) {
        let total = 0;
        Functions_1.forDict(docMeta.pageMetas, (key, pageMeta) => {
            Functions_1.forDict(pageMeta.pagemarks, (column, pagemark) => {
                total += pagemark.percentage;
            });
        });
        return total / (docMeta.docInfo.nrPages * 100);
    }
    static withBatchedMutations(docMeta, mutator) {
        try {
            docMeta.docInfo.mutating = true;
            mutator();
        }
        finally {
            docMeta.docInfo.mutating = undefined;
        }
    }
}
exports.DocMetas = DocMetas;
class MockDocMetas {
    static createWithinInitialPagemarks(fingerprint, nrPages) {
        const result = DocMetas.create(fingerprint, nrPages);
        const maxPages = 3;
        for (let pageNum = 1; pageNum <= Math.min(nrPages, maxPages); ++pageNum) {
            const pagemark = Pagemarks_1.Pagemarks.create({
                type: PagemarkType_1.PagemarkType.SINGLE_COLUMN,
                percentage: 100,
                column: 0
            });
            Pagemarks_1.Pagemarks.updatePagemark(result, pageNum, pagemark);
        }
        return result;
    }
    static createMockDocMeta(fingerprint = "0x001") {
        const nrPages = 4;
        const docMeta = DocMetas.createWithinInitialPagemarks(fingerprint, nrPages);
        const textHighlight = TextHighlights_1.TextHighlights.createMockTextHighlight();
        docMeta.getPageMeta(1).textHighlights[textHighlight.id] = textHighlight;
        return docMeta;
    }
}
exports.MockDocMetas = MockDocMetas;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jTWV0YXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJEb2NNZXRhcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUFvQztBQUNwQyw2Q0FBd0M7QUFDeEMsdUNBQWtDO0FBQ2xDLGlEQUE0QztBQUM1Qyx5Q0FBb0M7QUFDcEMseUNBQW9DO0FBQ3BDLHVEQUFrRDtBQUNsRCwyQ0FBc0M7QUFDdEMsNkRBQXdEO0FBQ3hELDJDQUFzQztBQUN0QyxpREFBMEM7QUFDMUMscURBQWdEO0FBQ2hELG9EQUErQztBQUMvQywyQ0FBc0M7QUFFdEMsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsUUFBUTtJQVFWLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBbUIsRUFBRSxPQUFlLEVBQUUsUUFBaUI7UUFFeEUsTUFBTSxPQUFPLEdBQUcsbUJBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVoRSxNQUFNLFNBQVMsR0FBNkIsRUFBRSxDQUFDO1FBRS9DLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxPQUFPLEVBQUUsRUFBRSxHQUFHLEVBQUU7WUFDckMsTUFBTSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxDQUFDLEVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7WUFDMUMsTUFBTSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQztZQUMxQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDO1NBQzdCO1FBRUQsT0FBTyxJQUFJLGlCQUFPLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBRTNDLENBQUM7SUFhTSxNQUFNLENBQUMsNEJBQTRCLENBQUMsV0FBbUIsRUFBRSxPQUFlO1FBQzNFLE9BQU8sWUFBWSxDQUFDLDRCQUE0QixDQUFDLFdBQVcs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T0FBTyxDQUFDO0lBRW5CLENBQUM7Q0FHSjtBQTNDRCxvQ0EyQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BhZ2VNZXRhfSBmcm9tICcuL1BhZ2VNZXRhJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7RG9jTWV0YX0gZnJvbSAnLi9Eb2NNZXRhJztcbmltcG9ydCB7UGFnZW1hcmtUeXBlfSBmcm9tICcuL1BhZ2VtYXJrVHlwZSc7XG5pbXBvcnQge1BhZ2VJbmZvfSBmcm9tICcuL1BhZ2VJbmZvJztcbmltcG9ydCB7RG9jSW5mb3N9IGZyb20gJy4vRG9jSW5mb3MnO1xuaW1wb3J0IHtBbm5vdGF0aW9uSW5mb3N9IGZyb20gJy4vQW5ub3RhdGlvbkluZm9zJztcbmltcG9ydCB7UGFnZW1hcmtzfSBmcm9tICcuL1BhZ2VtYXJrcyc7XG5pbXBvcnQge01ldGFkYXRhU2VyaWFsaXplcn0gZnJvbSAnLi9NZXRhZGF0YVNlcmlhbGl6ZXInO1xuaW1wb3J0IHtQYWdlTWV0YXN9IGZyb20gJy4vUGFnZU1ldGFzJztcbmltcG9ydCB7Zm9yRGljdH0gZnJvbSAnLi4vdXRpbC9GdW5jdGlvbnMnO1xuaW1wb3J0IHtUZXh0SGlnaGxpZ2h0c30gZnJvbSAnLi9UZXh0SGlnaGxpZ2h0cyc7XG5pbXBvcnQge1ByZWNvbmRpdGlvbnN9IGZyb20gJy4uL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtFcnJvcnN9IGZyb20gJy4uL3V0aWwvRXJyb3JzJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgY2xhc3MgRG9jTWV0YXMge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIHRoZSBiYXNpYyBEb2NJbmZvIHN0cnVjdHVyZSB0aGF0IHdlIGNhbiB1c2Ugd2l0aCByZXF1aXJlZCAvIGJhc2ljXG4gICAgICogZmllbGQgc3RydWN0dXJlLlxuICAgICAqIEBwYXJhbSBmaW5nZXJwcmludCBUaGUgZmluZ2VycHJpbnQgb2YgdGhlIGRvY3VtZW50XG4gICAgICogQHBhcmFtIG5yUGFnZXMgVGhlIG51bWJlciBvZiBwYWdlcyBpbiB0aGlzIGRvY3VtZW50LlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKGZpbmdlcnByaW50OiBzdHJpbmcsIG5yUGFnZXM6IG51bWJlciwgZmlsZW5hbWU/OiBzdHJpbmcpIHtcblxuICAgICAgICBjb25zdCBkb2NJbmZvID0gRG9jSW5mb3MuY3JlYXRlKGZpbmdlcnByaW50LCBuclBhZ2VzLCBmaWxlbmFtZSk7XG5cbiAgICAgICAgY29uc3QgcGFnZU1ldGFzOiB7W2lkOiBzdHJpbmddOiBQYWdlTWV0YX0gPSB7fTtcblxuICAgICAgICBmb3IgKGxldCBpZHggPSAxOyBpZHggPD0gbnJQYWdlczsgKytpZHgpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VJbmZvID0gbmV3IFBhZ2VJbmZvKHtudW06IGlkeH0pO1xuICAgICAgICAgICAgY29uc3QgcGFnZU1ldGEgPSBuZXcgUGFnZU1ldGEoe3BhZ2VJbmZvfSk7XG4gICAgICAgICAgICBwYWdlTWV0YXNbaWR4XSA9IHBhZ2VNZXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBEb2NNZXRhKGRvY0luZm8sIHBhZ2VNZXRhcyk7XG5cbiAgICB9XG5cbiAgICAvLyBsZXQgcmVzdWx0OiBEb2NJbmZvID0gT2JqZWN0LmNyZWF0ZShEb2NJbmZvcy5wcm90b3R5cGUpO1xuICAgIC8vXG4gICAgLy8gcmVzdWx0LmZpbmdlcnByaW50ID0gZmluZ2VycHJpbnQ7XG4gICAgLy8gcmVzdWx0Lm5yUGFnZXMgPSBuclBhZ2VzO1xuICAgIC8vIHJlc3VsdC5pbml0KHJlc3VsdCk7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBEb2NNZXRhIG9iamVjdCBidXQgcGxhY2UgaW5pdGlhbCBwYWdlbWFya3Mgb24gaXQuIFRoaXMgaXMgdXNlZnVsXG4gICAgICogZm9yIHRlc3RpbmcuXG4gICAgICogQGRlcHJlY2F0ZWQgdXNlIE1vY2tEb2NNZXRhc1xuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlV2l0aGluSW5pdGlhbFBhZ2VtYXJrcyhmaW5nZXJwcmludDogc3RyaW5nLCBuclBhZ2VzOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIE1vY2tEb2NNZXRhcy5jcmVhdGVXaXRoaW5Jbml0aWFsUGFnZW1hcmtzKGZpbmdlcnByaW50LCBuclBhZ2VzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCB1c2UgTW9ja0RvY01ldGFzXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVNb2NrRG9jTWV0YSgpIHtcbiAgICAgICAgcmV0dXJuIE1vY2tEb2NNZXRhcy5jcmVhdGVNb2NrRG9jTWV0YSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UGFnZU1ldGEoZG9jTWV0YTogRG9jTWV0YSwgbnVtOiBudW1iZXIpIHtcblxuICAgICAgICBudW0gPSBQcmVjb25kaXRpb25zLmFzc2VydFByZXNlbnQobnVtLCBcIm51bVwiKTtcblxuICAgICAgICBjb25zdCBwYWdlTWV0YSA9IGRvY01ldGEucGFnZU1ldGFzW251bV07XG5cbiAgICAgICAgaWYgKCFwYWdlTWV0YSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gcGFnZU1ldGEgZm9yIHBhZ2U6IFwiICsgbnVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYWdlTWV0YTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYWRkUGFnZW1hcmtzKGRvY01ldGE6IERvY01ldGEsIG9wdGlvbnM6IGFueSkge1xuXG4gICAgICAgIGlmICghb3B0aW9ucykge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFvcHRpb25zLm5yUGFnZXMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMubnJQYWdlcyA9IDM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW9wdGlvbnMub2Zmc2V0UGFnZSkge1xuICAgICAgICAgICAgLy8gdGhlIHN0YXJ0aW5nIHBhZ2VcbiAgICAgICAgICAgIG9wdGlvbnMub2Zmc2V0UGFnZSA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW9wdGlvbnMucGVyY2VudGFnZSkge1xuICAgICAgICAgICAgLy8gdGhlIHBlcmNlbnRhZ2UgdmFsdWUgZnJvbSAwLTEwMFxuICAgICAgICAgICAgb3B0aW9ucy5wZXJjZW50YWdlID0gMTAwO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWF4UGFnZU51bSA9IE1hdGgubWluKG9wdGlvbnMub2Zmc2V0UGFnZSArIG9wdGlvbnMubnJQYWdlcyAtIDEsIGRvY01ldGEuZG9jSW5mby5uclBhZ2VzKTtcblxuICAgICAgICBmb3IgKGxldCBwYWdlTnVtID0gb3B0aW9ucy5vZmZzZXRQYWdlOyBwYWdlTnVtIDw9IG1heFBhZ2VOdW07ICsrcGFnZU51bSApIHtcblxuICAgICAgICAgICAgY29uc3QgcGFnZW1hcmsgPSBQYWdlbWFya3MuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBQYWdlbWFya1R5cGUuU0lOR0xFX0NPTFVNTixcbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlOiAxMDAsXG4gICAgICAgICAgICAgICAgY29sdW1uOiAwXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgUGFnZW1hcmtzLnVwZGF0ZVBhZ2VtYXJrKGRvY01ldGEsIHBhZ2VOdW0sIHBhZ2VtYXJrKTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHNlcmlhbGl6ZShkb2NNZXRhOiBEb2NNZXRhLCBzcGFjaW5nOiBzdHJpbmcgPSBcIiAgXCIpIHtcbiAgICAgICAgcmV0dXJuIE1ldGFkYXRhU2VyaWFsaXplci5zZXJpYWxpemUoZG9jTWV0YSwgc3BhY2luZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBkZXNlcmlhbGl6ZShkYXRhOiBzdHJpbmcsIGZpbmdlcnByaW50OiBzdHJpbmcpOiBEb2NNZXRhIHtcblxuICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydFByZXNlbnQoZGF0YSwgJ2RhdGEnKTtcblxuICAgICAgICBpZiAoISAodHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJXZSBjYW4gb25seSBkZXNlcmlhbGl6ZSBzdHJpbmdzOiBcIiArIHR5cGVvZiBkYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkb2NNZXRhOiBEb2NNZXRhID0gT2JqZWN0LmNyZWF0ZShEb2NNZXRhLnByb3RvdHlwZSk7XG5cbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgZG9jTWV0YSA9IE1ldGFkYXRhU2VyaWFsaXplci5kZXNlcmlhbGl6ZShkb2NNZXRhLCBkYXRhKTtcblxuICAgICAgICAgICAgaWYgKGRvY01ldGEuZG9jSW5mbyAmJiAhZG9jTWV0YS5kb2NJbmZvLmZpbGVuYW1lKSB7XG4gICAgICAgICAgICAgICAgLy8gbG9nLndhcm4oXCJEb2NNZXRhIGhhcyBubyBmaWxlbmFtZTogXCIgKyBkb2NNZXRhLmRvY0luZm8uZmluZ2VycHJpbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gRG9jTWV0YXMudXBncmFkZShkb2NNZXRhKTtcblxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcnMucmV0aHJvdyhlLCBcIlVuYWJsZSB0byBkZXNlcmlhbGl6ZSBkb2M6IFwiICsgZmluZ2VycHJpbnQpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHVwZ3JhZGUoZG9jTWV0YTogRG9jTWV0YSkge1xuXG4gICAgICAgIC8vIHZhbGlkYXRlIHRoZSBKU09OIGRhdGEgYW5kIHNldCBkZWZhdWx0cy4gSW4gdGhlIGZ1dHVyZSB3ZSBzaG91bGRcbiAgICAgICAgLy8gbWlncmF0ZSB0byB1c2luZyBzb21ldGhpbmcgbGlrZSBBSlYgdG8gcHJvdmlkZSB0aGVzZSBkZWZhdWx0cyBhbmRcbiAgICAgICAgLy8gYWxzbyBwZXJmb3JtIHR5cGUgYXNzZXJ0aW9uLlxuXG4gICAgICAgIGRvY01ldGEucGFnZU1ldGFzID0gUGFnZU1ldGFzLnVwZ3JhZGUoZG9jTWV0YS5wYWdlTWV0YXMpO1xuXG4gICAgICAgIC8vIFRPRE86IGdvIHRocm91Z2ggYW5kIHVwZ3JhZGUgdGhlIHBhZ2VtYXJrcy4gSSBzaG91bGQgcHJvYmFibHkgaGF2ZVxuICAgICAgICAvLyBhbiB1cGdyYWRlIGZ1bmN0aW9uIGZvciBlYWNoIG9iamVjdCB0eXBlLi4uXG5cbiAgICAgICAgaWYgKCFkb2NNZXRhLmFubm90YXRpb25JbmZvKSB7XG4gICAgICAgICAgICAvLyBsb2cuZGVidWcoXCJObyBhbm5vdGF0aW9uIGluZm8uLiBBZGRpbmcgZGVmYXVsdC5cIik7XG4gICAgICAgICAgICBkb2NNZXRhLmFubm90YXRpb25JbmZvID0gQW5ub3RhdGlvbkluZm9zLmNyZWF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkb2NNZXRhLmF0dGFjaG1lbnRzKSB7XG4gICAgICAgICAgICAvLyBsb2cuZGVidWcoXCJObyBhdHRhY2htZW50cy4gQWRkaW5nIGVtcHR5IG1hcC5cIik7XG4gICAgICAgICAgICBkb2NNZXRhLmF0dGFjaG1lbnRzID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG9jTWV0YS5kb2NJbmZvKSB7XG5cbiAgICAgICAgICAgIGlmICghZG9jTWV0YS5kb2NJbmZvLnBhZ2VtYXJrVHlwZSkge1xuICAgICAgICAgICAgICAgIC8vIGxvZy5kZWJ1ZyhcIkRvY0luZm8gaGFzIG5vIHBhZ2VtYXJrVHlwZS4uLiBBZGRpbmcgZGVmYXVsdCBvZiBTSU5HTEVfQ09MVU1OXCIpO1xuICAgICAgICAgICAgICAgIGRvY01ldGEuZG9jSW5mby5wYWdlbWFya1R5cGUgPSBQYWdlbWFya1R5cGUuU0lOR0xFX0NPTFVNTjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRvY01ldGE7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb21wdXRlIHRoZSBwcm9ncmVzcyBvZiBhIGRvY3VtZW50IGJhc2VkIG9uIHRoZSBwYWdlbWFya3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBjb21wdXRlUHJvZ3Jlc3MoZG9jTWV0YTogRG9jTWV0YSk6IG51bWJlciB7XG5cbiAgICAgICAgbGV0IHRvdGFsID0gMDtcblxuICAgICAgICBmb3JEaWN0KGRvY01ldGEucGFnZU1ldGFzLCAoa2V5LCBwYWdlTWV0YSkgPT4ge1xuXG4gICAgICAgICAgICBmb3JEaWN0KHBhZ2VNZXRhLnBhZ2VtYXJrcywgKGNvbHVtbiwgcGFnZW1hcmspID0+IHtcblxuICAgICAgICAgICAgICAgIHRvdGFsICs9IHBhZ2VtYXJrLnBlcmNlbnRhZ2U7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0b3RhbCAvIChkb2NNZXRhLmRvY0luZm8ubnJQYWdlcyAqIDEwMCk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYWtlIGNoYW5nZXMgdG8gdGhlIGRvY3VtZW50IHNvIHRoYXQgdGhleSB3cml0ZSBhcyBvbmUgYmF0Y2hlZCBtdXRhdGlvblxuICAgICAqIGF0IHRoZSBlbmQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbXV0YXRvciAgVGhlIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgd2hpY2ggd2lsbCBtdXRhdGlvbiB0aGVcbiAgICAgKiB1bmRlcmx5aW5nIERvY01ldGEgcHJvcGVybHkuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyB3aXRoQmF0Y2hlZE11dGF0aW9ucyhkb2NNZXRhOiBEb2NNZXRhLCBtdXRhdG9yOiAoKSA9PiB2b2lkKSB7XG5cbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgZG9jTWV0YS5kb2NJbmZvLm11dGF0aW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgbXV0YXRvcigpO1xuXG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAvLyBzZXQgaXQgdG8gdW5kZWZpbmVkIHNvIHRoYXQgaXQgaXNuJ3QgYWN0dWFsbHkgcGVyc2lzdGVkIGluIHRoZVxuICAgICAgICAgICAgLy8gcmVzdWx0aW5nIEpTT05cbiAgICAgICAgICAgIGRvY01ldGEuZG9jSW5mby5tdXRhdGluZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IGNsYXNzIE1vY2tEb2NNZXRhcyB7XG5cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIERvY01ldGEgb2JqZWN0IGJ1dCBwbGFjZSBpbml0aWFsIHBhZ2VtYXJrcyBvbiBpdC4gVGhpcyBpcyB1c2VmdWxcbiAgICAgKiBmb3IgdGVzdGluZy5cbiAgICAgKlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlV2l0aGluSW5pdGlhbFBhZ2VtYXJrcyhmaW5nZXJwcmludDogc3RyaW5nLCBuclBhZ2VzOiBudW1iZXIpIHtcblxuICAgICAgICBjb25zdCByZXN1bHQgPSBEb2NNZXRhcy5jcmVhdGUoZmluZ2VycHJpbnQsIG5yUGFnZXMpO1xuXG4gICAgICAgIGNvbnN0IG1heFBhZ2VzID0gMztcbiAgICAgICAgZm9yIChsZXQgcGFnZU51bSA9IDE7IHBhZ2VOdW0gPD0gTWF0aC5taW4obnJQYWdlcywgbWF4UGFnZXMpOyArK3BhZ2VOdW0gKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHBhZ2VtYXJrID0gUGFnZW1hcmtzLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgdHlwZTogUGFnZW1hcmtUeXBlLlNJTkdMRV9DT0xVTU4sXG4gICAgICAgICAgICAgICAgcGVyY2VudGFnZTogMTAwLFxuICAgICAgICAgICAgICAgIGNvbHVtbjogMFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIFBhZ2VtYXJrcy51cGRhdGVQYWdlbWFyayhyZXN1bHQsIHBhZ2VOdW0sIHBhZ2VtYXJrKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlTW9ja0RvY01ldGEoZmluZ2VycHJpbnQ6IHN0cmluZyA9IFwiMHgwMDFcIikge1xuXG4gICAgICAgIGNvbnN0IG5yUGFnZXMgPSA0O1xuICAgICAgICBjb25zdCBkb2NNZXRhID0gRG9jTWV0YXMuY3JlYXRlV2l0aGluSW5pdGlhbFBhZ2VtYXJrcyhmaW5nZXJwcmludCwgbnJQYWdlcyk7XG5cbiAgICAgICAgY29uc3QgdGV4dEhpZ2hsaWdodCA9IFRleHRIaWdobGlnaHRzLmNyZWF0ZU1vY2tUZXh0SGlnaGxpZ2h0KCk7XG5cbiAgICAgICAgZG9jTWV0YS5nZXRQYWdlTWV0YSgxKS50ZXh0SGlnaGxpZ2h0c1t0ZXh0SGlnaGxpZ2h0LmlkXSA9IHRleHRIaWdobGlnaHQ7XG5cbiAgICAgICAgcmV0dXJuIGRvY01ldGE7XG5cbiAgICB9XG5cblxufVxuIl19