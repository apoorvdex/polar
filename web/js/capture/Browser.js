"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Navigation_1 = require("./navigation/Navigation");
class Browser {
    constructor(opts) {
        this.inactive = false;
        this.name = opts.name;
        this.title = opts.title;
        this.type = opts.type;
        this.description = opts.description;
        this.userAgent = opts.userAgent;
        this.deviceEmulation = opts.deviceEmulation;
    }
}
exports.Browser = Browser;
class BrowserProfileBuilder {
    constructor(browser) {
        this.id = BrowserProfileBuilder.sequence++;
        this.profile = "unknown";
        this.offscreen = false;
        this.show = true;
        this.nodeIntegration = false;
        this.navigation = new Navigation_1.DefaultNavigation();
        this.useReactor = true;
        this.webaudio = true;
        this.hosted = false;
        this.destroy = true;
        this.inactive = false;
        this.description = browser.description;
        this.deviceEmulation = browser.deviceEmulation;
        this.name = browser.name;
        this.type = browser.type;
        this.title = browser.title;
        this.userAgent = browser.userAgent;
    }
    setHeight(height) {
        this.deviceEmulation.screenSize.height = height;
        this.deviceEmulation.viewSize.height = height;
        return this;
    }
    setShow(show) {
        this.show = show;
        return this;
    }
    setOffscreen(offscreen) {
        this.offscreen = offscreen;
        return this;
    }
    setProfile(profile) {
        this.profile = profile;
        return this;
    }
    setNodeIntegration(value) {
        this.nodeIntegration = value;
        return this;
    }
    setUseReactor(value) {
        this.useReactor = value;
        return this;
    }
    setWebaudio(value) {
        this.webaudio = value;
        return this;
    }
    setHosted(value) {
        this.hosted = value;
        return this;
    }
    build() {
        return Object.freeze(this);
    }
}
BrowserProfileBuilder.sequence = 0;
exports.BrowserProfileBuilder = BrowserProfileBuilder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJvd3Nlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkJyb3dzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx3REFBc0U7QUFFdEUsTUFBYSxPQUFPO0lBb0JoQixZQUFZLElBQWM7UUFOVixhQUFRLEdBQVksS0FBSyxDQUFDO1FBT3RDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDaEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQ2hELENBQUM7Q0FFSjtBQTdCRCwwQkE2QkM7QUF3QkQsTUFBYSxxQkFBcUI7SUFzQzlCLFlBQVksT0FBZ0I7UUFwQ3JCLE9BQUUsR0FBcUIscUJBQXFCLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFeEQsWUFBTyxHQUFXLFNBQVMsQ0FBQztRQVk1QixjQUFTLEdBQVksS0FBSyxDQUFDO1FBRTNCLFNBQUksR0FBWSxJQUFJLENBQUM7UUFJckIsb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFFakMsZUFBVSxHQUFlLElBQUksOEJBQWlCLEVBQUUsQ0FBQztRQUVqRCxlQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUV4QixZQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFLN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQztRQUMvQyxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7SUFDdkMsQ0FBQztJQUVNLFNBQVMsQ0FBQyxNQUFjO1FBRTNCLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDaEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUU5QyxPQUFPLElBQUksQ0FBQztJQUVoQixDQUFDO0lBRU0sT0FBTyxDQUFDLElBQWE7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLFlBQVksQ0FBQyxTQUFrQjtRQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sVUFBVSxDQUFDLE9BQWU7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLGtCQUFrQixDQUFDLEtBQWM7UUFDcEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDN0IsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLGFBQWEsQ0FBQyxLQUFjO1FBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxXQUFXLENBQUMsS0FBYztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sU0FBUyxDQUFDLEtBQWM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLEtBQUs7UUFDUixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7QUFFYyw4QkFBUSxHQUFXLENBQUMsQ0FBQztBQS9GeEMsc0RBaUdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCcm93c2VyUHJvZmlsZSwgQnJvd3NlclByb2ZpbGVJRH0gZnJvbSAnLi9Ccm93c2VyUHJvZmlsZSc7XG5pbXBvcnQge0RlZmF1bHROYXZpZ2F0aW9uLCBOYXZpZ2F0aW9ufSBmcm9tICcuL25hdmlnYXRpb24vTmF2aWdhdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBCcm93c2VyIGltcGxlbWVudHMgUmVhZG9ubHk8SUJyb3dzZXI+IHtcblxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgdGl0bGU6IHN0cmluZztcblxuICAgIHB1YmxpYyByZWFkb25seSB0eXBlOiBCcm93c2VyVHlwZTtcblxuICAgIHB1YmxpYyByZWFkb25seSBkZXNjcmlwdGlvbjogc3RyaW5nO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IHVzZXJBZ2VudDogc3RyaW5nO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGRldmljZUVtdWxhdGlvbjogRWxlY3Ryb24uUGFyYW1ldGVycztcblxuICAgIHB1YmxpYyByZWFkb25seSBpbmFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb3B0c1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdHM6IElCcm93c2VyKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG9wdHMubmFtZTtcbiAgICAgICAgdGhpcy50aXRsZSA9IG9wdHMudGl0bGU7XG4gICAgICAgIHRoaXMudHlwZSA9IG9wdHMudHlwZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IG9wdHMuZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMudXNlckFnZW50ID0gb3B0cy51c2VyQWdlbnQ7XG4gICAgICAgIHRoaXMuZGV2aWNlRW11bGF0aW9uID0gb3B0cy5kZXZpY2VFbXVsYXRpb247XG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUJyb3dzZXIge1xuXG4gICAgbmFtZTogc3RyaW5nO1xuXG4gICAgdGl0bGU6IHN0cmluZztcblxuICAgIHR5cGU6IEJyb3dzZXJUeXBlO1xuXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcblxuICAgIHVzZXJBZ2VudDogc3RyaW5nO1xuXG4gICAgZGV2aWNlRW11bGF0aW9uOiBFbGVjdHJvbi5QYXJhbWV0ZXJzO1xuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGlzIGlzIGN1cnJlbnRseSBpbmFjdGl2ZSBmb3IgdXNlciBzZWxlY3Rpb24uICBJRSBqdXN0IGEgdGVzdFxuICAgICAqIHByb2ZpbGUuXG4gICAgICovXG4gICAgaW5hY3RpdmU6IGJvb2xlYW47XG5cbn1cblxuZXhwb3J0IGNsYXNzIEJyb3dzZXJQcm9maWxlQnVpbGRlciBpbXBsZW1lbnRzIEJyb3dzZXJQcm9maWxlIHtcblxuICAgIHB1YmxpYyBpZDogQnJvd3NlclByb2ZpbGVJRCA9IEJyb3dzZXJQcm9maWxlQnVpbGRlci5zZXF1ZW5jZSsrO1xuXG4gICAgcHVibGljIHByb2ZpbGU6IHN0cmluZyA9IFwidW5rbm93blwiO1xuXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgZGV2aWNlRW11bGF0aW9uOiBFbGVjdHJvbi5QYXJhbWV0ZXJzO1xuXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcblxuICAgIHB1YmxpYyB0eXBlOiBCcm93c2VyVHlwZTtcblxuICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xuXG4gICAgcHVibGljIG9mZnNjcmVlbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHVibGljIHNob3c6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgcHVibGljIHVzZXJBZ2VudDogc3RyaW5nO1xuXG4gICAgcHVibGljIG5vZGVJbnRlZ3JhdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHVibGljIG5hdmlnYXRpb246IE5hdmlnYXRpb24gPSBuZXcgRGVmYXVsdE5hdmlnYXRpb24oKTtcblxuICAgIHB1YmxpYyB1c2VSZWFjdG9yOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIHB1YmxpYyB3ZWJhdWRpbzogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBwdWJsaWMgaG9zdGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwdWJsaWMgZGVzdHJveTogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBwdWJsaWMgaW5hY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGJyb3dzZXI6IEJyb3dzZXIpIHtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGJyb3dzZXIuZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZGV2aWNlRW11bGF0aW9uID0gYnJvd3Nlci5kZXZpY2VFbXVsYXRpb247XG4gICAgICAgIHRoaXMubmFtZSA9IGJyb3dzZXIubmFtZTtcbiAgICAgICAgdGhpcy50eXBlID0gYnJvd3Nlci50eXBlO1xuICAgICAgICB0aGlzLnRpdGxlID0gYnJvd3Nlci50aXRsZTtcbiAgICAgICAgdGhpcy51c2VyQWdlbnQgPSBicm93c2VyLnVzZXJBZ2VudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0SGVpZ2h0KGhlaWdodDogbnVtYmVyKSB7XG5cbiAgICAgICAgdGhpcy5kZXZpY2VFbXVsYXRpb24uc2NyZWVuU2l6ZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuZGV2aWNlRW11bGF0aW9uLnZpZXdTaXplLmhlaWdodCA9IGhlaWdodDtcblxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgIH1cblxuICAgIHB1YmxpYyBzZXRTaG93KHNob3c6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5zaG93ID0gc2hvdztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldE9mZnNjcmVlbihvZmZzY3JlZW46IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5vZmZzY3JlZW4gPSBvZmZzY3JlZW47XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRQcm9maWxlKHByb2ZpbGU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnByb2ZpbGUgPSBwcm9maWxlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0Tm9kZUludGVncmF0aW9uKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMubm9kZUludGVncmF0aW9uID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRVc2VSZWFjdG9yKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMudXNlUmVhY3RvciA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0V2ViYXVkaW8odmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy53ZWJhdWRpbyA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0SG9zdGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuaG9zdGVkID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBidWlsZCgpOiBSZWFkb25seTxCcm93c2VyUHJvZmlsZT4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBzZXF1ZW5jZTogbnVtYmVyID0gMDtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERldmljZUVtdWxhdGlvbiB7XG5cbn1cblxuZXhwb3J0IHR5cGUgQnJvd3NlclR5cGUgPSAnZGVza3RvcCcgfCAndGFibGV0JyB8ICdwaG9uZSc7XG4iXX0=