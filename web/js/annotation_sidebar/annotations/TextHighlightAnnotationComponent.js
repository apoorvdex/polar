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
const AnnotationTypes_1 = require("../../metadata/AnnotationTypes");
const Optional_1 = require("../../util/ts/Optional");
const AnnotationControlBar_1 = require("../AnnotationControlBar");
const ChildAnnotationSection_1 = require("../child_annotations/ChildAnnotationSection");
class TextHighlightAnnotationComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    render() {
        const { annotation } = this.props;
        const attrType = AnnotationTypes_1.AnnotationTypes.toDataAttribute(annotation.annotationType);
        const html = Optional_1.Optional.of(annotation.html).getOrElse('');
        const key = 'text-highlight-' + annotation.id;
        return (React.createElement("div", { className: "m-0 mb-2" },
            React.createElement("div", { key: key, "data-annotation-id": annotation.id, "data-annotation-type": attrType, "data-annotation-color": annotation.color, className: attrType },
                React.createElement("blockquote", { className: "p-1" },
                    React.createElement("span", { dangerouslySetInnerHTML: { __html: html } })),
                React.createElement(AnnotationControlBar_1.AnnotationControlBar, { annotation: annotation }),
                React.createElement("div", { className: "comments" },
                    React.createElement(ChildAnnotationSection_1.ChildAnnotationSection, { docMeta: this.props.docMeta, parent: annotation, children: annotation.children })))));
    }
}
exports.TextHighlightAnnotationComponent = TextHighlightAnnotationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dEhpZ2hsaWdodEFubm90YXRpb25Db21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUZXh0SGlnaGxpZ2h0QW5ub3RhdGlvbkNvbXBvbmVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLG9FQUErRDtBQUUvRCxxREFBZ0Q7QUFDaEQsa0VBQTZEO0FBQzdELHdGQUFtRjtBQU9uRixNQUFhLGdDQUFpQyxTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUVqRixZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFFcEIsQ0FBQztJQUVNLE1BQU07UUFDVCxNQUFNLEVBQUUsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUVsQyxNQUFNLFFBQVEsR0FBRyxpQ0FBZSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFNUUsTUFBTSxJQUFJLEdBQUcsbUJBQVEsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUV4RCxNQUFNLEdBQUcsR0FBRyxpQkFBaUIsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDO1FBRTlDLE9BQU8sQ0FFSCw2QkFBSyxTQUFTLEVBQUMsVUFBVTtZQUVyQiw2QkFBSyxHQUFHLEVBQUUsR0FBRyx3QkFDWSxVQUFVLENBQUMsRUFBRSwwQkFDWCxRQUFRLDJCQUNQLFVBQVUsQ0FBQyxLQUFLLEVBQ3ZDLFNBQVMsRUFBRSxRQUFRO2dCQUVwQixvQ0FBWSxTQUFTLEVBQUMsS0FBSztvQkFFdkIsOEJBQU0sdUJBQXVCLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLEdBRXRDLENBRUU7Z0JBRWIsb0JBQUMsMkNBQW9CLElBQUMsVUFBVSxFQUFFLFVBQVUsR0FBRztnQkFFL0MsNkJBQUssU0FBUyxFQUFDLFVBQVU7b0JBQ3JCLG9CQUFDLCtDQUFzQixJQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFDM0IsTUFBTSxFQUFFLFVBQVUsRUFDbEIsUUFBUSxFQUFFLFVBQVUsQ0FBQyxRQUFRLEdBQUcsQ0FDdEQsQ0FFSixDQUVKLENBQ1QsQ0FBQztJQUNOLENBQUM7Q0FFSjtBQWxERCw0RUFrREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0Fubm90YXRpb25UeXBlc30gZnJvbSAnLi4vLi4vbWV0YWRhdGEvQW5ub3RhdGlvblR5cGVzJztcbmltcG9ydCB7RG9jQW5ub3RhdGlvbn0gZnJvbSAnLi4vRG9jQW5ub3RhdGlvbic7XG5pbXBvcnQge09wdGlvbmFsfSBmcm9tICcuLi8uLi91dGlsL3RzL09wdGlvbmFsJztcbmltcG9ydCB7QW5ub3RhdGlvbkNvbnRyb2xCYXJ9IGZyb20gJy4uL0Fubm90YXRpb25Db250cm9sQmFyJztcbmltcG9ydCB7Q2hpbGRBbm5vdGF0aW9uU2VjdGlvbn0gZnJvbSAnLi4vY2hpbGRfYW5ub3RhdGlvbnMvQ2hpbGRBbm5vdGF0aW9uU2VjdGlvbic7XG5pbXBvcnQge0RvY01ldGF9IGZyb20gXCIuLi8uLi9tZXRhZGF0YS9Eb2NNZXRhXCI7XG5cblxuLyoqXG4gKiBBIGdlbmVyaWMgd3JhcHBlciB0aGF0IGRldGVybWluZXMgd2hpY2ggc3ViLWNvbXBvbmVudCB0byByZW5kZXIuXG4gKi9cbmV4cG9ydCBjbGFzcyBUZXh0SGlnaGxpZ2h0QW5ub3RhdGlvbkNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge307XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGFubm90YXRpb24gfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgY29uc3QgYXR0clR5cGUgPSBBbm5vdGF0aW9uVHlwZXMudG9EYXRhQXR0cmlidXRlKGFubm90YXRpb24uYW5ub3RhdGlvblR5cGUpO1xuXG4gICAgICAgIGNvbnN0IGh0bWwgPSBPcHRpb25hbC5vZihhbm5vdGF0aW9uLmh0bWwpLmdldE9yRWxzZSgnJyk7XG5cbiAgICAgICAgY29uc3Qga2V5ID0gJ3RleHQtaGlnaGxpZ2h0LScgKyBhbm5vdGF0aW9uLmlkO1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0wIG1iLTJcIj5cblxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICBkYXRhLWFubm90YXRpb24taWQ9e2Fubm90YXRpb24uaWR9XG4gICAgICAgICAgICAgICAgICAgICBkYXRhLWFubm90YXRpb24tdHlwZT17YXR0clR5cGV9XG4gICAgICAgICAgICAgICAgICAgICBkYXRhLWFubm90YXRpb24tY29sb3I9e2Fubm90YXRpb24uY29sb3J9XG4gICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2F0dHJUeXBlfT5cblxuICAgICAgICAgICAgICAgICAgICA8YmxvY2txdW90ZSBjbGFzc05hbWU9XCJwLTFcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGh0bWx9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvYmxvY2txdW90ZT5cblxuICAgICAgICAgICAgICAgICAgICA8QW5ub3RhdGlvbkNvbnRyb2xCYXIgYW5ub3RhdGlvbj17YW5ub3RhdGlvbn0vPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGlsZEFubm90YXRpb25TZWN0aW9uIGRvY01ldGE9e3RoaXMucHJvcHMuZG9jTWV0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudD17YW5ub3RhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuPXthbm5vdGF0aW9uLmNoaWxkcmVufS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxufVxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgZG9jTWV0YTogRG9jTWV0YTtcbiAgICByZWFkb25seSBhbm5vdGF0aW9uOiBEb2NBbm5vdGF0aW9uO1xuXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuXG59XG5cbiJdfQ==