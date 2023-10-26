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
const Logger_1 = require("../../logger/Logger");
const CachingStreamInterceptor_1 = require("./CachingStreamInterceptor");
const Protocols_1 = require("./Protocols");
const StreamInterceptors_1 = require("./StreamInterceptors");
const CacheStats_1 = require("./CacheStats");
const log = Logger_1.Logger.create();
class CachingStreamInterceptorService {
    constructor(cacheRegistry, protocol) {
        this.cacheStats = new CacheStats_1.CacheStats();
        this.cacheRegistry = cacheRegistry;
        this.protocol = protocol;
        this.cachingStreamInterceptor = new CachingStreamInterceptor_1.CachingStreamInterceptor(cacheRegistry, this.cacheStats);
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            log.debug("Starting service and registering protocol interceptors.");
            for (const scheme of ['http', 'https']) {
                yield Protocols_1.Protocols.interceptStreamProtocol(this.protocol, scheme, (request, callback) => {
                    StreamInterceptors_1.StreamInterceptors.withSetTimeout(() => {
                        this.cachingStreamInterceptor.intercept(request, callback);
                    });
                });
            }
        });
    }
    stop() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("not implemented");
        });
    }
}
exports.CachingStreamInterceptorService = CachingStreamInterceptorService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FjaGluZ1N0cmVhbUludGVyY2VwdG9yU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNhY2hpbmdTdHJlYW1JbnRlcmNlcHRvclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLGdEQUEyQztBQUMzQyx5RUFBb0U7QUFDcEUsMkNBQXNDO0FBQ3RDLDZEQUF3RDtBQUN4RCw2Q0FBd0M7QUFFeEMsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsK0JBQStCO0lBU3hDLFlBQVksYUFBNEIsRUFBRSxRQUEyQjtRQVByRCxlQUFVLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7UUFRMUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksbURBQXdCLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqRyxDQUFDO0lBRVksS0FBSzs7WUFFZCxHQUFHLENBQUMsS0FBSyxDQUFDLHlEQUF5RCxDQUFDLENBQUM7WUFFckUsS0FBSyxNQUFNLE1BQU0sSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsRUFBRTtnQkFFcEMsTUFBTSxxQkFBUyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFO29CQUVqRix1Q0FBa0IsQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFO3dCQUNuQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztvQkFDL0QsQ0FBQyxDQUFDLENBQUM7Z0JBRVAsQ0FBQyxDQUFDLENBQUM7YUFFTjtRQUVMLENBQUM7S0FBQTtJQUVZLElBQUk7O1lBQ2IsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7S0FBQTtDQUVKO0FBckNELDBFQXFDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2FjaGVSZWdpc3RyeX0gZnJvbSAnLi4vcHJveHlzZXJ2ZXIvQ2FjaGVSZWdpc3RyeSc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vLi4vbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0NhY2hpbmdTdHJlYW1JbnRlcmNlcHRvcn0gZnJvbSAnLi9DYWNoaW5nU3RyZWFtSW50ZXJjZXB0b3InO1xuaW1wb3J0IHtQcm90b2NvbHN9IGZyb20gJy4vUHJvdG9jb2xzJztcbmltcG9ydCB7U3RyZWFtSW50ZXJjZXB0b3JzfSBmcm9tICcuL1N0cmVhbUludGVyY2VwdG9ycyc7XG5pbXBvcnQge0NhY2hlU3RhdHN9IGZyb20gJy4vQ2FjaGVTdGF0cyc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIENhY2hpbmdTdHJlYW1JbnRlcmNlcHRvclNlcnZpY2Uge1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGNhY2hlU3RhdHMgPSBuZXcgQ2FjaGVTdGF0cygpO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBjYWNoZVJlZ2lzdHJ5OiBDYWNoZVJlZ2lzdHJ5O1xuXG4gICAgcHJpdmF0ZSBjYWNoaW5nU3RyZWFtSW50ZXJjZXB0b3I6IENhY2hpbmdTdHJlYW1JbnRlcmNlcHRvcjtcbiAgICBwcml2YXRlIHByb3RvY29sOiBFbGVjdHJvbi5Qcm90b2NvbDtcblxuICAgIGNvbnN0cnVjdG9yKGNhY2hlUmVnaXN0cnk6IENhY2hlUmVnaXN0cnksIHByb3RvY29sOiBFbGVjdHJvbi5Qcm90b2NvbCkge1xuICAgICAgICB0aGlzLmNhY2hlUmVnaXN0cnkgPSBjYWNoZVJlZ2lzdHJ5O1xuICAgICAgICB0aGlzLnByb3RvY29sID0gcHJvdG9jb2w7XG4gICAgICAgIHRoaXMuY2FjaGluZ1N0cmVhbUludGVyY2VwdG9yID0gbmV3IENhY2hpbmdTdHJlYW1JbnRlcmNlcHRvcihjYWNoZVJlZ2lzdHJ5LCB0aGlzLmNhY2hlU3RhdHMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzdGFydCgpIHtcblxuICAgICAgICBsb2cuZGVidWcoXCJTdGFydGluZyBzZXJ2aWNlIGFuZCByZWdpc3RlcmluZyBwcm90b2NvbCBpbnRlcmNlcHRvcnMuXCIpO1xuXG4gICAgICAgIGZvciAoY29uc3Qgc2NoZW1lIG9mIFsnaHR0cCcsICdodHRwcyddKSB7XG5cbiAgICAgICAgICAgIGF3YWl0IFByb3RvY29scy5pbnRlcmNlcHRTdHJlYW1Qcm90b2NvbCh0aGlzLnByb3RvY29sLCBzY2hlbWUsIChyZXF1ZXN0LCBjYWxsYmFjaykgPT4ge1xuXG4gICAgICAgICAgICAgICAgU3RyZWFtSW50ZXJjZXB0b3JzLndpdGhTZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoaW5nU3RyZWFtSW50ZXJjZXB0b3IuaW50ZXJjZXB0KHJlcXVlc3QsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHN0b3AoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vdCBpbXBsZW1lbnRlZFwiKTtcbiAgICB9XG5cbn1cbiJdfQ==