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
const jszip_1 = __importDefault(require("jszip"));
const Resources_1 = require("./Resources");
const ResourceEntry_1 = require("./ResourceEntry");
const ContentTypes_1 = require("./ContentTypes");
const fs_1 = __importDefault(require("fs"));
class PHZWriter {
    constructor(path) {
        this.path = path;
        this.zip = new jszip_1.default();
        this.resources = new Resources_1.Resources();
    }
    writeMetadata(metadata) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__write("metadata.json", JSON.stringify(metadata, null, "  "), "metadata");
            return this;
        });
    }
    writeResource(resource, content, comment) {
        return __awaiter(this, void 0, void 0, function* () {
            if (comment === undefined) {
                comment = "";
            }
            const ext = ContentTypes_1.ContentTypes.contentTypeToExtension(resource.contentType);
            const path = `${resource.id}.${ext}`;
            const resourceEntry = new ResourceEntry_1.ResourceEntry({ id: resource.id, path, resource });
            this.resources.entries[resource.id] = resourceEntry;
            this.__write(`${resource.id}-meta.json`, JSON.stringify(resource, null, "  "), "");
            this.__write(path, content, comment);
            return this;
        });
    }
    __writeResources() {
        this.__write("resources.json", JSON.stringify(this.resources, null, "  "), "resources");
        return this;
    }
    __write(path, content, comment) {
        this.zip.file(path, content);
        return this;
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            this.__writeResources();
            return new Promise((resolve, reject) => {
                const options = {
                    type: 'nodebuffer',
                    streamFiles: true,
                    compression: "DEFLATE",
                    compressionOptions: {
                        level: 9
                    }
                };
                this.zip.generateNodeStream(options)
                    .pipe(fs_1.default.createWriteStream(this.path))
                    .on('error', function (err) {
                    reject(err);
                })
                    .on('finish', function () {
                    resolve();
                });
            });
        });
    }
}
exports.PHZWriter = PHZWriter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUEhaV3JpdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUEhaV3JpdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxrREFBMEI7QUFDMUIsMkNBQXNDO0FBQ3RDLG1EQUE4QztBQUM5QyxpREFBNEM7QUFHNUMsNENBQW9CO0FBS3BCLE1BQWEsU0FBUztJQVFsQixZQUFZLElBQVk7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLGVBQUssRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7SUFFckMsQ0FBQztJQU1ZLGFBQWEsQ0FBQyxRQUFhOztZQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDaEYsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztLQUFBO0lBS1ksYUFBYSxDQUFDLFFBQWtCLEVBQUUsT0FBZSxFQUFFLE9BQWdCOztZQU81RSxJQUFJLE9BQU8sS0FBSyxTQUFTLEVBQUU7Z0JBQ3ZCLE9BQU8sR0FBRyxFQUFFLENBQUM7YUFDaEI7WUFFRCxNQUFNLEdBQUcsR0FBRywyQkFBWSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN0RSxNQUFNLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxFQUFFLElBQUksR0FBRyxFQUFFLENBQUM7WUFFckMsTUFBTSxhQUFhLEdBQUcsSUFBSSw2QkFBYSxDQUFDLEVBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7WUFHM0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLGFBQWEsQ0FBQztZQUlwRCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsUUFBUSxDQUFDLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUluRixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFFckMsT0FBTyxJQUFJLENBQUM7UUFFaEIsQ0FBQztLQUFBO0lBRU0sZ0JBQWdCO1FBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUN4RixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sT0FBTyxDQUFDLElBQVksRUFBRSxPQUFlLEVBQUUsT0FBZTtRQUl6RCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFN0IsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQU1ZLEtBQUs7O1lBRWQsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFFeEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFFbkMsTUFBTSxPQUFPLEdBQThDO29CQUN2RCxJQUFJLEVBQUUsWUFBWTtvQkFDbEIsV0FBVyxFQUFFLElBQUk7b0JBQ2pCLFdBQVcsRUFBRSxTQUFTO29CQUN0QixrQkFBa0IsRUFBRTt3QkFDaEIsS0FBSyxFQUFFLENBQUM7cUJBQ1g7aUJBQ0osQ0FBQztnQkFFRixJQUFJLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQztxQkFDL0IsSUFBSSxDQUFDLFlBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ3JDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBUyxHQUFVO29CQUM1QixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2hCLENBQUMsQ0FBQztxQkFDRCxFQUFFLENBQUMsUUFBUSxFQUFFO29CQUNWLE9BQU8sRUFBRSxDQUFDO2dCQUNkLENBQUMsQ0FBQyxDQUFDO1lBRVgsQ0FBQyxDQUFDLENBQUM7UUFFUCxDQUFDO0tBQUE7Q0FFSjtBQXhHRCw4QkF3R0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSlNaaXAgZnJvbSAnanN6aXAnO1xuaW1wb3J0IHtSZXNvdXJjZXN9IGZyb20gJy4vUmVzb3VyY2VzJztcbmltcG9ydCB7UmVzb3VyY2VFbnRyeX0gZnJvbSAnLi9SZXNvdXJjZUVudHJ5JztcbmltcG9ydCB7Q29udGVudFR5cGVzfSBmcm9tICcuL0NvbnRlbnRUeXBlcyc7XG5pbXBvcnQge1Jlc291cmNlfSBmcm9tICcuL1Jlc291cmNlJztcblxuaW1wb3J0IGZzIGZyb20gJ2ZzJztcblxuLyoqXG4gKiBXcml0ZSB0byBhIG5ldyB6aXAgb3V0cHV0IHN0cmVhbS5cbiAqL1xuZXhwb3J0IGNsYXNzIFBIWldyaXRlciB7XG5cbiAgICBwdWJsaWMgcGF0aDogc3RyaW5nO1xuXG4gICAgcHVibGljIHppcDogSlNaaXA7XG5cbiAgICBwdWJsaWMgcmVzb3VyY2VzOiBSZXNvdXJjZXM7XG5cbiAgICBjb25zdHJ1Y3RvcihwYXRoOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy56aXAgPSBuZXcgSlNaaXAoKTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMgPSBuZXcgUmVzb3VyY2VzKCk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXcml0ZSB1c2VyIHByb3ZpZGVkIG1ldGFkYXRhIHdoaWNoIGFwcGxpZXMgdG8gYWxsIGZpbGVzIGluIHRoZSBhcmNoaXZlLlxuICAgICAqXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIHdyaXRlTWV0YWRhdGEobWV0YWRhdGE6IGFueSk6IFByb21pc2U8UEhaV3JpdGVyPiB7XG4gICAgICAgIHRoaXMuX193cml0ZShcIm1ldGFkYXRhLmpzb25cIiwgSlNPTi5zdHJpbmdpZnkobWV0YWRhdGEsIG51bGwsIFwiICBcIiksIFwibWV0YWRhdGFcIik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIHdyaXRlUmVzb3VyY2UocmVzb3VyY2U6IFJlc291cmNlLCBjb250ZW50OiBzdHJpbmcsIGNvbW1lbnQ/OiBzdHJpbmcpOiBQcm9taXNlPFBIWldyaXRlcj4ge1xuXG4gICAgICAgIC8vIFRPRE86IHdoZW4gd3JpdGluZyB0aGUgY29udGVudCAgdXBkYXRlIHRoZSBjb250ZW50TGVuZ3RoIHdpdGggdGhlXG4gICAgICAgIC8vIGJpbmFyeSBzdG9yYWdlIHVzZWQgdG8gcmVwcmVzZW50IHRoZSBkYXRhIGFzIFVURi04Li4uXG5cbiAgICAgICAgLy8gVE9ETzogdmVyaWZ5IHRoYXQgd2Ugc3RvcmUgdGhlIGRhdGEgYXMgVVRGLThcblxuICAgICAgICBpZiAoY29tbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb21tZW50ID0gXCJcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGV4dCA9IENvbnRlbnRUeXBlcy5jb250ZW50VHlwZVRvRXh0ZW5zaW9uKHJlc291cmNlLmNvbnRlbnRUeXBlKTtcbiAgICAgICAgY29uc3QgcGF0aCA9IGAke3Jlc291cmNlLmlkfS4ke2V4dH1gO1xuXG4gICAgICAgIGNvbnN0IHJlc291cmNlRW50cnkgPSBuZXcgUmVzb3VyY2VFbnRyeSh7aWQ6IHJlc291cmNlLmlkLCBwYXRoLCByZXNvdXJjZX0pO1xuXG4gICAgICAgIC8vIGFkZCB0aGlzIHRvIHRoZSByZXNvdXJjZXMgaW5kZXguXG4gICAgICAgIHRoaXMucmVzb3VyY2VzLmVudHJpZXNbcmVzb3VyY2UuaWRdID0gcmVzb3VyY2VFbnRyeTtcblxuICAgICAgICAvLyAqKiogd3JpdGUgdGhlIG1ldGFkYXRhXG5cbiAgICAgICAgdGhpcy5fX3dyaXRlKGAke3Jlc291cmNlLmlkfS1tZXRhLmpzb25gLCBKU09OLnN0cmluZ2lmeShyZXNvdXJjZSwgbnVsbCwgXCIgIFwiKSwgXCJcIik7XG5cbiAgICAgICAgLy8gKioqIHdyaXRlIHRoZSBhY3R1YWwgZGF0YVxuXG4gICAgICAgIHRoaXMuX193cml0ZShwYXRoLCBjb250ZW50LCBjb21tZW50KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgIH1cblxuICAgIHB1YmxpYyBfX3dyaXRlUmVzb3VyY2VzKCkge1xuICAgICAgICB0aGlzLl9fd3JpdGUoXCJyZXNvdXJjZXMuanNvblwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLnJlc291cmNlcywgbnVsbCwgXCIgIFwiKSwgXCJyZXNvdXJjZXNcIik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBfX3dyaXRlKHBhdGg6IHN0cmluZywgY29udGVudDogc3RyaW5nLCBjb21tZW50OiBzdHJpbmcpIHtcblxuICAgICAgICAvLyBGSVhNRTogY29tbWVudCBhbmQgaG93IGRvIEkgaGFuZGxlIGJpbmFyeSBkYXRhPz9cblxuICAgICAgICB0aGlzLnppcC5maWxlKHBhdGgsIGNvbnRlbnQpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNhdmUgdGhlIG5ldyB6aXAgZmlsZSB0byBkaXNrLlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIGNsb3NlKCkge1xuXG4gICAgICAgIHRoaXMuX193cml0ZVJlc291cmNlcygpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnM6IEpTWmlwLkpTWmlwR2VuZXJhdG9yT3B0aW9uczwnbm9kZWJ1ZmZlcic+ID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdub2RlYnVmZmVyJyxcbiAgICAgICAgICAgICAgICBzdHJlYW1GaWxlczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb21wcmVzc2lvbjogXCJERUZMQVRFXCIsXG4gICAgICAgICAgICAgICAgY29tcHJlc3Npb25PcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIGxldmVsOiA5XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy56aXAuZ2VuZXJhdGVOb2RlU3RyZWFtKG9wdGlvbnMpXG4gICAgICAgICAgICAgICAgLnBpcGUoZnMuY3JlYXRlV3JpdGVTdHJlYW0odGhpcy5wYXRoKSlcbiAgICAgICAgICAgICAgICAub24oJ2Vycm9yJywgZnVuY3Rpb24oZXJyOiBFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vbignZmluaXNoJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgIH1cblxufVxuIl19