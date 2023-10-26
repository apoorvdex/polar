"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TriggerEvent_1 = require("../../contextmenu/TriggerEvent");
const AnnotationTriggerEvents_1 = require("./AnnotationTriggerEvents");
const Assertions_1 = require("../../test/Assertions");
describe('AnnotationTriggerEvents', function () {
    it("getAnnotationDescriptors", function () {
        let triggerEvent = TriggerEvent_1.TriggerEvent.create(TRIGGER_EVENT);
        let annotationDescriptors = AnnotationTriggerEvents_1.AnnotationTriggerEvents.getAnnotationDescriptors(triggerEvent);
        let expected = [
            {
                "docFingerprint": "128fFMLKPk",
                "id": "110dd61fd57444010b1ab5ff38782f0f",
                "pageNum": 1,
                "type": "TEXT_HIGHLIGHT"
            }
        ];
        Assertions_1.assertJSON(annotationDescriptors, expected);
    });
});
const TRIGGER_EVENT = {
    "type": "create-flashcard",
    "point": {
        "x": 442,
        "y": 733
    },
    "points": {
        "client": {
            "x": 442,
            "y": 733
        },
        "offset": {
            "x": 351,
            "y": 8
        },
        "page": {
            "x": 442,
            "y": 733
        },
        "pageOffset": {
            "x": 441,
            "y": 661
        }
    },
    "pageNum": 1,
    "matchingSelectors": {
        ".area-highlight": {
            "annotationDescriptors": [],
            "elements": [],
            "selector": ".area-highlight"
        },
        ".page": {
            "annotationDescriptors": [],
            "elements": [
                {}
            ],
            "selector": ".page"
        },
        ".pagemark": {
            "annotationDescriptors": [],
            "elements": [],
            "selector": ".pagemark"
        },
        ".text-highlight": {
            "annotationDescriptors": [
                {
                    "docFingerprint": "128fFMLKPk",
                    "id": "110dd61fd57444010b1ab5ff38782f0f",
                    "pageNum": 1,
                    "type": "TEXT_HIGHLIGHT"
                }
            ],
            "elements": [
                {}
            ],
            "selector": ".text-highlight"
        }
    },
    "docDescriptor": {
        "fingerprint": "110dd61fd57444010b1ab5ff38782f0f"
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ub3RhdGlvblRyaWdnZXJFdmVudHNUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQW5ub3RhdGlvblRyaWdnZXJFdmVudHNUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsaUVBQTREO0FBQzVELHVFQUFrRTtBQUNsRSxzREFBaUQ7QUFFakQsUUFBUSxDQUFDLHlCQUF5QixFQUFFO0lBRWhDLEVBQUUsQ0FBQywwQkFBMEIsRUFBRTtRQUUzQixJQUFJLFlBQVksR0FBRywyQkFBWSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN0RCxJQUFJLHFCQUFxQixHQUFHLGlEQUF1QixDQUFDLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRTNGLElBQUksUUFBUSxHQUFHO1lBQ1g7Z0JBQ0ksZ0JBQWdCLEVBQUUsWUFBWTtnQkFDOUIsSUFBSSxFQUFFLGtDQUFrQztnQkFDeEMsU0FBUyxFQUFFLENBQUM7Z0JBQ1osTUFBTSxFQUFFLGdCQUFnQjthQUMzQjtTQUNKLENBQUM7UUFDRix1QkFBVSxDQUFDLHFCQUFxQixFQUFFLFFBQVEsQ0FBQyxDQUFBO0lBRS9DLENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLGFBQWEsR0FBRztJQUNsQixNQUFNLEVBQUUsa0JBQWtCO0lBQzFCLE9BQU8sRUFBRTtRQUNMLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7S0FDWDtJQUNELFFBQVEsRUFBRTtRQUNOLFFBQVEsRUFBRTtZQUNOLEdBQUcsRUFBRSxHQUFHO1lBQ1IsR0FBRyxFQUFFLEdBQUc7U0FDWDtRQUNELFFBQVEsRUFBRTtZQUNOLEdBQUcsRUFBRSxHQUFHO1lBQ1IsR0FBRyxFQUFFLENBQUM7U0FDVDtRQUNELE1BQU0sRUFBRTtZQUNKLEdBQUcsRUFBRSxHQUFHO1lBQ1IsR0FBRyxFQUFFLEdBQUc7U0FDWDtRQUNELFlBQVksRUFBRTtZQUNWLEdBQUcsRUFBRSxHQUFHO1lBQ1IsR0FBRyxFQUFFLEdBQUc7U0FDWDtLQUNKO0lBQ0QsU0FBUyxFQUFFLENBQUM7SUFDWixtQkFBbUIsRUFBRTtRQUNqQixpQkFBaUIsRUFBRTtZQUNmLHVCQUF1QixFQUFFLEVBQUU7WUFDM0IsVUFBVSxFQUFFLEVBQUU7WUFDZCxVQUFVLEVBQUUsaUJBQWlCO1NBQ2hDO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsdUJBQXVCLEVBQUUsRUFBRTtZQUMzQixVQUFVLEVBQUU7Z0JBQ1IsRUFBRTthQUNMO1lBQ0QsVUFBVSxFQUFFLE9BQU87U0FDdEI7UUFDRCxXQUFXLEVBQUU7WUFDVCx1QkFBdUIsRUFBRSxFQUFFO1lBQzNCLFVBQVUsRUFBRSxFQUFFO1lBQ2QsVUFBVSxFQUFFLFdBQVc7U0FDMUI7UUFDRCxpQkFBaUIsRUFBRTtZQUNmLHVCQUF1QixFQUFFO2dCQUNyQjtvQkFDSSxnQkFBZ0IsRUFBRSxZQUFZO29CQUM5QixJQUFJLEVBQUUsa0NBQWtDO29CQUN4QyxTQUFTLEVBQUUsQ0FBQztvQkFDWixNQUFNLEVBQUUsZ0JBQWdCO2lCQUMzQjthQUNKO1lBQ0QsVUFBVSxFQUFFO2dCQUNSLEVBQUU7YUFDTDtZQUNELFVBQVUsRUFBRSxpQkFBaUI7U0FDaEM7S0FDSjtJQUNELGVBQWUsRUFBRTtRQUNiLGFBQWEsRUFBRSxrQ0FBa0M7S0FDcEQ7Q0FDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHtUcmlnZ2VyRXZlbnR9IGZyb20gJy4uLy4uL2NvbnRleHRtZW51L1RyaWdnZXJFdmVudCc7XG5pbXBvcnQge0Fubm90YXRpb25UcmlnZ2VyRXZlbnRzfSBmcm9tICcuL0Fubm90YXRpb25UcmlnZ2VyRXZlbnRzJztcbmltcG9ydCB7YXNzZXJ0SlNPTn0gZnJvbSAnLi4vLi4vdGVzdC9Bc3NlcnRpb25zJztcblxuZGVzY3JpYmUoJ0Fubm90YXRpb25UcmlnZ2VyRXZlbnRzJywgZnVuY3Rpb24oKSB7XG5cbiAgICBpdChcImdldEFubm90YXRpb25EZXNjcmlwdG9yc1wiLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgbGV0IHRyaWdnZXJFdmVudCA9IFRyaWdnZXJFdmVudC5jcmVhdGUoVFJJR0dFUl9FVkVOVCk7XG4gICAgICAgIGxldCBhbm5vdGF0aW9uRGVzY3JpcHRvcnMgPSBBbm5vdGF0aW9uVHJpZ2dlckV2ZW50cy5nZXRBbm5vdGF0aW9uRGVzY3JpcHRvcnModHJpZ2dlckV2ZW50KTtcblxuICAgICAgICBsZXQgZXhwZWN0ZWQgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkb2NGaW5nZXJwcmludFwiOiBcIjEyOGZGTUxLUGtcIixcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiMTEwZGQ2MWZkNTc0NDQwMTBiMWFiNWZmMzg3ODJmMGZcIixcbiAgICAgICAgICAgICAgICBcInBhZ2VOdW1cIjogMSxcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJURVhUX0hJR0hMSUdIVFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgICAgIGFzc2VydEpTT04oYW5ub3RhdGlvbkRlc2NyaXB0b3JzLCBleHBlY3RlZClcblxuICAgIH0pO1xuXG59KTtcblxuY29uc3QgVFJJR0dFUl9FVkVOVCA9IHtcbiAgICBcInR5cGVcIjogXCJjcmVhdGUtZmxhc2hjYXJkXCIsXG4gICAgXCJwb2ludFwiOiB7XG4gICAgICAgIFwieFwiOiA0NDIsXG4gICAgICAgIFwieVwiOiA3MzNcbiAgICB9LFxuICAgIFwicG9pbnRzXCI6IHtcbiAgICAgICAgXCJjbGllbnRcIjoge1xuICAgICAgICAgICAgXCJ4XCI6IDQ0MixcbiAgICAgICAgICAgIFwieVwiOiA3MzNcbiAgICAgICAgfSxcbiAgICAgICAgXCJvZmZzZXRcIjoge1xuICAgICAgICAgICAgXCJ4XCI6IDM1MSxcbiAgICAgICAgICAgIFwieVwiOiA4XG4gICAgICAgIH0sXG4gICAgICAgIFwicGFnZVwiOiB7XG4gICAgICAgICAgICBcInhcIjogNDQyLFxuICAgICAgICAgICAgXCJ5XCI6IDczM1xuICAgICAgICB9LFxuICAgICAgICBcInBhZ2VPZmZzZXRcIjoge1xuICAgICAgICAgICAgXCJ4XCI6IDQ0MSxcbiAgICAgICAgICAgIFwieVwiOiA2NjFcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJwYWdlTnVtXCI6IDEsXG4gICAgXCJtYXRjaGluZ1NlbGVjdG9yc1wiOiB7XG4gICAgICAgIFwiLmFyZWEtaGlnaGxpZ2h0XCI6IHtcbiAgICAgICAgICAgIFwiYW5ub3RhdGlvbkRlc2NyaXB0b3JzXCI6IFtdLFxuICAgICAgICAgICAgXCJlbGVtZW50c1wiOiBbXSxcbiAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCIuYXJlYS1oaWdobGlnaHRcIlxuICAgICAgICB9LFxuICAgICAgICBcIi5wYWdlXCI6IHtcbiAgICAgICAgICAgIFwiYW5ub3RhdGlvbkRlc2NyaXB0b3JzXCI6IFtdLFxuICAgICAgICAgICAgXCJlbGVtZW50c1wiOiBbXG4gICAgICAgICAgICAgICAge31cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwiLnBhZ2VcIlxuICAgICAgICB9LFxuICAgICAgICBcIi5wYWdlbWFya1wiOiB7XG4gICAgICAgICAgICBcImFubm90YXRpb25EZXNjcmlwdG9yc1wiOiBbXSxcbiAgICAgICAgICAgIFwiZWxlbWVudHNcIjogW10sXG4gICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwiLnBhZ2VtYXJrXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCIudGV4dC1oaWdobGlnaHRcIjoge1xuICAgICAgICAgICAgXCJhbm5vdGF0aW9uRGVzY3JpcHRvcnNcIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJkb2NGaW5nZXJwcmludFwiOiBcIjEyOGZGTUxLUGtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIjExMGRkNjFmZDU3NDQ0MDEwYjFhYjVmZjM4NzgyZjBmXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicGFnZU51bVwiOiAxLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJURVhUX0hJR0hMSUdIVFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiZWxlbWVudHNcIjogW1xuICAgICAgICAgICAgICAgIHt9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJzZWxlY3RvclwiOiBcIi50ZXh0LWhpZ2hsaWdodFwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiZG9jRGVzY3JpcHRvclwiOiB7XG4gICAgICAgIFwiZmluZ2VycHJpbnRcIjogXCIxMTBkZDYxZmQ1NzQ0NDAxMGIxYWI1ZmYzODc4MmYwZlwiXG4gICAgfVxufTtcbiJdfQ==