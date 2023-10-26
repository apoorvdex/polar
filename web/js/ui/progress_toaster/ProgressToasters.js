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
const ReactInjector_1 = require("../util/ReactInjector");
const react_1 = __importDefault(require("react"));
const ProgressToaster_1 = require("./ProgressToaster");
const Latch_1 = require("../../util/Latch");
class ProgressToasters {
    static create() {
        return __awaiter(this, void 0, void 0, function* () {
            const latch = new Latch_1.Latch();
            const injectedComponent = ReactInjector_1.ReactInjector.inject(react_1.default.createElement(ProgressToaster_1.ProgressToaster, { progressUpdaterLatch: latch }));
            const progressUpdater = yield latch.get();
            return {
                update(progressUpdate) {
                    progressUpdater.update(progressUpdate);
                },
                destroy() {
                    injectedComponent.destroy();
                }
            };
        });
    }
}
exports.ProgressToasters = ProgressToasters;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NUb2FzdGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlByb2dyZXNzVG9hc3RlcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSx5REFBb0Q7QUFFcEQsa0RBQTBCO0FBQzFCLHVEQUFtRjtBQUNuRiw0Q0FBdUM7QUFFdkMsTUFBYSxnQkFBZ0I7SUFFbEIsTUFBTSxDQUFPLE1BQU07O1lBSXRCLE1BQU0sS0FBSyxHQUEyQixJQUFJLGFBQUssRUFBRSxDQUFDO1lBRWxELE1BQU0saUJBQWlCLEdBQUcsNkJBQWEsQ0FBQyxNQUFNLENBQUMsOEJBQUMsaUNBQWUsSUFBQyxvQkFBb0IsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBRWhHLE1BQU0sZUFBZSxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBRTFDLE9BQU87Z0JBRUgsTUFBTSxDQUFDLGNBQThCO29CQUNqQyxlQUFlLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO2dCQUVELE9BQU87b0JBQ0gsaUJBQWlCLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2hDLENBQUM7YUFFSixDQUFDO1FBRU4sQ0FBQztLQUFBO0NBRUo7QUExQkQsNENBMEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSZWFjdEluamVjdG9yfSBmcm9tICcuLi91dGlsL1JlYWN0SW5qZWN0b3InO1xuaW1wb3J0IHtSZXN0YXJ0Rm9yVXBkYXRlQnV0dG9ufSBmcm9tICcuLi8uLi9hdXRvX3VwZGF0ZXMvUmVzdGFydEZvclVwZGF0ZUJ1dHRvbic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtQcm9ncmVzc1RvYXN0ZXIsIFByb2dyZXNzVXBkYXRlciwgUHJvZ3Jlc3NVcGRhdGV9IGZyb20gJy4vUHJvZ3Jlc3NUb2FzdGVyJztcbmltcG9ydCB7TGF0Y2h9IGZyb20gJy4uLy4uL3V0aWwvTGF0Y2gnO1xuXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NUb2FzdGVycyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGNyZWF0ZSgpOiBQcm9taXNlPFByb2dyZXNzSGFuZGxlcj4ge1xuXG4gICAgICAgIC8vIFRPRE86IHdoYXQgaGFwcGVucyBpZiB0aGVyZSBhcmUgbW9yZSB0aGFuIG9uZT9cblxuICAgICAgICBjb25zdCBsYXRjaDogTGF0Y2g8UHJvZ3Jlc3NVcGRhdGVyPiA9IG5ldyBMYXRjaCgpO1xuXG4gICAgICAgIGNvbnN0IGluamVjdGVkQ29tcG9uZW50ID0gUmVhY3RJbmplY3Rvci5pbmplY3QoPFByb2dyZXNzVG9hc3RlciBwcm9ncmVzc1VwZGF0ZXJMYXRjaD17bGF0Y2h9Lz4pO1xuXG4gICAgICAgIGNvbnN0IHByb2dyZXNzVXBkYXRlciA9IGF3YWl0IGxhdGNoLmdldCgpO1xuXG4gICAgICAgIHJldHVybiB7XG5cbiAgICAgICAgICAgIHVwZGF0ZShwcm9ncmVzc1VwZGF0ZTogUHJvZ3Jlc3NVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICBwcm9ncmVzc1VwZGF0ZXIudXBkYXRlKHByb2dyZXNzVXBkYXRlKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGRlc3Ryb3koKSB7XG4gICAgICAgICAgICAgICAgaW5qZWN0ZWRDb21wb25lbnQuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9ncmVzc0hhbmRsZXIgZXh0ZW5kcyBQcm9ncmVzc1VwZGF0ZXIge1xuXG4gICAgZGVzdHJveSgpOiB2b2lkO1xuXG59XG4iXX0=