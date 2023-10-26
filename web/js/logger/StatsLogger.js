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
class StatsLogger {
    constructor() {
        this.name = "stats";
        this.stats = new FilteredStats();
    }
    notice(msg, ...args) {
        ++this.stats.notice;
    }
    debug(msg, ...args) {
        ++this.stats.debug;
    }
    verbose(msg, ...args) {
        ++this.stats.verbose;
    }
    info(msg, ...args) {
        ++this.stats.info;
    }
    warn(msg, ...args) {
        ++this.stats.warn;
    }
    error(msg, ...args) {
        ++this.stats.error;
    }
    sync() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.StatsLogger = StatsLogger;
class FilteredStats {
    constructor() {
        this.notice = 0;
        this.debug = 0;
        this.verbose = 0;
        this.info = 0;
        this.warn = 0;
        this.error = 0;
    }
}
exports.FilteredStats = FilteredStats;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdHNMb2dnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTdGF0c0xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBTUEsTUFBYSxXQUFXO0lBQXhCO1FBRW9CLFNBQUksR0FBVyxPQUFPLENBQUM7UUFFdkIsVUFBSyxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7SUE4QmhELENBQUM7SUE1QlUsTUFBTSxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDckMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUN4QixDQUFDO0lBRU0sS0FBSyxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDcEMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRU0sT0FBTyxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDdEMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBRU0sSUFBSSxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDbkMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztJQUN0QixDQUFDO0lBRU0sSUFBSSxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDbkMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztJQUN0QixDQUFDO0lBRU0sS0FBSyxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDcEMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRVksSUFBSTs7UUFFakIsQ0FBQztLQUFBO0NBRUo7QUFsQ0Qsa0NBa0NDO0FBRUQsTUFBYSxhQUFhO0lBQTFCO1FBQ1csV0FBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLFlBQU8sR0FBVyxDQUFDLENBQUM7UUFDcEIsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixTQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLFVBQUssR0FBVyxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUFBO0FBUEQsc0NBT0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lMb2dnZXJ9IGZyb20gJy4vSUxvZ2dlcic7XG5cbi8qKlxuICogRG9lcyBub3RoaW5nIG90aGVyIHRoYW4gY29sbGVjdCBzdGF0cyBvbiB3aGljaCBtZXRob2RzIHdlcmUgY2FsbGVkIGZvclxuICogdGVzdGluZyBwdXJwb3Nlcy5cbiAqL1xuZXhwb3J0IGNsYXNzIFN0YXRzTG9nZ2VyIGltcGxlbWVudHMgSUxvZ2dlciB7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZTogc3RyaW5nID0gXCJzdGF0c1wiO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IHN0YXRzID0gbmV3IEZpbHRlcmVkU3RhdHMoKTtcblxuICAgIHB1YmxpYyBub3RpY2UobXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgICsrdGhpcy5zdGF0cy5ub3RpY2U7XG4gICAgfVxuXG4gICAgcHVibGljIGRlYnVnKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICArK3RoaXMuc3RhdHMuZGVidWc7XG4gICAgfVxuXG4gICAgcHVibGljIHZlcmJvc2UobXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgICsrdGhpcy5zdGF0cy52ZXJib3NlO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbmZvKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICArK3RoaXMuc3RhdHMuaW5mbztcbiAgICB9XG5cbiAgICBwdWJsaWMgd2Fybihtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgKyt0aGlzLnN0YXRzLndhcm47XG4gICAgfVxuXG4gICAgcHVibGljIGVycm9yKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICArK3RoaXMuc3RhdHMuZXJyb3I7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHN5bmMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIC8vIG5vb3BcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIEZpbHRlcmVkU3RhdHMge1xuICAgIHB1YmxpYyBub3RpY2U6IG51bWJlciA9IDA7XG4gICAgcHVibGljIGRlYnVnOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyB2ZXJib3NlOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBpbmZvOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyB3YXJuOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBlcnJvcjogbnVtYmVyID0gMDtcbn1cbiJdfQ==