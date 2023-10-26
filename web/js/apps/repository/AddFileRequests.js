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
const FilePaths_1 = require("../../util/FilePaths");
const Optional_1 = require("../../util/ts/Optional");
const AppRuntime_1 = require("../../AppRuntime");
const ProgressToasters_1 = require("../../ui/progress_toaster/ProgressToasters");
const Files_1 = require("../../util/Files");
const TOASTER_DESTROY_DELAY = 500;
const MAX_RECURSIVE_DIRECTORY_SCAN_DURATION = "30s";
class AddFileRequests {
    static fromPath(path) {
        return {
            docPath: path,
            basename: FilePaths_1.FilePaths.basename(path)
        };
    }
    static computeDirectly(event) {
        if (event.dataTransfer && event.dataTransfer.files) {
            return this.computeFromFileList(event.dataTransfer.files);
        }
        else {
            return [];
        }
    }
    static computeFromFileList(files) {
        return Array.from(files)
            .filter(file => file.name.endsWith(".pdf"))
            .map(file => {
            if (file.path) {
                return {
                    docPath: file.path,
                    basename: FilePaths_1.FilePaths.basename(file.path)
                };
            }
            else {
                return {
                    docPath: URL.createObjectURL(file),
                    basename: file.name,
                };
            }
        });
    }
    static computeRecursively(event) {
        return __awaiter(this, void 0, void 0, function* () {
            if (AppRuntime_1.AppRuntime.isElectron()) {
                if (event.dataTransfer) {
                    const progressToaster = yield ProgressToasters_1.ProgressToasters.create();
                    try {
                        const aborter = Files_1.Aborters.maxTime(MAX_RECURSIVE_DIRECTORY_SCAN_DURATION);
                        const paths = Array.from(event.dataTransfer.files)
                            .map(file => file.path);
                        const acceptedFiles = [];
                        for (const path of paths) {
                            if ((yield Files_1.Files.fileType(path)) === 'directory') {
                                yield Files_1.Files.recursively(path, (newPath) => __awaiter(this, void 0, void 0, function* () {
                                    if (newPath.endsWith(".pdf")) {
                                        acceptedFiles.push(newPath);
                                    }
                                    progressToaster.update({
                                        title: `Finding files (${acceptedFiles.length}): `,
                                        status: newPath
                                    });
                                }), aborter);
                            }
                        }
                        const addFileRequests = acceptedFiles.map(current => {
                            return {
                                docPath: current,
                                basename: FilePaths_1.FilePaths.basename(current)
                            };
                        });
                        return Optional_1.Optional.of(addFileRequests);
                    }
                    finally {
                        setTimeout(() => progressToaster.destroy(), TOASTER_DESTROY_DELAY);
                    }
                }
            }
            return Optional_1.Optional.empty();
        });
    }
}
exports.AddFileRequests = AddFileRequests;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkRmlsZVJlcXVlc3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQWRkRmlsZVJlcXVlc3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxvREFBK0M7QUFFL0MscURBQWdEO0FBRWhELGlEQUE0QztBQUM1QyxpRkFBNEU7QUFDNUUsNENBQWlEO0FBRWpELE1BQU0scUJBQXFCLEdBQUcsR0FBRyxDQUFDO0FBQ2xDLE1BQU0scUNBQXFDLEdBQUcsS0FBSyxDQUFDO0FBRXBELE1BQWEsZUFBZTtJQUVqQixNQUFNLENBQUMsUUFBUSxDQUFDLElBQVk7UUFFL0IsT0FBTztZQUNILE9BQU8sRUFBRSxJQUFJO1lBQ2IsUUFBUSxFQUFFLHFCQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztTQUNyQyxDQUFDO0lBRU4sQ0FBQztJQUVNLE1BQU0sQ0FBQyxlQUFlLENBQUMsS0FBZ0I7UUFFMUMsSUFBSSxLQUFLLENBQUMsWUFBWSxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFO1lBRWhELE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7U0FFN0Q7YUFBTTtZQUNILE9BQU8sRUFBRSxDQUFDO1NBQ2I7SUFFTCxDQUFDO0lBRU0sTUFBTSxDQUFDLG1CQUFtQixDQUFDLEtBQWU7UUFFN0MsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUMxQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFFUixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBR1gsT0FBTztvQkFDSCxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUk7b0JBQ2xCLFFBQVEsRUFBRSxxQkFBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2lCQUMxQyxDQUFDO2FBRUw7aUJBQU07Z0JBSUgsT0FBTztvQkFDSCxPQUFPLEVBQUUsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7b0JBQ2xDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSTtpQkFDdEIsQ0FBQzthQUNMO1FBRUwsQ0FBQyxDQUFDLENBQUM7SUFFWCxDQUFDO0lBT00sTUFBTSxDQUFPLGtCQUFrQixDQUFDLEtBQWdCOztZQUVuRCxJQUFJLHVCQUFVLENBQUMsVUFBVSxFQUFFLEVBQUU7Z0JBRXpCLElBQUksS0FBSyxDQUFDLFlBQVksRUFBRTtvQkFLcEIsTUFBTSxlQUFlLEdBQUcsTUFBTSxtQ0FBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFFeEQsSUFBSTt3QkFJQSxNQUFNLE9BQU8sR0FBRyxnQkFBUSxDQUFDLE9BQU8sQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO3dCQUV4RSxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDOzZCQUM3QyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBRTVCLE1BQU0sYUFBYSxHQUFjLEVBQUUsQ0FBQzt3QkFFcEMsS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLEVBQUU7NEJBRXRCLElBQUksQ0FBQSxNQUFNLGFBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQUssV0FBVyxFQUFFO2dDQUU1QyxNQUFNLGFBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQU0sT0FBTyxFQUFDLEVBQUU7b0NBRTFDLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTt3Q0FDMUIsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztxQ0FDL0I7b0NBRUQsZUFBZSxDQUFDLE1BQU0sQ0FBQzt3Q0FDbkIsS0FBSyxFQUFFLGtCQUFrQixhQUFhLENBQUMsTUFBTSxLQUFLO3dDQUNsRCxNQUFNLEVBQUUsT0FBTztxQ0FDbEIsQ0FBQyxDQUFDO2dDQUVQLENBQUMsQ0FBQSxFQUFFLE9BQU8sQ0FBQyxDQUFDOzZCQUVmO3lCQUVKO3dCQUVELE1BQU0sZUFBZSxHQUNqQixhQUFhLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFOzRCQUN4QixPQUFPO2dDQUNILE9BQU8sRUFBRSxPQUFPO2dDQUNoQixRQUFRLEVBQUUscUJBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDOzZCQUN4QyxDQUFDO3dCQUNOLENBQUMsQ0FBQyxDQUFDO3dCQUVQLE9BQU8sbUJBQVEsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUM7cUJBRXZDOzRCQUFTO3dCQUVOLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLEVBQUUscUJBQXFCLENBQUMsQ0FBQztxQkFFdEU7aUJBRUo7YUFFSjtZQUVELE9BQU8sbUJBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUU1QixDQUFDO0tBQUE7Q0FFSjtBQTNIRCwwQ0EySEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZpbGVJbXBvcnRSZXF1ZXN0fSBmcm9tICcuL0ZpbGVJbXBvcnRSZXF1ZXN0JztcbmltcG9ydCB7RmlsZVBhdGhzfSBmcm9tICcuLi8uLi91dGlsL0ZpbGVQYXRocyc7XG5pbXBvcnQge0FkZEZpbGVSZXF1ZXN0fSBmcm9tICcuL0FkZEZpbGVSZXF1ZXN0JztcbmltcG9ydCB7T3B0aW9uYWx9IGZyb20gJy4uLy4uL3V0aWwvdHMvT3B0aW9uYWwnO1xuaW1wb3J0IHtQYXRoU3RyfSBmcm9tICcuLi8uLi91dGlsL1N0cmluZ3MnO1xuaW1wb3J0IHtBcHBSdW50aW1lfSBmcm9tICcuLi8uLi9BcHBSdW50aW1lJztcbmltcG9ydCB7UHJvZ3Jlc3NUb2FzdGVyc30gZnJvbSAnLi4vLi4vdWkvcHJvZ3Jlc3NfdG9hc3Rlci9Qcm9ncmVzc1RvYXN0ZXJzJztcbmltcG9ydCB7QWJvcnRlcnMsIEZpbGVzfSBmcm9tICcuLi8uLi91dGlsL0ZpbGVzJztcblxuY29uc3QgVE9BU1RFUl9ERVNUUk9ZX0RFTEFZID0gNTAwO1xuY29uc3QgTUFYX1JFQ1VSU0lWRV9ESVJFQ1RPUllfU0NBTl9EVVJBVElPTiA9IFwiMzBzXCI7XG5cbmV4cG9ydCBjbGFzcyBBZGRGaWxlUmVxdWVzdHMge1xuXG4gICAgcHVibGljIHN0YXRpYyBmcm9tUGF0aChwYXRoOiBzdHJpbmcpOiBBZGRGaWxlUmVxdWVzdCB7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRvY1BhdGg6IHBhdGgsXG4gICAgICAgICAgICBiYXNlbmFtZTogRmlsZVBhdGhzLmJhc2VuYW1lKHBhdGgpXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNvbXB1dGVEaXJlY3RseShldmVudDogRHJhZ0V2ZW50KTogQWRkRmlsZVJlcXVlc3RbXSB7XG5cbiAgICAgICAgaWYgKGV2ZW50LmRhdGFUcmFuc2ZlciAmJiBldmVudC5kYXRhVHJhbnNmZXIuZmlsZXMpIHtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcHV0ZUZyb21GaWxlTGlzdChldmVudC5kYXRhVHJhbnNmZXIuZmlsZXMpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY29tcHV0ZUZyb21GaWxlTGlzdChmaWxlczogRmlsZUxpc3QpOiBBZGRGaWxlUmVxdWVzdFtdIHtcblxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShmaWxlcylcbiAgICAgICAgICAgIC5maWx0ZXIoZmlsZSA9PiBmaWxlLm5hbWUuZW5kc1dpdGgoXCIucGRmXCIpKVxuICAgICAgICAgICAgLm1hcChmaWxlID0+IHtcblxuICAgICAgICAgICAgICAgIGlmIChmaWxlLnBhdGgpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBPbiBFbGVjdHJvbiB3ZSBoYXZlIHRoZSBmaWxlIHBhdGggZGlyZWN0bHkuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2NQYXRoOiBmaWxlLnBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlbmFtZTogRmlsZVBhdGhzLmJhc2VuYW1lKGZpbGUucGF0aClcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1VSTC9jcmVhdGVPYmplY3RVUkxcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jUGF0aDogVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VuYW1lOiBmaWxlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBFbGVjdHJvblJlbmRlcmVyQ29udGV4dFxuICAgICAqIEBCcm93c2VyQ29udGV4dFxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgY29tcHV0ZVJlY3Vyc2l2ZWx5KGV2ZW50OiBEcmFnRXZlbnQpOiBQcm9taXNlPE9wdGlvbmFsPEFkZEZpbGVSZXF1ZXN0W10+PiB7XG5cbiAgICAgICAgaWYgKEFwcFJ1bnRpbWUuaXNFbGVjdHJvbigpKSB7XG5cbiAgICAgICAgICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIpIHtcblxuICAgICAgICAgICAgICAgIC8vIFRPRE86IEkgZG9uJ3QgbGlrZSBlbWJlZGRpbmcgdGhlIFVJIGNvbXBvbmVudCBpbiBoZXJlXG4gICAgICAgICAgICAgICAgLy8gZGlyZWN0bHkuLi5cblxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzVG9hc3RlciA9IGF3YWl0IFByb2dyZXNzVG9hc3RlcnMuY3JlYXRlKCk7XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBhYm9ydGVyIHdpbGwganVzdCB0aHJvdyBhbiBleGNlcHRpb24gaWYgdGhlIHRpbWVvdXRcbiAgICAgICAgICAgICAgICAgICAgLy8gZXhjZWVkcyBhbmQgdGhlIGNhbGxlciBzaG91bGQgc2hvdyBhbiBlcnJvci5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWJvcnRlciA9IEFib3J0ZXJzLm1heFRpbWUoTUFYX1JFQ1VSU0lWRV9ESVJFQ1RPUllfU0NBTl9EVVJBVElPTik7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGF0aHMgPSBBcnJheS5mcm9tKGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZmlsZSA9PiBmaWxlLnBhdGgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjY2VwdGVkRmlsZXM6IFBhdGhTdHJbXSA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcGF0aCBvZiBwYXRocykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXdhaXQgRmlsZXMuZmlsZVR5cGUocGF0aCkgPT09ICdkaXJlY3RvcnknKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBGaWxlcy5yZWN1cnNpdmVseShwYXRoLCBhc3luYyBuZXdQYXRoID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3UGF0aC5lbmRzV2l0aChcIi5wZGZcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdGVkRmlsZXMucHVzaChuZXdQYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzVG9hc3Rlci51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGBGaW5kaW5nIGZpbGVzICgke2FjY2VwdGVkRmlsZXMubGVuZ3RofSk6IGAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IG5ld1BhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBhYm9ydGVyKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhZGRGaWxlUmVxdWVzdHMgPVxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0ZWRGaWxlcy5tYXAoY3VycmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jUGF0aDogY3VycmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZW5hbWU6IEZpbGVQYXRocy5iYXNlbmFtZShjdXJyZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gT3B0aW9uYWwub2YoYWRkRmlsZVJlcXVlc3RzKTtcblxuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBwcm9ncmVzc1RvYXN0ZXIuZGVzdHJveSgpLCBUT0FTVEVSX0RFU1RST1lfREVMQVkpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBPcHRpb25hbC5lbXB0eSgpO1xuXG4gICAgfVxuXG59XG5cbiJdfQ==