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
const Logger_1 = require("../../logger/Logger");
const Preconditions_1 = require("../../Preconditions");
const Paths_1 = require("../../util/Paths");
const express_1 = __importDefault(require("express"));
const serve_static_1 = __importDefault(require("serve-static"));
const ResourceRegistry_1 = require("./ResourceRegistry");
const http = __importStar(require("http"));
const https = __importStar(require("https"));
const log = Logger_1.Logger.create();
const STATIC_CACHE_MAX_AGE = 365 * 24 * 60 * 60;
class Webserver {
    constructor(webserverConfig, fileRegistry, resourceRegistry = new ResourceRegistry_1.ResourceRegistry()) {
        this.webserverConfig = Preconditions_1.Preconditions.assertNotNull(webserverConfig, "webserverConfig");
        this.fileRegistry = Preconditions_1.Preconditions.assertNotNull(fileRegistry, "fileRegistry");
        this.resourceRegistry = resourceRegistry;
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            log.info("Running with config: ", this.webserverConfig);
            express_1.default.static.mime.define({ 'text/html': ['chtml'] });
            this.app = express_1.default();
            this.app.use((req, res, next) => {
                next();
                if (req.path && req.path.endsWith('woff2')) {
                    res.set({ 'Cache-Control': `public, max-age=${STATIC_CACHE_MAX_AGE}, immutable` });
                }
            });
            this.app.use(serve_static_1.default(this.webserverConfig.dir, { immutable: true }));
            this.app.use(express_1.default.json());
            this.app.use(express_1.default.urlencoded());
            this.registerFilesHandler();
            this.registerResourcesHandler();
            if (this.webserverConfig.useSSL) {
                Preconditions_1.Preconditions.assertPresent(this.webserverConfig.ssl, "No SSLConfig");
                const sslConfig = {
                    key: this.webserverConfig.ssl.key,
                    cert: this.webserverConfig.ssl.cert
                };
                this.server =
                    https.createServer(sslConfig, this.app)
                        .listen(this.webserverConfig.port, this.webserverConfig.host);
            }
            else {
                this.server =
                    http.createServer(this.app)
                        .listen(this.webserverConfig.port, this.webserverConfig.host);
            }
            return new Promise(resolve => {
                this.server.once('listening', () => resolve());
            });
        });
    }
    stop() {
        log.info("Stopping...");
        this.server.close();
        log.info("Stopping...done");
    }
    get(type, ...handlers) {
        this.app.get(type, ...handlers);
    }
    options(type, ...handlers) {
        this.app.options(type, ...handlers);
    }
    post(type, ...handlers) {
        this.app.post(type, ...handlers);
    }
    put(type, ...handlers) {
        this.app.put(type, ...handlers);
    }
    registerFilesHandler() {
        this.app.get(/files\/.*/, (req, res) => {
            try {
                log.info("Handling file at path: " + req.path);
                const hashcode = Paths_1.Paths.basename(req.path);
                if (!hashcode) {
                    const msg = "No key given for /file";
                    log.error(msg);
                    res.status(404).send(msg);
                }
                else if (!this.fileRegistry.hasKey(hashcode)) {
                    const msg = "File not found with hashcode: " + hashcode;
                    log.error(msg);
                    res.status(404).send(msg);
                }
                else {
                    const keyMeta = this.fileRegistry.get(hashcode);
                    const filename = keyMeta.filename;
                    log.info(`Serving file at ${req.path} from ${filename}`);
                    return res.sendFile(filename);
                }
            }
            catch (e) {
                log.error(`Could not handle serving file. (req.path=${req.path})`, e);
            }
        });
    }
    registerResourcesHandler() {
        this.app.get(/.*/, (req, res) => {
            try {
                log.info("Handling resource at path: " + req.path);
                if (!this.resourceRegistry.contains(req.path)) {
                    const msg = "Resource not found: " + req.path;
                    log.error(msg);
                    res.status(404).send(msg);
                }
                else {
                    const filePath = this.resourceRegistry.get(req.path);
                    return res.sendFile(filePath);
                }
            }
            catch (e) {
                log.error(`Could not handle serving file. (req.path=${req.path})`, e);
            }
        });
    }
}
exports.Webserver = Webserver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2Vic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiV2Vic2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsZ0RBQTJDO0FBQzNDLHVEQUFrRDtBQUNsRCw0Q0FBdUM7QUFFdkMsc0RBQXlEO0FBQ3pELGdFQUF1QztBQUN2Qyx5REFBb0Q7QUFDcEQsMkNBQTZCO0FBQzdCLDZDQUErQjtBQUsvQixNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBTSxvQkFBb0IsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFFaEQsTUFBYSxTQUFTO0lBU2xCLFlBQVksZUFBZ0MsRUFDaEMsWUFBMEIsRUFDMUIsbUJBQXFDLElBQUksbUNBQWdCLEVBQUU7UUFFbkUsSUFBSSxDQUFDLGVBQWUsR0FBRyw2QkFBYSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUN2RixJQUFJLENBQUMsWUFBWSxHQUFHLDZCQUFhLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxjQUFjLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7SUFFN0MsQ0FBQztJQUVZLEtBQUs7O1lBRWQsR0FBRyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFeEQsaUJBQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUV2RCxJQUFJLENBQUMsR0FBRyxHQUFHLGlCQUFPLEVBQUUsQ0FBQztZQUVyQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7Z0JBRTVCLElBQUks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eSBsaXN0ZW5pbmcgb24gbG9jYWxob3N0XG5cbmltcG9ydCB7V2Vic2VydmVyQ29uZmlnfSBmcm9tICcuL1dlYnNlcnZlckNvbmZpZyc7XG5pbXBvcnQge0ZpbGVSZWdpc3RyeX0gZnJvbSAnLi9GaWxlUmVnaXN0cnknO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uLy4uL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtQcmVjb25kaXRpb25zfSBmcm9tICcuLi8uLi9QcmVjb25kaXRpb25zJztcbmltcG9ydCB7UGF0aHN9IGZyb20gJy4uLy4uL3V0aWwvUGF0aHMnO1xuXG5pbXBvcnQgZXhwcmVzcywge0V4cHJlc3MsIFJlcXVlc3RIYW5kbGVyfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBzZXJ2ZVN0YXRpYyBmcm9tICdzZXJ2ZS1zdGF0aWMnO1xuaW1wb3J0IHtSZXNvdXJjZVJlZ2lzdHJ5fSBmcm9tICcuL1Jlc291cmNlUmVnaXN0cnknO1xuaW1wb3J0ICogYXMgaHR0cCBmcm9tIFwiaHR0cFwiO1xuaW1wb3J0ICogYXMgaHR0cHMgZnJvbSBcImh0dHBzXCI7XG5pbXBvcnQge0NhcHR1cmV9IGZyb20gJy4uLy4uL2NhcHR1cmUvQ2FwdHVyZSc7XG5pbXBvcnQge0NhcHR1cmVPcHRzfSBmcm9tICcuLi8uLi9jYXB0dXJlL0NhcHR1cmVPcHRzJztcbmltcG9ydCB7UGF0aFBhcmFtc30gZnJvbSAnZXhwcmVzcy1zZXJ2ZS1zdGF0aWMtY29yZSc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuY29uc3QgU1RBVElDX0NBQ0hFX01BWF9BR0UgPSAzNjUgKiAyNCAqIDYwICogNjA7XG5cbmV4cG9ydCBjbGFzcyBXZWJzZXJ2ZXIgaW1wbGVtZW50cyBXZWJSZXF1ZXN0SGFuZGxlciB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHdlYnNlcnZlckNvbmZpZzogV2Vic2VydmVyQ29uZmlnO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZmlsZVJlZ2lzdHJ5OiBGaWxlUmVnaXN0cnk7XG4gICAgcHJpdmF0ZSByZWFkb25seSByZXNvdXJjZVJlZ2lzdHJ5OiBSZXNvdXJjZVJlZ2lzdHJ5O1xuXG4gICAgcHJpdmF0ZSBhcHA/OiBFeHByZXNzO1xuICAgIHByaXZhdGUgc2VydmVyPzogaHR0cC5TZXJ2ZXIgfCBodHRwcy5TZXJ2ZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih3ZWJzZXJ2ZXJDb25maWc6IFdlYnNlcnZlckNvbmZpZyxcbiAgICAgICAgICAgICAgICBmaWxlUmVnaXN0cnk6IEZpbGVSZWdpc3RyeSxcbiAgICAgICAgICAgICAgICByZXNvdXJjZVJlZ2lzdHJ5OiBSZXNvdXJjZVJlZ2lzdHJ5ID0gbmV3IFJlc291cmNlUmVnaXN0cnkoKSkge1xuXG4gICAgICAgIHRoaXMud2Vic2VydmVyQ29uZmlnID0gUHJlY29uZGl0aW9ucy5hc3NlcnROb3ROdWxsKHdlYnNlcnZlckNvbmZpZywgXCJ3ZWJzZXJ2ZXJDb25maWdcIik7XG4gICAgICAgIHRoaXMuZmlsZVJlZ2lzdHJ5ID0gUHJlY29uZGl0aW9ucy5hc3NlcnROb3ROdWxsKGZpbGVSZWdpc3RyeSwgXCJmaWxlUmVnaXN0cnlcIik7XG4gICAgICAgIHRoaXMucmVzb3VyY2VSZWdpc3RyeSA9IHJlc291cmNlUmVnaXN0cnk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc3RhcnQoKTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICAgICAgbG9nLmluZm8oXCJSdW5uaW5nIHdpdGggY29uZmlnOiBcIiwgdGhpcy53ZWJzZXJ2ZXJDb25maWcpO1xuXG4gICAgICAgIGV4cHJlc3Muc3RhdGljLm1pbWUuZGVmaW5lKHsgJ3RleHQvaHRtbCc6IFsnY2h0bWwnXSB9KTtcblxuICAgICAgICB0aGlzLmFwcCA9IGV4cHJlc3MoKTtcblxuICAgICAgICB0aGlzLmFwcC51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG5cbiAgICAgICAgICAgIG5leHQoKTtcblxuICAgICAgICAgICAgaWYgKHJlcS5wYXRoICYmIHJlcS5wYXRoLmVuZHNXaXRoKCd3b2ZmMicpKSB7XG4gICAgICAgICAgICAgICAgcmVzLnNldCh7ICdDYWNoZS1Db250cm9sJzogYHB1YmxpYywgbWF4LWFnZT0ke1NUQVRJQ19DQUNIRV9NQVhfQUdFfSwgaW1tdXRhYmxlYCB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBUT0RPOiBhZGQgaW5maW5pdGUgY2FjaGluZyBpZiB0aGUgZmlsZXMgYXJlIHdvZmYyIHdlYiBmb250cy4uLlxuICAgICAgICB0aGlzLmFwcC51c2Uoc2VydmVTdGF0aWModGhpcy53ZWJzZXJ2ZXJDb25maWcuZGlyLCB7aW1tdXRhYmxlOiB0cnVlfSkpO1xuXG4gICAgICAgIHRoaXMuYXBwLnVzZShleHByZXNzLmpzb24oKSk7XG4gICAgICAgIHRoaXMuYXBwLnVzZShleHByZXNzLnVybGVuY29kZWQoKSk7XG5cbiAgICAgICAgdGhpcy5yZWdpc3RlckZpbGVzSGFuZGxlcigpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyUmVzb3VyY2VzSGFuZGxlcigpO1xuXG4gICAgICAgIGlmICh0aGlzLndlYnNlcnZlckNvbmZpZy51c2VTU0wpIHtcblxuICAgICAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnRQcmVzZW50KHRoaXMud2Vic2VydmVyQ29uZmlnLnNzbCwgXCJObyBTU0xDb25maWdcIik7XG5cbiAgICAgICAgICAgIGNvbnN0IHNzbENvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBrZXk6IHRoaXMud2Vic2VydmVyQ29uZmlnLnNzbCEua2V5LFxuICAgICAgICAgICAgICAgIGNlcnQ6IHRoaXMud2Vic2VydmVyQ29uZmlnLnNzbCEuY2VydFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5zZXJ2ZXIgPVxuICAgICAgICAgICAgICAgIGh0dHBzLmNyZWF0ZVNlcnZlcihzc2xDb25maWcsIHRoaXMuYXBwKVxuICAgICAgICAgICAgICAgICAgICAubGlzdGVuKHRoaXMud2Vic2VydmVyQ29uZmlnLnBvcnQsIHRoaXMud2Vic2VydmVyQ29uZmlnLmhvc3QpO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHRoaXMuc2VydmVyID1cbiAgICAgICAgICAgICAgICBodHRwLmNyZWF0ZVNlcnZlcih0aGlzLmFwcClcbiAgICAgICAgICAgICAgICAgICAgLmxpc3Rlbih0aGlzLndlYnNlcnZlckNvbmZpZy5wb3J0LCB0aGlzLndlYnNlcnZlckNvbmZpZy5ob3N0KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gYXdhaXQgZm9yIGxpc3RlbmluZy4uLlxuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VydmVyIS5vbmNlKCdsaXN0ZW5pbmcnLCAoKSA9PiByZXNvbHZlKCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBsb2cuaW5mbyhgV2Vic2VydmVyIHVwIGFuZCBydW5uaW5nIG9uIHBvcnRcbiAgICAgICAgLy8gJHt0aGlzLndlYnNlcnZlckNvbmZpZy5wb3J0fSB3aXRoIGNvbmZpZzogYCwgdGhpcy53ZWJzZXJ2ZXJDb25maWcpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0b3AoKSB7XG5cbiAgICAgICAgbG9nLmluZm8oXCJTdG9wcGluZy4uLlwiKTtcbiAgICAgICAgdGhpcy5zZXJ2ZXIhLmNsb3NlKCk7XG4gICAgICAgIGxvZy5pbmZvKFwiU3RvcHBpbmcuLi5kb25lXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQodHlwZTogUGF0aFBhcmFtcywgLi4uaGFuZGxlcnM6IFJlcXVlc3RIYW5kbGVyW10pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hcHAhLmdldCh0eXBlLCAuLi5oYW5kbGVycyk7XG4gICAgfVxuXG4gICAgcHVibGljIG9wdGlvbnModHlwZTogUGF0aFBhcmFtcywgLi4uaGFuZGxlcnM6IFJlcXVlc3RIYW5kbGVyW10pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hcHAhLm9wdGlvbnModHlwZSwgLi4uaGFuZGxlcnMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwb3N0KHR5cGU6IFBhdGhQYXJhbXMsIC4uLmhhbmRsZXJzOiBSZXF1ZXN0SGFuZGxlcltdKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYXBwIS5wb3N0KHR5cGUsIC4uLmhhbmRsZXJzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHV0KHR5cGU6IFBhdGhQYXJhbXMsIC4uLmhhbmRsZXJzOiBSZXF1ZXN0SGFuZGxlcltdKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYXBwIS5wdXQodHlwZSwgLi4uaGFuZGxlcnMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVnaXN0ZXJGaWxlc0hhbmRsZXIoKSB7XG5cbiAgICAgICAgdGhpcy5hcHAhLmdldCgvZmlsZXNcXC8uKi8sIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSA9PiB7XG5cbiAgICAgICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgICAgICBsb2cuaW5mbyhcIkhhbmRsaW5nIGZpbGUgYXQgcGF0aDogXCIgKyByZXEucGF0aCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBoYXNoY29kZSA9IFBhdGhzLmJhc2VuYW1lKHJlcS5wYXRoKTtcblxuICAgICAgICAgICAgICAgIGlmICghaGFzaGNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbXNnID0gXCJObyBrZXkgZ2l2ZW4gZm9yIC9maWxlXCI7XG4gICAgICAgICAgICAgICAgICAgIGxvZy5lcnJvcihtc2cpO1xuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwNCkuc2VuZChtc2cpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuZmlsZVJlZ2lzdHJ5Lmhhc0tleShoYXNoY29kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbXNnID0gXCJGaWxlIG5vdCBmb3VuZCB3aXRoIGhhc2hjb2RlOiBcIiArIGhhc2hjb2RlO1xuICAgICAgICAgICAgICAgICAgICBsb2cuZXJyb3IobXNnKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQobXNnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleU1ldGEgPSB0aGlzLmZpbGVSZWdpc3RyeS5nZXQoaGFzaGNvZGUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxlbmFtZSA9IGtleU1ldGEuZmlsZW5hbWU7XG5cbiAgICAgICAgICAgICAgICAgICAgbG9nLmluZm8oYFNlcnZpbmcgZmlsZSBhdCAke3JlcS5wYXRofSBmcm9tICR7ZmlsZW5hbWV9YCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zZW5kRmlsZShmaWxlbmFtZSk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBsb2cuZXJyb3IoYENvdWxkIG5vdCBoYW5kbGUgc2VydmluZyBmaWxlLiAocmVxLnBhdGg9JHtyZXEucGF0aH0pYCwgZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlZ2lzdGVyUmVzb3VyY2VzSGFuZGxlcigpIHtcblxuICAgICAgICB0aGlzLmFwcCEuZ2V0KC8uKi8sIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSA9PiB7XG5cbiAgICAgICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgICAgICBsb2cuaW5mbyhcIkhhbmRsaW5nIHJlc291cmNlIGF0IHBhdGg6IFwiICsgcmVxLnBhdGgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnJlc291cmNlUmVnaXN0cnkuY29udGFpbnMocmVxLnBhdGgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1zZyA9IFwiUmVzb3VyY2Ugbm90IGZvdW5kOiBcIiArIHJlcS5wYXRoO1xuICAgICAgICAgICAgICAgICAgICBsb2cuZXJyb3IobXNnKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQobXNnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5yZXNvdXJjZVJlZ2lzdHJ5LmdldChyZXEucGF0aCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc2VuZEZpbGUoZmlsZVBhdGgpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgbG9nLmVycm9yKGBDb3VsZCBub3QgaGFuZGxlIHNlcnZpbmcgZmlsZS4gKHJlcS5wYXRoPSR7cmVxLnBhdGh9KWAsIGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2ViUmVxdWVzdEhhbmRsZXIge1xuXG4gICAgZ2V0KHR5cGU6IFBhdGhQYXJhbXMsIC4uLmhhbmRsZXJzOiBSZXF1ZXN0SGFuZGxlcltdKTogdm9pZDtcbiAgICBvcHRpb25zKHR5cGU6IFBhdGhQYXJhbXMsIC4uLmhhbmRsZXJzOiBSZXF1ZXN0SGFuZGxlcltdKTogdm9pZDtcbiAgICBwb3N0KHR5cGU6IFBhdGhQYXJhbXMsIC4uLmhhbmRsZXJzOiBSZXF1ZXN0SGFuZGxlcltdKTogdm9pZDtcbiAgICBwdXQodHlwZTogUGF0aFBhcmFtcywgLi4uaGFuZGxlcnM6IFJlcXVlc3RIYW5kbGVyW10pOiB2b2lkO1xuXG59XG4iXX0=