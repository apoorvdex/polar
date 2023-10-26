"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Functions_1 = require("../util/Functions");
class DocMetaDescriber {
    static describe(docMeta) {
        let nrPagemarks = 0;
        let nrTextHighlights = 0;
        Functions_1.forDict(docMeta.pageMetas, (key, pageMeta) => {
            Functions_1.forDict(pageMeta.pagemarks, (id, pagemark) => {
                ++nrPagemarks;
            });
            Functions_1.forDict(pageMeta.textHighlights, (id, textHighlight) => {
                ++nrTextHighlights;
            });
        });
        return `Doc stats - pages: ${docMeta.docInfo.nrPages}, text highlights: ${nrTextHighlights}, pagemarks: ${nrPagemarks}`;
    }
}
exports.DocMetaDescriber = DocMetaDescriber;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jTWV0YURlc2NyaWJlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRvY01ldGFEZXNjcmliZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxpREFBMEM7QUFFMUMsTUFBYSxnQkFBZ0I7SUFFbEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFnQjtRQUVuQyxJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFFekIsbUJBQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxFQUFFO1lBRXpDLG1CQUFPLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRTtnQkFDekMsRUFBRSxXQUFXLENBQUM7WUFDbEIsQ0FBQyxDQUFDLENBQUM7WUFFSCxtQkFBTyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsYUFBYSxFQUFFLEVBQUU7Z0JBQ25ELEVBQUUsZ0JBQWdCLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFFUCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sc0JBQXNCLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxzQkFBc0IsZ0JBQWdCLGdCQUFnQixXQUFXLEVBQUUsQ0FBQztJQUU1SCxDQUFDO0NBRUo7QUF2QkQsNENBdUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEb2NNZXRhfSBmcm9tICcuL0RvY01ldGEnO1xuaW1wb3J0IHtmb3JEaWN0fSBmcm9tICcuLi91dGlsL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBjbGFzcyBEb2NNZXRhRGVzY3JpYmVyIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgZGVzY3JpYmUoZG9jTWV0YTogRG9jTWV0YSkge1xuXG4gICAgICAgIGxldCBuclBhZ2VtYXJrcyA9IDA7XG4gICAgICAgIGxldCBuclRleHRIaWdobGlnaHRzID0gMDtcblxuICAgICAgICBmb3JEaWN0KGRvY01ldGEucGFnZU1ldGFzLCAoa2V5LCBwYWdlTWV0YSkgPT4ge1xuXG4gICAgICAgICAgICBmb3JEaWN0KHBhZ2VNZXRhLnBhZ2VtYXJrcywgKGlkLCBwYWdlbWFyaykgPT4ge1xuICAgICAgICAgICAgICAgICsrbnJQYWdlbWFya3M7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZm9yRGljdChwYWdlTWV0YS50ZXh0SGlnaGxpZ2h0cywgKGlkLCB0ZXh0SGlnaGxpZ2h0KSA9PiB7XG4gICAgICAgICAgICAgICAgKytuclRleHRIaWdobGlnaHRzO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGBEb2Mgc3RhdHMgLSBwYWdlczogJHtkb2NNZXRhLmRvY0luZm8ubnJQYWdlc30sIHRleHQgaGlnaGxpZ2h0czogJHtuclRleHRIaWdobGlnaHRzfSwgcGFnZW1hcmtzOiAke25yUGFnZW1hcmtzfWA7XG5cbiAgICB9XG5cbn1cbiJdfQ==