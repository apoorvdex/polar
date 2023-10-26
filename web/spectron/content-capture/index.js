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
const ContentCaptureClient_1 = require("../../js/capture/renderer/ContentCaptureClient");
const SpectronMain_1 = require("../../js/test/SpectronMain");
SpectronMain_1.SpectronMain.run((state) => __awaiter(this, void 0, void 0, function* () {
    let window = state.window;
    let contentCaptureClient = new ContentCaptureClient_1.ContentCaptureClient(window);
    let waitForControllerPromise = contentCaptureClient.waitForController();
    window.loadFile(__dirname + '/app.html');
    console.log("Waiting for controller startup promise...");
    yield waitForControllerPromise;
    console.log("Waiting for controller startup promise...done");
    console.log("Waiting for new capture result now:");
    let captured = yield contentCaptureClient.requestNewCapture();
    console.log("GOT IT!", captured);
    captured.url = '...removed...';
    yield state.testResultWriter.write(captured);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEseUZBQW9GO0FBQ3BGLDZEQUF3RDtBQUV4RCwyQkFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFNLEtBQUssRUFBQyxFQUFFO0lBRTNCLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFFMUIsSUFBSSxvQkFBb0IsR0FBRyxJQUFJLDJDQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRTVELElBQUksd0JBQXdCLEdBQUcsb0JBQW9CLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUV4RSxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsQ0FBQztJQUV6QyxPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7SUFDekQsTUFBTSx3QkFBd0IsQ0FBQztJQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLCtDQUErQyxDQUFDLENBQUM7SUFFN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO0lBRW5ELElBQUksUUFBUSxHQUFHLE1BQU0sb0JBQW9CLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUU5RCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUVqQyxRQUFRLENBQUMsR0FBRyxHQUFHLGVBQWUsQ0FBQztJQUUvQixNQUFNLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFakQsQ0FBQyxDQUFBLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29udGVudENhcHR1cmVDbGllbnR9IGZyb20gJy4uLy4uL2pzL2NhcHR1cmUvcmVuZGVyZXIvQ29udGVudENhcHR1cmVDbGllbnQnO1xuaW1wb3J0IHtTcGVjdHJvbk1haW59IGZyb20gJy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb25NYWluJztcblxuU3BlY3Ryb25NYWluLnJ1bihhc3luYyBzdGF0ZSA9PiB7XG5cbiAgICBsZXQgd2luZG93ID0gc3RhdGUud2luZG93O1xuXG4gICAgbGV0IGNvbnRlbnRDYXB0dXJlQ2xpZW50ID0gbmV3IENvbnRlbnRDYXB0dXJlQ2xpZW50KHdpbmRvdyk7XG5cbiAgICBsZXQgd2FpdEZvckNvbnRyb2xsZXJQcm9taXNlID0gY29udGVudENhcHR1cmVDbGllbnQud2FpdEZvckNvbnRyb2xsZXIoKTtcblxuICAgIHdpbmRvdy5sb2FkRmlsZShfX2Rpcm5hbWUgKyAnL2FwcC5odG1sJyk7XG5cbiAgICBjb25zb2xlLmxvZyhcIldhaXRpbmcgZm9yIGNvbnRyb2xsZXIgc3RhcnR1cCBwcm9taXNlLi4uXCIpO1xuICAgIGF3YWl0IHdhaXRGb3JDb250cm9sbGVyUHJvbWlzZTtcbiAgICBjb25zb2xlLmxvZyhcIldhaXRpbmcgZm9yIGNvbnRyb2xsZXIgc3RhcnR1cCBwcm9taXNlLi4uZG9uZVwiKTtcblxuICAgIGNvbnNvbGUubG9nKFwiV2FpdGluZyBmb3IgbmV3IGNhcHR1cmUgcmVzdWx0IG5vdzpcIik7XG5cbiAgICBsZXQgY2FwdHVyZWQgPSBhd2FpdCBjb250ZW50Q2FwdHVyZUNsaWVudC5yZXF1ZXN0TmV3Q2FwdHVyZSgpO1xuXG4gICAgY29uc29sZS5sb2coXCJHT1QgSVQhXCIsIGNhcHR1cmVkKTtcblxuICAgIGNhcHR1cmVkLnVybCA9ICcuLi5yZW1vdmVkLi4uJztcblxuICAgIGF3YWl0IHN0YXRlLnRlc3RSZXN1bHRXcml0ZXIud3JpdGUoY2FwdHVyZWQpO1xuXG59KTtcbiJdfQ==