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
const EditButton_1 = require("../EditButton");
const EditComment_1 = require("./EditComment");
const ViewComment_1 = require("./ViewComment");
const CancelButton_1 = require("../CancelButton");
class ViewOrEditComment extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onEdit = this.onEdit.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.state = {
            mode: 'view'
        };
    }
    render() {
        const editButton = React.createElement(EditButton_1.EditButton, { id: 'edit-button-for-' + this.props.id, onClick: () => this.onEdit(), type: "comment" });
        const cancelButton = React.createElement(CancelButton_1.CancelButton, { onClick: () => this.onCancel() });
        const existingComment = this.props.comment.original;
        if (this.state.mode === 'view') {
            return React.createElement(ViewComment_1.ViewComment, { comment: this.props.comment, editButton: editButton });
        }
        else {
            return React.createElement(EditComment_1.EditComment, { id: 'edit-comment-for' + this.props.id, onComment: (html) => this.props.onComment(html, existingComment), existingComment: existingComment, cancelButton: cancelButton });
        }
    }
    onEdit() {
        this.setState({ mode: 'edit' });
    }
    onCancel() {
        this.setState({ mode: 'view' });
    }
}
exports.ViewOrEditComment = ViewOrEditComment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlld09yRWRpdENvbW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJWaWV3T3JFZGl0Q29tbWVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBRS9CLDhDQUF5QztBQUN6QywrQ0FBMEM7QUFDMUMsK0NBQTBDO0FBQzFDLGtEQUE2QztBQUc3QyxNQUFhLGlCQUFrQixTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUVsRSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXpDLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxJQUFJLEVBQUUsTUFBTTtTQUNmLENBQUM7SUFFTixDQUFDO0lBRU0sTUFBTTtRQUVULE1BQU0sVUFBVSxHQUFHLG9CQUFDLHVCQUFVLElBQUMsRUFBRSxFQUFFLGtCQUFrQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUNyQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUM1QixJQUFJLEVBQUMsU0FBUyxHQUFFLENBQUM7UUFFakQsTUFBTSxZQUFZLEdBQUcsb0JBQUMsMkJBQVksSUFBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7UUFFckUsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBbUIsQ0FBQztRQUUvRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtZQUU1QixPQUFPLG9CQUFDLHlCQUFXLElBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUMzQixVQUFVLEVBQUUsVUFBVSxHQUFHLENBQUM7U0FFakQ7YUFBTTtZQUNILE9BQU8sb0JBQUMseUJBQVcsSUFBQyxFQUFFLEVBQUUsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQ3RDLFNBQVMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLGVBQWUsQ0FBQyxFQUNoRSxlQUFlLEVBQUUsZUFBZSxFQUNoQyxZQUFZLEVBQUUsWUFBWSxHQUFHLENBQUM7U0FDckQ7SUFFTCxDQUFDO0lBRU8sTUFBTTtRQUNWLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU8sUUFBUTtRQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0NBRUo7QUE5Q0QsOENBOENDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtEb2NBbm5vdGF0aW9ufSBmcm9tICcuLi8uLi9Eb2NBbm5vdGF0aW9uJztcbmltcG9ydCB7RWRpdEJ1dHRvbn0gZnJvbSBcIi4uL0VkaXRCdXR0b25cIjtcbmltcG9ydCB7RWRpdENvbW1lbnR9IGZyb20gXCIuL0VkaXRDb21tZW50XCI7XG5pbXBvcnQge1ZpZXdDb21tZW50fSBmcm9tIFwiLi9WaWV3Q29tbWVudFwiO1xuaW1wb3J0IHtDYW5jZWxCdXR0b259IGZyb20gXCIuLi9DYW5jZWxCdXR0b25cIjtcbmltcG9ydCB7Q29tbWVudH0gZnJvbSAnLi4vLi4vLi4vbWV0YWRhdGEvQ29tbWVudCc7XG5cbmV4cG9ydCBjbGFzcyBWaWV3T3JFZGl0Q29tbWVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLm9uRWRpdCA9IHRoaXMub25FZGl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DYW5jZWwgPSB0aGlzLm9uQ2FuY2VsLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG1vZGU6ICd2aWV3J1xuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCBlZGl0QnV0dG9uID0gPEVkaXRCdXR0b24gaWQ9eydlZGl0LWJ1dHRvbi1mb3ItJyArIHRoaXMucHJvcHMuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5vbkVkaXQoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY29tbWVudFwiLz47XG5cbiAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gPENhbmNlbEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uQ2FuY2VsKCl9Lz47XG5cbiAgICAgICAgY29uc3QgZXhpc3RpbmdDb21tZW50ID0gdGhpcy5wcm9wcy5jb21tZW50Lm9yaWdpbmFsIGFzIENvbW1lbnQ7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubW9kZSA9PT0gJ3ZpZXcnKSB7XG5cbiAgICAgICAgICAgIHJldHVybiA8Vmlld0NvbW1lbnQgY29tbWVudD17dGhpcy5wcm9wcy5jb21tZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0QnV0dG9uPXtlZGl0QnV0dG9ufS8+O1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gPEVkaXRDb21tZW50IGlkPXsnZWRpdC1jb21tZW50LWZvcicgKyB0aGlzLnByb3BzLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvbW1lbnQ9eyhodG1sKSA9PiB0aGlzLnByb3BzLm9uQ29tbWVudChodG1sLCBleGlzdGluZ0NvbW1lbnQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ0NvbW1lbnQ9e2V4aXN0aW5nQ29tbWVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uPXtjYW5jZWxCdXR0b259Lz47XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgb25FZGl0KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHttb2RlOiAnZWRpdCd9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ2FuY2VsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHttb2RlOiAndmlldyd9KTtcbiAgICB9XG5cbn1cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgY29tbWVudDogRG9jQW5ub3RhdGlvbjtcbiAgICByZWFkb25seSBvbkNvbW1lbnQ6IChodG1sOiBzdHJpbmcsIGV4aXN0aW5nQ29tbWVudDogQ29tbWVudCkgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gICAgcmVhZG9ubHkgbW9kZTogJ3ZpZXcnIHwgJ2VkaXQnO1xufVxuXG5cbiJdfQ==