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
const Functions_1 = require("./Functions");
const chai_1 = require("chai");
const Strings_1 = require("./Strings");
describe('Functions', function () {
    it("toScript from regular function", function () {
        return __awaiter(this, void 0, void 0, function* () {
            function testArg(arg) {
                return arg;
            }
            let script = Functions_1.Functions.functionToScript(testArg, "hello");
            console.log(script);
            chai_1.assert.equal('hello', eval(script));
            chai_1.assert.equal(Strings_1.Strings.toUnixLineNewLines(script), "((arg) => {\n" +
                "                return arg;\n" +
                "            }\n" +
                ")(\"hello\");");
        });
    });
    it("toScript from lambda", function () {
        return __awaiter(this, void 0, void 0, function* () {
            let script = Functions_1.Functions.functionToScript((arg) => {
                return arg;
            }, "hello");
            chai_1.assert.equal('hello', eval(script));
            console.log(script);
            chai_1.assert.equal(Strings_1.Strings.toUnixLineNewLines(script), "((arg) => {\n" +
                "                return arg;\n" +
                "            }\n" +
                ")(\"hello\");");
        });
    });
    it("toScript from static function", function () {
        return __awaiter(this, void 0, void 0, function* () {
            let script = Functions_1.Functions.functionToScript(MyClass.staticFunction, "hello");
            chai_1.assert.equal('hello', eval(script));
            console.log(script);
            chai_1.assert.equal(Strings_1.Strings.toUnixLineNewLines(script), "((val) => {\n" +
                "        return val;\n" +
                "    }\n" +
                ")(\"hello\");");
        });
    });
    it("basic function", function () {
        return __awaiter(this, void 0, void 0, function* () {
            chai_1.assert.equal(Strings_1.Strings.toUnixLineNewLines(basicFunction.toString()), "function basicFunction(val) {\n" +
                "    return val;\n" +
                "}");
        });
    });
    it("lambda function", function () {
        return __awaiter(this, void 0, void 0, function* () {
            chai_1.assert.equal(Strings_1.Strings.toUnixLineNewLines(lambaFunction.toString()), "(val) => {\n" +
                "    return val;\n" +
                "}");
        });
    });
    it("anonymize static function", function () {
        return __awaiter(this, void 0, void 0, function* () {
            chai_1.assert.equal(Strings_1.Strings.toUnixLineNewLines(MyClass.staticFunction.toString()), "staticFunction(val) {\n" +
                "        return val;\n" +
                "    }");
            chai_1.assert.equal(Strings_1.Strings.toUnixLineNewLines(Functions_1.Functions._anonymizeFunction(MyClass.staticFunction.toString())), "(val) {\n" +
                "        return val;\n" +
                "    }");
        });
    });
    it("test inline", function () {
        return __awaiter(this, void 0, void 0, function* () {
            ((foo) => {
                console.log('foo');
            })('asdf');
        });
    });
    function anonymizeFunction(func) {
        return func.indexOf('(' + 1, func.length);
    }
});
function basicFunction(val) {
    return val;
}
let lambaFunction = (val) => {
    return val;
};
class MyClass {
    static staticFunction(val) {
        return val;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnVuY3Rpb25zVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkZ1bmN0aW9uc1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFzQztBQUN0QywrQkFBNEI7QUFDNUIsdUNBQWtDO0FBRWxDLFFBQVEsQ0FBQyxXQUFXLEVBQUU7SUFFbEIsRUFBRSxDQUFDLGdDQUFnQyxFQUFFOztZQUVqQyxTQUFTLE9BQU8sQ0FBQyxHQUFXO2dCQUN4QixPQUFPLEdBQUcsQ0FBQztZQUNmLENBQUM7WUFFRCxJQUFJLE1BQU0sR0FBRyxxQkFBUyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztZQUUxRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXBCLGFBQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBRXBDLGFBQU0sQ0FBQyxLQUFLLENBQUMsaUJBQU8sQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxlQUFlO2dCQUM1RCwrQkFBK0I7Z0JBQy9CLGlCQUFpQjtnQkFDakIsZUFBZSxDQUFDLENBQUM7UUFFekIsQ0FBQztLQUFBLENBQUMsQ0FBQztJQUdILEVBQUUsQ0FBQyxzQkFBc0IsRUFBRTs7WUFFdkIsSUFBSSxNQUFNLEdBQUcscUJBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEdBQVcsRUFBRSxFQUFFO2dCQUNwRCxPQUFPLEdBQUcsQ0FBQztZQUNmLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUVaLGFBQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBRXBDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFcEIsYUFBTSxDQUFDLEtBQUssQ0FBQyxpQkFBTyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxFQUFFLGVBQWU7Z0JBQzVELCtCQUErQjtnQkFDL0IsaUJBQWlCO2dCQUNqQixlQUFlLENBQUMsQ0FBQztRQUV6QixDQUFDO0tBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLCtCQUErQixFQUFFOztZQUVoQyxJQUFJLE1BQU0sR0FBRyxxQkFBUyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFFekUsYUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFFcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVwQixhQUFNLENBQUMsS0FBSyxDQUFDLGlCQUFPLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLEVBQUUsZUFBZTtnQkFDNUQsdUJBQXVCO2dCQUN2QixTQUFTO2dCQUNULGVBQWUsQ0FBQyxDQUFDO1FBRXpCLENBQUM7S0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZ0JBQWdCLEVBQUU7O1lBRWpCLGFBQU0sQ0FBQyxLQUFLLENBQUMsaUJBQU8sQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsRUFDcEQsaUNBQWlDO2dCQUM3QixtQkFBbUI7Z0JBQ25CLEdBQUcsQ0FBQyxDQUFDO1FBRTFCLENBQUM7S0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsaUJBQWlCLEVBQUU7O1lBRWxCLGFBQU0sQ0FBQyxLQUFLLENBQUMsaUJBQU8sQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsRUFDcEQsY0FBYztnQkFDVixtQkFBbUI7Z0JBQ25CLEdBQUcsQ0FBQyxDQUFDO1FBRTFCLENBQUM7S0FBQSxDQUFDLENBQUM7SUFHSCxFQUFFLENBQUMsMkJBQTJCLEVBQUU7O1lBRTVCLGFBQU0sQ0FBQyxLQUFLLENBQUMsaUJBQU8sQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQzdELHlCQUF5QjtnQkFDckIsdUJBQXVCO2dCQUN2QixPQUFPLENBQUMsQ0FBQztZQUUxQixhQUFNLENBQUMsS0FBSyxDQUFDLGlCQUFPLENBQUMsa0JBQWtCLENBQUMscUJBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFDM0YsV0FBVztnQkFDUCx1QkFBdUI7Z0JBQ3ZCLE9BQU8sQ0FBQyxDQUFDO1FBRTlCLENBQUM7S0FBQSxDQUFDLENBQUM7SUFHSCxFQUFFLENBQUMsYUFBYSxFQUFFOztZQUVkLENBQUMsQ0FBQyxHQUFVLEVBQUUsRUFBRTtnQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWYsQ0FBQztLQUFBLENBQUMsQ0FBQztJQUVILFNBQVMsaUJBQWlCLENBQUMsSUFBWTtRQUNuQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUMsQ0FBQztBQUVMLENBQUMsQ0FBQyxDQUFDO0FBRUgsU0FBUyxhQUFhLENBQUMsR0FBVztJQUM5QixPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUM7QUFFRCxJQUFJLGFBQWEsR0FBRyxDQUFDLEdBQVcsRUFBRSxFQUFFO0lBQ2hDLE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQyxDQUFBO0FBRUQsTUFBTSxPQUFPO0lBQ1QsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFXO1FBQzdCLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGdW5jdGlvbnN9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcbmltcG9ydCB7U3RyaW5nc30gZnJvbSAnLi9TdHJpbmdzJztcblxuZGVzY3JpYmUoJ0Z1bmN0aW9ucycsIGZ1bmN0aW9uKCkge1xuXG4gICAgaXQoXCJ0b1NjcmlwdCBmcm9tIHJlZ3VsYXIgZnVuY3Rpb25cIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGZ1bmN0aW9uIHRlc3RBcmcoYXJnOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2NyaXB0ID0gRnVuY3Rpb25zLmZ1bmN0aW9uVG9TY3JpcHQodGVzdEFyZywgXCJoZWxsb1wiKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhzY3JpcHQpO1xuXG4gICAgICAgIGFzc2VydC5lcXVhbCgnaGVsbG8nLCBldmFsKHNjcmlwdCkpO1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChTdHJpbmdzLnRvVW5peExpbmVOZXdMaW5lcyhzY3JpcHQpLCBcIigoYXJnKSA9PiB7XFxuXCIgK1xuICAgICAgICAgICAgXCIgICAgICAgICAgICAgICAgcmV0dXJuIGFyZztcXG5cIiArXG4gICAgICAgICAgICBcIiAgICAgICAgICAgIH1cXG5cIiArXG4gICAgICAgICAgICBcIikoXFxcImhlbGxvXFxcIik7XCIpO1xuXG4gICAgfSk7XG5cblxuICAgIGl0KFwidG9TY3JpcHQgZnJvbSBsYW1iZGFcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGxldCBzY3JpcHQgPSBGdW5jdGlvbnMuZnVuY3Rpb25Ub1NjcmlwdCgoYXJnOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhcmc7XG4gICAgICAgIH0sIFwiaGVsbG9cIik7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKCdoZWxsbycsIGV2YWwoc2NyaXB0KSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coc2NyaXB0KTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwoU3RyaW5ncy50b1VuaXhMaW5lTmV3TGluZXMoc2NyaXB0KSwgXCIoKGFyZykgPT4ge1xcblwiICtcbiAgICAgICAgICAgIFwiICAgICAgICAgICAgICAgIHJldHVybiBhcmc7XFxuXCIgK1xuICAgICAgICAgICAgXCIgICAgICAgICAgICB9XFxuXCIgK1xuICAgICAgICAgICAgXCIpKFxcXCJoZWxsb1xcXCIpO1wiKTtcblxuICAgIH0pO1xuXG4gICAgaXQoXCJ0b1NjcmlwdCBmcm9tIHN0YXRpYyBmdW5jdGlvblwiLCBhc3luYyBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgbGV0IHNjcmlwdCA9IEZ1bmN0aW9ucy5mdW5jdGlvblRvU2NyaXB0KE15Q2xhc3Muc3RhdGljRnVuY3Rpb24sIFwiaGVsbG9cIik7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKCdoZWxsbycsIGV2YWwoc2NyaXB0KSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coc2NyaXB0KTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwoU3RyaW5ncy50b1VuaXhMaW5lTmV3TGluZXMoc2NyaXB0KSwgXCIoKHZhbCkgPT4ge1xcblwiICtcbiAgICAgICAgICAgIFwiICAgICAgICByZXR1cm4gdmFsO1xcblwiICtcbiAgICAgICAgICAgIFwiICAgIH1cXG5cIiArXG4gICAgICAgICAgICBcIikoXFxcImhlbGxvXFxcIik7XCIpO1xuXG4gICAgfSk7XG5cbiAgICBpdChcImJhc2ljIGZ1bmN0aW9uXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBhc3NlcnQuZXF1YWwoU3RyaW5ncy50b1VuaXhMaW5lTmV3TGluZXMoYmFzaWNGdW5jdGlvbi50b1N0cmluZygpKSxcbiAgICAgICAgICAgICAgICAgICAgIFwiZnVuY3Rpb24gYmFzaWNGdW5jdGlvbih2YWwpIHtcXG5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgXCIgICAgcmV0dXJuIHZhbDtcXG5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgXCJ9XCIpO1xuXG4gICAgfSk7XG5cbiAgICBpdChcImxhbWJkYSBmdW5jdGlvblwiLCBhc3luYyBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKFN0cmluZ3MudG9Vbml4TGluZU5ld0xpbmVzKGxhbWJhRnVuY3Rpb24udG9TdHJpbmcoKSksXG4gICAgICAgICAgICAgICAgICAgICBcIih2YWwpID0+IHtcXG5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgXCIgICAgcmV0dXJuIHZhbDtcXG5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgXCJ9XCIpO1xuXG4gICAgfSk7XG5cblxuICAgIGl0KFwiYW5vbnltaXplIHN0YXRpYyBmdW5jdGlvblwiLCBhc3luYyBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKFN0cmluZ3MudG9Vbml4TGluZU5ld0xpbmVzKE15Q2xhc3Muc3RhdGljRnVuY3Rpb24udG9TdHJpbmcoKSksXG4gICAgICAgICAgICAgICAgICAgICBcInN0YXRpY0Z1bmN0aW9uKHZhbCkge1xcblwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICBcIiAgICAgICAgcmV0dXJuIHZhbDtcXG5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgXCIgICAgfVwiKTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwoU3RyaW5ncy50b1VuaXhMaW5lTmV3TGluZXMoRnVuY3Rpb25zLl9hbm9ueW1pemVGdW5jdGlvbihNeUNsYXNzLnN0YXRpY0Z1bmN0aW9uLnRvU3RyaW5nKCkpKSxcbiAgICAgICAgICAgICAgICAgICAgIFwiKHZhbCkge1xcblwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICBcIiAgICAgICAgcmV0dXJuIHZhbDtcXG5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgXCIgICAgfVwiKTtcblxuICAgIH0pO1xuXG5cbiAgICBpdChcInRlc3QgaW5saW5lXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAoKGZvbzpzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmb28nKTtcbiAgICAgICAgfSkoJ2FzZGYnKTtcblxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gYW5vbnltaXplRnVuY3Rpb24oZnVuYzogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBmdW5jLmluZGV4T2YoJygnICsgMSwgZnVuYy5sZW5ndGgpO1xuICAgIH1cblxufSk7XG5cbmZ1bmN0aW9uIGJhc2ljRnVuY3Rpb24odmFsOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdmFsO1xufVxuXG5sZXQgbGFtYmFGdW5jdGlvbiA9ICh2YWw6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiB2YWw7XG59XG5cbmNsYXNzIE15Q2xhc3Mge1xuICAgIHN0YXRpYyBzdGF0aWNGdW5jdGlvbih2YWw6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH1cbn1cbiJdfQ==