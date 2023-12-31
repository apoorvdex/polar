"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = require("./Text");
const Preconditions_1 = require("../Preconditions");
class Texts {
    static create(body, type) {
        const text = new Text_1.Text();
        text[type] = body;
        return Object.freeze(text);
    }
    static toPlainText(text) {
        if (text && this.isText(text)) {
            text = text;
            if (text.TEXT) {
                return text.TEXT;
            }
            if (text.MARKDOWN) {
                return text.MARKDOWN;
            }
            if (text.HTML) {
                const div = document.createElement('div');
                div.innerHTML = text.HTML;
                return div.innerText;
            }
        }
        if (typeof text === 'string') {
            return text;
        }
        return undefined;
    }
    static toString(text) {
        if (text && this.isText(text)) {
            text = text;
            if (text.TEXT) {
                return text.TEXT;
            }
            if (text.MARKDOWN) {
                return text.MARKDOWN;
            }
            if (text.HTML) {
                return text.MARKDOWN;
            }
        }
        if (typeof text === 'string') {
            return text;
        }
        return undefined;
    }
    static isText(text) {
        if (text) {
            return Preconditions_1.isPresent(text.MARKDOWN) || Preconditions_1.isPresent(text.HTML) || Preconditions_1.isPresent(text.TEXT);
        }
        return false;
    }
}
exports.Texts = Texts;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUZXh0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUE0QjtBQUU1QixvREFBMkM7QUFFM0MsTUFBYSxLQUFLO0lBRVAsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFZLEVBQUUsSUFBYztRQUs3QyxNQUFNLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDbEIsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRS9CLENBQUM7SUFNTSxNQUFNLENBQUMsV0FBVyxDQUFDLElBQW9CO1FBRTFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFFM0IsSUFBSSxHQUFVLElBQUksQ0FBQztZQUVuQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ3BCO1lBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNmLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUN4QjtZQUVELElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDWCxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMxQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQzFCLE9BQU8sR0FBRyxDQUFDLFNBQVMsQ0FBQzthQUN4QjtTQUVKO1FBRUQsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDMUIsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELE9BQU8sU0FBUyxDQUFDO0lBRXJCLENBQUM7SUFLTSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQW9CO1FBRXZDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFFM0IsSUFBSSxHQUFVLElBQUksQ0FBQztZQUVuQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ3BCO1lBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNmLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUN4QjtZQUVELElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDWCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDeEI7U0FFSjtRQUVELElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzFCLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFFRCxPQUFPLFNBQVMsQ0FBQztJQUVyQixDQUFDO0lBRU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFVO1FBRTNCLElBQUksSUFBSSxFQUFFO1lBRU4sT0FBTyx5QkFBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSx5QkFBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSx5QkFBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUVuRjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBRWpCLENBQUM7Q0FFSjtBQTFGRCxzQkEwRkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RleHR9IGZyb20gJy4vVGV4dCc7XG5pbXBvcnQge1RleHRUeXBlfSBmcm9tICcuL1RleHRUeXBlJztcbmltcG9ydCB7aXNQcmVzZW50fSBmcm9tICcuLi9QcmVjb25kaXRpb25zJztcblxuZXhwb3J0IGNsYXNzIFRleHRzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKGJvZHk6IHN0cmluZywgdHlwZTogVGV4dFR5cGUpOiBUZXh0IHtcblxuICAgICAgICAvLyBUT0RPOiBpZiB0aGlzIGlzIG1hcmtkb3duLCBhbmQgd2UgZG9uJ3QgaGF2ZSB0aGUgSFRNTCB2ZXJzaW9uLFxuICAgICAgICAvLyB3ZSBuZWVkIHRvIGFkZCB0aGUgSFRNTCB2ZXJzaW9uIGJ5IGNvbnZlcnRpbmcgdGhlIG1hcmtkb3duIHRvIEhUTUwuXG5cbiAgICAgICAgY29uc3QgdGV4dCA9IG5ldyBUZXh0KCk7XG4gICAgICAgIHRleHRbdHlwZV0gPSBib2R5O1xuICAgICAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh0ZXh0KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgc29tZXdoYXQgY29uZnVzaW5nIGJ1dCB0YWtlIGEgVGV4dCBvYmplY3QgYW5kIGNvbnZlcnQgaXQgdG8gYVxuICAgICAqIHBsYWluIHRleHQgc3RyaW5nIHdpdGggbm8gSFRNTCBmb3JtYXR0aW5nLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgdG9QbGFpblRleHQodGV4dD86IFRleHQgfCBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuXG4gICAgICAgIGlmICh0ZXh0ICYmIHRoaXMuaXNUZXh0KHRleHQpKSB7XG5cbiAgICAgICAgICAgIHRleHQgPSA8VGV4dD4gdGV4dDtcblxuICAgICAgICAgICAgaWYgKHRleHQuVEVYVCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0LlRFWFQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0ZXh0Lk1BUktET1dOKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRleHQuTUFSS0RPV047XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0ZXh0LkhUTUwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gdGV4dC5IVE1MO1xuICAgICAgICAgICAgICAgIHJldHVybiBkaXYuaW5uZXJUZXh0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHRleHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGZpcnN0IGZpZWxkIGZyb20gdGhlIHRleHQgb2JqZWN0IG9yIHRoZSBzdHJpbmcgdmFsdWUuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyB0b1N0cmluZyh0ZXh0PzogVGV4dCB8IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG5cbiAgICAgICAgaWYgKHRleHQgJiYgdGhpcy5pc1RleHQodGV4dCkpIHtcblxuICAgICAgICAgICAgdGV4dCA9IDxUZXh0PiB0ZXh0O1xuXG4gICAgICAgICAgICBpZiAodGV4dC5URVhUKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRleHQuVEVYVDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRleHQuTUFSS0RPV04pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGV4dC5NQVJLRE9XTjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRleHQuSFRNTCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0Lk1BUktET1dOO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHRleHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGlzVGV4dCh0ZXh0PzogYW55KTogYm9vbGVhbiB7XG5cbiAgICAgICAgaWYgKHRleHQpIHtcblxuICAgICAgICAgICAgcmV0dXJuIGlzUHJlc2VudCh0ZXh0Lk1BUktET1dOKSB8fCBpc1ByZXNlbnQodGV4dC5IVE1MKSB8fCBpc1ByZXNlbnQodGV4dC5URVhUKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgfVxuXG59XG5cbiJdfQ==