"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Preconditions_1 = require("../Preconditions");
const Reducers_1 = require("./Reducers");
const Optional_1 = require("./ts/Optional");
class ProgressTrackerIndex {
    constructor() {
        this.index = {};
    }
    update(progress) {
        if (!Preconditions_1.isPresent(progress.progress)) {
            return;
        }
        if (progress.progress === 100) {
            delete this.index[progress.task];
        }
        else {
            this.index[progress.task] = progress;
        }
    }
    min(defaultValue = 100) {
        if (Object.keys(this.index).length === 0) {
            return Optional_1.Optional.empty();
        }
        return Optional_1.Optional.of(Object.values(this.index)
            .sort((a, b) => a.progress - b.progress)
            .reduce(Reducers_1.Reducers.FIRST));
    }
}
exports.ProgressTrackerIndex = ProgressTrackerIndex;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NUcmFja2VySW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQcm9ncmVzc1RyYWNrZXJJbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLG9EQUEyQztBQUMzQyx5Q0FBb0M7QUFDcEMsNENBQXVDO0FBRXZDLE1BQWEsb0JBQW9CO0lBQWpDO1FBRVksVUFBSyxHQUFnQyxFQUFFLENBQUM7SUE4QnBELENBQUM7SUE1QlUsTUFBTSxDQUFDLFFBQWtCO1FBRTVCLElBQUksQ0FBRSx5QkFBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNoQyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLFFBQVEsQ0FBQyxRQUFRLEtBQUssR0FBRyxFQUFFO1lBQzNCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEM7YUFBTTtZQUNILElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQztTQUN4QztJQUVMLENBQUM7SUFFTSxHQUFHLENBQUMsZUFBdUIsR0FBRztRQUVqQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFFdEMsT0FBTyxtQkFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBRTNCO1FBRUQsT0FBTyxtQkFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDcEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDO2FBQ3ZDLE1BQU0sQ0FBQyxtQkFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFcEQsQ0FBQztDQUVKO0FBaENELG9EQWdDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UHJvZ3Jlc3N9IGZyb20gXCIuL1Byb2dyZXNzVHJhY2tlclwiO1xuaW1wb3J0IHtpc1ByZXNlbnR9IGZyb20gJy4uL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtSZWR1Y2Vyc30gZnJvbSBcIi4vUmVkdWNlcnNcIjtcbmltcG9ydCB7T3B0aW9uYWx9IGZyb20gXCIuL3RzL09wdGlvbmFsXCI7XG5cbmV4cG9ydCBjbGFzcyBQcm9ncmVzc1RyYWNrZXJJbmRleCB7XG5cbiAgICBwcml2YXRlIGluZGV4OiB7IFtrZXk6IG51bWJlcl06IFByb2dyZXNzIH0gPSB7fTtcblxuICAgIHB1YmxpYyB1cGRhdGUocHJvZ3Jlc3M6IFByb2dyZXNzKSB7XG5cbiAgICAgICAgaWYgKCEgaXNQcmVzZW50KHByb2dyZXNzLnByb2dyZXNzKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb2dyZXNzLnByb2dyZXNzID09PSAxMDApIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmluZGV4W3Byb2dyZXNzLnRhc2tdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbmRleFtwcm9ncmVzcy50YXNrXSA9IHByb2dyZXNzO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgbWluKGRlZmF1bHRWYWx1ZTogbnVtYmVyID0gMTAwKTogT3B0aW9uYWw8UHJvZ3Jlc3M+IHtcblxuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5pbmRleCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBubyBlbnRyaWVzIHNvIHdlJ3JlIGRvbmUuXG4gICAgICAgICAgICByZXR1cm4gT3B0aW9uYWwuZW1wdHkoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIE9wdGlvbmFsLm9mKE9iamVjdC52YWx1ZXModGhpcy5pbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5wcm9ncmVzcyAtIGIucHJvZ3Jlc3MpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZShSZWR1Y2Vycy5GSVJTVCkpO1xuXG4gICAgfVxuXG59XG5cblxuIl19