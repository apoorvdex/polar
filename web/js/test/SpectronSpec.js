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
const WebDriverTestResultReader_1 = require("./results/reader/WebDriverTestResultReader");
const Concurrently_1 = require("../util/Concurrently");
class SpectronSpec {
    constructor(app) {
        this.app = app;
    }
    waitFor(val) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Concurrently_1.Concurrently.waitForPredicate(() => this.app.client.getWindowCount(), (windowCount) => windowCount >= 1);
            const testResultReader = new WebDriverTestResultReader_1.WebDriverTestResultReader(this.app);
            chai_1.assert.equal(yield testResultReader.read(), val);
        });
    }
    static create(app) {
        return new SpectronSpec(app);
    }
}
exports.SpectronSpec = SpectronSpec;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BlY3Ryb25TcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU3BlY3Ryb25TcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwrQkFBNEI7QUFFNUIsMEZBQXFGO0FBQ3JGLHVEQUFrRDtBQUtsRCxNQUFhLFlBQVk7SUFJckIsWUFBWSxHQUFpQjtRQUN6QixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNuQixDQUFDO0lBRVksT0FBTyxDQUFDLEdBQVE7O1lBR3pCLE1BQU0sMkJBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsRUFDdEMsQ0FBQyxXQUFtQixFQUFFLEVBQUUsQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFFLENBQUM7WUFFaEYsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLHFEQUF5QixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqRSxhQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFckQsQ0FBQztLQUFBO0lBRU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFpQjtRQUNsQyxPQUFPLElBQUksWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Q0FFSjtBQXZCRCxvQ0F1QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQge1RBcHBsaWNhdGlvbn0gZnJvbSAnLi9TcGVjdHJvbic7XG5pbXBvcnQge1dlYkRyaXZlclRlc3RSZXN1bHRSZWFkZXJ9IGZyb20gJy4vcmVzdWx0cy9yZWFkZXIvV2ViRHJpdmVyVGVzdFJlc3VsdFJlYWRlcic7XG5pbXBvcnQge0NvbmN1cnJlbnRseX0gZnJvbSAnLi4vdXRpbC9Db25jdXJyZW50bHknO1xuXG4vKipcbiAqIEFsbG93cyB1cyB0byBlYXNpbHkgYXdhaXQgZm9yIHRoZSB0ZXN0IHRvIGZpbmlzaC5cbiAqL1xuZXhwb3J0IGNsYXNzIFNwZWN0cm9uU3BlYyB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGFwcDogVEFwcGxpY2F0aW9uO1xuXG4gICAgY29uc3RydWN0b3IoYXBwOiBUQXBwbGljYXRpb24pIHtcbiAgICAgICAgdGhpcy5hcHAgPSBhcHA7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHdhaXRGb3IodmFsOiBhbnkpIHtcblxuICAgICAgICAvLyB3YWl0IGZvciBhdCBsZWFzdCBvbmUgd2luZG93ICh3aGljaCBpcyB0aGUgbWFpbiBvbmUgdGhhdCB3aWxsIGhvbGQgb3VyIHZhbHVlKVxuICAgICAgICBhd2FpdCBDb25jdXJyZW50bHkud2FpdEZvclByZWRpY2F0ZSgoKSA9PiB0aGlzLmFwcC5jbGllbnQuZ2V0V2luZG93Q291bnQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHdpbmRvd0NvdW50OiBudW1iZXIpID0+IHdpbmRvd0NvdW50ID49IDEgKTtcblxuICAgICAgICBjb25zdCB0ZXN0UmVzdWx0UmVhZGVyID0gbmV3IFdlYkRyaXZlclRlc3RSZXN1bHRSZWFkZXIodGhpcy5hcHApO1xuICAgICAgICBhc3NlcnQuZXF1YWwoYXdhaXQgdGVzdFJlc3VsdFJlYWRlci5yZWFkKCksIHZhbCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZShhcHA6IFRBcHBsaWNhdGlvbikge1xuICAgICAgICByZXR1cm4gbmV3IFNwZWN0cm9uU3BlYyhhcHApO1xuICAgIH1cblxufVxuIl19