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
const DiskDatastore_1 = require("../../../../datastore/DiskDatastore");
const FlashcardDescriptors_1 = require("./FlashcardDescriptors");
const DefaultPersistenceLayer_1 = require("../../../../datastore/DefaultPersistenceLayer");
const chai_1 = require("chai");
describe('FlashcardDescriptors', function () {
    xit("basic", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const diskDatastore = new DiskDatastore_1.DiskDatastore();
            const persistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(diskDatastore);
            yield persistenceLayer.init();
            const docMeta = yield persistenceLayer.getDocMeta("12FWNxnJk2yGPAXKQgH7");
            const docMetaSupplierCollection = [() => __awaiter(this, void 0, void 0, function* () { return docMeta; })];
            const flashcardDescriptors = yield FlashcardDescriptors_1.FlashcardDescriptors.toFlashcardDescriptors(docMetaSupplierCollection);
            chai_1.assert.equal(flashcardDescriptors.length, 2);
            console.log("FIXME: ", JSON.stringify(flashcardDescriptors, null, "  "));
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxhc2hjYXJkRGVzY3JpcHRvcnNUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRmxhc2hjYXJkRGVzY3JpcHRvcnNUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQSx1RUFBa0U7QUFDbEUsaUVBQTREO0FBRzVELDJGQUFzRjtBQUN0RiwrQkFBNEI7QUFFNUIsUUFBUSxDQUFDLHNCQUFzQixFQUFFO0lBRTdCLEdBQUcsQ0FBQyxPQUFPLEVBQUU7O1lBRVQsTUFBTSxhQUFhLEdBQUcsSUFBSSw2QkFBYSxFQUFFLENBQUM7WUFDMUMsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLGlEQUF1QixDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3BFLE1BQU0sZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFOUIsTUFBTSxPQUFPLEdBQUcsTUFBTSxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUUxRSxNQUFNLHlCQUF5QixHQUE4QixDQUFFLEdBQVMsRUFBRSxnREFBQyxPQUFBLE9BQVEsQ0FBQSxHQUFBLENBQUMsQ0FBQztZQUVyRixNQUFNLG9CQUFvQixHQUFHLE1BQU0sMkNBQW9CLENBQUMsc0JBQXNCLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUUxRyxhQUFNLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUU3QyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLG9CQUFvQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRTdFLENBQUM7S0FBQSxDQUFDLENBQUM7QUFHUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TWVkaWFDb250ZW50c30gZnJvbSAnLi9NZWRpYUNvbnRlbnRzJztcbmltcG9ydCB7YXNzZXJ0SlNPTn0gZnJvbSAnLi4vLi4vLi4vLi4vdGVzdC9Bc3NlcnRpb25zJztcbmltcG9ydCB7RGlza0RhdGFzdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vZGF0YXN0b3JlL0Rpc2tEYXRhc3RvcmUnO1xuaW1wb3J0IHtGbGFzaGNhcmREZXNjcmlwdG9yc30gZnJvbSAnLi9GbGFzaGNhcmREZXNjcmlwdG9ycyc7XG5pbXBvcnQge0RvY01ldGFTdXBwbGllckNvbGxlY3Rpb259IGZyb20gJy4uLy4uLy4uLy4uL21ldGFkYXRhL0RvY01ldGFTdXBwbGllckNvbGxlY3Rpb24nO1xuaW1wb3J0IHtEb2NNZXRhfSBmcm9tICcuLi8uLi8uLi8uLi9tZXRhZGF0YS9Eb2NNZXRhJztcbmltcG9ydCB7RGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXJ9IGZyb20gJy4uLy4uLy4uLy4uL2RhdGFzdG9yZS9EZWZhdWx0UGVyc2lzdGVuY2VMYXllcic7XG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5cbmRlc2NyaWJlKCdGbGFzaGNhcmREZXNjcmlwdG9ycycsIGZ1bmN0aW9uKCkge1xuXG4gICAgeGl0KFwiYmFzaWNcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgY29uc3QgZGlza0RhdGFzdG9yZSA9IG5ldyBEaXNrRGF0YXN0b3JlKCk7XG4gICAgICAgIGNvbnN0IHBlcnNpc3RlbmNlTGF5ZXIgPSBuZXcgRGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXIoZGlza0RhdGFzdG9yZSk7XG4gICAgICAgIGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXIuaW5pdCgpO1xuXG4gICAgICAgIGNvbnN0IGRvY01ldGEgPSBhd2FpdCBwZXJzaXN0ZW5jZUxheWVyLmdldERvY01ldGEoXCIxMkZXTnhuSmsyeUdQQVhLUWdIN1wiKTtcblxuICAgICAgICBjb25zdCBkb2NNZXRhU3VwcGxpZXJDb2xsZWN0aW9uOiBEb2NNZXRhU3VwcGxpZXJDb2xsZWN0aW9uID0gWyBhc3luYyAoKSA9PiBkb2NNZXRhIV07XG5cbiAgICAgICAgY29uc3QgZmxhc2hjYXJkRGVzY3JpcHRvcnMgPSBhd2FpdCBGbGFzaGNhcmREZXNjcmlwdG9ycy50b0ZsYXNoY2FyZERlc2NyaXB0b3JzKGRvY01ldGFTdXBwbGllckNvbGxlY3Rpb24pO1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChmbGFzaGNhcmREZXNjcmlwdG9ycy5sZW5ndGgsIDIpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRklYTUU6IFwiLCBKU09OLnN0cmluZ2lmeShmbGFzaGNhcmREZXNjcmlwdG9ycywgbnVsbCwgXCIgIFwiKSk7XG5cbiAgICB9KTtcblxuXG59KTtcbiJdfQ==