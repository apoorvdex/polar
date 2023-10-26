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
const SimpleTooltip_1 = require("../../../../web/js/ui/tooltip/SimpleTooltip");
const RendererAnalytics_1 = require("../../../../web/js/ga/RendererAnalytics");
const DropdownItem_1 = __importDefault(require("reactstrap/lib/DropdownItem"));
const Optional_1 = require("../../../../web/js/util/ts/Optional");
class TrackedDropdownItem extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(DropdownItem_1.default, { id: this.props.id, size: "sm", hidden: Optional_1.Optional.of(this.props.hidden).getOrElse(false), onClick: () => this.onClick() },
            React.createElement("div", { style: {
                    display: 'flex'
                } },
                React.createElement("div", { className: "text-muted", style: {
                        width: '22px',
                        display: 'flex'
                    } },
                    React.createElement("i", { className: this.props.icon, style: {
                            fontSize: '20px',
                            margin: 'auto',
                        } })),
                "\u00A0 ",
                this.props.title),
            React.createElement(SimpleTooltip_1.SimpleTooltip, { target: this.props.id, show: 0, placement: "left" }, this.props.tooltip)));
    }
    onClick() {
        const action = this.props.title.replace(/ /g, '').toLowerCase();
        RendererAnalytics_1.RendererAnalytics.event({ category: this.props.trackingCategory, action });
        this.props.onClick();
    }
}
exports.TrackedDropdownItem = TrackedDropdownItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhY2tlZERyb3Bkb3duSXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRyYWNrZWREcm9wZG93bkl0ZW0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwrRUFBMEU7QUFDMUUsK0VBQTBFO0FBQzFFLCtFQUF1RDtBQUN2RCxrRUFBNkQ7QUFJN0QsTUFBYSxtQkFBb0IsU0FBUSxLQUFLLENBQUMsYUFBK0M7SUFFMUYsWUFBWSxLQUErQixFQUFFLE9BQVk7UUFDckQsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sTUFBTTtRQUVULE9BQU8sQ0FFSCxvQkFBQyxzQkFBWSxJQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFDakIsSUFBSSxFQUFDLElBQUksRUFDVCxNQUFNLEVBQUUsbUJBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQ3ZELE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBRXZDLDZCQUFLLEtBQUssRUFBRTtvQkFDUixPQUFPLEVBQUUsTUFBTTtpQkFDbEI7Z0JBRUcsNkJBQUssU0FBUyxFQUFDLFlBQVksRUFDdEIsS0FBSyxFQUFFO3dCQUNILEtBQUssRUFBRSxNQUFNO3dCQUNiLE9BQU8sRUFBRSxNQUFNO3FCQUNsQjtvQkFFRiwyQkFBRyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQzFCLEtBQUssRUFBRTs0QkFDSCxRQUFRLEVBQUUsTUFBTTs0QkFDaEIsTUFBTSxFQUFFLE1BQU07eUJBQ2pCLEdBQU0sQ0FFUjs7Z0JBRUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBRXRCO1lBR04sb0JBQUMsNkJBQWEsSUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQ3JCLElBQUksRUFBRSxDQUFDLEVBQ1AsU0FBUyxFQUFDLE1BQU0sSUFFMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBRVAsQ0FFTCxDQUNsQixDQUFDO0lBRU4sQ0FBQztJQUVPLE9BQU87UUFFWCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2hFLHFDQUFpQixDQUFDLEtBQUssQ0FBQyxFQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7UUFFekUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUV6QixDQUFDO0NBRUo7QUE1REQsa0RBNERDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTaW1wbGVUb29sdGlwfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvdWkvdG9vbHRpcC9TaW1wbGVUb29sdGlwJztcbmltcG9ydCB7UmVuZGVyZXJBbmFseXRpY3N9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy9nYS9SZW5kZXJlckFuYWx5dGljcyc7XG5pbXBvcnQgRHJvcGRvd25JdGVtIGZyb20gJ3JlYWN0c3RyYXAvbGliL0Ryb3Bkb3duSXRlbSc7XG5pbXBvcnQge09wdGlvbmFsfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvdXRpbC90cy9PcHRpb25hbCc7XG5cbi8qKlxuICovXG5leHBvcnQgY2xhc3MgVHJhY2tlZERyb3Bkb3duSXRlbSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8VHJhY2tlZERyb3Bkb3duSXRlbVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBUcmFja2VkRHJvcGRvd25JdGVtUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8RHJvcGRvd25JdGVtIGlkPXt0aGlzLnByb3BzLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW49e09wdGlvbmFsLm9mKHRoaXMucHJvcHMuaGlkZGVuKS5nZXRPckVsc2UoZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uQ2xpY2soKX0+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4J1xuICAgICAgICAgICAgICAgIH19PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyMnB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnXG4gICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5pY29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzIwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+PC9pPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICZuYnNwOyB7dGhpcy5wcm9wcy50aXRsZX1cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICA8U2ltcGxlVG9vbHRpcCB0YXJnZXQ9e3RoaXMucHJvcHMuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdz17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJsZWZ0XCI+XG5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMudG9vbHRpcH1cblxuICAgICAgICAgICAgICAgIDwvU2ltcGxlVG9vbHRpcD5cblxuICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ2xpY2soKSB7XG5cbiAgICAgICAgY29uc3QgYWN0aW9uID0gdGhpcy5wcm9wcy50aXRsZS5yZXBsYWNlKC8gL2csICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBSZW5kZXJlckFuYWx5dGljcy5ldmVudCh7Y2F0ZWdvcnk6IHRoaXMucHJvcHMudHJhY2tpbmdDYXRlZ29yeSwgYWN0aW9ufSk7XG5cbiAgICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKCk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja2VkRHJvcGRvd25JdGVtUHJvcHMge1xuXG4gICAgcmVhZG9ubHkgaWQ6IHN0cmluZztcbiAgICByZWFkb25seSB0aXRsZTogc3RyaW5nO1xuICAgIHJlYWRvbmx5IHRvb2x0aXA6IHN0cmluZztcbiAgICByZWFkb25seSBpY29uOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgaGlkZGVuPzogYm9vbGVhbjtcbiAgICByZWFkb25seSBjbGFzc05hbWU/OiBzdHJpbmc7XG5cbiAgICByZWFkb25seSB0cmFja2luZ0NhdGVnb3J5OiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgb25DbGljazogKCkgPT4gdm9pZDtcblxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcblxufVxuIl19