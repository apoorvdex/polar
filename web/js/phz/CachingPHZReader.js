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
const PHZReader_1 = require("./PHZReader");
const Logger_1 = require("../logger/Logger");
const log = Logger_1.Logger.create();
class CachingPHZReader {
    constructor(path, timeout = 60000) {
        this.reopened = 0;
        this.path = path;
        this.timeout = timeout;
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.delegate = new PHZReader_1.PHZReader(this.path);
            yield this.delegate.init();
            setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                yield this.close();
            }), this.timeout);
        });
    }
    getMetadata() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.openWhenNecessary();
            return yield this.delegate.getMetadata();
        });
    }
    getResources() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.openWhenNecessary();
            return yield this.delegate.getResources();
        });
    }
    getResource(resourceEntry) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.openWhenNecessary();
            return yield this.delegate.getResource(resourceEntry);
        });
    }
    getResourceAsStream(resourceEntry) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.openWhenNecessary();
            return yield this.delegate.getResourceAsStream(resourceEntry);
        });
    }
    openWhenNecessary() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.delegate) {
                return;
            }
            log.info("Caching PHZReader being re-opened: " + this.path);
            ++this.reopened;
            yield this.init();
        });
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            const delegate = this.delegate;
            this.delegate = undefined;
            yield delegate.close();
        });
    }
}
exports.CachingPHZReader = CachingPHZReader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FjaGluZ1BIWlJlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNhY2hpbmdQSFpSZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFzQztBQUV0Qyw2Q0FBd0M7QUFHeEMsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsZ0JBQWdCO0lBb0J6QixZQUFZLElBQVksRUFBRSxVQUFrQixLQUFLO1FBRjFDLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFJeEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFFM0IsQ0FBQztJQU9ZLElBQUk7O1lBRWIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLHFCQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pDLE1BQU0sSUFBSSxDQUFDLFFBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUU1QixVQUFVLENBQUMsR0FBUyxFQUFFO2dCQUVsQixNQUFNLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUV2QixDQUFDLENBQUEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFckIsQ0FBQztLQUFBO0lBRVksV0FBVzs7WUFDcEIsTUFBTSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUMvQixPQUFPLE1BQU0sSUFBSSxDQUFDLFFBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM5QyxDQUFDO0tBQUE7SUFLWSxZQUFZOztZQUNyQixNQUFNLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQy9CLE9BQU8sTUFBTSxJQUFJLENBQUMsUUFBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQy9DLENBQUM7S0FBQTtJQU9ZLFdBQVcsQ0FBQyxhQUE0Qjs7WUFDakQsTUFBTSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUMvQixPQUFPLE1BQU0sSUFBSSxDQUFDLFFBQVMsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0QsQ0FBQztLQUFBO0lBRVksbUJBQW1CLENBQUMsYUFBNEI7O1lBQ3pELE1BQU0sSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDL0IsT0FBTyxNQUFNLElBQUksQ0FBQyxRQUFTLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbkUsQ0FBQztLQUFBO0lBRUssaUJBQWlCOztZQUVuQixJQUFHLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBRWQsT0FBTzthQUNWO1lBRUQsR0FBRyxDQUFDLElBQUksQ0FBQyxxQ0FBcUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUQsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDO1lBRWhCLE1BQU0sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXRCLENBQUM7S0FBQTtJQUVZLEtBQUs7O1lBSWQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUUvQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztZQUUxQixNQUFNLFFBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUU1QixDQUFDO0tBQUE7Q0FFSjtBQW5HRCw0Q0FtR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BIWlJlYWRlcn0gZnJvbSAnLi9QSFpSZWFkZXInO1xuaW1wb3J0IHtSZXNvdXJjZUVudHJ5fSBmcm9tICcuL1Jlc291cmNlRW50cnknO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtDb21wcmVzc2VkUmVhZGVyfSBmcm9tICcuL0NvbXByZXNzZWRSZWFkZXInO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBDYWNoaW5nUEhaUmVhZGVyIGltcGxlbWVudHMgQ29tcHJlc3NlZFJlYWRlciB7XG5cbiAgICBwdWJsaWMgcGF0aDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRlbGVnYXRlIFBIWlJlYWRlciB0aGF0IGFjdHVhbGx5IHBlcmZvcm1zIHRoZSBJTy5cbiAgICAgKlxuICAgICAqL1xuICAgIHB1YmxpYyBkZWxlZ2F0ZT86IFBIWlJlYWRlcjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhbW91bnQgb2YgdGltZSB3ZSBzaG91bGQgd2FpdCBhZnRlciBpbml0IHRvIGNsb3NlIHRoZSBmaWxlLlxuICAgICAqL1xuICAgIHB1YmxpYyB0aW1lb3V0OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRoZSByZWFkZXIgaGFzIGJlZW4gcmUtb3BlbmVkLlxuICAgICAqL1xuICAgIHB1YmxpYyByZW9wZW5lZDogbnVtYmVyID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKHBhdGg6IHN0cmluZywgdGltZW91dDogbnVtYmVyID0gNjAwMDApIHtcblxuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgICAgICB0aGlzLnRpbWVvdXQgPSB0aW1lb3V0O1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdCBtdXN0IGJlIGNhbGxlZCB0byBsb2FkIHRoZSBlbnRyaWVzIHdoaWNoIHdlIGNhbiB3b3JrIHdpdGguXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fVxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBpbml0KCkge1xuXG4gICAgICAgIHRoaXMuZGVsZWdhdGUgPSBuZXcgUEhaUmVhZGVyKHRoaXMucGF0aCk7XG4gICAgICAgIGF3YWl0IHRoaXMuZGVsZWdhdGUhLmluaXQoKTtcblxuICAgICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgYXdhaXQgdGhpcy5jbG9zZSgpO1xuXG4gICAgICAgIH0sIHRoaXMudGltZW91dCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0TWV0YWRhdGEoKSB7XG4gICAgICAgIGF3YWl0IHRoaXMub3BlbldoZW5OZWNlc3NhcnkoKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZGVsZWdhdGUhLmdldE1ldGFkYXRhKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGp1c3QgdGhlIHJlc291cmNlcyBmcm9tIHRoZSBtZXRhZGF0YS5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgZ2V0UmVzb3VyY2VzKCkge1xuICAgICAgICBhd2FpdCB0aGlzLm9wZW5XaGVuTmVjZXNzYXJ5KCk7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmRlbGVnYXRlIS5nZXRSZXNvdXJjZXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWFkIGEgcmVzb3VyY2UgZnJvbSBkaXNrIGFuZCBjYWxsIHRoZSBjYWxsYmFjayB3aXRoIHRoZSBuZXcgY29udGVudCBvbmNlXG4gICAgICogaXQncyByZWFkeSBmb3IgdXNhZ2UuXG4gICAgICpcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgZ2V0UmVzb3VyY2UocmVzb3VyY2VFbnRyeTogUmVzb3VyY2VFbnRyeSk6IFByb21pc2U8QnVmZmVyPiB7XG4gICAgICAgIGF3YWl0IHRoaXMub3BlbldoZW5OZWNlc3NhcnkoKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZGVsZWdhdGUhLmdldFJlc291cmNlKHJlc291cmNlRW50cnkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBnZXRSZXNvdXJjZUFzU3RyZWFtKHJlc291cmNlRW50cnk6IFJlc291cmNlRW50cnkpOiBQcm9taXNlPE5vZGVKUy5SZWFkYWJsZVN0cmVhbT4ge1xuICAgICAgICBhd2FpdCB0aGlzLm9wZW5XaGVuTmVjZXNzYXJ5KCk7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmRlbGVnYXRlIS5nZXRSZXNvdXJjZUFzU3RyZWFtKHJlc291cmNlRW50cnkpO1xuICAgIH1cblxuICAgIGFzeW5jIG9wZW5XaGVuTmVjZXNzYXJ5KCkge1xuXG4gICAgICAgIGlmKHRoaXMuZGVsZWdhdGUpIHtcbiAgICAgICAgICAgIC8vIHdlIGFyZSBkb25lLiAgVGhlcmUgaXMgYWxyZWFkeSBhIGRlbGVnYXRlIHdlIGNhbiB1c2UuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsb2cuaW5mbyhcIkNhY2hpbmcgUEhaUmVhZGVyIGJlaW5nIHJlLW9wZW5lZDogXCIgKyB0aGlzLnBhdGgpO1xuICAgICAgICArK3RoaXMucmVvcGVuZWQ7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5pbml0KCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY2xvc2UoKSB7XG5cbiAgICAgICAgLy8gY29weSB0aGUgZGVsZWdhdGUgc28gdGhhdCBub3RoaW5nIGNhbiBzZWUgdGhpcy5kZWxlZ2F0ZSBhcyBiZWluZ1xuICAgICAgICAvLyBub24tbnVsbCB3aGlsZSB3ZSBjbG9zZSBlbHNlIHdlIHdvdWxkIGhhdmUgYSByYWNlLlxuICAgICAgICBjb25zdCBkZWxlZ2F0ZSA9IHRoaXMuZGVsZWdhdGU7XG5cbiAgICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHVuZGVmaW5lZDtcblxuICAgICAgICBhd2FpdCBkZWxlZ2F0ZSEuY2xvc2UoKTtcblxuICAgIH1cblxufVxuIl19