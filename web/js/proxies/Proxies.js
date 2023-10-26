"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TraceListeners_1 = require("./TraceListeners");
const Objects_1 = require("../util/Objects");
const TraceHandler_1 = require("./TraceHandler");
const ObjectPaths_1 = require("./ObjectPaths");
const Paths_1 = require("../util/Paths");
let sequence = 0;
class Proxies {
    static create(target, traceListeners, opts) {
        if (typeof target !== "object") {
            throw new Error("Only works on objects: " + typeof target);
        }
        opts = Objects_1.Objects.defaults(opts, {
            pathPrefix: ""
        });
        if (!traceListeners) {
            traceListeners = [];
        }
        const traceListenersArray = TraceListeners_1.TraceListeners.asArray(traceListeners);
        const objectPathEntries = ObjectPaths_1.ObjectPaths.recurse(target);
        let root;
        objectPathEntries.forEach((objectPathEntry) => {
            let path = objectPathEntry.path;
            if (opts.pathPrefix && opts.pathPrefix !== "") {
                path = Paths_1.Paths.create(opts.pathPrefix, objectPathEntry.path);
            }
            const proxy = Proxies.trace(path, objectPathEntry.value, traceListenersArray);
            if (objectPathEntry.parent != null) {
                objectPathEntry.parent[objectPathEntry.parentKey] = proxy;
            }
            else {
                root = proxy;
            }
        });
        return root;
    }
    static trace(path, value, traceListeners) {
        if (typeof value !== "object") {
            throw new Error("We can only trace object types.");
        }
        traceListeners = TraceListeners_1.TraceListeners.asArray(traceListeners);
        if (Object.isFrozen(value)) {
            return value;
        }
        const traceIdentifier = sequence++;
        const traceHandler = new TraceHandler_1.TraceHandler(path, traceListeners, value, traceIdentifier, Proxies);
        const privateMembers = [];
        if (value.addTraceListener) {
            value.addTraceListener(traceListeners);
        }
        else {
            Object.defineProperty(value, "addTraceListener", {
                value: traceHandler.addTraceListener.bind(traceHandler),
                enumerable: false,
                writable: false
            });
        }
        return new Proxy(value, traceHandler);
    }
}
exports.Proxies = Proxies;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJveGllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlByb3hpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFTQSxxREFBZ0Q7QUFDaEQsNkNBQXdDO0FBQ3hDLGlEQUE0QztBQUM1QywrQ0FBMEM7QUFDMUMseUNBQW9DO0FBUXBDLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztBQUVqQixNQUFhLE9BQU87SUFPVCxNQUFNLENBQUMsTUFBTSxDQUFJLE1BQVMsRUFDVCxjQUFxRixFQUNyRixJQUFVO1FBRTlCLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFO1lBQzVCLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLEdBQUcsT0FBTyxNQUFNLENBQUMsQ0FBQztTQUM5RDtRQUVELElBQUksR0FBRyxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFDMUIsVUFBVSxFQUFFLEVBQUU7U0FDakIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUNqQixjQUFjLEdBQUcsRUFBRSxDQUFDO1NBQ3ZCO1FBRUQsTUFBTSxtQkFBbUIsR0FBRywrQkFBYyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVuRSxNQUFNLGlCQUFpQixHQUFHLHlCQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXRELElBQUksSUFBUyxDQUFDO1FBRWQsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUMsZUFBZSxFQUFFLEVBQUU7WUFFMUMsSUFBSSxJQUFJLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQztZQUVoQyxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxFQUFFLEVBQUU7Z0JBQzNDLElBQUksR0FBRyxhQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzlEO1lBRUQsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsZUFBZSxDQUFDLEtBQUssRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1lBSTlFLElBQUksZUFBZSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUU7Z0JBQ2hDLGVBQWUsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLFNBQVUsQ0FBQyxHQUFHLEtBQUssQ0FBQzthQUM5RDtpQkFBTTtnQkFDSCxJQUFJLEdBQUcsS0FBSyxDQUFDO2FBQ2hCO1FBRUwsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQztJQUVoQixDQUFDO0lBRU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFZLEVBQUUsS0FBVSxFQUFFLGNBQW1CO1FBRTdELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzNCLE1BQU0sSUFBSSxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQztTQUN0RDtRQUVELGNBQWMsR0FBRywrQkFBYyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUV4RCxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFReEIsT0FBTyxLQUFLLENBQUM7U0FFaEI7UUFFRCxNQUFNLGVBQWUsR0FBRyxRQUFRLEVBQUUsQ0FBQztRQU1uQyxNQUFNLFlBQVksR0FBRyxJQUFJLDJCQUFZLENBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBUzdGLE1BQU0sY0FBYyxHQUFHLEVBa0J0QixDQUFDO1FBY0YsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLEVBQUU7WUFDeEIsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQzFDO2FBQU07WUFDSCxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxrQkFBa0IsRUFBRTtnQkFDN0MsS0FBSyxFQUFFLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUN2RCxVQUFVLEVBQUUsS0FBSztnQkFDakIsUUFBUSxFQUFFLEtBQUs7YUFDbEIsQ0FBQyxDQUFDO1NBQ047UUFFRCxPQUFPLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztJQUUxQyxDQUFDO0NBRUo7QUF0SUQsMEJBc0lDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBGcmFtZXdvcmsgdG8gY3JlYXRlIGxpc3RlbmVycyB0byB3YXRjaCBjaGFuZ2VzIGluIGRpY3Rpb25hcmllcy4gIFdlIGNhblxuICogY2hhbmdlIHRoZXNlIGludG8gb2JzZXJ2YWJsZXMgaWYgd2Ugd2FudCBieSBtYWtpbmcgdGhlbSBzdHJlYW1zIG9mIFNFVCBhbmRcbiAqIERFTEVURSBvcGVyYXRpb25zIGJ1dCBzaW5jZSB3ZSdyZSBub3QgcmVhbGx5IHVzaW5nIFJ4SlMgb3IgYW55dGhpbmcgb2YgdGhlXG4gKiBzb3J0IHlldCBvdXIgb3B0aW9ucyBhcmUgb3Blbi5cbiAqXG4gKiBOb3RlIHRoYXQgT2JqZWN0Lm9ic2VydmUgYW5kIG90aGVyIGNoYW5nZXMgd2VyZSBhcHBhcmVudGx5IG5ldmVyIHJhdGlmaWVkXG4gKiBzbyB3ZSBoYXZlIHRvIHVzZSBQcm94eSBvYmplY3RzIHRvIGltcGxlbWVudCB0aGlzIGZ1bmN0aW9uYWxpdHkuXG4gKi9cbmltcG9ydCB7VHJhY2VMaXN0ZW5lcnN9IGZyb20gXCIuL1RyYWNlTGlzdGVuZXJzXCI7XG5pbXBvcnQge09iamVjdHN9IGZyb20gXCIuLi91dGlsL09iamVjdHNcIjtcbmltcG9ydCB7VHJhY2VIYW5kbGVyfSBmcm9tIFwiLi9UcmFjZUhhbmRsZXJcIjtcbmltcG9ydCB7T2JqZWN0UGF0aHN9IGZyb20gXCIuL09iamVjdFBhdGhzXCI7XG5pbXBvcnQge1BhdGhzfSBmcm9tIFwiLi4vdXRpbC9QYXRoc1wiO1xuaW1wb3J0IHtUcmFjZUxpc3RlbmVyLCBUcmFjZUxpc3RlbmVyRnVuY3Rpb259IGZyb20gJy4vVHJhY2VMaXN0ZW5lcic7XG5pbXBvcnQge1RyYWNlRXZlbnR9IGZyb20gJy4vVHJhY2VFdmVudCc7XG5cbi8qKlxuICogQSBzZXF1ZW5jZSBpZGVudGlmaWVyIGdlbmVyYXRvciBzbyB0aGF0IHdlIGNhbiBhc3NpZ24gb2JqZWN0cyBhIHVuaXF1ZSB2YWx1ZVxuICogd2hpbGUgd2UncmUgZW51bWVyYXRpbmcgdGhlbS5cbiAqL1xubGV0IHNlcXVlbmNlID0gMDtcblxuZXhwb3J0IGNsYXNzIFByb3hpZXMge1xuXG4gICAgLyoqXG4gICAgICogRGVlcGx5IHRyYWNlIHRoZSBnaXZlbiBvYmplY3QgYW5kIGNhbGwgYmFjayBvbiB0aGUgdHJhY2VMaXN0ZW5lciBldmVyeVxuICAgICAqIHRpbWUgd2Ugbm90aWNlIGEgbXV0YXRpb24uICBUaGUgdHJhY2UgbGlzdGVuZXIgcmVjZWl2ZXMgdGhlIGZvbGxvd2luZ1xuICAgICAqIGFyZ3VtZW50czpcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZTxUPih0YXJnZXQ6IFQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2VMaXN0ZW5lcnM/OiBUcmFjZUxpc3RlbmVyIHwgVHJhY2VMaXN0ZW5lckZ1bmN0aW9uIHwgUmVhZG9ubHlBcnJheTxUcmFjZUxpc3RlbmVyPixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRzPzogYW55KTogVCB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk9ubHkgd29ya3Mgb24gb2JqZWN0czogXCIgKyB0eXBlb2YgdGFyZ2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9wdHMgPSBPYmplY3RzLmRlZmF1bHRzKG9wdHMsIHtcbiAgICAgICAgICAgIHBhdGhQcmVmaXg6IFwiXCJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCF0cmFjZUxpc3RlbmVycykge1xuICAgICAgICAgICAgdHJhY2VMaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRyYWNlTGlzdGVuZXJzQXJyYXkgPSBUcmFjZUxpc3RlbmVycy5hc0FycmF5KHRyYWNlTGlzdGVuZXJzKTtcblxuICAgICAgICBjb25zdCBvYmplY3RQYXRoRW50cmllcyA9IE9iamVjdFBhdGhzLnJlY3Vyc2UodGFyZ2V0KTtcblxuICAgICAgICBsZXQgcm9vdDogYW55O1xuXG4gICAgICAgIG9iamVjdFBhdGhFbnRyaWVzLmZvckVhY2goKG9iamVjdFBhdGhFbnRyeSkgPT4ge1xuXG4gICAgICAgICAgICBsZXQgcGF0aCA9IG9iamVjdFBhdGhFbnRyeS5wYXRoO1xuXG4gICAgICAgICAgICBpZiAob3B0cy5wYXRoUHJlZml4ICYmIG9wdHMucGF0aFByZWZpeCAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIHBhdGggPSBQYXRocy5jcmVhdGUob3B0cy5wYXRoUHJlZml4LCBvYmplY3RQYXRoRW50cnkucGF0aCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHByb3h5ID0gUHJveGllcy50cmFjZShwYXRoLCBvYmplY3RQYXRoRW50cnkudmFsdWUsIHRyYWNlTGlzdGVuZXJzQXJyYXkpO1xuXG4gICAgICAgICAgICAvLyByZXBsYWNlIHRoZSBvYmplY3Qga2V5IGluIHRoZSBwYXJlbnQgd2l0aCBhIG5ldyBvYmplY3QgdGhhdCBpc1xuICAgICAgICAgICAgLy8gdHJhY2VkLlxuICAgICAgICAgICAgaWYgKG9iamVjdFBhdGhFbnRyeS5wYXJlbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG9iamVjdFBhdGhFbnRyeS5wYXJlbnRbb2JqZWN0UGF0aEVudHJ5LnBhcmVudEtleSFdID0gcHJveHk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvb3QgPSBwcm94eTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcm9vdDtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgdHJhY2UocGF0aDogc3RyaW5nLCB2YWx1ZTogYW55LCB0cmFjZUxpc3RlbmVyczogYW55KSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiV2UgY2FuIG9ubHkgdHJhY2Ugb2JqZWN0IHR5cGVzLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyYWNlTGlzdGVuZXJzID0gVHJhY2VMaXN0ZW5lcnMuYXNBcnJheSh0cmFjZUxpc3RlbmVycyk7XG5cbiAgICAgICAgaWYgKE9iamVjdC5pc0Zyb3plbih2YWx1ZSkpIHtcblxuICAgICAgICAgICAgLy8gRG8gbm90IGhhbmRsZSBmcm96ZW4gb2JqZWN0cyBidXQgbWlnaHQgaGF2ZSB0byBpbiB0aGUgZnV0dXJlIGZvclxuICAgICAgICAgICAgLy8gdGhlIGluaXRpYWwgdmFsdWUuXG5cbiAgICAgICAgICAgIC8vIFRPRE86IGl0J3MgcHJvYmFibHkgYmVzdCB0byB0aHJvdyBhbiBlcnJvciBoZXJlIGJlY2F1c2Ugd2UndmVcbiAgICAgICAgICAgIC8vIGJlZW4gYXNrZWQgdG8gdHJhY2UgYnV0IHdlJ3JlIG5vdCB0cmFjaW5nLiAgVGhpcyBpcyBhbiBBUEkgZmxhdy5cblxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0cmFjZUlkZW50aWZpZXIgPSBzZXF1ZW5jZSsrO1xuXG4gICAgICAgIC8vIGZvciB0aGlzIHRvIHdvcmssIEkgbmVlZCB0byBrZWVwIHRyYWNrIG9mIEFMTCBUcmFjZUhhbmRsZXJzIGluIHRoZVxuICAgICAgICAvLyBvYmplY3QgaXRzZWxmIGJ5IHBvc3NpYmx5IGhhdmluZyBhIF9fdHJhY2VIYW5kbGVycyBvciBzb21lIG90aGVyXG4gICAgICAgIC8vIHN0cmF0ZWd5IG9yIF9fcGF0aHMgYW5kIHRoZW4gZGlzcGF0Y2ggdGhhdCB3YXkuLi5cblxuICAgICAgICBjb25zdCB0cmFjZUhhbmRsZXIgPSBuZXcgVHJhY2VIYW5kbGVyKHBhdGgsIHRyYWNlTGlzdGVuZXJzLCB2YWx1ZSwgdHJhY2VJZGVudGlmaWVyLCBQcm94aWVzKTtcblxuICAgICAgICAvLyBUT0RPOiBjb3VsZCBJIHN0b3JlIHRoZXNlIGluIHRoZSBUcmFjZUhhbmRsZXIgYW5kIG5vdCBpbiB0aGUgdmFsdWU/XG4gICAgICAgIC8vXG4gICAgICAgIC8vIHNpbmNlIHdlIGhhdmUgb25lIFRyYWNlSGFuZGxlciBwZXIgcGF0aCB0aGlzIG1pZ2h0IHdvcmsgYnV0IEkgd291bGRcbiAgICAgICAgLy8gbmVlZCB0byBmaWd1cmUgb3V0IGhvdyB0byBnZXQgdGhlIHJpZ2h0IHZhbHVlIGZyb20gdGhlIFRyYWNlSGFuZGxlci5cbiAgICAgICAgLy8gSSB0aGluayBJIGNhbiBkbyB0aGlzIGJ5IGN1c3RvbSBoYW5kbGluZyB0aGUgZ2V0KCkgUHJveHkgYW5kIHRoZW5cbiAgICAgICAgLy8gcmV0dXJuaW5nIF9fdHJhY2VJZGVudGlmaWVyIG9yIF9fdHJhY2VMaXN0ZW5lcnMgYmFzZWQgb24gdGhlIGNhbGxlci5cblxuICAgICAgICBjb25zdCBwcml2YXRlTWVtYmVycyA9IFtcblxuICAgICAgICAgICAgLy8gdGhlIF9fdHJhY2VJZGVudGlmaWVyIGlzIGEgdW5pcXVlIGtleSBmb3IgdGhlIG9iamVjdCB3aGljaCB3ZVxuICAgICAgICAgICAgLy8gdXNlXG4gICAgICAgICAgICAvLyB0byBpZGVudGlmeSB3aGljaCBvbmUgaXMgYmVpbmcgdHJhY2VkLiAgVGhpcyB3YXkgd2UgZXNzZW50aWFsbHlcbiAgICAgICAgICAgIC8vIGhhdmUgYSBwb2ludGVyIHdlIGNhbiB1c2UgdG8gd29yayB3aXRoIHRoZSBvYmplY3QgZGlyZWN0bHkuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8geyBuYW1lOiBcIl9fdHJhY2VJZGVudGlmaWVyXCIsIHZhbHVlOiB0cmFjZUlkZW50aWZpZXIgfSxcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAvLyBrZWVwIHRoZSB0cmFjZUxpc3RlbmVyIHJlZ2lzdGVyZWQgd2l0aCB0aGUgb2JqZWN0IHNvIHRoYXQgSVxuICAgICAgICAgICAgLy8gY2FuIC8vIHZlcmlmeSB0aGF0IHRoZSBvYmplY3Qgd2UncmUgd29ya2luZyB3aXRoIGlzIGFjdHVhbGx5XG4gICAgICAgICAgICAvLyBiZWluZyB1c2VkIC8vIHdpdGggdGhlIHNhbWUgdHJhY2UgYW5kIG5vdCBiZWluZyByZS10cmFjZWQgYnlcbiAgICAgICAgICAgIC8vIHNvbWV0aGluZyBlbHNlLiAgeyBuYW1lOiBcIl9fdHJhY2VMaXN0ZW5lcnNcIiwgdmFsdWU6XG4gICAgICAgICAgICAvLyB0cmFjZUxpc3RlbmVycyB9LFxuXG4gICAgICAgICAgICAvLyBrZWVwIHRoZSBwYXRoIHRvIHRoaXMgb2JqZWN0IGZvciBkZWJ1ZyBwdXJwb3Nlcy5cbiAgICAgICAgICAgIC8vIHsgbmFtZTogXCJfX3BhdGhcIiwgdmFsdWU6IHBhdGggfVxuXG4gICAgICAgIF07XG5cbiAgICAgICAgLy8gcHJpdmF0ZU1lbWJlcnMuZm9yRWFjaChwcml2YXRlTWVtYmVyID0+IHtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgIGlmKCEgKHByaXZhdGVNZW1iZXIubmFtZSBpbiB2YWx1ZSkpIHtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgICAgICAvLyB0aGUgX190cmFjZUlkZW50aWZpZXIgaXMgYSB1bmlxdWUga2V5IGZvciB0aGUgb2JqZWN0XG4gICAgICAgIC8vIHdoaWNoIHdlIHVzZSAvLyB0byBpZGVudGlmeSB3aGljaCBvbmUgaXMgYmVpbmcgdHJhY2VkLiAgVGhpcyB3YXkgd2VcbiAgICAgICAgLy8gZXNzZW50aWFsbHkgLy8gaGF2ZSBhIHBvaW50ZXIgd2UgY2FuIHVzZSB0byB3b3JrIHdpdGggdGhlIG9iamVjdFxuICAgICAgICAvLyBkaXJlY3RseS4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgcHJpdmF0ZU1lbWJlci5uYW1lLCB7IHZhbHVlOlxuICAgICAgICAvLyBwcml2YXRlTWVtYmVyLnZhbHVlLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IGZhbHNlIH0pOyAgfSAgfSk7XG5cbiAgICAgICAgLy8gVE9ETzogZG8gdGhpcyBpbiB0aGUgVHJhY2VIYW5kbGVyIGdldCBtZXRob2Q/XG5cbiAgICAgICAgaWYgKHZhbHVlLmFkZFRyYWNlTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHZhbHVlLmFkZFRyYWNlTGlzdGVuZXIodHJhY2VMaXN0ZW5lcnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbHVlLCBcImFkZFRyYWNlTGlzdGVuZXJcIiwge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB0cmFjZUhhbmRsZXIuYWRkVHJhY2VMaXN0ZW5lci5iaW5kKHRyYWNlSGFuZGxlciksXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgUHJveHkodmFsdWUsIHRyYWNlSGFuZGxlcik7XG5cbiAgICB9XG5cbn1cblxuXG4iXX0=