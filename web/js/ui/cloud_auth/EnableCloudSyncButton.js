"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const reactstrap_1 = require("reactstrap");
const Logger_1 = require("../../logger/Logger");
const SimpleTooltip_1 = require("../tooltip/SimpleTooltip");
const log = Logger_1.Logger.create();
class EnableCloudSyncButton extends react_1.default.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(reactstrap_1.Button, { id: "enable-cloud-sync", color: "primary", size: "sm", onClick: () => this.props.onClick() },
                react_1.default.createElement("i", { className: "fas fa-cloud-upload-alt", style: { marginRight: '5px' } }),
                "Enable Cloud Sync"),
            react_1.default.createElement(SimpleTooltip_1.SimpleTooltip, { target: "enable-cloud-sync" }, "Cloud sync enables synchronizing your repository across multiple computers.  Files are distributed in real time and always up to date.")));
    }
}
exports.EnableCloudSyncButton = EnableCloudSyncButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW5hYmxlQ2xvdWRTeW5jQnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRW5hYmxlQ2xvdWRTeW5jQnV0dG9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLGtEQUEwQjtBQUMxQiwyQ0FBMEg7QUFNMUgsZ0RBQTJDO0FBUTNDLDREQUF1RDtBQUd2RCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSxxQkFBc0IsU0FBUSxlQUFLLENBQUMsYUFBNkI7SUFFMUUsWUFBWSxLQUFhO1FBQ3JCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVqQixDQUFDO0lBRU0sTUFBTTtRQUVMLE9BQU8sQ0FDSDtZQUVJLDhCQUFDLG1CQUFNLElBQUMsRUFBRSxFQUFDLG1CQUFtQixFQUN0QixLQUFLLEVBQUMsU0FBUyxFQUNmLElBQUksRUFBQyxJQUFJLEVBQ1QsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO2dCQUV2QyxxQ0FBRyxTQUFTLEVBQUMseUJBQXlCLEVBQUMsS0FBSyxFQUFFLEVBQUMsV0FBVyxFQUFFLEtBQUssRUFBQyxHQUFNO29DQUluRTtZQUVULDhCQUFDLDZCQUFhLElBQUMsTUFBTSxFQUFDLG1CQUFtQiw2SUFJekIsQ0FFZCxDQUNULENBQUM7SUFFVixDQUFDO0NBRUo7QUFsQ0Qsc0RBa0NDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IHJlYWN0L25vLW11bHRpLWNvbXA6IDAsIHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0J1dHRvbiwgUG9wb3ZlciwgUG9wb3ZlckJvZHksIFVuY29udHJvbGxlZERyb3Bkb3duLCBEcm9wZG93blRvZ2dsZSwgRHJvcGRvd25NZW51LCBEcm9wZG93bkl0ZW19IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IFBvcHBlciBmcm9tICdwb3BwZXIuanMnO1xuaW1wb3J0IHtDbG91ZExvZ2luTW9kYWx9IGZyb20gJy4vQ2xvdWRMb2dpbk1vZGFsJztcbmltcG9ydCB7RmlyZWJhc2V9IGZyb20gJy4uLy4uL2ZpcmViYXNlL0ZpcmViYXNlJztcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJy4uLy4uL2ZpcmViYXNlL2xpYi9maXJlYmFzZSc7XG5pbXBvcnQge0ZpcmViYXNlVUlBdXRofSBmcm9tICcuLi8uLi9maXJlYmFzZS9GaXJlYmFzZVVJQXV0aCc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vLi4vbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyfSBmcm9tICcuLi8uLi9kYXRhc3RvcmUvUGVyc2lzdGVuY2VMYXllck1hbmFnZXInO1xuaW1wb3J0IHtDbG91ZFN5bmNPdmVydmlld01vZGFsfSBmcm9tICcuL0Nsb3VkU3luY092ZXJ2aWV3TW9kYWwnO1xuaW1wb3J0IHtDbG91ZFN5bmNDb25maWd1cmVkTW9kYWx9IGZyb20gJy4vQ2xvdWRTeW5jQ29uZmlndXJlZE1vZGFsJztcbmltcG9ydCB7UmVuZGVyZXJBbmFseXRpY3N9IGZyb20gJy4uLy4uL2dhL1JlbmRlcmVyQW5hbHl0aWNzJztcbmltcG9ydCB7TmF2fSBmcm9tICcuLi91dGlsL05hdic7XG5pbXBvcnQge0ludml0ZVVzZXJzTW9kYWx9IGZyb20gJy4vSW52aXRlVXNlcnNNb2RhbCc7XG5pbXBvcnQge0ludml0YXRpb25zfSBmcm9tICcuLi8uLi9kYXRhc3RvcmUvSW52aXRhdGlvbnMnO1xuaW1wb3J0IHtTaW1wbGVUb29sdGlwfSBmcm9tICcuLi90b29sdGlwL1NpbXBsZVRvb2x0aXAnO1xuaW1wb3J0IHtVUkxzfSBmcm9tICcuLi8uLi91dGlsL1VSTHMnO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBFbmFibGVDbG91ZFN5bmNCdXR0b24gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGlkPVwiZW5hYmxlLWNsb3VkLXN5bmNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uQ2xpY2soKX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jbG91ZC11cGxvYWQtYWx0XCIgc3R5bGU9e3ttYXJnaW5SaWdodDogJzVweCd9fT48L2k+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEVuYWJsZSBDbG91ZCBTeW5jXG5cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgPFNpbXBsZVRvb2x0aXAgdGFyZ2V0PVwiZW5hYmxlLWNsb3VkLXN5bmNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIENsb3VkIHN5bmMgZW5hYmxlcyBzeW5jaHJvbml6aW5nIHlvdXIgcmVwb3NpdG9yeSBhY3Jvc3NcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlIGNvbXB1dGVycy4gIEZpbGVzIGFyZSBkaXN0cmlidXRlZCBpbiByZWFsIHRpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBhbHdheXMgdXAgdG8gZGF0ZS5cbiAgICAgICAgICAgICAgICAgICAgPC9TaW1wbGVUb29sdGlwPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuXG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IG9uQ2xpY2s6ICgpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuIl19