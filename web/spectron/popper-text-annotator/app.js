"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SpectronRenderer_1 = require("../../js/test/SpectronRenderer");
const popper_js_1 = __importDefault(require("popper.js"));
const JQuery_1 = __importDefault(require("../../js/ui/JQuery"));
const MouseEventReferenceObject_1 = require("../../js/ui/popup/MouseEventReferenceObject");
SpectronRenderer_1.SpectronRenderer.run(() => __awaiter(this, void 0, void 0, function* () {
    console.log("Running within SpectronRenderer now.");
    const ref = JQuery_1.default('#button-a');
    const target = document.querySelector("#para").firstChild;
    const popup = JQuery_1.default('#popup');
    popup.hide();
    ref.click(function () {
        popup.show();
    });
    let originPoint;
    document.addEventListener('mousedown', (event) => {
        originPoint = {
            x: event.x,
            y: event.y
        };
    });
    document.addEventListener('mouseup', (event) => {
        if (!window.getSelection().isCollapsed) {
            const mouseDirection = event.y - originPoint.y < 0 ? 'up' : 'down';
            const placement = mouseDirection === 'down' ? 'bottom' : 'top';
            const range = window.getSelection().getRangeAt(0);
            const referenceObject = new MouseEventReferenceObject_1.MouseEventReferenceObject(event, range, mouseDirection);
            const popper = new popper_js_1.default(referenceObject, popup, {
                placement,
                onCreate: (data) => {
                    popup.show();
                },
                modifiers: {}
            });
        }
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBZ0U7QUFDaEUsMERBQStCO0FBQy9CLGdFQUFtQztBQUduQywyRkFBc0Y7QUFFdEYsbUNBQWdCLENBQUMsR0FBRyxDQUFDLEdBQVMsRUFBRTtJQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7SUFFcEQsTUFBTSxHQUFHLEdBQUcsZ0JBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQVMzQixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBRSxDQUFDLFVBQVcsQ0FBQztJQUU1RCxNQUFNLEtBQUssR0FBRyxnQkFBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFCLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUViLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDTixLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakIsQ0FBQyxDQUFDLENBQUM7SUFNSCxJQUFJLFdBQThCLENBQUM7SUFFbkMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQWlCLEVBQUUsRUFBRTtRQUV6RCxXQUFXLEdBQUc7WUFDVixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDVixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDYixDQUFDO0lBRU4sQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBaUIsRUFBRSxFQUFFO1FBSXZELElBQUksQ0FBRSxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUMsV0FBVyxFQUFFO1lBSXJDLE1BQU0sY0FBYyxHQUFtQixLQUFLLENBQUMsQ0FBQyxHQUFHLFdBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUVwRixNQUFNLFNBQVMsR0FBRyxjQUFjLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQVMvRCxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xELE1BQU0sZUFBZSxHQUFHLElBQUkscURBQXlCLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxjQUFjLENBQUMsQ0FBQztZQUNwRixNQUFNLE1BQU0sR0FBRyxJQUFJLG1CQUFNLENBQUMsZUFBZSxFQUFFLEtBQUssRUFBRztnQkFFL0MsU0FBUztnQkFDVCxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtvQkFDZixLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBRWpCLENBQUM7Z0JBQ0QsU0FBUyxFQUFFLEVBV1Y7YUFFSixDQUFDLENBQUM7U0FHTjtJQUVMLENBQUMsQ0FBQyxDQUFDO0FBR1AsQ0FBQyxDQUFBLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3BlY3Ryb25SZW5kZXJlcn0gZnJvbSAnLi4vLi4vanMvdGVzdC9TcGVjdHJvblJlbmRlcmVyJztcbmltcG9ydCBQb3BwZXIgZnJvbSAncG9wcGVyLmpzJztcbmltcG9ydCAkIGZyb20gJy4uLy4uL2pzL3VpL0pRdWVyeSc7XG5pbXBvcnQge1BvaW50fSBmcm9tICcuLi8uLi9qcy9Qb2ludCc7XG5pbXBvcnQge01vdXNlRGlyZWN0aW9ufSBmcm9tICcuLi8uLi9qcy91aS9wb3B1cC9Qb3B1cCc7XG5pbXBvcnQge01vdXNlRXZlbnRSZWZlcmVuY2VPYmplY3R9IGZyb20gJy4uLy4uL2pzL3VpL3BvcHVwL01vdXNlRXZlbnRSZWZlcmVuY2VPYmplY3QnO1xuXG5TcGVjdHJvblJlbmRlcmVyLnJ1bihhc3luYyAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJSdW5uaW5nIHdpdGhpbiBTcGVjdHJvblJlbmRlcmVyIG5vdy5cIik7XG5cbiAgICBjb25zdCByZWYgPSAkKCcjYnV0dG9uLWEnKTtcblxuICAgIC8vIEZJWE1FOiBuZWVkc1xuICAgIC8vXG4gICAgLy8gICAgIGNsaWVudEhlaWdodDogbnVtYmVyO1xuICAgIC8vICAgICBjbGllbnRXaWR0aDogbnVtYmVyO1xuICAgIC8vXG4gICAgLy8gICAgIGdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOiBDbGllbnRSZWN0O1xuXG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYXJhXCIpIS5maXJzdENoaWxkITtcblxuICAgIGNvbnN0IHBvcHVwID0gJCgnI3BvcHVwJyk7XG4gICAgcG9wdXAuaGlkZSgpO1xuXG4gICAgcmVmLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICBwb3B1cC5zaG93KCk7XG4gICAgfSk7XG5cbiAgICAvLyBUT0RPOiBhZGQgVFdPIGV2ZW50cy4uIG9uZSBtb3VzZSBkb3duLCBhbmQgb25lIG1vdXNlIHVwLi4gdGhlbiBrZWVwIHRyYWNrXG4gICAgLy8gb2YgdGhlIGRlbHRhIGJldHdlZW4gbW91c2UgdXAgYW5kIG1vdXNlIGRvd24gdG8gc2VlIHdoZXJlIHdlIHNob3VsZCBwbGFjZVxuICAgIC8vIHRoZSBwb3BwZXIuXG5cbiAgICBsZXQgb3JpZ2luUG9pbnQ6IFBvaW50IHwgdW5kZWZpbmVkO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG5cbiAgICAgICAgb3JpZ2luUG9pbnQgPSB7XG4gICAgICAgICAgICB4OiBldmVudC54LFxuICAgICAgICAgICAgeTogZXZlbnQueVxuICAgICAgICB9O1xuXG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG5cbiAgICAgICAgLy8gY29tcHV0ZSB0aGUgZGlyZWN0aW9uLi4uXG5cbiAgICAgICAgaWYgKCEgd2luZG93LmdldFNlbGVjdGlvbigpLmlzQ29sbGFwc2VkKSB7XG5cbiAgICAgICAgICAgIC8vIGNvbXB1dGUgaWYgdGhlIG1vdXNlIGlzIG1vdmluZyBkb3duIG9yIHVwIHRvIGZpZ3VyZSBvdXQgdGhlIGJlc3RcbiAgICAgICAgICAgIC8vIHBsYWNlIHRvIHB1dCB0aGUgbW91c2VcbiAgICAgICAgICAgIGNvbnN0IG1vdXNlRGlyZWN0aW9uOiBNb3VzZURpcmVjdGlvbiA9IGV2ZW50LnkgLSBvcmlnaW5Qb2ludCEueSA8IDAgPyAndXAnIDogJ2Rvd24nO1xuXG4gICAgICAgICAgICBjb25zdCBwbGFjZW1lbnQgPSBtb3VzZURpcmVjdGlvbiA9PT0gJ2Rvd24nID8gJ2JvdHRvbScgOiAndG9wJztcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJtb3VzZURpcmVjdGlvbjogXCIgKyBtb3VzZURpcmVjdGlvbilcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicGxhY2VtZW50OiBcIiArIHBsYWNlbWVudClcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNlbGVjdGlvbiBhY3RpdmVcIik7XG5cbiAgICAgICAgICAgIC8vIGNvbnN0IHJlZmVyZW5jZU9iamVjdCA9IG5ldyBSYW5nZVJlZmVyZW5jZU9iamVjdCgpO1xuXG4gICAgICAgICAgICBjb25zdCByYW5nZSA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZUF0KDApO1xuICAgICAgICAgICAgY29uc3QgcmVmZXJlbmNlT2JqZWN0ID0gbmV3IE1vdXNlRXZlbnRSZWZlcmVuY2VPYmplY3QoZXZlbnQsIHJhbmdlLCBtb3VzZURpcmVjdGlvbik7XG4gICAgICAgICAgICBjb25zdCBwb3BwZXIgPSBuZXcgUG9wcGVyKHJlZmVyZW5jZU9iamVjdCwgcG9wdXAgLCB7XG5cbiAgICAgICAgICAgICAgICBwbGFjZW1lbnQsXG4gICAgICAgICAgICAgICAgb25DcmVhdGU6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHBvcHVwLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogYXV0b21hdGljYWxseSBoaWRlIHRoZSBwb3BwZXIgaWYgdGhleSBjbGljayBvdXRzaWRlIG9mIHRoZSBVSS5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICAgICAgICAgICAgICAvLyBmbGlwOiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBiZWhhdmlvcjogWydsZWZ0JywgJ3JpZ2h0JywgJ3RvcCcsICdib3R0b20nXVxuICAgICAgICAgICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgICAgICAgICAvLyBvZmZzZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBvZmZzZXQ6ICcxMCwwJ1xuICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGFycm93OiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBlbmFibGVkOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgfVxuXG4gICAgfSk7XG5cblxufSk7XG4iXX0=