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
const FixedBuffer_1 = require("./FixedBuffer");
describe('FixedBuffer', function () {
    it("basic", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const buffer = new FixedBuffer_1.FixedBuffer(2);
            const toText = () => {
                return buffer.toView().join("\n");
            };
            chai_1.assert.equal(toText(), "");
            buffer.write("0");
            chai_1.assert.equal(toText(), "0");
            buffer.write("1");
            chai_1.assert.equal(toText(), "0\n1");
            buffer.write("2");
            chai_1.assert.equal(toText(), "1\n2");
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRml4ZWRCdWZmZXJUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRml4ZWRCdWZmZXJUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQSwrQkFBNEI7QUFDNUIsK0NBQTBDO0FBRTFDLFFBQVEsQ0FBQyxhQUFhLEVBQUU7SUFFcEIsRUFBRSxDQUFDLE9BQU8sRUFBRTs7WUFFUixNQUFNLE1BQU0sR0FBRyxJQUFJLHlCQUFXLENBQVMsQ0FBQyxDQUFDLENBQUM7WUFFMUMsTUFBTSxNQUFNLEdBQUcsR0FBRyxFQUFFO2dCQUNoQixPQUFPLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEMsQ0FBQyxDQUFDO1lBRUYsYUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUUzQixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRWxCLGFBQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFFNUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVsQixhQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBRS9CLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFbEIsYUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUVuQyxDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZpbmdlcnByaW50c30gZnJvbSAnLi9GaW5nZXJwcmludHMnO1xuXG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQge0ZpeGVkQnVmZmVyfSBmcm9tICcuL0ZpeGVkQnVmZmVyJztcblxuZGVzY3JpYmUoJ0ZpeGVkQnVmZmVyJywgZnVuY3Rpb24oKSB7XG5cbiAgICBpdChcImJhc2ljXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IG5ldyBGaXhlZEJ1ZmZlcjxzdHJpbmc+KDIpO1xuXG4gICAgICAgIGNvbnN0IHRvVGV4dCA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBidWZmZXIudG9WaWV3KCkuam9pbihcIlxcblwiKTtcbiAgICAgICAgfTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwodG9UZXh0KCksIFwiXCIpO1xuXG4gICAgICAgIGJ1ZmZlci53cml0ZShcIjBcIik7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKHRvVGV4dCgpLCBcIjBcIik7XG5cbiAgICAgICAgYnVmZmVyLndyaXRlKFwiMVwiKTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwodG9UZXh0KCksIFwiMFxcbjFcIik7XG5cbiAgICAgICAgYnVmZmVyLndyaXRlKFwiMlwiKTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwodG9UZXh0KCksIFwiMVxcbjJcIik7XG5cbiAgICB9KTtcblxufSk7XG4iXX0=