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
const ContentCaptureApp_1 = require("../../js/capture/renderer/ContentCaptureApp");
const SpectronRenderer_1 = require("../../js/test/SpectronRenderer");
SpectronRenderer_1.SpectronRenderer.run(() => __awaiter(this, void 0, void 0, function* () {
    let contentCaptureApp = new ContentCaptureApp_1.ContentCaptureApp();
    yield contentCaptureApp.start();
    console.log("App loaded now!!");
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxtRkFBOEU7QUFDOUUscUVBQWdFO0FBRWhFLG1DQUFnQixDQUFDLEdBQUcsQ0FBQyxHQUFTLEVBQUU7SUFFNUIsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLHFDQUFpQixFQUFFLENBQUM7SUFFaEQsTUFBTSxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUVoQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFFcEMsQ0FBQyxDQUFBLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29udGVudENhcHR1cmVBcHB9IGZyb20gJy4uLy4uL2pzL2NhcHR1cmUvcmVuZGVyZXIvQ29udGVudENhcHR1cmVBcHAnO1xuaW1wb3J0IHtTcGVjdHJvblJlbmRlcmVyfSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uUmVuZGVyZXInO1xuXG5TcGVjdHJvblJlbmRlcmVyLnJ1bihhc3luYyAoKSA9PiB7XG5cbiAgICBsZXQgY29udGVudENhcHR1cmVBcHAgPSBuZXcgQ29udGVudENhcHR1cmVBcHAoKTtcblxuICAgIGF3YWl0IGNvbnRlbnRDYXB0dXJlQXBwLnN0YXJ0KCk7XG5cbiAgICBjb25zb2xlLmxvZyhcIkFwcCBsb2FkZWQgbm93ISFcIik7XG5cbn0pO1xuIl19