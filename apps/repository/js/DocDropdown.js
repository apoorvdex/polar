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
const ConfirmPopover_1 = require("../../../web/js/ui/confirm/ConfirmPopover");
const TextInputPopover_1 = require("../../../web/js/ui/text_input/TextInputPopover");
const Logger_1 = require("../../../web/js/logger/Logger");
const electron_1 = require("electron");
const Directories_1 = require("../../../web/js/datastore/Directories");
const FilePaths_1 = require("../../../web/js/util/FilePaths");
const Toaster_1 = require("../../../web/js/ui/toaster/Toaster");
const Clipboards_1 = require("../../../web/js/util/system/clipboard/Clipboards");
const DropdownItem_1 = __importDefault(require("reactstrap/lib/DropdownItem"));
const DropdownToggle_1 = __importDefault(require("reactstrap/lib/DropdownToggle"));
const Dropdown_1 = __importDefault(require("reactstrap/lib/Dropdown"));
const DropdownMenu_1 = __importDefault(require("reactstrap/lib/DropdownMenu"));
const AppRuntime_1 = require("../../../web/js/AppRuntime");
const log = Logger_1.Logger.create();
const Styles = {
    DropdownMenu: {
        zIndex: 999,
        fontSize: '14px'
    },
};
class DocDropdown extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.open = false;
        this.selected = 'none';
        this.toggle = this.toggle.bind(this);
        this.select = this.select.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onSetTitle = this.onSetTitle.bind(this);
        this.onCopyURL = this.onCopyURL.bind(this);
        this.state = {
            open: this.open,
            selected: this.selected,
        };
    }
    render() {
        return (React.createElement("div", { className: "doc-dropdown-parent" },
            React.createElement(Dropdown_1.default, { id: this.props.id, isOpen: this.state.open, toggle: this.toggle },
                React.createElement(DropdownToggle_1.default, { color: "link", className: "doc-dropdown-button btn text-muted pl-1 pr-1", id: this.props.id + '-dropdown-toggle' },
                    React.createElement("i", { className: "fas fa-ellipsis-h" })),
                React.createElement(DropdownMenu_1.default, { style: Styles.DropdownMenu },
                    React.createElement(DropdownItem_1.default, { onClick: () => this.select('set-title') }, "Set Title"),
                    React.createElement(DropdownItem_1.default, { disabled: !this.props.repoDocInfo.url, onClick: () => this.onCopyURL(this.props.repoDocInfo.url) }, "Copy Original URL"),
                    React.createElement(DropdownItem_1.default, { disabled: !this.props.repoDocInfo.filename, hidden: AppRuntime_1.AppRuntime.isBrowser(), onClick: () => this.onShowFile(this.props.repoDocInfo.filename) }, "Show File"),
                    React.createElement(DropdownItem_1.default, { disabled: !this.props.repoDocInfo.filename, hidden: AppRuntime_1.AppRuntime.isBrowser(), onClick: () => this.onCopyFilePath(this.props.repoDocInfo.filename) }, "Copy File Path"),
                    React.createElement(DropdownItem_1.default, { disabled: !this.props.repoDocInfo.filename, onClick: () => this.onCopyText(this.props.repoDocInfo.fingerprint, "Document ID copied to clipboard") }, "Copy Document ID"),
                    React.createElement(DropdownItem_1.default, { divider: true }),
                    React.createElement(DropdownItem_1.default, { className: "text-danger", onClick: () => this.select('delete') }, "Delete"))),
            React.createElement(TextInputPopover_1.TextInputPopover, { open: this.state.selected === 'set-title', target: this.props.id + '-dropdown-toggle', title: "Enter title for document:", defaultValue: this.props.repoDocInfo.title, onCancel: () => this.select('none'), onComplete: this.onSetTitle }),
            React.createElement(ConfirmPopover_1.ConfirmPopover, { open: this.state.selected === 'delete', target: this.props.id + '-dropdown-toggle', title: "Are you sure you want to delete this document? ", subtitle: "The document and all annotations will be lost.", onCancel: () => this.select('none'), onConfirm: this.onDelete })));
    }
    onShowFile(filename) {
        const directories = new Directories_1.Directories();
        const path = FilePaths_1.FilePaths.join(directories.stashDir, filename);
        electron_1.shell.showItemInFolder(path);
    }
    onCopyFilePath(filename) {
        const directories = new Directories_1.Directories();
        const path = FilePaths_1.FilePaths.join(directories.stashDir, filename);
        this.copyText(path);
        Toaster_1.Toaster.success("File path copied to clipboard!");
    }
    onCopyText(text, message) {
        this.copyText(text);
        Toaster_1.Toaster.success(message);
    }
    onCopyURL(url) {
        this.copyText(url);
        Toaster_1.Toaster.success("URL copied to clipboard!");
    }
    copyText(text) {
        Clipboards_1.Clipboards.getInstance().writeText(text);
    }
    onSetTitle(title) {
        this.select('none');
        this.props.onSetTitle(this.props.repoDocInfo, title);
    }
    onDelete() {
        this.select('none');
        this.props.onDelete(this.props.repoDocInfo);
    }
    toggle() {
        if (this.selected !== 'none') {
            this.open = false;
        }
        else {
            this.open = !this.state.open;
        }
        this.refresh();
    }
    select(selected) {
        this.selected = selected;
        this.refresh();
    }
    refresh() {
        this.setState({
            open: this.open,
            selected: this.selected
        });
    }
}
exports.DocDropdown = DocDropdown;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jRHJvcGRvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJEb2NEcm9wZG93bi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLDhFQUF5RTtBQUN6RSxxRkFBZ0Y7QUFFaEYsMERBQXFEO0FBRXJELHVDQUEwQztBQUMxQyx1RUFBa0U7QUFDbEUsOERBQXlEO0FBQ3pELGdFQUEyRDtBQUMzRCxpRkFBNEU7QUFDNUUsK0VBQXVEO0FBQ3ZELG1GQUEyRDtBQUMzRCx1RUFBK0M7QUFDL0MsK0VBQXVEO0FBQ3ZELDJEQUFzRDtBQUV0RCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBTSxNQUFNLEdBQWM7SUFFdEIsWUFBWSxFQUFFO1FBQ1YsTUFBTSxFQUFFLEdBQUc7UUFDWCxRQUFRLEVBQUUsTUFBTTtLQUNuQjtDQUVKLENBQUM7QUFFRixNQUFhLFdBQVksU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFLNUQsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBSmxCLFNBQUksR0FBWSxLQUFLLENBQUM7UUFDdEIsYUFBUSxHQUFtQixNQUFNLENBQUM7UUFLdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsU0FBUyxH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RCxrQ0FxTEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0NvbmZpcm1Qb3BvdmVyfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvdWkvY29uZmlybS9Db25maXJtUG9wb3Zlcic7XG5pbXBvcnQge1RleHRJbnB1dFBvcG92ZXJ9IGZyb20gJy4uLy4uLy4uL3dlYi9qcy91aS90ZXh0X2lucHV0L1RleHRJbnB1dFBvcG92ZXInO1xuaW1wb3J0IHtSZXBvRG9jSW5mb30gZnJvbSAnLi9SZXBvRG9jSW5mbyc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vLi4vLi4vd2ViL2pzL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtJU3R5bGVNYXB9IGZyb20gJy4uLy4uLy4uL3dlYi9qcy9yZWFjdC9JU3R5bGVNYXAnO1xuaW1wb3J0IHtjbGlwYm9hcmQsIHNoZWxsfSBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQge0RpcmVjdG9yaWVzfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL0RpcmVjdG9yaWVzJztcbmltcG9ydCB7RmlsZVBhdGhzfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvdXRpbC9GaWxlUGF0aHMnO1xuaW1wb3J0IHtUb2FzdGVyfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvdWkvdG9hc3Rlci9Ub2FzdGVyJztcbmltcG9ydCB7Q2xpcGJvYXJkc30gZnJvbSAnLi4vLi4vLi4vd2ViL2pzL3V0aWwvc3lzdGVtL2NsaXBib2FyZC9DbGlwYm9hcmRzJztcbmltcG9ydCBEcm9wZG93bkl0ZW0gZnJvbSAncmVhY3RzdHJhcC9saWIvRHJvcGRvd25JdGVtJztcbmltcG9ydCBEcm9wZG93blRvZ2dsZSBmcm9tICdyZWFjdHN0cmFwL2xpYi9Ecm9wZG93blRvZ2dsZSc7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSAncmVhY3RzdHJhcC9saWIvRHJvcGRvd24nO1xuaW1wb3J0IERyb3Bkb3duTWVudSBmcm9tICdyZWFjdHN0cmFwL2xpYi9Ecm9wZG93bk1lbnUnO1xuaW1wb3J0IHtBcHBSdW50aW1lfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvQXBwUnVudGltZSc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuY29uc3QgU3R5bGVzOiBJU3R5bGVNYXAgPSB7XG5cbiAgICBEcm9wZG93bk1lbnU6IHtcbiAgICAgICAgekluZGV4OiA5OTksXG4gICAgICAgIGZvbnRTaXplOiAnMTRweCdcbiAgICB9LFxuXG59O1xuXG5leHBvcnQgY2xhc3MgRG9jRHJvcGRvd24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIHByaXZhdGUgb3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgc2VsZWN0ZWQ6IFNlbGVjdGVkT3B0aW9uID0gJ25vbmUnO1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLnRvZ2dsZSA9IHRoaXMudG9nZ2xlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2VsZWN0ID0gdGhpcy5zZWxlY3QuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkRlbGV0ZSA9IHRoaXMub25EZWxldGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblNldFRpdGxlID0gdGhpcy5vblNldFRpdGxlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Db3B5VVJMID0gdGhpcy5vbkNvcHlVUkwuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgb3BlbjogdGhpcy5vcGVuLFxuICAgICAgICAgICAgc2VsZWN0ZWQ6IHRoaXMuc2VsZWN0ZWQsXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jLWRyb3Bkb3duLXBhcmVudFwiPlxuXG4gICAgICAgICAgICAgICAgey8qVE9ETzogSSBleHBlcmltZW50ZWQgd2l0aCBicmluZ2luZyB1cCBhIHRvb2x0aXAgYWZ0ZXIgdGhlIHVzZXIqL31cbiAgICAgICAgICAgICAgICB7LypzZWxlY3RzIGFuIGl0ZW0gYnV0IHRoZXJlJ3Mgbm8gd2F5IHRvIGF1dG8taGlkZSBhZnRlciBpdCB3YXMgKi99XG4gICAgICAgICAgICAgICAgey8qc2VsZWN0ZWQgd2l0aCBhIGRpc3BsYXkuICBJIG1pZ2h0IGJlIGFibGUgdG8gaW1wbGVtZW50IG9uZSovfVxuICAgICAgICAgICAgICAgIHsvKnRoYXQgYXV0by1oaWRlcyBpdHNlbGYgd2l0aCBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIGFuZCB0aGVuICovfVxuICAgICAgICAgICAgICAgIHsvKmdpdmUgaXQgYSBtZXNzYWdlIGFuZCB0aGVuIHNob3cgYW5kIHRoZW4gaGlkZSB0aGUgdG9vbHRpcCBhZnRlciAqL31cbiAgICAgICAgICAgICAgICB7Lyp0aGlzIGV2ZW50IGJ1dCB0aGlzIHdpbGwgdGFrZSBhIHdoaWxlLiovfVxuICAgICAgICAgICAgICAgIHsvKjxUb29sdGlwIHBsYWNlbWVudD1cImxlZnRcIiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgIHsvKmlzT3Blbj17dGhpcy5zdGF0ZS5vcGVuICYmIHRoaXMuc3RhdGUubWVzc2FnZSAhPT0gdW5kZWZpbmVkfSovfVxuICAgICAgICAgICAgICAgICAgICAgICAgIHsvKmF1dG9oaWRlPXt0cnVlfSovfVxuICAgICAgICAgICAgICAgICAgICAgICAgIHsvKmhpZGU9ezQwMDB9Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgey8qdGFyZ2V0PXt0aGlzLnByb3BzLmlkfT4qL31cbiAgICAgICAgICAgICAgICAgICAgey8qSGVsbG8gd29ybGQhKi99XG4gICAgICAgICAgICAgICAgey8qPC9Ub29sdGlwPiovfVxuXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duIGlkPXt0aGlzLnByb3BzLmlkfSBpc09wZW49e3RoaXMuc3RhdGUub3Blbn0gdG9nZ2xlPXt0aGlzLnRvZ2dsZX0+XG5cbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duVG9nZ2xlIGNvbG9yPVwibGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkb2MtZHJvcGRvd24tYnV0dG9uIGJ0biB0ZXh0LW11dGVkIHBsLTEgcHItMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17dGhpcy5wcm9wcy5pZCArICctZHJvcGRvd24tdG9nZ2xlJ30+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lbGxpcHNpcy1oXCI+PC9pPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25Ub2dnbGU+XG5cbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudSBzdHlsZT17U3R5bGVzLkRyb3Bkb3duTWVudX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gb25DbGljaz17KCkgPT4gdGhpcy5zZWxlY3QoJ3NldC10aXRsZScpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXQgVGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGRpc2FibGVkPXshIHRoaXMucHJvcHMucmVwb0RvY0luZm8udXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uQ29weVVSTCh0aGlzLnByb3BzLnJlcG9Eb2NJbmZvLnVybCEpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3B5IE9yaWdpbmFsIFVSTFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gZGlzYWJsZWQ9eyEgdGhpcy5wcm9wcy5yZXBvRG9jSW5mby5maWxlbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuPXtBcHBSdW50aW1lLmlzQnJvd3NlcigpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uU2hvd0ZpbGUodGhpcy5wcm9wcy5yZXBvRG9jSW5mby5maWxlbmFtZSEpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaG93IEZpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGRpc2FibGVkPXshIHRoaXMucHJvcHMucmVwb0RvY0luZm8uZmlsZW5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlbj17QXBwUnVudGltZS5pc0Jyb3dzZXIoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5vbkNvcHlGaWxlUGF0aCh0aGlzLnByb3BzLnJlcG9Eb2NJbmZvLmZpbGVuYW1lISl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcHkgRmlsZSBQYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBkaXNhYmxlZD17ISB0aGlzLnByb3BzLnJlcG9Eb2NJbmZvLmZpbGVuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uQ29weVRleHQodGhpcy5wcm9wcy5yZXBvRG9jSW5mby5maW5nZXJwcmludCwgXCJEb2N1bWVudCBJRCBjb3BpZWQgdG8gY2xpcGJvYXJkXCIpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3B5IERvY3VtZW50IElEXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgey8qVE9ETzogbWF5YmUgbG9hZCBvcmlnaW5hbCBVUkwgdG9vPyovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGRpdmlkZXIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiIG9uQ2xpY2s9eygpID0+IHRoaXMuc2VsZWN0KCdkZWxldGUnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cblxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cblxuXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cblxuICAgICAgICAgICAgICAgIDxUZXh0SW5wdXRQb3BvdmVyIG9wZW49e3RoaXMuc3RhdGUuc2VsZWN0ZWQgPT09ICdzZXQtdGl0bGUnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD17dGhpcy5wcm9wcy5pZCArICctZHJvcGRvd24tdG9nZ2xlJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkVudGVyIHRpdGxlIGZvciBkb2N1bWVudDpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5yZXBvRG9jSW5mby50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4gdGhpcy5zZWxlY3QoJ25vbmUnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvbXBsZXRlPXt0aGlzLm9uU2V0VGl0bGV9Lz5cblxuICAgICAgICAgICAgICAgIDxDb25maXJtUG9wb3ZlciBvcGVuPXt0aGlzLnN0YXRlLnNlbGVjdGVkID09PSAnZGVsZXRlJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PXt0aGlzLnByb3BzLmlkICsgJy1kcm9wZG93bi10b2dnbGUnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBkb2N1bWVudD8gXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VidGl0bGU9XCJUaGUgZG9jdW1lbnQgYW5kIGFsbCBhbm5vdGF0aW9ucyB3aWxsIGJlIGxvc3QuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9eygpID0+IHRoaXMuc2VsZWN0KCdub25lJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29uZmlybT17dGhpcy5vbkRlbGV0ZX0vPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25TaG93RmlsZShmaWxlbmFtZTogc3RyaW5nKSB7XG5cbiAgICAgICAgY29uc3QgZGlyZWN0b3JpZXMgPSBuZXcgRGlyZWN0b3JpZXMoKTtcbiAgICAgICAgY29uc3QgcGF0aCA9IEZpbGVQYXRocy5qb2luKGRpcmVjdG9yaWVzLnN0YXNoRGlyLCBmaWxlbmFtZSk7XG4gICAgICAgIHNoZWxsLnNob3dJdGVtSW5Gb2xkZXIocGF0aCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNvcHlGaWxlUGF0aChmaWxlbmFtZTogc3RyaW5nKSB7XG5cbiAgICAgICAgY29uc3QgZGlyZWN0b3JpZXMgPSBuZXcgRGlyZWN0b3JpZXMoKTtcbiAgICAgICAgY29uc3QgcGF0aCA9IEZpbGVQYXRocy5qb2luKGRpcmVjdG9yaWVzLnN0YXNoRGlyLCBmaWxlbmFtZSk7XG5cbiAgICAgICAgdGhpcy5jb3B5VGV4dChwYXRoKTtcbiAgICAgICAgVG9hc3Rlci5zdWNjZXNzKFwiRmlsZSBwYXRoIGNvcGllZCB0byBjbGlwYm9hcmQhXCIpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNvcHlUZXh0KHRleHQ6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuY29weVRleHQodGV4dCk7XG4gICAgICAgIFRvYXN0ZXIuc3VjY2VzcyhtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ29weVVSTCh1cmw6IHN0cmluZykge1xuICAgICAgICB0aGlzLmNvcHlUZXh0KHVybCk7XG4gICAgICAgIFRvYXN0ZXIuc3VjY2VzcyhcIlVSTCBjb3BpZWQgdG8gY2xpcGJvYXJkIVwiKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvcHlUZXh0KHRleHQ6IHN0cmluZykge1xuXG4gICAgICAgIENsaXBib2FyZHMuZ2V0SW5zdGFuY2UoKS53cml0ZVRleHQodGV4dCk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uU2V0VGl0bGUodGl0bGU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnNlbGVjdCgnbm9uZScpO1xuICAgICAgICB0aGlzLnByb3BzLm9uU2V0VGl0bGUodGhpcy5wcm9wcy5yZXBvRG9jSW5mbywgdGl0bGUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25EZWxldGUoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0KCdub25lJyk7XG4gICAgICAgIHRoaXMucHJvcHMub25EZWxldGUodGhpcy5wcm9wcy5yZXBvRG9jSW5mbyk7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIHRvZ2dsZSgpIHtcblxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCAhPT0gJ25vbmUnKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub3BlbiA9ICEgdGhpcy5zdGF0ZS5vcGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHNlbGVjdChzZWxlY3RlZDogU2VsZWN0ZWRPcHRpb24pIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlZnJlc2goKSB7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBvcGVuOiB0aGlzLm9wZW4sXG4gICAgICAgICAgICBzZWxlY3RlZDogdGhpcy5zZWxlY3RlZFxuICAgICAgICB9KTtcblxuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICBpZDogc3RyaW5nO1xuICAgIHJlcG9Eb2NJbmZvOiBSZXBvRG9jSW5mbztcbiAgICBvbkRlbGV0ZTogKHJlcG9Eb2NJbmZvOiBSZXBvRG9jSW5mbykgPT4gdm9pZDtcbiAgICBvblNldFRpdGxlOiAocmVwb0RvY0luZm86IFJlcG9Eb2NJbmZvLCB0aXRsZTogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcblxuICAgIG9wZW46IGJvb2xlYW47XG4gICAgc2VsZWN0ZWQ6IFNlbGVjdGVkT3B0aW9uO1xuICAgIG1lc3NhZ2U/OiBzdHJpbmc7XG5cbn1cblxudHlwZSBTZWxlY3RlZE9wdGlvbiA9ICdzZXQtdGl0bGUnIHwgJ2RlbGV0ZScgfCAnbm9uZSc7XG5cbiJdfQ==