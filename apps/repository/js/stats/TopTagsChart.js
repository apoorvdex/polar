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
const pie_1 = require("@nivo/pie");
const StatTitle_1 = __importDefault(require("./StatTitle"));
const log = Logger_1.Logger.create();
class TopTagsChart extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    render() {
        const topTags = Statistics_1.Statistics.computeTopTags(this.props.docInfos, 10);
        const data = topTags.map(current => {
            return {
                id: current.key,
                label: current.key,
                value: current.value
            };
        });
        return (React.createElement("div", { id: "top-tags-chart", className: "p-1" },
            React.createElement(StatTitle_1.default, null, "Top Tags"),
            React.createElement("div", { style: { height: '600px', width: '100%' } },
                React.createElement(pie_1.ResponsivePie, { data: data, margin: {
                        "top": 40,
                        "right": 80,
                        "bottom": 80,
                        "left": 80
                    }, innerRadius: 0.5, padAngle: 0.7, cornerRadius: 3, colors: "category10", colorBy: "id", borderWidth: 1, borderColor: "inherit:darker(0.2)", radialLabelsSkipAngle: 10, radialLabelsTextXOffset: 6, radialLabelsTextColor: "#333333", radialLabelsLinkOffset: 0, radialLabelsLinkDiagonalLength: 16, radialLabelsLinkHorizontalLength: 24, radialLabelsLinkStrokeWidth: 1, radialLabelsLinkColor: "inherit", slicesLabelsSkipAngle: 10, slicesLabelsTextColor: "#333333", animate: true, motionStiffness: 90, motionDamping: 15 }))));
    }
}
exports.default = TopTagsChart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9wVGFnc0NoYXJ0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVG9wVGFnc0NoYXJ0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsNkRBQXdEO0FBQ3hELHVFQUFrRTtBQUVsRSxtQ0FBd0M7QUFDeEMsNERBQW9DO0FBRXBDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFxQixZQUFhLFNBQVEsS0FBSyxDQUFDLFNBQXlCO0lBRXJFLFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQ1osQ0FBQztJQUVOLENBQUM7SUFFTSxNQUFNO1FBRVQsTUFBTSxPQUFPLEdBQUcsdUJBQVUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFbkUsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUMvQixPQUFPO2dCQUNILEVBQUUsRUFBRSxPQUFPLENBQUMsR0FBRztnQkFDZixLQUFLLEVBQUUsT0FBTyxDQUFDLEdBQUc7Z0JBQ2xCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSzthQUN2QixDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLENBRUgsNkJBQUssRUFBRSxFQUFDLGdCQUFnQixFQUFDLFNBQVMsRUFBQyxLQUFLO1lBRXBDLG9CQUFDLG1CQUFTLG1CQUFxQjtZQUUvQiw2QkFBSyxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUM7Z0JBRXhDLG9CQUFDLG1CQUFhLElBQ1YsSUFBSSxFQUFFLElBQUksRUFDVixNQUFNLEVBQUU7d0JBQ0osS0FBSyxFQUFFLEVBQUU7d0JBQ1QsT0FBTyxFQUFFLEVBQUU7d0JBQ1gsUUFBUSxFQUFFLEVBQUU7d0JBQ1osTUFBTSxFQUFFLEVBQUU7cUJBQ2IsRUFDRCxXQUFXLEVBQUUsR0FBRyxFQUNoQixRQUFRLEVBQUUsR0FBRyxFQUNiLFlBQVksRUFBRSxDQUFDLEVBQ2YsTUFBTSxFQUFDLFlBQVksRUFDbkIsT0FBTyxFQUFDLElBQUksRUFDWixXQUFXLEVBQUUsQ0FBQyxFQUNkLFdBQVcsRUFBQyxxQkFBcUIsRUFDakMscUJBQXFCLEVBQUUsRUFBRSxFQUN6Qix1QkFBdUIsRUFBRSxDQUFDLEVBQzFCLHFCQUFxQixFQUFDLFNBQVMsRUFDL0Isc0JBQXNCLEVBQUUsQ0FBQyxFQUN6Qiw4QkFBOEIsRUFBRSxFQUFFLEVBQ2xDLGdDQUFnQyxFQUFFLEVBQUUsRUFDcEMsMkJBQTJCLEVBQUUsQ0FBQyxFQUM5QixxQkFBcUIsRUFBQyxTQUFTLEVBQy9CLHFCQUFxQixFQUFFLEVBQUUsRUFDekIscUJBQXFCLEVBQUMsU0FBUyxFQUMvQixPQUFPLEVBQUUsSUFBSSxFQUNiLGVBQWUsRUFBRSxFQUFFLEVBQ25CLGFBQWEsRUFBRSxFQUFFLEdBRW5CLENBQ0EsQ0FDSixDQUVULENBQUM7SUFDTixDQUFDO0NBRUo7QUFsRUQsK0JBa0VDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7U3RhdGlzdGljc30gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL21ldGFkYXRhL1N0YXRpc3RpY3MnO1xuaW1wb3J0IHtJRG9jSW5mb30gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL21ldGFkYXRhL0RvY0luZm8nO1xuaW1wb3J0IHtSZXNwb25zaXZlUGllfSBmcm9tICdAbml2by9waWUnO1xuaW1wb3J0IFN0YXRUaXRsZSBmcm9tICcuL1N0YXRUaXRsZSc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wVGFnc0NoYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IHRvcFRhZ3MgPSBTdGF0aXN0aWNzLmNvbXB1dGVUb3BUYWdzKHRoaXMucHJvcHMuZG9jSW5mb3MsIDEwKTtcblxuICAgICAgICBjb25zdCBkYXRhID0gdG9wVGFncy5tYXAoY3VycmVudCA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBjdXJyZW50LmtleSxcbiAgICAgICAgICAgICAgICBsYWJlbDogY3VycmVudC5rZXksXG4gICAgICAgICAgICAgICAgdmFsdWU6IGN1cnJlbnQudmFsdWVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ0b3AtdGFncy1jaGFydFwiIGNsYXNzTmFtZT1cInAtMVwiPlxuXG4gICAgICAgICAgICAgICAgPFN0YXRUaXRsZT5Ub3AgVGFnczwvU3RhdFRpdGxlPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogJzYwMHB4Jywgd2lkdGg6ICcxMDAlJ319PlxuXG4gICAgICAgICAgICAgICAgICAgIDxSZXNwb25zaXZlUGllXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjogNDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiA4MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbVwiOiA4MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogODBcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lclJhZGl1cz17MC41fVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkQW5nbGU9ezAuN31cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvcm5lclJhZGl1cz17M31cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycz1cImNhdGVnb3J5MTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JCeT1cImlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoPXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I9XCJpbmhlcml0OmRhcmtlcigwLjIpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhZGlhbExhYmVsc1NraXBBbmdsZT17MTB9XG4gICAgICAgICAgICAgICAgICAgICAgICByYWRpYWxMYWJlbHNUZXh0WE9mZnNldD17Nn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJhZGlhbExhYmVsc1RleHRDb2xvcj1cIiMzMzMzMzNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmFkaWFsTGFiZWxzTGlua09mZnNldD17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJhZGlhbExhYmVsc0xpbmtEaWFnb25hbExlbmd0aD17MTZ9XG4gICAgICAgICAgICAgICAgICAgICAgICByYWRpYWxMYWJlbHNMaW5rSG9yaXpvbnRhbExlbmd0aD17MjR9XG4gICAgICAgICAgICAgICAgICAgICAgICByYWRpYWxMYWJlbHNMaW5rU3Ryb2tlV2lkdGg9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICByYWRpYWxMYWJlbHNMaW5rQ29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWNlc0xhYmVsc1NraXBBbmdsZT17MTB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGljZXNMYWJlbHNUZXh0Q29sb3I9XCIjMzMzMzMzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3Rpb25TdGlmZm5lc3M9ezkwfVxuICAgICAgICAgICAgICAgICAgICAgICAgbW90aW9uRGFtcGluZz17MTV9XG5cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSBkb2NJbmZvczogUmVhZG9ubHlBcnJheTxJRG9jSW5mbz47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlIHtcblxufVxuXG4iXX0=