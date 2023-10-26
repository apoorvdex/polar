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
const Flashcard_1 = require("../Flashcard");
const Strings_1 = require("../../util/Strings");
class JSONExporter extends AbstractExporter_1.AbstractExporter {
    constructor() {
        super(...arguments);
        this.id = 'json';
        this.hasItem = false;
    }
    init(writer) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            yield _super("init").call(this, writer);
            yield writer.write("{\n");
            yield writer.write("  \"version\": 1,\n");
            yield writer.write("  \"items\": [\n");
        });
    }
    onItem() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.hasItem) {
                yield this.writer.write(",\n");
            }
            this.hasItem = true;
        });
    }
    writeAreaHighlight(areaHighlight, exportable) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.onItem();
            yield this.writer.write(this.toRecord(areaHighlight));
        });
    }
    writeTextHighlight(textHighlight, exportable) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.onItem();
            yield this.writer.write(this.toRecord(textHighlight));
        });
    }
    writeComment(comment, exportable) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.onItem();
            yield this.writer.write(this.toRecord(comment));
        });
    }
    writeFlashcard(flashcard, exportable) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.onItem();
            yield this.writer.write(this.toRecord(Flashcard_1.Flashcard));
        });
    }
    close(err) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            yield this.writer.write("\n  ]\n");
            yield this.writer.write("\n}\n");
            return _super("close").call(this, err);
        });
    }
    toRecord(obj) {
        return Strings_1.Strings.indent(JSON.stringify(obj, null, "  "), "    ");
    }
}
exports.JSONExporter = JSONExporter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSlNPTkV4cG9ydGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSlNPTkV4cG9ydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFJQSx5REFBb0Q7QUFDcEQsNENBQXVDO0FBR3ZDLGdEQUEyQztBQUUzQyxNQUFhLFlBQWEsU0FBUSxtQ0FBZ0I7SUFBbEQ7O1FBRW9CLE9BQUUsR0FBVyxNQUFNLENBQUM7UUFFNUIsWUFBTyxHQUFZLEtBQUssQ0FBQztJQXFEckMsQ0FBQztJQW5EZ0IsSUFBSSxDQUFDLE1BQWdCOzs7WUFDOUIsTUFBTSxjQUFVLFlBQUMsTUFBTSxDQUFDLENBQUM7WUFFekIsTUFBTSxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFCLE1BQU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRTNDLENBQUM7S0FBQTtJQUVhLE1BQU07O1lBRWhCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDZCxNQUFNLElBQUksQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ25DO1lBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFFeEIsQ0FBQztLQUFBO0lBRWUsa0JBQWtCLENBQUMsYUFBNEIsRUFBRSxVQUE0Qjs7WUFDekYsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDcEIsTUFBTSxJQUFJLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDM0QsQ0FBQztLQUFBO0lBRWUsa0JBQWtCLENBQUMsYUFBNEIsRUFBRSxVQUE0Qjs7WUFDekYsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDcEIsTUFBTSxJQUFJLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDM0QsQ0FBQztLQUFBO0lBRWUsWUFBWSxDQUFDLE9BQWdCLEVBQUUsVUFBNEI7O1lBQ3ZFLE1BQU0sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3BCLE1BQU0sSUFBSSxDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3JELENBQUM7S0FBQTtJQUVlLGNBQWMsQ0FBQyxTQUFvQixFQUFFLFVBQTRCOztZQUM3RSxNQUFNLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNwQixNQUFNLElBQUksQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMscUJBQVMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsQ0FBQztLQUFBO0lBRVksS0FBSyxDQUFDLEdBQVc7OztZQUUxQixNQUFNLElBQUksQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sSUFBSSxDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFbEMsT0FBTyxlQUFXLFlBQUMsR0FBRyxFQUFFO1FBQzVCLENBQUM7S0FBQTtJQUVPLFFBQVEsQ0FBQyxHQUFRO1FBQ3JCLE9BQU8saUJBQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ25FLENBQUM7Q0FFSjtBQXpERCxvQ0F5REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1dyaXRhYmxlfSBmcm9tIFwiLi9FeHBvcnRlcnNcIjtcbmltcG9ydCB7QW5ub3RhdGlvbkhvbGRlcn0gZnJvbSBcIi4uL0Fubm90YXRpb25Ib2xkZXJcIjtcbmltcG9ydCB7VGV4dEhpZ2hsaWdodH0gZnJvbSBcIi4uL1RleHRIaWdobGlnaHRcIjtcbmltcG9ydCB7QXJlYUhpZ2hsaWdodH0gZnJvbSAnLi4vQXJlYUhpZ2hsaWdodCc7XG5pbXBvcnQge0Fic3RyYWN0RXhwb3J0ZXJ9IGZyb20gJy4vQWJzdHJhY3RFeHBvcnRlcic7XG5pbXBvcnQge0ZsYXNoY2FyZH0gZnJvbSAnLi4vRmxhc2hjYXJkJztcbmltcG9ydCB7Q29tbWVudH0gZnJvbSAnLi4vQ29tbWVudCc7XG5pbXBvcnQge1RleHRzfSBmcm9tIFwiLi4vVGV4dHNcIjtcbmltcG9ydCB7U3RyaW5nc30gZnJvbSBcIi4uLy4uL3V0aWwvU3RyaW5nc1wiO1xuXG5leHBvcnQgY2xhc3MgSlNPTkV4cG9ydGVyIGV4dGVuZHMgQWJzdHJhY3RFeHBvcnRlciB7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgaWQ6IHN0cmluZyA9ICdqc29uJztcblxuICAgIHByaXZhdGUgaGFzSXRlbTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHVibGljIGFzeW5jIGluaXQod3JpdGVyOiBXcml0YWJsZSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCBzdXBlci5pbml0KHdyaXRlcik7XG5cbiAgICAgICAgYXdhaXQgd3JpdGVyLndyaXRlKFwie1xcblwiKTtcbiAgICAgICAgYXdhaXQgd3JpdGVyLndyaXRlKFwiICBcXFwidmVyc2lvblxcXCI6IDEsXFxuXCIpO1xuICAgICAgICBhd2FpdCB3cml0ZXIud3JpdGUoXCIgIFxcXCJpdGVtc1xcXCI6IFtcXG5cIik7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIG9uSXRlbSgpIHtcblxuICAgICAgICBpZiAodGhpcy5oYXNJdGVtKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLndyaXRlciEud3JpdGUoXCIsXFxuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oYXNJdGVtID0gdHJ1ZTtcblxuICAgIH1cblxuICAgIHByb3RlY3RlZCBhc3luYyB3cml0ZUFyZWFIaWdobGlnaHQoYXJlYUhpZ2hsaWdodDogQXJlYUhpZ2hsaWdodCwgZXhwb3J0YWJsZTogQW5ub3RhdGlvbkhvbGRlcik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCB0aGlzLm9uSXRlbSgpO1xuICAgICAgICBhd2FpdCB0aGlzLndyaXRlciEud3JpdGUodGhpcy50b1JlY29yZChhcmVhSGlnaGxpZ2h0KSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFzeW5jIHdyaXRlVGV4dEhpZ2hsaWdodCh0ZXh0SGlnaGxpZ2h0OiBUZXh0SGlnaGxpZ2h0LCBleHBvcnRhYmxlOiBBbm5vdGF0aW9uSG9sZGVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGF3YWl0IHRoaXMub25JdGVtKCk7XG4gICAgICAgIGF3YWl0IHRoaXMud3JpdGVyIS53cml0ZSh0aGlzLnRvUmVjb3JkKHRleHRIaWdobGlnaHQpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYXN5bmMgd3JpdGVDb21tZW50KGNvbW1lbnQ6IENvbW1lbnQsIGV4cG9ydGFibGU6IEFubm90YXRpb25Ib2xkZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5vbkl0ZW0oKTtcbiAgICAgICAgYXdhaXQgdGhpcy53cml0ZXIhLndyaXRlKHRoaXMudG9SZWNvcmQoY29tbWVudCkpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhc3luYyB3cml0ZUZsYXNoY2FyZChmbGFzaGNhcmQ6IEZsYXNoY2FyZCwgZXhwb3J0YWJsZTogQW5ub3RhdGlvbkhvbGRlcik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCB0aGlzLm9uSXRlbSgpO1xuICAgICAgICBhd2FpdCB0aGlzLndyaXRlciEud3JpdGUodGhpcy50b1JlY29yZChGbGFzaGNhcmQpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY2xvc2UoZXJyPzogRXJyb3IpOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgICAgICBhd2FpdCB0aGlzLndyaXRlciEud3JpdGUoXCJcXG4gIF1cXG5cIik7XG4gICAgICAgIGF3YWl0IHRoaXMud3JpdGVyIS53cml0ZShcIlxcbn1cXG5cIik7XG5cbiAgICAgICAgcmV0dXJuIHN1cGVyLmNsb3NlKGVycik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0b1JlY29yZChvYmo6IGFueSkge1xuICAgICAgICByZXR1cm4gU3RyaW5ncy5pbmRlbnQoSlNPTi5zdHJpbmdpZnkob2JqLCBudWxsLCBcIiAgXCIpLCBcIiAgICBcIik7XG4gICAgfVxuXG59XG4iXX0=