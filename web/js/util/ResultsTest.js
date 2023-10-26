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
const Results_1 = require("./Results");
const Logger_1 = require("../logger/Logger");
const Assertions_1 = require("../test/Assertions");
const log = Logger_1.Logger.create();
describe('Results', function () {
    function hello() {
        return "hello";
    }
    function helloAny() {
        return "hello";
    }
    it("Execute basic", function () {
        chai_1.assert.equal((Results_1.Results.execute(() => hello())).get(), 'hello');
    });
    it("Execute any", function () {
        chai_1.assert.equal((Results_1.Results.execute(() => helloAny())).get(), 'hello');
    });
    it("Serializing an error", function () {
        return __awaiter(this, void 0, void 0, function* () {
            let error = new Error("test");
            let result = Results_1.Results.createError(error);
            chai_1.assert.equal(result.value, undefined);
            chai_1.assert.notEqual(result.err, undefined);
            log.error("this is a test error", result.err);
            result = JSON.parse(JSON.stringify(result));
            chai_1.assert.notEqual(result.err, undefined);
            chai_1.assert.notEqual(result.err.stack, undefined);
            let expected = {
                err: {
                    name: "Error",
                    message: "test",
                    stack: "..."
                }
            };
            let canonicalizedResult = Object.assign({}, result);
            canonicalizedResult.err.stack = "...";
            Assertions_1.assertJSON(canonicalizedResult, expected);
            result = Results_1.Results.create(result);
            console.log("============ after create");
            console.log(result);
            console.log("============ ");
            log.error("This is after re-creation: ", result.err);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzdWx0c1Rlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJSZXN1bHRzVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0JBQTRCO0FBQzVCLHVDQUFrQztBQUNsQyw2Q0FBd0M7QUFDeEMsbURBQThDO0FBRTlDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUM1QixRQUFRLENBQUMsU0FBUyxFQUFFO0lBRWhCLFNBQVMsS0FBSztRQUNWLE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFRCxTQUFTLFFBQVE7UUFDYixPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRUQsRUFBRSxDQUFDLGVBQWUsRUFBRTtRQUVoQixhQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsaUJBQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRWxFLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGFBQWEsRUFBRTtRQUVkLGFBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFckUsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsc0JBQXNCLEVBQUU7O1lBRXZCLElBQUksS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRTlCLElBQUksTUFBTSxHQUFHLGlCQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRXhDLGFBQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztZQUN0QyxhQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFFdkMsR0FBRyxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFOUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBRTVDLGFBQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUN2QyxhQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFJLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBRTlDLElBQUksUUFBUSxHQUFHO2dCQUNYLEdBQUcsRUFBRTtvQkFDRCxJQUFJLEVBQUUsT0FBTztvQkFDYixPQUFPLEVBQUUsTUFBTTtvQkFDZixLQUFLLEVBQUUsS0FBSztpQkFDZjthQUNKLENBQUM7WUFFRixJQUFJLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBRXBELG1CQUFtQixDQUFDLEdBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBRXZDLHVCQUFVLENBQUMsbUJBQW1CLEVBQUUsUUFBUSxDQUFDLENBQUE7WUFFekMsTUFBTSxHQUFHLGlCQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRWhDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztZQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUE7WUFFNUIsR0FBRyxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFekQsQ0FBQztLQUFBLENBQUMsQ0FBQztBQUdQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHtSZXN1bHRzfSBmcm9tICcuL1Jlc3VsdHMnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHthc3NlcnRKU09OfSBmcm9tICcuLi90ZXN0L0Fzc2VydGlvbnMnO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5kZXNjcmliZSgnUmVzdWx0cycsIGZ1bmN0aW9uKCkge1xuXG4gICAgZnVuY3Rpb24gaGVsbG8oKSB7XG4gICAgICAgIHJldHVybiBcImhlbGxvXCI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGVsbG9BbnkoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIFwiaGVsbG9cIjtcbiAgICB9XG5cbiAgICBpdChcIkV4ZWN1dGUgYmFzaWNcIiwgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGFzc2VydC5lcXVhbCgoUmVzdWx0cy5leGVjdXRlKCgpID0+IGhlbGxvKCkpKS5nZXQoKSwgJ2hlbGxvJyk7XG5cbiAgICB9KTtcblxuICAgIGl0KFwiRXhlY3V0ZSBhbnlcIiwgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGFzc2VydC5lcXVhbCgoUmVzdWx0cy5leGVjdXRlKCgpID0+IGhlbGxvQW55KCkpKS5nZXQoKSwgJ2hlbGxvJyk7XG5cbiAgICB9KTtcblxuICAgIGl0KFwiU2VyaWFsaXppbmcgYW4gZXJyb3JcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGxldCBlcnJvciA9IG5ldyBFcnJvcihcInRlc3RcIik7XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IFJlc3VsdHMuY3JlYXRlRXJyb3IoZXJyb3IpO1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChyZXN1bHQudmFsdWUsIHVuZGVmaW5lZCk7XG4gICAgICAgIGFzc2VydC5ub3RFcXVhbChyZXN1bHQuZXJyLCB1bmRlZmluZWQpO1xuXG4gICAgICAgIGxvZy5lcnJvcihcInRoaXMgaXMgYSB0ZXN0IGVycm9yXCIsIHJlc3VsdC5lcnIpO1xuXG4gICAgICAgIHJlc3VsdCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG5cbiAgICAgICAgYXNzZXJ0Lm5vdEVxdWFsKHJlc3VsdC5lcnIsIHVuZGVmaW5lZCk7XG4gICAgICAgIGFzc2VydC5ub3RFcXVhbChyZXN1bHQuZXJyIS5zdGFjaywgdW5kZWZpbmVkKTtcblxuICAgICAgICBsZXQgZXhwZWN0ZWQgPSB7XG4gICAgICAgICAgICBlcnI6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkVycm9yXCIsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJ0ZXN0XCIsXG4gICAgICAgICAgICAgICAgc3RhY2s6IFwiLi4uXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgY2Fub25pY2FsaXplZFJlc3VsdCA9IE9iamVjdC5hc3NpZ24oe30sIHJlc3VsdCk7XG5cbiAgICAgICAgY2Fub25pY2FsaXplZFJlc3VsdC5lcnIhLnN0YWNrID0gXCIuLi5cIjtcblxuICAgICAgICBhc3NlcnRKU09OKGNhbm9uaWNhbGl6ZWRSZXN1bHQsIGV4cGVjdGVkKVxuXG4gICAgICAgIHJlc3VsdCA9IFJlc3VsdHMuY3JlYXRlKHJlc3VsdCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCI9PT09PT09PT09PT0gYWZ0ZXIgY3JlYXRlXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PSBcIilcblxuICAgICAgICBsb2cuZXJyb3IoXCJUaGlzIGlzIGFmdGVyIHJlLWNyZWF0aW9uOiBcIiwgcmVzdWx0LmVycik7XG5cbiAgICB9KTtcblxuXG59KTtcbiJdfQ==