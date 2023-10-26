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
class InjectorService {
    static create() {
        console.log("Injector created and listening for code to require");
        window.addEventListener("message", (event) => {
            if (event.data.type === 'injector-require') {
                console.log("Injecting code via require: " + event.data.src);
                require(event.data.src);
            }
        });
    }
}
exports.InjectorService = InjectorService;
class Injector {
    static inject(browserWindow, path) {
        return __awaiter(this, void 0, void 0, function* () {
            const message = {
                type: 'injector-require',
                src: path
            };
            const script = `window.postMessage(${JSON.stringify(message)}, '*')`;
            yield browserWindow.webContents.executeJavaScript(script);
        });
    }
}
exports.Injector = Injector;
function create() {
    InjectorService.create();
}
exports.create = create;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBUUEsTUFBYSxlQUFlO0lBRWpCLE1BQU0sQ0FBQyxNQUFNO1FBRWhCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0RBQW9ELENBQUMsQ0FBQztRQUVsRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBbUIsRUFBRSxFQUFFO1lBRXZELElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssa0JBQWtCLEVBQUU7Z0JBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDN0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDM0I7UUFFTCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7Q0FFSjtBQWpCRCwwQ0FpQkM7QUFFRCxNQUFhLFFBQVE7SUFFVixNQUFNLENBQU8sTUFBTSxDQUFDLGFBQTRCLEVBQUUsSUFBWTs7WUFFakUsTUFBTSxPQUFPLEdBQUc7Z0JBQ1osSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsR0FBRyxFQUFFLElBQUk7YUFDWixDQUFDO1lBRUYsTUFBTSxNQUFNLEdBQUcsc0JBQXNCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUVyRSxNQUFNLGFBQWEsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFOUQsQ0FBQztLQUFBO0NBRUo7QUFmRCw0QkFlQztBQUVELFNBQWdCLE1BQU07SUFDbEIsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQzdCLENBQUM7QUFGRCx3QkFFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QnJvd3NlcldpbmRvd30gZnJvbSBcImVsZWN0cm9uXCI7XG5cbmRlY2xhcmUgdmFyIHdpbmRvdzogYW55O1xuXG4vKipcbiAqIENhbGxlZCBmcm9tIHRoZSByZW5kZXJlciBzbyB0aGF0IG1lc3NhZ2VzIGNhbiBiZSBpbmplY3RlZCBpbnRvIGEgQnJvd3NlcldpbmRvd1xuICogZnJvbSB0aGUgbWFpbiBwcm9jZXNzLlxuICovXG5leHBvcnQgY2xhc3MgSW5qZWN0b3JTZXJ2aWNlIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKCkge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSW5qZWN0b3IgY3JlYXRlZCBhbmQgbGlzdGVuaW5nIGZvciBjb2RlIHRvIHJlcXVpcmVcIik7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIChldmVudDogTWVzc2FnZUV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIGlmIChldmVudC5kYXRhLnR5cGUgPT09ICdpbmplY3Rvci1yZXF1aXJlJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW5qZWN0aW5nIGNvZGUgdmlhIHJlcXVpcmU6IFwiICsgZXZlbnQuZGF0YS5zcmMpO1xuICAgICAgICAgICAgICAgIHJlcXVpcmUoZXZlbnQuZGF0YS5zcmMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBJbmplY3RvciB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGluamVjdChicm93c2VyV2luZG93OiBCcm93c2VyV2luZG93LCBwYXRoOiBzdHJpbmcpIHtcblxuICAgICAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgICAgICAgdHlwZTogJ2luamVjdG9yLXJlcXVpcmUnLFxuICAgICAgICAgICAgc3JjOiBwYXRoXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gYHdpbmRvdy5wb3N0TWVzc2FnZSgke0pTT04uc3RyaW5naWZ5KG1lc3NhZ2UpfSwgJyonKWA7XG5cbiAgICAgICAgYXdhaXQgYnJvd3NlcldpbmRvdy53ZWJDb250ZW50cy5leGVjdXRlSmF2YVNjcmlwdChzY3JpcHQpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgSW5qZWN0b3JTZXJ2aWNlLmNyZWF0ZSgpO1xufVxuIl19