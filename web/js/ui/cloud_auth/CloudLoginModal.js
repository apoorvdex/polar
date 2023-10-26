"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const reactstrap_1 = require("reactstrap");
const LargeModal_1 = require("../large_modal/LargeModal");
const LargeModalBody_1 = require("../large_modal/LargeModalBody");
const Firebase_1 = require("../../firebase/Firebase");
const FirebaseUIAuth_1 = require("../../firebase/FirebaseUIAuth");
const Nav_1 = require("../util/Nav");
class CloudLoginModal extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.doAuthContainer();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        this.doAuthContainer();
    }
    doAuthContainer() {
        if (this.props.isOpen) {
            Firebase_1.Firebase.init();
            const signInSuccessUrl = Nav_1.Nav.createHashURL('configured');
            FirebaseUIAuth_1.FirebaseUIAuth.login({ signInSuccessUrl });
        }
    }
    render() {
        return (react_1.default.createElement(LargeModal_1.LargeModal, { isOpen: this.props.isOpen },
            react_1.default.createElement(reactstrap_1.ModalHeader, null, "Login to Polar"),
            react_1.default.createElement(LargeModalBody_1.LargeModalBody, null,
                react_1.default.createElement("div", { id: "firebaseui-auth-container" })),
            react_1.default.createElement(reactstrap_1.ModalFooter, null,
                react_1.default.createElement(reactstrap_1.Button, { color: "secondary", onClick: () => this.props.onCancel() }, "Cancel"))));
    }
}
exports.CloudLoginModal = CloudLoginModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xvdWRMb2dpbk1vZGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ2xvdWRMb2dpbk1vZGFsLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLGtEQUEwQjtBQUMxQiwyQ0FBb0c7QUFFcEcsMERBQXFEO0FBRXJELGtFQUE2RDtBQUM3RCxzREFBaUQ7QUFDakQsa0VBQTZEO0FBQzdELHFDQUFnQztBQUVoQyxNQUFhLGVBQWdCLFNBQVEsZUFBSyxDQUFDLFNBQXlCO0lBRWhFLFlBQVksS0FBYTtRQUNyQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFYixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQ1osQ0FBQztJQUVOLENBQUM7SUFFTSxpQkFBaUI7UUFDcEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTSxrQkFBa0IsQ0FBQyxTQUEyQixFQUFFLFNBQTJCLEVBQUUsUUFBYztRQUM5RixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVPLGVBQWU7UUFFbkIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNuQixtQkFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBRWhCLE1BQU0sZ0JBQWdCLEdBQUcsU0FBRyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN6RCwrQkFBYyxDQUFDLEtBQUssQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsQ0FBQztTQUU1QztJQUVMLENBQUM7SUFFTSxNQUFNO1FBQ1QsT0FBTyxDQUVILDhCQUFDLHVCQUFVLElBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTtZQUVqQyw4QkFBQyx3QkFBVyx5QkFBNkI7WUFDekMsOEJBQUMsK0JBQWM7Z0JBRVgsdUNBQUssRUFBRSxFQUFDLDJCQUEyQixHQUFPLENBRTdCO1lBQ2pCLDhCQUFDLHdCQUFXO2dCQUNSLDhCQUFDLG1CQUFNLElBQUMsS0FBSyxFQUFDLFdBQVcsRUFDakIsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLGFBRW5DLENBRUMsQ0FHTCxDQUVoQixDQUFDO0lBQ04sQ0FBQztDQUVKO0FBdkRELDBDQXVEQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCByZWFjdC9uby1tdWx0aS1jb21wOiAwLCByZWFjdC9wcm9wLXR5cGVzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtCdXR0b24sIE1vZGFsLCBNb2RhbEJvZHksIE1vZGFsRm9vdGVyLCBNb2RhbEhlYWRlciwgUG9wb3ZlciwgUG9wb3ZlckJvZHl9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IFBvcHBlciBmcm9tICdwb3BwZXIuanMnO1xuaW1wb3J0IHtMYXJnZU1vZGFsfSBmcm9tICcuLi9sYXJnZV9tb2RhbC9MYXJnZU1vZGFsJztcbmltcG9ydCB7V2hhdHNOZXdDb250ZW50fSBmcm9tICcuLi8uLi8uLi8uLi9hcHBzL3JlcG9zaXRvcnkvanMvc3BsYXNoL3NwbGFzaGVzL3doYXRzX25ldy9XaGF0c05ld0NvbnRlbnQnO1xuaW1wb3J0IHtMYXJnZU1vZGFsQm9keX0gZnJvbSAnLi4vbGFyZ2VfbW9kYWwvTGFyZ2VNb2RhbEJvZHknO1xuaW1wb3J0IHtGaXJlYmFzZX0gZnJvbSAnLi4vLi4vZmlyZWJhc2UvRmlyZWJhc2UnO1xuaW1wb3J0IHtGaXJlYmFzZVVJQXV0aH0gZnJvbSAnLi4vLi4vZmlyZWJhc2UvRmlyZWJhc2VVSUF1dGgnO1xuaW1wb3J0IHtOYXZ9IGZyb20gJy4uL3V0aWwvTmF2JztcblxuZXhwb3J0IGNsYXNzIENsb3VkTG9naW5Nb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kb0F1dGhDb250YWluZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wczogUmVhZG9ubHk8SVByb3BzPiwgcHJldlN0YXRlOiBSZWFkb25seTxJU3RhdGU+LCBzbmFwc2hvdD86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmRvQXV0aENvbnRhaW5lcigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZG9BdXRoQ29udGFpbmVyKCkge1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmlzT3Blbikge1xuICAgICAgICAgICAgRmlyZWJhc2UuaW5pdCgpO1xuXG4gICAgICAgICAgICBjb25zdCBzaWduSW5TdWNjZXNzVXJsID0gTmF2LmNyZWF0ZUhhc2hVUkwoJ2NvbmZpZ3VyZWQnKTtcbiAgICAgICAgICAgIEZpcmViYXNlVUlBdXRoLmxvZ2luKHtzaWduSW5TdWNjZXNzVXJsfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPExhcmdlTW9kYWwgaXNPcGVuPXt0aGlzLnByb3BzLmlzT3Blbn0+XG5cbiAgICAgICAgICAgICAgICA8TW9kYWxIZWFkZXI+TG9naW4gdG8gUG9sYXI8L01vZGFsSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxMYXJnZU1vZGFsQm9keT5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZmlyZWJhc2V1aS1hdXRoLWNvbnRhaW5lclwiPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9MYXJnZU1vZGFsQm9keT5cbiAgICAgICAgICAgICAgICA8TW9kYWxGb290ZXI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25DYW5jZWwoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgICA8L01vZGFsRm9vdGVyPlxuXG5cbiAgICAgICAgICAgIDwvTGFyZ2VNb2RhbD5cblxuICAgICAgICApO1xuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSBpc09wZW46IGJvb2xlYW47XG4gICAgcmVhZG9ubHkgb25DYW5jZWw6ICgpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuIl19