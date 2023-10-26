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
const reactstrap_1 = require("reactstrap");
const Logger_1 = require("../../logger/Logger");
const ConfirmPopover_1 = require("../../ui/confirm/ConfirmPopover");
const log = Logger_1.Logger.create();
class ConfirmDropdownItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onSelected = this.onSelected.bind(this);
        this.onCancelled = this.onCancelled.bind(this);
        this.onConfirmed = this.onConfirmed.bind(this);
        this.state = {
            selected: false
        };
    }
    render() {
        return (React.createElement("div", { className: "" },
            React.createElement(reactstrap_1.DropdownItem, { onClick: () => this.onSelected() }, this.props.text),
            React.createElement(ConfirmPopover_1.ConfirmPopover, { open: this.state.selected, target: this.props.target, title: this.props.prompt, onCancel: () => this.onCancelled(), onConfirm: () => this.onConfirmed() })));
    }
    onSelected() {
        this.setState({ selected: true });
    }
    onCancelled() {
        if (this.props.onCancelled) {
            this.props.onCancelled();
        }
    }
    onConfirmed() {
        if (this.props.onConfirmed) {
            this.props.onConfirmed();
        }
    }
}
exports.ConfirmDropdownItem = ConfirmDropdownItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlybURyb3Bkb3duSXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvbmZpcm1Ecm9wZG93bkl0ZW0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwyQ0FBeUY7QUFDekYsZ0RBQTJDO0FBRTNDLG9FQUErRDtBQUUvRCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFPNUIsTUFBYSxtQkFBb0IsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFcEUsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRS9DLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxRQUFRLEVBQUUsS0FBSztTQUNsQixDQUFDO0lBRU4sQ0FBQztJQUVNLE1BQU07UUFFVCxPQUFPLENBRUgsNkJBQUssU0FBUyxFQUFDLEVBQUU7WUFFYixvQkFBQyx5QkFBWSxJQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQ3pDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNMO1lBRWYsb0JBQUMsK0JBQWMsSUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQ3pCLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFDekIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUN4QixRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUNsQyxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBRXBELENBRVQsQ0FBQztJQUVOLENBQUM7SUFFTyxVQUFVO1FBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTyxXQUFXO1FBQ2YsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRTtZQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzVCO0lBQ0wsQ0FBQztJQUVPLFdBQVc7UUFFZixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDNUI7SUFFTCxDQUFDO0NBRUo7QUF2REQsa0RBdURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtEcm9wZG93biwgRHJvcGRvd25JdGVtLCBEcm9wZG93bk1lbnUsIERyb3Bkb3duVG9nZ2xlLCBUb29sdGlwfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7SVN0eWxlTWFwfSBmcm9tICcuLi8uLi9yZWFjdC9JU3R5bGVNYXAnO1xuaW1wb3J0IHtDb25maXJtUG9wb3Zlcn0gZnJvbSAnLi4vLi4vdWkvY29uZmlybS9Db25maXJtUG9wb3Zlcic7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBkb2Vzbid0IHdvcmsuIEl0IHdvdWxkIGJlIG1vcmUgZWxlZ2FudCB0byBkbyB0aGlzIGJ1dCBJIHRoaW5rIGl0XG4gKiBzdG9wcyB3b3JraW5nIGJlY2F1c2UgdGhlIHBhcmVudCBpdGVtIGlzIG5vIGxvbmdlciBvcGVuIGFuZCByZWFjdHN0YXAgZG9lc24ndFxuICogZGlzcGxheSB0aGUgY29tcG9uZW50LlxuICovXG5leHBvcnQgY2xhc3MgQ29uZmlybURyb3Bkb3duSXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLm9uU2VsZWN0ZWQgPSB0aGlzLm9uU2VsZWN0ZWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNhbmNlbGxlZCA9IHRoaXMub25DYW5jZWxsZWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNvbmZpcm1lZCA9IHRoaXMub25Db25maXJtZWQuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIG9uQ2xpY2s9eygpID0+IHRoaXMub25TZWxlY3RlZCgpfT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMudGV4dH1cbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cblxuICAgICAgICAgICAgICAgIDxDb25maXJtUG9wb3ZlciBvcGVuPXt0aGlzLnN0YXRlLnNlbGVjdGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9e3RoaXMucHJvcHMudGFyZ2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy5wcm9tcHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB0aGlzLm9uQ2FuY2VsbGVkKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29uZmlybT17KCkgPT4gdGhpcy5vbkNvbmZpcm1lZCgpfS8+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uU2VsZWN0ZWQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkOiB0cnVlfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNhbmNlbGxlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25DYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DYW5jZWxsZWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25Db25maXJtZWQoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Db25maXJtZWQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Db25maXJtZWQoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuXG4gICAgdGV4dDogc3RyaW5nO1xuXG4gICAgdGFyZ2V0OiBzdHJpbmc7XG5cbiAgICBwcm9tcHQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBpdGVtIGhhcyBiZWVuIGNhbmNlbGxlZC5cbiAgICAgKi9cbiAgICBvbkNhbmNlbGxlZD86ICgpID0+IHZvaWQ7XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgaXRlbSBoYXMgYmVlbiBjb25maXJtZWQuXG4gICAgICovXG4gICAgb25Db25maXJtZWQ/OiAoKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcblxuICAgIHNlbGVjdGVkOiBib29sZWFuO1xuXG59XG4iXX0=