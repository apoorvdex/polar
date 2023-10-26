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
const ReactDOM = __importStar(require("react-dom"));
const react_context_menu_wrapper_1 = require("@burtonator/react-context-menu-wrapper");
const BrowserContextMenu_1 = require("./BrowserContextMenu");
class BrowserContextMenus {
    static create() {
        const contextMenuRoot = document.createElement("div");
        contextMenuRoot.id = 'context-menu-root';
        document.body.appendChild(contextMenuRoot);
        const id = 'viewer-context-menu';
        ReactDOM.render(React.createElement(BrowserContextMenu_1.BrowserContextMenu, { id: id }), contextMenuRoot);
    }
    static trigger(triggerEvent, mouseEvent) {
        react_context_menu_wrapper_1.showContextMenu({
            id: "viewer-context-menu",
            event: mouseEvent,
            data: triggerEvent,
            x: triggerEvent.point.x,
            y: triggerEvent.point.y
        });
    }
}
exports.BrowserContextMenus = BrowserContextMenus;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJvd3NlckNvbnRleHRNZW51cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkJyb3dzZXJDb250ZXh0TWVudXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQixvREFBc0M7QUFDdEMsdUZBQXVFO0FBR3ZFLDZEQUF3RDtBQUV4RCxNQUFhLG1CQUFtQjtJQUVyQixNQUFNLENBQUMsTUFBTTtRQUVoQixNQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RELGVBQWUsQ0FBQyxFQUFFLEdBQUcsbUJBQW1CLENBQUM7UUFFekMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFM0MsTUFBTSxFQUFFLEdBQUcscUJBQXFCLENBQUM7UUFFakMsUUFBUSxDQUFDLE1BQU0sQ0FFWCxvQkFBQyx1Q0FBa0IsSUFBQyxFQUFFLEVBQUUsRUFBRSxHQUVMLEVBRXJCLGVBQWUsQ0FFbEIsQ0FBQztJQUVOLENBQUM7SUFFTSxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQTBCLEVBQUUsVUFBc0I7UUFFcEUsNENBQWUsQ0FBQztZQUNaLEVBQUUsRUFBRSxxQkFBcUI7WUFDekIsS0FBSyxFQUFFLFVBQVU7WUFDakIsSUFBSSxFQUFFLFlBQVk7WUFDbEIsQ0FBQyxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QixDQUFDLEVBQUUsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFCLENBQUMsQ0FBQztJQUVQLENBQUM7Q0FFSjtBQW5DRCxrREFtQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtzaG93Q29udGV4dE1lbnV9IGZyb20gJ0BidXJ0b25hdG9yL3JlYWN0LWNvbnRleHQtbWVudS13cmFwcGVyJztcbmltcG9ydCB7VHJpZ2dlckV2ZW50fSBmcm9tICcuLi9UcmlnZ2VyRXZlbnQnO1xuaW1wb3J0IHtEcm9wZG93bk1lbnUsIE1lbnVJdGVtfSBmcm9tIFwiQGJ1cnRvbmF0b3IvcmVhY3QtZHJvcGRvd25cIjtcbmltcG9ydCB7QnJvd3NlckNvbnRleHRNZW51fSBmcm9tICcuL0Jyb3dzZXJDb250ZXh0TWVudSc7XG5cbmV4cG9ydCBjbGFzcyBCcm93c2VyQ29udGV4dE1lbnVzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKCkge1xuXG4gICAgICAgIGNvbnN0IGNvbnRleHRNZW51Um9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnRleHRNZW51Um9vdC5pZCA9ICdjb250ZXh0LW1lbnUtcm9vdCc7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZXh0TWVudVJvb3QpO1xuXG4gICAgICAgIGNvbnN0IGlkID0gJ3ZpZXdlci1jb250ZXh0LW1lbnUnO1xuXG4gICAgICAgIFJlYWN0RE9NLnJlbmRlcihcblxuICAgICAgICAgICAgPEJyb3dzZXJDb250ZXh0TWVudSBpZD17aWR9PlxuXG4gICAgICAgICAgICA8L0Jyb3dzZXJDb250ZXh0TWVudT4sXG5cbiAgICAgICAgICAgIGNvbnRleHRNZW51Um9vdFxuXG4gICAgICAgICk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHRyaWdnZXIodHJpZ2dlckV2ZW50OiBUcmlnZ2VyRXZlbnQsIG1vdXNlRXZlbnQ6IE1vdXNlRXZlbnQpIHtcblxuICAgICAgICBzaG93Q29udGV4dE1lbnUoe1xuICAgICAgICAgICAgaWQ6IFwidmlld2VyLWNvbnRleHQtbWVudVwiLFxuICAgICAgICAgICAgZXZlbnQ6IG1vdXNlRXZlbnQsXG4gICAgICAgICAgICBkYXRhOiB0cmlnZ2VyRXZlbnQsXG4gICAgICAgICAgICB4OiB0cmlnZ2VyRXZlbnQucG9pbnQueCxcbiAgICAgICAgICAgIHk6IHRyaWdnZXJFdmVudC5wb2ludC55XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG59XG5cbiJdfQ==