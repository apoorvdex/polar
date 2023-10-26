"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const Logger_1 = require("./web/js/logger/Logger");
const MainApp_1 = require("./web/js/apps/main/MainApp");
const Cmdline_1 = require("./web/js/electron/Cmdline");
const Logging_1 = require("./web/js/logger/Logging");
const Datastores_1 = require("./web/js/datastore/Datastores");
const process_1 = __importDefault(require("process"));
const LazyWriteDatastore_1 = require("./web/js/datastore/LazyWriteDatastore");
const hasSingleInstanceLock = electron_1.app.requestSingleInstanceLock();
if (process_1.default.env.POLAR_DISABLE_HARDWARE_ACCELERATION === 'true') {
    console.log("Disabling hardware acceleration");
    electron_1.app.disableHardwareAcceleration();
}
if (!hasSingleInstanceLock) {
    console.error("Quiting.  App is single instance.");
    electron_1.app.quit();
}
function launch() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Running with app path: " + electron_1.app.getAppPath());
        console.log("Running with CWD: " + process_1.default.cwd());
        console.log("Running with node version: " + process_1.default.version);
        const log = Logger_1.Logger.create();
        const datastore = new LazyWriteDatastore_1.LazyWriteDatastore(Datastores_1.Datastores.create());
        yield datastore.init();
        yield Logging_1.Logging.init();
        const mainApp = new MainApp_1.MainApp(datastore);
        const { mainAppController } = yield mainApp.start();
        const fileArg = Cmdline_1.Cmdline.getDocArg(process_1.default.argv);
        if (fileArg) {
            log.info("Opening file given on the command line: " + fileArg);
            yield mainAppController.handleLoadDoc(fileArg);
        }
    });
}
electron_1.app.on('ready', () => __awaiter(this, void 0, void 0, function* () {
    launch().catch(err => console.error("Unable to launch app: ", err));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUE2QjtBQUM3QixtREFBOEM7QUFDOUMsd0RBQW1EO0FBQ25ELHVEQUFrRDtBQUNsRCxxREFBZ0Q7QUFDaEQsOERBQXlEO0FBQ3pELHNEQUE4QjtBQUM5Qiw4RUFBeUU7QUFFekUsTUFBTSxxQkFBcUIsR0FBRyxjQUFHLENBQUMseUJBQXlCLEVBQUUsQ0FBQztBQUU5RCxJQUFJLGlCQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxLQUFLLE1BQU0sRUFBRTtJQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7SUFDL0MsY0FBRyxDQUFDLDJCQUEyQixFQUFFLENBQUM7Q0FDckM7QUFFRCxJQUFJLENBQUMscUJBQXFCLEVBQUU7SUFDeEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0lBQ25ELGNBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztDQUNkO0FBRUQsU0FBZSxNQUFNOztRQUVqQixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixHQUFHLGNBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEdBQUcsaUJBQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEdBQUcsaUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU3RCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFNUIsTUFBTSxTQUFTLEdBQUcsSUFBSSx1Q0FBa0IsQ0FBQyx1QkFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFFOUQsTUFBTSxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFdkIsTUFBTSxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXJCLE1BQU0sT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QyxNQUFNLEVBQUMsaUJBQWlCLEVBQUMsR0FBRyxNQUFNLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVsRCxNQUFNLE9BQU8sR0FBRyxpQkFBTyxDQUFDLFNBQVMsQ0FBQyxpQkFBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWhELElBQUksT0FBTyxFQUFFO1lBQ1QsR0FBRyxDQUFDLElBQUksQ0FBQywwQ0FBMEMsR0FBRyxPQUFPLENBQUMsQ0FBQztZQUMvRCxNQUFNLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNsRDtJQUVMLENBQUM7Q0FBQTtBQUVELGNBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQVMsRUFBRTtJQUV2QixNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLHdCQUF3QixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFFeEUsQ0FBQyxDQUFBLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXBwfSBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi93ZWIvanMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge01haW5BcHB9IGZyb20gJy4vd2ViL2pzL2FwcHMvbWFpbi9NYWluQXBwJztcbmltcG9ydCB7Q21kbGluZX0gZnJvbSAnLi93ZWIvanMvZWxlY3Ryb24vQ21kbGluZSc7XG5pbXBvcnQge0xvZ2dpbmd9IGZyb20gJy4vd2ViL2pzL2xvZ2dlci9Mb2dnaW5nJztcbmltcG9ydCB7RGF0YXN0b3Jlc30gZnJvbSAnLi93ZWIvanMvZGF0YXN0b3JlL0RhdGFzdG9yZXMnO1xuaW1wb3J0IHByb2Nlc3MgZnJvbSAncHJvY2Vzcyc7XG5pbXBvcnQge0xhenlXcml0ZURhdGFzdG9yZX0gZnJvbSAnLi93ZWIvanMvZGF0YXN0b3JlL0xhenlXcml0ZURhdGFzdG9yZSc7XG5cbmNvbnN0IGhhc1NpbmdsZUluc3RhbmNlTG9jayA9IGFwcC5yZXF1ZXN0U2luZ2xlSW5zdGFuY2VMb2NrKCk7XG5cbmlmIChwcm9jZXNzLmVudi5QT0xBUl9ESVNBQkxFX0hBUkRXQVJFX0FDQ0VMRVJBVElPTiA9PT0gJ3RydWUnKSB7XG4gICAgY29uc29sZS5sb2coXCJEaXNhYmxpbmcgaGFyZHdhcmUgYWNjZWxlcmF0aW9uXCIpO1xuICAgIGFwcC5kaXNhYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24oKTtcbn1cblxuaWYgKCFoYXNTaW5nbGVJbnN0YW5jZUxvY2spIHtcbiAgICBjb25zb2xlLmVycm9yKFwiUXVpdGluZy4gIEFwcCBpcyBzaW5nbGUgaW5zdGFuY2UuXCIpO1xuICAgIGFwcC5xdWl0KCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxhdW5jaCgpIHtcblxuICAgIGNvbnNvbGUubG9nKFwiUnVubmluZyB3aXRoIGFwcCBwYXRoOiBcIiArIGFwcC5nZXRBcHBQYXRoKCkpO1xuICAgIGNvbnNvbGUubG9nKFwiUnVubmluZyB3aXRoIENXRDogXCIgKyBwcm9jZXNzLmN3ZCgpKTtcbiAgICBjb25zb2xlLmxvZyhcIlJ1bm5pbmcgd2l0aCBub2RlIHZlcnNpb246IFwiICsgcHJvY2Vzcy52ZXJzaW9uKTtcblxuICAgIGNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuICAgIGNvbnN0IGRhdGFzdG9yZSA9IG5ldyBMYXp5V3JpdGVEYXRhc3RvcmUoRGF0YXN0b3Jlcy5jcmVhdGUoKSk7XG5cbiAgICBhd2FpdCBkYXRhc3RvcmUuaW5pdCgpO1xuXG4gICAgYXdhaXQgTG9nZ2luZy5pbml0KCk7XG5cbiAgICBjb25zdCBtYWluQXBwID0gbmV3IE1haW5BcHAoZGF0YXN0b3JlKTtcbiAgICBjb25zdCB7bWFpbkFwcENvbnRyb2xsZXJ9ID0gYXdhaXQgbWFpbkFwcC5zdGFydCgpO1xuXG4gICAgY29uc3QgZmlsZUFyZyA9IENtZGxpbmUuZ2V0RG9jQXJnKHByb2Nlc3MuYXJndik7XG5cbiAgICBpZiAoZmlsZUFyZykge1xuICAgICAgICBsb2cuaW5mbyhcIk9wZW5pbmcgZmlsZSBnaXZlbiBvbiB0aGUgY29tbWFuZCBsaW5lOiBcIiArIGZpbGVBcmcpO1xuICAgICAgICBhd2FpdCBtYWluQXBwQ29udHJvbGxlci5oYW5kbGVMb2FkRG9jKGZpbGVBcmcpO1xuICAgIH1cblxufVxuXG5hcHAub24oJ3JlYWR5JywgYXN5bmMgKCkgPT4ge1xuXG4gICAgbGF1bmNoKCkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoXCJVbmFibGUgdG8gbGF1bmNoIGFwcDogXCIsIGVycikpO1xuXG59KTtcbiJdfQ==