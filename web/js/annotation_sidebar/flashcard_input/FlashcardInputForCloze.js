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
const Logger_1 = require("../../logger/Logger");
const Button_1 = __importDefault(require("reactstrap/lib/Button"));
const FlashcardType_1 = require("../../metadata/FlashcardType");
const FlashcardButtons_1 = require("./FlashcardButtons");
const FlashcardTypeSelector_1 = require("./FlashcardTypeSelector");
const RichTextArea_1 = require("../RichTextArea");
const FlashcardInput_1 = require("./FlashcardInput");
const reactstrap_1 = require("reactstrap");
const Ranges_1 = require("../..//highlights/text/selection/Ranges");
const log = Logger_1.Logger.create();
class FlashcardInputForCloze extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.flashcardType = FlashcardType_1.FlashcardType.CLOZE;
        this.fields = { text: "" };
        this.counter = 1;
        this.onCreate = this.onCreate.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.state = {
            iter: 0,
        };
    }
    render() {
        const { id } = this.props;
        return (React.createElement("div", { id: "annotation-flashcard-box", className: "" },
            React.createElement(RichTextArea_1.RichTextArea, { id: `text-${this.props.id}`, autofocus: true, onKeyDown: event => this.onKeyDown(event), onRichTextMutator: richTextMutator => this.richTextMutator = richTextMutator, onChange: (html) => this.fields.text = html }),
            React.createElement("div", { style: FlashcardInput_1.Styles.BottomBar },
                React.createElement("div", { style: FlashcardInput_1.Styles.BottomBarItem },
                    React.createElement(FlashcardTypeSelector_1.FlashcardTypeSelector, { flashcardType: this.flashcardType, onChangeFlashcardType: flashcardType => this.props.onFlashcardChangeType(flashcardType) })),
                React.createElement("div", { style: FlashcardInput_1.Styles.BottomBarItem, className: "ml-1" },
                    React.createElement(Button_1.default, { id: `button-${this.props.id}`, color: "light", size: "sm", onClick: () => this.onClozeDelete(), className: "ml-1 p-1 border" }, "[\u2026]"),
                    React.createElement(reactstrap_1.UncontrolledTooltip, { placement: "auto", delay: { show: 750, hide: 0 }, target: `button-${this.props.id}` },
                        "Create cloze deletion for text ",
                        React.createElement("span", { className: "text-muted" }, "Control+Shift+C"))),
                React.createElement("div", { style: FlashcardInput_1.Styles.BottomBarItemRight, className: "text-right" },
                    React.createElement(FlashcardButtons_1.FlashcardButtons, { onCancel: () => this.onCancel(), onCreate: () => this.onCreate() })))));
    }
    onClozeDelete() {
        const sel = window.getSelection();
        const range = sel.getRangeAt(0);
        const textNodes = Ranges_1.Ranges.getTextNodes(range);
        if (textNodes.length === 0) {
            return;
        }
        const c = this.counter++;
        const prefix = document.createTextNode(`{{c${c}::`);
        const suffix = document.createTextNode('}}');
        const firstNode = textNodes[0];
        const lastNode = textNodes[textNodes.length - 1];
        firstNode.parentNode.insertBefore(prefix, firstNode);
        lastNode.parentNode.insertBefore(suffix, lastNode.nextSibling);
        sel.removeAllRanges();
        this.fields.text = this.richTextMutator.currentValue();
    }
    onKeyDown(event) {
        if (this.isKeyboardControlShiftC(event)) {
            this.onClozeDelete();
        }
        if (event.getModifierState("Control") && event.key === "Enter") {
            this.onCreate();
        }
    }
    isKeyboardControlShiftC(event) {
        return event.getModifierState("Control") &&
            event.getModifierState("Shift") &&
            event.key === "C";
    }
    onCreate() {
        if (this.props.onFlashcardCreated) {
            this.props.onFlashcardCreated(this.flashcardType, this.fields);
        }
        this.reset();
        this.setState({
            iter: this.state.iter + 1
        });
    }
    onCancel() {
        if (this.props.onCancel) {
            this.props.onCancel();
        }
        this.reset();
    }
    reset() {
        this.fields = { text: "" };
    }
}
exports.FlashcardInputForCloze = FlashcardInputForCloze;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxhc2hjYXJkSW5wdXRGb3JDbG96ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkZsYXNoY2FyZElucHV0Rm9yQ2xvemUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQixnREFBMkM7QUFDM0MsbUVBQTJDO0FBQzNDLGdFQUEyRDtBQUMzRCx5REFBb0Q7QUFDcEQsbUVBQThEO0FBQzlELGtEQUE2QztBQUc3QyxxREFBK0U7QUFDL0UsMkNBQStDO0FBQy9DLG9FQUErRDtBQUUvRCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSxzQkFBdUIsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFVdkUsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBVFQsa0JBQWEsR0FBa0IsNkJBQWEsQ0FBQyxLQUFLLENBQUM7UUFFNUQsV0FBTSxHQUFnQixFQUFDLElBQUksRUFBRSxFQUFFLEVBQUMsQ0FBQztRQUlqQyxZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBS3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV6QyxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsSUFBSSxFQUFFLENBQUM7U0FDVixDQUFDO0lBRU4sQ0FBQztJQUVNLE1BQU07UUFFVCxNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUUxQixPQUFPLENBRUgsNkJBQUssRUFBRSxFQUFDLDBCQUEwQixFQUFDLFNBQVMsRUFBQyxFQUFFO1lBRTNDLG9CQUFDLDJCQUFZLElBQUMsRUFBRSxFQUFFLFFBQVEsSUFB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LElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFDLENBQUM7SUFDN0IsQ0FBQztDQUdKO0FBL0pELHdEQStKQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3RzdHJhcC9saWIvQnV0dG9uJztcbmltcG9ydCB7Rmxhc2hjYXJkVHlwZX0gZnJvbSAnLi4vLi4vbWV0YWRhdGEvRmxhc2hjYXJkVHlwZSc7XG5pbXBvcnQge0ZsYXNoY2FyZEJ1dHRvbnN9IGZyb20gJy4vRmxhc2hjYXJkQnV0dG9ucyc7XG5pbXBvcnQge0ZsYXNoY2FyZFR5cGVTZWxlY3Rvcn0gZnJvbSAnLi9GbGFzaGNhcmRUeXBlU2VsZWN0b3InO1xuaW1wb3J0IHtSaWNoVGV4dEFyZWF9IGZyb20gJy4uL1JpY2hUZXh0QXJlYSc7XG5pbXBvcnQge1JpY2hUZXh0TXV0YXRvcn0gZnJvbSAnLi4vLi4vYXBwcy9jYXJkX2NyZWF0b3IvZWxlbWVudHMvc2NoZW1hZm9ybS9SaWNoVGV4dE11dGF0b3InO1xuaW1wb3J0IHtFbGVtZW50c30gZnJvbSAnLi4vLi4vdXRpbC9FbGVtZW50cyc7XG5pbXBvcnQge0ZsYXNoY2FyZElucHV0RmllbGRzVHlwZSwgU3R5bGVzLCBDbG96ZUZpZWxkc30gZnJvbSAnLi9GbGFzaGNhcmRJbnB1dCc7XG5pbXBvcnQge1VuY29udHJvbGxlZFRvb2x0aXB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IHtSYW5nZXN9IGZyb20gJy4uLy4uLy9oaWdobGlnaHRzL3RleHQvc2VsZWN0aW9uL1Jhbmdlcyc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIEZsYXNoY2FyZElucHV0Rm9yQ2xvemUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgZmxhc2hjYXJkVHlwZTogRmxhc2hjYXJkVHlwZSA9IEZsYXNoY2FyZFR5cGUuQ0xPWkU7XG5cbiAgICBwcml2YXRlIGZpZWxkczogQ2xvemVGaWVsZHMgPSB7dGV4dDogXCJcIn07XG5cbiAgICBwcml2YXRlIHJpY2hUZXh0TXV0YXRvcj86IFJpY2hUZXh0TXV0YXRvcjtcblxuICAgIHByaXZhdGUgY291bnRlcjogbnVtYmVyID0gMTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5vbkNyZWF0ZSA9IHRoaXMub25DcmVhdGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNhbmNlbCA9IHRoaXMub25DYW5jZWwuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaXRlcjogMCxcbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgeyBpZCB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2IGlkPVwiYW5ub3RhdGlvbi1mbGFzaGNhcmQtYm94XCIgY2xhc3NOYW1lPVwiXCI+XG5cbiAgICAgICAgICAgICAgICA8UmljaFRleHRBcmVhIGlkPXtgdGV4dC0ke3RoaXMucHJvcHMuaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9mb2N1cz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17ZXZlbnQgPT4gdGhpcy5vbktleURvd24oZXZlbnQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SaWNoVGV4dE11dGF0b3I9e3JpY2hUZXh0TXV0YXRvciA9PiB0aGlzLnJpY2hUZXh0TXV0YXRvciA9IHJpY2hUZXh0TXV0YXRvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaHRtbCkgPT4gdGhpcy5maWVsZHMudGV4dCA9IGh0bWx9Lz5cblxuICAgICAgICAgICAgICAgIHsvKi0gcXVvdGUgYW5ub3RhdGlvbiAuLi4gdG8gY29weSB0aGUgYW5ub3RhdGlvbiB0ZXh0LiovfVxuXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17U3R5bGVzLkJvdHRvbUJhcn0+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17U3R5bGVzLkJvdHRvbUJhckl0ZW19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rmxhc2hjYXJkVHlwZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhc2hjYXJkVHlwZT17dGhpcy5mbGFzaGNhcmRUeXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlRmxhc2hjYXJkVHlwZT17Zmxhc2hjYXJkVHlwZSA9PiB0aGlzLnByb3BzLm9uRmxhc2hjYXJkQ2hhbmdlVHlwZShmbGFzaGNhcmRUeXBlKX0vPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e1N0eWxlcy5Cb3R0b21CYXJJdGVtfSBjbGFzc05hbWU9XCJtbC0xXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWQ9e2BidXR0b24tJHt0aGlzLnByb3BzLmlkfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uQ2xvemVEZWxldGUoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMSBwLTEgYm9yZGVyXCI+W+KApl08L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFVuY29udHJvbGxlZFRvb2x0aXAgcGxhY2VtZW50PVwiYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17e3Nob3c6IDc1MCwgaGlkZTogMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9e2BidXR0b24tJHt0aGlzLnByb3BzLmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBjbG96ZSBkZWxldGlvbiBmb3IgdGV4dCA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+Q29udHJvbCtTaGlmdCtDPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWRUb29sdGlwPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17U3R5bGVzLkJvdHRvbUJhckl0ZW1SaWdodH1cbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGFzaGNhcmRCdXR0b25zIG9uQ2FuY2VsPXsoKSA9PiB0aGlzLm9uQ2FuY2VsKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNyZWF0ZT17KCkgPT4gdGhpcy5vbkNyZWF0ZSgpfS8+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25DbG96ZURlbGV0ZSgpOiB2b2lkIHtcblxuICAgICAgICAvLyBUT0RPOiBkb24ndCB1c2UgdGhlIHRvcCBsZXZlbCB3aW5kb3cgYnV0IGdldCBpdCBmcm9tIHRoZSBwcm9wZXJcbiAgICAgICAgLy8gZXZlbnRcbiAgICAgICAgY29uc3Qgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuICAgICAgICBjb25zdCByYW5nZSA9IHNlbC5nZXRSYW5nZUF0KDApO1xuXG4gICAgICAgIGNvbnN0IHRleHROb2RlcyA9IFJhbmdlcy5nZXRUZXh0Tm9kZXMocmFuZ2UpO1xuXG4gICAgICAgIGlmICh0ZXh0Tm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjID0gdGhpcy5jb3VudGVyKys7XG5cbiAgICAgICAgY29uc3QgcHJlZml4ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYHt7YyR7Y306OmApO1xuICAgICAgICBjb25zdCBzdWZmaXggPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnfX0nKTtcblxuICAgICAgICBjb25zdCBmaXJzdE5vZGUgPSB0ZXh0Tm9kZXNbMF07XG4gICAgICAgIGNvbnN0IGxhc3ROb2RlID0gdGV4dE5vZGVzW3RleHROb2Rlcy5sZW5ndGggLSAxXTtcblxuICAgICAgICBmaXJzdE5vZGUucGFyZW50Tm9kZSEuaW5zZXJ0QmVmb3JlKHByZWZpeCwgZmlyc3ROb2RlKTtcbiAgICAgICAgbGFzdE5vZGUucGFyZW50Tm9kZSEuaW5zZXJ0QmVmb3JlKHN1ZmZpeCwgbGFzdE5vZGUubmV4dFNpYmxpbmcpO1xuXG4gICAgICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcblxuICAgICAgICB0aGlzLmZpZWxkcy50ZXh0ID0gdGhpcy5yaWNoVGV4dE11dGF0b3IhLmN1cnJlbnRWYWx1ZSgpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcblxuICAgICAgICBpZiAodGhpcy5pc0tleWJvYXJkQ29udHJvbFNoaWZ0QyhldmVudCkpIHtcbiAgICAgICAgICAgIHRoaXMub25DbG96ZURlbGV0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50LmdldE1vZGlmaWVyU3RhdGUoXCJDb250cm9sXCIpICYmIGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ3JlYXRlKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgaXNLZXlib2FyZENvbnRyb2xTaGlmdEMoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcblxuICAgICAgICByZXR1cm4gZXZlbnQuZ2V0TW9kaWZpZXJTdGF0ZShcIkNvbnRyb2xcIikgJiZcbiAgICAgICAgICAgICAgIGV2ZW50LmdldE1vZGlmaWVyU3RhdGUoXCJTaGlmdFwiKSAmJlxuICAgICAgICAgICAgICAgZXZlbnQua2V5ID09PSBcIkNcIjtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ3JlYXRlKCk6IHZvaWQge1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uRmxhc2hjYXJkQ3JlYXRlZCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkZsYXNoY2FyZENyZWF0ZWQodGhpcy5mbGFzaGNhcmRUeXBlLCB0aGlzLmZpZWxkcyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlc2V0KCk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpdGVyOiB0aGlzLnN0YXRlLml0ZXIgKyAxXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNhbmNlbCgpOiB2b2lkIHtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNhbmNlbCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNhbmNlbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZXNldCgpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNldCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5maWVsZHMgPSB7dGV4dDogXCJcIn07XG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgb25GbGFzaGNhcmRDcmVhdGVkOiAoZmxhc2hjYXJkVHlwZTogRmxhc2hjYXJkVHlwZSwgZmllbGRzOiBSZWFkb25seTxGbGFzaGNhcmRJbnB1dEZpZWxkc1R5cGU+KSA9PiB2b2lkO1xuICAgIHJlYWRvbmx5IG9uRmxhc2hjYXJkQ2hhbmdlVHlwZTogKGZsYXNoY2FyZFR5cGU6IEZsYXNoY2FyZFR5cGUpID0+IHZvaWQ7XG4gICAgcmVhZG9ubHkgb25DYW5jZWw/OiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZSB7XG4gICAgcmVhZG9ubHkgaXRlcjogbnVtYmVyO1xufVxuXG5cbiJdfQ==