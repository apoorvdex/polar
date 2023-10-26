"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const reactstrap_1 = require("reactstrap");
class BrowserConfigurationInputGroup extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            open: false
        };
    }
    render() {
        return (react_1.default.createElement(reactstrap_1.InputGroupButtonDropdown, { title: "Configure browser settings for capture", addonType: "append", isOpen: this.state.open, toggle: this.toggle },
            react_1.default.createElement(reactstrap_1.DropdownToggle, { caret: true },
                react_1.default.createElement("span", { className: "fa fa-chrome fa-lg", "aria-hidden": "true" })),
            react_1.default.createElement(reactstrap_1.DropdownMenu, null,
                react_1.default.createElement(reactstrap_1.DropdownItem, { header: true }, "Browser:"),
                react_1.default.createElement(reactstrap_1.DropdownItem, { divider: true }),
                react_1.default.createElement(reactstrap_1.DropdownItem, null, "Mobile Galaxy S8 (412x846)"))));
    }
    toggle() {
        this.setState({
            open: !this.state.open
        });
    }
}
exports.BrowserConfigurationInputGroup = BrowserConfigurationInputGroup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJvd3NlckNvbmZpZ3VyYXRpb25JbnB1dEdyb3VwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQnJvd3NlckNvbmZpZ3VyYXRpb25JbnB1dEdyb3VwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtEQUEwQjtBQUMxQiwyQ0FBZ0c7QUFFaEcsTUFBYSw4QkFBK0IsU0FBUSxlQUFLLENBQUMsU0FBNkI7SUFFbkYsWUFBWSxLQUFVO1FBQ2xCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUViLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULElBQUksRUFBRSxLQUFLO1NBQ2QsQ0FBQztJQUNOLENBQUM7SUFFTSxNQUFNO1FBQ1QsT0FBTyxDQUNILDhCQUFDLHFDQUF3QixJQUNyQixLQUFLLEVBQUMsd0NBQXdDLEVBQzlDLFNBQVMsRUFBQyxRQUFRLEVBQ2xCLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFDdkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLDhCQUFDLDJCQUFjLElBQUMsS0FBSztnQkFDaEIsd0NBQU0sU0FBUyxFQUFDLG9CQUFvQixpQkFBYSxNQUFNLEdBQVEsQ0FDbkQ7WUFDakIsOEJBQUMseUJBQVk7Z0JBQ1QsOEJBQUMseUJBQVksSUFBQyxNQUFNLHFCQUF3QjtnQkFDNUMsOEJBQUMseUJBQVksSUFBQyxPQUFPLFNBQUc7Z0JBQ3hCLDhCQUFDLHlCQUFZLHFDQUEwQyxDQUM1QyxDQUNRLENBQzlCLENBQUM7SUFDTixDQUFDO0lBRU8sTUFBTTtRQUNWLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDVixJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7U0FDekIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUVKO0FBcENELHdFQW9DQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0Ryb3Bkb3duSXRlbSwgRHJvcGRvd25NZW51LCBEcm9wZG93blRvZ2dsZSwgSW5wdXRHcm91cEJ1dHRvbkRyb3Bkb3dufSBmcm9tICdyZWFjdHN0cmFwJztcblxuZXhwb3J0IGNsYXNzIEJyb3dzZXJDb25maWd1cmF0aW9uSW5wdXRHcm91cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIEludGVybmFsU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMudG9nZ2xlID0gdGhpcy50b2dnbGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG9wZW46IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxJbnB1dEdyb3VwQnV0dG9uRHJvcGRvd25cbiAgICAgICAgICAgICAgICB0aXRsZT1cIkNvbmZpZ3VyZSBicm93c2VyIHNldHRpbmdzIGZvciBjYXB0dXJlXCJcbiAgICAgICAgICAgICAgICBhZGRvblR5cGU9XCJhcHBlbmRcIlxuICAgICAgICAgICAgICAgIGlzT3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuICAgICAgICAgICAgICAgIHRvZ2dsZT17dGhpcy50b2dnbGV9PlxuICAgICAgICAgICAgICAgIDxEcm9wZG93blRvZ2dsZSBjYXJldD5cbiAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhIGZhLWNocm9tZSBmYS1sZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duVG9nZ2xlPlxuICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnU+XG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gaGVhZGVyPkJyb3dzZXI6PC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gZGl2aWRlciAvPlxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPk1vYmlsZSBHYWxheHkgUzggKDQxMng4NDYpPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XG4gICAgICAgICAgICA8L0lucHV0R3JvdXBCdXR0b25Ecm9wZG93bj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBvcGVuOiAhdGhpcy5zdGF0ZS5vcGVuXG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSW50ZXJuYWxTdGF0ZSB7XG4gICAgb3BlbjogYm9vbGVhbjtcbn1cbiJdfQ==