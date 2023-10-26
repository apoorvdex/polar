"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StringBuffer {
    constructor() {
        this.backing = [];
    }
    append(...data) {
        this.backing.push(...data);
        return this;
    }
    toString() {
        return this.backing.join('');
    }
}
exports.StringBuffer = StringBuffer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RyaW5nQnVmZmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU3RyaW5nQnVmZmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBS0EsTUFBYSxZQUFZO0lBQXpCO1FBRXFCLFlBQU8sR0FBYSxFQUFFLENBQUM7SUFXNUMsQ0FBQztJQVRVLE1BQU0sQ0FBQyxHQUFHLElBQWM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUMzQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sUUFBUTtRQUNYLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDakMsQ0FBQztDQUVKO0FBYkQsb0NBYUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFNpbXBsZSB3YXkgdG8gYnVpbGQgbGFyZ2Ugc3RyaW5ncyB1c2luZyBhIGJ1ZmZlciBhbmQgdGhlbiBqb2luIGF0IHRoZSBlbmQuXG4gKlxuICogTm90IHN1cmUgdGhpcyBpcyAxMDAlIG5lZWRlZCBpbiAyMDE4IEphdmFzY3JpcHQgdGhvdWdoLlxuICovXG5leHBvcnQgY2xhc3MgU3RyaW5nQnVmZmVyIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgYmFja2luZzogc3RyaW5nW10gPSBbXTtcblxuICAgIHB1YmxpYyBhcHBlbmQoLi4uZGF0YTogc3RyaW5nW10pOiB0aGlzIHtcbiAgICAgICAgdGhpcy5iYWNraW5nLnB1c2goLi4uZGF0YSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5iYWNraW5nLmpvaW4oJycpO1xuICAgIH1cblxufSJdfQ==