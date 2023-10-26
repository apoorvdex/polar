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
const react_select_1 = __importDefault(require("react-select"));
const Blackout_1 = require("../../../web/js/ui/blackout/Blackout");
const TagSelectOptions_1 = require("./TagSelectOptions");
const Button_1 = __importDefault(require("reactstrap/lib/Button"));
const Popover_1 = __importDefault(require("reactstrap/lib/Popover"));
const PopoverBody_1 = __importDefault(require("reactstrap/lib/PopoverBody"));
const Styles = {
    dropdownChevron: {
        display: 'inline-block',
        width: 0,
        height: 0,
        marginLeft: '.255em',
        verticalAlign: '.255em',
        borderTop: '.3em solid',
        borderRight: '.3em solid transparent',
        borderBottom: 0,
        borderLeft: '.3em solid transparent',
        color: 'var(--secondary)'
    }
};
class FilterTagInput extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.toggle = this.toggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            popoverOpen: false,
            defaultValue: []
        };
        this.id = this.props.id || "filter-tag-input";
    }
    render() {
        const options = this.props.tagsDBProvider().tags().map(current => {
            return {
                value: current.id,
                label: current.label
            };
        });
        return (React.createElement("div", null,
            React.createElement(Button_1.default, { color: "light", id: this.id, size: "sm", disabled: this.props.disabled, onClick: () => this.toggle(), className: "header-filter-clickable p-1 pl-2 pr-2 border" },
                React.createElement("i", { className: "fa fa-tag doc-button doc-button-selectable mr-1" }),
                "Tags",
                React.createElement("div", { style: Styles.dropdownChevron })),
            React.createElement(Popover_1.default, { placement: "bottom", isOpen: this.state.popoverOpen, target: this.id, trigger: "legacy", toggle: () => this.toggle(), className: "tag-input-popover" },
                React.createElement(PopoverBody_1.default, { className: "shadow" },
                    React.createElement("div", { className: "pt-1 pb-1" },
                        React.createElement("strong", null, "Filter documents by tag:")),
                    React.createElement(react_select_1.default, { escapeClearsValue: true, isMulti: true, isClearable: true, autoFocus: true, onKeyDown: event => this.onKeyDown(event), className: "filter-tag-input", classNamePrefix: "select", onChange: this.handleChange, defaultValue: this.state.defaultValue, options: options })))));
    }
    onKeyDown(event) {
        if (event.key.toLowerCase() === "escape") {
            this.toggle();
        }
        if (event.getModifierState("Control") && event.key.toLowerCase() === "enter") {
            this.toggle();
        }
    }
    toggle() {
        this.state = Object.assign({}, this.state, { popoverOpen: !this.state.popoverOpen });
        Blackout_1.Blackout.toggle(this.state.popoverOpen);
        this.setState(this.state);
    }
    handleChange(selectedOptions) {
        this.toggle();
        const defaultValue = selectedOptions;
        this.state = Object.assign(this.state, {
            defaultValue
        });
        this.props.filteredTags.set(TagSelectOptions_1.TagSelectOptions.toTags(selectedOptions));
        this.props.refresher();
        this.setState(this.state);
    }
}
exports.FilterTagInput = FilterTagInput;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsdGVyVGFnSW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGaWx0ZXJUYWdJbnB1dC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBRy9CLGdFQUFrQztBQUNsQyxtRUFBOEQ7QUFDOUQseURBQW9EO0FBSXBELG1FQUEyQztBQUMzQyxxRUFBNkM7QUFDN0MsNkVBQXFEO0FBR3JELE1BQU0sTUFBTSxHQUFjO0lBRXRCLGVBQWUsRUFBRTtRQUViLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLEtBQUssRUFBRSxDQUFDO1FBQ1IsTUFBTSxFQUFFLENBQUM7UUFDVCxVQUFVLEVBQUUsUUFBUTtRQUNwQixhQUFhLEVBQUUsUUFBUTtRQUN2QixTQUFTLEVBQUUsWUFBWTtRQUN2QixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFlBQVksRUFBRSxDQUFDO1FBQ2YsVUFBVSxFQUFFLHdCQUF3QjtRQUNwQyxLQUFLLEVBQUUsa0JBQWtCO0tBRTVCO0NBRUosQ0FBQztBQUVGLE1BQWEsY0FBZSxTQUFRLEtBQUssQ0FBQyxhQUE2QjtJQUluRSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWpELElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxXQUFXLEVBQUUsS0FBSztZQUNsQixZQUFZLEVBQUUsRUFBRTtTQUNuQixDQUFDO1FBRUYsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxrQkFBa0IsQ0FBQztJQUVsRCxDQUFDO0lBRU0sTUFBTTtRQUVULE1BQU0s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TUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFFdEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUV2QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUU5QixDQUFDO0NBRUo7QUFqSUQsd0NBaUlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtUYWd9IGZyb20gJy4uLy4uLy4uL3dlYi9qcy90YWdzL1RhZyc7XG5pbXBvcnQge1RhZ3NEQn0gZnJvbSAnLi9UYWdzREInO1xuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QnO1xuaW1wb3J0IHtCbGFja291dH0gZnJvbSAnLi4vLi4vLi4vd2ViL2pzL3VpL2JsYWNrb3V0L0JsYWNrb3V0JztcbmltcG9ydCB7VGFnU2VsZWN0T3B0aW9uc30gZnJvbSAnLi9UYWdTZWxlY3RPcHRpb25zJztcbmltcG9ydCB7VGFnU2VsZWN0T3B0aW9ufSBmcm9tICcuL1RhZ1NlbGVjdE9wdGlvbic7XG5pbXBvcnQge0ZpbHRlcmVkVGFnc30gZnJvbSAnLi9GaWx0ZXJlZFRhZ3MnO1xuaW1wb3J0IHtJU3R5bGVNYXB9IGZyb20gJy4uLy4uLy4uL3dlYi9qcy9yZWFjdC9JU3R5bGVNYXAnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdHN0cmFwL2xpYi9CdXR0b24nO1xuaW1wb3J0IFBvcG92ZXIgZnJvbSAncmVhY3RzdHJhcC9saWIvUG9wb3Zlcic7XG5pbXBvcnQgUG9wb3ZlckJvZHkgZnJvbSAncmVhY3RzdHJhcC9saWIvUG9wb3ZlckJvZHknO1xuLy8gaW1wb3J0IHtTeW50aGV0aWNLZXlib2FyZEV2ZW50fSBmcm9tICdyZWFjdC1kb20nO1xuXG5jb25zdCBTdHlsZXM6IElTdHlsZU1hcCA9IHtcblxuICAgIGRyb3Bkb3duQ2hldnJvbjoge1xuXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBtYXJnaW5MZWZ0OiAnLjI1NWVtJyxcbiAgICAgICAgdmVydGljYWxBbGlnbjogJy4yNTVlbScsXG4gICAgICAgIGJvcmRlclRvcDogJy4zZW0gc29saWQnLFxuICAgICAgICBib3JkZXJSaWdodDogJy4zZW0gc29saWQgdHJhbnNwYXJlbnQnLFxuICAgICAgICBib3JkZXJCb3R0b206IDAsXG4gICAgICAgIGJvcmRlckxlZnQ6ICcuM2VtIHNvbGlkIHRyYW5zcGFyZW50JyxcbiAgICAgICAgY29sb3I6ICd2YXIoLS1zZWNvbmRhcnkpJ1xuXG4gICAgfVxuXG59O1xuXG5leHBvcnQgY2xhc3MgRmlsdGVyVGFnSW5wdXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMudG9nZ2xlID0gdGhpcy50b2dnbGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwb3BvdmVyT3BlbjogZmFsc2UsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IFtdXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5pZCA9IHRoaXMucHJvcHMuaWQgfHwgXCJmaWx0ZXItdGFnLWlucHV0XCI7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICAvL1xuICAgICAgICBjb25zdCBvcHRpb25zOiBUYWdTZWxlY3RPcHRpb25bXSA9XG4gICAgICAgICAgICB0aGlzLnByb3BzLnRhZ3NEQlByb3ZpZGVyKCkudGFncygpLm1hcCggY3VycmVudCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGN1cnJlbnQuaWQsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBjdXJyZW50LmxhYmVsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17dGhpcy5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMudG9nZ2xlKCl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRlci1maWx0ZXItY2xpY2thYmxlIHAtMSBwbC0yIHByLTIgYm9yZGVyXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdGFnIGRvYy1idXR0b24gZG9jLWJ1dHRvbi1zZWxlY3RhYmxlIG1yLTFcIi8+XG4gICAgICAgICAgICAgICAgICAgIFRhZ3NcblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtTdHlsZXMuZHJvcGRvd25DaGV2cm9ufT48L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPFBvcG92ZXIgcGxhY2VtZW50PVwiYm90dG9tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBpc09wZW49e3RoaXMuc3RhdGUucG9wb3Zlck9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PXt0aGlzLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJsZWdhY3lcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZT17KCkgPT4gdGhpcy50b2dnbGUoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWctaW5wdXQtcG9wb3ZlclwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxQb3BvdmVyQm9keSBjbGFzc05hbWU9XCJzaGFkb3dcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0xIHBiLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkZpbHRlciBkb2N1bWVudHMgYnkgdGFnOjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlc2NhcGVDbGVhcnNWYWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTXVsdGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0NsZWFyYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17ZXZlbnQgPT4gdGhpcy5vbktleURvd24oZXZlbnQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbHRlci10YWctaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZVByZWZpeD1cInNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS5kZWZhdWx0VmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyQm9keT5cblxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25LZXlEb3duKGV2ZW50OiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxFbGVtZW50Pikge1xuXG4gICAgICAgIGlmIChldmVudC5rZXkudG9Mb3dlckNhc2UoKSA9PT0gXCJlc2NhcGVcIikge1xuICAgICAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudC5nZXRNb2RpZmllclN0YXRlKFwiQ29udHJvbFwiKSAmJiBldmVudC5rZXkudG9Mb3dlckNhc2UoKSA9PT0gXCJlbnRlclwiKSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHRvZ2dsZSgpIHtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgICAgIHBvcG92ZXJPcGVuOiAhdGhpcy5zdGF0ZS5wb3BvdmVyT3BlblxuICAgICAgICB9O1xuXG4gICAgICAgIEJsYWNrb3V0LnRvZ2dsZSh0aGlzLnN0YXRlLnBvcG92ZXJPcGVuKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVDaGFuZ2Uoc2VsZWN0ZWRPcHRpb25zOiBhbnkpIHtcblxuICAgICAgICAvLyBhcyBzbyBhcyB3ZSBoYW5kbGUgdGhlIGNoYW5nZSB3ZSB0b2dnbGUgb2ZmXG5cbiAgICAgICAgdGhpcy50b2dnbGUoKTtcblxuICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWU6IFRhZ1NlbGVjdE9wdGlvbnNbXSA9IHNlbGVjdGVkT3B0aW9ucztcblxuICAgICAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbih0aGlzLnN0YXRlLCB7XG4gICAgICAgICAgICBkZWZhdWx0VmFsdWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wcm9wcy5maWx0ZXJlZFRhZ3Muc2V0KFRhZ1NlbGVjdE9wdGlvbnMudG9UYWdzKHNlbGVjdGVkT3B0aW9ucykpO1xuXG4gICAgICAgIHRoaXMucHJvcHMucmVmcmVzaGVyKCk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcblxuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcblxuICAgIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xuXG4gICAgcmVhZG9ubHkgZGlzYWJsZWQ/OiBib29sZWFuO1xuXG4gICAgcmVhZG9ubHkgdGFnc0RCUHJvdmlkZXI6ICgpID0+IFRhZ3NEQjtcblxuICAgIHJlYWRvbmx5IHJlZnJlc2hlcjogKCkgPT4gdm9pZDtcblxuICAgIHJlYWRvbmx5IGZpbHRlcmVkVGFnczogRmlsdGVyZWRUYWdzO1xuXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICAgIHJlYWRvbmx5IHBvcG92ZXJPcGVuOiBib29sZWFuO1xuICAgIHJlYWRvbmx5IGRlZmF1bHRWYWx1ZTogVGFnU2VsZWN0T3B0aW9uW107XG59XG5cbiJdfQ==