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
const FileLoader_1 = require("./FileLoader");
const PHZLoader_1 = require("./PHZLoader");
const PDFLoader_1 = require("./PDFLoader");
class DefaultFileLoader extends FileLoader_1.FileLoader {
    constructor(fileRegistry, cacheRegistry) {
        super();
        this.fileRegistry = fileRegistry;
        this.cacheRegistry = cacheRegistry;
        this.pdfLoader = new PDFLoader_1.PDFLoader(fileRegistry);
        this.phzLoader = new PHZLoader_1.PHZLoader({ cacheRegistry });
    }
    registerForLoad(path) {
        return __awaiter(this, void 0, void 0, function* () {
            if (path.endsWith(".pdf")) {
                return this.pdfLoader.registerForLoad(path);
            }
            else if (path.endsWith(".phz")) {
                return this.phzLoader.registerForLoad(path);
            }
            else {
                throw new Error("Unable to handle file: " + path);
            }
        });
    }
}
exports.DefaultFileLoader = DefaultFileLoader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVmYXVsdEZpbGVMb2FkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJEZWZhdWx0RmlsZUxvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBRXhDLDJDQUFzQztBQUV0QywyQ0FBc0M7QUFHdEMsTUFBYSxpQkFBa0IsU0FBUSx1QkFBVTtJQVU3QyxZQUFZLFlBQTBCLEVBQUUsYUFBNEI7UUFDaEUsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUkscUJBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUkscUJBQVMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVZLGVBQWUsQ0FBQyxJQUFZOztZQUVyQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3ZCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDL0M7aUJBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUM5QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQy9DO2lCQUFNO2dCQUNILE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDckQ7UUFFTCxDQUFDO0tBQUE7Q0FFSjtBQTlCRCw4Q0E4QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZpbGVMb2FkZXJ9IGZyb20gJy4vRmlsZUxvYWRlcic7XG5pbXBvcnQge0NhY2hlUmVnaXN0cnl9IGZyb20gJy4uLy4uLy4uL2JhY2tlbmQvcHJveHlzZXJ2ZXIvQ2FjaGVSZWdpc3RyeSc7XG5pbXBvcnQge1BIWkxvYWRlcn0gZnJvbSAnLi9QSFpMb2FkZXInO1xuaW1wb3J0IHtGaWxlUmVnaXN0cnl9IGZyb20gJy4uLy4uLy4uL2JhY2tlbmQvd2Vic2VydmVyL0ZpbGVSZWdpc3RyeSc7XG5pbXBvcnQge1BERkxvYWRlcn0gZnJvbSAnLi9QREZMb2FkZXInO1xuaW1wb3J0IHtMb2FkZWRGaWxlfSBmcm9tICcuL0xvYWRlZEZpbGUnO1xuXG5leHBvcnQgY2xhc3MgRGVmYXVsdEZpbGVMb2FkZXIgZXh0ZW5kcyBGaWxlTG9hZGVyIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgZmlsZVJlZ2lzdHJ5OiBGaWxlUmVnaXN0cnk7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGNhY2hlUmVnaXN0cnk6IENhY2hlUmVnaXN0cnk7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHBkZkxvYWRlcjogUERGTG9hZGVyO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBwaHpMb2FkZXI6IFBIWkxvYWRlcjtcblxuICAgIGNvbnN0cnVjdG9yKGZpbGVSZWdpc3RyeTogRmlsZVJlZ2lzdHJ5LCBjYWNoZVJlZ2lzdHJ5OiBDYWNoZVJlZ2lzdHJ5KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZmlsZVJlZ2lzdHJ5ID0gZmlsZVJlZ2lzdHJ5O1xuICAgICAgICB0aGlzLmNhY2hlUmVnaXN0cnkgPSBjYWNoZVJlZ2lzdHJ5O1xuICAgICAgICB0aGlzLnBkZkxvYWRlciA9IG5ldyBQREZMb2FkZXIoZmlsZVJlZ2lzdHJ5KTtcbiAgICAgICAgdGhpcy5waHpMb2FkZXIgPSBuZXcgUEhaTG9hZGVyKHtjYWNoZVJlZ2lzdHJ5fSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHJlZ2lzdGVyRm9yTG9hZChwYXRoOiBzdHJpbmcpOiBQcm9taXNlPExvYWRlZEZpbGU+IHtcblxuICAgICAgICBpZiAocGF0aC5lbmRzV2l0aChcIi5wZGZcIikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBkZkxvYWRlci5yZWdpc3RlckZvckxvYWQocGF0aCk7XG4gICAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aChcIi5waHpcIikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBoekxvYWRlci5yZWdpc3RlckZvckxvYWQocGF0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gaGFuZGxlIGZpbGU6IFwiICsgcGF0aCk7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuIl19