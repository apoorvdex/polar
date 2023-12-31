"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Dictionaries_1 = require("../../util/Dictionaries");
const Arrays_1 = require("../../util/Arrays");
class RelatedTags {
    constructor() {
        this.tagMetaIndex = {};
        this.docMetaIndex = {};
    }
    update(docID, mutationType, ...tags) {
        for (const tag of tags) {
            const tagMeta = Dictionaries_1.Dictionaries.computeIfAbsent(this.tagMetaIndex, tag, () => {
                return { tag, docs: new Set() };
            });
            switch (mutationType) {
                case 'set':
                    tagMeta.docs.add(docID);
                    break;
                case 'delete':
                    tagMeta.docs.delete(docID);
                    break;
            }
            const docMeta = Dictionaries_1.Dictionaries.computeIfAbsent(this.docMetaIndex, docID, () => {
                return { doc: docID, tags: [] };
            });
            docMeta.tags.push(tag);
        }
    }
    compute(tags, limit = 5) {
        const tagHits = {};
        const updateHits = (tag) => {
            const indexedTagMeta = this.tagMetaIndex[tag];
            if (!indexedTagMeta) {
                return;
            }
            const relatedDocs = indexedTagMeta.docs;
            for (const relatedDoc of relatedDocs) {
                const indexedDocMeta = this.docMetaIndex[relatedDoc];
                const relatedTags = indexedDocMeta.tags;
                for (const relatedTag of relatedTags) {
                    const tagHitMeta = Dictionaries_1.Dictionaries.computeIfAbsent(tagHits, relatedTag, () => {
                        return { tag: relatedTag, hits: 0 };
                    });
                    ++tagHitMeta.hits;
                }
            }
        };
        for (const tag of tags) {
            updateHits(tag);
        }
        const tagHitsDesc = Object.values(tagHits)
            .filter(current => !tags.includes(current.tag))
            .filter(current => current.hits > 1)
            .sort((hit0, hit1) => hit1.hits - hit0.hits);
        return Arrays_1.Arrays.head(tagHitsDesc, limit);
    }
}
exports.RelatedTags = RelatedTags;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVsYXRlZFRhZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJSZWxhdGVkVGFncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBEQUFxRDtBQUNyRCw4Q0FBeUM7QUFTekMsTUFBYSxXQUFXO0lBQXhCO1FBRVksaUJBQVksR0FBNkIsRUFBRSxDQUFDO1FBRTVDLGlCQUFZLEdBQStCLEVBQUUsQ0FBQztJQTZGMUQsQ0FBQztJQTNGVSxNQUFNLENBQUMsS0FBWSxFQUFFLFlBQTBCLEVBQUUsR0FBRyxJQUFrQjtRQUV6RSxLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksRUFBRTtZQUVwQixNQUFNLE9BQU8sR0FBRywyQkFBWSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUU7Z0JBQ3RFLE9BQU8sRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksR0FBRyxFQUFTLEVBQUMsQ0FBQztZQUN6QyxDQUFDLENBQUMsQ0FBQztZQUVILFFBQVEsWUFBWSxFQUFFO2dCQUVsQixLQUFLLEtBQUs7b0JBQ04sT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3hCLE1BQU07Z0JBRVYsS0FBSyxRQUFRO29CQUNULE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUMzQixNQUFNO2FBRWI7WUFFRCxNQUFNLE9BQU8sR0FBRywyQkFBWSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7Z0JBQ3hFLE9BQU8sRUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUMsQ0FBQztZQUNsQyxDQUFDLENBQUMsQ0FBQztZQUVILE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBRTFCO0lBRUwsQ0FBQztJQU1NLE9BQU8sQ0FBQyxJQUFrQixFQUFFLFFBQWdCLENBQUM7UUFHaEQsTUFBTSxPQUFPLEdBQTRCLEVBQUUsQ0FBQztRQUU1QyxNQUFNLFVBQVUsR0FBRyxDQUFDLEdBQWUsRUFBRSxFQUFFO1lBSW5DLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFOUMsSUFBSSxDQUFFLGNBQWMsRUFBRTtnQkFFbEIsT0FBTzthQUNWO1lBRUQsTUFBTSxXQUFXLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQztZQUV4QyxLQUFLLE1BQU0sVUFBVSxJQUFJLFdBQVcsRUFBRTtnQkFFbEMsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFFckQsTUFBTSxXQUFXLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQztnQkFFeEMsS0FBSyxNQUFNLFVBQVUsSUFBSSxXQUFXLEVBQUU7b0JBRWxDLE1BQU0sVUFBVSxHQUFHLDJCQUFZLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFO3dCQUN0RSxPQUFPLEVBQUMsR0FBRyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFDLENBQUM7b0JBQ3RDLENBQUMsQ0FBQyxDQUFDO29CQUVILEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQztpQkFFckI7YUFFSjtRQUVMLENBQUMsQ0FBQztRQUVGLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ3BCLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNuQjtRQUtELE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO2FBRXJDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDL0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7YUFFbkMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFHakQsT0FBTyxlQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUUzQyxDQUFDO0NBRUo7QUFqR0Qsa0NBaUdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaWN0aW9uYXJpZXN9IGZyb20gXCIuLi8uLi91dGlsL0RpY3Rpb25hcmllc1wiO1xuaW1wb3J0IHtBcnJheXN9IGZyb20gXCIuLi8uLi91dGlsL0FycmF5c1wiO1xuXG4vKipcbiAqIFJlbGF0ZWQgdGFnIGluZGV4IGZvciBpbiBtZW1vcnkgcmVsYXRlZCB0YWdzIGNvbXB1dGF0aW9uLiAgVGhpcyBkb2VzIG5vdFxuICogYWN0dWFsbHkgaW1wbGVtZW50IGFueSBmb3JtIG9mIGNvbXByZXNzZWQgZGF0YSBzdHJ1Y3R1cmUgYnV0IGluc3RlYWQgc3RvcmVzXG4gKiB0aGUgdmFsdWVzIGRpcmVjdGx5LiAgQSB1c2VycyBwZXJzb25hbCBkb2N1bWVudCB0YWcgaW5kZXggd29uJ3QgcmVxdWlyZVxuICogbXVjaCBpbi1tZW1vcnkgc3RvcmFnZS4gIE1heWJlIDEwMGsgTUFYIGV2ZW4gZm9yIG1hc3NpdmUgZG9jdW1lbnRcbiAqIGNvbGxlY3Rpb25zLlxuICovXG5leHBvcnQgY2xhc3MgUmVsYXRlZFRhZ3Mge1xuXG4gICAgcHJpdmF0ZSB0YWdNZXRhSW5kZXg6IHtbdGFnOiBzdHJpbmddOiBUYWdNZXRhfSA9IHt9O1xuXG4gICAgcHJpdmF0ZSBkb2NNZXRhSW5kZXg6IHtbZG9jSUQ6IHN0cmluZ106IERvY01ldGF9ID0ge307XG5cbiAgICBwdWJsaWMgdXBkYXRlKGRvY0lEOiBEb2NJRCwgbXV0YXRpb25UeXBlOiBNdXRhdGlvblR5cGUsIC4uLnRhZ3M6IFRhZ0xpdGVyYWxbXSkge1xuXG4gICAgICAgIGZvciAoY29uc3QgdGFnIG9mIHRhZ3MpIHtcblxuICAgICAgICAgICAgY29uc3QgdGFnTWV0YSA9IERpY3Rpb25hcmllcy5jb21wdXRlSWZBYnNlbnQodGhpcy50YWdNZXRhSW5kZXgsIHRhZywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7dGFnLCBkb2NzOiBuZXcgU2V0PERvY0lEPigpfTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKG11dGF0aW9uVHlwZSkge1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnc2V0JzpcbiAgICAgICAgICAgICAgICAgICAgdGFnTWV0YS5kb2NzLmFkZChkb2NJRCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnZGVsZXRlJzpcbiAgICAgICAgICAgICAgICAgICAgdGFnTWV0YS5kb2NzLmRlbGV0ZShkb2NJRCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGRvY01ldGEgPSBEaWN0aW9uYXJpZXMuY29tcHV0ZUlmQWJzZW50KHRoaXMuZG9jTWV0YUluZGV4LCBkb2NJRCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7ZG9jOiBkb2NJRCwgdGFnczogW119O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGRvY01ldGEudGFncy5wdXNoKHRhZyk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29tcHV0ZSByZWxhdGVkIHRhZ3MgZm9yIHRoZSBnaXZlbiB0YWdzLi4uXG4gICAgICogQHBhcmFtIHRhZ3NcbiAgICAgKi9cbiAgICBwdWJsaWMgY29tcHV0ZSh0YWdzOiBUYWdMaXRlcmFsW10sIGxpbWl0OiBudW1iZXIgPSA1KTogVGFnSGl0W10ge1xuXG4gICAgICAgIC8vIGtlZXAgYSBydW5uaW5nIGluZGV4IG9mIHRoZSBoaXRzIHdoZW4gY29tcHV0aW5nIHRoZSByZWxhdGVkIHRhZ3MuXG4gICAgICAgIGNvbnN0IHRhZ0hpdHM6IHtbdGFnOiBzdHJpbmddOiBUYWdIaXR9ID0ge307XG5cbiAgICAgICAgY29uc3QgdXBkYXRlSGl0cyA9ICh0YWc6IFRhZ0xpdGVyYWwpID0+IHtcblxuICAgICAgICAgICAgLy8gZ2V0IGFsbCB0aGUgZG9jdW1lbnRzIHRoYXQgbWVudGlvbiB0aGlzIHRhZ1xuXG4gICAgICAgICAgICBjb25zdCBpbmRleGVkVGFnTWV0YSA9IHRoaXMudGFnTWV0YUluZGV4W3RhZ107XG5cbiAgICAgICAgICAgIGlmICghIGluZGV4ZWRUYWdNZXRhKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcyB0YWcgaXNuJ3QgaW5kZXhlZCB5ZXQuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCByZWxhdGVkRG9jcyA9IGluZGV4ZWRUYWdNZXRhLmRvY3M7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgcmVsYXRlZERvYyBvZiByZWxhdGVkRG9jcykge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXhlZERvY01ldGEgPSB0aGlzLmRvY01ldGFJbmRleFtyZWxhdGVkRG9jXTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHJlbGF0ZWRUYWdzID0gaW5kZXhlZERvY01ldGEudGFncztcblxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcmVsYXRlZFRhZyBvZiByZWxhdGVkVGFncykge1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhZ0hpdE1ldGEgPSBEaWN0aW9uYXJpZXMuY29tcHV0ZUlmQWJzZW50KHRhZ0hpdHMsIHJlbGF0ZWRUYWcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7dGFnOiByZWxhdGVkVGFnLCBoaXRzOiAwfTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgKyt0YWdIaXRNZXRhLmhpdHM7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAoY29uc3QgdGFnIG9mIHRhZ3MpIHtcbiAgICAgICAgICAgIHVwZGF0ZUhpdHModGFnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHdlIG5vdyBoYXZlIGFsbCB0aGUgdGFncyB3aXRoIGhpdHMuLiBzbyBzY29yZSB0aGVtIGFuZCB0aGVuIGNvbXB1dGVcbiAgICAgICAgLy8gdGhlIHRvcCBOIGZvciBub3cuXG5cbiAgICAgICAgY29uc3QgdGFnSGl0c0Rlc2MgPSBPYmplY3QudmFsdWVzKHRhZ0hpdHMpXG4gICAgICAgICAgICAvLyByZW1vdmUgdGhlIGlucHV0IHRhZ3MgZnJvbSB0aGUgcmVzdWx0cy4uLlxuICAgICAgICAgICAgLmZpbHRlcihjdXJyZW50ID0+ICEgdGFncy5pbmNsdWRlcyhjdXJyZW50LnRhZykpXG4gICAgICAgICAgICAuZmlsdGVyKGN1cnJlbnQgPT4gY3VycmVudC5oaXRzID4gMSlcbiAgICAgICAgICAgIC8vIHNvcnQgdGhlIHJlc3VsdHMgZGVzY2VuZGluZy5cbiAgICAgICAgICAgIC5zb3J0KChoaXQwLCBoaXQxKSA9PiBoaXQxLmhpdHMgLSBoaXQwLmhpdHMpO1xuXG5cbiAgICAgICAgcmV0dXJuIEFycmF5cy5oZWFkKHRhZ0hpdHNEZXNjLCBsaW1pdCk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWdNZXRhIHtcbiAgICByZWFkb25seSB0YWc6IFRhZ0xpdGVyYWw7XG4gICAgcmVhZG9ubHkgZG9jczogU2V0PERvY0lEPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEb2NNZXRhIHtcbiAgICB0YWdzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWdIaXQge1xuXG4gICAgcmVhZG9ubHkgdGFnOiBUYWdMaXRlcmFsO1xuICAgIGhpdHM6IG51bWJlcjtcblxufVxuXG5leHBvcnQgdHlwZSBEb2NJRCA9IHN0cmluZztcblxuLyoqXG4gKiBBIGxpdGVyYWwgdGFnIHZhbHVlIGFzIGEgc3RyaW5nLlxuICovXG5leHBvcnQgdHlwZSBUYWdMaXRlcmFsID0gc3RyaW5nO1xuXG5leHBvcnQgdHlwZSBNdXRhdGlvblR5cGUgPSAnc2V0JyB8ICdkZWxldGUnO1xuIl19