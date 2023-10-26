"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AnnotationPointer_1 = require("./AnnotationPointer");
class AnnotationPointers {
    static toAnnotationPointers(selector, triggerEvent) {
        let result = [];
        triggerEvent.matchingSelectors[selector].annotationDescriptors.forEach(annotationDescriptor => {
            let annotationPointer = new AnnotationPointer_1.AnnotationPointer(annotationDescriptor.id, annotationDescriptor.pageNum);
            result.push(annotationPointer);
        });
        return result;
    }
}
exports.AnnotationPointers = AnnotationPointers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ub3RhdGlvblBvaW50ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQW5ub3RhdGlvblBvaW50ZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsMkRBQXNEO0FBR3RELE1BQWEsa0JBQWtCO0lBSzNCLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxRQUFnQixFQUFFLFlBQTBCO1FBRXBFLElBQUksTUFBTSxHQUF3QixFQUFFLENBQUM7UUFHckMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFO1lBRTFGLElBQUksaUJBQWlCLEdBQUcsSUFBSSxxQ0FBaUIsQ0FDekMsb0JBQW9CLENBQUMsRUFBRSxFQUN2QixvQkFBb0IsQ0FBQyxPQUFPLENBQy9CLENBQUM7WUFFRixNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFbkMsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLE1BQU0sQ0FBQztJQUVsQixDQUFDO0NBRUo7QUF6QkQsZ0RBeUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUcmlnZ2VyRXZlbnR9IGZyb20gJy4uL2NvbnRleHRtZW51L1RyaWdnZXJFdmVudCc7XG5pbXBvcnQge0Fubm90YXRpb25Qb2ludGVyfSBmcm9tICcuL0Fubm90YXRpb25Qb2ludGVyJztcblxuXG5leHBvcnQgY2xhc3MgQW5ub3RhdGlvblBvaW50ZXJzIHtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgc3RhdGljIHRvQW5ub3RhdGlvblBvaW50ZXJzKHNlbGVjdG9yOiBzdHJpbmcsIHRyaWdnZXJFdmVudDogVHJpZ2dlckV2ZW50KSB7XG5cbiAgICAgICAgbGV0IHJlc3VsdDogQW5ub3RhdGlvblBvaW50ZXJbXSA9IFtdO1xuXG4gICAgICAgIC8vIHNob3VsZCB3ZSBqdXN0IHNlbmQgdGhpcyBldmVudCB0byBhbGwgdGhlIHRoZSB3aW5kb3dzP1xuICAgICAgICB0cmlnZ2VyRXZlbnQubWF0Y2hpbmdTZWxlY3RvcnNbc2VsZWN0b3JdLmFubm90YXRpb25EZXNjcmlwdG9ycy5mb3JFYWNoKGFubm90YXRpb25EZXNjcmlwdG9yID0+IHtcblxuICAgICAgICAgICAgbGV0IGFubm90YXRpb25Qb2ludGVyID0gbmV3IEFubm90YXRpb25Qb2ludGVyKFxuICAgICAgICAgICAgICAgIGFubm90YXRpb25EZXNjcmlwdG9yLmlkLFxuICAgICAgICAgICAgICAgIGFubm90YXRpb25EZXNjcmlwdG9yLnBhZ2VOdW0sXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICByZXN1bHQucHVzaChhbm5vdGF0aW9uUG9pbnRlcik7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cblxufVxuIl19