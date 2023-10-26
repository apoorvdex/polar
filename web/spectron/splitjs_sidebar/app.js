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
const SpectronRenderer_1 = require("../../js/test/SpectronRenderer");
const split_js_1 = __importDefault(require("split.js"));
SpectronRenderer_1.SpectronRenderer.run(() => __awaiter(this, void 0, void 0, function* () {
    var split = split_js_1.default(['#three', '#four'], {
        sizes: [50, 50],
        minSize: 100,
        gutterSize: 7
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBZ0U7QUFDaEUsd0RBQTZCO0FBRTdCLG1DQUFnQixDQUFDLEdBQUcsQ0FBQyxHQUFTLEVBQUU7SUFFNUIsSUFBSSxLQUFLLEdBQUcsa0JBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRTtRQUNuQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ2YsT0FBTyxFQUFFLEdBQUc7UUFDWixVQUFVLEVBQUUsQ0FBQztLQUNoQixDQUFDLENBQUM7QUFLUCxDQUFDLENBQUEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTcGVjdHJvblJlbmRlcmVyfSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uUmVuZGVyZXInO1xuaW1wb3J0IFNwbGl0IGZyb20gJ3NwbGl0LmpzJztcblxuU3BlY3Ryb25SZW5kZXJlci5ydW4oYXN5bmMgKCkgPT4ge1xuXG4gICAgdmFyIHNwbGl0ID0gU3BsaXQoWycjdGhyZWUnLCAnI2ZvdXInXSwge1xuICAgICAgICBzaXplczogWzUwLCA1MF0sXG4gICAgICAgIG1pblNpemU6IDEwMCxcbiAgICAgICAgZ3V0dGVyU2l6ZTogN1xuICAgIH0pO1xuXG4gICAgLy8gdGhpcyB3aWxsIGNvbGxhcHNlIGl0OlxuICAgIC8vIHNwbGl0LmNvbGxhcHNlKDEpO1xuXG59KTtcblxuIl19