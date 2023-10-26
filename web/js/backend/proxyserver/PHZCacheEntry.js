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
const CacheEntry_1 = require("./CacheEntry");
const Preconditions_1 = require("../../Preconditions");
class PHZCacheEntry extends CacheEntry_1.CacheEntry {
    constructor(opts) {
        super(opts);
        this.phzReader = opts.phzReader;
        this.resourceEntry = opts.resourceEntry;
        Preconditions_1.Preconditions.assertNotNull(this.phzReader, "phzReader");
        Preconditions_1.Preconditions.assertNotNull(this.resourceEntry, "resourceEntry");
        Object.defineProperty(this, 'phzReader', {
            value: this.phzReader,
            enumerable: false
        });
    }
    handleData(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const buffer = yield this.phzReader.getResource(this.resourceEntry);
            callback(buffer);
            return false;
        });
    }
    toBuffer() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.phzReader.getResource(this.resourceEntry);
        });
    }
    toStream() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.phzReader.getResourceAsStream(this.resourceEntry);
        });
    }
}
exports.PHZCacheEntry = PHZCacheEntry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUEhaQ2FjaGVFbnRyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlBIWkNhY2hlRW50cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBLDZDQUFtRTtBQUVuRSx1REFBa0Q7QUFJbEQsTUFBYSxhQUFjLFNBQVEsdUJBQVU7SUFNekMsWUFBWSxJQUFvQjtRQUU1QixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFWixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBRXhDLDZCQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDekQsNkJBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUVqRSxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUU7WUFDckMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3JCLFVBQVUsRUFBRSxLQUFLO1NBQ3BCLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFWSxVQUFVLENBQUMsUUFBc0I7O1lBRTFDLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3BFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqQixPQUFPLEtBQUssQ0FBQztRQUVqQixDQUFDO0tBQUE7SUFFWSxRQUFROztZQUNqQixPQUFPLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2hFLENBQUM7S0FBQTtJQUVZLFFBQVE7O1lBQ2pCLE9BQU8sTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN4RSxDQUFDO0tBQUE7Q0FFSjtBQXZDRCxzQ0F1Q0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgY2FjaGUgZW50cnkgYmFja2VkIGJ5IGEgcGh6IGZpbGUuXG4gKi9cbmltcG9ydCB7Q2FjaGVFbnRyeSwgRGF0YUNhbGxiYWNrLCBJQ2FjaGVFbnRyeX0gZnJvbSBcIi4vQ2FjaGVFbnRyeVwiO1xuaW1wb3J0IHtQSFpSZWFkZXJ9IGZyb20gJy4uLy4uL3Boei9QSFpSZWFkZXInO1xuaW1wb3J0IHtQcmVjb25kaXRpb25zfSBmcm9tICcuLi8uLi9QcmVjb25kaXRpb25zJztcbmltcG9ydCB7UmVzb3VyY2VFbnRyeX0gZnJvbSAnLi4vLi4vcGh6L1Jlc291cmNlRW50cnknO1xuaW1wb3J0IHtDb21wcmVzc2VkUmVhZGVyfSBmcm9tIFwiLi4vLi4vcGh6L0NvbXByZXNzZWRSZWFkZXJcIjtcblxuZXhwb3J0IGNsYXNzIFBIWkNhY2hlRW50cnkgZXh0ZW5kcyBDYWNoZUVudHJ5IGltcGxlbWVudHMgSVBIWkNhY2hlRW50cnkge1xuXG4gICAgcHVibGljIHBoelJlYWRlcjogQ29tcHJlc3NlZFJlYWRlcjtcblxuICAgIHB1YmxpYyByZXNvdXJjZUVudHJ5OiBSZXNvdXJjZUVudHJ5O1xuXG4gICAgY29uc3RydWN0b3Iob3B0czogSVBIWkNhY2hlRW50cnkpIHtcblxuICAgICAgICBzdXBlcihvcHRzKTtcblxuICAgICAgICB0aGlzLnBoelJlYWRlciA9IG9wdHMucGh6UmVhZGVyO1xuICAgICAgICB0aGlzLnJlc291cmNlRW50cnkgPSBvcHRzLnJlc291cmNlRW50cnk7XG5cbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnROb3ROdWxsKHRoaXMucGh6UmVhZGVyLCBcInBoelJlYWRlclwiKTtcbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnROb3ROdWxsKHRoaXMucmVzb3VyY2VFbnRyeSwgXCJyZXNvdXJjZUVudHJ5XCIpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAncGh6UmVhZGVyJywge1xuICAgICAgICAgICAgdmFsdWU6IHRoaXMucGh6UmVhZGVyLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2VcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgaGFuZGxlRGF0YShjYWxsYmFjazogRGF0YUNhbGxiYWNrKTogUHJvbWlzZTxib29sZWFuPiB7XG5cbiAgICAgICAgY29uc3QgYnVmZmVyID0gYXdhaXQgdGhpcy5waHpSZWFkZXIuZ2V0UmVzb3VyY2UodGhpcy5yZXNvdXJjZUVudHJ5KTtcbiAgICAgICAgY2FsbGJhY2soYnVmZmVyKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHRvQnVmZmVyKCk6IFByb21pc2U8QnVmZmVyPiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnBoelJlYWRlci5nZXRSZXNvdXJjZSh0aGlzLnJlc291cmNlRW50cnkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyB0b1N0cmVhbSgpOiBQcm9taXNlPE5vZGVKUy5SZWFkYWJsZVN0cmVhbT4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5waHpSZWFkZXIuZ2V0UmVzb3VyY2VBc1N0cmVhbSh0aGlzLnJlc291cmNlRW50cnkpO1xuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQSFpDYWNoZUVudHJ5IGV4dGVuZHMgSUNhY2hlRW50cnkge1xuXG4gICAgcGh6UmVhZGVyOiBDb21wcmVzc2VkUmVhZGVyO1xuXG4gICAgcmVzb3VyY2VFbnRyeTogUmVzb3VyY2VFbnRyeTtcblxufVxuIl19