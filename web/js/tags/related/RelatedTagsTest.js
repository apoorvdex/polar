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
const RelatedTags_1 = require("./RelatedTags");
const Assertions_1 = require("../../test/Assertions");
describe('RelatedTags', function () {
    const getTagMetaIndex = (relatedTags) => {
        return relatedTags.tagMetaIndex;
    };
    it("basic", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const relatedTags = new RelatedTags_1.RelatedTags();
            relatedTags.update('0x01', 'set', 'linux');
            relatedTags.update('0x01', 'set', 'microsoft');
            relatedTags.update('0x02', 'set', 'linux');
            relatedTags.update('0x02', 'set', 'google');
            relatedTags.update('0x03', 'set', 'linux');
            relatedTags.update('0x03', 'set', 'microsoft');
            relatedTags.update('0x04', 'set', 'linux');
            relatedTags.update('0x04', 'set', 'microsoft');
            relatedTags.update('0x05', 'set', 'linux');
            relatedTags.update('0x05', 'set', 'google');
            const tagMetaIndex = getTagMetaIndex(relatedTags);
            Assertions_1.assertJSON(tagMetaIndex, {
                "linux": {
                    "tag": "linux",
                    "docs": [
                        "0x01",
                        "0x02",
                        "0x03",
                        "0x04",
                        "0x05"
                    ]
                },
                "microsoft": {
                    "tag": "microsoft",
                    "docs": [
                        "0x01",
                        "0x03",
                        "0x04"
                    ]
                },
                "google": {
                    "tag": "google",
                    "docs": [
                        "0x02",
                        "0x05"
                    ]
                }
            }, undefined, true);
            const tagHits = relatedTags.compute(['linux']);
            Assertions_1.assertJSON(tagHits, [
                {
                    "tag": "microsoft",
                    "hits": 3
                },
                {
                    "tag": "google",
                    "hits": 2
                }
            ], undefined, true);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVsYXRlZFRhZ3NUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUmVsYXRlZFRhZ3NUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwrQ0FBMEM7QUFDMUMsc0RBQWlEO0FBRWpELFFBQVEsQ0FBQyxhQUFhLEVBQUU7SUFFcEIsTUFBTSxlQUFlLEdBQUcsQ0FBQyxXQUF3QixFQUFFLEVBQUU7UUFDakQsT0FBYyxXQUFZLENBQUMsWUFBWSxDQUFDO0lBQzVDLENBQUMsQ0FBQztJQUVGLEVBQUUsQ0FBQyxPQUFPLEVBQUU7O1lBRVIsTUFBTSxXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7WUFFdEMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzNDLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztZQUUvQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDM0MsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBRTVDLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztZQUMzQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFFL0MsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzNDLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztZQUUvQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDM0MsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBRTVDLE1BQU0sWUFBWSxHQUFHLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUVsRCx1QkFBVSxDQUFDLFlBQVksRUFBRTtnQkFDbEIsT0FBTyxFQUFFO29CQUNMLEtBQUssRUFBRSxPQUFPO29CQUNkLE1BQU0sRUFBRTt3QkFDSixNQUFNO3dCQUNOLE1BQU07d0JBQ04sTUFBTTt3QkFDTixNQUFNO3dCQUNOLE1BQU07cUJBQ1Q7aUJBQ0o7Z0JBQ0QsV0FBVyxFQUFFO29CQUNULEtBQUssRUFBRSxXQUFXO29CQUNsQixNQUFNLEVBQUU7d0JBQ0osTUFBTTt3QkFDTixNQUFNO3dCQUNOLE1BQU07cUJBQ1Q7aUJBQ0o7Z0JBQ0QsUUFBUSxFQUFFO29CQUNOLEtBQUssRUFBRSxRQUFRO29CQUNmLE1BQU0sRUFBRTt3QkFDSixNQUFNO3dCQUNOLE1BQU07cUJBQ1Q7aUJBQ0o7YUFDSixFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUV2QixNQUFNLE9BQU8sR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUUvQyx1QkFBVSxDQUFDLE9BQU8sRUFBRTtnQkFDYjtvQkFDSSxLQUFLLEVBQUUsV0FBVztvQkFDbEIsTUFBTSxFQUFFLENBQUM7aUJBQ1o7Z0JBQ0Q7b0JBQ0ksS0FBSyxFQUFFLFFBQVE7b0JBQ2YsTUFBTSxFQUFFLENBQUM7aUJBQ1o7YUFDSixFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUUzQixDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JlbGF0ZWRUYWdzfSBmcm9tICcuL1JlbGF0ZWRUYWdzJztcbmltcG9ydCB7YXNzZXJ0SlNPTn0gZnJvbSAnLi4vLi4vdGVzdC9Bc3NlcnRpb25zJztcblxuZGVzY3JpYmUoJ1JlbGF0ZWRUYWdzJywgZnVuY3Rpb24oKSB7XG5cbiAgICBjb25zdCBnZXRUYWdNZXRhSW5kZXggPSAocmVsYXRlZFRhZ3M6IFJlbGF0ZWRUYWdzKSA9PiB7XG4gICAgICAgIHJldHVybiAoPGFueT4gcmVsYXRlZFRhZ3MpLnRhZ01ldGFJbmRleDtcbiAgICB9O1xuXG4gICAgaXQoXCJiYXNpY1wiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICBjb25zdCByZWxhdGVkVGFncyA9IG5ldyBSZWxhdGVkVGFncygpO1xuXG4gICAgICAgIHJlbGF0ZWRUYWdzLnVwZGF0ZSgnMHgwMScsICdzZXQnLCAnbGludXgnKTtcbiAgICAgICAgcmVsYXRlZFRhZ3MudXBkYXRlKCcweDAxJywgJ3NldCcsICdtaWNyb3NvZnQnKTtcblxuICAgICAgICByZWxhdGVkVGFncy51cGRhdGUoJzB4MDInLCAnc2V0JywgJ2xpbnV4Jyk7XG4gICAgICAgIHJlbGF0ZWRUYWdzLnVwZGF0ZSgnMHgwMicsICdzZXQnLCAnZ29vZ2xlJyk7XG5cbiAgICAgICAgcmVsYXRlZFRhZ3MudXBkYXRlKCcweDAzJywgJ3NldCcsICdsaW51eCcpO1xuICAgICAgICByZWxhdGVkVGFncy51cGRhdGUoJzB4MDMnLCAnc2V0JywgJ21pY3Jvc29mdCcpO1xuXG4gICAgICAgIHJlbGF0ZWRUYWdzLnVwZGF0ZSgnMHgwNCcsICdzZXQnLCAnbGludXgnKTtcbiAgICAgICAgcmVsYXRlZFRhZ3MudXBkYXRlKCcweDA0JywgJ3NldCcsICdtaWNyb3NvZnQnKTtcblxuICAgICAgICByZWxhdGVkVGFncy51cGRhdGUoJzB4MDUnLCAnc2V0JywgJ2xpbnV4Jyk7XG4gICAgICAgIHJlbGF0ZWRUYWdzLnVwZGF0ZSgnMHgwNScsICdzZXQnLCAnZ29vZ2xlJyk7XG5cbiAgICAgICAgY29uc3QgdGFnTWV0YUluZGV4ID0gZ2V0VGFnTWV0YUluZGV4KHJlbGF0ZWRUYWdzKTtcblxuICAgICAgICBhc3NlcnRKU09OKHRhZ01ldGFJbmRleCwge1xuICAgICAgICAgICAgICAgXCJsaW51eFwiOiB7XG4gICAgICAgICAgICAgICAgICAgXCJ0YWdcIjogXCJsaW51eFwiLFxuICAgICAgICAgICAgICAgICAgIFwiZG9jc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgIFwiMHgwMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICBcIjB4MDJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgXCIweDAzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgIFwiMHgwNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICBcIjB4MDVcIlxuICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICBcIm1pY3Jvc29mdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgXCJ0YWdcIjogXCJtaWNyb3NvZnRcIixcbiAgICAgICAgICAgICAgICAgICBcImRvY3NcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICBcIjB4MDFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgXCIweDAzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgIFwiMHgwNFwiXG4gICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgIFwiZ29vZ2xlXCI6IHtcbiAgICAgICAgICAgICAgICAgICBcInRhZ1wiOiBcImdvb2dsZVwiLFxuICAgICAgICAgICAgICAgICAgIFwiZG9jc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgIFwiMHgwMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICBcIjB4MDVcIlxuICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgfSwgdW5kZWZpbmVkLCB0cnVlKTtcblxuICAgICAgICBjb25zdCB0YWdIaXRzID0gcmVsYXRlZFRhZ3MuY29tcHV0ZShbJ2xpbnV4J10pO1xuXG4gICAgICAgIGFzc2VydEpTT04odGFnSGl0cywgW1xuICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgIFwidGFnXCI6IFwibWljcm9zb2Z0XCIsXG4gICAgICAgICAgICAgICAgICAgXCJoaXRzXCI6IDNcbiAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgXCJ0YWdcIjogXCJnb29nbGVcIixcbiAgICAgICAgICAgICAgICAgICBcImhpdHNcIjogMlxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICBdLCB1bmRlZmluZWQsIHRydWUpO1xuXG4gICAgfSk7XG5cbn0pO1xuIl19