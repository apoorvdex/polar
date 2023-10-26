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
const LazyWriteDatastore_1 = require("./LazyWriteDatastore");
const MemoryDatastore_1 = require("./MemoryDatastore");
const DocMetas_1 = require("../metadata/DocMetas");
const TestingTime_1 = require("../test/TestingTime");
const DocMetaRef_1 = require("./DocMetaRef");
describe('LazyWriteDatastore', function () {
    it('Basic', function () {
        return __awaiter(this, void 0, void 0, function* () {
            TestingTime_1.TestingTime.freeze();
            const memoryDatastore = new MemoryDatastore_1.MemoryDatastore();
            const lazyWriteDatastore = new LazyWriteDatastore_1.LazyWriteDatastore(memoryDatastore);
            chai_1.assert.equal(lazyWriteDatastore.nrWrites, 0);
            let docMeta = DocMetas_1.MockDocMetas.createMockDocMeta();
            yield lazyWriteDatastore.writeDocMeta(docMeta);
            chai_1.assert.equal(lazyWriteDatastore.nrWrites, 1);
            yield lazyWriteDatastore.writeDocMeta(docMeta);
            chai_1.assert.equal(lazyWriteDatastore.nrWrites, 1);
            TestingTime_1.TestingTime.forward(1000);
            docMeta = DocMetas_1.MockDocMetas.createMockDocMeta();
            yield lazyWriteDatastore.writeDocMeta(docMeta);
            chai_1.assert.equal(lazyWriteDatastore.nrWrites, 2);
        });
    });
    it('delete', function () {
        return __awaiter(this, void 0, void 0, function* () {
            TestingTime_1.TestingTime.freeze();
            const memoryDatastore = new MemoryDatastore_1.MemoryDatastore();
            const lazyWriteDatastore = new LazyWriteDatastore_1.LazyWriteDatastore(memoryDatastore);
            chai_1.assert.equal(lazyWriteDatastore.nrWrites, 0);
            const docMeta = DocMetas_1.MockDocMetas.createMockDocMeta();
            yield lazyWriteDatastore.writeDocMeta(docMeta);
            chai_1.assert.equal(lazyWriteDatastore.nrWrites, 1);
            yield lazyWriteDatastore.delete(DocMetaRef_1.DocMetaFileRefs.createFromDocMeta(docMeta));
            yield lazyWriteDatastore.writeDocMeta(docMeta);
            chai_1.assert.equal(lazyWriteDatastore.nrWrites, 2);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGF6eVdyaXRlRGF0YXN0b3JlVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkxhenlXcml0ZURhdGFzdG9yZVRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLCtCQUE0QjtBQUM1Qiw2REFBd0Q7QUFDeEQsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCxxREFBZ0Q7QUFDaEQsNkNBQTZDO0FBRTdDLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtJQUUzQixFQUFFLENBQUMsT0FBTyxFQUFFOztZQUVSLHlCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7WUFFckIsTUFBTSxlQUFlLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7WUFDOUMsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLHVDQUFrQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBRW5FLGFBQU0sQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzdDLElBQUksT0FBTyxHQUFHLHVCQUFZLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUUvQyxNQUFNLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMvQyxhQUFNLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUU3QyxNQUFNLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMvQyxhQUFNLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUU3Qyx5QkFBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUUxQixPQUFPLEdBQUcsdUJBQVksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBRTNDLE1BQU0sa0JBQWtCLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQy9DLGFBQU0sQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRWpELENBQUM7S0FBQSxDQUFDLENBQUM7SUFHSCxFQUFFLENBQUMsUUFBUSxFQUFFOztZQUVULHlCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7WUFFckIsTUFBTSxlQUFlLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7WUFDOUMsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLHVDQUFrQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBRW5FLGFBQU0sQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzdDLE1BQU0sT0FBTyxHQUFHLHVCQUFZLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUVqRCxNQUFNLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMvQyxhQUFNLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUU3QyxNQUFNLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyw0QkFBZSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFFNUUsTUFBTSxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDL0MsYUFBTSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFakQsQ0FBQztLQUFBLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHtMYXp5V3JpdGVEYXRhc3RvcmV9IGZyb20gJy4vTGF6eVdyaXRlRGF0YXN0b3JlJztcbmltcG9ydCB7TWVtb3J5RGF0YXN0b3JlfSBmcm9tICcuL01lbW9yeURhdGFzdG9yZSc7XG5pbXBvcnQge01vY2tEb2NNZXRhc30gZnJvbSAnLi4vbWV0YWRhdGEvRG9jTWV0YXMnO1xuaW1wb3J0IHtUZXN0aW5nVGltZX0gZnJvbSAnLi4vdGVzdC9UZXN0aW5nVGltZSc7XG5pbXBvcnQge0RvY01ldGFGaWxlUmVmc30gZnJvbSAnLi9Eb2NNZXRhUmVmJztcblxuZGVzY3JpYmUoJ0xhenlXcml0ZURhdGFzdG9yZScsIGZ1bmN0aW9uKCkge1xuXG4gICAgaXQoJ0Jhc2ljJywgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgVGVzdGluZ1RpbWUuZnJlZXplKCk7XG5cbiAgICAgICAgY29uc3QgbWVtb3J5RGF0YXN0b3JlID0gbmV3IE1lbW9yeURhdGFzdG9yZSgpO1xuICAgICAgICBjb25zdCBsYXp5V3JpdGVEYXRhc3RvcmUgPSBuZXcgTGF6eVdyaXRlRGF0YXN0b3JlKG1lbW9yeURhdGFzdG9yZSk7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKGxhenlXcml0ZURhdGFzdG9yZS5ucldyaXRlcywgMCk7XG4gICAgICAgIGxldCBkb2NNZXRhID0gTW9ja0RvY01ldGFzLmNyZWF0ZU1vY2tEb2NNZXRhKCk7XG5cbiAgICAgICAgYXdhaXQgbGF6eVdyaXRlRGF0YXN0b3JlLndyaXRlRG9jTWV0YShkb2NNZXRhKTtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKGxhenlXcml0ZURhdGFzdG9yZS5ucldyaXRlcywgMSk7XG5cbiAgICAgICAgYXdhaXQgbGF6eVdyaXRlRGF0YXN0b3JlLndyaXRlRG9jTWV0YShkb2NNZXRhKTtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKGxhenlXcml0ZURhdGFzdG9yZS5ucldyaXRlcywgMSk7XG5cbiAgICAgICAgVGVzdGluZ1RpbWUuZm9yd2FyZCgxMDAwKTtcblxuICAgICAgICBkb2NNZXRhID0gTW9ja0RvY01ldGFzLmNyZWF0ZU1vY2tEb2NNZXRhKCk7XG5cbiAgICAgICAgYXdhaXQgbGF6eVdyaXRlRGF0YXN0b3JlLndyaXRlRG9jTWV0YShkb2NNZXRhKTtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKGxhenlXcml0ZURhdGFzdG9yZS5ucldyaXRlcywgMik7XG5cbiAgICB9KTtcblxuXG4gICAgaXQoJ2RlbGV0ZScsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIFRlc3RpbmdUaW1lLmZyZWV6ZSgpO1xuXG4gICAgICAgIGNvbnN0IG1lbW9yeURhdGFzdG9yZSA9IG5ldyBNZW1vcnlEYXRhc3RvcmUoKTtcbiAgICAgICAgY29uc3QgbGF6eVdyaXRlRGF0YXN0b3JlID0gbmV3IExhenlXcml0ZURhdGFzdG9yZShtZW1vcnlEYXRhc3RvcmUpO1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChsYXp5V3JpdGVEYXRhc3RvcmUubnJXcml0ZXMsIDApO1xuICAgICAgICBjb25zdCBkb2NNZXRhID0gTW9ja0RvY01ldGFzLmNyZWF0ZU1vY2tEb2NNZXRhKCk7XG5cbiAgICAgICAgYXdhaXQgbGF6eVdyaXRlRGF0YXN0b3JlLndyaXRlRG9jTWV0YShkb2NNZXRhKTtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKGxhenlXcml0ZURhdGFzdG9yZS5ucldyaXRlcywgMSk7XG5cbiAgICAgICAgYXdhaXQgbGF6eVdyaXRlRGF0YXN0b3JlLmRlbGV0ZShEb2NNZXRhRmlsZVJlZnMuY3JlYXRlRnJvbURvY01ldGEoZG9jTWV0YSkpO1xuXG4gICAgICAgIGF3YWl0IGxhenlXcml0ZURhdGFzdG9yZS53cml0ZURvY01ldGEoZG9jTWV0YSk7XG4gICAgICAgIGFzc2VydC5lcXVhbChsYXp5V3JpdGVEYXRhc3RvcmUubnJXcml0ZXMsIDIpO1xuXG4gICAgfSk7XG5cbn0pO1xuIl19