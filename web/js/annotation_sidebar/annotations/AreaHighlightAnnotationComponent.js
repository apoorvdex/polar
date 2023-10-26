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
class AreaHighlightAnnotationComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    render() {
        const { annotation } = this.props;
        const key = 'area-highlight' + annotation.id;
        if (annotation.screenshot) {
            return (React.createElement("div", { key: key, className: 'area-highlight' },
                React.createElement("img", { src: annotation.screenshot.src })));
        }
        else {
            return (React.createElement("div", { key: key, className: 'area-highlight' }));
        }
    }
}
exports.AreaHighlightAnnotationComponent = AreaHighlightAnnotationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJlYUhpZ2hsaWdodEFubm90YXRpb25Db21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBcmVhSGlnaGxpZ2h0QW5ub3RhdGlvbkNvbXBvbmVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBUy9CLE1BQWEsZ0NBQWlDLFNBQVEsS0FBSyxDQUFDLFNBQXlCO0lBRWpGLFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUVwQixDQUFDO0lBRU0sTUFBTTtRQUNULE1BQU0sRUFBRSxVQUFVLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRWxDLE1BQU0sR0FBRyxHQUFHLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUM7UUFFN0MsSUFBSSxVQUFVLENBQUMsVUFBVSxFQUFFO1lBQ3ZCLE9BQU8sQ0FDSCw2QkFBSyxHQUFHLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBQyxnQkFBZ0I7Z0JBQ3JDLDZCQUFLLEdBQUcsRUFBRSxVQUFVLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxDQUNwQyxDQUNULENBQUM7U0FDTDthQUFNO1lBQ0gsT0FBTyxDQUNILDZCQUFLLEdBQUcsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFDLGdCQUFnQixHQUVuQyxDQUNULENBQUM7U0FDTDtJQUVMLENBQUM7Q0FFSjtBQTlCRCw0RUE4QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0Fubm90YXRpb25UeXBlc30gZnJvbSAnLi4vLi4vbWV0YWRhdGEvQW5ub3RhdGlvblR5cGVzJztcbmltcG9ydCB7RG9jQW5ub3RhdGlvbn0gZnJvbSAnLi4vRG9jQW5ub3RhdGlvbic7XG5pbXBvcnQge09wdGlvbmFsfSBmcm9tICcuLi8uLi91dGlsL3RzL09wdGlvbmFsJztcbmltcG9ydCB7QW5ub3RhdGlvblNpZGViYXJzfSBmcm9tICcuLi9Bbm5vdGF0aW9uU2lkZWJhcnMnO1xuXG4vKipcbiAqIEEgZ2VuZXJpYyB3cmFwcGVyIHRoYXQgZGV0ZXJtaW5lcyB3aGljaCBzdWItY29tcG9uZW50IHRvIHJlbmRlci5cbiAqL1xuZXhwb3J0IGNsYXNzIEFyZWFIaWdobGlnaHRBbm5vdGF0aW9uQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgYW5ub3RhdGlvbiB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBjb25zdCBrZXkgPSAnYXJlYS1oaWdobGlnaHQnICsgYW5ub3RhdGlvbi5pZDtcblxuICAgICAgICBpZiAoYW5ub3RhdGlvbi5zY3JlZW5zaG90KSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT0nYXJlYS1oaWdobGlnaHQnPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YW5ub3RhdGlvbi5zY3JlZW5zaG90LnNyY30vPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2tleX0gY2xhc3NOYW1lPSdhcmVhLWhpZ2hsaWdodCc+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgYW5ub3RhdGlvbjogRG9jQW5ub3RhdGlvbjtcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG5cbn1cbiJdfQ==