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
const reactstrap_1 = require("reactstrap");
class CaptureButton extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(reactstrap_1.InputGroupAddon, { addonType: "append" },
            React.createElement(reactstrap_1.Button, { type: "button", className: "btn btn-outline-secondary", title: "Capture the HTML page and save locally", "aria-label": "", disabled: true },
                React.createElement("span", { className: "fa fa-cloud-download fa-lg", "aria-hidden": "true" }))));
    }
}
exports.CaptureButton = CaptureButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FwdHVyZUJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNhcHR1cmVCdXR0b24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwyQ0FBbUQ7QUFFbkQsTUFBYSxhQUFjLFNBQVEsS0FBSyxDQUFDLFNBQW1CO0lBRXhELFlBQVksS0FBVSxFQUFFLE9BQVk7UUFDaEMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sTUFBTTtRQUNULE9BQU8sQ0FFSCxvQkFBQyw0QkFBZSxJQUFDLFNBQVMsRUFBQyxRQUFRO1lBRS9CLG9CQUFDLG1CQUFNLElBQUMsSUFBSSxFQUFDLFFBQVEsRUFDYixTQUFTLEVBQUMsMkJBQTJCLEVBQ3JDLEtBQUssRUFBQyx3Q0FBd0MsZ0JBQ25DLEVBQUUsRUFDYixRQUFRO2dCQUVaLDhCQUFNLFNBQVMsRUFBQyw0QkFBNEIsaUJBQWEsTUFBTSxHQUFRLENBRWxFLENBRUssQ0FFckIsQ0FBQztJQUNOLENBQUM7Q0FFSjtBQTFCRCxzQ0EwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0J1dHRvbiwgSW5wdXRHcm91cEFkZG9ufSBmcm9tICdyZWFjdHN0cmFwJztcblxuZXhwb3J0IGNsYXNzIENhcHR1cmVCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnksIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPElucHV0R3JvdXBBZGRvbiBhZGRvblR5cGU9XCJhcHBlbmRcIj5cblxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQ2FwdHVyZSB0aGUgSFRNTCBwYWdlIGFuZCBzYXZlIGxvY2FsbHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD5cblxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1jbG91ZC1kb3dubG9hZCBmYS1sZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cblxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICA8L0lucHV0R3JvdXBBZGRvbj5cblxuICAgICAgICApO1xuICAgIH1cblxufVxuIl19