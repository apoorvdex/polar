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
const MainDatastore_1 = require("../../js/datastore/MainDatastore");
SpectronMain2_1.SpectronMain2.create().run((state) => __awaiter(this, void 0, void 0, function* () {
    MainDatastore_1.MainDatastore.create();
    state.window.loadURL(`file://${__dirname}/app.html`);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBQzFELG9FQUErRDtBQUUvRCw2QkFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFNLEtBQUssRUFBQyxFQUFFO0lBRXJDLDZCQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7SUFFdkIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxTQUFTLFdBQVcsQ0FBQyxDQUFDO0FBRXpELENBQUMsQ0FBQSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NwZWN0cm9uTWFpbjJ9IGZyb20gJy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb25NYWluMic7XG5pbXBvcnQge01haW5EYXRhc3RvcmV9IGZyb20gJy4uLy4uL2pzL2RhdGFzdG9yZS9NYWluRGF0YXN0b3JlJztcblxuU3BlY3Ryb25NYWluMi5jcmVhdGUoKS5ydW4oYXN5bmMgc3RhdGUgPT4ge1xuXG4gICAgTWFpbkRhdGFzdG9yZS5jcmVhdGUoKTtcblxuICAgIHN0YXRlLndpbmRvdy5sb2FkVVJMKGBmaWxlOi8vJHtfX2Rpcm5hbWV9L2FwcC5odG1sYCk7XG5cbn0pO1xuIl19