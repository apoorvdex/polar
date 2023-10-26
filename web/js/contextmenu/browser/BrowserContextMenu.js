"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_context_menu_wrapper_1 = require("@burtonator/react-context-menu-wrapper");
const React = __importStar(require("react"));
const ContextMenu_1 = require("../../ui/context_menu/ContextMenu");
const react_dropdown_1 = require("@burtonator/react-dropdown");
const ContextMenuMessages_1 = require("../ContextMenuMessages");
const ContextMenuType_1 = require("../ContextMenuType");
const AnnotationSidebarClient_1 = require("../../annotation_sidebar/AnnotationSidebarClient");
const PagemarkModes_1 = require("../../metadata/PagemarkModes");
class BrowserContextMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectionContexts: {
                page: false,
                areaHighlight: false,
                textHighlight: false,
                pagemark: false
            }
        };
        const id = this.props.id;
        react_context_menu_wrapper_1.addContextMenuEventListener(id, (eventName, data) => {
            const triggerEvent = data;
            const state = Object.assign({}, this.state, { triggerEvent });
            if (triggerEvent) {
                state.selectionContexts.page = triggerEvent.contextMenuTypes.includes(ContextMenuType_1.ContextMenuType.PAGE);
                state.selectionContexts.textHighlight = triggerEvent.contextMenuTypes.includes(ContextMenuType_1.ContextMenuType.TEXT_HIGHLIGHT);
                state.selectionContexts.areaHighlight = triggerEvent.contextMenuTypes.includes(ContextMenuType_1.ContextMenuType.AREA_HIGHLIGHT);
                state.selectionContexts.pagemark = triggerEvent.contextMenuTypes.includes(ContextMenuType_1.ContextMenuType.PAGEMARK);
            }
            this.setState(state);
        });
    }
    render() {
        const triggerEvent = this.state.triggerEvent;
        const CreateModeSubmenuItems = () => {
            return React.createElement(react_dropdown_1.MenuItem, { hidden: !this.state.selectionContexts.pagemark },
                "Pagemark",
                React.createElement(react_dropdown_1.MenuItem, null,
                    "Set Mode",
                    PagemarkModes_1.PagemarkModes.toDescriptors().map(current => {
                        return (React.createElement(react_dropdown_1.MenuItem, { key: current.key, hidden: !this.state.selectionContexts.pagemark, onSelect: () => ContextMenuMessages_1.ContextMenuMessages.postContextMenuMessage("set-pagemark-mode-" + current.key, triggerEvent) }, current.title));
                    })),
                React.createElement(react_dropdown_1.MenuItem, { divider: true }),
                React.createElement(react_dropdown_1.MenuItem, { hidden: !this.state.selectionContexts.pagemark, onSelect: () => ContextMenuMessages_1.ContextMenuMessages.postContextMenuMessage("delete-pagemark", triggerEvent) },
                    React.createElement("div", { className: "text-danger" }, "Delete")));
        };
        return (React.createElement(ContextMenu_1.ContextMenu, { id: this.props.id },
            React.createElement(react_dropdown_1.DropdownMenu, null,
                React.createElement(react_dropdown_1.MenuItem, { hidden: !this.state.selectionContexts.page, onSelect: () => ContextMenuMessages_1.ContextMenuMessages.postContextMenuMessage("create-pagemark-to-point", triggerEvent) }, "Create Pagemark to Point"),
                React.createElement(react_dropdown_1.MenuItem, { hidden: !this.state.selectionContexts.page, onSelect: () => ContextMenuMessages_1.ContextMenuMessages.postContextMenuMessage("create-pagemark", triggerEvent) }, "Create Pagemark Box"),
                React.createElement(react_dropdown_1.MenuItem, { hidden: !this.state.selectionContexts.page, onSelect: () => ContextMenuMessages_1.ContextMenuMessages.postContextMenuMessage("create-area-highlight", triggerEvent) }, "Create Area Highlight"),
                React.createElement(react_dropdown_1.MenuItem, { divider: true, hidden: !this.state.selectionContexts.pagemark }),
                React.createElement(CreateModeSubmenuItems, null),
                React.createElement(react_dropdown_1.MenuItem, { divider: true, hidden: !this.state.selectionContexts.textHighlight }),
                React.createElement(react_dropdown_1.MenuItem, { hidden: !this.state.selectionContexts.textHighlight },
                    "Text Highlight",
                    React.createElement(react_dropdown_1.MenuItem, { hidden: !this.state.selectionContexts.textHighlight, onSelect: () => ContextMenuMessages_1.ContextMenuMessages.postContextMenuMessage("delete-text-highlight", triggerEvent) },
                        React.createElement("div", { className: "text-danger" }, "Delete"))),
                React.createElement(react_dropdown_1.MenuItem, { divider: true, hidden: !this.state.selectionContexts.areaHighlight }),
                React.createElement(react_dropdown_1.MenuItem, { hidden: !this.state.selectionContexts.areaHighlight },
                    "Area Highlight",
                    React.createElement(react_dropdown_1.MenuItem, { hidden: !this.state.selectionContexts.areaHighlight, onSelect: () => ContextMenuMessages_1.ContextMenuMessages.postContextMenuMessage("delete-area-highlight", triggerEvent) },
                        React.createElement("div", { className: "text-danger" }, "Delete"))),
                React.createElement(react_dropdown_1.MenuItem, { divider: true }),
                React.createElement(react_dropdown_1.MenuItem, { onSelect: () => AnnotationSidebarClient_1.AnnotationSidebarClient.toggleAnnotationSidebar() }, "Toggle Annotation Sidebar"))));
    }
}
exports.BrowserContextMenu = BrowserContextMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJvd3NlckNvbnRleHRNZW51LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQnJvd3NlckNvbnRleHRNZW51LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1RkFBdUc7QUFFdkcsNkNBQStCO0FBRS9CLG1FQUE4RDtBQUM5RCwrREFBNEU7QUFFNUUsZ0VBQTJEO0FBQzNELHdEQUFtRDtBQUNuRCw4RkFBeUY7QUFDekYsZ0VBQTJEO0FBRTNELE1BQWEsa0JBQW1CLFNBQVEsS0FBSyxDQUFDLFNBQXlCO0lBRW5FLFlBQVksS0FBYTtRQUNyQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFYixJQUFJLENBQUMsS0FBSyxHQUFHO1lBRVQsaUJBQWlCLEVBQUU7Z0JBQ2YsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsYUFBYSxFQUFFLEtBQUs7Z0JBQ3BCLGFBQWEsRUFBRSxLQUFLO2dCQUNwQixRQUFRLEVBQUUsS0FBSzthQUNsQjtTQUVKLENBQUM7UUFFRixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUV6Qix3REFBMkIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxTQUFpQixFQUFFLElBQXlCLEVBQUUsRUFBRTtZQUU3RSxNQUFNLFlBQVksR0FBaUIsSUFBSyxDQUFDO1lBRXpDLE1BQU0sS0FBSyxxQkFBTyxJQUFJLENBQUMsS0FBSyxJQUFFLFlBQVksR0FBQyxDQUFDO1lBRTVDLElBQUksWUFBWSxFQUFFO2dCQUVkLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxpQ0FBZSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM1RixLQUFLLENBQUMsaUJBQWlCLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsaUNBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDL0csS0FBSyxDQUFDLGlCQUFpQixD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LHlCQUFRLElBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhOztvQkFJekQsb0JBQUMseUJBQVEsSUFBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFDbkQsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLHlDQUFtQixDQUFDLHNCQUFzQixDQUFDLHVCQUF1QixFQUFFLFlBQVksQ0FBQzt3QkFFdkcsNkJBQUssU0FBUyxFQUFDLGFBQWEsYUFBYSxDQUVsQyxDQUVKO2dCQUVYLG9CQUFDLHlCQUFRLElBQUMsT0FBTyxRQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsYUFBYSxHQUFHO2dCQUV4RSxvQkFBQyx5QkFBUSxJQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsYUFBYTs7b0JBSXpELG9CQUFDLHlCQUFRLElBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQ25ELFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyx5Q0FBbUIsQ0FBQyxzQkFBc0IsQ0FBQyx1QkFBdUIsRUFBRSxZQUFZLENBQUM7d0JBRXZHLDZCQUFLLFNBQVMsRUFBQyxhQUFhLGFBQWEsQ0FFbEMsQ0FFSjtnQkFFWCxvQkFBQyx5QkFBUSxJQUFDLE9BQU8sU0FBRTtnQkFFbkIsb0JBQUMseUJBQVEsSUFBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsaURBQXVCLENBQUMsdUJBQXVCLEVBQUUsZ0NBSWhFLENBRUEsQ0FFTCxDQUNqQixDQUFDO0lBRU4sQ0FBQztDQUVKO0FBekpELGdEQXlKQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29udGV4dE1lbnVXcmFwcGVyLCBhZGRDb250ZXh0TWVudUV2ZW50TGlzdGVuZXJ9IGZyb20gJ0BidXJ0b25hdG9yL3JlYWN0LWNvbnRleHQtbWVudS13cmFwcGVyJztcbmltcG9ydCB7VGVzdE1lbnV9IGZyb20gJy4uLy4uLy4uL3NwZWN0cm9uL3VpLWNvbXBvbmVudHMvVGVzdE1lbnUnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7Q29udGV4dE1lbnV9IGZyb20gJy4uLy4uL3VpL2NvbnRleHRfbWVudS9Db250ZXh0TWVudSc7XG5pbXBvcnQgRHJvcGRvd24sIHtEcm9wZG93bk1lbnUsIE1lbnVJdGVtfSBmcm9tIFwiQGJ1cnRvbmF0b3IvcmVhY3QtZHJvcGRvd25cIjtcbmltcG9ydCB7VHJpZ2dlckV2ZW50fSBmcm9tICcuLi9UcmlnZ2VyRXZlbnQnO1xuaW1wb3J0IHtDb250ZXh0TWVudU1lc3NhZ2VzfSBmcm9tICcuLi9Db250ZXh0TWVudU1lc3NhZ2VzJztcbmltcG9ydCB7Q29udGV4dE1lbnVUeXBlfSBmcm9tICcuLi9Db250ZXh0TWVudVR5cGUnO1xuaW1wb3J0IHtBbm5vdGF0aW9uU2lkZWJhckNsaWVudH0gZnJvbSAnLi4vLi4vYW5ub3RhdGlvbl9zaWRlYmFyL0Fubm90YXRpb25TaWRlYmFyQ2xpZW50JztcbmltcG9ydCB7UGFnZW1hcmtNb2Rlc30gZnJvbSAnLi4vLi4vbWV0YWRhdGEvUGFnZW1hcmtNb2Rlcyc7XG5cbmV4cG9ydCBjbGFzcyBCcm93c2VyQ29udGV4dE1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICAgICAgICAgIHNlbGVjdGlvbkNvbnRleHRzOiB7XG4gICAgICAgICAgICAgICAgcGFnZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXJlYUhpZ2hsaWdodDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdGV4dEhpZ2hsaWdodDogZmFsc2UsXG4gICAgICAgICAgICAgICAgcGFnZW1hcms6IGZhbHNlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBpZCA9IHRoaXMucHJvcHMuaWQ7XG5cbiAgICAgICAgYWRkQ29udGV4dE1lbnVFdmVudExpc3RlbmVyKGlkLCAoZXZlbnROYW1lOiBzdHJpbmcsIGRhdGE6IFRyaWdnZXJFdmVudCB8IG51bGwpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdHJpZ2dlckV2ZW50OiBUcmlnZ2VyRXZlbnQgPSBkYXRhITtcblxuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB7Li4udGhpcy5zdGF0ZSwgdHJpZ2dlckV2ZW50fTtcblxuICAgICAgICAgICAgaWYgKHRyaWdnZXJFdmVudCkge1xuXG4gICAgICAgICAgICAgICAgc3RhdGUuc2VsZWN0aW9uQ29udGV4dHMucGFnZSA9IHRyaWdnZXJFdmVudC5jb250ZXh0TWVudVR5cGVzLmluY2x1ZGVzKENvbnRleHRNZW51VHlwZS5QQUdFKTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5zZWxlY3Rpb25Db250ZXh0cy50ZXh0SGlnaGxpZ2h0ID0gdHJpZ2dlckV2ZW50LmNvbnRleHRNZW51VHlwZXMuaW5jbHVkZXMoQ29udGV4dE1lbnVUeXBlLlRFWFRfSElHSExJR0hUKTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5zZWxlY3Rpb25Db250ZXh0cy5hcmVhSGlnaGxpZ2h0ID0gdHJpZ2dlckV2ZW50LmNvbnRleHRNZW51VHlwZXMuaW5jbHVkZXMoQ29udGV4dE1lbnVUeXBlLkFSRUFfSElHSExJR0hUKTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5zZWxlY3Rpb25Db250ZXh0cy5wYWdlbWFyayA9IHRyaWdnZXJFdmVudC5jb250ZXh0TWVudVR5cGVzLmluY2x1ZGVzKENvbnRleHRNZW51VHlwZS5QQUdFTUFSSyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCB0cmlnZ2VyRXZlbnQgPSB0aGlzLnN0YXRlLnRyaWdnZXJFdmVudCE7XG5cbiAgICAgICAgY29uc3QgQ3JlYXRlTW9kZVN1Ym1lbnVJdGVtcyA9ICgpID0+IHtcblxuICAgICAgICAgICAgcmV0dXJuIDxNZW51SXRlbSBoaWRkZW49eyF0aGlzLnN0YXRlLnNlbGVjdGlvbkNvbnRleHRzLnBhZ2VtYXJrfT5cblxuICAgICAgICAgICAgICAgIFBhZ2VtYXJrXG5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgU2V0IE1vZGVcblxuICAgICAgICAgICAgICAgICAgICB7UGFnZW1hcmtNb2Rlcy50b0Rlc2NyaXB0b3JzKCkubWFwKGN1cnJlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8TWVudUl0ZW0ga2V5PXtjdXJyZW50LmtleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlbj17IXRoaXMuc3RhdGUuc2VsZWN0aW9uQ29udGV4dHMucGFnZW1hcmt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17KCkgPT4gQ29udGV4dE1lbnVNZXNzYWdlcy5wb3N0Q29udGV4dE1lbnVNZXNzYWdlKFwic2V0LXBhZ2VtYXJrLW1vZGUtXCIgKyBjdXJyZW50LmtleSwgdHJpZ2dlckV2ZW50KX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudC50aXRsZX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT4pO1xuICAgICAgICAgICAgICAgICAgICB9KX1cblxuICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZGl2aWRlci8+XG5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gaGlkZGVuPXshdGhpcy5zdGF0ZS5zZWxlY3Rpb25Db250ZXh0cy5wYWdlbWFya31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9eygpID0+IENvbnRleHRNZW51TWVzc2FnZXMucG9zdENvbnRleHRNZW51TWVzc2FnZShcImRlbGV0ZS1wYWdlbWFya1wiLCB0cmlnZ2VyRXZlbnQpfT5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+RGVsZXRlPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuXG4gICAgICAgICAgICA8L01lbnVJdGVtPjtcblxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxDb250ZXh0TWVudSBpZD17dGhpcy5wcm9wcy5pZH0+XG5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51PlxuXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBoaWRkZW49eyF0aGlzLnN0YXRlLnNlbGVjdGlvbkNvbnRleHRzLnBhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17KCkgPT4gQ29udGV4dE1lbnVNZXNzYWdlcy5wb3N0Q29udGV4dE1lbnVNZXNzYWdlKFwiY3JlYXRlLXBhZ2VtYXJrLXRvLXBvaW50XCIsIHRyaWdnZXJFdmVudCl9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGUgUGFnZW1hcmsgdG8gUG9pbnRcblxuICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBoaWRkZW49eyF0aGlzLnN0YXRlLnNlbGVjdGlvbkNvbnRleHRzLnBhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17KCkgPT4gQ29udGV4dE1lbnVNZXNzYWdlcy5wb3N0Q29udGV4dE1lbnVNZXNzYWdlKFwiY3JlYXRlLXBhZ2VtYXJrXCIsIHRyaWdnZXJFdmVudCl9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGUgUGFnZW1hcmsgQm94XG5cbiAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cblxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gaGlkZGVuPXshdGhpcy5zdGF0ZS5zZWxlY3Rpb25Db250ZXh0cy5wYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9eygpID0+IENvbnRleHRNZW51TWVzc2FnZXMucG9zdENvbnRleHRNZW51TWVzc2FnZShcImNyZWF0ZS1hcmVhLWhpZ2hsaWdodFwiLCB0cmlnZ2VyRXZlbnQpfT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIEFyZWEgSGlnaGxpZ2h0XG5cbiAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cblxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZGl2aWRlciBoaWRkZW49eyF0aGlzLnN0YXRlLnNlbGVjdGlvbkNvbnRleHRzLnBhZ2VtYXJrfS8+XG5cbiAgICAgICAgICAgICAgICAgICAgPENyZWF0ZU1vZGVTdWJtZW51SXRlbXMvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBkaXZpZGVyIGhpZGRlbj17IXRoaXMuc3RhdGUuc2VsZWN0aW9uQ29udGV4dHMudGV4dEhpZ2hsaWdodH0vPlxuXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBoaWRkZW49eyF0aGlzLnN0YXRlLnNlbGVjdGlvbkNvbnRleHRzLnRleHRIaWdobGlnaHR9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0IEhpZ2hsaWdodFxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gaGlkZGVuPXshdGhpcy5zdGF0ZS5zZWxlY3Rpb25Db250ZXh0cy50ZXh0SGlnaGxpZ2h0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsoKSA9PiBDb250ZXh0TWVudU1lc3NhZ2VzLnBvc3RDb250ZXh0TWVudU1lc3NhZ2UoXCJkZWxldGUtdGV4dC1oaWdobGlnaHRcIiwgdHJpZ2dlckV2ZW50KX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+RGVsZXRlPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cblxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZGl2aWRlciBoaWRkZW49eyF0aGlzLnN0YXRlLnNlbGVjdGlvbkNvbnRleHRzLmFyZWFIaWdobGlnaHR9Lz5cblxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gaGlkZGVuPXshdGhpcy5zdGF0ZS5zZWxlY3Rpb25Db250ZXh0cy5hcmVhSGlnaGxpZ2h0fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgQXJlYSBIaWdobGlnaHRcblxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGhpZGRlbj17IXRoaXMuc3RhdGUuc2VsZWN0aW9uQ29udGV4dHMuYXJlYUhpZ2hsaWdodH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17KCkgPT4gQ29udGV4dE1lbnVNZXNzYWdlcy5wb3N0Q29udGV4dE1lbnVNZXNzYWdlKFwiZGVsZXRlLWFyZWEtaGlnaGxpZ2h0XCIsIHRyaWdnZXJFdmVudCl9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPkRlbGV0ZTwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGRpdmlkZXIvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvblNlbGVjdD17KCkgPT4gQW5ub3RhdGlvblNpZGViYXJDbGllbnQudG9nZ2xlQW5ub3RhdGlvblNpZGViYXIoKX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRvZ2dsZSBBbm5vdGF0aW9uIFNpZGViYXJcblxuICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XG5cbiAgICAgICAgICAgIDwvQ29udGV4dE1lbnU+XG4gICAgICAgICk7XG5cbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgaWQ6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gICAgcmVhZG9ubHkgc2VsZWN0aW9uQ29udGV4dHM6IFNlbGVjdGlvbkNvbnRleHRzO1xuICAgIHJlYWRvbmx5IHRyaWdnZXJFdmVudD86IFRyaWdnZXJFdmVudDtcbn1cblxuXG5pbnRlcmZhY2UgU2VsZWN0aW9uQ29udGV4dHMge1xuICAgIHBhZ2U6IGJvb2xlYW47XG4gICAgdGV4dEhpZ2hsaWdodDogYm9vbGVhbjtcbiAgICBhcmVhSGlnaGxpZ2h0OiBib29sZWFuO1xuICAgIHBhZ2VtYXJrOiBib29sZWFuO1xufVxuIl19