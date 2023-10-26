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
const electron_1 = require("electron");
const TestResultService_1 = require("./results/TestResultService");
const RendererTestResultWriter_1 = require("./results/writer/RendererTestResultWriter");
class SpectronRenderer {
    static setup() {
        new TestResultService_1.TestResultService().start();
    }
    static start(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            SpectronRenderer.setup();
            const state = new SpectronRendererState();
            const result = yield callback(state);
            electron_1.ipcRenderer.send('spectron-renderer-started', true);
            return result;
        });
    }
    static run(callback) {
        this.start(callback)
            .catch(err => console.error(err));
    }
}
exports.SpectronRenderer = SpectronRenderer;
class SpectronRendererState {
    get testResultWriter() {
        return new RendererTestResultWriter_1.RendererTestResultWriter();
    }
}
exports.SpectronRendererState = SpectronRendererState;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BlY3Ryb25SZW5kZXJlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNwZWN0cm9uUmVuZGVyZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHVDQUFxQztBQUNyQyxtRUFBOEQ7QUFDOUQsd0ZBQW1GO0FBRW5GLE1BQWEsZ0JBQWdCO0lBRWxCLE1BQU0sQ0FBQyxLQUFLO1FBQ2YsSUFBSSxxQ0FBaUIsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFTSxNQUFNLENBQU8sS0FBSyxDQUFDLFFBQXFCOztZQUMzQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN6QixNQUFNLEtBQUssR0FBRyxJQUFJLHFCQUFxQixFQUFFLENBQUM7WUFFMUMsTUFBTSxNQUFNLEdBQUcsTUFBTSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFckMsc0JBQVcsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFcEQsT0FBTyxNQUFNLENBQUM7UUFFbEIsQ0FBQztLQUFBO0lBRU0sTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFxQjtRQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQzthQUNmLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0NBRUo7QUF2QkQsNENBdUJDO0FBT0QsTUFBYSxxQkFBcUI7SUFFOUIsSUFBSSxnQkFBZ0I7UUFDaEIsT0FBTyxJQUFJLG1EQUF3QixFQUFFLENBQUM7SUFDMUMsQ0FBQztDQUVKO0FBTkQsc0RBTUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7aXBjUmVuZGVyZXJ9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCB7VGVzdFJlc3VsdFNlcnZpY2V9IGZyb20gJy4vcmVzdWx0cy9UZXN0UmVzdWx0U2VydmljZSc7XG5pbXBvcnQge1JlbmRlcmVyVGVzdFJlc3VsdFdyaXRlcn0gZnJvbSAnLi9yZXN1bHRzL3dyaXRlci9SZW5kZXJlclRlc3RSZXN1bHRXcml0ZXInO1xuXG5leHBvcnQgY2xhc3MgU3BlY3Ryb25SZW5kZXJlciB7XG5cbiAgICBwdWJsaWMgc3RhdGljIHNldHVwKCkge1xuICAgICAgICBuZXcgVGVzdFJlc3VsdFNlcnZpY2UoKS5zdGFydCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgc3RhcnQoY2FsbGJhY2s6IFJ1bkNhbGxiYWNrKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgU3BlY3Ryb25SZW5kZXJlci5zZXR1cCgpO1xuICAgICAgICBjb25zdCBzdGF0ZSA9IG5ldyBTcGVjdHJvblJlbmRlcmVyU3RhdGUoKTtcblxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjYWxsYmFjayhzdGF0ZSk7XG5cbiAgICAgICAgaXBjUmVuZGVyZXIuc2VuZCgnc3BlY3Ryb24tcmVuZGVyZXItc3RhcnRlZCcsIHRydWUpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHJ1bihjYWxsYmFjazogUnVuQ2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5zdGFydChjYWxsYmFjaylcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSdW5DYWxsYmFjayB7XG4gICAgKHN0YXRlOiBTcGVjdHJvblJlbmRlcmVyU3RhdGUpOiBQcm9taXNlPGFueT5cbn1cblxuXG5leHBvcnQgY2xhc3MgU3BlY3Ryb25SZW5kZXJlclN0YXRlIHtcblxuICAgIGdldCB0ZXN0UmVzdWx0V3JpdGVyKCkge1xuICAgICAgICByZXR1cm4gbmV3IFJlbmRlcmVyVGVzdFJlc3VsdFdyaXRlcigpO1xuICAgIH1cblxufVxuIl19