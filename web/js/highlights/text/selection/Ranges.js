"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Preconditions_1 = require("../../../Preconditions");
const Logger_1 = require("../../../logger/Logger");
const log = Logger_1.Logger.create();
class Ranges {
    static cloneRanges(ranges) {
        return ranges.map(range => range.cloneRange());
    }
    static splitTextNode(container, offset, useStartBoundary) {
        if (container.nodeType !== Node.TEXT_NODE &&
            container.nodeType !== Node.COMMENT_NODE &&
            container.nodeType !== Node.CDATA_SECTION_NODE) {
            if (offset > 0) {
                return container.childNodes[offset];
            }
            return container;
        }
        const newNode = container.splitText(offset);
        if (useStartBoundary) {
            return newNode;
        }
        else {
            return newNode.previousSibling;
        }
    }
    static toHTML(range) {
        let result = "";
        const docFragment = range.cloneContents();
        docFragment.childNodes.forEach(childNode => {
            if (childNode.nodeType === Node.TEXT_NODE) {
                result += childNode.textContent;
            }
            else {
                result += childNode.outerHTML;
            }
        });
        return result;
    }
    static getTextNodes(range) {
        Preconditions_1.Preconditions.assertNotNull(range, "range");
        const startNode = Ranges.splitTextNode(range.startContainer, range.startOffset, true);
        const endNode = Ranges.splitTextNode(range.endContainer, range.endOffset, false);
        Preconditions_1.Preconditions.assertNotNull(startNode, "startNode");
        Preconditions_1.Preconditions.assertNotNull(endNode, "endNode");
        const doc = range.startContainer.ownerDocument;
        const treeWalker = doc.createTreeWalker(range.commonAncestorContainer);
        const result = [];
        let node;
        let inSelection = false;
        while (node = treeWalker.nextNode()) {
            if (startNode === node) {
                inSelection = true;
                break;
            }
        }
        while (node) {
            if (node.nodeType === Node.TEXT_NODE) {
                result.push(node);
            }
            if (endNode === node) {
                break;
            }
            node = treeWalker.nextNode();
        }
        return result;
    }
    static hasText(range) {
        Preconditions_1.Preconditions.assertNotNull(range, "range");
        const startNode = Ranges.splitTextNode(range.startContainer, range.startOffset, true);
        const endNode = Ranges.splitTextNode(range.endContainer, range.endOffset, false);
        Preconditions_1.Preconditions.assertNotNull(startNode, "startNode");
        Preconditions_1.Preconditions.assertNotNull(endNode, "endNode");
        const doc = range.startContainer.ownerDocument;
        const treeWalker = doc.createTreeWalker(range.commonAncestorContainer);
        const result = [];
        let node;
        let inSelection = false;
        while (node = treeWalker.nextNode()) {
            if (startNode === node) {
                inSelection = true;
                break;
            }
        }
        while (node) {
            if (node.nodeType === Node.TEXT_NODE) {
                if (node.textContent && node.textContent.trim() !== '') {
                    return true;
                }
            }
            if (endNode === node) {
                break;
            }
            node = treeWalker.nextNode();
        }
        return false;
    }
    static describeNode(node) {
        return node.cloneNode(false).outerHTML;
    }
}
exports.Ranges = Ranges;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmFuZ2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUmFuZ2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMERBQXFEO0FBQ3JELG1EQUE4QztBQUc5QyxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSxNQUFNO0lBT1IsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFlO1FBQ3JDLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFNTSxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQWUsRUFDZixNQUFjLEVBQ2QsZ0JBQXlCO1FBRWpELElBQUksU0FBUyxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsU0FBUztZQUNyQyxTQUFTLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxZQUFZO1lBQ3hDLFNBQVMsQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBRWhELElBQUksTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFRWixPQUFPLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7YUFFdkM7WUFFRCxPQUFPLFNBQVMsQ0FBQztTQUVwQjtRQUdELE1BQU0sT0FBTyxHQUFXLFNBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFckQsSUFBSSxnQkFBZ0IsRUFBRTtZQUNsQixPQUFPLE9BQU8sQ0FBQztTQUNsQjthQUFNO1lBQ0gsT0FBTyxPQUFPLENBQUMsZUFBZ0IsQ0FBQztTQUNuQztJQUVMLENBQUM7SUFNTSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQVk7UUFFN0IsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBRWhCLE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUUxQyxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FB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QVMsS0FBSyxJQUFJLEVBQUU7Z0JBQ3BCLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBQ25CLE1BQU07YUFDVDtTQUVKO1FBSUQsT0FBTyxJQUFJLEVBQUU7WUFFVCxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFFbEMsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO29CQUNwRCxPQUFPLElBQUksQ0FBQztpQkFDZjthQUVKO1lBRUQsSUFBSSxPQUFPLEtBQUssSUFBSSxFQUFFO2dCQUNsQixNQUFNO2FBQ1Q7WUFFRCxJQUFJLEdBQUcsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBRWhDO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFFakIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBVTtRQUNqQyxPQUFzQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBRSxDQUFDLFNBQVMsQ0FBQztJQUMzRCxDQUFDO0NBRUo7QUFsTkQsd0JBa05DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQcmVjb25kaXRpb25zfSBmcm9tICcuLi8uLi8uLi9QcmVjb25kaXRpb25zJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi8uLi9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7Tm9kZVR5cGVzfSBmcm9tICcuL05vZGVUeXBlcyc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIFJhbmdlcyB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgZHVwbGljYXRlIG9mIHRoZSBnaXZlbiByYW5nZXMgc28gdGhhdCB3ZSBjYW4ga25vdyB0aGF0IHdlIGhhdmVcbiAgICAgKiBvdXIgb3duIHVuaXF1ZSBjb3BpZXMgdGhhdCBjYW4ndCBiZSByZXNldC5cbiAgICAgKlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY2xvbmVSYW5nZXMocmFuZ2VzOiBSYW5nZVtdKSB7XG4gICAgICAgIHJldHVybiByYW5nZXMubWFwKHJhbmdlID0+IHJhbmdlLmNsb25lUmFuZ2UoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3BsaXQgYSB0ZXh0IG5vZGUgYW5kIGdldCB0aGUgbmV3IC8gc3RhcnRpbmcgbm9kZS5cbiAgICAgKlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgc3BsaXRUZXh0Tm9kZShjb250YWluZXI6IE5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldDogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VTdGFydEJvdW5kYXJ5OiBib29sZWFuKSB7XG5cbiAgICAgICAgaWYgKGNvbnRhaW5lci5ub2RlVHlwZSAhPT0gTm9kZS5URVhUX05PREUgJiZcbiAgICAgICAgICAgIGNvbnRhaW5lci5ub2RlVHlwZSAhPT0gTm9kZS5DT01NRU5UX05PREUgJiZcbiAgICAgICAgICAgIGNvbnRhaW5lci5ub2RlVHlwZSAhPT0gTm9kZS5DREFUQV9TRUNUSU9OX05PREUpIHtcblxuICAgICAgICAgICAgaWYgKG9mZnNldCA+IDApIHtcblxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBzdGFydE5vZGUgaXMgYSBOb2RlIG9mIHR5cGUgVGV4dCwgQ29tbWVudCwgb3JcbiAgICAgICAgICAgICAgICAvLyBDREFUQVNlY3Rpb24sIHRoZW4gc3RhcnRPZmZzZXQgaXMgdGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgICAgICAgICAgICAgLy8gZnJvbSB0aGUgc3RhcnQgb2Ygc3RhcnROb2RlLiBGb3Igb3RoZXIgTm9kZSB0eXBlcyxcbiAgICAgICAgICAgICAgICAvLyBzdGFydE9mZnNldCBpcyB0aGUgbnVtYmVyIG9mIGNoaWxkIG5vZGVzIGJldHdlZW4gdGhlIHN0YXJ0IG9mXG4gICAgICAgICAgICAgICAgLy8gdGhlIHN0YXJ0Tm9kZS5cblxuICAgICAgICAgICAgICAgIHJldHVybiBjb250YWluZXIuY2hpbGROb2Rlc1tvZmZzZXRdO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjb250YWluZXI7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRPRE86IHRoaXMgaXMgbm90IG5lY2Vzc2FyaWx5IGEgdGV4dCBub2RlIGJ1dCB3ZSdyZSBjYXN0aW5nIGl0Li4uXG4gICAgICAgIGNvbnN0IG5ld05vZGUgPSAoPFRleHQ+IGNvbnRhaW5lcikuc3BsaXRUZXh0KG9mZnNldCk7XG5cbiAgICAgICAgaWYgKHVzZVN0YXJ0Qm91bmRhcnkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXdOb2RlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ld05vZGUucHJldmlvdXNTaWJsaW5nITtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIEhUTUwgY29udGVudCBvZiB0aGUgcmFuZ2Ugc2VsZWN0ZWQuXG4gICAgICpcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHRvSFRNTChyYW5nZTogUmFuZ2UpIHtcblxuICAgICAgICBsZXQgcmVzdWx0ID0gXCJcIjtcblxuICAgICAgICBjb25zdCBkb2NGcmFnbWVudCA9IHJhbmdlLmNsb25lQ29udGVudHMoKTtcblxuICAgICAgICBkb2NGcmFnbWVudC5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGROb2RlID0+IHtcblxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gY2hpbGROb2RlLnRleHRDb250ZW50O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gKDxIVE1MRWxlbWVudD4gY2hpbGROb2RlKS5vdXRlckhUTUw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgdGV4dCBub2RlcyBmb3IgcmFuZ2UuIE9wdGlvbmFsbHkgc3BsaXR0aW5nIHRoZSB0ZXh0IGlmIG5lY2Vzc2FyeVxuICAgICAqXG4gICAgICogQHBhcmFtIHJhbmdlIHtSYW5nZX1cbiAgICAgKiBAcmV0dXJuIHtBcnJheTxOb2RlPn1cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldFRleHROb2RlcyhyYW5nZTogUmFuZ2UpIHtcblxuICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydE5vdE51bGwocmFuZ2UsIFwicmFuZ2VcIik7XG5cbiAgICAgICAgLy8gV2Ugc3RhcnQgd2Fsa2luZyB0aGUgdHJlZSB1bnRpbCB3ZSBmaW5kIHRoZSBzdGFydCBub2RlLCB0aGVuIHdlXG4gICAgICAgIC8vIGVuYWJsZSBzZXQgaW5TZWxlY3Rpb24gPSB0cnVlLi4uIHRoZW4gd2hlbiB3ZSBleGl0IHRoZSBzZWxlY3Rpb24gYnlcbiAgICAgICAgLy8gaGl0dGluZyB0aGUgZW5kIG5vZGUgd2UganVzdCByZXR1cm4gb3V0IG9mIHRoZSB3aGlsZSBsb29wIGFuZCB3ZSdyZVxuICAgICAgICAvLyBkb25lXG5cbiAgICAgICAgY29uc3Qgc3RhcnROb2RlID0gUmFuZ2VzLnNwbGl0VGV4dE5vZGUocmFuZ2Uuc3RhcnRDb250YWluZXIsIHJhbmdlLnN0YXJ0T2Zmc2V0LCB0cnVlKTtcbiAgICAgICAgY29uc3QgZW5kTm9kZSA9IFJhbmdlcy5zcGxpdFRleHROb2RlKHJhbmdlLmVuZENvbnRhaW5lciwgcmFuZ2UuZW5kT2Zmc2V0LCBmYWxzZSk7XG5cbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnROb3ROdWxsKHN0YXJ0Tm9kZSwgXCJzdGFydE5vZGVcIik7XG4gICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0Tm90TnVsbChlbmROb2RlLCBcImVuZE5vZGVcIik7XG5cbiAgICAgICAgY29uc3QgZG9jID0gcmFuZ2Uuc3RhcnRDb250YWluZXIub3duZXJEb2N1bWVudCE7XG5cbiAgICAgICAgLy8gdXNlIFRyZWVXYWxrZXIgdG8gd2FsayB0aGUgY29tbW9uQW5jZXN0b3JDb250YWluZXIgYW5kIHdlIHNlZSB3aGljaFxuICAgICAgICAvLyByYW5nZXMgY29udGFpbiB3aGljaCB0ZXh0IG5vZGVzLlxuICAgICAgICBjb25zdCB0cmVlV2Fsa2VyID0gZG9jLmNyZWF0ZVRyZWVXYWxrZXIocmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXIpO1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuXG4gICAgICAgIGxldCBub2RlO1xuXG4gICAgICAgIGxldCBpblNlbGVjdGlvbiA9IGZhbHNlO1xuXG4gICAgICAgIC8vICoqIHRyYXZlcnNlIHVudGlsIHdlIGZpbmQgdGhlIHN0YXJ0XG4gICAgICAgIHdoaWxlIChub2RlID0gdHJlZVdhbGtlci5uZXh0Tm9kZSgpKSB7XG4gICAgICAgICAgICBpZiAoc3RhcnROb2RlID09PSBub2RlKSB7XG4gICAgICAgICAgICAgICAgaW5TZWxlY3Rpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICAvLyAqKiBub3cga2VlcCBjb25zdW1pbmcgdW50aWwgd2UgaGl0IHRoZSBsYXN0IG5vZGUuXG5cbiAgICAgICAgd2hpbGUgKG5vZGUpIHtcblxuICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobm9kZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbmROb2RlID09PSBub2RlKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5vZGUgPSB0cmVlV2Fsa2VyLm5leHROb2RlKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaW1pbGFyIHRvIGdldFRleHROb2RlcyBidXQgd2UgcmV0dXJuIHRydWUgaWYgdGhlIG5vZGVzIGhhdmUgdGV4dCBpbiB0aGVtLlxuICAgICAqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmFuZ2VcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGhhc1RleHQocmFuZ2U6IFJhbmdlKSB7XG5cbiAgICAgICAgLy8gVE9ETyBtYXNzaXZlIGFtb3VudCBvZiBkdXBsaWNhdGlvbiB3aXRoIGdldFRleHROb2RlcyBhbmQgbWlnaHQgYmVcbiAgICAgICAgLy8gdmFsdWFibGUgdG8gcmV3b3JrIHRoaXMgdG8gYSB2aXNpdG9yIHBhdHRlcm4gd2hpY2ggYWNjZXB0cyBhIGZ1bmN0aW9uXG4gICAgICAgIC8vIHdoaWNoIHJldHVybnMgdHJ1ZSBpZiB3ZSBzaG91bGQga2VlcCBtb3ZpbmcgZm9yd2FyZC5cblxuICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydE5vdE51bGwocmFuZ2UsIFwicmFuZ2VcIik7XG5cbiAgICAgICAgLy8gV2Ugc3RhcnQgd2Fsa2luZyB0aGUgdHJlZSB1bnRpbCB3ZSBmaW5kIHRoZSBzdGFydCBub2RlLCB0aGVuIHdlXG4gICAgICAgIC8vIGVuYWJsZSBzZXQgaW5TZWxlY3Rpb24gPSB0cnVlLi4uIHRoZW4gd2hlbiB3ZSBleGl0IHRoZSBzZWxlY3Rpb24gYnlcbiAgICAgICAgLy8gaGl0dGluZyB0aGUgZW5kIG5vZGUgd2UganVzdCByZXR1cm4gb3V0IG9mIHRoZSB3aGlsZSBsb29wIGFuZCB3ZSdyZVxuICAgICAgICAvLyBkb25lXG5cbiAgICAgICAgY29uc3Qgc3RhcnROb2RlID0gUmFuZ2VzLnNwbGl0VGV4dE5vZGUocmFuZ2Uuc3RhcnRDb250YWluZXIsIHJhbmdlLnN0YXJ0T2Zmc2V0LCB0cnVlKTtcbiAgICAgICAgY29uc3QgZW5kTm9kZSA9IFJhbmdlcy5zcGxpdFRleHROb2RlKHJhbmdlLmVuZENvbnRhaW5lciwgcmFuZ2UuZW5kT2Zmc2V0LCBmYWxzZSk7XG5cbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnROb3ROdWxsKHN0YXJ0Tm9kZSwgXCJzdGFydE5vZGVcIik7XG4gICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0Tm90TnVsbChlbmROb2RlLCBcImVuZE5vZGVcIik7XG5cbiAgICAgICAgY29uc3QgZG9jID0gcmFuZ2Uuc3RhcnRDb250YWluZXIub3duZXJEb2N1bWVudCE7XG5cbiAgICAgICAgLy8gdXNlIFRyZWVXYWxrZXIgdG8gd2FsayB0aGUgY29tbW9uQW5jZXN0b3JDb250YWluZXIgYW5kIHdlIHNlZSB3aGljaFxuICAgICAgICAvLyByYW5nZXMgY29udGFpbiB3aGljaCB0ZXh0IG5vZGVzLlxuICAgICAgICBjb25zdCB0cmVlV2Fsa2VyID0gZG9jLmNyZWF0ZVRyZWVXYWxrZXIocmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXIpO1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuXG4gICAgICAgIGxldCBub2RlO1xuXG4gICAgICAgIGxldCBpblNlbGVjdGlvbiA9IGZhbHNlO1xuXG4gICAgICAgIC8vICoqIHRyYXZlcnNlIHVudGlsIHdlIGZpbmQgdGhlIHN0YXJ0XG4gICAgICAgIHdoaWxlIChub2RlID0gdHJlZVdhbGtlci5uZXh0Tm9kZSgpKSB7XG4gICAgICAgICAgICBpZiAoc3RhcnROb2RlID09PSBub2RlKSB7XG4gICAgICAgICAgICAgICAgaW5TZWxlY3Rpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICAvLyAqKiBub3cga2VlcCBjb25zdW1pbmcgdW50aWwgd2UgaGl0IHRoZSBsYXN0IG5vZGUuXG5cbiAgICAgICAgd2hpbGUgKG5vZGUpIHtcblxuICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAobm9kZS50ZXh0Q29udGVudCAmJiBub2RlLnRleHRDb250ZW50LnRyaW0oKSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbmROb2RlID09PSBub2RlKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5vZGUgPSB0cmVlV2Fsa2VyLm5leHROb2RlKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZGVzY3JpYmVOb2RlKG5vZGU6IE5vZGUpIHtcbiAgICAgICAgcmV0dXJuICg8SFRNTEVsZW1lbnQ+IG5vZGUuY2xvbmVOb2RlKGZhbHNlKSkub3V0ZXJIVE1MO1xuICAgIH1cblxufVxuIl19