"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ParentWindowRegistry {
    constructor() {
        this.backing = {};
    }
    register(dialogWindowReference, parentWindowReference) {
        this.backing[dialogWindowReference.id] = parentWindowReference;
    }
    get(dialogWindowReference) {
        return this.backing[dialogWindowReference.id];
    }
}
exports.ParentWindowRegistry = ParentWindowRegistry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyZW50V2luZG93UmVnaXN0cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQYXJlbnRXaW5kb3dSZWdpc3RyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLE1BQWEsb0JBQW9CO0lBQWpDO1FBRVksWUFBTyxHQUErQyxFQUFFLENBQUM7SUFVckUsQ0FBQztJQVJVLFFBQVEsQ0FBQyxxQkFBNEMsRUFBRSxxQkFBNkM7UUFDdkcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsR0FBRyxxQkFBcUIsQ0FBQztJQUNuRSxDQUFDO0lBRU0sR0FBRyxDQUFDLHFCQUE0QztRQUNuRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbEQsQ0FBQztDQUVKO0FBWkQsb0RBWUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jyb3dzZXJXaW5kb3dSZWZlcmVuY2V9IGZyb20gJy4vQnJvd3NlcldpbmRvd1JlZmVyZW5jZSc7XG5pbXBvcnQge1BhcmVudFdpbmRvd1JlZmVyZW5jZX0gZnJvbSAnLi9QYXJlbnRXaW5kb3dSZWZlcmVuY2UnO1xuaW1wb3J0IHtEaWFsb2dXaW5kb3dSZWZlcmVuY2V9IGZyb20gJy4vRGlhbG9nV2luZG93UmVmZXJlbmNlJztcblxuZXhwb3J0IGNsYXNzIFBhcmVudFdpbmRvd1JlZ2lzdHJ5IHtcblxuICAgIHByaXZhdGUgYmFja2luZzogeyBbaW5kZXg6IG51bWJlcl06IFBhcmVudFdpbmRvd1JlZmVyZW5jZSB9ID0ge307XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXIoZGlhbG9nV2luZG93UmVmZXJlbmNlOiBEaWFsb2dXaW5kb3dSZWZlcmVuY2UsIHBhcmVudFdpbmRvd1JlZmVyZW5jZTogQnJvd3NlcldpbmRvd1JlZmVyZW5jZSkge1xuICAgICAgICB0aGlzLmJhY2tpbmdbZGlhbG9nV2luZG93UmVmZXJlbmNlLmlkXSA9IHBhcmVudFdpbmRvd1JlZmVyZW5jZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0KGRpYWxvZ1dpbmRvd1JlZmVyZW5jZTogRGlhbG9nV2luZG93UmVmZXJlbmNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhY2tpbmdbZGlhbG9nV2luZG93UmVmZXJlbmNlLmlkXTtcbiAgICB9XG5cbn1cbiJdfQ==