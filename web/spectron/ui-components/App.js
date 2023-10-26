"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const DocMetas_1 = require("../../js/metadata/DocMetas");
const Proxies_1 = require("../../js/proxies/Proxies");
const Rect_1 = require("../../js/Rect");
const TextRect_1 = require("../../js/metadata/TextRect");
const TextHighlightRecords_1 = require("../../js/metadata/TextHighlightRecords");
const ViewOrEditCommentExample_1 = require("./ViewOrEditCommentExample");
const RelatedTags_1 = require("../../js/tags/related/RelatedTags");
const react_context_menu_wrapper_1 = require("@burtonator/react-context-menu-wrapper");
class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.toggleSplit = this.toggleSplit.bind(this);
        this.state = {
            dropdownOpen: false,
            splitButtonOpen: false
        };
    }
    render() {
        const options = [
            {
                id: "title",
                label: "Title",
                selected: true
            },
            {
                id: "tags",
                label: "Tags",
                selected: false
            }
        ];
        const docMeta = Proxies_1.Proxies.create(DocMetas_1.MockDocMetas.createWithinInitialPagemarks('0x001', 4));
        const rects = [new Rect_1.Rect({ top: 100, left: 100, right: 200, bottom: 200, width: 100, height: 100 })];
        const textSelections = [new TextRect_1.TextRect({ text: "hello world" })];
        const text = "hello world";
        const textHighlight = TextHighlightRecords_1.TextHighlightRecords.create(rects, textSelections, { TEXT: text });
        docMeta.pageMetas[1].textHighlights[textHighlight.id] = textHighlight.value;
        const relatedTags = new RelatedTags_1.RelatedTags();
        relatedTags.update('0x01', 'set', 'linux');
        relatedTags.update('0x01', 'set', 'microsoft');
        relatedTags.update('0x02', 'set', 'linux');
        relatedTags.update('0x02', 'set', 'google');
        relatedTags.update('0x03', 'set', 'linux');
        relatedTags.update('0x03', 'set', 'microsoft');
        relatedTags.update('0x04', 'set', 'linux');
        relatedTags.update('0x04', 'set', 'microsoft');
        relatedTags.update('0x05', 'set', 'linux');
        relatedTags.update('0x05', 'set', 'google');
        const tags = [
            { id: 'microsoft', label: 'microsoft' },
            { id: 'google', label: 'google' }
        ];
        const existingTags = [
            { id: 'google', label: 'google' }
        ];
        const contextMenuHandlers = react_context_menu_wrapper_1.prepareContextMenuHandlers({ id: 'my-context-menu' });
        const steps = [
            {
                target: '.my-first-step',
                content: 'This is my awesome feature!',
                disableBeacon: true
            },
            {
                target: '.my-other-step',
                content: 'This another awesome feature!',
            },
        ];
        return (React.createElement("div", null,
            React.createElement(ViewOrEditCommentExample_1.ViewOrEditCommentExample, null)));
    }
    toggleDropDown() {
        this.setState({
            splitButtonOpen: this.state.splitButtonOpen,
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    toggleSplit() {
        this.setState({
            splitButtonOpen: !this.state.splitButtonOpen
        });
    }
}
exports.default = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXBwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFJL0IseURBQXdEO0FBQ3hELHNEQUFpRDtBQUNqRCx3Q0FBbUM7QUFDbkMseURBQW9EO0FBQ3BELGlGQUE0RTtBQUM1RSx5RUFBb0U7QUFTcEUsbUVBQThEO0FBWTlELHVGQUFzRztBQVN0RyxNQUFNLEdBQU8sU0FBUSxLQUFLLENBQUMsU0FBd0I7SUFFL0MsWUFBWSxLQUFRLEVBQUUsT0FBWTtRQUM5QixLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsWUFBWSxFQUFFLEtBQUs7WUFDbkIsZUFBZSxFQUFFLEtBQUs7U0FDekIsQ0FBQztJQUNOLENBQUM7SUFFTSxNQUFNO1FBSVQsTUFBTSxPQUFPLEdBQXFCO1lBQzlCO2dCQUNJLEVBQUUsRUFBRSxPQUFPO2dCQUNYLEtBQUssRUFBRSxPQUFPO2dCQUNkLFFBQVEsRUFBRSxJQUFJO2FBQ2pCO1lBQ0Q7Z0JBQ0ksRUFBRSxFQUFFLE1BQU07Z0JBQ1YsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsUUFBUSxFQUFFLEtBQUs7YUFDbEI7U0FDSixDQUFDO1FBRUYsTUFBTSxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLENBQUMsdUJBQVksQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV0RixNQUFNLEtBQUssR0FBVyxDQUFFLElBQUksV0FBSSxDQUFDLEVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJ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LENBQUMsS0FBSyxDQUFDLGVBQWU7U0FDL0MsQ0FBQyxDQUFDO0lBRVAsQ0FBQztDQUlKO0FBRUQsa0JBQWUsR0FBRyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMaXN0T3B0aW9uVHlwZSwgTGlzdFNlbGVjdG9yfSBmcm9tICcuLi8uLi9qcy91aS9saXN0X3NlbGVjdG9yL0xpc3RTZWxlY3Rvcic7XG5pbXBvcnQge0RvY1JlcG9UYWJsZURyb3Bkb3dufSBmcm9tICcuLi8uLi8uLi9hcHBzL3JlcG9zaXRvcnkvanMvZG9jX3JlcG8vRG9jUmVwb1RhYmxlRHJvcGRvd24nO1xuaW1wb3J0IHtBbm5vdGF0aW9uU2lkZWJhcn0gZnJvbSAnLi4vLi4vanMvYW5ub3RhdGlvbl9zaWRlYmFyL0Fubm90YXRpb25TaWRlYmFyJztcbmltcG9ydCB7TW9ja0RvY01ldGFzfSBmcm9tICcuLi8uLi9qcy9tZXRhZGF0YS9Eb2NNZXRhcyc7XG5pbXBvcnQge1Byb3hpZXN9IGZyb20gJy4uLy4uL2pzL3Byb3hpZXMvUHJveGllcyc7XG5pbXBvcnQge1JlY3R9IGZyb20gJy4uLy4uL2pzL1JlY3QnO1xuaW1wb3J0IHtUZXh0UmVjdH0gZnJvbSAnLi4vLi4vanMvbWV0YWRhdGEvVGV4dFJlY3QnO1xuaW1wb3J0IHtUZXh0SGlnaGxpZ2h0UmVjb3Jkc30gZnJvbSAnLi4vLi4vanMvbWV0YWRhdGEvVGV4dEhpZ2hsaWdodFJlY29yZHMnO1xuaW1wb3J0IHtWaWV3T3JFZGl0Q29tbWVudEV4YW1wbGV9IGZyb20gJy4vVmlld09yRWRpdENvbW1lbnRFeGFtcGxlJztcbmltcG9ydCB7Rmxhc2hjYXJkQ29tcG9uZW50RXhhbXBsZX0gZnJvbSAnLi9GbGFzaGNhcmRDb21wb25lbnRFeGFtcGxlJztcbmltcG9ydCB7V2hhdHNOZXdDb250ZW50fSBmcm9tICcuLi8uLi8uLi9hcHBzL3JlcG9zaXRvcnkvanMvc3BsYXNoL3NwbGFzaGVzL3doYXRzX25ldy9XaGF0c05ld0NvbnRlbnQnO1xuaW1wb3J0IHtDbG91ZFN5bmNPdmVydmlld0NvbnRlbnR9IGZyb20gJy4uLy4uL2pzL3VpL2Nsb3VkX2F1dGgvQ2xvdWRTeW5jT3ZlcnZpZXdDb250ZW50JztcbmltcG9ydCB7Q2xvdWRTeW5jQ29uZmlndXJlZENvbnRlbnR9IGZyb20gJy4uLy4uL2pzL3VpL2Nsb3VkX2F1dGgvQ2xvdWRTeW5jQ29uZmlndXJlZENvbnRlbnQnO1xuaW1wb3J0IHtIaWdobGlnaHRlckljb259IGZyb20gJy4uLy4uL2pzL3VpL3N0YW5kYXJkX2ljb25zL0hpZ2hsaWdodGVySWNvbic7XG5pbXBvcnQge1RvZ2dsZUJ1dHRvbn0gZnJvbSAnLi4vLi4vanMvdWkvVG9nZ2xlQnV0dG9uJztcbmltcG9ydCB7VGFnSW5wdXR9IGZyb20gJy4uLy4uLy4uL2FwcHMvcmVwb3NpdG9yeS9qcy9UYWdJbnB1dCc7XG5pbXBvcnQge1RhZ30gZnJvbSAnLi4vLi4vLi4vd2ViL2pzL3RhZ3MvVGFnJztcbmltcG9ydCB7UmVsYXRlZFRhZ3N9IGZyb20gJy4uLy4uL2pzL3RhZ3MvcmVsYXRlZC9SZWxhdGVkVGFncyc7XG5pbXBvcnQge0NvbW1lbnRJY29ufSBmcm9tICcuLi8uLi9qcy91aS9zdGFuZGFyZF9pY29ucy9Db21tZW50SWNvbic7XG5pbXBvcnQge0ZsYXNoY2FyZEljb259IGZyb20gJy4uLy4uL2pzL3VpL3N0YW5kYXJkX2ljb25zL0ZsYXNoY2FyZEljb24nO1xuaW1wb3J0IHtBbm5vdGF0aW9uRmxhc2hjYXJkQm94fSBmcm9tICcuLi8uLi9qcy9hbm5vdGF0aW9uX3NpZGViYXIvZmxhc2hjYXJkX2lucHV0L0Fubm90YXRpb25GbGFzaGNhcmRCb3gnO1xuaW1wb3J0IHtGbGFzaGNhcmRJbnB1dEZvckNsb3plfSBmcm9tICcuLi8uLi9qcy9hbm5vdGF0aW9uX3NpZGViYXIvZmxhc2hjYXJkX2lucHV0L0ZsYXNoY2FyZElucHV0Rm9yQ2xvemUnO1xuaW1wb3J0IHtGbGFzaGNhcmRJbnB1dEZvckZyb250QW5kQmFja30gZnJvbSAnLi4vLi4vanMvYW5ub3RhdGlvbl9zaWRlYmFyL2ZsYXNoY2FyZF9pbnB1dC9GbGFzaGNhcmRJbnB1dEZvckZyb250QW5kQmFjayc7XG5pbXBvcnQge0VkaXRDb21tZW50fSBmcm9tICcuLi8uLi9qcy9hbm5vdGF0aW9uX3NpZGViYXIvY2hpbGRfYW5ub3RhdGlvbnMvY29tbWVudHMvRWRpdENvbW1lbnQnO1xuaW1wb3J0IHtEcm9wZG93bkl0ZW0sIERyb3Bkb3duTWVudSwgRHJvcGRvd25Ub2dnbGUsIFVuY29udHJvbGxlZERyb3Bkb3dufSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB7RXhwb3J0QnV0dG9ufSBmcm9tICcuLi8uLi9qcy91aS9leHBvcnQvRXhwb3J0QnV0dG9uJztcbmltcG9ydCB7RWRpdG9yc1BpY2tzQ29udGVudH0gZnJvbSAnLi4vLi4vLi4vYXBwcy9yZXBvc2l0b3J5L2pzL2VkaXRvcnNfcGlja3MvRWRpdG9yc1BpY2tzQ29udGVudCc7XG5pbXBvcnQge0Fua2lSZXZpZXdDb250ZW50fSBmcm9tICcuL0Fua2lSZXZpZXdDb250ZW50JztcbmltcG9ydCBSZWFkaW5nUHJvZ3Jlc3NUYWJsZSBmcm9tICcuLi8uLi8uLi9hcHBzL3JlcG9zaXRvcnkvanMvc3RhdHMvUmVhZGluZ1Byb2dyZXNzVGFibGUnO1xuaW1wb3J0IHtDb250ZXh0TWVudVdyYXBwZXIsIHByZXBhcmVDb250ZXh0TWVudUhhbmRsZXJzfSBmcm9tICdAYnVydG9uYXRvci9yZWFjdC1jb250ZXh0LW1lbnUtd3JhcHBlcic7XG5pbXBvcnQge1Rlc3RNZW51fSBmcm9tICcuL1Rlc3RNZW51JztcbmltcG9ydCB7RmVlZGJhY2t9IGZyb20gJy4uLy4uL2pzL3VpL2ZlZWRiYWNrL0ZlZWRiYWNrJztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3RzdHJhcC9saWIvQnV0dG9uJztcbmltcG9ydCB7UHJvZ3Jlc3NUb2FzdGVyc30gZnJvbSAnLi4vLi4vanMvdWkvcHJvZ3Jlc3NfdG9hc3Rlci9Qcm9ncmVzc1RvYXN0ZXJzJztcbmltcG9ydCB7QWNjb3VudENvbnRyb2xCYXJ9IGZyb20gJy4uLy4uLy4uL3dlYi9qcy91aS9jbG91ZF9hdXRoL0FjY291bnRDb250cm9sQmFyJztcbmltcG9ydCB7TlVMTF9GVU5DVElPTn0gZnJvbSAnLi4vLi4vanMvdXRpbC9GdW5jdGlvbnMnO1xuaW1wb3J0IHtBY2NvdW50Q29udHJvbERyb3Bkb3dufSBmcm9tICcuLi8uLi8uLi93ZWIvanMvdWkvY2xvdWRfYXV0aC9BY2NvdW50Q29udHJvbERyb3Bkb3duJztcblxuY2xhc3MgQXBwPFA+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCBJQXBwU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBQLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMudG9nZ2xlRHJvcERvd24gPSB0aGlzLnRvZ2dsZURyb3BEb3duLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudG9nZ2xlU3BsaXQgPSB0aGlzLnRvZ2dsZVNwbGl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBkcm9wZG93bk9wZW46IGZhbHNlLFxuICAgICAgICAgICAgc3BsaXRCdXR0b25PcGVuOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgLy8gUHJvZ3Jlc3NCYXIuY3JlYXRlKCk7XG5cbiAgICAgICAgY29uc3Qgb3B0aW9uczogTGlzdE9wdGlvblR5cGVbXSA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogXCJ0aXRsZVwiLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIlRpdGxlXCIsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IFwidGFnc1wiLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIlRhZ3NcIixcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcblxuICAgICAgICBjb25zdCBkb2NNZXRhID0gUHJveGllcy5jcmVhdGUoTW9ja0RvY01ldGFzLmNyZWF0ZVdpdGhpbkluaXRpYWxQYWdlbWFya3MoJzB4MDAxJywgNCkpO1xuXG4gICAgICAgIGNvbnN0IHJlY3RzOiBSZWN0W10gPSBbIG5ldyBSZWN0KHt0b3A6IDEwMCwgbGVmdDogMTAwLCByaWdodDogMjAwLCBib3R0b206IDIwMCwgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDB9KSBdO1xuICAgICAgICBjb25zdCB0ZXh0U2VsZWN0aW9uczogVGV4dFJlY3RbXSA9IFtuZXcgVGV4dFJlY3Qoe3RleHQ6IFwiaGVsbG8gd29ybGRcIn0pXTtcbiAgICAgICAgY29uc3QgdGV4dCA9IFwiaGVsbG8gd29ybGRcIjtcblxuICAgICAgICBjb25zdCB0ZXh0SGlnaGxpZ2h0ID0gVGV4dEhpZ2hsaWdodFJlY29yZHMuY3JlYXRlKHJlY3RzLCB0ZXh0U2VsZWN0aW9ucywge1RFWFQ6IHRleHR9KTtcblxuICAgICAgICAvLyBjb25zdCByZWYgPSBSZWZzLmNyZWF0ZUZyb21Bbm5vdGF0aW9uVHlwZSh0ZXh0SGlnaGxpZ2h0LmlkLFxuICAgICAgICAvLyBBbm5vdGF0aW9uVHlwZS5URVhUX0hJR0hMSUdIVCk7XG5cbiAgICAgICAgZG9jTWV0YS5wYWdlTWV0YXNbMV0udGV4dEhpZ2hsaWdodHNbdGV4dEhpZ2hsaWdodC5pZF0gPSB0ZXh0SGlnaGxpZ2h0LnZhbHVlO1xuXG4gICAgICAgIC8vIGxldCBmbGFzaGNhcmQgPSBGbGFzaGNhcmRzLmNyZWF0ZUZyb250QmFjayhmcm9udCwgYmFjaywgcmVmKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gLy8gVE9ETzogYW4gaWRpb3N5bmNyYWNpZSBvZiB0aGUgcHJveGllcyBzeXN0ZW0gaXMgdGhhdCBpdCBtdXRhdGVzXG4gICAgICAgIC8vIHRoZSAvLyBvYmplY3Qgc28gaWYgaXQncyByZWFkIG9ubHkgaXQgd29uJ3Qgd29yay4gIFRoaXMgaXMgYSBidWdcbiAgICAgICAgLy8gd2l0aCAvLyBQcm94aWVzIHNvIEkgbmVlZCB0byBhbHNvIGZpeCB0aGF0IGJ1ZyB0aGVyZSBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBmbGFzaGNhcmQgPSBPYmplY3QuYXNzaWduKHt9LCBmbGFzaGNhcmQpO1xuICAgICAgICAvLyBhbm5vdGF0aW9uLnBhZ2VNZXRhLmZsYXNoY2FyZHNbZmxhc2hjYXJkLmlkXSA9IGZsYXNoY2FyZDtcblxuXG4gICAgICAgIC8vIFRPRE86IHdlIGhhdmUgdG8gY3JlYXRlIHNvbWUgZmxhc2hjYXJkcyBhbmQgY29tbWVudHMgZm9yIHRoaXMgb2JqZWN0XG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFubm90YXRpb24gc2lkZWFyIHJlbmRlcnMuXG5cbiAgICAgICAgY29uc3QgcmVsYXRlZFRhZ3MgPSBuZXcgUmVsYXRlZFRhZ3MoKTtcblxuICAgICAgICByZWxhdGVkVGFncy51cGRhdGUoJzB4MDEnLCAnc2V0JywgJ2xpbnV4Jyk7XG4gICAgICAgIHJlbGF0ZWRUYWdzLnVwZGF0ZSgnMHgwMScsICdzZXQnLCAnbWljcm9zb2Z0Jyk7XG5cbiAgICAgICAgcmVsYXRlZFRhZ3MudXBkYXRlKCcweDAyJywgJ3NldCcsICdsaW51eCcpO1xuICAgICAgICByZWxhdGVkVGFncy51cGRhdGUoJzB4MDInLCAnc2V0JywgJ2dvb2dsZScpO1xuXG4gICAgICAgIHJlbGF0ZWRUYWdzLnVwZGF0ZSgnMHgwMycsICdzZXQnLCAnbGludXgnKTtcbiAgICAgICAgcmVsYXRlZFRhZ3MudXBkYXRlKCcweDAzJywgJ3NldCcsICdtaWNyb3NvZnQnKTtcblxuICAgICAgICByZWxhdGVkVGFncy51cGRhdGUoJzB4MDQnLCAnc2V0JywgJ2xpbnV4Jyk7XG4gICAgICAgIHJlbGF0ZWRUYWdzLnVwZGF0ZSgnMHgwNCcsICdzZXQnLCAnbWljcm9zb2Z0Jyk7XG5cbiAgICAgICAgcmVsYXRlZFRhZ3MudXBkYXRlKCcweDA1JywgJ3NldCcsICdsaW51eCcpO1xuICAgICAgICByZWxhdGVkVGFncy51cGRhdGUoJzB4MDUnLCAnc2V0JywgJ2dvb2dsZScpO1xuXG4gICAgICAgIGNvbnN0IHRhZ3M6IFRhZ1tdID0gW1xuICAgICAgICAgICAge2lkOiAnbWljcm9zb2Z0JywgbGFiZWw6ICdtaWNyb3NvZnQnfSxcbiAgICAgICAgICAgIHtpZDogJ2dvb2dsZScsIGxhYmVsOiAnZ29vZ2xlJ31cbiAgICAgICAgXTtcblxuICAgICAgICBjb25zdCBleGlzdGluZ1RhZ3M6IFRhZ1tdID0gW1xuICAgICAgICAgICAge2lkOiAnZ29vZ2xlJywgbGFiZWw6ICdnb29nbGUnfVxuICAgICAgICBdO1xuXG4gICAgICAgIGNvbnN0IGNvbnRleHRNZW51SGFuZGxlcnMgPSBwcmVwYXJlQ29udGV4dE1lbnVIYW5kbGVycyh7aWQ6ICdteS1jb250ZXh0LW1lbnUnfSk7XG5cbiAgICAgICAgY29uc3Qgc3RlcHMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiAnLm15LWZpcnN0LXN0ZXAnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdUaGlzIGlzIG15IGF3ZXNvbWUgZmVhdHVyZSEnLFxuICAgICAgICAgICAgICAgIGRpc2FibGVCZWFjb246IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiAnLm15LW90aGVyLXN0ZXAnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdUaGlzIGFub3RoZXIgYXdlc29tZSBmZWF0dXJlIScsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuICAgICAgICAvLyBUb2FzdGVyLnN1Y2Nlc3MoJ0EgbmV3IHVwZGF0ZSBmb3IgUG9sYXIgd2FzIGRvd25sb2FkZWQuICBQbGVhc2VcbiAgICAgICAgLy8gcmVzdGFydC4nLCAnVXBkYXRlIGRvd25sb2FkZWQnLCB7IHJlcXVpcmVzQWNrbm93bGVkZ21lbnQ6IHRydWUsXG4gICAgICAgIC8vIHByZXZlbnREdXBsaWNhdGVzOiB0cnVlIH0pOyAgVG9hc3Rlci5pbmZvKCdYIEEgbmV3IHVwZGF0ZSBmb3IgUG9sYXJcbiAgICAgICAgLy8gd2FzIGRvd25sb2FkZWQuICBQbGVhc2UgcmVzdGFydC4nLCAnVXBkYXRlIGRvd25sb2FkZWQnLCB7XG4gICAgICAgIC8vIHJlcXVpcmVzQWNrbm93bGVkZ21lbnQ6IHRydWUsIHByZXZlbnREdXBsaWNhdGVzOiB0cnVlIH0pO1xuXG4gICAgICAgIC8vIFByb2dyZXNzVG9hc3RlcnMuY3JlYXRlKClcbiAgICAgICAgLy8gICAgIC50aGVuKHByb2dyZXNzVXBkYXRlciA9PiB7XG4gICAgICAgIC8vICAgICAgICAgcHJvZ3Jlc3NVcGRhdGVyLnVwZGF0ZSh7dGl0bGU6IFwiRmluZGluZyBmaWxlcyAoNSkgLi4uIFwiLCBzdGF0dXM6ICcvaG9tZS9idXJ0b24vcHJvamVjdHMvcG9sYXItYm9va3NoZWxmL3dlYi9qcy9hcHBzL3JlcG9zaXRvcnkvRmlsZUltcG9ydENvbnRyb2xsZXIudHMnfSk7XG4gICAgICAgIC8vICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3T3JFZGl0Q29tbWVudEV4YW1wbGUvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgdG9nZ2xlRHJvcERvd24oKSB7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzcGxpdEJ1dHRvbk9wZW46IHRoaXMuc3RhdGUuc3BsaXRCdXR0b25PcGVuLFxuICAgICAgICAgICAgZHJvcGRvd25PcGVuOiAhdGhpcy5zdGF0ZS5kcm9wZG93bk9wZW5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHRvZ2dsZVNwbGl0KCkge1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3BsaXRCdXR0b25PcGVuOiAhdGhpcy5zdGF0ZS5zcGxpdEJ1dHRvbk9wZW5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuaW50ZXJmYWNlIElBcHBTdGF0ZSB7XG4gICAgZHJvcGRvd25PcGVuOiBib29sZWFuO1xuICAgIHNwbGl0QnV0dG9uT3BlbjogYm9vbGVhbjtcblxufVxuXG5cbiJdfQ==