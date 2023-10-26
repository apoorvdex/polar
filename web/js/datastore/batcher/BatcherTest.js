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
const Batcher_1 = require("./Batcher");
const Assertions_1 = require("../../test/Assertions");
describe('Batcher', function () {
    it("Verify first active and then passive batches.", function () {
        return __awaiter(this, void 0, void 0, function* () {
            let mockExecutor = new MockExecutor();
            let batcher = new Batcher_1.Batcher(() => mockExecutor.execute());
            let b0 = batcher.enqueue();
            let b1 = batcher.enqueue();
            chai_1.assert.ok(b0 instanceof Batcher_1.ActiveBatch);
            chai_1.assert.ok(b1 instanceof Batcher_1.PassiveBatch);
        });
    });
    it("Stats across iterations", function () {
        return __awaiter(this, void 0, void 0, function* () {
            let mockExecutor = new MockExecutor();
            let batcher = new Batcher_1.Batcher(() => mockExecutor.execute());
            let b0 = batcher.enqueue();
            let b1 = batcher.enqueue();
            let b2 = batcher.enqueue();
            chai_1.assert.equal(mockExecutor.completions.length, 3);
            mockExecutor.completions.forEach(completion => completion.resolve());
            yield b0.run();
            chai_1.assert.equal(b0.ticket.executed, true);
            Assertions_1.assertJSON(b0, {
                "batched": 3,
                "batches": 1,
                "ticketsPerBatch": [
                    3
                ],
                "tickets": [],
                "ticket": {
                    "executed": true,
                    "promise": {}
                }
            });
            chai_1.assert.equal(b1.ticket.executed, true);
            chai_1.assert.equal(b2.ticket.executed, true);
        });
    });
});
class MockExecutor {
    constructor() {
        this.completions = [];
        this.resolve = false;
        this.reject = false;
    }
    execute() {
        return new Promise((resolve, reject) => {
            if (this.resolve) {
                resolve();
                return;
            }
            if (this.reject) {
                reject(new Error("Rejecting result"));
                return;
            }
            this.completions.push({ resolve, reject });
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmF0Y2hlclRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJCYXRjaGVyVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0JBQTRCO0FBQzVCLHVDQUE2RDtBQUM3RCxzREFBaUQ7QUFFakQsUUFBUSxDQUFDLFNBQVMsRUFBRTtJQUVoQixFQUFFLENBQUMsK0NBQStDLEVBQUU7O1lBRWhELElBQUksWUFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7WUFFdEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBRXhELElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMzQixJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFM0IsYUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFlBQVkscUJBQVcsQ0FBQyxDQUFDO1lBQ3JDLGFBQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxZQUFZLHNCQUFZLENBQUMsQ0FBQztRQUUxQyxDQUFDO0tBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHlCQUF5QixFQUFFOztZQUUxQixJQUFJLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1lBRXRDLElBQUksT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUV4RCxJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDM0IsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzNCLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUUzQixhQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRWpELFlBQVksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFFckUsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7WUFFZixhQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLHVCQUFVLENBQUMsRUFBRSxFQUFFO2dCQUNYLFNBQVMsRUFBRSxDQUFDO2dCQUNaLFNBQVMsRUFBRSxDQUFDO2dCQUNaLGlCQUFpQixFQUFFO29CQUNmLENBQUM7aUJBQ0o7Z0JBQ0QsU0FBUyxFQUFFLEVBQUU7Z0JBQ2IsUUFBUSxFQUFFO29CQUNOLFVBQVUsRUFBRSxJQUFJO29CQUNoQixTQUFTLEVBQUUsRUFBRTtpQkFDaEI7YUFDSixDQUFDLENBQUM7WUFFSCxhQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLGFBQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFM0MsQ0FBQztLQUFBLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxZQUFZO0lBQWxCO1FBRW9CLGdCQUFXLEdBQXVCLEVBQUUsQ0FBQztRQUU5QyxZQUFPLEdBQVksS0FBSyxDQUFDO1FBRXpCLFdBQU0sR0FBWSxLQUFLLENBQUM7SUFzQm5DLENBQUM7SUFwQkcsT0FBTztRQUVILE9BQU8sSUFBSSxPQUFPLENBQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFFekMsSUFBRyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNiLE9BQU8sRUFBRSxDQUFDO2dCQUNWLE9BQU87YUFDVjtZQUVELElBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDWixNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxPQUFPO2FBQ1Y7WUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO1FBRTdDLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHtBY3RpdmVCYXRjaCwgQmF0Y2hlciwgUGFzc2l2ZUJhdGNofSBmcm9tICcuL0JhdGNoZXInO1xuaW1wb3J0IHthc3NlcnRKU09OfSBmcm9tICcuLi8uLi90ZXN0L0Fzc2VydGlvbnMnO1xuXG5kZXNjcmliZSgnQmF0Y2hlcicsIGZ1bmN0aW9uKCkge1xuXG4gICAgaXQoXCJWZXJpZnkgZmlyc3QgYWN0aXZlIGFuZCB0aGVuIHBhc3NpdmUgYmF0Y2hlcy5cIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGxldCBtb2NrRXhlY3V0b3IgPSBuZXcgTW9ja0V4ZWN1dG9yKCk7XG5cbiAgICAgICAgbGV0IGJhdGNoZXIgPSBuZXcgQmF0Y2hlcigoKSA9PiBtb2NrRXhlY3V0b3IuZXhlY3V0ZSgpKTtcblxuICAgICAgICBsZXQgYjAgPSBiYXRjaGVyLmVucXVldWUoKTtcbiAgICAgICAgbGV0IGIxID0gYmF0Y2hlci5lbnF1ZXVlKCk7XG5cbiAgICAgICAgYXNzZXJ0Lm9rKGIwIGluc3RhbmNlb2YgQWN0aXZlQmF0Y2gpO1xuICAgICAgICBhc3NlcnQub2soYjEgaW5zdGFuY2VvZiBQYXNzaXZlQmF0Y2gpO1xuXG4gICAgfSk7XG5cbiAgICBpdChcIlN0YXRzIGFjcm9zcyBpdGVyYXRpb25zXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBsZXQgbW9ja0V4ZWN1dG9yID0gbmV3IE1vY2tFeGVjdXRvcigpO1xuXG4gICAgICAgIGxldCBiYXRjaGVyID0gbmV3IEJhdGNoZXIoKCkgPT4gbW9ja0V4ZWN1dG9yLmV4ZWN1dGUoKSk7XG5cbiAgICAgICAgbGV0IGIwID0gYmF0Y2hlci5lbnF1ZXVlKCk7XG4gICAgICAgIGxldCBiMSA9IGJhdGNoZXIuZW5xdWV1ZSgpO1xuICAgICAgICBsZXQgYjIgPSBiYXRjaGVyLmVucXVldWUoKTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwobW9ja0V4ZWN1dG9yLmNvbXBsZXRpb25zLmxlbmd0aCwgMyk7XG5cbiAgICAgICAgbW9ja0V4ZWN1dG9yLmNvbXBsZXRpb25zLmZvckVhY2goY29tcGxldGlvbiA9PiBjb21wbGV0aW9uLnJlc29sdmUoKSk7XG5cbiAgICAgICAgYXdhaXQgYjAucnVuKCk7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKGIwLnRpY2tldC5leGVjdXRlZCwgdHJ1ZSk7XG4gICAgICAgIGFzc2VydEpTT04oYjAsIHtcbiAgICAgICAgICAgIFwiYmF0Y2hlZFwiOiAzLFxuICAgICAgICAgICAgXCJiYXRjaGVzXCI6IDEsXG4gICAgICAgICAgICBcInRpY2tldHNQZXJCYXRjaFwiOiBbXG4gICAgICAgICAgICAgICAgM1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwidGlja2V0c1wiOiBbXSxcbiAgICAgICAgICAgIFwidGlja2V0XCI6IHtcbiAgICAgICAgICAgICAgICBcImV4ZWN1dGVkXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJwcm9taXNlXCI6IHt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChiMS50aWNrZXQuZXhlY3V0ZWQsIHRydWUpO1xuICAgICAgICBhc3NlcnQuZXF1YWwoYjIudGlja2V0LmV4ZWN1dGVkLCB0cnVlKTtcblxuICAgIH0pO1xuXG59KTtcblxuY2xhc3MgTW9ja0V4ZWN1dG9yIHtcblxuICAgIHB1YmxpYyByZWFkb25seSBjb21wbGV0aW9uczogQ29tcGxldGlvbjx2b2lkPltdID0gW107XG5cbiAgICBwdWJsaWMgcmVzb2x2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHVibGljIHJlamVjdDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgZXhlY3V0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgICAgICAgICBpZih0aGlzLnJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0aGlzLnJlamVjdCkge1xuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJSZWplY3RpbmcgcmVzdWx0XCIpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuY29tcGxldGlvbnMucHVzaCh7cmVzb2x2ZSwgcmVqZWN0fSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIENvbXBsZXRpb248VD4ge1xuXG4gICAgcmVhZG9ubHkgcmVzb2x2ZTogKCkgPT4gVDtcbiAgICByZWFkb25seSByZWplY3Q6IChlcnI6IEVycm9yKSA9PiB2b2lkO1xuXG59XG4iXX0=