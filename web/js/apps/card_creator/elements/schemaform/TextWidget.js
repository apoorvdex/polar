"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReactSummernote_1 = __importDefault(require("./ReactSummernote"));
const react_1 = __importDefault(require("react"));
const TypedWidgetProps_1 = require("./TypedWidgetProps");
const Logger_1 = require("../../../../logger/Logger");
const log = Logger_1.Logger.create();
class TextWidget extends react_1.default.Component {
    constructor(props = {}) {
        super(props);
        this.value = "";
        if (props.id) {
            this.id = props.id;
        }
        else {
            throw new Error("No ID");
        }
        this.onChangeCallback = props.onChange;
        this.onBlurCallback = props.onBlur;
        this.onFocusCallback = props.onFocus;
        this.typedWidgetProps = new TypedWidgetProps_1.TypedWidgetProps(props);
        if (this.typedWidgetProps.value) {
            this.value = this.typedWidgetProps.value;
        }
        this.onChange = this.onChange.bind(this);
        this.onImageUpload = this.onImageUpload.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onFocus = this.onFocus.bind(this);
    }
    onChange(newValue) {
        console.log('onChange: newValue: ', newValue);
        log.debug('onChange', newValue);
        this.value = newValue;
        this.onChangeCallback(newValue);
    }
    onBlur() {
        log.info("onBlur");
        this.onBlurCallback(this.id, this.value);
    }
    onFocus() {
        log.info("onFocus");
        this.onFocusCallback(this.id, this.value);
    }
    onImageUpload(images, insertImage) {
        log.debug('onImageUpload', images);
        for (let i = 0; i < images.length; i++) {
            const reader = new FileReader();
            reader.onloadend = () => {
                insertImage(reader.result);
            };
            reader.readAsDataURL(images[i]);
        }
    }
    ;
    render() {
        return (react_1.default.createElement(ReactSummernote_1.default, { value: "", options: {
                id: this.typedWidgetProps.id,
                lang: 'en-US',
                height: 280,
                dialogsInBody: false,
                toolbar: [
                    ['style', ['style']],
                    ['font', ['bold', 'italic', 'underline', 'clear', 'color', 'superscript', 'subscript']],
                    ['para', ['ul', 'ol', 'paragraph']],
                    ['table', ['table']],
                    ['insert', ['link', 'picture', 'video']],
                    ['view', []]
                ]
            }, onChange: this.onChange, onBlur: this.onBlur, onFocus: this.onFocus, onImageUpload: this.onImageUpload }));
    }
}
exports.TextWidget = TextWidget;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dFdpZGdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRleHRXaWRnZXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0Esd0VBQWdEO0FBQ2hELGtEQUEwQjtBQUMxQix5REFBb0Q7QUFDcEQsc0RBQWlEO0FBQ2pELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLFVBQVcsU0FBUSxlQUFLLENBQUMsU0FBUztJQWEzQyxZQUFZLFFBQWEsRUFBRTtRQUN2QixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFMVCxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBT3ZCLElBQUcsS0FBSyxDQUFDLEVBQUUsRUFBRTtZQUNULElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQztTQUN0QjthQUFNO1lBQ0gsTUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM1QjtRQUVELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUNuQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFFckMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksbUNBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFcEQsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFO1lBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQztTQUM1QztRQUlELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFM0MsQ0FBQztJQUdELFFBQVEsQ0FBQyxRQUFhO1FBS2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFOUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFFdEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXBDLENBQUM7SUFFRCxNQUFNO1FBQ0YsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRTVDLENBQUM7SUFFRCxPQUFPO1FBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFPRCxhQUFhLENBQUMsTUFBYSxFQUFFLFdBQXFCO1FBRTlDLEdBQUcsQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRW5DLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBSXBDLE1BQU0sTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7WUFFaEMsTUFBTSxDQUFDLFNBQVMsR0FBRyxHQUFHLEVBQUU7Z0JBQ3BCLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDL0IsQ0FBQyxDQUFDO1lBRUYsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNuQztJQUVMLENBQUM7SUFBQSxDQUFDO0lBRUYsTUFBTTtRQUlGLE9BQU8sQ0FDSCw4QkFBQyx5QkFBZSxJQUNaLEtBQUssRUFBQyxFQUFFLEVBQ1IsT0FBTyxFQUFFO2dCQUNMLEVBQUUsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtnQkFDNUIsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsTUFBTSxFQUFFLEdBQUc7Z0JBRVgsYUFBYSxFQUFFLEtBQUs7Z0JBaUJwQixPQUFPLEVBQUU7b0JBQ0wsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDcEIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztvQkFFdkYsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO29CQUNuQyxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNwQixDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQ3hDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQztpQkFDZjthQUVKLEVBQ0QsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQ3ZCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUNuQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFFckIsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEdBQ25DLENBQ0wsQ0FBQztJQUNOLENBQUM7Q0FFSjtBQTdJRCxnQ0E2SUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgaXMgb3VyIG1haW4gd2lkZ2V0IGZvciBoYW5kbGluZyB0ZXh0IGZpZWxkcyB3aGljaCBhcmUgSFRNTC5cbiAqL1xuaW1wb3J0IFJlYWN0U3VtbWVybm90ZSBmcm9tICcuL1JlYWN0U3VtbWVybm90ZSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtUeXBlZFdpZGdldFByb3BzfSBmcm9tICcuL1R5cGVkV2lkZ2V0UHJvcHMnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uLy4uLy4uLy4uL2xvZ2dlci9Mb2dnZXInO1xuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgY2xhc3MgVGV4dFdpZGdldCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCAge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBvbkNoYW5nZUNhbGxiYWNrOiBPbkNoYW5nZUNhbGxiYWNrO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBvbkJsdXJDYWxsYmFjazogT25TZWxlY3Rpb25DYWxsYmFjaztcbiAgICBwcml2YXRlIHJlYWRvbmx5IG9uRm9jdXNDYWxsYmFjazogT25TZWxlY3Rpb25DYWxsYmFjaztcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgdHlwZWRXaWRnZXRQcm9wczogVHlwZWRXaWRnZXRQcm9wcztcblxuICAgIHByaXZhdGUgdmFsdWU6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBwcml2YXRlIGlkOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogYW55ID0ge30pIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIGlmKHByb3BzLmlkKSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gcHJvcHMuaWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBJRFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IHByb3BzLm9uQ2hhbmdlO1xuICAgICAgICB0aGlzLm9uQmx1ckNhbGxiYWNrID0gcHJvcHMub25CbHVyO1xuICAgICAgICB0aGlzLm9uRm9jdXNDYWxsYmFjayA9IHByb3BzLm9uRm9jdXM7XG5cbiAgICAgICAgdGhpcy50eXBlZFdpZGdldFByb3BzID0gbmV3IFR5cGVkV2lkZ2V0UHJvcHMocHJvcHMpO1xuXG4gICAgICAgIGlmKCB0aGlzLnR5cGVkV2lkZ2V0UHJvcHMudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnR5cGVkV2lkZ2V0UHJvcHMudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBuZWVkZWQgYmVjYXVzZSBSZWFjdCBjaGFuZ2VzICd0aGlzJyB0byB0aGUgRWxlbWVudCBpdCBjcmVhdGVkIHdoaWNoXG4gICAgICAgIC8vIGlzIGEgYml0IGNvbmZ1c2luZy5cbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkltYWdlVXBsb2FkID0gdGhpcy5vbkltYWdlVXBsb2FkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25CbHVyID0gdGhpcy5vbkJsdXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkZvY3VzID0gdGhpcy5vbkZvY3VzLmJpbmQodGhpcyk7XG5cbiAgICB9XG5cbiAgICAvLyBGSVhNRTogdGhlcmUgaXMgYW4gZXJyb3JTY2hlbWEgaGVyZSB0b28gd2hpY2ggSSBtaWdodCB3YW50IHRvIGxvb2sgYXQuXG4gICAgb25DaGFuZ2UobmV3VmFsdWU6IGFueSkge1xuXG4gICAgICAgIC8vIEZJWE1FOiBzdW1tZXJub3RlIGhhcyBpc0VtcHR5IGFuZCBzb21lIG90aGVyIG1ldGhvZHMgSSBuZWVkIHRvIHVzZVxuICAgICAgICAvLyBoZXJlLlxuXG4gICAgICAgIGNvbnNvbGUubG9nKCdvbkNoYW5nZTogbmV3VmFsdWU6ICcsIG5ld1ZhbHVlKTtcblxuICAgICAgICBsb2cuZGVidWcoJ29uQ2hhbmdlJywgbmV3VmFsdWUpO1xuXG4gICAgICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcblxuICAgICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sobmV3VmFsdWUpO1xuXG4gICAgfVxuXG4gICAgb25CbHVyKCkge1xuICAgICAgICBsb2cuaW5mbyhcIm9uQmx1clwiKTtcbiAgICAgICAgdGhpcy5vbkJsdXJDYWxsYmFjayh0aGlzLmlkLCB0aGlzLnZhbHVlKVxuXG4gICAgfVxuXG4gICAgb25Gb2N1cygpIHtcbiAgICAgICAgbG9nLmluZm8oXCJvbkZvY3VzXCIpO1xuICAgICAgICB0aGlzLm9uRm9jdXNDYWxsYmFjayh0aGlzLmlkLCB0aGlzLnZhbHVlKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgYSB3b3JrYXJvdW5kIGRvY3VtZW50ZWQgaGVyZTpcbiAgICAgKlxuICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zdW1tZXJub3RlL3JlYWN0LXN1bW1lcm5vdGUvaXNzdWVzLzM4XG4gICAgICovXG4gICAgb25JbWFnZVVwbG9hZChpbWFnZXM6IGFueVtdLCBpbnNlcnRJbWFnZTogRnVuY3Rpb24pIHtcblxuICAgICAgICBsb2cuZGVidWcoJ29uSW1hZ2VVcGxvYWQnLCBpbWFnZXMpO1xuICAgICAgICAvKiBGaWxlTGlzdCBkb2VzIG5vdCBzdXBwb3J0IG9yZGluYXJ5IGFycmF5IG1ldGhvZHMgKi9cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8qIFN0b3JlcyBhcyBiYXM2NGVuYyBzdHJpbmcgaW4gdGhlIHRleHQuXG4gICAgICAgICAgICAgKiBTaG91bGQgcG90ZW50aWFsbHkgYmUgc3RvcmVkIHNlcGFyYXRlbHkgYW5kIGluY2x1ZGUganVzdCB0aGUgdXJsXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaW5zZXJ0SW1hZ2UocmVhZGVyLnJlc3VsdCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChpbWFnZXNbaV0pO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zdW1tZXJub3RlL3JlYWN0LXN1bW1lcm5vdGUvaXNzdWVzLzM4XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdFN1bW1lcm5vdGVcbiAgICAgICAgICAgICAgICB2YWx1ZT1cIlwiXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy50eXBlZFdpZGdldFByb3BzLmlkLFxuICAgICAgICAgICAgICAgICAgICBsYW5nOiAnZW4tVVMnLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI4MCxcbiAgICAgICAgICAgICAgICAgICAgLy8gcGxhY2Vob2xkZXI6IFwidGhpcyBpcyBhIHBsYWNlaG9sZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ3NJbkJvZHk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAvLyBhaXJNb2RlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAvLyB0b29sYmFyOiBbXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ3N0eWxlJywgW11dLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgWydmb250JywgW11dLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgWydmb250bmFtZScsIFtdXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsncGFyYScsIFtdXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsndGFibGUnLCBbXV0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ2luc2VydCcsIFtdXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsndmlldycsIFtdXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsnaW1hZ2UnLCBbXV1cbiAgICAgICAgICAgICAgICAgICAgLy8gXVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIEZJWE1FOiBhZGQgYmxvY2txdW90ZSwgY29kZSwgYW5kIHByZSwgYW5kIGNpdGVcblxuICAgICAgICAgICAgICAgICAgICAvLyBtaXNzaW5nIHRoZSBoaWdobGlnaHQgY29sb3IgcHVsbGRvd24uLi5cblxuICAgICAgICAgICAgICAgICAgICB0b29sYmFyOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ3N0eWxlJywgWydzdHlsZSddXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnZm9udCcsIFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJywgJ2NsZWFyJywgJ2NvbG9yJywgJ3N1cGVyc2NyaXB0JywgJ3N1YnNjcmlwdCddXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFsnZm9udG5hbWUnLCBbJ2ZvbnRuYW1lJ11dLFxuICAgICAgICAgICAgICAgICAgICAgICAgWydwYXJhJywgWyd1bCcsICdvbCcsICdwYXJhZ3JhcGgnXV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ3RhYmxlJywgWyd0YWJsZSddXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnaW5zZXJ0JywgWydsaW5rJywgJ3BpY3R1cmUnLCAndmlkZW8nXV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ3ZpZXcnLCBbXV1cbiAgICAgICAgICAgICAgICAgICAgXVxuXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMub25CbHVyfVxuICAgICAgICAgICAgICAgIG9uRm9jdXM9e3RoaXMub25Gb2N1c31cbiAgICAgICAgICAgICAgICAvLyBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH1cbiAgICAgICAgICAgICAgICBvbkltYWdlVXBsb2FkPXt0aGlzLm9uSW1hZ2VVcGxvYWR9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgT25DaGFuZ2VDYWxsYmFjayB7XG4gICAgKG5ld1ZhbHVlOiBzdHJpbmcpOiB2b2lkO1xufVxuXG4vKipcbiAqIFVzZWQgZm9yIG9uRm9jdXMgYW5kIG9uQmx1clxuICovXG5pbnRlcmZhY2UgT25TZWxlY3Rpb25DYWxsYmFjayB7XG4gICAgKGlkOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkO1xufVxuIl19