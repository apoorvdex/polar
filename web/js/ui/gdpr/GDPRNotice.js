"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Logger_1 = require("../../logger/Logger");
const Button_1 = __importDefault(require("reactstrap/lib/Button"));
const log = Logger_1.Logger.create();
class Styles {
}
Styles.notice = {
    position: 'fixed',
    width: '450px',
    bottom: '10px',
    right: '15px',
    zIndex: 999999,
    backgroundColor: '#ced4da',
};
Styles.intro = {
    fontWeight: 'bold',
    fontSize: '22px',
    margin: '5px 0px 10px 0px'
};
class GDPRNotice extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.onAccept = this.onAccept.bind(this);
        this.state = {
            disabled: window.localStorage.getItem('gdpr-accepted') === 'true'
        };
    }
    render() {
        const display = this.state.disabled ? 'none' : 'block';
        return (react_1.default.createElement("div", { style: { display } },
            react_1.default.createElement("div", { className: "p-3 m-2 rounded", style: Styles.notice },
                react_1.default.createElement("div", { className: "pt-1 pb-1" },
                    react_1.default.createElement("div", { style: Styles.intro }, "We use cookies to track your usage."),
                    react_1.default.createElement("p", null, "We use cookies to track your usage and to determine which features are used to improve the quality of Polar."),
                    react_1.default.createElement("p", null, "Additionally, we track application errors which helps us find bugs and to prioritize which issues to fix."),
                    react_1.default.createElement("p", null, "This data is sent to 3rd parties which provide the infrastructure necessary to provide the analytics services needed to analyze and store the data."),
                    react_1.default.createElement("p", null, "We avoid sending personally identifiable information at all times."),
                    react_1.default.createElement("div", { style: Styles.intro }, "Cloud storage and privacy."),
                    react_1.default.createElement("p", null, "When using Polar cloud sync we store your data in the cloud and authentication / authorization is controlled by the auth provider you select."),
                    react_1.default.createElement("p", null, "We do not sell your private data.  Your private data is your and we're not interested in selling, monetizing, or distributing it to 3rd parties except when necessary to provide data storage services.")),
                react_1.default.createElement("div", { className: "text-right" },
                    react_1.default.createElement(Button_1.default, { color: "primary", onClick: () => this.onAccept() }, "Accept")))));
    }
    onAccept() {
        window.localStorage.setItem('gdpr-accepted', 'true');
        this.setState({
            disabled: true
        });
    }
}
exports.GDPRNotice = GDPRNotice;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR0RQUk5vdGljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkdEUFJOb3RpY2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0Esa0RBQTBCO0FBTzFCLGdEQUEyQztBQUMzQyxtRUFBMkM7QUFFM0MsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQU0sTUFBTTs7QUFFTSxhQUFNLEdBQXdCO0lBRXhDLFFBQVEsRUFBRSxPQUFPO0lBQ2pCLEtBQUssRUFBRSxPQUFPO0lBQ2QsTUFBTSxFQUFFLE1BQU07SUFDZCxLQUFLLEVBQUUsTUFBTTtJQUNiLE1BQU0sRUFBRSxNQUFNO0lBQ2QsZUFBZSxFQUFFLFNBQVM7Q0FFN0IsQ0FBQztBQUVZLFlBQUssR0FBd0I7SUFFdkMsVUFBVSxFQUFFLE1BQU07SUFDbEIsUUFBUSxFQUFFLE1BQU07SUFDaEIsTUFBTSxFQUFFLGtCQUFrQjtDQUU3QixDQUFDO0FBTU4sTUFBYSxVQUFXLFNBQVEsZUFBSyxDQUFDLFNBQXNCO0lBRXhELFlBQVksS0FBVTtRQUNsQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFYixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXpDLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEtBQUssTUFBTTtTQUNwRSxDQUFDO0lBRU4sQ0FBQztJQUVNLE1BQU07UUFFVCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFFdkQsT0FBTyxDQUVILHVDQUFLLEtBQUssRUFBRSxFQUFDLE9BQU8sRUFBQztZQUVqQix1Q0FBSyxTQUFTLEVBQUMsaUJBQWlCLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNO2dCQUVqRCx1Q0FBSyxTQUFTLEVBQUMsV0FBVztvQkFFdEIsdUNBQUssS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLDBDQUVsQjtvQkFFTix3SkFHSTtvQkFFSixxSkFHSTtvQkFFSiwrTEFJSTtvQkFFSiw4R0FHSTtvQkFFSix1Q0FBSyxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssaUNBRWxCO29CQUVOLHlMQUlJO29CQUVKLG1QQUtJLENBRUY7Z0JBRU4sdUNBQUssU0FBUyxFQUFDLFlBQVk7b0JBRXZCLDhCQUFDLGdCQUFNLElBQUMsS0FBSyxFQUFDLFNBQVMsRUFBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxhQUFpQixDQUVyRSxDQUVKLENBRUosQ0FFVCxDQUFDO0lBQ04sQ0FBQztJQUVPLFFBQVE7UUFFWixNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFckQsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNWLFFBQVEsRUFBRSxJQUFJO1NBQ2pCLENBQUMsQ0FBQztJQUVQLENBQUM7Q0FFSjtBQTVGRCxnQ0E0RkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgcmVhY3Qvbm8tbXVsdGktY29tcDogMCwgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7SVN0eWxlTWFwfSBmcm9tICcuLi8uLi9yZWFjdC9JU3R5bGVNYXAnO1xuaW1wb3J0IHtQcm9ncmVzc30gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQge1JlYWN0b3J9IGZyb20gJy4uLy4uL3JlYWN0b3IvUmVhY3Rvcic7XG5pbXBvcnQgQ29sbGFwc2UgZnJvbSAncmVhY3RzdHJhcC9saWIvQ29sbGFwc2UnO1xuaW1wb3J0IHtJRXZlbnREaXNwYXRjaGVyfSBmcm9tICcuLi8uLi9yZWFjdG9yL1NpbXBsZVJlYWN0b3InO1xuaW1wb3J0IHtFdmVudExpc3RlbmVyfSBmcm9tICcuLi8uLi9yZWFjdG9yL0V2ZW50TGlzdGVuZXInO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uLy4uL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdHN0cmFwL2xpYi9CdXR0b24nO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmNsYXNzIFN0eWxlcyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIG5vdGljZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcblxuICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgd2lkdGg6ICc0NTBweCcsXG4gICAgICAgIGJvdHRvbTogJzEwcHgnLFxuICAgICAgICByaWdodDogJzE1cHgnLFxuICAgICAgICB6SW5kZXg6IDk5OTk5OSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2NlZDRkYScsXG5cbiAgICB9O1xuXG4gICAgcHVibGljIHN0YXRpYyBpbnRybzogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcblxuICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICAgIGZvbnRTaXplOiAnMjJweCcsXG4gICAgICAgIG1hcmdpbjogJzVweCAwcHggMTBweCAwcHgnXG5cbiAgICB9O1xuXG59XG5cbi8qKlxuICovXG5leHBvcnQgY2xhc3MgR0RQUk5vdGljZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5vbkFjY2VwdCA9IHRoaXMub25BY2NlcHQuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZGlzYWJsZWQ6IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2Rwci1hY2NlcHRlZCcpID09PSAndHJ1ZSdcbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgZGlzcGxheSA9IHRoaXMuc3RhdGUuZGlzYWJsZWQgPyAnbm9uZScgOiAnYmxvY2snO1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5fX0+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBtLTIgcm91bmRlZFwiIHN0eWxlPXtTdHlsZXMubm90aWNlfT5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTEgcGItMVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtTdHlsZXMuaW50cm99PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlIHVzZSBjb29raWVzIHRvIHRyYWNrIHlvdXIgdXNhZ2UuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2UgdXNlIGNvb2tpZXMgdG8gdHJhY2sgeW91ciB1c2FnZSBhbmQgdG8gZGV0ZXJtaW5lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpY2ggZmVhdHVyZXMgYXJlIHVzZWQgdG8gaW1wcm92ZSB0aGUgcXVhbGl0eSBvZiBQb2xhci5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkaXRpb25hbGx5LCB3ZSB0cmFjayBhcHBsaWNhdGlvbiBlcnJvcnMgd2hpY2ggaGVscHMgdXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5kIGJ1Z3MgYW5kIHRvIHByaW9yaXRpemUgd2hpY2ggaXNzdWVzIHRvIGZpeC5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBkYXRhIGlzIHNlbnQgdG8gM3JkIHBhcnRpZXMgd2hpY2ggcHJvdmlkZSB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZyYXN0cnVjdHVyZSBuZWNlc3NhcnkgdG8gcHJvdmlkZSB0aGUgYW5hbHl0aWNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZXMgbmVlZGVkIHRvIGFuYWx5emUgYW5kIHN0b3JlIHRoZSBkYXRhLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZSBhdm9pZCBzZW5kaW5nIHBlcnNvbmFsbHkgaWRlbnRpZmlhYmxlIGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXQgYWxsIHRpbWVzLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtTdHlsZXMuaW50cm99PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENsb3VkIHN0b3JhZ2UgYW5kIHByaXZhY3kuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2hlbiB1c2luZyBQb2xhciBjbG91ZCBzeW5jIHdlIHN0b3JlIHlvdXIgZGF0YSBpbiB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG91ZCBhbmQgYXV0aGVudGljYXRpb24gLyBhdXRob3JpemF0aW9uIGlzIGNvbnRyb2xsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBieSB0aGUgYXV0aCBwcm92aWRlciB5b3Ugc2VsZWN0LlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZSBkbyBub3Qgc2VsbCB5b3VyIHByaXZhdGUgZGF0YS4gIFlvdXIgcHJpdmF0ZSBkYXRhIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeW91ciBhbmQgd2UncmUgbm90IGludGVyZXN0ZWQgaW4gc2VsbGluZywgbW9uZXRpemluZywgb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXN0cmlidXRpbmcgaXQgdG8gM3JkIHBhcnRpZXMgZXhjZXB0IHdoZW4gbmVjZXNzYXJ5IHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZSBkYXRhIHN0b3JhZ2Ugc2VydmljZXMuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gdGhpcy5vbkFjY2VwdCgpfT5BY2NlcHQ8L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25BY2NlcHQoKSB7XG5cbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnZHByLWFjY2VwdGVkJywgJ3RydWUnKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGRpc2FibGVkOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlIHtcbiAgICByZWFkb25seSBkaXNhYmxlZDogYm9vbGVhbjtcbn1cbiJdfQ==