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
const Logger_1 = require("../../js/logger/Logger");
const Logging_1 = require("../../js/logger/Logging");
const PolarDataDir_1 = require("../../js/test/PolarDataDir");
const log = Logger_1.Logger.create();
SpectronRenderer_1.SpectronRenderer.run((state) => __awaiter(this, void 0, void 0, function* () {
    yield PolarDataDir_1.PolarDataDir.reuseDirectory('.polar-persistent-error-logger');
    yield Logging_1.Logging.init();
    log.error("This is from the renderer process: ", new Error("Fake error in the renderer process"));
    yield log.sync();
    yield state.testResultWriter.write(true);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxRUFBZ0U7QUFDaEUsbURBQThDO0FBQzlDLHFEQUFnRDtBQUNoRCw2REFBd0Q7QUFFeEQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLG1DQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFPLEtBQUssRUFBRSxFQUFFO0lBRWpDLE1BQU0sMkJBQVksQ0FBQyxjQUFjLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUVwRSxNQUFNLGlCQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFckIsR0FBRyxDQUFDLEtBQUssQ0FBQyxxQ0FBcUMsRUFBRSxJQUFJLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLENBQUM7SUFFbEcsTUFBTSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFakIsTUFBTSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRTdDLENBQUMsQ0FBQSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NwZWN0cm9uUmVuZGVyZXJ9IGZyb20gJy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb25SZW5kZXJlcic7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vLi4vanMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0xvZ2dpbmd9IGZyb20gJy4uLy4uL2pzL2xvZ2dlci9Mb2dnaW5nJztcbmltcG9ydCB7UG9sYXJEYXRhRGlyfSBmcm9tICcuLi8uLi9qcy90ZXN0L1BvbGFyRGF0YURpcic7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuU3BlY3Ryb25SZW5kZXJlci5ydW4oYXN5bmMgKHN0YXRlKSA9PiB7XG5cbiAgICBhd2FpdCBQb2xhckRhdGFEaXIucmV1c2VEaXJlY3RvcnkoJy5wb2xhci1wZXJzaXN0ZW50LWVycm9yLWxvZ2dlcicpO1xuXG4gICAgYXdhaXQgTG9nZ2luZy5pbml0KCk7XG5cbiAgICBsb2cuZXJyb3IoXCJUaGlzIGlzIGZyb20gdGhlIHJlbmRlcmVyIHByb2Nlc3M6IFwiLCBuZXcgRXJyb3IoXCJGYWtlIGVycm9yIGluIHRoZSByZW5kZXJlciBwcm9jZXNzXCIpKTtcblxuICAgIGF3YWl0IGxvZy5zeW5jKCk7XG5cbiAgICBhd2FpdCBzdGF0ZS50ZXN0UmVzdWx0V3JpdGVyLndyaXRlKHRydWUpO1xuXG59KTtcbiJdfQ==