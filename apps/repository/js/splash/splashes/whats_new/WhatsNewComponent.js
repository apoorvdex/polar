"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const Version_1 = require("../../../../../../web/js/util/Version");
const Logger_1 = require("../../../../../../web/js/logger/Logger");
const WhatsNewModal_1 = require("./WhatsNewModal");
const ConditionalSetting_1 = require("../../../../../../web/js/ui/util/ConditionalSetting");
const RendererAnalytics_1 = require("../../../../../../web/js/ga/RendererAnalytics");
const semver = __importStar(require("semver"));
const LifecycleToggle_1 = require("../../../../../../web/js/ui/util/LifecycleToggle");
const LifecycleEvents_1 = require("../../../../../../web/js/ui/util/LifecycleEvents");
const log = Logger_1.Logger.create();
class WhatsNewComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.conditionalSetting = new ConditionalSetting_1.ConditionalSetting('polar-whats-new-version');
        this.hide = this.hide.bind(this);
        this.handleVersionState = this.handleVersionState.bind(this);
        this.isNewVersion = this.isNewVersion.bind(this);
        this.state = {
            open: false
        };
    }
    componentDidMount() {
        this.handleVersionState()
            .catch(err => log.error("Unable to read version: ", err));
    }
    render() {
        return (React.createElement(WhatsNewModal_1.WhatsNewModal, { accept: () => this.hide() }));
    }
    hide() {
        this.setState({ open: false });
    }
    handleVersionState() {
        return __awaiter(this, void 0, void 0, function* () {
            const hasTourTerminated = LifecycleToggle_1.LifecycleToggle.isMarked(LifecycleEvents_1.LifecycleEvents.TOUR_TERMINATED);
            const isNewVersion = yield this.isNewVersion();
            if (isNewVersion) {
                RendererAnalytics_1.RendererAnalytics.event({ category: 'app', action: 'whats-new-displayed' });
            }
            const open = isNewVersion && hasTourTerminated;
            this.setState({
                open
            });
        });
    }
    isNewVersion() {
        return __awaiter(this, void 0, void 0, function* () {
            const currentVersion = Version_1.Version.get();
            const result = this.conditionalSetting.accept(value => semver.gt(currentVersion, value.getOrElse('')));
            this.conditionalSetting.set(currentVersion);
            return result;
        });
    }
}
exports.WhatsNewComponent = WhatsNewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2hhdHNOZXdDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJXaGF0c05ld0NvbXBvbmVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsbUVBQThEO0FBQzlELG1FQUE4RDtBQUM5RCxtREFBOEM7QUFDOUMsNEZBQXVGO0FBQ3ZGLHFGQUFnRjtBQUNoRiwrQ0FBaUM7QUFDakMsc0ZBQWlGO0FBQ2pGLHNGQUFpRjtBQUVqRixNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFLNUIsTUFBYSxpQkFBa0IsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFJbEUsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBSFQsdUJBQWtCLEdBQUcsSUFBSSx1Q0FBa0IsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBS3BGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFakMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVqRCxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsSUFBSSxFQUFFLEtBQUs7U0FDZCxDQUFDO0lBRU4sQ0FBQztJQUVNLGlCQUFpQjtRQUVwQixJQUFJLENBQUMsa0JBQWtCLEVBQUU7YUFDcEIsS0FBSyxDQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQywwQkFBMEIsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRW5FLENBQUM7SUFFTSxNQUFNO1FBR1QsT0FBTyxDQUNILG9CQUFDLDZCQUFhLElBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUM5QyxDQUFDO0lBQ04sQ0FBQztJQUVPLElBQUk7UUFDUixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVhLGtCQUFrQjs7WUFFNUIsTUFBTSxpQkFBaUIsR0FDbkIsaUNBQWUsQ0FBQyxRQUFRLENBQUMsaUNBQWUsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUU5RCxNQUFNLFlBQVksR0FBRyxNQUFNLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUUvQyxJQUFJLFlBQVksRUFBRTtnQkFDZCxxQ0FBaUIsQ0FBQyxLQUFLLENBQUMsRUFBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxxQkFBcUIsRUFBQyxDQUFDLENBQUM7YUFDN0U7WUFFRCxNQUFNLElBQUksR0FBRyxZQUFZLElBQUksaUJBQWlCLENBQUM7WUFFL0MsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDVixJQUFJO2FBQ1AsQ0FBQyxDQUFDO1FBRVAsQ0FBQztLQUFBO0lBRWEsWUFBWTs7WUFFdEIsTUFBTSxjQUFjLEdBQUcsaUJBQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUVyQyxNQUFNLE1BQU0sR0FDUixJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFFLENBQUM7WUFFN0YsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUU1QyxPQUFPLE1BQU0sQ0FBQztRQUVsQixDQUFDO0tBQUE7Q0FFSjtBQXJFRCw4Q0FxRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1ZlcnNpb259IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3dlYi9qcy91dGlsL1ZlcnNpb24nO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3dlYi9qcy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7V2hhdHNOZXdNb2RhbH0gZnJvbSAnLi9XaGF0c05ld01vZGFsJztcbmltcG9ydCB7Q29uZGl0aW9uYWxTZXR0aW5nfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi93ZWIvanMvdWkvdXRpbC9Db25kaXRpb25hbFNldHRpbmcnO1xuaW1wb3J0IHtSZW5kZXJlckFuYWx5dGljc30gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vd2ViL2pzL2dhL1JlbmRlcmVyQW5hbHl0aWNzJztcbmltcG9ydCAqIGFzIHNlbXZlciBmcm9tICdzZW12ZXInO1xuaW1wb3J0IHtMaWZlY3ljbGVUb2dnbGV9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3dlYi9qcy91aS91dGlsL0xpZmVjeWNsZVRvZ2dsZSc7XG5pbXBvcnQge0xpZmVjeWNsZUV2ZW50c30gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vd2ViL2pzL3VpL3V0aWwvTGlmZWN5Y2xlRXZlbnRzJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG4vKipcbiAqIEBEZXByZWNhdGVkIG5vIGxvbmdlciB1c2VkIHdpdGggdGhlIG5ldyBzcGxhc2hlcyBzeXN0ZW0uXG4gKi9cbmV4cG9ydCBjbGFzcyBXaGF0c05ld0NvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb25kaXRpb25hbFNldHRpbmcgPSBuZXcgQ29uZGl0aW9uYWxTZXR0aW5nKCdwb2xhci13aGF0cy1uZXctdmVyc2lvbicpO1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLmhpZGUgPSB0aGlzLmhpZGUuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmhhbmRsZVZlcnNpb25TdGF0ZSA9IHRoaXMuaGFuZGxlVmVyc2lvblN0YXRlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaXNOZXdWZXJzaW9uID0gdGhpcy5pc05ld1ZlcnNpb24uYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgb3BlbjogZmFsc2VcbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLmhhbmRsZVZlcnNpb25TdGF0ZSgpXG4gICAgICAgICAgICAuY2F0Y2goIGVyciA9PiBsb2cuZXJyb3IoXCJVbmFibGUgdG8gcmVhZCB2ZXJzaW9uOiBcIiwgZXJyKSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIC8vIG5vaW5zcGVjdGlvbiBUc0xpbnRcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxXaGF0c05ld01vZGFsIGFjY2VwdD17KCkgPT4gdGhpcy5oaWRlKCl9Lz5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhpZGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IGZhbHNlfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBoYW5kbGVWZXJzaW9uU3RhdGUoKSB7XG5cbiAgICAgICAgY29uc3QgaGFzVG91clRlcm1pbmF0ZWQgPVxuICAgICAgICAgICAgTGlmZWN5Y2xlVG9nZ2xlLmlzTWFya2VkKExpZmVjeWNsZUV2ZW50cy5UT1VSX1RFUk1JTkFURUQpO1xuXG4gICAgICAgIGNvbnN0IGlzTmV3VmVyc2lvbiA9IGF3YWl0IHRoaXMuaXNOZXdWZXJzaW9uKCk7XG5cbiAgICAgICAgaWYgKGlzTmV3VmVyc2lvbikge1xuICAgICAgICAgICAgUmVuZGVyZXJBbmFseXRpY3MuZXZlbnQoe2NhdGVnb3J5OiAnYXBwJywgYWN0aW9uOiAnd2hhdHMtbmV3LWRpc3BsYXllZCd9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9wZW4gPSBpc05ld1ZlcnNpb24gJiYgaGFzVG91clRlcm1pbmF0ZWQ7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBvcGVuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBpc05ld1ZlcnNpb24oKTogUHJvbWlzZTxib29sZWFuPiB7XG5cbiAgICAgICAgY29uc3QgY3VycmVudFZlcnNpb24gPSBWZXJzaW9uLmdldCgpO1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9XG4gICAgICAgICAgICB0aGlzLmNvbmRpdGlvbmFsU2V0dGluZy5hY2NlcHQodmFsdWUgPT4gc2VtdmVyLmd0KGN1cnJlbnRWZXJzaW9uLCB2YWx1ZS5nZXRPckVsc2UoJycpKSApO1xuXG4gICAgICAgIHRoaXMuY29uZGl0aW9uYWxTZXR0aW5nLnNldChjdXJyZW50VmVyc2lvbik7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gICAgb3BlbjogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIFZlcnNpb25EYXRhIHtcbiAgICB2ZXJzaW9uPzogc3RyaW5nO1xufVxuXG4iXX0=