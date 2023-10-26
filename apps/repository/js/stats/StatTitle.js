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
const Logger_1 = require("../../../../web/js/logger/Logger");
const log = Logger_1.Logger.create();
class StatTitle extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement("div", { className: "pt-1 pb-1 w-100 text-center", style: { fontWeight: 'bold', fontSize: '18px' } }, this.props.children));
    }
}
exports.default = StatTitle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdFRpdGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU3RhdFRpdGxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsNkRBQXdEO0FBRXhELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFxQixTQUFVLFNBQVEsS0FBSyxDQUFDLFNBQW1CO0lBRTVELFlBQVksS0FBVSxFQUFFLE9BQVk7UUFDaEMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUUxQixDQUFDO0lBRU0sTUFBTTtRQUVULE9BQU8sQ0FFSCw2QkFBSyxTQUFTLEVBQUMsNkJBQTZCLEVBQ3ZDLEtBQUssRUFBRSxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQyxJQUU3QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FFbEIsQ0FFVCxDQUFDO0lBQ04sQ0FBQztDQUVKO0FBckJELDRCQXFCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvbG9nZ2VyL0xvZ2dlcic7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdFRpdGxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogYW55LCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTEgcGItMSB3LTEwMCB0ZXh0LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDogJ2JvbGQnLCBmb250U2l6ZTogJzE4cHgnfX0+XG5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuIl19