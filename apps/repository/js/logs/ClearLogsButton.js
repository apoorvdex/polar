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
const MemoryLogger_1 = require("../../../../web/js/logger/MemoryLogger");
const Button_1 = __importDefault(require("reactstrap/lib/Button"));
const log = Logger_1.Logger.create();
class Styles {
}
class ClearLogsButton extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(Button_1.default, { size: "sm", onClick: () => this.onClick() }, "Clear"));
    }
    onClick() {
        MemoryLogger_1.MemoryLogger.clear();
    }
}
exports.default = ClearLogsButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xlYXJMb2dzQnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ2xlYXJMb2dzQnV0dG9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsNkRBQXdEO0FBQ3hELHlFQUFvRTtBQUNwRSxtRUFBMkM7QUFFM0MsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQU0sTUFBTTtDQUVYO0FBRUQsTUFBcUIsZUFBZ0IsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFeEUsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFTSxNQUFNO1FBRVQsT0FBTyxDQUNILG9CQUFDLGdCQUFNLElBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxZQUV0QyxDQUNaLENBQUM7SUFFTixDQUFDO0lBRU8sT0FBTztRQUNYLDJCQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQztDQUVKO0FBcEJELGtDQW9CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge01lbW9yeUxvZ2dlcn0gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL2xvZ2dlci9NZW1vcnlMb2dnZXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdHN0cmFwL2xpYi9CdXR0b24nO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmNsYXNzIFN0eWxlcyB7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xlYXJMb2dzQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtXCIgb25DbGljaz17KCkgPT4gdGhpcy5vbkNsaWNrKCl9PlxuICAgICAgICAgICAgICAgIENsZWFyXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25DbGljaygpIHtcbiAgICAgICAgTWVtb3J5TG9nZ2VyLmNsZWFyKCk7XG4gICAgfVxuXG59XG5cblxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3RhdGUge1xuXG59XG4iXX0=