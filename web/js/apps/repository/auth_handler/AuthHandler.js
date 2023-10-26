"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const URLs_1 = require("../../../util/URLs");
const Firebase_1 = require("../../../firebase/Firebase");
const firebase = __importStar(require("../../../firebase/lib/firebase"));
const AppRuntime_1 = require("../../../AppRuntime");
const Optional_1 = require("../../../util/ts/Optional");
class AuthHandlers {
    static get() {
        if (AppRuntime_1.AppRuntime.isElectron()) {
            return new ElectronAuthHandler();
        }
        else if (AppRuntime_1.AppRuntime.isBrowser()) {
            return new BrowserAuthHandler();
        }
        else {
            throw new Error("No auth handler.");
        }
    }
}
exports.AuthHandlers = AuthHandlers;
class DefaultAuthHandler {
    authenticate() {
        return __awaiter(this, void 0, void 0, function* () {
            const base = URLs_1.URLs.toBase(document.location.href);
            const newLocation = new URL('/apps/repository/login.html', base).toString();
            window.location.href = newLocation;
        });
    }
    userInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            return Optional_1.Optional.empty();
        });
    }
}
class BrowserAuthHandler extends DefaultAuthHandler {
    authenticate() {
        return __awaiter(this, void 0, void 0, function* () {
            const base = URLs_1.URLs.toBase(document.location.href);
            const newLocation = new URL('/login.html', base).toString();
            window.location.href = newLocation;
        });
    }
    status() {
        return __awaiter(this, void 0, void 0, function* () {
            Firebase_1.Firebase.init();
            if ((yield this.currentUser()) === null) {
                return 'needs-authentication';
            }
            return undefined;
        });
    }
    userInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.currentUser();
            if (user === null) {
                return Optional_1.Optional.empty();
            }
            return Optional_1.Optional.of({
                displayName: Optional_1.Optional.of(user.displayName).getOrUndefined(),
                email: Optional_1.Optional.of(user.email).getOrUndefined(),
                emailVerified: user.emailVerified,
                photoURL: Optional_1.Optional.of(user.photoURL).getOrUndefined(),
                uid: user.uid
            });
        });
    }
    currentUser() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const unsubscribe = firebase.auth()
                    .onAuthStateChanged((user) => {
                    unsubscribe();
                    resolve(user);
                }, (err) => {
                    unsubscribe();
                    reject(err);
                });
            });
        });
    }
}
exports.BrowserAuthHandler = BrowserAuthHandler;
class ElectronAuthHandler extends DefaultAuthHandler {
    status() {
        return __awaiter(this, void 0, void 0, function* () {
            return undefined;
        });
    }
}
exports.ElectronAuthHandler = ElectronAuthHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aEhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBdXRoSGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUF3QztBQUN4Qyx5REFBb0Q7QUFDcEQseUVBQTJEO0FBQzNELG9EQUErQztBQUMvQyx3REFBbUQ7QUFZbkQsTUFBYSxZQUFZO0lBRWQsTUFBTSxDQUFDLEdBQUc7UUFFYixJQUFJLHVCQUFVLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFJekIsT0FBTyxJQUFJLG1CQUFtQixFQUFFLENBQUM7U0FFcEM7YUFBTSxJQUFJLHVCQUFVLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFFL0IsT0FBTyxJQUFJLGtCQUFrQixFQUFFLENBQUM7U0FFbkM7YUFBTTtZQUNILE1BQU0sSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUN2QztJQUVMLENBQUM7Q0FFSjtBQXBCRCxvQ0FvQkM7QUFFRCxNQUFlLGtCQUFrQjtJQUVoQixZQUFZOztZQUVyQixNQUFNLElBQUksR0FBRyxXQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEQsTUFBTSxXQUFXLEdBQUcsSUFBSSxHQUFHLENBQUMsNkJBQTZCLEVBQUUsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7WUFFNUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO1FBRXZDLENBQUM7S0FBQTtJQUVZLFFBQVE7O1lBQ2pCLE9BQU8sbUJBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM1QixDQUFDO0tBQUE7Q0FJSjtBQUVELE1BQWEsa0JBQW1CLFNBQVEsa0JBQWtCO0lBRXpDLFlBQVk7O1lBRXJCLE1BQU0sSUFBSSxHQUFHLFdBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsRCxNQUFNLFdBQVcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7WUFFNUQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO1FBRXZDLENBQUM7S0FBQTtJQUVZLE1BQU07O1lBRWYsbUJBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUVoQixJQUFJLENBQUEsTUFBTSxJQUFJLENBQUMsV0FBVyxFQUFFLE1BQUssSUFBSSxFQUFFO2dCQUNuQyxPQUFPLHNCQUFzQixDQUFDO2FBQ2pDO1lBRUQsT0FBTyxTQUFTLENBQUM7UUFFckIsQ0FBQztLQUFBO0lBRVksUUFBUTs7WUFFakIsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFFdEMsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO2dCQUNmLE9BQU8sbUJBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUMzQjtZQUVELE9BQU8sbUJBQVEsQ0FBQyxFQUFFLENBQUM7Z0JBQ2YsV0FBVyxFQUFFLG1CQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxjQUFjLEVBQUU7Z0JBQzNELEtBQUssRUFBRSxtQkFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsY0FBYyxFQUFFO2dCQUMvQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7Z0JBQ2pDLFFBQVEsRUFBRSxtQkFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxFQUFFO2dCQUNyRCxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7YUFDaEIsQ0FBQyxDQUFDO1FBRVAsQ0FBQztLQUFBO0lBRWEsV0FBVzs7WUFFckIsT0FBTyxJQUFJLE9BQU8sQ0FBdUIsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBRXpELE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUU7cUJBQzlCLGtCQUFrQixDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7b0JBQ3pCLFdBQVcsRUFBRSxDQUFDO29CQUNkLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsQ0FBQyxFQUNELENBQUMsR0FBRyxFQUFFLEVBQUU7b0JBQ0osV0FBVyxFQUFFLENBQUM7b0JBQ2QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQixDQUFDLENBQUMsQ0FBQztZQUVYLENBQUMsQ0FBQyxDQUFDO1FBRVAsQ0FBQztLQUFBO0NBRUo7QUEzREQsZ0RBMkRDO0FBRUQsTUFBYSxtQkFBb0IsU0FBUSxrQkFBa0I7SUFFMUMsTUFBTTs7WUFFZixPQUFPLFNBQVMsQ0FBQztRQUVyQixDQUFDO0tBQUE7Q0FFSjtBQVJELGtEQVFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtVUkxzfSBmcm9tICcuLi8uLi8uLi91dGlsL1VSTHMnO1xuaW1wb3J0IHtGaXJlYmFzZX0gZnJvbSAnLi4vLi4vLi4vZmlyZWJhc2UvRmlyZWJhc2UnO1xuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnLi4vLi4vLi4vZmlyZWJhc2UvbGliL2ZpcmViYXNlJztcbmltcG9ydCB7QXBwUnVudGltZX0gZnJvbSAnLi4vLi4vLi4vQXBwUnVudGltZSc7XG5pbXBvcnQge09wdGlvbmFsfSBmcm9tICcuLi8uLi8uLi91dGlsL3RzL09wdGlvbmFsJztcblxuZXhwb3J0IGludGVyZmFjZSBBdXRoSGFuZGxlciB7XG5cbiAgICBhdXRoZW50aWNhdGUoKTogUHJvbWlzZTx2b2lkPjtcblxuICAgIHN0YXR1cygpOiBQcm9taXNlPEF1dGhTdGF0dXM+O1xuXG4gICAgdXNlckluZm8oKTogUHJvbWlzZTxPcHRpb25hbDxVc2VySW5mbz4+O1xuXG59XG5cbmV4cG9ydCBjbGFzcyBBdXRoSGFuZGxlcnMge1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXQoKTogQXV0aEhhbmRsZXIge1xuXG4gICAgICAgIGlmIChBcHBSdW50aW1lLmlzRWxlY3Ryb24oKSkge1xuXG4gICAgICAgICAgICAvLyBUT0RPOiBFbGVjdHJvbiBjYW4gYWN1dGFsbHkgdXNlIHRoZSBCcm93c2VyQXV0aEhhbmRsZXJcbiAgICAgICAgICAgIC8vIGp1c3QgZmluZS4uLlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFbGVjdHJvbkF1dGhIYW5kbGVyKCk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChBcHBSdW50aW1lLmlzQnJvd3NlcigpKSB7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXcgQnJvd3NlckF1dGhIYW5kbGVyKCk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGF1dGggaGFuZGxlci5cIik7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG5hYnN0cmFjdCBjbGFzcyBEZWZhdWx0QXV0aEhhbmRsZXIgaW1wbGVtZW50cyBBdXRoSGFuZGxlciB7XG5cbiAgICBwdWJsaWMgYXN5bmMgYXV0aGVudGljYXRlKCk6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIGNvbnN0IGJhc2UgPSBVUkxzLnRvQmFzZShkb2N1bWVudC5sb2NhdGlvbiEuaHJlZik7XG4gICAgICAgIGNvbnN0IG5ld0xvY2F0aW9uID0gbmV3IFVSTCgnL2FwcHMvcmVwb3NpdG9yeS9sb2dpbi5odG1sJywgYmFzZSkudG9TdHJpbmcoKTtcblxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IG5ld0xvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHVzZXJJbmZvKCk6IFByb21pc2U8T3B0aW9uYWw8VXNlckluZm8+PiB7XG4gICAgICAgIHJldHVybiBPcHRpb25hbC5lbXB0eSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhYnN0cmFjdCBzdGF0dXMoKTogUHJvbWlzZTxBdXRoU3RhdHVzPjtcblxufVxuXG5leHBvcnQgY2xhc3MgQnJvd3NlckF1dGhIYW5kbGVyIGV4dGVuZHMgRGVmYXVsdEF1dGhIYW5kbGVyIHtcblxuICAgIHB1YmxpYyBhc3luYyBhdXRoZW50aWNhdGUoKTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICAgICAgY29uc3QgYmFzZSA9IFVSTHMudG9CYXNlKGRvY3VtZW50LmxvY2F0aW9uIS5ocmVmKTtcbiAgICAgICAgY29uc3QgbmV3TG9jYXRpb24gPSBuZXcgVVJMKCcvbG9naW4uaHRtbCcsIGJhc2UpLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBuZXdMb2NhdGlvbjtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzdGF0dXMoKTogUHJvbWlzZTxBdXRoU3RhdHVzPiB7XG5cbiAgICAgICAgRmlyZWJhc2UuaW5pdCgpO1xuXG4gICAgICAgIGlmIChhd2FpdCB0aGlzLmN1cnJlbnRVc2VyKCkgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiAnbmVlZHMtYXV0aGVudGljYXRpb24nO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyB1c2VySW5mbygpOiBQcm9taXNlPE9wdGlvbmFsPFVzZXJJbmZvPj4ge1xuXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLmN1cnJlbnRVc2VyKCk7XG5cbiAgICAgICAgaWYgKHVzZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBPcHRpb25hbC5lbXB0eSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIE9wdGlvbmFsLm9mKHtcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBPcHRpb25hbC5vZih1c2VyLmRpc3BsYXlOYW1lKS5nZXRPclVuZGVmaW5lZCgpLFxuICAgICAgICAgICAgZW1haWw6IE9wdGlvbmFsLm9mKHVzZXIuZW1haWwpLmdldE9yVW5kZWZpbmVkKCksXG4gICAgICAgICAgICBlbWFpbFZlcmlmaWVkOiB1c2VyLmVtYWlsVmVyaWZpZWQsXG4gICAgICAgICAgICBwaG90b1VSTDogT3B0aW9uYWwub2YodXNlci5waG90b1VSTCkuZ2V0T3JVbmRlZmluZWQoKSxcbiAgICAgICAgICAgIHVpZDogdXNlci51aWRcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGN1cnJlbnRVc2VyKCk6IFByb21pc2U8ZmlyZWJhc2UuVXNlciB8IG51bGw+IHtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8ZmlyZWJhc2UuVXNlciB8IG51bGw+KChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdW5zdWJzY3JpYmUgPSBmaXJlYmFzZS5hdXRoKClcbiAgICAgICAgICAgICAgICAub25BdXRoU3RhdGVDaGFuZ2VkKCh1c2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodXNlcik7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBFbGVjdHJvbkF1dGhIYW5kbGVyIGV4dGVuZHMgRGVmYXVsdEF1dGhIYW5kbGVyIHtcblxuICAgIHB1YmxpYyBhc3luYyBzdGF0dXMoKTogUHJvbWlzZTxBdXRoU3RhdHVzPiB7XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgIH1cblxufVxuXG5leHBvcnQgdHlwZSBBdXRoU3RhdHVzID0gJ25lZWRzLWF1dGhlbnRpY2F0aW9uJyB8ICB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBnZW5lcmljIFVzZXJJbmZvIG9iamVjdCBmb3IgdGhpcyBhdXRoIGhhbmRsZXIuIElmIHRoZXJlJ3Mgbm8gZW1haWwgdGhlIHVzZXJcbiAqIGlzIGFub255bW91cyBhbmQgaGFzbid0IHlldCBjcmVhdGVkIGFuIGFjY291bnQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVXNlckluZm8ge1xuXG4gICAgcmVhZG9ubHkgZGlzcGxheU5hbWU/OiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgZW1haWw/OiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgZW1haWxWZXJpZmllZDogYm9vbGVhbjtcbiAgICByZWFkb25seSBwaG90b1VSTD86IHN0cmluZztcbiAgICByZWFkb25seSB1aWQ6IHN0cmluZztcblxufVxuIl19