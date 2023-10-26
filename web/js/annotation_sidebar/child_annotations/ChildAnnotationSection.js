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
const FlashcardComponent_1 = require("./FlashcardComponent");
const ViewOrEditComment_1 = require("./comments/ViewOrEditComment");
const CommentActions_1 = require("./comments/CommentActions");
class ChildAnnotationSection extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    render() {
        const { children } = this.props;
        const result = [];
        children.map(child => {
            if (child.annotationType === AnnotationType_1.AnnotationType.COMMENT) {
                result.push(React.createElement(ViewOrEditComment_1.ViewOrEditComment, { key: child.id, id: child.id, onComment: (html, existingComment) => CommentActions_1.CommentActions.update(this.props.docMeta, this.props.parent, html, existingComment), comment: child }));
            }
            else {
                result.push(React.createElement(FlashcardComponent_1.FlashcardComponent, { key: child.id, flashcard: child }));
            }
        });
        return result;
    }
}
exports.ChildAnnotationSection = ChildAnnotationSection;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hpbGRBbm5vdGF0aW9uU2VjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNoaWxkQW5ub3RhdGlvblNlY3Rpb24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUUvQixrRUFBNkQ7QUFDN0QsNkRBQXdEO0FBQ3hELG9FQUErRDtBQUMvRCw4REFBeUQ7QUFNekQsTUFBYSxzQkFBdUIsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFdkUsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBRXBCLENBQUM7SUFFTSxNQUFNO1FBRVQsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFaEMsTUFBTSxNQUFNLEdBQVEsRUFBRSxDQUFDO1FBRXZCLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFFakIsSUFBSSxLQUFLLENBQUMsY0FBYyxLQUFLLCtCQUFjLENBQUMsT0FBTyxFQUFFO2dCQUVqRCxNQUFNLENBQUMsSUFBSSxDQUFFLG9CQUFDLHFDQUFpQixJQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUNiLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUNaLFNBQVMsRUFBRSxDQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsRUFBRSxDQUFDLCtCQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxlQUFlLENBQUMsRUFDekgsT0FBTyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUM7YUFFdEQ7aUJBQU07Z0JBQ0gsTUFBTSxDQUFDLElBQUksQ0FBRSxvQkFBQyx1Q0FBa0IsSUFBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsS0FBSyxHQUF1QixDQUFDLENBQUM7YUFDNUY7UUFHTCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sTUFBTSxDQUFDO0lBRWxCLENBQUM7Q0FFSjtBQW5DRCx3REFtQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0RvY0Fubm90YXRpb259IGZyb20gJy4uL0RvY0Fubm90YXRpb24nO1xuaW1wb3J0IHtBbm5vdGF0aW9uVHlwZX0gZnJvbSAnLi4vLi4vbWV0YWRhdGEvQW5ub3RhdGlvblR5cGUnO1xuaW1wb3J0IHtGbGFzaGNhcmRDb21wb25lbnR9IGZyb20gJy4vRmxhc2hjYXJkQ29tcG9uZW50JztcbmltcG9ydCB7Vmlld09yRWRpdENvbW1lbnR9IGZyb20gXCIuL2NvbW1lbnRzL1ZpZXdPckVkaXRDb21tZW50XCI7XG5pbXBvcnQge0NvbW1lbnRBY3Rpb25zfSBmcm9tIFwiLi9jb21tZW50cy9Db21tZW50QWN0aW9uc1wiO1xuaW1wb3J0IHtEb2NNZXRhfSBmcm9tIFwiLi4vLi4vbWV0YWRhdGEvRG9jTWV0YVwiO1xuXG4vKipcbiAqIEEgZ2VuZXJpYyB3cmFwcGVyIHRoYXQgZGV0ZXJtaW5lcyB3aGljaCBzdWItY29tcG9uZW50IHRvIHJlbmRlci5cbiAqL1xuZXhwb3J0IGNsYXNzIENoaWxkQW5ub3RhdGlvblNlY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdDogYW55ID0gW107XG5cbiAgICAgICAgY2hpbGRyZW4ubWFwKGNoaWxkID0+IHtcblxuICAgICAgICAgICAgaWYgKGNoaWxkLmFubm90YXRpb25UeXBlID09PSBBbm5vdGF0aW9uVHlwZS5DT01NRU5UKSB7XG5cbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCAoPFZpZXdPckVkaXRDb21tZW50IGtleT17Y2hpbGQuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17Y2hpbGQuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvbW1lbnQ9eyhodG1sLCBleGlzdGluZ0NvbW1lbnQpID0+IENvbW1lbnRBY3Rpb25zLnVwZGF0ZSh0aGlzLnByb3BzLmRvY01ldGEsIHRoaXMucHJvcHMucGFyZW50LCBodG1sLCBleGlzdGluZ0NvbW1lbnQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudD17Y2hpbGR9Lz4pO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoICg8Rmxhc2hjYXJkQ29tcG9uZW50IGtleT17Y2hpbGQuaWR9IGZsYXNoY2FyZD17Y2hpbGR9PjwvRmxhc2hjYXJkQ29tcG9uZW50Pik7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuXG4gICAgcmVhZG9ubHkgZG9jTWV0YTogRG9jTWV0YTtcblxuICAgIHJlYWRvbmx5IHBhcmVudDogRG9jQW5ub3RhdGlvbjtcblxuICAgIHJlYWRvbmx5IGNoaWxkcmVuOiBEb2NBbm5vdGF0aW9uW107XG5cbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG5cbn1cblxuXG4iXX0=