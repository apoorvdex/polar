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
const react_moment_1 = __importDefault(require("react-moment"));
const FlashcardDropdown_1 = require("./FlashcardDropdown");
const Logger_1 = require("../../logger/Logger");
const log = Logger_1.Logger.create();
const Styles = {
    barBody: {
        display: 'flex'
    },
    barChild: {
        marginTop: 'auto',
        marginBottom: 'auto',
    }
};
class FlashcardComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onDelete = this.onDelete.bind(this);
        this.state = {};
    }
    render() {
        const { flashcard } = this.props;
        const key = 'comment-' + flashcard.id;
        const RenderFrontAndBackFields = () => {
            return (React.createElement("div", null,
                React.createElement("div", { className: "pb-1 pt-1" },
                    React.createElement("span", { dangerouslySetInnerHTML: { __html: flashcard.fields.front } })),
                React.createElement("div", { className: "pb-1 pt-1 border-top" },
                    React.createElement("span", { dangerouslySetInnerHTML: { __html: flashcard.fields.back } }))));
        };
        const RenderClozeFields = () => {
            return (React.createElement("div", null,
                React.createElement("div", { className: "pb-1 pt-1" },
                    React.createElement("span", { dangerouslySetInnerHTML: { __html: flashcard.fields.text } }))));
        };
        const RenderFields = () => {
            if (flashcard.fields.text) {
                return (React.createElement(RenderClozeFields, null));
            }
            else {
                return (React.createElement(RenderFrontAndBackFields, null));
            }
        };
        return (React.createElement("div", { key: key, className: "mt-1" },
            React.createElement("div", { className: "flashcard card shadow-sm mb-3" },
                React.createElement("div", { className: "card-body p-1" },
                    React.createElement(RenderFields, null))),
            React.createElement("div", { style: Styles.barBody, className: "flexbar comment-bar border-top pt-1" },
                React.createElement("div", { style: Styles.barChild, className: "text-muted" },
                    React.createElement(react_moment_1.default, { withTitle: true, titleFormat: "D MMM YYYY hh:MM A", fromNow: true }, flashcard.created)),
                React.createElement("div", { style: Styles.barChild, className: "flexbar-right" },
                    React.createElement(FlashcardDropdown_1.FlashcardDropdown, { id: 'flashcard-dropdown-' + flashcard.id, flashcard: flashcard, onDelete: () => this.onDelete(flashcard) })))));
    }
    onDelete(flashcard) {
        log.info("Flashcard deleted: ", flashcard);
        delete flashcard.pageMeta.flashcards[flashcard.id];
    }
}
exports.FlashcardComponent = FlashcardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxhc2hjYXJkQ29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRmxhc2hjYXJkQ29tcG9uZW50LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsZ0VBQWtDO0FBRWxDLDJEQUFzRDtBQUN0RCxnREFBMkM7QUFHM0MsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQU0sTUFBTSxHQUFjO0lBRXRCLE9BQU8sRUFBRTtRQUNMLE9BQU8sRUFBRSxNQUFNO0tBQ2xCO0lBRUQsUUFBUSxFQUFFO1FBQ04sU0FBUyxFQUFFLE1BQU07UUFDakIsWUFBWSxFQUFFLE1BQU07S0FDdkI7Q0FFSixDQUFDO0FBS0YsTUFBYSxrQkFBbUIsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFbkUsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFFcEIsQ0FBQztJQUVNLE1BQU07UUFDVCxNQUFNLEVBQUUsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUVqQyxNQUFNLEdBQUcsR0FBRyxVQUFVLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQztRQUV0QyxNQUFNLHdCQUF3QixHQUFHLEdBQUcsRUFBRTtZQUVsQyxPQUFPLENBQ0g7Z0JBRUksNkJBQUssU0FBUyxFQUFDLFdBQVc7b0JBRWxCLDhCQUFNLHVCQUF1QixFQUFFLEVBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxNQUFPLENBQUMsS0FBSyxFQUFDLEdBRXpELENBRVQ7Z0JBRU4sNkJBQUssU0FBUyxFQUFDLHNCQUFzQjtvQkFFN0IsOEJBQU0sdUJBQXVCLEVBQUUsRUFBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLE1BQU8sQ0FBQyxJQUFJLEVBQUMsR0FFeEQsQ0FFVCxDQUVKLENBQ1QsQ0FBQztRQUVOLENBQUMsQ0FBQztRQUVGLE1BQU0saUJBQWlCLEdBQUcsR0FBRyxFQUFFO1lBRTNCLE9BQU8sQ0FDSDtnQkFDSSw2QkFBSyxTQUFTLEVBQUMsV0FBVztvQkFDdEIsOEJBQU0sdUJBQXVCLEVBQUUsRUFBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLE1BQU8sQ0FBQyxJQUFJLEVBQUMsR0FDeEQsQ0FDTCxDQUNKLENBQ1QsQ0FBQztRQUVOLENBQUMsQ0FBQztRQUVGLE1BQU0sWUFBWSxHQUFHLEdBQUcsRUFBRTtZQUV0QixJQUFJLFNBQVMsQ0FBQyxNQUFPLENBQUMsSUFBSSxFQUFFO2dCQUN4QixPQUFPLENBQUMsb0JBQUMsaUJBQWlCLE9BQUUsQ0FBQyxDQUFDO2FBQ2pDO2lCQUFNO2dCQUNILE9BQU8sQ0FBQyxvQkFBQyx3QkFBd0IsT0FBRSxDQUFDLENBQUM7YUFDeEM7UUFFTCxDQUFDLENBQUM7UUFFRixPQUFPLENBRUgsNkJBQUssR0FBRyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUMsTUFBTTtZQUUzQiw2QkFBSyxTQUFTLEVBQUMsK0JBQStCO2dCQUUxQyw2QkFBSyxTQUFTLEVBQUMsZUFBZTtvQkFFMUIsb0JBQUMsWUFBWSxPQUFFLENBRWIsQ0FFSjtZQUVOLDZCQUFLLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxFQUNyQixTQUFTLEVBQUMscUNBQXFDO2dCQUVoRCw2QkFBSyxLQUFLLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUMsWUFBWTtvQkFFL0Msb0JBQUMsc0JBQU0sSUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBQyxvQkFBb0IsRUFBQyxPQUFPLFVBQzVELFNBQVMsQ0FBQyxPQUFPLENBQ2IsQ0FDUDtnQkFFTiw2QkFBSyxLQUFLLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUMsZUFBZTtvQkFDbEQsb0JBQUMscUNBQWlCLElBQUMsRUFBRSxFQUFFLHFCQUFxQixHQUFHLFNBQVMsQ0FBQyxFQUFFLEVBQ3hDLFNBQVMsRUFBRSxTQUFTLEVBQ3BCLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQzVELENBRUosQ0FFSixDQUNULENBQUM7SUFDTixDQUFDO0lBRU8sUUFBUSxDQUFDLFNBQXdCO1FBQ3JDLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDM0MsT0FBTyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdkQsQ0FBQztDQUdKO0FBMUdELGdEQTBHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNb21lbnQgZnJvbSAncmVhY3QtbW9tZW50JztcbmltcG9ydCB7RG9jQW5ub3RhdGlvbn0gZnJvbSAnLi4vRG9jQW5ub3RhdGlvbic7XG5pbXBvcnQge0ZsYXNoY2FyZERyb3Bkb3dufSBmcm9tICcuL0ZsYXNoY2FyZERyb3Bkb3duJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7SVN0eWxlTWFwfSBmcm9tICcuLi8uLi9yZWFjdC9JU3R5bGVNYXAnO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmNvbnN0IFN0eWxlczogSVN0eWxlTWFwID0ge1xuXG4gICAgYmFyQm9keToge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCdcbiAgICB9LFxuXG4gICAgYmFyQ2hpbGQ6IHtcbiAgICAgICAgbWFyZ2luVG9wOiAnYXV0bycsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogJ2F1dG8nLFxuICAgIH1cblxufTtcblxuLyoqXG4gKiBBIGdlbmVyaWMgd3JhcHBlciB0aGF0IGRldGVybWluZXMgd2hpY2ggc3ViLWNvbXBvbmVudCB0byByZW5kZXIuXG4gKi9cbmV4cG9ydCBjbGFzcyBGbGFzaGNhcmRDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5vbkRlbGV0ZSA9IHRoaXMub25EZWxldGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBmbGFzaGNhcmQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgY29uc3Qga2V5ID0gJ2NvbW1lbnQtJyArIGZsYXNoY2FyZC5pZDtcblxuICAgICAgICBjb25zdCBSZW5kZXJGcm9udEFuZEJhY2tGaWVsZHMgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTEgcHQtMVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGZsYXNoY2FyZC5maWVsZHMhLmZyb250fX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi0xIHB0LTEgYm9yZGVyLXRvcFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGZsYXNoY2FyZC5maWVsZHMhLmJhY2t9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IFJlbmRlckNsb3plRmllbGRzID0gKCkgPT4ge1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItMSBwdC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogZmxhc2hjYXJkLmZpZWxkcyEudGV4dH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBSZW5kZXJGaWVsZHMgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgIGlmIChmbGFzaGNhcmQuZmllbGRzIS50ZXh0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICg8UmVuZGVyQ2xvemVGaWVsZHMvPik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAoPFJlbmRlckZyb250QW5kQmFja0ZpZWxkcy8+KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT1cIm10LTFcIj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxhc2hjYXJkIGNhcmQgc2hhZG93LXNtIG1iLTNcIj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBwLTFcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlbmRlckZpZWxkcy8+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e1N0eWxlcy5iYXJCb2R5fVxuICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleGJhciBjb21tZW50LWJhciBib3JkZXItdG9wIHB0LTFcIj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtTdHlsZXMuYmFyQ2hpbGR9IGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKlRPRE86IG1ha2UgdGhpcyBpbnRvIGl0cyBvd24gY29tcG9uZW50Li4uICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPE1vbWVudCB3aXRoVGl0bGU9e3RydWV9IHRpdGxlRm9ybWF0PVwiRCBNTU0gWVlZWSBoaDpNTSBBXCIgZnJvbU5vdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zmxhc2hjYXJkLmNyZWF0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L01vbWVudD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17U3R5bGVzLmJhckNoaWxkfSBjbGFzc05hbWU9XCJmbGV4YmFyLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rmxhc2hjYXJkRHJvcGRvd24gaWQ9eydmbGFzaGNhcmQtZHJvcGRvd24tJyArIGZsYXNoY2FyZC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGFzaGNhcmQ9e2ZsYXNoY2FyZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gdGhpcy5vbkRlbGV0ZShmbGFzaGNhcmQpfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25EZWxldGUoZmxhc2hjYXJkOiBEb2NBbm5vdGF0aW9uKSB7XG4gICAgICAgIGxvZy5pbmZvKFwiRmxhc2hjYXJkIGRlbGV0ZWQ6IFwiLCBmbGFzaGNhcmQpO1xuICAgICAgICBkZWxldGUgZmxhc2hjYXJkLnBhZ2VNZXRhLmZsYXNoY2FyZHNbZmxhc2hjYXJkLmlkXTtcbiAgICB9XG5cblxufVxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgZmxhc2hjYXJkOiBEb2NBbm5vdGF0aW9uO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcblxufVxuXG5cbiJdfQ==