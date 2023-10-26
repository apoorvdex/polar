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
const SpectronRenderer_1 = require("../../js/test/SpectronRenderer");
const SentryLogger_1 = require("../../js/logger/SentryLogger");
SpectronRenderer_1.SpectronRenderer.run((state) => __awaiter(this, void 0, void 0, function* () {
    console.log("Running within SpectronRenderer now.");
    let sentryLogger = new SentryLogger_1.SentryLogger();
    sentryLogger.error("This is a false error from renderer: ", new Error("Fake error from renderer"));
    yield state.testResultWriter.write(true);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxRUFBZ0U7QUFDaEUsK0RBQTBEO0FBRTFELG1DQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFPLEtBQUssRUFBRSxFQUFFO0lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQztJQUVwRCxJQUFJLFlBQVksR0FBRyxJQUFJLDJCQUFZLEVBQUUsQ0FBQztJQUN0QyxZQUFZLENBQUMsS0FBSyxDQUFDLHVDQUF1QyxFQUFFLElBQUksS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQztJQUVuRyxNQUFNLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0MsQ0FBQyxDQUFBLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3BlY3Ryb25SZW5kZXJlcn0gZnJvbSAnLi4vLi4vanMvdGVzdC9TcGVjdHJvblJlbmRlcmVyJztcbmltcG9ydCB7U2VudHJ5TG9nZ2VyfSBmcm9tICcuLi8uLi9qcy9sb2dnZXIvU2VudHJ5TG9nZ2VyJztcblxuU3BlY3Ryb25SZW5kZXJlci5ydW4oYXN5bmMgKHN0YXRlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJSdW5uaW5nIHdpdGhpbiBTcGVjdHJvblJlbmRlcmVyIG5vdy5cIik7XG5cbiAgICBsZXQgc2VudHJ5TG9nZ2VyID0gbmV3IFNlbnRyeUxvZ2dlcigpO1xuICAgIHNlbnRyeUxvZ2dlci5lcnJvcihcIlRoaXMgaXMgYSBmYWxzZSBlcnJvciBmcm9tIHJlbmRlcmVyOiBcIiwgbmV3IEVycm9yKFwiRmFrZSBlcnJvciBmcm9tIHJlbmRlcmVyXCIpKTtcblxuICAgIGF3YWl0IHN0YXRlLnRlc3RSZXN1bHRXcml0ZXIud3JpdGUodHJ1ZSk7XG59KTtcbiJdfQ==