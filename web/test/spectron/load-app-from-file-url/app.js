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
const SpectronRenderer_1 = require("../../../js/test/SpectronRenderer");
SpectronRenderer_1.SpectronRenderer.run((state) => __awaiter(this, void 0, void 0, function* () {
    console.log("Running within SpectronRenderer now.");
    state.testResultWriter.write(true);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx3RUFBbUU7QUFFbkUsbUNBQWdCLENBQUMsR0FBRyxDQUFDLENBQU8sS0FBSyxFQUFFLEVBQUU7SUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0lBQ3BELEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkMsQ0FBQyxDQUFBLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3BlY3Ryb25SZW5kZXJlcn0gZnJvbSAnLi4vLi4vLi4vanMvdGVzdC9TcGVjdHJvblJlbmRlcmVyJztcblxuU3BlY3Ryb25SZW5kZXJlci5ydW4oYXN5bmMgKHN0YXRlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJSdW5uaW5nIHdpdGhpbiBTcGVjdHJvblJlbmRlcmVyIG5vdy5cIik7XG4gICAgc3RhdGUudGVzdFJlc3VsdFdyaXRlci53cml0ZSh0cnVlKTtcbn0pO1xuIl19