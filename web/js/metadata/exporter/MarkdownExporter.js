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
const AbstractExporter_1 = require("./AbstractExporter");
const Texts_1 = require("../Texts");
class MarkdownExporter extends AbstractExporter_1.AbstractExporter {
    constructor() {
        super(...arguments);
        this.id = 'markdown';
    }
    writeAreaHighlight(areaHighlight, exportable) {
        return __awaiter(this, void 0, void 0, function* () {
            const output = `created: ${areaHighlight.created}\n` +
                `color: ${areaHighlight.color || ''}\n` +
                `type: area-highlight\n`;
            yield this.writer.write(output);
        });
    }
    pageInfoToText(pageInfo) {
        if (!pageInfo) {
            return "";
        }
        return `page: ${pageInfo.num}\n`;
    }
    writeTextHighlight(textHighlight, exportable) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.writer.write(this.pageInfoToText(exportable.pageInfo));
            const output = `created: ${textHighlight.created}\n` +
                `color: ${textHighlight.color || ''}\n` +
                `type: text-highlight\n`;
            yield this.writer.write(output);
            const body = Texts_1.Texts.toString(textHighlight.text);
            if (body) {
                yield this.writer.write(body);
                yield this.writer.write('\n');
            }
        });
    }
    writeComment(comment, exportable) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.writer.write(this.pageInfoToText(exportable.pageInfo));
            const output = `created: ${comment.created}\n` +
                `type: comment\n`;
            yield this.writer.write(output);
            const body = Texts_1.Texts.toString(comment.content);
            if (body) {
                yield this.writer.write(body);
                yield this.writer.write('\n');
            }
        });
    }
    writeFlashcard(flashcard, exportable) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.writer.write(this.pageInfoToText(exportable.pageInfo));
            for (const fieldName of Object.keys(flashcard.fields)) {
                const output = `created: ${flashcard.created}\n` +
                    `type: flashcard\n`;
                yield this.writer.write(output);
                const field = flashcard.fields[fieldName];
                yield this.writer.write(`${fieldName}: ` + Texts_1.Texts.toString(field));
                yield this.writer.write('\n');
            }
        });
    }
}
exports.MarkdownExporter = MarkdownExporter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFya2Rvd25FeHBvcnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1hcmtkb3duRXhwb3J0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUlBLHlEQUFvRDtBQUdwRCxvQ0FBK0I7QUFJL0IsTUFBYSxnQkFBaUIsU0FBUSxtQ0FBZ0I7SUFBdEQ7O1FBRW9CLE9BQUUsR0FBVyxVQUFVLENBQUM7SUF1RjVDLENBQUM7SUFyRm1CLGtCQUFrQixDQUFDLGFBQTRCLEVBQUUsVUFBNEI7O1lBR3pGLE1BQU0sTUFBTSxHQUNSLFlBQVksYUFBYSxDQUFDLE9BQU8sSUFBSTtnQkFDckMsVUFBVSxhQUFhLENBQUMsS0FBSyxJQUFJLEVBQUUsSUFBSTtnQkFDdkMsd0JBQXdCLENBQ3ZCO1lBRUwsTUFBTSxJQUFJLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVyQyxDQUFDO0tBQUE7SUFFUyxjQUFjLENBQUMsUUFBbUI7UUFFeEMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNYLE9BQU8sRUFBRSxDQUFDO1NBQ2I7UUFFRCxPQUFPLFNBQVMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3JDLENBQUM7SUFFZSxrQkFBa0IsQ0FBQyxhQUE0QixFQUFFLFVBQTRCOztZQUV6RixNQUFNLElBQUksQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFFbkUsTUFBTSxNQUFNLEdBQ1IsWUFBWSxhQUFhLENBQUMsT0FBTyxJQUFJO2dCQUNyQyxVQUFVLGFBQWEsQ0FBQyxLQUFLLElBQUksRUFBRSxJQUFJO2dCQUN2Qyx3QkFBd0IsQ0FDdkI7WUFFTCxNQUFNLElBQUksQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRWpDLE1BQU0sSUFBSSxHQUFHLGFBQUssQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRWhELElBQUksSUFBSSxFQUFFO2dCQUNOLE1BQU0sSUFBSSxDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQy9CLE1BQU0sSUFBSSxDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbEM7UUFFTCxDQUFDO0tBQUE7SUFFZSxZQUFZLENBQUMsT0FBZ0IsRUFBRSxVQUE0Qjs7WUFFdkUsTUFBTSxJQUFJLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBRW5FLE1BQU0sTUFBTSxHQUNSLFlBQVksT0FBTyxDQUFDLE9BQU8sSUFBSTtnQkFDL0IsaUJBQWlCLENBQ3BCO1lBRUQsTUFBTSxJQUFJLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVqQyxNQUFNLElBQUksR0FBRyxhQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUU3QyxJQUFJLElBQUksRUFBRTtnQkFDTixNQUFNLElBQUksQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMvQixNQUFNLElBQUksQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2xDO1FBRUwsQ0FBQztLQUFBO0lBRWUsY0FBYyxDQUFDLFNBQW9CLEVBQUUsVUFBNEI7O1lBRTdFLE1BQU0sSUFBSSxDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUVuRSxLQUFLLE1BQU0sU0FBUyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUVuRCxNQUFNLE1BQU0sR0FDUixZQUFZLFNBQVMsQ0FBQyxPQUFPLElBQUk7b0JBQ2pDLG1CQUFtQixDQUN0QjtnQkFFRCxNQUFNLElBQUksQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUVqQyxNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUUxQyxNQUFNLElBQUksQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsU0FBUyxJQUFJLEdBQUcsYUFBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNuRSxNQUFNLElBQUksQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBRWxDO1FBRUwsQ0FBQztLQUFBO0NBRUo7QUF6RkQsNENBeUZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtXcml0YWJsZX0gZnJvbSBcIi4vRXhwb3J0ZXJzXCI7XG5pbXBvcnQge0Fubm90YXRpb25Ib2xkZXJ9IGZyb20gXCIuLi9Bbm5vdGF0aW9uSG9sZGVyXCI7XG5pbXBvcnQge1RleHRIaWdobGlnaHR9IGZyb20gXCIuLi9UZXh0SGlnaGxpZ2h0XCI7XG5pbXBvcnQge0FyZWFIaWdobGlnaHR9IGZyb20gJy4uL0FyZWFIaWdobGlnaHQnO1xuaW1wb3J0IHtBYnN0cmFjdEV4cG9ydGVyfSBmcm9tICcuL0Fic3RyYWN0RXhwb3J0ZXInO1xuaW1wb3J0IHtGbGFzaGNhcmR9IGZyb20gJy4uL0ZsYXNoY2FyZCc7XG5pbXBvcnQge0NvbW1lbnR9IGZyb20gJy4uL0NvbW1lbnQnO1xuaW1wb3J0IHtUZXh0c30gZnJvbSBcIi4uL1RleHRzXCI7XG5pbXBvcnQge1BhZ2VJbmZvfSBmcm9tICcuLi9QYWdlSW5mbyc7XG5pbXBvcnQge09wdGlvbmFsfSBmcm9tIFwiLi4vLi4vdXRpbC90cy9PcHRpb25hbFwiO1xuXG5leHBvcnQgY2xhc3MgTWFya2Rvd25FeHBvcnRlciBleHRlbmRzIEFic3RyYWN0RXhwb3J0ZXIge1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGlkOiBzdHJpbmcgPSAnbWFya2Rvd24nO1xuXG4gICAgcHJvdGVjdGVkIGFzeW5jIHdyaXRlQXJlYUhpZ2hsaWdodChhcmVhSGlnaGxpZ2h0OiBBcmVhSGlnaGxpZ2h0LCBleHBvcnRhYmxlOiBBbm5vdGF0aW9uSG9sZGVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIC8vIG5vb3BcblxuICAgICAgICBjb25zdCBvdXRwdXQgPVxuICAgICAgICAgICAgYGNyZWF0ZWQ6ICR7YXJlYUhpZ2hsaWdodC5jcmVhdGVkfVxcbmAgK1xuICAgICAgICAgICAgYGNvbG9yOiAke2FyZWFIaWdobGlnaHQuY29sb3IgfHwgJyd9XFxuYCArXG4gICAgICAgICAgICBgdHlwZTogYXJlYS1oaWdobGlnaHRcXG5gXG4gICAgICAgICAgICA7XG5cbiAgICAgICAgYXdhaXQgdGhpcy53cml0ZXIhLndyaXRlKG91dHB1dCk7XG5cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcGFnZUluZm9Ub1RleHQocGFnZUluZm8/OiBQYWdlSW5mbyk6IHN0cmluZyB7XG5cbiAgICAgICAgaWYgKCFwYWdlSW5mbykge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYHBhZ2U6ICR7cGFnZUluZm8ubnVtfVxcbmA7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFzeW5jIHdyaXRlVGV4dEhpZ2hsaWdodCh0ZXh0SGlnaGxpZ2h0OiBUZXh0SGlnaGxpZ2h0LCBleHBvcnRhYmxlOiBBbm5vdGF0aW9uSG9sZGVyKTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICAgICAgYXdhaXQgdGhpcy53cml0ZXIhLndyaXRlKHRoaXMucGFnZUluZm9Ub1RleHQoZXhwb3J0YWJsZS5wYWdlSW5mbykpO1xuXG4gICAgICAgIGNvbnN0IG91dHB1dCA9XG4gICAgICAgICAgICBgY3JlYXRlZDogJHt0ZXh0SGlnaGxpZ2h0LmNyZWF0ZWR9XFxuYCArXG4gICAgICAgICAgICBgY29sb3I6ICR7dGV4dEhpZ2hsaWdodC5jb2xvciB8fCAnJ31cXG5gICtcbiAgICAgICAgICAgIGB0eXBlOiB0ZXh0LWhpZ2hsaWdodFxcbmBcbiAgICAgICAgICAgIDtcblxuICAgICAgICBhd2FpdCB0aGlzLndyaXRlciEud3JpdGUob3V0cHV0KTtcblxuICAgICAgICBjb25zdCBib2R5ID0gVGV4dHMudG9TdHJpbmcodGV4dEhpZ2hsaWdodC50ZXh0KTtcblxuICAgICAgICBpZiAoYm9keSkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy53cml0ZXIhLndyaXRlKGJvZHkpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy53cml0ZXIhLndyaXRlKCdcXG4nKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFzeW5jIHdyaXRlQ29tbWVudChjb21tZW50OiBDb21tZW50LCBleHBvcnRhYmxlOiBBbm5vdGF0aW9uSG9sZGVyKTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICAgICAgYXdhaXQgdGhpcy53cml0ZXIhLndyaXRlKHRoaXMucGFnZUluZm9Ub1RleHQoZXhwb3J0YWJsZS5wYWdlSW5mbykpO1xuXG4gICAgICAgIGNvbnN0IG91dHB1dCA9XG4gICAgICAgICAgICBgY3JlYXRlZDogJHtjb21tZW50LmNyZWF0ZWR9XFxuYCArXG4gICAgICAgICAgICBgdHlwZTogY29tbWVudFxcbmBcbiAgICAgICAgO1xuXG4gICAgICAgIGF3YWl0IHRoaXMud3JpdGVyIS53cml0ZShvdXRwdXQpO1xuXG4gICAgICAgIGNvbnN0IGJvZHkgPSBUZXh0cy50b1N0cmluZyhjb21tZW50LmNvbnRlbnQpO1xuXG4gICAgICAgIGlmIChib2R5KSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLndyaXRlciEud3JpdGUoYm9keSk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLndyaXRlciEud3JpdGUoJ1xcbicpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYXN5bmMgd3JpdGVGbGFzaGNhcmQoZmxhc2hjYXJkOiBGbGFzaGNhcmQsIGV4cG9ydGFibGU6IEFubm90YXRpb25Ib2xkZXIpOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgICAgICBhd2FpdCB0aGlzLndyaXRlciEud3JpdGUodGhpcy5wYWdlSW5mb1RvVGV4dChleHBvcnRhYmxlLnBhZ2VJbmZvKSk7XG5cbiAgICAgICAgZm9yIChjb25zdCBmaWVsZE5hbWUgb2YgT2JqZWN0LmtleXMoZmxhc2hjYXJkLmZpZWxkcykpIHtcblxuICAgICAgICAgICAgY29uc3Qgb3V0cHV0ID1cbiAgICAgICAgICAgICAgICBgY3JlYXRlZDogJHtmbGFzaGNhcmQuY3JlYXRlZH1cXG5gICtcbiAgICAgICAgICAgICAgICBgdHlwZTogZmxhc2hjYXJkXFxuYFxuICAgICAgICAgICAgO1xuXG4gICAgICAgICAgICBhd2FpdCB0aGlzLndyaXRlciEud3JpdGUob3V0cHV0KTtcblxuICAgICAgICAgICAgY29uc3QgZmllbGQgPSBmbGFzaGNhcmQuZmllbGRzW2ZpZWxkTmFtZV07XG5cbiAgICAgICAgICAgIGF3YWl0IHRoaXMud3JpdGVyIS53cml0ZShgJHtmaWVsZE5hbWV9OiBgICsgVGV4dHMudG9TdHJpbmcoZmllbGQpKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMud3JpdGVyIS53cml0ZSgnXFxuJyk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG4iXX0=