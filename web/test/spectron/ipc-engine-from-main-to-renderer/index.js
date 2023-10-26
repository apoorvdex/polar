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
const SpectronMain2_1 = require("../../../js/test/SpectronMain2");
const IPCClients_1 = require("../../../js/ipc/handler/IPCClients");
const Promises_1 = require("../../../js/util/Promises");
SpectronMain2_1.SpectronMain2.create().run((state) => __awaiter(this, void 0, void 0, function* () {
    state.window.loadFile(__dirname + '/app.html');
    let ipcClient = IPCClients_1.IPCClients.fromMainToRenderer(state.window);
    yield Promises_1.Promises.waitFor(1000);
    console.log("Executing request ...");
    yield ipcClient.execute('/ping', 'hey');
    console.log("Executing request ...done");
    yield state.testResultWriter.write(true);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsa0VBQTZEO0FBQzdELG1FQUE4RDtBQUM5RCx3REFBbUQ7QUFFbkQsNkJBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBTSxLQUFLLEVBQUMsRUFBRTtJQUlyQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLENBQUM7SUFFL0MsSUFBSSxTQUFTLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFJNUQsTUFBTSxtQkFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUk3QixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFFckMsTUFBTSxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUV4QyxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFFekMsTUFBTSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRTdDLENBQUMsQ0FBQSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NwZWN0cm9uTWFpbjJ9IGZyb20gJy4uLy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb25NYWluMic7XG5pbXBvcnQge0lQQ0NsaWVudHN9IGZyb20gJy4uLy4uLy4uL2pzL2lwYy9oYW5kbGVyL0lQQ0NsaWVudHMnO1xuaW1wb3J0IHtQcm9taXNlc30gZnJvbSAnLi4vLi4vLi4vanMvdXRpbC9Qcm9taXNlcyc7XG5cblNwZWN0cm9uTWFpbjIuY3JlYXRlKCkucnVuKGFzeW5jIHN0YXRlID0+IHtcblxuICAgIC8vIGludm9rZSBhIG1ldGhvZCBvbiB0aGUgcmVuZGVyZXIgYW5kIGdldCB0aGUgcmVzcG9uc2UuLlxuXG4gICAgc3RhdGUud2luZG93LmxvYWRGaWxlKF9fZGlybmFtZSArICcvYXBwLmh0bWwnKTtcblxuICAgIGxldCBpcGNDbGllbnQgPSBJUENDbGllbnRzLmZyb21NYWluVG9SZW5kZXJlcihzdGF0ZS53aW5kb3cpO1xuXG4gICAgLy8gVE9ETyA6IHRoaXMgaXNuJ3QgcmVhbGx5IGEgZ29vZCB0ZXN0IGFuZCB3ZSBzaG91bGQgdXNlIGEgU3luY1BpcGUgdG8gbWFrZVxuICAgIC8vIHN1cmUgYm90aCBzaWRlcyBhcmUgdXAgYW5kIG9ubGluZSBhbmQgY29tbXVuaWNhdGluZy5cbiAgICBhd2FpdCBQcm9taXNlcy53YWl0Rm9yKDEwMDApO1xuXG4gICAgLy9sZXQgaXBjQ2xpZW50ID0gSVBDQ2xpZW50cy5tYWluUHJvY2VzcygpO1xuXG4gICAgY29uc29sZS5sb2coXCJFeGVjdXRpbmcgcmVxdWVzdCAuLi5cIik7XG5cbiAgICBhd2FpdCBpcGNDbGllbnQuZXhlY3V0ZSgnL3BpbmcnLCAnaGV5Jyk7XG5cbiAgICBjb25zb2xlLmxvZyhcIkV4ZWN1dGluZyByZXF1ZXN0IC4uLmRvbmVcIik7XG5cbiAgICBhd2FpdCBzdGF0ZS50ZXN0UmVzdWx0V3JpdGVyLndyaXRlKHRydWUpO1xuXG59KTtcbiJdfQ==