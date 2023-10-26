"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const Logger_1 = require("../../../../web/js/logger/Logger");
const PrioritizedComponentManager_1 = require("../../../../web/js/ui/prioritized/PrioritizedComponentManager");
const WhatsNewRef_1 = require("./splashes/whats_new/WhatsNewRef");
const SurveyRef_1 = require("./splashes/survey/SurveyRef");
const PremiumRef_1 = require("./splashes/premium/PremiumRef");
const ChromeExtensionReviewRef_1 = require("./splashes/chrome_extension_review/ChromeExtensionReviewRef");
const TimeDurations_1 = require("../../../../web/js/util/TimeDurations");
const AlternativeToReviewRef_1 = require("./splashes/alternativeto_review/AlternativeToReviewRef");
const log = Logger_1.Logger.create();
const prioritizedComponentRefs = [
    new WhatsNewRef_1.WhatsNewRef(),
    new PremiumRef_1.PremiumRef(),
    new SurveyRef_1.SurveyRef(),
    new ChromeExtensionReviewRef_1.ChromeExtensionReviewRef(),
    new AlternativeToReviewRef_1.AlternativeToReviewRef()
];
class PrioritizedSplashes extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            lastUpdated: 0
        };
        this.doUpdate();
    }
    render() {
        if (this.state.datastoreOverview) {
            return (React.createElement(PrioritizedComponentManager_1.PrioritizedComponentManager, { prioritizedComponentRefs: prioritizedComponentRefs, datastoreOverview: this.state.datastoreOverview }));
        }
        else {
            return React.createElement("div", null);
        }
    }
    doUpdate() {
        this.props.persistenceLayerManager.addEventListener(event => {
            if (event.state === 'changed') {
                const persistenceLayer = this.props.persistenceLayerManager.get();
                const datastore = persistenceLayer.datastore;
                datastore.overview()
                    .then(datastoreOverview => {
                    if (datastoreOverview) {
                        this.setState({
                            datastoreOverview,
                            lastUpdated: Date.now()
                        });
                        log.info("Datastore overview updated");
                    }
                    this.scheduleNextUpdate();
                })
                    .catch(err => {
                    log.error("Unable to get datastore overview: ", err);
                    this.scheduleNextUpdate();
                });
            }
        });
    }
    scheduleNextUpdate() {
        setTimeout(() => this.doUpdate(), TimeDurations_1.TimeDurations.toMillis('15m'));
    }
}
exports.PrioritizedSplashes = PrioritizedSplashes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJpb3JpdGl6ZWRTcGxhc2hlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlByaW9yaXRpemVkU3BsYXNoZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiw2REFBd0Q7QUFDeEQsK0dBQW1JO0FBQ25JLGtFQUE2RDtBQUM3RCwyREFBc0Q7QUFDdEQsOERBQXlEO0FBQ3pELDBHQUFxRztBQUlyRyx5RUFBb0U7QUFDcEUsbUdBQThGO0FBRTlGLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFNLHdCQUF3QixHQUE4QjtJQUV4RCxJQUFJLHlCQUFXLEVBQUU7SUFFakIsSUFBSSx1QkFBVSxFQUFFO0lBQ2hCLElBQUkscUJBQVMsRUFBRTtJQUNmLElBQUksbURBQXdCLEVBQUU7SUFDOUIsSUFBSSwrQ0FBc0IsRUFBRTtDQUMvQixDQUFDO0FBRUYsTUFBYSxtQkFBb0IsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFcEUsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxXQUFXLEVBQUUsQ0FBQztTQUNqQixDQUFDO1FBRUYsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRXBCLENBQUM7SUFFTSxNQUFNO1FBRVQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFO1lBRTlCLE9BQU8sQ0FDSCxvQkFBQyx5REFBMkIsSUFBQyx3QkFBd0IsRUFBRSx3QkFBd0IsRUFDbEQsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyxDQUNsRixDQUFDO1NBRUw7YUFBTTtZQUNILE9BQU8sZ0NBQU0sQ0FBQztTQUNqQjtJQUVMLENBQUM7SUFFTyxRQUFRO1FBRVosSUFBSSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUV4RCxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO2dCQUUzQixNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBRWxFLE1BQU0sU0FBUyxHQUFHLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztnQkFFN0MsU0FBUyxDQUFDLFFBQVEsRUFBRTtxQkFDZixJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFBRTtvQkFFdEIsSUFBSSxpQkFBaUIsRUFBRTt3QkFFbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQzs0QkFDVixpQkFBaUI7NEJBQ2pCLFdBQVcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO3lCQUMxQixDQUFDLENBQUM7d0JBRUgsR0FBRyxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO3FCQUUxQztvQkFFRCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztnQkFFOUIsQ0FBQyxDQUFDO3FCQUNELEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDVCxHQUFHLENBQUMsS0FBSyxDQUFDLG9DQUFvQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUNyRCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztnQkFDOUIsQ0FBQyxDQUFDLENBQUM7YUFFVjtRQUVMLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVPLGtCQUFrQjtRQUd0QixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLDZCQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFckUsQ0FBQztDQUVKO0FBekVELGtEQXlFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge1ByaW9yaXRpemVkQ29tcG9uZW50TWFuYWdlciwgUHJpb3JpdGl6ZWRDb21wb25lbnRSZWZ9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy91aS9wcmlvcml0aXplZC9Qcmlvcml0aXplZENvbXBvbmVudE1hbmFnZXInO1xuaW1wb3J0IHtXaGF0c05ld1JlZn0gZnJvbSAnLi9zcGxhc2hlcy93aGF0c19uZXcvV2hhdHNOZXdSZWYnO1xuaW1wb3J0IHtTdXJ2ZXlSZWZ9IGZyb20gJy4vc3BsYXNoZXMvc3VydmV5L1N1cnZleVJlZic7XG5pbXBvcnQge1ByZW1pdW1SZWZ9IGZyb20gJy4vc3BsYXNoZXMvcHJlbWl1bS9QcmVtaXVtUmVmJztcbmltcG9ydCB7Q2hyb21lRXh0ZW5zaW9uUmV2aWV3UmVmfSBmcm9tICcuL3NwbGFzaGVzL2Nocm9tZV9leHRlbnNpb25fcmV2aWV3L0Nocm9tZUV4dGVuc2lvblJldmlld1JlZic7XG5pbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL1BlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyJztcbmltcG9ydCB7RGF0YXN0b3JlT3ZlcnZpZXd9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy9kYXRhc3RvcmUvRGF0YXN0b3JlJztcbmltcG9ydCB7UHJvdmlkZXIsIFByb3ZpZGVyc30gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL3V0aWwvUHJvdmlkZXJzJztcbmltcG9ydCB7VGltZUR1cmF0aW9uc30gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL3V0aWwvVGltZUR1cmF0aW9ucyc7XG5pbXBvcnQge0FsdGVybmF0aXZlVG9SZXZpZXdSZWZ9IGZyb20gJy4vc3BsYXNoZXMvYWx0ZXJuYXRpdmV0b19yZXZpZXcvQWx0ZXJuYXRpdmVUb1Jldmlld1JlZic7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuY29uc3QgcHJpb3JpdGl6ZWRDb21wb25lbnRSZWZzOiBQcmlvcml0aXplZENvbXBvbmVudFJlZltdID0gW1xuICAgIC8vIG5ldyBKb2luRGlzY29yZFJlZigpLFxuICAgIG5ldyBXaGF0c05ld1JlZigpLFxuICAgIC8vIG5ldyBHaXRodWJTdGFyc1JlZigpLFxuICAgIG5ldyBQcmVtaXVtUmVmKCksXG4gICAgbmV3IFN1cnZleVJlZigpLFxuICAgIG5ldyBDaHJvbWVFeHRlbnNpb25SZXZpZXdSZWYoKSxcbiAgICBuZXcgQWx0ZXJuYXRpdmVUb1Jldmlld1JlZigpXG5dO1xuXG5leHBvcnQgY2xhc3MgUHJpb3JpdGl6ZWRTcGxhc2hlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbGFzdFVwZGF0ZWQ6IDBcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmRvVXBkYXRlKCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmRhdGFzdG9yZU92ZXJ2aWV3KSB7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFByaW9yaXRpemVkQ29tcG9uZW50TWFuYWdlciBwcmlvcml0aXplZENvbXBvbmVudFJlZnM9e3ByaW9yaXRpemVkQ29tcG9uZW50UmVmc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzdG9yZU92ZXJ2aWV3PXt0aGlzLnN0YXRlLmRhdGFzdG9yZU92ZXJ2aWV3fS8+XG4gICAgICAgICAgICApO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gPGRpdi8+O1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGRvVXBkYXRlKCkge1xuXG4gICAgICAgIHRoaXMucHJvcHMucGVyc2lzdGVuY2VMYXllck1hbmFnZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudCA9PiB7XG5cbiAgICAgICAgICAgIGlmIChldmVudC5zdGF0ZSA9PT0gJ2NoYW5nZWQnKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwZXJzaXN0ZW5jZUxheWVyID0gdGhpcy5wcm9wcy5wZXJzaXN0ZW5jZUxheWVyTWFuYWdlci5nZXQoKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFzdG9yZSA9IHBlcnNpc3RlbmNlTGF5ZXIuZGF0YXN0b3JlO1xuXG4gICAgICAgICAgICAgICAgZGF0YXN0b3JlLm92ZXJ2aWV3KClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZGF0YXN0b3JlT3ZlcnZpZXcgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YXN0b3JlT3ZlcnZpZXcpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhc3RvcmVPdmVydmlldyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFVwZGF0ZWQ6IERhdGUubm93KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZy5pbmZvKFwiRGF0YXN0b3JlIG92ZXJ2aWV3IHVwZGF0ZWRcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU5leHRVcGRhdGUoKTtcblxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZy5lcnJvcihcIlVuYWJsZSB0byBnZXQgZGF0YXN0b3JlIG92ZXJ2aWV3OiBcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVOZXh0VXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHNjaGVkdWxlTmV4dFVwZGF0ZSgpIHtcblxuICAgICAgICAvLyBub3cgZG8gYW5vdGhlciB1cGRhdGVcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmRvVXBkYXRlKCksIFRpbWVEdXJhdGlvbnMudG9NaWxsaXMoJzE1bScpKTtcblxuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSBwZXJzaXN0ZW5jZUxheWVyTWFuYWdlcjogUGVyc2lzdGVuY2VMYXllck1hbmFnZXI7XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICAgIHJlYWRvbmx5IGRhdGFzdG9yZU92ZXJ2aWV3PzogRGF0YXN0b3JlT3ZlcnZpZXc7XG4gICAgcmVhZG9ubHkgbGFzdFVwZGF0ZWQ6IG51bWJlcjtcbn1cblxuXG4iXX0=