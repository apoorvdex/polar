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
const Preconditions_1 = require("../../Preconditions");
const Logger_1 = require("../../logger/Logger");
const AnnotationType_1 = require("../../metadata/AnnotationType");
const AreaHighlightAnnotationComponent_1 = require("./AreaHighlightAnnotationComponent");
const TextHighlightAnnotationComponent_1 = require("./TextHighlightAnnotationComponent");
const log = Logger_1.Logger.create();
class DocAnnotationComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    render() {
        const { annotation } = this.props;
        if (!Preconditions_1.isPresent(annotation.id)) {
            log.warn("No annotation id!", annotation);
            return;
        }
        if (annotation.id.trim() === '') {
            log.warn("Empty annotation");
            return;
        }
        const key = 'doc-annotation-' + annotation.id;
        if (annotation.annotationType === AnnotationType_1.AnnotationType.AREA_HIGHLIGHT) {
            return (React.createElement(AreaHighlightAnnotationComponent_1.AreaHighlightAnnotationComponent, { key: key, annotation: annotation }));
        }
        else {
            return (React.createElement(TextHighlightAnnotationComponent_1.TextHighlightAnnotationComponent, { key: key, annotation: annotation, docMeta: this.props.docMeta }));
        }
    }
}
exports.DocAnnotationComponent = DocAnnotationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jQW5ub3RhdGlvbkNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRvY0Fubm90YXRpb25Db21wb25lbnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUUvQix1REFBOEM7QUFDOUMsZ0RBQTJDO0FBQzNDLGtFQUE2RDtBQUM3RCx5RkFBb0Y7QUFDcEYseUZBQW9GO0FBR3BGLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUs1QixNQUFhLHNCQUF1QixTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUV2RSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFFcEIsQ0FBQztJQUVNLE1BQU07UUFFVCxNQUFNLEVBQUUsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUVsQyxJQUFJLENBQUUseUJBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDNUIsR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUMxQyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQzdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUM3QixPQUFPO1NBQ1Y7UUFFRCxNQUFNLEdBQUcsR0FBRyxpQkFBaUIsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDO1FBRTlDLElBQUksVUFBVSxDQUFDLGNBQWMsS0FBSywrQkFBYyxDQUFDLGNBQWMsRUFBRTtZQUU3RCxPQUFPLENBQ0gsb0JBQUMsbUVBQWdDLElBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsVUFBVSxHQUFHLENBQ3hFLENBQUM7U0FFTDthQUFNO1lBRUgsT0FBTyxDQUNILG9CQUFDLG1FQUFnQyxJQUFDLEdBQUcsRUFBRSxHQUFHLEVBQ1IsVUFBVSxFQUFFLFVBQVUsRUFDdEIsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQ25FLENBQUM7U0FFTDtJQUdMLENBQUM7Q0FFSjtBQTVDRCx3REE0Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0RvY0Fubm90YXRpb259IGZyb20gJy4uL0RvY0Fubm90YXRpb24nO1xuaW1wb3J0IHtpc1ByZXNlbnR9IGZyb20gJy4uLy4uL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uLy4uL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtBbm5vdGF0aW9uVHlwZX0gZnJvbSAnLi4vLi4vbWV0YWRhdGEvQW5ub3RhdGlvblR5cGUnO1xuaW1wb3J0IHtBcmVhSGlnaGxpZ2h0QW5ub3RhdGlvbkNvbXBvbmVudH0gZnJvbSAnLi9BcmVhSGlnaGxpZ2h0QW5ub3RhdGlvbkNvbXBvbmVudCc7XG5pbXBvcnQge1RleHRIaWdobGlnaHRBbm5vdGF0aW9uQ29tcG9uZW50fSBmcm9tICcuL1RleHRIaWdobGlnaHRBbm5vdGF0aW9uQ29tcG9uZW50JztcbmltcG9ydCB7RG9jTWV0YX0gZnJvbSBcIi4uLy4uL21ldGFkYXRhL0RvY01ldGFcIjtcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG4vKipcbiAqIEEgZ2VuZXJpYyB3cmFwcGVyIHRoYXQgZGV0ZXJtaW5lcyB3aGljaCBzdWItY29tcG9uZW50IHRvIHJlbmRlci5cbiAqL1xuZXhwb3J0IGNsYXNzIERvY0Fubm90YXRpb25Db21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCB7IGFubm90YXRpb24gfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKCEgaXNQcmVzZW50KGFubm90YXRpb24uaWQpKSB7XG4gICAgICAgICAgICBsb2cud2FybihcIk5vIGFubm90YXRpb24gaWQhXCIsIGFubm90YXRpb24pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFubm90YXRpb24uaWQudHJpbSgpID09PSAnJykge1xuICAgICAgICAgICAgbG9nLndhcm4oXCJFbXB0eSBhbm5vdGF0aW9uXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qga2V5ID0gJ2RvYy1hbm5vdGF0aW9uLScgKyBhbm5vdGF0aW9uLmlkO1xuXG4gICAgICAgIGlmIChhbm5vdGF0aW9uLmFubm90YXRpb25UeXBlID09PSBBbm5vdGF0aW9uVHlwZS5BUkVBX0hJR0hMSUdIVCkge1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxBcmVhSGlnaGxpZ2h0QW5ub3RhdGlvbkNvbXBvbmVudCBrZXk9e2tleX0gYW5ub3RhdGlvbj17YW5ub3RhdGlvbn0vPlxuICAgICAgICAgICAgKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxUZXh0SGlnaGxpZ2h0QW5ub3RhdGlvbkNvbXBvbmVudCBrZXk9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5ub3RhdGlvbj17YW5ub3RhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jTWV0YT17dGhpcy5wcm9wcy5kb2NNZXRhfS8+XG4gICAgICAgICAgICApO1xuXG4gICAgICAgIH1cblxuXG4gICAgfVxuXG59XG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSBhbm5vdGF0aW9uOiBEb2NBbm5vdGF0aW9uO1xuICAgIHJlYWRvbmx5IGRvY01ldGE6IERvY01ldGE7XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuXG59XG5cbiJdfQ==