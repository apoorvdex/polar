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
const SpectronRenderer_1 = require("../../../js/test/SpectronRenderer");
const IPCClients_1 = require("../../../js/ipc/handler/IPCClients");
SpectronRenderer_1.SpectronRenderer.run((state) => __awaiter(this, void 0, void 0, function* () {
    let ipcClient = IPCClients_1.IPCClients.rendererProcess();
    console.log("Executing request ...");
    yield ipcClient.execute('/ping', 'hey');
    console.log("Executing request ...done");
    yield state.testResultWriter.write(true);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx3RUFBbUU7QUFDbkUsbUVBQThEO0FBRTlELG1DQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFPLEtBQUssRUFBRSxFQUFFO0lBSWpDLElBQUksU0FBUyxHQUFHLHVCQUFVLENBQUMsZUFBZSxFQUFFLENBQUM7SUFFN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBRXJDLE1BQU0sU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0lBRXpDLE1BQU0sS0FBSyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUU3QyxDQUFDLENBQUEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTcGVjdHJvblJlbmRlcmVyfSBmcm9tICcuLi8uLi8uLi9qcy90ZXN0L1NwZWN0cm9uUmVuZGVyZXInO1xuaW1wb3J0IHtJUENDbGllbnRzfSBmcm9tICcuLi8uLi8uLi9qcy9pcGMvaGFuZGxlci9JUENDbGllbnRzJztcblxuU3BlY3Ryb25SZW5kZXJlci5ydW4oYXN5bmMgKHN0YXRlKSA9PiB7XG5cbiAgICAvLyBpbnZva2UgYSBtZXRob2Qgb24gdGhlIHJlbmRlcmVyIGFuZCBnZXQgdGhlIHJlc3BvbnNlLi5cblxuICAgIGxldCBpcGNDbGllbnQgPSBJUENDbGllbnRzLnJlbmRlcmVyUHJvY2VzcygpO1xuXG4gICAgY29uc29sZS5sb2coXCJFeGVjdXRpbmcgcmVxdWVzdCAuLi5cIik7XG5cbiAgICBhd2FpdCBpcGNDbGllbnQuZXhlY3V0ZSgnL3BpbmcnLCAnaGV5Jyk7XG5cbiAgICBjb25zb2xlLmxvZyhcIkV4ZWN1dGluZyByZXF1ZXN0IC4uLmRvbmVcIik7XG5cbiAgICBhd2FpdCBzdGF0ZS50ZXN0UmVzdWx0V3JpdGVyLndyaXRlKHRydWUpO1xuXG59KTtcbiJdfQ==