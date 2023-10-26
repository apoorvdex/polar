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
const Logger_1 = require("../../../../web/js/logger/Logger");
const WhatsNewContent_1 = require("../splash/splashes/whats_new/WhatsNewContent");
const FixedNav_1 = require("../FixedNav");
const RepoHeader_1 = require("../repo_header/RepoHeader");
const log = Logger_1.Logger.create();
class WhatsNewApp extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    render() {
        return (React.createElement(FixedNav_1.FixedNav, { id: "doc-repository" },
            React.createElement("header", null,
                React.createElement(RepoHeader_1.RepoHeader, { persistenceLayerManager: this.props.persistenceLayerManager })),
            React.createElement(FixedNav_1.FixedNavBody, { className: "container-fluid" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-lg-12 w-100" },
                        React.createElement(WhatsNewContent_1.WhatsNewContent, null))))));
    }
}
exports.default = WhatsNewApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2hhdHNOZXdBcHAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJXaGF0c05ld0FwcC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLDZEQUF3RDtBQUV4RCxrRkFBNkU7QUFDN0UsMENBQW1EO0FBQ25ELDBEQUFxRDtBQUdyRCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBcUIsV0FBWSxTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUVwRSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUNaLENBQUM7SUFFTixDQUFDO0lBRU0sTUFBTTtRQUVULE9BQU8sQ0FFSCxvQkFBQyxtQkFBUSxJQUFDLEVBQUUsRUFBQyxnQkFBZ0I7WUFFekI7Z0JBRUksb0JBQUMsdUJBQVUsSUFBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLHVCQUF1QixHQUFHLENBRXJFO1lBRVQsb0JBQUMsdUJBQVksSUFBQyxTQUFTLEVBQUMsaUJBQWlCO2dCQUVyQyw2QkFBSyxTQUFTLEVBQUMsS0FBSztvQkFFaEIsNkJBQUssU0FBUyxFQUFDLGlCQUFpQjt3QkFDNUIsb0JBQUMsaUNBQWUsT0FBRSxDQUNoQixDQUNKLENBRUssQ0FFUixDQUVkLENBQUM7SUFDTixDQUFDO0NBRUo7QUF0Q0QsOEJBc0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7UmVwb1NpZGViYXJ9IGZyb20gJy4uL1JlcG9TaWRlYmFyJztcbmltcG9ydCB7V2hhdHNOZXdDb250ZW50fSBmcm9tICcuLi9zcGxhc2gvc3BsYXNoZXMvd2hhdHNfbmV3L1doYXRzTmV3Q29udGVudCc7XG5pbXBvcnQge0ZpeGVkTmF2LCBGaXhlZE5hdkJvZHl9IGZyb20gJy4uL0ZpeGVkTmF2JztcbmltcG9ydCB7UmVwb0hlYWRlcn0gZnJvbSAnLi4vcmVwb19oZWFkZXIvUmVwb0hlYWRlcic7XG5pbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL1BlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaGF0c05ld0FwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8Rml4ZWROYXYgaWQ9XCJkb2MtcmVwb3NpdG9yeVwiPlxuXG4gICAgICAgICAgICAgICAgPGhlYWRlcj5cblxuICAgICAgICAgICAgICAgICAgICA8UmVwb0hlYWRlciBwZXJzaXN0ZW5jZUxheWVyTWFuYWdlcj17dGhpcy5wcm9wcy5wZXJzaXN0ZW5jZUxheWVyTWFuYWdlcn0vPlxuXG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgICAgICAgICA8Rml4ZWROYXZCb2R5IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIHctMTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdoYXRzTmV3Q29udGVudC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L0ZpeGVkTmF2Qm9keT5cblxuICAgICAgICAgICAgPC9GaXhlZE5hdj5cblxuICAgICAgICApO1xuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgcGVyc2lzdGVuY2VMYXllck1hbmFnZXI6IFBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZSB7XG5cbn1cbiJdfQ==