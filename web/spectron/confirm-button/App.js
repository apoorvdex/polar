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
const ConfirmButton_1 = require("../../js/ui/confirm/ConfirmButton");
const ConfirmPopover_1 = require("../../js/ui/confirm/ConfirmPopover");
class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.open = false;
        this.selected = 'none';
        this.toggle = this.toggle.bind(this);
        this.select = this.select.bind(this);
        this.state = {
            open: this.open,
            selected: this.selected
        };
    }
    render() {
        console.log("this.state.selected: ", this.state);
        return (React.createElement("div", { className: "text-right" },
            React.createElement(ConfirmButton_1.ConfirmButton, { id: "confirm", prompt: "Are you sure?", onConfirm: () => console.log('confirm') }, "Delete"),
            React.createElement(ConfirmPopover_1.ConfirmPopover, { open: true, target: "mytarget", title: "Are you sure?", subtitle: "it might be bad ", onCancel: () => console.log('cancel'), onConfirm: () => console.log('confirm') }),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("br", null)));
    }
    toggle() {
        console.log("toggle()");
        this.open = !this.state.open;
        this.setState({
            open: this.open,
            selected: this.selected
        });
    }
    select(selected) {
        console.log("select()");
        console.log("Goign to set selected: " + selected);
        this.selected = selected;
        this.setState({
            open: this.open,
            selected: this.selected
        });
    }
}
exports.default = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXBwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IscUVBQWdFO0FBRWhFLHVFQUFrRTtBQUVsRSxNQUFNLEdBQU8sU0FBUSxLQUFLLENBQUMsU0FBd0I7SUFLL0MsWUFBWSxLQUFRLEVBQUUsT0FBWTtRQUM5QixLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBSmxCLFNBQUksR0FBWSxLQUFLLENBQUM7UUFDdEIsYUFBUSxHQUFtQixNQUFNLENBQUM7UUFLdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXJDLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDMUIsQ0FBQztJQUVOLENBQUM7SUFHTSxNQUFNO1FBRVQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbEQsT0FBTyxDQUVILDZCQUFLLFNBQVMsRUFBQyxZQUFZO1lBRXZCLG9CQUFDLDZCQUFhLElBQUMsRUFBRSxFQUFDLFNBQVMsRUFDWixNQUFNLEVBQUMsZUFBZSxFQUN0QixTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsYUFJdEM7WUFHaEIsb0JBQUMsK0JBQWMsSUFBQyxJQUFJLEVBQUUsSUFBSSxFQUNWLE1BQU0sRUFBQyxVQUFVLEVBQ2pCLEtBQUssRUFBQyxlQUFlLEVBQ3JCLFFBQVEsRUFBQyxrQkFBa0IsRUFDM0IsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQ3JDLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHO1lBa0QxRCwrQkFBSztZQUNMLCtCQUFLO1lBQ0wsK0JBQUs7WUFDTCwrQkFBSztZQUNMLCtCQUFLO1lBQ0wsK0JBQUs7WUFDTCwrQkFBSztZQUNMLCtCQUFLO1lBQ0wsK0JBQUs7WUFDTCwrQkFBSztZQUNMLCtCQUFLO1lBQ0wsK0JBQUssQ0FJSCxDQUNULENBQUM7SUFFTixDQUFDO0lBR08sTUFBTTtRQUVWLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUE7UUFFdkIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBRTlCLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDVixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDMUIsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVPLE1BQU0sQ0FBQyxRQUF3QjtRQUVuQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXhCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEdBQUcsUUFBUSxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFFekIsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNWLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUMxQixDQUFDLENBQUM7SUFFUCxDQUFDO0NBRUo7QUFFRCxrQkFBZSxHQUFHLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0NvbmZpcm1CdXR0b259IGZyb20gJy4uLy4uL2pzL3VpL2NvbmZpcm0vQ29uZmlybUJ1dHRvbic7XG5pbXBvcnQge0RvY0Ryb3Bkb3dufSBmcm9tICcuLi8uLi8uLi9hcHBzL3JlcG9zaXRvcnkvanMvRG9jRHJvcGRvd24nO1xuaW1wb3J0IHtDb25maXJtUG9wb3Zlcn0gZnJvbSAnLi4vLi4vanMvdWkvY29uZmlybS9Db25maXJtUG9wb3Zlcic7XG5cbmNsYXNzIEFwcDxQPiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwgSUFwcFN0YXRlPiB7XG5cbiAgICBwcml2YXRlIG9wZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIHNlbGVjdGVkOiBTZWxlY3RlZE9wdGlvbiA9ICdub25lJztcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBQLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMudG9nZ2xlID0gdGhpcy50b2dnbGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZWxlY3QgPSB0aGlzLnNlbGVjdC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBvcGVuOiB0aGlzLm9wZW4sXG4gICAgICAgICAgICBzZWxlY3RlZDogdGhpcy5zZWxlY3RlZFxuICAgICAgICB9O1xuXG4gICAgfVxuXG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5zdGF0ZS5zZWxlY3RlZDogXCIgLCB0aGlzLnN0YXRlKTtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cblxuICAgICAgICAgICAgICAgIDxDb25maXJtQnV0dG9uIGlkPVwiY29uZmlybVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbXB0PVwiQXJlIHlvdSBzdXJlP1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Db25maXJtPXsoKSA9PiBjb25zb2xlLmxvZygnY29uZmlybScpfT5cblxuICAgICAgICAgICAgICAgICAgICBEZWxldGVcblxuICAgICAgICAgICAgICAgIDwvQ29uZmlybUJ1dHRvbj5cblxuXG4gICAgICAgICAgICAgICAgPENvbmZpcm1Qb3BvdmVyIG9wZW49e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIm15dGFyZ2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJBcmUgeW91IHN1cmU/XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VidGl0bGU9XCJpdCBtaWdodCBiZSBiYWQgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9eygpID0+IGNvbnNvbGUubG9nKCdjYW5jZWwnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Db25maXJtPXsoKSA9PiBjb25zb2xlLmxvZygnY29uZmlybScpfS8+XG5cbiAgICAgICAgICAgICAgICB7Lyo8VGV4dElucHV0QnV0dG9uIGlkPVwic2V0LXRpdGxlXCIqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKnRpdGxlPVwiRW50ZXIgbmV3IHRpdGxlXCIqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKm9uQ29tcGxldGU9eyh0aXRsZSkgPT4gY29uc29sZS5sb2codGl0bGUpfT4qL31cblxuICAgICAgICAgICAgICAgICAgICB7LypDaGFuZ2UgdGl0bGUqL31cblxuICAgICAgICAgICAgICAgIHsvKjwvVGV4dElucHV0QnV0dG9uPiovfVxuXG5cbiAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+Ki99XG4gICAgICAgICAgICAgICAgICAgIHsvKjxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgZHJvcGRvd24tdG9nZ2xlXCIqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyp0eXBlPVwiYnV0dG9uXCIgaWQ9XCJkcm9wZG93bk1lbnVCdXR0b25cIiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKmRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICB7LypEcm9wZG93biBidXR0b24qL31cbiAgICAgICAgICAgICAgICAgICAgey8qPC9idXR0b24+Ki99XG5cbiAgICAgICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCIqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICB7LyphcmlhLWxhYmVsbGVkYnk9XCJkcm9wZG93bk1lbnVCdXR0b25cIj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPkFjdGlvbjwvYT4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPkFub3RoZXIgYWN0aW9uPC9hPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+U29tZXRoaW5nIGVsc2UqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LypoZXJlPC9hPiovfVxuICAgICAgICAgICAgICAgICAgICB7Lyo8L2Rpdj4qL31cbiAgICAgICAgICAgICAgICB7Lyo8L2Rpdj4qL31cbiAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cFwiPiovfVxuICAgICAgICAgICAgICAgICAgICB7Lyo8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiPkFjdGlvbiovfVxuICAgICAgICAgICAgICAgICAgICB7Lyo8L2J1dHRvbj4qL31cbiAgICAgICAgICAgICAgICAgICAgey8qPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LypjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBkcm9wZG93bi10b2dnbGUgZHJvcGRvd24tdG9nZ2xlLXNwbGl0XCIqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LypkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKmFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlRvZ2dsZSBEcm9wZG93bjwvc3Bhbj4qL31cbiAgICAgICAgICAgICAgICAgICAgey8qPC9idXR0b24+Ki99XG4gICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+QWN0aW9uPC9hPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+QW5vdGhlciBhY3Rpb248L2E+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5Tb21ldGhpbmcgZWxzZSovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKmhlcmU8L2E+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWRpdmlkZXJcIj48L2Rpdj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlNlcGFyYXRlZCBsaW5rPC9hPiovfVxuICAgICAgICAgICAgICAgICAgICB7Lyo8L2Rpdj4qL31cbiAgICAgICAgICAgICAgICB7Lyo8L2Rpdj4qL31cblxuXG4gICAgICAgICAgICAgICAgey8qPERvY0Ryb3Bkb3duIGlkPVwiZmlyc3RcIi8+Ki99XG5cblxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8YnIvPlxuXG4gICAgICAgICAgICAgICAgey8qPERvY0Ryb3Bkb3duIGlkPVwic2Vjb25kLWRyb3Bkb3duXCIvPiovfVxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcblxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSB0b2dnbGUoKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJ0b2dnbGUoKVwiKVxuXG4gICAgICAgIHRoaXMub3BlbiA9ICEgdGhpcy5zdGF0ZS5vcGVuO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgb3BlbjogdGhpcy5vcGVuLFxuICAgICAgICAgICAgc2VsZWN0ZWQ6IHRoaXMuc2VsZWN0ZWRcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHNlbGVjdChzZWxlY3RlZDogU2VsZWN0ZWRPcHRpb24pIHtcblxuICAgICAgICBjb25zb2xlLmxvZyhcInNlbGVjdCgpXCIpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR29pZ24gdG8gc2V0IHNlbGVjdGVkOiBcIiArIHNlbGVjdGVkKTtcblxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gc2VsZWN0ZWQ7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBvcGVuOiB0aGlzLm9wZW4sXG4gICAgICAgICAgICBzZWxlY3RlZDogdGhpcy5zZWxlY3RlZFxuICAgICAgICB9KTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cbmludGVyZmFjZSBJQXBwU3RhdGUge1xuXG4gICAgb3BlbjogYm9vbGVhbjtcbiAgICBzZWxlY3RlZDogU2VsZWN0ZWRPcHRpb247XG5cbn1cblxudHlwZSBTZWxlY3RlZE9wdGlvbiA9ICdzZXQtdGl0bGUnIHwgJ2RlbGV0ZScgfCAnbm9uZSc7XG5cbiJdfQ==