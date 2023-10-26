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
const reactstrap_1 = require("reactstrap");
class LargeModalBody extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(reactstrap_1.ModalBody, { style: { overflowY: 'auto', maxHeight: 'calc(100vh - 100px)' } }, this.props.children));
    }
}
exports.LargeModalBody = LargeModalBody;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGFyZ2VNb2RhbEJvZHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJMYXJnZU1vZGFsQm9keS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLDJDQUE4RTtBQU05RSxNQUFhLGNBQWUsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFL0QsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRTFCLENBQUM7SUFFTSxNQUFNO1FBR1QsT0FBTyxDQUNILG9CQUFDLHNCQUFTLElBQUMsS0FBSyxFQUFFLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUscUJBQXFCLEVBQUMsSUFFbEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBRVosQ0FDZixDQUFDO0lBQ04sQ0FBQztDQUVKO0FBbkJELHdDQW1CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7QnV0dG9uLCBNb2RhbCwgTW9kYWxCb2R5LCBNb2RhbEZvb3RlciwgTW9kYWxIZWFkZXJ9IGZyb20gJ3JlYWN0c3RyYXAnO1xuXG4vKipcbiAqIE1vZGFsIHRoYXQgaXMgbGFyZ2UgYW5kIGZpdHMgbmVhcmx5IHRoZSBmdWxsIHNjcmVlbiBhbmQgaGFzIGEgc2ltcGxlXG4gKiBhY2NlcHQgYnV0dG9uLlxuICovXG5leHBvcnQgY2xhc3MgTGFyZ2VNb2RhbEJvZHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIC8vIG5vaW5zcGVjdGlvbiBUc0xpbnRcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNb2RhbEJvZHkgc3R5bGU9e3tvdmVyZmxvd1k6ICdhdXRvJywgbWF4SGVpZ2h0OiAnY2FsYygxMDB2aCAtIDEwMHB4KSd9fT5cblxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXG4gICAgICAgICAgICA8L01vZGFsQm9keT5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG5cbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG5cbn1cbiJdfQ==