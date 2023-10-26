"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Logger_1 = require("../../logger/Logger");
const log = Logger_1.Logger.create();
class Styles {
}
Styles.notice = {
    position: 'fixed',
    width: '450px',
    bottom: '10px',
    right: '15px',
    zIndex: 9999,
};
Styles.intro = {
    fontWeight: 'bold',
    fontSize: '22px',
    margin: '5px 0px 10px 0px'
};
class BubbleModal extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const display = this.props.disabled ? 'none' : 'block';
        return (react_1.default.createElement("div", { style: { display } },
            react_1.default.createElement("div", { className: "p-3 m-2 rounded", style: Styles.notice }, this.props.children)));
    }
}
exports.BubbleModal = BubbleModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnViYmxlTW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJCdWJibGVNb2RhbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxrREFBMEI7QUFDMUIsZ0RBQTJDO0FBRTNDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFNLE1BQU07O0FBRU0sYUFBTSxHQUF3QjtJQUV4QyxRQUFRLEVBQUUsT0FBTztJQUNqQixLQUFLLEVBQUUsT0FBTztJQUNkLE1BQU0sRUFBRSxNQUFNO0lBQ2QsS0FBSyxFQUFFLE1BQU07SUFDYixNQUFNLEVBQUUsSUFBSTtDQUVmLENBQUM7QUFFWSxZQUFLLEdBQXdCO0lBRXZDLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLFFBQVEsRUFBRSxNQUFNO0lBQ2hCLE1BQU0sRUFBRSxrQkFBa0I7Q0FFN0IsQ0FBQztBQU1OLE1BQWEsV0FBWSxTQUFRLGVBQUssQ0FBQyxTQUF5QjtJQUU1RCxZQUFZLEtBQVU7UUFDbEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUNaLENBQUM7SUFFTixDQUFDO0lBRU0sTUFBTTtRQUVULE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUV4RCxPQUFPLENBRUgsdUNBQUssS0FBSyxFQUFFLEVBQUMsT0FBTyxFQUFDO1lBRWpCLHVDQUFLLFNBQVMsRUFBQyxpQkFBaUIsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sSUFFaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBRWxCLENBRUosQ0FFVCxDQUFDO0lBQ04sQ0FBQztDQUVKO0FBN0JELGtDQTZCQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCByZWFjdC9uby1tdWx0aS1jb21wOiAwLCByZWFjdC9wcm9wLXR5cGVzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uLy4uL2xvZ2dlci9Mb2dnZXInO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmNsYXNzIFN0eWxlcyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIG5vdGljZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcblxuICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgd2lkdGg6ICc0NTBweCcsXG4gICAgICAgIGJvdHRvbTogJzEwcHgnLFxuICAgICAgICByaWdodDogJzE1cHgnLFxuICAgICAgICB6SW5kZXg6IDk5OTksXG5cbiAgICB9O1xuXG4gICAgcHVibGljIHN0YXRpYyBpbnRybzogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcblxuICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICAgIGZvbnRTaXplOiAnMjJweCcsXG4gICAgICAgIG1hcmdpbjogJzVweCAwcHggMTBweCAwcHgnXG5cbiAgICB9O1xuXG59XG5cbi8qKlxuICovXG5leHBvcnQgY2xhc3MgQnViYmxlTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IGRpc3BsYXkgPSB0aGlzLnByb3BzLmRpc2FibGVkICA/ICdub25lJyA6ICdibG9jayc7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXl9fT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIG0tMiByb3VuZGVkXCIgc3R5bGU9e1N0eWxlcy5ub3RpY2V9PlxuXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSBkaXNhYmxlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlIHtcbn1cbiJdfQ==