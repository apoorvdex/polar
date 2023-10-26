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
const Logger_1 = require("../../../web/js/logger/Logger");
const log = Logger_1.Logger.create();
class FormattedTags extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const tags = this.props.tags;
        const formatted = Object.values(tags)
            .map(tag => tag.label)
            .sort()
            .join(", ");
        return (React.createElement("div", null, formatted));
    }
}
exports.FormattedTags = FormattedTags;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybWF0dGVkVGFncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkZvcm1hdHRlZFRhZ3MudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwwREFBcUQ7QUFNckQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsYUFBYyxTQUFRLEtBQUssQ0FBQyxTQUFzQjtJQUUzRCxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLE1BQU07UUFFVCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztRQUU3QixNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzthQUNoQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO2FBQ3JCLElBQUksRUFBRTthQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVoQixPQUFPLENBQ0gsaUNBQU0sU0FBUyxDQUFPLENBQ3pCLENBQUM7SUFFTixDQUFDO0NBRUo7QUFyQkQsc0NBcUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uLy4uLy4uL3dlYi9qcy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7aXNQcmVzZW50fSBmcm9tICcuLi8uLi8uLi93ZWIvanMvUHJlY29uZGl0aW9ucyc7XG5pbXBvcnQgTW9tZW50IGZyb20gJ3JlYWN0LW1vbWVudCc7XG5pbXBvcnQge0lTT0RhdGVUaW1lU3RyaW5nfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvbWV0YWRhdGEvSVNPRGF0ZVRpbWVTdHJpbmdzJztcbmltcG9ydCB7VGFnfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvdGFncy9UYWcnO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBGb3JtYXR0ZWRUYWdzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgYW55PiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgdGFncyA9IHRoaXMucHJvcHMudGFncztcblxuICAgICAgICBjb25zdCBmb3JtYXR0ZWQgPSBPYmplY3QudmFsdWVzKHRhZ3MpXG4gICAgICAgICAgICAubWFwKHRhZyA9PiB0YWcubGFiZWwpXG4gICAgICAgICAgICAuc29ydCgpXG4gICAgICAgICAgICAuam9pbihcIiwgXCIpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2Pntmb3JtYXR0ZWR9PC9kaXY+XG4gICAgICAgICk7XG5cbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgdGFnczoge1tpZDogc3RyaW5nXTogVGFnfTtcbn1cbiJdfQ==