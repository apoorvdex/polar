"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = require("../../logger/Logger");
const FrameEvents_1 = require("./FrameEvents");
const Events_1 = require("../../util/dom/Events");
const IFrames_1 = require("../../util/dom/IFrames");
const DocumentReadyStates_1 = require("../../util/dom/DocumentReadyStates");
const log = Logger_1.Logger.create();
class EventBridge {
    constructor(targetElement, iframe) {
        this.targetElement = targetElement;
        this.iframe = iframe;
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.iframe.parentElement) {
                throw new Error("No parent for iframe");
            }
            if (!this.iframe.contentDocument) {
                throw new Error("No contentDocument for iframe");
            }
            yield IFrames_1.IFrames.waitForContentDocument(this.iframe);
            yield DocumentReadyStates_1.DocumentReadyStates.waitFor(this.iframe.contentDocument, 'interactive');
            this.addListeners(this.iframe);
            log.info("Event bridge started on: ", this.iframe.contentDocument.location.href);
        });
    }
    addListeners(iframe) {
        if (!iframe.contentDocument) {
            return;
        }
        iframe.contentDocument.body.addEventListener("keyup", this.keyListener.bind(this));
        iframe.contentDocument.body.addEventListener("keydown", this.keyListener.bind(this));
        iframe.contentDocument.body.addEventListener("mouseup", this.mouseListener.bind(this));
        iframe.contentDocument.body.addEventListener("mousedown", this.mouseListener.bind(this));
        iframe.contentDocument.body.addEventListener("contextmenu", this.mouseListener.bind(this));
        iframe.contentDocument.body.addEventListener("click", event => {
            const anchor = Events_1.Events.getAnchor(event.target);
            if (anchor) {
                log.info("Link click prevented.");
                event.preventDefault();
                const href = anchor.href;
                if (href && (href.startsWith("http:") || href.startsWith("https:"))) {
                    document.location.href = href;
                }
            }
            else {
                this.mouseListener(event);
            }
        });
    }
    mouseListener(event) {
        let eventPoints = FrameEvents_1.FrameEvents.calculatePoints(this.iframe, event);
        let newEvent = new event.constructor(event.type, event);
        Object.defineProperty(newEvent, "pageX", { value: eventPoints.page.x });
        Object.defineProperty(newEvent, "pageY", { value: eventPoints.page.y });
        Object.defineProperty(newEvent, "clientX", { value: eventPoints.client.x });
        Object.defineProperty(newEvent, "clientY", { value: eventPoints.client.y });
        Object.defineProperty(newEvent, "offsetX", { value: eventPoints.offset.x });
        Object.defineProperty(newEvent, "offsetY", { value: eventPoints.offset.y });
        if (newEvent.pageX !== eventPoints.page.x) {
            throw new Error("Define of properties failed");
        }
        this.targetElement.dispatchEvent(newEvent);
    }
    keyListener(event) {
        const newEvent = new event.constructor(event.type, event);
        this.targetElement.dispatchEvent(newEvent);
    }
}
exports.EventBridge = EventBridge;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRCcmlkZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJFdmVudEJyaWRnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsZ0RBQTJDO0FBQzNDLCtDQUEwQztBQUMxQyxrREFBNkM7QUFDN0Msb0RBQStDO0FBQy9DLDRFQUF1RTtBQUV2RSxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFPNUIsTUFBYSxXQUFXO0lBTXBCLFlBQVksYUFBMEIsRUFBRSxNQUF5QjtRQUM3RCxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBRVksS0FBSzs7WUFFZCxJQUFJLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUU7Z0JBQzdCLE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQzthQUMzQztZQUVELElBQUksQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRTtnQkFDL0IsTUFBTSxJQUFJLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO2FBQ3BEO1lBRUQsTUFBTSxpQkFBTyxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsRCxNQUFNLHlDQUFtQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWdCLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFFL0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFL0IsR0FBRyxDQUFDLElBQUksQ0FBQywyQkFBMkIsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWdCLENBQUMsUUFBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXZGLENBQUM7S0FBQTtJQUVPLFlBQVksQ0FBQyxNQUF5QjtRQUUxQyxJQUFJLENBQUUsTUFBTSxDQUFDLGVB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QUUsU0FBUyxFQUFFLEVBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUUxRSxJQUFHLFFBQVEsQ0FBQyxLQUFLLEtBQUssV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDdEMsTUFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1NBQ2xEO1FBRUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFL0MsQ0FBQztJQUVPLFdBQVcsQ0FBQyxLQUFVO1FBRTFCLE1BQU0sUUFBUSxHQUFHLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRTFELElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRS9DLENBQUM7Q0FFSjtBQTdHRCxrQ0E2R0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vLi4vbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0ZyYW1lRXZlbnRzfSBmcm9tICcuL0ZyYW1lRXZlbnRzJztcbmltcG9ydCB7RXZlbnRzfSBmcm9tICcuLi8uLi91dGlsL2RvbS9FdmVudHMnO1xuaW1wb3J0IHtJRnJhbWVzfSBmcm9tICcuLi8uLi91dGlsL2RvbS9JRnJhbWVzJztcbmltcG9ydCB7RG9jdW1lbnRSZWFkeVN0YXRlc30gZnJvbSAnLi4vLi4vdXRpbC9kb20vRG9jdW1lbnRSZWFkeVN0YXRlcyc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuLyoqXG4gKiBNb3ZlcyBldmVudHMgZnJvbSB0aGUgaWZyYW1lLCBpbnRvIHRoZSB0YXJnZXQgZWxlbWVudC4gVGhpcyBhbGxvd3MgdGhlIGV2ZW50XG4gKiBsaXN0ZW5lcnMgdG8gc2VlIHRoZSBldmVudCBhcyBpZiBpdCB3YXMgY2FsbGVkIGluc2lkZSB0aGUgcGFyZW50IC5wYWdlIGluIHRoZVxuICogcGFyZW50IERPTSB3aW5kb3cuXG4gKi9cbmV4cG9ydCBjbGFzcyBFdmVudEJyaWRnZSB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBpZnJhbWU6IEhUTUxJRnJhbWVFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IodGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsIGlmcmFtZTogSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy50YXJnZXRFbGVtZW50ID0gdGFyZ2V0RWxlbWVudDtcbiAgICAgICAgdGhpcy5pZnJhbWUgPSBpZnJhbWU7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHN0YXJ0KCkge1xuXG4gICAgICAgIGlmICghIHRoaXMuaWZyYW1lLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHBhcmVudCBmb3IgaWZyYW1lXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCEgdGhpcy5pZnJhbWUuY29udGVudERvY3VtZW50KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBjb250ZW50RG9jdW1lbnQgZm9yIGlmcmFtZVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IElGcmFtZXMud2FpdEZvckNvbnRlbnREb2N1bWVudCh0aGlzLmlmcmFtZSk7XG4gICAgICAgIGF3YWl0IERvY3VtZW50UmVhZHlTdGF0ZXMud2FpdEZvcih0aGlzLmlmcmFtZS5jb250ZW50RG9jdW1lbnQhLCAnaW50ZXJhY3RpdmUnKTtcblxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycyh0aGlzLmlmcmFtZSk7XG5cbiAgICAgICAgbG9nLmluZm8oXCJFdmVudCBicmlkZ2Ugc3RhcnRlZCBvbjogXCIsIHRoaXMuaWZyYW1lLmNvbnRlbnREb2N1bWVudCEubG9jYXRpb24hLmhyZWYpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRMaXN0ZW5lcnMoaWZyYW1lOiBIVE1MSUZyYW1lRWxlbWVudCkge1xuXG4gICAgICAgIGlmICghIGlmcmFtZS5jb250ZW50RG9jdW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmcmFtZS5jb250ZW50RG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5rZXlMaXN0ZW5lci5iaW5kKHRoaXMpKTtcbiAgICAgICAgaWZyYW1lLmNvbnRlbnREb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMua2V5TGlzdGVuZXIuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgaWZyYW1lLmNvbnRlbnREb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMubW91c2VMaXN0ZW5lci5iaW5kKHRoaXMpKTtcbiAgICAgICAgaWZyYW1lLmNvbnRlbnREb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5tb3VzZUxpc3RlbmVyLmJpbmQodGhpcykpO1xuICAgICAgICBpZnJhbWUuY29udGVudERvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIHRoaXMubW91c2VMaXN0ZW5lci5iaW5kKHRoaXMpKTtcblxuICAgICAgICBpZnJhbWUuY29udGVudERvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcblxuICAgICAgICAgICAgY29uc3QgYW5jaG9yID0gRXZlbnRzLmdldEFuY2hvcihldmVudC50YXJnZXQpO1xuXG4gICAgICAgICAgICAvLyBUT0RPOiB0aGlzIG5lZWRzIHRvIGJlIHJld29ya2VkLiBUaGlzIGlzbid0IHRoZSBhcHByb3ByaWF0ZSB3YXlcbiAgICAgICAgICAgIC8vIHRvIGhhbmRsZSB0aGlzLiAgSSdtIGdvaW5nIHRvIGhhdmUgdG8gdGhpbmsgYWJvdXQgd2hpY2ggXCJhY3Rpb25zXCJcbiAgICAgICAgICAgIC8vIG11c3QgYmUgaGFuZGxlZCBieSBQb2xhciBhbmQgd2hpY2ggb25lcyB3ZSBhbGxvdyB0byBiZSBoYW5kbGVkXG4gICAgICAgICAgICAvLyBieSB0aGUgUEhaLiAgQWxsIFBvbGFyIGFjdGlvbnMgc2hvdWxkIGNhbGwgcHJldmVudERlZmF1bHQgYW5kXG4gICAgICAgICAgICAvLyBzaG91bGQgcHJldmVudERlZmF1bHQgYW5kIG5vdCBzZW50IHRvIHRoZSBQSFouXG5cbiAgICAgICAgICAgIGlmIChhbmNob3IpIHtcbiAgICAgICAgICAgICAgICBsb2cuaW5mbyhcIkxpbmsgY2xpY2sgcHJldmVudGVkLlwiKTtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgaHJlZiA9IGFuY2hvci5ocmVmO1xuXG4gICAgICAgICAgICAgICAgaWYgKGhyZWYgJiYgKGhyZWYuc3RhcnRzV2l0aChcImh0dHA6XCIpIHx8IGhyZWYuc3RhcnRzV2l0aChcImh0dHBzOlwiKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBhIGJpdCBvZiBhIGhhY2sgYnV0IGJhc2ljYWxseSB3ZSBsaXN0ZW4gZm9yIFVSTHNcbiAgICAgICAgICAgICAgICAgICAgLy8gaW4gdGhlIGlmcmFtZSBhbmQgY2hhbmdlIHRoZSBtYWluIHBhZ2UuIFRoaXMgdHJpZ2dlcnMgb3VyXG4gICAgICAgICAgICAgICAgICAgIC8vIGVsZWN0cm9uICd3aWxsLW5hdmlnYXRlJyB3aGljaCB3aGljaCBwcmV2ZW50cyBpdCBhbmQgdGhlblxuICAgICAgICAgICAgICAgICAgICAvLyBvcGVucyB0aGUgVVJMIGluIHRoZSBuYXRpdmUgYnJvd3Nlci5cbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24hLmhyZWYgPSBocmVmO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdXNlTGlzdGVuZXIoZXZlbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBtb3VzZUxpc3RlbmVyKGV2ZW50OiBhbnkpIHtcblxuICAgICAgICBsZXQgZXZlbnRQb2ludHMgPSBGcmFtZUV2ZW50cy5jYWxjdWxhdGVQb2ludHModGhpcy5pZnJhbWUsIGV2ZW50KTtcblxuICAgICAgICBsZXQgbmV3RXZlbnQgPSBuZXcgZXZlbnQuY29uc3RydWN0b3IoZXZlbnQudHlwZSwgZXZlbnQpO1xuXG4gICAgICAgIC8vIFRPRE86IHRoZSBpc3N1ZSBub3cgLCBJIHRoaW5rLCBpcyB0aGF0IHRoZXNlIHZhbHVlcyBuZWVkIHRvIGJlIHVwZGF0ZWRcbiAgICAgICAgLy8gdnMgdGhlIGN1cnJlbnQgc2Nyb2xsLnggYW5kIHNjcm9sbC55XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld0V2ZW50LCBcInBhZ2VYXCIsIHt2YWx1ZTogZXZlbnRQb2ludHMucGFnZS54fSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdFdmVudCwgXCJwYWdlWVwiLCB7dmFsdWU6IGV2ZW50UG9pbnRzLnBhZ2UueX0pO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdFdmVudCwgXCJjbGllbnRYXCIsIHt2YWx1ZTogZXZlbnRQb2ludHMuY2xpZW50Lnh9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld0V2ZW50LCBcImNsaWVudFlcIiwge3ZhbHVlOiBldmVudFBvaW50cy5jbGllbnQueX0pO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdFdmVudCwgXCJvZmZzZXRYXCIsIHt2YWx1ZTogZXZlbnRQb2ludHMub2Zmc2V0Lnh9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld0V2ZW50LCBcIm9mZnNldFlcIiwge3ZhbHVlOiBldmVudFBvaW50cy5vZmZzZXQueX0pO1xuXG4gICAgICAgIGlmKG5ld0V2ZW50LnBhZ2VYICE9PSBldmVudFBvaW50cy5wYWdlLngpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRlZmluZSBvZiBwcm9wZXJ0aWVzIGZhaWxlZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGFyZ2V0RWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ld0V2ZW50KTtcblxuICAgIH1cblxuICAgIHByaXZhdGUga2V5TGlzdGVuZXIoZXZlbnQ6IGFueSkge1xuXG4gICAgICAgIGNvbnN0IG5ld0V2ZW50ID0gbmV3IGV2ZW50LmNvbnN0cnVjdG9yKGV2ZW50LnR5cGUsIGV2ZW50KTtcblxuICAgICAgICB0aGlzLnRhcmdldEVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXdFdmVudCk7XG5cbiAgICB9XG5cbn1cbiJdfQ==