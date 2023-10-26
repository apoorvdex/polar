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
const react_context_menu_wrapper_1 = require("@burtonator/react-context-menu-wrapper");
const React = __importStar(require("react"));
const react_dropdown_1 = __importDefault(require("@burtonator/react-dropdown"));
const Functions_1 = require("../../util/Functions");
class ContextMenu extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(react_context_menu_wrapper_1.ContextMenuWrapper, { id: this.props.id },
            React.createElement(react_dropdown_1.default, { open: true, onToggle: Functions_1.NULL_FUNCTION, onSelect: Functions_1.NULL_FUNCTION }, this.props.children)));
    }
}
exports.ContextMenu = ContextMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGV4dE1lbnUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDb250ZXh0TWVudS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsdUZBQTBFO0FBQzFFLDZDQUErQjtBQUMvQixnRkFBa0U7QUFDbEUsb0RBQW1EO0FBTW5ELE1BQWEsV0FBWSxTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUU1RCxZQUFZLEtBQWE7UUFDckIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFFTSxNQUFNO1FBRVQsT0FBTyxDQUVILG9CQUFDLCtDQUFrQixJQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFFakMsb0JBQUMsd0JBQVEsSUFBQyxJQUFJLEVBQUUsSUFBSSxFQUNWLFFBQVEsRUFBRSx5QkFBYSxFQUN2QixRQUFRLEVBQUUseUJBQWEsSUFJNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBRWIsQ0FFTSxDQUV4QixDQUFDO0lBRU4sQ0FBQztDQUVKO0FBNUJELGtDQTRCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29udGV4dE1lbnVXcmFwcGVyfSBmcm9tICdAYnVydG9uYXRvci9yZWFjdC1jb250ZXh0LW1lbnUtd3JhcHBlcic7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRHJvcGRvd24sIHtEcm9wZG93bk1lbnV9IGZyb20gXCJAYnVydG9uYXRvci9yZWFjdC1kcm9wZG93blwiO1xuaW1wb3J0IHtOVUxMX0ZVTkNUSU9OfSBmcm9tICcuLi8uLi91dGlsL0Z1bmN0aW9ucyc7XG5cbi8qKlxuICogQmFzaWMgY29udGV4dCBtZW51IHRoYXQgYWxsb3dzIHlvdSB0byBqdXN0IHNwZWNpZnkgdGhlIG1lbnUgaXRlbXMgYXNcbiAqIGNoaWxkcmVuLlxuICovXG5leHBvcnQgY2xhc3MgQ29udGV4dE1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPENvbnRleHRNZW51V3JhcHBlciBpZD17dGhpcy5wcm9wcy5pZH0+XG5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd24gb3Blbj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ub2dnbGU9e05VTExfRlVOQ1RJT059XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXtOVUxMX0ZVTkNUSU9OfT5cblxuICAgICAgICAgICAgICAgICAgICB7LyogZHJvcGRvd24gYW5kIG1lbnUgaXRlbXMgaGVyZSovfVxuXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cblxuICAgICAgICAgICAgPC9Db250ZXh0TWVudVdyYXBwZXI+XG5cbiAgICAgICAgKTtcblxuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSBpZDogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcblxufVxuIl19