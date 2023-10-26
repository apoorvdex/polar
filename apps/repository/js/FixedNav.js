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
class FixedNav extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement("div", Object.assign({}, (this.props.id ? { id: this.props.id } : {}), (this.props.className ? { className: this.props.className } : {}), { style: {
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
            } }), this.props.children));
    }
}
exports.FixedNav = FixedNav;
class FixedNavBody extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement("div", Object.assign({}, (this.props.id ? { id: this.props.id } : {}), (this.props.className ? { className: this.props.className } : {}), { style: {
                flexGrow: 1,
                overflowY: 'auto',
                height: '100%'
            } }), this.props.children));
    }
}
exports.FixedNavBody = FixedNavBody;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRml4ZWROYXYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGaXhlZE5hdi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBRy9CLE1BQWEsUUFBUyxTQUFRLEtBQUssQ0FBQyxTQUFzQjtJQUV0RCxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLE1BQU07UUFDVCxPQUFPLENBRUgsNkNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQzFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUNuRSxLQUFLLEVBQUU7Z0JBQ0gsT0FBTyxFQUFFLE1BQU07Z0JBQ2YsYUFBYSxFQUFFLFFBQVE7Z0JBQ3ZCLE1BQU0sRUFBRSxNQUFNO2FBQ2pCLEtBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBRWxCLENBRVQsQ0FBQztJQUNOLENBQUM7Q0FFSjtBQXhCRCw0QkF3QkM7QUFFRCxNQUFhLFlBQWEsU0FBUSxLQUFLLENBQUMsU0FBc0I7SUFFMUQsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFTSxNQUFNO1FBQ1QsT0FBTyxDQUVILDZDQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUMxQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFDbkUsS0FBSyxFQUFFO2dCQUNSLFFBQVEsRUFBRSxDQUFDO2dCQUNYLFNBQVMsRUFBRSxNQUFNO2dCQUNqQixNQUFNLEVBQUUsTUFBTTthQUNqQixLQUVJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUVsQixDQUVULENBQUM7SUFDTixDQUFDO0NBRUo7QUF4QkQsb0NBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5cbmV4cG9ydCBjbGFzcyBGaXhlZE5hdiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIGFueT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2IHsuLi4odGhpcy5wcm9wcy5pZCA/IHtpZDogdGhpcy5wcm9wcy5pZH0gOiB7fSl9XG4gICAgICAgICAgICAgICAgIHsuLi4odGhpcy5wcm9wcy5jbGFzc05hbWUgPyB7Y2xhc3NOYW1lOiB0aGlzLnByb3BzLmNsYXNzTmFtZX0gOiB7fSl9XG4gICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgICAgICAgICAgICAgIH19PlxuXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBGaXhlZE5hdkJvZHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBhbnk+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdiB7Li4uKHRoaXMucHJvcHMuaWQgPyB7aWQ6IHRoaXMucHJvcHMuaWR9IDoge30pfVxuICAgICAgICAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuY2xhc3NOYW1lID8ge2NsYXNzTmFtZTogdGhpcy5wcm9wcy5jbGFzc05hbWV9IDoge30pfVxuICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93WTogJ2F1dG8nLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgICAgICAgICB9fT5cblxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgY2xhc3NOYW1lPzogc3RyaW5nO1xufVxuXG4iXX0=