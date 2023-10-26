"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ModelPersister_1 = require("./ModelPersister");
class ModelPersisterFactory {
    constructor(persistenceLayer) {
        this.persistenceLayer = persistenceLayer;
    }
    create(docMeta) {
        return new ModelPersister_1.ModelPersister(this.persistenceLayer, docMeta);
    }
}
exports.ModelPersisterFactory = ModelPersisterFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kZWxQZXJzaXN0ZXJGYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTW9kZWxQZXJzaXN0ZXJGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEscURBQWdEO0FBRWhELE1BQWEscUJBQXFCO0lBSTlCLFlBQVksZ0JBQTRDO1FBQ3BELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztJQUM3QyxDQUFDO0lBS00sTUFBTSxDQUFDLE9BQWdCO1FBQzFCLE9BQU8sSUFBSSwrQkFBYyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5RCxDQUFDO0NBRUo7QUFmRCxzREFlQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RG9jTWV0YX0gZnJvbSAnLi4vbWV0YWRhdGEvRG9jTWV0YSc7XG5pbXBvcnQge0xpc3RlbmFibGVQZXJzaXN0ZW5jZUxheWVyfSBmcm9tICcuLi9kYXRhc3RvcmUvTGlzdGVuYWJsZVBlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtNb2RlbFBlcnNpc3Rlcn0gZnJvbSAnLi9Nb2RlbFBlcnNpc3Rlcic7XG5cbmV4cG9ydCBjbGFzcyBNb2RlbFBlcnNpc3RlckZhY3Rvcnkge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBwZXJzaXN0ZW5jZUxheWVyOiBMaXN0ZW5hYmxlUGVyc2lzdGVuY2VMYXllcjtcblxuICAgIGNvbnN0cnVjdG9yKHBlcnNpc3RlbmNlTGF5ZXI6IExpc3RlbmFibGVQZXJzaXN0ZW5jZUxheWVyKSB7XG4gICAgICAgIHRoaXMucGVyc2lzdGVuY2VMYXllciA9IHBlcnNpc3RlbmNlTGF5ZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSBhIG5ldyBwZXJzaXN0ZW50IE1vZGVsLlxuICAgICAqL1xuICAgIHB1YmxpYyBjcmVhdGUoZG9jTWV0YTogRG9jTWV0YSk6IE1vZGVsUGVyc2lzdGVyIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNb2RlbFBlcnNpc3Rlcih0aGlzLnBlcnNpc3RlbmNlTGF5ZXIsIGRvY01ldGEpO1xuICAgIH1cblxufVxuXG4iXX0=