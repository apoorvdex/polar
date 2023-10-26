"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const ClientRects_1 = require("./ClientRects");
describe('ClientRects', function () {
    it("basic", function () {
        let clientRect = {
            left: 0,
            top: 0,
            width: 0,
            height: 0
        };
        chai_1.assert.equal(ClientRects_1.ClientRects.instanceOf(clientRect), true);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xpZW50UmVjdHNUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ2xpZW50UmVjdHNUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQTRCO0FBQzVCLCtDQUEwQztBQUUxQyxRQUFRLENBQUMsYUFBYSxFQUFFO0lBRXBCLEVBQUUsQ0FBQyxPQUFPLEVBQUU7UUFFUixJQUFJLFVBQVUsR0FBRztZQUNiLElBQUksRUFBRSxDQUFDO1lBQ1AsR0FBRyxFQUFFLENBQUM7WUFDTixLQUFLLEVBQUUsQ0FBQztZQUNSLE1BQU0sRUFBRSxDQUFDO1NBQ1osQ0FBQztRQUVGLGFBQU0sQ0FBQyxLQUFLLENBQUMseUJBQVcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFM0QsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcbmltcG9ydCB7Q2xpZW50UmVjdHN9IGZyb20gJy4vQ2xpZW50UmVjdHMnO1xuXG5kZXNjcmliZSgnQ2xpZW50UmVjdHMnLCBmdW5jdGlvbigpIHtcblxuICAgIGl0KFwiYmFzaWNcIiwgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGxldCBjbGllbnRSZWN0ID0ge1xuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAwXG4gICAgICAgIH07XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKENsaWVudFJlY3RzLmluc3RhbmNlT2YoY2xpZW50UmVjdCksIHRydWUpO1xuXG4gICAgfSk7XG5cbn0pO1xuIl19