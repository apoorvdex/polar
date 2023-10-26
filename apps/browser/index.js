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
const SpectronMain_1 = require("../../web/js/test/SpectronMain");
const Logging_1 = require("../../web/js/logger/Logging");
const CaptureController_1 = require("../../web/js/capture/controller/CaptureController");
const CacheRegistry_1 = require("../../web/js/backend/proxyserver/CacheRegistry");
const ProxyServerConfig_1 = require("../../web/js/backend/proxyserver/ProxyServerConfig");
const electron_1 = require("electron");
const BrowserRegistry_1 = __importDefault(require("../../web/js/capture/BrowserRegistry"));
const BrowserProfiles_1 = require("../../web/js/capture/BrowserProfiles");
const Capture_1 = require("../../web/js/capture/Capture");
const windowFactory = () => __awaiter(this, void 0, void 0, function* () {
    yield Logging_1.Logging.init();
    const proxyServerConfig = new ProxyServerConfig_1.ProxyServerConfig();
    const cacheRegistry = new CacheRegistry_1.CacheRegistry(proxyServerConfig);
    const captureController = new CaptureController_1.CaptureController(cacheRegistry);
    captureController.start();
    const browser = BrowserRegistry_1.default.DEFAULT;
    const browserProfile = BrowserProfiles_1.BrowserProfiles.toBrowserProfile(browser, 'DEFAULT');
    const capture = new Capture_1.Capture(browserProfile);
    capture.start()
        .catch(err => console.error(err));
    return electron_1.BrowserWindow.getFocusedWindow();
});
SpectronMain_1.SpectronMain.run((state) => __awaiter(this, void 0, void 0, function* () {
    yield state.testResultWriter.write(true);
}), { windowFactory });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQTJFO0FBQzNFLHlEQUFvRDtBQUNwRCx5RkFBb0Y7QUFDcEYsa0ZBQTZFO0FBQzdFLDBGQUFxRjtBQUNyRix1Q0FBdUM7QUFDdkMsMkZBQW1FO0FBQ25FLDBFQUFxRTtBQUNyRSwwREFBcUQ7QUFHckQsTUFBTSxhQUFhLEdBQWtCLEdBQVMsRUFBRTtJQUU1QyxNQUFNLGlCQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFckIsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLHFDQUFpQixFQUFFLENBQUM7SUFFbEQsTUFBTSxhQUFhLEdBQUcsSUFBSSw2QkFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFFM0QsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLHFDQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBRS9ELGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBRTFCLE1BQU0sT0FBTyxHQUFHLHlCQUFlLENBQUMsT0FBTyxDQUFDO0lBRXhDLE1BQU0sY0FBYyxHQUFHLGlDQUFlLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBRTVFLE1BQU0sT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUU1QyxPQUFPLENBQUMsS0FBSyxFQUFFO1NBQ1YsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRXRDLE9BQU8sd0JBQWEsQ0FBQyxnQkFBZ0IsRUFBRyxDQUFDO0FBRTdDLENBQUMsQ0FBQSxDQUFDO0FBRUYsMkJBQVksQ0FBQyxHQUFHLENBQUMsQ0FBTSxLQUFLLEVBQUMsRUFBRTtJQUczQixNQUFNLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFN0MsQ0FBQyxDQUFBLEVBQUUsRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTcGVjdHJvbk1haW4sIFdpbmRvd0ZhY3Rvcnl9IGZyb20gJy4uLy4uL3dlYi9qcy90ZXN0L1NwZWN0cm9uTWFpbic7XG5pbXBvcnQge0xvZ2dpbmd9IGZyb20gJy4uLy4uL3dlYi9qcy9sb2dnZXIvTG9nZ2luZyc7XG5pbXBvcnQge0NhcHR1cmVDb250cm9sbGVyfSBmcm9tICcuLi8uLi93ZWIvanMvY2FwdHVyZS9jb250cm9sbGVyL0NhcHR1cmVDb250cm9sbGVyJztcbmltcG9ydCB7Q2FjaGVSZWdpc3RyeX0gZnJvbSAnLi4vLi4vd2ViL2pzL2JhY2tlbmQvcHJveHlzZXJ2ZXIvQ2FjaGVSZWdpc3RyeSc7XG5pbXBvcnQge1Byb3h5U2VydmVyQ29uZmlnfSBmcm9tICcuLi8uLi93ZWIvanMvYmFja2VuZC9wcm94eXNlcnZlci9Qcm94eVNlcnZlckNvbmZpZyc7XG5pbXBvcnQge0Jyb3dzZXJXaW5kb3d9IGZyb20gXCJlbGVjdHJvblwiO1xuaW1wb3J0IEJyb3dzZXJSZWdpc3RyeSBmcm9tICcuLi8uLi93ZWIvanMvY2FwdHVyZS9Ccm93c2VyUmVnaXN0cnknO1xuaW1wb3J0IHtCcm93c2VyUHJvZmlsZXN9IGZyb20gJy4uLy4uL3dlYi9qcy9jYXB0dXJlL0Jyb3dzZXJQcm9maWxlcyc7XG5pbXBvcnQge0NhcHR1cmV9IGZyb20gJy4uLy4uL3dlYi9qcy9jYXB0dXJlL0NhcHR1cmUnO1xuXG5cbmNvbnN0IHdpbmRvd0ZhY3Rvcnk6IFdpbmRvd0ZhY3RvcnkgPSBhc3luYyAoKSA9PiB7XG5cbiAgICBhd2FpdCBMb2dnaW5nLmluaXQoKTtcblxuICAgIGNvbnN0IHByb3h5U2VydmVyQ29uZmlnID0gbmV3IFByb3h5U2VydmVyQ29uZmlnKCk7XG5cbiAgICBjb25zdCBjYWNoZVJlZ2lzdHJ5ID0gbmV3IENhY2hlUmVnaXN0cnkocHJveHlTZXJ2ZXJDb25maWcpO1xuXG4gICAgY29uc3QgY2FwdHVyZUNvbnRyb2xsZXIgPSBuZXcgQ2FwdHVyZUNvbnRyb2xsZXIoY2FjaGVSZWdpc3RyeSk7XG5cbiAgICBjYXB0dXJlQ29udHJvbGxlci5zdGFydCgpO1xuXG4gICAgY29uc3QgYnJvd3NlciA9IEJyb3dzZXJSZWdpc3RyeS5ERUZBVUxUO1xuXG4gICAgY29uc3QgYnJvd3NlclByb2ZpbGUgPSBCcm93c2VyUHJvZmlsZXMudG9Ccm93c2VyUHJvZmlsZShicm93c2VyLCAnREVGQVVMVCcpO1xuXG4gICAgY29uc3QgY2FwdHVyZSA9IG5ldyBDYXB0dXJlKGJyb3dzZXJQcm9maWxlKTtcblxuICAgIGNhcHR1cmUuc3RhcnQoKVxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG5cbiAgICByZXR1cm4gQnJvd3NlcldpbmRvdy5nZXRGb2N1c2VkV2luZG93KCkhO1xuXG59O1xuXG5TcGVjdHJvbk1haW4ucnVuKGFzeW5jIHN0YXRlID0+IHtcblxuXG4gICAgYXdhaXQgc3RhdGUudGVzdFJlc3VsdFdyaXRlci53cml0ZSh0cnVlKTtcblxufSwgeyB3aW5kb3dGYWN0b3J5IH0pO1xuXG5cbiJdfQ==