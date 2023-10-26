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
class Blobs {
    static toArrayBuffer(blob) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.addEventListener("loadend", () => {
                    resolve(reader.result);
                });
                reader.addEventListener("error", (err) => {
                    reject(err);
                });
                reader.readAsArrayBuffer(blob);
            });
        });
    }
}
exports.Blobs = Blobs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmxvYnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJCbG9icy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsTUFBYSxLQUFLO0lBRVAsTUFBTSxDQUFPLGFBQWEsQ0FBQyxJQUFVOztZQUV4QyxPQUFPLElBQUksT0FBTyxDQUFjLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUVoRCxNQUFNLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO2dCQUVoQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRTtvQkFFcEMsT0FBTyxDQUFlLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDekMsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO29CQUVyQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2hCLENBQUMsQ0FBQyxDQUFDO2dCQUlILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVuQyxDQUFDLENBQUMsQ0FBQztRQUVQLENBQUM7S0FBQTtDQUdKO0FBM0JELHNCQTJCQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBCbG9icyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHRvQXJyYXlCdWZmZXIoYmxvYjogQmxvYik6IFByb21pc2U8QXJyYXlCdWZmZXI+IHtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8QXJyYXlCdWZmZXI+KChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgICAgICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkZW5kXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyByZWFkZXIucmVzdWx0IGNvbnRhaW5zIHRoZSBjb250ZW50cyBvZiBibG9iIGFzIGEgdHlwZWQgYXJyYXlcbiAgICAgICAgICAgICAgICByZXNvbHZlKDxBcnJheUJ1ZmZlcj4gcmVhZGVyLnJlc3VsdCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gcmVhZGVyLnJlc3VsdCBjb250YWlucyB0aGUgY29udGVudHMgb2YgYmxvYiBhcyBhIHR5cGVkIGFycmF5XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gVE9ETzogYWRkIGEgcmVhZEFzVGV4dCB2ZXJzaW9uIHRvby4uLlxuXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoYmxvYik7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cblxufVxuIl19