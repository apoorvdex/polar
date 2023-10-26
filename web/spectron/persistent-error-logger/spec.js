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
const Spectron_1 = require("../../js/test/Spectron");
const SpectronSpec_1 = require("../../js/test/SpectronSpec");
const FilePaths_1 = require("../../js/util/FilePaths");
const Files_1 = require("../../js/util/Files");
const PolarDataDir_1 = require("../../js/test/PolarDataDir");
const Directories_1 = require("../../js/datastore/Directories");
describe('persistent-error-logger', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield PolarDataDir_1.PolarDataDir.useFreshDirectory('.polar-persistent-error-logger');
        Spectron_1.Spectron.setup(__dirname);
        this.timeout(30000);
        it('test writing errors', function () {
            return __awaiter(this, void 0, void 0, function* () {
                const directories = new Directories_1.Directories();
                yield directories.init();
                chai_1.assert.ok(yield Files_1.Files.existsAsync(directories.logsDir));
                yield SpectronSpec_1.SpectronSpec.create(this.app).waitFor(true);
                const data = yield Files_1.Files.readFileAsync(FilePaths_1.FilePaths.create(directories.logsDir, 'error.log'));
                chai_1.assert.ok(data.indexOf('This is from the main process:') !== -1);
                chai_1.assert.ok(data.indexOf('Fake error in main process') !== -1);
                chai_1.assert.ok(data.indexOf('This is from the renderer process:') !== -1);
                chai_1.assert.ok(data.indexOf('Fake error in the renderer process') !== -1);
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLCtCQUE0QjtBQUM1QixxREFBZ0Q7QUFDaEQsNkRBQXdEO0FBQ3hELHVEQUFrRDtBQUNsRCwrQ0FBMEM7QUFDMUMsNkRBQXdEO0FBQ3hELGdFQUEyRDtBQUUzRCxRQUFRLENBQUMseUJBQXlCLEVBQUU7O1FBRWhDLE1BQU0sMkJBQVksQ0FBQyxpQkFBaUIsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBRXZFLG1CQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFcEIsRUFBRSxDQUFDLHFCQUFxQixFQUFFOztnQkFFdEIsTUFBTSxXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7Z0JBQ3RDLE1BQU0sV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUV6QixhQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sYUFBSyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFFeEQsTUFBTSwyQkFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQU9sRCxNQUFNLElBQUksR0FBRyxNQUFNLGFBQUssQ0FBQyxhQUFhLENBQUMscUJBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUUzRixhQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0NBQWdDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqRSxhQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsNEJBQTRCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3RCxhQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsb0NBQW9DLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyRSxhQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsb0NBQW9DLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXpFLENBQUM7U0FBQSxDQUFDLENBQUM7SUFFUCxDQUFDO0NBQUEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHtTcGVjdHJvbn0gZnJvbSAnLi4vLi4vanMvdGVzdC9TcGVjdHJvbic7XG5pbXBvcnQge1NwZWN0cm9uU3BlY30gZnJvbSAnLi4vLi4vanMvdGVzdC9TcGVjdHJvblNwZWMnO1xuaW1wb3J0IHtGaWxlUGF0aHN9IGZyb20gJy4uLy4uL2pzL3V0aWwvRmlsZVBhdGhzJztcbmltcG9ydCB7RmlsZXN9IGZyb20gJy4uLy4uL2pzL3V0aWwvRmlsZXMnO1xuaW1wb3J0IHtQb2xhckRhdGFEaXJ9IGZyb20gJy4uLy4uL2pzL3Rlc3QvUG9sYXJEYXRhRGlyJztcbmltcG9ydCB7RGlyZWN0b3JpZXN9IGZyb20gJy4uLy4uL2pzL2RhdGFzdG9yZS9EaXJlY3Rvcmllcyc7XG5cbmRlc2NyaWJlKCdwZXJzaXN0ZW50LWVycm9yLWxvZ2dlcicsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgYXdhaXQgUG9sYXJEYXRhRGlyLnVzZUZyZXNoRGlyZWN0b3J5KCcucG9sYXItcGVyc2lzdGVudC1lcnJvci1sb2dnZXInKTtcblxuICAgIFNwZWN0cm9uLnNldHVwKF9fZGlybmFtZSk7XG4gICAgdGhpcy50aW1lb3V0KDMwMDAwKTtcblxuICAgIGl0KCd0ZXN0IHdyaXRpbmcgZXJyb3JzJywgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgY29uc3QgZGlyZWN0b3JpZXMgPSBuZXcgRGlyZWN0b3JpZXMoKTtcbiAgICAgICAgYXdhaXQgZGlyZWN0b3JpZXMuaW5pdCgpO1xuXG4gICAgICAgIGFzc2VydC5vayhhd2FpdCBGaWxlcy5leGlzdHNBc3luYyhkaXJlY3Rvcmllcy5sb2dzRGlyKSk7XG5cbiAgICAgICAgYXdhaXQgU3BlY3Ryb25TcGVjLmNyZWF0ZSh0aGlzLmFwcCkud2FpdEZvcih0cnVlKTtcblxuICAgICAgICAvLyBub3cgbWFrZSBzdXJlIHRoZSBkYXRhIGlzIGluIG91ciBmaWxlIG5vdyB0aGF0IHRoZSBhcHAgc2F5cyB0aGV5IHdlcmVcbiAgICAgICAgLy8gd3JpdHRlblxuXG4gICAgICAgIC8vIG9rLi4uIHJlYWRGaWxlQXN5bmMgZG9lc24ndCBzZWVtIHRvIHRocm93IGFuIGVycm9yIGlmIHRoZSBmaWxlIGRvZXMgbm90IGV4aXN0Li4uXG5cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IEZpbGVzLnJlYWRGaWxlQXN5bmMoRmlsZVBhdGhzLmNyZWF0ZShkaXJlY3Rvcmllcy5sb2dzRGlyLCAnZXJyb3IubG9nJykpO1xuXG4gICAgICAgIGFzc2VydC5vayhkYXRhLmluZGV4T2YoJ1RoaXMgaXMgZnJvbSB0aGUgbWFpbiBwcm9jZXNzOicpICE9PSAtMSk7XG4gICAgICAgIGFzc2VydC5vayhkYXRhLmluZGV4T2YoJ0Zha2UgZXJyb3IgaW4gbWFpbiBwcm9jZXNzJykgIT09IC0xKTtcbiAgICAgICAgYXNzZXJ0Lm9rKGRhdGEuaW5kZXhPZignVGhpcyBpcyBmcm9tIHRoZSByZW5kZXJlciBwcm9jZXNzOicpICE9PSAtMSk7XG4gICAgICAgIGFzc2VydC5vayhkYXRhLmluZGV4T2YoJ0Zha2UgZXJyb3IgaW4gdGhlIHJlbmRlcmVyIHByb2Nlc3MnKSAhPT0gLTEpO1xuXG4gICAgfSk7XG5cbn0pO1xuIl19