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
const AnnotationType_1 = require("../AnnotationType");
class AbstractExporter {
    init(writer) {
        return __awaiter(this, void 0, void 0, function* () {
            this.writer = writer;
        });
    }
    write(exportable) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (exportable.type) {
                case AnnotationType_1.AnnotationType.TEXT_HIGHLIGHT:
                    yield this.writeTextHighlight(exportable.annotation, exportable);
                    break;
                case AnnotationType_1.AnnotationType.AREA_HIGHLIGHT:
                    yield this.writeAreaHighlight(exportable.annotation, exportable);
                    break;
                case AnnotationType_1.AnnotationType.COMMENT:
                    yield this.writeComment(exportable.annotation, exportable);
                    break;
                case AnnotationType_1.AnnotationType.FLASHCARD:
                    yield this.writeFlashcard(exportable.annotation, exportable);
                    break;
            }
        });
    }
    close(err) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.AbstractExporter = AbstractExporter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3RFeHBvcnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFic3RyYWN0RXhwb3J0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU1BLHNEQUFpRDtBQUVqRCxNQUFzQixnQkFBZ0I7SUFNckIsSUFBSSxDQUFDLE1BQWdCOztZQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN6QixDQUFDO0tBQUE7SUFFWSxLQUFLLENBQUMsVUFBNEI7O1lBRTNDLFFBQVEsVUFBVSxDQUFDLElBQUksRUFBRTtnQkFFckIsS0FBSywrQkFBYyxDQUFDLGNBQWM7b0JBQzlCLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFpQixVQUFVLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO29CQUNqRixNQUFNO2dCQUVWLEtBQUssK0JBQWMsQ0FBQyxjQUFjO29CQUM5QixNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBaUIsVUFBVSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztvQkFDakYsTUFBTTtnQkFFVixLQUFLLCtCQUFjLENBQUMsT0FBTztvQkFDdkIsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFXLFVBQVUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7b0JBQ3JFLE1BQU07Z0JBRVYsS0FBSywrQkFBYyxDQUFDLFNBQVM7b0JBQ3pCLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBYSxVQUFVLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO29CQUN6RSxNQUFNO2FBRWI7UUFFTCxDQUFDO0tBQUE7SUFjWSxLQUFLLENBQUMsR0FBVzs7UUFJOUIsQ0FBQztLQUFBO0NBRUo7QUFwREQsNENBb0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFeHBvcnRlciwgV3JpdGFibGV9IGZyb20gXCIuL0V4cG9ydGVyc1wiO1xuaW1wb3J0IHtBbm5vdGF0aW9uSG9sZGVyfSBmcm9tIFwiLi4vQW5ub3RhdGlvbkhvbGRlclwiO1xuaW1wb3J0IHtUZXh0SGlnaGxpZ2h0fSBmcm9tIFwiLi4vVGV4dEhpZ2hsaWdodFwiO1xuaW1wb3J0IHtBcmVhSGlnaGxpZ2h0fSBmcm9tICcuLi9BcmVhSGlnaGxpZ2h0JztcbmltcG9ydCB7Q29tbWVudH0gZnJvbSAnLi4vQ29tbWVudCc7XG5pbXBvcnQge0ZsYXNoY2FyZH0gZnJvbSAnLi4vRmxhc2hjYXJkJztcbmltcG9ydCB7QW5ub3RhdGlvblR5cGV9IGZyb20gJy4uL0Fubm90YXRpb25UeXBlJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0RXhwb3J0ZXIgaW1wbGVtZW50cyBFeHBvcnRlciB7XG5cbiAgICBwdWJsaWMgYWJzdHJhY3QgcmVhZG9ubHkgaWQ6IHN0cmluZztcblxuICAgIHByb3RlY3RlZCB3cml0ZXI/OiBXcml0YWJsZTtcblxuICAgIHB1YmxpYyBhc3luYyBpbml0KHdyaXRlcjogV3JpdGFibGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdGhpcy53cml0ZXIgPSB3cml0ZXI7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHdyaXRlKGV4cG9ydGFibGU6IEFubm90YXRpb25Ib2xkZXIpOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgICAgICBzd2l0Y2ggKGV4cG9ydGFibGUudHlwZSkge1xuXG4gICAgICAgICAgICBjYXNlIEFubm90YXRpb25UeXBlLlRFWFRfSElHSExJR0hUOlxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMud3JpdGVUZXh0SGlnaGxpZ2h0KDxUZXh0SGlnaGxpZ2h0PiBleHBvcnRhYmxlLmFubm90YXRpb24sIGV4cG9ydGFibGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIEFubm90YXRpb25UeXBlLkFSRUFfSElHSExJR0hUOlxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMud3JpdGVBcmVhSGlnaGxpZ2h0KDxBcmVhSGlnaGxpZ2h0PiBleHBvcnRhYmxlLmFubm90YXRpb24sIGV4cG9ydGFibGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIEFubm90YXRpb25UeXBlLkNPTU1FTlQ6XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy53cml0ZUNvbW1lbnQoPENvbW1lbnQ+IGV4cG9ydGFibGUuYW5ub3RhdGlvbiwgZXhwb3J0YWJsZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuRkxBU0hDQVJEOlxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMud3JpdGVGbGFzaGNhcmQoPEZsYXNoY2FyZD4gZXhwb3J0YWJsZS5hbm5vdGF0aW9uLCBleHBvcnRhYmxlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3Qgd3JpdGVUZXh0SGlnaGxpZ2h0KHRleHRIaWdobGlnaHQ6IFRleHRIaWdobGlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRhYmxlOiBBbm5vdGF0aW9uSG9sZGVyKTogUHJvbWlzZTx2b2lkPjtcblxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCB3cml0ZUFyZWFIaWdobGlnaHQoYXJlYUhpZ2hsaWdodDogQXJlYUhpZ2hsaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9ydGFibGU6IEFubm90YXRpb25Ib2xkZXIpOiBQcm9taXNlPHZvaWQ+O1xuXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHdyaXRlQ29tbWVudChjb21tZW50OiBDb21tZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0YWJsZTogQW5ub3RhdGlvbkhvbGRlcik6IFByb21pc2U8dm9pZD47XG5cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3Qgd3JpdGVGbGFzaGNhcmQoZmxhc2hjYXJkOiBGbGFzaGNhcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9ydGFibGU6IEFubm90YXRpb25Ib2xkZXIpOiBQcm9taXNlPHZvaWQ+O1xuXG4gICAgcHVibGljIGFzeW5jIGNsb3NlKGVycj86IEVycm9yKTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICAgICAgLy8gbm9vcFxuXG4gICAgfVxuXG59XG4iXX0=