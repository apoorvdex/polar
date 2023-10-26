"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const ToasterMessages_1 = require("./ToasterMessages");
const Toaster_1 = require("./Toaster");
const Logger_1 = require("../../logger/Logger");
const log = Logger_1.Logger.create();
class ToasterService {
    start() {
        if (electron_1.ipcRenderer) {
            electron_1.ipcRenderer.on(ToasterMessages_1.ToasterMessages.CHANNEL, (event, toasterMessage) => {
                switch (toasterMessage.type) {
                    case Toaster_1.ToasterMessageType.SUCCESS:
                        Toaster_1.Toaster.success(toasterMessage.message, toasterMessage.title, toasterMessage.options);
                        break;
                    case Toaster_1.ToasterMessageType.INFO:
                        Toaster_1.Toaster.info(toasterMessage.message, toasterMessage.title, toasterMessage.options);
                        break;
                    case Toaster_1.ToasterMessageType.WARNING:
                        Toaster_1.Toaster.warning(toasterMessage.message, toasterMessage.title, toasterMessage.options);
                        break;
                    case Toaster_1.ToasterMessageType.ERROR:
                        Toaster_1.Toaster.error(toasterMessage.message, toasterMessage.title, toasterMessage.options);
                        break;
                }
            });
        }
        log.info("started");
    }
}
exports.ToasterService = ToasterService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9hc3RlclNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUb2FzdGVyU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUFxQztBQUVyQyx1REFBa0Q7QUFDbEQsdUNBQXNEO0FBQ3RELGdEQUEyQztBQUUzQyxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFNNUIsTUFBYSxjQUFjO0lBRWhCLEtBQUs7UUFFUixJQUFJLHNCQUFXLEVBQUU7WUFFYixzQkFBVyxDQUFDLEVBQUUsQ0FBQyxpQ0FBZSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQTRCLEVBQzVCLGNBQThCLEVBQUUsRUFBRTtnQkFFdkUsUUFBUSxjQUFjLENBQUMsSUFBSSxFQUFFO29CQUN6QixLQUFLLDRCQUFrQixDQUFDLE9BQU87d0JBQzNCLGlCQUFPLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLEtBQUssRUFBRSxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ3RGLE1BQU07b0JBQ1YsS0FBSyw0QkFBa0IsQ0FBQyxJQUFJO3dCQUN4QixpQkFBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxLQUFLLEVBQUUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUNuRixNQUFNO29CQUNWLEtBQUssNEJBQWtCLENBQUMsT0FBTzt3QkFDM0IsaUJBQU8sQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsS0FBSyxFQUFFLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDdEYsTUFBTTtvQkFDVixLQUFLLDRCQUFrQixDQUFDLEtBQUs7d0JBQ3pCLGlCQUFPLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLEtBQUssRUFBRSxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ3BGLE1BQU07aUJBQ2I7WUFFTCxDQUFDLENBQUMsQ0FBQztTQUVOO1FBRUQsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUV4QixDQUFDO0NBRUo7QUFoQ0Qsd0NBZ0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpcGNSZW5kZXJlcn0gZnJvbSBcImVsZWN0cm9uXCI7XG5pbXBvcnQge1RvYXN0ZXJNZXNzYWdlfSBmcm9tICcuL1RvYXN0ZXJNZXNzYWdlJztcbmltcG9ydCB7VG9hc3Rlck1lc3NhZ2VzfSBmcm9tICcuL1RvYXN0ZXJNZXNzYWdlcyc7XG5pbXBvcnQge1RvYXN0ZXJNZXNzYWdlVHlwZSwgVG9hc3Rlcn0gZnJvbSAnLi9Ub2FzdGVyJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi9sb2dnZXIvTG9nZ2VyJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5cbi8qKlxuICogU2ltcGxlIGFwcCB0aGF0IGNhbiBkaXNwbGF5IHRvYXN0ZXIgbm90aWZpY2F0aW9ucyBzZW50IHZpYSBicm9hZGNhc3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBUb2FzdGVyU2VydmljZSB7XG5cbiAgICBwdWJsaWMgc3RhcnQoKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKGlwY1JlbmRlcmVyKSB7XG5cbiAgICAgICAgICAgIGlwY1JlbmRlcmVyLm9uKFRvYXN0ZXJNZXNzYWdlcy5DSEFOTkVMLCAoZXZlbnQ6IEVsZWN0cm9uLkV2ZW50RW1pdHRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3Rlck1lc3NhZ2U6IFRvYXN0ZXJNZXNzYWdlKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRvYXN0ZXJNZXNzYWdlLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBUb2FzdGVyTWVzc2FnZVR5cGUuU1VDQ0VTUzpcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0ZXIuc3VjY2Vzcyh0b2FzdGVyTWVzc2FnZS5tZXNzYWdlLCB0b2FzdGVyTWVzc2FnZS50aXRsZSwgdG9hc3Rlck1lc3NhZ2Uub3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBUb2FzdGVyTWVzc2FnZVR5cGUuSU5GTzpcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0ZXIuaW5mbyh0b2FzdGVyTWVzc2FnZS5tZXNzYWdlLCB0b2FzdGVyTWVzc2FnZS50aXRsZSwgdG9hc3Rlck1lc3NhZ2Uub3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBUb2FzdGVyTWVzc2FnZVR5cGUuV0FSTklORzpcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0ZXIud2FybmluZyh0b2FzdGVyTWVzc2FnZS5tZXNzYWdlLCB0b2FzdGVyTWVzc2FnZS50aXRsZSwgdG9hc3Rlck1lc3NhZ2Uub3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBUb2FzdGVyTWVzc2FnZVR5cGUuRVJST1I6XG4gICAgICAgICAgICAgICAgICAgICAgICBUb2FzdGVyLmVycm9yKHRvYXN0ZXJNZXNzYWdlLm1lc3NhZ2UsIHRvYXN0ZXJNZXNzYWdlLnRpdGxlLCB0b2FzdGVyTWVzc2FnZS5vcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGxvZy5pbmZvKFwic3RhcnRlZFwiKTtcblxuICAgIH1cblxufVxuIl19