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
const Messenger_1 = require("../electron/messenger/Messenger");
const Logger_1 = require("../logger/Logger");
const log = Logger_1.Logger.create();
class ContextMenuMessages {
    static postContextMenuMessage(name, triggerEvent) {
        return __awaiter(this, void 0, void 0, function* () {
            log.info("postContextMenuMessage: " + name);
            yield Messenger_1.Messenger.postMessage({
                message: {
                    type: name,
                    point: triggerEvent.point,
                    points: triggerEvent.points,
                    pageNum: triggerEvent.pageNum,
                    matchingSelectors: triggerEvent.matchingSelectors,
                    docDescriptor: triggerEvent.docDescriptor
                }
            });
        });
    }
}
exports.ContextMenuMessages = ContextMenuMessages;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGV4dE1lbnVNZXNzYWdlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvbnRleHRNZW51TWVzc2FnZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLCtEQUEwRDtBQUMxRCw2Q0FBd0M7QUFFeEMsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsbUJBQW1CO0lBRXJCLE1BQU0sQ0FBTyxzQkFBc0IsQ0FBQyxJQUFZLEVBQUUsWUFBMEI7O1lBRS9FLEdBQUcsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFRNUMsTUFBTSxxQkFBUyxDQUFDLFdBQVcsQ0FBQztnQkFDeEIsT0FBTyxFQUFFO29CQUNMLElBQUksRUFBRSxJQUFJO29CQUNWLEtBQUssRUFBRSxZQUFZLENBQUMsS0FBSztvQkFDekIsTUFBTSxFQUFFLFlBQVksQ0FBQyxNQUFNO29CQUMzQixPQUFPLEVBQUUsWUFBWSxDQUFDLE9BQU87b0JBQzdCLGlCQUFpQixFQUFFLFlBQVksQ0FBQyxpQkFBaUI7b0JBQ2pELGFBQWEsRUFBRSxZQUFZLENBQUMsYUFBYTtpQkFDNUM7YUFDSixDQUFDLENBQUM7UUFFUCxDQUFDO0tBQUE7Q0FFSjtBQXpCRCxrREF5QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RyaWdnZXJFdmVudH0gZnJvbSAnLi9UcmlnZ2VyRXZlbnQnO1xuaW1wb3J0IHtNZXNzZW5nZXJ9IGZyb20gJy4uL2VsZWN0cm9uL21lc3Nlbmdlci9NZXNzZW5nZXInO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uL2xvZ2dlci9Mb2dnZXInO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBDb250ZXh0TWVudU1lc3NhZ2VzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgcG9zdENvbnRleHRNZW51TWVzc2FnZShuYW1lOiBzdHJpbmcsIHRyaWdnZXJFdmVudDogVHJpZ2dlckV2ZW50KSB7XG5cbiAgICAgICAgbG9nLmluZm8oXCJwb3N0Q29udGV4dE1lbnVNZXNzYWdlOiBcIiArIG5hbWUpO1xuXG4gICAgICAgIC8vIFRPRE86IHRoaXMgc2hvdWxkIHVzZSBpdHMgb3duIHR5cGUgb2YgQ29udGV4dE1lbnVNZXNzYWdlIHdpdGggdGhlXG4gICAgICAgIC8vIENvbnRleHRNZW51TG9jYXRpb24gYW5kIGEgdHlwZSBmaWVsZC5cblxuICAgICAgICAvLyBUT0RPOiBqdXN0IHNlbmQgdGhlIGZ1bGwgVHJpZ2dlckV2ZW50IGJ1dCByZW5hbWUgaXQgdG9cbiAgICAgICAgLy8gQ29udGV4dE1lbnVTZWxlY3RlZEV2ZW50IG9yIHNvbWV0aGluZyBhbG9uZyB0aG9zZSBsaW5lcy5cblxuICAgICAgICBhd2FpdCBNZXNzZW5nZXIucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgIHR5cGU6IG5hbWUsXG4gICAgICAgICAgICAgICAgcG9pbnQ6IHRyaWdnZXJFdmVudC5wb2ludCxcbiAgICAgICAgICAgICAgICBwb2ludHM6IHRyaWdnZXJFdmVudC5wb2ludHMsXG4gICAgICAgICAgICAgICAgcGFnZU51bTogdHJpZ2dlckV2ZW50LnBhZ2VOdW0sXG4gICAgICAgICAgICAgICAgbWF0Y2hpbmdTZWxlY3RvcnM6IHRyaWdnZXJFdmVudC5tYXRjaGluZ1NlbGVjdG9ycyxcbiAgICAgICAgICAgICAgICBkb2NEZXNjcmlwdG9yOiB0cmlnZ2VyRXZlbnQuZG9jRGVzY3JpcHRvclxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxufVxuIl19