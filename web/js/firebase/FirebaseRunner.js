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
const firebase = __importStar(require("./lib/firebase"));
const Logger_1 = require("../logger/Logger");
const Firebase_1 = require("./Firebase");
const FirebaseUIAuth_1 = require("./FirebaseUIAuth");
const Functions_1 = require("../util/Functions");
const Preconditions_1 = require("../Preconditions");
const log = Logger_1.Logger.create();
class FirebaseRunner {
    constructor(state) {
        this.currentUser = null;
        this.testingFunction = Functions_1.ASYNC_NULL_FUNCTION;
        this.state = state;
    }
    run(testingFunction) {
        return __awaiter(this, void 0, void 0, function* () {
            this.testingFunction = testingFunction;
            window.addEventListener('load', () => __awaiter(this, void 0, void 0, function* () {
                Firebase_1.Firebase.init();
                if (firebase.auth().currentUser === null) {
                    FirebaseUIAuth_1.FirebaseUIAuth.login();
                }
                this.init()
                    .catch(err => log.error("Caught error on init", err));
            }));
        });
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            firebase.auth()
                .onAuthStateChanged((user) => this.onAuth(user), (err) => this.onAuthError(err));
        });
    }
    onAuth(user) {
        return __awaiter(this, void 0, void 0, function* () {
            this.currentUser = user;
            if (user) {
                log.notice("Working with user: ", user);
                const accountDetailsElement = document.getElementById("account-details");
                if (Preconditions_1.isPresent(accountDetailsElement)) {
                    accountDetailsElement.innerText = JSON.stringify(firebase.auth().currentUser, null, "  ");
                }
                yield this.testingFunction();
                mocha.run((nrFailures) => {
                    this.state.testResultWriter.write(nrFailures === 0)
                        .catch(err => console.error("Unable to write results: ", err));
                });
            }
            else {
                log.error("No user");
                yield this.state.testResultWriter.write(false);
            }
        });
    }
    onAuthError(firebaseError) {
        log.error("Firebase error: ", firebaseError);
        this.state.testResultWriter.write(false)
            .catch(err => log.error("Could not send result: ", err));
    }
}
exports.FirebaseRunner = FirebaseRunner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlyZWJhc2VSdW5uZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGaXJlYmFzZVJ1bm5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHlEQUEyQztBQUMzQyw2Q0FBd0M7QUFDeEMseUNBQW9DO0FBQ3BDLHFEQUFnRDtBQUNoRCxpREFBc0Q7QUFDdEQsb0RBQTJDO0FBRTNDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUs1QixNQUFhLGNBQWM7SUFTdkIsWUFBWSxLQUE0QjtRQUxoQyxnQkFBVyxHQUF5QixJQUFJLENBQUM7UUFHekMsb0JBQWUsR0FBd0IsK0JBQW1CLENBQUM7UUFHL0QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVZLEdBQUcsQ0FBQyxlQUFvQzs7WUFFakQsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7WUFFdkMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxHQUFTLEVBQUU7Z0JBRXZDLG1CQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBRWhCLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsS0FBSyxJQUFJLEVBQUU7b0JBR3RDLCtCQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBRTFCO2dCQUVELElBQUksQ0FBQyxJQUFJLEVBQUU7cUJBQ04sS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRTlELENBQUMsQ0FBQSxDQUFDLENBQUM7UUFFUCxDQUFDO0tBQUE7SUFFWSxJQUFJOztZQUViLFFBQVEsQ0FBQyxJQUFJLEVBQUU7aUJBQ1Ysa0JBQWtCLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQzNCLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFNUQsQ0FBQztLQUFBO0lBRVksTUFBTSxDQUFDLElBQTBCOztZQUUxQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUssQ0FBQztZQUV6QixJQUFJLElBQUksRUFBRTtnQkFFTixHQUFHLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUV4QyxNQUFNLHFCQUFxQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFFekUsSUFBSSx5QkFBUyxDQUFDLHFCQUFxQixDQUFDLEVBQUU7b0JBQ2xDLHFCQUFzQixDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUM5RjtnQkFFRCxNQUFNLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFFN0IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQWtCLEVBQUUsRUFBRTtvQkFFN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsVUFBVSxLQUFLLENBQUMsQ0FBQzt5QkFDOUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUV2RSxDQUFDLENBQUMsQ0FBQzthQUVOO2lCQUFNO2dCQUVILEdBQUcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBS3JCLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7YUFFbEQ7UUFFTCxDQUFDO0tBQUE7SUFFTSxXQUFXLENBQUMsYUFBa0M7UUFFakQsR0FBRyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUU3QyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7YUFDbkMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Q0FFSjtBQXZGRCx3Q0F1RkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NwZWN0cm9uUmVuZGVyZXJTdGF0ZX0gZnJvbSAnLi4vdGVzdC9TcGVjdHJvblJlbmRlcmVyJztcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJy4vbGliL2ZpcmViYXNlJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7RmlyZWJhc2V9IGZyb20gJy4vRmlyZWJhc2UnO1xuaW1wb3J0IHtGaXJlYmFzZVVJQXV0aH0gZnJvbSAnLi9GaXJlYmFzZVVJQXV0aCc7XG5pbXBvcnQge0FTWU5DX05VTExfRlVOQ1RJT059IGZyb20gJy4uL3V0aWwvRnVuY3Rpb25zJztcbmltcG9ydCB7aXNQcmVzZW50fSBmcm9tICcuLi9QcmVjb25kaXRpb25zJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG4vKipcbiAqIEBFbGVjdHJvblJlbmRlcmVyQ29udGV4dFxuICovXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VSdW5uZXIge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBzdGF0ZTogU3BlY3Ryb25SZW5kZXJlclN0YXRlO1xuXG4gICAgcHJpdmF0ZSBjdXJyZW50VXNlcjogZmlyZWJhc2UuVXNlciB8IG51bGwgPSBudWxsO1xuXG4gICAgLy8gbm9pbnNwZWN0aW9uIFRzTGludFxuICAgIHByaXZhdGUgdGVzdGluZ0Z1bmN0aW9uOiAoKSA9PiBQcm9taXNlPHZvaWQ+ID0gQVNZTkNfTlVMTF9GVU5DVElPTjtcblxuICAgIGNvbnN0cnVjdG9yKHN0YXRlOiBTcGVjdHJvblJlbmRlcmVyU3RhdGUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBydW4odGVzdGluZ0Z1bmN0aW9uOiAoKSA9PiBQcm9taXNlPHZvaWQ+KSB7XG5cbiAgICAgICAgdGhpcy50ZXN0aW5nRnVuY3Rpb24gPSB0ZXN0aW5nRnVuY3Rpb247XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgIEZpcmViYXNlLmluaXQoKTtcblxuICAgICAgICAgICAgaWYgKGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlciA9PT0gbnVsbCkge1xuXG4gICAgICAgICAgICAgICAgLy8gYnJpbmcgdXAgdGhlIFVJIHNvIHRoYXQgd2UgY2FuIGxvZ2luLlxuICAgICAgICAgICAgICAgIEZpcmViYXNlVUlBdXRoLmxvZ2luKCk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5pbml0KClcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihcIkNhdWdodCBlcnJvciBvbiBpbml0XCIsIGVycikpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGluaXQoKSB7XG5cbiAgICAgICAgZmlyZWJhc2UuYXV0aCgpXG4gICAgICAgICAgICAub25BdXRoU3RhdGVDaGFuZ2VkKCh1c2VyKSA9PiB0aGlzLm9uQXV0aCh1c2VyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVycikgPT4gdGhpcy5vbkF1dGhFcnJvcihlcnIpKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBvbkF1dGgodXNlcjogZmlyZWJhc2UuVXNlciB8IG51bGwpIHtcblxuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gdXNlciE7XG5cbiAgICAgICAgaWYgKHVzZXIpIHtcblxuICAgICAgICAgICAgbG9nLm5vdGljZShcIldvcmtpbmcgd2l0aCB1c2VyOiBcIiwgdXNlcik7XG5cbiAgICAgICAgICAgIGNvbnN0IGFjY291bnREZXRhaWxzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWNjb3VudC1kZXRhaWxzXCIpO1xuXG4gICAgICAgICAgICBpZiAoaXNQcmVzZW50KGFjY291bnREZXRhaWxzRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICBhY2NvdW50RGV0YWlsc0VsZW1lbnQhLmlubmVyVGV4dCA9IEpTT04uc3RyaW5naWZ5KGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlciwgbnVsbCwgXCIgIFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXdhaXQgdGhpcy50ZXN0aW5nRnVuY3Rpb24oKTtcblxuICAgICAgICAgICAgbW9jaGEucnVuKChuckZhaWx1cmVzOiBudW1iZXIpID0+IHtcblxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudGVzdFJlc3VsdFdyaXRlci53cml0ZShuckZhaWx1cmVzID09PSAwKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoXCJVbmFibGUgdG8gd3JpdGUgcmVzdWx0czogXCIsIGVycikpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBsb2cuZXJyb3IoXCJObyB1c2VyXCIpO1xuXG4gICAgICAgICAgICAvLyBpbiBhdXRvbWF0ZWQgdGVzdGluZyB3ZSBoYXZlIHRvIGZhaWwgaGVyZSBiZWNhdXNlIG5vIGNvb2tpZXMgYXJlXG4gICAgICAgICAgICAvLyBwcmVzZW50IHRvIHJ1biB0aGlzIHRlc3QgYW5kIHNvbWVvbmUgbmVlZHMgdG8gcnVuIHRoZSB0ZXN0XG4gICAgICAgICAgICAvLyBtYW51YWxseSB0byBsb2dpbiB0byBzdG9yZSBkYXRhXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnN0YXRlLnRlc3RSZXN1bHRXcml0ZXIud3JpdGUoZmFsc2UpO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHB1YmxpYyBvbkF1dGhFcnJvcihmaXJlYmFzZUVycm9yOiBmaXJlYmFzZS5hdXRoLkVycm9yKSB7XG5cbiAgICAgICAgbG9nLmVycm9yKFwiRmlyZWJhc2UgZXJyb3I6IFwiLCBmaXJlYmFzZUVycm9yKTtcblxuICAgICAgICB0aGlzLnN0YXRlLnRlc3RSZXN1bHRXcml0ZXIud3JpdGUoZmFsc2UpXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihcIkNvdWxkIG5vdCBzZW5kIHJlc3VsdDogXCIsIGVycikpO1xuICAgIH1cblxufVxuIl19