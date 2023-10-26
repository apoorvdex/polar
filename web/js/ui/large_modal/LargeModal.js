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
const Functions_1 = require("../../util/Functions");
class LargeModal extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(reactstrap_1.Modal, { isOpen: this.props.isOpen, size: "lg", fade: false, toggle: this.props.toggle ? this.props.toggle : Functions_1.NULL_FUNCTION, style: { overflowY: 'initial', minWidth: '90%' } }, this.props.children));
    }
}
exports.LargeModal = LargeModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGFyZ2VNb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkxhcmdlTW9kYWwudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwyQ0FBOEU7QUFDOUUsb0RBQW1EO0FBTW5ELE1BQWEsVUFBVyxTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUUzRCxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFMUIsQ0FBQztJQUVNLE1BQU07UUFHVCxPQUFPLENBQ0gsb0JBQUMsa0JBQUssSUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQ3pCLElBQUksRUFBQyxJQUFJLEVBQ1QsSUFBSSxFQUFFLEtBQUssRUFDWCxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyx5QkFBYSxFQUM3RCxLQUFLLEVBQUUsRUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUMsSUFFaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBRWhCLENBQ1gsQ0FBQztJQUNOLENBQUM7Q0FFSjtBQXZCRCxnQ0F1QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0J1dHRvbiwgTW9kYWwsIE1vZGFsQm9keSwgTW9kYWxGb290ZXIsIE1vZGFsSGVhZGVyfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB7TlVMTF9GVU5DVElPTn0gZnJvbSAnLi4vLi4vdXRpbC9GdW5jdGlvbnMnO1xuXG4vKipcbiAqIE1vZGFsIHRoYXQgaXMgbGFyZ2UgYW5kIGZpdHMgbmVhcmx5IHRoZSBmdWxsIHNjcmVlbi4gTXVzdCB1c2UgdGhpcyB3aXRoIGFcbiAqIExhcmdlTW9kYWxCb2R5LlxuICovXG5leHBvcnQgY2xhc3MgTGFyZ2VNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgLy8gbm9pbnNwZWN0aW9uIFRzTGludFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1vZGFsIGlzT3Blbj17dGhpcy5wcm9wcy5pc09wZW59XG4gICAgICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgICAgICAgICBmYWRlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICB0b2dnbGU9e3RoaXMucHJvcHMudG9nZ2xlID8gdGhpcy5wcm9wcy50b2dnbGUgOiBOVUxMX0ZVTkNUSU9OfVxuICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7b3ZlcmZsb3dZOiAnaW5pdGlhbCcsIG1pbldpZHRoOiAnOTAlJ319PlxuXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG5cbiAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuXG4gICAgaXNPcGVuOiBib29sZWFuO1xuICAgIHRvZ2dsZT86ICgpID0+IHZvaWQ7XG5cbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG5cbn1cbiJdfQ==