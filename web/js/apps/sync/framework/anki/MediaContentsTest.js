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
const MediaContents_1 = require("./MediaContents");
const Assertions_1 = require("../../../../test/Assertions");
describe('MediaContents', function () {
    describe('parse', function () {
        it("basic", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const content = "What is the capital of California? <img src=\"data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7\">";
                const expected = {
                    "content": "What is the capital of California? <img src=\"1hqKtrsGiLerE69bmb5i.gif\">",
                    "mediaFiles": [
                        {
                            "filename": "1hqKtrsGiLerE69bmb5i.gif",
                            "data": "R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7"
                        }
                    ]
                };
                Assertions_1.assertJSON(MediaContents_1.MediaContents.parse(content), expected);
            });
        });
    });
    describe('toMediaFile', function () {
        it("basic", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const dataURL = "data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7";
                const expected = {
                    "filename": "1hqKtrsGiLerE69bmb5i.gif",
                    "data": "R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7"
                };
                Assertions_1.assertJSON(MediaContents_1.MediaContents.toMediaFile(dataURL).get(), expected);
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVkaWFDb250ZW50c1Rlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNZWRpYUNvbnRlbnRzVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBQzlDLDREQUF1RDtBQUV2RCxRQUFRLENBQUMsZUFBZSxFQUFFO0lBRXRCLFFBQVEsQ0FBQyxPQUFPLEVBQUU7UUFFZCxFQUFFLENBQUMsT0FBTyxFQUFFOztnQkFFUixNQUFNLE9BQU8sR0FBRyx5V0FBeVcsQ0FBRTtnQkFFM1gsTUFBTSxRQUFRLEdBQUc7b0JBQ2IsU0FBUyxFQUFFLDJFQUEyRTtvQkFDdEYsWUFBWSxFQUFFO3dCQUNWOzRCQUNJLFVBQVUsRUFBRSwwQkFBMEI7NEJBQ3RDLE1BQU0sRUFBRSxrU0FBa1M7eUJBQzdTO3FCQUNKO2lCQUNKLENBQUM7Z0JBRUYsdUJBQVUsQ0FBQyw2QkFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUV2RCxDQUFDO1NBQUEsQ0FBQyxDQUFDO0lBRVAsQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsYUFBYSxFQUFFO1FBRXBCLEVBQUUsQ0FBQyxPQUFPLEVBQUU7O2dCQUVSLE1BQU0sT0FBTyxHQUFHLHdUQUF3VCxDQUFDO2dCQUV6VSxNQUFNLFFBQVEsR0FBUTtvQkFDZCxVQUFVLEVBQUUsMEJBQTBCO29CQUN0QyxNQUFNLEVBQUUsa1NBQWtTO2lCQUM3UyxDQUNKO2dCQUVELHVCQUFVLENBQUMsNkJBQWEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFFbkUsQ0FBQztTQUFBLENBQUMsQ0FBQztJQUVQLENBQUMsQ0FBQyxDQUFDO0FBR1AsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01lZGlhQ29udGVudHN9IGZyb20gJy4vTWVkaWFDb250ZW50cyc7XG5pbXBvcnQge2Fzc2VydEpTT059IGZyb20gJy4uLy4uLy4uLy4uL3Rlc3QvQXNzZXJ0aW9ucyc7XG5cbmRlc2NyaWJlKCdNZWRpYUNvbnRlbnRzJywgZnVuY3Rpb24oKSB7XG5cbiAgICBkZXNjcmliZSgncGFyc2UnLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBpdChcImJhc2ljXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gXCJXaGF0IGlzIHRoZSBjYXBpdGFsIG9mIENhbGlmb3JuaWE/IDxpbWcgc3JjPVxcXCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhFQUFRQU1RQUFPUkhIT1ZTS3VkZk91bHJTT3AzV095RFp1NlFkdkNjaFBHb2xmTzBvL1hCcy9mTndmalowZnJsMy96eTcvLy8vd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUNINUJBa0FBQkFBTEFBQUFBQVFBQkFBQUFWVklDU09aR2xDUUFvc0o2bXU3Zml5WmVLcU5LVG9RR0RzTThoQkFEZ1VYb0dBaXFoU3ZwNVFBblFLR0lnVWh3RlVZTENWREZDcktVRTFsQmF2QVZpRklEbFRJbWJLQzVHbTJoQjBTbEJDQk1RaUIwVWpJUUE3XFxcIj5cIiA7XG5cbiAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xuICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiBcIldoYXQgaXMgdGhlIGNhcGl0YWwgb2YgQ2FsaWZvcm5pYT8gPGltZyBzcmM9XFxcIjFocUt0cnNHaUxlckU2OWJtYjVpLmdpZlxcXCI+XCIsXG4gICAgICAgICAgICAgICAgXCJtZWRpYUZpbGVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJmaWxlbmFtZVwiOiBcIjFocUt0cnNHaUxlckU2OWJtYjVpLmdpZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IFwiUjBsR09EbGhFQUFRQU1RQUFPUkhIT1ZTS3VkZk91bHJTT3AzV095RFp1NlFkdkNjaFBHb2xmTzBvL1hCcy9mTndmalowZnJsMy96eTcvLy8vd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUNINUJBa0FBQkFBTEFBQUFBQVFBQkFBQUFWVklDU09aR2xDUUFvc0o2bXU3Zml5WmVLcU5LVG9RR0RzTThoQkFEZ1VYb0dBaXFoU3ZwNVFBblFLR0lnVWh3RlVZTENWREZDcktVRTFsQmF2QVZpRklEbFRJbWJLQzVHbTJoQjBTbEJDQk1RaUIwVWpJUUE3XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGFzc2VydEpTT04oTWVkaWFDb250ZW50cy5wYXJzZShjb250ZW50KSwgZXhwZWN0ZWQpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgndG9NZWRpYUZpbGUnLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBpdChcImJhc2ljXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBjb25zdCBkYXRhVVJMID0gXCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhFQUFRQU1RQUFPUkhIT1ZTS3VkZk91bHJTT3AzV095RFp1NlFkdkNjaFBHb2xmTzBvL1hCcy9mTndmalowZnJsMy96eTcvLy8vd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUNINUJBa0FBQkFBTEFBQUFBQVFBQkFBQUFWVklDU09aR2xDUUFvc0o2bXU3Zml5WmVLcU5LVG9RR0RzTThoQkFEZ1VYb0dBaXFoU3ZwNVFBblFLR0lnVWh3RlVZTENWREZDcktVRTFsQmF2QVZpRklEbFRJbWJLQzVHbTJoQjBTbEJDQk1RaUIwVWpJUUE3XCI7XG5cbiAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkOiBhbnkgPSB7XG4gICAgICAgICAgICAgICAgICAgIFwiZmlsZW5hbWVcIjogXCIxaHFLdHJzR2lMZXJFNjlibWI1aS5naWZcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IFwiUjBsR09EbGhFQUFRQU1RQUFPUkhIT1ZTS3VkZk91bHJTT3AzV095RFp1NlFkdkNjaFBHb2xmTzBvL1hCcy9mTndmalowZnJsMy96eTcvLy8vd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUNINUJBa0FBQkFBTEFBQUFBQVFBQkFBQUFWVklDU09aR2xDUUFvc0o2bXU3Zml5WmVLcU5LVG9RR0RzTThoQkFEZ1VYb0dBaXFoU3ZwNVFBblFLR0lnVWh3RlVZTENWREZDcktVRTFsQmF2QVZpRklEbFRJbWJLQzVHbTJoQjBTbEJDQk1RaUIwVWpJUUE3XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA7XG5cbiAgICAgICAgICAgIGFzc2VydEpTT04oTWVkaWFDb250ZW50cy50b01lZGlhRmlsZShkYXRhVVJMKS5nZXQoKSwgZXhwZWN0ZWQpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cblxufSk7XG4iXX0=