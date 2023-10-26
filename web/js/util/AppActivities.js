"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SimpleReactor_1 = require("../reactor/SimpleReactor");
class AppActivities {
    static get() {
        return this.instance;
    }
}
AppActivities.instance = new SimpleReactor_1.SimpleReactor();
exports.AppActivities = AppActivities;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwQWN0aXZpdGllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFwcEFjdGl2aXRpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFLQSw0REFBdUQ7QUFFdkQsTUFBYSxhQUFhO0lBSWYsTUFBTSxDQUFDLEdBQUc7UUFDYixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQzs7QUFKYyxzQkFBUSxHQUFHLElBQUksNkJBQWEsRUFBb0IsQ0FBQztBQUZwRSxzQ0FRQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUHJvdmlkZXMgYSBjZW50cmFsIHBsYWNlIHRvIGJyb2FkY2FzdCBhY3Rpdml0aWVzIHRoYXQgYXJlIGhhcHBlbmluZyBpbiB0aGVcbiAqIGFwcC5cbiAqL1xuaW1wb3J0IHtSZWFjdG9yfSBmcm9tICcuLi9yZWFjdG9yL1JlYWN0b3InO1xuaW1wb3J0IHtTaW1wbGVSZWFjdG9yfSBmcm9tICcuLi9yZWFjdG9yL1NpbXBsZVJlYWN0b3InO1xuXG5leHBvcnQgY2xhc3MgQXBwQWN0aXZpdGllcyB7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZSA9IG5ldyBTaW1wbGVSZWFjdG9yPEFwcEFjdGl2aXR5PGFueT4+KCk7XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwQWN0aXZpdHk8VD4ge1xuICAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICByZWFkb25seSBkYXRhPzogVDtcbn1cbiJdfQ==