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
const Creatable_1 = __importDefault(require("react-select/lib/Creatable"));
const reactstrap_1 = require("reactstrap");
const Blackout_1 = require("../../../../web/js/ui/blackout/Blackout");
const TagSelectOptions_1 = require("../TagSelectOptions");
class TagButton extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.toggle = this.toggle.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            popoverOpen: false,
        };
        this.id = this.props.id || 'tag-button-' + Math.floor(Math.random() * 10000);
    }
    render() {
        const options = this.props.tagsDBProvider().tags().map(current => {
            return {
                value: current.id,
                label: current.label
            };
        });
        return (React.createElement("div", null,
            React.createElement(reactstrap_1.Button, { color: "light", id: this.id, size: "sm", disabled: this.props.disabled, onClick: this.toggle, className: "border" },
                React.createElement("i", { className: "fa fa-tag doc-button doc-button-selectable" })),
            React.createElement(reactstrap_1.Popover, { placement: "bottom", isOpen: this.state.popoverOpen, target: this.id, toggle: this.toggle, trigger: "legacy", className: "tag-input-popover" },
                React.createElement(reactstrap_1.PopoverBody, null,
                    React.createElement(Creatable_1.default, { isMulti: true, isClearable: true, autoFocus: true, onKeyDown: event => this.onKeyDown(event), classNamePrefix: "select", onChange: this.handleChange, options: options })))));
    }
    onKeyDown(event) {
        if (event.key === "Escape") {
            this.toggle();
        }
        if (event.getModifierState("Control") && event.key === "Enter") {
            this.toggle();
        }
    }
    toggle() {
        const popoverOpen = !this.state.popoverOpen;
        if (popoverOpen) {
            this.selectedTags = undefined;
            Blackout_1.Blackout.enable();
        }
        else {
            Blackout_1.Blackout.disable();
            if (this.props.onSelectedTags && this.selectedTags) {
                this.props.onSelectedTags(this.selectedTags);
            }
        }
        this.setState(Object.assign({}, this.state, { popoverOpen }));
    }
    handleChange(selectedOptions) {
        const tagSelectOptions = selectedOptions;
        if (!tagSelectOptions || tagSelectOptions.length === 0) {
            this.selectedTags = undefined;
        }
        else {
            this.selectedTags = TagSelectOptions_1.TagSelectOptions.toTags(selectedOptions);
        }
    }
}
exports.TagButton = TagButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFnQnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVGFnQnV0dG9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsMkVBQXlEO0FBQ3pELDJDQUF3RDtBQUN4RCxzRUFBaUU7QUFHakUsMERBQXFEO0FBS3JELE1BQWEsU0FBVSxTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQU0xRCxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFakQsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULFdBQVcsRUFBRSxLQUFLO1NBQ3JCLENBQUM7UUFFRixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUVqRixDQUFDO0lBRU0sTUFBTTtRQUVULE1BQU0sT0FBTyxHQUNULElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFFLE9BQU8sQ0FBQyxFQUFFO1lBQzlDLE9BQU87Z0JBQ0gsS0FBSyxFQUFFLE9BQU8sQ0FBQyxFQUFFO2dCQUNqQixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7YUFDdkIsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO1FBRVAsT0FBTyxDQUVIO1lBRUksb0JBQUMsbUJBQU0sSUFBQyxLQUFLLEVBQUMsT0FBTyxFQUNiLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUNYLElBQUksRUFBQyxJQUFJLEVBQ1QsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUM3QixPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFDcEIsU0FBUyxFQUFDLFFBQVE7Z0JBRXRCLDJCQUFHLFNBQVMsRUFBQyw0Q0FBNEMsR0FBRSxDQUV0RDtZQUVULG9CQUFDLG9CQUFPLElBQUMsU0FBUyxFQUFDLFFBQVEsRUFDbEIsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUM5QixNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFDbkIsT0FBTyxFQUFDLFFBQVEsRUFDaEIsU0FBUyxFQUFDLG1CQUFtQjtnQkFFbEMsb0JBQUMsd0JBQVc7b0JBQ1Isb0JBQUMsbUJBQWUsSUFDWixPQUFPLFFBQ1AsV0FBVyxRQUNYLFNBQVMsUUFDVCxTQUFTLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUN6QyxlQUFlLEVBQUMsUUFBUSxFQUN4QixRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFDM0IsT0FBTyxFQUFFLE9BQU8sR0FDbEIsQ0FFUSxDQUVSLENBRVIsQ0FFVCxDQUFDO0lBRU4sQ0FBQztJQUVPLFNBQVMsQ0FBQyxLQUF1QztRQUVyRCxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssUUFBUSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNqQjtRQUVELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssT0FBTyxFQUFFO1lBQzVELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNqQjtJQUVMLENBQUM7SUFFTyxNQUFNO1FBRVYsTUFBTSxXQUFXLEdBQUcsQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUU3QyxJQUFJLFdBQVcsRUFBRTtZQUViLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1lBRTlCLG1CQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7U0FFckI7YUFBTTtZQUVILG1CQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFbkIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNoRCxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDaEQ7U0FFSjtRQUVELElBQUksQ0FBQyxRQUFRLG1CQUFLLElBQUksQ0FBQyxLQUFLLElBQUUsV0FBVyxJQUFFLENBQUM7SUFFaEQsQ0FBQztJQUVPLFlBQVksQ0FBQyxlQUFvQjtRQUlyQyxNQUFNLGdCQUFnQixHQUFzQixlQUFlLENBQUM7UUFFNUQsSUFBSSxDQUFFLGdCQUFnQixJQUFJLGdCQUFnQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDckQsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7U0FDakM7YUFBTTtZQUNILElBQUksQ0FBQyxZQUFZLEdBQUcsbUNBQWdCLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ2hFO0lBRUwsQ0FBQztDQUVKO0FBNUhELDhCQTRIQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDcmVhdGFibGVTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0L2xpYi9DcmVhdGFibGUnO1xuaW1wb3J0IHtCdXR0b24sIFBvcG92ZXIsIFBvcG92ZXJCb2R5fSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB7QmxhY2tvdXR9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy91aS9ibGFja291dC9CbGFja291dCc7XG5pbXBvcnQge1RhZ1NlbGVjdE9wdGlvbn0gZnJvbSAnLi4vVGFnU2VsZWN0T3B0aW9uJztcbmltcG9ydCB7VGFnc0RCfSBmcm9tICcuLi9UYWdzREInO1xuaW1wb3J0IHtUYWdTZWxlY3RPcHRpb25zfSBmcm9tICcuLi9UYWdTZWxlY3RPcHRpb25zJztcbmltcG9ydCB7VGFnfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvdGFncy9UYWcnO1xuXG4vLyBpbXBvcnQge1N5bnRoZXRpY0tleWJvYXJkRXZlbnR9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmV4cG9ydCBjbGFzcyBUYWdCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIHByaXZhdGUgaWQ6IHN0cmluZztcblxuICAgIHByaXZhdGUgc2VsZWN0ZWRUYWdzPzogVGFnW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMudG9nZ2xlID0gdGhpcy50b2dnbGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbktleURvd24gPSB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHBvcG92ZXJPcGVuOiBmYWxzZSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmlkID0gdGhpcy5wcm9wcy5pZCB8fCAndGFnLWJ1dHRvbi0nICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDApO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCBvcHRpb25zOiBUYWdTZWxlY3RPcHRpb25bXSA9XG4gICAgICAgICAgICB0aGlzLnByb3BzLnRhZ3NEQlByb3ZpZGVyKCkudGFncygpLm1hcCggY3VycmVudCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGN1cnJlbnQuaWQsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBjdXJyZW50LmxhYmVsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3RoaXMuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlclwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRhZyBkb2MtYnV0dG9uIGRvYy1idXR0b24tc2VsZWN0YWJsZVwiLz5cblxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPFBvcG92ZXIgcGxhY2VtZW50PVwiYm90dG9tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBpc09wZW49e3RoaXMuc3RhdGUucG9wb3Zlck9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PXt0aGlzLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZT17dGhpcy50b2dnbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj1cImxlZ2FjeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFnLWlucHV0LXBvcG92ZXJcIj5cblxuICAgICAgICAgICAgICAgICAgICA8UG9wb3ZlckJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q3JlYXRhYmxlU2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNNdWx0aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQ2xlYXJhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXtldmVudCA9PiB0aGlzLm9uS2V5RG93bihldmVudCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lUHJlZml4PVwic2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyQm9keT5cblxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25LZXlEb3duKGV2ZW50OiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxFbGVtZW50Pikge1xuXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQuZ2V0TW9kaWZpZXJTdGF0ZShcIkNvbnRyb2xcIikgJiYgZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgdG9nZ2xlKCkge1xuXG4gICAgICAgIGNvbnN0IHBvcG92ZXJPcGVuID0gISB0aGlzLnN0YXRlLnBvcG92ZXJPcGVuO1xuXG4gICAgICAgIGlmIChwb3BvdmVyT3Blbikge1xuXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVGFncyA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgQmxhY2tvdXQuZW5hYmxlKCk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgQmxhY2tvdXQuZGlzYWJsZSgpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdGVkVGFncyAmJiB0aGlzLnNlbGVjdGVkVGFncykge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25TZWxlY3RlZFRhZ3ModGhpcy5zZWxlY3RlZFRhZ3MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsuLi50aGlzLnN0YXRlLCBwb3BvdmVyT3Blbn0pO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVDaGFuZ2Uoc2VsZWN0ZWRPcHRpb25zOiBhbnkpIHtcblxuICAgICAgICAvLyBhcyBzbyBhcyB3ZSBoYW5kbGUgdGhlIGNoYW5nZSB3ZSB0b2dnbGUgb2ZmXG5cbiAgICAgICAgY29uc3QgdGFnU2VsZWN0T3B0aW9uczogVGFnU2VsZWN0T3B0aW9uW10gPSBzZWxlY3RlZE9wdGlvbnM7XG5cbiAgICAgICAgaWYgKCEgdGFnU2VsZWN0T3B0aW9ucyB8fCB0YWdTZWxlY3RPcHRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFRhZ3MgPSB1bmRlZmluZWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVGFncyA9IFRhZ1NlbGVjdE9wdGlvbnMudG9UYWdzKHNlbGVjdGVkT3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcblxuICAgIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xuXG4gICAgcmVhZG9ubHkgZGlzYWJsZWQ/OiBib29sZWFuO1xuXG4gICAgcmVhZG9ubHkgaGlkZGVuPzogYm9vbGVhbjtcblxuICAgIHJlYWRvbmx5IHRhZ3NEQlByb3ZpZGVyOiAoKSA9PiBUYWdzREI7XG5cbiAgICByZWFkb25seSBvblNlbGVjdGVkVGFncz86ICh0YWdzOiBUYWdbXSkgPT4gdm9pZDtcblxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgICByZWFkb25seSBwb3BvdmVyT3BlbjogYm9vbGVhbjtcbn1cbiJdfQ==