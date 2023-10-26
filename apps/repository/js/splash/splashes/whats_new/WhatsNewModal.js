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
const WhatsNewContent_1 = require("./WhatsNewContent");
const Modal_1 = __importDefault(require("reactstrap/lib/Modal"));
const ModalHeader_1 = __importDefault(require("reactstrap/lib/ModalHeader"));
const ModalBody_1 = __importDefault(require("reactstrap/lib/ModalBody"));
const Button_1 = __importDefault(require("reactstrap/lib/Button"));
const ModalFooter_1 = __importDefault(require("reactstrap/lib/ModalFooter"));
class WhatsNewModal extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            open: true
        };
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(Modal_1.default, { isOpen: this.state.open, size: "lg", fade: false, style: { overflowY: 'initial', minWidth: '80%' } },
                React.createElement(ModalHeader_1.default, null, "What's New in Polar"),
                React.createElement(ModalBody_1.default, { style: { overflowY: 'auto', maxHeight: 'calc(100vh - 200px)' } },
                    React.createElement(WhatsNewContent_1.WhatsNewContent, null)),
                React.createElement(ModalFooter_1.default, null,
                    React.createElement(Button_1.default, { color: "primary", onClick: () => this.setState({ open: false }) }, "Close")))));
    }
}
exports.WhatsNewModal = WhatsNewModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2hhdHNOZXdNb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIldoYXRzTmV3TW9kYWwudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQix1REFBa0Q7QUFDbEQsaUVBQXlDO0FBQ3pDLDZFQUFxRDtBQUNyRCx5RUFBaUQ7QUFDakQsbUVBQTJDO0FBQzNDLDZFQUFxRDtBQUVyRCxNQUFhLGFBQWMsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFOUQsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxJQUFJLEVBQUUsSUFBSTtTQUNiLENBQUM7SUFFTixDQUFDO0lBRU0sTUFBTTtRQUVULE9BQU8sQ0FFSDtZQUVJLG9CQUFDLGVBQUssSUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQ3ZCLElBQUksRUFBQyxJQUFJLEVBQ1QsSUFBSSxFQUFFLEtBQUssRUFDWCxLQUFLLEVBQUUsRUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUM7Z0JBQ2pELG9CQUFDLHFCQUFXLDhCQUFrQztnQkFDOUMsb0JBQUMsbUJBQVMsSUFBQyxLQUFLLEVBQUUsRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxxQkFBcUIsRUFBQztvQkFFbkUsb0JBQUMsaUNBQWUsT0FBRSxDQUVWO2dCQUNaLG9CQUFDLHFCQUFXO29CQUNSLG9CQUFDLGdCQUFNLElBQUMsS0FBSyxFQUFDLFNBQVMsRUFBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUMsQ0FBQyxZQUFnQixDQUN6RSxDQUVWLENBRU4sQ0FFVCxDQUFDO0lBQ04sQ0FBQztDQUVKO0FBdENELHNDQXNDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7V2hhdHNOZXdDb250ZW50fSBmcm9tICcuL1doYXRzTmV3Q29udGVudCc7XG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3RzdHJhcC9saWIvTW9kYWwnO1xuaW1wb3J0IE1vZGFsSGVhZGVyIGZyb20gJ3JlYWN0c3RyYXAvbGliL01vZGFsSGVhZGVyJztcbmltcG9ydCBNb2RhbEJvZHkgZnJvbSAncmVhY3RzdHJhcC9saWIvTW9kYWxCb2R5JztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3RzdHJhcC9saWIvQnV0dG9uJztcbmltcG9ydCBNb2RhbEZvb3RlciBmcm9tICdyZWFjdHN0cmFwL2xpYi9Nb2RhbEZvb3Rlcic7XG5cbmV4cG9ydCBjbGFzcyBXaGF0c05ld01vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBvcGVuOiB0cnVlXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICA8TW9kYWwgaXNPcGVuPXt0aGlzLnN0YXRlLm9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgIGZhZGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e292ZXJmbG93WTogJ2luaXRpYWwnLCBtaW5XaWR0aDogJzgwJSd9fT5cbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsSGVhZGVyPldoYXQncyBOZXcgaW4gUG9sYXI8L01vZGFsSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxCb2R5IHN0eWxlPXt7b3ZlcmZsb3dZOiAnYXV0bycsIG1heEhlaWdodDogJ2NhbGMoMTAwdmggLSAyMDBweCknfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxXaGF0c05ld0NvbnRlbnQvPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWxCb2R5PlxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxGb290ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoe29wZW46IGZhbHNlfSl9PkNsb3NlPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWxGb290ZXI+XG5cbiAgICAgICAgICAgICAgICA8L01vZGFsPlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHdlIGNsaWNrIHRoZSBvayBidXR0b24uXG4gICAgICovXG4gICAgYWNjZXB0PzogKCkgPT4gdm9pZDtcblxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgICBvcGVuOiBib29sZWFuO1xufVxuIl19