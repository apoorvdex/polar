"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Preconditions_1 = require("../../Preconditions");
class IFrames {
    static waitForContentDocument(iframe, options = { currentURL: 'about:blank' }) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                function timer() {
                    if (iframe.contentDocument && iframe.contentDocument.location.href !== options.currentURL) {
                        resolve(iframe.contentDocument);
                        return;
                    }
                    setTimeout(timer, 100);
                }
                timer();
            });
        });
    }
    static computeTopLevelClientRect(clientRect, win) {
        while (Preconditions_1.isPresent(win.frameElement)) {
            let iframeClientRect = win.frameElement.getBoundingClientRect();
            let left = clientRect.left + iframeClientRect.left;
            let top = clientRect.top + iframeClientRect.top;
            let width = clientRect.width;
            let height = clientRect.height;
            let bottom = top + height;
            let right = left + width;
            clientRect = { left, top, width, height, bottom, right };
            win = win.parent;
        }
        return clientRect;
    }
}
exports.IFrames = IFrames;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSUZyYW1lcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIklGcmFtZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVEQUE4QztBQUU5QyxNQUFhLE9BQU87SUFFVCxNQUFNLENBQU8sc0JBQXNCLENBQUMsTUFBeUIsRUFDekIsVUFBeUMsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFDOztZQUU1RyxPQUFPLElBQUksT0FBTyxDQUFlLE9BQU8sQ0FBQyxFQUFFO2dCQUV2QyxTQUFTLEtBQUs7b0JBRVYsSUFBRyxNQUFNLENBQUMsZUFBZSxJQUFJLE1BQU0sQ0FBQyxlQUFnQixDQUFDLFFBQVMsQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLFVBQVUsRUFBRTt3QkFDeEYsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQzt3QkFDaEMsT0FBTztxQkFDVjtvQkFFRCxVQUFVLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUMzQixDQUFDO2dCQUVELEtBQUssRUFBRSxDQUFDO1lBRVosQ0FBQyxDQUFDLENBQUM7UUFFUCxDQUFDO0tBQUE7SUFTTSxNQUFNLENBQUMseUJBQXlCLENBQUMsVUFBc0IsRUFBRSxHQUFXO1FBRXZFLE9BQU0seUJBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFFL0IsSUFBSSxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFFaEUsSUFBSSxJQUFJLEdBQUcsVUFBVSxDQUFDLElBQUksR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7WUFDbkQsSUFBSSxHQUFHLEdBQUcsVUFBVSxDQUFDLEdBQUcsR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7WUFDaEQsSUFBSSxLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztZQUM3QixJQUFJLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO1lBQy9CLElBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7WUFDMUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztZQUV6QixVQUFVLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO1lBRXpELEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1NBRXBCO1FBRUQsT0FBTyxVQUFVLENBQUM7SUFFdEIsQ0FBQztDQUVKO0FBckRELDBCQXFEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNQcmVzZW50fSBmcm9tICcuLi8uLi9QcmVjb25kaXRpb25zJztcblxuZXhwb3J0IGNsYXNzIElGcmFtZXMge1xuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyB3YWl0Rm9yQ29udGVudERvY3VtZW50KGlmcmFtZTogSFRNTElGcmFtZUVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFdhaXRGb3JDb250ZW50RG9jdW1lbnRPcHRpb25zID0geyBjdXJyZW50VVJMOiAnYWJvdXQ6YmxhbmsnfSk6IFByb21pc2U8SFRNTERvY3VtZW50PiB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPEhUTUxEb2N1bWVudD4ocmVzb2x2ZSA9PiB7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHRpbWVyKCkge1xuXG4gICAgICAgICAgICAgICAgaWYoaWZyYW1lLmNvbnRlbnREb2N1bWVudCAmJiBpZnJhbWUuY29udGVudERvY3VtZW50IS5sb2NhdGlvbiEuaHJlZiAhPT0gb3B0aW9ucy5jdXJyZW50VVJMKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoaWZyYW1lLmNvbnRlbnREb2N1bWVudCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHRpbWVyLCAxMDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aW1lcigpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29tcHV0ZSB0aGUgcmVjdCBpbiB0aGUgZ2l2ZW4gd2luZG93IGZyb20gdGhlIHBlcnNwZWN0aXZlIG9mIHRoZSB0b3AgbGV2ZWxcbiAgICAgKiB3aW5kb3cuICBXZSB1c2UgdGhlIGZyYW1lRWxlbWVudCBhbmQgd2FsayBiYWNrd2FyZHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2xpZW50UmVjdFxuICAgICAqIEBwYXJhbSB3aW5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGNvbXB1dGVUb3BMZXZlbENsaWVudFJlY3QoY2xpZW50UmVjdDogQ2xpZW50UmVjdCwgd2luOiBXaW5kb3cpOiBDbGllbnRSZWN0IHtcblxuICAgICAgICB3aGlsZShpc1ByZXNlbnQod2luLmZyYW1lRWxlbWVudCkpIHtcblxuICAgICAgICAgICAgbGV0IGlmcmFtZUNsaWVudFJlY3QgPSB3aW4uZnJhbWVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgICAgICBsZXQgbGVmdCA9IGNsaWVudFJlY3QubGVmdCArIGlmcmFtZUNsaWVudFJlY3QubGVmdDtcbiAgICAgICAgICAgIGxldCB0b3AgPSBjbGllbnRSZWN0LnRvcCArIGlmcmFtZUNsaWVudFJlY3QudG9wO1xuICAgICAgICAgICAgbGV0IHdpZHRoID0gY2xpZW50UmVjdC53aWR0aDtcbiAgICAgICAgICAgIGxldCBoZWlnaHQgPSBjbGllbnRSZWN0LmhlaWdodDtcbiAgICAgICAgICAgIGxldCBib3R0b20gPSB0b3AgKyBoZWlnaHQ7XG4gICAgICAgICAgICBsZXQgcmlnaHQgPSBsZWZ0ICsgd2lkdGg7XG5cbiAgICAgICAgICAgIGNsaWVudFJlY3QgPSB7IGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCwgYm90dG9tLCByaWdodCB9O1xuXG4gICAgICAgICAgICB3aW4gPSB3aW4ucGFyZW50O1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2xpZW50UmVjdDtcblxuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgV2FpdEZvckNvbnRlbnREb2N1bWVudE9wdGlvbnMge1xuICAgIHJlYWRvbmx5IGN1cnJlbnRVUkw6IHN0cmluZztcbn1cbiJdfQ==