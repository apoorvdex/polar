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
const DonationsCard_1 = __importDefault(require("./DonationsCard"));
const GithubStarsCard_1 = __importDefault(require("./GithubStarsCard"));
const SurveyCard_1 = __importDefault(require("./SurveyCard"));
const log = Logger_1.Logger.create();
class CommunityContent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("div", { className: "container-fluid p-0" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-lg-6" },
                        React.createElement(DonationsCard_1.default, null)),
                    React.createElement("div", { className: "col-lg-6" },
                        React.createElement(GithubStarsCard_1.default, null))),
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-lg-6" },
                        React.createElement(SurveyCard_1.default, null))))));
    }
}
exports.default = CommunityContent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbXVuaXR5Q29udGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvbW11bml0eUNvbnRlbnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiw2REFBd0Q7QUFDeEQsb0VBQTRDO0FBQzVDLHdFQUFnRDtBQUNoRCw4REFBc0M7QUFFdEMsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQXFCLGdCQUFpQixTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUV6RSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUNaLENBQUM7SUFFTixDQUFDO0lBRU0sTUFBTTtRQUVULE9BQU8sQ0FFSDtZQUVJLDZCQUFLLFNBQVMsRUFBQyxxQkFBcUI7Z0JBRWhDLDZCQUFLLFNBQVMsRUFBQyxLQUFLO29CQUVoQiw2QkFBSyxTQUFTLEVBQUMsVUFBVTt3QkFDckIsb0JBQUMsdUJBQWEsT0FBRSxDQUNkO29CQUVOLDZCQUFLLFNBQVMsRUFBQyxVQUFVO3dCQUNyQixvQkFBQyx5QkFBZSxPQUFFLENBQ2hCLENBRUo7Z0JBR04sNkJBQUssU0FBUyxFQUFDLEtBQUs7b0JBT2hCLDZCQUFLLFNBQVMsRUFBQyxVQUFVO3dCQUNyQixvQkFBQyxvQkFBVSxPQUFFLENBQ1gsQ0FHSixDQUVKLENBK0JKLENBRVQsQ0FBQztJQUNOLENBQUM7Q0FFSjtBQWpGRCxtQ0FpRkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IERvbmF0aW9uc0NhcmQgZnJvbSAnLi9Eb25hdGlvbnNDYXJkJztcbmltcG9ydCBHaXRodWJTdGFyc0NhcmQgZnJvbSAnLi9HaXRodWJTdGFyc0NhcmQnO1xuaW1wb3J0IFN1cnZleUNhcmQgZnJvbSAnLi9TdXJ2ZXlDYXJkJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tdW5pdHlDb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBwLTBcIj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERvbmF0aW9uc0NhcmQvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R2l0aHViU3RhcnNDYXJkLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxNYWlsaW5nTGlzdENhcmQvPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPC9kaXY+Ki99XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdXJ2ZXlDYXJkLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+Ki99XG5cbiAgICAgICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxhIGhyZWY9XCJodHRwczovL2Rpc2NvcmQuZ2cvR1Q4TWhBNlwiPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuc2hpZWxkcy5pby9kaXNjb3JkLzQ3NzU2MDk2NDMzNDc0NzY2OC5zdmc/bG9nbz1kaXNjb3JkXCIvPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPC9hPiovfVxuICAgICAgICAgICAgICAgICAgICB7Lyo8L2Rpdj4qL31cblxuICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblwiPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9idXJ0b25hdG9yL3BvbGFyLWJvb2tzaGVsZi9yZWxlYXNlc1wiPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuc2hpZWxkcy5pby9naXRodWIvZG93bmxvYWRzL2J1cnRvbmF0b3IvcG9sYXItYm9va3NoZWxmL3RvdGFsLnN2Z1wiLz4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjwvYT4qL31cbiAgICAgICAgICAgICAgICAgICAgey8qPC9kaXY+Ki99XG5cbiAgICAgICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnVydG9uYXRvci9wb2xhci1ib29rc2hlbGZcIj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8aW1nIHNyYz1cImh0dHBzOi8vaW1nLnNoaWVsZHMuaW8vZ2l0aHViL3N0YXJzL2J1cnRvbmF0b3IvcG9sYXItYm9va3NoZWxmLnN2Zz9zdHlsZT1zb2NpYWwmbGFiZWw9U3RhclwiLz4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjwvYT4qL31cbiAgICAgICAgICAgICAgICAgICAgey8qPC9kaXY+Ki99XG5cbiAgICAgICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2dldHBvbGFyaXplZD9yZWZfc3JjPXR3c3JjJTVFdGZ3XCI+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGltZyBzcmM9XCJodHRwczovL2ltZy5zaGllbGRzLmlvL3R3aXR0ZXIvZm9sbG93L2dldHBvbGFyaXplZC5zdmc/c3R5bGU9c29jaWFsJmxhYmVsPUZvbGxvd1wiLz4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjwvYT4qL31cbiAgICAgICAgICAgICAgICAgICAgey8qPC9kaXY+Ki99XG5cbiAgICAgICAgICAgICAgICB7Lyo8L2Rpdj4qL31cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlIHtcblxufVxuIl19