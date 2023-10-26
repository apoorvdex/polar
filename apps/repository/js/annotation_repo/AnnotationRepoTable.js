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
const react_table_1 = __importDefault(require("react-table"));
const Logger_1 = require("../../../../web/js/logger/Logger");
const DateTimeTableCell_1 = require("../DateTimeTableCell");
const SimpleReactor_1 = require("../../../../web/js/reactor/SimpleReactor");
const PersistenceLayerManagers_1 = require("../../../../web/js/datastore/PersistenceLayerManagers");
const RepoDocMetaLoaders_1 = require("../RepoDocMetaLoaders");
const ExtendedReactTable_1 = require("../util/ExtendedReactTable");
const AnnotationIcon_1 = require("../../../../web/js/ui/standard_icons/AnnotationIcon");
const log = Logger_1.Logger.create();
class AnnotationRepoTable extends ExtendedReactTable_1.ExtendedReactTable {
    constructor(props, context) {
        super(props, context);
        this.syncBarProgress = new SimpleReactor_1.SimpleReactor();
        this.persistenceLayerManager = this.props.persistenceLayerManager;
        this.state = {
            data: [],
        };
        this.init();
        this.refresh();
    }
    init() {
        PersistenceLayerManagers_1.PersistenceLayerManagers.onPersistenceManager(this.props.persistenceLayerManager, (persistenceLayer) => {
            this.releaser.register(persistenceLayer.addEventListener(() => this.refresh()));
        });
        this.releaser.register(RepoDocMetaLoaders_1.RepoDocMetaLoaders.addThrottlingEventListener(this.props.repoDocMetaLoader, () => this.refresh()));
    }
    onSelected(selected, repoAnnotation) {
        this.setState(Object.assign({}, this.state, { selected, repoAnnotation }));
        this.props.onSelected(repoAnnotation);
    }
    render() {
        const { data } = this.state;
        return (React.createElement("div", { id: "doc-repo-table" },
            React.createElement("div", { id: "doc-table" },
                React.createElement(react_table_1.default, { data: data, columns: [
                        {
                            Header: '',
                            accessor: 'type',
                            maxWidth: 30,
                            Cell: (row) => {
                                return (React.createElement("div", { className: "text-center" },
                                    React.createElement(AnnotationIcon_1.AnnotationIcon, { type: row.original.type, color: row.original.color })));
                            }
                        },
                        {
                            Header: '',
                            accessor: 'title',
                            Cell: (row) => {
                                const id = 'annotation-title' + row.index;
                                return (React.createElement("div", { id: id },
                                    React.createElement("div", null, row.original.text || 'no text')));
                            }
                        },
                        {
                            Header: 'Created',
                            accessor: 'created',
                            show: true,
                            maxWidth: 100,
                            defaultSortDesc: true,
                            Cell: (row) => (React.createElement(DateTimeTableCell_1.DateTimeTableCell, { className: "doc-col-last-updated", datetime: row.original.created }))
                        },
                        {
                            id: 'tags',
                            Header: 'Tags',
                            accessor: '',
                            show: true,
                            width: 200,
                            Cell: (row) => {
                                const tags = row.original.tags;
                                const formatted = Object.values(tags)
                                    .map(tag => tag.label)
                                    .sort()
                                    .join(", ");
                                return (React.createElement("div", null, formatted));
                            }
                        },
                    ], defaultPageSize: 50, noDataText: "No annotations available.", className: "-striped -highlight", defaultSorted: [
                        {
                            id: "created",
                            desc: true
                        }
                    ], getTrProps: (state, rowInfo) => {
                        return {
                            onClick: (e) => {
                                const repoAnnotation = rowInfo.original;
                                this.onSelected(rowInfo.viewIndex, repoAnnotation);
                            },
                            style: {
                                background: rowInfo && rowInfo.viewIndex === this.state.selected ? '#00afec' : 'white',
                                color: rowInfo && rowInfo.viewIndex === this.state.selected ? 'white' : 'black',
                            }
                        };
                    }, getTdProps: (state, rowInfo, column, instance) => {
                        const singleClickColumns = [];
                        if (!singleClickColumns.includes(column.id)) {
                            return {
                                onDoubleClick: (e) => {
                                }
                            };
                        }
                        if (singleClickColumns.includes(column.id)) {
                            return {
                                onClick: ((e, handleOriginal) => {
                                    if (handleOriginal) {
                                        handleOriginal();
                                    }
                                })
                            };
                        }
                        return {};
                    } }))));
    }
    refresh() {
        const data = Object.values(this.props.repoDocMetaManager.repoAnnotationIndex);
        this.doRefresh(this.filter(data));
    }
    filter(data) {
        return data;
    }
    doRefresh(data) {
        const state = Object.assign({}, this.state, { data });
        setTimeout(() => {
            this.setState(state);
        }, 1);
    }
}
exports.default = AnnotationRepoTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ub3RhdGlvblJlcG9UYWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFubm90YXRpb25SZXBvVGFibGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiw4REFBcUM7QUFDckMsNkRBQXdEO0FBR3hELDREQUF1RDtBQUd2RCw0RUFBeUY7QUFLekYsb0dBQStGO0FBQy9GLDhEQUF5RDtBQUN6RCxtRUFBZ0Y7QUFDaEYsd0ZBQW1GO0FBR25GLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFxQixtQkFBb0IsU0FBUSx1Q0FBa0M7SUFNL0UsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBSFQsb0JBQWUsR0FBc0MsSUFBSSw2QkFBYSxFQUFFLENBQUM7UUFLdEYsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUM7UUFFbEUsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULElBQUksRUFBRSxFQUFFO1NBQ1gsQ0FBQztRQUVGLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUVuQixDQUFDO0lBRU0sSUFBSTtRQUVQLG1EQUF3QixDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFO1lBRW5HLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUNsQixnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRWpFLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQ2xCLHVDQUFrQixDQUFDLDBCQUEwQixD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Q0FBQyxDQUFDOzZCQUVMLENBQUM7eUJBRUw7d0JBRUQsT0FBTyxFQUFFLENBQUM7b0JBRWQsQ0FBQyxHQUVILENBRUEsQ0FFSixDQUVULENBQUM7SUFDTixDQUFDO0lBRU0sT0FBTztRQUNWLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTyxNQUFNLENBQUMsSUFBc0I7UUFDakMsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVPLFNBQVMsQ0FBQyxJQUFzQjtRQVFwQyxNQUFNLEtBQUsscUJBQWUsSUFBSSxDQUFDLEtBQUssSUFBRSxJQUFJLEdBQUMsQ0FBQztRQUU1QyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBSVosSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV6QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFVixDQUFDO0NBRUo7QUEzT0Qsc0NBMk9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0VGFibGUgZnJvbSBcInJlYWN0LXRhYmxlXCI7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtUYWd9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy90YWdzL1RhZyc7XG5pbXBvcnQge1RhZ3N9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy90YWdzL1RhZ3MnO1xuaW1wb3J0IHtEYXRlVGltZVRhYmxlQ2VsbH0gZnJvbSAnLi4vRGF0ZVRpbWVUYWJsZUNlbGwnO1xuaW1wb3J0IHtJRG9jSW5mb30gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL21ldGFkYXRhL0RvY0luZm8nO1xuaW1wb3J0IHtTeW5jQmFyUHJvZ3Jlc3N9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy91aS9zeW5jX2Jhci9TeW5jQmFyJztcbmltcG9ydCB7SUV2ZW50RGlzcGF0Y2hlciwgU2ltcGxlUmVhY3Rvcn0gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL3JlYWN0b3IvU2ltcGxlUmVhY3Rvcic7XG5pbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL1BlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyJztcbmltcG9ydCB7UmVwb0Fubm90YXRpb259IGZyb20gJy4uL1JlcG9Bbm5vdGF0aW9uJztcbmltcG9ydCB7UmVwb0RvY01ldGFNYW5hZ2VyfSBmcm9tICcuLi9SZXBvRG9jTWV0YU1hbmFnZXInO1xuaW1wb3J0IHtSZXBvRG9jTWV0YUxvYWRlcn0gZnJvbSAnLi4vUmVwb0RvY01ldGFMb2FkZXInO1xuaW1wb3J0IHtQZXJzaXN0ZW5jZUxheWVyTWFuYWdlcnN9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy9kYXRhc3RvcmUvUGVyc2lzdGVuY2VMYXllck1hbmFnZXJzJztcbmltcG9ydCB7UmVwb0RvY01ldGFMb2FkZXJzfSBmcm9tICcuLi9SZXBvRG9jTWV0YUxvYWRlcnMnO1xuaW1wb3J0IHtFeHRlbmRlZFJlYWN0VGFibGUsIElSZWFjdFRhYmxlU3RhdGV9IGZyb20gJy4uL3V0aWwvRXh0ZW5kZWRSZWFjdFRhYmxlJztcbmltcG9ydCB7QW5ub3RhdGlvbkljb259IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy91aS9zdGFuZGFyZF9pY29ucy9Bbm5vdGF0aW9uSWNvbic7XG5pbXBvcnQge0ZpbHRlcmVkUmVwb0RvY0luZm9JbmRleCwgUmVmcmVzaGVkQ2FsbGJhY2t9IGZyb20gJy4uL2RvY19yZXBvL0ZpbHRlcmVkUmVwb0RvY0luZm9JbmRleCc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5ub3RhdGlvblJlcG9UYWJsZSBleHRlbmRzIEV4dGVuZGVkUmVhY3RUYWJsZTxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBwZXJzaXN0ZW5jZUxheWVyTWFuYWdlcjogUGVyc2lzdGVuY2VMYXllck1hbmFnZXI7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHN5bmNCYXJQcm9ncmVzczogSUV2ZW50RGlzcGF0Y2hlcjxTeW5jQmFyUHJvZ3Jlc3M+ID0gbmV3IFNpbXBsZVJlYWN0b3IoKTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5wZXJzaXN0ZW5jZUxheWVyTWFuYWdlciA9IHRoaXMucHJvcHMucGVyc2lzdGVuY2VMYXllck1hbmFnZXI7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGRhdGE6IFtdLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBpbml0KCkge1xuXG4gICAgICAgIFBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2Vycy5vblBlcnNpc3RlbmNlTWFuYWdlcih0aGlzLnByb3BzLnBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyLCAocGVyc2lzdGVuY2VMYXllcikgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLnJlbGVhc2VyLnJlZ2lzdGVyKFxuICAgICAgICAgICAgICAgIHBlcnNpc3RlbmNlTGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcigoKSA9PiB0aGlzLnJlZnJlc2goKSkpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucmVsZWFzZXIucmVnaXN0ZXIoXG4gICAgICAgICAgICBSZXBvRG9jTWV0YUxvYWRlcnMuYWRkVGhyb3R0bGluZ0V2ZW50TGlzdGVuZXIodGhpcy5wcm9wcy5yZXBvRG9jTWV0YUxvYWRlciwgKCkgPT4gdGhpcy5yZWZyZXNoKCkpKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBvblNlbGVjdGVkKHNlbGVjdGVkOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgcmVwb0Fubm90YXRpb246IFJlcG9Bbm5vdGF0aW9uKSB7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Li4udGhpcy5zdGF0ZSwgc2VsZWN0ZWQsIHJlcG9Bbm5vdGF0aW9ufSk7XG4gICAgICAgIHRoaXMucHJvcHMub25TZWxlY3RlZChyZXBvQW5ub3RhdGlvbik7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdiBpZD1cImRvYy1yZXBvLXRhYmxlXCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZG9jLXRhYmxlXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0VGFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlYWRlcjogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3NvcjogJ3R5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IDMwLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDZWxsOiAocm93OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbm5vdGF0aW9uSWNvbiB0eXBlPXtyb3cub3JpZ2luYWwudHlwZX0gY29sb3I9e3Jvdy5vcmlnaW5hbC5jb2xvcn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVhZGVyOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc29yOiAndGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2VsbDogKHJvdzogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWQgPSAnYW5ub3RhdGlvbi10aXRsZScgKyByb3cuaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD17aWR9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pntyb3cub3JpZ2luYWwudGV4dCB8fCAnbm8gdGV4dCd9PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlYWRlcjogJ0NyZWF0ZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWNjZXNzb3I6IChyb3c6IGFueSkgPT4gcm93LmFkZGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzb3I6ICdjcmVhdGVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFNvcnREZXNjOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2VsbDogKHJvdzogYW55KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVUaW1lVGFibGVDZWxsIGNsYXNzTmFtZT1cImRvYy1jb2wtbGFzdC11cGRhdGVkXCIgZGF0ZXRpbWU9e3Jvdy5vcmlnaW5hbC5jcmVhdGVkfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICd0YWdzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlYWRlcjogJ1RhZ3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzb3I6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDZWxsOiAocm93OiBhbnkpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHVzZSA8Rm9ybWF0dGVkVGFncz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhZ3M6IHtbaWQ6IHN0cmluZ106IFRhZ30gPSByb3cub3JpZ2luYWwudGFncztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZCA9IE9iamVjdC52YWx1ZXModGFncylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCh0YWcgPT4gdGFnLmxhYmVsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc29ydCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5qb2luKFwiLCBcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pntmb3JtYXR0ZWR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFBhZ2VTaXplPXs1MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5vRGF0YVRleHQ9XCJObyBhbm5vdGF0aW9ucyBhdmFpbGFibGUuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIi1zdHJpcGVkIC1oaWdobGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFNvcnRlZD17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiY3JlYXRlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNvcnRlZD17W3tcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBpZDogJ2FkZGVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBkZXNjOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFRyUHJvcHM9eyhzdGF0ZTogYW55LCByb3dJbmZvOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6IChlOiBhbnkpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVwb0Fubm90YXRpb24gPSByb3dJbmZvLm9yaWdpbmFsIGFzIFJlcG9Bbm5vdGF0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vblNlbGVjdGVkKHJvd0luZm8udmlld0luZGV4IGFzIG51bWJlciwgcmVwb0Fubm90YXRpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJvd0luZm8gJiYgcm93SW5mby52aWV3SW5kZXggPT09IHRoaXMuc3RhdGUuc2VsZWN0ZWQgPyAnIzAwYWZlYycgOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJvd0luZm8gJiYgcm93SW5mby52aWV3SW5kZXggPT09IHRoaXMuc3RhdGUuc2VsZWN0ZWQgPyAnd2hpdGUnIDogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRUZFByb3BzPXsoc3RhdGU6IGFueSwgcm93SW5mbzogYW55LCBjb2x1bW46IGFueSwgaW5zdGFuY2U6IGFueSkgPT4ge1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaW5nbGVDbGlja0NvbHVtbnM6IHN0cmluZ1tdID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISBzaW5nbGVDbGlja0NvbHVtbnMuaW5jbHVkZXMoY29sdW1uLmlkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Eb3VibGVDbGljazogKGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMub25Eb2N1bWVudExvYWRSZXF1ZXN0ZWQocm93SW5mby5vcmlnaW5hbC5maW5nZXJwcmludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByb3dJbmZvLm9yaWdpbmFsLmZpbGVuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJvd0luZm8ub3JpZ2luYWwuaGFzaGNvZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaW5nbGVDbGlja0NvbHVtbnMuaW5jbHVkZXMoY29sdW1uLmlkKSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgoZTogYW55LCBoYW5kbGVPcmlnaW5hbD86ICgpID0+IHZvaWQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuaGFuZGxlVG9nZ2xlRmllbGQocm93SW5mby5vcmlnaW5hbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb2x1bW4uaWQpIC5jYXRjaChlcnIgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsb2cuZXJyb3IoXCJDb3VsZCBub3QgaGFuZGxlIHRvZ2dsZTogXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXJyKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFuZGxlT3JpZ2luYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbmVlZGVkIGZvciByZWFjdCB0YWJsZSB0byBmdW5jdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwcm9wZXJseS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlT3JpZ2luYWwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7fTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cblxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZnJlc2goKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBPYmplY3QudmFsdWVzKHRoaXMucHJvcHMucmVwb0RvY01ldGFNYW5hZ2VyIS5yZXBvQW5ub3RhdGlvbkluZGV4KTtcbiAgICAgICAgdGhpcy5kb1JlZnJlc2godGhpcy5maWx0ZXIoZGF0YSkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZmlsdGVyKGRhdGE6IFJlcG9Bbm5vdGF0aW9uW10pOiBSZXBvQW5ub3RhdGlvbltdIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkb1JlZnJlc2goZGF0YTogUmVwb0Fubm90YXRpb25bXSkge1xuXG4gICAgICAgIC8vIGNvbnN0IHNlbGVjdGVkID0gZGF0YS5sZW5ndGggPiAwID8gMCB8IHVuZGVmaW5lZDtcblxuICAgICAgICAvLyBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgLy8gICAgIC8vIHRoaXMucHJvcHMub25TZWxlY3RlZChkYXRhWzBdKTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGNvbnN0IHN0YXRlOiBJU3RhdGUgPSB7Li4udGhpcy5zdGF0ZSwgZGF0YX07XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgICAgICAgIC8vIFRoZSByZWFjdCB0YWJsZSB3aWxsIG5vdCB1cGRhdGUgd2hlbiBJIGNoYW5nZSB0aGUgc3RhdGUgZnJvbVxuICAgICAgICAgICAgLy8gd2l0aGluIHRoZSBldmVudCBsaXN0ZW5lclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG5cbiAgICAgICAgfSwgMSk7XG5cbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG5cbiAgICByZWFkb25seSBwZXJzaXN0ZW5jZUxheWVyTWFuYWdlcjogUGVyc2lzdGVuY2VMYXllck1hbmFnZXI7XG5cbiAgICByZWFkb25seSB1cGRhdGVkRG9jSW5mb0V2ZW50RGlzcGF0Y2hlcjogSUV2ZW50RGlzcGF0Y2hlcjxJRG9jSW5mbz47XG5cbiAgICByZWFkb25seSByZXBvRG9jTWV0YU1hbmFnZXI6IFJlcG9Eb2NNZXRhTWFuYWdlcjtcblxuICAgIHJlYWRvbmx5IHJlcG9Eb2NNZXRhTG9hZGVyOiBSZXBvRG9jTWV0YUxvYWRlcjtcblxuICAgIHJlYWRvbmx5IG9uU2VsZWN0ZWQ6IChyZXBvQW5ub3RhdGlvbjogUmVwb0Fubm90YXRpb24pID0+IHZvaWQ7XG5cbn1cblxuaW50ZXJmYWNlIElTdGF0ZSBleHRlbmRzIElSZWFjdFRhYmxlU3RhdGUge1xuXG4gICAgZGF0YTogUmVwb0Fubm90YXRpb25bXTtcblxuICAgIHJlcG9Bbm5vdGF0aW9uPzogUmVwb0Fubm90YXRpb247XG5cbn1cbiJdfQ==