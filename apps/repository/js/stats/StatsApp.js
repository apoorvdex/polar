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
const NewDocumentRateChart_1 = __importDefault(require("./NewDocumentRateChart"));
const TopTagsChart_1 = __importDefault(require("./TopTagsChart"));
const TopTagsTable_1 = __importDefault(require("./TopTagsTable"));
const MessageBanner_1 = require("../MessageBanner");
const FixedNav_1 = require("../FixedNav");
const RepoHeader_1 = require("../repo_header/RepoHeader");
const ReadingProgressTable_1 = __importDefault(require("./ReadingProgressTable"));
const log = Logger_1.Logger.create();
class StatsApp extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    render() {
        const docInfos = Object.values(this.props.repoDocMetaManager.repoDocInfoIndex)
            .map(current => current.docInfo);
        return (React.createElement(FixedNav_1.FixedNav, { id: "doc-repository", className: "statistics-view" },
            React.createElement("header", null,
                React.createElement(RepoHeader_1.RepoHeader, { persistenceLayerManager: this.props.persistenceLayerManager }),
                React.createElement(MessageBanner_1.MessageBanner, null)),
            React.createElement(FixedNav_1.FixedNavBody, null,
                React.createElement("div", { className: "container-fluid" },
                    React.createElement("div", { className: "row mt-2" },
                        React.createElement("div", { className: "col-lg-12" },
                            React.createElement(ReadingProgressTable_1.default, { docInfos: docInfos }))),
                    React.createElement("div", { className: "row mt-2" },
                        React.createElement("div", { className: "col-lg-12" },
                            React.createElement(NewDocumentRateChart_1.default, { docInfos: docInfos }))),
                    React.createElement("div", { className: "row mt-2 tag-statistics" },
                        React.createElement("div", { className: "col-lg-8" },
                            React.createElement(TopTagsChart_1.default, { docInfos: docInfos })),
                        React.createElement("div", { className: "col-lg-4" },
                            React.createElement(TopTagsTable_1.default, { docInfos: docInfos })))))));
    }
}
exports.default = StatsApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdHNBcHAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTdGF0c0FwcC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLDZEQUF3RDtBQUd4RCxrRkFBMEQ7QUFDMUQsa0VBQTBDO0FBQzFDLGtFQUEwQztBQUMxQyxvREFBK0M7QUFDL0MsMENBQW1EO0FBQ25ELDBEQUFxRDtBQUVyRCxrRkFBMEQ7QUFFMUQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQXFCLFFBQVMsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFakUsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFDWixDQUFDO0lBRU4sQ0FBQztJQUVNLE1BQU07UUFFVCxNQUFNLFFBQVEsR0FDVixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUM7YUFDeEQsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXpDLE9BQU8sQ0FFSCxvQkFBQyxtQkFBUSxJQUFDLEVBQUUsRUFBQyxnQkFBZ0IsRUFBQyxTQUFTLEVBQUMsaUJBQWlCO1lBRXJEO2dCQUVJLG9CQUFDLHVCQUFVLElBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsR0FBRztnQkFFMUUsb0JBQUMsNkJBQWEsT0FBRSxDQUVYO1lBRVQsb0JBQUMsdUJBQVk7Z0JBRVQsNkJBQUssU0FBUyxFQUFDLGlCQUFpQjtvQkFFNUIsNkJBQUssU0FBUyxFQUFDLFVBQVU7d0JBRXJCLDZCQUFLLFNBQVMsRUFBQyxXQUFXOzRCQUN0QixvQkFBQyw4QkFBb0IsSUFBQyxRQUFRLEVBQUUsUUFBUSxHQUFHLENBQ3pDLENBRUo7b0JBRU4sNkJBQUssU0FBUyxFQUFDLFVBQVU7d0JBRXJCLDZCQUFLLFNBQVMsRUFBQyxXQUFXOzRCQUN0QixvQkFBQyw4QkFBb0IsSUFBQyxRQUFRLEVBQUUsUUFBUSxHQUFHLENBQ3pDLENBRUo7b0JBRU4sNkJBQUssU0FBUyxFQUFDLHlCQUF5Qjt3QkFFcEMsNkJBQUssU0FBUyxFQUFDLFVBQVU7NEJBQ3JCLG9CQUFDLHNCQUFZLElBQUMsUUFBUSxFQUFFLFFBQVEsR0FBRyxDQUNqQzt3QkFFTiw2QkFBSyxTQUFTLEVBQUMsVUFBVTs0QkFDckIsb0JBQUMsc0JBQVksSUFBQyxRQUFRLEVBQUUsUUFBUSxHQUFHLENBQ2pDLENBRUosQ0FFSixDQUVLLENBRVIsQ0FFZCxDQUFDO0lBQ04sQ0FBQztDQUVKO0FBckVELDJCQXFFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge1JlcG9TaWRlYmFyfSBmcm9tICcuLi9SZXBvU2lkZWJhcic7XG5pbXBvcnQge1JlcG9Eb2NNZXRhTWFuYWdlcn0gZnJvbSAnLi4vUmVwb0RvY01ldGFNYW5hZ2VyJztcbmltcG9ydCBOZXdEb2N1bWVudFJhdGVDaGFydCBmcm9tICcuL05ld0RvY3VtZW50UmF0ZUNoYXJ0JztcbmltcG9ydCBUb3BUYWdzQ2hhcnQgZnJvbSAnLi9Ub3BUYWdzQ2hhcnQnO1xuaW1wb3J0IFRvcFRhZ3NUYWJsZSBmcm9tICcuL1RvcFRhZ3NUYWJsZSc7XG5pbXBvcnQge01lc3NhZ2VCYW5uZXJ9IGZyb20gJy4uL01lc3NhZ2VCYW5uZXInO1xuaW1wb3J0IHtGaXhlZE5hdiwgRml4ZWROYXZCb2R5fSBmcm9tICcuLi9GaXhlZE5hdic7XG5pbXBvcnQge1JlcG9IZWFkZXJ9IGZyb20gJy4uL3JlcG9faGVhZGVyL1JlcG9IZWFkZXInO1xuaW1wb3J0IHtQZXJzaXN0ZW5jZUxheWVyTWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL2RhdGFzdG9yZS9QZXJzaXN0ZW5jZUxheWVyTWFuYWdlcic7XG5pbXBvcnQgUmVhZGluZ1Byb2dyZXNzVGFibGUgZnJvbSAnLi9SZWFkaW5nUHJvZ3Jlc3NUYWJsZSc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdHNBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgZG9jSW5mb3MgPVxuICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnByb3BzLnJlcG9Eb2NNZXRhTWFuYWdlci5yZXBvRG9jSW5mb0luZGV4KVxuICAgICAgICAgICAgICAgIC5tYXAoY3VycmVudCA9PiBjdXJyZW50LmRvY0luZm8pO1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxGaXhlZE5hdiBpZD1cImRvYy1yZXBvc2l0b3J5XCIgY2xhc3NOYW1lPVwic3RhdGlzdGljcy12aWV3XCI+XG5cbiAgICAgICAgICAgICAgICA8aGVhZGVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDxSZXBvSGVhZGVyIHBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyPXt0aGlzLnByb3BzLnBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyfS8+XG5cbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VCYW5uZXIvPlxuXG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgICAgICAgICA8Rml4ZWROYXZCb2R5PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTJcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFkaW5nUHJvZ3Jlc3NUYWJsZSBkb2NJbmZvcz17ZG9jSW5mb3N9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTJcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOZXdEb2N1bWVudFJhdGVDaGFydCBkb2NJbmZvcz17ZG9jSW5mb3N9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTIgdGFnLXN0YXRpc3RpY3NcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvcFRhZ3NDaGFydCBkb2NJbmZvcz17ZG9jSW5mb3N9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvcFRhZ3NUYWJsZSBkb2NJbmZvcz17ZG9jSW5mb3N9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L0ZpeGVkTmF2Qm9keT5cblxuICAgICAgICAgICAgPC9GaXhlZE5hdj5cblxuICAgICAgICApO1xuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgcGVyc2lzdGVuY2VMYXllck1hbmFnZXI6IFBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyO1xuICAgIHJlYWRvbmx5IHJlcG9Eb2NNZXRhTWFuYWdlcjogUmVwb0RvY01ldGFNYW5hZ2VyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZSB7XG5cbn1cbiJdfQ==