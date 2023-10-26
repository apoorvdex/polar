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
const SpectronMain2_1 = require("../../js/test/SpectronMain2");
const SentryLogger_1 = require("../../js/logger/SentryLogger");
SpectronMain2_1.SpectronMain2.create().run((state) => __awaiter(this, void 0, void 0, function* () {
    let sentryLogger = new SentryLogger_1.SentryLogger();
    sentryLogger.error("This is a false error from main: ", new Error("Fake error from main"));
    state.window.loadURL(`file://${__dirname}/app.html`);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBQzFELCtEQUEwRDtBQUUxRCw2QkFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFNLEtBQUssRUFBQyxFQUFFO0lBRXJDLElBQUksWUFBWSxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO0lBQ3RDLFlBQVksQ0FBQyxLQUFLLENBQUMsbUNBQW1DLEVBQUUsSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO0lBRTNGLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsU0FBUyxXQUFXLENBQUMsQ0FBQztBQUV6RCxDQUFDLENBQUEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTcGVjdHJvbk1haW4yfSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uTWFpbjInO1xuaW1wb3J0IHtTZW50cnlMb2dnZXJ9IGZyb20gJy4uLy4uL2pzL2xvZ2dlci9TZW50cnlMb2dnZXInO1xuXG5TcGVjdHJvbk1haW4yLmNyZWF0ZSgpLnJ1bihhc3luYyBzdGF0ZSA9PiB7XG5cbiAgICBsZXQgc2VudHJ5TG9nZ2VyID0gbmV3IFNlbnRyeUxvZ2dlcigpO1xuICAgIHNlbnRyeUxvZ2dlci5lcnJvcihcIlRoaXMgaXMgYSBmYWxzZSBlcnJvciBmcm9tIG1haW46IFwiLCBuZXcgRXJyb3IoXCJGYWtlIGVycm9yIGZyb20gbWFpblwiKSk7XG5cbiAgICBzdGF0ZS53aW5kb3cubG9hZFVSTChgZmlsZTovLyR7X19kaXJuYW1lfS9hcHAuaHRtbGApO1xuXG59KTtcbiJdfQ==