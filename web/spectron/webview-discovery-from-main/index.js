"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const electron_1 = require("electron");
const SpectronMain_1 = require("../../js/test/SpectronMain");
const wait_for_expect_1 = __importDefault(require("wait-for-expect"));
const BrowserWindows_1 = require("../../js/electron/framework/BrowserWindows");
SpectronMain_1.SpectronMain.run((state) => __awaiter(this, void 0, void 0, function* () {
    state.window.loadFile(__dirname + '/app.html');
    yield wait_for_expect_1.default(() => {
        chai_1.assert.equal(electron_1.webContents.getAllWebContents().length, 2);
    });
    const allWebContents = electron_1.webContents.getAllWebContents();
    chai_1.assert.ok(electron_1.webContents.fromId(allWebContents[0].id));
    chai_1.assert.ok(electron_1.webContents.fromId(allWebContents[1].id));
    yield wait_for_expect_1.default(() => {
        const links = allWebContents.map(current => current.getURL()).sort();
        chai_1.expect(links[0]).to.satisfy((current) => current.endsWith('/app.html'));
        chai_1.expect(links[1]).to.satisfy((current) => current.endsWith('/example.html'));
    });
    const webContentsHostIndex = BrowserWindows_1.BrowserWindows.computeWebContentsToHostIndex();
    chai_1.assert.equal(webContentsHostIndex.keys.length, 1);
    yield state.testResultWriter.write(true);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQW9DO0FBQ3BDLHVDQUFxQztBQUNyQyw2REFBd0Q7QUFDeEQsc0VBQTRDO0FBRTVDLCtFQUEwRTtBQUUxRSwyQkFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFNLEtBQUssRUFBQyxFQUFFO0lBRTNCLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsQ0FBQztJQU8vQyxNQUFNLHlCQUFhLENBQUMsR0FBRyxFQUFFO1FBQ3JCLGFBQU0sQ0FBQyxLQUFLLENBQUMsc0JBQVcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sY0FBYyxHQUFHLHNCQUFXLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUV2RCxhQUFNLENBQUMsRUFBRSxDQUFDLHNCQUFXLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BELGFBQU0sQ0FBQyxFQUFFLENBQUMsc0JBQVcsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFcEQsTUFBTSx5QkFBYSxDQUFDLEdBQUcsRUFBRTtRQUVyQixNQUFNLEtBQUssR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFckUsYUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFlLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNoRixhQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQWUsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBRXhGLENBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxvQkFBb0IsR0FBRywrQkFBYyxDQUFDLDZCQUE2QixFQUFFLENBQUM7SUFFNUUsYUFBTSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRWxELE1BQU0sS0FBSyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUU3QyxDQUFDLENBQUEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3NlcnQsIGV4cGVjdH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQge3dlYkNvbnRlbnRzfSBmcm9tIFwiZWxlY3Ryb25cIjtcbmltcG9ydCB7U3BlY3Ryb25NYWlufSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uTWFpbic7XG5pbXBvcnQgd2FpdEZvckV4cGVjdCBmcm9tICd3YWl0LWZvci1leHBlY3QnO1xuaW1wb3J0IEJyb3dzZXJXaW5kb3cgPSBFbGVjdHJvbi5Ccm93c2VyV2luZG93O1xuaW1wb3J0IHtCcm93c2VyV2luZG93c30gZnJvbSAnLi4vLi4vanMvZWxlY3Ryb24vZnJhbWV3b3JrL0Jyb3dzZXJXaW5kb3dzJztcblxuU3BlY3Ryb25NYWluLnJ1bihhc3luYyBzdGF0ZSA9PiB7XG5cbiAgICBzdGF0ZS53aW5kb3cubG9hZEZpbGUoX19kaXJuYW1lICsgJy9hcHAuaHRtbCcpO1xuXG4gICAgLy8gdGhlIG9ubHkgb3RoZXIgd2F5IHRvIGdldCB0aGUgV2ViQ29udGVudHMgZnJvbSBhIFdlYnZpZXdcbiAgICAvLyBpcyBmcm9tIHRoZSByZW5kZXJlciB2aWFcbiAgICAvL1xuICAgIC8vIGxldCB3ZWJWaWV3ID0gd2ViRnJhbWUuZ2V0RnJhbWVGb3JTZWxlY3Rvcignd2VidmlldycpO1xuXG4gICAgYXdhaXQgd2FpdEZvckV4cGVjdCgoKSA9PiB7XG4gICAgICAgIGFzc2VydC5lcXVhbCh3ZWJDb250ZW50cy5nZXRBbGxXZWJDb250ZW50cygpLmxlbmd0aCwgMik7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhbGxXZWJDb250ZW50cyA9IHdlYkNvbnRlbnRzLmdldEFsbFdlYkNvbnRlbnRzKCk7XG5cbiAgICBhc3NlcnQub2sod2ViQ29udGVudHMuZnJvbUlkKGFsbFdlYkNvbnRlbnRzWzBdLmlkKSk7XG4gICAgYXNzZXJ0Lm9rKHdlYkNvbnRlbnRzLmZyb21JZChhbGxXZWJDb250ZW50c1sxXS5pZCkpO1xuXG4gICAgYXdhaXQgd2FpdEZvckV4cGVjdCgoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgbGlua3MgPSBhbGxXZWJDb250ZW50cy5tYXAoY3VycmVudCA9PiBjdXJyZW50LmdldFVSTCgpKS5zb3J0KCk7XG5cbiAgICAgICAgZXhwZWN0KGxpbmtzWzBdKS50by5zYXRpc2Z5KChjdXJyZW50OiBzdHJpbmcpID0+IGN1cnJlbnQuZW5kc1dpdGgoJy9hcHAuaHRtbCcpKTtcbiAgICAgICAgZXhwZWN0KGxpbmtzWzFdKS50by5zYXRpc2Z5KChjdXJyZW50OiBzdHJpbmcpID0+IGN1cnJlbnQuZW5kc1dpdGgoJy9leGFtcGxlLmh0bWwnKSk7XG5cbiAgICB9KTtcblxuICAgIGNvbnN0IHdlYkNvbnRlbnRzSG9zdEluZGV4ID0gQnJvd3NlcldpbmRvd3MuY29tcHV0ZVdlYkNvbnRlbnRzVG9Ib3N0SW5kZXgoKTtcblxuICAgIGFzc2VydC5lcXVhbCh3ZWJDb250ZW50c0hvc3RJbmRleC5rZXlzLmxlbmd0aCwgMSk7XG5cbiAgICBhd2FpdCBzdGF0ZS50ZXN0UmVzdWx0V3JpdGVyLndyaXRlKHRydWUpO1xuXG59KTtcblxuIl19