"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_joyride_1 = __importStar(require("react-joyride"));
const React = __importStar(require("react"));
const LifecycleToggle_1 = require("../../ui/util/LifecycleToggle");
const LifecycleEvents_1 = require("../../ui/util/LifecycleEvents");
const RendererAnalytics_1 = require("../../ga/RendererAnalytics");
const JoyrideTours_1 = require("../../ui/tours/JoyrideTours");
const AppRuntime_1 = require("../../AppRuntime");
class Styles {
}
Styles.IMG = {
    maxWidth: '450px',
    maxHeight: '325px',
    marginBottom: '10px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
};
exports.Styles = Styles;
class ViewerTour extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onCallback = this.onCallback.bind(this);
        const run = !LifecycleToggle_1.LifecycleToggle.isMarked(LifecycleEvents_1.LifecycleEvents.VIEWER_TOUR_TERMINATED) &&
            AppRuntime_1.AppRuntime.isElectron();
        this.state = {
            run
        };
    }
    render() {
        const Term = (props) => {
            return React.createElement("b", null,
                React.createElement("i", null, props.children));
        };
        const Title = (props) => {
            return React.createElement("div", { style: { fontSize: '22px' } }, props.children);
        };
        const steps = [
            JoyrideTours_1.JoyrideTours.createImageStep({
                target: '.polar-sidebar',
                title: React.createElement(Title, null, "Document Viewer"),
                content: React.createElement("div", null,
                    React.createElement("p", null,
                        "This is the main document viewer and allows you to both view and ",
                        React.createElement(Term, null, "annotate"),
                        " documents."),
                    React.createElement("p", null, "It supports the following features: "),
                    React.createElement("ul", { style: { marginLeft: '20px' } },
                        React.createElement("li", null, "Keeping track of your reading with pagemarks."),
                        React.createElement("li", null, "Highlighting text within the document"),
                        React.createElement("li", null, "Creating comments and flashcards attached to these highlights."))),
                image: "/web/assets/images/doc.svg",
                placement: 'center'
            }),
            {
                target: '.polar-sidebar',
                title: React.createElement(Title, null, "Annotation Sidebar"),
                disableBeacon: true,
                placement: 'left-start',
                spotlightPadding: 0,
                content: React.createElement("div", null,
                    React.createElement("p", null,
                        "The ",
                        React.createElement(Term, null, "annotation sidebar"),
                        " lists all annotations on the current document including highlights , comments, and flashcards."))
            },
            {
                target: '#polar-progress',
                title: React.createElement(Title, null, "Progress Bar"),
                disableBeacon: true,
                spotlightPadding: 0,
                content: React.createElement("div", null,
                    React.createElement("p", null,
                        "The ",
                        React.createElement(Term, null, "progress bar"),
                        " keeps track of how much of the document you've read by using ",
                        React.createElement(Term, null, "pagemarks"),
                        "."),
                    React.createElement("p", null, "Pagemarks are manually created by the user while reading documents."),
                    React.createElement("p", null,
                        "To create a pagemark just ",
                        React.createElement(Term, null, "right click"),
                        " and select ",
                        React.createElement(Term, null, "Create Pagemark to Point"),
                        "."),
                    React.createElement("p", null, "Also, when using pagemarks we will automatically resume your reading by jumping to the point where you last left off."))
            },
            {
                target: '.annotation-sidebar .text-highlight',
                title: React.createElement(Title, null, "Text Highlights"),
                disableBeacon: true,
                spotlightPadding: 5,
                content: React.createElement("div", null,
                    React.createElement("p", null,
                        React.createElement(Term, null, "Text highlights"),
                        " are stored for easy reference on the annotation sidebar."),
                    React.createElement("p", null,
                        "This includes both associated ",
                        React.createElement(Term, null, "comments"),
                        " and ",
                        React.createElement(Term, null, "flashcards"),
                        ".")),
                placement: 'left'
            },
        ];
        return (React.createElement(react_joyride_1.default, { steps: steps, continuous: true, callback: data => this.onCallback(data), run: this.state.run, showProgress: true, showSkipButton: true, styles: {
                options: {
                    primaryColor: '#007bff',
                    zIndex: 999999999,
                },
                tooltipContainer: {
                    textAlign: 'left',
                }
            } }));
    }
    onCallback(callbackProps) {
        RendererAnalytics_1.RendererAnalytics.event({ category: 'viewer-tour-steps', action: 'did-step-' + callbackProps.index });
        if (callbackProps.status === react_joyride_1.STATUS.SKIPPED || callbackProps.status === react_joyride_1.STATUS.FINISHED) {
            try {
                switch (callbackProps.status) {
                    case react_joyride_1.STATUS.SKIPPED:
                        RendererAnalytics_1.RendererAnalytics.event({ category: 'viewer-tour-result', action: 'skipped' });
                        RendererAnalytics_1.RendererAnalytics.event({ category: 'viewer-tour-skip', action: 'skipped-at-step-' + callbackProps.index });
                        LifecycleToggle_1.LifecycleToggle.mark(LifecycleEvents_1.LifecycleEvents.VIEWER_TOUR_SKIPPED);
                        break;
                    case react_joyride_1.STATUS.FINISHED:
                        RendererAnalytics_1.RendererAnalytics.event({ category: 'viewer-tour-result', action: 'finished' });
                        LifecycleToggle_1.LifecycleToggle.mark(LifecycleEvents_1.LifecycleEvents.VIEWER_TOUR_FINISHED);
                        break;
                }
            }
            finally {
                LifecycleToggle_1.LifecycleToggle.mark(LifecycleEvents_1.LifecycleEvents.VIEWER_TOUR_TERMINATED);
            }
        }
    }
}
exports.ViewerTour = ViewerTour;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlld2VyVG91ci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlZpZXdlclRvdXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLCtEQUFtRTtBQUNuRSw2Q0FBK0I7QUFDL0IsbUVBQThEO0FBQzlELG1FQUE4RDtBQUM5RCxrRUFBNkQ7QUFDN0QsOERBQXlEO0FBQ3pELGlEQUE0QztBQUU1QyxNQUFhLE1BQU07O0FBRUQsVUFBRyxHQUF3QjtJQUNyQyxRQUFRLEVBQUUsT0FBTztJQUNqQixTQUFTLEVBQUUsT0FBTztJQUNsQixZQUFZLEVBQUUsTUFBTTtJQUNwQixPQUFPLEVBQUUsT0FBTztJQUNoQixVQUFVLEVBQUUsTUFBTTtJQUNsQixXQUFXLEVBQUUsTUFBTTtDQUN0QixDQUFDO0FBVE4sd0JBV0M7QUFFRCxNQUFhLFVBQVcsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFM0QsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFN0MsTUFBTSxHQUFHLEdBQ0wsQ0FBRSxpQ0FBZSxDQUFDLFFBQVEsQ0FBQyxpQ0FBZSxDQUFDLHNCQUFzQixDQUFDO1lBQ2xFLHVCQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFNUIsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULEdBQUc7U0FDTixDQUFDO0lBRU4sQ0FBQztJQUVNLE1BQU07UUFFVCxNQUFNLElBQUksR0FBRyxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQ3hCLE9BQU87Z0JBQUcsK0JBQUksS0FBSyxDQUFDLFFBQVEsQ0FBSyxDQUFJLENBQUM7UUFDMUMsQ0FBQyxDQUFDO1FBRUYsTUFBTSxLQUFLLEdBQUcsQ0FBQyxLQUFVLEVBQUUsRUFBRTtZQUN6QixPQUFPLDZCQUFLLEtBQUssRUFB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QUFLLHNCQUFNLENBQUMsT0FBTzt3QkFDZixxQ0FBaUIsQ0FBQyxLQUFLLENBQUMsRUFBQyxRQUFRLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBQyxDQUFDLENBQUM7d0JBQzdFLHFDQUFpQixDQUFDLEtBQUssQ0FBQyxFQUFDLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEdBQUcsYUFBYSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7d0JBRTFHLGlDQUFlLENBQUMsSUFBSSxDQUFDLGlDQUFlLENBQUMsbUJBQW1CLENBQUMsQ0FBQzt3QkFDMUQsTUFBTTtvQkFFVixLQUFLLHNCQUFNLENBQUMsUUFBUTt3QkFDaEIscUNBQWlCLENBQUMsS0FBSyxDQUFDLEVBQUMsUUFBUSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUMsQ0FBQyxDQUFDO3dCQUU5RSxpQ0FBZSxDQUFDLElBQUksQ0FBQyxpQ0FBZSxDQUFDLG9CQUFvQixDQUFDLENBQUM7d0JBQzNELE1BQU07aUJBQ2I7YUFFSjtvQkFBUztnQkFDTixpQ0FBZSxDQUFDLElBQUksQ0FBQyxpQ0FBZSxDQUFDLHNCQUFzQixDQUFDLENBQUM7YUFDaEU7U0FFSjtJQUVMLENBQUM7Q0FFSjtBQXZNRCxnQ0F1TUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm95cmlkZSwge0NhbGxCYWNrUHJvcHMsIFN0ZXAsIFNUQVRVU30gZnJvbSAncmVhY3Qtam95cmlkZSc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpZmVjeWNsZVRvZ2dsZX0gZnJvbSAnLi4vLi4vdWkvdXRpbC9MaWZlY3ljbGVUb2dnbGUnO1xuaW1wb3J0IHtMaWZlY3ljbGVFdmVudHN9IGZyb20gJy4uLy4uL3VpL3V0aWwvTGlmZWN5Y2xlRXZlbnRzJztcbmltcG9ydCB7UmVuZGVyZXJBbmFseXRpY3N9IGZyb20gJy4uLy4uL2dhL1JlbmRlcmVyQW5hbHl0aWNzJztcbmltcG9ydCB7Sm95cmlkZVRvdXJzfSBmcm9tICcuLi8uLi91aS90b3Vycy9Kb3lyaWRlVG91cnMnO1xuaW1wb3J0IHtBcHBSdW50aW1lfSBmcm9tICcuLi8uLi9BcHBSdW50aW1lJztcblxuZXhwb3J0IGNsYXNzIFN0eWxlcyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIElNRzogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICAgICAgbWF4V2lkdGg6ICc0NTBweCcsXG4gICAgICAgIG1heEhlaWdodDogJzMyNXB4JyxcbiAgICAgICAgbWFyZ2luQm90dG9tOiAnMTBweCcsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcbiAgICB9O1xuXG59XG5cbmV4cG9ydCBjbGFzcyBWaWV3ZXJUb3VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMub25DYWxsYmFjayA9IHRoaXMub25DYWxsYmFjay5iaW5kKHRoaXMpO1xuXG4gICAgICAgIGNvbnN0IHJ1biA9XG4gICAgICAgICAgICAhIExpZmVjeWNsZVRvZ2dsZS5pc01hcmtlZChMaWZlY3ljbGVFdmVudHMuVklFV0VSX1RPVVJfVEVSTUlOQVRFRCkgJiZcbiAgICAgICAgICAgIEFwcFJ1bnRpbWUuaXNFbGVjdHJvbigpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBydW5cbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgVGVybSA9IChwcm9wczogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPGI+PGk+e3Byb3BzLmNoaWxkcmVufTwvaT48L2I+O1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IFRpdGxlID0gKHByb3BzOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6ICcyMnB4J319Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj47XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgc3RlcHM6IFN0ZXBbXSA9IFtcbiAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgIC8vICAgICB0YXJnZXQ6ICcucG9sYXItc2lkZWJhcicsXG4gICAgICAgICAgICAvLyAgICAgY29udGVudDogPGRpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgPGgyPkRvY3VtZW50IFZpZXdlcjwvaDI+XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgICAgICA8aW1nIHNyYz1cIi93ZWIvYXNzZXRzL2ltYWdlcy9kb2Muc3ZnXCIgc3R5bGU9e1N0eWxlcy5JTUd9Lz5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgIDwvZGl2PixcbiAgICAgICAgICAgIC8vICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgd2lkdGg6ICc2NTBweCdcbiAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgIH0sXG4gICAgICAgICAgICAvLyAgICAgZGlzYWJsZUJlYWNvbjogdHJ1ZSxcbiAgICAgICAgICAgIC8vICAgICBwbGFjZW1lbnQ6ICdjZW50ZXInXG4gICAgICAgICAgICAvLyB9LFxuXG4gICAgICAgICAgICBKb3lyaWRlVG91cnMuY3JlYXRlSW1hZ2VTdGVwKHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6ICcucG9sYXItc2lkZWJhcicsXG4gICAgICAgICAgICAgICAgdGl0bGU6IDxUaXRsZT5Eb2N1bWVudCBWaWV3ZXI8L1RpdGxlPixcbiAgICAgICAgICAgICAgICBjb250ZW50OiA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgdGhlIG1haW4gZG9jdW1lbnQgdmlld2VyIGFuZCBhbGxvd3MgeW91IHRvIGJvdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXcgYW5kIDxUZXJtPmFubm90YXRlPC9UZXJtPiBkb2N1bWVudHMuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8cD5JdCBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIGZlYXR1cmVzOiA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7bWFyZ2luTGVmdDogJzIwcHgnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+S2VlcGluZyB0cmFjayBvZiB5b3VyIHJlYWRpbmcgd2l0aCBwYWdlbWFya3MuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5IaWdobGlnaHRpbmcgdGV4dCB3aXRoaW4gdGhlIGRvY3VtZW50PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5DcmVhdGluZyBjb21tZW50cyBhbmQgZmxhc2hjYXJkcyBhdHRhY2hlZCB0byB0aGVzZSBoaWdobGlnaHRzLjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+LFxuICAgICAgICAgICAgICAgIGltYWdlOiBcIi93ZWIvYXNzZXRzL2ltYWdlcy9kb2Muc3ZnXCIsXG4gICAgICAgICAgICAgICAgcGxhY2VtZW50OiAnY2VudGVyJ1xuICAgICAgICAgICAgfSksXG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6ICcucG9sYXItc2lkZWJhcicsXG4gICAgICAgICAgICAgICAgdGl0bGU6IDxUaXRsZT5Bbm5vdGF0aW9uIFNpZGViYXI8L1RpdGxlPixcbiAgICAgICAgICAgICAgICBkaXNhYmxlQmVhY29uOiB0cnVlLFxuICAgICAgICAgICAgICAgIHBsYWNlbWVudDogJ2xlZnQtc3RhcnQnLFxuICAgICAgICAgICAgICAgIHNwb3RsaWdodFBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgICAgY29udGVudDogPGRpdj5cblxuICAgICAgICAgICAgICAgICAgICA8cD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgVGhlIDxUZXJtPmFubm90YXRpb24gc2lkZWJhcjwvVGVybT4gbGlzdHMgYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbm5vdGF0aW9ucyBvbiB0aGUgY3VycmVudCBkb2N1bWVudCBpbmNsdWRpbmcgaGlnaGxpZ2h0c1xuICAgICAgICAgICAgICAgICAgICAgICAgLCBjb21tZW50cywgYW5kIGZsYXNoY2FyZHMuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhcmdldDogJyNwb2xhci1wcm9ncmVzcycsXG4gICAgICAgICAgICAgICAgdGl0bGU6IDxUaXRsZT5Qcm9ncmVzcyBCYXI8L1RpdGxlPixcbiAgICAgICAgICAgICAgICBkaXNhYmxlQmVhY29uOiB0cnVlLFxuICAgICAgICAgICAgICAgIHNwb3RsaWdodFBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgICAgY29udGVudDogPGRpdj5cblxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRoZSA8VGVybT5wcm9ncmVzcyBiYXI8L1Rlcm0+IGtlZXBzIHRyYWNrIG9mIGhvdyBtdWNoXG4gICAgICAgICAgICAgICAgICAgICAgICBvZiB0aGUgZG9jdW1lbnQgeW91J3ZlIHJlYWQgYnkgdXNpbmcgPFRlcm0+cGFnZW1hcmtzPC9UZXJtPi5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgUGFnZW1hcmtzIGFyZSBtYW51YWxseSBjcmVhdGVkIGJ5IHRoZSB1c2VyIHdoaWxlIHJlYWRpbmcgZG9jdW1lbnRzLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICBUbyBjcmVhdGUgYSBwYWdlbWFyayBqdXN0IDxUZXJtPnJpZ2h0IGNsaWNrPC9UZXJtPiBhbmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdCA8VGVybT5DcmVhdGUgUGFnZW1hcmsgdG8gUG9pbnQ8L1Rlcm0+LlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICBBbHNvLCB3aGVuIHVzaW5nIHBhZ2VtYXJrcyB3ZSB3aWxsIGF1dG9tYXRpY2FsbHkgcmVzdW1lXG4gICAgICAgICAgICAgICAgICAgICAgICB5b3VyIHJlYWRpbmcgYnkganVtcGluZyB0byB0aGUgcG9pbnQgd2hlcmUgeW91IGxhc3QgbGVmdFxuICAgICAgICAgICAgICAgICAgICAgICAgb2ZmLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6ICcuYW5ub3RhdGlvbi1zaWRlYmFyIC50ZXh0LWhpZ2hsaWdodCcsXG4gICAgICAgICAgICAgICAgdGl0bGU6IDxUaXRsZT5UZXh0IEhpZ2hsaWdodHM8L1RpdGxlPixcbiAgICAgICAgICAgICAgICBkaXNhYmxlQmVhY29uOiB0cnVlLFxuICAgICAgICAgICAgICAgIHNwb3RsaWdodFBhZGRpbmc6IDUsXG4gICAgICAgICAgICAgICAgY29udGVudDogPGRpdj5cblxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXJtPlRleHQgaGlnaGxpZ2h0czwvVGVybT4gYXJlIHN0b3JlZCBmb3IgZWFzeVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlIG9uIHRoZSBhbm5vdGF0aW9uIHNpZGViYXIuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaW5jbHVkZXMgYm90aFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzb2NpYXRlZCA8VGVybT5jb21tZW50czwvVGVybT4gYW5kIDxUZXJtPmZsYXNoY2FyZHM8L1Rlcm0+LlxuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgIDwvZGl2PixcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6ICdsZWZ0J1xuICAgICAgICAgICAgfSxcblxuICAgICAgICBdO1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxKb3lyaWRlXG4gICAgICAgICAgICAgICAgc3RlcHM9e3N0ZXBzfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVvdXM9e3RydWV9XG4gICAgICAgICAgICAgICAgY2FsbGJhY2s9e2RhdGEgPT4gdGhpcy5vbkNhbGxiYWNrKGRhdGEpfVxuICAgICAgICAgICAgICAgIHJ1bj17dGhpcy5zdGF0ZS5ydW59XG4gICAgICAgICAgICAgICAgc2hvd1Byb2dyZXNzPXt0cnVlfVxuICAgICAgICAgICAgICAgIHNob3dTa2lwQnV0dG9uPXt0cnVlfVxuICAgICAgICAgICAgICAgIHN0eWxlcz17e1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhcnJvd0NvbG9yOiAnI2UzZmZlYicsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6ICcjZTNmZmViJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG92ZXJsYXlDb2xvcjogJ3JnYmEoNzksIDI2LCAwLCAwLjQpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlDb2xvcjogJyMwMDdiZmYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGV4dENvbG9yOiAnIzAwNGExNCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aDogOTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgekluZGV4OiA5OTk5OTk5OTksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXBDb250YWluZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25DYWxsYmFjayhjYWxsYmFja1Byb3BzOiBDYWxsQmFja1Byb3BzKTogdm9pZCB7XG5cbiAgICAgICAgUmVuZGVyZXJBbmFseXRpY3MuZXZlbnQoe2NhdGVnb3J5OiAndmlld2VyLXRvdXItc3RlcHMnLCBhY3Rpb246ICdkaWQtc3RlcC0nICsgY2FsbGJhY2tQcm9wcy5pbmRleH0pO1xuXG4gICAgICAgIGlmIChjYWxsYmFja1Byb3BzLnN0YXR1cyA9PT0gU1RBVFVTLlNLSVBQRUQgfHwgY2FsbGJhY2tQcm9wcy5zdGF0dXMgPT09IFNUQVRVUy5GSU5JU0hFRCkge1xuXG4gICAgICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChjYWxsYmFja1Byb3BzLnN0YXR1cykge1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgU1RBVFVTLlNLSVBQRUQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBSZW5kZXJlckFuYWx5dGljcy5ldmVudCh7Y2F0ZWdvcnk6ICd2aWV3ZXItdG91ci1yZXN1bHQnLCBhY3Rpb246ICdza2lwcGVkJ30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgUmVuZGVyZXJBbmFseXRpY3MuZXZlbnQoe2NhdGVnb3J5OiAndmlld2VyLXRvdXItc2tpcCcsIGFjdGlvbjogJ3NraXBwZWQtYXQtc3RlcC0nICsgY2FsbGJhY2tQcm9wcy5pbmRleH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBMaWZlY3ljbGVUb2dnbGUubWFyayhMaWZlY3ljbGVFdmVudHMuVklFV0VSX1RPVVJfU0tJUFBFRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIFNUQVRVUy5GSU5JU0hFRDpcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlbmRlcmVyQW5hbHl0aWNzLmV2ZW50KHtjYXRlZ29yeTogJ3ZpZXdlci10b3VyLXJlc3VsdCcsIGFjdGlvbjogJ2ZpbmlzaGVkJ30pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBMaWZlY3ljbGVUb2dnbGUubWFyayhMaWZlY3ljbGVFdmVudHMuVklFV0VSX1RPVVJfRklOSVNIRUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIExpZmVjeWNsZVRvZ2dsZS5tYXJrKExpZmVjeWNsZUV2ZW50cy5WSUVXRVJfVE9VUl9URVJNSU5BVEVEKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlIHtcbiAgICByZWFkb25seSBydW46IGJvb2xlYW47XG59XG4iXX0=