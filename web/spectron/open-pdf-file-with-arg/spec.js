"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const Files_1 = require("../../js/util/Files");
const Spectron_1 = require("../../js/test/Spectron");
const path = require('path');
describe('Open specific PDF file from command line', function () {
    this.timeout(30000);
    const examplePDF = path.join(__dirname, "../../../docs/example.pdf");
    Spectron_1.Spectron.setup(path.join(__dirname, '../../..'), examplePDF);
    xit('PDF file loads', function () {
        return __awaiter(this, void 0, void 0, function* () {
            assert_1.default.ok(yield Files_1.Files.existsAsync(examplePDF));
            const client = this.app.client;
            console.log("OK.. both windows are up.");
            yield this.app.client.waitUntilTextExists('.textLayer', 'Trace-based Just-in-Time', 10000);
            return true;
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLG9EQUE0QjtBQUM1QiwrQ0FBMEM7QUFDMUMscURBQTBEO0FBQzFELE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUU3QixRQUFRLENBQUMsMENBQTBDLEVBQUU7SUFDakQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVwQixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO0lBRXJFLG1CQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBSTdELEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRTs7WUFFbEIsZ0JBQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxhQUFLLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFJL0MsTUFBTSxNQUFNLEdBQWEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7WUFJekMsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1lBRXpDLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFLDBCQUEwQixFQUFFLEtBQUssQ0FBQyxDQUFBO1lBRTFGLE9BQU8sSUFBSSxDQUFDO1FBRWhCLENBQUM7S0FBQSxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IGFzc2VydCBmcm9tICdhc3NlcnQnO1xuaW1wb3J0IHtGaWxlc30gZnJvbSAnLi4vLi4vanMvdXRpbC9GaWxlcyc7XG5pbXBvcnQge1NwZWN0cm9uLCBUQnJvd3Nlcn0gZnJvbSAnLi4vLi4vanMvdGVzdC9TcGVjdHJvbic7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuXG5kZXNjcmliZSgnT3BlbiBzcGVjaWZpYyBQREYgZmlsZSBmcm9tIGNvbW1hbmQgbGluZScsIGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnRpbWVvdXQoMzAwMDApO1xuXG4gICAgY29uc3QgZXhhbXBsZVBERiA9IHBhdGguam9pbihfX2Rpcm5hbWUsIFwiLi4vLi4vLi4vZG9jcy9leGFtcGxlLnBkZlwiKTtcblxuICAgIFNwZWN0cm9uLnNldHVwKHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi8uLi8uLicpLCBleGFtcGxlUERGKTtcblxuICAgIC8vIFRPRE86IGRpc2FibGluZyB0aGlzIHJpZ2h0IG5vdyBhcyBjb21tYW5kIGxpbmUgZmlsZSBsb2FkaW5nIGlzbid0IGEgcHJpb3JpdHkuXG5cbiAgICB4aXQoJ1BERiBmaWxlIGxvYWRzJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGFzc2VydC5vayhhd2FpdCBGaWxlcy5leGlzdHNBc3luYyhleGFtcGxlUERGKSk7XG5cbiAgICAgICAgLy8gYXNzZXJ0LmVxdWFsKGF3YWl0IHRoaXMuYXBwLmNsaWVudC5nZXRXaW5kb3dDb3VudCgpLCAyKTtcblxuICAgICAgICBjb25zdCBjbGllbnQ6IFRCcm93c2VyID0gdGhpcy5hcHAuY2xpZW50O1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRklYTUU6IFwiICsgY2xpZW50LmdldFRpdGxlKCkpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT0suLiBib3RoIHdpbmRvd3MgYXJlIHVwLlwiKTtcblxuICAgICAgICBhd2FpdCB0aGlzLmFwcC5jbGllbnQud2FpdFVudGlsVGV4dEV4aXN0cygnLnRleHRMYXllcicsICdUcmFjZS1iYXNlZCBKdXN0LWluLVRpbWUnLCAxMDAwMClcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==