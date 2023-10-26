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
const Logger_1 = require("../../logger/Logger");
const LoadExampleDocs_1 = require("./onboarding/LoadExampleDocs");
const JoyrideTours_1 = require("../../ui/tours/JoyrideTours");
const AppRuntime_1 = require("../../AppRuntime");
const log = Logger_1.Logger.create();
const Z_INDEX = 100000;
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
Styles.SPLIT_BAR_IMG = {
    maxWidth: '225px',
    maxHeight: '225px',
    marginBottom: '10px',
    display: 'block',
    marginLeft: '5px',
    marginRight: '5px',
};
exports.Styles = Styles;
class RepositoryTour extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onCallback = this.onCallback.bind(this);
        this.createSteps = this.createSteps.bind(this);
        this.steps = this.createSteps();
        const run = !LifecycleToggle_1.LifecycleToggle.isMarked(LifecycleEvents_1.LifecycleEvents.TOUR_TERMINATED);
        this.state = {
            run,
            stepIndex: 0
        };
    }
    render() {
        return (React.createElement(react_joyride_1.default, { steps: this.steps, continuous: true, callback: data => this.onCallback(data), run: this.state.run, showProgress: true, showSkipButton: true, stepIndex: this.state.stepIndex, styles: {
                options: {
                    primaryColor: '#007bff',
                    zIndex: Z_INDEX,
                },
                tooltipContainer: {
                    textAlign: 'left',
                }
            } }));
    }
    createSteps() {
        const Term = (props) => {
            return React.createElement("b", null,
                React.createElement("i", null, props.children));
        };
        const Title = (props) => {
            return React.createElement("div", { style: {
                    fontSize: '22px',
                    marginLeft: '10px'
                } }, props.children);
        };
        const Icon = (props) => {
            return React.createElement("div", { className: "text-primary" },
                React.createElement("i", { className: props.className, style: {
                        fontSize: '175px',
                        marginLeft: '5px',
                    } }));
        };
        const steps = [
            JoyrideTours_1.JoyrideTours.createImageStep({
                target: 'header',
                content: React.createElement("div", null,
                    React.createElement("h2", { className: "text-center" }, "Welcome to Polar!"),
                    React.createElement("p", null, "We're going to give you a quick tour of how to use the main features in Polar."),
                    React.createElement("p", null, "Polar allows you to:"),
                    React.createElement("ul", null,
                        React.createElement("li", null, "Keep all your documents in one place."),
                        React.createElement("li", null,
                            "Easily keep track of your reading with ",
                            React.createElement("b", null, "pagemarks"),
                            " and ",
                            React.createElement("b", null, "stats tracking"),
                            "."),
                        React.createElement("li", null,
                            React.createElement("b", null, "Annotate"),
                            ", ",
                            React.createElement("b", null, "tag"),
                            ", and ",
                            React.createElement("span", { className: "text-dark", style: { backgroundColor: 'yellow' } },
                                React.createElement("b", null, "highlight")),
                            " all your documents and build a personal knowledge repository.")),
                    React.createElement("p", null,
                        "Additionally, Polar supports ",
                        React.createElement("b", null, "not just PDF"),
                        " documents but capturing ",
                        React.createElement("b", null, "web content"),
                        " and storing it offline in your archive in perpetuity."),
                    React.createElement("p", null, "The tour should take about 60 seconds.")),
                image: "/icon.png",
                placement: 'center'
            }),
            JoyrideTours_1.JoyrideTours.createImageStep({
                target: 'header',
                title: React.createElement(Title, null, "Web, Desktop and Cloud."),
                content: React.createElement("div", null,
                    React.createElement("p", null,
                        "You're using the ",
                        React.createElement("b", null, "web"),
                        " version of Polar."),
                    React.createElement("p", null,
                        "Polar supports works on both the desktop (MacOS, Windows, and Linux) as well as the web (Chrome, Firefox, and major browsers) and is ",
                        React.createElement("b", null, "fully cloud aware"),
                        "."),
                    React.createElement("p", null,
                        "If you use the desktop version of Polar you can enable cloud sync which will ",
                        React.createElement("b", null, "keep all your documents in sync"),
                        " across all your devices and the web - and in near realtime!"),
                    React.createElement("p", null, "Note that the web version is missing a few features including Anki sync and web page capture and only supports PDF documents at the moment.")),
                image: "/web/assets/images/web.svg",
                placement: 'center',
                disabled: AppRuntime_1.AppRuntime.isElectron()
            }),
            JoyrideTours_1.JoyrideTours.createImageStep({
                target: '#doc-repo-table .rt-tbody > div:nth-child(-n+1)',
                title: React.createElement(Title, null, "Document Repository"),
                content: React.createElement("div", null,
                    React.createElement("p", null,
                        "Your documents are kept here in the ",
                        React.createElement(Term, null, "document repository"),
                        " and can be opened by ",
                        React.createElement(Term, null, "double clicking"),
                        "."),
                    React.createElement("p", null,
                        "We went ahead and added some ",
                        React.createElement("b", null, "sample documents"),
                        " so you can see what Polar looks like in action.  You can just delete them once the tour is finished.")),
                image: "/web/assets/images/files.svg"
            }),
            JoyrideTours_1.JoyrideTours.createImageStep({
                target: '#add-content-dropdown',
                title: React.createElement(Title, null, "Add Documents"),
                content: React.createElement("div", null,
                    React.createElement("p", null,
                        "Documents can easily be added by clicking the ",
                        React.createElement(Term, null, "Add"),
                        " button and you can import documents individually or in bulk from a local directory."),
                    React.createElement("p", null, "You can also just drag and drop files onto the document repository as well."),
                    React.createElement("p", null, "Once the tour is over you'll probably want to use this feature to add any documents you're currently reading.")),
                image: "/web/assets/images/add-file.svg"
            }),
            JoyrideTours_1.JoyrideTours.createImageStep({
                target: '#enable-cloud-sync, #cloud-sync-dropdown',
                title: React.createElement(Title, null, "Cloud Sync"),
                content: React.createElement("div", null,
                    React.createElement("p", null,
                        "Polar supports ",
                        React.createElement(Term, null, "cloud sync"),
                        " which keeps all your documents securely backed up in the cloud. Enabling ",
                        React.createElement(Term, null, "cloud sync"),
                        " also allow you to keep all your computers that run Polar fully synchronized."),
                    React.createElement("p", null, "This works transparently and realtime across MacOS, Windows, and Linux.")),
                image: React.createElement(Icon, { className: "fas fa-cloud-upload-alt" })
            }),
            JoyrideTours_1.JoyrideTours.createImageStep({
                target: '#links-dropdown',
                title: React.createElement(Title, null, "Links"),
                content: React.createElement("div", null,
                    React.createElement("p", null,
                        "We include direct links to additional tools including our ",
                        React.createElement(Term, null, "Chrome Extension"),
                        " and ",
                        React.createElement(Term, null, "chat"),
                        " to enable you to discuss Polar live with the developers and other users.")),
                image: React.createElement(Icon, { className: "fas fa-link" })
            }),
            {
                target: '.doc-table-col-progress',
                title: React.createElement(Title, null, "Reading Progress"),
                disableBeacon: true,
                content: React.createElement("div", null, "Each document has a progress associated with it which is derived from pagemarks. Pagemarks are similar to bookmarks but manually updated on each document while you read."),
            },
            JoyrideTours_1.JoyrideTours.createImageStep({
                target: '.doc-table-col-tags',
                title: React.createElement(Title, null, "Tags"),
                content: React.createElement("div", null,
                    React.createElement("p", null, "Each document can be tagged to enable filtering and allow you to easily manage your documents."),
                    React.createElement("p", null, "Tags for documents are also assigned to your annotations.")),
                image: React.createElement(Icon, { className: "fa fa-tag" })
            }),
            {
                target: '.doc-dropdown',
                disableBeacon: true,
                content: React.createElement("div", null,
                    React.createElement("p", null,
                        "Documents can be ",
                        React.createElement(Term, null, "tagged"),
                        ", ",
                        React.createElement(Term, null, "flagged"),
                        ", ",
                        React.createElement(Term, null, "archived"),
                        " and ",
                        React.createElement(Term, null, "deleted"),
                        " by using these buttons to the right."),
                    React.createElement("p", null,
                        "The ",
                        React.createElement(Term, null, "tag"),
                        " button allow you to assign new ",
                        React.createElement("b", null,
                            React.createElement("i", null, "tags")),
                        " a document"),
                    React.createElement("p", null,
                        "The ",
                        React.createElement(Term, null, "flag"),
                        " button allow you to mark important documents.  Once flagged you can use the ",
                        React.createElement(Term, null, "filter bar"),
                        " to show only flagged documents."),
                    React.createElement("p", null,
                        "The ",
                        React.createElement(Term, null, "archive"),
                        " button allow you to hide a document once read.  It's usually best to archive a document once it's been read.")),
                styles: {
                    tooltip: {
                        width: '650px'
                    }
                },
            },
            {
                target: '#filter-bar',
                disableBeacon: true,
                content: React.createElement("div", null,
                    React.createElement("p", null,
                        "The ",
                        React.createElement(Term, null, "filter bar"),
                        " allows you to configure which documents are visible."),
                    React.createElement("p", null, "You can hide/show documents that are flagged, archived and also filter by tags or search by title.")),
                styles: {
                    tooltip: {
                        width: '650px'
                    }
                },
            },
            {
                target: '#toggle-sidebar',
                content: React.createElement("div", null,
                    React.createElement(Term, null, "Click"),
                    " this button to display the sidebar."),
                spotlightClicks: true,
                disableBeacon: true,
                placement: 'right',
                hideFooter: true,
                hideCloseButton: true,
                autoNext: true,
            },
            {
                title: React.createElement(Title, null, "Sidebar"),
                target: '.repo-sidebar section[data-expanded=true]',
                content: React.createElement("div", null,
                    "The ",
                    React.createElement(Term, null, "sidebar"),
                    " allows you to select different views including the ",
                    React.createElement(Term, null, "annotation"),
                    " and ",
                    React.createElement(Term, null, "statistics"),
                    " views."),
                disableBeacon: true,
                placement: 'right-start',
                offset: 10,
                spotlightPadding: 0,
                hideBackButton: true
            },
            {
                title: React.createElement(Title, null, "Annotations"),
                target: 'section[data-expanded=true] #sidebar-item-annotations',
                content: React.createElement("div", null,
                    "Now ",
                    React.createElement(Term, null, "click here"),
                    " to view the ",
                    React.createElement(Term, null, "annotations view"),
                    "."),
                spotlightClicks: true,
                disableBeacon: true,
                placement: 'right',
                hideFooter: true,
                spotlightPadding: 0,
                styles: {
                    options: {
                        zIndex: Z_INDEX
                    }
                },
                autoNext: true
            },
            JoyrideTours_1.JoyrideTours.createImageStep({
                target: '.annotations-view header',
                title: React.createElement(Title, null, "Annotations View"),
                content: React.createElement("div", null,
                    React.createElement("p", null,
                        "This is the ",
                        React.createElement(Term, null, "annotations view"),
                        ".  It allows you to view all your annotations including highlights, comments, and flashcards.")),
                image: "/web/assets/images/doc.svg",
                placement: 'center',
                hideBackButton: true
            }),
            {
                target: '#toggle-sidebar',
                content: React.createElement("div", null,
                    React.createElement("p", null,
                        "Now let's go to the ",
                        React.createElement(Term, null, "statistics view.")),
                    React.createElement("p", null,
                        React.createElement(Term, null, "Click"),
                        " this button to display the sidebar.")),
                spotlightClicks: true,
                disableBeacon: true,
                placement: 'right',
                hideFooter: true,
                hideCloseButton: true,
                autoNext: true,
            },
            {
                title: React.createElement(Title, null, "Sidebar"),
                target: 'section[data-expanded=true] #sidebar-item-stats',
                content: React.createElement("div", null,
                    "Now ",
                    React.createElement(Term, null, "click here"),
                    " to view the ",
                    React.createElement(Term, null, "statistics view"),
                    "."),
                spotlightClicks: true,
                disableBeacon: true,
                placement: 'right',
                hideFooter: true,
                spotlightPadding: 0,
                styles: {
                    options: {
                        zIndex: Z_INDEX
                    }
                },
                autoNext: true
            },
            JoyrideTours_1.JoyrideTours.createImageStep({
                target: '.statistics-view header',
                title: React.createElement(Title, null, "Statistics View"),
                content: React.createElement("div", null,
                    React.createElement("p", null,
                        "This is the ",
                        React.createElement(Term, null, "statistics view"),
                        ".  It allows you to view importants statistics regarding your reading, documents, and annotations including the rate of new documents and statistics on your tags.")),
                image: "/web/assets/images/statistics.svg",
                hideBackButton: true,
                placement: 'center',
            }),
            {
                title: React.createElement(Title, null, "Daily Reading Progress"),
                target: '#reading-progress-table',
                content: React.createElement("div", null,
                    React.createElement("p", null,
                        "The ",
                        React.createElement(Term, null, "reading progress"),
                        " metric allows you to track how often you're reading to encourage you to hit your goals."),
                    React.createElement("p", null, "Each column is one week and we display 52 weeks to represent the entire year.")),
                disableBeacon: true,
            },
            {
                target: '#toggle-sidebar',
                content: React.createElement("div", null,
                    React.createElement("p", null,
                        "Now let's go back to the ",
                        React.createElement(Term, null, "documents view.")),
                    React.createElement("p", null,
                        React.createElement(Term, null, "Click"),
                        " this button to display the sidebar.")),
                spotlightClicks: true,
                disableBeacon: true,
                placement: 'right',
                hideFooter: true,
                hideCloseButton: true,
                autoNext: true,
            },
            {
                title: React.createElement(Title, null, "Select documents view..."),
                target: 'section[data-expanded=true] #sidebar-item-documents',
                content: React.createElement("div", null,
                    "Now ",
                    React.createElement(Term, null, "click"),
                    " to view the ",
                    React.createElement(Term, null, "documents view"),
                    "."),
                spotlightClicks: true,
                disableBeacon: true,
                placement: 'right',
                hideFooter: true,
                spotlightPadding: 0,
                styles: {
                    options: {
                        zIndex: Z_INDEX
                    }
                },
                autoNext: true,
                hideBackButton: true
            },
            JoyrideTours_1.JoyrideTours.createImageStep({
                target: `#doc-table div[data-doc-fingerprint='${LoadExampleDocs_1.LoadExampleDocs.MAIN_ANNOTATIONS_EXAMPLE_FINGERPRINT}']`,
                title: React.createElement(Title, null, "Open a document"),
                content: React.createElement("div", null,
                    React.createElement("p", null, "Let's open a document."),
                    React.createElement("p", null,
                        "Go ahead and ",
                        React.createElement(Term, null, "double click"),
                        " on the highlighted document row and a new window will open."),
                    React.createElement("p", null, "This specific document has some example annotations.")),
                spotlightClicks: true,
                hideBackButton: true,
                image: React.createElement(Icon, { className: "far fa-file-pdf" })
            }),
            JoyrideTours_1.JoyrideTours.createImageStep({
                target: 'header',
                content: React.createElement("div", null,
                    React.createElement("h2", null, "Thanks for Taking the Tour"),
                    React.createElement("p", null, "From time to time we'll check-in to see if Polar is working for you and whether you have any other suggestions to improve Polar for your use case.")),
                image: "/icon.png",
                placement: 'center'
            }),
        ];
        return steps.filter(current => !current.disabled);
    }
    onCallback(callbackProps) {
        this.callback = callbackProps;
        RendererAnalytics_1.RendererAnalytics.event({ category: 'tour', action: 'did-step-' + callbackProps.index });
        const step = callbackProps.step;
        if (callbackProps.action === 'update' && step.autoNext) {
            const nextStep = this.steps[callbackProps.index + 1];
            const nextHandler = () => {
                if (nextStep.target instanceof HTMLElement) {
                    return true;
                }
                const selector = nextStep.target;
                return document.querySelector(selector) != null;
            };
            let mutationObserver;
            const mutationHandler = () => {
                if (nextHandler()) {
                    mutationObserver.disconnect();
                    const stepIndex = this.state.stepIndex + 1;
                    this.setState(Object.assign({}, this.state, { stepIndex, run: false }));
                }
            };
            mutationObserver = new MutationObserver(mutationHandler);
            mutationObserver.observe(document.body, {
                childList: true,
                attributes: true,
                subtree: true
            });
            mutationHandler();
        }
        if (callbackProps.status === react_joyride_1.STATUS.SKIPPED || callbackProps.status === react_joyride_1.STATUS.FINISHED) {
            try {
                switch (callbackProps.status) {
                    case react_joyride_1.STATUS.SKIPPED:
                        RendererAnalytics_1.RendererAnalytics.event({ category: 'tour-result', action: 'skipped' });
                        RendererAnalytics_1.RendererAnalytics.event({ category: 'tour-skip', action: 'skipped-at-step-' + callbackProps.index });
                        LifecycleToggle_1.LifecycleToggle.mark(LifecycleEvents_1.LifecycleEvents.TOUR_SKIPPED);
                        break;
                    case react_joyride_1.STATUS.FINISHED:
                        RendererAnalytics_1.RendererAnalytics.event({ category: 'tour-result', action: 'finished' });
                        LifecycleToggle_1.LifecycleToggle.mark(LifecycleEvents_1.LifecycleEvents.TOUR_FINISHED);
                        break;
                }
            }
            finally {
                LifecycleToggle_1.LifecycleToggle.mark(LifecycleEvents_1.LifecycleEvents.TOUR_TERMINATED);
            }
        }
        else if (callbackProps.type === react_joyride_1.EVENTS.STEP_AFTER) {
            if (!this.state.run) {
                setTimeout(() => {
                    this.setState(Object.assign({}, this.state, { run: true }));
                }, 250);
                return;
            }
            this.doStep(callbackProps);
        }
        else if (callbackProps.type === react_joyride_1.EVENTS.TARGET_NOT_FOUND) {
            log.warn("Not found: ", callbackProps);
            this.doStep(callbackProps);
        }
    }
    doStep(callBackProps) {
        const stepIndex = callBackProps.index + (callBackProps.action === react_joyride_1.ACTIONS.PREV ? -1 : 1);
        this.setState(Object.assign({}, this.state, { stepIndex }));
    }
}
exports.RepositoryTour = RepositoryTour;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb3NpdG9yeVRvdXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJSZXBvc2l0b3J5VG91ci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsK0RBQXlGO0FBQ3pGLDZDQUErQjtBQUMvQixtRUFBOEQ7QUFDOUQsbUVBQThEO0FBQzlELGtFQUE2RDtBQUc3RCxnREFBMkM7QUFDM0Msa0VBQTZEO0FBQzdELDhEQUF1RTtBQUN2RSxpREFBNEM7QUFFNUMsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQztBQUV2QixNQUFhLE1BQU07O0FBRUQsVUFBRyxHQUF3QjtJQUNyQyxRQUFRLEVBQUUsT0FBTztJQUNqQixTQUFTLEVBQUUsT0FBTztJQUNsQixZQUFZLEVBQUUsTUFBTTtJQUNwQixPQUFPLEVBQUUsT0FBTztJQUNoQixVQUFVLEVBQUUsTUFBTTtJQUNsQixXQUFXLEVBQUUsTUFBTTtDQUN0QixDQUFDO0FBRVksb0JBQWEsR0FBd0I7SUFDL0MsUUFBUSxFQUFFLE9BQU87SUFDakIsU0FBUyxFQUFFLE9BQU87SUFDbEIsWUFBWSxFQUFFLE1BQU07SUFDcEIsT0FBTyxFQUFFLE9BQU87SUFDaEIsVUFBVSxFQUFFLEtBQUs7SUFDakIsV0FBVyxFQUFFLEtBQUs7Q0FDckIsQ0FBQztBQWxCTix3QkFvQkM7QUFHRCxNQUFhLGNBQWUsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFNL0QsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUv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YUFBYSxDQUFDLENBQUM7WUFFdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUM5QjtJQUVMLENBQUM7SUFFTyxNQUFNLENBQUMsYUFBNEI7UUFFdkMsTUFBTSxTQUFTLEdBQUcsYUFBYSxDQUFDLEtBQUssR0FBRyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEtBQUssdUJBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV6RixJQUFJLENBQUMsUUFBUSxtQkFBSyxJQUFJLENBQUMsS0FBSyxJQUFFLFNBQVMsSUFBRyxDQUFDO0lBRS9DLENBQUM7Q0FHSjtBQTF3QkQsd0NBMHdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKb3lyaWRlLCB7QUNUSU9OUywgQ2FsbEJhY2tQcm9wcywgRVZFTlRTLCBwbGFjZW1lbnQsIFNUQVRVU30gZnJvbSAncmVhY3Qtam95cmlkZSc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpZmVjeWNsZVRvZ2dsZX0gZnJvbSAnLi4vLi4vdWkvdXRpbC9MaWZlY3ljbGVUb2dnbGUnO1xuaW1wb3J0IHtMaWZlY3ljbGVFdmVudHN9IGZyb20gJy4uLy4uL3VpL3V0aWwvTGlmZWN5Y2xlRXZlbnRzJztcbmltcG9ydCB7UmVuZGVyZXJBbmFseXRpY3N9IGZyb20gJy4uLy4uL2dhL1JlbmRlcmVyQW5hbHl0aWNzJztcbmltcG9ydCB7RmVlZGJhY2t9IGZyb20gJy4uLy4uL3VpL2ZlZWRiYWNrL0ZlZWRiYWNrJztcbmltcG9ydCB7U3BsaXRMYXlvdXQsIFNwbGl0TGF5b3V0TGVmdCwgU3BsaXRMYXlvdXRSaWdodH0gZnJvbSAnLi4vLi4vdWkvc3BsaXRfbGF5b3V0L1NwbGl0TGF5b3V0JztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7TG9hZEV4YW1wbGVEb2NzfSBmcm9tICcuL29uYm9hcmRpbmcvTG9hZEV4YW1wbGVEb2NzJztcbmltcG9ydCB7RW5oYW5jZWRTdGVwLCBKb3lyaWRlVG91cnN9IGZyb20gJy4uLy4uL3VpL3RvdXJzL0pveXJpZGVUb3Vycyc7XG5pbXBvcnQge0FwcFJ1bnRpbWV9IGZyb20gJy4uLy4uL0FwcFJ1bnRpbWUnO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmNvbnN0IFpfSU5ERVggPSAxMDAwMDA7XG5cbmV4cG9ydCBjbGFzcyBTdHlsZXMge1xuXG4gICAgcHVibGljIHN0YXRpYyBJTUc6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgICAgIG1heFdpZHRoOiAnNDUwcHgnLFxuICAgICAgICBtYXhIZWlnaHQ6ICczMjVweCcsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogJzEwcHgnLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnYXV0bycsXG4gICAgfTtcblxuICAgIHB1YmxpYyBzdGF0aWMgU1BMSVRfQkFSX0lNRzogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICAgICAgbWF4V2lkdGg6ICcyMjVweCcsXG4gICAgICAgIG1heEhlaWdodDogJzIyNXB4JyxcbiAgICAgICAgbWFyZ2luQm90dG9tOiAnMTBweCcsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG1hcmdpbkxlZnQ6ICc1cHgnLFxuICAgICAgICBtYXJnaW5SaWdodDogJzVweCcsXG4gICAgfTtcblxufVxuXG5cbmV4cG9ydCBjbGFzcyBSZXBvc2l0b3J5VG91ciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgcHJpdmF0ZSBjYWxsYmFjaz86IENhbGxCYWNrUHJvcHM7XG5cbiAgICBwcml2YXRlIHN0ZXBzOiBFbmhhbmNlZFN0ZXBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5vbkNhbGxiYWNrID0gdGhpcy5vbkNhbGxiYWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY3JlYXRlU3RlcHMgPSB0aGlzLmNyZWF0ZVN0ZXBzLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zdGVwcyA9IHRoaXMuY3JlYXRlU3RlcHMoKTtcblxuICAgICAgICBjb25zdCBydW4gPVxuICAgICAgICAgICAgISBMaWZlY3ljbGVUb2dnbGUuaXNNYXJrZWQoTGlmZWN5Y2xlRXZlbnRzLlRPVVJfVEVSTUlOQVRFRCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHJ1bixcbiAgICAgICAgICAgIHN0ZXBJbmRleDogMFxuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8Sm95cmlkZVxuICAgICAgICAgICAgICAgIHN0ZXBzPXt0aGlzLnN0ZXBzfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVvdXM9e3RydWV9XG4gICAgICAgICAgICAgICAgY2FsbGJhY2s9e2RhdGEgPT4gdGhpcy5vbkNhbGxiYWNrKGRhdGEpfVxuICAgICAgICAgICAgICAgIHJ1bj17dGhpcy5zdGF0ZS5ydW59XG4gICAgICAgICAgICAgICAgc2hvd1Byb2dyZXNzPXt0cnVlfVxuICAgICAgICAgICAgICAgIHNob3dTa2lwQnV0dG9uPXt0cnVlfVxuICAgICAgICAgICAgICAgIHN0ZXBJbmRleD17dGhpcy5zdGF0ZS5zdGVwSW5kZXh9XG4gICAgICAgICAgICAgICAgc3R5bGVzPXt7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFycm93Q29sb3I6ICcjZTNmZmViJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmRDb2xvcjogJyNlM2ZmZWInLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb3ZlcmxheUNvbG9yOiAncmdiYSg3OSwgMjYsIDAsIDAuNCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeUNvbG9yOiAnIzAwN2JmZicsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0Q29sb3I6ICcjMDA0YTE0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoOiA5MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IFpfSU5ERVgsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXBDb250YWluZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX0+PC9Kb3lyaWRlPlxuXG4gICAgICAgICk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVN0ZXBzKCk6IEVuaGFuY2VkU3RlcFtdIHtcblxuICAgICAgICAvLyBUT0RPOiBzaG93IHRoZW0gaG93IHRvIHVzZSB0aGUgcmljaCB0ZXh0IGFyZWEgaW5jbHVkaW5nIGltYWdlcyxcbiAgICAgICAgLy8gSFRNTCwgZXRjLlxuXG4gICAgICAgIC8vIFRPRE86IGZ1bGwgdG91ciBvZiBjYXB0dXJpbmcgd2ViIGRvY3VtZW50c1xuXG4gICAgICAgIC8vIFRPRE86XG5cbiAgICAgICAgY29uc3QgVGVybSA9IChwcm9wczogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPGI+PGk+e3Byb3BzLmNoaWxkcmVufTwvaT48L2I+O1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IFRpdGxlID0gKHByb3BzOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcyMnB4JyxcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMTBweCd9fT5cbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj47XG4gICAgICAgIH07XG5cbiAgICAgICAgaW50ZXJmYWNlIEljb25Qcm9wcyB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IHN0cmluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IEljb24gPSAocHJvcHM6IEljb25Qcm9wcykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxNzVweCcsXG4gICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICc1cHgnLFxuICAgICAgICAgICAgICAgICAgIH19PlxuXG4gICAgICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgPC9kaXY+O1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHN0ZXBzOiBFbmhhbmNlZFN0ZXBbXSA9IFtcblxuICAgICAgICAgICAgLy8gVE9ETzogd2UgZG9uJ3QgcmVhbGx5IGdpdmUgdGhlIHVzZXIgYSB0b3VyIHRocm91Z2ggdGhlIGFubm90YXRpb25zIHZpZXdcbiAgICAgICAgICAgIC8vIFRPRE86IHdlIGRvbid0IHJlYWx5IGdpdmUgdGhlbSBhIHRvdXIgdGhyb3VnaCBjYXB0dXJpbmcgd2ViIHBhZ2VzLlxuXG4gICAgICAgICAgICBKb3lyaWRlVG91cnMuY3JlYXRlSW1hZ2VTdGVwKHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6ICdoZWFkZXInLFxuICAgICAgICAgICAgICAgIC8vIHRpdGxlOiA8VGl0bGU+RG9jdW1lbnQgUmVwb3NpdG9yeTwvVGl0bGU+LFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPldlbGNvbWUgdG8gUG9sYXIhPC9oMj5cblxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFdlJ3JlIGdvaW5nIHRvIGdpdmUgeW91IGEgcXVpY2sgdG91ciBvZiBob3cgdG8gdXNlIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbiBmZWF0dXJlcyBpbiBQb2xhci5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgUG9sYXIgYWxsb3dzIHlvdSB0bzpcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPktlZXAgYWxsIHlvdXIgZG9jdW1lbnRzIGluIG9uZSBwbGFjZS48L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+RWFzaWx5IGtlZXAgdHJhY2sgb2YgeW91ciByZWFkaW5nIHdpdGggPGI+cGFnZW1hcmtzPC9iPiBhbmQgPGI+c3RhdHMgdHJhY2tpbmc8L2I+LjwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48Yj5Bbm5vdGF0ZTwvYj4sIDxiPnRhZzwvYj4sIGFuZCA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWRhcmtcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3llbGxvdyd9fT48Yj5oaWdobGlnaHQ8L2I+PC9zcGFuPiBhbGwgeW91ciBkb2N1bWVudHMgYW5kIGJ1aWxkIGEgcGVyc29uYWwga25vd2xlZGdlIHJlcG9zaXRvcnkuPC9saT5cblxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkaXRpb25hbGx5LCBQb2xhciBzdXBwb3J0cyA8Yj5ub3QganVzdCBQREY8L2I+IGRvY3VtZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgYnV0IGNhcHR1cmluZyA8Yj53ZWIgY29udGVudDwvYj4gYW5kIHN0b3JpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0IG9mZmxpbmUgaW4geW91ciBhcmNoaXZlIGluIHBlcnBldHVpdHkuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRoZSB0b3VyIHNob3VsZCB0YWtlIGFib3V0IDYwIHNlY29uZHMuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgIDwvZGl2PixcbiAgICAgICAgICAgICAgICBpbWFnZTogXCIvaWNvbi5wbmdcIixcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6ICdjZW50ZXInXG5cbiAgICAgICAgICAgIH0pLFxuXG4gICAgICAgICAgICBKb3lyaWRlVG91cnMuY3JlYXRlSW1hZ2VTdGVwKHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6ICdoZWFkZXInLFxuICAgICAgICAgICAgICAgIHRpdGxlOiA8VGl0bGU+V2ViLCBEZXNrdG9wIGFuZCBDbG91ZC48L1RpdGxlPixcbiAgICAgICAgICAgICAgICBjb250ZW50OiA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgWW91J3JlIHVzaW5nIHRoZSA8Yj53ZWI8L2I+IHZlcnNpb24gb2YgUG9sYXIuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBvbGFyIHN1cHBvcnRzIHdvcmtzIG9uIGJvdGggdGhlIGRlc2t0b3AgKE1hY09TLFxuICAgICAgICAgICAgICAgICAgICAgICAgV2luZG93cywgYW5kIExpbnV4KSBhcyB3ZWxsIGFzIHRoZSB3ZWIgKENocm9tZSwgRmlyZWZveCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBtYWpvciBicm93c2VycykgYW5kIGlzIDxiPmZ1bGx5IGNsb3VkIGF3YXJlPC9iPi5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgSWYgeW91IHVzZSB0aGUgZGVza3RvcCB2ZXJzaW9uIG9mIFBvbGFyIHlvdSBjYW4gZW5hYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG91ZCBzeW5jIHdoaWNoIHdpbGwgPGI+a2VlcCBhbGwgeW91ciBkb2N1bWVudHMgaW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bmM8L2I+IGFjcm9zcyBhbGwgeW91ciBkZXZpY2VzIGFuZCB0aGUgd2ViIC0gYW5kIGluXG4gICAgICAgICAgICAgICAgICAgICAgICBuZWFyIHJlYWx0aW1lIVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICBOb3RlIHRoYXQgdGhlIHdlYiB2ZXJzaW9uIGlzIG1pc3NpbmcgYSBmZXcgZmVhdHVyZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGluZyBBbmtpIHN5bmMgYW5kIHdlYiBwYWdlIGNhcHR1cmUgYW5kIG9ubHlcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnRzIFBERiBkb2N1bWVudHMgYXQgdGhlIG1vbWVudC5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG5cbiAgICAgICAgICAgICAgICA8L2Rpdj4sXG4gICAgICAgICAgICAgICAgaW1hZ2U6IFwiL3dlYi9hc3NldHMvaW1hZ2VzL3dlYi5zdmdcIixcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBBcHBSdW50aW1lLmlzRWxlY3Ryb24oKVxuICAgICAgICAgICAgfSksXG5cbiAgICAgICAgICAgIEpveXJpZGVUb3Vycy5jcmVhdGVJbWFnZVN0ZXAoe1xuICAgICAgICAgICAgICAgIHRhcmdldDogJyNkb2MtcmVwby10YWJsZSAucnQtdGJvZHkgPiBkaXY6bnRoLWNoaWxkKC1uKzEpJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogPFRpdGxlPkRvY3VtZW50IFJlcG9zaXRvcnk8L1RpdGxlPixcbiAgICAgICAgICAgICAgICBjb250ZW50OiA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFlvdXIgZG9jdW1lbnRzIGFyZSBrZXB0IGhlcmUgaW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZSA8VGVybT5kb2N1bWVudCByZXBvc2l0b3J5PC9UZXJtPiBhbmRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbiBiZSBvcGVuZWQgYnkgPFRlcm0+ZG91YmxlIGNsaWNraW5nPC9UZXJtPi5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgV2Ugd2VudCBhaGVhZCBhbmQgYWRkZWQgc29tZSA8Yj5zYW1wbGUgZG9jdW1lbnRzPC9iPiBzbyB5b3UgY2FuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWUgd2hhdCBQb2xhciBsb29rcyBsaWtlIGluIGFjdGlvbi4gIFlvdSBjYW4ganVzdFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoZW0gb25jZSB0aGUgdG91ciBpcyBmaW5pc2hlZC5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PixcbiAgICAgICAgICAgICAgICBpbWFnZTogXCIvd2ViL2Fzc2V0cy9pbWFnZXMvZmlsZXMuc3ZnXCJcbiAgICAgICAgICAgIH0pLFxuXG4gICAgICAgICAgICBKb3lyaWRlVG91cnMuY3JlYXRlSW1hZ2VTdGVwKHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6ICcjYWRkLWNvbnRlbnQtZHJvcGRvd24nLFxuICAgICAgICAgICAgICAgIHRpdGxlOiA8VGl0bGU+QWRkIERvY3VtZW50czwvVGl0bGU+LFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgRG9jdW1lbnRzIGNhbiBlYXNpbHkgYmUgYWRkZWQgYnkgY2xpY2tpbmcgdGhlIDxUZXJtPkFkZDwvVGVybT4gYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmQgeW91IGNhbiBpbXBvcnQgZG9jdW1lbnRzIGluZGl2aWR1YWxseSBvciBpbiBidWxrIGZyb21cbiAgICAgICAgICAgICAgICAgICAgICAgIGEgbG9jYWwgZGlyZWN0b3J5LlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICBZb3UgY2FuIGFsc28ganVzdCBkcmFnIGFuZCBkcm9wIGZpbGVzIG9udG8gdGhlIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICByZXBvc2l0b3J5IGFzIHdlbGwuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIE9uY2UgdGhlIHRvdXIgaXMgb3ZlciB5b3UnbGwgcHJvYmFibHkgd2FudCB0byB1c2UgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZSB0byBhZGQgYW55IGRvY3VtZW50cyB5b3UncmUgY3VycmVudGx5IHJlYWRpbmcuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj4sXG4gICAgICAgICAgICAgICAgaW1hZ2U6IFwiL3dlYi9hc3NldHMvaW1hZ2VzL2FkZC1maWxlLnN2Z1wiXG4gICAgICAgICAgICB9KSxcblxuICAgICAgICAgICAgSm95cmlkZVRvdXJzLmNyZWF0ZUltYWdlU3RlcCh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiAnI2VuYWJsZS1jbG91ZC1zeW5jLCAjY2xvdWQtc3luYy1kcm9wZG93bicsXG4gICAgICAgICAgICAgICAgdGl0bGU6IDxUaXRsZT5DbG91ZCBTeW5jPC9UaXRsZT4sXG4gICAgICAgICAgICAgICAgY29udGVudDogPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICBQb2xhciBzdXBwb3J0cyA8VGVybT5jbG91ZCBzeW5jPC9UZXJtPiB3aGljaCBrZWVwcyBhbGwgeW91clxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRzIHNlY3VyZWx5IGJhY2tlZCB1cCBpbiB0aGUgY2xvdWQuXG4gICAgICAgICAgICAgICAgICAgICAgICBFbmFibGluZyA8VGVybT5jbG91ZCBzeW5jPC9UZXJtPiBhbHNvIGFsbG93IHlvdSB0byBrZWVwIGFsbCB5b3VyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wdXRlcnMgdGhhdCBydW4gUG9sYXIgZnVsbHkgc3luY2hyb25pemVkLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICBUaGlzIHdvcmtzIHRyYW5zcGFyZW50bHkgYW5kIHJlYWx0aW1lIGFjcm9zcyBNYWNPUyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFdpbmRvd3MsIGFuZCBMaW51eC5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PixcbiAgICAgICAgICAgICAgICBpbWFnZTpcbiAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiZmFzIGZhLWNsb3VkLXVwbG9hZC1hbHRcIi8+XG5cbiAgICAgICAgICAgIH0pLFxuXG4gICAgICAgICAgICBKb3lyaWRlVG91cnMuY3JlYXRlSW1hZ2VTdGVwKHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6ICcjbGlua3MtZHJvcGRvd24nLFxuICAgICAgICAgICAgICAgIHRpdGxlOiA8VGl0bGU+TGlua3M8L1RpdGxlPixcbiAgICAgICAgICAgICAgICBjb250ZW50OiA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFdlIGluY2x1ZGUgZGlyZWN0IGxpbmtzIHRvIGFkZGl0aW9uYWwgdG9vbHMgaW5jbHVkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXIgPFRlcm0+Q2hyb21lIEV4dGVuc2lvbjwvVGVybT4gYW5kIDxUZXJtPmNoYXQ8L1Rlcm0+IHRvXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGUgeW91IHRvIGRpc2N1c3MgUG9sYXIgbGl2ZSB3aXRoIHRoZSBkZXZlbG9wZXJzIGFuZFxuICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXIgdXNlcnMuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgIDwvZGl2PixcbiAgICAgICAgICAgICAgICBpbWFnZTpcbiAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiZmFzIGZhLWxpbmtcIi8+XG5cbiAgICAgICAgICAgIH0pLFxuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiAnLmRvYy10YWJsZS1jb2wtcHJvZ3Jlc3MnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiA8VGl0bGU+UmVhZGluZyBQcm9ncmVzczwvVGl0bGU+LFxuICAgICAgICAgICAgICAgIGRpc2FibGVCZWFjb246IHRydWUsXG4gICAgICAgICAgICAgICAgY29udGVudDogPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgRWFjaCBkb2N1bWVudCBoYXMgYSBwcm9ncmVzcyBhc3NvY2lhdGVkIHdpdGggaXQgd2hpY2ggaXNcbiAgICAgICAgICAgICAgICAgICAgZGVyaXZlZCBmcm9tIHBhZ2VtYXJrcy4gUGFnZW1hcmtzIGFyZSBzaW1pbGFyIHRvIGJvb2ttYXJrc1xuICAgICAgICAgICAgICAgICAgICBidXQgbWFudWFsbHkgdXBkYXRlZCBvbiBlYWNoIGRvY3VtZW50IHdoaWxlIHlvdSByZWFkLlxuICAgICAgICAgICAgICAgIDwvZGl2PixcblxuICAgICAgICAgICAgICAgIC8vIHBsYWNlbWVudDogXCJib3R0b21cIixcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIEpveXJpZGVUb3Vycy5jcmVhdGVJbWFnZVN0ZXAoe1xuICAgICAgICAgICAgICAgIHRhcmdldDogJy5kb2MtdGFibGUtY29sLXRhZ3MnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiA8VGl0bGU+VGFnczwvVGl0bGU+LFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgRWFjaCBkb2N1bWVudCBjYW4gYmUgdGFnZ2VkIHRvIGVuYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyaW5nIGFuZCBhbGxvdyB5b3UgdG8gZWFzaWx5IG1hbmFnZSB5b3VyIGRvY3VtZW50cy5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgIDxwPlRhZ3MgZm9yIGRvY3VtZW50cyBhcmUgYWxzbyBhc3NpZ25lZCB0byB5b3VyIGFubm90YXRpb25zLjwvcD5cblxuICAgICAgICAgICAgICAgIDwvZGl2PixcbiAgICAgICAgICAgICAgICBpbWFnZTpcbiAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiZmEgZmEtdGFnXCIvPlxuXG4gICAgICAgICAgICB9KSxcblxuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiAnLmRvYy1kcm9wZG93bicsXG4gICAgICAgICAgICAgICAgZGlzYWJsZUJlYWNvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgRG9jdW1lbnRzIGNhblxuICAgICAgICAgICAgICAgICAgICAgICAgYmUgPFRlcm0+dGFnZ2VkPC9UZXJtPiwgPFRlcm0+ZmxhZ2dlZDwvVGVybT4sIDxUZXJtPmFyY2hpdmVkPC9UZXJtPiBhbmQgPFRlcm0+ZGVsZXRlZDwvVGVybT4gYnkgdXNpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZXNlIGJ1dHRvbnMgdG8gdGhlIHJpZ2h0LlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgVGhlIDxUZXJtPnRhZzwvVGVybT4gYnV0dG9uIGFsbG93IHlvdSB0byBhc3NpZ24gbmV3IDxiPjxpPnRhZ3M8L2k+PC9iPiBhIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgPFRlcm0+ZmxhZzwvVGVybT4gYnV0dG9uIGFsbG93IHlvdSB0byBtYXJrIGltcG9ydGFudFxuICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50cy4gIE9uY2UgZmxhZ2dlZCB5b3UgY2FuIHVzZSB0aGUgPFRlcm0+ZmlsdGVyIGJhcjwvVGVybT4gdG9cbiAgICAgICAgICAgICAgICAgICAgICAgICBzaG93IG9ubHkgZmxhZ2dlZCBkb2N1bWVudHMuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRoZSA8VGVybT5hcmNoaXZlPC9UZXJtPiBidXR0b24gYWxsb3cgeW91IHRvXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlIGEgZG9jdW1lbnQgb25jZSByZWFkLiAgSXQncyB1c3VhbGx5IGJlc3QgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgIGFyY2hpdmUgYSBkb2N1bWVudCBvbmNlIGl0J3MgYmVlbiByZWFkLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj4sXG4gICAgICAgICAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNjUwcHgnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIC8vIHBsYWNlbWVudDogXCJib3R0b21cIixcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6ICcjZmlsdGVyLWJhcicsXG4gICAgICAgICAgICAgICAgZGlzYWJsZUJlYWNvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgVGhlIDxUZXJtPmZpbHRlciBiYXI8L1Rlcm0+IGFsbG93cyB5b3UgdG8gY29uZmlndXJlXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGljaCBkb2N1bWVudHMgYXJlIHZpc2libGUuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFlvdSBjYW4gaGlkZS9zaG93IGRvY3VtZW50cyB0aGF0IGFyZSBmbGFnZ2VkLCBhcmNoaXZlZCBhbmRcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsc28gZmlsdGVyIGJ5IHRhZ3Mgb3Igc2VhcmNoIGJ5IHRpdGxlLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj4sXG4gICAgICAgICAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNjUwcHgnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcblxuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiAnI3RvZ2dsZS1zaWRlYmFyJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxUZXJtPkNsaWNrPC9UZXJtPiB0aGlzIGJ1dHRvbiB0byBkaXNwbGF5IHRoZSBzaWRlYmFyLlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+LFxuICAgICAgICAgICAgICAgIHNwb3RsaWdodENsaWNrczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlQmVhY29uOiB0cnVlLFxuICAgICAgICAgICAgICAgIHBsYWNlbWVudDogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICBoaWRlRm9vdGVyOiB0cnVlLFxuICAgICAgICAgICAgICAgIGhpZGVDbG9zZUJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdXRvTmV4dDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyBUT0RPOiBuZWVkcyB0byBiZSBwb3NpdGlvbmVkIGFib3V0IGEgM3JkIG9mIHRoZSB3YXkgZG93biB0aGVcbiAgICAgICAgICAgIC8vIHBhZ2UuLi5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogPFRpdGxlPlNpZGViYXI8L1RpdGxlPixcbiAgICAgICAgICAgICAgICB0YXJnZXQ6ICcucmVwby1zaWRlYmFyIHNlY3Rpb25bZGF0YS1leHBhbmRlZD10cnVlXScsXG4gICAgICAgICAgICAgICAgY29udGVudDogPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgVGhlIDxUZXJtPnNpZGViYXI8L1Rlcm0+IGFsbG93cyB5b3UgdG8gc2VsZWN0IGRpZmZlcmVudFxuICAgICAgICAgICAgICAgICAgICB2aWV3cyBpbmNsdWRpbmdcbiAgICAgICAgICAgICAgICAgICAgdGhlIDxUZXJtPmFubm90YXRpb248L1Rlcm0+IGFuZCA8VGVybT5zdGF0aXN0aWNzPC9UZXJtPiB2aWV3cy5cbiAgICAgICAgICAgICAgICA8L2Rpdj4sXG4gICAgICAgICAgICAgICAgZGlzYWJsZUJlYWNvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6ICdyaWdodC1zdGFydCcsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAxMCxcbiAgICAgICAgICAgICAgICBzcG90bGlnaHRQYWRkaW5nOiAwLFxuICAgICAgICAgICAgICAgIGhpZGVCYWNrQnV0dG9uOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiA8VGl0bGU+QW5ub3RhdGlvbnM8L1RpdGxlPixcbiAgICAgICAgICAgICAgICB0YXJnZXQ6ICdzZWN0aW9uW2RhdGEtZXhwYW5kZWQ9dHJ1ZV0gI3NpZGViYXItaXRlbS1hbm5vdGF0aW9ucycsXG4gICAgICAgICAgICAgICAgY29udGVudDogPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgTm93IDxUZXJtPmNsaWNrIGhlcmU8L1Rlcm0+IHRvIHZpZXcgdGhlIDxUZXJtPmFubm90YXRpb25zIHZpZXc8L1Rlcm0+LlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+LFxuICAgICAgICAgICAgICAgIHNwb3RsaWdodENsaWNrczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlQmVhY29uOiB0cnVlLFxuICAgICAgICAgICAgICAgIHBsYWNlbWVudDogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICBoaWRlRm9vdGVyOiB0cnVlLFxuICAgICAgICAgICAgICAgIHNwb3RsaWdodFBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHpJbmRleDogWl9JTkRFWFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhdXRvTmV4dDogdHJ1ZVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgSm95cmlkZVRvdXJzLmNyZWF0ZUltYWdlU3RlcCh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiAnLmFubm90YXRpb25zLXZpZXcgaGVhZGVyJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogPFRpdGxlPkFubm90YXRpb25zIFZpZXc8L1RpdGxlPixcbiAgICAgICAgICAgICAgICBjb250ZW50OiA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgdGhlIDxUZXJtPmFubm90YXRpb25zIHZpZXc8L1Rlcm0+LiAgSXQgYWxsb3dzIHlvdVxuICAgICAgICAgICAgICAgICAgICAgICAgdG8gdmlldyBhbGwgeW91ciBhbm5vdGF0aW9ucyBpbmNsdWRpbmcgaGlnaGxpZ2h0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRzLCBhbmQgZmxhc2hjYXJkcy5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PixcbiAgICAgICAgICAgICAgICBpbWFnZTogXCIvd2ViL2Fzc2V0cy9pbWFnZXMvZG9jLnN2Z1wiLFxuICAgICAgICAgICAgICAgIHBsYWNlbWVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgaGlkZUJhY2tCdXR0b246IHRydWVcbiAgICAgICAgICAgIH0pLFxuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiAnI3RvZ2dsZS1zaWRlYmFyJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgTm93IGxldCdzIGdvIHRvIHRoZSA8VGVybT5zdGF0aXN0aWNzIHZpZXcuPC9UZXJtPlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGVybT5DbGljazwvVGVybT4gdGhpcyBidXR0b24gdG8gZGlzcGxheSB0aGUgc2lkZWJhci5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+LFxuICAgICAgICAgICAgICAgIHNwb3RsaWdodENsaWNrczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlQmVhY29uOiB0cnVlLFxuICAgICAgICAgICAgICAgIHBsYWNlbWVudDogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICBoaWRlRm9vdGVyOiB0cnVlLFxuICAgICAgICAgICAgICAgIGhpZGVDbG9zZUJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdXRvTmV4dDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG5cblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiA8VGl0bGU+U2lkZWJhcjwvVGl0bGU+LFxuICAgICAgICAgICAgICAgIHRhcmdldDogJ3NlY3Rpb25bZGF0YS1leHBhbmRlZD10cnVlXSAjc2lkZWJhci1pdGVtLXN0YXRzJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICBOb3cgPFRlcm0+Y2xpY2sgaGVyZTwvVGVybT4gdG8gdmlldyB0aGUgPFRlcm0+c3RhdGlzdGljcyB2aWV3PC9UZXJtPi5cblxuICAgICAgICAgICAgICAgIDwvZGl2PixcbiAgICAgICAgICAgICAgICBzcG90bGlnaHRDbGlja3M6IHRydWUsXG4gICAgICAgICAgICAgICAgZGlzYWJsZUJlYWNvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgaGlkZUZvb3RlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzcG90bGlnaHRQYWRkaW5nOiAwLFxuICAgICAgICAgICAgICAgIHN0eWxlczoge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IFpfSU5ERVhcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYXV0b05leHQ6IHRydWVcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIEpveXJpZGVUb3Vycy5jcmVhdGVJbWFnZVN0ZXAoe1xuICAgICAgICAgICAgICAgIHRhcmdldDogJy5zdGF0aXN0aWNzLXZpZXcgaGVhZGVyJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogPFRpdGxlPlN0YXRpc3RpY3MgVmlldzwvVGl0bGU+LFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyB0aGUgPFRlcm0+c3RhdGlzdGljcyB2aWV3PC9UZXJtPi4gIEl0IGFsbG93cyB5b3VcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvIHZpZXcgaW1wb3J0YW50cyBzdGF0aXN0aWNzIHJlZ2FyZGluZyB5b3VyIHJlYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudHMsIGFuZCBhbm5vdGF0aW9ucyBpbmNsdWRpbmcgdGhlIHJhdGUgb2YgbmV3XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudHMgYW5kIHN0YXRpc3RpY3Mgb24geW91ciB0YWdzLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+LFxuICAgICAgICAgICAgICAgIGltYWdlOiBcIi93ZWIvYXNzZXRzL2ltYWdlcy9zdGF0aXN0aWNzLnN2Z1wiLFxuICAgICAgICAgICAgICAgIGhpZGVCYWNrQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgICAgIHBsYWNlbWVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICB9KSxcblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiA8VGl0bGU+RGFpbHkgUmVhZGluZyBQcm9ncmVzczwvVGl0bGU+LFxuICAgICAgICAgICAgICAgIHRhcmdldDogJyNyZWFkaW5nLXByb2dyZXNzLXRhYmxlJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRoZSA8VGVybT5yZWFkaW5nIHByb2dyZXNzPC9UZXJtPiBtZXRyaWMgYWxsb3dzIHlvdSB0byB0cmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgaG93IG9mdGVuIHlvdSdyZSByZWFkaW5nIHRvIGVuY291cmFnZSB5b3UgdG8gaGl0IHlvdXIgZ29hbHMuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIEVhY2ggY29sdW1uIGlzIG9uZSB3ZWVrIGFuZCB3ZSBkaXNwbGF5IDUyIHdlZWtzIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICByZXByZXNlbnQgdGhlIGVudGlyZSB5ZWFyLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj4sXG4gICAgICAgICAgICAgICAgZGlzYWJsZUJlYWNvbjogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6ICcjdG9nZ2xlLXNpZGViYXInLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IDxkaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICBOb3cgbGV0J3MgZ28gYmFjayB0byB0aGUgPFRlcm0+ZG9jdW1lbnRzIHZpZXcuPC9UZXJtPlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGVybT5DbGljazwvVGVybT4gdGhpcyBidXR0b24gdG8gZGlzcGxheSB0aGUgc2lkZWJhci5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+LFxuICAgICAgICAgICAgICAgIHNwb3RsaWdodENsaWNrczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlQmVhY29uOiB0cnVlLFxuICAgICAgICAgICAgICAgIHBsYWNlbWVudDogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICBoaWRlRm9vdGVyOiB0cnVlLFxuICAgICAgICAgICAgICAgIGhpZGVDbG9zZUJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdXRvTmV4dDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG5cblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiA8VGl0bGU+U2VsZWN0IGRvY3VtZW50cyB2aWV3Li4uPC9UaXRsZT4sXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiAnc2VjdGlvbltkYXRhLWV4cGFuZGVkPXRydWVdICNzaWRlYmFyLWl0ZW0tZG9jdW1lbnRzJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICBOb3cgPFRlcm0+Y2xpY2s8L1Rlcm0+IHRvIHZpZXcgdGhlIDxUZXJtPmRvY3VtZW50cyB2aWV3PC9UZXJtPi5cblxuICAgICAgICAgICAgICAgIDwvZGl2PixcbiAgICAgICAgICAgICAgICBzcG90bGlnaHRDbGlja3M6IHRydWUsXG4gICAgICAgICAgICAgICAgZGlzYWJsZUJlYWNvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgaGlkZUZvb3RlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzcG90bGlnaHRQYWRkaW5nOiAwLFxuICAgICAgICAgICAgICAgIHN0eWxlczoge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IFpfSU5ERVhcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYXV0b05leHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgaGlkZUJhY2tCdXR0b246IHRydWVcbiAgICAgICAgICAgIH0sXG5cblxuICAgICAgICAgICAgSm95cmlkZVRvdXJzLmNyZWF0ZUltYWdlU3RlcCh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBgI2RvYy10YWJsZSBkaXZbZGF0YS1kb2MtZmluZ2VycHJpbnQ9JyR7TG9hZEV4YW1wbGVEb2NzLk1BSU5fQU5OT1RBVElPTlNfRVhBTVBMRV9GSU5HRVJQUklOVH0nXWAsXG4gICAgICAgICAgICAgICAgdGl0bGU6IDxUaXRsZT5PcGVuIGEgZG9jdW1lbnQ8L1RpdGxlPixcbiAgICAgICAgICAgICAgICBjb250ZW50OiA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgTGV0J3Mgb3BlbiBhIGRvY3VtZW50LlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICBHbyBhaGVhZCBhbmQgPFRlcm0+ZG91YmxlIGNsaWNrPC9UZXJtPiBvbiB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodGVkIGRvY3VtZW50IHJvdyBhbmQgYSBuZXcgd2luZG93IHdpbGwgb3Blbi5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBzcGVjaWZpYyBkb2N1bWVudCBoYXMgc29tZSBleGFtcGxlIGFubm90YXRpb25zLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj4sXG4gICAgICAgICAgICAgICAgc3BvdGxpZ2h0Q2xpY2tzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGhpZGVCYWNrQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgICAgIGltYWdlOlxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJmYXIgZmEtZmlsZS1wZGZcIi8+XG4gICAgICAgICAgICB9KSxcblxuICAgICAgICAgICAgLy8gVE9ETzogYXV0byBhZHZhbmNlIHRvIHRoaXMgb25jZSB0aGUgZG9jdW1lbnQgaGFzIGJlZW4gb3BlbmVkIGFuZFxuICAgICAgICAgICAgLy8gd2UgJ3ZlIGRvbmUgdGhlIHZpZXdlciB0b3VyIGFuZCBJIHRoaW5rIHRoaXMgc2hvdWxkIGJlIG1vcmUgb2YgYVxuICAgICAgICAgICAgLy8gY2hlY2tsaXN0LlxuXG5cbiAgICAgICAgICAgIEpveXJpZGVUb3Vycy5jcmVhdGVJbWFnZVN0ZXAoe1xuICAgICAgICAgICAgICAgIHRhcmdldDogJ2hlYWRlcicsXG4gICAgICAgICAgICAgICAgY29udGVudDogPGRpdj5cblxuICAgICAgICAgICAgICAgICAgICA8aDI+VGhhbmtzIGZvciBUYWtpbmcgdGhlIFRvdXI8L2gyPlxuXG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgRnJvbSB0aW1lIHRvIHRpbWUgd2UnbGwgY2hlY2staW4gdG8gc2VlIGlmIFBvbGFyIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JraW5nIGZvciB5b3UgYW5kIHdoZXRoZXIgeW91IGhhdmUgYW55IG90aGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWdnZXN0aW9ucyB0byBpbXByb3ZlIFBvbGFyIGZvciB5b3VyIHVzZSBjYXNlLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj4sXG4gICAgICAgICAgICAgICAgaW1hZ2U6IFwiL2ljb24ucG5nXCIsXG4gICAgICAgICAgICAgICAgcGxhY2VtZW50OiAnY2VudGVyJ1xuXG4gICAgICAgICAgICB9KSxcblxuICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgLy8gICAgIHRhcmdldDogJ2hlYWRlcicsXG4gICAgICAgICAgICAvLyAgICAgY29udGVudDogPGRpdj5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlRoYW5rcyBmb3IgdGFraW5nIHRoZSB0b3VyITwvaDI+XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgICAgICA8cD5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIE5vdyB0aGF0IHlvdSB1bmRlcnN0YW5kIFBvbGFyIHlvdXIgbmV4dCBzdGVwcyBhcmUgdG9cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGFkZCBkb2N1bWVudHMuXG4gICAgICAgICAgICAvLyAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIDxGZWVkYmFjayBjYXRlZ29yeT1cInRvdXItZmVlZGJhY2tcIlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiSG93IGxpa2VseSBhcmUgeW91IHRvIGNvbnRpbnVlIHVzaW5nIFBvbGFyP1wiXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJXZSB3YW50ZWQgdG8gZ2V0IHlvdXIgaW5pdGlhbCB0aG91Z2h0cyBhZnRlciB0YWtpbmcgdGhlIHRvdXIuXCJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICBmcm9tPVwiTm90IGxpa2VseVwiXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgdG89XCJWZXJ5IGxpa2VseVwiXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgdW5zdXJlPXt0cnVlfS8+XG4gICAgICAgICAgICAvLyAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgICA8L2Rpdj4sXG4gICAgICAgICAgICAvLyAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgICAvLyAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHdpZHRoOiAnNjUwcHgnXG4gICAgICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICB9LFxuICAgICAgICAgICAgLy8gICAgIGRpc2FibGVCZWFjb246IHRydWUsXG4gICAgICAgICAgICAvLyAgICAgcGxhY2VtZW50OiAnY2VudGVyJ1xuICAgICAgICAgICAgLy8gfSxcblxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgIC8vICAgICB0YXJnZXQ6ICcuZG9jLXRhYmxlLWNvbC1hZGRlZCcsXG4gICAgICAgICAgICAvLyAgICAgdGl0bGU6IDxUaXRsZT5Tb3J0aW5nPC9UaXRsZT4sXG4gICAgICAgICAgICAvLyAgICAgZGlzYWJsZUJlYWNvbjogdHJ1ZSxcbiAgICAgICAgICAgIC8vICAgICBjb250ZW50OiA8ZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICBXZSBrZWVwIHRyYWNrIG9mIHRoZSB0aW1lIGEgZG9jdW1lbnRcbiAgICAgICAgICAgIC8vICAgICAgICAgd2FzIDxUZXJtPmFkZGVkPC9UZXJtPiBhbmQgPFRlcm0+dXBkYXRlZDwvVGVybT4gc29cbiAgICAgICAgICAgIC8vICAgICAgICAgeW91IGNhbiBzb3J0IGJ5IHRpbWUgdG8gcmVhZCB0aGUgbW9zdCByZWNlbnRseSBhZGRlZCAob3JcbiAgICAgICAgICAgIC8vICAgICAgICAgdXBkYXRlZCkgZG9jdW1lbnRzIGZpcnN0LlxuICAgICAgICAgICAgLy8gICAgIDwvZGl2PixcbiAgICAgICAgICAgIC8vICAgICAvLyBwbGFjZW1lbnQ6IFwiYm90dG9tXCIsXG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgIC8vICAgICB0YXJnZXQ6ICcuZG9jLXRhYmxlLWNvbC10aXRsZScsXG4gICAgICAgICAgICAvLyAgICAgZGlzYWJsZUJlYWNvbjogdHJ1ZSxcbiAgICAgICAgICAgIC8vICAgICBjb250ZW50OiA8ZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICBUaGUgdGl0bGUgb2YgdGhlIGRvY3VtZW50IGlzIGF1dG9tYXRpY2FsbHkgc2V0IHdoZW4gaXQnc1xuICAgICAgICAgICAgLy8gICAgICAgICBhZGRlZCBidXQgeW91IGNhbiBjaGFuZ2UgaXQgYXQgYW55IHRpbWVcbiAgICAgICAgICAgIC8vICAgICA8L2Rpdj4sXG4gICAgICAgICAgICAvLyAgICAgLy8gcGxhY2VtZW50OiBcImJvdHRvbVwiLFxuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIC8vXG5cblxuICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgLy8gICAgIHRhcmdldDogJy5kb2MtZHJvcGRvd24nLFxuICAgICAgICAgICAgLy8gICAgIGRpc2FibGVCZWFjb246IHRydWUsXG4gICAgICAgICAgICAvLyAgICAgY29udGVudDogIDxkaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgIFRoZSBkcm9wZG93biBhbGxvdyB5b3UgcGVyZm9ybSBvdGhlciBhY3Rpb25zIG9uIGFcbiAgICAgICAgICAgIC8vIGRvY3VtZW50IGluY2x1ZGluZyBjaGFuZ2luZyB0aGUgdGl0bGUgYW5kIGRlbGV0aW5nIGRvY3VtZW50cy5cbiAgICAgICAgICAgIC8vIDwvZGl2PiwgLy8gcGxhY2VtZW50OiBcImJvdHRvbVwiLCB9LCAgIC8vIC8vIHsgLy8gICAgIC8vIHRhcmdldDpcbiAgICAgICAgICAgIC8vICcjZG9jLXJlcG8tdGFibGUgLnJ0LXRib2R5ID4gZGl2Om50aC1jaGlsZCgtbis0KScsIC8vXG4gICAgICAgICAgICAvLyB0YXJnZXQ6ICcjZG9jLXJlcG8tdGFibGUgLnJ0LXRib2R5ID4gZGl2Om50aC1jaGlsZCgtbisxKScsIC8vXG4gICAgICAgICAgICAvLyAgdGl0bGU6IDxUaXRsZT5PcGVuIGEgZG9jdW1lbnQ8L1RpdGxlPiwgLy8gICAgIGRpc2FibGVCZWFjb246XG4gICAgICAgICAgICAvLyB0cnVlLCAvLyAgICAgc3BvdGxpZ2h0Q2xpY2tzOiB0cnVlLCAvLyAgICAgY29udGVudDogPGRpdj4gLy8gLy9cbiAgICAgICAgICAgIC8vICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYm9vay1vcGVuIHRleHQtcHJpbWFyeVwiIC8vXG4gICAgICAgICAgICAvLyAgc3R5bGU9e3tmb250U2l6ZTogJzE1MHB4J319PjwvaT4gLy8gLy8gICAgICAgICA8cD4gLy9cbiAgICAgICAgICAgIC8vICAgTGV0J3Mgb3BlbiBhIGRvY3VtZW50LiAvLyAgICAgICAgIDwvcD4gLy8gLy8gICAgICAgICA8cD4gLy9cbiAgICAgICAgICAgIC8vICAgICAgICAgIEdvIGFoZWFkIGFuZCA8VGVybT5kb3VibGUgY2xpY2s8L1Rlcm0+IG9uIHRoZSAvLyAgICAgICAgICAgICBoaWdobGlnaHRlZCBkb2N1bWVudCByb3cgYW5kIGEgbmV3IHdpbmRvdyB3aWxsIG9wZW4uIC8vICAgICAgICAgPC9wPiAvLyAvLyAgICAgPC9kaXY+LCAvLyAgICAgLy8gcGxhY2VtZW50OiBcImJvdHRvbVwiLCAvLyB9LFxuXG4gICAgICAgIF07XG5cbiAgICAgICAgcmV0dXJuIHN0ZXBzLmZpbHRlcihjdXJyZW50ID0+ICEgY3VycmVudC5kaXNhYmxlZCk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ2FsbGJhY2soY2FsbGJhY2tQcm9wczogQ2FsbEJhY2tQcm9wcyk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFja1Byb3BzO1xuXG4gICAgICAgIFJlbmRlcmVyQW5hbHl0aWNzLmV2ZW50KHtjYXRlZ29yeTogJ3RvdXInLCBhY3Rpb246ICdkaWQtc3RlcC0nICsgY2FsbGJhY2tQcm9wcy5pbmRleH0pO1xuXG4gICAgICAgIGNvbnN0IHN0ZXA6IEVuaGFuY2VkU3RlcCA9IGNhbGxiYWNrUHJvcHMuc3RlcDtcblxuICAgICAgICBpZiAoY2FsbGJhY2tQcm9wcy5hY3Rpb24gPT09ICd1cGRhdGUnICYmIHN0ZXAuYXV0b05leHQpIHtcblxuICAgICAgICAgICAgY29uc3QgbmV4dFN0ZXAgPSB0aGlzLnN0ZXBzW2NhbGxiYWNrUHJvcHMuaW5kZXggKyAxXTtcblxuICAgICAgICAgICAgY29uc3QgbmV4dEhhbmRsZXIgPSAoKTogYm9vbGVhbiA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAobmV4dFN0ZXAudGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBuZXh0U3RlcC50YXJnZXQ7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgIT0gbnVsbDtcblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgbGV0IG11dGF0aW9uT2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXI7XG5cbiAgICAgICAgICAgIGNvbnN0IG11dGF0aW9uSGFuZGxlciA9ICgpID0+IHtcblxuICAgICAgICAgICAgICAgIGlmIChuZXh0SGFuZGxlcigpKSB7XG4gICAgICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBJbmRleCA9IHRoaXMuc3RhdGUuc3RlcEluZGV4ICsgMTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICBydW46IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobXV0YXRpb25IYW5kbGVyKTtcblxuICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHtcbiAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gY2FsbCBpdCBvbmNlIG1hbnVhbGx5IGFmdGVyIHRoZSBldmVudCB3YXMgcmVnaXN0ZXJlZCBhcyB0aGVcbiAgICAgICAgICAgIC8vIGVsZW1lbnQgbWlnaHQgYWxyZWFkeSBiZSB2aXNpYmxlIGluIHRoZSBET00gYXQgd2hpY2ggcG9pbnQgd2UncmVcbiAgICAgICAgICAgIC8vIGFscmVhZHkgZG9uZS5cbiAgICAgICAgICAgIG11dGF0aW9uSGFuZGxlcigpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2FsbGJhY2tQcm9wcy5zdGF0dXMgPT09IFNUQVRVUy5TS0lQUEVEIHx8IGNhbGxiYWNrUHJvcHMuc3RhdHVzID09PSBTVEFUVVMuRklOSVNIRUQpIHtcblxuICAgICAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgICAgIC8vIEZJWE1FP1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBydW46IGZhbHNlLCBzdGVwSW5kZXg6IDAgfSk7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGNhbGxiYWNrUHJvcHMuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgU1RBVFVTLlNLSVBQRUQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBSZW5kZXJlckFuYWx5dGljcy5ldmVudCh7Y2F0ZWdvcnk6ICd0b3VyLXJlc3VsdCcsIGFjdGlvbjogJ3NraXBwZWQnfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBSZW5kZXJlckFuYWx5dGljcy5ldmVudCh7Y2F0ZWdvcnk6ICd0b3VyLXNraXAnLCBhY3Rpb246ICdza2lwcGVkLWF0LXN0ZXAtJyArIGNhbGxiYWNrUHJvcHMuaW5kZXh9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgTGlmZWN5Y2xlVG9nZ2xlLm1hcmsoTGlmZWN5Y2xlRXZlbnRzLlRPVVJfU0tJUFBFRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBTVEFUVVMuRklOSVNIRUQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBSZW5kZXJlckFuYWx5dGljcy5ldmVudCh7Y2F0ZWdvcnk6ICd0b3VyLXJlc3VsdCcsIGFjdGlvbjogJ2ZpbmlzaGVkJ30pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBMaWZlY3ljbGVUb2dnbGUubWFyayhMaWZlY3ljbGVFdmVudHMuVE9VUl9GSU5JU0hFRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgTGlmZWN5Y2xlVG9nZ2xlLm1hcmsoTGlmZWN5Y2xlRXZlbnRzLlRPVVJfVEVSTUlOQVRFRCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIGlmIChjYWxsYmFja1Byb3BzLnR5cGUgPT09IEVWRU5UUy5TVEVQX0FGVEVSKSB7XG5cbiAgICAgICAgICAgIGlmICggISB0aGlzLnN0YXRlLnJ1bikge1xuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcnVuOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgfSwgMjUwKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmRvU3RlcChjYWxsYmFja1Byb3BzKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNhbGxiYWNrUHJvcHMudHlwZSA9PT0gRVZFTlRTLlRBUkdFVF9OT1RfRk9VTkQpIHtcblxuICAgICAgICAgICAgLy8gVE9ETzogYWRkIGEgRE9NIGV2ZW50IGxpc3RlbmVyIHRvIHdhaXQgZm9yIGl0IHRvIGJlY29tZVxuICAgICAgICAgICAgLy8gYXZhaWxhYmxlPz8/XG5cbiAgICAgICAgICAgIGxvZy53YXJuKFwiTm90IGZvdW5kOiBcIiwgY2FsbGJhY2tQcm9wcyk7XG5cbiAgICAgICAgICAgIHRoaXMuZG9TdGVwKGNhbGxiYWNrUHJvcHMpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGRvU3RlcChjYWxsQmFja1Byb3BzOiBDYWxsQmFja1Byb3BzKSB7XG5cbiAgICAgICAgY29uc3Qgc3RlcEluZGV4ID0gY2FsbEJhY2tQcm9wcy5pbmRleCArIChjYWxsQmFja1Byb3BzLmFjdGlvbiA9PT0gQUNUSU9OUy5QUkVWID8gLTEgOiAxKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsuLi50aGlzLnN0YXRlLCBzdGVwSW5kZXggfSk7XG5cbiAgICB9XG5cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3RhdGUge1xuICAgIHJlYWRvbmx5IHJ1bjogYm9vbGVhbjtcbiAgICByZWFkb25seSBzdGVwSW5kZXg6IG51bWJlcjtcbn1cbiJdfQ==