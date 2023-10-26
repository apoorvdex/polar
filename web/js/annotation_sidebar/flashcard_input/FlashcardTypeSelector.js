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
const FlashcardType_1 = require("../../metadata/FlashcardType");
const Input_1 = __importDefault(require("reactstrap/lib/Input"));
const log = Logger_1.Logger.create();
class Styles {
}
Styles.SelectCardType = {
    minWidth: '10em',
    fontSize: '14px'
};
class FlashcardTypeSelector extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    render() {
        return (React.createElement(Input_1.default, { type: "select", style: Styles.SelectCardType, defaultValue: this.props.flashcardType, className: "p-0", onChange: htmlInputElement => this.props.onChangeFlashcardType(htmlInputElement.target.value) },
            React.createElement("option", { value: FlashcardType_1.FlashcardType.BASIC_FRONT_BACK }, "Front and back"),
            React.createElement("option", { value: FlashcardType_1.FlashcardType.CLOZE }, "Cloze")));
    }
}
exports.FlashcardTypeSelector = FlashcardTypeSelector;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxhc2hjYXJkVHlwZVNlbGVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRmxhc2hjYXJkVHlwZVNlbGVjdG9yLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsZ0RBQTJDO0FBQzNDLGdFQUEyRDtBQUMzRCxpRUFBeUM7QUFFekMsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQU0sTUFBTTs7QUFFTSxxQkFBYyxHQUF3QjtJQUNoRCxRQUFRLEVBQUUsTUFBTTtJQUNoQixRQUFRLEVBQUUsTUFBTTtDQUNuQixDQUFDO0FBSU4sTUFBYSxxQkFBc0IsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFdEUsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFDWixDQUFDO0lBRU4sQ0FBQztJQUVNLE1BQU07UUFFVCxPQUFPLENBRUgsb0JBQUMsZUFBSyxJQUFDLElBQUksRUFBQyxRQUFRLEVBQ2IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxjQUFjLEVBQzVCLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFDdEMsU0FBUyxFQUFDLEtBQUssRUFDZixRQUFRLEVBQUUsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEtBQXNCLENBQUM7WUFFakgsZ0NBQVEsS0FBSyxFQUFFLDZCQUFhLENBQUMsZ0JBQWdCLHFCQUF5QjtZQUV0RSxnQ0FBUSxLQUFLLEVBQUUsNkJBQWEsQ0FBQyxLQUFLLFlBQWdCLENBRTlDLENBRVgsQ0FBQztJQUVOLENBQUM7Q0FFSjtBQTlCRCxzREE4QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vLi4vbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0ZsYXNoY2FyZFR5cGV9IGZyb20gJy4uLy4uL21ldGFkYXRhL0ZsYXNoY2FyZFR5cGUnO1xuaW1wb3J0IElucHV0IGZyb20gJ3JlYWN0c3RyYXAvbGliL0lucHV0JztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5jbGFzcyBTdHlsZXMge1xuXG4gICAgcHVibGljIHN0YXRpYyBTZWxlY3RDYXJkVHlwZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICAgICAgbWluV2lkdGg6ICcxMGVtJyxcbiAgICAgICAgZm9udFNpemU6ICcxNHB4J1xuICAgIH07XG5cbn1cblxuZXhwb3J0IGNsYXNzIEZsYXNoY2FyZFR5cGVTZWxlY3RvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8SW5wdXQgdHlwZT1cInNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgc3R5bGU9e1N0eWxlcy5TZWxlY3RDYXJkVHlwZX1cbiAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMuZmxhc2hjYXJkVHlwZX1cbiAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTBcIlxuICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtodG1sSW5wdXRFbGVtZW50ID0+IHRoaXMucHJvcHMub25DaGFuZ2VGbGFzaGNhcmRUeXBlKGh0bWxJbnB1dEVsZW1lbnQudGFyZ2V0LnZhbHVlIGFzIEZsYXNoY2FyZFR5cGUpfT5cblxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e0ZsYXNoY2FyZFR5cGUuQkFTSUNfRlJPTlRfQkFDS30+RnJvbnQgYW5kIGJhY2s8L29wdGlvbj5cblxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e0ZsYXNoY2FyZFR5cGUuQ0xPWkV9PkNsb3plPC9vcHRpb24+XG5cbiAgICAgICAgICAgIDwvSW5wdXQ+XG5cbiAgICAgICAgKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgZmxhc2hjYXJkVHlwZTogRmxhc2hjYXJkVHlwZTtcbiAgICByZWFkb25seSBvbkNoYW5nZUZsYXNoY2FyZFR5cGU6IChmbGFzaGNhcmRUeXBlOiBGbGFzaGNhcmRUeXBlKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZSB7XG59XG4iXX0=