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
const SpectronMain2_1 = require("../../js/test/SpectronMain2");
const Capture_1 = require("../../js/capture/Capture");
const BrowserProfiles_1 = require("../../js/capture/BrowserProfiles");
const BrowserRegistry_1 = __importDefault(require("../../js/capture/BrowserRegistry"));
SpectronMain2_1.SpectronMain2.create().run((state) => __awaiter(this, void 0, void 0, function* () {
    const browser = BrowserRegistry_1.default.DEFAULT;
    let browserProfile = BrowserProfiles_1.BrowserProfiles.toBrowserProfile(browser, 'DEFAULT');
    const url = "http://www.example.com";
    browserProfile.navigation.navigated.dispatchEvent({ link: url });
    browserProfile.navigation.captured.dispatchEvent({});
    browserProfile = Object.assign({}, browserProfile);
    browserProfile.destroy = false;
    const capture = new Capture_1.Capture(browserProfile);
    yield capture.start();
    yield state.testResultWriter.write(true);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBQzFELHNEQUFpRDtBQUNqRCxzRUFBaUU7QUFDakUsdUZBQStEO0FBRy9ELDZCQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQU0sS0FBSyxFQUFDLEVBQUU7SUFFckMsTUFBTSxPQUFPLEdBQUcseUJBQWUsQ0FBQyxPQUFPLENBQUM7SUFFeEMsSUFBSSxjQUFjLEdBQ1osaUNBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFFM0QsTUFBTSxHQUFHLEdBQUcsd0JBQXdCLENBQUM7SUFFckMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7SUFDL0QsY0FBYyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRXJELGNBQWMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUVuRCxjQUFjLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUUvQixNQUFNLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFNUMsTUFBTSxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFdEIsTUFBTSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRTdDLENBQUMsQ0FBQSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NwZWN0cm9uTWFpbjJ9IGZyb20gJy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb25NYWluMic7XG5pbXBvcnQge0NhcHR1cmV9IGZyb20gJy4uLy4uL2pzL2NhcHR1cmUvQ2FwdHVyZSc7XG5pbXBvcnQge0Jyb3dzZXJQcm9maWxlc30gZnJvbSAnLi4vLi4vanMvY2FwdHVyZS9Ccm93c2VyUHJvZmlsZXMnO1xuaW1wb3J0IEJyb3dzZXJSZWdpc3RyeSBmcm9tICcuLi8uLi9qcy9jYXB0dXJlL0Jyb3dzZXJSZWdpc3RyeSc7XG5pbXBvcnQge0Jyb3dzZXJQcm9maWxlfSBmcm9tICcuLi8uLi9qcy9jYXB0dXJlL0Jyb3dzZXJQcm9maWxlJztcblxuU3BlY3Ryb25NYWluMi5jcmVhdGUoKS5ydW4oYXN5bmMgc3RhdGUgPT4ge1xuXG4gICAgY29uc3QgYnJvd3NlciA9IEJyb3dzZXJSZWdpc3RyeS5ERUZBVUxUO1xuXG4gICAgbGV0IGJyb3dzZXJQcm9maWxlOiBCcm93c2VyUHJvZmlsZVxuICAgICAgICA9IEJyb3dzZXJQcm9maWxlcy50b0Jyb3dzZXJQcm9maWxlKGJyb3dzZXIsICdERUZBVUxUJyk7XG5cbiAgICBjb25zdCB1cmwgPSBcImh0dHA6Ly93d3cuZXhhbXBsZS5jb21cIjtcblxuICAgIGJyb3dzZXJQcm9maWxlLm5hdmlnYXRpb24ubmF2aWdhdGVkLmRpc3BhdGNoRXZlbnQoe2xpbms6IHVybH0pO1xuICAgIGJyb3dzZXJQcm9maWxlLm5hdmlnYXRpb24uY2FwdHVyZWQuZGlzcGF0Y2hFdmVudCh7fSk7XG5cbiAgICBicm93c2VyUHJvZmlsZSA9IE9iamVjdC5hc3NpZ24oe30sIGJyb3dzZXJQcm9maWxlKTtcblxuICAgIGJyb3dzZXJQcm9maWxlLmRlc3Ryb3kgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNhcHR1cmUgPSBuZXcgQ2FwdHVyZShicm93c2VyUHJvZmlsZSk7XG5cbiAgICBhd2FpdCBjYXB0dXJlLnN0YXJ0KCk7XG5cbiAgICBhd2FpdCBzdGF0ZS50ZXN0UmVzdWx0V3JpdGVyLndyaXRlKHRydWUpO1xuXG59KTtcbiJdfQ==