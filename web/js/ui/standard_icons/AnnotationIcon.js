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
const AnnotationType_1 = require("../../metadata/AnnotationType");
const FlashcardIcon_1 = require("./FlashcardIcon");
const CommentIcon_1 = require("./CommentIcon");
const HighlighterIcon_1 = require("./HighlighterIcon");
class AnnotationIcon extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        switch (this.props.type) {
            case AnnotationType_1.AnnotationType.FLASHCARD:
                return (React.createElement(FlashcardIcon_1.FlashcardIcon, null));
            case AnnotationType_1.AnnotationType.COMMENT:
                return (React.createElement(CommentIcon_1.CommentIcon, null));
            case AnnotationType_1.AnnotationType.AREA_HIGHLIGHT:
                return (React.createElement(HighlighterIcon_1.HighlighterIcon, { color: this.props.color }));
            case AnnotationType_1.AnnotationType.TEXT_HIGHLIGHT:
                return (React.createElement(HighlighterIcon_1.HighlighterIcon, { color: this.props.color }));
            default:
                return (React.createElement("div", null, "none"));
        }
        return (React.createElement("span", { className: "fas fa-highlighter text-secondary", "aria-hidden": "true" }));
    }
}
exports.AnnotationIcon = AnnotationIcon;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ub3RhdGlvbkljb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBbm5vdGF0aW9uSWNvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBRS9CLGtFQUE2RDtBQUM3RCxtREFBOEM7QUFDOUMsK0NBQTBDO0FBQzFDLHVEQUFrRDtBQUlsRCxNQUFhLGNBQWUsU0FBUSxLQUFLLENBQUMsYUFBNkI7SUFFbkUsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFTSxNQUFNO1FBRVQsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtZQUVyQixLQUFLLCtCQUFjLENBQUMsU0FBUztnQkFDekIsT0FBTyxDQUFFLG9CQUFDLDZCQUFhLE9BQUUsQ0FBRSxDQUFDO1lBRWhDLEtBQUssK0JBQWMsQ0FBQyxPQUFPO2dCQUN2QixPQUFPLENBQUUsb0JBQUMseUJBQVcsT0FBRSxDQUFFLENBQUM7WUFFOUIsS0FBSywrQkFBYyxDQUFDLGNBQWM7Z0JBQzlCLE9BQU8sQ0FBRSxvQkFBQyxpQ0FBZSxJQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQU0sR0FBRyxDQUFFLENBQUM7WUFFNUQsS0FBSywrQkFBYyxDQUFDLGNBQWM7Z0JBQzlCLE9BQU8sQ0FBRSxvQkFBQyxpQ0FBZSxJQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQU0sR0FBRyxDQUFFLENBQUM7WUFFNUQ7Z0JBQ0ksT0FBTyxDQUFFLHdDQUFlLENBQUUsQ0FBQztTQUVsQztRQUVELE9BQU8sQ0FFSCw4QkFBTSxTQUFTLEVBQUMsbUNBQW1DLGlCQUNqQyxNQUFNLEdBQUUsQ0FFN0IsQ0FBQztJQUVOLENBQUM7Q0FHSjtBQXJDRCx3Q0FxQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0hpZ2hsaWdodENvbG9yfSBmcm9tICcuLi8uLi9tZXRhZGF0YS9CYXNlSGlnaGxpZ2h0JztcbmltcG9ydCB7QW5ub3RhdGlvblR5cGV9IGZyb20gJy4uLy4uL21ldGFkYXRhL0Fubm90YXRpb25UeXBlJztcbmltcG9ydCB7Rmxhc2hjYXJkSWNvbn0gZnJvbSAnLi9GbGFzaGNhcmRJY29uJztcbmltcG9ydCB7Q29tbWVudEljb259IGZyb20gJy4vQ29tbWVudEljb24nO1xuaW1wb3J0IHtIaWdobGlnaHRlckljb259IGZyb20gJy4vSGlnaGxpZ2h0ZXJJY29uJztcblxuLyoqXG4gKi9cbmV4cG9ydCBjbGFzcyBBbm5vdGF0aW9uSWNvbiBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBzd2l0Y2ggKHRoaXMucHJvcHMudHlwZSkge1xuXG4gICAgICAgICAgICBjYXNlIEFubm90YXRpb25UeXBlLkZMQVNIQ0FSRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gKCA8Rmxhc2hjYXJkSWNvbi8+ICk7XG5cbiAgICAgICAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuQ09NTUVOVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gKCA8Q29tbWVudEljb24vPiApO1xuXG4gICAgICAgICAgICBjYXNlIEFubm90YXRpb25UeXBlLkFSRUFfSElHSExJR0hUOlxuICAgICAgICAgICAgICAgIHJldHVybiAoIDxIaWdobGlnaHRlckljb24gY29sb3I9e3RoaXMucHJvcHMuY29sb3IhfS8+ICk7XG5cbiAgICAgICAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuVEVYVF9ISUdITElHSFQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICggPEhpZ2hsaWdodGVySWNvbiBjb2xvcj17dGhpcy5wcm9wcy5jb2xvciF9Lz4gKTtcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gKCA8ZGl2Pm5vbmU8L2Rpdj4gKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmFzIGZhLWhpZ2hsaWdodGVyIHRleHQtc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiLz5cblxuICAgICAgICApO1xuXG4gICAgfVxuXG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgdHlwZTogQW5ub3RhdGlvblR5cGU7XG4gICAgY29sb3I/OiBIaWdobGlnaHRDb2xvcjtcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG59XG4iXX0=