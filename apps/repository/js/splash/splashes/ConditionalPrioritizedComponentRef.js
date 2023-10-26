"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConditionalSetting_1 = require("../../../../../web/js/ui/util/ConditionalSetting");
const DatastoreOverviewPolicies_1 = require("./DatastoreOverviewPolicies");
const Logger_1 = require("../../../../../web/js/logger/Logger");
const log = Logger_1.Logger.create();
class ConditionalPrioritizedComponentRef {
    constructor(settingKey, defaultPriority, userLevel) {
        this.settingKey = settingKey;
        this.defaultPriority = defaultPriority;
        this.userLevel = userLevel;
    }
    priority(datastoreOverview) {
        const conditionalSetting = new ConditionalSetting_1.ConditionalSetting(this.settingKey);
        if (this.userLevel && !DatastoreOverviewPolicies_1.DatastoreOverviewPolicies.isLevel(this.userLevel, datastoreOverview)) {
            log.info("User is not at user level: " + this.userLevel);
            return undefined;
        }
        if (conditionalSetting.get().getOrElse('') === 'do-not-show-again') {
            return undefined;
        }
        if (conditionalSetting.get().getOrElse('') !== '') {
            const val = conditionalSetting.get().getOrElse('');
            if (val.match(/[0-9]+/)) {
                if (Date.now() > parseInt(val)) {
                    return this.defaultPriority;
                }
                else {
                    return undefined;
                }
            }
        }
        return this.defaultPriority;
    }
}
exports.ConditionalPrioritizedComponentRef = ConditionalPrioritizedComponentRef;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZGl0aW9uYWxQcmlvcml0aXplZENvbXBvbmVudFJlZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvbmRpdGlvbmFsUHJpb3JpdGl6ZWRDb21wb25lbnRSZWYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5RkFBb0Y7QUFHcEYsMkVBQWlGO0FBQ2pGLGdFQUEyRDtBQUUzRCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBc0Isa0NBQWtDO0lBVXBELFlBQVksVUFBa0IsRUFBRSxlQUF1QixFQUFFLFNBQXFCO1FBQzFFLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7SUFFTSxRQUFRLENBQUMsaUJBQW9DO1FBRWhELE1BQU0sa0JBQWtCLEdBQUcsSUFBSSx1Q0FBa0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFbkUsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUUscURBQXlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLENBQUMsRUFBRTtZQUMxRixHQUFHLENBQUMsSUFBSSxDQUFDLDZCQUE2QixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN6RCxPQUFPLFNBQVMsQ0FBQztTQUNwQjtRQUVELElBQUksa0JBQWtCLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxLQUFLLG1CQUFtQixFQUFFO1lBQ2hFLE9BQU8sU0FBUyxDQUFDO1NBQ3BCO1FBRUQsSUFBSSxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1lBSS9DLE1BQU0sR0FBRyxHQUFHLGtCQUFrQixDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUVuRCxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBRXJCLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDNUIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO2lCQUMvQjtxQkFBTTtvQkFDSCxPQUFPLFNBQVMsQ0FBQztpQkFDcEI7YUFFSjtTQUVKO1FBRUQsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBRWhDLENBQUM7Q0FJSjtBQXJERCxnRkFxREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbmRpdGlvbmFsU2V0dGluZ30gZnJvbSAnLi4vLi4vLi4vLi4vLi4vd2ViL2pzL3VpL3V0aWwvQ29uZGl0aW9uYWxTZXR0aW5nJztcbmltcG9ydCB7UHJpb3JpdGl6ZWRDb21wb25lbnRSZWZ9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3dlYi9qcy91aS9wcmlvcml0aXplZC9Qcmlvcml0aXplZENvbXBvbmVudE1hbmFnZXInO1xuaW1wb3J0IHtEYXRhc3RvcmVPdmVydmlld30gZnJvbSAnLi4vLi4vLi4vLi4vLi4vd2ViL2pzL2RhdGFzdG9yZS9EYXRhc3RvcmUnO1xuaW1wb3J0IHtEYXRhc3RvcmVPdmVydmlld1BvbGljaWVzLCBVc2VyTGV2ZWx9IGZyb20gJy4vRGF0YXN0b3JlT3ZlcnZpZXdQb2xpY2llcyc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vd2ViL2pzL2xvZ2dlci9Mb2dnZXInO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb25kaXRpb25hbFByaW9yaXRpemVkQ29tcG9uZW50UmVmIGltcGxlbWVudHMgUHJpb3JpdGl6ZWRDb21wb25lbnRSZWYge1xuXG4gICAgcHVibGljIGFic3RyYWN0IGlkOiBzdHJpbmc7XG5cbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgc2V0dGluZ0tleTogc3RyaW5nO1xuXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGRlZmF1bHRQcmlvcml0eTogbnVtYmVyO1xuXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHVzZXJMZXZlbDogVXNlckxldmVsIHwgdW5kZWZpbmVkO1xuXG4gICAgY29uc3RydWN0b3Ioc2V0dGluZ0tleTogc3RyaW5nLCBkZWZhdWx0UHJpb3JpdHk6IG51bWJlciwgdXNlckxldmVsPzogVXNlckxldmVsKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ0tleSA9IHNldHRpbmdLZXk7XG4gICAgICAgIHRoaXMuZGVmYXVsdFByaW9yaXR5ID0gZGVmYXVsdFByaW9yaXR5O1xuICAgICAgICB0aGlzLnVzZXJMZXZlbCA9IHVzZXJMZXZlbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHJpb3JpdHkoZGF0YXN0b3JlT3ZlcnZpZXc6IERhdGFzdG9yZU92ZXJ2aWV3KTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcblxuICAgICAgICBjb25zdCBjb25kaXRpb25hbFNldHRpbmcgPSBuZXcgQ29uZGl0aW9uYWxTZXR0aW5nKHRoaXMuc2V0dGluZ0tleSk7XG5cbiAgICAgICAgaWYgKHRoaXMudXNlckxldmVsICYmICEgRGF0YXN0b3JlT3ZlcnZpZXdQb2xpY2llcy5pc0xldmVsKHRoaXMudXNlckxldmVsLCBkYXRhc3RvcmVPdmVydmlldykpIHtcbiAgICAgICAgICAgIGxvZy5pbmZvKFwiVXNlciBpcyBub3QgYXQgdXNlciBsZXZlbDogXCIgKyB0aGlzLnVzZXJMZXZlbCk7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmRpdGlvbmFsU2V0dGluZy5nZXQoKS5nZXRPckVsc2UoJycpID09PSAnZG8tbm90LXNob3ctYWdhaW4nKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmRpdGlvbmFsU2V0dGluZy5nZXQoKS5nZXRPckVsc2UoJycpICE9PSAnJykge1xuXG4gICAgICAgICAgICAvLyBzZWUgaWYgaXQncyBhbiBpbnRlZ2VyXG5cbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IGNvbmRpdGlvbmFsU2V0dGluZy5nZXQoKS5nZXRPckVsc2UoJycpO1xuXG4gICAgICAgICAgICBpZiAodmFsLm1hdGNoKC9bMC05XSsvKSkge1xuXG4gICAgICAgICAgICAgICAgaWYgKERhdGUubm93KCkgPiBwYXJzZUludCh2YWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRQcmlvcml0eTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0UHJpb3JpdHk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYWJzdHJhY3QgY3JlYXRlKCk6IEpTWC5FbGVtZW50O1xuXG59XG5cblxuXG4iXX0=