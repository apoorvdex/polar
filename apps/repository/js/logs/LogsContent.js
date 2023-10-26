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
const ReleasingReactComponent_1 = __importDefault(require("../framework/ReleasingReactComponent"));
const MemoryLogger_1 = require("../../../../web/js/logger/MemoryLogger");
const react_json_view_1 = __importDefault(require("react-json-view"));
const log = Logger_1.Logger.create();
class Styles {
}
Styles.LogMessage = {
    display: 'flex',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
};
Styles.LogFieldTimestamp = {
    fontWeight: 'bold',
    fontFamily: 'Courier New, monospace',
    marginRight: '5px',
    whiteSpace: 'nowrap',
};
Styles.LogFieldMsg = {
    fontFamily: 'Courier New, monospace',
    whiteSpace: 'nowrap',
    overflow: 'none'
};
Styles.LogFieldArgs = {
    marginLeft: '5px'
};
class LogsContent extends ReleasingReactComponent_1.default {
    constructor(props, context) {
        super(props, context);
        this.state = {
            messages: MemoryLogger_1.MemoryLogger.toView()
        };
    }
    componentWillMount() {
        this.releaser.register(MemoryLogger_1.MemoryLogger.addEventListener(() => {
            this.setState({ messages: MemoryLogger_1.MemoryLogger.toView() });
        }));
    }
    render() {
        const messages = [...this.state.messages];
        const argsRenderable = (args) => {
            if (args) {
                if (Array.isArray(args)) {
                    if (args.length > 0) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                return true;
            }
            return false;
        };
        return messages.reverse()
            .map(current => {
            let className = "";
            if (current.level === 'warn') {
                className = 'alert-warning';
            }
            if (current.level === 'error') {
                className = 'alert-danger';
            }
            const RenderJSON = () => {
                if (argsRenderable(current.args)) {
                    return (React.createElement("div", { style: Styles.LogFieldArgs },
                        React.createElement(react_json_view_1.default, { src: current.args, name: 'args', shouldCollapse: () => true })));
                }
                return (React.createElement("div", null));
            };
            return React.createElement("div", { style: Styles.LogMessage, className: className, key: current.idx },
                React.createElement("div", { style: Styles.LogFieldTimestamp }, current.timestamp),
                React.createElement("div", { style: Styles.LogFieldMsg }, current.msg),
                React.createElement(RenderJSON, null));
        });
    }
}
exports.default = LogsContent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nc0NvbnRlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJMb2dzQ29udGVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLDZEQUF3RDtBQUV4RCxtR0FBMkU7QUFDM0UseUVBQW9FO0FBQ3BFLHNFQUF3QztBQUV4QyxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBTSxNQUFNOztBQUVNLGlCQUFVLEdBQXdCO0lBQzVDLE9BQU8sRUFBRSxNQUFNO0lBQ2YsVUFBVSxFQUFFLFFBQVE7SUFDcEIsUUFBUSxFQUFFLFFBQVE7Q0FDckIsQ0FBQztBQUVZLHdCQUFpQixHQUF3QjtJQUNuRCxVQUFVLEVBQUUsTUFBTTtJQUNsQixVQUFVLEVBQUUsd0JBQXdCO0lBQ3BDLFdBQVcsRUFBRSxLQUFLO0lBQ2xCLFVBQVUsRUFBRSxRQUFRO0NBQ3ZCLENBQUM7QUFFWSxrQkFBVyxHQUF3QjtJQUM3QyxVQUFVLEVBQUUsd0JBQXdCO0lBQ3BDLFVBQVUsRUFBRSxRQUFRO0lBQ3BCLFFBQVEsRUFBRSxNQUFNO0NBQ25CLENBQUM7QUFFWSxtQkFBWSxHQUF3QjtJQUM5QyxVQUFVLEVBQUUsS0FBSztDQUNwQixDQUFDO0FBSU4sTUFBcUIsV0FBWSxTQUFRLGlDQUF1QztJQUU1RSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULFFBQVEsRUFBRSwyQkFBWSxDQUFDLE1BQU0sRUFBRTtTQUNsQyxDQUFDO0lBRU4sQ0FBQztJQUdNLGtCQUFrQjtRQUVyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FDbEIsMkJBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLFFBQVEsRUFBRSwyQkFBWSxDQUFDLE1BQU0sRUFBRSxFQUFDLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FDTCxDQUFDO0lBRU4sQ0FBQztJQUVNLE1BQU07UUFFVCxNQUFNLFFBQVEsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUxQyxNQUFNLGNBQWMsR0FBRyxDQUFDLElBQVMsRUFBVyxFQUFFO1lBRTFDLElBQUksSUFBSSxFQUFFO2dCQUVOLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFFckIsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTt3QkFDakIsT0FBTyxJQUFJLENBQUM7cUJBQ2Y7eUJBQU07d0JBQ0gsT0FBTyxLQUFLLENBQUM7cUJBQ2hCO2lCQUVKO2dCQUVELE9BQU8sSUFBSSxDQUFDO2FBRWY7WUFFRCxPQUFPLEtBQUssQ0FBQztRQUVqQixDQUFDLENBQUM7UUFFRixPQUFPLFFBQVEsQ0FBQyxPQUFPLEVBQUU7YUFDVCxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFFMUIsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBRW5CLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxNQUFNLEVBQUU7Z0JBQzFCLFNBQVMsR0FBRyxlQUFlLENBQUM7YUFDL0I7WUFFRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssT0FBTyxFQUFFO2dCQUMzQixTQUFTLEdBQUcsY0FBYyxDQUFDO2FBQzlCO1lBRUQsTUFBTSxVQUFVLEdBQUcsR0FBRyxFQUFFO2dCQUVwQixJQUFJLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBRTlCLE9BQU8sQ0FBQyw2QkFBSyxLQUFLLEVBQUUsTUFBTSxDQUFDLFlBQVk7d0JBQ25DLG9CQUFDLHlCQUFTLElBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxHQUFHLENBQ3ZFLENBQUMsQ0FBQztpQkFFWDtnQkFFRCxPQUFPLENBQUMsZ0NBQVcsQ0FBQyxDQUFDO1lBRXpCLENBQUMsQ0FBQztZQUVGLE9BQU8sNkJBQUssS0FBSyxFQUFFLE1BQU0sQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUc7Z0JBRXhFLDZCQUFLLEtBQUssRUFBRSxNQUFNLENBQUMsaUJBQWlCLElBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBTztnQkFDL0QsNkJBQUssS0FBSyxFQUFFLE1BQU0sQ0FBQyxXQUFXLElBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBTztnQkFHbkQsb0JBQUMsVUFBVSxPQUFFLENBRVgsQ0FBQztRQUVYLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztDQUVKO0FBekZELDhCQXlGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0xvZ01lc3NhZ2V9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy9sb2dnZXIvTG9nZ2luZyc7XG5pbXBvcnQgUmVsZWFzaW5nUmVhY3RDb21wb25lbnQgZnJvbSAnLi4vZnJhbWV3b3JrL1JlbGVhc2luZ1JlYWN0Q29tcG9uZW50JztcbmltcG9ydCB7TWVtb3J5TG9nZ2VyfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvbG9nZ2VyL01lbW9yeUxvZ2dlcic7XG5pbXBvcnQgUmVhY3RKc29uIGZyb20gJ3JlYWN0LWpzb24tdmlldyc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuY2xhc3MgU3R5bGVzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgTG9nTWVzc2FnZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIH07XG5cbiAgICBwdWJsaWMgc3RhdGljIExvZ0ZpZWxkVGltZXN0YW1wOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICAgIGZvbnRGYW1pbHk6ICdDb3VyaWVyIE5ldywgbW9ub3NwYWNlJyxcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICc1cHgnLFxuICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICB9O1xuXG4gICAgcHVibGljIHN0YXRpYyBMb2dGaWVsZE1zZzogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICAgICAgZm9udEZhbWlseTogJ0NvdXJpZXIgTmV3LCBtb25vc3BhY2UnLFxuICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdub25lJ1xuICAgIH07XG5cbiAgICBwdWJsaWMgc3RhdGljIExvZ0ZpZWxkQXJnczogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICAgICAgbWFyZ2luTGVmdDogJzVweCdcbiAgICB9O1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ3NDb250ZW50IGV4dGVuZHMgUmVsZWFzaW5nUmVhY3RDb21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBNZW1vcnlMb2dnZXIudG9WaWV3KClcbiAgICAgICAgfTtcblxuICAgIH1cblxuXG4gICAgcHVibGljIGNvbXBvbmVudFdpbGxNb3VudCgpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLnJlbGVhc2VyLnJlZ2lzdGVyKFxuICAgICAgICAgICAgTWVtb3J5TG9nZ2VyLmFkZEV2ZW50TGlzdGVuZXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2VzOiBNZW1vcnlMb2dnZXIudG9WaWV3KCl9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzID0gWy4uLnRoaXMuc3RhdGUubWVzc2FnZXNdO1xuXG4gICAgICAgIGNvbnN0IGFyZ3NSZW5kZXJhYmxlID0gKGFyZ3M6IGFueSk6IGJvb2xlYW4gPT4ge1xuXG4gICAgICAgICAgICBpZiAoYXJncykge1xuXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJncykpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG1lc3NhZ2VzLnJldmVyc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAubWFwKGN1cnJlbnQgPT4ge1xuXG4gICAgICAgICAgICBsZXQgY2xhc3NOYW1lID0gXCJcIjtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnQubGV2ZWwgPT09ICd3YXJuJykge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9ICdhbGVydC13YXJuaW5nJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGN1cnJlbnQubGV2ZWwgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSAnYWxlcnQtZGFuZ2VyJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgUmVuZGVySlNPTiA9ICgpID0+IHtcblxuICAgICAgICAgICAgICAgIGlmIChhcmdzUmVuZGVyYWJsZShjdXJyZW50LmFyZ3MpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8ZGl2IHN0eWxlPXtTdHlsZXMuTG9nRmllbGRBcmdzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdEpzb24gc3JjPXtjdXJyZW50LmFyZ3N9IG5hbWU9eydhcmdzJ30gc2hvdWxkQ29sbGFwc2U9eygpID0+IHRydWV9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+KTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAoPGRpdj48L2Rpdj4pO1xuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17U3R5bGVzLkxvZ01lc3NhZ2V9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBrZXk9e2N1cnJlbnQuaWR4fT5cblxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e1N0eWxlcy5Mb2dGaWVsZFRpbWVzdGFtcH0+e2N1cnJlbnQudGltZXN0YW1wfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e1N0eWxlcy5Mb2dGaWVsZE1zZ30+e2N1cnJlbnQubXNnfTwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICA8UmVuZGVySlNPTi8+XG5cbiAgICAgICAgICAgIDwvZGl2PjtcblxuICAgICAgICB9KTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3RhdGUge1xuICAgIG1lc3NhZ2VzOiBSZWFkb25seUFycmF5PExvZ01lc3NhZ2U+O1xufVxuIl19