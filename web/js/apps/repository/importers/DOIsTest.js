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
const DOIs_1 = require("./DOIs");
describe('DOIs', function () {
    it("basic", function () {
        return __awaiter(this, void 0, void 0, function* () {
            chai_1.assert.equal(DOIs_1.DOIs.parseDOI("doi:10.1016/j.neuron.2018.01.009"), "10.1016/j.neuron.2018.01.009");
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRE9Jc1Rlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJET0lzVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0JBQTRCO0FBRTVCLGlDQUE0QjtBQUU1QixRQUFRLENBQUMsTUFBTSxFQUFFO0lBRWIsRUFBRSxDQUFDLE9BQU8sRUFBRTs7WUFFUixhQUFNLENBQUMsS0FBSyxDQUFDLFdBQUksQ0FBQyxRQUFRLENBQUMsa0NBQWtDLENBQUMsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO1FBRXBHLENBQUM7S0FBQSxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcbmltcG9ydCB7UERGTWV0YWRhdGF9IGZyb20gJy4vUERGTWV0YWRhdGEnO1xuaW1wb3J0IHtET0lzfSBmcm9tICcuL0RPSXMnO1xuXG5kZXNjcmliZSgnRE9JcycsIGZ1bmN0aW9uKCkge1xuXG4gICAgaXQoXCJiYXNpY1wiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICBhc3NlcnQuZXF1YWwoRE9Jcy5wYXJzZURPSShcImRvaToxMC4xMDE2L2oubmV1cm9uLjIwMTguMDEuMDA5XCIpLCBcIjEwLjEwMTYvai5uZXVyb24uMjAxOC4wMS4wMDlcIik7XG5cbiAgICB9KTtcblxufSk7XG4iXX0=