"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ContainerLifecycleState_1 = require("../ContainerLifecycleState");
const Preconditions_1 = require("../../../../Preconditions");
class AbstractContainerLifecycleListener {
    constructor(container) {
        this.container = container;
        this.listener = null;
    }
    register(callback) {
        this.listener = this._createListener(callback);
        let element = this.container.element;
        element.addEventListener('DOMNodeInserted', this.listener, false);
    }
    _createContainerLifecycleEvent(visible) {
        return new ContainerLifecycleState_1.ContainerLifecycleState({
            container: this.container,
            visible
        });
    }
    _createListener(callback) {
        return (event) => {
            let containerLifecycleState = this.getStateFromEvent(event);
            if (Preconditions_1.isPresent(containerLifecycleState)) {
                callback(containerLifecycleState);
            }
        };
    }
    unregister() {
        this.container.element.removeEventListener('DOMNodeInserted', this.listener, false);
        this.listener = null;
    }
}
exports.AbstractContainerLifecycleListener = AbstractContainerLifecycleListener;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3RDb250YWluZXJMaWZlY3ljbGVMaXN0ZW5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFic3RyYWN0Q29udGFpbmVyTGlmZWN5Y2xlTGlzdGVuZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFLQSx3RUFBbUU7QUFDbkUsNkRBQW9EO0FBS3BELE1BQXNCLGtDQUFrQztJQU9wRCxZQUFzQixTQUFvQjtRQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUV6QixDQUFDO0lBRUQsUUFBUSxDQUFDLFFBQWE7UUFFbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRS9DLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO1FBRXJDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRXRFLENBQUM7SUFFRCw4QkFBOEIsQ0FBQyxPQUFnQjtRQUUzQyxPQUFPLElBQUksaURBQXVCLENBQUM7WUFDL0IsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLE9BQU87U0FDVixDQUFDLENBQUM7SUFFUCxDQUFDO0lBRUQsZUFBZSxDQUFDLFFBQWtEO1FBRTlELE9BQU8sQ0FBQyxLQUFVLEVBQUUsRUFBRTtZQUVsQixJQUFJLHVCQUF1QixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUU1RCxJQUFHLHlCQUFTLENBQUMsdUJBQXVCLENBQUMsRUFBRTtnQkFDbkMsUUFBUSxDQUFDLHVCQUF3QixDQUFDLENBQUM7YUFDdEM7UUFFTCxDQUFDLENBQUE7SUFFTCxDQUFDO0lBTUQsVUFBVTtRQUVOLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFFekIsQ0FBQztDQUVKO0FBekRELGdGQXlEQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqL1xuaW1wb3J0IHtDb250YWluZXJ9IGZyb20gJy4uLy4uL0NvbnRhaW5lcic7XG5pbXBvcnQge0NvbnRhaW5lckxpZmVjeWNsZUxpc3RlbmVyfSBmcm9tICcuLi9Db250YWluZXJMaWZlY3ljbGVMaXN0ZW5lcic7XG5pbXBvcnQge0NvbnRhaW5lckxpZmVjeWNsZVN0YXRlfSBmcm9tICcuLi9Db250YWluZXJMaWZlY3ljbGVTdGF0ZSc7XG5pbXBvcnQge2lzUHJlc2VudH0gZnJvbSAnLi4vLi4vLi4vLi4vUHJlY29uZGl0aW9ucyc7XG5cbi8qKlxuICogTGlzdGVucyB0byB0aGUgbGlmZWN5Y2xlIG9mIC5wYWdlXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdENvbnRhaW5lckxpZmVjeWNsZUxpc3RlbmVyIGltcGxlbWVudHMgQ29udGFpbmVyTGlmZWN5Y2xlTGlzdGVuZXIge1xuXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGNvbnRhaW5lcjogQ29udGFpbmVyO1xuXG4gICAgLy8gVE9ETzogdHlwZSB0aGlzLi4gbm90IHN1cmUgd2hhdCBpdCBpcyB5ZXQuXG4gICAgcHJvdGVjdGVkIGxpc3RlbmVyOiBhbnk7XG5cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoY29udGFpbmVyOiBDb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICAgIHRoaXMubGlzdGVuZXIgPSBudWxsO1xuXG4gICAgfVxuXG4gICAgcmVnaXN0ZXIoY2FsbGJhY2s6IGFueSkge1xuXG4gICAgICAgIHRoaXMubGlzdGVuZXIgPSB0aGlzLl9jcmVhdGVMaXN0ZW5lcihjYWxsYmFjayk7XG5cbiAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lci5lbGVtZW50O1xuXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NTm9kZUluc2VydGVkJywgdGhpcy5saXN0ZW5lciwgZmFsc2UpO1xuXG4gICAgfVxuXG4gICAgX2NyZWF0ZUNvbnRhaW5lckxpZmVjeWNsZUV2ZW50KHZpc2libGU6IGJvb2xlYW4pIHtcblxuICAgICAgICByZXR1cm4gbmV3IENvbnRhaW5lckxpZmVjeWNsZVN0YXRlKHtcbiAgICAgICAgICAgIGNvbnRhaW5lcjogdGhpcy5jb250YWluZXIsXG4gICAgICAgICAgICB2aXNpYmxlXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgX2NyZWF0ZUxpc3RlbmVyKGNhbGxiYWNrOiAoc3RhdGU6IENvbnRhaW5lckxpZmVjeWNsZVN0YXRlKSA9PiB2b2lkICkge1xuXG4gICAgICAgIHJldHVybiAoZXZlbnQ6IGFueSkgPT4ge1xuXG4gICAgICAgICAgICBsZXQgY29udGFpbmVyTGlmZWN5Y2xlU3RhdGUgPSB0aGlzLmdldFN0YXRlRnJvbUV2ZW50KGV2ZW50KTtcblxuICAgICAgICAgICAgaWYoaXNQcmVzZW50KGNvbnRhaW5lckxpZmVjeWNsZVN0YXRlKSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGNvbnRhaW5lckxpZmVjeWNsZVN0YXRlISk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgYWJzdHJhY3QgZ2V0U3RhdGVGcm9tRXZlbnQoZXZlbnQ6IGFueSk6IENvbnRhaW5lckxpZmVjeWNsZVN0YXRlIHwgdW5kZWZpbmVkO1xuXG4gICAgYWJzdHJhY3QgZ2V0U3RhdGUoKTogQ29udGFpbmVyTGlmZWN5Y2xlU3RhdGUgfCB1bmRlZmluZWQ7XG5cbiAgICB1bnJlZ2lzdGVyKCkge1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NTm9kZUluc2VydGVkJywgdGhpcy5saXN0ZW5lciwgZmFsc2UpO1xuICAgICAgICB0aGlzLmxpc3RlbmVyID0gbnVsbDtcblxuICAgIH1cblxufVxuIl19