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
const SimpleTooltip_1 = require("../../../../../web/js/ui/tooltip/SimpleTooltip");
const ConfirmPrompts_1 = require("../../../../../web/js/ui/confirm/ConfirmPrompts");
class MultiDeleteButton extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(Button_1.default, { id: "multi-delete-button", size: "sm", color: "light", className: "border", onClick: () => this.onClick() },
                React.createElement("span", { className: "text-danger" },
                    React.createElement("i", { className: "fas fa-trash-alt" }))),
            React.createElement(SimpleTooltip_1.SimpleTooltip, { target: "multi-delete-button", placement: "bottom" }, "Delete multiple documents at once.")));
    }
    onClick() {
        ConfirmPrompts_1.ConfirmPrompts.create({
            target: '#multi-delete-button',
            title: "Are you sure you want to delete these documents?",
            subtitle: "This is a permanent operation and can't be undone.",
            placement: 'bottom',
            onCancel: () => this.props.onCancel(),
            onConfirm: () => this.props.onConfirm(),
        });
    }
}
exports.MultiDeleteButton = MultiDeleteButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVsdGlEZWxldGVCdXR0b24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNdWx0aURlbGV0ZUJ1dHRvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLG1FQUEyQztBQUMzQyxrRkFBNkU7QUFDN0Usb0ZBQStFO0FBRS9FLE1BQWEsaUJBQWtCLFNBQVEsS0FBSyxDQUFDLFNBQXlCO0lBRWxFLFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQ1osQ0FBQztJQUVOLENBQUM7SUFFTSxNQUFNO1FBRVQsT0FBTyxDQUFDO1lBRUosb0JBQUMsZ0JBQU0sSUFBQyxFQUFFLEVBQUMscUJBQXFCLEVBQ3hCLElBQUksRUFBQyxJQUFJLEVBQ1QsS0FBSyxFQUFDLE9BQU8sRUFDYixTQUFTLEVBQUMsUUFBUSxFQUNsQixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFFakMsOEJBQU0sU0FBUyxFQUFDLGFBQWE7b0JBQ3pCLDJCQUFHLFNBQVMsRUFBQyxrQkFBa0IsR0FBSyxDQUNqQyxDQUVGO1lBRVQsb0JBQUMsNkJBQWEsSUFBQyxNQUFNLEVBQUMscUJBQXFCLEVBQzVCLFNBQVMsRUFBQyxRQUFRLHlDQUlqQixDQUVkLENBQUMsQ0FBQztJQUVaLENBQUM7SUFFTyxPQUFPO1FBRVgsK0JBQWMsQ0FBQyxNQUFNLENBQUM7WUFDbEIsTUFBTSxFQUFFLHNCQUFzQjtZQUM5QixLQUFLLEVBQUUsa0RBQWtEO1lBQ3pELFFBQVEsRUFBRSxvREFBb0Q7WUFDOUQsU0FBUyxFQUFFLFFBQVE7WUFDbkIsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQ3JDLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRTtTQUMxQyxDQUFDLENBQUM7SUFFUCxDQUFDO0NBRUo7QUFsREQsOENBa0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdHN0cmFwL2xpYi9CdXR0b24nO1xuaW1wb3J0IHtTaW1wbGVUb29sdGlwfSBmcm9tICcuLi8uLi8uLi8uLi8uLi93ZWIvanMvdWkvdG9vbHRpcC9TaW1wbGVUb29sdGlwJztcbmltcG9ydCB7Q29uZmlybVByb21wdHN9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3dlYi9qcy91aS9jb25maXJtL0NvbmZpcm1Qcm9tcHRzJztcblxuZXhwb3J0IGNsYXNzIE11bHRpRGVsZXRlQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoPGRpdj5cblxuICAgICAgICAgICAgPEJ1dHRvbiBpZD1cIm11bHRpLWRlbGV0ZS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5vbkNsaWNrKCl9PlxuXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRyYXNoLWFsdFwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICA8U2ltcGxlVG9vbHRpcCB0YXJnZXQ9XCJtdWx0aS1kZWxldGUtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiPlxuXG4gICAgICAgICAgICAgICAgRGVsZXRlIG11bHRpcGxlIGRvY3VtZW50cyBhdCBvbmNlLlxuXG4gICAgICAgICAgICA8L1NpbXBsZVRvb2x0aXA+XG5cbiAgICAgICAgPC9kaXY+KTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25DbGljaygpIHtcblxuICAgICAgICBDb25maXJtUHJvbXB0cy5jcmVhdGUoe1xuICAgICAgICAgICAgdGFyZ2V0OiAnI211bHRpLWRlbGV0ZS1idXR0b24nLFxuICAgICAgICAgICAgdGl0bGU6IFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGVzZSBkb2N1bWVudHM/XCIsXG4gICAgICAgICAgICBzdWJ0aXRsZTogXCJUaGlzIGlzIGEgcGVybWFuZW50IG9wZXJhdGlvbiBhbmQgY2FuJ3QgYmUgdW5kb25lLlwiLFxuICAgICAgICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgICAgICAgIG9uQ2FuY2VsOiAoKSA9PiB0aGlzLnByb3BzLm9uQ2FuY2VsKCksXG4gICAgICAgICAgICBvbkNvbmZpcm06ICgpID0+IHRoaXMucHJvcHMub25Db25maXJtKCksXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IG9uQ2FuY2VsOiAoKSA9PiB2b2lkO1xuICAgIHJlYWRvbmx5IG9uQ29uZmlybTogKCkgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG59XG4iXX0=