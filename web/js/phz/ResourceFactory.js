"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Hashcodes_1 = require("../Hashcodes");
const Resource_1 = require("./Resource");
class ResourceFactory {
    static create(url, contentType) {
        const id = Hashcodes_1.Hashcodes.createID(url, 20);
        const created = new Date().toISOString();
        const meta = {};
        const headers = {};
        return new Resource_1.Resource({ id, url, created, meta, contentType, headers });
    }
    static contentTypeToExtension(contentType) {
        if (contentType === "text/html") {
            return "html";
        }
        else {
            return "dat";
        }
    }
}
exports.ResourceFactory = ResourceFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzb3VyY2VGYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUmVzb3VyY2VGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNENBQXVDO0FBQ3ZDLHlDQUFvQztBQUVwQyxNQUFhLGVBQWU7SUFFakIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFXLEVBQUUsV0FBbUI7UUFFakQsTUFBTSxFQUFFLEdBQUcscUJBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLE1BQU0sT0FBTyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDekMsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLE1BQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNuQixPQUFPLElBQUksbUJBQVEsQ0FBQyxFQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQztJQUV4RSxDQUFDO0lBRU0sTUFBTSxDQUFDLHNCQUFzQixDQUFDLFdBQW1CO1FBQ3BELElBQUksV0FBVyxLQUFLLFdBQVcsRUFBRTtZQUM3QixPQUFPLE1BQU0sQ0FBQztTQUNqQjthQUFNO1lBQ0gsT0FBTyxLQUFLLENBQUM7U0FDaEI7SUFDTCxDQUFDO0NBRUo7QUFwQkQsMENBb0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIYXNoY29kZXN9IGZyb20gJy4uL0hhc2hjb2Rlcyc7XG5pbXBvcnQge1Jlc291cmNlfSBmcm9tICcuL1Jlc291cmNlJztcblxuZXhwb3J0IGNsYXNzIFJlc291cmNlRmFjdG9yeSB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZSh1cmw6IHN0cmluZywgY29udGVudFR5cGU6IHN0cmluZykge1xuXG4gICAgICAgIGNvbnN0IGlkID0gSGFzaGNvZGVzLmNyZWF0ZUlEKHVybCwgMjApO1xuICAgICAgICBjb25zdCBjcmVhdGVkID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICAgICAgICBjb25zdCBtZXRhID0ge307XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7fTtcbiAgICAgICAgcmV0dXJuIG5ldyBSZXNvdXJjZSh7aWQsIHVybCwgY3JlYXRlZCwgbWV0YSwgY29udGVudFR5cGUsIGhlYWRlcnN9KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY29udGVudFR5cGVUb0V4dGVuc2lvbihjb250ZW50VHlwZTogc3RyaW5nKSB7XG4gICAgICAgIGlmIChjb250ZW50VHlwZSA9PT0gXCJ0ZXh0L2h0bWxcIikge1xuICAgICAgICAgICAgcmV0dXJuIFwiaHRtbFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwiZGF0XCI7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==