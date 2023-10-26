"use strict";
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
const React = __importStar(require("react"));
const AnnotationSidebars_1 = require("./AnnotationSidebars");
const react_moment_1 = __importDefault(require("react-moment"));
const Refs_1 = require("../metadata/Refs");
const AnnotationFlashcardBox_1 = require("./flashcard_input/AnnotationFlashcardBox");
const Flashcards_1 = require("../metadata/Flashcards");
const AnnotationDropdown_1 = require("./AnnotationDropdown");
const AnnotationType_1 = require("../metadata/AnnotationType");
const reactstrap_1 = require("reactstrap");
const RendererAnalytics_1 = require("../ga/RendererAnalytics");
const CommentIcon_1 = require("../ui/standard_icons/CommentIcon");
const FlashcardIcon_1 = require("../ui/standard_icons/FlashcardIcon");
const FlashcardType_1 = require("../metadata/FlashcardType");
const Functions_1 = require("../util/Functions");
const Logger_1 = require("../logger/Logger");
const NullCollapse_1 = require("../ui/null_collapse/NullCollapse");
const CreateComment_1 = require("./child_annotations/comments/CreateComment");
const CommentActions_1 = require("./child_annotations/comments/CommentActions");
const log = Logger_1.Logger.create();
const Styles = {
    button: {
        paddingTop: '4px',
        color: 'red !important',
        fontSize: '15px'
    },
    barBody: {
        display: 'flex'
    },
    barChild: {
        marginTop: 'auto',
        marginBottom: 'auto',
    }
};
class AnnotationControlBar extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onComment = this.onComment.bind(this);
        this.state = {
            activeInputComponent: 'none'
        };
    }
    render() {
        const { annotation } = this.props;
        return (React.createElement("div", { className: "annotation-control-bar" },
            React.createElement("div", { style: Styles.barBody, className: "flexbar annotation-buttons border-top pt-1 pb-2" },
                React.createElement("div", { style: Styles.barChild, className: "text-muted annotation-context-link" },
                    React.createElement("a", { href: "#", onClick: () => this.onJumpToContext(annotation) },
                        React.createElement(react_moment_1.default, { withTitle: true, titleFormat: "D MMM YYYY hh:MM A", fromNow: true }, annotation.created))),
                React.createElement("div", { style: Styles.barChild, className: "flexbar-right" },
                    React.createElement(reactstrap_1.Button, { className: "text-muted p-1", title: "Create comment", size: "sm", color: "light", style: Styles.button, onClick: () => this.toggleActiveInputComponent('comment') },
                        React.createElement(CommentIcon_1.CommentIcon, null)),
                    React.createElement(reactstrap_1.Button, { className: "ml-1 text-muted p-1", title: "Create flashcard", style: Styles.button, size: "sm", color: "light", onClick: () => this.toggleActiveInputComponent('flashcard') },
                        React.createElement(FlashcardIcon_1.FlashcardIcon, null)),
                    React.createElement("div", { className: "ml-1" },
                        React.createElement(AnnotationDropdown_1.AnnotationDropdown, { id: 'annotation-dropdown-' + annotation.id, annotation: annotation, onDelete: () => this.onDelete(annotation), onCreateComment: () => this.toggleActiveInputComponent('comment'), onCreateFlashcard: () => this.toggleActiveInputComponent('flashcard'), onJumpToContext: () => this.onJumpToContext(annotation) })))),
            React.createElement(CreateComment_1.CreateComment, { id: annotation.id, active: this.state.activeInputComponent === 'comment', onCancel: () => this.toggleActiveInputComponent('none'), onComment: (html) => this.onComment(html) }),
            React.createElement(NullCollapse_1.NullCollapse, { open: this.state.activeInputComponent === 'flashcard' },
                React.createElement(AnnotationFlashcardBox_1.AnnotationFlashcardBox, { id: annotation.id, onCancel: () => this.toggleActiveInputComponent('none'), onFlashcardCreated: (type, fields) => this.onFlashcardCreated(type, fields) }))));
    }
    onDelete(annotation) {
        if (annotation.annotationType === AnnotationType_1.AnnotationType.TEXT_HIGHLIGHT) {
            delete annotation.pageMeta.textHighlights[annotation.id];
        }
        if (annotation.annotationType === AnnotationType_1.AnnotationType.AREA_HIGHLIGHT) {
            delete annotation.pageMeta.areaHighlights[annotation.id];
        }
    }
    onJumpToContext(annotation) {
        AnnotationSidebars_1.AnnotationSidebars.scrollToAnnotation(annotation.id, annotation.pageNum);
    }
    toggleActiveInputComponent(activeInputComponent) {
        this.setState({
            activeInputComponent: this.state.activeInputComponent === activeInputComponent ? 'none' : activeInputComponent
        });
    }
    onComment(html, existingComment) {
        RendererAnalytics_1.RendererAnalytics.event({ category: 'annotations', action: 'comment-created' });
        const { annotation } = this.props;
        CommentActions_1.CommentActions.create(annotation, html);
        this.setState({
            activeInputComponent: 'none'
        });
    }
    onFlashcardCreated(type, fields) {
        RendererAnalytics_1.RendererAnalytics.event({ category: 'annotations', action: 'flashcard-created' });
        this.setState({
            activeInputComponent: 'none'
        });
        Functions_1.Functions.withTimeout(() => {
            const { annotation } = this.props;
            const ref = Refs_1.Refs.createFromAnnotationType(annotation.id, annotation.annotationType);
            let flashcard;
            if (type === FlashcardType_1.FlashcardType.BASIC_FRONT_BACK) {
                const frontAndBackFields = fields;
                const { front, back } = frontAndBackFields;
                flashcard = Flashcards_1.Flashcards.createFrontBack(front, back, ref);
            }
            if (type === FlashcardType_1.FlashcardType.CLOZE) {
                const clozeFields = fields;
                const { text } = clozeFields;
                flashcard = Flashcards_1.Flashcards.createCloze(text, ref);
            }
            if (flashcard) {
                annotation.pageMeta.flashcards[flashcard.id] = Flashcards_1.Flashcards.createMutable(flashcard);
            }
        }).catch(err => log.error(err));
    }
}
exports.AnnotationControlBar = AnnotationControlBar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ub3RhdGlvbkNvbnRyb2xCYXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBbm5vdGF0aW9uQ29udHJvbEJhci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBRS9CLDZEQUF3RDtBQUN4RCxnRUFBa0M7QUFDbEMsMkNBQXNDO0FBQ3RDLHFGQUFnRjtBQUNoRix1REFBa0Q7QUFFbEQsNkRBQXdEO0FBQ3hELCtEQUEwRDtBQUMxRCwyQ0FBa0M7QUFDbEMsK0RBQTBEO0FBQzFELGtFQUE2RDtBQUM3RCxzRUFBaUU7QUFDakUsNkRBQXdEO0FBRXhELGlEQUE0QztBQUU1Qyw2Q0FBd0M7QUFDeEMsbUVBQThEO0FBRTlELDhFQUF5RTtBQUN6RSxnRkFBMkU7QUFFM0UsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQU0sTUFBTSxHQUFjO0lBRXRCLE1BQU0sRUFBRTtRQUNKLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLEtBQUssRUFBRSxnQkFBZ0I7UUFDdkIsUUFBUSxFQUFFLE1BQU07S0FJbkI7SUFFRCxPQUFPLEVBQUU7UUFDTCxPQUFPLEVBQUUsTUFBTTtLQUNsQjtJQUVELFFBQVEsRUFBRTtRQUNOLFNBQVMsRUFBRSxNQUFNO1FBQ2pCLFlBQVksRUFBRSxNQUFNO0tBQ3ZCO0NBRUosQ0FBQztBQUlGLE1BQWEsb0JBQXFCLFNBQVEsS0FBSyxDQUFDLFNBQXlCO0lBRXJFLFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTNDLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxvQkFBb0IsRUFBRSxNQUFNO1NBQy9CLENBQUM7SUFFTixDQUFDO0lBRU0sTUFBTTtRQUNULE1BQU0s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QyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRXBDLENBQUM7Q0FFSjtBQXJMRCxvREFxTEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0RvY0Fubm90YXRpb259IGZyb20gJy4vRG9jQW5ub3RhdGlvbic7XG5pbXBvcnQge0Fubm90YXRpb25TaWRlYmFyc30gZnJvbSAnLi9Bbm5vdGF0aW9uU2lkZWJhcnMnO1xuaW1wb3J0IE1vbWVudCBmcm9tICdyZWFjdC1tb21lbnQnO1xuaW1wb3J0IHtSZWZzfSBmcm9tICcuLi9tZXRhZGF0YS9SZWZzJztcbmltcG9ydCB7QW5ub3RhdGlvbkZsYXNoY2FyZEJveH0gZnJvbSAnLi9mbGFzaGNhcmRfaW5wdXQvQW5ub3RhdGlvbkZsYXNoY2FyZEJveCc7XG5pbXBvcnQge0ZsYXNoY2FyZHN9IGZyb20gJy4uL21ldGFkYXRhL0ZsYXNoY2FyZHMnO1xuaW1wb3J0IHtJU3R5bGVNYXB9IGZyb20gJy4uL3JlYWN0L0lTdHlsZU1hcCc7XG5pbXBvcnQge0Fubm90YXRpb25Ecm9wZG93bn0gZnJvbSAnLi9Bbm5vdGF0aW9uRHJvcGRvd24nO1xuaW1wb3J0IHtBbm5vdGF0aW9uVHlwZX0gZnJvbSAnLi4vbWV0YWRhdGEvQW5ub3RhdGlvblR5cGUnO1xuaW1wb3J0IHtCdXR0b259IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IHtSZW5kZXJlckFuYWx5dGljc30gZnJvbSAnLi4vZ2EvUmVuZGVyZXJBbmFseXRpY3MnO1xuaW1wb3J0IHtDb21tZW50SWNvbn0gZnJvbSAnLi4vdWkvc3RhbmRhcmRfaWNvbnMvQ29tbWVudEljb24nO1xuaW1wb3J0IHtGbGFzaGNhcmRJY29ufSBmcm9tICcuLi91aS9zdGFuZGFyZF9pY29ucy9GbGFzaGNhcmRJY29uJztcbmltcG9ydCB7Rmxhc2hjYXJkVHlwZX0gZnJvbSAnLi4vbWV0YWRhdGEvRmxhc2hjYXJkVHlwZSc7XG5pbXBvcnQge0ZsYXNoY2FyZH0gZnJvbSAnLi4vbWV0YWRhdGEvRmxhc2hjYXJkJztcbmltcG9ydCB7RnVuY3Rpb25zfSBmcm9tICcuLi91dGlsL0Z1bmN0aW9ucyc7XG5pbXBvcnQge0Nsb3plRmllbGRzLCBGcm9udEFuZEJhY2tGaWVsZHN9IGZyb20gJy4vZmxhc2hjYXJkX2lucHV0L0ZsYXNoY2FyZElucHV0JztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7TnVsbENvbGxhcHNlfSBmcm9tICcuLi91aS9udWxsX2NvbGxhcHNlL051bGxDb2xsYXBzZSc7XG5pbXBvcnQge0NvbW1lbnR9IGZyb20gXCIuLi9tZXRhZGF0YS9Db21tZW50XCI7XG5pbXBvcnQge0NyZWF0ZUNvbW1lbnR9IGZyb20gXCIuL2NoaWxkX2Fubm90YXRpb25zL2NvbW1lbnRzL0NyZWF0ZUNvbW1lbnRcIjtcbmltcG9ydCB7Q29tbWVudEFjdGlvbnN9IGZyb20gXCIuL2NoaWxkX2Fubm90YXRpb25zL2NvbW1lbnRzL0NvbW1lbnRBY3Rpb25zXCI7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuY29uc3QgU3R5bGVzOiBJU3R5bGVNYXAgPSB7XG5cbiAgICBidXR0b246IHtcbiAgICAgICAgcGFkZGluZ1RvcDogJzRweCcsXG4gICAgICAgIGNvbG9yOiAncmVkICFpbXBvcnRhbnQnLFxuICAgICAgICBmb250U2l6ZTogJzE1cHgnXG5cbiAgICAgICAgLy8gbWluV2lkdGg6ICczNTBweCcsXG4gICAgICAgIC8vIHdpZHRoOiAnMzUwcHgnXG4gICAgfSxcblxuICAgIGJhckJvZHk6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnXG4gICAgfSxcblxuICAgIGJhckNoaWxkOiB7XG4gICAgICAgIG1hcmdpblRvcDogJ2F1dG8nLFxuICAgICAgICBtYXJnaW5Cb3R0b206ICdhdXRvJyxcbiAgICB9XG5cbn07XG5cbi8qKlxuICovXG5leHBvcnQgY2xhc3MgQW5ub3RhdGlvbkNvbnRyb2xCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5vbkNvbW1lbnQgPSB0aGlzLm9uQ29tbWVudC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhY3RpdmVJbnB1dENvbXBvbmVudDogJ25vbmUnXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGFubm90YXRpb24gfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbm5vdGF0aW9uLWNvbnRyb2wtYmFyXCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtTdHlsZXMuYmFyQm9keX1cbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXhiYXIgYW5ub3RhdGlvbi1idXR0b25zIGJvcmRlci10b3AgcHQtMSBwYi0yXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17U3R5bGVzLmJhckNoaWxkfVxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgYW5ub3RhdGlvbi1jb250ZXh0LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKlRPRE86IG1ha2UgdGhpcyBpbnRvIGl0cyBvd24gY29tcG9uZW50Li4uICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uSnVtcFRvQ29udGV4dChhbm5vdGF0aW9uKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vbWVudCB3aXRoVGl0bGU9e3RydWV9IHRpdGxlRm9ybWF0PVwiRCBNTU0gWVlZWSBoaDpNTSBBXCIgZnJvbU5vdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Fubm90YXRpb24uY3JlYXRlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01vbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17U3R5bGVzLmJhckNoaWxkfVxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXhiYXItcmlnaHRcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgey8qVE9ETzogbWFrZSB0aGVzZSBhIGJ1dHRvbiB3aXRoIGEgJ2xpZ2h0JyBjb2xvciBhbmQgc2l6ZSBvZiAnc20nKi99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBwLTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkNyZWF0ZSBjb21tZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtTdHlsZXMuYnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnRvZ2dsZUFjdGl2ZUlucHV0Q29tcG9uZW50KCdjb21tZW50Jyl9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1lbnRJY29uLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwibWwtMSB0ZXh0LW11dGVkIHAtMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQ3JlYXRlIGZsYXNoY2FyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtTdHlsZXMuYnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy50b2dnbGVBY3RpdmVJbnB1dENvbXBvbmVudCgnZmxhc2hjYXJkJyl9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsYXNoY2FyZEljb24vPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFubm90YXRpb25Ecm9wZG93biBpZD17J2Fubm90YXRpb24tZHJvcGRvd24tJyArIGFubm90YXRpb24uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbm5vdGF0aW9uPXthbm5vdGF0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EZWxldGU9eygpID0+IHRoaXMub25EZWxldGUoYW5ub3RhdGlvbil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNyZWF0ZUNvbW1lbnQ9eygpID0+IHRoaXMudG9nZ2xlQWN0aXZlSW5wdXRDb21wb25lbnQoJ2NvbW1lbnQnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ3JlYXRlRmxhc2hjYXJkPXsoKSA9PiB0aGlzLnRvZ2dsZUFjdGl2ZUlucHV0Q29tcG9uZW50KCdmbGFzaGNhcmQnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSnVtcFRvQ29udGV4dD17KCkgPT4gdGhpcy5vbkp1bXBUb0NvbnRleHQoYW5ub3RhdGlvbil9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8Q3JlYXRlQ29tbWVudCBpZD17YW5ub3RhdGlvbi5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3RoaXMuc3RhdGUuYWN0aXZlSW5wdXRDb21wb25lbnQgPT09ICdjb21tZW50J31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4gdGhpcy50b2dnbGVBY3RpdmVJbnB1dENvbXBvbmVudCgnbm9uZScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29tbWVudD17KGh0bWwpID0+IHRoaXMub25Db21tZW50KGh0bWwpfS8+XG5cbiAgICAgICAgICAgICAgICA8TnVsbENvbGxhcHNlIG9wZW49e3RoaXMuc3RhdGUuYWN0aXZlSW5wdXRDb21wb25lbnQgPT09ICdmbGFzaGNhcmQnfT5cblxuICAgICAgICAgICAgICAgICAgICA8QW5ub3RhdGlvbkZsYXNoY2FyZEJveCBpZD17YW5ub3RhdGlvbi5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9eygpID0+IHRoaXMudG9nZ2xlQWN0aXZlSW5wdXRDb21wb25lbnQoJ25vbmUnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25GbGFzaGNhcmRDcmVhdGVkPXsodHlwZSwgZmllbGRzKSA9PiB0aGlzLm9uRmxhc2hjYXJkQ3JlYXRlZCh0eXBlLCBmaWVsZHMpfS8+XG5cbiAgICAgICAgICAgICAgICA8L051bGxDb2xsYXBzZT5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRGVsZXRlKGFubm90YXRpb246IERvY0Fubm90YXRpb24pIHtcblxuICAgICAgICBpZiAoYW5ub3RhdGlvbi5hbm5vdGF0aW9uVHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuVEVYVF9ISUdITElHSFQpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBhbm5vdGF0aW9uLnBhZ2VNZXRhLnRleHRIaWdobGlnaHRzW2Fubm90YXRpb24uaWRdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFubm90YXRpb24uYW5ub3RhdGlvblR5cGUgPT09IEFubm90YXRpb25UeXBlLkFSRUFfSElHSExJR0hUKSB7XG4gICAgICAgICAgICBkZWxldGUgYW5ub3RhdGlvbi5wYWdlTWV0YS5hcmVhSGlnaGxpZ2h0c1thbm5vdGF0aW9uLmlkXTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkp1bXBUb0NvbnRleHQoYW5ub3RhdGlvbjogRG9jQW5ub3RhdGlvbikge1xuICAgICAgICBBbm5vdGF0aW9uU2lkZWJhcnMuc2Nyb2xsVG9Bbm5vdGF0aW9uKGFubm90YXRpb24uaWQsIGFubm90YXRpb24ucGFnZU51bSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0b2dnbGVBY3RpdmVJbnB1dENvbXBvbmVudChhY3RpdmVJbnB1dENvbXBvbmVudDogQWN0aXZlSW5wdXRDb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmVJbnB1dENvbXBvbmVudDogdGhpcy5zdGF0ZS5hY3RpdmVJbnB1dENvbXBvbmVudCA9PT0gYWN0aXZlSW5wdXRDb21wb25lbnQgPyAnbm9uZScgOiBhY3RpdmVJbnB1dENvbXBvbmVudFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ29tbWVudChodG1sOiBzdHJpbmcsIGV4aXN0aW5nQ29tbWVudD86IENvbW1lbnQpIHtcblxuICAgICAgICBSZW5kZXJlckFuYWx5dGljcy5ldmVudCh7Y2F0ZWdvcnk6ICdhbm5vdGF0aW9ucycsIGFjdGlvbjogJ2NvbW1lbnQtY3JlYXRlZCd9KTtcblxuICAgICAgICAvLyBzYW5pdGl6ZSB0aGUgSFRNTCBmaXJzdCB0byBwcmV2ZW50IGJyZWFraW5nIHRoZSBET00gYW5kIG90aGVyXG4gICAgICAgIC8vIHByb2JsZW1hdGljIGlzc3VlcyB3aXRoIEhUTUwuICBSaWdodCBub3cgd2UgZG9uJ3QgaGFuZGxlIGFueSB0eXBlIG9mXG4gICAgICAgIC8vIFhTUyB0aG91Z2hcblxuICAgICAgICAvLyBUT0RPOiByaWdodCBub3cgaXQgc2VlbXMgdG8gc3RyaXAgaW1wb3J0YW50IENTUyBzdHlsZXMgYW5kIGRhdGEgVVJMc1xuICAgICAgICAvLyB3aGljaCBJIG5lZWQgdG8gZml4IGluIHRoZSBIVE1MIHNhbml0aXplci5cbiAgICAgICAgLy8gaHRtbCA9IEhUTUxTYW5pdGl6ZXIuc2FuaXRpemUoaHRtbCk7XG5cbiAgICAgICAgY29uc3Qge2Fubm90YXRpb259ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBDb21tZW50QWN0aW9ucy5jcmVhdGUoYW5ub3RhdGlvbiwgaHRtbCk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmVJbnB1dENvbXBvbmVudDogJ25vbmUnXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkZsYXNoY2FyZENyZWF0ZWQodHlwZTogRmxhc2hjYXJkVHlwZSwgZmllbGRzOiBGcm9udEFuZEJhY2tGaWVsZHMgfCBDbG96ZUZpZWxkcykge1xuXG4gICAgICAgIFJlbmRlcmVyQW5hbHl0aWNzLmV2ZW50KHtjYXRlZ29yeTogJ2Fubm90YXRpb25zJywgYWN0aW9uOiAnZmxhc2hjYXJkLWNyZWF0ZWQnfSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmVJbnB1dENvbXBvbmVudDogJ25vbmUnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIEZ1bmN0aW9ucy53aXRoVGltZW91dCgoKSA9PiB7XG5cbiAgICAgICAgICAgIC8vIFRPRE86IHJpZ2h0IG5vdyBpdCBzZWVtcyB0byBzdHJpcCBpbXBvcnRhbnQgQ1NTIHN0eWxlcyBhbmQgZGF0YVxuICAgICAgICAgICAgLy8gVVJMcyB3aGljaCBJIG5lZWQgdG8gZml4IGluIHRoZSBIVE1MIHNhbml0aXplci4gaHRtbCA9XG4gICAgICAgICAgICAvLyBIVE1MU2FuaXRpemVyLnNhbml0aXplKGh0bWwpO1xuXG4gICAgICAgICAgICBjb25zdCB7YW5ub3RhdGlvbn0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgICAgICBjb25zdCByZWYgPSBSZWZzLmNyZWF0ZUZyb21Bbm5vdGF0aW9uVHlwZShhbm5vdGF0aW9uLmlkLCBhbm5vdGF0aW9uLmFubm90YXRpb25UeXBlKTtcblxuICAgICAgICAgICAgbGV0IGZsYXNoY2FyZDogRmxhc2hjYXJkIHwgdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gRmxhc2hjYXJkVHlwZS5CQVNJQ19GUk9OVF9CQUNLKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBmcm9udEFuZEJhY2tGaWVsZHMgPSBmaWVsZHMgYXMgRnJvbnRBbmRCYWNrRmllbGRzO1xuICAgICAgICAgICAgICAgIGNvbnN0IHtmcm9udCwgYmFja30gPSBmcm9udEFuZEJhY2tGaWVsZHM7XG5cbiAgICAgICAgICAgICAgICBmbGFzaGNhcmQgPSBGbGFzaGNhcmRzLmNyZWF0ZUZyb250QmFjayhmcm9udCwgYmFjaywgcmVmKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gRmxhc2hjYXJkVHlwZS5DTE9aRSkge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY2xvemVGaWVsZHMgPSBmaWVsZHMgYXMgQ2xvemVGaWVsZHM7XG4gICAgICAgICAgICAgICAgY29uc3Qge3RleHR9ID0gY2xvemVGaWVsZHM7XG5cbiAgICAgICAgICAgICAgICBmbGFzaGNhcmQgPSBGbGFzaGNhcmRzLmNyZWF0ZUNsb3plKHRleHQsIHJlZik7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZsYXNoY2FyZCkge1xuICAgICAgICAgICAgICAgIGFubm90YXRpb24ucGFnZU1ldGEuZmxhc2hjYXJkc1tmbGFzaGNhcmQuaWRdID0gRmxhc2hjYXJkcy5jcmVhdGVNdXRhYmxlKGZsYXNoY2FyZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihlcnIpKTtcblxuICAgIH1cblxufVxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgYW5ub3RhdGlvbjogRG9jQW5ub3RhdGlvbjtcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gICAgYWN0aXZlSW5wdXRDb21wb25lbnQ6IEFjdGl2ZUlucHV0Q29tcG9uZW50O1xufVxuXG50eXBlIEFjdGl2ZUlucHV0Q29tcG9uZW50ID0gJ25vbmUnIHwgJ2NvbW1lbnQnIHwgJ2ZsYXNoY2FyZCc7XG4iXX0=