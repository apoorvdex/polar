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
const RepositoryApp_1 = require("../../../web/js/apps/repository/RepositoryApp");
const Logging_1 = require("../../../web/js/logger/Logging");
const Logger_1 = require("../../../web/js/logger/Logger");
const log = Logger_1.Logger.create();
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        yield Logging_1.Logging.init();
        yield new RepositoryApp_1.RepositoryApp().start();
    });
}
start().catch(err => log.error("Could not start app: ", err));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlbnRyeS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLGlGQUE0RTtBQUM1RSw0REFBdUQ7QUFDdkQsMERBQXFEO0FBRXJELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixTQUFlLEtBQUs7O1FBRWhCLE1BQU0saUJBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVyQixNQUFNLElBQUksNkJBQWEsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRXRDLENBQUM7Q0FBQTtBQUVELEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7UmVwb3NpdG9yeUFwcH0gZnJvbSAnLi4vLi4vLi4vd2ViL2pzL2FwcHMvcmVwb3NpdG9yeS9SZXBvc2l0b3J5QXBwJztcbmltcG9ydCB7TG9nZ2luZ30gZnJvbSAnLi4vLi4vLi4vd2ViL2pzL2xvZ2dlci9Mb2dnaW5nJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvbG9nZ2VyL0xvZ2dlcic7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuYXN5bmMgZnVuY3Rpb24gc3RhcnQoKSB7XG5cbiAgICBhd2FpdCBMb2dnaW5nLmluaXQoKTtcblxuICAgIGF3YWl0IG5ldyBSZXBvc2l0b3J5QXBwKCkuc3RhcnQoKTtcblxufVxuXG5zdGFydCgpLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJDb3VsZCBub3Qgc3RhcnQgYXBwOiBcIiwgZXJyKSk7XG4iXX0=