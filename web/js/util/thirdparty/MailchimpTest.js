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
const Mailchimp_1 = require("./Mailchimp");
describe('Mailchimp', function () {
    it("basic", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield Mailchimp_1.Mailchimp.subscribe('johny+test6@gmail.com');
            console.log(response);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbGNoaW1wVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1haWxjaGltcFRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLDJDQUFzQztBQUV0QyxRQUFRLENBQUMsV0FBVyxFQUFFO0lBR2xCLEVBQUUsQ0FBQyxPQUFPLEVBQUU7O1lBRVIsTUFBTSxRQUFRLEdBQUcsTUFBTSxxQkFBUyxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBRXBFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFMUIsQ0FBQztLQUFBLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHtNYWlsY2hpbXB9IGZyb20gJy4vTWFpbGNoaW1wJztcblxuZGVzY3JpYmUoJ01haWxjaGltcCcsIGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gbXVzdCBiZSBkaXNhYmxlZCBmb3Igbm93IGFzIEpTRE9NIHVzZXMgMTAwJSBjcHUgZHVyaW5nIHRlc3RzLlxuICAgIGl0KFwiYmFzaWNcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBNYWlsY2hpbXAuc3Vic2NyaWJlKCdqb2hueSt0ZXN0NkBnbWFpbC5jb20nKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cbiAgICB9KTtcblxufSk7XG4iXX0=