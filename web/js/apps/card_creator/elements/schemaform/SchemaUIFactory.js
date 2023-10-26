"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TextWidget_1 = require("./TextWidget");
class SchemaUIFactory {
    static create() {
        return {
            front: {
                "ui:widget": TextWidget_1.TextWidget,
            },
            back: {
                "ui:widget": TextWidget_1.TextWidget,
            }
        };
    }
}
exports.SchemaUIFactory = SchemaUIFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NoZW1hVUlGYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU2NoZW1hVUlGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQXdDO0FBRXhDLE1BQWEsZUFBZTtJQUV4QixNQUFNLENBQUMsTUFBTTtRQUVULE9BQU87WUFFSCxLQUFLLEVBQUU7Z0JBQ0gsV0FBVyxFQUFFLHVCQUFVO2FBQzFCO1lBQ0QsSUFBSSxFQUFFO2dCQUNGLFdBQVcsRUFBRSx1QkFBVTthQUMxQjtTQUVKLENBQUM7SUFFTixDQUFDO0NBRUo7QUFqQkQsMENBaUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUZXh0V2lkZ2V0fSBmcm9tICcuL1RleHRXaWRnZXQnO1xuXG5leHBvcnQgY2xhc3MgU2NoZW1hVUlGYWN0b3J5IHtcblxuICAgIHN0YXRpYyBjcmVhdGUoKTogYW55IHtcblxuICAgICAgICByZXR1cm4ge1xuXG4gICAgICAgICAgICBmcm9udDoge1xuICAgICAgICAgICAgICAgIFwidWk6d2lkZ2V0XCI6IFRleHRXaWRnZXQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmFjazoge1xuICAgICAgICAgICAgICAgIFwidWk6d2lkZ2V0XCI6IFRleHRXaWRnZXQsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgIH1cblxufVxuIl19