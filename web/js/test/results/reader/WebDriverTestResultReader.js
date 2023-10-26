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
const Results_1 = require("../../../util/Results");
class WebDriverTestResultReader {
    constructor(app) {
        this.app = app;
    }
    read() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.app.client.executeAsync((done) => {
                function poll() {
                    if (window.SPECTRON_TEST_RESULT !== null &&
                        window.SPECTRON_TEST_RESULT !== undefined) {
                        done(window.SPECTRON_TEST_RESULT);
                        return;
                    }
                    setTimeout(poll, 250);
                }
                poll();
            });
            return Results_1.Results.create(result).get();
        });
    }
}
exports.WebDriverTestResultReader = WebDriverTestResultReader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViRHJpdmVyVGVzdFJlc3VsdFJlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIldlYkRyaXZlclRlc3RSZXN1bHRSZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBLG1EQUE4QztBQUs5QyxNQUFhLHlCQUF5QjtJQUlsQyxZQUFZLEdBQWlCO1FBQ3pCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ25CLENBQUM7SUFFWSxJQUFJOztZQUViLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBd0IsRUFBRyxFQUFFO2dCQUU1RSxTQUFTLElBQUk7b0JBRVQsSUFBSSxNQUFNLENBQUMsb0JBQW9CLEtBQUssSUFBSTt3QkFDcEMsTUFBTSxDQUFDLG9CQUFvQixLQUFLLFNBQVMsRUFBRTt3QkFFM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO3dCQUNsQyxPQUFPO3FCQUVWO29CQUVELFVBQVUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQzFCLENBQUM7Z0JBRUQsSUFBSSxFQUFFLENBQUM7WUFFWCxDQUFDLENBQUMsQ0FBQztZQUVILE9BQU8saUJBQU8sQ0FBQyxNQUFNLENBQUksTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFM0MsQ0FBQztLQUFBO0NBRUo7QUFqQ0QsOERBaUNDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge1Rlc3RSZXN1bHRSZWFkZXJ9IGZyb20gJy4uL1Rlc3RSZXN1bHRSZWFkZXInO1xuaW1wb3J0IHtSZXN1bHRzfSBmcm9tICcuLi8uLi8uLi91dGlsL1Jlc3VsdHMnO1xuaW1wb3J0IHtUQXBwbGljYXRpb259IGZyb20gJy4uLy4uL1NwZWN0cm9uJztcblxuZGVjbGFyZSB2YXIgd2luZG93OiBhbnk7XG5cbmV4cG9ydCBjbGFzcyBXZWJEcml2ZXJUZXN0UmVzdWx0UmVhZGVyIGltcGxlbWVudHMgVGVzdFJlc3VsdFJlYWRlciB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGFwcDogVEFwcGxpY2F0aW9uO1xuXG4gICAgY29uc3RydWN0b3IoYXBwOiBUQXBwbGljYXRpb24pIHtcbiAgICAgICAgdGhpcy5hcHAgPSBhcHA7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHJlYWQ8VD4oKTogUHJvbWlzZTxUPiB7XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5hcHAuY2xpZW50LmV4ZWN1dGVBc3luYygoZG9uZTogKHZhbDogYW55KSA9PiB2b2lkICkgPT4ge1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBwb2xsKCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5TUEVDVFJPTl9URVNUX1JFU1VMVCAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuU1BFQ1RST05fVEVTVF9SRVNVTFQgIT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGRvbmUod2luZG93LlNQRUNUUk9OX1RFU1RfUkVTVUxUKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChwb2xsLCAyNTApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwb2xsKCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIFJlc3VsdHMuY3JlYXRlPFQ+KHJlc3VsdCkuZ2V0KCk7XG5cbiAgICB9XG5cbn1cbiJdfQ==