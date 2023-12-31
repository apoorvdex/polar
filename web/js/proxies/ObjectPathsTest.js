"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const ObjectPaths_1 = require("./ObjectPaths");
const Assertions_1 = require("../test/Assertions");
describe('ObjectPaths', function () {
    describe('basic tests', function () {
        it("basic paths", function () {
            const obj = {};
            const objectPaths = ObjectPaths_1.ObjectPaths.recurse(obj);
            const expected = [
                {
                    "parent": null,
                    "parentKey": null,
                    "path": "/",
                    "value": {},
                },
            ];
            Assertions_1.assertJSON(objectPaths, expected);
        });
        it("basic paths with one non-object field", function () {
            const obj = {
                "cat": "dog",
            };
            const objectPaths = ObjectPaths_1.ObjectPaths.recurse(obj);
            const expected = [
                {
                    "parent": null,
                    "parentKey": null,
                    "path": "/",
                    "value": {
                        "cat": "dog",
                    },
                },
            ];
            Assertions_1.assertJSON(objectPaths, expected);
        });
        it("basic paths with one object", function () {
            const obj = {
                "cat": {
                    "name": "leo",
                },
            };
            const objectPaths = ObjectPaths_1.ObjectPaths.recurse(obj);
            chai_1.assert.equal(objectPaths.length, 2);
            chai_1.assert.equal(objectPaths[0].path, "/");
            chai_1.assert.equal(objectPaths[1].path, "/cat");
        });
        it("basic paths with complex paths", function () {
            const obj = {
                "cat": {
                    "name": "leo",
                },
                "dog": {
                    "name": "christopher",
                    "friend": {
                        "name": "kevin",
                    },
                }
            };
            const objectPaths = ObjectPaths_1.ObjectPaths.recurse(obj);
            chai_1.assert.equal(objectPaths.length, 4);
            chai_1.assert.equal(objectPaths[0].path, "/");
            chai_1.assert.equal(objectPaths[1].path, "/cat");
            chai_1.assert.equal(objectPaths[2].path, "/dog");
            chai_1.assert.equal(objectPaths[3].path, "/dog/friend");
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JqZWN0UGF0aHNUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiT2JqZWN0UGF0aHNUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQTRCO0FBRTVCLCtDQUEwQztBQUMxQyxtREFBOEM7QUFFOUMsUUFBUSxDQUFDLGFBQWEsRUFBRTtJQUVwQixRQUFRLENBQUMsYUFBYSxFQUFFO1FBRXBCLEVBQUUsQ0FBQyxhQUFhLEVBQUU7WUFFZCxNQUFNLEdBQUcsR0FBUSxFQUFFLENBQUM7WUFFcEIsTUFBTSxXQUFXLEdBQUcseUJBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFN0MsTUFBTSxRQUFRLEdBQVE7Z0JBQ2xCO29CQUNJLFFBQVEsRUFBRSxJQUFJO29CQUNkLFdBQVcsRUFBRSxJQUFJO29CQUNqQixNQUFNLEVBQUUsR0FBRztvQkFDWCxPQUFPLEVBQUUsRUFBRTtpQkFDZDthQUNKLENBQUM7WUFFRix1QkFBVSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUV0QyxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyx1Q0FBdUMsRUFBRTtZQUV4QyxNQUFNLEdBQUcsR0FBRztnQkFDUixLQUFLLEVBQUUsS0FBSzthQUNmLENBQUM7WUFFRixNQUFNLFdBQVcsR0FBRyx5QkFBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUU3QyxNQUFNLFFBQVEsR0FBRztnQkFDYjtvQkFDSSxRQUFRLEVBQUUsSUFBSTtvQkFDZCxXQUFXLEVBQUUsSUFBSTtvQkFDakIsTUFBTSxFQUFFLEdBQUc7b0JBQ1gsT0FBTyxFQUFFO3dCQUNMLEtBQUssRUFBRSxLQUFLO3FCQUNmO2lCQUNKO2FBQ0osQ0FBQztZQUVGLHVCQUFVLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRXRDLENBQUMsQ0FBQyxDQUFDO1FBR0gsRUFBRSxDQUFDLDZCQUE2QixFQUFFO1lBRTlCLE1BQU0sR0FBRyxHQUFRO2dCQUNiLEtBQUssRUFBRTtvQkFDSCxNQUFNLEVBQUUsS0FBSztpQkFDaEI7YUFDSixDQUFDO1lBRUYsTUFBTSxXQUFXLEdBQUcseUJBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFN0MsYUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRXBDLGFBQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN2QyxhQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFOUMsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsZ0NBQWdDLEVBQUU7WUFFakMsTUFBTSxHQUFHLEdBQVE7Z0JBQ2IsS0FBSyxFQUFFO29CQUNILE1BQU0sRUFBRSxLQUFLO2lCQUNoQjtnQkFDRCxLQUFLLEVBQUU7b0JBQ0gsTUFBTSxFQUFFLGFBQWE7b0JBQ3JCLFFBQVEsRUFBRTt3QkFDTixNQUFNLEVBQUUsT0FBTztxQkFDbEI7aUJBQ0o7YUFDSixDQUFDO1lBRUYsTUFBTSxXQUFXLEdBQUcseUJBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFN0MsYUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRXBDLGFBQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN2QyxhQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDMUMsYUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzFDLGFBQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztRQUVyRCxDQUFDLENBQUMsQ0FBQztJQUdQLENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5cbmltcG9ydCB7T2JqZWN0UGF0aHN9IGZyb20gJy4vT2JqZWN0UGF0aHMnO1xuaW1wb3J0IHthc3NlcnRKU09OfSBmcm9tICcuLi90ZXN0L0Fzc2VydGlvbnMnO1xuXG5kZXNjcmliZSgnT2JqZWN0UGF0aHMnLCBmdW5jdGlvbigpIHtcblxuICAgIGRlc2NyaWJlKCdiYXNpYyB0ZXN0cycsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGl0KFwiYmFzaWMgcGF0aHNcIiwgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IG9iajogYW55ID0ge307XG5cbiAgICAgICAgICAgIGNvbnN0IG9iamVjdFBhdGhzID0gT2JqZWN0UGF0aHMucmVjdXJzZShvYmopO1xuXG4gICAgICAgICAgICBjb25zdCBleHBlY3RlZDogYW55ID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJwYXJlbnRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJwYXJlbnRLZXlcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJwYXRoXCI6IFwiL1wiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHt9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICBhc3NlcnRKU09OKG9iamVjdFBhdGhzLCBleHBlY3RlZCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJiYXNpYyBwYXRocyB3aXRoIG9uZSBub24tb2JqZWN0IGZpZWxkXCIsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgICAgICAgXCJjYXRcIjogXCJkb2dcIixcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IG9iamVjdFBhdGhzID0gT2JqZWN0UGF0aHMucmVjdXJzZShvYmopO1xuXG4gICAgICAgICAgICBjb25zdCBleHBlY3RlZCA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwicGFyZW50XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwicGFyZW50S2V5XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwicGF0aFwiOiBcIi9cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNhdFwiOiBcImRvZ1wiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICBhc3NlcnRKU09OKG9iamVjdFBhdGhzLCBleHBlY3RlZCk7XG5cbiAgICAgICAgfSk7XG5cblxuICAgICAgICBpdChcImJhc2ljIHBhdGhzIHdpdGggb25lIG9iamVjdFwiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgY29uc3Qgb2JqOiBhbnkgPSB7XG4gICAgICAgICAgICAgICAgXCJjYXRcIjoge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJsZW9cIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3Qgb2JqZWN0UGF0aHMgPSBPYmplY3RQYXRocy5yZWN1cnNlKG9iaik7XG5cbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChvYmplY3RQYXRocy5sZW5ndGgsIDIpO1xuXG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwob2JqZWN0UGF0aHNbMF0ucGF0aCwgXCIvXCIpO1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKG9iamVjdFBhdGhzWzFdLnBhdGgsIFwiL2NhdFwiKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBpdChcImJhc2ljIHBhdGhzIHdpdGggY29tcGxleCBwYXRoc1wiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgY29uc3Qgb2JqOiBhbnkgPSB7XG4gICAgICAgICAgICAgICAgXCJjYXRcIjoge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJsZW9cIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZG9nXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY2hyaXN0b3BoZXJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJmcmllbmRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwia2V2aW5cIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBvYmplY3RQYXRocyA9IE9iamVjdFBhdGhzLnJlY3Vyc2Uob2JqKTtcblxuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKG9iamVjdFBhdGhzLmxlbmd0aCwgNCk7XG5cbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChvYmplY3RQYXRoc1swXS5wYXRoLCBcIi9cIik7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwob2JqZWN0UGF0aHNbMV0ucGF0aCwgXCIvY2F0XCIpO1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKG9iamVjdFBhdGhzWzJdLnBhdGgsIFwiL2RvZ1wiKTtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChvYmplY3RQYXRoc1szXS5wYXRoLCBcIi9kb2cvZnJpZW5kXCIpO1xuXG4gICAgICAgIH0pO1xuXG5cbiAgICB9KTtcblxufSk7XG4iXX0=