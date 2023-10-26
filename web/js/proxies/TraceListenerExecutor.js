"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MutationType_1 = require("./MutationType");
const TraceEvent_1 = require("./TraceEvent");
const FunctionalInterface_1 = require("../util/FunctionalInterface");
class TraceListenerExecutor {
    constructor(traceListeners, traceHandler) {
        this.traceListeners = traceListeners;
        this.traceHandler = traceHandler;
    }
    sync() {
        const path = this.traceHandler.path;
        const target = this.traceHandler.target;
        this.traceListeners.forEach(traceListener => {
            traceListener = FunctionalInterface_1.FunctionalInterface.create("onMutation", traceListener);
            for (const key in target) {
                if (target.hasOwnProperty(key)) {
                    const val = target[key];
                    const traceEvent = new TraceEvent_1.TraceEvent({
                        path,
                        mutationType: MutationType_1.MutationType.INITIAL,
                        target,
                        property: key,
                        value: val
                    });
                    traceListener.onMutation(traceEvent);
                }
            }
        });
    }
}
exports.TraceListenerExecutor = TraceListenerExecutor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhY2VMaXN0ZW5lckV4ZWN1dG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVHJhY2VMaXN0ZW5lckV4ZWN1dG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsaURBQTRDO0FBQzVDLDZDQUF3QztBQUN4QyxxRUFBZ0U7QUFFaEUsTUFBYSxxQkFBcUI7SUFZOUIsWUFBWSxjQUErQixFQUFFLFlBQWlCO1FBQzFELElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ3JDLENBQUM7SUFXTSxJQUFJO1FBS1AsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7UUFDcEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7UUFFeEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFFeEMsYUFBYSxHQUFHLHlDQUFtQixDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFFeEUsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUU7Z0JBRXRCLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDNUIsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUV4QixNQUFNLFVBQVUsR0FBRyxJQUFJLHVCQUFVLENBQUM7d0JBQzlCLElBQUk7d0JBQ0osWUFBWSxFQUFFLDJCQUFZLENBQUMsT0FBTzt3QkFDbEMsTUFBTTt3QkFDTixRQUFRLEVBQUUsR0FBRzt3QkFDYixLQUFLLEVBQUUsR0FBRztxQkFDYixDQUFDLENBQUM7b0JBRUgsYUFBYSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDeEM7YUFFSjtRQUVMLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztDQUVKO0FBNURELHNEQTREQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VHJhY2VMaXN0ZW5lcn0gZnJvbSAnLi9UcmFjZUxpc3RlbmVyJztcbmltcG9ydCB7TXV0YXRpb25UeXBlfSBmcm9tICcuL011dGF0aW9uVHlwZSc7XG5pbXBvcnQge1RyYWNlRXZlbnR9IGZyb20gJy4vVHJhY2VFdmVudCc7XG5pbXBvcnQge0Z1bmN0aW9uYWxJbnRlcmZhY2V9IGZyb20gJy4uL3V0aWwvRnVuY3Rpb25hbEludGVyZmFjZSc7XG5cbmV4cG9ydCBjbGFzcyBUcmFjZUxpc3RlbmVyRXhlY3V0b3Ige1xuXG4gICAgcHJpdmF0ZSB0cmFjZUxpc3RlbmVyczogVHJhY2VMaXN0ZW5lcltdO1xuXG4gICAgLy8gVE9ETzogdXNlIHRoZSBwcm9wZXIgdHlwZSBpbiB0aGUgZnV0dXJlIG9uY2UgcG9ydGVkIHRvIFRTLlxuICAgIHByaXZhdGUgdHJhY2VIYW5kbGVyOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gdHJhY2VMaXN0ZW5lcnMgVGhlIHNwZWNpZmljIHRyYWNlTGlzdGVuZXIgd2UncmUgd29ya2luZyB3aXRoLlxuICAgICAqIEBwYXJhbSB0cmFjZUhhbmRsZXIgVGhlIFRyYWNlSGFuZGxlciB0aGF0IHRoaXMgdHJhY2VMaXN0ZW5lciBpc1xuICAgICAqICAgICByZWdpc3RlcmVkIHdpdGguXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodHJhY2VMaXN0ZW5lcnM6IFRyYWNlTGlzdGVuZXJbXSwgdHJhY2VIYW5kbGVyOiBhbnkpIHtcbiAgICAgICAgdGhpcy50cmFjZUxpc3RlbmVycyA9IHRyYWNlTGlzdGVuZXJzO1xuICAgICAgICB0aGlzLnRyYWNlSGFuZGxlciA9IHRyYWNlSGFuZGxlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTeW5jaHJvbml6ZSBldmVudCBsaXN0ZW5lcnMgd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgbW9kZWwuXG4gICAgICpcbiAgICAgKiBUT0RPOiByZWZhY3RvciB0aGlzIHRvIHNuYXBzaG90KCkgYXMgc3luYygpIGlzIHRvbyBnZW5lcmljIGFuZCBjb3VsZFxuICAgICAqIGJlIGNvbmZ1c2VkIHdpdGggc3luYyBvZiBkaXNrIG9yIHNvbWUgb3RoZXIgYXN5bmMvc3luY2hyb25vdXMgbWV0aG9kLlxuICAgICAqXG4gICAgICogVE9ETzogcmVmYWN0b3IgdGhpcyB0byB0YWtlIG11bHRpcGxlIGV2ZW50cyBhdCBvbmNlIGluIHRoZSBvbk11dGF0aW9uXG4gICAgICogICAgICAgbWV0aG9kLlxuICAgICAqL1xuICAgIHB1YmxpYyBzeW5jKCkge1xuXG4gICAgICAgIC8vIFJFRkFDVE9SOiB0aGlzIHNob3VsZCBub3QgYmUgb25NdXRhdGlvbiBiZWNhdXNlIHRoZSBpbml0aWFsIHZhbHVlIGlzXG4gICAgICAgIC8vIG5vdCBhIG11dGF0aW9uLlxuXG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLnRyYWNlSGFuZGxlci5wYXRoO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLnRyYWNlSGFuZGxlci50YXJnZXQ7XG5cbiAgICAgICAgdGhpcy50cmFjZUxpc3RlbmVycy5mb3JFYWNoKHRyYWNlTGlzdGVuZXIgPT4ge1xuXG4gICAgICAgICAgICB0cmFjZUxpc3RlbmVyID0gRnVuY3Rpb25hbEludGVyZmFjZS5jcmVhdGUoXCJvbk11dGF0aW9uXCIsIHRyYWNlTGlzdGVuZXIpO1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0YXJnZXQpIHtcblxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSB0YXJnZXRba2V5XTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFjZUV2ZW50ID0gbmV3IFRyYWNlRXZlbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uVHlwZTogTXV0YXRpb25UeXBlLklOSVRJQUwsXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eToga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbFxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICB0cmFjZUxpc3RlbmVyLm9uTXV0YXRpb24odHJhY2VFdmVudCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbn1cbiJdfQ==