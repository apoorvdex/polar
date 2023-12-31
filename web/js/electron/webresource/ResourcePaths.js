"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const Preconditions_1 = require("../../Preconditions");
const URLs_1 = require("../../util/URLs");
const USE_FILE_URL = true;
class ResourcePaths {
    static absoluteFromRelativePath(relativePath) {
        const baseDirs = ResourcePaths.getBaseDirs();
        for (const baseDir of baseDirs) {
            const absolutePath = path_1.default.resolve(baseDir, relativePath);
            try {
                fs_1.default.readFileSync(absolutePath);
                return absolutePath;
            }
            catch (e) {
            }
        }
        throw new Error(`No file found for ${relativePath} in baseDirs: ` + JSON.stringify(baseDirs));
    }
    static resourceURLFromRelativeURL(relativeURL, useFileURL = USE_FILE_URL) {
        let relativePath = relativeURL;
        let queryData = "";
        if (relativeURL.indexOf("?") !== -1) {
            relativePath = relativeURL.substring(0, relativeURL.indexOf("?"));
            queryData = relativeURL.substring(relativeURL.indexOf("?"));
        }
        if (useFileURL) {
            const absolutePath = ResourcePaths.absoluteFromRelativePath(relativePath);
            return 'file://' + absolutePath + queryData;
        }
        else {
            const computeBase = () => {
                if (typeof window !== 'undefined' && window.location) {
                    return URLs_1.URLs.toBase(window.location.href);
                }
                return "http://localhost:8500";
            };
            const base = computeBase();
            return base + relativeURL;
        }
    }
    static getBaseDirs() {
        const baseDirs = [];
        if (!Preconditions_1.isPresent(electron_1.app)) {
            baseDirs.push(electron_1.remote.app.getAppPath());
        }
        else {
            baseDirs.push(electron_1.app.getAppPath());
        }
        baseDirs.push(process.cwd());
        return baseDirs;
    }
}
exports.ResourcePaths = ResourcePaths;
class AppPathException extends Error {
}
exports.AppPathException = AppPathException;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzb3VyY2VQYXRocy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlJlc291cmNlUGF0aHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSx1Q0FBcUM7QUFDckMsZ0RBQXdCO0FBQ3hCLDRDQUFvQjtBQUNwQix1REFBOEM7QUFDOUMsMENBQXFDO0FBRXJDLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQztBQVMxQixNQUFhLGFBQWE7SUFLZixNQUFNLENBQUMsd0JBQXdCLENBQUMsWUFBb0I7UUFLdkQsTUFBTSxRQUFRLEdBQUcsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRTdDLEtBQUssTUFBTSxPQUFPLElBQUksUUFBUSxFQUFFO1lBRTVCLE1BQU0sWUFBWSxHQUFHLGNBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBRXpELElBQUk7Z0JBT0EsWUFBRSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDOUIsT0FBTyxZQUFZLENBQUM7YUFFdkI7WUFBQyxPQUFPLENBQUMsRUFBRTthQUdYO1NBRUo7UUFFRCxNQUFNLElBQUksS0FBSyxDQUFDLHFCQUFxQixZQUFZLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUVsRyxDQUFDO0lBT00sTUFBTSxDQUFDLDBCQUEwQixDQUFDLFdBQW1CLEVBQ25CLGFBQXNCLFlBQVk7UUFFdkUsSUFBSSxZQUFZLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVuQixJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDakMsWUFBWSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNsRSxTQUFTLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDL0Q7UUFFRCxJQUFJLFVBQVUsRUFBRTtZQUVaLE1BQU0sWUFBWSxHQUFHLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMxRSxPQUFPLFNBQVMsR0FBRyxZQUFZLEdBQUcsU0FBUyxDQUFDO1NBRS9DO2FBQU07WUFFSCxNQUFNLFdBQVcsR0FBRyxHQUFHLEVBQUU7Z0JBRXJCLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUU7b0JBQ2xELE9BQU8sV0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUM1QztnQkFFRCxPQUFPLHVCQUF1QixDQUFDO1lBRW5DLENBQUMsQ0FBQztZQUVGLE1BQU0sSUFBSSxHQUFHLFdBQVcsRUFBRSxDQUFDO1lBRTNCLE9BQU8sSUFBSSxHQUFHLFdBQVcsQ0FBQztTQUU3QjtJQUVMLENBQUM7SUFLUyxNQUFNLENBQUMsV0FBVztRQUV4QixNQUFNLFFBQVEsR0FBYSxFQUFFLENBQUM7UUFFOUIsSUFBSSxDQUFFLHlCQUFTLENBQUMsY0FBRyxDQUFDLEVBQUU7WUFDbEIsUUFBUSxDQUFDLElBQUksQ0FBQyxpQkFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1NBQzFDO2FBQU07WUFDSCxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1NBQ25DO1FBRUQsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUU3QixPQUFPLFFBQVEsQ0FBQztJQUVwQixDQUFDO0NBRUo7QUFqR0Qsc0NBaUdDO0FBRUQsTUFBYSxnQkFBaUIsU0FBUSxLQUFLO0NBRTFDO0FBRkQsNENBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7YXBwLCByZW1vdGV9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCB7aXNQcmVzZW50fSBmcm9tICcuLi8uLi9QcmVjb25kaXRpb25zJztcbmltcG9ydCB7VVJMc30gZnJvbSAnLi4vLi4vdXRpbC9VUkxzJztcblxuY29uc3QgVVNFX0ZJTEVfVVJMID0gdHJ1ZTtcblxuLyoqXG4gKiBHaXZlbiBhIHJlbGF0aXZlIHBhdGgsIHJldHVybiBhIGZ1bGwgcGF0aCB0byBhIGxvY2FsIGFwcCByZXNvdXJjZS5cbiAqXG4gKiBFYWNoIG1vZHVsZSBoYXMgYSB1bmlxdWUgX19kaXJuYW1lIHNvIHdpdGggdGhpcyBtZWNoYW5pc20gd2UgY2FuIHJlbGlhYmx5XG4gKiBmaW5kIGFuIHBhdGggdG8gYSBmaWxlIGFzIGlmIHdlIHdlcmUgaW4gdGhlIHJvb3Qgb2YgdGhlIHdlYmFwcC5cbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBSZXNvdXJjZVBhdGhzIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIGZ1bGwgYWJzb2x1dGUgcGF0aCBmcm9tIGEgcmVsYXRpdmUgcGF0aC5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGFic29sdXRlRnJvbVJlbGF0aXZlUGF0aChyZWxhdGl2ZVBhdGg6IHN0cmluZykge1xuXG4gICAgICAgIC8vIFRPRE86IHNvbWV0aW1lcyBhcHBQYXRoIGlzIGFuIEFTQVIgZmlsZSBhbmQgdGhhdCByZWFsbHkgY29uZnVzZXNcbiAgICAgICAgLy8gdXMgYW5kIHdlJ3JlIGdvaW5nIHRvIG5lZWQgYSBzdHJhdGVneSB0byBoYW5kbGUgdGhhdCBzaXR1YXRpb24uXG5cbiAgICAgICAgY29uc3QgYmFzZURpcnMgPSBSZXNvdXJjZVBhdGhzLmdldEJhc2VEaXJzKCk7XG5cbiAgICAgICAgZm9yIChjb25zdCBiYXNlRGlyIG9mIGJhc2VEaXJzKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGFic29sdXRlUGF0aCA9IHBhdGgucmVzb2x2ZShiYXNlRGlyLCByZWxhdGl2ZVBhdGgpO1xuXG4gICAgICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICAgICAgLy8gV2UgdXNlIHJlYWRGaWxlU3luYyBoZXJlIGJlY2F1c2Ugd2UgbmVlZCB0byB3ZSBuZWVkIHRvIHBlZWtcbiAgICAgICAgICAgICAgICAvLyBpbnRvIC5hc2FyIGZpbGVzIHdoaWNoIGRvIG5vdCBzdXBwb3J0IGV4aXN0cyBidXQgRE8gc3VwcG9ydFxuICAgICAgICAgICAgICAgIC8vIHJlYWRpbmcgdGhlIGZpbGUuICBJZiB0aGlzIGZhaWxzIHdlIHdpbGwgZ2V0IGFuIGV4Y2VwdGlvblxuICAgICAgICAgICAgICAgIC8vIGFib3V0IG5vdCBmaW5kaW5nIHRoZSBmaWxlLlxuXG4gICAgICAgICAgICAgICAgZnMucmVhZEZpbGVTeW5jKGFic29sdXRlUGF0aCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFic29sdXRlUGF0aDtcblxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIC8vIHdlIGtub3cgdGhpcyBoYXBwZW5zIGJlY2F1c2UgSSBjYW4ndCB0ZXN0cyBmb3IgZmlsZSBleGlzdHNcbiAgICAgICAgICAgICAgICAvLyBzaW5jZSAuYXNhciBmaWxlcyBoYXZlIHRvIGJlIHJlYWQgdG8gY2hlY2sgZm9yIGV4aXN0ZW5jZS5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBmaWxlIGZvdW5kIGZvciAke3JlbGF0aXZlUGF0aH0gaW4gYmFzZURpcnM6IGAgKyBKU09OLnN0cmluZ2lmeShiYXNlRGlycykpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgYSBmdWxsIHJlc291cmNlIFVSTCBmcm9tIGEgZ2l2ZW4gcmVsYXRpdmUgVVJMIHBhdGguXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVsYXRpdmVVUkxcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlc291cmNlVVJMRnJvbVJlbGF0aXZlVVJMKHJlbGF0aXZlVVJMOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VGaWxlVVJMOiBib29sZWFuID0gVVNFX0ZJTEVfVVJMKTogc3RyaW5nIHtcblxuICAgICAgICBsZXQgcmVsYXRpdmVQYXRoID0gcmVsYXRpdmVVUkw7XG4gICAgICAgIGxldCBxdWVyeURhdGEgPSBcIlwiO1xuXG4gICAgICAgIGlmIChyZWxhdGl2ZVVSTC5pbmRleE9mKFwiP1wiKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHJlbGF0aXZlUGF0aCA9IHJlbGF0aXZlVVJMLnN1YnN0cmluZygwLCByZWxhdGl2ZVVSTC5pbmRleE9mKFwiP1wiKSk7XG4gICAgICAgICAgICBxdWVyeURhdGEgPSByZWxhdGl2ZVVSTC5zdWJzdHJpbmcocmVsYXRpdmVVUkwuaW5kZXhPZihcIj9cIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHVzZUZpbGVVUkwpIHtcblxuICAgICAgICAgICAgY29uc3QgYWJzb2x1dGVQYXRoID0gUmVzb3VyY2VQYXRocy5hYnNvbHV0ZUZyb21SZWxhdGl2ZVBhdGgocmVsYXRpdmVQYXRoKTtcbiAgICAgICAgICAgIHJldHVybiAnZmlsZTovLycgKyBhYnNvbHV0ZVBhdGggKyBxdWVyeURhdGE7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgY29uc3QgY29tcHV0ZUJhc2UgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmxvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBVUkxzLnRvQmFzZSh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiaHR0cDovL2xvY2FsaG9zdDo4NTAwXCI7XG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGJhc2UgPSBjb21wdXRlQmFzZSgpO1xuXG4gICAgICAgICAgICByZXR1cm4gYmFzZSArIHJlbGF0aXZlVVJMO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgYmFzZWRpciBvZiB0aGUgY3VycmVudCB3ZWJhcHAuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBnZXRCYXNlRGlycygpOiBzdHJpbmdbXSB7XG5cbiAgICAgICAgY29uc3QgYmFzZURpcnM6IHN0cmluZ1tdID0gW107XG5cbiAgICAgICAgaWYgKCEgaXNQcmVzZW50KGFwcCkpIHtcbiAgICAgICAgICAgIGJhc2VEaXJzLnB1c2gocmVtb3RlLmFwcC5nZXRBcHBQYXRoKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYmFzZURpcnMucHVzaChhcHAuZ2V0QXBwUGF0aCgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJhc2VEaXJzLnB1c2gocHJvY2Vzcy5jd2QoKSk7XG5cbiAgICAgICAgcmV0dXJuIGJhc2VEaXJzO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBBcHBQYXRoRXhjZXB0aW9uIGV4dGVuZHMgRXJyb3Ige1xuXG59XG4iXX0=