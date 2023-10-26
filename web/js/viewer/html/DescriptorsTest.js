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
const Assertions_1 = require("../../test/Assertions");
const Descriptors_1 = require("./Descriptors");
describe('Descriptors', function () {
    describe('computeScrollBoxFromBoxes', function () {
        it("basic", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const scrollBox = {
                    width: 150,
                    height: 150
                };
                const scroll = {
                    width: 100,
                    height: 100
                };
                let result = Descriptors_1.Descriptors.computeScrollBoxFromBoxes(scrollBox, scroll);
                chai_1.assert.ok(result.isPresent());
                Assertions_1.assertJSON(result, {
                    "value": {
                        "width": 150,
                        "height": 150
                    }
                });
            });
        });
        it("none", function () {
            return __awaiter(this, void 0, void 0, function* () {
                let result = Descriptors_1.Descriptors.computeScrollBoxFromBoxes();
                chai_1.assert.isFalse(result.isPresent());
            });
        });
        it("first", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const scrollBox = {
                    width: 150,
                    height: 150
                };
                let result = Descriptors_1.Descriptors.computeScrollBoxFromBoxes(scrollBox);
                chai_1.assert.ok(result.isPresent());
                Assertions_1.assertJSON(result, {
                    "value": {
                        "width": 150,
                        "height": 150
                    }
                });
            });
        });
        it("last", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const scroll = {
                    width: 100,
                    height: 100
                };
                let result = Descriptors_1.Descriptors.computeScrollBoxFromBoxes(undefined, scroll);
                chai_1.assert.ok(result.isPresent());
                Assertions_1.assertJSON(result, {
                    "value": {
                        "width": 100,
                        "height": 100
                    }
                });
            });
        });
        it("broken", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const scroll = {
                    width: "100",
                    height: 100
                };
                let result = Descriptors_1.Descriptors.computeScrollBoxFromBoxes(scroll, scroll);
                chai_1.assert.isFalse(result.isPresent());
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVzY3JpcHRvcnNUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRGVzY3JpcHRvcnNUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwrQkFBNEI7QUFDNUIsc0RBQWlEO0FBQ2pELCtDQUEwQztBQUcxQyxRQUFRLENBQUMsYUFBYSxFQUFFO0lBRXBCLFFBQVEsQ0FBQywyQkFBMkIsRUFBRTtRQUVsQyxFQUFFLENBQUMsT0FBTyxFQUFFOztnQkFFUixNQUFNLFNBQVMsR0FBYztvQkFDekIsS0FBSyxFQUFFLEdBQUc7b0JBQ1YsTUFBTSxFQUFFLEdBQUc7aUJBQ2QsQ0FBQTtnQkFFRCxNQUFNLE1BQU0sR0FBYztvQkFDdEIsS0FBSyxFQUFFLEdBQUc7b0JBQ1YsTUFBTSxFQUFFLEdBQUc7aUJBQ2QsQ0FBQTtnQkFFRCxJQUFJLE1BQU0sR0FBRyx5QkFBVyxDQUFDLHlCQUF5QixDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFFdEUsYUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQTtnQkFFN0IsdUJBQVUsQ0FBQyxNQUFNLEVBQUU7b0JBQ2YsT0FBTyxFQUFFO3dCQUNMLE9BQU8sRUFBRSxHQUFHO3dCQUNaLFFBQVEsRUFBRSxHQUFHO3FCQUNoQjtpQkFDSixDQUFDLENBQUM7WUFFUCxDQUFDO1NBQUEsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLE1BQU0sRUFBRTs7Z0JBRVAsSUFBSSxNQUFNLEdBQUcseUJBQVcsQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO2dCQUNyRCxhQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFBO1lBRXRDLENBQUM7U0FBQSxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsT0FBTyxFQUFFOztnQkFFUixNQUFNLFNBQVMsR0FBYztvQkFDekIsS0FBSyxFQUFFLEdBQUc7b0JBQ1YsTUFBTSxFQUFFLEdBQUc7aUJBQ2QsQ0FBQTtnQkFFRCxJQUFJLE1BQU0sR0FBRyx5QkFBVyxDQUFDLHlCQUF5QixDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUU5RCxhQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFBO2dCQUU3Qix1QkFBVSxDQUFDLE1BQU0sRUFBRTtvQkFDZixPQUFPLEVBQUU7d0JBQ0wsT0FBTyxFQUFFLEdBQUc7d0JBQ1osUUFBUSxFQUFFLEdBQUc7cUJBQ2hCO2lCQUNKLENBQUMsQ0FBQztZQUVQLENBQUM7U0FBQSxDQUFDLENBQUM7UUFHSCxFQUFFLENBQUMsTUFBTSxFQUFFOztnQkFFUCxNQUFNLE1BQU0sR0FBYztvQkFDdEIsS0FBSyxFQUFFLEdBQUc7b0JBQ1YsTUFBTSxFQUFFLEdBQUc7aUJBQ2QsQ0FBQTtnQkFFRCxJQUFJLE1BQU0sR0FBRyx5QkFBVyxDQUFDLHlCQUF5QixDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFFdEUsYUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQTtnQkFFN0IsdUJBQVUsQ0FBQyxNQUFNLEVBQUU7b0JBQ2YsT0FBTyxFQUFFO3dCQUNMLE9BQU8sRUFBRSxHQUFHO3dCQUNaLFFBQVEsRUFBRSxHQUFHO3FCQUNoQjtpQkFDSixDQUFDLENBQUM7WUFFUCxDQUFDO1NBQUEsQ0FBQyxDQUFDO1FBR0gsRUFBRSxDQUFDLFFBQVEsRUFBRTs7Z0JBRVQsTUFBTSxNQUFNLEdBQVE7b0JBQ2hCLEtBQUssRUFBRSxLQUFLO29CQUNaLE1BQU0sRUFBRSxHQUFHO2lCQUNkLENBQUE7Z0JBRUQsSUFBSSxNQUFNLEdBQUcseUJBQVcsQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBRW5FLGFBQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUE7WUFFdEMsQ0FBQztTQUFBLENBQUMsQ0FBQztJQUVQLENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQge2Fzc2VydEpTT059IGZyb20gJy4uLy4uL3Rlc3QvQXNzZXJ0aW9ucyc7XG5pbXBvcnQge0Rlc2NyaXB0b3JzfSBmcm9tICcuL0Rlc2NyaXB0b3JzJztcbmltcG9ydCB7U2Nyb2xsQm94fSBmcm9tICcuLi8uLi9jYXB0dXJlL3JlbmRlcmVyL0NhcHR1cmVkJztcblxuZGVzY3JpYmUoJ0Rlc2NyaXB0b3JzJywgZnVuY3Rpb24oKSB7XG5cbiAgICBkZXNjcmliZSgnY29tcHV0ZVNjcm9sbEJveEZyb21Cb3hlcycsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGl0KFwiYmFzaWNcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBjb25zdCBzY3JvbGxCb3g6IFNjcm9sbEJveCA9IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUwLFxuICAgICAgICAgICAgICAgIGhlaWdodDogMTUwXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbDogU2Nyb2xsQm94ID0ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IERlc2NyaXB0b3JzLmNvbXB1dGVTY3JvbGxCb3hGcm9tQm94ZXMoc2Nyb2xsQm94LCBzY3JvbGwpO1xuXG4gICAgICAgICAgICBhc3NlcnQub2socmVzdWx0LmlzUHJlc2VudCgpKVxuXG4gICAgICAgICAgICBhc3NlcnRKU09OKHJlc3VsdCwge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDE1MCxcbiAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTUwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJub25lXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IERlc2NyaXB0b3JzLmNvbXB1dGVTY3JvbGxCb3hGcm9tQm94ZXMoKTtcbiAgICAgICAgICAgIGFzc2VydC5pc0ZhbHNlKHJlc3VsdC5pc1ByZXNlbnQoKSlcblxuICAgICAgICB9KTtcblxuICAgICAgICBpdChcImZpcnN0XCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsQm94OiBTY3JvbGxCb3ggPSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1MCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gRGVzY3JpcHRvcnMuY29tcHV0ZVNjcm9sbEJveEZyb21Cb3hlcyhzY3JvbGxCb3gpO1xuXG4gICAgICAgICAgICBhc3NlcnQub2socmVzdWx0LmlzUHJlc2VudCgpKVxuXG4gICAgICAgICAgICBhc3NlcnRKU09OKHJlc3VsdCwge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDE1MCxcbiAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTUwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG5cblxuICAgICAgICBpdChcImxhc3RcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBjb25zdCBzY3JvbGw6IFNjcm9sbEJveCA9IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBEZXNjcmlwdG9ycy5jb21wdXRlU2Nyb2xsQm94RnJvbUJveGVzKHVuZGVmaW5lZCwgc2Nyb2xsKTtcblxuICAgICAgICAgICAgYXNzZXJ0Lm9rKHJlc3VsdC5pc1ByZXNlbnQoKSlcblxuICAgICAgICAgICAgYXNzZXJ0SlNPTihyZXN1bHQsIHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDEwMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgaXQoXCJicm9rZW5cIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBjb25zdCBzY3JvbGw6IGFueSA9IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDBcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gRGVzY3JpcHRvcnMuY29tcHV0ZVNjcm9sbEJveEZyb21Cb3hlcyhzY3JvbGwsIHNjcm9sbCk7XG5cbiAgICAgICAgICAgIGFzc2VydC5pc0ZhbHNlKHJlc3VsdC5pc1ByZXNlbnQoKSlcblxuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==