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
const Logger_1 = require("../../logger/Logger");
const Button_1 = __importDefault(require("reactstrap/lib/Button"));
const log = Logger_1.Logger.create();
class Styles {
}
class FlashcardButtons extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(Button_1.default, { color: "secondary", size: "sm", className: "", onClick: () => this.props.onCancel() }, "Cancel"),
            React.createElement(Button_1.default, { color: "primary", size: "sm", className: "ml-1", onClick: () => this.props.onCreate() }, "Create")));
    }
}
exports.FlashcardButtons = FlashcardButtons;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxhc2hjYXJkQnV0dG9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkZsYXNoY2FyZEJ1dHRvbnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQixnREFBMkM7QUFDM0MsbUVBQTJDO0FBRTNDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFNLE1BQU07Q0FFWDtBQUVELE1BQWEsZ0JBQWlCLFNBQVEsS0FBSyxDQUFDLGFBQTZCO0lBRXJFLFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQ1osQ0FBQztJQUVOLENBQUM7SUFFTSxNQUFNO1FBRVQsT0FBTyxDQUVIO1lBRUksb0JBQUMsZ0JBQU0sSUFBQyxLQUFLLEVBQUMsV0FBVyxFQUNqQixJQUFJLEVBQUMsSUFBSSxFQUNULFNBQVMsRUFBQyxFQUFFLEVBQ1osT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLGFBRW5DO1lBRVQsb0JBQUMsZ0JBQU0sSUFBQyxLQUFLLEVBQUMsU0FBUyxFQUNmLElBQUksRUFBQyxJQUFJLEVBQ1QsU0FBUyxFQUFDLE1BQU0sRUFDaEIsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLGFBRW5DLENBRVAsQ0FFVCxDQUFDO0lBRU4sQ0FBQztDQUVKO0FBcENELDRDQW9DQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3RzdHJhcC9saWIvQnV0dG9uJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5jbGFzcyBTdHlsZXMge1xuXG59XG5cbmV4cG9ydCBjbGFzcyBGbGFzaGNhcmRCdXR0b25zIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25DYW5jZWwoKX0+XG4gICAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkNyZWF0ZSgpfT5cbiAgICAgICAgICAgICAgICAgICAgQ3JlYXRlXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IG9uQ2FuY2VsOiAoKSA9PiB2b2lkO1xuICAgIHJlYWRvbmx5IG9uQ3JlYXRlOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZSB7XG59XG5cblxuIl19