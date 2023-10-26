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
const CardHeader_1 = __importDefault(require("reactstrap/lib/CardHeader"));
const Card_1 = __importDefault(require("reactstrap/lib/Card"));
const CardBody_1 = __importDefault(require("reactstrap/lib/CardBody"));
const log = Logger_1.Logger.create();
class DonationsCard extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(Card_1.default, null,
            React.createElement(CardHeader_1.default, null,
                React.createElement("b", null, "Donate to Polar")),
            React.createElement(CardBody_1.default, null,
                React.createElement("div", { className: "mb-2 intro" },
                    React.createElement("p", null,
                        React.createElement("b", null, "Can you make a donation to Polar? "),
                        "We have an ",
                        React.createElement("a", { href: "https://opencollective.com/polar-bookshelf/donate" }, "Open Collective"),
                        " setup to accept donations.  If you use Polar at work ask your employer if they can make a donation. Many larger employers will both match donations and support projects that help their employees."),
                    React.createElement("p", { className: "text-center m-2" },
                        React.createElement("a", { href: "https://opencollective.com/polar-bookshelf/donate", target: "_blank" },
                            React.createElement("img", { src: "https://opencollective.com/polar-bookshelf/donate/button@2x.png?color=blue", width: "300" })))))));
    }
}
exports.default = DonationsCard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9uYXRpb25zQ2FyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRvbmF0aW9uc0NhcmQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiw2REFBd0Q7QUFDeEQsMkVBQW1EO0FBQ25ELCtEQUF1QztBQUN2Qyx1RUFBK0M7QUFFL0MsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQXFCLGFBQWMsU0FBUSxLQUFLLENBQUMsU0FBbUI7SUFFaEUsWUFBWSxLQUFVLEVBQUUsT0FBWTtRQUNoQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRTFCLENBQUM7SUFFTSxNQUFNO1FBRVQsT0FBTyxDQUVILG9CQUFDLGNBQUk7WUFDRCxvQkFBQyxvQkFBVTtnQkFBQyxpREFBc0IsQ0FBYTtZQUMvQyxvQkFBQyxrQkFBUTtnQkFFTCw2QkFBSyxTQUFTLEVBQUMsWUFBWTtvQkFFdkI7d0JBQ0ksb0VBQXlDOzt3QkFDOUIsMkJBQ1gsSUFBSSxFQUFDLG1EQUFtRCxzQkFDMUM7K05BSWQ7b0JBRUosMkJBQUcsU0FBUyxFQUFDLGlCQUFpQjt3QkFDMUIsMkJBQUcsSUFBSSxFQUFDLG1EQUFtRCxFQUFDLE1BQU0sRUFBQyxRQUFROzRCQUN2RSw2QkFBSyxHQUFHLEVBQUMsNEVBQTRFLEVBQUMsS0FBSyxFQUFDLEtBQUssR0FBRyxDQUNwRyxDQUNKLENBRUYsQ0FFQyxDQUNSLENBRVYsQ0FBQztJQUNOLENBQUM7Q0FFSjtBQXpDRCxnQ0F5Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IENhcmRIZWFkZXIgZnJvbSAncmVhY3RzdHJhcC9saWIvQ2FyZEhlYWRlcic7XG5pbXBvcnQgQ2FyZCBmcm9tICdyZWFjdHN0cmFwL2xpYi9DYXJkJztcbmltcG9ydCBDYXJkQm9keSBmcm9tICdyZWFjdHN0cmFwL2xpYi9DYXJkQm9keSc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9uYXRpb25zQ2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSwgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgICAgPENhcmRIZWFkZXI+PGI+RG9uYXRlIHRvIFBvbGFyPC9iPjwvQ2FyZEhlYWRlcj5cbiAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yIGludHJvXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPkNhbiB5b3UgbWFrZSBhIGRvbmF0aW9uIHRvIFBvbGFyPyA8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2UgaGF2ZSBhbiA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL29wZW5jb2xsZWN0aXZlLmNvbS9wb2xhci1ib29rc2hlbGYvZG9uYXRlXCI+T3BlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbGxlY3RpdmU8L2E+IHNldHVwIHRvIGFjY2VwdCBkb25hdGlvbnMuICBJZiB5b3UgdXNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUG9sYXIgYXQgd29yayBhc2sgeW91ciBlbXBsb3llciBpZiB0aGV5IGNhbiBtYWtlIGEgZG9uYXRpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFueSBsYXJnZXIgZW1wbG95ZXJzIHdpbGwgYm90aCBtYXRjaCBkb25hdGlvbnMgYW5kIHN1cHBvcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0cyB0aGF0IGhlbHAgdGhlaXIgZW1wbG95ZWVzLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9vcGVuY29sbGVjdGl2ZS5jb20vcG9sYXItYm9va3NoZWxmL2RvbmF0ZVwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vb3BlbmNvbGxlY3RpdmUuY29tL3BvbGFyLWJvb2tzaGVsZi9kb25hdGUvYnV0dG9uQDJ4LnBuZz9jb2xvcj1ibHVlXCIgd2lkdGg9XCIzMDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICAgICAgICA8L0NhcmQ+XG5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlIHtcblxufVxuIl19