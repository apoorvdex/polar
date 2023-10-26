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
const UUIDs_1 = require("./UUIDs");
const Promises_1 = require("../util/Promises");
describe('UUIDs', function () {
    it('Test UUID', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const u0 = UUIDs_1.UUIDs.create();
            yield Promises_1.Promises.waitFor(200);
            const u1 = UUIDs_1.UUIDs.create();
            chai_1.assert.notEqual(u0, u1);
            chai_1.assert.equal(UUIDs_1.UUIDs.compare(u0, u1), -1);
            chai_1.assert.equal(UUIDs_1.UUIDs.compare(u0, u0), 0);
            chai_1.assert.equal(UUIDs_1.UUIDs.compare(u1, u0), 1);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVVVJRHNUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVVVJRHNUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwrQkFBNEI7QUFJNUIsbUNBQThCO0FBQzlCLCtDQUEwQztBQUUxQyxRQUFRLENBQUMsT0FBTyxFQUFFO0lBRWQsRUFBRSxDQUFDLFdBQVcsRUFBRTs7WUFFWixNQUFNLEVBQUUsR0FBRyxhQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDMUIsTUFBTSxtQkFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM1QixNQUFNLEVBQUUsR0FBRyxhQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7WUFFMUIsYUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFFeEIsYUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLGFBQU0sQ0FBQyxLQUFLLENBQUMsYUFBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkMsYUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUUzQyxDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQge01vY2tEb2NNZXRhc30gZnJvbSAnLi4vbWV0YWRhdGEvRG9jTWV0YXMnO1xuaW1wb3J0IHtUZXN0aW5nVGltZX0gZnJvbSAnLi4vdGVzdC9UZXN0aW5nVGltZSc7XG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkJztcbmltcG9ydCB7VVVJRHN9IGZyb20gJy4vVVVJRHMnO1xuaW1wb3J0IHtQcm9taXNlc30gZnJvbSAnLi4vdXRpbC9Qcm9taXNlcyc7XG5cbmRlc2NyaWJlKCdVVUlEcycsIGZ1bmN0aW9uKCkge1xuXG4gICAgaXQoJ1Rlc3QgVVVJRCcsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGNvbnN0IHUwID0gVVVJRHMuY3JlYXRlKCk7XG4gICAgICAgIGF3YWl0IFByb21pc2VzLndhaXRGb3IoMjAwKTtcbiAgICAgICAgY29uc3QgdTEgPSBVVUlEcy5jcmVhdGUoKTtcblxuICAgICAgICBhc3NlcnQubm90RXF1YWwodTAsIHUxKTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwoVVVJRHMuY29tcGFyZSh1MCwgdTEpLCAtMSk7XG4gICAgICAgIGFzc2VydC5lcXVhbChVVUlEcy5jb21wYXJlKHUwLCB1MCksIDApO1xuICAgICAgICBhc3NlcnQuZXF1YWwoVVVJRHMuY29tcGFyZSh1MSwgdTApLCAxKTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==