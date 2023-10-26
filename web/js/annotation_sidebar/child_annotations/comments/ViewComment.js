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
const react_moment_1 = __importDefault(require("react-moment"));
const CommentDropdown_1 = require("../CommentDropdown");
const Logger_1 = require("../../../logger/Logger");
const log = Logger_1.Logger.create();
const Styles = {
    barBody: {
        display: 'flex'
    },
    barChild: {
        marginTop: 'auto',
        marginBottom: 'auto',
    }
};
class ViewComment extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onDelete = this.onDelete.bind(this);
        this.state = {};
    }
    render() {
        const { comment } = this.props;
        const key = 'comment-' + comment.id;
        return (React.createElement("div", { className: "m-1 mb-2" },
            React.createElement("div", { key: key, className: "comment" },
                React.createElement("div", { className: "pb-1 pt-1" },
                    React.createElement("span", { dangerouslySetInnerHTML: { __html: comment.html } })),
                React.createElement("div", { style: Styles.barBody, className: "flexbar comment-bar border-top pt-1 pb-2" },
                    React.createElement("div", { style: Styles.barChild, className: "text-muted" },
                        React.createElement(react_moment_1.default, { withTitle: true, titleFormat: "D MMM YYYY hh:MM A", fromNow: true }, comment.created)),
                    React.createElement("div", { style: Styles.barChild, className: "flexbar-right" },
                        this.props.editButton,
                        React.createElement("div", { className: "ml-1" },
                            React.createElement(CommentDropdown_1.CommentDropdown, { id: 'comment-dropdown-' + comment.id, comment: comment, onDelete: () => this.onDelete(comment) })))))));
    }
    onDelete(comment) {
        log.info("Comment deleted: ", comment);
        delete comment.pageMeta.comments[comment.id];
    }
}
exports.ViewComment = ViewComment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlld0NvbW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJWaWV3Q29tbWVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLGdFQUFrQztBQUVsQyx3REFBbUQ7QUFDbkQsbURBQThDO0FBSTlDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFNLE1BQU0sR0FBYztJQUV0QixPQUFPLEVBQUU7UUFDTCxPQUFPLEVBQUUsTUFBTTtLQUNsQjtJQUVELFFBQVEsRUFBRTtRQUNOLFNBQVMsRUFBRSxNQUFNO1FBQ2pCLFlBQVksRUFBRSxNQUFNO0tBQ3ZCO0NBRUosQ0FBQztBQUtGLE1BQWEsV0FBWSxTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUU1RCxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUVwQixDQUFDO0lBRU0sTUFBTTtRQUNULE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRS9CLE1BQU0sR0FBRyxHQUFHLFVBQVUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDO1FBRXBDLE9BQU8sQ0FFSCw2QkFBSyxTQUFTLEVBQUMsVUFBVTtZQUVyQiw2QkFBSyxHQUFHLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBQyxTQUFTO2dCQUU5Qiw2QkFBSyxTQUFTLEVBQUMsV0FBVztvQkFLdEIsOEJBQU0sdUJBQXVCLEVBQUUsRUFBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLElBQUssRUFBQyxHQUUvQyxDQUVMO2dCQUVOLDZCQUFLLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxFQUNyQixTQUFTLEVBQUMsMENBQTBDO29CQUVyRCw2QkFBSyxLQUFLLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUMsWUFBWTt3QkFFL0Msb0JBQUMsc0JBQU0sSUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBQyxvQkFBb0IsRUFBQyxPQUFPLFVBQzVELE9BQU8sQ0FBQyxPQUFPLENBQ1gsQ0FDUDtvQkFFTiw2QkFBSyxLQUFLLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUMsZUFBZTt3QkFFakQsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVO3dCQUV0Qiw2QkFBSyxTQUFTLEVBQUMsTUFBTTs0QkFDakIsb0JBQUMsaUNBQWUsSUFBQyxFQUFFLEVBQUUsbUJBQW1CLEdBQUcsT0FBTyxDQUFDLEVBQUUsRUFDcEMsT0FBTyxFQUFFLE9BQU8sRUFDaEIsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FDeEQsQ0FFSixDQUVKLENBRUosQ0FFSixDQUNULENBQUM7SUFFTixDQUFDO0lBRU8sUUFBUSxDQUFDLE9BQXNCO1FBQ25DLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkMsT0FBTyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQztDQUVKO0FBcEVELGtDQW9FQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNb21lbnQgZnJvbSAncmVhY3QtbW9tZW50JztcbmltcG9ydCB7RG9jQW5ub3RhdGlvbn0gZnJvbSAnLi4vLi4vRG9jQW5ub3RhdGlvbic7XG5pbXBvcnQge0NvbW1lbnREcm9wZG93bn0gZnJvbSAnLi4vQ29tbWVudERyb3Bkb3duJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi8uLi9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7SVN0eWxlTWFwfSBmcm9tICcuLi8uLi8uLi9yZWFjdC9JU3R5bGVNYXAnO1xuaW1wb3J0IHtDb21tZW50fSBmcm9tICcuLi8uLi8uLi9tZXRhZGF0YS9Db21tZW50JztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5jb25zdCBTdHlsZXM6IElTdHlsZU1hcCA9IHtcblxuICAgIGJhckJvZHk6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnXG4gICAgfSxcblxuICAgIGJhckNoaWxkOiB7XG4gICAgICAgIG1hcmdpblRvcDogJ2F1dG8nLFxuICAgICAgICBtYXJnaW5Cb3R0b206ICdhdXRvJyxcbiAgICB9XG5cbn07XG5cbi8qKlxuICogQSBnZW5lcmljIHdyYXBwZXIgdGhhdCBkZXRlcm1pbmVzIHdoaWNoIHN1Yi1jb21wb25lbnQgdG8gcmVuZGVyLlxuICovXG5leHBvcnQgY2xhc3MgVmlld0NvbW1lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5vbkRlbGV0ZSA9IHRoaXMub25EZWxldGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBjb21tZW50IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGNvbnN0IGtleSA9ICdjb21tZW50LScgKyBjb21tZW50LmlkO1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0xIG1iLTJcIj5cblxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT1cImNvbW1lbnRcIj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTEgcHQtMVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7LypUT0RPOiBiYXNlZCBvbiB0aGUgc3RhdGUgZGV0ZXJtaW5lIGlmIHdlIHNob3VsZCBiZSovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qZWRpdGluZyBvciBqdXN0IGRpc3BsYXlpbmcgdGhlIGNvbW1lbnQqL31cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGNvbW1lbnQuaHRtbCF9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e1N0eWxlcy5iYXJCb2R5fVxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXhiYXIgY29tbWVudC1iYXIgYm9yZGVyLXRvcCBwdC0xIHBiLTJcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17U3R5bGVzLmJhckNoaWxkfSBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qVE9ETzogbWFrZSB0aGlzIGludG8gaXRzIG93biBjb21wb25lbnQuLi4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vbWVudCB3aXRoVGl0bGU9e3RydWV9IHRpdGxlRm9ybWF0PVwiRCBNTU0gWVlZWSBoaDpNTSBBXCIgZnJvbU5vdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbW1lbnQuY3JlYXRlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01vbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtTdHlsZXMuYmFyQ2hpbGR9IGNsYXNzTmFtZT1cImZsZXhiYXItcmlnaHRcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmVkaXRCdXR0b259XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1lbnREcm9wZG93biBpZD17J2NvbW1lbnQtZHJvcGRvd24tJyArIGNvbW1lbnQuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudD17Y29tbWVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gdGhpcy5vbkRlbGV0ZShjb21tZW50KX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25EZWxldGUoY29tbWVudDogRG9jQW5ub3RhdGlvbikge1xuICAgICAgICBsb2cuaW5mbyhcIkNvbW1lbnQgZGVsZXRlZDogXCIsIGNvbW1lbnQpO1xuICAgICAgICBkZWxldGUgY29tbWVudC5wYWdlTWV0YS5jb21tZW50c1tjb21tZW50LmlkXTtcbiAgICB9XG5cbn1cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIGNvbW1lbnQ6IERvY0Fubm90YXRpb247XG4gICAgZWRpdEJ1dHRvbjogSlNYLkVsZW1lbnQ7XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuXG59XG5cblxuIl19