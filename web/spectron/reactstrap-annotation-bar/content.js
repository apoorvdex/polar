"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SpectronRenderer_1 = require("../../js/test/SpectronRenderer");
const ReactDOM = __importStar(require("react-dom"));
const React = __importStar(require("react"));
const App_1 = __importDefault(require("./App"));
const AnnotationBars_1 = require("../../js/ui/annotationbar/AnnotationBars");
const SimpleReactor_1 = require("../../js/reactor/SimpleReactor");
const CommentPopupBars_1 = require("../../js/comments/react/CommentPopupBars");
SpectronRenderer_1.SpectronRenderer.run(() => __awaiter(this, void 0, void 0, function* () {
    ReactDOM.render(React.createElement(App_1.default, null), document.getElementById('root'));
    const commentBarControlledPopupProps = {
        id: 'commentbar',
        placement: 'bottom',
        popupStateEventDispatcher: new SimpleReactor_1.SimpleReactor(),
        triggerPopupEventDispatcher: new SimpleReactor_1.SimpleReactor()
    };
    const commentPopupBarCallbacks = {
        onComment: (commentCreatedEvent) => {
            console.log("FIXME: comment created", commentCreatedEvent);
        }
    };
    CommentPopupBars_1.CommentPopupBars.create(commentBarControlledPopupProps, commentPopupBarCallbacks);
    const popupStateEventDispatcher = new SimpleReactor_1.SimpleReactor();
    const triggerPopupEventDispatcher = new SimpleReactor_1.SimpleReactor();
    const annotationBarControlledPopupProps = {
        id: 'annotationbar',
        placement: 'top',
        popupStateEventDispatcher,
        triggerPopupEventDispatcher
    };
    const onComment = (commentTriggerEvent) => {
        console.log("Got comment button clicked");
        const activeSelection = commentTriggerEvent.activeSelection;
        commentBarControlledPopupProps.triggerPopupEventDispatcher.dispatchEvent({
            point: {
                x: activeSelection.boundingClientRect.left + (activeSelection.boundingClientRect.width / 2),
                y: activeSelection.boundingClientRect.bottom
            },
            offset: {
                x: 0,
                y: 10
            },
            pageNum: commentTriggerEvent.pageNum
        });
    };
    const onHighlighted = (highlightCreatedEvent) => {
        console.log("Got highlight!", highlightCreatedEvent);
    };
    const annotationBarCallbacks = {
        onHighlighted,
        onComment
    };
    AnnotationBars_1.AnnotationBars.create(annotationBarControlledPopupProps, annotationBarCallbacks, 1);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRlbnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUVBQWdFO0FBQ2hFLG9EQUFzQztBQUN0Qyw2Q0FBK0I7QUFDL0IsZ0RBQXdCO0FBQ3hCLDZFQUF3RTtBQUV4RSxrRUFBNkQ7QUFHN0QsK0VBQTBFO0FBTTFFLG1DQUFnQixDQUFDLEdBQUcsQ0FBQyxHQUFTLEVBQUU7SUFFNUIsUUFBUSxDQUFDLE1BQU0sQ0FDWCxvQkFBQyxhQUFHLE9BQUcsRUFDUCxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBZ0IsQ0FDakQsQ0FBQztJQUVGLE1BQU0sOEJBQThCLEdBQXlCO1FBQ3pELEVBQUUsRUFBRSxZQUFZO1FBQ2hCLFNBQVMsRUFBRSxRQUFRO1FBQ25CLHlCQUF5QixFQUFFLElBQUksNkJBQWEsRUFBbUI7UUFDL0QsMkJBQTJCLEVBQUUsSUFBSSw2QkFBYSxFQUFxQjtLQUN0RSxDQUFDO0lBRUYsTUFBTSx3QkFBd0IsR0FBNkI7UUFFdkQsU0FBUyxFQUFFLENBQUMsbUJBQXdDLEVBQUUsRUFBRTtZQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFDL0QsQ0FBQztLQUVKLENBQUM7SUFFRixtQ0FBZ0IsQ0FBQyxNQUFNLENBQUMsOEJBQThCLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztJQU1sRixNQUFNLHlCQUF5QixHQUFHLElBQUksNkJBQWEsRUFBbUIsQ0FBQztJQUN2RSxNQUFNLDJCQUEyQixHQUFHLElBQUksNkJBQWEsRUFBcUIsQ0FBQztJQUUzRSxNQUFNLGlDQUFpQyxHQUF5QjtRQUM1RCxFQUFFLEVBQUUsZUFBZTtRQUNuQixTQUFTLEVBQUUsS0FBSztRQUNoQix5QkFBeUI7UUFDekIsMkJBQTJCO0tBQzlCLENBQUM7SUFFRixNQUFNLFNBQVMsR0FDWCxDQUFDLG1CQUF3QyxFQUFFLEVBQUU7UUFHN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBRTFDLE1BQU0sZUFBZSxHQUFHLG1CQUFtQixDQUFDLGVBQWUsQ0FBQztRQUU1RCw4QkFBOEIsQ0FBQywyQkFBMkIsQ0FBQyxhQUFhLENBQUM7WUFDckUsS0FBSyxFQUFFO2dCQUNILENBQUMsRUFBRSxlQUFlLENBQUMsa0JBQWtCLENBQUMsSUFBSSxHQUFHLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQzNGLENBQUMsRUFBRSxlQUFlLENBQUMsa0JBQWtCLENBQUMsTUFBTTthQUMvQztZQUNELE1BQU0sRUFBRTtnQkFDSixDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsRUFBRTthQUNSO1lBQ0QsT0FBTyxFQUFFLG1CQUFtQixDQUFDLE9BQU87U0FFdkMsQ0FBQyxDQUFDO0lBRVAsQ0FBQyxDQUFDO0lBRUYsTUFBTSxhQUFhLEdBQTBCLENBQUMscUJBQTRDLEVBQUUsRUFBRTtRQUUxRixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLHFCQUFxQixDQUFDLENBQUM7SUFFekQsQ0FBQyxDQUFDO0lBRUYsTUFBTSxzQkFBc0IsR0FBMkI7UUFDbkQsYUFBYTtRQUNiLFNBQVM7S0FDWixDQUFDO0lBRUYsK0JBQWMsQ0FBQyxNQUFNLENBQUMsaUNBQWlDLEVBQUUsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFFeEYsQ0FBQyxDQUFBLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3BlY3Ryb25SZW5kZXJlcn0gZnJvbSAnLi4vLi4vanMvdGVzdC9TcGVjdHJvblJlbmRlcmVyJztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJztcbmltcG9ydCB7QW5ub3RhdGlvbkJhcnN9IGZyb20gJy4uLy4uL2pzL3VpL2Fubm90YXRpb25iYXIvQW5ub3RhdGlvbkJhcnMnO1xuaW1wb3J0IHtUcmlnZ2VyUG9wdXBFdmVudH0gZnJvbSAnLi4vLi4vanMvdWkvcG9wdXAvVHJpZ2dlclBvcHVwRXZlbnQnO1xuaW1wb3J0IHtTaW1wbGVSZWFjdG9yfSBmcm9tICcuLi8uLi9qcy9yZWFjdG9yL1NpbXBsZVJlYWN0b3InO1xuaW1wb3J0IHtBbm5vdGF0aW9uQmFyQ2FsbGJhY2tzLCBDb21tZW50VHJpZ2dlckV2ZW50LCBPbkNvbW1lbnRDYWxsYmFjaywgT25IaWdobGlnaHRlZENhbGxiYWNrfSBmcm9tICcuLi8uLi9qcy91aS9hbm5vdGF0aW9uYmFyL0Fubm90YXRpb25CYXInO1xuaW1wb3J0IHtDb250cm9sbGVkUG9wdXBQcm9wc30gZnJvbSAnLi4vLi4vanMvdWkvcG9wdXAvQ29udHJvbGxlZFBvcHVwJztcbmltcG9ydCB7Q29tbWVudFBvcHVwQmFyc30gZnJvbSAnLi4vLi4vanMvY29tbWVudHMvcmVhY3QvQ29tbWVudFBvcHVwQmFycyc7XG5pbXBvcnQge0NvbW1lbnRQb3B1cEJhckNhbGxiYWNrc30gZnJvbSAnLi4vLi4vanMvY29tbWVudHMvcmVhY3QvQ29tbWVudFBvcHVwQmFyJztcbmltcG9ydCB7Q29tbWVudENyZWF0ZWRFdmVudH0gZnJvbSAnLi4vLi4vanMvY29tbWVudHMvcmVhY3QvQ29tbWVudENyZWF0ZWRFdmVudCc7XG5pbXBvcnQge0hpZ2hsaWdodENyZWF0ZWRFdmVudH0gZnJvbSAnLi4vLi4vanMvY29tbWVudHMvcmVhY3QvSGlnaGxpZ2h0Q3JlYXRlZEV2ZW50JztcbmltcG9ydCB7UG9wdXBTdGF0ZUV2ZW50fSBmcm9tICcuLi8uLi9qcy91aS9wb3B1cC9Qb3B1cFN0YXRlRXZlbnQnO1xuXG5TcGVjdHJvblJlbmRlcmVyLnJ1bihhc3luYyAoKSA9PiB7XG5cbiAgICBSZWFjdERPTS5yZW5kZXIoXG4gICAgICAgIDxBcHAgLz4sXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykgYXMgSFRNTEVsZW1lbnRcbiAgICApO1xuXG4gICAgY29uc3QgY29tbWVudEJhckNvbnRyb2xsZWRQb3B1cFByb3BzOiBDb250cm9sbGVkUG9wdXBQcm9wcyA9IHtcbiAgICAgICAgaWQ6ICdjb21tZW50YmFyJyxcbiAgICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgICAgcG9wdXBTdGF0ZUV2ZW50RGlzcGF0Y2hlcjogbmV3IFNpbXBsZVJlYWN0b3I8UG9wdXBTdGF0ZUV2ZW50PigpLFxuICAgICAgICB0cmlnZ2VyUG9wdXBFdmVudERpc3BhdGNoZXI6IG5ldyBTaW1wbGVSZWFjdG9yPFRyaWdnZXJQb3B1cEV2ZW50PigpXG4gICAgfTtcblxuICAgIGNvbnN0IGNvbW1lbnRQb3B1cEJhckNhbGxiYWNrczogQ29tbWVudFBvcHVwQmFyQ2FsbGJhY2tzID0ge1xuXG4gICAgICAgIG9uQ29tbWVudDogKGNvbW1lbnRDcmVhdGVkRXZlbnQ6IENvbW1lbnRDcmVhdGVkRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRklYTUU6IGNvbW1lbnQgY3JlYXRlZFwiLCBjb21tZW50Q3JlYXRlZEV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIENvbW1lbnRQb3B1cEJhcnMuY3JlYXRlKGNvbW1lbnRCYXJDb250cm9sbGVkUG9wdXBQcm9wcywgY29tbWVudFBvcHVwQmFyQ2FsbGJhY2tzKTtcblxuICAgIC8vIEZJWE1FOiBqdXN0IHRpZSB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgcG9wdXAgdG8gdGhlIHZpc2libGl0eSBvZiB0aGVcbiAgICAvLyByZWdpb24uLiB3aGVuIHRoZSByZWdpb24gdmFuaXNoZXMgdGhlbiBqdXN0IGNsb3NlIHRoZSBwb3B1cCBPUiB0aGUgdGV4dFxuICAgIC8vIGFyZWEgaXMgY2xvc2Ugb2J2aW91c2x5LlxuXG4gICAgY29uc3QgcG9wdXBTdGF0ZUV2ZW50RGlzcGF0Y2hlciA9IG5ldyBTaW1wbGVSZWFjdG9yPFBvcHVwU3RhdGVFdmVudD4oKTtcbiAgICBjb25zdCB0cmlnZ2VyUG9wdXBFdmVudERpc3BhdGNoZXIgPSBuZXcgU2ltcGxlUmVhY3RvcjxUcmlnZ2VyUG9wdXBFdmVudD4oKTtcblxuICAgIGNvbnN0IGFubm90YXRpb25CYXJDb250cm9sbGVkUG9wdXBQcm9wczogQ29udHJvbGxlZFBvcHVwUHJvcHMgPSB7XG4gICAgICAgIGlkOiAnYW5ub3RhdGlvbmJhcicsXG4gICAgICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgICAgIHBvcHVwU3RhdGVFdmVudERpc3BhdGNoZXIsXG4gICAgICAgIHRyaWdnZXJQb3B1cEV2ZW50RGlzcGF0Y2hlclxuICAgIH07XG5cbiAgICBjb25zdCBvbkNvbW1lbnQ6IE9uQ29tbWVudENhbGxiYWNrID1cbiAgICAgICAgKGNvbW1lbnRUcmlnZ2VyRXZlbnQ6IENvbW1lbnRUcmlnZ2VyRXZlbnQpID0+IHtcblxuICAgICAgICAvLyBjcmVhdGUgdGhlIG5ldyBwb3B1cCBCRUxPVyB0aGUgcmVnaW9uIG5vdy4uLlxuICAgICAgICBjb25zb2xlLmxvZyhcIkdvdCBjb21tZW50IGJ1dHRvbiBjbGlja2VkXCIpO1xuXG4gICAgICAgIGNvbnN0IGFjdGl2ZVNlbGVjdGlvbiA9IGNvbW1lbnRUcmlnZ2VyRXZlbnQuYWN0aXZlU2VsZWN0aW9uO1xuXG4gICAgICAgIGNvbW1lbnRCYXJDb250cm9sbGVkUG9wdXBQcm9wcy50cmlnZ2VyUG9wdXBFdmVudERpc3BhdGNoZXIuZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgICBwb2ludDoge1xuICAgICAgICAgICAgICAgIHg6IGFjdGl2ZVNlbGVjdGlvbi5ib3VuZGluZ0NsaWVudFJlY3QubGVmdCArIChhY3RpdmVTZWxlY3Rpb24uYm91bmRpbmdDbGllbnRSZWN0LndpZHRoIC8gMiksXG4gICAgICAgICAgICAgICAgeTogYWN0aXZlU2VsZWN0aW9uLmJvdW5kaW5nQ2xpZW50UmVjdC5ib3R0b21cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvZmZzZXQ6IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDEwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFnZU51bTogY29tbWVudFRyaWdnZXJFdmVudC5wYWdlTnVtXG5cbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgY29uc3Qgb25IaWdobGlnaHRlZDogT25IaWdobGlnaHRlZENhbGxiYWNrID0gKGhpZ2hsaWdodENyZWF0ZWRFdmVudDogSGlnaGxpZ2h0Q3JlYXRlZEV2ZW50KSA9PiB7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJHb3QgaGlnaGxpZ2h0IVwiLCBoaWdobGlnaHRDcmVhdGVkRXZlbnQpO1xuXG4gICAgfTtcblxuICAgIGNvbnN0IGFubm90YXRpb25CYXJDYWxsYmFja3M6IEFubm90YXRpb25CYXJDYWxsYmFja3MgPSB7XG4gICAgICAgIG9uSGlnaGxpZ2h0ZWQsXG4gICAgICAgIG9uQ29tbWVudFxuICAgIH07XG5cbiAgICBBbm5vdGF0aW9uQmFycy5jcmVhdGUoYW5ub3RhdGlvbkJhckNvbnRyb2xsZWRQb3B1cFByb3BzLCBhbm5vdGF0aW9uQmFyQ2FsbGJhY2tzLCAxKTtcblxufSk7XG5cblxuXG5cblxuXG4iXX0=