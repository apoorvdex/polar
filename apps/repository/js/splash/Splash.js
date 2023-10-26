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
const Logger_1 = require("../../../../web/js/logger/Logger");
const LargeModal_1 = require("../../../../web/js/ui/large_modal/LargeModal");
const LargeModalBody_1 = require("../../../../web/js/ui/large_modal/LargeModalBody");
const ConditionalSetting_1 = require("../../../../web/js/ui/util/ConditionalSetting");
const Button_1 = __importDefault(require("reactstrap/lib/Button"));
const Label_1 = __importDefault(require("reactstrap/lib/Label"));
const FormGroup_1 = __importDefault(require("reactstrap/lib/FormGroup"));
const Input_1 = __importDefault(require("reactstrap/lib/Input"));
const ModalFooter_1 = __importDefault(require("reactstrap/lib/ModalFooter"));
const log = Logger_1.Logger.create();
const Styles = {
    label: {
        cursor: 'pointer',
        userSelect: 'none'
    }
};
class Splash extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.doNotShowAgain = false;
        this.state = {
            open: true
        };
        this.onClose = this.onClose.bind(this);
        this.onLater = this.onLater.bind(this);
        this.onDoNotShowAgain = this.onDoNotShowAgain.bind(this);
    }
    render() {
        const CloseButton = () => {
            if (this.props.disableClose) {
                return (React.createElement("div", null));
            }
            else {
                return (React.createElement(Button_1.default, { color: "primary", size: "sm", onClick: () => this.onClose() }, "Close"));
            }
        };
        const DontShowAgain = () => {
            if (this.props.disableDontShowAgain) {
                return (React.createElement("div", null));
            }
            else {
                return (React.createElement(FormGroup_1.default, { check: true },
                    React.createElement(Label_1.default, { check: true, style: Styles.label },
                        React.createElement(Input_1.default, { type: "checkbox", onChange: (event) => this.onDoNotShowAgain(!this.doNotShowAgain) }),
                        "Don't show again")));
            }
        };
        return (React.createElement(LargeModal_1.LargeModal, { isOpen: this.state.open },
            React.createElement(LargeModalBody_1.LargeModalBody, null, this.props.children),
            React.createElement(ModalFooter_1.default, null,
                React.createElement(DontShowAgain, null),
                React.createElement(Button_1.default, { color: "secondary", size: "sm", onClick: () => this.onLater() }, "Later"),
                React.createElement(CloseButton, null))));
    }
    onDoNotShowAgain(value) {
        this.doNotShowAgain = value;
    }
    onLater() {
        const conditionalSetting = new ConditionalSetting_1.ConditionalSetting(this.props.settingKey);
        const after = Date.now() + (24 * 60 * 60 * 1000);
        conditionalSetting.set(`${after}`);
        this.setState({ open: false });
    }
    onClose() {
        if (this.doNotShowAgain) {
            const conditionalSetting = new ConditionalSetting_1.ConditionalSetting(this.props.settingKey);
            conditionalSetting.set('do-not-show-again');
        }
        this.setState({ open: false });
    }
}
exports.Splash = Splash;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BsYXNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU3BsYXNoLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsNkRBQXdEO0FBQ3hELDZFQUF3RTtBQUN4RSxxRkFBZ0Y7QUFFaEYsc0ZBQWlGO0FBQ2pGLG1FQUEyQztBQUMzQyxpRUFBeUM7QUFDekMseUVBQWlEO0FBQ2pELGlFQUF5QztBQUN6Qyw2RUFBcUQ7QUFFckQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQU0sTUFBTSxHQUFjO0lBQ3RCLEtBQUssRUFBRTtRQUNILE1BQU0sRUFBRSxTQUFTO1FBQ2pCLFVBQVUsRUFBRSxNQUFNO0tBQ3JCO0NBQ0osQ0FBQztBQUVGLE1BQWEsTUFBTyxTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUl2RCxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFIbEIsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFLcEMsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULElBQUksRUFBRSxJQUFJO1NBQ2IsQ0FBQztRQUVGLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUU3RCxDQUFDO0lBRU0sTUFBTTtRQUVULE1BQU0sV0FBVyxHQUFHLEdBQUcsRUFBRTtZQUVyQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFO2dCQUN6QixPQUFPLENBQUMsZ0NBQU0sQ0FBQyxDQUFDO2FBQ25CO2lCQUFNO2dCQUNILE9BQU8sQ0FBQyxvQkFBQyxnQkFBTSxJQUFDLEtBQUssRUFBQyxTQUFTLEVBQ2YsSUFBSSxFQUFDLElBQUksRUFDVCxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxZQUFnQixDQUFDLENBQUM7YUFDbEU7UUFFTCxDQUFDLENBQUM7UUFFRixNQUFNLGFBQWEsR0FBRyxHQUFHLEVBQUU7WUFFdkIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLG9CQUFvQixFQUFFO2dCQUNqQyxPQUFPLENBQUMsZ0NBQU0sQ0FBQyxDQUFDO2FBQ25CO2lCQUFNO2dCQUNILE9BQU8sQ0FBQyxvQkFBQyxtQkFBUyxJQUFDLEtBQUs7b0JBQ3BCLG9CQUFDLGVBQUssSUFBQyxLQUFLLFFBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO3dCQUU1QixvQkFBQyxlQUFLLElBQUMsSUFBSSxFQUFDLFVBQVUsRUFDZixRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRzsyQ0FJdEUsQ0FDQSxDQUFDLENBQUM7YUFDakI7UUFFTCxDQUFDLENBQUM7UUFFRixPQUFPLENBRUgsb0JBQUMsdUJBQVUsSUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO1lBRS9CLG9CQUFDLCtCQUFjLFFBRVYsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBRVA7WUFFakIsb0JBQUMscUJBQVc7Z0JBRVIsb0JBQUMsYUFBYSxPQUFFO2dCQUdoQixvQkFBQyxnQkFBTSxJQUFDLEtBQUssRUFBQyxXQUFXLEVBQ2pCLElBQUksRUFBQyxJQUFJLEVBQ1QsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsWUFBZ0I7Z0JBRXJELG9CQUFDLFdBQVcsT0FBRSxDQUVKLENBRUwsQ0FFaEIsQ0FBQztJQUVOLENBQUM7SUFFTyxnQkFBZ0IsQ0FBQyxLQUFjO1FBQ25DLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFFTyxPQUFPO1FBRVgsTUFBTSxrQkFBa0IsR0FDbEIsSUFBSSx1Q0FBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXBELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBRWpELGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUM7UUFFbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBRWpDLENBQUM7SUFHTyxPQUFPO1FBRVgsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBRXJCLE1BQU0sa0JBQWtCLEdBQ2xCLElBQUksdUNBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUVwRCxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUUvQztRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztJQUVqQyxDQUFDO0NBRUo7QUFoSEQsd0JBZ0hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7TGFyZ2VNb2RhbH0gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL3VpL2xhcmdlX21vZGFsL0xhcmdlTW9kYWwnO1xuaW1wb3J0IHtMYXJnZU1vZGFsQm9keX0gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL3VpL2xhcmdlX21vZGFsL0xhcmdlTW9kYWxCb2R5JztcbmltcG9ydCB7SVN0eWxlTWFwfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvcmVhY3QvSVN0eWxlTWFwJztcbmltcG9ydCB7Q29uZGl0aW9uYWxTZXR0aW5nfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvdWkvdXRpbC9Db25kaXRpb25hbFNldHRpbmcnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdHN0cmFwL2xpYi9CdXR0b24nO1xuaW1wb3J0IExhYmVsIGZyb20gJ3JlYWN0c3RyYXAvbGliL0xhYmVsJztcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSAncmVhY3RzdHJhcC9saWIvRm9ybUdyb3VwJztcbmltcG9ydCBJbnB1dCBmcm9tICdyZWFjdHN0cmFwL2xpYi9JbnB1dCc7XG5pbXBvcnQgTW9kYWxGb290ZXIgZnJvbSAncmVhY3RzdHJhcC9saWIvTW9kYWxGb290ZXInO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmNvbnN0IFN0eWxlczogSVN0eWxlTWFwID0ge1xuICAgIGxhYmVsOiB7XG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICB1c2VyU2VsZWN0OiAnbm9uZSdcbiAgICB9XG59O1xuXG5leHBvcnQgY2xhc3MgU3BsYXNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBwcml2YXRlIGRvTm90U2hvd0FnYWluOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBvcGVuOiB0cnVlXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5vbkNsb3NlID0gdGhpcy5vbkNsb3NlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25MYXRlciA9IHRoaXMub25MYXRlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uRG9Ob3RTaG93QWdhaW4gPSB0aGlzLm9uRG9Ob3RTaG93QWdhaW4uYmluZCh0aGlzKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgQ2xvc2VCdXR0b24gPSAoKSA9PiB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVDbG9zZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoPGRpdi8+KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICg8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMub25DbG9zZSgpfT5DbG9zZTwvQnV0dG9uPik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBEb250U2hvd0FnYWluID0gKCkgPT4ge1xuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlRG9udFNob3dBZ2Fpbikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoPGRpdi8+KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICg8Rm9ybUdyb3VwIGNoZWNrPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2hlY2sgc3R5bGU9e1N0eWxlcy5sYWJlbH0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMub25Eb05vdFNob3dBZ2FpbighdGhpcy5kb05vdFNob3dBZ2Fpbil9Lz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgRG9uJ3Qgc2hvdyBhZ2FpblxuXG4gICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxMYXJnZU1vZGFsIGlzT3Blbj17dGhpcy5zdGF0ZS5vcGVufT5cblxuICAgICAgICAgICAgICAgIDxMYXJnZU1vZGFsQm9keT5cblxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblxuICAgICAgICAgICAgICAgIDwvTGFyZ2VNb2RhbEJvZHk+XG5cbiAgICAgICAgICAgICAgICA8TW9kYWxGb290ZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPERvbnRTaG93QWdhaW4vPlxuXG4gICAgICAgICAgICAgICAgICAgIHsvKlRPRE86IG1ha2UgbGF0ZXIgc2hvdyB1cCBhIHdlZWsgbGF0ZXIuLi4qL31cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uTGF0ZXIoKX0+TGF0ZXI8L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICA8Q2xvc2VCdXR0b24vPlxuXG4gICAgICAgICAgICAgICAgPC9Nb2RhbEZvb3Rlcj5cblxuICAgICAgICAgICAgPC9MYXJnZU1vZGFsPlxuXG4gICAgICAgICk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRG9Ob3RTaG93QWdhaW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5kb05vdFNob3dBZ2FpbiA9IHZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25MYXRlcigpIHtcblxuICAgICAgICBjb25zdCBjb25kaXRpb25hbFNldHRpbmdcbiAgICAgICAgICAgID0gbmV3IENvbmRpdGlvbmFsU2V0dGluZyh0aGlzLnByb3BzLnNldHRpbmdLZXkpO1xuXG4gICAgICAgIGNvbnN0IGFmdGVyID0gRGF0ZS5ub3coKSArICgyNCAqIDYwICogNjAgKiAxMDAwKTtcblxuICAgICAgICBjb25kaXRpb25hbFNldHRpbmcuc2V0KGAke2FmdGVyfWApO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IGZhbHNlfSk7XG5cbiAgICB9XG5cblxuICAgIHByaXZhdGUgb25DbG9zZSgpIHtcblxuICAgICAgICBpZiAodGhpcy5kb05vdFNob3dBZ2Fpbikge1xuXG4gICAgICAgICAgICBjb25zdCBjb25kaXRpb25hbFNldHRpbmdcbiAgICAgICAgICAgICAgICA9IG5ldyBDb25kaXRpb25hbFNldHRpbmcodGhpcy5wcm9wcy5zZXR0aW5nS2V5KTtcblxuICAgICAgICAgICAgY29uZGl0aW9uYWxTZXR0aW5nLnNldCgnZG8tbm90LXNob3ctYWdhaW4nKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KTtcblxuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSBzZXR0aW5nS2V5OiBzdHJpbmc7XG5cbiAgICByZWFkb25seSBkaXNhYmxlRG9udFNob3dBZ2Fpbj86IGJvb2xlYW47XG4gICAgcmVhZG9ubHkgZGlzYWJsZUNsb3NlPzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gICAgcmVhZG9ubHkgb3BlbjogYm9vbGVhbjtcbn1cblxuIl19