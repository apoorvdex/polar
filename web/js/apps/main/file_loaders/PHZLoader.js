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
const Preconditions_1 = require("../../../Preconditions");
const Fingerprints_1 = require("../../../util/Fingerprints");
const Logger_1 = require("../../../logger/Logger");
const FileLoader_1 = require("./FileLoader");
const WebResource_1 = require("../../../electron/webresource/WebResource");
const ResourcePaths_1 = require("../../../electron/webresource/ResourcePaths");
const Descriptors_1 = require("../../../viewer/html/Descriptors");
const FilePaths_1 = require("../../../util/FilePaths");
const log = Logger_1.Logger.create();
class PHZLoader extends FileLoader_1.FileLoader {
    constructor(opts) {
        super();
        this.cacheRegistry = Preconditions_1.Preconditions.assertNotNull(opts.cacheRegistry);
    }
    registerForLoad(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const filename = FilePaths_1.FilePaths.basename(path);
            const cachedRequestsHolder = yield this.cacheRegistry.registerFile(path);
            log.info("cachedRequestsHolder: " + JSON.stringify(cachedRequestsHolder));
            const cachedRequest = cachedRequestsHolder.cachedRequests[cachedRequestsHolder.metadata.url];
            log.info("Going to load URL: " + cachedRequest.url);
            const descriptor = cachedRequestsHolder.metadata;
            const descriptorJSON = JSON.stringify(descriptor);
            const basename = FilePaths_1.FilePaths.basename(path);
            const fingerprint = Fingerprints_1.Fingerprints.create(basename);
            const appPath = ResourcePaths_1.ResourcePaths.resourceURLFromRelativeURL('/htmlviewer/index.html', false);
            const filenameParam = encodeURIComponent(filename);
            const fileParam = encodeURIComponent(cachedRequest.url);
            const descriptorParam = encodeURIComponent(descriptorJSON);
            const queryData = `?file=${fileParam}&fingerprint=${fingerprint}&descriptor=${descriptorParam}&filename=${filenameParam}`;
            const appURL = appPath + queryData;
            const docDimensions = Descriptors_1.Descriptors.calculateDocDimensions(descriptor);
            return {
                webResource: WebResource_1.WebResource.createURL(appURL),
                title: descriptor.title,
                docDimensions
            };
        });
    }
}
exports.PHZLoader = PHZLoader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUEhaTG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUEhaTG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwwREFBcUQ7QUFDckQsNkRBQXdEO0FBQ3hELG1EQUE4QztBQUM5Qyw2Q0FBd0M7QUFFeEMsMkVBQXNFO0FBQ3RFLCtFQUEwRTtBQUUxRSxrRUFBNkQ7QUFDN0QsdURBQWtEO0FBRWxELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUs1QixNQUFhLFNBQVUsU0FBUSx1QkFBVTtJQUlyQyxZQUFZLElBQXVCO1FBQy9CLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLGFBQWEsR0FBRyw2QkFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVZLGVBQWUsQ0FBQyxJQUFZOztZQUVyQyxNQUFNLFFBQVEsR0FBRyxxQkFBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUcxQyxNQUFNLG9CQUFvQixHQUFHLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFekUsR0FBRyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztZQUsxRSxNQUFNLGFBQWEsR0FBRyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRTdGLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRXBELE1BQU0sVUFBVSxHQUFHLG9CQUFvQixDQUFDLFFBQVEsQ0FBQztZQUNqRCxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBSWxELE1BQU0sUUFBUSxHQUFHLHFCQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBSTFDLE1BQU0sV0FBVyxHQUFHLDJCQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRWxELE1BQU0sT0FBTyxHQUFHLDZCQUFhLENBQUMsMEJBQTBCLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFFMUYsTUFBTSxhQUFhLEdBQUcsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFbkQsTUFBTSxTQUFTLEdBQUcsa0JBQWtCLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hELE1BQU0sZUFBZSxHQUFHLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBRTNELE1BQU0sU0FBUyxHQUFHLFNBQVMsU0FBUyxnQkFBZ0IsV0FBVyxlQUFlLGVBQWUsYUFBYSxhQUFhLEVBQUUsQ0FBQztZQUMxSCxNQUFNLE1BQU0sR0FBRyxPQUFPLEdBQUcsU0FBUyxDQUFDO1lBRW5DLE1BQU0sYUFBYSxHQUFHLHlCQUFXLENBQUMsc0JBQXNCLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFckUsT0FBTztnQkFDSCxXQUFXLEVBQUUseUJBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO2dCQUMxQyxLQUFLLEVBQUUsVUFBVSxDQUFDLEtBQUs7Z0JBQ3ZCLGFBQWE7YUFDaEIsQ0FBQztRQUVOLENBQUM7S0FBQTtDQUVKO0FBeERELDhCQXdEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UHJlY29uZGl0aW9uc30gZnJvbSAnLi4vLi4vLi4vUHJlY29uZGl0aW9ucyc7XG5pbXBvcnQge0ZpbmdlcnByaW50c30gZnJvbSAnLi4vLi4vLi4vdXRpbC9GaW5nZXJwcmludHMnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uLy4uLy4uL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtGaWxlTG9hZGVyfSBmcm9tICcuL0ZpbGVMb2FkZXInO1xuaW1wb3J0IHtDYWNoZVJlZ2lzdHJ5fSBmcm9tICcuLi8uLi8uLi9iYWNrZW5kL3Byb3h5c2VydmVyL0NhY2hlUmVnaXN0cnknO1xuaW1wb3J0IHtXZWJSZXNvdXJjZX0gZnJvbSAnLi4vLi4vLi4vZWxlY3Ryb24vd2VicmVzb3VyY2UvV2ViUmVzb3VyY2UnO1xuaW1wb3J0IHtSZXNvdXJjZVBhdGhzfSBmcm9tICcuLi8uLi8uLi9lbGVjdHJvbi93ZWJyZXNvdXJjZS9SZXNvdXJjZVBhdGhzJztcbmltcG9ydCB7TG9hZGVkRmlsZX0gZnJvbSAnLi9Mb2FkZWRGaWxlJztcbmltcG9ydCB7RGVzY3JpcHRvcnN9IGZyb20gJy4uLy4uLy4uL3ZpZXdlci9odG1sL0Rlc2NyaXB0b3JzJztcbmltcG9ydCB7RmlsZVBhdGhzfSBmcm9tICcuLi8uLi8uLi91dGlsL0ZpbGVQYXRocyc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuLyoqXG4gKlxuICovXG5leHBvcnQgY2xhc3MgUEhaTG9hZGVyIGV4dGVuZHMgRmlsZUxvYWRlciB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGNhY2hlUmVnaXN0cnk6IENhY2hlUmVnaXN0cnk7XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRzOiBJUEhaTG9hZGVyT3B0aW9ucykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNhY2hlUmVnaXN0cnkgPSBQcmVjb25kaXRpb25zLmFzc2VydE5vdE51bGwob3B0cy5jYWNoZVJlZ2lzdHJ5KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgcmVnaXN0ZXJGb3JMb2FkKHBhdGg6IHN0cmluZyk6IFByb21pc2U8TG9hZGVkRmlsZT4ge1xuXG4gICAgICAgIGNvbnN0IGZpbGVuYW1lID0gRmlsZVBhdGhzLmJhc2VuYW1lKHBhdGgpO1xuXG4gICAgICAgIC8vIHJlZ2lzdGVyIHRoZSBwaHouICB0aGUgY2FjaGUgaW50ZXJjZXB0b3Igc2hvdWxkIGRvIHRoZSByZXN0LlxuICAgICAgICBjb25zdCBjYWNoZWRSZXF1ZXN0c0hvbGRlciA9IGF3YWl0IHRoaXMuY2FjaGVSZWdpc3RyeS5yZWdpc3RlckZpbGUocGF0aCk7XG5cbiAgICAgICAgbG9nLmluZm8oXCJjYWNoZWRSZXF1ZXN0c0hvbGRlcjogXCIgKyBKU09OLnN0cmluZ2lmeShjYWNoZWRSZXF1ZXN0c0hvbGRlcikpO1xuXG4gICAgICAgIC8vIGdldCB0aGUgY2FjaGUgbWV0YWRhdGEgZm9yIHRoZSBwcmltYXJ5IFVSTCBhcyBpdCB3aWxsIHdvcmsgZm9yIHRoZVxuICAgICAgICAvLyBzdWJzZXF1ZW50IFVSTHMgdG9vLlxuXG4gICAgICAgIGNvbnN0IGNhY2hlZFJlcXVlc3QgPSBjYWNoZWRSZXF1ZXN0c0hvbGRlci5jYWNoZWRSZXF1ZXN0c1tjYWNoZWRSZXF1ZXN0c0hvbGRlci5tZXRhZGF0YS51cmxdO1xuXG4gICAgICAgIGxvZy5pbmZvKFwiR29pbmcgdG8gbG9hZCBVUkw6IFwiICsgY2FjaGVkUmVxdWVzdC51cmwpO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBjYWNoZWRSZXF1ZXN0c0hvbGRlci5tZXRhZGF0YTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRvckpTT04gPSBKU09OLnN0cmluZ2lmeShkZXNjcmlwdG9yKTtcblxuICAgICAgICAvLyB3ZSBkb24ndCBuZWVkIHRoZSBjb250ZW50IHJlcHJlc2VudGVkIHR3aWNlLlxuXG4gICAgICAgIGNvbnN0IGJhc2VuYW1lID0gRmlsZVBhdGhzLmJhc2VuYW1lKHBhdGgpO1xuXG4gICAgICAgIC8vIFRPRE86IHRoaXMgaXMgd29ya2Fyb3VuZCB1bnRpbCB3ZSBlbmFibGUgemlwIGZpbGVzIHdpdGggZW1iZWRkZWRcbiAgICAgICAgLy8gbWV0YWRhdGEgLyBkZXNjcmlwdG9yc1xuICAgICAgICBjb25zdCBmaW5nZXJwcmludCA9IEZpbmdlcnByaW50cy5jcmVhdGUoYmFzZW5hbWUpO1xuXG4gICAgICAgIGNvbnN0IGFwcFBhdGggPSBSZXNvdXJjZVBhdGhzLnJlc291cmNlVVJMRnJvbVJlbGF0aXZlVVJMKCcvaHRtbHZpZXdlci9pbmRleC5odG1sJywgZmFsc2UpO1xuXG4gICAgICAgIGNvbnN0IGZpbGVuYW1lUGFyYW0gPSBlbmNvZGVVUklDb21wb25lbnQoZmlsZW5hbWUpO1xuXG4gICAgICAgIGNvbnN0IGZpbGVQYXJhbSA9IGVuY29kZVVSSUNvbXBvbmVudChjYWNoZWRSZXF1ZXN0LnVybCk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0b3JQYXJhbSA9IGVuY29kZVVSSUNvbXBvbmVudChkZXNjcmlwdG9ySlNPTik7XG5cbiAgICAgICAgY29uc3QgcXVlcnlEYXRhID0gYD9maWxlPSR7ZmlsZVBhcmFtfSZmaW5nZXJwcmludD0ke2ZpbmdlcnByaW50fSZkZXNjcmlwdG9yPSR7ZGVzY3JpcHRvclBhcmFtfSZmaWxlbmFtZT0ke2ZpbGVuYW1lUGFyYW19YDtcbiAgICAgICAgY29uc3QgYXBwVVJMID0gYXBwUGF0aCArIHF1ZXJ5RGF0YTtcblxuICAgICAgICBjb25zdCBkb2NEaW1lbnNpb25zID0gRGVzY3JpcHRvcnMuY2FsY3VsYXRlRG9jRGltZW5zaW9ucyhkZXNjcmlwdG9yKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2ViUmVzb3VyY2U6IFdlYlJlc291cmNlLmNyZWF0ZVVSTChhcHBVUkwpLFxuICAgICAgICAgICAgdGl0bGU6IGRlc2NyaXB0b3IudGl0bGUsXG4gICAgICAgICAgICBkb2NEaW1lbnNpb25zXG4gICAgICAgIH07XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUEhaTG9hZGVyT3B0aW9ucyB7XG4gICAgcmVhZG9ubHkgY2FjaGVSZWdpc3RyeTogQ2FjaGVSZWdpc3RyeTtcbn1cbiJdfQ==