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
const Preconditions_1 = require("../Preconditions");
const Logger_1 = require("../logger/Logger");
const log = Logger_1.Logger.create();
class Controller {
    constructor(model) {
        this.model = Preconditions_1.Preconditions.assertNotNull(model, "model");
    }
    onDocumentLoaded(fingerprint, nrPages, currentlySelectedPageNum, docDetail) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.model.documentLoaded(fingerprint, nrPages, currentlySelectedPageNum, docDetail);
        });
    }
    createPagemark(pageNum, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            log.info("Controller sees pagemark created: " + pageNum, options);
            yield this.model.createPagemark(pageNum, options);
        });
    }
    erasePagemarks(pageNum) {
        log.info("Controller sees pagemarks erased: " + pageNum);
        this.model.erasePagemark(pageNum);
    }
    erasePagemark(num) {
        log.info("Controller sees pagemark erased: " + num);
        this.model.erasePagemark(num);
    }
    getCurrentPageElement() {
    }
}
exports.Controller = Controller;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLG9EQUErQztBQUMvQyw2Q0FBd0M7QUFJeEMsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsVUFBVTtJQU9uQixZQUFZLEtBQVk7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyw2QkFBYSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUtZLGdCQUFnQixDQUFDLFdBQW1CLEVBQ25CLE9BQWUsRUFDZix3QkFBZ0MsRUFDaEMsU0FBZ0M7O1lBRTFELE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUUvRixDQUFDO0tBQUE7SUFLWSxjQUFjLENBQUMsT0FBZSxFQUFFLFVBQWUsRUFBRTs7WUFDMUQsR0FBRyxDQUFDLElBQUksQ0FBQyxvQ0FBb0MsR0FBRyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDbEUsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEQsQ0FBQztLQUFBO0lBRU0sY0FBYyxDQUFDLE9BQWU7UUFDakMsR0FBRyxDQUFDLElBQUksQ0FBQyxvQ0FBb0MsR0FBRyxPQUFPLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBS00sYUFBYSxDQUFDLEdBQVc7UUFDNUIsR0FBRyxDQUFDLElBQUksQ0FBQyxtQ0FBbUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU0scUJBQXFCO0lBRTVCLENBQUM7Q0FFSjtBQWhERCxnQ0FnREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01vZGVsfSBmcm9tICcuLi9tb2RlbC9Nb2RlbCc7XG5pbXBvcnQge1ByZWNvbmRpdGlvbnN9IGZyb20gJy4uL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtEb2NEZXRhaWxzfSBmcm9tICcuLi9tZXRhZGF0YS9Eb2NEZXRhaWxzJztcbmltcG9ydCB7RG9jRGV0YWlsfSBmcm9tICcuLi9tZXRhZGF0YS9Eb2NEZXRhaWwnO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBDb250cm9sbGVyIHtcblxuICAgIHByb3RlY3RlZCBtb2RlbDogTW9kZWw7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG1vZGVsOiBNb2RlbCkge1xuICAgICAgICB0aGlzLm1vZGVsID0gUHJlY29uZGl0aW9ucy5hc3NlcnROb3ROdWxsKG1vZGVsLCBcIm1vZGVsXCIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIGEgbmV3IGRvY3VtZW50IGhhcyBiZWVuIGxvYWRlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgb25Eb2N1bWVudExvYWRlZChmaW5nZXJwcmludDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5yUGFnZXM6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50bHlTZWxlY3RlZFBhZ2VOdW06IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2NEZXRhaWw6IERvY0RldGFpbCB8IHVuZGVmaW5lZCkge1xuXG4gICAgICAgIGF3YWl0IHRoaXMubW9kZWwuZG9jdW1lbnRMb2FkZWQoZmluZ2VycHJpbnQsIG5yUGFnZXMsIGN1cnJlbnRseVNlbGVjdGVkUGFnZU51bSwgZG9jRGV0YWlsKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1hcmsgdGhlIGdpdmVuIHBhZ2UgbnVtYmVyIGFzIHJlYWQuXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIGNyZWF0ZVBhZ2VtYXJrKHBhZ2VOdW06IG51bWJlciwgb3B0aW9uczogYW55ID0ge30pIHtcbiAgICAgICAgbG9nLmluZm8oXCJDb250cm9sbGVyIHNlZXMgcGFnZW1hcmsgY3JlYXRlZDogXCIgKyBwYWdlTnVtLCBvcHRpb25zKTtcbiAgICAgICAgYXdhaXQgdGhpcy5tb2RlbC5jcmVhdGVQYWdlbWFyayhwYWdlTnVtLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZXJhc2VQYWdlbWFya3MocGFnZU51bTogbnVtYmVyKSB7XG4gICAgICAgIGxvZy5pbmZvKFwiQ29udHJvbGxlciBzZWVzIHBhZ2VtYXJrcyBlcmFzZWQ6IFwiICsgcGFnZU51bSk7XG4gICAgICAgIHRoaXMubW9kZWwuZXJhc2VQYWdlbWFyayhwYWdlTnVtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHRoZSBnaXZlbiBwYWdlIG51bWJlciBhcyByZWFkLlxuICAgICAqL1xuICAgIHB1YmxpYyBlcmFzZVBhZ2VtYXJrKG51bTogbnVtYmVyKSB7XG4gICAgICAgIGxvZy5pbmZvKFwiQ29udHJvbGxlciBzZWVzIHBhZ2VtYXJrIGVyYXNlZDogXCIgKyBudW0pO1xuICAgICAgICB0aGlzLm1vZGVsLmVyYXNlUGFnZW1hcmsobnVtKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q3VycmVudFBhZ2VFbGVtZW50KCkge1xuXG4gICAgfVxuXG59XG4iXX0=