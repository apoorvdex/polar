"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const Logger_1 = require("../logger/Logger");
const RichTextEditor4_1 = require("../apps/card_creator/elements/schemaform/RichTextEditor4");
const log = Logger_1.Logger.create();
class RichTextArea extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const autofocus = this.props.autofocus !== undefined ? this.props.autofocus : false;
        let label = React.createElement("label", { className: "text-muted" }, this.props.label);
        if (this.props.label === undefined) {
            label = undefined;
        }
        const Label = () => {
            if (this.props.label) {
                return (React.createElement("div", null, label));
            }
            else {
                return (React.createElement("div", null));
            }
        };
        return (React.createElement("div", { id: this.props.id, className: "rich-text-area" },
            React.createElement("div", null,
                React.createElement(Label, null),
                React.createElement("div", { className: "border rounded mb-1 rich-text-area-input" },
                    React.createElement(RichTextEditor4_1.RichTextEditor4, { id: `rich-text-area-${this.props.id}`, value: this.props.value || '', autofocus: autofocus, onKeyDown: this.props.onKeyDown, onRichTextMutator: this.props.onRichTextMutator, onChange: (html) => this.props.onChange(html) })))));
    }
}
exports.RichTextArea = RichTextArea;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmljaFRleHRBcmVhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUmljaFRleHRBcmVhLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsNkNBQXdDO0FBRXhDLDhGQUF5RjtBQUl6RixNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSxZQUFhLFNBQVEsS0FBSyxDQUFDLFNBQXlCO0lBRTdELFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUUxQixDQUFDO0lBRU0sTUFBTTtRQUVULE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUVwRixJQUFJLEtBQUssR0FBNEIsK0JBQU8sU0FBUyxFQUFDLFlBQVksSUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBUyxDQUFDO1FBRTlGLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ2hDLEtBQUssR0FBRyxTQUFTLENBQUM7U0FDckI7UUFFRCxNQUFNLEtBQUssR0FBRyxHQUFHLEVBQUU7WUFFZixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUNsQixPQUFPLENBQUMsaUNBQU0sS0FBSyxDQUFPLENBQUMsQ0FBQzthQUMvQjtpQkFBTTtnQkFDSCxPQUFPLENBQUUsZ0NBQVcsQ0FBRSxDQUFDO2FBQzFCO1FBRUwsQ0FBQyxDQUFDO1FBRUYsT0FBTyxDQUVILDZCQUFLLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUMsZ0JBQWdCO1lBRTlDO2dCQUVJLG9CQUFDLEtBQUssT0FBRTtnQkFFUiw2QkFBSyxTQUFTLEVBQUMsMENBQTBDO29CQUVyRCxvQkFBQyxpQ0FBZSxJQUFDLEVBQUUsRUFBRSxrQkFBa0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFDckMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLEVBQUUsRUFDN0IsU0FBUyxFQUFFLFNBQVMsRUFDcEIsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUMvQixpQkFBaUIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUMvQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBRS9ELENBRUosQ0FFSixDQUVULENBQUM7SUFFTixDQUFDO0NBRUo7QUF0REQsb0NBc0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtEb2NBbm5vdGF0aW9ufSBmcm9tICcuL0RvY0Fubm90YXRpb24nO1xuaW1wb3J0IHtSaWNoVGV4dEVkaXRvcjR9IGZyb20gJy4uL2FwcHMvY2FyZF9jcmVhdG9yL2VsZW1lbnRzL3NjaGVtYWZvcm0vUmljaFRleHRFZGl0b3I0JztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3RzdHJhcC9saWIvQnV0dG9uJztcbmltcG9ydCB7UmljaFRleHRNdXRhdG9yfSBmcm9tICcuLi9hcHBzL2NhcmRfY3JlYXRvci9lbGVtZW50cy9zY2hlbWFmb3JtL1JpY2hUZXh0TXV0YXRvcic7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIFJpY2hUZXh0QXJlYSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgYXV0b2ZvY3VzID0gdGhpcy5wcm9wcy5hdXRvZm9jdXMgIT09IHVuZGVmaW5lZCA/IHRoaXMucHJvcHMuYXV0b2ZvY3VzIDogZmFsc2U7XG5cbiAgICAgICAgbGV0IGxhYmVsOiBKU1guRWxlbWVudCB8IHVuZGVmaW5lZCA9IDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+e3RoaXMucHJvcHMubGFiZWx9PC9sYWJlbD47XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMubGFiZWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBMYWJlbCA9ICgpID0+IHtcblxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMubGFiZWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxkaXY+e2xhYmVsfTwvZGl2Pik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAoIDxkaXY+PC9kaXY+ICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2IGlkPXt0aGlzLnByb3BzLmlkfSBjbGFzc05hbWU9XCJyaWNoLXRleHQtYXJlYVwiPlxuXG4gICAgICAgICAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHJvdW5kZWQgbWItMSByaWNoLXRleHQtYXJlYS1pbnB1dFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmljaFRleHRFZGl0b3I0IGlkPXtgcmljaC10ZXh0LWFyZWEtJHt0aGlzLnByb3BzLmlkfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlIHx8ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvZm9jdXM9e2F1dG9mb2N1c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLnByb3BzLm9uS2V5RG93bn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SaWNoVGV4dE11dGF0b3I9e3RoaXMucHJvcHMub25SaWNoVGV4dE11dGF0b3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaHRtbCkgPT4gdGhpcy5wcm9wcy5vbkNoYW5nZShodG1sKX0vPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgdmFsdWU/OiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgbGFiZWw/OiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgYXV0b2ZvY3VzPzogYm9vbGVhbjtcbiAgICByZWFkb25seSBvbkNoYW5nZTogKGh0bWw6IGh0bWxzdHJpbmcpID0+IHZvaWQ7XG4gICAgcmVhZG9ubHkgb25LZXlEb3duPzogKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB2b2lkO1xuICAgIHJlYWRvbmx5IG9uUmljaFRleHRNdXRhdG9yPzogKG11dGF0b3I6IFJpY2hUZXh0TXV0YXRvcikgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3RhdGUge1xufVxuXG5leHBvcnQgdHlwZSBodG1sc3RyaW5nID0gc3RyaW5nO1xuIl19