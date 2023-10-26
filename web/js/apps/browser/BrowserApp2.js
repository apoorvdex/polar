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
const Strings_1 = require("../../util/Strings");
const URLs_1 = require("../../util/URLs");
const log = Logger_1.Logger.create();
class BrowserApp2 {
    constructor() {
        this.loadedURL = false;
        this.webviewNavigated = false;
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            yield DocumentReadyStates_1.DocumentReadyStates.waitFor(document, 'complete');
            const navigationReactor = new SimpleReactor_1.SimpleReactor();
            ReactDOM.render(React.createElement(BrowserNavBar_1.BrowserNavBar, { onLoadURL: (url) => this.onLoadURL(url), onBrowserChanged: (browserName) => this.onBrowserChanged(browserName), onTriggerCapture: () => this.onTriggerCapture(), onReload: () => this.onReload(), navigationReactor: navigationReactor }), document.getElementById('browser-navbar-parent'));
            const content = this.getContentHost();
            content.addEventListener('dom-ready', () => __awaiter(this, void 0, void 0, function* () {
                content.insertCSS('html, body { overflow: hidden !important; }');
                ['did-start-loading', 'did-stop-loading', 'did-fail-load', 'dom-ready']
                    .map(eventListenerName => content.addEventListener(eventListenerName, () => this.refreshTitle(eventListenerName)));
                content.getWebContents().addListener('will-navigate', (event, url) => {
                    log.debug("WebContents event: will-navigate: " + url);
                    this.onWebviewNavigated(url, 'will-navigate');
                });
                const onDidStartNavigation = (eventName, url, isMainPage) => {
                    const context = { eventName, url, isMainPage };
                    log.debug(`${eventName}`, context);
                    if (this.webviewNavigated) {
                        log.debug(`${eventName}: already called for eventName `, context);
                        return;
                    }
                    const currentURL = content.getURL();
                    if (Strings_1.Strings.empty(currentURL)) {
                        log.debug(`${eventName}: empty URL: `, context);
                        return;
                    }
                    if (!URLs_1.URLs.isWebScheme(currentURL)) {
                        log.debug(`${eventName}: not a web URL: `, context);
                        return;
                    }
                    if (!isMainPage) {
                        log.debug(`${eventName}: not the main page: `, context);
                        return;
                    }
                    this.onWebviewNavigated(currentURL, eventName);
                    log.info("Dispatching navigation reactor event for did-start-loading: " + currentURL);
                    navigationReactor.dispatchEvent({ url: currentURL, type: 'did-start-loading' });
                    this.webviewNavigated = true;
                };
                content.getWebContents()
                    .addListener('did-frame-finish-load', (event, isMainFrame, frameProcessId, frameRoutingId) => {
                    const eventName = 'did-frame-finish-load';
                    log.debug(`${eventName}: isMainFrame: ${isMainFrame}: ` + content.getURL());
                    if (!isMainFrame) {
                        log.debug(`${eventName}: skipping (not main frame)`);
                        return;
                    }
                    if (!this.loadedURL) {
                        log.debug(`${eventName}: skipping (URL not loaded)`);
                        return;
                    }
                    if (!this.webviewNavigated) {
                        log.debug(`${eventName}: skipping (webview not navigated)`);
                        return;
                    }
                    if (this.progressBar) {
                        log.debug(`${eventName}: destroying progeress bar`);
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
        WebContentsNotifiers_1.WebContentsNotifiers.dispatchEvent(BrowserAppEvent_1.BrowserAppEvent.PROVIDE_URL, value);
    }
    onTriggerCapture() {
        this.createProgressBar();
        WebContentsNotifiers_1.WebContentsNotifiers.dispatchEvent(BrowserAppEvent_1.BrowserAppEvent.TRIGGER_CAPTURE, {});
    }
    onBrowserChanged(browserName) {
        const browser = BrowserRegistry_1.default[browserName];
        WebContentsNotifiers_1.WebContentsNotifiers.dispatchEvent(BrowserAppEvent_1.BrowserAppEvent.CONFIGURE_WINDOW, browser);
    }
    onReload() {
        const content = this.getContentHost();
        this.onLoadURL(content.getURL());
    }
    onWebviewNavigated(url, eventName) {
        log.debug("within onWebviewNavigated");
        if (!Preconditions_1.isPresent(url) || isSplashPage(url)) {
            log.debug(`SKIPPING onWebviewNavigated: (${eventName}: ${url}`);
            return;
        }
        log.debug(`HANDLING onWebviewNavigated: (${eventName}: ${url}`);
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
exports.BrowserApp2 = BrowserApp2;
function isSplashPage(url) {
    return url.endsWith('/apps/browser/splash.html');
}
var TriggerBrowserLoad;
(function (TriggerBrowserLoad) {
    TriggerBrowserLoad.MESSAGE_TYPE = 'trigger-browser-load-url';
})(TriggerBrowserLoad = exports.TriggerBrowserLoad || (exports.TriggerBrowserLoad = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJvd3NlckFwcDIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJCcm93c2VyQXBwMi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFDM0Msb0dBQStGO0FBQy9GLHVEQUFrRDtBQUNsRCxvREFBc0M7QUFDdEMsNkNBQStCO0FBQy9CLHlEQUFvRDtBQUNwRCw0RUFBdUU7QUFDdkUsdURBQThDO0FBQzlDLG9GQUE0RDtBQUM1RCwrREFBMEQ7QUFDMUQsbUVBQThEO0FBQzlELHFGQUFnRjtBQUNoRixnREFBMkM7QUFDM0MsMENBQXFDO0FBRXJDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLFdBQVc7SUFBeEI7UUFLWSxjQUFTLEdBQVksS0FBSyxDQUFDO1FBRTNCLHFCQUFnQixHQUFZLEtBQUssQ0FBQztJQWdROUMsQ0FBQztJQTVQZ0IsS0FBSzs7WUFFZCxNQUFNLHlDQUFtQixDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFFeEQsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLDZCQUFhLEVBQW1CLENBQUM7WUFFL0QsUUFBUSxDQUFDLE1BQU0sQ0FDWCxvQkFBQyw2QkFBYSxJQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFDdkMsZ0JBQWdCLEVBQUUsQ0FBQyxXQUFtQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLEVBQzdFLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUMvQyxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUMvQixpQkFBaUIsRUFBRSxpQkFBaUIsR0FBSSxFQUN2RCxRQUFRLENBQUMsY0FBYyxDQUFD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QUM7U0FDL0M7SUFFTCxDQUFDO0lBRU8sU0FBUyxDQUFDLEdBQVc7UUFDekIsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQXNCLENBQUM7UUFDeEUsT0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7SUFDeEIsQ0FBQztJQUVPLG9CQUFvQjtRQUV4QixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDMUMsTUFBTSxzQkFBc0IsR0FDdEIsSUFBSSwrQ0FBc0IsQ0FBQyxXQUFXLENBQUMsYUFBYyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRTFFLHNCQUFzQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBRW5DLENBQUM7SUFFTyxZQUFZLENBQUMsU0FBaUI7UUFDbEMsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFFTyxjQUFjO1FBQ2xCLE9BQU8sUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQXlCLENBQUM7SUFDdEUsQ0FBQztDQUVKO0FBdlFELGtDQXVRQztBQUVELFNBQVMsWUFBWSxDQUFDLEdBQVc7SUFDN0IsT0FBTyxHQUFHLENBQUMsUUFBUSxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFDckQsQ0FBQztBQWtCRCxJQUFpQixrQkFBa0IsQ0FTbEM7QUFURCxXQUFpQixrQkFBa0I7SUFFbEIsK0JBQVksR0FBRywwQkFBMEIsQ0FBQztBQU8zRCxDQUFDLEVBVGdCLGtCQUFrQixHQUFsQiwwQkFBa0IsS0FBbEIsMEJBQWtCLFFBU2xDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uLy4uL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtXZWJDb250ZW50c05vdGlmaWVyc30gZnJvbSAnLi4vLi4vZWxlY3Ryb24vd2ViX2NvbnRlbnRzX25vdGlmaWVyL1dlYkNvbnRlbnRzTm90aWZpZXJzJztcbmltcG9ydCB7QnJvd3NlckFwcEV2ZW50fSBmcm9tICcuL0Jyb3dzZXJBcHBFdmVudCc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtCcm93c2VyTmF2QmFyfSBmcm9tICcuL3JlYWN0L0Jyb3dzZXJOYXZCYXInO1xuaW1wb3J0IHtEb2N1bWVudFJlYWR5U3RhdGVzfSBmcm9tICcuLi8uLi91dGlsL2RvbS9Eb2N1bWVudFJlYWR5U3RhdGVzJztcbmltcG9ydCB7aXNQcmVzZW50fSBmcm9tICcuLi8uLi9QcmVjb25kaXRpb25zJztcbmltcG9ydCBCcm93c2VyUmVnaXN0cnkgZnJvbSAnLi4vLi4vY2FwdHVyZS9Ccm93c2VyUmVnaXN0cnknO1xuaW1wb3J0IHtTaW1wbGVSZWFjdG9yfSBmcm9tICcuLi8uLi9yZWFjdG9yL1NpbXBsZVJlYWN0b3InO1xuaW1wb3J0IHtQcm9ncmVzc0Jhcn0gZnJvbSAnLi4vLi4vdWkvcHJvZ3Jlc3NfYmFyL1Byb2dyZXNzQmFyJztcbmltcG9ydCB7QmFja2dyb3VuZEZyYW1lUmVzaXplcn0gZnJvbSAnLi4vLi4vdmlld2VyL2h0bWwvQmFja2dyb3VuZEZyYW1lUmVzaXplcic7XG5pbXBvcnQge1N0cmluZ3N9IGZyb20gJy4uLy4uL3V0aWwvU3RyaW5ncyc7XG5pbXBvcnQge1VSTHN9IGZyb20gJy4uLy4uL3V0aWwvVVJMcyc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIEJyb3dzZXJBcHAyIHtcblxuICAgIC8qKlxuICAgICAqIFRydWVuIHdoZW4gdGhlIHVzZXIgaGFzIGxvYWRlZCBhbiBleHRlcm5hbCBVUkwuXG4gICAgICovXG4gICAgcHJpdmF0ZSBsb2FkZWRVUkw6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgd2Vidmlld05hdmlnYXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSBwcm9ncmVzc0JhcjogUHJvZ3Jlc3NCYXIgfCB1bmRlZmluZWQ7XG5cbiAgICBwdWJsaWMgYXN5bmMgc3RhcnQoKSB7XG5cbiAgICAgICAgYXdhaXQgRG9jdW1lbnRSZWFkeVN0YXRlcy53YWl0Rm9yKGRvY3VtZW50LCAnY29tcGxldGUnKTtcblxuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uUmVhY3RvciA9IG5ldyBTaW1wbGVSZWFjdG9yPE5hdmlnYXRpb25FdmVudD4oKTtcblxuICAgICAgICBSZWFjdERPTS5yZW5kZXIoXG4gICAgICAgICAgICA8QnJvd3Nlck5hdkJhciBvbkxvYWRVUkw9eyh1cmwpID0+IHRoaXMub25Mb2FkVVJMKHVybCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJyb3dzZXJDaGFuZ2VkPXsoYnJvd3Nlck5hbWU6IHN0cmluZykgPT4gdGhpcy5vbkJyb3dzZXJDaGFuZ2VkKGJyb3dzZXJOYW1lKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVHJpZ2dlckNhcHR1cmU9eygpID0+IHRoaXMub25UcmlnZ2VyQ2FwdHVyZSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZWxvYWQ9eygpID0+IHRoaXMub25SZWxvYWQoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb25SZWFjdG9yPXtuYXZpZ2F0aW9uUmVhY3Rvcn0gLz4sXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnJvd3Nlci1uYXZiYXItcGFyZW50JykgYXMgSFRNTEVsZW1lbnRcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50SG9zdCgpO1xuXG4gICAgICAgIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignZG9tLXJlYWR5JywgYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICBjb250ZW50Lmluc2VydENTUygnaHRtbCwgYm9keSB7IG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDsgfScpO1xuXG5cbiAgICAgICAgICAgIFsnZGlkLXN0YXJ0LWxvYWRpbmcnLCAnZGlkLXN0b3AtbG9hZGluZycsICdkaWQtZmFpbC1sb2FkJywgJ2RvbS1yZWFkeScgXVxuICAgICAgICAgICAgICAgIC5tYXAoZXZlbnRMaXN0ZW5lck5hbWUgPT4gY29udGVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TGlzdGVuZXJOYW1lLCAoKSA9PiB0aGlzLnJlZnJlc2hUaXRsZShldmVudExpc3RlbmVyTmFtZSkpKTtcblxuICAgICAgICAgICAgY29udGVudC5nZXRXZWJDb250ZW50cygpLmFkZExpc3RlbmVyKCd3aWxsLW5hdmlnYXRlJywgKGV2ZW50LCB1cmwpID0+IHtcbiAgICAgICAgICAgICAgICBsb2cuZGVidWcoXCJXZWJDb250ZW50cyBldmVudDogd2lsbC1uYXZpZ2F0ZTogXCIgKyB1cmwpO1xuICAgICAgICAgICAgICAgIHRoaXMub25XZWJ2aWV3TmF2aWdhdGVkKHVybCwgJ3dpbGwtbmF2aWdhdGUnKTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IG9uRGlkU3RhcnROYXZpZ2F0aW9uID0gKGV2ZW50TmFtZTogc3RyaW5nLCB1cmw6IHN0cmluZywgaXNNYWluUGFnZTogYm9vbGVhbikgPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHtldmVudE5hbWUsIHVybCwgaXNNYWluUGFnZX07XG5cbiAgICAgICAgICAgICAgICBsb2cuZGVidWcoYCR7ZXZlbnROYW1lfWAsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMud2Vidmlld05hdmlnYXRlZCkge1xuICAgICAgICAgICAgICAgICAgICBsb2cuZGVidWcoYCR7ZXZlbnROYW1lfTogYWxyZWFkeSBjYWxsZWQgZm9yIGV2ZW50TmFtZSBgLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFRPRE86IHJlZmFjdG9yIHRoaXMgc28gaXQgb25seSB3b3JrcyBvbiB0aGUgdG9wIGxldmVsXG4gICAgICAgICAgICAgICAgLy8gbmF2aWdhdGlvbiBjaGFuZ2VzIGJ1dCB3ZSB3ZXJlbid0IGFibGUgdG8gZG8gdGhpcyBiZWNhdXNlXG4gICAgICAgICAgICAgICAgLy8gdGhlIGV2ZW50IHdlJ3JlIHJlY2VpdmluZyBpcyBnZW5lcmljLlxuXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFVSTCA9IGNvbnRlbnQuZ2V0VVJMKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoU3RyaW5ncy5lbXB0eShjdXJyZW50VVJMKSkge1xuICAgICAgICAgICAgICAgICAgICBsb2cuZGVidWcoYCR7ZXZlbnROYW1lfTogZW1wdHkgVVJMOiBgLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghIFVSTHMuaXNXZWJTY2hlbWUoY3VycmVudFVSTCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nLmRlYnVnKGAke2V2ZW50TmFtZX06IG5vdCBhIHdlYiBVUkw6IGAsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFpc01haW5QYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZy5kZWJ1ZyhgJHtldmVudE5hbWV9OiBub3QgdGhlIG1haW4gcGFnZTogYCwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLm9uV2Vidmlld05hdmlnYXRlZChjdXJyZW50VVJMLCBldmVudE5hbWUpO1xuXG4gICAgICAgICAgICAgICAgbG9nLmluZm8oXCJEaXNwYXRjaGluZyBuYXZpZ2F0aW9uIHJlYWN0b3IgZXZlbnQgZm9yIGRpZC1zdGFydC1sb2FkaW5nOiBcIiArIGN1cnJlbnRVUkwpO1xuICAgICAgICAgICAgICAgIG5hdmlnYXRpb25SZWFjdG9yLmRpc3BhdGNoRXZlbnQoe3VybDogY3VycmVudFVSTCwgdHlwZTogJ2RpZC1zdGFydC1sb2FkaW5nJ30pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy53ZWJ2aWV3TmF2aWdhdGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gY29udGVudC5nZXRXZWJDb250ZW50cygpLmFkZExpc3RlbmVyKCdkaWQtc3RhcnQtbmF2aWdhdGlvbicsIChldmVudCwgdXJsLCBpc0luUGxhY2UsIGlzTWFpbkZyYW1lKSA9PiB7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgIG9uRGlkU3RhcnROYXZpZ2F0aW9uKCdkaWQtc3RhcnQtbmF2aWdhdGlvbicsIHVybCwgaXNNYWluRnJhbWUpO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIH0pO1xuXG4gICAgICAgICAgICBjb250ZW50LmdldFdlYkNvbnRlbnRzKClcbiAgICAgICAgICAgICAgICAuYWRkTGlzdGVuZXIoJ2RpZC1mcmFtZS1maW5pc2gtbG9hZCcsIChldmVudDogRWxlY3Ryb24uRXZlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNNYWluRnJhbWU6IGJvb2xlYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVQcm9jZXNzSWQ6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZVJvdXRpbmdJZDogbnVtYmVyKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXZlbnROYW1lID0gJ2RpZC1mcmFtZS1maW5pc2gtbG9hZCc7XG5cbiAgICAgICAgICAgICAgICAgICAgbG9nLmRlYnVnKGAke2V2ZW50TmFtZX06IGlzTWFpbkZyYW1lOiAke2lzTWFpbkZyYW1lfTogYCArIGNvbnRlbnQuZ2V0VVJMKCkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNNYWluRnJhbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZy5kZWJ1ZyhgJHtldmVudE5hbWV9OiBza2lwcGluZyAobm90IG1haW4gZnJhbWUpYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoISB0aGlzLmxvYWRlZFVSTCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nLmRlYnVnKGAke2V2ZW50TmFtZX06IHNraXBwaW5nIChVUkwgbm90IGxvYWRlZClgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICghIHRoaXMud2Vidmlld05hdmlnYXRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nLmRlYnVnKGAke2V2ZW50TmFtZX06IHNraXBwaW5nICh3ZWJ2aWV3IG5vdCBuYXZpZ2F0ZWQpYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9ncmVzc0Jhcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nLmRlYnVnKGAke2V2ZW50TmFtZX06IGRlc3Ryb3lpbmcgcHJvZ2VyZXNzIGJhcmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VVJMID0gY29udGVudC5nZXRVUkwoKTtcblxuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uUmVhY3Rvci5kaXNwYXRjaEV2ZW50KHt1cmw6IGN1cnJlbnRVUkwsIHR5cGU6ICdkaWQtc3RvcC1sb2FkaW5nJ30pO1xuXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignZGlkLWZhaWwtbG9hZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBsb2cud2FybihcIkxvYWQgb2YgVVJMIGZhaWxlZC5cIik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5mb3J3YXJkQ29uc29sZU1lc3NhZ2VzKGNvbnRlbnQpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb3J3YXJkQ29uc29sZU1lc3NhZ2VzKGNvbnRlbnQ6IEVsZWN0cm9uLldlYnZpZXdUYWcpIHtcblxuICAgICAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnNvbGUtbWVzc2FnZScsIChjb25zb2xlTWVzc2FnZUV2ZW50OiBFbGVjdHJvbi5Db25zb2xlTWVzc2FnZUV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHByZWZpeCA9ICdXRUJWSUVXOiAnO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKGNvbnNvbGVNZXNzYWdlRXZlbnQubGV2ZWwpIHtcblxuICAgICAgICAgICAgICAgIGNhc2UgLTE6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcocHJlZml4ICsgY29uc29sZU1lc3NhZ2VFdmVudC5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhwcmVmaXggKyBjb25zb2xlTWVzc2FnZUV2ZW50Lm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKHByZWZpeCArIGNvbnNvbGVNZXNzYWdlRXZlbnQubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHByZWZpeCArIGNvbnNvbGVNZXNzYWdlRXZlbnQubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uTG9hZFVSTCh2YWx1ZTogc3RyaW5nKSB7XG5cbiAgICAgICAgaWYgKGlzUHJlc2VudCh2YWx1ZSkgJiYgISB2YWx1ZS5zdGFydHNXaXRoKFwiaHR0cDpcIikgJiYgISB2YWx1ZS5zdGFydHNXaXRoKFwiaHR0cHM6XCIpKSB7XG4gICAgICAgICAgICBsb2cuZGVidWcoXCJOb3QgYSBVUkw6IFwiICsgdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbG9nLmRlYnVnKFwiTG9hZGluZyBVUkw6IFwiICsgdmFsdWUpO1xuXG4gICAgICAgIHRoaXMubG9hZGVkVVJMID0gdHJ1ZTtcbiAgICAgICAgV2ViQ29udGVudHNOb3RpZmllcnMuZGlzcGF0Y2hFdmVudChCcm93c2VyQXBwRXZlbnQuUFJPVklERV9VUkwsIHZhbHVlKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25UcmlnZ2VyQ2FwdHVyZSgpIHtcblxuICAgICAgICB0aGlzLmNyZWF0ZVByb2dyZXNzQmFyKCk7XG4gICAgICAgIFdlYkNvbnRlbnRzTm90aWZpZXJzLmRpc3BhdGNoRXZlbnQoQnJvd3NlckFwcEV2ZW50LlRSSUdHRVJfQ0FQVFVSRSwge30pO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkJyb3dzZXJDaGFuZ2VkKGJyb3dzZXJOYW1lOiBzdHJpbmcpIHtcblxuICAgICAgICBjb25zdCBicm93c2VyID0gQnJvd3NlclJlZ2lzdHJ5W2Jyb3dzZXJOYW1lXTtcblxuICAgICAgICBXZWJDb250ZW50c05vdGlmaWVycy5kaXNwYXRjaEV2ZW50KEJyb3dzZXJBcHBFdmVudC5DT05GSUdVUkVfV0lORE9XLCBicm93c2VyKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25SZWxvYWQoKSB7XG5cbiAgICAgICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudEhvc3QoKTtcblxuICAgICAgICB0aGlzLm9uTG9hZFVSTChjb250ZW50LmdldFVSTCgpKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3VsZCBiZSBjYWxsZWQgZXZlcnkgdGltZSB3ZSBjaGFuZ2UgdGhlIGhpZ2ggbGV2ZWwgVVJMIGJlaW5nIHZpZXdlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB1cmxcbiAgICAgKi9cbiAgICBwcml2YXRlIG9uV2Vidmlld05hdmlnYXRlZCh1cmw6IHN0cmluZywgZXZlbnROYW1lOiBzdHJpbmcpIHtcblxuICAgICAgICBsb2cuZGVidWcoXCJ3aXRoaW4gb25XZWJ2aWV3TmF2aWdhdGVkXCIpO1xuXG4gICAgICAgIGlmICghIGlzUHJlc2VudCh1cmwpIHx8IGlzU3BsYXNoUGFnZSh1cmwpKSB7XG4gICAgICAgICAgICBsb2cuZGVidWcoYFNLSVBQSU5HIG9uV2Vidmlld05hdmlnYXRlZDogKCR7ZXZlbnROYW1lfTogJHt1cmx9YCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsb2cuZGVidWcoYEhBTkRMSU5HIG9uV2Vidmlld05hdmlnYXRlZDogKCR7ZXZlbnROYW1lfTogJHt1cmx9YCk7XG5cbiAgICAgICAgdGhpcy5jaGFuZ2VVUkwodXJsKTtcbiAgICAgICAgdGhpcy5jcmVhdGVQcm9ncmVzc0JhcigpO1xuICAgICAgICB0aGlzLnNjcm9sbFBhZ2VUb1RvcCgpO1xuICAgICAgICB0aGlzLnN0YXJ0UmVzaXppbmdXZWJ2aWV3KCk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHNjcm9sbFBhZ2VUb1RvcCgpIHtcbiAgICAgICAgLy8gc2Nyb2xsIHRvIHRoZSB0b3Agb2YgdGhlIHBhZ2UuLi5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUbygwLCAwKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVByb2dyZXNzQmFyKCkge1xuICAgICAgICAvLyBjcmVhdGUgYSBwcm9ncmVzcyBiYXIgc28gd2Uga25vdyB0aGF0IHRoZSBwYWdlIGlzIGxvYWRpbmdcblxuICAgICAgICBpZiAoISB0aGlzLnByb2dyZXNzQmFyKSB7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyID0gUHJvZ3Jlc3NCYXIuY3JlYXRlKHRydWUpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGNoYW5nZVVSTCh1cmw6IHN0cmluZykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1cmwtYmFyXCIpISBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBlbGVtZW50LnZhbHVlID0gdXJsO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhcnRSZXNpemluZ1dlYnZpZXcoKSB7XG5cbiAgICAgICAgY29uc3QgY29udGVudEhvc3QgPSB0aGlzLmdldENvbnRlbnRIb3N0KCk7XG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRGcmFtZVJlc2l6ZXJcbiAgICAgICAgICAgID0gbmV3IEJhY2tncm91bmRGcmFtZVJlc2l6ZXIoY29udGVudEhvc3QucGFyZW50RWxlbWVudCEsIGNvbnRlbnRIb3N0KTtcblxuICAgICAgICBiYWNrZ3JvdW5kRnJhbWVSZXNpemVyLnN0YXJ0KCk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlZnJlc2hUaXRsZShldmVudE5hbWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBjb250ZW50SG9zdCA9IHRoaXMuZ2V0Q29udGVudEhvc3QoKTtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBjb250ZW50SG9zdC5nZXRUaXRsZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Q29udGVudEhvc3QoKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikhIGFzIEVsZWN0cm9uLldlYnZpZXdUYWc7XG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIGlzU3BsYXNoUGFnZSh1cmw6IHN0cmluZykge1xuICAgIHJldHVybiB1cmwuZW5kc1dpdGgoJy9hcHBzL2Jyb3dzZXIvc3BsYXNoLmh0bWwnKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOYXZpZ2F0aW9uRXZlbnQge1xuXG4gICAgLyoqXG4gICAgICogVGhlIFVSTCBhdCB0aGUgdGltZSBvZiBuYXZpZ2F0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHVybDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHR5cGUgb2YgbmF2aWdhdGlvbiAoc3RhcnQgb3Igc3RvcCBsb2FkaW5nKS5cbiAgICAgKi9cbiAgICByZWFkb25seSB0eXBlOiBOYXZpZ2F0aW9uRXZlbnRUeXBlO1xuXG59XG5cbmV4cG9ydCB0eXBlIE5hdmlnYXRpb25FdmVudFR5cGUgPSAnZGlkLXN0YXJ0LWxvYWRpbmcnIHwgJ2RpZC1zdG9wLWxvYWRpbmcnO1xuXG5leHBvcnQgbmFtZXNwYWNlIFRyaWdnZXJCcm93c2VyTG9hZCB7XG5cbiAgICBleHBvcnQgY29uc3QgTUVTU0FHRV9UWVBFID0gJ3RyaWdnZXItYnJvd3Nlci1sb2FkLXVybCc7XG5cbiAgICBleHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2Uge1xuICAgICAgICB0eXBlOiBzdHJpbmc7XG4gICAgICAgIHVybDogc3RyaW5nO1xuICAgIH1cblxufVxuIl19