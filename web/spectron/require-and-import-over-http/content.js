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
SpectronRenderer_1.SpectronRenderer.run((state) => __awaiter(this, void 0, void 0, function* () {
    console.log("Running within SpectronRenderer now.");
    history.pushState({}, "Home", "http://localhost/");
    state.testResultWriter.write(document.location.href === "http://localhost/");
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFFQUFnRTtBQUVoRSxtQ0FBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBTyxLQUFLLEVBQUUsRUFBRTtJQUVqQyxPQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7SUFFcEQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFFbkQsS0FBSyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUyxDQUFDLElBQUksS0FBSyxtQkFBbUIsQ0FBQyxDQUFDO0FBRWxGLENBQUMsQ0FBQSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NwZWN0cm9uUmVuZGVyZXJ9IGZyb20gXCIuLi8uLi9qcy90ZXN0L1NwZWN0cm9uUmVuZGVyZXJcIjtcblxuU3BlY3Ryb25SZW5kZXJlci5ydW4oYXN5bmMgKHN0YXRlKSA9PiB7XG5cbiAgICBjb25zb2xlLmxvZyhcIlJ1bm5pbmcgd2l0aGluIFNwZWN0cm9uUmVuZGVyZXIgbm93LlwiKTtcblxuICAgIGhpc3RvcnkucHVzaFN0YXRlKHt9LCBcIkhvbWVcIiwgXCJodHRwOi8vbG9jYWxob3N0L1wiKTtcblxuICAgIHN0YXRlLnRlc3RSZXN1bHRXcml0ZXIud3JpdGUoZG9jdW1lbnQubG9jYXRpb24hLmhyZWYgPT09IFwiaHR0cDovL2xvY2FsaG9zdC9cIik7XG5cbn0pO1xuXG5cbiJdfQ==