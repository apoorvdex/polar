import {Point} from '../../Point';
import {MouseDirection} from './Popup';
import {Simulate} from 'react-dom/test-utils';
import mouseMove = Simulate.mouseMove;
import {Logger} from '../../logger/Logger';
import {isPresent} from '../../Preconditions';
import {Selections} from '../../highlights/text/selection/Selections';
import {Ranges} from '../../highlights/text/selection/Ranges';

const log = Logger.create();
declare var document: any;
declare var window: any;

/**
 * Listens for when a new text selection has been created
 */
export class ActiveSelections {

    public static addEventListener(listener: ActiveSelectionListener,
                                   target: HTMLElement = document.body): void {

        let originPoint: Point | undefined;

        let activeSelection: ActiveSelection | undefined;

        type EventFired = 'none' | 'created' | 'updated' | 'destroyed';

        let eventFired: EventFired = 'none';

        // TODO: this code has the following known issues:
        //
        // - when leaving and reentering the target and releasing the mouse
        //   we don't detect this and don't bring up the selection when the mouse
        //   enters again.  I think this could be mitigated
        //
        // - if we click outside of the main iframe then we don't get the follow
        //   on events.

        const handleDestroyedSelection = () => {

            listener({...activeSelection!, type: 'destroyed'});
            activeSelection = undefined;

            eventFired = 'destroyed';

        };

        target.addEventListener('mousedown', (event: MouseEvent) => {

            if (!activeSelection) {
                originPoint = this.eventToPoint(event);
            }

        });

        target.addEventListener('click', (event: MouseEvent) => {
            if (document.getElementsByClassName('popover show bs-popover-bottom') &&
                document.getElementsByClassName('popover show bs-popover-bottom').length) {
                document.getElementsByClassName('popover show bs-popover-bottom')[0].parentElement.remove();
            }
            // TODO: find better way to reset search
            if (window.PDFViewerApplication.findController.state &&
                window.PDFViewerApplication.findController.state.query) {
                window.PDFViewerApplication.findController.executeCommand('find', {
                    caseSensitive: false,
                    findPrevious: undefined,
                    highlightAll: false,
                    phraseSearch: false,
                    query: ""
                });
            }
            if (event.target instanceof HTMLElement) {

                const annotationType
                    = event.target.getAttribute('data-annotation-type');

                if (annotationType === 'text-highlight') {
                    // trigger the popup here so we can change the types.
                    const handleMouseEvent = () => {

                        let hasActiveTextSelection: boolean = false;
                        eventFired = 'none';

                        try {

                            const view: Window = event.view;
                            const selection = view.getSelection();

                            hasActiveTextSelection = this.hasActiveTextSelection(selection);

                            const point = this.eventToPoint(event);
                            const element = this.targetElementForEvent(event);

                            if (!element) {
                                log.warn("No target element: ", event.target);
                                return;
                            }

                            if (activeSelection) {
                                handleDestroyedSelection();
                            }

                            // if (hasActiveTextSelection) {

                            const mouseDirection: MouseDirection = point.y - originPoint!.y < 0 ? 'up' : 'down';

                            const range = selection.getRangeAt(0);
                            if (!event.srcElement) {
                                return;
                            }
                            const boundingClientRect: ClientRect = event.srcElement.getBoundingClientRect();

                            // const boundingClientRect = range.getBoundingClientRect();

                            activeSelection = {
                                element,
                                originPoint: originPoint!,
                                mouseDirection,
                                boundingClientRect,
                                selection,
                                view,
                                type: 'updated'
                            };

                            listener(activeSelection);

                            eventFired = 'updated';

                            // }

                        } finally {
                            // console.log(`mouseup: hasActiveTextSelection: ${hasActiveTextSelection}, eventFired: ${eventFired}`);
                        }

                    };

                    this.withTimeout(() => handleMouseEvent());

                }

            }

        });

        target.addEventListener('mouseup', (event: MouseEvent) => {

            const handleMouseEvent = () => {

                let hasActiveTextSelection: boolean = false;
                eventFired = 'none';

                try {

                    const view: Window = event.view;
                    const selection = view.getSelection();

                    hasActiveTextSelection = this.hasActiveTextSelection(selection);

                    const point = this.eventToPoint(event);
                    const element = this.targetElementForEvent(event);

                    if (!element) {
                        log.warn("No target element: ", event.target);
                        return;
                    }

                    if (activeSelection) {
                        handleDestroyedSelection();
                    }

                    if (hasActiveTextSelection) {

                        const mouseDirection: MouseDirection = point.y - originPoint!.y < 0 ? 'up' : 'down';

                        const range = selection.getRangeAt(0);

                        const boundingClientRect = range.getBoundingClientRect();

                        activeSelection = {
                            element,
                            originPoint: originPoint!,
                            mouseDirection,
                            boundingClientRect,
                            selection,
                            view,
                            type: 'created'
                        };

                        listener(activeSelection);

                        eventFired = 'created';

                    }

                } finally {
                    // console.log(`mouseup: hasActiveTextSelection: ${hasActiveTextSelection}, eventFired: ${eventFired}`);
                }

            };

            this.withTimeout(() => handleMouseEvent());

        });

        // TODO: I played with closing the annotation bar on right click but
        // it was difficult to setup. It had the following problems:
        //
        //
        // 1. When the selection was active, and we right click, the selection
        //    does not go away.  Which means that the annotation bar should still
        //    be up.
        //
        // 2. There was inconsistent behavior.  If we right click then the
        //    selection goes away if we click outside but stays if we click inside
        //    the selection.
        //
        //  3. This isn't a MASSIVE problem so probably shouldn't spend much time
        //    on it.

        // target.addEventListener('contextmenu', (event: MouseEvent) => {
        //
        //     const handleMouseEvent = () => {
        //
        //         if (activeSelection) {
        //             handleDestroyedSelection();
        //         }
        //
        //     };
        //
        //     this.withTimeout(() => handleMouseEvent());
        //
        // });

    }

