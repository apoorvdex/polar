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
const popper_js_1 = __importDefault(require("popper.js"));
const JQuery_1 = __importDefault(require("../../js/ui/JQuery"));
SpectronRenderer_1.SpectronRenderer.run(() => __awaiter(this, void 0, void 0, function* () {
    console.log("Running within SpectronRenderer now.");
    const ref = JQuery_1.default('#button-a');
    const popup = JQuery_1.default('#popup');
    popup.hide();
    ref.click(function () {
        popup.show();
        const popper = new popper_js_1.default(ref, popup, {
            placement: 'top',
            onCreate: (data) => {
                console.log(data);
            },
            modifiers: {
                flip: {
                    behavior: ['left', 'right', 'top', 'bottom']
                },
                offset: {
                    enabled: true,
                    offset: '0,10'
                }
            }
        });
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBZ0U7QUFDaEUsMERBQStCO0FBQy9CLGdFQUFtQztBQUVuQyxtQ0FBZ0IsQ0FBQyxHQUFHLENBQUMsR0FBUyxFQUFFO0lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQztJQUVwRCxNQUFNLEdBQUcsR0FBRyxnQkFBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNCLE1BQU0sS0FBSyxHQUFHLGdCQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUIsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBRWIsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUNOLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksbUJBQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFHO1lBQ25DLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsQ0FBQztZQUNELFNBQVMsRUFBRTtnQkFDUCxJQUFJLEVBQUU7b0JBQ0YsUUFBUSxFQUFFLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDO2lCQUMvQztnQkFDRCxNQUFNLEVBQUU7b0JBQ0osT0FBTyxFQUFFLElBQUk7b0JBQ2IsTUFBTSxFQUFFLE1BQU07aUJBQ2pCO2FBQ0o7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NwZWN0cm9uUmVuZGVyZXJ9IGZyb20gJy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb25SZW5kZXJlcic7XG5pbXBvcnQgUG9wcGVyIGZyb20gJ3BvcHBlci5qcyc7XG5pbXBvcnQgJCBmcm9tICcuLi8uLi9qcy91aS9KUXVlcnknO1xuXG5TcGVjdHJvblJlbmRlcmVyLnJ1bihhc3luYyAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJSdW5uaW5nIHdpdGhpbiBTcGVjdHJvblJlbmRlcmVyIG5vdy5cIik7XG5cbiAgICBjb25zdCByZWYgPSAkKCcjYnV0dG9uLWEnKTtcbiAgICBjb25zdCBwb3B1cCA9ICQoJyNwb3B1cCcpO1xuICAgIHBvcHVwLmhpZGUoKTtcblxuICAgIHJlZi5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgcG9wdXAuc2hvdygpO1xuICAgICAgICBjb25zdCBwb3BwZXIgPSBuZXcgUG9wcGVyKHJlZiwgcG9wdXAgLCB7XG4gICAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgICAgICAgICAgb25DcmVhdGU6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgICAgICAgICAgZmxpcDoge1xuICAgICAgICAgICAgICAgICAgICBiZWhhdmlvcjogWydsZWZ0JywgJ3JpZ2h0JywgJ3RvcCcsICdib3R0b20nXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiB7XG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldDogJzAsMTAnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxufSk7XG5cbiJdfQ==