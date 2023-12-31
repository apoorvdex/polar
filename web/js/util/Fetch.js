"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
let response;
function fetch(url, init) {
    if (MockFetch.response) {
        return Promise.resolve(MockFetch.response);
    }
    if (typeof window !== 'undefined' && window.fetch) {
        return window.fetch(url, init);
    }
    return node_fetch_1.default(url, init);
}
exports.default = fetch;
class MockFetch {
}
exports.MockFetch = MockFetch;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmV0Y2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGZXRjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLDREQUFpRDtBQU9qRCxJQUFJLFFBQThCLENBQUM7QUFRbkMsU0FBd0IsS0FBSyxDQUFDLEdBQXFCLEVBQUUsSUFBa0I7SUFFbkUsSUFBSSxTQUFTLENBQUMsUUFBUSxFQUFFO1FBQ3BCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDOUM7SUFFRCxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO1FBQy9DLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDbEM7SUFFRCxPQUFPLG9CQUFVLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBRWpDLENBQUM7QUFaRCx3QkFZQztBQUVELE1BQWEsU0FBUztDQUlyQjtBQUpELDhCQUlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSZXF1ZXN0LCBSZXNwb25zZX0gZnJvbSAnbm9kZS1mZXRjaCc7XG5cbmltcG9ydCB7ZGVmYXVsdCBhcyBub2RlX2ZldGNofSBmcm9tICdub2RlLWZldGNoJztcblxuZGVjbGFyZSB2YXIgd2luZG93OiBhbnk7XG5cbi8qKlxuICogV2hlbiBkZWZpbmVkLCB3ZSB1c2UgdGhpcyBhcyBhIG1vY2sgcmVzcG9uc2UgYW5kIHJldHVybiBpdCBkaXJlY3RseS5cbiAqL1xubGV0IHJlc3BvbnNlOiBSZXNwb25zZSB8IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiBmZXRjaCB3aGljaCB1c2VzIG5vZGUtZmV0Y2ggd2hlbiBydW5uaW5nIGluIG5vZGUgb3JcbiAqIHdpbmRvdy5mZXRjaCB3aGVuIHJ1bm5pbmcgaW4gdGhlIEJyb3dzZXIuICBXZSBjYW4gYWxzbyBtb2NrIGl0IHRvIHRlc3QgdGhlXG4gKiBpbXBsZW1lbnRhdGlvbiBkaXJlY3RseSB3aXRob3V0IG5lZWRpbmcgYSBiYWNrZW5kIHNlcnZlciB0byBpbXBsZW1lbnQgdGhlXG4gKiBtZXRob2RzLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmZXRjaCh1cmw6IHN0cmluZyB8IFJlcXVlc3QsIGluaXQ/OiBSZXF1ZXN0SW5pdCk6IFByb21pc2U8UmVzcG9uc2U+IHtcblxuICAgIGlmIChNb2NrRmV0Y2gucmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShNb2NrRmV0Y2gucmVzcG9uc2UpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZmV0Y2gpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5mZXRjaCh1cmwsIGluaXQpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlX2ZldGNoKHVybCwgaW5pdCk7XG5cbn1cblxuZXhwb3J0IGNsYXNzIE1vY2tGZXRjaCB7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlc3BvbnNlPzogUmVzcG9uc2U7XG5cbn1cblxuLy8gd2UgaGF2ZSB0byB1c2UgYSBjdXN0b20gUmVxdWVzdEluaXQgdG8gYmUgY29tcGF0aWJsZSB3aXRoIG5vZGVfZmV0Y2ggYW5kIHdpbmRvdy5mZXRjaFxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0SW5pdCB7XG4gICAgYm9keT86IHN0cmluZyA7XG4gICAgY2FjaGU/OiBSZXF1ZXN0Q2FjaGU7XG4gICAgY3JlZGVudGlhbHM/OiBSZXF1ZXN0Q3JlZGVudGlhbHM7XG4gICAgaGVhZGVycz86IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9O1xuICAgIGludGVncml0eT86IHN0cmluZztcbiAgICBrZWVwYWxpdmU/OiBib29sZWFuO1xuICAgIG1ldGhvZD86IHN0cmluZztcbiAgICBtb2RlPzogUmVxdWVzdE1vZGU7XG4gICAgcmVkaXJlY3Q/OiBSZXF1ZXN0UmVkaXJlY3Q7XG4gICAgcmVmZXJyZXI/OiBzdHJpbmc7XG4gICAgcmVmZXJyZXJQb2xpY3k/OiBSZWZlcnJlclBvbGljeTtcbiAgICBzaWduYWw/OiBBYm9ydFNpZ25hbCB8IG51bGw7XG4gICAgd2luZG93PzogYW55O1xufVxuIl19