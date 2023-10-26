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
const Optional_1 = require("../../../util/ts/Optional");
class CaptureButton extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onTriggerCapture = this.onTriggerCapture.bind(this);
    }
    render() {
        return (React.createElement(reactstrap_1.InputGroupAddon, { addonType: "append" },
            React.createElement(reactstrap_1.Button, { type: "button", className: "btn", color: "primary", title: "Capture the HTML page and save locally", "aria-label": "", disabled: this.props.disabled, onClick: this.onTriggerCapture },
                React.createElement("span", { className: "fas fa-cloud-download-alt fa-lg", "aria-hidden": "true" }))));
    }
    onTriggerCapture() {
        Optional_1.Optional.of(this.props.onTriggerCapture).map(callback => callback());
    }
}
exports.CaptureButton = CaptureButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FwdHVyZUJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNhcHR1cmVCdXR0b24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwyQ0FBbUQ7QUFDbkQsd0RBQW1EO0FBSW5ELE1BQWEsYUFBYyxTQUFRLEtBQUssQ0FBQyxTQUFzQjtJQUUzRCxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVNLE1BQU07UUFFVCxPQUFPLENBRUgsb0JBQUMsNEJBQWUsSUFBQyxTQUFTLEVBQUMsUUFBUTtZQUUvQixvQkFBQyxtQkFBTSxJQUFDLElBQUksRUFBQyxRQUFRLEVBQ2IsU0FBUyxFQUFDLEtBQUssRUFDZixLQUFLLEVBQUMsU0FBUyxFQUNmLEtBQUssRUFBQyx3Q0FBd0MsZ0JBQ25DLEVBQUUsRUFDYixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBRTdCLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCO2dCQUVsQyw4QkFBTSxTQUFTLEVBQUMsaUNBQWlDLGlCQUFhLE1BQU0sR0FBUSxDQUV2RSxDQUVLLENBRXJCLENBQUM7SUFDTixDQUFDO0lBRU8sZ0JBQWdCO1FBQ3BCLG1CQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Q0FFSjtBQW5DRCxzQ0FtQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0J1dHRvbiwgSW5wdXRHcm91cEFkZG9ufSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB7T3B0aW9uYWx9IGZyb20gJy4uLy4uLy4uL3V0aWwvdHMvT3B0aW9uYWwnO1xuaW1wb3J0IHtJU2ltcGxlUmVhY3Rvcn0gZnJvbSAnLi4vLi4vLi4vcmVhY3Rvci9TaW1wbGVSZWFjdG9yJztcbmltcG9ydCB7TmF2aWdhdGlvbkV2ZW50fSBmcm9tICcuLi9Ccm93c2VyQXBwJztcblxuZXhwb3J0IGNsYXNzIENhcHR1cmVCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBhbnk+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgICAgIHRoaXMub25UcmlnZ2VyQ2FwdHVyZSA9IHRoaXMub25UcmlnZ2VyQ2FwdHVyZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPElucHV0R3JvdXBBZGRvbiBhZGRvblR5cGU9XCJhcHBlbmRcIj5cblxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQ2FwdHVyZSB0aGUgSFRNTCBwYWdlIGFuZCBzYXZlIGxvY2FsbHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uVHJpZ2dlckNhcHR1cmV9PlxuXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhcyBmYS1jbG91ZC1kb3dubG9hZC1hbHQgZmEtbGdcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XG5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgPC9JbnB1dEdyb3VwQWRkb24+XG5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uVHJpZ2dlckNhcHR1cmUoKSB7XG4gICAgICAgIE9wdGlvbmFsLm9mKHRoaXMucHJvcHMub25UcmlnZ2VyQ2FwdHVyZSkubWFwKGNhbGxiYWNrID0+IGNhbGxiYWNrKCkpO1xuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcblxuICAgIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgICBvblRyaWdnZXJDYXB0dXJlPzogKCkgPT4gdm9pZDtcblxufVxuIl19