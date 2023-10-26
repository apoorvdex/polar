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
const Logger_1 = require("../web/js/logger/Logger");
const BrowserProfiles_1 = require("../web/js/capture/BrowserProfiles");
const DiskDatastore_1 = require("../web/js/datastore/DiskDatastore");
const Args_1 = require("../web/js/electron/capture/Args");
const Capture_1 = require("../web/js/capture/Capture");
const BrowserRegistry_1 = __importDefault(require("../web/js/capture/BrowserRegistry"));
const Cmdline_1 = require("../web/js/electron/Cmdline");
const electron = require('electron');
const app = electron.app;
const log = Logger_1.Logger.create();
const diskDatastore = new DiskDatastore_1.DiskDatastore();
const args = Args_1.Args.parse(process.argv);
const browser = BrowserRegistry_1.default[args.browser];
if (!browser) {
    throw new Error("No browser defined for: " + args.browser);
}
app.on('ready', function () {
    (() => __awaiter(this, void 0, void 0, function* () {
        yield diskDatastore.init();
        let url = Cmdline_1.Cmdline.getURLArg(process.argv);
        if (!url) {
            if (!url) {
                console.warn("URL is required.");
                app.quit();
                return;
            }
            url = "https://www.example.com";
        }
        log.info("Using browser profile: " + args.profile);
        const browserProfile = BrowserProfiles_1.BrowserProfiles.toBrowserProfile(browser, args.profile);
        browserProfile.navigation.navigated.dispatchEvent({ link: url });
        browserProfile.navigation.captured.dispatchEvent({});
        console.log("Going to capture URL: " + url);
        const captureOpts = {
            amp: args.amp
        };
        const capture = new Capture_1.Capture(browserProfile, captureOpts);
        yield capture.start();
        if (args.quit) {
            log.info("Capture finished.  Quitting now");
            app.quit();
        }
        else {
            log.info("Not quitting (yielding to --no-quit=true).");
        }
    }))().catch(err => console.error(err));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwdHVyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhcHR1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUErQztBQUMvQyx1RUFBa0U7QUFDbEUscUVBQWdFO0FBQ2hFLDBEQUFxRDtBQUNyRCx1REFBa0Q7QUFDbEQsd0ZBQWdFO0FBQ2hFLHdEQUFtRDtBQUVuRCxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDckMsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQztBQUd6QixNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBTSxhQUFhLEdBQUcsSUFBSSw2QkFBYSxFQUFFLENBQUM7QUFFMUMsTUFBTSxJQUFJLEdBQUcsV0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFdEMsTUFBTSxPQUFPLEdBQUcseUJBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFOUMsSUFBSSxDQUFFLE9BQU8sRUFBRTtJQUNYLE1BQU0sSUFBSSxLQUFLLENBQUMsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0NBQzlEO0FBRUQsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7SUFFWixDQUFDLEdBQVMsRUFBRTtRQUVSLE1BQU0sYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1FBSzNCLElBQUksR0FBRyxHQUFHLGlCQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUxQyxJQUFJLENBQUUsR0FBRyxFQUFFO1lBRVAsSUFBSSxDQUFFLEdBQUcsRUFBRTtnQkFDUCxPQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7Z0JBQ2pDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDWCxPQUFPO2FBQ1Y7WUFFRCxHQUFHLEdBQUcseUJBQXlCLENBQUM7U0FFbkM7UUFFRCxHQUFHLENBQUMsSUFBSSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVuRCxNQUFNLGNBQWMsR0FBRyxpQ0FBZSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFHL0UsY0FBYyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7UUFDL0QsY0FBYyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRXJELE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFHNUMsTUFBTSxXQUFXLEdBQUc7WUFDaEIsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO1NBQ2hCLENBQUM7UUFFRixNQUFNLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsY0FBYyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRXpELE1BQU0sT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXRCLElBQUcsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNWLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUNBQWlDLENBQUMsQ0FBQztZQUM1QyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDZDthQUFNO1lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFBO1NBQ3pEO0lBRUwsQ0FBQyxDQUFBLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUUxQyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi93ZWIvanMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0Jyb3dzZXJQcm9maWxlc30gZnJvbSAnLi4vd2ViL2pzL2NhcHR1cmUvQnJvd3NlclByb2ZpbGVzJztcbmltcG9ydCB7RGlza0RhdGFzdG9yZX0gZnJvbSAnLi4vd2ViL2pzL2RhdGFzdG9yZS9EaXNrRGF0YXN0b3JlJztcbmltcG9ydCB7QXJnc30gZnJvbSAnLi4vd2ViL2pzL2VsZWN0cm9uL2NhcHR1cmUvQXJncyc7XG5pbXBvcnQge0NhcHR1cmV9IGZyb20gJy4uL3dlYi9qcy9jYXB0dXJlL0NhcHR1cmUnO1xuaW1wb3J0IEJyb3dzZXJSZWdpc3RyeSBmcm9tICcuLi93ZWIvanMvY2FwdHVyZS9Ccm93c2VyUmVnaXN0cnknO1xuaW1wb3J0IHtDbWRsaW5lfSBmcm9tICcuLi93ZWIvanMvZWxlY3Ryb24vQ21kbGluZSc7XG5cbmNvbnN0IGVsZWN0cm9uID0gcmVxdWlyZSgnZWxlY3Ryb24nKTtcbmNvbnN0IGFwcCA9IGVsZWN0cm9uLmFwcDtcblxuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmNvbnN0IGRpc2tEYXRhc3RvcmUgPSBuZXcgRGlza0RhdGFzdG9yZSgpO1xuXG5jb25zdCBhcmdzID0gQXJncy5wYXJzZShwcm9jZXNzLmFyZ3YpO1xuXG5jb25zdCBicm93c2VyID0gQnJvd3NlclJlZ2lzdHJ5W2FyZ3MuYnJvd3Nlcl07XG5cbmlmICghIGJyb3dzZXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBicm93c2VyIGRlZmluZWQgZm9yOiBcIiArIGFyZ3MuYnJvd3Nlcik7XG59XG5cbmFwcC5vbigncmVhZHknLCBmdW5jdGlvbigpIHtcblxuICAgIChhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgYXdhaXQgZGlza0RhdGFzdG9yZS5pbml0KCk7XG5cbiAgICAgICAgLy8gVE9ETyBkb24ndCB1c2UgZGlyZWN0b3J5IGxvZ2dpbmcgbm93IGFzIGl0IGlzIGJyb2tlbi5cbiAgICAgICAgLy8gYXdhaXQgTG9nZ2VyLmluaXQoZGlza0RhdGFzdG9yZS5sb2dzRGlyKTtcblxuICAgICAgICBsZXQgdXJsID0gQ21kbGluZS5nZXRVUkxBcmcocHJvY2Vzcy5hcmd2KTtcblxuICAgICAgICBpZiAoISB1cmwpIHtcblxuICAgICAgICAgICAgaWYgKCEgdXJsKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiVVJMIGlzIHJlcXVpcmVkLlwiKTtcbiAgICAgICAgICAgICAgICBhcHAucXVpdCgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXJsID0gXCJodHRwczovL3d3dy5leGFtcGxlLmNvbVwiO1xuXG4gICAgICAgIH1cblxuICAgICAgICBsb2cuaW5mbyhcIlVzaW5nIGJyb3dzZXIgcHJvZmlsZTogXCIgKyBhcmdzLnByb2ZpbGUpO1xuXG4gICAgICAgIGNvbnN0IGJyb3dzZXJQcm9maWxlID0gQnJvd3NlclByb2ZpbGVzLnRvQnJvd3NlclByb2ZpbGUoYnJvd3NlciwgYXJncy5wcm9maWxlKTtcblxuICAgICAgICAvLyB3ZSBhbHJlYWR5IGtub3cgYWxsIHRoZSBpbnB1dHMgaGVyZS4uLlxuICAgICAgICBicm93c2VyUHJvZmlsZS5uYXZpZ2F0aW9uLm5hdmlnYXRlZC5kaXNwYXRjaEV2ZW50KHtsaW5rOiB1cmx9KTtcbiAgICAgICAgYnJvd3NlclByb2ZpbGUubmF2aWdhdGlvbi5jYXB0dXJlZC5kaXNwYXRjaEV2ZW50KHt9KTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIkdvaW5nIHRvIGNhcHR1cmUgVVJMOiBcIiArIHVybCk7XG5cbiAgICAgICAgLy8gVE9ETzogc3luYyB1cCBhcmdzICsgQ2FwdHVyZU9wdHNcbiAgICAgICAgY29uc3QgY2FwdHVyZU9wdHMgPSB7XG4gICAgICAgICAgICBhbXA6IGFyZ3MuYW1wXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgY2FwdHVyZSA9IG5ldyBDYXB0dXJlKGJyb3dzZXJQcm9maWxlLCBjYXB0dXJlT3B0cyk7XG5cbiAgICAgICAgYXdhaXQgY2FwdHVyZS5zdGFydCgpO1xuXG4gICAgICAgIGlmKGFyZ3MucXVpdCkge1xuICAgICAgICAgICAgbG9nLmluZm8oXCJDYXB0dXJlIGZpbmlzaGVkLiAgUXVpdHRpbmcgbm93XCIpO1xuICAgICAgICAgICAgYXBwLnF1aXQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvZy5pbmZvKFwiTm90IHF1aXR0aW5nICh5aWVsZGluZyB0byAtLW5vLXF1aXQ9dHJ1ZSkuXCIpXG4gICAgICAgIH1cblxuICAgIH0pKCkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG5cbn0pO1xuIl19