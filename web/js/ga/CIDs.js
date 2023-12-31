"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const CIDProviders_1 = require("./CIDProviders");
const Optional_1 = require("../util/ts/Optional");
const CIDProvider_1 = require("./CIDProvider");
const Logger_1 = require("../logger/Logger");
const Preconditions_1 = require("../Preconditions");
const log = Logger_1.Logger.create();
const KEY = 'ga_cid';
class CIDs {
    static get() {
        let cid = this.fetch();
        if (!cid) {
            cid = this.create();
        }
        this.set(cid);
        return cid;
    }
    static fetch() {
        const mainCID = Optional_1.Optional.of(CIDProviders_1.CIDProviders.getInstance())
            .filter(current => Preconditions_1.isPresent(current))
            .map(current => current.get())
            .getOrUndefined();
        const localCID = window.localStorage.getItem(KEY);
        return Optional_1.Optional.first(mainCID, localCID).getOrUndefined();
    }
    static set(cid) {
        window.localStorage.setItem(KEY, cid);
        CIDProviders_1.CIDProviders.setInstance(new CIDProvider_1.CIDProvider(cid));
    }
    static create() {
        return uuid_1.v4();
    }
}
exports.CIDs = CIDs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ0lEcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNJRHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBZ0M7QUFHaEMsaURBQTRDO0FBQzVDLGtEQUE2QztBQUM3QywrQ0FBMEM7QUFDMUMsNkNBQXdDO0FBQ3hDLG9EQUEyQztBQUUzQyxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFJNUIsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDO0FBRXJCLE1BQWEsSUFBSTtJQUtOLE1BQU0sQ0FBQyxHQUFHO1FBRWIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXZCLElBQUksQ0FBRSxHQUFHLEVBQUU7WUFDUCxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3ZCO1FBR0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVkLE9BQU8sR0FBRyxDQUFDO0lBRWYsQ0FBQztJQUVPLE1BQU0sQ0FBQyxLQUFLO1FBRWhCLE1BQU0sT0FBTyxHQUFHLG1CQUFRLENBQUMsRUFBRSxDQUFDLDJCQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDbEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMseUJBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNyQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDN0IsY0FBYyxFQUFFLENBQUM7UUFFdEIsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFJbEQsT0FBTyxtQkFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7SUFFOUQsQ0FBQztJQUVPLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBVztRQUMxQixNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdEMsMkJBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSx5QkFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVPLE1BQU0sQ0FBQyxNQUFNO1FBS2pCLE9BQU8sU0FBSSxFQUFFLENBQUM7SUFDbEIsQ0FBQztDQUVKO0FBaERELG9CQWdEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7djQgYXMgdXVpZH0gZnJvbSAndXVpZCc7XG5pbXBvcnQge3JlbW90ZX0gZnJvbSAnZWxlY3Ryb24nO1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAnLi4vdXRpbC9Qcm92aWRlcnMnO1xuaW1wb3J0IHtDSURQcm92aWRlcnN9IGZyb20gJy4vQ0lEUHJvdmlkZXJzJztcbmltcG9ydCB7T3B0aW9uYWx9IGZyb20gJy4uL3V0aWwvdHMvT3B0aW9uYWwnO1xuaW1wb3J0IHtDSURQcm92aWRlcn0gZnJvbSAnLi9DSURQcm92aWRlcic7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge2lzUHJlc2VudH0gZnJvbSAnLi4vUHJlY29uZGl0aW9ucyc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZGVjbGFyZSB2YXIgd2luZG93OiBXaW5kb3c7XG5cbmNvbnN0IEtFWSA9ICdnYV9jaWQnO1xuXG5leHBvcnQgY2xhc3MgQ0lEcyB7XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYSB1bmlxdWUgQ0lEIGZyb20gbG9jYWxTdG9yYWdlLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0KCk6IHN0cmluZyB7XG5cbiAgICAgICAgbGV0IGNpZCA9IHRoaXMuZmV0Y2goKTtcblxuICAgICAgICBpZiAoISBjaWQpIHtcbiAgICAgICAgICAgIGNpZCA9IHRoaXMuY3JlYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhbHdheXMgc2V0IGl0IGJhY2sgc28gdGhhdCB0aGUgdmFsdWUgaXMgY29waWVkIGludG8gbWFpbi5cbiAgICAgICAgdGhpcy5zZXQoY2lkKTtcblxuICAgICAgICByZXR1cm4gY2lkO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZmV0Y2goKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcblxuICAgICAgICBjb25zdCBtYWluQ0lEID0gT3B0aW9uYWwub2YoQ0lEUHJvdmlkZXJzLmdldEluc3RhbmNlKCkpXG4gICAgICAgICAgICAuZmlsdGVyKGN1cnJlbnQgPT4gaXNQcmVzZW50KGN1cnJlbnQpKVxuICAgICAgICAgICAgLm1hcChjdXJyZW50ID0+IGN1cnJlbnQuZ2V0KCkpXG4gICAgICAgICAgICAuZ2V0T3JVbmRlZmluZWQoKTtcblxuICAgICAgICBjb25zdCBsb2NhbENJRCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShLRVkpO1xuXG4gICAgICAgIC8vIGxvZy5kZWJ1ZyhgbWFpbkNJRDogJHttYWluQ0lEfSwgbG9jYWxDSUQ6ICR7bG9jYWxDSUR9YCk7XG5cbiAgICAgICAgcmV0dXJuIE9wdGlvbmFsLmZpcnN0KG1haW5DSUQsIGxvY2FsQ0lEKS5nZXRPclVuZGVmaW5lZCgpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgc2V0KGNpZDogc3RyaW5nKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShLRVksIGNpZCk7XG4gICAgICAgIENJRFByb3ZpZGVycy5zZXRJbnN0YW5jZShuZXcgQ0lEUHJvdmlkZXIoY2lkKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgY3JlYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIC8vIFRoZSBjaWQgbXVzdCBiZSBVVUlEIHY0LCB1c2luZyBhIFVVSUQgdjEgd2lsbCBub3Qgd29yaywgdGhlIGRvYyBpc1xuICAgICAgICAvLyBtaXNsZWFkaW5nIHRoZXJlIGJlY2F1c2UgaXQgc3RhdGVzIHRoYXQgaXQgc2hvdWxkIHVzZSB2NCwgbm90IHRoYXQgaXRcbiAgICAgICAgLy8gbXVzdC4gR29vZ2xlIGRvZXNuJ3QgaGFuZGxlIHRoZSB2MSBhbmQgZ2VuZXJhdGVzIGl0cyBvd24gdXVpZCB3aGljaFxuICAgICAgICAvLyBtZXNzZXMgdG90YWxseSB0aGUgd2hvbGUgdGhpbmcuXG4gICAgICAgIHJldHVybiB1dWlkKCk7XG4gICAgfVxuXG59XG4iXX0=