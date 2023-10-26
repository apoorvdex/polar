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
const EditComment_1 = require("./EditComment");
const CancelButton_1 = require("../CancelButton");
const NullCollapse_1 = require("../../../ui/null_collapse/NullCollapse");
class CreateComment extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.onCancel = this.onCancel.bind(this);
        this.state = {
            active: this.props.active || false
        };
    }
    render() {
        const cancelButton = React.createElement(CancelButton_1.CancelButton, { onClick: () => this.onCancel() });
        return React.createElement(NullCollapse_1.NullCollapse, { open: this.props.active },
            React.createElement(EditComment_1.EditComment, { id: 'edit-comment-for' + this.props.id, onComment: (html) => this.props.onComment(html), cancelButton: cancelButton }),
            ";");
    }
    onCancel() {
        this.props.onCancel();
    }
}
exports.CreateComment = CreateComment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlQ29tbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNyZWF0ZUNvbW1lbnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwrQ0FBMEM7QUFDMUMsa0RBQTZDO0FBQzdDLHlFQUFvRTtBQUVwRSxNQUFhLGFBQWMsU0FBUSxLQUFLLENBQUMsYUFBNkI7SUFFbEUsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFekMsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLO1NBQ3JDLENBQUM7SUFFTixDQUFDO0lBRU0sTUFBTTtRQUVULE1BQU0sWUFBWSxHQUFHLG9CQUFDLDJCQUFZLElBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO1FBRXJFLE9BQU8sb0JBQUMsMkJBQVksSUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO1lBRXhDLG9CQUFDLHlCQUFXLElBQUMsRUFBRSxFQUFFLGtCQUFrQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUN0QyxTQUFTLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUMvQyxZQUFZLEVBQUUsWUFBWSxHQUFHO2dCQUUvQixDQUFDO0lBRXBCLENBQUM7SUFFTyxRQUFRO1FBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMxQixDQUFDO0NBRUo7QUEvQkQsc0NBK0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFZGl0Q29tbWVudH0gZnJvbSBcIi4vRWRpdENvbW1lbnRcIjtcbmltcG9ydCB7Q2FuY2VsQnV0dG9ufSBmcm9tIFwiLi4vQ2FuY2VsQnV0dG9uXCI7XG5pbXBvcnQge051bGxDb2xsYXBzZX0gZnJvbSBcIi4uLy4uLy4uL3VpL251bGxfY29sbGFwc2UvTnVsbENvbGxhcHNlXCI7XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVDb21tZW50IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLm9uQ2FuY2VsID0gdGhpcy5vbkNhbmNlbC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhY3RpdmU6IHRoaXMucHJvcHMuYWN0aXZlIHx8IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IDxDYW5jZWxCdXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5vbkNhbmNlbCgpfS8+O1xuXG4gICAgICAgIHJldHVybiA8TnVsbENvbGxhcHNlIG9wZW49e3RoaXMucHJvcHMuYWN0aXZlfT5cblxuICAgICAgICAgICAgPEVkaXRDb21tZW50IGlkPXsnZWRpdC1jb21tZW50LWZvcicgKyB0aGlzLnByb3BzLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29tbWVudD17KGh0bWwpID0+IHRoaXMucHJvcHMub25Db21tZW50KGh0bWwpfVxuICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbj17Y2FuY2VsQnV0dG9ufS8+O1xuXG4gICAgICAgIDwvTnVsbENvbGxhcHNlPjtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25DYW5jZWwoKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DYW5jZWwoKTtcbiAgICB9XG5cbn1cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgYWN0aXZlOiBib29sZWFuO1xuICAgIHJlYWRvbmx5IG9uQ29tbWVudDogKGh0bWw6IHN0cmluZykgPT4gdm9pZDtcbiAgICByZWFkb25seSBvbkNhbmNlbDogKCkgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG59XG5cblxuIl19