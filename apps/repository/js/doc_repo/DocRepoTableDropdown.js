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
const ListSelector_1 = require("../../../../web/js/ui/list_selector/ListSelector");
const LightboxPopover_1 = require("../../../../web/js/ui/lightbox_popover/LightboxPopover");
const DocRepoTableColumns_1 = require("./DocRepoTableColumns");
const Dropdown_1 = __importDefault(require("reactstrap/lib/Dropdown"));
const DropdownToggle_1 = __importDefault(require("reactstrap/lib/DropdownToggle"));
const DropdownMenu_1 = __importDefault(require("reactstrap/lib/DropdownMenu"));
const PopoverBody_1 = __importDefault(require("reactstrap/lib/PopoverBody"));
const DropdownItem_1 = __importDefault(require("reactstrap/lib/DropdownItem"));
const log = Logger_1.Logger.create();
const Styles = {
    DropdownMenu: {
        zIndex: 999,
        fontSize: '14px'
    },
    LightboxPopover: {
        fontSize: '14px',
    }
};
class DocRepoTableDropdown extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.open = false;
        this.selected = 'none';
        this.toggle = this.toggle.bind(this);
        this.select = this.select.bind(this);
        this.state = {
            open: this.open,
            selected: this.selected,
        };
    }
    render() {
        const columns = this.props.options || Object.values(new DocRepoTableColumns_1.DocRepoTableColumns());
        return (React.createElement("div", { className: "text-right" },
            React.createElement(Dropdown_1.default, { id: this.props.id, isOpen: this.state.open, toggle: this.toggle },
                React.createElement(DropdownToggle_1.default, { color: "light", size: "md", className: "table-dropdown-button btn text-muted p-1 m-0", id: this.props.id + '-dropdown-toggle' },
                    React.createElement("i", { className: "fas fa-ellipsis-h" })),
                React.createElement(DropdownMenu_1.default, { className: "shadow", style: Styles.DropdownMenu, right: true },
                    React.createElement(DropdownItem_1.default, { onClick: () => this.select('change-columns') }, "Change Columns"))),
            React.createElement(LightboxPopover_1.LightboxPopover, { placement: 'bottom', open: this.selected === 'change-columns', target: this.props.id + '-dropdown-toggle', className: "p-0", style: Styles.LightboxPopover },
                React.createElement(PopoverBody_1.default, null,
                    React.createElement(ListSelector_1.ListSelector, { options: columns, id: this.props.id + 'list-options', title: "Select columns to display in the table:", onCancel: () => this.select('none'), onSet: (options) => this.onSelectedColumns(options), onChange: (value) => console.log(value) })))));
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
    onSelectedColumns(options) {
        this.select('none');
        if (this.props.onSelectedColumns) {
            this.props.onSelectedColumns(options);
        }
    }
}
exports.DocRepoTableDropdown = DocRepoTableDropdown;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jUmVwb1RhYmxlRHJvcGRvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJEb2NSZXBvVGFibGVEcm9wZG93bi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLDZEQUF3RDtBQUV4RCxtRkFBOEY7QUFDOUYsNEZBQXVGO0FBQ3ZGLCtEQUEwRDtBQUMxRCx1RUFBK0M7QUFDL0MsbUZBQTJEO0FBQzNELCtFQUF1RDtBQUN2RCw2RUFBcUQ7QUFDckQsK0VBQXVEO0FBRXZELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFNLE1BQU0sR0FBYztJQUV0QixZQUFZLEVBQUU7UUFDVixNQUFNLEVBQUUsR0FBRztRQUNYLFFBQVEsRUFBRSxNQUFNO0tBQ25CO0lBRUQsZUFBZSxFQUFFO1FBQ2IsUUFBUSxFQUFFLE1BQU07S0FFbkI7Q0FFSixDQUFDO0FBRUYsTUFBYSxvQkFBcUIsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFLckUsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBSmxCLFNBQUksR0FBWSxLQUFLLENBQUM7UUFDdEIsYUFBUSxHQUFtQixNQUFNLENBQUM7UUFLdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBS3JDLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDMUIsQ0FBQztJQUVOLENBQUM7SUFFTSxNQUFNO1FBRVQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLHlDQUFtQixFQUFFLENBQUMsQ0FBQztRQUUvRSxPQUFPLENBRUgsNkJBQUssU0FBUyxFQUFDLFlBQVk7WUFFdkIsb0JBQUMsa0JBQVEsSUFBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFDdkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2dCQUV6QixvQkFBQyx3QkFBYyxJQUFDLEtBQUssRUFBQyxPQUFPLEVBQ2IsSUFBSSxFQUFDLElBQUksRUFDVCxTQUFTLEVBQUMsOENBQThDLEVBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLGtCQUFrQjtvQkFDM0csMkJBQUcsU0FBUyxFQUFDLG1CQUFtQixHQUFLLENBQ3hCO2dCQUVqQixvQkFBQyxzQkFBWSxJQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxZQUFZLEVBQUUsS0FBSztvQkFFOUQsb0JBQUMsc0JBQVksSUFBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFFM0MsQ0FFSixDQUdSO1lBRVgsb0JBQUMsaUNBQWUsSUFBQyxTQUFTLEVBQUUsUUFBUSxFQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsS0FBSyxnQkFBZ0IsRUFDeEMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLGtCQUFrQixFQUMxQyxTQUFTLEVBQUMsS0FBSyxFQUNmLEtBQUssRUFBRSxNQUFNLENBQUMsZUFBZTtnQkFFMUMsb0JBQUMscUJBQVc7b0JBRVIsb0JBQUMsMkJBQVksSUFBQyxPQUFPLEVBQUUsT0FBTyxFQUNoQixFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsY0FBYyxFQUNsQyxLQUFLLEVBQUMseUNBQXlDLEVBQy9DLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUNuQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsRUFDbkQsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUV0QyxDQUVMLENBRUEsQ0FFaEIsQ0FDVCxDQUFDO0lBRU4sQ0FBQztJQUVPLE1BQU07UUFFVixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssTUFBTSxFQUFFO1lBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO2FBQU07WUFDSCxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7U0FDakM7UUFFRCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFFbkIsQ0FBQztJQUVPLE1BQU0sQ0FBQyxRQUF3QjtRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVPLE9BQU87UUFFWCxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ1YsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQzFCLENBQUMsQ0FBQztJQUVQLENBQUM7SUFJTyxpQkFBaUIsQ0FBQyxPQUF5QjtRQUUvQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXBCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRTtZQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3pDO0lBRUwsQ0FBQztDQUVKO0FBbEhELG9EQWtIQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0lTdHlsZU1hcH0gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL3JlYWN0L0lTdHlsZU1hcCc7XG5pbXBvcnQge0xpc3RPcHRpb25UeXBlLCBMaXN0U2VsZWN0b3J9IGZyb20gXCIuLi8uLi8uLi8uLi93ZWIvanMvdWkvbGlzdF9zZWxlY3Rvci9MaXN0U2VsZWN0b3JcIjtcbmltcG9ydCB7TGlnaHRib3hQb3BvdmVyfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvdWkvbGlnaHRib3hfcG9wb3Zlci9MaWdodGJveFBvcG92ZXInO1xuaW1wb3J0IHtEb2NSZXBvVGFibGVDb2x1bW5zfSBmcm9tICcuL0RvY1JlcG9UYWJsZUNvbHVtbnMnO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gJ3JlYWN0c3RyYXAvbGliL0Ryb3Bkb3duJztcbmltcG9ydCBEcm9wZG93blRvZ2dsZSBmcm9tICdyZWFjdHN0cmFwL2xpYi9Ecm9wZG93blRvZ2dsZSc7XG5pbXBvcnQgRHJvcGRvd25NZW51IGZyb20gJ3JlYWN0c3RyYXAvbGliL0Ryb3Bkb3duTWVudSc7XG5pbXBvcnQgUG9wb3ZlckJvZHkgZnJvbSAncmVhY3RzdHJhcC9saWIvUG9wb3ZlckJvZHknO1xuaW1wb3J0IERyb3Bkb3duSXRlbSBmcm9tICdyZWFjdHN0cmFwL2xpYi9Ecm9wZG93bkl0ZW0nO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmNvbnN0IFN0eWxlczogSVN0eWxlTWFwID0ge1xuXG4gICAgRHJvcGRvd25NZW51OiB7XG4gICAgICAgIHpJbmRleDogOTk5LFxuICAgICAgICBmb250U2l6ZTogJzE0cHgnXG4gICAgfSxcblxuICAgIExpZ2h0Ym94UG9wb3Zlcjoge1xuICAgICAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgICAgICAvLyBtaW5XaWR0aDogJzUwMHB4J1xuICAgIH1cblxufTtcblxuZXhwb3J0IGNsYXNzIERvY1JlcG9UYWJsZURyb3Bkb3duIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBwcml2YXRlIG9wZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIHNlbGVjdGVkOiBTZWxlY3RlZE9wdGlvbiA9ICdub25lJztcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy50b2dnbGUgPSB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNlbGVjdCA9IHRoaXMuc2VsZWN0LmJpbmQodGhpcyk7XG4gICAgICAgIC8vIHRoaXMub25EZWxldGUgPSB0aGlzLm9uRGVsZXRlLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIHRoaXMub25TZXRUaXRsZSA9IHRoaXMub25TZXRUaXRsZS5iaW5kKHRoaXMpO1xuICAgICAgICAvLyB0aGlzLm9uQ29weVVSTCA9IHRoaXMub25Db3B5VVJMLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG9wZW46IHRoaXMub3BlbixcbiAgICAgICAgICAgIHNlbGVjdGVkOiB0aGlzLnNlbGVjdGVkLFxuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCBjb2x1bW5zID0gdGhpcy5wcm9wcy5vcHRpb25zIHx8IE9iamVjdC52YWx1ZXMobmV3IERvY1JlcG9UYWJsZUNvbHVtbnMoKSk7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd24gaWQ9e3RoaXMucHJvcHMuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzT3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGU9e3RoaXMudG9nZ2xlfT5cblxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25Ub2dnbGUgY29sb3I9XCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFibGUtZHJvcGRvd24tYnV0dG9uIGJ0biB0ZXh0LW11dGVkIHAtMSBtLTBcIiBpZD17dGhpcy5wcm9wcy5pZCArICctZHJvcGRvd24tdG9nZ2xlJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZWxsaXBzaXMtaFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93blRvZ2dsZT5cblxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51IGNsYXNzTmFtZT1cInNoYWRvd1wiIHN0eWxlPXtTdHlsZXMuRHJvcGRvd25NZW51fSByaWdodD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNlbGVjdCgnY2hhbmdlLWNvbHVtbnMnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hhbmdlIENvbHVtbnNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxuXG5cbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxuXG4gICAgICAgICAgICAgICAgPExpZ2h0Ym94UG9wb3ZlciBwbGFjZW1lbnQ9eydib3R0b20nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zZWxlY3RlZCA9PT0gJ2NoYW5nZS1jb2x1bW5zJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD17dGhpcy5wcm9wcy5pZCArICctZHJvcGRvd24tdG9nZ2xlJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17U3R5bGVzLkxpZ2h0Ym94UG9wb3Zlcn0+XG5cbiAgICAgICAgICAgICAgICAgICAgPFBvcG92ZXJCb2R5PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdFNlbGVjdG9yIG9wdGlvbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXt0aGlzLnByb3BzLmlkICsgJ2xpc3Qtb3B0aW9ucyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiU2VsZWN0IGNvbHVtbnMgdG8gZGlzcGxheSBpbiB0aGUgdGFibGU6XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9eygpID0+IHRoaXMuc2VsZWN0KCdub25lJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2V0PXsob3B0aW9ucykgPT4gdGhpcy5vblNlbGVjdGVkQ29sdW1ucyhvcHRpb25zKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gY29uc29sZS5sb2codmFsdWUpfT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0U2VsZWN0b3I+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyQm9keT5cblxuICAgICAgICAgICAgICAgIDwvTGlnaHRib3hQb3BvdmVyPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgdG9nZ2xlKCkge1xuXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkICE9PSAnbm9uZScpIHtcbiAgICAgICAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vcGVuID0gISB0aGlzLnN0YXRlLm9wZW47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlZnJlc2goKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgc2VsZWN0KHNlbGVjdGVkOiBTZWxlY3RlZE9wdGlvbikge1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVmcmVzaCgpIHtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG9wZW46IHRoaXMub3BlbixcbiAgICAgICAgICAgIHNlbGVjdGVkOiB0aGlzLnNlbGVjdGVkXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLy8gdGhpcy5vblNldFRpdGxlID0gdGhpcy5vblNldFRpdGxlLmJpbmQodGhpcyk7XG5cbiAgICBwcml2YXRlIG9uU2VsZWN0ZWRDb2x1bW5zKG9wdGlvbnM6IExpc3RPcHRpb25UeXBlW10pIHtcblxuICAgICAgICB0aGlzLnNlbGVjdCgnbm9uZScpO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0ZWRDb2x1bW5zKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uU2VsZWN0ZWRDb2x1bW5zKG9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBvcHRpb25zPzogTGlzdE9wdGlvblR5cGVbXTtcbiAgICBvblNlbGVjdGVkQ29sdW1ucz86IChvcHRpb25zOiBMaXN0T3B0aW9uVHlwZVtdKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcblxuICAgIG9wZW46IGJvb2xlYW47XG4gICAgc2VsZWN0ZWQ6IFNlbGVjdGVkT3B0aW9uO1xuXG59XG5cbnR5cGUgU2VsZWN0ZWRPcHRpb24gPSAnY2hhbmdlLWNvbHVtbnMnIHwgJ25vbmUnO1xuIl19