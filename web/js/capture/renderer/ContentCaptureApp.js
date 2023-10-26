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
const ContentCaptureController_1 = require("./ContentCaptureController");
class ContentCaptureApp {
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Starting content capture app...");
            const contentCaptureController = new ContentCaptureController_1.ContentCaptureController();
            contentCaptureController.start();
        });
    }
}
exports.ContentCaptureApp = ContentCaptureApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGVudENhcHR1cmVBcHAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDb250ZW50Q2FwdHVyZUFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEseUVBQW9FO0FBRXBFLE1BQWEsaUJBQWlCO0lBRWIsS0FBSzs7WUFFZCxPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7WUFFL0MsTUFBTSx3QkFBd0IsR0FBRyxJQUFJLG1EQUF3QixFQUFFLENBQUM7WUFDaEUsd0JBQXdCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFckMsQ0FBQztLQUFBO0NBRUo7QUFYRCw4Q0FXQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29udGVudENhcHR1cmVDb250cm9sbGVyfSBmcm9tIFwiLi9Db250ZW50Q2FwdHVyZUNvbnRyb2xsZXJcIjtcblxuZXhwb3J0IGNsYXNzIENvbnRlbnRDYXB0dXJlQXBwIHtcblxuICAgIHB1YmxpYyBhc3luYyBzdGFydCgpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIlN0YXJ0aW5nIGNvbnRlbnQgY2FwdHVyZSBhcHAuLi5cIik7XG5cbiAgICAgICAgY29uc3QgY29udGVudENhcHR1cmVDb250cm9sbGVyID0gbmV3IENvbnRlbnRDYXB0dXJlQ29udHJvbGxlcigpO1xuICAgICAgICBjb250ZW50Q2FwdHVyZUNvbnRyb2xsZXIuc3RhcnQoKTtcblxuICAgIH1cblxufVxuIl19