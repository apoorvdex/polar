"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Preconditions_1 = require("../Preconditions");
const Elements_1 = require("../util/Elements");
class DocFormat {
    currentScale() {
        return 1.0;
    }
    getPageNumFromPageElement(pageElement) {
        Preconditions_1.Preconditions.assertNotNull(pageElement, "pageElement");
        const dataPageNum = Preconditions_1.notNull(pageElement.getAttribute("data-page-number"));
        return parseInt(dataPageNum);
    }
    getPageElementFromPageNum(pageNum) {
        if (!pageNum) {
            throw new Error("Page number not specified");
        }
        const pageElements = document.querySelectorAll(".page");
        const pageElement = pageElements[pageNum - 1];
        if (!pageElement) {
            throw new Error("Unable to find page element for page num: " + pageNum);
        }
        return pageElement;
    }
    getCurrentPageElement() {
        const pageElements = document.querySelectorAll(".page");
        if (pageElements.length === 1) {
            return pageElements[0];
        }
        const result = {
            element: null,
            visibility: 0
        };
        pageElements.forEach(pageElement => {
            const element = pageElement;
            const visibility = Elements_1.Elements.calculateVisibilityForDiv(element);
            if (visibility > result.visibility) {
                result.element = element;
                result.visibility = visibility;
            }
        });
        return result.element;
    }
    getCurrentPageDetail() {
        const pageElement = Preconditions_1.notNull(this.getCurrentPageElement());
        const pageNum = this.getPageNumFromPageElement(pageElement);
        return { pageElement, pageNum };
    }
    supportThumbnails() {
        return false;
    }
    textHighlightOptions() {
        return {};
    }
    targetDocument() {
        throw new Error("Not implemented");
    }
    docDetail() {
        const fingerprint = this.currentDocFingerprint();
        if (!fingerprint) {
            throw new Error("No document loaded");
        }
        return { fingerprint };
    }
}
exports.DocFormat = DocFormat;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jRm9ybWF0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRG9jRm9ybWF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0RBQXdEO0FBQ3hELCtDQUEwQztBQU8xQyxNQUFzQixTQUFTO0lBSXBCLFlBQVk7UUFDZixPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFFTSx5QkFBeUIsQ0FBQyxXQUF3QjtRQUNyRCw2QkFBYSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDeEQsTUFBTSxXQUFXLEdBQUcsdUJBQU8sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztRQUMxRSxPQUFPLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU0seUJBQXlCLENBQUMsT0FBZTtRQUU1QyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBSXhELE1BQU0sV0FBVyxHQUFHLFlBQVksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFOUMsSUFBSSxDQUFFLFdBQVcsRUFBRTtZQUNmLE1BQU0sSUFBSSxLQUFLLENBQUMsNENBQTRDLEdBQUcsT0FBTyxDQUFDLENBQUM7U0FDM0U7UUFFRCxPQUFxQixXQUFXLENBQUM7SUFFckMsQ0FBQztJQU1NLHFCQUFxQjtRQUV4QixNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFeEQsSUFBSSxZQUFZLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUszQixPQUFPLFlBQVksQ0FBQyxDQUFDLENBQWdCLENBQUM7U0FFekM7UUFFRCxNQUFNLE1BQU0sR0FBd0I7WUFDaEMsT0FBTyxFQUFFLElBQUk7WUFDYixVQUFVLEVBQUUsQ0FBQztTQUNoQixDQUFDO1FBRUYsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUUvQixNQUFNLE9BQU8sR0FBaUIsV0FBVyxDQUFDO1lBRTFDLE1BQU0sVUFBVSxHQUFHLG1CQUFRLENBQUMseUJBQXlCLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFL0QsSUFBSyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsRUFBRTtnQkFDakMsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Z0JBQ3pCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO2FBRWxDO1FBRUwsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFFMUIsQ0FBQztJQUtNLG9CQUFvQjtRQUV2QixNQUFNLFdBQVcsR0FBRyx1QkFBTyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUM7UUFDMUQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTVELE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLENBQUM7SUFFcEMsQ0FBQztJQVlNLGlCQUFpQjtRQUNwQixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRU0sb0JBQW9CO1FBQ3ZCLE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVNLGNBQWM7UUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSxTQUFTO1FBRVosTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFFakQsSUFBSSxDQUFFLFdBQVcsRUFBRTtZQUNmLE1BQU0sSUFBSSxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztTQUN6QztRQUVELE9BQU8sRUFBRSxXQUFXLEVBQUUsQ0FBQztJQUUzQixDQUFDO0NBRUo7QUF4SEQsOEJBd0hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtub3ROdWxsLCBQcmVjb25kaXRpb25zfSBmcm9tICcuLi9QcmVjb25kaXRpb25zJztcbmltcG9ydCB7RWxlbWVudHN9IGZyb20gJy4uL3V0aWwvRWxlbWVudHMnO1xuaW1wb3J0IHtEb2NEZXRhaWx9IGZyb20gJy4uL21ldGFkYXRhL0RvY0RldGFpbCc7XG5pbXBvcnQge0lEaW1lbnNpb25zfSBmcm9tICcuLi91dGlsL0RpbWVuc2lvbnMnO1xuXG4vKipcbiAqIEdldCB0aGUgcHJvcGVyIGRvY0Zvcm1hdCB0byB3b3JrIHdpdGguXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEb2NGb3JtYXQge1xuXG4gICAgcHVibGljIGFic3RyYWN0IHJlYWRvbmx5IG5hbWU6IERvY0Zvcm1hdE5hbWU7XG5cbiAgICBwdWJsaWMgY3VycmVudFNjYWxlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAxLjA7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFBhZ2VOdW1Gcm9tUGFnZUVsZW1lbnQocGFnZUVsZW1lbnQ6IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnROb3ROdWxsKHBhZ2VFbGVtZW50LCBcInBhZ2VFbGVtZW50XCIpO1xuICAgICAgICBjb25zdCBkYXRhUGFnZU51bSA9IG5vdE51bGwocGFnZUVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wYWdlLW51bWJlclwiKSk7XG4gICAgICAgIHJldHVybiBwYXJzZUludChkYXRhUGFnZU51bSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFBhZ2VFbGVtZW50RnJvbVBhZ2VOdW0ocGFnZU51bTogbnVtYmVyKTogSFRNTEVsZW1lbnQge1xuXG4gICAgICAgIGlmICghcGFnZU51bSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGFnZSBudW1iZXIgbm90IHNwZWNpZmllZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhZ2VFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGFnZVwiKTtcblxuICAgICAgICAvLyBub3RlIHRoYXQgZWxlbWVudHMgYXJlIDAgYmFzZWQgaW5kZXhlcyBidXQgb3VyIHBhZ2VzIGFyZSAxIGJhc2VkXG4gICAgICAgIC8vIGluZGV4ZXMuXG4gICAgICAgIGNvbnN0IHBhZ2VFbGVtZW50ID0gcGFnZUVsZW1lbnRzW3BhZ2VOdW0gLSAxXTtcblxuICAgICAgICBpZiAoISBwYWdlRWxlbWVudCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGZpbmQgcGFnZSBlbGVtZW50IGZvciBwYWdlIG51bTogXCIgKyBwYWdlTnVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiA8SFRNTEVsZW1lbnQ+IHBhZ2VFbGVtZW50O1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjdXJyZW50IHBhZ2UgbnVtYmVyIGJhc2VkIG9uIHdoaWNoIHBhZ2UgaXMgb2NjdXB5aW5nIHRoZSBsYXJnZXN0XG4gICAgICogcGVyY2VudGFnZSBvZiB0aGUgdmlld3BvcnQuXG4gICAgICovXG4gICAgcHVibGljIGdldEN1cnJlbnRQYWdlRWxlbWVudCgpOiBIVE1MRWxlbWVudCB8IG51bGwge1xuXG4gICAgICAgIGNvbnN0IHBhZ2VFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGFnZVwiKTtcblxuICAgICAgICBpZiAocGFnZUVsZW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuXG4gICAgICAgICAgICAvLyBpZiB3ZSBvbmx5IGhhdmUgb25lIHBhZ2UsIGp1c3QgZ28gd2l0aCB0aGF0IGFzIHRoZXJlIGFyZSBubyBvdGhlclxuICAgICAgICAgICAgLy8gb3B0aW9ucy4gIFRoaXMgd2FzIGFkZGVkIHRvIGF2b2lkIGEgYnVnIGluIGNhbGN1bGF0ZSB2aXNpYmlsaXR5XG4gICAgICAgICAgICAvLyBidXQgaXQgd29ya3MuXG4gICAgICAgICAgICByZXR1cm4gcGFnZUVsZW1lbnRzWzBdIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXN1bHQgPSA8Q3VycmVudFBhZ2VFbGVtZW50PiB7XG4gICAgICAgICAgICBlbGVtZW50OiBudWxsLFxuICAgICAgICAgICAgdmlzaWJpbGl0eTogMFxuICAgICAgICB9O1xuXG4gICAgICAgIHBhZ2VFbGVtZW50cy5mb3JFYWNoKHBhZ2VFbGVtZW50ID0+IHtcblxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IDxIVE1MRWxlbWVudD4gcGFnZUVsZW1lbnQ7XG5cbiAgICAgICAgICAgIGNvbnN0IHZpc2liaWxpdHkgPSBFbGVtZW50cy5jYWxjdWxhdGVWaXNpYmlsaXR5Rm9yRGl2KGVsZW1lbnQpO1xuXG4gICAgICAgICAgICBpZiAoIHZpc2liaWxpdHkgPiByZXN1bHQudmlzaWJpbGl0eSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgICAgICAgICByZXN1bHQudmlzaWJpbGl0eSA9IHZpc2liaWxpdHk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0LmVsZW1lbnQ7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIHRoZSBtZXRhZGF0YSBhYm91dCB0aGUgY3VycmVudCBwYWdlLlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRDdXJyZW50UGFnZURldGFpbCgpOiBQYWdlRGV0YWlsIHtcblxuICAgICAgICBjb25zdCBwYWdlRWxlbWVudCA9IG5vdE51bGwodGhpcy5nZXRDdXJyZW50UGFnZUVsZW1lbnQoKSk7XG4gICAgICAgIGNvbnN0IHBhZ2VOdW0gPSB0aGlzLmdldFBhZ2VOdW1Gcm9tUGFnZUVsZW1lbnQocGFnZUVsZW1lbnQpO1xuXG4gICAgICAgIHJldHVybiB7IHBhZ2VFbGVtZW50LCBwYWdlTnVtIH07XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGN1cnJlbnQgZG9jIGZpbmdlcnByaW50IG9yIG51bGwgaWYgaXQgaGFzbid0IGJlZW4gbG9hZGVkIHlldC5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgY3VycmVudERvY0ZpbmdlcnByaW50KCk6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgZG9jLlxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBjdXJyZW50U3RhdGUoKTogQ3VycmVudERvY1N0YXRlO1xuXG4gICAgcHVibGljIHN1cHBvcnRUaHVtYm5haWxzKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIHRleHRIaWdobGlnaHRPcHRpb25zKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgcHVibGljIHRhcmdldERvY3VtZW50KCk6IEhUTUxEb2N1bWVudCB8IG51bGwge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWRcIik7XG4gICAgfVxuXG4gICAgcHVibGljIGRvY0RldGFpbCgpOiBEb2NEZXRhaWwge1xuXG4gICAgICAgIGNvbnN0IGZpbmdlcnByaW50ID0gdGhpcy5jdXJyZW50RG9jRmluZ2VycHJpbnQoKTtcblxuICAgICAgICBpZiAoISBmaW5nZXJwcmludCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gZG9jdW1lbnQgbG9hZGVkXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgZmluZ2VycHJpbnQgfTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VEZXRhaWwge1xuICAgIHJlYWRvbmx5IHBhZ2VFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICByZWFkb25seSBwYWdlTnVtOiBudW1iZXI7XG4gICAgcmVhZG9ubHkgZGltZW5zaW9ucz86IElEaW1lbnNpb25zO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEN1cnJlbnRQYWdlRWxlbWVudCB7XG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgIHZpc2liaWxpdHk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDdXJyZW50RG9jU3RhdGUge1xuXG4gICAgcmVhZG9ubHkgbnJQYWdlczogbnVtYmVyO1xuXG4gICAgcmVhZG9ubHkgY3VycmVudFBhZ2VOdW1iZXI6IG51bWJlcjtcblxufVxuXG5leHBvcnQgdHlwZSBEb2NGb3JtYXROYW1lID0gJ2h0bWwnIHwgJ3BkZic7XG4iXX0=