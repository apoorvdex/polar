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
const Firebase_1 = require("../../../../web/js/firebase/Firebase");
const firebase = __importStar(require("../../../../web/js/firebase/lib/firebase"));
const Logger_1 = require("../../../../web/js/logger/Logger");
const log = Logger_1.Logger.create();
class CloudService {
    constructor(persistenceLayerManager) {
        this.persistenceLayerManager = persistenceLayerManager;
    }
    start() {
        Firebase_1.Firebase.init();
        firebase.auth()
            .onAuthStateChanged((user) => this.onAuth(user), (err) => this.onAuthError(err));
    }
    onAuth(user) {
        this.handleAuth(user)
            .catch(err => log.error("Failed to handle auth: ", err));
    }
    handleAuth(user) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.persistenceLayerManager.requiresReset()) {
                return;
            }
            if (user) {
                log.notice(`Authenticated as: ${user.displayName} (${user.email})`);
                log.info("Switching to cloud persistence layer");
                yield this.persistenceLayerManager.change('cloud');
            }
            else {
                yield this.persistenceLayerManager.change('local');
            }
        });
    }
    onAuthError(err) {
        log.error("Authentication error: ", err);
    }
}
exports.CloudService = CloudService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xvdWRTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ2xvdWRTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUVBQThEO0FBQzlELG1GQUFxRTtBQUNyRSw2REFBd0Q7QUFHeEQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsWUFBWTtJQUlyQixZQUFZLHVCQUFnRDtRQUN4RCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsdUJBQXVCLENBQUM7SUFDM0QsQ0FBQztJQUVNLEtBQUs7UUFFUixtQkFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRWhCLFFBQVEsQ0FBQyxJQUFJLEVBQUU7YUFDVixrQkFBa0IsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFDM0IsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUU1RCxDQUFDO0lBR08sTUFBTSxDQUFDLElBQTBCO1FBRXJDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO2FBQ2hCLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMseUJBQXlCLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUVqRSxDQUFDO0lBRWEsVUFBVSxDQUFDLElBQTBCOztZQUkvQyxJQUFJLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLEVBQUUsRUFBRTtnQkFHOUMsT0FBTzthQUNWO1lBRUQsSUFBSSxJQUFJLEVBQUU7Z0JBRU4sR0FBRyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsSUFBSSxDQUFDLFdBQVcsS0FBSyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFFcEUsR0FBRyxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO2dCQUNqRCxNQUFNLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDdEQ7aUJBQU07Z0JBQ0gsTUFBTSxJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3REO1FBRUwsQ0FBQztLQUFBO0lBRU8sV0FBVyxDQUFDLEdBQXdCO1FBQ3hDLEdBQUcsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDN0MsQ0FBQztDQUVKO0FBcERELG9DQW9EQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RmlyZWJhc2V9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy9maXJlYmFzZS9GaXJlYmFzZSc7XG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvZmlyZWJhc2UvbGliL2ZpcmViYXNlJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL1BlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgY2xhc3MgQ2xvdWRTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgcGVyc2lzdGVuY2VMYXllck1hbmFnZXI6IFBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyO1xuXG4gICAgY29uc3RydWN0b3IocGVyc2lzdGVuY2VMYXllck1hbmFnZXI6IFBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyKSB7XG4gICAgICAgIHRoaXMucGVyc2lzdGVuY2VMYXllck1hbmFnZXIgPSBwZXJzaXN0ZW5jZUxheWVyTWFuYWdlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnQoKSB7XG5cbiAgICAgICAgRmlyZWJhc2UuaW5pdCgpO1xuXG4gICAgICAgIGZpcmViYXNlLmF1dGgoKVxuICAgICAgICAgICAgLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4gdGhpcy5vbkF1dGgodXNlciksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnIpID0+IHRoaXMub25BdXRoRXJyb3IoZXJyKSk7XG5cbiAgICB9XG5cblxuICAgIHByaXZhdGUgb25BdXRoKHVzZXI6IGZpcmViYXNlLlVzZXIgfCBudWxsKSB7XG5cbiAgICAgICAgdGhpcy5oYW5kbGVBdXRoKHVzZXIpXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihcIkZhaWxlZCB0byBoYW5kbGUgYXV0aDogXCIsIGVycikpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBoYW5kbGVBdXRoKHVzZXI6IGZpcmViYXNlLlVzZXIgfCBudWxsKSB7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJvbkF1dGg6IFwiLCB1c2VyKTtcblxuICAgICAgICBpZiAodGhpcy5wZXJzaXN0ZW5jZUxheWVyTWFuYWdlci5yZXF1aXJlc1Jlc2V0KCkpIHtcbiAgICAgICAgICAgIC8vIHdoZW4gd2UncmUgcmVzZXR0aW5nIGRvbid0IGF0dGVtcHQgdG8gY2hhbmdlIHRoZSBwZXJzaXN0ZW5jZVxuICAgICAgICAgICAgLy8gbGF5ZXJcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1c2VyKSB7XG5cbiAgICAgICAgICAgIGxvZy5ub3RpY2UoYEF1dGhlbnRpY2F0ZWQgYXM6ICR7dXNlci5kaXNwbGF5TmFtZX0gKCR7dXNlci5lbWFpbH0pYCk7XG5cbiAgICAgICAgICAgIGxvZy5pbmZvKFwiU3dpdGNoaW5nIHRvIGNsb3VkIHBlcnNpc3RlbmNlIGxheWVyXCIpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wZXJzaXN0ZW5jZUxheWVyTWFuYWdlci5jaGFuZ2UoJ2Nsb3VkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyLmNoYW5nZSgnbG9jYWwnKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkF1dGhFcnJvcihlcnI6IGZpcmViYXNlLmF1dGguRXJyb3IpIHtcbiAgICAgICAgbG9nLmVycm9yKFwiQXV0aGVudGljYXRpb24gZXJyb3I6IFwiLCBlcnIpO1xuICAgIH1cblxufVxuIl19