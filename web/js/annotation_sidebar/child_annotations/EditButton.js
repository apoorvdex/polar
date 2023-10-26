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
const RendererAnalytics_1 = require("../../../../web/js/ga/RendererAnalytics");
const Button_1 = __importDefault(require("reactstrap/lib/Button"));
const EditIcon_1 = require("../../../../web/js/ui/standard_icons/EditIcon");
class EditButton extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(Button_1.default, { id: this.props.id, className: "text-muted p-1", size: "sm", color: "light", title: 'Edit ' + this.props.type, onClick: () => this.onClick() },
            React.createElement(EditIcon_1.EditIcon, null)));
    }
    onClick() {
        RendererAnalytics_1.RendererAnalytics.event({ category: 'annotation-edit', action: this.props.type });
        this.props.onClick();
    }
}
exports.EditButton = EditButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWRpdEJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkVkaXRCdXR0b24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwrRUFBMEU7QUFDMUUsbUVBQTJDO0FBQzNDLDRFQUF1RTtBQUl2RSxNQUFhLFVBQVcsU0FBUSxLQUFLLENBQUMsYUFBNkI7SUFFL0QsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFTSxNQUFNO1FBRVQsT0FBTyxDQUVILG9CQUFDLGdCQUFNLElBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUNqQixTQUFTLEVBQUMsZ0JBQWdCLEVBQzFCLElBQUksRUFBQyxJQUFJLEVBQ1QsS0FBSyxFQUFDLE9BQU8sRUFDYixLQUFLLEVBQUUsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUNoQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUVqQyxvQkFBQyxtQkFBUSxPQUFFLENBRU4sQ0FDWixDQUFDO0lBRU4sQ0FBQztJQUVPLE9BQU87UUFFWCxxQ0FBaUIsQ0FBQyxLQUFLLENBQUMsRUFBQyxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBRXpCLENBQUM7Q0FFSjtBQS9CRCxnQ0ErQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1JlbmRlcmVyQW5hbHl0aWNzfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvZ2EvUmVuZGVyZXJBbmFseXRpY3MnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdHN0cmFwL2xpYi9CdXR0b24nO1xuaW1wb3J0IHtFZGl0SWNvbn0gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL3VpL3N0YW5kYXJkX2ljb25zL0VkaXRJY29uJztcblxuLyoqXG4gKi9cbmV4cG9ydCBjbGFzcyBFZGl0QnV0dG9uIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxCdXR0b24gaWQ9e3RoaXMucHJvcHMuaWR9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgcC0xXCJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnRWRpdCAnICsgdGhpcy5wcm9wcy50eXBlfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uQ2xpY2soKX0+XG5cbiAgICAgICAgICAgICAgICA8RWRpdEljb24vPlxuXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25DbGljaygpIHtcblxuICAgICAgICBSZW5kZXJlckFuYWx5dGljcy5ldmVudCh7Y2F0ZWdvcnk6ICdhbm5vdGF0aW9uLWVkaXQnLCBhY3Rpb246IHRoaXMucHJvcHMudHlwZX0pO1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2xpY2soKTtcblxuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaWQ6IHN0cmluZztcbiAgICByZWFkb25seSBvbkNsaWNrOiAoKSA9PiB2b2lkO1xuICAgIHJlYWRvbmx5IHR5cGU6ICdjb21tZW50JyB8ICdmbGFzaGNhcmQnO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcblxufVxuIl19