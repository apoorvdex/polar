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
const Files_1 = require("../../../js/util/Files");
SpectronRenderer_1.SpectronRenderer.run(() => __awaiter(this, void 0, void 0, function* () {
    console.log("Running within SpectronRenderer now.");
    if (typeof require === 'function') {
        if (yield Files_1.Files.existsAsync("/home/burton/.polar")) {
            console.log("dir exists!");
        }
    }
    else {
        console.warn("No node integration");
    }
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx3RUFBbUU7QUFDbkUsa0RBQTZDO0FBRTdDLG1DQUFnQixDQUFDLEdBQUcsQ0FBQyxHQUFTLEVBQUU7SUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0lBRXBELElBQUcsT0FBTyxPQUFPLEtBQUssVUFBVSxFQUFFO1FBQzlCLElBQUcsTUFBTSxhQUFLLENBQUMsV0FBVyxDQUFDLHFCQUFxQixDQUFDLEVBQUU7WUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUM5QjtLQUNKO1NBQU07UUFDSCxPQUFPLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7S0FDdkM7QUFDTCxDQUFDLENBQUEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTcGVjdHJvblJlbmRlcmVyfSBmcm9tICcuLi8uLi8uLi9qcy90ZXN0L1NwZWN0cm9uUmVuZGVyZXInO1xuaW1wb3J0IHtGaWxlc30gZnJvbSAnLi4vLi4vLi4vanMvdXRpbC9GaWxlcyc7XG5cblNwZWN0cm9uUmVuZGVyZXIucnVuKGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlJ1bm5pbmcgd2l0aGluIFNwZWN0cm9uUmVuZGVyZXIgbm93LlwiKTtcblxuICAgIGlmKHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGlmKGF3YWl0IEZpbGVzLmV4aXN0c0FzeW5jKFwiL2hvbWUvYnVydG9uLy5wb2xhclwiKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXIgZXhpc3RzIVwiKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIk5vIG5vZGUgaW50ZWdyYXRpb25cIik7XG4gICAgfVxufSk7XG4iXX0=