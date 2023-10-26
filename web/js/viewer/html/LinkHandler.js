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
const electron_1 = require("electron");
const IFrames_1 = require("../../util/dom/IFrames");
const DocumentReadyStates_1 = require("../../util/dom/DocumentReadyStates");
const Logger_1 = require("../../logger/Logger");
const Events_1 = require("../../util/dom/Events");
const log = Logger_1.Logger.create();
class LinkHandler {
    constructor(iframe) {
        this.iframe = iframe;
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            const doc = yield IFrames_1.IFrames.waitForContentDocument(this.iframe);
            yield DocumentReadyStates_1.DocumentReadyStates.waitFor(doc, 'interactive');
            Array.from(doc.querySelectorAll('iframe'))
                .map(current => new LinkHandler(current))
                .forEach(linkHandler => linkHandler.start());
            this.setupEventHandlers(doc);
        });
    }
    setupEventHandlers(doc) {
        this.setupClickHandlers(doc);
        this.setupKeyDownHandlers(doc);
        this.setupBeforeUnload(doc);
        log.info("Added event handlers to prevent link navigation");
    }
    setupClickHandlers(doc) {
        doc.querySelectorAll('a')
            .forEach(anchor => anchor.addEventListener('click', event => {
            event.preventDefault();
            event.stopPropagation();
            this.handleLinkEvent(event);
        }));
    }
    setupKeyDownHandlers(doc) {
        doc.querySelectorAll('a')
            .forEach(anchor => anchor.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === 'Return') {
                event.preventDefault();
                event.stopPropagation();
                this.handleLinkEvent(event);
            }
        }));
    }
    handleLinkEvent(event) {
        const anchor = Events_1.Events.getAnchor(event.target);
        if (anchor) {
            const href = anchor.href;
            log.info("Opening URL: " + href);
            electron_1.shell.openExternal(href);
        }
    }
    setupBeforeUnload(doc) {
        doc.addEventListener('beforeunload', (event) => {
            event.preventDefault();
            event.stopPropagation();
        });
    }
}
exports.LinkHandler = LinkHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlua0hhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJMaW5rSGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUNBQStCO0FBQy9CLG9EQUErQztBQUMvQyw0RUFBdUU7QUFDdkUsZ0RBQTJDO0FBQzNDLGtEQUE2QztBQUU3QyxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFPNUIsTUFBYSxXQUFXO0lBSXBCLFlBQVksTUFBeUI7UUFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUVZLEtBQUs7O1lBRWQsTUFBTSxHQUFHLEdBQUcsTUFBTSxpQkFBTyxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUU5RCxNQUFNLHlDQUFtQixDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFHdEQsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3JDLEdBQUcsQ0FBRSxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUN6QyxPQUFPLENBQUUsV0FBVyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUUsQ0FBQztZQUVuRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFHakMsQ0FBQztLQUFBO0lBRU8sa0JBQWtCLENBQUMsR0FBaUI7UUFDeEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFNUIsR0FBRyxDQUFDLElBQUksQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO0lBRWhFLENBQUM7SUFFTyxrQkFBa0IsQ0FBQyxHQUFpQjtRQUd4QyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO2FBQ3BCLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUU7WUFDeEQsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFWixDQUFDO0lBRU8sb0JBQW9CLENBQUMsR0FBaUI7UUFFMUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQzthQUNwQixPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBRTFELElBQUcsS0FBSyxDQUFDLEdBQUcsS0FBSyxPQUFPLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxRQUFRLEVBQUU7Z0JBQ2hELEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQy9CO1FBRUwsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVaLENBQUM7SUFFTyxlQUFlLENBQUMsS0FBWTtRQUVoQyxNQUFNLE1BQU0sR0FBRyxlQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU5QyxJQUFJLE1BQU0sRUFBRTtZQUNSLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDekIsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDakMsZ0JBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUI7SUFFTCxDQUFDO0lBRU8saUJBQWlCLENBQUMsR0FBaUI7UUFHdkMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQzNDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0NBRUo7QUFsRkQsa0NBa0ZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzaGVsbH0gZnJvbSAnZWxlY3Ryb24nO1xuaW1wb3J0IHtJRnJhbWVzfSBmcm9tICcuLi8uLi91dGlsL2RvbS9JRnJhbWVzJztcbmltcG9ydCB7RG9jdW1lbnRSZWFkeVN0YXRlc30gZnJvbSAnLi4vLi4vdXRpbC9kb20vRG9jdW1lbnRSZWFkeVN0YXRlcyc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vLi4vbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0V2ZW50c30gZnJvbSAnLi4vLi4vdXRpbC9kb20vRXZlbnRzJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG4vKipcbiAqIFRoZSBsaW5rIGhhbmRsZXIgd29ya3Mgd2l0aCB0aGUgdGhlIGlmcmFtZSwgYW5kIGFsbCBjaGlsZCBpZnJhbWVzLCBhbmRcbiAqIGludGVyY2VwdHMgYWxsIGxpbmsgY2xpY2tzLCBhbmQgYWJvcnRzIHRoZW0sIGZvcndhcmRpbmcgdGhlbSB0byB0aGUgc2hlbGxcbiAqIGlmIHdlJ3JlIHJ1bm5pbmcgd2l0aGluIEVsZWN0cm9uLlxuICovXG5leHBvcnQgY2xhc3MgTGlua0hhbmRsZXIge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBpZnJhbWU6IEhUTUxJRnJhbWVFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoaWZyYW1lOiBIVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0aGlzLmlmcmFtZSA9IGlmcmFtZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc3RhcnQoKSB7XG5cbiAgICAgICAgY29uc3QgZG9jID0gYXdhaXQgSUZyYW1lcy53YWl0Rm9yQ29udGVudERvY3VtZW50KHRoaXMuaWZyYW1lKTtcblxuICAgICAgICBhd2FpdCBEb2N1bWVudFJlYWR5U3RhdGVzLndhaXRGb3IoZG9jLCAnaW50ZXJhY3RpdmUnKTtcblxuICAgICAgICAvLyBub3cgc2V0dXAgY2hpbGQgaWZyYW1lIGhhbmRsZXJzXG4gICAgICAgIEFycmF5LmZyb20oZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lmcmFtZScpKVxuICAgICAgICAgICAgLm1hcCggY3VycmVudCA9PiBuZXcgTGlua0hhbmRsZXIoY3VycmVudCkpXG4gICAgICAgICAgICAuZm9yRWFjaCggbGlua0hhbmRsZXIgPT4gbGlua0hhbmRsZXIuc3RhcnQoKSApO1xuXG4gICAgICAgIHRoaXMuc2V0dXBFdmVudEhhbmRsZXJzKGRvYyk7XG5cblxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0dXBFdmVudEhhbmRsZXJzKGRvYzogSFRNTERvY3VtZW50KSB7XG4gICAgICAgIHRoaXMuc2V0dXBDbGlja0hhbmRsZXJzKGRvYyk7XG4gICAgICAgIHRoaXMuc2V0dXBLZXlEb3duSGFuZGxlcnMoZG9jKTtcbiAgICAgICAgdGhpcy5zZXR1cEJlZm9yZVVubG9hZChkb2MpO1xuXG4gICAgICAgIGxvZy5pbmZvKFwiQWRkZWQgZXZlbnQgaGFuZGxlcnMgdG8gcHJldmVudCBsaW5rIG5hdmlnYXRpb25cIik7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHNldHVwQ2xpY2tIYW5kbGVycyhkb2M6IEhUTUxEb2N1bWVudCkge1xuXG4gICAgICAgIC8vIGNsaWNrIGFuZCBlbnRlciBuZWVkIHRvIGJlIGFib3J0ZWQgaGVyZS4uXG4gICAgICAgIGRvYy5xdWVyeVNlbGVjdG9yQWxsKCdhJylcbiAgICAgICAgICAgIC5mb3JFYWNoKGFuY2hvciA9PiBhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUxpbmtFdmVudChldmVudCk7XG4gICAgICAgICAgICB9KSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHNldHVwS2V5RG93bkhhbmRsZXJzKGRvYzogSFRNTERvY3VtZW50KSB7XG5cbiAgICAgICAgZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKVxuICAgICAgICAgICAgLmZvckVhY2goYW5jaG9yID0+IGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXZlbnQgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYoZXZlbnQua2V5ID09PSAnRW50ZXInIHx8IGV2ZW50LmtleSA9PT0gJ1JldHVybicpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlTGlua0V2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlTGlua0V2ZW50KGV2ZW50OiBFdmVudCkge1xuXG4gICAgICAgIGNvbnN0IGFuY2hvciA9IEV2ZW50cy5nZXRBbmNob3IoZXZlbnQudGFyZ2V0KTtcblxuICAgICAgICBpZiAoYW5jaG9yKSB7XG4gICAgICAgICAgICBjb25zdCBocmVmID0gYW5jaG9yLmhyZWY7XG4gICAgICAgICAgICBsb2cuaW5mbyhcIk9wZW5pbmcgVVJMOiBcIiArIGhyZWYpO1xuICAgICAgICAgICAgc2hlbGwub3BlbkV4dGVybmFsKGhyZWYpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHNldHVwQmVmb3JlVW5sb2FkKGRvYzogSFRNTERvY3VtZW50KSB7XG5cbiAgICAgICAgLy8gcHJldmVudCB0aGUgZG9jdW1lbnQgZnJvbSBiZWluZyB1bmxvYWRlZC5cbiAgICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxufVxuIl19