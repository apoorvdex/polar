"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TimeDurations_1 = require("../../../../../web/js/util/TimeDurations");
const ISODateTimeStrings_1 = require("../../../../../web/js/metadata/ISODateTimeStrings");
const Logger_1 = require("../../../../../web/js/logger/Logger");
const Preconditions_1 = require("../../../../../web/js/Preconditions");
const log = Logger_1.Logger.create();
class DatastoreOverviewPolicies {
    static isLevel(level, datastoreOverview) {
        Preconditions_1.Preconditions.assertPresent(datastoreOverview, 'datastoreOverview');
        switch (level) {
            case 'active':
                return this.isActive(datastoreOverview);
            case 'premium':
                return this.isPremium(datastoreOverview);
            case '24h':
                return this.is24H(datastoreOverview);
        }
    }
    static is24H(datastoreOverview) {
        if (!datastoreOverview.created) {
            return false;
        }
        const since = ISODateTimeStrings_1.ISODateTimeStrings.parse(datastoreOverview.created);
        return TimeDurations_1.TimeDurations.hasElapsed(since, '1d');
    }
    static isActive(datastoreOverview) {
        if (!datastoreOverview.created) {
            return false;
        }
        const since = ISODateTimeStrings_1.ISODateTimeStrings.parse(datastoreOverview.created);
        return TimeDurations_1.TimeDurations.hasElapsed(since, '1w') && datastoreOverview.nrDocs > 5;
    }
    static isPremium(datastoreOverview) {
        if (!datastoreOverview.created) {
            return false;
        }
        const since = ISODateTimeStrings_1.ISODateTimeStrings.parse(datastoreOverview.created);
        const elapsed = TimeDurations_1.TimeDurations.hasElapsed(since, '2w');
        const hasMinDocs = datastoreOverview.nrDocs > 15;
        const result = elapsed && hasMinDocs;
        log.info(`since: ${since}, expired: ${elapsed}, hasMinDocs: ${hasMinDocs}, result: ${result}`);
        return result;
    }
}
exports.DatastoreOverviewPolicies = DatastoreOverviewPolicies;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YXN0b3JlT3ZlcnZpZXdQb2xpY2llcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRhdGFzdG9yZU92ZXJ2aWV3UG9saWNpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSw0RUFBdUU7QUFDdkUsMEZBQXFGO0FBQ3JGLGdFQUEyRDtBQUMzRCx1RUFBa0U7QUFFbEUsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBSTVCLE1BQWEseUJBQXlCO0lBRTNCLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBZ0IsRUFBRSxpQkFBb0M7UUFFeEUsNkJBQWEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUVwRSxRQUFRLEtBQUssRUFBRTtZQUVYLEtBQUssUUFBUTtnQkFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUU1QyxLQUFLLFNBQVM7Z0JBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFFN0MsS0FBSyxLQUFLO2dCQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBRTVDO0lBRUwsQ0FBQztJQUVNLE1BQU0sQ0FBQyxLQUFLLENBQUMsaUJBQW9DO1FBRXBELElBQUksQ0FBRSxpQkFBaUIsQ0FBQyxPQUFPLEVBQUU7WUFDN0IsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCxNQUFNLEtBQUssR0FBRyx1Q0FBa0IsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEUsT0FBTyw2QkFBYSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFakQsQ0FBQztJQUtNLE1BQU0sQ0FBQyxRQUFRLENBQUMsaUJBQW9DO1FBRXZELElBQUksQ0FBRSxpQkFBaUIsQ0FBQyxPQUFPLEVBQUU7WUFDN0IsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCxNQUFNLEtBQUssR0FBRyx1Q0FBa0IsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEUsT0FBTyw2QkFBYSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksaUJBQWlCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUVqRixDQUFDO0lBTU0sTUFBTSxDQUFDLFNBQVMsQ0FBQyxpQkFBb0M7UUFFeEQsSUFBSSxDQUFFLGlCQUFpQixDQUFDLE9BQU8sRUFBRTtZQUM3QixPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUVELE1BQU0sS0FBSyxHQUFHLHVDQUFrQixDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRSxNQUFNLE9BQU8sR0FBRyw2QkFBYSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEQsTUFBTSxVQUFVLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUVqRCxNQUFNLE1BQU0sR0FBRyxPQUFPLElBQUksVUFBVSxDQUFDO1FBRXJDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLGNBQWMsT0FBTyxpQkFBaUIsVUFBVSxhQUFhLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFFL0YsT0FBTyxNQUFNLENBQUM7SUFFbEIsQ0FBQztDQUVKO0FBcEVELDhEQW9FQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGF0YXN0b3JlT3ZlcnZpZXd9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3dlYi9qcy9kYXRhc3RvcmUvRGF0YXN0b3JlJztcbmltcG9ydCB7VGltZUR1cmF0aW9uc30gZnJvbSAnLi4vLi4vLi4vLi4vLi4vd2ViL2pzL3V0aWwvVGltZUR1cmF0aW9ucyc7XG5pbXBvcnQge0lTT0RhdGVUaW1lU3RyaW5nc30gZnJvbSAnLi4vLi4vLi4vLi4vLi4vd2ViL2pzL21ldGFkYXRhL0lTT0RhdGVUaW1lU3RyaW5ncyc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vd2ViL2pzL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtQcmVjb25kaXRpb25zfSBmcm9tICcuLi8uLi8uLi8uLi8uLi93ZWIvanMvUHJlY29uZGl0aW9ucyc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuLy8gVE9ETzogd2UgbmVlZCBldmVudHMgZm9yIHRoZXNlIG9uIHN0YXJ0dXAuLi4gaXQgd291bGQgYmUgbmljZSB0byBzZWUgaG93IG1hbnlcbi8vIHVzZXJzIHdlcmUgb25ib2FyZGVkXG5leHBvcnQgY2xhc3MgRGF0YXN0b3JlT3ZlcnZpZXdQb2xpY2llcyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGlzTGV2ZWwobGV2ZWw6IFVzZXJMZXZlbCwgZGF0YXN0b3JlT3ZlcnZpZXc6IERhdGFzdG9yZU92ZXJ2aWV3KSB7XG5cbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnRQcmVzZW50KGRhdGFzdG9yZU92ZXJ2aWV3LCAnZGF0YXN0b3JlT3ZlcnZpZXcnKTtcblxuICAgICAgICBzd2l0Y2ggKGxldmVsKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ2FjdGl2ZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNBY3RpdmUoZGF0YXN0b3JlT3ZlcnZpZXcpO1xuXG4gICAgICAgICAgICBjYXNlICdwcmVtaXVtJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pc1ByZW1pdW0oZGF0YXN0b3JlT3ZlcnZpZXcpO1xuXG4gICAgICAgICAgICBjYXNlICcyNGgnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlzMjRIKGRhdGFzdG9yZU92ZXJ2aWV3KTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGlzMjRIKGRhdGFzdG9yZU92ZXJ2aWV3OiBEYXRhc3RvcmVPdmVydmlldykge1xuXG4gICAgICAgIGlmICghIGRhdGFzdG9yZU92ZXJ2aWV3LmNyZWF0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNpbmNlID0gSVNPRGF0ZVRpbWVTdHJpbmdzLnBhcnNlKGRhdGFzdG9yZU92ZXJ2aWV3LmNyZWF0ZWQpO1xuICAgICAgICByZXR1cm4gVGltZUR1cmF0aW9ucy5oYXNFbGFwc2VkKHNpbmNlLCAnMWQnKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSB1c2VyIGhhcyBvbmJvYXJkZWQgYW5kIGhhcyBiZWVuIHVzaW5nIHRoZSBhcHAgZm9yIGEgd2hpbGUuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBpc0FjdGl2ZShkYXRhc3RvcmVPdmVydmlldzogRGF0YXN0b3JlT3ZlcnZpZXcpIHtcblxuICAgICAgICBpZiAoISBkYXRhc3RvcmVPdmVydmlldy5jcmVhdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzaW5jZSA9IElTT0RhdGVUaW1lU3RyaW5ncy5wYXJzZShkYXRhc3RvcmVPdmVydmlldy5jcmVhdGVkKTtcbiAgICAgICAgcmV0dXJuIFRpbWVEdXJhdGlvbnMuaGFzRWxhcHNlZChzaW5jZSwgJzF3JykgJiYgZGF0YXN0b3JlT3ZlcnZpZXcubnJEb2NzID4gNTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSB1c2VyIGlzIGF0IGEgcHJlbWl1bSBsZXZlbCBidXQgbWF5IG9yIG1heSBub3QgaGF2ZSBjb252ZXJ0ZWQgdG9cbiAgICAgKiBwcmVtaXVtLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgaXNQcmVtaXVtKGRhdGFzdG9yZU92ZXJ2aWV3OiBEYXRhc3RvcmVPdmVydmlldykge1xuXG4gICAgICAgIGlmICghIGRhdGFzdG9yZU92ZXJ2aWV3LmNyZWF0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNpbmNlID0gSVNPRGF0ZVRpbWVTdHJpbmdzLnBhcnNlKGRhdGFzdG9yZU92ZXJ2aWV3LmNyZWF0ZWQpO1xuICAgICAgICBjb25zdCBlbGFwc2VkID0gVGltZUR1cmF0aW9ucy5oYXNFbGFwc2VkKHNpbmNlLCAnMncnKTtcbiAgICAgICAgY29uc3QgaGFzTWluRG9jcyA9IGRhdGFzdG9yZU92ZXJ2aWV3Lm5yRG9jcyA+IDE1O1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGVsYXBzZWQgJiYgaGFzTWluRG9jcztcblxuICAgICAgICBsb2cuaW5mbyhgc2luY2U6ICR7c2luY2V9LCBleHBpcmVkOiAke2VsYXBzZWR9LCBoYXNNaW5Eb2NzOiAke2hhc01pbkRvY3N9LCByZXN1bHQ6ICR7cmVzdWx0fWApO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IHR5cGUgVXNlckxldmVsID0gJzI0aCcgfCAnYWN0aXZlJyB8ICdwcmVtaXVtJztcbiJdfQ==