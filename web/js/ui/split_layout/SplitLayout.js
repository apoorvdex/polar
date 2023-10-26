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
const Logger_1 = require("../../logger/Logger");
const log = Logger_1.Logger.create();
class SplitLayout extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement("div", { className: "split-layout pl-0 pr-0" },
            React.createElement("div", { style: { display: 'flex' } }, this.props.children)));
    }
}
exports.SplitLayout = SplitLayout;
class SplitLayoutLeft extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement("div", { className: "split-layout-left", style: {
                verticalAlign: 'top'
            } }, this.props.children));
    }
}
exports.SplitLayoutLeft = SplitLayoutLeft;
class SplitLayoutRight extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement("div", { className: "split-layout-right", style: {
                marginBottom: 'auto',
                marginLeft: 'auto',
                display: 'flex',
                justifyContent: 'flex-end',
                verticalAlign: 'top'
            } }, this.props.children));
    }
}
exports.SplitLayoutRight = SplitLayoutRight;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BsaXRMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTcGxpdExheW91dC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLGdEQUEyQztBQUUzQyxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSxXQUFZLFNBQVEsS0FBSyxDQUFDLGFBQXVCO0lBRTFELFlBQVksS0FBVSxFQUFFLE9BQVk7UUFDaEMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sTUFBTTtRQUVULE9BQU8sQ0FFSCw2QkFBSyxTQUFTLEVBQUMsd0JBQXdCO1lBRW5DLDZCQUFLLEtBQUssRUFBRSxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUMsSUFFeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBRWxCLENBRUosQ0FDVCxDQUFDO0lBQ04sQ0FBQztDQUVKO0FBdEJELGtDQXNCQztBQUVELE1BQWEsZUFBZ0IsU0FBUSxLQUFLLENBQUMsYUFBdUI7SUFFOUQsWUFBWSxLQUFVLEVBQUUsT0FBWTtRQUNoQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFTSxNQUFNO1FBRVQsT0FBTyxDQUVILDZCQUFLLFNBQVMsRUFBQyxtQkFBbUIsRUFDN0IsS0FBSyxFQUFFO2dCQUdILGFBQWEsRUFBRSxLQUFLO2FBQ3ZCLElBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBRWxCLENBRVQsQ0FBQztJQUNOLENBQUM7Q0FFSjtBQXhCRCwwQ0F3QkM7QUFFRCxNQUFhLGdCQUFpQixTQUFRLEtBQUssQ0FBQyxhQUF1QjtJQUUvRCxZQUFZLEtBQVUsRUFBRSxPQUFZO1FBQ2hDLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLE1BQU07UUFFVCxPQUFPLENBRUgsNkJBQUssU0FBUyxFQUFDLG9CQUFvQixFQUM5QixLQUFLLEVBQUU7Z0JBRUgsWUFBWSxFQUFFLE1BQU07Z0JBQ3BCLFVBQVUsRUFBRSxNQUFNO2dCQUNsQixPQUFPLEVBQUUsTUFBTTtnQkFDZixjQUFjLEVBQUUsVUFBVTtnQkFFMUIsYUFBYSxFQUFFLEtBQUs7YUFDdkIsSUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FFbEIsQ0FFVCxDQUFDO0lBQ04sQ0FBQztDQUVKO0FBNUJELDRDQTRCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi9sb2dnZXIvTG9nZ2VyJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgY2xhc3MgU3BsaXRMYXlvdXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PGFueSwgYW55PiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogYW55LCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGxpdC1sYXlvdXQgcGwtMCBwci0wXCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnfX0+XG5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBTcGxpdExheW91dExlZnQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PGFueSwgYW55PiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogYW55LCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGxpdC1sYXlvdXQtbGVmdFwiXG4gICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAvLyBtYXJnaW5Ub3A6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgIC8vIG1hcmdpbkJvdHRvbTogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCdcbiAgICAgICAgICAgICAgICAgfX0+XG5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIFNwbGl0TGF5b3V0UmlnaHQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PGFueSwgYW55PiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogYW55LCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGxpdC1sYXlvdXQtcmlnaHRcIlxuICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luVG9wOiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxuICAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnXG4gICAgICAgICAgICAgICAgIH19PlxuXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICk7XG4gICAgfVxuXG59XG4iXX0=