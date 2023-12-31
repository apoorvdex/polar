"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StringBuffer_1 = require("../../util/StringBuffer");
const Nullables_1 = require("../../util/ts/Nullables");
class StylesheetSerializer {
    static serialize(listener, doc) {
        this.serializeStylesheets(doc.styleSheets, listener);
    }
    static serializeStylesheets(styleSheets, listener) {
        for (const styleSheet of Array.from(styleSheets)) {
            const serializedStylesheetRef = this.toSerializedStylesheet(styleSheet);
            listener(serializedStylesheetRef.stylesheet);
            this.serializeStylesheets(serializedStylesheetRef.imports, listener);
        }
    }
    static toSerializedStylesheet(styleSheet) {
        const buff = new StringBuffer_1.StringBuffer();
        const imports = [];
        for (const rule of Array.from(styleSheet.rules)) {
            buff.append(rule.cssText)
                .append('\n');
            if (rule instanceof CSSImportRule) {
                imports.push(rule.styleSheet);
            }
        }
        const stylesheet = {
            disabled: styleSheet.disabled,
            href: Nullables_1.Nullables.toUndefined(styleSheet.href),
            text: buff.toString(),
            title: Nullables_1.Nullables.toUndefined(styleSheet.title),
            type: styleSheet.type,
        };
        return { imports, stylesheet };
    }
}
exports.StylesheetSerializer = StylesheetSerializer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3R5bGVzaGVldFNlcmlhbGl6ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTdHlsZXNoZWV0U2VyaWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLDBEQUFxRDtBQUNyRCx1REFBa0Q7QUFFbEQsTUFBYSxvQkFBb0I7SUFFdEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFzQyxFQUFFLEdBQWE7UUFFekUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFFekQsQ0FBQztJQUVNLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxXQUEwRCxFQUMxRCxRQUFzQztRQUVyRSxLQUFLLE1BQU0sVUFBVSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFFOUMsTUFBTSx1QkFBdUIsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQWlCLFVBQVUsQ0FBQyxDQUFDO1lBQ3hGLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUU3QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsdUJBQXVCLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBRXhFO0lBRUwsQ0FBQztJQUVPLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxVQUF5QjtRQUUzRCxNQUFNLElBQUksR0FBRyxJQUFJLDJCQUFZLEVBQUUsQ0FBQztRQUVoQyxNQUFNLE9BQU8sR0FBb0IsRUFBRSxDQUFDO1FBRXBDLEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFFN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2lCQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFbEIsSUFBSSxJQUFJLFlBQVksYUFBYSxFQUFFO2dCQU8vQixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUVqQztTQUVKO1FBRUQsTUFBTSxVQUFVLEdBQXlCO1lBQ3JDLFFBQVEsRUFBRSxVQUFVLENBQUMsUUFBUTtZQUM3QixJQUFJLEVBQUUscUJBQVMsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztZQUM1QyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNyQixLQUFLLEVBQUUscUJBQVMsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztZQUM5QyxJQUFJLEVBQUUsVUFBVSxDQUFDLElBQUk7U0FDeEIsQ0FBQztRQUVGLE9BQU8sRUFBQyxPQUFPLEVBQUUsVUFBVSxFQUFDLENBQUM7SUFFakMsQ0FBQztDQUVKO0FBMURELG9EQTBEQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlcyB0aGUgZG9jdW1lbnQgcGFyc2VkIENTUyBzdHlsZXMgdG8gc2VyaWFsaXplIHRvIGFcbiAqL1xuaW1wb3J0IHtTdHJpbmdCdWZmZXJ9IGZyb20gXCIuLi8uLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xuaW1wb3J0IHtOdWxsYWJsZXN9IGZyb20gXCIuLi8uLi91dGlsL3RzL051bGxhYmxlc1wiO1xuXG5leHBvcnQgY2xhc3MgU3R5bGVzaGVldFNlcmlhbGl6ZXIge1xuXG4gICAgcHVibGljIHN0YXRpYyBzZXJpYWxpemUobGlzdGVuZXI6IFNlcmlhbGl6ZWRTdHlsZXNoZWV0TGlzdGVuZXIsIGRvYzogRG9jdW1lbnQpIHtcblxuICAgICAgICB0aGlzLnNlcmlhbGl6ZVN0eWxlc2hlZXRzKGRvYy5zdHlsZVNoZWV0cywgbGlzdGVuZXIpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBzZXJpYWxpemVTdHlsZXNoZWV0cyhzdHlsZVNoZWV0czogU3R5bGVTaGVldExpc3QgfCBSZWFkb25seUFycmF5PENTU1N0eWxlU2hlZXQ+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXI6IFNlcmlhbGl6ZWRTdHlsZXNoZWV0TGlzdGVuZXIpIHtcblxuICAgICAgICBmb3IgKGNvbnN0IHN0eWxlU2hlZXQgb2YgQXJyYXkuZnJvbShzdHlsZVNoZWV0cykpIHtcblxuICAgICAgICAgICAgY29uc3Qgc2VyaWFsaXplZFN0eWxlc2hlZXRSZWYgPSB0aGlzLnRvU2VyaWFsaXplZFN0eWxlc2hlZXQoPENTU1N0eWxlU2hlZXQ+IHN0eWxlU2hlZXQpO1xuICAgICAgICAgICAgbGlzdGVuZXIoc2VyaWFsaXplZFN0eWxlc2hlZXRSZWYuc3R5bGVzaGVldCk7XG5cbiAgICAgICAgICAgIHRoaXMuc2VyaWFsaXplU3R5bGVzaGVldHMoc2VyaWFsaXplZFN0eWxlc2hlZXRSZWYuaW1wb3J0cywgbGlzdGVuZXIpO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIHRvU2VyaWFsaXplZFN0eWxlc2hlZXQoc3R5bGVTaGVldDogQ1NTU3R5bGVTaGVldCk6IFNlcmlhbGl6ZWRTdHlsZXNoZWV0UmVmIHtcblxuICAgICAgICBjb25zdCBidWZmID0gbmV3IFN0cmluZ0J1ZmZlcigpO1xuXG4gICAgICAgIGNvbnN0IGltcG9ydHM6IENTU1N0eWxlU2hlZXRbXSA9IFtdO1xuXG4gICAgICAgIGZvciAoY29uc3QgcnVsZSBvZiBBcnJheS5mcm9tKHN0eWxlU2hlZXQucnVsZXMpKSB7XG5cbiAgICAgICAgICAgIGJ1ZmYuYXBwZW5kKHJ1bGUuY3NzVGV4dClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKCdcXG4nKTtcblxuICAgICAgICAgICAgaWYgKHJ1bGUgaW5zdGFuY2VvZiBDU1NJbXBvcnRSdWxlKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBUaGUgdHlwZSBvZiB0aGlzIHdpbGwgYmUgQ1NTSW1wb3J0UnVsZSBpZiB0aGlzIGlzIGFuIEBpbXBvcnRcbiAgICAgICAgICAgICAgICAvLyBhbmQgYSBDU1NJbXBvcnRSdWxlIGFsc28gaGFzIGEgc3R5bGVTaGVldCB3aGljaCBuZWVkcyB0byBiZSByZWN1cnNpdmVseVxuICAgICAgICAgICAgICAgIC8vIGhhbmRsZWQuXG5cbiAgICAgICAgICAgICAgICAvLyBpbmNsdWRlIHRoaXMgaW4gdGhlIHJlc3VsdCBzbyB3ZSBjYW4gdHJhdmVyc2UgaXQgdG9vLlxuICAgICAgICAgICAgICAgIGltcG9ydHMucHVzaChydWxlLnN0eWxlU2hlZXQpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN0eWxlc2hlZXQ6IFNlcmlhbGl6ZWRTdHlsZXNoZWV0ID0ge1xuICAgICAgICAgICAgZGlzYWJsZWQ6IHN0eWxlU2hlZXQuZGlzYWJsZWQsXG4gICAgICAgICAgICBocmVmOiBOdWxsYWJsZXMudG9VbmRlZmluZWQoc3R5bGVTaGVldC5ocmVmKSxcbiAgICAgICAgICAgIHRleHQ6IGJ1ZmYudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHRpdGxlOiBOdWxsYWJsZXMudG9VbmRlZmluZWQoc3R5bGVTaGVldC50aXRsZSksXG4gICAgICAgICAgICB0eXBlOiBzdHlsZVNoZWV0LnR5cGUsXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHtpbXBvcnRzLCBzdHlsZXNoZWV0fTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgdHlwZSBTZXJpYWxpemVkU3R5bGVzaGVldExpc3RlbmVyID0gKHN0eWxlc2hlZXQ6IFNlcmlhbGl6ZWRTdHlsZXNoZWV0KSA9PiB2b2lkO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlcmlhbGl6ZWRTdHlsZXNoZWV0UmVmIHtcblxuICAgIHJlYWRvbmx5IGltcG9ydHM6IFJlYWRvbmx5QXJyYXk8Q1NTU3R5bGVTaGVldD47XG5cbiAgICByZWFkb25seSBzdHlsZXNoZWV0OiBTZXJpYWxpemVkU3R5bGVzaGVldDtcblxufVxuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU2VyaWFsaXplZFN0eWxlc2hlZXQge1xuXG4gICAgcmVhZG9ubHkgZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgICByZWFkb25seSBocmVmPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlcmlhbGl6ZWQgdGV4dCBvZiB0aGUgQ1NTLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRleHQ6IHN0cmluZztcblxuICAgIHJlYWRvbmx5IHRpdGxlPzogc3RyaW5nO1xuXG4gICAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xuXG59XG5cbiJdfQ==