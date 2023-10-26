"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const reactstrap_1 = require("reactstrap");
const Logger_1 = require("../../logger/Logger");
const electron_1 = require("electron");
const AppRuntime_1 = require("../../AppRuntime");
const log = Logger_1.Logger.create();
class ExportButton extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.doExport = this.doExport.bind(this);
    }
    render() {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(reactstrap_1.UncontrolledDropdown, { direction: "down", hidden: AppRuntime_1.AppRuntime.isBrowser(), size: "sm" },
                react_1.default.createElement(reactstrap_1.DropdownToggle, { color: "primary", caret: true, style: { fontSize: '14px' } },
                    react_1.default.createElement("i", { className: "fas fa-file-export", style: { marginRight: '5px' } }),
                    "Export"),
                react_1.default.createElement(reactstrap_1.DropdownMenu, null,
                    react_1.default.createElement(reactstrap_1.DropdownItem, { size: "sm", onClick: () => this.doExport('markdown') }, "Markdown"),
                    react_1.default.createElement(reactstrap_1.DropdownItem, { size: "sm", onClick: () => this.doExport('json') }, "JSON")))));
    }
    toExtension(format) {
        switch (format) {
            case 'markdown':
                return 'md';
            case 'html':
                return 'html';
            case 'json':
                return 'json';
        }
    }
    doExport(format) {
        const ext = this.toExtension(format);
        const opts = {
            title: "Export to " + format,
            filters: [
                { extensions: [ext], name: format }
            ]
        };
        electron_1.remote.dialog.showSaveDialog(opts, (path) => {
            if (path && this.props.onExport) {
                this.props.onExport(path, format);
            }
        });
    }
}
exports.ExportButton = ExportButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhwb3J0QnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRXhwb3J0QnV0dG9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtEQUEwQjtBQUMxQiwyQ0FBNEY7QUFDNUYsZ0RBQTJDO0FBRTNDLHVDQUFnQztBQUNoQyxpREFBNEM7QUFFNUMsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsWUFBYSxTQUFRLGVBQUssQ0FBQyxTQUF5QjtJQUU3RCxZQUFZLEtBQWE7UUFDckIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUU3QyxDQUFDO0lBRU0sTUFBTTtRQUVULE9BQU8sQ0FDSDtZQUVJLDhCQUFDLGlDQUFvQixJQUFDLFNBQVMsRUFBQyxNQUFNLEVBQ2hCLE1BQU0sRUFBRSx1QkFBVSxDQUFDLFNBQVMsRUFBRSxFQUM5QixJQUFJLEVBQUMsSUFBSTtnQkFFM0IsOEJBQUMsMkJBQWMsSUFBQyxLQUFLLEVBQUMsU0FBUyxFQUFDLEtBQUssUUFBQyxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsTUFBTSxFQUFDO29CQUUzRCxxQ0FBRyxTQUFTLEVBQUMsb0JBQW9CLEVBQUMsS0FBSyxFQUFFLEVBQUMsV0FBVyxFQUFFLEtBQUssRUFBQyxHQUFNOzZCQUd0RDtnQkFFakIsOEJBQUMseUJBQVk7b0JBQ1QsOEJBQUMseUJBQVksSUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxlQUF5QjtvQkFFekYsOEJBQUMseUJBQVksSUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxXQUFxQixDQUN0RSxDQUNJLENBRXJCLENBRVQsQ0FBQztJQUVOLENBQUM7SUFFTyxXQUFXLENBQUMsTUFBb0I7UUFFcEMsUUFBUSxNQUFNLEVBQUU7WUFDWixLQUFLLFVBQVU7Z0JBQ1gsT0FBTyxJQUFJLENBQUM7WUFDaEIsS0FBSyxNQUFNO2dCQUNQLE9BQU8sTUFBTSxDQUFDO1lBQ2xCLEtBQUssTUFBTTtnQkFDUCxPQUFPLE1BQU0sQ0FBQztTQUNyQjtJQUVMLENBQUM7SUFFTyxRQUFRLENBQUMsTUFBb0I7UUFFakMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVyQyxNQUFNLElBQUksR0FBK0I7WUFFckMsS0FBSyxFQUFFLFlBQVksR0FBRyxNQUFNO1lBQzVCLE9BQU8sRUFBRTtnQkFDTCxFQUFDLFVBQVUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUM7YUFDcEM7U0FFSixDQUFDO1FBRUYsaUJBQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLElBQVksRUFBRSxFQUFFO1lBRWhELElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO2dCQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDckM7UUFFTCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7Q0FFSjtBQTFFRCxvQ0EwRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtEcm9wZG93bkl0ZW0sIERyb3Bkb3duTWVudSwgRHJvcGRvd25Ub2dnbGUsIFVuY29udHJvbGxlZERyb3Bkb3dufSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7RXhwb3J0Rm9ybWF0fSBmcm9tICcuLi8uLi9tZXRhZGF0YS9leHBvcnRlci9FeHBvcnRlcnMnO1xuaW1wb3J0IHtyZW1vdGV9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCB7QXBwUnVudGltZX0gZnJvbSAnLi4vLi4vQXBwUnVudGltZSc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIEV4cG9ydEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5kb0V4cG9ydCA9IHRoaXMuZG9FeHBvcnQuYmluZCh0aGlzKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICA8VW5jb250cm9sbGVkRHJvcGRvd24gZGlyZWN0aW9uPVwiZG93blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlbj17QXBwUnVudGltZS5pc0Jyb3dzZXIoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duVG9nZ2xlIGNvbG9yPVwicHJpbWFyeVwiIGNhcmV0IHN0eWxlPXt7Zm9udFNpemU6ICcxNHB4J319PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZmlsZS1leHBvcnRcIiBzdHlsZT17e21hcmdpblJpZ2h0OiAnNXB4J319PjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEV4cG9ydFxuXG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25Ub2dnbGU+XG5cbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gc2l6ZT1cInNtXCIgb25DbGljaz17KCkgPT4gdGhpcy5kb0V4cG9ydCgnbWFya2Rvd24nKX0+TWFya2Rvd248L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxEcm9wZG93bkl0ZW0gc2l6ZT1cInNtXCIgb25DbGljaz17KCkgPT4gdGhpcy5kb0V4cG9ydCgnaHRtbCcpfT5IVE1MPC9Ecm9wZG93bkl0ZW0+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIHNpemU9XCJzbVwiIG9uQ2xpY2s9eygpID0+IHRoaXMuZG9FeHBvcnQoJ2pzb24nKX0+SlNPTjwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cbiAgICAgICAgICAgICAgICA8L1VuY29udHJvbGxlZERyb3Bkb3duPlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0b0V4dGVuc2lvbihmb3JtYXQ6IEV4cG9ydEZvcm1hdCkge1xuXG4gICAgICAgIHN3aXRjaCAoZm9ybWF0KSB7XG4gICAgICAgICAgICBjYXNlICdtYXJrZG93bic6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdtZCc7XG4gICAgICAgICAgICBjYXNlICdodG1sJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2h0bWwnO1xuICAgICAgICAgICAgY2FzZSAnanNvbic6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdqc29uJztcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkb0V4cG9ydChmb3JtYXQ6IEV4cG9ydEZvcm1hdCkge1xuXG4gICAgICAgIGNvbnN0IGV4dCA9IHRoaXMudG9FeHRlbnNpb24oZm9ybWF0KTtcblxuICAgICAgICBjb25zdCBvcHRzOiBFbGVjdHJvbi5TYXZlRGlhbG9nT3B0aW9ucyA9IHtcblxuICAgICAgICAgICAgdGl0bGU6IFwiRXhwb3J0IHRvIFwiICsgZm9ybWF0LFxuICAgICAgICAgICAgZmlsdGVyczogW1xuICAgICAgICAgICAgICAgIHtleHRlbnNpb25zOiBbZXh0XSwgbmFtZTogZm9ybWF0fVxuICAgICAgICAgICAgXVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgcmVtb3RlLmRpYWxvZy5zaG93U2F2ZURpYWxvZyhvcHRzLCAocGF0aDogc3RyaW5nKSA9PiB7XG5cbiAgICAgICAgICAgIGlmIChwYXRoICYmIHRoaXMucHJvcHMub25FeHBvcnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uRXhwb3J0KHBhdGgsIGZvcm1hdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgb25FeHBvcnQ/OiAocGF0aDogc3RyaW5nLCBmb3JtYXQ6IEV4cG9ydEZvcm1hdCkgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG59XG5cbiJdfQ==