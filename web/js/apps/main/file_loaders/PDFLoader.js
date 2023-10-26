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
const FileLoader_1 = require("./FileLoader");
const WebResource_1 = require("../../../electron/webresource/WebResource");
const ResourcePaths_1 = require("../../../electron/webresource/ResourcePaths");
const Logger_1 = require("../../../logger/Logger");
const FilePaths_1 = require("../../../util/FilePaths");
const log = Logger_1.Logger.create();
class PDFLoader extends FileLoader_1.FileLoader {
    constructor(fileRegistry) {
        super();
        this.fileRegistry = fileRegistry;
    }
    registerForLoad(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const filename = FilePaths_1.FilePaths.basename(path);
            const fileMeta = this.fileRegistry.registerFile(path);
            const appURL = PDFLoader.createViewerURL(fileMeta.url, filename);
            return {
                webResource: WebResource_1.WebResource.createURL(appURL)
            };
        });
    }
    static createViewerURL(fileURL, filename) {
        const fileParam = encodeURIComponent(fileURL);
        const filenameParam = encodeURIComponent(filename);
        return ResourcePaths_1.ResourcePaths.resourceURLFromRelativeURL(`/pdfviewer/web/index.html?file=${fileParam}&filename=${filenameParam}&zoom=page-width`, false);
    }
}
exports.PDFLoader = PDFLoader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUERGTG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUERGTG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSw2Q0FBd0M7QUFDeEMsMkVBQXNFO0FBRXRFLCtFQUEwRTtBQUUxRSxtREFBOEM7QUFDOUMsdURBQWtEO0FBRWxELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLFNBQVUsU0FBUSx1QkFBVTtJQUlyQyxZQUFZLFlBQTBCO1FBQ2xDLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7SUFDckMsQ0FBQztJQUVZLGVBQWUsQ0FBQyxJQUFZOztZQUVyQyxNQUFNLFFBQVEsR0FBRyxxQkFBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUUxQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUV0RCxNQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFFakUsT0FBTztnQkFDSCxXQUFXLEVBQUUseUJBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO2FBQzdDLENBQUM7UUFFTixDQUFDO0tBQUE7SUFFTSxNQUFNLENBQUMsZUFBZSxDQUFDLE9BQWUsRUFBRSxRQUFnQjtRQUMzRCxNQUFNLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QyxNQUFNLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVuRCxPQUFPLDZCQUFhLENBQUMsMEJBQTBCLENBQUMsa0NBQWtDLFNBQVMsYUFBYSxhQUFhLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3BKLENBQUM7Q0FFSjtBQTlCRCw4QkE4QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZpbGVMb2FkZXJ9IGZyb20gJy4vRmlsZUxvYWRlcic7XG5pbXBvcnQge1dlYlJlc291cmNlfSBmcm9tICcuLi8uLi8uLi9lbGVjdHJvbi93ZWJyZXNvdXJjZS9XZWJSZXNvdXJjZSc7XG5pbXBvcnQge0ZpbGVSZWdpc3RyeX0gZnJvbSAnLi4vLi4vLi4vYmFja2VuZC93ZWJzZXJ2ZXIvRmlsZVJlZ2lzdHJ5JztcbmltcG9ydCB7UmVzb3VyY2VQYXRoc30gZnJvbSAnLi4vLi4vLi4vZWxlY3Ryb24vd2VicmVzb3VyY2UvUmVzb3VyY2VQYXRocyc7XG5pbXBvcnQge0xvYWRlZEZpbGV9IGZyb20gJy4vTG9hZGVkRmlsZSc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vLi4vLi4vbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0ZpbGVQYXRoc30gZnJvbSAnLi4vLi4vLi4vdXRpbC9GaWxlUGF0aHMnO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBQREZMb2FkZXIgZXh0ZW5kcyBGaWxlTG9hZGVyIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgZmlsZVJlZ2lzdHJ5OiBGaWxlUmVnaXN0cnk7XG5cbiAgICBjb25zdHJ1Y3RvcihmaWxlUmVnaXN0cnk6IEZpbGVSZWdpc3RyeSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmZpbGVSZWdpc3RyeSA9IGZpbGVSZWdpc3RyeTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgcmVnaXN0ZXJGb3JMb2FkKHBhdGg6IHN0cmluZyk6IFByb21pc2U8TG9hZGVkRmlsZT4ge1xuXG4gICAgICAgIGNvbnN0IGZpbGVuYW1lID0gRmlsZVBhdGhzLmJhc2VuYW1lKHBhdGgpO1xuXG4gICAgICAgIGNvbnN0IGZpbGVNZXRhID0gdGhpcy5maWxlUmVnaXN0cnkucmVnaXN0ZXJGaWxlKHBhdGgpO1xuXG4gICAgICAgIGNvbnN0IGFwcFVSTCA9IFBERkxvYWRlci5jcmVhdGVWaWV3ZXJVUkwoZmlsZU1ldGEudXJsLCBmaWxlbmFtZSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdlYlJlc291cmNlOiBXZWJSZXNvdXJjZS5jcmVhdGVVUkwoYXBwVVJMKVxuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVWaWV3ZXJVUkwoZmlsZVVSTDogc3RyaW5nLCBmaWxlbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGZpbGVQYXJhbSA9IGVuY29kZVVSSUNvbXBvbmVudChmaWxlVVJMKTtcbiAgICAgICAgY29uc3QgZmlsZW5hbWVQYXJhbSA9IGVuY29kZVVSSUNvbXBvbmVudChmaWxlbmFtZSk7XG5cbiAgICAgICAgcmV0dXJuIFJlc291cmNlUGF0aHMucmVzb3VyY2VVUkxGcm9tUmVsYXRpdmVVUkwoYC9wZGZ2aWV3ZXIvd2ViL2luZGV4Lmh0bWw/ZmlsZT0ke2ZpbGVQYXJhbX0mZmlsZW5hbWU9JHtmaWxlbmFtZVBhcmFtfSZ6b29tPXBhZ2Utd2lkdGhgLCBmYWxzZSk7XG4gICAgfVxuXG59XG5cbiJdfQ==