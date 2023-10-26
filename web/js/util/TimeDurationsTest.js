"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const TimeDurations_1 = require("./TimeDurations");
const TestingTime_1 = require("../test/TestingTime");
describe('TimeDurations', function () {
    it("basic", function () {
        chai_1.assert.equal(TimeDurations_1.TimeDurations.toMillis('-1w'), -604800000);
        chai_1.assert.equal(TimeDurations_1.TimeDurations.toMillis('1w'), 604800000);
    });
    it("hasExpired", function () {
        TestingTime_1.TestingTime.freeze();
        const since = new Date();
        chai_1.assert.notOk(TimeDurations_1.TimeDurations.hasElapsed(since, '1d'));
        TestingTime_1.TestingTime.forward('1h');
        chai_1.assert.notOk(TimeDurations_1.TimeDurations.hasElapsed(since, '1d'));
        TestingTime_1.TestingTime.forward('22h');
        chai_1.assert.notOk(TimeDurations_1.TimeDurations.hasElapsed(since, '1d'));
        TestingTime_1.TestingTime.forward('1h');
        chai_1.assert.notOk(TimeDurations_1.TimeDurations.hasElapsed(since, '1d'));
        TestingTime_1.TestingTime.forward('1ms');
        chai_1.assert.ok(TimeDurations_1.TimeDurations.hasElapsed(since, '1d'));
    });
    it('nrWeeks', function () {
        TestingTime_1.TestingTime.freeze();
        const doTest = (sinceDuration, expected) => {
            const since = new Date(Date.now() - TimeDurations_1.TimeDurations.toMillis(sinceDuration));
            chai_1.assert.equal(TimeDurations_1.TimeDurations.inWeeks(since), expected);
        };
        doTest('1w', '1w');
        doTest('1d', '0w');
        doTest('8d', '1w');
        doTest('14d', '2w');
        doTest('15d', '2w');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZUR1cmF0aW9uc1Rlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUaW1lRHVyYXRpb25zVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLCtCQUE0QjtBQUU1QixtREFBMkQ7QUFFM0QscURBQWdEO0FBRWhELFFBQVEsQ0FBQyxlQUFlLEVBQUU7SUFFdEIsRUFBRSxDQUFDLE9BQU8sRUFBRTtRQUVSLGFBQU0sQ0FBQyxLQUFLLENBQUMsNkJBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN4RCxhQUFNLENBQUMsS0FBSyxDQUFDLDZCQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBRTFELENBQUMsQ0FBQyxDQUFDO0lBSUgsRUFBRSxDQUFDLFlBQVksRUFBRTtRQUliLHlCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFckIsTUFBTSxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUV6QixhQUFNLENBQUMsS0FBSyxDQUFDLDZCQUFhLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3BELHlCQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLGFBQU0sQ0FBQyxLQUFLLENBQUMsNkJBQWEsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDcEQseUJBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsYUFBTSxDQUFDLEtBQUssQ0FBQyw2QkFBYSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwRCx5QkFBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixhQUFNLENBQUMsS0FBSyxDQUFDLDZCQUFhLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRXBELHlCQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLGFBQU0sQ0FBQyxFQUFFLENBQUMsNkJBQWEsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFckQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsU0FBUyxFQUFFO1FBRVYseUJBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVyQixNQUFNLE1BQU0sR0FBRyxDQUFDLGFBQXFCLEVBQUUsUUFBZ0IsRUFBRSxFQUFFO1lBRXZELE1BQU0sS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyw2QkFBYSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBRTNFLGFBQU0sQ0FBQyxLQUFLLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFekQsQ0FBQyxDQUFDO1FBRUYsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuQixNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkIsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwQixNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRXhCLENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcbmltcG9ydCB7VGV4dEFycmF5fSBmcm9tICcuL1RleHRBcnJheSc7XG5pbXBvcnQge0R1cmF0aW9uU3RyLCBUaW1lRHVyYXRpb25zfSBmcm9tICcuL1RpbWVEdXJhdGlvbnMnO1xuaW1wb3J0IHtJU09EYXRlVGltZVN0cmluZ3N9IGZyb20gJy4uL21ldGFkYXRhL0lTT0RhdGVUaW1lU3RyaW5ncyc7XG5pbXBvcnQge1Rlc3RpbmdUaW1lfSBmcm9tICcuLi90ZXN0L1Rlc3RpbmdUaW1lJztcblxuZGVzY3JpYmUoJ1RpbWVEdXJhdGlvbnMnLCBmdW5jdGlvbigpIHtcblxuICAgIGl0KFwiYmFzaWNcIiwgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKFRpbWVEdXJhdGlvbnMudG9NaWxsaXMoJy0xdycpLCAtNjA0ODAwMDAwKTtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKFRpbWVEdXJhdGlvbnMudG9NaWxsaXMoJzF3JyksIDYwNDgwMDAwMCk7XG5cbiAgICB9KTtcblxuXG5cbiAgICBpdChcImhhc0V4cGlyZWRcIiwgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coSVNPRGF0ZVRpbWVTdHJpbmdzLmNyZWF0ZSgpKTtcblxuICAgICAgICBUZXN0aW5nVGltZS5mcmVlemUoKTtcblxuICAgICAgICBjb25zdCBzaW5jZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgYXNzZXJ0Lm5vdE9rKFRpbWVEdXJhdGlvbnMuaGFzRWxhcHNlZChzaW5jZSwgJzFkJykpO1xuICAgICAgICBUZXN0aW5nVGltZS5mb3J3YXJkKCcxaCcpO1xuICAgICAgICBhc3NlcnQubm90T2soVGltZUR1cmF0aW9ucy5oYXNFbGFwc2VkKHNpbmNlLCAnMWQnKSk7XG4gICAgICAgIFRlc3RpbmdUaW1lLmZvcndhcmQoJzIyaCcpO1xuICAgICAgICBhc3NlcnQubm90T2soVGltZUR1cmF0aW9ucy5oYXNFbGFwc2VkKHNpbmNlLCAnMWQnKSk7XG4gICAgICAgIFRlc3RpbmdUaW1lLmZvcndhcmQoJzFoJyk7XG4gICAgICAgIGFzc2VydC5ub3RPayhUaW1lRHVyYXRpb25zLmhhc0VsYXBzZWQoc2luY2UsICcxZCcpKTtcblxuICAgICAgICBUZXN0aW5nVGltZS5mb3J3YXJkKCcxbXMnKTtcbiAgICAgICAgYXNzZXJ0Lm9rKFRpbWVEdXJhdGlvbnMuaGFzRWxhcHNlZChzaW5jZSwgJzFkJykpO1xuXG4gICAgfSk7XG5cbiAgICBpdCgnbnJXZWVrcycsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIFRlc3RpbmdUaW1lLmZyZWV6ZSgpO1xuXG4gICAgICAgIGNvbnN0IGRvVGVzdCA9IChzaW5jZUR1cmF0aW9uOiBzdHJpbmcsIGV4cGVjdGVkOiBzdHJpbmcpID0+IHtcblxuICAgICAgICAgICAgY29uc3Qgc2luY2UgPSBuZXcgRGF0ZShEYXRlLm5vdygpIC0gVGltZUR1cmF0aW9ucy50b01pbGxpcyhzaW5jZUR1cmF0aW9uKSk7XG5cbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChUaW1lRHVyYXRpb25zLmluV2Vla3Moc2luY2UpLCBleHBlY3RlZCk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBkb1Rlc3QoJzF3JywgJzF3Jyk7XG4gICAgICAgIGRvVGVzdCgnMWQnLCAnMHcnKTtcbiAgICAgICAgZG9UZXN0KCc4ZCcsICcxdycpO1xuICAgICAgICBkb1Rlc3QoJzE0ZCcsICcydycpO1xuICAgICAgICBkb1Rlc3QoJzE1ZCcsICcydycpO1xuXG4gICAgfSk7XG5cbn0pO1xuIl19