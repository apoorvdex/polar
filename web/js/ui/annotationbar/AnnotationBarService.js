"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = require("../../logger/Logger");
const SimpleReactor_1 = require("../../reactor/SimpleReactor");
const CommentPopupBars_1 = require("../../comments/react/CommentPopupBars");
const RendererAnalytics_1 = require("../../ga/RendererAnalytics");
const ControlledAnnotationBars_1 = require("./ControlledAnnotationBars");
const log = Logger_1.Logger.create();
class AnnotationBarService {
    constructor(model) {
        this.model = model;
    }
    start() {
        this.model.registerListenerForDocumentLoaded(event => this.onDocumentLoaded(event));
        document.body.addEventListener('click', event => {
            if (event.target instanceof HTMLElement) {
                const annotationType = event.target.getAttribute('data-annotation-type');
                if (annotationType === 'text-highlight') {
                }
            }
        });
    }
    onClick() {
    }
    onDocumentLoaded(event) {
        log.debug("Creating annotation bar");
        const commentBarControlledPopupProps = {
            id: 'commentbar',
            placement: 'bottom',
            popupStateEventDispatcher: new SimpleReactor_1.SimpleReactor(),
            triggerPopupEventDispatcher: new SimpleReactor_1.SimpleReactor()
        };
        const commentPopupBarCallbacks = {
            onComment: (commentCreatedEvent) => {
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
                pageNum: commentTriggerEvent.pageNum,
                selection: activeSelection.selection,
            });
        };
        const onHighlighted = (highlightCreatedEvent) => {
            RendererAnalytics_1.RendererAnalytics.event({ category: 'annotations', action: 'text-highlight-created-via-annotation-bar' });
            delete highlightCreatedEvent.activeSelection;
            const message = {
                type: 'create-text-highlight',
                value: highlightCreatedEvent
            };
            window.postMessage(message, '*');
        };
        const annotationBarCallbacks = {
            onHighlighted,
            onComment
        };
        ControlledAnnotationBars_1.ControlledAnnotationBars.create(annotationBarControlledPopupProps, annotationBarCallbacks);
    }
}
exports.AnnotationBarService = AnnotationBarService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ub3RhdGlvbkJhclNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBbm5vdGF0aW9uQmFyU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLGdEQUEyQztBQUUzQywrREFBMEQ7QUFJMUQsNEVBQXVFO0FBS3ZFLGtFQUE2RDtBQUM3RCx5RUFBb0U7QUFFcEUsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsb0JBQW9CO0lBSTdCLFlBQVksS0FBWTtRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRU0sS0FBSztRQUNSLElBQUksQ0FBQyxLQUFLLENBQUMsaUNBQWlDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNwRixRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRTtZQUU1QyxJQUFJLEtBQUssQ0FBQyxNQUFNLFlBQVksV0FBVyxFQUFFO2dCQUVyQyxNQUFNLGNBQWMsR0FDZCxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2dCQUV4RCxJQUFJLGNBQWMsS0FBSyxnQkFBZ0IsRUFBRTtpQkFJeEM7YUFFSjtRQUVMLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVPLE9BQU87SUFFZixDQUFDO0lBRU8sZ0JBQWdCLENBQUMsS0FBMEI7UUFDL0MsR0FBRyxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBRXJDLE1BQU0sOEJBQThCLEdBQXlCO1lBQ3pELEVBQUUsRUFBRSxZQUFZO1lBQ2hCLFNBQVMsRUFBRSxRQUFRO1lBQ25CLHlCQUF5QixFQUFFLElBQUksNkJBQWEsRUFBbUI7WUFDL0QsMkJBQTJCLEVBQUUsSUFBSSw2QkFBYSxFQUFxQjtTQUN0RSxDQUFDO1FBRUYsTUFBTSx3QkFBd0IsR0FBNkI7WUFFdkQsU0FBUyxFQUFFLENBQUMsbUJBQXdDLEVBQUUsRUFBRTtZQUN4RCxDQUFDO1NBRUosQ0FBQztRQUVGLG1DQUFnQixDQUFDLE1BQU0sQ0FBQyw4QkFBOEIsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1FBTWxGLE1BQU0seUJBQXlCLEdBQUcsSUFBSSw2QkFBYSxFQUFtQixDQUFDO1FBQ3ZFLE1BQU0sMkJBQTJCLEdBQUcsSUFBSSw2QkFBYSxFQUFxQixDQUFDO1FBRTNFLE1BQU0saUNBQWlDLEdBQXlCO1lBQzVELEVBQUUsRUFBRSxlQUFlO1lBQ25CLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLHlCQUF5QjtZQUN6QiwyQkFBMkI7U0FDOUIsQ0FBQztRQUVGLE1BQU0sU0FBUyxHQUNYLENBQUMsbUJBQXdDLEVBQUUsRUFBRTtZQUV6QyxNQUFNLGVBQWUsR0FBRyxtQkFBbUIsQ0FBQyxlQUFlLENBQUM7WUFFNUQsOEJBQThCLENBQUMsMkJBQTJCLENBQUMsYUFBYSxDQUFDO2dCQUNyRSxLQUFLLEVBQUU7b0JBQ0gsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztvQkFDM0YsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNO2lCQUMvQztnQkFDRCxNQUFNLEVBQUU7b0JBQ0osQ0FBQyxFQUFFLENBQUM7b0JBQ0osQ0FBQyxFQUFFLEVBQUU7aUJBQ1I7Z0JBQ0QsT0FBTyxFQUFFLG1CQUFtQixDQUFDLE9BQU87Z0JBQ3BDLFNBQVMsRUFBRSxlQUFlLENBQUMsU0FBUzthQUV2QyxDQUFDLENBQUM7UUFFUCxDQUFDLENBQUM7UUFFTixNQUFNLGFBQWEsR0FBMEIsQ0FBQyxxQkFBNEMsRUFBRSxFQUFFO1lBRTFGLHFDQUFpQixDQUFDLEtBQUssQ0FBQyxFQUFDLFFBQVEsRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLDJDQUEyQyxFQUFDLENBQUMsQ0FBQztZQUl4RyxPQUFjLHFCQUFzQixDQUFDLGVBQWUsQ0FBQztZQUVyRCxNQUFNLE9BQU8sR0FBd0M7Z0JBQ2pELElBQUksRUFBRSx1QkFBdUI7Z0JBQzdCLEtBQUssRUFBRSxxQkFBcUI7YUFDL0IsQ0FBQztZQUVGLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRXJDLENBQUMsQ0FBQztRQUVGLE1BQU0sc0JBQXNCLEdBQTJCO1lBQ25ELGFBQWE7WUFDYixTQUFTO1NBQ1osQ0FBQztRQUVGLG1EQUF3QixDQUFDLE1BQU0sQ0FBQyxpQ0FBaUMsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO0lBRS9GLENBQUM7Q0FFSjtBQWpIRCxvREFpSEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RvY3VtZW50TG9hZGVkRXZlbnQsIE1vZGVsfSBmcm9tICcuLi8uLi9tb2RlbC9Nb2RlbCc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vLi4vbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0NvbnRyb2xsZWRQb3B1cFByb3BzfSBmcm9tICcuLi9wb3B1cC9Db250cm9sbGVkUG9wdXAnO1xuaW1wb3J0IHtTaW1wbGVSZWFjdG9yfSBmcm9tICcuLi8uLi9yZWFjdG9yL1NpbXBsZVJlYWN0b3InO1xuaW1wb3J0IHtUcmlnZ2VyUG9wdXBFdmVudH0gZnJvbSAnLi4vcG9wdXAvVHJpZ2dlclBvcHVwRXZlbnQnO1xuaW1wb3J0IHtDb21tZW50UG9wdXBCYXJDYWxsYmFja3N9IGZyb20gJy4uLy4uL2NvbW1lbnRzL3JlYWN0L0NvbW1lbnRQb3B1cEJhcic7XG5pbXBvcnQge0NvbW1lbnRDcmVhdGVkRXZlbnR9IGZyb20gJy4uLy4uL2NvbW1lbnRzL3JlYWN0L0NvbW1lbnRDcmVhdGVkRXZlbnQnO1xuaW1wb3J0IHtDb21tZW50UG9wdXBCYXJzfSBmcm9tICcuLi8uLi9jb21tZW50cy9yZWFjdC9Db21tZW50UG9wdXBCYXJzJztcbmltcG9ydCB7QW5ub3RhdGlvbkJhckNhbGxiYWNrcywgQ29tbWVudFRyaWdnZXJFdmVudCwgT25Db21tZW50Q2FsbGJhY2ssIE9uSGlnaGxpZ2h0ZWRDYWxsYmFja30gZnJvbSAnLi9Bbm5vdGF0aW9uQmFyJztcbmltcG9ydCB7SGlnaGxpZ2h0Q3JlYXRlZEV2ZW50fSBmcm9tICcuLi8uLi9jb21tZW50cy9yZWFjdC9IaWdobGlnaHRDcmVhdGVkRXZlbnQnO1xuaW1wb3J0IHtUeXBlZE1lc3NhZ2V9IGZyb20gJy4uLy4uL3V0aWwvVHlwZWRNZXNzYWdlJztcbmltcG9ydCB7UG9wdXBTdGF0ZUV2ZW50fSBmcm9tICcuLi9wb3B1cC9Qb3B1cFN0YXRlRXZlbnQnO1xuaW1wb3J0IHtSZW5kZXJlckFuYWx5dGljc30gZnJvbSAnLi4vLi4vZ2EvUmVuZGVyZXJBbmFseXRpY3MnO1xuaW1wb3J0IHtDb250cm9sbGVkQW5ub3RhdGlvbkJhcnN9IGZyb20gJy4vQ29udHJvbGxlZEFubm90YXRpb25CYXJzJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgY2xhc3MgQW5ub3RhdGlvbkJhclNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBtb2RlbDogTW9kZWw7XG5cbiAgICBjb25zdHJ1Y3Rvcihtb2RlbDogTW9kZWwpIHtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tb2RlbC5yZWdpc3Rlckxpc3RlbmVyRm9yRG9jdW1lbnRMb2FkZWQoZXZlbnQgPT4gdGhpcy5vbkRvY3VtZW50TG9hZGVkKGV2ZW50KSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG5cbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgYW5ub3RhdGlvblR5cGVcbiAgICAgICAgICAgICAgICAgICAgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWFubm90YXRpb24tdHlwZScpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGFubm90YXRpb25UeXBlID09PSAndGV4dC1oaWdobGlnaHQnKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdHJpZ2dlciB0aGUgcG9wdXAgaGVyZSBzbyB3ZSBjYW4gY2hhbmdlIHRoZSB0eXBlcy5cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNsaWNrKCkge1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkRvY3VtZW50TG9hZGVkKGV2ZW50OiBEb2N1bWVudExvYWRlZEV2ZW50KSB7XG4gICAgICAgIGxvZy5kZWJ1ZyhcIkNyZWF0aW5nIGFubm90YXRpb24gYmFyXCIpO1xuXG4gICAgICAgIGNvbnN0IGNvbW1lbnRCYXJDb250cm9sbGVkUG9wdXBQcm9wczogQ29udHJvbGxlZFBvcHVwUHJvcHMgPSB7XG4gICAgICAgICAgICBpZDogJ2NvbW1lbnRiYXInLFxuICAgICAgICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgICAgICAgIHBvcHVwU3RhdGVFdmVudERpc3BhdGNoZXI6IG5ldyBTaW1wbGVSZWFjdG9yPFBvcHVwU3RhdGVFdmVudD4oKSxcbiAgICAgICAgICAgIHRyaWdnZXJQb3B1cEV2ZW50RGlzcGF0Y2hlcjogbmV3IFNpbXBsZVJlYWN0b3I8VHJpZ2dlclBvcHVwRXZlbnQ+KClcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBjb21tZW50UG9wdXBCYXJDYWxsYmFja3M6IENvbW1lbnRQb3B1cEJhckNhbGxiYWNrcyA9IHtcblxuICAgICAgICAgICAgb25Db21tZW50OiAoY29tbWVudENyZWF0ZWRFdmVudDogQ29tbWVudENyZWF0ZWRFdmVudCkgPT4ge1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgQ29tbWVudFBvcHVwQmFycy5jcmVhdGUoY29tbWVudEJhckNvbnRyb2xsZWRQb3B1cFByb3BzLCBjb21tZW50UG9wdXBCYXJDYWxsYmFja3MpO1xuXG4gICAgICAgIC8vIEZJWE1FOiBqdXN0IHRpZSB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgcG9wdXAgdG8gdGhlIHZpc2libGl0eSBvZiB0aGVcbiAgICAgICAgLy8gcmVnaW9uLi4gd2hlbiB0aGUgcmVnaW9uIHZhbmlzaGVzIHRoZW4ganVzdCBjbG9zZSB0aGUgcG9wdXAgT1IgdGhlXG4gICAgICAgIC8vIHRleHQgYXJlYSBpcyBjbG9zZSBvYnZpb3VzbHkuXG5cbiAgICAgICAgY29uc3QgcG9wdXBTdGF0ZUV2ZW50RGlzcGF0Y2hlciA9IG5ldyBTaW1wbGVSZWFjdG9yPFBvcHVwU3RhdGVFdmVudD4oKTtcbiAgICAgICAgY29uc3QgdHJpZ2dlclBvcHVwRXZlbnREaXNwYXRjaGVyID0gbmV3IFNpbXBsZVJlYWN0b3I8VHJpZ2dlclBvcHVwRXZlbnQ+KCk7XG5cbiAgICAgICAgY29uc3QgYW5ub3RhdGlvbkJhckNvbnRyb2xsZWRQb3B1cFByb3BzOiBDb250cm9sbGVkUG9wdXBQcm9wcyA9IHtcbiAgICAgICAgICAgIGlkOiAnYW5ub3RhdGlvbmJhcicsXG4gICAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgICAgICAgICAgcG9wdXBTdGF0ZUV2ZW50RGlzcGF0Y2hlcixcbiAgICAgICAgICAgIHRyaWdnZXJQb3B1cEV2ZW50RGlzcGF0Y2hlclxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9uQ29tbWVudDogT25Db21tZW50Q2FsbGJhY2sgPVxuICAgICAgICAgICAgKGNvbW1lbnRUcmlnZ2VyRXZlbnQ6IENvbW1lbnRUcmlnZ2VyRXZlbnQpID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGl2ZVNlbGVjdGlvbiA9IGNvbW1lbnRUcmlnZ2VyRXZlbnQuYWN0aXZlU2VsZWN0aW9uO1xuXG4gICAgICAgICAgICAgICAgY29tbWVudEJhckNvbnRyb2xsZWRQb3B1cFByb3BzLnRyaWdnZXJQb3B1cEV2ZW50RGlzcGF0Y2hlci5kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGFjdGl2ZVNlbGVjdGlvbi5ib3VuZGluZ0NsaWVudFJlY3QubGVmdCArIChhY3RpdmVTZWxlY3Rpb24uYm91bmRpbmdDbGllbnRSZWN0LndpZHRoIC8gMiksXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBhY3RpdmVTZWxlY3Rpb24uYm91bmRpbmdDbGllbnRSZWN0LmJvdHRvbVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiAxMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBwYWdlTnVtOiBjb21tZW50VHJpZ2dlckV2ZW50LnBhZ2VOdW0sXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbjogYWN0aXZlU2VsZWN0aW9uLnNlbGVjdGlvbixcblxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9uSGlnaGxpZ2h0ZWQ6IE9uSGlnaGxpZ2h0ZWRDYWxsYmFjayA9IChoaWdobGlnaHRDcmVhdGVkRXZlbnQ6IEhpZ2hsaWdodENyZWF0ZWRFdmVudCkgPT4ge1xuXG4gICAgICAgICAgICBSZW5kZXJlckFuYWx5dGljcy5ldmVudCh7Y2F0ZWdvcnk6ICdhbm5vdGF0aW9ucycsIGFjdGlvbjogJ3RleHQtaGlnaGxpZ2h0LWNyZWF0ZWQtdmlhLWFubm90YXRpb24tYmFyJ30pO1xuXG4gICAgICAgICAgICAvLyBUT0RPOiB0aGlzIGlzIGp1c3QgYSBoYWNrIGZvciBub3cuICBXZSBzaG91bGQgc2VuZCBhIGRlZGljYXRlZFxuICAgICAgICAgICAgLy8gb2JqZWN0LlxuICAgICAgICAgICAgZGVsZXRlICg8YW55PiBoaWdobGlnaHRDcmVhdGVkRXZlbnQpLmFjdGl2ZVNlbGVjdGlvbjtcblxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZTogVHlwZWRNZXNzYWdlPEhpZ2hsaWdodENyZWF0ZWRFdmVudD4gPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2NyZWF0ZS10ZXh0LWhpZ2hsaWdodCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGhpZ2hsaWdodENyZWF0ZWRFdmVudFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKG1lc3NhZ2UsICcqJyk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBhbm5vdGF0aW9uQmFyQ2FsbGJhY2tzOiBBbm5vdGF0aW9uQmFyQ2FsbGJhY2tzID0ge1xuICAgICAgICAgICAgb25IaWdobGlnaHRlZCxcbiAgICAgICAgICAgIG9uQ29tbWVudFxuICAgICAgICB9O1xuXG4gICAgICAgIENvbnRyb2xsZWRBbm5vdGF0aW9uQmFycy5jcmVhdGUoYW5ub3RhdGlvbkJhckNvbnRyb2xsZWRQb3B1cFByb3BzLCBhbm5vdGF0aW9uQmFyQ2FsbGJhY2tzKTtcblxuICAgIH1cblxufVxuIl19