"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Preconditions_1 = require("../../Preconditions");
class IPCError {
    constructor(msg) {
        Preconditions_1.Preconditions.assertString(msg, 'msg');
        this.msg = msg;
    }
    static create(err) {
        if (err instanceof Error) {
            return new IPCError(err.message);
        }
        return new IPCError(err);
    }
}
exports.IPCError = IPCError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSVBDRXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJJUENFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLHVEQUFrRDtBQUVsRCxNQUFhLFFBQVE7SUFJakIsWUFBbUIsR0FBVztRQUMxQiw2QkFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDbkIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBbUI7UUFFcEMsSUFBSSxHQUFHLFlBQVksS0FBSyxFQUFFO1lBQ3RCLE9BQU8sSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3BDO1FBRUQsT0FBTyxJQUFJLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUU3QixDQUFDO0NBRUo7QUFuQkQsNEJBbUJDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBmYWN0IHRoYXQgYW4gSVBDIGVycm9yIGZhaWxlZC5cbiAqL1xuaW1wb3J0IHtQcmVjb25kaXRpb25zfSBmcm9tICcuLi8uLi9QcmVjb25kaXRpb25zJztcblxuZXhwb3J0IGNsYXNzIElQQ0Vycm9yIHtcblxuICAgIHB1YmxpYyByZWFkb25seSBtc2c6IHN0cmluZztcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihtc2c6IHN0cmluZykge1xuICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydFN0cmluZyhtc2csICdtc2cnKTtcbiAgICAgICAgdGhpcy5tc2cgPSBtc2c7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGUoZXJyOiBFcnJvciB8IHN0cmluZyk6IElQQ0Vycm9yIHtcblxuICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgSVBDRXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBJUENFcnJvcihlcnIpO1xuXG4gICAgfVxuXG59XG4iXX0=