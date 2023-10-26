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
const chai_1 = require("chai");
const Platforms_1 = require("./Platforms");
describe('Platforms', function () {
    it("toSymbol", function () {
        return __awaiter(this, void 0, void 0, function* () {
            chai_1.assert.equal("WINDOWS", Platforms_1.Platforms.toSymbol(Platforms_1.Platform.WINDOWS));
            chai_1.assert.equal("LINUX", Platforms_1.Platforms.toSymbol(Platforms_1.Platform.LINUX));
            console.log("Current platform: " + Platforms_1.Platforms.toSymbol(Platforms_1.Platforms.get()));
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxhdGZvcm1zVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlBsYXRmb3Jtc1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLCtCQUE0QjtBQUU1QiwyQ0FBZ0Q7QUFFaEQsUUFBUSxDQUFDLFdBQVcsRUFBRTtJQUVsQixFQUFFLENBQUMsVUFBVSxFQUFFOztZQUVYLGFBQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLHFCQUFTLENBQUMsUUFBUSxDQUFDLG9CQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUM5RCxhQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRyxxQkFBUyxDQUFDLFFBQVEsQ0FBQyxvQkFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFFM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxxQkFBUyxDQUFDLFFBQVEsQ0FBQyxxQkFBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU1RSxDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQge1Byb2dyZXNzVHJhY2tlcn0gZnJvbSAnLi9Qcm9ncmVzc1RyYWNrZXInO1xuaW1wb3J0IHtQbGF0Zm9ybSwgUGxhdGZvcm1zfSBmcm9tICcuL1BsYXRmb3Jtcyc7XG5cbmRlc2NyaWJlKCdQbGF0Zm9ybXMnLCBmdW5jdGlvbigpIHtcblxuICAgIGl0KFwidG9TeW1ib2xcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKFwiV0lORE9XU1wiLCBQbGF0Zm9ybXMudG9TeW1ib2woUGxhdGZvcm0uV0lORE9XUykpO1xuICAgICAgICBhc3NlcnQuZXF1YWwoXCJMSU5VWFwiLCAgUGxhdGZvcm1zLnRvU3ltYm9sKFBsYXRmb3JtLkxJTlVYKSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJDdXJyZW50IHBsYXRmb3JtOiBcIiArIFBsYXRmb3Jtcy50b1N5bWJvbChQbGF0Zm9ybXMuZ2V0KCkpKTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==