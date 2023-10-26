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
const MemoryLogger_1 = require("../../../../web/js/logger/MemoryLogger");
const Toaster_1 = require("../../../../web/js/ui/toaster/Toaster");
const Clipboards_1 = require("../../../../web/js/util/system/clipboard/Clipboards");
const Button_1 = __importDefault(require("reactstrap/lib/Button"));
const log = Logger_1.Logger.create();
class Styles {
}
class CopyLogsToClipboardButton extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(Button_1.default, { size: "sm", onClick: () => this.onClick() }, "Copy to Clipboard"));
    }
    onClick() {
        const messages = MemoryLogger_1.MemoryLogger.toView();
        const text = messages.map(current => {
            if (current.args && current.args.length > 0) {
                const args = JSON.stringify(current.args);
                return `${current.timestamp}: ${current.msg}: ${args}`;
            }
            else {
                return `${current.timestamp}: ${current.msg}`;
            }
        }).join("\n");
        Clipboards_1.Clipboards.getInstance().writeText(text);
        Toaster_1.Toaster.success("Wrote log output to clipboard.");
    }
}
exports.default = CopyLogsToClipboardButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29weUxvZ3NUb0NsaXBib2FyZEJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvcHlMb2dzVG9DbGlwYm9hcmRCdXR0b24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiw2REFBd0Q7QUFDeEQseUVBQW9FO0FBQ3BFLG1FQUE4RDtBQUM5RCxvRkFBK0U7QUFDL0UsbUVBQTJDO0FBRTNDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFNLE1BQU07Q0FFWDtBQUVELE1BQXFCLHlCQUEwQixTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUVsRixZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFHMUIsQ0FBQztJQUVNLE1BQU07UUFFVCxPQUFPLENBQ0gsb0JBQUMsZ0JBQU0sSUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLHdCQUV0QyxDQUNaLENBQUM7SUFFTixDQUFDO0lBRU8sT0FBTztRQUVYLE1BQU0sUUFBUSxHQUFHLDJCQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFdkMsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUVoQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN6QyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDMUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEtBQUssT0FBTyxDQUFDLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQzthQUMxRDtpQkFBTTtnQkFDSCxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsS0FBSyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDakQ7UUFFTCxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFZCx1QkFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV6QyxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBRXRELENBQUM7Q0FFSjtBQXZDRCw0Q0F1Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtNZW1vcnlMb2dnZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy9sb2dnZXIvTWVtb3J5TG9nZ2VyJztcbmltcG9ydCB7VG9hc3Rlcn0gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL3VpL3RvYXN0ZXIvVG9hc3Rlcic7XG5pbXBvcnQge0NsaXBib2FyZHN9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy91dGlsL3N5c3RlbS9jbGlwYm9hcmQvQ2xpcGJvYXJkcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0c3RyYXAvbGliL0J1dHRvbic7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuY2xhc3MgU3R5bGVzIHtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3B5TG9nc1RvQ2xpcGJvYXJkQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbVwiIG9uQ2xpY2s9eygpID0+IHRoaXMub25DbGljaygpfT5cbiAgICAgICAgICAgICAgICBDb3B5IHRvIENsaXBib2FyZFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ2xpY2soKSB7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZXMgPSBNZW1vcnlMb2dnZXIudG9WaWV3KCk7XG5cbiAgICAgICAgY29uc3QgdGV4dCA9IG1lc3NhZ2VzLm1hcChjdXJyZW50ID0+IHtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnQuYXJncyAmJiBjdXJyZW50LmFyZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSBKU09OLnN0cmluZ2lmeShjdXJyZW50LmFyZ3MpO1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHtjdXJyZW50LnRpbWVzdGFtcH06ICR7Y3VycmVudC5tc2d9OiAke2FyZ3N9YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke2N1cnJlbnQudGltZXN0YW1wfTogJHtjdXJyZW50Lm1zZ31gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pLmpvaW4oXCJcXG5cIik7XG5cbiAgICAgICAgQ2xpcGJvYXJkcy5nZXRJbnN0YW5jZSgpLndyaXRlVGV4dCh0ZXh0KTtcblxuICAgICAgICBUb2FzdGVyLnN1Y2Nlc3MoXCJXcm90ZSBsb2cgb3V0cHV0IHRvIGNsaXBib2FyZC5cIik7XG5cbiAgICB9XG5cbn1cblxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzIHtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZSB7XG5cbn1cbiJdfQ==