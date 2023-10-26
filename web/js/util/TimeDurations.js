"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ISODateTimeStrings_1 = require("../metadata/ISODateTimeStrings");
const Preconditions_1 = require("../Preconditions");
class TimeDurations {
    static toMillis(duration) {
        const sign = duration.startsWith('-') ? -1 : 1;
        duration = duration.replace(/^-/, "");
        const val = parseInt(duration.replace(/[smhw]/g, ""), 10);
        if (duration.endsWith("w")) {
            return sign * val * 7 * 24 * 60 * 60 * 1000;
        }
        else if (duration.endsWith("d")) {
            return sign * val * 24 * 60 * 60 * 1000;
        }
        else if (duration.endsWith("h")) {
            return sign * val * 60 * 60 * 1000;
        }
        else if (duration.endsWith("m")) {
            return sign * val * 60 * 1000;
        }
        else if (duration.endsWith("s")) {
            return sign * val * 1000;
        }
        else if (duration.endsWith("ms")) {
            return sign * val;
        }
        else {
            throw new Error("Unable to parse duration: " + duration);
        }
    }
    static toRandom(duration) {
        const durationMS = this.toMillis(duration);
        return Math.random() * durationMS;
    }
    static hasElapsed(since, duration, now = new Date()) {
        const durationMS = this.toMillis(duration);
        const nowMS = now.getTime();
        const cutoffMS = since.getTime() + durationMS;
        return (nowMS > cutoffMS);
    }
    static inWeeks(since, now = new Date()) {
        if (typeof since === 'string') {
            since = ISODateTimeStrings_1.ISODateTimeStrings.parse(since);
        }
        Preconditions_1.Preconditions.assert(since, value => value instanceof Date, "since not Date");
        const delta = now.getTime() - since.getTime();
        const nrWeeks = Math.floor(delta / this.toMillis('1w'));
        return `${nrWeeks}w`;
    }
}
exports.TimeDurations = TimeDurations;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZUR1cmF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRpbWVEdXJhdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1RUFBcUY7QUFDckYsb0RBQStDO0FBRS9DLE1BQWEsYUFBYTtJQUVmLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBcUI7UUFFeEMsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUvQyxRQUFRLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFdEMsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBUzFELElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN4QixPQUFPLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztTQUMvQzthQUFNLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUMvQixPQUFPLElBQUksR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1NBQzNDO2FBQU0sSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQy9CLE9BQU8sSUFBSSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztTQUN0QzthQUFNLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUMvQixPQUFPLElBQUksR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztTQUNqQzthQUFNLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUMvQixPQUFPLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDO1NBQzVCO2FBQU0sSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2hDLE9BQU8sSUFBSSxHQUFHLEdBQUcsQ0FBQztTQUNyQjthQUFNO1lBQ0gsTUFBTSxJQUFJLEtBQUssQ0FBQyw0QkFBNEIsR0FBRyxRQUFRLENBQUMsQ0FBQztTQUM1RDtJQUVMLENBQUM7SUFNTSxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQXFCO1FBRXhDLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFM0MsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsVUFBVSxDQUFDO0lBRXRDLENBQUM7SUFVTSxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQVcsRUFBRSxRQUFxQixFQUFFLE1BQVksSUFBSSxJQUFJLEVBQUU7UUFFL0UsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUzQyxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFNUIsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLFVBQVUsQ0FBQztRQUU5QyxPQUFPLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFFTSxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQStCLEVBQUUsTUFBWSxJQUFJLElBQUksRUFBRTtRQUV6RSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUMzQixLQUFLLEdBQUcsdUNBQWtCLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNDO1FBRUQsNkJBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxZQUFZLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBRTlFLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFOUMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRXhELE9BQU8sR0FBRyxPQUFPLEdBQUcsQ0FBQztJQUV6QixDQUFDO0NBRUo7QUFuRkQsc0NBbUZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJU09EYXRlVGltZVN0cmluZywgSVNPRGF0ZVRpbWVTdHJpbmdzfSBmcm9tICcuLi9tZXRhZGF0YS9JU09EYXRlVGltZVN0cmluZ3MnO1xuaW1wb3J0IHtQcmVjb25kaXRpb25zfSBmcm9tICcuLi9QcmVjb25kaXRpb25zJztcblxuZXhwb3J0IGNsYXNzIFRpbWVEdXJhdGlvbnMge1xuXG4gICAgcHVibGljIHN0YXRpYyB0b01pbGxpcyhkdXJhdGlvbjogRHVyYXRpb25TdHIpOiBEdXJhdGlvbk1TIHtcblxuICAgICAgICBjb25zdCBzaWduID0gZHVyYXRpb24uc3RhcnRzV2l0aCgnLScpID8gLTEgOiAxO1xuXG4gICAgICAgIGR1cmF0aW9uID0gZHVyYXRpb24ucmVwbGFjZSgvXi0vLCBcIlwiKTtcblxuICAgICAgICBjb25zdCB2YWwgPSBwYXJzZUludChkdXJhdGlvbi5yZXBsYWNlKC9bc21od10vZywgXCJcIiksIDEwKTtcblxuICAgICAgICAvLyBUT0RPOiBJIGRvbid0IHRoaW5rIHdlIGhhbmRsZSAxbTMwcyByaWdodCBub3cuXG5cbiAgICAgICAgLy8gVE9ETzogd291bGQgYmUgbmljZSB0byBvbmx5IGFjY2VwdCBhIGxpbWl0ZWQgdm9jYWJ1bGFyeSBzbyBJIGNvdWxkIGhhdmVcbiAgICAgICAgLy8gdHlwZSBjaGVja2luZyB3b3JrLiBJIGNvdWxkIHRha2UgdGhlIGR1cmF0aW9ucyBhcyB2YXJhcmdzIGxpa2VcblxuICAgICAgICAvLyAnMW0nLCAnMzBzJyBhbmQgc3VtIHRoZW0uXG5cbiAgICAgICAgaWYgKGR1cmF0aW9uLmVuZHNXaXRoKFwid1wiKSkge1xuICAgICAgICAgICAgcmV0dXJuIHNpZ24gKiB2YWwgKiA3ICogMjQgKiA2MCAqIDYwICogMTAwMDtcbiAgICAgICAgfSBlbHNlIGlmIChkdXJhdGlvbi5lbmRzV2l0aChcImRcIikpIHtcbiAgICAgICAgICAgIHJldHVybiBzaWduICogdmFsICogMjQgKiA2MCAqIDYwICogMTAwMDtcbiAgICAgICAgfSBlbHNlIGlmIChkdXJhdGlvbi5lbmRzV2l0aChcImhcIikpIHtcbiAgICAgICAgICAgIHJldHVybiBzaWduICogdmFsICogNjAgKiA2MCAqIDEwMDA7XG4gICAgICAgIH0gZWxzZSBpZiAoZHVyYXRpb24uZW5kc1dpdGgoXCJtXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gc2lnbiAqIHZhbCAqIDYwICogMTAwMDtcbiAgICAgICAgfSBlbHNlIGlmIChkdXJhdGlvbi5lbmRzV2l0aChcInNcIikpIHtcbiAgICAgICAgICAgIHJldHVybiBzaWduICogdmFsICogMTAwMDtcbiAgICAgICAgfSBlbHNlIGlmIChkdXJhdGlvbi5lbmRzV2l0aChcIm1zXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gc2lnbiAqIHZhbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBwYXJzZSBkdXJhdGlvbjogXCIgKyBkdXJhdGlvbik7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbXB1dGUgYSByYW5kb20gZHVyYXRpb24gYmFzZWQgb24gdGhlIGdpdmVuIGR1cmF0aW9uLlxuICAgICAqIEBwYXJhbSBkdXJhdGlvblxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgdG9SYW5kb20oZHVyYXRpb246IER1cmF0aW9uU3RyKTogRHVyYXRpb25NUyB7XG5cbiAgICAgICAgY29uc3QgZHVyYXRpb25NUyA9IHRoaXMudG9NaWxsaXMoZHVyYXRpb24pO1xuXG4gICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogZHVyYXRpb25NUztcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB0cnVlIGlmIHRoZSBhbW91bnQgb2YgdGltZSBpbiB0aGUgZ2l2ZW4gZHVyYXRpb24gaGFzIGVsYXBzZWRcbiAgICAgKiBzaW5jZSB0aGUgZ2l2ZW4gZGF0ZS5cbiAgICAgKlxuICAgICAqXG4gICAgICogQHBhcmFtIHNpbmNlXG4gICAgICogQHBhcmFtIGR1cmF0aW9uXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBoYXNFbGFwc2VkKHNpbmNlOiBEYXRlLCBkdXJhdGlvbjogRHVyYXRpb25TdHIsIG5vdzogRGF0ZSA9IG5ldyBEYXRlKCkpIHtcblxuICAgICAgICBjb25zdCBkdXJhdGlvbk1TID0gdGhpcy50b01pbGxpcyhkdXJhdGlvbik7XG5cbiAgICAgICAgY29uc3Qgbm93TVMgPSBub3cuZ2V0VGltZSgpO1xuXG4gICAgICAgIGNvbnN0IGN1dG9mZk1TID0gc2luY2UuZ2V0VGltZSgpICsgZHVyYXRpb25NUztcblxuICAgICAgICByZXR1cm4gKG5vd01TID4gY3V0b2ZmTVMpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBpbldlZWtzKHNpbmNlOiBEYXRlIHwgSVNPRGF0ZVRpbWVTdHJpbmcsIG5vdzogRGF0ZSA9IG5ldyBEYXRlKCkpIHtcblxuICAgICAgICBpZiAodHlwZW9mIHNpbmNlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgc2luY2UgPSBJU09EYXRlVGltZVN0cmluZ3MucGFyc2Uoc2luY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnQoc2luY2UsIHZhbHVlID0+IHZhbHVlIGluc3RhbmNlb2YgRGF0ZSwgXCJzaW5jZSBub3QgRGF0ZVwiKTtcblxuICAgICAgICBjb25zdCBkZWx0YSA9IG5vdy5nZXRUaW1lKCkgLSBzaW5jZS5nZXRUaW1lKCk7XG5cbiAgICAgICAgY29uc3QgbnJXZWVrcyA9IE1hdGguZmxvb3IoZGVsdGEgLyB0aGlzLnRvTWlsbGlzKCcxdycpKTtcblxuICAgICAgICByZXR1cm4gYCR7bnJXZWVrc313YDtcblxuICAgIH1cblxufVxuXG4vKipcbiAqIEEgZHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzXG4gKi9cbmV4cG9ydCB0eXBlIER1cmF0aW9uTVMgPSBudW1iZXI7XG5cbi8qKlxuICogQSB0aW1lIGR1cmF0aW9uIHN0cmluZyB3aGljaCBoYXMgdGhlIGZvbGxvd2luZyBzdXBwb3J0ZWQgc3VmZml4ZXM6XG4gKlxuICogbXMgPSBtaWxsaXNlY29uZHNcbiAqIHMgPSBzZWNvbmRzXG4gKiBtID0gbWludXRlc1xuICogaCA9IGhvdXJzXG4gKiBkID0gZGF5c1xuICogdyA9IHdlZWtzXG4gKi9cbmV4cG9ydCB0eXBlIER1cmF0aW9uU3RyID0gc3RyaW5nO1xuXG4iXX0=