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
const SpectronMain_1 = require("../../js/test/SpectronMain");
const ScreenshotService_1 = require("../../js/screenshots/ScreenshotService");
SpectronMain_1.SpectronMain.run((state) => __awaiter(this, void 0, void 0, function* () {
    state.window.loadFile(__dirname + '/app.html');
    let screenshotService = new ScreenshotService_1.ScreenshotService();
    screenshotService.start();
    yield state.testResultWriter.write(true);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNkRBQXdEO0FBQ3hELDhFQUF5RTtBQUV6RSwyQkFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFNLEtBQUssRUFBQyxFQUFFO0lBRTNCLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsQ0FBQztJQUUvQyxJQUFJLGlCQUFpQixHQUFHLElBQUkscUNBQWlCLEVBQUUsQ0FBQztJQUNoRCxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUUxQixNQUFNLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFN0MsQ0FBQyxDQUFBLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3BlY3Ryb25NYWlufSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uTWFpbic7XG5pbXBvcnQge1NjcmVlbnNob3RTZXJ2aWNlfSBmcm9tICcuLi8uLi9qcy9zY3JlZW5zaG90cy9TY3JlZW5zaG90U2VydmljZSc7XG5cblNwZWN0cm9uTWFpbi5ydW4oYXN5bmMgc3RhdGUgPT4ge1xuXG4gICAgc3RhdGUud2luZG93LmxvYWRGaWxlKF9fZGlybmFtZSArICcvYXBwLmh0bWwnKTtcblxuICAgIGxldCBzY3JlZW5zaG90U2VydmljZSA9IG5ldyBTY3JlZW5zaG90U2VydmljZSgpO1xuICAgIHNjcmVlbnNob3RTZXJ2aWNlLnN0YXJ0KCk7XG5cbiAgICBhd2FpdCBzdGF0ZS50ZXN0UmVzdWx0V3JpdGVyLndyaXRlKHRydWUpO1xuXG59KTtcbiJdfQ==