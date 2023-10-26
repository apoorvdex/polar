"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
class TextareaEditorComponent extends react_1.Component {
    constructor(props = {}) {
        super(props);
    }
    onChange(content) {
        console.log('this', this);
        console.log('onChange', content);
    }
    render() {
        return (react_1.default.createElement("textarea", null, "TextareaEditorComponent"));
    }
}
exports.TextareaEditorComponent = TextareaEditorComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dGFyZWFFZGl0b3JDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUZXh0YXJlYUVkaXRvckNvbXBvbmVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0EsK0NBQXlDO0FBRXpDLE1BQWEsdUJBQXdCLFNBQVEsaUJBQVM7SUFFbEQsWUFBWSxLQUFLLEdBQUcsRUFBRTtRQUNsQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUVELFFBQVEsQ0FBQyxPQUFZO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxNQUFNO1FBSUYsT0FBTyxDQUNILDBFQUE0QyxDQUMvQyxDQUFDO0lBRU4sQ0FBQztDQUVKO0FBckJELDBEQXFCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNsYXNzIFRleHRhcmVhRWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzID0ge30pIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKGNvbnRlbnQ6IGFueSkge1xuICAgICAgICBjb25zb2xlLmxvZygndGhpcycsIHRoaXMpO1xuICAgICAgICBjb25zb2xlLmxvZygnb25DaGFuZ2UnLCBjb250ZW50KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3N1bW1lcm5vdGUvcmVhY3Qtc3VtbWVybm90ZS9pc3N1ZXMvMzhcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRleHRhcmVhPlRleHRhcmVhRWRpdG9yQ29tcG9uZW50PC90ZXh0YXJlYT5cbiAgICAgICAgKTtcblxuICAgIH1cblxufVxuIl19