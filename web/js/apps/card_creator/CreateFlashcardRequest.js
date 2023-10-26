"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateFlashcardRequest {
    constructor(docDescriptor, pageNum) {
        this.docDescriptor = docDescriptor;
        this.pageNum = pageNum;
    }
    static create(opts) {
        let result = Object.create(CreateFlashcardRequest.prototype);
        Object.assign(result, opts);
        return result;
    }
}
exports.CreateFlashcardRequest = CreateFlashcardRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlRmxhc2hjYXJkUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNyZWF0ZUZsYXNoY2FyZFJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxNQUFhLHNCQUFzQjtJQU0vQixZQUFZLGFBQTRCLEVBQUUsT0FBZTtRQUNyRCxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUMzQixDQUFDO0lBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFTO1FBQ25CLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUIsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztDQUVKO0FBakJELHdEQWlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RG9jRGVzY3JpcHRvcn0gZnJvbSAnLi4vLi4vbWV0YWRhdGEvRG9jRGVzY3JpcHRvcic7XG5pbXBvcnQge0Fubm90YXRpb25EZXNjcmlwdG9yfSBmcm9tICcuLi8uLi9tZXRhZGF0YS9Bbm5vdGF0aW9uRGVzY3JpcHRvcic7XG5cblxuZXhwb3J0IGNsYXNzIENyZWF0ZUZsYXNoY2FyZFJlcXVlc3Qge1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGRvY0Rlc2NyaXB0b3I6IERvY0Rlc2NyaXB0b3I7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgcGFnZU51bTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZG9jRGVzY3JpcHRvcjogRG9jRGVzY3JpcHRvciwgcGFnZU51bTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZG9jRGVzY3JpcHRvciA9IGRvY0Rlc2NyaXB0b3I7XG4gICAgICAgIHRoaXMucGFnZU51bSA9IHBhZ2VOdW07XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZShvcHRzOiBhbnkpOiBDcmVhdGVGbGFzaGNhcmRSZXF1ZXN0IHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IE9iamVjdC5jcmVhdGUoQ3JlYXRlRmxhc2hjYXJkUmVxdWVzdC5wcm90b3R5cGUpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHJlc3VsdCwgb3B0cyk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG59XG4iXX0=