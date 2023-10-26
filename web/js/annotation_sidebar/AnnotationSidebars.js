"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Splitter_1 = require("../ui/splitter/Splitter");
const React = __importStar(require("react"));
const ReactDOM = __importStar(require("react-dom"));
const AnnotationSidebar_1 = require("./AnnotationSidebar");
const Logger_1 = require("../logger/Logger");
const log = Logger_1.Logger.create();
class AnnotationSidebars {
    static create(docMeta) {
        const splitter = new Splitter_1.Splitter('.polar-viewer', '.polar-sidebar');
        const polarSidebar = document.querySelector(".polar-sidebar");
        polarSidebar.style.display = 'block';
        splitter.collapse();
        ReactDOM.render(React.createElement(AnnotationSidebar_1.AnnotationSidebar, { docMeta: docMeta }), document.querySelector('.polar-sidebar'));
        return splitter;
    }
    static scrollToAnnotation(id, pageNum) {
        const selector = `.page div[data-annotation-id='${id}']`;
        const pageElements = Array.from(document.querySelectorAll(".page"));
        const pageElement = pageElements[pageNum - 1];
        if (!pageElement) {
            log.error(`Could not find page ${pageNum} of N pages: ${pageElements.length}`);
            return;
        }
        this.scrollToElement(pageElement);
        const annotationElement = document.querySelector(selector);
        if (annotationElement) {
            this.scrollToElement(annotationElement);
        }
        else {
            log.warn("Could not find annotation element: " + selector);
        }
    }
    static scrollToElement(element) {
        const options = {
            behavior: 'instant',
            block: 'center',
            inline: 'center'
        };
        element.scrollIntoView(options);
    }
}
exports.AnnotationSidebars = AnnotationSidebars;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ub3RhdGlvblNpZGViYXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQW5ub3RhdGlvblNpZGViYXJzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxzREFBaUQ7QUFDakQsNkNBQStCO0FBQy9CLG9EQUFzQztBQUN0QywyREFBc0Q7QUFFdEQsNkNBQXdDO0FBRXhDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLGtCQUFrQjtJQUVwQixNQUFNLENBQUMsTUFBTSxDQUFDLE9BQWdCO1FBRWpDLE1BQU0sUUFBUSxHQUFHLElBQUksbUJBQVEsQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUVqRSxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFpQixDQUFDO1FBQzlFLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUVyQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFcEIsUUFBUSxDQUFDLE1BQU0sQ0FDWCxvQkFBQyxxQ0FBaUIsSUFBQyxPQUFPLEVBQUUsT0FBTyxHQUFJLEVBQ3ZDLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQWdCLENBQzFELENBQUM7UUFFRixPQUFPLFFBQVEsQ0FBQztJQUVwQixDQUFDO0lBRU0sTUFBTSxDQUFDLGtCQUFrQixDQUFDLEVBQVUsRUFBRSxPQUFlO1FBRXhELE1BQU0sUUFBUSxHQUFHLGlDQUFpQyxFQUFFLElBQUksQ0FBQztRQUV6RCxNQUFNLFlBQVksR0FBa0IsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNuRixNQUFNLFdBQVcsR0FBRyxZQUFZLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRTlDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDZCxHQUFHLENBQUMsS0FBSyxDQUFDLHVCQUF1QixPQUFPLGdCQUFnQixZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUMvRSxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRWxDLE1BQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUzRCxJQUFJLGlCQUFpQixFQUFFO1lBQ25CLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWdDLENBQUMsQ0FBQztTQUMxRDthQUFNO1lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxxQ0FBcUMsR0FBRyxRQUFRLENBQUMsQ0FBQztTQUM5RDtJQWFMLENBQUM7SUFFTyxNQUFNLENBQUMsZUFBZSxDQUFDLE9BQW9CO1FBRS9DLE1BQU0sT0FBTyxHQUFHO1lBQ1osUUFBUSxFQUFFLFNBQVM7WUFDbkIsS0FBSyxFQUFFLFFBQVE7WUFDZixNQUFNLEVBQUUsUUFBUTtTQUNuQixDQUFDO1FBSUYsT0FBTyxDQUFDLGNBQWMsQ0FBQyxPQUFnQyxDQUFDLENBQUM7SUFFN0QsQ0FBQztDQUdKO0FBdEVELGdEQXNFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3BsaXR0ZXJ9IGZyb20gJy4uL3VpL3NwbGl0dGVyL1NwbGl0dGVyJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQge0Fubm90YXRpb25TaWRlYmFyfSBmcm9tICcuL0Fubm90YXRpb25TaWRlYmFyJztcbmltcG9ydCB7RG9jTWV0YX0gZnJvbSAnLi4vbWV0YWRhdGEvRG9jTWV0YSc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vbG9nZ2VyL0xvZ2dlcic7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIEFubm90YXRpb25TaWRlYmFycyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZShkb2NNZXRhOiBEb2NNZXRhKTogU3BsaXR0ZXIge1xuXG4gICAgICAgIGNvbnN0IHNwbGl0dGVyID0gbmV3IFNwbGl0dGVyKCcucG9sYXItdmlld2VyJywgJy5wb2xhci1zaWRlYmFyJyk7XG5cbiAgICAgICAgY29uc3QgcG9sYXJTaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb2xhci1zaWRlYmFyXCIpISBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgcG9sYXJTaWRlYmFyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgICAgIHNwbGl0dGVyLmNvbGxhcHNlKCk7XG5cbiAgICAgICAgUmVhY3RET00ucmVuZGVyKFxuICAgICAgICAgICAgPEFubm90YXRpb25TaWRlYmFyIGRvY01ldGE9e2RvY01ldGF9IC8+LFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvbGFyLXNpZGViYXInKSBhcyBIVE1MRWxlbWVudFxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBzcGxpdHRlcjtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgc2Nyb2xsVG9Bbm5vdGF0aW9uKGlkOiBzdHJpbmcsIHBhZ2VOdW06IG51bWJlcikge1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdG9yID0gYC5wYWdlIGRpdltkYXRhLWFubm90YXRpb24taWQ9JyR7aWR9J11gO1xuXG4gICAgICAgIGNvbnN0IHBhZ2VFbGVtZW50czogSFRNTEVsZW1lbnRbXSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wYWdlXCIpKTtcbiAgICAgICAgY29uc3QgcGFnZUVsZW1lbnQgPSBwYWdlRWxlbWVudHNbcGFnZU51bSAtIDFdO1xuXG4gICAgICAgIGlmICghcGFnZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGxvZy5lcnJvcihgQ291bGQgbm90IGZpbmQgcGFnZSAke3BhZ2VOdW19IG9mIE4gcGFnZXM6ICR7cGFnZUVsZW1lbnRzLmxlbmd0aH1gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9FbGVtZW50KHBhZ2VFbGVtZW50KTtcblxuICAgICAgICBjb25zdCBhbm5vdGF0aW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgICAgIGlmIChhbm5vdGF0aW9uRWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0VsZW1lbnQoYW5ub3RhdGlvbkVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9nLndhcm4oXCJDb3VsZCBub3QgZmluZCBhbm5vdGF0aW9uIGVsZW1lbnQ6IFwiICsgc2VsZWN0b3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVE9ETzogZGlzYWJsZSB0aGlzIGZvciBub3cgYmVjYXVzZSB3aXRoIHRoZSBwYWdlbWFyayB0aGUgZmxhc2ggZG9lc1xuICAgICAgICAvLyBub3QgYWN0dWFsbHkgd29yay4gTWlncmF0ZSB0byB1c2luZyBzb21lIHR5cGUgb2YgcG9pbnRlciBzaG93aW5nIHRoZVxuICAgICAgICAvLyBwbGFjZSB0aGUgYW5ub3RhdGlvbiBpcyBtYXJrZWQuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIGNvbnN0IGZsYXNoQ2xhc3MgPSAnZmxhc2gtYmFja2dyb3VuZC1jb2xvcic7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLmZvckVhY2goY3VycmVudCA9PiB7XG4gICAgICAgIC8vICAgICBjdXJyZW50LmNsYXNzTGlzdC5hZGQoZmxhc2hDbGFzcyk7XG4gICAgICAgIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IGN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShmbGFzaENsYXNzKSwgMTAwMCk7XG4gICAgICAgIC8vIH0pO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgc2Nyb2xsVG9FbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnaW5zdGFudCcsXG4gICAgICAgICAgICBibG9jazogJ2NlbnRlcicsXG4gICAgICAgICAgICBpbmxpbmU6ICdjZW50ZXInXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gTk9URSB0aGF0ICdpbnN0YW50JyBpcyBhcHBhcmVudGx5IHVuc3VwcG9ydGVkIGluIHRoZSB0eXBlc2NyaXB0IHR5cGVcbiAgICAgICAgLy8gYnV0IGl0J3Mgc3VwcG9ydGVkIGluIEphdmFzY3JpcHQuXG4gICAgICAgIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcob3B0aW9ucyBhcyBTY3JvbGxJbnRvVmlld09wdGlvbnMpO1xuXG4gICAgfVxuXG5cbn1cbiJdfQ==