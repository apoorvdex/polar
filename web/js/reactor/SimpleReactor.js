"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Reactor_1 = require("./Reactor");
const EVENT_NAME = 'event';
class SimpleReactor {
    constructor(delegate = new Reactor_1.Reactor()) {
        this.delegate = delegate;
        this.delegate.registerEvent(EVENT_NAME);
    }
    dispatchEvent(value) {
        this.delegate.dispatchEvent(EVENT_NAME, value);
    }
    clear() {
        this.delegate.clearEvent(EVENT_NAME);
    }
    addEventListener(eventListener) {
        return this.delegate.addEventListener(EVENT_NAME, eventListener);
    }
    once() {
        return this.delegate.once(EVENT_NAME);
    }
    removeEventListener(eventListener) {
        return this.delegate.removeEventListener(EVENT_NAME, eventListener);
    }
    size() {
        return this.delegate.size(EVENT_NAME);
    }
    getEventListeners() {
        return this.delegate.getEventListeners(EVENT_NAME);
    }
}
exports.SimpleReactor = SimpleReactor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2ltcGxlUmVhY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNpbXBsZVJlYWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSx1Q0FBNkQ7QUFHN0QsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDO0FBRTNCLE1BQWEsYUFBYTtJQUl0QixZQUFZLFdBQStCLElBQUksaUJBQU8sRUFBSztRQUN2RCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRU0sYUFBYSxDQUFDLEtBQVE7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFTSxLQUFLO1FBQ1IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVNLGdCQUFnQixDQUFDLGFBQStCO1FBQ25ELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVNLElBQUk7UUFDUCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTSxtQkFBbUIsQ0FBQyxhQUErQjtRQUN0RCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFTSxJQUFJO1FBQ1AsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBS00saUJBQWlCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN2RCxDQUFDO0NBRUo7QUF4Q0Qsc0NBd0NDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBIFJlYWN0b3IgdGhhdCBvbmx5IHNlbmRzIG9uZSB0eXBlIG9mIGV2ZW50LlxuICovXG5pbXBvcnQge0lNdXRhYmxlUmVhY3RvciwgSVJlYWN0b3IsIFJlYWN0b3J9IGZyb20gJy4vUmVhY3Rvcic7XG5pbXBvcnQge0V2ZW50TGlzdGVuZXIsIFJlZ2lzdGVyZWRFdmVudExpc3RlbmVyfSBmcm9tICcuL0V2ZW50TGlzdGVuZXInO1xuXG5jb25zdCBFVkVOVF9OQU1FID0gJ2V2ZW50JztcblxuZXhwb3J0IGNsYXNzIFNpbXBsZVJlYWN0b3I8Vj4gaW1wbGVtZW50cyBJU2ltcGxlUmVhY3RvcjxWPiB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGRlbGVnYXRlOiBJTXV0YWJsZVJlYWN0b3I8Vj47XG5cbiAgICBjb25zdHJ1Y3RvcihkZWxlZ2F0ZTogSU11dGFibGVSZWFjdG9yPFY+ID0gbmV3IFJlYWN0b3I8Vj4oKSkge1xuICAgICAgICB0aGlzLmRlbGVnYXRlID0gZGVsZWdhdGU7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUucmVnaXN0ZXJFdmVudChFVkVOVF9OQU1FKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGlzcGF0Y2hFdmVudCh2YWx1ZTogVikge1xuICAgICAgICB0aGlzLmRlbGVnYXRlLmRpc3BhdGNoRXZlbnQoRVZFTlRfTkFNRSwgdmFsdWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS5jbGVhckV2ZW50KEVWRU5UX05BTUUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRFdmVudExpc3RlbmVyKGV2ZW50TGlzdGVuZXI6IEV2ZW50TGlzdGVuZXI8Vj4pOiBSZWdpc3RlcmVkRXZlbnRMaXN0ZW5lcjxWPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLmFkZEV2ZW50TGlzdGVuZXIoRVZFTlRfTkFNRSwgZXZlbnRMaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgcHVibGljIG9uY2UoKTogUHJvbWlzZTxWPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLm9uY2UoRVZFTlRfTkFNRSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRMaXN0ZW5lcjogRXZlbnRMaXN0ZW5lcjxWPik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZS5yZW1vdmVFdmVudExpc3RlbmVyKEVWRU5UX05BTUUsIGV2ZW50TGlzdGVuZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaXplKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLnNpemUoRVZFTlRfTkFNRSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLmdldEV2ZW50TGlzdGVuZXJzKEVWRU5UX05BTUUpO1xuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTaW1wbGVSZWFjdG9yPFY+IHtcblxuICAgIG9uY2UoKTogUHJvbWlzZTxWPjtcblxuICAgIC8qKlxuICAgICAqIEFkZCB0aGUgbGlzdGVuZXIgYW5kIHJldHVybiB0aGUgbGlzdGVuZXIgdGhhdCB3YXMgYWRkZWQuICBUaGlzIGFsbG93cyB5b3VcbiAgICAgKiB0byBsYXRlciByZW1vdmUgdGhlIGxpc3RlbmVyIGlmIG5lY2Vzc2FyeS5cbiAgICAgKi9cbiAgICBhZGRFdmVudExpc3RlbmVyKGV2ZW50TGlzdGVuZXI6IEV2ZW50TGlzdGVuZXI8Vj4pOiBSZWdpc3RlcmVkRXZlbnRMaXN0ZW5lcjxWPjtcblxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRMaXN0ZW5lcjogRXZlbnRMaXN0ZW5lcjxWPik6IGJvb2xlYW47XG5cbiAgICBkaXNwYXRjaEV2ZW50KHZhbHVlOiBWKTogdm9pZDtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhbGwgZXZlbnQgbGlzdGVuZXJzLlxuICAgICAqL1xuICAgIGNsZWFyKCk6IHZvaWQ7XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIHRvdGFsIG51bWJlciBvZiBsaXN0ZW5lcnMgYWRkZWQuXG4gICAgICovXG4gICAgc2l6ZSgpOiBudW1iZXI7XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRXZlbnREaXNwYXRjaGVyPFY+IGV4dGVuZHMgSVNpbXBsZVJlYWN0b3I8Vj4ge1xuXG59XG4iXX0=