"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CardCreatorElement_1 = require("./CardCreatorElement");
class CardCreatorWebComponent {
    static register() {
        customElements.define("card-creator", CardCreatorElement_1.CardCreatorElement, { extends: "div" });
        console.log("FIXME: registered card creator.");
    }
}
exports.CardCreatorWebComponent = CardCreatorWebComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FyZENyZWF0b3JXZWJDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDYXJkQ3JlYXRvcldlYkNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZEQUF3RDtBQUV4RCxNQUFhLHVCQUF1QjtJQUVoQyxNQUFNLENBQUMsUUFBUTtRQWdCWCxjQUFjLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSx1Q0FBa0IsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBRTlFLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQTtJQUVsRCxDQUFDO0NBRUo7QUF4QkQsMERBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDYXJkQ3JlYXRvckVsZW1lbnR9IGZyb20gJy4vQ2FyZENyZWF0b3JFbGVtZW50JztcblxuZXhwb3J0IGNsYXNzIENhcmRDcmVhdG9yV2ViQ29tcG9uZW50IHtcblxuICAgIHN0YXRpYyByZWdpc3RlcigpIHtcblxuICAgICAgICAvLyBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkLWNyZWF0b3ItaW1wb3J0XCIpKSB7XG4gICAgICAgIC8vICAgICAvLyB3ZSdyZSBhbHJlYWR5IHJlZ2lzdGVyZWRcbiAgICAgICAgLy8gICAgIHJldHVybjtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cbiAgICAgICAgLy8gVE9ETzogdGhlIG9ubHkgcmVhc29uIHdlJ3JlIHVzaW5nIHRoZSB3ZWJjb21wb25lbnQuaHRtbCBmaWxlIGlzIGZvclxuICAgICAgICAvLyBDU1MuICBJdCBzZWVtcyBsaWtlIGl0IG1pZ2h0IGJlIGEgYmV0dGVyIGlkZWEgZm9yIG1lIHRvIGJlIHVzaW5nXG4gICAgICAgIC8vIHdlYnBhY2sgZm9yIHRoaXMgdG9vLlxuXG4gICAgICAgIC8vIGxpbmsuc2V0QXR0cmlidXRlKFwicmVsXCIsIFwiaW1wb3J0XCIpO1xuICAgICAgICAvLyBsaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIvYXBwcy9jYXJkLWNyZWF0b3Ivd2ViY29tcG9uZW50Lmh0bWxcIik7XG5cbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiY2FyZC1jcmVhdG9yXCIsIENhcmRDcmVhdG9yRWxlbWVudCwgeyBleHRlbmRzOiBcImRpdlwiIH0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRklYTUU6IHJlZ2lzdGVyZWQgY2FyZCBjcmVhdG9yLlwiKVxuXG4gICAgfVxuXG59XG5cblxuIl19