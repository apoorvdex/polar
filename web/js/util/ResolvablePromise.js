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
class ResolvablePromise {
    constructor() {
        this.resolve = () => { };
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
        });
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.promise;
        });
    }
    set(value) {
        this.resolve(value);
    }
    catch(onrejected) {
        return this.promise.catch(onrejected);
    }
    then(onresolved, onrejected) {
        return this.promise.then(onresolved, onrejected);
    }
}
exports.ResolvablePromise = ResolvablePromise;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzb2x2YWJsZVByb21pc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJSZXNvbHZhYmxlUHJvbWlzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsTUFBYSxpQkFBaUI7SUFZMUI7UUFMTyxZQUFPLEdBQXdCLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQU81QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQzlDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBRTNCLENBQUMsQ0FBQyxDQUFDO0lBR1AsQ0FBQztJQUVZLEdBQUc7O1lBQ1osT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7S0FBQTtJQUVNLEdBQUcsQ0FBQyxLQUFRO1FBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRU0sS0FBSyxDQUFrQixVQUF3QztRQUNsRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTSxJQUFJLENBQWlDLFVBQWtGLEVBQ2xGLFVBQXlDO1FBRWpGLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBRXJELENBQUM7Q0FFSjtBQXpDRCw4Q0F5Q0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBEZXByZWNhdGVkIFRyeSB0byBtb3ZlIHRvIHVzaW5nIExhdGNoIGluc3RlYWQgb2YgUmVzb2x2YWJsZVByb21pc2UuXG4gKiBUaGlzIGhhcyBhIGJ1ZyB3aGVyZSByZWplY3QgZmFpbHMgYW5kIEkgdGhpbmsgaXQncyBiZWNhdXNlIGl0J3MgYSBwcm9taXNlXG4gKiBhcm91bmQgYSBwcm9taXNlIGFuZCBub2RlIGdldHMgY29uZnVzZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBSZXNvbHZhYmxlUHJvbWlzZTxUPiBpbXBsZW1lbnRzIFByb21pc2U8VD4ge1xuXG4gICAgcHVibGljIHJlYWRvbmx5IFtTeW1ib2wudG9TdHJpbmdUYWddOiBcIlByb21pc2VcIjtcblxuICAgIHB1YmxpYyBwcm9taXNlOiBQcm9taXNlPFQ+O1xuXG4gICAgLy8gbm9pbnNwZWN0aW9uIFRzTGludFxuICAgIHB1YmxpYyByZXNvbHZlOiAodmFsdWU/OiBUKSA9PiB2b2lkID0gKCkgPT4geyB9O1xuXG4gICAgLy8gbm9pbnNwZWN0aW9uIFRzTGludFxuICAgIC8vIHB1YmxpYyByZWplY3Q6IChyZWFzb24/OiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7IH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICAgICAgLy8gdGhpcy5yZWplY3QgPSByZWplY3Q7XG4gICAgICAgIH0pO1xuXG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0KCk6IFByb21pc2U8VD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9taXNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQodmFsdWU6IFQpIHtcbiAgICAgICAgdGhpcy5yZXNvbHZlKHZhbHVlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2F0Y2g8VFJlc3VsdCA9IG5ldmVyPihvbnJlamVjdGVkPzogT25SZWplY3RlZENhbGxiYWNrPFRSZXN1bHQ+KTogUHJvbWlzZTxUIHwgVFJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9taXNlLmNhdGNoKG9ucmVqZWN0ZWQpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0aGVuPFRSZXN1bHQxID0gVCwgVFJlc3VsdDIgPSBuZXZlcj4ob25yZXNvbHZlZD86ICgodmFsdWU6IFQpID0+IChQcm9taXNlTGlrZTxUUmVzdWx0MT4gfCBUUmVzdWx0MSkpIHwgbnVsbCB8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ucmVqZWN0ZWQ/OiBPblJlamVjdGVkQ2FsbGJhY2s8VFJlc3VsdDI+KTogUHJvbWlzZTxUUmVzdWx0MSB8IFRSZXN1bHQyPiB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucHJvbWlzZS50aGVuKG9ucmVzb2x2ZWQsIG9ucmVqZWN0ZWQpO1xuXG4gICAgfVxuXG59XG5cbnR5cGUgT25SZXNvbHZlZENhbGxiYWNrPFQ+ID0gKChyZWFzb246IGFueSkgPT4gKFByb21pc2VMaWtlPFQ+IHwgVCkpIHwgbnVsbCB8IHVuZGVmaW5lZDtcblxudHlwZSBPblJlamVjdGVkQ2FsbGJhY2s8VD4gPSAoKHJlYXNvbjogYW55KSA9PiAoUHJvbWlzZUxpa2U8VD4gfCBUKSkgfCBudWxsIHwgdW5kZWZpbmVkO1xuXG4iXX0=