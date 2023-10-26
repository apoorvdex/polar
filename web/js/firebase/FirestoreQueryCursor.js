"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Firestore_1 = require("./Firestore");
const Objects_1 = require("../util/Objects");
class FirestoreQueryCursor {
    constructor(collection, whereClause, options = new DefaultFirestoreQueryCursorOptions()) {
        this.collection = collection;
        this.whereClause = whereClause;
        this.options = Objects_1.Objects.defaults(options, new DefaultFirestoreQueryCursorOptions());
    }
    hasNext() {
        return this.querySnapshot === undefined || this.querySnapshot.size >= this.options.limit;
    }
    next() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("=========================");
            const firestore = yield Firestore_1.Firestore.getInstance();
            let query;
            if (this.querySnapshot === undefined) {
                query = firestore
                    .collection(this.collection)
                    .where(this.whereClause.fieldPath, this.whereClause.opStr, this.whereClause.value)
                    .orderBy(this.options.orderBy)
                    .limit(this.options.limit);
            }
            else {
                query = firestore
                    .collection(this.collection)
                    .where(this.whereClause.fieldPath, this.whereClause.opStr, this.whereClause.value)
                    .orderBy(this.options.orderBy)
                    .startAfter(this.startAfter)
                    .limit(this.options.limit);
            }
            this.querySnapshot = yield query.get(this.options.getOptions);
            const len = this.querySnapshot.docs.length;
            if (len > 0) {
                const lastDoc = this.querySnapshot.docs[len - 1];
                this.startAfter = lastDoc.id;
            }
            return this.querySnapshot;
        });
    }
}
exports.FirestoreQueryCursor = FirestoreQueryCursor;
class DefaultFirestoreQueryCursorOptions {
    constructor() {
        this.limit = 100;
        this.orderBy = "id";
    }
}
exports.DefaultFirestoreQueryCursorOptions = DefaultFirestoreQueryCursorOptions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlyZXN0b3JlUXVlcnlDdXJzb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGaXJlc3RvcmVRdWVyeUN1cnNvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQXNDO0FBQ3RDLDZDQUF3QztBQU94QyxNQUFhLG9CQUFvQjtJQVU3QixZQUFZLFVBQWtCLEVBQ2xCLFdBQXdCLEVBQ3hCLFVBQWdELElBQUksa0NBQWtDLEVBQUU7UUFFaEcsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxrQ0FBa0MsRUFBRSxDQUFDLENBQUM7SUFFdkYsQ0FBQztJQUVNLE9BQU87UUFDVixPQUFPLElBQUksQ0FBQyxhQUFhLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQzdGLENBQUM7SUFFWSxJQUFJOztZQUViLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztZQUV6QyxNQUFNLFNBQVMsR0FBRyxNQUFNLHFCQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7WUFFaEQsSUFBSSxLQUErQixDQUFDO1lBRXBDLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxTQUFTLEVBQUU7Z0JBRWxDLEtBQUssR0FBRyxTQUFTO3FCQUNaLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO3FCQUMzQixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7cUJBQ2pGLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztxQkFDN0IsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7YUFFbEM7aUJBQU07Z0JBRUgsS0FBSyxHQUFHLFNBQVM7cUJBQ1osVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7cUJBQzNCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztxQkFDakYsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO3FCQUM3QixVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztxQkFDM0IsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7YUFFbEM7WUFFRCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBRTlELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUUzQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUU7Z0JBQ1QsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNqRCxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUM7YUFDaEM7WUFFRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFFOUIsQ0FBQztLQUFBO0NBRUo7QUFoRUQsb0RBZ0VDO0FBUUQsTUFBYSxrQ0FBa0M7SUFBL0M7UUFDb0IsVUFBSyxHQUFXLEdBQUcsQ0FBQztRQUNwQixZQUFPLEdBQVcsSUFBSSxDQUFDO0lBQzNDLENBQUM7Q0FBQTtBQUhELGdGQUdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGaXJlc3RvcmV9IGZyb20gJy4vRmlyZXN0b3JlJztcbmltcG9ydCB7T2JqZWN0c30gZnJvbSAnLi4vdXRpbC9PYmplY3RzJztcblxuLyoqXG4gKiBCdWlsZCBhIHNpbXBsZSBxdWVyeSBjdXJzb3IgZm9yIEZpcmVzb3RyZSBxdWVyaWVzLlxuICpcbiAqIGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL2ZpcmVzdG9yZS9xdWVyeS1kYXRhL3F1ZXJ5LWN1cnNvcnNcbiAqL1xuZXhwb3J0IGNsYXNzIEZpcmVzdG9yZVF1ZXJ5Q3Vyc29yIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29sbGVjdGlvbjogc3RyaW5nO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgd2hlcmVDbGF1c2U6IFdoZXJlQ2xhdXNlO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgb3B0aW9uczogRmlyZXN0b3JlUXVlcnlDdXJzb3JPcHRpb25zO1xuXG4gICAgcHJpdmF0ZSBxdWVyeVNuYXBzaG90OiBmaXJlYmFzZS5maXJlc3RvcmUuUXVlcnlTbmFwc2hvdCB8IHVuZGVmaW5lZDtcblxuICAgIHByaXZhdGUgc3RhcnRBZnRlcjogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgY29uc3RydWN0b3IoY29sbGVjdGlvbjogc3RyaW5nLFxuICAgICAgICAgICAgICAgIHdoZXJlQ2xhdXNlOiBXaGVyZUNsYXVzZSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBQYXJ0aWFsPEZpcmVzdG9yZVF1ZXJ5Q3Vyc29yT3B0aW9ucz4gPSBuZXcgRGVmYXVsdEZpcmVzdG9yZVF1ZXJ5Q3Vyc29yT3B0aW9ucygpKSB7XG5cbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uID0gY29sbGVjdGlvbjtcbiAgICAgICAgdGhpcy53aGVyZUNsYXVzZSA9IHdoZXJlQ2xhdXNlO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3RzLmRlZmF1bHRzKG9wdGlvbnMsIG5ldyBEZWZhdWx0RmlyZXN0b3JlUXVlcnlDdXJzb3JPcHRpb25zKCkpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGhhc05leHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5U25hcHNob3QgPT09IHVuZGVmaW5lZCB8fCB0aGlzLnF1ZXJ5U25hcHNob3Quc2l6ZSA+PSB0aGlzLm9wdGlvbnMubGltaXQ7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIG5leHQoKTogUHJvbWlzZTxmaXJlYmFzZS5maXJlc3RvcmUuUXVlcnlTbmFwc2hvdD4ge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiPT09PT09PT09PT09PT09PT09PT09PT09PVwiKTtcblxuICAgICAgICBjb25zdCBmaXJlc3RvcmUgPSBhd2FpdCBGaXJlc3RvcmUuZ2V0SW5zdGFuY2UoKTtcblxuICAgICAgICBsZXQgcXVlcnk6IGZpcmViYXNlLmZpcmVzdG9yZS5RdWVyeTtcblxuICAgICAgICBpZiAodGhpcy5xdWVyeVNuYXBzaG90ID09PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgcXVlcnkgPSBmaXJlc3RvcmVcbiAgICAgICAgICAgICAgICAuY29sbGVjdGlvbih0aGlzLmNvbGxlY3Rpb24pXG4gICAgICAgICAgICAgICAgLndoZXJlKHRoaXMud2hlcmVDbGF1c2UuZmllbGRQYXRoLCB0aGlzLndoZXJlQ2xhdXNlLm9wU3RyLCB0aGlzLndoZXJlQ2xhdXNlLnZhbHVlKVxuICAgICAgICAgICAgICAgIC5vcmRlckJ5KHRoaXMub3B0aW9ucy5vcmRlckJ5KVxuICAgICAgICAgICAgICAgIC5saW1pdCh0aGlzLm9wdGlvbnMubGltaXQpO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHF1ZXJ5ID0gZmlyZXN0b3JlXG4gICAgICAgICAgICAgICAgLmNvbGxlY3Rpb24odGhpcy5jb2xsZWN0aW9uKVxuICAgICAgICAgICAgICAgIC53aGVyZSh0aGlzLndoZXJlQ2xhdXNlLmZpZWxkUGF0aCwgdGhpcy53aGVyZUNsYXVzZS5vcFN0ciwgdGhpcy53aGVyZUNsYXVzZS52YWx1ZSlcbiAgICAgICAgICAgICAgICAub3JkZXJCeSh0aGlzLm9wdGlvbnMub3JkZXJCeSlcbiAgICAgICAgICAgICAgICAuc3RhcnRBZnRlcih0aGlzLnN0YXJ0QWZ0ZXIpXG4gICAgICAgICAgICAgICAgLmxpbWl0KHRoaXMub3B0aW9ucy5saW1pdCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucXVlcnlTbmFwc2hvdCA9IGF3YWl0IHF1ZXJ5LmdldCh0aGlzLm9wdGlvbnMuZ2V0T3B0aW9ucyk7XG5cbiAgICAgICAgY29uc3QgbGVuID0gdGhpcy5xdWVyeVNuYXBzaG90LmRvY3MubGVuZ3RoO1xuXG4gICAgICAgIGlmIChsZW4gPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBsYXN0RG9jID0gdGhpcy5xdWVyeVNuYXBzaG90LmRvY3NbbGVuIC0gMV07XG4gICAgICAgICAgICB0aGlzLnN0YXJ0QWZ0ZXIgPSBsYXN0RG9jLmlkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlTbmFwc2hvdDtcblxuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpcmVzdG9yZVF1ZXJ5Q3Vyc29yT3B0aW9ucyB7XG4gICAgcmVhZG9ubHkgbGltaXQ6IG51bWJlcjtcbiAgICByZWFkb25seSBvcmRlckJ5OiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgZ2V0T3B0aW9ucz86IGZpcmViYXNlLmZpcmVzdG9yZS5HZXRPcHRpb25zO1xufVxuXG5leHBvcnQgY2xhc3MgRGVmYXVsdEZpcmVzdG9yZVF1ZXJ5Q3Vyc29yT3B0aW9ucyBpbXBsZW1lbnRzIEZpcmVzdG9yZVF1ZXJ5Q3Vyc29yT3B0aW9ucyB7XG4gICAgcHVibGljIHJlYWRvbmx5IGxpbWl0OiBudW1iZXIgPSAxMDA7XG4gICAgcHVibGljIHJlYWRvbmx5IG9yZGVyQnk6IHN0cmluZyA9IFwiaWRcIjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXaGVyZUNsYXVzZSB7XG4gICAgcmVhZG9ubHkgZmllbGRQYXRoOiBzdHJpbmcgfCBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRQYXRoO1xuICAgIHJlYWRvbmx5IG9wU3RyOiBmaXJlYmFzZS5maXJlc3RvcmUuV2hlcmVGaWx0ZXJPcDtcbiAgICByZWFkb25seSB2YWx1ZTogYW55O1xufVxuIl19