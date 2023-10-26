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
const Logger_1 = require("../../logger/Logger");
const Preconditions_1 = require("../../Preconditions");
const FrameResizer_1 = require("./FrameResizer");
const Functions_1 = require("../../util/Functions");
const log = Logger_1.Logger.create();
const MAX_RESIZES = 25;
class BackgroundFrameResizer {
    constructor(parent, host, onResized = Functions_1.NULL_FUNCTION) {
        this.timeoutInterval = 250;
        this.resizes = 0;
        this.parent = Preconditions_1.Preconditions.assertPresent(parent);
        this.host = Preconditions_1.Preconditions.assertPresent(host);
        this.onResized = onResized;
        this.frameResizer = new FrameResizer_1.FrameResizer(parent, host);
    }
    start() {
        this.resizeParentInBackground()
            .catch(err => log.error("Could not resize in background: ", err));
    }
    resizeParentInBackground() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.resizes > MAX_RESIZES) {
                log.info("Hit MAX_RESIZES: " + MAX_RESIZES);
                const height = yield this.doBackgroundResize(true);
                this.onResized(height);
                return;
            }
            else {
                yield this.doBackgroundResize(false);
            }
            setTimeout(() => this.resizeParentInBackground(), this.timeoutInterval);
        });
    }
    doBackgroundResize(force) {
        return __awaiter(this, void 0, void 0, function* () {
            ++this.resizes;
            return this.frameResizer.resize(force);
        });
    }
}
exports.BackgroundFrameResizer = BackgroundFrameResizer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFja2dyb3VuZEZyYW1lUmVzaXplci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkJhY2tncm91bmRGcmFtZVJlc2l6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUMzQyx1REFBa0Q7QUFDbEQsaURBQTRDO0FBQzVDLG9EQUFtRDtBQUVuRCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDO0FBV3ZCLE1BQWEsc0JBQXNCO0lBYy9CLFlBQVksTUFBbUIsRUFDbkIsSUFBNkMsRUFDN0MsWUFBK0IseUJBQWE7UUFWdkMsb0JBQWUsR0FBRyxHQUFHLENBQUM7UUFFL0IsWUFBTyxHQUFXLENBQUMsQ0FBQztRQVV4QixJQUFJLENBQUMsTUFBTSxHQUFHLDZCQUFhLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxJQUFJLEdBQUcsNkJBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFFM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLDJCQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRXZELENBQUM7SUFFTSxLQUFLO1FBRVIsSUFBSSxDQUFDLHdCQUF3QixFQUFFO2FBQzFCLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsa0NBQWtDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUUxRSxDQUFDO0lBRWEsd0JBQXdCOztZQUVsQyxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxFQUFFO2dCQUM1QixHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFdBQVcsQ0FBQyxDQUFDO2dCQUM1QyxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFFdkIsT0FBTzthQUNWO2lCQUFNO2dCQUNILE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3hDO1lBRUQsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUU1RSxDQUFDO0tBQUE7SUFTYSxrQkFBa0IsQ0FBQyxLQUFjOztZQUUzQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUM7WUFFZixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTNDLENBQUM7S0FBQTtDQUVKO0FBaEVELHdEQWdFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7UHJlY29uZGl0aW9uc30gZnJvbSAnLi4vLi4vUHJlY29uZGl0aW9ucyc7XG5pbXBvcnQge0ZyYW1lUmVzaXplcn0gZnJvbSAnLi9GcmFtZVJlc2l6ZXInO1xuaW1wb3J0IHtOVUxMX0ZVTkNUSU9OfSBmcm9tICcuLi8uLi91dGlsL0Z1bmN0aW9ucyc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuY29uc3QgTUFYX1JFU0laRVMgPSAyNTtcblxuLyoqXG4gKiBMaXN0ZW5zIHRvIHRoZSBtYWluIGlmcmFtZSBsb2FkIGFuZCByZXNpemVzIGl0IGFwcHJvcHJpYXRlbHkgYmFzZWQgb24gdGhlXG4gKiBzY3JvbGwgaGVpZ2h0IG9mIHRoZSBkb2N1bWVudC5cbiAqXG4gKiBUaGUgbG9hZGVyIHBvbGxzIHRoZSBjb250ZW50IGlmcmFtZSBldmVyeSA1MG1zIGFuZCBpZiB0aGUgaGVpZ2h0IGNoYW5nZXNcbiAqIGF1dG9tYXRpY2FsbHkgc3luY2hyb25pemVzIGl0IHdpdGggdGhlIGNvbnRlbnQgZG9jdW1lbnQuICBUaGVyZSdzIHJlYWxseSBub1xuICogd2F5IHRvIGdldCBsb2FkaW5nICdwcm9ncmVzcycgc28gdGhlIHRyaWNrIGlzIHRvIGp1c3QgcG9sbCBmYXN0IGVub3VnaCB0byBnZXRcbiAqIHRoZSBkb2N1bWVudCBzaXplIHNvIHRoYXQgdGhlIHVzZXIgbmV2ZXIgbm90aWNlcy5cbiAqL1xuZXhwb3J0IGNsYXNzIEJhY2tncm91bmRGcmFtZVJlc2l6ZXIge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBwYXJlbnQ6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgaG9zdDogSFRNTElGcmFtZUVsZW1lbnQgfCBFbGVjdHJvbi5XZWJ2aWV3VGFnO1xuXG4gICAgLy8gaG93IGxvbmcgYmV0d2VlbiBwb2xsaW5nIHNob3VsZCB3ZSB3YWl0IHRvIGV4cGFuZCB0aGUgc2l6ZS5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHRpbWVvdXRJbnRlcnZhbCA9IDI1MDtcblxuICAgIHByaXZhdGUgcmVzaXplczogbnVtYmVyID0gMDtcblxuICAgIHByaXZhdGUgZnJhbWVSZXNpemVyOiBGcmFtZVJlc2l6ZXI7XG5cbiAgICBwcml2YXRlIG9uUmVzaXplZDogT25SZXNpemVkQ2FsbGJhY2s7XG5cbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQ6IEhUTUxFbGVtZW50LFxuICAgICAgICAgICAgICAgIGhvc3Q6IEhUTUxJRnJhbWVFbGVtZW50IHwgRWxlY3Ryb24uV2Vidmlld1RhZyxcbiAgICAgICAgICAgICAgICBvblJlc2l6ZWQ6IE9uUmVzaXplZENhbGxiYWNrID0gTlVMTF9GVU5DVElPTikge1xuXG4gICAgICAgIHRoaXMucGFyZW50ID0gUHJlY29uZGl0aW9ucy5hc3NlcnRQcmVzZW50KHBhcmVudCk7XG4gICAgICAgIHRoaXMuaG9zdCA9IFByZWNvbmRpdGlvbnMuYXNzZXJ0UHJlc2VudChob3N0KTtcbiAgICAgICAgdGhpcy5vblJlc2l6ZWQgPSBvblJlc2l6ZWQ7XG5cbiAgICAgICAgdGhpcy5mcmFtZVJlc2l6ZXIgPSBuZXcgRnJhbWVSZXNpemVyKHBhcmVudCwgaG9zdCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnQoKSB7XG5cbiAgICAgICAgdGhpcy5yZXNpemVQYXJlbnRJbkJhY2tncm91bmQoKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJDb3VsZCBub3QgcmVzaXplIGluIGJhY2tncm91bmQ6IFwiLCBlcnIpKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgcmVzaXplUGFyZW50SW5CYWNrZ3JvdW5kKCkge1xuXG4gICAgICAgIGlmICh0aGlzLnJlc2l6ZXMgPiBNQVhfUkVTSVpFUykge1xuICAgICAgICAgICAgbG9nLmluZm8oXCJIaXQgTUFYX1JFU0laRVM6IFwiICsgTUFYX1JFU0laRVMpO1xuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gYXdhaXQgdGhpcy5kb0JhY2tncm91bmRSZXNpemUodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLm9uUmVzaXplZChoZWlnaHQpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmRvQmFja2dyb3VuZFJlc2l6ZShmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmVzaXplUGFyZW50SW5CYWNrZ3JvdW5kKCksIHRoaXMudGltZW91dEludGVydmFsKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm0gdGhlIHJlc2l6ZSBub3cuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZm9yY2UgVHJ1ZSB3aGVuIHRoaXMgaXMgdGhlIGZpbmFsIHJlc2l6ZSBiZWZvcmUgdGVybWluYXRpbmcuICBUaGlzXG4gICAgICogd2F5LCBpZiB3ZSdyZSBkb2luZyBhbnkgc29ydCBvZiBjYWNoaW5nIG9yIHRocm90dGxpbmcgb2YgcmVzaXplLCB3ZSBjYW5cbiAgICAgKiBqdXN0IGZvcmNlIGl0IG9uZSBsYXN0IHRpbWUuXG4gICAgICovXG4gICAgcHJpdmF0ZSBhc3luYyBkb0JhY2tncm91bmRSZXNpemUoZm9yY2U6IGJvb2xlYW4pIHtcblxuICAgICAgICArK3RoaXMucmVzaXplcztcblxuICAgICAgICByZXR1cm4gdGhpcy5mcmFtZVJlc2l6ZXIucmVzaXplKGZvcmNlKTtcblxuICAgIH1cblxufVxuXG50eXBlIE9uUmVzaXplZENhbGxiYWNrID0gKGhlaWdodDogbnVtYmVyIHwgdW5kZWZpbmVkKSA9PiB2b2lkO1xuIl19