"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert = __importStar(require("assert"));
const BrowserWindowRegistry_1 = require("./BrowserWindowRegistry");
const Assertions_1 = require("../../test/Assertions");
const Preconditions_1 = require("../../Preconditions");
describe('BrowserWindowRegistry', function () {
    class MockLiveWindowsProvider {
        constructor() {
            this.result = [];
        }
        getLiveWindowIDs() {
            return this.result;
        }
    }
    it("make sure GC works", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const mockLiveWindowsProvider = new MockLiveWindowsProvider();
            mockLiveWindowsProvider.result = [1];
            BrowserWindowRegistry_1.BrowserWindowRegistry.liveWindowsProvider = mockLiveWindowsProvider;
            assert.deepStrictEqual(BrowserWindowRegistry_1.BrowserWindowRegistry.gc(), []);
            BrowserWindowRegistry_1.BrowserWindowRegistry.tag(1, { 'name': 'test' });
            assert.deepStrictEqual(BrowserWindowRegistry_1.BrowserWindowRegistry.gc(), []);
            mockLiveWindowsProvider.result = [];
            assert.deepStrictEqual(BrowserWindowRegistry_1.BrowserWindowRegistry.gc(), [1]);
        });
    });
    it("basic tagging", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const mockLiveWindowsProvider = new MockLiveWindowsProvider();
            mockLiveWindowsProvider.result = [1];
            BrowserWindowRegistry_1.BrowserWindowRegistry.liveWindowsProvider = mockLiveWindowsProvider;
            BrowserWindowRegistry_1.BrowserWindowRegistry.tag(1, { name: 'test' });
            const expected = {
                "tags": {
                    "name": "test"
                }
            };
            assert.ok(Preconditions_1.isPresent(BrowserWindowRegistry_1.BrowserWindowRegistry.get(1)));
            Assertions_1.assertJSON(BrowserWindowRegistry_1.BrowserWindowRegistry.get(1), expected);
            Assertions_1.assertJSON(BrowserWindowRegistry_1.BrowserWindowRegistry.tagged({ name: 'name', value: 'test' }), [1]);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJvd3NlcldpbmRvd1JlZ2lzdHJ5VGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkJyb3dzZXJXaW5kb3dSZWdpc3RyeVRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrQ0FBaUM7QUFDakMsbUVBQXVGO0FBQ3ZGLHNEQUFpRDtBQUNqRCx1REFBOEM7QUFFOUMsUUFBUSxDQUFDLHVCQUF1QixFQUFFO0lBRTlCLE1BQU0sdUJBQXVCO1FBQTdCO1lBRUksV0FBTSxHQUFTLEVBQUUsQ0FBQztRQU10QixDQUFDO1FBSkcsZ0JBQWdCO1lBQ1osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7S0FFSjtJQUVELEVBQUUsQ0FBQyxvQkFBb0IsRUFBRTs7WUFFckIsTUFBTSx1QkFBdUIsR0FBRyxJQUFJLHVCQUF1QixFQUFFLENBQUM7WUFFOUQsdUJBQXVCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFOUIsNkNBQXNCLENBQUMsbUJBQW1CLEdBQUcsdUJBQXVCLENBQUM7WUFFNUUsTUFBTSxDQUFDLGVBQWUsQ0FBQyw2Q0FBcUIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUV2RCw2Q0FBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7WUFFL0MsTUFBTSxDQUFDLGVBQWUsQ0FBQyw2Q0FBcUIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUV2RCx1QkFBdUIsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBRXBDLE1BQU0sQ0FBQyxlQUFlLENBQUMsNkNBQXFCLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTVELENBQUM7S0FBQSxDQUFDLENBQUM7SUFHSCxFQUFFLENBQUMsZUFBZSxFQUFFOztZQUVoQixNQUFNLHVCQUF1QixHQUFHLElBQUksdUJBQXVCLEVBQUUsQ0FBQztZQUU5RCx1QkFBdUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUU5Qiw2Q0FBc0IsQ0FBQyxtQkFBbUIsR0FBRyx1QkFBdUIsQ0FBQztZQUU1RSw2Q0FBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7WUFFN0MsTUFBTSxRQUFRLEdBQUc7Z0JBQ2IsTUFBTSxFQUFFO29CQUNKLE1BQU0sRUFBRSxNQUFNO2lCQUNqQjthQUNKLENBQUM7WUFFRixNQUFNLENBQUMsRUFBRSxDQUFDLHlCQUFTLENBQUMsNkNBQXFCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVuRCx1QkFBVSxDQUFDLDZDQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUVuRCx1QkFBVSxDQUFDLDZDQUFxQixDQUFDLE1BQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWpGLENBQUM7S0FBQSxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0ICogYXMgYXNzZXJ0IGZyb20gJ2Fzc2VydCc7XG5pbXBvcnQge0Jyb3dzZXJXaW5kb3dSZWdpc3RyeSwgSUQsIExpdmVXaW5kb3dzUHJvdmlkZXJ9IGZyb20gJy4vQnJvd3NlcldpbmRvd1JlZ2lzdHJ5JztcbmltcG9ydCB7YXNzZXJ0SlNPTn0gZnJvbSAnLi4vLi4vdGVzdC9Bc3NlcnRpb25zJztcbmltcG9ydCB7aXNQcmVzZW50fSBmcm9tICcuLi8uLi9QcmVjb25kaXRpb25zJztcblxuZGVzY3JpYmUoJ0Jyb3dzZXJXaW5kb3dSZWdpc3RyeScsIGZ1bmN0aW9uKCkge1xuXG4gICAgY2xhc3MgTW9ja0xpdmVXaW5kb3dzUHJvdmlkZXIgaW1wbGVtZW50cyBMaXZlV2luZG93c1Byb3ZpZGVyIHtcblxuICAgICAgICByZXN1bHQ6IElEW10gPSBbXTtcblxuICAgICAgICBnZXRMaXZlV2luZG93SURzKCk6IElEW10ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0O1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBpdChcIm1ha2Ugc3VyZSBHQyB3b3Jrc1wiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICBjb25zdCBtb2NrTGl2ZVdpbmRvd3NQcm92aWRlciA9IG5ldyBNb2NrTGl2ZVdpbmRvd3NQcm92aWRlcigpO1xuXG4gICAgICAgIG1vY2tMaXZlV2luZG93c1Byb3ZpZGVyLnJlc3VsdCA9IFsxXTtcblxuICAgICAgICAoPGFueT4gQnJvd3NlcldpbmRvd1JlZ2lzdHJ5KS5saXZlV2luZG93c1Byb3ZpZGVyID0gbW9ja0xpdmVXaW5kb3dzUHJvdmlkZXI7XG5cbiAgICAgICAgYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChCcm93c2VyV2luZG93UmVnaXN0cnkuZ2MoKSwgW10pO1xuXG4gICAgICAgIEJyb3dzZXJXaW5kb3dSZWdpc3RyeS50YWcoMSwgeyduYW1lJzogJ3Rlc3QnfSk7XG5cbiAgICAgICAgYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChCcm93c2VyV2luZG93UmVnaXN0cnkuZ2MoKSwgW10pO1xuXG4gICAgICAgIG1vY2tMaXZlV2luZG93c1Byb3ZpZGVyLnJlc3VsdCA9IFtdO1xuXG4gICAgICAgIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoQnJvd3NlcldpbmRvd1JlZ2lzdHJ5LmdjKCksIFsxXSk7XG5cbiAgICB9KTtcblxuXG4gICAgaXQoXCJiYXNpYyB0YWdnaW5nXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGNvbnN0IG1vY2tMaXZlV2luZG93c1Byb3ZpZGVyID0gbmV3IE1vY2tMaXZlV2luZG93c1Byb3ZpZGVyKCk7XG5cbiAgICAgICAgbW9ja0xpdmVXaW5kb3dzUHJvdmlkZXIucmVzdWx0ID0gWzFdO1xuXG4gICAgICAgICg8YW55PiBCcm93c2VyV2luZG93UmVnaXN0cnkpLmxpdmVXaW5kb3dzUHJvdmlkZXIgPSBtb2NrTGl2ZVdpbmRvd3NQcm92aWRlcjtcblxuICAgICAgICBCcm93c2VyV2luZG93UmVnaXN0cnkudGFnKDEsIHtuYW1lOiAndGVzdCd9KTtcblxuICAgICAgICBjb25zdCBleHBlY3RlZCA9IHtcbiAgICAgICAgICAgIFwidGFnc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidGVzdFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgYXNzZXJ0Lm9rKGlzUHJlc2VudChCcm93c2VyV2luZG93UmVnaXN0cnkuZ2V0KDEpKSk7XG5cbiAgICAgICAgYXNzZXJ0SlNPTihCcm93c2VyV2luZG93UmVnaXN0cnkuZ2V0KDEpLCBleHBlY3RlZCk7XG5cbiAgICAgICAgYXNzZXJ0SlNPTihCcm93c2VyV2luZG93UmVnaXN0cnkudGFnZ2VkKHtuYW1lOiAnbmFtZScsIHZhbHVlOiAndGVzdCd9KSwgWzFdKTtcblxuICAgIH0pO1xuXG59KTtcblxuIl19