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
const DropdownToggle_1 = __importDefault(require("reactstrap/lib/DropdownToggle"));
const DropdownMenu_1 = __importDefault(require("reactstrap/lib/DropdownMenu"));
const reactstrap_1 = require("reactstrap");
const SettingsDropdownItem_1 = require("./SettingsDropdownItem");
class SettingsDropdown extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(reactstrap_1.UncontrolledDropdown, { className: "ml-1", size: "sm", id: "settings-dropdown" },
            React.createElement(DropdownToggle_1.default, { className: "text-muted", color: "light", caret: true },
                React.createElement("i", { className: "fas fa-cog", style: { fontSize: '17px' } })),
            React.createElement(DropdownMenu_1.default, { className: "shadow", right: true },
                React.createElement(SettingsDropdownItem_1.SettingsDropdownItem, { name: "settings-auto-resume", defaultValue: true, prefs: this.props.prefs, title: "Automatically Resume Reading Position", tooltip: "Automatically resume the current reading position when opening documents." }))));
    }
}
exports.SettingsDropdown = SettingsDropdown;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2V0dGluZ3NEcm9wZG93bi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNldHRpbmdzRHJvcGRvd24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQixtRkFBMkQ7QUFDM0QsK0VBQXVEO0FBQ3ZELDJDQUFnRDtBQUNoRCxpRUFBNEQ7QUFHNUQsTUFBYSxnQkFBaUIsU0FBUSxLQUFLLENBQUMsYUFBNkI7SUFFckUsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFTSxNQUFNO1FBRVQsT0FBTyxDQUNILG9CQUFDLGlDQUFvQixJQUFDLFNBQVMsRUFBQyxNQUFNLEVBQ2hCLElBQUksRUFBQyxJQUFJLEVBQ1QsRUFBRSxFQUFDLG1CQUFtQjtZQUV4QyxvQkFBQyx3QkFBYyxJQUFDLFNBQVMsRUFBQyxZQUFZLEVBQ3RCLEtBQUssRUFBQyxPQUFPLEVBQ2IsS0FBSztnQkFFakIsMkJBQUcsU0FBUyxFQUFDLFlBQVksRUFBQyxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsTUFBTSxFQUFDLEdBQU0sQ0FFNUM7WUFFakIsb0JBQUMsc0JBQVksSUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLEtBQUs7Z0JBRWxDLG9CQUFDLDJDQUFvQixJQUFDLElBQUksRUFBQyxzQkFBc0IsRUFDM0IsWUFBWSxFQUFFLElBQUksRUFDbEIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUN2QixLQUFLLEVBQUMsdUNBQXVDLEVBQzdDLE9BQU8sRUFBQywyRUFBMkUsR0FBRSxDQUVoRyxDQUVJLENBQzFCLENBQUM7SUFFTixDQUFDO0NBR0o7QUFyQ0QsNENBcUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IERyb3Bkb3duVG9nZ2xlIGZyb20gJ3JlYWN0c3RyYXAvbGliL0Ryb3Bkb3duVG9nZ2xlJztcbmltcG9ydCBEcm9wZG93bk1lbnUgZnJvbSAncmVhY3RzdHJhcC9saWIvRHJvcGRvd25NZW51JztcbmltcG9ydCB7VW5jb250cm9sbGVkRHJvcGRvd259IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IHtTZXR0aW5nc0Ryb3Bkb3duSXRlbX0gZnJvbSAnLi9TZXR0aW5nc0Ryb3Bkb3duSXRlbSc7XG5pbXBvcnQge1ByZWZzfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvdXRpbC9wcmVmcy9QcmVmcyc7XG5cbmV4cG9ydCBjbGFzcyBTZXR0aW5nc0Ryb3Bkb3duIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VW5jb250cm9sbGVkRHJvcGRvd24gY2xhc3NOYW1lPVwibWwtMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNldHRpbmdzLWRyb3Bkb3duXCI+XG5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25Ub2dnbGUgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJldD5cblxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY29nXCIgc3R5bGU9e3tmb250U2l6ZTogJzE3cHgnfX0+PC9pPlxuXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93blRvZ2dsZT5cblxuICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnUgY2xhc3NOYW1lPVwic2hhZG93XCIgcmlnaHQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPFNldHRpbmdzRHJvcGRvd25JdGVtIG5hbWU9XCJzZXR0aW5ncy1hdXRvLXJlc3VtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVmcz17dGhpcy5wcm9wcy5wcmVmc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQXV0b21hdGljYWxseSBSZXN1bWUgUmVhZGluZyBQb3NpdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwPVwiQXV0b21hdGljYWxseSByZXN1bWUgdGhlIGN1cnJlbnQgcmVhZGluZyBwb3NpdGlvbiB3aGVuIG9wZW5pbmcgZG9jdW1lbnRzLlwiLz5cblxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxuXG4gICAgICAgICAgICA8L1VuY29udHJvbGxlZERyb3Bkb3duPlxuICAgICAgICApO1xuXG4gICAgfVxuXG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgcHJlZnM6ICgpID0+IFByZWZzIHwgdW5kZWZpbmVkO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcblxufVxuIl19