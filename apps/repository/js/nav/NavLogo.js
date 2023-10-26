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
const Styles = {
    parent: {
        display: 'inline-block'
    },
    child: {
        display: 'inline-block',
        verticalAlign: 'middle',
        userSelect: 'none'
    },
    textLogo: {
        paddingLeft: '5px',
        fontWeight: 'bold',
        fontSize: '20px',
        userSelect: 'none',
        textDecoration: 'none'
    }
};
class NavLogo extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement("div", { style: Styles.parent },
            React.createElement("div", { style: Styles.child },
                React.createElement("a", { href: "#" },
                    React.createElement("img", { src: "/apps/repository/img/icon.svg", height: "25" }))),
            React.createElement("div", { style: Styles.child },
                React.createElement("div", { style: Styles.textLogo }, "POLAR"))));
    }
}
exports.NavLogo = NavLogo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmF2TG9nby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk5hdkxvZ28udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUcvQixNQUFNLE1BQU0sR0FBYztJQUN0QixNQUFNLEVBQUU7UUFDSixPQUFPLEVBQUUsY0FBYztLQUMxQjtJQUVELEtBQUssRUFBRTtRQUNILE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLGFBQWEsRUFBRSxRQUFRO1FBQ3ZCLFVBQVUsRUFBRSxNQUFNO0tBQ3JCO0lBRUQsUUFBUSxFQUFFO1FBQ04sV0FBVyxFQUFFLEtBQUs7UUFDbEIsVUFBVSxFQUFFLE1BQU07UUFDbEIsUUFBUSxFQUFFLE1BQU07UUFDaEIsVUFBVSxFQUFFLE1BQU07UUFDbEIsY0FBYyxFQUFFLE1BQU07S0FDekI7Q0FFSixDQUFDO0FBSUYsTUFBYSxPQUFRLFNBQVEsS0FBSyxDQUFDLGFBQTZCO0lBRTVELFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sTUFBTTtRQUVULE9BQU8sQ0FDSCw2QkFBSyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU07WUFDckIsNkJBQUssS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO2dCQUNwQiwyQkFBRyxJQUFJLEVBQUMsR0FBRztvQkFDUCw2QkFBSyxHQUFHLEVBQUMsK0JBQStCLEVBQUMsTUFBTSxFQUFDLElBQUksR0FBRSxDQUN0RCxDQUNGO1lBRU4sNkJBQUssS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO2dCQUNwQiw2QkFBSyxLQUFLLEVBQUUsTUFBTSxDQUFDLFFBQVEsWUFBYSxDQUN0QyxDQUNKLENBQ1QsQ0FBQztJQUVOLENBQUM7Q0FFSjtBQXhCRCwwQkF3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0lTdHlsZU1hcH0gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL3JlYWN0L0lTdHlsZU1hcCc7XG5cbmNvbnN0IFN0eWxlczogSVN0eWxlTWFwID0ge1xuICAgIHBhcmVudDoge1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ1xuICAgIH0sXG5cbiAgICBjaGlsZDoge1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgICAgIHVzZXJTZWxlY3Q6ICdub25lJ1xuICAgIH0sXG5cbiAgICB0ZXh0TG9nbzoge1xuICAgICAgICBwYWRkaW5nTGVmdDogJzVweCcsXG4gICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgICAgZm9udFNpemU6ICcyMHB4JyxcbiAgICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnXG4gICAgfVxuXG59O1xuXG4vKipcbiAqL1xuZXhwb3J0IGNsYXNzIE5hdkxvZ28gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e1N0eWxlcy5wYXJlbnR9PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e1N0eWxlcy5jaGlsZH0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hcHBzL3JlcG9zaXRvcnkvaW1nL2ljb24uc3ZnXCIgaGVpZ2h0PVwiMjVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e1N0eWxlcy5jaGlsZH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e1N0eWxlcy50ZXh0TG9nb30+UE9MQVI8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuXG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuXG59XG4iXX0=