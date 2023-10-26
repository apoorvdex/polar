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
const Dictionaries_1 = require("./Dictionaries");
const Assertions_1 = require("../test/Assertions");
describe('Dictionaries', function () {
    it("basic", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const dict = {
                'z': 1,
                'a': 2
            };
            const expected = {
                "a": 2,
                "z": 1
            };
            Assertions_1.assertJSON(Dictionaries_1.Dictionaries.sorted(dict), expected);
        });
    });
    it("with nulls and undefined", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const dict = {
                'z': null,
                'a': undefined
            };
            const expected = {
                "z": null
            };
            Assertions_1.assertJSON(Dictionaries_1.Dictionaries.sorted(dict), expected);
        });
    });
    it("nested", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const dict = {
                z: 1,
                a: 2,
                nested: {
                    'z': 1,
                    'a': 2
                }
            };
            const expected = {
                "a": 2,
                "nested": {
                    "a": 2,
                    "z": 1
                },
                "z": 1
            };
            Assertions_1.assertJSON(Dictionaries_1.Dictionaries.sorted(dict), expected);
        });
    });
    it("dict with internal array", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const dict = {
                arr: [
                    1, 2, 3
                ]
            };
            const expected = {
                arr: [
                    1,
                    2,
                    3
                ]
            };
            Assertions_1.assertJSON(Dictionaries_1.Dictionaries.sorted(dict), expected);
        });
    });
    it("raw array", function () {
        return __awaiter(this, void 0, void 0, function* () {
            Assertions_1.assertJSON(Dictionaries_1.Dictionaries.sorted([1, 2, 3]), [1, 2, 3]);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGljdGlvbmFyaWVzVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRpY3Rpb25hcmllc1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGlEQUE0QztBQUM1QyxtREFBOEM7QUFJOUMsUUFBUSxDQUFDLGNBQWMsRUFBRTtJQUVyQixFQUFFLENBQUMsT0FBTyxFQUFFOztZQUVSLE1BQU0sSUFBSSxHQUFHO2dCQUNULEdBQUcsRUFBRSxDQUFDO2dCQUNOLEdBQUcsRUFBRSxDQUFDO2FBQ1QsQ0FBQztZQUVGLE1BQU0sUUFBUSxHQUFHO2dCQUNiLEdBQUcsRUFBRSxDQUFDO2dCQUNOLEdBQUcsRUFBRSxDQUFDO2FBQ1QsQ0FBQztZQUVGLHVCQUFVLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFcEQsQ0FBQztLQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywwQkFBMEIsRUFBRTs7WUFFM0IsTUFBTSxJQUFJLEdBQUc7Z0JBQ1QsR0FBRyxFQUFFLElBQUk7Z0JBQ1QsR0FBRyxFQUFFLFNBQVM7YUFDakIsQ0FBQztZQUVGLE1BQU0sUUFBUSxHQUFHO2dCQUNiLEdBQUcsRUFBRSxJQUFJO2FBQ1osQ0FBQztZQUVGLHVCQUFVLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFcEQsQ0FBQztLQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxRQUFRLEVBQUU7O1lBRVQsTUFBTSxJQUFJLEdBQUc7Z0JBQ1QsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osQ0FBQyxFQUFFLENBQUM7Z0JBQ0osTUFBTSxFQUFFO29CQUNKLEdBQUcsRUFBRSxDQUFDO29CQUNOLEdBQUcsRUFBRSxDQUFDO2lCQUNUO2FBQ0osQ0FBQztZQUVGLE1BQU0sUUFBUSxHQUFHO2dCQUNiLEdBQUcsRUFBRSxDQUFDO2dCQUNOLFFBQVEsRUFBRTtvQkFDTixHQUFHLEVBQUUsQ0FBQztvQkFDTixHQUFHLEVBQUUsQ0FBQztpQkFDVDtnQkFDRCxHQUFHLEVBQUUsQ0FBQzthQUNULENBQUM7WUFFRix1QkFBVSxDQUFDLDJCQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRXBELENBQUM7S0FBQSxDQUFDLENBQUM7SUFHSCxFQUFFLENBQUMsMEJBQTBCLEVBQUU7O1lBRTNCLE1BQU0sSUFBSSxHQUFHO2dCQUNULEdBQUcsRUFBRTtvQkFDRCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ1Y7YUFDSixDQUFDO1lBRUYsTUFBTSxRQUFRLEdBQUc7Z0JBQ2IsR0FBRyxFQUFFO29CQUNELENBQUM7b0JBQ0QsQ0FBQztvQkFDRCxDQUFDO2lCQUNKO2FBQ0osQ0FBQztZQUVGLHVCQUFVLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFcEQsQ0FBQztLQUFBLENBQUMsQ0FBQztJQUdILEVBQUUsQ0FBQyxXQUFXLEVBQUU7O1lBRVosdUJBQVUsQ0FBQywyQkFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUxRCxDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBcUJQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaWN0aW9uYXJpZXN9IGZyb20gJy4vRGljdGlvbmFyaWVzJztcbmltcG9ydCB7YXNzZXJ0SlNPTn0gZnJvbSAnLi4vdGVzdC9Bc3NlcnRpb25zJztcblxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XG5cbmRlc2NyaWJlKCdEaWN0aW9uYXJpZXMnLCBmdW5jdGlvbigpIHtcblxuICAgIGl0KFwiYmFzaWNcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IGRpY3QgPSB7XG4gICAgICAgICAgICAneic6IDEsXG4gICAgICAgICAgICAnYSc6IDJcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBleHBlY3RlZCA9IHtcbiAgICAgICAgICAgIFwiYVwiOiAyLFxuICAgICAgICAgICAgXCJ6XCI6IDFcbiAgICAgICAgfTtcblxuICAgICAgICBhc3NlcnRKU09OKERpY3Rpb25hcmllcy5zb3J0ZWQoZGljdCksIGV4cGVjdGVkKTtcblxuICAgIH0pO1xuXG4gICAgaXQoXCJ3aXRoIG51bGxzIGFuZCB1bmRlZmluZWRcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgY29uc3QgZGljdCA9IHtcbiAgICAgICAgICAgICd6JzogbnVsbCxcbiAgICAgICAgICAgICdhJzogdW5kZWZpbmVkXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XG4gICAgICAgICAgICBcInpcIjogbnVsbFxuICAgICAgICB9O1xuXG4gICAgICAgIGFzc2VydEpTT04oRGljdGlvbmFyaWVzLnNvcnRlZChkaWN0KSwgZXhwZWN0ZWQpO1xuXG4gICAgfSk7XG5cbiAgICBpdChcIm5lc3RlZFwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICBjb25zdCBkaWN0ID0ge1xuICAgICAgICAgICAgejogMSxcbiAgICAgICAgICAgIGE6IDIsXG4gICAgICAgICAgICBuZXN0ZWQ6IHtcbiAgICAgICAgICAgICAgICAneic6IDEsXG4gICAgICAgICAgICAgICAgJ2EnOiAyXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XG4gICAgICAgICAgICBcImFcIjogMixcbiAgICAgICAgICAgIFwibmVzdGVkXCI6IHtcbiAgICAgICAgICAgICAgICBcImFcIjogMixcbiAgICAgICAgICAgICAgICBcInpcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwielwiOiAxXG4gICAgICAgIH07XG5cbiAgICAgICAgYXNzZXJ0SlNPTihEaWN0aW9uYXJpZXMuc29ydGVkKGRpY3QpLCBleHBlY3RlZCk7XG5cbiAgICB9KTtcblxuXG4gICAgaXQoXCJkaWN0IHdpdGggaW50ZXJuYWwgYXJyYXlcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgY29uc3QgZGljdCA9IHtcbiAgICAgICAgICAgIGFycjogW1xuICAgICAgICAgICAgICAgIDEsIDIsIDNcbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBleHBlY3RlZCA9IHtcbiAgICAgICAgICAgIGFycjogW1xuICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICAzXG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG5cbiAgICAgICAgYXNzZXJ0SlNPTihEaWN0aW9uYXJpZXMuc29ydGVkKGRpY3QpLCBleHBlY3RlZCk7XG5cbiAgICB9KTtcblxuXG4gICAgaXQoXCJyYXcgYXJyYXlcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgYXNzZXJ0SlNPTihEaWN0aW9uYXJpZXMuc29ydGVkKFsxLCAyLCAzXSksIFsxLCAyLCAzXSk7XG5cbiAgICB9KTtcblxuICAgIC8vIGl0KFwidG9EaWN0XCIsIGZ1bmN0aW9uKCkge1xuICAgIC8vXG4gICAgLy8gICAgIGludGVyZmFjZSBOYW1lIHtcbiAgICAvLyAgICAgICAgIGZpcnN0OiBzdHJpbmc7XG4gICAgLy8gICAgICAgICBsYXN0OiBzdHJpbmc7XG4gICAgLy8gICAgIH1cbiAgICAvL1xuICAgIC8vICAgICBjb25zdCBuYW1lczogTmFtZVtdID0gW1xuICAgIC8vICAgICAgICAgeyBmaXJzdDogJ2FsaWNlJywgbGFzdDogJ3NtaXRoJyB9LFxuICAgIC8vICAgICAgICAgeyBmaXJzdDogJ2JvYicsIGxhc3Q6ICdzbWl0aCcgfSxcbiAgICAvLyAgICAgXTtcbiAgICAvL1xuICAgIC8vICAgICBfLmNoYWluKG5hbWVzKVxuICAgIC8vICAgICAgICAgLnJlZHVjZSgoYWNjdW11bGF0b3I6IGFueSwgdmFsdWU6IGFueSwgaW5pdGlhbDogYW55KSA9PiB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcImhlcmVcIik7XG4gICAgLy8gICAgIH0pLnZhbHVlKCk7XG4gICAgLy9cbiAgICAvLyB9KTtcblxufSk7XG5cbiJdfQ==