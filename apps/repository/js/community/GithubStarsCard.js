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
const CardBody_1 = __importDefault(require("reactstrap/lib/CardBody"));
const Card_1 = __importDefault(require("reactstrap/lib/Card"));
const log = Logger_1.Logger.create();
class GithubStarsCard extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(Card_1.default, null,
            React.createElement(CardHeader_1.default, null,
                React.createElement("b", null, "Github Stars")),
            React.createElement(CardBody_1.default, null,
                React.createElement("div", { className: "mt-2 mb-2 intro" },
                    React.createElement("p", null, "Liking Polar?  Would you mind giving us a star on Github?"),
                    React.createElement("p", { className: "text-center" },
                        React.createElement("a", { href: "https://github.com/burtonator/polar-bookshelf" },
                            React.createElement("img", { height: "100", src: "https://img.shields.io/github/stars/burtonator/polar-bookshelf.svg?style=social&label=Star" })))))));
    }
}
exports.default = GithubStarsCard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2l0aHViU3RhcnNDYXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiR2l0aHViU3RhcnNDYXJkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsNkRBQXdEO0FBQ3hELDJFQUFtRDtBQUNuRCx1RUFBK0M7QUFDL0MsK0RBQXVDO0FBRXZDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFxQixlQUFnQixTQUFRLEtBQUssQ0FBQyxTQUFtQjtJQUVsRSxZQUFZLEtBQVUsRUFBRSxPQUFZO1FBQ2hDLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFMUIsQ0FBQztJQUVNLE1BQU07UUFFVCxPQUFPLENBRUgsb0JBQUMsY0FBSTtZQUNELG9CQUFDLG9CQUFVO2dCQUFDLDhDQUFtQixDQUFhO1lBQzVDLG9CQUFDLGtCQUFRO2dCQUVMLDZCQUFLLFNBQVMsRUFBQyxpQkFBaUI7b0JBRTVCLDJGQUdJO29CQUVKLDJCQUFHLFNBQVMsRUFBQyxhQUFhO3dCQUN0QiwyQkFBRyxJQUFJLEVBQUMsK0NBQStDOzRCQUNuRCw2QkFBSyxNQUFNLEVBQUMsS0FBSyxFQUNaLEdBQUcsRUFBQyw0RkFBNEYsR0FBRSxDQUN2RyxDQUNKLENBRUYsQ0FFQyxDQUNSLENBRVYsQ0FBQztJQUNOLENBQUM7Q0FFSjtBQXJDRCxrQ0FxQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IENhcmRIZWFkZXIgZnJvbSAncmVhY3RzdHJhcC9saWIvQ2FyZEhlYWRlcic7XG5pbXBvcnQgQ2FyZEJvZHkgZnJvbSAncmVhY3RzdHJhcC9saWIvQ2FyZEJvZHknO1xuaW1wb3J0IENhcmQgZnJvbSAncmVhY3RzdHJhcC9saWIvQ2FyZCc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2l0aHViU3RhcnNDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogYW55LCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlcj48Yj5HaXRodWIgU3RhcnM8L2I+PC9DYXJkSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgbWItMiBpbnRyb1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMaWtpbmcgUG9sYXI/ICBXb3VsZCB5b3UgbWluZCBnaXZpbmcgdXMgYSBzdGFyIG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR2l0aHViP1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnVydG9uYXRvci9wb2xhci1ib29rc2hlbGZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBoZWlnaHQ9XCIxMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1nLnNoaWVsZHMuaW8vZ2l0aHViL3N0YXJzL2J1cnRvbmF0b3IvcG9sYXItYm9va3NoZWxmLnN2Zz9zdHlsZT1zb2NpYWwmbGFiZWw9U3RhclwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgPC9DYXJkPlxuXG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzIHtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZSB7XG5cbn1cbiJdfQ==