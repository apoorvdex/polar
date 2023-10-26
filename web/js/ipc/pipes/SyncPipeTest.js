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
const Promises_1 = require("../../util/Promises");
const MockPipes_1 = require("./MockPipes");
const SyncPipe_1 = require("./SyncPipe");
describe('SyncPipe', function () {
    it("create sync pipes L->R", function () {
        return __awaiter(this, void 0, void 0, function* () {
            let mockChannels = MockPipes_1.MockPipes.create();
            let left = new SyncPipe_1.SyncPipe(mockChannels.left, 'left', 'test');
            let right = new SyncPipe_1.SyncPipe(mockChannels.right, 'right', 'test');
            let leftPromise = Promises_1.Promises.withTimeout(1, () => __awaiter(this, void 0, void 0, function* () { return yield left.sync(); }));
            let rightPromise = Promises_1.Promises.withTimeout(1, () => __awaiter(this, void 0, void 0, function* () { return yield right.sync(); }));
            yield Promise.all([leftPromise, rightPromise]);
        });
    });
    it("create sync pipes R->L", function () {
        return __awaiter(this, void 0, void 0, function* () {
            let mockChannels = MockPipes_1.MockPipes.create();
            let left = new SyncPipe_1.SyncPipe(mockChannels.left, 'left', 'test');
            let right = new SyncPipe_1.SyncPipe(mockChannels.right, 'right', 'test');
            let leftPromise = Promises_1.Promises.withTimeout(1, () => __awaiter(this, void 0, void 0, function* () { return yield left.sync(); }));
            let rightPromise = Promises_1.Promises.withTimeout(1, () => __awaiter(this, void 0, void 0, function* () { return yield right.sync(); }));
            yield Promise.all([rightPromise, leftPromise]);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3luY1BpcGVUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU3luY1BpcGVUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxrREFBNkM7QUFDN0MsMkNBQXNDO0FBQ3RDLHlDQUFvQztBQUVwQyxRQUFRLENBQUMsVUFBVSxFQUFFO0lBRWpCLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRTs7WUFFekIsSUFBSSxZQUFZLEdBQTJCLHFCQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7WUFFOUQsSUFBSSxJQUFJLEdBQUcsSUFBSSxtQkFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzNELElBQUksS0FBSyxHQUFHLElBQUksbUJBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztZQUU5RCxJQUFJLFdBQVcsR0FBRyxtQkFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsR0FBUyxFQUFFLGdEQUFDLE9BQUEsTUFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUEsR0FBQSxDQUFDLENBQUE7WUFDeEUsSUFBSSxZQUFZLEdBQUcsbUJBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLEdBQVMsRUFBRSxnREFBQyxPQUFBLE1BQU0sS0FBSyxDQUFDLElBQUksRUFBRSxDQUFBLEdBQUEsQ0FBQyxDQUFBO1lBRTFFLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBRW5ELENBQUM7S0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsd0JBQXdCLEVBQUU7O1lBRXpCLElBQUksWUFBWSxHQUEyQixxQkFBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRTlELElBQUksSUFBSSxHQUFHLElBQUksbUJBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztZQUMzRCxJQUFJLEtBQUssR0FBRyxJQUFJLG1CQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFFOUQsSUFBSSxXQUFXLEdBQUcsbUJBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLEdBQVMsRUFBRSxnREFBQyxPQUFBLE1BQU0sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBLEdBQUEsQ0FBQyxDQUFBO1lBQ3hFLElBQUksWUFBWSxHQUFHLG1CQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxHQUFTLEVBQUUsZ0RBQUMsT0FBQSxNQUFNLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQSxHQUFBLENBQUMsQ0FBQTtZQUUxRSxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUVuRCxDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBR1AsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1Byb21pc2VzfSBmcm9tICcuLi8uLi91dGlsL1Byb21pc2VzJztcbmltcG9ydCB7TW9ja1BpcGVzfSBmcm9tICcuL01vY2tQaXBlcyc7XG5pbXBvcnQge1N5bmNQaXBlfSBmcm9tICcuL1N5bmNQaXBlJztcblxuZGVzY3JpYmUoJ1N5bmNQaXBlJywgZnVuY3Rpb24oKSB7XG5cbiAgICBpdChcImNyZWF0ZSBzeW5jIHBpcGVzIEwtPlJcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGxldCBtb2NrQ2hhbm5lbHM6IE1vY2tQaXBlczxhbnksIHN0cmluZz4gPSBNb2NrUGlwZXMuY3JlYXRlKCk7XG5cbiAgICAgICAgbGV0IGxlZnQgPSBuZXcgU3luY1BpcGUobW9ja0NoYW5uZWxzLmxlZnQsICdsZWZ0JywgJ3Rlc3QnKTtcbiAgICAgICAgbGV0IHJpZ2h0ID0gbmV3IFN5bmNQaXBlKG1vY2tDaGFubmVscy5yaWdodCwgJ3JpZ2h0JywgJ3Rlc3QnKTtcblxuICAgICAgICBsZXQgbGVmdFByb21pc2UgPSBQcm9taXNlcy53aXRoVGltZW91dCgxLCBhc3luYyAoKSA9PiBhd2FpdCBsZWZ0LnN5bmMoKSlcbiAgICAgICAgbGV0IHJpZ2h0UHJvbWlzZSA9IFByb21pc2VzLndpdGhUaW1lb3V0KDEsIGFzeW5jICgpID0+IGF3YWl0IHJpZ2h0LnN5bmMoKSlcblxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbbGVmdFByb21pc2UsIHJpZ2h0UHJvbWlzZV0pO1xuXG4gICAgfSk7XG5cbiAgICBpdChcImNyZWF0ZSBzeW5jIHBpcGVzIFItPkxcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGxldCBtb2NrQ2hhbm5lbHM6IE1vY2tQaXBlczxhbnksIHN0cmluZz4gPSBNb2NrUGlwZXMuY3JlYXRlKCk7XG5cbiAgICAgICAgbGV0IGxlZnQgPSBuZXcgU3luY1BpcGUobW9ja0NoYW5uZWxzLmxlZnQsICdsZWZ0JywgJ3Rlc3QnKTtcbiAgICAgICAgbGV0IHJpZ2h0ID0gbmV3IFN5bmNQaXBlKG1vY2tDaGFubmVscy5yaWdodCwgJ3JpZ2h0JywgJ3Rlc3QnKTtcblxuICAgICAgICBsZXQgbGVmdFByb21pc2UgPSBQcm9taXNlcy53aXRoVGltZW91dCgxLCBhc3luYyAoKSA9PiBhd2FpdCBsZWZ0LnN5bmMoKSlcbiAgICAgICAgbGV0IHJpZ2h0UHJvbWlzZSA9IFByb21pc2VzLndpdGhUaW1lb3V0KDEsIGFzeW5jICgpID0+IGF3YWl0IHJpZ2h0LnN5bmMoKSlcblxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbcmlnaHRQcm9taXNlLCBsZWZ0UHJvbWlzZV0pO1xuXG4gICAgfSk7XG5cblxufSk7XG4iXX0=