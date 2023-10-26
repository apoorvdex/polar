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
class ImagePasteHandler {
    constructor(element, mutator) {
        this.element = element;
        this.mutator = mutator;
        if (!this.mutator) {
            this.mutator = function (val) {
                return val;
            };
        }
    }
    start() {
        this.element.addEventListener("paste", function (event) {
            return __awaiter(this, void 0, void 0, function* () {
                let imagePasted = yield ImagePasteHandler.handlePasteData(event);
                if (imagePasted.image) {
                    event.preventDefault();
                    let text = imagePasted.image;
                    text = this.mutator(text);
                    document.execCommand("insertHTML", false, text);
                    return true;
                }
                return true;
            });
        }.bind(this));
    }
    ;
    static handlePasteData(e) {
        let orgEvent = e;
        for (let i = 0; i < orgEvent.clipboardData.items.length; i++) {
            let clipboardDataItem = orgEvent.clipboardData.items[i];
            if (clipboardDataItem.kind === "file" && clipboardDataItem.type === "image/png") {
                let imageFile = clipboardDataItem.getAsFile();
                let fileReader = new FileReader();
                return new Promise(function (resolve, reject) {
                    fileReader.onloadend = function () {
                        resolve({ image: fileReader.result });
                    };
                    fileReader.readAsDataURL(imageFile);
                });
            }
        }
        return new Promise(function (resolve) {
            resolve({});
        });
    }
}
exports.ImagePasteHandler = ImagePasteHandler;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW1hZ2VQYXN0ZUhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJJbWFnZVBhc3RlSGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsTUFBYSxpQkFBaUI7SUFLMUIsWUFBWSxPQUFZLEVBQUUsT0FBWTtRQUVsQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUV2QixJQUFJLENBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsR0FBUTtnQkFDN0IsT0FBTyxHQUFHLENBQUM7WUFDZixDQUFDLENBQUM7U0FDTDtJQUVMLENBQUM7SUFFRCxLQUFLO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBZ0IsS0FBVTs7Z0JBRTdELElBQUksV0FBVyxHQUFHLE1BQU0saUJBQWlCLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUVqRSxJQUFJLFdBQVcsQ0FBQyxLQUFLLEVBQUU7b0JBR25CLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFLdkIsSUFBSSxJQUFJLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztvQkFDN0IsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBRzFCLFFBQVEsQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFFaEQsT0FBTyxJQUFJLENBQUM7aUJBRWY7Z0JBR0QsT0FBTyxJQUFJLENBQUM7WUFFaEIsQ0FBQztTQUFBLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFbEIsQ0FBQztJQUFBLENBQUM7SUFLRixNQUFNLENBQUMsZUFBZSxDQUFDLENBQU07UUFHekIsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBRWpCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFFMUQsSUFBSSxpQkFBaUIsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RCxJQUFJLGlCQUFpQixDQUFDLElBQUksS0FBSyxNQUFNLElBQUksaUJBQWlCLENBQUMsSUFBSSxLQUFLLFdBQVcsRUFBRTtnQkFFN0UsSUFBSSxTQUFTLEdBQUcsaUJBQWlCLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQzlDLElBQUksVUFBVSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7Z0JBRWxDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBUyxPQUFPLEVBQUUsTUFBTTtvQkFFdkMsVUFBVSxDQUFDLFNBQVMsR0FBRzt3QkFDbkIsT0FBTyxDQUFDLEVBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO29CQUN4QyxDQUFDLENBQUM7b0JBRUYsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFFeEMsQ0FBQyxDQUFDLENBQUM7YUFFTjtTQUVKO1FBRUQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFVLE9BQU87WUFDaEMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFBO0lBRU4sQ0FBQztDQUVKO0FBckZELDhDQXFGQztBQUFBLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgSW1hZ2VQYXN0ZUhhbmRsZXIge1xuXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBhbnk7XG4gICAgcHJpdmF0ZSBtdXRhdG9yOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBhbnksIG11dGF0b3I6IGFueSkge1xuXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMubXV0YXRvciA9IG11dGF0b3I7XG5cbiAgICAgICAgaWYoICEgdGhpcy5tdXRhdG9yKSB7XG4gICAgICAgICAgICB0aGlzLm11dGF0b3IgPSBmdW5jdGlvbiAodmFsOiBhbnkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwYXN0ZVwiLCBhc3luYyBmdW5jdGlvbiAoZXZlbnQ6IGFueSkge1xuXG4gICAgICAgICAgICBsZXQgaW1hZ2VQYXN0ZWQgPSBhd2FpdCBJbWFnZVBhc3RlSGFuZGxlci5oYW5kbGVQYXN0ZURhdGEoZXZlbnQpO1xuXG4gICAgICAgICAgICBpZiAoaW1hZ2VQYXN0ZWQuaW1hZ2UpIHtcblxuICAgICAgICAgICAgICAgIC8vIGNhbmNlbCBwYXN0ZSBzbyB3ZSBjYW4gaGFuZGxlIGl0IG91cnNlbHZlcy5cbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRleHQgcmVwcmVzZW50YXRpb24gb2YgY2xpcGJvYXJkXG4gICAgICAgICAgICAgICAgLy9sZXQgdGV4dCA9IGUuY2xpcGJvYXJkRGF0YS5nZXREYXRhKFwidGV4dC9wbGFpblwiKTtcblxuICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gaW1hZ2VQYXN0ZWQuaW1hZ2U7XG4gICAgICAgICAgICAgICAgdGV4dCA9IHRoaXMubXV0YXRvcih0ZXh0KTtcblxuICAgICAgICAgICAgICAgIC8vIGluc2VydCB0ZXh0IG1hbnVhbGx5XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJpbnNlcnRIVE1MXCIsIGZhbHNlLCB0ZXh0KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHRoaXMgaXMganVzdCB0cnVlIHNvIHdlIGNhbiBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIHBhc3RlZCBkYXRhIGFuZCBjb252ZXJ0IHRvIGEgZGF0YTogVVJMIHdoZW4gbmVjZXNzYXJ5XG4gICAgICovXG4gICAgc3RhdGljIGhhbmRsZVBhc3RlRGF0YShlOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuXG4gICAgICAgIC8vIGNhbGwgLm9yaWdpbmFsRXZlbnQgaWYgcnVubmluZyB3aXRoIGpxdWVyeS5cbiAgICAgICAgbGV0IG9yZ0V2ZW50ID0gZTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9yZ0V2ZW50LmNsaXBib2FyZERhdGEuaXRlbXMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgbGV0IGNsaXBib2FyZERhdGFJdGVtID0gb3JnRXZlbnQuY2xpcGJvYXJkRGF0YS5pdGVtc1tpXTtcbiAgICAgICAgICAgIGlmIChjbGlwYm9hcmREYXRhSXRlbS5raW5kID09PSBcImZpbGVcIiAmJiBjbGlwYm9hcmREYXRhSXRlbS50eXBlID09PSBcImltYWdlL3BuZ1wiKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgaW1hZ2VGaWxlID0gY2xpcGJvYXJkRGF0YUl0ZW0uZ2V0QXNGaWxlKCk7XG4gICAgICAgICAgICAgICAgbGV0IGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGZpbGVSZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7aW1hZ2U6IGZpbGVSZWFkZXIucmVzdWx0fSk7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgZmlsZVJlYWRlci5yZWFkQXNEYXRhVVJMKGltYWdlRmlsZSk7XG5cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgIHJlc29sdmUoe30pO1xuICAgICAgICB9KVxuXG4gICAgfVxuXG59O1xuIl19