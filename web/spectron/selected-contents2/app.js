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
const MockSelections_1 = require("../../js/highlights/text/selection/MockSelections");
const SelectedContents_1 = require("../../js/highlights/text/selection/SelectedContents");
const SimpleHighlightRenderer_1 = require("../../js/highlights/text/view/SimpleHighlightRenderer");
const DocumentReadyStates_1 = require("../../js/util/dom/DocumentReadyStates");
SpectronRenderer_1.SpectronRenderer.run((state) => __awaiter(this, void 0, void 0, function* () {
    yield DocumentReadyStates_1.DocumentReadyStates.waitFor(document, 'complete');
    console.log("Running within SpectronRenderer now.");
    MockSelections_1.MockSelections.createSyntheticSelection({ node: document.querySelector("#n4"), offset: 0 }, { node: document.querySelector("#n7").firstChild, offset: 35 });
    let selectedContents = SelectedContents_1.SelectedContents.compute(window);
    window.getSelection().empty();
    SimpleHighlightRenderer_1.SimpleHighlightRenderer.renderSelectedContents(selectedContents);
    state.testResultWriter.write(selectedContents);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxRUFBZ0U7QUFDaEUsc0ZBQWlGO0FBQ2pGLDBGQUFxRjtBQUNyRixtR0FBOEY7QUFDOUYsK0VBQTBFO0FBRTFFLG1DQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFPLEtBQUssRUFBRSxFQUFFO0lBRWpDLE1BQU0seUNBQW1CLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUV4RCxPQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7SUFFcEQsK0JBQWMsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsRUFDbEQsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUUsQ0FBQyxVQUFXLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7SUFFekcsSUFBSSxnQkFBZ0IsR0FBRyxtQ0FBZ0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFeEQsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRTlCLGlEQUF1QixDQUFDLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFFakUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBRW5ELENBQUMsQ0FBQSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NwZWN0cm9uUmVuZGVyZXJ9IGZyb20gJy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb25SZW5kZXJlcic7XG5pbXBvcnQge01vY2tTZWxlY3Rpb25zfSBmcm9tICcuLi8uLi9qcy9oaWdobGlnaHRzL3RleHQvc2VsZWN0aW9uL01vY2tTZWxlY3Rpb25zJztcbmltcG9ydCB7U2VsZWN0ZWRDb250ZW50c30gZnJvbSAnLi4vLi4vanMvaGlnaGxpZ2h0cy90ZXh0L3NlbGVjdGlvbi9TZWxlY3RlZENvbnRlbnRzJztcbmltcG9ydCB7U2ltcGxlSGlnaGxpZ2h0UmVuZGVyZXJ9IGZyb20gJy4uLy4uL2pzL2hpZ2hsaWdodHMvdGV4dC92aWV3L1NpbXBsZUhpZ2hsaWdodFJlbmRlcmVyJztcbmltcG9ydCB7RG9jdW1lbnRSZWFkeVN0YXRlc30gZnJvbSAnLi4vLi4vanMvdXRpbC9kb20vRG9jdW1lbnRSZWFkeVN0YXRlcyc7XG5cblNwZWN0cm9uUmVuZGVyZXIucnVuKGFzeW5jIChzdGF0ZSkgPT4ge1xuXG4gICAgYXdhaXQgRG9jdW1lbnRSZWFkeVN0YXRlcy53YWl0Rm9yKGRvY3VtZW50LCAnY29tcGxldGUnKTtcblxuICAgIGNvbnNvbGUubG9nKFwiUnVubmluZyB3aXRoaW4gU3BlY3Ryb25SZW5kZXJlciBub3cuXCIpO1xuXG4gICAgTW9ja1NlbGVjdGlvbnMuY3JlYXRlU3ludGhldGljU2VsZWN0aW9uKHsgbm9kZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuNFwiKSEsIG9mZnNldDogMH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbm9kZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuN1wiKSEuZmlyc3RDaGlsZCEsIG9mZnNldDogMzV9KTtcblxuICAgIGxldCBzZWxlY3RlZENvbnRlbnRzID0gU2VsZWN0ZWRDb250ZW50cy5jb21wdXRlKHdpbmRvdyk7XG5cbiAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuZW1wdHkoKTtcblxuICAgIFNpbXBsZUhpZ2hsaWdodFJlbmRlcmVyLnJlbmRlclNlbGVjdGVkQ29udGVudHMoc2VsZWN0ZWRDb250ZW50cyk7XG5cbiAgICBzdGF0ZS50ZXN0UmVzdWx0V3JpdGVyLndyaXRlKHNlbGVjdGVkQ29udGVudHMpO1xuXG59KTtcbiJdfQ==