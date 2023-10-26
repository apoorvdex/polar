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
const Reducers_1 = require("./Reducers");
describe('Reducers', function () {
    describe('sum', function () {
        it("basic", function () {
            return __awaiter(this, void 0, void 0, function* () {
                chai_1.assert.equal([100].reduce(Reducers_1.Reducers.SUM), 100);
            });
        });
        it("none", function () {
            return __awaiter(this, void 0, void 0, function* () {
                chai_1.assert.equal([].reduce(Reducers_1.Reducers.SUM, 0), 0);
            });
        });
    });
    describe('LAST', function () {
        it("two values", function () {
            return __awaiter(this, void 0, void 0, function* () {
                chai_1.assert.equal([0, 1].reduce(Reducers_1.Reducers.LAST), 1);
            });
        });
        it("one value", function () {
            return __awaiter(this, void 0, void 0, function* () {
                chai_1.assert.equal([0].reduce(Reducers_1.Reducers.LAST), 0);
            });
        });
        it("none", function () {
            return __awaiter(this, void 0, void 0, function* () {
                chai_1.assert.equal([undefined, null].reduce(Reducers_1.Reducers.LAST), undefined);
            });
        });
        it("all null values", function () {
            return __awaiter(this, void 0, void 0, function* () {
                chai_1.assert.ok([null, null, null].reduce(Reducers_1.Reducers.LAST) === null);
            });
        });
        it("all undefined", function () {
            return __awaiter(this, void 0, void 0, function* () {
                chai_1.assert.ok(typeof [null, null, undefined].reduce(Reducers_1.Reducers.LAST) === "undefined");
            });
        });
        it("with default", function () {
            return __awaiter(this, void 0, void 0, function* () {
                chai_1.assert.ok(["alice", "bob"].reduce(Reducers_1.Reducers.LAST, "carol") === "bob");
            });
        });
        it("with default and no entries", function () {
            return __awaiter(this, void 0, void 0, function* () {
                chai_1.assert.ok([].reduce(Reducers_1.Reducers.LAST, "carol") === "carol");
            });
        });
    });
    describe('FIRST', function () {
        it("basic", function () {
            return __awaiter(this, void 0, void 0, function* () {
                chai_1.assert.equal([0, 1, 2, 3].reduce(Reducers_1.Reducers.FIRST), 0);
            });
        });
        it("one value", function () {
            return __awaiter(this, void 0, void 0, function* () {
                chai_1.assert.equal([0].reduce(Reducers_1.Reducers.FIRST), 0);
            });
        });
        it("none", function () {
            return __awaiter(this, void 0, void 0, function* () {
                chai_1.assert.equal([undefined, null].reduce(Reducers_1.Reducers.FIRST), undefined);
            });
        });
        it("none with default and one entry", function () {
            return __awaiter(this, void 0, void 0, function* () {
                chai_1.assert.equal(['a'].reduce(Reducers_1.Reducers.FIRST, 'carol'), 'a');
            });
        });
        it("none with default and no entries", function () {
            return __awaiter(this, void 0, void 0, function* () {
                chai_1.assert.equal([].reduce(Reducers_1.Reducers.FIRST, 'carol'), 'carol');
            });
        });
        it("all null values", function () {
            return __awaiter(this, void 0, void 0, function* () {
                chai_1.assert.ok([null, null, null].reduce(Reducers_1.Reducers.FIRST) === null);
            });
        });
        it("all undefined", function () {
            return __awaiter(this, void 0, void 0, function* () {
                chai_1.assert.ok(typeof [undefined, null, null].reduce(Reducers_1.Reducers.FIRST) === "undefined");
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVkdWNlcnNUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUmVkdWNlcnNUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwrQkFBNEI7QUFHNUIseUNBQW9DO0FBR3BDLFFBQVEsQ0FBQyxVQUFVLEVBQUU7SUFFakIsUUFBUSxDQUFDLEtBQUssRUFBRTtRQUVaLEVBQUUsQ0FBQyxPQUFPLEVBQUU7O2dCQUNSLGFBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsbUJBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNsRCxDQUFDO1NBQUEsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLE1BQU0sRUFBRTs7Z0JBQ1AsYUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLG1CQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hELENBQUM7U0FBQSxDQUFDLENBQUM7SUFFUCxDQUFDLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxNQUFNLEVBQUU7UUFFYixFQUFFLENBQUMsWUFBWSxFQUFFOztnQkFDYixhQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxtQkFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xELENBQUM7U0FBQSxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsV0FBVyxFQUFFOztnQkFDWixhQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLG1CQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0MsQ0FBQztTQUFBLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxNQUFNLEVBQUU7O2dCQUNQLGFBQU0sQ0FBQyxLQUFLLENBQUMsQ0FB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Q0FBQyxlQUFlLEVBQUU7O2dCQUNoQixhQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxtQkFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLFdBQVcsQ0FBQyxDQUFDO1lBQ3JGLENBQUM7U0FBQSxDQUFDLENBQUM7SUFFUCxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHtQcm9ncmVzc0NhbGN1bGF0b3J9IGZyb20gJy4vUHJvZ3Jlc3NDYWxjdWxhdG9yJztcbmltcG9ydCB7UmVzb2x2YWJsZVByb21pc2V9IGZyb20gJy4vUmVzb2x2YWJsZVByb21pc2UnO1xuaW1wb3J0IHtSZWR1Y2Vyc30gZnJvbSAnLi9SZWR1Y2Vycyc7XG5pbXBvcnQge2dldEN1cnJlbnRIdWJ9IGZyb20gJ0BzZW50cnkvZWxlY3Ryb24nO1xuXG5kZXNjcmliZSgnUmVkdWNlcnMnLCBmdW5jdGlvbigpIHtcblxuICAgIGRlc2NyaWJlKCdzdW0nLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBpdChcImJhc2ljXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChbMTAwXS5yZWR1Y2UoUmVkdWNlcnMuU1VNKSwgMTAwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJub25lXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChbXS5yZWR1Y2UoUmVkdWNlcnMuU1VNLCAwKSwgMCk7XG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgnTEFTVCcsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGl0KFwidHdvIHZhbHVlc1wiLCBhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChbMCwgMV0ucmVkdWNlKFJlZHVjZXJzLkxBU1QpLCAxKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJvbmUgdmFsdWVcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoWzBdLnJlZHVjZShSZWR1Y2Vycy5MQVNUKSwgMCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwibm9uZVwiLCBhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChbdW5kZWZpbmVkLCBudWxsXS5yZWR1Y2UoUmVkdWNlcnMuTEFTVCksIHVuZGVmaW5lZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiYWxsIG51bGwgdmFsdWVzXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGFzc2VydC5vayhbbnVsbCwgbnVsbCwgbnVsbF0ucmVkdWNlKFJlZHVjZXJzLkxBU1QpID09PSBudWxsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJhbGwgdW5kZWZpbmVkXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGFzc2VydC5vayh0eXBlb2YgW251bGwsIG51bGwsIHVuZGVmaW5lZF0ucmVkdWNlKFJlZHVjZXJzLkxBU1QpID09PSBcInVuZGVmaW5lZFwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJ3aXRoIGRlZmF1bHRcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYXNzZXJ0Lm9rKFtcImFsaWNlXCIsIFwiYm9iXCJdLnJlZHVjZShSZWR1Y2Vycy5MQVNULCBcImNhcm9sXCIpID09PSBcImJvYlwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJ3aXRoIGRlZmF1bHQgYW5kIG5vIGVudHJpZXNcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYXNzZXJ0Lm9rKFtdLnJlZHVjZShSZWR1Y2Vycy5MQVNULCBcImNhcm9sXCIpID09PSBcImNhcm9sXCIpO1xuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG5cbiAgICBkZXNjcmliZSgnRklSU1QnLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAvLyBbXS5yZWR1Y2UoKVxuXG4gICAgICAgIC8vIEZJWE1FOiBvaywgdGhpcyBpcyBhbGwgZnVja2VkIGJlY2F1c2UgSSBjYW4gZ2l2ZSB0aGUgSU5JVElBTCB2YWx1ZVxuICAgICAgICAvLyB0byB0aGUgcmVkdWNlciBidXQgbm90IGEgREVGQVVMVCB2YWx1ZSB0byByZXR1cm4gaWYgdGhlIGFycmF5IGlzXG4gICAgICAgIC8vIGVtcHR5IGFuZCB0aGUgcmVkdWNlciBpcyBORVZFUiBjYWxsZWQgaWYgdGhlcmUgYXJlIG5vIHZhbHVlcyBhbmQgVFNcbiAgICAgICAgLy9cblxuICAgICAgICBpdChcImJhc2ljXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChbMCwgMSwgMiwgM10ucmVkdWNlKFJlZHVjZXJzLkZJUlNUKSwgMCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwib25lIHZhbHVlXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChbMF0ucmVkdWNlKFJlZHVjZXJzLkZJUlNUKSwgMCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwibm9uZVwiLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoW3VuZGVmaW5lZCwgbnVsbF0ucmVkdWNlKFJlZHVjZXJzLkZJUlNUKSwgdW5kZWZpbmVkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJub25lIHdpdGggZGVmYXVsdCBhbmQgb25lIGVudHJ5XCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChbJ2EnXS5yZWR1Y2UoUmVkdWNlcnMuRklSU1QsICdjYXJvbCcpLCAnYScpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdChcIm5vbmUgd2l0aCBkZWZhdWx0IGFuZCBubyBlbnRyaWVzXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChbXS5yZWR1Y2UoUmVkdWNlcnMuRklSU1QsICdjYXJvbCcpLCAnY2Fyb2wnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJhbGwgbnVsbCB2YWx1ZXNcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYXNzZXJ0Lm9rKFtudWxsLCBudWxsLCBudWxsXS5yZWR1Y2UoUmVkdWNlcnMuRklSU1QpID09PSBudWxsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJhbGwgdW5kZWZpbmVkXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGFzc2VydC5vayh0eXBlb2YgW3VuZGVmaW5lZCwgbnVsbCwgbnVsbF0ucmVkdWNlKFJlZHVjZXJzLkZJUlNUKSA9PT0gXCJ1bmRlZmluZWRcIik7XG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbn0pO1xuIl19