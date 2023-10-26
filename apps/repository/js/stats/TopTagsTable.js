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
const Statistics_1 = require("../../../../web/js/metadata/Statistics");
const StatTitle_1 = __importDefault(require("./StatTitle"));
const Table_1 = __importDefault(require("reactstrap/lib/Table"));
const log = Logger_1.Logger.create();
class TopTagsTable extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    render() {
        const topTags = Statistics_1.Statistics.computeTopTags(this.props.docInfos, 20);
        return React.createElement("div", { id: "top-tags-table" },
            React.createElement(StatTitle_1.default, null, "Top Tags"),
            React.createElement(Table_1.default, null,
                React.createElement("tbody", null, topTags.map(topTag => React.createElement("tr", { key: topTag.key },
                    React.createElement("td", { className: "pt-1 pb-1" }, topTag.key),
                    React.createElement("td", { className: "pt-1 pb-1" }, topTag.value))))));
    }
}
exports.default = TopTagsTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9wVGFnc1RhYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVG9wVGFnc1RhYmxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsNkRBQXdEO0FBQ3hELHVFQUFrRTtBQUdsRSw0REFBb0M7QUFDcEMsaUVBQXlDO0FBRXpDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFxQixZQUFhLFNBQVEsS0FBSyxDQUFDLFNBQXlCO0lBRXJFLFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQ1osQ0FBQztJQUVOLENBQUM7SUFFTSxNQUFNO1FBRVQsTUFBTSxPQUFPLEdBQUcsdUJBQVUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFbkUsT0FBTyw2QkFBSyxFQUFFLEVBQUMsZ0JBQWdCO1lBQzNCLG9CQUFDLG1CQUFTLG1CQUFxQjtZQUMvQixvQkFBQyxlQUFLO2dCQUNGLG1DQUNLLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FDakIsNEJBQUksR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHO29CQUNmLDRCQUFJLFNBQVMsRUFBQyxXQUFXLElBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBTTtvQkFDM0MsNEJBQUksU0FBUyxFQUFDLFdBQVcsSUFBRSxNQUFNLENBQUMsS0FBSyxDQUFNLENBQzVDLENBQUMsQ0FFUCxDQUNKLENBQ04sQ0FBQztJQUNYLENBQUM7Q0FFSjtBQTdCRCwrQkE2QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtTdGF0aXN0aWNzfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvbWV0YWRhdGEvU3RhdGlzdGljcyc7XG5pbXBvcnQge0lEb2NJbmZvfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvbWV0YWRhdGEvRG9jSW5mbyc7XG5pbXBvcnQge1Jlc3BvbnNpdmVQaWV9IGZyb20gJ0BuaXZvL3BpZSc7XG5pbXBvcnQgU3RhdFRpdGxlIGZyb20gJy4vU3RhdFRpdGxlJztcbmltcG9ydCBUYWJsZSBmcm9tICdyZWFjdHN0cmFwL2xpYi9UYWJsZSc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wVGFnc1RhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IHRvcFRhZ3MgPSBTdGF0aXN0aWNzLmNvbXB1dGVUb3BUYWdzKHRoaXMucHJvcHMuZG9jSW5mb3MsIDIwKTtcblxuICAgICAgICByZXR1cm4gPGRpdiBpZD1cInRvcC10YWdzLXRhYmxlXCI+XG4gICAgICAgICAgICA8U3RhdFRpdGxlPlRvcCBUYWdzPC9TdGF0VGl0bGU+XG4gICAgICAgICAgICA8VGFibGU+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICB7dG9wVGFncy5tYXAodG9wVGFnID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17dG9wVGFnLmtleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwdC0xIHBiLTFcIj57dG9wVGFnLmtleX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHQtMSBwYi0xXCI+e3RvcFRhZy52YWx1ZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+KX1cblxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICA8L2Rpdj47XG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSBkb2NJbmZvczogUmVhZG9ubHlBcnJheTxJRG9jSW5mbz47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlIHtcblxufVxuIl19