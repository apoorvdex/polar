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
class BufferWriter {
    constructor() {
        this.buffer = [];
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    write(data) {
        return __awaiter(this, void 0, void 0, function* () {
            this.buffer.push(data);
        });
    }
    close(err) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    toString() {
        return this.buffer.join("");
    }
}
exports.BufferWriter = BufferWriter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnVmZmVyV3JpdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQnVmZmVyV3JpdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFRQSxNQUFhLFlBQVk7SUFBekI7UUFFWSxXQUFNLEdBQWEsRUFBRSxDQUFDO0lBa0JsQyxDQUFDO0lBaEJnQixJQUFJOztRQUVqQixDQUFDO0tBQUE7SUFFWSxLQUFLLENBQUMsSUFBWTs7WUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsQ0FBQztLQUFBO0lBRVksS0FBSyxDQUFDLEdBQVc7O1FBRTlCLENBQUM7S0FBQTtJQUVNLFFBQVE7UUFDWCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Q0FFSjtBQXBCRCxvQ0FvQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1dyaXRlU3RyZWFtfSBmcm9tIFwiZnNcIjtcbmltcG9ydCB7RmlsZXN9IGZyb20gJy4uLy4uLy4uL3V0aWwvRmlsZXMnO1xuaW1wb3J0IHtQcmVjb25kaXRpb25zfSBmcm9tICcuLi8uLi8uLi9QcmVjb25kaXRpb25zJztcbmltcG9ydCB7V3JpdGVyfSBmcm9tICcuLi9FeHBvcnRlcnMnO1xuXG4vKipcbiAqIFNpbXBsZSB3cml0ZXIgdGhhdCBqdXN0IHdyaXRlcyB0byBtZW1vcnlcbiAqL1xuZXhwb3J0IGNsYXNzIEJ1ZmZlcldyaXRlciBpbXBsZW1lbnRzIFdyaXRlciB7XG5cbiAgICBwcml2YXRlIGJ1ZmZlcjogc3RyaW5nW10gPSBbXTtcblxuICAgIHB1YmxpYyBhc3luYyBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICAvLyBub29wXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHdyaXRlKGRhdGE6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICB0aGlzLmJ1ZmZlci5wdXNoKGRhdGEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjbG9zZShlcnI/OiBFcnJvcik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICAvLyBub29wXG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1ZmZlci5qb2luKFwiXCIpO1xuICAgIH1cblxufVxuIl19