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
const Logger_1 = require("../../../web/js/logger/Logger");
const Preconditions_1 = require("../../../web/js/Preconditions");
const react_moment_1 = __importDefault(require("react-moment"));
const log = Logger_1.Logger.create();
class DateTimeTableCell extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        if (Preconditions_1.isPresent(this.props.datetime)) {
            return (React.createElement("div", { className: this.props.className },
                React.createElement(react_moment_1.default, { withTitle: true, titleFormat: "D MMM YYYY hh:MM A", filter: (value) => value.replace(/^an? /g, '1 '), fromNow: true, ago: true }, this.props.datetime)));
        }
        else {
            return null;
        }
    }
}
exports.DateTimeTableCell = DateTimeTableCell;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZVRpbWVUYWJsZUNlbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJEYXRlVGltZVRhYmxlQ2VsbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLDBEQUFxRDtBQUNyRCxpRUFBd0Q7QUFDeEQsZ0VBQWtDO0FBR2xDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLGlCQUFrQixTQUFRLEtBQUssQ0FBQyxhQUEwQjtJQUVuRSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLE1BQU07UUFFVCxJQUFJLHlCQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUVoQyxPQUFPLENBRUgsNkJBQUssU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUztnQkFDaEMsb0JBQUMsc0JBQU0sSUFBQyxTQUFTLEVBQUUsSUFBSSxFQUNmLFdBQVcsRUFBQyxvQkFBb0IsRUFDaEMsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFDaEQsT0FBTyxRQUFDLEdBQUcsVUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVMsQ0FDaEIsQ0FDUCxDQUVULENBQUM7U0FFTDthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUM7U0FDZjtJQUVMLENBQUM7Q0FFSjtBQTdCRCw4Q0E2QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vLi4vLi4vd2ViL2pzL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtpc1ByZXNlbnR9IGZyb20gJy4uLy4uLy4uL3dlYi9qcy9QcmVjb25kaXRpb25zJztcbmltcG9ydCBNb21lbnQgZnJvbSAncmVhY3QtbW9tZW50JztcbmltcG9ydCB7SVNPRGF0ZVRpbWVTdHJpbmd9IGZyb20gJy4uLy4uLy4uL3dlYi9qcy9tZXRhZGF0YS9JU09EYXRlVGltZVN0cmluZ3MnO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBEYXRlVGltZVRhYmxlQ2VsbCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8SVByb3BzLCBhbnk+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBpZiAoaXNQcmVzZW50KHRoaXMucHJvcHMuZGF0ZXRpbWUpKSB7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9PlxuICAgICAgICAgICAgICAgICAgICA8TW9tZW50IHdpdGhUaXRsZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZUZvcm1hdD1cIkQgTU1NIFlZWVkgaGg6TU0gQVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyPXsodmFsdWUpID0+IHZhbHVlLnJlcGxhY2UoL15hbj8gL2csICcxICcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21Ob3cgYWdvPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGF0ZXRpbWUhfVxuICAgICAgICAgICAgICAgICAgICA8L01vbWVudD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICBkYXRldGltZTogSVNPRGF0ZVRpbWVTdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkO1xuICAgIGNsYXNzTmFtZTogc3RyaW5nO1xufVxuIl19