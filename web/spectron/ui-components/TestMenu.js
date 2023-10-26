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
const react_dropdown_1 = __importStar(require("@burtonator/react-dropdown"));
const Functions_1 = require("../../js/util/Functions");
class TestMenu extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(react_dropdown_1.default, { open: true, onToggle: Functions_1.NULL_FUNCTION, onSelect: Functions_1.NULL_FUNCTION },
                React.createElement(react_dropdown_1.DropdownMenu, null,
                    React.createElement(react_dropdown_1.MenuItem, { header: true }, "Header"),
                    React.createElement(react_dropdown_1.MenuItem, { eventKey: 1 }, "link"),
                    React.createElement(react_dropdown_1.MenuItem, { divider: true }),
                    React.createElement(react_dropdown_1.MenuItem, { header: true }, "Header"),
                    React.createElement(react_dropdown_1.MenuItem, { eventKey: 2 }, "link"),
                    React.createElement(react_dropdown_1.MenuItem, { eventKey: 3, disabled: true }, "disabled"),
                    React.createElement(react_dropdown_1.MenuItem, { eventKey: 4, title: "link with title" }, "link with title"),
                    React.createElement(react_dropdown_1.MenuItem, { eventKey: 5, active: true, onSelect: (eventKey) => {
                            alert(`Alert from menu item.\neventKey: ${eventKey}`);
                        } }, "link that alerts")))));
    }
}
exports.TestMenu = TestMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdE1lbnUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUZXN0TWVudS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLDZFQUFpSTtBQUNqSSx1REFBc0Q7QUFFdEQsTUFBYSxRQUFTLFNBQVEsS0FBSyxDQUFDLFNBQW1CO0lBRW5ELFlBQVksS0FBVSxFQUFFLE9BQVk7UUFDaEMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUd0QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQ1osQ0FBQztJQUVOLENBQUM7SUFFTSxNQUFNO1FBRVQsT0FBTyxDQUVIO1lBQ0ksb0JBQUMsd0JBQVEsSUFBQyxJQUFJLEVBQUUsSUFBSSxFQUNWLFFBQVEsRUFBRSx5QkFBYSxFQUN2QixRQUFRLEVBQUUseUJBQWE7Z0JBRTdCLG9CQUFDLDZCQUFZO29CQUVULG9CQUFDLHlCQUFRLElBQUMsTUFBTSxtQkFBa0I7b0JBQ2xDLG9CQUFDLHlCQUFRLElBQUMsUUFBUSxFQUFFLENBQUMsV0FBaUI7b0JBQ3RDLG9CQUFDLHlCQUFRLElBQUMsT0FBTyxTQUFHO29CQUNwQixvQkFBQyx5QkFBUSxJQUFDLE1BQU0sbUJBQWtCO29CQUNsQyxvQkFBQyx5QkFBUSxJQUFDLFFBQVEsRUFBRSxDQUFDLFdBQWlCO29CQUN0QyxvQkFBQyx5QkFBUSxJQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsUUFBUSxxQkFBb0I7b0JBQ25ELG9CQUFDLHlCQUFRLElBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUMsaUJBQWlCLHNCQUVuQztvQkFFWCxvQkFBQyx5QkFBUSxJQUFDLFFBQVEsRUFBRSxDQUFDLEVBQ1gsTUFBTSxRQUNOLFFBQVEsRUFBRSxDQUFDLFFBQWdCLEVBQUUsRUFBRTs0QkFDM0IsS0FBSyxDQUFDLG9DQUFvQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO3dCQUMxRCxDQUFDLHVCQUVBLENBQ0EsQ0FFUixDQUNULENBRVQsQ0FBQztJQUNOLENBQUM7Q0FFSjtBQS9DRCw0QkErQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRHJvcGRvd24sIHtEcm9wZG93bkJ1dHRvbiwgRHJvcGRvd25NZW51LCBEcm9wZG93bk1lbnVXcmFwcGVyLCBEcm9wZG93blRvZ2dsZSwgTWVudUl0ZW19IGZyb20gJ0BidXJ0b25hdG9yL3JlYWN0LWRyb3Bkb3duJztcbmltcG9ydCB7TlVMTF9GVU5DVElPTn0gZnJvbSAnLi4vLi4vanMvdXRpbC9GdW5jdGlvbnMnO1xuXG5leHBvcnQgY2xhc3MgVGVzdE1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnksIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxEcm9wZG93biBvcGVuPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblRvZ2dsZT17TlVMTF9GVU5DVElPTn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e05VTExfRlVOQ1RJT059PlxuXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBoZWFkZXI+SGVhZGVyPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBldmVudEtleT17MX0+bGluazwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZGl2aWRlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGhlYWRlcj5IZWFkZXI8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGV2ZW50S2V5PXsyfT5saW5rPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBldmVudEtleT17M30gZGlzYWJsZWQ+ZGlzYWJsZWQ8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGV2ZW50S2V5PXs0fSB0aXRsZT1cImxpbmsgd2l0aCB0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsgd2l0aCB0aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGV2ZW50S2V5PXs1fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsoZXZlbnRLZXk6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChgQWxlcnQgZnJvbSBtZW51IGl0ZW0uXFxuZXZlbnRLZXk6ICR7ZXZlbnRLZXl9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluayB0aGF0IGFsZXJ0c1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XG5cbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cbiJdfQ==