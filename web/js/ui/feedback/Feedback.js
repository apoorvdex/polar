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
const Button_1 = __importDefault(require("reactstrap/lib/Button"));
const RendererAnalytics_1 = require("../../ga/RendererAnalytics");
class Feedback extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onFeedback = this.onFeedback.bind(this);
        this.onUnsure = this.onUnsure.bind(this);
        this.state = {
            completed: false
        };
    }
    render() {
        const Description = () => {
            if (this.props.description) {
                return React.createElement("p", { className: "text-center" }, this.props.description);
            }
            else {
                return React.createElement("div", null);
            }
        };
        const UnsureButton = () => {
            if (this.props.unsure) {
                return React.createElement("div", null,
                    React.createElement(Button_1.default, { size: 'sm', onClick: () => this.onUnsure() }, "Not sure yet"));
            }
            else {
                return React.createElement("div", null);
            }
        };
        const FeedbackButton = (props) => {
            let background = props.background;
            if (this.state.completed) {
                background = '#D8D8D8';
            }
            return React.createElement(Button_1.default, { size: 'sm', className: "text-dark", block: true, disabled: this.state.completed, style: {
                    width: '75px',
                    height: '35px',
                    margin: '5px',
                    display: 'block',
                    backgroundColor: background
                }, onClick: () => this.onFeedback(props.rating) }, props.rating);
        };
        const Thanks = () => {
            return React.createElement("div", { className: "text-center" },
                React.createElement("div", { className: "text-success m-1" },
                    React.createElement("i", { style: { fontSize: '125px' }, className: "fas fa-check-circle" })),
                React.createElement("h1", null, "Thanks for your feedback!"));
        };
        const FeedbackForm = () => {
            return React.createElement("div", { className: "m-1" },
                React.createElement("h3", null, this.props.title),
                React.createElement(Description, null),
                React.createElement("div", { style: {
                        width: '400px',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    } },
                    React.createElement("div", { style: {
                            display: 'flex',
                            width: '400px'
                        } },
                        React.createElement(FeedbackButton, { rating: 1, background: "rgba(255, 0, 0, 1.0)" }),
                        React.createElement(FeedbackButton, { rating: 2, background: "rgba(255, 0, 0, 0.8)" }),
                        React.createElement(FeedbackButton, { rating: 3, background: "rgba(255, 0, 0, 0.6)" }),
                        React.createElement(FeedbackButton, { rating: 4, background: "rgba(255, 0, 0, 0.4)" }),
                        React.createElement(FeedbackButton, { rating: 5, background: "rgba(255, 0, 0, 0.2)" }),
                        React.createElement(FeedbackButton, { rating: 6, background: "rgba(0, 255, 0, 0.2)" }),
                        React.createElement(FeedbackButton, { rating: 7, background: "rgba(0, 255, 0, 0.4)" }),
                        React.createElement(FeedbackButton, { rating: 8, background: "rgba(0, 255, 0, 0.6)" }),
                        React.createElement(FeedbackButton, { rating: 9, background: "rgba(0, 255, 0, 0.8)" }),
                        React.createElement(FeedbackButton, { rating: 10, background: "rgba(0, 255, 0, 1.0)" })),
                    React.createElement("div", { style: {
                            width: '400px',
                            display: 'flex',
                            paddingLeft: '5px',
                            paddingRight: '5px'
                        } },
                        React.createElement("span", { style: {} }, this.props.from),
                        React.createElement("span", { style: { marginLeft: 'auto' } }, this.props.to)),
                    React.createElement(UnsureButton, null)));
        };
        if (this.state.completed) {
            return React.createElement(Thanks, null);
        }
        else {
            return React.createElement(FeedbackForm, null);
        }
    }
    onFeedback(rating) {
        if (!this.props.noEvent) {
            RendererAnalytics_1.RendererAnalytics.event({
                category: this.props.category,
                action: `${rating}`,
                value: rating
            });
            console.log(`Sent feedback for category ${this.props.category}: ${rating}`);
        }
        this.markCompleted();
    }
    onUnsure() {
        if (!this.props.noEvent) {
            RendererAnalytics_1.RendererAnalytics.event({
                category: this.props.category,
                action: `unsure`,
            });
            console.log(`Sent unsure feedback for category ${this.props.category}`);
        }
        this.markCompleted();
    }
    markCompleted() {
        this.setState({
            completed: true
        });
    }
}
exports.Feedback = Feedback;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmVlZGJhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGZWVkYmFjay50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBRy9CLG1FQUEyQztBQUMzQyxrRUFBNkQ7QUFFN0QsTUFBYSxRQUFTLFNBQVEsS0FBSyxDQUFDLFNBQXlCO0lBRXpELFlBQVksS0FBVSxFQUFFLE9BQVk7UUFDaEMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFekMsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULFNBQVMsRUFBRSxLQUFLO1NBQ25CLENBQUM7SUFFTixDQUFDO0lBRU0sTUFBTTtRQU9ULE1BQU0sV0FBVyxHQUFHLEdBQUcsRUFBRTtZQUVyQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFO2dCQUN4QixPQUFPLDJCQUFHLFNBQVMsRUFBQyxhQUFhLElBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUssQ0FBQzthQUNsRTtpQkFBTTtnQkFDSCxPQUFPLGdDQUFXLENBQUM7YUFDdEI7UUFFTCxDQUFDLENBQUM7UUFFRixNQUFNLFlBQVksR0FBRyxHQUFHLEVBQUU7WUFFdEIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDbkIsT0FBTztvQkFDSCxvQkFBQyxnQkFBTSxJQUFDLElBQUksRUFBQyxJQUFJLEVBQ1QsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsbUJBQXVCLENBQzNELENBQUM7YUFDVjtpQkFBTTtnQkFDSCxPQUFPLGdDQUFXLENBQUM7YUFDdEI7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LEVBQUUsQ0FBQyxDQUFDO1NBRTNFO1FBRUQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBRXpCLENBQUM7SUFFTyxhQUFhO1FBRWpCLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDVixTQUFTLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUM7SUFFUCxDQUFDO0NBRUo7QUFuTUQsNEJBbU1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IERyb3Bkb3duLCB7RHJvcGRvd25CdXR0b24sIERyb3Bkb3duTWVudSwgRHJvcGRvd25NZW51V3JhcHBlciwgRHJvcGRvd25Ub2dnbGUsIE1lbnVJdGVtfSBmcm9tICdAYnVydG9uYXRvci9yZWFjdC1kcm9wZG93bic7XG5pbXBvcnQge05VTExfRlVOQ1RJT059IGZyb20gJy4uLy4uL3V0aWwvRnVuY3Rpb25zJztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3RzdHJhcC9saWIvQnV0dG9uJztcbmltcG9ydCB7UmVuZGVyZXJBbmFseXRpY3N9IGZyb20gJy4uLy4uL2dhL1JlbmRlcmVyQW5hbHl0aWNzJztcblxuZXhwb3J0IGNsYXNzIEZlZWRiYWNrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogYW55LCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMub25GZWVkYmFjayA9IHRoaXMub25GZWVkYmFjay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uVW5zdXJlID0gdGhpcy5vblVuc3VyZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGludGVyZmFjZSBGZWVkYmFja0J1dHRvblByb3BzIHtcbiAgICAgICAgICAgIHJlYWRvbmx5IHJhdGluZzogUmF0aW5nO1xuICAgICAgICAgICAgcmVhZG9ubHkgYmFja2dyb3VuZDogc3RyaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgRGVzY3JpcHRpb24gPSAoKSA9PiB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+e3RoaXMucHJvcHMuZGVzY3JpcHRpb259PC9wPjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxkaXY+PC9kaXY+O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgVW5zdXJlQnV0dG9uID0gKCkgPT4ge1xuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy51bnN1cmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPSdzbSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uVW5zdXJlKCl9Pk5vdCBzdXJlIHlldDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxkaXY+PC9kaXY+O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgRmVlZGJhY2tCdXR0b24gPSAocHJvcHM6IEZlZWRiYWNrQnV0dG9uUHJvcHMpID0+IHtcblxuICAgICAgICAgICAgbGV0IGJhY2tncm91bmQgPSBwcm9wcy5iYWNrZ3JvdW5kO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5jb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kID0gJyNEOEQ4RDgnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gPEJ1dHRvbiBzaXplPSdzbSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZGFya1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBibG9jaz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmNvbXBsZXRlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc3NXB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICczNXB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICc1cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBiYWNrZ3JvdW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5vbkZlZWRiYWNrKHByb3BzLnJhdGluZyl9PlxuXG4gICAgICAgICAgICAgICAge3Byb3BzLnJhdGluZ31cblxuICAgICAgICAgICAgPC9CdXR0b24+O1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IFRoYW5rcyA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc3VjY2VzcyBtLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgc3R5bGU9e3tmb250U2l6ZTogJzEyNXB4J319XG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhcyBmYS1jaGVjay1jaXJjbGVcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8aDE+VGhhbmtzIGZvciB5b3VyIGZlZWRiYWNrITwvaDE+XG5cbiAgICAgICAgICAgIDwvZGl2PjtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBGZWVkYmFja0Zvcm0gPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJtLTFcIj5cblxuICAgICAgICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy50aXRsZX08L2gzPlxuXG4gICAgICAgICAgICAgICAgPERlc2NyaXB0aW9uLz5cblxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc0MDBweCcsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICdhdXRvJ1xuICAgICAgICAgICAgICAgIH19PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNDAwcHgnXG4gICAgICAgICAgICAgICAgICAgIH19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmVlZGJhY2tCdXR0b24gcmF0aW5nPXsxfSAgYmFja2dyb3VuZD1cInJnYmEoMjU1LCAwLCAwLCAxLjApXCIvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmVlZGJhY2tCdXR0b24gcmF0aW5nPXsyfSAgYmFja2dyb3VuZD1cInJnYmEoMjU1LCAwLCAwLCAwLjgpXCIvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmVlZGJhY2tCdXR0b24gcmF0aW5nPXszfSAgYmFja2dyb3VuZD1cInJnYmEoMjU1LCAwLCAwLCAwLjYpXCIvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmVlZGJhY2tCdXR0b24gcmF0aW5nPXs0fSAgYmFja2dyb3VuZD1cInJnYmEoMjU1LCAwLCAwLCAwLjQpXCIvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmVlZGJhY2tCdXR0b24gcmF0aW5nPXs1fSAgYmFja2dyb3VuZD1cInJnYmEoMjU1LCAwLCAwLCAwLjIpXCIvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmVlZGJhY2tCdXR0b24gcmF0aW5nPXs2fSAgYmFja2dyb3VuZD1cInJnYmEoMCwgMjU1LCAwLCAwLjIpXCIvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmVlZGJhY2tCdXR0b24gcmF0aW5nPXs3fSAgYmFja2dyb3VuZD1cInJnYmEoMCwgMjU1LCAwLCAwLjQpXCIvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmVlZGJhY2tCdXR0b24gcmF0aW5nPXs4fSAgYmFja2dyb3VuZD1cInJnYmEoMCwgMjU1LCAwLCAwLjYpXCIvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmVlZGJhY2tCdXR0b24gcmF0aW5nPXs5fSAgYmFja2dyb3VuZD1cInJnYmEoMCwgMjU1LCAwLCAwLjgpXCIvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmVlZGJhY2tCdXR0b24gcmF0aW5nPXsxMH0gYmFja2dyb3VuZD1cInJnYmEoMCwgMjU1LCAwLCAxLjApXCIvPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNDAwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICc1cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnNXB4J1xuICAgICAgICAgICAgICAgICAgICB9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3t9fT57dGhpcy5wcm9wcy5mcm9tfTwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3ttYXJnaW5MZWZ0OiAnYXV0byd9fT57dGhpcy5wcm9wcy50b308L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPFVuc3VyZUJ1dHRvbi8+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+O1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY29tcGxldGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gPFRoYW5rcy8+O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDxGZWVkYmFja0Zvcm0vPjtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkZlZWRiYWNrKHJhdGluZzogUmF0aW5nKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5wcm9wcy5ub0V2ZW50KSB7XG5cbiAgICAgICAgICAgIFJlbmRlcmVyQW5hbHl0aWNzLmV2ZW50KHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogdGhpcy5wcm9wcy5jYXRlZ29yeSxcbiAgICAgICAgICAgICAgICBhY3Rpb246IGAke3JhdGluZ31gLFxuICAgICAgICAgICAgICAgIHZhbHVlOiByYXRpbmdcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgU2VudCBmZWVkYmFjayBmb3IgY2F0ZWdvcnkgJHt0aGlzLnByb3BzLmNhdGVnb3J5fTogJHtyYXRpbmd9YCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubWFya0NvbXBsZXRlZCgpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblVuc3VyZSgpICB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5wcm9wcy5ub0V2ZW50KSB7XG5cbiAgICAgICAgICAgIFJlbmRlcmVyQW5hbHl0aWNzLmV2ZW50KHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogdGhpcy5wcm9wcy5jYXRlZ29yeSxcbiAgICAgICAgICAgICAgICBhY3Rpb246IGB1bnN1cmVgLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTZW50IHVuc3VyZSBmZWVkYmFjayBmb3IgY2F0ZWdvcnkgJHt0aGlzLnByb3BzLmNhdGVnb3J5fWApO1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1hcmtDb21wbGV0ZWQoKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgbWFya0NvbXBsZXRlZCgpIHtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNvbXBsZXRlZDogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XG5cbiAgICByZWFkb25seSBjYXRlZ29yeTogc3RyaW5nO1xuXG4gICAgcmVhZG9ubHkgdGl0bGU6IHN0cmluZztcblxuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogVGV4dCBkZXNjcmliaW5nIHRoZSBtaW5pbXVtIHZhbHVlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGZyb206IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFRleHQgZGVzY3JpYmluZyB0aGUgbWF4IHZhbHVlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRvOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBEb24ndCBzZW5kIHRoZSBldmVudCBvbiBmb3JtIHN1Ym1pc3Npb24uICBKdXN0IGZvciB0ZXN0aW5nLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5vRXZlbnQ/OiBib29sZWFuO1xuXG4gICAgcmVhZG9ubHkgb25SYXRlZD86ICgpID0+IHZvaWQ7XG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUgd2UgaW5jbHVkZSBhIGJ1dHRvbiBhdCB0aGUgYm90dG9tIHNvIHRoYXQgdGhlIHVzZXIgY2FuIHNraXBcbiAgICAgKiBzZW5kaW5nIHRoZSBmZWVkYmFjay5cbiAgICAgKi9cbiAgICByZWFkb25seSB1bnN1cmU/OiBib29sZWFuO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlIHtcbiAgICByZWFkb25seSBjb21wbGV0ZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCB0eXBlIFJhdGluZyA9IDEgfCAyIHwgMyB8IDQgfCA1IHwgNiB8IDcgfCA4IHwgOSB8IDEwO1xuIl19