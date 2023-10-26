"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function range(len) {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }
    return arr;
}
const newPerson = () => {
    const statusChance = Math.random();
    return {
        title: 'Mastering Bitcoin',
        progress: Math.floor(Math.random() * 100),
    };
};
function makeData(len = 5553) {
    return range(len).map(d => {
        return Object.assign({}, newPerson(), { children: range(10).map(newPerson) });
    });
}
exports.makeData = makeData;
exports.Logo = () => react_1.default.createElement("div", { style: { margin: '1rem auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' } });
exports.Tips = () => react_1.default.createElement("div", { style: { textAlign: "center" } },
    react_1.default.createElement("em", null, "Tip: Hold shift when sorting to multi-sort!"));
exports.Footer = () => react_1.default.createElement("footer", { style: { textAlign: "center" } },
    react_1.default.createElement("a", { className: "github-button", href: "https://github.com/burtonator/polar-bookshelf", "data-icon": "octicon-star", "data-size": "large", "data-show-count": "true", "aria-label": "Star burtonator/polar-bookshelf on GitHub" }, "Star"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJVdGlscy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrREFBMEI7QUFHMUIsU0FBUyxLQUFLLENBQUMsR0FBVztJQUN0QixNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDZixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzFCLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDZjtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQztBQUVELE1BQU0sU0FBUyxHQUFHLEdBQUcsRUFBRTtJQUNuQixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbkMsT0FBTztRQUNILEtBQUssRUFBRSxtQkFBbUI7UUFJMUIsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQztLQUM1QyxDQUFDO0FBQ04sQ0FBQyxDQUFDO0FBRUYsU0FBZ0IsUUFBUSxDQUFDLEdBQUcsR0FBRyxJQUFJO0lBQy9CLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUN0Qix5QkFDTyxTQUFTLEVBQUUsSUFDZCxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFDcEM7SUFDTixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFQRCw0QkFPQztBQUVZLFFBQUEsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUNyQix1Q0FBSyxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUMsR0FDbkgsQ0FBQztBQUVNLFFBQUEsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUNyQix1Q0FBSyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFO0lBQ25DLHdGQUFvRCxDQUM5QyxDQUFDO0FBRUUsUUFBQSxNQUFNLEdBQUcsR0FBRyxFQUFFLENBQ3ZCLDBDQUFRLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUU7SUFFdEMscUNBQUcsU0FBUyxFQUFDLGVBQWUsRUFBQyxJQUFJLEVBQUMsK0NBQStDLGVBQVcsY0FBYyxlQUFXLE9BQU8scUJBQWlCLE1BQU0sZ0JBQVksMkNBQTJDLFdBQVMsQ0FDMU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vaW1wb3J0IG5hbW9yIGZyb20gXCJuYW1vclwiXG5cbmZ1bmN0aW9uIHJhbmdlKGxlbjogbnVtYmVyKSB7XG4gICAgY29uc3QgYXJyID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBhcnIucHVzaChpKTtcbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbn1cblxuY29uc3QgbmV3UGVyc29uID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0YXR1c0NoYW5jZSA9IE1hdGgucmFuZG9tKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6ICdNYXN0ZXJpbmcgQml0Y29pbicsXG4gICAgICAgIC8vbGFzdE5hbWU6ICdTbWl0aCcsXG4gICAgICAgIC8vYWdlOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzMCksXG4gICAgICAgIC8vdmlzaXRzOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApLFxuICAgICAgICBwcm9ncmVzczogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSxcbiAgICB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VEYXRhKGxlbiA9IDU1NTMpOiBhbnkge1xuICAgIHJldHVybiByYW5nZShsZW4pLm1hcChkID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLm5ld1BlcnNvbigpLFxuICAgICAgICAgICAgY2hpbGRyZW46IHJhbmdlKDEwKS5tYXAobmV3UGVyc29uKVxuICAgICAgICB9O1xuICAgIH0pO1xufVxuXG5leHBvcnQgY29uc3QgTG9nbyA9ICgpID0+XG4gICAgPGRpdiBzdHlsZT17eyBtYXJnaW46ICcxcmVtIGF1dG8nLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhXcmFwOiAnd3JhcCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcid9fT5cbjwvZGl2PjtcblxuZXhwb3J0IGNvbnN0IFRpcHMgPSAoKSA9PlxuICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgIDxlbT5UaXA6IEhvbGQgc2hpZnQgd2hlbiBzb3J0aW5nIHRvIG11bHRpLXNvcnQhPC9lbT5cbiAgICA8L2Rpdj47XG5cbmV4cG9ydCBjb25zdCBGb290ZXIgPSAoKSA9PlxuICAgIDxmb290ZXIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgIHsvKkxpa2UgUG9sYXI/ICBTaG93IHlvdXIgbG92ZSBieSBnaXZpbmcgdXMgYSBHaXRodWIgc3RhciEqL31cbiAgICA8YSBjbGFzc05hbWU9XCJnaXRodWItYnV0dG9uXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9idXJ0b25hdG9yL3BvbGFyLWJvb2tzaGVsZlwiIGRhdGEtaWNvbj1cIm9jdGljb24tc3RhclwiIGRhdGEtc2l6ZT1cImxhcmdlXCIgZGF0YS1zaG93LWNvdW50PVwidHJ1ZVwiIGFyaWEtbGFiZWw9XCJTdGFyIGJ1cnRvbmF0b3IvcG9sYXItYm9va3NoZWxmIG9uIEdpdEh1YlwiPlN0YXI8L2E+XG4gICAgPC9mb290ZXI+O1xuIl19