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
const chai_1 = require("chai");
const dom_testing_library_1 = require("dom-testing-library");
const ToasterLogger_1 = require("../../js/logger/ToasterLogger");
SpectronRenderer_1.SpectronRenderer.run((state) => __awaiter(this, void 0, void 0, function* () {
    console.log("Running within SpectronRenderer now.");
    const toasterLogger = new ToasterLogger_1.ToasterLogger();
    toasterLogger.error("Something bad", new Error("it broke"));
    yield dom_testing_library_1.wait(() => {
        return chai_1.assert.notEqual(document.querySelector('#toast-container'), null);
    });
    console.log("Got the container");
    yield dom_testing_library_1.wait(() => {
        const toastMessage = document.querySelector('.toast-message');
        chai_1.assert.notEqual(toastMessage, null);
        chai_1.assert.equal(toastMessage.textContent, 'An internal error has occurred.');
    });
    yield state.testResultWriter.write(true);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxRUFBZ0U7QUFFaEUsK0JBQTRCO0FBQzVCLDZEQUF5QztBQUN6QyxpRUFBNEQ7QUFFNUQsbUNBQWdCLENBQUMsR0FBRyxDQUFDLENBQU8sS0FBSyxFQUFFLEVBQUU7SUFFakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0lBRXBELE1BQU0sYUFBYSxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO0lBQzFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFFNUQsTUFBTSwwQkFBSSxDQUFDLEdBQUcsRUFBRTtRQUNaLE9BQU8sYUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0UsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFFakMsTUFBTSwwQkFBSSxDQUFDLEdBQUcsRUFBRTtRQUVaLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUU5RCxhQUFNLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVwQyxhQUFNLENBQUMsS0FBSyxDQUFDLFlBQWEsQ0FBQyxXQUFXLEVBQUUsaUNBQWlDLENBQUMsQ0FBQztJQUUvRSxDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sS0FBSyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUU3QyxDQUFDLENBQUEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTcGVjdHJvblJlbmRlcmVyfSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uUmVuZGVyZXInO1xuXG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQge3dhaXR9IGZyb20gJ2RvbS10ZXN0aW5nLWxpYnJhcnknO1xuaW1wb3J0IHtUb2FzdGVyTG9nZ2VyfSBmcm9tICcuLi8uLi9qcy9sb2dnZXIvVG9hc3RlckxvZ2dlcic7XG5cblNwZWN0cm9uUmVuZGVyZXIucnVuKGFzeW5jIChzdGF0ZSkgPT4ge1xuXG4gICAgY29uc29sZS5sb2coXCJSdW5uaW5nIHdpdGhpbiBTcGVjdHJvblJlbmRlcmVyIG5vdy5cIik7XG5cbiAgICBjb25zdCB0b2FzdGVyTG9nZ2VyID0gbmV3IFRvYXN0ZXJMb2dnZXIoKTtcbiAgICB0b2FzdGVyTG9nZ2VyLmVycm9yKFwiU29tZXRoaW5nIGJhZFwiLCBuZXcgRXJyb3IoXCJpdCBicm9rZVwiKSk7XG5cbiAgICBhd2FpdCB3YWl0KCgpID0+IHtcbiAgICAgICAgcmV0dXJuIGFzc2VydC5ub3RFcXVhbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9hc3QtY29udGFpbmVyJyksIG51bGwpO1xuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coXCJHb3QgdGhlIGNvbnRhaW5lclwiKTtcblxuICAgIGF3YWl0IHdhaXQoKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IHRvYXN0TWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2FzdC1tZXNzYWdlJyk7XG5cbiAgICAgICAgYXNzZXJ0Lm5vdEVxdWFsKHRvYXN0TWVzc2FnZSwgbnVsbCk7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKHRvYXN0TWVzc2FnZSEudGV4dENvbnRlbnQsICdBbiBpbnRlcm5hbCBlcnJvciBoYXMgb2NjdXJyZWQuJyk7XG5cbiAgICB9KTtcblxuICAgIGF3YWl0IHN0YXRlLnRlc3RSZXN1bHRXcml0ZXIud3JpdGUodHJ1ZSk7XG5cbn0pO1xuIl19