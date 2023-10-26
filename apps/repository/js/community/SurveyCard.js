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
const EmbeddedImages_1 = require("../splash/splashes/whats_new/EmbeddedImages");
const Card_1 = __importDefault(require("reactstrap/lib/Card"));
const CardHeader_1 = __importDefault(require("reactstrap/lib/CardHeader"));
const CardBody_1 = __importDefault(require("reactstrap/lib/CardBody"));
const log = Logger_1.Logger.create();
const SURVEY_LINK = 'https://kevinburton1.typeform.com/to/BuX1Ef';
class SurveyCard extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(Card_1.default, null,
            React.createElement(CardHeader_1.default, null,
                React.createElement("b", null, "Take our Survey")),
            React.createElement(CardBody_1.default, null,
                React.createElement("div", { className: "mt-2 mb-2 intro" },
                    React.createElement("p", { className: "text-center" },
                        React.createElement("a", { href: SURVEY_LINK },
                            React.createElement("img", { src: EmbeddedImages_1.EmbeddedImages.SURVEY }))),
                    React.createElement("p", null,
                        "Could you take 2 minutes and ",
                        React.createElement("a", { href: SURVEY_LINK }, "answer 10 questions"),
                        " about your use of Polar?  We're trying to focus on the most important features for our user base and your feedback is critical!")))));
    }
}
exports.default = SurveyCard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3VydmV5Q2FyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlN1cnZleUNhcmQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiw2REFBd0Q7QUFDeEQsZ0ZBQTJFO0FBQzNFLCtEQUF1QztBQUN2QywyRUFBbUQ7QUFDbkQsdUVBQStDO0FBRS9DLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFNLFdBQVcsR0FBRyw2Q0FBNkMsQ0FBQztBQUVsRSxNQUFxQixVQUFXLFNBQVEsS0FBSyxDQUFDLFNBQW1CO0lBRTdELFlBQVksS0FBVSxFQUFFLE9BQVk7UUFDaEMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUUxQixDQUFDO0lBRU0sTUFBTTtRQUVULE9BQU8sQ0FFSCxvQkFBQyxjQUFJO1lBQ0Qsb0JBQUMsb0JBQVU7Z0JBQUMsaURBQXNCLENBQWE7WUFDL0Msb0JBQUMsa0JBQVE7Z0JBRUwsNkJBQUssU0FBUyxFQUFDLGlCQUFpQjtvQkFFNUIsMkJBQUcsU0FBUyxFQUFDLGFBQWE7d0JBRTFCLDJCQUFHLElBQUksRUFBRSxXQUFXOzRCQUNwQiw2QkFBSyxHQUFHLEVBQUUsK0JBQWMsQ0FBQyxNQUFNLEdBQVEsQ0FDbkMsQ0FFQTtvQkFFSjs7d0JBQzZCLDJCQUFHLElBQUksRUFBRSxXQUFXLDBCQUM3QzsySkFJQSxDQUVGLENBRUMsQ0FDUixDQUVWLENBQUM7SUFDTixDQUFDO0NBRUo7QUF6Q0QsNkJBeUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7RW1iZWRkZWRJbWFnZXN9IGZyb20gJy4uL3NwbGFzaC9zcGxhc2hlcy93aGF0c19uZXcvRW1iZWRkZWRJbWFnZXMnO1xuaW1wb3J0IENhcmQgZnJvbSAncmVhY3RzdHJhcC9saWIvQ2FyZCc7XG5pbXBvcnQgQ2FyZEhlYWRlciBmcm9tICdyZWFjdHN0cmFwL2xpYi9DYXJkSGVhZGVyJztcbmltcG9ydCBDYXJkQm9keSBmcm9tICdyZWFjdHN0cmFwL2xpYi9DYXJkQm9keSc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuY29uc3QgU1VSVkVZX0xJTksgPSAnaHR0cHM6Ly9rZXZpbmJ1cnRvbjEudHlwZWZvcm0uY29tL3RvL0J1WDFFZic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1cnZleUNhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnksIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgICAgIDxDYXJkSGVhZGVyPjxiPlRha2Ugb3VyIFN1cnZleTwvYj48L0NhcmRIZWFkZXI+XG4gICAgICAgICAgICAgICAgPENhcmRCb2R5PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiBtYi0yIGludHJvXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e1NVUlZFWV9MSU5LfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtFbWJlZGRlZEltYWdlcy5TVVJWRVl9PjwvaW1nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ291bGQgeW91IHRha2UgMiBtaW51dGVzIGFuZCA8YSBocmVmPXtTVVJWRVlfTElOS30+YW5zd2VyIDEwIHF1ZXN0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPiBhYm91dFxuICAgICAgICAgICAgICAgICAgICAgICAgeW91ciB1c2Ugb2YgUG9sYXI/ICBXZSdyZSB0cnlpbmcgdG8gZm9jdXMgb24gdGhlIG1vc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudCBmZWF0dXJlcyBmb3Igb3VyIHVzZXIgYmFzZSBhbmQgeW91ciBmZWVkYmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgaXMgY3JpdGljYWwhXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgPC9DYXJkPlxuXG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzIHtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZSB7XG5cbn1cbiJdfQ==