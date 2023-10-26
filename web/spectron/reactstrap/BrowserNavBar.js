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
const reactstrap_1 = require("reactstrap");
const Navbar_1 = __importDefault(require("reactstrap/lib/Navbar"));
const BrowserConfigurationInputGroup_1 = require("./BrowserConfigurationInputGroup");
const CaptureButton_1 = require("./CaptureButton");
class BrowserNavBar extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(Navbar_1.default, { light: true, expand: "md", className: "p-2 border-bottom link-navbar" },
                React.createElement(reactstrap_1.InputGroup, { size: "sm", className: "" },
                    React.createElement(reactstrap_1.InputGroupAddon, { addonType: "prepend", title: "Refresh the current page" },
                        React.createElement(reactstrap_1.Button, { type: "button", className: "btn btn-outline-secondary", "aria-label": "" },
                            React.createElement("span", { className: "fa fa-refresh fa-lg", "aria-hidden": "true" }))),
                    React.createElement(reactstrap_1.Input, { className: "px-2 mx-1", name: "url" }),
                    React.createElement(CaptureButton_1.CaptureButton, null),
                    React.createElement(BrowserConfigurationInputGroup_1.BrowserConfigurationInputGroup, null)))));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJvd3Nlck5hdkJhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkJyb3dzZXJOYXZCYXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwyQ0FBc0U7QUFDdEUsbUVBQTJDO0FBQzNDLHFGQUFnRjtBQUNoRixtREFBOEM7QUFFOUMsTUFBTSxhQUFjLFNBQVEsS0FBSyxDQUFDLFNBQXNCO0lBRXBELFlBQVksS0FBVSxFQUFFLE9BQVk7UUFDaEMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sTUFBTTtRQUNULE9BQU8sQ0FFSDtZQUVJLG9CQUFDLGdCQUFNLElBQUMsS0FBSyxRQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLCtCQUErQjtnQkFFL0Qsb0JBQUMsdUJBQVUsSUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxFQUFFO29CQUU5QixvQkFBQyw0QkFBZSxJQUFDLFNBQVMsRUFBQyxTQUFTLEVBQ25CLEtBQUssRUFBQywwQkFBMEI7d0JBRTdDLG9CQUFDLG1CQUFNLElBQUMsSUFBSSxFQUFDLFFBQVEsRUFDYixTQUFTLEVBQUMsMkJBQTJCLGdCQUMxQixFQUFFOzRCQUVqQiw4QkFBTSxTQUFTLEVBQUMscUJBQXFCLGlCQUFhLE1BQU0sR0FBUSxDQUUzRCxDQUVLO29CQUVsQixvQkFBQyxrQkFBSyxJQUFDLFNBQVMsRUFBQyxXQUFXLEVBQUMsSUFBSSxFQUFDLEtBQUssR0FBRztvQkFFMUMsb0JBQUMsNkJBQWEsT0FBRTtvQkFHaEIsb0JBQUMsK0RBQThCLE9BQUUsQ0FFeEIsQ0FDUixDQUVQLENBQ1QsQ0FBQztJQUNOLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7QnV0dG9uLCBJbnB1dCwgSW5wdXRHcm91cCwgSW5wdXRHcm91cEFkZG9ufSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCBOYXZiYXIgZnJvbSAncmVhY3RzdHJhcC9saWIvTmF2YmFyJztcbmltcG9ydCB7QnJvd3NlckNvbmZpZ3VyYXRpb25JbnB1dEdyb3VwfSBmcm9tICcuL0Jyb3dzZXJDb25maWd1cmF0aW9uSW5wdXRHcm91cCc7XG5pbXBvcnQge0NhcHR1cmVCdXR0b259IGZyb20gJy4vQ2FwdHVyZUJ1dHRvbic7XG5cbmNsYXNzIEJyb3dzZXJOYXZCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnksIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgICAgIDxOYXZiYXIgbGlnaHQgZXhwYW5kPVwibWRcIiBjbGFzc05hbWU9XCJwLTIgYm9yZGVyLWJvdHRvbSBsaW5rLW5hdmJhclwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwIHNpemU9XCJzbVwiIGNsYXNzTmFtZT1cIlwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cEFkZG9uIGFkZG9uVHlwZT1cInByZXBlbmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlJlZnJlc2ggdGhlIGN1cnJlbnQgcGFnZVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhIGZhLXJlZnJlc2ggZmEtbGdcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwQWRkb24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBjbGFzc05hbWU9XCJweC0yIG14LTFcIiBuYW1lPVwidXJsXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcHR1cmVCdXR0b24vPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCcm93c2VyQ29uZmlndXJhdGlvbklucHV0R3JvdXAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cbiAgICAgICAgICAgICAgICA8L05hdmJhcj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICAgIGRyb3Bkb3duT3BlbjogYm9vbGVhbjtcbiAgICBzcGxpdEJ1dHRvbk9wZW46IGJvb2xlYW47XG5cbn1cblxuXG4iXX0=