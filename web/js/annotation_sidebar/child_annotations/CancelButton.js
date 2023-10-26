"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const Button_1 = __importDefault(require("reactstrap/lib/Button"));
class CancelButton extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(Button_1.default, { color: "secondary", size: "sm", className: "mt-2 mr-1", onClick: () => this.onClick() }, "Cancel"));
    }
    onClick() {
        this.props.onClick();
    }
}
exports.CancelButton = CancelButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FuY2VsQnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ2FuY2VsQnV0dG9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsbUVBQTJDO0FBSTNDLE1BQWEsWUFBYSxTQUFRLEtBQUssQ0FBQyxhQUE2QjtJQUVqRSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLE1BQU07UUFFVCxPQUFPLENBRUgsb0JBQUMsZ0JBQU0sSUFBQyxLQUFLLEVBQUMsV0FBVyxFQUNqQixJQUFJLEVBQUMsSUFBSSxFQUNULFNBQVMsRUFBQyxXQUFXLEVBQ3JCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLGFBSTVCLENBRVosQ0FBQztJQUVOLENBQUM7SUFFTyxPQUFPO1FBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN6QixDQUFDO0NBRUo7QUEzQkQsb0NBMkJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdHN0cmFwL2xpYi9CdXR0b24nO1xuXG4vKipcbiAqL1xuZXhwb3J0IGNsYXNzIENhbmNlbEJ1dHRvbiBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMiBtci0xXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5vbkNsaWNrKCl9PlxuXG4gICAgICAgICAgICAgICAgQ2FuY2VsXG5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ2xpY2soKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DbGljaygpO1xuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSBvbkNsaWNrOiAoKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcblxufVxuIl19