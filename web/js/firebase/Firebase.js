"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase = __importStar(require("./lib/firebase"));
class Firebase {
    static init() {
        if (this.app) {
            return this.app;
        }
        const config = {
            apiKey: "AIzaSyDokaZQO8TkmwtU4WKGnxKNyVumD79JYW0",
            authDomain: "polar-32b0f.firebaseapp.com",
            databaseURL: "https://polar-32b0f.firebaseio.com",
            projectId: "polar-32b0f",
            storageBucket: "polar-32b0f.appspot.com",
            messagingSenderId: "919499255851",
        };
        return this.app = firebase.initializeApp(config);
    }
}
exports.Firebase = Firebase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlyZWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGaXJlYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx5REFBMkM7QUFHM0MsTUFBYSxRQUFRO0lBT1YsTUFBTSxDQUFDLElBQUk7UUFFZCxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDVixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7U0FDbkI7UUFFRCxNQUFNLE1BQU0sR0FBRztZQUNYLE1BQU0sRUFBRSx5Q0FBeUM7WUFDakQsVUFBVSxFQUFFLDZCQUE2QjtZQUN6QyxXQUFXLEVBQUUsb0NBQW9DO1lBQ2pELFNBQVMsRUFBRSxhQUFhO1lBQ3hCLGFBQWEsRUFBRSx5QkFBeUI7WUFDeEMsaUJBQWlCLEVBQUUsY0FBYztTQUVwQyxDQUFDO1FBRUYsT0FBTyxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFckQsQ0FBQztDQUVKO0FBM0JELDRCQTJCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJy4vbGliL2ZpcmViYXNlJztcbi8vIGltcG9ydCBmYiA9IGZpcmViYXNlO1xuXG5leHBvcnQgY2xhc3MgRmlyZWJhc2Uge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXBwPzogZmlyZWJhc2UuYXBwLkFwcDtcblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm0gaW5pdCBvZiBGaXJlYmFzZSB3aXRoIG91ciBhdXRoIGNyZWRlbnRpYWxzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgaW5pdCgpOiBmaXJlYmFzZS5hcHAuQXBwIHtcblxuICAgICAgICBpZiAodGhpcy5hcHApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgIGFwaUtleTogXCJBSXphU3lEb2thWlFPOFRrbXd0VTRXS0dueEtOeVZ1bUQ3OUpZVzBcIixcbiAgICAgICAgICAgIGF1dGhEb21haW46IFwicG9sYXItMzJiMGYuZmlyZWJhc2VhcHAuY29tXCIsXG4gICAgICAgICAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL3BvbGFyLTMyYjBmLmZpcmViYXNlaW8uY29tXCIsXG4gICAgICAgICAgICBwcm9qZWN0SWQ6IFwicG9sYXItMzJiMGZcIixcbiAgICAgICAgICAgIHN0b3JhZ2VCdWNrZXQ6IFwicG9sYXItMzJiMGYuYXBwc3BvdC5jb21cIixcbiAgICAgICAgICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjkxOTQ5OTI1NTg1MVwiLFxuICAgICAgICAgICAgLy8gdGltZXN0YW1wc0luU25hcHNob3RzOiB0cnVlXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwID0gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCB0eXBlIFVzZXJJRCA9IHN0cmluZztcbiJdfQ==