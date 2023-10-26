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
Object.defineProperty(exports, "__esModule", { value: true });
const Platforms_1 = require("../../util/Platforms");
const FilePaths_1 = require("../../util/FilePaths");
const os_1 = __importDefault(require("os"));
const Files_1 = require("../../util/Files");
class RepositoryDocLoaders {
    static computeLoadPaths() {
        return __awaiter(this, void 0, void 0, function* () {
            const platform = Platforms_1.Platforms.get();
            const pathMetas = [
                yield this.pathMeta(FilePaths_1.FilePaths.resolve(os_1.default.homedir(), 'Downloads')),
                yield this.pathMeta(FilePaths_1.FilePaths.resolve(os_1.default.homedir(), 'Documents')),
                yield this.pathMeta(FilePaths_1.FilePaths.resolve(os_1.default.homedir(), 'Zotero'))
            ];
            return pathMetas.filter(current => current.exists)
                .map(current => current.path);
        });
    }
    static computeDocumentsForLoad(paths, listener, aborter = Files_1.Aborters.maxTime()) {
        return __awaiter(this, void 0, void 0, function* () {
            const docPaths = [];
            for (const path of paths) {
                yield Files_1.Files.recursively(path, (docPath) => __awaiter(this, void 0, void 0, function* () {
                    if (docPath.endsWith(".pdf")) {
                        docPaths.push(docPath);
                    }
                }), aborter);
            }
            return docPaths;
        });
    }
    static pathMeta(path) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                path,
                exists: yield Files_1.Files.existsAsync(path)
            };
        });
    }
}
exports.RepositoryDocLoaders = RepositoryDocLoaders;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb3NpdG9yeURvY0xvYWRlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJSZXBvc2l0b3J5RG9jTG9hZGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQXlEO0FBQ3pELG9EQUErQztBQUMvQyw0Q0FBb0I7QUFFcEIsNENBQTBEO0FBSzFELE1BQWEsb0JBQW9CO0lBTXRCLE1BQU0sQ0FBTyxnQkFBZ0I7O1lBRWhDLE1BQU0sUUFBUSxHQUFHLHFCQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7WUFFakMsTUFBTSxTQUFTLEdBQUc7Z0JBQ2QsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLHFCQUFTLENBQUMsT0FBTyxDQUFDLFlBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxXQUFXLENBQUMsQ0FBQztnQkFDakUsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLHFCQUFTLENBQUMsT0FBTyxDQUFDLFlBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxXQUFXLENBQUMsQ0FBQztnQkFDakUsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLHFCQUFTLENBQUMsT0FBTyxDQUFDLFlBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQzthQUNqRSxDQUFDO1lBRUYsT0FBTyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztpQkFDakMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWxELENBQUM7S0FBQTtJQUVNLE1BQU0sQ0FBTyx1QkFBdUIsQ0FBQyxLQUFlLEVBQ2YsUUFBMkIsRUFDM0IsVUFBbUIsZ0JBQVEsQ0FBQyxPQUFPLEVBQUU7O1lBRTdFLE1BQU0sUUFBUSxHQUFhLEVBQUUsQ0FBQztZQUU5QixLQUFLLE1BQU0sSUFBSSxJQUFJLEtBQUssRUFBRTtnQkFFdEIsTUFBTSxhQUFLLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFNLE9BQU8sRUFBQyxFQUFFO29CQUUxQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7d0JBQzFCLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7cUJBQzFCO2dCQUVMLENBQUMsQ0FBQSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBRWY7WUFFRCxPQUFPLFFBQVEsQ0FBQztRQUVwQixDQUFDO0tBQUE7SUFFTyxNQUFNLENBQU8sUUFBUSxDQUFDLElBQVk7O1lBRXRDLE9BQU87Z0JBQ0gsSUFBSTtnQkFDSixNQUFNLEVBQUUsTUFBTSxhQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQzthQUN4QyxDQUFDO1FBRU4sQ0FBQztLQUFBO0NBRUo7QUFwREQsb0RBb0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQbGF0Zm9ybSwgUGxhdGZvcm1zfSBmcm9tIFwiLi4vLi4vdXRpbC9QbGF0Zm9ybXNcIjtcbmltcG9ydCB7RmlsZVBhdGhzfSBmcm9tICcuLi8uLi91dGlsL0ZpbGVQYXRocyc7XG5pbXBvcnQgb3MgZnJvbSBcIm9zXCI7XG5pbXBvcnQge0ZpbGVQYXRofSBmcm9tICcuLi8uLi9iYWNrZW5kL3dlYnNlcnZlci9SZXNvdXJjZVJlZ2lzdHJ5JztcbmltcG9ydCB7RmlsZXMsIEFib3J0ZXIsIEFib3J0ZXJzfSBmcm9tIFwiLi4vLi4vdXRpbC9GaWxlc1wiO1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBSZXBvc2l0b3J5RG9jTG9hZGVycyB7XG5cbiAgICAvKipcbiAgICAgKiBCYXNlZCBvbiB0aGUgcGxhdGZvcm0sIGNvbXB1dGUgYSBsaXN0IG9mIGRpcmVjdG9yaWVzIHdoZXJlIHdlIHNob3VsZFxuICAgICAqIGF0dGVtcHQgdG8gbG9hZCBmaWxlcyAoRGVza3RvcCwgRG9jdW1lbnRzLCBhbmQgWm90ZXJvIGFuZCBvdGhlciBhcHBzKS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGNvbXB1dGVMb2FkUGF0aHMoKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuXG4gICAgICAgIGNvbnN0IHBsYXRmb3JtID0gUGxhdGZvcm1zLmdldCgpO1xuXG4gICAgICAgIGNvbnN0IHBhdGhNZXRhcyA9IFtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGF0aE1ldGEoRmlsZVBhdGhzLnJlc29sdmUob3MuaG9tZWRpcigpLCAnRG93bmxvYWRzJykpLFxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wYXRoTWV0YShGaWxlUGF0aHMucmVzb2x2ZShvcy5ob21lZGlyKCksICdEb2N1bWVudHMnKSksXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBhdGhNZXRhKEZpbGVQYXRocy5yZXNvbHZlKG9zLmhvbWVkaXIoKSwgJ1pvdGVybycpKVxuICAgICAgICBdO1xuXG4gICAgICAgIHJldHVybiBwYXRoTWV0YXMuZmlsdGVyKGN1cnJlbnQgPT4gY3VycmVudC5leGlzdHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKGN1cnJlbnQgPT4gY3VycmVudC5wYXRoKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgY29tcHV0ZURvY3VtZW50c0ZvckxvYWQocGF0aHM6IHN0cmluZ1tdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXI6IFJlY3Vyc2l2ZVByb2dyZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJvcnRlcjogQWJvcnRlciA9IEFib3J0ZXJzLm1heFRpbWUoKSkge1xuXG4gICAgICAgIGNvbnN0IGRvY1BhdGhzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgICAgIGZvciAoY29uc3QgcGF0aCBvZiBwYXRocykge1xuXG4gICAgICAgICAgICBhd2FpdCBGaWxlcy5yZWN1cnNpdmVseShwYXRoLCBhc3luYyBkb2NQYXRoID0+IHtcblxuICAgICAgICAgICAgICAgIGlmIChkb2NQYXRoLmVuZHNXaXRoKFwiLnBkZlwiKSkge1xuICAgICAgICAgICAgICAgICAgICBkb2NQYXRocy5wdXNoKGRvY1BhdGgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSwgYWJvcnRlcik7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkb2NQYXRocztcblxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIHBhdGhNZXRhKHBhdGg6IHN0cmluZyk6IFByb21pc2U8UGF0aE1ldGE+IHtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgIGV4aXN0czogYXdhaXQgRmlsZXMuZXhpc3RzQXN5bmMocGF0aClcbiAgICAgICAgfTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlY3Vyc2l2ZVByb2dyZXNzIHtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkb2N1bWVudCBwYXRocyB0aGF0IHdlJ3ZlIGFscmVhZHkgZm91bmQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZG9jUGF0aHM6IHN0cmluZ1tdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgcGF0aCB3ZSdyZSBldmFsdWF0aW5nLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBhdGg6IHN0cmluZztcblxufVxuXG5leHBvcnQgdHlwZSBSZWN1cnNpdmVQcm9ncmVzc0xpc3RlbmVyID0gKHByb2dyZXNzOiBSZWN1cnNpdmVQcm9ncmVzcykgPT4gdm9pZDtcblxuaW50ZXJmYWNlIFBhdGhNZXRhIHtcbiAgICByZWFkb25seSBwYXRoOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgZXhpc3RzOiBib29sZWFuO1xufVxuIl19