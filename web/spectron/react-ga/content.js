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
const SpectronRenderer_1 = require("../../js/test/SpectronRenderer");
const RendererAnalytics_1 = require("../../js/ga/RendererAnalytics");
const react_ga_1 = __importDefault(require("react-ga"));
const universal_analytics_1 = __importDefault(require("universal-analytics"));
SpectronRenderer_1.SpectronRenderer.run(() => __awaiter(this, void 0, void 0, function* () {
    RendererAnalytics_1.RendererAnalytics.event({ category: 'test', action: 'test' });
    RendererAnalytics_1.RendererAnalytics.pageview("/");
    const TRACKING_ID = 'UA-122721184-1';
    react_ga_1.default.initialize(TRACKING_ID, { debug: true });
    react_ga_1.default.pageview("/");
    console.log("Sent analyitics... ");
    const visitor = universal_analytics_1.default(TRACKING_ID);
    visitor.pageview("/").send();
    visitor.event("Event Category", "Event Action").send();
    setTimeout(() => {
        visitor.pageview("/").send();
        console.log("FIXME: sent another pageview;");
        visitor.event("Event Category", "Event Action").send();
    }, 2000);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHFFQUFnRTtBQUNoRSxxRUFBZ0U7QUFDaEUsd0RBQStCO0FBRS9CLDhFQUFxQztBQUVyQyxtQ0FBZ0IsQ0FBQyxHQUFHLENBQUMsR0FBUyxFQUFFO0lBQzVCLHFDQUFpQixDQUFDLEtBQUssQ0FBQyxFQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUE7SUFDM0QscUNBQWlCLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRWhDLE1BQU0sV0FBVyxHQUFHLGdCQUFnQixDQUFDO0lBRXJDLGtCQUFPLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO0lBRS9DLGtCQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRXRCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQTtJQUVsQyxNQUFNLE9BQU8sR0FBRyw2QkFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBRWhDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7SUFFNUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUV0RCxVQUFVLENBQUMsR0FBRyxFQUFFO1FBQ1osT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUE7UUFFNUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUUxRCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFJYixDQUFDLENBQUEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTcGVjdHJvblJlbmRlcmVyfSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uUmVuZGVyZXInO1xuaW1wb3J0IHtSZW5kZXJlckFuYWx5dGljc30gZnJvbSAnLi4vLi4vanMvZ2EvUmVuZGVyZXJBbmFseXRpY3MnO1xuaW1wb3J0IFJlYWN0R0EgZnJvbSAncmVhY3QtZ2EnO1xuXG5pbXBvcnQgdWEgZnJvbSAndW5pdmVyc2FsLWFuYWx5dGljcyc7XG5cblNwZWN0cm9uUmVuZGVyZXIucnVuKGFzeW5jICgpID0+IHtcbiAgICBSZW5kZXJlckFuYWx5dGljcy5ldmVudCh7Y2F0ZWdvcnk6ICd0ZXN0JywgYWN0aW9uOiAndGVzdCd9KVxuICAgIFJlbmRlcmVyQW5hbHl0aWNzLnBhZ2V2aWV3KFwiL1wiKTtcblxuICAgIGNvbnN0IFRSQUNLSU5HX0lEID0gJ1VBLTEyMjcyMTE4NC0xJztcblxuICAgIFJlYWN0R0EuaW5pdGlhbGl6ZShUUkFDS0lOR19JRCwge2RlYnVnOiB0cnVlfSk7XG4gICAgLy8gUmVhY3RHQS5ldmVudChhcmdzLCB0cmFja2VyTmFtZXMpO1xuICAgIFJlYWN0R0EucGFnZXZpZXcoXCIvXCIpO1xuXG4gICAgY29uc29sZS5sb2coXCJTZW50IGFuYWx5aXRpY3MuLi4gXCIpXG5cbiAgICBjb25zdCB2aXNpdG9yID0gdWEoVFJBQ0tJTkdfSUQpO1xuXG4gICAgdmlzaXRvci5wYWdldmlldyhcIi9cIikuc2VuZCgpXG5cbiAgICB2aXNpdG9yLmV2ZW50KFwiRXZlbnQgQ2F0ZWdvcnlcIiwgXCJFdmVudCBBY3Rpb25cIikuc2VuZCgpXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdmlzaXRvci5wYWdldmlldyhcIi9cIikuc2VuZCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkZJWE1FOiBzZW50IGFub3RoZXIgcGFnZXZpZXc7XCIpXG5cbiAgICAgICAgdmlzaXRvci5ldmVudChcIkV2ZW50IENhdGVnb3J5XCIsIFwiRXZlbnQgQWN0aW9uXCIpLnNlbmQoKVxuXG4gICAgfSwgMjAwMCk7XG5cblxuXG59KTtcblxuXG4iXX0=