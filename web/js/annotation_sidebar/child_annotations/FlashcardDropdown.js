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
const reactstrap_1 = require("reactstrap");
const Logger_1 = require("../../logger/Logger");
const ConfirmPopover_1 = require("../../ui/confirm/ConfirmPopover");
const log = Logger_1.Logger.create();
const Styles = {
    DropdownMenu: {
        zIndex: 999,
        fontSize: '14px'
    },
};
class FlashcardDropdown extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.open = false;
        this.selected = 'none';
        this.toggle = this.toggle.bind(this);
        this.select = this.select.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onDeleteSelected = this.onDeleteSelected.bind(this);
        this.state = {
            open: this.open,
            selected: this.selected,
        };
    }
    render() {
        const toggleID = this.props.id + '-dropdown-toggle';
        return (React.createElement("div", { className: "text-right" },
            React.createElement(reactstrap_1.Dropdown, { id: this.props.id, isOpen: this.state.open, toggle: this.toggle },
                React.createElement(reactstrap_1.DropdownToggle, { color: "light", className: "doc-dropdown-button btn text-muted pl-1 pr-1", id: toggleID },
                    React.createElement("i", { className: "fas fa-ellipsis-h" })),
                React.createElement(reactstrap_1.DropdownMenu, { right: true },
                    React.createElement(reactstrap_1.DropdownItem, { className: "text-danger", onClick: () => this.onDeleteSelected() }, "Delete"))),
            React.createElement(ConfirmPopover_1.ConfirmPopover, { open: this.state.selected === 'delete', target: toggleID, title: "Are you sure you want to delete this flashcard? ", onCancel: () => this.select('none'), onConfirm: () => this.onDelete() })));
    }
    onDeleteSelected() {
        this.select('delete');
    }
    onDelete() {
        this.props.onDelete(this.props.flashcard);
        this.select('none');
    }
    toggle() {
        this.open = !this.state.open;
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
exports.FlashcardDropdown = FlashcardDropdown;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxhc2hjYXJkRHJvcGRvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGbGFzaGNhcmREcm9wZG93bi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLDJDQUFnRjtBQUNoRixnREFBMkM7QUFHM0Msb0VBQStEO0FBRS9ELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFNLE1BQU0sR0FBYztJQUV0QixZQUFZLEVBQUU7UUFDVixNQUFNLEVBQUUsR0FBRztRQUNYLFFBQVEsRUFBRSxNQUFNO0tBQ25CO0NBRUosQ0FBQztBQUVGLE1BQWEsaUJBQWtCLFNBQVEsS0FBSyxDQUFDLFNBQXlCO0lBS2xFLFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUpsQixTQUFJLEdBQVksS0FBSyxDQUFDO1FBQ3RCLGFBQVEsR0FBbUIsTUFBTSxDQUFDO1FBS3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXpELElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDMUIsQ0FBQztJQUVOLENBQUM7SUFFTSxNQUFNO1FBRVQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsa0JBQWtCLENBQUM7UUFFcEQsT0FBTyxDQUVILDZCQUFLLFNBQVMsRUFBQyxZQUFZO1lBRXZCLG9CQUFDLHFCQUFRLElBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBRXJFLG9CQUFDLDJCQUFjLElBQUMsS0FBSyxFQUFDLE9BQU8sRUFDYixTQUFTLEVBQUMsOENBQThDLEVBQ3hELEVBQUUsRUFBRSxRQUFRO29CQUV4QiwyQkFBRyxTQUFTLEVBQUMsbUJBQW1CLEdBQUssQ0FFeEI7Z0JBRWpCLG9CQUFDLHlCQUFZLElBQUMsS0FBSztvQkFJZixvQkFBQyx5QkFBWSxJQUFDLFNBQVMsRUFBQyxhQUFhLEVBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxhQUU3RCxDQUVKLENBR1I7WUFFWCxvQkFBQywrQkFBYyxJQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQ3RDLE1BQU0sRUFBRSxRQUFRLEVBQ2hCLEtBQUssRUFBQyxrREFBa0QsRUFDeEQsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQ25DLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FFakQsQ0FFVCxDQUFDO0lBRU4sQ0FBQztJQUVPLGdCQUFnQjtRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFTyxRQUFRO1FBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFTyxNQUFNO1FBRVYsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBRTlCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUVuQixDQUFDO0lBRU8sTUFBTSxDQUFDLFFBQXdCO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRU8sT0FBTztRQUVYLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDVixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDMUIsQ0FBQyxDQUFDO0lBRVAsQ0FBQztDQUVKO0FBOUZELDhDQThGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RHJvcGRvd24sIERyb3Bkb3duSXRlbSwgRHJvcGRvd25NZW51LCBEcm9wZG93blRvZ2dsZX0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vLi4vbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0lTdHlsZU1hcH0gZnJvbSAnLi4vLi4vcmVhY3QvSVN0eWxlTWFwJztcbmltcG9ydCB7RG9jQW5ub3RhdGlvbn0gZnJvbSAnLi4vRG9jQW5ub3RhdGlvbic7XG5pbXBvcnQge0NvbmZpcm1Qb3BvdmVyfSBmcm9tICcuLi8uLi91aS9jb25maXJtL0NvbmZpcm1Qb3BvdmVyJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5jb25zdCBTdHlsZXM6IElTdHlsZU1hcCA9IHtcblxuICAgIERyb3Bkb3duTWVudToge1xuICAgICAgICB6SW5kZXg6IDk5OSxcbiAgICAgICAgZm9udFNpemU6ICcxNHB4J1xuICAgIH0sXG5cbn07XG5cbmV4cG9ydCBjbGFzcyBGbGFzaGNhcmREcm9wZG93biBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgcHJpdmF0ZSBvcGVuOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBzZWxlY3RlZDogU2VsZWN0ZWRPcHRpb24gPSAnbm9uZSc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMudG9nZ2xlID0gdGhpcy50b2dnbGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZWxlY3QgPSB0aGlzLnNlbGVjdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uRGVsZXRlID0gdGhpcy5vbkRlbGV0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uRGVsZXRlU2VsZWN0ZWQgPSB0aGlzLm9uRGVsZXRlU2VsZWN0ZWQuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgb3BlbjogdGhpcy5vcGVuLFxuICAgICAgICAgICAgc2VsZWN0ZWQ6IHRoaXMuc2VsZWN0ZWQsXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IHRvZ2dsZUlEID0gdGhpcy5wcm9wcy5pZCArICctZHJvcGRvd24tdG9nZ2xlJztcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cblxuICAgICAgICAgICAgICAgIDxEcm9wZG93biBpZD17dGhpcy5wcm9wcy5pZH0gaXNPcGVuPXt0aGlzLnN0YXRlLm9wZW59IHRvZ2dsZT17dGhpcy50b2dnbGV9PlxuXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blRvZ2dsZSBjb2xvcj1cImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRvYy1kcm9wZG93bi1idXR0b24gYnRuIHRleHQtbXV0ZWQgcGwtMSBwci0xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXt0b2dnbGVJRH0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lbGxpcHNpcy1oXCI+PC9pPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25Ub2dnbGU+XG5cbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudSByaWdodD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPERyb3Bkb3duSXRlbSBkaXZpZGVyIC8+Ki99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uRGVsZXRlU2VsZWN0ZWQoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cblxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cblxuXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cblxuICAgICAgICAgICAgICAgIDxDb25maXJtUG9wb3ZlciBvcGVuPXt0aGlzLnN0YXRlLnNlbGVjdGVkID09PSAnZGVsZXRlJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PXt0b2dnbGVJRH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgZmxhc2hjYXJkPyBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4gdGhpcy5zZWxlY3QoJ25vbmUnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Db25maXJtPXsoKSA9PiB0aGlzLm9uRGVsZXRlKCl9Lz5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25EZWxldGVTZWxlY3RlZCgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3QoJ2RlbGV0ZScpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25EZWxldGUoKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25EZWxldGUodGhpcy5wcm9wcy5mbGFzaGNhcmQpO1xuICAgICAgICB0aGlzLnNlbGVjdCgnbm9uZScpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdG9nZ2xlKCkge1xuXG4gICAgICAgIHRoaXMub3BlbiA9ICEgdGhpcy5zdGF0ZS5vcGVuO1xuXG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZWxlY3Qoc2VsZWN0ZWQ6IFNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZWZyZXNoKCkge1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgb3BlbjogdGhpcy5vcGVuLFxuICAgICAgICAgICAgc2VsZWN0ZWQ6IHRoaXMuc2VsZWN0ZWRcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBmbGFzaGNhcmQ6IERvY0Fubm90YXRpb247XG4gICAgb25EZWxldGU6IChmbGFzaGNhcmQ6IERvY0Fubm90YXRpb24pID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuXG4gICAgb3BlbjogYm9vbGVhbjtcbiAgICBzZWxlY3RlZDogU2VsZWN0ZWRPcHRpb247XG5cbn1cblxudHlwZSBTZWxlY3RlZE9wdGlvbiA9ICdkZWxldGUnIHwgJ25vbmUnO1xuXG4iXX0=