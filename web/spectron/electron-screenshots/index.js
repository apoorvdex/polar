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
const SpectronMain_1 = require("../../js/test/SpectronMain");
const Promises_1 = require("../../js/util/Promises");
const fs = require('fs');
SpectronMain_1.SpectronMain.run((state) => __awaiter(this, void 0, void 0, function* () {
    state.window.loadFile(__dirname + '/app.html');
    yield Promises_1.Promises.waitFor(5000);
    let rect = {
        x: 0,
        y: 0,
        width: 100,
        height: 1000
    };
    state.window.webContents.capturePage(rect, image => {
        console.log("Capture finished!");
        fs.writeFileSync('test.png', image.toPNG());
    });
    yield state.testResultWriter.write(true);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNkRBQXdEO0FBQ3hELHFEQUFnRDtBQUVoRCxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFekIsMkJBQVksQ0FBQyxHQUFHLENBQUMsQ0FBTSxLQUFLLEVBQUMsRUFBRTtJQUUzQixLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLENBQUM7SUFFL0MsTUFBTSxtQkFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUU3QixJQUFJLElBQUksR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDO1FBQ0osQ0FBQyxFQUFFLENBQUM7UUFDSixLQUFLLEVBQUUsR0FBRztRQUNWLE1BQU0sRUFBRSxJQUFJO0tBQ2YsQ0FBQztJQUVGLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2pDLEVBQUUsQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBRWhELENBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRTdDLENBQUMsQ0FBQSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NwZWN0cm9uTWFpbn0gZnJvbSAnLi4vLi4vanMvdGVzdC9TcGVjdHJvbk1haW4nO1xuaW1wb3J0IHtQcm9taXNlc30gZnJvbSAnLi4vLi4vanMvdXRpbC9Qcm9taXNlcyc7XG5pbXBvcnQgUmVjdGFuZ2xlID0gRWxlY3Ryb24uUmVjdGFuZ2xlO1xuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuXG5TcGVjdHJvbk1haW4ucnVuKGFzeW5jIHN0YXRlID0+IHtcblxuICAgIHN0YXRlLndpbmRvdy5sb2FkRmlsZShfX2Rpcm5hbWUgKyAnL2FwcC5odG1sJyk7XG5cbiAgICBhd2FpdCBQcm9taXNlcy53YWl0Rm9yKDUwMDApO1xuXG4gICAgbGV0IHJlY3QgPSB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgIGhlaWdodDogMTAwMFxuICAgIH07XG5cbiAgICBzdGF0ZS53aW5kb3cud2ViQ29udGVudHMuY2FwdHVyZVBhZ2UocmVjdCwgaW1hZ2UgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNhcHR1cmUgZmluaXNoZWQhXCIpO1xuICAgICAgICBmcy53cml0ZUZpbGVTeW5jKCd0ZXN0LnBuZycsIGltYWdlLnRvUE5HKCkpO1xuXG4gICAgfSk7XG5cbiAgICBhd2FpdCBzdGF0ZS50ZXN0UmVzdWx0V3JpdGVyLndyaXRlKHRydWUpO1xuXG59KTtcbiJdfQ==