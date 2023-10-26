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
const JQuery_1 = __importDefault(require("../../ui/JQuery"));
const CreateFlashcardForm_1 = require("./elements/schemaform/CreateFlashcardForm");
const Logger_1 = require("../../logger/Logger");
const CreateFlashcardService_1 = require("./CreateFlashcardService");
const log = Logger_1.Logger.create();
class CreateFlashcardApp {
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                JQuery_1.default(document).ready(function () {
                    return __awaiter(this, void 0, void 0, function* () {
                        log.info("Ready to create flash card!");
                        const schemaFormElement = document.getElementById('schema-form');
                        const createFlashcardForm = new CreateFlashcardForm_1.CreateFlashcardForm(schemaFormElement);
                        const createFlashcardService = new CreateFlashcardService_1.CreateFlashcardService(createFlashcardForm);
                        yield createFlashcardService.start();
                        resolve();
                        log.info("UI created.");
                    });
                });
            });
        });
    }
}
exports.CreateFlashcardApp = CreateFlashcardApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlRmxhc2hjYXJkQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ3JlYXRlRmxhc2hjYXJkQXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSw2REFBZ0M7QUFFaEMsbUZBQThFO0FBQzlFLGdEQUEyQztBQUMzQyxxRUFBZ0U7QUFHaEUsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsa0JBQWtCO0lBRWQsS0FBSzs7WUFFZCxPQUFPLElBQUksT0FBTyxDQUFRLE9BQU8sQ0FBQyxFQUFFO2dCQUdoQyxnQkFBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQzs7d0JBRWQsR0FBRyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO3dCQUV4QyxNQUFNLGlCQUFpQixHQUFpQixRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO3dCQUUvRSxNQUFNLG1CQUFtQixHQUFHLElBQUkseUNBQW1CLENBQUMsaUJBQWlCLENBQUMsQ0FBQzt3QkFFdkUsTUFBTSxzQkFBc0IsR0FBRyxJQUFJLCtDQUFzQixDQUFDLG1CQUFtQixDQUFDLENBQUM7d0JBRS9FLE1BQU0sc0JBQXNCLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQ3JDLE9BQU8sRUFBRSxDQUFDO3dCQUVWLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBRTVCLENBQUM7aUJBQUEsQ0FBQyxDQUFDO1lBRVAsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0tBQUE7Q0FFSjtBQTNCRCxnREEyQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICcuLi8uLi91aS9KUXVlcnknO1xuXG5pbXBvcnQge0NyZWF0ZUZsYXNoY2FyZEZvcm19IGZyb20gJy4vZWxlbWVudHMvc2NoZW1hZm9ybS9DcmVhdGVGbGFzaGNhcmRGb3JtJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7Q3JlYXRlRmxhc2hjYXJkU2VydmljZX0gZnJvbSAnLi9DcmVhdGVGbGFzaGNhcmRTZXJ2aWNlJztcbmltcG9ydCB7RG9jdW1lbnRSZWFkeVN0YXRlc30gZnJvbSAnLi4vLi4vdXRpbC9kb20vRG9jdW1lbnRSZWFkeVN0YXRlcyc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIENyZWF0ZUZsYXNoY2FyZEFwcCB7XG5cbiAgICBwdWJsaWMgYXN5bmMgc3RhcnQoKSB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KCByZXNvbHZlID0+IHtcblxuICAgICAgICAgICAgLy8gVE9ETzogbW92ZSB0aGlzIHRvIERvY3VtZW50UmVhZHlTdGF0ZXMgYW5kIG5vdCBqcXVlcnkuXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIGxvZy5pbmZvKFwiUmVhZHkgdG8gY3JlYXRlIGZsYXNoIGNhcmQhXCIpO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc2NoZW1hRm9ybUVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY2hlbWEtZm9ybScpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY3JlYXRlRmxhc2hjYXJkRm9ybSA9IG5ldyBDcmVhdGVGbGFzaGNhcmRGb3JtKHNjaGVtYUZvcm1FbGVtZW50KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNyZWF0ZUZsYXNoY2FyZFNlcnZpY2UgPSBuZXcgQ3JlYXRlRmxhc2hjYXJkU2VydmljZShjcmVhdGVGbGFzaGNhcmRGb3JtKTtcblxuICAgICAgICAgICAgICAgIGF3YWl0IGNyZWF0ZUZsYXNoY2FyZFNlcnZpY2Uuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG5cbiAgICAgICAgICAgICAgICBsb2cuaW5mbyhcIlVJIGNyZWF0ZWQuXCIpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==