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
const Latch_1 = require("./Latch");
const Logger_1 = require("../logger/Logger");
const log = Logger_1.Logger.create();
class AsyncWorkQueue {
    constructor(work, concurrency = 25) {
        this.completion = new Latch_1.Latch();
        this.executing = 0;
        this.completed = 0;
        this.terminated = false;
        this.concurrency = concurrency;
        this.work = work;
    }
    execute() {
        this.handleTaskCreation();
        return this.completion.get();
    }
    enqueue(asyncTask) {
        const latch = new Latch_1.Latch();
        const wrapperTask = () => __awaiter(this, void 0, void 0, function* () {
            const result = yield asyncTask();
            latch.resolve(result);
        });
        this.work.push(wrapperTask);
        return latch;
    }
    getExecuting() {
        return this.executing;
    }
    getCompleted() {
        return this.completed;
    }
    handleTaskCreation() {
        const newTaskCount = this.concurrency - this.executing;
        for (let idx = 0; idx < newTaskCount; ++idx) {
            const task = this.work.shift();
            if (!task) {
                break;
            }
            ++this.executing;
            task()
                .then(() => {
                this.handleNextTask();
            })
                .catch(err => {
                log.error("Unable to handle task: ", err);
                this.handleNextTask();
            });
        }
        if (this.work.length === 0 && this.executing === 0) {
            if (!this.terminated) {
                this.completion.resolve(true);
                this.terminated = true;
            }
            return;
        }
    }
    handleNextTask() {
        ++this.completed;
        --this.executing;
        this.handleTaskCreation();
    }
}
exports.AsyncWorkQueue = AsyncWorkQueue;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXN5bmNXb3JrUXVldWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBc3luY1dvcmtRdWV1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsbUNBQThCO0FBRTlCLDZDQUF3QztBQUV4QyxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFlNUIsTUFBYSxjQUFjO0lBb0J2QixZQUFZLElBQXFCLEVBQUUsY0FBc0IsRUFBRTtRQWQxQyxlQUFVLEdBQW1CLElBQUksYUFBSyxFQUFFLENBQUM7UUFLbEQsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUt0QixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBRXRCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFHaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVNLE9BQU87UUFFVixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUUxQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7SUFFakMsQ0FBQztJQU1NLE9BQU8sQ0FBSSxTQUFnQztRQUU5QyxNQUFNLEtBQUssR0FBYSxJQUFJLGFBQUssRUFBRSxDQUFDO1FBRXBDLE1BQU0sV0FBVyxHQUFHLEdBQVMsRUFBRTtZQUUzQixNQUFNLE1BQU0sR0FBRyxNQUFNLFNBQVMsRUFBRSxDQUFDO1lBQ2pDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFMUIsQ0FBQyxDQUFBLENBQUM7UUFFRixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUU1QixPQUFPLEtBQUssQ0FBQztJQUVqQixDQUFDO0lBS00sWUFBWTtRQUNmLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRU0sWUFBWTtRQUNmLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRU8sa0JBQWtCO1FBRXRCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUV2RCxLQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsWUFBWSxFQUFFLEVBQUUsR0FBRyxFQUFFO1lBT3pDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFL0IsSUFBSSxDQUFFLElBQUksRUFBRTtnQkFDUixNQUFNO2FBQ1Q7WUFFRCxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7WUFFakIsSUFBSSxFQUFFO2lCQUNELElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzFCLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ1QsR0FBRyxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFFMUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzFCLENBQUMsQ0FBQyxDQUFDO1NBRVY7UUFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLENBQUMsRUFBRTtZQUtoRCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2FBQzFCO1lBRUQsT0FBTztTQUVWO0lBRUwsQ0FBQztJQUVPLGNBQWM7UUFDbEIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2pCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNqQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM5QixDQUFDO0NBRUo7QUF0SEQsd0NBc0hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMYXRjaH0gZnJvbSAnLi9MYXRjaCc7XG5pbXBvcnQge2V4ZWN1dGVUYXNrc30gZnJvbSAnZWxlY3Ryb24tdXBkYXRlci9vdXQvZGlmZmVyZW50aWFsRG93bmxvYWRlci9tdWx0aXBsZVJhbmdlRG93bmxvYWRlcic7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vbG9nZ2VyL0xvZ2dlcic7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuLyoqXG4gKiBBIHdvcmsgcXVldWUgdGhhdCBjb250YWlucyBhIGxpc3Qgb2YgYXN5bmMgZnVuY3Rpb25zIHdoaWNoIGFyZSBqdXN0XG4gKiBleGVjdXRlZC5cbiAqXG4gKiBUaGUgcXVldWUgY2FuIGJlIGFwcGVuZGVkIHRvbyBhbmQgaXMgY29udGludWFsbHkgZXhlY3V0ZWQgdW50aWwgaXQnc1xuICogZXhoYXVzdGVkIGFuZCB0aGUgbGFzdCB0YXNrIGlzIGZpbmlzaGVkLlxuICpcbiAqIFRoaXMgaXNuJ3QgZGVzaWduZWQgdG8gc2NhbGUgQ1BVIGFzIHRoZSB0YXNrcyBhcmUgYWxsIGV4ZWN1dGluZyBpbiBhIHNpbmdsZVxuICogdGhyZWFkIGJ1dCBpcyBtb3JlIGZvY3VzZWQgb24gZXhlY3V0aW5nIGNvZGUgaW4gcGFyYWxsZWwgdGhhdCBpcyB1c2luZyBzb21lXG4gKiByZW1vdGUgcmVzb3VyY2UuICBUaGlzIGlzIGdyZWF0IGZvciBjb2RlIHRoYXQgaXMgdXNpbmcgYXN5bmMgSU8gc28gd2UgY2FuXG4gKiBtdWx0aXBsZXguXG4gKlxuICovXG5leHBvcnQgY2xhc3MgQXN5bmNXb3JrUXVldWUge1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGNvbmN1cnJlbmN5OiBudW1iZXI7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHdvcms6IEFzeW5jRnVuY3Rpb25bXTtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29tcGxldGlvbjogTGF0Y2g8Ym9vbGVhbj4gPSBuZXcgTGF0Y2goKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0b3RhbCBudW1iZXIgb2YgY3VycmVudGx5IGV4ZWN1dGluZyB0YXNrcy5cbiAgICAgKi9cbiAgICBwcml2YXRlIGV4ZWN1dGluZzogbnVtYmVyID0gMDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0b3RhbCBudW1iZXIgb2YgY29tcGxldGVkIHRhc2tzLlxuICAgICAqL1xuICAgIHByaXZhdGUgY29tcGxldGVkOiBudW1iZXIgPSAwO1xuXG4gICAgcHJpdmF0ZSB0ZXJtaW5hdGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcih3b3JrOiBBc3luY0Z1bmN0aW9uW10sIGNvbmN1cnJlbmN5OiBudW1iZXIgPSAyNSkge1xuICAgICAgICB0aGlzLmNvbmN1cnJlbmN5ID0gY29uY3VycmVuY3k7XG4gICAgICAgIHRoaXMud29yayA9IHdvcms7XG4gICAgfVxuXG4gICAgcHVibGljIGV4ZWN1dGUoKTogUHJvbWlzZTxib29sZWFuPiB7XG5cbiAgICAgICAgdGhpcy5oYW5kbGVUYXNrQ3JlYXRpb24oKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5jb21wbGV0aW9uLmdldCgpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxsb3dzIHVzIHRvIGVucXVldWUgbW9yZSB3b3JrIGluIHRoaXMgQXN5bmNXb3JrUXVldWUgYnV0IHdlIGNhbiBkZXBlbmRcbiAgICAgKiBvbiB0aGUgcmVzdWx0IHdpdGhvdXQgc3RhcnRpbmcgdGhlIHRhc2suXG4gICAgICovXG4gICAgcHVibGljIGVucXVldWU8VD4oYXN5bmNUYXNrOiBUeXBlZEFzeW5jRnVuY3Rpb248VD4gKTogTGF0Y2g8VD4ge1xuXG4gICAgICAgIGNvbnN0IGxhdGNoOiBMYXRjaDxUPiA9IG5ldyBMYXRjaCgpO1xuXG4gICAgICAgIGNvbnN0IHdyYXBwZXJUYXNrID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhc3luY1Rhc2soKTtcbiAgICAgICAgICAgIGxhdGNoLnJlc29sdmUocmVzdWx0KTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMud29yay5wdXNoKHdyYXBwZXJUYXNrKTtcblxuICAgICAgICByZXR1cm4gbGF0Y2g7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIHRvdGFsIG51bWJlciBvZiBleGVjdXRpbmcgdGFza3MuXG4gICAgICovXG4gICAgcHVibGljIGdldEV4ZWN1dGluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0aW5nO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDb21wbGV0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlZDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZVRhc2tDcmVhdGlvbigpIHtcblxuICAgICAgICBjb25zdCBuZXdUYXNrQ291bnQgPSB0aGlzLmNvbmN1cnJlbmN5IC0gdGhpcy5leGVjdXRpbmc7XG5cbiAgICAgICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgbmV3VGFza0NvdW50OyArK2lkeCkge1xuXG4gICAgICAgICAgICAvLyBlYWNoIHRpbWUgd2UgZW50ZXIgaGFuZGxlVGFza0NyZWF0aW9uIHdlIG5lZWQgdG8gZGV0ZXJtaW5lIGlmIHdlXG4gICAgICAgICAgICAvLyBuZWVkIHRvIGNyZWF0ZSBtb3JlIHRoYW4gb25lIHRhc2sgYmVjYXVzZSBuZWFyIHNodXRkb3duIGl0J3NcbiAgICAgICAgICAgIC8vIHBvc3NpYmxlIGZvciB0aGUgbGFzdCB0YXNrIHRvIHJlLWVucXVlIE4gam9icyB3aGljaCB3aWxsIGFsbFxuICAgICAgICAgICAgLy8gbmVlZCB0byBiZSBwcm9jZXNzZWQgYXQgb25jZS5cblxuICAgICAgICAgICAgY29uc3QgdGFzayA9IHRoaXMud29yay5zaGlmdCgpO1xuXG4gICAgICAgICAgICBpZiAoISB0YXNrKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICsrdGhpcy5leGVjdXRpbmc7XG5cbiAgICAgICAgICAgIHRhc2soKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVOZXh0VGFzaygpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxvZy5lcnJvcihcIlVuYWJsZSB0byBoYW5kbGUgdGFzazogXCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIC8vIHlvdXIgY29kZSBzaG91bGQgZG8gaXRzIG93biBlcnJvciBoYW5kbGluZy4uLi5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVOZXh0VGFzaygpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy53b3JrLmxlbmd0aCA9PT0gMCAmJiB0aGlzLmV4ZWN1dGluZyA9PT0gMCkge1xuXG4gICAgICAgICAgICAvLyB0ZXJtaW5hdGUgaWYgd2UgYXJlIHRoZSBsYXN0IGV4ZWN1dGluZyB0YXNrIEFORCB0aGVyZSBpcyBubyBtb3JlXG4gICAgICAgICAgICAvLyB3b3JrLlxuXG4gICAgICAgICAgICBpZiAoIXRoaXMudGVybWluYXRlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGlvbi5yZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgIHRoaXMudGVybWluYXRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZU5leHRUYXNrKCkge1xuICAgICAgICArK3RoaXMuY29tcGxldGVkO1xuICAgICAgICAtLXRoaXMuZXhlY3V0aW5nO1xuICAgICAgICB0aGlzLmhhbmRsZVRhc2tDcmVhdGlvbigpO1xuICAgIH1cblxufVxuXG5leHBvcnQgdHlwZSBBc3luY0Z1bmN0aW9uID0gKCkgPT4gUHJvbWlzZTxhbnk+O1xuXG5leHBvcnQgdHlwZSBUeXBlZEFzeW5jRnVuY3Rpb248VD4gPSAoKSA9PiBQcm9taXNlPFQ+O1xuIl19