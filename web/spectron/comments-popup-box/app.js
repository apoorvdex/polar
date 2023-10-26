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
const CommentPopupBoxes_1 = require("../../js/comments/react/CommentPopupBoxes");
const SimpleReactor_1 = require("../../js/reactor/SimpleReactor");
SpectronRenderer_1.SpectronRenderer.run(() => __awaiter(this, void 0, void 0, function* () {
    console.log("Running within SpectronRenderer now.");
    const commentEventDispatcher = new SimpleReactor_1.SimpleReactor();
    CommentPopupBoxes_1.CommentPopupBoxes.create(commentEventDispatcher, (commentCreatedEvent) => console.log("Got a comment: " + commentCreatedEvent.text));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxRUFBZ0U7QUFDaEUsaUZBQTRFO0FBQzVFLGtFQUE2RDtBQUs3RCxtQ0FBZ0IsQ0FBQyxHQUFHLENBQUMsR0FBUyxFQUFFO0lBRTVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQztJQUVwRCxNQUFNLHNCQUFzQixHQUFHLElBQUksNkJBQWEsRUFBcUIsQ0FBQztJQUV0RSxxQ0FBaUIsQ0FBQyxNQUFNLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBMEJ6SSxDQUFDLENBQUEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTcGVjdHJvblJlbmRlcmVyfSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uUmVuZGVyZXInO1xuaW1wb3J0IHtDb21tZW50UG9wdXBCb3hlc30gZnJvbSAnLi4vLi4vanMvY29tbWVudHMvcmVhY3QvQ29tbWVudFBvcHVwQm94ZXMnO1xuaW1wb3J0IHtTaW1wbGVSZWFjdG9yfSBmcm9tICcuLi8uLi9qcy9yZWFjdG9yL1NpbXBsZVJlYWN0b3InO1xuaW1wb3J0IHtDb21tZW50SW5wdXRFdmVudH0gZnJvbSAnLi4vLi4vanMvY29tbWVudHMvcmVhY3QvQ29tbWVudElucHV0RXZlbnQnO1xuXG5pbXBvcnQgJCBmcm9tICcuLi8uLi9qcy91aS9KUXVlcnknO1xuXG5TcGVjdHJvblJlbmRlcmVyLnJ1bihhc3luYyAoKSA9PiB7XG5cbiAgICBjb25zb2xlLmxvZyhcIlJ1bm5pbmcgd2l0aGluIFNwZWN0cm9uUmVuZGVyZXIgbm93LlwiKTtcblxuICAgIGNvbnN0IGNvbW1lbnRFdmVudERpc3BhdGNoZXIgPSBuZXcgU2ltcGxlUmVhY3RvcjxDb21tZW50SW5wdXRFdmVudD4oKTtcblxuICAgIENvbW1lbnRQb3B1cEJveGVzLmNyZWF0ZShjb21tZW50RXZlbnREaXNwYXRjaGVyLCAoY29tbWVudENyZWF0ZWRFdmVudCkgPT4gY29uc29sZS5sb2coXCJHb3QgYSBjb21tZW50OiBcIiArIGNvbW1lbnRDcmVhdGVkRXZlbnQudGV4dCkpO1xuXG4gICAgLy8gY29tbWVudEV2ZW50RGlzcGF0Y2hlci5kaXNwYXRjaEV2ZW50KHtcbiAgICAvLyAgICAgcG9pbnQ6IHtcbiAgICAvLyAgICAgICAgIHg6IDEwMCxcbiAgICAvLyAgICAgICAgIHk6IDEwMFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgICB0eXBlOiAnY3JlYXRlJ1xuICAgIC8vIH0pO1xuICAgIC8vXG5cbiAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIGV2ZW50ID0+IHtcbiAgICAvL1xuICAgIC8vICAgICBjb21tZW50RXZlbnREaXNwYXRjaGVyLmRpc3BhdGNoRXZlbnQoe1xuICAgIC8vICAgICAgICAgcG9pbnQ6IHtcbiAgICAvLyAgICAgICAgICAgICB4OiBldmVudC54LFxuICAgIC8vICAgICAgICAgICAgIHk6IGV2ZW50LnlcbiAgICAvLyAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICBwYWdlTnVtOiAxLFxuICAgIC8vICAgICAgICAgdHlwZTogJ2NyZWF0ZSdcbiAgICAvLyAgICAgfSk7XG4gICAgLy9cbiAgICAvLyB9KTtcblxuICAgIC8vIFBvcHVwLmNyZWF0ZUF0UG9pbnQoe3g6IDEwMCwgeTogMTAwfSwgJ2JvdHRvbScsIHRoaXMucG9wdXBFbGVtZW50ISk7XG5cbn0pO1xuIl19