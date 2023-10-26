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
const Blobs_1 = require("./Blobs");
const { JSDOM } = require("jsdom");
xdescribe('Blobs', function () {
    it("basic", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const blob = new Blob(["asdf"], { type: 'text/plain' });
            const arrayBuffer = yield Blobs_1.Blobs.toArrayBuffer(blob);
            Buffer.from(arrayBuffer);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmxvYnNUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQmxvYnNUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQSxtQ0FBOEI7QUFFOUIsTUFBTSxFQUFDLEtBQUssRUFBQyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUVqQyxTQUFTLENBQUMsT0FBTyxFQUFFO0lBR2YsRUFBRSxDQUFDLE9BQU8sRUFBRTs7WUFFUixNQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUMsSUFBSSxFQUFHLFlBQVksRUFBQyxDQUFDLENBQUM7WUFFdkQsTUFBTSxXQUFXLEdBQUcsTUFBTSxhQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXBELE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFN0IsQ0FBQztLQUFBLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHtBdHRyaWJ1dGVzfSBmcm9tICcuL0F0dHJpYnV0ZXMnO1xuaW1wb3J0IHtCbG9ic30gZnJvbSAnLi9CbG9icyc7XG5cbmNvbnN0IHtKU0RPTX0gPSByZXF1aXJlKFwianNkb21cIik7XG5cbnhkZXNjcmliZSgnQmxvYnMnLCBmdW5jdGlvbigpIHtcblxuICAgIC8vIG11c3QgYmUgZGlzYWJsZWQgZm9yIG5vdyBhcyBKU0RPTSB1c2VzIDEwMCUgY3B1IGR1cmluZyB0ZXN0cy5cbiAgICBpdChcImJhc2ljXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbXCJhc2RmXCJdLCB7dHlwZSA6ICd0ZXh0L3BsYWluJ30pO1xuXG4gICAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0gYXdhaXQgQmxvYnMudG9BcnJheUJ1ZmZlcihibG9iKTtcblxuICAgICAgICBCdWZmZXIuZnJvbShhcnJheUJ1ZmZlcik7XG5cbiAgICB9KTtcblxufSk7XG4iXX0=