"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const CIDProvider_1 = require("./CIDProvider");
const Logger_1 = require("../logger/Logger");
const Preconditions_1 = require("../Preconditions");
const Optional_1 = require("../util/ts/Optional");
const log = Logger_1.Logger.create();
class CIDProviders {
    static getInstance() {
        if (electron_1.remote) {
            return electron_1.remote.getGlobal('cidProvider');
        }
        else {
            return Optional_1.Optional.of(window.localStorage.getItem('cidProvider'))
                .map(value => new CIDProvider_1.CIDProvider(value))
                .getOrNull();
        }
    }
    static setInstance(provider) {
        if (electron_1.remote) {
            Preconditions_1.Preconditions.assertPresent(provider, "provider");
            if (!Preconditions_1.isPresent(electron_1.remote.getGlobal('cidProvider'))) {
                log.warn("No global cid provider in remote");
                return;
            }
            electron_1.remote.getGlobal('cidProvider').value = provider.get();
        }
        else {
            const value = provider.get();
            if (value) {
                window.localStorage.setItem('cidProvider', value);
            }
        }
    }
}
exports.CIDProviders = CIDProviders;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ0lEUHJvdmlkZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ0lEUHJvdmlkZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQWdDO0FBQ2hDLCtDQUEwQztBQUMxQyw2Q0FBd0M7QUFDeEMsb0RBQTBEO0FBQzFELGtEQUE2QztBQUc3QyxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFLNUIsTUFBYSxZQUFZO0lBRWQsTUFBTSxDQUFDLFdBQVc7UUFFckIsSUFBSSxpQkFBTSxFQUFFO1lBQ1IsT0FBTyxpQkFBTSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUMxQzthQUFNO1lBQ0gsT0FBTyxtQkFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztpQkFDekQsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSx5QkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNwQyxTQUFTLEVBQUUsQ0FBQztTQUNwQjtJQUVMLENBQUM7SUFFTSxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQXFCO1FBRTNDLElBQUksaUJBQU0sRUFBRTtZQUVSLDZCQUFhLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUVsRCxJQUFJLENBQUUseUJBQVMsQ0FBQyxpQkFBTSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFO2dCQUM5QyxHQUFHLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxDQUFDLENBQUM7Z0JBSTdDLE9BQU87YUFDVjtZQUVELGlCQUFNLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7U0FFMUQ7YUFBTTtZQUVILE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUU3QixJQUFJLEtBQUssRUFBRTtnQkFDUCxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDckQ7U0FFSjtJQUVMLENBQUM7Q0FFSjtBQTFDRCxvQ0EwQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3JlbW90ZX0gZnJvbSAnZWxlY3Ryb24nO1xuaW1wb3J0IHtDSURQcm92aWRlcn0gZnJvbSAnLi9DSURQcm92aWRlcic7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge2lzUHJlc2VudCwgUHJlY29uZGl0aW9uc30gZnJvbSAnLi4vUHJlY29uZGl0aW9ucyc7XG5pbXBvcnQge09wdGlvbmFsfSBmcm9tICcuLi91dGlsL3RzL09wdGlvbmFsJztcbmltcG9ydCB7UHJvdmlkZXJzfSBmcm9tICcuLi91dGlsL1Byb3ZpZGVycyc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuLyoqXG4gKiBARWxlY3Ryb25SZW5kZXJlckNvbnRleHRcbiAqL1xuZXhwb3J0IGNsYXNzIENJRFByb3ZpZGVycyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IENJRFByb3ZpZGVyIHwgbnVsbCB7XG5cbiAgICAgICAgaWYgKHJlbW90ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlbW90ZS5nZXRHbG9iYWwoJ2NpZFByb3ZpZGVyJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gT3B0aW9uYWwub2Yod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjaWRQcm92aWRlcicpKVxuICAgICAgICAgICAgICAgIC5tYXAodmFsdWUgPT4gbmV3IENJRFByb3ZpZGVyKHZhbHVlKSlcbiAgICAgICAgICAgICAgICAuZ2V0T3JOdWxsKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgc2V0SW5zdGFuY2UocHJvdmlkZXI6IENJRFByb3ZpZGVyKSB7XG5cbiAgICAgICAgaWYgKHJlbW90ZSkge1xuXG4gICAgICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydFByZXNlbnQocHJvdmlkZXIsIFwicHJvdmlkZXJcIik7XG5cbiAgICAgICAgICAgIGlmICghIGlzUHJlc2VudChyZW1vdGUuZ2V0R2xvYmFsKCdjaWRQcm92aWRlcicpKSkge1xuICAgICAgICAgICAgICAgIGxvZy53YXJuKFwiTm8gZ2xvYmFsIGNpZCBwcm92aWRlciBpbiByZW1vdGVcIik7XG4gICAgICAgICAgICAgICAgLy8gbm90ZSB0aGF0IHdlIGNhbid0IHRyYWNrIGFueXRoaW5nIGF0IHRoaXMgcG9pbnQgYnV0IHdlIG1pZ2h0XG4gICAgICAgICAgICAgICAgLy8gYmUgaW4gYSB0ZXN0aW5nIGZyYW1ld29yayB3aGljaCBoYXNuJ3QgZGVmaW5lZCB0aGUgdmFyaWFibGVcbiAgICAgICAgICAgICAgICAvLyB3ZSBuZWVkIHdpdGhpbiBtYWluLlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVtb3RlLmdldEdsb2JhbCgnY2lkUHJvdmlkZXInKS52YWx1ZSA9IHByb3ZpZGVyLmdldCgpO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcHJvdmlkZXIuZ2V0KCk7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2lkUHJvdmlkZXInLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG4iXX0=