"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Elements_1 = require("../../util/Elements");
const ID = 'polar-blackout';
class Blackout {
    static toggle(value, opts = {}) {
        if (value) {
            this.enable(opts);
        }
        else {
            this.disable();
        }
    }
    static enable(opts = {}) {
        if (this.isEnabled()) {
            return;
        }
        const blackoutElement = Elements_1.Elements.createElementHTML(`<div id="${ID}" style="">`);
        blackoutElement.style.height = '100%';
        blackoutElement.style.width = '100%';
        blackoutElement.style.position = 'absolute';
        blackoutElement.style.top = '0';
        blackoutElement.style.left = '0';
        blackoutElement.style.backgroundColor = '#000000';
        blackoutElement.style.opacity = '0.3';
        blackoutElement.style.zIndex = '999';
        if (opts.noPointerEvents) {
            blackoutElement.style.pointerEvents = 'none';
        }
        document.body.appendChild(blackoutElement);
    }
    static disable() {
        const element = document.getElementById(ID);
        if (element && element.parentElement) {
            element.parentElement.removeChild(element);
        }
    }
    static isEnabled() {
        return document.getElementById(ID) !== null;
    }
}
exports.Blackout = Blackout;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmxhY2tvdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJCbGFja291dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtEQUE2QztBQUU3QyxNQUFNLEVBQUUsR0FBRyxnQkFBZ0IsQ0FBQztBQUU1QixNQUFhLFFBQVE7SUFFVixNQUFNLENBQUMsTUFBTSxDQUFDLEtBQWMsRUFBRSxPQUFxQixFQUFFO1FBRXhELElBQUksS0FBSyxFQUFFO1lBQ1AsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNyQjthQUFNO1lBQ0gsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2xCO0lBRUwsQ0FBQztJQUVNLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBcUIsRUFBRTtRQUl4QyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNsQixPQUFPO1NBQ1Y7UUFFRCxNQUFNLGVBQWUsR0FDakIsbUJBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFFNUQsZUFBZSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3RDLGVBQWUsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUNyQyxlQUFlLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDNUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLGVBQWUsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUNqQyxlQUFlLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7UUFDbEQsZUFBZSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBRXRDLGVBQWUsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUVyQyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDdEIsZUFBZSxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO1NBQ2hEO1FBRUQsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7SUFFL0MsQ0FBQztJQUVNLE1BQU0sQ0FBQyxPQUFPO1FBRWpCLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFNUMsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLGFBQWEsRUFBRTtZQUVsQyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM5QztJQUVMLENBQUM7SUFLTSxNQUFNLENBQUMsU0FBUztRQUNuQixPQUFPLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEtBQUssSUFBSSxDQUFDO0lBQ2hELENBQUM7Q0FFSjtBQTNERCw0QkEyREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0VsZW1lbnRzfSBmcm9tICcuLi8uLi91dGlsL0VsZW1lbnRzJztcblxuY29uc3QgSUQgPSAncG9sYXItYmxhY2tvdXQnO1xuXG5leHBvcnQgY2xhc3MgQmxhY2tvdXQge1xuXG4gICAgcHVibGljIHN0YXRpYyB0b2dnbGUodmFsdWU6IGJvb2xlYW4sIG9wdHM6IEJsYWNrb3V0T3B0cyA9IHt9KSB7XG5cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZShvcHRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGVuYWJsZShvcHRzOiBCbGFja291dE9wdHMgPSB7fSkge1xuXG4gICAgICAgIC8vIGFsd2F5cyBtYWtlIHN1cmUgdGhlIGJsYWNrb3V0IGVsZW1lbnQgaXMgcmVtb3ZlZCBzbyB3ZSBkb24ndCBkb3VibGVcbiAgICAgICAgLy8gZW5hYmxlIGl0Li4uXG4gICAgICAgIGlmICh0aGlzLmlzRW5hYmxlZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBibGFja291dEVsZW1lbnQgPVxuICAgICAgICAgICAgRWxlbWVudHMuY3JlYXRlRWxlbWVudEhUTUwoYDxkaXYgaWQ9XCIke0lEfVwiIHN0eWxlPVwiXCI+YCk7XG5cbiAgICAgICAgYmxhY2tvdXRFbGVtZW50LnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICAgICAgYmxhY2tvdXRFbGVtZW50LnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgICBibGFja291dEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICBibGFja291dEVsZW1lbnQuc3R5bGUudG9wID0gJzAnO1xuICAgICAgICBibGFja291dEVsZW1lbnQuc3R5bGUubGVmdCA9ICcwJztcbiAgICAgICAgYmxhY2tvdXRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMDAwMDAwJztcbiAgICAgICAgYmxhY2tvdXRFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAnMC4zJztcblxuICAgICAgICBibGFja291dEVsZW1lbnQuc3R5bGUuekluZGV4ID0gJzk5OSc7XG5cbiAgICAgICAgaWYgKG9wdHMubm9Qb2ludGVyRXZlbnRzKSB7XG4gICAgICAgICAgICBibGFja291dEVsZW1lbnQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYmxhY2tvdXRFbGVtZW50KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZGlzYWJsZSgpIHtcblxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoSUQpO1xuXG4gICAgICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgLy8gb25seSByZW1vdmUgaXQgaWYgaXQgYWN0dWFsbHkgZXhpc3RzIGFuZCBpcyBwYXJ0IG9mIHRoZSBVSS5cbiAgICAgICAgICAgIGVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRydWUgaWYgdGhlIGJsYWNrb3V0IGlzIGVuYWJsZWQuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBpc0VuYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChJRCkgIT09IG51bGw7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmxhY2tvdXRPcHRzIHtcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdGV4dCBpcyBkaXNwbGF5ZWQgd2Ugc2hvdyBhIGRpdiBhYm92ZSB0aGUgYmxhY2tvdXQgd2l0aCB0aGUgZ2l2ZW4gdGV4dC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0ZXh0Pzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogV2hlbiB0aGUgZWxlbWVudCBpcyBnaXZlbiB3ZSBkaXNwbGF5IHRoaXMgYWJvdmUgdGhlIGJsYWNrb3V0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVsZW1lbnQ/OiBIVE1MRWxlbWVudDtcblxuICAgIC8qKlxuICAgICAqIFByZXZlbnRzIHRoZSBibGFja291dCBmcm9tIHJlY2VpdmluZyBwb2ludGVyIGV2ZW50cyBhbmQgYWxsb3dzIHRoZW1cbiAgICAgKiB0byBnbyB0aHJvdWdoIHRvIHRoZSBlbGVtZW50cyBpdCBjb3ZlcnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbm9Qb2ludGVyRXZlbnRzPzogYm9vbGVhbjtcblxufVxuIl19