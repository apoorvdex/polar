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
const Base64_1 = require("./Base64");
describe('Base64', function () {
    it("basic", function () {
        return __awaiter(this, void 0, void 0, function* () {
            chai_1.assert.equal("YXNkZg==", Base64_1.Base64.encode("asdf"));
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZTY0VGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkJhc2U2NFRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLCtCQUE0QjtBQUM1QixxQ0FBZ0M7QUFFaEMsUUFBUSxDQUFDLFFBQVEsRUFBRTtJQUdmLEVBQUUsQ0FBQyxPQUFPLEVBQUU7O1lBRVIsYUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsZUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBRXBELENBQUM7S0FBQSxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcbmltcG9ydCB7QmFzZTY0fSBmcm9tICcuL0Jhc2U2NCc7XG5cbmRlc2NyaWJlKCdCYXNlNjQnLCBmdW5jdGlvbigpIHtcblxuICAgIC8vIG11c3QgYmUgZGlzYWJsZWQgZm9yIG5vdyBhcyBKU0RPTSB1c2VzIDEwMCUgY3B1IGR1cmluZyB0ZXN0cy5cbiAgICBpdChcImJhc2ljXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChcIllYTmtaZz09XCIsIEJhc2U2NC5lbmNvZGUoXCJhc2RmXCIpKTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==