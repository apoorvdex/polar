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
const ListGroupItem_1 = __importDefault(require("reactstrap/lib/ListGroupItem"));
class RepoSidebarItem extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const hash = document.location.hash !== '' ? document.location.hash : "#";
        const active = hash === this.props.href;
        return (React.createElement(ListGroupItem_1.default, Object.assign({}, (this.props.id ? { id: this.props.id } : {}), { active: active, tag: "a", href: this.props.href, onClick: () => this.props.onClick(), action: true }),
            React.createElement("div", { style: { display: 'flex' } },
                React.createElement("div", { style: { width: '1em', textAlign: 'right' } },
                    React.createElement("i", { className: this.props.iconClassName })),
                React.createElement("div", { style: { paddingLeft: '10px', fontWeight: 'normal' } }, this.props.text))));
    }
}
exports.RepoSidebarItem = RepoSidebarItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb1NpZGViYXJJdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUmVwb1NpZGViYXJJdGVtLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsaUZBQXlEO0FBS3pELE1BQWEsZUFBZ0IsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFaEUsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRTFCLENBQUM7SUFFTSxNQUFNO1FBRVQsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLFFBQVMsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBRTVFLE1BQU0sTUFBTSxHQUFHLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztRQUV4QyxPQUFPLENBRUgsb0JBQUMsdUJBQWEsb0JBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQzlDLE1BQU0sRUFBRSxNQUFNLEVBQ2QsR0FBRyxFQUFDLEdBQUcsRUFDUCxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQ3JCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUNuQyxNQUFNO1lBTWpCLDZCQUFLLEtBQUssRUFBRSxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUM7Z0JBRXpCLDZCQUFLLEtBQUssRUFBRSxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBQztvQkFDMUMsMkJBQUcsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFNLENBQzFDO2dCQUVOLDZCQUFLLEtBQUssRUFBRSxFQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBQyxJQUNsRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDZCxDQUVKLENBRU0sQ0FFbkIsQ0FBQztJQUVOLENBQUM7Q0FFSjtBQTVDRCwwQ0E0Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGlzdEdyb3VwSXRlbSBmcm9tICdyZWFjdHN0cmFwL2xpYi9MaXN0R3JvdXBJdGVtJztcblxuLyoqXG4gKiBTaW1wbGUgaGVhZGVyIGZvciB0aGUgcmVwb3NpdG9yeSB3aGljaCBzdXBwb3J0cyBhcmJpdHJhcnkgY2hpbGRyZW4uXG4gKi9cbmV4cG9ydCBjbGFzcyBSZXBvU2lkZWJhckl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IGhhc2ggPSBkb2N1bWVudC5sb2NhdGlvbiEuaGFzaCAhPT0gJycgPyBkb2N1bWVudC5sb2NhdGlvbiEuaGFzaCA6IFwiI1wiO1xuXG4gICAgICAgIGNvbnN0IGFjdGl2ZSA9IGhhc2ggPT09IHRoaXMucHJvcHMuaHJlZjtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8TGlzdEdyb3VwSXRlbSB7Li4uKHRoaXMucHJvcHMuaWQgPyB7aWQ6IHRoaXMucHJvcHMuaWR9IDoge30pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc9XCJhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3RoaXMucHJvcHMuaHJlZn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25DbGljaygpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPlxuXG4gICAgICAgICAgICAgICAgey8qPGRpdiBzdHlsZT17e3Bvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6ICcwcHgnLCBsZWZ0OiAnNTVweCd9PiovfVxuICAgICAgICAgICAgICAgIHsvKjxpIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5pY29uQ2xhc3NOYW1lfT48L2k+Ki99XG4gICAgICAgICAgICAgICAgey8qPC9kaXY+Ki99XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiAnMWVtJywgdGV4dEFsaWduOiAncmlnaHQnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e3RoaXMucHJvcHMuaWNvbkNsYXNzTmFtZX0+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0xlZnQ6ICcxMHB4JywgZm9udFdlaWdodDogJ25vcm1hbCd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRleHR9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvTGlzdEdyb3VwSXRlbT5cblxuICAgICAgICApO1xuXG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xuICAgIHJlYWRvbmx5IGhyZWY6IHN0cmluZztcbiAgICByZWFkb25seSBpY29uQ2xhc3NOYW1lOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgdGV4dDogc3RyaW5nO1xuICAgIHJlYWRvbmx5IG9uQ2xpY2s6ICgpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuIl19