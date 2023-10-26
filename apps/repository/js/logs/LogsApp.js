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
const Logger_1 = require("../../../../web/js/logger/Logger");
const LogsContent_1 = __importDefault(require("./LogsContent"));
const CopyLogsToClipboardButton_1 = __importDefault(require("./CopyLogsToClipboardButton"));
const ClearLogsButton_1 = __importDefault(require("./ClearLogsButton"));
const FixedNav_1 = require("../FixedNav");
const RepoHeader_1 = require("../repo_header/RepoHeader");
const log = Logger_1.Logger.create();
class LogsApp extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    render() {
        return (React.createElement(FixedNav_1.FixedNav, { id: "doc-repository" },
            React.createElement("header", null,
                React.createElement(RepoHeader_1.RepoHeader, { persistenceLayerManager: this.props.persistenceLayerManager }),
                React.createElement("div", { style: { display: 'flex' } },
                    React.createElement("div", { className: "mb-1" },
                        React.createElement(CopyLogsToClipboardButton_1.default, null)),
                    React.createElement("div", { className: "ml-1 mb-1" },
                        React.createElement(ClearLogsButton_1.default, null)))),
            React.createElement(FixedNav_1.FixedNavBody, { className: "container-fluid" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-lg-12" },
                        React.createElement("div", { className: "mb-2 pl-1 pr-1" },
                            React.createElement(LogsContent_1.default, null)))))));
    }
}
exports.default = LogsApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nc0FwcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkxvZ3NBcHAudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiw2REFBd0Q7QUFFeEQsZ0VBQXdDO0FBQ3hDLDRGQUFvRTtBQUNwRSx3RUFBZ0Q7QUFDaEQsMENBQW1EO0FBQ25ELDBEQUFxRDtBQUdyRCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBcUIsT0FBUSxTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUVoRSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUNaLENBQUM7SUFFTixDQUFDO0lBRU0sTUFBTTtRQUVULE9BQU8sQ0FFSCxvQkFBQyxtQkFBUSxJQUFDLEVBQUUsRUFBQyxnQkFBZ0I7WUFFekI7Z0JBRUksb0JBQUMsdUJBQVUsSUFBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLHVCQUF1QixHQUFHO2dCQUUxRSw2QkFBSyxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFDO29CQUV6Qiw2QkFBSyxTQUFTLEVBQUMsTUFBTTt3QkFDakIsb0JBQUMsbUNBQXlCLE9BQUUsQ0FDMUI7b0JBRU4sNkJBQUssU0FBUyxFQUFDLFdBQVc7d0JBQ3RCLG9CQUFDLHlCQUFlLE9BQUUsQ0FDaEIsQ0FFSixDQUVEO1lBRVQsb0JBQUMsdUJBQVksSUFBQyxTQUFTLEVBQUMsaUJBQWlCO2dCQUVyQyw2QkFBSyxTQUFTLEVBQUMsS0FBSztvQkFFaEIsNkJBQUssU0FBUyxFQUFDLFdBQVc7d0JBRXRCLDZCQUFLLFNBQVMsRUFBQyxnQkFBZ0I7NEJBQzNCLG9CQUFDLHFCQUFXLE9BQUUsQ0FDWixDQUVKLENBRUosQ0FFSyxDQUVSLENBRWQsQ0FBQztJQUNOLENBQUM7Q0FFSjtBQXZERCwwQkF1REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtSZXBvU2lkZWJhcn0gZnJvbSAnLi4vUmVwb1NpZGViYXInO1xuaW1wb3J0IExvZ3NDb250ZW50IGZyb20gJy4vTG9nc0NvbnRlbnQnO1xuaW1wb3J0IENvcHlMb2dzVG9DbGlwYm9hcmRCdXR0b24gZnJvbSAnLi9Db3B5TG9nc1RvQ2xpcGJvYXJkQnV0dG9uJztcbmltcG9ydCBDbGVhckxvZ3NCdXR0b24gZnJvbSAnLi9DbGVhckxvZ3NCdXR0b24nO1xuaW1wb3J0IHtGaXhlZE5hdiwgRml4ZWROYXZCb2R5fSBmcm9tICcuLi9GaXhlZE5hdic7XG5pbXBvcnQge1JlcG9IZWFkZXJ9IGZyb20gJy4uL3JlcG9faGVhZGVyL1JlcG9IZWFkZXInO1xuaW1wb3J0IHtQZXJzaXN0ZW5jZUxheWVyTWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL2RhdGFzdG9yZS9QZXJzaXN0ZW5jZUxheWVyTWFuYWdlcic7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nc0FwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8Rml4ZWROYXYgaWQ9XCJkb2MtcmVwb3NpdG9yeVwiPlxuXG4gICAgICAgICAgICAgICAgPGhlYWRlcj5cblxuICAgICAgICAgICAgICAgICAgICA8UmVwb0hlYWRlciBwZXJzaXN0ZW5jZUxheWVyTWFuYWdlcj17dGhpcy5wcm9wcy5wZXJzaXN0ZW5jZUxheWVyTWFuYWdlcn0vPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCd9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvcHlMb2dzVG9DbGlwYm9hcmRCdXR0b24vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtMSBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsZWFyTG9nc0J1dHRvbi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgICAgICAgICAgPEZpeGVkTmF2Qm9keSBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yIHBsLTEgcHItMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9nc0NvbnRlbnQvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvRml4ZWROYXZCb2R5PlxuXG4gICAgICAgICAgICA8L0ZpeGVkTmF2PlxuXG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSBwZXJzaXN0ZW5jZUxheWVyTWFuYWdlcjogUGVyc2lzdGVuY2VMYXllck1hbmFnZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlIHtcblxufVxuIl19