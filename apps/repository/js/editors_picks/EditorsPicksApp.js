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
const EditorsPicksContent_1 = require("./EditorsPicksContent");
const RepoHeader_1 = require("../repo_header/RepoHeader");
class EditorsPicksApp extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    render() {
        return (React.createElement("div", { id: "doc-repository" },
            React.createElement("header", null,
                React.createElement(RepoHeader_1.RepoHeader, { persistenceLayerManager: this.props.persistenceLayerManager })),
            React.createElement("div", { className: "m-1" },
                React.createElement("h3", null, "Suggested Content"),
                React.createElement("p", { className: "text-muted", style: { fontSize: '18px' } }, "In order to get you up and running quickly, we've compiled a list of interesting documents you might like to start with."),
                React.createElement("p", null, "When you add any of these documents they will be automatically downloaded and added to your repository."),
                React.createElement(EditorsPicksContent_1.EditorsPicksContent, null))));
    }
}
exports.default = EditorsPicksApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWRpdG9yc1BpY2tzQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRWRpdG9yc1BpY2tzQXBwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsK0RBQTBEO0FBQzFELDBEQUFxRDtBQUlyRCxNQUFxQixlQUFnQixTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUV4RSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUNaLENBQUM7SUFFTixDQUFDO0lBRU0sTUFBTTtRQUVULE9BQU8sQ0FFSCw2QkFBSyxFQUFFLEVBQUMsZ0JBQWdCO1lBRXBCO2dCQUNJLG9CQUFDLHVCQUFVLElBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsR0FBRyxDQUNyRTtZQUdULDZCQUFLLFNBQVMsRUFBQyxLQUFLO2dCQUVoQixvREFBMEI7Z0JBRTFCLDJCQUFHLFNBQVMsRUFBQyxZQUFZLEVBQUMsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLE1BQU0sRUFBQywrSEFHL0M7Z0JBRUoseUlBR0k7Z0JBRUosb0JBQUMseUNBQW1CLE9BQUUsQ0FFcEIsQ0FFSixDQUVULENBQUM7SUFDTixDQUFDO0NBRUo7QUE1Q0Qsa0NBNENDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFZGl0b3JzUGlja3NDb250ZW50fSBmcm9tICcuL0VkaXRvcnNQaWNrc0NvbnRlbnQnO1xuaW1wb3J0IHtSZXBvSGVhZGVyfSBmcm9tICcuLi9yZXBvX2hlYWRlci9SZXBvSGVhZGVyJztcbmltcG9ydCB7TWVzc2FnZUJhbm5lcn0gZnJvbSAnLi4vTWVzc2FnZUJhbm5lcic7XG5pbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL1BlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdG9yc1BpY2tzQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJkb2MtcmVwb3NpdG9yeVwiPlxuXG4gICAgICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPFJlcG9IZWFkZXIgcGVyc2lzdGVuY2VMYXllck1hbmFnZXI9e3RoaXMucHJvcHMucGVyc2lzdGVuY2VMYXllck1hbmFnZXJ9Lz5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cblxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTFcIj5cblxuICAgICAgICAgICAgICAgICAgICA8aDM+U3VnZ2VzdGVkIENvbnRlbnQ8L2gzPlxuXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIiBzdHlsZT17e2ZvbnRTaXplOiAnMThweCd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEluIG9yZGVyIHRvIGdldCB5b3UgdXAgYW5kIHJ1bm5pbmcgcXVpY2tseSwgd2UndmUgY29tcGlsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGEgbGlzdCBvZiBpbnRlcmVzdGluZyBkb2N1bWVudHMgeW91IG1pZ2h0IGxpa2UgdG8gc3RhcnQgd2l0aC5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgV2hlbiB5b3UgYWRkIGFueSBvZiB0aGVzZSBkb2N1bWVudHMgdGhleSB3aWxsIGJlIGF1dG9tYXRpY2FsbHlcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvd25sb2FkZWQgYW5kIGFkZGVkIHRvIHlvdXIgcmVwb3NpdG9yeS5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgIDxFZGl0b3JzUGlja3NDb250ZW50Lz5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgcGVyc2lzdGVuY2VMYXllck1hbmFnZXI6IFBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlIHtcblxufVxuXG4iXX0=