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
const Functions_1 = require("../../../../../web/js/util/Functions");
class DocButton extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    render() {
        return (React.createElement("div", { className: "mt-auto mb-auto ml-1 mr-1", onClick: this.props.onClick || Functions_1.NULL_FUNCTION }, this.props.children));
    }
}
exports.DocButton = DocButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jQnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRG9jQnV0dG9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0Isb0VBQW1FO0FBRW5FLE1BQWEsU0FBVSxTQUFRLEtBQUssQ0FBQyxhQUE2QjtJQUU5RCxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUNaLENBQUM7SUFFTixDQUFDO0lBRU0sTUFBTTtRQUVULE9BQU8sQ0FBQyw2QkFBSyxTQUFTLEVBQUMsMkJBQTJCLEVBQ3JDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSx5QkFBYSxJQUVwRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FFbEIsQ0FBQyxDQUFDO0lBRVosQ0FBQztDQUVKO0FBckJELDhCQXFCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TlVMTF9GVU5DVElPTn0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vd2ViL2pzL3V0aWwvRnVuY3Rpb25zJztcblxuZXhwb3J0IGNsYXNzIERvY0J1dHRvbiBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cIm10LWF1dG8gbWItYXV0byBtbC0xIG1yLTFcIlxuICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrIHx8IE5VTExfRlVOQ1RJT059PlxuXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblxuICAgICAgICA8L2Rpdj4pO1xuXG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbn1cbiJdfQ==