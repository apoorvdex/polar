"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MemoryLogger_1 = require("./MemoryLogger");
const Assertions_1 = require("../test/Assertions");
const TestingTime_1 = require("../test/TestingTime");
describe('MemoryLogger', function () {
    beforeEach(function () {
        TestingTime_1.TestingTime.freeze();
    });
    it("basic", function () {
        const memoryLogger = new MemoryLogger_1.MemoryLogger();
        memoryLogger.info("hello", "world");
        const expected = [
            {
                "timestamp": "2012-03-02T11:38:49.321Z",
                "idx": 0,
                "level": "info",
                "msg": "hello",
                "args": [
                    "world"
                ]
            }
        ];
        Assertions_1.assertJSON(memoryLogger.toJSON(), expected);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVtb3J5TG9nZ2VyVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1lbW9yeUxvZ2dlclRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBNEM7QUFDNUMsbURBQThDO0FBQzlDLHFEQUFnRDtBQUVoRCxRQUFRLENBQUMsY0FBYyxFQUFFO0lBRXJCLFVBQVUsQ0FBQztRQUNQLHlCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDekIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsT0FBTyxFQUFFO1FBRVIsTUFBTSxZQUFZLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUM7UUFFeEMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFcEMsTUFBTSxRQUFRLEdBQUc7WUFDYjtnQkFDSSxXQUFXLEVBQUUsMEJBQTBCO2dCQUN2QyxLQUFLLEVBQUUsQ0FBQztnQkFDUixPQUFPLEVBQUUsTUFBTTtnQkFDZixLQUFLLEVBQUUsT0FBTztnQkFDZCxNQUFNLEVBQUU7b0JBQ0osT0FBTztpQkFDVjthQUNKO1NBQ0osQ0FBQztRQUVGLHVCQUFVLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBRWhELENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01lbW9yeUxvZ2dlcn0gZnJvbSBcIi4vTWVtb3J5TG9nZ2VyXCI7XG5pbXBvcnQge2Fzc2VydEpTT059IGZyb20gXCIuLi90ZXN0L0Fzc2VydGlvbnNcIjtcbmltcG9ydCB7VGVzdGluZ1RpbWV9IGZyb20gJy4uL3Rlc3QvVGVzdGluZ1RpbWUnO1xuXG5kZXNjcmliZSgnTWVtb3J5TG9nZ2VyJywgZnVuY3Rpb24oKSB7XG5cbiAgICBiZWZvcmVFYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBUZXN0aW5nVGltZS5mcmVlemUoKTtcbiAgICB9KTtcblxuICAgIGl0KFwiYmFzaWNcIiwgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgY29uc3QgbWVtb3J5TG9nZ2VyID0gbmV3IE1lbW9yeUxvZ2dlcigpO1xuXG4gICAgICAgIG1lbW9yeUxvZ2dlci5pbmZvKFwiaGVsbG9cIiwgXCJ3b3JsZFwiKTtcblxuICAgICAgICBjb25zdCBleHBlY3RlZCA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRpbWVzdGFtcFwiOiBcIjIwMTItMDMtMDJUMTE6Mzg6NDkuMzIxWlwiLFxuICAgICAgICAgICAgICAgIFwiaWR4XCI6IDAsXG4gICAgICAgICAgICAgICAgXCJsZXZlbFwiOiBcImluZm9cIixcbiAgICAgICAgICAgICAgICBcIm1zZ1wiOiBcImhlbGxvXCIsXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJ3b3JsZFwiXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuXG4gICAgICAgIGFzc2VydEpTT04obWVtb3J5TG9nZ2VyLnRvSlNPTigpLCBleHBlY3RlZCk7XG5cbiAgICB9KTtcblxufSk7XG4iXX0=