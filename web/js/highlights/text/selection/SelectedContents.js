"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ranges_1 = require("./Ranges");
const SelectedContent_1 = require("./SelectedContent");
const Selections_1 = require("./Selections");
const RectTexts_1 = require("../controller/RectTexts");
const HTMLSanitizer_1 = require("./HTMLSanitizer");
const { TextNodeRows } = require("./TextNodeRows");
class SelectedContents {
    static compute(win) {
        const selection = win.getSelection();
        const ranges = Ranges_1.Ranges.cloneRanges(Selections_1.Selections.toRanges(selection));
        const text = selection.toString();
        const html = HTMLSanitizer_1.HTMLSanitizer.sanitize(SelectedContents.toHTML(ranges));
        let textNodes = [];
        ranges.forEach(range => {
            textNodes.push(...Ranges_1.Ranges.getTextNodes(range));
        });
        textNodes = TextNodeRows.fromTextNodes(textNodes);
        const rectTexts = RectTexts_1.RectTexts.toRectTexts(textNodes);
        return new SelectedContent_1.SelectedContent({
            text,
            html,
            rectTexts
        });
    }
    static toHTML(ranges) {
        return ranges.map(range => Ranges_1.Ranges.toHTML(range)).join("");
    }
}
exports.SelectedContents = SelectedContents;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VsZWN0ZWRDb250ZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNlbGVjdGVkQ29udGVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxxQ0FBZ0M7QUFDaEMsdURBQWtEO0FBQ2xELDZDQUF3QztBQUN4Qyx1REFBa0Q7QUFDbEQsbURBQThDO0FBRTlDLE1BQU0sRUFBQyxZQUFZLEVBQUMsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUVqRCxNQUFhLGdCQUFnQjtJQVVsQixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQVc7UUFFN0IsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBR3JDLE1BQU0sTUFBTSxHQUFHLGVBQU0sQ0FBQyxXQUFXLENBQUMsdUJBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUdsRSxNQUFNLElBQUksR0FBRyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEMsTUFBTSxJQUFJLEdBQUksNkJBQWEsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFdEUsSUFBSSxTQUFTLEdBQVcsRUFBRSxDQUFDO1FBRTNCLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkIsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLGVBQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQztRQVNILFNBQVMsR0FBRyxZQUFZLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRWxELE1BQU0sU0FBUyxHQUFHLHFCQUFTLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRW5ELE9BQU8sSUFBSSxpQ0FBZSxDQUFDO1lBQ3ZCLElBQUk7WUFDSixJQUFJO1lBQ0osU0FBUztTQUNaLENBQUMsQ0FBQztJQUVQLENBQUM7SUFNTSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQWU7UUFDaEMsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsZUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDO0NBRUo7QUF0REQsNENBc0RDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKlxuICovXG5pbXBvcnQge1Jhbmdlc30gZnJvbSAnLi9SYW5nZXMnO1xuaW1wb3J0IHtTZWxlY3RlZENvbnRlbnR9IGZyb20gJy4vU2VsZWN0ZWRDb250ZW50JztcbmltcG9ydCB7U2VsZWN0aW9uc30gZnJvbSAnLi9TZWxlY3Rpb25zJztcbmltcG9ydCB7UmVjdFRleHRzfSBmcm9tICcuLi9jb250cm9sbGVyL1JlY3RUZXh0cyc7XG5pbXBvcnQge0hUTUxTYW5pdGl6ZXJ9IGZyb20gJy4vSFRNTFNhbml0aXplcic7XG5cbmNvbnN0IHtUZXh0Tm9kZVJvd3N9ID0gcmVxdWlyZShcIi4vVGV4dE5vZGVSb3dzXCIpO1xuXG5leHBvcnQgY2xhc3MgU2VsZWN0ZWRDb250ZW50cyB7XG5cbiAgICAvKipcbiAgICAgKiBDb21wdXRlIHRoZSBTZWxlY3RlZENvbnRlbnRzIGJhc2VkIG9uIHRoZSBwYWdlIG9mZnNldCwgbm90IHRoZVxuICAgICAqIGNsaWVudC92aWV3cG9ydCBvZmZzZXQsIGFuZCBpbmNsdWRlIGFkZGl0aW9uYWwgbWV0YWRhdGEgaW5jbHVkaW5nIHRoZVxuICAgICAqIHRleHQgb2YgdGhlIHNlbGVjdGlvbiwgdGhlIGh0bWwsIGV0Yy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB3aW4ge1dpbmRvd31cbiAgICAgKiBAcmV0dXJuIHtTZWxlY3RlZENvbnRlbnR9XG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBjb21wdXRlKHdpbjogV2luZG93KSB7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gd2luLmdldFNlbGVjdGlvbigpO1xuXG4gICAgICAgIC8vIGdldCBhbGwgdGhlIHJhbmdlcyBhbmQgY2xvbmUgdGhlbSBzbyB0aGV5IGNhbid0IHZhbmlzaC5cbiAgICAgICAgY29uc3QgcmFuZ2VzID0gUmFuZ2VzLmNsb25lUmFuZ2VzKFNlbGVjdGlvbnMudG9SYW5nZXMoc2VsZWN0aW9uKSk7XG5cbiAgICAgICAgLy8gbm93IGdldCB0aGUgdGV4dCBhbmQgdGhlIHNhbml0aXplZCBIVE1MXG4gICAgICAgIGNvbnN0IHRleHQgPSBzZWxlY3Rpb24udG9TdHJpbmcoKTtcbiAgICAgICAgY29uc3QgaHRtbCA9ICBIVE1MU2FuaXRpemVyLnNhbml0aXplKFNlbGVjdGVkQ29udGVudHMudG9IVE1MKHJhbmdlcykpO1xuXG4gICAgICAgIGxldCB0ZXh0Tm9kZXM6IE5vZGVbXSA9IFtdO1xuXG4gICAgICAgIHJhbmdlcy5mb3JFYWNoKHJhbmdlID0+IHtcbiAgICAgICAgICAgIHRleHROb2Rlcy5wdXNoKC4uLlJhbmdlcy5nZXRUZXh0Tm9kZXMocmFuZ2UpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gRklYTUU6IHdlJ3JlIGdldHRpbmcgRkVXRVIgcmVzdWx0cy4uIG5vdCBtcm9lLi4gdGhhdCdzIGEgYnVnLi5cblxuICAgICAgICAvLyBjb252ZXJ0IHRleHROb2RlcyB0byB2aXN1YWwgYmxvY2tzIHRoYXQgZG9uJ3Qgb3ZlcmxhcCAuLi5cbiAgICAgICAgLy8gRklYTUU6IHRoaXMgaXMgdGhlIHByb2JsZW0uLiB3ZSdyZSBzcGxpdHRpbmcgdGhlIGZpcnN0IG5vZGUgYW5kIHRoZW4gaXQnc1xuICAgICAgICAvLyBvbmx5IGEgcGFydGlhbCBub2RlIGF0IHRoYXQgcG9pbnQuLiB3ZSBoYXZlIHRvIGtlZXAgdGhlIGNoaWxkcmVuIHRvb1xuICAgICAgICAvLyBhbmQgcmV0dXJuIGl0IGFzIHNvbWUgc29ydCBvZiBjb250YWluZXIuXG5cbiAgICAgICAgdGV4dE5vZGVzID0gVGV4dE5vZGVSb3dzLmZyb21UZXh0Tm9kZXModGV4dE5vZGVzKTtcblxuICAgICAgICBjb25zdCByZWN0VGV4dHMgPSBSZWN0VGV4dHMudG9SZWN0VGV4dHModGV4dE5vZGVzKTtcblxuICAgICAgICByZXR1cm4gbmV3IFNlbGVjdGVkQ29udGVudCh7XG4gICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgaHRtbCxcbiAgICAgICAgICAgIHJlY3RUZXh0c1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbXB1dGUgdGhlIGdpdmVuIHJhbmdlcyBhcyBIVE1MLCBmYWN0b3JpbmcgaW4gc2FuaXRpemF0aW9uIGFzIHdlbGwuXG4gICAgICogQHBhcmFtIHJhbmdlc1xuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgdG9IVE1MKHJhbmdlczogUmFuZ2VbXSkge1xuICAgICAgICByZXR1cm4gcmFuZ2VzLm1hcChyYW5nZSA9PiBSYW5nZXMudG9IVE1MKHJhbmdlKSkuam9pbihcIlwiKTtcbiAgICB9XG5cbn1cbiJdfQ==