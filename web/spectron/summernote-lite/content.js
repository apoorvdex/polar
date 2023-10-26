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
const JQuery_1 = __importDefault(require("../../../web/js/ui/JQuery"));
require("summernote/dist/summernote-lite");
const SpectronRenderer_1 = require("../../js/test/SpectronRenderer");
SpectronRenderer_1.SpectronRenderer.run(() => __awaiter(this, void 0, void 0, function* () {
    JQuery_1.default('.summernote').summernote({
        height: 300,
        minHeight: 150,
        airMode: true
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVBLHVFQUEwQztBQUMxQywyQ0FBeUM7QUFlekMscUVBQWdFO0FBRWhFLG1DQUFnQixDQUFDLEdBQUcsQ0FBQyxHQUFTLEVBQUU7SUFPNUIsZ0JBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDeEIsTUFBTSxFQUFFLEdBQUc7UUFDWCxTQUFTLEVBQUUsR0FBRztRQUNkLE9BQU8sRUFBRSxJQUFJO0tBQ2hCLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWwgJCAqL1xuXG5pbXBvcnQgJCBmcm9tICcuLi8uLi8uLi93ZWIvanMvdWkvSlF1ZXJ5JztcbmltcG9ydCAnc3VtbWVybm90ZS9kaXN0L3N1bW1lcm5vdGUtbGl0ZSc7XG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcC9qcy9zcmMvbW9kYWwnO1xuLy8gaW1wb3J0ICdib290c3RyYXAvanMvc3JjL2Ryb3Bkb3duJztcbi8vIGltcG9ydCAnYm9vdHN0cmFwL2pzL3NyYy90b29sdGlwJztcblxuLy9cbi8vXG4vLyAvLyByZXF1aXJlKCdib290c3RyYXAvanMvZGlzdC9tb2RhbC5qcycpO1xuLy8gLy8gcmVxdWlyZSgnYm9vdHN0cmFwL2pzL2Rpc3QvZHJvcGRvd24uanMnKTtcbi8vIC8vIHJlcXVpcmUoJ2Jvb3RzdHJhcC9qcy9kaXN0L3Rvb2x0aXAuanMnKTtcbi8vIC8vIHJlcXVpcmUoJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJyk7XG4vLyAvLyByZXF1aXJlKCdmb250LWF3ZXNvbWUvY3NzL2ZvbnQtYXdlc29tZS5jc3MnKTtcbi8vIC8vIHJlcXVpcmUoJ3N1bW1lcm5vdGUvZGlzdC9zdW1tZXJub3RlLmNzcycpO1xuLy8gLy8gcmVxdWlyZSgnc3VtbWVybm90ZS9kaXN0L3N1bW1lcm5vdGUtYnM0Jyk7XG4vL1xuaW1wb3J0IHtTcGVjdHJvblJlbmRlcmVyfSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uUmVuZGVyZXInO1xuXG5TcGVjdHJvblJlbmRlcmVyLnJ1bihhc3luYyAoKSA9PiB7XG5cbiAgICAvLyB0aGlzIGRpc2FibGVzIHRhYiBpbnB1dCBzbyB0aGF0IHdlIGNhbiBnbyBiYWNrIGFuZCBmb3J0aCBiZXR3ZWVuIGVkaXRvclxuICAgIC8vIGNvbnRyb2xzIGVhc2lseS5cbiAgICAvLyBkZWxldGUgKDxhbnk+ICQpLnN1bW1lcm5vdGUub3B0aW9ucy5rZXlNYXAucGMuVEFCO1xuICAgIC8vIGRlbGV0ZSAoPGFueT4gJCkuc3VtbWVybm90ZS5vcHRpb25zLmtleU1hcC5tYWMuVEFCO1xuXG4gICAgJCgnLnN1bW1lcm5vdGUnKS5zdW1tZXJub3RlKHtcbiAgICAgICAgaGVpZ2h0OiAzMDAsXG4gICAgICAgIG1pbkhlaWdodDogMTUwLFxuICAgICAgICBhaXJNb2RlOiB0cnVlXG4gICAgfSk7XG5cbn0pO1xuXG5cbiJdfQ==