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
const Strings_1 = require("../util/Strings");
const Logger_1 = require("../logger/Logger");
const Toaster_1 = require("../ui/toaster/Toaster");
const log = Logger_1.Logger.create();
class DocTitleController {
    constructor(model) {
        this.model = model;
    }
    start() {
        this.listenForTitle();
    }
    listenForDocumentLoad() {
        this.model.registerListenerForDocumentLoaded((event) => __awaiter(this, void 0, void 0, function* () {
            yield this.onDocumentLoaded(event);
        }));
    }
    listenForTitle() {
        const inputElement = document.querySelector("#set-title input");
        inputElement.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                log.info("Updating document metadata now");
                this.doUpdateTitle();
                this.hideTitlePrompt();
            }
        });
    }
    onDocumentLoaded(event) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Strings_1.Strings.empty(event.docMeta.docInfo.title)) {
                this.triggerTitlePrompt();
            }
        });
    }
    doUpdateTitle() {
        const inputElement = document.querySelector("#set-title input");
        const title = inputElement.value;
        log.info("Setting title to: " + title);
        this.model.docMeta.docInfo.title = title;
        Toaster_1.Toaster.success("Document title successfully updated");
    }
    triggerTitlePrompt() {
        log.info("Triggering title prompt");
        this.showTitlePrompt();
    }
    hideTitlePrompt() {
        $('#set-title').hide();
    }
    showTitlePrompt() {
        $('#set-title').show();
    }
}
exports.DocTitleController = DocTitleController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jVGl0bGVDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRG9jVGl0bGVDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFJQSw2Q0FBd0M7QUFDeEMsNkNBQXdDO0FBQ3hDLG1EQUE4QztBQUU5QyxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSxrQkFBa0I7SUFJM0IsWUFBWSxLQUFZO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxLQUFLO1FBR1IsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBSzFCLENBQUM7SUFFTyxxQkFBcUI7UUFFekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFNLEtBQUssRUFBQyxFQUFFO1lBQ3ZELE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRU8sY0FBYztRQUlsQixNQUFNLFlBQVksR0FBaUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBRSxDQUFDO1FBQy9FLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFvQixFQUFFLEVBQUU7WUFFOUQsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLE9BQU8sRUFBRTtnQkFDdkIsR0FBRyxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQzthQUMxQjtRQUVMLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVhLGdCQUFnQixDQUFDLEtBQTBCOztZQUVyRCxJQUFHLGlCQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMzQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQzthQUM3QjtRQUVMLENBQUM7S0FBQTtJQUVPLGFBQWE7UUFFakIsTUFBTSxZQUFZLEdBQXNCLFFBQVEsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUUsQ0FBQztRQUVwRixNQUFNLEtBQUssR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBRWpDLEdBQUcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFFdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFFekMsaUJBQU8sQ0FBQyxPQUFPLENBQUMscUNBQXFDLENBQUMsQ0FBQztJQUUzRCxDQUFDO0lBRU8sa0JBQWtCO1FBRXRCLEdBQUcsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFFM0IsQ0FBQztJQUVPLGVBQWU7UUFDbkIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBRTNCLENBQUM7SUFFTyxlQUFlO1FBQ25CLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDO0NBRUo7QUFqRkQsZ0RBaUZDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBIYW5kbGVzIGF0dGFjaGluZyBldmVudHMgdG8gdGhlIHRpdGxlIFVJIGFuZCBwcm9tcHRpbmcgZm9yIG5ldyB0aXRsZXMuXG4gKi9cbmltcG9ydCB7RG9jdW1lbnRMb2FkZWRFdmVudCwgTW9kZWx9IGZyb20gJy4uL21vZGVsL01vZGVsJztcbmltcG9ydCB7U3RyaW5nc30gZnJvbSAnLi4vdXRpbC9TdHJpbmdzJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7VG9hc3Rlcn0gZnJvbSAnLi4vdWkvdG9hc3Rlci9Ub2FzdGVyJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgY2xhc3MgRG9jVGl0bGVDb250cm9sbGVyIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgbW9kZWw6IE1vZGVsO1xuXG4gICAgY29uc3RydWN0b3IobW9kZWw6IE1vZGVsKSB7XG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnQoKSB7XG5cbiAgICAgICAgLy8gdGhpcy5saXN0ZW5Gb3JEb2N1bWVudExvYWQoKTtcbiAgICAgICAgdGhpcy5saXN0ZW5Gb3JUaXRsZSgpO1xuXG4gICAgICAgIC8vIFRPRE8gbGlzdGVuIHRvIHBhc3RlIHNvIHRoYXQgaWYgdGhleSBwYXN0ZSBcXG4gc28gd2UgZXNjYXBlIGl0Li4uXG4gICAgICAgIC8vIEkgdGhpbmsgd2UgY2FuIGRvIHRoaXMgaWYgd2UgbGlzdGVuIHRvICdjaGFuZ2UnIG5vdCAna2V5ZG93bicuXG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGxpc3RlbkZvckRvY3VtZW50TG9hZCgpIHtcblxuICAgICAgICB0aGlzLm1vZGVsLnJlZ2lzdGVyTGlzdGVuZXJGb3JEb2N1bWVudExvYWRlZChhc3luYyBldmVudCA9PiB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLm9uRG9jdW1lbnRMb2FkZWQoZXZlbnQpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgbGlzdGVuRm9yVGl0bGUoKSB7XG5cbiAgICAgICAgLy8gYmluZCB0byBrZXlEb3duIHNvIEkgY2FuIGxpc3RlbiBmb3IgZW50ZXIgdG8gY2hhbmdlIHRoZSB0aXRsZVxuXG4gICAgICAgIGNvbnN0IGlucHV0RWxlbWVudCA9IDxIVE1MRWxlbWVudD4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZXQtdGl0bGUgaW5wdXRcIikhO1xuICAgICAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuXG4gICAgICAgICAgICBpZiggZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICAgICAgbG9nLmluZm8oXCJVcGRhdGluZyBkb2N1bWVudCBtZXRhZGF0YSBub3dcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5kb1VwZGF0ZVRpdGxlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlVGl0bGVQcm9tcHQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgb25Eb2N1bWVudExvYWRlZChldmVudDogRG9jdW1lbnRMb2FkZWRFdmVudCkge1xuXG4gICAgICAgIGlmKFN0cmluZ3MuZW1wdHkoZXZlbnQuZG9jTWV0YS5kb2NJbmZvLnRpdGxlKSkge1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyVGl0bGVQcm9tcHQoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkb1VwZGF0ZVRpdGxlKCkge1xuXG4gICAgICAgIGNvbnN0IGlucHV0RWxlbWVudCA9IDxIVE1MSW5wdXRFbGVtZW50PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NldC10aXRsZSBpbnB1dFwiKSE7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBpbnB1dEVsZW1lbnQudmFsdWU7XG5cbiAgICAgICAgbG9nLmluZm8oXCJTZXR0aW5nIHRpdGxlIHRvOiBcIiArIHRpdGxlKTtcblxuICAgICAgICB0aGlzLm1vZGVsLmRvY01ldGEuZG9jSW5mby50aXRsZSA9IHRpdGxlO1xuXG4gICAgICAgIFRvYXN0ZXIuc3VjY2VzcyhcIkRvY3VtZW50IHRpdGxlIHN1Y2Nlc3NmdWxseSB1cGRhdGVkXCIpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0cmlnZ2VyVGl0bGVQcm9tcHQoKSB7XG5cbiAgICAgICAgbG9nLmluZm8oXCJUcmlnZ2VyaW5nIHRpdGxlIHByb21wdFwiKTtcbiAgICAgICAgdGhpcy5zaG93VGl0bGVQcm9tcHQoKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgaGlkZVRpdGxlUHJvbXB0KCkge1xuICAgICAgICAkKCcjc2V0LXRpdGxlJykuaGlkZSgpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzaG93VGl0bGVQcm9tcHQoKSB7XG4gICAgICAgICQoJyNzZXQtdGl0bGUnKS5zaG93KCk7XG4gICAgfVxuXG59XG4iXX0=