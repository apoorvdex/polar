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
const FilePaths_1 = require("../../js/util/FilePaths");
const injector_1 = require("injector");
SpectronMain2_1.SpectronMain2.create().run((state) => __awaiter(this, void 0, void 0, function* () {
    state.window.loadURL(`file://${__dirname}/content.html`);
    const path = FilePaths_1.FilePaths.join(__dirname, "content.js");
    injector_1.Injector.inject(state.window, path);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBRTFELHVEQUFrRDtBQUNsRCx1Q0FBa0M7QUFFbEMsNkJBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBTSxLQUFLLEVBQUMsRUFBRTtJQUVyQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLFNBQVMsZUFBZSxDQUFDLENBQUM7SUFFekQsTUFBTSxJQUFJLEdBQUcscUJBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3JELG1CQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFeEMsQ0FBQyxDQUFBLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3BlY3Ryb25NYWluMn0gZnJvbSAnLi4vLi4vanMvdGVzdC9TcGVjdHJvbk1haW4yJztcbmltcG9ydCB7TWVzc2VuZ2VyfSBmcm9tICcuLi8uLi9qcy9lbGVjdHJvbi9tZXNzZW5nZXIvTWVzc2VuZ2VyJztcbmltcG9ydCB7RmlsZVBhdGhzfSBmcm9tICcuLi8uLi9qcy91dGlsL0ZpbGVQYXRocyc7XG5pbXBvcnQge0luamVjdG9yfSBmcm9tICdpbmplY3Rvcic7XG5cblNwZWN0cm9uTWFpbjIuY3JlYXRlKCkucnVuKGFzeW5jIHN0YXRlID0+IHtcblxuICAgIHN0YXRlLndpbmRvdy5sb2FkVVJMKGBmaWxlOi8vJHtfX2Rpcm5hbWV9L2NvbnRlbnQuaHRtbGApO1xuXG4gICAgY29uc3QgcGF0aCA9IEZpbGVQYXRocy5qb2luKF9fZGlybmFtZSwgXCJjb250ZW50LmpzXCIpO1xuICAgIEluamVjdG9yLmluamVjdChzdGF0ZS53aW5kb3csIHBhdGgpO1xuXG59KTtcblxuXG5cbiJdfQ==