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
const Logger_1 = require("../../logger/Logger");
const FlashcardType_1 = require("../../metadata/FlashcardType");
const FlashcardInputForCloze_1 = require("./FlashcardInputForCloze");
const FlashcardInputForFrontAndBack_1 = require("./FlashcardInputForFrontAndBack");
const log = Logger_1.Logger.create();
class AnnotationFlashcardBox extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onFlashcardCreated = this.onFlashcardCreated.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.state = {
            iter: 0,
            flashcardType: this.props.flashcardType || this.defaultFlashcardType()
        };
    }
    render() {
        if (this.state.flashcardType === FlashcardType_1.FlashcardType.BASIC_FRONT_BACK) {
            return (React.createElement(FlashcardInputForFrontAndBack_1.FlashcardInputForFrontAndBack, { id: this.props.id, onCancel: () => this.props.onCancel(), onFlashcardCreated: (flashcardType, fields) => this.onFlashcardCreated(flashcardType, fields), onFlashcardChangeType: flashcardType => this.onFlashcardChangeType(flashcardType) }));
        }
        else {
            return (React.createElement(FlashcardInputForCloze_1.FlashcardInputForCloze, { id: this.props.id, onCancel: () => this.props.onCancel(), onFlashcardCreated: (flashcardType, fields) => this.onFlashcardCreated(flashcardType, fields), onFlashcardChangeType: flashcardType => this.onFlashcardChangeType(flashcardType) }));
        }
    }
    onFlashcardChangeType(flashcardType) {
        this.setState(Object.assign({}, this.state, { flashcardType }));
        this.setDefaultFlashcardType(flashcardType);
    }
    defaultFlashcardType() {
        const defaultFlashcardType = window.localStorage.getItem('default-flashcard-type');
        switch (defaultFlashcardType) {
            case FlashcardType_1.FlashcardType.BASIC_FRONT_BACK:
                return FlashcardType_1.FlashcardType.BASIC_FRONT_BACK;
            case FlashcardType_1.FlashcardType.CLOZE:
                return FlashcardType_1.FlashcardType.CLOZE;
            default:
                return FlashcardType_1.FlashcardType.BASIC_FRONT_BACK;
        }
    }
    setDefaultFlashcardType(flashcardType) {
        window.localStorage.setItem('default-flashcard-type', flashcardType);
    }
    onFlashcardCreated(flashcardType, fields) {
        this.props.onFlashcardCreated(flashcardType, fields);
        this.setState({
            iter: this.state.iter + 1
        });
    }
    onCancel() {
        this.props.onCancel();
    }
}
exports.AnnotationFlashcardBox = AnnotationFlashcardBox;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ub3RhdGlvbkZsYXNoY2FyZEJveC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFubm90YXRpb25GbGFzaGNhcmRCb3gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQixnREFBMkM7QUFDM0MsZ0VBQTJEO0FBRTNELHFFQUFnRTtBQUNoRSxtRkFBOEU7QUFFOUUsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRzVCLE1BQWEsc0JBQXVCLFNBQVEsS0FBSyxDQUFDLFNBQXlCO0lBRXZFLFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXpDLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxJQUFJLEVBQUUsQ0FBQztZQUlQLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7U0FDekUsQ0FBQztJQUVOLENBQUM7SUFFTSxNQUFNO1FBRVQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsS0FBSyw2QkFBYSxDQUFDLGdCQUFnQixFQUFFO1lBRTdELE9BQU8sQ0FBRSxvQkFBQyw2REFBNkIsSUFBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQ2pCLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUNyQyxrQkFBa0IsRUFBRSxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLEVBQzdGLHFCQUFxQixFQUFFLGFBQWEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUUsQ0FBQztTQUVsSTthQUFNO1lBRUgsT0FBTyxDQUFFLG9CQUFDLCtDQUFzQixJQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFDakIsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQ3JDLGtCQUFrQixFQUFFLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsRUFDN0YscUJBQXFCLEVBQUUsYUFBYSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBRSxDQUFDO1NBRTNIO0lBRUwsQ0FBQztJQUVPLHFCQUFxQixDQUFDLGFBQTRCO1FBQ3RELElBQUksQ0FBQyxRQUFRLG1CQUFLLElBQUksQ0FBQyxLQUFLLElBQUUsYUFBYSxJQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTyxvQkFBb0I7UUFFeEIsTUFBTSxvQkFBb0IsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBRW5GLFFBQVEsb0JBQW9CLEVBQUU7WUFFMUIsS0FBSyw2QkFBYSxDQUFDLGdCQUFnQjtnQkFDL0IsT0FBTyw2QkFBYSxDQUFDLGdCQUFnQixDQUFDO1lBRTFDLEtBQUssNkJBQWEsQ0FBQyxLQUFLO2dCQUNwQixPQUFPLDZCQUFhLENBQUMsS0FBSyxDQUFDO1lBRS9CO2dCQUNJLE9BQU8sNkJBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztTQUM3QztJQUVMLENBQUM7SUFFTyx1QkFBdUIsQ0FBQyxhQUE0QjtRQUN4RCxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRU8sa0JBQWtCLENBQUMsYUFBNEIsRUFBRSxNQUEwQztRQUUvRixJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUVyRCxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ1YsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUM7U0FDNUIsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVPLFFBQVE7UUFFWixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRTFCLENBQUM7Q0FFSjtBQWpGRCx3REFpRkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vLi4vbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0ZsYXNoY2FyZFR5cGV9IGZyb20gJy4uLy4uL21ldGFkYXRhL0ZsYXNoY2FyZFR5cGUnO1xuaW1wb3J0IHtGbGFzaGNhcmRJbnB1dEZpZWxkc1R5cGV9IGZyb20gJy4vRmxhc2hjYXJkSW5wdXQnO1xuaW1wb3J0IHtGbGFzaGNhcmRJbnB1dEZvckNsb3plfSBmcm9tICcuL0ZsYXNoY2FyZElucHV0Rm9yQ2xvemUnO1xuaW1wb3J0IHtGbGFzaGNhcmRJbnB1dEZvckZyb250QW5kQmFja30gZnJvbSAnLi9GbGFzaGNhcmRJbnB1dEZvckZyb250QW5kQmFjayc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuXG5leHBvcnQgY2xhc3MgQW5ub3RhdGlvbkZsYXNoY2FyZEJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLm9uRmxhc2hjYXJkQ3JlYXRlZCA9IHRoaXMub25GbGFzaGNhcmRDcmVhdGVkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DYW5jZWwgPSB0aGlzLm9uQ2FuY2VsLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGl0ZXI6IDAsXG5cbiAgICAgICAgICAgIC8vIFRPRE86IG1heWJlIHJlYWQgdGhpcyBmcm9tIGxvY2FsU3RvcmFnZSBzbyB0aGUgdXNlcnMgcHJlZnNcbiAgICAgICAgICAgIC8vIGFyZSBrZXB0XG4gICAgICAgICAgICBmbGFzaGNhcmRUeXBlOiB0aGlzLnByb3BzLmZsYXNoY2FyZFR5cGUgfHwgdGhpcy5kZWZhdWx0Rmxhc2hjYXJkVHlwZSgpXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmZsYXNoY2FyZFR5cGUgPT09IEZsYXNoY2FyZFR5cGUuQkFTSUNfRlJPTlRfQkFDSykge1xuXG4gICAgICAgICAgICByZXR1cm4gKCA8Rmxhc2hjYXJkSW5wdXRGb3JGcm9udEFuZEJhY2sgaWQ9e3RoaXMucHJvcHMuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9eygpID0+IHRoaXMucHJvcHMub25DYW5jZWwoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZsYXNoY2FyZENyZWF0ZWQ9eyhmbGFzaGNhcmRUeXBlLCBmaWVsZHMpID0+IHRoaXMub25GbGFzaGNhcmRDcmVhdGVkKGZsYXNoY2FyZFR5cGUsIGZpZWxkcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25GbGFzaGNhcmRDaGFuZ2VUeXBlPXtmbGFzaGNhcmRUeXBlID0+IHRoaXMub25GbGFzaGNhcmRDaGFuZ2VUeXBlKGZsYXNoY2FyZFR5cGUpfS8+ICk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgcmV0dXJuICggPEZsYXNoY2FyZElucHV0Rm9yQ2xvemUgaWQ9e3RoaXMucHJvcHMuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4gdGhpcy5wcm9wcy5vbkNhbmNlbCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25GbGFzaGNhcmRDcmVhdGVkPXsoZmxhc2hjYXJkVHlwZSwgZmllbGRzKSA9PiB0aGlzLm9uRmxhc2hjYXJkQ3JlYXRlZChmbGFzaGNhcmRUeXBlLCBmaWVsZHMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25GbGFzaGNhcmRDaGFuZ2VUeXBlPXtmbGFzaGNhcmRUeXBlID0+IHRoaXMub25GbGFzaGNhcmRDaGFuZ2VUeXBlKGZsYXNoY2FyZFR5cGUpfS8+ICk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkZsYXNoY2FyZENoYW5nZVR5cGUoZmxhc2hjYXJkVHlwZTogRmxhc2hjYXJkVHlwZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsuLi50aGlzLnN0YXRlLCBmbGFzaGNhcmRUeXBlfSk7XG4gICAgICAgIHRoaXMuc2V0RGVmYXVsdEZsYXNoY2FyZFR5cGUoZmxhc2hjYXJkVHlwZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZWZhdWx0Rmxhc2hjYXJkVHlwZSgpIHtcblxuICAgICAgICBjb25zdCBkZWZhdWx0Rmxhc2hjYXJkVHlwZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGVmYXVsdC1mbGFzaGNhcmQtdHlwZScpO1xuXG4gICAgICAgIHN3aXRjaCAoZGVmYXVsdEZsYXNoY2FyZFR5cGUpIHtcblxuICAgICAgICAgICAgY2FzZSBGbGFzaGNhcmRUeXBlLkJBU0lDX0ZST05UX0JBQ0s6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEZsYXNoY2FyZFR5cGUuQkFTSUNfRlJPTlRfQkFDSztcblxuICAgICAgICAgICAgY2FzZSBGbGFzaGNhcmRUeXBlLkNMT1pFOlxuICAgICAgICAgICAgICAgIHJldHVybiBGbGFzaGNhcmRUeXBlLkNMT1pFO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBGbGFzaGNhcmRUeXBlLkJBU0lDX0ZST05UX0JBQ0s7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0RGVmYXVsdEZsYXNoY2FyZFR5cGUoZmxhc2hjYXJkVHlwZTogRmxhc2hjYXJkVHlwZSkge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RlZmF1bHQtZmxhc2hjYXJkLXR5cGUnLCBmbGFzaGNhcmRUeXBlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRmxhc2hjYXJkQ3JlYXRlZChmbGFzaGNhcmRUeXBlOiBGbGFzaGNhcmRUeXBlLCBmaWVsZHM6IFJlYWRvbmx5PEZsYXNoY2FyZElucHV0RmllbGRzVHlwZT4pOiB2b2lkIHtcblxuICAgICAgICB0aGlzLnByb3BzLm9uRmxhc2hjYXJkQ3JlYXRlZChmbGFzaGNhcmRUeXBlLCBmaWVsZHMpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXRlcjogdGhpcy5zdGF0ZS5pdGVyICsgMVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25DYW5jZWwoKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy5wcm9wcy5vbkNhbmNlbCgpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSBpZDogc3RyaW5nO1xuICAgIHJlYWRvbmx5IGZsYXNoY2FyZFR5cGU/OiBGbGFzaGNhcmRUeXBlO1xuICAgIHJlYWRvbmx5IG9uRmxhc2hjYXJkQ3JlYXRlZDogKGZsYXNoY2FyZFR5cGU6IEZsYXNoY2FyZFR5cGUsIGZpZWxkczogUmVhZG9ubHk8Rmxhc2hjYXJkSW5wdXRGaWVsZHNUeXBlPikgPT4gdm9pZDtcbiAgICByZWFkb25seSBvbkNhbmNlbDogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3RhdGUge1xuICAgIHJlYWRvbmx5IGl0ZXI6IG51bWJlcjtcbiAgICByZWFkb25seSBmbGFzaGNhcmRUeXBlOiBGbGFzaGNhcmRUeXBlO1xufVxuIl19