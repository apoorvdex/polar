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
const Logger_1 = require("../../../logger/Logger");
const electron_1 = require("electron");
const Functions_1 = require("../../../util/Functions");
const TestResult_1 = require("../renderer/TestResult");
const log = Logger_1.Logger.create();
class MainTestResultWriter {
    constructor(mainWindow) {
        this.mainWindow = mainWindow;
    }
    write(result) {
        return __awaiter(this, void 0, void 0, function* () {
            if (result === null || result === undefined) {
                throw new Error("No result given!");
            }
            log.info("Writing test result: ", result);
            const browserWindows = electron_1.BrowserWindow.getAllWindows();
            for (const browserWindow of browserWindows) {
                const script = Functions_1.Functions.toScript(TestResult_1.TestResult.set, result);
                yield browserWindow.webContents.executeJavaScript(script);
            }
        });
    }
}
exports.MainTestResultWriter = MainTestResultWriter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpblRlc3RSZXN1bHRXcml0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNYWluVGVzdFJlc3VsdFdyaXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBQzlDLHVDQUF1QztBQUV2Qyx1REFBa0Q7QUFDbEQsdURBQWtEO0FBRWxELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUs1QixNQUFhLG9CQUFvQjtJQUs3QixZQUFZLFVBQWtDO1FBQzFDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQ2pDLENBQUM7SUFFWSxLQUFLLENBQUMsTUFBVzs7WUFFMUIsSUFBSSxNQUFNLEtBQUssSUFBSSxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7Z0JBQ3pDLE1BQU0sSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQzthQUN2QztZQUVELEdBQUcsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFFMUMsTUFBTSxjQUFjLEdBQUcsd0JBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUVyRCxLQUFLLE1BQU0sYUFBYSxJQUFJLGNBQWMsRUFBRTtnQkFFeEMsTUFBTSxNQUFNLEdBQUcscUJBQVMsQ0FBQyxRQUFRLENBQUMsdUJBQVUsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBRTFELE1BQU0sYUFBYSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUU3RDtRQUVMLENBQUM7S0FBQTtDQUVKO0FBN0JELG9EQTZCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi8uLi9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7QnJvd3NlcldpbmRvd30gZnJvbSBcImVsZWN0cm9uXCI7XG5pbXBvcnQge1Rlc3RSZXN1bHRXcml0ZXJ9IGZyb20gJy4uL1Rlc3RSZXN1bHRXcml0ZXInO1xuaW1wb3J0IHtGdW5jdGlvbnN9IGZyb20gJy4uLy4uLy4uL3V0aWwvRnVuY3Rpb25zJztcbmltcG9ydCB7VGVzdFJlc3VsdH0gZnJvbSAnLi4vcmVuZGVyZXIvVGVzdFJlc3VsdCc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuLyoqXG4gKiBXcml0ZSBkYXRhIGZyb20gdGhlIG1haW4gRWxlY3Ryb24gcHJvY2Vzcy5cbiAqL1xuZXhwb3J0IGNsYXNzIE1haW5UZXN0UmVzdWx0V3JpdGVyIGltcGxlbWVudHMgVGVzdFJlc3VsdFdyaXRlciB7XG5cbiAgICBwcml2YXRlIG1haW5XaW5kb3c6IEVsZWN0cm9uLkJyb3dzZXJXaW5kb3c7XG5cblxuICAgIGNvbnN0cnVjdG9yKG1haW5XaW5kb3c6IEVsZWN0cm9uLkJyb3dzZXJXaW5kb3cpIHtcbiAgICAgICAgdGhpcy5tYWluV2luZG93ID0gbWFpbldpbmRvdztcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgd3JpdGUocmVzdWx0OiBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsIHx8IHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyByZXN1bHQgZ2l2ZW4hXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbG9nLmluZm8oXCJXcml0aW5nIHRlc3QgcmVzdWx0OiBcIiwgcmVzdWx0KTtcblxuICAgICAgICBjb25zdCBicm93c2VyV2luZG93cyA9IEJyb3dzZXJXaW5kb3cuZ2V0QWxsV2luZG93cygpO1xuXG4gICAgICAgIGZvciAoY29uc3QgYnJvd3NlcldpbmRvdyBvZiBicm93c2VyV2luZG93cykge1xuXG4gICAgICAgICAgICBjb25zdCBzY3JpcHQgPSBGdW5jdGlvbnMudG9TY3JpcHQoVGVzdFJlc3VsdC5zZXQsIHJlc3VsdCk7XG5cbiAgICAgICAgICAgIGF3YWl0IGJyb3dzZXJXaW5kb3cud2ViQ29udGVudHMuZXhlY3V0ZUphdmFTY3JpcHQoc2NyaXB0KTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbn1cbiJdfQ==