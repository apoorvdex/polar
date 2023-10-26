"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Logger_1 = require("../../logger/Logger");
const Button_1 = __importDefault(require("reactstrap/lib/Button"));
const PopoverBody_1 = __importDefault(require("reactstrap/lib/PopoverBody"));
const reactstrap_1 = require("reactstrap");
const Functions_1 = require("../../util/Functions");
const AccountControlBar_1 = require("./AccountControlBar");
const AppRuntime_1 = require("../../AppRuntime");
const log = Logger_1.Logger.create();
const Styles = {
    dropdownChevron: {
        display: 'inline-block',
        width: 0,
        height: 0,
        marginLeft: '.255em',
        verticalAlign: '.255em',
        borderTop: '.3em solid',
        borderRight: '.3em solid transparent',
        borderBottom: 0,
        borderLeft: '.3em solid transparent',
        color: 'var(--secondary)'
    }
};
class AccountControlDropdown extends react_1.default.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(Button_1.default, { color: "primary", id: "account-control-button", size: "sm", onClick: () => Functions_1.NULL_FUNCTION, className: "header-filter-clickable p-1 pl-2 pr-2 border" },
                react_1.default.createElement("i", { className: "fas fa-cloud-upload-alt", style: { marginRight: '5px' } }),
                AppRuntime_1.AppRuntime.isBrowser() ? 'Account' : 'Cloud Sync',
                react_1.default.createElement("div", { className: "text-white", style: Styles.dropdownChevron })),
            react_1.default.createElement(reactstrap_1.UncontrolledPopover, { trigger: "legacy", placement: "bottom", target: "account-control-button", style: { maxWidth: '600px' } },
                react_1.default.createElement(PopoverBody_1.default, { className: "shadow" },
                    react_1.default.createElement(AccountControlBar_1.AccountControlBar, { userInfo: this.props.userInfo, onInvite: this.props.onInvite, onLogout: this.props.onLogout })))));
    }
}
exports.AccountControlDropdown = AccountControlDropdown;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudENvbnRyb2xEcm9wZG93bi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFjY291bnRDb250cm9sRHJvcGRvd24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0Esa0RBQTBCO0FBQzFCLGdEQUEyQztBQUUzQyxtRUFBMkM7QUFFM0MsNkVBQXFEO0FBQ3JELDJDQUErRDtBQUUvRCxvREFBbUQ7QUFDbkQsMkRBQXNEO0FBQ3RELGlEQUE0QztBQUU1QyxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBTSxNQUFNLEdBQWM7SUFFdEIsZUFBZSxFQUFFO1FBRWIsT0FBTyxFQUFFLGNBQWM7UUFDdkIsS0FBSyxFQUFFLENBQUM7UUFDUixNQUFNLEVBQUUsQ0FBQztRQUNULFVBQVUsRUFBRSxRQUFRO1FBQ3BCLGFBQWEsRUFBRSxRQUFRO1FBQ3ZCLFNBQVMsRUFBRSxZQUFZO1FBQ3ZCLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsWUFBWSxFQUFFLENBQUM7UUFDZixVQUFVLEVBQUUsd0JBQXdCO1FBQ3BDLEtBQUssRUFBRSxrQkFBa0I7S0FFNUI7Q0FFSixDQUFDO0FBRUYsTUFBYSxzQkFBdUIsU0FBUSxlQUFLLENBQUMsYUFBNkI7SUFJM0UsWUFBWSxLQUFhO1FBQ3JCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUdqQixDQUFDO0lBRU0sTUFBTTtRQUVULE9BQU8sQ0FFSDtZQUVJLDhCQUFDLGdCQUFNLElBQUMsS0FBSyxFQUFDLFNBQVMsRUFDZixFQUFFLEVBQUMsd0JBQXdCLEVBQzNCLElBQUksRUFBQyxJQUFJLEVBQ1QsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLHlCQUFhLEVBRTVCLFNBQVMsRUFBQyw4Q0FBOEM7Z0JBRTVELHFDQUFHLFNBQVMsRUFBQyx5QkFBeUIsRUFBQyxLQUFLLEVBQUUsRUFBQyxXQUFXLEVBQUUsS0FBSyxFQUFDLEdBQU07Z0JBRXZFLHVCQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsWUFBWTtnQkFFbEQsdUNBQUssU0FBUyxFQUFDLFlBQVksRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLGVBQWUsR0FBUSxDQUU1RDtZQUVULDhCQUFDLGdDQUFtQixJQUFDLE9BQU8sRUFBQyxRQUFRLEVBQ2hCLFNBQVMsRUFBQyxRQUFRLEVBQ2xCLE1BQU0sRUFBQyx3QkFBd0IsRUFDL0IsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLE9BQU8sRUFBQztnQkFFM0MsOEJBQUMscUJBQVcsSUFBQyxTQUFTLEVBQUMsUUFBUTtvQkFDM0IsOEJBQUMscUNBQWlCLElBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUM3QixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQzdCLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUV6QyxDQUVJLENBRXBCLENBRVQsQ0FBQztJQUVOLENBQUM7Q0FFSjtBQW5ERCx3REFtREMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgcmVhY3Qvbm8tbXVsdGktY29tcDogMCwgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7VXNlckluZm99IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy9hcHBzL3JlcG9zaXRvcnkvYXV0aF9oYW5kbGVyL0F1dGhIYW5kbGVyJztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3RzdHJhcC9saWIvQnV0dG9uJztcbmltcG9ydCBQb3BvdmVyIGZyb20gJ3JlYWN0c3RyYXAvbGliL1BvcG92ZXInO1xuaW1wb3J0IFBvcG92ZXJCb2R5IGZyb20gJ3JlYWN0c3RyYXAvbGliL1BvcG92ZXJCb2R5JztcbmltcG9ydCB7RHJvcGRvd25Ub2dnbGUsIFVuY29udHJvbGxlZFBvcG92ZXJ9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IHtJU3R5bGVNYXB9IGZyb20gJy4uLy4uL3JlYWN0L0lTdHlsZU1hcCc7XG5pbXBvcnQge05VTExfRlVOQ1RJT059IGZyb20gJy4uLy4uL3V0aWwvRnVuY3Rpb25zJztcbmltcG9ydCB7QWNjb3VudENvbnRyb2xCYXJ9IGZyb20gJy4vQWNjb3VudENvbnRyb2xCYXInO1xuaW1wb3J0IHtBcHBSdW50aW1lfSBmcm9tICcuLi8uLi9BcHBSdW50aW1lJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5jb25zdCBTdHlsZXM6IElTdHlsZU1hcCA9IHtcblxuICAgIGRyb3Bkb3duQ2hldnJvbjoge1xuXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBtYXJnaW5MZWZ0OiAnLjI1NWVtJyxcbiAgICAgICAgdmVydGljYWxBbGlnbjogJy4yNTVlbScsXG4gICAgICAgIGJvcmRlclRvcDogJy4zZW0gc29saWQnLFxuICAgICAgICBib3JkZXJSaWdodDogJy4zZW0gc29saWQgdHJhbnNwYXJlbnQnLFxuICAgICAgICBib3JkZXJCb3R0b206IDAsXG4gICAgICAgIGJvcmRlckxlZnQ6ICcuM2VtIHNvbGlkIHRyYW5zcGFyZW50JyxcbiAgICAgICAgY29sb3I6ICd2YXIoLS1zZWNvbmRhcnkpJ1xuXG4gICAgfVxuXG59O1xuXG5leHBvcnQgY2xhc3MgQWNjb3VudENvbnRyb2xEcm9wZG93biBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhY2NvdW50LWNvbnRyb2wtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBOVUxMX0ZVTkNUSU9OfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXItZmlsdGVyLWNsaWNrYWJsZSBwLTEgcGwtMiBwci0yIGJvcmRlclwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jbG91ZC11cGxvYWQtYWx0XCIgc3R5bGU9e3ttYXJnaW5SaWdodDogJzVweCd9fT48L2k+XG5cbiAgICAgICAgICAgICAgICAgICAge0FwcFJ1bnRpbWUuaXNCcm93c2VyKCkgPyAnQWNjb3VudCcgOiAnQ2xvdWQgU3luYyd9XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCIgc3R5bGU9e1N0eWxlcy5kcm9wZG93bkNoZXZyb259PjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgICA8VW5jb250cm9sbGVkUG9wb3ZlciB0cmlnZ2VyPVwibGVnYWN5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cImFjY291bnQtY29udHJvbC1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWF4V2lkdGg6ICc2MDBweCd9fT5cblxuICAgICAgICAgICAgICAgICAgICA8UG9wb3ZlckJvZHkgY2xhc3NOYW1lPVwic2hhZG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3VudENvbnRyb2xCYXIgdXNlckluZm89e3RoaXMucHJvcHMudXNlckluZm99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnZpdGU9e3RoaXMucHJvcHMub25JbnZpdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Mb2dvdXQ9e3RoaXMucHJvcHMub25Mb2dvdXR9Lz5cblxuICAgICAgICAgICAgICAgICAgICA8L1BvcG92ZXJCb2R5PlxuXG4gICAgICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWRQb3BvdmVyPlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuXG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuXG4gICAgcmVhZG9ubHkgdXNlckluZm86IFVzZXJJbmZvO1xuXG4gICAgcmVhZG9ubHkgb25JbnZpdGU6ICgpID0+IHZvaWQ7XG5cbiAgICByZWFkb25seSBvbkxvZ291dDogKCkgPT4gdm9pZDtcblxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbn1cbiJdfQ==