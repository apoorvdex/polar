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
const SpectronRenderer_1 = require("../../js/test/SpectronRenderer");
const Toaster_1 = require("../../js/ui/toaster/Toaster");
const chai_1 = require("chai");
const dom_testing_library_1 = require("dom-testing-library");
SpectronRenderer_1.SpectronRenderer.run((state) => __awaiter(this, void 0, void 0, function* () {
    console.log("Running within SpectronRenderer now.");
    Toaster_1.Toaster.success('hello', 'world');
    yield dom_testing_library_1.wait(() => {
        return chai_1.assert.notEqual(document.querySelector('#toast-container'), null);
    });
    yield dom_testing_library_1.wait(() => {
        const toastTitle = document.querySelector('.toast-title');
        const toastMessage = document.querySelector('.toast-message');
        chai_1.assert.notEqual(toastTitle, null);
        chai_1.assert.notEqual(toastMessage, null);
        chai_1.assert.equal(toastTitle.textContent, 'world');
        chai_1.assert.equal(toastMessage.textContent, 'hello');
    });
    Toaster_1.Toaster.info(`A new version of Polar has been release.  Please upgrade. <a href="http://cnn.com">world</a>`, 'world', {
        requiresAcknowledgment: true,
        positionClass: 'toast-top-full-width'
    });
    yield state.testResultWriter.write(true);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxRUFBZ0U7QUFDaEUseURBQW9EO0FBRXBELCtCQUE0QjtBQUM1Qiw2REFBeUM7QUFFekMsbUNBQWdCLENBQUMsR0FBRyxDQUFDLENBQU8sS0FBSyxFQUFFLEVBQUU7SUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0lBRXBELGlCQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUVsQyxNQUFNLDBCQUFJLENBQUMsR0FBRyxFQUFFO1FBQ1osT0FBTyxhQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3RSxDQUFDLENBQUMsQ0FBQztJQUdILE1BQU0sMEJBQUksQ0FBQyxHQUFHLEVBQUU7UUFFWixNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzFELE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUU5RCxhQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsQyxhQUFNLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVwQyxhQUFNLENBQUMsS0FBSyxDQUFDLFVBQVcsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDL0MsYUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFhLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRXJELENBQUMsQ0FBQyxDQUFDO0lBRUgsaUJBQU8sQ0FBQyxJQUFJLENBQUMsOEZBQThGLEVBQzlGLE9BQU8sRUFDUDtRQUNJLHNCQUFzQixFQUFFLElBQUk7UUFDNUIsYUFBYSxFQUFFLHNCQUFzQjtLQUN4QyxDQUFDLENBQUM7SUFFaEIsTUFBTSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRTdDLENBQUMsQ0FBQSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NwZWN0cm9uUmVuZGVyZXJ9IGZyb20gJy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb25SZW5kZXJlcic7XG5pbXBvcnQge1RvYXN0ZXJ9IGZyb20gJy4uLy4uL2pzL3VpL3RvYXN0ZXIvVG9hc3Rlcic7XG5cbmltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcbmltcG9ydCB7d2FpdH0gZnJvbSAnZG9tLXRlc3RpbmctbGlicmFyeSc7XG5cblNwZWN0cm9uUmVuZGVyZXIucnVuKGFzeW5jIChzdGF0ZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiUnVubmluZyB3aXRoaW4gU3BlY3Ryb25SZW5kZXJlciBub3cuXCIpO1xuXG4gICAgVG9hc3Rlci5zdWNjZXNzKCdoZWxsbycsICd3b3JsZCcpO1xuXG4gICAgYXdhaXQgd2FpdCgoKSA9PiB7XG4gICAgICAgIHJldHVybiBhc3NlcnQubm90RXF1YWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvYXN0LWNvbnRhaW5lcicpLCBudWxsKTtcbiAgICB9KTtcblxuXG4gICAgYXdhaXQgd2FpdCgoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgdG9hc3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2FzdC10aXRsZScpO1xuICAgICAgICBjb25zdCB0b2FzdE1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9hc3QtbWVzc2FnZScpO1xuXG4gICAgICAgIGFzc2VydC5ub3RFcXVhbCh0b2FzdFRpdGxlLCBudWxsKTtcbiAgICAgICAgYXNzZXJ0Lm5vdEVxdWFsKHRvYXN0TWVzc2FnZSwgbnVsbCk7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKHRvYXN0VGl0bGUhLnRleHRDb250ZW50LCAnd29ybGQnKTtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKHRvYXN0TWVzc2FnZSEudGV4dENvbnRlbnQsICdoZWxsbycpO1xuXG4gICAgfSk7XG5cbiAgICBUb2FzdGVyLmluZm8oYEEgbmV3IHZlcnNpb24gb2YgUG9sYXIgaGFzIGJlZW4gcmVsZWFzZS4gIFBsZWFzZSB1cGdyYWRlLiA8YSBocmVmPVwiaHR0cDovL2Nubi5jb21cIj53b3JsZDwvYT5gLFxuICAgICAgICAgICAgICAgICAnd29ybGQnLFxuICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICByZXF1aXJlc0Fja25vd2xlZGdtZW50OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25DbGFzczogJ3RvYXN0LXRvcC1mdWxsLXdpZHRoJ1xuICAgICAgICAgICAgICAgICB9KTtcblxuICAgIGF3YWl0IHN0YXRlLnRlc3RSZXN1bHRXcml0ZXIud3JpdGUodHJ1ZSk7XG5cbn0pO1xuIl19