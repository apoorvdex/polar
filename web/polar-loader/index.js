"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const os_1 = __importDefault(require("os"));
const url_1 = __importDefault(require("url"));
const electron_1 = require("electron");
function injectApp(scriptSrc, fallbackLoader) {
    if (typeof require === 'function') {
        console.log("Loading via fallbackLoader");
        fallbackLoader();
    }
    else {
        console.log("Loading via script");
        injectScript(scriptSrc);
    }
}
exports.injectApp = injectApp;
function injectScript(src, type) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.defer = false;
    if (type) {
        script.type = type;
    }
    document.body.appendChild(script);
}
exports.injectScript = injectScript;
function load(loadPath) {
    const osType = os_1.default.type();
    return _loadFromHref(document.location.href, loadPath, osType);
}
exports.load = load;
function loadFromAppPath(relativePath) {
    const appPath = electron_1.remote.getGlobal("appPath");
    const entryPoint = path_1.default.join(appPath, relativePath);
    require(entryPoint);
}
exports.loadFromAppPath = loadFromAppPath;
function _loadFromHref(href, loadPath, osType) {
    const resolvedPath = _resolveFromHref(href, loadPath, osType);
    require(resolvedPath);
}
exports._loadFromHref = _loadFromHref;
function _toPath(href, loadPath, os_type) {
    if (href.startsWith('file:')) {
        return _toPathFromFileURL(href, os_type);
    }
    if (href.startsWith('http:') || href.startsWith('https:')) {
        throw new Error("http and https not supported");
    }
    throw new Error("Unable to load from href: " + href);
}
exports._toPath = _toPath;
function _toPathFromFileURL(href, osType) {
    let result = href;
    result = result.replace('file://', '');
    if (osType === 'Windows_NT') {
        result = result.substring(1);
        result = result.replace(/^(.+)\|/, '$1:');
        result = result.replace(/\//g, '\\');
    }
    result = result.replace(/[^/.]+\.html([#?].*)?$/, '');
    result = decodeURI(result);
    return result;
}
exports._toPathFromFileURL = _toPathFromFileURL;
function _resolveURL(from, to) {
    return url_1.default.resolve(from, to);
}
exports._resolveURL = _resolveURL;
function _resolveFromHref(href, loadPath, osType) {
    const resolvedURL = _resolveURL(href, loadPath);
    const resolvedPath = _toPath(resolvedURL, loadPath, osType);
    if (!fs_1.default.existsSync(resolvedPath)) {
        throw new Error(`Could not find ${loadPath} (not found): ${resolvedPath}`);
    }
    return resolvedPath;
}
exports._resolveFromHref = _resolveFromHref;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUtBLGdEQUF3QjtBQUN4Qiw0Q0FBb0I7QUFDcEIsNENBQW9CO0FBQ3BCLDhDQUFzQjtBQUN0Qix1Q0FBZ0M7QUFJaEMsU0FBZ0IsU0FBUyxDQUFDLFNBQWlCLEVBQUUsY0FBMEI7SUFFbkUsSUFBSSxPQUFPLE9BQU8sS0FBSyxVQUFVLEVBQUU7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQzFDLGNBQWMsRUFBRSxDQUFDO0tBQ3BCO1NBQU07UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDbEMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQzNCO0FBRUwsQ0FBQztBQVZELDhCQVVDO0FBRUQsU0FBZ0IsWUFBWSxDQUFDLEdBQVcsRUFBRSxJQUFhO0lBRW5ELE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEQsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFJakIsTUFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsTUFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFFckIsSUFBSSxJQUFJLEVBQUU7UUFDTixNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztLQUN0QjtJQUVELFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRXRDLENBQUM7QUFoQkQsb0NBZ0JDO0FBU0QsU0FBZ0IsSUFBSSxDQUFDLFFBQWdCO0lBT2pDLE1BQU0sTUFBTSxHQUFHLFlBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUV6QixPQUFPLGFBQWEsQ0FBQyxRQUFRLENBQUMsUUFBUyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFFcEUsQ0FBQztBQVhELG9CQVdDO0FBRUQsU0FBZ0IsZUFBZSxDQUFDLFlBQW9CO0lBQ2hELE1BQU0sT0FBTyxHQUFHLGlCQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVDLE1BQU0sVUFBVSxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3BELE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN4QixDQUFDO0FBSkQsMENBSUM7QUFTRCxTQUFnQixhQUFhLENBQUMsSUFBWSxFQUFFLFFBQWdCLEVBQUUsTUFBYztJQUN4RSxNQUFNLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzlELE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUMxQixDQUFDO0FBSEQsc0NBR0M7QUFVRCxTQUFnQixPQUFPLENBQUMsSUFBWSxFQUFFLFFBQWdCLEVBQUUsT0FBZTtJQUVuRSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDMUIsT0FBTyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDNUM7SUFFRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUN2RCxNQUFNLElBQUksS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUM7S0FFbkQ7SUFFRCxNQUFNLElBQUksS0FBSyxDQUFDLDRCQUE0QixHQUFHLElBQUksQ0FBQyxDQUFDO0FBRXpELENBQUM7QUFiRCwwQkFhQztBQVFELFNBQWdCLGtCQUFrQixDQUFDLElBQVksRUFBRSxNQUFjO0lBRTNELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztJQUlsQixNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFTdkMsSUFBSSxNQUFNLEtBQUssWUFBWSxFQUFFO1FBR3pCLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBUzdCLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUcxQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FFeEM7SUFHRCxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUV0RCxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRTNCLE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUF4Q0QsZ0RBd0NDO0FBU0QsU0FBZ0IsV0FBVyxDQUFDLElBQVksRUFBRSxFQUFVO0lBQ2hELE9BQU8sYUFBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDakMsQ0FBQztBQUZELGtDQUVDO0FBVUQsU0FBZ0IsZ0JBQWdCLENBQUMsSUFBWSxFQUFFLFFBQWdCLEVBQUUsTUFBYztJQUUzRSxNQUFNLFdBQVcsR0FBRyxXQUFXLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBRWhELE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBRTVELElBQUksQ0FBRSxZQUFFLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFO1FBQy9CLE1BQU0sSUFBSSxLQUFLLENBQUMsa0JBQWtCLFFBQVEsaUJBQWlCLFlBQVksRUFBRSxDQUFDLENBQUM7S0FDOUU7SUFFRCxPQUFPLFlBQVksQ0FBQztBQUV4QixDQUFDO0FBWkQsNENBWUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuLy8gY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuLy8gY29uc3Qgb3MgPSByZXF1aXJlKCdvcycpO1xuLy8gY29uc3QgdXJsID0gcmVxdWlyZSgndXJsJyk7XG5cbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBvcyBmcm9tICdvcyc7XG5pbXBvcnQgdXJsIGZyb20gJ3VybCc7XG5pbXBvcnQge3JlbW90ZX0gZnJvbSAnZWxlY3Ryb24nO1xuXG5kZWNsYXJlIHZhciBkb2N1bWVudDogSFRNTERvY3VtZW50O1xuXG5leHBvcnQgZnVuY3Rpb24gaW5qZWN0QXBwKHNjcmlwdFNyYzogc3RyaW5nLCBmYWxsYmFja0xvYWRlcjogKCkgPT4gdm9pZCkge1xuXG4gICAgaWYgKHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTG9hZGluZyB2aWEgZmFsbGJhY2tMb2FkZXJcIik7XG4gICAgICAgIGZhbGxiYWNrTG9hZGVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJMb2FkaW5nIHZpYSBzY3JpcHRcIik7XG4gICAgICAgIGluamVjdFNjcmlwdChzY3JpcHRTcmMpO1xuICAgIH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5qZWN0U2NyaXB0KHNyYzogc3RyaW5nLCB0eXBlPzogc3RyaW5nKSB7XG5cbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzY3JpcHQuc3JjID0gc3JjO1xuXG4gICAgLy8gbG9hZGluZyBhc3luYyBpcyB1Z2x5IGJ1dCB3ZSdyZSBnb2luZyB0byBtb3ZlIHRvIHdlYnBhY2sgYW5kIGNsZWFuIHRoaXNcbiAgICAvLyB1cCBldmVudHVhbGx5LlxuICAgIHNjcmlwdC5hc3luYyA9IGZhbHNlO1xuICAgIHNjcmlwdC5kZWZlciA9IGZhbHNlO1xuXG4gICAgaWYgKHR5cGUpIHtcbiAgICAgICAgc2NyaXB0LnR5cGUgPSB0eXBlO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcblxufVxuXG4vKipcbiAqIFdvcmsgYXJvdW5kIGZvciB0aGUgaXNzdWUgb2YgbG9hZGluZyBtb2R1bGVzIHdpdGggcmVxdWlyZSBpbiBFbGVjdHJvbiB3aGVuXG4gKiBsb2FkaW5nIGZpbGUgVVJMcyBhbmQgbmVlZGluZyB0byBhY2Nlc3MgdGhlIGZpbGVzeXN0ZW0uXG4gKlxuICogQHBhcmFtIGxvYWRQYXRoIHtzdHJpbmd9IFRoZSBwYXRoIHRvIHRoZSBmaWxlIHJlbGF0aXZlIHRvIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYuXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gbG9hZChsb2FkUGF0aDogc3RyaW5nKSB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3MudHlwZSgpIG1ldGhvZCByZXR1cm5zIGEgc3RyaW5nIGlkZW50aWZ5aW5nIHRoZSBvcGVyYXRpbmcgc3lzdGVtXG4gICAgICogbmFtZSBhcyByZXR1cm5lZCBieSB1bmFtZSgzKS4gRm9yIGV4YW1wbGUgJ0xpbnV4JyBvbiBMaW51eCwgJ0Rhcndpbicgb25cbiAgICAgKiBtYWNPUyBhbmQgJ1dpbmRvd3NfTlQnIG9uIFdpbmRvd3MuXG4gICAgICovXG4gICAgY29uc3Qgb3NUeXBlID0gb3MudHlwZSgpO1xuXG4gICAgcmV0dXJuIF9sb2FkRnJvbUhyZWYoZG9jdW1lbnQubG9jYXRpb24hLmhyZWYsIGxvYWRQYXRoLCBvc1R5cGUpO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRnJvbUFwcFBhdGgocmVsYXRpdmVQYXRoOiBzdHJpbmcpIHtcbiAgICBjb25zdCBhcHBQYXRoID0gcmVtb3RlLmdldEdsb2JhbChcImFwcFBhdGhcIik7XG4gICAgY29uc3QgZW50cnlQb2ludCA9IHBhdGguam9pbihhcHBQYXRoLCByZWxhdGl2ZVBhdGgpO1xuICAgIHJlcXVpcmUoZW50cnlQb2ludCk7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBocmVmIFRoZSBVUkwgd2UncmUgY3VycmVudGx5IHdvcmtpbmcgd2l0aCBpbiB0aGUgYnJvd3Nlci5cbiAqIEBwYXJhbSBsb2FkUGF0aCBUaGUgcGF0aCB3ZSB3YW50IHRvIGxvYWQuXG4gKiBAcGFyYW0gb3NUeXBlICBUaGUgb3NfdHlwZSB3ZSdyZSBydW5uaW5nIHVuZGVyLlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9sb2FkRnJvbUhyZWYoaHJlZjogc3RyaW5nLCBsb2FkUGF0aDogc3RyaW5nLCBvc1R5cGU6IHN0cmluZykge1xuICAgIGNvbnN0IHJlc29sdmVkUGF0aCA9IF9yZXNvbHZlRnJvbUhyZWYoaHJlZiwgbG9hZFBhdGgsIG9zVHlwZSk7XG4gICAgcmVxdWlyZShyZXNvbHZlZFBhdGgpO1xufVxuXG4vKipcbiAqIENvbnZlcnQgdGhlIGdpdmVuIGZpbGU6IFVSTCB0byBhIGxvY2FsIHBhdGguXG4gKlxuICogQHBhcmFtIGhyZWYgIFRoZSBVUkwgd2UncmUgY3VycmVudGx5IHdvcmtpbmcgd2l0aCBpbiB0aGUgYnJvd3Nlci5cbiAqIEBwYXJhbSBvc190eXBlIFRoZSBvcyB3ZSdyZSBydW5uaW5nIHVuZGVyLlxuICogQHJldHVybiB7c3RyaW5nfVxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF90b1BhdGgoaHJlZjogc3RyaW5nLCBsb2FkUGF0aDogc3RyaW5nLCBvc190eXBlOiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgaWYgKGhyZWYuc3RhcnRzV2l0aCgnZmlsZTonKSkge1xuICAgICAgICByZXR1cm4gX3RvUGF0aEZyb21GaWxlVVJMKGhyZWYsIG9zX3R5cGUpO1xuICAgIH1cblxuICAgIGlmIChocmVmLnN0YXJ0c1dpdGgoJ2h0dHA6JykgfHwgaHJlZi5zdGFydHNXaXRoKCdodHRwczonKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJodHRwIGFuZCBodHRwcyBub3Qgc3VwcG9ydGVkXCIpO1xuICAgICAgICAvLyByZXR1cm4gX3RvUGF0aEZyb21BcHAoaHJlZiwgbG9hZFBhdGgsIG9zX3R5cGUpO1xuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBsb2FkIGZyb20gaHJlZjogXCIgKyBocmVmKTtcblxufVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gX3RvUGF0aEZyb21BcHAoaHJlZjogc3RyaW5nLCBsb2FkUGF0aDogc3RyaW5nLCBvc190eXBlOiBzdHJpbmcpOiBzdHJpbmcge1xuLy9cbi8vICAgICByZXR1cm4gYXBwLmdldEFwcFBhdGgoKSArIGxvYWRQYXRoO1xuLy9cbi8vIH1cblxuZXhwb3J0IGZ1bmN0aW9uIF90b1BhdGhGcm9tRmlsZVVSTChocmVmOiBzdHJpbmcsIG9zVHlwZTogc3RyaW5nKTogc3RyaW5nIHtcblxuICAgIGxldCByZXN1bHQgPSBocmVmO1xuXG4gICAgLy8gcmVtb3ZlIHRoZSBmaWxlIFVSTCBwb3J0aW9uXG5cbiAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZSgnZmlsZTovLycsICcnKTtcblxuICAgIC8vIFRPRE86IGlmIHdlJ3JlIG9uIFdpbmRvd3Mgd2UgaGF2ZSB0byByZW1vdmUgYW4gYWRkaXRpb25hbCAnLycgaW4gdGhlXG4gICAgLy8gcGF0aFxuICAgIC8vIGh0dHBzOi8vYmxvZ3MubXNkbi5taWNyb3NvZnQuY29tL2llLzIwMDYvMTIvMDYvZmlsZS11cmlzLWluLXdpbmRvd3MvXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL1Rvb1RhbGxOYXRlL2ZpbGUtdXJpLXRvLXBhdGgvYmxvYi9tYXN0ZXIvaW5kZXguanNcblxuICAgIC8vIG9zLnR5cGUgaXMgJ1dpbmRvd3NfTlQnIG9uIFdpbmRvd3NcblxuICAgIGlmIChvc1R5cGUgPT09ICdXaW5kb3dzX05UJykge1xuXG4gICAgICAgIC8vIG9uIFdpbmRvd3MgdGhlcmUncyBhIC8gcHJlZml4IG9uIGZpbGUgbmFtZXMuXG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5zdWJzdHJpbmcoMSk7XG5cbiAgICAgICAgLy8gMy4yICBEcml2ZXMsIGRyaXZlIGxldHRlcnMsIG1vdW50IHBvaW50cywgZmlsZSBzeXN0ZW0gcm9vdFxuICAgICAgICAvLyBEcml2ZSBsZXR0ZXJzIGFyZSBtYXBwZWQgaW50byB0aGUgdG9wIG9mIGEgZmlsZSBVUkkgaW4gdmFyaW91cyB3YXlzLFxuICAgICAgICAvLyBkZXBlbmRpbmcgb24gdGhlIGltcGxlbWVudGF0aW9uOyBzb21lIGFwcGxpY2F0aW9ucyBzdWJzdGl0dXRlXG4gICAgICAgIC8vIHZlcnRpY2FsIGJhciAoXCJ8XCIpIGZvciB0aGUgY29sb24gYWZ0ZXIgdGhlIGRyaXZlIGxldHRlciwgeWllbGRpbmdcbiAgICAgICAgLy8gXCJmaWxlOi8vL2N8L3RtcC90ZXN0LnR4dFwiLiAgSW4gc29tZSBjYXNlcywgdGhlIGNvbG9uIGlzIGxlZnRcbiAgICAgICAgLy8gdW5jaGFuZ2VkLCBhcyBpbiBcImZpbGU6Ly8vYzovdG1wL3Rlc3QudHh0XCIuICBJbiBvdGhlciBjYXNlcywgdGhlXG4gICAgICAgIC8vIGNvbG9uIGlzIHNpbXBseSBvbWl0dGVkLCBhcyBpbiBcImZpbGU6Ly8vYy90bXAvdGVzdC50eHRcIi5cbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoL14oLispXFx8LywgJyQxOicpO1xuXG4gICAgICAgIC8vIGZvciBXaW5kb3dzLCB3ZSBuZWVkIHRvIGludmVydCB0aGUgcGF0aCBzZXBhcmF0b3JzIGZyb20gd2hhdCBhIFVSSSB1c2VzXG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKC9cXC8vZywgJ1xcXFwnKTtcblxuICAgIH1cblxuICAgIC8vIG5vdyByZW1vdmUgdGhlIGZpbGVuYW1lIGFuZCB0aGUgcXVlcnkgZGF0YS5cbiAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZSgvW14vLl0rXFwuaHRtbChbIz9dLiopPyQvLCAnJyk7XG5cbiAgICByZXN1bHQgPSBkZWNvZGVVUkkocmVzdWx0KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBmcm9tIFRoZSBzdGFydGluZyBVUkwgdG8gcmVzb2x2ZSBmcm9tLlxuICogQHBhcmFtIHRvIFRoZSBwYXRoIHRvIHJlc29sdmUgYmFzZWQgb24gdGhlIGZyb20gVVJMLlxuICogQHJldHVybiB7c3RyaW5nfVxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9yZXNvbHZlVVJMKGZyb206IHN0cmluZywgdG86IHN0cmluZykge1xuICAgIHJldHVybiB1cmwucmVzb2x2ZShmcm9tLCB0byk7XG59XG5cbi8qKlxuICogUGVyZm9ybXMgdGhlIGZ1bGwgcmVzb2x1dGlvbiBmb3IgdXMgYnV0IGRvZXMgbm90IGRvIHRoZSByZXF1aXJlLlxuICpcbiAqIEBwYXJhbSBocmVmIHtzdHJpbmd9IFRoZSBkb2N1bWVudC5sb2NhdGlvbi5ocmVmXG4gKiBAcGFyYW0gbG9hZFBhdGgge3N0cmluZ30gVGhlIHBhdGggZXhwcmVzc2lvbiB0byBsb2FkLlxuICogQHBhcmFtIG9zVHlwZSBUaGUgb3Mgd2UncmUgcnVubmluZyB1bmRlci5cbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfcmVzb2x2ZUZyb21IcmVmKGhyZWY6IHN0cmluZywgbG9hZFBhdGg6IHN0cmluZywgb3NUeXBlOiBzdHJpbmcpIHtcblxuICAgIGNvbnN0IHJlc29sdmVkVVJMID0gX3Jlc29sdmVVUkwoaHJlZiwgbG9hZFBhdGgpO1xuXG4gICAgY29uc3QgcmVzb2x2ZWRQYXRoID0gX3RvUGF0aChyZXNvbHZlZFVSTCwgbG9hZFBhdGgsIG9zVHlwZSk7XG5cbiAgICBpZiAoISBmcy5leGlzdHNTeW5jKHJlc29sdmVkUGF0aCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3QgZmluZCAke2xvYWRQYXRofSAobm90IGZvdW5kKTogJHtyZXNvbHZlZFBhdGh9YCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc29sdmVkUGF0aDtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRPcHRpb25zIHtcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSB3ZSBmaXJzdCBkZXRlcm1pbmUgdGhlIHBhdGggZnJvbSB0aGUgZmlsZSBVUkwgZ2l2ZW4sIHRoZW4gd2VcbiAgICAgKiBjaGFuZ2UgdGhlIFVSTCB2aWEgZG9jdW1lbnRcbiAgICAgKi9cbiAgICByZWFkb25seSB1c2VMb2NhbFdlYlVSTDogYm9vbGVhbjtcblxufVxuIl19