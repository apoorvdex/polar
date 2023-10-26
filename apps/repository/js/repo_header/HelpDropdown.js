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
const DropdownToggle_1 = __importDefault(require("reactstrap/lib/DropdownToggle"));
const DropdownMenu_1 = __importDefault(require("reactstrap/lib/DropdownMenu"));
const HelpDropdownItem_1 = require("./HelpDropdownItem");
const DropdownItem_1 = __importDefault(require("reactstrap/lib/DropdownItem"));
const reactstrap_1 = require("reactstrap");
const AppRuntime_1 = require("../../../../web/js/AppRuntime");
const TrackedDropdownItem_1 = require("./TrackedDropdownItem");
const electron_1 = require("electron");
const AppUpdates_1 = require("../../../../web/js/updates/AppUpdates");
const SURVEY_LINK = 'https://kevinburton1.typeform.com/to/BuX1Ef';
class HelpDropdown extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const updatesEnabled = AppRuntime_1.AppRuntime.isElectron() && AppUpdates_1.AppUpdates.platformSupportsUpdates();
        return (React.createElement(reactstrap_1.UncontrolledDropdown, { className: "ml-1", size: "sm", id: "help-dropdown" },
            React.createElement(DropdownToggle_1.default, { className: "text-muted", color: "light", caret: true },
                React.createElement("i", { className: "fas fa-question", style: { fontSize: '17px' } })),
            React.createElement(DropdownMenu_1.default, { className: "shadow", right: true },
                React.createElement(HelpDropdownItem_1.HelpDropdownItem, { id: "documentation-link", title: "Documentation", tooltip: "Documentation on Polar", link: "https://getpolarized.io/docs/", icon: "fas fa-book" }),
                React.createElement(HelpDropdownItem_1.HelpDropdownItem, { id: "feedback-link", title: "Feedback", tooltip: "Provide feedback to help us improve the App", link: SURVEY_LINK, icon: "fas fa-poll-h" }),
                React.createElement(HelpDropdownItem_1.HelpDropdownItem, { id: "chat-link", title: "Chat", tooltip: "Chat with other Polar users live via chat (Discord)", link: "https://discord.gg/GT8MhA6", icon: "fab fa-discord" }),
                React.createElement(HelpDropdownItem_1.HelpDropdownItem, { id: "create-issue-link", title: "Create Issue", tooltip: "Create an issue (bug or feature) for the developer to investigate.", link: "https://github.com/burtonator/polar-bookshelf/issues/new/choose", icon: "fas fa-bug" }),
                React.createElement(DropdownItem_1.default, { divider: true }),
                React.createElement(HelpDropdownItem_1.HelpDropdownItem, { id: "donate-link", title: "Donate", tooltip: "Donate to Polar to support development.", link: "https://opencollective.com/polar-bookshelf", icon: "fas fa-donate" }),
                React.createElement(DropdownItem_1.default, { divider: true, hidden: !updatesEnabled }),
                React.createElement(TrackedDropdownItem_1.TrackedDropdownItem, { id: "electron-check-for-update", title: "Check For App Update", tooltip: "Check for a new update of the Polar Desktop app.", icon: "fas fa-file-download", trackingCategory: "help-check-for-update", hidden: !updatesEnabled, onClick: () => electron_1.ipcRenderer.send('app-update:check-for-update') }))));
    }
}
exports.HelpDropdown = HelpDropdown;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVscERyb3Bkb3duLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSGVscERyb3Bkb3duLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsbUZBQTJEO0FBQzNELCtFQUF1RDtBQUN2RCx5REFBb0Q7QUFDcEQsK0VBQXVEO0FBQ3ZELDJDQUFnRDtBQUNoRCw4REFBeUQ7QUFDekQsK0RBQTBEO0FBQzFELHVDQUFxQztBQUNyQyxzRUFBaUU7QUFFakUsTUFBTSxXQUFXLEdBQUcsNkNBQTZDLENBQUM7QUFFbEUsTUFBYSxZQUFhLFNBQVEsS0FBSyxDQUFDLGFBQTZCO0lBRWpFLFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sTUFBTTtRQUVULE1BQU0sY0FBYyxHQUFHLHVCQUFVLENBQUMsVUFBVSxFQUFFLElBQUksdUJBQVUsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBRXZGLE9BQU8sQ0FDSCxvQkFBQyxpQ0FBb0IsSUFBQyxTQUFTLEVBQUMsTUFBTSxFQUNoQixJQUFJLEVBQUMsSUFBSSxFQUNULEVBQUUsRUFBQyxlQUFlO1lBRXBDLG9CQUFDLHdCQUFjLElBQUMsU0FBUyxFQUFDLFlBQVksRUFDdEIsS0FBSyxFQUFDLE9BQU8sRUFDYixLQUFLO2dCQUVqQiwyQkFBRyxTQUFTLEVBQUMsaUJBQWlCLEVBQUMsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLE1BQU0sRUFBQyxHQUFNLENBRWpEO1lBRWpCLG9CQUFDLHNCQUFZLElBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQyxLQUFLO2dCQUlsQyxvQkFBQyxtQ0FBZ0IsSUFBQyxFQUFFLEVBQUMsb0JBQW9CLEVBQ3ZCLEtBQUssRUFBQyxlQUFlLEVBQ3JCLE9BQU8sRUFBQyx3QkFBd0IsRUFDaEMsSUFBSSxFQUFDLCtCQUErQixFQUNwQyxJQUFJLEVBQUMsYUFBYSxHQUFFO2dCQUV0QyxvQkFBQyxtQ0FBZ0IsSUFBQyxFQUFFLEVBQUMsZUFBZSxFQUNsQixLQUFLLEVBQUMsVUFBVSxFQUNoQixPQUFPLEVBQUMsNkNBQTZDLEVBQ3JELElBQUksRUFBRSxXQUFXLEVBQ2pCLElBQUksRUFBQyxlQUFlLEdBQUU7Z0JBRXhDLG9CQUFDLG1DQUFnQixJQUFDLEVBQUUsRUFBQyxXQUFXLEVBQ2QsS0FBSyxFQUFDLE1BQU0sRUFDWixPQUFPLEVBQUMscURBQXFELEVBQzdELElBQUksRUFBQyw0QkFBNEIsRUFDakMsSUFBSSxFQUFDLGdCQUFnQixHQUFFO2dCQUV6QyxvQkFBQyxtQ0FBZ0IsSUFBQyxFQUFFLEVBQUMsbUJBQW1CLEVBQ3RCLEtBQUssRUFBQyxjQUFjLEVBQ3BCLE9BQU8sRUFBQyxvRUFBb0UsRUFDNUUsSUFBSSxFQUFDLGlFQUFpRSxFQUN0RSxJQUFJLEVBQUMsWUFBWSxHQUFFO2dCQUVyQyxvQkFBQyxzQkFBWSxJQUFDLE9BQU8sU0FBRTtnQkFFdkIsb0JBQUMsbUNBQWdCLElBQUMsRUFBRSxFQUFDLGFBQWEsRUFDaEIsS0FBSyxFQUFDLFFBQVEsRUFDZCxPQUFPLEVBQUMseUNBQXlDLEVBQ2pELElBQUksRUFBQyw0Q0FBNEMsRUFDakQsSUFBSSxFQUFDLGVBQWUsR0FBRTtnQkFFeEMsb0JBQUMsc0JBQVksSUFBQyxPQUFPLFFBQUMsTUFBTSxFQUFFLENBQUMsY0FBYyxHQUFHO2dCQUVoRCxvQkFBQyx5Q0FBbUIsSUFBQyxFQUFFLEVBQUMsMkJBQTJCLEVBQzlCLEtBQUssRUFBQyxzQkFBc0IsRUFDNUIsT0FBTyxFQUFDLGtEQUFrRCxFQUMxRCxJQUFJLEVBQUMsc0JBQXNCLEVBQzNCLGdCQUFnQixFQUFDLHVCQUF1QixFQUN4QyxNQUFNLEVBQUUsQ0FBQyxjQUFjLEVBQ3ZCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxzQkFBVyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLENBRTNFLENBRUksQ0FDMUIsQ0FBQztJQUVOLENBQUM7Q0FHSjtBQTdFRCxvQ0E2RUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRHJvcGRvd25Ub2dnbGUgZnJvbSAncmVhY3RzdHJhcC9saWIvRHJvcGRvd25Ub2dnbGUnO1xuaW1wb3J0IERyb3Bkb3duTWVudSBmcm9tICdyZWFjdHN0cmFwL2xpYi9Ecm9wZG93bk1lbnUnO1xuaW1wb3J0IHtIZWxwRHJvcGRvd25JdGVtfSBmcm9tICcuL0hlbHBEcm9wZG93bkl0ZW0nO1xuaW1wb3J0IERyb3Bkb3duSXRlbSBmcm9tICdyZWFjdHN0cmFwL2xpYi9Ecm9wZG93bkl0ZW0nO1xuaW1wb3J0IHtVbmNvbnRyb2xsZWREcm9wZG93bn0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQge0FwcFJ1bnRpbWV9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy9BcHBSdW50aW1lJztcbmltcG9ydCB7VHJhY2tlZERyb3Bkb3duSXRlbX0gZnJvbSAnLi9UcmFja2VkRHJvcGRvd25JdGVtJztcbmltcG9ydCB7aXBjUmVuZGVyZXJ9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCB7QXBwVXBkYXRlc30gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL3VwZGF0ZXMvQXBwVXBkYXRlcyc7XG5cbmNvbnN0IFNVUlZFWV9MSU5LID0gJ2h0dHBzOi8va2V2aW5idXJ0b24xLnR5cGVmb3JtLmNvbS90by9CdVgxRWYnO1xuXG5leHBvcnQgY2xhc3MgSGVscERyb3Bkb3duIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IHVwZGF0ZXNFbmFibGVkID0gQXBwUnVudGltZS5pc0VsZWN0cm9uKCkgJiYgQXBwVXBkYXRlcy5wbGF0Zm9ybVN1cHBvcnRzVXBkYXRlcygpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VW5jb250cm9sbGVkRHJvcGRvd24gY2xhc3NOYW1lPVwibWwtMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImhlbHAtZHJvcGRvd25cIj5cblxuICAgICAgICAgICAgICAgIDxEcm9wZG93blRvZ2dsZSBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0PlxuXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1xdWVzdGlvblwiIHN0eWxlPXt7Zm9udFNpemU6ICcxN3B4J319PjwvaT5cblxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25Ub2dnbGU+XG5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51IGNsYXNzTmFtZT1cInNoYWRvd1wiIHJpZ2h0PlxuXG4gICAgICAgICAgICAgICAgICAgIHsvKjxEcm9wZG93bkl0ZW0gaGVhZGVyPkV4dGVuc2lvbnMgYW5kIEFkZG9uczwvRHJvcGRvd25JdGVtPiovfVxuXG4gICAgICAgICAgICAgICAgICAgIDxIZWxwRHJvcGRvd25JdGVtIGlkPVwiZG9jdW1lbnRhdGlvbi1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJEb2N1bWVudGF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcD1cIkRvY3VtZW50YXRpb24gb24gUG9sYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rPVwiaHR0cHM6Ly9nZXRwb2xhcml6ZWQuaW8vZG9jcy9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiZmFzIGZhLWJvb2tcIi8+XG5cbiAgICAgICAgICAgICAgICAgICAgPEhlbHBEcm9wZG93bkl0ZW0gaWQ9XCJmZWVkYmFjay1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJGZWVkYmFja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXA9XCJQcm92aWRlIGZlZWRiYWNrIHRvIGhlbHAgdXMgaW1wcm92ZSB0aGUgQXBwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluaz17U1VSVkVZX0xJTkt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJmYXMgZmEtcG9sbC1oXCIvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxIZWxwRHJvcGRvd25JdGVtIGlkPVwiY2hhdC1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJDaGF0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcD1cIkNoYXQgd2l0aCBvdGhlciBQb2xhciB1c2VycyBsaXZlIHZpYSBjaGF0IChEaXNjb3JkKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbms9XCJodHRwczovL2Rpc2NvcmQuZ2cvR1Q4TWhBNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJmYWIgZmEtZGlzY29yZFwiLz5cblxuICAgICAgICAgICAgICAgICAgICA8SGVscERyb3Bkb3duSXRlbSBpZD1cImNyZWF0ZS1pc3N1ZS1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJDcmVhdGUgSXNzdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwPVwiQ3JlYXRlIGFuIGlzc3VlIChidWcgb3IgZmVhdHVyZSkgZm9yIHRoZSBkZXZlbG9wZXIgdG8gaW52ZXN0aWdhdGUuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluaz1cImh0dHBzOi8vZ2l0aHViLmNvbS9idXJ0b25hdG9yL3BvbGFyLWJvb2tzaGVsZi9pc3N1ZXMvbmV3L2Nob29zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJmYXMgZmEtYnVnXCIvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gZGl2aWRlci8+XG5cbiAgICAgICAgICAgICAgICAgICAgPEhlbHBEcm9wZG93bkl0ZW0gaWQ9XCJkb25hdGUtbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRG9uYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcD1cIkRvbmF0ZSB0byBQb2xhciB0byBzdXBwb3J0IGRldmVsb3BtZW50LlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbms9XCJodHRwczovL29wZW5jb2xsZWN0aXZlLmNvbS9wb2xhci1ib29rc2hlbGZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiZmFzIGZhLWRvbmF0ZVwiLz5cblxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGRpdmlkZXIgaGlkZGVuPXshdXBkYXRlc0VuYWJsZWR9Lz5cblxuICAgICAgICAgICAgICAgICAgICA8VHJhY2tlZERyb3Bkb3duSXRlbSBpZD1cImVsZWN0cm9uLWNoZWNrLWZvci11cGRhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkNoZWNrIEZvciBBcHAgVXBkYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcD1cIkNoZWNrIGZvciBhIG5ldyB1cGRhdGUgb2YgdGhlIFBvbGFyIERlc2t0b3AgYXBwLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJmYXMgZmEtZmlsZS1kb3dubG9hZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYWNraW5nQ2F0ZWdvcnk9XCJoZWxwLWNoZWNrLWZvci11cGRhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW49eyF1cGRhdGVzRW5hYmxlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaXBjUmVuZGVyZXIuc2VuZCgnYXBwLXVwZGF0ZTpjaGVjay1mb3ItdXBkYXRlJyl9Lz5cblxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxuXG4gICAgICAgICAgICA8L1VuY29udHJvbGxlZERyb3Bkb3duPlxuICAgICAgICApO1xuXG4gICAgfVxuXG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuXG59XG4iXX0=