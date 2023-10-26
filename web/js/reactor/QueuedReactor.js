"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Reactor_1 = require("./Reactor");
const Preconditions_1 = require("../Preconditions");
class QueuedReactor {
    constructor(delegate = new Reactor_1.Reactor()) {
        this.queue = {};
        this.delegate = delegate;
    }
    addEventListener(eventName, eventListener) {
        this.delegate.addEventListener(eventName, eventListener);
        if (this.hasEnqueued(eventName)) {
            for (const current of this.clearEnqueued(eventName)) {
                this.delegate.dispatchEvent(eventName, current);
            }
        }
        const release = () => {
            this.removeEventListener(eventName, eventListener);
        };
        return { eventListener, release };
    }
    once(eventName) {
        return new Promise((resolve => {
            const listener = (event) => {
                resolve(event);
                this.removeEventListener(eventName, listener);
            };
            this.addEventListener(eventName, listener);
        }));
    }
    dispatchEvent(eventName, value) {
        if (this.delegate.hasEventListeners(eventName)) {
            this.delegate.dispatchEvent(eventName, value);
        }
        else {
            this.enqueue(eventName, value);
        }
    }
    getEventListeners(eventName) {
        return this.delegate.getEventListeners(eventName);
    }
    hasEventListeners(eventName) {
        return this.delegate.hasEventListeners(eventName);
    }
    registerEvent(eventName) {
        this.delegate.registerEvent(eventName);
        return this;
    }
    hasRegisteredEvent(eventName) {
        return this.delegate.hasRegisteredEvent(eventName);
    }
    clearEvent(eventName) {
        this.delegate.clearEvent(eventName);
    }
    removeEventListener(eventName, listener) {
        return this.delegate.removeEventListener(eventName, listener);
    }
    size(eventName) {
        return this.delegate.size(eventName);
    }
    enqueue(eventName, value) {
        if (!Preconditions_1.isPresent(this.queue[eventName])) {
            this.queue[eventName] = [];
        }
        this.queue[eventName].push(value);
        return this;
    }
    clearEnqueued(eventName) {
        if (Preconditions_1.isPresent(this.queue[eventName])) {
            const data = this.queue[eventName];
            delete this.queue[eventName];
            return data;
        }
        else {
            return [];
        }
    }
    hasEnqueued(eventName) {
        return Preconditions_1.isPresent(this.queue[eventName]) && this.queue[eventName].length > 0;
    }
}
exports.QueuedReactor = QueuedReactor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVldWVkUmVhY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlF1ZXVlZFJlYWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBNkQ7QUFFN0Qsb0RBQTJDO0FBTzNDLE1BQWEsYUFBYTtJQU10QixZQUFZLFFBQVEsR0FBRyxJQUFJLGlCQUFPLEVBQUs7UUFGdEIsVUFBSyxHQUEwQixFQUFFLENBQUM7UUFHL0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUVNLGdCQUFnQixDQUFDLFNBQWlCLEVBQUUsYUFBK0I7UUFFdEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFJekQsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBRTdCLEtBQUssTUFBTSxPQUFPLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQ25EO1NBRUo7UUFFRCxNQUFNLE9BQU8sR0FBRyxHQUFHLEVBQUU7WUFDakIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUM7UUFFRixPQUFPLEVBQUMsYUFBYSxFQUFFLE9BQU8sRUFBQyxDQUFDO0lBRXBDLENBQUM7SUFHTSxJQUFJLENBQUMsU0FBaUI7UUFFekIsT0FBTyxJQUFJLE9BQU8sQ0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBRTdCLE1BQU0sUUFBUSxHQUFHLENBQUMsS0FBUSxFQUFFLEVBQUU7Z0JBQzFCLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDZixJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ2xELENBQUMsQ0FBQztZQUVGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFL0MsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVSLENBQUM7SUFFTSxhQUFhLENBQUMsU0FBaUIsRUFBRSxLQUFRO1FBRTVDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUc1QyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FFakQ7YUFBTTtZQUdILElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBRWxDO0lBRUwsQ0FBQztJQUVNLGlCQUFpQixDQUFDLFNBQWlCO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRU0saUJBQWlCLENBQUMsU0FBaUI7UUFDdEMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFTSxhQUFhLENBQUMsU0FBaUI7UUFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkMsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLGtCQUFrQixDQUFDLFNBQWlCO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRU0sVUFBVSxDQUFDLFNBQWlCO1FBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTSxtQkFBbUIsQ0FBQyxTQUFpQixFQUFFLFFBQTBCO1FBQ3BFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVNLElBQUksQ0FBQyxTQUFpQjtRQUN6QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTyxPQUFPLENBQUMsU0FBaUIsRUFBRSxLQUFRO1FBRXZDLElBQUksQ0FBRSx5QkFBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUM5QjtRQUVELElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWxDLE9BQU8sSUFBSSxDQUFDO0lBRWhCLENBQUM7SUFNTyxhQUFhLENBQUMsU0FBaUI7UUFFbkMsSUFBSSx5QkFBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRTtZQUVsQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ25DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM3QixPQUFPLElBQUksQ0FBQztTQUVmO2FBQU07WUFDSCxPQUFPLEVBQUUsQ0FBQztTQUNiO0lBRUwsQ0FBQztJQUVPLFdBQVcsQ0FBQyxTQUFpQjtRQUNqQyxPQUFPLHlCQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNoRixDQUFDO0NBRUo7QUEvSEQsc0NBK0hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJTXV0YWJsZVJlYWN0b3IsIElSZWFjdG9yLCBSZWFjdG9yfSBmcm9tICcuL1JlYWN0b3InO1xuaW1wb3J0IHtFdmVudExpc3RlbmVyLCBSZWdpc3RlcmVkRXZlbnRMaXN0ZW5lcn0gZnJvbSAnLi9FdmVudExpc3RlbmVyJztcbmltcG9ydCB7aXNQcmVzZW50fSBmcm9tICcuLi9QcmVjb25kaXRpb25zJztcblxuLyoqXG4gKiBBIHJlYWN0b3IgdGhhdCBhbGxvd3MgZGlzcGF0Y2hFdmVudHMgdG8gYmUgcXVldWUnZCB1cCB1bnRpbCB0aGUgZmlyc3RcbiAqIGxpc3RlbmVyIGlzIGFkZGVkIGZvciBhbiBldmVudCBhdCB3aGljaCBwb2ludCB0aGUgZXhpc3RpbmcgdmFsdWVzIGFyZVxuICogZHJhaW5lZC5cbiAqL1xuZXhwb3J0IGNsYXNzIFF1ZXVlZFJlYWN0b3I8Vj4gaW1wbGVtZW50cyBJUmVhY3RvcjxWPiwgSU11dGFibGVSZWFjdG9yPFY+IHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGVsZWdhdGU6IFJlYWN0b3I8Vj47XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHF1ZXVlOiB7W25hbWU6IHN0cmluZ106IFZbXX0gPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKGRlbGVnYXRlID0gbmV3IFJlYWN0b3I8Vj4oKSkge1xuICAgICAgICB0aGlzLmRlbGVnYXRlID0gZGVsZWdhdGU7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lOiBzdHJpbmcsIGV2ZW50TGlzdGVuZXI6IEV2ZW50TGlzdGVuZXI8Vj4pOiBSZWdpc3RlcmVkRXZlbnRMaXN0ZW5lcjxWPiB7XG5cbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lcik7XG5cbiAgICAgICAgLy8gbm93IGNhbGwgYWxsIHRoZSBldmVudHMgb24gdGhlIGRlbGVnYXRlIGRpcmVjdGx5LlxuXG4gICAgICAgIGlmICh0aGlzLmhhc0VucXVldWVkKGV2ZW50TmFtZSkpIHtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBjdXJyZW50IG9mIHRoaXMuY2xlYXJFbnF1ZXVlZChldmVudE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZS5kaXNwYXRjaEV2ZW50KGV2ZW50TmFtZSwgY3VycmVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlbGVhc2UgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudExpc3RlbmVyKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4ge2V2ZW50TGlzdGVuZXIsIHJlbGVhc2V9O1xuXG4gICAgfVxuXG5cbiAgICBwdWJsaWMgb25jZShldmVudE5hbWU6IHN0cmluZyk6IFByb21pc2U8Vj4ge1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxWPigocmVzb2x2ZSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGxpc3RlbmVyID0gKGV2ZW50OiBWKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShldmVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuXG4gICAgICAgIH0pKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBkaXNwYXRjaEV2ZW50KGV2ZW50TmFtZTogc3RyaW5nLCB2YWx1ZTogVik6IHZvaWQge1xuXG4gICAgICAgIGlmICh0aGlzLmRlbGVnYXRlLmhhc0V2ZW50TGlzdGVuZXJzKGV2ZW50TmFtZSkpIHtcblxuICAgICAgICAgICAgLy8gd2UgYWxyZWFkeSBoYXZlIGxpc3RlbmVycyBmb3IgdGhpcyBzbyBkaXNwYXRjaCBpdCBkaXJlY3RseVxuICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZS5kaXNwYXRjaEV2ZW50KGV2ZW50TmFtZSwgdmFsdWUpO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIC8vIG5vIGxpc3RlbmVycyB5ZXQgc28gZW5xdWV1ZSBpdCB1bnRpbCB0aGUgZmlyc3QgbGlzdGVuZXIgaXMgcmVhZHkuXG4gICAgICAgICAgICB0aGlzLmVucXVldWUoZXZlbnROYW1lLCB2YWx1ZSk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIGdldEV2ZW50TGlzdGVuZXJzKGV2ZW50TmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLmdldEV2ZW50TGlzdGVuZXJzKGV2ZW50TmFtZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGhhc0V2ZW50TGlzdGVuZXJzKGV2ZW50TmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLmhhc0V2ZW50TGlzdGVuZXJzKGV2ZW50TmFtZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyRXZlbnQoZXZlbnROYW1lOiBzdHJpbmcpOiB0aGlzIHtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS5yZWdpc3RlckV2ZW50KGV2ZW50TmFtZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBoYXNSZWdpc3RlcmVkRXZlbnQoZXZlbnROYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUuaGFzUmVnaXN0ZXJlZEV2ZW50KGV2ZW50TmFtZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyRXZlbnQoZXZlbnROYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS5jbGVhckV2ZW50KGV2ZW50TmFtZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lOiBzdHJpbmcsIGxpc3RlbmVyOiBFdmVudExpc3RlbmVyPFY+KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgcHVibGljIHNpemUoZXZlbnROYW1lOiBzdHJpbmcpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZS5zaXplKGV2ZW50TmFtZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlbnF1ZXVlKGV2ZW50TmFtZTogc3RyaW5nLCB2YWx1ZTogVik6IHRoaXMge1xuXG4gICAgICAgIGlmICghIGlzUHJlc2VudCh0aGlzLnF1ZXVlW2V2ZW50TmFtZV0pKSB7XG4gICAgICAgICAgICB0aGlzLnF1ZXVlW2V2ZW50TmFtZV0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucXVldWVbZXZlbnROYW1lXS5wdXNoKHZhbHVlKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFyIHRoZSBlbnF1ZXVlZCBxdWV1ZSBmb3IgdGhpcyBldmVudCBuYW1lIGFuZCByZXR1cm4gdGhlIGRhdGEgdGhlcmVcbiAgICAgKiBwcmV2aW91c2x5LlxuICAgICAqL1xuICAgIHByaXZhdGUgY2xlYXJFbnF1ZXVlZChldmVudE5hbWU6IHN0cmluZyk6IFZbXSB7XG5cbiAgICAgICAgaWYgKGlzUHJlc2VudCh0aGlzLnF1ZXVlW2V2ZW50TmFtZV0pKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLnF1ZXVlW2V2ZW50TmFtZV07XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5xdWV1ZVtldmVudE5hbWVdO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYXNFbnF1ZXVlZChldmVudE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gaXNQcmVzZW50KHRoaXMucXVldWVbZXZlbnROYW1lXSkgJiYgdGhpcy5xdWV1ZVtldmVudE5hbWVdLmxlbmd0aCA+IDA7XG4gICAgfVxuXG59XG4iXX0=