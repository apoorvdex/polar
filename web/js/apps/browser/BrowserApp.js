"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const Logger_1 = require("../../logger/Logger");
const WebContentsNotifiers_1 = require("../../electron/web_contents_notifier/WebContentsNotifiers");
const BrowserAppEvent_1 = require("./BrowserAppEvent");
const ReactDOM = __importStar(require("react-dom"));
const React = __importStar(require("react"));
const BrowserNavBar_1 = require("./react/BrowserNavBar");
const DocumentReadyStates_1 = require("../../util/dom/DocumentReadyStates");
const Preconditions_1 = require("../../Preconditions");
const BrowserRegistry_1 = __importDefault(require("../../capture/BrowserRegistry"));
const SimpleReactor_1 = require("../../reactor/SimpleReactor");
const ProgressBar_1 = require("../../ui/progress_bar/ProgressBar");
const BackgroundFrameResizer_1 = require("../../viewer/html/BackgroundFrameResizer");
const RendererAnalytics_1 = require("../../ga/RendererAnalytics");
const log = Logger_1.Logger.create();
class BrowserApp {
    constructor() {
        this.loadedURL = false;
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            yield DocumentReadyStates_1.DocumentReadyStates.waitFor(document, 'complete');
            const navigationReactor = new SimpleReactor_1.SimpleReactor();
            ReactDOM.render(React.createElement(BrowserNavBar_1.BrowserNavBar, { onLoadURL: (url) => this.onLoadURL(url), onBrowserChanged: (browserName) => this.onBrowserChanged(browserName), onTriggerCapture: () => this.onTriggerCapture(), onReload: () => this.onReload(), navigationReactor: navigationReactor }), document.getElementById('browser-navbar-parent'));
            const content = this.getContentHost();
            content.addEventListener('dom-ready', () => __awaiter(this, void 0, void 0, function* () {
                content.insertCSS('html, body { overflow: hidden !important; }');
                content.addEventListener('will-navigate', (event) => {
                    this.onWebviewNavigated(event.url);
                });
                ['did-start-loading', 'did-stop-loading', 'did-fail-load', 'dom-ready']
                    .map(eventListenerName => content.addEventListener(eventListenerName, () => this.refreshTitle(eventListenerName)));
                ['did-start-loading', 'did-frame-navigate']
                    .map(eventListenerName => content.addEventListener(eventListenerName, (event) => {
                    const currentURL = content.getURL();
                    this.onWebviewNavigated(currentURL);
                    if (this.loadedURL) {
                        return;
                    }
                    if (currentURL && currentURL !== '' && !currentURL.startsWith("file:")) {
                        this.loadedURL = true;
                    }
                    else {
                        return;
                    }
                    navigationReactor.dispatchEvent({ url: currentURL, type: 'did-start-loading' });
                }));
                content.addEventListener('did-stop-loading', (event) => {
                    if (!this.loadedURL) {
                        return;
                    }
                    if (this.progressBar) {
                        this.progressBar.destroy();
                    }
                    const currentURL = content.getURL();
                    navigationReactor.dispatchEvent({ url: currentURL, type: 'did-stop-loading' });
                });
                content.addEventListener('did-fail-load', () => {
                    log.warn("Load of URL failed.");
                });
                this.forwardConsoleMessages(content);
            }));
        });
    }
    forwardConsoleMessages(content) {
        content.addEventListener('console-message', (consoleMessageEvent) => {
            const prefix = 'WEBVIEW: ';
            switch (consoleMessageEvent.level) {
                case -1:
                    console.debug(prefix + consoleMessageEvent.message);
                    break;
                case 0:
                    console.info(prefix + consoleMessageEvent.message);
                    break;
                case 1:
                    console.warn(prefix + consoleMessageEvent.message);
                    break;
                case 2:
                    console.error(prefix + consoleMessageEvent.message);
                    break;
            }
        });
    }
    onLoadURL(value) {
        if (Preconditions_1.isPresent(value) && !value.startsWith("http:") && !value.startsWith("https:")) {
            log.debug("Not a URL: " + value);
            return;
        }
        log.debug("Loading URL: " + value);
        this.loadedURL = true;
        RendererAnalytics_1.RendererAnalytics.event({ category: 'content-capture', action: 'loaded-url' });
        WebContentsNotifiers_1.WebContentsNotifiers.dispatchEvent(BrowserAppEvent_1.BrowserAppEvent.PROVIDE_URL, value);
    }
    onTriggerCapture() {
        RendererAnalytics_1.RendererAnalytics.event({ category: 'content-capture', action: 'triggered' });
        WebContentsNotifiers_1.WebContentsNotifiers.dispatchEvent(BrowserAppEvent_1.BrowserAppEvent.TRIGGER_CAPTURE, {});
    }
    onBrowserChanged(browserName) {
        const browser = BrowserRegistry_1.default[browserName];
        RendererAnalytics_1.RendererAnalytics.event({ category: 'content-capture', action: 'browser-changed' });
        WebContentsNotifiers_1.WebContentsNotifiers.dispatchEvent(BrowserAppEvent_1.BrowserAppEvent.CONFIGURE_WINDOW, browser);
    }
    onReload() {
        const content = this.getContentHost();
        this.onLoadURL(content.getURL());
    }
    onWebviewNavigated(url) {
        if (!Preconditions_1.isPresent(url) || url.startsWith("file:")) {
            return;
        }
        this.changeURL(url);
        this.createProgressBar();
        this.scrollPageToTop();
        this.startResizingWebview();
    }
    scrollPageToTop() {
        document.body.scrollTo(0, 0);
    }
    createProgressBar() {
        if (!this.progressBar) {
            this.progressBar = ProgressBar_1.ProgressBar.create(true);
        }
    }
    changeURL(url) {
        const element = document.querySelector("#url-bar");
        element.value = url;
    }
    startResizingWebview() {
        const contentHost = this.getContentHost();
        const backgroundFrameResizer = new BackgroundFrameResizer_1.BackgroundFrameResizer(contentHost.parentElement, contentHost);
        backgroundFrameResizer.start();
    }
    refreshTitle(eventName) {
        const contentHost = this.getContentHost();
        document.title = contentHost.getTitle();
    }
    getContentHost() {
        return document.querySelector("#content");
    }
}
exports.BrowserApp = BrowserApp;
var TriggerBrowserLoad;
(function (TriggerBrowserLoad) {
    TriggerBrowserLoad.MESSAGE_TYPE = 'trigger-browser-load-url';
})(TriggerBrowserLoad = exports.TriggerBrowserLoad || (exports.TriggerBrowserLoad = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJvd3NlckFwcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkJyb3dzZXJBcHAudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTJDO0FBQzNDLG9HQUErRjtBQUMvRix1REFBa0Q7QUFDbEQsb0RBQXNDO0FBQ3RDLDZDQUErQjtBQUMvQix5REFBb0Q7QUFDcEQsNEVBQXVFO0FBQ3ZFLHVEQUE4QztBQUM5QyxvRkFBNEQ7QUFDNUQsK0RBQTBEO0FBQzFELG1FQUE4RDtBQUM5RCxxRkFBZ0Y7QUFDaEYsa0VBQTZEO0FBRTdELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLFVBQVU7SUFBdkI7UUFLWSxjQUFTLEdBQVksS0FBSyxDQUFDO0lBc052QyxDQUFDO0lBbE5nQixLQUFLOztZQUVkLE1BQU0seUNBQW1CLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUV4RCxNQUFNLGlCQUFpQixHQUFHLElBQUksNkJBQWEsRUFBbUIsQ0FBQztZQUUvRCxRQUFRLENBQUMsTUFBTSxDQUNYLG9CQUFDLDZCQUFhLElBQUMsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUN2QyxnQkFBZ0IsRUFBRSxDQUFDLFdBQW1CLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsRUFDN0UsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQy9DLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQy9CLGlCQUFpQixFQUFFLGlCQUFpQixHQUFJLEVBQ3ZELFFBQVEsQ0FBQyxjQUFjLENBQUMsdUJBQXVCLENBQWdCLENBQ2xFLENBQUM7WUFFRixNQUFNLE9BQU8sR0FB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QztRQUN4RSxPQUFPLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztJQUN4QixDQUFDO0lBRU8sb0JBQW9CO1FBRXhCLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMxQyxNQUFNLHNCQUFzQixHQUN0QixJQUFJLCtDQUFzQixDQUFDLFdBQVcsQ0FBQyxhQUFjLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFFMUUsc0JBQXNCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFbkMsQ0FBQztJQUVPLFlBQVksQ0FBQyxTQUFpQjtRQUNsQyxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDMUMsUUFBUSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDNUMsQ0FBQztJQUVPLGNBQWM7UUFDbEIsT0FBTyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBeUIsQ0FBQztJQUN0RSxDQUFDO0NBRUo7QUEzTkQsZ0NBMk5DO0FBa0JELElBQWlCLGtCQUFrQixDQVNsQztBQVRELFdBQWlCLGtCQUFrQjtJQUVsQiwrQkFBWSxHQUFHLDBCQUEwQixDQUFDO0FBTzNELENBQUMsRUFUZ0Isa0JBQWtCLEdBQWxCLDBCQUFrQixLQUFsQiwwQkFBa0IsUUFTbEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vLi4vbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge1dlYkNvbnRlbnRzTm90aWZpZXJzfSBmcm9tICcuLi8uLi9lbGVjdHJvbi93ZWJfY29udGVudHNfbm90aWZpZXIvV2ViQ29udGVudHNOb3RpZmllcnMnO1xuaW1wb3J0IHtCcm93c2VyQXBwRXZlbnR9IGZyb20gJy4vQnJvd3NlckFwcEV2ZW50JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0Jyb3dzZXJOYXZCYXJ9IGZyb20gJy4vcmVhY3QvQnJvd3Nlck5hdkJhcic7XG5pbXBvcnQge0RvY3VtZW50UmVhZHlTdGF0ZXN9IGZyb20gJy4uLy4uL3V0aWwvZG9tL0RvY3VtZW50UmVhZHlTdGF0ZXMnO1xuaW1wb3J0IHtpc1ByZXNlbnR9IGZyb20gJy4uLy4uL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IEJyb3dzZXJSZWdpc3RyeSBmcm9tICcuLi8uLi9jYXB0dXJlL0Jyb3dzZXJSZWdpc3RyeSc7XG5pbXBvcnQge1NpbXBsZVJlYWN0b3J9IGZyb20gJy4uLy4uL3JlYWN0b3IvU2ltcGxlUmVhY3Rvcic7XG5pbXBvcnQge1Byb2dyZXNzQmFyfSBmcm9tICcuLi8uLi91aS9wcm9ncmVzc19iYXIvUHJvZ3Jlc3NCYXInO1xuaW1wb3J0IHtCYWNrZ3JvdW5kRnJhbWVSZXNpemVyfSBmcm9tICcuLi8uLi92aWV3ZXIvaHRtbC9CYWNrZ3JvdW5kRnJhbWVSZXNpemVyJztcbmltcG9ydCB7UmVuZGVyZXJBbmFseXRpY3N9IGZyb20gJy4uLy4uL2dhL1JlbmRlcmVyQW5hbHl0aWNzJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgY2xhc3MgQnJvd3NlckFwcCB7XG5cbiAgICAvKipcbiAgICAgKiBUcnVlbiB3aGVuIHRoZSB1c2VyIGhhcyBsb2FkZWQgYW4gZXh0ZXJuYWwgVVJMLlxuICAgICAqL1xuICAgIHByaXZhdGUgbG9hZGVkVVJMOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIHByb2dyZXNzQmFyOiBQcm9ncmVzc0JhciB8IHVuZGVmaW5lZDtcblxuICAgIHB1YmxpYyBhc3luYyBzdGFydCgpIHtcblxuICAgICAgICBhd2FpdCBEb2N1bWVudFJlYWR5U3RhdGVzLndhaXRGb3IoZG9jdW1lbnQsICdjb21wbGV0ZScpO1xuXG4gICAgICAgIGNvbnN0IG5hdmlnYXRpb25SZWFjdG9yID0gbmV3IFNpbXBsZVJlYWN0b3I8TmF2aWdhdGlvbkV2ZW50PigpO1xuXG4gICAgICAgIFJlYWN0RE9NLnJlbmRlcihcbiAgICAgICAgICAgIDxCcm93c2VyTmF2QmFyIG9uTG9hZFVSTD17KHVybCkgPT4gdGhpcy5vbkxvYWRVUkwodXJsKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQnJvd3NlckNoYW5nZWQ9eyhicm93c2VyTmFtZTogc3RyaW5nKSA9PiB0aGlzLm9uQnJvd3NlckNoYW5nZWQoYnJvd3Nlck5hbWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25UcmlnZ2VyQ2FwdHVyZT17KCkgPT4gdGhpcy5vblRyaWdnZXJDYXB0dXJlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlbG9hZD17KCkgPT4gdGhpcy5vblJlbG9hZCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvblJlYWN0b3I9e25hdmlnYXRpb25SZWFjdG9yfSAvPixcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdicm93c2VyLW5hdmJhci1wYXJlbnQnKSBhcyBIVE1MRWxlbWVudFxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnRIb3N0KCk7XG5cbiAgICAgICAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdkb20tcmVhZHknLCBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnRlbnQuaW5zZXJ0Q1NTKCdodG1sLCBib2R5IHsgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50OyB9Jyk7XG5cbiAgICAgICAgICAgIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignd2lsbC1uYXZpZ2F0ZScsIChldmVudDogRWxlY3Ryb24uV2lsbE5hdmlnYXRlRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uV2Vidmlld05hdmlnYXRlZChldmVudC51cmwpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIFsnZGlkLXN0YXJ0LWxvYWRpbmcnLCAnZGlkLXN0b3AtbG9hZGluZycsICdkaWQtZmFpbC1sb2FkJywgJ2RvbS1yZWFkeScgXVxuICAgICAgICAgICAgICAgIC5tYXAoZXZlbnRMaXN0ZW5lck5hbWUgPT4gY29udGVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TGlzdGVuZXJOYW1lLCAoKSA9PiB0aGlzLnJlZnJlc2hUaXRsZShldmVudExpc3RlbmVyTmFtZSkpKTtcblxuICAgICAgICAgICAgWydkaWQtc3RhcnQtbG9hZGluZycsICdkaWQtZnJhbWUtbmF2aWdhdGUnIF1cbiAgICAgICAgICAgICAgICAubWFwKGV2ZW50TGlzdGVuZXJOYW1lID0+IGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudExpc3RlbmVyTmFtZSwgKGV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogcmVmYWN0b3IgdGhpcyBzbyBpdCBvbmx5IHdvcmtzIG9uIHRoZSB0b3AgbGV2ZWxcbiAgICAgICAgICAgICAgICAgICAgLy8gbmF2aWdhdGlvbiBjaGFuZ2VzIGJ1dCB3ZSB3ZXJlbid0IGFibGUgdG8gZG8gdGhpcyBiZWNhdXNlXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBldmVudCB3ZSdyZSByZWNlaXZpbmcgaXMgZ2VuZXJpYy5cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VVJMID0gY29udGVudC5nZXRVUkwoKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uV2Vidmlld05hdmlnYXRlZChjdXJyZW50VVJMKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2FkZWRVUkwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VVJMICYmIGN1cnJlbnRVUkwgIT09ICcnICYmICEgY3VycmVudFVSTC5zdGFydHNXaXRoKFwiZmlsZTpcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGVkVVJMID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb25SZWFjdG9yLmRpc3BhdGNoRXZlbnQoe3VybDogY3VycmVudFVSTCwgdHlwZTogJ2RpZC1zdGFydC1sb2FkaW5nJ30pO1xuXG4gICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICAvLyBDb3JyZXNwb25kcyB0byB0aGUgcG9pbnRzIGluIHRpbWUgd2hlbiB0aGUgc3Bpbm5lciBvZiB0aGUgdGFiXG4gICAgICAgICAgICAvLyBzdG9wcyBzcGlubmluZy5cbiAgICAgICAgICAgIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignZGlkLXN0b3AtbG9hZGluZycsIChldmVudCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKCEgdGhpcy5sb2FkZWRVUkwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb2dyZXNzQmFyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRVUkwgPSBjb250ZW50LmdldFVSTCgpO1xuXG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvblJlYWN0b3IuZGlzcGF0Y2hFdmVudCh7dXJsOiBjdXJyZW50VVJMLCB0eXBlOiAnZGlkLXN0b3AtbG9hZGluZyd9KTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignZGlkLWZhaWwtbG9hZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBsb2cud2FybihcIkxvYWQgb2YgVVJMIGZhaWxlZC5cIik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5mb3J3YXJkQ29uc29sZU1lc3NhZ2VzKGNvbnRlbnQpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb3J3YXJkQ29uc29sZU1lc3NhZ2VzKGNvbnRlbnQ6IEVsZWN0cm9uLldlYnZpZXdUYWcpIHtcblxuICAgICAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnNvbGUtbWVzc2FnZScsIChjb25zb2xlTWVzc2FnZUV2ZW50OiBFbGVjdHJvbi5Db25zb2xlTWVzc2FnZUV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHByZWZpeCA9ICdXRUJWSUVXOiAnO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKGNvbnNvbGVNZXNzYWdlRXZlbnQubGV2ZWwpIHtcblxuICAgICAgICAgICAgICAgIGNhc2UgLTE6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcocHJlZml4ICsgY29uc29sZU1lc3NhZ2VFdmVudC5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhwcmVmaXggKyBjb25zb2xlTWVzc2FnZUV2ZW50Lm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKHByZWZpeCArIGNvbnNvbGVNZXNzYWdlRXZlbnQubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHByZWZpeCArIGNvbnNvbGVNZXNzYWdlRXZlbnQubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uTG9hZFVSTCh2YWx1ZTogc3RyaW5nKSB7XG5cbiAgICAgICAgaWYgKGlzUHJlc2VudCh2YWx1ZSkgJiYgISB2YWx1ZS5zdGFydHNXaXRoKFwiaHR0cDpcIikgJiYgISB2YWx1ZS5zdGFydHNXaXRoKFwiaHR0cHM6XCIpKSB7XG4gICAgICAgICAgICBsb2cuZGVidWcoXCJOb3QgYSBVUkw6IFwiICsgdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbG9nLmRlYnVnKFwiTG9hZGluZyBVUkw6IFwiICsgdmFsdWUpO1xuXG4gICAgICAgIHRoaXMubG9hZGVkVVJMID0gdHJ1ZTtcblxuICAgICAgICBSZW5kZXJlckFuYWx5dGljcy5ldmVudCh7Y2F0ZWdvcnk6ICdjb250ZW50LWNhcHR1cmUnLCBhY3Rpb246ICdsb2FkZWQtdXJsJ30pO1xuXG4gICAgICAgIFdlYkNvbnRlbnRzTm90aWZpZXJzLmRpc3BhdGNoRXZlbnQoQnJvd3NlckFwcEV2ZW50LlBST1ZJREVfVVJMLCB2YWx1ZSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uVHJpZ2dlckNhcHR1cmUoKSB7XG5cbiAgICAgICAgUmVuZGVyZXJBbmFseXRpY3MuZXZlbnQoe2NhdGVnb3J5OiAnY29udGVudC1jYXB0dXJlJywgYWN0aW9uOiAndHJpZ2dlcmVkJ30pO1xuXG4gICAgICAgIFdlYkNvbnRlbnRzTm90aWZpZXJzLmRpc3BhdGNoRXZlbnQoQnJvd3NlckFwcEV2ZW50LlRSSUdHRVJfQ0FQVFVSRSwge30pO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkJyb3dzZXJDaGFuZ2VkKGJyb3dzZXJOYW1lOiBzdHJpbmcpIHtcblxuICAgICAgICBjb25zdCBicm93c2VyID0gQnJvd3NlclJlZ2lzdHJ5W2Jyb3dzZXJOYW1lXTtcblxuICAgICAgICBSZW5kZXJlckFuYWx5dGljcy5ldmVudCh7Y2F0ZWdvcnk6ICdjb250ZW50LWNhcHR1cmUnLCBhY3Rpb246ICdicm93c2VyLWNoYW5nZWQnfSk7XG5cbiAgICAgICAgV2ViQ29udGVudHNOb3RpZmllcnMuZGlzcGF0Y2hFdmVudChCcm93c2VyQXBwRXZlbnQuQ09ORklHVVJFX1dJTkRPVywgYnJvd3Nlcik7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uUmVsb2FkKCkge1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnRIb3N0KCk7XG5cbiAgICAgICAgdGhpcy5vbkxvYWRVUkwoY29udGVudC5nZXRVUkwoKSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG91bGQgYmUgY2FsbGVkIGV2ZXJ5IHRpbWUgd2UgY2hhbmdlIHRoZSBoaWdoIGxldmVsIFVSTCBiZWluZyB2aWV3ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICovXG4gICAgcHJpdmF0ZSBvbldlYnZpZXdOYXZpZ2F0ZWQodXJsOiBzdHJpbmcpIHtcblxuICAgICAgICBpZiAoISBpc1ByZXNlbnQodXJsKSB8fCB1cmwuc3RhcnRzV2l0aChcImZpbGU6XCIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoYW5nZVVSTCh1cmwpO1xuICAgICAgICB0aGlzLmNyZWF0ZVByb2dyZXNzQmFyKCk7XG4gICAgICAgIHRoaXMuc2Nyb2xsUGFnZVRvVG9wKCk7XG4gICAgICAgIHRoaXMuc3RhcnRSZXNpemluZ1dlYnZpZXcoKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgc2Nyb2xsUGFnZVRvVG9wKCkge1xuICAgICAgICAvLyBzY3JvbGwgdG8gdGhlIHRvcCBvZiB0aGUgcGFnZS4uLlxuICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvKDAsIDApO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlUHJvZ3Jlc3NCYXIoKSB7XG4gICAgICAgIC8vIGNyZWF0ZSBhIHByb2dyZXNzIGJhciBzbyB3ZSBrbm93IHRoYXQgdGhlIHBhZ2UgaXMgbG9hZGluZ1xuXG4gICAgICAgIGlmICghIHRoaXMucHJvZ3Jlc3NCYXIpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSBQcm9ncmVzc0Jhci5jcmVhdGUodHJ1ZSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgY2hhbmdlVVJMKHVybDogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VybC1iYXJcIikhIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGVsZW1lbnQudmFsdWUgPSB1cmw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGFydFJlc2l6aW5nV2VidmlldygpIHtcblxuICAgICAgICBjb25zdCBjb250ZW50SG9zdCA9IHRoaXMuZ2V0Q29udGVudEhvc3QoKTtcbiAgICAgICAgY29uc3QgYmFja2dyb3VuZEZyYW1lUmVzaXplclxuICAgICAgICAgICAgPSBuZXcgQmFja2dyb3VuZEZyYW1lUmVzaXplcihjb250ZW50SG9zdC5wYXJlbnRFbGVtZW50ISwgY29udGVudEhvc3QpO1xuXG4gICAgICAgIGJhY2tncm91bmRGcmFtZVJlc2l6ZXIuc3RhcnQoKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgcmVmcmVzaFRpdGxlKGV2ZW50TmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRIb3N0ID0gdGhpcy5nZXRDb250ZW50SG9zdCgpO1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IGNvbnRlbnRIb3N0LmdldFRpdGxlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDb250ZW50SG9zdCgpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKSEgYXMgRWxlY3Ryb24uV2Vidmlld1RhZztcbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBOYXZpZ2F0aW9uRXZlbnQge1xuXG4gICAgLyoqXG4gICAgICogVGhlIFVSTCBhdCB0aGUgdGltZSBvZiBuYXZpZ2F0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHVybDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHR5cGUgb2YgbmF2aWdhdGlvbiAoc3RhcnQgb3Igc3RvcCBsb2FkaW5nKS5cbiAgICAgKi9cbiAgICByZWFkb25seSB0eXBlOiBOYXZpZ2F0aW9uRXZlbnRUeXBlO1xuXG59XG5cbmV4cG9ydCB0eXBlIE5hdmlnYXRpb25FdmVudFR5cGUgPSAnZGlkLXN0YXJ0LWxvYWRpbmcnIHwgJ2RpZC1zdG9wLWxvYWRpbmcnO1xuXG5leHBvcnQgbmFtZXNwYWNlIFRyaWdnZXJCcm93c2VyTG9hZCB7XG5cbiAgICBleHBvcnQgY29uc3QgTUVTU0FHRV9UWVBFID0gJ3RyaWdnZXItYnJvd3Nlci1sb2FkLXVybCc7XG5cbiAgICBleHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2Uge1xuICAgICAgICB0eXBlOiBzdHJpbmc7XG4gICAgICAgIHVybDogc3RyaW5nO1xuICAgIH1cblxufVxuIl19