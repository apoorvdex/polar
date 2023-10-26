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
const Model_1 = require("../model/Model");
const ViewerFactory_1 = require("../viewer/ViewerFactory");
const WebController_1 = require("../controller/WebController");
const Logger_1 = require("../logger/Logger");
const Logging_1 = require("../logger/Logging");
const WebView_1 = require("../view/WebView");
const PagemarkView_1 = require("../pagemarks/view/PagemarkView");
const TextHighlightView2_1 = require("../highlights/text/view/TextHighlightView2");
const AnnotationSidebarService_1 = require("../annotation_sidebar/AnnotationSidebarService");
const CommentsController_1 = require("../comments/CommentsController");
const AnnotationBarService_1 = require("../ui/annotationbar/AnnotationBarService");
const AreaHighlightView_1 = require("../highlights/area/view/AreaHighlightView");
const AppRuntime_1 = require("../AppRuntime");
const log = Logger_1.Logger.create();
class Launcher {
    constructor(persistenceLayerFactory) {
        this.persistenceLayerFactory = persistenceLayerFactory;
    }
    trigger() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Running with app runtime: " + AppRuntime_1.AppRuntime.get());
            const persistenceLayer = yield this.persistenceLayerFactory();
            yield persistenceLayer.init();
            yield Logging_1.Logging.init();
            const model = new Model_1.Model(persistenceLayer);
            new PagemarkView_1.PagemarkView(model).start();
            new WebView_1.WebView(model, persistenceLayer.datastore.getPrefs()).start();
            new TextHighlightView2_1.TextHighlightView2(model).start();
            new AreaHighlightView_1.AreaHighlightView(model).start();
            new AnnotationSidebarService_1.AnnotationSidebarService(model).start();
            new CommentsController_1.CommentsController(model).start();
            new AnnotationBarService_1.AnnotationBarService(model).start();
            const viewer = ViewerFactory_1.ViewerFactory.create(model);
            yield new WebController_1.WebController(model, viewer).start();
            viewer.start();
        });
    }
    launch() {
        return __awaiter(this, void 0, void 0, function* () {
            if (document.readyState === "interactive" || document.readyState === "complete") {
                log.info("Already completed loading.");
                yield this.trigger();
            }
            else {
                log.info("Waiting for DOM content to load");
                document.addEventListener('DOMContentLoaded', () => {
                    this.trigger()
                        .catch(err => log.error("Failed to trigger: ", err));
                }, true);
            }
        });
    }
}
exports.Launcher = Launcher;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGF1bmNoZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJMYXVuY2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMENBQXFDO0FBQ3JDLDJEQUFzRDtBQUN0RCwrREFBMEQ7QUFDMUQsNkNBQXdDO0FBQ3hDLCtDQUEwQztBQUMxQyw2Q0FBd0M7QUFDeEMsaUVBQTREO0FBRTVELG1GQUE4RTtBQUM5RSw2RkFBd0Y7QUFFeEYsdUVBQWtFO0FBQ2xFLG1GQUE4RTtBQUM5RSxpRkFBNEU7QUFDNUUsOENBQXlDO0FBRXpDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQU81QixNQUFhLFFBQVE7SUFRakIsWUFBWSx1QkFBZ0Q7UUFDeEQsSUFBSSxDQUFDLHVCQUF1QixHQUFHLHVCQUF1QixDQUFDO0lBQzNELENBQUM7SUFLWSxPQUFPOztZQUVoQixPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixHQUFHLHVCQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUU3RCxNQUFNLGdCQUFnQixHQUFHLE1BQU0sSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7WUFDOUQsTUFBTSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUU5QixNQUFNLGlCQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFckIsTUFBTSxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUUxQyxJQUFJLDJCQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDaEMsSUFBSSxpQkFBTyxDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNsRSxJQUFJLHVDQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3RDLElBQUkscUNBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDckMsSUFBSSxtREFBd0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQU01QyxJQUFJLHVDQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3RDLElBQUksMkNBQW9CLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFeEMsTUFBTSxNQUFNLEdBQUcsNkJBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0MsTUFBTSxJQUFJLDZCQUFhLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBRS9DLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVuQixDQUFDO0tBQUE7SUFFWSxNQUFNOztZQUVmLElBQUksUUFBUSxDQUFDLFVBQVUsS0FBSyxhQUFhLElBQUksUUFBUSxDQUFDLFVBQVUsS0FBSyxVQUFVLEVBQUU7Z0JBRTdFLEdBQUcsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQztnQkFDdkMsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7YUFFeEI7aUJBQU07Z0JBRUgsR0FBRyxDQUFDLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO2dCQUU1QyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO29CQUUvQyxJQUFJLENBQUMsT0FBTyxFQUFFO3lCQUNULEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMscUJBQXFCLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFFN0QsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ1o7UUFFTCxDQUFDO0tBQUE7Q0FFSjtBQW5FRCw0QkFtRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01vZGVsfSBmcm9tICcuLi9tb2RlbC9Nb2RlbCc7XG5pbXBvcnQge1ZpZXdlckZhY3Rvcnl9IGZyb20gJy4uL3ZpZXdlci9WaWV3ZXJGYWN0b3J5JztcbmltcG9ydCB7V2ViQ29udHJvbGxlcn0gZnJvbSAnLi4vY29udHJvbGxlci9XZWJDb250cm9sbGVyJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7TG9nZ2luZ30gZnJvbSAnLi4vbG9nZ2VyL0xvZ2dpbmcnO1xuaW1wb3J0IHtXZWJWaWV3fSBmcm9tICcuLi92aWV3L1dlYlZpZXcnO1xuaW1wb3J0IHtQYWdlbWFya1ZpZXd9IGZyb20gJy4uL3BhZ2VtYXJrcy92aWV3L1BhZ2VtYXJrVmlldyc7XG5pbXBvcnQge0xpc3RlbmFibGVQZXJzaXN0ZW5jZUxheWVyfSBmcm9tICcuLi9kYXRhc3RvcmUvTGlzdGVuYWJsZVBlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtUZXh0SGlnaGxpZ2h0VmlldzJ9IGZyb20gJy4uL2hpZ2hsaWdodHMvdGV4dC92aWV3L1RleHRIaWdobGlnaHRWaWV3Mic7XG5pbXBvcnQge0Fubm90YXRpb25TaWRlYmFyU2VydmljZX0gZnJvbSAnLi4vYW5ub3RhdGlvbl9zaWRlYmFyL0Fubm90YXRpb25TaWRlYmFyU2VydmljZSc7XG5pbXBvcnQge1BhZ2VTZWFyY2hDb250cm9sbGVyfSBmcm9tICcuLi9wYWdlX3NlYXJjaC9QYWdlU2VhcmNoQ29udHJvbGxlcic7XG5pbXBvcnQge0NvbW1lbnRzQ29udHJvbGxlcn0gZnJvbSAnLi4vY29tbWVudHMvQ29tbWVudHNDb250cm9sbGVyJztcbmltcG9ydCB7QW5ub3RhdGlvbkJhclNlcnZpY2V9IGZyb20gJy4uL3VpL2Fubm90YXRpb25iYXIvQW5ub3RhdGlvbkJhclNlcnZpY2UnO1xuaW1wb3J0IHtBcmVhSGlnaGxpZ2h0Vmlld30gZnJvbSBcIi4uL2hpZ2hsaWdodHMvYXJlYS92aWV3L0FyZWFIaWdobGlnaHRWaWV3XCI7XG5pbXBvcnQge0FwcFJ1bnRpbWV9IGZyb20gJy4uL0FwcFJ1bnRpbWUnO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbi8qKlxuICogQmFzaWMgY2xhc3MgZm9yIGNvbm5lY3RpbmcgZXZlbnQgbGlzdGVuZXJzIGFuZCB0aGVuIHJ1bm5pbmcgYSBsYXVuY2hGdW5jdGlvblxuICogb25jZSB0aGUgYnJvd3NlciBpcyByZWFkeS5cbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBMYXVuY2hlciB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHBlcnNpc3RlbmNlTGF5ZXJGYWN0b3J5OiBQZXJzaXN0ZW5jZUxheWVyRmFjdG9yeTtcblxuICAgIC8qKlxuICAgICAqIExhdW5jaCB0aGUgYXBwIHdpdGggdGhlIGdpdmVuIGxhdW5jaCBmdW5jdGlvbi5cbiAgICAgKlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHBlcnNpc3RlbmNlTGF5ZXJGYWN0b3J5OiBQZXJzaXN0ZW5jZUxheWVyRmFjdG9yeSkge1xuICAgICAgICB0aGlzLnBlcnNpc3RlbmNlTGF5ZXJGYWN0b3J5ID0gcGVyc2lzdGVuY2VMYXllckZhY3Rvcnk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlciB0aGUgbGF1bmNoIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyB0cmlnZ2VyKCkge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUnVubmluZyB3aXRoIGFwcCBydW50aW1lOiBcIiArIEFwcFJ1bnRpbWUuZ2V0KCkpO1xuXG4gICAgICAgIGNvbnN0IHBlcnNpc3RlbmNlTGF5ZXIgPSBhd2FpdCB0aGlzLnBlcnNpc3RlbmNlTGF5ZXJGYWN0b3J5KCk7XG4gICAgICAgIGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXIuaW5pdCgpO1xuXG4gICAgICAgIGF3YWl0IExvZ2dpbmcuaW5pdCgpO1xuXG4gICAgICAgIGNvbnN0IG1vZGVsID0gbmV3IE1vZGVsKHBlcnNpc3RlbmNlTGF5ZXIpO1xuXG4gICAgICAgIG5ldyBQYWdlbWFya1ZpZXcobW9kZWwpLnN0YXJ0KCk7XG4gICAgICAgIG5ldyBXZWJWaWV3KG1vZGVsLCBwZXJzaXN0ZW5jZUxheWVyLmRhdGFzdG9yZS5nZXRQcmVmcygpKS5zdGFydCgpO1xuICAgICAgICBuZXcgVGV4dEhpZ2hsaWdodFZpZXcyKG1vZGVsKS5zdGFydCgpO1xuICAgICAgICBuZXcgQXJlYUhpZ2hsaWdodFZpZXcobW9kZWwpLnN0YXJ0KCk7XG4gICAgICAgIG5ldyBBbm5vdGF0aW9uU2lkZWJhclNlcnZpY2UobW9kZWwpLnN0YXJ0KCk7XG5cbiAgICAgICAgLy8gaWYgKEFwcFJ1bnRpbWUuaXNFbGVjdHJvbigpKSB7XG4gICAgICAgIC8vICAgICBuZXcgUGFnZVNlYXJjaENvbnRyb2xsZXIobW9kZWwpLnN0YXJ0KCk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICBuZXcgQ29tbWVudHNDb250cm9sbGVyKG1vZGVsKS5zdGFydCgpO1xuICAgICAgICBuZXcgQW5ub3RhdGlvbkJhclNlcnZpY2UobW9kZWwpLnN0YXJ0KCk7XG5cbiAgICAgICAgY29uc3Qgdmlld2VyID0gVmlld2VyRmFjdG9yeS5jcmVhdGUobW9kZWwpO1xuICAgICAgICBhd2FpdCBuZXcgV2ViQ29udHJvbGxlcihtb2RlbCwgdmlld2VyKS5zdGFydCgpO1xuXG4gICAgICAgIHZpZXdlci5zdGFydCgpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGxhdW5jaCgpIHtcblxuICAgICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJpbnRlcmFjdGl2ZVwiIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIikge1xuXG4gICAgICAgICAgICBsb2cuaW5mbyhcIkFscmVhZHkgY29tcGxldGVkIGxvYWRpbmcuXCIpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy50cmlnZ2VyKCk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgbG9nLmluZm8oXCJXYWl0aW5nIGZvciBET00gY29udGVudCB0byBsb2FkXCIpO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKClcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJGYWlsZWQgdG8gdHJpZ2dlcjogXCIsIGVycikpO1xuXG4gICAgICAgICAgICB9LCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cbmV4cG9ydCB0eXBlIFBlcnNpc3RlbmNlTGF5ZXJGYWN0b3J5ID0gKCkgPT4gUHJvbWlzZTxMaXN0ZW5hYmxlUGVyc2lzdGVuY2VMYXllcj47XG4iXX0=