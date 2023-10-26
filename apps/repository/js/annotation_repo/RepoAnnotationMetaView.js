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
const DocRepoTableColumns_1 = require("../doc_repo/DocRepoTableColumns");
const react_moment_1 = __importDefault(require("react-moment"));
const FormattedTags_1 = require("../FormattedTags");
const Logger_1 = require("../../../../web/js/logger/Logger");
const SynchronizingDocLoader_1 = require("../util/SynchronizingDocLoader");
const Button_1 = __importDefault(require("reactstrap/lib/Button"));
const log = Logger_1.Logger.create();
const Styles = {
    metaTable: {
        display: 'table'
    },
    metaTableRow: {
        display: 'table-row'
    },
    metaField: {
        display: 'table-cell',
        color: 'var(--secondary)',
        marginRight: '10px',
        verticalAlign: 'top'
    },
    metaValue: {
        paddingLeft: '5px',
        display: 'table-cell',
        verticalAlign: 'top'
    },
    annotationText: {
        paddingTop: '5px'
    },
    relativeTime: {
        marginLeft: '5px',
        color: 'var(--secondary)',
        display: 'inline'
    }
};
class RepoAnnotationMetaView extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.synchronizingDocLoader = new SynchronizingDocLoader_1.SynchronizingDocLoader(this.props.persistenceLayerManager);
        this.state = {
            data: [],
            columns: new DocRepoTableColumns_1.DocRepoTableColumns()
        };
    }
    render() {
        if (this.props.repoAnnotation) {
            const repoAnnotation = this.props.repoAnnotation;
            return (React.createElement("div", null,
                React.createElement("div", { style: Styles.metaTable },
                    React.createElement("div", { style: Styles.metaTableRow },
                        React.createElement("div", { style: Styles.metaField }, "Created"),
                        React.createElement("div", { style: Styles.metaValue },
                            React.createElement(react_moment_1.default, { withTitle: true, titleFormat: "D MMM YYYY hh:MM A", format: "MMM DD YYYY HH:mm A", filter: (value) => value.replace(/^an? /g, '1 ') }, repoAnnotation.created),
                            React.createElement("div", { style: Styles.relativeTime },
                                "(",
                                React.createElement(react_moment_1.default, { withTitle: true, titleFormat: "D MMM YYYY hh:MM A", fromNow: true }, repoAnnotation.created),
                                ")"))),
                    React.createElement("div", { style: Styles.metaTableRow },
                        React.createElement("div", { style: Styles.metaField }, "Tags"),
                        React.createElement("div", { style: Styles.metaValue },
                            React.createElement(FormattedTags_1.FormattedTags, { tags: repoAnnotation.tags || {} }))),
                    React.createElement("div", { style: Styles.metaTableRow },
                        React.createElement("div", { style: Styles.metaField }, "Type"),
                        React.createElement("div", { style: Styles.metaValue }, repoAnnotation.type)),
                    React.createElement("div", { style: Styles.metaTableRow },
                        React.createElement("div", { style: Styles.metaField }, "Doc"),
                        React.createElement("div", { style: Styles.metaValue },
                            React.createElement(Button_1.default, { onClick: () => this.onDocumentLoadRequested(repoAnnotation.docInfo), style: { whiteSpace: 'normal', textAlign: 'left' }, className: "p-0", size: "sm", color: "link" }, repoAnnotation.docInfo.title)))),
                React.createElement("div", { style: Styles.annotationText }, repoAnnotation.text)));
        }
        else {
            return (React.createElement("div", { className: "text-muted text-center" }, "No annotation selected."));
        }
    }
    onDocumentLoadRequested(docInfo) {
        this.synchronizingDocLoader.load(docInfo.fingerprint, docInfo.filename, docInfo.hashcode)
            .catch(err => log.error("Unable to load doc: ", err));
    }
}
exports.RepoAnnotationMetaView = RepoAnnotationMetaView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb0Fubm90YXRpb25NZXRhVmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlJlcG9Bbm5vdGF0aW9uTWV0YVZpZXcudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQix5RUFBb0U7QUFLcEUsZ0VBQWtDO0FBQ2xDLG9EQUErQztBQUMvQyw2REFBd0Q7QUFDeEQsMkVBQXNFO0FBQ3RFLG1FQUEyQztBQUUzQyxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBTSxNQUFNLEdBQWM7SUFFdEIsU0FBUyxFQUFFO1FBQ1AsT0FBTyxFQUFFLE9BQU87S0FDbkI7SUFFRCxZQUFZLEVBQUU7UUFDVixPQUFPLEVBQUUsV0FBVztLQUN2QjtJQUVELFNBQVMsRUFBRTtRQUNQLE9BQU8sRUFBRSxZQUFZO1FBRXJCLEtBQUssRUFBRSxrQkFBa0I7UUFDekIsV0FBVyxFQUFFLE1BQU07UUFDbkIsYUFBYSxFQUFFLEtBQUs7S0FDdkI7SUFFRCxTQUFTLEVBQUU7UUFDUCxXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsWUFBWTtRQUNyQixhQUFhLEVBQUUsS0FBSztLQUN2QjtJQUVELGNBQWMsRUFBRTtRQUNaLFVBQVUsRUFBRSxLQUFLO0tBQ3BCO0lBRUQsWUFBWSxFQUFFO1FBQ1YsVUFBVSxFQUFFLEtBQUs7UUFDakIsS0FBSyxFQUFFLGtCQUFrQjtRQUN6QixPQUFPLEVBQUUsUUFBUTtLQUNwQjtDQUVKLENBQUM7QUFFRixNQUFhLHNCQUF1QixTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUl2RSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksK0NBQXNCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBRTdGLElB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QUM7SUFFOUQsQ0FBQztDQUVKO0FBeklELHdEQXlJQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RG9jUmVwb1RhYmxlQ29sdW1uc30gZnJvbSAnLi4vZG9jX3JlcG8vRG9jUmVwb1RhYmxlQ29sdW1ucyc7XG5pbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL1BlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyJztcbmltcG9ydCB7SURvY0luZm99IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy9tZXRhZGF0YS9Eb2NJbmZvJztcbmltcG9ydCB7UmVwb0Fubm90YXRpb259IGZyb20gJy4uL1JlcG9Bbm5vdGF0aW9uJztcbmltcG9ydCB7SVN0eWxlTWFwfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvcmVhY3QvSVN0eWxlTWFwJztcbmltcG9ydCBNb21lbnQgZnJvbSAncmVhY3QtbW9tZW50JztcbmltcG9ydCB7Rm9ybWF0dGVkVGFnc30gZnJvbSAnLi4vRm9ybWF0dGVkVGFncyc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtTeW5jaHJvbml6aW5nRG9jTG9hZGVyfSBmcm9tICcuLi91dGlsL1N5bmNocm9uaXppbmdEb2NMb2FkZXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdHN0cmFwL2xpYi9CdXR0b24nO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmNvbnN0IFN0eWxlczogSVN0eWxlTWFwID0ge1xuXG4gICAgbWV0YVRhYmxlOiB7XG4gICAgICAgIGRpc3BsYXk6ICd0YWJsZSdcbiAgICB9LFxuXG4gICAgbWV0YVRhYmxlUm93OiB7XG4gICAgICAgIGRpc3BsYXk6ICd0YWJsZS1yb3cnXG4gICAgfSxcblxuICAgIG1ldGFGaWVsZDoge1xuICAgICAgICBkaXNwbGF5OiAndGFibGUtY2VsbCcsXG4gICAgICAgIC8vIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgICAgY29sb3I6ICd2YXIoLS1zZWNvbmRhcnkpJyxcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICcxMHB4JyxcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCdcbiAgICB9LFxuXG4gICAgbWV0YVZhbHVlOiB7XG4gICAgICAgIHBhZGRpbmdMZWZ0OiAnNXB4JyxcbiAgICAgICAgZGlzcGxheTogJ3RhYmxlLWNlbGwnLFxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJ1xuICAgIH0sXG5cbiAgICBhbm5vdGF0aW9uVGV4dDoge1xuICAgICAgICBwYWRkaW5nVG9wOiAnNXB4J1xuICAgIH0sXG5cbiAgICByZWxhdGl2ZVRpbWU6IHtcbiAgICAgICAgbWFyZ2luTGVmdDogJzVweCcsXG4gICAgICAgIGNvbG9yOiAndmFyKC0tc2Vjb25kYXJ5KScsXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUnXG4gICAgfVxuXG59O1xuXG5leHBvcnQgY2xhc3MgUmVwb0Fubm90YXRpb25NZXRhVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBzeW5jaHJvbml6aW5nRG9jTG9hZGVyOiBTeW5jaHJvbml6aW5nRG9jTG9hZGVyO1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLnN5bmNocm9uaXppbmdEb2NMb2FkZXIgPSBuZXcgU3luY2hyb25pemluZ0RvY0xvYWRlcih0aGlzLnByb3BzLnBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZGF0YTogW10sXG4gICAgICAgICAgICBjb2x1bW5zOiBuZXcgRG9jUmVwb1RhYmxlQ29sdW1ucygpXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnJlcG9Bbm5vdGF0aW9uKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlcG9Bbm5vdGF0aW9uID0gdGhpcy5wcm9wcy5yZXBvQW5ub3RhdGlvbjtcblxuICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17U3R5bGVzLm1ldGFUYWJsZX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e1N0eWxlcy5tZXRhVGFibGVSb3d9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e1N0eWxlcy5tZXRhRmllbGR9PkNyZWF0ZWQ8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e1N0eWxlcy5tZXRhVmFsdWV9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb21lbnQgd2l0aFRpdGxlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlRm9ybWF0PVwiRCBNTU0gWVlZWSBoaDpNTSBBXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9XCJNTU0gREQgWVlZWSBISDptbSBBXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI9eyh2YWx1ZSkgPT4gdmFsdWUucmVwbGFjZSgvXmFuPyAvZywgJzEgJyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlcG9Bbm5vdGF0aW9uLmNyZWF0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTW9tZW50PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e1N0eWxlcy5yZWxhdGl2ZVRpbWV9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb21lbnQgd2l0aFRpdGxlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZUZvcm1hdD1cIkQgTU1NIFlZWVkgaGg6TU0gQVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21Ob3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlcG9Bbm5vdGF0aW9uLmNyZWF0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01vbWVudD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtTdHlsZXMubWV0YVRhYmxlUm93fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e1N0eWxlcy5tZXRhRmllbGR9PlRhZ3M8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e1N0eWxlcy5tZXRhVmFsdWV9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRUYWdzIHRhZ3M9e3JlcG9Bbm5vdGF0aW9uLnRhZ3MgfHwge319Lz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17U3R5bGVzLm1ldGFUYWJsZVJvd30+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtTdHlsZXMubWV0YUZpZWxkfT5UeXBlPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtTdHlsZXMubWV0YVZhbHVlfT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVwb0Fubm90YXRpb24udHlwZX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17U3R5bGVzLm1ldGFUYWJsZVJvd30+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtTdHlsZXMubWV0YUZpZWxkfT5Eb2M8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e1N0eWxlcy5tZXRhVmFsdWV9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKlRPRE86IG1ha2UgdGhpcyBpbnRvIGEgVGV4dExpbmsgY29tcG9uZW50Ki99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uRG9jdW1lbnRMb2FkUmVxdWVzdGVkKHJlcG9Bbm5vdGF0aW9uLmRvY0luZm8pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2hpdGVTcGFjZTogJ25vcm1hbCcsIHRleHRBbGlnbjogJ2xlZnQnfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJsaW5rXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXBvQW5ub3RhdGlvbi5kb2NJbmZvLnRpdGxlfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e1N0eWxlcy5hbm5vdGF0aW9uVGV4dH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cmVwb0Fubm90YXRpb24udGV4dH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIE5vIGFubm90YXRpb24gc2VsZWN0ZWQuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkRvY3VtZW50TG9hZFJlcXVlc3RlZChkb2NJbmZvOiBJRG9jSW5mbykge1xuXG4gICAgICAgIHRoaXMuc3luY2hyb25pemluZ0RvY0xvYWRlci5sb2FkKGRvY0luZm8uZmluZ2VycHJpbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY0luZm8uZmlsZW5hbWUhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2NJbmZvLmhhc2hjb2RlKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJVbmFibGUgdG8gbG9hZCBkb2M6IFwiLCBlcnIpKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XG5cbiAgICByZWFkb25seSBwZXJzaXN0ZW5jZUxheWVyTWFuYWdlcjogUGVyc2lzdGVuY2VMYXllck1hbmFnZXI7XG4gICAgcmVhZG9ubHkgcmVwb0Fubm90YXRpb24/OiBSZXBvQW5ub3RhdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3RhdGUge1xuXG59XG5cbiJdfQ==