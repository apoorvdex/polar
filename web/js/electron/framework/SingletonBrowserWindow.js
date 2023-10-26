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
const electron_1 = require("electron");
const BrowserWindowRegistry_1 = require("./BrowserWindowRegistry");
const Logger_1 = require("../../logger/Logger");
const log = Logger_1.Logger.create();
class SingletonBrowserWindow {
    static getInstance(tag, browserWindowFactory, extraTags = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const existing = BrowserWindowRegistry_1.BrowserWindowRegistry.tagged(tag);
            if (existing.length === 1) {
                log.info("Found existing repository UI. Focusing.");
                const id = existing[0];
                const browserWindow = electron_1.BrowserWindow.fromId(id);
                browserWindow.focus();
                return browserWindow;
            }
            const result = yield browserWindowFactory();
            const tags = Object.assign({}, extraTags);
            tags[tag.name] = tag.value;
            BrowserWindowRegistry_1.BrowserWindowRegistry.tag(result.id, tags);
            return result;
        });
    }
}
exports.SingletonBrowserWindow = SingletonBrowserWindow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2luZ2xldG9uQnJvd3NlcldpbmRvdy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNpbmdsZXRvbkJyb3dzZXJXaW5kb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUlBLHVDQUF1QztBQUN2QyxtRUFBd0Y7QUFDeEYsZ0RBQTJDO0FBRTNDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLHNCQUFzQjtJQUV4QixNQUFNLENBQU8sV0FBVyxDQUFDLEdBQXFCLEVBQ3JCLG9CQUEwQyxFQUMxQyxZQUFvQixFQUFFOztZQUVsRCxNQUFNLFFBQVEsR0FBRyw2Q0FBcUIsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFbkQsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFFdkIsR0FBRyxDQUFDLElBQUksQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO2dCQUVwRCxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRXZCLE1BQU0sYUFBYSxHQUFHLHdCQUFhLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUMvQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3RCLE9BQU8sYUFBYSxDQUFDO2FBRXhCO1lBRUQsTUFBTSxNQUFNLEdBQUcsTUFBTSxvQkFBb0IsRUFBRSxDQUFDO1lBRTVDLE1BQU0sSUFBSSxHQUFXLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUUzQiw2Q0FBcUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUUzQyxPQUFPLE1BQU0sQ0FBQztRQUVsQixDQUFDO0tBQUE7Q0FFSjtBQS9CRCx3REErQkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZSBhIHNpbmdsZSBicm93c2VyIHdpbmRvdyBieSBrZXkgYW5kIGp1c3QgZm9jdXMgaWYgdGhlIHdpbmRvdyBpcyBzdGlsbFxuICogb3BlbiB0aGUgc2Vjb25kIHRpbWUgd2UgdHJ5IHRvIG9wZW4gaXQuXG4gKi9cbmltcG9ydCB7QnJvd3NlcldpbmRvd30gZnJvbSAnZWxlY3Ryb24nO1xuaW1wb3J0IHtCcm93c2VyV2luZG93UmVnaXN0cnksIEJyb3dzZXJXaW5kb3dUYWcsIFRhZ01hcH0gZnJvbSAnLi9Ccm93c2VyV2luZG93UmVnaXN0cnknO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uLy4uL2xvZ2dlci9Mb2dnZXInO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBTaW5nbGV0b25Ccm93c2VyV2luZG93IHtcblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0SW5zdGFuY2UodGFnOiBCcm93c2VyV2luZG93VGFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJvd3NlcldpbmRvd0ZhY3Rvcnk6IEJyb3dzZXJXaW5kb3dGYWN0b3J5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFUYWdzOiBUYWdNYXAgPSB7fSkge1xuXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nID0gQnJvd3NlcldpbmRvd1JlZ2lzdHJ5LnRhZ2dlZCh0YWcpO1xuXG4gICAgICAgIGlmIChleGlzdGluZy5sZW5ndGggPT09IDEpIHtcblxuICAgICAgICAgICAgbG9nLmluZm8oXCJGb3VuZCBleGlzdGluZyByZXBvc2l0b3J5IFVJLiBGb2N1c2luZy5cIik7XG5cbiAgICAgICAgICAgIGNvbnN0IGlkID0gZXhpc3RpbmdbMF07XG5cbiAgICAgICAgICAgIGNvbnN0IGJyb3dzZXJXaW5kb3cgPSBCcm93c2VyV2luZG93LmZyb21JZChpZCk7XG4gICAgICAgICAgICBicm93c2VyV2luZG93LmZvY3VzKCk7XG4gICAgICAgICAgICByZXR1cm4gYnJvd3NlcldpbmRvdztcblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYnJvd3NlcldpbmRvd0ZhY3RvcnkoKTtcblxuICAgICAgICBjb25zdCB0YWdzOiBUYWdNYXAgPSBPYmplY3QuYXNzaWduKHt9LCBleHRyYVRhZ3MpO1xuICAgICAgICB0YWdzW3RhZy5uYW1lXSA9IHRhZy52YWx1ZTtcblxuICAgICAgICBCcm93c2VyV2luZG93UmVnaXN0cnkudGFnKHJlc3VsdC5pZCwgdGFncyk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cblxufVxuXG5leHBvcnQgdHlwZSBCcm93c2VyV2luZG93RmFjdG9yeSA9ICgpID0+IFByb21pc2U8QnJvd3NlcldpbmRvdz47XG4iXX0=