    // needs to be called via setTimeout becuase if we click 'on' the
    // selection there's a bug where the selection is still present and
    // isn't removed.  Allowing the event to complete by taking this
    // event handler and pushing it on the event queue allows the
    // selection to be removed by the default handler once it bubbles
    // up.
    private static withTimeout(callback: () => void) {
        setTimeout(() => callback(), 1);
    }

    public static targetElementForEvent(event: MouseEvent): HTMLElement | undefined {

        if (event.target instanceof Node) {

            if (event.target instanceof HTMLElement) {
                return event.target;
            } else {
                return event.target.parentElement!;
            }

        } else {
            log.warn("Event target is not node: ", event.target);
        }

        return undefined;

    }

    private static hasActiveTextSelection(selection: Selection) {

        const ranges = Selections.toRanges(selection);

        for (const range of ranges) {
            if (Ranges.hasText(range)) {
                return true;
            }
        }

        return false;

    }

    public static eventToPoint(event: MouseEvent) {

        return {
            x: event.offsetX,
            y: event.offsetY
        };

    }


}

export interface ActiveSelectionListener {
    // noinspection TsLint
    (event: ActiveSelectionEvent): void;
}


export interface ActiveSelection {

    readonly element: HTMLElement;
    readonly originPoint: Point;
    readonly mouseDirection: MouseDirection;
    readonly boundingClientRect: ClientRect | DOMRect;

    /**
     * The actual selection object that we're working with.
     */
    readonly selection: Selection;

    readonly view: Window;

    readonly type: ActiveSelectionType;

    itlsData?: any;

}

export type ActiveSelectionType = 'created' | 'destroyed' | 'updated';

export interface ActiveSelectionEvent extends ActiveSelection {

}
