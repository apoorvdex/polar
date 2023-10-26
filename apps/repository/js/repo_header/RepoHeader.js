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
const CloudAuthButton_1 = require("../../../../web/js/ui/cloud_auth/CloudAuthButton");
const RepoSidebar_1 = require("../RepoSidebar");
const SplitBar_1 = require("../SplitBar");
const LinkDropdown_1 = require("./LinkDropdown");
const HelpDropdown_1 = require("./HelpDropdown");
const SettingsDropdown_1 = require("./SettingsDropdown");
const log = Logger_1.Logger.create();
const Styles = {};
class RepoHeader extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const Settings = () => {
            const prefs = () => {
                const persistenceLayer = this.props.persistenceLayerManager.get();
                if (!persistenceLayer) {
                    return undefined;
                }
                return persistenceLayer.datastore.getPrefs().get();
            };
            return (React.createElement(SettingsDropdown_1.SettingsDropdown, { prefs: prefs }));
        };
        return (React.createElement("div", { className: "border-bottom mb-1" },
            React.createElement(SplitBar_1.SplitBar, null,
                React.createElement(SplitBar_1.SplitBarLeft, null,
                    React.createElement(RepoSidebar_1.RepoSidebar, null)),
                React.createElement(SplitBar_1.SplitBarRight, null,
                    React.createElement(CloudAuthButton_1.CloudAuthButton, { persistenceLayerManager: this.props.persistenceLayerManager }),
                    React.createElement(LinkDropdown_1.LinkDropdown, null),
                    React.createElement(HelpDropdown_1.HelpDropdown, null),
                    React.createElement(Settings, null)))));
    }
}
exports.RepoHeader = RepoHeader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb0hlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlJlcG9IZWFkZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiw2REFBd0Q7QUFFeEQsc0ZBQWlGO0FBRWpGLGdEQUEyQztBQUMzQywwQ0FBa0U7QUFDbEUsaURBQTRDO0FBQzVDLGlEQUE0QztBQUM1Qyx5REFBb0Q7QUFJcEQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQU0sTUFBTSxHQUFjLEVBRXpCLENBQUM7QUFLRixNQUFhLFVBQVcsU0FBUSxLQUFLLENBQUMsYUFBNkI7SUFFL0QsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFTSxNQUFNO1FBRVQsTUFBTSxRQUFRLEdBQUcsR0FBRyxFQUFFO1lBRWxCLE1BQU0sS0FBSyxHQUFHLEdBQXNCLEVBQUU7Z0JBRWxDLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFFbEUsSUFBSSxDQUFFLGdCQUFnQixFQUFFO29CQUNwQixPQUFPLFNBQVMsQ0FBQztpQkFDcEI7Z0JBRUQsT0FBTyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7WUFFdkQsQ0FBQyxDQUFDO1lBRUYsT0FBTyxDQUFFLG9CQUFDLG1DQUFnQixJQUFDLEtBQUssRUFBRSxLQUFLLEdBQUcsQ0FBRSxDQUFDO1FBRWpELENBQUMsQ0FBQztRQUVGLE9BQU8sQ0FFSCw2QkFBSyxTQUFTLEVBQUMsb0JBQW9CO1lBQy9CLG9CQUFDLG1CQUFRO2dCQUVMLG9CQUFDLHVCQUFZO29CQUNULG9CQUFDLHlCQUFXLE9BQUUsQ0FDSDtnQkFFZixvQkFBQyx3QkFBYTtvQkFFVixvQkFBQyxpQ0FBZSxJQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEdBQUk7b0JBRWhGLG9CQUFDLDJCQUFZLE9BQUU7b0JBRWYsb0JBQUMsMkJBQVksT0FBRTtvQkFFZixvQkFBQyxRQUFRLE9BQUUsQ0FFQyxDQUVULENBQ1QsQ0FFVCxDQUFDO0lBRU4sQ0FBQztDQUVKO0FBdERELGdDQXNEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0lTdHlsZU1hcH0gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL3JlYWN0L0lTdHlsZU1hcCc7XG5pbXBvcnQge0Nsb3VkQXV0aEJ1dHRvbn0gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL3VpL2Nsb3VkX2F1dGgvQ2xvdWRBdXRoQnV0dG9uJztcbmltcG9ydCB7UGVyc2lzdGVuY2VMYXllck1hbmFnZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy9kYXRhc3RvcmUvUGVyc2lzdGVuY2VMYXllck1hbmFnZXInO1xuaW1wb3J0IHtSZXBvU2lkZWJhcn0gZnJvbSAnLi4vUmVwb1NpZGViYXInO1xuaW1wb3J0IHtTcGxpdEJhciwgU3BsaXRCYXJMZWZ0LCBTcGxpdEJhclJpZ2h0fSBmcm9tICcuLi9TcGxpdEJhcic7XG5pbXBvcnQge0xpbmtEcm9wZG93bn0gZnJvbSAnLi9MaW5rRHJvcGRvd24nO1xuaW1wb3J0IHtIZWxwRHJvcGRvd259IGZyb20gJy4vSGVscERyb3Bkb3duJztcbmltcG9ydCB7U2V0dGluZ3NEcm9wZG93bn0gZnJvbSAnLi9TZXR0aW5nc0Ryb3Bkb3duJztcbmltcG9ydCB7UHJvdmlkZXJzfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvdXRpbC9Qcm92aWRlcnMnO1xuaW1wb3J0IHtQcmVmc30gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL3V0aWwvcHJlZnMvUHJlZnMnO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmNvbnN0IFN0eWxlczogSVN0eWxlTWFwID0ge1xuXG59O1xuXG4vKipcbiAqIFNpbXBsZSBoZWFkZXIgZm9yIHRoZSByZXBvc2l0b3J5IHdoaWNoIHN1cHBvcnRzIGFyYml0cmFyeSBjaGlsZHJlbi5cbiAqL1xuZXhwb3J0IGNsYXNzIFJlcG9IZWFkZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgU2V0dGluZ3MgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHByZWZzID0gKCk6IFByZWZzIHwgdW5kZWZpbmVkID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHBlcnNpc3RlbmNlTGF5ZXIgPSB0aGlzLnByb3BzLnBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyLmdldCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCEgcGVyc2lzdGVuY2VMYXllcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBwZXJzaXN0ZW5jZUxheWVyLmRhdGFzdG9yZS5nZXRQcmVmcygpLmdldCgpO1xuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXR1cm4gKCA8U2V0dGluZ3NEcm9wZG93biBwcmVmcz17cHJlZnN9Lz4gKTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWJvdHRvbSBtYi0xXCI+XG4gICAgICAgICAgICAgICAgPFNwbGl0QmFyPlxuXG4gICAgICAgICAgICAgICAgICAgIDxTcGxpdEJhckxlZnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVwb1NpZGViYXIvPlxuICAgICAgICAgICAgICAgICAgICA8L1NwbGl0QmFyTGVmdD5cblxuICAgICAgICAgICAgICAgICAgICA8U3BsaXRCYXJSaWdodD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPENsb3VkQXV0aEJ1dHRvbiBwZXJzaXN0ZW5jZUxheWVyTWFuYWdlcj17dGhpcy5wcm9wcy5wZXJzaXN0ZW5jZUxheWVyTWFuYWdlcn0gLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtEcm9wZG93bi8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWxwRHJvcGRvd24vPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2V0dGluZ3MvPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvU3BsaXRCYXJSaWdodD5cblxuICAgICAgICAgICAgICAgIDwvU3BsaXRCYXI+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuXG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IHBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyOiBQZXJzaXN0ZW5jZUxheWVyTWFuYWdlcjtcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG5cbn1cbiJdfQ==