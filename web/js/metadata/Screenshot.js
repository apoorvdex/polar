"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Preconditions_1 = require("../Preconditions");
const Image_1 = require("./Image");
class Screenshot extends Image_1.Image {
    constructor(opts) {
        super(opts);
        this.id = opts.id;
        this.created = opts.created;
        this.init(opts);
    }
    validate() {
        super.validate();
        Preconditions_1.Preconditions.assertPresent(this.id, "id");
        Preconditions_1.Preconditions.assertPresent(this.created, "created");
    }
}
exports.Screenshot = Screenshot;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NyZWVuc2hvdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNjcmVlbnNob3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxvREFBK0M7QUFDL0MsbUNBQThCO0FBRzlCLE1BQWEsVUFBVyxTQUFRLGFBQUs7SUFhakMsWUFBWSxJQUFTO1FBRWpCLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVaLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVwQixDQUFDO0lBRU0sUUFBUTtRQUVYLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVqQiw2QkFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNDLDZCQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFFekQsQ0FBQztDQUVKO0FBakNELGdDQWlDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UHJlY29uZGl0aW9uc30gZnJvbSAnLi4vUHJlY29uZGl0aW9ucyc7XG5pbXBvcnQge0ltYWdlfSBmcm9tICcuL0ltYWdlJztcbmltcG9ydCB7SVNPRGF0ZVRpbWVTdHJpbmd9IGZyb20gJy4vSVNPRGF0ZVRpbWVTdHJpbmdzJztcblxuZXhwb3J0IGNsYXNzIFNjcmVlbnNob3QgZXh0ZW5kcyBJbWFnZSB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdW5pcXVlIElEIGZvciB0aGlzIG9iamVjdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgaWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aW1lIHRoaXMgb2JqZWN0IHdhcyBjcmVhdGVkXG4gICAgICpcbiAgICAgKi9cbiAgICBwdWJsaWMgY3JlYXRlZDogSVNPRGF0ZVRpbWVTdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRzOiBhbnkpIHtcblxuICAgICAgICBzdXBlcihvcHRzKTtcblxuICAgICAgICB0aGlzLmlkID0gb3B0cy5pZDtcbiAgICAgICAgdGhpcy5jcmVhdGVkID0gb3B0cy5jcmVhdGVkO1xuXG4gICAgICAgIHRoaXMuaW5pdChvcHRzKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyB2YWxpZGF0ZSgpIHtcblxuICAgICAgICBzdXBlci52YWxpZGF0ZSgpO1xuXG4gICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0UHJlc2VudCh0aGlzLmlkLCBcImlkXCIpO1xuICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydFByZXNlbnQodGhpcy5jcmVhdGVkLCBcImNyZWF0ZWRcIik7XG5cbiAgICB9XG5cbn1cbiJdfQ==