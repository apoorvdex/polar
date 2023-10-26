"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const https_1 = __importDefault(require("https"));
const url = __importStar(require("url"));
class Http {
    static fetchContent(options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof options === 'string') {
                options = url.parse(options);
            }
            let provider;
            if (options.protocol === "http:") {
                console.log("Using http");
                provider = http_1.default;
            }
            else if (options.protocol === "https:") {
                console.log("Using https");
                provider = https_1.default;
            }
            else {
                throw new Error("No provider for protocol: " + options.protocol);
            }
            return new Promise((resolve, reject) => {
                provider.get(options, response => {
                    if (response.statusCode !== 200) {
                        reject(new Error("Wrong status code: " + response.statusCode));
                    }
                    let data = [];
                    response.on('data', (chunk) => {
                        data.push(chunk);
                    });
                    response.on('end', () => {
                        let buffer = Buffer.concat(data);
                        resolve(buffer);
                    });
                });
            });
        });
    }
    static execute(options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof options === 'string') {
                options = url.parse(options);
            }
            let provider;
            if (options.protocol === "http:") {
                console.log("Using http");
                provider = http_1.default;
            }
            else if (options.protocol === "https:") {
                console.log("Using https");
                provider = https_1.default;
            }
            else {
                throw new Error("No provider for protocol: " + options.protocol);
            }
            return new Promise((resolve, reject) => {
                provider.get(options, (response) => {
                    if (response.statusCode !== 200) {
                        reject(new Error("Wrong status code: " + response.statusCode));
                    }
                    let data = [];
                    response.on('data', (chunk) => {
                        data.push(chunk);
                    });
                    response.on('end', () => {
                        let buffer = Buffer.concat(data);
                        resolve({
                            response,
                            data: buffer
                        });
                    });
                });
            });
        });
    }
}
exports.Http = Http;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkh0dHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxnREFBMEU7QUFDMUUsa0RBQTBCO0FBRTFCLHlDQUEyQjtBQUUzQixNQUFhLElBQUk7SUFZYixNQUFNLENBQU8sWUFBWSxDQUFDLE9BQWdDOztZQUV0RCxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRTtnQkFDN0IsT0FBTyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDaEM7WUFFRCxJQUFJLFFBQW1CLENBQUM7WUFFeEIsSUFBRyxPQUFPLENBQUMsUUFBUSxLQUFLLE9BQU8sRUFBRTtnQkFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDMUIsUUFBUSxHQUFHLGNBQUksQ0FBQzthQUNuQjtpQkFBTSxJQUFJLE9BQU8sQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFO2dCQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMzQixRQUFRLEdBQUcsZUFBSyxDQUFDO2FBQ3BCO2lCQUFNO2dCQUNILE1BQU0sSUFBSSxLQUFLLENBQUMsNEJBQTRCLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3BFO1lBRUQsT0FBTyxJQUFJLE9BQU8sQ0FBUyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFFM0MsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLEVBQUU7b0JBRTdCLElBQUcsUUFBUSxDQUFDLFVBQVUsS0FBSyxHQUFHLEVBQUU7d0JBQzVCLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztxQkFDbEU7b0JBSUQsSUFBSSxJQUFJLEdBQVUsRUFBRSxDQUFDO29CQUVyQixRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO3dCQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNyQixDQUFDLENBQUMsQ0FBQztvQkFFSCxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUU7d0JBSXBCLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2pDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFFcEIsQ0FBQyxDQUFDLENBQUM7Z0JBRVAsQ0FBQyxDQUFDLENBQUE7WUFFTixDQUFDLENBQUMsQ0FBQztRQUVQLENBQUM7S0FBQTtJQU9ELE1BQU0sQ0FBTyxPQUFPLENBQUMsT0FBZ0M7O1lBRWpELElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO2dCQUM3QixPQUFPLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNoQztZQUVELElBQUksUUFBbUIsQ0FBQztZQUV4QixJQUFHLE9BQU8sQ0FBQyxRQUFRLEtBQUssT0FBTyxFQUFFO2dCQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUMxQixRQUFRLEdBQUcsY0FBSSxDQUFDO2FBQ25CO2lCQUFNLElBQUksT0FBTyxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUU7Z0JBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzNCLFFBQVEsR0FBRyxlQUFLLENBQUM7YUFDcEI7aUJBQU07Z0JBQ0gsTUFBTSxJQUFJLEtBQUssQ0FBQyw0QkFBNEIsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDcEU7WUFFRCxPQUFPLElBQUksT0FBTyxDQUFXLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUU3QyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFO29CQUUvQixJQUFHLFFBQVEsQ0FBQyxVQUFVLEtBQUssR0FBRyxFQUFFO3dCQUM1QixNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMscUJBQXFCLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7cUJBQ2xFO29CQUlELElBQUksSUFBSSxHQUFVLEVBQUUsQ0FBQztvQkFFckIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTt3QkFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDckIsQ0FBQyxDQUFDLENBQUM7b0JBRUgsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFO3dCQUlwQixJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNqQyxPQUFPLENBQUM7NEJBQ0osUUFBUTs0QkFDUixJQUFJLEVBQUUsTUFBTTt5QkFDZixDQUFDLENBQUM7b0JBRVAsQ0FBQyxDQUFDLENBQUM7Z0JBRVAsQ0FBQyxDQUFDLENBQUE7WUFFTixDQUFDLENBQUMsQ0FBQztRQUVQLENBQUM7S0FBQTtDQUVKO0FBdEhELG9CQXNIQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IGh0dHAsIHtDbGllbnRSZXF1ZXN0LCBJbmNvbWluZ01lc3NhZ2UsIFJlcXVlc3RPcHRpb25zfSBmcm9tICdodHRwJztcbmltcG9ydCBodHRwcyBmcm9tICdodHRwcyc7XG5pbXBvcnQge1VSTH0gZnJvbSBcInVybFwiO1xuaW1wb3J0ICogYXMgdXJsIGZyb20gJ3VybCc7XG5cbmV4cG9ydCBjbGFzcyBIdHRwIHtcblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm0gYW4gSFRUUCB0ZXN0IGFuZCBnZXQgdGhlIHJlc3BvbnNlLlxuICAgICAqXG4gICAgICogaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9odHRwX3JlcXVlc3Rfb3B0aW9uc19jYWxsYmFja1xuICAgICAqXG4gICAgICpcbiAgICAgKiAvLyBUT0RPOiByZXBsYWNlIHdpdGg6IGh0dHBzOi8vZ2l0aHViLmNvbS9yZXF1ZXN0L3JlcXVlc3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSBvcHRpb25zXG4gICAgICovXG4gICAgc3RhdGljIGFzeW5jIGZldGNoQ29udGVudChvcHRpb25zOiBSZXF1ZXN0T3B0aW9ucyB8IHN0cmluZyk6IFByb21pc2U8QnVmZmVyPiB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHVybC5wYXJzZShvcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwcm92aWRlcjogUmVxdWVzdGVyO1xuXG4gICAgICAgIGlmKG9wdGlvbnMucHJvdG9jb2wgPT09IFwiaHR0cDpcIikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVc2luZyBodHRwXCIpO1xuICAgICAgICAgICAgcHJvdmlkZXIgPSBodHRwO1xuICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMucHJvdG9jb2wgPT09IFwiaHR0cHM6XCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXNpbmcgaHR0cHNcIik7XG4gICAgICAgICAgICBwcm92aWRlciA9IGh0dHBzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gcHJvdmlkZXIgZm9yIHByb3RvY29sOiBcIiArIG9wdGlvbnMucHJvdG9jb2wpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPEJ1ZmZlcj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgICAgICAgICBwcm92aWRlci5nZXQob3B0aW9ucywgcmVzcG9uc2UgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzQ29kZSAhPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJXcm9uZyBzdGF0dXMgY29kZTogXCIgKyByZXNwb25zZS5zdGF0dXNDb2RlKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gcmVqZWN0IGlmIHdlIGRvbid0IGhhdmUgdGhlIHByb3BlciByZXNwb25zZVxuXG4gICAgICAgICAgICAgICAgbGV0IGRhdGE6IGFueVtdID0gW107XG5cbiAgICAgICAgICAgICAgICByZXNwb25zZS5vbignZGF0YScsIChjaHVuaykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLnB1c2goY2h1bmspO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmVzcG9uc2Uub24oJ2VuZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy9hdCB0aGlzIHBvaW50IGRhdGEgaXMgYW4gYXJyYXkgb2YgQnVmZmVyc1xuICAgICAgICAgICAgICAgICAgICAvL3NvIEJ1ZmZlci5jb25jYXQoKSBjYW4gbWFrZSB1cyBhIG5ldyBCdWZmZXJcbiAgICAgICAgICAgICAgICAgICAgLy9vZiBhbGwgb2YgdGhlbSB0b2dldGhlclxuICAgICAgICAgICAgICAgICAgICBsZXQgYnVmZmVyID0gQnVmZmVyLmNvbmNhdChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShidWZmZXIpO1xuXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeGVjdXRlIGFuIEhUVFAgcmVxdWVzdCBhbmQgcmV0dXJuIHRoZSBkYXRhIGFuZCB0aGUgcmVzcG9uc2UuXG4gICAgICogQHBhcmFtIG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAgICovXG4gICAgc3RhdGljIGFzeW5jIGV4ZWN1dGUob3B0aW9uczogUmVxdWVzdE9wdGlvbnMgfCBzdHJpbmcpOiBQcm9taXNlPEV4ZWN1dGVkPiB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHVybC5wYXJzZShvcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwcm92aWRlcjogUmVxdWVzdGVyO1xuXG4gICAgICAgIGlmKG9wdGlvbnMucHJvdG9jb2wgPT09IFwiaHR0cDpcIikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVc2luZyBodHRwXCIpO1xuICAgICAgICAgICAgcHJvdmlkZXIgPSBodHRwO1xuICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMucHJvdG9jb2wgPT09IFwiaHR0cHM6XCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXNpbmcgaHR0cHNcIik7XG4gICAgICAgICAgICBwcm92aWRlciA9IGh0dHBzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gcHJvdmlkZXIgZm9yIHByb3RvY29sOiBcIiArIG9wdGlvbnMucHJvdG9jb2wpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPEV4ZWN1dGVkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgICAgICAgIHByb3ZpZGVyLmdldChvcHRpb25zLCAocmVzcG9uc2UpID0+IHtcblxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1c0NvZGUgIT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiV3Jvbmcgc3RhdHVzIGNvZGU6IFwiICsgcmVzcG9uc2Uuc3RhdHVzQ29kZSkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHJlamVjdCBpZiB3ZSBkb24ndCBoYXZlIHRoZSBwcm9wZXIgcmVzcG9uc2VcblxuICAgICAgICAgICAgICAgIGxldCBkYXRhOiBhbnlbXSA9IFtdO1xuXG4gICAgICAgICAgICAgICAgcmVzcG9uc2Uub24oJ2RhdGEnLCAoY2h1bmspID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5wdXNoKGNodW5rKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLm9uKCdlbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vYXQgdGhpcyBwb2ludCBkYXRhIGlzIGFuIGFycmF5IG9mIEJ1ZmZlcnNcbiAgICAgICAgICAgICAgICAgICAgLy9zbyBCdWZmZXIuY29uY2F0KCkgY2FuIG1ha2UgdXMgYSBuZXcgQnVmZmVyXG4gICAgICAgICAgICAgICAgICAgIC8vb2YgYWxsIG9mIHRoZW0gdG9nZXRoZXJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJ1ZmZlciA9IEJ1ZmZlci5jb25jYXQoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBidWZmZXJcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSlcblxuICAgICAgICB9KTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RlciB7XG4gICAgZ2V0KG9wdGlvbnM6IFJlcXVlc3RPcHRpb25zIHwgc3RyaW5nIHwgVVJMLCBjYWxsYmFjaz86IChyZXM6IEluY29taW5nTWVzc2FnZSkgPT4gdm9pZCk6IENsaWVudFJlcXVlc3Q7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXhlY3V0ZWQge1xuICAgIHJlc3BvbnNlOiBodHRwLkluY29taW5nTWVzc2FnZSxcbiAgICBkYXRhOiBCdWZmZXJcbn1cbiJdfQ==