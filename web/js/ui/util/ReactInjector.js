"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReactDOM = __importStar(require("react-dom"));
class ReactInjector {
    static inject(element, id) {
        let container = document.createElement('div');
        if (id) {
            const existingContainer = document.getElementById(id);
            if (existingContainer) {
                return new InjectedComponent(existingContainer);
            }
            else {
                container = document.createElement('div');
                container.setAttribute('id', id);
            }
        }
        document.body.appendChild(container);
        return this.create(element, container);
    }
    static create(element, container) {
        ReactDOM.render(element, container);
        return new InjectedComponent(container);
    }
}
exports.ReactInjector = ReactInjector;
class InjectedComponent {
    constructor(container) {
        this.container = container;
    }
    destroy() {
        if (this.container) {
            this.container.innerHTML = '';
            this.container.parentElement.removeChild(this.container);
            this.container = null;
        }
        else {
        }
    }
}
exports.InjectedComponent = InjectedComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhY3RJbmplY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlJlYWN0SW5qZWN0b3IudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLG9EQUFzQztBQU90QyxNQUFhLGFBQWE7SUFRZixNQUFNLENBQUMsTUFBTSxDQUFDLE9BQW9CLEVBQUUsRUFBVztRQUVsRCxJQUFJLFNBQVMsR0FBZ0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUzRCxJQUFJLEVBQUUsRUFBRTtZQUVKLE1BQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUV0RCxJQUFJLGlCQUFpQixFQUFFO2dCQUNuQixPQUFPLElBQUksaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsQ0FBQzthQUNuRDtpQkFBTTtnQkFFSCxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDMUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFFcEM7U0FFSjtRQUVELFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXJDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFFM0MsQ0FBQztJQUVPLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBb0IsRUFBRSxTQUFzQjtRQUU5RCxRQUFRLENBQUMsTUFBTSxDQUVYLE9BQU8sRUFDUCxTQUFTLENBRVosQ0FBQztRQUVGLE9BQU8sSUFBSSxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUU1QyxDQUFDO0NBRUo7QUE5Q0Qsc0NBOENDO0FBS0QsTUFBYSxpQkFBaUI7SUFJMUIsWUFBWSxTQUFzQjtRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDO0lBRU0sT0FBTztRQUVWLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFjLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUssQ0FBQztTQUMxQjthQUFNO1NBRU47SUFFTCxDQUFDO0NBRUo7QUFwQkQsOENBb0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7Q29uZmlybVByb21wdH0gZnJvbSAnLi4vY29uZmlybS9Db25maXJtUHJvbXB0JztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLyoqXG4gKiBBYmlsaXR5IHRvIGluamVjdCBhIHNtYWxsIHJlYWN0IGFwcCBvbiBhIHBhZ2Ugd2l0aG91dCBtdWNoIGhhc3NsZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFJlYWN0SW5qZWN0b3Ige1xuXG5cbiAgICAvKipcbiAgICAgKiBJbmplY3QgYSBjb21wb25lbnQuICBXaGVuIHRoZSBJRCBpcyBnaXZlbiB3ZSB1c2UgdGhlIElEIGFuZCBlbnN1cmVcbiAgICAgKiB0aGF0IG9ubHkgb25lIGNvbXBvbmVudCB3aXRoIHRoYXQgSUQgaXMgY3JlYXRlZC5cbiAgICAgKlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgaW5qZWN0KGVsZW1lbnQ6IEpTWC5FbGVtZW50LCBpZD86IHN0cmluZykge1xuXG4gICAgICAgIGxldCBjb250YWluZXI6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgaWYgKGlkKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXG4gICAgICAgICAgICBpZiAoZXhpc3RpbmdDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEluamVjdGVkQ29tcG9uZW50KGV4aXN0aW5nQ29udGFpbmVyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlKGVsZW1lbnQsIGNvbnRhaW5lcik7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBjcmVhdGUoZWxlbWVudDogSlNYLkVsZW1lbnQsIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcblxuICAgICAgICBSZWFjdERPTS5yZW5kZXIoXG5cbiAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICBjb250YWluZXJcblxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBuZXcgSW5qZWN0ZWRDb21wb25lbnQoY29udGFpbmVyKTtcblxuICAgIH1cblxufVxuXG4vKipcbiAqIEFsbG93cyB1cyB0byBkZXN0cm95IHRoZSBjb21wb25lbnQuXG4gKi9cbmV4cG9ydCBjbGFzcyBJbmplY3RlZENvbXBvbmVudCB7XG5cbiAgICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXN0cm95KCkge1xuXG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5wYXJlbnRFbGVtZW50IS5yZW1vdmVDaGlsZCh0aGlzLmNvbnRhaW5lcik7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG51bGwhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbm9vcCwgYWxyZWFkeSBkZXN0cm95ZWRcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG4iXX0=