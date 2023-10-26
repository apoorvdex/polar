"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SerializedObject_1 = require("./SerializedObject");
const Preconditions_1 = require("../Preconditions");
class PageInfo extends SerializedObject_1.SerializedObject {
    constructor(val) {
        super(val);
        this.num = val.num;
        this.init(val);
    }
    validate() {
        Preconditions_1.Preconditions.assertNumber(this.num, "num");
    }
}
exports.PageInfo = PageInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZUluZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQYWdlSW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlEQUFvRDtBQUNwRCxvREFBK0M7QUFHL0MsTUFBYSxRQUFTLFNBQVEsbUNBQWdCO0lBZTFDLFlBQVksR0FBUTtRQUVoQixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFWCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFFbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUVuQixDQUFDO0lBRU0sUUFBUTtRQUNYLDZCQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQztDQUVKO0FBN0JELDRCQTZCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2VyaWFsaXplZE9iamVjdH0gZnJvbSAnLi9TZXJpYWxpemVkT2JqZWN0JztcbmltcG9ydCB7UHJlY29uZGl0aW9uc30gZnJvbSAnLi4vUHJlY29uZGl0aW9ucyc7XG5pbXBvcnQge0lEaW1lbnNpb25zfSBmcm9tICcuLi91dGlsL0RpbWVuc2lvbnMnO1xuXG5leHBvcnQgY2xhc3MgUGFnZUluZm8gZXh0ZW5kcyBTZXJpYWxpemVkT2JqZWN0IHtcblxuICAgIC8qKlxuICAgICAqIFRoZSBwYWdlIG51bWJlciBvZiB0aGlzIHBhZ2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IG51bTogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRpbWVuc2lvbnMsIGluIHBpeGVscywgb2YgdGhpcyBwYWdlIChpZiB3ZSBoYXZlIGl0KS4gIFVzZWQgZm9yXG4gICAgICogcmVuZGVyaW5nIHRodW1ibmFpbHMsIGV0Yy4gIEZvciBIVE1MIHBhZ2VzLCB0aGlzIGlzIHRoZSBQSFlTSUNBTCByZW5kZXJpbmdcbiAgICAgKiBvZiB0aGUgcGFnZS4gIEhUTUwgcGFnZXMgY2FuIGJlIFZFUlkgbG9uZyBzbyB0aGV5IGZvcm0gKmxvZ2ljYWwqIHBhZ2VzXG4gICAgICogYXMgd2VsbCBvbmNlIHRoZXkgYXJlIGJyb2tlbiB1cCBpbnRvIH4xMDAwcHggaGVpZ2h0IHVuaXRzLlxuICAgICAqL1xuICAgIHB1YmxpYyBkaW1lbnNpb25zPzogSURpbWVuc2lvbnM7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWw6IGFueSkge1xuXG4gICAgICAgIHN1cGVyKHZhbCk7XG5cbiAgICAgICAgdGhpcy5udW0gPSB2YWwubnVtO1xuXG4gICAgICAgIHRoaXMuaW5pdCh2YWwpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHZhbGlkYXRlKCkge1xuICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydE51bWJlcih0aGlzLm51bSwgXCJudW1cIik7XG4gICAgfVxuXG59XG4iXX0=