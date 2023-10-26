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
const Button_1 = __importDefault(require("reactstrap/lib/Button"));
const RichTextArea_1 = require("../../RichTextArea");
class EditComment extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.html = "";
        this.onComment = this.onComment.bind(this);
        if (this.props.existingComment) {
            this.html = this.props.existingComment.content.HTML;
        }
        this.state = {
            iter: 0
        };
    }
    render() {
        const id = 'rich-text-editor-' + this.props.id;
        return (React.createElement("div", { id: "annotation-comment-box", className: "" },
            React.createElement("div", { className: "" },
                React.createElement(RichTextArea_1.RichTextArea, { id: id, value: this.html, autofocus: true, onKeyDown: event => this.onKeyDown(event), onChange: (html) => this.onChange(html) })),
            React.createElement("div", { className: "flexbar w-100" },
                React.createElement("div", { className: "flexbar-right" },
                    this.props.cancelButton,
                    React.createElement(Button_1.default, { color: "primary", size: "sm", className: "mt-2", onClick: () => this.onComment() }, this.props.existingComment ? 'Update' : 'Comment')))));
    }
    onKeyDown(event) {
        if (event.getModifierState("Control") && event.key === "Enter") {
            this.onComment();
        }
    }
    onChange(html) {
        this.html = html;
    }
    onComment() {
        this.props.onComment(this.html, this.props.existingComment);
        this.setState({
            iter: this.state.iter + 1
        });
    }
}
exports.EditComment = EditComment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWRpdENvbW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJFZGl0Q29tbWVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLG1FQUEyQztBQUMzQyxxREFBZ0Q7QUFHaEQsTUFBYSxXQUFZLFNBQVEsS0FBSyxDQUFDLFNBQXlCO0lBSTVELFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUhsQixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBS3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFM0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRTtZQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFLLENBQUM7U0FDeEQ7UUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsSUFBSSxFQUFFLENBQUM7U0FDVixDQUFDO0lBRU4sQ0FBQztJQUVNLE1BQU07UUFFVCxNQUFNLEVBQUUsR0FBRyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUUvQyxPQUFPLENBRUgsNkJBQUssRUFBRSxFQUFDLHdCQUF3QixFQUFDLFNBQVMsRUFBQyxFQUFFO1lBRXpDLDZCQUFLLFNBQVMsRUFBQyxFQUFFO2dCQUViLG9CQUFDLDJCQUFZLElBQUMsRUFBRSxFQUFFLEVBQUUsRUFDTixLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksRUFDaEIsU0FBUyxFQUFFLElBQUksRUFDZixTQUFTLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUN6QyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FFdEQ7WUFFTiw2QkFBSyxTQUFTLEVBQUMsZUFBZTtnQkFVMUIsNkJBQUssU0FBUyxFQUFDLGVBQWU7b0JBRXpCLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWTtvQkFFeEIsb0JBQUMsZ0JBQU0sSUFBQyxLQUFLLEVBQUMsU0FBUyxFQUNmLElBQUksRUFBQyxJQUFJLEVBQ1QsU0FBUyxFQUFDLE1BQU0sRUFDaEIsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFFbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUU3QyxDQUVQLENBR0osQ0FFSixDQUVULENBQUM7SUFFTixDQUFDO0lBRU8sU0FBUyxDQUFDLEtBQW9CO1FBTWxDLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssT0FBTyxFQUFFO1lBQzVELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNwQjtJQUVMLENBQUM7SUFFTyxRQUFRLENBQUMsSUFBWTtRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRU8sU0FBUztRQUViLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUU1RCxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ1YsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUM7U0FDNUIsQ0FBQyxDQUFDO0lBRVAsQ0FBQztDQUVKO0FBakdELGtDQWlHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3RzdHJhcC9saWIvQnV0dG9uJztcbmltcG9ydCB7UmljaFRleHRBcmVhfSBmcm9tIFwiLi4vLi4vUmljaFRleHRBcmVhXCI7XG5pbXBvcnQge0NvbW1lbnR9IGZyb20gJy4uLy4uLy4uL21ldGFkYXRhL0NvbW1lbnQnO1xuXG5leHBvcnQgY2xhc3MgRWRpdENvbW1lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIHByaXZhdGUgaHRtbDogc3RyaW5nID0gXCJcIjtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5vbkNvbW1lbnQgPSB0aGlzLm9uQ29tbWVudC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmV4aXN0aW5nQ29tbWVudCkge1xuICAgICAgICAgICAgdGhpcy5odG1sID0gdGhpcy5wcm9wcy5leGlzdGluZ0NvbW1lbnQuY29udGVudC5IVE1MITtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpdGVyOiAwXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IGlkID0gJ3JpY2gtdGV4dC1lZGl0b3ItJyArIHRoaXMucHJvcHMuaWQ7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdiBpZD1cImFubm90YXRpb24tY29tbWVudC1ib3hcIiBjbGFzc05hbWU9XCJcIj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPFJpY2hUZXh0QXJlYSBpZD17aWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuaHRtbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvZm9jdXM9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXtldmVudCA9PiB0aGlzLm9uS2V5RG93bihldmVudCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhodG1sKSA9PiB0aGlzLm9uQ2hhbmdlKGh0bWwpfS8+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleGJhciB3LTEwMFwiPlxuXG4gICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtLTEgcC0xXCI+Ki99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxpIGNsYXNzTmFtZT1cImZhYiBmYS1odG1sNVwiIHN0eWxlPXt7Zm9udFNpemU6ICcyMHB4J319PjwvaT4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiZuYnNwOyovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qSFRNTCBzdHlsaW5nIHN1cHBvcnRlZCovfVxuXG4gICAgICAgICAgICAgICAgICAgIHsvKjwvZGl2PiovfVxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleGJhci1yaWdodFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jYW5jZWxCdXR0b259XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMub25Db21tZW50KCl9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZXhpc3RpbmdDb21tZW50ID8gJ1VwZGF0ZScgOiAnQ29tbWVudCd9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG5cbiAgICAgICAgLy8gaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICAvLyAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGlmIChldmVudC5nZXRNb2RpZmllclN0YXRlKFwiQ29udHJvbFwiKSAmJiBldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgdGhpcy5vbkNvbW1lbnQoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNoYW5nZShodG1sOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5odG1sID0gaHRtbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ29tbWVudCgpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLnByb3BzLm9uQ29tbWVudCh0aGlzLmh0bWwsIHRoaXMucHJvcHMuZXhpc3RpbmdDb21tZW50KTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGl0ZXI6IHRoaXMuc3RhdGUuaXRlciArIDFcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xuXG4gICAgcmVhZG9ubHkgaWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFdoZW4gZ2l2ZW4gYSBjb21tZW50IHdlJ3JlIGVkaXRpbmcgYW4gZXhpc3RpbmcgY29tbWVudC5cbiAgICAgKi9cbiAgICByZWFkb25seSBleGlzdGluZ0NvbW1lbnQ/OiBDb21tZW50O1xuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gd2UgaGF2ZSBhIGNyZWF0ZWQgb3IgdXBkYXRlZCBhbiBleGlzdGluZyBjb21tZW50LiAgSWYgdGhlXG4gICAgICogJ2V4aXN0aW5nQ29tbWVudCcgaXMgc3BlY2lmaWVkIHdoZW4gd2UncmUgZG9pbmcgYW4gdXBkYXRlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG9uQ29tbWVudDogKGh0bWw6IHN0cmluZywgZXhpc3RpbmdDb21tZW50PzogQ29tbWVudCkgPT4gdm9pZDtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2FuY2VsQnV0dG9uOiBKU1guRWxlbWVudDtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZSB7XG4gICAgcmVhZG9ubHkgaXRlcjogbnVtYmVyO1xufVxuXG5cbiJdfQ==