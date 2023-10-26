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
const ReactDOM = __importStar(require("react-dom"));
const App_1 = __importDefault(require("./App"));
const Logger_1 = require("../../../web/js/logger/Logger");
const log = Logger_1.Logger.create();
try {
    ReactDOM.render(React.createElement(App_1.default, null), document.getElementById('root'));
}
catch (e) {
    log.error("Could not render app: ", e);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlbnRyeS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLG9EQUFzQztBQUN0QyxnREFBd0I7QUFDeEIsMERBQXFEO0FBRXJELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixJQUFJO0lBRUEsUUFBUSxDQUFDLE1BQU0sQ0FDWCxvQkFBQyxhQUFHLE9BQUcsRUFDUCxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBZ0IsQ0FDakQsQ0FBQztDQUVMO0FBQUMsT0FBTyxDQUFDLEVBQUU7SUFDUixHQUFHLENBQUMsS0FBSyxDQUFDLHdCQUF3QixFQUFFLENBQUMsQ0FBQyxDQUFDO0NBQzFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uLy4uLy4uL3dlYi9qcy9sb2dnZXIvTG9nZ2VyJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG50cnkge1xuXG4gICAgUmVhY3RET00ucmVuZGVyKFxuICAgICAgICA8QXBwIC8+LFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpIGFzIEhUTUxFbGVtZW50XG4gICAgKTtcblxufSBjYXRjaCAoZSkge1xuICAgIGxvZy5lcnJvcihcIkNvdWxkIG5vdCByZW5kZXIgYXBwOiBcIiwgZSk7XG59XG4iXX0=