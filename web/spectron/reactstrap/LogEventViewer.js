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
const LogEventComponent_1 = require("./LogEventComponent");
class LogEventViewer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.sequence = 0;
        this.state = {
            rendered: []
        };
    }
    componentDidMount() {
        this.props.progress.addEventListener(syncBarProgress => {
            const logEvent = { message: syncBarProgress.message };
            this.state.rendered.push(React.createElement(LogEventComponent_1.LogEventComponent, { key: this.sequence++, logEvent: logEvent }));
            this.setState(this.state);
        });
    }
    render() {
        return this.state.rendered;
    }
}
exports.LogEventViewer = LogEventViewer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nRXZlbnRWaWV3ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJMb2dFdmVudFZpZXdlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLDJEQUFzRDtBQUl0RCxNQUFhLGNBQWUsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFJL0QsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBSGxCLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFLekIsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULFFBQVEsRUFBRSxFQUFFO1NBQ2YsQ0FBQztJQUVOLENBQUM7SUFFTSxpQkFBaUI7UUFFcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFFbkQsTUFBTSxRQUFRLEdBQWEsRUFBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLE9BQVEsRUFBQyxDQUFDO1lBRS9ELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxvQkFBQyxxQ0FBaUIsSUFBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBRXpGLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTlCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLE1BQU07UUFDVCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO0lBQy9CLENBQUM7Q0FFSjtBQTlCRCx3Q0E4QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xvZ0V2ZW50Q29tcG9uZW50fSBmcm9tICcuL0xvZ0V2ZW50Q29tcG9uZW50JztcbmltcG9ydCB7SUV2ZW50RGlzcGF0Y2hlcn0gZnJvbSAnLi4vLi4vanMvcmVhY3Rvci9TaW1wbGVSZWFjdG9yJztcbmltcG9ydCB7U3luY0JhclByb2dyZXNzfSBmcm9tICcuLi8uLi9qcy91aS9zeW5jX2Jhci9TeW5jQmFyJztcblxuZXhwb3J0IGNsYXNzIExvZ0V2ZW50Vmlld2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBwcml2YXRlIHNlcXVlbmNlOiBudW1iZXIgPSAwO1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcmVuZGVyZWQ6IFtdXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy5wcm9wcy5wcm9ncmVzcy5hZGRFdmVudExpc3RlbmVyKHN5bmNCYXJQcm9ncmVzcyA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGxvZ0V2ZW50OiBMb2dFdmVudCA9IHttZXNzYWdlOiBzeW5jQmFyUHJvZ3Jlc3MubWVzc2FnZSF9O1xuXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnJlbmRlcmVkLnB1c2goPExvZ0V2ZW50Q29tcG9uZW50IGtleT17dGhpcy5zZXF1ZW5jZSsrfSBsb2dFdmVudD17bG9nRXZlbnR9Lz4pO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUpO1xuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnJlbmRlcmVkO1xuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICAvLyBsb2dFdmVudHM6IExvZ0V2ZW50W107XG4gICAgcHJvZ3Jlc3M6IElFdmVudERpc3BhdGNoZXI8U3luY0JhclByb2dyZXNzPjtcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gICAgcmVhZG9ubHkgcmVuZGVyZWQ6IGFueVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvZ0V2ZW50IHtcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG59XG5cblxuIl19