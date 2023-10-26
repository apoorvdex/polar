"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Splash_1 = require("../../Splash");
const SplitLayout_1 = require("../../../../../../web/js/ui/split_layout/SplitLayout");
const CallToActionLink_1 = require("../components/CallToActionLink");
const SURVEY_LINK = 'https://kevinburton1.typeform.com/to/BuX1Ef';
class Survey extends react_1.default.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (react_1.default.createElement(Splash_1.Splash, { settingKey: this.props.settingKey },
            react_1.default.createElement(SplitLayout_1.SplitLayout, null,
                react_1.default.createElement(SplitLayout_1.SplitLayoutLeft, null,
                    react_1.default.createElement("h2", null, "What do you think of Polar?"),
                    react_1.default.createElement("p", { className: "h5" },
                        "Could you take ",
                        react_1.default.createElement("b", null, "2 minutes"),
                        " and answer 10 questions about your use of Polar?"),
                    react_1.default.createElement("p", { className: "text-center mt-4" },
                        react_1.default.createElement(CallToActionLink_1.CallToActionLink, { href: SURVEY_LINK, eventCategory: 'splash-survey' }, "Provide Feedback")),
                    react_1.default.createElement("p", { className: "text-center text-muted" },
                        "We read ",
                        react_1.default.createElement("i", null, "every"),
                        " response and your feedback is critical to the success of Polar!")),
                react_1.default.createElement(SplitLayout_1.SplitLayoutRight, null,
                    react_1.default.createElement("p", { className: "text-center m-2" },
                        react_1.default.createElement("i", { style: { fontSize: '200px' }, className: "text-primary fas fa-bullhorn" }))))));
    }
}
exports.Survey = Survey;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3VydmV5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU3VydmV5LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLGtEQUEwQjtBQUMxQix5Q0FBb0M7QUFFcEMsc0ZBQW9IO0FBQ3BILHFFQUFnRTtBQUVoRSxNQUFNLFdBQVcsR0FBRyw2Q0FBNkMsQ0FBQztBQUlsRSxNQUFhLE1BQU8sU0FBUSxlQUFLLENBQUMsU0FBeUI7SUFFdkQsWUFBWSxLQUFhO1FBQ3JCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRU0sTUFBTTtRQUNULE9BQU8sQ0FFSCw4QkFBQyxlQUFNLElBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVTtZQUVyQyw4QkFBQyx5QkFBVztnQkFFUiw4QkFBQyw2QkFBZTtvQkFFWix3RUFBb0M7b0JBRXBDLHFDQUFHLFNBQVMsRUFBQyxJQUFJOzt3QkFDRSxxREFBZ0I7NEVBRS9CO29CQUVKLHFDQUFHLFNBQVMsRUFBQyxrQkFBa0I7d0JBRzNCLDhCQUFDLG1DQUFnQixJQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFDLGVBQWUsdUJBRS9DLENBRW5CO29CQUVKLHFDQUFHLFNBQVMsRUFBQyx3QkFBd0I7O3dCQUN6QixpREFBWTsyRkFFcEIsQ0FFVTtnQkFFbEIsOEJBQUMsOEJBQWdCO29CQUViLHFDQUFHLFNBQVMsRUFBQyxpQkFBaUI7d0JBRTFCLHFDQUFHLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUMsRUFBRSxTQUFTLEVBQUMsOEJBQThCLEdBQUssQ0FFNUUsQ0FFVyxDQUVULENBRVQsQ0FFWixDQUFDO0lBQ04sQ0FBQztDQUVKO0FBdkRELHdCQXVEQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCByZWFjdC9uby1tdWx0aS1jb21wOiAwLCByZWFjdC9wcm9wLXR5cGVzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTcGxhc2h9IGZyb20gJy4uLy4uL1NwbGFzaCc7XG5pbXBvcnQge0VtYmVkZGVkSW1hZ2VzfSBmcm9tICcuLi93aGF0c19uZXcvRW1iZWRkZWRJbWFnZXMnO1xuaW1wb3J0IHtTcGxpdExheW91dCwgU3BsaXRMYXlvdXRMZWZ0LCBTcGxpdExheW91dFJpZ2h0fSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi93ZWIvanMvdWkvc3BsaXRfbGF5b3V0L1NwbGl0TGF5b3V0JztcbmltcG9ydCB7Q2FsbFRvQWN0aW9uTGlua30gZnJvbSAnLi4vY29tcG9uZW50cy9DYWxsVG9BY3Rpb25MaW5rJztcblxuY29uc3QgU1VSVkVZX0xJTksgPSAnaHR0cHM6Ly9rZXZpbmJ1cnRvbjEudHlwZWZvcm0uY29tL3RvL0J1WDFFZic7XG5cbi8vIGh0dHBzOi8va2V2aW5idXJ0b24xLnR5cGVmb3JtLmNvbS90by9CdVgxRWZcblxuZXhwb3J0IGNsYXNzIFN1cnZleSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPFNwbGFzaCBzZXR0aW5nS2V5PXt0aGlzLnByb3BzLnNldHRpbmdLZXl9PlxuXG4gICAgICAgICAgICAgICAgPFNwbGl0TGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgICAgIDxTcGxpdExheW91dExlZnQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5XaGF0IGRvIHlvdSB0aGluayBvZiBQb2xhcj88L2gyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvdWxkIHlvdSB0YWtlIDxiPjIgbWludXRlczwvYj4gYW5kIGFuc3dlciAxMCBxdWVzdGlvbnMgYWJvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5b3VyIHVzZSBvZiBQb2xhcj9cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNFwiPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FsbFRvQWN0aW9uTGluayBocmVmPXtTVVJWRVlfTElOS30gZXZlbnRDYXRlZ29yeT0nc3BsYXNoLXN1cnZleSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb3ZpZGUgRmVlZGJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhbGxUb0FjdGlvbkxpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1tdXRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlIHJlYWQgPGk+ZXZlcnk8L2k+IHJlc3BvbnNlIGFuZCB5b3VyIGZlZWRiYWNrIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JpdGljYWwgdG8gdGhlIHN1Y2Nlc3Mgb2YgUG9sYXIhXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9TcGxpdExheW91dExlZnQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPFNwbGl0TGF5b3V0UmlnaHQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG0tMlwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgc3R5bGU9e3tmb250U2l6ZTogJzIwMHB4J319IGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBmYXMgZmEtYnVsbGhvcm5cIj48L2k+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8L1NwbGl0TGF5b3V0UmlnaHQ+XG5cbiAgICAgICAgICAgICAgICA8L1NwbGl0TGF5b3V0PlxuXG4gICAgICAgICAgICA8L1NwbGFzaD5cblxuICAgICAgICApO1xuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSBzZXR0aW5nS2V5OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuXG4iXX0=