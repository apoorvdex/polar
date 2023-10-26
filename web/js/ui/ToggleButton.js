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
class ToggleButton extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { value: this.props.initialValue !== undefined ? this.props.initialValue : false };
        this.toggle = this.toggle.bind(this);
    }
    render() {
        const bgClassName = this.state.value ? 'bg-primary' : 'bg-secondary';
        const iconClassName = this.state.value ? 'fas fa-check' : 'fas fa-minus';
        return (React.createElement(Button_1.default, { id: this.props.id || "", color: "light p-0 pr-1 border rounded", onClick: () => this.toggle(), size: "sm" },
            React.createElement("div", { style: { display: 'flex' } },
                React.createElement("div", { className: bgClassName + " p-1 text-light rounded-left", style: { verticalAlign: 'middle', textAlign: 'center', width: '2.5em' } },
                    "\u00A0",
                    React.createElement("i", { className: iconClassName }),
                    "\u00A0"),
                React.createElement("div", { className: "p-1", style: { verticalAlign: 'middle' } },
                    "\u00A0",
                    this.props.label))));
    }
    toggle() {
        const value = !this.state.value;
        this.setState(Object.assign({}, this.state, { value }));
        this.props.onChange(value);
    }
}
exports.ToggleButton = ToggleButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9nZ2xlQnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVG9nZ2xlQnV0dG9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsbUVBQTJDO0FBRTNDLE1BQWEsWUFBYSxTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUU3RCxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUMsQ0FBQztRQUU5RixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXpDLENBQUM7SUFFTSxNQUFNO1FBRVQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDO1FBQ3JFLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQztRQUV6RSxPQUFPLENBRUgsb0JBQUMsZ0JBQU0sSUFBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxFQUN2QixLQUFLLEVBQUMsK0JBQStCLEVBQ3JDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQzVCLElBQUksRUFBQyxJQUFJO1lBRWIsNkJBQUssS0FBSyxFQUFFLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBQztnQkFFekIsNkJBQUssU0FBUyxFQUFFLFdBQVcsR0FBRyw4QkFBOEIsRUFDdkQsS0FBSyxFQUFFLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUM7O29CQUVoRSwyQkFBRyxTQUFTLEVBQUUsYUFBYSxHQUFNOzZCQUVyQztnQkFFTiw2QkFBSyxTQUFTLEVBQUMsS0FBSyxFQUNmLEtBQUssRUFBRSxFQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUM7O29CQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FDckIsQ0FFSixDQUVELENBRVosQ0FBQztJQUNOLENBQUM7SUFFTSxNQUFNO1FBRVQsTUFBTSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNoQyxJQUFJLENBQUMsUUFBUSxtQkFBSyxJQUFJLENBQUMsS0FBSyxJQUFFLEtBQUssSUFBRSxDQUFDO1FBRXRDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRS9CLENBQUM7Q0FHSjtBQXRERCxvQ0FzREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0c3RyYXAvbGliL0J1dHRvbic7XG5cbmV4cG9ydCBjbGFzcyBUb2dnbGVCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt2YWx1ZTogdGhpcy5wcm9wcy5pbml0aWFsVmFsdWUgIT09IHVuZGVmaW5lZCA/IHRoaXMucHJvcHMuaW5pdGlhbFZhbHVlIDogZmFsc2V9O1xuXG4gICAgICAgIHRoaXMudG9nZ2xlID0gdGhpcy50b2dnbGUuYmluZCh0aGlzKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgYmdDbGFzc05hbWUgPSB0aGlzLnN0YXRlLnZhbHVlID8gJ2JnLXByaW1hcnknIDogJ2JnLXNlY29uZGFyeSc7XG4gICAgICAgIGNvbnN0IGljb25DbGFzc05hbWUgPSB0aGlzLnN0YXRlLnZhbHVlID8gJ2ZhcyBmYS1jaGVjaycgOiAnZmFzIGZhLW1pbnVzJztcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8QnV0dG9uIGlkPXt0aGlzLnByb3BzLmlkIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwibGlnaHQgcC0wIHByLTEgYm9yZGVyIHJvdW5kZWRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnRvZ2dsZSgpfVxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIj5cblxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCd9fT5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YmdDbGFzc05hbWUgKyBcIiBwLTEgdGV4dC1saWdodCByb3VuZGVkLWxlZnRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3ZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLCB0ZXh0QWxpZ246ICdjZW50ZXInLCB3aWR0aDogJzIuNWVtJ319PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDs8aSBjbGFzc05hbWU9e2ljb25DbGFzc05hbWV9PjwvaT4mbmJzcDtcblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7e3RoaXMucHJvcHMubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZSgpIHtcblxuICAgICAgICBjb25zdCB2YWx1ZSA9ICF0aGlzLnN0YXRlLnZhbHVlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsuLi50aGlzLnN0YXRlLCB2YWx1ZX0pO1xuXG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUpO1xuXG4gICAgfVxuXG5cbn1cblxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSBpZD86IHN0cmluZztcbiAgICByZWFkb25seSBpbml0aWFsVmFsdWU/OiBib29sZWFuO1xuICAgIHJlYWRvbmx5IGxhYmVsOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgb25DaGFuZ2U6ICh2YWx1ZTogYm9vbGVhbikgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG5cbiAgICByZWFkb25seSB2YWx1ZTogYm9vbGVhbjtcblxufVxuXG5cbiJdfQ==