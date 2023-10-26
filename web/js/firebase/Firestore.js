"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase = __importStar(require("./lib/firebase"));
class Firestore {
    static getInstance(opts = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.firestore) {
                return this.firestore;
            }
            return this.firestore = yield this.createInstance(opts);
        });
    }
    static createInstance(opts = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = firebase.firestore();
            const settings = {};
            result.settings(settings);
            if (opts.enablePersistence) {
                yield result.enablePersistence({ experimentalTabSynchronization: true });
            }
            return result;
        });
    }
}
exports.Firestore = Firestore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlyZXN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRmlyZXN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQTJDO0FBRTNDLE1BQWEsU0FBUztJQUlYLE1BQU0sQ0FBTyxXQUFXLENBQUMsT0FBeUIsRUFBRTs7WUFFdkQsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNoQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDekI7WUFFRCxPQUFPLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTVELENBQUM7S0FBQTtJQUVNLE1BQU0sQ0FBTyxjQUFjLENBQUMsT0FBeUIsRUFBRTs7WUFFMUQsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBRXBDLE1BQU0sUUFBUSxHQUFHLEVBRWhCLENBQUM7WUFFRixNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRTFCLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO2dCQUN4QixNQUFNLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFDLDhCQUE4QixFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7YUFDMUU7WUFFRCxPQUFPLE1BQU0sQ0FBQztRQUVsQixDQUFDO0tBQUE7Q0FFSjtBQWhDRCw4QkFnQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICcuL2xpYi9maXJlYmFzZSc7XG5cbmV4cG9ydCBjbGFzcyBGaXJlc3RvcmUge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZmlyZXN0b3JlPzogZmlyZWJhc2UuZmlyZXN0b3JlLkZpcmVzdG9yZTtcblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0SW5zdGFuY2Uob3B0czogRmlyZXN0b3JlT3B0aW9ucyA9IHt9KTogUHJvbWlzZTxmaXJlYmFzZS5maXJlc3RvcmUuRmlyZXN0b3JlPiB7XG5cbiAgICAgICAgaWYgKHRoaXMuZmlyZXN0b3JlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5maXJlc3RvcmU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5maXJlc3RvcmUgPSBhd2FpdCB0aGlzLmNyZWF0ZUluc3RhbmNlKG9wdHMpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBjcmVhdGVJbnN0YW5jZShvcHRzOiBGaXJlc3RvcmVPcHRpb25zID0ge30pOiBQcm9taXNlPGZpcmViYXNlLmZpcmVzdG9yZS5GaXJlc3RvcmU+IHtcblxuICAgICAgICBjb25zdCByZXN1bHQgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcblxuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICAgICAgICAgIC8vIHRpbWVzdGFtcHNJblNuYXBzaG90czogdHJ1ZVxuICAgICAgICB9O1xuXG4gICAgICAgIHJlc3VsdC5zZXR0aW5ncyhzZXR0aW5ncyk7XG5cbiAgICAgICAgaWYgKG9wdHMuZW5hYmxlUGVyc2lzdGVuY2UpIHtcbiAgICAgICAgICAgIGF3YWl0IHJlc3VsdC5lbmFibGVQZXJzaXN0ZW5jZSh7ZXhwZXJpbWVudGFsVGFiU3luY2hyb25pemF0aW9uOiB0cnVlfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlyZXN0b3JlT3B0aW9ucyB7XG4gICAgcmVhZG9ubHkgZW5hYmxlUGVyc2lzdGVuY2U/OiBib29sZWFuO1xufVxuXG4iXX0=