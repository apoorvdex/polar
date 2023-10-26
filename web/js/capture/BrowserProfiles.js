"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Browser_1 = require("./Browser");
class BrowserProfiles {
    static toBrowserProfile(browser, name) {
        if (name.toUpperCase() === 'DEFAULT') {
            return BrowserProfiles.toBrowserProfile(browser, 'BROWSER');
        }
        switch (name.toUpperCase()) {
            case "HIDDEN":
                return new Browser_1.BrowserProfileBuilder(browser)
                    .setProfile(name)
                    .setHeight(1000)
                    .setShow(false)
                    .build();
            case "HEADLESS":
                return new Browser_1.BrowserProfileBuilder(browser)
                    .setProfile(name)
                    .setHeight(1000)
                    .setShow(true)
                    .setOffscreen(true)
                    .build();
            case "HEADLESS_500":
                return new Browser_1.BrowserProfileBuilder(browser)
                    .setProfile(name)
                    .setHeight(500)
                    .setShow(false)
                    .setOffscreen(true)
                    .build();
            case "WEBVIEW":
                return new Browser_1.BrowserProfileBuilder(browser)
                    .setProfile(name)
                    .setHeight(35000)
                    .setShow(false)
                    .setOffscreen(false)
                    .setWebaudio(true)
                    .setNodeIntegration(true)
                    .build();
            case "BROWSER":
                return new Browser_1.BrowserProfileBuilder(browser)
                    .setProfile(name)
                    .setHeight(35000)
                    .setShow(true)
                    .setOffscreen(false)
                    .setNodeIntegration(true)
                    .setUseReactor(false)
                    .setWebaudio(true)
                    .setHosted(true)
                    .build();
            default:
                throw new Error("Incorrect profile name: " + name);
        }
    }
    static createDefault(browser, height) {
        browser = Object.assign({}, browser);
        browser.deviceEmulation.screenSize.height = height;
        browser.deviceEmulation.viewSize.height = height;
        return browser;
    }
}
exports.BrowserProfiles = BrowserProfiles;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJvd3NlclByb2ZpbGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQnJvd3NlclByb2ZpbGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQXlEO0FBY3pELE1BQWEsZUFBZTtJQU9qQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBZ0IsRUFDaEIsSUFBWTtRQUV2QyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxTQUFTLEVBQUU7WUFDbEMsT0FBTyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQy9EO1FBTUQsUUFBUSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFFeEIsS0FBSyxRQUFRO2dCQUNULE9BQU8sSUFBSSwrQkFBcUIsQ0FBQyxPQUFPLENBQUM7cUJBQ3BDLFVBQVUsQ0FBQyxJQUFJLENBQUM7cUJBQ2hCLFNBQVMsQ0FBQyxJQUFJLENBQUM7cUJBQ2YsT0FBTyxDQUFDLEtBQUssQ0FBQztxQkFFZCxLQUFLLEVBQUUsQ0FBQztZQUVqQixLQUFLLFVBQVU7Z0JBQ1gsT0FBTyxJQUFJLCtCQUFxQixDQUFDLE9BQU8sQ0FBQztxQkFDcEMsVUFBVSxDQUFDLElBQUksQ0FBQztxQkFDaEIsU0FBUyxDQUFDLElBQUksQ0FBQztxQkFDZixPQUFPLENBQUMsSUFBSSxDQUFDO3FCQUNiLFlBQVksQ0FBQyxJQUFJLENBQUM7cUJBQ2xCLEtBQUssRUFBRSxDQUFDO1lBRWpCLEtBQUssY0FBYztnQkFDZixPQUFPLElBQUksK0JBQXFCLENBQUMsT0FBTyxDQUFDO3FCQUNwQyxVQUFVLENBQUMsSUFBSSxDQUFDO3FCQUNoQixTQUFTLENBQUMsR0FBRyxDQUFDO3FCQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUM7cUJBQ2QsWUFBWSxDQUFDLElBQUksQ0FBQztxQkFDbEIsS0FBSyxFQUFFLENBQUM7WUFFakIsS0FBSyxTQUFTO2dCQUNWLE9BQU8sSUFBSSwrQkFBcUIsQ0FBQyxPQUFPLENBQUM7cUJBQ3BDLFVBQVUsQ0FBQyxJQUFJLENBQUM7cUJBQ2hCLFNBQVMsQ0FBQyxLQUFLLENBQUM7cUJBQ2hCLE9BQU8sQ0FBQyxLQUFLLENBQUM7cUJBQ2QsWUFBWSxDQUFDLEtBQUssQ0FBQztxQkFDbkIsV0FBVyxDQUFDLElBQUksQ0FBQztxQkFDakIsa0JBQWtCLENBQUMsSUFBSSxDQUFDO3FCQUN4QixLQUFLLEVBQUUsQ0FBQztZQUVqQixLQUFLLFNBQVM7Z0JBQ1YsT0FBTyxJQUFJLCtCQUFxQixDQUFDLE9BQU8sQ0FBQztxQkFDcEMsVUFBVSxDQUFDLElBQUksQ0FBQztxQkFDaEIsU0FBUyxDQUFDLEtBQUssQ0FBQztxQkFDaEIsT0FBTyxDQUFDLElBQUksQ0FBQztxQkFDYixZQUFZLENBQUMsS0FBSyxDQUFDO3FCQUNuQixrQkFBa0IsQ0FBQyxJQUFJLENBQUM7cUJBQ3hCLGFBQWEsQ0FBQyxLQUFLLENBQUM7cUJBQ3BCLFdBQVcsQ0FBQyxJQUFJLENBQUM7cUJBQ2pCLFNBQVMsQ0FBQyxJQUFJLENBQUM7cUJBQ2YsS0FBSyxFQUFFLENBQUM7WUFjakI7Z0JBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQywwQkFBMEIsR0FBRyxJQUFJLENBQUMsQ0FBQztTQUUxRDtJQUVMLENBQUM7SUFFTSxNQUFNLENBQUMsYUFBYSxDQUFDLE9BQWdCLEVBQUUsTUFBYztRQUN4RCxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFXckMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNuRCxPQUFPLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBRWpELE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7Q0FFSjtBQXZHRCwwQ0F1R0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jyb3dzZXIsIEJyb3dzZXJQcm9maWxlQnVpbGRlcn0gZnJvbSAnLi9Ccm93c2VyJztcbmltcG9ydCB7QnJvd3NlclByb2ZpbGV9IGZyb20gJy4vQnJvd3NlclByb2ZpbGUnO1xuXG4vLyBUT0RPOiBhbnl0aGluZyBncmVhdGVyIHRoYW4gMTBrIHRyaWdnZXJzIGEgYnVnIG9uIE5WaWRpYSBkcml2ZXJzIG9uIExpbnV4XG4vLyBidXQgbWFueSBkb2N1bWVudHMgYXJlIGxhcmdlciB0aGFuIHRoaXMgMTBrIGxpbWl0IGlmIHRoZXkgaGF2ZSAxMCBwYWdlcyBvclxuLy8gbW9yZS5cbi8vXG4vLyBFeGFtcGxlczpcbi8vXG4vLyBodHRwczovL2pvdXJuYWwuYXJ0ZnVsZGV2LmNvbS91bml0LXRlc3Rpbmctbm9kZS1hcHBsaWNhdGlvbnMtd2l0aC10eXBlc2NyaXB0LXVzaW5nLW1vY2hhLWFuZC1jaGFpLTM4NGVmMDVmMzJiMlxuLy9cbi8vIEl0J3MgYWxzbyBhbiBpc3N1ZSB0aGF0IHRoaXMgd2lsbCB1c2UgbW9yZSBtZW1vcnkuIEFib3V0IDEwME1CIGZvciBsYXJnZVxuLy8gZG9jdW1lbnRzIHRoYXQgbmVlZCByZW5kZXJpbmcgd2l0aCBmdWxsIHdpbmRvd3MuXG5cbmV4cG9ydCBjbGFzcyBCcm93c2VyUHJvZmlsZXMge1xuXG4gICAgLyoqXG4gICAgICogTWlncmF0ZSB0aGlzIHRvIGEgcHJvZmlsZSBvZiBzZXR0aW5nIHdlIHRoZW4gdXNlIHRvIGNyZWF0ZSB0aGUgYnJvd3NlclxuICAgICAqIHdpbmRvdyBvcHRpb25zLlxuICAgICAqXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyB0b0Jyb3dzZXJQcm9maWxlKGJyb3dzZXI6IEJyb3dzZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHN0cmluZyk6IFJlYWRvbmx5PEJyb3dzZXJQcm9maWxlPiB7XG5cbiAgICAgICAgaWYgKG5hbWUudG9VcHBlckNhc2UoKSA9PT0gJ0RFRkFVTFQnKSB7XG4gICAgICAgICAgICByZXR1cm4gQnJvd3NlclByb2ZpbGVzLnRvQnJvd3NlclByb2ZpbGUoYnJvd3NlciwgJ0JST1dTRVInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN1cHBvcnQgb2Zmc2NyZWVuIHJlbmRlcmluZyAoc2ltaWxhciB0byBjaHJvbWUgaGVhZGxlc3MpXG4gICAgICAgIC8vXG4gICAgICAgIC8vIGh0dHBzOi8vZWxlY3Ryb25qcy5vcmcvZG9jcy90dXRvcmlhbC9vZmZzY3JlZW4tcmVuZGVyaW5nXG5cbiAgICAgICAgc3dpdGNoIChuYW1lLnRvVXBwZXJDYXNlKCkpIHtcblxuICAgICAgICAgICAgY2FzZSBcIkhJRERFTlwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQnJvd3NlclByb2ZpbGVCdWlsZGVyKGJyb3dzZXIpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRQcm9maWxlKG5hbWUpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRIZWlnaHQoMTAwMClcbiAgICAgICAgICAgICAgICAgICAgLnNldFNob3coZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgIC8vIC5zZXRTaG93KHRydWUpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgICAgICBjYXNlIFwiSEVBRExFU1NcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJyb3dzZXJQcm9maWxlQnVpbGRlcihicm93c2VyKVxuICAgICAgICAgICAgICAgICAgICAuc2V0UHJvZmlsZShuYW1lKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SGVpZ2h0KDEwMDApXG4gICAgICAgICAgICAgICAgICAgIC5zZXRTaG93KHRydWUpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRPZmZzY3JlZW4odHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICAgICAgICAgIGNhc2UgXCJIRUFETEVTU181MDBcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJyb3dzZXJQcm9maWxlQnVpbGRlcihicm93c2VyKVxuICAgICAgICAgICAgICAgICAgICAuc2V0UHJvZmlsZShuYW1lKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SGVpZ2h0KDUwMClcbiAgICAgICAgICAgICAgICAgICAgLnNldFNob3coZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRPZmZzY3JlZW4odHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICAgICAgICAgIGNhc2UgXCJXRUJWSUVXXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCcm93c2VyUHJvZmlsZUJ1aWxkZXIoYnJvd3NlcilcbiAgICAgICAgICAgICAgICAgICAgLnNldFByb2ZpbGUobmFtZSlcbiAgICAgICAgICAgICAgICAgICAgLnNldEhlaWdodCgzNTAwMClcbiAgICAgICAgICAgICAgICAgICAgLnNldFNob3coZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRPZmZzY3JlZW4oZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRXZWJhdWRpbyh0cnVlKVxuICAgICAgICAgICAgICAgICAgICAuc2V0Tm9kZUludGVncmF0aW9uKHRydWUpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgICAgICBjYXNlIFwiQlJPV1NFUlwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQnJvd3NlclByb2ZpbGVCdWlsZGVyKGJyb3dzZXIpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRQcm9maWxlKG5hbWUpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRIZWlnaHQoMzUwMDApXG4gICAgICAgICAgICAgICAgICAgIC5zZXRTaG93KHRydWUpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRPZmZzY3JlZW4oZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgIC5zZXROb2RlSW50ZWdyYXRpb24odHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgLnNldFVzZVJlYWN0b3IoZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRXZWJhdWRpbyh0cnVlKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SG9zdGVkKHRydWUpXG4gICAgICAgICAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgICAgICAvLyBjYXNlIFwiZGVmYXVsdF81MDBcIjpcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gQnJvd3NlcnMuY3JlYXRlRGVmYXVsdChicm93c2VyLCA1MDApO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIGNhc2UgXCJ0ZXN0XCI6XG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIEJyb3dzZXJzLmNyZWF0ZURlZmF1bHQoYnJvd3NlciwgMTAwMDApO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIGNhc2UgXCJkZWZhdWx0XzUwMDBcIjpcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gQnJvd3NlcnMuY3JlYXRlRGVmYXVsdChicm93c2VyLCA1MDAwKTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBjYXNlIFwiZGVmYXVsdFwiOlxuICAgICAgICAgICAgLy8gICAgIHJldHVybiBicm93c2VyO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkluY29ycmVjdCBwcm9maWxlIG5hbWU6IFwiICsgbmFtZSk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVEZWZhdWx0KGJyb3dzZXI6IEJyb3dzZXIsIGhlaWdodDogbnVtYmVyKSB7XG4gICAgICAgIGJyb3dzZXIgPSBPYmplY3QuYXNzaWduKHt9LCBicm93c2VyKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHBhZ2UgaGVpZ2h0IHdlIHNob3VsZCB1c2Ugd2hlbiBsb2FkaW5nIHRoZSBkb2N1bWVudC4gIEl0XG4gICAgICAgICAqIG1pZ2h0IG1ha2Ugc2Vuc2UgaW4gdGhlIGZ1dHVyZSB0byBqdXN0IHNldCB0aGlzIHRvXG4gICAgICAgICAqIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0IGFmdGVyIHRoZSBwYWdlIGxvYWRzLiAgSW4gZmFjdFxuICAgICAgICAgKiB0aGlzIHdpbGwgZGVmaW5pdGVseSBuZWVkIHRvIGJlIGNoYW5nZWQuICBTb21lIGphdmFzY3JpcHQgYW5kXG4gICAgICAgICAqIENTUyBjYW4gZGlzcGxheSB0aGluZ3MgYXQgdGhlIGJvdHRvbSBvZiB0aGUgd2luZG93IHNvIGl0XG4gICAgICAgICAqIGNvdWxkIG1ha2UgdGhlIGNhcHR1cmVkIHBhZ2UgbG9vayBtYXNzaXZlLlxuICAgICAgICAgKi9cblxuICAgICAgICBicm93c2VyLmRldmljZUVtdWxhdGlvbi5zY3JlZW5TaXplLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgYnJvd3Nlci5kZXZpY2VFbXVsYXRpb24udmlld1NpemUuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgICAgIHJldHVybiBicm93c2VyO1xuICAgIH1cblxufVxuXG5cbiJdfQ==