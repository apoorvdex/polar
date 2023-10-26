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
const reactstrap_1 = require("reactstrap");
class LogEventComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(reactstrap_1.ListGroupItem, { className: "p-1" }, this.props.logEvent.message));
    }
}
exports.LogEventComponent = LogEventComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nRXZlbnRDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJMb2dFdmVudENvbXBvbmVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBRS9CLDJDQUF5QztBQUV6QyxNQUFhLGlCQUFrQixTQUFRLEtBQUssQ0FBQyxTQUFzQjtJQUUvRCxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLE1BQU07UUFFVCxPQUFPLENBRUgsb0JBQUMsMEJBQWEsSUFBQyxTQUFTLEVBQUMsS0FBSyxJQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBaUIsQ0FFL0UsQ0FBQztJQUVOLENBQUM7Q0FFSjtBQWhCRCw4Q0FnQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xvZ0V2ZW50fSBmcm9tICcuL0xvZ0V2ZW50Vmlld2VyJztcbmltcG9ydCB7TGlzdEdyb3VwSXRlbX0gZnJvbSAncmVhY3RzdHJhcCc7XG5cbmV4cG9ydCBjbGFzcyBMb2dFdmVudENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIGFueT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtIGNsYXNzTmFtZT1cInAtMVwiPnt0aGlzLnByb3BzLmxvZ0V2ZW50Lm1lc3NhZ2V9PC9MaXN0R3JvdXBJdGVtPlxuXG4gICAgICAgICk7XG5cbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgbG9nRXZlbnQ6IExvZ0V2ZW50O1xufVxuIl19