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
const BufferWriter_1 = require("./writers/BufferWriter");
const JSONExporter_1 = require("./JSONExporter");
const Comments_1 = require("../Comments");
const AnnotationType_1 = require("../AnnotationType");
const Assertions_1 = require("../../test/Assertions");
const TestingTime_1 = require("../../test/TestingTime");
describe('JSONExporter', function () {
    beforeEach(function () {
        Comments_1.Comments.SEQUENCE = 0;
    });
    it("basic with one item", function () {
        return __awaiter(this, void 0, void 0, function* () {
            TestingTime_1.TestingTime.freeze();
            const writer = new BufferWriter_1.BufferWriter();
            const converter = new JSONExporter_1.JSONExporter();
            yield converter.init(writer);
            const comment = Comments_1.Comments.createTextComment("hello world", 'page:1');
            yield converter.write({ type: AnnotationType_1.AnnotationType.COMMENT, annotation: comment });
            yield converter.close();
            const expected = {
                "version": 1,
                "items": [
                    {
                        "id": "12tPgPJ9QP",
                        "guid": "12tPgPJ9QP",
                        "created": "2012-03-02T11:38:49.321Z",
                        "lastUpdated": "2012-03-02T11:38:49.321Z",
                        "content": {
                            "TEXT": "hello world"
                        },
                        "ref": "page:1"
                    }
                ]
            };
            Assertions_1.assertJSON(writer.toString(), expected);
        });
    });
    it("with two items", function () {
        return __awaiter(this, void 0, void 0, function* () {
            TestingTime_1.TestingTime.freeze();
            const writer = new BufferWriter_1.BufferWriter();
            const converter = new JSONExporter_1.JSONExporter();
            yield converter.init(writer);
            const comment0 = Comments_1.Comments.createTextComment("hello world", 'page:1');
            yield converter.write({ type: AnnotationType_1.AnnotationType.COMMENT, annotation: comment0 });
            const comment1 = Comments_1.Comments.createTextComment("hello world", 'page:1');
            yield converter.write({ type: AnnotationType_1.AnnotationType.COMMENT, annotation: comment1 });
            yield converter.close();
            const expected = {
                "items": [
                    {
                        "content": {
                            "TEXT": "hello world"
                        },
                        "created": "2012-03-02T11:38:49.321Z",
                        "guid": "12tPgPJ9QP",
                        "id": "12tPgPJ9QP",
                        "lastUpdated": "2012-03-02T11:38:49.321Z",
                        "ref": "page:1"
                    },
                    {
                        "content": {
                            "TEXT": "hello world"
                        },
                        "created": "2012-03-02T11:38:49.321Z",
                        "guid": "12XMbYpxLx",
                        "id": "12XMbYpxLx",
                        "lastUpdated": "2012-03-02T11:38:49.321Z",
                        "ref": "page:1"
                    }
                ],
                "version": 1
            };
            Assertions_1.assertJSON(writer.toString(), expected);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSlNPTkV4cG9ydGVyVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkpTT05FeHBvcnRlclRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHlEQUFvRDtBQUNwRCxpREFBNEM7QUFDNUMsMENBQXFDO0FBQ3JDLHNEQUFpRDtBQUVqRCxzREFBaUQ7QUFDakQsd0RBQW1EO0FBRW5ELFFBQVEsQ0FBQyxjQUFjLEVBQUU7SUFFckIsVUFBVSxDQUFDO1FBQ1AsbUJBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHFCQUFxQixFQUFFOztZQUV0Qix5QkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRXJCLE1BQU0sTUFBTSxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO1lBRWxDLE1BQU0sU0FBUyxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO1lBRXJDLE1BQU0sU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUU3QixNQUFNLE9BQU8sR0FBRyxtQkFBUSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUVwRSxNQUFNLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBQyxJQUFJLEVBQUUsK0JBQWMsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxDQUFFLENBQUM7WUFFNUUsTUFBTSxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFeEIsTUFBTSxRQUFRLEdBQUc7Z0JBQ2IsU0FBUyxFQUFFLENBQUM7Z0JBQ1osT0FBTyxFQUFFO29CQUNMO3dCQUNJLElBQUksRUFBRSxZQUFZO3dCQUNsQixNQUFNLEVBQUUsWUFBWTt3QkFDcEIsU0FBUyxFQUFFLDBCQUEwQjt3QkFDckMsYUFBYSxFQUFFLDBCQUEwQjt3QkFDekMsU0FBUyxFQUFFOzRCQUNQLE1BQU0sRUFBRSxhQUFhO3lCQUN4Qjt3QkFDRCxLQUFLLEVBQUUsUUFBUTtxQkFDbEI7aUJBQ0o7YUFFSixDQUFDO1lBRUYsdUJBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFNUMsQ0FBQztLQUFBLENBQUMsQ0FBQztJQUdILEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRTs7WUFFakIseUJBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUVyQixNQUFNLE1BQU0sR0FBRyxJQUFJLDJCQUFZLEVBQUUsQ0FBQztZQUVsQyxNQUFNLFNBQVMsR0FBRyxJQUFJLDJCQUFZLEVBQUUsQ0FBQztZQUVyQyxNQUFNLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFN0IsTUFBTSxRQUFRLEdBQUcsbUJBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDckUsTUFBTSxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUMsSUFBSSxFQUFFLCtCQUFjLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUMsQ0FBRSxDQUFDO1lBRTdFLE1BQU0sUUFBUSxHQUFHLG1CQUFRLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3JFLE1BQU0sU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFDLElBQUksRUFBRSwrQkFBYyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFDLENBQUUsQ0FBQztZQUU3RSxNQUFNLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUV4QixNQUFNLFFBQVEsR0FBRztnQkFDYixPQUFPLEVBQUU7b0JBQ0w7d0JBQ0ksU0FBUyxFQUFFOzRCQUNQLE1BQU0sRUFBRSxhQUFhO3lCQUN4Qjt3QkFDRCxTQUFTLEVBQUUsMEJBQTBCO3dCQUNyQyxNQUFNLEVBQUUsWUFBWTt3QkFDcEIsSUFBSSxFQUFFLFlBQVk7d0JBQ2xCLGFBQWEsRUFBRSwwQkFBMEI7d0JBQ3pDLEtBQUssRUFBRSxRQUFRO3FCQUNsQjtvQkFDRDt3QkFDSSxTQUFTLEVBQUU7NEJBQ1AsTUFBTSxFQUFFLGFBQWE7eUJBQ3hCO3dCQUNELFNBQVMsRUFBRSwwQkFBMEI7d0JBQ3JDLE1BQU0sRUFBRSxZQUFZO3dCQUNwQixJQUFJLEVBQUUsWUFBWTt3QkFDbEIsYUFBYSxFQUFFLDBCQUEwQjt3QkFDekMsS0FBSyxFQUFFLFFBQVE7cUJBQ2xCO2lCQUNKO2dCQUNELFNBQVMsRUFBRSxDQUFDO2FBQ2YsQ0FBQztZQUVGLHVCQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRTVDLENBQUM7S0FBQSxDQUFDLENBQUM7QUFHUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QnVmZmVyV3JpdGVyfSBmcm9tICcuL3dyaXRlcnMvQnVmZmVyV3JpdGVyJztcbmltcG9ydCB7SlNPTkV4cG9ydGVyfSBmcm9tICcuL0pTT05FeHBvcnRlcic7XG5pbXBvcnQge0NvbW1lbnRzfSBmcm9tICcuLi9Db21tZW50cyc7XG5pbXBvcnQge0Fubm90YXRpb25UeXBlfSBmcm9tICcuLi9Bbm5vdGF0aW9uVHlwZSc7XG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQge2Fzc2VydEpTT059IGZyb20gJy4uLy4uL3Rlc3QvQXNzZXJ0aW9ucyc7XG5pbXBvcnQge1Rlc3RpbmdUaW1lfSBmcm9tICcuLi8uLi90ZXN0L1Rlc3RpbmdUaW1lJztcblxuZGVzY3JpYmUoJ0pTT05FeHBvcnRlcicsIGZ1bmN0aW9uKCkge1xuXG4gICAgYmVmb3JlRWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgQ29tbWVudHMuU0VRVUVOQ0UgPSAwO1xuICAgIH0pO1xuXG4gICAgaXQoXCJiYXNpYyB3aXRoIG9uZSBpdGVtXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIFRlc3RpbmdUaW1lLmZyZWV6ZSgpO1xuXG4gICAgICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCdWZmZXJXcml0ZXIoKTtcblxuICAgICAgICBjb25zdCBjb252ZXJ0ZXIgPSBuZXcgSlNPTkV4cG9ydGVyKCk7XG5cbiAgICAgICAgYXdhaXQgY29udmVydGVyLmluaXQod3JpdGVyKTtcblxuICAgICAgICBjb25zdCBjb21tZW50ID0gQ29tbWVudHMuY3JlYXRlVGV4dENvbW1lbnQoXCJoZWxsbyB3b3JsZFwiLCAncGFnZToxJyk7XG5cbiAgICAgICAgYXdhaXQgY29udmVydGVyLndyaXRlKHt0eXBlOiBBbm5vdGF0aW9uVHlwZS5DT01NRU5ULCBhbm5vdGF0aW9uOiBjb21tZW50fSApO1xuXG4gICAgICAgIGF3YWl0IGNvbnZlcnRlci5jbG9zZSgpO1xuXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xuICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IDEsXG4gICAgICAgICAgICBcIml0ZW1zXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCIxMnRQZ1BKOVFQXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjEydFBnUEo5UVBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjcmVhdGVkXCI6IFwiMjAxMi0wMy0wMlQxMTozODo0OS4zMjFaXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibGFzdFVwZGF0ZWRcIjogXCIyMDEyLTAzLTAyVDExOjM4OjQ5LjMyMVpcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiVEVYVFwiOiBcImhlbGxvIHdvcmxkXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJyZWZcIjogXCJwYWdlOjFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cblxuICAgICAgICB9O1xuXG4gICAgICAgIGFzc2VydEpTT04od3JpdGVyLnRvU3RyaW5nKCksIGV4cGVjdGVkKTtcblxuICAgIH0pO1xuXG5cbiAgICBpdChcIndpdGggdHdvIGl0ZW1zXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIFRlc3RpbmdUaW1lLmZyZWV6ZSgpO1xuXG4gICAgICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCdWZmZXJXcml0ZXIoKTtcblxuICAgICAgICBjb25zdCBjb252ZXJ0ZXIgPSBuZXcgSlNPTkV4cG9ydGVyKCk7XG5cbiAgICAgICAgYXdhaXQgY29udmVydGVyLmluaXQod3JpdGVyKTtcblxuICAgICAgICBjb25zdCBjb21tZW50MCA9IENvbW1lbnRzLmNyZWF0ZVRleHRDb21tZW50KFwiaGVsbG8gd29ybGRcIiwgJ3BhZ2U6MScpO1xuICAgICAgICBhd2FpdCBjb252ZXJ0ZXIud3JpdGUoe3R5cGU6IEFubm90YXRpb25UeXBlLkNPTU1FTlQsIGFubm90YXRpb246IGNvbW1lbnQwfSApO1xuXG4gICAgICAgIGNvbnN0IGNvbW1lbnQxID0gQ29tbWVudHMuY3JlYXRlVGV4dENvbW1lbnQoXCJoZWxsbyB3b3JsZFwiLCAncGFnZToxJyk7XG4gICAgICAgIGF3YWl0IGNvbnZlcnRlci53cml0ZSh7dHlwZTogQW5ub3RhdGlvblR5cGUuQ09NTUVOVCwgYW5ub3RhdGlvbjogY29tbWVudDF9ICk7XG5cbiAgICAgICAgYXdhaXQgY29udmVydGVyLmNsb3NlKCk7XG5cbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XG4gICAgICAgICAgICBcIml0ZW1zXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIlRFWFRcIjogXCJoZWxsbyB3b3JsZFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZFwiOiBcIjIwMTItMDMtMDJUMTE6Mzg6NDkuMzIxWlwiLFxuICAgICAgICAgICAgICAgICAgICBcImd1aWRcIjogXCIxMnRQZ1BKOVFQXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCIxMnRQZ1BKOVFQXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibGFzdFVwZGF0ZWRcIjogXCIyMDEyLTAzLTAyVDExOjM4OjQ5LjMyMVpcIixcbiAgICAgICAgICAgICAgICAgICAgXCJyZWZcIjogXCJwYWdlOjFcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJURVhUXCI6IFwiaGVsbG8gd29ybGRcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcImNyZWF0ZWRcIjogXCIyMDEyLTAzLTAyVDExOjM4OjQ5LjMyMVpcIixcbiAgICAgICAgICAgICAgICAgICAgXCJndWlkXCI6IFwiMTJYTWJZcHhMeFwiLFxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiMTJYTWJZcHhMeFwiLFxuICAgICAgICAgICAgICAgICAgICBcImxhc3RVcGRhdGVkXCI6IFwiMjAxMi0wMy0wMlQxMTozODo0OS4zMjFaXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicmVmXCI6IFwicGFnZToxXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IDFcbiAgICAgICAgfTtcblxuICAgICAgICBhc3NlcnRKU09OKHdyaXRlci50b1N0cmluZygpLCBleHBlY3RlZCk7XG5cbiAgICB9KTtcblxuXG59KTtcblxuIl19