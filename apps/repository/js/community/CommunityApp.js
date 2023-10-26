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
const MessageBanner_1 = require("../MessageBanner");
const CommunityContent_1 = __importDefault(require("./CommunityContent"));
const RepoHeader_1 = require("../repo_header/RepoHeader");
const log = Logger_1.Logger.create();
class CommunityApp extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    render() {
        return (React.createElement("div", { id: "doc-repository" },
            React.createElement("header", null,
                React.createElement(RepoHeader_1.RepoHeader, { persistenceLayerManager: this.props.persistenceLayerManager })),
            React.createElement(MessageBanner_1.MessageBanner, null),
            React.createElement("div", { className: "m-1" },
                React.createElement(CommunityContent_1.default, null))));
    }
}
exports.default = CommunityApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbXVuaXR5QXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ29tbXVuaXR5QXBwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsNkRBQXdEO0FBRXhELG9EQUErQztBQUMvQywwRUFBa0Q7QUFDbEQsMERBQXFEO0FBR3JELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFxQixZQUFhLFNBQVEsS0FBSyxDQUFDLFNBQXlCO0lBRXJFLFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQ1osQ0FBQztJQUVOLENBQUM7SUFFTSxNQUFNO1FBRVQsT0FBTyxDQUVILDZCQUFLLEVBQUUsRUFBQyxnQkFBZ0I7WUFFcEI7Z0JBRUksb0JBQUMsdUJBQVUsSUFBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLHVCQUF1QixHQUFHLENBRXJFO1lBRVQsb0JBQUMsNkJBQWEsT0FBRTtZQUVoQiw2QkFBSyxTQUFTLEVBQUMsS0FBSztnQkFDaEIsb0JBQUMsMEJBQWdCLE9BQUUsQ0FDakIsQ0FFSixDQUVULENBQUM7SUFDTixDQUFDO0NBRUo7QUFqQ0QsK0JBaUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7UmVwb1NpZGViYXJ9IGZyb20gJy4uL1JlcG9TaWRlYmFyJztcbmltcG9ydCB7TWVzc2FnZUJhbm5lcn0gZnJvbSAnLi4vTWVzc2FnZUJhbm5lcic7XG5pbXBvcnQgQ29tbXVuaXR5Q29udGVudCBmcm9tICcuL0NvbW11bml0eUNvbnRlbnQnO1xuaW1wb3J0IHtSZXBvSGVhZGVyfSBmcm9tICcuLi9yZXBvX2hlYWRlci9SZXBvSGVhZGVyJztcbmltcG9ydCB7UGVyc2lzdGVuY2VMYXllck1hbmFnZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy9kYXRhc3RvcmUvUGVyc2lzdGVuY2VMYXllck1hbmFnZXInO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW11bml0eUFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2IGlkPVwiZG9jLXJlcG9zaXRvcnlcIj5cblxuICAgICAgICAgICAgICAgIDxoZWFkZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPFJlcG9IZWFkZXIgcGVyc2lzdGVuY2VMYXllck1hbmFnZXI9e3RoaXMucHJvcHMucGVyc2lzdGVuY2VMYXllck1hbmFnZXJ9Lz5cblxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgICAgICAgICAgPE1lc3NhZ2VCYW5uZXIvPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPENvbW11bml0eUNvbnRlbnQvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgcGVyc2lzdGVuY2VMYXllck1hbmFnZXI6IFBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZSB7XG5cbn1cbiJdfQ==